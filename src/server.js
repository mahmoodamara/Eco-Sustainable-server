// src/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import topicRoutes from "./routes/topics.js";
import quizRoutes from "./routes/quizzes.js";
import behaviorRoutes from "./routes/behavior.js";
import progressRoutes from "./routes/progress.js";
// ---------------------------------------------
// إعداد __dirname في نظام ESM
// ---------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------
// تحميل ملف .env من backend/.env
// ---------------------------------------------
dotenv.config({
  path: path.join(__dirname, "../.env"),
});

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI غير موجود في ملف .env");
  process.exit(1);
}

const app = express();

// ---------------------------------------------
// Middlewares عامة
// ---------------------------------------------
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://eco-sustainable.netlify.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
// خدمة الملفات الثابتة للصور (public/images → /images)
app.use(
  "/images",
  express.static(path.join(__dirname, "../public/images"))
);

// ---------------------------------------------
// Routes
// ---------------------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/behavior", behaviorRoutes);
app.use("/api/progress", progressRoutes);

// Health check / رسالة رئيسية
app.get("/", (req, res) => {
  res.json({ message: "Eco-Sustainable Champions API is running" });
});

// 404 لأي مسار غير معروف
app.use((req, res, next) => {
  res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
});

// Error handler عام
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message || "Server error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// ---------------------------------------------
// تشغيل السيرفر بعد الاتصال بالداتابيس
// ---------------------------------------------
const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

startServer();
