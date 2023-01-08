const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const kms = [
    'https://media0.giphy.com/media/7K95K2SuBOaBaXXlGH/giphy.gif',
    'https://c.tenor.com/kdNA2sR6X0wAAAAC/suicide.gif',
    'https://media4.giphy.com/media/l2JeiuwmhZlkrVOkU/200.gif',
    'https://c.tenor.com/NEf-60XENCMAAAAC/suicide-die.gif',
    'https://25.media.tumblr.com/tumblr_m805oqAd5t1r1s7izo1_500.gif',
    'https://c.tenor.com/SPl5QtWURCgAAAAM/spongebob-stabbing-himself-minul.gif',
    'https://c.tenor.com/MRyVTolUn9YAAAAd/homer-hang.gif',
    'https://c.tenor.com/SRqgL_q-IosAAAAC/funny-suicide.gif',
    'https://c.tenor.com/KTmjUw5J2kAAAAAC/dead-spongebob.gif',
    'https://images-ext-2.discordapp.net/external/0wz96WcxtT-mi53YoETX48LwV7QZaD3QzUr9O1uiEQw/https/c.tenor.com/HWMZMcpNktUAAAAC/freeziing-frozen-face.gif',
    'https://images-ext-1.discordapp.net/external/3opwDqm79x2vvJGXCeewJzNamQG7lGvnmZ6HHWB8Egg/https/heroeshearth.com/media/2018/12/19/umrk4aplxt2hlopb6biq.gif',
    'https://images-ext-2.discordapp.net/external/E-9FYd1fzXBPUESFwvt-FTuwsuiLK-WOIzTULMpM2tU/https/c.tenor.com/OdehztbrpecAAAAC/anime-falling.gif',
    'https://images-ext-2.discordapp.net/external/HpFdnNxl6T2e62bNq_Asue4m4sGKkOIuaGgze-7oQCw/https/c.tenor.com/b3wxV2EtG3AAAAAC/falling-anime.gif',
    'https://images-ext-2.discordapp.net/external/CRW8Ld8KVHGLQBqaJbGQ91QeSZFf3A1pmRJ5Ms_cxjs/https/c.tenor.com/KC8vwHb-LKgAAAAC/anime-fall.gif',
    'https://images-ext-2.discordapp.net/external/l15e5zao_qTdIKBSCbr_unETLDP7mzfR28MzhDD6FmA/https/i.gifer.com/O81m.gif'
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kms')
    .setDescription(`commit unalive!`),
    category: 'Fun',
    async execute(client,interaction) {
        let gif = kms[Math.floor(Math.random()*kms.length)];

        interaction.reply({embeds:[
            new MessageEmbed()
            .setAuthor({name:`${interaction.user.username} no longer wants to live!`, iconURL:interaction.user.avatarURL()})
            .setImage(gif)
            .setColor('#2f3135')
        ]})
    }
}