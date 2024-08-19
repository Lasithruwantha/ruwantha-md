const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("please give me url or name")
  const seaarch = await yts(q)
  const data = seaarch.videos[0];
  const url = data.ulr
  let desc = '
  🗡*ruwantha-md yt download*🗡
  🎟description: ${data.description}
  🕑time: ${data.timestamp}
  🔢ago: ${data.ago}
  ~power by~ ruwantha
  '
  await conn.sendMessage(from,{img:{url: data.thumbnail},captain:desc},{quoted:mek});
  //download audio 
  let down = await fg.yta(url)
  let downloadurl = down.dl_url
  // send audio+document messages 
  await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek});
  await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",captain:"~power by~ ruwantha"},{quoted:mek});
  
  
  
  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
//============[videos]=========================
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("please give me url or name")
  const seaarch = await yts(q)
  const data = seaarch.videos[0];
  const url = data.ulr
  let desc = '
  🗡*ruwantha-md  download*🗡
  🎟description: ${data.description}
  🕑time: ${data.timestamp}
  🔢ago: ${data.ago}
  ~power by~ ruwantha
  '
  await conn.sendMessage(from,{img:{url: data.thumbnail},captain:desc},{quoted:mek});
  //download video
  let down = await fg.ytv(url)
  let downloadurl = down.dl_url
  // send video+document messages 
  await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek});
  
  await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4",captain:"~power by~ ruwantha"},{quoted:mek})
  
  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})