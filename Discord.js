// disocrd.js
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const TOKEN = '_token_';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

client.on('ready', () => {
  console.log(`🤖 Bot đã online dưới tên: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.trim() === '.') {
    message.reply('chấm ít thôi mute giờ 😡');
  }
});

client.login(TOKEN);
