import { Client, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder } from 'discord.js';
import { demotePlayer } from '../rankStuff'
const name = 'demote'
const data = new SlashCommandBuilder()
	.setName(name)
	.setDescription('Demotes A user up down a rank')
	.addStringOption(option => option.setName('user').setDescription('The user to demote').setRequired(true))
export const json : RESTPostAPIApplicationCommandsJSONBody = data.toJSON();

export function clientStuff(client: Client) {
	client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;
			if (interaction.commandName === name) {
				await interaction.deferReply();
				if(typeof(interaction.options.getString("user")) === 'string')  {
					let a: string | undefined = interaction.options.getString("user")?.toString();
					if(a != undefined) {
						if(isNaN(Number.parseInt(a))) {
							let thing = await demotePlayer(a);
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were demoted')	
							} else {
								interaction.editReply('This user was demoted')	
							}
						} else {
							let thing = await demotePlayer(Number.parseInt(a));
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were demoted')	
							} else {
								interaction.editReply('This user was demoted')	
							}
						}
					}
				}
			}
	});
}