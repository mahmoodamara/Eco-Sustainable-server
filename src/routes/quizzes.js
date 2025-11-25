// src/routes/quizzes.js
import { Router } from "express";
import { Quiz } from "../models/Quiz.js";
import { Question } from "../models/Question.js";
import { QuizResult } from "../models/QuizResult.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

const LEVELS_ORDER = ["easy", "medium", "hard"];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * GET /api/quizzes
 * اختياري: فلترة بـ topicKey
 */
router.get("/", async (req, res, next) => {
  try {
    const { topicKey } = req.query;
    const filter = {};
    if (topicKey) filter.topicKey = topicKey;

    const quizzes = await Quiz.find(filter).sort({ order: 1, createdAt: 1 });
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/quizzes/:key
 * يرجّع بيانات الكويز بدون أسئلة (معلومات عامة)
 */
router.get("/:key", async (req, res, next) => {
  try {
    const quiz = await Quiz.findOne({ key: req.params.key });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (err) {
    next(err);
  }
});

/**
 * ✅ GET /api/quizzes/:key/start
 * يرجّع حتى 10 أسئلة عشوائية + شَفل للخيارات
 * body من الفرونت لاحقًا يرسل selectedOptionIndex = index الأصلي للـ option
 */
router.get("/:key/start", authRequired, async (req, res, next) => {
  try {
    const quizKey = req.params.key;
    const quiz = await Quiz.findOne({ key: quizKey });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const { topicKey, level } = quiz;

    // ✅ لازم يكون مكمّل اختبار السلوك البيئي
    if (!req.user.behaviorCompleted) {
      return res.status(403).json({
        message: "Behavior test must be completed before taking quizzes.",
      });
    }

    // ✅ التحقق من صحة المستوى
    const levelIndex = LEVELS_ORDER.indexOf(level);
    if (levelIndex === -1) {
      return res.status(500).json({ message: "Invalid quiz level" });
    }

    // ✅ التحقق من فتح المستوى (medium / hard)
    let topicProgress = { easy: false, medium: false, hard: false };
    if (req.user.progress) {
      if (typeof req.user.progress.get === "function") {
        topicProgress = req.user.progress.get(topicKey) || topicProgress;
      } else if (req.user.progress[topicKey]) {
        topicProgress = req.user.progress[topicKey];
      }
    }

    if (level === "medium" && !topicProgress.easy) {
      return res.status(403).json({
        message: "You must pass the easy level first.",
      });
    }

    if (level === "hard" && !topicProgress.medium) {
      return res.status(403).json({
        message: "You must pass the medium level first.",
      });
    }

    // ✅ جلب الأسئلة لهذا الكويز
    let questions = await Question.find({ quizKey }).sort({
      createdAt: 1,
      order: 1,
    });

    if (!questions.length) {
      return res.status(404).json({ message: "No questions for this quiz" });
    }

    // نختار حتى 10 أسئلة عشوائية
    questions = shuffleArray(questions).slice(0, 10);

    /**
     * أهم نقطة:
     * لازم نحافظ على index الأصلي للـ option
     * علشان لما الفرونت يرجّع selectedOptionIndex
     * نقدر نطابقه مع question.options[originalIndex]
     */
    const payload = questions.map((q) => {
      const indices = q.options.map((_, idx) => idx);
      const shuffledIndices = shuffleArray(indices);

      const shuffledOptions = shuffledIndices.map((originalIndex) => ({
        // الـ index الأصلي اللي رح يرجّعه الفرونت
        index: originalIndex,
        text: q.options[originalIndex].text, // { ar, en, al }
      }));

      return {
        id: q._id.toString(),
        text: q.text, // { ar, en, al }
        options: shuffledOptions,
      };
    });

    return res.json({
      quiz: {
        key: quiz.key,
        topicKey: quiz.topicKey,
        level: quiz.level,
        title: quiz.title,
        description: quiz.description,
        estimatedMinutes: quiz.estimatedMinutes,
      },
      questions: payload,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * ✅ POST /api/quizzes/:key/submit
 * body: { answers: [{ questionId, selectedOptionIndex }] }
 *  - يحسب عدد الصح
 *  - يحدد passed (>= 7 من 10)
 *  - يخزّن QuizResult
 *  - يحدّث progress في User
 *  - يرجّع تقرير مفصّل
 */
router.post("/:key/submit", authRequired, async (req, res, next) => {
  try {
    const quizKey = req.params.key;
    const { answers } = req.body;

    if (!Array.isArray(answers) || !answers.length) {
      return res.status(400).json({ message: "Answers are required" });
    }

    const quiz = await Quiz.findOne({ key: quizKey });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const { topicKey, level } = quiz;

    // جلب كل أسئلة هذا الكويز
    const questions = await Question.find({ quizKey });
    if (!questions.length) {
      return res.status(404).json({ message: "No questions for this quiz" });
    }

    let correctCount = 0;
    const totalQuestions = answers.length;

    const detailedAnswers = answers
      .map((ans) => {
        const question = questions.find(
          (q) => q._id.toString() === ans.questionId
        );
        if (!question) return null;

        const selectedIndex = ans.selectedOptionIndex;

        // حماية: لو index خارج الحدود
        if (
          typeof selectedIndex !== "number" ||
          selectedIndex < 0 ||
          selectedIndex >= question.options.length
        ) {
          return {
            question,
            selectedOptionIndex: selectedIndex,
            isCorrect: false,
          };
        }

        const selectedOption = question.options[selectedIndex];
        const isCorrect = !!(selectedOption && selectedOption.isCorrect);
        if (isCorrect) correctCount++;

        return {
          question,
          selectedOptionIndex: selectedIndex,
          isCorrect,
        };
      })
      .filter(Boolean);

    const passed = correctCount >= 7;

    // ✅ حفظ النتيجة في QuizResult
    const quizResult = await QuizResult.create({
      user: req.user._id,
      quizKey,
      topicKey,
      level,
      totalQuestions,
      correctCount,
      passed,
      answers: detailedAnswers.map((a) => ({
        question: a.question._id,
        selectedOptionIndex: a.selectedOptionIndex,
        isCorrect: a.isCorrect,
      })),
    });

    // ✅ تحديث progress في User لو نجح
    if (passed) {
      let currentProgress = { easy: false, medium: false, hard: false };

      if (req.user.progress) {
        if (typeof req.user.progress.get === "function") {
          currentProgress = req.user.progress.get(topicKey) || currentProgress;
        } else if (req.user.progress[topicKey]) {
          currentProgress = req.user.progress[topicKey];
        }
      }

      currentProgress[level] = true; // easy / medium / hard

      if (req.user.progress && typeof req.user.progress.set === "function") {
        req.user.progress.set(topicKey, currentProgress);
      } else {
        // في حالة كانت Object عادي
        req.user.progress = {
          ...(req.user.progress || {}),
          [topicKey]: currentProgress,
        };
      }

      await req.user.save();
    }

    // ✅ تجهيز تقرير مفصّل للـ frontend
    const reportQuestions = detailedAnswers.map((a) => ({
      id: a.question._id.toString(),
      text: a.question.text,
      isCorrect: a.isCorrect,
      selectedOptionIndex: a.selectedOptionIndex,
    }));

    return res.json({
      passed,
      correctCount,
      totalQuestions,
      resultId: quizResult._id,
      questions: reportQuestions,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
