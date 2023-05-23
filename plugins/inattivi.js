import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
switch (command) {
case "inattivi": 
if(total == 0) return conn.reply(m.chat, `No Idle`, m) 
m.reply(`Inactive review 😴\n${await conn.getName(m.chat)}\n\n${sider.length} Inactive:\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n`, null, { mentions: sider }) 
  break   
case "viainattivi":  
        if(total == 0) return conn.reply(m.chat, `No iddle`, m) 
       await m.reply(`Inactive removal 🚫\n\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n`, null, { mentions: sider }) 
await conn.groupParticipantsUpdate(m.chat, sider, 'remove')
break
}}
handler.command = /^(inattivi|viainattivi)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
