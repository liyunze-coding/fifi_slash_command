const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const hugs = [
    'https://c.tenor.com/OaSQqWO4-YUAAAAC/snuggle-anime.gif',
    'https://c.tenor.com/T8KhPrFgjSkAAAAC/sakura-trick-yuri.gif',
    'https://c.tenor.com/A6dBlV-8YFcAAAAC/yuri-cute.gif',
    'https://c.tenor.com/alyOn8xsmKgAAAAC/yuri-anime.gif',
    'https://c.tenor.com/wDTx4fVkJsUAAAAC/anime-hug.gif',
    'https://i.pinimg.com/originals/f2/e6/7f/f2e67f04b6a0ab30870011bd17190409.gif',
    'https://thumbs.gfycat.com/PoliticalCrazyFlycatcher-max-1mb.gif',
    'https://thumbs.gfycat.com/BeneficialValidIcelandgull-max-1mb.gif',
    'https://i.pinimg.com/originals/6e/a9/7b/6ea97b29209318c70ae8916ceb19827a.gif',
    'https://media1.giphy.com/media/NTBFwChJg9lKM/giphy.gif',
    'https://i.pinimg.com/originals/06/dd/8f/06dd8f976b7353d69aec173b44927ef4.gif',
    'https://i.pinimg.com/originals/1a/65/31/1a65319302b9e1c86a99a39e9a81084e.gif',
    'https://c.tenor.com/2_VJIEisriMAAAAC/yaoi-anime.gif',
    'https://data.whicdn.com/images/212052692/original.gif',
    'https://lh4.googleusercontent.com/proxy/yMgBw-m6ydjtt0F6xCX1SCfX91rWJuGdLy7bZSF5g0Vh10wjFoB3HH7l0K0SFKbmM8jE36hYDdUS1Sw9I8Qx_KZ7HP2J7igeyHbZ0s--kVACgTng4HRjnhkeUbiJ3TICWyvnKvdXVA5K3JS3ZUkkO0I=s0-d',
    'https://acegif.com/wp-content/gif/anime-hug-59.gif',
    'https://pa1.narvii.com/6358/7957f0766674be87b6a5158d999c22ba85b075d4_hq.gif',
    'http://i.imgur.com/lU4wt59.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('give your friends a hug!')
    .addUserOption((option) => {
        return option
        .setName("member")
        .setDescription('member you want to hug')
        .setRequired(true)
    }),
    category: 'Fun',
    async execute(client,interaction) {
        const member = interaction.options.getMember('member') || interaction.member;

        if (member.id === interaction.member.id && interaction.member.id != '336488849217945600'){
            return interaction.reply({content:`${interaction.member} please tag someone **else** to hug!`, ephemeral:true});
        }
        
        if (member.user.bot) {
            return interaction.channel.send(`${interaction.member} you can't hug a bot!`);
        }

        gif = hugs[Math.floor(Math.random()*hugs.length)];
        
        return interaction.reply({embeds:[
            new MessageEmbed()
            .setAuthor({name:`${interaction.user.username} hugged ${member.user.username}!`, iconURL:interaction.member.avatarURL()})
            .setImage(gif)
            .setColor('#fafafa')
        ], 
        content:`${member}`,
        ephemeral:false});
    }
}