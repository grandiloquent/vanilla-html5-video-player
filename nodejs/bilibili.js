const share = require('./share');
const zlib = require('zlib');

async function extract(uri) {
    const uriParts = share.splitUrl(uri);
    let response = await share.getStringAsync({
        method: 'GET',
        hostname: uriParts[0],
        path: uriParts[1],
        headers: {
            "Accept-Encoding": "gzip, deflate, br",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        }
    }, true);
    const jsonBody = share.substring(zlib.gunzipSync(response).toString(), 'window.__INITIAL_STATE__=', ';(function()');

    const obj = JSON.parse(jsonBody);
    response = await share.getStringAsync({
        method: 'GET',
        hostname: 'api.bilibili.com',
        path: `/x/player/playurl?avid=${obj.videoData.aid}&cid=${obj.videoData.cid}&bvid=${obj.videoData.bvid}&qn=120&type=&otype=json&fourk=1&fnver=0&fnval=16`,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            "Referer": "https://www.bilibili.com"
        }
    });
    return JSON.parse(response).data.dash.video[0].baseUrl;
}


module.exports = {
    extract
}
