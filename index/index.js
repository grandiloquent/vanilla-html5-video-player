const video = document.querySelector('video');
const player = document.querySelector('.player');

video.muted = true;
video.autoplay = true;

video.addEventListener('durationchange', ev => {
    const ratio = video.videoHeight / video.videoWidth;
    player.style.width=`${window.innerWidth}px`;
    player.style.height = `${window.innerWidth* ratio}px`;
});

video.addEventListener('click',ev => {
    video.play();
})