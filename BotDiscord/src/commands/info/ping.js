const Command = require('../../structures/command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Mostra o ping do bot.'
        })
    }

    run = (Interaction) => {
        Interaction.reply('Pong!')
    }
}