let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  //await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
═〘 Rules ${namabot} 〙═

⬡ Mohon untuk tidak Spam Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi Pengguna Bot yang Spam

⬡ Mohon maaf jika ad yg memakai menu Nsfw maka akan di block oleh bot, jika di gc tolong admin untuk menghubungi kami!!

⬡ Mohon untuk tidak Menelpon Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi orang yang nelpon Bot

⬡ Kami tidak bertanggung jawab atas penyalahgunaan bot

⬡ Kami tidak bertanggung jawab atas kebocoran data pribadi anda


➥ ${namabot} Versi ${package.version}
➥ *HomePage:* https://github.com/AlyaaXd
➥ *Issue:* https://github.com/AlyaaXd
➥ *Ping:* ${neww - old} *ms*
➥ *Total user:* ${totalreg} *user*
➥ *Uptime:* ${uptime}

═ 〘 DONASI 〙 ═
➥ Pulsa : 6285730903853
➥ Dana & OVO: 6285730903853


➥ Request? https://github.com/AlyaaXd

Official Grup :

Grup 1 :
https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y

Grup 2 :
https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y

Grup 3 :
https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y


 ©BaseNew ${namabot}
 Script original by AlyaaXd
 
 
═〘 ${namabot} 〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
