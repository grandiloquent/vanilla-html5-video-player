function makeOverlay() {
    const ytpCuedThumbnailOverlay = document.createElement('DIV');
    ytpCuedThumbnailOverlay.setAttribute('class', 'ytp-cued-thumbnail-overlay');
    const ytpButton = document.createElement('BUTTON');
    ytpButton.setAttribute('class', 'ytp-button');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '100%');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', '0 0 68 48');
    svg.setAttribute('width', '100%');
    const ytpButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    ytpButtonPath.setAttribute('class', 'ytp-button-path');
    ytpButtonPath.setAttribute('d', 'M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z');
    ytpButtonPath.setAttribute('fill', '#f00');
    svg.appendChild(ytpButtonPath);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M 45,24 27,14 27,34');
    path.setAttribute('fill', '#fff');
    svg.appendChild(path);
    ytpButton.appendChild(svg);
    ytpCuedThumbnailOverlay.appendChild(ytpButton);
}

async function start(uri) {
    // let q = uri || new URL(window.location).searchParams.get('q');
    // if (!q) return;
    // if (/^\/video\d+\//.test(q)) {
    //     q = "https://www.xvideos.com" + q;
    // }
    // const response = await fetch(`https://service-mayeka3y-1258705152.hk.apigw.tencentcs.com/release/?v=${q}`);
    // video.src = (await response.json()).videoUri;
    video.src ='https://lucidu.cn/api/obs/001_1.mp4';
    try {
        await video.play();
    } catch (e) {

    }
}

const timeFirst = document.querySelector('.time-first');
const timeSecond = document.querySelector('.time-second');
const progressBarPlayed = document.querySelector('.progress-bar-played');
const progressBarLoaded = document.querySelector('.progress-bar-loaded');
const progressBarPlayheadWrapper = document.querySelector('.progress-bar-playhead-wrapper');
const customToast = document.querySelector('custom-toast');
const ytmProgressBar = document.querySelector('.ytm-progress-bar');
const playerControlOverlay = document.querySelector('.player-control-overlay');
const spinner = document.querySelector('#spinner');
const playerControlPlayPauseIcon = document.querySelector('.player-control-play-pause-icon');
const playerControlsBottom = document.querySelector('.player-controls-bottom');

let timer = 0;
let precent, videos, waiting = false;

const video = document.querySelector('.html5-main-video');

video.addEventListener('timeupdate', ev => {
    timeFirst.textContent = formatDuration(video.currentTime);
    const percent = calculateProgressPercent(video);
    progressBarPlayed.style.width = percent;
    progressBarPlayheadWrapper.style.marginLeft = percent;
});

video.addEventListener('loadedmetadata', ev => {
});
video.addEventListener('loadeddata', ev => {

    timeSecond.textContent = formatDuration(video.duration);
});
video.addEventListener('progress', ev => {
    progressBarLoaded.style.width = calculateLoadedPercent(video);
});
video.addEventListener('error', ev => {
    customToast.setAttribute('message', '无法播放视频');
});
video.addEventListener('waiting', ev => {
    spinner.style.display = 'block';
    playerControlPlayPauseIcon.setAttribute('hidden', '');
    playerControlsBottom.setAttribute('hidden', '');
    playerControlOverlay.style.display = 'block';
    clearTimeout(timer);
});
video.addEventListener('play', ev => {

});
video.addEventListener('playing', ev => {

    timeSecond.textContent = formatDuration(video.duration);
    playing = true;
    spinner.style.display = 'none';
    playerControlPlayPauseIcon.removeAttribute('hidden');
    playerControlsBottom.removeAttribute('hidden');
    playerControlPlayPauseIcon.querySelector('svg')
        .innerHTML = `<path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path>`;
    clearTimeout(timer);
    timer = setTimeout(() => {
        playerControlOverlay.style.display = 'none';
    }, 5000);
});
video.addEventListener('canplaythrough', ev => {


});

video.addEventListener('ended', ev => {
    spinner.style.display = 'none';
    playerControlPlayPauseIcon.removeAttribute('hidden');
    clearTimeout(timer);
    playerControlOverlay.style.display = 'block';
    playerControlPlayPauseIcon.querySelector('svg')
        .innerHTML = `<g>
                                        <path d="M6,4l12,8L6,20V4z"></path>
                                    </g>`;
});

