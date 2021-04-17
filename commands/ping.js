module.exports.run = async (client, message, args) => {
    message.reply('Calculando o ping...').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
        resultMessage.edit(`Latência do bot: ${ping}ms, Latência da API : ${client.ws.ping}ms`)
   })
  }