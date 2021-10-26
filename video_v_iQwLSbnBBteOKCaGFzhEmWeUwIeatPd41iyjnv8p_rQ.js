function formatDuration(n){if(isNaN(n))return"0:00";n<0&&(n=-n);const t={hour:Math.floor(n/3600)%24,minute:Math.floor(n/60)%60,second:Math.floor(n)%60};return Object.entries(t).filter((n,t)=>t||n[1]).map(n=>(n[1]+"").padStart(2,"0")).join(":")}function calculateLoadedPercent(n){return n.buffered.length?n.buffered.end(0)/n.duration*100+"%":"0"}function calculateProgressPercent(n){return(n.currentTime/n.duration*100).toFixed(2)+"%"}function fuzzysearch(n,t){var r=t.length,u=n.length,i,f,e;if(u>r)return!1;if(u===r)return n===t;n:for(i=0,f=0;i<u;i++){for(e=n.charCodeAt(i);f<r;)if(t.charCodeAt(f++)===e)continue n;return!1}return!0}function writeText(n){const t=document.createElement("textarea");t.style.position="fixed";t.style.right="100%";document.body.appendChild(t);t.value=n;t.select();document.execCommand("copy");t.remove()}async function readText(){return await navigator.clipboard.readText()}function substringAfter(n,t,i){const r=n.indexOf(t);return r===-1?i||n:n.substring(r+t.length)}function substringAfterLast(n,t,i){const r=n.lastIndexOf(t);return r===-1?i||n:n.substring(r+t.length)}function substringBefore(n,t,i){const r=n.indexOf(t);return r===-1?i||n:n.substring(0,r)}function substringBeforeLast(n,t,i){const r=n.lastIndexOf(t);return r===-1?i||n:n.substring(0,r)}async function getStringAsync(n,t){const i=await fetch(n,{method:"GET",...t});if(!i.ok)throw new Error;return await i.text()}function durationToSeconds(n){let t=0;if(/(\d{1,2}:){1,2}\d{1,2}/.test(n)){const i=n.split(":");for(let n=i.length-1;n>-1;n--)t+=Math.pow(60,n)*parseInt(i[i.length-n-1]);return t}return t=parseInt(n),isNaN(t)&&(t=0),t}function touchMove(n,t){const i=n.getBoundingClientRect();let r=(t.touches[0].clientX-i.x)/(i.width-28)*100;return clamp(r,0,100)}function clamp(n,t,i){return n>i?i:n<t?t:n}function makeOverlay(){const u=document.createElement("DIV");u.setAttribute("class","ytp-cued-thumbnail-overlay");const i=document.createElement("BUTTON");i.setAttribute("class","ytp-button");const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("height","100%");n.setAttribute("version","1.1");n.setAttribute("viewBox","0 0 68 48");n.setAttribute("width","100%");const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("class","ytp-button-path");t.setAttribute("d","M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z");t.setAttribute("fill","#f00");n.appendChild(t);const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M 45,24 27,14 27,34");r.setAttribute("fill","#fff");n.appendChild(r);i.appendChild(n);u.appendChild(i)}async function start(n){const t=n||new URL(window.location).searchParams.get("q");if(t){/^\/video\d+\//.test(t)&&(t="https://www.xvideos.com"+t);const i=await fetch(`https://service-mayeka3y-1258705152.hk.apigw.tencentcs.com/release/?v=${t}`);video.src=await i.text();try{await video.play()}catch(r){}}}async function applyVideos(){async function i(){const n=await fetch("http://47.106.105.122/api/video/random");if(!n.ok)throw new Error(n.statusText);return await n.json()}function r(){new IntersectionObserver(async n=>{n[0].isIntersecting&&await t()}).observe(document.querySelector(".spinner"))}async function t(){const r=await i(),t=document.createDocumentFragment();r.forEach(i=>{const r=document.createElement("DIV");r.setAttribute("data-id",i.id);r.setAttribute("data-href",i.url);r.setAttribute("class","ytm-large-media-item");const b=document.createElement("A"),f=document.createElement("DIV");f.setAttribute("class","video-thumbnail-container-large");const k=document.createElement("DIV");k.setAttribute("class","video-thumbnail-bg");f.appendChild(k);const e=document.createElement("IMG");e.setAttribute("class","ytm-video-with-context-renderer");e.setAttribute("data-src",i.thumbnail);n.observe(e);f.appendChild(e);const h=document.createElement("DIV");h.setAttribute("class","video-thumbnail-overlay-bottom-group");const c=document.createElement("DIV");c.setAttribute("class","ytm-thumbnail-overlay-time-status-renderer");c.appendChild(document.createTextNode(formatDuration(i.duration)));h.appendChild(c);f.appendChild(h);b.appendChild(f);r.appendChild(b);const o=document.createElement("DIV");o.setAttribute("class","details");const l=document.createElement("DIV");l.setAttribute("class","large-media-channel");const a=document.createElement("DIV");a.setAttribute("class","ytm-channel-thumbnail-with-link-renderer");const v=document.createElement("DIV");v.setAttribute("class","channel-thumbnail-icon");v.appendChild(document.createTextNode(i.type===3?"57":i.type===1?"91":"XV"));a.appendChild(v);l.appendChild(a);o.appendChild(l);const s=document.createElement("DIV");s.setAttribute("class","large-media-item-info");const y=document.createElement("DIV");y.setAttribute("class","large-media-item-metadata");const d=document.createElement("H3");d.appendChild(document.createTextNode(i.title));y.appendChild(d);s.appendChild(y);const p=document.createElement("DIV");p.setAttribute("class","large-media-item-menu");const w=document.createElement("BUTTON");w.setAttribute("class","icon-button");const g=document.createElement("C3-ICON"),u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("xmlns","http://www.w3.org/2000/svg");u.setAttribute("enable-background","new 0 0 24 24");u.setAttribute("height","24");u.setAttribute("viewBox","0 0 24 24");u.setAttribute("width","24");const nt=document.createElementNS("http://www.w3.org/2000/svg","path");nt.setAttribute("d","M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z");u.appendChild(nt);g.appendChild(u);w.appendChild(g);p.appendChild(w);s.appendChild(p);o.appendChild(s);r.appendChild(o);r.addEventListener("click",()=>{const n=r.getAttribute("data-href"),t=r.getAttribute("data-id");fetch(`http://47.106.105.122/api/video/record?id=${t}`).then(n=>n.text()).then(n=>{console.log(n)});video.pause();video.currentTime=0;progressBarPlayed.style.width="0";progressBarLoaded.style.width="0";progressBarPlayheadWrapper.style.marginLeft="0";start(n)});t.appendChild(r)});contextRenderer.appendChild(t)}const n=new IntersectionObserver(t=>{t[0].isIntersecting&&(t[0].target.src=t[0].target.dataset.src,n.unobserve(t[0].target))});r();await t()}class CustomToast extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super();this.root=this.attachShadow({mode:"open"});const r=document.createElement("style");r.textContent=CustomToast.getStyle();this.root.appendChild(r);const n=document.createElement("DIV");n.setAttribute("class","c3-toast");const t=document.createElement("DIV");t.setAttribute("class","notification-action-renderer");const i=document.createElement("DIV");i.setAttribute("class","notification-action-response-text");t.appendChild(i);n.appendChild(t);this.root.appendChild(n);this.c3Toast=n;this.notificationActionResponseText=i;this.messages=[];this.timer=0}connectedCallback(){}disconnectedCallback(){}showMessage(){if(this.messages.length&&!this.showing){const n=this.messages.shift();this.notificationActionResponseText.textContent=n;this.c3Toast.setAttribute("dir","in");this.showing=!0;this.timer&&clearTimeout(this.timer);this.timer=setTimeout(()=>{this.c3Toast.setAttribute("dir","out"),setTimeout(()=>{this.showing=!1,this.showMessage()},195)},3e3)}}attributeChangedCallback(n,t,i){n==="message"&&(this.messages.push(i),this.showMessage())}adoptedCallback(){}static getTemplate(n){return`
        ${CustomToast.getStyle()}
        <div>
            ${n}
        </div>
        `}static getStyle(){return`
        .c3-toast[dir="in"] {
            transition: margin 225ms cubic-bezier(0.0, 0.0, 0.2, 1);
            margin-bottom: 0;
        }
        
        .c3-toast[dir="out"] {
            transition: margin 195ms cubic-bezier(0.4, 0.0, 1, 1);
        }
        
        .c3-toast {
            display: block;
            position: fixed;
            z-index: 4;
            left: 0;
            right: 0;
            bottom: 0;
            box-sizing: border-box;
            padding: 14px 24px;
            font-size: 1.4rem;
            color: #ffffff;
            background: hsl(0, 0%, 20%);
            will-change: transform;
            margin-bottom: -100%;
        }
        
        .notification-action-renderer {
            display: flex;
            align-items: center;
        }
        
        .notification-action-response-text {
            flex-grow: 1;
            padding-right: 1rem;
            font-size:14px;
        }
        
        `}}customElements.define("custom-toast",CustomToast);const actionDownload=document.querySelector("#action-download");actionDownload.addEventListener("click",n=>{n.stopPropagation(),window.JInterface.download(videos[0])});const timeFirst=document.querySelector(".time-first"),timeSecond=document.querySelector(".time-second"),progressBarPlayed=document.querySelector(".progress-bar-played"),progressBarLoaded=document.querySelector(".progress-bar-loaded"),progressBarPlayheadWrapper=document.querySelector(".progress-bar-playhead-wrapper"),customToast=document.querySelector("custom-toast"),ytmProgressBar=document.querySelector(".ytm-progress-bar"),playerControlOverlay=document.querySelector(".player-control-overlay"),spinner=document.querySelector("#spinner"),playerControlPlayPauseIcon=document.querySelector(".player-control-play-pause-icon");let timer=0,precent,videos,waiting=!1;const video=document.querySelector(".html5-main-video");video.volume=0;video.addEventListener("timeupdate",()=>{timeFirst.textContent=formatDuration(video.currentTime);const n=calculateProgressPercent(video);progressBarPlayed.style.width=n;progressBarPlayheadWrapper.style.marginLeft=n});video.addEventListener("loadedmetadata",()=>{});video.addEventListener("loadeddata",()=>{timeSecond.textContent=formatDuration(video.duration)});video.addEventListener("progress",()=>{progressBarLoaded.style.width=calculateLoadedPercent(video)});video.addEventListener("error",()=>{customToast.setAttribute("message","无法播放视频")});video.addEventListener("waiting",()=>{playing=!1,spinner.style.display="block",playerControlPlayPauseIcon.style.display="none",playerControlOverlay.style.display="block",clearTimeout(timer)});video.addEventListener("play",()=>{});video.addEventListener("playing",()=>{waiting&&(timeSecond.textContent=formatDuration(video.duration),playing=!0,spinner.style.display="none",playerControlPlayPauseIcon.style.display="block",clearTimeout(timer),timer=setTimeout(()=>{playerControlOverlay.style.display="none"},5e3),waiting=!1)});video.addEventListener("canplaythrough",()=>{});video.addEventListener("ended",()=>{spinner.style.display="none",playerControlPlayPauseIcon.style.display="block",clearTimeout(timer),playerControlOverlay.style.display="block",playerControlPlayPauseIcon.querySelector("svg").innerHTML=`<g>
                                        <path d="M6,4l12,8L6,20V4z"></path>
                                    </g>`});video.addEventListener("durationchange",()=>{video.duration>0&&(timeSecond.textContent=formatDuration(video.duration),playing=!0,spinner.style.display="none",playerControlPlayPauseIcon.style.display="block")});ytmProgressBar.addEventListener("touchstart",n=>{(clearTimeout(timer),precent=touchMove(ytmProgressBar,n),video.paused||video.pause(),isNaN(precent))||(progressBarPlayheadWrapper.style.marginLeft=precent+"%",progressBarPlayed.style.width=progressBarPlayheadWrapper.style.marginLeft,timeFirst.textContent=formatDuration(precent*video.duration/100))});ytmProgressBar.addEventListener("touchmove",n=>{(precent=touchMove(ytmProgressBar,n),isNaN(precent))||(progressBarPlayheadWrapper.style.marginLeft=precent+"%",progressBarPlayed.style.width=progressBarPlayheadWrapper.style.marginLeft,timeFirst.textContent=formatDuration(precent*video.duration/100))});ytmProgressBar.addEventListener("touchend",async()=>{clearTimeout(timer);timer=setTimeout(()=>{playerControlOverlay.style.display="none"},5e3);precent=clamp(precent,0,100);const n=precent*video.duration/100;if(!isNaN(n)&&(timeFirst.textContent=formatDuration(n),progressBarPlayheadWrapper.style.marginLeft=precent+"%",progressBarPlayed.style.width=progressBarPlayheadWrapper.style.marginLeft,video.currentTime=n,video.paused))try{await video.play()}catch(t){}});ytmProgressBar.addEventListener("click",n=>{n.stopPropagation();let t=(n.pageX-ytmProgressBar.getClientRects()[0].left)/ytmProgressBar.getClientRects()[0].width;t=Math.max(0,t);t=Math.min(1,t);video.currentTime=video.duration*t});video.addEventListener("abort",()=>{console.log("abort",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("canplay",()=>{console.log("canplay",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("canplaythrough",()=>{console.log("canplaythrough",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("durationchange",()=>{console.log("durationchange",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("emptied",()=>{console.log("emptied",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("ended",()=>{console.log("ended",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("error",()=>{console.log("error",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("loadeddata",()=>{console.log("loadeddata",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("loadedmetadata",()=>{console.log("loadedmetadata",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("loadstart",()=>{console.log("loadstart",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("pause",()=>{console.log("pause",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("play",()=>{console.log("play",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("playing",()=>{console.log("playing",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("progress",()=>{console.log("progress",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("ratechange",()=>{console.log("ratechange",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("seeked ",()=>{console.log("seeked ",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("seeking",()=>{console.log("seeking",video.videoWidth,video.videoHeight,video.duration),waiting=!0});video.addEventListener("stalled",()=>{console.log("stalled",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("suspend",()=>{console.log("suspend",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("volumechange",()=>{console.log("volumechange",video.videoWidth,video.videoHeight,video.duration)});video.addEventListener("waiting",()=>{console.log("waiting",video.videoWidth,video.videoHeight,video.duration)});start();const ytpAutohide=document.querySelector(".ytp-autohide");ytpAutohide.addEventListener("click",()=>{video.removeAttribute("muted"),video.muted=!1,video.volume=1,ytpAutohide.style.display="none"});let playing=!1;const player=document.querySelector("#player");player.addEventListener("click",()=>{playing&&(playerControlOverlay.style.display="block",playerControlOverlay.className=playerControlOverlay.className+" fadein",timer=setTimeout(()=>{playerControlOverlay.style.display="none"},5e3))});playerControlPlayPauseIcon.addEventListener("click",n=>{n.stopPropagation(),video.paused?(video.play(),timer=setTimeout(()=>{playerControlOverlay.style.display="none"},5e3),playerControlPlayPauseIcon.querySelector("svg").innerHTML=`<path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path>`):(video.pause(),clearTimeout(timer),playing=!1,playerControlPlayPauseIcon.querySelector("svg").innerHTML=`<g>
                                        <path d="M6,4l12,8L6,20V4z"></path>
                                    </g>`)});const iconButton=document.querySelector(".full-screen");iconButton.addEventListener("click",async n=>{n.stopPropagation();try{await video.requestFullscreen();screen.orientation.lock&&screen.orientation.lock("landscape")}catch(t){}});const contextRenderer=document.querySelector(".context-renderer");applyVideos()