 async function readText() {
     const string = await navigator.clipboard.readText();
     return string;
 }

 function writeText(message) {
     const textarea = document.createElement("textarea");
     textarea.style.position = 'fixed';
     textarea.style.right = '100%';
     document.body.appendChild(textarea);
     textarea.value = message;
     textarea.select();
     document.execCommand('copy');
     textarea.remove();
 }
 export {
     readText,
     writeText
 }
