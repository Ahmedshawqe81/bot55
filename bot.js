const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
