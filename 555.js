(function () {

    const tableRows = document.querySelectorAll('.table-row');

    const results=[];
    for (let i = 0; i < tableRows.length; i++) {
        const year=/\d+/.exec(tableRows[i].querySelector('div').textContent)[0];
        const book=tableRows[i].querySelector('h3').textContent.trim()
       results.push(`## ${year}

${book}
`);
    }
    console.log(results.join('\n'));
})();
