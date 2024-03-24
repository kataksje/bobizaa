let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                    `『مادة دايم تجيب العيد فيها ؟』`,  

                                   `『مع او ضد : العتاب على قدر المحبة ؟』`,
                                            `『ردك على من يدور الزعل ؟`

     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
