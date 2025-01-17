"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🫀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'RABBI_XMD IS ALIVE... \n\n\nGO GITHUB AND SEARCH RABBI_XMD FORK THE REPO DEPLOY AND DM FOR YOUR REWARD\n\n\n';
    let d = '                                                                           CREATED BY RABBI HIMSELF';
    let varmess = z + d;
    var video = 'https://i.imgur.com/UfpoNZT.mp4';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
