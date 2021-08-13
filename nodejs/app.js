const HttpsProxyAgent = require('https-proxy-agent');
var proxy = process.env.http_proxy || 'http://127.0.0.1:10809';
var agent = new HttpsProxyAgent(proxy);
const share = require('./share');
//const fs = require('fs');
//
//fs.writeFileSync('xvideos.js');
//return;

async function extract(viewkey, agent) {
    const string = await share.getStringAsync({
        method: 'GET',
        hostname: '91porn.com',
        path: `/view_video.php?viewkey=${viewkey}`,
        'X-Forwarded-For': share.generateIP(),
        agent
    });
    const value = eval(share.substringInclude(string, "strencode2(", "\")"));
    return share.substring(value, "src='", "'");
}

extract("", agent).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
// https://www.xvideos.com

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const block = (data) => {
    process.on('uncaughtException', function (err) {
        console.log('Caught exception: ' + err)
    })
    rl.on('SIGINT', () => {
        console.log(data)
        rl.pause()
    })
}


block('Your exiting message!');

;
