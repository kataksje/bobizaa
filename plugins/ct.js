let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                    ,  `مادة دايم تجيب العيد فيها ؟`  
                                     ,  `مع او ضد : العتاب على قدر المحبة ؟`
                                           ,  `ردك على من يدور الزعل ؟`
,  `اكثر شخص تتهاوش معه ؟`
     ,  `اكتب شطر من اغنية او قصيدة جا فـ بالك ؟`
      ,   `أكثر شيء مضيع وقتك فيه ؟`
       ,  `شخصية تقهرك ؟`
       ,  `صوت مغني م تحبه ؟`
       ,  `اخر مطعم اكلت منه ؟`
      ,   `كم مره تشحن جوالك باليوم ؟`
     ,    `أجمل صورة بجوالك ؟`
      ,   `بالعادة برمضان تنحف ولاتسمن ؟`
       ,  `اخر كلمة تقولها لو خلصت كلامك ؟`
   ,   `اشياء تغيرت نظرتك لها`
    ,  `كلمة بـ لهجتك تحس م احد بيعرفها ؟`
     ,    `صفة تخليك تكره الشخص مهما كان قربه منك ؟`
    ,     `اهم شيء يكون معك في كل طلعاتك ؟`
    ,     `مقولة او حكمة تمشي عليها ؟`
   ,      `مادة تكرها بس درجاتك عالية فيها ؟`
  ,       `دعاء له اثر إبجابي في حياتك ؟`
  ,       `كيف تعبر عن عصبيتك ؟`
   ,      `كيف الجو عندكم اليوم ؟`
  ,       `اخر شخص قالك كلمة حلوة ..`
,         `اكتب اول كلمة جات في بالك الحين ؟`
      ,   `اغنية ناشبه في مخك ؟`
     ,    `أصعب انتظار ؟`
      ,   `أكثر شي يعتمدون عليك فيه ؟`
     ,    `مشهور ، او مشهورة .. يشبهونك فيه`
    ,     `من الاشياء الي تجيب لك الصداع ؟`
     ,    `متى تحب الطلعة ؟`
    ,     `شعور ودك يموت ؟`
     ,    `شخص مستحيل تمسك ضحكتك معاه؟`
     ,    `أطول صداقة بينك وبين شخص كم مدتها ؟`
     ,    `سويت شيء بالحياة وانت مو مقتنع فيه ؟`
     ,    `أمنشن .. شخص تقوله اشتقت لك ؟`
    ,     `اسم تحس صاحبه فخم ؟`
     ,    `شيء تتمنى يتحقق ؟`
     ,    `مرة سويت جميل و نكره شخص ؟`
     ,    `تقدر تعيش يوم كامل بدون نت ؟`
     ,    `فن تحبه كثير ؟`
     ,    `مع او ضد : العتاب على قدر المحبة ؟`
     ,    `ردك على من يدور الزعل ؟`
    ,     `اكبر مبلغ ضاع منك ؟`
      ,   `لو ضاقت فيك الدنيا لمين تروح ؟`
      ,   `من النوع الي تخطط لامورك ولا تحب تغامر ؟`
      ,   `كم من عشرة تحب حياتك ؟`
     ,    `شخص تشوفه بشكل يومي غير اهلك ؟`
     ,    `منشن : شخص واكتب صفة م تحبها فيه ؟`
     ,    `كلمة تقولها للي ببالك ؟`
    ,     `أكثر شيء مضيع وقتك فيه ؟`
      ,   `تدخل بنقاش بموضوع ماتفهم فيه شيء ولا تسكت وتسمع بس ؟`
     ,    `شيء واحد .. م عاد يهمك كثر اول ؟`
     ,    `اكثر شيء حظك سيء فيه ؟`
     ,   `وش ابشع شعور مريت فيه ؟`
      ,   `وش تحس انك تحتاج الفترة هذي ؟`
      ,   `منشن .. شخص تحب سوالفه ؟`
      ,  `كيف تعالج الغيرة الزايدة ؟`
      ,   `اكثر كذبة تقولها ؟`
     ,    `وش اول طريقة تسويها اذا جيت تراضي شخص ؟`
      ,   `لو حياتك عبارة عن كتاب .. وش بيكون اسمه ؟`
       ,  `أخر رسالة بالواتس جاتك من مين ؟`
     ,    `كلمة لـ شخص عزيز عليك ؟`
      ,   `كمل : كذاب من يقول ان ...`
      ,   `تحب سوالف مين ؟`
      ,   `اكثر كلمة الناس تقولها عن شخصيتك ؟`
     ,    `شايل هم شيء ؟`
     ,    `متى اخر مره نمت اكثر من 12 ساعة ؟`
     ,    `إيش لون جوالك ؟`
       ,  `كلمتك اذا شفت حاجة حلوة ؟`
      ,   `اكثر شيء تخاف منه ؟`
      ,   `وش الشيء الي تطلع حرتك فيه و زعلت ؟`
    ,     `اكثر شخص تتهاوش معه ؟`
      ,   `لو للحياة لون إيش بيكون لون حياتك ؟`
      ,   `منشن ... شخص يعجبك كلامه و اسلوبه ..`
      ,   `ايامك هالفترة عبارة عن ؟`
      ,   `التاريخ المنتظر بالنسبة لك ؟`
     ,    `هل بمره فكرت تنتحر ؟`
      ,   `مع او ضد الشخص الي يثق بسرعة غبي؟`
      ,   `تحب تجرب الاشياء الجديدة ، ولا تنتظر الناس يجربونها اول ؟`
      ,   `حزين ولا مبسوط ؟`
      ,   `شخص تحب تستفزه ؟`
      ,   `اشياء تبين عليك اذا زعلت ؟`
      ,   `ايش الوظيفة التي تستحق أعلى راتب؟`
      ,   `وش حذفت من قاموس حياتك ؟`
      ,   `لو يمديك تقابل شخص في الوتساب مين بيكون ؟`
      ,   `شخص م تقدر تكذب عليه ؟`
      ,   `اول شخص تكلمه اذا صحيت من النوم ؟`
  
     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
