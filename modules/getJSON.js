async function getJSON(uri) {
   const response = await fetch('https://hxz315.com/api/video?uri=' + encodeURI(uri));
   return await response.text();
}
export {
   getJSON
}
/*
 import {
    getJSON
} from './modules/getJSON.js'
 */