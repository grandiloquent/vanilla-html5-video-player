function adjustVideoSize(video) {
    if (!video.videoWidth || !video.videoHeight || (video.videoWidth < window.innerWidth &&
            video.videoHeight < window.innerHeight)) return;
    const ratio = Math.max(
        video.videoWidth / window.innerWidth,
        video.videoHeight / window.innerHeight
    );
    video.style.width = `${video.videoWidth/ratio}px`;
    video.style.height = `${video.videoHeight/ratio}px`;
}

function calculateLoadedPercent(video) {
    if (!video.buffered.length) {
        return '0';
    }
    return (video.buffered.end(0) / video.duration) * 100 + '%';
}

function calculateProgressPercent(video) {
    return ((video.currentTime / video.duration) * 100).toFixed(2) + '%';
}

function clamp(x, min, max) {
    if (x > max) return max;
    if (x < min) return min;
    return x;
}

function formatDuration(ms) {
    if (isNaN(ms)) return '0:00';
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
}

function fullScreen(element) {
    element.style.width = window.innerHeight + 'px';
    element.style.height = window.innerWidth + 'px';
    element.style.position = 'fixed';
    element.style.transform = 'translateY(-50%) rotate(90deg)';
    element.style.top = '50%';
}

function registerEvents(video, params) {
    ['canplay', 'durationchange', 'loadedmetadata', 'loadstart', 'abort',
     'loadeddata', 'loading', 'play', 'playing', 'progress', 'timeupdate',
     'volumechange', 'waiting', 'seeked', 'seeking', 'pause', 'ended', 'error'
    ].forEach(x => video.addEventListener(x, params[x]));
    //
}

function touchMove(progressBar, ev, fullScreen) {
    const rect = progressBar.getBoundingClientRect();
    let precent = (ev.touches[0].clientX - rect.x) / (rect.width - 28) * 100;
    precent = clamp(precent, 0, 100);
    return precent;
}
export {
    adjustVideoSize,
    calculateLoadedPercent,
    calculateProgressPercent,
    clamp,
    formatDuration,
    fullScreen,
    registerEvents,
    touchMove
}
