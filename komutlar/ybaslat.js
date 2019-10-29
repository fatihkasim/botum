const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("[BOT] Yeniden başlatılıyor!!!").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor!!!");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['reboot'],
  permLevel: 1
};

exports.help = {
  name: 'ybaslat', 
  description: 'Botu yeniden başlatır',
  usage: 'ybaslat'
};