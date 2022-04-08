const Event = require('../../structures/event')

module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = (Interaction) => {
        if (Interaction.isCommand()) {
            const cmd = this.client.commands.find(c => c.name === Interaction.commandName)

            if (cmd) cmd.run(Interaction)
        }
    }
}