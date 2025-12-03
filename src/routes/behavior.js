// src/routes/behavior.js
import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { User } from "../models/User.js";
import { BehaviorQuestion } from "../models/BehaviorQuestion.js";

const router = Router();

/**
 * Helper: تفسير السكور (متوسط من 1 إلى 10)
 */
function classifyBehaviorScore(averageScore) {
  if (averageScore == null || Number.isNaN(averageScore)) return null;

  if (averageScore < 4) {
    return { level: "low", label: "سلوك بيئي منخفض" };
  } else if (averageScore < 7) {
    return { level: "medium", label: "سلوك بيئي متوسط" };
  } else {
    return { level: "high", label: "سلوك بيئي مرتفع" };
  }
}

/**
 * GET /api/behavior/status
 * يرجع حالة إكمال المقياس + السكور + حالة إعادة الاستبيان
 */
router.get("/status", authRequired, async (req, res, next) => {
  try {
    const behaviorCompleted = !!req.user.behaviorCompleted;
    const behaviorScore = req.user.behaviorScore ?? null;
    const needsBehaviorRetake = !!req.user.needsBehaviorRetake;

    const classification = behaviorScore
      ? classifyBehaviorScore(behaviorScore)
      : null;

    res.json({
      behaviorCompleted,
      behaviorScore,
      needsBehaviorRetake,
      classification,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/behavior/questions
 * اختيارياً: ?lang=ar|en|al لإرجاع النص بلغة واحدة
 */
router.get("/questions", authRequired, async (req, res, next) => {
  try {
    const { lang } = req.query;

    const questions = await BehaviorQuestion.find({ active: true })
      .sort({ order: 1 })
      .lean();

    // لو تم تمرير lang، رجّع النص بلغة واحدة فقط
    if (lang && ["ar", "en", "al"].includes(lang)) {
      const mapped = questions.map((q) => ({
        _id: q._id,
        order: q.order,
        text: q.text?.[lang] ?? "",
        scale: q.scale || { min: 1, max: 10 },
        weight: q.weight ?? 1,
        reverseScored: q.reverseScored ?? false,
      }));
      return res.json(mapped);
    }

    // لو بدون lang، رجّع كل اللغات كما هي
    res.json(questions);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/behavior/complete
 * body: {
 *   answers: [
 *     { questionId: string, value: number }
 *   ]
 * }
 * الخادم يحسب السكور وفق آلية:
 * - تطبيق reverseScored إن وجد
 * - ضرب بـ weight
 * - حساب totalScore و averageScore
 */
router.post("/complete", authRequired, async (req, res, next) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res
        .status(400)
        .json({ message: "answers must be a non-empty array" });
    }

    // جلب جميع الأسئلة المفعّلة
    const questions = await BehaviorQuestion.find({ active: true }).lean();

    if (!questions.length) {
      return res
        .status(400)
        .json({ message: "No behavior questions defined on the server" });
    }

    // تأكّد (اختياريًا) أن عدد الإجابات يطابق عدد الأسئلة
    if (answers.length !== questions.length) {
      return res.status(400).json({
        message: "answers count does not match active questions count",
        expected: questions.length,
        received: answers.length,
      });
    }

    // خريطة أسئلة حسب ID
    const questionsMap = new Map(
      questions.map((q) => [q._id.toString(), q])
    );

    let totalScore = 0;
    let totalWeight = 0;

    // لحساب أقل / أعلى سكور ممكن (مفيد إن حبيت تستخدمه في الفرونت)
    let minPossible = 0;
    let maxPossible = 0;

    for (const q of questions) {
      const weight = q.weight ?? 1;
      const min = q.scale?.min ?? 1;
      const max = q.scale?.max ?? 10;

      minPossible += min * weight;
      maxPossible += max * weight;
    }

    // معالجة الإجابات
    for (const answer of answers) {
      const { questionId, value } = answer || {};

      if (!questionId) {
        return res.status(400).json({
          message: "Each answer must contain questionId",
        });
      }

      const question = questionsMap.get(String(questionId));
      if (!question) {
        return res.status(400).json({
          message: `Question with id ${questionId} not found or not active`,
        });
      }

      const numericValue = Number(value);
      if (!Number.isFinite(numericValue)) {
        return res.status(400).json({
          message: `Invalid value for question ${questionId}`,
        });
      }

      const min = question.scale?.min ?? 1;
      const max = question.scale?.max ?? 10;
      const weight = question.weight ?? 1;
      const reverseScored = question.reverseScored ?? false;

      if (numericValue < min || numericValue > max) {
        return res.status(400).json({
          message: `Value for question ${questionId} must be between ${min} and ${max}`,
        });
      }

      // تطبيق عكس السكور لو السؤال reverseScored
      let scoredValue = numericValue;
      if (reverseScored) {
        // مثال مع min=1, max=10: 1 → 10, 2 → 9, ..., 10 → 1
        scoredValue = max + min - numericValue;
      }

      totalScore += scoredValue * weight;
      totalWeight += weight;
    }

    if (totalWeight === 0) {
      return res.status(400).json({
        message: "Total weight is zero; cannot compute score",
      });
    }

    // متوسط السكور الموزون (1–10 تقريباً لو كل scale من 1 إلى 10)
    const averageScore = totalScore / totalWeight;
    const classification = classifyBehaviorScore(averageScore);

    // ✅ منطق حفظ البيانات في الـ User:
    // - دائمًا نحدث behaviorScore
    // - أول مرة: behaviorCompleted = true, needsBehaviorRetake = false
    // - إذا كان يعيد الاستبيان بعد فتحه مرة ثانية: needsBehaviorRetake = false فقط

    req.user.behaviorScore = averageScore;

    if (!req.user.behaviorCompleted) {
      // أول مرة يكمّل الاستبيان → يفتح المحتوى والاختبارات
      req.user.behaviorCompleted = true;
      req.user.needsBehaviorRetake = false;
    } else if (req.user.needsBehaviorRetake) {
      // إعادة الاستبيان بعد إنهاء الـ 12 مستوى
      req.user.needsBehaviorRetake = false;
    }

    await req.user.save();

    res.json({
      message: "Behavior test saved",
      behaviorCompleted: req.user.behaviorCompleted,
      needsBehaviorRetake: req.user.needsBehaviorRetake,
      behaviorScore: averageScore,
      totalScore,
      minPossible,
      maxPossible,
      classification,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * PATCH /api/behavior/reset
 * ✅ هنا المنطق الجديد:
 *  - لا نغلق behaviorCompleted
 *  - لا نلمس behaviorScore
 *  - فقط نفتح إمكانية إعادة الاستبيان عبر needsBehaviorRetake = true
 *  - تستخدمها لما المستخدم يكمل كل الـ 12 مستوى
 */
router.patch("/reset", authRequired, async (req, res) => {
  try {
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          needsBehaviorRetake: true,
        },
      },
      { new: true }
    ).select(
      "_id name email behaviorCompleted behaviorScore preferredLang progress needsBehaviorRetake"
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Behavior questionnaire is now open for retake",
      behaviorCompleted: updatedUser.behaviorCompleted,
      behaviorScore: updatedUser.behaviorScore,
      needsBehaviorRetake: updatedUser.needsBehaviorRetake,
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error resetting behavior status", err);
    res.status(500).json({ message: "Failed to reset behavior status" });
  }
});

export default router;
