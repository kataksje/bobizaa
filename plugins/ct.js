let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                    `*∞──────「كـت」──────∞*

*『لوفي』*

*∞──────「🏮」──────∞*`,  
                      `*∞──────「🏮」──────∞*

*『ناروتو』*

*∞──────「🏮」──────∞*`,  
                         `*∞──────「🏮」──────∞*

*『سابو』*

*∞──────「🏮」──────∞*`,  
                       `*∞──────「🏮」──────∞*

*『رايلي』*

*∞──────「🏮」──────∞*`,  
                                    `*∞──────「🏮」──────∞*

*『جيرايا』*

*∞──────「🏮」──────∞*`,  
                                      `*∞──────「🏮」──────∞*

*『ايتاتشي』*

*∞──────「🏮」──────∞*`,
                                      `*∞──────「🏮」──────∞*

*『ساسكي』*

*∞──────「🏮」──────∞*`,
                                       `*∞──────「🏮」──────∞*

*『شيسوي』*

*∞──────「🏮」──────∞*`,
                                        `*∞──────「🏮」──────∞*

*『يوهان』*

*∞──────「🏮」──────∞*`,
                                         `*∞──────「🏮」──────∞*

*『غوهان』*

*∞──────「🏮」──────∞*`,
                                          `*∞──────「🏮」──────∞*

*『آيزن』*

*∞──────「🏮」──────∞*`,
                                          `*∞──────「🏮」──────∞*

*『فايوليت』*

*∞──────「🏮」──────∞*`,
                                           `*∞──────「🏮」──────∞*

*『نامي』*

*∞──────「🏮」──────∞*`,
                                     `*∞──────「🏮」──────∞*

*『هانكوك』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『ايتاتشي』*

*∞──────「🏮」──────∞*`,

                                           `*∞──────「🏮」──────∞*

*『روبين』*

*∞──────「🏮」──────∞*`,
                                     `*∞──────「🏮」──────∞*

*『كاكاشي』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『ريومو』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『ريمورو』*

*∞──────「🏮」──────∞*`,
                            `*∞──────「🏮」──────∞*

*『غوكو』*

*∞──────「🏮」──────∞*`,  
                            `*∞──────「🏮」──────∞*

*『غوغو』*

*∞──────「🏮」──────∞*`,  
                               `*∞──────「🏮」──────∞*

*『كيلوا』*

*∞──────「🏮」──────∞*`,  
                                  `*∞──────「🏮」──────∞*

*『غون』*

*∞──────「🏮」──────∞*`,  
                               `*∞──────「🏮」──────∞*

*『كورابيكا』*

*∞──────「🏮」──────∞*`,  
                                    `*∞──────「🏮」──────∞*

*『يوسكي』*

*∞──────「🏮」──────∞*`,  
                                      `*∞──────「🏮」──────∞*

*『ايشيدا』*

*∞──────「🏮」──────∞*`,
                                      `*∞──────「🏮」──────∞*

*『ايتيشغو』*

*∞──────「🏮」──────∞*`,
                                       `*∞──────「🏮」──────∞*

*『ميناتو』*

*∞──────「🏮」──────∞*`,
                                        `*∞──────「🏮」──────∞*

*『رينجي』*

*∞──────「🏮」──────∞*`,
                                         `*∞──────「🏮」──────∞*

*『جيمبي』*

*∞──────「🏮」──────∞*`,
                                          `*∞──────「🏮」──────∞*

*『انوس』*

*∞──────「🏮」──────∞*`,
                                          `*∞──────「🏮」──────∞*

*『سايتاما』*

*∞──────「🏮」──────∞*`,
                                           `*∞──────「🏮」──────∞*

*『نيزيكو』*

*∞──────「🏮」──────∞*`,
                                     `*∞──────「🏮」──────∞*

*『اوراهارا』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『تانجيرو』*

*∞──────「🏮」──────∞*`,

                                           `*∞──────「🏮」──────∞*

*『نويل』*

*∞──────「🏮」──────∞*`,
                                     `*∞──────「🏮」──────∞*

*『استا』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『يونو』*

*∞──────「🏮」──────∞*`,
                                            `*∞──────「🏮」──────∞*

*『لايت』*

*∞──────「🏮」──────∞*`

     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
