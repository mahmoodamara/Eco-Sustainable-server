// src/middleware/auth.js
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

/**
 * Middleware: يحتاج توكن JWT في الهيدر:
 * Authorization: Bearer <token>
 */
export async function authRequired(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7).trim()
      : null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET غير موجود في .env");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error("JWT verify error:", err.name, err.message);

      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }

      return res.status(401).json({ message: "Invalid token" });
    }

    // نتأكد إن الpayload فيه userId (نفس اللي بنحطه في signToken)
    if (!decoded.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // نخزن المستخدم في الطلب لاستخدامه في الراوتس
    req.user = user;
    next();
  } catch (err) {
    console.error("authRequired unexpected error:", err);
    return res.status(500).json({ message: "Server error in auth middleware" });
  }
}
