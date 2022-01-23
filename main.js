const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client(
    {allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_PRESENCES',
        'GUILD_MEMBERS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_VOICE_STATES'
    ],
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ],
    }
);

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);
