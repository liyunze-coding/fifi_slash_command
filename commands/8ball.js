const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const replies = ['No, not really?', 'I think so?','Yes.','NO.','Why are you asking me that-',' *dead* '];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription(`ask me a yes or no question and I'll answer it`)
    .addStringOption((option) => {
        return option
        .setName("question")
        .setDescription('Ask a yes or no question')
        .setRequired(true)
    }),
    category: 'Fun',
    async execute(client,interaction) {
        let question = interaction.options.getString('question');

        let answer = replies[Math.floor(Math.random() * replies.length)];
        const embed = new MessageEmbed()
        .setDescription(`**Question**: ${question}\n**Answer**: ${answer}`)
        .setColor(`#2f3135`)

        interaction.reply({embeds:[embed]});
    }
}