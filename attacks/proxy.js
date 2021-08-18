const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

  if(message.channel.name == "〔💣〕attack-hub"){
    


    var url = "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4&timeout=10000&country=all"
    const file = fs.createWriteStream("socks4.txt")
    fs.writeFileSync('socks4.txt', ' ');

    const request = https.get(url, function(response) {
        response.pipe(file)
        console.log(`[${moment.utc(Date.now())}] [*] Sucsessfuly scraped proxies from database.`)
    });
    message.channel.send("〔:sparkles:〕Starting...")
    message.channel.send("〔✨〕**Sucsessfuly scraped proxies from database**")

  } else {

    message.channel.send("〔:sparkles:〕You cannot run that here")
  }

}


module.exports.help = {
    name: "syncproxy",
    aliases: ["upd"]
}