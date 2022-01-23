module.exports = {
    name: 'poll',
    description: 'create a yes/no poll',
    async execute(client, message, cmd, args, Discord) {
        const poll_desc_embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Initiate Poll")
            .setDescription("%poll [QUESTION] to create a simple yes or no poll.");

        if (!args[0]) {
            return message.channel.send({embeds: [poll_desc_embed]});
        }

        const msgArgs = args.slice(0).join(" ");

        const poll_embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('📋 **' + 'Poll' + '** 📋')
            .setDescription(msgArgs)
        await message.channel.send({embeds: [poll_embed]}).then(messageReaction => {
            messageReaction.react('👍');
            messageReaction.react('👎');
            message.delete(3000).catch(console.error);
        });
    }
}
