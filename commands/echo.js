const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('echoes your message')
    .addStringOption((option) => {
        return option
        .setName("message")
        .setDescription('the message to echo')
        .setRequired(true)
    }),
    category: 'Mods only',
    async execute(client,interaction) {
        if (!interaction.member.permissions.has(`MANAGE_GUILD`) && interaction.member.id !== '336488849217945600'){
            return interaction.reply({
                content: `Sorry you do not have permissions to use this command`,
                ephemeral:true
            })
        }

        interaction.channel.send(interaction.options.getString('message'));

        interaction.reply({
            content: `Sent!`,
            ephemeral:true
        })
    }
}