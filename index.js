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
let _timer, _timerout, _toasts = [];

function showToast(message) {
    if (document.getElementById('c3-toast')) {
        _toasts.push(message);
        return;
    }
    const c3Toast = document.createElement('DIV');
    c3Toast.className = 'c3-toast';
    c3Toast.id = 'c3-toast';
    const notificationActionRenderer = document.createElement('DIV');
    notificationActionRenderer.className = 'notification-action-renderer';
    c3Toast.appendChild(notificationActionRenderer);
    const notificationActionResponseText = document.createElement('DIV');
    notificationActionResponseText.className = 'notification-action-response-text';
    notificationActionResponseText.textContent = message || '提取码已成功复制到剪切板';
    notificationActionRenderer.appendChild(notificationActionResponseText);
    document.body.appendChild(c3Toast);
    window.requestAnimationFrame(() => {
        c3Toast.dir = 'in';
    });
    if (_timer) {
        clearTimeout(_timer);
    }
    _timer = setTimeout(() => {
        c3Toast.dir = 'out';
        setTimeout(() => {
            c3Toast.remove();
            if (_toasts.length)
                showToast(_toasts.pop())
        }, 195);
    }, 3000);
}
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
// =====================================
var encode_version = 'jsjiami.com.v5',
    eexda = '__0x9ff10',
    __0x9ff10 = ['w7FkXcKcwqs=', 'VMKAw7Fhw6Q=', 'w5nDlTY7w4A=', 'wqQ5w4pKwok=', 'dcKnwrTCtBg=', 'w45yHsO3woU=',
        '54u75py15Y6177y0PcKk5L665a2j5pyo5b2156i677yg6L+S6K2D5pW65o6D5oqo5Lmn55i/5bSn5L21', 'RsOzwq5fGQ==',
        'woHDiMK0w7HDiA==',
        '54uS5pyR5Y6r7764wr3DleS+ouWtgeaesOW/sOeooe+/nei/ruitteaWsuaOmeaKiuS4o+eateW2i+S8ng==', 'bMOKwqA=',
        'V8Knwpo=', 'csOIwoVsG1rCiUFU', '5YmL6ZiV54qm5pyC5Y2i776Lw4LCrOS+muWssOacteW8lOeqtg==', 'w75fMA==',
        'YsOUwpU=', 'wqzDtsKcw5fDvQ==', 'wqNMOGfCn13DmjTClg==', 'wozDisOlHHI=', 'GiPConNN', 'XcKzwrDCvSg=',
        'U8K+wofCmcO6'
    ];
(function (_0x1f2e93, _0x60307d) {
    var _0x1f9a0b = function (_0x35f19b) {
        while (--_0x35f19b) {
            _0x1f2e93['push'](_0x1f2e93['shift']());
        }
    };
    _0x1f9a0b(++_0x60307d);
}(__0x9ff10, 0x152));
var _0x43d9 = function (_0x13228a, _0x2ce452) {
    _0x13228a = _0x13228a - 0x0;
    var _0x424175 = __0x9ff10[_0x13228a];
    if (_0x43d9['initialized'] === undefined) {
        (function () {
            var _0x270d2c = typeof window !== 'undefined' ? window : typeof process === 'object' &&
                typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x58680b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x270d2c['atob'] || (_0x270d2c['atob'] = function (_0x5536e1) {
                var _0x15e9d3 = String(_0x5536e1)['replace'](/=+$/, '');
                for (var _0x4e6299 = 0x0, _0x3590d2, _0x48c90b, _0x557f6a = 0x0, _0x2b086d =
                        ''; _0x48c90b = _0x15e9d3['charAt'](_0x557f6a++); ~_0x48c90b && (
                        _0x3590d2 =
                        _0x4e6299 % 0x4 ? _0x3590d2 * 0x40 + _0x48c90b : _0x48c90b, _0x4e6299++
                        %
                        0x4) ? _0x2b086d += String['fromCharCode'](0xff & _0x3590d2 >> (-0x2 *
                        _0x4e6299 & 0x6)) : 0x0) {
                    _0x48c90b = _0x58680b['indexOf'](_0x48c90b);
                }
                return _0x2b086d;
            });
        }());
        var _0x4a2d38 = function (_0x1f120d, _0x1d6e11) {
            var _0x4c36f9 = [],
                _0x1c4b64 = 0x0,
                _0x18ce5c, _0x39c9fa = '',
                _0x6d02b2 = '';
            _0x1f120d = atob(_0x1f120d);
            for (var _0x13b203 = 0x0, _0x24d88b = _0x1f120d['length']; _0x13b203 <
                _0x24d88b; _0x13b203++) {
                _0x6d02b2 += '%' + ('00' + _0x1f120d['charCodeAt'](_0x13b203)['toString'](0x10))[
                    'slice'](-0x2);
            }
            _0x1f120d = decodeURIComponent(_0x6d02b2);
            for (var _0x1f76f3 = 0x0; _0x1f76f3 < 0x100; _0x1f76f3++) {
                _0x4c36f9[_0x1f76f3] = _0x1f76f3;
            }
            for (_0x1f76f3 = 0x0; _0x1f76f3 < 0x100; _0x1f76f3++) {
                _0x1c4b64 = (_0x1c4b64 + _0x4c36f9[_0x1f76f3] + _0x1d6e11['charCodeAt'](_0x1f76f3 %
                    _0x1d6e11['length'])) % 0x100;
                _0x18ce5c = _0x4c36f9[_0x1f76f3];
                _0x4c36f9[_0x1f76f3] = _0x4c36f9[_0x1c4b64];
                _0x4c36f9[_0x1c4b64] = _0x18ce5c;
            }
            _0x1f76f3 = 0x0;
            _0x1c4b64 = 0x0;
            for (var _0x2b6a92 = 0x0; _0x2b6a92 < _0x1f120d['length']; _0x2b6a92++) {
                _0x1f76f3 = (_0x1f76f3 + 0x1) % 0x100;
                _0x1c4b64 = (_0x1c4b64 + _0x4c36f9[_0x1f76f3]) % 0x100;
                _0x18ce5c = _0x4c36f9[_0x1f76f3];
                _0x4c36f9[_0x1f76f3] = _0x4c36f9[_0x1c4b64];
                _0x4c36f9[_0x1c4b64] = _0x18ce5c;
                _0x39c9fa += String['fromCharCode'](_0x1f120d['charCodeAt'](_0x2b6a92) ^ _0x4c36f9[(
                    _0x4c36f9[_0x1f76f3] + _0x4c36f9[_0x1c4b64]) % 0x100]);
            }
            return _0x39c9fa;
        };
        _0x43d9['rc4'] = _0x4a2d38;
        _0x43d9['data'] = {};
        _0x43d9['initialized'] = !![];
    }
    var _0x302f80 = _0x43d9['data'][_0x13228a];
    if (_0x302f80 === undefined) {
        if (_0x43d9['once'] === undefined) {
            _0x43d9['once'] = !![];
        }
        _0x424175 = _0x43d9['rc4'](_0x424175, _0x2ce452);
        _0x43d9['data'][_0x13228a] = _0x424175;
    } else {
        _0x424175 = _0x302f80;
    }
    return _0x424175;
};

