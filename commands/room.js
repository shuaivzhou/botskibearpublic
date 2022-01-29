module.exports = {
    name: 'room',
    description: 'create custom room',
    async execute(client, message, cmd, args, Discord) {
        const room_desc_embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Initiate Room")
            .setDescription("%room [NAME] to create a room opened by person NAME.");

        if (!args[0] || !args[1]) {
            return message.channel.send({embeds: [room_desc_embed]});
        }

        const msgArgs = args.slice(0).join(" ");

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
        let p11 = 'None'
        let p12 = 'None'
        let p13 = 'None'
        let p14 = 'None'
        let p15 = 'None'
        let p16 = 'None'
        let p17 = 'None'
        let p18 = 'None'
        let p19 = 'None'
        let p20 = 'None'
        let p_counter = 0
        const players = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];

        message.delete();

        let room_embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle(msgArgs + '\'s Room')
            .setDescription('React with ' + react_emoji + ' to join the room.\n Current member counter: ' + p_counter +
            '\n 1. ' + p1 +
            '\n 2. ' + p2 +
            '\n 3. ' + p3 +
            '\n 4. ' + p4 +
            '\n 5. ' + p5 +
            '\n 6. ' + p6 +
            '\n 7. ' + p7 +
            '\n 8. ' + p8 +
            '\n 9. ' + p9 +
            '\n 10. ' + p10 +
            '\n 11. ' + p11 +
            '\n 12. ' + p12 +
            '\n 13. ' + p13 +
            '\n 14. ' + p14 +
            '\n 15. ' + p15 +
            '\n 16. ' + p16 +
            '\n 17. ' + p17 +
            '\n 18. ' + p18 +
            '\n 19. ' + p19 +
            '\n 20. ' + p20);
        
        let message_embed = await message.channel.send({embeds: [room_embed]});
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

                    await room_embed.setDescription('React with ' + react_emoji + ' to join the room.\n Current member counter: ' + p_counter +
                    '\n 1. ' + players[0] +
                    '\n 2. ' + players[1] +
                    '\n 3. ' + players[2] +
                    '\n 4. ' + players[3] +
                    '\n 5. ' + players[4] +
                    '\n 6. ' + players[5] +
                    '\n 7. ' + players[6] +
                    '\n 8. ' + players[7] +
                    '\n 9. ' + players[8] +
                    '\n 10. ' + players[9] +
                    '\n 11. ' + players[10] +
                    '\n 12. ' + players[11] +
                    '\n 13. ' + players[12] +
                    '\n 14. ' + players[13] +
                    '\n 15. ' + players[14] +
                    '\n 16. ' + players[15] +
                    '\n 17. ' + players[16] +
                    '\n 18. ' + players[17] +
                    '\n 19. ' + players[18] +
                    '\n 20. ' + players[19]);

                    await message_embed.edit({embeds: [room_embed]});

                    if (players[19] !== p0) {
                        message_embed.delete();
                        await message.channel.send(players[0] + ', ' + players[1] + ', ' + players[2] + ', ' + players[3] + ', ' + players[4] + ', ' + players[5] + ', ' + players[6] + ', ' + players[7] + ', ' + players[8] + ', ' + players[9] + ', ' + players[10] + ', ' + players[11] + ', ' + players[12] + ', ' + players[13] + ', ' + players[14] + ', ' + players[15] + ', ' + players[16] + ', ' + players[17] + ', ' + players[18] + ', ' + players[19] + 'your room of 20 has been created.');
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

                    await room_embed.setDescription('React with ' + react_emoji + ' to join the room.\n Current member counter: ' + p_counter +
                    '\n 1. ' + players[0] +
                    '\n 2. ' + players[1] +
                    '\n 3. ' + players[2] +
                    '\n 4. ' + players[3] +
                    '\n 5. ' + players[4] +
                    '\n 6. ' + players[5] +
                    '\n 7. ' + players[6] +
                    '\n 8. ' + players[7] +
                    '\n 9. ' + players[8] +
                    '\n 10. ' + players[9] +
                    '\n 11. ' + players[10] +
                    '\n 12. ' + players[11] +
                    '\n 13. ' + players[12] +
                    '\n 14. ' + players[13] +
                    '\n 15. ' + players[14] +
                    '\n 16. ' + players[15] +
                    '\n 17. ' + players[16] +
                    '\n 18. ' + players[17] +
                    '\n 19. ' + players[18] +
                    '\n 20. ' + players[19]);

                    await message_embed.edit({embeds: [room_embed]});
                }
            } else {
                return;
            }
        });
    }
}
