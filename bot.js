const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
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

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('ase'); 
		} else {
		msg.reply('ase');
		}
	}
});









client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SA') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('as ^^'); 
		} else {
		msg.reply('as ^^');
		}
	}
});






client.on('message', msg => {
  if (msg.content.toLowerCase() === 'küfür') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('uyarıldın  ah sadece şaka idi^^'); 
		} else {
		msg.reply('uyarıldın  ah sadece şaka idi^^');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kufur') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('uyarıldın  ah sadece şaka idi^^'); 
		} else {
		msg.reply('uyarıldın  ah sadece şaka idi^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sex') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('komik mi'); 
		} else {
		msg.reply('komik mi');
		}
	}
});





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sex') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('komik mi'); 
		} else {
		msg.reply('komik mi');
		}
	}
});




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'enes') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('https://www.google.com.tr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiZ85DCjvncAhUNUlAKHQ-5BoYQjRx6BAgBEAU&url=http%3A%2F%2Fincisozluk.com.tr%2Fw%2Fenes-batur-vs-allah-kim-kazan%25C4%25B1r%2F%26list_type%3Dsolframe&psig=AOvVaw0dpQrHOqYYSDBCFQLwFx9C&ust=1534767994169965'); 
		} else {
		msg.reply('https://www.google.com.tr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiZ85DCjvncAhUNUlAKHQ-5BoYQjRx6BAgBEAU&url=http%3A%2F%2Fincisozluk.com.tr%2Fw%2Fenes-batur-vs-allah-kim-kazan%25C4%25B1r%2F%26list_type%3Dsolframe&psig=AOvVaw0dpQrHOqYYSDBCFQLwFx9C&ust=1534767994169965');
		}
	}
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tmm') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('hyr');
		}
	}
});







client.on('message', msg => {
  if (msg.content.toLowerCase() === 'edestek') {
		if (!msg.guild.member(msg.author).hasPermission) {
			msg.author.sendMessage('https://discord.gg/9s3Fq7'); 
		} else {
		msg.reply('https://discord.gg/9s3Fq7');
		}
	}
});






client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neden') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('bilmem');
		}
	}
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'exe') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('ne var');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('bana mı dedin? ');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nbr') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('bana mı dedin?');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'evt') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('.');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'evet') {
		if (!msg.guild.member(msg.author).hasPermission) {
			; 
		} else {
		msg.reply('.');
		}
	}
});






