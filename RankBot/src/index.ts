import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
import ready from './listeners/ready';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import fs from 'node:fs';
import { exit } from 'node:process';
import { setCookie } from "noblox.js";
import { setGroup } from "./rankStuff";

const token = "ODUwNjE5MjU0Mjk3ODUzOTY0.GbV0Xl.7mH5RQJ5ht_u9JCj3n2mg2sCbfKwjGYnPNnXJo";

console.log("Bot is starting...");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildPresences, GatewayIntentBits.DirectMessages]
});

ready(client);


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '850619254297853964';
const guildId = '912787319948456006';
let rest;

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	command.clientStuff(client);
	commands.push(command.json);
}

rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest?.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
process.env.cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_6533D02678C05698735978399CD963A1C37F1CF541A45030D1E5FFDE1E99219D53BFD952D57AF30CA78FDF0AAA7D3248F3B6E2791B6A54D5BE36911975C22A6DA2428CBB5661B8FDC4FCB6331E1F275C5D80AFA434EBC1185ADCEE4C3A7A994B7311FD1B9654A3E2C7F6A4D6FB0D137C2989482CC05399A7A95812FFB10BFA2812D20B2C53A09F44F91EC49E0C3D7135479A19B1691E5F00161B83DCCF8767F071032DE5AC1E6D44115C5340D813CD8917DACDF8B1A8F97501F1B5C34087618317826DE312419AF3FE40A46602A3C2C464512BA3A7665416D4317D699CFD492A4823DFACF294D5F0891C5CA82210C26061AEA1AD2DD72C68A4FC29FC539E06B4AE9517B2DF8664FDCD476D6A821613960C314396638157CDF1441CAD70149D124C986E31805BA413D9F75373AE0CE782AEBBEB886E29EEC8BA8347B249C293BDA5491DD6287CA022832EC005F200178D016597DD3B346371537A14E32E1484AEA358045E6FBC6116F5081F1D35EF76C7654FC2C56F607C1F90EAA07864D0C580034D2B15ACFC3047152740A9257A54B6FEC7D924";
if(process.env.cookie != undefined) {
	setCookie(process.env.cookie, true);
	setGroup(8151834);
	console.log("Cookie set");
} else {
	console.log("Cookie was not found");
	exit(-1);
}


client.login(token);