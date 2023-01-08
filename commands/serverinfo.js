const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

function formatTime(timestamp){
    let date = new Date(timestamp);
    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();

    return `${day} ${month} ${year}`
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('get info about the server!'),
    category: 'Info',
    async execute(client,interaction) {
        const guild = interaction.guild;
        let icon_url = guild.iconURL({
            dynamic:true,
            size:4096,
            format:'png'
        });

        const created = formatTime(guild.createdAt);

        embed = new MessageEmbed()
            .setColor("#2f3135")
            .addField("Server Info",`**Name**: ${guild.name}
            **ID:** ${guild.id}
            **Owner:** ${guild.members.cache.get(guild.ownerId)}
            **No. of members:** ${guild.memberCount}
            **Rules Channel:** ${guild.rulesChannel || 'Not found'}
            **Created at:** ${created}`)
            .setThumbnail(icon_url);

        interaction.reply({embeds:[embed], ephemeral:false})
    }
}