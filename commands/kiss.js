const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const yuri_kisses = [
    'https://c.tenor.com/dp6A2wF5EKYAAAAC/anime-love.gif',
    'https://c.tenor.com/YTsHLAJdOT4AAAAC/anime-kiss.gif',
    'https://c.tenor.com/bKAjg75w-t0AAAAC/sakura-trick-kiss.gif',
    'https://c.tenor.com/1JaTz9F5q8EAAAAC/yuri-couple.gif',
    'https://c.tenor.com/CtpjMGItICQAAAAC/anime-kissing.gif',
    'https://c.tenor.com/_QYEmI3cT2wAAAAC/kiss-kissing.gif',
    'https://c.tenor.com/TK5eryNMBz0AAAAC/kiss-kiss-girl.gif',
    'https://c.tenor.com/WxITy4XYFVUAAAAC/kiss-yuri.gif',
    'https://c.tenor.com/USApNIBuIg4AAAAC/jail-marnie.gif',
    'https://c.tenor.com/-ScgZrF7Y0wAAAAC/yuri-kiss.gif',
    'https://c.tenor.com/sihR3Fv5t8AAAAAd/bloom-into-you-yagate-kimi-ni-naru.gif',
    'https://c.tenor.com/ErAPuiWY46QAAAAC/kiss-anime.gif',
    'https://c.tenor.com/hXGYVAf56sAAAAAC/yuri-kiss.gif',
    'https://c.tenor.com/rc_G8lNUKh8AAAAC/sono-hanabira-ni-kuchizuke-wo-anime.gif',
    'https://c.tenor.com/foUUgL37XJcAAAAC/girl-anime.gif',
    'https://c.tenor.com/WHyz7RccY3UAAAAC/girls-kiss.gif',
    'https://c.tenor.com/NppDCV0aKtsAAAAC/anime-yuri.gif',
    'https://c.tenor.com/7IBrAlZLqhsAAAAd/lesbian.gif',
    'https://c.tenor.com/RoPwXL4U5UAAAAAC/sakura-trick-yuu.gif',
    'https://c.tenor.com/-P82knPil4oAAAAC/girls-lesbian.gif',
    'https://thumbs.gfycat.com/EasygoingIdioticBoto-size_restricted.gif',
    'https://images-ext-2.discordapp.net/external/YXY1VV90-eTeaTczOTssDO4d50Poi79l2NMmKdbbnrs/https/cdn.weeb.sh/images/ryceu6V0W.gif'
]

const yaoi_kisses = [
    'https://i.pinimg.com/originals/55/33/f6/5533f6796eae4c5c19d552d37e16343b.gif',
    'https://c.tenor.com/6xyX2O2K34UAAAAC/anime-yaoi-boy-kiss.gif',
    'https://pa1.narvii.com/6402/46a5f1e3533d342613093c69c7672e5e9d6ac1fd_hq.gif',
    'https://c.tenor.com/9aZN1u0YaEwAAAAC/yaoi-kiss.gif',
    'https://i.makeagif.com/media/12-02-2014/j1Z9lt.gif',
    'https://i.pinimg.com/originals/5a/c9/2c/5ac92c3f46e5c765f7f5473fd19dd15e.gif',
    'https://pa1.narvii.com/6516/47fd76817a345921d05ce82bf862542641e808e1_hq.gif',
    'http://images6.fanpop.com/image/photos/32200000/Kiss-Gifs-hetalia-32228052-500-273.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55660762-c858-4a1b-9239-4e143f216fa4/def1pdg-f8ba5e32-5fd9-407e-8188-81457ec3116e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NjYwNzYyLWM4NTgtNGExYi05MjM5LTRlMTQzZjIxNmZhNFwvZGVmMXBkZy1mOGJhNWUzMi01ZmQ5LTQwN2UtODE4OC04MTQ1N2VjMzExNmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vk8k5hCz16h41k4C_WijaiTfHPzpJXwcBk3DRfm76g8',
    'https://c.tenor.com/MqiRB7LXRzgAAAAC/yaoi-kiss.gif',
    'https://giffiles.alphacoders.com/209/209489.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69c38e58-1d05-4be0-9a31-c72d6db89121/d5dp6md-15245428-c127-43a6-b6ce-3e54e883432d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5YzM4ZTU4LTFkMDUtNGJlMC05YTMxLWM3MmQ2ZGI4OTEyMVwvZDVkcDZtZC0xNTI0NTQyOC1jMTI3LTQzYTYtYjZjZS0zZTU0ZTg4MzQzMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GccP6e6XgHiP39RylDpBUxakDMz3Lgo34E4duXLfgBg',
    'https://c.tenor.com/toaZg8mmaQ8AAAAd/yaoi-boyslove.gif',
    'https://c.tenor.com/ffaqXkH9G6gAAAAC/kiss-gay.gif',
    'https://i.kym-cdn.com/photos/images/newsfeed/000/978/068/2a8.gif',
    'https://c.tenor.com/hUCaXjpdVE0AAAAC/yaoi-kissing.gif',
    'https://c.tenor.com/UcxYMJQRg_cAAAAC/gai-kiss.gif',
    'https://i.pinimg.com/originals/f0/20/a0/f020a0bcefddd6c3cc4aa27d42d8379a.gif',
    'https://pic1.mangapicgallery.com/r/album/1d/raw_/1372009_8923596.gif',
    'https://i.pinimg.com/originals/63/8e/ea/638eead746183c2b91286700aebe3cd3.gif'
]

const kisses = yuri_kisses.concat(yaoi_kisses);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('give your homie a kiss!')
    .addUserOption((option) => {
        return option
        .setName("member")
        .setDescription('specify the member you want to kiss')
        .setRequired(true)
    })
    .addStringOption((option) => {
        return option
        .setName("yaoi_yuri")
        .setDescription('specify if you want yaoi or yuri kiss')
        .setRequired(false)
    }),
    category: 'Fun',
    async execute(client,interaction) {
        const member = interaction.options.getMember('member') || interaction.member;
        const yuri_or_yaoi = interaction.options.getString('yaoi_yuri');

        if (member.id === interaction.member.id && interaction.member.id != '336488849217945600'){
            return interaction.reply({content:`${interaction.member} please tag someone **else** to kiss!`, ephemeral:true});
        }
        
        if (member.user.bot) {
            return interaction.channel.send(`${interaction.member} you can't kiss a bot!`);
        }

        let gif;
        if (yuri_or_yaoi){
            if (yuri_or_yaoi.toLowerCase() === 'yuri'){
                gif = yuri_kisses[Math.floor(Math.random()*yaoi_kisses.length)];
            } else if (yuri_or_yaoi.toLowerCase() === 'yaoi') {
                gif = yaoi_kisses[Math.floor(Math.random()*yaoi_kisses.length)];
            }
        } else {
            gif = kisses[Math.floor(Math.random()*kisses.length)];
        }
        
        return interaction.reply({embeds:[
            new MessageEmbed()
            .setAuthor({name:`${interaction.user.username} kissed ${member.user.username}!`, iconURL:interaction.member.avatarURL()})
            .setImage(gif)
            .setColor('#fafafa')
        ], 
        content:`${member}`,
        ephemeral:false});
    }
}