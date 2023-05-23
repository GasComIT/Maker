let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: null,
rows: [
{title: "Welcome", description: null, rowId: `${usedPrefix}benvenuto`},
{title: "AntiLink", description: null, rowId: `${usedPrefix}antilink`},
{title: "AntiLinkHard", description: null, rowId: `${usedPrefix}antilinkhard`},
{title: "AntiSpam", description: null, rowId: `${usedPrefix}antispam`},
{title: "Detect", description: null, rowId: `${usedPrefix}detect`},
{title: "AntiDelete", description: null, rowId: `${usedPrefix}antielimina`},
{title: "AntiviewOnce", description: null, rowId: `${usedPrefix}antiviewonce`},
{title: "AntiTrava", description: null, rowId: `${usedPrefix}antitrava`},
{title: "AntiPaki", description: null, rowId: `${usedPrefix}antipaki`},
{title: "AdminMode", description: null, rowId: `${usedPrefix}modoadmin`},
{title: "AutoSticker", description: null, rowId: `${usedPrefix}autosticker`},
]}, ]
let name = await conn.getName(m.sender)
let frocioni = `Admin ${name}`
const listMessage = {
text: '\nActivate/Deactivate',
footer: null,
title: null,
buttonText: frocioni,
sections}

let isEnable = /true|Enable|attiva|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'benvenuto':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antielimina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilinkhard':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilinkgp':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antilinkbase = isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antilinkbase2 = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable
break
case 'antispam':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiSpam = isEnable
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'soloprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'sologruppo':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitrava':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antipaki':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) {
if (isAdmin) return conn.sendMessage(m.chat, listMessage, m)
throw false }
}
conn.sendButton(m.chat, `${type} ${isEnable ? '✓ Activate' : '✗ Deactivate'}`, wm2, null, [[`${isEnable ? 'Deactivate' : 'Activate'}`, `${isEnable ? `${usedPrefix}0 ${type}` : `${usedPrefix}1 ${type}`}`]], m)}
handler.help = ['frocio', 'gay'].map(v => v + '<option>')
handler.tags = ['group', 'owner']
handler.command = /^((on|off)|(attiva|disabilita)|(turn)?[01])$/i
export default handler
