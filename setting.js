/*
SCRIPT GALAXY GEN 1 
BASE: ZENO

       THANKS TO DRAYXD
       THANKS TO BARA
       THANKS TO ZYXZO
       THANKS TO ZENO
       THANKS TO AKMAL

*///========

const fs = require('fs')
const chalk = require('chalk')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

global.namaowner = "GALAXY"
global.owner = "628561160742"
global.namabot = "Galaxy-V10"
global.botname = "Galaxy-V10"
global.simbol = "⌑"
global.autoJoin = false
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.dray = fs.readFileSync("./database/menu.mp4")
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.sessionName = 'drayyy' //Gausah Juga
global.save = "drayxd"
global.keyopenai = `sk-proj-EXdCaNbBfwrOJaqCjcTDT3BlbkFJyFvdbMAMopdT2vaEhuZj`
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Galaxy"

global.namastore = "RULZZ STORE"
global.dana = "085710167735" // NOMER DANA KAMU
global.gopay = "" // NOMER GOPAY KAMU
global.ovo = "" // NOMER OVO KAMU
global.shp = "" // NOMER SHOPE KAMU
global.qris = fs.readFileSync("./database/dray/qris.jpg")
require("./database/youtube.js")

global.autojpmm = `JOIN SINI BANG

LINK LU :`// TEXT JPM LU

const mess = {
   wait: "Bentar ya bre..",
   success: "Berhasil, bang✔",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Thomz Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang Dray",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Admin",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Only Premium and murbug",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})