function strencode2(_0x4f0d7a) {
    var _0x4c6de5 = {
        'Anfny': function _0x4f6a21(_0x51d0ce, _0x5a5f36) {
            return _0x51d0ce(_0x5a5f36);
        }
    };
    return _0x4c6de5[_0x43d9('0x0', 'fo#E')](unescape, _0x4f0d7a);
};
(function (_0x17883e, _0x4a42d3, _0xe4080c) {
    var _0x301ffc = {
        'lPNHL': function _0x1c947e(_0x4d57b6, _0x51f6a5) {
            return _0x4d57b6 !== _0x51f6a5;
        },
        'EPdUx': function _0x55f4cc(_0x34b7bc, _0x9f930c) {
            return _0x34b7bc === _0x9f930c;
        },
        'kjFfJ': 'jsjiami.com.v5',
        'DFsBH': function _0x5f08ac(_0x1e6fa1, _0x4c0aef) {
            return _0x1e6fa1 + _0x4c0aef;
        },
        'akiuH': _0x43d9('0x1', 'KYjt'),
        'VtfeI': function _0x4f3b7b(_0x572344, _0x5f0cde) {
            return _0x572344(_0x5f0cde);
        },
        'Deqmq': _0x43d9('0x2', 'oYRG'),
        'oKQDc': _0x43d9('0x3', 'i^vo'),
        'UMyIE': _0x43d9('0x4', 'oYRG'),
        'lRwKx': function _0x5b71b4(_0x163a75, _0x4d3998) {
            return _0x163a75 === _0x4d3998;
        },
        'TOBCR': function _0x314af8(_0x3e6efe, _0x275766) {
            return _0x3e6efe + _0x275766;
        },
        'AUOVd': _0x43d9('0x5', 'lALy')
    };
    _0xe4080c = 'al';
    try {
        if ('EqF' !== _0x43d9('0x6', 'xSW]')) {
            _0xe4080c += _0x43d9('0x7', 'oYRG');
            _0x4a42d3 = encode_version;
            if (!(_0x301ffc[_0x43d9('0x8', 'fo#E')](typeof _0x4a42d3, _0x43d9('0x9', '*oMH')) && _0x301ffc[
                    _0x43d9('0xa', 'ov6D')](_0x4a42d3, _0x301ffc[_0x43d9('0xb', '3k]D')]))) {
                _0x17883e[_0xe4080c](_0x301ffc[_0x43d9('0xc', '@&#[')]('ɾ��', _0x301ffc[_0x43d9('0xd',
                    'i^vo')]));
            }
        } else {
            return _0x301ffc[_0x43d9('0xe', 'rvlM')](unescape, input);
        }
    } catch (_0x23e6c5) {
        if ('svo' !== _0x301ffc[_0x43d9('0xf', 'TpCD')]) {
            _0x17883e[_0xe4080c]('ɾ���汾�ţ�js�ᶨ�ڵ���');
        } else {
            _0xe4080c = 'al';
            try {
                _0xe4080c += _0x301ffc[_0x43d9('0x10', 'doK*')];
                _0x4a42d3 = encode_version;
                if (!(_0x301ffc[_0x43d9('0x11', 'ZRZ4')](typeof _0x4a42d3, _0x301ffc['UMyIE']) && _0x301ffc[
                        _0x43d9('0x12', '@&#[')](_0x4a42d3, _0x301ffc['kjFfJ']))) {
                    _0x17883e[_0xe4080c](_0x301ffc[_0x43d9('0x13', 'KYjt')]('ɾ��', _0x43d9('0x14',
                        'xSW]')));
                }
            } catch (_0x4202f6) {
                _0x17883e[_0xe4080c](_0x301ffc[_0x43d9('0x15', 'oYRG')]);
            }
        }
    }
}(window));;
encode_version = 'jsjiami.com.v5';
document.getElementById('fetchVideoUrl')
    .addEventListener('click', event => {
        fetchURL()
    });

function fetchURL() {
    // 
    fetch('/api/video?uri=' + encodeURI(document.getElementById('uri').value.trim()))
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