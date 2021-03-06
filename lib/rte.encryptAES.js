var crypto = require('crypto');
/**
* AES192 encryption
*
* @method encrypt
* @param {String} key
* @param {String} text
*/ 
function encryptAES(word, callback) 
{
    const cipher = crypto.createCipher('aes192', word);
    let encrypted = '';
    cipher.on('readable', () => {
        const data = cipher.read();
        if (data)
            encrypted += data.toString('hex');
    });
    cipher.on('end', () => {
    	
        callback(encrypted);
    });
    cipher.end();
}

module.exports = encryptAES;