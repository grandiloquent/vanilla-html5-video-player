function getSearchParam(uri, key) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/URL
    // https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams
    // https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/get
    const url = new URL(uri);
    return url.searchParams.get(key);
}
async function getStringAsync(uri, options) {
    const response = await fetch(uri, {
        method: 'GET',
        ...options
    });
    if (!response.ok) {
        throw new Error();
    }
    return await response.text();
}
async function readText() {
    const string = await navigator.clipboard.readText();
    return string;
}

function substringAfter(string, delimiter, missingDelimiterValue) {
    const index = string.indexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(index + delimiter.length);
    }
}

function substringAfterLast(string, delimiter, missingDelimiterValue) {
    const index = string.lastIndexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(index + delimiter.length);
    }
}

function substringBefore(string, delimiter, missingDelimiterValue) {
    const index = string.indexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(0, index);
    }
}

function substringBeforeLast(string, delimiter, missingDelimiterValue) {
    const index = string.lastIndexOf(delimiter);
    if (index === -1) {
        return missingDelimiterValue || string;
    } else {
        return string.substring(0, index);
    }
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

function render(string, obj) {
    let offset = 0;
    const results = [];
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === '{' && string.charAt(i + 1) === '{') {
            results.push(['0', string.substring(offset, i)]);
            let index = string.indexOf("}}", i + 2);
            results.push(['1', string.substring(i + 2, index)]);
            offset = index + 2;
        }
    }
    if (offset < string.length) {
        results.push(['0', string.substring(offset)]);
    }

    return results.map(i => {
        if (i[0] === '0') {
            return i[1];
        } else {
            return obj[i[1]];
        }
    }).join('');
}

export {
    getSearchParam,
    getStringAsync,
    readText,
    substringAfter,
    substringAfterLast,
    substringBefore,
    substringBeforeLast,
    writeText
}
// https://github.com/JetBrains/kotlin/blob/master/libraries/stdlib/src/kotlin/text/Strings.kt
