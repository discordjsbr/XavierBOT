const Discord = require('discord.js')

module.exports = (client, guild) => {
    let canal = client.channels.get('832780922961133648')
    canal.send(`Me desculpe senhor.. Mas fui banido/expulso da guilda ${guild.name}`)
}