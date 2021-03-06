/* Copyright (C) 2022 TECHVISION LK.

TEA BOT - Saviru Kashmira
*/

const Tea = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Tea.addCommand({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, usage: '.weather BakÃ¼'}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	const url = `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=e08b7955b0e6badaf0d0f918c3f1394d&language=en`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*ð ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		'*â ' + Lang.TEMP +':* ```' + json.main.temp_max + 'Â°```\n' + 
		'*â¹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		'*â ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		'*ð¨ ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		'*â ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	}
});