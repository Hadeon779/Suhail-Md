const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hadeonhabideen@gmail."
global.location="Osun, State Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349068605365" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068605365";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_47_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEtJMFBnZElxUEpuUlVVSlpadTNSQzRhdDA4NzJjellEc0hxWnY0SGlyVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXc4bGQxTU1RTW0yS3pZTEUtRkt5UVwiLFxuICBcInBob25lSWRcIjogXCJlZTUxYTZiMi0zMmY5LTRlNDgtOTdjNy1lZDFkY2I0ZWQ3MDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjA0LFxuICAgICAgMTI4LFxuICAgICAgNTEsXG4gICAgICAxNzIsXG4gICAgICA3NixcbiAgICAgIDIzMCxcbiAgICAgIDY1LFxuICAgICAgMjQzLFxuICAgICAgMjMzLFxuICAgICAgNjEsXG4gICAgICA2NCxcbiAgICAgIDE5OCxcbiAgICAgIDgyLFxuICAgICAgMTA3LFxuICAgICAgMzEsXG4gICAgICAzOSxcbiAgICAgIDIzMSxcbiAgICAgIDIwOCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDEyMixcbiAgICAgIDE4OSxcbiAgICAgIDExOCxcbiAgICAgIDEwLFxuICAgICAgNDUsXG4gICAgICAyMTAsXG4gICAgICAxMTcsXG4gICAgICAxMjAsXG4gICAgICA0MSxcbiAgICAgIDEwMixcbiAgICAgIDEzMixcbiAgICAgIDcxLFxuICAgICAgMTQxLFxuICAgICAgMjI1LFxuICAgICAgNzEsXG4gICAgICA3MyxcbiAgICAgIDE4MCxcbiAgICAgIDIxOCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg5UDQ5OFBSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4NjA1MzY1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgyOTQ0NDc1NTYyMDYyOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXFCeDRZSEVPbmp2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtZjFGeW1rSmlOenQrRndIVTFmT29EMHVML2JBSXdlS0lmNHVGdm1mRHhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjV4WUxocmFvRHNYdWwrWHViTkdIVnZickZiMWdIN2dGejJPazduMzhRaCtDa1F0SS9lNStOcXFIUDg3eXpkcldjakpmWFNPbC9ERUFNVzlsZzFqckJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZITStGeDBnb0IvNjlVOEQ3SEdGaFZrNnZqSmZJTUtPODI0SUxkdjNJNWRWakozK3MxOHoyVW53SlRoSjJJa2RYZ2lyVHFkR1hYd01PVG1NZWxJYmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjg2MDUzNjU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjc2ODQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnJTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCclMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5Q1FSeFlDeEg0Y3ExT1BxMjJHcm1XREY5eEY5d2FkeUgvRlJiQmFkZVI0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTI3OTQ1NjksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Hadeon",
  packname: process.env.PACK_NAME || "Hadeon",
  botname : process.env.BOT_NAME  || "Hadeon",
  ownername:process.env.OWNER_NAME|| "Hadeon",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
