let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `chi? tagga qualcuno`
if (!m.mentionedJid[0] && !m.quoted) return 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('Succesfuly banned ✓')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
