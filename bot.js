const telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();
const bot = new telegraf.Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome i'm your lovely bot created by @mahmoud_alnakeeb")
);
// just for fun
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears(/اهلا/, (ctx) => ctx.reply(`نورت يا ${ctx.from.first_name}`));
bot.hears(/أهلا/, (ctx) => ctx.reply(`نورت يا ${ctx.from.first_name}`));
bot.hears(/😂/, (ctx) => ctx.reply('مضحك جدا😂'));
bot.hears(/😭/, (ctx) => ctx.reply('محزن😭'));
bot.hears(/😍/, (ctx) => ctx.reply('كيوت😍'));
bot.hears(/😘/, (ctx) => ctx.reply('بحبك😘'));
bot.hears(/😅/, (ctx) => ctx.reply('حسنا حسنا😅'));
bot.hears(/🤔/, (ctx) => ctx.reply('مش عارف🤔'));
bot.hears(/🙂/, (ctx) => ctx.reply('مرحبا🙂'));
bot.hears(/🙄/, (ctx) => ctx.reply('ماذا اقول🙄'));
bot.hears(/🤣/, (ctx) => ctx.reply('حلو🤣'));
bot.hears(/🤗/, (ctx) => ctx.reply('شكرا🤗'));
bot.hears(/🤓/, (ctx) => ctx.reply('حلو حلو🤓'));
bot.hears(/🤑/, (ctx) => ctx.reply('فلوووس🤑'));
bot.hears(/🤐/, (ctx) => ctx.reply('افصل شويه الراديو بيفصل🤐'));
bot.hears(/😨/, (ctx) => ctx.reply('ينهار ابيض😨'));
bot.hears(/😱/, (ctx) => ctx.reply('الطم على وشى😱'));
bot.hears(/😡/, (ctx) => ctx.reply('ايه يا عم مالك😡'));
bot.hears(/🤬/, (ctx) => ctx.reply('متخلنيش اغلط🤬'));

// bot.hears('word', (ctx) => ctx.reply(' respond to this word '));

bot.command('about', (ctx) =>
  ctx.reply('I am a bot created by @mahmoud_alnakeeb')
);
bot.launch();
