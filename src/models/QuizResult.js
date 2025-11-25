// src/models/QuizResult.js
import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    selectedOptionIndex: {
      type: Number,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

const quizResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    quizKey: {
      type: String,
      required: true,
      index: true,
    },
    topicKey: {
      type: String,
      required: true,
      index: true,
    },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    correctCount: {
      type: Number,
      required: true,
    },
    passed: {
      type: Boolean,
      required: true,
    },
    answers: [answerSchema],
  },
  {
    timestamps: true,
  }
);

export const QuizResult = mongoose.model("QuizResult", quizResultSchema);
