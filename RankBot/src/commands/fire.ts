import { Client, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder } from 'discord.js';
import { firePlayer } from '../rankStuff'
const name = 'fire'
const data = new SlashCommandBuilder()
	.setName(name)
	.setDescription('Fires A user')
	.addStringOption(option => option.setName('user').setDescription('The user to fire').setRequired(true))
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
							let thing = await firePlayer(a);
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were fired')	
							} else {
								interaction.editReply('This user was fired')	
							}
						} else {
							let thing = await firePlayer(Number.parseInt(a));
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were fired')	
							} else {
								interaction.editReply('This user was fired')	
							}
						}
					}
				}
			}
	});
}