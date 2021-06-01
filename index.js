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
const _playerControlOverlay = document.getElementById("player-control-overlay");
const _playerControlsContent = document.getElementById("player-controls-content");
const _playerControlsMiddle = document.getElementById("player-controls-middle");
const _play = document.getElementById("player-control-play-pause-icon");
const _playerControlsBottom = document.getElementById("player-controls-bottom");
const _timeDisplay = document.getElementById("time-display");
const _progressBar = document.getElementById("progress-bar");
const _fullscreenIcon = document.getElementById("fullscreen-icon");
const _spinner = document.querySelector('.spinner');
const _toast = document.querySelector('custom-toast');

let _timerout;

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
        if (_playerControlsBottom.hasAttribute('hidden')) return;
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
        //querySelector('path').setAttribute('d',
        //  'M6,4l12,8L6,20V4z');

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
                _playerControlOverlay.addEventListener('transitionend', ev => {
                    _playerControlsContent.style.visibility = 'hidden';
                });
                _playerControlOverlay.classList.remove('fadein');
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

/*
if (_html5MainVideo.canPlayType('application/vnd.apple.mpegurl')) {
    _html5MainVideo.src = m3u8;
    //
    // If no native HLS support, check if HLS.js is supported
    //
} else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(m3u8);
    hls.attachMedia(_html5MainVideo);
}
*/
/*
                  ["addTextTrack()", "captureStream()", "canPlayType()", "fastSeek()", "load()", "pause()", "play()", "seekToNextFrame()", "setMediaKeys()", "setSinkId()"]
                 */

_play.addEventListener('click', event => {
    if (showDialog()) return;
    //logProperties();
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

function showControls() {
    _play.removeAttribute('hidden');
    _playerControlsBottom.removeAttribute('hidden');
}

function hideControls() {
    _play.setAttribute('hidden', 'hidden');
    _playerControlsBottom.setAttribute('hidden', 'hidden');
}

function scheduleHideControls() {
    if (_timerout) {
        clearTimeout(_timerout);
    }
    _timerout = setTimeout(() => {
        hideControls();
    }, 5000);
}
_playerControlOverlay.addEventListener('click', event => {
    if (showDialog()) return;
    showControls();
    //scheduleHideControls();

});


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

function showDialog() {
    if (!_video.src) {
        const customDialog = document.createElement('CUSTOM-DIALOG');
        customDialog.setAttribute('title', '视频');
        customDialog.setAttribute('placeholder', '请输入视频网址');
        customDialog.setAttribute('ok', '确定');
        document.body.appendChild(customDialog);
        customDialog.addEventListener('ok', async ev => {
            console.log(ev);
            if (ev.detail.string)
                await fetchUri(ev.detail.string)
            customDialog.remove();
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
    a.dataset.src = obj.audio.url;
    a.style.display = 'block';
    a.style.lineHeight = '32px';
    a.style.textDecoration = 'none';
    a.style.borderBottom = '1px solid #ccc';
    a.style.padding = '0 12px';
    a.style.color = '#333';
    a.addEventListener('click', ev => {
        _video.src = a.dataset.src;
        navigator.clipboard.writeText(a.dataset.src);
    })

    div.appendChild(a);

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

    app.appendChild(div);
}

document.querySelector('#copy').addEventListener('click', event => {
    if (_video.src) {
        writeText(_video.src);
        _toast.setAttribute('message', '成功复制到剪切板');
    }
});