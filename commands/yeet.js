const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const yeets = [
    'https://c.tenor.com/OzXPgbBLTSEAAAAC/yeet-rafiki.gif',
    'https://thumbs.gfycat.com/AmazingDaringDungbeetle-max-1mb.gif',
    'https://c.tenor.com/mlMJ08Y5-BcAAAAM/see-ya-ya-yeet.gif',
    'https://media0.giphy.com/media/5PhDdJQd2yG1MvHzJ6/giphy.gif',
    'https://www.icegif.com/wp-content/uploads/icegif-54.gif',
    'https://i.imgflip.com/452p3l.gif',
    'https://thumbs.gfycat.com/CarefulKeenArchaeopteryx-size_restricted.gif',
    'https://c.tenor.com/CYnTObG9PFMAAAAC/this-bitch-empty-yeet.gif',
    'https://images-ext-1.discordapp.net/external/KovilESEhW6wZI2EWy3It_nbr1omFuMtZhGMhUs_m64/https/c.tenor.com/AVkcj1Ex1qIAAAAd/yeet-anime.gif',
    'https://images-ext-1.discordapp.net/external/I4p1glKnbep0AbBj3tQz5OfOSGtggX0BkOU7-t3aLB4/https/c.tenor.com/D34kJelwaWsAAAAd/yeet-anime.gif',
    'https://images-ext-2.discordapp.net/external/siAljHcctuskFps2IS8N3nzZxJka2tjF8z4D0Ou6euw/https/c.tenor.com/bpgPEPfFlnIAAAAd/yeet-anime.gif',
    'https://images-ext-1.discordapp.net/external/ciyeHepZnEW8PH8Pcxiu7jHQuoTs2I2jaodW3wd6VA4/https/c.tenor.com/X_eKFFRYE1kAAAAC/anime-yeet.gif',
    'https://images-ext-1.discordapp.net/external/i9-1aH-OsgCNUY_F1j5y-4uZIQdqUeVs9PPIR7JfBW4/https/c.tenor.com/gISSJc70lH4AAAAM/yeet-naruto.gif',
    'https://images-ext-1.discordapp.net/external/SiWJMv9kR1iIa-ghYNUgMWBnBvFdAVCcF4XkGiy4g0g/https/c.tenor.com/CpfHvvJBoxwAAAAC/swim-throw.gif',
    'https://images-ext-1.discordapp.net/external/79igLs22GJFHnSjE3PkkYs3jC7_Vv3Qp9mvLvWO8PHQ/https/i.pinimg.com/originals/b3/90/d8/b390d894d375dedd545e64ae342b05f1.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('yeet')
    .setDescription('YEET')
    .addUserOption((option) => {
        return option
        .setName("member")
        .setDescription('the member you wanna yeet')
        .setRequired(true)
    }),
    category: 'Fun',
    async execute(client,interaction) {
        const member = interaction.options.getMember(`member`);

        let gif = yeets[Math.floor(Math.random()*yeets.length)];

        return interaction.reply({embeds:[
            new MessageEmbed()
            .setAuthor({name:`${interaction.user.username} yeeted ${member.user.username}!`, iconURL:interaction.member.avatarURL()})
            .setImage(gif)
            .setColor('#2f3135')
        ], content: member.toString()})
    }
}