import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
◻──────────────◻
_All info given on repo_
_Check Maker multi-device here:_

https://github.com/GasComIT/Maker
*©2023 GasComIT*
◻──────────────◻
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'Maker',
body: 'bot',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/GasComIT`}}})   
}
handler.command = /^(install)/i
export default handler
