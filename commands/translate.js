const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate');
const alias = {'afrikaans': 'af', 'albanian': 'sq', 'arabic': 'ar', 'azerbaijani': 'az', 'basque': 'eu', 'belarusian': 'be', 'bengali': 'bn', 'bulgarian': 'bg', 'catalan': 'ca', 'chinese': 'zh', 'croatian': 'hr', 'czech': 'cs', 'danish': 'da', 'dutch': 'nl', 'english': 'en', 'esperanto': 'eo', 'estonian': 'et', 'filipino': 'tl', 'tagalog':'tl', 'finnish': 'fi', 'french': 'fr', 'galician': 'gl', 'georgian': 'ka', 'german': 'de', 'greek': 'el', 'gujarati': 'gu', 'haitian': 'ht', 'hebrew': 'iw', 'hindi': 'hi', 'hungarian': 'hu', 'icelandic': 'is', 'indonesian': 'id', 'irish': 'ga', 'italian': 'it', 'japanese': 'ja', 'kannada': 'kn', 'korean': 'ko', 'latin': 'la', 'latvian': 'lv', 'lithuanian': 'lt', 'macedonian': 'mk', 'malay': 'ms', 'maltese': 'mt', 'norwegian': 'no', 'persian': 'fa', 'polish': 'pl', 'portuguese': 'pt', 'romanian': 'ro', 'russian': 'ru', 'serbian': 'sr', 'slovak': 'sk', 'slovenian': 'sl', 'spanish': 'es', 'swahili': 'sw', 'swedish': 'sv', 'tamil': 'ta', 'telugu': 'te', 'thai': 'th', 'turkish': 'tr', 'ukrainian': 'uk', 'urdu': 'ur', 'vietnamese': 'vi', 'welsh': 'cy', 'yiddish': 'yi'}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('translate from one language to another')
    .addStringOption((option) => {
        return option
        .setName("text")
        .setDescription('The text you want to translate')
        .setRequired(true)
    })
    .addStringOption((option) => {
        return option
        .setName('to-language')
        .setDescription(`The language you want it to be translated to`)
        .setRequired(true)
    })
    .addStringOption((option) => {
        return option
        .setName('from-language')
        .setDescription(`The language of original text`)
        .setRequired(false)
    }),
    category: 'Misc',
    async execute(client,interaction) {
        let text = interaction.options.getString('text');
        let from_lang = interaction.options.getString('from-language') || null;
        let language = interaction.options.getString('to-language');

        if (Object.keys(alias).includes(language.toLowerCase())){
            language = alias[language.toLowerCase()];
        }
        if (from_lang){
            if (Object.keys(alias).includes(from_lang.toLowerCase())){
                from_lang = alias[from_lang.toLowerCase()];
            }
        }

        if (language === 'zh') language = 'zh-CN';
        if (from_lang === 'zh') from_lang = 'zh-CN';

        google_translate_dict = {
            to: language
        }

        if (from_lang){
            google_translate_dict['from'] = from_lang;
        }

        let result = await translate(text, google_translate_dict)
        .catch(err => {
            return interaction.reply({content:`an error has occured!`, ephemeral:true})
        })

        interaction.reply({embeds:[
            new MessageEmbed()
                .setTitle("Translation")
                .setColor("#2f3135")
                .setDescription(`**Original (${result.from.language.iso})**\n${text}\n\n**Translated (${language})**\n${result.text}`)
        ]})
    }
}