const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');
const questions = [
    `What's the best piece of advice that you've been given?`,
    `Do you prefer online classes or attending school physically?`,
    `What is your most used emoji?`,
    `Who was your childhood actor/actress crush?`,
    `Have you ever been told you look like someone famous, who was it?`,
    `When you die, what do you want to be remembered for?`,
    `What is your favorite item you've bought this year?`,
    `What is your absolute dream job?`,
    `Say you're independently wealthy and don’t have to work, what would you do with your time?`,
    `If you had to delete all but 3 apps from your smartphone, which ones would you keep?`,
    `What does your favorite shirt look like?`,
    `What would your dream house be like?`,
    `As a child, what did you want to be when you grew up?`,
    `What was your favorite game to play as a child?`,
    `If you could hang out with any cartoon character, who would you choose and why?`,
    `If you could live in any country, where would you live?`,
    `If you could choose any two famous people to have dinner with who would they be?`,
    `Would you rather have invisibility or flight?`,
    `Would you rather always be slightly late or super early?`,
    `Would you rather be the funniest or smartest person in the room?`,
    `Do you play any sports?`,
    `Do you play any instruments?`,
    `What school subject is your least favorite?`,
    `What are you most excited about this year?`,
    `What movie do you think everyone should watch?`,
    `What is one thing we would never guess about you?`,
    `What current fact about your life would most impress your five year old self?`,
    `Describe the best teacher you have had so far?`
]


module.exports = {
    data: new SlashCommandBuilder()
    .setName('question')
    .setDescription(`I'll ask a random question!`),
    category: 'Misc',
    async execute(client,interaction) {
        // if (interaction.member.id !== interaction.guild.ownerId){
        //     return interaction.reply({
        //         content: `Sorry you do not have permissions to use this command`,
        //         ephemeral:true
        //     })
        // }

        let question = questions[Math.floor(Math.random() * questions.length)]
        const embed = new MessageEmbed()
        .setColor(`#1cff00`)
        .setTitle('Question!')
        .setDescription(question);
        
        interaction.reply({embeds:[embed], ephemeral:false})
    }
}