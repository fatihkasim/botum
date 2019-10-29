const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require("quick.db");
const request = require("request");
const ms = require("parse-ms");
const express = require("express");
const http = require("http");
const app = express();
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



app.listen(process.env.PORT);
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 5000);




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selâmün aleyküm') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa millet') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selâmün aleyküm millet') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea millet') {
		msg.reply('ve aleyküm selâm!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selâmün aleyküm günaydın') {
		msg.reply('ve aleyküm selâm sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa günaydın') {
		msg.reply('ve aleyküm selâm sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea günaydın') {
		msg.reply('ve aleyküm selâm sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gm') {
		msg.reply('sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa millet günaydın') {
		msg.reply('ve aleyküm selâm sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salamun aleyküm günaydın') {
		msg.reply('ve aleyküm selâm sanada günaydın!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi bayramlar') {
		msg.reply('iyi bayramlar hacı abi!');
		}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi bayramlar herkese') {
		msg.reply('iyi bayramlar hacı abi!');
		}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.author.id === ayarlar.sahip) permlvl = 1;
  return permlvl;
};



client.login(ayarlar.token);