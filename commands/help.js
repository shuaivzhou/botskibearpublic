module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: 'sends the list of commands',
    execute(client, message, cmd, args, Discord) {
        // const help_embed = new Discord.MessageEmbed()
        // .setColor('#003262')
        // .setTitle('Botski Bear Commands')
        // .setURL('https://tinyurl.com/BotskiBearCommands')
        // .setDescription('<https://tinyurl.com/BotskiBearCommands>')
        // .setImage('https://c.tenor.com/goWZJmy_tNsAAAAM/sanch-sanchovies.gif');

        const help_embed = new Discord.MessageEmbed()
        .setColor('#003262')
        .setTitle('Botski Bear Commands')
        .setURL('https://tinyurl.com/BotskiBearCommands')
        .setDescription('<https://tinyurl.com/BotskiBearCommands>\nPrefix: ~')
        .addFields(
            {name: '~help', value: 'List of commands'},
            {name: '~poll', value: 'Create a yes/no poll'},
            {name: '~lol5', value: 'Begin search for League of Legends Summoners Rift queue'},
            {name: '~lol5a', value: 'Begin search for League of Legends ARAM queue'},
            {name: '~lol10', value: 'Begin search for League of Legends Summoners Rift in-house'},
            {name: '~lol10a', value: 'Begin search for League of Legends ARAM in-house'},
            {name: '~val5', value: 'Begin search for Valorant queue'},
            {name: '~val10', value: 'Begin search for Valorant in-house'}
        );

        message.channel.send({embeds: [help_embed]});
    }
}
