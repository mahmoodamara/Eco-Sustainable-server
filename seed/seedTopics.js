// seed/seedTopics.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { Topic } from "../src/models/Topic.js";

// إعداد __dirname في ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تحميل .env
dotenv.config({
  path: path.join(__dirname, "../.env"),
});

async function seedTopics() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Topic.deleteMany({});
    console.log("🧹 Old topics removed");

    await Topic.insertMany([
      {
        key: "green_energy",
        order: 1,
        title: {
          ar: "الطاقة الخضراء",
          en: "Green Energy",
          al: "Energjia e gjelbër",
        },
        shortDescription: {
          ar: "تعرف على مصادر الطاقة النظيفة وأهميتها في حياتنا اليومية.",
          en: "Learn about clean energy sources and why they matter in daily life.",
          al: "Mësoni rreth burimeve të energjisë së pastër dhe rëndësisë së tyre në jetën e përditshme.",
        },
        content: {
          ar: "في هذا القسم نتعرّف على مفهوم الطاقة الخضراء، مثل الطاقة الشمسية وطاقة الرياح والطاقة الكهرومائية، وكيف يمكن أن تقلل من التلوث وتحافظ على البيئة.",
          en: "In this section we explore the concept of green energy, such as solar, wind, and hydro power, and how they can reduce pollution and protect the environment.",
          al: "Në këtë pjesë shpjegojmë konceptin e energjisë së gjelbër, si energjia diellore, e erës dhe hidroenergjetike, dhe si ato mund të ulin ndotjen dhe të mbrojnë mjedisin.",
        },
        imageUrl: "/images/green_energy.jpg",
      },
      {
        key: "waste_management",
        order: 2,
        title: {
          ar: "إدارة النفايات",
          en: "Waste Management",
          al: "Menaxhimi i mbeturinave",
        },
        shortDescription: {
          ar: "كيف نتعامل مع النفايات بشكل مسؤول من خلال الفرز وإعادة التدوير.",
          en: "How to handle waste responsibly through sorting and recycling.",
          al: "Si të menaxhojmë mbeturinat në mënyrë të përgjegjshme përmes ndarjes dhe riciklimit.",
        },
        content: {
          ar: "في هذا القسم نتعلم عن تقليل النفايات، وإعادة استخدامها، وإعادة تدوير المواد مثل البلاستيك والورق والمعادن لحماية الأرض.",
          en: "In this section we learn about reducing waste, reusing items, and recycling materials like plastic, paper, and metals to protect the planet.",
          al: "Në këtë pjesë mësojmë për uljen e mbeturinave, ripërdorimin e sendeve dhe riciklimin e materialeve si plastika, letra dhe metalet për të mbrojtur tokën.",
        },
        imageUrl: "/images/waste_management.jpg",
      },
      {
        key: "climate_change",
        order: 3,
        title: {
          ar: "تغيّر المناخ",
          en: "Climate Change",
          al: "Ndryshimi i klimës",
        },
        shortDescription: {
          ar: "ما هو تغيّر المناخ وكيف يؤثر على الطقس والطبيعة والناس؟",
          en: "What is climate change and how does it affect weather, nature, and people?",
          al: "Çfarë është ndryshimi i klimës dhe si ndikon te moti, natyra dhe njerëzit?",
        },
        content: {
          ar: "نتعرّف هنا على أسباب تغيّر المناخ مثل انبعاثات الغازات الدفيئة، وتأثيرها على ارتفاع درجات الحرارة وذوبان الجليد وارتفاع مستوى البحار.",
          en: "Here we explore the causes of climate change, such as greenhouse gas emissions, and their impact on rising temperatures, melting ice, and sea level rise.",
          al: "Këtu shpjegojmë shkaqet e ndryshimit të klimës, si emetimet e gazeve serrë, dhe ndikimin e tyre në rritjen e temperaturave, shkrirjen e akullit dhe ngritjen e nivelit të detit.",
        },
        imageUrl: "/images/climate_change.jpg",
      },
      {
        key: "sustainability",
        order: 4,
        title: {
          ar: "الالتزام بالاستدامة",
          en: "Commitment to Sustainability",
          al: "Angazhimi për qëndrueshmëri",
        },
        shortDescription: {
          ar: "خطوات بسيطة يومية تخلّي أسلوب حياتك أكثر استدامة.",
          en: "Simple daily steps to make your lifestyle more sustainable.",
          al: "Hapa të thjeshtë të përditshëm për ta bërë stilin tuaj të jetesës më të qëndrueshëm.",
        },
        content: {
          ar: "نقدّم هنا أفكارًا عملية مثل تقليل استهلاك الطاقة، استخدام وسائل النقل المستدامة، وحماية الموارد الطبيعية للأجيال القادمة.",
          en: "We present practical ideas such as reducing energy use, choosing sustainable transport, and protecting natural resources for future generations.",
          al: "Këtu paraqesim ide praktike si ulja e konsumit të energjisë, zgjedhja e transportit të qëndrueshëm dhe mbrojtja e burimeve natyrore për brezat e ardhshëm.",
        },
        imageUrl: "/images/sustainability.jpg",
      },
    ]);

    console.log("✅ Topics seeded successfully");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error (topics):", err);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  }
}

seedTopics();
