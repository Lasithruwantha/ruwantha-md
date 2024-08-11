const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "jpg url",
ALIVE_MSG: Process.env.ALIVE_Msg || "*lasith-md* hello 👋, I am alive how can help you ??",
};
