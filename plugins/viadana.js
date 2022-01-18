let handler = async (m, { conn }) => {
	conn.reply(m.chat, `┏━━━━━ 「 PEMBAYARAN 」 ━━━ ❖
┃❖ Untuk Pembayaran Via DANA
┃❖ Ke nomer ini
┃❖ 085730903853
┃
┃❖「 Fitur 」 ❖
┃
┃❖ *FITUR DOWNLOADER 500++
┃     YouTube, Twitter, 
┃     Tiktok, Instagram, dll.
┃    *FITUR STIKER*
┃❖ *FITUR ADMIN*
┃   *KICK ORANG*
┃    *JADIIN ADMIN*
┃❖ *FITUR ISLAM*
┃   *QURAN*
┃   *CEK JADWAL SHALAT*
┃❖ *INTERNET*
┃   *BRAINLY*
┃   *GOOGLE*
┃❖ *DAN 200 LEBIH*
┃   *FITUR LAINNYA*
┃ 
┃❖ © Rpg AlyaaXzy
┃❖ Scrip original by Nurutomo
┃❖「 ${namabot} 」 
┗━━━━━━━━━━━━━━ ❖`.trim(), m)
}

handler.command = /^viaovo$/i

module.exports = handler
