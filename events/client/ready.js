module.exports = (client, message, cmd, args, Discord) => {
    const fs = require('fs');

    console.log('Botski Bear is online!');

    client.user.setActivity("~help", {
        type: "STREAMING",
        url: "https://www.twitch.tv/berkeley_legends"
    });
}
