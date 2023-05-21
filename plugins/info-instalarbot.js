import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
Comming soon 🥴

check other bots here:-

https://github.com/GasComIT/
*©2023 GasComIT*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'bot',
body: 'bot',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/GasComIT`}}})   
}
handler.command = /^(install)/i
export default handler
