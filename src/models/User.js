// src/models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const levelStatusSchema = new mongoose.Schema(
  {
    easy: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    hard: { type: Boolean, default: false },
  },
  { _id: false }
);

// ✅ استخدم نفس مفاتيح التوبيكات الحقيقية
const INITIAL_PROGRESS = () => ({
  green_energy:     { easy: false, medium: false, hard: false },
  waste_management: { easy: false, medium: false, hard: false },
  climate_change:   { easy: false, medium: false, hard: false },
  sustainability:   { easy: false, medium: false, hard: false },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    preferredLang: {
      type: String,
      enum: ["ar", "en", "al"],
      default: "ar",
    },

    behaviorCompleted: {
      type: Boolean,
      default: false,
    },
    behaviorScore: {
      type: Number,
      default: null,
    },

    progress: {
      type: Map,
      of: levelStatusSchema,
      default: INITIAL_PROGRESS, // 👈 هون
    },
  },
  {
    timestamps: true,
  }
);

// 🔐 hash للـ password إذا تغيّر
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// مقارنة كلمة المرور
userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
