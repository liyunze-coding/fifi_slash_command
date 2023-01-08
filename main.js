const { Client, Intents, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES
], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = [];

client.commands = new Collection();

for (const file of commandFiles){
    let command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

// client.on('messageCreate', async message => {
//     if (message.author.bot) return;
// })

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    let command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(client,interaction);
    } catch (err) {
        if(err) console.error(err);

        await interaction.reply({
            content: "An error has occured while executing that command.",
            ephemeral: true
        })
    }
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
    client.user.setStatus("online");
    let count = 0;

    setInterval(function() {
        let botStatus = [`over oflaeti`, `you`, `erotic movies`, `Demon Slayer`, `Spy X Family`];
  
        let status = botStatus[count];
        client.user.setActivity(status, {type: "WATCHING"});
        count++;
        if (count >= botStatus.length) count = 0;
        
    }, 5000);

    const CLIENT_ID = client.user.id;

    const rest = new REST({
        version:'9'
    }).setToken(process.env.TOKEN);

    (async () => {
        try {
            if (process.env.ENV === 'production'){
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                });

                console.log("Successfully registered commands globally");
            } else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                    body: commands
                });

                console.log("Successfully registered commands locally");
            }
        } catch (err){
            console.error(err);
        }
    })()
    console.log('Ready!');
});

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);