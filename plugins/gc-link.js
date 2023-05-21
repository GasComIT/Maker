let handler = async (m, { conn, args }) => {
let group = m.chat
/*
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    image: {url: 'https://i.ibb.co/dkQ8fvj/pic02.jpg'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 4
}

conn.sendMessage(group, buttonMessage);

*/
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, link, m, {detectLink: true})
//conn.sendMessage(m.chat, { text: link }, { quoted: m, detectLink: true })
}
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
