import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
🔎 Results for ${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
export default handler
