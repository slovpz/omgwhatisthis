import { Client, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder } from 'discord.js';
import { setRankPlayer } from '../rankStuff'
const name = 'setrank'
const data = new SlashCommandBuilder()
	.setName(name)
	.setDescription('Sets the rank of a user')
	.addStringOption(option => option.setName('user').setDescription('The user to change the rank of').setRequired(true))
	.addNumberOption(option => option.setName('rank').setDescription('The rank to set the user to').setRequired(true))
export const json : RESTPostAPIApplicationCommandsJSONBody = data.toJSON();

export function clientStuff(client: Client) {
	client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;
			if (interaction.commandName === name) {
				await interaction.deferReply();
				if(typeof(interaction.options.getString("user")) === 'string')  {
					let a: string | undefined = interaction.options.getString("user")?.toString();
					let b: number | null = interaction.options.getNumber("rank");
					if(a != undefined && b != null) {
						if(isNaN(Number.parseInt(a))) {
							let thing = await setRankPlayer(a, b);
							if(thing != undefined) {
								interaction.editReply('If the user was in the group their rank was changed')	
							} else {
								interaction.editReply("This user's rank was changed")	
							}
						} else {
							let thing = await setRankPlayer(Number.parseInt(a), b);
							if(thing != undefined) {
								interaction.editReply('If the user was in the group their rank was change')	
							} else {
								interaction.editReply("This user's rank was changed")	
							}
						}
					}
				}
			}
	});
}