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

(function () {
    const elements = document.getElementById('promethods').querySelectorAll('tr');
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        const sub = elements[i].querySelectorAll('td');
        if (!sub.length) continue;
        let m1 = sub[0].querySelector('code').textContent.trim();
        let m2 = sub[1].querySelector('code').textContent.trim();
        let m3 = m2.substring(0, m2.indexOf('('));
        result.push(`@Override
    protected ${m1} ${m2} {
        Logger.d("${m3}");
        super.${m3}${m2.substring(m2.indexOf('(')).replaceAll(/\w+ /g,'')};
    }`);
    }
    console.log(result.join('\n'));
})();

(function () {
    const string = `        
if (m3u8String == null) return;
if (!createLogFile(directory)) return;
        if (!parseVideos(m3u8String)) return;
        if (!downloadVideos()) return;
        if (!mergeVideo()) return;`;
    const matches = [...string.matchAll(/if \(!*?([a-zA-Z0-9]+)\(\w*?\)\)(?= return;)/g)];
    console.error(matches
        .map(i => {
            return `${i[0]}{
Logger.d("Error, ${i[1]}");
return;
}`;
        }).join('\n'));
})();

(function () {

    function substring(str, f, s) {
        let start = str.indexOf(f);
        if (start == -1) return null;
        start += f.length;
        let end = str.indexOf(s, start);
        if (end == -1) return;
        return str.substring(start, end);
    }

    function substringList(str, f, s) {
        console.log('sub')
        let offset = 0;
        const result = [];

        while (1) {
            let start = str.indexOf(f, offset);
            if (start == -1) break;
            start += f.length;
            let end = str.indexOf(s, start);
            if (end == -1) break;
            result.push(str.substring(start, end));
            offset = end + s.length;
        }

        return result;
    }
    const string = `url.contains("://fans.91p20.space/")
                || url.contains("://ssl.google-analytics.com/")
                || url.contains("://syndication.realsrv.com/")
                || url.contains("://rpc-php.trafficfactory.biz/")
                || url.contains("://a.realsrv.com/")
                || url.contains("://www.gstatic.com/")`;
    console.log(substringList(string, '"', '"').sort().map(i => `"${i}"`).join(",\n"));

})();
(function () {
    const string = `package euphoria.psycho.tasks;

public interface TaskStatus {
    //  emitSynchronizeTask(TaskStatus.PARSE_VIDEOS);
    int PARSE_VIDEOS = 1;
    //  emitSynchronizeTask(TaskStatus.CREATE_VIDEO_DIRECTORY);
    int CREATE_VIDEO_DIRECTORY = 2;
    //  emitSynchronizeTask(TaskStatus.DOWNLOAD_VIDEOS);
    int DOWNLOAD_VIDEOS = 3;
    //  emitSynchronizeTask(TaskStatus.PARSE_CONTENT_LENGTH);
    int PARSE_CONTENT_LENGTH = 4;
    //  emitSynchronizeTask(TaskStatus.DOWNLOAD_VIDEO_FINISHED);
    int DOWNLOAD_VIDEO_FINISHED = 5;
    //  emitSynchronizeTask(TaskStatus.MERGE_VIDEO);
    int MERGE_VIDEO = 6;
    //  emitSynchronizeTask(TaskStatus.MERGE_VIDEO_FINISHED);
    int MERGE_VIDEO_FINISHED = 7;
    int START = 8;
    int PAUSED = 9;
    //  emitSynchronizeTask(TaskStatus.PARSE_VIDEOS);
    int ERROR_CREATE_DIRECTORY = -1;
    //  emitSynchronizeTask(TaskStatus.CREATE_VIDEO_DIRECTORY);
    int ERROR_CREATE_LOG_FILE = -2;
    //  emitSynchronizeTask(TaskStatus.DOWNLOAD_VIDEOS);
    int ERROR_READ_M3U8 = -3;
    //  emitSynchronizeTask(TaskStatus.PARSE_CONTENT_LENGTH);
    int ERROR_DOWNLOAD_FILE = -4;
    //  emitSynchronizeTask(TaskStatus.DOWNLOAD_VIDEO_FINISHED);
    int ERROR_MERGE_VIDEO_FAILED = -5;

    int ERROR_DELETE_FILE_FAILED = -6;

    int ERROR_STATUS_CODE = -7;
}`;
    const matches = [...string.matchAll(/(?<=int )([A-Z0-9_]+) = (-?\d+)(?=;)/g)];
    console.error(matches
        .map(i => {
//            return `case TaskStatus.${i[1]}:{
//break;
//}`;
        const s=i[1].toLowerCase().replaceAll(/_([a-z])/g,m=>" "+m[1].toUpperCase());
          return `case TaskStatus.${i[1]}:{
return "${s.substr(0,1).toUpperCase()}${s.substr(1)}";
}`;
        }).join('\n'));
})();
