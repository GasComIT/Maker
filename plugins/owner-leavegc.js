let handler = async (m, { conn, args, command }) => {
await m.reply('𝐛𝐲𝐞 𝐛𝐲𝐞👋') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
