const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi =args.slice(0).join(' ');


  if(sayi.length < 1) {
    return message.reply('Kaç adet mesaj silmek istiyorsunuz?')
  } else {
        message.channel.bulkDelete(sayi + 1);
      message.channel.send('**' + sayi + '** adet mesaj silindi!').then(msg => {
	      msg.delete(5000)
      });
    }
  };



exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['delete'],
  permLevel: 1 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};