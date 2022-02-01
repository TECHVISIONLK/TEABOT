/* Copyright (C) 2022 TECHVISION LK.

TEA BOT - Saviru Kashmira
*/

const Tea = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('memes');

Tea.addCommand({pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, usage: 'meme top;bottom'}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);
    var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[1];
        bottomText = split[0];
    }
	else {
        topText = match[1];
        bottomText = '';
    }
    
	var info = await message.reply(Lang.DOWNLOADING);
	
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    }); 
    
	memeMaker({
        image: location,         
        outfile: 'teabot-meme.png',
        topText: topText,
        bottomText: bottomText,
    }, async function(err) {
        if(err) throw new Error(err)
        await message.client.sendMessage(message.jid, fs.readFileSync('teabot-meme.png'), MessageType.image, { filename: 'teabot-meme.png', mimetype: Mimetype.png});
        await info.delete();    
    });
}));