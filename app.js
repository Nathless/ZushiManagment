const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
});

client.on('message', message => {
    let sender = message.author;
    if (sender.bot) return;
        

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`);

        }

    })
