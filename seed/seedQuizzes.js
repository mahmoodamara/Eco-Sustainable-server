// seed/seedQuizzes.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { Quiz } from "../src/models/Quiz.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

async function seedQuizzes() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Quiz.deleteMany({});
    console.log("🧹 Old quizzes removed");

    const quizzes = [
      // ============================
      // GREEN ENERGY
      // ============================
      {
        key: "green_energy_easy",
        topicKey: "green_energy",
        order: 1,
        level: "easy",
        title: {
          ar: "الطاقة الخضراء - مستوى 1 (سهل)",
          en: "Green Energy - Level 1 (Easy)",
          al: "Energjia e gjelbër - Niveli 1 (I lehtë)",
        },
        description: {
          ar: "أسئلة بسيطة للتعرّف على أنواع الطاقة الخضراء واستخداماتها.",
          en: "Simple questions about types of green energy and their uses.",
          al: "Pyetje të thjeshta rreth llojeve të energjisë së gjelbër dhe përdorimeve të tyre.",
        },
        estimatedMinutes: 5,
      },
      {
        key: "green_energy_medium",
        topicKey: "green_energy",
        order: 2,
        level: "medium",
        title: {
          ar: "الطاقة الخضراء - مستوى 2 (متوسط)",
          en: "Green Energy - Level 2 (Medium)",
          al: "Energjia e gjelbër - Niveli 2 (Mesatar)",
        },
        description: {
          ar: "أسئلة أعمق حول مميزات الطاقة المتجددة وتأثيرها على البيئة.",
          en: "More in-depth questions about the benefits of renewable energy and its environmental impact.",
          al: "Pyetje më të thelluara mbi përfitimet e energjisë së rinovueshme dhe ndikimin e saj në mjedis.",
        },
        estimatedMinutes: 7,
      },
      {
        key: "green_energy_hard",
        topicKey: "green_energy",
        order: 3,
        level: "hard",
        title: {
          ar: "الطاقة الخضراء - مستوى 3 (متقدّم)",
          en: "Green Energy - Level 3 (Advanced)",
          al: "Energjia e gjelbër - Niveli 3 (I avancuar)",
        },
        description: {
          ar: "أسئلة متقدمة حول التحديات والحلول في قطاع الطاقة الخضراء.",
          en: "Advanced questions about challenges and solutions in the green energy sector.",
          al: "Pyetje të avancuara rreth sfidave dhe zgjidhjeve në sektorin e energjisë së gjelbër.",
        },
        estimatedMinutes: 10,
      },

      // ============================
      // WASTE MANAGEMENT
      // ============================
      {
        key: "waste_management_easy",
        topicKey: "waste_management",
        order: 1,
        level: "easy",
        title: {
          ar: "إدارة النفايات - مستوى 1 (سهل)",
          en: "Waste Management - Level 1 (Easy)",
          al: "Menaxhimi i mbeturinave - Niveli 1 (I lehtë)",
        },
        description: {
          ar: "أسئلة أساسية حول فرز النفايات وإعادة التدوير.",
          en: "Basic questions about sorting waste and recycling.",
          al: "Pyetje bazë rreth ndarjes së mbeturinave dhe riciklimit.",
        },
        estimatedMinutes: 5,
      },
      {
        key: "waste_management_medium",
        topicKey: "waste_management",
        order: 2,
        level: "medium",
        title: {
          ar: "إدارة النفايات - مستوى 2 (متوسط)",
          en: "Waste Management - Level 2 (Medium)",
          al: "Menaxhimi i mbeturinave - Niveli 2 (Mesatar)",
        },
        description: {
          ar: "أسئلة أعمق حول تقليل النفايات في الحياة اليومية.",
          en: "More detailed questions about reducing waste in daily life.",
          al: "Pyetje më të detajuara rreth uljes së mbeturinave në jetën e përditshme.",
        },
        estimatedMinutes: 7,
      },
      {
        key: "waste_management_hard",
        topicKey: "waste_management",
        order: 3,
        level: "hard",
        title: {
          ar: "إدارة النفايات - مستوى 3 (متقدّم)",
          en: "Waste Management - Level 3 (Advanced)",
          al: "Menaxhimi i mbeturinave - Niveli 3 (I avancuar)",
        },
        description: {
          ar: "أسئلة متقدمة حول سياسات إدارة النفايات والبنية التحتية.",
          en: "Advanced questions about waste management policies and infrastructure.",
          al: "Pyetje të avancuara rreth politikave të menaxhimit të mbeturinave dhe infrastrukturës.",
        },
        estimatedMinutes: 10,
      },

      // ============================
      // CLIMATE CHANGE
      // ============================
      {
        key: "climate_change_easy",
        topicKey: "climate_change",
        order: 1,
        level: "easy",
        title: {
          ar: "تغيّر المناخ - مستوى 1 (سهل)",
          en: "Climate Change - Level 1 (Easy)",
          al: "Ndryshimi i klimës - Niveli 1 (I lehtë)",
        },
        description: {
          ar: "مقدمة مبسّطة عن مفهوم تغيّر المناخ.",
          en: "A simple introduction to the concept of climate change.",
          al: "Hyrje e thjeshtë në konceptin e ndryshimit të klimës.",
        },
        estimatedMinutes: 5,
      },
      {
        key: "climate_change_medium",
        topicKey: "climate_change",
        order: 2,
        level: "medium",
        title: {
          ar: "تغيّر المناخ - مستوى 2 (متوسط)",
          en: "Climate Change - Level 2 (Medium)",
          al: "Ndryshimi i klimës - Niveli 2 (Mesatar)",
        },
        description: {
          ar: "أسئلة حول آثار تغيّر المناخ على البيئة والإنسان.",
          en: "Questions about the effects of climate change on environment and people.",
          al: "Pyetje rreth ndikimeve të ndryshimit të klimës në mjedis dhe njerëz.",
        },
        estimatedMinutes: 7,
      },
      {
        key: "climate_change_hard",
        topicKey: "climate_change",
        order: 3,
        level: "hard",
        title: {
          ar: "تغيّر المناخ - مستوى 3 (متقدّم)",
          en: "Climate Change - Level 3 (Advanced)",
          al: "Ndryshimi i klimës - Niveli 3 (I avancuar)",
        },
        description: {
          ar: "أسئلة متقدمة حول الحلول العالمية لمواجهة تغيّر المناخ.",
          en: "Advanced questions about global solutions to tackle climate change.",
          al: "Pyetje të avancuara rreth zgjidhjeve globale për përballimin e ndryshimit të klimës.",
        },
        estimatedMinutes: 10,
      },

      // ============================
      // SUSTAINABILITY
      // ============================
      {
        key: "sustainability_easy",
        topicKey: "sustainability",
        order: 1,
        level: "easy",
        title: {
          ar: "الاستدامة - مستوى 1 (سهل)",
          en: "Sustainability - Level 1 (Easy)",
          al: "Qëndrueshmëria - Niveli 1 (I lehtë)",
        },
        description: {
          ar: "مفاهيم أساسية عن أسلوب حياة مستدام.",
          en: "Basic concepts about a sustainable lifestyle.",
          al: "Koncepte bazë rreth një stili jetese të qëndrueshëm.",
        },
        estimatedMinutes: 5,
      },
      {
        key: "sustainability_medium",
        topicKey: "sustainability",
        order: 2,
        level: "medium",
        title: {
          ar: "الاستدامة - مستوى 2 (متوسط)",
          en: "Sustainability - Level 2 (Medium)",
          al: "Qëndrueshmëria - Niveli 2 (Mesatar)",
        },
        description: {
          ar: "أسئلة حول تغييرات يومية تساعد على حماية الموارد.",
          en: "Questions about daily changes that help protect resources.",
          al: "Pyetje rreth ndryshimeve të përditshme që ndihmojnë në mbrojtjen e burimeve.",
        },
        estimatedMinutes: 7,
      },
      {
        key: "sustainability_hard",
        topicKey: "sustainability",
        order: 3,
        level: "hard",
        title: {
          ar: "الاستدامة - مستوى 3 (متقدّم)",
          en: "Sustainability - Level 3 (Advanced)",
          al: "Qëndrueshmëria - Niveli 3 (I avancuar)",
        },
        description: {
          ar: "أسئلة متقدمة حول سياسات الاستدامة والتخطيط طويل الأمد.",
          en: "Advanced questions about sustainability policies and long-term planning.",
          al: "Pyetje të avancuara rreth politikave të qëndrueshmërisë dhe planifikimit afatgjatë.",
        },
        estimatedMinutes: 10,
      },
    ];

    await Quiz.insertMany(quizzes);
    console.log("✅ Quizzes seeded successfully");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error (quizzes):", err);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  }
}

seedQuizzes();
