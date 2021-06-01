# 简单的网页播放器

在线演示：https://www.hxz315.com/video.html

## 文档和资源

* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
* https://developer.mozilla.org/en-US/docs/Web/Web_Components
* https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent

### 测试视频地址

* https://media.w3.org/2010/05/sintel/trailer.mp4

### 事件

VM811:1 * `abort`

	Fired when the resource was not fully loaded, but not as the result of an error.

* `canplay`

	Fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content

* `canplaythrough`

	Fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.

* `durationchange`

	Fired when the duration attribute has been updated.

* `emptied`

	Fired when the media has become empty; for example, when the media has already been loaded (or partially loaded), and the HTMLMediaElement.load() method is called to reload it.

* `ended`

	Fired when playback stops when end of the media (<audio> or <video>) is reached or because no further data is available.

* `error`

	Fired when the resource could not be loaded due to an error.

* `loadeddata`

	Fired when the first frame of the media has finished loading.

* `loadedmetadata`

	Fired when the metadata has been loaded

* `loadstart`

	Fired when the browser has started to load a resource.

* `pause`

	Fired when a request to pause play is handled and the activity has entered its paused state, most commonly occurring when the media's HTMLMediaElement.pause() method is called.

* `play`

	Fired when the paused property is changed from true to false, as a result of the HTMLMediaElement.play() method, or the autoplay attribute

* `playing`

	Fired when playback is ready to start after having been paused or delayed due to lack of data

* `progress`

	Fired periodically as the browser loads a resource.

* `ratechange`

	Fired when the playback rate has changed.

* `seeked `

	Fired when a seek operation completes

* `seeking`

	Fired when a seek operation begins

* `stalled`

	Fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.

* `suspend`

	Fired when the media data loading has been suspended.

* `timeupdate`

	Fired when the time indicated by the currentTime attribute has been updated.

* `volumechange`

	Fired when the volume has changed.

* `waiting`

	Fired when playback has stopped because of a temporary lack of data.

### 属性

* `audioTracks`

	A AudioTrackList that lists the AudioTrack objects contained in the element.

* `autoplay`

	
    A Boolean that reflects the autoplay HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.

    Note: Automatically playing audio when the user doesn't expect or desire it is a poor user experience and should be avoided in most cases, though there are exceptions. See the Autoplay guide for media and Web Audio APIs for more information. Keep in mind that browsers may ignore autoplay requests, so you should ensure that your code isn't dependent on autoplay working.

* `buffered`

	Returns a TimeRanges object that indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.

* `controller`

	Is a MediaController object that represents the media controller assigned to the element, or null if none is assigned.

* `controls`

	Is a Boolean that reflects the controls HTML attribute, indicating whether user interface items for controlling the resource should be displayed.

* `controlsList`

	Returns a DOMTokenList that helps the user agent select what controls to show on the media element whenever the user agent shows its own set of controls. The DOMTokenList takes one or more of three possible values: nodownload, nofullscreen, and noremoteplayback.

* `crossOrigin`

	A DOMString indicating the CORS setting for this media element.

* `currentSrc`

	Returns a DOMString with the absolute URL of the chosen media resource.

* `currentTime`

	A double-precision floating-point value indicating the current playback time in seconds; if the media has not started to play and has not been seeked, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.

* `defaultMuted`

	A Boolean that reflects the muted HTML attribute, which indicates whether the media element's audio output should be muted by default.

* `defaultPlaybackRate`

	A double indicating the default playback rate for the media.

* `disableRemotePlayback`

	A Boolean that sets or returns the remote playback state, indicating whether the media element is allowed to have a remote playback UI.

* `duration`

	A read-only double-precision floating-point value indicating the total duration of the media in seconds. If no media data is available, the returned value is NaN. If the media is of indefinite length (such as streamed live media, a WebRTC call's media, or similar), the value is +Infinity.

* `ended`

	Returns a Boolean that indicates whether the media element has finished playing.

* `error`

	Returns a MediaError object for the most recent error, or null if there has not been an error.

* `loop`

	A Boolean that reflects the loop HTML attribute, which indicates whether the media element should start over when it reaches the end.

* `mediaGroup`

	A DOMString that reflects the mediagroup HTML attribute, which indicates the name of the group of elements it belongs to. A group of media elements shares a common MediaController.

* `mediaKeys`

	Returns a MediaKeys object or null. MediaKeys is a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.

* `muted`

	Is a Boolean that determines whether audio is muted. true if the audio is muted and false otherwise.

* `networkState`

	Returns a unsigned short (enumeration) indicating the current state of fetching the media over the network.

* `paused`

	Returns a Boolean that indicates whether the media element is paused.

* `playbackRate`

	Is a double that indicates the rate at which the media is being played back.

* `played`

	Returns a TimeRanges object that contains the ranges of the media source that the browser has played, if any.

* `preload`

	Is a DOMString that reflects the preload HTML attribute, indicating what data should be preloaded, if any. Possible values are: none, metadata, auto.

* `preservesPitch`

	Is a Boolean that determines if the pitch of the sound will be preserved. If set to false, the pitch will adjust to the speed of the audio. This is implemented with prefixes in Firefox (mozPreservesPitch) and WebKit (webkitPreservesPitch).

* `readyState`

	Returns a unsigned short (enumeration) indicating the readiness state of the media.

* `seekable`

	Returns a TimeRanges object that contains the time ranges that the user is able to seek to, if any.

* `seeking`

	Returns a Boolean that indicates whether the media is in the process of seeking to a new position.

* `sinkId`

	Returns a DOMString that is the unique ID of the audio device delivering output, or an empty string if it is using the user agent default. This ID should be one of the MediaDeviceInfo.deviceid values returned from MediaDevices.enumerateDevices(), id-multimedia, or id-communications.

* `src`

	Is a DOMString that reflects the src HTML attribute, which contains the URL of a media resource to use.

* `srcObject`

	Is a MediaStream representing the media to play or that has played in the current HTMLMediaElement, or null if not assigned.

* `textTracks`

	Returns the list of TextTrack objects contained in the element.

* `videoTracks`

	Returns the list of VideoTrack objects contained in the element.

* `volume`

	Is a double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

###　方法

VM1114:1 * `addTextTrack()`

	Adds a text track (such as a track for subtitles) to a media element.

* `captureStream()`

	Returns MediaStream, captures a stream of the media content.

* `canPlayType()`

	Given a string specifying a MIME media type (potentially with the codecs parameter included), canPlayType() returns the string probably if the media should be playable, maybe if there's not enough information to determine whether the media will play or not, or an empty string if the media cannot be played.

* `fastSeek()`

	Quickly seeks to the given time with low precision.

* `load()`

	Resets the media to the beginning and selects the best available source from the sources provided using the src attribute or the <source> element.

* `pause()`

	Pauses the media playback.

* `play()`

	Begins playback of the media.

* `seekToNextFrame()`

	Seeks to the next frame in the media. This non-standard, experimental method makes it possible to manually drive reading and rendering of media at a custom speed, or to move through the media frame-by-frame to perform filtering or other operations.

* `setMediaKeys()`

	Returns Promise. Sets the MediaKeys keys to use when decrypting media during playback.

* `setSinkId()`

	Sets the ID of the audio device to use for output and returns a Promise. This only works when the application is authorized to use the specified device.
    
```
console.error([...$0.childNodes].filter(i=>i.nodeName==='DT' || i.nodeName=='DD').map((key,index)=>index%2==0?'* `'+key.textContent+'`\n':'\t'+key.textContent+'\n').join('\n'))
```
