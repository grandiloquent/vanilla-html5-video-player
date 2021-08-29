(function () {
    const undercore = (string) => {
        return string.replace(/(?<=\w)[A-Z]/g, m => '_' + m[0].toLowerCase());
    }
    const lower = (string) => {
        return string.substr(0, 1).toLowerCase() + string.substr(1);
    }
    const uppercase = (string) => {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
    }
    const string = `    public long Id;
    public String Uri;
    public String Directory;
    public String FileName;
    public String Content;
    public int Status;
    public int DownloadedFiles;
    public int TotalFiles;
    public long DownloadedSize;
    public long TotalSize;
    public long CreateAt;
    public long UpdateAt;`;

    const matches = [...string.matchAll(/(?<=public )([a-zA-Z]+) ([a-zA-Z]+)/g)];

    const array = [];
    for (let i = 0; i < matches.length; i++) {
        const un = undercore(matches[i][2]);
        const upper = un.toUpperCase();
        array.push(`videoTask.${matches[i][2]} = cursor.get${uppercase(matches[i][1])}(${i});`);
        //array.push(`contentValues.put("${lower(un)}", videoTask.${matches[i][2]});`);
        //array.push(`private static final String ${upper} = "${lower(un)}";`)

        //        if (matches[i][1] === 'int' || matches[i][1] === 'long')
        //            array.push(`${upper} + " INTEGER," +`);
        //        else
        //            array.push(`${upper} + " TEXT," +`);

        //        if (matches[i][1] === 'int' || matches[i][1] === 'long')
        //            array.push(`if (videoTask.${matches[i][2]} != 0) {
        //            contentValues.put("${lower(un)}", videoTask.${matches[i][2]});
        //        }`);
        //        else
        //            array.push(`if (videoTask.${matches[i][2]} != null) {
        //            contentValues.put("${lower(un)}", videoTask.${matches[i][2]});
        //        }`);

    }
    console.log(array.join('\n'));

})();


(function () {
    const undercore = (string) => {
        return string.replace(/(?<=\w)[A-Z]/g, m => '_' + m[0].toLowerCase());
    }
    const array1 = [
        'parseVideos',
        'createVideoDirectory',
        'downloadVideos',
        "parseContentLength",
        "downloadVideoFinished",
        "mergeVideo",
        "mergeVideoFinished"
    ];
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(`//  emitSynchronizeTask(TaskStatus.${undercore(array1[i]).toUpperCase()});
int ${undercore(array1[i]).toUpperCase()} = ${(i+1)};`);
    };
    const array2 = [
        'CreateDirectory',
        'CreateLogFile',
        'ReadM3u8',
        "DownloadFile",
        "mergeVideoFailed"
    ];

    for (let i = 0; i < array2.length; i++) {
        result.push(`//  emitSynchronizeTask(TaskStatus.${undercore(array1[i]).toUpperCase()});
int ERROR_${undercore(array2[i]).toUpperCase()} = ${(i+1)*-1};`);
    };
    console.log(result.join('\n'));
})();
