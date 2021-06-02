import {
    formatDuration
} from './modules/datetime.js';
import {
    readText,
    writeText
} from './modules/clipboard.js';
import {
    getJSON
} from './modules/getJSON.js'
import {
    registerEvents,
    calculateProgressPercent,
    calculateLoadedPercent,
    progressBarClickHandler
} from './modules/video.js'

//-------------------------//

const _video = document.getElementById("html5-main-video");
const _overlay = document.getElementById("player-control-overlay");
const _playerControlsContent = document.getElementById("player-controls-content");
const _play = document.getElementById("player-control-play-pause-icon");
const _controlsBottom = document.getElementById("player-controls-bottom");
const _timeDisplay = document.getElementById("time-display");
const _progressBar = document.getElementById("progress-bar");
const _fullscreenIcon = document.getElementById("fullscreen-icon");
const _spinner = document.querySelector('.spinner');
const _toast = document.querySelector('custom-toast');
let _timer;
registerEvents(_video, {
    abort: ev => {
        console.log("abort, ");

        _progressBar.setAttribute('played', '0');
        _progressBar.setAttribute('loaded', '0');
    },
    canplay: ev => {
        _spinner.setAttribute('hidden', 'hidden');
        showControls();
    },
    durationchange: ev => {
        console.log("durationchange, ");

        _timeDisplay.setAttribute('duration', formatDuration(_video.duration));
    },
    loadeddata: ev => {
        console.log("loadeddata, ");
    },
    loadedmetadata: ev => {
        console.log("loadedmetadata, ");



        if (_video.videoWidth && _video
            .videoHeight) {
            const ratio = Math.min(_video.videoWidth / _video
                .videoHeight);
            const height = _video.videoWidth <= window.innerWidth ?
                _video
                .videoHeight :
                _video
                .videoHeight * window.innerWidth / _video.videoWidth;
            const width = _video.videoWidth <= window.innerWidth ?
                _video
                .videoWidth : window.innerWidth;
            _video.style.height = height + 'px';
            _video.style.width = width + 'px';
            _video.style.left = (_video.videoWidth <= window
                .innerWidth ?
                (window.innerWidth - _video.videoWidth) / 2 : 0) + 'px';
        }
    },
    loading: ev => {
        console.log("loading, ");

        _spinner.removeAttribute('hidden');
    },
    loadstart: event => {
        console.log("loadstart, ");

        hideControls();
        _spinner.removeAttribute('hidden');
    },
    play: ev => {
        console.log("play, ");

        _play.setAttribute('status', 'play');
        scheduleHideControls();
    },
    progress: ev => {
        //console.log("progress, ");

        //console.log("progress");
        _progressBar.setAttribute('loaded', calculateLoadedPercent(_video));
    },
    timeupdate: ev => {
        //console.log("timeupdate, ");

        // console.log("timeupdate");
        if (_controlsBottom.hasAttribute('hidden')) return;
        _timeDisplay.setAttribute('current', formatDuration(_video.currentTime));
        var percent = calculateProgressPercent(_video);
        _progressBar.setAttribute('played', percent);
    },
    volumechange: ev => {
        console.log(_video.volume);
        if (_video.muted) {
            _toast.setAttribute('message', '已静音');
        }
    },
    waiting: ev => {
        _spinner.removeAttribute('hidden');
    },
    playing: ev => {
        _play.setAttribute('status', 'play');
    },
    seeking: ev => {
        _play.setAttribute('hidden', 'hidden');
    }
});
const m3u8 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
["canplaythrough", "emptied", "ended", "error",
    "pause", "ratechange", "seeked ",
    "stalled", "suspend",
]
.forEach(evenName => {
    _video.addEventListener(evenName, event => {
        switch (evenName) {
            case 'canplaythrough': {
                console.log("canplaythrough");
                break;
            }
            case 'emptied': {
                console.log("emptied");
                break;
            }
            case 'ended': {
                console.log("ended");
                _play.setAttribute('status', 'restart');
                break;
            }
            case 'error': {
                console.log("error");
                _overlay.addEventListener('transitionend', ev => {
                    _playerControlsContent.style.visibility = 'hidden';
                });
                _overlay.classList.remove('fadein');
                _spinner.setAttribute('hidden', 'hidden');
                _toast.setAttribute('message', '无法播放视频');
                break;
            }
            case 'pause': {
                console.log("pause");
                _play.setAttribute('status', 'pause');
                //.querySelector('path').setAttribute('d',
                //  'M6,4l12,8L6,20V4z');
                scheduleHideControls();
                break;
            }


            case 'ratechange': {
                console.log("ratechange");
                break;
            }
            case 'seeked ': {
                console.log("seeked ");
                break;
            }

            case 'stalled': {
                console.log("stalled");
                break;
            }
            case 'suspend': {
                console.log("suspend");
                break;
            }


            case 'loading': {
                console.log("loading");
                break;
            }
        }
    })
});
_play.addEventListener('click', event => {
    event.stopPropagation();
    if (showDialog()) return;
    if (_video.ended) {
        _video.load();
        _video.currentTime = 0;
        _video.play();
    } else if (_video.paused) {
        _video.play();
    } else {
        _video.pause();
    }
});
_progressBar.addEventListener('click', progressBarClickHandler(_video, _progressBar));

