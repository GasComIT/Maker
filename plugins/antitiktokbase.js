let linkRegex = /tiktok.com\/([0-9A-Za-z]{3,40})/i
export async function before(m, { isAdmin, groupMetadata, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let war = '3'
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `tiktok.com`
if (isAdmin && chat.antitiktokbase && m.text.includes(grupo)) return
if (chat.antitiktokbase && isGroupLink && !isAdmin && isBotAdmin) {
if (isBotAdmin) {
global.db.data.users[m.sender].warn += 1
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        let warn = global.db.data.users[m.sender].warn
let user = global.db.data.users[m.sender]
        if (warn < war) {
m.reply("```⚠️ It is not allowed to send tiktok links..!```")
        } else if (warn => war) {
            global.db.data.users[m.sender].warn = 0
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
}}
return !0
}
