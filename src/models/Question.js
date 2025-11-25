// src/models/Question.js
import mongoose from "mongoose";

const localizedStringSchema = new mongoose.Schema(
  {
    ar: { type: String, default: "" },
    en: { type: String, default: "" },
    al: { type: String, default: "" },
  },
  { _id: false }
);

const optionSchema = new mongoose.Schema(
  {
    text: localizedStringSchema,
    isCorrect: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    quizKey: {
      type: String,
      required: true, // يربط بالـ Quiz.key
      index: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    text: localizedStringSchema,
    options: {
      type: [optionSchema],
      validate: {
        validator: v => v && v.length >= 2,
        message: "Question must have at least two options",
      },
    },
    explanation: localizedStringSchema,
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);
