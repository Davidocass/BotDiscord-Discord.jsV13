require('dotenv').config()

const { Message } = require('discord.js')
const Client = require('./src/structures/client')
const config = require('./config.json')

const client= new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'

    ]
})

client.once('ready', function () {
    console.log('Bot Logado!')
})

client.on('messageCreate', function (msg) {
    if (msg.content === '!ifsmart') {
        msg.reply('A IFSmart é a empresa júnior do IFS e tem como objetivo e talz...')
    } else if (msg.content === 'oi') {
        msg.reply('Olá, tudo bem?')
    }
})

client.login(config.token)