video.addEventListener('durationchange', ev => {

    if (video.duration > 0) {
        timeSecond.textContent = formatDuration(video.duration);
        playing = true;
        spinner.style.display = 'none';
        playerControlPlayPauseIcon.removeAttribute('hidden');
        //clearTimeout(timer);
        // timer = setTimeout(() => {
        //     playerControlOverlay.style.display = 'none';
        // }, 5000);
    }

});
ytmProgressBar.addEventListener('touchstart', ev => {
    clearTimeout(timer);
    precent = touchMove(ytmProgressBar, ev);
    if (!video.paused) {
        video.pause();
    }
    if (isNaN(precent)) return;
    progressBarPlayheadWrapper.style.marginLeft = precent + '%';
    progressBarPlayed.style.width =
        progressBarPlayheadWrapper.style.marginLeft;
    timeFirst.textContent =
        formatDuration(precent * (video.duration) / 100);
});
ytmProgressBar.addEventListener('touchmove', ev => {
    precent = touchMove(ytmProgressBar, ev);
    if (isNaN(precent)) return;
    progressBarPlayheadWrapper.style.marginLeft = precent + '%';
    progressBarPlayed.style.width =
        progressBarPlayheadWrapper.style.marginLeft;
    timeFirst.textContent =
        formatDuration(precent * (video.duration) / 100);
});
ytmProgressBar.addEventListener('touchend', async ev => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        playerControlOverlay.style.display = 'none';
    }, 5000);
    precent = clamp(precent, 0, 100);
    const t = precent * (video.duration) / 100;
    if (isNaN(t)) return;

    timeFirst.textContent = formatDuration(t);
    progressBarPlayheadWrapper.style.marginLeft = precent + '%';
    progressBarPlayed.style.width =
        progressBarPlayheadWrapper.style.marginLeft;
    video.currentTime = t;
    if (video.paused) {
        try {
            await video.play();
        } catch (e) {

            //this.dispatchEvent(new CustomEvent('error'));
        }
    }

});
// video.src = 'https://video-hw.xvideos-cdn.com/videos/3gp/0/3/0/xvideos.com_03080390bb5128a572423b0515af50f7.mp4?e=1634810689&ri=1024&rs=85&h=8ab029ca526b30fda0d1bedd29ca05f4';
// video.play();
// video.currentTime = durationToSeconds("12:20")

ytmProgressBar.addEventListener('click', event => {
    event.stopPropagation();
    let offsetXPercent =
        (event.pageX - ytmProgressBar.getClientRects()[0].left) /
        ytmProgressBar.getClientRects()[0].width;
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(1, offsetXPercent);
    video.currentTime = video.duration * offsetXPercent;
});

///
video.addEventListener('abort', ev => {
    console.log('abort', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('canplay', ev => {
    console.log('canplay', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('canplaythrough', ev => {
    console.log('canplaythrough', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('durationchange', ev => {
    console.log('durationchange', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('emptied', ev => {
    console.log('emptied', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('ended', ev => {
    console.log('ended', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('error', ev => {
    console.log('error', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('loadeddata', ev => {
    console.log('loadeddata', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('loadedmetadata', ev => {
    console.log('loadedmetadata', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('loadstart', ev => {
    console.log('loadstart', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('pause', ev => {
    console.log('pause', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('play', ev => {
    console.log('play', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('playing', ev => {
    console.log('playing', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('progress', ev => {
    console.log('progress', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('ratechange', ev => {
    console.log('ratechange', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('seeked ', ev => {
    console.log('seeked ', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('seeking', ev => {
    console.log('seeking', video.videoWidth, video.videoHeight, video.duration);
    waiting = true;
});

video.addEventListener('stalled', ev => {
    console.log('stalled', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('suspend', ev => {
    console.log('suspend', video.videoWidth, video.videoHeight, video.duration);
});


video.addEventListener('volumechange', ev => {
    console.log('volumechange', video.videoWidth, video.videoHeight, video.duration);
});

video.addEventListener('waiting', ev => {
    console.log('waiting', video.videoWidth, video.videoHeight, video.duration);
});

//
start();