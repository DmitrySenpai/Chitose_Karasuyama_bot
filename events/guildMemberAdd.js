module.exports = (client, member) => {
    let embed = new client.discord.RichEmbed()
	  .setTitle("Новый пользователь!")
	  .setDescription(`<@${member.id}> , Добро пожаловать! Желаем вам приятно провести время :wink: !`)
	  .setColor('#59eaf9')
	  .setThumbnail(member.user.avatarURL)
	  .setImage(`https://pp.userapi.com/c849332/v849332039/148fe0/Lqxsk3XgONA.jpg`)
	  .setAuthor('烏山 千歳', "https://i.imgur.com/9T5FjxH.jpg");
	member.guild.channels.get('553673846285271065').send({embed});
	member.addRole(member.guild.roles.get("553671176166309918"));
}
