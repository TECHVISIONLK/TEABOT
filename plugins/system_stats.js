/* Copyright (C) 2022 TECHVISION LK.

TEA BOT - Saviru Kashmira
*/

const Tea = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Tea.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    await message.sendMessage(
        '```සුභ පැතුම් !. TEA BOT ක්‍රියා කරයි...```\n\n*Version:* ```' + Config.VERSION +'```\n*WhatsApp support Group:* https://chat.whatsapp.com/F6Ki7YfW4MT2FoPmfzdYzk Support Contact:* https://wa.me/94702345551' , MessageType.text
    );
}));

Tea.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));