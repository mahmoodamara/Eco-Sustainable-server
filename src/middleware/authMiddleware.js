// src/middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.cookies.ecochamp_token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
}
