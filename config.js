const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "83849716943"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'mailtopgb@gmail.com'
global.github = 'https://github.com/pgbgroup/XLICON-MD'
global.location = 'asia/indonesia'
global.gurl = 'https://instagram.com/gauthambala06/' // add your username
global.sudo = process.env.SUDO || '83849716943' 
global.devs = '83849716943';
global.website = 'https://github.com/pgbgroup/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQxRm5xTmVHZUdxTkFQWGtXNEVNRWp3d2FpMDc5c21zWSs3SGE3RzYxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWkzUUNRRnRVa1FvTk5MditOR2crZ3JhNEwyTE8wSzJndG9sb0twM01Udz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSFh4bEpoSDdSYk1IQkFucTJNQUtiOUlvQVpvK1BXUlFHUG1tTmhiN1d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbTBrZmh3aWEvcUlvUDN3bDdmZXpTVFg3UW9zMjhPUU1GejhQQ2hrbnpBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGbzQxMkF0RVVPSEZXWCtQeXZ2YzhkWkpYLzl6T3lmVDFsclpmZFdtRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxZbHVhV1Jib1BNWGNnQWRYMEIyOVB5anV2YTVPdVpkTWhzN0hpc29SMDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRXZROTJ2cm5iZ1lJbExITlNYRmVkV2M2U0wrbjdNbWRkenJrWmp6MTlFalk4ZHVzOWVkYnFaUXkzOEhWaUtPZDFabXAxeFhVUU1DTUVXWGNnWFJEQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5MCwiYWR2U2VjcmV0S2V5IjoibFh1MVVCZTJ1V3ZmaXRwam9LeVJNajd2NERlZmdNcWhkWlZUdXdadDRLVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSDVUb08xS3FSaE82b0ZGbVhIVHRrdyIsInBob25lSWQiOiI0NDAwNzJmNS1hYmMxLTQ3NmUtYWQ2ZS1hZTFiODdmOTY5ZjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lhaE1xbDhvRXNYMzdDamJIckdsQUlXLzZNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIS1lTK3B4cmlwSWVEMk9MVDIrNDVGdnhtSWc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcTB3T2dHRUtXd3Jhc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjB6THdDSE9JaUZiSzhEeFQ1d1hmZkNML3I0NGhsZjR4YWdZUnN5R0xGaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImovN3IvNjBYamNab1hlQW9FVHMxTDRHVWU1SGxNNmkwNGpNTkRtUjhxSFNyMnJrZVlVRkp1cm1aYWt5bVZXR21yVEN6b0cyc3NuZHpJaStmc3R0bkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2OS9tbXp6c1dnbnprOUZiYkpMS253My9iVi9wdlN4RE1xR1FKakk5MGl5Y0FMdWVtRUcvRG1ZOTFCTGp2UVFXZ3pLMUw5WDFnS2xXd2tNSnd2cXNCdz09In0sIm1lIjp7ImlkIjoiNjI4Mzg0OTcxNjk0MzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikpva2VyIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODM4NDk3MTY5NDM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkTXk4QWh6aUloV3l2QThVK2NGMzN3aS82K09JWlgrTVdvR0ViTWhpeFl0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxNTMzNzM0fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Joker" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Hacker Venom' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi I am Alive!' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
