'use strict';
import {
    adjustVideoSize,
    calculateLoadedPercent,
    calculateProgressPercent,
    clamp,
    formatDuration,
    fullScreen,
    registerEvents,
    touchMove
} from "../modules/videos_v_rQoQLTtc_QRiOUTP85OaEw.js";
import {
    buildFullscreen,
    buildFullScreenSvg,
    buildIcon,
    buildPlayButton,
    buildPlayer,
    buildPlayerContainer,
    buildPlayerControlContainer,
    buildPlayerControlsBottom,
    buildPlayerControlsMiddle,
    buildProgressBar,
    buildProgressBarBackground,
    buildProgressBarLine,
    buildProgressBarLoaded,
    buildProgressBarPlayed,
    buildProgressBarPlayhead,
    buildProgressBarPlayheadDot,
    buildProgressBarPlayheadWrapper,
    buildSpinner,
    buildTimeDelimiter,
    buildTimeDisplay,
    buildTimeDisplayContent,
    buildTimeFirst,
    buildTimeSecond,
} from "../modules/builder_v_3NMI9Nu8er1Sztj8ojaY-Q.js";
class CustomVideoPlayer extends HTMLElement {
    // Fires when an element is moved to a new document
    adoptedCallback() {}

    // Fires when an attribute was added, removed, or updated
    async attributeChangedCallback(attrName, oldVal, newVal) {
        if (!this.video.paused)
            this.video.pause();
        // if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
        //     this.video.src = newVal;
        // } else if (Hls.isSupported()) {
        //     var hls = new Hls();
        //     hls.loadSource(newVal);
        //     hls.attachMedia(this.video);
        // }
        this.video.src = newVal;
        try {
            await this.video.play();
        } catch (e) {
            console.log(e);
        }
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {
        
        const m3u8 = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
        // this.html5MainVideo.src = m3u8;
        this.overlay.addEventListener('click', event => {
            this.showControls();
            this.scheduleHideControls();
        });
        let precent;
        this.progressBar.addEventListener('touchstart', ev => {
            precent = touchMove(this.progressBar, ev, this.fullScreen);
            if (!this.video.paused) {
                this.video.pause();
            }
            this.updatePlayed(precent);
            this.timeFirst.textContent =
                formatDuration(precent * (this.video.duration) / 100);
        });
        this.progressBar.addEventListener('touchmove', ev => {
            precent = touchMove(this.progressBar, ev, this.fullScreen);
            this.updatePlayed(precent);
            this.timeFirst.textContent =
                formatDuration(precent * (this.video.duration) / 100);
        });
        this.progressBar.addEventListener('touchend', async ev => {
            precent = clamp(precent, 0, 100);
            const t = precent * (this.video.duration) / 100;
            if (isNaN(t)) return;
            this.updatePlayed(precent);
            this.timeFirst.textContent = formatDuration(t);
            this.updatePlayed(precent);
            this.video.currentTime = t;
            if (this.video.paused) {
                try {
                    await this.video.play();
                } catch (e) {
                    this.dispatchEvent(new CustomEvent('error'));
                }
            }
        });
        this.play.addEventListener('click', event => {
            event.stopPropagation();
            if (this.video.ended) {
                this.video.load();
                this.video.currentTime = 0;
                this.video.play();
            } else if (this.video.paused) {
                this.video.play();
            } else {
                this.video.pause();
            }
        });
        this.progressBar.addEventListener(
            'click',
            this.progressBarClickHandler(this.video, this.progressBar));
        this.fullScreenHandler();
        registerEvents(this.video, {
            abort: ev => {
                this.progressBarPlayed.style.width = '0';
                this.progressBarPlayheadWrapper.style.marginLeft = '0';
                this.progressBarLoaded.style.width = '0';
            },
            canplay: ev => {
                this.spinner.setAttribute('hidden', 'hidden');
                this.play.removeAttribute('hidden');
                this.showControls();
            },
            durationchange: ev => {
                this.timeSecond.textContent =
                    formatDuration(this.video.duration);
            },
            loadeddata: ev => {
                console.log('loadeddata, ');
            },
            loadedmetadata: ev => {
                adjustVideoSize(this.video);
            },
            loading: ev => {
                this.spinner.removeAttribute('hidden');
            },
            loadstart: event => {
                this.play.setAttribute('hidden', 'hidden');
                this.spinner.removeAttribute('hidden');
            },
            play: ev => {
                this.path.setAttribute('d', 'M9,19H7V5H9ZM17,5H15V19h2Z');
                this.scheduleHideControls();
            },
            progress: ev => {
                this.progressBarLoaded.style.width =
                    calculateLoadedPercent(this.video);
            },
            timeupdate: ev => {
                if (this.controlsBottom.hasAttribute('hidden')) return;
                this.timeFirst.textContent =
                    formatDuration(this.video.currentTime);
                var percent = calculateProgressPercent(this.video);
                this.progressBarPlayed.style.width = percent;
                this.progressBarPlayheadWrapper.style.marginLeft = percent;
            },
            volumechange: ev => {},
            waiting: ev => {
                this.spinner.removeAttribute('hidden');
            },
            playing: ev => {
                this.path.setAttribute('d', 'M9,19H7V5H9ZM17,5H15V19h2Z');
            },
            seeking: ev => {
                this.play.setAttribute('hidden', 'hidden');
                this.spinner.removeAttribute('hidden');
            },
            pause: ev => {
                this.path.setAttribute('d', 'M6,4l12,8L6,20V4z');
                this.scheduleHideControls();
            },
            ended: ev => {
                this.path.setAttribute(
                    'd',
                    'M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38 C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74C3,7.65,3.03,7.57,3.07,7.49 C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z');
            },
            error: ev => {
                this.overlay.addEventListener('transitionend', ev => {
                    //this.playerControlsContent.style.visibility = 'hidden';
                });
                this.overlay.classList.remove('fadein');
                this.spinner.setAttribute('hidden', 'hidden');
                this.dispatchEvent(new CustomEvent('message', {
                    detail: '无法播放视频'
                }))
            }
        });
        // this.video.addEventListener('abort', ev => { console.log('abort') })
        // this.video.addEventListener('canplay', ev => { console.log('canplay') })
        // this.video.addEventListener('canplaythrough', ev => { console.log('canplaythrough') })
        // this.video.addEventListener('durationchange', ev => { console.log('durationchange') })
        // this.video.addEventListener('emptied', ev => { console.log('emptied') })
        // this.video.addEventListener('ended', ev => { console.log('ended') })
        // this.video.addEventListener('error', ev => { console.log('error') })
        // this.video.addEventListener('loadeddata', ev => { console.log('loadeddata') })
        // this.video.addEventListener('loadedmetadata', ev => { console.log('loadedmetadata') })
        // this.video.addEventListener('loadstart', ev => { console.log('loadstart') })
        // this.video.addEventListener('pause', ev => { console.log('pause') })
        // this.video.addEventListener('play', ev => { console.log('play') })
        // this.video.addEventListener('playing', ev => { console.log('playing') })
        // this.video.addEventListener('progress', ev => { console.log('progress') })
        // this.video.addEventListener('ratechange', ev => { console.log('ratechange') })
        // this.video.addEventListener('seeked', ev => { console.log('seeked') })
        // this.video.addEventListener('seeking', ev => { console.log('seeking') })
        // this.video.addEventListener('stalled', ev => { console.log('stalled') })
        // this.video.addEventListener('suspend', ev => { console.log('suspend') })
        // this.video.addEventListener('timeupdate', ev => { console.log('timeupdate') })
        // this.video.addEventListener('volumechange', ev => { console.log('volumechange') })
        // this.video.addEventListener('waiting', ev => { console.log('waiting') })
    }

    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        this.root.innerHTML = `
<style>
#player-control-container {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.player-controls-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.fadein {
    background-color: rgba(0, 0, 0, .6) !important;
    pointer-events: auto !important;
}

[hidden][hidden] {
    display: none !important;
}

.app {
    display: block;
    padding-top: 48px;
    overflow-x: hidden;
}

.player-size {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    overflow: hidden;
    background-color: #000;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.spinner:not([hidden]) {
    color: #333;
    font-size: 1.6rem;
}

.player-controls-background-landscape {
    position: fixed;
    /* top: 0; */
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: top;
    transform: rotate(90deg);
    background-color: #000;
    z-index: -1;
}

.overlay-landscape {
    transition: all 700ms ease 0s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    touch-action: manipulation;
    transform-origin: left top;
    visibility: visible;
    height: 375px;
    width: 667px;
    transform: rotate(90deg);
    left: 100%;
}

.overlay-portrait {
    transition: transform 700ms;
    transition-property: all;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    touch-action: manipulation;
    z-index: 100;
}

.video-portrait {
    display: block;
    width: 100%;
    height: 100%;
    outline: 0;
}

.video-landscape {
    width: 667px;
    height: 375px;
    position: fixed;
    transform: translateY(-50%) rotate(90deg);
    top: 50%;

}

.player-controls-content {
    visibility: visible;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.player {
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    padding-bottom: 56.25%;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: background-color 0.3s ease-in-out 0s, background-image 0.3s ease-in-out 0s;
    position: relative;
    color: rgb(255, 255, 255);
    width: 100%;
    top: 0px;
    margin: 0px;
}

.html5-video-player {
    background-color: rgb(0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    outline: 0px;
    color: rgb(238, 238, 238);
    text-align: left;
    direction: ltr;
    font-size: 11px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: manipulation;
    justify-content: center;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.player-container {
    position: fixed;
    top: 48px;
    right: 0px;
    left: 0px;
    z-index: 1;
}

.player-control-container {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.player-controls-middle {
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
}

.player-control-play-pause-icon {
    color: inherit;
    text-transform: inherit;
    font: inherit;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    background: transparent;
    border: none;
    margin: 0px 60px;
    padding: 0px;
    width: 56px;
    height: 56px;
}

.player-control-play-pause-icon > div {
    display: inline-block;
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    fill: currentcolor;
    stroke: none;
    color: rgb(255, 255, 255);
}

.spinner {
    display: block;
    box-sizing: border-box;
    margin: 12px auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(102, 102, 102) rgb(238, 238, 238) rgb(238, 238, 238);
    border-image: initial;
    animation: 0.8s linear 0s infinite normal none running spinner;
}

.player-controls-bottom {
    align-items: center;
    bottom: 0px;
    width: 100%;
    position: absolute;
    justify-content: space-between;
    display: flex;
}

#time-display {
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-weight: 500;
}

.time-display-content {
    pointer-events: none;
    display: flex;
    align-items: center;
}

.time-first {
    color: rgb(255, 255, 255);
}

.time-delimiter {
    opacity: 0.7;
    margin: 0px 4px;
    color: rgb(255, 255, 255);
}

.time-second {
    color: rgb(255, 255, 255);
    opacity: 0.7;
}

#progress-bar {
    cursor: pointer;
    overflow: visible;
    width: 100%;
    padding: 0px 12px 0px 16px;
    align-items: center;
    display: flex;
    position: relative;
}

.progress-bar-line {
    height: 3px;
    position: absolute;
    width: calc((100% - 12px) - 16px);
    padding: 24px 0px;
    transform: translateY(-50%);
    top: 50%;
}

.progress-bar-background {
    opacity: 0.3;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 3px;
    position: absolute;
}

.progress-bar-loaded {
    opacity: 0.6;
    background-color: rgb(255, 255, 255);
    height: 3px;
    position: absolute;
    width: 0px;
}

.progress-bar-played {
    background-color: rgb(255, 0, 0);
    height: 3px;
    position: absolute;
    width: 0%;
}

.progress-bar-playhead-wrapper {
    z-index: 0;
    margin-left: 0%;
}

.progress-bar-playhead {
    padding: 8px 6px 8px 0px;
    display: block;
}

.progress-bar-playhead-dot {
    background-color: rgb(255, 0, 0);
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: block;
}

.fullscreen-icon {
    height: 48px;
    width: 48px;
    padding: 12px;
    border: none;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-transform: inherit;
    color: inherit;
    margin: 0px;
}

.fullscreen-icon > div {
    display: inline-block;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: currentcolor;
    stroke: none;
    color: rgb(255, 255, 255);
}
</style>
<div class="player-container">
    <div class="player">
        <div class="html5-video-player"><video class="video-portrait"></video></div>
    </div>
    <div class="player-control-container">
        <div class="player-controls-background"></div>
        <div class="overlay-portrait">
            <div class="player-controls-content">
                <div class="player-controls-middle">
                    <button class="player-control-play-pause-icon">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" enable-background="new 0 0 24 24" style="width: 100%; height: 100%;">
                                <g>
                                    <path d="M6,4l12,8L6,20V4z"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                    <div class="spinner"></div>
                </div>
                <div class="player-controls-bottom">
                    <div id="time-display">
                        <div class="time-display-content">
                            <div class="time-first">0:00</div>
                            <div class="time-delimiter">/</div>
                            <div class="time-second">0:00</div>
                        </div>
                    </div>
                    <div id="progress-bar">
                        <div class="progress-bar-line">
                            <div class="progress-bar-background"></div>
                            <div class="progress-bar-loaded"></div>
                            <div class="progress-bar-played"></div>
                        </div>
                        <div class="progress-bar-playhead-wrapper">
                            <div class="progress-bar-playhead">
                                <div class="progress-bar-playhead-dot"></div>
                            </div>
                        </div>
                    </div>
                    <button class="fullscreen-icon">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M7,11H6V6h5v1H7V11z M18,6h-5v1h4v4h1V6z M18,13h-1v4h-4v1h5V13z M11,17H7v-4H6v5h5V17z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`
        //        this.video = html5MainVideo;
        //        this.controlsBottom = playerControlsBottom;
        //        this.overlay = playerControlOverlay;
        //        this.playerControlsContent = playerControlsContent;
        //        this.progressBar = progressBar;
        //        this.fullscreenIcon = fullscreenIcon;
        //        this.spinner = spinner;
        //        this.playerControlContainer = playerControlContainer;
        //        this.playerControlsBackground = playerControlsBackground;
        //        this.player = player;
        //        this.playerContainer = playerContainer;
        //        this.html5VideoPlayer = html5VideoPlayer;
    }


    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    fullScreenHandler() {
        const video = this.video;
        this.fullscreenIcon.addEventListener('click', async ev => {
            if (!this.fullScreen) {
                await document.documentElement.requestFullscreen();
                if (screen.orientation.lock)
                    screen.orientation.lock("landscape");
                this.playerContainer.style.top = '0';
                this.player.style.position = 'fixed';
                this.player.style.top = "0";
                this.player.style.left = "0";
                this.player.style.bottom = "0";
                this.player.style.right = "0";
                this.playerControlsContent.style.position = 'fixed';
                this.overlay.style.position = 'fixed';
                this.html5VideoPlayer.style.position = 'fixed';
                this.dispatchEvent(new CustomEvent('fullscreen', {
                    detail: true
                }));
                this.fullScreen = true;
                console.log("landscape", video.videoWidth, video.videoHeight, window.innerWidth, window.innerHeight);
                if (!video.videoWidth || !video.videoHeight || (video.videoWidth < window.innerWidth &&
                        video.videoHeight < window.innerHeight)) return;
                const ratio = Math.max(
                    video.videoWidth / window.innerHeight,
                    video.videoHeight / window.innerWidth
                );
                video.style.width = `${video.videoWidth/ratio}px`;
                video.style.height = `${video.videoHeight/ratio}px`;
            } else {
                document.exitFullscreen();
                if (screen.orientation.lock)
                    screen.orientation.lock("portrait");
                this.playerContainer.style.top = '48px';
                this.player.removeAttribute('style');
                this.playerControlsContent.removeAttribute('style');
                this.overlay.removeAttribute('style');
                this.html5VideoPlayer.removeAttribute('style');
                this.dispatchEvent(new CustomEvent('fullscreen', {
                    detail: false
                }));
                this.fullScreen = false;
                if (!video.videoWidth || !video.videoHeight || (video.videoWidth < window.innerWidth &&
                        video.videoHeight < window.innerHeight)) return;
                const ratio = Math.max(
                    video.videoWidth / window.innerHeight,
                    video.videoHeight / window.innerWidth
                );
                video.style.width = `${video.videoWidth/ratio}px`;
                video.style.height = `${video.videoHeight/ratio}px`;
                console.log("portrait", video.videoWidth, video.videoHeight, window.innerWidth, window.innerHeight);

            }



        })
    }



    hideControls() {
        this.overlay.classList.remove('fadein');
        this.playerControlsContent.setAttribute('hidden', 'hidden');
    }
    static get observedAttributes() {
        return ['src'];
    }

    progressBarClickHandler(video, progressBar) {
        return event => {
            let offsetXPercent =
                (event.pageX - progressBar.getClientRects()[0].left) /
                progressBar.getClientRects()[0].width;
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);
            video.currentTime = video.duration * offsetXPercent;
        }
    }

    rotateControls() {
        const element = this.overlay;

    }

    scheduleHideControls() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.hideControls();
        }, 3000);
    }

    showControls() {
        this.overlay.classList.add('fadein');
        this.playerControlsContent.removeAttribute('hidden');
    }

    updatePlayed(precent) {
        this.progressBarPlayheadWrapper.style.marginLeft = precent + '%';
        this.progressBarPlayed.style.width =
            this.progressBarPlayheadWrapper.style.marginLeft;
    }
}
customElements.define('custom-video-player', CustomVideoPlayer);
// <custom-video-player></custom-video-player>
// <script src="http://localhost:8080/components/video-player.js"></script>
