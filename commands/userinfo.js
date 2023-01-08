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
    .setName('userinfo')
    .setDescription('get info about the member!')
    .addUserOption((option) => {
        return option
        .setName("member")
        .setDescription('member whose details you want')
        .setRequired(false)
    }),
    category: 'Info',
    async execute(client,interaction) {
        const member = interaction.options.getMember('member') || interaction.member;
        
        //Member variables
        var joined = new Intl.DateTimeFormat('en-UK').format(member.joinedAt);
        var role = member.roles.cache
            .filter(r => r.id !== interaction.guild.id)
            .map(r => r)
            .join(", ") || 'none';
        
        var created = formatTime(member.user.createdAt);

        var status = member.presence ? member.presence.status : 'offline';

        if (member.roles.cache.size > 35) role = 'too many roles to display';

        const embed = new MessageEmbed()
            .setColor("#2f3135")
            .setFooter({text:member.displayName,iconURL:member.user.displayAvatarURL()})
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User info', 
            `**ID:** ${member.user.id}
            **Discord Tag:** ${member.user.tag}
            **Status:** ${status}
            **Created At:** ${created}`, false)

            .addField('Member info', 
            `**Display name:** ${member.displayName}
            **Joined at:** ${joined}`, false)
            .addField(`Roles [${member.roles.cache.size-1}]`,`${role}`,false);
        interaction.reply({embeds:[embed], ephemeral:false})
    }
}