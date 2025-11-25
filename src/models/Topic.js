// models/Topic.js
import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      unique: true,
      required: true, // مثال: "green_energy"
      trim: true
    },
    order: {
      type: Number,
      default: 0
    },
    title: {
      ar: { type: String, required: true },
      en: { type: String, required: true },
      al: { type: String, required: true }
    },
    shortDescription: {
      ar: { type: String, default: "" },
      en: { type: String, default: "" },
      al: { type: String, default: "" }
    },
    content: {
      ar: { type: String, default: "" },
      en: { type: String, default: "" },
      al: { type: String, default: "" }
    },
    imageUrl: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", TopicSchema);
