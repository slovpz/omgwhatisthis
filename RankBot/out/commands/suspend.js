"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientStuff = exports.json = void 0;
const discord_js_1 = require("discord.js");
const rankStuff_1 = require("../rankStuff");
const name = 'suspend';
const data = new discord_js_1.SlashCommandBuilder()
    .setName(name)
    .setDescription('Suspends A user')
    .addStringOption(option => option.setName('user').setDescription('The user to suspend').setRequired(true));
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
                        let thing = await (0, rankStuff_1.suspendPlayer)(a);
                        if (thing != undefined) {
                            interaction.editReply('If the user was in the group they were suspended');
                        }
                        else {
                            interaction.editReply('This user was suspended');
                        }
                    }
                    else {
                        let thing = await (0, rankStuff_1.suspendPlayer)(Number.parseInt(a));
                        if (thing != undefined) {
                            interaction.editReply('If the user was in the group they were suspended');
                        }
                        else {
                            interaction.editReply('This user was suspended');
                        }
                    }
                }
            }
        }
    });
}
exports.clientStuff = clientStuff;
