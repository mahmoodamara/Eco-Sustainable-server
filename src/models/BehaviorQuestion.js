// src/models/BehaviorQuestion.js
import mongoose from "mongoose";

const behaviorQuestionSchema = new mongoose.Schema(
  {
    // ترتيب السؤال في المقياس (1..35)
    order: {
      type: Number,
      required: true,
      index: true,
    },

    // نص السؤال باللغات الثلاث
    text: {
      ar: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true },
      al: { type: String, required: true, trim: true },
    },

    // معلومات عن مقياس الإجابة (1–10)
    scale: {
      min: {
        type: Number,
        default: 1, // أقل درجة ممكنة في هذا السؤال
      },
      max: {
        type: Number,
        default: 10, // أعلى درجة ممكنة في هذا السؤال
      },
    },

    // وزن السؤال في الحساب النهائي (لو حبيت تعطي بعض الأسئلة أهمية أكبر)
    weight: {
      type: Number,
      default: 1,
    },

    // هل هذا السؤال يحتاج عكس الدرجة عند التصحيح؟ (في حال كان السؤال صياغته سلبية)
    reverseScored: {
      type: Boolean,
      default: false,
    },

    // تفعيل/إيقاف السؤال بدون حذفه
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BehaviorQuestion = mongoose.model(
  "BehaviorQuestion",
  behaviorQuestionSchema
);
