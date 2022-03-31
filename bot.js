const telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();
const bot = new telegraf.Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome i'm your lovely bot created by @mahmoud_alnakeeb")
);

bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears(/hi/, (ctx) => ctx.reply('Hey there🙋‍♂️'));
bot.hears(/Hi/, (ctx) => ctx.reply('Hey there🙋‍♂️'));

// bot.hears('word', (ctx) => ctx.reply(' respond to this word '));

bot.command('about', (ctx) =>
  ctx.reply('I am a bot created by @mahmoud_alnakeeb')
);
bot.launch();
