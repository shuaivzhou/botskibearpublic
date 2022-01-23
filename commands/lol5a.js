module.exports = {
    name: 'lol5a',
    description: 'begin search for league of legends aram queue',
    async execute(client, message, cmd, args, Discord) {
        const react_emoji = '👍'
        
        let p0 = 'None'
        let p1 = 'None'
        let p2 = 'None'
        let p3 = 'None'
        let p4 = 'None'
        let p5 = 'None'
        let p_counter = 0
        const players = [p1, p2, p3, p4, p5];

        message.delete();

        let lolq_embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('League of Legends ARAM Queue')
            .setDescription('React with ' + react_emoji + ' to join the queue.\n Current player counter: ' + p_counter +
            '\n 1. ' + p1 +
            '\n 2. ' + p2 +
            '\n 3. ' + p3 +
            '\n 4. ' + p4 +
            '\n 5. ' + p5);
        
        let message_embed = await message.channel.send({embeds: [lolq_embed]});
        message_embed.react(react_emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.id !== message_embed.id) return;
 
            if (reaction.message.channel.id === message.channel.id) {
                if (reaction.emoji.name === react_emoji) {

                    p_new = '<@' + reaction.message.guild.members.cache.get(user.id) + '>';

                    for (let i = 0; i < players.length; i++) {
                        if (players[i] === p0) {
                            players[i] = p_new;
                            p_counter = p_counter + 1;
                            break;
                        }
                    }

                    await lolq_embed.setDescription('React with ' + react_emoji + ' to join the queue.\n Current player counter: ' + p_counter +
                    '\n 1. ' + players[0] +
                    '\n 2. ' + players[1] +
                    '\n 3. ' + players[2] +
                    '\n 4. ' + players[3] +
                    '\n 5. ' + players[4]);

                    await message_embed.edit({embeds: [lolq_embed]});

                    if (players[4] !== p0) {
                        message_embed.delete();
                        await message.channel.send(players[0] + ', ' + players[1] + ', ' + players[2] + ', ' + players[3] + ', ' + players[4] + ', ' + 'your League of Legends ARAM lobby of 5 has been created.');
                    }
                }
            } else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.id !== message_embed.id) return;
 
            if (reaction.message.channel.id === message.channel.id) {
                if (reaction.emoji.name === react_emoji) {

                    for (let i = 0; i < players.length; i++) {
                        if (players[i] === '<@' + reaction.message.guild.members.cache.get(user.id) + '>') {
                            for (let j = i; j < players.length - 1; j++) {
                                players[j] = players[j + 1];
                            }
                            players[players.length - 1] = p0;
                            p_counter = p_counter - 1;
                            break;
                        }
                    }

                    await lolq_embed.setDescription('React with ' + react_emoji + ' to join the queue.\n Current player counter: ' + p_counter +
                    '\n 1. ' + players[0] +
                    '\n 2. ' + players[1] +
                    '\n 3. ' + players[2] +
                    '\n 4. ' + players[3] +
                    '\n 5. ' + players[4]);

                    await message_embed.edit({embeds: [lolq_embed]});
                }
            } else {
                return;
            }
        });
    }
}
