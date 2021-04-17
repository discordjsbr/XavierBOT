const Discord = require('discord.js');
const config = require('./config.json');
const fs = require("fs");


const client = new Discord.Client();
client.config = config;
client.utils = new Discord.Collection()
client.commands = new Discord.Collection();

//Command Handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log("------------------------------")
    console.log("       Event Handler          ")
    console.log(`Carregando ${eventName}.js`);
    console.log("------------------------------")
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log("------------------------------")
    console.log("       Command Handler        ")
    console.log(`Carregando ${commandName}.js`);
    console.log("------------------------------")
    client.commands.set(commandName, props);
  });
});

client.login(config.token)