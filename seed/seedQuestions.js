// seed/seedQuestions.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { Question } from "../src/models/Question.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

function localized(textAr, textEn, textAl) {
  return {
    ar: textAr,
    en: textEn,
    al: textAl,
  };
}

async function seedQuestions() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Question.deleteMany({});
    console.log("🧹 Old questions removed");

    const questions = [
      // ============================================================
      // GREEN ENERGY - EASY (extra questions 11–32)
      // ============================================================

      {
        quizKey: "green_energy_easy",
        order: 1,
        text: localized(
          "ما هو المصدر الرئيسي للطاقة الشمسية؟",
          "What is the main source of solar energy?",
          "Cili është burimi kryesor i energjisë diellore?"
        ),
        options: [
          {
            text: localized("☀️ أشعة الشمس", "☀️ Sunlight", "☀️ Drita e diellit"),
            isCorrect: true,
          },
          {
            text: localized("🔥 الفحم الحجري", "🔥 Coal", "🔥 Qymyri"),
            isCorrect: false,
          },
          {
            text: localized("💧 المياه", "💧 Water", "💧 Uji"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ الرياح", "🌬️ Wind", "🌬️ Era"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "المصدر الرئيسي للطاقة الشمسية هو أشعة الشمس.",
          "The main source of solar energy is sunlight.",
          "Burimi kryesor i energjisë diellore është drita e diellit."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 2,
        text: localized(
          "أي من هذه الطاقات غير متجددة؟",
          "Which of these energies is non-renewable?",
          "Cila nga këto energji nuk është e rinovueshme?"
        ),
        options: [
          {
            text: localized("⛽ النفط", "⛽ Oil", "⛽ Vaj/ Nafta"),
            isCorrect: true,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "النفط من مصادر الطاقة غير المتجددة لأنه يحتاج لملايين السنين ليتكوّن.",
          "Oil is non-renewable because it takes millions of years to form.",
          "Vaji/nafta është burim jo i rinovueshëm sepse formohet për miliona vjet."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 3,
        text: localized(
          "ما هو العنصر المستخدم في تصنيع الخلايا الشمسية؟",
          "What element is used in the manufacture of solar cells?",
          "Cili element përdoret në prodhimin e qelizave diellore?"
        ),
        options: [
          {
            text: localized("🪨 السيليكون", "🪨 Silicon", "🪨 Silici"),
            isCorrect: true,
          },
          {
            text: localized("🏗️ الحديد", "🏗️ Iron", "🏗️ Hekuri"),
            isCorrect: false,
          },
          {
            text: localized("🛢️ النفط", "🛢️ Oil", "🛢️ Vaji/ Nafta"),
            isCorrect: false,
          },
          {
            text: localized("⚡ النحاس", "⚡ Copper", "⚡ Bakri"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "معظم الخلايا الشمسية تُصنع من السيليكون لأنه شبه موصل جيد.",
          "Most solar cells are made of silicon because it is a good semiconductor.",
          "Shumica e qelizave diellore bëhen nga silici sepse është gjysmëpërçues i mirë."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 4,
        text: localized(
          "أي من هذه الطاقات يعتمد على الرياح؟",
          "Which of these energies depends on wind?",
          "Cila nga këto energji varet nga era?"
        ),
        options: [
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: true,
          },
          {
            text: localized("⛽ الغاز الطبيعي", "⛽ Natural gas", "⛽ Gazi natyror"),
            isCorrect: false,
          },
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: false,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "طاقة الرياح تعتمد مباشرة على حركة الهواء (الرياح).",
          "Wind energy directly depends on air movement (wind).",
          "Energjia e erës varet direkt nga lëvizja e ajrit (era)."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 5,
        text: localized(
          "أي نوع من الطاقات يعتمد على تدفق المياه في الأنهار؟",
          "Which type of energy depends on the flow of rivers?",
          "Cili lloj i energjisë varet nga rrjedha e lumenjve?"
        ),
        options: [
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: true,
          },
          {
            text: localized("⛽ النفط", "⛽ Oil", "⛽ Vaji/ Nafta"),
            isCorrect: false,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🔥 الفحم الحجري", "🔥 Coal", "🔥 Qymyri"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة المائية تعتمد على تدفق المياه في الأنهار لتشغيل التوربينات.",
          "Hydropower depends on river flow to drive turbines.",
          "Hidroenergjia varet nga rrjedha e lumenjve për të vënë në lëvizje turbinat."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 6,
        text: localized(
          "كيف يتم تحويل طاقة الرياح إلى كهرباء؟",
          "How is wind energy converted into electricity?",
          "Si shndërrohet energjia e erës në energji elektrike?"
        ),
        options: [
          {
            text: localized("🎡 عبر التوربينات", "🎡 Through turbines", "🎡 Përmes turbinave"),
            isCorrect: true,
          },
          {
            text: localized("🔥 عبر الاحتراق", "🔥 Through combustion", "🔥 Përmes djegies"),
            isCorrect: false,
          },
          {
            text: localized("🚀 عبر الانشطار النووي", "🚀 Through nuclear fission", "🚀 Përmes ndarjes bërthamore"),
            isCorrect: false,
          },
          {
            text: localized("🌱 عبر التحلل البيولوجي", "🌱 Through biological decomposition", "🌱 Përmes zbërthimit biologjik"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "توربينات الرياح تحول الطاقة الحركية للرياح إلى طاقة كهربائية.",
          "Wind turbines convert wind kinetic energy into electrical energy.",
          "Turbinat e erës e shndërrojnë energjinë kinetike të erës në energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 7,
        text: localized(
          "لماذا تُعتبر الطاقة المتجددة مفيدة؟",
          "Why is renewable energy beneficial?",
          "Pse është e dobishme energjia e rinovueshme?"
        ),
        options: [
          {
            text: localized("🍃 تقلل من التلوث", "🍃 It reduces pollution", "🍃 Redukton ndotjen"),
            isCorrect: true,
          },
          {
            text: localized("🛢️ تزيد من استخدام النفط", "🛢️ It increases oil consumption", "🛢️ Rrit konsumin e vajit/ naftës"),
            isCorrect: false,
          },
          {
            text: localized("🏭 تنتج غازات دفيئة", "🏭 It produces greenhouse gases", "🏭 Prodhon gazra serrë"),
            isCorrect: false,
          },
          {
            text: localized("⛽ تستهلك الوقود الأحفوري", "⛽ It consumes fossil fuels", "⛽ Konsumon lëndë djegëse fosile"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة المتجددة تقلل التلوث مقارنة بالوقود الأحفوري.",
          "Renewable energy reduces pollution compared to fossil fuels.",
          "Energjia e rinovueshme ul ndotjen krahasuar me lëndët djegëse fosile."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 8,
        text: localized(
          "كيف تساعد الألواح الشمسية على توليد الكهرباء؟",
          "How do solar panels help generate electricity?",
          "Si ndihmojnë panelet diellore në gjenerimin e energjisë elektrike?"
        ),
        options: [
          {
            text: localized(
              "⚡ تحويل أشعة الشمس إلى طاقة كهربائية",
              "⚡ By converting sunlight into electrical energy",
              "⚡ Duke shndërruar rrezet e diellit në energji elektrike"
            ),
            isCorrect: true,
          },
          {
            text: localized("🏭 حرق المواد العضوية", "🏭 By burning organic materials", "🏭 Duke djegur materiale organike"),
            isCorrect: false,
          },
          {
            text: localized("🔥 استخدام الغاز الطبيعي", "🔥 By using natural gas", "🔥 Duke përdorur gaz natyror"),
            isCorrect: false,
          },
          {
            text: localized(
              "🌱 تحويل المخلفات إلى طاقة",
              "🌱 By converting waste into energy",
              "🌱 Duke shndërruar mbeturinat në energji"
            ),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الألواح الشمسية تحول ضوء الشمس مباشرة إلى كهرباء باستخدام الخلايا الشمسية.",
          "Solar panels convert sunlight directly into electricity using solar cells.",
          "Panelet diellore e shndërrojnë dritën e diellit direkt në energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 9,
        text: localized(
          "ما هو المصدر الأساسي للطاقة المائية؟",
          "What is the primary source of hydropower?",
          "Cili është burimi primar i hidroenergjisë?"
        ),
        options: [
          {
            text: localized("🌊 تدفق المياه", "🌊 Water flow", "🌊 Rrjedha e ujit"),
            isCorrect: true,
          },
          {
            text: localized("🔥 احتراق الفحم", "🔥 Coal combustion", "🔥 Djegia e qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ حركة الرياح", "🌬️ Wind movement", "🌬️ Lëvizja e erës"),
            isCorrect: false,
          },
          {
            text: localized("☀️ حرارة الشمس", "☀️ Sun heat", "☀️ Nxehtësia e diellit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة المائية تعتمد على حركة وتدفق المياه لتوليد الكهرباء.",
          "Hydropower depends on water flow to generate electricity.",
          "Hidroenergjia varet nga rrjedha e ujit për të prodhuar energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 10,
        text: localized(
          "ما هو الوقود الأحفوري الأكثر تلويثًا للبيئة؟",
          "Which fossil fuel is the most polluting?",
          "Cili lëndë djegëse fosile është më ndotëse?"
        ),
        options: [
          {
            text: localized("🔥 الفحم الحجري", "🔥 Coal", "🔥 Qymyri"),
            isCorrect: true,
          },
          {
            text: localized("⛽ الغاز الطبيعي", "⛽ Natural gas", "⛽ Gazi natyror"),
            isCorrect: false,
          },
          {
            text: localized("🚗 البنزين", "🚗 Gasoline", "🚗 Benzina"),
            isCorrect: false,
          },
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الفحم الحجري ينتج أكبر كمية من الانبعاثات الملوِّثة عند حرقه.",
          "Coal produces the highest amount of polluting emissions when burned.",
          "Qymyri prodhon më shumë emetime ndotëse gjatë djegies."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 11,
        text: localized(
          "ما هو المصدر الرئيسي للطاقة في العالم اليوم؟",
          "What is the main energy source in the world today?",
          "Cili është burimi kryesor i energjisë në botë sot?"
        ),
        options: [
          {
            text: localized("⛽ النفط", "⛽ Oil", "⛽ Vaji/ Nafta"),
            isCorrect: true,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
          {
            text: localized("💧 الطاقة المائية", "💧 Hydropower", "💧 Hidroenergjia"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "ما زال النفط حتى اليوم من أهم مصادر الطاقة عالميًا.",
          "Oil is still one of the main global energy sources.",
          "Vaji/nafta ende është një nga burimet kryesore të energjisë në botë."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 12,
        text: localized(
          "ما هو الاستخدام الرئيسي للغاز الطبيعي؟",
          "What is the primary use of natural gas?",
          "Cili është përdorimi primar i gazit natyror?"
        ),
        options: [
          {
            text: localized("🔥 توليد الكهرباء", "🔥 Electricity generation", "🔥 Prodhimi i energjisë elektrike"),
            isCorrect: true,
          },
          {
            text: localized("🚗 تشغيل السيارات", "🚗 Powering vehicles", "🚗 Furnizimi i automjeteve me energji"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تشغيل التوربينات المائية", "🌊 Running water turbines", "🌊 Drejtimi i turbinave të ujit"),
            isCorrect: false,
          },
          {
            text: localized("🏗️ بناء الجسور", "🏗️ Building bridges", "🏗️ Ndërtimi i urave"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "يُستخدم الغاز الطبيعي بشكل واسع في توليد الكهرباء.",
          "Natural gas is widely used for electricity generation.",
          "Gazi natyror përdoret gjerësisht për prodhimin e energjisë elektrike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 13,
        text: localized(
          "أي من هذه الطاقات يعتمد على حرارة الأرض الداخلية؟",
          "Which of these energies relies on Earth's internal heat?",
          "Cila nga këto energji mbështetet në nxehtësinë e brendshme të Tokës?"
        ),
        options: [
          {
            text: localized("🔥 الطاقة الحرارية الجوفية", "🔥 Geothermal energy", "🔥 Energjia gjeotermale"),
            isCorrect: true,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة الحرارية الجوفية تستغل حرارة باطن الأرض.",
          "Geothermal energy uses Earth's internal heat.",
          "Energjia gjeotermale shfrytëzon nxehtësinë e brendshme të Tokës."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 14,
        text: localized(
          "أي نوع من الطاقة يعتمد على حركة الأمواج والمد والجزر؟",
          "Which type of energy depends on wave and tidal movement?",
          "Cili lloj energjie varet nga lëvizja e valëve dhe e baticës?"
        ),
        options: [
          {
            text: localized("🌊 الطاقة المائية / البحرية", "🌊 Marine energy", "🌊 Energjia detare"),
            isCorrect: true,
          },
          {
            text: localized("🔥 الطاقة النووية", "🔥 Nuclear energy", "🔥 Energjia bërthamore"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة البحرية تستغل حركة الأمواج والمد والجزر لتوليد الكهرباء.",
          "Marine energy uses wave and tidal movement to generate electricity.",
          "Energjia detare shfrytëzon lëvizjen e valëve dhe baticës për të prodhuar energji."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 15,
        text: localized(
          "ما هو التأثير البيئي الرئيسي لاستخدام الوقود الأحفوري؟",
          "What is the main environmental impact of using fossil fuels?",
          "Cili është ndikimi kryesor mjedisor i përdorimit të lëndëve djegëse fosile?"
        ),
        options: [
          {
            text: localized("🌍 تغير المناخ", "🌍 Climate change", "🌍 Ndryshimet klimatike"),
            isCorrect: true,
          },
          {
            text: localized("🌬️ زيادة سرعة الرياح", "🌬️ Increased wind speed", "🌬️ Rritja e shpejtësisë së erës"),
            isCorrect: false,
          },
          {
            text: localized("💧 زيادة نسبة المياه الجوفية", "💧 Increased groundwater levels", "💧 Rritja e nivelit të ujërave nëntokësore"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تقليل التلوث", "🔥 Reduced pollution", "🔥 Ulje e ndotjes"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "حرق الوقود الأحفوري يساهم بشكل كبير في تغيّر المناخ.",
          "Burning fossil fuels significantly contributes to climate change.",
          "Djegia e lëndëve djegëse fosile kontribuon dukshëm në ndryshimet klimatike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 16,
        text: localized(
          "أي نوع من الطاقات يعتمد على استخدام المخلفات النباتية والحيوانية؟",
          "Which type of energy relies on using plant and animal waste?",
          "Cili lloj i energjisë mbështetet në përdorimin e mbetjeve bimore dhe shtazore?"
        ),
        options: [
          {
            text: localized("🌱 طاقة الكتلة الحيوية", "🌱 Biomass energy", "🌱 Energjia e biomasës"),
            isCorrect: true,
          },
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: false,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "طاقة الكتلة الحيوية تستخدم مخلفات نباتية وحيوانية لإنتاج الطاقة.",
          "Biomass energy uses plant and animal waste to produce energy.",
          "Energjia e biomasës përdor mbetje bimore dhe shtazore për të prodhuar energji."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 17,
        text: localized(
          "ما هو الجهاز المستخدم في تحويل طاقة الرياح إلى كهرباء؟",
          "What device is used to convert wind energy into electricity?",
          "Cila pajisje përdoret për shndërrimin e energjisë së erës në energji elektrike?"
        ),
        options: [
          {
            text: localized("🎡 توربين الرياح", "🎡 Wind turbine", "🎡 Turbina e erës"),
            isCorrect: true,
          },
          {
            text: localized("🔥 موقد الغاز", "🔥 Gas stove", "🔥 Stufa me gaz"),
            isCorrect: false,
          },
          {
            text: localized("💧 مضخة المياه", "💧 Water pump", "💧 Pompa e ujit"),
            isCorrect: false,
          },
          {
            text: localized("🚗 محرك البنزين", "🚗 Gasoline engine", "🚗 Motor benzine"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "توربين الرياح هو الجهاز الذي يحول طاقة الرياح إلى كهرباء.",
          "A wind turbine converts wind energy into electricity.",
          "Turbina e erës shndërron energjinë e erës në energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 18,
        text: localized(
          "ما هو السبب الرئيسي لدعم استخدام الطاقة المتجددة؟",
          "What is the main reason for supporting the use of renewable energy?",
          "Cila është arsyeja kryesore për mbështetjen e përdorimit të energjisë së rinovueshme?"
        ),
        options: [
          {
            text: localized("🌍 تقليل الانبعاثات الضارة", "🌍 Reducing harmful emissions", "🌍 Reduktimi i emetimeve të dëmshme"),
            isCorrect: true,
          },
          {
            text: localized("⛽ زيادة استخدام النفط", "⛽ Increasing oil consumption", "⛽ Rritja e konsumit të naftës"),
            isCorrect: false,
          },
          {
            text: localized("🏗️ تقليل إنتاج الكهرباء", "🏗️ Reducing electricity production", "🏗️ Reduktimi i prodhimit të energjisë elektrike"),
            isCorrect: false,
          },
          {
            text: localized("🔥 زيادة تلوث الهواء", "🔥 Increasing air pollution", "🔥 Rritja e ndotjes së ajrit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة المتجددة تقلل الانبعاثات الضارة وتساعد في حماية المناخ.",
          "Renewable energy reduces harmful emissions and helps protect the climate.",
          "Energjia e rinovueshme ul emetimet e dëmshme dhe mbron klimën."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 19,
        text: localized(
          "أي نوع من الطاقات لا ينتج أي انبعاثات كربونية؟",
          "Which type of energy does not produce carbon emissions?",
          "Cili lloj energjie nuk prodhon emetim të karbonit?"
        ),
        options: [
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: true,
          },
          {
            text: localized("⛽ الوقود الأحفوري", "⛽ Fossil fuels", "⛽ Lëndët djegëse fosile"),
            isCorrect: false,
          },
          {
            text: localized("🔥 الفحم الحجري", "🔥 Coal", "🔥 Qymyr"),
            isCorrect: false,
          },
          {
            text: localized("🚗 البنزين", "🚗 Gasoline", "🚗 Benzinë"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة الشمسية لا تنتج انبعاثات كربونية أثناء التشغيل.",
          "Solar energy does not produce carbon emissions during operation.",
          "Energjia diellore nuk prodhon emetime të karbonit gjatë përdorimit."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 20,
        text: localized(
          "ما هو السبب الرئيسي لاستخدام الألواح الشمسية في المنازل؟",
          "What is the primary reason for using solar panels in homes?",
          "Cila është arsyeja kryesore e përdorimit të paneleve diellore në shtëpi?"
        ),
        options: [
          {
            text: localized(
              "⚡ تقليل استهلاك الكهرباء التقليدية",
              "⚡ Reducing traditional electricity consumption",
              "⚡ Reduktimi i konsumit tradicional të energjisë elektrike"
            ),
            isCorrect: true,
          },
          {
            text: localized("🌍 زيادة انبعاثات الكربون", "🌍 Increasing carbon emissions", "🌍 Rritja e emetimeve të karbonit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تقليل استخدام المياه", "🔥 Reducing water usage", "🔥 Reduktimi i përdorimit të ujit"),
            isCorrect: false,
          },
          {
            text: localized(
              "⛽ زيادة استهلاك الوقود الأحفوري",
              "⛽ Increasing fossil fuel consumption",
              "⛽ Rritja e konsumit të karburanteve fosile"
            ),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الألواح الشمسية تقلل الاعتماد على الكهرباء التقليدية من الشبكة.",
          "Solar panels reduce dependence on traditional grid electricity.",
          "Panelet diellore ulin varësinë nga energjia elektrike tradicionale."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 21,
        text: localized(
          "ماذا يُقصَد بالطاقة المتجددة؟",
          "What is renewable energy?",
          "Çfarë kuptohet me energji të ripërtëritshme?"
        ),
        options: [
          {
            text: localized(
              "طاقة تستخدم الموارد الطبيعية ويمكن إنتاجها من جديد",
              "Energy that uses natural resources and can be reproduced",
              "Energjia që përdor burime të natyrshme dhe mund të riprodhohet"
            ),
            isCorrect: true,
          },
          {
            text: localized(
              "طاقة تُستهلك بسرعة ولا يمكن إنتاجها من جديد",
              "Energy that is quickly consumed and cannot be reproduced",
              "Energjia që shpenzohet shpejt dhe nuk mund të riprodhohet"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "طاقة تستخدم مواد ضارة بالبيئة",
              "Energy that uses environmentally harmful materials",
              "Energjia që përdor material të dëmshëm për mjedisin"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "طاقة ناتجة عن مصادر نووية",
              "Energy that is created from nuclear sources",
              "Energjia që krijohet nga burime bërthamore"
            ),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الطاقة المتجددة تأتي من مصادر طبيعية يمكن تجددها مثل الشمس والرياح.",
          "Renewable energy comes from natural sources that can be replenished, like sun and wind.",
          "Energjia e ripërtëritshme vjen nga burime natyrore që mund të rigjenerohen."
        ),
      },
      {
        quizKey: "green_energy_easy",
        order: 22,
        text: localized(
          "ما هو مثال على استخدام طاقة الرياح؟",
          "What is an example of using wind energy?",
          "Cili është një shembull i përdorimit të energjisë së erës?"
        ),
        options: [
          {
            text: localized(
              "دفع قارب شراعي",
              "Propelling a sailboat",
              "Lëvizja e një anijeje me vela"
            ),
            isCorrect: true,
          },
          {
            text: localized("تسخين المياه في المنزل", "Water heating at home", "Ngrohja e ujit në shtëpi"),
            isCorrect: false,
          },
          {
            text: localized(
              "شحن بطارية الهاتف المحمول",
              "Charging a cell phone battery",
              "Mbushja e një baterie celulari"
            ),
            isCorrect: false,
          },
          {
            text: localized("استخدام الحطب للتدفئة", "Using wood for heating", "Përdorimi i drurit për ngrohje"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "حركة القارب الشراعي تعتمد على قوة الرياح في دفع الأشرعة.",
          "A sailboat relies on wind power to move its sails.",
          "Lëvizja e anijes me vela varet nga forca e erës."
        ),
      },

            // ============================================================
      // GREEN ENERGY - MEDIUM (orders 1–26)
      // quizKey: green_energy_medium
      // ============================================================

      {
        quizKey: "green_energy_medium",
        order: 1,
        text: localized(
          "أي من العمليات التالية تُستخدم لتحويل الكتلة الحيوية إلى طاقة؟",
          "Which process is used to convert biomass into energy?",
          "Cili proces përdoret për shndërrimin e biomasës në energji?"
        ),
        options: [
          {
            text: localized("🌱 التحلل اللاهوائي", "🌱 Anaerobic digestion", "🌱 Tretje anaerobike"),
            isCorrect: true,
          },
          {
            text: localized("🔥 حرق النفط", "🔥 Oil combustion", "🔥 Djegia e naftës"),
            isCorrect: false,
          },
          {
            text: localized("⚡ الانشطار النووي", "⚡ Nuclear fission", "⚡ Fuzioni bërthamor"),
            isCorrect: false,
          },
          {
            text: localized("🌊 توليد الكهرباء من المياه", "🌊 Water-generated electricity", "🌊 Energji elektrike e prodhuar nga uji"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "التحلل اللاهوائي يحوّل الكتلة الحيوية إلى غازات يمكن استخدامها كطاقة.",
          "Anaerobic digestion converts biomass into gases that can be used as energy.",
          "Tretja anaerobike shndërron biomasën në gaze që mund të përdoren si energji."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 2,
        text: localized(
          "كيف يتم تخزين الطاقة الشمسية لاستخدامها لاحقًا؟",
          "How is solar energy stored for later use?",
          "Si ruhet energjia diellore për përdorim të mëvonshëm?"
        ),
        options: [
          {
            text: localized("🔋 عبر البطاريات", "🔋 Using batteries", "🔋 Përdorimi i baterive"),
            isCorrect: true,
          },
          {
            text: localized("🔥 بتخزين الحرارة في الفحم", "🔥 Storing heat in coal", "🔥 Ruajtja e nxehtësisë në qymyr"),
            isCorrect: false,
          },
          {
            text: localized("🌊 من خلال حركة المياه", "🌊 Through water movement", "🌊 Nëpërmjet lëvizjes së ujit"),
            isCorrect: false,
          },
          {
            text: localized("🚀 بتخزين الحرارة في الهواء", "🚀 Storing heat in the air", "🚀 Ruajtja e nxehtësisë në ajër"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "تُخزَّن الطاقة الشمسية غالبًا في بطاريات لاستخدامها لاحقًا عند غياب الشمس.",
          "Solar energy is often stored in batteries for later use when the sun is not shining.",
          "Energjia diellore shpesh ruhet në bateri për t’u përdorur më vonë kur nuk ka diell."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 3,
        text: localized(
          "ما هو التحدي الأكبر الذي تواجهه الطاقة الشمسية؟",
          "What is the biggest challenge facing solar energy?",
          "Cila është sfida më e madhe me të cilën përballet energjia diellore?"
        ),
        options: [
          {
            text: localized("☁️ اعتمادها على الظروف الجوية", "☁️ Dependence on weather conditions", "☁️ Varësia nga kushtet e motit"),
            isCorrect: true,
          },
          {
            text: localized("🏭 إنتاج انبعاثات ملوثة", "🏭 Producing pollutant emissions", "🏭 Prodhimi i emetimeve të ndotësve"),
            isCorrect: false,
          },
          {
            text: localized("🚗 استهلاك كميات كبيرة من الوقود", "🚗 High fuel consumption", "🚗 Konsumi i lartë i karburantit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تأثيرها على المحيطات", "🌊 Impact on oceans", "🌊 Ndikimi në oqeane"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "إنتاج الطاقة الشمسية يتأثر بشدة بكمية ضوء الشمس والغيوم.",
          "Solar energy production is highly affected by sunlight and cloud cover.",
          "Prodhimi i energjisë diellore ndikohet shumë nga drita e diellit dhe retë."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 4,
        text: localized(
          "أي من العوامل التالية يؤثر على إنتاج طاقة الرياح؟",
          "Which of these factors affects wind energy production?",
          "Cili nga këta faktorë ndikon në prodhimin e energjisë së erës?"
        ),
        options: [
          {
            text: localized("🌬️ سرعة الرياح", "🌬️ Wind speed", "🌬️ Shpejtësia e erës"),
            isCorrect: true,
          },
          {
            text: localized("🔥 درجة حرارة الوقود", "🔥 Fuel temperature", "🔥 Temperatura e karburantit"),
            isCorrect: false,
          },
          {
            text: localized("💧 كمية المياه الجوفية", "💧 Groundwater levels", "💧 Nivelet e ujërave nëntokësore"),
            isCorrect: false,
          },
          {
            text: localized("🌍 توفر الفحم", "🌍 Coal availability", "🌍 Disponueshmëria e qymyrit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "كلما كانت سرعة الرياح أعلى وأكثر استقرارًا زاد إنتاج طاقة الرياح.",
          "Higher and more stable wind speeds increase wind energy production.",
          "Shpejtësitë më të mëdha dhe më të qëndrueshme të erës rrisin prodhimin e energjisë së erës."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 5,
        text: localized(
          "لماذا تُستخدم الطاقة المائية في توليد الكهرباء؟",
          "Why is hydropower used to generate electricity?",
          "Pse përdoret hidrocentrali për prodhimin e energjisë elektrike?"
        ),
        options: [
          {
            text: localized("⚡ توفر تيارًا كهربائيًا مستقرًا", "⚡ It provides a stable electricity supply", "⚡ Ofron një furnizim të qëndrueshëm me energji elektrike"),
            isCorrect: true,
          },
          {
            text: localized("🌊 يمكن استخدامها في أي مكان", "🌊 It can be used anywhere", "🌊 Mund të përdoret kudo"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تعتمد على الوقود الأحفوري", "🔥 It depends on fossil fuels", "🔥 Varet nga lëndët djegëse fosile"),
            isCorrect: false,
          },
          {
            text: localized("🚀 تحتاج إلى انشطار نووي", "🚀 It requires nuclear fission", "🚀 Kërkon fuzion bërthamor"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "السدود المائية توفر تدفقًا ثابتًا نسبيًا للمياه، مما يعطي كهرباء مستقرة.",
          "Hydropower plants provide a relatively stable water flow, giving stable electricity.",
          "Hidrocentralet sigurojnë rrjedhë të qëndrueshme uji dhe furnizim të qëndrueshëm me energji."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 6,
        text: localized(
          "ما هو أكبر مصدر للطاقة المتجددة في العالم؟",
          "What is the largest source of renewable energy in the world?",
          "Cili është burimi më i madh i energjisë së rinovueshme në botë?"
        ),
        options: [
          {
            text: localized("🌊 الطاقة المائية", "🌊 Hydropower", "🌊 Hidrocentrali"),
            isCorrect: true,
          },
          {
            text: localized("🌬️ طاقة الرياح", "🌬️ Wind energy", "🌬️ Energjia e erës"),
            isCorrect: false,
          },
          {
            text: localized("☀️ الطاقة الشمسية", "☀️ Solar energy", "☀️ Energjia diellore"),
            isCorrect: false,
          },
          {
            text: localized("🛢️ النفط", "🛢️ Oil", "🛢️ Vaji/ Nafta"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "تُعد الطاقة المائية أكبر مصدر للطاقة المتجددة عالميًا حاليًا.",
          "Hydropower is currently the largest source of renewable energy worldwide.",
          "Hidrocentrali është aktualisht burimi më i madh i energjisë së rinovueshme në botë."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 7,
        text: localized(
          "ما هو العيب الرئيسي في طاقة الرياح؟",
          "What is the main drawback of wind energy?",
          "Cili është disavantazhi kryesor i energjisë erës?"
        ),
        options: [
          {
            text: localized("🦅 يمكن أن تؤثر على الطيور", "🦅 It can impact bird populations", "🦅 Mund të ndikojë në popullatat e shpendëve"),
            isCorrect: true,
          },
          {
            text: localized("🌞 تحتاج إلى ضوء الشمس", "🌞 It requires sunlight", "🌞 Kërkon rrezet e diellit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تنتج انبعاثات غازات دفيئة", "🔥 It emits greenhouse gases", "🔥 Lëshon gazra serrë"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تزيد من استهلاك الوقود", "🚗 It increases fuel consumption", "🚗 Rrit konsumin e karburantit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "قد تصطدم بعض أنواع الطيور بتوربينات الرياح، مما يسبب مشكلة بيئية.",
          "Some bird species may collide with wind turbines, causing an environmental concern.",
          "Disa lloje shpendësh mund të përplasen me turbinat e erës, duke krijuar shqetësim mjedisor."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 8,
        text: localized(
          "كيف تولد محطات الطاقة الحرارية الأرضية الكهرباء؟",
          "How do geothermal power plants generate electricity?",
          "Si prodhojnë energji elektrike termocentralet gjeotermale?"
        ),
        options: [
          {
            text: localized("🌋 باستخدام حرارة باطن الأرض", "🌋 By utilizing Earth's internal heat", "🌋 Duke shfrytëzuar nxehtësinë e brendshme të Tokës"),
            isCorrect: true,
          },
          {
            text: localized("☀️ عبر تجميع أشعة الشمس", "☀️ By collecting solar rays", "☀️ Duke mbledhur rrezet e diellit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 عبر تسخير أمواج المحيطات", "🌊 By harnessing ocean waves", "🌊 Duke shfrytëzuar valët e oqeanit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 عبر حرق الغاز الطبيعي", "🔥 By burning natural gas", "🔥 Duke djegur gaz natyror"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "محطات الطاقة الحرارية الأرضية تستغل حرارة باطن الأرض لتوليد بخار يُحرّك التوربينات.",
          "Geothermal plants use Earth's internal heat to generate steam that drives turbines.",
          "Termocentralet gjeotermale shfrytëzojnë nxehtësinë e brendshme të Tokës për të gjeneruar avull që vë në lëvizje turbinat."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 9,
        text: localized(
          "لماذا تُعتبر الوقود الحيوي أكثر صداقة للبيئة من الوقود الأحفوري؟",
          "Why are biofuels considered more environmentally friendly than fossil fuels?",
          "Pse biokarburantet konsiderohen më miqësore me mjedisin sesa lëndët djegëse fosile?"
        ),
        options: [
          {
            text: localized("🌱 يطلق كميات أقل من ثاني أكسيد الكربون", "🌱 They emit less carbon dioxide", "🌱 Ata emetojnë më pak dioksid karboni"),
            isCorrect: true,
          },
          {
            text: localized("🚗 يحسن من أداء المركبات", "🚗 They improve vehicle performance", "🚗 Ata përmirësojnë performancën e automjetit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 ينتج طاقة أكبر", "🔥 They produce more energy", "🔥 Ata prodhojnë më shumë energji"),
            isCorrect: false,
          },
          {
            text: localized("💧 يزيد من مستوى المياه", "💧 They increase water levels", "💧 Ata rrisin nivelet e ujit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الوقود الحيوي عادةً يطلق انبعاثات أقل من الوقود الأحفوري عند احتراقه.",
          "Biofuels usually emit less CO₂ than fossil fuels when burned.",
          "Biokarburantet zakonisht lëshojnë më pak CO₂ sesa lëndët djegëse fosile gjatë djegies."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 10,
        text: localized(
          "ما هو الهدف من استخدام السدود الكهرومائية؟",
          "What is the purpose of using hydropower dams?",
          "Cili është qëllimi i përdorimit të digave hidroenergjetike?"
        ),
        options: [
          {
            text: localized(
              "💧 تخزين المياه والتحكم في تدفقها لتوليد الكهرباء",
              "💧 To store and control water flow for electricity generation",
              "💧 Për të ruajtur dhe kontrolluar rrjedhën e ujit për prodhimin e energjisë elektrike"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة احتياطيات الوقود الأحفوري", "🔥 To increase fossil fuel reserves", "🔥 Për të rritur rezervat e karburanteve fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ تعزيز دوران الرياح", "🌬️ To enhance wind circulation", "🌬️ Për të përmirësuar qarkullimin e erës"),
            isCorrect: false,
          },
          {
            text: localized("🌍 تقليل الاعتماد على الطاقة الشمسية", "🌍 To reduce solar energy reliance", "🌍 Për të reduktuar varësinë e energjisë diellore"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "السدود الكهرومائية تخزن المياه وتتحكم في تدفقها لتوليد الكهرباء عند الحاجة.",
          "Hydropower dams store water and control its flow to generate electricity when needed.",
          "Digat hidroenergjetike ruajnë ujin dhe kontrollojnë rrjedhën e tij për të prodhuar energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 11,
        text: localized(
          "كيف تقوم طاقة الأمواج بتوليد الكهرباء؟",
          "How does wave energy generate electricity?",
          "Si gjeneron energjia valore energji elektrike?"
        ),
        options: [
          {
            text: localized(
              "🌊 عن طريق تحويل حركة الأمواج إلى طاقة ميكانيكية",
              "🌊 By converting wave movement into mechanical energy",
              "🌊 Duke shndërruar lëvizjen e valës në energji mekanike"
            ),
            isCorrect: true,
          },
          {
            text: localized("☀️ عبر امتصاص ضوء الشمس", "☀️ By absorbing sunlight", "☀️ Duke absorbuar rrezet e diellit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 من خلال حرق النفايات العضوية", "🔥 By burning organic waste", "🔥 Duke djegur mbetjet organike"),
            isCorrect: false,
          },
          {
            text: localized("🚗 باستخدام توربينات تعمل بالنفط", "🚗 By using oil-powered turbines", "🚗 Duke përdorur turbinë me naftë"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "طاقة الأمواج تستغل حركة الأمواج وتحويلها إلى طاقة ميكانيكية ثم كهربائية.",
          "Wave energy uses the motion of waves, converting it to mechanical then electrical energy.",
          "Energjia valore shfrytëzon lëvizjen e valëve dhe e shndërron në energji elektrike."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 12,
        text: localized(
          "ما هو الهدف من أنظمة الطاقة الهجينة؟",
          "What is the purpose of hybrid energy systems?",
          "Cili është qëllimi i sistemeve hibride të energjisë?"
        ),
        options: [
          {
            text: localized(
              "🔄 دمج مصادر الطاقة المتجددة لزيادة الكفاءة",
              "🔄 To combine multiple renewable sources for efficiency",
              "🔄 Të kombinohen burime të shumta të rinovueshme për efikasitet"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 استبدال الوقود الأحفوري بالفحم", "🔥 To replace fossil fuels with coal", "🔥 Të zëvendësohen lëndët djegëse fosile me qymyr"),
            isCorrect: false,
          },
          {
            text: localized("🚀 زيادة استخدام الطاقة النووية", "🚀 To increase nuclear energy use", "🚀 Për të rritur përdorimin e energjisë bërthamore"),
            isCorrect: false,
          },
          {
            text: localized("🌊 استخراج النفط من المياه", "🌊 To extract oil from water", "🌊 Për të nxjerrë vaj/naftë nga uji"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الأنظمة الهجينة تجمع أكثر من مصدر متجدد لتوفير طاقة أكثر استقرارًا وكفاءة.",
          "Hybrid systems combine multiple renewable sources to provide more stable and efficient energy.",
          "Sistemet hibride kombinojnë disa burime të rinovueshme për energji më të qëndrueshme dhe efikase."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 13,
        text: localized(
          "أي عامل يقلل من كفاءة الألواح الشمسية؟",
          "Which factor reduces solar panel efficiency?",
          "Cili faktor ul efikasitetin e paneleve diellore?"
        ),
        options: [
          {
            text: localized("☁️ الغيوم", "☁️ Cloud coverage", "☁️ Mbulim me re"),
            isCorrect: true,
          },
          {
            text: localized("🌍 الارتفاعات العالية", "🌍 High altitude", "🌍 Lartësia e madhe"),
            isCorrect: false,
          },
          {
            text: localized("🌊 بخار الماء", "🌊 Water vapor", "🌊 Avulli i ujit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 الحرارة الزائدة", "🔥 Excessive heat", "🔥 Nxehtësia e tepërt"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الغيوم تقلل كمية ضوء الشمس التي تصل إلى الألواح فتقلّ الكفاءة.",
          "Clouds reduce the amount of sunlight reaching panels, lowering efficiency.",
          "Retë ulin sasinë e dritës së diellit që godet panelet duke ulur efikasitetin."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 14,
        text: localized(
          "ما هو التحدي الرئيسي الذي تواجهه الطاقة الحرارية الأرضية؟",
          "What is the main challenge of geothermal energy?",
          "Cila është sfida kryesore e energjisë gjeotermale?"
        ),
        options: [
          {
            text: localized("🌋 توافرها في أماكن محدودة", "🌋 Limited availability in specific locations", "🌋 Disponueshmëria e kufizuar në lokacione specifike"),
            isCorrect: true,
          },
          {
            text: localized("🌞 اعتمادها على ضوء الشمس", "🌞 High dependence on sunlight", "🌞 Varësia e lartë nga rrezet e diellit"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ تغيرات الرياح غير المنتظمة", "🌬️ Inconsistent wind patterns", "🌬️ Modele të paqëndrueshme të erës"),
            isCorrect: false,
          },
          {
            text: localized("🔥 انبعاثات كربونية عالية", "🔥 High carbon emissions", "🔥 Emetimet e larta të karbonit"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "مصادر الطاقة الحرارية الأرضية متوفرة فقط في مناطق ذات نشاط جيولوجي معين.",
          "Geothermal sources are available only in regions with specific geological activity.",
          "Burimet gjeotermale gjenden vetëm në zona me aktivitet të veçantë gjeologjik."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 15,
        text: localized(
          "لماذا تكون طاقة الرياح البحرية أكثر كفاءة من البرية؟",
          "Why is offshore wind energy more efficient than onshore?",
          "Pse energjia e erës në det të hapur është më efikase se ajo në tokë?"
        ),
        options: [
          {
            text: localized(
              "🌊 سرعة الرياح أقوى وأكثر استقرارًا",
              "🌊 Stronger and more consistent wind speeds",
              "🌊 Shpejtësi më të forta dhe më të qëndrueshme të erës"
            ),
            isCorrect: true,
          },
          {
            text: localized("🏝️ تأثير أقل على الحياة البحرية", "🏝️ Less impact on marine life", "🏝️ Më pak ndikim tek jeta detare"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تنتج تلوثًا أكثر", "🔥 It generates more pollution", "🔥 Gjeneron më shumë ndotje"),
            isCorrect: false,
          },
          {
            text: localized("🚗 أقرب إلى المناطق الحضرية", "🚗 It is closer to urban centers", "🚗 Është më afër qendrave urbane"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "في البحر تكون الرياح عادةً أقوى وأكثر ثباتًا من البر، مما يزيد إنتاج الطاقة.",
          "At sea, winds are usually stronger and more consistent than on land, increasing energy output.",
          "Në det të hapur, erërat janë më të forta dhe më të qëndrueshme, gjë që rrit prodhimin e energjisë."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 16,
        text: localized(
          "كيف يمكن للطاقة المائية أن تؤثر سلبًا على البيئة؟",
          "How can hydropower negatively impact the environment?",
          "Si mund të ndikojë negativisht hidrocentralet në mjedis?"
        ),
        options: [
          {
            text: localized(
              "🐟 يمكن أن تؤدي إلى اضطراب النظم البيئية المائية",
              "🐟 It can disrupt aquatic ecosystems",
              "🐟 Mund të çrregullojë ekosistemet ujore"
            ),
            isCorrect: true,
          },
          {
            text: localized("☀️ تقلل من الطاقة الشمسية", "☀️ It reduces solar energy", "☀️ Redukton energjinë diellore"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ تزيد من اضطرابات الرياح", "🌬️ It increases wind turbulence", "🌬️ Rrit turbulencën e erës"),
            isCorrect: false,
          },
          {
            text: localized("🔥 تطلق غازات دفيئة", "🔥 It emits greenhouse gases", "🔥 Lëshon gazra serrë"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "بناء السدود يمكن أن يغيّر مجرى الأنهار ويؤثر على الكائنات المائية.",
          "Dams can alter river flow and disrupt aquatic habitats.",
          "Digat mund të ndryshojnë rrjedhën e lumenjve dhe të çrregullojnë ekosistemet ujore."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 17,
        text: localized(
          "ما هي إحدى طرق زيادة كفاءة توربينات الرياح؟",
          "What is one method of increasing the efficiency of wind turbines?",
          "Cila është një metodë e rritjes së efikasitetit të turbinave me erë?"
        ),
        options: [
          {
            text: localized(
              "⚙️ استخدام توربينات أطول ذات شفرات أكبر",
              "⚙️ Using taller turbines with larger blades",
              "⚙️ Përdorimi i turbinave më të larta me fletë më të mëdha"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 حرق المزيد من الوقود", "🔥 Burning additional fuel", "🔥 Djegia e karburantit shtesë"),
            isCorrect: false,
          },
          {
            text: localized("🌊 زيادة مستويات المياه القريبة", "🌊 Increasing water levels nearby", "🌊 Rritja e niveleve të ujit përreth"),
            isCorrect: false,
          },
          {
            text: localized("☀️ تركيب الألواح الشمسية بجانبها", "☀️ Installing solar panels alongside", "☀️ Instalimi i paneleve diellore përkrah"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "التوربينات الأطول ذات الشفرات الأكبر تلتقط مزيدًا من طاقة الرياح.",
          "Taller turbines with larger blades capture more wind energy.",
          "Turbinat më të larta me fletë më të mëdha kapin më shumë energji nga era."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 18,
        text: localized(
          "ما هو العيب الرئيسي في الطاقة الحيوية؟",
          "What is a disadvantage of biomass energy?",
          "Cili është një disavantazh i energjisë së biomasës?"
        ),
        options: [
          {
            text: localized("🍂 قد تؤدي إلى إزالة الغابات", "🍂 It may contribute to deforestation", "🍂 Mund të kontribuojë në shpyllëzimin"),
            isCorrect: true,
          },
          {
            text: localized("🔥 تنتج تلوثًا أكثر من الفحم", "🔥 It produces more pollution than coal", "🔥 Prodhon më shumë ndotje se qymyri"),
            isCorrect: false,
          },
          {
            text: localized("💧 تتطلب كميات كبيرة من المياه", "💧 It requires large amounts of water", "💧 Kërkon sasi të mëdha uji"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تقلل من حركة الأمواج", "🌊 It reduces wave movement", "🌊 Redukton lëvizjen e valëve"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "استخدام محاصيل للطاقة الحيوية قد يشجع على قطع الغابات لزراعة المزيد.",
          "Growing biomass crops can encourage deforestation to make more farmland.",
          "Kultivimi i kulturave për biomasë mund të nxisë shpyllëzimin për toka bujqësore."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 19,
        text: localized(
          "كيف يساعد تخزين الطاقة في تحسين موثوقية مصادر الطاقة المتجددة؟",
          "How does energy storage improve the reliability of renewable sources?",
          "Si e përmirëson ruajtja e energjisë besueshmërinë e burimeve të rinovueshme?"
        ),
        options: [
          {
            text: localized(
              "🔋 عن طريق تخزين الفائض لاستخدامه لاحقًا",
              "🔋 By storing excess energy for later use",
              "🔋 Duke ruajtur energjinë e tepërt për përdorim të mëvonshëm"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 عن طريق زيادة احتراق الفحم", "🔥 By increasing coal combustion", "🔥 Duke rritur djegien e qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("🚗 عبر تحويل الكهرباء إلى وقود", "🚗 By converting electricity into fuel", "🚗 Duke shndërruar energjinë elektrike në lëndë djegëse"),
            isCorrect: false,
          },
          {
            text: localized("🌍 عبر تقليل الاعتماد على الطاقة الكهرومائية", "🌍 By reducing dependence on hydroelectricity", "🌍 Duke reduktuar varësinë nga hidrocentrali"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "تخزين الفائض من الطاقة المتجددة يسمح باستخدامها عندما يقل الإنتاج.",
          "Storing excess renewable energy allows its use when production is low.",
          "Ruajtja e energjisë së tepërt lejon përdorimin e saj kur prodhimi është i ulët."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 20,
        text: localized(
          "ما هو السبب الرئيسي لاستثمار الحكومات في الطاقة المتجددة؟",
          "What is the main reason governments invest in renewable energy?",
          "Cila është arsyeja kryesore pse qeveritë investojnë në energjinë e rinovueshme?"
        ),
        options: [
          {
            text: localized(
              "🌍 تقليل الاعتماد على الوقود الأحفوري وخفض الانبعاثات",
              "🌍 To reduce dependence on fossil fuels and lower emissions",
              "🌍 Për të reduktuar varësinë nga lëndët djegëse fosile dhe uljen e emetimeve"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة استهلاك الوقود", "🔥 To increase fuel consumption", "🔥 Për të rritur konsumin e karburantit"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تحسين كفاءة المركبات", "🚗 To make vehicles more efficient", "🚗 Për t'i bërë automjetet më efikase"),
            isCorrect: false,
          },
          {
            text: localized("💧 زيادة مستويات المياه الجوفية", "💧 To increase groundwater levels", "💧 Për të rritur nivelet e ujërave nëntokësore"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الاستثمار في الطاقة المتجددة يساعد في تقليل الانبعاثات وتقليل الاعتماد على النفط والفحم.",
          "Investing in renewables helps reduce emissions and dependence on oil and coal.",
          "Investimi në energji të rinovueshme ul emetimet dhe varësinë nga nafta dhe qymyri."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 21,
        text: localized(
          "كيف يُساعد استخدام الطاقة المتجددة في تقليل تغيّر المناخ؟",
          "How does the use of renewable energy help reduce climate change?",
          "Si ndihmon përdorimi i energjisë së ripërtëritshme në uljen e ndryshimeve klimatike?"
        ),
        options: [
          {
            text: localized("يُقلّل من انبعاث الغازات الدفيئة", "It reduces greenhouse gas emissions", "Redukton emetimet e gazeve serrë"),
            isCorrect: true,
          },
          {
            text: localized("يزيد من استهلاك الفحم", "It increases coal consumption", "E rrit konsumin e qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("ليس له تأثير على البيئة", "It has no impact on the environment", "Nuk ka asnjë ndikim në mjedis"),
            isCorrect: false,
          },
          {
            text: localized("يزيد الاعتماد على الوقود الأحفوري", "It increases dependence on fossil fuels", "Shton varësinë nga burimet fosile"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "مصادر الطاقة المتجددة تطلق كميات أقل بكثير من الغازات الدفيئة من الوقود الأحفوري.",
          "Renewable sources emit far fewer greenhouse gases than fossil fuels.",
          "Burimet e ripërtëritshme lëshojnë shumë më pak gaze serrë sesa lëndët djegëse fosile."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 22,
        text: localized(
          "ما الذي يجعل الطاقة الكهرومائية أكثر موثوقية من الطاقة الشمسية؟",
          "What makes hydroelectric power more reliable than solar power?",
          "Çfarë e bën energjinë hidroelektrike më të besueshme se energjia diellore?"
        ),
        options: [
          {
            text: localized("لا تتأثر بظروف الطقس", "It is not affected by weather conditions", "Nuk ndikohet nga kushtet e motit"),
            isCorrect: true,
          },
          {
            text: localized("أقل تكلفة", "It is less expensive", "Është më pak e kushtueshme"),
            isCorrect: false,
          },
          {
            text: localized("لا تتطلب بناءات كبيرة", "It does not require major construction", "Nuk kërkon ndërtim të madh"),
            isCorrect: false,
          },
          {
            text: localized("لا تستخدم الماء", "It does not use water", "Nuk përdor ujë"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "إنتاج الكهرباء من السدود يكون عادةً ثابتًا أكثر من الاعتماد على الشمس المتغيرة.",
          "Hydropower generation is usually more stable than variable solar output.",
          "Prodhimi nga hidrocentralet është zakonisht më i qëndrueshëm se energjia diellore."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 23,
        text: localized(
          "لماذا تُعتَبَر الكتلة الحيوية مصدرًا للطاقة المتجددة؟",
          "Why is biomass considered a renewable energy source?",
          "Pse biomasa konsiderohet burim i ripërtëritshëm i energjisë?"
        ),
        options: [
          {
            text: localized(
              "لأنها تستخدم نفايات عضوية يمكن تجديدها",
              "Because it uses organic waste that can be regenerated",
              "Sepse përdor mbetje organike që mund të rigjenerohen"
            ),
            isCorrect: true,
          },
          {
            text: localized(
              "لأنها لا تنتج انبعاثات غازات دفيئة",
              "Because it produces no greenhouse gas emissions",
              "Sepse nuk prodhon asnjë emetim të gazrave serrë"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "لأنها غير قابلة للنفاد تمامًا مثل الشمس والرياح",
              "Because it is completely inexhaustible like the sun and wind",
              "Sepse është plotësisht e pashtershme si dielli dhe era"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "لأنها ناتجة عن عمليات كيميائية للفحم والنفط",
              "Because it comes from the chemical processes of oil and coal",
              "Sepse vjen nga proceset kimike të naftës dhe qymyrit"
            ),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "الكتلة الحيوية تعتمد على مواد عضوية يمكن زراعتها أو إنتاجها من جديد.",
          "Biomass relies on organic materials that can be grown or regenerated.",
          "Biomasa mbështetet në materiale organike që mund të rigjenerohen."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 24,
        text: localized(
          "ما هما التحدّيان الرئيسيان لطاقة الرياح؟",
          "What are the two main challenges of wind energy?",
          "Cilët janë dy sfidat kryesore të energjisë së erës?"
        ),
        options: [
          {
            text: localized(
              "تقلب سرعة الرياح ومشكلات تخزين الطاقة",
              "Wind speed variability and energy storage issues",
              "Ndryshueshmëria e shpejtësisë së erës dhe problemet e ruajtjes së energjisë"
            ),
            isCorrect: true,
          },
          {
            text: localized("انخفاض التكاليف وارتفاع التلوث", "Low costs and high pollution", "Kostot e ulëta dhe ndotja e lartë"),
            isCorrect: false,
          },
          {
            text: localized("الطلب على المياه وتلوث النفايات", "Water demand and waste pollution", "Nevoja për ujë dhe ndotja nga mbetjet"),
            isCorrect: false,
          },
          {
            text: localized("استخدام الغاز الطبيعي والاعتماد على الطقس", "Natural gas use and weather dependence", "Përdorimi i gazit natyror dhe varësia nga moti"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "تغيّر سرعة الرياح وعدم ثباتها مع تحديات التخزين يجعل طاقة الرياح أقل استقرارًا.",
          "Variable wind speeds and storage challenges make wind energy less stable.",
          "Ndryshimet e shpejtësisë së erës dhe ruajtja e energjisë e bëjnë energjinë e erës më pak të qëndrueshme."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 25,
        text: localized(
          "لماذا لا يمكن استخدام طاقة الرياح كمصدر أساسي في جميع الدول؟",
          "Why can't wind power be used as a primary source in all countries?",
          "Pse energjia e erës nuk mund të përdoret si burim kryesor në të gjitha vendet?"
        ),
        options: [
          {
            text: localized("لأنها تتطلب مساحة كبيرة", "Because it requires a lot of space", "Sepse kërkon shumë hapësirë"),
            isCorrect: true,
          },
          {
            text: localized("لأنها تُنتج الكثير من تلوث الهواء", "Because it produces a lot of air pollution", "Sepse prodhon shumë ndotje ajrore"),
            isCorrect: false,
          },
          {
            text: localized("لأنها لا تعمل في الليل", "Because it can't be used at night", "Sepse nuk mund të përdoret natën"),
            isCorrect: false,
          },
          {
            text: localized("لأنها تستهلك طاقة أكثر مما تُنتج", "Because it consumes more energy than it produces", "Sepse konsumon më shumë energji sesa prodhon"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "مزارع الرياح تحتاج لمساحات واسعة ومناطق ذات رياح مناسبة، وهو غير متوفر في كل مكان.",
          "Wind farms require large areas and suitable wind conditions, not available everywhere.",
          "Parket e erës kërkojnë hapësira të mëdha dhe kushte të përshtatshme ere, jo kudo të disponueshme."
        ),
      },
      {
        quizKey: "green_energy_medium",
        order: 26,
        text: localized(
          "بأي وحدة تُقاس الطاقة المنتَجة من توربين الرياح؟",
          "What is the power produced by a wind turbine measured in?",
          "Në cilën njësi matet fuqia e prodhuar nga një turbinë ere?"
        ),
        options: [
          {
            text: localized("واط", "Watt", "Watt"),
            isCorrect: true,
          },
          {
            text: localized("كيلوغرام", "Kilogram", "Kilogram"),
            isCorrect: false,
          },
          {
            text: localized("فولت", "Volt", "Volt"),
            isCorrect: false,
          },
          {
            text: localized("سلسيوس", "Celsius", "Celsius"),
            isCorrect: false,
          },
        ],
        explanation: localized(
          "قدرة توربينات الرياح تُقاس بوحدة الواط أو الكيلوواط / الميجاواط.",
          "Wind turbine power is measured in watts or in kilowatts/megawatts.",
          "Fuqia e turbinave të erës matet në watt ose kilowatt/megawatt."
        ),
      },

            // ============================================================
      // GREEN ENERGY - ADVANCED (orders 1–34)
      // quizKey: green_energy_advanced
      // ============================================================

      {
        quizKey: "green_energy_hard",
        order: 1,
        text: localized(
          "ما هو العامل الرئيسي الذي يؤثر على كفاءة الألواح الشمسية؟",
          "What is the main factor affecting the efficiency of solar panels?",
          "Cili është faktori kryesor që ndikon në efikasitetin e paneleve diellore?"
        ),
        options: [
          {
            text: localized("🌞 شدة الإشعاع الشمسي", "🌞 Intensity of solar radiation", "🌞 Intensiteti i rrezatimit diellor"),
            isCorrect: true,
          },
          {
            text: localized("🌬️ سرعة الرياح", "🌬️ Wind speed", "🌬️ Shpejtësia e erës"),
            isCorrect: false,
          },
          {
            text: localized("🌊 مستوى الماء في السدود", "🌊 Water levels in dams", "🌊 Nivelet e ujit në diga"),
            isCorrect: false,
          },
          {
            text: localized("🔋 نوع الوقود المستخدم", "🔋 Type of fuel used", "🔋 Lloji i karburantit të përdorur"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 2,
        text: localized(
          "كيف يؤثر التكسير الهيدروليكي على البيئة؟",
          "How does hydraulic fracturing (fracking) impact the environment?",
          "Si ndikon frakturimi hidraulik në mjedis?"
        ),
        options: [
          {
            text: localized("💧 يمكن أن يلوث المياه الجوفية", "💧 It can contaminate groundwater", "💧 Mund të ndotë ujërat nëntokësore"),
            isCorrect: true,
          },
          {
            text: localized("🔥 يقلل انبعاثات الكربون", "🔥 It reduces carbon emissions", "🔥 Redukton emetimet e karbonit"),
            isCorrect: false,
          },
          {
            text: localized("🌱 يزيد من زراعة الأشجار", "🌱 It increases tree planting", "🌱 Rrit mbjelljen e pemëve"),
            isCorrect: false,
          },
          {
            text: localized("🏗️ يحسن من جودة الهواء", "🏗️ It improves air quality", "🏗️ Përmirëson cilësinë e ajrit"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "hard",
        order: 3,
        text: localized(
          "أي من هذه التقنيات يُستخدم لزيادة كفاءة الطاقة الشمسية؟",
          "Which technology is used to improve solar energy efficiency?",
          "Cila teknologji përdoret për të përmirësuar efikasitetin e energjisë diellore?"
        ),
        options: [
          {
            text: localized("🔄 استخدام الألواح متعددة الطبقات", "🔄 Multi-layer solar panels", "🔄 Panele diellore me shumë shtresa"),
            isCorrect: true,
          },
          {
            text: localized("🔥 حرق النفط بجانب الألواح", "🔥 Burning oil alongside panels", "🔥 Djegia e vajit/naftës krahas paneleve"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ دمج طاقة الرياح مع الطاقة الشمسية", "🌬️ Combining wind and solar energy", "🌬️ Kombinimi i energjisë së erës dhe diellit"),
            isCorrect: false,
          },
          {
            text: localized("🚀 زيادة حجم التوربينات", "🚀 Increasing turbine size", "🚀 Rritja e madhësisë së turbinës"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 4,
        text: localized(
          "ما هي التحديات البيئية التي تؤثر على كفاءة واستدامة استخدام طاقة الرياح؟",
          "Which challenge is associated with wind energy?",
          "Cila sfidë është e lidhur me energjinë e erës?"
        ),
        options: [
          {
            text: localized(
              "🦅 تأثيرها على الأنظمة البيئية المحلية، وخاصة على الطيور",
              "🦅 Impact on birds",
              "🦅 Ndikimi tek zogjtë"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 تأثير ذلك على الجدوى البيئية وإنتاج انبعاثات كربونية", "🔥 Carbon emissions", "🔥 Emetimet e karbonit"),
            isCorrect: false,
          },
          {
            text: localized("🚗 ارتفاع استهلاك الوقود والتوجه نحو الطاقة النظيفة", "🚗 High fuel consumption", "🚗 Konsumi i lartë i karburantit"),
            isCorrect: false,
          },
          {
            text: localized(
              "🌊 الحاجة إلى المياه الجوفية خاصة في المناطق التي تعاني من نقص في المياه الجوفية",
              "🌊 Dependence on groundwater",
              "🌊 Varësia nga uji nëntokësor"
            ),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 5,
        text: localized(
          "كيف يمكن تقليل تأثير محطات الطاقة المائية على البيئة؟",
          "How can the environmental impact of hydropower plants be reduced?",
          "Si mund të reduktohet ndikimi mjedisor i hidrocentraleve?"
        ),
        options: [
          {
            text: localized("🐟 بناء ممرات للأسماك", "🐟 Constructing fish passages", "🐟 Ndërtimi i kalimeve për peshqit"),
            isCorrect: true,
          },
          {
            text: localized("🌊 زيادة ارتفاع السدود", "🌊 Increasing dam height", "🌊 Rritja e lartësisë së digës"),
            isCorrect: false,
          },
          {
            text: localized("🔥 استخدام المزيد من الوقود الأحفوري", "🔥 Using more fossil fuels", "🔥 Përdorimi i më shumë lëndëve djegëse fosile"),
            isCorrect: false,
          },
          {
            text: localized("🏗️ تقليل تدفق المياه", "🏗️ Reducing water flow", "🏗️ Reduktimi i rrjedhës së ujit"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 6,
        text: localized(
          "ما هو التأثير السلبي الأساسي لاستخدام الوقود الحيوي؟",
          "What is the primary negative impact of biofuels?",
          "Cili është ndikimi kryesor negativ i biokarburanteve?"
        ),
        options: [
          {
            text: localized("🌾 قد يؤدي إلى إزالة الغابات", "🌾 Deforestation", "🌾 Shpyllëzimi"),
            isCorrect: true,
          },
          {
            text: localized("🔥 يزيد من انبعاثات الكربون", "🔥 Increased carbon emissions", "🔥 Rritja e emetimeve të karbonit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 يسبب تآكل الشواطئ", "🌊 Coastal erosion", "🌊 Erozioni bregdetar"),
            isCorrect: false,
          },
          {
            text: localized("🚗 يقلل من كفاءة السيارات", "🚗 Reduced vehicle efficiency", "🚗 Reduktimi i efikasitetit të automjeteve"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 7,
        text: localized(
          "لماذا تُعتبر الطاقة الحرارية الأرضية غير متاحة في جميع المناطق؟",
          "Why is geothermal energy not available everywhere?",
          "Pse energjia gjeotermale nuk disponohet kudo?"
        ),
        options: [
          {
            text: localized("🌋 تحتاج إلى نشاط جيولوجي معين", "🌋 It requires specific geological activity", "🌋 Kërkon aktivitet gjeologjik specifik"),
            isCorrect: true,
          },
          {
            text: localized("☀️ تعتمد على ضوء الشمس", "☀️ It depends on sunlight", "☀️ Varet nga rrezet e diellit"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ تتطلب سرعات رياح عالية", "🌬️ It needs high wind speeds", "🌬️ Ka nevojë për shpejtësi të lartë të erës"),
            isCorrect: false,
          },
          {
            text: localized("💧 تحتاج إلى مسطحات مائية كبيرة", "💧 It requires large bodies of water", "💧 Kërkon sasi të mëdha uji"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 8,
        text: localized(
          "كيف يمكن تحسين تخزين الطاقة المتجددة؟",
          "How can renewable energy storage be improved?",
          "Si mund të përmirësohet ruajtja e energjisë së rinovueshme?"
        ),
        options: [
          {
            text: localized("🔋 تطوير بطاريات أكثر كفاءة", "🔋 Developing more efficient batteries", "🔋 Zhvillimi i baterive më efikase"),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة استخدام الفحم", "🔥 Increasing coal usage", "🔥 Rritja e përdorimit të qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تقليل إنتاج الطاقة المتجددة", "🚗 Reducing renewable energy production", "🚗 Reduktimi i prodhimit të energjisë së rinovueshme"),
            isCorrect: false,
          },
          {
            text: localized("🌊 توسيع السدود المائية", "🌊 Expanding hydropower dams", "🌊 Zgjerimi i digave hidroenergjetike"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 9,
        text: localized(
          "ما هو العائق الرئيسي أمام التوسع في استخدام الطاقة النووية؟",
          "What is the main obstacle to expanding nuclear energy?",
          "Cila është pengesa kryesore për zgjerimin e energjisë bërthamore?"
        ),
        options: [
          {
            text: localized("☢️ مخاطر التسرب الإشعاعي", "☢️ Risk of radioactive leaks", "☢️ Rreziku i rrjedhjeve radioaktive"),
            isCorrect: true,
          },
          {
            text: localized("🔥 ارتفاع أسعار الوقود الأحفوري", "🔥 Rising fossil fuel prices", "🔥 Rritja e çmimeve të karburanteve fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌞 قلة التعرض للشمس", "🌞 Lack of sunlight", "🌞 Mungesa e dritës së diellit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 التأثير على مستوى المياه", "🌊 Impact on water levels", "🌊 Ndikimi në nivelet e ujit"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 10,
        text: localized(
          "أي من الطرق التالية تساعد في تقليل فقدان الطاقة في الشبكات الكهربائية؟",
          "Which method helps reduce energy loss in power grids?",
          "Cila metodë ndihmon në reduktimin e humbjeve të energjisë në rrjetet e energjisë?"
        ),
        options: [
          {
            text: localized("⚡ استخدام شبكات ذكية", "⚡ Using smart grids", "⚡ Përdorimi i rrjeteve inteligjente"),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة استخدام الفحم", "🔥 Increasing coal consumption", "🔥 Rritja e konsumit të qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 بناء سدود أكبر", "🌊 Building larger dams", "🌊 Ndërtimi i digave më të mëdha"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تقليل عدد السيارات الكهربائية", "🚗 Reducing the number of electric cars", "🚗 Reduktimi i numrit të makinave elektrike"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 11,
        text: localized(
          "ما هو السبب الرئيسي في تذبذب إنتاج الطاقة الشمسية وطاقة الرياح؟",
          "What is the primary reason for fluctuations in solar and wind energy production?",
          "Cili është shkaku kryesor i luhatjeve në prodhimin e energjisë diellore dhe asaj me erë?"
        ),
        options: [
          {
            text: localized("⛅ تغيرات الطقس", "⛅ Weather changes", "⛅ Ndryshimet e motit"),
            isCorrect: true,
          },
          {
            text: localized("🌍 موقع محطات الطاقة", "🌍 Location of power plants", "🌍 Vendndodhja e termocentraleve"),
            isCorrect: false,
          },
          {
            text: localized("🔥 كمية الوقود المستخدم", "🔥 Amount of fuel used", "🔥 Sasia e karburantit të përdorur"),
            isCorrect: false,
          },
          {
            text: localized("💧 مستوى تدفق المياه", "💧 Water flow levels", "💧 Nivelet e rrjedhjes së ujit"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 12,
        text: localized(
          "كيف يمكن دمج مصادر الطاقة المتجددة بشكل فعال في شبكات الكهرباء؟",
          "How can renewable energy sources be effectively integrated into electricity grids?",
          "Si mund të integrohen në mënyrë efektive burimet e rinovueshme të energjisë në rrjetet e energjisë elektrike?"
        ),
        options: [
          {
            text: localized("🔄 استخدام أنظمة تخزين متقدمة", "🔄 Using advanced storage systems", "🔄 Duke përdorur sisteme të avancuara të ruajtjes së energjisë"),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة استهلاك الوقود الأحفوري", "🔥 Increasing fossil fuel consumption", "🔥 Duke rritur konsumin e karburanteve fosile"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تقليل الاستثمار في الطاقة المتجددة", "🚗 Reducing investment in renewable energy", "🚗 Duke reduktuar investimet në energji të rinovueshme"),
            isCorrect: false,
          },
          {
            text: localized("🌊 بناء المزيد من محطات الفحم", "🌊 Building more coal power plants", "🌊 Duke ndërtuar më shumë termocentrale me qymyr"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 13,
        text: localized(
          "ما هو التحدي الرئيسي في استخدام طاقة الأمواج؟",
          "What is the main challenge of wave energy?",
          "Cila është sfida kryesore e energjisë valore?"
        ),
        options: [
          {
            text: localized(
              "🌊 تعرض المعدات للتآكل بسبب المياه المالحة",
              "🌊 Equipment corrosion due to saltwater",
              "🌊 Korrozioni i pajisjeve për shkak të ujit të kripur"
            ),
            isCorrect: true,
          },
          {
            text: localized("☀️ الحاجة إلى التعرض لأشعة الشمس", "☀️ Need for sunlight exposure", "☀️ Nevoja për ekspozim ndaj dritës së diellit"),
            isCorrect: false,
          },
          {
            text: localized("🔥 الحاجة إلى كميات كبيرة من الوقود", "🔥 Large fuel consumption", "🔥 Konsumi i madh i karburantit"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ عدم تأثير سرعة الرياح", "🌬️ Wind speed has no effect", "🌬️ Shpejtësia e erës nuk ka efekt"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 14,
        text: localized(
          "ما هي الأسباب التي تجعل طاقة الرياح البحرية أكثر كفاءة مقارنةً بالطاقة البرية؟",
          "What are the reasons that make offshore wind energy more efficient compared to onshore wind energy?",
          "Cilat janë arsyet që e bëjnë energjinë e erës në det të hapur më efikase në krahasim me energjinë e erës në tokë?"
        ),
        options: [
          {
            text: localized(
              "🌊  سرعة الرياح أقوى وأكثر استقرارًا",
              "🌊 Stronger and more stable wind speeds",
              "🌊 Shpejtësia e erës më e fortë dhe më e qëndrueshme"
            ),
            isCorrect: true,
          },
          {
            text: localized("🏝️  تأثير أقل على الحياة البحرية", "🏝️ Less impact on marine life", "🏝️ Më pak ndikim në jetën detare"),
            isCorrect: false,
          },
          {
            text: localized("🔥 إنتاج تلوث بيئي أكثر", "🔥 Higher environmental pollution output", "🔥 Shkallë më e lartë e ndotjes mjedisore"),
            isCorrect: false,
          },
          {
            text: localized("🚗 قربها من المناطق الحضرية", "🚗 Proximity to urban areas", "🚗 Afërsia me zonat urbane"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 15,
        text: localized(
          "ما هي فائدة الجمع بين الطاقة الشمسية وطاقة الرياح في نظام واحد؟",
          "What is the advantage of combining solar and wind energy in one system?",
          "Cili është avantazhi i kombinimit të energjisë diellore dhe të erës në një sistem?"
        ),
        options: [
          {
            text: localized(
              "⚡ توفير مصدر طاقة أكثر استقرارًا",
              "⚡ Provides a more stable energy source",
              "⚡ Ofron një burim energjie më të qëndrueshëm"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة الحاجة إلى الوقود الأحفوري", "🔥 Increases fossil fuel demand", "🔥 Rrit kërkesën për lëndë djegëse fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تقليل الحاجة إلى الماء", "🌊 Reduces water needs", "🌊 Redukton nevojat për ujë"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تقليل الاعتماد على السيارات الكهربائية", "🚗 Decreases reliance on electric vehicles", "🚗 Zvogëlon varësinë nga automjetet elektrike"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 16,
        text: localized(
          "كيف تؤثر التغيرات المناخية على إنتاج الطاقة المتجددة؟",
          "How do climate changes affect renewable energy production?",
          "Si ndikojnë ndryshimet klimatike në prodhimin e energjisë së ripërtëritshme?"
        ),
        options: [
          {
            text: localized(
              "⛈️ عدم استقرار في إنتاج الطاقة بسبب أنماط الرياح وأشعة الشمس",
              "⛈️ They may alter wind patterns and solar radiation",
              "⛈️ Mund të ndryshojnë modelet e erës dhe rrezatimin diellor"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 تزيد من إنتاج الوقود الأحفوري", "🔥 They increase fossil fuel production", "🔥 Rrisin prodhimin e karburanteve fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تقلل من مستوى المياه الجوفية", "🌊 They reduce groundwater levels", "🌊 Ulin nivelet e ujërave nëntokësore"),
            isCorrect: false,
          },
          {
            text: localized("☀️ ترفع كفاءة الألواح الشمسية", "☀️ They enhance solar panel efficiency", "☀️ Ato rrisin efikasitetin e panelit diellor"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 17,
        text: localized(
          "ما هي الفائدة الرئيسية لاستخدام البطاريات في تخزين الطاقة المتجددة؟",
          "What is the main benefit of using batteries for renewable energy storage?",
          "Cili është përfitimi kryesor i përdorimit të baterive për ruajtjen e energjisë së rinovueshme?"
        ),
        options: [
          {
            text: localized(
              "🔋 ضمان توفر الكهرباء عند الحاجة",
              "🔋 Ensuring electricity availability when needed",
              "🔋 Sigurimi i disponueshmërisë së energjisë elektrike kur është e nevojshme"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 تحسين احتراق الوقود الأحفوري", "🔥 Improving fossil fuel combustion", "🔥 Përmirësimi i djegies së karburanteve fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تقليل الحاجة إلى السدود", "🌊 Reducing the need for dams", "🌊 Reduktimi i nevojës për diga"),
            isCorrect: false,
          },
          {
            text: localized("🚗 زيادة استهلاك الطاقة", "🚗 Increasing energy consumption", "🚗 Rritja e konsumit të energjisë"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 18,
        text: localized(
          "كيف يمكن تحسين كفاءة محطات الطاقة المائية؟",
          "How can the efficiency of hydropower plants be improved?",
          "Si mund të përmirësohet efikasiteti i hidrocentraleve?"
        ),
        options: [
          {
            text: localized("⚙️ تحسين تصميم التوربينات", "⚙️ Enhancing turbine design", "⚙️ Përmirësimi i dizajnit të turbinës"),
            isCorrect: true,
          },
          {
            text: localized("🔥 استخدام المزيد من الفحم", "🔥 Using more coal", "🔥 Përdorimi i më shumë qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("🌬️ تقليل سرعة الرياح", "🌬️ Reducing wind speeds", "🌬️ Ulja e shpejtësisë së erës"),
            isCorrect: false,
          },
          {
            text: localized("🚗 زيادة الاعتماد على الوقود الحيوي", "🚗 Increasing reliance on biofuels", "🚗 Rritja e varësisë nga biokarburantet"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 19,
        text: localized(
          "ما هو أحد العوامل البيئية التي يجب مراعاتها عند استخدام طاقة الكتلة الحيوية؟",
          "What is one environmental factor that should be considered when using biomass energy?",
          "Cili është një faktor mjedisor që duhet marrë parasysh kur përdoret energjia e biomasës?"
        ),
        options: [
          {
            text: localized(
              "🌳 تأثير إزالة الغابات على التنوع البيولوجي",
              "🌳 The impact of deforestation on biodiversity",
              "🌳 Ndikimi i shpyllëzimit në biodiversitet"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 تقليل انبعاثات ثاني أكسيد الكربون", "🔥 Reducing carbon dioxide emissions", "🔥 Reduktimi i emetimeve të dioksidit të karbonit"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تأثير إيجابي على الموارد المائية", "🌊 Positive impact on water resources", "🌊 Ndikim pozitiv në burimet ujore"),
            isCorrect: false,
          },
          {
            text: localized("🚗 تحسين كفاءة الوقود في المحركات", "🚗 Improving fuel efficiency in engines", "🚗 Përmirësimi i efikasitetit të karburantit në motorë"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 20,
        text: localized(
          "كيف يمكن زيادة الاعتماد على الطاقة المتجددة عالميًا؟",
          "How can global reliance on renewable energy be increased?",
          "Si mund të rritet mbështetja globale në energjinë e rinovueshme?"
        ),
        options: [
          {
            text: localized(
              "💰 تقديم حوافز حكومية للاستثمار",
              "💰 Providing government incentives for investment",
              "💰 Ofrimi i stimujve qeveritarë për investime"
            ),
            isCorrect: true,
          },
          {
            text: localized("🔥 زيادة إنتاج الوقود الأحفوري", "🔥 Expanding fossil fuel production", "🔥 Zgjerimi i prodhimit të lëndëve djegëse fosile"),
            isCorrect: false,
          },
          {
            text: localized("🌊 تقليل عدد محطات الطاقة المتجددة", "🌊 Reducing the number of renewable power plants", "🌊 Reduktimi i numrit të termocentraleve të rinovueshme"),
            isCorrect: false,
          },
          {
            text: localized(
              "🚗 زيادة استهلاك السيارات التي تعمل بالوقود التقليدي",
              "🚗 Increasing consumption of conventional fuel vehicles",
              "🚗 Rritja e konsumit të automjeteve me karburant konvencional"
            ),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 21,
        text: localized(
          "كيف يؤثر استخدام الطاقة المتجددة على أمن الطاقة في الدولة؟",
          "How does the use of renewable energy affect a country's energy security?",
          "Si ndikon përdorimi i energjisë së ripërtëritshme në sigurinë energjetike të një vendi?"
        ),
        options: [
          {
            text: localized(
              "يُقلل الحاجة إلى مصادر طاقة أجنبية",
              "Reduces the need for foreign energy sources",
              "Zvogëlon nevojën për burime të huaja të energjisë"
            ),
            isCorrect: true,
          },
          {
            text: localized("يجعل الطاقة أكثر تكلفة للمستهلكين", "Makes energy more expensive for consumers", "E bën energjinë më të shtrenjtë për konsumatorët"),
            isCorrect: false,
          },
          {
            text: localized("يزيد الاعتماد على واردات النفط", "Increase dependence on oil imports", "Rrit varësinë nga importet e naftës"),
            isCorrect: false,
          },
          {
            text: localized("لا يؤثر على أمن الطاقة", "Has no impact on energy security", "Nuk ka ndikim në sigurinë energjetike"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 22,
        text: localized(
          "ما هما التقنيتان اللتان يمكن استخدامهما لتحسين كفاءة الطاقة المتجددة؟",
          "What are the two technologies that can be used to improve the efficiency of renewable energy?",
          "Cilët dy teknologji mund të përdoren për të përmirësuar efikasitetin e energjisë së ripërtëritshme?"
        ),
        options: [
          {
            text: localized(
              "تحسين التوربينات الهوائية والألواح الشمسية",
              "Improving wind turbines and solar panels",
              "Përmirësimi i turbinave me erë dhe baterive solare"
            ),
            isCorrect: true,
          },
          {
            text: localized(
              "زيادة استخدام الطاقة النووية والغاز الطبيعي",
              "Increasing the use of nuclear power and natural gas",
              "Shtimi i konsumit të energjisë bërthamore dhe gazit natyror"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "حرق الفحم والنفط بكفاءة أكبر",
              "Burning coal and oil more efficiently",
              "Djegia më efektive e qymyrit dhe naftës"
            ),
            isCorrect: false,
          },
          {
            text: localized(
              "استخدام الحطب والفحم للتدفئة",
              "Using wood and coal for heating",
              "Përdorimi i drurit dhe qymyrit për ngrohje"
            ),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 23,
        text: localized(
          "ماذا يجب أن تفعل الدولة لتقليل انبعاثات غازات الدفيئة؟",
          "What should a country do to reduce greenhouse gas emissions?",
          "Çfarë duhet të bëjë një vend për të ulur emetimet e gazeve serrë?"
        ),
        options: [
          {
            text: localized(
              "الاستثمار أكثر في مصادر الطاقة المتجددة",
              "To invest more in renewable energy sources",
              "Të investojë në burimet e ripërtëritshme të energjisë"
            ),
            isCorrect: true,
          },
          {
            text: localized("زيادة استخدام الفحم لتوليد الطاقة", "Increase the use of coal for energy", "Të rrisë përdorimin e qymyrit për energji"),
            isCorrect: false,
          },
          {
            text: localized("بناء المزيد من محطات الطاقة التي تعمل بالنفط", "Build more oil-fired power plants", "Të ndërtojë më shumë termocentrale me naftë"),
            isCorrect: false,
          },
          {
            text: localized("تقليل إنتاج الطاقة", "Reduce energy production", "Të ulë prodhimin e energjisë"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 24,
        text: localized(
          "لماذا من المهم تطوير طرق لتخزين الطاقة المتجددة؟",
          "Why is it important to develop methods of storing renewable energy?",
          "Pse është e rëndësishme të zhvillohen metoda të ruajtjes së energjisë së ripërtëritshme?"
        ),
        options: [
          {
            text: localized(
              "لتحقيق توازن في الإمداد عندما يكون الطلب عالياً والإنتاج منخفضاً",
              "To balance supply when the demand is high and the production is low",
              "Për të balancuar furnizimin kur kërkesa është e lartë dhe prodhimi i ulët"
            ),
            isCorrect: true,
          },
          {
            text: localized("لأن الطاقة المتجددة لا يمكن استخدامها فوراً", "Because renewable energy cannot be used immediately", "Sepse energjia e ripërtëritshme nuk mund të përdoret menjëherë"),
            isCorrect: false,
          },
          {
            text: localized("لاستبدال الطاقة الأحفورية تماماً", "To completely replace fossil energy", "Për të zëvendësuar plotësisht energjinë fosile"),
            isCorrect: false,
          },
          {
            text: localized("لأن البطاريات رخيصة ومتوفرة بسهولة", "Because batteries are cheap and readily available", "Sepse bateritë janë të lira dhe lehtë të disponueshme"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 25,
        text: localized(
          "ما هي الطريقة المبتكرة لتحسين استخدام الطاقة الشمسية؟",
          "What is an innovative way to improve the use of solar energy?",
          "Cila është një mënyrë inovative për të përmirësuar përdorimin e energjisë diellore?"
        ),
        options: [
          {
            text: localized(
              "استخدام الألواح الشمسية المدمجة في المباني",
              "Using solar panels integrated into buildings",
              "Përdorimi i paneleve solare të integruara në ndërtesa"
            ),
            isCorrect: true,
          },
          {
            text: localized("زيادة استخدام الغاز الطبيعي", "Increasing the use of natural gas", "Rritja e përdorimit të gazit natyror"),
            isCorrect: false,
          },
          {
            text: localized("تركيب المزيد من محطات الطاقة النووية", "Installing more nuclear plants", "Instalimi i më shumë impianteve bërthamore"),
            isCorrect: false,
          },
          {
            text: localized("زيادة استخدام الحطب للتدفئة", "Increasing the use of wood for heating", "Rritja e përdorimit të drurit për ngrohje"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 26,
        text: localized(
          "كيف يمكن للتعليم أن يساعد في زيادة استخدام الطاقة الخضراء؟",
          "How can education help increase the use of green energy?",
          "Si mund të ndihmojë edukimi në rritjen e përdorimit të energjisë së gjelbër?"
        ),
        options: [
          {
            text: localized(
              "من خلال توعية الناس بفوائد الطاقة المتجددة",
              "By informing people about the benefits of renewable energy",
              "Duke informuar njerëzit për përfitimet e energjisë së ripërtëritshme"
            ),
            isCorrect: true,
          },
          {
            text: localized("من خلال تقليل الاستثمارات في المصادر المتجددة", "By reducing investments in renewable sources", "Duke zvogëluar investimet në burime të ripërtëritshme"),
            isCorrect: false,
          },
          {
            text: localized(
              "من خلال الحد من المعلومات حول تكاليف الطاقة الخضراء",
              "By limiting information about the high costs of green energy",
              "Duke kufizuar informacionin rreth kostove të larta të energjisë së gjelbër"
            ),
            isCorrect: false,
          },
          {
            text: localized("من خلال الترويج لاستخدام الفحم كمصدر للطاقة", "By promoting the use of coal as an energy source", "Duke promovuar përdorimin e qymyrit si burim energjie"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 27,
        text: localized(
          "كيف تؤثر إزالة الكربون في عملية أنتاج الطاقة؟",
          "How does decarbonization in energy production affect the energy industry?",
          "Si ndikon dekarbonizimi në industrinë energjetike?"
        ),
        options: [
          {
            text: localized("تقلل انبعاثات الكربون", "Reduces carbon emissions", "Zvogëlon emetimet e karbonit"),
            isCorrect: true,
          },
          {
            text: localized("تزيد التلوث البيئي", "Increases environmental pollution", "Rrit ndotjen e mjedisit"),
            isCorrect: false,
          },
          {
            text: localized("ليس لها تأثير على المناخ العالمي", "It has no impact on global climate", "Nuk ka ndikim në klimën globale"),
            isCorrect: false,
          },
          {
            text: localized("تزيد الاعتماد على الفحم والنفط", "Increases dependence on coal and oil", "Rrit varësinë nga qymyri dhe nafta"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 28,
        text: localized(
          "ما هو التأثير الرئيسي لاستخدام الطاقة الحيوية (البيوإنرجي)؟",
          "What is the main impact of using bioenergy?",
          "Cili është ndikimi kryesor i përdorimit të bioenergjisë?"
        ),
        options: [
          {
            text: localized("تقلل من النفايات العضوية", "It reduces organic waste", "Zvogëlon mbeturinat organike"),
            isCorrect: true,
          },
          {
            text: localized("ليس لها تأثير على البيئة", "It has no impact on the environment", "Nuk ka ndikim në mjedis"),
            isCorrect: false,
          },
          {
            text: localized("تزيد استهلاك النفط", "It increases oil consumption", "Rrit konsumin e naftës"),
            isCorrect: false,
          },
          {
            text: localized("تزيد التلوث الصناعي", "It increases industrial pollution", "Shton ndotjen industriale"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 29,
        text: localized(
          "لماذا لا تكون الطاقة الكهرومائية مستدامة دائماً؟",
          "Why is hydroelectric power not always sustainable?",
          "Pse energjia hidroelektrike nuk është gjithmonë e qëndrueshme?"
        ),
        options: [
          {
            text: localized(
              "لأن منسوب المياه في الأنهار يمكن أن ينخفض",
              "Because water levels in rivers can dramatically drop",
              "Sepse lumenjtë mund të kenë nivele të ulëta uji"
            ),
            isCorrect: true,
          },
          {
            text: localized("لأنها تستخدم الكثير من النفط", "Because it uses a lot of oil", "Sepse përdor shumë naftë"),
            isCorrect: false,
          },
          {
            text: localized("لأنها لا تؤثر على البيئة", "Because it creates no environmental impact", "Sepse nuk krijon asnjë ndikim në mjedis"),
            isCorrect: false,
          },
          {
            text: localized("لأنها تتطلب حرق الفحم", "Because it requires burning coal", "Sepse kërkon djegie të qymyrit"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 30,
        text: localized(
          "قررت مدينة تركيب ألواح شمسية على جميع المدارس الحكومية. ما الفائدة الرئيسية من هذا الإجراء؟",
          "A city decides to install solar panels on all public schools. What is the main benefit of this measure?",
          "Një qytet vendos të instalojë panele diellore në të gjitha shkollat publike. Cili është përfitimi kryesor i kësaj mase?"
        ),
        options: [
          {
            text: localized(
              "خفض تكاليف الطاقة وتقليل التلوث",
              "Reducing energy costs and reducing pollution",
              "Kursimi i kostove të energjisë dhe ulja e ndotjes"
            ),
            isCorrect: true,
          },
          {
            text: localized("زيادة استخدام الفحم", "Increasing coal use", "Rritja e përdorimit të qymyrit"),
            isCorrect: false,
          },
          {
            text: localized("خلق تلوث صناعي", "Creating industrial pollution", "Krijimi i ndotjes industriale"),
            isCorrect: false,
          },
          {
            text: localized("زيادة الاعتماد على النفط", "Increasing dependence on oil", "Rritja e varësisë nga nafta"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 31,
        text: localized(
          "تنتج شركة سيارات كهربائية ببطاريات يتم شحنها من مصادر متجددة. كيف يؤثر هذا على البيئة؟",
          "A company produces electric vehicles with batteries that are charged with electricity from renewable sources. How does this affect the environment?",
          "Një kompani prodhon automjete elektrike me bateri që karikohen nga burime të ripërtëritshme. Si ndikon kjo në mjedis?"
        ),
        options: [
          {
            text: localized(
              "يقلل بشكل كبير من انبعاثات الغازات الدفيئة والتلوث",
              "It significantly reduces greenhouse gas emissions and pollution",
              "Ul ndjeshëm emetimet e gazeve serrë dhe ndotjen"
            ),
            isCorrect: true,
          },
          {
            text: localized("ليس له تأثير على البيئة", "It has no impact on the environment", "Nuk ka ndikim në mjedis"),
            isCorrect: false,
          },
          {
            text: localized("يزيد التلوث الناتج عن تصنيع البطاريات", "It increases pollution from battery production", "Rrit ndotjen nga prodhimi i baterive"),
            isCorrect: false,
          },
          {
            text: localized("يزيد استهلاك الطاقة النووية", "It increases the consumption of nuclear energy", "Rrit konsumimin e energjisë bërthamore"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 32,
        text: localized(
          "تريد مجتمع ريفي أن يكون خالياً تماماً من الوقود الأحفوري. ما أفضل مزيج من مصادر الطاقة لتحقيق ذلك؟",
          "A rural community wants to be 100% free of fossil fuels. What is the best combination of energy sources to achieve this goal?",
          "Një komunitet rural dëshiron të jetë 100% i pavarur nga energjia fosile. Cili është kombinimi më i mirë i burimeve të energjisë për ta arritur këtë?"
        ),
        options: [
          {
            text: localized(
              "الطاقة الشمسية وطاقة الرياح والطاقة الكهرومائية",
              "Solar, wind, and hydroelectric power",
              "Energjia diellore, e erës dhe hidroelektrike"
            ),
            isCorrect: true,
          },
          {
            text: localized("الطاقة النووية والنفط", "Nuclear and oil", "Energjia bërthamore dhe nafta"),
            isCorrect: false,
          },
          {
            text: localized("الغاز الطبيعي والفحم", "Natural gas and coal power", "Energjia e gazit natyror dhe qymyri"),
            isCorrect: false,
          },
          {
            text: localized("الطاقة الشمسية والطاقة النووية", "Solar and nuclear power", "Energjia diellore dhe bërthamore"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 33,
        text: localized(
          "ما هو تأثير استخدام المزيد من البطاريات لتخزين الطاقة المتجددة؟",
          "What is the impact of using more batteries to store renewable energy?",
          "Cili është ndikimi i përdorimit të më shumë baterive për ruajtjen e energjisë së ripërtëritshme?"
        ),
        options: [
          {
            text: localized(
              "يزيد الكفاءة ويقلل الاعتماد على الطاقة الأحفورية",
              "Increases efficiency and reduces dependence on fossil energy",
              "Rrit efikasitetin dhe zvogëlon varësinë nga energjia fosile"
            ),
            isCorrect: true,
          },
          {
            text: localized("يقلل كفاءة الطاقة", "Reduces energy efficiency", "Ul efikasitetin e energjisë"),
            isCorrect: false,
          },
          {
            text: localized("يزيد من تلوث الهواء", "Increases air pollution", "Rrit ndotjen e ajrit"),
            isCorrect: false,
          },
          {
            text: localized("يستخدم المزيد من الطاقة الأحفورية", "Uses more fossil energy", "Përdor më shumë energji fosile"),
            isCorrect: false,
          },
        ],
      },

      {
        quizKey: "green_energy_hard",
        order: 34,
        text: localized(
          "إذا استثمرت دولة ما أكثر في مصادر الطاقة المتجددة، ما هو الأثر المحتمل على المدى الطويل؟",
          "If a country invests more in renewable energy, what is a possible long-term effect?",
          "Nëse një vend investon më shumë në burime të ripërtëritshme, cili është një efekt afatgjatë i mundshëm?"
        ),
        options: [
          {
            text: localized(
              "زيادة الاستقلالية في الطاقة وتقليل التلوث",
              "Increased energy independence and reduced pollution",
              "Rritja e pavarësisë energjetike dhe ulja e ndotjes"
            ),
            isCorrect: true,
          },
          {
            text: localized("زيادة تكاليف الطاقة للمستهلكين", "Increased energy costs for consumers", "Rritja e kostove të energjisë për konsumatorët"),
            isCorrect: false,
          },
          {
            text: localized("زيادة الاعتماد على الوقود الأحفوري", "Increased dependence on fossil fuels", "Rritja e varësisë nga burimet fosile"),
            isCorrect: false,
          },
          {
            text: localized("زيادة استخدام الطاقة النووية", "Increased use of nuclear power", "Përdorimi më shumë i burimeve bërthamore"),
            isCorrect: false,
          },
        ],
      },

      {
    quizKey: "waste_management_easy",
    order: 1,
    text: localized(
      "ما هو التعريف الأساسي للنفايات؟",
      "What is the basic definition of waste?",
      "Cila është përkufizimi bazë i mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "المواد التي يتخلص منها الإنسان نتيجة لأنشطته اليومية.",
          "Materials discarded by humans due to daily activities.",
          "Materiale të hedhura nga njerëzit për shkak të aktiviteteve të përditshme."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "المواد التي يمكن استخدامها في البناء.",
          "Materials used in construction.",
          "Materiale të përdorura në ndërtim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المواد العضوية المفيدة فقط.",
          "Only organic useful materials.",
          "Vetëm materiale organike të dobishme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المخلفات الزراعية فقط.",
          "Only agricultural residues.",
          "Vetëm mbetje bujqësore."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات هي المواد التي يتخلص منها الإنسان نتيجة لأنشطته اليومية.",
      "Waste is material discarded by humans as a result of daily activities.",
      "Mbetjet janë materiale të hedhura nga njerëzit si rezultat i aktiviteteve të tyre të përditshme."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 2,
    text: localized(
      "ما هو الهدف الرئيسي من إدارة النفايات؟",
      "What is the main goal of waste management?",
      "Cili është qëllimi kryesor i menaxhimit të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "تقليل التأثير البيئي للنفايات.",
          "To reduce the environmental impact of waste.",
          "Të reduktohet ndikimi i mbetjeve në mjedis."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة إنتاج النفايات.",
          "To increase waste production.",
          "Të rritet prodhimi i mbetjeve."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص العشوائي منها.",
          "To dispose of waste randomly.",
          "Të hidhen mbetjet në mënyrë të rastësishme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحويل النفايات إلى رماد فقط.",
          "To only burn waste into ash.",
          "Të digjen të gjitha mbetjet në hi."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الهدف من إدارة النفايات هو تقليل آثارها السلبية على البيئة والصحة.",
      "The goal of waste management is to reduce its negative impact on the environment and health.",
      "Qëllimi i menaxhimit të mbetjeve është të reduktojë ndikimin e tyre negativ në mjedis dhe shëndet."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 3,
    text: localized(
      "أي نوع من النفايات ينتج عن المنازل؟",
      "Which type of waste comes from households?",
      "Cili lloj mbetjesh vjen nga familjet?"
    ),
    options: [
      {
        text: localized("النفايات المنزلية.", "Household waste.", "Mbetje shtëpiake."),
        isCorrect: true,
      },
      {
        text: localized("النفايات الصناعية.", "Industrial waste.", "Mbetje industriale."),
        isCorrect: false,
      },
      {
        text: localized("النفايات النووية.", "Nuclear waste.", "Mbetje bërthamore."),
        isCorrect: false,
      },
      {
        text: localized("النفايات الطبية.", "Medical waste.", "Mbetje mjekësore."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الناتجة عن المنازل تسمى نفايات منزلية.",
      "Waste produced by households is called household waste.",
      "Mbetjet që krijohen nga familjet quhen mbetje shtëpiake."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 4,
    text: localized(
      "ما هو المقصود بإعادة التدوير؟",
      "What does recycling mean?",
      "Çfarë do të thotë riciklim?"
    ),
    options: [
      {
        text: localized(
          "تحويل النفايات إلى مواد جديدة قابلة للاستخدام.",
          "Converting waste into new usable materials.",
          "Shndërrimi i mbetjeve në materiale të reja të përdorshme."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رمي النفايات في البحر.",
          "Throwing waste into the sea.",
          "Hedhja e mbetjeve në det."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دفن النفايات في الصحراء.",
          "Burying waste in the desert.",
          "Varrosja e mbetjeve në shkretëtirë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات بدون معالجة.",
          "Burning waste without treatment.",
          "Djegia e mbetjeve pa trajtim."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة التدوير تعني استخدام النفايات كمواد خام لصناعة منتجات جديدة.",
      "Recycling means using waste as raw material to create new products.",
      "Riciklimi do të thotë përdorimi i mbetjeve si lëndë të parë për produkte të reja."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 5,
    text: localized(
      "أي مما يلي مثال على النفايات العضوية؟",
      "Which of the following is an example of organic waste?",
      "Cili nga alternativat e mëposhtme është shembull i mbetjeve organike?"
    ),
    options: [
      {
        text: localized("بقايا الطعام.", "Food leftovers.", "Mbetjet ushqimore."),
        isCorrect: true,
      },
      {
        text: localized("البلاستيك.", "Plastic.", "Plastika."),
        isCorrect: false,
      },
      {
        text: localized("الزجاج.", "Glass.", "Qelqi."),
        isCorrect: false,
      },
      {
        text: localized("الألمنيوم.", "Aluminum.", "Alumini."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "بقايا الطعام من النفايات العضوية لأنها قابلة للتحلل.",
      "Food leftovers are organic waste because they are biodegradable.",
      "Mbetjet ushqimore janë mbetje organike sepse dekompozohen natyrshëm."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 6,
    text: localized(
      "ما هي أكثر طريقة أمانًا للتخلص من النفايات الطبية؟",
      "What is the safest way to dispose of medical waste?",
      "Cili është mënyra më e sigurt për të hequr qafe mbetjet mjekësore?"
    ),
    options: [
      {
        text: localized(
          "الحرق في منشآت مخصصة.",
          "Incineration in specialized facilities.",
          "Djegia në objekte të specializuara."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رميها في مكب النفايات العادي.",
          "Throwing it in a regular landfill.",
          "Hedhja në një vendgrumbullim të zakonshëm."
        ),
        isCorrect: false,
      },
      {
        text: localized("إلقاؤها في النهر.", "Dumping it in a river.", "Hedhja në lumë."),
        isCorrect: false,
      },
      {
        text: localized("تخزينها في المنزل.", "Storing it at home.", "Ruajtja në shtëpi."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الطبية تحتاج إلى حرق ومعالجة خاصة لتجنب نشر الأمراض.",
      "Medical waste must be specially incinerated and treated to avoid spreading diseases.",
      "Mbetjet mjekësore duhet të digjen dhe trajtohen posaçërisht për të shmangur përhapjen e sëmundjeve."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 7,
    text: localized(
      "ما هو أفضل حل للتخلص من النفايات البلاستيكية؟",
      "What is the best solution for ridding of plastic waste?",
      "Cila është zgjidhja më e mirë për t’u shpëtuar nga mbetjet plastike?"
    ),
    options: [
      {
        text: localized("إعادة التدوير.", "Recycling.", "Riciklimi."),
        isCorrect: true,
      },
      {
        text: localized(
          "حرقها في أماكن مفتوحة.",
          "Burning in open spaces.",
          "Djegia në vende të hapura."
        ),
        isCorrect: false,
      },
      {
        text: localized("دفنها في الأرض.", "Burying it underground.", "Varrosja nën tokë."),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص منها في البحر.",
          "Disposing of it in the ocean.",
          "Hedhja në oqean."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة تدوير البلاستيك تقلل كميته في الطبيعة وتخفف التلوث.",
      "Recycling plastic reduces its amount in nature and decreases pollution.",
      "Riciklimi i plastikës ul sasinë e saj në natyrë dhe ndotjen."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 8,
    text: localized(
      "أي من هذه النفايات يمكن إعادة تدويرها بسهولة؟",
      "Which of these types of waste can be easily recycled?",
      "Cilat nga këto lloje mbetjesh mund të riciklohen lehtësisht?"
    ),
    options: [
      {
        text: localized("الورق والزجاج.", "Paper and glass.", "Letra dhe qelqi."),
        isCorrect: true,
      },
      {
        text: localized("النفايات النووية.", "Nuclear waste.", "Mbetjet bërthamore."),
        isCorrect: false,
      },
      {
        text: localized("النفايات البيولوجية.", "Biological waste.", "Mbetjet biologjike."),
        isCorrect: false,
      },
      {
        text: localized("النفايات السامة.", "Toxic waste.", "Mbetjet toksike."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الورق والزجاج من أكثر المواد التي يمكن إعادة تدويرها بسهولة وبكثرة.",
      "Paper and glass are among the easiest and most common materials to recycle.",
      "Letra dhe qelqi janë nga materialet më të lehta dhe më të zakonshme për riciklim."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 9,
    text: localized(
      "ما هي إحدى فوائد إعادة التدوير؟",
      "What is a benefit of recycling?",
      "Cili është një përfitim i riciklimit?"
    ),
    options: [
      {
        text: localized(
          "تقليل استهلاك الموارد الطبيعية.",
          "Reducing natural resource consumption.",
          "Ulja e konsumit të burimeve natyrore."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة النفايات في الطبيعة.",
          "Increasing waste in nature.",
          "Rritja e mbetjeve në natyrë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تلويث الهواء والماء.",
          "Polluting air and water.",
          "Ndotja e ajrit dhe ujit."
        ),
        isCorrect: false,
      },
      {
        text: localized("تدمير الغابات.", "Destroying forests.", "Shkatërrimi i pyjeve."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة التدوير تقلل الحاجة لاستخراج موارد جديدة من الطبيعة.",
      "Recycling reduces the need to extract new resources from nature.",
      "Riciklimi ul nevojën për të nxjerrë burime të reja nga natyra."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 10,
    text: localized(
      "ما هي النفايات الإلكترونية؟",
      "What is electronic waste?",
      "Çfarë janë mbetjet elektronike?"
    ),
    options: [
      {
        text: localized(
          "الأجهزة الكهربائية غير المستخدمة.",
          "Unused electrical devices.",
          "Pajisje elektrike të papërdorura."
        ),
        isCorrect: true,
      },
      {
        text: localized("بقايا الطعام.", "Food leftovers.", "Mbetje ushqimore."),
        isCorrect: false,
      },
      {
        text: localized("العبوات الورقية.", "Paper packaging.", "Ambalazhe letre."),
        isCorrect: false,
      },
      {
        text: localized("مخلفات البناء.", "Construction debris.", "Mbetje ndërtimi."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الإلكترونية تشمل الأجهزة الكهربائية والإلكترونية التي لم تعد تُستخدم.",
      "Electronic waste includes electrical and electronic devices that are no longer used.",
      "Mbetjet elektronike përfshijnë pajisjet elektrike dhe elektronike që nuk përdoren më."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 11,
    text: localized(
      "كيف يمكن التقليل من إنتاج النفايات؟",
      "How can waste production be reduced?",
      "Si mund të reduktohet prodhimi i mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "باستخدام المنتجات القابلة لإعادة الاستخدام.",
          "By using reusable products.",
          "Duke përdorur produkte të ripërdorshme."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من البلاستيك.",
          "By using more plastic.",
          "Duke përdorur më shumë plastikë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات في الطبيعة.",
          "By throwing waste in nature.",
          "Duke hedhur mbeturinat në natyrë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عدم فرز النفايات.",
          "By not sorting waste.",
          "Duke mos i ndarë mbeturinat."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "استخدام المنتجات القابلة لإعادة الاستخدام يقلل كمية النفايات المنتجة.",
      "Using reusable products reduces the amount of waste produced.",
      "Përdorimi i produkteve të ripërdorshme ul sasinë e mbetjeve."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 12,
    text: localized(
      "ماذا يحدث عند عدم التخلص الصحيح من النفايات؟",
      "What happens when waste is not properly disposed of?",
      "Çfarë ndodh kur mbeturinat nuk hidhen siç duhet?"
    ),
    options: [
      {
        text: localized(
          "انتشار الأمراض والتلوث.",
          "Spread of diseases and pollution.",
          "Përhapje sëmundjesh dhe ndotje."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الموارد الطبيعية.",
          "Increased natural resources.",
          "Rritje të burimeve natyrore."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة الهواء.",
          "Improved air quality.",
          "Përmirësim të cilësisë së ajrit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل استهلاك المياه.",
          "Reduced water consumption.",
          "Ulje të konsumit të ujit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التخلص الخاطئ من النفايات يسبب تلوثًا وانتشارًا للأمراض.",
      "Improper waste disposal causes pollution and spread of diseases.",
      "Hedhja e gabuar e mbetjeve shkakton ndotje dhe përhapje sëmundjesh."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 13,
    text: localized(
      "ما هي الطريقة الصحيحة للتخلص من البطاريات القديمة؟",
      "What is the correct way to dispose of old batteries?",
      "Cila është mënyra e duhur për të hedhur bateritë e vjetra?"
    ),
    options: [
      {
        text: localized(
          "إعادة تدويرها في مراكز متخصصة.",
          "Recycling them in specialized centers.",
          "Riciklimi i tyre në qendra të specializuara."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رميها في القمامة العادية.",
          "Throwing them in regular trash.",
          "Hedhja e tyre në plehrat e zakonshme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دفنها في الحديقة.",
          "Burying them in the garden.",
          "Varrosja në kopsht."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إلقاؤها في الأنهار.",
          "Throwing them into rivers.",
          "Hedhja në lumenj."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البطاريات تحتوي على مواد سامة ويجب تدويرها في مراكز خاصة.",
      "Batteries contain toxic materials and must be recycled in special centers.",
      "Bateritë përmbajnë materiale toksike dhe duhet të riciklohen në qendra të veçanta."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 14,
    text: localized(
      "ما هو تأثير النفايات البلاستيكية على البيئة؟",
      "What is the impact of plastic waste on the environment?",
      "Cili është ndikimi i mbetjeve plastike në mjedis?"
    ),
    options: [
      {
        text: localized(
          "يتحلل ببطء شديد، مما يؤدي إلى تلوث البيئة.",
          "It decomposes very slowly, leading to environmental pollution.",
          "Ato dekompozohen shumë ngadalë, duke shkaktuar ndotje mjedisore."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يتحلل خلال أيام قليلة.",
          "It decomposes within a few days.",
          "Ato dekompozohen brenda disa ditësh."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مفيد للتربة.",
          "It is beneficial for the soil.",
          "Janë të dobishme për tokën."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يؤثر على الحياة البحرية.",
          "It does not affect marine life.",
          "Nuk ndikojnë jetën detare."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البلاستيك يبقى في البيئة لفترات طويلة ويسبب تلوثًا كبيرًا.",
      "Plastic remains in the environment for a long time and causes major pollution.",
      "Plastika qëndron shumë gjatë në mjedis dhe shkakton ndotje të madhe."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 15,
    text: localized(
      "كيف يمكن إعادة تدوير الورق؟",
      "How can paper be recycled?",
      "Si mund të riciklohet letra?"
    ),
    options: [
      {
        text: localized(
          "تحويله إلى منتجات ورقية جديدة مثل الدفاتر والكرتون.",
          "It can be converted into new paper products like notebooks and cardboard.",
          "Mund të kthehet në produkte të reja letre si fletore dhe karton."
        ),
        isCorrect: true,
      },
      {
        text: localized("إذابته في الماء.", "Dissolved in water.", "Tretet në ujë."),
        isCorrect: false,
      },
      {
        text: localized("رميه في الشارع.", "Thrown in the street.", "Hidhet në rrugë."),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدامه كوقود للحرق.",
          "Used as fuel for burning.",
          "Përdoret si karburant për djegie."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الورق يعاد تدويره لصناعة دفاتر، كرتون ومنتجات ورقية أخرى.",
      "Paper is recycled to make notebooks, cardboard and other paper products.",
      "Letra riciklohet për të prodhuar fletore, karton dhe produkte të tjera letre."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 16,
    text: localized(
      "أي نوع من النفايات ينتج عن المستشفيات؟",
      "Which type of waste is generated by hospitals?",
      "Çfarë lloj mbetjesh krijohen nga spitalet?"
    ),
    options: [
      {
        text: localized("النفايات الطبية.", "Medical waste.", "Mbetje mjekësore."),
        isCorrect: true,
      },
      {
        text: localized("النفايات الصناعية.", "Industrial waste.", "Mbetje industriale."),
        isCorrect: false,
      },
      {
        text: localized("النفايات الزراعية.", "Agricultural waste.", "Mbetje bujqësore."),
        isCorrect: false,
      },
      {
        text: localized("النفايات التجارية.", "Commercial waste.", "Mbetje tregtare."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المستشفيات تنتج نفايات طبية تحتاج إلى معالجة خاصة.",
      "Hospitals generate medical waste that needs special treatment.",
      "Spitalet krijojnë mbetje mjekësore që kërkojnë trajtim të veçantë."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 17,
    text: localized(
      "ما هو الأثر البيئي لإعادة التدوير؟",
      "What is the environmental impact of recycling?",
      "Cili është ndikimi mjedisor i riciklimit?"
    ),
    options: [
      {
        text: localized("تقليل التلوث البيئي.", "Reducing environmental pollution.", "Ulja e ndotjes mjedisore."),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة انبعاثات الغازات الضارة.",
          "Increasing harmful gas emissions.",
          "Rritja e emetimeve të gazrave të dëmshëm."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استهلاك الطاقة.",
          "Increasing energy consumption.",
          "Rritja e konsumit të energjisë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استهلاك الموارد الطبيعية.",
          "Increasing natural resource consumption.",
          "Rritja e konsumit të burimeve natyrore."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة التدوير تقلل التلوث وتخفف الضغط على الموارد الطبيعية.",
      "Recycling reduces pollution and relieves pressure on natural resources.",
      "Riciklimi ul ndotjen dhe presionin mbi burimet natyrore."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 18,
    text: localized(
      "كيف يمكن إعادة استخدام نفايات الزجاج؟",
      "How can glass waste be reused?",
      "Si mund të ripërdoret mbetja e qelqit?"
    ),
    options: [
      {
        text: localized(
          "إعادة صهرها وتصنيعها إلى زجاج جديد.",
          "By melting it and making new glass products.",
          "Duke e shkrirë dhe prodhuar produkte të reja qelqi."
        ),
        isCorrect: true,
      },
      {
        text: localized("دفنها في الأرض.", "By burying it underground.", "Duke e varrosur në tokë."),
        isCorrect: false,
      },
      {
        text: localized(
          "طحنها وخلطها مع التربة.",
          "By grinding and mixing it with soil.",
          "Duke e bluajtur dhe përzier me tokë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرقها في الهواء الطلق.",
          "By burning it in open air.",
          "Duke e djegur në ajër të hapur."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "يمكن إعادة صهر الزجاج لصناعة عبوات ومنتجات زجاجية جديدة.",
      "Glass can be remelted to produce new glass containers and products.",
      "Qelqi mund të shkrihet sërish për të prodhuar produkte të reja qelqi."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 19,
    text: localized(
      "أي من هذه العوامل يساعد في تحسين إدارة النفايات؟",
      "Which of these factors helps improve waste management?",
      "Cili nga këta faktorë ndihmon në përmirësimin e menaxhimit të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "فرز النفايات من المصدر.",
          "Sorting waste at the source.",
          "Ndarja e mbetjeve në burim."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "خلط النفايات بأنواعها المختلفة.",
          "Mixing all types of waste together.",
          "Përzierja e të gjitha llojeve të mbetjeve."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "رمي النفايات في الشارع.",
          "Throwing waste on the streets.",
          "Hedhja e mbetjeve në rrugë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عدم إعادة استخدام المواد.",
          "Avoiding material reuse.",
          "Mos ripërdorimi i materialeve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "فرز النفايات من المصدر يسهل إعادة التدوير والمعالجة.",
      "Sorting waste at the source makes recycling and treatment easier.",
      "Ndarja e mbetjeve në burim e bën më të lehtë riciklimin dhe trajtimin."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 20,
    text: localized(
      "لماذا تعتبر إعادة التدوير مهمة للحفاظ على الموارد الطبيعية؟",
      "Why is recycling important for preserving natural resources?",
      "Pse është i rëndësishëm riciklimi për ruajtjen e burimeve natyrore?"
    ),
    options: [
      {
        text: localized(
          "يساعد في الحفاظ عليها وتقليل استهلاكها.",
          "It helps conserve them and reduces consumption.",
          "Ndihmon në ruajtjen e tyre dhe ul konsumin."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من استهلاكها بسرعة.",
          "It increases their consumption.",
          "Rrit konsumin e tyre."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يؤثر على الموارد الطبيعية.",
          "It has no effect on natural resources.",
          "Nuk ka efekt mbi burimet natyrore."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يؤدي إلى فقدان الموارد تمامًا.",
          "It leads to a total loss of resources.",
          "Çon në humbjen totale të burimeve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة التدوير تقلل الحاجة لاستهلاك موارد جديدة من الأرض.",
      "Recycling reduces the need to consume new resources from the Earth.",
      "Riciklimi ul nevojën për të shfrytëzuar burime të reja nga toka."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 21,
    text: localized(
      "أي من هذه المواد لا يمكن إعادة تدويرها؟",
      "Which of these materials can't be recycled?",
      "Cili nga këto materiale nuk mund të riciklohet?"
    ),
    options: [
      {
        text: localized("الأقراص الطبية.", "Medical pills.", "Pilulat mjekësore."),
        isCorrect: true,
      },
      {
        text: localized("الزجاج.", "Glass.", "Qelqi."),
        isCorrect: false,
      },
      {
        text: localized(
          "الحاويات البلاستيكية.",
          "Plastic containers.",
          "Kontejnerët plastikë."
        ),
        isCorrect: false,
      },
      {
        text: localized("الملابس القطنية.", "Cotton clothes.", "Rrobat prej pambuku."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "بعض المنتجات مثل الأقراص الطبية لا يعاد تدويرها عادةً مع النفايات المنزلية.",
      "Some products like medical pills are not usually recycled with household waste.",
      "Disa produkte si pilulat mjekësore zakonisht nuk riciklohen me mbetjet shtëpiake."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 22,
    text: localized(
      "ماذا يحدث في مصنع أو محطة إعادة التدوير؟",
      "What happens in a recycling factory/plant?",
      "Çfarë ndodh në një fabrikë riciklimi?"
    ),
    options: [
      {
        text: localized(
          "فرز ومعالجة النفايات لإعادة استخدامها.",
          "Waste is sorted and processed for reuse.",
          "Mbeturinat ndahen dhe përpunohen për përdorim të ri."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "دفن النفايات في الأرض لإعادة استخدامها.",
          "Waste is buried in the ground for reuse.",
          "Mbeturinat varrosen në tokë për përdorim të ri."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات بالكامل.",
          "Waste is completely burned.",
          "Mbeturinat digjen plotësisht."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تُرمى النفايات في المحيط.",
          "Waste products are thrown into the ocean.",
          "Produktet nga mbeturinat hidhen në oqean."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "في مصانع إعادة التدوير يتم فرز النفايات ومعالجتها لتصبح قابلة للاستخدام مرة أخرى.",
      "In recycling plants, waste is sorted and processed so it can be reused.",
      "Në fabrikat e riciklimit, mbetjet ndahen dhe përpunohen për t'u përdorur sërish."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 23,
    text: localized(
      "أي من هذه النفايات تتحلل بشكل أسرع؟",
      "Which waste decomposes the fastest?",
      "Cila mbeturinë dekompozohet më shpejt?"
    ),
    options: [
      {
        text: localized("الورق.", "Paper.", "Letra."),
        isCorrect: true,
      },
      {
        text: localized("زجاجات البلاستيك.", "Plastic bottles.", "Shishet plastike."),
        isCorrect: false,
      },
      {
        text: localized("علب الألمنيوم.", "Aluminum cans.", "Kanaçet e aluminit."),
        isCorrect: false,
      },
      {
        text: localized("الزجاج.", "Glass.", "Xhami."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الورق يتحلل أسرع بكثير من البلاستيك والزجاج والمعادن.",
      "Paper decomposes much faster than plastic, glass and metals.",
      "Letra dekompozohet shumë më shpejt se plastika, qelqi dhe metalet."
    ),
  },

  {
    quizKey: "waste_management_easy",
    order: 24,
    text: localized(
      "ماذا يجب أن نفعل بالنفايات العضوية لتقليل تأثيرها؟",
      "What should be done with organic waste to reduce its impact?",
      "Çfarë duhet bërë me mbeturinat organike për të zvogëluar ndikimin e tyre?"
    ),
    options: [
      {
        text: localized("تحويلها إلى سماد.", "To compost it.", "Të kompostohen."),
        isCorrect: true,
      },
      {
        text: localized("رميها في البحر.", "Throw it into the sea.", "Të hidhen në det."),
        isCorrect: false,
      },
      {
        text: localized(
          "حرقها في الطبيعة.",
          "Burn it in the open.",
          "Të digjen në natyrë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تخزينها في أكياس بلاستيكية.",
          "Store it in plastic bags.",
          "Të mbahen në qese plastike."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "تحويل النفايات العضوية إلى سماد يقلل من كميتها ويحولها إلى مورد مفيد للتربة.",
      "Composting organic waste reduces its amount and turns it into a useful resource for soil.",
      "Kompostimi i mbetjeve organike ul sasinë e tyre dhe i kthen në burim të dobishëm për tokën."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 1,
    text: localized(
      "ما هو المبدأ الأساسي في إدارة النفايات؟",
      "Which of the following is a key principle of waste management?",
      "Cili prej këtyre është një princip kyç i menaxhimit të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "التقليل، إعادة الاستخدام، وإعادة التدوير.",
          "Reduce, reuse, and recycle.",
          "Ul, ripërdor dhe riciklo."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الإنتاج، التخلص، والاستبدال.",
          "Produce, discard, and replace.",
          "Prodhoni, hidhni dhe zëvendësoni."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الحرق، الدفن، والتجاهل.",
          "Burn, bury, and ignore.",
          "Djegie, varrosje dhe injorim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاستهلاك، الرمي، والنسيان.",
          "Consume, dispose, and forget.",
          "Konsumoni, hidhni dhe harroni."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المبدأ الأساسي في إدارة النفايات هو: التقليل، إعادة الاستخدام، وإعادة التدوير.",
      "The key principle in waste management is: reduce, reuse, and recycle.",
      "Parimi kryesor në menaxhimin e mbetjeve është: ul, ripërdor dhe riciklo."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 2,
    text: localized(
      "ما هو الراشح في المكبات؟",
      "What is landfill leachate?",
      "Çfarë është leachate nga deponitë e mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "سائل ينتج عن تحلل النفايات.",
          "Liquid produced by waste decomposition.",
          "Lëng që prodhohet nga dekompozimi i mbetjeve."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "نوع من المواد المعاد تدويرها.",
          "A type of recycled material.",
          "Një lloj materiali të ricikluar."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "غاز ينبعث من المكبات.",
          "A gas emitted from landfills.",
          "Një gaz që lirohet nga deponitë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "طريقة لمعالجة النفايات الصلبة.",
          "A solid waste treatment method.",
          "Një metodë trajtimi të mbetjeve të ngurta."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الراشح هو سائل ملوث ينتج عن تحلل النفايات في المكبات.",
      "Landfill leachate is a polluted liquid produced by waste decomposition in landfills.",
      "Leachate është një lëng i ndotur që prodhohet nga dekompozimi i mbetjeve në deponi."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 3,
    text: localized(
      "ما هي المشكلة البيئية الرئيسية الناتجة عن المكبات؟",
      "What is one major environmental issue caused by landfills?",
      "Cili është një problem kryesor mjedisor i shkaktuar nga deponitë e mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "تلوث المياه الجوفية.",
          "Groundwater contamination.",
          "Kontaminimi i ujërave nëntokësore."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة مستويات الأكسجين.",
          "Increased oxygen levels.",
          "Rritja e niveleve të oksigjenit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة التربة.",
          "Improved soil quality.",
          "Përmirësimi i cilësisë së tokës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل تلوث الهواء.",
          "Reduced air pollution.",
          "Reduktimi i ndotjes së ajrit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المكبات قد تؤدي إلى تسرب مواد ملوثة نحو المياه الجوفية.",
      "Landfills can cause pollutants to leak into groundwater.",
      "Deponitë mund të shkaktojnë rrjedhje të ndotësve në ujërat nëntokësore."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 4,
    text: localized(
      "لماذا تعتبر النفايات الإلكترونية خطرة؟",
      "Why is e-waste considered hazardous?",
      "Pse mbeturinat elektronike konsiderohen të rrezikshme?"
    ),
    options: [
      {
        text: localized(
          "تحتوي على معادن سامة مثل الرصاص والزئبق.",
          "It contains toxic metals like lead and mercury.",
          "Ato përmbajnë metale toksike si plumbi dhe merkur."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تتحلل بيولوجياً.",
          "It is biodegradable.",
          "Janë biodegradues."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا تؤثر على البيئة.",
          "It does not impact the environment.",
          "Nuk ndikojnë në mjedis."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تنتج الأكسجين عند تحللها.",
          "It produces oxygen when decomposed.",
          "Prodhon oksigjen gjatë dekompozimit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الإلكترونية تحتوي على معادن ومواد سامة يمكن أن تلوث البيئة.",
      "E-waste contains toxic metals and substances that can pollute the environment.",
      "Mbetjet elektronike përmbajnë metale dhe substanca toksike që mund të ndotin mjedisin."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 5,
    text: localized(
      "أي من طرق إدارة النفايات ينتج طاقة؟",
      "Which waste management method produces energy?",
      "Cila metodë e menaxhimit të mbetjeve prodhon energji?"
    ),
    options: [
      {
        text: localized(
          "الحرق لتحويل النفايات إلى طاقة.",
          "Incineration to convert waste into energy.",
          "Djegia për të shndërruar mbetjet në energji."
        ),
        isCorrect: true,
      },
      {
        text: localized("الرمي العشوائي.", "Open dumping.", "Hidhja hapur."),
        isCorrect: false,
      },
      {
        text: localized("الطمر الصحي.", "Landfilling.", "Depozitimi në landfill."),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص منها في المحيط.",
          "Ocean disposal.",
          "Depozitimi në oqean."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "بعض محارق النفايات تنتج طاقة من خلال حرق النفايات.",
      "Some incineration plants generate energy by burning waste.",
      "Disa impiante djegjeje prodhojnë energji duke djegur mbeturinat."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 6,
    text: localized(
      "ما هو التسميد العضوي (عملية إنتاج الكومبوست)؟",
      "What is composting?",
      "Çfarë është kompostimi?"
    ),
    options: [
      {
        text: localized(
          "تحلل النفايات العضوية لإنتاج سماد طبيعي.",
          "The biological decomposition of organic waste into fertilizer.",
          "Dekompozimi biologjik i mbetjeve organike në pleh."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "عملية إذابة الزجاج.",
          "The process of melting glass.",
          "Procesi i shkrirjes së xhamit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات الصلبة.",
          "The incineration of solid waste.",
          "Djegia e mbetjeve të ngurta."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ضغط النفايات البلاستيكية.",
          "The compression of plastic waste.",
          "Kompresimi i mbetjeve plastike."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التسميد هو تحويل النفايات العضوية إلى سماد يفيد التربة.",
      "Composting turns organic waste into fertilizer that benefits the soil.",
      "Kompostimi shndërron mbetjet organike në pleh të dobishëm për tokën."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 7,
    text: localized(
      "أي من هذه النفايات يعتبر نفايات خطرة؟",
      "What is an example of hazardous waste?",
      "Cili është një shembull i mbetjeve të rrezikshme?"
    ),
    options: [
      {
        text: localized("البطاريات المستعملة.", "Used batteries.", "Bateritë e përdorura."),
        isCorrect: true,
      },
      {
        text: localized("صناديق الكرتون.", "Cardboard boxes.", "Kutitë e kartonit."),
        isCorrect: false,
      },
      {
        text: localized("قشور الموز.", "Banana peels.", "Lëkurat e bananeve."),
        isCorrect: false,
      },
      {
        text: localized("الأقمشة القطنية.", "Cotton fabric.", "Peshqirët / rrobat e pambukut."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البطاريات تحتوي على مواد سامة وتعتبر نفايات خطرة.",
      "Used batteries contain toxic substances and are considered hazardous waste.",
      "Bateritë e përdorura përmbajnë substanca toksike dhe konsiderohen mbetje të rrezikshme."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 8,
    text: localized(
      "ما هي المشكلة الرئيسية الناتجة عن النفايات البلاستيكية؟",
      "What is the main resulting problem from plastic waste?",
      "Cili është problemi kryesor që shkakton mbetjet plastike?"
    ),
    options: [
      {
        text: localized(
          "تحتاج إلى قرون لتتحلل.",
          "It takes centuries to decompose.",
          "Ato marrin shekuj për t'u dekompozuar."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تتحول إلى سماد بسرعة.",
          "It turns into fertilizer quickly.",
          "Ato kthehen shpejt në pleh."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسن جودة الهواء.",
          "It improves air quality.",
          "Ato përmirësojnë cilësinë e ajrit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقلل من تلوث المياه.",
          "It reduces water pollution.",
          "Ato reduktojnë ndotjen e ujit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البلاستيك يحتاج فترة زمنية طويلة جداً ليتحلل في البيئة.",
      "Plastic takes a very long time to decompose in the environment.",
      "Plastika merr shumë kohë për t'u dekompozuar në mjedis."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 9,
    text: localized(
      "ما هو الهدف من فرز النفايات؟",
      "What is the purpose of waste separation?",
      "Cili është qëllimi i ndarjes së mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "فصل النفايات لمواد قابلة لإعادة التدوير عن مواد غير القابلة لذلك.",
          "Separating recyclable materials from non-recyclable materials.",
          "Të ndahen materialet e riciklueshme nga ato që nuk mund të riciklohen."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة كمية النفايات في المكبات.",
          "To increase landfill waste.",
          "Për të rritur mbetjet në landfille."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "جعل إدارة النفايات أكثر تكلفة.",
          "To make waste management more expensive.",
          "Për të bërë menaxhimin e mbetjeve më të shtrenjtë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "خلط جميع أنواع النفايات معًا.",
          "To mix different types of waste together.",
          "Për të përzier lloje të ndryshme mbetjesh së bashku."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "فرز النفايات يساعد في استخلاص المواد القابلة لإعادة التدوير بسهولة.",
      "Waste separation helps recover recyclable materials more easily.",
      "Ndarja e mbetjeve ndihmon në rikuperimin më të lehtë të materialeve të riciklueshme."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 10,
    text: localized(
      "لماذا تُعتبر محطات الحرق مثيرة للجدل؟",
      "Why are incineration plants controversial?",
      "Pse plantat e djegies janë të kundërshtuara?"
    ),
    options: [
      {
        text: localized(
          "لأنها تطلق ملوثات في الهواء.",
          "They release pollutants into the air.",
          "Ato lirojnë ndotës në ajër."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تتطلب صيانة قليلة.",
          "They require minimal maintenance.",
          "Ata kërkojnë mbajtje minimale."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "صديقة للبيئة 100٪.",
          "They are 100% environmentally friendly.",
          "Ata janë 100% miqësorë për mjedisin."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تلغي الحاجة إلى المكبات.",
          "They eliminate the need for landfills.",
          "Ata eliminojnë nevojën për deponi."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "محطات الحرق يمكن أن تطلق ملوثات وغازات ضارة في الهواء.",
      "Incineration plants can release pollutants and harmful gases into the air.",
      "Plantet e djegies mund të lirojnë ndotës dhe gaze të dëmshme në ajër."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 11,
    text: localized(
      "ما هي أفضل طريقة للتعامل مع النفايات الخطرة؟",
      "What is the best way to manage hazardous waste?",
      "Cila është mënyra më e mirë për të menaxhuar mbetjet e rrezikshme?"
    ),
    options: [
      {
        text: localized(
          "معالجتها والتخلص منها بطرق متخصصة.",
          "Specialized treatment and disposal.",
          "Trajtimi dhe depozitimi i specializuar."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "خلطها مع النفايات المنزلية.",
          "Mixing it with household waste.",
          "Të përzihen me mbetjet e shtëpisë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إلقاؤها في الأنهار.",
          "Dumping it in rivers.",
          "Të hidhen në lumenj."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل وجودها.",
          "Ignoring its presence.",
          "Të injorohen."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الخطرة تحتاج لمعالجة وتخزين خاصين لتقليل مخاطرها.",
      "Hazardous waste requires special treatment and disposal to reduce its risks.",
      "Mbetjet e rrezikshme kërkojnë trajtim dhe depozitimi të specializuar për të ulur rreziqet."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 12,
    text: localized(
      "ماذا تعني فكرة الاقتصاد الدائري في إدارة النفايات؟",
      "What does circular economy in waste management mean?",
      "Çfarë do të thotë ekonomia rrethore në menaxhimin e mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "إبقاء المواد قيد الاستخدام لأطول فترة ممكنة.",
          "Keeping materials in use for as long as possible.",
          "Të mbahen materialet në përdorim sa më gjatë që të jetë e mundur."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "إنتاج المزيد من النفايات لتعزيز النمو الاقتصادي.",
          "Producing more waste for economic growth.",
          "Prodhimi i më shumë mbetjeve për rritjen ekonomike."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات لتوليد الطاقة.",
          "Burning waste for energy.",
          "Djegia e mbetjeve për energji."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المواد الخام الجديدة فقط.",
          "Using only new raw materials.",
          "Përdorimi i vetëm të materialeve të reja të papërpunuara."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
          "الاقتصاد الدائري يهدف إلى الاستفادة من المواد لأطول فترة بدل رميها كنفايات.",
          "The circular economy aims to keep materials in use as long as possible instead of discarding them.",
          "Ekonomia rrethore synon të mbajë materialet në përdorim sa më gjatë që të jetë e mundur në vend se të hidhen."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 13,
    text: localized(
      "ما هو العيب الرئيسي في طمر النفايات؟",
      "What is a disadvantage of landfill disposal?",
      "Cili është një disavantazh i depozitimit të mbetjeve në landfill?"
    ),
    options: [
      {
        text: localized(
          "انبعاث غاز الميثان الذي يساهم في تغير المناخ.",
          "Methane gas emissions contribute to climate change.",
          "Emisionet e gazit metan kontribuojnë në ndryshimet klimatike."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يساعد في تقليل تلوث التربة.",
          "It helps reduce soil pollution.",
          "Ai ndihmon në reduktimin e ndotjes së tokës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يحسن جودة الهواء فورًا.",
          "It immediately improves air quality.",
          "Ai përmirëson menjëherë cilësinë e ajrit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ينتج مياه شرب نظيفة.",
          "It produces clean drinking water.",
          "Ai prodhon ujë të pijshëm të pastër."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "تحلل النفايات في المكبات يؤدي إلى انبعاث غاز الميثان المسبب للاحتباس الحراري.",
      "Waste decomposition in landfills releases methane, a greenhouse gas.",
      "Dekompozimi i mbetjeve në landfill liron metan, një gaz serrë."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 14,
    text: localized(
      "ماذا يحدث عند التخلص غير الصحيح من النفايات الإلكترونية؟",
      "What happens when electronic waste is improperly disposed of?",
      "Çfarë ndodh kur mbetjet elektronike hidhen në mënyrë të pasaktë?"
    ),
    options: [
      {
        text: localized(
          "تسرب المواد الكيميائية السامة إلى البيئة.",
          "Toxic chemicals can leak into the environment.",
          "Kimikatet toksike mund të rrjedhin në mjedis."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تتحلل إلى سماد طبيعي.",
          "It turns into compost naturally.",
          "Ato kthehen në kompost natyrshëm."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسن خصوبة التربة.",
          "It enhances the soil’s fertility.",
          "Ato përmirësojnë fertilitetin e tokës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تختفي خلال أسابيع.",
          "It disappears within weeks.",
          "Ato zhduken brenda disa javësh."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التخلص الخاطئ من النفايات الإلكترونية يؤدي إلى تسرب مواد سامة للهواء والتربة والمياه.",
      "Improper disposal of e-waste can release toxic chemicals into air, soil, and water.",
      "Hedhja e gabuar e mbetjeve elektronike mund të lëshojë kimikate toksike në ajër, tokë dhe ujë."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 15,
    text: localized(
      "ما الفرق بين النفايات القابلة للتحلل البيولوجي وغير القابلة للتحلل البيولوجي؟",
      "What is the difference between biodegradable and non-biodegradable waste?",
      "Cila është dallimi midis mbetjeve biodegradues dhe jo-biodegradues?"
    ),
    options: [
      {
        text: localized(
          "النفايات القابلة للتحلل البيولوجي تتحلل طبيعياً، أما غير القابلة للتحلل البيولوجي فتبقى في الطبيعة ولا تتحلل.",
          "Biodegradable waste decomposes naturally, while non-biodegradable waste remains in nature and does not decompose.",
          "Mbetjet biodegradues dekompozohen natyrshëm, ndërsa mbetjet jo-biodegradues mbeten në natyrë dhe nuk dekompozohen."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "كلا النوعين يتحلل بنفس المعدل.",
          "Both types of waste decompose at the same rate.",
          "Të dy llojet e mbetjeve dekompozohen në të njëjtën shpejtësi."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "النفايات غير القابلة للتحلل أكثر أمانًا من القابلة للتحلل.",
          "Non-biodegradable waste is safer than biodegradable waste.",
          "Mbetjet jo-biodegradues janë më të sigurta se ato biodegradues."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "النفايات القابلة للتحلل دائماً سامة.",
          "Biodegradable waste is always toxic.",
          "Mbetjet biodegradues janë gjithmonë toksike."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات القابلة للتحلل تعود للطبيعة، بينما غير القابلة للتحلل تبقى لفترات طويلة جداً.",
      "Biodegradable waste returns to nature, while non-biodegradable waste persists for a very long time.",
      "Mbetjet biodegradues kthehen në natyrë, ndërsa ato jo-biodegradues qëndrojnë për një kohë shumë të gjatë."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 16,
    text: localized(
      "لماذا يعتبر إعادة تدوير الزجاج مفيدًا؟",
      "Why is glass recycling beneficial?",
      "Pse riciklimi i xhamit është i dobishëm?"
    ),
    options: [
      {
        text: localized(
          "يقلل الحاجة إلى المواد الخام مثل الرمل.",
          "It reduces the need for raw materials like sand.",
          "Ai redukton nevojën për materialet e papërpunuara si rëra."
        ),
        isCorrect: true,
      },
      {
        text: localized("لا يمكن إعادة تدوير الزجاج.", "Glass cannot be recycled.", "Xhami nuk mund të riciklohet."),
        isCorrect: false,
      },
      {
        text: localized(
          "يتحلل الزجاج في غضون أيام قليلة.",
          "Glass takes only a few days to decompose.",
          "Xhami merr vetëm disa ditë për t'u dekompozuar."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد إعادة التدوير من التلوث.",
          "Recycling glass increases pollution.",
          "Riciklimi i xhamit rrit ndotjen."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة تدوير الزجاج تقلل استخراج الرمال والمواد الخام الأخرى.",
      "Recycling glass reduces the need to extract sand and other raw materials.",
      "Riciklimi i xhamit ul nevojën për nxjerrjen e rërës dhe materialeve të tjera të papërpunuara."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 17,
    text: localized(
      "ما هي التحديات الرئيسية لإعادة تدوير البلاستيك؟",
      "What is a major challenge of plastic recycling?",
      "Cili është një sfidë kryesore e riciklimit të plastikës?"
    ),
    options: [
      {
        text: localized(
          "تتطلب الأنواع المختلفة من البلاستيك طرق إعادة تدوير مختلفة.",
          "Different types of plastic require different recycling methods.",
          "Lloje të ndryshme të plastikës kërkojnë metoda të ndryshme riciklimi."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لا توجد مشاكل في إعادة تدوير البلاستيك.",
          "Plastic recycling is free from any issues.",
          "Riciklimi i plastikës është pa asnjë problem."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يتحلل البلاستيك بسرعة، مما يجعل إعادة التدوير غير ضرورية.",
          "Plastic decomposes quickly, making recycling unnecessary.",
          "Plastika dekompozohet shpejt, duke e bërë riciklimin të panevojshëm."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إعادة تدوير البلاستيك لا يحافظ على الموارد.",
          "Plastic recycling does not conserve resources.",
          "Riciklimi i plastikës nuk ruan burimet."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "اختلاف أنواع البلاستيك وتعقيد تركيبها يجعل عملية إعادة التدوير أصعب.",
      "Different plastic types and compositions make recycling more complex.",
      "Llojet dhe përbërjet e ndryshme të plastikës e bëjnë riciklimin më të vështirë."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 18,
    text: localized(
      "أي من الصناعات تولد أكبر كمية من النفايات الخطرة؟",
      "Which industry generates the most hazardous waste?",
      "Cili industri gjeneron më shumë mbetje të rrezikshme?"
    ),
    options: [
      {
        text: localized(
          "الصناعات الكيميائية لصناعة الأدوية.",
          "Chemical and pharmaceutical industries.",
          "Industrive kimike dhe farmaceutike."
        ),
        isCorrect: true,
      },
      {
        text: localized("صناعة النسيج.", "Textile industry.", "Industria e tekstilit."),
        isCorrect: false,
      },
      {
        text: localized("الزراعة.", "Agriculture.", "Bujqësia."),
        isCorrect: false,
      },
      {
        text: localized("السياحة.", "Tourism.", "Turizmi."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الصناعات الكيميائية والدوائية تنتج كميات كبيرة من النفايات الخطرة.",
      "Chemical and pharmaceutical industries generate large amounts of hazardous waste.",
      "Industria kimike dhe farmaceutike gjeneron shumë mbetje të rrezikshme."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 19,
    text: localized(
      "أي مادة يمكن إعادة تدويرها إلى ما لا نهاية دون فقدان جودتها؟",
      "Which material can be recycled indefinitely without losing quality?",
      "Cili material mund të riciklohet pafundësisht pa humbur cilësinë?"
    ),
    options: [
      {
        text: localized("الزجاج.", "Glass.", "Xhami."),
        isCorrect: true,
      },
      {
        text: localized("البلاستيك.", "Plastic.", "Plastika."),
        isCorrect: false,
      },
      {
        text: localized("الورق.", "Paper.", "Letra."),
        isCorrect: false,
      },
      {
        text: localized("النفايات العضوية.", "Organic waste.", "Mbetjet organike."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "يمكن إعادة تدوير الزجاج مرات عديدة دون أن يفقد جودته.",
      "Glass can be recycled many times without losing its quality.",
      "Xhami mund të riciklohet shumë herë pa humbur cilësinë."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 20,
    text: localized(
      "ما هو أكبر فائدة لإعادة استخدام المواد بدلاً من إعادة تدويرها؟",
      "What is the biggest benefit of reusing materials instead of recycling them?",
      "Cili është përfitimi më i madh i ripërdorimit të materialeve në vend që të riciklohen?"
    ),
    options: [
      {
        text: localized(
          "يتطلب طاقة أقل ويقلل من إنتاج النفايات.",
          "It requires less energy and reduces waste production.",
          "Kërkon më pak energji dhe redukton prodhimin e mbetjeve."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "أكثر تكلفة من إعادة التدوير.",
          "It is more expensive than recycling.",
          "Është më i shtrenjtë se riciklimi."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من التلوث.",
          "It creates more pollution.",
          "Krijon më shumë ndotje."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يسرع من نمو المكبات.",
          "It speeds up landfill growth.",
          "Përshpejton rritjen e landfilleve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة الاستخدام توفر الطاقة والموارد أكثر من إعادة التدوير.",
      "Reusing materials saves more energy and resources than recycling.",
      "Ripërdorimi i materialeve kursen më shumë energji dhe burime sesa riciklimi."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 21,
    text: localized(
      "أي من الأمثلة التالية يُعد إعادة استخدام للبلاستيك؟",
      "Which of the following is an example for reusing plastic?",
      "Cili nga këto është një shembull i ripërdorimit të plastikës?"
    ),
    options: [
      {
        text: localized(
          "استخدام زجاجات البلاستيك القديمة للزهور.",
          "Using old bottles as flowers vases.",
          "Përdorimi i shisheve të vjetra për lule."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رمي النفايات البلاستيكية في الشارع.",
          "Throwing plastic waste at the street.",
          "Hedhja e mbeturinave plastike në rrugë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام زجاجات البلاستيك كحاويات.",
          "Using plastic bottles as containers.",
          "Përdorimi i shisheve plastike si kontenitorë."
        ),
        isCorrect: false,
      },
      {
        text: localized("إذابة البلاستيك.", "Melting it.", "Shkrirja e plastikës."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "استخدام الزجاجات البلاستيكية القديمة كأصص للزهور مثال على إعادة الاستخدام.",
      "Using old plastic bottles as flower vases is an example of reuse.",
      "Përdorimi i shisheve të vjetra plastike si vazo për lule është shembull i ripërdorimit."
    ),
  },

  {
    quizKey: "waste_management_medium",
    order: 22,
    text: localized(
      "أي من الطرق التالية تُعد وسيلة جيدة لتقليل النفايات؟",
      "Which of the following is a good way to reduce waste?",
      "Cila nga këto është një mënyrë e mirë për të zvogëluar mbeturinat?"
    ),
    options: [
      {
        text: localized(
          "شراء منتجات أقل تغليفًا.",
          "Buying smaller amounts of packaged goods.",
          "Blerja e më pak produkteve të paketuara."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام منتجات أكثر تلويثًا.",
          "Use more polluting products.",
          "Përdor më shumë produkte të ndotshme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام أكياس بلاستيكية أحادية الاستخدام.",
          "Use single-use plastic bags.",
          "Përdor qese plastike njëpërdorimshme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "رمي النفايات خارج فناء منزلي.",
          "Throw waste outside my backyard.",
          "Hedh mbeturinat jashtë oborrit tim."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "تقليل المنتجات ذات التغليف الزائد يساعد في خفض كمية النفايات.",
      "Buying fewer heavily packaged products helps reduce waste.",
      "Blerja e më pak produkteve të paketuara ul sasinë e mbetjeve."
    ),
  },
{
    quizKey: "waste_management_hard",
    order: 1,
    text: localized(
      "ما هو مفهوم إدارة النفايات المستدامة؟",
      "What is the concept of sustainable waste management?",
      "Çfarë nënkupton koncepti i menaxhimit të qëndrueshëm të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "تقليل التأثير البيئي للنفايات من خلال استراتيجيات طويلة الأمد.",
          "Reducing the environmental impact of waste through long-term strategies.",
          "Të zvogëlohet ndikimi mjedisor i mbetjeve përmes strategjive afatgjata."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "التخلص من النفايات دون اعتبار للتأثير البيئي.",
          "Disposing of waste without considering environmental effects.",
          "Të hidhen mbeturinat pa marrë parasysh efektet në mjedis."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دفن جميع النفايات في مكبات مغلقة.",
          "Burying all waste in closed landfills.",
          "Të groposen të gjitha mbeturinat në landfille të mbyllura."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إحراق النفايات كمصدر رئيسي للطاقة.",
          "Burning waste as the primary energy source.",
          "Të digjen mbeturinat si burim kryesor energjie."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إدارة النفايات المستدامة تركز على تقليل الأثر البيئي باستخدام خطط طويلة الأمد.",
      "Sustainable waste management aims to reduce environmental impact using long-term strategies.",
      "Menaxhimi i qëndrueshëm i mbetjeve synon të ulë ndikimin mjedisor përmes strategjive afatgjata."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 2,
    text: localized(
      "ما هي تقنية المعالجة الحرارية للنفايات؟",
      "What is thermal treatment of waste?",
      "Çfarë është trajtimi termik i mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "تحويل النفايات إلى طاقة من خلال الحرق أو التغويز.",
          "Converting waste into energy through incineration or gasification.",
          "Të shndërrohen mbeturinat në energji përmes djegies apo gazifikimit."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تجميد النفايات لمنع تحللها.",
          "Freezing waste to prevent decomposition.",
          "Të ngrihen mbeturinat për të penguar dekompozimin."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دفن النفايات في مدافن صحية.",
          "Burying waste in sanitary landfills.",
          "Të groposen në landfill-e sanitare."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحويل النفايات إلى أسمدة عضوية فقط.",
          "Turning waste into organic fertilizer only.",
          "Të shndërrohen vetëm në pleh organik."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المعالجة الحرارية تشمل حرق أو تغويز النفايات لإنتاج طاقة.",
      "Thermal treatment uses incineration or gasification to turn waste into energy.",
      "Trajtimi termik përdor djegien ose gazifikimin për t’i kthyer mbeturinat në energji."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 3,
    text: localized(
      "ما هو السبب الرئيسي وراء فشل بعض برامج إعادة التدوير؟",
      "What is the main reason some recycling programs fail?",
      "Cili është shkaku kryesor pse disa programe riciklimi dështojnë?"
    ),
    options: [
      {
        text: localized(
          "نقص التوعية والفرز غير الفعال.",
          "Lack of awareness and ineffective sorting.",
          "Mungesa e vetëdijes dhe ndarja e paefektshme e mbetjeve."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ارتفاع الطلب على المواد المعاد تدويرها.",
          "High demand for recycled materials.",
          "Kërkesa e lartë për materiale të ricikluara."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الدعم الحكومي القوي.",
          "Strong government support.",
          "Mbështetja e fortë qeveritare."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قلة النفايات الناتجة من المجتمع.",
          "Low waste production in society.",
          "Prodhimi i ulët i mbetjeve në shoqëri."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "ضعف التوعية وعدم فرز النفايات بشكل صحيح من أهم أسباب فشل برامج إعادة التدوير.",
      "Poor public awareness and ineffective sorting are key reasons for recycling program failure.",
      "Mungesa e vetëdijes dhe ndarja joefektive bëhen shkak që programet e riciklimit të dështojnë."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 4,
    text: localized(
      "كيف تساهم إدارة النفايات في تقليل انبعاثات الكربون؟",
      "How does waste management help reduce carbon emissions?",
      "Si ndihmon menaxhimi i mbetjeve në uljen e emetimeve të karbonit?"
    ),
    options: [
      {
        text: localized(
          "عن طريق تقليل النفايات وإعادة التدوير بدلاً من التصنيع الجديد.",
          "By reducing waste and recycling instead of new manufacturing.",
          "Duke zvogëluar mbetjet dhe duke ricikluar në vend të prodhimit të ri."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "عن طريق حرق جميع النفايات لإنتاج طاقة نظيفة.",
          "By burning all waste to produce clean energy.",
          "Duke djegur të gjitha mbeturinat për energji të pastër."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عن طريق دفن النفايات العشوائي.",
          "By disposing of waste in landfills randomly.",
          "Duke hedhur mbeturinat në landfill në mënyrë të rastësishme."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عن طريق تصدير النفايات إلى دول أخرى.",
          "By exporting waste to other countries.",
          "Duke eksportuar mbeturinat në vende të tjera."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التقليل من الإنتاج الجديد عبر إعادة التدوير يقلل من استهلاك الطاقة والانبعاثات.",
      "Recycling instead of producing new materials reduces energy use and emissions.",
      "Riciklimi në vend të prodhimit të ri ul konsumin e energjisë dhe emetimet."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 5,
    text: localized(
      "ما هو الفرق الرئيسي بين المكبات الصحية والمكبات العشوائية؟",
      "What is the main difference between sanitary and open landfills?",
      "Cili është ndryshimi kryesor ndërmjet landfill-eve sanitare dhe atyre të hapura?"
    ),
    options: [
      {
        text: localized(
          "المكبات الصحية مصممة لتقليل التلوث البيئي، بينما العشوائية تلوث البيئة.",
          "Sanitary landfills are designed to minimize environmental pollution, while open landfills cause pollution.",
          "Landfill-et sanitare minimizojnë ndotjen, ndërsa ato të hapura shkaktojnë ndotje."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "كلاهما له نفس التأثير البيئي.",
          "Both have the same environmental impact.",
          "Të dyja kanë ndikim të njëjtë në mjedis."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المكبات العشوائية أكثر أمانًا لأنها غير منظمة.",
          "Open landfills are safer because they are unregulated.",
          "Landfill-et e hapura janë më të sigurta sepse janë të parregulluara."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يوجد فرق بينهما من حيث الأثر البيئي.",
          "There is no difference between them in terms of environmental effects.",
          "Nuk ka dallim sa i përket ndikimit mjedisor."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المكبات الصحية تخطط وتجهز للحد من التسرب والتلوث، بينما العشوائية لا تراعي ذلك.",
      "Sanitary landfills are engineered to control pollution, while open dumps are not.",
      "Landfill-et sanitare projektohen për të kontrolluar ndotjen, ndërsa deponitë e hapura jo."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 6,
    text: localized(
      "ما هي مخاطر البلاستيك الدقيق (الميكروبلاستيك) البيئية؟",
      "What are the environmental risks of microplastics?",
      "Cilat janë rreziqet mjedisore të mikroplastikave?"
    ),
    options: [
      {
        text: localized(
          "يتراكم في البيئة ويصل إلى السلسلة الغذائية.",
          "They accumulate in the environment and enter the food chain.",
          "Ato grumbullohen në mjedis dhe hyjnë në zinxhirin ushqimor."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يتحلل بسرعة دون أي تأثير بيئي.",
          "They decompose quickly without environmental impact.",
          "Ato dekompozohen shpejt pa ndikuar në mjedis."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يستخدم كسماد طبيعي للمحاصيل.",
          "They are used as a natural fertilizer for crops.",
          "Përdoren si pleh natyral për të mbjellat."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يمكن تحلله بيولوجيًا بسهولة في غضون أيام.",
          "They can be biodegraded easily within days.",
          "Mund të biodegradohen lehtësisht për disa ditë."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الميكروبلاستيك يبقى في البيئة فترة طويلة ويدخل إلى السلسلة الغذائية.",
      "Microplastics persist in the environment and enter food chains.",
      "Mikroplastikat qëndrojnë gjatë në mjedis dhe hyjnë në zinxhirin ushqimor."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 7,
    text: localized(
      "لماذا يعتبر تدوير الألمنيوم أكثر كفاءة من إنتاجه من المواد الخام؟",
      "Why is recycling aluminum more efficient than producing it from raw materials?",
      "Pse është më efikase riciklimi i aluminit sesa prodhimi i tij nga lëndët e para?"
    ),
    options: [
      {
        text: localized(
          "لأنه يستهلك طاقة أقل بنسبة 95٪.",
          "It consumes 95% less energy.",
          "Konsumon rreth 95% më pak energji."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يتطلب كميات كبيرة من المياه.",
          "It requires large amounts of water.",
          "Kërkon sasi të mëdha uji."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يزيد من انبعاثات ثاني أكسيد الكربون.",
          "It increases carbon dioxide emissions.",
          "Rrit emetimet e dioksidit të karbonit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يتسبب في تلوث الهواء أكثر من التعدين.",
          "It causes more air pollution than mining.",
          "Shkakton më shumë ndotje se nxjerrja."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة تدوير الألمنيوم توفر غالبية الطاقة مقارنة بإنتاجه من الخام.",
      "Recycling aluminum saves most of the energy compared to primary production.",
      "Riciklimi i aluminit kursen shumicën e energjisë krahasuar me prodhimin nga lënda e parë."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 8,
    text: localized(
      "ما الذي يعنيه مصطلح صفر نفايات؟",
      "What does the term Zero Waste refer to?",
      "Çfarë nënkupton termi Zero Waste?"
    ),
    options: [
      {
        text: localized(
          "استراتيجية تهدف إلى تقليل النفايات إلى أدنى حد ممكن من خلال إعادة التدوير والاستخدام المتكرر.",
          "A strategy to minimize waste through recycling and reuse.",
          "Një strategji për të minimizuar mbetjet përmes riciklimit dhe ripërdorimit."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "التخلص الكامل من جميع النفايات عن طريق الحرق.",
          "Completely eliminating all waste through incineration.",
          "Eliminimi i plotë i mbetjeve përmes djegies."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إنتاج المزيد من النفايات لدعم الاقتصاد.",
          "Producing more waste to support the economy.",
          "Prodhimi i më shumë mbetjeve për të mbështetur ekonominë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل النفايات المنزلية وعدم إدارتها.",
          "Ignoring household waste management.",
          "Mosmarrja parasysh e menaxhimit të mbetjeve familjare."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "صفر نفايات يعني تقليل النفايات قدر الإمكان عبر المنع، وإعادة الاستخدام، وإعادة التدوير.",
      "Zero Waste means minimizing waste through prevention, reuse, and recycling.",
      "Zero Waste nënkupton minimizimin e mbetjeve përmes parandalimit, ripërdorimit dhe riciklimit."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 9,
    text: localized(
      "ما هو أكبر تحدٍ في إعادة تدوير البلاستيك المعقد؟",
      "What is the biggest challenge in recycling complex plastics?",
      "Cili është sfida më e madhe në riciklimin e plastikës së ndërlikuar?"
    ),
    options: [
      {
        text: localized(
          "اختلاف أنواع البلاستيك وعدم إمكانية معالجتها بنفس الطريقة.",
          "Different types of plastic require different recycling methods.",
          "Lloje të ndryshme plastike kërkojnë metoda të ndryshme riciklimi."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "البلاستيك لا يحتاج إلى إعادة تدوير.",
          "Plastic does not need recycling.",
          "Plastika nuk ka nevojë për riciklim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "البلاستيك يتحلل طبيعيًا بسرعة.",
          "Plastic decomposes naturally at a fast rate.",
          "Plastika dekompozohet shpejt natyrshëm."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يمكن إعادة تدوير جميع أنواع البلاستيك بنفس الطريقة.",
          "All types of plastic can be recycled the same way.",
          "Të gjitha llojet e plastikës riciklohen njësoj."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التركيبات المتنوعة للبلاستيك تجعل إعادة التدوير موضع تحدٍ تقني واقتصادي.",
      "The variety of plastic types makes their recycling technically and economically challenging.",
      "Llojet e ndryshme të plastikës e bëjnë riciklimin e saj sfidues teknikisht dhe ekonomikisht."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 10,
    text: localized(
      "ما هو التغويز في إدارة النفايات؟",
      "What is gasification in waste management?",
      "Çfarë është gazifikimi në menaxhimin e mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "عملية تحول النفايات إلى غازات قابلة للاستخدام كوقود.",
          "A process that converts waste into gases used as fuel.",
          "Një proces që shndërron mbetjet në gaze që përdoren si lëndë djegëse."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "طريقة تقليدية لدفن النفايات.",
          "A traditional waste burial method.",
          "Një metodë tradicionale e varrosjes së mbetjeve."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عملية إعادة تدوير النفايات البلاستيكية فقط.",
          "A process for recycling only plastic waste.",
          "Proces vetëm për riciklimin e plastikës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقنية تستخدم فقط للنفايات العضوية.",
          "A technique used only for organic waste.",
          "Teknikë që përdoret vetëm për mbetjet organike."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التغويز يحول النفايات الصلبة إلى غاز يمكن استخدامه كوقود.",
      "Gasification converts solid waste into a fuel gas.",
      "Gazifikimi shndërron mbetjet e ngurta në gaz të përdorshëm si lëndë djegëse."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 11,
    text: localized(
      "ما هي العوامل التي تؤثر على كفاءة عمليات التسميد العضوي؟",
      "What factors affect the efficiency of composting?",
      "Cilët faktorë ndikojnë në efikasitetin e kompostimit?"
    ),
    options: [
      {
        text: localized(
          "درجة الحرارة، الرطوبة، ونسبة الكربون إلى النيتروجين.",
          "Temperature, moisture, and carbon-to-nitrogen ratio.",
          "Temperatura, lagështia dhe raporti karbon-azot."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لون النفايات العضوية.",
          "The color of organic waste.",
          "Ngjyra e mbetjeve organike."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "نوع البلاستيك المستخدم في التعبئة.",
          "The type of plastic used in packaging.",
          "Lloji i plastikës në paketim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "معدل الحرق في المدافن.",
          "The rate of landfill burning.",
          "Shkalla e djegies së mbetjeve në landfill."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التسميد الفعال يحتاج توازنًا في الحرارة والرطوبة ونسبة الكربون إلى النيتروجين.",
      "Efficient composting requires balanced temperature, moisture, and C:N ratio.",
      "Kompostimi efektiv kërkon temperaturë, lagështi dhe raport C:N të balancuar."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 12,
    text: localized(
      "لماذا يجب التخلص من النفايات الطبية بطرق خاصة؟",
      "Why must medical waste be disposed of specially?",
      "Pse mbetjet mjekësore duhet të trajtohen në mënyrë të veçantë?"
    ),
    options: [
      {
        text: localized(
          "لأنها تحتوي على مواد خطرة قد تسبب انتشار الأمراض.",
          "Because it contains hazardous materials that may spread diseases.",
          "Sepse përmban materiale të rrezikshme që mund të përhapin sëmundje."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تتحلل بيولوجيًا بسرعة.",
          "Because it decomposes biologically quickly.",
          "Sepse dekompozohen shpejt biologjikisht."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها غير ضارة بالصحة.",
          "Because it is harmless to health.",
          "Sepse janë të padëmshme për shëndetin."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها مفيدة لإنتاج الطاقة.",
          "Because it is useful for energy production.",
          "Sepse janë të dobishme për prodhimin e energjisë."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الطبية قد تحمل عدوى ومواد كيميائية خطرة، لذا تحتاج لمعالجة خاصة.",
      "Medical waste may carry infections and hazardous chemicals and needs special handling.",
      "Mbetjet mjekësore mund të bartin infeksione dhe kimikate të rrezikshme, ndaj duhen trajtuar veçmas."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 13,
    text: localized(
      "ما هو أحد الحلول البديلة للنفايات البلاستيكية؟",
      "What is one alternative solution to plastic waste?",
      "Cila është një zgjidhje alternative për mbetjet plastike?"
    ),
    options: [
      {
        text: localized(
          "تطوير بدائل قابلة للتحلل البيولوجي، مثل البلاستيك المصنوع من النشاء.",
          "Developing biodegradable alternatives like starch-based plastics.",
          "Zhvillimi i alternativave biodegraduese si plastikat me bazë niseshte."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من البلاستيك في الإنتاج.",
          "Using more plastic in production.",
          "Përdorimi më i madh i plastikës në prodhim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دفن البلاستيك في أعماق البحار.",
          "Burying plastic deep in the ocean.",
          "Groposja e plastikës thellë në oqean."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل مشكلة البلاستيك تمامًا.",
          "Ignoring the plastic problem entirely.",
          "Mosmarrja parasysh e problemit të plastikës."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البدائل القابلة للتحلل تساعد في تقليل تراكم البلاستيك في البيئة.",
      "Biodegradable alternatives help reduce plastic accumulation in the environment.",
      "Alternativat biodegraduese ndihmojnë në uljen e grumbullimit të plastikës në mjedis."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 14,
    text: localized(
      "ما هو تأثير الطمر الصحي على البيئة؟",
      "What is the environmental impact of landfill disposal?",
      "Cili është ndikimi mjedisor i hedhjes së mbetjeve në landfill?"
    ),
    options: [
      {
        text: localized(
          "قد يؤدي إلى تسرب العصارة وتلوث المياه الجوفية.",
          "It may lead to leachate leakage and groundwater contamination.",
          "Mund të çojë në rrjedhje lëngjesh ndotëse dhe ndotje të ujërave nëntokësore."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من جودة الهواء.",
          "It improves air quality.",
          "Përmirëson cilësinë e ajrit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يحسن من خصوبة التربة بشكل مباشر.",
          "It directly enhances soil fertility.",
          "Rrit pjellorinë e tokës në mënyrë të drejtpërdrejtë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس له أي تأثير بيئي.",
          "It has no environmental impact.",
          "Nuk ka ndikim në mjedis."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "العصارة المتسربة من المكبات قد تلوث المياه الجوفية والبيئة المحيطة.",
      "Leachate from landfills can contaminate groundwater and nearby ecosystems.",
      "Lëngjet ndotëse nga deponitë mund të ndotin ujërat nëntokësore dhe mjedisin përreth."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 15,
    text: localized(
      "لماذا يعتبر التخلص من النفايات الإلكترونية تحديًا بيئيًا؟",
      "Why is disposing of electronic waste a major environmental challenge?",
      "Pse është hedhja e mbetjeve elektronike një sfidë e madhe mjedisore?"
    ),
    options: [
      {
        text: localized(
          "لأنها تحتوي على معادن ثقيلة ومواد سامة.",
          "Because it contains heavy metals and toxic substances.",
          "Sepse përmban metale të rënda dhe substanca toksike."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تتحلل بسرعة ولا تؤثر على البيئة.",
          "Because it decomposes quickly with no environmental effect.",
          "Sepse dekompozohen shpejt pa ndikim në mjedis."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تساهم في تحسين جودة المياه.",
          "Because it helps improve water quality.",
          "Sepse ndihmon në përmirësimin e cilësisë së ujit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تقلل من انبعاثات الغازات الدفيئة.",
          "Because it reduces greenhouse gas emissions.",
          "Sepse zvogëlon emetimet e gazeve serrë."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الإلكترونية تحتوي على معادن ومواد سامة قد تتسرب إلى البيئة.",
      "E-waste contains heavy metals and toxins that can leak into the environment.",
      "Mbetjet elektronike përmbajnë metale të rënda dhe toksina që mund të rrjedhin në mjedis."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 16,
    text: localized(
      "كيف يمكن تحقيق إدارة نفايات أكثر استدامة في المدن الذكية؟",
      "How can smart cities achieve more sustainable waste management?",
      "Si mund të arrijnë qytetet inteligjente menaxhim më të qëndrueshëm të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "باستخدام تقنيات الذكاء الاصطناعي وأجهزة الاستشعار الذكية للفرز.",
          "By using AI and smart sensors for waste sorting.",
          "Përmes përdorimit të AI dhe sensorëve të mençur për ndarjen e mbetjeve."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة المكبات العشوائية.",
          "By increasing open dumping sites.",
          "Duke shtuar vendgrumbullime të hapura."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد على دفن النفايات فقط.",
          "By relying solely on landfilling.",
          "Duke u mbështetur vetëm në landfill."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل مشكلة النفايات تمامًا.",
          "By ignoring waste management entirely.",
          "Duke neglizhuar menaxhimin e mbetjeve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "استخدام البيانات وأجهزة الاستشعار يساعد في تحسين جمع وفرز النفايات.",
      "Using data and smart sensors optimizes waste collection and sorting.",
      "Përdorimi i të dhënave dhe sensorëve inteligjentë optimizon mbledhjen dhe ndarjen e mbetjeve."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 17,
    text: localized(
      "ما هي أفضل طريقة لإدارة نفايات البناء والهدم؟",
      "What is the best way to manage construction and demolition waste?",
      "Cila është mënyra më e mirë për të menaxhuar mbetjet nga ndërtimi dhe prishjet?"
    ),
    options: [
      {
        text: localized(
          "إعادة تدوير المواد لاستخدامها في مشاريع جديدة.",
          "Recycling materials for use in new projects.",
          "Riciklimi i materialeve për përdorim në projekte të reja."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "حرق جميع النفايات.",
          "Burning all waste.",
          "Djegia e të gjitha mbetjeve."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "رمي المخلفات في المكبات العشوائية.",
          "Disposing of debris in open landfills.",
          "Hedhja e mbeturinave në landfill-e të hapura."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عدم إعادة استخدام أي من المواد.",
          "Avoiding reuse of any materials.",
          "Mosripërdorimi i asnjë materiali."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة تدوير مخلفات البناء يوفر موارد طبيعية ويقلل النفايات.",
      "Recycling construction waste saves resources and reduces landfill use.",
      "Riciklimi i mbetjeve nga ndërtimi kursen burime dhe ul përdorimin e landfilleve."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 18,
    text: localized(
      "كيف يمكن للأفراد المساهمة في تقليل النفايات؟",
      "How can individuals contribute to waste reduction?",
      "Si mund të kontribuojnë individët në reduktimin e mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "شراء المنتجات القابلة لإعادة الاستخدام وتقليل الاستهلاك غير الضروري.",
          "By purchasing reusable products and reducing unnecessary consumption.",
          "Duke blerë produkte të ripërdorshme dhe duke zvogëluar konsumimin e panevojshëm."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رمي النفايات في الشارع.",
          "By littering on the streets.",
          "Duke hedhur mbeturinat në rrugë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام البلاستيك ذو الاستخدام الواحد أكثر.",
          "By using more single-use plastics.",
          "Duke përdorur më shumë plastika njëpërdorimëshe."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عدم فرز النفايات في المنزل.",
          "By not sorting waste at home.",
          "Duke mos i ndarë mbeturinat në shtëpi."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "اختيار منتجات قابلة لإعادة الاستخدام وتقليل الشراء الزائد يقللان كمية النفايات.",
      "Choosing reusable products and consuming less reduces waste generation.",
      "Zgjedhja e produkteve të ripërdorshme dhe konsumimi më i ulët redukton mbetjet."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 19,
    text: localized(
      "ما هو تأثير إعادة التدوير على استهلاك الطاقة؟",
      "What is the impact of recycling on energy consumption?",
      "Cili është ndikimi i riciklimit në konsumin e energjisë?"
    ),
    options: [
      {
        text: localized(
          "يقلل بشكل كبير من الطاقة المطلوبة لإنتاج المواد الجديدة.",
          "It significantly reduces the energy needed for producing new materials.",
          "E ul ndjeshëm energjinë e nevojshme për prodhimin e materialeve të reja."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من استهلاك الطاقة.",
          "It increases energy consumption.",
          "E rrit konsumin e energjisë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس له أي تأثير على استهلاك الطاقة.",
          "It has no effect on energy consumption.",
          "Nuk ndikon në konsumin e energjisë."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يؤدي إلى استهلاك موارد طبيعية أكثر.",
          "It leads to higher consumption of natural resources.",
          "Çon në konsum më të lartë të burimeve natyrore."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة التدوير غالبًا تحتاج طاقة أقل من تصنيع المواد من الصفر.",
      "Recycling usually requires less energy than producing materials from scratch.",
      "Riciklimi zakonisht kërkon më pak energji sesa prodhimi nga e para."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 20,
    text: localized(
      "ما هي الفائدة الرئيسية لتحويل النفايات إلى طاقة؟",
      "What is the primary benefit of waste-to-energy conversion?",
      "Cili është përfitimi kryesor nga shndërrimi i mbetjeve në energji?"
    ),
    options: [
      {
        text: localized(
          "تقليل كمية النفايات المتراكمة وتوليد الكهرباء.",
          "Reducing accumulated waste while generating electricity.",
          "Zvogëlimi i mbetjeve të grumbulluara duke gjeneruar njëkohësisht energji elektrike."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الاعتماد على الوقود الأحفوري.",
          "Increasing dependence on fossil fuels.",
          "Rritja e varësisë nga lëndët djegëse fosile."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة الهواء بشكل مباشر.",
          "Directly improving air quality.",
          "Përmirësimi i drejtpërdrejtë i cilësisë së ajrit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إنتاج نفايات أكثر.",
          "Producing more waste.",
          "Prodhimi i më shumë mbetjeve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "تقنيات النفايات إلى طاقة تقلل حجم النفايات وتنتج طاقة في نفس الوقت.",
      "Waste-to-energy technologies reduce waste volume and generate power.",
      "Teknologjitë waste-to-energy ulin volumin e mbetjeve dhe prodhojnë energji."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 21,
    text: localized(
      "ما هو الأثر الرئيسي للنفايات الخطرة على البيئة؟",
      "What is the main effect of hazardous waste on the environment?",
      "Cili është efekti kryesor i mbetjeve të rrezikshme në mjedis?"
    ),
    options: [
      {
        text: localized(
          "تُلحق الضرر بالتربة والمياه وصحة الكائنات الحية.",
          "Could damage soil and water and affects the health of living things.",
          "Dëmtojnë tokën dhe ujin."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تجعل التربة أكثر خصوبة.",
          "Make the soil more fertile.",
          "Bëjnë tokën më pjellore."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تُحسن جودة المياه.",
          "Improve water quality.",
          "Përmirësojnë cilësinë e ujit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تؤثر سلبًا على صحة الإنسان والحيوان.",
          "Negatively affect human and animal health.",
          "Ndikojnë negativisht në shëndetin e njeriut dhe kafshëve."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "النفايات الخطرة يمكن أن تلوث التربة والمياه وتؤثر على صحة الكائنات.",
      "Hazardous waste can pollute soil and water and harm living organisms.",
      "Mbetjet e rrezikshme mund të ndotin tokën, ujin dhe organizmat e gjallë."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 22,
    text: localized(
      "كيف تؤثر النفايات على ظاهرة الاحتباس الحراري؟",
      "How does waste pollution affect global warming?",
      "Si ndikon ndotja nga mbeturinat në ngrohjen globale?"
    ),
    options: [
      {
        text: localized(
          "تُطلق غازات الدفيئة.",
          "By releasing greenhouse gases.",
          "Duke lëshuar gazra me efekt serrë."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تُضعف طبقة الأوزون.",
          "By depleting the ozone layer.",
          "Duke holluar shtresën e ozonit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تُخفض درجة حرارة الأرض.",
          "By lowering Earth's temperature.",
          "Duke ulur temperaturën e Tokës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تزيد من كمية الأكسجين في الهواء.",
          "By increasing the amount of oxygen in the air.",
          "Duke rritur sasinë e oksigjenit në ajër."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "تحلل النفايات في المكبات ينتج غازات دفيئة مثل الميثان وثاني أكسيد الكربون.",
      "Waste decomposition releases greenhouse gases like methane and CO₂.",
      "Dekompozimi i mbetjeve lëshon gazra serrë si metani dhe CO₂."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 23,
    text: localized(
      "ما هي طريقة حديثة لإدارة النفايات؟",
      "What is a modern method for waste management?",
      "Cila është një metodë moderne për menaxhimin e mbeturinave?"
    ),
    options: [
      {
        text: localized(
          "إعادة التدوير والمعالجة البيولوجية المتقدمة.",
          "The application of newer recycling and biological processing technologies.",
          "Riciklimi i avancuar dhe përpunimi biologjik."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "رمي النفايات في البحر.",
          "Dumping waste into the sea.",
          "Hedhja e mbeturinave në dete."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق جميع النفايات.",
          "Incineration of all waste.",
          "Djegia e të gjitha mbeturinave."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "رمي النفايات في الغابات.",
          "Dumping waste into forests.",
          "Hedhja e mbeturinave në pyje."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التقنيات الحديثة تشمل إعادة التدوير المتقدم والمعالجة البيولوجية للنفايات.",
      "Modern methods include advanced recycling and biological treatment.",
      "Metodat moderne përfshijnë riciklimin e avancuar dhe trajtimin biologjik."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 24,
    text: localized(
      "كيف يمكن استخدام النفايات العضوية لإنتاج الطاقة؟",
      "How can organic waste be used to create energy?",
      "Si mund të përdoren mbetjet organike për të krijuar energji?"
    ),
    options: [
      {
        text: localized(
          "من خلال الحرق.",
          "Incineration (burning of waste).",
          "Përmes incenerimit (djegies së mbeturinave)."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "من خلال التسميد العضوي (الكومبوست).",
          "Composting.",
          "Përmes kompostimit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "من خلال إعادة تدوير البلاستيك.",
          "Plastic recycling.",
          "Përmes riciklimit të plastikës."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "من خلال إعادة الاستخدام.",
          "Reuse.",
          "Përmes ripërdorimit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "يمكن حرق النفايات العضوية في أنظمة خاصة لإنتاج طاقة حرارية أو كهربائية.",
      "Organic waste can be burned in dedicated systems to produce heat or electricity.",
      "Mbetjet organike mund të digjen në sisteme të posaçme për të prodhuar nxehtësi ose energji."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 25,
    text: localized(
      "أي منتج هو الأكثر ضررًا على البيئة إذا لم تتم إدارته بشكل صحيح؟",
      "Which product is most harmful to the environment if not managed properly?",
      "Cili produkt është më i dëmshëm për mjedisin nëse nuk menaxhohet siç duhet?"
    ),
    options: [
      {
        text: localized("البطاريات.", "Batteries.", "Bateritë."),
        isCorrect: true,
      },
      {
        text: localized("الخشب.", "Wood.", "Druri."),
        isCorrect: false,
      },
      {
        text: localized("الورق.", "Paper.", "Letra."),
        isCorrect: false,
      },
      {
        text: localized("الماء.", "Water.", "Uji."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البطاريات تحتوي على معادن ثقيلة ومواد سامة قد تلوث البيئة بشدة.",
      "Batteries contain heavy metals and toxins that can severely pollute the environment.",
      "Bateritë përmbajnë metale të rënda dhe toksina që mund të ndotin rëndë mjedisin."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 26,
    text: localized(
      "ما هو الهدف الرئيسي من حملات التوعية بإدارة النفايات؟",
      "What is the main goal of waste management awareness campaigns?",
      "Cili është qëllimi kryesor i fushatave për ndërgjegjësimin mbi menaxhimin e mbeturinave?"
    ),
    options: [
      {
        text: localized(
          "تثقيف الناس حول تقليل النفايات وإعادة التدوير.",
          "Educating people about waste reduction and recycling.",
          "Edukimi i njerëzve për zvogëlimin dhe riciklimin e mbeturinave."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تشجيع الناس على رمي المزيد من النفايات.",
          "Encouraging people to throw away more waste.",
          "Nxitja e njerëzve për të hedhur më shumë mbeturina."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إنشاء مواقع جديدة للتخلص من النفايات.",
          "Creating new waste disposal sites.",
          "Krijimi i vendeve të reja për depozitimin e mbeturinave."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين تكنولوجيا إنتاج البلاستيك.",
          "Improving plastic production technology.",
          "Përmirësimi i teknologjisë së prodhimit të plastikës."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "حملات التوعية تهدف لتغيير سلوك الناس تجاه التقليل، الفرز، وإعادة التدوير.",
      "Awareness campaigns aim to change people’s behavior towards reduction, sorting, and recycling.",
      "Fushatat e ndërgjegjësimit synojnë ndryshimin e sjelljes drejt zvogëlimit, ndarjes dhe riciklimit."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 27,
    text: localized(
      "ما هو البديل البيئي لأكياس البلاستيك؟",
      "What is an ecological alternative to plastic bags?",
      "Cila është një alternativë ekologjike për qeset plastike?"
    ),
    options: [
      {
        text: localized(
          "الأكياس الورقية والأكياس القابلة لإعادة الاستخدام.",
          "Paper bags and reusable bags.",
          "Qeset e letrës dhe çantat e ripërdorshme."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تغليف بلاستيكي صغير لكل منتج.",
          "Small plastic packaging for each product.",
          "Paketime të vogla plastike për çdo produkt."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "أكياس بلاستيكية أكثر سماكة.",
          "Thicker plastic bags.",
          "Qeset plastike më të trasha."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام الأكياس البلاستيكية العادية بدون قيود.",
          "Use of regular plastic bags without restriction.",
          "Përdorimi i qeseve plastike të zakonshme pa kufizim."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الأكياس القابلة لإعادة الاستخدام والأكياس الورقية تقلل الاعتماد على البلاستيك.",
      "Reusable and paper bags reduce reliance on plastic.",
      "Qeset e ripërdorshme dhe ato prej letre ulin varësinë nga plastika."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 28,
    text: localized(
      "كيف يمكننا تقليل استخدام البلاستيك في حياتنا اليومية؟",
      "How can we minimize the use of plastic in our daily lives?",
      "Si mund të minimizohet përdorimi i plastikës në jetën e përditshme?"
    ),
    options: [
      {
        text: localized(
          "استخدام الزجاجات والأكياس القابلة لإعادة الاستخدام.",
          "Using reusable bottles and bags.",
          "Përdorimi i shisheve dhe çantave të ripërdorshme."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "حرق البلاستيك بعد الاستخدام.",
          "Burning plastic after use.",
          "Djegia e plastikës pas përdorimit."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "شراء المزيد من المنتجات البلاستيكية.",
          "Buying more plastic products.",
          "Blerja e më shumë produkteve plastike."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "رمي البلاستيك في البيئة بعد الاستخدام.",
          "Throwing plastic into the environment after use.",
          "Hedhja e plastikës në natyrë pas përdorimit."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "استبدال المنتجات البلاستيكية بأدوات قابلة لإعادة الاستخدام يقلل الاستهلاك اليومي.",
      "Replacing plastic items with reusables cuts daily plastic use.",
      "Zëvendësimi i plastikës me produkte të ripërdorshme ul përdorimin e përditshëm."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 29,
    text: localized(
      "ما هي فائدة التسميد العضوي (الكومبوست)؟",
      "What is the benefit of composting?",
      "Cili është një përfitim i kompostimit?"
    ),
    options: [
      {
        text: localized(
          "تقليل النفايات العضوية وتحسين جودة التربة.",
          "Reducing organic waste and improving soil quality.",
          "Reduktimi i mbeturinave organike dhe përmirësimi i cilësisë së dheut."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة كمية النفايات العضوية في مكبات النفايات.",
          "Increasing the amount of organic waste in landfills.",
          "Rritja e sasisë së mbeturinave organike në deponi."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة تلوث الهواء من النفايات.",
          "Increasing air pollution from waste.",
          "Rritja e ndotjes së ajrit nga mbeturinat."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تدمير النباتات بسبب تلوث التربة.",
          "Destruction of plants due to soil contamination.",
          "Shkatërrimi i bimëve si pasojë e kontaminimit të dheut."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "التسميد يحول النفايات العضوية إلى مادة تغذي التربة وتقلل حجم النفايات.",
      "Composting turns organic waste into soil-enriching material and reduces landfill load.",
      "Kompostimi shndërron mbeturinat organike në material ushqyes për tokën dhe ul mbetjet."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 30,
    text: localized(
      "ما هو تأثير التلوث البلاستيكي على الحياة البحرية؟",
      "What is the impact of plastic pollution on marine life?",
      "Cili është ndikimi i ndotjes plastike në jetën detare?"
    ),
    options: [
      {
        text: localized(
          "الحيوانات البحرية تأكل البلاستيك ويدخل في السلسلة الغذائية.",
          "Marine animals eat the plastic and it enters the food chain.",
          "Kafshët detare e hanë plastikën dhe ajo futet në zinxhirin ushqimor."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يُحافظ على مواطن الحيوانات البحرية.",
          "It preserves the habitats of marine animals.",
          "Ruajnë habitatet e kafshëve detare."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يُحسن صحة الأسماك الكبيرة.",
          "It improves the health of large fish.",
          "Përmirëson shëndetin e peshqve të mëdhenj."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يُخفض درجة الحرارة والحموضة في المحيطات.",
          "It reduces the level of temperature and acidification in the oceans.",
          "Ul nivelin e temperaturës dhe acidifikimit në oqeane."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "البلاستيك في البحار يُبتلع من الكائنات البحرية وينتقل في السلسلة الغذائية.",
      "Plastic in oceans is ingested by marine animals and moves up the food chain.",
      "Plastika në dete gëlltitet nga kafshët detare dhe futet në zinxhirin ushqimor."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 31,
    text: localized(
      "أي مادة من المواد التالية هي الأسهل في إعادة التدوير؟",
      "Which material is the easiest to recycle?",
      "Cili material është më i lehtë për t’u ricikluar?"
    ),
    options: [
      {
        text: localized("الورق.", "Paper.", "Letra."),
        isCorrect: true,
      },
      {
        text: localized("المعادن.", "Metals.", "Metalet."),
        isCorrect: false,
      },
      {
        text: localized("البلاستيك المختلط.", "Mixed plastics.", "Plastikë e përzier."),
        isCorrect: false,
      },
      {
        text: localized("النفايات الإلكترونية.", "Electronic waste.", "Mbeturinat elektronike."),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "الورق عادةً من أسهل المواد في الجمع والمعالجة وإعادة التدوير.",
      "Paper is usually one of the easiest materials to collect and recycle.",
      "Letra zakonisht është ndër materialet më të lehta për t’u mbledhur dhe ricikluar."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 32,
    text: localized(
      "ما الفرق بين إعادة التدوير وإعادة الاستخدام؟",
      "What is the difference between recycling and reusing?",
      "Cili është ndryshimi midis riciklimit dhe ripërdorimit?"
    ),
    options: [
      {
        text: localized(
          "إعادة التدوير تشمل معالجة المواد المستخدمة لتحويلها إلى مواد جديدة، بينما إعادة الاستخدام تعني استخدام المواد دون معالجتها.",
          "Recycling involves processing used materials to turn them into new materials, while reusing is the use of materials without processing them.",
          "Riciklimi përfshin përpunimin e materialeve të përdorura në materiale të reja, ndërsa ripërdorimi është përdorimi pa përpunim."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "إعادة الاستخدام هي معالجة المواد، بينما إعادة التدوير تعني استخدامها دون معالجة.",
          "Reusing is processing materials, while recycling means using them without processing.",
          "Ripërdorimi është procesi i përpunimit, ndërsa riciklimi përdor pa përpunim."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إعادة التدوير تستهلك طاقة أكثر من إعادة الاستخدام.",
          "Recycling uses more energy than reusing.",
          "Riciklimi përdor më shumë energji se ripërdorimi."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يوجد فرق كبير بين إعادة التدوير وإعادة الاستخدام.",
          "Recycling and reusing are the same and have no significant differences.",
          "Riciklimi dhe ripërdorimi janë të njëjtë dhe pa dallime të mëdha."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "إعادة الاستخدام تبقي المنتج كما هو، بينما إعادة التدوير تكسره وتحوّله لمادة جديدة.",
      "Reuse keeps the product as-is; recycling breaks it down and remakes it.",
      "Ripërdorimi e mban produktin siç është, ndërsa riciklimi e shpërbën dhe e rikrijon."
    ),
  },

  {
    quizKey: "waste_management_hard",
    order: 33,
    text: localized(
      "ما هي الفائدة الرئيسية من استخدام المواد القابلة للتحلل؟",
      "What is the main benefit of using biodegradable materials?",
      "Cili është përfitimi kryesor i përdorimit të materialeve të biodegradueshme?"
    ),
    options: [
      {
        text: localized(
          "تُقلل من التلوث لأنها تتحلل بشكل أسرع في الطبيعة.",
          "They reduce pollution as they decompose faster in nature.",
          "Redukton ndotjen pasi shpërbëhen më shpejt në natyrë."
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "أقل صداقة للبيئة من البلاستيك.",
          "They are less environmentally friendly than plastic.",
          "Janë më pak miqësore se plastika."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "أرخص من البلاستيك.",
          "They are cheaper than plastic.",
          "Janë më të lira se plastika."
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يمكن أن تحل محل البلاستيك.",
          "They cannot replace plastic.",
          "Nuk mund të zëvendësojnë plastikën."
        ),
        isCorrect: false,
      },
    ],
    explanation: localized(
      "المواد القابلة للتحلل تقلل بقاء النفايات في البيئة لفترات طويلة.",
      "Biodegradable materials reduce how long waste persists in the environment.",
      "Materialet biodegraduese ulin kohën që mbetjet mbeten në mjedis."
    ),
  },

  {
    quizKey: "climate_change_easy",
    order: 1,
    text: localized(
      "ما هو المقصود بالمناخ؟",
      "What does climate mean?",
      "Çfarë do të thotë klima?"
    ),
    options: [
      {
        text: localized(
          "حالة الطقس لفترة طويلة في منطقة معينة",
          "The weather conditions over a long period in a specific area",
          "Kushtet e motit për një periudhë të gjatë në një zonë të caktuar"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "حالة الطقس اليومية في أي منطقة",
          "The daily weather in any location",
          "Moti ditor në çdo vend"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "درجة الحرارة في يوم معين",
          "The temperature on a particular day",
          "Temperatura në një ditë të caktuar"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "كمية الأمطار التي تهطل خلال أسبوع",
          "The amount of rainfall in a week",
          "Sasia e reshjeve në një javë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 2,
    text: localized(
      "ما الفرق الأساسي بين الطقس والمناخ؟",
      "What is the main difference between weather and climate?",
      "Cili është ndryshimi kryesor midis motit dhe klimës?"
    ),
    options: [
      {
        text: localized(
          "الطقس يتغير يوميًا بينما المناخ يستمر لفترة طويلة",
          "Weather changes daily, while climate lasts for a long time",
          "Moti ndryshon çdo ditë, ndërsa klima zgjat për një kohë të gjatë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الطقس يعتمد على الغازات الدفيئة والمناخ لا يتأثر بها",
          "Weather depends on greenhouse gases, while climate does not",
          "Moti varet nga gazrat serrë, ndërsa klima jo"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المناخ يتغير كل يوم مثل الطقس",
          "Climate changes every day like weather",
          "Klima ndryshon çdo ditë si moti"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الطقس هو درجات الحرارة فقط، والمناخ يشمل الرياح فقط",
          "Weather is only temperature, while climate is only wind",
          "Moti ka të bëjë vetëm me temperaturën, ndërsa klima vetëm me erën"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 3,
    text: localized(
      "أي مما يلي يعد سببًا طبيعيًا للتغير المناخي؟",
      "Which of the following is a natural cause of climate change?",
      "Cili nga sa vijon është një shkak natyror i ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "النشاط البركاني",
          "Volcanic activity",
          "Aktiviteti vullkanik"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "حرق الوقود الأحفوري",
          "Burning fossil fuels",
          "Djegia e lëndëve djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إزالة الغابات",
          "Deforestation",
          "Shpyllëzimi"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التلوث الصناعي",
          "Industrial pollution",
          "Ndotja industriale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 4,
    text: localized(
      "ما هو الاحتباس الحراري؟",
      "What is global warming?",
      "Çfarë është ngrohja globale?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع درجة حرارة الأرض بسبب الغازات الدفيئة",
          "Global warming due to greenhouse gases",
          "Ngrohja globale për shkak të gazeve serrë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض حرارة الأرض بسبب ذوبان الجليد",
          "The decrease in Earth's temperature due to ice melting",
          "Ulja e temperaturës së Tokës për shkak të shkrirjes së akullit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تغير المناخ في منطقة معينة بسبب العواصف",
          "Climate change in a specific area due to storms",
          "Ndryshimi i klimës në një zonë për shkak të stuhive"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقلبات الطقس خلال السنة",
          "Weather fluctuations during the year",
          "Luhatjet e motit gjatë vitit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 5,
    text: localized(
      "أي من الغازات التالية يعد من الغازات الدفيئة؟",
      "Which of the following gases is considered a greenhouse gas?",
      "Cili nga gazrat e mëposhtëm konsiderohet si gaz serrë?"
    ),
    options: [
      {
        text: localized(
          "ثاني أكسيد الكربون (CO₂)",
          "Carbon dioxide (CO₂)",
          "Dioksid karboni (CO₂)"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الأكسجين (O₂)",
          "Oxygen (O₂)",
          "Oksigjeni (O₂)"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "النيتروجين (N₂)",
          "Nitrogen (N₂)",
          "Azoti (N₂)"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الهيدروجين (H₂)",
          "Hydrogen (H₂)",
          "Hidrogjeni (H₂)"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 6,
    text: localized(
      "ما هو التأثير الأساسي لذوبان الجليد في القطبين؟",
      "What is the primary impact of glaciers melting in the polar regions?",
      "Cili është ndikimi kryesor i shkrirjes së akullnajave në rajonet polare?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع مستوى سطح البحر",
          "Rising sea levels",
          "Rritja e niveleve të detit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض درجات الحرارة عالميًا",
          "Global temperature decrease",
          "Ulje e temperaturës globale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة كميات الأمطار السنوية",
          "Increased annual rainfall",
          "Rritja e reshjeve vjetore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة الهواء",
          "Improved air quality",
          "Përmirësimi i cilësisë së ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 7,
    text: localized(
      "كيف تساهم إزالة الغابات في التغير المناخي؟",
      "How does deforestation contribute to climate change?",
      "Si kontribuon shpyllëzimi në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "تقلل امتصاص ثاني أكسيد الكربون من الجو",
          "It reduces the absorption of carbon dioxide from the atmosphere",
          "Redukton thithjen e dioksidit të karbonit nga atmosfera"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تزيد من نسبة الأوكسجين في الهواء",
          "It increases oxygen levels in the air",
          "Rrit nivelin e oksigjenit në ajër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تؤدي إلى تقليل درجات الحرارة عالميًا",
          "It leads to lower global temperatures",
          "Shkakton ulje të temperaturave globale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تساعد في تقليل تأثير الغازات الدفيئة",
          "It helps reduce the effect of greenhouse gases",
          "Ndihmon në uljen e efektit të gazeve serrë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 8,
    text: localized(
      "أي من الأنشطة البشرية يساهم في زيادة انبعاثات الغازات الدفيئة؟",
      "Which human activity contributes to increased greenhouse gas emissions?",
      "Cili aktivitet njerëzor kontribuon në rritjen e emetimeve të gazeve serrë?"
    ),
    options: [
      {
        text: localized(
          "حرق الوقود الأحفوري",
          "Burning fossil fuels",
          "Djegia e lëndëve djegëse fosile"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زراعة الأشجار",
          "Planting trees",
          "Mbjellja e pemëve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام الطاقة الشمسية",
          "Using solar energy",
          "Përdorimi i energjisë diellore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إعادة التدوير",
          "Recycling",
          "Riciklimi"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 9,
    text: localized(
      "ما هو الأثر البيئي الرئيسي لارتفاع درجات الحرارة عالميًا؟",
      "What is the main environmental impact of rising global temperatures?",
      "Cili është ndikimi kryesor mjedisor i rritjes së temperaturave globale?"
    ),
    options: [
      {
        text: localized(
          "حدوث موجات حر وجفاف في بعض المناطق",
          "Heatwaves and droughts in some regions",
          "Valë të nxehti dhe thatësira në disa rajone"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تحسين المناخ في المناطق الباردة",
          "Improved climate in cold regions",
          "Klima e përmirësuar në rajonet e ftohta"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل مستوى مياه المحيطات",
          "Reduction in ocean water levels",
          "Ulja e nivelit të ujit të oqeanit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض مستوى الغازات الدفيئة في الهواء",
          "Decreased levels of greenhouse gases in the air",
          "Ulja e niveleve të gazeve serrë në ajër"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 10,
    text: localized(
      "أي من هذه الممارسات يساعد في تقليل تأثير التغير المناخي؟",
      "Which of the following practices helps reduce climate change impact?",
      "Cila nga praktikat e mëposhtme ndihmon në reduktimin e ndikimit të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "استخدام وسائل النقل العامة بدلاً من السيارات الخاصة",
          "Using public transportation instead of private cars",
          "Përdorimi i transportit publik në vend të makinave private"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة إنتاج المصانع دون استخدام تقنيات صديقة للبيئة",
          "Increasing industrial production without eco-friendly technologies",
          "Rritja e prodhimit industrial pa teknologji ekologjike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد على الوقود الأحفوري كمصدر رئيسي للطاقة",
          "Relying on fossil fuels as the main energy source",
          "Mbështetja në lëndët djegëse fosile si burimi kryesor i energjisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إزالة الغابات لزيادة المساحات الزراعية",
          "Deforestation to increase farmland",
          "Shpyllëzimi për të rritur tokën bujqësore"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 11,
    text: localized(
      "ما هي الظاهرة التي تؤدي إلى تغير أنماط الطقس بسبب ارتفاع درجات الحرارة؟",
      "Which phenomenon causes weather pattern changes due to rising temperatures?",
      "Cili fenomen shkakton ndryshime të modelit të motit për shkak të rritjes së temperaturave?"
    ),
    options: [
      {
        text: localized(
          "الاحتباس الحراري",
          "Global warming",
          "Ngrohja globale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ظاهرة النينيو",
          "El Niño phenomenon",
          "Fenomeni El Niño"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ثقب الأوزون",
          "Ozone depletion",
          "Hollimi i ozonit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المد والجزر",
          "Tides",
          "Baticat"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 12,
    text: localized(
      "كيف يؤثر التغير المناخي على التنوع البيولوجي؟",
      "How does climate change affect biodiversity?",
      "Si ndikon ndryshimi i klimës në biodiversitet?"
    ),
    options: [
      {
        text: localized(
          "يهدد حياة بعض الأنواع ويؤدي إلى انقراضها",
          "It threatens species and leads to extinctions",
          "Kërcënon speciet dhe çon në zhdukje"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من أعداد الكائنات الحية على الأرض",
          "It increases the number of living organisms on Earth",
          "Rrit numrin e organizmave të gjallë në Tokë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يؤثر على الحيوانات والنباتات",
          "It does not affect animals and plants",
          "Nuk prek kafshët dhe bimët"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يجعل الكائنات الحية أكثر تكيفًا مع البيئة",
          "It makes living organisms more adaptable",
          "I bën organizmat e gjallë më të adaptueshëm"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 13,
    text: localized(
      "كيف يمكن للإنسان تقليل تأثير التغير المناخي؟",
      "How can humans reduce the impact of climate change?",
      "Si mund të zvogëlojnë njerëzit ndikimin e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تقليل استهلاك الطاقة غير المتجددة",
          "Reducing the use of non-renewable energy",
          "Reduktimi i përdorimit të energjisë së parinovueshme"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام الوقود الأحفوري",
          "Increasing fossil fuel consumption",
          "Rritja e konsumit të karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قطع المزيد من الأشجار",
          "Cutting down more trees",
          "Prerja e më shumë pemëve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المزيد من البلاستيك",
          "Using more plastic",
          "Përdorimi i më shumë plastikës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 14,
    text: localized(
      "ما هو السبب الأساسي في ارتفاع مستوى البحار؟",
      "What is the primary cause of rising sea levels?",
      "Cili është shkaku kryesor i rritjes së nivelit të detit?"
    ),
    options: [
      {
        text: localized(
          "ذوبان الجليد في المناطق القطبية",
          "Glaciers melting in the polar regions",
          "Shkrirja e akullnajave në rajonet polare"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة هطول الأمطار",
          "Increased rainfall",
          "Rritja e reshjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "نقص في الغازات الدفيئة",
          "A decrease in greenhouse gases",
          "Një ulje e gazeve serrë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تبخر المياه الجوفية",
          "Evaporation of groundwater",
          "Avullimi i ujërave nëntokësore"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 15,
    text: localized(
      "كيف يؤثر ارتفاع درجات الحرارة على الزراعة؟",
      "How does increasing heat affect agriculture?",
      "Si ndikon rritja e nxehtësisë në bujqësi?"
    ),
    options: [
      {
        text: localized(
          "يسبب الجفاف ويقلل من إنتاج المحاصيل",
          "It causes drought and reduces crop production",
          "Shkakton thatësirë dhe redukton prodhimin e bimëve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من كمية المحاصيل الزراعية",
          "It increases the amount of agricultural crops",
          "Rrit sasinë e kulturave bujqësore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يحسن جودة التربة ويجعلها أكثر خصوبة",
          "It improves soil quality and makes it more fertile",
          "Përmirëson cilësinë e tokës dhe e bën më pjellore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يؤدي إلى هطول أمطار مفيدة للزراعة",
          "It leads to beneficial rainfall for agriculture",
          "Sjell reshje të dobishme për bujqësinë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 16,
    text: localized(
      "ما هو المصدر الرئيسي للطاقة المتجددة الذي يمكن أن يساعد في تقليل انبعاثات الكربون؟",
      "What is the main renewable energy source that can help reduce carbon emissions?",
      "Cili është burimi kryesor i energjisë së rinovueshme që mund të ndihmojë në reduktimin e emetimeve të karbonit?"
    ),
    options: [
      {
        text: localized(
          "الطاقة الشمسية",
          "Solar energy",
          "Energjia diellore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الفحم",
          "Coal",
          "Qymyri"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الغاز الطبيعي",
          "Natural gas",
          "Gazi natyror"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الوقود الأحفوري",
          "Fossil fuels",
          "Lëndët djegëse fosile"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 17,
    text: localized(
      "كيف يؤثر تغير المناخ على الموارد المائية؟",
      "How does climate change affect water resources?",
      "Si ndikon ndryshimi i klimës në burimet ujore?"
    ),
    options: [
      {
        text: localized(
          "يتسبب في جفاف بعض الأنهار والبحيرات",
          "It causes some rivers and lakes to dry up",
          "Shkakton tharjen e disa lumenjve dhe liqeneve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من كمية المياه العذبة المتاحة",
          "It increases the amount of available freshwater",
          "Rrit sasinë e ujit të ëmbël në dispozicion"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من وتيرة حدوث الجفاف",
          "It reduces drought occurrences",
          "Redukton dukuritë e thatësirës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يؤثر على مصادر المياه",
          "It does not affect water sources",
          "Nuk ndikon në burimet e ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 18,
    text: localized(
      "ما هو أحد الآثار الصحية لتغير المناخ؟",
      "What is one of the health effects of climate change?",
      "Cili është një nga efektet shëndetësore të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "انتشار الأمراض",
          "The spread of heat-related diseases",
          "Përhapja e sëmundjeve të lidhura me nxehtësinë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل الحاجة إلى مرافق الرعاية الصحية",
          "Reduced need for healthcare facilities",
          "Nevoja e reduktuar për objekte të kujdesit shëndetësor"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض معدل الأمراض في المناطق الحارة",
          "Decreased rate of diseases in hot regions",
          "Ulje e shkallës së sëmundjeve në rajonet e nxehta"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تعزيز المناعة البشرية ضد الفيروسات",
          "Strengthened human immunity against viruses",
          "Forcimi i imunitetit të njeriut ndaj viruseve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 19,
    text: localized(
      "كيف تساهم وسائل النقل في تغير المناخ؟",
      "How do transportation methods contribute to climate change?",
      "Si kontribuojnë metodat e transportit në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "تطلق كميات كبيرة من ثاني أكسيد الكربون في الغلاف الجوي",
          "They release large amounts of carbon dioxide into the atmosphere",
          "Lirojnë sasi të mëdha të dioksidit të karbonit në atmosferë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تساعد في تحسين جودة الهواء",
          "They help improve air quality",
          "Ndihmojnë në përmirësimin e cilësisë së ajrit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقلل من مستويات غازات الدفيئة",
          "They reduce greenhouse gas levels",
          "Ulin nivelet e gazeve serrë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تزيد من مستويات الأكسجين في الغلاف الجوي",
          "They increase oxygen levels in the atmosphere",
          "Rrisin nivelet e oksigjenit në atmosferë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 20,
    text: localized(
      "لماذا تعتبر الطاقة المتجددة حلاً مهماً لتغير المناخ؟",
      "Why is renewable energy an important solution to climate change?",
      "Pse energjia e rinovueshme është një zgjidhje e rëndësishme për ndryshimin e klimës?"
    ),
    options: [
      {
        text: localized(
          "لا تطلق غازات دفيئة وتقلل من التلوث",
          "It does not emit greenhouse gases and reduces pollution",
          "Nuk lëshon gazra serrë dhe redukton ndotjen"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تزيد من استهلاك الوقود الأحفوري",
          "It increases fossil fuel consumption",
          "Rrit konsumin e karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تؤدي إلى إزالة الغابات",
          "It leads to deforestation",
          "Çon në shpyllëzim"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ترفع درجات الحرارة العالمية",
          "It raises global temperatures",
          "Rrit temperaturat globale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 21,
    text: localized(
      "ما هو تغيّر المناخ؟",
      "What is climate change?",
      "Çfarë është ndryshimi klimatik?"
    ),
    options: [
      {
        text: localized(
          "تغيّر طويل الأمد في الظروف المناخية",
          "Long-term change of climate",
          "Ndryshimi afatgjatë i kushteve klimatike"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تغيّر مؤقت في الطقس",
          "Temporary change in weather",
          "Ndryshimi i përkohshëm i motit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقصير الفصول",
          "Shortening of seasons",
          "Shkurtimi i stinëve të vitit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تغيّر في تدفّق المياه",
          "Change in water flows",
          "Ndryshimi i rrjedhave të ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 22,
    text: localized(
      "أيّ من الخيارات التالية هو مصدر للطاقة المتجددة؟",
      "Which of the following is a renewable energy source?",
      "Cili nga këto është një burim i energjisë së ripërtëritshme?"
    ),
    options: [
      {
        text: localized("الرياح", "Wind", "Era"),
        isCorrect: true,
      },
      {
        text: localized("الفحم", "Coal", "Qymyri"),
        isCorrect: false,
      },
      {
        text: localized("الغاز الطبيعي", "Natural gas", "Gazi natyror"),
        isCorrect: false,
      },
      {
        text: localized("النفط", "Oil", "Nafta"),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 23,
    text: localized(
      "ما هي إحدى نتائج تغيّر المناخ؟",
      "What is one consequence of climate change?",
      "Cili është një pasojë e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "ازدياد درجات الحرارة القصوى",
          "An increase in extreme temperatures",
          "Rritja e temperaturave ekstreme"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ازدياد أنواع الحيوانات الجديدة",
          "An increase in new animal species",
          "Shtimi i llojeve të reja të kafshëve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ازدياد عدد الأيام الممطرة",
          "An increase in the number of rainy days",
          "Rritja e numrit të ditëve me shi"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ازدياد مساحة الغابات",
          "An increase in forest area",
          "Rritja e sipërfaqes së pyjeve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 24,
    text: localized(
      "ما هو التأثير الرئيسي لتغيّر المناخ؟",
      "What is the main effect of climate change?",
      "Cili është efekti kryesor i ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع درجة حرارة الأرض",
          "Increase in global temperature",
          "Rritja e temperaturës globale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض مستوى سطح البحر",
          "Drop in sea levels",
          "Ulja e nivelit të deteve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ازدياد الكتل الجليدية",
          "An increase in the number of glaciers",
          "Shtimi i akullnajave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استقرار المناخ",
          "Stabilizing the climate",
          "Stabilizimi i klimës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 25,
    text: localized(
      "كيف يمكننا تقليل تأثيرنا على تغيّر المناخ؟",
      "How can we reduce our impact on climate change?",
      "Si mund të zvogëlojmë ndikimin tonë në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "تقليل استخدام الوقود الأحفوري",
          "By reducing the use of fossil fuels",
          "Të reduktojmë përdorimin e karburanteve fosile"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من السيارات التي تعمل بالديزل",
          "Use more diesel cars",
          "Të përdorim më shumë makina me naftë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة كمية النفايات",
          "Increase the amount of waste",
          "Të rrisim sasinë e mbeturinave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المزيد من المياه",
          "By increasing the consumption of water",
          "Të shpenzojmë më shumë ujë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 26,
    text: localized(
      "كيف يمكن للغابات أن تساعد في تقليل آثار تغيّر المناخ؟",
      "How can forests help reduce the effects of climate change?",
      "Si mund të ndihmojnë pyjet në uljen e efekteve të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "من خلال امتصاص ثاني أكسيد الكربون من الغلاف الجوي",
          "By absorbing carbon dioxide from the atmosphere",
          "Duke absorbuar dioksidin e karbonit nga atmosfera"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "من خلال إطلاق المزيد من ثاني أكسيد الكربون",
          "By releasing more carbon dioxide",
          "Duke liruar më shumë dioksid karboni"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "من خلال زيادة متوسط درجة حرارة الأرض",
          "By increasing the average temperature of the Earth",
          "Duke rritur temperaturën mesatare të Tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "من خلال تقليل كمية الأمطار",
          "By reducing the amount of precipitation",
          "Duke ulur sasinë e reshjeve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 27,
    text: localized(
      "لماذا يمكن للسيارات الكهربائية أن تساعد في تقليل التلوث؟",
      "Why can using electric cars help reduce pollution?",
      "Pse përdorimi i makinave elektrike mund të ndihmojë në uljen e ndotjes?"
    ),
    options: [
      {
        text: localized(
          "لأنها لا تطلق غازات الدفيئة",
          "Because they do not discharge greenhouse gases",
          "Sepse nuk shkarkojnë gazra me efekt serrë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تستخدم الوقود بكفاءة أكبر",
          "Because they use fuel more efficiently",
          "Sepse ato përdorin karburant më efikas"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تسير ببطء أكثر",
          "Because they move slower",
          "Sepse lëvizin më ngadalë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تستهلك المزيد من الأكسجين",
          "Because they use more oxygen",
          "Sepse përdorin më shumë oksigjen"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 28,
    text: localized(
      "أي غاز من الغازات التالية ليس من غازات الدفيئة؟",
      "Which gas is not a greenhouse gas?",
      "Cili gaz nuk është gaz me efekt serrë?"
    ),
    options: [
      {
        text: localized("النيتروجين", "Nitrogen", "Azoti"),
        isCorrect: true,
      },
      {
        text: localized("الميثان", "Methane", "Metani"),
        isCorrect: false,
      },
      {
        text: localized(
          "ثاني أكسيد الكربون",
          "Carbon dioxide",
          "Dioksidi i karbonit"
        ),
        isCorrect: false,
      },
      {
        text: localized("الأوزون", "Ozone", "Ozoni"),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 29,
    text: localized(
      "ما هو العامل الرئيسي الذي يؤثر على تغيّر المناخ؟",
      "What is the main factor that affects climate change?",
      "Cili është faktori kryesor që ndikon në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "الأنشطة البشرية",
          "Human activities",
          "Aktivitetet njerëzore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الإشعاع الشمسي",
          "Solar radiation",
          "Rrezatimi i diellit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الدورات الطبيعية للأرض",
          "Earth's natural cycles",
          "Ciklet natyrore të Tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الانفجارات البركانية",
          "Volcanic eruptions",
          "Shpërthimet vullkanike"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 30,
    text: localized(
      "ما هو تأثير استخدام الطاقة الشمسية في المدن؟",
      "What is the impact of using solar energy in cities?",
      "Cili është ndikimi i përdorimit të energjisë diellore në qytete?"
    ),
    options: [
      {
        text: localized(
          "يقلّل من انبعاث غازات الدفيئة",
          "Reduces greenhouse gas emissions",
          "Ul emetimet e gazrave me efekt serrë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من استهلاك الطاقة",
          "Increases energy consumption",
          "Rrit konsumin e energjisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من تلوث الهواء",
          "Increases air pollution",
          "Rrit ndotjen e ajrit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من استخدام الفحم",
          "Increases coal use",
          "Rrit përdorimin e qymyrit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_easy",
    order: 31,
    text: localized(
      "لماذا يعتبر تعليم تغيّر المناخ في المدارس أمرًا مهمًا؟",
      "Why is climate change education important in schools?",
      "Pse është e rëndësishme edukimi mbi ndryshimet klimatike në shkolla?"
    ),
    options: [
      {
        text: localized(
          "لإعلام الطلاب بخطورة إزالة الغابات",
          "To inform students about the danger of deforestation",
          "Për të informuar nxënësit mbi rrezikun nga shkatërrimi i pyjeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لإعلام الطلاب بفوائد استخدام الوقود الأحفوري",
          "To inform students about the benefits of using fossil fuels",
          "Për të informuar nxënësit mbi përfitimet e përdorimit të karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لإعلام الطلاب بعواقب استهلاك الكهرباء فقط",
          "To inform students about the consequences of electricity consumption",
          "Për të informuar nxënësit mbi pasojat e konsumit të energjisë elektrike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لإعلام الطلاب بالتأثير الإيجابي لتلوث الهواء",
          "To inform students about the positive impact of air pollution",
          "Për të informuar nxënësit mbi ndikimin pozitiv të ndotjes së ajrit"
        ),
        isCorrect: false,
      },
    ],
  },
  {
    quizKey: "climate_change_medium",
    order: 1,
    text: localized(
      "كيف يمكن للأشخاص تقييم تأثير الاحتباس الحراري على منطقتهم المحلية؟",
      "How can one assess the impact of global warming on their local area?",
      "Si mund të vlerësohet ndikimi i ngrohjes globale në zonën e tyre lokale?"
    ),
    options: [
      {
        text: localized(
          "مقارنة بيانات درجات الحرارة خلال العقود الماضية وتحليل التغيرات",
          "Compare temperature data over past decades and analyze the changes",
          "Krahasoni të dhënat e temperaturës gjatë dekadave të fundit dhe analizoni ndryshimet"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الاعتماد على ملاحظات الطقس اليومية فقط",
          "Rely only on daily weather observations",
          "Mbështetuni vetëm në vëzhgimet e përditshme të motit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام مصادر الإنترنت دون التحقق من صحتها",
          "Use online sources without verifying their accuracy",
          "Përdorni burime online pa verifikuar saktësinë e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس درجة الحرارة في يوم واحد فقط",
          "Measure temperature for only one day",
          "Matni temperaturën vetëm për një ditë",
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 2,
    text: localized(
      "أي من الحلول التالية هو الأكثر فاعلية لتقليل انبعاثات الكربون من وسائل النقل؟",
      "Which of the following solutions is the most effective in reducing carbon emissions from transportation?",
      "Cila nga zgjidhjet e mëposhtme është më efektive në reduktimin e emetimeve të karbonit nga transporti?"
    ),
    options: [
      {
        text: localized(
          "التوسع في وسائل النقل العام والسيارات الكهربائية",
          "Expanding public transport and electric cars",
          "Zgjerimi i transportit publik dhe makinave elektrike"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة إنتاج السيارات التقليدية",
          "Increasing the production of traditional cars",
          "Rritja e prodhimit të makinave tradicionale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المزيد من الوقود الأحفوري",
          "Using more fossil fuels",
          "Përdorimi i më shumë lëndëve djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "بناء المزيد من الطرق السريعة",
          "Building more highways",
          "Ndërtimi i më shumë autostradave"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 3,
    text: localized(
      "إذا استمر انصهار الجليد في القطبين، فما التأثير المتوقع على المدن الساحلية؟",
      "If glaciers melting in the polar regions continues, what is the expected impact on coastal cities?",
      "Nëse shkrirja e akullnajave në rajonet polare vazhdon, cili është ndikimi i pritur në qytetet bregdetare?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع مستوى سطح البحر مما قد يؤدي إلى فيضانات",
          "Rising sea levels, which may lead to floods",
          "Rritja e nivelit të detit, që mund të shkaktojë përmbytje"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض نسبة الرطوبة في الهواء",
          "Decreasing humidity levels in the air",
          "Ulja e nivelit të lagështisë në ajër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسن جودة التربة في المناطق القريبة من البحر",
          "Improved soil quality near the sea",
          "Përmirësimi i cilësisë së tokës pranë detit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "اختفاء التيارات البحرية",
          "Disappearance of ocean currents",
          "Zhdukja e rrymave oqeanike"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 4,
    text: localized(
      "كيف يمكن للغابات أن تساعد في الحد من التغير المناخي؟",
      "How can forests help mitigate climate change?",
      "Si mund të ndihmojnë pyjet në zbutjen e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "امتصاص ثاني أكسيد الكربون وإنتاج الأكسجين",
          "Absorb carbon dioxide and produce oxygen",
          "Thithin dioksidin e karbonit dhe prodhojnë oksigjen"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة مستوى الرطوبة في الجو فقط",
          "Only increase humidity levels in the atmosphere",
          "Vetëm rrisin nivelet e lagështisë në atmosferë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "خفض درجات الحرارة عن طريق تقليل الغيوم",
          "Reduce temperatures by minimizing cloud formation",
          "Ulin temperaturat duke minimizuar formimin e reve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إنتاج المزيد من الغازات الدفيئة",
          "Produce more greenhouse gases",
          "Prodhimi i më shumë gazeve serrë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 5,
    text: localized(
      "ما الذي يمكن أن نستنتجه من زيادة الأعاصير والعواصف في السنوات الأخيرة؟",
      "What can we conclude from the increasing number of hurricanes and storms in recent years?",
      "Çfarë mund të konkludojmë nga numri në rritje i uraganeve dhe stuhive vitet e fundit?"
    ),
    options: [
      {
        text: localized(
          "أن التغير المناخي يسبب اضطرابات كبيرة في أنماط الطقس",
          "Climate change is causing major disruptions in weather patterns",
          "Ndryshimet klimatike po shkaktojnë ndërprerje të mëdha në modelet e motit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "أن الأعاصير كانت دائمًا بهذا التواتر والقوة",
          "Hurricanes have always occurred at the same frequency and strength",
          "Uraganët kanë ndodhur gjithmonë me të njëjtën frekuencë dhe intensitet"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "أن النشاط البشري ليس له أي تأثير على المناخ",
          "Human activities have no effect on climate",
          "Aktivitetet njerëzore nuk kanë ndikim në klimë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "أن كمية ثاني أكسيد الكربون لا علاقة لها بالعواصف",
          "The amount of carbon dioxide has no relation to storms",
          "Sasia e dioksidit të karbonit nuk ka lidhje me stuhitë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 6,
    text: localized(
      "كيف يمكن تحليل تأثير الاحتباس الحراري على المحاصيل الزراعية؟",
      "How can we analyze the impact of global warming on agricultural crops?",
      "Si mund të analizojmë ndikimin e ngrohjes globale në prodhimet bujqësore?"
    ),
    options: [
      {
        text: localized(
          "دراسة تأثير تغييرات درجات الحرارة على إنتاجية المحاصيل المختلفة",
          "Study the effect of temperature changes on crop productivity",
          "Studioni efektin e ndryshimeve të temperaturës në produktivitetin e të korrave"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "مراقبة الطقس ليوم واحد فقط",
          "Observe the weather for just one day",
          "Vëzhgoni motin vetëm për një ditë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد على التوقعات الشخصية دون بيانات علمية",
          "Rely on personal predictions without scientific data",
          "Mbështetuni në parashikimet personale pa të dhëna shkencore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب كمية الأمطار فقط دون النظر إلى العوامل الأخرى",
          "Measure only the amount of rainfall without considering other factors",
          "Matni vetëm sasinë e reshjeve pa marrë parasysh faktorë të tjerë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 7,
    text: localized(
      "أي من الإجراءات التالية يساعد في تقليل تأثير التغير المناخي؟",
      "Which of the following actions helps reduce the impact of climate change?",
      "Cili nga veprimet e mëposhtme ndihmon në uljen e ndikimit të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "الاستثمار في الطاقة المتجددة مثل الشمس والرياح",
          "Investing in renewable energy such as solar and wind power",
          "Investimi në energjinë e rinovueshme si energjia diellore dhe e erës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الاعتماد على الفحم كمصدر رئيسي للطاقة",
          "Increasing reliance on coal as the main energy source",
          "Rritja e mbështetjes në qymyr si burim kryesor të energjisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الاعتماد على وسائل النقل العام",
          "Reducing the use of public transportation",
          "Reduktimi i përdorimit të transportit publik"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المزيد من المواد البلاستيكية",
          "Using more plastic materials",
          "Përdorimi i më shumë materialeve plastike"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 8,
    text: localized(
      "ما هي العلاقة بين انبعاثات المصانع والتغير المناخي؟",
      "What is the relationship between factory emissions and climate change?",
      "Cila është marrëdhënia midis emetimeve të fabrikave dhe ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "المصانع تطلق غازات دفيئة تساهم في ارتفاع درجة الحرارة",
          "Factories release greenhouse gases that contribute to temperature rise",
          "Fabrikat lëshojnë gazra serrë që kontribuojnë në rritjen e temperaturës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "المصانع تقلل من تأثير التغير المناخي عبر تبريد الهواء",
          "Factories help reduce climate change by cooling the air",
          "Fabrikat ndihmojnë në reduktimin e ndryshimeve klimatike duke ftohur ajrin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يوجد علاقة بين المصانع وارتفاع درجة الحرارة",
          "There is no relationship between factories and rising temperatures",
          "Nuk ka asnjë lidhje midis fabrikave dhe rritjes së temperaturave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "المصانع تسهم في تقليل انبعاثات الكربون",
          "Factories help decrease carbon emissions",
          "Fabrikat ndihmojnë në uljen e emetimeve të karbonit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 9,
    text: localized(
      "كيف يمكن تحليل تأثير إزالة الغابات على المناخ؟",
      "How can we analyze the impact of deforestation on the climate?",
      "Si mund të analizojmë ndikimin e shpyllëzimit në klimë?"
    ),
    options: [
      {
        text: localized(
          "مقارنة نسبة ثاني أكسيد الكربون قبل وبعد إزالة الغابات",
          "Compare carbon dioxide levels before and after deforestation",
          "Krahasoni nivelet e dioksidit të karbonit para dhe pas shpyllëzimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "دراسة تأثير نمو الأشجار على ارتفاع مستوى البحر",
          "Study the effect of tree growth on sea level rise",
          "Studimi i efektit të rritjes së pemëve në ngritjen e nivelit të detit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس درجة الحرارة فقط دون النظر إلى نسبة الغازات",
          "Measure temperature alone without considering gas levels",
          "Matni vetëm temperaturën pa marrë parasysh nivelet e gazit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التركيز على التأثيرات الاقتصادية فقط",
          "Focus only on economic effects",
          "Përqendrohuni vetëm në efektet ekonomike"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 10,
    text: localized(
      "لماذا تعتبر مصادر الطاقة المتجددة حلاً مستدامًا لمشكلة التغير المناخي؟",
      "Why are renewable energy sources a sustainable solution to climate change?",
      "Pse burimet e rinovueshme të energjisë janë një zgjidhje e qëndrueshme për ndryshimin e klimës?"
    ),
    options: [
      {
        text: localized(
          "لأنها لا تطلق غازات دفيئة وتساعد في تقليل الاحتباس الحراري",
          "They do not emit greenhouse gases and help reduce global warming",
          "Nuk lëshojnë gazra serrë dhe ndihmojnë në uljen e ngrohjes globale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تزيد من استخدام الفحم الحجري",
          "They increase the use of coal",
          "Rrisin përdorimin e qymyrit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تعتمد على استهلاك الموارد الطبيعية غير المتجددة",
          "They rely on consuming non-renewable natural resources",
          "Mbështeten në konsumimin e burimeve natyrore të parlarinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تزيد من انبعاثات الكربون",
          "They increase carbon emissions",
          "Rrisin emetimet e karbonit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 11,
    text: localized(
      "كيف يمكن للمدن أن تتكيف مع تأثيرات التغير المناخي؟",
      "How can cities adapt to the effects of climate change?",
      "Si mund të përshtaten qytetet ndaj efekteve të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تطوير بنى تحتية مرنة وتعزيز التخطيط العمراني المستدام",
          "Develop flexible infrastructure and promote sustainable urban planning",
          "Zhvillimi i infrastrukturës fleksibël dhe promovimi i planifikimit të qëndrueshëm urban"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الاعتماد فقط على استيراد المواد الغذائية",
          "Rely only on importing food supplies",
          "Mbështetuni vetëm në importimin e furnizimeve ushqimore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "بناء المزيد من المصانع لزيادة الإنتاجية",
          "Build more factories to increase productivity",
          "Ndërtoni më shumë fabrika për të rritur produktivitetin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل المساحات الخضراء لتوفير مساحة للبناء",
          "Reduce green spaces to create more construction areas",
          "Reduktoni hapësirat e gjelbra për të krijuar më shumë sipërfaqe ndërtimi"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 12,
    text: localized(
      "ما هو التأثير المتوقع للاحتباس الحراري على الموارد المائية؟",
      "What is the expected impact of global warming on water resources?",
      "Cili është ndikimi i pritur i ngrohjes globale në burimet ujore?"
    ),
    options: [
      {
        text: localized(
          "زيادة الجفاف في بعض المناطق وارتفاع مستوى البحر في أخرى",
          "Increased drought in some areas and rising sea levels in others",
          "Rritje e thatësirës në disa zona dhe rritje e nivelit të detit në të tjera"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل التبخر وزيادة نسبة المياه الجوفية",
          "Reduced evaporation and increased groundwater levels",
          "Ulje e avullimit dhe rritje e nivelit të ujërave nëntokësore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "عدم حدوث أي تغيير في توزيع المياه",
          "No change in water distribution",
          "Nuk ka ndryshim në shpërndarjen e ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض نسبة الهطول المطري في جميع أنحاء العالم",
          "Decreased rainfall in all parts of the world",
          "Ulje të reshjeve në të gjitha pjesët e botës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 13,
    text: localized(
      "كيف يمكننا تقييم فعالية المبادرات البيئية لمواجهة التغير المناخي؟",
      "How can we evaluate the effectiveness of environmental initiatives to combat climate change?",
      "Si mund të vlerësojmë efektivitetin e iniciativave mjedisore për të luftuar ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "مقارنة نسبة الانبعاثات قبل وبعد تنفيذ المبادرات",
          "Compare emission levels before and after implementing the initiatives",
          "Krahasoni nivelet e emetimeve para dhe pas zbatimit të iniciativave"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الاعتماد على التقارير الإعلامية فقط",
          "Rely only on media reports",
          "Mbështetuni vetëm në raportet e mediave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس نسبة الأوكسجين في الهواء دون النظر لعوامل أخرى",
          "Measure oxygen levels in the air without considering other factors",
          "Matni nivelet e oksigjenit në ajër pa marrë parasysh faktorë të tjerë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مراقبة درجات الحرارة ليوم واحد فقط",
          "Monitor temperatures for just one day",
          "Monitoroni temperaturat vetëm për një ditë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 14,
    text: localized(
      "كيف يمكن تحليل تأثير النشاط الصناعي على المناخ؟",
      "How can we analyze the impact of industrial activity on climate?",
      "Si mund të analizojmë ndikimin e aktivitetit industrial në klimë?"
    ),
    options: [
      {
        text: localized(
          "دراسة كمية الغازات الدفيئة الناتجة عن المصانع وتأثيرها على الجو",
          "Study the amount of greenhouse gases emitted by factories and their effect on the atmosphere",
          "Studioni sasinë e gazeve serrë të emetuara nga fabrikat dhe efektin e tyre në atmosferë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد المصانع دون النظر إلى انبعاثاتها",
          "Measure the number of factories without considering their emissions",
          "Matni numrin e fabrikave pa marrë parasysh emetimet e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التركيز على الفوائد الاقتصادية للصناعة فقط",
          "Focus only on the economic benefits of industry",
          "Përqendrohuni vetëm në përfitimet ekonomike të industrisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل إنتاج المصانع دون أي تحليل علمي",
          "Reduce factory production without scientific analysis",
          "Reduktimi i prodhimit në fabrika pa analiza shkencore"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 15,
    text: localized(
      "كيف يمكن التنبؤ بآثار التغير المناخي على السكان؟",
      "How can we predict the effects of climate change on populations?",
      "Si mund të parashikojmë efektet e ndryshimeve klimatike në popullatë?"
    ),
    options: [
      {
        text: localized(
          "دراسة تأثيرات موجات الحر والجفاف على الصحة والاقتصاد",
          "Study the impacts of heatwaves and drought on health and the economy",
          "Studioni ndikimet e valëve të të nxehtit dhe thatësirës në shëndet dhe ekonomi"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس سرعة الرياح في المدن الكبيرة",
          "Measure wind speed in large cities",
          "Matni shpejtësinë e erës në qytetet e mëdha"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مراقبة حركة السحب دون تحليل بيانات درجات الحرارة",
          "Observe cloud movement without analyzing temperature data",
          "Vëzhgoni lëvizjen e reve pa analizuar të dhënat e temperaturës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الدراسات المناخية للتركيز على المشكلات الاقتصادية",
          "Reduce climate studies to focus on economic issues",
          "Reduktoni studimet klimatike për t'u fokusuar në çështjet ekonomike"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 16,
    text: localized(
      "لماذا يُعتبر التغير المناخي تهديدًا للأمن الغذائي؟",
      "Why is climate change considered a threat to food security?",
      "Pse ndryshimi i klimës konsiderohet një kërcënim për sigurinë ushqimore?"
    ),
    options: [
      {
        text: localized(
          "لأنه يؤدي إلى نقص المحاصيل وارتفاع أسعار الغذاء",
          "It leads to reduced crop production and rising food prices",
          "Ato çojnë në uljen e prodhimit të bimëve dhe rritjen e çmimeve të ushqimeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يقلل من استهلاك المياه في الزراعة",
          "It decreases water consumption in agriculture",
          "Ul konsumin e ujit në bujqësi"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يزيد من إنتاج المحاصيل الزراعية",
          "It increases agricultural production",
          "Rrit prodhimin bujqësor"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه لا يؤثر على الإنتاج الزراعي إطلاقًا",
          "It has no impact on food production",
          "Nuk ka ndikim në prodhimin e ushqimit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 17,
    text: localized(
      "ما هي الخطوات التي يمكن اتخاذها لمواجهة ارتفاع مستوى سطح البحر؟",
      "What steps can be taken to address rising sea levels?",
      "Çfarë hapash mund të ndërmerren për të adresuar rritjen e nivelit të detit?"
    ),
    options: [
      {
        text: localized(
          "بناء حواجز بحرية والتخطيط العمراني المناسب",
          "Build sea barriers and implement proper urban planning",
          "Ndërtoni barriera detare dhe zbatoni planifikimin e duhur urban"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل استخدام الطاقات المتجددة",
          "Reduce the use of renewable energy",
          "Reduktoni përdorimin e energjisë së rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الاعتماد على الفحم لتوليد الكهرباء",
          "Increase reliance on coal for electricity generation",
          "Rritja e mbështetjes në qymyr për prodhimin e energjisë elektrike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل المشكلة وعدم اتخاذ أي إجراءات",
          "Ignore the problem and take no action",
          "Injoroni problemin dhe mos ndërmerrni asnjë veprim"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 18,
    text: localized(
      "كيف يمكن للمجتمعات المحلية المساهمة في الحد من التغير المناخي؟",
      "How can local communities contribute to reducing climate change?",
      "Si mund të kontribuojnë komunitetet lokale në reduktimin e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تبني ممارسات مستدامة مثل إعادة التدوير والتشجير",
          "Adopt sustainable practices such as recycling and afforestation",
          "Të adoptohen praktika të qëndrueshme si riciklimi dhe pyllëzimi"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام الموارد الطبيعية دون تخطيط",
          "Increase the use of natural resources without planning",
          "Rritja e përdorimit të burimeve natyrore pa planifikim"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد فقط على الحكومات في اتخاذ القرارات",
          "Rely only on governments to make decisions",
          "Të mbështeten vetëm në qeveritë për të marrë vendime"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل أهمية الحد من الانبعاثات",
          "Ignore the importance of reducing emissions",
          "Të injorohen rëndësitë e zvogëlimit të emetimeve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 19,
    text: localized(
      "كيف يمكن تقييم دور الغازات الدفيئة في تغير المناخ؟",
      "How can we assess the role of greenhouse gases in climate change?",
      "Si mund ta vlerësojmë rolin e gazeve serrë në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "تحليل معدلات انبعاث ثاني أكسيد الكربون وتأثيره على درجات الحرارة",
          "Analyze carbon dioxide emission rates and their impact on temperatures",
          "Analizoni normat e emetimit të dioksidit të karbonit dhe ndikimin e tyre në temperatura"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس نسبة الأوكسجين فقط",
          "Measure only oxygen levels",
          "Matni vetëm nivelet e oksigjenit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التركيز على تأثير الرياح فقط",
          "Focus only on wind effects",
          "Përqendrohuni vetëm në efektet e erës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل الدراسات العلمية والاعتماد على الملاحظات الفردية",
          "Ignore scientific studies and rely on personal observations",
          "Injoroni studimet shkencore dhe mbështetuni në vëzhgimet personale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 20,
    text: localized(
      "كيف يمكن للطلاب المشاركة في تقليل تأثير التغير المناخي؟",
      "How can students participate in reducing the impact of climate change?",
      "Si mund të marrin pjesë nxënësit në reduktimin e ndikimit të ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "نشر الوعي البيئي والمشاركة في الأنشطة الخضراء",
          "Raise environmental awareness and participate in green activities",
          "Rritja e ndërgjegjësimit mjedisor dhe pjesëmarrja në aktivitete të gjelbra"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من السيارات الخاصة بدلًا من المشي",
          "Use more private cars instead of walking",
          "Përdorni më shumë makina private në vend të ecjes"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل استخدام الطاقة المتجددة",
          "Reduce the use of renewable energy",
          "Reduktoni përdorimin e energjisë së rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قطع الأشجار لتوسيع المساحات العمرانية",
          "Cut down trees to expand urban areas",
          "Pritini pemët për të zgjeruar zonat urbane"
        ),
        isCorrect: false,
      },
    ],
  },

  // ---------------- Extra conceptual / advanced-medium items ----------------

  {
    quizKey: "climate_change_medium",
    order: 21,
    text: localized(
      "ماذا يحدث للمحيطات نتيجة امتصاص ثاني أكسيد الكربون الزائد؟",
      "What happens to the oceans as a result of excessive carbon dioxide absorption?",
      "Çfarë ndodh me oqeanet si pasojë e absorbimit të tepërt të dioksidit të karbonit?"
    ),
    options: [
      {
        text: localized(
          "تصبح المياه أكثر حمضية",
          "The water becomes more acidic",
          "Uji bëhet më acidik"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تصبح المياه أكثر برودة",
          "The water becomes colder",
          "Uji bëhet më i ftohtë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ينخفض مستوى سطح البحر",
          "Sea levels drop",
          "Ulet niveli i deteve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تزداد كمية الأكسجين",
          "The amount of oxygen increases",
          "Rritet sasia e oksigjenit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 22,
    text: localized(
      "ما هو التأثير الرئيسي لارتفاع درجات الحرارة العالمية؟",
      "What is the main effect of increasing global temperatures?",
      "Cili është efekti kryesor i rritjes së temperaturave globale?"
    ),
    options: [
      {
        text: localized(
          "ذوبان الأنهار الجليدية وارتفاع مستويات سطح البحر",
          "Melting of glaciers and rising sea levels",
          "Shkrirja e akullnajave dhe ngritja e nivelit të deteve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ارتفاع درجات الحرارة في بعض المناطق",
          "Increasing temperatures in some regions",
          "Rritja e temperaturës në disa rajone"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة المساحات الصحراوية",
          "Increasing desert areas",
          "Rritja e sipërfaqes së shkretëtirave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تطور أنواع جديدة من الحيوانات",
          "Development of more animal species",
          "Zhvillimi i më shumë llojeve të kafshëve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 23,
    text: localized(
      "ما هو التأثير الرئيسي لإزالة الغابات على تغيّر المناخ؟",
      "What is the main impact of deforestation on climate changes?",
      "Cili është ndikimi kryesor i prerjes së pyjeve në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع درجات الحرارة العالمية",
          "Increased global temperatures",
          "Rritja e temperaturave globale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة التنوع البيولوجي",
          "Increased biodiversity",
          "Shtimi i biodiversitetit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة العواصف وموجات الحر",
          "Increased incidences of storms and heat waves",
          "Rritja e stuhive dhe valëve të nxehtësisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض الأكسجين في الغلاف الجوي",
          "Decreased oxygen in the atmosphere",
          "Zvogëlimi i oksigjenit në atmosferë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 24,
    text: localized(
      "ما هو السبب الرئيسي لتأثير غاز الميثان على تغيّر المناخ؟",
      "Why methane has a very devastating effect on climate change?",
      "Cila është arsyeja kryesore pse gazi metan ndikon në ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "له قدرة أكبر على الاحتباس الحراري مقارنة بثاني أكسيد الكربون",
          "It has a higher global warming potential than carbon dioxide",
          "Ka një potencial më të lartë për ngrohje globale se sa dioksidi i karbonit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يقلل من تأثير الغازات الدفيئة الناتجة عن النفايات",
          "It reduces the greenhouse effect from waste",
          "Redukton efektin serrë nga mbeturinat"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يخفض منسوب المياه في المحيطات",
          "It lowers the water level in the oceans",
          "Ul nivelin e ujit në oqeane"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من مستوى الأكسجين في الغلاف الجوي",
          "It increases the oxygen level in the atmosphere",
          "Shton nivelin e oksigjenit në atmosferë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 25,
    text: localized(
      "أي قطاع يطلق أكبر كمية من غازات الدفيئة؟",
      "Which of the following activities emits the largest amount of greenhouse gases?",
      "Cili sektor emeton sasinë më të madhe të gazrave me efekt serrë?"
    ),
    options: [
      {
        text: localized(
          "قطاع النقل",
          "Transportation",
          "Transporti"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "إنتاج المنسوجات",
          "Textile production",
          "Prodhimi i tekstilit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الزراعة وتربية الماشية",
          "Agriculture and livestock",
          "Bujqësia dhe blegtoria"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "صناعة إعادة التدوير",
          "Recycling industry",
          "Industria e riciklimit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 26,
    text: localized(
      "كيف يؤثر ارتفاع درجات حرارة المياه على الكائنات البحرية؟",
      "How does rising water temperatures affect marine species?",
      "Si ndikon rritja e temperaturave e ujit në speciet detare?"
    ),
    options: [
      {
        text: localized(
          "يدمر الشعاب المرجانية",
          "Destroys coral reefs",
          "Shkatërron shkëmbinjtë koralor"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من أعداد الأسماك",
          "Increasing fish populations",
          "Shton popullatat e peshqve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من التكاثر",
          "Reduces reproduction",
          "Zvogelon riprodhimin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من الإثراء الغذائي في المياه الساحلية",
          "Increases eutrophication on coastal waters",
          "Rrit eutrofikimin në brigjet detare"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 27,
    text: localized(
      "ما هو تأثير تغيّر المناخ على الزراعة؟",
      "What is the impact of climate changes on agriculture?",
      "Cili është ndikimi i ndryshimeve klimatike në bujqësi?"
    ),
    options: [
      {
        text: localized(
          "انخفاض الأمطار وزيادة الجفاف",
          "Reduced rainfall and increased droughts",
          "Ulja e reshjeve dhe shpeshtimi i thatësirave"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تحسين المحاصيل في جميع الزراعات",
          "Improved yields in all crops",
          "Përmirësimi i rendimenteve në të gjitha kulturat"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة توفر المياه",
          "Increased water availability",
          "Rritja e sasisë së ujit në tokë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض متوسط درجات الحرارة",
          "Lower average temperatures",
          "Zvogëlimi i temperaturave mesatare"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 28,
    text: localized(
      "لماذا يؤثر ارتفاع درجات الحرارة العالمية على دورة الماء؟",
      "Why does rising global temperatures affect the water cycle?",
      "Pse rritja e temperaturës globale ndikon në ciklin e ujit?"
    ),
    options: [
      {
        text: localized(
          "يزيد من التبخر ويغير توزيع الهطول",
          "It increases evaporation and changes the distribution of precipitation",
          "Rrit avullimin dhe ndryshon shpërndarjen e reshjeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يجعل مياه المحيطات أكثر برودة",
          "It makes the water in the oceans colder",
          "E bën ujin më të ftohtë në oqeane"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من كمية المياه العذبة في الأنهار",
          "It reduces the amount of freshwater in rivers",
          "Ul sasinë e ujit të ëmbël në lumenj"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من تكاثف الماء",
          "It increases the condensation of water",
          "Rrit kondensimin e ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 29,
    text: localized(
      "ما هو التأثير الرئيسي لتغيّر المناخ على التنوع البيولوجي؟",
      "What is the main impact of climate changes on biodiversity?",
      "Cili është ndikimi kryesor i ndryshimeve klimatike në biodiversitet?"
    ),
    options: [
      {
        text: localized(
          "انتقال الأنواع نحو القطبين أو إلى ارتفاعات أعلى",
          "Shifting species towards the poles or higher altitudes",
          "Zhvendosja e specieve drejt poleve ose lartësive më të mëdha"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة عدد الأنواع في الصحارى",
          "Increasing the number of species in deserts",
          "Rritja e numrit të specieve në shkretëtira"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين ظروف تكاثر جميع الأنواع",
          "Improving the conditions for the reproduction of all species",
          "Përmirësimi i kushteve për shumimin e të gjitha specieve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا تأثير على التنوع البيولوجي",
          "No impact on biodiversity",
          "Nuk ka ndikim në biodiversitet"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 30,
    text: localized(
      "أي من هذه العمليات يمكن أن تساعد في تقليل ثاني أكسيد الكربون في الغلاف الجوي؟",
      "Which of these processes could help to reduce carbon dioxide in the atmosphere?",
      "Cili nga këto procese mund të ndihmojë në uljen e dioksidit të karbonit në atmosferë?"
    ),
    options: [
      {
        text: localized(
          "تكنولوجيا احتجاز الكربون",
          "Carbon capture technology",
          "Teknologjia e kapjes dhe ruajtjes së karbonit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام البلاستيك",
          "Greater use of plastics",
          "Përdorimi më i madh i plastikës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق المزيد من الوقود الأحفوري",
          "Burning more fossil fuels",
          "Djegia e më shumë karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إزالة الغابات لبناء مناطق حضرية جديدة",
          "Deforestation for new urban areas",
          "Prerja e pyjeve për hapësira të reja urbane"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 31,
    text: localized(
      "ما هو التأثير الرئيسي لارتفاع درجات الحرارة العالمية على المحيطات؟",
      "What is the main impact of rising global temperatures on the oceans?",
      "Cili është ndikimi kryesor i rritjes së temperaturave globale në oqeane?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع درجة حرارة المحيطات مما يؤدي إلى موت جماعي للشعاب المرجانية",
          "Warming of the oceans, causing mass coral and other living creatures die-off",
          "Ngrohja e oqeaneve, duke shkaktuar vdekje masive të koraleve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة التنوع البيولوجي البحري",
          "Increased marine biodiversity",
          "Shtimi i biodiversitetit detar"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض مستويات سطح البحر بسبب تبخّر المياه",
          "Lowering sea levels due to water evaporation",
          "Ulja e nivelit të deteve për shkak të avullimit të ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الغطاء الجليدي في القطبين",
          "Increased ice cover at the Earth's poles",
          "Shtimi i akullnajave në polet e Tokës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_medium",
    order: 32,
    text: localized(
      "ما هو تأثير تغيّر المناخ على صحة الإنسان؟",
      "What is the impact of climate change on human health?",
      "Cili është ndikimi i ndryshimeve klimatike në shëndetin e njerëzve?"
    ),
    options: [
      {
        text: localized(
          "زيادة الأمراض الناتجة عن الظواهر الجوية المتطرفة",
          "Increase in diseases from extreme weather",
          "Rritja e sëmundjeve nga ekstremet e motit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تحسين ظروف المعيشة في المناطق الحارة",
          "Improvement in living conditions in warm areas",
          "Përmirësimi i kushteve të jetesës në zonat e ngrohta"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض الأمراض المعدية",
          "Reduction in infectious diseases",
          "Zvogëlimi i sëmundjeve infektive"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض تلوث الهواء",
          "Reduction in air pollution",
          "Ulja e ndotjes së ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 1,
    text: localized(
      "ما هو العامل الأكثر تأثيرًا في تسريع وتيرة التغير المناخي عالميًا؟",
      "The most significant accelerating factor of global climate change is:",
      "Faktori më i rëndësishëm përshpejtues i ndryshimeve klimatike globale është:"
    ),
    options: [
      {
        text: localized(
          "زيادة انبعاثات غازات الدفيئة الناتجة عن الأنشطة البشرية",
          "Increased greenhouse gas emissions from human activities",
          "Rritja e emetimeve të gazeve serrë nga aktivitetet njerëzore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "التغيرات الطبيعية في مدار الأرض",
          "Natural changes in Earth's orbit",
          "Ndryshimet natyrore në orbitën e Tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "النشاط البركاني المتزايد",
          "Increased volcanic activity",
          "Rritja e aktivitetit vullkanik"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة نسبة بخار الماء في الغلاف الجوي",
          "Higher levels of water vapor in the atmosphere",
          "Nivelet më të larta të avullit të ujit në atmosferë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 2,
    text: localized(
      "كيف يمكن تقييم مدى نجاح الدول في تقليل انبعاثات الكربون؟",
      "How can the success of countries in reducing carbon emissions be evaluated?",
      "Si mund të vlerësohet suksesi i vendeve në reduktimin e emetimeve të karbonit?"
    ),
    options: [
      {
        text: localized(
          "مقارنة معدلات الانبعاثات قبل وبعد تطبيق السياسات البيئية",
          "Comparing emission levels before and after implementing environmental policies",
          "Krahasimi i niveleve të emetimeve para dhe pas zbatimit të politikave mjedisore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد المشاريع البيئية دون النظر إلى نتائجها",
          "Counting the number of environmental projects without assessing their impact",
          "Numërimi i projekteve mjedisore pa vlerësuar ndikimin e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد الاجتماعات الدولية حول المناخ",
          "Tracking the number of international climate meetings",
          "Ndjekja e numrit të takimeve ndërkombëtare për klimën"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "متابعة التصريحات الحكومية فقط",
          "Relying solely on government statements",
          "Mbështetje vetëm në deklaratat e qeverisë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 3,
    text: localized(
      "ما هو المؤشر الأكثر دقة لتحديد تأثير التغير المناخي على النظم البيئية؟",
      "What is the most accurate indicator of climate change’s impact on ecosystems?",
      "Cili është treguesi më i saktë i ndikimit të ndryshimeve klimatike në ekosisteme?"
    ),
    options: [
      {
        text: localized(
          "معدلات فقدان التنوع البيولوجي في المناطق المتأثرة",
          "The rate of biodiversity loss in affected areas",
          "Shkalla e humbjes së biodiversitetit në zonat e prekura"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "عدد العواصف المدارية خلال السنة",
          "The number of tropical storms per year",
          "Numri i stuhive tropikale në vit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التغيرات الموسمية في درجات الحرارة فقط",
          "Seasonal temperature changes alone",
          "Ndryshimet vetëm sezonale të temperaturës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "نسبة ثاني أكسيد الكربون في المدن الصناعية",
          "Carbon dioxide levels in industrial cities",
          "Nivelet e dioksidit të karbonit në qytetet industriale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 4,
    text: localized(
      "لماذا يُعتبر التمويل المستدام أداة حاسمة في مكافحة التغير المناخي؟",
      "Why is sustainable finance considered a crucial tool in combating climate change?",
      "Pse financimi i qëndrueshëm konsiderohet si një mjet vendimtar në luftimin e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "لأنه يشجع الاستثمارات في الطاقة النظيفة والتكنولوجيا الخضراء",
          "It encourages investment in clean energy and green technologies",
          "Inkurajon investimet në energjinë e pastër dhe teknologjitë e gjelbra"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يقلل من استخدام الموارد الطبيعية",
          "It reduces the use of natural resources",
          "Redukton përdorimin e burimeve natyrore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يحسن من أداء الأسواق المالية فقط",
          "It improves financial market performance only",
          "Përmirëson vetëm performancën e tregjeve financiare"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يحد من الأنشطة الصناعية",
          "It limits industrial activities",
          "Kufizon aktivitetet industriale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 5,
    text: localized(
      "كيف يمكن تحليل العلاقة بين التغير المناخي والأمن الغذائي؟",
      "How can the relationship between climate change and food security be analyzed?",
      "Si mund të analizohet marrëdhënia midis ndryshimeve klimatike dhe sigurisë ushqimore?"
    ),
    options: [
      {
        text: localized(
          "دراسة تأثير ارتفاع الحرارة والجفاف على إنتاج المحاصيل",
          "Studying the impact of rising temperatures and drought on crop production",
          "Studimi i ndikimit të rritjes së temperaturave dhe thatësirës në prodhimin e bimëve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "مقارنة أسعار الغذاء دون النظر إلى أسباب التغير",
          "Comparing food prices without considering the causes of change",
          "Krahasimi i çmimeve të ushqimeve pa marrë parasysh shkaqet e ndryshimit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحليل استهلاك الفرد من الغذاء فقط",
          "Analyzing per capita food consumption alone",
          "Analizimi vetëm i konsumit të ushqimit për kokë banori"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس مساحة الأراضي الزراعية دون النظر إلى إنتاجيتها",
          "Measuring agricultural land area without assessing productivity",
          "Matja e sipërfaqes së tokës bujqësore pa vlerësuar produktivitetin"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 6,
    text: localized(
      "ما هي الاستراتيجية الأكثر كفاءة لمساعدة الدول النامية في مواجهة التغير المناخي؟",
      "What is the most efficient strategy to help developing countries tackle climate change?",
      "Cila është strategjia më efikase për të ndihmuar vendet në zhvillim të trajtojnë ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "نقل التكنولوجيا وتعزيز التمويل المناخي",
          "Transferring technology and enhancing climate finance",
          "Transferimi i teknologjisë dhe rritja e financimit të klimës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الضرائب على الصناعات المحلية",
          "Increasing taxes on local industries",
          "Rritja e taksave për industritë lokale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "فرض قوانين بيئية صارمة دون تقديم دعم مالي",
          "Imposing strict environmental laws without financial support",
          "Imponimi i ligjeve strikte mjedisore pa mbështetje financiare"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل استخدام الموارد المتجددة",
          "Reducing the use of renewable resources",
          "Reduktimi i përdorimit të burimeve të rinovueshme"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 7,
    text: localized(
      "كيف يمكن تقييم فعالية التشريعات البيئية على المدى الطويل؟",
      "How can the long-term effectiveness of environmental legislation be assessed?",
      "Si mund të vlerësohet efektiviteti afatgjatë i legjislacionit mjedisor?"
    ),
    options: [
      {
        text: localized(
          "قياس مدى انخفاض الانبعاثات والتلوث بعد تنفيذ القوانين",
          "Measuring reductions in emissions and pollution after implementation",
          "Matja e reduktimeve të emetimeve dhe ndotjes pas zbatimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "عدد القوانين التي تم تمريرها دون تنفيذها",
          "Counting the number of enacted laws without evaluating their impact",
          "Numërimi i ligjeve të miratuara pa vlerësuar ndikimin e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تصريحات السياسيين حول القوانين البيئية",
          "Relying on political statements about environmental policies",
          "Mbështetja në deklaratat politike për politikat mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حجم الغرامات المفروضة على الشركات الصناعية",
          "Assessing only fines imposed on industrial companies",
          "Vlerësimi vetëm i gjobave të vendosura ndaj kompanive industriale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 8,
    text: localized(
      "ما هو التأثير المتوقع للاعتماد الكامل على الطاقة المتجددة عالميًا؟",
      "What is the expected impact of a global transition to 100% renewable energy?",
      "Cili është ndikimi i pritur i një tranzicioni global drejt 100% të energjisë së rinovueshme?"
    ),
    options: [
      {
        text: localized(
          "تقليل انبعاثات الكربون وتحقيق الاستدامة البيئية",
          "Reduced carbon emissions and sustainable environmental practices",
          "Reduktimi i emetimeve të karbonit dhe praktika të qëndrueshme mjedisore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة تكلفة الإنتاج الصناعي بشكل غير مستدام",
          "Increased unsustainable industrial production costs",
          "Rritja e kostove të paqëndrueshme të prodhimit industrial"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الاعتماد على الموارد الأحفورية",
          "Greater reliance on fossil fuels",
          "Mbështetja më e madhe në lëndët djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ارتفاع مستوى سطح البحر",
          "Rising sea levels",
          "Rritja e nivelit të detit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 9,
    text: localized(
      "لماذا يُعد التكيف مع التغير المناخي بنفس أهمية تقليل الانبعاثات؟",
      "Why is climate adaptation as important as reducing emissions?",
      "Pse adaptimi klimatik është po aq i rëndësishëm sa edhe reduktimi i emetimeve?"
    ),
    options: [
      {
        text: localized(
          "لأنه يساعد المجتمعات على التعامل مع التأثيرات الحالية للتغير المناخي",
          "It helps communities cope with the current impacts of climate change",
          "I ndihmon komunitetet të përballen me ndikimet aktuale të ndryshimeve klimatike"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يقلل من الحاجة إلى استخدام الطاقة المتجددة",
          "It reduces the need for renewable energy use",
          "Redukton nevojën për përdorimin e energjisë së rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يحد من ظاهرة الاحتباس الحراري",
          "It prevents global warming from occurring",
          "Parandalon shfaqjen e ngrohjes globale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يزيد من تلوث الهواء",
          "It increases air pollution",
          "Rrit ndotjen e ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 10,
    text: localized(
      "ما هو الدور الأساسي للمدن الذكية في الحد من التغير المناخي؟",
      "What is the primary role of smart cities in mitigating climate change?",
      "Cili është roli parësor i qyteteve inteligjente në zbutjen e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تحسين كفاءة استخدام الطاقة والموارد الطبيعية",
          "Enhancing energy efficiency and resource management",
          "Rritja e efikasitetit të energjisë dhe menaxhimit të burimeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة التصنيع والاعتماد على الوقود الأحفوري",
          "Increasing manufacturing and fossil fuel reliance",
          "Rritja e prodhimit dhe mbështetjes në karburantet fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل استخدام وسائل النقل العام",
          "Reducing public transportation use",
          "Reduktimi i përdorimit të transportit publik"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد الكامل على الزراعة التقليدية",
          "Fully depending on traditional agriculture",
          "Varësia e plotë nga bujqësia tradicionale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 11,
    text: localized(
      "كيف يمكن تقييم التأثير الاقتصادي للتغير المناخي؟",
      "How can the economic impact of climate change be evaluated?",
      "Si mund të vlerësohet ndikimi ekonomik i ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تحليل الخسائر في الزراعة والصناعة والبنية التحتية",
          "Analyzing losses in agriculture, industry, and infrastructure",
          "Analizimi i humbjeve në bujqësi, industri dhe infrastrukturë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس التغير في أسعار النفط فقط",
          "Measuring fluctuations in oil prices alone",
          "Matja e luhatjeve të çmimeve të naftës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة نسبة البطالة دون النظر إلى العوامل البيئية",
          "Comparing unemployment rates without considering environmental factors",
          "Krahasimi i shkallës së papunësisë pa marrë parasysh faktorët mjedisorë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دراسة مستوى الدخل الفردي فقط",
          "Examining individual income levels only",
          "Ekzaminimi i vetëm i niveleve të të ardhurave individuale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 12,
    text: localized(
      "ما هو التحدي الأكبر الذي يواجه اتفاقيات المناخ العالمية؟",
      "What is the biggest challenge facing global climate agreements?",
      "Cila është sfida më e madhe me të cilën përballen marrëveshjet globale për klimën?"
    ),
    options: [
      {
        text: localized(
          "التفاوت في الالتزام بين الدول الصناعية والنامية",
          "The disparity in commitment between industrialized and developing nations",
          "Pabarazia në angazhimin midis shteteve të industrializuara dhe atyre në zhvillim"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "عدم وجود بيانات كافية حول التغير المناخي",
          "Lack of sufficient data on climate change",
          "Mungesa e të dhënave të mjaftueshme për ndryshimet klimatike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قلة الاجتماعات الدولية حول المناخ",
          "A limited number of international climate meetings",
          "Numri i kufizuar i takimeve ndërkombëtare mbi klimën"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "انخفاض الطلب العالمي على الوقود الأحفوري",
          "The declining global demand for fossil fuels",
          "Rënia e kërkesës globale për karburante fosile"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 13,
    text: localized(
      "لماذا يُعتبر خفض استهلاك اللحوم أحد الحلول للحد من التغير المناخي؟",
      "Why is reducing meat consumption considered a solution to climate change?",
      "Pse reduktimi i konsumit të mishit konsiderohet si një zgjidhje për ndryshimet klimatike?"
    ),
    options: [
      {
        text: localized(
          "لأن إنتاج اللحوم يسبب انبعاثات عالية من غاز الميثان",
          "Livestock farming emits high levels of methane gas",
          "Blegtoria lëshon nivele të larta të gazit metan"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يقلل من نسبة الأكسجين في الغلاف الجوي",
          "It reduces oxygen levels in the atmosphere",
          "Redukton nivelet e oksigjenit në atmosferë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يزيد من تلوث المياه العذبة",
          "It increases freshwater pollution",
          "Rrit ndotjen e ujërave të ëmbla"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يسبب انبعاثات ثاني أكسيد الكربون فقط",
          "It causes only carbon dioxide emissions",
          "Shkakton vetëm emetime të dioksidit të karbonit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 14,
    text: localized(
      "كيف يمكن للذكاء الاصطناعي أن يساعد في تقليل التغير المناخي؟",
      "How can artificial intelligence help mitigate climate change?",
      "Si mund të ndihmojë inteligjenca artificiale në zbutjen e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "تحسين كفاءة استهلاك الطاقة من خلال التحليل الذكي",
          "Enhancing energy efficiency through smart analysis",
          "Rritja e efikasitetit të energjisë përmes analizave inteligjente"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استهلاك الوقود الأحفوري",
          "Increasing fossil fuel consumption",
          "Rritja e konsumit të karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الحاجة إلى الطاقة الشمسية",
          "Reducing the need for solar energy",
          "Reduktimi i nevojës për energji diellore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تعزيز إزالة الغابات",
          "Promoting deforestation",
          "Promovimi i shpyllëzimit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 15,
    text: localized(
      "كيف يمكن قياس تأثير ارتفاع مستوى سطح البحر على المجتمعات الساحلية؟",
      "How can the impact of rising sea levels on coastal communities be measured?",
      "Si mund të matet ndikimi i rritjes së nivelit të detit në komunitetet bregdetare?"
    ),
    options: [
      {
        text: localized(
          "تحليل معدلات النزوح والتغيرات في البنية التحتية",
          "Analyzing displacement rates and infrastructure changes",
          "Analizimi i shkallës së zhvendosjes dhe ndryshimeve në infrastrukturë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس درجات الحرارة فقط",
          "Measuring temperature levels only",
          "Matja vetëm e niveleve të temperaturës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد الأعاصير السنوية",
          "Counting the number of annual hurricanes",
          "Numërimi i numrit të uraganeve vjetore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "متابعة معدلات تساقط الأمطار",
          "Tracking rainfall amounts",
          "Monitorimi i sasive të reshjeve"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 16,
    text: localized(
      "كيف يمكن تعزيز مشاركة الأفراد في مواجهة التغير المناخي؟",
      "How can individual participation in combating climate change be encouraged?",
      "Si mund të inkurajohet pjesëmarrja individuale në luftën kundër ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "توفير حوافز مالية لاستخدام الطاقة المتجددة",
          "Providing financial incentives for renewable energy use",
          "Sigurimi i stimujve financiarë për përdorimin e energjisë së rinovueshme"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل الدعم الحكومي لمشاريع الطاقة النظيفة",
          "Reducing government support for clean energy projects",
          "Reduktimi i mbështetjes së qeverisë për projektet e energjisë së pastër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "فرض ضرائب أعلى على المنتجات الصديقة للبيئة",
          "Imposing higher taxes on eco-friendly products",
          "Vendosja e taksave më të larta për produktet ekologjike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل عدد المبادرات المجتمعية",
          "Limiting the number of community initiatives",
          "Kufizimi i numrit të iniciativave komunitare"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 17,
    text: localized(
      "ما هو التأثير الرئيسي لإزالة الغابات على المناخ؟",
      "What is the primary impact of deforestation on climate?",
      "Cili është ndikimi primar i shpyllëzimit në klimë?"
    ),
    options: [
      {
        text: localized(
          "زيادة تركيز ثاني أكسيد الكربون في الغلاف الجوي",
          "Increased atmospheric carbon dioxide levels",
          "Rritja e niveleve të dioksidit të karbonit në atmosferë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل نسبة الرطوبة في الهواء فقط",
          "Reduced air humidity levels only",
          "Reduktimi vetëm i niveleve të lagështirës në ajër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "خفض درجة حرارة الأرض",
          "Lower global temperatures",
          "Ulja e temperaturave globale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة الهواء",
          "Improved air quality",
          "Përmirësimi i cilësisë së ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 18,
    text: localized(
      "كيف يمكن تقييم نجاح مشاريع إعادة التشجير في تقليل التغير المناخي؟",
      "How can the success of reforestation projects in mitigating climate change be assessed?",
      "Si mund të vlerësohet suksesi i projekteve të ripyllëzimit në zbutjen e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "قياس قدرة الغابات المزروعة حديثًا على امتصاص ثاني أكسيد الكربون",
          "Measuring the ability of newly planted forests to absorb carbon dioxide",
          "Matja e aftësisë së pyjeve të sapombjellura për të thithur dioksid karboni"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "حساب عدد الأشجار المزروعة دون النظر إلى تأثيرها البيئي",
          "Counting the number of trees planted without evaluating their impact",
          "Numërimi i numrit të pemëve të mbjellura pa vlerësuar ndikimin e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة أعداد الغابات في الدول المختلفة فقط",
          "Comparing forested areas in different countries only",
          "Krahasimi i zonave pyjore vetëm në vende të ndryshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحليل نوعية التربة فقط",
          "Analyzing soil quality alone",
          "Vetëm analizimi i cilësisë së tokës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 19,
    text: localized(
      "ما هو الأثر المتوقع لزيادة الاستثمارات في الاقتصاد الأخضر؟",
      "What is the expected impact of increased investments in the green economy?",
      "Cili është ndikimi i pritur i rritjes së investimeve në ekonominë e gjelbër?"
    ),
    options: [
      {
        text: localized(
          "تعزيز فرص العمل وتقليل الانبعاثات البيئية",
          "Creating jobs and reducing environmental emissions",
          "Krijimi i vendeve të punës dhe reduktimi i emetimeve mjedisore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل استخدام الطاقة المتجددة",
          "Decreasing renewable energy use",
          "Ulja e përdorimit të energjisë së rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الطلب على الوقود الأحفوري",
          "Raising demand for fossil fuels",
          "Rritja e kërkesës për lëndë djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ارتفاع نسبة التلوث الصناعي",
          "Increasing industrial pollution",
          "Rritja e ndotjes industriale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 20,
    text: localized(
      "كيف يمكن تقييم تأثير وسائل النقل المستدامة على البيئة؟",
      "How can the impact of sustainable transportation on the environment be evaluated?",
      "Si mund të vlerësohet ndikimi i transportit të qëndrueshëm në mjedis?"
    ),
    options: [
      {
        text: localized(
          "مقارنة معدلات الانبعاثات بين وسائل النقل المختلفة",
          "Comparing emission levels across different transportation modes",
          "Krahasimi i niveleve të emetimeve në mënyra të ndryshme të transportit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس سرعة وسائل النقل فقط",
          "Measuring transportation speed only",
          "Matja vetëm e shpejtësisë së transportit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة أسعار التذاكر",
          "Comparing ticket prices",
          "Krahasimi i çmimeve të biletave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد الركاب في وسائل النقل العام",
          "Counting the number of public transport users",
          "Numërimi i përdoruesve të transportit publik"
        ),
        isCorrect: false,
      },
    ],
  },

  // ---------------- Extra advanced conceptual items ----------------

  {
    quizKey: "climate_change_hard",
    order: 21,
    text: localized(
      "أي وثيقة دولية تهدف إلى تقليل آثار تغيّر المناخ؟",
      "Which international document aims to reduce the effects of climate changes?",
      "Cili dokument ndërkombëtar synon të reduktojë efektet e ndryshimeve klimatike?"
    ),
    options: [
      {
        text: localized(
          "اتفاق باريس",
          "Paris Agreement",
          "Marrëveshja e Parisit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "اتفاقية الأوزون",
          "Ozone Convention",
          "Konventa e Ozonit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ميثاق وارسو",
          "Warsaw Pact",
          "Traktati i Varshavës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ميثاق الأرض",
          "Earth Charter",
          "Karta e Tokës"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 22,
    text: localized(
      "ماذا سيحدث إذا ذابت كل الصفائح الجليدية في القطب الجنوبي؟",
      "What would happen if all the Antarctic ice sheets melted?",
      "Çfarë do të ndodhte nëse të gjitha akullnajat e Antarktikut shkrihen?"
    ),
    options: [
      {
        text: localized(
          "سيتسبب ذلك في ارتفاع كبير في مستويات سطح البحر",
          "It would cause a significant rise in sea levels",
          "Do të shkaktonte një rritje të konsiderueshme të nivelit të deteve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لن يكون له أي تأثير على مستويات سطح البحر",
          "It would have no effect on sea levels",
          "Nuk do të kishte ndikim në nivelin e deteve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "سيؤدي إلى خفض متوسط درجة حرارة الأرض",
          "It would lower the average temperature of the Earth",
          "Do të ulte temperaturën mesatare të Tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "سيزيد من إنتاج الكهرباء من مياه الذوبان",
          "It would increase the production of electricity from meltwater",
          "Do të rriste prodhimin e energjisë elektrike nga ujërat e shkrirë"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 23,
    text: localized(
      "كيف يؤثر تآكل السواحل على التنوع البيولوجي في المواطن البحرية؟",
      "How does coastal erosion affect the biodiversity of marine habitats?",
      "Si ndikon erozioni i bregdetit në biodiversitetin e habitateve detare?"
    ),
    options: [
      {
        text: localized(
          "يُلحق الضرر بموائل الأسماك",
          "It damages fish habitats",
          "Dëmton habitatet e peshqve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يُحسّن التنوع البيولوجي",
          "It improves biodiversity",
          "Përmirëson biodiversitetin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من كمية الكائنات الدقيقة في الماء",
          "It increases the number of microorganisms in the water",
          "Rrit sasinë e mikroorganizmave në ujë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "له تأثير غير محدد على التنوع البيولوجي البحري",
          "It has an undetermined impact on marine biodiversity",
          "Ka ndikim të pacaktuar në biodiversitetin detar"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 24,
    text: localized(
      "ما العامل الذي يجعل غاز الميثان أكثر قوة كغاز دفيئة من ثاني أكسيد الكربون؟",
      "What factor makes methane a more potent greenhouse gas than carbon dioxide?",
      "Cili faktor e bën metanin një gaz më të fuqishëm efekt serrë se dioksidi i karbonit?"
    ),
    options: [
      {
        text: localized(
          "أنه يمتلك الميثان قدرة احتباس حراري أعلى بكثير من ثاني أكسيد الكربون",
          "Methane has a warming potential many times higher than CO₂",
          "Metani ka një potencial ngrohjeje shumë herë më të lartë se CO₂"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يبقى الميثان في الغلاف الجوي لفترة أطول من ثاني أكسيد الكربون",
          "Methane stays in the atmosphere longer than CO₂",
          "Metani qëndron më gjatë në atmosferë se CO₂"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ينبعث الميثان بكميات أكبر في الغلاف الجوي",
          "Methane is emitted in larger quantities into the atmosphere",
          "Metani shkarkohet në sasira më të mëdha në atmosferë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يساعد الميثان في تبريد الكوكب",
          "Methane helps cool the planet",
          "Metani ndihmon në ftohjen e planetit"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 25,
    text: localized(
      "إذا لم تتخذ الحكومات العالمية إجراءات للحد من تغيّر المناخ، ما العواقب المتوقعة في الخمسين سنة القادمة؟",
      "If global governments do not take action to reduce climate change, what could be an expected consequence in the next 50 years?",
      "Nëse qeveritë globale nuk ndërmarrin masa për të zvogëluar ndryshimet klimatike, cila mund të jetë një pasojë e pritshme në 50 vitet e ardhshme?"
    ),
    options: [
      {
        text: localized(
          "ارتفاع درجات الحرارة القصوى والجفاف والفيضانات",
          "Increasing extreme temperatures, droughts and floods",
          "Rritja e temperaturave, thatësirave dhe përmbytjeve ekstreme"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض مستويات سطح البحر وتحسّن في التنوع البيولوجي",
          "Lowering sea levels and improving biodiversity",
          "Ulja e nivelit të deteve dhe përmirësimi i biodiversitetit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسّن ظروف الزراعة وزيادة هطول الأمطار المناسبة",
          "Improving conditions for agriculture and increasing adequate rainfall",
          "Përmirësimi i kushteve për bujqësinë dhe rritja e reshjeve të duhura"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل آثار الغازات الدفيئة بشكل طبيعي",
          "Reducing the effects of greenhouse gases naturally",
          "Reduktimi i efekteve të gazrave serrë në mënyrë natyrale"
        ),
        isCorrect: false,
      },
    ],
  },

  {
    quizKey: "climate_change_hard",
    order: 26,
    text: localized(
      "لماذا تؤثر تغيّرات المناخ على الدول الفقيرة أكثر؟",
      "Why do climate changes affect poor countries more?",
      "Pse ndryshimet klimatike ndikojnë më shumë në vendet e varfra?"
    ),
    options: [
      {
        text: localized(
          "لأنها أكثر عرضة للكوارث الطبيعية",
          "Because they are more vulnerable to natural disasters",
          "Sepse ato janë më të ndjeshme ndaj fatkeqësive natyrore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تحتوي على غابات وتنوع بيولوجي أكثر",
          "Because they have more forests and biodiversity",
          "Sepse kanë më shumë pyje dhe biodiversitet"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها أبعد عن خط الاستواء",
          "Because they are further from the Equator",
          "Sepse ndodhen më larg Ekuatorit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تنتج طاقة متجددة أكثر",
          "Because they produce more renewable energy",
          "Sepse prodhojnë më shumë energji të ripërtëritshme"
        ),
        isCorrect: false,
      },
    ],
  },

   {
    quizKey: "sustainability_easy",
    order: 1,
    text: localized(
      "ما هو المقصود بجودة البيئة؟",
      "What does environmental quality mean?",
      "Çfarë do të thotë cilësi mjedisore?"
    ),
    options: [
      {
        text: localized(
          "الحالة العامة للهواء والماء والتربة وتأثيرها على الكائنات الحية",
          "The overall condition of air, water, and soil and their impact on living organisms",
          "Gjendja e përgjithshme e ajrit, ujit dhe tokës dhe ndikimi i tyre në organizmat e gjallë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "مدى تلوث الهواء في المدن الصناعية فقط",
          "The level of air pollution in industrial cities only",
          "Niveli i ndotjes së ajrit vetëm në qytetet industriale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "جودة الطعام الذي نتناوله يوميًا",
          "The quality of the food we eat daily",
          "Cilësia e ushqimit që hamë çdo ditë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "كمية الأمطار التي تهطل سنويًا",
          "The amount of annual rainfall",
          "Sasia e reshjeve vjetore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 2
  {
    quizKey: "sustainability_easy",
    order: 2,
    text: localized(
      "ما هو العنصر الأساسي الذي تعتمد عليه جودة الهواء؟",
      "What is the main factor that determines air quality?",
      "Cili është faktori kryesor që përcakton cilësinë e ajrit?"
    ),
    options: [
      {
        text: localized(
          "نسبة التلوث ومدى نقاء الهواء",
          "The level of pollution and air purity",
          "Niveli i ndotjes dhe pastërtia e ajrit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "كمية الغازات المنبعثة من النباتات",
          "The amount of gases released by plants",
          "Sasia e gazrave që çlirohen nga bimët"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "درجة حرارة الجو فقط",
          "Only the temperature of the atmosphere",
          "Vetëm temperatura e atmosferës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لون السماء في الصباح",
          "The color of the sky in the morning",
          "Ngjyra e qiellit në mëngjes"
        ),
        isCorrect: false,
      },
    ],
  },

  // 3
  {
    quizKey: "sustainability_easy",
    order: 3,
    text: localized(
      "أي من الخيارات التالية يساعد في تحسين جودة البيئة؟",
      "Which of the following options helps improve environmental quality?",
      "Cili nga opsionet e mëposhtme ndihmon në përmirësimin e cilësisë së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "زراعة الأشجار وتقليل التلوث",
          "Planting trees and reducing pollution",
          "Mbjellja e pemëve dhe reduktimi i ndotjes"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام الوقود الأحفوري",
          "Increasing the use of fossil fuels",
          "Rritja e përdorimit të lëndëve djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات في الأنهار",
          "Disposing of waste in rivers",
          "Hedhja e mbeturinave në lumenj"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل المساحات الخضراء",
          "Reducing green spaces",
          "Reduktimi i hapësirave të gjelbra"
        ),
        isCorrect: false,
      },
    ],
  },

  // 4
  {
    quizKey: "sustainability_easy",
    order: 4,
    text: localized(
      "لماذا يُعتبر الماء النظيف مهمًا للبيئة؟",
      "Why is clean water important for the environment?",
      "Pse uji i pastër është i rëndësishëm për mjedisin?"
    ),
    options: [
      {
        text: localized(
          "لأنه ضروري لصحة الإنسان والحيوان والنبات",
          "It is essential for the health of humans, animals, and plants",
          "Është thelbësor për shëndetin e njerëzve, kafshëve dhe bimëve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يجعل البحار تبدو أجمل",
          "It makes seas look more beautiful",
          "I bën detet të duken më të bukur"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يقلل من درجات الحرارة في الصيف",
          "It lowers summer temperatures",
          "Ul temperaturat e verës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يزيد من كمية الأمطار",
          "It increases rainfall",
          "Rrit reshjet"
        ),
        isCorrect: false,
      },
    ],
  },

  // 5
  {
    quizKey: "sustainability_easy",
    order: 5,
    text: localized(
      "كيف يمكن للأفراد المساهمة في الحفاظ على جودة البيئة؟",
      "How can individuals contribute to maintaining environmental quality?",
      "Si mund të kontribuojnë individët në ruajtjen e cilësisë së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "التقليل من استهلاك البلاستيك وإعادة التدوير",
          "Reducing plastic consumption and recycling",
          "Reduktimi i konsumit të plastikës dhe riciklimi"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من المنتجات الكيميائية",
          "Using more chemical products",
          "Përdorimi i më shumë produkteve kimike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قطع الأشجار لبناء المنازل",
          "Cutting down trees to build houses",
          "Prerja e pemëve për të ndërtuar shtëpi"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات في الأماكن العامة",
          "Dumping waste in public places",
          "Hedhja e mbeturinave në vende publike"
        ),
        isCorrect: false,
      },
    ],
  },

  // 6
  {
    quizKey: "sustainability_easy",
    order: 6,
    text: localized(
      "ما هي الفائدة الرئيسية للحفاظ على التربة نظيفة؟",
      "What is the main benefit of keeping the soil clean?",
      "Cili është përfitimi kryesor i mbajtjes së tokës të pastër?"
    ),
    options: [
      {
        text: localized(
          "تحسين نمو النباتات وزيادة الإنتاج الزراعي",
          "Improving plant growth and increasing agricultural production",
          "Përmirësimi i rritjes së bimëve dhe rritja e prodhimit bujqësor"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة نسبة غاز ثاني أكسيد الكربون في الجو",
          "Increasing carbon dioxide levels in the air",
          "Rritja e niveleve të dioksidit të karbonit në ajër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل نسبة المياه الجوفية",
          "Reducing groundwater levels",
          "Ulja e nivelit të ujërave nëntokësore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة التلوث الهوائي",
          "Increasing air pollution",
          "Rritja e ndotjes së ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 7
  {
    quizKey: "sustainability_easy",
    order: 7,
    text: localized(
      "ما هو المصدر الرئيسي لتلوث الهواء؟",
      "What is the primary source of air pollution?",
      "Cili është burimi kryesor i ndotjes së ajrit?"
    ),
    options: [
      {
        text: localized(
          "انبعاثات المصانع والسيارات",
          "Factory and vehicle emissions",
          "Emetimet e fabrikave dhe automjeteve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "النباتات والأشجار",
          "Plants and trees",
          "Bimët dhe pemët"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مياه البحار والمحيطات",
          "Seas and oceans",
          "Detet dhe oqeanet"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الطاقة الشمسية",
          "Solar energy",
          "Energjia diellore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 8
  {
    quizKey: "sustainability_easy",
    order: 8,
    text: localized(
      "كيف يمكن تقليل استهلاك الماء في المنزل؟",
      "How can water consumption be reduced at home?",
      "Si mund të reduktohet konsumi i ujit në shtëpi?"
    ),
    options: [
      {
        text: localized(
          "إغلاق الحنفية (الصنبور) عند عدم الحاجة إليه",
          "Turning off the tap when not needed",
          "Mbyllja e rubinetit kur nuk nevojitet"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ترك الماء يجري أثناء غسل الأطباق",
          "Leaving water running while washing dishes",
          "Lënia e ujit të rrjedhë gjatë larjes së enëve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام كميات كبيرة من الماء لري النباتات",
          "Using large amounts of water for irrigation",
          "Përdorimi i sasive të mëdha të ujit për ujitje"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ترك صنابير الماء مفتوحة بعد الاستخدام",
          "Keeping taps open after use",
          "Mbajtja e çezmave të hapura pas përdorimit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 9
  {
    quizKey: "sustainability_easy",
    order: 9,
    text: localized(
      "ما هو التأثير السلبي الرئيسي للنفايات البلاستيكية على البيئة؟",
      "What is the main negative impact of plastic waste on the environment?",
      "Cili është ndikimi kryesor negativ i mbetjeve plastike në mjedis?"
    ),
    options: [
      {
        text: localized(
          "تلوث المحيطات وتدمير الحياة البحرية",
          "Pollution of oceans and destruction of marine life",
          "Ndotja e oqeaneve dhe shkatërrimi i jetës detare"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة خصوبة التربة",
          "Increasing soil fertility",
          "Rritja e pjellorisë së tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل نسبة الأكسجين في الجو",
          "Reducing oxygen levels in the air",
          "Reduktimi i niveleve të oksigjenit në ajër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسين جودة المياه",
          "Improving water quality",
          "Përmirësimi i cilësisë së ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 10
  {
    quizKey: "sustainability_easy",
    order: 10,
    text: localized(
      "كيف يمكن للمدارس المساهمة في تحسين جودة البيئة؟",
      "How can schools contribute to improving environmental quality?",
      "Si mund të kontribuojnë shkollat në përmirësimin e cilësisë së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "نشر التوعية البيئية بين الطلاب وتنظيم حملات نظافة",
          "Raising environmental awareness among students and organizing clean-up campaigns",
          "Rritja e ndërgjegjësimit mjedisor te nxënësit dhe organizimi i fushatave të pastrimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استهلاك الورق والبلاستيك",
          "Increasing paper and plastic consumption",
          "Rritja e konsumit të letrës dhe plastikës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات في الحدائق المدرسية",
          "Disposing of waste in school gardens",
          "Hedhja e mbeturinave në kopshtet e shkollave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل عدد الأشجار المزروعة داخل المدرسة",
          "Reducing the number of trees planted on school grounds",
          "Reduktimi i numrit të pemëve të mbjella në mjediset e shkollave"
        ),
        isCorrect: false,
      },
    ],
  },

  // 11
  {
    quizKey: "sustainability_easy",
    order: 11,
    text: localized(
      "أي من هذه الممارسات يساعد في تقليل التلوث الهوائي؟",
      "Which of these practices helps reduce air pollution?",
      "Cila nga këto praktika ndihmon në uljen e ndotjes së ajrit?"
    ),
    options: [
      {
        text: localized(
          "استخدام وسائل النقل العامة بدلاً من السيارات الخاصة",
          "Using public transportation instead of private cars",
          "Përdorimi i transportit publik në vend të makinave private"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تشغيل المصانع لفترات أطول",
          "Running factories for longer hours",
          "Drejtimi i fabrikave për orë më të gjata"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات في الأماكن المفتوحة",
          "Burning waste in open areas",
          "Djegia e mbetjeve në zona të hapura"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استخدام الفحم في المنازل",
          "Increasing coal use in homes",
          "Rritja e përdorimit të qymyrit në shtëpi"
        ),
        isCorrect: false,
      },
    ],
  },

  // 12
  {
    quizKey: "sustainability_easy",
    order: 12,
    text: localized(
      "لماذا يُعتبر التنوع البيولوجي مهمًا للحفاظ على جودة البيئة؟",
      "Why is biodiversity important for maintaining environmental quality?",
      "Pse është i rëndësishëm biodiversiteti për ruajtjen e cilësisë së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "لأنه يساعد في استقرار الأنظمة البيئية",
          "It helps stabilize ecosystems",
          "Ndihmon në stabilizimin e ekosistemeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يزيد من نسبة غاز ثاني أكسيد الكربون",
          "It increases carbon dioxide levels",
          "Rrit nivelin e dioksidit të karbonit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يقلل من كمية المياه المتاحة للشرب",
          "It reduces the amount of available drinking water",
          "Redukton sasinë e ujit të pijshëm në dispozicion"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يؤدي إلى انقراض الحيوانات",
          "It leads to animal extinction",
          "Çon në zhdukjen e kafshëve"
        ),
        isCorrect: false,
      },
    ],
  },

  // 13
  {
    quizKey: "sustainability_easy",
    order: 13,
    text: localized(
      "كيف يمكن تقليل التلوث الناتج عن المصانع؟",
      "How can industrial pollution be reduced?",
      "Si mund të reduktohet ndotja industriale?"
    ),
    options: [
      {
        text: localized(
          "استخدام تقنيات صديقة للبيئة مثل المرشحات لتنقية الدخان",
          "Using eco-friendly technologies like smoke filters",
          "Përdorimi i teknologjive miqësore me mjedisin si filtrat e tymit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة إنتاج المصانع دون ضوابط",
          "Increasing factory production without regulations",
          "Rritja e prodhimit në fabrikë pa rregullore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات الصناعية في الأنهار",
          "Dumping industrial waste in rivers",
          "Hedhja e mbetjeve industriale në lumenj"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تشغيل المصانع بطاقة أعلى لزيادة الإنتاج",
          "Running factories at higher capacity to boost production",
          "Drejtimi i fabrikave me kapacitet më të lartë për të nxitur prodhimin"
        ),
        isCorrect: false,
      },
    ],
  },

  // 14
  {
    quizKey: "sustainability_easy",
    order: 14,
    text: localized(
      "ما هو أحد أسباب تلوث المياه؟",
      "What is one cause of water pollution?",
      "Cili është një nga shkaqet e ndotjes së ujit?"
    ),
    options: [
      {
        text: localized(
          "تسرب المواد الكيميائية من المصانع إلى الأنهار",
          "Chemical spills from factories into rivers",
          "Derdhjet kimike nga fabrikat në lumenj"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زراعة المزيد من الأشجار على ضفاف الأنهار",
          "Planting more trees along riverbanks",
          "Mbjellja e më shumë pemëve përgjatë brigjeve të lumenjve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المياه الجوفية",
          "Using groundwater",
          "Përdorimi i ujërave nëntokësore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "هطول الأمطار بكميات كبيرة",
          "Heavy rainfall",
          "Reshje të dendura shiu"
        ),
        isCorrect: false,
      },
    ],
  },

  // 15
  {
    quizKey: "sustainability_easy",
    order: 15,
    text: localized(
      "كيف يساعد تقليل استخدام الطاقة في تحسين جودة البيئة؟",
      "How does reducing energy use improve environmental quality?",
      "Si e përmirëson cilësinë mjedisore reduktimi i përdorimit të energjisë?"
    ),
    options: [
      {
        text: localized(
          "يقلل من انبعاثات الغازات الدفيئة المسببة للاحتباس الحراري",
          "It decreases greenhouse gas emissions that cause global warming",
          "Zvogëlon emetimet e gazrave serrë që shkaktojnë ngrohjen globale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من استهلاك الوقود الأحفوري",
          "It increases fossil fuel consumption",
          "Rrit konsumin e karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يؤدي إلى زيادة درجات الحرارة العالمية",
          "It raises global temperatures",
          "Rrit temperaturat globale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من جودة الهواء",
          "It reduces air quality",
          "Redukton cilësinë e ajrit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 16
  {
    quizKey: "sustainability_easy",
    order: 16,
    text: localized(
      "ما هو السبب الرئيسي لازدياد كمية النفايات في المدن؟",
      "What is the main reason for the increase in waste in cities?",
      "Cila është arsyeja kryesore e rritjes së mbetjeve në qytete?"
    ),
    options: [
      {
        text: localized(
          "زيادة الاستهلاك ونقص في إعادة التدوير",
          "Increased consumption and lack of recycling",
          "Rritja e konsumit dhe mungesa e riciklimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "انخفاض عدد السكان",
          "Decrease in population",
          "Rënie e popullsisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة المساحات الخضراء",
          "Expansion of green spaces",
          "Zgjerimi i hapësirave të gjelbra"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل استخدام البلاستيك",
          "Reduced plastic use",
          "Reduktimi i përdorimit të plastikës"
        ),
        isCorrect: false,
      },
    ],
  },

  // 17
  {
    quizKey: "sustainability_easy",
    order: 17,
    text: localized(
      "كيف يؤثر الاحتباس الحراري على البيئة؟",
      "How does global warming affect the environment?",
      "Si ndikon ngrohja globale në mjedis?"
    ),
    options: [
      {
        text: localized(
          "يسبب ارتفاع درجات الحرارة ويؤدي إلى تغيرات مناخية",
          "It raises temperatures and leads to climate changes",
          "Rrit temperaturat dhe çon në ndryshime klimatike"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يحسن جودة الهواء ويقلل التلوث",
          "It improves air quality and reduces pollution",
          "Përmirëson cilësinë e ajrit dhe redukton ndotjen"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من مستوى سطح البحر",
          "It lowers sea levels",
          "Ul nivelin e detit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يساعد على زيادة نسبة الأوكسجين في الجو",
          "It increases oxygen levels in the air",
          "Rrit nivelin e oksigjenit në ajër"
        ),
        isCorrect: false,
      },
    ],
  },

  // 18
  {
    quizKey: "sustainability_easy",
    order: 18,
    text: localized(
      "لماذا يعتبر تدوير النفايات مهمًا للبيئة؟",
      "Why is waste recycling important for the environment?",
      "Pse është i rëndësishëm riciklimi i mbetjeve për mjedisin?"
    ),
    options: [
      {
        text: localized(
          "لأنه يقلل من كمية النفايات ويساهم في تقليل التلوث",
          "It reduces waste volume and helps minimize pollution",
          "Redukton volumin e mbetjeve dhe ndihmon në minimizimin e ndotjes"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يزيد من استهلاك الموارد الطبيعية",
          "It increases the consumption of natural resources",
          "Rrit konsumin e burimeve natyrore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يؤدي إلى تراكم المخلفات في المدن",
          "It leads to waste accumulation in cities",
          "Çon në grumbullimin e mbetjeve në qytete"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يقلل من جودة المياه",
          "It lowers water quality",
          "Ul cilësinë e ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 19
  {
    quizKey: "sustainability_easy",
    order: 19,
    text: localized(
      "كيف يمكن للأفراد دعم الاستدامة البيئية؟",
      "How can individuals support environmental sustainability?",
      "Si mund të mbështesin individët qëndrueshmërinë mjedisore?"
    ),
    options: [
      {
        text: localized(
          "استخدام المنتجات القابلة لإعادة التدوير والتقليل من النفايات",
          "Using recyclable products and reducing waste",
          "Përdorimi i produkteve të riciklueshme dhe reduktimi i mbetjeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استهلاك المنتجات البلاستيكية",
          "Increasing plastic product consumption",
          "Rritja e konsumit të produkteve plastike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل أهمية إعادة التدوير",
          "Ignoring the importance of recycling",
          "Injorimi i rëndësisë së riciklimit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قطع الأشجار لاستخدامها في الوقود",
          "Cutting down trees for fuel use",
          "Prerja e pemëve për përdorim karburanti"
        ),
        isCorrect: false,
      },
    ],
  },

  // 20
  {
    quizKey: "sustainability_easy",
    order: 20,
    text: localized(
      "ما هو دور المنظمات البيئية في تحسين جودة البيئة؟",
      "What is the role of environmental organizations in improving environmental quality?",
      "Cili është roli i organizatave mjedisore në përmirësimin të cilësisë së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "تنظيم حملات توعية وحماية الموارد الطبيعية",
          "Organizing awareness campaigns and protecting natural resources",
          "Organizimi i fushatave sensibilizuese dhe mbrojtja e burimeve natyrore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تشجيع الصناعات على استخدام الوقود الأحفوري",
          "Encouraging industries to use fossil fuels",
          "Inkurajimi i industrive për të përdorur lëndë djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل قضايا التلوث والتنوع البيولوجي",
          "Ignoring pollution and biodiversity issues",
          "Injorimi i çështjeve të ndotjes dhe biodiversitetit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل المساحات المحمية للمحافظة على البيئة",
          "Reducing protected areas for environmental conservation",
          "Reduktimi i zonave të mbrojtura për ruajtjen e mjedisit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 21
  {
    quizKey: "sustainability_easy",
    order: 21,
    text: localized(
      "لماذا يُعتبر الحفاظ على الغابات أمرًا مهمًا؟",
      "Why is forests conservation important?",
      "Pse është i rëndësishëm ruajtja e pyjeve?"
    ),
    options: [
      {
        text: localized(
          "لأنها تساعد في تقليل تلوث الهواء",
          "Because they help reduce air pollution",
          "Sepse ndihmojnë në uljen e ndotjes së ajrit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها توفر الظل للناس",
          "Because they provide shade for people",
          "Sepse ofrojnë hije për njerëzit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تشغل مساحة كبيرة من الأرض",
          "Because they take up a lot of free space",
          "Sepse zënë shumë hapësirë të lirë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها جميلة للنظر إليها",
          "Because they are beautiful to look at",
          "Sepse janë të bukura për t’u parë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 22
  {
    quizKey: "sustainability_easy",
    order: 22,
    text: localized(
      "ما هي الفائدة الرئيسية من استخدام الأكياس القابلة لإعادة الاستخدام؟",
      "What is the main benefit of using reusable bags?",
      "Cili është përfitimi kryesor i përdorimit të çantave të ripërdorshme?"
    ),
    options: [
      {
        text: localized(
          "تساعد في تقليل التلوث البلاستيكي",
          "They help reduce plastic pollution",
          "Ato ndihmojnë në zvogëlimin e ndotjes plastike"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "هي أرخص من الأكياس البلاستيكية",
          "They are cheaper than plastic bags",
          "Ato janë më të lira se qeset plastike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يمكن استخدامها مرة واحدة فقط",
          "They can only be used once",
          "Ato mund të përdoren vetëm një herë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تستهلك طاقة أكثر في إنتاجها",
          "They consume more energy to produce",
          "Ato konsumojnë më shumë energji për prodhim"
        ),
        isCorrect: false,
      },
    ],
  },

  // 23
  {
    quizKey: "sustainability_easy",
    order: 23,
    text: localized(
      "ما هي عادة جيدة لحماية مصادر المياه؟",
      "What is a good means to protect water resources?",
      "Cili është një zakon i mirë për të mbrojtur burimet ujore?"
    ),
    options: [
      {
        text: localized(
          "توفير المياه",
          "Saving water",
          "Kursimi i ujit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "إلقاء المنظفات في النهر",
          "Throwing detergents into the river",
          "Hedhja e detergjenteve në lumë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إلقاء النفايات في المياه",
          "Throwing waste into the water",
          "Hedhja e mbeturinave në ujë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ترك الحنفية مفتوحة دون حاجة",
          "Leaving the tap running unnecessarily",
          "Lënia e rubinetit hapur pa nevojë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 24
  {
    quizKey: "sustainability_easy",
    order: 24,
    text: localized(
      "أي من هذه الأفعال أكثر صداقة للبيئة؟",
      "Which of these actions is more environmentally friendly?",
      "Cila nga këto veprime është më miqësore ndaj mjedisit?"
    ),
    options: [
      {
        text: localized(
          "استخدام الدراجة بدلاً من السيارة",
          "Using a bicycle instead of a car",
          "Përdorimi i biçikletës në vend të makinës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام البلاستيك أحادي الاستخدام",
          "Using single-use plastic",
          "Përdorimi i plastikës njëpërdorimshe"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات في الطبيعة",
          "Burning waste in nature",
          "Djegia e mbeturinave në natyrë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قطع الأشجار",
          "Cutting down trees",
          "Prerja e pemëve"
        ),
        isCorrect: false,
      },
    ],
  },
{
    quizKey: "sustainability_medium",
    order: 1,
    text: localized(
      "كيف يمكن تقييم تأثير مشروع زراعة الأشجار على جودة الهواء؟",
      "How can the impact of a tree-planting project on air quality be assessed?",
      "Si mund të vlerësohet ndikimi i një projekti të mbjelljes së pemëve në cilësinë e ajrit?"
    ),
    options: [
      {
        text: localized(
          "مقارنة نسبة التلوث قبل وبعد تنفيذ المشروع",
          "Comparing pollution levels before and after the project",
          "Krahasimi i niveleve të ndotjes para dhe pas projektit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد الأشجار المزروعة فقط",
          "Measuring only the number of trees planted",
          "Matja e vetëm numrit të pemëve të mbjella"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحليل نوعية التربة فقط",
          "Analyzing only soil quality",
          "Duke analizuar vetëm cilësinë e tokës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة معدلات المطر في المنطقة",
          "Comparing rainfall rates in the area",
          "Krahasimi i niveleve të reshjeve në zonë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 2
  {
    quizKey: "sustainability_medium",
    order: 2,
    text: localized(
      "ما هو الحل الأمثل للحد من النفايات البلاستيكية في المدن؟",
      "What is the best solution to reduce plastic waste in cities?",
      "Cila është zgjidhja më e mirë për të reduktuar mbetjet plastike në qytete?"
    ),
    options: [
      {
        text: localized(
          "تعزيز سياسات إعادة التدوير وتقليل استخدام البلاستيك",
          "Promoting recycling policies and reducing plastic use",
          "Promovimi i politikave të riciklimit dhe reduktimi i përdorimit të plastikës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة إنتاج البلاستيك القابل للتحلل فقط",
          "Increasing production of biodegradable plastic only",
          "Rritja e prodhimit vetëm të plastikës së biodegradueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "جمع النفايات البلاستيكية دون إعادة تدويرها",
          "Collecting plastic waste without recycling it",
          "Mbledhja e mbetjeve plastike pa i ricikluar"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حظر جميع المنتجات البلاستيكية دون إيجاد بدائل",
          "Banning all plastic products without alternatives",
          "Ndalimi i të gjitha produkteve plastike pa alternativa"
        ),
        isCorrect: false,
      },
    ],
  },

  // 3
  {
    quizKey: "sustainability_medium",
    order: 3,
    text: localized(
      "كيف يمكن تحسين استهلاك المياه في الزراعة؟",
      "How can water consumption in agriculture be improved?",
      "Si mund të përmirësohet konsumi i ujit në bujqësi?"
    ),
    options: [
      {
        text: localized(
          "استخدام تقنيات الري بالتنقيط لتقليل الفاقد",
          "Using drip irrigation technology to reduce waste",
          "Përdorimi i teknologjisë së ujitjes me pika për të reduktuar mbetjet"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "الاعتماد فقط على المياه الجوفية",
          "Relying only on groundwater",
          "Mbështetur vetëm në ujërat nëntokësore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استخدام المبيدات الكيميائية",
          "Increasing the use of chemical pesticides",
          "Rritja e përdorimit të pesticideve kimike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل المساحات المزروعة لتوفير المياه",
          "Reducing cultivated areas to save water",
          "Reduktimi i sipërfaqeve të kultivuara për të kursyer ujin"
        ),
        isCorrect: false,
      },
    ],
  },

  // 4
  {
    quizKey: "sustainability_medium",
    order: 4,
    text: localized(
      "أي من هذه الإجراءات يمكن أن يقلل من تلوث الهواء في المدن الكبرى؟",
      "Which of these measures can reduce air pollution in major cities?",
      "Cila nga këto masa mund të zvogëlojë ndotjen e ajrit në qytetet kryesore?"
    ),
    options: [
      {
        text: localized(
          "تعزيز وسائل النقل المستدامة مثل الحافلات الكهربائية",
          "Promoting sustainable transport such as electric buses",
          "Promovimi i transportit të qëndrueshëm siç janë autobusët elektrikë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "بناء مزيد من المصانع داخل المدن",
          "Building more factories within cities",
          "Ndërtimi i më shumë fabrikave brenda qyteteve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة عدد السيارات الشخصية",
          "Increasing the number of private cars",
          "Rritja e numrit të makinave private"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل عدد المساحات الخضراء",
          "Reducing green spaces",
          "Reduktimi i hapësirave të gjelbra"
        ),
        isCorrect: false,
      },
    ],
  },

  // 5
  {
    quizKey: "sustainability_medium",
    order: 5,
    text: localized(
      "كيف يمكن تعزيز الاستدامة في استهلاك الموارد الطبيعية؟",
      "How can sustainability in natural resource consumption be enhanced?",
      "Si mund të rritet qëndrueshmëria në konsumin e burimeve natyrore?"
    ),
    options: [
      {
        text: localized(
          "دعم الطاقة المتجددة وتقليل الاعتماد على الوقود الأحفوري",
          "Supporting renewable energy and reducing reliance on fossil fuels",
          "Mbështetja e energjisë së rinovueshme dhe reduktimi i varësisë nga lëndët djegëse fosile"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخراج المعادن دون قيود",
          "Increasing unrestricted mineral extraction",
          "Rritja e nxjerrjes së pakufizuar të mineraleve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الاستثمار في المشاريع البيئية",
          "Reducing investment in environmental projects",
          "Reduktimi i investimeve në projekte mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد الكامل على المصادر غير المتجددة",
          "Fully depending on non-renewable sources",
          "Në varësi të plotë të burimeve jo të rinovueshme"
        ),
        isCorrect: false,
      },
    ],
  },

  // 6
  {
    quizKey: "sustainability_medium",
    order: 6,
    text: localized(
      "ما هو التأثير المتوقع لإعادة التشجير على المناخ المحلي؟",
      "What is the expected impact of reforestation on local climate?",
      "Cili është ndikimi i pritshëm i ripyllëzimit në klimën lokale?"
    ),
    options: [
      {
        text: localized(
          "تحسين جودة الهواء وتقليل درجات الحرارة",
          "Improving air quality and reducing temperatures",
          "Përmirësimi i cilësisë së ajrit dhe reduktimi i temperaturave"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة انبعاثات الغازات الدفيئة",
          "Increasing greenhouse gas emissions",
          "Rritja e emetimeve të gazeve serrë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل نسبة الأكسجين في الجو",
          "Reducing oxygen levels in the atmosphere",
          "Reduktimi i niveleve të oksigjenit në atmosferë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ارتفاع مستوى التلوث في المياه الجوفية",
          "Raising groundwater pollution levels",
          "Rritja e nivelit të ndotjes së ujërave nëntokësore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 7
  {
    quizKey: "sustainability_medium",
    order: 7,
    text: localized(
      "كيف يمكن للشركات المساهمة في تقليل التلوث الصناعي؟",
      "How can companies help reduce industrial pollution?",
      "Si mund të ndihmojnë kompanitë në uljen e ndotjes industriale?"
    ),
    options: [
      {
        text: localized(
          "الاستثمار في تقنيات الإنتاج الصديقة للبيئة",
          "Investing in eco-friendly production technologies",
          "Investimi në teknologjitë e prodhimit miqësor ndaj mjedisit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة ساعات العمل في المصانع",
          "Increasing factory working hours",
          "Rritja e orarit të punës në fabrikë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الإنفاق على معايير السلامة البيئية",
          "Reducing spending on environmental safety standards",
          "Reduktimi i shpenzimeve për standardet e sigurisë mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد على الوقود الأحفوري بشكل أكبر",
          "Increasing reliance on fossil fuels",
          "Rritja e varësisë nga lëndët djegëse fosile"
        ),
        isCorrect: false,
      },
    ],
  },

  // 8
  {
    quizKey: "sustainability_medium",
    order: 8,
    text: localized(
      "كيف يمكن للأفراد المساعدة في تحسين إدارة النفايات؟",
      "How can individuals help improve waste management?",
      "Si mund të ndihmojnë individët në përmirësimin e menaxhimit të mbetjeve?"
    ),
    options: [
      {
        text: localized(
          "فرز النفايات المنزلية وإعادة التدوير",
          "Sorting household waste and recycling",
          "Renditja e mbetjeve shtëpiake dhe riciklimi"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "التخلص من النفايات في الأماكن العامة",
          "Dumping waste in public places",
          "Hedhja e mbeturinave në vende publike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حرق النفايات دون رقابة",
          "Burning waste without regulation",
          "Djegia e mbetjeve pa rregullore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام المزيد من المنتجات البلاستيكية",
          "Using more plastic products",
          "Përdorimi i më shumë produkteve plastike"
        ),
        isCorrect: false,
      },
    ],
  },

  // 9
  {
    quizKey: "sustainability_medium",
    order: 9,
    text: localized(
      "كيف يمكن تقليل استهلاك الطاقة في المنازل بطريقة مستدامة؟",
      "How can household energy consumption be sustainably reduced?",
      "Si mund të reduktohet në mënyrë të qëndrueshme konsumi i energjisë në familje?"
    ),
    options: [
      {
        text: localized(
          "استخدام المصابيح الموفرة للطاقة والأجهزة الكهربائية عالية الكفاءة",
          "Using energy-efficient bulbs and high-efficiency appliances",
          "Përdorimi i llambave me efikasitet të energjisë dhe pajisjeve me efikasitet të lartë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام الأجهزة الكهربائية القديمة",
          "Increasing the use of old electrical appliances",
          "Rritja e përdorimit të aparateve të vjetra elektrike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ترك الأنوار مضاءة طوال الوقت",
          "Keeping lights on at all times",
          "Mbajtja e dritave të ndezura gjatë gjithë kohës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تشغيل المكيفات في جميع الأوقات",
          "Running air conditioners continuously",
          "Përdorimi i vazhdueshëm i kondicionerëve"
        ),
        isCorrect: false,
      },
    ],
  },

  // 10
  {
    quizKey: "sustainability_medium",
    order: 10,
    text: localized(
      "ما هو دور المدارس في تحسين الوعي البيئي؟",
      "What is the role of schools in improving environmental awareness?",
      "Cili është roli i shkollave në përmirësimin e ndërgjegjësimit mjedisor?"
    ),
    options: [
      {
        text: localized(
          "دمج مناهج التوعية البيئية في التعليم",
          "Integrating environmental awareness into education",
          "Integrimi i ndërgjegjësimit mjedisor në arsim"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل حملات التوعية البيئية",
          "Reducing environmental awareness campaigns",
          "Reduktimi i fushatave të ndërgjegjësimit mjedisor"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استهلاك الورق في المدارس",
          "Increasing paper consumption in schools",
          "Rritja e konsumit të letrës në shkolla"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إزالة الأشجار من ساحات المدارس",
          "Removing trees from school yards",
          "Heqja e pemëve nga oborret e shkollave"
        ),
        isCorrect: false,
      },
    ],
  },

  // 11
  {
    quizKey: "sustainability_medium",
    order: 11,
    text: localized(
      "كيف يمكن للمجتمعات المحلية تقليل التلوث المائي؟",
      "How can local communities reduce water pollution?",
      "Si mund të reduktojnë komunitetet lokale ndotjen e ujit?"
    ),
    options: [
      {
        text: localized(
          "تقليل استخدام المواد الكيميائية الضارة وإدارة النفايات بطرق آمنة",
          "Reducing harmful chemical use and managing waste safely",
          "Reduktimi i përdorimit të kimikateve të dëmshme dhe administrimi i sigurt i mbetjeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تصريف المياه الملوثة في الأنهار",
          "Discharging polluted water into rivers",
          "Derdhja e ujit të ndotur në lumenj"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الاستهلاك العشوائي للمياه",
          "Increasing uncontrolled water consumption",
          "Rritja e konsumit të pakontrolluar të ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل معالجة مياه الصرف الصحي",
          "Ignoring wastewater treatment",
          "Injorimi i trajtimit të ujërave të zeza"
        ),
        isCorrect: false,
      },
    ],
  },

  // 12
  {
    quizKey: "sustainability_medium",
    order: 12,
    text: localized(
      "لماذا يُعتبر الاقتصاد الدائري نموذجًا فعالًا لحماية البيئة؟",
      "Why is a circular economy an effective model for environmental protection?",
      "Pse një ekonomi rrethore është një model efektiv për mbrojtjen e mjedisit?"
    ),
    options: [
      {
        text: localized(
          "لأنه يقلل من النفايات ويعزز إعادة التدوير والاستخدام المتكرر",
          "It reduces waste and promotes recycling and reuse",
          "Redukton mbetjet dhe nxit riciklimin dhe ripërdorimin"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يزيد من استخدام المواد الخام",
          "It increases raw material consumption",
          "Rrit konsumin e lëndës së parë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يعتمد على التخلص من النفايات دون إعادة تدويرها",
          "It relies on waste disposal without recycling",
          "Ai mbështetet në asgjësimin e mbeturinave pa riciklim"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يشجع على استهلاك غير محدود للموارد",
          "It encourages unlimited resource consumption",
          "Inkurajon konsumin e pakufizuar të burimeve"
        ),
        isCorrect: false,
      },
    ],
  },

  // 13
  {
    quizKey: "sustainability_medium",
    order: 13,
    text: localized(
      "كيف يمكن تحسين جودة الهواء داخل المنازل؟",
      "How can indoor air quality be improved?",
      "Si mund të përmirësohet cilësia e ajrit të brendshëm?"
    ),
    options: [
      {
        text: localized(
          "زراعة النباتات الداخلية وتحسين التهوية",
          "Growing indoor plants and improving ventilation",
          "Rritja e bimëve të brendshme dhe përmirësimi i ajrosjes"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "استخدام المزيد من المعطرات الكيميائية",
          "Using more chemical air fresheners",
          "Përdorimi i më shumë freskuesve kimikë të ajrit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إغلاق النوافذ طوال الوقت",
          "Keeping windows closed all the time",
          "Mbajtja e dritareve të mbyllura gjatë gjithë kohës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل تنظيف المنزل",
          "Reducing household cleaning",
          "Reduktimi i pastrimit të shtëpisë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 14
  {
    quizKey: "sustainability_medium",
    order: 14,
    text: localized(
      "كيف يمكن تقليل أثر التغير المناخي على المدن الساحلية؟",
      "How can the impact of climate change on coastal cities be reduced?",
      "Si mund të reduktohet ndikimi i ndryshimeve klimatike në qytetet bregdetare?"
    ),
    options: [
      {
        text: localized(
          "بناء حواجز ضد الفيضانات وتطوير بنى تحتية مقاومة للكوارث",
          "Building flood barriers and developing disaster-resistant infrastructure",
          "Ndërtimi i barrierave nga përmbytjet dhe zhvillimi i infrastrukturës rezistente ndaj fatkeqësive"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة البناء العشوائي بالقرب من الشواطئ",
          "Increasing unplanned construction near beaches",
          "Rritja e ndërtimeve pa plan pranë plazheve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل ارتفاع مستوى سطح البحر",
          "Ignoring rising sea levels",
          "Injorimi i rritjes së nivelit të detit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "إزالة النباتات الساحلية الطبيعية",
          "Removing natural coastal vegetation",
          "Heqja e bimësisë natyrore bregdetare"
        ),
        isCorrect: false,
      },
    ],
  },

  // 15
  {
    quizKey: "sustainability_medium",
    order: 15,
    text: localized(
      "كيف يمكن للمستهلكين دعم المنتجات الصديقة للبيئة؟",
      "How can consumers support environmentally friendly products?",
      "Si mund të mbështesin konsumatorët produktet miqësore me mjedisin?"
    ),
    options: [
      {
        text: localized(
          "اختيار المنتجات المستدامة ذات التغليف القابل للتحلل",
          "Choosing sustainable products with biodegradable packaging",
          "Zgjedhja e produkteve të qëndrueshme me paketim të biodegradueshëm"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "شراء المنتجات التي تعتمد على البلاستيك",
          "Buying plastic-based products",
          "Blerja e produkteve me bazë plastike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دعم الشركات غير الملتزمة بالمعايير البيئية",
          "Supporting companies that do not comply with environmental standards",
          "Mbështetja e kompanive që nuk respektojnë standardet mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجنب شراء المنتجات القابلة لإعادة التدوير",
          "Avoiding recyclable products",
          "Shmangia e produkteve të riciklueshme"
        ),
        isCorrect: false,
      },
    ],
  },

  // 16
  {
    quizKey: "sustainability_medium",
    order: 16,
    text: localized(
      "ما هو الحل الأمثل للتقليل من تلوث البحار والمحيطات؟",
      "What is the best solution to reduce ocean and sea pollution?",
      "Cila është zgjidhja më e mirë për të reduktuar ndotjen e oqeaneve dhe deteve?"
    ),
    options: [
      {
        text: localized(
          "تقليل استخدام البلاستيك وتحسين إدارة النفايات",
          "Reducing plastic use and improving waste management",
          "Reduktimi i përdorimit të plastikës dhe përmirësimi i menaxhimit të mbetjeve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام المواد الكيميائية في المصانع",
          "Increasing chemical use in factories",
          "Rritja e përdorimit të kimikateve në fabrika"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات مباشرة في البحر",
          "Dumping waste directly into the sea",
          "Hedhja e mbetjeve direkt në det"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل حملات تنظيف الشواطئ",
          "Reducing beach cleaning campaigns",
          "Reduktimi i fushatave të pastrimit të plazheve"
        ),
        isCorrect: false,
      },
    ],
  },

  // 17
  {
    quizKey: "sustainability_medium",
    order: 17,
    text: localized(
      "كيف يمكن تقييم كفاءة مشاريع الحفاظ على البيئة؟",
      "How can the efficiency of environmental conservation projects be assessed?",
      "Si mund të vlerësohet efikasiteti i projekteve të ruajtjes së mjedisit?"
    ),
    options: [
      {
        text: localized(
          "تحليل البيانات حول تأثير المشروع على جودة الهواء والمياه والتربة",
          "Analyzing data on project impact on air, water, and soil quality",
          "Analizimi i të dhënave mbi ndikimin e projektit në cilësinë e ajrit, ujit dhe tokës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد المشاركين في المشروع فقط",
          "Measuring only the number of participants in the project",
          "Matja e vetëm numrit të pjesëmarrësve në projekt"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "متابعة وسائل الإعلام فقط دون قياس النتائج العلمية",
          "Relying solely on media reports without scientific evaluation",
          "Mbështetja vetëm në raportet e mediave pa vlerësim shkencor"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقييم عدد الأشجار المزروعة دون قياس أثرها",
          "Counting the number of trees planted without assessing their impact",
          "Numërimi i numrit të pemëve të mbjella pa vlerësuar ndikimin e tyre"
        ),
        isCorrect: false,
      },
    ],
  },

  // 18
  {
    quizKey: "sustainability_medium",
    order: 18,
    text: localized(
      "كيف يؤثر استخدام الطاقات المتجددة على جودة البيئة؟",
      "How does the use of renewable energy affect environmental quality?",
      "Si ndikon përdorimi i energjisë së rinovueshme në cilësinë e mjedisit?"
    ),
    options: [
      {
        text: localized(
          "يقلل من انبعاثات الغازات الدفيئة ويحسن جودة الهواء",
          "It reduces greenhouse gas emissions and improves air quality",
          "Redukton emetimet e gazrave serrë dhe përmirëson cilësinë e ajrit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من استهلاك الوقود الأحفوري",
          "It increases fossil fuel consumption",
          "Rrit konsumin e karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يسبب تلوثًا إضافيًا للمياه",
          "It causes additional water pollution",
          "Shkakton ndotje shtesë të ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من كفاءة مصادر الطاقة",
          "It reduces energy source efficiency",
          "Redukton efikasitetin e burimit të energjisë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 19
  {
    quizKey: "sustainability_medium",
    order: 19,
    text: localized(
      "كيف يمكن تعزيز المسؤولية البيئية في الشركات؟",
      "How can corporate environmental responsibility be enhanced?",
      "Si mund të rritet përgjegjësia mjedisore e korporatës?"
    ),
    options: [
      {
        text: localized(
          "وضع معايير إلزامية لتقليل الانبعاثات والتلوث",
          "Implementing mandatory standards to reduce emissions and pollution",
          "Zbatimi i standardeve të detyrueshme për të reduktuar emetimet dhe ndotjen"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة استخدام الوقود الأحفوري",
          "Increasing fossil fuel use",
          "Rritja e përdorimit të lëndëve djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل أهمية الاستدامة البيئية",
          "Ignoring environmental sustainability importance",
          "Injorimi i rëndësisë së qëndrueshmërisë mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الاستثمار في الحلول البيئية",
          "Reducing investment in environmental solutions",
          "Reduktimi i investimeve në zgjidhjet mjedisore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 20
  {
    quizKey: "sustainability_medium",
    order: 20,
    text: localized(
      "كيف يمكن تقليل استخدام الموارد الطبيعية بشكل مستدام؟",
      "How can the sustainable use of natural resources be promoted?",
      "Si mund të promovohet përdorimi i qëndrueshëm i burimeve natyrore?"
    ),
    options: [
      {
        text: localized(
          "تبني ممارسات الاقتصاد الدائري وتعزيز إعادة التدوير",
          "Adopting circular economy practices and enhancing recycling",
          "Miratimi i praktikave të ekonomisë rrethore dhe përmirësimi i riciklimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الاعتماد على الوقود الأحفوري",
          "Increasing dependence on fossil fuels",
          "Rritja e varësisë nga lëndët djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل أهمية الترشيد في استهلاك الموارد",
          "Ignoring the importance of resource conservation",
          "Injorimi i rëndësisë së ruajtjes së burimeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الاستثمار في التكنولوجيا البيئية",
          "Reducing investment in environmental technology",
          "Reduktimi i investimeve në teknologjinë mjedisore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 21
  {
    quizKey: "sustainability_medium",
    order: 21,
    text: localized(
      "لماذا من المهم حماية المحيطات؟",
      "Why is it important to protect the oceans?",
      "Pse është e rëndësishme mbrojtja e oqeaneve?"
    ),
    options: [
      {
        text: localized(
          "تنتج المحيطات الأكسجين اللازم للحياة على الأرض",
          "Oceans produce oxygen for life on Earth",
          "Oqeanet prodhojnë oksigjen për jetën në Tokë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "المحيطات لا تنفد ولا تحتاج إلى حماية",
          "Oceans are inexhaustible and do not need protection",
          "Oqeanet janë të pashtershme dhe nuk kanë nevojë për mbrojtje"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا يمكن أن تتلوث المحيطات بسبب الأنشطة البشرية",
          "Oceans cannot be polluted by human activities",
          "Oqeanet nuk mund të ndoten nga aktivitetet njerëzore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس للمحيطات أي تأثير على تغير المناخ",
          "Oceans have no impact on climate change",
          "Oqeanet nuk kanë ndikim në ndryshimet klimatike"
        ),
        isCorrect: false,
      },
    ],
  },

  // 22
  {
    quizKey: "sustainability_medium",
    order: 22,
    text: localized(
      "لماذا من المهم استخدام الطاقة المتجددة؟",
      "Why is it important to use renewable energy?",
      "Pse është e rëndësishme përdorimi i energjisë së ripërtritshme?"
    ),
    options: [
      {
        text: localized(
          "تقلل من التلوث وتحافظ على الموارد الطبيعية",
          "It reduces pollution and conserves natural resources",
          "Redukton ndotjen dhe ruan burimet natyrore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تجعل الهواء أثقل",
          "It makes the air heavier",
          "E bën ajrin më të rëndë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "هي أمر لا مفر منه",
          "It is inevitable",
          "Është e pashmangshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس لها أي تأثير على البيئة",
          "It has no impact on the environment",
          "Nuk ka ndikim në mjedis"
        ),
        isCorrect: false,
      },
    ],
  },

  // 23
  {
    quizKey: "sustainability_medium",
    order: 23,
    text: localized(
      "كيف يمكن أن يؤثر تلوث التربة على صحة الإنسان؟",
      "How can soil pollution affect human health?",
      "Si mund të ndikojë ndotja e tokës në shëndetin e njeriut?"
    ),
    options: [
      {
        text: localized(
          "يمكن أن يسبب أمراضًا من خلال الغذاء",
          "It could cause disease through food",
          "Mund të shkaktojë sëmundje përmes ushqimit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يحسّن جودة المياه",
          "It improves water quality",
          "Përmirëson cilësinë e ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس له أي تأثير",
          "It has no impact",
          "Nuk ka asnjë ndikim"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يساعد النباتات على النمو بسرعة أكبر",
          "It helps plants grow faster",
          "Ndihmon në rritjen e bimëve më shpejt"
        ),
        isCorrect: false,
      },
    ],
  },



  // 24
  {
    quizKey: "sustainability_medium",
    order: 24,
    text: localized(
      "لماذا يُعتبر التسميد العضوي مهمًا؟",
      "Why is composting important?",
      "Pse është i rëndësishëm kompostimi?"
    ),
    options: [
      {
        text: localized(
          "لأنه يقلل من النفايات العضوية ويحسن جودة التربة",
          "Because it reduces organic waste and improves soil quality",
          "Sepse redukton mbeturinat organike dhe përmirëson cilësinë e tokës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يلوث الهواء",
          "Because it pollutes the air",
          "Sepse ndot ajrin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه ليس له أي تأثير على البيئة",
          "Because it has no impact on the environment",
          "Sepse nuk ka ndikim në mjedis"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يساعد البلاستيك على التحلل بسرعة أكبر",
          "Because it helps plastic decompose faster",
          "Sepse ndihmon plastikën të dekompozohet më shpejt"
        ),
        isCorrect: false,
      },
    ],
  },

   {
    quizKey: "sustainability_hard",
    order: 1,
    text: localized(
      "كيف يمكن تقييم نجاح السياسات البيئية في المدن الصناعية؟",
      "How can the success of environmental policies in industrial cities be evaluated?",
      "Si mund të vlerësohet suksesi i politikave mjedisore në qytetet industriale?"
    ),
    options: [
      {
        text: localized(
          "تحليل معدلات التلوث قبل وبعد تطبيق القوانين البيئية",
          "Analyzing pollution rates before and after implementing environmental laws",
          "Analizimi i niveleve të ndotjes para dhe pas zbatimit të ligjeve mjedisore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد المصانع دون النظر إلى انبعاثاتها",
          "Measuring the number of factories without considering their emissions",
          "Matja e numrit të fabrikave pa marrë parasysh emetimet e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "متابعة تصريحات المسؤولين فقط",
          "Following official statements only",
          "Vetëm pas deklaratave zyrtare"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة عدد الأشجار المزروعة دون النظر إلى تأثيرها",
          "Comparing the number of trees planted without assessing their impact",
          "Krahasimi i numrit të pemëve të mbjella pa vlerësuar ndikimin e tyre"
        ),
        isCorrect: false,
      },
    ],
  },

  // 2
  {
    quizKey: "sustainability_hard",
    order: 2,
    text: localized(
      "لماذا تُعد الطاقة المتجددة خيارًا استراتيجيًا لمستقبل مستدام؟",
      "Why is renewable energy a strategic choice for a sustainable future?",
      "Pse energjia e rinovueshme është një zgjedhje strategjike për një të ardhme të qëndrueshme?"
    ),
    options: [
      {
        text: localized(
          "لأنها تقلل من انبعاثات الغازات الدفيئة وتعزز الاستدامة البيئية",
          "It reduces greenhouse gas emissions and promotes environmental sustainability",
          "Redukton emetimet e gazrave serrë dhe promovon qëndrueshmërinë mjedisore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تتطلب استثمارات مالية أكبر من الوقود الأحفوري",
          "It requires higher financial investments than fossil fuels",
          "Kërkon investime më të larta financiare sesa lëndët djegëse fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تزيد من تلوث المياه",
          "It increases water pollution",
          "Rrit ndotjen e ujit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تقلل من توفر الموارد الطبيعية",
          "It reduces the availability of natural resources",
          "Redukton disponueshmërinë e burimeve natyrore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 3
  {
    quizKey: "sustainability_hard",
    order: 3,
    text: localized(
      "كيف يمكن تقييم تأثير إزالة الغابات على التنوع البيولوجي؟",
      "How can the impact of deforestation on biodiversity be evaluated?",
      "Si mund të vlerësohet ndikimi i shpyllëzimit në biodiversitet?"
    ),
    options: [
      {
        text: localized(
          "دراسة انخفاض أعداد الأنواع الحيوانية والنباتية في المناطق المتضررة",
          "Studying the decline in animal and plant species in affected areas",
          "Studimi i rënies së llojeve të kafshëve dhe bimëve në zonat e prekura"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "مقارنة معدلات الأمطار فقط",
          "Comparing only rainfall rates",
          "Krahasimi i vetëm normave të reshjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب كمية الخشب المنتج سنويًا",
          "Measuring the amount of wood produced annually",
          "Matja e sasisë së drurit të prodhuar çdo vit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس درجة حرارة التربة فقط",
          "Recording only soil temperature changes",
          "Regjistrimi i vetëm ndryshimeve të temperaturës së tokës"
        ),
        isCorrect: false,
      },
    ],
  },

  // 4
  {
    quizKey: "sustainability_hard",
    order: 4,
    text: localized(
      "ما هو التحدي الأكبر الذي يواجه مبادرات الاقتصاد الدائري؟",
      "What is the biggest challenge facing circular economy initiatives?",
      "Cila është sfida më e madhe me të cilën përballen nismat e ekonomisë rrethore?"
    ),
    options: [
      {
        text: localized(
          "الحاجة إلى تغيير نماذج الإنتاج والاستهلاك التقليدية",
          "The need to change traditional production and consumption models",
          "Nevoja për të ndryshuar modelet tradicionale të prodhimit dhe konsumit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة التكلفة التشغيلية فقط",
          "Higher operational costs only",
          "Vetëm kosto më të larta operacionale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قلة الوعي البيئي لدى السكان",
          "Lack of environmental awareness among citizens",
          "Mungesa e ndërgjegjësimit mjedisor tek qytetarët"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل الاعتماد على المواد الخام",
          "Reducing dependence on raw materials",
          "Ulja e varësisë nga lëndët e para"
        ),
        isCorrect: false,
      },
    ],
  },

  // 5
  {
    quizKey: "sustainability_hard",
    order: 5,
    text: localized(
      "كيف يمكن تحسين استراتيجيات التكيف مع التغير المناخي؟",
      "How can climate adaptation strategies be improved?",
      "Si mund të përmirësohen strategjitë e përshtatjes klimatike?"
    ),
    options: [
      {
        text: localized(
          "تطوير بنية تحتية مستدامة وتعزيز التخطيط الحضري الذكي",
          "Developing sustainable infrastructure and enhancing smart urban planning",
          "Zhvillimi i infrastrukturës së qëndrueshme dhe përmirësimi i planifikimit urban të zgjuar"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل الإنفاق على البحث العلمي",
          "Reducing spending on scientific research",
          "Reduktimi i shpenzimeve për kërkimin shkencor"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تأجيل تنفيذ السياسات البيئية حتى حدوث الأزمات",
          "Delaying environmental policies until crises occur",
          "Shtyrja e politikave mjedisore deri në shfaqjen e krizave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة استخدام الموارد غير المتجددة",
          "Increasing the use of non-renewable resources",
          "Rritja e përdorimit të burimeve të pa rinovueshme"
        ),
        isCorrect: false,
      },
    ],
  },

  // 6
  {
    quizKey: "sustainability_hard",
    order: 6,
    text: localized(
      "لماذا تُعتبر المحميات الطبيعية أداة فعالة في الحفاظ على البيئة؟",
      "Why are nature reserves an effective tool for environmental conservation?",
      "Pse rezervat natyrore janë një mjet efektiv për ruajtjen e mjedisit?"
    ),
    options: [
      {
        text: localized(
          "لأنها تحمي الأنظمة البيئية وتحافظ على التنوع البيولوجي",
          "They protect ecosystems and preserve biodiversity",
          "Ata mbrojnë ekosistemet dhe ruajnë biodiversitetin"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنها تزيد من معدلات إزالة الغابات",
          "They increase deforestation rates",
          "Ato rrisin shkallën e shpyllëzimit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تعيق التنمية الاقتصادية",
          "They hinder economic development",
          "Ato pengojnë zhvillimin ekonomik"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنها تحد من فرص الاستثمار الزراعي",
          "They limit agricultural investment opportunities",
          "Ato kufizojnë mundësitë për investime në bujqësi"
        ),
        isCorrect: false,
      },
    ],
  },

  // 7
  {
    quizKey: "sustainability_hard",
    order: 7,
    text: localized(
      "كيف يمكن تحليل العلاقة بين الاقتصاد الأخضر والنمو الاقتصادي؟",
      "How can the relationship between the green economy and economic growth be analyzed?",
      "Si mund të analizohet marrëdhënia midis ekonomisë së gjelbër dhe rritjes ekonomike?"
    ),
    options: [
      {
        text: localized(
          "دراسة تأثير الاستثمار في الطاقات المتجددة على خلق فرص العمل",
          "Studying the impact of renewable energy investments on job creation",
          "Studimi i ndikimit të investimeve të energjisë së rinovueshme në krijimin e vendeve të punës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "مقارنة مستويات الاستهلاك بين الدول دون النظر إلى التأثير البيئي",
          "Comparing consumption levels between countries without considering environmental effects",
          "Krahasimi i niveleve të konsumit ndërmjet vendeve pa marrë parasysh efektet mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد الشركات العاملة في مجال الطاقة فقط",
          "Counting only the number of companies in the energy sector",
          "Duke numëruar vetëm numrin e kompanive në sektorin e energjisë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقييم تأثير السياسات البيئية على الشركات الصغيرة فقط",
          "Evaluating the impact of environmental policies on small businesses only",
          "Vlerësimi i ndikimit të politikave mjedisore vetëm tek bizneset e vogla"
        ),
        isCorrect: false,
      },
    ],
  },

  // 8
  {
    quizKey: "sustainability_hard",
    order: 8,
    text: localized(
      "ما هو العامل الأساسي الذي يجب مراعاته عند تصميم مدن مستدامة؟",
      "What is the key factor to consider when designing sustainable cities?",
      "Cili është faktori kryesor për t'u marrë parasysh gjatë projektimit të qyteteve të qëndrueshme?"
    ),
    options: [
      {
        text: localized(
          "تحسين كفاءة الطاقة واستخدام الموارد الطبيعية",
          "Improving energy efficiency and natural resource use",
          "Përmirësimi i efikasitetit të energjisë dhe përdorimit të burimeve natyrore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة عدد المصانع داخل المناطق السكنية",
          "Increasing the number of factories in residential areas",
          "Rritja e numrit të fabrikave në zonat e banuara"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل المساحات الخضراء لتوفير مساحات للبناء",
          "Reducing green spaces to allow more construction",
          "Reduktimi i hapësirave të gjelbra për të lejuar më shumë ndërtime"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تعزيز استخدام الوقود الأحفوري",
          "Promoting fossil fuel consumption",
          "Promovimi i konsumit të karburanteve fosile"
        ),
        isCorrect: false,
      },
    ],
  },

  // 9
  {
    quizKey: "sustainability_hard",
    order: 9,
    text: localized(
      "كيف يمكن تقييم الأثر البيئي للصناعات الكبرى؟",
      "How can the environmental impact of major industries be evaluated?",
      "Si mund të vlerësohet ndikimi mjedisor i industrive kryesore?"
    ),
    options: [
      {
        text: localized(
          "قياس نسب الانبعاثات وجودة الهواء في المناطق الصناعية",
          "Measuring emission levels and air quality in industrial zones",
          "Matja e niveleve të emetimeve dhe cilësisë së ajrit në zonat industriale"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "متابعة التقارير الإعلامية فقط",
          "Relying only on media reports",
          "Mbështetur vetëm në raportet e mediave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحليل مستويات الإنتاج فقط",
          "Analyzing production levels only",
          "Vetëm duke analizuar nivelet e prodhimit"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "مقارنة عدد العاملين في المصانع",
          "Comparing the number of factory workers",
          "Krahasimi i numrit të punëtorëve të fabrikës"
        ),
        isCorrect: false,
      },
    ],
  },

  // 10
  {
    quizKey: "sustainability_hard",
    order: 10,
    text: localized(
      "كيف يمكن تعزيز مشاركة المجتمعات المحلية في حماية البيئة؟",
      "How can community participation in environmental protection be enhanced?",
      "Si mund të rritet pjesëmarrja e komunitetit në mbrojtjen e mjedisit?"
    ),
    options: [
      {
        text: localized(
          "تقديم حوافز مالية وتطوير حملات توعية",
          "Providing financial incentives and developing awareness campaigns",
          "Sigurimi i stimujve financiarë dhe zhvillimi i fushatave ndërgjegjësuese"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل دور المجتمع في السياسات البيئية",
          "Reducing the role of communities in environmental policies",
          "Ulja e rolit të komuniteteve në politikat mjedisore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زيادة الإنتاج الصناعي دون قيود",
          "Increasing industrial production without regulations",
          "Rritja e prodhimit industrial pa rregullore"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل دور الأفراد في تقليل التلوث",
          "Ignoring the role of individuals in reducing pollution",
          "Injorimi i rolit të individëve në uljen e ndotjes"
        ),
        isCorrect: false,
      },
    ],
  },

  // 11
  {
    quizKey: "sustainability_hard",
    order: 11,
    text: localized(
      "كيف يمكن تقييم فعالية قوانين الحد من الانبعاثات؟",
      "How can the effectiveness of emission reduction laws be evaluated?",
      "Si mund të vlerësohet efektiviteti i ligjeve për reduktimin e emetimeve?"
    ),
    options: [
      {
        text: localized(
          "مقارنة مستويات ثاني أكسيد الكربون قبل وبعد تطبيق القوانين",
          "Comparing carbon dioxide levels before and after policy implementation",
          "Krahasimi i niveleve të dioksidit të karbonit para dhe pas zbatimit të politikës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تحليل عدد المخالفات دون النظر إلى نتائجها",
          "Analyzing the number of violations without assessing their outcomes",
          "Analizimi i numrit të shkeljeve pa vlerësuar rezultatet e tyre"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس درجات الحرارة فقط",
          "Measuring temperature changes only",
          "Matja e vetëm ndryshimeve të temperaturës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد السيارات الكهربائية المباعة",
          "Counting the number of electric cars sold",
          "Numërimi i numrit të makinave elektrike të shitura"
        ),
        isCorrect: false,
      },
    ],
  },

  // 12
  {
    quizKey: "sustainability_hard",
    order: 12,
    text: localized(
      "كيف يمكن تحسين استراتيجيات إدارة النفايات في المدن؟",
      "How can waste management strategies in cities be improved?",
      "Si mund të përmirësohen strategjitë e menaxhimit të mbetjeve në qytete?"
    ),
    options: [
      {
        text: localized(
          "تطبيق نظم إعادة التدوير وتقليل استخدام المنتجات البلاستيكية",
          "Implementing recycling systems and reducing plastic use",
          "Zbatimi i sistemeve të riciklimit dhe reduktimi i përdorimit të plastikës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة مدافن النفايات دون تحسين إدارتها",
          "Expanding landfills without improving waste processing",
          "Zgjerimi i landfilleve pa përmirësuar përpunimin e mbetjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تشجيع استخدام البلاستيك غير القابل للتحلل",
          "Encouraging the use of non-biodegradable plastics",
          "Inkurajimi i përdorimit të plastikës jo të biodegradueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "التخلص من النفايات في الأنهار",
          "Dumping waste into rivers",
          "Hedhja e mbeturinave në lumenj"
        ),
        isCorrect: false,
      },
    ],
  },

  // 13
  {
    quizKey: "sustainability_hard",
    order: 13,
    text: localized(
      "كيف يؤثر الاستهلاك غير المستدام للموارد الطبيعية على الأجيال القادمة؟",
      "How does unsustainable resource consumption affect future generations?",
      "Si ndikon konsumi i paqëndrueshëm i burimeve tek brezat e ardhshëm?"
    ),
    options: [
      {
        text: localized(
          "يقلل من توفر الموارد ويزيد من التدهور البيئي",
          "It reduces resource availability and increases environmental degradation",
          "Redukton disponueshmërinë e burimeve dhe rrit degradimin e mjedisit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يحسن من جودة الحياة للجميع",
          "It improves quality of life for all",
          "Përmirëson cilësinë e jetës për të gjithë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من فرص النمو الاقتصادي المستدام",
          "It enhances sustainable economic growth",
          "Ajo rrit rritjen e qëndrueshme ekonomike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من مخاطر التغير المناخي",
          "It minimizes climate change risks",
          "Ai minimizon rreziqet e ndryshimeve klimatike"
        ),
        isCorrect: false,
      },
    ],
  },

  // 14
  {
    quizKey: "sustainability_hard",
    order: 14,
    text: localized(
      "لماذا يُعد الاستثمار في البنية التحتية المستدامة أمرًا ضروريًا؟",
      "Why is investment in sustainable infrastructure essential?",
      "Pse është thelbësor investimi në infrastrukturë të qëndrueshme?"
    ),
    options: [
      {
        text: localized(
          "لأنه يقلل من التأثيرات البيئية ويحسن جودة الحياة",
          "It reduces environmental impacts and improves quality of life",
          "Redukton ndikimet mjedisore dhe përmirëson cilësinë e jetës"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يزيد من استهلاك الطاقة غير المتجددة",
          "It increases non-renewable energy consumption",
          "Rrit konsumin e energjisë jo të rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يرفع تكلفة المعيشة",
          "It raises living costs",
          "Rrit kostot e jetesës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يعزز الاعتماد على الصناعات الثقيلة",
          "It promotes reliance on heavy industries",
          "Promovon mbështetjen në industritë e rënda"
        ),
        isCorrect: false,
      },
    ],
  },

  // 15
  {
    quizKey: "sustainability_hard",
    order: 15,
    text: localized(
      "كيف يمكن تقييم تأثير تقنيات الطاقة المتجددة على البيئة؟",
      "How can the environmental impact of renewable energy technologies be evaluated?",
      "Si mund të vlerësohet ndikimi mjedisor i teknologjive të energjisë së rinovueshme?"
    ),
    options: [
      {
        text: localized(
          "تحليل انخفاض الانبعاثات وتحسن جودة الهواء بعد استخدامها",
          "Analyzing emission reductions and air quality improvements",
          "Duke analizuar reduktimet e emetimeve dhe përmirësimet e cilësisë së ajrit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "قياس عدد محطات الطاقة المتجددة دون النظر إلى تأثيرها",
          "Measuring only the number of renewable energy plants",
          "Matja vetëm e numrit të impianteve të energjisë së rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب استهلاك الكهرباء فقط",
          "Tracking electricity consumption only",
          "Vetëm gjurmimi i konsumit të energjisë elektrike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاعتماد على التصريحات الحكومية حول الطاقة المتجددة",
          "Relying on government statements about renewable energy",
          "Mbështetur në deklaratat e qeverisë për energjinë e rinovueshme"
        ),
        isCorrect: false,
      },
    ],
  },

  // 16
  {
    quizKey: "sustainability_hard",
    order: 16,
    text: localized(
      "ما هو الدور الأساسي للمنظمات البيئية في دعم السياسات المستدامة؟",
      "What is the primary role of environmental organizations in supporting sustainability policies?",
      "Cili është roli parësor i organizatave mjedisore në mbështetjen e politikave të qëndrueshmërisë?"
    ),
    options: [
      {
        text: localized(
          "تقديم الأبحاث والتوصيات لصناع القرار",
          "Providing research and recommendations to policymakers",
          "Ofrimi i kërkimeve dhe rekomandimeve për politikëbërësit"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "زيادة الاستثمار في الصناعات غير المستدامة",
          "Increasing investment in non-sustainable industries",
          "Rritja e investimeve në industri të paqëndrueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تقليل التركيز على قضايا التغير المناخي",
          "Reducing focus on climate change issues",
          "Ulja e fokusit në çështjet e ndryshimeve klimatike"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "دعم استخدام الوقود الأحفوري",
          "Supporting fossil fuel consumption",
          "Mbështetja e konsumit të karburanteve fosile"
        ),
        isCorrect: false,
      },
    ],
  },

  // 17
  {
    quizKey: "sustainability_hard",
    order: 17,
    text: localized(
      "كيف يمكن تقييم تأثير الاحتباس الحراري على الأمن الغذائي؟",
      "How can the impact of global warming on food security be evaluated?",
      "Si mund të vlerësohet ndikimi i ngrohjes globale në sigurinë ushqimore?"
    ),
    options: [
      {
        text: localized(
          "دراسة تأثير تغير المناخ على إنتاج المحاصيل الزراعية",
          "Studying the effects of climate change on crop production",
          "Studimi i efekteve të ndryshimeve klimatike në prodhimin e bimëve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تحليل أسعار الغذاء دون النظر إلى الأسباب البيئية",
          "Analyzing food prices without considering environmental factors",
          "Analizimi i çmimeve të ushqimeve pa marrë parasysh faktorët mjedisorë"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "حساب عدد المزارع دون تحليل إنتاجيتها",
          "Counting the number of farms without assessing productivity",
          "Numërimi i numrit të fermave pa vlerësuar produktivitetin"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس درجات الحرارة فقط",
          "Measuring temperature changes only",
          "Matja e vetëm ndryshimeve të temperaturës"
        ),
        isCorrect: false,
      },
    ],
  },

  // 18
  {
    quizKey: "sustainability_hard",
    order: 18,
    text: localized(
      "لماذا يُعتبر تعزيز الاقتصاد الدائري مهمًا للحفاظ على البيئة؟",
      "Why is promoting the circular economy important for environmental protection?",
      "Pse është i rëndësishëm promovimi i ekonomisë rrethore për mbrojtjen e mjedisit?"
    ),
    options: [
      {
        text: localized(
          "لأنه يقلل من استهلاك الموارد ويحد من التلوث",
          "It reduces resource consumption and limits pollution",
          "Redukton konsumin e burimeve dhe kufizon ndotjen"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "لأنه يزيد من إنتاج النفايات الصناعية",
          "It increases industrial waste production",
          "Rrit prodhimin e mbetjeve industriale"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يعتمد فقط على التخلص من النفايات",
          "It relies only on waste disposal",
          "Ai mbështetet vetëm në deponimin e mbeturinave"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لأنه يحد من جهود إعادة التدوير",
          "It restricts recycling efforts",
          "Kufizon përpjekjet e riciklimit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 19
  {
    quizKey: "sustainability_hard",
    order: 19,
    text: localized(
      "كيف يمكن تقييم نجاح الاستراتيجيات العالمية لمواجهة التغير المناخي؟",
      "How can the success of global climate strategies be evaluated?",
      "Si mund të vlerësohet suksesi i strategjive globale të klimës?"
    ),
    options: [
      {
        text: localized(
          "قياس انخفاض مستويات الغازات الدفيئة وتحسن المؤشرات البيئية",
          "Measuring greenhouse gas reductions and improvements in environmental indicators",
          "Matja e reduktimeve të gazeve serrë dhe përmirësimet e treguesve mjedisorë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "متابعة عدد المؤتمرات المناخية فقط",
          "Tracking the number of climate conferences only",
          "Vetëm gjurmimi i numrit të konferencave për klimën"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "قياس نسبة الاستثمار في الطاقة المتجددة فقط",
          "Measuring only renewable energy investments",
          "Matja e vetëm investimeve në energjinë e rinovueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحليل التوقعات الاقتصادية دون النظر إلى العوامل البيئية",
          "Analyzing economic forecasts without considering environmental factors",
          "Analizimi i parashikimeve ekonomike pa marrë parasysh faktorët mjedisorë"
        ),
        isCorrect: false,
      },
    ],
  },

  // 20
  {
    quizKey: "sustainability_hard",
    order: 20,
    text: localized(
      "كيف يمكن تعزيز المسؤولية البيئية في الشركات الكبرى؟",
      "How can environmental responsibility be strengthened in large corporations?",
      "Si mund të forcohet përgjegjësia mjedisore në korporatat e mëdha?"
    ),
    options: [
      {
        text: localized(
          "وضع معايير قانونية ملزمة وتقارير شفافة حول الأثر البيئي",
          "Implementing mandatory legal standards and transparent environmental impact reports",
          "Zbatimi i standardeve të detyrueshme ligjore dhe raporteve transparente të ndikimit në mjedis"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تقليل الإنفاق على التكنولوجيا الخضراء",
          "Reducing investment in green technology",
          "Reduktimi i investimeve në teknologjinë e gjelbër"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تشجيع استخدام الوقود الأحفوري",
          "Encouraging fossil fuel consumption",
          "Inkurajimi i konsumit të karburanteve fosile"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تجاهل تأثير الشركات على البيئة",
          "Ignoring corporate environmental impact",
          "Injorimi i ndikimit mjedisor të korporatës"
        ),
        isCorrect: false,
      },
    ],
  },

  // 21
  {
    quizKey: "sustainability_hard",
    order: 21,
    text: localized(
      "ما هو تأثير التلوث الصناعي على التنوع البيولوجي؟",
      "What is the effect of industrial pollution on biodiversity?",
      "Cili është efekti i ndotjes industriale në biodiversitet?"
    ),
    options: [
      {
        text: localized(
          "يسبب انقراض بعض الأنواع",
          "Causes the extinction of some species",
          "Shkakton zhdukjen e disa specieve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يزيد من تنوع الأنواع",
          "Increases the diversity of species",
          "Rrit shumëllojshmërinë e specieve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس له تأثير على النظام البيئي",
          "Has no impact on the ecosystem",
          "Nuk ka ndikim në ekosistem"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يحسّن حياة الحيوانات والنباتات",
          "Improves the life of animals and plants",
          "Përmirëson jetën e kafshëve dhe bimëve"
        ),
        isCorrect: false,
      },
    ],
  },

  // 22
  {
    quizKey: "sustainability_hard",
    order: 22,
    text: localized(
      "ما هو المصدر الرئيسي لغازات الدفيئة؟",
      "What is a major source of greenhouse gases?",
      "Cili është një burim kryesor i gazrave serrë?"
    ),
    options: [
      {
        text: localized(
          "استخدام المركبات وحرق الوقود الأحفوري",
          "Using vehicles and burning fossil fuels",
          "Përdorimi i automjeteve dhe djegia e lëndëve fosile"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "إعادة تدوير النفايات",
          "Recycling waste",
          "Riciklimi i mbetjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "زراعة الغابات",
          "Growing forests",
          "Rritja e pyjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "استخدام الألواح الشمسية",
          "Using solar panels",
          "Përdorimi i paneleve diellore"
        ),
        isCorrect: false,
      },
    ],
  },

  // 23
  {
    quizKey: "sustainability_hard",
    order: 23,
    text: localized(
      "كيف يمكن أن يؤثر تحمّض المحيطات على النظام البيئي؟",
      "How can ocean acidification affect the ecosystem?",
      "Si mund të ndikojë acidifikimi i oqeaneve në ekosistem?"
    ),
    options: [
      {
        text: localized(
          "يضر بالكائنات البحرية والتنوع البيولوجي",
          "Harms marine organisms and biodiversity",
          "Dëmton organizmat detarë dhe biodiversitetin"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "يحسّن نمو الشعاب المرجانية",
          "Improves coral growth",
          "Përmirëson rritjen e koraleve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "ليس له تأثير على المحيطات",
          "Has no impact on the oceans",
          "Nuk ka ndikim në oqeane"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من التلوث",
          "Reduces pollution",
          "Ul nivelin e ndotjes"
        ),
        isCorrect: false,
      },
    ],
  },

  // 24
  {
    quizKey: "sustainability_hard",
    order: 24,
    text: localized(
      "ما هو تأثير إزالة الغابات على دورة المياه؟",
      "What is the impact of deforestation on the water cycle?",
      "Cfarë ndikimi ka shpyllëzimi në ciklin e ujit?"
    ),
    options: [
      {
        text: localized(
          "تقلل من كمية المياه على اليابسة",
          "Reduces the amount of water on land",
          "Zvogëlon sasinë e ujit në tokë"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تزيد من هطول الأمطار",
          "Increases rainfall",
          "Rrit sasinë e reshjeve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "تحسّن جودة المياه في الأنهار",
          "Improves water quality in rivers",
          "Përmirëson cilësinë e ujit në lumenj"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "لا تؤثر على دورة المياه",
          "Does not affect the water cycle",
          "Nuk ndikon në ciklin e ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 25
  {
    quizKey: "sustainability_hard",
    order: 25,
    text: localized(
      "كيف يؤثر ارتفاع درجة حرارة الأرض على الكتل الجليدية؟",
      "How does global temperature rise affect glaciers?",
      "Si ndikon rritja e temperaturës globale në akullnajat?"
    ),
    options: [
      {
        text: localized(
          "يسبب ذوبانها ويرفع مستوى سطح البحر",
          "It causes them to melt and raises sea levels",
          "Shkakton shkrirjen e tyre dhe rrit nivelin e deteve"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ليس له تأثير",
          "It has no effect",
          "Nuk ka ndikim"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يجعلها أكثر استقرارًا",
          "It makes them more stable",
          "I bën ato më të qëndrueshme"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يزيد من كمية الثلوج على الأنهار الجليدية",
          "It increases the amount of snow on glaciers",
          "Rrit sasinë e borës në akullnaja"
        ),
        isCorrect: false,
      },
    ],
  },

  // 26
  {
    quizKey: "sustainability_hard",
    order: 26,
    text: localized(
      "ما هو تأثير استهلاك المياه غير المُراقب؟",
      "What is the effect of uncontrolled water consumption?",
      "Cili është efekti i konsumit të pakontrolluar të ujit?"
    ),
    options: [
      {
        text: localized(
          "يقلل من احتياطي مياه الشرب ويسبب الجفاف",
          "Decreases drinking water reserves and may cause drought",
          "Ulja e rezervave të ujit të pijshëm dhe thatësira"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "ليس له تأثير على كمية المياه المتوفرة",
          "It has no effect on the available water supply",
          "Nuk ndikon në sasinë e ujit të disponueshëm"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يحسّن حالة الأنهار والبحيرات",
          "It improves the condition of rivers and lakes",
          "Përmirëson gjendjen e lumenjve dhe liqeneve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "يقلل من الحاجة لإدارة المياه",
          "It reduces the need for water management",
          "Zvogëlon nevojën për menaxhimin e ujit"
        ),
        isCorrect: false,
      },
    ],
  },

  // 27
  {
    quizKey: "sustainability_hard",
    order: 27,
    text: localized(
      "ما هو الهدف الرئيسي من يوم الأرض؟",
      "What is the main goal of Earth Day?",
      "Cili është qëllimi kryesor i Ditës së Tokës?"
    ),
    options: [
      {
        text: localized(
          "تعزيز حماية البيئة والحفاظ على الموارد الطبيعية",
          "To promote environmental protection and natural resource conservation",
          "Të promovoj mbrojtjen e mjedisit dhe burimeve natyrore"
        ),
        isCorrect: true,
      },
      {
        text: localized(
          "تشجيع استخدام البلاستيك والمواد الكيميائية",
          "To encourage the use of plastics and chemicals",
          "Të inkurajohet përdorimi i plastikës dhe kimikateve"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الاحتفال بالتلوث وتدمير الطبيعة",
          "To celebrate pollution and the destruction of nature",
          "Të festohet ndotja dhe shkatërrimi i natyrës"
        ),
        isCorrect: false,
      },
      {
        text: localized(
          "الإضرار بالغابات لصالح التنمية العمرانية",
          "To harm forests for urban development and human interests",
          "Të dëmtohen pyjet për zhvillim urban dhe për interesat e faktorit njeri"
        ),
        isCorrect: false,
      },
    ],
  },


  



    ];

    await Question.insertMany(questions);
    console.log("✅ Questions seeded successfully");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error (questions):", err);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  }
}

seedQuestions();
