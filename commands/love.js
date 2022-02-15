module.exports = {
    name: 'love',
    description: 'send random valentines gram',
    async execute(client, message, cmd, args, Discord) {
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const images = [
            'eve_card.png',
            'kaisa_card.png',
            'valantine_gram_2.png',
            'valantine_gram.png',
            'Valentine_Card_2-10.png',
            'valentine.png',
            'valentines day gram (1).png',
            'valentines day gram (2).png',
            'valentines day gram (3).png',
            'valentines day gram (4).png',
            'valentines day gram (5).png',
            'valentines day gram (6).png',
            'valentines day gram (7).png',
            'valentines day gram (8).png',
            'valentines day gram (9).png',
            'valentines day gram (10).png',
            'valentines day gram (11).png',
            'valentines day gram (14).png',
            'valentines day gram (15).png',
            'valentines_day_gram_13.jpeg',
            'valgram.png',
            'viper_card.png',
            'zeri_card.png'
        ];
        
        const path = './valgrams/';

        try {
            const random_image = random(images);
            const file = await new Discord.MessageAttachment(`${path}${random_image}`);
            await message.reply(`${random_image}`);
            await message.reply({files: [file]});
        } catch (err) {
            message.reply('Error, please try again.');
            // console.log(err);
        }
        
        // const embed = new Discord.MessageEmbed()
        //     .setTitle('Valentines Grams')
        //     .attachFiles(file)
        //     .setImage(`attachment://${file}`);
    }
}
