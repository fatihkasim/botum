const Discord = require('discord.js');


exports.run = function(client, message) {
    message.channel.send('pingim ' + client.ping + ' msdir.')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['p'],
  permLevel: 1 
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};