const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const bot = new Discord.Client();

bot.on('ready', function(){
	console.log("on");
})

bot.on('message' async(message){
	if(!message.content.startsWith("play")) return;
		//args
		var args = message.content.split(/ +/g);
		args.shift();
		// verifications
		if (!message.member.voiceChannel) return message.reply("Merci de vous connecter a un salon vocal !");
		if (message.guild.me.voiceChannel) return message.reply("Je suis deja connecte a un salon vocal");
		if(!args[0]) return message.reply("Merci d'ajouter un lien YouTube");
		
		const validate = await ytdl.validateURL(args[0]);
		if (!validate) return message.reply("Le lien n'est pas valide");
		console.log("ok");
		//commande
		console.log("cmd");
		console.log("info");
		message.member.voiceChannel.join().playStream(ytdl (args[0], { filter: 'audioonly' })).catch();
		message.channel.send(`Musique jouee : ${info.title}`).catch();
})

bot.login(process.env.TOKEN);
