const https = require('https');

//////////////////////////

const USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

//////////////////////////


function generateIP() {
    let randomIP = "";

    for (let i = 0; i < 4; i++) {
        randomIP += Math.floor(Math.random() * (+255 - +1)) + +1;
        if (i !== 3) randomIP += ".";
    }

    return randomIP;
}


function getStringAsync(args) {

    const options = Object.assign({
        port: 443,
        headers: {
            'User-Agent': USER_AGENT
        },
    }, args);
    return new Promise((reslove, reject) => {

        const req = https.request(options, res => {
            let data = '';
            res.on('data', d => {
                data += d;
            });
            res.on('end', () => {
                reslove(data);
            });
        });
        req.on('error', error => {
            reject(error);
        })
        req.end();
    })
}


function splitUrl(string) {
    if (!string) return null;
    const start = string.indexOf('://');
    if (start === -1) return null;
    let end = string.indexOf('/', start + 3);
    if (end === -1) return null;
    return [string.substring(start + 3, end), string.substring(end)];
}


function substring(string, first, second) {
    let start = string.indexOf(first);
    if (start === -1) return null;
    start += first.length;
    const end = string.indexOf(second, start);
    if (end === -1) return null;
    return string.substring(start, end);
}


function substringAfter(string, delimiter, missingDelimiterValue) {
    const index = string.indexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(index + delimiter.length);
    }
}


function substringAfterLast(string, delimiter, missingDelimiterValue) {
    const index = string.lastIndexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(index + delimiter.length);
    }
}


function substringBefore(string, delimiter, missingDelimiterValue) {
    const index = string.indexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(0, index);
    }
}


function substringBeforeLast(string, delimiter, missingDelimiterValue) {
    const index = string.lastIndexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(0, index);
    }
}


function substringInclude(string, first, second) {
    let start = string.indexOf(first);
    if (start === -1) return null;
    const end = string.indexOf(second, start + first.length);
    if (end === -1) return null;
    return string.substring(start, end + second.length);
}

module.exports = {
    generateIP,
    getStringAsync,
    splitUrl,
    substring,
    substringAfter,
    substringAfterLast,
    substringBefore,
    substringBeforeLast,
    substringInclude
}
