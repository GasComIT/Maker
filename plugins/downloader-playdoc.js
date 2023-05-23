import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `riprova`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'http://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `${usedPrefix}ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐚𝐮𝐝𝐢𝐨' }, type: 1 },
{ buttonId: `${usedPrefix}ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐯𝐢𝐝𝐞𝐨' }, type: 1 },
{ buttonId: `${usedPrefix}playlist ${text}`, buttonText: { displayText: 'More results' }, type: 1 }, ] 
let texto1 = `${title}
📆 Risale a ${publishedTime}
⌚ ${durationH}
👀 ${viewH}`.trim()
let buttonMessage = { "document": { url: "http://wa.me/254778218614" }, "fileName": '⌈🔊 𝐏𝐋𝐀𝐘 🔊⌋', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '0', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": false, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `http://youtube.com` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'http://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `${title}\n📆 Date back to ${published}\n👀 ${views}`
const buttons = [{buttonId: `${usedPrefix}playlist ${title}`, buttonText: {displayText: 'More results'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '. . .', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
return}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
