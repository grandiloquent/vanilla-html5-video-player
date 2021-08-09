(function () {

    const nodeNames = [];

    function getMethodName(n) {
        let rawName = n.id || '';
        if (rawName) {
            rawName = '#' + rawName;
        }
        if (!rawName) {
            rawName = (n.classList && n.classList[0]);
            if (rawName) {
                rawName = '.' + rawName;
            } else {
                return null;
            }
        }
        let nodeName = '';
        if (rawName)
            nodeName = rawName.substr(1).replace(/[_-]([a-zA-Z0-9])/g, (s, a) => a.substr(0, 1).toUpperCase() + a.substr(1));


        return [rawName, nodeName];
    }

    function makeJavaScriptCode(n, array) {
        const nodeNames = getMethodName(n);
        if (nodeNames)
            array.push(`this.${nodeNames[1]} = this.root.querySelector('${nodeNames[0]}');`);
        for (let c of n.childNodes) {
            if (c.nodeType === 1) {
                makeJavaScriptCode(c, array);
            }

        }

    }

    const array = [];
    makeJavaScriptCode($0, array);
    console.log(array.join('\n'));
})();
