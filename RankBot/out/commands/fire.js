"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientStuff = exports.json = void 0;
const discord_js_1 = require("discord.js");
const rankStuff_1 = require("../rankStuff");
const name = 'fire';
const data = new discord_js_1.SlashCommandBuilder()
    .setName(name)
    .setDescription('Fires A user')
    .addStringOption(option => option.setName('user').setDescription('The user to fire').setRequired(true));
exports.json = data.toJSON();
function clientStuff(client) {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand())
            return;
        if (interaction.commandName === name) {
            await interaction.deferReply();
            if (typeof (interaction.options.getString("user")) === 'string') {
                let a = interaction.options.getString("user")?.toString();
                if (a != undefined) {
                    if (isNaN(Number.parseInt(a))) {
                        let thing = await (0, rankStuff_1.firePlayer)(a);
                        if (thing != undefined) {
                            interaction.editReply('If the user was in the group they were fired');
                        }
                        else {
                            interaction.editReply('This user was fired');
                        }
                    }
                    else {
                        let thing = await (0, rankStuff_1.firePlayer)(Number.parseInt(a));
                        if (thing != undefined) {
                            interaction.editReply('If the user was in the group they were fired');
                        }
                        else {
                            interaction.editReply('This user was fired');
                        }
                    }
                }
            }
        }
    });
}
exports.clientStuff = clientStuff;
