import { Client, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder } from 'discord.js';
import { suspendPlayer } from '../rankStuff'
const name = 'suspend'
const data = new SlashCommandBuilder()
	.setName(name)
	.setDescription('Suspends A user')
	.addStringOption(option => option.setName('user').setDescription('The user to suspend').setRequired(true))
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
							let thing = await suspendPlayer(a);
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were suspended')	
							} else {
								interaction.editReply('This user was suspended')	
							}
						} else {
							let thing = await suspendPlayer(Number.parseInt(a));
							if(thing != undefined) {
								interaction.editReply('If the user was in the group they were suspended')	
							} else {
								interaction.editReply('This user was suspended')	
							}
						}
					}
				}
			}
	});
}