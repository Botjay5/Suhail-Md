const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Kubwa,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0 .t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9131125604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_27_04_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUxIUXd3em9qK0wrd3phWWpjRUc5R1I4T2JKem00K0o0bFhjMmh6aDNrZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIno3Q2d6SWVvTEtWRjJXYTlkblNsLzd4bkpyUUhNWU1BcWcvUkNqbURJeVk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUkxYW5CZzN5WXJjelB4WUJ6Rk5rYk1lcXZxbE9LS0FWWEJVMUFxN21uRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJObDIxMDA1OG5BWFRWckEyM0lyRDd5N3ZBQXBIdk5jRGNuQlVvb25qd289XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0IvMjVIVUI4OXdaenpFYk91bUZzNi9waXpSZlJMd3ZhZnVkYnpwdHUwYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNQRFdwM1B5U0xGT0xrc0l2S3IvZlE3bFEzei93cXBKQmIvSENxcUM5R2s9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJNSmdpM29salFMdWgxMWxRMlhMM2hsbGFoNFEvMjg1bXBVMVY2TU5JYkc4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRjFvQUxWWVordE4yMmVZZnczU29ZMDhpOEMrVjBxVnhDSkRMV3lqRU9ndz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXdGljQ0I5Z211dHpJbnlsby9nL3BuTVFpWDE1L3lOOEsvSWw2VEl2VW50cTArblNaLytSQm5MYnl6R3UwSzR6VFFiSi9Xcnh6elg0TVNoYzAwQ3hEdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTUsXCJhZHZTZWNyZXRLZXlcIjpcIkUvdHQ4cDdHUTZjUmZscTZHTFZmMFhrQW8wNjV1TWJRZk8xa2lwaWtzV0E9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ5MTMxMTI1NjA0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBNTExMTJFMjA4MjNENzBCMkY3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIzNTk2Mzh9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJtQkRoZmZ5a1JzcXUzY212WFVtNzBnXCIsXCJwaG9uZUlkXCI6XCJiMWNlNzFkNi01Y2NiLTQ2ZmUtYmNiMS04N2E3MDMxYTk0YzZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBWOU9nY0cxbC9URDJ0SURTRkhKMzlGTFJZTT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIzT0hCOUlYYWxCdTVSTUlKQ1ZCbVc5Z3d4WUE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMUpNSDg2OEtcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDkxMzExMjU2MDQ6NTFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjAzMjA4MTU2Nzk1MDAwOjUxQGxpZFwiLFwibmFtZVwiOlwi8J+YtuKAjfCfjKvvuI/wn5i24oCN8J+Mq++4j/CfmLbigI3wn4yr77iPXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNObVZwTDRIRU0yUndyQUdHQWNnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiN2gxV1VESVZOdjIvcDJsa3dTa1FSRTNaL0xMV2RoRUJDYXY1bk1NcTdIND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImx2ZFJBOEdpQnFtSFZOa1N0NEFSZlN0U2NsMHpIUzY2ek90TnVJZFNmclYzdUl3WUF5aWE3Q0JTUnRnK3dKclBub2xJNmZDcUxlSUxZd2x0QWJsNWhBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiajkwMVRPOU52RThNVFIrSGt0YkdCMWJ2RmRpdTVVRW5rTmpla3lVMnpiVUJ6WVlycE5GWUY1NUlSZUVPVXhaUWNVek9IOS80VnNSQ0Y4NVM4N3RVRHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDkxMzExMjU2MDQ6NTFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZTRkVmxBeUZUYjl2NmRwWk1FcEVFUk4yZnl5MW5ZUkFRbXIrWnpES3V4K1wifX1dLFwicGxhdGZvcm1cIjpcImlwaG9uZVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjM1OTYzMixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUMwQUFKQk1cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUMwQUFKQk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyZFJuT0d1TFYvOVFKMzZWdnkwQU9GRktaa2JtU2JEK3A3UXVoVlV6SHowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls0NSwwLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjMzNDExMDYyNFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Jamil's botᴅ",
  ownername:process.env.OWNER_NAME|| "Jamil",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
