import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
◻──────────────◻
✦✧✧ 𝐌ΞИ𝐔🛡️⃟🏴‍☠ 𝐁Ꮻ𝐓 ✧✧✦

┌──⭓ Group
│⭔ .kick / addio / ban @
│⭔ .warn @
│⭔ .unwarn @
│⭔ .del (msg)
│⭔ .stermina +92
│⭔ .listanum +1
│⭔ .attiva/disabilita benvenuto
│⭔ .attiva/disabilita antilink
│⭔ .attiva/disabilita antilinkhttps
│⭔ .attiva/disabilita antispam
│⭔ .attiva/disabilita detect
│⭔ .attiva/disabilita antielimina
│⭔ .attiva/disabilita antiviewonce
│⭔ .attiva/disabilita antitrava
│⭔ .attiva/disabilita antipaki
│⭔ .attiva/disabilita modoadmin
│⭔ .attiva/disabilita autosticker
│⭔ .link
│⭔ .reimposta
│⭔ .hidetag (txt)
│⭔ .tagall / marcar (txt)
│⭔ .inattivi
│⭔ .promuovi / mettiadmin @
│⭔ .retrocedi / togliadmin @
│⭔ .gruppo aperto / chiuso
│⭔ .nome (txt)
│⭔ .setbenvenuto (@user txt)
│⭔ .setaddio (@user txt)
│⭔ .admin
│⭔ .ping
│⭔ .menu2
└───────⭓

🛡️⃟🏴‍☠ ════ •⊰❂⊱• ════ 🛡️⃟🏴‍☠

┌──⭓ 𝐌𝐄𝐃𝐈𝐀
│⭔ .attp (txt)
│⭔ .ttp (txt)
│⭔ .gtts (txt)
│⭔ .dado
│⭔ .sticker / s (foto/video)
│⭔ .wm (sticker)
│⭔ .emojimix (emoji+emoji)
│⭔ .play (canzone)
│⭔ .playdoc (canzone)
│⭔ .playlist (canzone)
│⭔ .pinterest / cerca 
│⭔ .whatmusic (audio)
│⭔ .qrcode (txt)
│⭔ .leggi (foto)
│⭔ .styletext (txt)
│⭔ .destrava
│⭔ .tovideo (sticker)
│⭔ .togif (sticker)
│⭔ .togifaud (video)
│⭔ .tomp3 (video/audio)
│⭔ .toaudio (video/audio)
│⭔ .toptt (video)
│⭔ .tourl (foto/video)
└───────⭓

🛡️⃟🏴‍☠ ════ •⊰❂⊱• ════ 🛡️⃟🏴‍☠

┌──⭓ Logo menu
│⭔ .menuloghi
└───────⭓

🛡️⃟🏴‍☠ ════ •⊰❂⊱• ════ 🛡️⃟🏴‍☠

┌──⭓ 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈
│⭔ .gay @
│⭔ .frocio @
│⭔ .lesbica @
│⭔ .puttana @
│⭔ .puttaniere @
│⭔ .nero @
│⭔ .nera @
│⭔ .random @
│⭔ .amore @
│⭔ .andre (AI)
│⭔ .wikipedia (txt)
│⭔ .meteo / tempo (città)
│⭔ .dox @
│⭔ .topgays
│⭔ .topnazi
│⭔ .slot
│⭔ .calc (1+1)
│⭔ .abdul
│⭔ .drix
│⭔ .roax
│⭔ .poison
│⭔ .maschere
│⭔ .drasy
│⭔ .polter
│⭔ .fidcat
│⭔ .giada
│⭔ .meli
│⭔ .autoadmin
└───────⭓

🛡️⃟🏴‍☠ ════ •⊰❂⊱• ════ 🛡️⃟🏴‍☠

┌──⭓ 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎
│⭔ .attiva/disabilita restrict
│⭔ .attiva/disabilita antiprivato
│⭔ .attiva/disabilita sologruppo
│⭔ .attiva/disabilita autoread
│⭔ .banuser @
│⭔ .unbanuser @
│⭔ .block @
│⭔ .unblock @
│⭔ .join
│⭔ .out
│⭔ .spamgp (link)
│⭔ .cleartmp
│⭔ .blocklist
│⭔ .banlist
│⭔ .banchat
│⭔ .unbanchat
└───────⭓

🛡️⃟🏴‍☠ ════ •⊰❂⊱• ════ 🛡️⃟🏴‍☠

┌──⭓ Bot Installation
│⭔ .install
└───────⭓

✦✧✧ 𝐄ИΞM𝕀Ξ𝐒🛡️⃟🏴‍☠ 𝐁Ꮻ𝐓 ✧✧✦ `.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/GasComIT`}}})
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu3)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
