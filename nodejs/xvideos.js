const share = require('./share');

async function extract(uri, agent) {
    let urlParts = share.splitUrl(uri);
    let string = await share.getStringAsync({
        method: 'GET',
        hostname: urlParts[0],
        path: urlParts[1],
        agent,
    });
    const array = [];
    array.push({
        resolution: '标清',
        src: share.substring(string, "setVideoUrlLow('", "');")
    });
    array.push({
        resolution: '高清',
        src: share.substring(string, "setVideoUrlHigh('", "');")
    });
    const hls = share.substring(string, "setVideoHLS('", "');");
    urlParts = share.splitUrl(hls);
    string = await share.getStringAsync({
        method: 'GET',
        hostname: urlParts[0],
        path: urlParts[1],
        agent,
    });
    const pieces = string.split('\n');
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].startsWith("#EXT-X-STREAM-INF:")) {
            array.push({
                resolution: share.substring(pieces[i], "NAME=\"", "\""),
                src: share.substringBeforeLast(hls, '/') + '/' + pieces[i + 1]
            });
            i++;
        }
    }
    return array
}



module.exports = {
    extract
}
