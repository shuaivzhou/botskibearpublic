module.exports = {
    name: 'lol10a',
    description: 'begin search for league of legends aram in-house',
    async execute(client, message, cmd, args, Discord) {
        const react_emoji = '👍'
        
        let p0 = 'None'
        let p1 = 'None'
        let p2 = 'None'
        let p3 = 'None'
        let p4 = 'None'
        let p5 = 'None'
        let p6 = 'None'
        let p7 = 'None'
        let p8 = 'None'
        let p9 = 'None'
        let p10 = 'None'
        let p_counter = 0
        const players = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

        message.delete();

        let lolq_embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('League of Legends ARAM In-House')
            .setDescription('React with ' + react_emoji + ' to join the queue.\n Current player counter: ' + p_counter +
            '\n 1. ' + p1 +
            '\n 2. ' + p2 +
            '\n 3. ' + p3 +
            '\n 4. ' + p4 +
            '\n 5. ' + p5 +
            '\n 6. ' + p6 +
            '\n 7. ' + p7 +
            '\n 8. ' + p8 +
            '\n 9. ' + p9 +
            '\n 10. ' + p10);
        
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
                    '\n 5. ' + players[4] +
                    '\n 6. ' + players[5] +
                    '\n 7. ' + players[6] +
                    '\n 8. ' + players[7] +
                    '\n 9. ' + players[8] +
                    '\n 10. ' + players[9]);

                    await message_embed.edit({embeds: [lolq_embed]});

                    if (players[9] !== p0) {
                        message_embed.delete();
                        await message.channel.send(players[0] + ', ' + players[1] + ', ' + players[2] + ', ' + players[3] + ', ' + players[4] + ', ' + players[5] + ', ' + players[6] + ', ' + players[7] + ', ' + players[8] + ', ' + players[9] + ', ' + 'your League of Legends ARAM in-house lobby of 10 has been created.');
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
                    '\n 5. ' + players[4] +
                    '\n 6. ' + players[5] +
                    '\n 7. ' + players[6] +
                    '\n 8. ' + players[7] +
                    '\n 9. ' + players[8] +
                    '\n 10. ' + players[9]);

                    await message_embed.edit({embeds: [lolq_embed]});
                }
            } else {
                return;
            }
        });
    }
}
