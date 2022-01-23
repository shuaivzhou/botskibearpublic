module.exports = (client, Discord, message) => {
    const prefix = '~';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(client, message, cmd, args, Discord);
    } catch (err) {
        message.reply('You must use a valid command!');
        // console.log(err);
    }
}
