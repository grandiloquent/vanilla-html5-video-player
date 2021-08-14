
const share = require('./share');

const DOUYIN_REGEX = new RegExp(/(?<=https:\/\/v.douyin.com\/)[A-Za-z0-9]+/);

async function extract(uri) {
    const id = DOUYIN_REGEX.exec(uri)[0];
    let string = await share.getStringAsync({
        method: 'GET',
        hostname: 'v.douyin.com',
        path: `/${id}`
    });
    string = /(?<=video\/)\d+/.exec(string);
    string = await share.getStringAsync({
        method: 'GET',
        hostname: 'www.iesdouyin.com',
        path: `/web/api/v2/aweme/iteminfo/?item_ids=${string}`,
        headers: {
            "Referer": "https://www.iesdouyin.com/"
        }
    });
    const urlList = JSON.parse(string)['item_list'][0]['video']['play_addr']['url_list'][0];
    return urlList.replace('/playwm/','/play/');

}


module.exports = {
    extract,
    DOUYIN_REGEX
}