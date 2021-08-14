const share = require('./share');

function tk2(value) {
    return Buffer.from(value, 'binary').toString('base64').replace(/\+/g, "_").replace(/\//g, "~").replace(/=/g, "-").split("").reverse().join("");
}

async function extract(uri) {
    const timestamp = share.timestamp();
    const videoId = 12654523;
    let string = await share.getStringAsync({
        method: 'GET',
        hostname: "pcweb.api.mgtv.com",
        path: `/player/video?video_id=${videoId}&tk2=${tk2("did=853438bd-92d7-4ace-a835-eb6a36a22100|pno=1030|ver=0.3.0301|clit=" + timestamp)}`
    });
    const pm2 = JSON.parse(string).data.atc.pm2;

    string = await share.getStringAsync({
        method: 'GET',
        hostname: "pcweb.api.mgtv.com",
        path: `/player/getSource?video_id=${videoId}&tk2=${tk2('clit='+timestamp)}&pm2=${pm2}`
    });
    const obj = JSON.parse(string);
    const streams = obj.data.stream;
    let url;
    for (let i = streams.length - 1; i > 0; i--) {
        if (obj.data.stream[i].url) {
            url = obj.data.stream[i].url;
            break;
        }
    }
    url = obj.data.stream_domain[0] + url;
    const urlParts = share.splitUrl(url);
    string = await share.getStringAsync({
        method: 'GET',
        hostname: urlParts[0],
        path: urlParts[1]
    });
    return JSON.parse(string).info;
}


module.exports = {
    extract
}
