const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('creates an embed')
    .addStringOption(option => {
        return option
        .setName("title")
        .setDescription('title of embed')
    })
    .addStringOption(option => {
        return option
        .setName("description")
        .setDescription('description of embed')
    })
    .addChannelOption(option => {
        return option
        .setName("channel")
        .setDescription('the channel to be sent to')
    })
    .addStringOption(option => {
        return option
        .setName("thumbnail")
        .setDescription('the thumbnail of embed')
    })
    .addStringOption(option => {
        return option
        .setName("color")
        .setDescription('the color of embed')
    })
    .addStringOption(option => {
        return option
        .setName("footer-text")
        .setDescription('the footer text of embed')
        .setRequired(false)
    })
    .addStringOption(option => {
        return option
        .setName("footer-img")
        .setDescription('the footer image of embed')
        .setRequired(false)
    })
    .addStringOption(option => {
        return option
        .setName("author-text")
        .setDescription('the author of embed')
        .setRequired(false)
    })
    .addStringOption(option => {
        return option
        .setName("author-img")
        .setDescription('the author image of embed')
        .setRequired(false)
    }),
    category: 'Mods only',
    async execute(client,interaction) {
        if (!interaction.member.permissions.has(`MANAGE_GUILD`)){
            return interaction.reply({
                content: `Sorry you do not have permissions to use this command`,
                ephemeral:true
            })
        }
        const embed = new MessageEmbed();
        let color = interaction.options.getString('color');
        let title = interaction.options.getString('title');
        let description = interaction.options.getString('description');
        let channel = interaction.options.getChannel('channel');
        let thumbnail = interaction.options.getString('thumbnail');
        let footer = interaction.options.getString('footer-text');
        let footer_icon = interaction.options.getString('footer-img');
        let author = interaction.options.getString('author-text');
        let author_icon = interaction.options.getString('author-img');

        if (color){
            if (!color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){
                return interaction.reply({
                    content: `Invalid hex color! Example hex color: #fafafa`,
                    ephemeral: true
                })
            } else {
                embed.setColor(color);
            }
        }

        if (title) embed.setTitle(title);
        if (description){
            while (description.includes('\\n')){
                description = description.replace('\\n', '\n');
            }
            embed.setDescription(description);
        }
        if (thumbnail) embed.setThumbnail(thumbnail);
        if (footer || footer_icon){
            let footer_obj = {};

            if (footer_icon && !footer){
                footer = '\u200b'
            }

            if (footer) footer_obj.text = footer;
            if (footer_icon) footer_obj.iconURL = footer_icon;

            embed.setFooter(footer_obj);
        }
        if (author || author_icon){
            let author_obj = {};

            if (author_icon && !author){
                author = '\u200b'
            }

            if (author) author_obj.name = author;
            if (author_icon) author_obj.iconURL = author_icon;

            embed.setAuthor(author_obj);
        }
        
        if (channel){
            channel.send({embeds:[embed]});
        } else {
            interaction.channel.send({embeds:[embed]});
        }
        interaction.reply({
            content: `Sent!`,
            ephemeral:true
        })
    }
}