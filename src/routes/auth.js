// src/routes/auth.js
import { Router } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

function signToken(userId) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env");
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

/**
 * POST /api/auth/register
 * body: { name, email, password, preferredLang }
 */
router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, preferredLang } = req.body;

    // تحقق بسيط من البيانات
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email, password are required" });
    }

    // تأكد من طول كلمة المرور
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // هل في مستخدم بنفس الإيميل؟
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    // إنشاء المستخدم (الـ pre('save') في الموديل رح يعمل hash للـ password)
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      preferredLang: preferredLang || "ar",
    });

    const token = signToken(user._id);

    // ما نرجّع كلمة المرور
    const userSafe = {
      _id: user._id,
      name: user.name,
      email: user.email,
      preferredLang: user.preferredLang,
      behaviorCompleted: user.behaviorCompleted,
      behaviorScore: user.behaviorScore,
      needsBehaviorRetake: user.needsBehaviorRetake,  // 👈 تمت إضافته
      progress: user.progress || {}, // ✅ نتأكد إنها object
    };

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: userSafe,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/auth/login
 * body: { email, password }
 */
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = signToken(user._id);

    // ⬅️ إرجاع كل الحقول المهمة للفرونت بما فيها المتغيّر الجديد
    const userSafe = {
      _id: user._id,
      name: user.name,
      email: user.email,
      preferredLang: user.preferredLang,
      behaviorCompleted: user.behaviorCompleted,
      behaviorScore: user.behaviorScore,
      needsBehaviorRetake: user.needsBehaviorRetake,  // 👈 تمت إضافته
      progress: user.progress || {},
    };

    res.json({
      message: "Login successful",
      token,
      user: userSafe,
    });
  } catch (err) {
    next(err);
  }
});


/**
 * GET /api/auth/me
 * يحتاج Authorization: Bearer <token>
 */
router.get("/me", authRequired, async (req, res, next) => {
  try {
    // authRequired حط user في req.user، بس نجيب من الداتابيس ونعمل select واضح
    const user = await User.findById(req.user._id).select(
      "_id name email preferredLang behaviorCompleted behaviorScore needsBehaviorRetake progress"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userSafe = {
      _id: user._id,
      name: user.name,
      email: user.email,
      preferredLang: user.preferredLang,
      behaviorCompleted: user.behaviorCompleted,
      behaviorScore: user.behaviorScore,
            needsBehaviorRetake: user.needsBehaviorRetake,  // 👈 تمت إضافته

      progress: user.progress || {}, // ✅ مهم جداً لـ refreshUser والـ frontend
    };

    res.json(userSafe);
  } catch (err) {
    next(err);
  }
});

export default router;
