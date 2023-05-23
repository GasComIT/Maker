import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix, isAdmin }) => {
try {
const buttons = [
{ buttonId: `${usedPrefix}1 ${command}`, buttonText: { displayText: 'Activate' }, type: 1 },
{ buttonId: `${usedPrefix}0 ${command}`, buttonText: { displayText: 'Deactivate' }, type: 2 }, ]    
let texto1 = `Options ⭔ ${command}`
const buttonMessage = { text: texto1, footer: 'Maker MD', buttons: buttons, headerType: 4 }
if (!isAdmin) return
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {  
return}}
handler.help = ['menu'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^benvenuto|antilink|antilinkhard|antispam|detect|antielimina|antiviewonce|antitrava|antipaki|modoadmin|autosticker|restrict|antiprivato|sologruppo|autoread$/i
export default handler
