import {
    formatDuration
} from './modules/datetime.js';

import {
    readText
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

const _html5MainVideo = document.getElementById("html5-main-video");
const _playerControlOverlay = document.getElementById("player-control-overlay");
const _playerControlsContent = document.getElementById("player-controls-content");
const _playerControlsMiddle = document.getElementById("player-controls-middle");
const _playerControlPlayPauseIcon = document.getElementById("player-control-play-pause-icon");
const _playerControlsBottom = document.getElementById("player-controls-bottom");
const _timeFirst = document.getElementById("time-first");
const _timeSecond = document.getElementById("time-second");
const _progressBar = document.getElementById("progress-bar");
const _progressBarLoaded = document.getElementById("progress-bar-loaded");
const _progressBarPlayed = document.getElementById("progress-bar-played");
const _progressBarPlayheadWrapper = document.getElementById("progress-bar-playhead-wrapper");
const _progressBarPlayheadDot = document.getElementById("progress-bar-playhead-dot");
const _fullscreenIcon = document.getElementById("fullscreen-icon");
const _spinner = document.querySelector('.spinner');
let _timerout;

registerEvents(_html5MainVideo, {
    loadstart: event => {
        hideControls();
        _spinner.setAttribute('hidden', 'hidden');
    },
    durationchange: ev => {
        _timeSecond.textContent = formatDuration(_html5MainVideo.duration);
    },
    canplay: ev => {
        _spinner.setAttribute('hidden', 'hidden');
        showControls();
    },
    loadedmetadata: ev => {
        if (_html5MainVideo.videoWidth && _html5MainVideo
            .videoHeight) {
            const ratio = Math.min(_html5MainVideo.videoWidth / _html5MainVideo
                .videoHeight);
            const height = _html5MainVideo.videoWidth <= window.innerWidth ?
                _html5MainVideo
                .videoHeight :
                _html5MainVideo
                .videoHeight * window.innerWidth / _html5MainVideo.videoWidth;

            const width = _html5MainVideo.videoWidth <= window.innerWidth ?
                _html5MainVideo
                .videoWidth : window.innerWidth;

            _html5MainVideo.style.height = height + 'px';
            _html5MainVideo.style.width = width + 'px';
            _html5MainVideo.style.left = (_html5MainVideo.videoWidth <= window
                .innerWidth ?
                (window.innerWidth - _html5MainVideo.videoWidth) / 2 : 0) + 'px';

        }
    },
    timeupdate: ev => {
        // console.log("timeupdate");
        _timeFirst.textContent = formatDuration(_html5MainVideo.currentTime);
        var percent = calculateProgressPercent(_html5MainVideo);
        _progressBarPlayed.style.width = percent;
        _progressBarPlayheadWrapper.style.marginLeft = percent;
    },
    progress: ev => {
        //console.log("progress");
        _progressBarLoaded.style.width = calculateLoadedPercent(_html5MainVideo);
    },
    abort: ev => {
        _progressBarPlayed.style.width = '0';
        _progressBarPlayheadWrapper.style.marginLeft = '0';
        _progressBarLoaded.style.width = '0';
    },
    loadeddata: ev => {
        _playerControlPlayPauseIcon.querySelector('path').setAttribute('d',
            'M6,4l12,8L6,20V4z');

    }

});


const m3u8 = "https://media.w3.org/2010/05/sintel/trailer.mp4";

["canplaythrough", "emptied", "ended", "error",
    "pause", "play", "playing", "ratechange", "seeked ", "seeking",
    "stalled", "suspend", "volumechange", "waiting", "loading"
]
.forEach(evenName => {
    _html5MainVideo.addEventListener(evenName, event => {
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
                _playerControlPlayPauseIcon.querySelector('path').setAttribute('d',
                    'M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38 C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74C3,7.65,3.03,7.57,3.07,7.49 C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z'
                );
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
                _playerControlPlayPauseIcon.querySelector('path').setAttribute('d',
                    'M6,4l12,8L6,20V4z');
                scheduleHideControls();
                break;
            }
            case 'play': {
                console.log("play");
                _playerControlPlayPauseIcon.querySelector('path').setAttribute('d',
                    'M9,19H7V5H9ZM17,5H15V19h2Z');
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

_playerControlPlayPauseIcon.addEventListener('click', event => {
    //logProperties();
    if (_html5MainVideo.ended) {
        _html5MainVideo.load();
        _html5MainVideo.currentTime = 0;
        _html5MainVideo.play();
    } else if (_html5MainVideo.paused) {
        _html5MainVideo.play();
    } else {
        _html5MainVideo.pause();
    }
});
_progressBar.addEventListener('click', progressBarClickHandler(_html5MainVideo, _progressBar));

function showControls() {
    _playerControlPlayPauseIcon.removeAttribute('hidden');
    _playerControlsBottom.removeAttribute('hidden');
}

function hideControls() {
    _playerControlPlayPauseIcon.setAttribute('hidden', 'hidden');
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
    showControls();
    scheduleHideControls();
});


document.getElementById('fetchVideoUrl')
    .addEventListener('click', async event => {
        const uri = document.getElementById('uri').value.trim();
        if (!uri || !uri.length) return;
        const res = await getJSON(uri);
        try {
            const obj = JSON.parse(res);
            renderYouTube(obj);
        } catch (error) {
            decode91Porn(res);
        }
    });



function decode91Porn(value) {
    const m3u8 = strencode2(value).match(/(?<=src\=')[^']*(?=')/g);
    document.getElementById('uri').value = m3u8;
    _html5MainVideo.pause();
    _html5MainVideo.src = m3u8;

}


document.getElementById('pasteButton').addEventListener('click', async event => {
    const string = await readText();
    document.getElementById('uri').value = string;
});
document.getElementById('copyButton').addEventListener('click', event => {
    _html5MainVideo.src = m3u8;
    navigator.clipboard.writeText(document.getElementById('uri').value);
});


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
        _html5MainVideo.src = a.dataset.src;
        navigator.clipboard.writeText(a.dataset.src);
    })

    div.appendChild(a);

    for (const iterator of obj.mp4) {
        console.log(iterator);
        const amp = a.cloneNode();
        amp.addEventListener('click', ev => {
            _html5MainVideo.src = amp.dataset.src;
        })
        amp.textContent = iterator.videoQuality.label;
        amp.dataset.src = iterator.url;
        navigator.clipboard.writeText(amp.dataset.src);

        div.appendChild(amp);
    }

    app.appendChild(div);
}