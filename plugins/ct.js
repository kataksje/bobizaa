let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                      `*∞──────「🏮」──────∞*

*『من انت』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『وين انت』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『لا』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『نعم』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『كاذب』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『اا』*

*∞──────「🏮」──────∞*`,
  `*∞──────「🏮」──────∞*

*『لاو』*

*∞──────「🏮」──────∞*`,
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
