const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('https://www.instagram.com/fatihkasm/')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['insta' , 'ins'],
  permLevel: 0 
};

exports.help = {
  name: 'instagram',
  description: 'İnstagram Adresimizi Paylaşır',
  usage: 'instagram'
};