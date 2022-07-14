let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081317549796]
│ • Gopay  [081317549796]
│ • Dana  [081317549796]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6282146092695
│ _Hasil donasi akan digunakan buat keperluan_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