_overlay.addEventListener('click', event => {
    if (showDialog()) return;
    showControls();
    scheduleHideControls();
});




document.getElementById('copy').addEventListener('click', event => {
    if (_video.src) {
        writeText(_video.src);
        _toast.setAttribute('message', '成功复制到剪切板');
    }

});


document.getElementById('help').addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = '/help';
});

document.getElementById('volume').addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();

    _video.muted = !_video.muted;

    if (_video.muted) {
        event.currentTarget.setAttribute('d', "M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z");
        event.currentTarget.setAttribute('name', '静音');
    } else {
        event.currentTarget.setAttribute('d', "M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z");
        event.currentTarget.setAttribute('name', "声音");
    }
});

document.getElementById('download').addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    if (!_video.src) return;
    const a = document.createElement('a');
    a.href = _video.src;
    a.setAttribute('download', 'download');
    document.body.appendChild(a);
    a.click();
    a.remove();


});

document.getElementById('analyze').addEventListener('click', event => {
    if (!_video.paused)
        _video.pause();
    const customDialog = appendDialog();

    customDialog.addEventListener('ok', async ev => {
        customDialog.remove();
        if (ev.detail.string) {
            _play.setAttribute('hidden', 'hidden');
            _spinner.removeAttribute('hidden');
            try {
                await fetchUri(ev.detail.string);
            } catch (error) {

            }
            _spinner.setAttribute('hidden', 'hidden');
        }
    });
});
// -------------------


function showControls() {
    _play.removeAttribute('hidden');
    _controlsBottom.removeAttribute('hidden');
}

function hideControls() {
    _play.setAttribute('hidden', 'hidden');
    _controlsBottom.setAttribute('hidden', 'hidden');
}

function scheduleHideControls() {
    if (_timer) {
        clearTimeout(_timer);
    }
    _timer = setTimeout(() => {
        hideControls();
    }, 5000);
}
async function fetchUri(uri) {
    const res = await getJSON(uri);
    try {
        const obj = JSON.parse(res);
        // Twitter
        if (obj.state && obj.state === 'error') {
            _play.removeAttribute('hidden');
            _toast.setAttribute('message', '无法获取视频地址');
            return;
        }
        renderYouTube(obj);
    } catch (error) {
        console.log(error);
        decode91Porn(res);
    }
}

function decode91Porn(value) {
    const m3u8 = strencode2(value).match(/(?<=src\=')[^']*(?=')/g);
    _video.pause();
    _video.src = m3u8;
    _video.play();
}


function appendDialog() {
    const customDialog = document.createElement('CUSTOM-DIALOG');
    customDialog.setAttribute('title', '视频');
    customDialog.setAttribute('placeholder', '请输入视频网址');
    customDialog.setAttribute('ok', '确定');

    document.body.appendChild(customDialog);

    return customDialog;
}

function showDialog() {
    if (!_video.src) {

        const customDialog = appendDialog();

        customDialog.addEventListener('ok', async ev => {
            customDialog.remove();
            if (ev.detail.string) {
                _play.setAttribute('hidden', 'hidden');
                _spinner.removeAttribute('hidden');
                try {
                    await fetchUri(ev.detail.string);
                } catch (error) {

                }
                _spinner.setAttribute('hidden', 'hidden');
            }
        });
        return true;
    }
    return false;
}

function renderYouTube(obj) {
    const app = document.querySelector('.app');
    const div = document.createElement('div');
    div.style.margin = '12px';
    div.style.border = '1px solid #ccc';
    const a = document.createElement('a');
    a.textContent = '音频';
    a.style.display = 'block';
    a.style.lineHeight = '32px';
    a.style.textDecoration = 'none';
    a.style.borderBottom = '1px solid #ccc';
    a.style.padding = '0 12px';
    a.style.color = '#333';
    if (obj.audio) {
        a.dataset.src = obj.audio.url;
        a.addEventListener('click', ev => {
            _video.src = a.dataset.src;
            navigator.clipboard.writeText(a.dataset.src);
        })
        div.appendChild(a);
    }
    if (obj.mp4) {
        for (const iterator of obj.mp4) {
            console.log(iterator);
            const amp = a.cloneNode();
            amp.addEventListener('click', ev => {
                _video.src = amp.dataset.src;
            })
            amp.textContent = iterator.videoQuality.label;
            amp.dataset.src = iterator.url;
            navigator.clipboard.writeText(amp.dataset.src);
            div.appendChild(amp);
        }
    }
    if (obj.videos) {
        for (const iterator of obj.videos) {
            console.log(iterator);
            const amp = a.cloneNode();
            amp.addEventListener('click', ev => {
                _video.src = amp.dataset.src;
            })
            amp.textContent = iterator.size;
            amp.dataset.src = iterator.url;
            navigator.clipboard.writeText(amp.dataset.src);
            div.appendChild(amp);
        }
    }
    app.appendChild(div);
}