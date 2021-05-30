const _playerContainer = document.getElementById("player-container");
const _player = document.getElementById("player");
const _html5VideoPlayer = document.getElementById("html5-video-player");
const _html5VideoContainer = document.getElementById("html5-video-container");
const _html5MainVideo = document.getElementById("html5-main-video");
const _playerControlContainer = document.getElementById("player-control-container");
const _playerControlOverlay = document.getElementById("player-control-overlay");
const _playerControlsContent = document.getElementById("player-controls-content");
const _playerControlsMiddle = document.getElementById("player-controls-middle");
const _playerControlPlayPauseIcon = document.getElementById("player-control-play-pause-icon");
const _playerControlsBottom = document.getElementById("player-controls-bottom");
const _timeDisplay = document.getElementById("time-display");
const _timeDisplayContent = document.getElementById("time-display-content");
const _timeFirst = document.getElementById("time-first");
const _timeDelimiter = document.getElementById("time-delimiter");
const _timeSecond = document.getElementById("time-second");
const _progressBar = document.getElementById("progress-bar");
const _progressBarLine = document.getElementById("progress-bar-line");
const _progressBarBackground = document.getElementById("progress-bar-background");
const _progressBarLoaded = document.getElementById("progress-bar-loaded");
const _progressBarPlayed = document.getElementById("progress-bar-played");
const _progressBarPlayheadWrapper = document.getElementById("progress-bar-playhead-wrapper");
const _progressBarPlayhead = document.getElementById("progress-bar-playhead");
const _progressBarPlayheadDot = document.getElementById("progress-bar-playhead-dot");
const _fullscreenIcon = document.getElementById("fullscreen-icon");
const _videoStream = document.querySelector(".video-stream");
const _playerControlsBackground = document.querySelector(".player-controls-background");
const _spinner = document.querySelector('.spinner');
let _timerout;

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
const m3u8 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
//"https://ccn.91p52.com//m3u8/470292/470292.m3u8?st=8405DibisPqsfP3C945aTg&e=1621596688";
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata",
    "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked ", "seeking",
    "stalled", "suspend", "timeupdate", "volumechange", "waiting", "loading"
]
.forEach(evenName => {
    _html5MainVideo.addEventListener(evenName, event => {
        switch (evenName) {
            case 'abort': {
                console.log("abort");
                break;
            }
            case 'canplay': {
                console.log("canplay");
                _spinner.setAttribute('hidden', 'hidden');
                showControls();
                break;
            }
            case 'canplaythrough': {
                console.log("canplaythrough");
                break;
            }
            case 'durationchange': {
                console.log("durationchange");
                _timeSecond.textContent = formatDuration(_html5MainVideo.duration);
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
            case 'loadeddata': {
                console.log("loadeddata");
                break;
            }
            case 'loadedmetadata': {
                console.log("loadedmetadata");
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

                break;
            }
            case 'loadstart': {
                console.log("loadstart");
                hideControls();
                _spinner.setAttribute('hidden', 'hidden');
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
            case 'progress': {
                //console.log("progress");
                _progressBarLoaded.style.width = (_html5MainVideo.buffered.end(0) /
                    _html5MainVideo
                    .duration) * 100 + '%';
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
            case 'timeupdate': {
                // console.log("timeupdate");
                _timeFirst.textContent = formatDuration(_html5MainVideo.currentTime);
                var percent = (_html5MainVideo.currentTime / _html5MainVideo.duration) * 100 +
                    '%';
                _progressBarPlayed.style.width = percent;
                _progressBarPlayheadWrapper.style.marginLeft = percent;
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
_html5MainVideo.src = m3u8;
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
function logProperties() {
    ["audioTracks", "autoplay", "buffered", "controller", "controls", "controlsList",
        "crossOrigin", "currentSrc", "currentTime", "defaultMuted",
        "defaultPlaybackRate", "disableRemotePlayback", "duration", "ended", "error",
        "loop", "mediaGroup", "mediaKeys", "muted", "networkState", "paused",
        "playbackRate", "played", "preload", "preservesPitch", "readyState", "seekable",
        "seeking", "sinkId", "src", "srcObject", "textTracks", "videoTracks", "volume",
        "autoPictureInPicture", "disablePictureInPicture", "height", "poster", "videoHeight", "videoWidth",
        "width"
    ].forEach(x => {
        console.log(`${x} = ${_html5MainVideo[x]}`);
    })
}
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
_progressBar.addEventListener('click', event => {
    let offsetXPercent = (event.pageX - _progressBar.getClientRects()[0].left) / _progressBar
        .getClientRects()[0].width;
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(1, offsetXPercent);
    _html5MainVideo.currentTime = _html5MainVideo.duration * offsetXPercent;
});


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
const formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
        hour: Math.floor(ms / 3600) % 24,
        minute: Math.floor(ms / 60) % 60,
        second: Math.floor(ms) % 60,
    };
    return Object.entries(time)
        .filter((val, index) => index || val[1])
        .map(val => (val[1] + '').padStart(2, '0'))
        .join(':');
};


document.getElementById('fetchVideoUrl')
    .addEventListener('click', event => {
        fetchURL()
    });

function fetchURL() {
    // 
    fetch('https://hxz315.com/api/video?uri=' + encodeURI(document.getElementById('uri').value.trim()))
        .then(res => res.text())
        .then(res => {
            document.getElementById('uri').value = strencode2(res).match(/(?<=src\=')[^']*(?=')/g);
            _html5MainVideo.pause();
            _html5MainVideo.src = strencode2(res).match(/(?<=src\=')[^']*(?=')/g);
            _playerControlPlayPauseIcon.querySelector('path').setAttribute('d',
                'M6,4l12,8L6,20V4z');
            _progressBarPlayed.style.width = '0';
            _progressBarPlayheadWrapper.style.marginLeft = '0';
            _progressBarLoaded.style.width = '0';

        })
}
document.getElementById('pasteButton').addEventListener('click', event => {
    navigator.clipboard.readText().then(res => {
        document.getElementById('uri').value = res;
    });
});
document.getElementById('copyButton').addEventListener('click', event => {
    navigator.clipboard.writeText(document.getElementById('uri').value);
});