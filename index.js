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
    loadstart: event => {
        hideControls();
        _spinner.setAttribute('hidden', 'hidden');
    },
    durationchange: ev => {
        _timeDisplay.setAttribute('duration', formatDuration(_video.duration));
    },
    canplay: ev => {
        _spinner.setAttribute('hidden', 'hidden');
        showControls();
    },
    loadedmetadata: ev => {
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
    timeupdate: ev => {
        // console.log("timeupdate");
        if (_controlsBottom.hasAttribute('hidden')) return;
        _timeDisplay.setAttribute('current', formatDuration(_video.currentTime));
        var percent = calculateProgressPercent(_video);
        _progressBar.setAttribute('played', percent);
    },
    progress: ev => {
        //console.log("progress");
        _progressBar.setAttribute('loaded', calculateLoadedPercent(_video));
    },
    abort: ev => {
        _progressBar.setAttribute('played', '0');
        _progressBar.setAttribute('loaded', '0');
    },
    loadeddata: ev => {
        _play.setAttribute('status', 'pause');
    }
});
const m3u8 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
["canplaythrough", "emptied", "ended", "error",
    "pause", "play", "playing", "ratechange", "seeked ", "seeking",
    "stalled", "suspend", "volumechange", "waiting", "loading"
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
                showToast('无法播放视频');
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
            case 'play': {
                console.log("play");
                _play.setAttribute('status', 'play');
                //.querySelector('path').setAttribute('d',
                //  'M9,19H7V5H9ZM17,5H15V19h2Z');
                scheduleHideControls();
                break;
            }
            case 'playing': {
                console.log("playing");
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
            case 'seeking': {
                console.log("seeking");
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
            case 'volumechange': {
                console.log("volumechange");
                break;
            }
            case 'waiting': {
                console.log("waiting");
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




document.querySelector('#copy').addEventListener('click', event => {
    if (_video.src) {
        writeText(_video.src);
        _toast.setAttribute('message', '成功复制到剪切板');
    }
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
        renderYouTube(obj);
    } catch (error) {
        console.log(error);
        decode91Porn(res);
    }
}

function decode91Porn(value) {
    const m3u8 = strencode2(value).match(/(?<=src\=')[^']*(?=')/g);
    document.getElementById('uri').value = m3u8;
    _video.pause();
    _video.src = m3u8;
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
                await fetchUri(ev.detail.string);
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


document.getElementById('help').addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = '/help';
});