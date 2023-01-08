const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('get our server invite URL!'),
    category: 'Misc',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('Invite your friends to the server!')
            .setColor('#2f3135')
            .setDescription(`https://discord.gg/dear`)
            .setThumbnail('https://cdn.discordapp.com/app-icons/884695407316336650/24a1ddb28a8eb586770c92fe1c11b2d7.png?size=512')
        ], ephemeral:false})
    }
}