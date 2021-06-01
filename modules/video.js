 function loopProperties(callback) {
     ["audioTracks", "autoplay", "buffered", "controller", "controls", "controlsList",
         "crossOrigin", "currentSrc", "currentTime", "defaultMuted",
         "defaultPlaybackRate", "disableRemotePlayback", "duration", "ended", "error",
         "loop", "mediaGroup", "mediaKeys", "muted", "networkState", "paused",
         "playbackRate", "played", "preload", "preservesPitch", "readyState", "seekable",
         "seeking", "sinkId", "src", "srcObject", "textTracks", "videoTracks", "volume",
         "autoPictureInPicture", "disablePictureInPicture", "height", "poster", "videoHeight", "videoWidth",
         "width"
     ].forEach(x => {
         callback(x);
     })
 }

 function registerEvents(video, params) {
     [
         'loadstart',
         'durationchange',
         'canplay',
         'loadedmetadata',
         "timeupdate",
         "progress",
         "abort",
         "loadeddata",
         "volumechange"
     ].forEach(x => video.addEventListener(x, params[x]));
     // 
 }

 function calculateProgressPercent(video) {
     return ((video.currentTime / video.duration) * 100).toFixed(2) + '%';
 }

 function calculateLoadedPercent(video) {
     return (video.buffered.end(0) / video.duration) * 100 + '%';
 }

 function progressBarClickHandler(video, progressBar) {
     return event => {
         let offsetXPercent = (event.pageX - progressBar.getClientRects()[0].left) / progressBar
             .getClientRects()[0].width;
         offsetXPercent = Math.max(0, offsetXPercent);
         offsetXPercent = Math.min(1, offsetXPercent);
         video.currentTime = video.duration * offsetXPercent;
     }
 }

 export {
     loopProperties,
     registerEvents,
     calculateProgressPercent,
     calculateLoadedPercent,
     progressBarClickHandler
 }