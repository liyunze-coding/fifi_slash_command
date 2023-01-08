const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('soulmate')
    .setDescription('find your soulmate in the server!'),
    category: 'Fun',
    async execute(client,interaction) {
        const channel = interaction.channel;

        channel.messages.fetch({ limit: 100 }).then(messages => {
            //Iterate through the messages here with the variable "messages".
            let members = [];
            messages.forEach(message => {
                if (!message.author.bot && !members.includes(message.author.id)){
                    members.push(message.author.id);
                }
            })
            return members
        }).then(m => {
            let soulmate = interaction.guild.members.cache.get(m[Math.floor(Math.random()*m.length)]);

            interaction.reply({embeds:[
                new MessageEmbed()
                .setColor('#fafafa')
                .setDescription(`Oh my god ${interaction.member}, you won't believe this but ${soulmate} is your soulmate!`)
            ]})
        })
        
    }
}