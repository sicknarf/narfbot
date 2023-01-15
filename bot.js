// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const Discord = require('discord.js');
const client = new Discord.Client({ 
    intents: [
        Discord.GatewayIntentBits.Guilds, 
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


// ENTER CODE BELOW =============

client.on('messageCreate', msg => {
    // You can view the msg object here with console.log(msg)
    // console.log(msg)
    // msg.channel.send('this is a bot in test')
    if(msg.author.id === process.env.BOT_ID){
        return
    }
    console.log(msg)
    // if (msg.content === 'Hello') {
    //     msg.channel.send(`Hello ${msg.author.username}`);
    // }
    if (msg.author.id === process.env.CAITLIN_ID){
        let caitlinRandomNo = Math.floor(Math.random() * 1001)
        if(caitlinRandomNo > 800){
            msg.channel.send('Caitlin, have you been behaving?')
        }
    } 

    let randomNo = Math.floor(Math.random() * 1001)
    if (randomNo > 900){
        buttArray = msg.content.split(' ')
        newNo = Math.floor(Math.random()*buttArray.length)
        buttArray[newNo] = 'butt'
        msg.channel.send(buttArray.join(' '))
    }
    });

    // ENTER CODE ABOVE =============


// Log In our bot

client.login(process.env.CLIENT_TOKEN);