 // const qq = require('./qq');
 const share = require('./share');

 async function fetchBasic(videoId) {
     const response = await share.getStringAsync({
         method: 'GET',
         hostname: 'vv.video.qq.com',
         path: `/getinfo?otype=json&platform=11&defnpayver=1&appver=${'3.2.19.333'}&defn=${'shd'}&vid=${videoId}`
     });
     const jSONString = response.substring('QZOutputJson='.length, response.length - 1);
     if (!jSONString) return null;
     return JSON.parse(jSONString);
 }
 async function extract(url) {

     const videoId = share.substringExclude(url, '/', ".html");
     if (!videoId) return null;

     const basic = await fetchBasic(videoId);
     if (basic == null) return null;

     const cdn = basic.vl.vi[0].ul.ui[0].url;

     const name = basic.fl.fi[0].name;
     const id = basic.fl.fi[0].id;
     const vkey = basic.vl.vi[0].fvkey;

     //     let response = await share.getStringAsync({
     //         method: 'GET',
     //         hostname: 'vv.video.qq.com',
     //         path: `/getinfo?otype=json&platform=11&defnpayver=1&appver=${'3.2.19.333'}&defn=${name}&vid=${videoId}`
     //     });
     //     let jSONString = response.substring('QZOutputJson='.length, response.length - 1);
     //     if (!jSONString) return null;
     //     require('fs').writeFileSync('qq2.json', jSONString);
     //     let obj = JSON.parse(jSONString);

     let fn = basic.vl.vi[0].fn;
     let fc = basic.vl.vi[0].cl.fc || 1;

     response = await share.getStringAsync({
         method: 'GET',
         hostname: 'vv.video.qq.com',
         path: `/getkey?otype=json&platform=11&appver=${'3.2.19.333'}&filename=${fn}&format=${id}&vid=${videoId}`
     });
     jSONString = response.substring('QZOutputJson='.length, response.length - 1);
     
     if (!jSONString) return null;
     obj = JSON.parse(jSONString);
     const key = obj.key || vkey;
     
     return `${cdn}${fn}?vkey=${key}`;
 }


 module.exports = {
     extract
 }
