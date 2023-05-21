import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) return
try {     
let get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `${args.join(" ")}`
const sections = [{ title: `AUDIO`, rows: listSerch }, { title: `VIDEO`, rows: listSerch2 }, { title: `DOCUMENTO MP3`, rows: listSerch3 }, { title: `DOCUMENTO MP4`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc http://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc http://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: '𝐬𝐞𝐥𝐞𝐳𝐢𝐨𝐧𝐚 𝐪𝐮𝐢 𝐬𝐨𝐭𝐭𝐨', title: "𝐌𝐮𝐬𝐢𝐜𝐚 𝐭𝐫𝐨𝐯𝐚𝐭𝐚", buttonText: "𝐫𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐢", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
return
}}
handler.command = /^playlist2|playlist$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return
}}
