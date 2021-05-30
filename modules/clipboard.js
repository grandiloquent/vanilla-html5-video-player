 async function readText() {
     const string = await navigator.clipboard.readText();
     return string;
 }

 export {
     readText
 }