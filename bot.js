const telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();
const bot = new telegraf.Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome ya man'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.on('photo' , ctx => ctx.reply('ok'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('Hi', (ctx) => ctx.reply('Hey there'));
bot.launch();