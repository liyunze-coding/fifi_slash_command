const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('get info about me!'),
    category: 'Info',
    async execute(client,interaction) {
        let discord_server= client.guilds.cache.get('940832411531476992');
        let serverCount = client.guilds.cache.size;
        let memberCount = discord_server.memberCount;

        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('__Bot info__')
            .setColor(`#2f3135`)
            .setDescription(`★ Bot developer: **@ryan7#3090** (336488849217945600)
            ★ Developing since: **5/5/2022**
            ★ Sponsored by: **[Oflaeti](discord.gg/dear)**
            ★ Hosted on: **Heroku**`)
            .addField(`Members in my Discord`, memberCount.toString(), false)
            .addField('Servers I am in:', serverCount.toString(), false)
            .setThumbnail('https://cdn.discordapp.com/app-icons/884695407316336650/24a1ddb28a8eb586770c92fe1c11b2d7.png?size=512')
        ], ephemeral:false})
    }
}