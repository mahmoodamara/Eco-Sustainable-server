// src/models/Quiz.js
import mongoose from "mongoose";

const localizedStringSchema = new mongoose.Schema(
  {
    ar: { type: String, default: "" },
    en: { type: String, default: "" },
    al: { type: String, default: "" },
  },
  { _id: false }
);

const quizSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    topicKey: {
      type: String, // يربط بالـ Topic.key
      required: true,
      index: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    title: localizedStringSchema,
    description: localizedStringSchema,
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    estimatedMinutes: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
