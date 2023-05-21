let handler = async(m, { conn, text }) => {
  if (!text) return
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`New prefix: ${text}`)
}
handler.help = ['prefisso'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(prefisso)$/i
handler.rowner = true

export default handler 
