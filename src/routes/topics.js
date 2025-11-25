// src/routes/topics.js
import { Router } from "express";
import { Topic } from "../models/Topic.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

/**
 * GET /api/topics
 * ترجع كل المواضيع مرتبة حسب order
 */
router.get("/", authRequired, async (req, res, next) => {
  try {
    // لو ما عندك حقل active في الـ schema خليه بدون فلتر
    const topics = await Topic.find({}).sort({ order: 1, _id: 1 });

    // نرجع Array مباشرة (الفرونت يتعامل معها بسهولة)
    res.json(topics);
  } catch (err) {
    console.error("GET /api/topics error:", err);
    next(err);
  }
});

/**
 * GET /api/topics/:key
 * ترجع موضوع واحد حسب ال key (مثال: green_energy)
 */
router.get("/:key", authRequired, async (req, res, next) => {
  try {
    // نفس الفكرة: بدون active إلا إذا عندك الحقل في الـ schema
    const topic = await Topic.findOne({ key: req.params.key });

    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }

    res.json(topic);
  } catch (err) {
    console.error("GET /api/topics/:key error:", err);
    next(err);
  }
});

export default router;
