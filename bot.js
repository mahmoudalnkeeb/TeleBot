const telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();
const bot = new telegraf.Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome i'm your lovely bot! created by I am a bot created by @mahmoud_alnakeeb"
  )
);
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.on('photo', (ctx) => ctx.reply('ok'));

bot.hears(/hi/, (ctx) => ctx.reply('Hey there🙋‍♂️'));
bot.hears(/Hi/, (ctx) => ctx.reply('Hey there🙋‍♂️'));
bot.hears(/😂/, (ctx) => ctx.reply('So funny🤣'));
bot.hears(/😢/, (ctx) => ctx.reply('why are you sad😥'));
bot.hears(/😭/, (ctx) => ctx.reply("Don't cry i'm here for you😭"));
bot.hears(/😍/, (ctx) => ctx.reply('I love you too😍'));
bot.hears(/😘/, (ctx) => ctx.reply('I love you too😘'));
bot.hears(/جامد/, (ctx) => ctx.reply('مش اجمد منك يسطى😎'));

// bot.hears('word', (ctx) => ctx.reply(' respond to this word '));

bot.command('about', (ctx) =>
  ctx.reply('I am a bot created by @mahmoud_alnakeeb')
);
bot.launch();
