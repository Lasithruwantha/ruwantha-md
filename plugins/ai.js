config = require('../config')
const {cmd , commands} = require('../command')
const { fetchjson } = require('../lid/function')

cmd({
    pattern: "static",
    desc: "chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchjson(`http://chatgtpforprabath-md.vercel.app/api/gtpv1?q=${q}`)
return reply(`${data.data}`)
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
