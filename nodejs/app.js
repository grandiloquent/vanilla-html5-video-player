const HttpsProxyAgent = require('https-proxy-agent');
var proxy = process.env.http_proxy || 'http://127.0.0.1:10809';
var agent = new HttpsProxyAgent(proxy);
const share = require('./share');
const mgtv = require('./mgtv');
//const fs = require('fs');
//
//fs.writeFileSync('xvideos.js');
//return;

mgtv.extract("https://www.bilibili.com/video/BV1K64y1q7NM").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

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
