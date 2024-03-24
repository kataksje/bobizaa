import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Casablanca').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\` 
   هو في الوقت الحالي في اليمن :


▢ morocco     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ https://wa.me/+967730068059`}, {quoted: m});
  };
handler.help = ["tz"]
handler.tags = ["infobot"]
handler.command = /^(tz)$/i
  export default handler;
