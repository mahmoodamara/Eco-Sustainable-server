// seed/seedBehaviorQuestions.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { BehaviorQuestion } from "../src/models/BehaviorQuestion.js";

dotenv.config();

async function seedBehaviorQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // حذف الأسئلة القديمة
    await BehaviorQuestion.deleteMany({});
    console.log("🧹 Old behavior questions removed");

    const questions = [
      {
        order: 1,
        text: {
          ar: "أقلل من استخدام البلاستيك القابل للاستخدام مرة واحدة.",
          al: "Unë reduktoj përdorimin e plastikës njëpërdorimshe.",
          en: "I reduce my use of single-use plastic.",
        },
      },
      {
        order: 2,
        text: {
          ar: "أعيد تدوير معظم نفاياتي.",
          al: "Unë ricikloj shumicën e mbeturinave të mia.",
          en: "I recycle most of my waste.",
        },
      },
      {
        order: 3,
        text: {
          ar: "أستخدم وسائل النقل العامة أو أركب الدراجة بدلًا من السيارة.",
          al: "Unë shfrytëzoj transportin publik ose biçikletën në vend të vozitjes.",
          en: "I use public transport or ride a bike instead of driving.",
        },
      },
      {
        order: 4,
        text: {
          ar: "أحرص على شراء منتجات ذات تغليف صديق للبيئة.",
          al: "Unë sigurohem që të blej produkte me paketime miqësore ndaj mjedisit.",
          en: "I make sure to buy products with eco-friendly packaging.",
        },
      },
      {
        order: 5,
        text: {
          ar: "أعمل على توفير المياه والكهرباء في المنزل.",
          al: "Unë punoj që të kursej ujin dhe energjinë elektrike në shtëpi.",
          en: "I work to save water and electricity at home.",
        },
      },
      {
        order: 6,
        text: {
          ar: "أحرص على تناول الطعام المحلي والعضوي.",
          al: "Unë sigurohem që të ha ushqim organik dhe të prodhuar lokalisht.",
          en: "I make sure to eat local and organic food.",
        },
      },
      {
        order: 7,
        text: {
          ar: "أشجع الآخرين على التصرف بشكل أكثر صداقة للبيئة.",
          al: "Unë inkurajoj të tjerët të veprojnë në mënyra më miqësore ndaj mjedisit.",
          en: "I encourage others to act in a more environmentally friendly manner.",
        },
      },
      {
        order: 8,
        text: {
          ar: "أتجنب استخدام السيارة عندما لا يكون ذلك ضروريًا.",
          al: "Unë shmang përdorimin e veturës kur nuk është e domosdoshme.",
          en: "I avoid using a car when it is not necessary.",
        },
      },
      {
        order: 9,
        text: {
          ar: "أعمل على استخدام الكهرباء من مصادر متجددة.",
          al: "Unë përpiqem të përdor energji elektrike nga burime të ripërtëritshme.",
          en: "I strive to use electricity from renewable sources.",
        },
      },
      {
        order: 10,
        text: {
          ar: "أقلل من استهلاك المواد الغذائية المصنعة.",
          al: "Unë zvogëloj konsumin e ushqimeve të përpunuara.",
          en: "I reduce my consumption of processed foods.",
        },
      },
      {
        order: 11,
        text: {
          ar: "أستخدم الأجهزة الكهربائية فقط عند الحاجة.",
          al: "Unë përdor pajisje elektrike vetëm kur është e nevojshme.",
          en: "I use electrical appliances only when needed.",
        },
      },
      {
        order: 12,
        text: {
          ar: "أشارك في الأنشطة الخارجية التي تتواصل مع الطبيعة.",
          al: "Unë marr pjesë në aktivitete në natyrë që lidhen me natyrën.",
          en: "I participate in outdoor activities that connect with nature.",
        },
      },
      {
        order: 13,
        text: {
          ar: "أتحقق من تسريبات المياه والكهرباء في المنزل.",
          al: "Unë kontrolloj nëse ka rrjedhje në sistemin e ujit dhe të energjisë elektrike në shtëpi.",
          en: "I check for leaks in my water and electrical systems at home.",
        },
      },
      {
        order: 14,
        text: {
          ar: "أساند مشاريع حماية الحياة البرية.",
          al: "Unë mbështes projekte që ruajnë jetën e egër.",
          en: "I support projects that conserve wildlife.",
        },
      },
      {
        order: 15,
        text: {
          ar: "أستخدم منتجات تجميل غير ضارة بالبيئة.",
          al: "Unë përdor kozmetikë që nuk është e dëmshme për mjedisin.",
          en: "I use cosmetics that are not harmful to the environment.",
        },
      },
      {
        order: 16,
        text: {
          ar: "أشارك في المبادرات للحفاظ على المساحات المفتوحة.",
          al: "Unë marr pjesë në nisma për të ruajtur hapësirat publike.",
          en: "I participate in initiatives to preserve open spaces.",
        },
      },
      {
        order: 17,
        text: {
          ar: "أفضّل شراء الملابس من مواد طبيعية وليست صناعية.",
          al: "Unë preferoj të blej rroba të bëra nga materiale natyrale sesa ato nga materiale sintetike.",
          en: "I prefer to buy clothes made from natural materials rather than synthetic ones.",
        },
      },
      {
        order: 18,
        text: {
          ar: "أعمل على تجنب استخدام السيارات الكهربائية غير المتجددة.",
          al: "Unë përpiqem të shmang përdorimin e makinave elektrike që furnizohen me energji jo të ripërtëritshme.",
          en: "I try to avoid using non-renewable electric cars.",
        },
      },
      {
        order: 19,
        text: {
          ar: "أتبرع بالمال أو الوقت للمنظمات البيئية.",
          al: "Unë dhuroj para ose ndaj kohë për organizatat mjedisore.",
          en: "I donate money or time to environmental organizations.",
        },
      },
      {
        order: 20,
        text: {
          ar: "أعمل على تقليل هدر الطعام.",
          al: "Unë punoj që të zvogëloj mbeturinat e ushqimit.",
          en: "I work to reduce food waste.",
        },
      },
      {
        order: 21,
        text: {
          ar: "أعتني بالتخلص الصحيح من النفايات الإلكترونية.",
          al: "Unë kujdesem për asgjësimin e duhur të mbeturinave elektronike.",
          en: "I take care of the proper disposal of electronic waste.",
        },
      },
      {
        order: 22,
        text: {
          ar: "أحرص على عدم شراء منتجات ذات تغليف مفرط.",
          al: "Unë sigurohem që të mos blej produkte me paketim të tepërt.",
          en: "I make sure not to buy products with excessive packaging.",
        },
      },
      {
        order: 23,
        text: {
          ar: "أشارك في تنظيف الأماكن العامة.",
          al: "Unë marr pjesë në aktivitetet për pastrimin e hapësirave publike.",
          en: "I participate in cleaning public spaces.",
        },
      },
      {
        order: 24,
        text: {
          ar: "أستخدم أكياس التسوق القابلة لإعادة الاستخدام.",
          al: "Unë përdor qese për blerje që janë të ripërdorshme.",
          en: "I use reusable shopping bags.",
        },
      },
      {
        order: 25,
        text: {
          ar: "أحرص على عدم إلقاء النفايات في الأماكن العامة.",
          al: "Unë kujdesem që të mos hedh mbeturina në vendet publike.",
          en: "I make sure not to litter in public places.",
        },
      },
      {
        order: 26,
        text: {
          ar: "أستخدم الماء الساخن فقط عند الحاجة.",
          al: "Unë përdor ujë të nxehtë vetëm kur është e domosdoshme.",
          en: "I use hot water only when necessary.",
        },
      },
      {
        order: 27,
        text: {
          ar: "أشارك في الحملات البيئية في مجتمعي.",
          al: "Unë marr pjesë në fushata mjedisore në komunitetin tim.",
          en: "I participate in environmental campaigns in my community.",
        },
      },
      {
        order: 28,
        text: {
          ar: "أحرص على استخدام مصابيح LED لتوفير الطاقة.",
          al: "Unë sigurohem që të përdor drita LED për të kursyer energji.",
          en: "I make sure to use LED lights to save energy.",
        },
      },
      {
        order: 29,
        text: {
          ar: "أساهم في زراعة الأشجار أو النباتات.",
          al: "Unë kontribuoj në mbjelljen e drunjëve ose bimëve.",
          en: "I contribute to planting trees or plants.",
        },
      },
      {
        order: 30,
        text: {
          ar: "أبتعد عن شراء المواد الضارة بالبيئة.",
          al: "Unë shmang blerjen e materialeve të dëmshme.",
          en: "I avoid buying harmful materials.",
        },
      },
      {
        order: 31,
        text: {
          ar: "أشارك في ورش العمل حول الاستدامة.",
          al: "Unë marr pjesë në punëtori mbi qëndrueshmërinë.",
          en: "I participate in workshops on sustainability.",
        },
      },
      {
        order: 32,
        text: {
          ar: "أحرص على استخدام وسائل النقل الصديقة للبيئة.",
          al: "Unë sigurohem që të përdor transport miqësor ndaj mjedisit.",
          en: "I make sure to use environmentally friendly transportation.",
        },
      },
      {
        order: 33,
        text: {
          ar: "أستثمر في الطاقة الشمسية أو الطاقات المتجددة.",
          al: "Unë investoj në energji diellore ose burime të rinovueshme të energjisë.",
          en: "I invest in solar energy or renewable energy sources.",
        },
      },
      {
        order: 34,
        text: {
          ar: "أخذ بالحسبان تأثير المنتجات على البيئة قبل شرائها.",
          al: "Unë e marr në konsideratë ndikimin mjedisor të produkteve përpara se t'i blej ato.",
          en: "I consider the environmental impact of products before purchasing them.",
        },
      },
      {
        order: 35,
        text: {
          ar: "أعمل على تحسين عاداتي اليومية لتكون أكثر صداقة للبيئة.",
          al: "Unë punoj për të përmirësuar sjelljet e mia të përditshme që të jenë më miqësore ndaj mjedisit.",
          en: "I work to improve my daily habits to be more environmentally friendly.",
        },
      },
    ].map((q) => ({
      ...q,
      scale: { min: 1, max: 10 },
      weight: 1,
      reverseScored: false,
      active: true,
    }));

    await BehaviorQuestion.insertMany(questions);
    console.log(`✅ Inserted ${questions.length} behavior questions`);

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding behavior questions:", err);
    process.exit(1);
  }
}

seedBehaviorQuestions();
