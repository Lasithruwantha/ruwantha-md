const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://www.pexels.com/photo/brown-and-black-tiger-beside-wood-log-516541/",
ALIVE_MSG: Process.env.ALIVE_Msg || "*lasith-md* hello 👋, I am alive how can help you ??",
AUTO_READ_STATUS: porocess.env.AUTO_READ_STATUS || "true",
};
