const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription(`pong!`),
    category: 'Misc',
    async execute(client,interaction) {
        const msg = await interaction.reply({
            embeds:[
                new MessageEmbed()
                .setTitle('Pinging...')
                .setColor('#2f3135')
            ], 
            fetchReply: true,
            ephemeral:false
        });

        await interaction.editReply({
            embeds:[
                new MessageEmbed()
                .setTitle('Pong! :ping_pong:')
                .setColor('#2f3135')
                .setDescription(`Bot Latency: \`${msg.createdTimestamp - interaction.createdTimestamp} ms\`\nWebsocket Latency: \`${Math.round(client.ws.ping)} ms\``)
            ]
        })
    }
}