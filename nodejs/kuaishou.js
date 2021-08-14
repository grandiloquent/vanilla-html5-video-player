const share = require('./share');

const KUAISHOU_REGEX = new RegExp(/(?<=https:\/\/v.kuaishou.com\/)[A-Za-z0-9]+/);

async function extract(uri) {
    const id = KUAISHOU_REGEX.exec(uri)[0];
    const headers = await share.getHeadersAsync({
        method: 'GET',
        hostname: 'v.kuaishou.com',
        path: `/${id}`
    });
    const urlParts = share.splitUrl(headers.location);
    let string = await share.getStringAsync({
        method: 'GET',
        hostname: urlParts[0],
        path: urlParts[1],
        headers: {
            "Cookie": "did=web_9db94f4e2b1d480198b8b2078e5b54da; didv=1628353110000",
        }
    });
    return share.substring(string,"\"srcNoMark\":\"","\""); 
}


module.exports = {
    extract,
    KUAISHOU_REGEX
}
