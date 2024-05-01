//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348039607375";
global.owner = process.env.OWNER_NUMBER || "2348039607375";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxOOWRDdHFkWFlHSm5TZndvd0pvZFkzMWRaaWdoQjNVUDhZZEJmcHJYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGllVUdSVTFhLzBRYlMweEt0ZGh5MEU1SXcxbDFHZ0NJRmcwOEpSU2hRaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQllGakcvR2paMERldUF2MVRqUGJZbzA1SGRvRXZQc2l4ckJSdTZuajJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZzZxVmJYTzdpSUtpQ3lLdzgvV01ZSGhDeHRsRTIxRTZ3Z1gzS3AvdFJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNcTdRajEzdDNNN0ZkZEVkODhSdjB0ckQwdUhKd3g2Q2xVdFhHMDNuRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVTWFdONEdwakxJVTVOb3g4c3V3eDlMSWZXNmF6eEM4SW5IdzlUTVk3aTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUwxTlhYcHNLeHNhMzZEQjlQclJmZlRndkNBWWs3a05rK0RJR2szd3MxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFc0Q0w3ZWdTQXpjRkNBS1lSczhnZ1RXZTA1SlVwU1liL0lqOGh4cFBUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxkU0EzSzVpdkdEdm9PZ2l5aTVEekpLekhmbTNhSXhPbTJuR04vWUdhZ2FwTG1SbnVTODJYdXl6Z2ExcVcxUFQxQzBjQVRDSXVPdTZHcjc5UURmYWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiIxSlhaOUpvZTlmaXBuTmdUQ1VqdkpJVmFidXMwZ2o2dWVQNG9NVHc1Z29VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzVnZ1Wktfd1Q5Q2lMd2YwWlIwWmZBIiwicGhvbmVJZCI6IjU0MGM0MDUwLTNjMGItNGY2NC05ZDEzLWU2MjI4ZTliOWNlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSVI4QXhtVjJZYjlvVXMxUUpzRXZvbDZ1eE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSCt0bDBYWkRCOHlvcUc5UWhkanFTUE5UUU1RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRSNllHQ0ZBIiwibWUiOnsiaWQiOiIyNTU2NzQ3NzE0NTI6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLi4uLi4uLi4uLi4uLiBBLmwubC55In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLL29tckVFRUwyenlyRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIMGJnQWkybzNmMHJZcU83MGl4QXBHQ1oyNDNQWTl2a3VuNjZKK1NmbXlNPSIsImFjY291bnRTaWduYXR1cmUiOiJTbWhNYnNnektabG9wWkNZQXhManpKa3pVT204SjFGRWVndUFUamdKQjlSTXJ0OGt5OTlrL05sVUMya1A2UlQrODJzWmwwSDFWMFRZOFkvNFdRSHBDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoianlXeHY4aHY2djA2SFlqOWphWjVZMmdNL2U5WHhEbkxTUFhqd1A4RjB2WVlVdklEZU5sVDVVc0VqK0hNVmszRFc5MXdFZVlXWVlqaEttUnhFZmszZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2NzQ3NzE0NTI6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjlHNEFJdHFOMzlLMktqdTlJc1FLUmdtZHVOejJQYjVMcCt1aWZrbjVzaiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDU5MjIwMX0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TX Md",
  ownername: process.env.OWNER_NAME || "Ally",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
