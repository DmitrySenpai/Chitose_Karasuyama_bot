module.exports = (client, member) => {
	//Дата смерти
	var date2 = Date();
	var month2 = date2.slice(4, 7);

	if (month2 == 'Jan') month2 = 'Января';
	if (month2 == 'Feb') month2 = 'Февраля';
	if (month2 == 'Mar') month2 = 'Марта';
	if (month2 == 'Apr') month2 = 'Апреля';
	if (month2 == 'May') month2 = 'Мая';
	if (month2 == 'Jun') month2 = 'Июня';
	if (month2 == 'Jul') month2 = 'Июля';
	if (month2 == 'Aug') month2 = 'Августа';
	if (month2 == 'Sep') month2 = 'Сентября';
	if (month2 == 'Oct') month2 = 'Октября';
	if (month2 == 'Nob') month2 = 'Ноября';
	if (month2 == 'Dec') month2 = 'Декабря';
	
	//Дата
	var date = new Date(member.joinedTimestamp).toString();
	var month = date.slice(4, 7);

	if (month == 'Jan') month = 'Января';
	if (month == 'Feb') month = 'Февраля';
	if (month == 'Mar') month = 'Марта';
	if (month == 'Apr') month = 'Апреля';
	if (month == 'May') month = 'Мая';
	if (month == 'Jun') month = 'Июня';
	if (month == 'Jul') month = 'Июля';
	if (month == 'Aug') month = 'Августа';
	if (month == 'Sep') month = 'Сентября';
	if (month == 'Oct') month = 'Октября';
	if (month == 'Nob') month = 'Ноября';
	if (month == 'Dec') month = 'Декабря';

	data_join = date.slice(8, 10) + ' ' + month + ' ' + date.slice(11,15) + 'г. в ' + date.slice(16,24)
	//END Дата

	data_exit = date2.slice(8, 10) + ' ' + month2 + ' ' + date2.slice(11,15) + 'г. в ' + date2.slice(16,24)

	//END Дата

	//Вывод
	let embed = new client.discord.RichEmbed()
	  .setTitle("Пользователь сделал суицид!")
	  .setDescription(`<@${member.id}> , покинул(а) нас! Помним, любим, и скорбим! :C`)
	  .setColor('#2d5579')
	  .setThumbnail(member.user.avatarURL)
	  .setImage("https://i.imgur.com/dEkJ39U.jpg")
	  .setAuthor('烏山 千歳', "https://i.imgur.com/9T5FjxH.jpg")

	  .addField("Дата рождения:", data_join, true)
	  .addField("Дата смерти:", data_exit, true)
	  .addField("Причина:", "Вскрылся!", true);
	member.guild.channels.get('553673846285271065').send({embed})
}