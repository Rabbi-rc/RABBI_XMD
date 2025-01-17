const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }




    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭──────────────────────╮  
│        🚀  *RABBI_XMD*       │  
│  ⨭ 𝐑𝐀𝐁𝐁𝐈_𝐗𝐌𝐃 ⨮          │  
╰──────────────────────╯  

╭━━━━━❰ *AVAILABLE MENUS* ❱━━━╮  
┃ ❒  📜 ▸ *MENU*                    
┃ ❒  📄 ▸ *MENU2*                  
┃ ❒  🐞 ▸ *BUGMENU*  
┃ =======================
┃ ❒  🔌 ▸ *PLUGINS*  : ${cm.length}   
┃ ❒  💾 ▸ *RAM*      : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}    
┃ ❒  🖥️  ▸ *SAVER*    : ${os.platform()}         
┃ ❒  🎨 ▸ *THEME*    : _𝐑𝐀𝐁𝐁𝐈_TECH_SUPPORT_    
╰━━━━━━━━━━━━━━━━━━━━━━━━╯ 

📌 _*Type the command to proceed.*_  
════════════════════════  
💡 _*𝚾_𝚳_𝐃*_  
════════════════════════\n`;

let menuMsg = `

 *COMMANDS*${readmore}
`;

    for (const cat in coms) {
        menuMsg += ` ╭────────❒⁠⁠⁠⁠ *${cat}* ✣`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│➕⁠⁠⁠⁠│▸ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `> 𝚩𝚯𝚻 𝐂𝚪𝚵𝚫𝚻𝚵𝐃 𝚩𝐘 ⨭ 𝐑𝐀𝐁𝐁𝐈_𝐗𝐌𝐃 ⨮
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *R A B B I*, déveloper ⨭ 𝐑𝐀𝐁𝐁𝐈 𝐓𝐄𝐂𝐇 ⨮" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *msela-chui-v2*, déveloper mselachui Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {

    repondre(infoMsg + menuMsg);

}

});
