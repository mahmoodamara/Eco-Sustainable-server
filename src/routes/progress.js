// src/routes/progress.js
import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { User } from "../models/User.js";

const router = Router();

/* ======================================================
   GET /api/progress
   جلب تقدّم المستخدم
====================================================== */
router.get("/", authRequired, async (req, res) => {
  try {
    // نجيب المستخدم من الداتابيس عشان نضمن أحدث داتا
    const user = await User.findById(req.user._id).select(
      "behaviorCompleted behaviorScore progress"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // لو ما في progress نخليه object فاضي
    const progress = user.progress || {};

    // نحول progress لشكل مرتب حسب الموضوع
    const topicsProgress = Object.keys(progress).map((topicKey) => ({
      topicKey,
      levels: progress[topicKey],
    }));

    res.json({
      behaviorCompleted: user.behaviorCompleted ?? false,
      behaviorScore: user.behaviorScore ?? null,
      topics: topicsProgress,
    });
  } catch (err) {
    console.error("GET /api/progress error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

/* ======================================================
   POST /api/progress/update
   حفظ التقدّم بعد كل اختبار
====================================================== */
router.post("/update", authRequired, async (req, res) => {
  try {
    const { topicKey, level, score } = req.body;

    if (!topicKey || !level) {
      return res.status(400).json({ message: "topicKey و level مطلوبان" });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // تجهيز progress إذا لم يكن موجود
    if (!user.progress) user.progress = {};
    if (!user.progress[topicKey]) {
      user.progress[topicKey] = {
        easy: false,
        medium: false,
        hard: false,
      };
    }

    // وضع مستوى النجاح
    user.progress[topicKey][level] = true;

    // حساب completedCount
    const easy = user.progress[topicKey].easy ? 1 : 0;
    const medium = user.progress[topicKey].medium ? 1 : 0;
    const hard = user.progress[topicKey].hard ? 1 : 0;

    user.progress[topicKey].completedCount = easy + medium + hard;

    // (اختياري) لو حابب تخزّن آخر علامة:
    if (typeof score === "number") {
      user.progress[topicKey].lastScore = score;
    }

    await user.save();

    return res.json({
      message: "Progress updated successfully",
      progress: user.progress[topicKey],
    });
  } catch (err) {
    console.error("Progress update error:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
