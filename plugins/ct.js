let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                    `مادة دايم تجيب العيد فيها ؟`  
                                   `مع او ضد : العتاب على قدر المحبة ؟`
                                           `ردك على من يدور الزعل ؟`
`اكثر شخص تتهاوش معه ؟`
     `اكتب شطر من اغنية او قصيدة جا فـ بالك ؟`
       `أكثر شيء مضيع وقتك فيه ؟`
       `شخصية تقهرك ؟`
       `صوت مغني م تحبه ؟`
       `اخر مطعم اكلت منه ؟`
       `كم مره تشحن جوالك باليوم ؟`
       `أجمل صورة بجوالك ؟`
       `بالعادة برمضان تنحف ولاتسمن ؟`
       `اخر كلمة تقولها لو خلصت كلامك ؟`
       `كلمة بـ لهجتك تحس م احد بيعرفها ؟`
     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
