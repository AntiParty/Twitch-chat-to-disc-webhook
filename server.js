const tmi = require('tmi.js');
const { Client, Intents, WebhookClient, MessageEmbed  } = require('discord.js');
const { token } = require('./config.json');
const bot2 = new Client({ intents: [Intents.FLAGS.GUILDS] });

// DISCORD LOGIN //

bot2.login(token);

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.BOT_OAUTH_TOKEN
	},
	channels: [ 'xloomytv', 'antiparty', 'aerval', 'sseabassval', 'sxripts', 'opiiwan' ]
});

const build = "0.0.1";
client.connect();


client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	//https://discord.com/api/webhooks/909731420732293161/nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF//
	const Welcomer = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

});

client.on(`raided`, function(channel, raider, viewers, userstate) {
	console.log(`${raider} just raided ${viewers} viewers!`);
	
	const Raid = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("RED")
	.setTitle(`${channel} has been Raided by ${raider}!`)
	.setDescription(`**UserName**: ${raider}\n**__Viewers__**: ${viewers}`)
	.setTimestamp();

	Raid.send({embeds: [embed]});
})

client.on(`cheer`, function(channel, userstate, message) {
	
	const Cheer = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("GREEN")
	.setTitle(`${channel} has been Cheered by ${userstate.username}!`)
	.setDescription(`**UserName**: ${userstate.username}\n**__Message__**: ${message}\n`)
	.setTimestamp();

	Cheer.send({embeds: [embed]});
})

client.on(`subscription`, function(channel, username, method, message, userstate) {
	console.log(`${username} just subscribed!`);
	
	const Sub = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	if(method === "prime") {
		const embed = new MessageEmbed()
		.setColor("BLUE")
		.setTitle(`${channel} has been Subscribed by ${username}!`)
		.setDescription(`**UserName**: ${username}\n**__Message__**: ${message}\n`)
		.setTimestamp();

		Sub.send({embeds: [embed]});
	} 
	else {
		const embed = new MessageEmbed()
		.setColor("BLUE")
		.setTitle(`${username} has been Subscribed by ${channel}!`);
	}
})

client.on(`subgift`, function(channel, username, recipient, method, userstate) {
	console.log(`${username} just gifted a sub!`);

	const SubGift = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	if(SubGift > 0) {
		const embed = new MessageEmbed()
		.setColor("BLUE")
		.setTitle(`${username} has been gifted a Sub by ${channel}!`)
		.setDescription(`**UserName**: ${username}\n**__Message__**: ${message}\n`)
		.setTimestamp();

		SubGift.send({embeds: [embed]});
	} else {
		const embed = new MessageEmbed()
		.setColor("BLUE")
		.setTitle(`${username} has been gifted a Sub by ${channel}!`);
	};
})


client.on(`unmod`, (channel, username, userstate) => {
	console.log(`${username} just unmodded!`);

	const UnMod = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("BLUE")
	.setTitle(`${username} has been UnModded by ${channel}!`)
	.description(`${username} has been UnModded by ${channel}!`)
	UnMod.send({embeds: [embed]});
});

client.on(`ban`, (channel, username, userstate, reason) => {
	console.log(`${username} just banned!`);

	const Ban = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("RED")
	.setTitle(`Bans`)
	.setDescription(`**Ban by**: ${username} has been Banned by ${channel}!`)
	.setTimestamp();

	Ban.send({embeds: [embed]});	
})

client.on(`unbanned`, (channel, username, userstate) => {
	console.log(`${username} just unbanned!`);

	const UnBan = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("GREEN")
	.setTitle(`${channel} has been UnBanned by ${username}!`)
	.setDescription(`**UserName**: ${username}\n**__Message__**: ${message}\n`)
	.setTimestamp();

	UnBan.send({embeds: [embed]});	
});

client.on(`timeout`, (channel, username, reason, duration, userstate) => {
	console.log(`${username} just timed out!`);

	const Timeout = new WebhookClient({
		id: "909731420732293161",
		token: "nl8rws6gidvd3MPr-hWT2STEl68VHydYN_3xzHz8CNjARXSxggk_UpVhv-GLevIA9ZOF"
	});

	const embed = new MessageEmbed()
	.setColor("RED")
	.setTitle(`${channel} has been timed out by ${username}!`)
	.setDescription(`**UserName**: ${username}\n**Reason**: ${reason}\n **Duration**: ${duration}`)
	.setTimestamp();

	Timeout.send({embeds: [embed]});	
});