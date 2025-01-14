const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QVzpXO2JWaDVDSShTcENFTRZEV6JkaRVGaG9mZ5o1cj9UMphlYKF2TUllYjIGVaZFbO5UVpwd=307086347452',
  MONGODB_URL: 'mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority', 
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg',
  PREFIX: '.',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: 'queen elisa',
  OWNER_NAME: 'TECH SAVAGE',
  OWNER_NUMBER: '254743680703',
  SUDO: '254743680703',
  WORK_TYPE: 'pRIVATE',
  WORK_MODE: 'all',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ',
  STICKER_AUTHOR: 'Tech Savage',
  STICKER_PACK: 'mbuvi',
  REMOVE_BG_APIKEY: 'FQ4rvaeWWctwfnDJbYFFy54N',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '💻',
  ALIVE_AS_GIF: false,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: false,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false,
  ANTI_DELETE: false,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: false,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
