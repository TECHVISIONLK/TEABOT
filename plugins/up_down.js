/* Copyright (C) 2022 TECHVISION LK.

TEA BOT - Saviru Kashmira
*/

const Tea = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got')
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('up_down');

Asena.addCommand({pattern: 'download ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, usage: 'meme top;bottom'}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);

}));