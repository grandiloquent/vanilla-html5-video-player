const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
var proxy = process.env.http_proxy || 'http://127.0.0.1:10809';
var agent = new HttpsProxyAgent(proxy);


function getStringAsync(path) {
    const options = {
        hostname: '91porn.com',
        port: 443,
        path: path || '/index.php',
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        },
        agent: agent
    };
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


async function initialize() {
    const string = await getStringAsync(`/view_video.php?viewkey=${"fe0241141b30ff278a24"}`);
    console.log(string)
}


Promise.resolve(initialize());
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


block('Your exiting message!')