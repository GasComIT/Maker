import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 Resulta for ${text}`
conn.sendButton(m.chat, captionn, author, link, [['Next Image', `${usedPrefix}cerca ${text}`]], m)}
handler.help = ['cerca <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(cerca)$/i
export default handler
