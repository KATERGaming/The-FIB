const { CommandClient } = require('eris')


async function init(token) {
    const stupidAssBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })

    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'script',
            description: 'Will send the script in the chat',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })

    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'script') {
            await interaction.createMessage({
                content: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/KATERGaming/Roblox/main/KaterHub.Lua"))()```'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
