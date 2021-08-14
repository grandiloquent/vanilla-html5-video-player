function wu(t, e) {
    function i() {
        this.constructor = t
    }
    bu(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
}
var ku, Eu, Su, Tu, xu, Au, Cu, Ru, Iu = function () {
    return (Iu = Object.assign || function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
    }).apply(this, arguments)
};

function Lu(t, e, i, n) {
    var r, o = arguments.length,
        s = o < 3 ? e : null === n ? n = p(e, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
    else
        for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, i, s) : r(e, i)) || s);
    return o > 3 && s && f(e, i, s), s
}

function Pu(t, e, i, n) {
    return new(i || (i = Promise))(function (r, o) {
        function s(t) {
            try {
                h(n.next(t))
            } catch (t) {
                o(t)
            }
        }

        function a(t) {
            try {
                h(n.throw(t))
            } catch (t) {
                o(t)
            }
        }

        function h(t) {
            var e;
            t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function (t) {
                t(e)
            })).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
    })
}

function Du(t, e) {
    var i, n, r, o, s = {
        label: 0,
        sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this
    }), o;

    function a(o) {
        return function (a) {
            return function (o) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; s;) try {
                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = o[1], o = [0];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                s.label = o[1];
                                break
                            }
                            if (6 === o[0] && s.label < r[1]) {
                                s.label = r[1], r = o;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(o);
                                break
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    o = e.call(t, s)
                } catch (t) {
                    o = [6, t], n = 0
                } finally {
                    i = r = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }([o, a])
        }
    }
}

function Mu(t, e) {
    if (!A(t)) throw new TypeError("key parameter must be String");
    if (!w(e)) throw new TypeError("fn parameter must be Function")
}

function Bu() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return e.length > 2 ? ["set"].concat(e) : 2 === e.length ? ["video", "container", "wrapper", "videoElement"].indexOf(e[0]) > -1 ? ["get"].concat(e) : ["set", "container"].concat(e) : ["get", "container"].concat(e)
}

function Ou(t) {
    return A(t) ? t : void 0
}

function Uu(t) {
    return Uc({
        get: function (e) {
            return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[t] : e
        },
        set: function (e) {
            return this.dispatcher.videoConfigReady ? (this.dom.videoElement[t] = e, e) : e
        }
    })
}

function Fu(t) {
    var e = k(t) ? t : {
            set: t,
            get: t,
            isBoolean: !1
        },
        i = e.set,
        n = e.get,
        r = e.isBoolean;
    return Uc({
        get: function (t) {
            return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[n] : t
        },
        set: function (t) {
            if (!this.dispatcher.videoConfigReady) return t;
            var e = r ? t ? "" : void 0 : null === t ? void 0 : t;
            return this.dom.setAttr("video", i, e), t
        }
    }, {
        preSet: !1
    })
}

function Nu(t, e) {
    return Uc({
        get: function (i) {
            var n = this.dom.getAttr("video", t);
            return this.dispatcher.videoConfigReady && this.inited ? e ? !!n : n : i
        },
        set: function (i) {
            if (!this.dispatcher.videoConfigReady) return i;
            var n = e ? i || void 0 : null === i ? void 0 : i;
            return this.dom.setAttr("video", t, n), i
        }
    })
}

function Vu(t) {
    return Uc({
        get: function (e) {
            if (!this.dispatcher.videoConfigReady || !this.inited) return e;
            var i, n = this.dom.getAttr("video", t),
                r = this.dom.videoElement[t];
            return !b(i = n) && i - Number.parseFloat(i) + 1 >= 0 && E(r) ? r : n || void 0
        },
        set: function (e) {
            return this.dispatcher.videoConfigReady ? (void 0 === e || E(e) ? i = e : A(e) && !Number.isNaN(parseFloat(e)) && (i = e), this.dom.setAttr("video", t, i), i) : e;
            var i
        }
    })
}
var zu, Hu = {
        src: [pu(), Uc({
            set: function (t) {
                return this.dispatcher.readySync && this.autoload && t !== this.src && (this.needToLoadSrc = !0), t
            }
        }), Uc({
            set: function (t) {
                return this.needToLoadSrc && (this.needToLoadSrc = !1, this.dispatcher.bus.emit("load", t)), t
            }
        }, {
            preSet: !1
        })],
        autoload: mu(),
        autoplay: [mu(), Uu("autoplay")],
        controls: [mu(), Uu("controls")],
        width: [Vu("width")],
        height: [Vu("height")],
        crossOrigin: [Uc({
            set: Ou
        }), Fu({
            set: "crossorigin",
            get: "crossOrigin"
        })],
        loop: [mu(), Uu("loop")],
        defaultMuted: [mu(), Fu({
            get: "defaultMuted",
            set: "muted",
            isBoolean: !0
        })],
        muted: [mu(), Uu("muted")],
        preload: [Uc({
            set: function (t) {
                return ["none", "auto", "metadata", ""].indexOf(t) > -1 ? t : "none"
            }
        }, {
            preSet: !0
        }), Fu("preload")],
        poster: [pu(), Uc({
            get: function (t) {
                return this.dispatcher.videoConfigReady && this.inited && this.dom.videoElement.poster || t
            },
            set: function (t) {
                return this.dispatcher.videoConfigReady ? (t.length && this.dom.setAttr("video", "poster", t), t) : t
            }
        })],
        playsInline: [Uc({
            get: function (t) {
                var e = this.dom.videoElement.playsInline;
                return this.dispatcher.videoConfigReady && this.inited ? void 0 === e ? t : e : t
            },
            set: function (t) {
                if (!this.dispatcher.videoConfigReady) return t;
                this.dom.videoElement.playsInline = t;
                var e = t ? "" : void 0;
                return this.dom.setAttr("video", "playsinline", e), this.dom.setAttr("video", "webkit-playsinline", e), this.dom.setAttr("video", "x5-playsinline", e), t
            }
        }), mu()],
        x5VideoPlayerFullscreen: [Uc({
            set: function (t) {
                return !!t
            },
            get: function (t) {
                return !!t
            }
        }), Nu("x5-video-player-fullscreen", !0)],
        x5VideoOrientation: [Uc({
            set: Ou
        }), Nu("x5-video-orientation")],
        x5VideoPlayerType: [Uc({
            set: function (t) {
                if (!this.dispatcher.videoConfigReady) return t;
                var e = "h5" === t ? "h5" : void 0;
                return this.dom.setAttr("video", "x5-video-player-type", e), t
            },
            get: function () {
                return this.dom.getAttr("video", "x5-video-player-type") ? "h5" : void 0
            }
        })],
        xWebkitAirplay: [Uc({
            set: function (t) {
                return !!t
            },
            get: function (t) {
                return !!t
            }
        }), Nu("x-webkit-airplay", !0)],
        playbackRate: [vu(1), Uu("playbackRate")],
        defaultPlaybackRate: [Uu("defaultPlaybackRate"), vu(1)],
        disableRemotePlayback: [mu(), Uu("disableRemotePlayback")],
        volume: [vu(1), Uu("volume")]
    },
    ju = (ku = function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        var n = !!C(e[0]) && e.shift();
        return e.unshift(function (t) {
            return C(t) ? t : n
        }), Nc.apply(void 0, e)
    }(), Eu = function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        var n = A(e[0]) ? e.shift() : "";
        return e.unshift(function (t) {
            return A(t) ? t : n
        }), Nc.apply(void 0, e)
    }(function (t) {
        return t.toLocaleLowerCase()
    }), Tu = d((Su = function () {
        function t(t, e) {
            l(this, "needToLoadSrc", Tu, this), l(this, "changeWatchable", xu, this), l(this, "inited", Au, this), this.src = "", l(this, "isLive", Cu, this), l(this, "box", Ru, this), this.preset = {}, this.presetConfig = {}, this.autoload = !0, this.autoplay = !1, this.controls = !1, this.width = "100%", this.height = "100%", this.crossOrigin = void 0, this.loop = !1, this.defaultMuted = !1, this.muted = !1, this.preload = "auto", this.poster = void 0, this.playsInline = !1, this.x5VideoPlayerFullscreen = !1, this.x5VideoOrientation = void 0, this.x5VideoPlayerType = void 0, this.xWebkitAirplay = !1, this.playbackRate = 1, this.defaultPlaybackRate = 1, this.disableRemotePlayback = !1, this.volume = 1, this._kernelProperty = ["isLive", "box", "preset", "kernels", "presetConfig"], this._realDomAttr = ["src", "controls", "width", "height", "crossOrigin", "loop", "muted", "preload", "poster", "autoplay", "playsInline", "x5VideoPlayerFullscreen", "x5VideoOrientation", "xWebkitAirplay", "playbackRate", "defaultPlaybackRate", "autoload", "disableRemotePlayback", "defaultMuted", "volume", "x5VideoPlayerType"], nu(this, Hu, {
                self: !0
            }), f(this, "dispatcher", {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !1
            }), f(this, "dom", {
                value: t.dom,
                enumerable: !1,
                writable: !1,
                configurable: !1
            }), this.set(e)
        }
        var e = t.prototype;
        return e.init = function () {
            var t = this;
            this._realDomAttr.forEach(function (e) {
                t[e] = t[e]
            }), this.inited = !0
        }, e.set = function (t, e) {
            k(t) ? N(this, t) : this[t] = e
        }, e.get = function (t, e) {
            return Rt(this, t, e)
        }, t
    }()).prototype, "needToLoadSrc", [tu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return !1
        }
    }), xu = d(Su.prototype, "changeWatchable", [tu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return !0
        }
    }), Au = d(Su.prototype, "inited", [tu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return !1
        }
    }), Cu = d(Su.prototype, "isLive", [ku, fu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return !1
        }
    }), Ru = d(Su.prototype, "box", [Eu, fu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return ""
        }
    }), Su),
    $u = function () {
        function t() {
            this.__events = {}, this.__unwatchHandlers = []
        }
        var e = t.prototype;
        return e.__wrapAsVideo = function (t) {
            var e = this;
            _c.forEach(function (t) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return this.__dispatcher.dom.videoElement[t]
                    },
                    set: void 0,
                    configurable: !1,
                    enumerable: !1
                })
            }), Ac.forEach(function (t) {
                Object.defineProperty(e, t, {
                    get: function () {
                        var e = this.__dispatcher.dom.videoElement;
                        return z(e[t], e)
                    },
                    set: void 0,
                    configurable: !1,
                    enumerable: !1
                })
            }), nu(this, t._realDomAttr.concat(t._kernelProperty).reduce(function (e, i) {
                return e[i] = [Uc({
                    get: function () {
                        return t[i]
                    },
                    set: function (e) {
                        return t[i] = e, e
                    }
                }), tu], e
            }, {}), {
                self: !0
            }), Sc.forEach(function (t) {
                Object.defineProperty(e, t, {
                    value: function () {
                        for (var e = this, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                        return new Promise(function (n) {
                            var r;
                            e.__dispatcher.bus.once(e.__id, "_" + t, n), (r = e.__dispatcher.bus)[/^(seek)$/.test(t) ? "emitSync" : "emit"].apply(r, [t].concat(i))
                        })
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                })
            }), xc.forEach(function (t) {
                "fullscreen" !== t && Object.defineProperty(e, t, {
                    value: function () {
                        for (var e, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                        return (e = this.__dispatcher.dom)[t].apply(e, i)
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                })
            })
        }, Object.defineProperty(e, "currentTime", {
            get: function () {
                return this.__dispatcher.kernel.currentTime
            },
            set: function (t) {
                this.__dispatcher.bus.emitSync("seek", t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "metadata", {
            get: function () {
                return this.__dispatcher.kernel.metadata
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "downloadSpeed", {
            get: function () {
                return this.__dispatcher.kernel.downloadSpeed
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "fps", {
            get: function () {
                return this.__dispatcher.kernel.fps
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "bufferInfo", {
            get: function () {
                return this.__dispatcher.kernel.bufferInfo
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "stats", {
            get: function () {
                return this.__dispatcher.kernel.stats
            },
            enumerable: !0,
            configurable: !0
        }), e.$watch = function (t, e, i) {
            var n, r = this,
                o = void 0 === i ? {} : i,
                s = o.deep,
                a = o.diff,
                h = void 0 === a || a,
                c = o.other,
                u = o.proxy,
                l = void 0 !== u && u;
            if (!A(t) && !b(t)) throw new TypeError("$watch only accept string and Array<string> as key to find the target to spy on, but not " + t + ", whose type is " + typeof t);
            var d = !0,
                f = function () {
                    d = !1;
                    var t = r.__unwatchHandlers.indexOf(f);
                    t > -1 && r.__unwatchHandlers.splice(t, 1)
                },
                p = A(t) ? t.split(".") : t,
                m = p.pop(),
                v = this.__dispatcher.videoConfig;
            return nu(0 === p.length && !c && v._realDomAttr.indexOf(m) > -1 ? v : ["isFullscreen", "fullscreenElement"].indexOf(m) > -1 ? this.__dispatcher.dom : j(c || this, p, {
                throwError: !0
            }), ((n = {})[m] = function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = k(e[e.length - 1]) ? e[e.length - 1] : {},
                    r = n.deep,
                    o = n.omit,
                    s = n.other,
                    a = n.operationPrefix,
                    h = void 0 === a ? "__" : a,
                    c = n.diff,
                    u = void 0 === c || c,
                    l = n.proxy;
                if ("function" != typeof Proxy && (l = !1), !e.length) throw new TypeError("You must pass a function or a string to find the hanlder function.");
                if (void 0 !== s && I(s)) throw new TypeError("If you want us to trigger function on the other instance, you must pass in a legal instance");
                if (!A(h)) throw new TypeError("operationPrefix must be an string");
                return function (t, i, n) {
                    var a, c, d, f = e.reduce(function (i, n, r) {
                            if (!A(n) && !w(n)) {
                                if (!r || r !== e.length - 1) throw new TypeError("You can only pass function or string as handler");
                                return i
                            }
                            return i.push(A(n) ? function (e, i) {
                                var r = j(s || t, n);
                                if (w(r)) return z(r, this)(e, i);
                                if (!o) throw new Error("You pass in a function for us to trigger, please ensure the property to be a function or set omit flag true")
                            } : n), i
                        }, []),
                        p = function (t, e) {
                            var i = this;
                            f.forEach(function (n) {
                                return z(n, i)(t, e)
                            })
                        },
                        m = !1;
                    return Oc(Uc({
                        set: function (t) {
                            var e = this;
                            a = this[i], d = void 0;
                            var n = function () {
                                return z(p, e)(c, a)
                            };
                            return r && (k(t) || b(t)) ? l ? uu(t, n, {
                                diff: u,
                                operationPrefix: h
                            }) : lu(t, n, {
                                operationPrefix: h,
                                diff: u
                            }) : t
                        },
                        get: function (t) {
                            var e = this;
                            if (d) return d;
                            if (!m) {
                                m = !0;
                                var i = function () {
                                    return z(p, e)(c, a)
                                };
                                if (r && (k(t) || b(t))) {
                                    if (l) return d = uu(t, i, {
                                        diff: u,
                                        operationPrefix: h
                                    }), a = d, c = d, d;
                                    lu(t, i, {
                                        operationPrefix: h,
                                        diff: u
                                    })
                                }
                                a = t, c = t
                            }
                            return t
                        }
                    }, {
                        preSet: !0
                    }), Uc({
                        set: function (t) {
                            return c = t, u && a === t || z(p, this)(c, a), a = t, t
                        }
                    }, {
                        preSet: !1
                    }))(t, i, n)
                }
            }(function () {
                for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                !d || this instanceof ju && !this.dispatcher.changeWatchable || z(e, this).apply(void 0, t)
            }, {
                deep: s,
                diff: h,
                proxy: l
            }), n), {
                self: !0
            }), this.__unwatchHandlers.push(f), f
        }, e.$set = function (t, e, i) {
            if (!k(t) && !b(t)) throw new TypeError("$set only support Array or Object, but not " + t + ", whose type is " + typeof t);
            w(t.__set) ? t.__set(e, i) : t[e] = i
        }, e.$del = function (t, e) {
            if (!k(t) && !b(t)) throw new TypeError("$del only support Array or Object, but not " + t + ", whose type is " + typeof t);
            w(t.__del) ? t.__del(e) : delete t[e]
        }, e.load = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return new Promise(function (i) {
                var n;
                t.__dispatcher.bus.once(t.__id, "_load", i), (n = t.__dispatcher.bus).emit.apply(n, ["load"].concat(e))
            })
        }, Object.defineProperty(e, "isPipMode", {
            get: function () {
                return document.pictureInPictureElement && document.pictureInPictureElement === this.$video
            },
            enumerable: !0,
            configurable: !0
        }), e.exitPictureInPicture = function () {
            document.exitPictureInPicture && document.pictureInPictureElement && document.exitPictureInPicture()
        }, e.$silentLoad = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("silentLoad").then(function () {
                var i;
                return (i = t.__dispatcher).silentLoad.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("silentLoad", e)
            })
        }, e.$preLoadAd = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("preLoadAd").then(function () {
                var i;
                return (i = t.__dispatcher).preLoadAd.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("preLoadAd", e)
            })
        }, e.$playNextAd = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("playNextAd").then(function () {
                var i;
                return (i = t.__dispatcher).playNextAd.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("playNextAd", e)
            })
        }, e.$preLoad = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("preLoad").then(function () {
                var i;
                return (i = t.__dispatcher).preLoad.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("preLoad", e)
            })
        }, e.$load2 = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("load2").then(function () {
                var i;
                return (i = t.__dispatcher).load2.apply(i, e)
            }).then(function (e) {
                return t.__dispatcher.bus.trigger("load2", e), e
            })
        }, e.$switchKernel = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("switchKernel").then(function () {
                var i;
                return (i = t.__dispatcher).switchKernel.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("switchKernel", e)
            })
        }, e.$loadLevel = function () {
            for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            return this.__dispatcher.bus.emit("loadLevel").then(function () {
                var i;
                return (i = t.__dispatcher).loadLevel.apply(i, e)
            }).then(function (e) {
                t.__dispatcher.bus.trigger("loadLevel", e)
            })
        }, e.$fullscreen = function (t, e) {
            if (void 0 === t && (t = !0), void 0 === e && (e = "container"), !this.__dispatcher.bus.emitSync("fullscreen", t, e)) return !1;
            var i = this.__dispatcher.dom.fullscreen(t, e);
            return this.__dispatcher.bus.triggerSync("fullscreen", t, e), i
        }, e.$emit = function (t) {
            for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            if (!A(t)) throw new TypeError("emit key parameter must be String");
            (e = this.__dispatcher.bus).emit.apply(e, [t].concat(i))
        }, e.$emitSync = function (t) {
            for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            if (!A(t)) throw new TypeError("emitSync key parameter must be String");
            return (e = this.__dispatcher.bus).emitSync.apply(e, [t].concat(i))
        }, e.$on = function (t, e) {
            this.__dispatcher.bus.on(this.__id, t, e), this.__addEvents(t, e)
        }, e.$off = function (t, e) {
            this.__dispatcher.bus.off(this.__id, t, e), this.__removeEvents(t, e)
        }, e.$once = function (t, e) {
            var i = this,
                n = function () {
                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                    z(e, this).apply(void 0, r), i.__removeEvents(t, n)
                };
            i.__addEvents(t, n), this.__dispatcher.bus.once(this.__id, t, n)
        }, e.$css = function (t) {
            for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            return (e = this.__dispatcher.dom)[t + "Style"].apply(e, i)
        }, e.$attr = function (t) {
            for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            if ("set" === t && /video/.test(i[0])) {
                if (!this.__dispatcher.videoConfigReady) return i[2];
                if (this.__dispatcher.videoConfig._realDomAttr.indexOf(i[1]) > -1) {
                    var r = i[1],
                        o = i[2];
                    return this.__dispatcher.videoConfig[r] = o, o
                }
            }
            return (e = this.__dispatcher.dom)[t + "Attr"].apply(e, i)
        }, Object.defineProperty(e, "$plugins", {
            get: function () {
                return this.__dispatcher.plugins
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "$pluginOrder", {
            get: function () {
                return this.__dispatcher.order
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "$wrapper", {
            get: function () {
                return this.__dispatcher.dom.wrapper
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "$container", {
            get: function () {
                return this.__dispatcher.dom.container
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "$video", {
            get: function () {
                return this.__dispatcher.dom.videoElement
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "isFullscreen", {
            get: function () {
                return this.__dispatcher.dom.isFullscreen
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "fullscreenElement", {
            get: function () {
                return this.__dispatcher.dom.fullscreenElement
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "container", {
            get: function () {
                return this.__dispatcher.containerConfig
            },
            set: function (t) {
                if (!k(t)) throw new Error("The config of container must be Object, but not " + typeof t + ".");
                return N(this.__dispatcher.containerConfig, t), this.__dispatcher.container
            },
            enumerable: !0,
            configurable: !0
        }), e.__addEvents = function (t, e) {
            this.__events[t] = this.__events[t] || [], this.__events[t].push(e)
        }, e.__removeEvents = function (t, e) {
            if (!T(this.__events[t])) {
                var i = this.__events[t].indexOf(e);
                i < 0 || (this.__events[t].splice(i, 1), T(this.__events[t]) && delete this.__events[t])
            }
        }, e.__destroy = function () {
            var t = this;
            this.__unwatchHandlers.forEach(function (t) {
                return t()
            }), Object.keys(this.__events).forEach(function (e) {
                b(t.__events[e]) && t.__events[e].forEach(function (i) {
                    return t.$off(e, i)
                })
            }), delete this.__events
        }, Lu([jc("silentLoad")], t.prototype, "$silentLoad", null), Lu([jc("preLoadAd")], t.prototype, "$preLoadAd", null), Lu([jc("playNextAd")], t.prototype, "$playNextAd", null), Lu([jc("preLoad")], t.prototype, "$preLoad", null), Lu([jc("load2")], t.prototype, "$load2", null), Lu([jc("switchKernel")], t.prototype, "$switchKernel", null), Lu([jc("loadLevel")], t.prototype, "$loadLevel", null), Lu([jc("fullScreen")], t.prototype, "$fullscreen", null), Lu([jc("emit")], t.prototype, "$emit", null), Lu([jc("emitSync")], t.prototype, "$emitSync", null), Lu([jc("on"), jc("addEventListener"), Fc(Mu)], t.prototype, "$on", null), Lu([jc("off"), jc("removeEventListener"), Fc(Mu)], t.prototype, "$off", null), Lu([jc("once"), Fc(Mu)], t.prototype, "$once", null), Lu([jc("css"), Fc(Bu)], t.prototype, "$css", null), Lu([jc("attr"), Fc(Bu)], t.prototype, "$attr", null), Lu([tu], t.prototype, "$plugins", null), Lu([tu], t.prototype, "$pluginOrder", null), Lu([tu], t.prototype, "$wrapper", null), Lu([tu], t.prototype, "$container", null), Lu([tu], t.prototype, "$video", null), t = Lu([Gc()], t)
    }(),
    Wu = Gc()(zu = function (t) {
        function e(e, i, n) {
            var r, o = void 0 === e ? {} : e,
                s = o.id,
                a = o.name,
                h = o.level,
                c = void 0 === h ? 0 : h,
                u = o.operable,
                l = void 0 === u || u,
                d = o.beforeCreate,
                p = o.create,
                m = o.init,
                v = o.inited,
                y = o.destroy,
                _ = o.events,
                b = void 0 === _ ? {} : _,
                E = o.data,
                x = void 0 === E ? {} : E,
                R = o.computed,
                I = void 0 === R ? {} : R,
                L = o.methods,
                P = void 0 === L ? {} : L,
                D = o.el,
                M = o.penetrate,
                B = void 0 !== M && M,
                O = o.inner,
                U = void 0 === O || O,
                F = o.autoFocus,
                V = o.className;
            if (void 0 === n && (n = {
                    name: a
                }), (r = t.call(this) || this).destroyed = !1, r.VERSION = "7.0.2-29233fb", r.__operable = !0, r.__level = 0, T(i)) throw new TypeError("lack of dispatcher");
            if (!A(s)) throw new TypeError("id of PluginConfig must be string");
            r.__id = s, r.__dispatcher = i, r.$videoConfig = r.__dispatcher.videoConfig, r.__wrapAsVideo(r.$videoConfig), r.beforeCreate = r.beforeCreate || d;
            try {
                w(r.beforeCreate) && r.beforeCreate({
                    events: b,
                    data: x,
                    computed: I,
                    methods: P
                }, n)
            } catch (t) {
                r.$throwError(t)
            }
            if (!T(P) && k(P) && g(P).forEach(function (t) {
                    var e = P[t];
                    if (!w(e)) throw new TypeError("plugins methods must be Function");
                    f(r, t, {
                        value: z(e, r),
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    })
                }), !T(b) && k(b) && g(b).forEach(function (t) {
                    if (!w(b[t])) throw new TypeError("plugins events hook must bind with Function");
                    r.$on(t, b[t])
                }), !T(x) && k(x) && N(r, x), !T(I) && k(I)) {
                var H = g(I).reduce(function (t, e) {
                    var i = I[e];
                    return w(i) ? (t[e] = Uc({
                        get: i
                    }), t) : k(i) && (w(i.get) || w(i.set)) ? (t[e] = Uc(i), t) : t
                }, {});
                nu(r, H, {
                    self: !0
                })
            }
            r.create = r.create || p, r.init = r.init || m, r.inited = r.inited || v, r.destroy = r.destroy || y, r.$dom = r.__dispatcher.dom.insertPlugin(r.__id, D, {
                penetrate: B,
                inner: U,
                autoFocus: F,
                className: V
            }), r.$inner = U, r.$autoFocus = F, r.$penetrate = B, nu(r, {
                $inner: Xc,
                $autoFocus: Xc,
                $penetrate: Xc
            }, {
                self: !0
            }), r.$operable = C(n.operable) ? n.operable : l, r.__level = S(n.level) ? n.level : c, r.$config = n;
            try {
                w(r.create) && r.create()
            } catch (t) {
                r.$throwError(t)
            }
            return r
        }
        r(e, t);
        var i = e.prototype;
        return i.__init = function (t) {
            try {
                w(this.init) && this.init(t)
            } catch (t) {
                this.$throwError(t)
            }
        }, i.__inited = function () {
            var t, e = this;
            try {
                t = w(this.inited) && this.inited()
            } catch (t) {
                this.$throwError(t)
            }
            return this.readySync = !R(t), this.ready = this.readySync ? Promise.resolve() : t.then(function (t) {
                return e.readySync = !0, t
            }).catch(function (t) {
                return M(t) ? e.$throwError(t) : Promise.reject(t)
            }), this.readySync || this.ready
        }, i.$bumpToTop = function () {
            var t = this.__dispatcher._getTopLevel(this.$inner);
            this.$level = t + 1
        }, i.$throwError = function (t) {
            this.__dispatcher.throwError(t)
        }, i.$destroy = function () {
            w(this.destroy) && this.destroy(), t.prototype.__destroy.call(this), this.__dispatcher.dom.removePlugin(this.__id), delete this.__dispatcher, delete this.$dom, this.destroyed = !0
        }, n(e, [{
            key: "$operable",
            set: function (t) {
                C(t) && (this.$dom.style.pointerEvents = t ? "auto" : "none", this.__operable = t)
            },
            get: function () {
                return this.__operable
            }
        }, {
            key: "$level",
            set: function (t) {
                S(t) && (this.__level = t, this.__dispatcher._sortZIndex())
            },
            get: function () {
                return this.__level
            }
        }]), e
    }($u)) || zu;

function qu(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), f(t, n.key, n)
    }
}

function Gu(t, e, i, n, r) {
    var o = {};
    return Object.keys(n).forEach(function (t) {
        o[t] = n[t]
    }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function (i, n) {
        return n(t, e, i) || i
    }, o), r && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(r) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
}
var Ku, Yu, Xu, Zu, Qu, Ju, tl, el, il = Object.getOwnPropertyDescriptor,
    nl = Object.keys,
    rl = ["", "o", "ms", "moz", "webkit", "webkitCurrent"],
    ol = [["", ""], ["exit", "cancel"], ["screen", "Screen"]],
    sl = {
        position: "fixed",
        zIndex: "2147483647",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        width: "100%",
        height: "100%"
    },
    al = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
    hl = ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"],
    cl = at.document,
    ul = void 0 !== cl;

function ll(t, e, i) {
    if (k(e))
        for (var n in e) ll(t, n, e[n]);
    else t.style[e] = i
}

function dl(t, e, i) {
    void 0 === i && (i = {}), k(e) && (i = e), A(t) && (e = t);
    var n = i.keyOnly,
        r = void 0 !== n && n;
    if (!ul) return r ? "" : void 0;
    if (P(t) || (t = cl), !A(e)) throw new Error("You must pass in a string as name, but not " + typeof e + ".");
    for (var o = 0; o < ol.length; o++) {
        e = e.replace(ol[o][0], ol[o][1]);
        for (var s = 0; s < rl.length; s++) {
            var a = 0 === s ? e : rl[s] + e.charAt(0).toUpperCase() + e.substr(1);
            if (void 0 !== t[a]) return r ? a : t[a]
        }
    }
    return r ? "" : void 0
}

function fl(t, e, i) {
    var n, r = void 0 === i ? {} : i,
        o = r.bubbles,
        s = void 0 === o || o,
        a = r.cancelable,
        h = void 0 === a || a;
    if (w(Event) ? n = new Event(e, {
            bubbles: s,
            cancelable: h
        }) : ul && cl.createEvent ? (n = cl.createEvent("HTMLEvents")).initEvent(e, !0, !0) : ul && cl.createEventObject && ((n = cl.createEventObject()).eventType = e, n.eventName = e), !k(n) && !x(n)) throw new Error("We can't create an object on this browser, please report to author");
    t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent ? t.fireEvent("on" + n.eventType, n) : t[e] ? t[e]() : t["on" + e] && t["on" + e]()
}
var pl = dl("fullscreenEnabled"),
    ml = !1,
    vl = new(Ku = Gc(), Yu = jc("requestFullscreen"), Xu = jc("exitFullscreen"), Zu = jc("addEventListener"), Qu = jc("removeEventListener"), Ku((Gu(el = (tl = function () {
        function t() {
            this._fullscreenElement = null, this.isNativelySupport = y(dl("fullscreenElement")) && (!y(pl) || !0 === pl), this._openKey = ul ? dl(cl.body || cl.documentElement, "requestFullscreen", {
                keyOnly: !0
            }) : "", this._exitKey = dl("exitFullscreen", {
                keyOnly: !0
            }), this._useStyleFirst = !1, this.hasUsedStyle = !1
        }
        var e, i, n, r = t.prototype;
        return r.open = function (t, e) {
            var i = (void 0 === e ? {} : e).force,
                n = void 0 !== i && i,
                r = this.fullscreenElement;
            if (r && r !== t) {
                if (!n) return fl(cl, "fullscreenerror"), !1;
                this.exit()
            }
            if (!this.useStyleFirst) {
                if (this.isNativelySupport) return w(t[this._openKey]) && t[this._openKey](), !0;
                if (t instanceof HTMLVideoElement && t.webkitSupportsFullscreen && w(t.webkitEnterFullscreen)) return t.webkitEnterFullscreen(), this._fullscreenElement = t, !0
            }
            return this._savedStyles = nl(sl).reduce(function (e, i) {
                return e[i] = t.style[i], e
            }, {}), ll(t, sl), cl.body && (this._bodyOverflow = cl.body.style.overflow, cl.body.style.overflow = "hidden"), cl.documentElement && (this._htmlOverflow = cl.documentElement.style.overflow, cl.documentElement.style.overflow = "hidden"), this._fullscreenElement = t, this.hasUsedStyle = !0, fl(t, "fullscreenchange"), !0
        }, r.exit = function () {
            if (!this.isFullscreen) return !1;
            if (this.isNativelySupport && !this.useStyleFirst && !this.hasUsedStyle) return cl[this._exitKey](), !0;
            var t = this._fullscreenElement;
            return ll(t, this._savedStyles), cl.body && (cl.body.style.overflow = this._bodyOverflow), cl.documentElement && (cl.documentElement.style.overflow = this._htmlOverflow), this._fullscreenElement = null, this._savedStyles = {}, fl(t, "fullscreenchange"), !0
        }, r.on = function (t, e, i) {
            void 0 === i && (i = cl), this._handleEvent(i, "addEventListener", t, e)
        }, r.off = function (t, e, i) {
            void 0 === i && (i = cl), this._handleEvent(i, "removeEventListener", t, e)
        }, r._handleEvent = function (t, e, i, n) {
            ("fullscreenchange" === i ? al : "fullscreenerror" === i ? hl : [i]).forEach(function (i) {
                t[e](i, n)
            })
        }, e = t, (i = [{
            key: "useStyleFirst",
            get: function () {
                return ml
            },
            set: function (t) {
                return (t = !!t) === ml ? t : (ml = t, fl(cl, "esfullscreenmethodchange"), t)
            }
        }, {
            key: "fullscreenElement",
            get: function () {
                return ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].reduce(function (t, e) {
                    return t || cl[e]
                }, null) || this._fullscreenElement
            }
        }, {
            key: "isFullscreen",
            get: function () {
                return P(this.fullscreenElement)
            }
        }]) && qu(e.prototype, i), n && qu(e, n), t
    }()).prototype, "open", [Yu], il(el, "open"), el), Gu(el, "exit", [Xu], il(el, "exit"), el), Gu(el, "on", [Zu], il(el, "on"), el), Gu(el, "off", [Qu], il(el, "off"), el), Ju = tl)) || Ju),
    gl = function () {
        if ("undefined" != typeof Map) return Map;

        function t(t, e) {
            var i = -1;
            return t.some(function (t, n) {
                return t[0] === e && (i = n, !0)
            }), i
        }
        return function () {
            function e() {
                this.__entries__ = []
            }
            return f(e.prototype, "size", {
                get: function () {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.get = function (e) {
                var i = t(this.__entries__, e),
                    n = this.__entries__[i];
                return n && n[1]
            }, e.prototype.set = function (e, i) {
                var n = t(this.__entries__, e);
                ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i])
            }, e.prototype.delete = function (e) {
                var i = this.__entries__,
                    n = t(i, e);
                ~n && i.splice(n, 1)
            }, e.prototype.has = function (e) {
                return !!~t(this.__entries__, e)
            }, e.prototype.clear = function () {
                this.__entries__.splice(0)
            }, e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null);
                for (var i = 0, n = this.__entries__; i < n.length; i++) {
                    var r = n[i];
                    t.call(e, r[1], r[0])
                }
            }, e
        }()
    }(),
    yl = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    _l = void 0 !== W && W.Math === Math ? W : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    bl = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(_l) : function (t) {
        return setTimeout(function () {
            return t(Date.now())
        }, 1e3 / 60)
    },
    wl = 2;
var kl = 20,
    El = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Sl = "undefined" != typeof MutationObserver,
    Tl = function () {
        function t() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                var i = !1,
                    n = !1,
                    r = 0;

                function o() {
                    i && (i = !1, t()), n && a()
                }

                function s() {
                    bl(o)
                }

                function a() {
                    var t = Date.now();
                    if (i) {
                        if (t - r < wl) return;
                        n = !0
                    } else i = !0, n = !1, setTimeout(s, e);
                    r = t
                }
                return a
            }(this.refresh.bind(this), kl)
        }
        return t.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, t.prototype.removeObserver = function (t) {
            var e = this.observers_,
                i = e.indexOf(t);
            ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
        }, t.prototype.refresh = function () {
            this.updateObservers_() && this.refresh()
        }, t.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function (t) {
                return t.broadcastActive()
            }), t.length > 0
        }, t.prototype.connect_ = function () {
            yl && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Sl ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, t.prototype.disconnect_ = function () {
            yl && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, t.prototype.onTransitionEnd_ = function (t) {
            var e = t.propertyName,
                i = void 0 === e ? "" : e;
            El.some(function (t) {
                return !!~i.indexOf(t)
            }) && this.refresh()
        }, t.getInstance = function () {
            return this.instance_ || (this.instance_ = new t), this.instance_
        }, t.instance_ = null, t
    }(),
    xl = function (t, e) {
        for (var i = 0, n = g(e); i < n.length; i++) {
            var r = n[i];
            f(t, r, {
                value: e[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return t
    },
    Al = function (t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView || _l
    },
    Cl = Ml(0, 0, 0, 0);

function Rl(t) {
    return parseFloat(t) || 0
}

function Il(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    return e.reduce(function (e, i) {
        return e + Rl(t["border-" + i + "-width"])
    }, 0)
}

function Ll(t) {
    var e = t.clientWidth,
        i = t.clientHeight;
    if (!e && !i) return Cl;
    var n = Al(t).getComputedStyle(t),
        r = function (t) {
            for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                var r = n[i],
                    o = t["padding-" + r];
                e[r] = Rl(o)
            }
            return e
        }(n),
        o = r.left + r.right,
        s = r.top + r.bottom,
        a = Rl(n.width),
        h = Rl(n.height);
    if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= Il(n, "left", "right") + o), Math.round(h + s) !== i && (h -= Il(n, "top", "bottom") + s)), ! function (t) {
            return t === Al(t).document.documentElement
        }(t)) {
        var c = Math.round(a + o) - e,
            u = Math.round(h + s) - i;
        1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (h -= u)
    }
    return Ml(r.left, r.top, a, h)
}
var Pl = "undefined" != typeof SVGGraphicsElement ? function (t) {
    return t instanceof Al(t).SVGGraphicsElement
} : function (t) {
    return t instanceof Al(t).SVGElement && "function" == typeof t.getBBox
};

function Dl(t) {
    return yl ? Pl(t) ? function (t) {
        var e = t.getBBox();
        return Ml(0, 0, e.width, e.height)
    }(t) : Ll(t) : Cl
}

function Ml(t, e, i, n) {
    return {
        x: t,
        y: e,
        width: i,
        height: n
    }
}
var Bl = function () {
        function t(t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ml(0, 0, 0, 0), this.target = t
        }
        return t.prototype.isActive = function () {
            var t = Dl(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, t.prototype.broadcastRect = function () {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, t
    }(),
    Ol = function () {
        return function (t, e) {
            var i, n, r, o, s, a, h, c = (n = (i = e).x, r = i.y, o = i.width, s = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, h = Object.create(a.prototype), xl(h, {
                x: n,
                y: r,
                width: o,
                height: s,
                top: r,
                right: n + o,
                bottom: s + r,
                left: n
            }), h);
            xl(this, {
                target: t,
                contentRect: c
            })
        }
    }(),
    Ul = function () {
        function t(t, e, i) {
            if (this.activeObservations_ = [], this.observations_ = new gl, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
        }
        return t.prototype.observe = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Al(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new Bl(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, t.prototype.unobserve = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Al(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
            }
        }, t.prototype.disconnect = function () {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, t.prototype.gatherActive = function () {
            var t = this;
            this.clearActive(), this.observations_.forEach(function (e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }, t.prototype.broadcastActive = function () {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    e = this.activeObservations_.map(function (t) {
                        return new Ol(t.target, t.broadcastRect())
                    });
                this.callback_.call(t, e, t), this.clearActive()
            }
        }, t.prototype.clearActive = function () {
            this.activeObservations_.splice(0)
        }, t.prototype.hasActive = function () {
            return this.activeObservations_.length > 0
        }, t
    }(),
    Fl = "undefined" != typeof WeakMap ? new WeakMap : new gl,
    Nl = function () {
        return function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var i = Tl.getInstance(),
                n = new Ul(e, i, this);
            Fl.set(this, n)
        }
    }();
["observe", "unobserve", "disconnect"].forEach(function (t) {
    Nl.prototype[t] = function () {
        var e;
        return (e = Fl.get(this))[t].apply(e, arguments)
    }
});
var Vl, zl, Hl, jl, $l, Wl, ql, Gl = void 0 !== _l.ResizeObserver ? _l.ResizeObserver : Nl;

function Kl(t) {
    if ("video" === t && (t = "videoElement"), !P(this[t])) throw new TypeError('Your target "' + t + '" is not a legal HTMLElement');
    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
    return [t].concat(i)
}

function Yl(t, e, i) {
    if (!A(e)) throw new TypeError("to handle dom's attribute or style, your attr parameter must be string, but not " + e + " in " + typeof e);
    if (!A(t)) throw new TypeError("to handle dom's attribute or style, your target parameter must be string, , but not " + t + " in " + typeof t);
    return [t, e, i]
}
var Xl, Zl, Ql, Jl, td, ed, id = (Vl = Jc("__dispatcher.videoConfigReady"), zl = Fc(Yl, Kl), Hl = Fc(Yl, Kl), jl = Fc(Yl, Kl), $l = Fc(Yl, Kl), Wl = Fc(Kl), d((ql = function () {
        function t(t, e) {
            var i = this;
            if (i.plugins = {}, i.originHTML = "", i.videoEventHandlerList = [], i.videoDomEventHandlerList = [], i.containerDomEventHandlerList = [], i.wrapperDomEventHandlerList = [], i.wrapperGuestureEventHandlerList = [], i.globalEventHandlerList = [], i.__domEventHandlerList = {}, i.__mouseInVideo = !1, i.__videoExtendedNodes = [], i.isFullscreen = !1, i.fullscreenElement = void 0, i.__dispatcher = e, !P(t) && !A(t)) throw new TypeError("Wrapper can only be string or HTMLElement, but not " + typeof t);
            var n = Ie(t);
            if (0 === n.length) throw new TypeError("Can not get dom node accroding wrapper. Please check your wrapper");
            i.wrapper = n[0], i.originHTML = i.wrapper.innerHTML;
            var r = n.find("video")[0];
            r || (r = document.createElement("video")), i.installVideo(r), i._addDomEvents(i.container, i.containerDomEventHandlerList, function (t) {
                return function () {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = i.__dispatcher.bus).triggerSync.apply(e, ["c_" + t].concat(r))
                }
            }), i._addDomEvents(i.wrapper, i.wrapperDomEventHandlerList, function (t) {
                return function () {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = i.__dispatcher.bus).triggerSync.apply(e, ["w_" + t].concat(r))
                }
            }), i._fullscreenMonitor(), vl.on("fullscreenchange", i._fullscreenMonitor), i.containerResizeObserver = new Gl(i._resizeMonitor), i.containerResizeObserver.observe(i.container), i._addGlobalEvents(document, i.globalEventHandlerList, function (t) {
                return function () {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = i.__dispatcher.bus).triggerSync.apply(e, ["g_" + t].concat(r))
                }
            })
        }
        var e = t.prototype;
        return e.installVideo = function (t, e) {
            var i = (void 0 === e ? {} : e).bindEvent,
                n = void 0 === i || i;
            if (this.__videoExtendedNodes.push(t), ye(t, "tabindex", -1), this._autoFocusToVideo(t), P(this.container)) {
                var r = this.container;
                0 === r.childNodes.length ? r.appendChild(t) : r.insertBefore(t, r.childNodes[0])
            } else t.parentElement && P(t.parentElement) && t.parentElement !== this.wrapper ? this.container = t.parentElement : (this.container = document.createElement("container"), Ie(this.container).append(t));
            return this.container.parentElement !== this.wrapper && Ie(this.wrapper).append(this.container), n && this.bindVideoEvents(t), this.videoElement = t, t
        }, e.bindVideoEvents = function (t) {
            var e = this;
            yc.forEach(function (i) {
                var n = function () {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (t = e.__dispatcher.bus).trigger.apply(t, [i].concat(r))
                };
                e.videoEventHandlerList.push(n), Te(t, i, n)
            }), this._addDomEvents(t, this.videoDomEventHandlerList, function (t) {
                return e._getEventHandler(t, {
                    penetrate: !0
                })
            })
        }, e.removeVideo = function () {
            var t = this,
                e = this.videoElement;
            return this._autoFocusToVideo(this.videoElement, !1), yc.forEach(function (e, i) {
                Se(t.videoElement, e, t.videoEventHandlerList[i])
            }), this.videoEventHandlerList = [], bc.forEach(function (e, i) {
                Se(t.videoElement, e, t.videoDomEventHandlerList[i])
            }), this.videoDomEventHandlerList = [], Ie(e).remove(), delete this.videoElement, e
        }, e.insertPlugin = function (t, e, i) {
            var n = this;
            if (void 0 === i && (i = {}), !A(t)) throw new TypeError("insertPlugin id parameter must be string");
            if (P(this.plugins[t]) && this.removePlugin(t), A(e))
                if (/<[^>]+?>/.test(e)) {
                    var r = document.createElement("div");
                    r.innerHTML = e, e = r.children[0]
                } else e = document.createElement(function (t) {
                    return V(t).replace(/([A-Z])/g, function (t) {
                        return "-" + t.toLowerCase()
                    })
                }(e));
            else k(e) && (i = e);
            var o = i,
                s = o.inner,
                a = o.penetrate,
                h = o.autoFocus,
                c = i.className,
                u = e && P(e) ? e : document.createElement("div");
            b(c) && (c = c.join(" ")), A(c) && _e(u, c), this.plugins[t] = u;
            var l = s ? this.container : this.wrapper,
                d = s ? this.videoElement : this.container;
            return (C(h) ? h : s) && this._autoFocusToVideo(u), a && (this.__domEventHandlerList[t] = this.__domEventHandlerList[t] || [], this._addDomEvents(u, this.__domEventHandlerList[t], function (t) {
                return n._getEventHandler(t, {
                    penetrate: a
                })
            }), this.__videoExtendedNodes.push(u)), l.lastChild === d ? (l.appendChild(u), u) : (l.insertBefore(u, d.nextSibling), u)
        }, e.removePlugin = function (t) {
            var e = this;
            if (A(t)) {
                var i = this.plugins[t];
                P(i) && (i.parentNode && i.parentNode.removeChild(i), this._autoFocusToVideo(i, !0)), T(this.__domEventHandlerList[t]) || (bc.forEach(function (i, n) {
                    Se(e.plugins[t], i, e.__domEventHandlerList[t][n])
                }), delete this.__domEventHandlerList[t]), delete this.plugins[t]
            }
        }, e.setPluginsZIndex = function (t) {
            var e = this;
            t.forEach(function (t, i) {
                return Ae(t.match(/^(videoElement|container)$/) ? e[t] : e.plugins[t], "z-index", ++i)
            })
        }, e.setAttr = function (t, e, i) {
            ye(this[t], e, i)
        }, e.getAttr = function (t, e) {
            return ge(this[t], e)
        }, e.setStyle = function (t, e, i) {
            Ae(this[t], e, i)
        }, e.getStyle = function (t, e) {
            return xe(this[t], e)
        }, e.requestFullscreen = function (t) {
            return vl.open(this[t])
        }, e.exitFullscreen = function () {
            return vl.exit()
        }, e.fullscreen = function (t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = "container");
            for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
            return t ? this.requestFullscreen.apply(this, [e].concat(n)) : this.exitFullscreen.apply(this, n)
        }, e.focus = function () {
            this.videoElement.focus()
        }, e.destroy = function () {
            var t = this;
            this.removeVideo(), bc.forEach(function (e, i) {
                Se(t.container, e, t.containerDomEventHandlerList[i]), Se(t.wrapper, e, t.wrapperDomEventHandlerList[i])
            }), wc.forEach(function (e, i) {
                Se(document, e, t.globalEventHandlerList[i])
            }), vl.off("fullscreenchange", this._fullscreenMonitor), this.containerResizeObserver.unobserve(this.container), this.containerResizeObserver.disconnect(), this.wrapper.innerHTML = this.originHTML, delete this.containerResizeObserver, delete this.wrapper, delete this.plugins
        }, e._addDomEvents = function (t, e, i) {
            bc.forEach(function (n) {
                var r = i(n);
                e.push(r), kc.indexOf(n) > -1 ? Te(t, n, r, !1, {
                    passive: !0
                }) : Te(t, n, r)
            })
        }, e._addGlobalEvents = function (t, e, i) {
            wc.forEach(function (n) {
                var r = i(n);
                e.push(r), kc.indexOf(n) > -1 ? Te(t, n, r, !1, {
                    passive: !0
                }) : Te(t, n, r)
            })
        }, e._autoFocusToVideo = function (t, e) {
            void 0 === e && (e = !1), P(t) && ((e ? Se : Te)(t, "mouseup", this._focusToVideo, !1, !0), (e ? Se : Te)(t, "touchend", this._focusToVideo, !1, !0))
        }, e._focusToVideo = function () {
            var t = window.scrollX || window.pageXOffset,
                e = window.scrollY || window.pageYOffset;
            window.scrollTo(t, e)
        }, e._resizeMonitor = function (t, e) {
            for (var i, n = u(t); !(i = n()).done;) {
                var r = i.value.contentRect,
                    o = r.left,
                    s = r.top,
                    a = r.width,
                    h = r.height;
                this.__dispatcher.bus.triggerSync("c_resize", {
                    width: a,
                    height: h,
                    left: o,
                    top: s
                })
            }
        }, e._fullscreenMonitor = function (t) {
            var e = vl.fullscreenElement,
                i = this.isFullscreen;
            !e || !D(this.wrapper, e) && e !== this.wrapper ? (this.isFullscreen = !1, this.fullscreenElement = void 0) : (this.isFullscreen = !0, this.fullscreenElement = this.wrapper === e ? "wrapper" : this.container === e ? "container" : this.videoElement === e ? "video" : e), x(t) && i !== this.isFullscreen && this.__dispatcher.bus.triggerSync("fullscreenchange", t)
        }, e._getEventHandler = function (t, e) {
            var i = this;
            if (!e.penetrate || ["mouseenter", "mouseleave"].indexOf(t) < 0) return function () {
                for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                (e = i.__dispatcher.bus).triggerSync.apply(e, [t].concat(r))
            };
            var n = function (t) {
                return i.__videoExtendedNodes.indexOf(t) > -1 || i.__videoExtendedNodes.reduce(function (e, i) {
                    return e || D(i, t)
                }, !1)
            };
            return function () {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                var o, s, a = e[0],
                    h = a.toElement,
                    c = a.currentTarget,
                    u = a.relatedTarget,
                    l = a.type,
                    d = h || u;
                return i.__mouseInVideo && "mouseleave" === l && !n(d) ? (i.__mouseInVideo = !1, (o = i.__dispatcher.bus).triggerSync.apply(o, ["mouseleave"].concat(e))) : !i.__mouseInVideo && "mouseenter" === l && n(c) ? (i.__mouseInVideo = !0, (s = i.__dispatcher.bus).triggerSync.apply(s, ["mouseenter"].concat(e))) : void 0
            }
        }, t
    }()).prototype, "setAttr", [Vl, zl], p(ql.prototype, "setAttr"), ql.prototype), d(ql.prototype, "getAttr", [Hl], p(ql.prototype, "getAttr"), ql.prototype), d(ql.prototype, "setStyle", [jl], p(ql.prototype, "setStyle"), ql.prototype), d(ql.prototype, "getStyle", [$l], p(ql.prototype, "getStyle"), ql.prototype), d(ql.prototype, "requestFullscreen", [Wl], p(ql.prototype, "requestFullscreen"), ql.prototype), d(ql.prototype, "_focusToVideo", [Kc], p(ql.prototype, "_focusToVideo"), ql.prototype), d(ql.prototype, "_resizeMonitor", [Kc], p(ql.prototype, "_resizeMonitor"), ql.prototype), d(ql.prototype, "_fullscreenMonitor", [Kc], p(ql.prototype, "_fullscreenMonitor"), ql.prototype), ql),
    nd = {
        width: "100%",
        top: "0px",
        display: "block"
    },
    rd = function (t, e, i) {
        var n = this;
        n.__dispatcher = t, n.__target = e, ["width", "height", "bottom", "top", "position", "display"].forEach(function (t) {
            f(n, t, {
                get: function () {
                    return this.__dispatcher.dom.getStyle(this.__target, t)
                },
                set: function (e) {
                    if (E(e) && (e += "px"), !A(e)) throw new Error("The value of " + t + " in " + this.__target + "Config must be string, but not " + typeof e + ".");
                    this.__dispatcher.dom.setStyle(this.__target, t, e)
                },
                configurable: !0,
                enumerable: !0
            })
        }), N(n, i)
    },
    od = ["audioTracks", "autoPlay", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "poster", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "videoWidth", "videoHeight", "volume", "currentFPS", "videoBytesPerSecond", "currentBytesPerSecond", "ratio", "type", "p2p", "bufferTime"],
    sd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "statechange"],
    ad = ["canPlayType", "load", "play", "pause", "switchVideo", "seek"],
    hd = "7.0.2-29233fb";

function cd(t) {
    var e = t.type,
        i = t.p2p,
        n = document.createElement("flash"),
        r = "mgtv-player-" + +new Date,
        o = [],
        s = Object.create(null);
    s.count = 0, n.style.position = "relative", n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.innerHTML = '<object id="' + r + '" data="//player.mgtv.com/mgtv_v6_player/PlayerCore.swf?ver=' + hd + '" type="application/x-shockwave-flash" width="100%" height="100%">\n                <param name="allowScriptAccess" value="always">\n                <param name="quality" value="best">\n                <param name="allowFullScreen" value="true">\n                <param name="wmode" value="Opaque">\n                <param name="allowScriptAccess" value="always">\n                <param name="flashvars" value="type=' + e + "&p2p=" + i + '">\n                <param name="bgcolor" value="#000000">\n                <param name="type" value="application/x-shockwave-flash">\n                <param name="pluginspage" value="https://www.macromedia.com/go/getflashplayer">\n            </object><overlay style="width:100%;height:100%;position:absolute;top:0;left:0;"></overlay>';
    var a = n.childNodes[0],
        h = n.childNodes[1];
    return n._addEventListener = n.addEventListener, n._removeEventListener = n.removeEventListener, n._setAttribute = n.setAttribute, n._getAttribute = n.getAttribute, n.setAttribute = function (t, e) {
        a.setAttribute(t, e)
    }, n.getAttribute = function (t) {
        return a.getAttribute(t)
    }, n.install = function (t) {
        (t = t || document.getElementById("mgtv-player-1")).append(n)
    }, n.addEventListener = function (t, e, i) {
        -1 !== sd.findIndex(function (e) {
            return e === t
        }) ? (s[t] || (s[t] = []), s[t].push(e)) : n._installed ? h.addEventListener(t, e, i) : o.push(function () {
            h.addEventListener(t, e, i)
        })
    }, n.removeEventListener = function (t, e, i) {
        if (-1 !== sd.findIndex(function (e) {
                return e === t
            })) {
            var r = s[t] || [];
            r = r.filter(function (t) {
                return t !== e
            }), s[t] = r
        } else n._installed ? h.removeEventListener(t, e, i) : o.push(function () {
            h.removeEventListener(t, e, i)
        })
    }, n.emitEventCache = function (t, e, i) {
        var n = Object.create(null);
        n.type = e, n.target = t, (s[e] || []).forEach(function (e) {
            e.apply(t, [n, i])
        })
    }, f(n, "buffered", {
        get: function () {
            if (n._installed) try {
                var t = a.getProp("currentTime"),
                    e = a.getProp("buffered");
                return {
                    length: 1,
                    start: function (e) {
                        return t
                    },
                    end: function (t) {
                        return e
                    }
                }
            } catch (t) {
                return {
                    length: 0,
                    start: function (t) {
                        return 0
                    },
                    end: function (t) {
                        return 0
                    }
                }
            }
        }
    }), od.forEach(function (t) {
        f(n, t, {
            get: function () {
                if (n._installed) return a.getProp(t)
            },
            set: function (e) {
                a.setProp ? a.setProp(t, e) : o.push(function () {
                    a.setProp(t, e)
                })
            }
        })
    }), ad.forEach(function (t) {
        f(n, t, {
            value: function () {
                for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                n._installed ? a[t] && a[t].apply(a, i) : o.push(function () {
                    a[t] && a[t].apply(a, i)
                })
            }
        })
    }), window.onVideoEvent = function (t, e) {
        "loaded" == t && (n._installed = !0, o.forEach(function (t) {
            return t.apply(n)
        })), "statechange" == t && 1 == n.readyState && n.play(), n.emitEventCache(n, t, e)
    }, n
}
var ud = {},
    ld = {};

function dd(t) {
    if (!A(t)) throw new Error("Plugin's name must be a string, but not \"" + t + '" in ' + typeof t);
    return V(t)
}
var fd, pd, md, vd, gd, yd, _d, bd, wd, kd, Ed, Sd, Td, xd, Ad, Cd, Rd, Id, Ld = (Xl = Fc(dd), Zl = Fc(function (t) {
        if (w(t)) {
            if (!(t.prototype instanceof Wu)) throw new TypeError("Your are trying to install plugin " + t.name + ", but it's not extends from Mango.plugin.")
        } else {
            if (!k(t) || T(t)) throw new TypeError("plugin's config must be an Object, but not \"" + t + '" in ' + typeof t);
            var e = t.name;
            if (!A(e) || e.length < 1) throw new TypeError('plugin must have a legal namea, but not "' + e + '" in ' + typeof e)
        }
    }), Ql = Fc(dd), Jl = Fc(dd), td = Fc(dd), d((ed = function () {
        function t(t, e) {
            var i = this;
            if (i.plugins = {}, i.order = [], i.readySync = !1, i.zIndexMap = {
                    inner: [],
                    outer: []
                }, i.changeWatchable = !0, !k(t)) throw new TypeError('UserConfig must be an Object, but not "' + t + '" in ' + typeof t);
            i.dom = new id(t.wrapper, i), i.bus = new _u(i), i.vm = e, i.videoConfigReady = !1, i.videoConfig = new ju(i, t), b(t.plugins) && !b(t.plugin) && (t.plugin = t.plugins, delete t.plugins), i._initUserPlugin(t.plugin);
            var n = N({}, nd, t.container || {});
            i.order.forEach(function (t) {
                return i.plugins[t].__init(i.videoConfig, n)
            }), i.videoConfigReady = !0, i.videoConfig.init(), i.containerConfig = new rd(i, "container", n), i.kernel = i._createKernel(i.dom.videoElement, i.videoConfig), i._bindKernelEvents(i.kernel);
            var r = [];
            i.order.forEach(function (t) {
                var e = i.plugins[t].__inited();
                R(e) && r.push(e)
            }), i.readySync = 0 === r.length, i.ready = i.readySync ? Promise.resolve() : Promise.all(r).then(function () {
                i.readySync = !0, i.bus.trigger("ready"), i._autoloadVideoSrcAtFirst()
            }), i.readySync && i._autoloadVideoSrcAtFirst()
        }
        var e = t.prototype;
        return e.addPlugins = function (t) {
            var e = this;
            void 0 === t && (t = []);
            var i = [],
                n = this.order;
            b(t) || (t = [t]), this.videoConfigReady = !1, t.map(function (t) {
                e.use(t), i.push(n[n.length - 1])
            }), this.videoConfigReady = !0;
            var r = N({}, nd, this.videoConfig.container || {});
            i.forEach(function (t) {
                return e.plugins[t].__init(e.videoConfig, r)
            });
            var o = [];
            i.forEach(function (t) {
                var i = e.plugins[t].__inited();
                R(i) && o.push(i)
            }), this.ready.then(function () {
                return Promise.all(o)
            })
        }, e.use = function (e) {
            if (A(e) && (e = {
                    name: e,
                    alias: void 0
                }), !k(e) || k(e) && !A(e.name)) throw new TypeError("pluginImpl do not match requirement");
            A(e.alias) || (e.alias = void 0);
            var i = e,
                n = i.name,
                r = i.alias;
            e.name = r || n, delete e.alias;
            var o = V(n),
                s = V(r || n),
                a = e,
                h = t.getPluginConfig(o);
            if (T(h)) throw new TypeError("You have not installed plugin " + o);
            k(h) && (h.id = s);
            var c = w(h) ? new h({
                id: s
            }, this, a) : new Wu(h, this, a);
            return this.plugins[s] = c, f(this.vm, s, {
                value: c,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), this.order.push(s), this._sortZIndex(), this.videoConfigReady && c.__inited(), c.ready
        }, e.unuse = function (t) {
            var e = this.plugins[t];
            if (k(e) && w(e.$destroy)) {
                e.$destroy();
                var i = this.order.indexOf(t);
                i > -1 && this.order.splice(i, 1), delete this.plugins[t], delete this.vm[t]
            } else delete this.plugins[t]
        }, e.handleEvent = function (t) {
            var e = t.type;
            switch (e) {
                case "error":
                    this.throwError(t)
            }
            this.bus.triggerSync(e, t)
        }, e.throwError = function (t) {
            this.vm.__throwError(t)
        }, e.loadLevel = function (t) {
            return this.kernel.loadLevel(t)
        }, e.silentLoad = function (t, e) {
            var i = this;
            void 0 === e && (e = {});
            var n = e,
                r = n.duration,
                o = void 0 === r ? 3 : r,
                s = n.bias,
                a = void 0 === s ? 0 : s,
                h = n.repeatTimes,
                c = void 0 === h ? 0 : h,
                u = n.increment,
                l = void 0 === u ? 0 : u,
                d = n.waitingBuffer,
                f = n.isLive,
                p = void 0 === f ? this.videoConfig.isLive : f,
                m = n.box,
                v = void 0 === m ? this.videoConfig.box : m,
                g = n.kernels,
                y = void 0 === g ? this.videoConfig.kernels : g,
                _ = n.preset,
                b = void 0 === _ ? this.videoConfig.preset : _,
                w = e.immediate || p,
                k = {
                    isLive: p,
                    box: v,
                    src: t,
                    kernels: y,
                    preset: b
                },
                E = null;
            return mt(new Array(c + 1).fill(1).map(function (t, n) {
                return function () {
                    return new Promise(function (t, r) {
                        if (e.abort) return r({
                            error: !0,
                            message: "user abort the mission"
                        });
                        var s, h = document.createElement("video"),
                            u = i.kernel.bufferInfo;
                        !d && u && u.len - 2 > o + l * n ? (s = i.kernel.currentTime + u.len - 2, i.kernel.stopLoad()) : s = i.kernel.currentTime + o + l * n, h.muted = !0;
                        var f, m, v, g, y = !1,
                            _ = function () {
                                var e = i.kernel.currentTime;
                                if (a <= 0 && e >= s || a > 0 && (Math.abs(s - e) <= a && y || e - s > a)) {
                                    if (Se(i.dom.videoElement, "timeupdate", _), Se(h, "error", m, !0), !y) return Se(h, "canplay", v, !0), Se(h, "loadedmetadata", g, !0), i.kernel.startLoad(), t();
                                    p || f.seek(e - 1e-4), r({
                                        error: !1,
                                        video: h,
                                        kernel: f
                                    })
                                }
                            };
                        v = function () {
                            y = !0, w && (Se(i.dom.videoElement, "timeupdate", _), Se(h, "error", m, !0), f.off("error", m), r({
                                error: !1,
                                video: h,
                                kernel: f
                            }))
                        }, g = function () {
                            p || f.seek(s + 1)
                        }, m = function (e) {
                            var o;
                            if (Se(h, "canplay", v, !0), Se(h, "loadedmetadata", g, !0), Se(i.dom.videoElement, "timeupdate", _), f.off("error", m), e.target === f) {
                                var s = e.data.errmsg;
                                Yi.error("mango's silentload bump into a kernel error", s), o = new Error(s)
                            } else o = T(h.error) ? new Error("unknow video error") : new Error(h.error.message), Yi.error("mango's silentload", o.message);
                            return i.kernel.startLoad(), n === c ? r(o) : t(o)
                        }, Te(h, "canplay", v, !0), Te(h, "loadedmetadata", g, !0), Te(h, "error", m, !0), E && E.destroy(), (f = i._createKernel(h, k)).on("error", m), Te(i.dom.videoElement, "timeupdate", _), f.load(), E = f
                    })
                }
            })).then(function () {
                var e = "The silentLoad for " + t + " timed out. Please set a longer duration or check your network";
                return E && E.destroy(), Promise.reject(new Error(e))
            }).catch(function (t) {
                if (M(t) || t.error) return t = M(t) ? t : new Error(t.message), E && E.destroy(), i.kernel.startLoad(), Promise.reject(t);
                var e = t,
                    n = e.video,
                    r = e.kernel;
                return i.dom.videoElement.paused ? (i.switchKernel({
                    video: n,
                    kernel: r,
                    config: k
                }), Promise.resolve()) : new Promise(function (t) {
                    Te(n, "play", function () {
                        i.switchKernel({
                            video: n,
                            kernel: r,
                            config: k
                        }), t()
                    }, !0), n.play()
                })
            })
        }, e.playNextAd = function () {
            var t = this;
            return "flash" == this.videoConfig.box ? this.kernel.playNext() : new Promise(function (e, i) {
                var n = t.preloadObj;
                if (n) {
                    var r = n.video,
                        o = n.kernel,
                        s = n.config,
                        a = setTimeout(function () {
                            clearTimeout(a), o.destroy(), i("play timeout")
                        }, 1e3);
                    Te(r, "play", function () {
                        t.switchKernel({
                            video: r,
                            kernel: o,
                            config: s
                        }), clearTimeout(a), e()
                    }, !0), r.play(), t.preloadObj = null
                } else i("no perload")
            })
        }, e.preLoadAd = function (t, e) {
            e.duration, e.bias, e.repeatTimes, e.increment;
            var i = e.box,
                n = void 0 === i ? this.videoConfig.box : i,
                r = e.kernels,
                o = void 0 === r ? this.videoConfig.kernels : r,
                s = e.preset,
                a = void 0 === s ? this.videoConfig.preset : s,
                h = e.isLive,
                c = {
                    box: n,
                    src: t,
                    kernels: o,
                    preset: a,
                    isLive: void 0 === h ? this.videoConfig.isLive : h
                };
            if ("flash" == n) this.kernel.preload(t, 0, !1);
            else {
                var u, l, d, f, p = document.createElement("video");
                p.muted = !0, f = function () {}, l = function (t) {
                    var e;
                    if (Se(p, "canplay", d, !0), Se(p, "loadedmetadata", f, !0), u.off("error", l), t.target === u) {
                        var i = t.data.errmsg;
                        Yi.error("mango's preload bump into a kernel error", i), e = new Error(i)
                    } else e = T(p.error) ? new Error("unknow video error") : new Error(p.error.message), Yi.error("mango's preload", e.message)
                }, Te(p, "canplay", d = function () {}, !0), Te(p, "loadedmetadata", f, !0), Te(p, "error", l, !0), (u = this._createKernel(p, c)).on("error", l), u.load(), this.preloadObj = {
                    kernel: u,
                    video: p,
                    config: c
                }
            }
        }, e.preLoad = function (t, e) {
            var i = this;
            void 0 === e && (e = {});
            var n = e,
                r = n.duration,
                o = void 0 === r ? 5e3 : r,
                s = (n.bias, n.repeatTimes),
                a = void 0 === s ? 0 : s,
                h = (n.increment, n.box),
                c = void 0 === h ? this.videoConfig.box : h,
                u = n.kernels,
                l = void 0 === u ? this.videoConfig.kernels : u,
                d = n.preset,
                f = void 0 === d ? this.videoConfig.preset : d,
                p = n.isLive,
                m = void 0 === p ? this.videoConfig.isLive : p,
                v = {
                    box: c,
                    src: t,
                    kernels: l,
                    preset: f,
                    isLive: m
                },
                g = e.immediate || !1,
                y = null;
            return mt(new Array(a + 1).fill(1).map(function (n, r) {
                return function () {
                    return new Promise(function (n, s) {
                        if (e.abort) return s({
                            error: !0,
                            message: "user abort the mission"
                        });
                        if ("flash" == c) i.kernel.preload(t, 0, !1);
                        else {
                            var h = document.createElement("video");
                            h.muted = !0;
                            var u, l, d, f, p = !1,
                                m = !1,
                                _ = null,
                                b = function () {
                                    m = !0, Se(i.dom.videoElement, "ended", b), Se(h, "error", l, !0), _ && clearTimeout(_), p ? s({
                                        error: !1,
                                        video: h,
                                        kernel: u
                                    }) : (Se(h, "canplay", d, !0), Se(h, "loadedmetadata", f, !0), n())
                                };
                            d = function () {
                                p = !0, m && (Se(i.dom.videoElement, "ended", b), Se(h, "error", l, !0), _ && clearTimeout(_), u.off("error", l), s({
                                    error: !1,
                                    video: h,
                                    kernel: u
                                }))
                            }, f = function () {}, l = function (t) {
                                var e;
                                if (Se(h, "canplay", d, !0), Se(h, "loadedmetadata", f, !0), Se(i.dom.videoElement, "ended", b), _ && clearTimeout(_), u.off("error", l), t.target === u) {
                                    var o = t.data.errmsg;
                                    Yi.error("mango's preload bump into a kernel error", o), e = new Error(o)
                                } else e = T(h.error) ? new Error("unknow video error") : new Error(h.error.message), Yi.error("mango's preload", e.message);
                                return r === a ? s(e) : n(e)
                            }, Te(h, "canplay", d, !0), Te(h, "loadedmetadata", f, !0), Te(h, "error", l, !0), y && y.destroy(), (u = i._createKernel(h, v)).on("error", l), Te(i.dom.videoElement, "ended", b), g && (_ && clearTimeout(_), _ = setTimeout(b, o)), u.load(), y = u
                        }
                    })
                }
            })).then(function () {
                var e = "The preload for " + t + " timed out. Please set a longer duration or check your network";
                return y && y.destroy(), Promise.reject(new Error(e))
            }).catch(function (t) {
                if (M(t) || t.error) return t = M(t) ? t : new Error(t.message), y && y.destroy(), Promise.reject(t);
                var e = t,
                    n = e.video,
                    r = e.kernel;
                return new Promise(function (t) {
                    Te(n, "play", function () {
                        i.switchKernel({
                            video: n,
                            kernel: r,
                            config: v
                        }), t()
                    }, !0), n.play()
                })
            })
        }, e.load = function (t, e) {
            void 0 === e && (e = {});
            var i = A(t) ? t : k(t) && A(t.src) ? t.src : "";
            k(t) && (delete t.src, e = t);
            var n = this.kernel.box,
                r = this.videoConfig,
                o = e,
                s = o.playlist,
                a = void 0 === s ? r.playlist : s,
                h = o.isLive,
                c = void 0 === h ? r.isLive : h,
                u = o.box,
                l = void 0 === u ? r.box : u,
                d = o.preset,
                f = void 0 === d ? r.preset : d,
                p = o.kernels,
                m = void 0 === p ? r.kernels : p,
                v = o.startPosition,
                g = void 0 === v ? -1 : v,
                y = o.startLevel,
                _ = void 0 === y ? -1 : y,
                b = o.drmData,
                w = o.p2p,
                E = void 0 === w || w,
                S = o.ratio,
                T = o.cdnld;
            if ("hls" === l || l !== n || "flv" === l || "native" === l && b) {
                var x = Pt(i) ? "mp4" : "hls",
                    C = "flash" === l ? cd({
                        type: x,
                        p2p: E
                    }) : document.createElement("video"),
                    R = {
                        isLive: c,
                        box: l,
                        preset: f,
                        src: i,
                        playlist: a,
                        kernels: m,
                        p2pSwitch: E,
                        cdnld: T
                    },
                    I = this._createKernel(C, R);
                Yi.warn("kernel", "switch kernel from [" + n + "] to [" + l + "]."), this.switchKernel({
                    video: C,
                    kernel: I,
                    config: R
                })
            }
            var L = this.videoConfig.autoload;
            this._changeUnwatchable(this.videoConfig, "autoload", !1), this.videoConfig.src = i || this.videoConfig.src, this.videoConfig.playlist = a || this.videoConfig.playlist, this.kernel.load(this.videoConfig.src, g, S, b, _, T), this._changeUnwatchable(this.videoConfig, "autoload", L)
        }, e.load2 = function (t, e) {
            void 0 === e && (e = {});
            var i = A(t) ? t : k(t) && A(t.src) ? t.src : "";
            k(t) && (delete t.src, e = t);
            var n = this.videoConfig,
                r = e,
                o = r.playlist,
                s = void 0 === o ? n.playlist : o,
                a = r.isLive,
                h = void 0 === a ? n.isLive : a,
                c = r.box,
                u = void 0 === c ? n.box : c,
                l = r.preset,
                d = void 0 === l ? n.preset : l,
                f = r.kernels,
                p = void 0 === f ? n.kernels : f,
                m = r.startPosition,
                v = void 0 === m ? -1 : m,
                g = r.startLevel,
                y = void 0 === g ? -1 : g,
                _ = r.p2p,
                b = void 0 === _ || _,
                w = r.drmData,
                E = r.ratio,
                S = r.cdnld,
                T = Pt(i) ? "mp4" : "hls",
                x = "flash" === u ? cd({
                    type: T,
                    p2p: b
                }) : document.createElement("video"),
                C = {
                    isLive: h,
                    box: u,
                    preset: d,
                    src: i,
                    playlist: s,
                    kernels: p,
                    cdnld: S
                },
                R = this._createKernel(x, C);
            return R.load(i, v, E, w, y, S), {
                video: x,
                kernel: R,
                config: C
            }
        }, e.switchKernel = function (t) {
            var e = this,
                i = t.video,
                n = t.kernel,
                r = t.config,
                o = this.kernel,
                s = F(this.videoConfig);
            this.dom.removeVideo(), this.dom.installVideo(i, {
                bindEvent: !0
            }), this.videoConfig.changeWatchable = !1, this.videoConfig.autoload = !1, this.videoConfig.src = r.src, this.videoConfig._realDomAttr.forEach(function (t) {
                if ("src" !== t) {
                    var i = s[t];
                    (function (t) {
                        return null == t
                    })(i) || (e.videoConfig[t] = i)
                }
            }), this.videoConfig.changeWatchable = !0, this._bindKernelEvents(o, !0), this._bindKernelEvents(n), this.kernel = n;
            var a = r.isLive,
                h = r.box,
                c = r.preset,
                u = r.kernels;
            m(this.videoConfig, {
                isLive: a,
                box: h,
                preset: c,
                kernels: u
            }), this.kernel.play(), o.destroy()
        }, e.destroy = function () {
            for (var t in this.plugins) this.unuse(t);
            this.bus.destroy(), delete this.bus, this.dom.destroy(), delete this.dom, this._bindKernelEvents(this.kernel, !0), this.kernel.destroy(), delete this.kernel, delete this.vm, delete this.plugins, delete this.order
        }, e._initUserPlugin = function (t) {
            var e = this;
            return void 0 === t && (t = []), b(t) || (t = []), t.map(function (t) {
                return e.use(t)
            })
        }, e._sortZIndex = function () {
            var t = this,
                e = this.order.reduce(function (e, i) {
                    var n = t.plugins[i];
                    if (T(n)) return e;
                    var r = e[n.$inner ? "inner" : "outer"],
                        o = n.$level;
                    return r[o] = r[o] || [], r[o].push(i), e
                }, {
                    inner: {},
                    outer: {}
                }),
                i = e.inner,
                n = e.outer;
            i[0] = i[0] || [], i[0].unshift("videoElement"), n[0] = n[0] || [], n[0].unshift("container");
            var r = pt(i),
                o = pt(n);
            this.dom.setPluginsZIndex(r), this.dom.setPluginsZIndex(o), this.zIndexMap.inner = r, this.zIndexMap.outer = o
        }, e._getTopLevel = function (t) {
            var e = this.zIndexMap[t ? "inner" : "outer"],
                i = this.plugins[e[e.length - 1]];
            return T(i) ? 0 : i.$level
        }, e._autoloadVideoSrcAtFirst = function () {
            if (this.videoConfig.video_id) Yi.warn("When you has config video_id, it will not autoreload");
            else if (this.videoConfig.autoload) {
                if (!this.videoConfig.src) return void Yi.warn("You have not set the src, so you better set autoload to be false. Accroding to https://github.com/Mangojs/mango/blob/master/doc/zh-cn/mango-api.md#src.");
                this.bus.emit("load", this.videoConfig.src)
            }
        }, e._changeUnwatchable = function (t, e, i) {
            this.changeWatchable = !1, t[e] = i, this.changeWatchable = !0
        }, e._createKernel = function (t, e) {
            var i = this,
                n = e.kernels,
                r = e.preset,
                o = {},
                s = {};
            b(n) && (s = n.reduce(function (t, e) {
                if (A(e)) {
                    var i = ld[e];
                    return w(i) ? (t[e] = i, t) : (Yi.warn("You have not installed kernel for " + e + "."), t)
                }
                if (k(e)) {
                    var n = e.name,
                        r = e.handler;
                    if (A(r)) {
                        var s = ld[r];
                        return w(s) ? (t[r] = s, o[r] = e, t) : (Yi.warn("You have not installed kernel for " + r + "."), t)
                    }
                    if (w(r)) {
                        var a = n || r.name;
                        return t[a] = r, o[a] = e, t
                    }
                    return Yi.warn("When you pass in an SingleKernelConfig in Array, you must clarify it's handler, we only support handler in string or function but not " + typeof r), t
                }
                return Yi.warn("If you pass in kernels as array, you must pass in kernels in string or function, but not " + typeof e), t
            }, {})), k(n) && g(n).forEach(function (t) {
                var e = n[t];
                if (!w(e)) {
                    if (k(e)) {
                        var i = e.handler;
                        if (A(i)) {
                            var r = ld[i];
                            return w(r) ? (s[t] = r, void(o[t] = e)) : void Yi.warn("You have not installed kernel for " + i + ".")
                        }
                        return w(i) ? (s[t] = i, void(o[t] = e)) : void Yi.warn("When you pass in an SingleKernelConfig in Object, you must clarify it's handler, we only support handler in string or function but not " + typeof i)
                    }
                    return Yi.warn("If you pass in kernels as object, you must pass in kernels in string or function, but not " + typeof e), n
                }
                s[t] = e
            }), e.preset = m(s, r), e.presetConfig = o;
            var a = new gc(t, e);
            if ("hls" == e.box) {
                a.once("hlsManifestParsed", function () {
                    i.vm.emit("startPoint", "step3")
                });
                var h = function () {
                    i.vm.emit("startPoint", "buffer"), a.videoElement.removeEventListener("canplay", h)
                };
                a.videoElement.addEventListener("canplay", h)
            }
            return "flash" == e.box && a.videoElement.addEventListener("canplay", function () {
                i.vm.emit("startPoint", "buffer")
            }), a
        }, e._bindKernelEvents = function (t, e) {
            var i = this;
            void 0 === e && (e = !1), vc.forEach(function (n) {
                return t[e ? "off" : "on"](n, i.handleEvent)
            })
        }, t.install = function (t) {
            var e = V(t.name);
            T(ud[e]);
            var i = w(t) ? t : N({
                id: e
            }, t);
            return ud[e] = i, e
        }, t.hasInstalled = function (t) {
            return !T(ud[t])
        }, t.uninstall = function (t) {
            delete ud[t]
        }, t.getPluginConfig = function (t) {
            return ud[t]
        }, t.installKernel = function (t, e) {
            (k(t) ? Object.entries(t) : [[t, e]]).forEach(function (t) {
                var e = t[0],
                    i = t[1];
                if (!w(i)) throw new Error("The kernel you install on " + e + " must be a Function, but not " + typeof i);
                w(ld[e]) && Yi.warn("You have alrady install a kernel on " + e + ", and now we will replace it"), ld[e] = i
            })
        }, t.uninstallKernel = function (t) {
            delete ld[t]
        }, t.hasInstalledKernel = function (t) {
            return w(ld[t])
        }, t
    }()).prototype, "unuse", [Xl], p(ed.prototype, "unuse"), ed.prototype), d(ed.prototype, "handleEvent", [Kc], p(ed.prototype, "handleEvent"), ed.prototype), d(ed, "install", [Zl], p(ed, "install"), ed), d(ed, "hasInstalled", [Ql], p(ed, "hasInstalled"), ed), d(ed, "uninstall", [Jl], p(ed, "uninstall"), ed), d(ed, "getPluginConfig", [td], p(ed, "getPluginConfig"), ed), ed),
    Pd = (pd = d((fd = function () {
        function t() {
            this.log = {
                error: !0,
                info: !0,
                warn: !0,
                debug: !0,
                verbose: !0
            }, l(this, "_silent", pd, this), this.errorHandler = void 0;
            var t = g(this.log).reduce(function (t, e) {
                return t[e] = Uc({
                    get: function () {
                        return Yi["ENABLE_" + e.toUpperCase()]
                    },
                    set: function (t) {
                        return Yi["ENABLE_" + e.toUpperCase()] = t, !0 === t && (this.silent = !1), t
                    }
                }), t
            }, {});
            nu(this.log, t, {
                self: !0
            })
        }
        return n(t, [{
            key: "silent",
            get: function () {
                return this._silent
            },
            set: function (t) {
                var e = this;
                void 0 !== t && (t = !!t, this._silent = t, g(this.log).forEach(function (i) {
                    e.log[i] = !t
                }))
            }
        }]), t
    }()).prototype, "_silent", [tu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return !1
        }
    }), fd),
    Dd = Gc()((Rd = Cd = function (t) {
        function e(e) {
            var i;
            if ((i = t.call(this) || this).destroyed = !1, l(i, "__id", gd, i), l(i, "version", yd, i), A(e) || P(e)) e = {
                wrapper: e,
                controls: !0
            };
            else {
                if (!k(e)) throw new Error("You must pass in an Object containing wrapper or string or element to new a Mango");
                if (!e.wrapper) throw new Error("You must pass in an legal object")
            }
            var n = new Ld(e, i);
            return i.config = n.videoConfig, i.cversion = n.kernel.VERSION, i.ready = n.ready, i.readySync = n.readySync, i.__dispatcher = n, i.__wrapAsVideo(n.videoConfig), i
        }
        r(e, t), e.registerEvents = function (t) {
            var e = void 0 === t ? {} : t,
                i = e.name,
                n = e.target;
            if (!i || !A(i)) throw new Error("The event name must be a string, but not " + typeof i);
            if (!n || !A(n)) throw new Error("The event target must be a string, but not " + typeof n);
            "kernel" === n && vc.push(i)
        };
        var i = e.prototype;
        return i.destroy = function () {
            this.destroyed || (t.prototype.__destroy.call(this), this.__dispatcher.destroy(), f(this, "__dispatcher", {
                get: function () {
                    throw new Error("This instance has been destroyed.")
                },
                enumerable: !0,
                configurable: !0
            }), Ie(this.config.wrapper).html(""), this.destroyed = !0)
        }, i.addPlugins = function (t) {
            return void 0 === t && (t = []), this.__dispatcher.addPlugins(t)
        }, i.use = function (t) {
            return this.__dispatcher.use(t)
        }, i.unuse = function (t) {
            return this.__dispatcher.unuse(t)
        }, i.__throwError = function (t) {
            A(t) && (t = new Error(t));
            var i = this.config.errorHandler || e.config.errorHandler;
            if (w(i)) return i(t);
            if (!e.config.silent && M(t)) throw t
        }, e
    }($u), Cd.plugin = Wu, Cd.config = new Pd, Cd.install = Ld.install, Cd.uninstall = Ld.uninstall, Cd.hasInstalled = Ld.hasInstalled, Cd.installKernel = Ld.installKernel, Cd.uninstallKernel = Ld.uninstallKernel, Cd.hasInstalledKernel = Ld.hasInstalledKernel, Cd.getPluginConfig = Ld.getPluginConfig, gd = d((vd = Rd).prototype, "__id", [Xc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return "_vm"
        }
    }), yd = d(vd.prototype, "version", [Xc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
            return "7.0.2-29233fb"
        }
    }), d(vd, "plugin", [Xc], (_d = (_d = p(vd, "plugin")) ? _d.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return _d
        }
    }), vd), d(vd, "config", [Xc], (bd = (bd = p(vd, "config")) ? bd.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return bd
        }
    }), vd), d(vd, "install", [Xc], (wd = (wd = p(vd, "install")) ? wd.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return wd
        }
    }), vd), d(vd, "uninstall", [Xc], (kd = (kd = p(vd, "uninstall")) ? kd.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return kd
        }
    }), vd), d(vd, "hasInstalled", [Xc], (Ed = (Ed = p(vd, "hasInstalled")) ? Ed.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return Ed
        }
    }), vd), d(vd, "installKernel", [Xc], (Sd = (Sd = p(vd, "installKernel")) ? Sd.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return Sd
        }
    }), vd), d(vd, "uninstallKernel", [Xc], (Td = (Td = p(vd, "uninstallKernel")) ? Td.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return Td
        }
    }), vd), d(vd, "hasInstalledKernel", [Xc], (xd = (xd = p(vd, "hasInstalledKernel")) ? xd.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return xd
        }
    }), vd), d(vd, "getPluginConfig", [Xc], (Ad = (Ad = p(vd, "getPluginConfig")) ? Ad.value : void 0, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        initializer: function () {
            return Ad
        }
    }), vd), md = vd)) || md,
    Md = ["//pcweb.api.mgtv.com", "//pcweb2.api.mgtv.com", "//pcweb3.api.mgtv.com"],
    Bd = {
        CMSDATA_TIMEOUT: [4e3, 4e3, 4e3],
        MAX_CMSDATA_RETRY: 3,
        CMSDATA_RETRY_DOMAINS: Md,
        GETSOURCE_TIMEOUT: [4e3, 4e3, 4e3],
        MAX_GETSOURCE_RETRY: 3,
        GETSOURCE_RETRY_DOMAINS: Md,
        DISPATCHER_TIMEOUT: [11e3, 11e3, 11e3],
        MAX_DISPATCHER_RETRY: 3,
        ANTI_THEFT_PNO: 1020,
        ANTI_THEFT_VERSION: "0.3.0301",
        SUBTITLEDATA_TIMEOUT: [4e3, 4e3, 4e3],
        MAX_SUBTITLEDATA_RETRY: 3
    },
    Od = /iPad/i.test(navigator.userAgent),
    Ud = "Mac" === zt.os && "safari" == dt.name && ~~dt.version.major >= 13,
    Fd = function (t) {
        var e = Od ? "1121" : t.useFlash ? "1029" : "1030",
            i = Od ? "pad" : t.useFlash ? "h5flash" : "pch5",
            n = (t || 0).lobparam || {},
            r = n.did,
            o = void 0 === r ? "" : r,
            s = n.suuid,
            a = void 0 === s ? "" : s,
            h = n.cxid,
            c = void 0 === h ? "" : h,
            u = ~~(+new Date / 1e3);
        return {
            did: o,
            suuid: a,
            cxid: c,
            type: i,
            pno: e,
            tk2: btoa("did=" + o + "|pno=" + e + "|ver=0.3.0301|clit=" + u).replace(/\+/g, "_").replace(/\//g, "~").replace(/=/g, "-").split("").reverse().join(""),
            timestamp: u
        }
    },
    Nd = function () {
        function t(t) {
            this.vm = t.vm, this.abroad = t.vm.config.abroad, this.isIntelMgtv = 1 == this.vm.config.i18n, this.reset()
        }
        var e = t.prototype;
        return e.reset = function () {
            this.getCMSDataRetry = 0, this.getSourceRetry = 0, this.getDispatcherRetry = 0, this.getSubtitleDataRetry = 0
        }, e._genVParams = function (t) {
            var e = Fd(this.vm._config),
                i = e.tk2;
            return St({
                did: e.did,
                suuid: e.suuid,
                cxid: e.cxid,
                tk2: i,
                video_id: t,
                type: e.type,
                _support: 1e7
            })
        }, e.getLocaledCMSParam = function (t) {
            var e = "1" == this.vm._config.i18n ? "intelmgtv" : "";
            return t = k(t) ? Object.assign(t, {
                src: e,
                abroad: this.abroad
            }) : t += "&src=" + e + "&abroad=" + this.abroad
        }, e.getStarSegments = function (t) {
            var e = this.getLocaledCMSParam({
                    _support: "10000000",
                    vid: t
                }),
                i = Bd.CMSDATA_RETRY_DOMAINS[0] + "/star/pointlist?" + St(e);
            return Yi.info("cms", "fetch star segments, request url is " + i + "."), Fi(i, {
                timeout: 3 * Bd.CMSDATA_TIMEOUT[0]
            }).then(function (t) {
                return t.json()
            })
        }, e.getVinfo = function (t) {
            var e = this.getLocaledCMSParam(this._genVParams(t)),
                i = Bd.CMSDATA_RETRY_DOMAINS[0] + "/player/video?" + e;
            return Yi.info("cms", "fetch videoinfo, request url is " + i + "."), Fi(i, {
                timeout: 3 * Bd.CMSDATA_TIMEOUT[0]
            }).then(function (t) {
                return t.json()
            })
        }, e.getP2pConfig = function (t) {
            var e = "//pc.bz.mgtv.com/confs/p2p";
            return Yi.info("cms", "fetch p2p config, request url is " + e + "."), Fi(e, {
                jsonpCallbackFunction: "callback_p2pconfig"
            }).then(function (t) {
                return t.json()
            })
        }, e.getPlayerConfig = function () {
            return Fi("//banner.api.mgtv.com/recommend/conf?" + St(this.getLocaledCMSParam({
                platform: "pcweb"
            })), {
                jsonpCallbackFunction: "callback_playerconfig"
            }).then(function (t) {
                return t.json()
            }).catch(function () {})
        }, e.getSubtitleData = function (t) {
            var e = this,
                i = "//pcweb.api.mgtv.com/video/title?" + St({
                    videoId: t,
                    _support: 1e7
                });
            return Fi(i).then(function (t) {
                return t.json()
            }).then(function (t) {
                var n = t.code,
                    r = void 0 === n ? "" : n,
                    o = t.data,
                    s = void 0 === o ? "" : o;
                t.msg;
                return 200 == ~~r && s ? (e.getSubtitleDataRetry = 0, e.vm.emit("subtitleData", {
                    status: "loadComplete",
                    api: "subtitleData",
                    retry: e.getSubtitleDataRetry,
                    url: i,
                    code: r,
                    data: s
                })) : e.vm.emit("subtitleData", {
                    status: "loadError",
                    api: "subtitleData",
                    retry: e.getSubtitleDataRetry,
                    maxRetry: Bd.MAX_SUBTITLEDATA_RETRY,
                    url: i,
                    code: r,
                    data: {}
                }), {
                    code: r,
                    data: s,
                    url: i
                }
            }).catch(function (n) {
                if (Yi.info("subtitledata", "fetch subtitle data timeout, reason " + n), e.vm.emit("subtitleData", {
                        status: "loadTimeout",
                        api: "subtitleData",
                        retry: e.getSubtitleDataRetry,
                        maxRetry: Bd.MAX_SUBTITLEDATA_RETRY,
                        url: i,
                        code: "600",
                        data: {}
                    }), e.getSubtitleDataRetry++, e.getSubtitleDataRetry < Bd.MAX_SUBTITLEDATA_RETRY) return e.getSubtitleData(t);
                throw e.vm.emit("subtitleData", {
                    status: "loadComplete",
                    api: "subtitleData",
                    retry: e.getSubtitleDataRetry,
                    maxRetry: Bd.MAX_SUBTITLEDATA_RETRY,
                    url: i,
                    code: "600",
                    data: {}
                }), n
            })
        }, e.getCMSData = function (t) {
            var e = this,
                i = Bd.CMSDATA_TIMEOUT[this.getCMSDataRetry],
                n = this._genVParams(t),
                r = this.getLocaledCMSParam({
                    auth_mode: 1
                }),
                o = Bd.CMSDATA_RETRY_DOMAINS[this.getCMSDataRetry] + "/player/video?" + n + "&" + St(r);
            return Yi.info("cms", "fetch videoinfo, request url is " + o + ", timeout [" + i + "], retring " + this.getCMSDataRetry + " nth."), Fi(o, {
                timeout: i
            }).then(function (t) {
                return t.json()
            }).then(function (t) {
                var i = t || {},
                    n = i.code,
                    r = void 0 === n ? "" : n,
                    s = i.data,
                    a = void 0 === s ? "" : s,
                    h = i.timestamp,
                    c = void 0 === h ? Date.now() : h;
                return 200 == +r && a ? e.getCMSDataRetry = 0 : (Yi.info("cms", "fetch videoinfo fail, error code [" + r + "], stop retry."), e.vm.emit("videoInfoData", {
                    status: "loadError",
                    api: "videoInfoData",
                    retry: e.getCMSDataRetry,
                    maxRetry: Bd.MAX_CMSDATA_RETRY,
                    url: o,
                    code: r,
                    data: {}
                }), e.vm.emit("apiRequestError", {
                    type: "error",
                    target: e,
                    rawdata: t,
                    data: Iu({
                        fatal: !0
                    }, $i.VIDEOINFO_DATA_FAIL)
                })), {
                    data: a,
                    code: r,
                    url: o,
                    timeoffset: Date.now() - c
                }
            }).catch(function (i) {
                if (Yi.info("cms", "fetch videoinfo timeout, reason " + i), e.vm.emit("videoInfoData", {
                        status: "loadTimeout",
                        api: "videoInfoData",
                        retry: e.getCMSDataRetry,
                        maxRetry: Bd.MAX_CMSDATA_RETRY,
                        url: o,
                        code: "600",
                        data: {}
                    }), e.getCMSDataRetry++, e.getCMSDataRetry < Bd.MAX_CMSDATA_RETRY) return e.getCMSData(t);
                throw e.vm.emit("apiRequestError", {
                    type: "error",
                    target: e,
                    data: Iu({
                        fatal: !0
                    }, $i.VIDEOINFO_TIMEOUT)
                }), i
            })
        }, e.getSource = function (t, e, i) {
            var n = this;
            void 0 === i && (i = !1);
            var r = Fd(this.vm._config),
                o = r.tk2,
                s = r.type,
                a = Bd.GETSOURCE_TIMEOUT[this.getSourceRetry],
                h = this.getLocaledCMSParam({
                    _support: "10000000",
                    tk2: o,
                    pm2: e,
                    video_id: t,
                    type: s,
                    auth_mode: 1
                }),
                c = i || 0 != this.getSourceRetry || this.isIntelMgtv || !Ud ? h : Iu({}, h, {
                    vf: "h265"
                }),
                u = Bd.GETSOURCE_RETRY_DOMAINS[this.getSourceRetry] + "/player/getSource?" + St(c);
            if (!(this.getSourceRetry >= Bd.MAX_GETSOURCE_RETRY)) return Yi.info("cms", "fetch video source detail, request url is " + u + ", retring " + this.getSourceRetry + " nth."), Fi(u, {
                timeout: a
            }).then(function (t) {
                return t.json()
            }).then(function (i) {
                var r = Rt(i, "data.stream.length", 0),
                    o = Rt(n, "vm.cms.videoInfoData.user.purview", 200),
                    s = 0 === r && 200 == ~~o;
                if (200 != i.code || !i.data || s) {
                    if (Yi.info("cms", "fetch video source detail fail, status code is [" + i.code + "]."), n.vm.emit("getSource", {
                            status: "loadError",
                            api: "getSource",
                            retry: n.getSourceRetry,
                            maxRetry: Bd.MAX_GETSOURCE_RETRY,
                            url: u,
                            code: i.code,
                            data: {}
                        }), n.getSourceRetry++, n.getSourceRetry < Bd.MAX_GETSOURCE_RETRY) return n.getSource(t, e).catch(function (t) {});
                    throw n.vm.emit("apiRequestError", {
                        type: "error",
                        target: n,
                        data: Iu({
                            fatal: !0
                        }, $i.SOURCE_DATA_FAIL)
                    }), new Error("retry reach the max limit, stop retry.")
                }
                return Yi.info("cms", "fetch video source detail ok, status code [" + i.code + "]."), i.data.stream = i.data.stream.reverse(), n.vm.emit("getSource", {
                    status: "loadComplete",
                    url: u,
                    code: "200",
                    data: i.data
                }), n.getSourceRetry = 0, i
            }).catch(function (i) {
                if (n.getSourceRetry < Bd.MAX_GETSOURCE_RETRY && (Yi.info("cms", "fetch video source detail timeout. reason " + i), n.vm.emit("getSource", {
                        status: "loadTimeout",
                        api: "getSource",
                        retry: n.getSourceRetry,
                        maxRetry: Bd.MAX_GETSOURCE_RETRY,
                        url: u,
                        code: "600",
                        data: {}
                    })), n.getSourceRetry++, n.getSourceRetry < Bd.MAX_GETSOURCE_RETRY) return n.getSource(t, e).catch(function (t) {});
                throw n.vm.emit("apiRequestError", {
                    type: "error",
                    target: n,
                    data: Iu({
                        fatal: !0
                    }, $i.SOURCE_TIMEOUT)
                }), i
            })
        }, e.getNextVideoInfo = function (t, e) {
            var i = this;
            if (k(t)) this.vm.emit("nextVideoInfo", t);
            else {
                var n, r, o = "",
                    s = !1;
                if (A(t) && t.indexOf("&") ? (o = t.split("&")[0], s = "false" == t.split("&")[1]) : o = t.toString(), s) {
                    var a = this.vm.getVideoInfo();
                    n = a.cid || "", r = a.plid || ""
                }
                if (o) {
                    var h = this.vm._config.lobparam.cxid || "",
                        c = "//pcweb.api.mgtv.com/player/vinfo?" + St({
                            video_id: o,
                            cid: n,
                            pid: r,
                            cxid: h,
                            _support: "10000000"
                        });
                    return Yi.info("cms", "fetch nextvideoinfo, request url is " + c), Fi(c, {
                        timeout: 1e4
                    }).then(function (t) {
                        return t.json()
                    }).then(function (t) {
                        if (200 != t.code || !t.data) throw Yi.info("cms", "fetch nextvideoinfo fail, video [" + o + "], status code [" + t.code + "]"), new Error(t.msg);
                        Yi.info("cms", "fetch nextvideoinfo ok, video [" + o + "], status code [" + t.code + "]"), i.nextVideoInfo = t.data, i.vm.emit("nextVideoInfo", i.nextVideoInfo)
                    }).catch(function (t) {
                        Yi.info("cms", "fetch nextvideoinfo fail, " + t + ".")
                    })
                }
                Yi.info("cms", "invalid next video id [" + o + "]")
            }
        }, e.getDispatcher = function (t, e, i, n, r) {
            var o = this;
            void 0 === i && (i = 0), void 0 === n && (n = ""), void 0 === r && (r = !0);
            var s = this.vm._config.lobparam,
                a = s.did,
                h = s.suuid,
                c = t.stream_domain[i] || t.stream_domain[0],
                u = t.stream.find(function (t) {
                    return ~~t.def == e
                });
            if (!(i >= Bd.MAX_DISPATCHER_RETRY) && u && u.url) {
                var l = -1 !== u.url.indexOf("?") ? "&" : "?",
                    d = n ? "&svrip=" + n : "",
                    f = c + u.url + l + "did=" + a + "&suuid=" + h + d,
                    p = Bd.DISPATCHER_TIMEOUT[i];
                return Yi.info("cms", "fetch dispatcher, CDN domain [" + c + "], definition [" + u.name + "], request url " + f + ", retring " + i + " nth"), Fi(f, {
                    timeout: p
                }).then(function (t) {
                    return t.json()
                }).then(function (n) {
                    if (!n || "ok" != n.status || !n.info) {
                        if (Yi.info("cms", "fetch dispatcher fail, status code [" + n.status + "]"), r && o.vm.emit("getDispatcher", {
                                status: "loadError",
                                api: "getDispatcher",
                                retry: i,
                                maxRetry: Bd.MAX_DISPATCHER_RETRY,
                                url: f,
                                code: n.code || 0,
                                data: {}
                            }), ++i < Bd.MAX_DISPATCHER_RETRY) return o.getDispatcher(t, e, i, "", r);
                        throw r && o.vm.emit("apiRequestError", {
                            type: "error",
                            target: o,
                            data: Iu({
                                fatal: !0
                            }, $i.DISPATCHER_DATA_FAIL)
                        }), new Error("retry reach the max limit, stop retry.")
                    }
                    o.sourceInfo = n;
                    try {
                        if (-1 !== u.scale.indexOf(":")) {
                            var s = u.scale.split(":");
                            u.ratio = Number(s[0]) / Number(s[1])
                        } else u.ratio = parseFloat(u.scale), isNaN(u.ratio) || 0 == u.ratio ? u.ratio = 16 / 9 : u.ratio = Math.min(Math.max(.25, u.ratio), 2.5)
                    } catch (t) {
                        u.ratio = 16 / 9
                    }
                    return o.sourceInfo.ratio = u.ratio, Od || o.vm._config.useFlash || (o.sourceInfo.info = o.sourceInfo.info.replace(/^http:\/\//, "https://")), Yi.info("cms", "fetch dispatcher ok. source [" + o.sourceInfo.info + "]"), r && o.vm.emit("getDispatcher", {
                        status: "loadComplete",
                        url: f,
                        code: "200",
                        data: n.info
                    }), o.sourceInfo
                }).catch(function (n) {
                    if (i < Bd.MAX_DISPATCHER_RETRY && r && (Yi.info("cms", "fetch dispatcher timeout, " + n + "."), o.vm.emit("getDispatcher", {
                            status: "loadTimeout",
                            api: "getDispatcher",
                            retry: i,
                            maxRetry: Bd.MAX_DISPATCHER_RETRY,
                            url: f,
                            code: "600",
                            data: {}
                        })), ++i < Bd.MAX_DISPATCHER_RETRY) return o.getDispatcher(t, e, i, "", r);
                    throw r && o.vm.emit("apiRequestError", {
                        type: "error",
                        target: o,
                        data: Iu({
                            fatal: !0
                        }, $i.DISPATCHER_TIMEOUT)
                    }), n
                })
            }
        }, t
    }();
! function (t) {
    t[t.IDLE = 0] = "IDLE", t[t.FRONT_AD_BEGIN = 1] = "FRONT_AD_BEGIN", t[t.FRONT_AD_PLAY = 2] = "FRONT_AD_PLAY", t[t.FRONT_AD_END = 3] = "FRONT_AD_END", t[t.VIDEO_PLAY = 4] = "VIDEO_PLAY", t[t.VIDEO_PAUSE = 5] = "VIDEO_PAUSE", t[t.MID_AD_BEGIN = 6] = "MID_AD_BEGIN", t[t.MID_AD_END = 7] = "MID_AD_END", t[t.VIDEO_END = 8] = "VIDEO_END", t[t.END_AD_BEGIN = 9] = "END_AD_BEGIN", t[t.END_AD_END = 10] = "END_AD_END"
}(Id || (Id = {}));
var Vd, zd = Id,
    Hd = /iPad/i.test(navigator.userAgent),
    jd = "cms";
! function (t) {
    t[t.Start = 0] = "Start", t[t.Config = 1] = "Config", t[t.VideoInfo = 2] = "VideoInfo", t[t.AdUrls = 3] = "AdUrls", t[t.Source = 4] = "Source", t[t.Dispatcher = 5] = "Dispatcher", t[t.Cdn = 6] = "Cdn", t[t.Buffer = 7] = "Buffer", t[t.Playing = 8] = "Playing", t[t.Fail = 9] = "Fail"
}(Vd || (Vd = {}));
var $d, Wd = function () {
        function t(t) {
            var e = this;
            this.isFairplay = !1, this.isPreload = !1, this.loadingState = Vd.Start, this._hasBoundEvents = !1, this.cachedSubtitles = [], this.cdnld = "", this.isIntelMgtv = !1, this.errorRetry = !1, this.vm = t.vm, this.isPreload = t.isPreload || !1, this.dataFetcher = new Nd({
                vm: this.vm
            }), this.startLevel = -1, this.state = zd.IDLE, this.cdnld = this.vm.config.cdnld, this.isIntelMgtv = 1 == this.vm.config.i18n, this.vm.config.set({
                kernels: {
                    flash: {
                        p2p: {
                            enable: !0
                        }
                    }
                }
            }), this.cfgDeferred = this.dataFetcher.getP2pConfig(this.video_id).then(function (t) {
                var i = t && t.data;
                (Yi.info(jd, "global p2p cfg => " + JSON.stringify(i)), i.p2p && i.p2p.pc) && (Math.floor(100 * Math.random()) > i.p2p.pc && e.vm.config.set({
                    kernels: {
                        flash: {
                            p2p: {
                                enable: !1
                            }
                        }
                    }
                }));
                var n = Rt(i, "p2p.h5", !0),
                    r = k(n) ? Iu({
                        enable: !0
                    }, n) : {
                        enable: !!n
                    },
                    o = e.vm.config.get("kernels.hls.p2p.enable", !1);
                return e.p2pInitialVal = r.enable = o && r.enable, Yi.info(jd, "h5 p2p settings => " + JSON.stringify(r)), i
            }).catch(function (t) {
                Yi.error(jd, "get p2p config fail, reason: " + t)
            }), this.bindEvent(), this.bindEventsBefore(), Yi.info(jd, "cms middleware is created.")
        }
        var e = t.prototype;
        return Object.defineProperty(e, "state", {
            get: function () {
                return this._state
            },
            set: function (t) {
                this.vm.state = this._state = t
            },
            enumerable: !0,
            configurable: !0
        }), e.init = function (t, e) {
            var i = this;
            void 0 === e && (e = !1), this.isPreFetchedVideo = !1, this.dashRecoverStreamErrorRetry = 0, this.recoverVideoErrorRetry = 0, this.hasDrmData = !1, this.hasMp4Source = !1, this.hasDashSource = !1, this.hasVideoPlayed = !1, this.currrentDef = 0, this._state = zd.IDLE, this.video_id = t, this.cdnip = "", this.errorRetry = e, this.emitMockPlaying = gt(function () {
                "hidden" != document.visibilityState || !i.vm.isAutoplay || i.hasVideoPlayed || i.state != zd.FRONT_AD_BEGIN && i.state != zd.FRONT_AD_END || (i.emitMockPlaying = null, i.vm.emit("playing"))
            }, 2e3), Promise.all([this.cfgDeferred, this.dataFetcher.getPlayerConfig().catch(function (t) {})]).then(function (e) {
                e[0];
                var n = e[1];
                return i.confData = n, i.vm.emit("confData", {
                    conf: Rt(n, "data", {})
                }), i.loadingState = Vd.Config, i.dataFetcher.getCMSData(t).catch(function (e) {
                    Yi.error(jd, "get video info fail, video id [" + t + "], reason: " + e)
                })
            }).then(function (t) {
                var e = t.url,
                    n = t.data,
                    r = t.code,
                    o = t.timeoffset;
                if (200 == +r && n && n.info) {
                    if (i.loadingState = Vd.Fail, n.info.video_id != i.video_id) return;
                    i.loadingState = Vd.VideoInfo, i.isPreload || (i.vm.config.set({
                        kernels: {
                            hls: {
                                p2p: {
                                    enable: i.p2pInitialVal
                                }
                            }
                        }
                    }), n.info && n.info.duration < 600 && i.vm.config.set({
                        kernels: {
                            hls: {
                                p2p: {
                                    enable: !1
                                }
                            }
                        }
                    }));
                    var s = void 0;
                    if (n.drm && n.info && "1" == n.info.drmFlag) {
                        i.vm._config.useFlash = !1;
                        var a = navigator.userAgent.indexOf("Trident") > -1 && navigator.userAgent.indexOf("rv:11.0") > -1,
                            h = document.createElement("video");
                        !a || "onmsneedkey" in h || i.vm.emit("dashStreamError", {
                            data: {
                                error: {
                                    code: 112,
                                    message: "eme is not supported."
                                }
                            }
                        }), s = "com.widevine.alpha", 1 == n.drm.drmType ? s = "com.microsoft.playready" : 3 == n.drm.drmType && (s = "com.apple.fps.1_0", i.isFairplay = !0);
                        var c = "persistent-license";
                        navigator.userAgent.indexOf("Edge") > -1 && 1 == n.drm.drmType && (c = "temporary"), n.drmData = {}, n.drmData[s] = {
                            serverURL: n.drm.licenseUrl,
                            sessionType: c
                        }, i.vm.drm = s
                    }
                    i.videoInfoData = n, Yi.info(jd, "fetch videoinfo ok, status code [" + r + "]."), i.vm.emit("videoInfoData", {
                        isPreload: i.isPreload,
                        url: e,
                        code: r,
                        data: n,
                        status: "loadComplete",
                        timeoffset: o
                    }), i.isPreload || (i.vm.getPaymentInfo(n.user, n.info, i.confData), i.vm.getCMSDataEvent(i.videoInfoData), i.vm.emitSync("startPoint", "videoInfo"), i.vm.emit("cmsData", {
                        isPreload: i.isPreload,
                        url: e,
                        code: r,
                        data: n,
                        status: "loadComplete"
                    }))
                }
            })
        }, e.getBufferState = function () {
            switch (this.loadingState) {
                case Vd.Start:
                case Vd.Config:
                case Vd.VideoInfo:
                case Vd.Playing:
                case Vd.Fail:
                    return !1;
                case Vd.AdUrls:
                case Vd.Source:
                case Vd.Dispatcher:
                case Vd.Cdn:
                case Vd.Buffer:
                    return !0
            }
        }, e.getSubtitleData = function (t) {
            var e = this;
            this.dataFetcher.getSubtitleData(t).then(function (t) {
                e.subtitleData = t
            }).catch(function (t) {})
        }, e.onSwitchSubtitle = function (t) {
            var e = this,
                i = t.language;
            if (this.cachedSubtitles[i]) this.vm.emit("subtitleChange", {
                subtitles: this.cachedSubtitles[i]
            });
            else if (this.subtitleData && 200 == this.subtitleData.code && this.subtitleData.data.title) {
                var n = this.subtitleData.data.title.find(function (t) {
                    return t.language == i
                });
                if (n) Fi(this.dispatchData.stream_domain[0] + n.url).then(function (t) {
                    return t.json()
                }).then(function (t) {
                    void 0 === t && (t = {});
                    var n = t.info;
                    fetch(n).then(function (t) {
                        return t.text()
                    }).then(function (t) {
                        try {
                            var n = function (t) {
                                (t = (t = t.replace(/\r/g, "")).split(/(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g)).shift();
                                for (var e = [], i = 0; i < t.length; i += 4) e.push({
                                    id: t[i].trim(),
                                    startTime: Pi(t[i + 1].trim()),
                                    endTime: Pi(t[i + 2].trim()),
                                    text: t[i + 3].trim()
                                });
                                return e.sort(function (t, e) {
                                    return t.startTime - e.startTime
                                }), e
                            }(t);
                            e.vm.emit("subtitleChange", {
                                subtitles: n
                            }), e.cachedSubtitles[i] = n
                        } catch (t) {
                            Yi.warn(jd, "parser srt file error:" + t)
                        }
                    })
                })
            }
        }, e.getVinfo = function (t) {
            return this.dataFetcher.getVinfo(t)
        }, e.getHighestFisibleDef = function (t, e) {
            var i;
            if (e)
                for (var n = 0; n < t.length; n++)
                    if (t[n].def == e && "" != t[n].url) {
                        i = t[n];
                        break
                    } if (!i)
                for (n = 0; n < t.length; n++)
                    if ("" != t[n].url) {
                        i = t[n];
                        break
                    } return i
        }, e.setNextVideoId = function (t, e) {
            Yi.info(jd, "received next video id [" + t + "]"), this.nextId = t
        }, e.getStartTime = function () {
            if ("200" != this.videoInfoData.user.purview) return 0;
            for (var t = 0, e = this.vm.config.startTime || ~~xt("start_time"), i = ~~this.videoInfoData.info.watchTime, n = zi.get("honey-rec") || [], r = 0 !== zi.get("mango-skip-start"), o = 0, s = 0; s < n.length; s++)
                if (this.video_id == n[s].vid) {
                    o = ~~n[s].time;
                    break
                } return this.skipStartTime = Number(this.videoInfoData.points.start.split("|")[0]) || 0, this.skipEndTime = Number(this.videoInfoData.points.end.split("|")[0]) || 0, t = e || i || o || 0, (r && this.skipEndTime ? this.skipEndTime : ~~this.videoInfoData.info.duration) - t <= 3 && (t = 0), r && this.skipStartTime > 0 && t < this.skipStartTime && (t = this.skipStartTime), t
        }, e.loadVideoSource = function () {
            var t = this,
                e = this.getStartTime(),
                i = this.sourceInfo && Pt(this.sourceInfo.info),
                n = this.sourceInfo && Dt(this.sourceInfo.info),
                r = "native";
            this.vm._config.useFlash || this.vm._config.isIpad || i || n || this.isFairplay ? (r = this.isFairplay ? "native" : n ? "dash" : this.vm._config.useFlash ? "flash" : i ? "mp4" : "native", Yi.info(jd, "use " + r + " kernel to load video source."), this.vm.load({
                src: this.sourceInfo.info,
                ratio: this.sourceInfo.ratio,
                p2p: this.vm.config.get("kernels.flash.p2p.enable", !0),
                box: r,
                drmData: this.videoInfoData.drmData,
                startPosition: e
            })) : (r = "hls", Yi.info(jd, "use " + r + " kernel to load video source."), this.useFakeMasterPlaylist ? this.preloadKernel ? (this.preloadKernel.kernel.off("stats", this.forwardStats), this.vm.switchKernel(this.preloadKernel), setTimeout(function () {
                t.vm.play()
            }), this.vm.emit("playing"), this.preloadKernel = null) : this.vm.load({
                src: "",
                playlist: this.dispatchData,
                p2p: this.vm.config.get("kernels.hls.p2p.enable", !0),
                drmData: this.videoInfoData.drmData,
                startPosition: e,
                startLevel: this.startLevel,
                box: r,
                cdnld: this.cdnld
            }) : this.vm.load({
                src: this.sourceInfo.info,
                p2p: this.vm.config.get("kernels.hls.p2p.enable", !0),
                startPosition: e,
                drmData: this.videoInfoData.drmData,
                box: r
            })), this.vm.emit("videoReady"), Yi.info(jd, "set <video> source attr, send player event [videoReady]."), this.loadingState = Vd.Buffer
        }, e.onRecoverDashStreamError = function (t) {
            this.dashRecoverStreamErrorRetry < 2 ? (Yi.info(jd, "trying recover from dashStream error, retry " + this.dashRecoverStreamErrorRetry + "."), t.retry = this.dashRecoverStreamErrorRetry, this.recoverVideoError(), this.dashRecoverStreamErrorRetry++) : (Yi.info(jd, "send [dashStreamError] event."), t.retry = this.dashRecoverStreamErrorRetry, this.vm.__dispatcher.kernel.destroy(), this.vm.emit("dashStreamError", t))
        }, e.onHlsDispatcherError = function (t) {
            this.vm.emit("apiRequestError", {
                type: "error",
                target: t.target,
                data: Iu({
                    fatal: !0
                }, $i.DISPATCHER_DATA_FAIL)
            })
        }, e.recoverVideoError = function () {
            var t = this;
            this.dataFetcher.getDispatcher(this.dispatchData, this.currrentDef, 0, this.cdnip, !0).then(function (e) {
                t.sourceInfo = e, t.cdnip = Lt(t.sourceInfo.info).hostname, t.loadVideoSource()
            })
        }, e.onPlaying = function (t) {
            if (this.state == zd.FRONT_AD_BEGIN) {
                if (!this.vm.manualClickPlay && !this.vm.isAutoplay) return;
                return this.state = zd.FRONT_AD_PLAY, Yi.info(jd, "front ad is playing, send player event [frontAdPlay]."), void this.vm.emit("frontAdPlay")
            }
            return this.state == zd.MID_AD_BEGIN ? (Yi.info(jd, "middle ad is playing, send player event [midAdPlay]."), void this.vm.emit("midAdPlay")) : this.state == zd.FRONT_AD_END ? (this.state = zd.VIDEO_PLAY, this.hasVideoPlayed = !0, this.vm.emit("videoPlay", {
                videoUrl: Rt(this, "sourceInfo.info", ""),
                videoId: this.video_id,
                state: this.state
            }), Yi.info(jd, "video is playing, send player event [videoPlay]."), void this.onVideoPlay()) : this.state == zd.MID_AD_END ? (this.state = zd.VIDEO_PLAY, this.vm._config.isIpad && this._pauseTime && (this.vm.seek(this._pauseTime), this._pauseTime = 0, this.vm.play()), void this.vm.emit("videoResumeMid")) : this.state == zd.VIDEO_PAUSE ? (this.state = zd.VIDEO_PLAY, Yi.info(jd, "send player event [videoResume]."), void this.vm.emit("videoResume")) : void 0
        }, e.getStarSegments = function () {
            var t = this,
                e = Rt(this, "videoInfoData.user.purview"),
                i = Rt(this, "videoInfoData.info.starPointFlag");
            "200" == e && i && this.dataFetcher.getStarSegments(this.video_id).then(function (e) {
                if (e && 200 == e.code && e.data) {
                    var i = e.data.list || [];
                    t.vm.emit("starSegments", {
                        starSegments: i
                    }), i.length > 0 && !Hd && t.vm.emit("showGuide", {
                        type: "starSegments"
                    })
                }
            }).catch(function (t) {})
        }, e.showContinueTip = function () {
            var t = this.getStartTime();
            0 !== zi.get("mango-skip-start") && this.skipStartTime > 0 && t > 0 && t <= this.skipStartTime ? (Yi.info(jd, "skip start is on, seek to " + t), this.vm.emit("showBottomTip", {
                _type: "skipStartTPL",
                _time: 2e3
            }), t = this.skipStartTime) : t > 1 && (Yi.info(jd, "continue play from recent watch point, seek to " + t), this.vm.emit("showBottomTip", {
                _type: "continuePlayTPL",
                _time: 2e3,
                time: _t(t)
            }))
        }, e.onVideoPlay = function () {
            var t = this;
            this.loadingState, Vd.Playing, this.videoPlayTimeoutTimer && clearTimeout(this.videoPlayTimeoutTimer), this.vm.enableFloatWindow(!0), this.getStarSegments(), this.showContinueTip();
            var e = this.vm.getPlayerNextId() || this.nextId;
            e ? this.dataFetcher.getNextVideoInfo(e, null) : setTimeout(function () {
                (e = t.vm.getPlayerNextId()) && t.dataFetcher.getNextVideoInfo(e, null)
            }, 2e3), this._hasBoundEvents || (this.bindEventsAfter(), this._hasBoundEvents = !0)
        }, e.onSwitchClarity = function (t) {
            var e = this;
            Yi.info("cms", "switch definition to [" + t.name + "].");
            var i = this.dispatchData.stream.find(function (e) {
                return e.def == t.def
            });
            if (i) {
                if ("" == i.url) return Yi.info("cms", "user is not authorized to watch, open hd1080 dialog."), void this.vm.emit("showHdDialog", Object.assign(this.videoInfoData, t));
                var n = this.sourceInfo && Pt(this.sourceInfo.info),
                    r = this.sourceInfo && Dt(this.sourceInfo.info);
                this.vm._config.isIpad || this.vm._config.useFlash || n || r || this.isFairplay ? (this.currrentDef = ~~t.def, this.dataFetcher.getDispatcher(this.dispatchData, ~~t.def, 0).then(function (o) {
                    e.sourceInfo = o, e.cdnip = Lt(e.sourceInfo.info).hostname;
                    var s = e.vm.currentTime,
                        a = e.isFairplay ? "native" : r ? "dash" : e.vm._config.useFlash ? "flash" : n ? "mp4" : "native";
                    e.vm.load({
                        src: o.info,
                        ratio: o.ratio,
                        p2p: e.vm.config.get("kernels.flash.p2p.enable", !0),
                        drmData: e.videoInfoData.drmData,
                        box: a,
                        startPosition: s
                    }), setTimeout(function () {
                        zi.set("mango-def", ~~t.def), zi.set("mango-def-auto", t.auto ? "1" : "0"), Yi.info("cms", "switch definition ok, definition [" + t.name + "], source [" + o.info + "]."), e.vm.emit("clarityChanged", {
                            error: null,
                            stream: i,
                            auto: t.auto,
                            silent: t.silent
                        })
                    }, 1e3)
                }).catch(function (n) {
                    Yi.info("cms", "switch definition fail , " + n + "."), e.vm.emit("clarityChanged", {
                        error: n,
                        stream: i,
                        auto: t.auto,
                        silent: t.silent
                    })
                })) : this.vm.loadLevel(~~t.index - 1).then(function () {
                    zi.set("mango-def", ~~t.def), zi.set("mango-def-auto", t.auto ? "1" : "0"), Yi.info("cms", "switch definition ok, definition [" + t.name + "]"), e.vm.emit("clarityChanged", {
                        error: null,
                        stream: i,
                        auto: t.auto,
                        silent: t.silent
                    })
                })
            }
        }, e.onFrontAdBegin = function (t) {
            this.state = zd.FRONT_AD_BEGIN
        }, e.onVideoPrefetch = function (t) {
            var e = this;
            if (!this.isPreFetchedVideo) {
                this.isPreFetchedVideo = !0;
                var i = this.video_id;
                this.vm.emitSync("startPoint", "step1Request"), this.dataFetcher.getSource(i, t.atc.pm2, this.errorRetry).then(function (t) {
                    if (t && t.data) {
                        e.loadingState = Vd.Source, e.dispatchData = t.data;
                        var n = e.dispatchData.stream;
                        n.forEach(function (t, i) {
                            if (t.url) {
                                var n = e.vm._config.lobparam,
                                    r = n.did,
                                    o = n.suuid,
                                    s = -1 !== t.url.indexOf("?") ? "&" : "?";
                                t.url = t.url + s + "did=" + r + "&suuid=" + o
                            }
                        });
                        var r, o = e.videoInfoData.user,
                            s = zi.get("mango-def");
                        Hd || (null === zi.get("mango-def-auto") ? (r = !0, s = "1") : r = !!~~zi.get("mango-def-auto")), void 0 !== e.vm._config.initDef && (s = e.vm._config.initDef);
                        var a = e.getHighestFisibleDef(n, s);
                        if (!a) return Yi.error("cms", "can't find fesible definition for current user, stream=" + n), Yi.error("cms", "user vip=[" + o.isvip + "] purview=[" + o.purview + "]."), void("200" != o.purview ? e.vm.emit("showVipDialog", e.videoInfoData) : e.vm.emit("internalError", {
                            data: Iu({
                                fatal: !0
                            }, $i.SOURCE_DATA_FAIL)
                        }));
                        e.hasDrmData = "1" == e.videoInfoData.info.drmFlag, e.hasDashSource = -1 !== n.findIndex(function (t) {
                            return "MPEG-DASH" === t.fileformat
                        }), e.vm.emit("clarityData", {
                            stream: n,
                            def: a,
                            isAutoDef: r,
                            isDrm: e.hasDrmData
                        }), Yi.info("cms", "find fesible definition for current user, def=[" + a.name + "] index=" + a.def + "."), e.vm.emitSync("startPoint", "step1"), e.isIntelMgtv && e.getSubtitleData(i), Hd || e.vm._config.useFlash || e.hasDrmData || e.hasMp4Source || e.hasDashSource ? (e.currrentDef = ~~a.def, e.dataFetcher.getDispatcher(e.dispatchData, e.currrentDef, 0).then(function (t) {
                            e.loadingState = Vd.Dispatcher, e.sourceInfo = t, e.vm.emitSync("startPoint", "step2"), e.cdnip = Lt(e.sourceInfo.info).hostname, e.state == zd.FRONT_AD_END && e.loadVideoSource()
                        })) : (e.currrentDef = ~~a.def, e.isAutoDef = r, e.mockMasterPlaylist(n, e.currrentDef, r))
                    } else e.loadingState = Vd.Fail
                })
            }
        }, e.mockMasterPlaylist = function (t, e, i) {
            var n = this;
            if (this.levels = t.slice(0).reverse(), i || this.levels.forEach(function (t, i) {
                    ~~t.def === e && (n.startLevel = i)
                }), this.useFakeMasterPlaylist = !0, this.vm.emitSync("startPoint", "step2"), this.state == zd.FRONT_AD_END) this.loadVideoSource();
            else {
                var r = this.getStartTime();
                this.vm.load2({
                    src: "",
                    playlist: this.dispatchData,
                    p2p: this.vm.config.get("kernels.hls.p2p.enable", !0),
                    startPosition: r,
                    drmData: this.videoInfoData.drmData,
                    startLevel: this.startLevel,
                    box: "hls",
                    cdnld: this.cdnld
                }).then(function (t) {
                    n.preloadKernel = t, n.preloadKernel.kernel.on("hlsDispatcherLoaded", function (t) {
                        n.vm.emit("hlsDispatcherLoaded", t)
                    }), n.preloadKernel.kernel.on("stats", n.forwardStats)
                })
            }
        }, e.forwardStats = function (t) {
            this.vm.emit("stats", t)
        }, e.onFrontAdEnd = function (t) {
            this.state = zd.FRONT_AD_END, this.isPreFetchedVideo ? (this.sourceInfo && this.loadVideoSource(), this.useFakeMasterPlaylist && this.loadVideoSource()) : this.onVideoPrefetch(t)
        }, e.onMidAdBegin = function (t) {
            this.state = zd.MID_AD_BEGIN, this._pauseTime = t.time
        }, e.onMidAdEnd = function () {
            if (this.state = zd.MID_AD_END, !zi.get("mango-loop-open")) {
                var t = 0 !== zi.get("mango-skip-start");
                this.skipEndTime = Number(this.videoInfoData.points.end.split("|")[0]) || 0;
                var e = this._pauseTime - this.skipEndTime;
                if (t && Math.abs(e) < 3) return this.vm.stopLoad(), this.vm.pause(), this.vm.emit("videoEnd"), void Yi.info(jd, "send player event [videoEnd] when back slice ad end.")
            }
            var i = this._pauseTime || 0,
                n = this.sourceInfo && Pt(this.sourceInfo.info),
                r = this.sourceInfo && Dt(this.sourceInfo.info);
            if (this._pauseTime = 0, this.vm._config.isIpad || this.vm._config.useFlash || n || r || this.isFairplay) {
                var o = this.isFairplay ? "native" : r ? "dash" : this.vm._config.useFlash ? "flash" : n ? "mp4" : "native";
                this.vm.load({
                    src: this.sourceInfo.info,
                    ratio: this.sourceInfo.ratio,
                    p2p: this.vm.config.get("kernels.flash.p2p.enable", !0),
                    startPosition: i,
                    drmData: this.videoInfoData.drmData,
                    box: o
                })
            } else this.useFakeMasterPlaylist ? this.vm.load({
                src: "",
                playlist: this.dispatchData,
                p2p: this.vm.config.get("kernels.hls.p2p.enable", !0),
                startPosition: i,
                drmData: this.videoInfoData.drmData,
                box: "hls",
                cdnld: this.cdnld
            }) : this.vm.load({
                src: this.sourceInfo.info,
                p2p: this.vm.config.get("kernels.hls.p2p.enable", !0),
                startPosition: i,
                drmData: this.videoInfoData.drmData,
                box: "hls"
            })
        }, e.onSeeking = function () {
            this.state == zd.VIDEO_PLAY && this.vm.emit("videoSeeking", {
                seektime: this.vm.currentTime,
                isCurPoint: 0,
                dragType: 1
            })
        }, e.onSeeked = function () {
            this.state == zd.VIDEO_PLAY && (Yi.info(jd, "send player event [videoDrag]."), this.vm.emit("videoDrag", {
                seektime: this.vm.currentTime,
                isCurPoint: 0,
                dragType: 1
            }))
        }, e.onTimeupdate = function () {
            this.state == zd.VIDEO_PLAY && this.vm.emit("videoTimeupdate", {
                currentTime: this.vm.currentTime
            }), this.emitMockPlaying && this.emitMockPlaying()
        }, e.onEnded = function () {
            this.state != zd.FRONT_AD_BEGIN && this.state != zd.FRONT_AD_PLAY || (this.vm.emit("adFragmentEnd"), Yi.info(jd, "send player event [adFragmentEnd].")), this.state != zd.VIDEO_PLAY && this.state != zd.VIDEO_PAUSE || (this.state = zd.VIDEO_END, this.vm.emit("videoEnd"), Yi.info(jd, "send player event [videoEnd] when vido is realy end.")), this.state == zd.END_AD_BEGIN && (this.state = zd.END_AD_END)
        }, e.onWaiting = function () {
            this.state != zd.FRONT_AD_BEGIN && this.state != zd.FRONT_AD_PLAY ? this.state != zd.VIDEO_PLAY || this.vm.emit("videoWaiting") : this.vm.emit("frontAdWaiting")
        }, e.onError = function (t) {
            (void 0 === t && (t = {}), t.data = t.data || {}, t.data.url = t.data.url || this.sourceInfo && this.sourceInfo.info, this.state != zd.FRONT_AD_BEGIN && this.state != zd.FRONT_AD_PLAY) ? this.state != zd.FRONT_AD_END && this.state != zd.VIDEO_PLAY || (("native" == this.vm.box || "flash" == this.vm.box) && this.recoverVideoErrorRetry < 2 ? (Yi.info(jd, "trying recover from video error, retry " + this.recoverVideoErrorRetry + "."), t.retry = this.recoverVideoErrorRetry, this.recoverVideoError(), this.recoverVideoErrorRetry++, this.vm.emit("videoError", t)) : (Yi.info(jd, "send [videoError] event, after retry " + this.recoverVideoErrorRetry + " times."), t.retry = this.recoverVideoErrorRetry, t.data = t.data || {}, t.data.fatal = !0, this.vm.__dispatcher.kernel.destroy(), this.vm.emit("videoError", t))): this.vm.emit("frontAdError", t)
        }, e.onPlay = function (t) {
            var e = this;
            this.state == zd.FRONT_AD_END && (this.vm.emit("videoPlayStart"), (this.vm._config.isIpad || this.vm._config.useFlash) && (this.videoPlayTimeoutTimer && clearTimeout(this.videoPlayTimeoutTimer), this.videoPlayTimeoutTimer = setTimeout(function () {
                Yi.info(jd, "load video source timeout, send video timeout error event.");
                var t = e.recoverVideoErrorRetry >= 2;
                e.vm.emit("error", {
                    data: {
                        fatal: t,
                        type: "videoNetworkError",
                        code: 2,
                        url: e.sourceInfo.info,
                        details: "timeoutError"
                    }
                })
            }, 11e3)))
        }, e.onPause = function (t) {
            this.state == zd.VIDEO_PLAY && (this.state = zd.VIDEO_PAUSE, this.vm.emit("videoPause"), Yi.info(jd, "send player event [videoPause]."))
        }, e.onVideoWillEnd = function (t) {
            t && t.time && (this.videoWillEndTimer && clearTimeout(this.videoWillEndTimer), this.videoWillEndTimer = setTimeout(function () {}, 1e3 * t.time))
        }, e.onCancelVideoWillEnd = function () {
            this.videoWillEndTimer && clearTimeout(this.videoWillEndTimer)
        }, e.onVideoReplay = function () {
            this.state = zd.VIDEO_PLAY, Hd && this.vm.load({
                src: this.sourceInfo.info,
                ratio: this.sourceInfo.ratio,
                drmData: this.videoInfoData.drmData,
                box: "native"
            })
        }, e.onVideoReload = function (t) {
            t && t.preloadSuccess || (this.dashRecoverStreamErrorRetry = 0, this.recoverVideoErrorRetry = 0, this.currrentDef = 0, this.hasDrmData = !1, this.startLevel = -1, this.isPreFetchedVideo = !1, this.sourceInfo = null, this.useFakeMasterPlaylist = null, this.nextId = null, this.preloadKernel = null, this.cachedSubtitles = [], this.state = zd.IDLE, this.dataFetcher.reset(), this.vm.stopLoad(), this.vm.pause())
        }, e.onFrontAdUrls = function () {
            this.loadingState = Vd.AdUrls
        }, e.onHlsLevelSwitched = function (t) {
            if (this.levels) {
                Yi.info(jd, "Hls level switched: " + t.data.prevLevel + " ----\x3e " + t.data.level + ".");
                var e, i = this.levels[t.data.level];
                e = null === zi.get("mango-def-auto") ? 1 : ~~zi.get("mango-def-auto");
                var n = !1;
                null == t.data.prevLevel && (n = !0), this.vm.emit("clarityChanged", {
                    stream: i,
                    auto: e,
                    silent: n
                })
            }
        }, e.onPreloadVideoPrefetch = function (t) {
            this.onVideoPrefetch(t)
        }, e.setCurrent = function () {
            this.isPreload = !1, this.vm.on("videoReload", this.onVideoReload), this.vm.emitSync("nextVideoPlay", {
                video_id: this.video_id
            });
            var t = this.videoInfoData;
            this.vm.config.set({
                kernels: {
                    hls: {
                        p2p: {
                            enable: this.p2pInitialVal
                        }
                    }
                }
            }), t.info && Number(t.info.duration) < 600 && this.vm.config.set({
                kernels: {
                    hls: {
                        p2p: {
                            enable: !1
                        }
                    }
                }
            }), this.vm.getPaymentInfo(t.user, t.info, this.confData), this.vm.getCMSDataEvent(this.videoInfoData)
        }, e.bindEvent = function () {
            this.onPlaying = this.onPlaying.bind(this), this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onSeeking = this.onSeeking.bind(this), this.onSeeked = this.onSeeked.bind(this), this.onWaiting = this.onWaiting.bind(this), this.onTimeupdate = this.onTimeupdate.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this), this.onSwitchClarity = this.onSwitchClarity.bind(this), this.onFrontAdBegin = this.onFrontAdBegin.bind(this), this.onFrontAdEnd = this.onFrontAdEnd.bind(this), this.onMidAdBegin = this.onMidAdBegin.bind(this), this.onMidAdEnd = this.onMidAdEnd.bind(this), this.onVideoPrefetch = this.onVideoPrefetch.bind(this), this.onVideoWillEnd = this.onVideoWillEnd.bind(this), this.onCancelVideoWillEnd = this.onCancelVideoWillEnd.bind(this), this.onVideoReplay = this.onVideoReplay.bind(this), this.onVideoReload = this.onVideoReload.bind(this), this.onHlsLevelSwitched = this.onHlsLevelSwitched.bind(this), this.onRecoverDashStreamError = this.onRecoverDashStreamError.bind(this), this.onHlsDispatcherError = this.onHlsDispatcherError.bind(this), this.onFrontAdUrls = this.onFrontAdUrls.bind(this), this.onPreloadVideoPrefetch = this.onPreloadVideoPrefetch.bind(this), this.onSwitchSubtitle = this.onSwitchSubtitle.bind(this)
        }, e.bindEventsBefore = function () {
            this.vm.on("fontAdUrls", this.onFrontAdUrls), this.isPreload ? this.vm.on("preloadVideoPrefetch", this.onPreloadVideoPrefetch) : this.vm.on("videoReload", this.onVideoReload), this.vm.on("videoPrefetch", this.onVideoPrefetch), this.vm.on("dashRecoverStreamError", this.onRecoverDashStreamError), this.vm.on("hlsLevelSwitched", this.onHlsLevelSwitched), this.vm.on("frontAdBegin", this.onFrontAdBegin), this.vm.on("frontAdEnd", this.onFrontAdEnd), this.vm.on("timeupdate", this.onTimeupdate), this.vm.on("ended", this.onEnded), this.vm.on("error", this.onError), this.vm.on("playing", this.onPlaying), this.vm.on("play", this.onPlay), this.vm.on("switchSubtitle", this.onSwitchSubtitle)
        }, e.bindEventsAfter = function () {
            this.vm.on("videoReplay", this.onVideoReplay), this.vm.on("videoRefresh", this.onVideoReplay), this.vm.on("videoWillEnd", this.onVideoWillEnd), this.vm.on("cancelVideoWillEnd", this.onCancelVideoWillEnd), this.vm.on("midAdBegin", this.onMidAdBegin), this.vm.on("midAdEnd", this.onMidAdEnd), this.vm.on("switchClarity", this.onSwitchClarity), this.vm.on("pause", this.onPause), this.vm.on("seeking", this.onSeeking), this.vm.on("seeked", this.onSeeked), this.vm.on("waiting", this.onWaiting)
        }, e.removeEvents = function () {
            this.vm.off("playing", this.onPlaying), this.vm.off("play", this.onPlay), this.vm.off("pause", this.onPause), this.vm.off("seeking", this.onSeeking), this.vm.off("seeked", this.onSeeked), this.vm.off("waiting", this.onWaiting), this.vm.off("timeupdate", this.onTimeupdate), this.vm.off("ended", this.onEnded), this.vm.off("error", this.onError), this.vm.off("switchClarity", this.onSwitchClarity), this.vm.off("frontAdBegin", this.onFrontAdBegin), this.vm.off("frontAdEnd", this.onFrontAdEnd), this.vm.off("midAdBegin", this.onMidAdBegin), this.vm.off("midAdEnd", this.onMidAdEnd), this.vm.off("videoPrefetch", this.onVideoPrefetch), this.vm.off("videoWillEnd", this.onVideoWillEnd), this.vm.off("cancelVideoWillEnd", this.onCancelVideoWillEnd), this.vm.off("videoReplay", this.onVideoReplay), this.vm.off("videoRefresh", this.onVideoReplay), this.vm.off("videoReload", this.onVideoReload), this.vm.off("hlsLevelSwitched", this.onHlsLevelSwitched), this.vm.off("dashRecoverStreamError", this.onRecoverDashStreamError), this.vm.off("hlsDispatcherError", this.onHlsDispatcherError), this.vm.off("fontAdUrls", this.onFrontAdUrls), this.vm.off("preloadVideoPrefetch", this.onPreloadVideoPrefetch), this.vm.off("switchSubtitle", this.onSwitchSubtitle)
        }, e.destroy = function () {
            this.removeEvents(), delete this.videoInfoData, delete this.dispatchData, delete this.sourceInfo
        }, Lu([Kc], t.prototype, "forwardStats", null), t
    }(),
    qd = (($d = {
        error_videoinfo_video_offline: {
            code: "101401",
            msg: "抱歉, 该视频已下线"
        },
        error_videoinfo_video_not_exist: {
            code: "101402",
            msg: "抱歉, 该视频不存在"
        },
        error_videoinfo_copyright_mangotv: {
            code: "101403",
            msg: "因版权限制, 请到芒果互联网电视观看该视频"
        },
        error_videoinfo_copyright_app: {
            code: "101404",
            msg: "因版权限制, 请前往APP观看该视频"
        },
        error_videoinfo_copyright_illegal_area: {
            code: "101405",
            msg: "因版权限制, 该视频暂不提供本国家/地区播放"
        },
        error_videoinfo_retrieve_failure: {
            code: "101501",
            msg: "视频信息获取失败"
        },
        error_videoinfo_not_exist: {
            code: "101502",
            msg: "媒资信息不存在"
        },
        error_videoinfo_parameter_error: {
            code: "101301",
            msg: "参数错误"
        },
        error_videoinfo_ip_authority_failure: {
            code: "101302",
            msg: "IP鉴权失败"
        },
        error_videoinfo_pm2_check_failure: {
            code: "101303",
            msg: "加密串校验参数错误"
        },
        error_videoinfo_resolve_no_stream: {
            code: "102100",
            msg: "无播放清晰度, stream 字段为空"
        },
        error_videoinfo_timeout: {
            code: "103600",
            msg: "一层接口请求超时"
        },
        error_dispatcher_resolve_no_url: {
            code: "202001",
            msg: "二层接口未返回url地址"
        },
        error_dispatcher_resolve_invalid_url: {
            code: "202002",
            msg: "二层接口返回的url地址为"
        },
        error_dispatcher_timeout: {
            code: "203600",
            msg: "二层接口请求超时"
        },
        error_cdn_hls_master_video_not_exist: {
            code: "301404",
            msg: "视频文件不存在"
        },
        error_cdn_hls_master_video_no_authority: {
            code: "301403",
            msg: "视频文件无权限访问"
        },
        error_cdn_hls_master_m3u8_500: {
            code: "301500",
            msg: "master m3u8文件请求遇到500错误"
        },
        error_cdn_hls_master_m3u8_501: {
            code: "301501",
            msg: "master m3u8文件请求遇到501错误"
        },
        error_cdn_hls_master_m3u8_502: {
            code: "301502",
            msg: "master m3u8文件请求遇到502错误"
        },
        error_cdn_hls_master_m3u8_timeout: {
            code: "3016XX",
            msg: "master m3u8文件TCP请求超时"
        },
        error_cdn_hls_level_video_not_exist: {
            code: "310404",
            msg: "视频文件不存在"
        },
        error_cdn_hls_level_video_no_authority: {
            code: "310403",
            msg: "视频文件无权限访问"
        },
        error_cdn_hls_level_m3u8_500: {
            code: "310500",
            msg: "level m3u8文件请求遇到500错误"
        },
        error_cdn_hls_level_m3u8_501: {
            code: "310501",
            msg: "level m3u8文件请求遇到501错误"
        },
        error_cdn_hls_level_m3u8_502: {
            code: "310502",
            msg: "level m3u8文件请求遇到502错误"
        },
        error_cdn_hls_level_m3u8_timeout: {
            code: "310600",
            msg: "level m3u8文件TCP请求超时"
        },
        error_cdn_hls_level_switch_error: {
            code: "310701",
            msg: "切换清晰度出现 levelSwitchError 错误"
        },
        error_cdn_hls_m3u8_parsing_error: {
            code: "302000",
            msg: "m3u8文件校验解析错误"
        },
        error_cdn_hls_m3u8_video_format_error: {
            code: "302001",
            msg: "视频文件格式错误导致解析失败"
        },
        error_cdn_hls_m3u8_hash_check_failure: {
            code: "302002",
            msg: "一致性hash校验不成功，m3u8文件下载不完整或者被篡改"
        },
        error_cdn_hls_m3u8_ts_index_null: {
            code: "302003",
            msg: "ts文件索引为空"
        },
        error_cdn_hls_m3u8_codec_not_support: {
            code: "303000",
            msg: "m3u8文件中声明了不支持的音视频格式"
        },
        error_cdn_hls_ts_video_not_exist: {
            code: "304404",
            msg: "视频文件不存在"
        },
        error_cdn_hls_ts_video_no_authority: {
            code: "304403",
            msg: "视频文件无权限访问"
        },
        error_cdn_hls_ts_500: {
            code: "304500",
            msg: "TS文件请求遇到500错误"
        },
        error_cdn_hls_ts_501: {
            code: "304501",
            msg: "TS文件请求遇到501错误"
        },
        error_cdn_hls_ts_502: {
            code: "304502",
            msg: "TS文件请求遇到502错误"
        },
        error_cdn_hls_ts_timeout: {
            code: "304600",
            msg: "在超时时长内ts数据没有下载完成"
        },
        error_cdn_hls_ts_client_network: {
            code: "304700",
            msg: "客户端网络错误，TS请求失败"
        },
        error_cdn_hls_fragdecrypt: {
            code: "305000",
            msg: "解码TS文件中的音视频数据出错 (fragDecryptError)"
        },
        error_cdn_hls_fragparsingeerror: {
            code: "305001",
            msg: "TS片段解析出错"
        },
        error_cdn_hls_remuxalloc: {
            code: "305002",
            msg: "解码过程中遇到浏览器内存不足，无法分配内存 (remuxAllocError)"
        },
        error_cdn_hls_bufferaddcodec: {
            code: "305003",
            msg: "将sourceBuffer对象添加到MediaSource对象时遇到异常（bufferAddCodecError）"
        },
        error_cdn_hls_bufferappending: {
            code: "305004",
            msg: "追加buffer的过程中遇到错误(bufferAppendingError)"
        },
        error_cdn_hls_bufferappend: {
            code: "305005",
            msg: "追加buffer的之后遇到错误(bufferAppendError)"
        },
        error_cdn_hls_buffernudgeonstall: {
            code: "306000",
            msg: "播放过程中buffer存在间隙导致卡顿 (bufferNudgeOnStall)"
        },
        error_cdn_hls_unknown: {
            code: "309000",
            msg: "其他未知的错误"
        },
        error_cdn_dash_mpd_404: {
            code: "311404",
            msg: "获取mpd文件的请求返回404错误"
        },
        error_cdn_dash_mpd_403: {
            code: "311403",
            msg: "获取mpd文件的请求返回403错误"
        },
        error_cdn_dash_mpd_500: {
            code: "311500",
            msg: "获取mpd文件的请求返回500错误"
        },
        error_cdn_dash_mpd_timeout: {
            code: "311600",
            msg: "mpd文件请求超时"
        },
        error_cdn_dash_mpd_resolve_failure: {
            code: "312001",
            msg: "mpd文件解析失败"
        },
        error_cdn_dash_mpd_resolve_url_failure: {
            code: "312002",
            msg: "通用URL解析错误"
        },
        error_cdn_dash_mpd_resolve_no_duration: {
            code: "312003",
            msg: "mpd文件不包含时长信息"
        },
        error_cdn_dash_mpd_resolve_codec_not_support: {
            code: "312004",
            msg: "mpd文件codec类型不支持"
        },
        error_cdn_dash_mpd_resolve_no_valid_stream: {
            code: "312005",
            msg: "mpd不包含可用的流信息"
        },
        error_cdn_dash_mpd_resolve_text_file_failure: {
            code: "312100",
            msg: "TTML或者VTT等文本文件解析失败"
        },
        error_cdn_dash_mpd_resolve_muxed_detected: {
            code: "312200",
            msg: "检测到 `muxed` 类型的媒体类型"
        },
        error_cdn_dash_xlink_404: {
            code: "313404",
            msg: "获取xlink文件的请求返回404错误"
        },
        error_cdn_dash_xlink_403: {
            code: "313403",
            msg: "获取xlink文件的请求返回403错误"
        },
        error_cdn_dash_xlink_500: {
            code: "313500",
            msg: "获取xlink文件的请求返回500错误"
        },
        error_cdn_dash_xlink_timeout: {
            code: "313600",
            msg: "xlink文件请求超时"
        },
        error_cdn_dash_representation_abnormal: {
            code: "314001",
            msg: "representation异常 "
        },
        error_cdn_dash_representation_update_abnormal: {
            code: "314002",
            msg: "representation更新异常"
        },
        error_cdn_dash_fragment_404: {
            code: "315404",
            msg: "获取片段文件的请求返回404错误"
        },
        error_cdn_dash_fragment_403: {
            code: "315403",
            msg: "获取片段文件的请求返回403错误"
        },
        error_cdn_dash_fragment_500: {
            code: "315500",
            msg: "获取片段文件的请求返回500错误"
        },
        error_cdn_dash_fragment_timeout: {
            code: "315600",
            msg: "片段文件请求超时"
        },
        error_cdn_dash_buffer_append: {
            code: "316001",
            msg: "追加缓存遇到错误"
        },
        error_cdn_dash_buffer_remove: {
            code: "316002",
            msg: "移除缓存遇到错误"
        },
        error_cdn_dash_buffer_update: {
            code: "316003",
            msg: "缓存数据更新时遇到错误"
        },
        error_cdn_dash_mse_not_support: {
            code: "317001",
            msg: "浏览器不支持MSE"
        },
        error_cdn_dash_eme_not_support: {
            code: "317002",
            msg: "浏览器不支持EME"
        },
        error_cdn_dash_codec_not_support: {
            code: "317003",
            msg: "浏览器不支持的视频编码"
        },
        error_cdn_dash_mpd_download: {
            code: "318001",
            msg: "mpd文件下载错误"
        },
        error_cdn_dash_xlink_download: {
            code: "318002",
            msg: "xlink文件下载错误"
        },
        error_cdn_dash_initsegment_download: {
            code: "318003",
            msg: "initSegment文件下载错误"
        },
        error_cdn_dash_segment_download: {
            code: "318004",
            msg: "indexSegment和mediaSegment和bitStreamSwitchingSegment的文件的下载错误"
        },
        error_cdn_dash_drm_key_common: {
            code: "319100",
            msg: "通用的key错误类型"
        },
        error_cdn_dash_drm_key: {
            code: "319101",
            msg: "key错误类型"
        },
        error_cdn_dash_drm_key_client: {
            code: "319102",
            msg: "客户端相关的key错误"
        },
        error_cdn_dash_drm_key_service: {
            code: "319103",
            msg: "服务相关的key错误"
        },
        error_cdn_dash_drm_key_output: {
            code: "319104",
            msg: "输出相关的key错误"
        },
        error_cdn_dash_drm_key_hardware: {
            code: "319105",
            msg: "硬件相关的key错误"
        },
        error_cdn_dash_drm_key_domain: {
            code: "319106",
            msg: "域名相关的key错误"
        },
        error_cdn_dash_drm_keymessage: {
            code: "319107",
            msg: "keymessage事件发生错误"
        },
        error_cdn_dash_drm_keymessage_challenge: {
            code: "319108",
            msg: "keymessage事件中challenge无效"
        },
        error_cdn_dash_drm_cert_update_failure: {
            code: "319109",
            msg: "证书未成功更新"
        },
        error_cdn_dash_drm_cert_expire: {
            code: "319110",
            msg: "证书过期"
        },
        error_cdn_dash_drm_cert_server_url_null: {
            code: "319111",
            msg: "认证服务器url为空"
        },
        error_cdn_dash_drm_keysystem_denied: {
            code: "319112",
            msg: "keySystem 访问被拒绝"
        },
        error_cdn_dash_drm_keysesstion_create: {
            code: "319113",
            msg: "keySession 创建失败"
        },
        error_cdn_dash_drm_cert_after_keymessage: {
            code: "319114",
            msg: "keymessage事件触发后证书请求出错"
        },
        error_cdn_dash_other_error: {
            code: "320000",
            msg: "unknown dash cdn error"
        },
        error_cdn_fairplay_keysystem_browser_version: {
            code: "325001",
            msg: "浏览器版本不支持当前指定的keySystem类型"
        },
        error_cdn_fairplay_keysystem_mediakeys: {
            code: "325002",
            msg: "创建MediaKeys遇到错误"
        },
        error_cdn_fairplay_keysystem_keysession: {
            code: "325003",
            msg: "创建KeySession时遇到错误"
        },
        error_cdn_fairplay_keysession_webkitkeyerror: {
            code: "325004",
            msg: "KeySession对象抛出 webkitkeyerror 事件"
        },
        error_cdn_fairplay_cert_404: {
            code: "326404",
            msg: "获取cert的请求返回404错误"
        },
        error_cdn_fairplay_cert_403: {
            code: "326403",
            msg: "获取cert的请求返回403错误"
        },
        error_cdn_fairplay_cert_500: {
            code: "326500",
            msg: "获取cert的请求返回500错误"
        },
        error_cdn_fairplay_cert_timeout: {
            code: "326600",
            msg: "cert请求超时"
        },
        error_cdn_fairplay_license_404: {
            code: "327404",
            msg: "获取license的请求返回404错误"
        },
        error_cdn_fairplay_license_403: {
            code: "327403",
            msg: "获取license的请求返回403错误"
        },
        error_cdn_fairplay_license_500: {
            code: "327500",
            msg: "获取license的请求返回500错误"
        },
        error_cdn_fairplay_license_timeout: {
            code: "327600",
            msg: "license请求超时"
        },
        error_cdn_vanilla_close_downlowd: {
            code: "330001",
            msg: "下载过程中被用户终止"
        },
        error_cdn_vanilla_network: {
            code: "330002",
            msg: "网络加载错误或者超时"
        },
        error_cdn_vanilla_decode: {
            code: "330003",
            msg: "解码时遇到错误"
        },
        error_cdn_vanilla_format_not_support: {
            code: "330004",
            msg: "不支持的音视频格式"
        },
        error_cdn_vanilla_encrypted_media: {
            code: "330005",
            msg: "加密媒体错误"
        },
        error_cdn_vanilla_unknown: {
            code: "330006",
            msg: "其他未知错误"
        },
        error_cdn_flv_network: {
            code: "340100",
            msg: "网络连接错误"
        },
        error_cdn_flv_decode: {
            code: "340101",
            msg: "解码错误"
        },
        error_cdn_flv_seek: {
            code: "340102",
            msg: "无法seek导致报错"
        },
        error_cdn_flv_stream_close: {
            code: "340103",
            msg: "播放遇到流结束"
        },
        error_cdn_flv_media_source: {
            code: "340104",
            msg: "媒体文件错误"
        },
        error_cdn_flv_source_buffer: {
            code: "340105",
            msg: "流错误"
        },
        error_cdn_flv_source_buffer_abort: {
            code: "340106",
            msg: "SBABORT"
        },
        error_cdn_flv_buffer_append: {
            code: "340107",
            msg: "追加流数据报错"
        },
        error_cdn_flv_unknown: {
            code: "340200",
            msg: "其他未知错误"
        },
        error_cdn_mp4_metadata_resolve: {
            code: "350001",
            msg: "metadata解析错误"
        },
        error_cdn_mp4_codec_not_support: {
            code: "350002",
            msg: "不支持的codecs编码格式"
        },
        error_cdn_mp4_fragment_loop: {
            code: "350003",
            msg: "fragment循环加载错误"
        },
        error_cdn_mp4_fragment_decode: {
            code: "350004",
            msg: "fragment解码错误"
        },
        error_cdn_mp4_fragment_resolve: {
            code: "350005",
            msg: "fragment解析错误"
        },
        error_cdn_mp4_alloc: {
            code: "350006",
            msg: "内存分配错误"
        },
        error_cdn_mp4_add_source_buffer: {
            code: "350007",
            msg: "添加sourceBuffer遇到错误"
        },
        error_cdn_mp4_buffer_fill: {
            code: "350008",
            msg: "填流错误"
        },
        error_cdn_mp4_buffer_filling: {
            code: "350009",
            msg: "填流中错误"
        },
        error_cdn_mp4_caton: {
            code: "350010",
            msg: "播放卡顿错误"
        },
        error_cdn_mp4_other_internal: {
            code: "350100",
            msg: "其他内部位置错误"
        },
        error_cdn_interactive_fragment_404: {
            code: "370404",
            msg: "获取片段文件的请求返回404错误"
        },
        error_cdn_interactive_fragment_403: {
            code: "370403",
            msg: "获取片段文件的请求返回403错误"
        },
        error_cdn_interactive_fragment_500: {
            code: "370500",
            msg: "获取片段文件的请求返回500错误"
        },
        error_cdn_interactive_fragment_timeout: {
            code: "370600",
            msg: "片段文件请求超时"
        }
    }).error_cdn_interactive_fragment_404 = {
        code: "373001",
        msg: "分支视频播放出错"
    }, $d.getError = function (t) {
        var e, i, n = g(qd).filter(function (e) {
            return qd[e].code && qd[e].code == t
        });
        if (n.length > 0) return qd[n[0]];
        switch (i = "", (e = t.toString()).substr(0, 3)) {
            case "201":
                i = "Dispatcher请求失败";
                break;
            case "307":
                i = "m3u8文件DRM解密错误";
                break;
            case "311":
                i = "获取mpd文件的请求返回 " + e.substr(3) + " 错误";
                break;
            case "313":
                i = "获取xlink文件的请求返回 " + e.substr(3) + " 错误";
                break;
            case "315":
                i = "获取片段文件的请求返回 " + e.substr(3) + " 错误";
                break;
            case "326":
                i = "获取证书（cert）的请求返回 " + e.substr(3) + " 错误 ";
                break;
            case "327":
                i = "获取证书（license）的请求返回 " + e.substr(3) + " 错误 ";
                break;
            case "372":
                i = "缓存分支视频出错";
                break;
            case "410":
                i = "信令服务连接错误"
        }
        switch (e.substr(0, 4)) {
            case "3014":
            case "3015":
                i = "master m3u8文件请求出现 " + e.substr(3) + " 错误";
                break;
            case "3016":
                i = "master m3u8文件TCP请求超时";
                break;
            case "3104":
            case "3105":
                i = "level m3u8文件请求出现 " + e.substr(3) + " 错误";
                break;
            case "3106":
                i = "level m3u8文件TCP请求超时";
                break;
            case "3044":
            case "3045":
                i = "TS文件请求出现 " + e.substr(3) + " 错误"
        }
        return {
            code: e,
            msg: i
        }
    }, $d),
    Gd = {
        init: "0",
        pv: "a",
        cmsbegin: "b",
        cmsend: "c",
        routebegin: "d",
        routeend: "e",
        streambegin: "f",
        adinit: "g",
        adfrontbegin: "h",
        adfrontend: "i",
        adbegin: "j",
        adend: "k",
        play: "l",
        stop: "m",
        pause: "n",
        resume: "o",
        forward: "p",
        backward: "q",
        drag: "r",
        hb: "s",
        next: "t",
        buffer: "u",
        openfscreen: "v",
        closefscreen: "w",
        replay: "x",
        refresh: "y",
        reload: "z"
    },
    Kd = {
        LogEvent: {
            ACT_PV: "pv",
            ACT_CMSBEGIN: "cmsbegin",
            ACT_CMSEND: "cmsend",
            ACT_ROUTEBEGIN: "routebegin",
            ACT_ROUTEEND: "routeend",
            ACT_STREAMBEGIN: "streambegin",
            ACT_ADINIT: "adinit",
            ACT_AD_FRONT_BEGIN: "adfrontbegin",
            ACT_AD_FRONT_END: "adfrontend",
            ACT_ADBEGIN: "adbegin",
            ACT_ADEND: "adend",
            ACT_PLAY: "play",
            ACT_STOP: "stop",
            ACT_PAUSE: "pause",
            ACT_RESUME: "resume",
            ACT_FORWARD: "forward",
            ACT_BACKWARD: "backward",
            ACT_DRAG: "drag",
            ACT_HEARTBEAT: "hb",
            ACT_LIVE_HEARTBEAT: "heartbeat",
            ACT_NEXT: "next",
            ACT_OPENFSCREEN: "openfscreen",
            ACT_CLOSEFSCREEN: "closefscreen",
            ACT_CHANGEFSCREEN: "changefscreen",
            ACT_SHARE: "share",
            ACT_TOVIP: "noad",
            ACT_POPCLICK: "popclick",
            ACT_POPCLOSE: "popclose",
            ACT_VOICE: "voice",
            ACT_DEFINITION: "definition",
            ACT_SCALE: "scale",
            ACT_BRIGHTNESS: "brightness",
            ACT_CONTRAST: "contrast",
            ACT_SKIP: "skip",
            ACT_SEARCH: "psearch",
            ACT_BUFFER: "buffer",
            ACT_EXIT_CODE: "exit",
            ACT_ERROR_CODE: "er",
            ACT_P2P: "h5p2p"
        },
        LogParam: {
            PARAM_TIME: "time",
            PARAM_VERSION: "pver",
            PARAM_CVERSION: "cver",
            PARAM_SUUID: "suuid",
            PARAM_GUID: "guid",
            PARAM_URL: "url",
            PARAM_COOKIE: "cookie",
            PARAM_UUID: "uuid",
            PARAM_CH: "ch",
            PARAM_SESSIONID: "sessionid",
            PARAM_ACT: "act",
            PARAM_BID: "bid",
            PARAM_IDX: "idx",
            PARAM_REF: "ref",
            PARAM_PT: "pt",
            PARAM_CF: "cf",
            PARAM_CT: "ct",
            PARAM_ET: "et",
            PARAM_TD: "td",
            PARAM_VTS: "vts",
            PARAM_VID: "vid",
            PARAM_PLID: "plid",
            PARAM_CID: "cid",
            PARAM_CDNIP: "cdnip",
            PARAM_PURL: "purl",
            PARAM_PAY: "pay",
            PARAM_AP: "ap",
            PARAM_DEF: "def",
            PARAM_PSTATUS: "pstatus",
            PARAM_ISTRY: "istry",
            PARAM_BDID: "bdid",
            PARAM_EXT1: "ext1",
            PARAM_EXT2: "ext2",
            PARAM_EXT3: "ext3",
            PARAM_EXT4: "ext4",
            PARAM_EXT5: "ext5",
            PARAM_EXT6: "ext6",
            PARAM_EXT7: "ext7",
            PARAM_BFTYPE: "bftype",
            PARAM_HT: "ht",
            PARAM_BSID: "bsid",
            PARAM_CPN: "cpn",
            PARAM_CP: "cp",
            PARAM_UVIP: "uvip",
            PARAM_NFID: "nfid",
            PARAM_RDC: "rdc",
            PARAM_WVER: "wver",
            PARAM_MP: "mp",
            PARAM_PIX: "pix",
            PARAM_ABROAD: "abroad",
            PARAM_SRC: "src"
        },
        RequestType: {
            CMS: 10,
            DISPATCHER: 20,
            CDN: 30,
            GETSOURCE: 40
        },
        ReportError: qd,
        ActionEvents: Gd,
        parseAction: function (t) {
            for (var e, i = t.split(""), n = [], r = u(i); !(e = r()).done;)
                for (var o, s = e.value, a = u(Gd); !(o = a()).done;) {
                    var h = o.value,
                        c = Gd[h];
                    c == s && n.push(h)
                }
            return n.join("--\x3e")
        }
    };
var Yd = Kd.LogParam,
    Xd = Kd.RequestType,
    Zd = "//v1-play.log.mgtv.com/info.php?",
    Qd = /iPad/i.test(navigator.userAgent),
    Jd = function () {
        function t(t) {
            this.init(t)
        }
        var e = t.prototype;
        return e.init = function (t) {
            this.config = t || this.config, this.method = this.config.method, this.videoUrl = "", this.p2p = this.config.p2p, this.mHeartBeatTimerTicker = 0, this.mBufferEmpty = 0, this.mHeartBeatTimeValue = 3e5, this.mVideoPlayTime = 0, this.commonParams = {}, this.commonParams.p = Qd ? "5" : "13", this.commonParams.t = this.config.isLive ? "1" : "0", this.commonParams.cv = "20170105", this.commonParams.v = "imgotv-" + this.config.pcore + "-" + this.config.pver + (this.p2p ? ".1" : ""), this.commonParams.c = 1, this.commonParams.pt = 4, this.commonParams.st = this.config.subtype || "", this.commonParams.ld = this.method.getSessionId(), this.commonParams.abroad = this.config.abroad, this.commonParams.src = this.config.isIntelMgtv ? "intelmgtv" : "mgtv", this.setA(0), this.setU(), this.canPlayParams = {}, this.canPlayParams[Yd.PARAM_BID] = Qd ? "1.1.26" : "1.1.90", this.canPlayParams[Yd.PARAM_SUUID] = Rt(this, "config.lobparam.suuid"), this.canPlayParams[Yd.PARAM_COOKIE] = this.method.getCookie(), this.canPlayParams[Yd.PARAM_CH] = this.method.getCxid(), this.canPlayParams[Yd.PARAM_URL] = document.location.href || "", this.canPlayParams[Yd.PARAM_REF] = Rt(this, "config.lobparam.ref"), this.canPlayParams[Yd.PARAM_MP] = 0, this.canPlayParams[Yd.PARAM_SESSIONID] = this.method.getSessionId(), this.canPlayParams[Yd.PARAM_WVER] = this.config.wver, this.sendHeartbeat = this._sendHeartbeat.bind(this)
        }, e.setPCore = function (t, e) {
            this.config.pcore = t, this.config.p2p = e, this.commonParams.v = "imgotv-" + this.config.pcore + "-" + this.config.pver + (e ? ".1" : "")
        }, e.setV = function (t) {
            this.commonParams.v = t
        }, e.setU = function () {
            this.commonParams.u = this.method.getGUID()
        }, e.setB = function (t) {
            this.commonParams.b = t
        }, e.setA = function (t) {
            this.commonParams.a = t
        }, e.start = function () {
            this.startHeartbeat()
        }, e.bufferEmptyCount = function () {
            this.mBufferEmpty++, 1 == this.mBufferEmpty && this.sendFirstBuffer()
        }, e.setVideoUrl = function (t) {
            this.videoUrl = this.videoUrl || t.h
        }, e.stop = function () {
            this.sendPlayComplete(), this.stopHeartbeat()
        }, e.startHeartbeat = function () {
            0 == this.mHeartBeatTimerTicker && (this.mHeartBeatTimerTicker = setInterval(this.sendHeartbeat, this.mHeartBeatTimeValue), this.sendHeartbeat())
        }, e.stopHeartbeat = function () {
            clearInterval(this.mHeartBeatTimerTicker), this.mHeartBeatTimerTicker = 0, this.mBufferEmpty = 0
        }, e.sendFirstBuffer = function () {
            var t = {};
            if (this.videoUrl) {
                t.f = this.mBufferEmpty, t.r = "0", t.o = this.mVideoPlayTime;
                var e = this.method.parseURL(this.videoUrl);
                t.h = e.host, t.l = e.relative, this.sendLog(Zd, t)
            }
        }, e._sendHeartbeat = function () {
            var t = {};
            if (this.videoUrl) {
                t.f = this.mBufferEmpty, t.r = "1";
                var e = this.method.parseURL(this.videoUrl);
                t.h = e.host, t.l = e.relative, this.sendLog(Zd, t), this.mBufferEmpty = 0
            }
        }, e.sendError = function (t) {
            var e = {};
            if (this.videoUrl) {
                var i = this.method.parseURL(this.videoUrl);
                e.h = i.host, e.l = i.relative, e.f = "1", e.r = t.r || "2", e.e = t.code, e.o = this.mVideoPlayTime, this.sendLog(Zd, e)
            }
        }, e.sendPlayComplete = function () {
            var t = {};
            if (this.videoUrl) {
                var e = this.method.parseURL(this.videoUrl);
                t.h = e.host, t.l = e.relative, t.f = this.mBufferEmpty, t.r = "3", t.o = this.mVideoPlayTime, this.sendLog(Zd, t)
            }
        }, e.sendRequestResult = function (t) {
            var e = {};
            if (e.s = this.createS(t.type), e.f = t.f, t.h) {
                var i = this.method.parseURL(t.h);
                e.h = i.host, e.l = i.relative
            }
            for (var n in null != t.a && (this.commonParams.a = t.a), e.si = this.method.findSI(t.h), t.code && (e.e = t.code), e.z = t.z, e.type = Number(e.s) - 1, e.time = this.method.getTime(), this.canPlayParams) e[n] = this.canPlayParams[n];
            t.timing && (e.ex = encodeURIComponent("timing=" + t.timing)), this.sendLog("//v2.log.mgtv.com/info.php?", e)
        }, e.createS = function (t) {
            var e = "";
            switch (t) {
                case Xd.CMS:
                    e = "10";
                    break;
                case Xd.GETSOURCE:
                    e = "1";
                    break;
                case Xd.DISPATCHER:
                    e = "2";
                    break;
                case Xd.CDN:
                    e = "3"
            }
            return e
        }, e.sendLog = function (t, e) {
            var i = m({}, this.commonParams, e);
            un(t + this.method.params(i))
        }, n(t, [{
            key: "VideoPlayTime",
            set: function (t) {
                this.mVideoPlayTime = t
            }
        }]), t
    }(),
    tf = st(function (t) {
        var e, i;
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {
            rotl: function (t, e) {
                return t << e | t >>> 32 - e
            },
            rotr: function (t, e) {
                return t << 32 - e | t >>> e
            },
            endian: function (t) {
                if (t.constructor == Number) return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
                for (var e = 0; e < t.length; e++) t[e] = i.endian(t[e]);
                return t
            },
            randomBytes: function (t) {
                for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                return e
            },
            bytesToWords: function (t) {
                for (var e = [], i = 0, n = 0; i < t.length; i++, n += 8) e[n >>> 5] |= t[i] << 24 - n % 32;
                return e
            },
            wordsToBytes: function (t) {
                for (var e = [], i = 0; i < 32 * t.length; i += 8) e.push(t[i >>> 5] >>> 24 - i % 32 & 255);
                return e
            },
            bytesToHex: function (t) {
                for (var e = [], i = 0; i < t.length; i++) e.push((t[i] >>> 4).toString(16)), e.push((15 & t[i]).toString(16));
                return e.join("")
            },
            hexToBytes: function (t) {
                for (var e = [], i = 0; i < t.length; i += 2) e.push(parseInt(t.substr(i, 2), 16));
                return e
            },
            bytesToBase64: function (t) {
                for (var i = [], n = 0; n < t.length; n += 3)
                    for (var r = t[n] << 16 | t[n + 1] << 8 | t[n + 2], o = 0; o < 4; o++) 8 * n + 6 * o <= 8 * t.length ? i.push(e.charAt(r >>> 6 * (3 - o) & 63)) : i.push("=");
                return i.join("")
            },
            base64ToBytes: function (t) {
                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                for (var i = [], n = 0, r = 0; n < t.length; r = ++n % 4) 0 != r && i.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | e.indexOf(t.charAt(n)) >>> 6 - 2 * r);
                return i
            }
        }, t.exports = i
    }),
    ef = {
        utf8: {
            stringToBytes: function (t) {
                return ef.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            bytesToString: function (t) {
                return decodeURIComponent(escape(ef.bin.bytesToString(t)))
            }
        },
        bin: {
            stringToBytes: function (t) {
                for (var e = [], i = 0; i < t.length; i++) e.push(255 & t.charCodeAt(i));
                return e
            },
            bytesToString: function (t) {
                for (var e = [], i = 0; i < t.length; i++) e.push(String.fromCharCode(t[i]));
                return e.join("")
            }
        }
    },
    nf = ef,
    rf = function (t) {
        return null != t && ( of (t) || function (t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && of (t.slice(0, 0))
        }(t) || !!t._isBuffer)
    };

function of (t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
}
var sf = st(function (t) {
        var e, i, n, r, o;
        e = tf, i = nf.utf8, n = rf, r = nf.bin, (o = function (t, s) {
            t.constructor == String ? t = s && "binary" === s.encoding ? r.stringToBytes(t) : i.stringToBytes(t) : n(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
            for (var a = e.bytesToWords(t), h = 8 * t.length, c = 1732584193, u = -271733879, l = -1732584194, d = 271733878, f = 0; f < a.length; f++) a[f] = 16711935 & (a[f] << 8 | a[f] >>> 24) | 4278255360 & (a[f] << 24 | a[f] >>> 8);
            a[h >>> 5] |= 128 << h % 32, a[14 + (h + 64 >>> 9 << 4)] = h;
            var p = o._ff,
                m = o._gg,
                v = o._hh,
                g = o._ii;
            for (f = 0; f < a.length; f += 16) {
                var y = c,
                    _ = u,
                    b = l,
                    w = d;
                c = p(c, u, l, d, a[f + 0], 7, -680876936), d = p(d, c, u, l, a[f + 1], 12, -389564586), l = p(l, d, c, u, a[f + 2], 17, 606105819), u = p(u, l, d, c, a[f + 3], 22, -1044525330), c = p(c, u, l, d, a[f + 4], 7, -176418897), d = p(d, c, u, l, a[f + 5], 12, 1200080426), l = p(l, d, c, u, a[f + 6], 17, -1473231341), u = p(u, l, d, c, a[f + 7], 22, -45705983), c = p(c, u, l, d, a[f + 8], 7, 1770035416), d = p(d, c, u, l, a[f + 9], 12, -1958414417), l = p(l, d, c, u, a[f + 10], 17, -42063), u = p(u, l, d, c, a[f + 11], 22, -1990404162), c = p(c, u, l, d, a[f + 12], 7, 1804603682), d = p(d, c, u, l, a[f + 13], 12, -40341101), l = p(l, d, c, u, a[f + 14], 17, -1502002290), c = m(c, u = p(u, l, d, c, a[f + 15], 22, 1236535329), l, d, a[f + 1], 5, -165796510), d = m(d, c, u, l, a[f + 6], 9, -1069501632), l = m(l, d, c, u, a[f + 11], 14, 643717713), u = m(u, l, d, c, a[f + 0], 20, -373897302), c = m(c, u, l, d, a[f + 5], 5, -701558691), d = m(d, c, u, l, a[f + 10], 9, 38016083), l = m(l, d, c, u, a[f + 15], 14, -660478335), u = m(u, l, d, c, a[f + 4], 20, -405537848), c = m(c, u, l, d, a[f + 9], 5, 568446438), d = m(d, c, u, l, a[f + 14], 9, -1019803690), l = m(l, d, c, u, a[f + 3], 14, -187363961), u = m(u, l, d, c, a[f + 8], 20, 1163531501), c = m(c, u, l, d, a[f + 13], 5, -1444681467), d = m(d, c, u, l, a[f + 2], 9, -51403784), l = m(l, d, c, u, a[f + 7], 14, 1735328473), c = v(c, u = m(u, l, d, c, a[f + 12], 20, -1926607734), l, d, a[f + 5], 4, -378558), d = v(d, c, u, l, a[f + 8], 11, -2022574463), l = v(l, d, c, u, a[f + 11], 16, 1839030562), u = v(u, l, d, c, a[f + 14], 23, -35309556), c = v(c, u, l, d, a[f + 1], 4, -1530992060), d = v(d, c, u, l, a[f + 4], 11, 1272893353), l = v(l, d, c, u, a[f + 7], 16, -155497632), u = v(u, l, d, c, a[f + 10], 23, -1094730640), c = v(c, u, l, d, a[f + 13], 4, 681279174), d = v(d, c, u, l, a[f + 0], 11, -358537222), l = v(l, d, c, u, a[f + 3], 16, -722521979), u = v(u, l, d, c, a[f + 6], 23, 76029189), c = v(c, u, l, d, a[f + 9], 4, -640364487), d = v(d, c, u, l, a[f + 12], 11, -421815835), l = v(l, d, c, u, a[f + 15], 16, 530742520), c = g(c, u = v(u, l, d, c, a[f + 2], 23, -995338651), l, d, a[f + 0], 6, -198630844), d = g(d, c, u, l, a[f + 7], 10, 1126891415), l = g(l, d, c, u, a[f + 14], 15, -1416354905), u = g(u, l, d, c, a[f + 5], 21, -57434055), c = g(c, u, l, d, a[f + 12], 6, 1700485571), d = g(d, c, u, l, a[f + 3], 10, -1894986606), l = g(l, d, c, u, a[f + 10], 15, -1051523), u = g(u, l, d, c, a[f + 1], 21, -2054922799), c = g(c, u, l, d, a[f + 8], 6, 1873313359), d = g(d, c, u, l, a[f + 15], 10, -30611744), l = g(l, d, c, u, a[f + 6], 15, -1560198380), u = g(u, l, d, c, a[f + 13], 21, 1309151649), c = g(c, u, l, d, a[f + 4], 6, -145523070), d = g(d, c, u, l, a[f + 11], 10, -1120210379), l = g(l, d, c, u, a[f + 2], 15, 718787259), u = g(u, l, d, c, a[f + 9], 21, -343485551), c = c + y >>> 0, u = u + _ >>> 0, l = l + b >>> 0, d = d + w >>> 0
            }
            return e.endian([c, u, l, d])
        })._ff = function (t, e, i, n, r, o, s) {
            var a = t + (e & i | ~e & n) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + e
        }, o._gg = function (t, e, i, n, r, o, s) {
            var a = t + (e & n | i & ~n) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + e
        }, o._hh = function (t, e, i, n, r, o, s) {
            var a = t + (e ^ i ^ n) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + e
        }, o._ii = function (t, e, i, n, r, o, s) {
            var a = t + (i ^ (e | ~n)) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + e
        }, o._blocksize = 16, o._digestsize = 16, t.exports = function (t, i) {
            if (null == t) throw new Error("Illegal argument " + t);
            var n = e.wordsToBytes(o(t, i));
            return i && i.asBytes ? n : i && i.asString ? r.bytesToString(n) : e.bytesToHex(n)
        }
    }),
    af = Kd.LogEvent,
    hf = Kd.ActionEvents,
    cf = /iPad/i.test(navigator.userAgent),
    uf = cf ? "1.1.26" : "1.1.90",
    lf = "//pcweb-v1.log.mgtv.com/dispatcher.do?",
    df = "//hd-pcweb-v1.log.mgtv.com/dispatcher.do?",
    ff = function () {
        function t(t) {
            var e = this;
            e._animationFrame = null, e._recordInterval = null, e._recordCounter = 0, e._recordList = [], e.actionEvents = [], e.init(t), document.addEventListener("visibilitychange", function () {
                "hidden" == document.visibilityState ? e.stopRecordFps() : e.startRecordFps()
            })
        }
        var e = t.prototype;
        return e.init = function (t, e, i) {
            this.startRecordFps(), this.ispreload = i ? "1" : "0", this.config = t || this.config, this.iscdntest = this.config.iscdntest, this.cdnld = this.config.cdnld, this.method = this.config.method, this.stats = {}, this.byteStatsDetail = {}, this.p2pErrors = {}, this.levelDetails = {}, this.currentDownloadDef = 0, e && this.actionEvents.push(hf[e]), this.actionEvents.push(hf.init), this.userIP = "", this._hbIntervalTimeArr = [3e3, 2e3, 1e4, 3e4, 15e3, 12e4], this._hbIntervalTypeArr = ["0", "1", "3", "4", "5", "6"], this._sdkByteHBIntervalTime = 3e5, this.sdk_byte_report_idx = 0, this.p2p_error_report_idx = 0, this.timeoffset = 0, this._pstatus = -1;
            var n = "0";
            this.config.liveType && ("tv" === this.config.liveType ? n = "1" : "scene" === this.config.liveType && (n = "4"));
            var r = this.commonParams = {};
            r.suuid = Rt(this, "config.lobparam.suuid"), r.cookie = this.method.getCookie(), r.uuid = this.method.getUUID(), r.guid = this.method.getGUID(), r.ch = this.method.getCxid(), r.uvip = this.method.getUVIP(), r.url = document.location.href || "", r.ref = Rt(this, "config.lobparam.ref"), r.ap = "0", r.ext1 = "0", r.ext2 = "html5", r.bid = "1.1.1", r.time = "", r.pver = "imgotv-" + this.config.pcore + "-" + this.config.pver, r.cver = "h5." + this.config.cver, r.sessionid = "", r.act = "", r.idx = "", r.pt = n, r.cf = "", r.ct = "", r.et = "", r.td = "", r.vts = "", r.vid = "", r.plid = "", r.cid = "", r.bsid = "", r.pay = "", r.def = "", r.pstatus = "", r.istry = "", r.bdid = "", r.ht = "", r.bftype = "", r.abroad = this.config.abroad, r.src = this.config.isIntelMgtv ? "intelmgtv" : "", r.cpn = Rt(this, "config.lobparam.cpn", "1"), r.fpa = Rt(this, "config.lobparam.fpa", "0"), r.ctl = Rt(this, "config.lobparam.ctl", "0"), r.ftl = Rt(this, "config.lobparam.ftl", "0"), r.lob = Rt(this, "config.lobparam.lob", ""), r.nfid = this.method.getNFID(), r.wver = this.config.wver, r.cp = "", r.rdc = "", r.mp = "0", this.hbTimerHandler = this.onTimerHandler.bind(this), this.getCurHBType = this._getCurHBType.bind(this), this.sdkByteHBHandler = this.sendSDKByteHB.bind(this), this.resetData("replay" == e);
            var o = 1 == zi.get("mango-aiswitcher");
            this.setAISwitcher(o)
        }, e.setTimeOffset = function (t) {
            this.timeoffset = isNaN(parseFloat(t)) ? 0 : t
        }, e.setStats = function (t) {
            this.stats = t
        }, e.setDetail = function (t) {
            var e = parseFloat(t.delay);
            isNaN(e) || (t.delay -= this.timeoffset);
            var i = t.from;
            this.byteStatsDetail[i] = this.byteStatsDetail[i] || [], this.byteStatsDetail[i].push(t), this.iscdntest && this.sendSDKByteHB()
        }, e.setP2PError = function (t) {
            var e = t.from,
                i = void 0 === e ? 0 : e,
                n = t.code,
                r = void 0 === n ? 0 : n;
            this.p2pErrors[i] = this.p2pErrors[i] || {}, this.p2pErrors[i][r] ? this.p2pErrors[i][r]++ : this.p2pErrors[i][r] = 1
        }, e.setDrmInfo = function (t) {
            this.drmInfo = t
        }, e.setMp = function (t) {
            this.commonParams.mp = t
        }, e.setPCore = function (t) {
            this.config.pcore = t, this.commonParams.pver = "imgotv-" + this.config.pcore + "-" + this.config.pver
        }, e.resetData = function (t) {
            this._hbIdx = 0, this._dragIdx = 0, this._pauseIdx = 0, this._resumeIdx = 0, this._forwardIdx = 0, this._backwardIdx = 0, this._openFSIdx = 0, this._closeFSIdx = 0, this._changeFSIdx = 0, this._shareIdx = 0, this._noADIdx = 0, this._setVoiceIdx = 0, this._setDefIdx = 0, this._setScaleIdx = 0, this._setBrightIdx = 0, this._setContrastIdx = 0, this._setSkipIdx = 0, this._bufferEmptyTime = 0, this._bufferIdx = 0, this._adNumDict = {}, t || (this.drmInfo = {}), this.clearHBTimer()
        }, e.setAISwitcher = function (t) {
            for (var e, i = {}, n = u(this.commonParams.lob.split("&")); !(e = n()).done;) {
                var r = e.value.split("="),
                    o = r[0],
                    s = r[1];
                i[o] = s
            }
            i.aiswitcher = t ? "1" : "0";
            var a = [];
            for (var h in i) a.push(h + "=" + i[h]);
            this.commonParams.lob = a.join("&")
        }, e.setVideoInfo = function (t) {
            if (t.info && (this.commonParams.vid = t.info.video_id || "", this.commonParams.cid = t.info.root_id || "", this.commonParams.plid = t.info.collection_id || "", this.commonParams.bsid = t.info.series_id || "", this.commonParams.cf = t.info.clip_type || "", this.commonParams.pay = t.info.paymark || "", this.commonParams.vts = t.info.duration || ""), t.user && (this.commonParams.uuid = t.user.uuid, this.commonParams.uvip = "1" == t.user.isvip ? 1 : 0, this.commonParams.istry = 200 == t.user.purview ? "0" : "1", this.userIP = t.user.ip), t.drm) {
                var e = t.drm;
                t.info && (e.drmFlag = t.info.drmFlag), this.setDrmInfo(e)
            }
        }, e.convertPStatus = function (t) {
            var e = "";
            switch (t) {
                case -1:
                    e = "initialize";
                    break;
                case 0:
                    e = "ad";
                    break;
                case 1:
                    e = "play";
                    break;
                case 2:
                    e = "buffer";
                    break;
                case 3:
                    e = "pause";
                    break;
                case 4:
                    e = "seek";
                    break;
                case 5:
                    e = "stop"
            }
            return e
        }, e.convertVideoScale = function (t) {
            var e = 0;
            switch (t) {
                case "默认":
                    e = 0;
                    break;
                case "4:3":
                    e = 1;
                    break;
                case "16:9":
                    e = 2
            }
            return e
        }, e.updateSize = function (t) {
            this.viewSize = t
        }, e.playPoint = function (t, e, i) {
            void 0 === i && (i = "0");
            var n = this.viewSize ? this.viewSize.width + "*" + this.viewSize.height : "0*0",
                r = document.querySelector("[mg-stat-page]"),
                o = r ? r.getAttribute("mg-stat-page") : "",
                s = {
                    did: this.commonParams.cookie,
                    sessionid: this.method.getSessionId(),
                    ch: this.commonParams.ch,
                    uuid: this.commonParams.uuid,
                    uvip: this.commonParams.uvip,
                    ref: this.commonParams.ref,
                    url: this.commonParams.url,
                    lastp: "",
                    cntp: o,
                    ver: this.commonParams.wver,
                    pref: "",
                    abroad: "",
                    paid: this.commonParams.suuid,
                    time: this.method.getTime(),
                    termid: cf ? "5" : "2",
                    logtype: "udp",
                    pix: n,
                    event: "splay",
                    bid: "20.4.1",
                    sdkver: this.commonParams.pver,
                    didt: this.config.lobparam.didt || "",
                    lob: ""
                },
                a = {
                    vid: this.commonParams.vid,
                    isad: e ? "1" : "0",
                    sptype: i.toString(),
                    std: t
                };
            s.lob = this.method.params(a), un((this.config.isIntelMgtv ? df : lf) + this.method.params(s))
        }, e.actCMSBegin = function (t, e) {
            void 0 === t && (t = ""), void 0 === e && (e = ""), t && "" != t && (this.commonParams.vid = t), e && (this.commonParams.bdid = e);
            var i = {
                bid: uf
            };
            this.sendLog(af.ACT_CMSBEGIN, i)
        }, e.actCMSEnd = function (t, e) {
            e && this.setVideoInfo(e);
            var i = {
                bid: uf,
                ext4: t ? 1 : 0
            };
            this.sendLog(af.ACT_CMSEND, i)
        }, e.actRouteBegin = function (t) {
            this.commonParams.def = t;
            var e = {
                bid: uf
            };
            this.sendLog(af.ACT_ROUTEBEGIN, e)
        }, e.actRouteEnd = function (t, e) {
            if (void 0 === e && (e = null), e && this.setVideoInfo(e), !(this._setDefIdx > 0)) {
                var i = {
                    ext4: t ? 1 : 0,
                    bid: uf
                };
                this.sendLog(af.ACT_ROUTEEND, i)
            }
        }, e.actStreamBegin = function () {
            var t = {
                bid: uf
            };
            this.sendLog(af.ACT_STREAMBEGIN, t), this._bufferEmptyTime = (new Date).getTime()
        }, e.actAdInit = function () {
            var t = {
                bid: uf
            };
            this.sendLog(af.ACT_ADINIT, t)
        }, e.actAdFrontBegin = function (t, e, i, n) {
            void 0 === n && (n = 0);
            var r = {
                bid: uf,
                ext4: t,
                ext5: e,
                ext6: i,
                ext7: n
            };
            this._adNumDict[e] = n, this.sendLog(af.ACT_AD_FRONT_BEGIN, r)
        }, e.actAdFrontEnd = function (t, e, i, n) {
            void 0 === n && (n = 0);
            var r = {
                bid: uf,
                ext4: t,
                ext5: e,
                ext6: i,
                ext7: n
            };
            this._adNumDict[e] = n, this.sendLog(af.ACT_AD_FRONT_END, r)
        }, e.updateADProgress = function (t) {
            switch (t.progress) {
                case 1:
                    t.type > 0 && t.type <= 3 && (t.ids && (t.aid = t.ids.join("_"), t.time = t.duration, t.adNum = t.count), this.actADBegin(t.aid, t.type - 1, t.time, t.adNum ? t.adNum : 0));
                    break;
                case 2:
                    break;
                case 3:
                    this._adNumDict[t.type - 1] && (t.ids && (t.aid = t.ids.join("_"), t.time = t.duration, t.adNum = t.count), this.actADEnd(t.aid, t.type - 1, t.time, t.adNum))
            }
        }, e.actADBegin = function (t, e, i, n) {
            void 0 === n && (n = 0), this._pstatus = 0, this._adNumDict[e] ? this._adNumDict[e]++ : this._adNumDict[e] = 1;
            var r = {
                bid: uf,
                ext4: t,
                ext5: e,
                ext6: i,
                ext7: n
            };
            this.sendLog(af.ACT_ADBEGIN, r)
        }, e.actADEnd = function (t, e, i, n) {
            var r = {
                bid: uf,
                ext4: t,
                ext5: e,
                ext6: i,
                ext7: n
            };
            this.sendLog(af.ACT_ADEND, r)
        }, e.actPlayStart = function (t, e, i) {
            this._pstatus = 1, this.playStartTime = (new Date).toLocaleString(), this.actionEvents.length > 100 && this.actionEvents.splice(0, this.actionEvents.length - 100);
            var n = this.config.usePreload ? "1" : "0",
                r = this.method.getTime(),
                o = sf(r + "mgbigdata"),
                s = {
                    bid: cf ? "4.0.3" : this.config.isLive ? "1.1.1.1" : "1.1.1.0",
                    isad: this._adNumDict[0] ? 1 : 0,
                    cdnip: e || "",
                    didt: this.config.lobparam.didt || "",
                    fid: "",
                    time: r,
                    sbs: 0,
                    ap: t,
                    isdrm: this.drmInfo.drmFlag || "0",
                    lob: this.commonParams.lob + "&events=" + this.actionEvents.join("") + "&state=" + i + "&preload=" + this.ispreload + "&usepreload=" + n + "&lang=" + this.lang + "&check=" + o
                };
            this.sendLog(af.ACT_PLAY, s), this.startHB(), this.startSDKByteHB()
        }, e.setLang = function (t) {
            null == this.lang && (this.lang = t)
        }, e.startHB = function () {
            var t = this.getCurDelay();
            this._hbTimer || clearTimeout(this._hbTimer), this._hbTimer = setTimeout(this.hbTimerHandler, t), this._hbStartTime = (new Date).getTime(), this._hbLeftTime = t
        }, e.startSDKByteHB = function () {
            this.config.isLive || (this._sdkByteHBTimer && clearInterval(this._sdkByteHBTimer), this._sdkByteHBTimer = setInterval(this.sdkByteHBHandler, this._sdkByteHBIntervalTime))
        }, e.getCurDelay = function () {
            if (this.config.isLive) return 6e4;
            var t = this._hbIntervalTimeArr.length;
            return this._hbIntervalTimeIndex = this._hbIdx < t ? this._hbIdx : t - 1, this._hbIntervalTimeArr[this._hbIntervalTimeIndex]
        }, e.pauseHB = function () {
            clearTimeout(this._hbTimer), this._hbLeftTime = this._hbLeftTime - ((new Date).getTime() - this._hbStartTime)
        }, e.resumeHB = function () {
            this._hbTimer = setTimeout(this.hbTimerHandler, this._hbLeftTime), this._hbStartTime = (new Date).getTime()
        }, e.stopHB = function () {
            this.sendHB(), this.clearHBTimer()
        }, e.stopSDKByteHB = function () {
            this.config.isLive || this._sdkByteHBTimer && (this.sendSDKByteHB(), clearInterval(this._sdkByteHBTimer), this._sdkByteHBTimer = null, this.sdk_byte_report_idx = 0, this.p2p_error_report_idx = 0)
        }, e.clearHBTimer = function () {
            this._hbLeftTime = 0, this._hbStartTime = 0, clearTimeout(this._hbTimer), this._hbTimer = 0
        }, e.onTimerHandler = function () {
            this.sendHB(), this._hbStartTime = (new Date).getTime();
            var t = this.getCurDelay();
            this._hbLeftTime = t, this._hbTimer || clearTimeout(this._hbTimer), this._hbTimer = setTimeout(this.hbTimerHandler, t)
        }, e.danmuStatusChange = function (t) {
            t.hasOwnProperty("switcher") && (this._danmuSwitcher = t.switcher ? 1 : 0), t.hasOwnProperty("render") && (this._danmuSubmit = t.render ? 1 : 0)
        }, e.sendHB = function () {
            var t = this.stats,
                e = ~~t.p2p || 0,
                i = ~~t.total || 0;
            e > 0 && e / i < .1 && (e += .1 * i);
            var n = {
                ht: this.getCurHBType(),
                idx: this._hbIdx,
                bid: cf ? "1.1.26" : this.config.isLive ? "1.1.1.1" : "1.1.25",
                pflow: e,
                tflow: i,
                switcher: this.config.isIntelMgtv ? "0" : this._danmuSwitcher,
                submit: this.config.isIntelMgtv ? "0" : this._danmuSubmit,
                didt: this.config.lobparam.didt || "",
                fid: "",
                fps: 0
            };
            if (this._recordList.length > 25) {
                var r = Math.max.apply(Math, this._recordList),
                    o = Math.min.apply(Math, this._recordList),
                    s = (this._recordList.reduce(function (t, e) {
                        return void 0 === t && (t = 0), t + e
                    }) / this._recordList.length).toFixed(2),
                    a = 0;
                this._recordList.forEach(function (t) {
                    t < 40 && a++
                });
                var h = (a / this._recordList.length).toFixed(3),
                    c = this.commonParams.lob;
                c += "&max=" + r + "&min=" + o + "&avg=" + s + "&cnt=" + h + "&aiswitcher=0", n.lob = c
            }
            this._recordList = [];
            var u = cf ? "//padweb-v0.log.mgtv.com/hb.php?" : null;
            this.sendLog(this.config.isLive ? af.ACT_LIVE_HEARTBEAT : af.ACT_HEARTBEAT, n, u), this._hbIdx++
        }, e.sendSDKByteHB = function () {
            if (!this.config.isLive) {
                var t = this.stats,
                    e = this.getByteStatsDetail(),
                    i = this.getP2PErrors(),
                    n = ~~t.p2p || 0,
                    r = ~~t.total || 0,
                    o = cf ? "1121" : "1030",
                    s = cf ? "5" : "2";
                n > 0 && n / r < .1 && (n += .1 * r);
                var a = {
                    did: Rt(this, "config.lobparam.did", ""),
                    suuid: this.commonParams.suuid,
                    time: wt(new Date, "yyyyMMddhhmmss"),
                    aver: this.commonParams.pver,
                    sdkver: "1.4.1",
                    uuid: kt("uuid"),
                    termid: s,
                    pno: o,
                    vid: this.commonParams.vid,
                    def: this.currentDownloadDef,
                    ip: this.userIP
                };
                if (g(e).length > 0) {
                    var h = m({}, a, {
                        logtype: "hb",
                        pver: this.iscdntest ? "0.0.6" : "0.0.5",
                        bid: "2.7.1",
                        idx: this.sdk_byte_report_idx,
                        tflow: r,
                        cflow: r - n,
                        pflow: n,
                        eflow: 0,
                        encodeinfo: this.getEncodeInfo() || "",
                        filew: this.getLevelTagAttr("EXT-MGTV-VIDEO-WIDTH") || "",
                        fileh: this.getLevelTagAttr("EXT-MGTV-VIDEO-HEIGHT") || "",
                        sftc: "",
                        dsize: this.dsize,
                        rmode: this.iscdntest ? 2 : 1,
                        detail: encodeURIComponent(JSON.stringify(e))
                    });
                    this.sendLog2(h), this.sdk_byte_report_idx++
                }
                if (i) {
                    var c = m({}, a, {
                        logtype: "pcdnerr",
                        pver: "0.0.1",
                        bid: "2.7.2",
                        idx: this.p2p_error_report_idx,
                        detail: encodeURIComponent(JSON.stringify(i))
                    });
                    this.sendLog2(c), this.p2p_error_report_idx++
                }
            }
        }, e.getByteStatsDetail = function () {
            var t = this,
                e = F(this.byteStatsDetail);
            return this.byteStatsDetail = {}, this.dsize = 0, 0 === g(e).length ? {} : g(e).reduce(function (i, n) {
                return t.dsize += e[n].length, i[n] = e[n].map(function (e) {
                    var i, n;
                    return i = t.getLevelTagAttr("INF", t.currentDownloadDef, e.seq) || "", 1, n = t.cdnld, e.delay + "|" + e.len + "|" + e.eff + "|" + e.err + "|" + e.seq + "|" + i + "|||1|" + n
                }).join(","), i
            }, {})
        }, e.getP2PErrors = function () {
            var t = F(this.p2pErrors),
                e = g(t);
            return this.p2pErrors = {}, 0 == e.length ? null : (e.forEach(function (e) {
                var i = g(t[e]),
                    n = [];
                i.forEach(function (i) {
                    n.push(i + "|" + t[e][i])
                }), t[e] = n.join(",")
            }), t)
        }, e._getCurHBType = function () {
            return 5 == this._pstatus ? "2" : this.config.isLive ? "4" : this._hbIntervalTypeArr[this._hbIntervalTimeIndex]
        }, e.updatePlayTime = function (t) {
            this.commonParams.ct = Math.round(t)
        }, e.setDef = function (t) {
            this.commonParams.def = t, this.currentDownloadDef = t
        }, e.actPlayPause = function () {
            this._pstatus = 3, this.pauseHB();
            var t = {
                idx: this._pauseIdx
            };
            this.sendLog(af.ACT_PAUSE, t), this._pauseIdx++
        }, e.actPlayResume = function () {
            this._pstatus = 1, this.resumeHB();
            var t = {
                idx: this._resumeIdx
            };
            this.sendLog(af.ACT_RESUME, t), this._resumeIdx++
        }, e.actPlayForward = function (t) {
            this._pstatus = 4, this._bufferEmptyTime = (new Date).getTime();
            var e = {
                et: t,
                idx: this._forwardIdx
            };
            this.sendLog(af.ACT_FORWARD, e), this._pstatus = 1, this._forwardIdx++
        }, e.actPlayBackward = function (t) {
            this._pstatus = 4, this._bufferEmptyTime = (new Date).getTime();
            var e = {
                et: t,
                idx: this._backwardIdx
            };
            this.sendLog(af.ACT_BACKWARD, e), this._pstatus = 1, this._backwardIdx++
        }, e.actDrag = function (t, e, i) {
            this._pstatus = 4, this._bufferEmptyTime = (new Date).getTime();
            var n = {
                et: t,
                idx: this._dragIdx,
                ext4: e ? 1 : 0,
                ext5: i
            };
            this.sendLog(af.ACT_DRAG, n), this._dragIdx++, this._pstatus = 1
        }, e.actPlayBufferEmpty = function () {
            this._pstatus = 2, this._bufferEmptyTime > 0 || (this._bufferEmptyTime = (new Date).getTime())
        }, e.actPlayBufferFull = function () {
            this._pstatus = 1
        }, e.actBuffer = function (t) {
            if (this._bufferEmptyTime > 0) {
                var e = (new Date).getTime() - this._bufferEmptyTime;
                this.commonParams.td = e || "";
                var i = {
                        td: e,
                        bftype: t,
                        bid: cf ? "1.1.26" : "1.1.25",
                        idx: this._bufferIdx
                    },
                    n = cf ? "//padweb-v0.log.mgtv.com/buffer.php?" : null;
                this.sendLog(af.ACT_BUFFER, i, n), this._bufferIdx++, this._bufferEmptyTime = 0
            }
        }, e.actPlayStop = function () {
            this._pstatus = 5, this.stopHB(), this.stopSDKByteHB()
        }, e.actReplay = function () {
            this.resetData()
        }, e.actNext = function () {
            this.sendLog(af.ACT_NEXT)
        }, e.actOpenFullScreen = function () {
            var t = {
                idx: this._openFSIdx
            };
            this.sendLog(af.ACT_OPENFSCREEN, t), this._openFSIdx++
        }, e.actCloseFullScreen = function () {
            var t = {
                idx: this._closeFSIdx
            };
            this.sendLog(af.ACT_CLOSEFSCREEN, t), this._closeFSIdx++
        }, e.actChangeFullScreen = function (t) {
            var e = {
                ext4: this.method.convertChangeFSScale(t),
                idx: this._changeFSIdx
            };
            this.sendLog(af.ACT_CHANGEFSCREEN, e), this._changeFSIdx++
        }, e.actShare = function (t, e) {
            var i = {
                ext4: t,
                ext5: e,
                idx: this._shareIdx
            };
            this.sendLog(af.ACT_SHARE, i), this._shareIdx++
        }, e.actNoAD = function () {
            var t = {
                idx: this._noADIdx
            };
            this.sendLog(af.ACT_TOVIP, t), this._noADIdx++
        }, e.actPopClick = function (t) {
            var e = {
                ext4: t
            };
            this.sendLog(af.ACT_POPCLICK, e)
        }, e.actPopClose = function (t) {
            var e = {
                ext4: t
            };
            this.sendLog(af.ACT_POPCLOSE, e)
        }, e.actSetVoice = function (t) {
            var e = {
                ext4: t,
                idx: this._setVoiceIdx
            };
            this.sendLog("voice", e), this._setVoiceIdx++
        }, e.actSetDef = function (t) {
            this._bufferEmptyTime = (new Date).getTime();
            var e = t,
                i = {
                    idx: this._setDefIdx,
                    ext4: e
                };
            this.sendLog("definition", i), this._setDefIdx++, this.commonParams.def = e
        }, e.setCurrentDownloadDef = function (t) {
            this.currentDownloadDef = t
        }, e.setSourceData = function (t) {
            this.videoStreams = t.stream.slice(0).reverse() || []
        }, e.actSetLevelDetails = function (t, e) {
            var i = this.getDefFromStreams(t);
            void 0 !== i && (this.levelDetails[i] = e)
        }, e.getDefFromStreams = function (t) {
            if (this.videoStreams && this.videoStreams[t]) return this.videoStreams[t].def
        }, e.getLevelTagAttr = function (t, e, i) {
            void 0 === i && (i = 0);
            var n = void 0 === e ? this.currentDownloadDef : e,
                r = this.levelDetails[n];
            if (void 0 === r) return "";
            var o = r.fragments;
            if (o && 0 !== o.length) {
                var s = o[i].tagList;
                if (s && 0 !== s.length) {
                    var a = s.find(function (e) {
                        return e[0] === t
                    });
                    if (a) return a[1]
                }
            }
        }, e.getEncodeInfo = function () {
            for (var t = ["EXT-MGTV-X-VERSION", "EXT-MGTV-X-VCODEC", "EXT-MGTV-X-ACODEC", "EXT-MGTV-X-PARM", "EXT-MGTV-X-FORMAT"], e = "", i = 0; i < t.length; i++) e += this.getLevelTagAttr(t[i]) || "", e += "|";
            return e.slice(0, -1)
        }, e.actSetScale = function (t) {
            var e = {
                ext4: t,
                idx: this._setScaleIdx
            };
            this.sendLog("scale", e), this._setScaleIdx++
        }, e.actSetBrightness = function (t) {
            var e = {
                ext4: t,
                idx: this._setBrightIdx
            };
            this.sendLog("brightness", e), this._setBrightIdx++
        }, e.actSetContrast = function (t) {
            var e = {
                ext4: t,
                idx: this._setContrastIdx
            };
            this.sendLog("contrast", e), this._setContrastIdx++
        }, e.actSetSkip = function (t) {
            var e = {
                ext4: t,
                idx: this._setSkipIdx
            };
            this.sendLog("skip", e), this._setSkipIdx++
        }, e.actErrorCode = function (t, e, i, n, r) {
            var o = {
                c: t,
                z: n,
                api: e,
                pcode: i,
                bid: "1.1.91",
                msg: r
            };
            this.sendLog("er", o)
        }, e.actExitCode = function (t) {
            var e = {
                code: t,
                bid: uf
            };
            this.sendLog("exit", e)
        }, e.actAutoPlayFail = function () {
            var t = {
                bid: uf
            };
            this.sendLog("autoplayfail", t)
        }, e.actDrm = function (t, e, i) {
            if (!(this.config.liveType || this.drmInfo && "0" == this.drmInfo.drmFlag) && this.drmInfo && this.drmInfo.drmFirm && this.drmInfo.drmType) {
                var n = {
                    bid: "1.2.11",
                    retry: "0",
                    ec: t,
                    em: e,
                    lic: i,
                    firm: this.drmInfo.drmFirm || "",
                    drmType: this.drmInfo.drmType || "",
                    browser: this.method.getBrowser()
                };
                this.sendLog("drm", n)
            }
        }, e.actManualClickPlay = function () {
            var t = {
                bid: uf
            };
            this.sendLog("clickplay", t)
        }, e.actSwitchCamera = function () {
            var t = {
                prelid: this.prelid || "",
                preliveid: this.preliveid || "",
                bid: "1.1.1.1"
            };
            this.sendLog("switch", t)
        }, e.sendLog = function (t, e, i) {
            void 0 === e && (e = {}), this.commonParams.act = t, this.commonParams.time = e.time || this.method.getTime(), this.commonParams.sessionid = this.method.getSessionId(), this.commonParams.pstatus = this.convertPStatus(this._pstatus), this.config.isLive ? this.updateLiveVideoInfo() : this.updateVideoInfo();
            var n = m({}, this.commonParams, e),
                r = i || (this.config.isIntelMgtv ? df : lf);
            hf[t] && this.actionEvents.push(hf[t]), un(r + this.method.params(n))
        }, e.sendLog2 = function (t, e) {
            void 0 === t && (t = {});
            var i = m({}, t);
            un((e || (this.config.isIntelMgtv ? df : lf)) + this.method.params(i))
        }, e.updateLiveVideoInfo = function () {
            if (this.config.getLiveVideoInfo) {
                var t = this.config.getLiveVideoInfo();
                this.prelid = this.commonParams.lid || "", this.preliveid = this.commonParams.liveid || "", this.commonParams.pay = t.pay, this.commonParams.lid = t.sid, this.commonParams.activeid = t.activity_id, this.commonParams.istry = 0, this.commonParams.uvip = "1" == t.uvip ? 1 : 0, this.commonParams.ln = t.activityName, this.commonParams.liveid = t.roomId
            }
        }, e.updateVideoInfo = function () {
            var t = this.config.getVideoInfo();
            this.commonParams.vid = t.vid, this.commonParams.plid = t.cid, this.commonParams.cid = t.rid, this.commonParams.bsid = t.sid, this.commonParams.bdid = t.bdid
        }, e.updateLiveInfo = function (t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) {
                    t[e];
                    this.commonParams[e] = t[e]
                }
        }, e.startRecordFps = function () {
            var t = this;
            this._recordList = [], window.cancelAnimationFrame(this._animationFrame), this._animationFrame = window.requestAnimationFrame(this.recordFps.bind(this)), clearInterval(this._recordInterval), this._recordInterval = setInterval(function () {
                t._recordList.push(t._recordCounter), t._recordCounter = 0
            }, 1e3)
        }, e.stopRecordFps = function () {
            window.cancelAnimationFrame(this._animationFrame), clearInterval(this._recordInterval)
        }, e.recordFps = function () {
            this._recordCounter++, this._animationFrame = window.requestAnimationFrame(this.recordFps.bind(this))
        }, t
    }(),
    pf = Kd.LogParam,
    mf = /iPad/i.test(navigator.userAgent),
    vf = function () {
        function t(t) {
            this.config = t || this.config, this.method = this.config.method, this.commonParams = {}, this.commonParams[pf.PARAM_SUUID] = Rt(this, "config.lobparam.suuid"), this.commonParams[pf.PARAM_COOKIE] = this.method.getCookie(), this.commonParams[pf.PARAM_SESSIONID] = "", this.commonParams[pf.PARAM_UUID] = this.method.getUUID(), this.commonParams[pf.PARAM_GUID] = this.method.getGUID(), this.commonParams[pf.PARAM_CH] = this.method.getCxid(), this.commonParams[pf.PARAM_UVIP] = this.method.getUVIP(), this.commonParams[pf.PARAM_URL] = document.location.href || "", this.commonParams[pf.PARAM_REF] = Rt(this, "config.lobparam.ref"), this.commonParams[pf.PARAM_NFID] = this.method.getNFID(), this.commonParams[pf.PARAM_PIX] = this.method.getScreenPIX(), this.commonParams[pf.PARAM_WVER] = this.config.wver, this.commonParams[pf.PARAM_VID] = "", this.commonParams[pf.PARAM_PLID] = "", this.commonParams[pf.PARAM_CID] = "", this.commonParams[pf.PARAM_CF] = "", this.commonParams[pf.PARAM_RDC] = "", this.commonParams[pf.PARAM_ABROAD] = this.config.abroad, this.commonParams[pf.PARAM_SRC] = this.config.isIntelMgtv ? "intelmgtv" : ""
        }
        var e = t.prototype;
        return e.getUNID = function (t) {
            return t.playlist_id ? "0_" + t.playlist_id + "_" + (t.video_id || "") : (t.collection_id || "") + "_" + (t.video_id || "")
        }, e.setVideoInfo = function (t) {
            t.info && (this.commonParams[pf.PARAM_VID] = t.info.video_id || "", this.commonParams[pf.PARAM_CID] = t.info.root_id || "", this.commonParams[pf.PARAM_PLID] = t.info.collection_id || "", this.commonParams[pf.PARAM_BSID] = t.info.series_id || "", this.commonParams[pf.PARAM_CF] = t.info.clip_type || ""), t.user && (this.commonParams[pf.PARAM_UUID] = t.user.uuid, this.commonParams[pf.PARAM_UVIP] = t.user.isvip, this.commonParams[pf.PARAM_ISTRY] = 200 == t.user.purview ? "0" : "1"), this.data_unid = this.getUNID(t.info)
        }, e.showVipDialog = function (t) {
            var e = this.method.getUVIP(),
                i = 0;
            t.info && "live" == t.info.paymark && (i = "10"), t.info && "1" == t.info.paymark && (i = "1"), t.info && "2" == t.info.paymark && (i = "5"), t.info && "3" == t.info.paymark && (i = "3");
            var n = {
                bid: mf ? "4.1.11" : "1.1.11",
                uvip: e,
                ext1: 3,
                ext2: "",
                ext3: i,
                ch: ""
            };
            this.sendLog("tovippv", n, "//vip.log.mgtv.com/audit_pc.html?")
        }, e.showHdDialog = function (t) {
            var e = this.method.getUVIP(),
                i = {
                    bid: mf ? "4.1.11" : "1.1.11",
                    dname: "pc_dialogpv_player_blue",
                    ptype: 3,
                    uvip: e,
                    unid: this.data_unid,
                    dmtype: ""
                };
            this.sendLog("dialogpv", i, "//vip.log.mgtv.com/audit_vip_bhv.html?")
        }, e.sendLog = function (t, e, i) {
            void 0 === e && (e = null), this.commonParams[pf.PARAM_ACT] = t, this.commonParams[pf.PARAM_TIME] = this.method.getTime(), this.commonParams[pf.PARAM_SESSIONID] = this.method.getSessionId();
            var n = m({}, e, this.commonParams);
            un(i + this.method.params(n))
        }, t
    }(),
    gf = "//pcweb-v1.log.mgtv.com/dispatcher.do?",
    yf = (/iPad/i.test(navigator.userAgent), ["iPad", "Mac", "Windows", "Linux", "X11"].find(function (t) {
        return new RegExp(t).test(navigator.userAgent)
    })),
    _f = "//hd-pcweb-v1.log.mgtv.com/dispatcher.do?",
    bf = P2Hls.Events,
    wf = function () {
        function t(t) {
            this.init(t), this.pvreported = !1, this.endtype = 0, this.streamType = "", this.streamFileFormat = "", this.box = "native", this.videoFormat = "h264"
        }
        var e = t.prototype;
        return e.init = function (t) {
            this.config = t || this.config, this.commonParams = {}, this.commonParams.vtp = Rt(this, "config.lobparam.cpn", "1"), this.commonParams.vid = this.config.vid, this.commonParams.url = window.location.href || "", this.commonParams.time = "", this.commonParams.sver = yf, this.commonParams.retry = "0", this.commonParams.reschg = "0", this.commonParams.proxy = "", this.commonParams.prottp = "", this.commonParams.psuuid = Rt(this, "config.lobparam.suuid", ""), this.commonParams.plat = "pcweb", this.commonParams.p2ps = this.config.p2p ? 1 : 0, this.commonParams.browser = dt.name + dt.version.string, this.commonParams.aver = window.VERSION, this.commonParams.pver = "imgotv-" + this.config.pcore + "-" + this.config.pver, this.commonParams.did = kt("mba_deviceid") || window.STK.$.stkuuid() || "", this.p2p_peer_connect_counter = 0, this.p2p_peer_exist_counter = 0, this.reportPload()
        }, e.updateTime = function () {
            this.commonParams.time = this.config.method.getTime()
        }, e.setVideoInfo = function (t) {
            if (t.info)
                if (this.isDrm = "1" == t.info.drmFlag, this.isDrm) switch (~~t.drm.drmType) {
                    case 1:
                        this.drmType = 2;
                        break;
                    case 2:
                        this.drmType = 1;
                        break;
                    case 3:
                        this.drmType = 3;
                        break;
                    default:
                        this.drmType = 0
                } else this.drmType = 0
        }, e.setDispatcherData = function (t) {
            var e = {
                    m3u: 1,
                    m3u8: 1,
                    mp4: 2,
                    flv: 4,
                    mpd: 5
                },
                i = t.data,
                n = g(e).find(function (t) {
                    var e = Lt(i);
                    return e && e.pathname && e.pathname.indexOf("." + t) > -1
                }),
                r = Lt(i).protocol;
            r = r.endsWith(":") ? r.slice(0, -1) : r;
            var o = n ? e[n] : "";
            this.streamType = "" + r + o
        }, e.setSourceData = function (t) {
            var e = t.stream;
            if (e && 0 != e.length) {
                var i = e.find(function (t) {
                    return t.fileformat
                });
                this.streamFileFormat = i ? i.fileformat : this.streamFileFormat;
                var n = e.find(function (t) {
                    return t.videoFormat
                });
                this.videoFormat = n ? n.videoFormat : this.videoFormat
            }
        }, e.setBox = function (t) {
            this.box = t
        }, e.setVideoUrl = function (t) {
            this.videoUrl = this.videoUrl || t.h
        }, e.clarityChanged = function () {
            this.commonParams.reschg = 0
        }, e.retry = function () {
            this.commonParams.retry++
        }, e.setProxy = function () {
            var t = 0;
            t += this.config.p2p ? 1 : 0, t += this.isDrm ? 3 : 0, this.commonParams.proxy = t
        }, e.getCommonParams = function () {
            this.updateTime(), this.setProxy(), this.setProttp()
        }, e.setProttp = function () {
            (this.streamType || this.streamFileFormat) && (this.commonParams.prottp = this.streamType + "_" + this.streamFileFormat)
        }, e.setP2P = function (t) {
            var e = t.event,
                i = t.peer;
            switch (e) {
                case bf.PeerConnect:
                    this.setPeerConnect(i);
                    break;
                case bf.PeerClose:
                    this.setPeerClose(i)
            }
        }, e.setPeerConnect = function (t) {
            this.p2p_peer_connect_counter++, this.p2p_peer_exist_counter++
        }, e.setPeerClose = function (t) {
            this.p2p_peer_exist_counter--
        }, e.reportP2P = function () {
            this.sendLog(this.config.isIntelMgtv ? _f : gf, {
                act: "p2p",
                bid: "20.8.7",
                pevt: "",
                if: "",
                ct: "",
                lt: "",
                tp: "",
                np: "",
                nat: "",
                nt: "",
                ip: "",
                pt: "",
                ext: ""
            })
        }, e.setEndType = function (t) {
            this.endtype = t
        }, e.reportPend = function () {
            this.pvreported = !1;
            var t = {
                act: "pend",
                bid: "20.8.4",
                endtp: (this.vvtime ? "20" : "10") + "_" + this.endtype
            };
            this.sendLog(this.config.isIntelMgtv ? _f : gf, t)
        }, e.reportPerr = function (t, e) {
            var i;
            switch (e) {
                case 0:
                case 1:
                    i = 101;
                    break;
                case 2:
                case 3:
                    i = 102;
                    break;
                case 4:
                    i = 202;
                    break;
                case 5:
                    i = 203;
                    break;
                case 6:
                    i = 201
            }
            var n = {
                act: "perr",
                bid: "20.8.3",
                et: i,
                sc: (t + "").slice(0, 3),
                exr: (t + "").slice(3)
            };
            this.sendLog(this.config.isIntelMgtv ? _f : gf, n)
        }, e.reportPload = function () {
            this.sendLog(this.config.isIntelMgtv ? _f : gf, {
                act: "pload",
                bid: "20.8.5"
            })
        }, e.reportPpv = function () {
            if (!this.pvreported) {
                this.setPvTime();
                var t = this.config.p2p ? "flash" == this.config.box ? 1 : 2 : 0,
                    e = 0;
                switch (this.box) {
                    case "native":
                        e = 1;
                        break;
                    case "hls":
                        e = 2;
                        break;
                    case "dash":
                        e = 3;
                        break;
                    case "flash":
                        e = 4;
                        break;
                    case "mp4":
                        e = 5;
                        break;
                    default:
                        e = 0
                }
                var i = {
                    act: "ppv",
                    bid: "20.8.1",
                    cdn: Lt(this.videoUrl).hostname,
                    kert: e,
                    p2pt: t,
                    drmt: this.drmType,
                    cdtp: this.videoFormat
                };
                this.sendLog(this.config.isIntelMgtv ? _f : gf, i), this.pvreported = !0
            }
        }, e.reportPskip = function () {
            this.sendLog(this.config.isIntelMgtv ? _f : gf, {
                act: "skip",
                bid: "20.8.6",
                head: "",
                buf: ""
            })
        }, e.setPvTime = function () {
            this.pvtime = this.pvtime || this.config.method.getTime()
        }, e.setVvTime = function () {
            this.vvtime = this.vvtime || this.config.method.getTime()
        }, e.setLang = function (t) {
            null == this.lang && (this.lang = t)
        }, e.reportPvv = function () {
            this.setVvTime();
            var t = {
                act: "pvv",
                bid: "20.8.2",
                ltst: Math.max(this.vvtime - this.pvtime, 0),
                dectp: this.box,
                cdtp: this.videoFormat
            };
            t.lob = this.config.method.params({
                lang: this.lang
            }), this.sendLog(this.config.isIntelMgtv ? _f : gf, t)
        }, e.sendLog = function (t, e) {
            this.getCommonParams();
            var i = m({}, this.commonParams, e);
            un(t + this.config.method.params(i))
        }, t
    }(),
    kf = function () {
        function t(t) {
            this.useFlash = t, this.points = {
                pv: 0,
                videoInfo: 0,
                adRequest: 0,
                adComplete: 0,
                step1Request: 0,
                step1: 0,
                step2: 0,
                step3: 0,
                buffer: 0
            }
        }
        var e = t.prototype;
        return e.recordPoint = function (t, e) {
            this.points[t] = void 0 === e ? Date.now() : e
        }, Object.defineProperty(e, "haveAd", {
            get: function () {
                return this.points.pv && this.points.adRequest > this.points.pv
            },
            enumerable: !0,
            configurable: !0
        }), e.toString = function () {
            var t, e, i, n = this.points;
            for (var r in n) n[r] > 0 && n[r] < this.points.pv && (n[r] = this.points.pv);
            this.haveAd ? (t = Math.max(this.points.adComplete, this.points.buffer) - this.points.pv, i = this.points.adComplete - this.points.adRequest, e = this.points.adRequest - this.points.videoInfo) : (t = this.points.buffer - this.points.pv, i = 0, e = Math.max(this.points.adComplete - this.points.videoInfo, 0));
            var o = [t, this.points.videoInfo - this.points.pv, 0, e, this.points.step1 - this.points.step1Request, this.points.step2 - this.points.step1, this.points.step3 > 0 ? this.points.step3 - this.points.step2 : 0, i, this.points.step3 > 0 && this.points.buffer > 0 ? this.points.buffer - this.points.step3 : 0];
            return (o = o.map(this.formatData)).join(",")
        }, e.formatData = function (t) {
            return t > 1e6 && (t = 0), Math.max(0, t)
        }, e.toErrorString = function () {
            var t, e, i;
            return this.haveAd ? (i = Math.max(this.points.adComplete - this.points.adRequest, 0), e = Math.max(this.points.adRequest - this.points.videoInfo, 0)) : (i = 0, e = Math.max(this.points.adComplete - this.points.videoInfo, 0)), t = Math.max(this.points.videoInfo, this.points.adRequest, this.points.step1, this.points.step2, this.points.step3, this.points.buffer, this.points.adComplete) - this.points.pv, [t = Math.max(t, 0), Math.max(this.points.videoInfo - this.points.pv, 0), 0, e, this.points.step1 > 0 && this.points.step1Request > 0 ? this.points.step1 - this.points.step1Request : 0, this.points.step1 > 0 && this.points.step2 > 0 ? this.points.step2 - this.points.step1 : 0, this.points.step2 > 0 && this.points.step3 > 0 ? this.points.step3 - this.points.step2 : 0, i, this.points.step3 > 0 && this.points.buffer > 0 ? this.points.buffer - this.points.step3 : 0].join(",")
        }, Object.defineProperty(e, "finish", {
            get: function () {
                return this.haveAd ? this.useFlash ? Boolean(this.points.adComplete > 0) && Boolean(this.points.buffer > this.points.adComplete) : this.points.adComplete > 0 && this.points.buffer > 0 : this.points.pv && this.points.buffer > 0
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(),
    Ef = /iPad/i.test(navigator.userAgent),
    Sf = function () {
        function t(t) {
            this.params = {
                bid: "2.7.3",
                logtype: "p2phb",
                pver: "0.0.1",
                suuid: "",
                idx: 0,
                did: "",
                time: "",
                aver: "",
                sdkver: "",
                uuid: "",
                termid: Ef ? "5" : "2",
                pno: Ef ? "1121" : "1030",
                vid: "",
                def: "",
                ip: "",
                nattype: 0,
                detail: ""
            }, this.runInterval = void 0, this.peers = [], this.startTime = -1, this.connectTime = -1, this.p2pDataTime = -1, this.config = t;
            var e = t.pver,
                i = t.vid;
            this.params.vid = i, this.params.sdkver = e;
            t.getVideoInfo()
        }
        var e = t.prototype;
        return e.start = function () {
            var t = this;
            this.clear(), this.startTime = (new Date).getTime(), this.runInterval = setInterval(function () {
                t.peers.length > 0 && (t.sendReport(), t.peers = [], t.params.idx++)
            }, 3e5)
        }, e.stop = function () {
            clearInterval(this.runInterval)
        }, e.end = function () {
            this.peers.length > 0 && this.sendReport(), this.clear()
        }, e.clear = function () {
            clearInterval(this.runInterval), this.params.idx = 0, this.peers = [], this.startTime = -1, this.connectTime = -1, this.p2pDataTime = -1
        }, e.getSuuid = function () {
            var t, e;
            return (null === (t = this.config) || void 0 === t ? void 0 : null === (e = t.lobparam) || void 0 === e ? void 0 : e.suuid) || ""
        }, e.updateData = function (t) {
            m(this.params, t)
        }, e.updatePeer = function (t) {
            -1 === this.connectTime && (this.connectTime = (new Date).getTime()), this.peers.push(t)
        }, e.sendReport = function () {
            var t = this.config.getVideoInfo(),
                e = this.connectTime - this.startTime,
                i = this.p2pDataTime - this.startTime,
                n = m({}, this.params, {
                    time: this.getTime(),
                    suuid: this.getSuuid(),
                    uuid: this.config.method.getUUID(),
                    vid: t.vid,
                    fp2pt: e > 0 ? e : 0,
                    fdatat: i > 0 ? i : 0,
                    detail: this.peers.map(function (t) {
                        return m({
                            nattype: 0
                        }, t)
                    })
                });
            fetch("https://pcweb-v1.log.mgtv.com/dispatcher.do", {
                method: "post",
                body: JSON.stringify(n),
                headers: {
                    "content-type": "application/json"
                }
            })
        }, e.getP2pData = function () {
            -1 === this.p2pDataTime && (this.p2pDataTime = (new Date).getTime())
        }, e.getTime = function () {
            var t = new Date;
            return [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()].map(function (t) {
                return function (t, e) {
                    void 0 === e && (e = 2);
                    var i = t.toString(),
                        n = e - i.length;
                    return n > 0 ? new Array(n).fill(0).join("") + i : i
                }(t)
            }).join("")
        }, t
    }(),
    Tf = /iPad/i.test(navigator.userAgent),
    xf = function () {
        function t(t) {
            this.isSeek = !1, this.config = t;
            var e = t.method,
                i = t.lobparam,
                n = t.pver,
                r = t.vid;
            this.caches = new Array, this.commonPrams = {
                logtype: "p2preson",
                bid: "2.7.4",
                pver: "0.0.1",
                suuid: "",
                idx: 0,
                did: "",
                time: 0,
                aver: "",
                sdkver: n,
                uuid: "",
                termid: Tf ? "5" : "2",
                pno: Tf ? "1121" : "1030",
                vid: r,
                vdur: 0,
                def: "",
                ip: "",
                detail: []
            }, this.getSuuid = function () {
                return i ? i.suuid : ""
            }, this.getUuid = function () {
                return e ? e.getUUID() : ""
            }, this.getKernel = t.getKernel
        }
        var e = t.prototype;
        return e.updateData = function (t) {
            Object.assign(this.commonPrams, t)
        }, e.start = function () {
            var t = this;
            this.clear(), this.sendInterval = setInterval(function () {
                t.send()
            }, 3e5)
        }, e.end = function () {
            this.caches.length && this.send(), this.clear()
        }, e.clear = function () {
            clearInterval(this.sendInterval), this.commonPrams.idx = 0
        }, e.record = function (t) {
            var e = t.sn,
                i = t.downloadInfo,
                n = i.p2pFailReason,
                r = i.tcon,
                o = i.rcon,
                s = i.start,
                a = i.cons,
                h = i.total,
                c = i.busy,
                u = this.getKernel().videoKernel,
                l = u.getBufferInfo().len,
                d = u.video.currentTime;
            switch (n) {
                case 1:
                    this.addCache(n, {
                        buffer: l,
                        drag: this.isSeek ? 1 : 0
                    });
                    break;
                case 2:
                    this.addCache(n, {
                        buffer: Math.round(s - d),
                        tcon: r,
                        rcon: o
                    });
                    break;
                case 3:
                    this.addCache(n, {
                        buffer: Math.round(s - d),
                        cons: a,
                        cts: e,
                        tcount: h
                    });
                    break;
                case 4:
                    this.addCache(n, {
                        buffer: Math.round(s - d),
                        cons: a
                    });
                    break;
                case 5:
                    this.addCache(n, {
                        buffer: Math.round(s - d),
                        busy: c
                    })
            }
        }, e.addCache = function (t, e) {
            var i = new Af;
            i.reason = t, i.message = e, this.caches.push(i)
        }, e.send = function () {
            function t(t) {
                var e = [];
                for (var i in t) e.push(i + "=" + t[i]);
                return e.join("&")
            }
            if (this.caches.length) {
                var e = this.config.getVideoInfo(),
                    i = Object.assign({}, this.commonPrams, {
                        time: this.getTime(),
                        suuid: this.getSuuid(),
                        uuid: this.getUuid(),
                        vid: e.vid,
                        detail: this.caches.map(function (e) {
                            return {
                                reason: e.reason,
                                msg: t(e.message)
                            }
                        })
                    });
                this.caches = [], this.commonPrams.idx++, fetch("https://pcweb-v1.log.mgtv.com/dispatcher.do", {
                    method: "post",
                    body: JSON.stringify(i),
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }
        }, e.seek = function () {
            var t = this;
            this.isSeek = !0, clearTimeout(this.seekTimeOut), this.seekTimeOut = setTimeout(function () {
                t.isSeek = !1
            }, 2e4)
        }, e.destroy = function () {
            clearInterval(this.sendInterval)
        }, e.getTime = function () {
            var t = new Date;
            return [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()].map(function (t) {
                return function (t, e) {
                    void 0 === e && (e = 2);
                    var i = t.toString(),
                        n = e - i.length;
                    return n > 0 ? new Array(n).fill(0).join("") + i : i
                }(t)
            }).join("")
        }, t
    }(),
    Af = function () {
        return function () {}
    }(),
    Cf = /iPad/i.test(navigator.userAgent),
    Rf = function () {
        function t(t) {
            this.config = t;
            var e = t.method,
                i = t.lobparam,
                n = t.pver,
                r = t.vid;
            this.caches = new Array, this.commonPrams = {
                logtype: "errmsg",
                bid: "2.7.4",
                pver: "0.0.1",
                suuid: "",
                idx: 0,
                did: "",
                time: 0,
                aver: "",
                sdkver: n,
                uuid: "",
                termid: Cf ? "5" : "2",
                pno: Cf ? "1121" : "1030",
                vid: r,
                vdur: 0,
                def: "",
                ip: "",
                detail: []
            }, this.getSuuid = function () {
                return i ? i.suuid : ""
            }, this.getUuid = function () {
                return e ? e.getUUID() : ""
            }, this.getKernel = t.getKernel
        }
        var e = t.prototype;
        return e.updateData = function (t) {
            Object.assign(this.commonPrams, t)
        }, e.start = function () {
            var t = this;
            this.clear(), this.sendInterval = setInterval(function () {
                t.send()
            }, 3e5)
        }, e.end = function () {
            this.caches.length && this.send(), this.clear()
        }, e.clear = function () {
            clearInterval(this.sendInterval), this.commonPrams.idx = 0
        }, e.record = function (t) {
            var e = t.type,
                i = t.params,
                n = i.result,
                r = i.peer_type,
                o = i.stime,
                s = i.code,
                a = i.type,
                h = new If;
            switch (e) {
                case "answer-result":
                    h.errcode = 12906, h.message.r = n, n && (h.message.ptype = r, h.message.stime = o);
                    break;
                case "candidate_result":
                    h.errcode = s, h.message.r = n, n && (h.message.stime = o), h.message.ptype = r, h.message.type = a
            }
            this.caches.push(h)
        }, e.send = function () {
            function t(t) {
                var e = [];
                for (var i in t) e.push(i + "=" + t[i]);
                return e.join("&")
            }
            if (this.caches.length) {
                var e = this.config.getVideoInfo(),
                    i = Object.assign({}, this.commonPrams, {
                        time: this.getTime(),
                        suuid: this.getSuuid(),
                        uuid: this.getUuid(),
                        vid: e.vid,
                        detail: this.caches.map(function (e) {
                            return {
                                errcode: e.errcode,
                                msg: t(e.message)
                            }
                        })
                    });
                this.caches = [], this.commonPrams.idx++, fetch("https://pcweb-v1.log.mgtv.com/dispatcher.do", {
                    method: "post",
                    body: JSON.stringify(i),
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }
        }, e.seek = function () {
            var t = this;
            this.isSeek = !0, clearTimeout(this.seekTimeOut), this.seekTimeOut = setTimeout(function () {
                t.isSeek = !1
            }, 2e4)
        }, e.destroy = function () {
            clearInterval(this.sendInterval)
        }, e.getTime = function () {
            var t = new Date;
            return [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()].map(function (t) {
                return function (t, e) {
                    void 0 === e && (e = 2);
                    var i = t.toString(),
                        n = e - i.length;
                    return n > 0 ? new Array(n).fill(0).join("") + i : i
                }(t)
            }).join("")
        }, t
    }(),
    If = function () {
        return function () {
            this.message = {}
        }
    }(),
    Lf = Kd.RequestType,
    Pf = 0,
    Df = 2,
    Mf = 4,
    Bf = 5,
    Of = 6,
    Uf = function () {
        function t(t) {
            this.mStates = Pf, this.mplayType = 0, this.isSwitching = !1, this.isUserDrag = !1, this.hasAd = !1, this.playingAd = !1, this.config = t, this.cdnLog = new Jd(t), this.actionLog = new ff(t), this.vipLog = new vf(t), this.commonLog = new wf(t), this.startTime = new kf(t.useFlash), this.p2pLog = new Sf(t), this.p2pFail = new xf(t), this.p2pErrorMessage = new Rf(t), this.preloadStartTime = null
        }
        var e = t.prototype;
        return e.setMStates = function (t) {
            switch (t) {
                case "videoWaiting":
                    this.mStates = this.mStates == Bf ? Bf : Mf;
                    break;
                case "playing":
                    this.mStates = Df;
                    break;
                case "videoSeeking":
                    this.mStates = Bf;
                    break;
                case "videoPlayStart":
                    this.mStates = Of
            }
        }, e.playPoint = function (t, e) {
            this.startTime && (this.startTime.recordPoint(t, e), this.startTime.finish && (this.actionLog.playPoint(this.startTime.toString(), this.startTime.haveAd), this.startTime = null)), this.preloadStartTime && (this.preloadStartTime.recordPoint(t, e), this.preloadStartTime.finish && (this.actionLog.playPoint(this.preloadStartTime.toString(), this.preloadStartTime.haveAd, "4"), this.preloadStartTime = null))
        }, e.playPointError = function () {
            this.actionLog.playPoint(this.startTime.toErrorString(), this.startTime.haveAd, 1), this.startTime = null
        }, e.playPointFail = function () {}, e.preloadVideoInfoData = function () {
            this.isPreload = !0, this.preloadStartTime = new kf(this.config.useFlash)
        }, e.playAdStart = function () {
            this.hasAd = !0, this.playingAd = !0, this.actionLog.actAdInit()
        }, e.playAdBegin = function () {
            this.actionLog.actAdFrontBegin()
        }, e.playAdEnd = function (t, e, i, n) {
            void 0 === n && (n = 0), this.playingAd = !1, this.actionLog.actAdFrontEnd(t, e, i, n), this.actionLog.actADEnd(t, e, i, n)
        }, e.resize = function (t) {
            this.actionLog.updateSize(t)
        }, e.playExit = function (t) {
            this.actionLog.actExitCode(t)
        }, e.playStart = function (t) {
            var e = t.ap,
                i = t.cdnip,
                n = t.state;
            this.mStates = Df, this.cdnLog.start(), this.actionLog.actPlayStart(e, i, n, this.isPreload), this.commonLog.reportPvv(i), this.p2pLog.start(), this.p2pFail.start(), this.p2pErrorMessage.start()
        }, e.playStop = function () {
            this.mStates = 3, this.cdnLog.stop(), this.actionLog.actPlayStop(), this.commonLog.reportPend(), this.p2pLog.end(), this.p2pFail.end(), this.p2pErrorMessage.end()
        }, e.setEndType = function (t) {
            this.commonLog.setEndType(t)
        }, e.playPause = function () {
            this.actionLog.actPlayPause(), this.actionLog.sendSDKByteHB()
        }, e.playResume = function () {
            this.actionLog.actPlayResume()
        }, e.videoReplay = function (t) {
            void 0 === t && (t = 1), this.mplayType = 2, this.actionLog.init(null, "replay"), this.actionLog.setMp(2), this.actionLog.actPlayStart(t), this.cdnLog.init()
        }, e.videoRefresh = function (t) {
            void 0 === t && (t = 1), this.mplayType = 3, this.actionLog.init(null, "refresh"), this.actionLog.setMp(3), this.actionLog.actPlayStart(t), this.cdnLog.init()
        }, e.videoReload = function (t, e) {
            this.p2pLog.end(), this.p2pFail.end(), this.p2pErrorMessage.end(), this.mplayType = 1, this.actionLog.stopSDKByteHB(), this.actionLog.init(null, "reload", this.isPreload), this.actionLog.setMp(1), this.cdnLog.init(), 3 != this.mStates && this.commonLog.reportPend(), this.commonLog.init(), this.startTime && (this.actionLog.playPoint(this.startTime.toErrorString(), this.startTime.haveAd, 3), this.startTime = null), this.isPreload && null != t && t.preloadSuccess ? e && e && this.actionLog.setVideoInfo(e) : (this.startTime = new kf(this.config.useFlash), this.preloadStartTime = null), this.isPreload = !1
        }, e.playDrag = function (t) {
            var e = this;
            this.actionLog.actDrag(t.seektime, t.isCurPoint, t.dragType), this.isUserDrag = !0, this.setDragFalseTimer && clearTimeout(this.setDragFalseTimer), this.setDragFalseTimer = setTimeout(function () {
                e.isUserDrag = !1
            }, 1e3)
        }, e.clarityData = function () {
            var t = this;
            this.isUserDrag = !0, this.setDragFalseTimer && clearTimeout(this.setDragFalseTimer), this.setDragFalseTimer = setTimeout(function () {
                t.isUserDrag = !1
            }, 1e4)
        }, e.errorCode = function (t) {
            this.actionLog.actErrorCode(t.c, t.api, t.pcode, t.z, t.msg), this.commonLog.reportPerr(t.c, this.mStates)
        }, e.playSwitch = function (t) {
            this.actionLog.actSetDef(t), this.cdnLog.setB(t), this.cdnLog.setA(1), this.p2pLog.updateData({
                def: t
            }), this.p2pFail.updateData({
                def: t
            }), this.p2pErrorMessage.updateData({
                def: t
            })
        }, e.setLevelDetails = function (t, e) {
            this.actionLog.actSetLevelDetails(t, e)
        }, e.playBufferEmpty = function () {
            var t = this; - 1 !== [Df, Of, Bf, Mf].indexOf(this.mStates) && (this.isUserDrag || (this.recodeBufferEmptyTimeOut = setTimeout(function () {
                t.cdnLog.bufferEmptyCount()
            }, 500))), this.actionLog.actPlayBufferEmpty()
        }, e.playBufferFull = function () {
            this.recodeBufferEmptyTimeOut && clearTimeout(this.recodeBufferEmptyTimeOut), this.actionLog.actPlayBufferFull(), 1 == this.mStates ? this.actionLog.actBuffer(1) : -1 !== [Df, Of, Bf, Mf].indexOf(this.mStates) && (this.isSwitching ? (this.isSwitching = !1, this.actionLog.actBuffer(4)) : this.actionLog.actBuffer(this.isUserDrag ? 3 : 2), this.isUserDrag = !1)
        }, e.dispatcherLoaded = function (t) {
            this.commonLog.setDispatcherData(t), this.commonLog.reportPpv()
        }, e.requestStart = function (t) {
            switch (t.type) {
                case Lf.CMS:
                    this.actionLog.actCMSBegin(t.vid, t.bdid);
                    break;
                case Lf.DISPATCHER:
                    this.actionLog.actRouteBegin(t.def);
                    break;
                case Lf.CDN:
                    this.actionLog.actStreamBegin()
            }
        }, e.requestSuccess = function (t) {
            switch (t.f = "0", t.z = "1", this.cdnLog.sendRequestResult(t), t.type) {
                case Lf.GETSOURCE:
                    this.commonLog.setSourceData(t.data), this.actionLog.setSourceData(t.data);
                    break;
                case Lf.CMS:
                    this.actionLog.actCMSEnd(!0, t.data), this.vipLog.setVideoInfo(t.data), this.commonLog.setVideoInfo(t.data);
                    break;
                case Lf.DISPATCHER:
                    this.actionLog.actRouteEnd(!0);
                    break;
                case Lf.CDN:
                    this.cdnLog.setVideoUrl(t)
            }
        }, e.requestError = function (t) {
            if (t.type == Lf.CDN && -1 !== [Df, Bf, Mf].indexOf(this.mStates)) return 304e3 == t.code ? t.r = "0" : t.r = "2", void this.cdnLog.sendError(t);
            if (t.type != Lf.CMS || "40001" != t.pcode && "40002" != t.pcode && "40003" != t.pcode && "40004" != t.pcode && "40005" != t.pcode ? (t.f = "-1", this.cdnLog.sendRequestResult(t)) : (t.f = "0", t.z = "1", this.cdnLog.sendRequestResult(t)), "1" == t.z) switch (t.type) {
                case Lf.GETSOURCE:
                    break;
                case Lf.CMS:
                    this.actionLog.actCMSEnd(!1, t);
                    break;
                case Lf.DISPATCHER:
                    this.actionLog.actRouteEnd(!1, t);
                    break;
                case Lf.CDN:
            }
        }, e.setVideoUrl = function (t) {
            this.cdnLog.setVideoUrl(t), this.commonLog.setVideoUrl(t)
        }, e.updatePcore = function (t, e) {
            this.config.pcore = t, this.config.p2p = e, this.actionLog.setPCore(t), this.cdnLog.setPCore(t, e)
        }, e.updatePlayTime = function (t) {
            this.actionLog.updatePlayTime(t), this.cdnLog.VideoPlayTime = t
        }, e.updateDef = function (t) {
            this.cdnLog.setB(t), this.actionLog.setDef(t), this.p2pLog.updateData({
                def: t
            }), this.p2pFail.updateData({
                def: t
            }), this.p2pErrorMessage.updateData({
                def: t
            })
        }, e.showVipDialog = function (t) {
            this.vipLog.showVipDialog(t)
        }, e.showHdDialog = function (t) {
            this.vipLog.showHdDialog(t)
        }, e.updateVersion = function (t) {
            this.config.pcore = t, this.config.useFlash = "h5flash" == t
        }, e.autoPlayFail = function () {
            this.actionLog.actAutoPlayFail()
        }, e.manualClickPlay = function () {
            this.actionLog.actManualClickPlay()
        }, e.updateLiveInfo = function (t) {
            this.actionLog.updateLiveInfo(t)
        }, e.actDrm = function (t, e, i) {
            this.actionLog.actDrm(t, e, i)
        }, e.danmuStatusChange = function (t) {
            this.actionLog.danmuStatusChange(t)
        }, t
    }(),
    Ff = {
        stk: {}
    },
    Nf = function () {};
Ff.parseURL = function (t) {
    var e = document.createElement("a");
    e.href = t;
    var i = e.hash,
        n = i.split("?");
    i = n.shift();
    var r, o = e.search;
    return !o && n && n.length > 0 && (o = "?" + n.join("&")), {
        source: t,
        protocol: e.protocol.replace(":", ""),
        host: e.hostname,
        port: e.port,
        query: o,
        file: (e.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
        hash: i.replace("#", ""),
        path: e.pathname.replace(/^([^\/])/, "/$1"),
        relative: (e.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
        segments: e.pathname.replace(/^\//, "").split("/"),
        params: (r = {}, o.replace(/\?/g, "&").split("&").filter(function (t, e) {
            if ("" !== t && t.indexOf("=")) return !0
        }).forEach(function (t, e) {
            var i = t.indexOf("="),
                n = t.substring(0, i),
                o = t.substring(i + 1);
            r[n] = o
        }), r)
    }
}, Ff.GetWWW = function (t, e) {
    void 0 === e && (e = 0);
    var i = new RegExp("//([^/]+)/", "im");
    return t.match(i)[e] || ""
}, Ff.getHost = function (t) {
    return Ff.GetWWW(t, 1)
}, Ff.findSI = function (t) {
    var e = new RegExp("(^|&|\\?)gsid=([^&]*)(&|$)", "im"),
        i = t && t.match(e);
    return null == i ? "" : i[2]
}, Ff.getGUID = function () {
    return Rt(this, "stk.$.cookie.get", Nf)("MQGUID") || ""
}, Ff.getCxid = function () {
    return Rt(this, "stk.$.getRequest", Nf)("cxid") || ""
}, Ff.getUVIP = function () {
    return "1" == Rt(this, "stk.$.cookie.get", Nf)("vipStatus") ? 1 : 0
}, Ff.getScreenPIX = function () {
    var t = window.screen;
    return t.width + "X" + t.height
}, Ff.getNFID = function () {
    var t = "",
        e = window.screen,
        i = e.width,
        n = e.height,
        r = Rt(this, "stk.$.os.sys", ""),
        o = Rt(this, "stk.$.getFootprintId");
    return o ? t = o() || "" : window.Fingerprint && (t = new window.Fingerprint({
        screen_resolution: !0
    }).get()), t + i + "X" + n + r
}, Ff.getUUID = function () {
    return Rt(this, "stk.$.uuid", Nf)() || ""
}, Ff.getCookie = function () {
    return Rt(this, "stk.$.stkuuid", Nf)() || ""
}, Ff.getSessionId = function () {
    return Rt(this, "stk.$.sessionid", Nf)() || ""
}, Ff.getBrowser = function () {
    return dt && dt.version ? dt.name + dt.version.string : ""
}, Ff.convertDefinition = function (t) {
    var e = "";
    switch (t) {
        case "全景声":
            e = "5";
            break;
        case "蓝光":
            e = "4";
            break;
        case "超清":
            e = "3";
            break;
        case "高清":
            e = "2";
            break;
        case "标清":
            e = "1";
            break;
        case "流畅":
            e = "0"
    }
    return e
}, Ff.convertChangeFSScale = function (t) {
    switch (t) {
        case "50%":
            return "0";
        case "75%":
            return "1";
        case "100%":
            return "2";
        case "全屏":
            return "3"
    }
    return ""
}, Ff.getTime = function () {
    return wt(new Date, "yyyyMMddhhmmss")
}, Ff.params = function (t) {
    return St(t)
};
var Vf = Kd.RequestType,
    zf = Kd.ReportError,
    Hf = function () {},
    jf = /iPad/i.test(navigator.userAgent),
    $f = function (t) {
        return (t = ~~t) >= 1e3 && (t = Math.floor(t / 100) + t % 100), t
    };

function Wf(t, e) {
    for (var i = [], n = 0; n < t.length; n++) i.push(t[n][e]);
    return i.join(",")
}
var qf, Gf, Kf, Yf = function () {
        function t(t) {
            var e, i = t.vm,
                n = Rt(i, "_injector.stk");
            this.vm = i, this.stk = Ff.stk = n, n && n.start && (this.stkLog = new n.start), this.playStartTime = 0, this.mStates = 1, this.cdnRetryCnt = 0, this.playerLog = new Uf({
                vid: Rt(i, "_config.VIDEOINFO.vid", ""),
                p2p: this.getP2P(),
                pcore: this.getPcore(),
                pver: i.version.split("-")[0],
                cver: i.cversion,
                wver: this.getWver(),
                method: Ff,
                subtype: Rt(i, "_config.lobparam.subtype", ""),
                getVideoInfo: i.getVideoInfo.bind(this.vm),
                getLiveVideoInfo: (null === (e = i.getLiveVideoInfo) || void 0 === e ? void 0 : e.bind(this.vm)) || null,
                isLive: i._config.isLive,
                liveType: i._config.liveType,
                get lobparam() {
                    return i._config.lobparam || {}
                },
                useFlash: this.vm._config.useFlash,
                box: i.box,
                usePreload: i.isPreloadEnable,
                abroad: i._config.abroad,
                isIntelMgtv: "1" == i._config.i18n,
                iscdntest: Rt(i, "_config.iscdntest", !1),
                cdnld: Rt(i, "_config.cdnld", ""),
                getKernel: function () {
                    return i.__dispatcher.kernel
                }
            }), this.bindEvent()
        }
        var e = t.prototype;
        return e.getP2P = function () {
            return this.vm._config.useFlash ? this.vm.config.get("kernels.flash.p2p.enable", !0) : !jf && this.vm.config.get("kernels.hls.p2p.enable", !0)
        }, e.getPcore = function () {
            return this.vm._config.useFlash ? "h5flash" : jf ? "padh5" : "pch5"
        }, e.getWver = function () {
            var t = Rt(this, "vm._config.lobparam.wver", "");
            return jf && (t = t.replace(/pcweb-/, "padweb-")), t
        }, e.bindEvent = function () {
            var t = this,
                e = this.vm,
                i = this.playerLog;
            e.on("startPoint", function (t, e) {
                i.playPoint(t, e)
            }), e.on("startPointError", function (t, e) {
                i.playPoint(t, e), i.playPointError()
            }), e.on("stats", function (e) {
                var n = e.data,
                    r = n.stats,
                    o = n.byteStats;
                r && i.actionLog.setStats(r), o && i.actionLog.setDetail(o.detail), (null == r ? void 0 : r.p2p) > 0 && t.playerLog.p2pLog.getP2pData()
            }), e.on("p2p-error", function (e) {
                if (i.actionLog.setP2PError(e.data), 12101 == e.data.code) {
                    var n = e.data.peer,
                        r = n.code,
                        o = n.connectDuration;
                    !n.isAnswer || "ERR_ICE_CONNECTION_FAILURE" !== r && "ERR_CONNECTION_FAILURE" !== r || t.playerLog.p2pLog.updatePeer({
                        result: 0,
                        peertype: e.data.from,
                        spendtime: o,
                        errcode: 12101,
                        errmsg: r
                    })
                }
            }), e.on("segment-loaded", function (t) {
                i.p2pFail.record(t.data)
            }), e.on("p2p-report", function (e) {
                var i = e.data;
                switch (i.type) {
                    case "answer-result":
                    case "candidate_result":
                        t.playerLog.p2pErrorMessage.record(i)
                }
            }), e.on("peers", function (t) {
                var e = t.data,
                    n = e.peerId,
                    r = e.event,
                    o = e.peer;
                if (i.commonLog.setP2P({
                        event: r,
                        peer: o
                    }), i.p2pLog.updateData({
                        did: n
                    }), i.p2pFail.updateData({
                        did: n
                    }), i.p2pErrorMessage.updateData({
                        did: n
                    }), "peer-connect" === t.data.event) {
                    var s = o.connectDuration,
                        a = o.isAnswer,
                        h = o.peer_type;
                    a && i.p2pLog.updatePeer({
                        result: 1,
                        peertype: h,
                        spendtime: s
                    })
                }
            }), e.on("confData", function () {
                var e = t.getPcore(),
                    n = t.getP2P();
                i.updatePcore(e, n)
            }), e.on("switchCamera", function () {
                i.actionLog.actSwitchCamera()
            }), e.on("videoReady", function () {
                var e = t.getPcore(),
                    n = t.getP2P();
                i.updatePcore(e, n), i.commonLog.setBox(t.vm.box)
            }), e.on("switchSubtitle", function (t) {
                var e = t.language;
                i.commonLog.setLang(e), i.actionLog.setLang(e)
            }), e.on("videoInfoData", function (e) {
                var n, r, o;
                e.isPreload && t.playerLog.preloadVideoInfoData();
                var s = e.retry == e.maxRetry - 1 ? "1" : "0";
                switch (e.status) {
                    case "loadComplete":
                        i.requestSuccess({
                            type: Vf.CMS,
                            h: e.url,
                            data: e.data
                        }), i.actionLog.setTimeOffset(e.timeoffset);
                        var a = e.data.user;
                        a && (i.p2pLog.updateData({
                            ip: a.ip
                        }), i.p2pFail.updateData({
                            ip: a.ip
                        }), i.p2pErrorMessage.updateData({
                            ip: a.ip
                        }));
                        break;
                    case "loadError":
                        n = e.code || 0, r = 101e3 + $f(n), o = zf.getError(r).msg, i.requestError({
                            type: Vf.CMS,
                            h: e.url,
                            z: s,
                            code: r,
                            msg: o,
                            pcode: n
                        }), i.errorCode({
                            c: r,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        }), "40001" != n && "40002" != n && "40003" != n && "40004" != n && "40005" != n || i.playExit(n);
                        break;
                    case "loadTimeout":
                        n = e.code, r = 103e3 + $f(n), o = zf.getError(r).msg, i.requestError({
                            type: Vf.CMS,
                            h: e.url,
                            z: s,
                            code: r,
                            msg: o
                        }), i.errorCode({
                            c: r,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        })
                }
            }), e.on("getSource", function (e) {
                var n, r, o, s;
                void 0 === e && (e = {}), r = e.code || 0;
                var a = e.retry == e.maxRetry - 1 ? "1" : "0";
                switch (t.playerLog.actionLog.setAISwitcher(Boolean(null === (n = e.data) || void 0 === n ? void 0 : n.bulletCommentMask)), e.status) {
                    case "loadComplete":
                        e.data.bulletCommentMask, i.requestSuccess({
                            type: Vf.GETSOURCE,
                            h: e.url,
                            data: e.data
                        });
                        break;
                    case "loadError":
                        o = 101e3 + $f(r), s = zf.getError(o).msg, i.requestError({
                            type: Vf.GETSOURCE,
                            h: e.url,
                            z: a,
                            code: o,
                            msg: s
                        }), i.errorCode({
                            c: o,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        });
                        break;
                    case "loadTimeout":
                        o = 103e3 + $f(r), s = zf.getError(o).msg, i.requestError({
                            type: Vf.GETSOURCE,
                            h: e.url,
                            z: a,
                            code: o,
                            msg: s
                        }), i.errorCode({
                            c: o,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        })
                }
            }), e.on("c_resize", function (e) {
                t.playerLog.resize(e)
            });
            var n = function (e) {
                var n, r, o;
                n = e.code || 0;
                var s = e.retry == e.maxRetry - 1 ? "1" : "0";
                switch (e.status) {
                    case "loadComplete":
                        t.videoUrl = e.data, i.setVideoUrl({
                            h: t.videoUrl
                        }), i.requestSuccess({
                            type: Vf.DISPATCHER,
                            h: e.url
                        }), i.dispatcherLoaded(e);
                        break;
                    case "loadError":
                        r = 201e3 + $f(n), o = zf.getError(r).msg, i.requestError({
                            type: Vf.DISPATCHER,
                            h: e.url,
                            z: s,
                            code: r,
                            msg: o
                        }), i.errorCode({
                            c: r,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        });
                        break;
                    case "loadTimeout":
                        r = 203e3 + $f(n), o = zf.getError(r).msg, i.requestError({
                            type: Vf.DISPATCHER,
                            h: e.url,
                            z: s,
                            code: r,
                            msg: o
                        }), i.errorCode({
                            c: r,
                            api: e.url,
                            pcode: "",
                            z: e.retry
                        })
                }
            };
            e.on("getDispatcher", function (t) {
                void 0 === t && (t = {}), n(t)
            }), e.on("hlsDispatcherLoaded", function (t) {
                n(t.data)
            }), e.on("frontAdBegin", function (t) {
                i.playAdStart(), i.playAdBegin()
            }), e.on("frontAdEnd", function (t) {
                void 0 === t && (t = {}), i.playAdEnd("", 0, t.duration || 0, t.total || 0)
            }), e.on("adBlockException", function (t) {
                i.errorCode({
                    c: $i.ADINFO_TIMEOUT.code,
                    api: t.url || "",
                    pcode: t.code,
                    z: 0
                })
            }), e.on("videoPlayStart", function (e) {
                t.playerLog.setMStates("videoPlayStart"), i.requestStart({
                    type: Vf.CDN
                })
            }), e.on("videoPlay", function (n) {
                void 0 === n && (n = {}), t.mStates = 2, t.videoUrl = t.videoUrl || n.videoUrl || "", i.setVideoUrl({
                    h: t.videoUrl
                }), t.playStartTime = +new Date, i.requestSuccess({
                    type: Vf.CDN,
                    h: t.videoUrl
                }), i.playStart({
                    state: n.state,
                    ap: e.isAutoplay,
                    mp: e.isLoopPlay ? 2 : e.isContinuePlay ? 1 : 0,
                    cdnip: Ot(t.videoUrl)
                }), e.config.isLive || t.dashLicenseRequested || i.actDrm("0", "", "0")
            }), e.on("videoPause", function (t) {
                i.playPause()
            }), e.on("videoResume", function (t) {
                i.playResume()
            }), e.on("videoEnd", function (e) {
                t.mStates = 3, i.setEndType(0), i.playStop()
            }), e.on("videoReplay", function (t) {
                i.videoReplay(), i.actDrm("0", "", "0")
            }), e.on("videoRefresh", function (e) {
                t.dashLicenseRequested = !1, i.videoRefresh()
            }), e.on("videoReload", function (e) {
                var n;
                t.isTrialViewEnd = !1, t.dashLicenseRequested = !1, t.playStartTime = 0, t.videoUrl = "", t.mStates = 1, t.cdnRetryCnt = 0;
                var r = (null === (n = t.vm.cms) || void 0 === n ? void 0 : n.videoInfoData) || null;
                i.setVideoUrl({
                    h: t.videoUrl
                }), i.setEndType(1), i.videoReload(e, r), t.playerLog.playPoint("pv")
            }), e.on("videoWaiting", function (e) {
                i.setMStates("videoWaiting"), !t.playStartTime || +new Date - t.playStartTime < 1e3 || i.playBufferEmpty()
            }), e.on("playing", function (t) {
                i.setMStates("playing"), i.playBufferFull()
            }), e.on("videoSeeking", function (t) {
                i.setMStates("videoSeeking"), i.playDrag(t)
            }), e.on("clarityData", function (t) {
                t && t.def && i.updateDef(t.def.def), i.clarityData()
            }), e.on("clarityChanged", function (t) {
                !t.error && t.stream && i.playSwitch(t.stream.def)
            }), e.on("hlsLevelSwitching", function (t) {
                var e = t.data.def;
                i.actionLog.sendSDKByteHB(), i.actionLog.setCurrentDownloadDef(e)
            }), e.on("hlsLevelSwitched", function (e) {
                2 == t.mStates && null !== e.data.prevLevel && i.requestSuccess({
                    type: Vf.CDN,
                    h: t.videoUrl
                })
            }), e.on("hlsLevelLoaded", function (t) {
                var e = t.data,
                    n = e.level,
                    r = e.details;
                r && i.setLevelDetails(n, r)
            }), e.on("hlsSegmentLoaded", function (t) {
                i.segmentLoaded(t)
            }), e.on("flvError", function (t) {
                var e, n, r;
                void 0 === t && (t = {});
                var o = t.url || "";
                e = (r = {
                    100: zf.error_cdn_flv_network,
                    101: zf.error_cdn_flv_decode,
                    102: zf.error_cdn_flv_seek,
                    103: zf.error_cdn_flv_stream_close,
                    104: zf.error_cdn_flv_media_source,
                    105: zf.error_cdn_flv_source_buffer,
                    106: zf.error_cdn_flv_source_buffer_abort,
                    107: zf.error_cdn_flv_buffer_append
                } [t.data.errno] || zf.error_cdn_flv_unknown).code, n = r.msg, o && (i.requestError({
                    type: Vf.CDN,
                    h: o || "",
                    code: e,
                    z: "1",
                    error: n
                }), i.errorCode({
                    c: e,
                    api: o || "",
                    pcode: "",
                    z: 0,
                    msg: encodeURIComponent(n)
                }))
            }), e.on("hlsStreamError", function (n) {
                if (n && n.data) {
                    var r, o = m({}, n.data),
                        s = o.type,
                        a = (o.fatal, e.config.isLive),
                        h = "";
                    h = a ? o.context && o.context.url || e.cms && e.cms.fakeMasterPlaylistUrl || "" : Rt(o, "url") || Rt(o, "context.url") || Rt(o, "frag._url") || t.videoUrl;
                    var c = function (e) {
                        h && (i.requestError({
                            type: Vf.CDN,
                            h: h,
                            code: e.code,
                            z: t.cdnRetryCnt < 2 ? "0" : "1",
                            error: e.msg
                        }), i.errorCode({
                            c: e.code,
                            api: h,
                            pcode: "",
                            z: 0,
                            msg: encodeURIComponent(s + e.msg)
                        })), t.cdnRetryCnt++
                    };
                    switch (o.details) {
                        case "manifestLoadError":
                            c({
                                code: r = 301e3 + Rt(o, "response.code", 0),
                                msg: zf.getError(r).msg
                            });
                            break;
                        case "manifestLoadTimeOut":
                            c(zf.error_cdn_hls_master_m3u8_timeout);
                            break;
                        case "levelLoadError":
                            c({
                                code: r = 31e4 + Rt(o, "response.code", 0),
                                msg: zf.getError(r).msg
                            });
                            break;
                        case "levelLoadTimeOut":
                            c(zf.error_cdn_hls_level_m3u8_timeout);
                            break;
                        case "levelSwitchError":
                            c(zf.error_cdn_hls_level_switch_error);
                            break;
                        case "manifestParsingError":
                            c(zf.error_cdn_hls_m3u8_parsing_error);
                            break;
                        case "manifestIncompatibleCodecsError":
                            c(zf.error_cdn_hls_m3u8_codec_not_support);
                            break;
                        case "fragLoadError":
                            c({
                                code: r = 304e3 + Rt(o, "response.code", 0),
                                msg: zf.getError(r).msg
                            });
                            break;
                        case "fragLoadTimeOut":
                            c(zf.error_cdn_hls_ts_timeout);
                            break;
                        case "fragDecryptError":
                            c(zf.error_cdn_hls_fragdecrypt);
                            break;
                        case "fragParsingError":
                            c(zf.error_cdn_hls_fragparsingeerror);
                            break;
                        case "remuxAllocError":
                            c(zf.error_cdn_hls_remuxalloc);
                            break;
                        case "bufferAddCodecError":
                            c(zf.error_cdn_hls_bufferaddcodec);
                            break;
                        case "bufferAppendingError":
                            c(zf.error_cdn_hls_bufferappending);
                            break;
                        case "bufferAppendError":
                            c(zf.error_cdn_hls_bufferappend);
                            break;
                        case "bufferNudgeOnStall":
                            break;
                        case "internalException":
                            c(zf.error_cdn_hls_unknown)
                    }
                }
            }), e.on("dashBufferEmpty", function (t) {
                i.playBufferEmpty()
            }), e.on("dashStreamError", function (e) {
                var n, r, o, s, a = (e.data || {}).error,
                    h = Rt(a, "data.request.url") || t.videoUrl || "";
                if (a) {
                    switch (a.code >= 100 && a.code <= 114 && (n = 319e3 + a.code, r = zf.getError(n).msg), s = ~~Rt(a, "data.response.status"), a.code) {
                        case 10:
                            n = (o = zf.error_cdn_dash_mpd_resolve_failure).code, r = o.msg;
                            break;
                        case 11:
                            n = 311e3 + s, r = zf.getError(n).msg;
                            break;
                        case 12:
                            n = 313e3 + s, r = zf.getError(n).msg;
                            break;
                        case 13:
                            n = (o = zf.error_cdn_dash_representation_update_abnormal).code, r = o.msg;
                            break;
                        case 14:
                            n = (o = zf.error_cdn_dash_representation_abnormal).code, r = o.msg;
                            break;
                        case 17:
                            n = 315e3 + s, r = zf.getError(n).msg;
                            break;
                        case 19:
                            n = (o = zf.error_cdn_dash_mpd_resolve_url_failure).code, r = o.msg;
                            break;
                        case 20:
                            n = (o = zf.error_cdn_dash_buffer_append).code, r = o.msg;
                            break;
                        case 21:
                            n = (o = zf.error_cdn_dash_buffer_remove).code, r = o.msg;
                            break;
                        case 22:
                            n = (o = zf.error_cdn_dash_buffer_update).code, r = o.msg;
                            break;
                        case 23:
                            n = (o = zf.error_cdn_dash_mse_not_support).code, r = o.msg;
                            break;
                        case 24:
                            n = (o = zf.error_cdn_dash_eme_not_support).code, r = o.msg;
                            break;
                        case 25:
                            n = (o = zf.error_cdn_dash_mpd_download).code, r = o.msg;
                            break;
                        case 27:
                            n = (o = zf.error_cdn_dash_segment_download).code, r = o.msg;
                            break;
                        case 28:
                            n = (o = zf.error_cdn_dash_initsegment_download).code, r = o.msg;
                            break;
                        case 29:
                            n = (o = zf.error_cdn_dash_xlink_download).code, r = o.msg;
                            break;
                        case 30:
                            n = (o = zf.error_cdn_dash_mpd_resolve_codec_not_support).code, r = o.msg;
                            break;
                        case 31:
                            n = (o = zf.error_cdn_dash_mpd_resolve_no_duration).code, r = o.msg;
                            break;
                        case 32:
                            n = (o = zf.error_cdn_dash_mpd_resolve_no_duration).code, r = o.mgg;
                            break;
                        case 33:
                            n = (o = zf.error_cdn_dash_mpd_resolve_text_file_failure).code, r = o.msg;
                            break;
                        case 34:
                            n = (o = zf.error_cdn_dash_mpd_resolve_muxed_detected).code, r = o.msg;
                            break;
                        case 35:
                            n = (o = zf.error_cdn_dash_codec_not_support).code, r = o.msg;
                            break;
                        default:
                            n = (o = zf.error_cdn_dash_other_error).code, r = o.msg
                    }
                    h && (i.requestError({
                        type: Vf.CDN,
                        h: h || "",
                        code: n,
                        z: "1",
                        error: r
                    }), i.errorCode({
                        c: n,
                        api: h || "",
                        pcode: "",
                        z: 0,
                        msg: "DashErrorCode:" + a.code
                    })), i.actDrm(a.code, a.message, "1")
                }
            }), e.on("nativeStreamError", function (t) {
                if (t && t.data && t.data.fatal) {
                    var n, r, o, s = t.data,
                        a = t.data ? t.data.url : e.$video.src,
                        h = {
                            300: zf.error_cdn_fairplay_keysystem_browser_version,
                            301: zf.error_cdn_fairplay_keysystem_mediakeys,
                            302: zf.error_cdn_fairplay_keysystem_keysession,
                            303: zf.error_cdn_fairplay_cert_timeout,
                            304: zf.error_cdn_fairplay_keysession_webkitkeyerror,
                            305: zf.error_cdn_fairplay_license_timeout
                        };
                    s && (r = (n = h[s.code] || zf.error_cdn_vanilla_unknown).code, o = n.msg, i.requestError({
                        type: Vf.CDN,
                        h: a || "",
                        code: r,
                        z: "1",
                        error: o
                    }), i.errorCode({
                        c: r,
                        api: a || "",
                        pcode: "",
                        z: 0,
                        msg: "nativeStreamError:" + r + o
                    }), 305 != s.code && i.actDrm(s.code, "nativeStreamError:" + s.details, "1"))
                }
            });
            var r = function (e) {
                t.dashLicenseRequested = !0;
                var n = (e.data || {}).error;
                if (n) {
                    var r = n.message || n.details;
                    i.actDrm(n.code, r, "1")
                } else i.actDrm("0", "", "1")
            };
            e.on("fairplayLicenseRequest", r), e.on("dashLicenseRequest", r), e.on("frontAdError", function (t) {
                void 0 === t && (t = {});
                var n = (t.data ? t.data.code : e.$video.error.code) || 2,
                    r = t.data ? t.data.url : e.$video.src,
                    o = $i.AD_MEDIA_UNKOWN;
                n && (o = {
                    1: $i.AD_DOWNLOAD_CANCEL,
                    2: $i.AD_DOWNLOAD_TIMEOUT,
                    3: $i.AD_MEDIA_ERROR,
                    4: $i.AD_MEDIA_UNSUPPORT
                } [n], i.errorCode({
                    c: o.code,
                    api: r,
                    pcode: "",
                    z: 0
                }))
            }), e.on("videoError", function (t) {
                if (void 0 === t && (t = {}), "hls" !== e.box && "dash" !== e.box) {
                    var n = (t.data ? t.data.code : e.$video.error.code) || 2,
                        r = t.data ? t.data.url : e.$video.src,
                        o = 2 == t.retry ? "1" : "0",
                        s = {
                            1: zf.error_cdn_vanilla_close_downlowd,
                            2: zf.error_cdn_vanilla_network,
                            3: zf.error_cdn_vanilla_decode,
                            4: zf.error_cdn_vanilla_format_not_support,
                            5: zf.error_cdn_vanilla_encrypted_media,
                            6: zf.error_cdn_vanilla_unknown
                        } [n];
                    r && n && s && (i.requestError({
                        type: Vf.CDN,
                        h: r || "",
                        code: s.code,
                        z: o,
                        error: s.msg
                    }), i.errorCode({
                        c: s.code,
                        api: r || "",
                        pcode: "",
                        z: t.retry || 0
                    }))
                }
            }), e.on("adRequestError", function (t) {
                var e = $i.ADINFO_TIMEOUT,
                    n = t.url;
                i.errorCode({
                    c: e.code,
                    api: n || "",
                    pcode: "",
                    z: 0
                })
            }), e.on("timeupdate", function (t) {
                i.updatePlayTime(e.currentTime)
            }), e.on("showErrorDialog", function (t) {
                i.setEndType(9), i.playStop()
            }), e.on("showVipDialog", function (e) {
                i.showVipDialog(e), 0 != (e.info && e.info.trialtime) || t.isTrialViewEnd || (i.playExit("10001"), t.isTrialViewEnd = !0)
            }), e.on("showHdDialog", function (t) {
                i.showHdDialog(t)
            }), e.on("switchToFlash", function (t) {
                i.updateVersion("h5flash")
            }), e.on("switchToHtml5", function (t) {
                var e = jf ? "padh5" : "pch5";
                i.updateVersion(e)
            }), e.on("autoplayFail", function (t) {
                var e = $i.AUTOPLAY_FAIL_ERROR;
                i.errorCode({
                    c: e.code,
                    api: "",
                    pcode: "",
                    z: 0
                }), i.autoPlayFail()
            }), e.on("manualClickPlay", function (t) {
                i.manualClickPlay()
            }), e.on("errorRefreshClick", function (i) {
                var n = i.vinfo,
                    r = Rt(e, "_injector.stk.$.browser.brName", ""),
                    o = Rt(e, "_injector.stk.$.browser.version", ""),
                    s = Rt(e, "_injector.stk.$.os.sys", ""),
                    a = Rt(e, "_config.lobparam.suuid", ""),
                    h = {
                        act: "cp1",
                        bid: "isIpad" == s ? "14.1.90" : "1.1.90",
                        mp: 1,
                        idx: 0,
                        pver: e.version.split("-")[0],
                        suuid: a || "",
                        modl: n.mod || "",
                        vid: n.vid || "",
                        cid: n.rid || "",
                        os: s || "",
                        browser: r + " " + o
                    };
                t.stkLog && t.stkLog.pageStart(h)
            }), e.on("installAppClick", function (i) {
                var n = i.pos,
                    r = i.vinfo,
                    o = {
                        bid: "4.1.2",
                        time: Rt(e, "_injector.stk.$.getTimer", Hf)("yyyyMMddhhmmss") || "",
                        act: "click",
                        vid: r.video_id,
                        cid: r.root_id,
                        plid: r.collection_id,
                        bdid: r.playlist_id,
                        pos: n
                    };
                t.stkLog && t.stkLog.pageStart(o)
            }), e.on("recommendVideoShow", function (i) {
                var n = i.vinfo,
                    r = i.recommendVideos,
                    o = {
                        bid: "1.1.4",
                        time: Rt(e, "_injector.stk.$.getTimer", Hf)("yyyyMMddhhmmss") || "",
                        act: "hotpv",
                        ver: r.ver || "",
                        reqid: r.reqid || "",
                        region: 8,
                        cid: n.rid,
                        rcdata: Wf(r.data, "videoId") || "",
                        videoid: n.vid,
                        vidauto: 0,
                        rctype: Wf(r.data, "rcType")
                    };
                t.stkLog && t.stkLog.pageEvent(o, "//rc.log.mgtv.com/rpt")
            }), e.on("recommandVideoClick", function (i) {
                var n = i.vinfo,
                    r = i.hitid,
                    o = i.pos,
                    s = i.recommendVideos,
                    a = {
                        bid: "1.1.4",
                        time: Rt(e, "_injector.stk.$.getTimer", Hf)("yyyyMMddhhmmss"),
                        act: "recommended_hot",
                        ver: s.ver || "",
                        reqid: s.reqid || "",
                        region: 8,
                        cid: n.rid,
                        rcdata: Wf(s.data, "videoId") || "",
                        hitid: r,
                        pos: o,
                        videoid: n.vid,
                        vidauto: 0,
                        rctype: Wf(s.data, "rcType")
                    };
                t.stkLog && t.stkLog.pageEvent(a, "//rc.log.mgtv.com/rpt")
            }), e.on("clickAction", function (t) {
                if (void 0 === t && (t = {}), t && t.report && window.MgStat && window.MgStat.send) {
                    var i = Rt(e, "_config.lobparam.fpa", ""),
                        n = e.getVideoInfo(),
                        r = e.config.isLive ? "1" : "0",
                        o = m({}, t.lob, {
                            fpa: i,
                            pt: r
                        }),
                        s = m({
                            vid: n.vid || "",
                            liveId: n.liveId || "",
                            direct: "cntp",
                            label: "a",
                            act: "pfc"
                        }, t.param || {});
                    MgStat.send("click", o, s)
                }
            }), e.on("componentView", function (t) {
                if (void 0 === t && (t = {}), t && t.report && window.MgStat && window.MgStat.send) {
                    var i = Rt(e, "_config.lobparam.fpa", ""),
                        n = e.getVideoInfo(),
                        r = e.config.isLive ? "1" : "0";
                    m({}, t.lob, {
                        fpa: i,
                        pt: r
                    }), m({
                        vid: n.vid || ""
                    });
                    MgStat.send("cv", t.lob || {}, t.param || {})
                }
            }), e.on("danmuConfig", function (e) {
                t.playerLog.danmuStatusChange({
                    switcher: Boolean(e.switcher),
                    render: Boolean(e.render)
                })
            }), e.on("danmuStatusChange", function (e) {
                var i = {
                    render: Boolean(1 == e.state)
                };
                t.playerLog.danmuStatusChange(i)
            })
        }, e.destroy = function () {
            this.playerLog = null, this.vm = null
        }, t
    }(),
    Xf = function () {
        function t(t) {
            this.parent = t, this.locale = this.parent.locale
        }
        var e = t.prototype;
        return e.create = function () {
            this.createEl(), this.addAllEvent()
        }, e.destroy = function () {
            this.removeAllEvent()
        }, e.createEl = function () {
            this.$dom = document.createElement(this.option.tag), this.$domWrap = Ie(this.$dom), this.option.cls && (this.$dom.className = this.option.cls), this.$dom.innerHTML = w(this.option.html) ? this.option.html({
                locale: this.locale
            }) : this.option.html, this.option.alignTop ? this.parent.$dom.appendChild(this.$dom) : this.option.alignRight ? this.parent.$wrapRight.appendChild(this.$dom) : this.parent.$wrapLeft.appendChild(this.$dom)
        }, e.enable = function (t) {
            void 0 === t && (t = !0), Ae(this.$dom, {
                display: t ? "" : "none"
            })
        }, e.addAllEvent = function () {
            var t = this;
            this.option.defaultEvent && g(this.option.defaultEvent).forEach(function (e) {
                var i = t.option.defaultEvent[e];
                t[i] = z(t[i], t), Te(t.$dom, e, t[i], !1, !1)
            }), this.option.event && g(this.option.event).forEach(function (e) {
                var i = "__" + e;
                t[i] = z(t.option.event[e], t), Te(t.$dom, e, t[i], !1, !1)
            })
        }, e.removeAllEvent = function () {
            var t = this;
            this.option.defaultEvent && g(this.option.defaultEvent).forEach(function (e) {
                var i = t.option.defaultEvent[e];
                t[i] = z(t[i], t), Se(t.$dom, e, t[i], !1, !1)
            }), this.option.event && g(this.option.event).forEach(function (e) {
                var i = "__" + e;
                t[i] = z(t.option.event[e], t), Se(t.$dom, e, t[i], !1, !1)
            })
        }, t
    }(),
    Zf = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = i, n.init(), n
        }
        return r(e, t), e.prototype.init = function () {
            t.prototype.create.call(this), _e(this.$dom, "control-item")
        }, e
    }(Xf),
    Qf = {
        tag: "mango-control-state",
        html: function (t) {
            return '\n  <a href="javascript:void(0);" class="btn" title="' + t.locale["common.pause"] + '">\n      <svg class="svgPlayPuase1" viewBox="0 0 18 18" version="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">\n        <g>\n          <path d="M15.503,6.42L5.127,0.376C3.293-0.692,1,0.643,1,2.78v12.44c0,2.137,2.293,3.473,4.127,2.404l10.376-6.044C17.499,10.417,17.499,7.583,15.503,6.42z"></path>\n        </g>\n      </svg>\n      <svg class="svgPlayPuase2" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">\n        <g>\n          <path d="M3.5,0C2.675,0,2,0.675,2,1.5v15C2,17.325,2.675,18,3.5,18S5,17.325,5,16.5v-15C5,0.675,4.325,0,3.5,0z"></path>\n          <path d="M14.5,0C13.675,0,13,0.675,13,1.5v15c0,0.825,0.675,1.5,1.5,1.5s1.5-0.675,1.5-1.5v-15C16,0.675,15.325,0,14.5,0z"></path>\n        </g>\n      </svg>\n      </a>\n  '
        },
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    Jf = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(Qf, k(i) ? i : {}), n.animate = !1, n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$domWrap.addClass("control-item btn-play"), this.changeState("pause")
        }, i.changeState = function (t) {
            var e = "play" === t ? "pause" : "play";
            this.state = t, _e(this.parent.$dom, e), be(this.parent.$dom, t)
        }, i.click = function (t) {
            var e = "play" === this.state ? "pause" : "play";
            return this.changeState(e), this.parent[e](), "pause" === e && this.parent.emit("videoUserPause"), Yi.info("PluginControlbar", "user trigger action [" + e + "]."), "play" === e && this.parent.ended && !this.parent.vm._config.useFlash && (Yi.info("PluginControlbar", "send player event [videoRefresh]."), this.parent.vm.emit("videoRefresh")), t.stopPropagation(), t.preventDefault(), !1
        }, e
    }(Xf),
    tp = {
        tag: "mango-control-loop",
        cls: "control-item",
        html: function (t) {
            return '\n  <mango-control-loop-btn>\n      <a class="btn" href="javascript:void(0);" title="">\n\n\n        <svg class="icon n-loop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">\n\t<path d="M8.923,3.382c0.101-0.245,0.101-0.52,0-0.764C8.872,2.495,8.799,2.385,8.707,2.293l-2-2c-0.391-0.391-1.023-0.391-1.414,0\n\t\ts-0.391,1.023,0,1.414L5.71,2.124C2.465,2.732,0,5.581,0,9c0,3.428,2.455,6.331,5.837,6.902c0.056,0.01,0.112,0.014,0.167,0.014\n\t\tc0.479,0,0.903-0.345,0.985-0.833c0.092-0.544-0.275-1.061-0.819-1.152C3.792,13.529,2,11.409,2,9c0-2.757,2.243-5,5-5h1\n\t\tc0.13,0,0.26-0.027,0.382-0.077C8.627,3.821,8.821,3.627,8.923,3.382z"/>\n\t<path d="M18,9c0-3.421-2.449-6.323-5.823-6.9c-0.546-0.094-1.061,0.273-1.154,0.817c-0.093,0.544,0.273,1.061,0.817,1.154\n\t\tC14.211,4.477,16,6.596,16,9c0,2.757-2.243,5-5,5h-1c-0.13,0-0.26,0.027-0.382,0.077c-0.244,0.101-0.439,0.296-0.541,0.541\n\t\tc-0.101,0.245-0.101,0.52,0,0.764c0.051,0.122,0.124,0.233,0.216,0.325l2,2C11.488,17.902,11.744,18,12,18s0.512-0.098,0.707-0.293\n\t\tc0.391-0.391,0.391-1.023,0-1.414l-0.417-0.417C15.535,15.268,18,12.419,18,9z"/>\n</svg>\n\n<svg class="icon n-loop-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">\n\t<path d="M7,4h1c0.13,0,0.26-0.027,0.382-0.077c0.244-0.101,0.439-0.296,0.541-0.541c0.101-0.245,0.101-0.52,0-0.764\n\t\tC8.872,2.495,8.799,2.385,8.707,2.293l-2-2c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L5.71,2.124\n\t\tC2.465,2.732,0,5.581,0,9c0,3.428,2.455,6.331,5.837,6.902c0.056,0.01,0.112,0.014,0.167,0.014c0.479,0,0.903-0.345,0.985-0.833\n\t\tc0.092-0.544-0.275-1.061-0.819-1.152C3.792,13.529,2,11.409,2,9C2,6.243,4.243,4,7,4z"/>\n\t<path d="M18,9c0-3.421-2.449-6.323-5.823-6.9c-0.546-0.094-1.061,0.273-1.154,0.817c-0.093,0.544,0.273,1.061,0.817,1.154\n\t\tC14.211,4.477,16,6.596,16,9c0,2.757-2.243,5-5,5h-1c-0.13,0-0.26,0.027-0.382,0.077c-0.244,0.101-0.439,0.296-0.541,0.541\n\t\tc-0.101,0.245-0.101,0.52,0,0.764c0.051,0.122,0.124,0.233,0.216,0.325l2,2C11.488,17.902,11.744,18,12,18s0.512-0.098,0.707-0.293\n\t\tc0.391-0.391,0.391-1.023,0-1.414l-0.417-0.417C15.535,15.268,18,12.419,18,9z"/>\n\t<path d="M10,11V7c0-0.552-0.448-1-1-1C8.448,6,8,6.448,8,7v4c0,0.552,0.448,1,1,1C9.552,12,10,11.552,10,11z"/>\n</svg>\n\n      </a>\n    <div class="u-control-tips"><p class="video_loop_tips">' + t.locale["controls.loop.open"] + "</p></div>\n  </mango-control-loop-btn>\n  "
        },
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    ep = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(tp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            this.locale = this.parent.locale, t.prototype.create.call(this)
        }, i.inited = function () {
            var t = this.$domWrap.find(".video_loop_tips");
            this.parent.userSetting.isLoop ? (t.html(this.locale["controls.loop.close"]), this.$domWrap.addClass("on")) : (t.html(this.locale["controls.loop.open"]), this.$domWrap.removeClass("on"))
        }, i.click = function (t) {
            var e = "",
                i = "";
            this.parent.userSetting.isLoop ? (this.parent.userSetting.isLoop = 0, zi.set("mango-loop-open", 0), this.$domWrap.removeClass("on"), e = this.locale["controls.loop.open"], i = this.locale["controls.loop.closed"]) : (this.parent.userSetting.isLoop = 1, zi.set("mango-loop-open", 1), this.$domWrap.addClass("on"), e = this.locale["controls.loop.close"], i = this.locale["controls.loop.opend"]), this.$domWrap.find(".video_loop_tips").html(e), this.parent.config.isIpad && this.parent.children.tip.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: i,
                text: ""
            }), Yi.info("PluginControlbar", "user trigger action [togglePlayLoop], status [" + e + "]."), t.stopPropagation(), t.preventDefault()
        }, e
    }(Xf),
    ip = {
        tag: "mango-control-playnext",
        html: function (t) {
            return '\n    <mango-control-playnext-btn>\n      <svg id="n-next" viewBox="0 0 18 18" width="100%" height="100%">\n        <path d="M11.626 6.457L3.452 1.334C1.937.384.042 1.571.042 3.471v11.057c0 1.9 1.894 3.087 3.41 2.137l8.174-5.123c1.875-1.174 1.875-3.91 0-5.085zM16.5 1c-.825 0-1.5.675-1.5 1.5v13c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5z"></path>\n      </svg>\n    </mango-control-playnext-btn>\n    <mango-control-nextvideoinfo>\n    <div class="u-next-box">\n      <div class="u-next-box-cent">\n        <p class="pic"><img src="" width="130" height="74"><em class="pn-time"></em></p>\n        <h2 class="tit">' + t.locale["controls.next.text"] + '</h2>\n        <p class="n"></p>\n      </div>\n    </div>\n    </mango-control-nextvideoinfo>\n  '
        },
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    np = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(ip, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$domWrap.addClass("control-item").hide(), this.$nextvideo = this.$domWrap.find(".u-next-box")
        }, i.setNextVideoInfo = function (t) {
            void 0 === t && (t = {});
            var e = t,
                i = e.img,
                n = e.title,
                r = e.duration;
            i && n && r ? (this.nextvideoinfo = t, this.$nextvideo.find("img").attr("src", i), this.$nextvideo.find(".n").html(n), this.$nextvideo.find(".pn-time").html(_t(r)), this.$domWrap.css("display", "inline-block")) : this.nextvideoinfo = null
        }, i.playNext = function () {
            if (this.parent.vm._config.webJump) this.parent.vm.requesetRefreshPage();
            else {
                var t = this.parent.vm.getNextPlayUrl();
                if (t) return void(window.location.href = t);
                this.parent.nextvideoinfo && this.parent.nextvideoinfo.url && (window.location.href = this.parent.nextvideoinfo.url)
            }
        }, i.hide = function () {
            this.$domWrap.hide()
        }, i.click = function (t) {
            this.playNext(), this.parent.$emit("playNextVideo"), Yi.info("PluginControlbar", "user trigger action [playNext]."), t.stopPropagation(), t.preventDefault()
        }, e
    }(Xf),
    rp = {
        tag: "mango-volume",
        html: "\n    <mango-volume-state>\n      <mango-volume-state-mute></mango-volume-state-mute>\n      <mango-volume-state-low></mango-volume-state-low>\n      <mango-volume-state-high></mango-volume-state-high>\n    </mango-volume-state>\n    <mango-volume-bar>\n      <mango-volume-bar-wrap>\n        <mango-volume-bar-bg></mango-volume-bar-bg>\n        <mango-volume-bar-all>\n          <mango-volume-bar-ball></mango-volume-bar-ball>\n        </mango-volume-bar-all>\n        <mango-volume-bar-track></mango-volume-bar-track>\n      </mango-volume-bar-wrap>\n    </mango-volume-bar>\n  ",
        alignRight: !0,
        animate: {
            icon: '\n    <svg class="icon n-voice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">\n\t<path style="fill:none;" d="M10.383,2.904c-0.145-0.06-0.651-0.222-1.09,0.217l-2,2C6.727,5.688,5.973,6,5.171,6H4\n\t\tC2.897,6,2,6.897,2,8v2c0,1.103,0.897,2,2,2h1.171c0.801,0,1.555,0.312,2.122,0.879l2,2c0.438,0.438,0.944,0.277,1.09,0.217\n\t\tC10.527,15.036,11,14.792,11,14.171V3.829C11,3.208,10.527,2.964,10.383,2.904z"/>\n\t<path d="M11.148,1.057c-1.141-0.472-2.395-0.224-3.269,0.65l-2,2C5.69,3.896,5.438,4,5.171,4H4C1.794,4,0,5.794,0,8v2\n\t\tc0,2.206,1.794,4,4,4h1.171c0.267,0,0.519,0.104,0.708,0.293l2,2c0.581,0.582,1.33,0.886,2.102,0.886\n\t\tc0.389,0,0.784-0.077,1.167-0.236C12.291,16.47,13,15.408,13,14.171V3.829C13,2.592,12.291,1.53,11.148,1.057z M11,14.171\n\t\tc0,0.62-0.473,0.864-0.617,0.924c-0.146,0.06-0.651,0.221-1.09-0.217l-2-2C6.727,12.312,5.973,12,5.171,12H4c-1.103,0-2-0.897-2-2\n\t\tV8c0-1.103,0.897-2,2-2h1.171c0.801,0,1.555-0.312,2.122-0.879l2-2c0.439-0.439,0.945-0.277,1.09-0.217\n\t\tC10.527,2.964,11,3.208,11,3.829V14.171z"/>\n\t<path d="M16.895,4.553c-0.247-0.494-0.847-0.694-1.342-0.447c-0.494,0.247-0.694,0.848-0.447,1.342\n\t\tc1.112,2.225,1.112,4.881,0,7.105c-0.247,0.494-0.046,1.095,0.447,1.342C15.696,13.966,15.849,14,15.999,14\n\t\tc0.367,0,0.72-0.203,0.896-0.553C18.287,10.663,18.287,7.337,16.895,4.553z"/>\n</svg>\n\n    <svg class="icon n-voice-no" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">\n\t<path d="M2.707,1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14,14C15.488,16.902,15.744,17,16,17\n\t\ts0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L2.707,1.293z"/>\n\t<path d="M10.383,15.096c-0.146,0.06-0.651,0.221-1.09-0.217l-2-2C6.727,12.312,5.973,12,5.171,12H4c-1.103,0-2-0.897-2-2V8\n\t\tc0-0.701,0.364-1.317,0.912-1.674L1.494,4.908C0.59,5.642,0,6.748,0,8v2c0,2.206,1.794,4,4,4h1.171\n\t\tc0.267,0,0.519,0.104,0.708,0.293l2,2c0.581,0.582,1.33,0.886,2.102,0.886c0.389,0,0.784-0.077,1.167-0.236\n\t\tc0.554-0.229,1.004-0.599,1.323-1.059l-1.51-1.51C10.867,14.835,10.509,15.043,10.383,15.096z"/>\n\t<path d="M9.293,3.121c0.439-0.439,0.945-0.276,1.09-0.217C10.527,2.964,11,3.208,11,3.829v3.757l2,2V3.829\n\t\tc0-1.237-0.709-2.299-1.852-2.772c-1.142-0.473-2.395-0.224-3.269,0.65L6.5,3.086L7.914,4.5L9.293,3.121z"/>\n\t<path d="M15.364,11.95l1.517,1.517c0.004-0.007,0.01-0.012,0.014-0.02c1.392-2.785,1.392-6.11,0-8.895\n\t\tc-0.247-0.494-0.847-0.694-1.342-0.447c-0.494,0.247-0.694,0.848-0.447,1.342C16.119,7.475,16.198,9.858,15.364,11.95z"/>\n</svg>\n\n    '
        },
        layout: "vertical",
        defaultEvent: {
            mousedown: "mousedown",
            mouseleave: "mouseleave"
        }
    },
    op = (d((qf = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).parent.preVolume = 0, n.option = N(rp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$state = this.$domWrap.find("mango-volume-state"), this.$bar = this.$domWrap.find("mango-volume-bar"), this.$all = this.$domWrap.find("mango-volume-bar-all"), this.$bg = this.$domWrap.find("mango-volume-bar-bg"), this.layout = "vertical" === this.option.layout ? "vertical" : "horizonal", this.option.icon && this.option.icon.mute && this.option.icon.low ? (this.option.icon.high = this.option.icon.high || this.option.icon.low, this.$mute = this.$domWrap.find("mango-volume-state-mute"), this.$low = this.$domWrap.find("mango-volume-state-low"), this.$high = this.$domWrap.find("mango-volume-state-high"), this.$mute.html(this.option.icon.mute), this.$low.html(this.option.icon.low), this.$high.html(this.option.icon.high)) : this.option.bitmap || (this.animate = !0, this.$state.html(this.option.animate.icon)), this.$domWrap.addClass("control-item " + this.layout), this.changeState()
        }, i.inited = function () {
            this.parent.volume = this.parent.userSetting.volume, this.update()
        }, i.destroy = function () {
            t.prototype.destroy.call(this)
        }, i.changeState = function () {
            this.parent.muted || 0 === this.parent.volume ? this.state = "mute" : this.parent.volume > 0 && this.parent.volume <= .5 ? this.state = "low" : this.parent.volume > .5 && this.parent.volume <= 1 && (this.state = "high"), this.$domWrap.removeClass("mute low high"), this.$domWrap.addClass(this.state)
        }, i.adjust = function (t) {
            var e = Math.floor(100 * this.parent.volume);
            e = t > 0 ? Math.min(e + 10, 100) : Math.max(e - 10, 0), this.parent.volume = e / 100, this.parent.children.tip && this.parent.children.tip.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: this.locale["controls.tip.volume"] + " ",
                text: e + "%"
            })
        }, i.click = function (t) {
            var e = t.path || function (t) {
                var e = [];
                if (null === t) return e;
                for (e.push(t); null !== t.parentNode;) t = t.parentNode, e.push(t);
                return e
            }(t.target);
            return -1 !== e.indexOf(this.$state[0]) ? (this.stateClick(t), "state") : -1 !== e.indexOf(this.$bar[0]) ? (this.barClick(t), "bar") : "padding"
        }, i.stateClick = function () {
            var t = this.parent.children.tip,
                e = this.parent.volume;
            0 === e || this.parent.muted ? (this.parent.volume = this.parent.preVolume || .5, this.parent.muted = !1) : (this.parent.preVolume = e, this.parent.volume = 0, this.parent.muted = !0), this.changeState(), t && t.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: this.locale["controls.tip.volume"] + " ",
                text: Math.floor(100 * this.parent.volume) + "%"
            }), Yi.info("PluginControlbar", "user trigger action [adjustVolume], volume [" + this.parent.volume + "]")
        }, i.barClick = function (t) {
            var e = "vertical" === this.layout ? 1 - t.offsetY / this.$bg[0].offsetHeight : t.offsetX / this.$bg[0].offsetWidth;
            this.parent.volume = e < 0 ? 0 : e > 1 ? 1 : e, this.update(), this.parent.children.tip && this.parent.children.tip.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: this.locale["controls.tip.volume"] + " ",
                text: Math.floor(100 * this.parent.volume) + "%"
            }), Yi.info("PluginControlbar", "user trigger action [adjustVolume], volume [" + this.parent.volume + "]")
        }, i.mouseleave = function (t) {
            this.dragEnd()
        }, i.mousedown = function (t) {
            "bar" === this.click(t) && (this.startX = "vertical" === this.layout ? t.clientY : t.clientX, this.startVolume = this.parent.volume, Te(window, "mousemove", this.draging), Te(window, "mouseup", this.dragEnd), Te(window, "contextmenu", this.dragEnd))
        }, i.update = function () {
            this.changeState();
            var t = this.parent.muted ? 0 : this.parent.volume;
            "vertical" === this.layout ? this.$all.css("height", 100 * t + "%") : this.$all.css("width", 100 * t + "%")
        }, i.draging = function (t) {
            this.endX = "vertical" === this.layout ? t.clientY : t.clientX;
            var e = "vertical" === this.layout ? (this.startX - this.endX) / this.$bg[0].offsetHeight : (this.endX - this.startX) / this.$bg[0].offsetWidth,
                i = +(this.startVolume + e).toFixed(2);
            this.parent.volume = i < 0 ? 0 : i > 1 ? 1 : i, this.parent.muted = !1, this.parent.children.tip && this.parent.children.tip.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: this.locale["controls.tip.volume"] + " ",
                text: Math.floor(100 * this.parent.volume) + "%"
            })
        }, i.dragEnd = function () {
            this.startX = 0, this.startVolume = 0, Se(window, "mousemove", this.draging), Se(window, "mouseup", this.dragEnd), Se(window, "contextmenu", this.dragEnd)
        }, e
    }(Xf)).prototype, "draging", [Kc], p(qf.prototype, "draging"), qf.prototype), d(qf.prototype, "dragEnd", [Kc], p(qf.prototype, "dragEnd"), qf.prototype), qf),
    sp = {
        tag: "mango-progressbar",
        cls: "u-control-loading",
        html: '\n    <mango-progressbar-wrap class="u-control-loading-box">\n      <mango-progressbar-bg class="loadingbg"></mango-progressbar-bg>\n      <mango-progressbar-buffer class="buffered"></mango-progressbar-buffer>\n      <mango-progressbar-all class="loading">\n        <mango-progressbar-ball class="button progress-button"></mango-progressbar-ball>\n      </mango-progressbar-all>\n      <mango-progressbar-stars class="stars"></mango-progressbar-stars>\n      <mango-progressbar-star-preview class="starspreview">\n\n      </mango-progressbar-star-preview>\n\n      \x3c!-- 时间轴预览功能 --\x3e\n      <mango-progressbar-preview class="message">\n        <dl>\n            <dd>\n                <div class="preview"></div>\n                <em class="time"></em>\n            </dd>\n            <dt class="title"></dt>\n        </dl>\n      </mango-progressbar-preview>\n\n      <mango-progressbar-previewimg class="player-previewlist"></mango-progressbar-previewimg>\n\n      <mango-progressbar-previewtime class="previewtime-message">\n        <div class="message-time" node-type="time-preview">00:00</div>\n      </mango-progressbar-previewtime>\n\n      <mango-progressbar-preview-btn class="button progress-indicator">\n        <mango-progressbar-preview-line></mango-progressbar-preview-line>\n      </mango-progressbar-preview-btn>\n\n      \x3c!-- 打点数据功能 --\x3e\n      <mango-progressbar-keypoints></mango-progressbar-keypoints>\n    </mango-progressbar-wrap>\n  '
    },
    ap = /iPad/i.test(navigator.userAgent),
    hp = (d((Gf = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(sp, k(i) ? i : {}), n.visiable = !1 !== i, n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.keyPoints = null, this.keyframes = null, this.isShowTips = !0, this.$wrap = this.$domWrap.find("mango-progressbar-wrap"), this.$buffer = this.$domWrap.find("mango-progressbar-buffer"), this.$all = this.$domWrap.find("mango-progressbar-all"), this.$tip = this.$domWrap.find("mango-progressbar-preview"), this.$preview = this.$domWrap.find(".message .preview"), this.$track = this.$domWrap.find("mango-progressbar-track"), this.$line = this.$domWrap.find(".mango-progressbar-line"), this.$ball = this.$domWrap.find("mango-progressbar-ball"), this.$previewBtn = this.$domWrap.find("mango-progressbar-preview-btn"), this.$points = this.$domWrap.find("mango-progressbar-keypoints"), this.$previewimg = this.$domWrap.find("mango-progressbar-previewimg"), this.$starSegmentList = this.$domWrap.find("mango-progressbar-stars"), this.$starPreview = this.$domWrap.find("mango-progressbar-star-preview"), !this.visiable && this.$domWrap.css("visibility", "hidden"), ap && this.$domWrap.addClass("u-control-loading-ipad"), this.addWrapEvent()
        }, i.destroy = function () {
            this.removeWrapEvent(), this.watch_screen && this.watch_screen(), t.prototype.destroy.call(this)
        }, i.initKeyPoints = function (t, e) {
            this.videoinfo = this.parent.videoinfo, this.keyPoints = t, this.duration = e, this.createPoints()
        }, i.reset = function () {
            this.$starSegmentList.html(""), this.$points.html("")
        }, i.initSegments = function (t) {
            this.starSegments = t
        }, i.setSegment = function (t) {
            var e = this;
            this.currentStartSegment = this.starSegments.find(function (e) {
                return e.tag == t
            }), this.currentSegments = this.currentStartSegment ? this.currentStartSegment.segments : [];
            var i = "",
                n = this.parent.currentTime;
            this.currentSegments.forEach(function (t) {
                var n = t.startTime / e.duration * 100,
                    r = (t.endTime - t.startTime) / e.duration * 100;
                i += '<div class="role" style="width: ' + r + "%;left:" + n + '%;background-color: rgba(240, 102, 255, .5);"></div>'
            }), this.$starSegmentList[0].innerHTML = i, i = "";
            var r = this.currentStartSegment || {
                    avatar: "",
                    cp_list: []
                },
                o = r.avatar,
                s = r.cp_list;
            if (s && s.length > 0 ? (i += '<div class="avatar cplist" style="left:-100%;visibility:hidden;">', s.slice(0, 2).forEach(function (t) {
                    i += '<div class="avatar-mask"><img src="' + t.avatar + '" /></div>'
                }), i += "</div>") : i = '<div class="avatar" style="left:-100%;visibility:hidden;"><div class="avatar-mask"><img src="' + o + '" /></div></div>', this.$starPreview[0].innerHTML = i, this.currentSegments.length > 0)
                if (-1 === this.findSegmentIndexByTime(n)) {
                    var a = this.findNearSegment(n),
                        h = a.nearSegment;
                    a.index;
                    this.jumpToSegment(h)
                } else this.showStarSegmentTag(this.parent.currentTime);
            this.parent.play()
        }, i.endOfSegment = function () {
            if (this.currentSegments && 0 !== this.currentSegments.length) {
                var t = this.parent.currentTime,
                    e = this.findSegmentIndexByTime(t, 1);
                if (-1 !== e) {
                    var i = this.currentSegments[e],
                        n = this.currentSegments[e + 1],
                        r = this.currentSegments[this.currentSegments.length - 1];
                    this.parent.currentTime > r.endTime && this.parent.endOfVideo(), i && n && this.parent.currentTime > i.endTime && this.parent.currentTime - i.endTime < 1 && this.jumpToSegment(n)
                }
            }
        }, i.jumpToSegment = function (t) {
            this.parent.seek(t.startTime), Yi.info("controlbar", "jump to star segment: [" + t.startTime + ", " + t.endTime + "]"), this.showStarSegmentTag(t.startTime)
        }, i.showStarSegmentTag = function (t) {
            var e = this,
                i = Math.max(t / this.duration * 100, 2);
            this.$starPreview.find(".avatar").css("visibility", "visible").css("left", i + "%"), this.parent._mousemove(), this.starPreviewTimer && clearTimeout(this.starPreviewTimer), this.starPreviewTimer = setTimeout(function () {
                e.$starPreview.find(".avatar").css("visibility", "hidden")
            }, 2e3)
        }, i.findNearSegment = function (t) {
            var e = 0;
            if (0 == this.currentSegments.length) return null;
            for (var i = 0; i < this.currentSegments.length - 1; i++) {
                var n = this.currentSegments[i],
                    r = this.currentSegments[i + 1];
                if (r && n.endTime < t && t < r.startTime) {
                    e = i + 1;
                    break
                }
            }
            return {
                nearSegment: this.currentSegments[e],
                index: e
            }
        }, i.findSegmentIndexByTime = function (t, e) {
            void 0 === e && (e = 0);
            for (var i = -1, n = 0; n < this.currentSegments.length; n++) {
                var r = this.currentSegments[n];
                if (r.startTime < t && t < r.endTime + e) {
                    i = n;
                    break
                }
            }
            return i
        }, i.initFrames = function (t) {
            this.keyframes = t
        }, i.preFetch = function () {
            var t = this;
            this.prefetchTimer && clearTimeout(this.prefetchTimer), this.prefetchTimer = setTimeout(function () {
                t.keyframes && t.keyframes.images && t.keyframes.images.forEach(function (t) {
                    (new Image).src = t
                })
            }, 1e3)
        }, i.createPoints = function () {
            var t = this;
            this.$points.html(""), this.skipStartTime = Number(this.keyPoints.start.split("|")[0]) || 0, this.skipEndTime = Number(this.keyPoints.end.split("|")[0]) || 0, this.skipStartTime > 0 && this.skipStartTime < this.duration && this.createPoint(this.skipStartTime), this.skipEndTime > 0 && this.skipStartTime < this.duration && this.createPoint(this.skipEndTime), this.points = this.keyPoints.content.map(function (e) {
                var i = e.split("|");
                return t.createPoint(i[0], i[1]), {
                    time: i[0],
                    title: i[1]
                }
            })
        }, i.getPointByTime = function (t) {
            return this.points.find(function (e) {
                return Math.abs(e.time - t) < 10
            })
        }, i.createPoint = function (t, e) {
            var i;
            i = Ie('<mango-progressbar-keypoint class="button point"\n          data-title=' + e + " data-time=" + t + ' style="left:' + t / this.duration * 100 + '%">\n      </mango-progressbar-keypoint>'), this.$points.append(i)
        }, i.addWrapEvent = function () {
            this.parent.config.isIpad ? (this.$domWrap.on("touchstart", this.mousedown), this.$domWrap.on("touchmove", this.tipShow), this.$domWrap.on("touchend", this.tipEnd), this.$domWrap.on("touchcancel", this.tipEnd)) : (this.$domWrap.on("mousedown", this.mousedown), this.$domWrap.on("mousemove", this.tipShow), this.$domWrap.on("mouseleave", this.tipEnd))
        }, i.removeWrapEvent = function () {
            this.parent.config.isIpad ? (this.$domWrap.off("touchstart", this.mousedown), this.$domWrap.off("touchmove", this.tipShow), this.$domWrap.off("touchend", this.tipEnd), this.$domWrap.off("touchcancel", this.tipEnd)) : (this.$domWrap.off("mousedown", this.mousedown), this.$domWrap.off("mousemove", this.tipShow), this.$domWrap.off("mouseleave", this.tipEnd))
        }, i.progress = function () {
            var t = 0;
            try {
                t = Di.bufferInfo(this.parent, this.parent.currentTime, .5).end
            } catch (t) {}
            var e = t / this.duration * 100 + "%";
            this.$buffer.css("width", e)
        }, i.update = function () {
            var t = this.resize();
            this.$all.css("width", 100 * t.percent + "%"), this.endOfSegment()
        }, i.resize = function () {
            var t = void 0 !== this._currentTime ? this._currentTime : this.parent.currentTime,
                e = {
                    percent: t ? t / this.duration : 0,
                    xoffset: this.$ball[0].offsetLeft,
                    yoffset: parseInt(this.parent.vm.container.height) - 50
                };
            return this.parent.emit("progressbarUpdate", e), e
        }, i.getFrameImageList = function (t, e, i, n) {
            if (i) {
                var r, o = this.$previewimg,
                    s = 130,
                    a = 125,
                    h = (this.$previewimg.find(".player-previewlist-bg").length, t.frame);
                if (h.imgSize) {
                    var c = h.imgSize || "";
                    s = c.split("*")[0] || s, c.split("*")[1] || 100
                }
                if ("115*65" == h.imgSize || 0 == h.images.length) return !1;
                var u = this.$domWrap[0].offsetWidth;
                r = 5 * Math.ceil(Math.ceil(u / a) / 2), o.css({
                    width: 2 * Math.ceil(u / a) * a + 178 + "px",
                    marginLeft: "-" + (2 * Math.ceil(u / a) * a + 178) / 2 + "px"
                });
                var l = [],
                    d = e = Math.ceil(e),
                    f = r,
                    p = [],
                    m = [],
                    v = d,
                    g = d,
                    y = [],
                    _ = _t(e);
                for (l.push(cp(h, e, s)); v <= d + f;)
                    if ((v += 5) <= n) m.push(cp(h, v, s));
                    else {
                        m.push({
                            image: "none",
                            x: 0,
                            y: 0,
                            scale: 0
                        })
                    } for (; g >= d - f;)
                    if ((g -= 5) <= 0) {
                        p.unshift({
                            image: "none",
                            x: 0,
                            y: 0
                        })
                    } else p.unshift(cp(h, g, s));
                var b = p.concat(l, m),
                    w = "",
                    k = "";
                switch (s) {
                    case "130":
                        k = "previwlist-size"
                }
                for (var E = 0; E < b.length; E++) E == Math.ceil(b.length / 2) - 1 ? (w = "previewlist-current " + k, b[E].scale = 178 / s) : (w = "", b[E].scale = a / s), y.push('<div class="player-previewlist-bg ' + w + '">\n          <div class="preview" style="\n          -o-transform:scale(' + b[E].scale + ");\n          -moz-transform:scale(" + b[E].scale + ");\n          -webkit-transform:scale(" + b[E].scale + ");\n          transform:scale(" + b[E].scale + ");\n          background-image:url('" + b[E].image + "');\n          background-position:-" + b[E].x + "px -" + b[E].y + "px;\n          width:" + b[E].w + "px;\n          height:" + b[E].h + 'px;"></div>\n          <p class="previwlist-mask"> ' + _ + "</p>\n          </div>");
                this.$previewimg.html(y.join("")).show()
            }
        }, i.mousedown = function (t) {
            if (t.target !== this.$tip[0]) {
                var e, i;
                if ("mousedown" == t.type) e = t.clientX, i = t.offsetX;
                else {
                    var n = t.target.getBoundingClientRect();
                    i = t.targetTouches[0].pageX - n.left, e = t.changedTouches[0].clientX
                }
                this.startX = e, this._currentTime = i / this.$domWrap[0].offsetWidth * this.duration, this.startTime = this._currentTime, ap ? (Te(window, "touchmove", this.draging), Te(window, "touchend", this.dragEnd), Te(window, "touchcancel", this.dragEnd)) : (Te(window, "mousemove", this.draging), Te(window, "mouseup", this.dragEnd), Te(window, "contextmenu", this.dragEnd)), t.stopPropagation(), t.preventDefault()
            }
        }, i.draging = function (t) {
            var e;
            e = "mousemove" == t.type ? t.pageX : t.changedTouches[0].clientX, this.endX = e;
            var i = e - this.$domWrap[0].getBoundingClientRect().left,
                n = (this.endX - this.startX) / this.$domWrap[0].offsetWidth * this.duration,
                r = +(this.startTime + n).toFixed(2);
            this._currentTime = r < 0 ? 0 : r > this.duration ? this.duration : r, this.parent.userIsDragging = !0, this.update();
            var o = (i = Math.min(Math.max(0, i), this.$wrap[0].offsetWidth)) / this.$wrap[0].offsetWidth * this.duration;
            e - this.$domWrap[0].getBoundingClientRect().left <= 0 ? o = 0 : e - this.$domWrap[0].getBoundingClientRect().right >= 0 && (o = this.duration), this.$domWrap[0].offsetWidth > 600 && this.duration > 38 && (this.isShowTips = !1, this.getFrameImageList(this.videoinfo, o, !0, this.duration)), t.preventDefault()
        }, i.dragEnd = function () {
            this.parent.adlock || (this.update(), this.startX = 0, this.startTime = 0, this.parent.seekVideo(this._currentTime)), Yi.info("PluginControlbar", "user trigger action [seek], time [" + this.parent.currentTime + "]"), this._currentTime = void 0, ap ? (Se(window, "touchmove", this.draging), Se(window, "touchend", this.dragEnd), Se(window, "touchcancel", this.dragEnd)) : (Se(window, "mousemove", this.draging), Se(window, "mouseup", this.dragEnd), Se(window, "contextmenu", this.dragEnd)), this.isShowTips = !0, this.$previewimg.css("display", "none"), this.parent.userIsDragging && ap && this.parent.emit("progressbarHover", {
                hover: !1
            }), this.parent.userIsDragging = !1
        }, i.tipShow = function (t) {
            if (this.parent.emit("progressbarHover", {
                    hover: !0
                }), this.keyframes) {
                if (t.target === this.$tip[0] || t.target === this.$preview[0] || t.target === this.$ball[0]) return this.$tip.css("display", "none"), void this.$previewBtn.css("display", "none");
                var e = t.offsetX / this.$domWrap[0].offsetWidth * this.duration,
                    i = _t(e = e < 0 ? 0 : e > this.duration ? this.duration : e),
                    n = cp(this.keyframes, e),
                    r = this.getPointByTime(e);
                if (n && !this.isShowTips) return this.$tip.css("display", "none"), this.$previewBtn.css("display", "none"), !1;
                this.$tip.css("display", "inline-block");
                var o = t.offsetX - this.$tip[0].offsetWidth / 2,
                    s = this.$domWrap[0].offsetWidth - this.$tip[0].offsetWidth - 10;
                if (o = o < 10 ? 10 : o > s ? s : o, this.$tip.find(".time").text(i), this.$tip.css("left", o + "px"), n) {
                    var a = this.$tip.find(".preview");
                    a.css("width", n.w + "px"), a.css("height", n.h + "px"), a.css("backgroundImage", "url(" + n.image + ")"), a.css("transform", "scale(" + n.scale + ")"), a.css("-webkit-transform", "scale(" + n.scale + ")"), a.css("-o-transform", "scale(" + n.scale + ")"), a.css("-moz-transform", "scale(" + n.scale + ")"), a.css("backgroundPosition", "-" + n.x + "px -" + n.y + "px"), this.$tip.removeClass("message2")
                } else this.$tip.addClass("message2");
                r && r.title ? (this.$tip.find(".title").text(r.title), this.$tip.addClass("message1")) : this.$tip.removeClass("message1"), this.$previewBtn.css("display", "inline-block"), this.$previewBtn.css("left", t.offsetX + "px")
            }
        }, i.tipEnd = function () {
            this.parent.userIsDragging || (this.$tip.css("display", "none"), this.$previewBtn.css("display", "none"), this.parent.emit("progressbarHover", {
                hover: !1
            }))
        }, e
    }(Xf)).prototype, "mousedown", [Kc], p(Gf.prototype, "mousedown"), Gf.prototype), d(Gf.prototype, "draging", [Kc], p(Gf.prototype, "draging"), Gf.prototype), d(Gf.prototype, "dragEnd", [Kc], p(Gf.prototype, "dragEnd"), Gf.prototype), d(Gf.prototype, "tipShow", [Kc], p(Gf.prototype, "tipShow"), Gf.prototype), d(Gf.prototype, "tipEnd", [Kc], p(Gf.prototype, "tipEnd"), Gf.prototype), Gf),
    cp = function (t, e, i) {
        var n, r, o, s, a, h, c, u = i || 178;
        if ("115*65" == t.imgSize) return null;
        if (t.imgSize) {
            var l = t.imgSize || "";
            h = l.split("*")[0] || u, c = l.split("*")[1] || 100
        }
        if (t.second && t.second[0] && t.images) {
            n = (s = (r = t.second.join("|").split("|")).length) - 1;
            for (var d = 0; d < s - 1; d++)
                if (e >= r[d] && e < r[d + 1]) {
                    n = d;
                    break
                } return a = n % 100, {
                idx: o = Math.floor(n / 100),
                scale: u / h,
                index: n,
                image: t.images[o],
                x: a % 10 * h,
                y: Math.floor(a / 10) * c,
                w: h,
                h: c
            }
        }
        return null
    },
    up = {
        tag: "mango-progresstime",
        html: "\n    <mango-progresstime-pass>00:00</mango-progresstime-pass\n    ><mango-progresstime-total\n      ><span>/</span\n      ><mango-progresstime-total-value>00:00</mango-progresstime-total-value>\n    </mango-progresstime-total>\n  "
    },
    lp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(up, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$total = this.$domWrap.find("mango-progresstime-total-value"), this.$pass = this.$domWrap.find("mango-progresstime-pass"), this.$domWrap.addClass("control-item")
        }, i.updatePass = function () {
            this.$pass.text(_t(this.parent.currentTime))
        }, i.updateTotal = function (t) {
            this.$total.text(_t(t))
        }, e
    }(Xf),
    dp = '\n<svg id="n-unselected" class="icon n-unselected" viewBox="0 0 12 12" width="100%" height="100%">\n  <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>\n</svg>\n<svg id="n-selected" class="icon n-selected" viewBox="0 0 12 12" width="100%" height="100%">\n  <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M8.646 3.646L5 7.293 3.354 5.646a.5.5 0 0 0-.707.707l2 2a.502.502 0 0 0 .707.001l4-4a.5.5 0 0 0-.708-.708z"></path>\n</svg>\n',
    fp = {
        tag: "mango-setting",
        cls: "u-control-set m-show-btn control-item",
        html: function (t) {
            var e = t.locale;
            return '\n      <a class="btn" href="javascript:;" title="' + e["controls.setting.text"] + '" action="togglePanel">\n        <svg class="icon n-set" id="n-set" viewBox="0 0 18 18" width="100%" height="100%" action="togglePanel">\n        <path d="M11.485 18h-4.97a2.978 2.978 0 0 1-2.121-.879L.879 13.606A2.976 2.976 0 0 1 0 11.485v-4.97c0-.802.312-1.555.879-2.121L4.394.879A2.976 2.976 0 0 1 6.515 0h4.971c.801 0 1.555.312 2.121.879l3.515 3.515A2.98 2.98 0 0 1 18 6.515v4.971c0 .801-.312 1.555-.879 2.121l-3.515 3.515a2.98 2.98 0 0 1-2.121.878zM6.515 2c-.264 0-.521.107-.707.293L2.293 5.808A1.006 1.006 0 0 0 2 6.515v4.971c0 .263.107.521.293.707l3.515 3.515c.186.185.443.292.707.292h4.971c.263 0 .521-.107.707-.293l3.515-3.515a1.01 1.01 0 0 0 .292-.707v-4.97c0-.263-.107-.521-.293-.707l-3.515-3.515A1.006 1.006 0 0 0 11.485 2h-4.97z"></path><path d="M10.243 13H7.757a.997.997 0 0 1-.707-.293L5.293 10.95A1 1 0 0 1 5 10.243V7.757c0-.265.105-.52.293-.707L7.05 5.293A1 1 0 0 1 7.757 5h2.485c.265 0 .52.105.707.293l1.757 1.757a.996.996 0 0 1 .294.707v2.485c0 .265-.105.52-.293.707l-1.757 1.757a.996.996 0 0 1-.707.294zm-2.072-2h1.657L11 9.829V8.171L9.829 7H8.171L7 8.171v1.657L8.171 11z"></path>\n      </svg>\n      </a>\n      <div class="u-set-box">\n          <dl class="ucbox">\n              <dt class="name">' + e["controls.setting.player"] + '</dt>\n              <dd class="selbox">\n                  <a class="on" style="display:none" href="javascript:;" action="useHTML5">' + dp + 'HTML5</a>\n                  <a href="javascript:;" action="useFlash">' + dp + 'FLASH</a>\n              </dd>\n              <dd class="jump"> <a class="" href="javascript:;" action="switchSkipStart">' + dp + e["controls.setting.skipstart"] + "</a></dd>\n          </dl>\n      </div>\n    </li>"
        },
        alignRight: !0,
        defaultEvent: {
            click: "click",
            touchstart: "click",
            mouseout: "mouseout",
            mouseover: "mouseover"
        }
    },
    pp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(fp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$domWrap.attr("action", "togglePanel"), this.$btn = this.$domWrap.find(".btn"), this.$panel = this.$domWrap.find(".u-set-box"), this.isShow = !1
        }, i.inited = function () {
            this.resetUI()
        }, i.resetUI = function () {
            this.parent.userSetting.isSkip ? this.$panel.find('[action="switchSkipStart"]').addClass("on") : this.$panel.find('[action="switchSkipStart"]').removeClass("on")
        }, i.switchSkipStart = function () {
            this.parent.userSetting.isSkip = !this.parent.userSetting.isSkip, zi.set("mango-skip-start", this.parent.userSetting.isSkip ? "1" : "0"), this.resetUI(), Yi.info("PluginControlbar", "user trigger action [toggleSkipStart], status [" + this.parent.userSetting.isSkip + "]")
        }, i.hide = function () {
            this.$domWrap.removeClass("on")
        }, i.togglePanel = function () {
            this.$domWrap.hasClass("on") ? this.$domWrap.removeClass("on") : this.$domWrap.addClass("on")
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) && (this[e](t), t.stopPropagation(), t.preventDefault())
        }, i.mouseover = function (t) {
            this.hideTimer && clearTimeout(this.hideTimer)
        }, i.mouseout = function (t) {
            var e = this;
            this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                e.hide()
            }, 200)
        }, e
    }(Xf),
    mp = {
        tag: "mango-webscreen",
        html: function (t) {
            return '\n    <a class="btn" href="javascript:void(0);">\n      <svg class="icon n-web-zoom"  viewBox="0 0 18 18">\n\t<path d="M14,18H4c-2.206,0-4-1.794-4-4V4c0-2.206,1.794-4,4-4h10c2.206,0,4,1.794,4,4v10C18,16.206,16.206,18,14,18z M4,2\n\t\tC2.897,2,2,2.897,2,4v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H4z"/>\n\t<path d="M5,9C4.448,9,4,8.552,4,8V6c0-1.103,0.897-2,2-2h2c0.552,0,1,0.448,1,1S8.552,6,8,6H6v2C6,8.552,5.552,9,5,9z"/>\n\t<path d="M12,14h-2c-0.552,0-1-0.448-1-1s0.448-1,1-1h2v-2c0-0.552,0.448-1,1-1s1,0.448,1,1v2C14,13.103,13.103,14,12,14z"/>\n</svg>\n\n      <svg class="icon n-web-zoom-s" viewBox="0 0 18 18">\n\t<path style="fill:none;" d="M14,2H4C2.897,2,2,2.897,2,4v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V4C16,2.897,15.103,2,14,2z\n\t\t M7,9H5C4.448,9,4,8.553,4,8s0.448-1,1-1h2V5c0-0.553,0.448-1,1-1s1,0.447,1,1v2C9,8.103,8.103,9,7,9z M13,11h-2v2\n\t\tc0,0.553-0.448,1-1,1s-1-0.447-1-1v-2c0-1.103,0.897-2,2-2h2c0.553,0,1,0.447,1,1S13.553,11,13,11z"/>\n\t<path d="M14,0H4C1.794,0,0,1.794,0,4v10c0,2.206,1.794,4,4,4h10c2.206,0,4-1.794,4-4V4C18,1.794,16.206,0,14,0z M16,14\n\t\tc0,1.103-0.897,2-2,2H4c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h10c1.103,0,2,0.897,2,2V14z"/>\n\t<path d="M9,5c0-0.553-0.448-1-1-1S7,4.447,7,5v2H5C4.448,7,4,7.447,4,8s0.448,1,1,1h2c1.103,0,2-0.897,2-2V5z"/>\n\t<path d="M13,9h-2c-1.103,0-2,0.897-2,2v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2h2c0.553,0,1-0.447,1-1S13.553,9,13,9z"/>\n</svg>\n\n    </a>\n    <div class="u-control-tips"><p>' + t.locale["controls.webscreen.text"] + "</p></div>\n  "
        },
        alignRight: !0,
        defaultEvent: {
            click: "click"
        }
    },
    vp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).state = "websmall", n.option = N(mp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.changeState(this.state), this.$domWrap.addClass("control-item"), this.$full = this.$domWrap.find("mango-webscreen-full"), this.$small = this.$domWrap.find("mango-webscreen-small")
        }, i.changeState = function (t) {
            var e = "websmall" === t ? "webfull" : "websmall";
            _e(this.parent.$dom, t), be(this.parent.$dom, e)
        }, i.onFullScreenChange = function () {
            this.parent.isFullscreen && "webfull" === this.state && this.exit()
        }, i.enter = function () {
            this.state = "webfull", this.changeState(this.state), _e(this.parent.$wrapper, "webfullscreen"), Ae(document.documentElement, {
                overflow: "hidden"
            })
        }, i.exit = function () {
            this.state = "websmall", this.changeState(this.state), be(this.parent.$wrapper, "webfullscreen"), Ae(document.documentElement, {
                overflow: "auto"
            })
        }, i.onEscKeyPressed = function (t) {
            "webfull" === this.state && (this.exit(), this.parent.emit("webFullScreenChange", {
                state: this.state
            }), Yi.info("PluginControlbar", "user trigger action [toggleWebScreen], status [" + this.state + "]."))
        }, i.toggleWebFullScreen = function () {
            "websmall" === this.state ? this.enter() : this.exit(), this.parent.emit("webFullScreenChange", {
                state: this.state
            })
        }, i.click = function (t) {
            this.toggleWebFullScreen(), Yi.info("PluginControlbar", "user trigger action [toggleWebScreen], status [" + this.state + "]."), t.stopPropagation(), t.preventDefault()
        }, e
    }(Xf),
    gp = {
        tag: "mango-control-pip",
        html: function (t) {
            return '\n  <a class="btn" href="javascript:void(0);">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" xml:space="preserve">\n      <g><path d="M14,18H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h10c2.2,0,4,1.8,4,4v10C18,16.2,16.2,18,14,18z M4,2C2.9,2,2,2.9,2,4v10 c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z"/></g>\n      <g><path d="M10.5,13h2c0.8,0,1.5-0.7,1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5h-2C9.7,10,9,10.7,9,11.5v0C9,12.3,9.7,13,10.5,13z"/></g>\n    </svg>\n  </a>\n  <div class="u-control-tips"><p>' + t.locale["controls.pip.text"] + "</p></div>\n  "
        },
        alignRight: !0,
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    yp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).state = "nopiping", n.option = N(gp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.changeState(this.state), this.$domWrap.addClass("control-item")
        }, i.changeState = function (t) {
            var e = "nopiping" === t ? "piping" : "nopiping";
            _e(this.parent.$dom, t), be(this.parent.$dom, e)
        }, i.exit = function () {
            this.state = "nopiping", this.changeState(this.state), this.parent.$fullscreen(!1, "container")
        }, i.onTimeUpdate = function () {}, i.pictureInPictureChange = function () {}, i.click = function () {
            if (this.parent.isPipMode) this.parent.exitPictureInPicture();
            else {
                this.parent.requestPictureInPicture(), this.parent.vm.enableFloatWindow(!1);
                var t = this.parent.children,
                    e = t.webscreen,
                    i = t.screen;
                e && e.exit(), i && i.exit(), this.parent.play(), this.parent.ended && !this.parent.vm._config.useFlash && (Yi.info("PluginControlbar", "send player event [videoRefresh]."), this.parent.vm.emit("videoRefresh"))
            }
            Yi.info("PluginControlbar", "user trigger action [togglePiP].")
        }, e
    }(Xf),
    _p = {
        tag: "mango-screen",
        html: '\n    <mango-screen-full>\n      <svg id="n-zoom-s" viewBox="0 0 18 18" width="100%" height="100%">\n        <path d="M6 0a1 1 0 0 0-1 1v2c0 .178-.031.347-.075.511L1.707.293A.999.999 0 1 0 .293 1.707l3.218 3.218A1.96 1.96 0 0 1 3 5H1a1 1 0 0 0 0 2h2c2.206 0 4-1.794 4-4V1a1 1 0 0 0-1-1zM17 13a1 1 0 0 0 0-2h-2c-2.206 0-4 1.794-4 4v2a1 1 0 0 0 2 0v-2c0-.178.031-.347.075-.511l3.218 3.218a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.218-3.218A1.96 1.96 0 0 1 15 13h2zM6 16H4c-1.103 0-2-.897-2-2v-2a1 1 0 0 0-2 0v2c0 2.206 1.794 4 4 4h2a1 1 0 0 0 0-2zM14 0h-2a1 1 0 0 0 0 2h2c1.103 0 2 .897 2 2v2a1 1 0 0 0 2 0V4c0-2.206-1.794-4-4-4z"></path>\n      </svg>\n    </mango-screen-full>\n    <mango-screen-small>\n      <svg id="n-zoom" viewBox="0 0 18 18" width="100%" height="100%">\n        <path d="M6 0H4C1.794 0 0 1.794 0 4v2a1 1 0 0 0 2 0V4c0-1.103.897-2 2-2h2a1 1 0 0 0 0-2zM17 11a1 1 0 0 0-1 1v2c0 1.103-.897 2-2 2h-2a1 1 0 0 0 0 2h2c2.206 0 4-1.794 4-4v-2a1 1 0 0 0-1-1zM6 16H4c-1.103 0-2-.897-2-2v-2a1 1 0 0 0-2 0v2c0 2.206 1.794 4 4 4h2a1 1 0 0 0 0-2zM14 0h-2a1 1 0 0 0 0 2h2c1.103 0 2 .897 2 2v2a1 1 0 0 0 2 0V4c0-2.206-1.794-4-4-4z"></path>\n      </svg>\n    </mango-screen-small>\n  ',
        alignRight: !0,
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    bp = (d((Kf = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).state = "small", n.option = N(_p, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.changeState(this.state), this.$domWrap.addClass("control-item"), this.$full = this.$domWrap.find("mango-screen-full"), this.$small = this.$domWrap.find("mango-screen-small")
        }, i.changeState = function (t) {
            var e = "small" === t ? "full" : "small";
            _e(this.parent.$dom, t), be(this.parent.$dom, e)
        }, i.onWebFullScreenChange = function (t) {
            "webfull" == t.state && "full" === this.state && this.exit()
        }, i.exit = function () {
            this.state = "small", this.changeState(this.state), this.parent.$fullscreen(!1, "container")
        }, i.onIpadEndFullscreen = function () {
            this.state = "small", this.changeState(this.state), this.parent.play(), Se(this.parent.__dispatcher.dom.videoElement, "webkitendfullscreen", this.onIpadEndFullscreen)
        }, i.fullscreenchange = function () {
            var t = this.parent.fullscreenElement;
            this.state = t ? "full" : "small", this.changeState(this.state), t ? _e(this.parent.$wrapper, "fullscreen") : be(this.parent.$wrapper, "fullscreen")
        }, i.click = function () {
            if (this.parent.config.isIpad) {
                var t = this.parent.__dispatcher.dom.videoElement;
                t.webkitEnterFullscreen(), Te(t, "webkitendfullscreen", this.onIpadEndFullscreen)
            } else {
                var e = !this.parent.fullscreenElement;
                this.parent.$fullscreen(e, "container")
            }
            Yi.info("PluginControlbar", "user trigger action [toggleFullScreen].")
        }, e
    }(Xf)).prototype, "onIpadEndFullscreen", [Kc], p(Kf.prototype, "onIpadEndFullscreen"), Kf.prototype), Kf),
    wp = {
        tag: "mango-playrate",
        cls: "u-control-speed control-item",
        width: "2em",
        html: function (t) {
            return '\n  <span class="btn" action="togglePanel">' + t.locale["controls.playrate.text"] + '</span>\n  <div class="u-box">\n      <p class="ucbox">\n          <a href="javascript:;" action="switch"  data-rate="6">2.0x</a>\n          <a href="javascript:;" action="switch"  data-rate="5">1.5x</a>\n          <a href="javascript:;" action="switch"  data-rate="4">1.25x</a>\n          <a href="javascript:;" action="switch"  data-rate="3" class="focus">1.0x</a>\n          <a href="javascript:;" action="switch"  data-rate="2">0.75x</a>\n          <a href="javascript:;" action="switch"  data-rate="1">0.5x</a>\n      </p>\n  </div>\n  '
        },
        alignRight: !0,
        defaultEvent: {
            click: "click",
            mouseout: "mouseout",
            mouseover: "mouseover"
        },
        list: [{
            index: 1,
            name: "0.5"
        }, {
            index: 2,
            name: "0.75"
        }, {
            index: 3,
            name: "1.0"
        }, {
            index: 4,
            name: "1.25"
        }, {
            index: 5,
            name: "1.5"
        }, {
            index: 6,
            name: "2.0"
        }],
        selected: 0,
        duration: 10,
        increment: 1
    },
    kp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(wp, k(i) ? i : {}), n.list = n.option.list || [], n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$text = this.$domWrap.find(".btn"), this.$list = this.$domWrap.find(".ucbox")
        }, i.inited = function () {
            var t = this.parent.userSetting.playbackRate;
            this.selected = this.list.findIndex(function (e) {
                return e.index == t
            });
            var e = this.$list.find('[data-rate="' + t + '"]'),
                i = this.list[this.selected],
                n = 3 == i.index ? this.locale["controls.playrate.text"] : i.name + "x";
            this.parent.playbackRate = parseFloat(i.name), this.$text.text(n), this.$list.find("a").removeClass("focus"), e.addClass("focus"), this.parent.vm._config.useFlash && this.enable(!1)
        }, i.restoreRate = function () {
            var t = this.parent.userSetting.playbackRate;
            this.selected = this.list.findIndex(function (e) {
                return e.index == t
            });
            var e = this.list[this.selected];
            this.parent.playbackRate = parseFloat(e.name)
        }, i.hide = function () {
            be(this.$dom, "on")
        }, i.togglePanel = function () {
            we(this.$dom, "on") ? be(this.$dom, "on") : _e(this.$dom, "on")
        }, i.adjust = function (t) {
            if (!this.parent.vm._config.useFlash) {
                var e = this.selected + t;
                (e = Math.max(0, Math.min(e, this.list.length - 1))) != this.selected && (this.selected = e, this.setRate(this.list[e]))
            }
        }, i.switch = function (t) {
            var e = t.target.dataset.rate || 3;
            this.selected = this.list.findIndex(function (t) {
                return t.index == e
            }), this.setRate(this.list[this.selected])
        }, i.setRate = function (t) {
            var e = this.$list.find('[data-rate="' + t.index + '"]'),
                i = 3 == t.index ? this.locale["controls.playrate.text"] : t.name + "x",
                n = parseFloat(t.name);
            this.$list.find("a").removeClass("focus"), e.addClass("focus"), this.$text.text(i), zi.set("mango-playback-rate", t.index), this.parent.userSetting.playbackRate = t.index, this.parent.playbackRate = n, this.parent.emit("switchPlayRate", {
                rate: n,
                name: i
            });
            var r = t.name + "x",
                o = bt(this.locale["controls.playrate.shotcut"], {
                    playrate: r
                });
            this.parent.children.tip.showBottomTip({
                _type: "commonTPL",
                _time: 2e3,
                info: o.slice(0, o.indexOf(r)),
                text: r,
                other: o.slice(o.indexOf(r) + r.length)
            }), Yi.info("PluginControlbar", "user trigger action [setRate], rate [" + t.name + "x].")
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) ? this[e](t) : t.stopPropagation()
        }, i.mouseover = function (t) {
            this.hideTimer && clearTimeout(this.hideTimer)
        }, i.mouseout = function (t) {
            var e = this;
            this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                e.hide()
            }, 200)
        }, e
    }(Xf),
    Ep = {
        tag: "mango-watchit",
        cls: "u-control-watchit control-item",
        width: "2em",
        html: '\n  <span class="btn" action="togglePanel">只看TA</span>\n  <div class="u-box">\n      <div class="ucbox">\n\n      </div>\n  </div>\n  ',
        alignRight: !0,
        defaultEvent: {
            click: "click",
            mouseout: "mouseout",
            mouseover: "mouseover"
        },
        selected: 0,
        duration: 10,
        increment: 1
    },
    Sp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).selectedTag = "", n.option = N(Ep, k(i) ? i : {}), n.list = n.option.list || [], n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$text = this.$domWrap.find(".btn"), this.$list = this.$domWrap.find(".ucbox"), this.enable(!1)
        }, i.inited = function () {}, i.initSegments = function (t) {
            if (this.starSegments = t, 0 == this.starSegments.length) return this.enable(!1);
            var e = '<div class="btn" action="switch" data-actor="">观看完整视频</div>';
            this.starSegments.forEach(function (t) {
                var i = t.segments.reduce(function (t, e) {
                    return t + (e.endTime - e.startTime)
                }, 0);
                if (i = Math.ceil(i / 60), t.cp_list.length > 0) {
                    var n = t.cp_list.slice(0, 2);
                    t.vrs_id = n.map(function (t) {
                        return t.vrs_id
                    }).join(","), e += '<div class="actor" action="switch" data-startid="' + t.vrs_id + '" data-actor="' + t.tag + '">', e += '<div class="avatar cplist">', n.forEach(function (t) {
                        e += '<div class="avatar-mask"><img src="' + t.avatar + '"/></div>'
                    }), e += "</div>"
                } else e += '<div class="actor" action="switch" data-startid="' + t.vrs_id + '" data-actor="' + t.tag + '">', e += '<div class="avatar"><div class="avatar-mask"><img src="' + t.avatar + '"/></div></div>';
                e += '\n          <div class="desc" >\n              <span class="name">' + t.tag + '</span>\n              <span class="duration">' + i + '分钟</span>\n          </div>\n          <span class="selected">\n                  <svg viewBox="0 0 1024 1024" width="200" height="200"><path d="M450.8 693.8c-8.2 0-16.4-3.1-22.6-9.4L250.9 507.1c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l154.7 154.7 277-277c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L473.5 684.5c-6.3 6.2-14.5 9.3-22.7 9.3z" p-id="1104"></path><path d="M512 956.2c-59.9 0-118.1-11.7-172.9-34.9-52.9-22.4-100.4-54.4-141.2-95.2s-72.8-88.3-95.2-141.2c-23.2-54.8-34.9-113-34.9-172.9s11.7-118.1 34.9-172.9c22.4-52.9 54.4-100.4 95.2-141.2s88.3-72.8 141.2-95.2c54.8-23.2 113-34.9 172.9-34.9s118.1 11.7 172.9 34.9c52.9 22.4 100.4 54.4 141.2 95.2s72.8 88.3 95.2 141.2c23.2 54.8 34.9 113 34.9 172.9s-11.7 118.1-34.9 172.9c-22.4 52.9-54.4 100.4-95.2 141.2s-88.3 72.8-141.2 95.2c-54.8 23.1-113 34.9-172.9 34.9z m0-824.4c-101.5 0-197 39.5-268.8 111.3S131.8 410.5 131.8 512s39.5 197 111.3 268.8S410.5 892.2 512 892.2s197-39.5 268.8-111.3S892.2 613.5 892.2 512s-39.5-197-111.3-268.8S613.5 131.8 512 131.8z" p-id="1105"></path>\n          </span>\n      </div>'
            }), this.$list[0].innerHTML = e, this.enable(!0), this.initWatchitFromCache()
        }, i.hide = function () {
            be(this.$dom, "on")
        }, i.togglePanel = function () {
            we(this.$dom, "on") ? be(this.$dom, "on") : _e(this.$dom, "on"), this.parent.emit("clickAction", {
                report: !0,
                lob: {
                    flag: 1
                },
                param: {
                    mod: "pfc",
                    cont: "只看TA"
                }
            })
        }, i.switchButtonStyle = function (t) {
            if ("object" == typeof (t = t || "只看TA")) {
                var e = t.querySelector(".avatar"),
                    i = e.innerHTML;
                this.$text[0].innerHTML = i, e.classList.contains("cplist") ? this.$text[0].classList.add("cplist") : this.$text[0].classList.remove("cplist")
            } else this.$text[0].innerHTML = t
        }, i.initWatchitFromCache = function () {
            var t = this.selectedTag;
            if (t)
                if (-1 === !this.starSegments.map(function (t) {
                        return t.tag
                    }).indexOf(t)) {
                    var e = this.$list.find('div[data-actor="' + t + '"]');
                    0 !== e.length ? this.simulateClick(e[0]) : this.selectedTag = ""
                } else this.switchButtonStyle("只看TA")
        }, i.simulateClick = function (t) {
            var e = new MouseEvent("click", {
                bubbles: !0,
                cancelable: !0,
                view: window
            });
            t.dispatchEvent(e)
        }, i.switch = function (t) {
            var e = t.target.classList.contains("on"),
                i = e ? "" : t.target.dataset.actor;
            this.selectedTag = i, this.parent.emit("setStarSegments", {
                tag: i
            }), this.$list.find(".actor").removeClass("on"), !e && Ie(t.target).addClass("on"), i ? this.switchButtonStyle(t.target) : this.switchButtonStyle(), i && this.parent.emit("clickAction", {
                report: !0,
                lob: {
                    flag: 2,
                    starid: t.target.dataset.startid
                },
                param: {
                    addr: "onlywatch",
                    mod: "pfc",
                    cont: "明星"
                }
            })
        }, i.click = function (t) {
            for (var e = t.target; !e.getAttribute("action");) {
                var i = e.parentElement;
                if (null === i || "mango-watchit" === i.tagName.toLowerCase()) return;
                e = i
            }
            var n = e.getAttribute("action");
            this[n] && this[n]({
                target: e
            })
        }, i.mouseover = function (t) {
            this.hideTimer && clearTimeout(this.hideTimer)
        }, i.mouseout = function (t) {
            var e = this;
            this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                e.hide()
            }, 200)
        }, e
    }(Xf),
    Tp = {
        tag: "mango-episode",
        cls: "u-control-episode control-item",
        width: "2em",
        html: '<span class="btn" action="togglePanel">选集</span>',
        alignRight: !0,
        defaultEvent: {
            click: "click"
        },
        selected: 0,
        duration: 10,
        increment: 1
    },
    xp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(Tp, k(i) ? i : {}), n.list = n.option.list || [], n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$text = this.$domWrap.find(".btn")
        }, i.inited = function () {}, i.hide = function () {
            be(this.$dom, "on")
        }, i.togglePanel = function () {
            this.parent.emit("toggleEpisodePanel", {
                show: !0
            })
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) ? this[e](t) : t.stopPropagation()
        }, e
    }(Xf),
    Ap = "PluginControlbar",
    Cp = /iPad/i.test(navigator.userAgent),
    Rp = {
        tag: "mango-clarity",
        cls: "u-control-clarity",
        width: "2em",
        html: '\n      <span class="btn" action="togglePanel">标清</span>\n      <div class="u-box">\n          <div class="ucbox"></div>\n      </div>\n  ',
        alignRight: !0,
        defaultEvent: {
            click: "click",
            mouseout: "mouseout",
            mouseover: "mouseover"
        },
        lastShowDowngradeTipTime: 0,
        waitingRecords: [],
        autoDef: !1,
        list: [],
        autoSelected: 0,
        selected: 0,
        duration: 10,
        increment: 1,
        targetDef: -1
    },
    Ip = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(Rp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), _e(this.$dom, "control-item"), this.$text = this.$domWrap.find(".btn"), this.$list = this.$domWrap.find(".ucbox"), this.locale = this.parent.locale, this.reset()
        }, i.reset = function () {
            this.waitingTooLongTimer && clearTimeout(this.waitingTooLongTimer), this._autoDefDetectLoopTimer && clearInterval(this._autoDefDetectLoopTimer), this.lastShowDowngradeTipTime = 0, this._autoDefDetectLoopCounter = 0, this.targetDef = -1, this.waitingRecords = []
        }, i.calculateClarityBySpeed = function (t) {
            for (var e, i = this.clarityList, n = i.length, r = 0; r < n - 1; r++) {
                var o = i[r];
                if (t > o.speed && o.purview) {
                    e = o;
                    break
                }
            }
            return !e && i[n - 2] && i[n - 2].purview && (e = i[n - 2]), e
        }, i.showDowngradeTip = function () {
            var t = this;
            if (!Cp) {
                var e = this.parent.vm.downloadSpeed.toFixed(2),
                    i = this.calculateClarityBySpeed(e);
                if (i && !(i && this.selected && i.def >= this.selected.def)) {
                    var n = i.def,
                        r = i.name;
                    this.lastShowDowngradeTipTime = +new Date;
                    var o = "[" + r + "]",
                        s = bt(this.locale["controls.tip.clarity.stall"], {
                            def: o
                        });
                    this.parent.children.tip && this.parent.children.tip.showBottomTip({
                        _type: "commonTPL",
                        _time: 3e3,
                        info: s.slice(0, s.indexOf(o)),
                        text: o,
                        other: s.slice(s.indexOf(o) + o.length),
                        action: "changeClarity",
                        actionCallback: function (e) {
                            t.parent.emitSync("switchClarity", {
                                def: n,
                                name: r,
                                purview: !0
                            }), t.changeState({
                                def: n,
                                name: r
                            })
                        }
                    })
                }
            }
        }, i.onTimeUpdate = function () {
            this.waitingTooLongTimer && clearTimeout(this.waitingTooLongTimer)
        }, i.onVideoWaiting = function () {
            var t = this,
                e = +new Date;
            this.autoDef || (this.waitingTooLongTimer && clearTimeout(this.waitingTooLongTimer), this.waitingTooLongTimer = setTimeout(function () {
                e - t.lastShowDowngradeTipTime > 3e5 && (Yi.info(Ap, "waiting too long, show downgrade tip."), t.showDowngradeTip())
            }, 5e3), this.waitingRecords.push({
                currentTime: this.parent.currentTime,
                timestamp: e
            }), this.waitingRecords.length >= 3 && (4 == this.waitingRecords.length && this.waitingRecords.shift(), this.waitingRecords[2].timestamp - this.waitingRecords[0].timestamp < 1e4 && e - this.lastShowDowngradeTipTime > 3e5 && (Yi.info(Ap, "waiting too frequently, show downgrade tip."), this.showDowngradeTip())))
        }, i.setPromotionInfo = function (t) {
            this.promotion = t
        }, i.supportAutoDef = function () {
            return !this.parent.vm._config.useFlash && !Cp && !this.parent.vm._config.isLive
        }, i.initTextList = function (t, e, i, n) {
            var r = this;
            this.reset();
            var o = (t || this.option.list || []).slice(0),
                s = !1;
            if (this.supportAutoDef() && !n ? o.push({
                    def: "0",
                    name: this.locale["controls.clarity.auto"],
                    vip: 0,
                    purview: !0
                }) : (i = !1, this.autoDef = !1), this.clarityList = t, t.forEach(function (t, e) {
                    4 == t.def && (s = !0), t.speed = 1.5 * t.filebitrate / 8, "" != t.url ? t.purview = !0 : t.purview = !1
                }), this.option.list = o, this.autoDef = i, this.autoDef ? this.autoSelected = e : this.selected = e, this.$list.html(""), this.$list.parents().removeClass("ucbox-larger"), !this.parent.isIntelMgtv && s && this.promotion && !Cp) {
                var a = dt.mac ? this.promotion.macLink : this.promotion.winLink;
                a = a.replace(/^http:/i, "");
                var h = Rt(this.parent, "vm.config.lobparam.did", "");
                a += (-1 !== a.indexOf("?") ? "&" : "?") + "did=" + h;
                var c = dt.mac ? this.promotion.macTitle : this.promotion.winTitle,
                    u = Ie(document.createElement("a"));
                c = c || this.locale["controls.clarity.blue"], u.target = "_blank", u.className = "vip", u.attr("href", a), u.attr("target", "_blank"), u.attr("action", "downloadClient"), u.attr("action-type", "protocol-href"), u.attr("rsou", "v_play"), u.attr("rtar", "video"), u.attr("rpos", "v_play_5"), u.html(c + " <em>" + this.locale["controls.clarity.free"] + "</em>"), this.$list.append(u), this.$list.parents().addClass("ucbox-larger")
            }
            o.forEach(function (t, e) {
                var i = Ie(document.createElement("a")),
                    n = "";
                i.attr("data-def", t.def), i.attr("data-index", o.length - (e + 1)), i.attr("data-name", t.name), i.attr("data-purview", t.purview), i.attr("data-speed", t.speed), i.attr("action", "switch"), 0 != t.vip && (n = "<em>" + r.locale["controls.clarity.vip"] + "</em>", i.addClass("vip")), i.html(t.name + n), r.$list.append(i)
            }), this.changeState(e)
        }, i.hide = function () {
            be(this.$dom, "on")
        }, i.togglePanel = function () {
            we(this.$dom, "on") ? be(this.$dom, "on") : _e(this.$dom, "on")
        }, i.switch = function (t) {
            var e = t.target.dataset.def || "",
                i = t.target.dataset.index || "",
                n = t.target.dataset.name || "",
                r = "true" == t.target.dataset.purview,
                o = this.selected && this.selected.def || 0;
            if (this.parent.vm.emit("clickAction", {
                    report: !0,
                    lob: {
                        curdef: e,
                        refdef: o
                    },
                    param: {
                        label: "control_clarity_item",
                        pos: 75
                    }
                }), Yi.info(Ap, "user trigger action [switchClarity], definition [" + n + "}]."), !r) return Yi.info(Ap, "user is not vip, cannot watch current definition [" + n + "}]."), this.parent.emitSync("switchClarity", {
                def: e,
                index: i,
                name: n,
                purview: r
            }), !1;
            0 == e ? (this.autoDef = !0, this.autoSelected = this.selected, zi.set("mango-def-auto", 1)) : (this.autoDef = !1, this.targetDef = e, this.parent.emitSync("switchClarity", {
                def: e,
                index: i,
                name: n,
                purview: r
            })), this.hide(), this.changeState({
                def: e,
                name: n
            })
        }, i.changeState = function (t) {
            var e = this.locale["controls.clarity.auto"];
            0 != t.def && (this.selected = t), this.autoDef ? (this.$list.find("a").removeClass("focus"), this.$list.find('[data-def="0"]').addClass("focus"), this.$list.find('[data-def="0"]').html(e + "(" + this.autoSelected.name + ")"), this.$text.text(e)) : (this.$list.find("a").removeClass("focus"), this.$list.find('[data-def="' + t.def + '"]').addClass("focus"), this.$text.text(t.name), this.$list.find('[data-def="0"]').html(e))
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) && this[e](t)
        }, i.mouseover = function (t) {
            this.hideTimer && clearTimeout(this.hideTimer)
        }, i.mouseout = function (t) {
            var e = this;
            this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                e.hide()
            }, 200)
        }, i.clarityChanged = function (t) {
            if (t.error) this.autoDef || this.changeState(this.selected), Yi.info(Ap, "switch definition to [" + t.stream.name + "}] fail, restore to last definition [" + this.selected.name + "].");
            else if (this.autoDef) this.autoSelected = t.stream, this.changeState(this.autoSelected), Yi.info(Ap, "auto switch definition to [" + t.stream.name + "}] ok.");
            else {
                if (t.stream.def !== this.targetDef) return;
                this.selected = t.stream, this.changeState(this.selected), Yi.info(Ap, "user switch definition to [" + t.stream.name + "}] ok.")
            }
        }, e
    }(Xf),
    Lp = function (t, e) {
        return A(t) && k(e) ? t.replace(/{{(\w+)}}/g, function (t, i) {
            return 0 === e[i] ? 0 : e[i] || ""
        }) : ""
    },
    Pp = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">\n<path d="M8.41,7l4.29-4.29c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L7,5.59L2.71,1.29c-0.39-0.39-1.02-0.39-1.41,0\n s-0.39,1.02,0,1.41L5.59,7l-4.29,4.29c-0.39,0.39-0.39,1.02,0,1.41C1.49,12.9,1.74,13,2,13s0.51-0.1,0.71-0.29L7,8.41l4.29,4.29\n C11.49,12.9,11.74,13,12,13s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L8.41,7z"/>\n</svg>',
    Dp = {
        tag: "mango-control-tip",
        html: '<div class="u-control-tips">\n    <div class="control-tips-pop"></div>\n    <div class="control-tips-line"></div>\n  </div>',
        defaultEvent: {
            click: "click"
        }
    },
    Mp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).PLAY_TIPS = {
                vipEntryTPL: '<p>{{title}}<a href="javascript:void(0);" action="showVipDialog">&nbsp;{{button}}</a></p>',
                skipStartTPL: "<p>" + n.locale["controls.tip.skipstart"] + "</p>",
                skipEndTPL: "<p>" + n.locale["controls.tip.skipend"] + "</p>",
                continuePlayTPL: "<p>" + n.locale["controls.tip.continue.play"] + "</p>",
                commonTPL: '<p>{{info}}<b class="hot" action="custom{{action}}" >{{text}}</b> {{other}}<em class="icon icon-close closable" action="close">' + Pp + "</em></p>",
                promotionTPL: '<p> <a action="downloadClient" action-type="protocol-href" rsou="v_play" rtar="video" rpos="v_play_4"  target="_blank" href="{{url}}" mg-stat-custom="label=control_tips_client">{{text}}</a> <em class="icon icon-close" action="closePromotionTip">' + Pp + "<em> </p>"
            }, n.option = N(Dp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$tipsBox = this.$domWrap.find(".u-control-tips"), this.$tip = this.$domWrap.find(".control-tips-pop"), this.$tipLine = this.$domWrap.find(".control-tips-line"), this.permanent = !1
        }, i.initTip = function (t, e) {
            var i, n;
            void 0 === e && (e = !1), e ? (i = Rt(t, "auth_info.pay_info.preview_starting.components", []), n = 0 !== t.preview && t.preview_range > 0) : (i = Rt(t, "info.authInfo.pay_info.preview_starting.components", []), n = 200 != t.user.purview);
            var r = {};
            if (b(i) && 0 != i.length) {
                var o = i.filter(function (t) {
                    return "title" == t.code
                });
                o.length > 0 && (r.title = o[0].text);
                var s = i.filter(function (t) {
                    return "button" == t.code
                });
                s.length > 0 && (r.button = s[0].text), this.permanent = !1, n && (this.permanent = !0, this.showBottomTip(m({
                    _type: "vipEntryTPL",
                    _time: 0,
                    permanent: !0
                }, r)))
            }
        }, i.showBottomTip = function (t) {
            var e = this,
                i = this.PLAY_TIPS[t._type] || t._tpl;
            this.currentTipType = t._type || "", null != i && (t.action && t.actionCallback && (this["custom" + t.action] = t.actionCallback), this.timerId && clearTimeout(this.timerId), i = Lp(i, t), t && t.permanent ? (this.$tip.hide(), this.$tipLine.html(i).show(), t.closable && this.$tipLine.find(".closable").show(), this.permanent = !0) : (this.$tipLine.hide(), this.$tip.html(i).show()), ~~t._time > 0 && (this.timerId = setTimeout(function () {
                e.$tip.html("").hide(), e.permanent && e.$tipLine.show()
            }, t._time)))
        }, i.setPromotionInfo = function (t) {
            this.promotion = t
        }, i.togglePromotionTip = function (t) {
            if (t) {
                if (!this.promotion || this.permanent || dt.ipad) return;
                var e = this.PLAY_TIPS.promotionTPL,
                    i = {
                        text: dt.mac ? this.promotion.macTitle : this.promotion.winTitle,
                        url: dt.mac ? this.promotion.macLink : this.promotion.winLink
                    },
                    n = Rt(this.parent, "vm.config.lobparam.did", "");
                i.url += (-1 !== i.url.indexOf("?") ? "&" : "?") + "did=" + n, e = Lp(e, i), this.$tip.html(e).show(), this.currentTipType = "promotionTPL"
            } else "promotionTPL" == this.currentTipType && this.$tip.html("").hide()
        }, i.closePromotionTip = function (t) {
            this.promotion = null, this.togglePromotionTip(!1), t.stopPropagation()
        }, i.showVipDialog = function () {
            this.parent.emit("showVipDialog", this.parent.videoinfo)
        }, i.customReloadVideo = function () {
            var t = Rt(this, "parent.vm.config.video_id", ""),
                e = this.parent.currentTime;
            this.parent.vm.reload({
                video_id: t,
                startTime: e
            })
        }, i.close = function () {
            this.timerId && clearTimeout(this.timerId), this.$tip.html("").hide(), this.$tipLine.html("").hide(), this.permanent = !1
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) && this[e](t)
        }, e
    }(Xf),
    Bp = {
        tag: "mango-control-status",
        cls: "u-control-status",
        html: '\n  <div class="mph-header-box">\n      <div class="mph-header-left">\n          <a class="scale50" action="onSetDisplayRatio" data-ratio="50">\n            <svg class="icon n-scale50" id="n-scale50" viewBox="0 0 16 16" width="100%" height="100%">\n              <path d="M13.5 1h-11A2.503 2.503 0 0 0 0 3.5v9C0 13.878 1.122 15 2.5 15h11c1.378 0 2.5-1.122 2.5-2.5v-9C16 2.122 14.878 1 13.5 1zM15 12.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-9C1 2.673 1.673 2 2.5 2h11c.827 0 1.5.673 1.5 1.5v9z"></path><path d="M10 6H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path>\n            </svg>50%\n          </a>\n          <a class="scale75" action="onSetDisplayRatio" data-ratio="75">\n            <svg class="icon n-scale75" id="n-scale75" viewBox="0 0 16 16" width="100%" height="100%">\n              <path d="M13.5 1h-11A2.503 2.503 0 0 0 0 3.5v9C0 13.878 1.122 15 2.5 15h11c1.378 0 2.5-1.122 2.5-2.5v-9C16 2.122 14.878 1 13.5 1zM15 12.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-9C1 2.673 1.673 2 2.5 2h11c.827 0 1.5.673 1.5 1.5v9z"></path><path d="M12 5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path>\n            </svg>75%\n          </a>\n          <a class="scale100 sel" action="onSetDisplayRatio" data-ratio="100">\n            <svg class="icon n-scale100" id="n-scale100" viewBox="0 0 16 16" width="100%" height="100%">\n              <path d="M13.5 1h-11A2.503 2.503 0 0 0 0 3.5v9C0 13.878 1.122 15 2.5 15h11c1.378 0 2.5-1.122 2.5-2.5v-9C16 2.122 14.878 1 13.5 1zM15 12.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-9C1 2.673 1.673 2 2.5 2h11c.827 0 1.5.673 1.5 1.5v9z"></path><path d="M13 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>\n            </svg>100%\n          </a>\n      </div>\n      <div class="mph-header-mid"></div>\n      <div class="mph-header-right">00:00</div>\n  </div>\n  ',
        alignTop: !0,
        defaultEvent: {
            click: "click"
        }
    },
    Op = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(Bp, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.updateTime()
        }, i.inited = function () {
            var t = this.parent.userSetting.fullscreenRatio;
            this.$domWrap.find(".mph-header-left a").removeClass("on"), this.$domWrap.find('[data-ratio="' + t + '"]').addClass("on")
        }, i.initInfo = function () {
            var t = this.parent.vm.getVideoInfo() || this.parent.videoinfo.info;
            this.$domWrap.find(".mph-header-mid").html(t.title || "")
        }, i.setDisplayRatio = function (t) {
            this.parent.width = t + "%", this.parent.userSetting.fullscreenRatio = t, this.$domWrap.find(".mph-header-left a").removeClass("on"), this.$domWrap.find('[data-ratio="' + t + '"]').addClass("on"), this.parent.emit("ratioChange", {
                ratio: t
            })
        }, i.onSetDisplayRatio = function (t) {
            var e = t.target.dataset.ratio;
            this.setDisplayRatio(e), Yi.info("PluginControlbar", "user trigger action [setDisplayRatio], ratio [" + e + "].")
        }, i.onFullScreenChange = function (t) {
            var e = this,
                i = this.parent.children.screen,
                n = this.parent.children.webscreen;
            this.detectTimer && clearTimeout(this.detectTimer), this.detectTimer = setTimeout(function () {
                if ("webfull" == n.state || "full" === i.state) {
                    var t = e.parent.userSetting.fullscreenRatio;
                    e.setDisplayRatio(t)
                } else e.parent.width = "100%", e.setDisplayRatio(100)
            }, 0)
        }, i.updateTime = function () {
            var t = this;
            clearTimeout(this.updateTimerId);
            var e = wt(new Date, "hh:mm");
            this.$domWrap.find(".mph-header-right").html(e), this.updateTimerId = setTimeout(function () {
                t.updateTime()
            }, 3e4)
        }, i.click = function (t) {
            var e = t.target.getAttribute("action");
            w(this[e]) && this[e](t)
        }, e
    }(Xf),
    Up = {
        tag: "mango-danmu-switch",
        cls: "u-control-danmu",
        html: '<div class="btn">\n    <span>\n      <svg class="icon n-dan" id="n-dan" viewBox="0 0 11 10" width="100%" height="100%">\n        <path d="M0 1h2v2H0v4h2v2H0v1h3V6H1V4h2V0H0zM5 0h1v1H5zM9 0h1v1H9zM9 2V1H8v1H7V1H6v1H4v5h3v1H4v1h3v1h1V9h3V8H8V7h3V2H9zM7 6H5V5h2v1zm0-2H5V3h2v1zm3 2H8V5h2v1zm0-2H8V3h2v1z"></path>\n      </svg>\n    </span>\n  </div>',
        alignRight: !0,
        defaultEvent: {
            click: "click"
        }
    },
    Fp = function (t) {
        function e(e, i) {
            var n;
            return (n = t.call(this, e) || this).option = N(Up, k(i) ? i : {}), n.init(), n
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {
            t.prototype.create.call(this), this.$domWrap.addClass("control-item"), this.vm = this.parent.__dispatcher.vm, this.locale = this.parent.locale
        }, i.hide = function () {
            this.$domWrap.css("display", "none")
        }, i.onDanmuConfig = function (t) {
            t.switcher ? this.$domWrap.css("display", "") : this.$domWrap.css("display", "none"), t.userConfig ? this.$domWrap.addClass("on") : this.$domWrap.removeClass("on")
        }, i.changeState = function (t) {
            void 0 !== t.state && null !== t.state && (t.state ? this.$domWrap.addClass("on") : this.$domWrap.removeClass("on"))
        }, i.inited = function () {
            var t = zi.get("mango-danmu-switch");
            this.changeState({
                state: t
            })
        }, i.click = function (t) {
            this.parent.userSetting.danmuSwitch ? (this.parent.userSetting.danmuSwitch = 0, this.$domWrap.removeClass("on"), this.vm.toggleDanmuButton(this.parent.userSetting.danmuSwitch)) : (this.parent.userSetting.danmuSwitch = 1, this.$domWrap.addClass("on"), this.vm.toggleDanmuButton(this.parent.userSetting.danmuSwitch)), this.parent.emitSync("danmuStatusChange", {
                state: this.parent.userSetting.danmuSwitch
            });
            var e = this.danmuSwitch ? this.locale["controls.danmu.open"] : this.locale["controls.danmu.close"],
                i = this.danmuSwitch ? 3 : 4,
                n = window.MgStat;
            n && n.send("click", {
                flag: i
            }, {
                cont: e,
                mod: "pfc"
            }), Yi.info("PluginControlbar", "user trigger action [toggleDanmu], status [" + this.parent.userSetting.danmuSwitch + "]")
        }, e
    }(Xf),
    Np = {
        tag: "mango-control-nexttip",
        html: function (t) {
            return '\n    <mango-control-nextvideo-tip class="u-control-sporting">\n      <div class="u-next-box">\n        <div class="u-next-box-cent">\n          <p class="pic"><img src="" width="130" height="74"><em class="pn-time"></em></p>\n          <h2 class="tit"><i>10s</i>' + t.locale["controls.next.text"] + '</h2>\n          <p class="n"></p>\n        </div>\n      </div>\n    </mango-control-nextvideo-tip>\n  '
        },
        defaultEvent: {
            click: "click",
            touchstart: "click"
        }
    },
    Vp = {
        tag: "mango-subtitle-bar",
        cls: "u-control-subtitle-bar",
        width: "2em",
        html: function (t) {
            return '\n        <span class="btn" action="togglePanel">' + t.locale["controls.subtitle.subtitle"] + '</span>\n        <div class="u-box">\n          <div class="ucbox"></div>\n        </div>\n        '
        },
        alignRight: !0,
        defaultEvent: {
            click: "click",
            mouseout: "mouseout",
            mouseover: "mouseover"
        }
    },
    zp = {
        play: Jf,
        playLoop: ep,
        playNext: np,
        nextTip: function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, e) || this).option = N(Np, k(i) ? i : {}), n.init(), n
            }
            r(e, t);
            var i = e.prototype;
            return i.init = function () {
                t.prototype.create.call(this), this.$domWrap.addClass("control-item").hide(), this.$nextvideo = this.$domWrap.find(".u-next-box"), this.$nextvideotip = this.$domWrap.find("mango-control-nextvideo-tip")
            }, i.setNextVideoInfo = function (t) {
                void 0 === t && (t = {});
                var e = t,
                    i = e.img,
                    n = e.title,
                    r = e.duration;
                i && n && r ? (this.nextvideoinfo = t, this.$nextvideo.find("img").attr("src", i), this.$nextvideo.find(".n").html(n), this.$nextvideo.find(".pn-time").html(_t(r)), this.$domWrap.css("display", "inline-block")) : this.nextvideoinfo = null
            }, i.onVideoWillEnd = function (t) {
                var e = this;
                void 0 === t && (t = {});
                var i = t.time;
                !this.parent.userSetting.isLoop && i > 0 && this.nextvideoinfo ? (this.$nextvideotip.find(".tit i").html(i + "s"), this.$nextvideotip.find(".u-next-box").css("display", "block"), this.dcTimer && clearInterval(this.dcTimer), this.dcTimer = setInterval(function () {
                    i > 0 ? (i--, e.$nextvideotip.find(".tit i").html(i + "s")) : e.cancelVideoEnd()
                }, 1e3)) : this.cancelVideoEnd()
            }, i.cancelVideoEnd = function () {
                this.dcTimer && clearInterval(this.dcTimer), this.$nextvideotip.find(".u-next-box").css("display", "none")
            }, i.playNext = function () {
                if (this.parent.vm._config.webJump) this.parent.vm.requesetRefreshPage();
                else {
                    var t = this.parent.vm.getNextPlayUrl();
                    if (t) return void(window.location.href = t);
                    this.parent.nextvideoinfo && this.parent.nextvideoinfo.url && (window.location.href = this.parent.nextvideoinfo.url)
                }
            }, i.hide = function () {
                this.$domWrap.hide()
            }, i.click = function (t) {
                this.playNext(), this.parent.$emit("playNextVideo"), Yi.info("PluginControlbar", "user trigger action [playNext]."), t.stopPropagation(), t.preventDefault()
            }, e
        }(Xf),
        volume: op,
        progressBar: hp,
        progressTime: lp,
        setting: pp,
        webscreen: vp,
        screen: bp,
        playrate: kp,
        watchit: Sp,
        episode: xp,
        subtitlebar: function (t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, e) || this).option = N(Vp, k(i) ? i : {}), n.init(), n
            }
            r(e, t);
            var i = e.prototype;
            return i.init = function () {
                t.prototype.create.call(this), _e(this.$dom, "control-item"), this.$text = this.$domWrap.find(".btn"), this.$list = this.$domWrap.find(".ucbox"), this.locale = this.parent.locale, this.initUnsubtitle(), this.lang = this.getDefaultLanguage(), this.enable(!1)
            }, i.hide = function () {
                be(this.$dom, "on")
            }, i.setData = function (t) {
                var e = this,
                    i = (t || []).slice(0);
                this.subtitleList = i.sort(function (t, e) {
                    return t.language - e.language
                }), this.$list.html(""), this.initUnsubtitle(), i.forEach(function (t, i) {
                    var n = $(document.createElement("a"));
                    n.attr("data-lan", t.language), n.attr("data-name", t.name), n.attr("action", "switch"), n.html(t.name), e.$list.append(n[0])
                });
                var n = this.getDefaultLanguage();
                this.updateHighlight(n)
            }, i.initUnsubtitle = function () {
                var t = $(document.createElement("a"));
                t.attr("data-lan", "-1"), t.attr("data-name", this.locale["controls.subtitle.unsubtitle"]), t.attr("action", "switch"), t.html(this.locale["controls.subtitle.unsubtitle"]), this.$list.append(t[0])
            }, i.togglePanel = function (t) {
                we(this.$dom, "on") ? be(this.$dom, "on") : (_e(this.$dom, "on"), this.reportComponentView()), this.reportToggle(), t.stopPropagation()
            }, i.reportComponentView = function () {
                this.parent.vm.emit("componentView", {
                    report: !0,
                    param: {
                        mod: "c_subtitlepop",
                        cntp: document.body.getAttribute("mg-stat-page") || "v_play"
                    },
                    lob: {
                        vid: Rt(this, "parent.vm.config.video_id", "")
                    }
                })
            }, i.reportToggle = function () {
                this.parent.vm.emit("clickAction", {
                    report: !0,
                    lob: {
                        flag: 26
                    },
                    param: {
                        cont: "字幕",
                        cntp: document.body.getAttribute("mg-stat-page") || "v_play",
                        lastp: xt("lastp") || "",
                        mod: "pfc"
                    }
                })
            }, i.reportSwitch = function () {
                this.parent.vm.emit("clickAction", {
                    report: !0,
                    lob: {
                        flag: 27,
                        lang: this.lang,
                        reflang: this.reflang
                    },
                    param: {
                        cont: "切换字幕语言类型",
                        cntp: document.body.getAttribute("mg-stat-page") || "v_play",
                        lastp: xt("lastp") || "",
                        mod: "pfc"
                    }
                })
            }, i.click = function (t) {
                var e = t.target.getAttribute("action");
                w(this[e]) && this[e](t)
            }, i.switch = function (t) {
                var e = t.target.dataset.lan || "";
                this.parent.vm.emit("switchSubtitle", {
                    language: e
                }), this.updateHighlight(e), this.reflang = this.lang || "", this.lang = e, this.reportSwitch(), t.stopPropagation()
            }, i.getDefaultLanguage = function () {
                var t = Rt(this, ".parent.vm.config.abroad", ""),
                    e = Rt(this, "parent.userSetting.subtitleLanguage");
                return e = null !== e ? e : {
                    0: "0",
                    1: "5",
                    2: "5",
                    3: "5",
                    6: "9",
                    10: "1",
                    18: "17",
                    19: "2",
                    23: "3"
                } [t] || ""
            }, i.updateHighlight = function (t) {
                this.$list.find("a").removeClass("focus"), this.$list.find('[data-lan="' + t + '"]').addClass("focus")
            }, i.mouseover = function (t) {
                this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = null
            }, i.mouseout = function (t) {
                var e = this;
                this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                    e.hide()
                }, 200)
            }, e
        }(Xf),
        clarity: Ip,
        tip: Mp,
        danmu: Fp,
        playStatus: Op,
        pip: yp,
        default: Zf
    },
    Hp = function (t) {
        var e = t.config.isIpad,
            i = t.config.disableDanmuPlugin || !Rt(t, "vm._config.plugins.danmu", !0),
            n = "1" == Rt(t, "vm.config.i18n", ""),
            r = navigator.userAgent.indexOf("Trident") > -1 && navigator.userAgent.indexOf("rv:11.0") > -1,
            o = {};
        return ["tip", "pip", "episode", "webscreen", "screen", "watchit", "setting", "playrate", "clarity", "next", "loop", "subtitle"].forEach(function (e) {
            o[e] = !1 === Rt(t, "vm._config.plugins." + e)
        }), t.$config.children ? t.$config.children : t.isLive ? {
            play: !0,
            danmu: !(i || n || r || e),
            volume: !0,
            clarity: !0,
            screen: !0,
            tip: !0
        } : {
            play: !0,
            playNext: !o.next,
            nextTip: !o.next,
            playLoop: !o.loop,
            progressTime: !0,
            progressBar: !0,
            danmu: !e && !i && !n,
            watchit: !o.watchit && !e && !n,
            subtitlebar: !o.subtitlebar && !e && n,
            clarity: !o.clarity && !e,
            playrate: !o.playrate && !e,
            episode: !o.episode && !e && !n,
            volume: !e,
            setting: !o.setting,
            pip: !o.pip && document.pictureInPictureEnabled,
            webscreen: !o.webscreen && !e,
            screen: !o.screen,
            tip: !o.tip,
            playStatus: !e
        }
    };
var jp = {},
    $p = !1,
    Wp = W.document;

function qp(t) {
    if ($p) setTimeout(qp, 0, t);
    else {
        var e = jp[t];
        if (e) {
            $p = !0;
            try {
                ! function (t) {
                    var e = t.callback,
                        i = t.args;
                    switch (i.length) {
                        case 0:
                            e();
                            break;
                        case 1:
                            e(i[0]);
                            break;
                        case 2:
                            e(i[0], i[1]);
                            break;
                        case 3:
                            e(i[0], i[1], i[2]);
                            break;
                        default:
                            e.apply(void 0, i)
                    }
                }(e)
            } finally {
                ! function (t) {
                    delete jp[t]
                }(t), $p = !1
            }
        }
    }
}
var Gp, Kp, Yp = Object.getPrototypeOf && Object.getPrototypeOf(W);
Yp = Yp && Yp.setTimeout ? Yp : W, "[object process]" === {}.toString.call(W.process) || (! function () {
    if (W.postMessage && !W.importScripts) {
        var t = !0,
            e = W.onmessage;
        return W.onmessage = function () {
            t = !1
        }, W.postMessage("", "*"), W.onmessage = e, t
    }
}() ? W.MessageChannel ? (new MessageChannel).port1.onmessage = function (t) {
    qp(t.data)
} : Wp && "onreadystatechange" in Wp.createElement("script") && Wp.documentElement : (Gp = "setImmediate$" + Math.random() + "$", Kp = function (t) {
    t.source === W && "string" == typeof t.data && 0 === t.data.indexOf(Gp) && qp(+t.data.slice(Gp.length))
}, W.addEventListener ? W.addEventListener("message", Kp, !1) : W.attachEvent("onmessage", Kp)));
Function.prototype.apply;

function Xp(t) {
    "number" == typeof t && "function" == typeof W.clearInterval ? W.clearInterval(t) : function (t) {
        t && "function" == typeof t.close && t.close()
    }(t)
}
var Zp = /iPad/i.test(navigator.userAgent),
    Qp = "PluginControlbar",
    Jp = {
        hideBarTime: 3e3,
        barShowByMouse: "move"
    },
    tm = {
        name: "mangoControl",
        el: "mango-control",
        data: {
            children: {},
            show: !0,
            adlock: !1,
            disabled: !0,
            guideShow: !1
        },
        level: 101,
        operable: !1,
        penetrate: !1,
        create: function () {},
        init: function (t) {
            var e = this;
            t.controls && (this.show = !0, t.controls = !1);
            var i, n, r = this;
            nu(t, {
                controls: Uc({
                    get: function () {
                        return r.show
                    },
                    set: function (t) {
                        return r.show = Boolean(t), r._display(), !1
                    }
                }, {
                    preSet: !0
                })
            }, {
                self: !0
            }), this.config = k(this.$config) ? N(Jp, this.$config) : Jp, this.vm = this.__dispatcher.vm, this.locale = this.vm.locale, this.isIntelMgtv = "1" == this.vm.config.i18n, this.vm.screenState = "normal", this.__wrapper = this.__dispatcher.dom.wrapper, this.config.isIpad = Zp, this.config.disableDanmuPlugin = this.vm._config.disableDanmuPlugin, this.config.hideBarTime = Zp ? 0 : this.config.hideBarTime, this.$dom.innerHTML = '\n    <mango-control-bg></mango-control-bg>\n    <mango-control-wrap mg-stat-mod="jEBKaV">\n        <mango-control-wrap-left></mango-control-wrap-left>\n        <mango-control-wrap-slot></mango-control-wrap-slot>\n        <mango-control-wrap-right></mango-control-wrap-right>\n    </mango-control-wrap>', this.$domWrap = Ie(this.$dom), this.$wrap = this.$dom.querySelector("mango-control-wrap"), this.$wrapLeft = this.$dom.querySelector("mango-control-wrap-left"), this.$wrapRight = this.$dom.querySelector("mango-control-wrap-right"), this.children = (n = (i = this).config.children = Hp(i), g(n).filter(function (t) {
                return n[t]
            }).reduce(function (t, e) {
                var r = zp[e] || zp.default;
                return t[e] = new r(i, n[e]), t
            }, {})), Zp && (this.show = !1), this.$controlWrap = Ie(this.$wrap), this.autoHideControlsLock = !1, this.midAdWillBeginTimer && Xp(this.midAdWillBeginTimer), this.addEvent(), this.getUserSetting(), this.onTimeUpdate = gt(function () {
                e._progressUpdate(), e.detectVideoWillEnd(), e.detectVideoSkipEnd();
                var t = e.children,
                    i = t.clarity,
                    n = t.progressBar;
                i && i.onTimeUpdate(), n && n.progress()
            }, 200), this.onSeeked = gt(function (t) {
                e._onSeeked(t)
            }, 500), Yi.info(Qp, "plugin init ok.")
        },
        destroy: function () {
            window.clearTimeout(this.timeId), Yi.info(Qp, "plugin destroy ok.")
        },
        inited: function () {
            for (var t in this.children) this.children[t].inited && this.children[t].inited();
            this.$status = this.$dom.querySelector("mango-control-status"), Yi.info(Qp, "plugin inited ok.")
        },
        events: {
            showStarSegmentsGuide: function () {
                var t = this;
                this.guideShow = !0, this._showItself(), this._hideItself(5e3), setTimeout(function () {
                    t.guideShow = !1
                }, 5e3)
            },
            play: function () {
                var t = this.children,
                    e = t.tip,
                    i = t.play,
                    n = t.pip;
                i && i.changeState("play"), e && e.togglePromotionTip(!1), n && n.enable(!this.vm._config.useFlash)
            },
            videoInfoData: function (t) {
                t.isPreload || this.onVideoInfoData(t)
            },
            preloadVideoStart: function () {
                var t = {
                    data: this.vm.cms.videoInfoData,
                    status: "loadComplete"
                };
                this.onVideoInfoData(t)
            },
            confData: function (t) {
                void 0 === t && (t = {});
                var e = this.children,
                    i = e.tip,
                    n = e.clarity,
                    r = Rt(t, "conf.recommend.list", []),
                    o = r.find(function (t) {
                        return 3 == t.recommendType
                    }),
                    s = r.find(function (t) {
                        return 4 == t.recommendType
                    });
                i && i.setPromotionInfo(o), n && n.setPromotionInfo(s)
            },
            subtitleData: function (t) {
                void 0 === t && (t = {});
                var e = this.children.subtitlebar,
                    i = Rt(t, "data.title", []) || [];
                if (e && i.length > 0) {
                    e.setData(i), e.enable(!0);
                    var n = e.getDefaultLanguage();
                    this.vm.emit("switchSubtitle", {
                        language: n
                    })
                }
            },
            switchSubtitle: function (t) {
                var e = t.language;
                this.disabled || this.adlock || (this.userSetting.subtitleLanguage = e, zi.set("mango-subtitleLanguage", e))
            },
            starSegments: function (t) {
                void 0 === t && (t = {});
                var e = this.children,
                    i = e.watchit,
                    n = e.progressBar;
                i && i.initSegments(t.starSegments), n && n.initSegments(t.starSegments)
            },
            nextVideoInfo: function (t) {
                var e = this.children,
                    i = e.playNext,
                    n = e.nextTip;
                this.nextvideoinfo = t, i && i.setNextVideoInfo(t), n && n.setNextVideoInfo(t)
            },
            clarityData: function (t) {
                var e = this.children.clarity;
                e && e.initTextList(t.stream, t.def, t.isAutoDef, t.isDrm)
            },
            switchClarity: function (t) {
                if (t.purview) {
                    if (this.paused && this.play(), t.auto || t.silent) return;
                    if (!this.vm._config.isLive) {
                        var e = "[" + t.name + "]",
                            i = bt(this.locale["controls.tip.clarity.switching"], {
                                def: e
                            });
                        this.children.tip.showBottomTip({
                            _type: "commonTPL",
                            _time: 3e3,
                            info: i.slice(0, i.indexOf(e)),
                            text: e,
                            other: i.slice(i.indexOf(e) + e.length)
                        })
                    }
                }
            },
            clarityChanged: function (t) {
                if (this.vm._config.isLive)
                    if (4 == t.stream.def) {
                        var e = "[" + t.stream.name + "]",
                            i = bt(this.locale["controls.tip.clarity.switch"], {
                                def: e
                            });
                        this.children.tip.showBottomTip({
                            _type: "commonTPL",
                            _time: 5e3,
                            info: i.slice(0, i.indexOf(e)),
                            text: e,
                            other: i.slice(i.indexOf(e) + e.length)
                        })
                    } else {
                        var n = "[" + t.stream.name + "]",
                            r = bt(this.locale["controls.tip.clarity.switched"], {
                                def: n
                            });
                        this.children.tip.showBottomTip({
                            _type: "commonTPL",
                            _time: 5e3,
                            info: r.slice(0, r.indexOf(n)),
                            text: n,
                            other: r.slice(r.indexOf(n) + n.length)
                        })
                    }
                else {
                    var o = this.children.clarity;
                    if (o && o.clarityChanged(t), this.children.playrate && this.children.playrate.restoreRate(), !t.auto && !t.silent)
                        if (t.error) this.children.tip.showBottomTip({
                            _type: "commonTPL",
                            _time: 3e3,
                            info: this.locale["controls.tip.clarity.switch.error"],
                            text: ""
                        });
                        else {
                            var s = o && o.targetDef;
                            if (t.stream.def !== s) return;
                            o.targetDef = -1;
                            var a = "[" + t.stream.name + "]",
                                h = bt(this.locale["controls.tip.clarity.switched"], {
                                    def: a
                                });
                            this.children.tip.showBottomTip({
                                _type: "commonTPL",
                                _time: 5e3,
                                info: h.slice(0, h.indexOf(a)),
                                text: a,
                                other: h.slice(h.indexOf(a) + a.length)
                            })
                        }
                }
            },
            switchToFlash: function () {
                this.vm._config.useFlash = !0, Yi.info(Qp, "user trigger action [switchToFlash]."), this.vm.reload({
                    video_id: this.vm._config.video_id
                }), this.children.playrate && this.children.playrate.enable(!1), this.children.pip && this.children.pip.enable(!1)
            },
            switchToHtml5: function () {
                this.vm._config.useFlash = !1, Yi.info(Qp, "user trigger action [switchToHtml5]."), this.vm.reload({
                    video_id: this.vm._config.video_id
                }), this.children.playrate && this.children.playrate.enable(!0), this.children.pip && this.children.pip.enable(!0)
            },
            danmuConfig: function (t) {
                this.children.danmu && this.children.danmu.onDanmuConfig(t), (this.isWebFullScreen || this.isFullScreen) && this.danmuFullscreen()
            },
            danmuStatusChange: function (t) {
                this.children.danmu && this.children.danmu.changeState(t)
            },
            toggleWebFullScreen: function () {
                this.children.webscreen && this.children.webscreen.toggleWebFullScreen()
            },
            webFullScreenChange: function (t) {
                this.isWebFullScreen = "webfull" == t.state, this.isWebFullScreen ? this.vm.screenState = "webfull" : this.vm.screenState = "normal", this.children.screen && this.children.screen.onWebFullScreenChange(t), this.children.playStatus && this.children.playStatus.onFullScreenChange(t), this.isWebFullScreen && this.isPipMode && this.exitPictureInPicture(), this.isWebFullScreen && window["danmu-control-bar"] && this.danmuFullscreen()
            },
            fullscreenchange: function (t) {
                var e = this.fullscreenElement ? "full" : "small";
                this.vm.screenState = e ? "full" : "normal", this.isFullScreen = !!this.fullscreenElement, this.children.webscreen && this.children.webscreen.onFullScreenChange({
                    state: e
                }), this.children.playStatus && this.children.playStatus.onFullScreenChange({
                    state: e
                }), this.children.screen && this.children.screen.fullscreenchange({
                    state: e
                }), this.isFullScreen && this.isPipMode && this.exitPictureInPicture(), "full" === e && window["danmu-control-bar"] && this.danmuFullscreen()
            },
            frontAdBegin: function () {
                this.playbackRate = 1, this.adLockUI(!0)
            },
            midAdWillBegin: function (t) {
                var e = this;
                this.adlock = !0, this._disable(!0), this._hideItself();
                var i = Math.floor(t.time / this.playbackRate),
                    n = function () {
                        var t = i + "s",
                            n = bt(e.locale["controls.tip.ad.enter"], {
                                time: t
                            });
                        e.children.tip.showBottomTip({
                            _type: "commonTPL",
                            _time: 1e3,
                            info: n.slice(0, n.indexOf(t)),
                            text: t,
                            other: n.slice(n.indexOf(t) + t.length)
                        })
                    };
                n(), this.midAdWillBeginTimer = setInterval(function () {
                    --i > 0 ? n() : Xp(e.midAdWillBeginTimer)
                }, 1e3)
            },
            midAdBegin: function () {
                this.playbackRate = 1, this.adLockUI(!0), this.children.clarity && this.children.clarity.reset()
            },
            midAdEnd: function () {
                this.children.playrate && this.children.playrate.restoreRate(), this.adLockUI(!1), this.volume = this.userSetting.volume, this.children.volume && this.children.volume.update()
            },
            videoResumeMid: function () {
                this.resumePip()
            },
            videoPlay: function () {
                this.resumePip(), this.adLockUI(!1);
                var t = this.children,
                    e = t.play,
                    i = t.playrate,
                    n = t.progressBar,
                    r = t.progressTime,
                    o = t.volume;
                e && e.changeState("play"), i && i.inited(), n && n.preFetch(), this.volume = this.userSetting.volume, o && o.update(), this.videoEndEmitted = !1, "0px" == xe(this.$wrap, "bottom") && this.emit("controlbarChange", {
                    visible: !0
                }), Zp || this._hideItself(), this.videoinfo && 200 == this.videoinfo.user.purview && this.duration > 0 && (r && r.updateTotal(Math.round(this.duration)), n && n.initKeyPoints(this.videoinfo.points, Math.round(this.duration)))
            },
            videoPause: function () {
                if (!this.adlock) {
                    var t = this.children,
                        e = t.nextTip,
                        i = t.tip,
                        n = t.play;
                    n && n.changeState("pause"), this._showItself(), e && e.cancelVideoEnd(), !this.isIntelMgtv && i && i.togglePromotionTip(!0), this.vm.emit("cancelVideoWillEnd")
                }
            },
            videoResume: function () {
                this.children.playrate && this.children.playrate.restoreRate()
            },
            videoEnd: function () {
                if (200 == this.videoinfo.user.purview) {
                    var t = this.children,
                        e = t.nextTip,
                        i = t.playNext,
                        n = t.play;
                    this.userSetting.isLoop ? (this.vm.emit("videoReplay"), Yi.info("PluginControl", "LoopPlay setting is on, start loop play. "), e && e.cancelVideoEnd()) : (i && i.playNext(), e && e.cancelVideoEnd()), n && n.changeState("pause")
                } else this.emit("showVipDialog", this.videoinfo)
            },
            videoRefresh: function () {
                this.onVideoReplay()
            },
            videoReplay: function () {
                this.onVideoReplay()
            },
            videoReload: function () {
                this.vipDialogIsShow = !1, this.adlock = !0, this._disable(!0), this.midAdWillBeginTimer && Xp(this.midAdWillBeginTimer), Ae(this.$dom, {
                    visibility: "hidden"
                }), Ae(this.$dom, {
                    display: "none"
                });
                var t = this.children,
                    e = t.tip,
                    i = t.playNext,
                    n = t.nextTip,
                    r = t.progressBar,
                    o = t.clarity,
                    s = t.danmu;
                e && e.close(), i && i.hide(), n && n.cancelVideoEnd(), s && s.hide(), o && o.reset(), r && r.reset()
            },
            lockUI: function () {
                this.adLockUI(!0)
            },
            unlockUI: function () {
                this.adLockUI(!1)
            },
            contextmenu: function () {
                this.contextMenuIsShow = !0
            },
            contextmenuClose: function () {
                this.contextMenuIsShow = !1
            },
            showHdDialog: function () {
                var t = this.children,
                    e = t.webscreen,
                    i = t.screen;
                e && e.exit(), i && i.exit()
            },
            showVipDialog: function () {
                var t = this.children,
                    e = t.webscreen,
                    i = t.screen;
                this.vipDialogIsShow = !0, this.exitPictureInPicture(), e && e.exit(), i && i.exit(), this.adLockUI(!0, "vipdalog")
            },
            showBottomTip: function (t) {
                var e = this.children.tip;
                e && e.showBottomTip(t)
            },
            hideBottomTip: function (t) {
                var e = t._type,
                    i = this.children.tip;
                i && i.currentTipType == e && i.close()
            },
            episodePanelShow: function (t) {
                t.show ? this.adLockUI(!0, "episode") : "episode" == this.lockReason && this.adLockUI(!1)
            },
            setStarSegments: function (t) {
                var e = this.children.progressBar;
                e && e.setSegment(t.tag)
            },
            videoWaiting: function () {
                var t = this.children.clarity;
                t && t.onVideoWaiting()
            },
            liveSourceError: function () {
                this.adLockUI(!0)
            },
            liveVideoInfo: function (t) {
                var e = this.children.tip;
                this.videoinfo = t, e && e.initTip(t, !0)
            },
            c_resize: function (t) {
                this.children.progressBar && this.children.progressBar.resize()
            },
            c_mouseenter: function () {
                Zp || this.adlock || this._mousemove()
            },
            c_mousemove: function () {
                if (!Zp) return this.adlock ? (Ae(this.__wrapper, {
                    cursor: "default"
                }), void this._hideItself()) : void this._mousemove();
                Ae(this.__wrapper, {
                    cursor: "default"
                })
            },
            c_mouseleave: function () {
                Zp || this.adlock || this.guideShow || this._hideItself(300)
            },
            timeupdate: function () {
                this.onTimeUpdate()
            },
            progress: function () {},
            volumechange: function () {
                this.disabled || this.adlock || (this.userSetting.volume = this.volume, zi.set("mango-volume", this.volume), this.children.volume && this.children.volume.update())
            },
            w_swipe: function (t) {
                if (!this.disabled && !this.adlock) {
                    var e = t.detail.data[0].currentDirection;
                    if (e >= 330 || e <= 30) {
                        var i = this.currentTime + 10;
                        return this.currentTime = i > this.duration ? this.duration : i, void this._mousemove()
                    }
                    if (e > 150 && e <= 210) {
                        var n = this.currentTime - 10;
                        return this.currentTime = n < 0 ? 0 : n, void this._mousemove()
                    }
                    if (e >= 60 && e <= 120) {
                        var r = this.volume + .1;
                        this.volume = r > 1 ? 1 : r
                    } else if (e >= 240 || e <= 300) {
                        var o = this.volume - .1;
                        this.volume = o < 0 ? 0 : o
                    } else;
                }
            },
            g_keydown: function (t) {
                var e = document.activeElement.tagName.toUpperCase(),
                    i = document.activeElement.getAttribute("contenteditable");
                if ("INPUT" == e || "TEXTAREA" == e || "" == i || "true" == i) return !1;
                if (!this.disabled) switch (t.stopPropagation(), t.keyCode) {
                    case 27:
                        this.children.webscreen && this.children.webscreen.onEscKeyPressed(t);
                        break;
                    case 32:
                        t.preventDefault(), this.children.play && this.children.play.click(t);
                        break;
                    case 37:
                        t.preventDefault(), this.onSeeked(-1);
                        break;
                    case 39:
                        t.preventDefault(), this.onSeeked(1);
                        break;
                    case 38:
                        t.preventDefault(), this.children.volume && this.children.volume.adjust(1);
                        break;
                    case 40:
                        t.preventDefault(), this.children.volume && this.children.volume.adjust(-1);
                        break;
                    case 219:
                        t.preventDefault(), this.children.playrate && this.children.playrate.adjust(-1);
                        break;
                    case 221:
                        t.preventDefault(), this.children.playrate && this.children.playrate.adjust(1)
                }
            },
            c_touchstart: function (t) {
                this.adlock || Zp && !this.adlock && -1 != t.target.tagName.indexOf("VIDEO") && (this.isExpand ? this._hideItself() : this._showItself(), this.isExpand = !this.isExpand)
            },
            click: function (t) {
                var e = this;
                if (Zp);
                else {
                    if (this.contextMenuIsShow) return;
                    var i = new Date,
                        n = this.clickTime;
                    if (this.clickTime = i, i - n < 300) return void clearTimeout(this.clickTimeId);
                    this.clickTimeId = setTimeout(function () {
                        !e.disabled && e.children.play && e.children.play.click(t)
                    }, 300)
                }
            },
            dblclick: function (t) {
                !this.disabled && this.children.screen && this.children.screen.click()
            },
            enterpictureinpicture: function (t) {
                this.children.pip && this.children.pip.pictureInPictureChange(t)
            },
            leavepictureinpicture: function (t) {
                this.children.pip && this.children.pip.pictureInPictureChange(t), this.vm.enableFloatWindow(!0)
            }
        },
        methods: {
            onVideoInfoData: function (t) {
                var e = this.children,
                    i = e.tip,
                    n = e.progressBar,
                    r = e.playStatus,
                    o = e.progressTime;
                if ("loadComplete" == t.status) {
                    this.videoinfo = t.data;
                    var s = this.videoinfo,
                        a = s.points,
                        h = s.user,
                        c = s.info,
                        u = s.frame;
                    s.duration;
                    if (this.skipStartTime = Number(a.start.split("|")[0]) || 0, this.skipEndTime = Number(a.end.split("|")[0]) || 0, 200 != h.purview && 0 == c.trialtime) return void this.emit("showVipDialog", this.videoinfo);
                    n && n.initKeyPoints(a, c.duration), n && n.initFrames(u), o && o.updateTotal(c.duration), r && r.initInfo(), i && i.initTip(t.data)
                }
            },
            danmuFullscreen: function () {
                var t = window["danmu-control-bar"];
                t && (t.classList.add("control-item"), t.classList.add("state-fullscreen"), t.classList.remove("state-bottom"), this.$dom.appendChild(t), this.$wrapRight.insertBefore(window["danmu-control-bar"], this.$wrapRight.children[0]))
            },
            onVideoReplay: function () {
                this.vm.updateLobParam(), this.videoEndEmitted = !1;
                var t = 0;
                this.userSetting.isSkip && this.skipStartTime > 0 && t < this.skipStartTime && (Yi.info(Qp, "skip start is on, seek to " + t), t = this.skipStartTime, this.children.tip.showBottomTip({
                    _type: "skipStartTPL",
                    _time: 2e3
                })), this.stopLoad(), this.startLoad(), this.seek(t), this.play()
            },
            adLockUI: function (t, e) {
                void 0 === t && (t = !0), void 0 === e && (e = "adsdk"), t ? (this.adlock = !0, this.lockReason = e, this._disable(!0), Ae(this.$dom, {
                    visibility: "hidden"
                })) : (this.adlock = !1, this.lockReason = "", this._disable(!1), Ae(this.$dom, {
                    visibility: "visible"
                }))
            },
            addEvent: function () {
                this.$controlWrap.on("mouseover", this._isShowControl), this.$controlWrap.on("mouseenter", this._isShowControl), this.$controlWrap.on("mouseout", this._isHideControl)
            },
            _progressUpdate: function () {
                this.children.progressBar && this.children.progressBar.update(), this.children.progressTime && this.children.progressTime.updatePass()
            },
            _onSeeked: function (t) {
                if (t > 0) {
                    var e = this.currentTime + 10;
                    this.currentTime = e > this.duration ? this.duration : e, this._mousemove()
                } else {
                    var i = this.currentTime - 10;
                    this.currentTime = i < 0 ? 0 : i, this._mousemove()
                }
            },
            getUserSetting: function () {
                this.userSetting = {
                    isSkip: 0 !== zi.get("mango-skip-start"),
                    isLoop: zi.get("mango-loop-open"),
                    volume: zi.get("mango-volume") || .5,
                    playbackRate: zi.get("mango-playback-rate") || 3,
                    fullscreenRatio: 100,
                    danmuSwitch: zi.get("mango-danmu-switch"),
                    subtitleLanguage: zi.get("mango-subtitleLanguage")
                }
            },
            resumePip: function () {
                document.pictureInPictureElement && (document.exitPictureInPicture(), this.requestPictureInPicture())
            },
            trialViewEnd: function () {
                return 200 != this.videoinfo.user.purview && (this.currentTime >= this.videoinfo.info.trialtime || 0 == this.videoinfo.info.trialtime) && (this.emit("showVipDialog", this.videoinfo), !0)
            },
            detectVideoSkipEnd: function () {
                if (!this.vm._config.isLive && !this.adlock && !this.trialViewEnd() && this.userSetting.isSkip && this.skipEndTime > 0) {
                    var t = this.currentTime - this.skipEndTime;
                    t > .5 && t < 3 && this.endOfVideo()
                }
            },
            endOfVideo: function () {
                this.videoEndEmitted || (this.vm.stopLoad(), this.vm.pause(), this.vm.emit("videoEnd"), Yi.info(Qp, "send player event [videoEnd] by detectVideoSkipEnd"), this.videoEndEmitted = !0)
            },
            detectVideoWillEnd: function () {
                var t = this.children,
                    e = (t.playNext, t.nextTip),
                    i = t.tip;
                if (!this.vm._config.isLive && !this.adlock && !this.trialViewEnd()) {
                    var n = this.duration || this.videoinfo.info.duration;
                    this.userSetting.isSkip && this.skipEndTime > 0 && (n = this.skipEndTime);
                    var r = parseInt(n - this.currentTime);
                    if (n > 60 && r <= 10 && r > 0 && !this.videoWillEndFlag) {
                        this.videoWillEndFlag = !0;
                        var o = Math.floor(r / this.playbackRate);
                        this.vm.emit("videoWillEnd", {
                            time: o
                        }), "200" == this.videoinfo.user.purview && e && e.onVideoWillEnd({
                            time: o
                        }), this.userSetting.isSkip && this.skipEndTime > 0 && i && i.showBottomTip({
                            _type: "skipEndTPL",
                            _time: 2e3
                        })
                    } else this.videoWillEndFlag && (r > 10 || r < 0) && (this.videoWillEndFlag = !1, e && e.cancelVideoEnd(), this.vm.emit("cancelVideoWillEnd"))
                }
            },
            seekVideo: function (t) {
                this.currentTime = t, t > this.duration && this.detectVideoWillEnd()
            },
            _isShowControl: function () {
                this.autoHideControlsLock = !0
            },
            _isHideControl: function () {
                this.autoHideControlsLock = !1, this._hideItself()
            },
            _hideItself: function (t) {
                var e = this;
                return !this.autoHideControlsLock && (!this.userIsDragging && (t = t || this.config.hideBarTime, window.clearTimeout(this.timeId), void(this.timeId = setTimeout(function () {
                    var t = e.$wrap.offsetHeight;
                    t = Zp ? -8 - t : -2 - t, _e(e.$dom, "hide"), Ae(e.$wrap, {
                        bottom: t + "px"
                    }), e.$status && Ae(e.$status, {
                        top: "-80px"
                    }), e.emit("controlbarChange", {
                        visible: !1
                    }), (e.isWebFullScreen || e.isFullScreen) && Ae(e.__wrapper, {
                        cursor: "none"
                    })
                }, t))))
            },
            _showItself: function () {
                window.clearTimeout(this.timeId), this.emit("controlbarChange", {
                    visible: !0
                }), be(this.$dom, "hide"), Ae(this.$dom, {
                    display: "block"
                }), Ae(this.$wrap, {
                    bottom: "0"
                }), Ae(this.__wrapper, {
                    cursor: "default"
                }), this.$status && Ae(this.$status, {
                    top: "0px"
                })
            },
            _display: function () {
                var t = this.show ? "block" : "none";
                Ae(this.$dom, {
                    display: t
                })
            },
            _mousemove: function (t) {
                this.adlock || this.guideShow || (this._showItself(), this._hideItself())
            },
            _disable: function (t) {
                this.show && (this.disabled = t, Ae(this.$wrap, "pointerEvents", t ? "none" : "auto"))
            }
        }
    };

function em(t) {
    var e = void 0 === t ? {} : t,
        i = e.tagName,
        n = void 0 === i ? "mango-popup" : i,
        r = e.className,
        o = e.name,
        s = void 0 === o ? "popup" : o,
        a = e.html,
        h = e.title,
        c = void 0 === h ? "这是一个信息框" : h,
        u = e.body,
        l = void 0 === u ? "这里是信息内容" : u,
        d = e.offsetAttr,
        f = void 0 === d ? "left top" : d,
        p = e.offset,
        m = void 0 === p ? "50% 50%" : p,
        v = e.translate,
        g = void 0 === v ? "" : v,
        y = e.width,
        _ = e.height,
        b = e.level,
        E = e.init,
        S = e.inited,
        T = e.data,
        x = e.create,
        A = e.beforeCreate,
        C = e.destroy,
        R = e.events,
        I = e.computed,
        L = e.methods,
        P = void 0 === L ? {} : L,
        D = e.penetrate,
        M = void 0 !== D && D,
        B = e.operable,
        O = void 0 === B || B,
        U = e.hide,
        F = void 0 !== U && U,
        V = e.opened,
        z = e.closed,
        H = e.autoFocus,
        j = {
            html: a || "\n      <mg-popup-close>×</mg-popup-close>\n      " + (!1 !== c ? "<mg-popup-head>" + c + "</mg-popup-head>" : "") + "\n      " + (!1 !== l ? "<mg-popup-body>" + l + "</mg-popup-body>" : "") + "\n    ",
            closeSelector: "._close"
        };
    return {
        name: s,
        el: n,
        className: r,
        beforeCreate: function (t, e) {
            var i = void 0 === t ? {} : t,
                n = i.events,
                r = i.methods;
            k(e) && (k(e.events) && N(n, e.events), k(e.methods) && N(r, e.methods)), A && A.apply(this, arguments)
        },
        create: function () {
            var t = k(this.$config) ? N(j, this.$config) : j;
            (this.$domWrap = Ie(this.$dom).css("display", "none")).html(t.html).delegate("mg-popup-close, " + t.closeSelector, "click", this.close), this.width(y).height(_).offset(m).translate(g), this._hide = F;
            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            x && x.apply(this, i), !this._hide && this.open()
        },
        destroy: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            C && C.apply(this, e), this.$domWrap.undelegate(this.$config.closeSelector, "click", this.close).remove()
        },
        level: b,
        init: E,
        inited: S,
        data: T,
        events: R,
        computed: I,
        penetrate: M,
        operable: O,
        autoFocus: H,
        methods: N({
            open: function () {
                if (this.destroyed) return this;
                this.$domWrap.css("display", "block"), this._hide = !1;
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return this.$emit("popupOpen", e, this), w(V) && V.apply(this, e), this
            },
            close: function () {
                if (this.destroyed) return this;
                this.$domWrap.css("display", "none"), this._hide = !0;
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return this.$emit("popupClose", e, this), w(z) && z.apply(this, e), this
            },
            width: function (t) {
                return t && this.$domWrap.css("width", t), this
            },
            height: function (t) {
                return t && this.$domWrap.css("height", t), this
            },
            offset: function (t) {
                var e = ("" + (t || "")).split(" "),
                    i = {};
                if (e.length > 2) return ["top", "right", "bottom", "left"].forEach(function (t, n) {
                    e[n] && (i[t] = e[n])
                }), this.$domWrap.css(i), this;
                var n = e[0],
                    r = e[1];
                if ("" === n) return this;
                var o = r || n,
                    s = f.split(" ");
                i[s[0]] = n, i[s[1]] = o, this.$domWrap.css(i);
                var a = [];
                return "50%" === n && a.push("-50%"), "50%" === o && a.push("-50%"), a.length > 0 && this.translate(a.join(" ")), this
            },
            translate: function (t) {
                var e = ("" + (t || "")).split(" "),
                    i = e[0],
                    n = e[1];
                return "" !== i && (this.$domWrap.css("transform", "translate(" + i + ", " + (n || i) + ")"), !("transform" in document.createElement("a").style) && window.console && window.console.warn), this
            }
        }, P)
    }
}
var im = ["currentTime", "buffered", "currentSrc", "duration", "error", "ended", "networkState", "paused", "readyState", "seekable", "sinkId", "controlsList", "tabIndex", "dataset", "offsetHeight", "offsetLeft", "offsetParent", "offsetTop", "offsetWidth"],
    nm = /iPad/i.test(navigator.userAgent),
    rm = function (t) {
        function e(e) {
            var i;
            return (i = t.call(this) || this).Log = Yi, i.reset(), i.init(), i.__vm = e.vm, i.videoId = e.videoId, i.adContainer = e.vm.$dom, i
        }
        r(e, t);
        var i = e.prototype;
        return i.init = function () {}, i.restoreVolume = function () {
            this._volume && (this.__vm.volume = this._volume, this.__vm.muted = !1, this._volume = null)
        }, i.mute = function () {
            this.__vm.muted = !0, this.isAdMute = !0, this._volume = this.__vm.volume, this.__vm.volume = 0
        }, i.unmute = function () {
            this.__vm.muted = !1, this.restoreVolume()
        }, i.fullScreen = function () {
            nm ? this.__vm.vm.__dispatcher.dom.videoElement.webkitEnterFullscreen() : this.__vm.$fullscreen(!0, "container")
        }, i.captureScreen = function (t) {
            var e = this.__vm.vm,
                i = e.__dispatcher.dom.videoElement;
            return e._config.useFlash || dt.safari ? null : Bt(i, t)
        }, i.exitFullScreen = function () {
            nm || this.__vm.$fullscreen(!1, "container")
        }, i.reset = function () {
            this._isPlayingMidAd = !1, this._isPlayingFrontAd = !0, this._videoTime = 0
        }, i.getVideoInfo = function () {
            return this.__vm.getVideoInfo()
        }, i.getVideoType = function () {
            return this.__vm.isLive ? "live" : "vod"
        }, i.restoreLevel = function () {
            this.__vm.restoreLevel()
        }, i.bumpToTop = function () {
            this.__vm.bumpToTop()
        }, i.adFrontLoad = function () {
            this.__vm.onFrontAdLoad()
        }, i.midAdStart = function () {
            this._videoTime = this.__vm.currentTime, this._isPlayingMidAd = !0, this.__vm.midAdStart()
        }, i.preloadInitUrls = function (t) {
            this.__vm.initPreloadUrls(t)
        }, i.initUrls = function (t) {
            this.__vm.initUrls(t)
        }, i.playNext = function () {
            return this.__vm.playNextAdFragment()
        }, i.pause = function () {
            this.__vm.pause()
        }, i.getVideoSize = function () {
            return {
                isFloating: this.__vm.vm.getFloatWindowMode(),
                height: parseInt(this.__vm.container.height),
                width: parseInt(this.__vm.container.width)
            }
        }, i.resume = function () {
            this.__vm.play()
        }, i.midAdWillBegin = function (t) {
            void 0 === t && (t = 5), this.__vm.emit("midAdWillBegin", {
                time: t
            })
        }, i.lockUI = function () {
            this.__vm.emit("lockUI")
        }, i.unlockUI = function () {
            Yi.info("adsdk", "unlock ui .... "), this.__vm.emit("unlockUI")
        }, i.adVideoEnd = function (t) {
            1 == t ? this._isPlayingFrontAd = !1 : 2 == t && (this._isPlayingMidAd = !1), this.__vm.onAdEnd(t)
        }, i.loadSource = function (t) {
            this.__vm.onLoadSource(t)
        }, i.getVideo = function () {
            return this
        }, i.getVideoStartTime = function () {
            return this.__vm.vm.cms.getStartTime()
        }, i.getVideoProperty = function (t) {
            return -1 !== im.indexOf(t) ? this.__vm[t] : void 0
        }, i.pushAdDanmu = function (t) {
            var e = this.__vm.vm.mangoDanmu;
            t.type = 99, e && e.danmuWrapper.push(t)
        }, i.getDanmuStatus = function () {
            var t = this.__vm.vm.mangoDanmu;
            return t ? t.status : "unload"
        }, i.getVideoCurrentTime = function () {
            return this._isPlayingFrontAd || this._isPlayingMidAd || !this.isVideoPlaying ? this._videoTime : this.__vm.currentTime
        }, i.getVideoPlayInfo = function (t) {
            t && t instanceof Array || (t = ["currentTime"]);
            for (var e, i = {}, n = u(t); !(e = n()).done;) {
                var r = e.value;
                if ("currentTime" == r) i.currentTime = this._isPlayingFrontAd || this._isPlayingMidAd ? this._videoTime : this.__vm.currentTime;
                else if ("speed" == r) i.speed = this.__vm.speed;
                else if ("size" == r) {
                    var o = this.__vm.container.width * this.__vm.ratio / 100,
                        s = this.__vm.container.height;
                    o / s > 16 / 9 ? o = s * (16 / 9) : s = o / (16 / 9), i.size = {
                        width: o,
                        height: s
                    }
                } else "quality" == r && (i.quality = this.__vm.quality)
            }
            return i
        }, i.addListener = function (t, e, i) {
            this.on(t, e.bind(i))
        }, i.addEventListener = function (t, e, i) {
            this.on(t, e.bind(i))
        }, i.removeEventListener = function (t) {
            this.off(t)
        }, i.removeListener = function (t) {
            this.off(t)
        }, i.dispose = function () {
            delete this.idx, delete this.adData
        }, n(e, [{
            key: "isMute",
            get: function () {
                return this.__vm.muted
            }
        }, {
            key: "isFullScreen",
            get: function () {
                return !!this.__vm.fullscreenElement
            }
        }]), e
    }(fe),
    om = "PluginAd",
    sm = /iPad/i.test(navigator.userAgent),
    am = function (t, e, i) {
        t && t.emit && t.emit(e, i)
    },
    hm = 1,
    cm = 2,
    um = em({
        tagName: "mango-plugin-ad",
        name: "mangoAdPlugin",
        html: "  ",
        offset: "0",
        hide: !1,
        operable: !1,
        level: 99,
        data: {
            downcountTimer: 0,
            blackTimer: 0,
            videoinfo: {},
            isAdPlaying: !1,
            isAdMute: !1,
            isAdFullScreen: !1,
            playerStatus: 0,
            isAdBlocked: !1,
            status: hm,
            adFetcher: {},
            index: -1,
            atc: null,
            adsdk: {},
            videoObject: {},
            adData: {
                info: {},
                urls: []
            },
            speed: 1,
            quality: {},
            ratio: 100,
            isPreload: !1,
            preloadAdData: null
        },
        init: function () {
            this.vm = this.__dispatcher.vm, this.isIntelMgtv = "1" == this.vm.config.i18n;
            var t = Rt(this.vm, "_config.lobparam.cpn");
            this.isPreview = 33 == t || 34 == t, this.videoObject = new rm({
                vm: this,
                videoId: this.vm._config.video_id
            }), this.vm.config.isLive ? window.getPCLiveADObject && !this.isPreview && (this.adsdk = window.getPCLiveADObject(this.vm.config.lobparam), this.adsdk.init(this.videoObject)) : window.getADObject && !this.isPreview && (this.adsdk = window.getADObject(this.vm.config.lobparam), this.adsdk.init(this.videoObject))
        },
        destroy: function () {
            this.adsdk && this.adsdk.dispose && this.adsdk.dispose(), this.videoObject && this.videoObject.dispose(), delete this.videoObject, delete this.adsdk
        },
        events: {
            fullscreenchange: function () {
                am(this.videoObject, "fullscreenchange")
            },
            nextVideoPlay: function (t) {
                am(this.videoObject, "nextVideoPlay", t)
            },
            pushMessage: function (t) {
                am(this.videoObject, "pushMessage", t)
            },
            switchPlayRate: function (t) {
                this.speed = t.rate, am(this.videoObject, "switchPlayRate", this.speed)
            },
            switchClarity: function (t) {
                this.quality = t, am(this.videoObject, "switchClarity", this.quality)
            },
            clarityChanged: function (t) {
                this.quality = t.stream, am(this.videoObject, "clarityChanged", this.quality)
            },
            clarityData: function (t) {
                this.quality = t.def
            },
            ratioChange: function (t) {
                this.ratio = t.ratio, am(this.videoObject, "ratioChange", t)
            },
            error: function () {
                am(this.videoObject, "error")
            },
            playing: function () {
                var t = this;
                setTimeout(function () {
                    dt.chrome && dt.version.major >= 86 && t.volume > 0 && !t.muted && (t.volume += 1e-7)
                }, 100), am(this.videoObject, "playing")
            },
            pause: function () {
                am(this.videoObject, "pause")
            },
            resume: function () {
                am(this.videoObject, "resume")
            },
            loadedmetadata: function () {
                am(this.videoObject, "loadedmetadata")
            },
            ended: function () {
                am(this.videoObject, "ended")
            },
            timeupdate: function () {
                am(this.videoObject, "timeupdate")
            },
            c_resize: function () {
                am(this.videoObject, "c_resize")
            },
            videoInfoData: function (t) {
                if (this.isPreload = t.isPreload, "loadComplete" == t.status) {
                    if (this.videoinfo = t.data, 200 != this.videoinfo.user.purview && 0 == this.videoinfo.info.trialtime) return;
                    (!window.getADObject || this.isPreview || this.isIntelMgtv) && this.onLoadSource();
                    var e = t.isPreload ? "preloadCmsData" : "cmsData";
                    am(this.videoObject, e, t)
                }
            },
            liveSource: function (t) {
                am(this.videoObject, "liveSource", t)
            },
            frontAdPlay: function () {
                this.videoObject.isVideoPlaying = !1, Yi.info(om, "Front advertisement is playing, duration " + this.adData.duration), am(this.videoObject, "frontAdPlay")
            },
            splashShow: function (t) {
                am(this.videoObject, "splashShow", t)
            },
            controlbarChange: function (t) {
                am(this.videoObject, "controlbarChange", t)
            },
            progressbarHover: function (t) {
                am(this.videoObject, "progressbarHover", t)
            },
            progressbarUpdate: function (t) {
                am(this.videoObject, "progressbarUpdate", t)
            },
            midAdPlay: function () {
                this.videoObject.isVideoPlaying = !1, Yi.info(om, "Middle advertisement is playing, duration " + this.adData.duration), am(this.videoObject, "midAdPlay")
            },
            videoPlay: function () {
                this.isAdPlaying = !1, this.videoObject.isVideoPlaying = !0, am(this.videoObject, "videoPlay")
            },
            videoDrag: function () {
                this.videoObject.isVideoPlaying = !0, am(this.videoObject, "videoDrag")
            },
            videoPause: function () {
                this.videoObject.isVideoPlaying = !1, am(this.videoObject, "videoPause")
            },
            videoUserPause: function () {
                this.videoObject.isVideoPlaying = !1, am(this.videoObject, "videoUserPause")
            },
            videoResume: function () {
                this.videoObject.isVideoPlaying = !0, am(this.videoObject, "videoResume")
            },
            videoResumeMid: function () {
                this.videoObject.isVideoPlaying = !0, am(this.videoObject, "videoResumeMid")
            },
            videoEnd: function () {
                am(this.videoObject, "videoEnd")
            },
            videoReload: function (t) {
                var e, i;
                (this.status = hm, null != t && t.preloadSuccess && this.isPreload) ? (this.adData = this.preloadAdData, this.preloadAdData = null, this.isPreload = !1, (null === (e = this.adData) || void 0 === e ? void 0 : null === (i = e.urls) || void 0 === i ? void 0 : i.length) > 0 || this.emit("frontAdEnd")) : (this.isPreload = !1, this.reset(), this.videoObject && this.videoObject.reset && this.videoObject.reset());
                clearTimeout(this.blackTimer), clearInterval(this.downcountTimer), clearTimeout(this.jumpAdTipTimer), am(this.videoObject, "videoReload")
            },
            apiRequestError: function (t) {
                am(this.videoObject, "apiRequestError"), this.pause()
            },
            switchCamera: function () {
                this.status = hm, this.reset(), this.videoObject.reset(), clearTimeout(this.blackTimer), clearInterval(this.downcountTimer), clearTimeout(this.jumpAdTipTimer), am(this.videoObject, "videoReload")
            },
            danmuStatusChange: function (t) {
                void 0 !== t.state && am(this.videoObject, "danmuStatusChange", Boolean(t.state))
            }
        },
        methods: {
            restoreLevel: function () {
                this.$level = 0
            },
            bumpToTop: function () {
                this.$bumpToTop()
            },
            getVideoInfo: function () {
                return this.vm.getVideoInfo()
            },
            playNextAdFragment: function () {
                var t = this;
                if (this.index++, this.adData.urls.length <= this.index) return !1;
                var e = this.adData.urls[this.index],
                    i = this.adData.urls[this.index + 1];
                if (sm) this.load({
                    src: e.url,
                    box: "native"
                }), this.play(), Yi.warn(om, "playing the [" + this.index + "th] ad fragment, url " + e.url);
                else {
                    var n = this.vm._config.useFlash ? "flash" : "native",
                        r = function (e) {
                            i && i.url && (t.preloadTimer && clearTimeout(t.preloadTimer), t.preloadTimer = setTimeout(function () {
                                t.vm.$preLoadAd(i.url, {
                                    box: n
                                }).then(function (t) {
                                    Yi.warn("cms", "preload next ad, source [" + i.url + "].")
                                }).catch(function (e) {
                                    am(t.videoObject, "error", e)
                                })
                            }, 1e3 * e))
                        };
                    0 == this.index && e && e.url ? (this.load({
                        src: e.url,
                        box: n
                    }), Yi.warn(om, "playing the [" + this.index + "th] ad fragment, url " + e.url), r(e.duration - 5)) : this.vm.$playNextAd().then(function () {
                        r(e.duration - 5)
                    }).catch(function (i) {
                        "no perload" === i ? (t.load({
                            src: e.url,
                            box: n
                        }), r(e.duration - 5)) : r(0)
                    })
                }
                return this.status == hm && 0 == this.index && this.adData.urls.length > 0 && (this.isAdPlaying = !0, this.emit("frontAdReady")), !0
            },
            onFrontAdLoad: function () {
                Yi.info(om, "Fetching front advertisement ..."), this.vm = this.__dispatcher.vm, this.lobparam = this.vm._config.lobparam || {}, this.emitSync("frontAdBegin"), this.status = hm
            },
            initPreloadUrls: function (t) {
                var e = t.urls.reduce(function (t, e) {
                    return t.push({
                        url: e,
                        duration: 0,
                        showdetail: !1,
                        jump: ""
                    }), t
                }, []);
                this.preloadAdData = {
                    urls: e
                }, this.emit("fontAdUrls")
            },
            initUrls: function (t) {
                if (t && t.urls) {
                    var e = 0;
                    t.urls.forEach(function (t) {
                        t.duration && !isNaN(t.duration) || (t.duration = 0), e = t.duration + e
                    }), t.duration = e, this.status == hm ? (this.index = -1, this.adData = t, Yi.info(om, "Fetch front advertisement ok, total " + (t && t.urls.length) + " ads."), this.emitSync("startPoint", "adRequest")) : this.status == cm && (this.index = -1, this.adData = t, Yi.info(om, "Fetch middile advertisement ok, total " + (t && t.urls.length) + " ads."))
                } else Yi.warn(om, "initUrls params validate error.")
            },
            reset: function () {
                this.atc = null, this.adData = {
                    info: {},
                    urls: []
                }, this.isAdBlocked = !1, this.index = -1, this.preloadTimer && clearTimeout(this.preloadTimer)
            },
            midAdStart: function () {
                Yi.info(om, "Middle advertisement begin."), this.status = cm, this.emit("midAdBegin", {
                    time: this.currentTime
                })
            },
            onAdEnd: function (t) {
                this.isAdPlaying = !1, 1 == t ? this.isAdBlocked || (Yi.info(om, "Front Advertisement ended, status [normal]."), this.emitSync("frontAdEnd", {
                    duration: this.adData && this.adData.duration || 0,
                    total: this.adData && this.adData.urls.length || 0,
                    atc: this.atc,
                    adStatus: "normal"
                }), this.videoObject.restoreVolume(), this.status = cm, this.emitSync("startPoint", "adComplete")) : 2 == t && (Yi.info(om, "Middle Advertisement ended."), this.emit("midAdEnd"), this.videoObject.restoreVolume())
            },
            onLoadSource: function (t) {
                var e, i = this;
                if (t) Yi.info(om, "Advertisement is about to end, prefetch video source is allowed."), this.atc = t, this.isPreload ? this.emit("preloadVideoPrefetch", {
                    atc: this.atc,
                    adStatus: "normal"
                }) : this.emit("videoPrefetch", {
                    atc: this.atc,
                    adStatus: "normal"
                });
                else {
                    this.isAdBlocked = !0;
                    var n = ~~Tt("blt", (e = this.videoinfo.atc.tk2, atob(e.split("").reverse().join("").replace(/-/g, "=").replace(/~/g, "/").replace(/_/g, "+"))).replace(/\|/g, "&"));
                    Yi.info(om, "Advertisement was blocked, punish black screen for [" + n + "] seconds."), n >= 0 && (this.emit("adBlockException", {
                        type: "front",
                        url: "",
                        blacktime: n
                    }), this.blackTimer = setTimeout(function () {
                        i.emit("frontAdEnd", {
                            adStatus: "abnormal",
                            atc: i.videoinfo.atc
                        }), Yi.info(om, "Black screen punishment ended. trying to fetch video source..."), i.status = cm
                    }, 1e3 * n))
                }
            }
        }
    }),
    lm = {
        debug: !1,
        credits_url: "//credits.bz.mgtv.com/user/creditsBalance?",
        apiEndpoint: "//galaxy.bz.mgtv.com",
        maxTimeout: 1e4,
        minimalStageHeight: 360,
        renderInterval: 1050,
        cacheSize: 1e4,
        preRenderTime: 5e3,
        timeTolerance: 1e3,
        backTimeTorrence: 2,
        maxArtistCacheSize: 20,
        stageWidths: [360, 860, 1340],
        fontSize: 24,
        gap: 80,
        padding: 36,
        paddingBottom: 60,
        paddingTop: 20,
        lineHeight: 40,
        mode: "css",
        updateByVideo: !0,
        datamode: "batch",
        minScrollSpeed: 1.8,
        maxScrollSpeed: 2,
        speedFactor: 1,
        floatDanmuSize: .3,
        autoHideTimeout: 1e3,
        defaultConfig: {
            range: .4,
            fontSize: 1,
            alpha: 1,
            speed: 1,
            aiswitcher: !1
        },
        settingRange: {
            range: [.1, 1],
            fontSize: [.5, 2],
            alpha: [.1, 1],
            speed: [.5, 1.5]
        }
    },
    dm = function () {
        function t() {
            this.eventMaps = {}
        }
        var e = t;
        e.createBus = function (e) {
            return this.dict[e] = new t
        }, e.getBus = function (e) {
            return void 0 === e && (e = "root"), "root" == e ? (this.dict.root || (this.dict.root = new t), this.dict.root) : this.dict[e] || this.createBus(e)
        };
        var i = t.prototype;
        return i.handleEvent = function (t, e) {
            var i = this.eventMaps[t];
            i && i.forEach(function (t) {
                t(e)
            })
        }, i.addEventListener = function (t, e) {
            this.eventMaps[t] || (this.eventMaps[t] = []), this.eventMaps[t].push(e)
        }, i.dispatch = function (t, e) {
            this.eventMaps[t] && this.eventMaps[t].forEach(function (t) {
                t(e)
            })
        }, i.hasEventListener = function (t) {
            return this.eventMaps[t] && this.eventMaps[t].length > 0
        }, i.removeEventListener = function (t, e) {
            var i = this;
            this.eventMaps[t] && this.eventMaps[t].forEach(function (n) {
                n == e && i.eventMaps[t].splice(i.eventMaps[t].indexOf(n), 1)
            })
        }, t.dict = {}, t
    }();

function fm(t) {
    return void 0 === t && (t = "root"),
        function (e, i) {
            e[i] = dm.getBus(t)
        }
}
var pm = function () {
    function t(t) {
        this.lastIndex = 0, this.origin = "", this.initUrl(t)
    }
    var e = t.prototype;
    return e.initUrl = function (t) {
        this.loadList(t), this.origin = new RegExp("^https?://[\\w-.]+(:\\d+)?", "i").exec(t)[0]
    }, e.loadList = function (t) {
        return Pu(this, void 0, void 0, function () {
            var e;
            return Du(this, function (i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 3, , 4]), [4, fetch(t)];
                    case 1:
                        return [4, i.sent().json()];
                    case 2:
                        return e = i.sent(), this.list = e, [2, e];
                    case 3:
                        return i.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            })
        })
    }, e.getFrameRate = function () {
        return this.list ? this.list.frameRate : 25
    }, e.getMask = function (t) {
        t = Math.floor(1e3 * t) / 1e3;
        var e = 1 / this.getFrameRate(),
            i = this.findFragment(t, e);
        if (i && i.data) {
            var n = i.data.picList[this.lastIndex];
            if (n && t > n.ptsTime && t < n.ptsTime + e) return n;
            if (i.data.picList.length > this.lastIndex + 1) {
                var r = i.data.picList[this.lastIndex + 1];
                if (t > r.ptsTime && t < r.ptsTime + e) return this.lastIndex += 1, r
            }
            for (var o = 0; o < Math.min(10, i.data.picList.length); o++) {
                if (t > (c = i.data.picList[o]).ptsTime && t < c.ptsTime + e) return this.lastIndex = o, c
            }
            for (var s = 0, a = i.data.picList.length - 1, h = 0; s < a;) {
                var c, u = a + s >> 1;
                if (t >= (c = i.data.picList[u]).ptsTime && t < c.ptsTime + e) return this.lastIndex = u, c;
                if (t < c.ptsTime ? a = u : s = u, ++h >= i.data.picList.length) break
            }
        }
        return {
            ptsTime: 0,
            image: ""
        }
    }, e.update = function (t) {
        var e = 1 / this.getFrameRate(),
            i = this.findFragment(t + 5, e);
        !i || i.data || i.loading || (i.loading = !0, this.loadSegment(i))
    }, e.loadSegment = function (t) {
        return Pu(this, void 0, void 0, function () {
            var e, i;
            return Du(this, function (n) {
                switch (n.label) {
                    case 0:
                        e = t.maskURL, n.label = 1;
                    case 1:
                        return n.trys.push([1, 4, , 5]), [4, fetch(this.origin + e)];
                    case 2:
                        return [4, n.sent().json()];
                    case 3:
                        return i = n.sent(), t.data = i, t.loading = !1, [3, 5];
                    case 4:
                        return n.sent(), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, e.findFragment = function (t, e) {
        if (this.list)
            for (var i = 0, n = this.list.segmentList; i < n.length; i++) {
                var r = n[i];
                if (r.ptsStartTime < t && r.ptsEndTime + e > t) return r
            }
        return null
    }, t
}();
Array.prototype.includes || f(Array.prototype, "includes", {
    value: function (t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
            n = i.length >>> 0;
        if (0 === n) return !1;
        for (var r = 0 | e, o = Math.max(r >= 0 ? r : n - Math.abs(r), 0); o < n;) {
            if (function (t, e) {
                    return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                }(i[o], t)) return !0;
            o++
        }
        return !1
    }
});
var mm = {},
    vm = [];

function gm(t, e) {
    if (Array.isArray(t))
        for (var i, n = u(t); !(i = n()).done;) {
            gm(i.value, e)
        } else if ("object" != typeof t) _m(Object.getOwnPropertyNames(e)), mm[t] = m(mm[t] || {}, e);
        else
            for (var r in t) gm(r, t[r])
}

function ym(t) {
    return mm[t] || {}
}

function _m(t) {
    vm.push.apply(vm, t)
}

function bm(t, e) {
    var i, n = t.length,
        r = [];
    for (i = 0; i < n; i++) r.push(e(t[i]));
    return r
}

function wm(t) {
    return t % 360 * Math.PI / 180
}

function km(t) {
    return t.toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase()
    })
}

function Em(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
}

function Sm(t, e, i, n) {
    return null != e && null != i || (n = n || t.bbox(), null == e ? e = n.width / n.height * i : null == i && (i = n.height / n.width * e)), {
        width: e,
        height: i
    }
}

function Tm(t, e) {
    var i = t.origin,
        n = null != t.ox ? t.ox : null != t.originX ? t.originX : "center",
        r = null != t.oy ? t.oy : null != t.originY ? t.originY : "center";
    if (null != i) {
        var o = Array.isArray(i) ? i : "object" == typeof i ? [i.x, i.y] : [i, i];
        n = o[0], r = o[1]
    }
    var s = "string" == typeof n,
        a = "string" == typeof r;
    if (s || a) {
        var h = e.bbox(),
            c = h.height,
            u = h.width,
            l = h.x,
            d = h.y;
        s && (n = n.includes("left") ? l : n.includes("right") ? l + u : l + u / 2), a && (r = r.includes("top") ? d : r.includes("bottom") ? d + c : d + c / 2)
    }
    return [n, r]
}
var xm = "http://www.w3.org/2000/svg",
    Am = "http://www.w3.org/2000/xmlns/",
    Cm = "http://www.w3.org/1999/xlink",
    Rm = {
        window: "undefined" == typeof window ? null : window,
        document: "undefined" == typeof document ? null : document
    },
    Im = function () {},
    Lm = {},
    Pm = "___SYMBOL___ROOT___";

function Dm(t, e) {
    return void 0 === e && (e = xm), Rm.document.createElementNS(e, t)
}

function Mm(t, e) {
    if (void 0 === e && (e = !1), t instanceof Im) return t;
    if ("object" == typeof t) return Um(t);
    if (null == t) return new Lm[Pm];
    if ("string" == typeof t && "<" !== t.charAt(0)) return Um(Rm.document.querySelector(t));
    var i = e ? Rm.document.createElement("div") : Dm("svg");
    return i.innerHTML = t, t = Um(i.firstChild), i.removeChild(i.firstChild), t
}

function Bm(t, e) {
    return e instanceof Rm.window.Node ? e : Dm(t)
}

function Om(t) {
    if (!t) return null;
    if (t.instance instanceof Im) return t.instance;
    if ("#document-fragment" === t.nodeName) return new Lm.Fragment(t);
    var e = Em(t.nodeName || "Dom");
    return "LinearGradient" === e || "RadialGradient" === e ? e = "Gradient" : Lm[e] || (e = "Dom"), new Lm[e](t)
}
var Um = Om;

function Fm(t, e, i) {
    return void 0 === e && (e = t.name), void 0 === i && (i = !1), Lm[e] = t, i && (Lm[Pm] = t), _m(Object.getOwnPropertyNames(t.prototype)), t
}
var Nm = 1e3;

function Vm(t) {
    return "Svgjs" + Em(t) + Nm++
}

function zm(t, e) {
    var i, n;
    for (n = (t = Array.isArray(t) ? t : [t]).length - 1; n >= 0; n--)
        for (i in e) t[n].prototype[i] = e[i]
}

function Hm(t) {
    return function () {
        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
        var r = i[i.length - 1];
        return !r || r.constructor !== Object || r instanceof Array ? t.apply(this, i) : t.apply(this, i.slice(0, -1)).attr(r)
    }
}
gm("Dom", {
    siblings: function () {
        return this.parent().children()
    },
    position: function () {
        return this.parent().index(this)
    },
    next: function () {
        return this.siblings()[this.position() + 1]
    },
    prev: function () {
        return this.siblings()[this.position() - 1]
    },
    forward: function () {
        var t = this.position();
        return this.parent().add(this.remove(), t + 1), this
    },
    backward: function () {
        var t = this.position();
        return this.parent().add(this.remove(), t ? t - 1 : 0), this
    },
    front: function () {
        return this.parent().add(this.remove()), this
    },
    back: function () {
        return this.parent().add(this.remove(), 0), this
    },
    before: function (t) {
        (t = Mm(t)).remove();
        var e = this.position();
        return this.parent().add(t, e), this
    },
    after: function (t) {
        (t = Mm(t)).remove();
        var e = this.position();
        return this.parent().add(t, e + 1), this
    },
    insertBefore: function (t) {
        return (t = Mm(t)).before(this), this
    },
    insertAfter: function (t) {
        return (t = Mm(t)).after(this), this
    }
});
var jm = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
    $m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    Wm = /rgb\((\d+),(\d+),(\d+)\)/,
    qm = /(#[a-z_][a-z0-9\-_]*)/i,
    Gm = /\)\s*,?\s*/,
    Km = /\s/g,
    Ym = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,
    Xm = /^rgb\(/,
    Zm = /^(\s+)?$/,
    Qm = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    Jm = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
    tv = /[\s,]+/,
    ev = /[MLHVCSQTAZ]/i;

function iv(t) {
    var e = Math.round(t),
        i = Math.max(0, Math.min(255, e)).toString(16);
    return 1 === i.length ? "0" + i : i
}

function nv(t, e) {
    for (var i = e.length; i--;)
        if (null == t[e[i]]) return !1;
    return !0
}

function rv(t, e, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
}
gm("Dom", {
    classes: function () {
        var t = this.attr("class");
        return null == t ? [] : t.trim().split(tv)
    },
    hasClass: function (t) {
        return -1 !== this.classes().indexOf(t)
    },
    addClass: function (t) {
        if (!this.hasClass(t)) {
            var e = this.classes();
            e.push(t), this.attr("class", e.join(" "))
        }
        return this
    },
    removeClass: function (t) {
        return this.hasClass(t) && this.attr("class", this.classes().filter(function (e) {
            return e !== t
        }).join(" ")), this
    },
    toggleClass: function (t) {
        return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
    }
}), gm("Dom", {
    css: function (t, e) {
        var i = {};
        if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter(function (t) {
            return !!t.length
        }).forEach(function (t) {
            var e = t.split(/\s*:\s*/);
            i[e[0]] = e[1]
        }), i;
        if (arguments.length < 2) {
            if (Array.isArray(t)) {
                for (var n, r = u(t); !(n = r()).done;) {
                    var o = km(n.value);
                    i[o] = this.node.style[o]
                }
                return i
            }
            if ("string" == typeof t) return this.node.style[km(t)];
            if ("object" == typeof t)
                for (var s in t) this.node.style[km(s)] = null == t[s] || Zm.test(t[s]) ? "" : t[s]
        }
        return 2 === arguments.length && (this.node.style[km(t)] = null == e || Zm.test(e) ? "" : e), this
    },
    show: function () {
        return this.css("display", "")
    },
    hide: function () {
        return this.css("display", "none")
    },
    visible: function () {
        return "none" !== this.css("display")
    }
}), gm("Dom", {
    data: function (t, e, i) {
        if (null == t) return this.data(bm(function (t, e) {
            var i, n = t.length,
                r = [];
            for (i = 0; i < n; i++) e(t[i]) && r.push(t[i]);
            return r
        }(this.node.attributes, function (t) {
            return 0 === t.nodeName.indexOf("data-")
        }), function (t) {
            return t.nodeName.slice(5)
        }));
        if (t instanceof Array) {
            for (var n, r = {}, o = u(t); !(n = o()).done;) {
                var s = n.value;
                r[s] = this.data(s)
            }
            return r
        }
        if ("object" == typeof t)
            for (e in t) this.data(e, t[e]);
        else if (arguments.length < 2) try {
            return JSON.parse(this.attr("data-" + t))
        } catch (e) {
            return this.attr("data-" + t)
        } else this.attr("data-" + t, null === e ? null : !0 === i || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
        return this
    }
}), gm("Dom", {
    remember: function (t, e) {
        if ("object" == typeof arguments[0])
            for (var i in t) this.remember(i, t[i]);
        else {
            if (1 === arguments.length) return this.memory()[t];
            this.memory()[t] = e
        }
        return this
    },
    forget: function () {
        if (0 === arguments.length) this._memory = {};
        else
            for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
        return this
    },
    memory: function () {
        return this._memory = this._memory || {}
    }
});
var ov = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        t.isColor = function (e) {
            return e && (e instanceof t || this.isRgb(e) || this.test(e))
        }, t.isRgb = function (t) {
            return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
        }, t.random = function (e, i, n) {
            void 0 === e && (e = "vibrant");
            var r = Math.random,
                o = Math.round,
                s = Math.sin,
                a = Math.PI;
            if ("vibrant" === e) return new t(24 * r() + 57, 38 * r() + 45, 360 * r(), "lch");
            if ("sine" === e) return new t(o(80 * s(2 * a * (i = null == i ? r() : i) / .5 + .01) + 150), o(50 * s(2 * a * i / .5 + 4.6) + 200), o(100 * s(2 * a * i / .5 + 2.3) + 150));
            if ("pastel" === e) return new t(8 * r() + 86, 17 * r() + 9, 360 * r(), "lch");
            if ("dark" === e) return new t(10 + 10 * r(), 50 * r() + 86, 360 * r(), "lch");
            if ("rgb" === e) return new t(255 * r(), 255 * r(), 255 * r());
            if ("lab" === e) return new t(100 * r(), 256 * r() - 128, 256 * r() - 128, "lab");
            if ("grey" === e) {
                var h = 255 * r();
                return new t(h, h, h)
            }
            throw new Error("Unsupported random color mode")
        }, t.test = function (t) {
            return "string" == typeof t && (Ym.test(t) || Xm.test(t))
        };
        var e = t.prototype;
        return e.cmyk = function () {
            var e = this.rgb(),
                i = [e._a, e._b, e._c].map(function (t) {
                    return t / 255
                }),
                n = i[0],
                r = i[1],
                o = i[2],
                s = Math.min(1 - n, 1 - r, 1 - o);
            return 1 === s ? new t(0, 0, 0, 1, "cmyk") : new t((1 - n - s) / (1 - s), (1 - r - s) / (1 - s), (1 - o - s) / (1 - s), s, "cmyk")
        }, e.hsl = function () {
            var e = this.rgb(),
                i = [e._a, e._b, e._c].map(function (t) {
                    return t / 255
                }),
                n = i[0],
                r = i[1],
                o = i[2],
                s = Math.max(n, r, o),
                a = Math.min(n, r, o),
                h = (s + a) / 2,
                c = s === a,
                u = s - a;
            return new t(360 * (c ? 0 : s === n ? ((r - o) / u + (r < o ? 6 : 0)) / 6 : s === r ? ((o - n) / u + 2) / 6 : s === o ? ((n - r) / u + 4) / 6 : 0), 100 * (c ? 0 : h > .5 ? u / (2 - s - a) : u / (s + a)), 100 * h, "hsl")
        }, e.init = function (t, e, i, n, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = "rgb"), t = t || 0, this.space)
                for (var o in this.space) delete this[this.space[o]];
            if ("number" == typeof t) r = "string" == typeof n ? n : r, m(this, {
                _a: t,
                _b: e,
                _c: i,
                _d: n = "string" == typeof n ? 0 : n,
                space: r
            });
            else if (t instanceof Array) this.space = e || ("string" == typeof t[3] ? t[3] : t[4]) || "rgb", m(this, {
                _a: t[0],
                _b: t[1],
                _c: t[2],
                _d: t[3] || 0
            });
            else if (t instanceof Object) {
                var s = function (t, e) {
                    var i = nv(t, "rgb") ? {
                        _a: t.r,
                        _b: t.g,
                        _c: t.b,
                        _d: 0,
                        space: "rgb"
                    } : nv(t, "xyz") ? {
                        _a: t.x,
                        _b: t.y,
                        _c: t.z,
                        _d: 0,
                        space: "xyz"
                    } : nv(t, "hsl") ? {
                        _a: t.h,
                        _b: t.s,
                        _c: t.l,
                        _d: 0,
                        space: "hsl"
                    } : nv(t, "lab") ? {
                        _a: t.l,
                        _b: t.a,
                        _c: t.b,
                        _d: 0,
                        space: "lab"
                    } : nv(t, "lch") ? {
                        _a: t.l,
                        _b: t.c,
                        _c: t.h,
                        _d: 0,
                        space: "lch"
                    } : nv(t, "cmyk") ? {
                        _a: t.c,
                        _b: t.m,
                        _c: t.y,
                        _d: t.k,
                        space: "cmyk"
                    } : {
                        _a: 0,
                        _b: 0,
                        _c: 0,
                        space: "rgb"
                    };
                    return i.space = e || i.space, i
                }(t, e);
                m(this, s)
            } else if ("string" == typeof t)
                if (Xm.test(t)) {
                    var a = t.replace(Km, ""),
                        h = Wm.exec(a).slice(1, 4).map(function (t) {
                            return parseInt(t)
                        }),
                        c = h[0],
                        u = h[1],
                        l = h[2];
                    m(this, {
                        _a: c,
                        _b: u,
                        _c: l,
                        _d: 0,
                        space: "rgb"
                    })
                } else {
                    if (!Ym.test(t)) throw Error("Unsupported string format, can't construct Color");
                    var d = $m.exec((g = t, 4 === g.length ? ["#", g.substring(1, 2), g.substring(1, 2), g.substring(2, 3), g.substring(2, 3), g.substring(3, 4), g.substring(3, 4)].join("") : g)).map(function (t) {
                            return parseInt(t, 16)
                        }),
                        f = d[1],
                        p = d[2],
                        v = d[3];
                    m(this, {
                        _a: f,
                        _b: p,
                        _c: v,
                        _d: 0,
                        space: "rgb"
                    })
                } var g, y = this._a,
                _ = this._b,
                b = this._c,
                w = this._d,
                k = "rgb" === this.space ? {
                    r: y,
                    g: _,
                    b: b
                } : "xyz" === this.space ? {
                    x: y,
                    y: _,
                    z: b
                } : "hsl" === this.space ? {
                    h: y,
                    s: _,
                    l: b
                } : "lab" === this.space ? {
                    l: y,
                    a: _,
                    b: b
                } : "lch" === this.space ? {
                    l: y,
                    c: _,
                    h: b
                } : "cmyk" === this.space ? {
                    c: y,
                    m: _,
                    y: b,
                    k: w
                } : {};
            m(this, k)
        }, e.lab = function () {
            var e = this.xyz(),
                i = e.x,
                n = e.y;
            return new t(116 * n - 16, 500 * (i - n), 200 * (n - e.z), "lab")
        }, e.lch = function () {
            var e = this.lab(),
                i = e.l,
                n = e.a,
                r = e.b,
                o = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
                s = 180 * Math.atan2(r, n) / Math.PI;
            return s < 0 && (s = 360 - (s *= -1)), new t(i, o, s, "lch")
        }, e.rgb = function () {
            if ("rgb" === this.space) return this;
            if ("lab" === (R = this.space) || "xyz" === R || "lch" === R) {
                var e = this.x,
                    i = this.y,
                    n = this.z;
                if ("lab" === this.space || "lch" === this.space) {
                    var r = this.l,
                        o = this.a,
                        s = this.b;
                    if ("lch" === this.space) {
                        var a = this.c,
                            h = this.h,
                            c = Math.PI / 180;
                        o = a * Math.cos(c * h), s = a * Math.sin(c * h)
                    }
                    var u = (r + 16) / 116,
                        l = o / 500 + u,
                        d = u - s / 200,
                        f = 16 / 116,
                        p = .008856;
                    e = .95047 * (Math.pow(l, 3) > p ? Math.pow(l, 3) : (l - f) / 7.787), i = 1 * (Math.pow(u, 3) > p ? Math.pow(u, 3) : (u - f) / 7.787), n = 1.08883 * (Math.pow(d, 3) > p ? Math.pow(d, 3) : (d - f) / 7.787)
                }
                var m = 3.2406 * e + -1.5372 * i + -.4986 * n,
                    v = -.9689 * e + 1.8758 * i + .0415 * n,
                    g = .0557 * e + -.204 * i + 1.057 * n,
                    y = Math.pow,
                    _ = .0031308;
                return new t(255 * (m > _ ? 1.055 * y(m, 1 / 2.4) - .055 : 12.92 * m), 255 * (v > _ ? 1.055 * y(v, 1 / 2.4) - .055 : 12.92 * v), 255 * (g > _ ? 1.055 * y(g, 1 / 2.4) - .055 : 12.92 * g))
            }
            if ("hsl" === this.space) {
                var b = this.h,
                    w = this.s,
                    k = this.l;
                if (b /= 360, k /= 100, 0 === (w /= 100)) return new t(k *= 255, k, k);
                var E = k < .5 ? k * (1 + w) : k + w - k * w,
                    S = 2 * k - E;
                return new t(255 * rv(S, E, b + 1 / 3), 255 * rv(S, E, b), 255 * rv(S, E, b - 1 / 3))
            }
            if ("cmyk" === this.space) {
                var T = this.c,
                    x = this.m,
                    A = this.y,
                    C = this.k;
                return new t(255 * (1 - Math.min(1, T * (1 - C) + C)), 255 * (1 - Math.min(1, x * (1 - C) + C)), 255 * (1 - Math.min(1, A * (1 - C) + C)))
            }
            return this;
            var R
        }, e.toArray = function () {
            return [this._a, this._b, this._c, this._d, this.space]
        }, e.toHex = function () {
            var t = this._clamped().map(iv);
            return "#" + t[0] + t[1] + t[2]
        }, e.toRgb = function () {
            var t = this._clamped();
            return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
        }, e.toString = function () {
            return this.toHex()
        }, e.xyz = function () {
            var e = this.rgb(),
                i = [e._a, e._b, e._c].map(function (t) {
                    return t / 255
                }),
                n = i[0],
                r = i[1],
                o = i[2],
                s = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92,
                a = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92,
                h = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92,
                c = (.4124 * s + .3576 * a + .1805 * h) / .95047,
                u = (.2126 * s + .7152 * a + .0722 * h) / 1,
                l = (.0193 * s + .1192 * a + .9505 * h) / 1.08883;
            return new t(c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, "xyz")
        }, e._clamped = function () {
            var t = this.rgb(),
                e = t._a,
                i = t._b,
                n = t._c,
                r = Math.max,
                o = Math.min,
                s = Math.round;
            return [e, i, n].map(function (t) {
                return r(0, o(s(t), 255))
            })
        }, t
    }(),
    sv = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        var e = t.prototype;
        return e.clone = function () {
            return new t(this)
        }, e.init = function (t, e) {
            var i = 0,
                n = 0,
                r = Array.isArray(t) ? {
                    x: t[0],
                    y: t[1]
                } : "object" == typeof t ? {
                    x: t.x,
                    y: t.y
                } : {
                    x: t,
                    y: e
                };
            return this.x = null == r.x ? i : r.x, this.y = null == r.y ? n : r.y, this
        }, e.toArray = function () {
            return [this.x, this.y]
        }, e.transform = function (t) {
            return this.clone().transformO(t)
        }, e.transformO = function (t) {
            hv.isMatrixLike(t) || (t = new hv(t));
            var e = this.x,
                i = this.y;
            return this.x = t.a * e + t.c * i + t.e, this.y = t.b * e + t.d * i + t.f, this
        }, t
    }();

function av(t, e, i) {
    return Math.abs(e - t) < (i || 1e-6)
}
var hv = function () {
    function t() {
        this.init.apply(this, arguments)
    }
    t.formatTransforms = function (t) {
        var e = "both" === t.flip || !0 === t.flip,
            i = t.flip && (e || "x" === t.flip) ? -1 : 1,
            n = t.flip && (e || "y" === t.flip) ? -1 : 1,
            r = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0,
            o = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0,
            s = t.scale && t.scale.length ? t.scale[0] * i : isFinite(t.scale) ? t.scale * i : isFinite(t.scaleX) ? t.scaleX * i : i,
            a = t.scale && t.scale.length ? t.scale[1] * n : isFinite(t.scale) ? t.scale * n : isFinite(t.scaleY) ? t.scaleY * n : n,
            h = t.shear || 0,
            c = t.rotate || t.theta || 0,
            u = new sv(t.origin || t.around || t.ox || t.originX, t.oy || t.originY),
            l = u.x,
            d = u.y,
            f = new sv(t.position || t.px || t.positionX || NaN, t.py || t.positionY || NaN),
            p = f.x,
            m = f.y,
            v = new sv(t.translate || t.tx || t.translateX, t.ty || t.translateY),
            g = v.x,
            y = v.y,
            _ = new sv(t.relative || t.rx || t.relativeX, t.ry || t.relativeY);
        return {
            scaleX: s,
            scaleY: a,
            skewX: r,
            skewY: o,
            shear: h,
            theta: c,
            rx: _.x,
            ry: _.y,
            tx: g,
            ty: y,
            ox: l,
            oy: d,
            px: p,
            py: m
        }
    }, t.fromArray = function (t) {
        return {
            a: t[0],
            b: t[1],
            c: t[2],
            d: t[3],
            e: t[4],
            f: t[5]
        }
    }, t.isMatrixLike = function (t) {
        return null != t.a || null != t.b || null != t.c || null != t.d || null != t.e || null != t.f
    }, t.matrixMultiply = function (t, e, i) {
        var n = t.a * e.a + t.c * e.b,
            r = t.b * e.a + t.d * e.b,
            o = t.a * e.c + t.c * e.d,
            s = t.b * e.c + t.d * e.d,
            a = t.e + t.a * e.e + t.c * e.f,
            h = t.f + t.b * e.e + t.d * e.f;
        return i.a = n, i.b = r, i.c = o, i.d = s, i.e = a, i.f = h, i
    };
    var e = t.prototype;
    return e.around = function (t, e, i) {
        return this.clone().aroundO(t, e, i)
    }, e.aroundO = function (t, e, i) {
        var n = t || 0,
            r = e || 0;
        return this.translateO(-n, -r).lmultiplyO(i).translateO(n, r)
    }, e.clone = function () {
        return new t(this)
    }, e.decompose = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0);
        var i = this.a,
            n = this.b,
            r = this.c,
            o = this.d,
            s = this.e,
            a = this.f,
            h = i * o - n * r,
            c = h > 0 ? 1 : -1,
            u = c * Math.sqrt(i * i + n * n),
            l = Math.atan2(c * n, c * i),
            d = 180 / Math.PI * l,
            f = Math.cos(l),
            p = Math.sin(l),
            m = (i * r + n * o) / h,
            v = r * u / (m * i - n) || o * u / (m * n + i);
        return {
            scaleX: u,
            scaleY: v,
            shear: m,
            rotate: d,
            translateX: s - t + t * f * u + e * (m * f * u - p * v),
            translateY: a - e + t * p * u + e * (m * p * u + f * v),
            originX: t,
            originY: e,
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
        }
    }, e.equals = function (e) {
        if (e === this) return !0;
        var i = new t(e);
        return av(this.a, i.a) && av(this.b, i.b) && av(this.c, i.c) && av(this.d, i.d) && av(this.e, i.e) && av(this.f, i.f)
    }, e.flip = function (t, e) {
        return this.clone().flipO(t, e)
    }, e.flipO = function (t, e) {
        return "x" === t ? this.scaleO(-1, 1, e, 0) : "y" === t ? this.scaleO(1, -1, 0, e) : this.scaleO(-1, -1, t, e || t)
    }, e.init = function (e) {
        var i = t.fromArray([1, 0, 0, 1, 0, 0]);
        return e = e instanceof Iv ? e.matrixify() : "string" == typeof e ? t.fromArray(e.split(tv).map(parseFloat)) : Array.isArray(e) ? t.fromArray(e) : "object" == typeof e && t.isMatrixLike(e) ? e : "object" == typeof e ? (new t).transform(e) : 6 === arguments.length ? t.fromArray([].slice.call(arguments)) : i, this.a = null != e.a ? e.a : i.a, this.b = null != e.b ? e.b : i.b, this.c = null != e.c ? e.c : i.c, this.d = null != e.d ? e.d : i.d, this.e = null != e.e ? e.e : i.e, this.f = null != e.f ? e.f : i.f, this
    }, e.inverse = function () {
        return this.clone().inverseO()
    }, e.inverseO = function () {
        var t = this.a,
            e = this.b,
            i = this.c,
            n = this.d,
            r = this.e,
            o = this.f,
            s = t * n - e * i;
        if (!s) throw new Error("Cannot invert " + this);
        var a = n / s,
            h = -e / s,
            c = -i / s,
            u = t / s,
            l = -(a * r + c * o),
            d = -(h * r + u * o);
        return this.a = a, this.b = h, this.c = c, this.d = u, this.e = l, this.f = d, this
    }, e.lmultiply = function (t) {
        return this.clone().lmultiplyO(t)
    }, e.lmultiplyO = function (e) {
        var i = e instanceof t ? e : new t(e);
        return t.matrixMultiply(i, this, this)
    }, e.multiply = function (t) {
        return this.clone().multiplyO(t)
    }, e.multiplyO = function (e) {
        var i = e instanceof t ? e : new t(e);
        return t.matrixMultiply(this, i, this)
    }, e.rotate = function (t, e, i) {
        return this.clone().rotateO(t, e, i)
    }, e.rotateO = function (t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0), t = wm(t);
        var n = Math.cos(t),
            r = Math.sin(t),
            o = this.a,
            s = this.b,
            a = this.c,
            h = this.d,
            c = this.e,
            u = this.f;
        return this.a = o * n - s * r, this.b = s * n + o * r, this.c = a * n - h * r, this.d = h * n + a * r, this.e = c * n - u * r + i * r - e * n + e, this.f = u * n + c * r - e * r - i * n + i, this
    }, e.scale = function (t, e, i, n) {
        var r;
        return (r = this.clone()).scaleO.apply(r, arguments)
    }, e.scaleO = function (t, e, i, n) {
        void 0 === e && (e = t), void 0 === i && (i = 0), void 0 === n && (n = 0), 3 === arguments.length && (n = i, i = e, e = t);
        var r = this.a,
            o = this.b,
            s = this.c,
            a = this.d,
            h = this.e,
            c = this.f;
        return this.a = r * t, this.b = o * e, this.c = s * t, this.d = a * e, this.e = h * t - i * t + i, this.f = c * e - n * e + n, this
    }, e.shear = function (t, e, i) {
        return this.clone().shearO(t, e, i)
    }, e.shearO = function (t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0);
        var n = this.a,
            r = this.b,
            o = this.c,
            s = this.d,
            a = this.e,
            h = this.f;
        return this.a = n + r * t, this.c = o + s * t, this.e = a + h * t - i * t, this
    }, e.skew = function (t, e, i, n) {
        var r;
        return (r = this.clone()).skewO.apply(r, arguments)
    }, e.skewO = function (t, e, i, n) {
        void 0 === e && (e = t), void 0 === i && (i = 0), void 0 === n && (n = 0), 3 === arguments.length && (n = i, i = e, e = t), t = wm(t), e = wm(e);
        var r = Math.tan(t),
            o = Math.tan(e),
            s = this.a,
            a = this.b,
            h = this.c,
            c = this.d,
            u = this.e,
            l = this.f;
        return this.a = s + a * r, this.b = a + s * o, this.c = h + c * r, this.d = c + h * o, this.e = u + l * r - n * r, this.f = l + u * o - i * o, this
    }, e.skewX = function (t, e, i) {
        return this.skew(t, 0, e, i)
    }, e.skewY = function (t, e, i) {
        return this.skew(0, t, e, i)
    }, e.toArray = function () {
        return [this.a, this.b, this.c, this.d, this.e, this.f]
    }, e.toString = function () {
        return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")"
    }, e.transform = function (e) {
        if (t.isMatrixLike(e)) return new t(e).multiplyO(this);
        var i = t.formatTransforms(e),
            n = new sv(i.ox, i.oy).transform(this),
            r = n.x,
            o = n.y,
            s = (new t).translateO(i.rx, i.ry).lmultiplyO(this).translateO(-r, -o).scaleO(i.scaleX, i.scaleY).skewO(i.skewX, i.skewY).shearO(i.shear).rotateO(i.theta).translateO(r, o);
        if (isFinite(i.px) || isFinite(i.py)) {
            var a = new sv(r, o).transform(s),
                h = isFinite(i.px) ? i.px - a.x : 0,
                c = isFinite(i.py) ? i.py - a.y : 0;
            s.translateO(h, c)
        }
        return s.translateO(i.tx, i.ty), s
    }, e.translate = function (t, e) {
        return this.clone().translateO(t, e)
    }, e.translateO = function (t, e) {
        return this.e += t || 0, this.f += e || 0, this
    }, e.valueOf = function () {
        return {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
        }
    }, t
}();

function cv() {
    if (!cv.nodes) {
        var t = Mm().size(2, 0);
        t.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t.attr("focusable", "false"), t.attr("aria-hidden", "true");
        var e = t.path().node;
        cv.nodes = {
            svg: t,
            path: e
        }
    }
    if (!cv.nodes.svg.node.parentNode) {
        var i = Rm.document.body || Rm.document.documentElement;
        cv.nodes.svg.addTo(i)
    }
    return cv.nodes
}

function uv(t) {
    return !(t.width || t.height || t.x || t.y)
}
Fm(hv, "Matrix");
var lv = function () {
    function t() {
        this.init.apply(this, arguments)
    }
    var e = t.prototype;
    return e.addOffset = function () {
        return this.x += Rm.window.pageXOffset, this.y += Rm.window.pageYOffset, new t(this)
    }, e.init = function (t) {
        return t = "string" == typeof t ? t.split(tv).map(parseFloat) : Array.isArray(t) ? t : "object" == typeof t ? [null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height] : 4 === arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this
    }, e.isNulled = function () {
        return uv(this)
    }, e.merge = function (e) {
        var i = Math.min(this.x, e.x),
            n = Math.min(this.y, e.y);
        return new t(i, n, Math.max(this.x + this.width, e.x + e.width) - i, Math.max(this.y + this.height, e.y + e.height) - n)
    }, e.toArray = function () {
        return [this.x, this.y, this.width, this.height]
    }, e.toString = function () {
        return this.x + " " + this.y + " " + this.width + " " + this.height
    }, e.transform = function (e) {
        e instanceof hv || (e = new hv(e));
        var i = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            o = -1 / 0;
        return [new sv(this.x, this.y), new sv(this.x2, this.y), new sv(this.x, this.y2), new sv(this.x2, this.y2)].forEach(function (t) {
            t = t.transform(e), i = Math.min(i, t.x), n = Math.max(n, t.x), r = Math.min(r, t.y), o = Math.max(o, t.y)
        }), new t(i, r, n - i, o - r)
    }, t
}();

function dv(t, e, i) {
    var n, r;
    try {
        if (uv(n = e(t.node)) && ((r = t.node) !== Rm.document && !(Rm.document.documentElement.contains || function (t) {
                for (; t.parentNode;) t = t.parentNode;
                return t === Rm.document
            }).call(Rm.document.documentElement, r))) throw new Error("Element not in the dom")
    } catch (e) {
        n = i(t)
    }
    return n
}
gm({
    viewbox: {
        viewbox: function (t, e, i, n) {
            return null == t ? new lv(this.attr("viewBox")) : this.attr("viewBox", new lv(t, e, i, n))
        },
        zoom: function (t, e) {
            var i = this.attr(["width", "height"]),
                n = i.width,
                r = i.height;
            if ((n || r) && "string" != typeof n && "string" != typeof r || (n = this.node.clientWidth, r = this.node.clientHeight), !n || !r) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
            var o = this.viewbox(),
                s = n / o.width,
                a = r / o.height,
                h = Math.min(s, a);
            if (null == t) return h;
            var c = h / t;
            c === 1 / 0 && (c = Number.MAX_SAFE_INTEGER / 100), e = e || new sv(n / 2 / s + o.x, r / 2 / a + o.y);
            var u = new lv(o).transform(new hv({
                scale: c,
                origin: e
            }));
            return this.viewbox(u)
        }
    }
}), Fm(lv, "Box");
var fv = function (t) {
    function e(e) {
        var i, n;
        void 0 === e && (e = []);
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) o[s - 1] = arguments[s];
        return n = t.call.apply(t, [this, e].concat(o)) || this, "number" == typeof e ? n || function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(n) : (n.length = 0, (i = n).push.apply(i, e), n)
    }
    return r(e, t), e
}(h(Array));
zm([fv], {
    each: function (t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
        return "function" == typeof t ? this.map(function (e, i, n) {
            return t.call(e, e, i, n)
        }) : this.map(function (e) {
            return e[t].apply(e, i)
        })
    },
    toArray: function () {
        return Array.prototype.concat.apply([], this)
    }
});
var pv = ["toArray", "constructor", "each"];

function mv(t, e) {
    return new fv(bm((e || Rm.document).querySelectorAll(t), function (t) {
        return Om(t)
    }))
}
fv.extend = function (t) {
    t = t.reduce(function (t, e) {
        return pv.includes(e) ? t : "_" === e[0] ? t : (t[e] = function () {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            return this.each.apply(this, [e].concat(i))
        }, t)
    }, {}), zm([fv], t)
};
var vv = 0,
    gv = {};

function yv(t) {
    var e = t.getEventHolder();
    return e === Rm.window && (e = gv), e.events || (e.events = {}), e.events
}

function _v(t) {
    return t.getEventTarget()
}

function bv(t, e, i, n, r) {
    var o = i.bind(n || t),
        s = Mm(t),
        a = yv(s),
        h = _v(s);
    e = Array.isArray(e) ? e : e.split(tv), i._svgjsListenerId || (i._svgjsListenerId = ++vv), e.forEach(function (t) {
        var e = t.split(".")[0],
            n = t.split(".")[1] || "*";
        a[e] = a[e] || {}, a[e][n] = a[e][n] || {}, a[e][n][i._svgjsListenerId] = o, h.addEventListener(e, o, r || !1)
    })
}

function wv(t, e, i, n) {
    var r = Mm(t),
        o = yv(r),
        s = _v(r);
    ("function" != typeof i || (i = i._svgjsListenerId)) && (e = Array.isArray(e) ? e : (e || "").split(tv)).forEach(function (t) {
        var e, a, h = t && t.split(".")[0],
            c = t && t.split(".")[1];
        if (i) o[h] && o[h][c || "*"] && (s.removeEventListener(h, o[h][c || "*"][i], n || !1), delete o[h][c || "*"][i]);
        else if (h && c) {
            if (o[h] && o[h][c]) {
                for (a in o[h][c]) wv(s, [h, c].join("."), a);
                delete o[h][c]
            }
        } else if (c)
            for (t in o)
                for (e in o[t]) c === e && wv(s, [t, c].join("."));
        else if (h) {
            if (o[h]) {
                for (e in o[h]) wv(s, [h, e].join("."));
                delete o[h]
            }
        } else {
            for (t in o) wv(s, t);
            ! function (t) {
                var e = t.getEventHolder();
                e === Rm.window && (e = gv), e.events && (e.events = {})
            }(r)
        }
    })
}
var kv = function (t) {
    function e() {
        return t.apply(this, arguments) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.addEventListener = function () {}, i.dispatch = function (t, e, i) {
        return function (t, e, i, n) {
            var r = _v(t);
            return e instanceof Rm.window.Event ? r.dispatchEvent(e) : (e = new Rm.window.CustomEvent(e, m({
                detail: i,
                cancelable: !0
            }, n)), r.dispatchEvent(e)), e
        }(this, t, e, i)
    }, i.dispatchEvent = function (t) {
        var e = this.getEventHolder().events;
        if (!e) return !0;
        var i = e[t.type];
        for (var n in i)
            for (var r in i[n]) i[n][r](t);
        return !t.defaultPrevented
    }, i.fire = function (t, e, i) {
        return this.dispatch(t, e, i), this
    }, i.getEventHolder = function () {
        return this
    }, i.getEventTarget = function () {
        return this
    }, i.off = function (t, e) {
        return wv(this, t, e), this
    }, i.on = function (t, e, i, n) {
        return bv(this, t, e, i, n), this
    }, i.removeEventListener = function () {}, e
}(Im);

function Ev() {}
Fm(kv, "EventTarget");
var Sv = {
        duration: 400,
        ease: ">",
        delay: 0
    },
    Tv = {
        "fill-opacity": 1,
        "stroke-opacity": 1,
        "stroke-width": 0,
        "stroke-linejoin": "miter",
        "stroke-linecap": "butt",
        fill: "#000000",
        stroke: "#000000",
        opacity: 1,
        x: 0,
        y: 0,
        cx: 0,
        cy: 0,
        width: 0,
        height: 0,
        r: 0,
        rx: 0,
        ry: 0,
        offset: 0,
        "stop-opacity": 1,
        "stop-color": "#000000",
        "text-anchor": "start"
    },
    xv = function (t) {
        function e() {
            for (var e, i, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (e = i = t.call.apply(t, [this].concat(r)) || this).init.apply(e, r), i
        }
        r(e, t);
        var i = e.prototype;
        return i.clone = function () {
            return new this.constructor(this)
        }, i.init = function (t) {
            return "number" == typeof t ? this : (this.length = 0, this.push.apply(this, this.parse(t)), this)
        }, i.parse = function (t) {
            return void 0 === t && (t = []), t instanceof Array ? t : t.trim().split(tv).map(parseFloat)
        }, i.toArray = function () {
            return Array.prototype.concat.apply([], this)
        }, i.toSet = function () {
            return new Set(this)
        }, i.toString = function () {
            return this.join(" ")
        }, i.valueOf = function () {
            var t = [];
            return t.push.apply(t, this), t
        }, e
    }(h(Array)),
    Av = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        var e = t.prototype;
        return e.convert = function (e) {
            return new t(this.value, e)
        }, e.divide = function (e) {
            return e = new t(e), new t(this / e, this.unit || e.unit)
        }, e.init = function (e, i) {
            return i = Array.isArray(e) ? e[1] : i, e = Array.isArray(e) ? e[0] : e, this.value = 0, this.unit = i || "", "number" == typeof e ? this.value = isNaN(e) ? 0 : isFinite(e) ? e : e < 0 ? -3.4e38 : 3.4e38 : "string" == typeof e ? (i = e.match(jm)) && (this.value = parseFloat(i[1]), "%" === i[5] ? this.value /= 100 : "s" === i[5] && (this.value *= 1e3), this.unit = i[5]) : e instanceof t && (this.value = e.valueOf(), this.unit = e.unit), this
        }, e.minus = function (e) {
            return e = new t(e), new t(this - e, this.unit || e.unit)
        }, e.plus = function (e) {
            return e = new t(e), new t(this + e, this.unit || e.unit)
        }, e.times = function (e) {
            return e = new t(e), new t(this * e, this.unit || e.unit)
        }, e.toArray = function () {
            return [this.value, this.unit]
        }, e.toJSON = function () {
            return this.toString()
        }, e.toString = function () {
            return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit
        }, e.valueOf = function () {
            return this.value
        }, t
    }(),
    Cv = [];
var Rv = function (t) {
    function e(e, i) {
        var n;
        return (n = t.call(this) || this).node = e, n.type = e.nodeName, i && e !== i && n.attr(i), n
    }
    r(e, t);
    var i = e.prototype;
    return i.add = function (t, e) {
        return (t = Mm(t)).removeNamespace && this.node instanceof Rm.window.SVGElement && t.removeNamespace(), null == e ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
    }, i.addTo = function (t, e) {
        return Mm(t).put(this, e)
    }, i.children = function () {
        return new fv(bm(this.node.children, function (t) {
            return Om(t)
        }))
    }, i.clear = function () {
        for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
        return this
    }, i.clone = function (t) {
        return void 0 === t && (t = !0), this.writeDataToDom(), new this.constructor(function t(e) {
            for (var i = e.children.length - 1; i >= 0; i--) t(e.children[i]);
            return e.id ? (e.id = Vm(e.nodeName), e) : e
        }(this.node.cloneNode(t)))
    }, i.each = function (t, e) {
        var i, n, r = this.children();
        for (i = 0, n = r.length; i < n; i++) t.apply(r[i], [i, r]), e && r[i].each(t, e);
        return this
    }, i.element = function (t, i) {
        return this.put(new e(Dm(t), i))
    }, i.first = function () {
        return Om(this.node.firstChild)
    }, i.get = function (t) {
        return Om(this.node.childNodes[t])
    }, i.getEventHolder = function () {
        return this.node
    }, i.getEventTarget = function () {
        return this.node
    }, i.has = function (t) {
        return this.index(t) >= 0
    }, i.html = function (t, e) {
        return this.xml(t, e, "http://www.w3.org/1999/xhtml")
    }, i.id = function (t) {
        return void 0 !== t || this.node.id || (this.node.id = Vm(this.type)), this.attr("id", t)
    }, i.index = function (t) {
        return [].slice.call(this.node.childNodes).indexOf(t.node)
    }, i.last = function () {
        return Om(this.node.lastChild)
    }, i.matches = function (t) {
        var e = this.node,
            i = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || null;
        return i && i.call(e, t)
    }, i.parent = function (t) {
        var e = this;
        if (!e.node.parentNode) return null;
        if (e = Om(e.node.parentNode), !t) return e;
        do {
            if ("string" == typeof t ? e.matches(t) : e instanceof t) return e
        } while (e = Om(e.node.parentNode));
        return e
    }, i.put = function (t, e) {
        return t = Mm(t), this.add(t, e), t
    }, i.putIn = function (t, e) {
        return Mm(t).add(this, e)
    }, i.remove = function () {
        return this.parent() && this.parent().removeElement(this), this
    }, i.removeElement = function (t) {
        return this.node.removeChild(t.node), this
    }, i.replace = function (t) {
        return t = Mm(t), this.node.parentNode && this.node.parentNode.replaceChild(t.node, this.node), t
    }, i.round = function (t, e) {
        void 0 === t && (t = 2), void 0 === e && (e = null);
        var i = Math.pow(10, t),
            n = this.attr(e);
        for (var r in n) "number" == typeof n[r] && (n[r] = Math.round(n[r] * i) / i);
        return this.attr(n), this
    }, i.svg = function (t, e) {
        return this.xml(t, e, xm)
    }, i.toString = function () {
        return this.id()
    }, i.words = function (t) {
        return this.node.textContent = t, this
    }, i.wrap = function (t) {
        var e = this.parent();
        if (!e) return this.addTo(t);
        var i = e.index(this);
        return e.put(t, i).put(this)
    }, i.writeDataToDom = function () {
        return this.each(function () {
            this.writeDataToDom()
        }), this
    }, i.xml = function (t, e, i) {
        if ("boolean" == typeof t && (i = e, e = t, t = null), null == t || "function" == typeof t) {
            e = null == e || e, this.writeDataToDom();
            var n = this;
            if (null != t) {
                if (n = Om(n.node.cloneNode(!0)), e) {
                    var r = t(n);
                    if (n = r || n, !1 === r) return ""
                }
                n.each(function () {
                    var e = t(this),
                        i = e || this;
                    !1 === e ? this.remove() : e && this !== i && this.replace(i)
                }, !0)
            }
            return e ? n.node.outerHTML : n.node.innerHTML
        }
        e = null != e && e;
        var o = Dm("wrapper", i),
            s = Rm.document.createDocumentFragment();
        o.innerHTML = t;
        for (var a = o.children.length; a--;) s.appendChild(o.firstElementChild);
        var h = this.parent();
        return e ? this.replace(s) && h : this.add(s)
    }, e
}(kv);
zm(Rv, {
    attr: function (t, e, i) {
        var n = this;
        if (null == t) {
            t = {};
            for (var r, o = u(e = this.node.attributes); !(r = o()).done;) {
                var s = r.value;
                t[s.nodeName] = Qm.test(s.nodeValue) ? parseFloat(s.nodeValue) : s.nodeValue
            }
            return t
        }
        if (t instanceof Array) return t.reduce(function (t, e) {
            return t[e] = n.attr(e), t
        }, {});
        if ("object" == typeof t && t.constructor === Object)
            for (e in t) this.attr(e, t[e]);
        else if (null === e) this.node.removeAttribute(t);
        else {
            if (null == e) return null == (e = this.node.getAttribute(t)) ? Tv[t] : Qm.test(e) ? parseFloat(e) : e;
            "number" == typeof (e = Cv.reduce(function (e, i) {
                return i(t, e, n)
            }, e)) ? e = new Av(e): ov.isColor(e) ? e = new ov(e) : e.constructor === Array && (e = new xv(e)), "leading" === t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" !== t && "x" !== t || this.rebuild()
        }
        return this
    },
    find: function (t) {
        return mv(t, this.node)
    },
    findOne: function (t) {
        return Om(this.node.querySelector(t))
    }
}), Fm(Rv, "Dom");
var Iv = function (t) {
    function e(e, i) {
        var n;
        return (n = t.call(this, e, i) || this).dom = {}, n.node.instance = n, e.hasAttribute("svgjs:data") && n.setData(JSON.parse(e.getAttribute("svgjs:data")) || {}), n
    }
    r(e, t);
    var i = e.prototype;
    return i.center = function (t, e) {
        return this.cx(t).cy(e)
    }, i.cx = function (t) {
        return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
    }, i.cy = function (t) {
        return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
    }, i.defs = function () {
        var t = this.root();
        return t && t.defs()
    }, i.dmove = function (t, e) {
        return this.dx(t).dy(e)
    }, i.dx = function (t) {
        return void 0 === t && (t = 0), this.x(new Av(t).plus(this.x()))
    }, i.dy = function (t) {
        return void 0 === t && (t = 0), this.y(new Av(t).plus(this.y()))
    }, i.getEventHolder = function () {
        return this
    }, i.height = function (t) {
        return this.attr("height", t)
    }, i.move = function (t, e) {
        return this.x(t).y(e)
    }, i.parents = function (t) {
        void 0 === t && (t = this.root()), t = Mm(t);
        for (var e = new fv, i = this;
            (i = i.parent()) && i.node !== Rm.document && "#document-fragment" !== i.nodeName && (e.push(i), i.node !== t.node););
        return e
    }, i.reference = function (t) {
        if (!(t = this.attr(t))) return null;
        var e = (t + "").match(qm);
        return e ? Mm(e[1]) : null
    }, i.root = function () {
        var t = this.parent(Lm[Pm]);
        return t && t.root()
    }, i.setData = function (t) {
        return this.dom = t, this
    }, i.size = function (t, e) {
        var i = Sm(this, t, e);
        return this.width(new Av(i.width)).height(new Av(i.height))
    }, i.width = function (t) {
        return this.attr("width", t)
    }, i.writeDataToDom = function () {
        return this.node.removeAttribute("svgjs:data"), g(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), t.prototype.writeDataToDom.call(this)
    }, i.x = function (t) {
        return this.attr("x", t)
    }, i.y = function (t) {
        return this.attr("y", t)
    }, e
}(Rv);
zm(Iv, {
    bbox: function () {
        var t = dv(this, function (t) {
            return t.getBBox()
        }, function (t) {
            try {
                var e = t.clone().addTo(cv().svg).show(),
                    i = e.node.getBBox();
                return e.remove(), i
            } catch (e) {
                throw new Error('Getting bbox of element "' + t.node.nodeName + '" is not possible: ' + e.toString())
            }
        });
        return new lv(t)
    },
    rbox: function (t) {
        var e = dv(this, function (t) {
                return t.getBoundingClientRect()
            }, function (t) {
                throw new Error('Getting rbox of element "' + t.node.nodeName + '" is not possible')
            }),
            i = new lv(e);
        return t ? i.transform(t.screenCTM().inverseO()) : i.addOffset()
    },
    inside: function (t, e) {
        var i = this.bbox();
        return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height
    },
    point: function (t, e) {
        return new sv(t, e).transform(this.screenCTM().inverse())
    },
    ctm: function () {
        return new hv(this.node.getCTM())
    },
    screenCTM: function () {
        if ("function" == typeof this.isRoot && !this.isRoot()) {
            var t = this.rect(1, 1),
                e = t.node.getScreenCTM();
            return t.remove(), new hv(e)
        }
        return new hv(this.node.getScreenCTM())
    }
}), Fm(Iv, "Element");
var Lv = {
    stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
    fill: ["color", "opacity", "rule"],
    prefix: function (t, e) {
        return "color" === e ? t : t + "-" + e
    }
};
["fill", "stroke"].forEach(function (t) {
    var e, i = {};
    i[t] = function (i) {
        if (void 0 === i) return this.attr(t);
        if ("string" == typeof i || i instanceof ov || ov.isRgb(i) || i instanceof Iv) this.attr(t, i);
        else
            for (e = Lv[t].length - 1; e >= 0; e--) null != i[Lv[t][e]] && this.attr(Lv.prefix(t, Lv[t][e]), i[Lv[t][e]]);
        return this
    }, gm(["Element", "Runner"], i)
}), gm(["Element", "Runner"], {
    matrix: function (t, e, i, n, r, o) {
        return null == t ? new hv(this) : this.attr("transform", new hv(t, e, i, n, r, o))
    },
    rotate: function (t, e, i) {
        return this.transform({
            rotate: t,
            ox: e,
            oy: i
        }, !0)
    },
    skew: function (t, e, i, n) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
            skew: t,
            ox: e,
            oy: i
        }, !0) : this.transform({
            skew: [t, e],
            ox: i,
            oy: n
        }, !0)
    },
    shear: function (t, e, i) {
        return this.transform({
            shear: t,
            ox: e,
            oy: i
        }, !0)
    },
    scale: function (t, e, i, n) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
            scale: t,
            ox: e,
            oy: i
        }, !0) : this.transform({
            scale: [t, e],
            ox: i,
            oy: n
        }, !0)
    },
    translate: function (t, e) {
        return this.transform({
            translate: [t, e]
        }, !0)
    },
    relative: function (t, e) {
        return this.transform({
            relative: [t, e]
        }, !0)
    },
    flip: function (t, e) {
        return void 0 === t && (t = "both"), void 0 === e && (e = "center"), -1 === "xybothtrue".indexOf(t) && (e = t, t = "both"), this.transform({
            flip: t,
            origin: e
        }, !0)
    },
    opacity: function (t) {
        return this.attr("opacity", t)
    }
}), gm("radius", {
    radius: function (t, e) {
        return void 0 === e && (e = t), "radialGradient" === (this._element || this).type ? this.attr("r", new Av(t)) : this.rx(t).ry(e)
    }
}), gm("Path", {
    length: function () {
        return this.node.getTotalLength()
    },
    pointAt: function (t) {
        return new sv(this.node.getPointAtLength(t))
    }
}), gm(["Element", "Runner"], {
    font: function (t, e) {
        if ("object" == typeof t) {
            for (e in t) this.font(e, t[e]);
            return this
        }
        return "leading" === t ? this.leading(e) : "anchor" === t ? this.attr("text-anchor", e) : "size" === t || "family" === t || "weight" === t || "stretch" === t || "variant" === t || "style" === t ? this.attr("font-" + t, e) : this.attr(t, e)
    }
}), gm("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce(function (t, e) {
    return t[e] = function (t) {
        return null === t ? this.off(e) : this.on(e, t), this
    }, t
}, {})), gm("Element", {
    untransform: function () {
        return this.attr("transform", null)
    },
    matrixify: function () {
        return (this.attr("transform") || "").split(Gm).slice(0, -1).map(function (t) {
            var e = t.trim().split("(");
            return [e[0], e[1].split(tv).map(function (t) {
                return parseFloat(t)
            })]
        }).reverse().reduce(function (t, e) {
            return "matrix" === e[0] ? t.lmultiply(hv.fromArray(e[1])) : t[e[0]].apply(t, e[1])
        }, new hv)
    },
    toParent: function (t, e) {
        if (this === t) return this;
        var i = this.screenCTM(),
            n = t.screenCTM().inverse();
        return this.addTo(t, e).untransform().transform(n.multiply(i)), this
    },
    toRoot: function (t) {
        return this.toParent(this.root(), t)
    },
    transform: function (t, e) {
        if (null == t || "string" == typeof t) {
            var i = new hv(this).decompose();
            return null == t ? i : i[t]
        }
        hv.isMatrixLike(t) || (t = m({}, t, {
            origin: Tm(t, this)
        }));
        var n = new hv(!0 === e ? this : e || !1).transform(t);
        return this.attr("transform", n)
    }
});
var Pv = function (t) {
    function e() {
        return t.apply(this, arguments) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.flatten = function (t, i) {
        return void 0 === t && (t = this), this.each(function () {
            if (this instanceof e) return this.flatten().ungroup()
        }), this
    }, i.ungroup = function (t, e) {
        return void 0 === t && (t = this.parent()), void 0 === e && (e = t.index(this)), e = -1 === e ? t.children().length : e, this.each(function (i, n) {
            return n[n.length - i - 1].toParent(t, e)
        }), this.remove()
    }, e
}(Iv);
Fm(Pv, "Container");
var Dv = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("defs", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.flatten = function () {
        return this
    }, i.ungroup = function () {
        return this
    }, e
}(Pv);
Fm(Dv, "Defs");
var Mv = function (t) {
    function e() {
        return t.apply(this, arguments) || this
    }
    return r(e, t), e
}(Iv);

function Bv(t) {
    return this.attr("rx", t)
}

function Ov(t) {
    return this.attr("ry", t)
}

function Uv(t) {
    return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
}

function Fv(t) {
    return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
}

function Nv(t) {
    return this.attr("cx", t)
}

function Vv(t) {
    return this.attr("cy", t)
}

function zv(t) {
    return null == t ? 2 * this.rx() : this.rx(new Av(t).divide(2))
}

function Hv(t) {
    return null == t ? 2 * this.ry() : this.ry(new Av(t).divide(2))
}
Fm(Mv, "Shape");
var jv = Object.freeze({
        rx: Bv,
        ry: Ov,
        x: Uv,
        y: Fv,
        cx: Nv,
        cy: Vv,
        width: zv,
        height: Hv
    }),
    $v = function (t) {
        function e(e, i) {
            return void 0 === i && (i = e), t.call(this, Bm("ellipse", e), i) || this
        }
        return r(e, t), e.prototype.size = function (t, e) {
            var i = Sm(this, t, e);
            return this.rx(new Av(i.width).divide(2)).ry(new Av(i.height).divide(2))
        }, e
    }(Mv);
zm($v, jv), gm("Container", {
    ellipse: Hm(function (t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = t), this.put(new $v).size(t, e).move(0, 0)
    })
}), Fm($v, "Ellipse");
var Wv = function (t) {
    function e(e) {
        return void 0 === e && (e = Rm.document.createDocumentFragment()), t.call(this, e) || this
    }
    return r(e, t), e.prototype.xml = function (e, i, n) {
        if ("boolean" == typeof e && (n = i, i = e, e = null), null == e || "function" == typeof e) {
            var r = new Rv(Dm("wrapper", n));
            return r.add(this.node.cloneNode(!0)), r.xml(!1, n)
        }
        return t.prototype.xml.call(this, e, !1, n)
    }, e
}(Rv);

function qv(t, e) {
    return "radialGradient" === (this._element || this).type ? this.attr({
        fx: new Av(t),
        fy: new Av(e)
    }) : this.attr({
        x1: new Av(t),
        y1: new Av(e)
    })
}

function Gv(t, e) {
    return "radialGradient" === (this._element || this).type ? this.attr({
        cx: new Av(t),
        cy: new Av(e)
    }) : this.attr({
        x2: new Av(t),
        y2: new Av(e)
    })
}
Fm(Wv, "Fragment");
var Kv = Object.freeze({
        from: qv,
        to: Gv
    }),
    Yv = function (t) {
        function e(e, i) {
            return t.call(this, Bm(e + "Gradient", "string" == typeof e ? null : e), i) || this
        }
        r(e, t);
        var i = e.prototype;
        return i.attr = function (e, i, n) {
            return "transform" === e && (e = "gradientTransform"), t.prototype.attr.call(this, e, i, n)
        }, i.bbox = function () {
            return new lv
        }, i.targets = function () {
            return mv('svg [fill*="' + this.id() + '"]')
        }, i.toString = function () {
            return this.url()
        }, i.update = function (t) {
            return this.clear(), "function" == typeof t && t.call(this, this), this
        }, i.url = function () {
            return 'url("#' + this.id() + '")'
        }, e
    }(Pv);
zm(Yv, Kv), gm({
    Container: {
        gradient: function () {
            var t;
            return (t = this.defs()).gradient.apply(t, arguments)
        }
    },
    Defs: {
        gradient: Hm(function (t, e) {
            return this.put(new Yv(t)).update(e)
        })
    }
}), Fm(Yv, "Gradient");
var Xv = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("pattern", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.attr = function (e, i, n) {
        return "transform" === e && (e = "patternTransform"), t.prototype.attr.call(this, e, i, n)
    }, i.bbox = function () {
        return new lv
    }, i.targets = function () {
        return mv('svg [fill*="' + this.id() + '"]')
    }, i.toString = function () {
        return this.url()
    }, i.update = function (t) {
        return this.clear(), "function" == typeof t && t.call(this, this), this
    }, i.url = function () {
        return 'url("#' + this.id() + '")'
    }, e
}(Pv);
gm({
    Container: {
        pattern: function () {
            var t;
            return (t = this.defs()).pattern.apply(t, arguments)
        }
    },
    Defs: {
        pattern: Hm(function (t, e, i) {
            return this.put(new Xv).update(i).attr({
                x: 0,
                y: 0,
                width: t,
                height: e,
                patternUnits: "userSpaceOnUse"
            })
        })
    }
}), Fm(Xv, "Pattern");
var Zv = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("image", e), i) || this
    }
    return r(e, t), e.prototype.load = function (t, e) {
        if (!t) return this;
        var i = new Rm.window.Image;
        return bv(i, "load", function (t) {
            var n = this.parent(Xv);
            0 === this.width() && 0 === this.height() && this.size(i.width, i.height), n instanceof Xv && 0 === n.width() && 0 === n.height() && n.size(this.width(), this.height()), "function" == typeof e && e.call(this, t)
        }, this), bv(i, "load error", function () {
            wv(i)
        }), this.attr("href", i.src = t, Cm)
    }, e
}(Mv);
! function (t) {
    Cv.push(t)
}(function (t, e, i) {
    return "fill" !== t && "stroke" !== t || Jm.test(e) && (e = i.root().defs().image(e)), e instanceof Zv && (e = i.root().defs().pattern(0, 0, function (t) {
        t.add(e)
    })), e
}), gm({
    Container: {
        image: Hm(function (t, e) {
            return this.put(new Zv).size(0, 0).load(t, e)
        })
    }
}), Fm(Zv, "Image");
var Qv = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        r(e, t);
        var i = e.prototype;
        return i.bbox = function () {
            var t = -1 / 0,
                e = -1 / 0,
                i = 1 / 0,
                n = 1 / 0;
            return this.forEach(function (r) {
                t = Math.max(r[0], t), e = Math.max(r[1], e), i = Math.min(r[0], i), n = Math.min(r[1], n)
            }), new lv(i, n, t - i, e - n)
        }, i.move = function (t, e) {
            var i = this.bbox();
            if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                for (var n = this.length - 1; n >= 0; n--) this[n] = [this[n][0] + t, this[n][1] + e];
            return this
        }, i.parse = function (t) {
            void 0 === t && (t = [0, 0]);
            var e = [];
            (t = t instanceof Array ? Array.prototype.concat.apply([], t) : t.trim().split(tv).map(parseFloat)).length % 2 != 0 && t.pop();
            for (var i = 0, n = t.length; i < n; i += 2) e.push([t[i], t[i + 1]]);
            return e
        }, i.size = function (t, e) {
            var i, n = this.bbox();
            for (i = this.length - 1; i >= 0; i--) n.width && (this[i][0] = (this[i][0] - n.x) * t / n.width + n.x), n.height && (this[i][1] = (this[i][1] - n.y) * e / n.height + n.y);
            return this
        }, i.toLine = function () {
            return {
                x1: this[0][0],
                y1: this[0][1],
                x2: this[1][0],
                y2: this[1][1]
            }
        }, i.toString = function () {
            for (var t = [], e = 0, i = this.length; e < i; e++) t.push(this[e].join(","));
            return t.join(" ")
        }, i.transform = function (t) {
            return this.clone().transformO(t)
        }, i.transformO = function (t) {
            hv.isMatrixLike(t) || (t = new hv(t));
            for (var e = this.length; e--;) {
                var i = this[e],
                    n = i[0],
                    r = i[1];
                this[e][0] = t.a * n + t.c * r + t.e, this[e][1] = t.b * n + t.d * r + t.f
            }
            return this
        }, e
    }(xv),
    Jv = Qv;
var tg = Object.freeze({
        MorphArray: Jv,
        x: function (t) {
            return null == t ? this.bbox().x : this.move(t, this.bbox().y)
        },
        y: function (t) {
            return null == t ? this.bbox().y : this.move(this.bbox().x, t)
        },
        width: function (t) {
            var e = this.bbox();
            return null == t ? e.width : this.size(t, e.height)
        },
        height: function (t) {
            var e = this.bbox();
            return null == t ? e.height : this.size(e.width, t)
        }
    }),
    eg = function (t) {
        function e(e, i) {
            return void 0 === i && (i = e), t.call(this, Bm("line", e), i) || this
        }
        r(e, t);
        var i = e.prototype;
        return i.array = function () {
            return new Qv([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]])
        }, i.move = function (t, e) {
            return this.attr(this.array().move(t, e).toLine())
        }, i.plot = function (t, e, i, n) {
            return null == t ? this.array() : (t = void 0 !== e ? {
                x1: t,
                y1: e,
                x2: i,
                y2: n
            } : new Qv(t).toLine(), this.attr(t))
        }, i.size = function (t, e) {
            var i = Sm(this, t, e);
            return this.attr(this.array().size(i.width, i.height).toLine())
        }, e
    }(Mv);
zm(eg, tg), gm({
    Container: {
        line: Hm(function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return eg.prototype.plot.apply(this.put(new eg), null != e[0] ? e : [0, 0, 0, 0])
        })
    }
}), Fm(eg, "Line");
var ig = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("marker", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.height = function (t) {
        return this.attr("markerHeight", t)
    }, i.orient = function (t) {
        return this.attr("orient", t)
    }, i.ref = function (t, e) {
        return this.attr("refX", t).attr("refY", e)
    }, i.toString = function () {
        return "url(#" + this.id() + ")"
    }, i.update = function (t) {
        return this.clear(), "function" == typeof t && t.call(this, this), this
    }, i.width = function (t) {
        return this.attr("markerWidth", t)
    }, e
}(Pv);

function ng(t, e) {
    return function (i) {
        return null == i ? this[t] : (this[t] = i, e && e.call(this), this)
    }
}
gm({
    Container: {
        marker: function () {
            var t;
            return (t = this.defs()).marker.apply(t, arguments)
        }
    },
    Defs: {
        marker: Hm(function (t, e, i) {
            return this.put(new ig).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(i)
        })
    },
    marker: {
        marker: function (t, e, i, n) {
            var r = ["marker"];
            return "all" !== t && r.push(t), r = r.join("-"), t = arguments[1] instanceof ig ? arguments[1] : this.defs().marker(e, i, n), this.attr(r, t)
        }
    }
}), Fm(ig, "Marker");
var rg = {
        "-": function (t) {
            return t
        },
        "<>": function (t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        },
        ">": function (t) {
            return Math.sin(t * Math.PI / 2)
        },
        "<": function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        bezier: function (t, e, i, n) {
            return function (r) {
                return r < 0 ? t > 0 ? e / t * r : i > 0 ? n / i * r : 0 : r > 1 ? i < 1 ? (1 - n) / (1 - i) * r + (n - i) / (1 - i) : t < 1 ? (1 - e) / (1 - t) * r + (e - t) / (1 - t) : 1 : 3 * r * Math.pow(1 - r, 2) * e + 3 * Math.pow(r, 2) * (1 - r) * n + Math.pow(r, 3)
            }
        },
        steps: function (t, e) {
            void 0 === e && (e = "end"), e = e.split("-").reverse()[0];
            var i = t;
            return "none" === e ? --i : "both" === e && ++i,
                function (n, r) {
                    void 0 === r && (r = !1);
                    var o = Math.floor(n * t),
                        s = n * o % 1 == 0;
                    return "start" !== e && "both" !== e || ++o, r && s && --o, n >= 0 && o < 0 && (o = 0), n <= 1 && o > i && (o = i), o / i
                }
        }
    },
    og = function () {
        function t() {}
        return t.prototype.done = function () {
            return !1
        }, t
    }(),
    sg = function (t) {
        function e(e) {
            var i;
            return void 0 === e && (e = Sv.ease), (i = t.call(this) || this).ease = rg[e] || e, i
        }
        return r(e, t), e.prototype.step = function (t, e, i) {
            return "number" != typeof t ? i < 1 ? t : e : t + (e - t) * this.ease(i)
        }, e
    }(og),
    ag = function (t) {
        function e(e) {
            var i;
            return (i = t.call(this) || this).stepper = e, i
        }
        r(e, t);
        var i = e.prototype;
        return i.done = function (t) {
            return t.done
        }, i.step = function (t, e, i, n) {
            return this.stepper(t, e, i, n)
        }, e
    }(og);

function hg() {
    var t = (this._duration || 500) / 1e3,
        e = this._overshoot || 0,
        i = Math.PI,
        n = Math.log(e / 100 + 1e-10),
        r = -n / Math.sqrt(i * i + n * n),
        o = 3.9 / (r * t);
    this.d = 2 * r * o, this.k = o * o
}
zm(function (t) {
    function e(e, i) {
        var n;
        return void 0 === e && (e = 500), void 0 === i && (i = 0), (n = t.call(this) || this).duration(e).overshoot(i), n
    }
    return r(e, t), e.prototype.step = function (t, e, i, n) {
        if ("string" == typeof t) return t;
        if (n.done = i === 1 / 0, i === 1 / 0) return e;
        if (0 === i) return t;
        i > 100 && (i = 16), i /= 1e3;
        var r = n.velocity || 0,
            o = -this.d * r - this.k * (t - e),
            s = t + r * i + o * i * i / 2;
        return n.velocity = r + o * i, n.done = Math.abs(e - s) + Math.abs(r) < .002, n.done ? e : s
    }, e
}(ag), {
    duration: ng("_duration", hg),
    overshoot: ng("_overshoot", hg)
}), zm(function (t) {
    function e(e, i, n, r) {
        var o;
        return void 0 === e && (e = .1), void 0 === i && (i = .01), void 0 === n && (n = 0), void 0 === r && (r = 1e3), (o = t.call(this) || this).p(e).i(i).d(n).windup(r), o
    }
    return r(e, t), e.prototype.step = function (t, e, i, n) {
        if ("string" == typeof t) return t;
        if (n.done = i === 1 / 0, i === 1 / 0) return e;
        if (0 === i) return t;
        var r = e - t,
            o = (n.integral || 0) + r * i,
            s = (r - (n.error || 0)) / i,
            a = this._windup;
        return !1 !== a && (o = Math.max(-a, Math.min(o, a))), n.error = r, n.integral = o, n.done = Math.abs(r) < .001, n.done ? e : t + (this.P * r + this.I * o + this.D * s)
    }, e
}(ag), {
    windup: ng("_windup"),
    p: ng("P"),
    i: ng("I"),
    d: ng("D")
});
for (var cg = {
        M: 2,
        L: 2,
        H: 1,
        V: 1,
        C: 6,
        S: 4,
        Q: 4,
        T: 2,
        A: 7,
        Z: 0
    }, ug = {
        M: function (t, e, i) {
            return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
        },
        L: function (t, e) {
            return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
        },
        H: function (t, e) {
            return e.x = t[0], ["H", t[0]]
        },
        V: function (t, e) {
            return e.y = t[0], ["V", t[0]]
        },
        C: function (t, e) {
            return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
        },
        S: function (t, e) {
            return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
        },
        Q: function (t, e) {
            return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
        },
        T: function (t, e) {
            return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
        },
        Z: function (t, e, i) {
            return e.x = i.x, e.y = i.y, ["Z"]
        },
        A: function (t, e) {
            return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
        }
    }, lg = "mlhvqtcsaz".split(""), dg = 0, fg = lg.length; dg < fg; ++dg) ug[lg[dg]] = function (t) {
    return function (e, i, n) {
        if ("H" === t) e[0] = e[0] + i.x;
        else if ("V" === t) e[0] = e[0] + i.y;
        else if ("A" === t) e[5] = e[5] + i.x, e[6] = e[6] + i.y;
        else
            for (var r = 0, o = e.length; r < o; ++r) e[r] = e[r] + (r % 2 ? i.y : i.x);
        return ug[t](e, i, n)
    }
}(lg[dg].toUpperCase());

function pg(t) {
    return t.segment.length && t.segment.length - 1 === cg[t.segment[0].toUpperCase()]
}

function mg(t, e) {
    t.inNumber && vg(t, !1);
    var i = ev.test(e);
    if (i) t.segment = [e];
    else {
        var n = t.lastCommand,
            r = n.toLowerCase(),
            o = n === r;
        t.segment = ["m" === r ? o ? "l" : "L" : n]
    }
    return t.inSegment = !0, t.lastCommand = t.segment[0], i
}

function vg(t, e) {
    if (!t.inNumber) throw new Error("Parser Error");
    t.number && t.segment.push(parseFloat(t.number)), t.inNumber = e, t.number = "", t.pointSeen = !1, t.hasExponent = !1, pg(t) && gg(t)
}

function gg(t) {
    t.inSegment = !1, t.absolute && (t.segment = function (t) {
        var e = t.segment[0];
        return ug[e](t.segment.slice(1), t.p, t.p0)
    }(t)), t.segments.push(t.segment)
}

function yg(t) {
    if (!t.segment.length) return !1;
    var e = "A" === t.segment[0].toUpperCase(),
        i = t.segment.length;
    return e && (4 === i || 5 === i)
}

function _g(t) {
    return "E" === t.lastToken.toUpperCase()
}
var bg = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        r(e, t);
        var i = e.prototype;
        return i.bbox = function () {
            return cv().path.setAttribute("d", this.toString()), new lv(cv.nodes.path.getBBox())
        }, i.move = function (t, e) {
            var i = this.bbox();
            if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                for (var n, r = this.length - 1; r >= 0; r--) "M" === (n = this[r][0]) || "L" === n || "T" === n ? (this[r][1] += t, this[r][2] += e) : "H" === n ? this[r][1] += t : "V" === n ? this[r][1] += e : "C" === n || "S" === n || "Q" === n ? (this[r][1] += t, this[r][2] += e, this[r][3] += t, this[r][4] += e, "C" === n && (this[r][5] += t, this[r][6] += e)) : "A" === n && (this[r][6] += t, this[r][7] += e);
            return this
        }, i.parse = function (t) {
            return void 0 === t && (t = "M0 0"), Array.isArray(t) && (t = Array.prototype.concat.apply([], t).toString()),
                function (t, e) {
                    void 0 === e && (e = !0);
                    for (var i = 0, n = "", r = {
                            segment: [],
                            inNumber: !1,
                            number: "",
                            lastToken: "",
                            inSegment: !1,
                            segments: [],
                            pointSeen: !1,
                            hasExponent: !1,
                            absolute: e,
                            p0: new sv,
                            p: new sv
                        }; r.lastToken = n, n = t.charAt(i++);)
                        if (r.inSegment || !mg(r, n))
                            if ("." !== n)
                                if (isNaN(parseInt(n)))
                                    if (" " !== n && "," !== n)
                                        if ("-" !== n)
                                            if ("E" !== n.toUpperCase()) {
                                                if (ev.test(n)) {
                                                    if (r.inNumber) vg(r, !1);
                                                    else {
                                                        if (!pg(r)) throw new Error("parser Error");
                                                        gg(r)
                                                    }--i
                                                }
                                            } else r.number += n, r.hasExponent = !0;
                    else {
                        if (r.inNumber && !_g(r)) {
                            vg(r, !1), --i;
                            continue
                        }
                        r.number += n, r.inNumber = !0
                    } else r.inNumber && vg(r, !1);
                    else {
                        if ("0" === r.number || yg(r)) {
                            r.inNumber = !0, r.number = n, vg(r, !0);
                            continue
                        }
                        r.inNumber = !0, r.number += n
                    } else {
                        if (r.pointSeen || r.hasExponent) {
                            vg(r, !1), --i;
                            continue
                        }
                        r.inNumber = !0, r.pointSeen = !0, r.number += n
                    }
                    return r.inNumber && vg(r, !1), r.inSegment && pg(r) && gg(r), r.segments
                }(t)
        }, i.size = function (t, e) {
            var i, n, r = this.bbox();
            for (r.width = 0 === r.width ? 1 : r.width, r.height = 0 === r.height ? 1 : r.height, i = this.length - 1; i >= 0; i--) "M" === (n = this[i][0]) || "L" === n || "T" === n ? (this[i][1] = (this[i][1] - r.x) * t / r.width + r.x, this[i][2] = (this[i][2] - r.y) * e / r.height + r.y) : "H" === n ? this[i][1] = (this[i][1] - r.x) * t / r.width + r.x : "V" === n ? this[i][1] = (this[i][1] - r.y) * e / r.height + r.y : "C" === n || "S" === n || "Q" === n ? (this[i][1] = (this[i][1] - r.x) * t / r.width + r.x, this[i][2] = (this[i][2] - r.y) * e / r.height + r.y, this[i][3] = (this[i][3] - r.x) * t / r.width + r.x, this[i][4] = (this[i][4] - r.y) * e / r.height + r.y, "C" === n && (this[i][5] = (this[i][5] - r.x) * t / r.width + r.x, this[i][6] = (this[i][6] - r.y) * e / r.height + r.y)) : "A" === n && (this[i][1] = this[i][1] * t / r.width, this[i][2] = this[i][2] * e / r.height, this[i][6] = (this[i][6] - r.x) * t / r.width + r.x, this[i][7] = (this[i][7] - r.y) * e / r.height + r.y);
            return this
        }, i.toString = function () {
            return function (t) {
                for (var e = "", i = 0, n = t.length; i < n; i++) e += t[i][0], null != t[i][1] && (e += t[i][1], null != t[i][2] && (e += " ", e += t[i][2], null != t[i][3] && (e += " ", e += t[i][3], e += " ", e += t[i][4], null != t[i][5] && (e += " ", e += t[i][5], e += " ", e += t[i][6], null != t[i][7] && (e += " ", e += t[i][7])))));
                return e + " "
            }(this)
        }, e
    }(xv),
    wg = function (t) {
        var e = typeof t;
        return "number" === e ? Av : "string" === e ? ov.isColor(t) ? ov : tv.test(t) ? ev.test(t) ? bg : xv : jm.test(t) ? Av : Eg : Ag.indexOf(t.constructor) > -1 ? t.constructor : Array.isArray(t) ? xv : "object" === e ? xg : Eg
    },
    kg = function () {
        function t(t) {
            this._stepper = t || new sg("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null
        }
        var e = t.prototype;
        return e.at = function (t) {
            var e = this;
            return this._morphObj.fromArray(this._from.map(function (i, n) {
                return e._stepper.step(i, e._to[n], t, e._context[n], e._context)
            }))
        }, e.done = function () {
            return this._context.map(this._stepper.done).reduce(function (t, e) {
                return t && e
            }, !0)
        }, e.from = function (t) {
            return null == t ? this._from : (this._from = this._set(t), this)
        }, e.stepper = function (t) {
            return null == t ? this._stepper : (this._stepper = t, this)
        }, e.to = function (t) {
            return null == t ? this._to : (this._to = this._set(t), this)
        }, e.type = function (t) {
            return null == t ? this._type : (this._type = t, this)
        }, e._set = function (t) {
            this._type || this.type(wg(t));
            var e = new this._type(t);
            return this._type === ov && (e = this._to ? e[this._to[4]]() : this._from ? e[this._from[4]]() : e), this._type === xg && (e = this._to ? e.align(this._to) : this._from ? e.align(this._from) : e), e = e.toArray(), this._morphObj = this._morphObj || new this._type, this._context = this._context || Array.apply(null, Array(e.length)).map(Object).map(function (t) {
                return t.done = !0, t
            }), e
        }, t
    }(),
    Eg = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        var e = t.prototype;
        return e.init = function (t) {
            return t = Array.isArray(t) ? t[0] : t, this.value = t, this
        }, e.toArray = function () {
            return [this.value]
        }, e.valueOf = function () {
            return this.value
        }, t
    }(),
    Sg = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        var e = t.prototype;
        return e.init = function (e) {
            return Array.isArray(e) && (e = {
                scaleX: e[0],
                scaleY: e[1],
                shear: e[2],
                rotate: e[3],
                translateX: e[4],
                translateY: e[5],
                originX: e[6],
                originY: e[7]
            }), m(this, t.defaults, e), this
        }, e.toArray = function () {
            var t = this;
            return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY]
        }, t
    }();
Sg.defaults = {
    scaleX: 1,
    scaleY: 1,
    shear: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0
};
var Tg = function (t, e) {
        return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0
    },
    xg = function () {
        function t() {
            this.init.apply(this, arguments)
        }
        var e = t.prototype;
        return e.align = function (t) {
            for (var e = 0, i = this.values.length; e < i; ++e)
                if (this.values[e] === ov) {
                    var n, r = t[e + 6],
                        o = new ov(this.values.splice(e + 2, 5))[r]().toArray();
                    (n = this.values).splice.apply(n, [e + 2, 0].concat(o))
                } return this
        }, e.init = function (t) {
            if (this.values = [], !Array.isArray(t)) {
                t = t || {};
                var e = [];
                for (var i in t) {
                    var n = wg(t[i]),
                        r = new n(t[i]).toArray();
                    e.push([i, n, r.length].concat(r))
                }
                return e.sort(Tg), this.values = e.reduce(function (t, e) {
                    return t.concat(e)
                }, []), this
            }
            this.values = t.slice()
        }, e.toArray = function () {
            return this.values
        }, e.valueOf = function () {
            for (var t = {}, e = this.values; e.length;) {
                var i = e.shift(),
                    n = e.shift(),
                    r = e.shift(),
                    o = e.splice(0, r);
                t[i] = new n(o).valueOf()
            }
            return t
        }, t
    }(),
    Ag = [Eg, Sg, xg];
var Cg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("path", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.array = function () {
        return this._array || (this._array = new bg(this.attr("d")))
    }, i.clear = function () {
        return delete this._array, this
    }, i.height = function (t) {
        return null == t ? this.bbox().height : this.size(this.bbox().width, t)
    }, i.move = function (t, e) {
        return this.attr("d", this.array().move(t, e))
    }, i.plot = function (t) {
        return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new bg(t))
    }, i.size = function (t, e) {
        var i = Sm(this, t, e);
        return this.attr("d", this.array().size(i.width, i.height))
    }, i.width = function (t) {
        return null == t ? this.bbox().width : this.size(t, this.bbox().height)
    }, i.x = function (t) {
        return null == t ? this.bbox().x : this.move(t, this.bbox().y)
    }, i.y = function (t) {
        return null == t ? this.bbox().y : this.move(this.bbox().x, t)
    }, e
}(Mv);
Cg.prototype.MorphArray = bg, gm({
    Container: {
        path: Hm(function (t) {
            return this.put(new Cg).plot(t || new bg)
        })
    }
}), Fm(Cg, "Path");
var Rg = Object.freeze({
        array: function () {
            return this._array || (this._array = new Qv(this.attr("points")))
        },
        clear: function () {
            return delete this._array, this
        },
        move: function (t, e) {
            return this.attr("points", this.array().move(t, e))
        },
        plot: function (t) {
            return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new Qv(t))
        },
        size: function (t, e) {
            var i = Sm(this, t, e);
            return this.attr("points", this.array().size(i.width, i.height))
        }
    }),
    Ig = function (t) {
        function e(e, i) {
            return void 0 === i && (i = e), t.call(this, Bm("polygon", e), i) || this
        }
        return r(e, t), e
    }(Mv);
gm({
    Container: {
        polygon: Hm(function (t) {
            return this.put(new Ig).plot(t || new Qv)
        })
    }
}), zm(Ig, tg), zm(Ig, Rg), Fm(Ig, "Polygon");
var Lg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("polyline", e), i) || this
    }
    return r(e, t), e
}(Mv);
gm({
    Container: {
        polyline: Hm(function (t) {
            return this.put(new Lg).plot(t || new Qv)
        })
    }
}), zm(Lg, tg), zm(Lg, Rg), Fm(Lg, "Polyline");
var Pg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("rect", e), i) || this
    }
    return r(e, t), e
}(Mv);
zm(Pg, {
    rx: Bv,
    ry: Ov
}), gm({
    Container: {
        rect: Hm(function (t, e) {
            return this.put(new Pg).size(t, e)
        })
    }
}), Fm(Pg, "Rect");
var Dg = function () {
        function t() {
            this._first = null, this._last = null
        }
        var e = t.prototype;
        return e.first = function () {
            return this._first && this._first.value
        }, e.last = function () {
            return this._last && this._last.value
        }, e.push = function (t) {
            var e = void 0 !== t.next ? t : {
                value: t,
                next: null,
                prev: null
            };
            return this._last ? (e.prev = this._last, this._last.next = e, this._last = e) : (this._last = e, this._first = e), e
        }, e.remove = function (t) {
            t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null
        }, e.shift = function () {
            var t = this._first;
            return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null
        }, t
    }(),
    Mg = {
        nextDraw: null,
        frames: new Dg,
        timeouts: new Dg,
        immediates: new Dg,
        timer: function () {
            return Rm.window.performance || Rm.window.Date
        },
        transforms: [],
        frame: function (t) {
            var e = Mg.frames.push({
                run: t
            });
            return null === Mg.nextDraw && (Mg.nextDraw = Rm.window.requestAnimationFrame(Mg._draw)), e
        },
        timeout: function (t, e) {
            e = e || 0;
            var i = Mg.timer().now() + e,
                n = Mg.timeouts.push({
                    run: t,
                    time: i
                });
            return null === Mg.nextDraw && (Mg.nextDraw = Rm.window.requestAnimationFrame(Mg._draw)), n
        },
        immediate: function (t) {
            var e = Mg.immediates.push(t);
            return null === Mg.nextDraw && (Mg.nextDraw = Rm.window.requestAnimationFrame(Mg._draw)), e
        },
        cancelFrame: function (t) {
            null != t && Mg.frames.remove(t)
        },
        clearTimeout: function (t) {
            null != t && Mg.timeouts.remove(t)
        },
        cancelImmediate: function (t) {
            null != t && Mg.immediates.remove(t)
        },
        _draw: function (t) {
            for (var e = null, i = Mg.timeouts.last();
                (e = Mg.timeouts.shift()) && (t >= e.time ? e.run() : Mg.timeouts.push(e), e !== i););
            for (var n = null, r = Mg.frames.last(); n !== r && (n = Mg.frames.shift());) n.run(t);
            for (var o = null; o = Mg.immediates.shift();) o();
            Mg.nextDraw = Mg.timeouts.first() || Mg.frames.first() ? Rm.window.requestAnimationFrame(Mg._draw) : null
        }
    },
    Bg = function (t) {
        var e = t.start,
            i = t.runner.duration();
        return {
            start: e,
            duration: i,
            end: e + i,
            runner: t.runner
        }
    },
    Og = function () {
        var t = Rm.window;
        return (t.performance || t.Date).now()
    },
    Ug = function (t) {
        function e(e) {
            var i;
            return void 0 === e && (e = Og), (i = t.call(this) || this)._timeSource = e, i._startTime = 0, i._speed = 1, i._persist = 0, i._nextFrame = null, i._paused = !0, i._runners = [], i._runnerIds = [], i._lastRunnerId = -1, i._time = 0, i._lastSourceTime = 0, i._lastStepTime = 0, i._step = i._stepFn.bind(i, !1), i._stepImmediate = i._stepFn.bind(i, !0), i
        }
        r(e, t);
        var i = e.prototype;
        return i.active = function () {
            return !!this._nextFrame
        }, i.finish = function () {
            return this.time(this.getEndTimeOfTimeline() + 1), this.pause()
        }, i.getEndTime = function () {
            var t = this.getLastRunnerInfo(),
                e = t ? t.runner.duration() : 0;
            return (t ? t.start : this._time) + e
        }, i.getEndTimeOfTimeline = function () {
            var t = this._runners.map(function (t) {
                return t.start + t.runner.duration()
            });
            return Math.max.apply(Math, [0].concat(t))
        }, i.getLastRunnerInfo = function () {
            return this.getRunnerInfoById(this._lastRunnerId)
        }, i.getRunnerInfoById = function (t) {
            return this._runners[this._runnerIds.indexOf(t)] || null
        }, i.pause = function () {
            return this._paused = !0, this._continue()
        }, i.persist = function (t) {
            return null == t ? this._persist : (this._persist = t, this)
        }, i.play = function () {
            return this._paused = !1, this.updateTime()._continue()
        }, i.reverse = function (t) {
            var e = this.speed();
            if (null == t) return this.speed(-e);
            var i = Math.abs(e);
            return this.speed(t ? -i : i)
        }, i.schedule = function (t, e, i) {
            if (null == t) return this._runners.map(Bg);
            var n = 0,
                r = this.getEndTime();
            if (e = e || 0, null == i || "last" === i || "after" === i) n = r;
            else if ("absolute" === i || "start" === i) n = e, e = 0;
            else if ("now" === i) n = this._time;
            else if ("relative" === i) {
                var o = this.getRunnerInfoById(t.id);
                o && (n = o.start + e, e = 0)
            } else {
                if ("with-last" !== i) throw new Error('Invalid value for the "when" parameter');
                var s = this.getLastRunnerInfo();
                n = s ? s.start : this._time
            }
            t.unschedule(), t.timeline(this);
            var a = t.persist(),
                h = {
                    persist: null === a ? this._persist : a,
                    start: n + e,
                    runner: t
                };
            return this._lastRunnerId = t.id, this._runners.push(h), this._runners.sort(function (t, e) {
                return t.start - e.start
            }), this._runnerIds = this._runners.map(function (t) {
                return t.runner.id
            }), this.updateTime()._continue(), this
        }, i.seek = function (t) {
            return this.time(this._time + t)
        }, i.source = function (t) {
            return null == t ? this._timeSource : (this._timeSource = t, this)
        }, i.speed = function (t) {
            return null == t ? this._speed : (this._speed = t, this)
        }, i.stop = function () {
            return this.time(0), this.pause()
        }, i.time = function (t) {
            return null == t ? this._time : (this._time = t, this._continue(!0))
        }, i.unschedule = function (t) {
            var e = this._runnerIds.indexOf(t.id);
            return e < 0 ? this : (this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null), this)
        }, i.updateTime = function () {
            return this.active() || (this._lastSourceTime = this._timeSource()), this
        }, i._continue = function (t) {
            return void 0 === t && (t = !1), Mg.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : this._paused ? this : (this._nextFrame = Mg.frame(this._step), this)
        }, i._stepFn = function (t) {
            void 0 === t && (t = !1);
            var e = this._timeSource(),
                i = e - this._lastSourceTime;
            t && (i = 0);
            var n = this._speed * i + (this._time - this._lastStepTime);
            this._lastSourceTime = e, t || (this._time += n, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
            for (var r = this._runners.length; r--;) {
                var o = this._runners[r],
                    s = o.runner;
                this._time - o.start <= 0 && s.reset()
            }
            for (var a = !1, h = 0, c = this._runners.length; h < c; h++) {
                var u = this._runners[h],
                    l = u.runner,
                    d = n,
                    f = this._time - u.start;
                if (f <= 0) a = !0;
                else if (f < d && (d = f), l.active())
                    if (l.step(d).done) {
                        if (!0 !== u.persist) {
                            l.duration() - l.time() + this._time + u.persist < this._time && (l.unschedule(), --h, --c)
                        }
                    } else a = !0
            }
            return a && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this
        }, e
    }(kv);
gm({
    Element: {
        timeline: function (t) {
            return null == t ? (this._timeline = this._timeline || new Ug, this._timeline) : (this._timeline = t, this)
        }
    }
});
var Fg = function (t) {
    function e(i) {
        var n;
        return (n = t.call(this) || this).id = e.id++, i = "function" == typeof (i = null == i ? Sv.duration : i) ? new ag(i) : i, n._element = null, n._timeline = null, n.done = !1, n._queue = [], n._duration = "number" == typeof i && i, n._isDeclarative = i instanceof ag, n._stepper = n._isDeclarative ? i : new sg, n._history = {}, n.enabled = !0, n._time = 0, n._lastTime = 0, n._reseted = !0, n.transforms = new hv, n.transformId = 1, n._haveReversed = !1, n._reverse = !1, n._loopsDone = 0, n._swing = !1, n._wait = 0, n._times = 1, n._frameId = null, n._persist = !!n._isDeclarative || null, n
    }
    r(e, t), e.sanitise = function (t, e, i) {
        var n = 1,
            r = !1,
            o = 0;
        return t = t || Sv.duration, e = e || Sv.delay, i = i || "last", "object" != typeof t || t instanceof og || (e = t.delay || e, i = t.when || i, r = t.swing || r, n = t.times || n, o = t.wait || o, t = t.duration || Sv.duration), {
            duration: t,
            delay: e,
            swing: r,
            times: n,
            wait: o,
            when: i
        }
    };
    var i = e.prototype;
    return i.active = function (t) {
        return null == t ? this.enabled : (this.enabled = t, this)
    }, i.addTransform = function (t, e) {
        return this.transforms.lmultiplyO(t), this
    }, i.after = function (t) {
        return this.on("finished", t)
    }, i.animate = function (t, i, n) {
        var r = e.sanitise(t, i, n),
            o = new e(r.duration);
        return this._timeline && o.timeline(this._timeline), this._element && o.element(this._element), o.loop(r).schedule(r.delay, r.when)
    }, i.clearTransform = function () {
        return this.transforms = new hv, this
    }, i.clearTransformsFromQueue = function () {
        this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(function (t) {
            return !t.isTransform
        }))
    }, i.delay = function (t) {
        return this.animate(0, t)
    }, i.duration = function () {
        return this._times * (this._wait + this._duration) - this._wait
    }, i.during = function (t) {
        return this.queue(null, t)
    }, i.ease = function (t) {
        return this._stepper = new sg(t), this
    }, i.element = function (t) {
        return null == t ? this._element : (this._element = t, t._prepareRunner(), this)
    }, i.finish = function () {
        return this.step(1 / 0)
    }, i.loop = function (t, e, i) {
        return "object" == typeof t && (e = t.swing, i = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = e || !1, this._wait = i || 0, !0 === this._times && (this._times = 1 / 0), this
    }, i.loops = function (t) {
        var e = this._duration + this._wait;
        if (null == t) {
            var i = Math.floor(this._time / e),
                n = (this._time - i * e) / this._duration;
            return Math.min(i + n, this._times)
        }
        var r = t % 1,
            o = e * Math.floor(t) + this._duration * r;
        return this.time(o)
    }, i.persist = function (t) {
        return null == t ? this._persist : (this._persist = t, this)
    }, i.position = function (t) {
        var e, i = this._time,
            n = this._duration,
            r = this._wait,
            o = this._times,
            s = this._swing,
            a = this._reverse;
        if (null == t) {
            var h = function (t) {
                    var e = s * Math.floor(t % (2 * (r + n)) / (r + n)),
                        i = e && !a || !e && a,
                        o = Math.pow(-1, i) * (t % (r + n)) / n + i;
                    return Math.max(Math.min(o, 1), 0)
                },
                c = o * (r + n) - r;
            return e = i <= 0 ? Math.round(h(1e-5)) : i < c ? h(i) : Math.round(h(c - 1e-5)), e
        }
        var u = Math.floor(this.loops()),
            l = s && u % 2 == 0;
        return e = u + (l && !a || a && l ? t : 1 - t), this.loops(e)
    }, i.progress = function (t) {
        return null == t ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration())
    }, i.queue = function (t, e, i, n) {
        return this._queue.push({
            initialiser: t || Ev,
            runner: e || Ev,
            retarget: i,
            isTransform: n,
            initialised: !1,
            finished: !1
        }), this.timeline() && this.timeline()._continue(), this
    }, i.reset = function () {
        return this._reseted ? this : (this.time(0), this._reseted = !0, this)
    }, i.reverse = function (t) {
        return this._reverse = null == t ? !this._reverse : t, this
    }, i.schedule = function (t, e, i) {
        if (t instanceof Ug || (i = e, e = t, t = this.timeline()), !t) throw Error("Runner cannot be scheduled without timeline");
        return t.schedule(this, e, i), this
    }, i.step = function (t) {
        if (!this.enabled) return this;
        t = null == t ? 16 : t, this._time += t;
        var e = this.position(),
            i = this._lastPosition !== e && this._time >= 0;
        this._lastPosition = e;
        var n = this.duration(),
            r = this._lastTime <= 0 && this._time > 0,
            o = this._lastTime < n && this._time >= n;
        this._lastTime = this._time, r && this.fire("start", this);
        var s = this._isDeclarative;
        this.done = !s && !o && this._time >= n, this._reseted = !1;
        var a = !1;
        return (i || s) && (this._initialise(i), this.transforms = new hv, a = this._run(s ? t : e), this.fire("step", this)), this.done = this.done || a && s, o && this.fire("finished", this), this
    }, i.time = function (t) {
        if (null == t) return this._time;
        var e = t - this._time;
        return this.step(e), this
    }, i.timeline = function (t) {
        return void 0 === t ? this._timeline : (this._timeline = t, this)
    }, i.unschedule = function () {
        var t = this.timeline();
        return t && t.unschedule(this), this
    }, i._initialise = function (t) {
        if (t || this._isDeclarative)
            for (var e = 0, i = this._queue.length; e < i; ++e) {
                var n = this._queue[e],
                    r = this._isDeclarative || !n.initialised && t;
                t = !n.finished, r && t && (n.initialiser.call(this), n.initialised = !0)
            }
    }, i._rememberMorpher = function (t, e) {
        if (this._history[t] = {
                morpher: e,
                caller: this._queue[this._queue.length - 1]
            }, this._isDeclarative) {
            var i = this.timeline();
            i && i.play()
        }
    }, i._run = function (t) {
        for (var e = !0, i = 0, n = this._queue.length; i < n; ++i) {
            var r = this._queue[i],
                o = r.runner.call(this, t);
            r.finished = r.finished || !0 === o, e = e && r.finished
        }
        return e
    }, i._tryRetarget = function (t, e, i) {
        if (this._history[t]) {
            if (!this._history[t].caller.initialised) {
                var n = this._queue.indexOf(this._history[t].caller);
                return this._queue.splice(n, 1), !1
            }
            this._history[t].caller.retarget ? this._history[t].caller.retarget.call(this, e, i) : this._history[t].morpher.to(e), this._history[t].caller.finished = !1;
            var r = this.timeline();
            return r && r.play(), !0
        }
        return !1
    }, e
}(kv);
Fg.id = 0;
var Ng = function () {
    function t(t, e, i) {
        void 0 === t && (t = new hv), void 0 === e && (e = -1), void 0 === i && (i = !0), this.transforms = t, this.id = e, this.done = i
    }
    return t.prototype.clearTransformsFromQueue = function () {}, t
}();
zm([Fg, Ng], {
    mergeWith: function (t) {
        return new Ng(t.transforms.lmultiply(this.transforms), t.id)
    }
});
var Vg = function (t, e) {
        return t.lmultiplyO(e)
    },
    zg = function (t) {
        return t.transforms
    };
var Hg = function () {
    function t() {
        this.runners = [], this.ids = []
    }
    var e = t.prototype;
    return e.add = function (t) {
        if (!this.runners.includes(t)) {
            var e = t.id + 1;
            return this.runners.push(t), this.ids.push(e), this
        }
    }, e.clearBefore = function (t) {
        var e = this.ids.indexOf(t + 1) || 1;
        return this.ids.splice(0, e, 0), this.runners.splice(0, e, new Ng).forEach(function (t) {
            return t.clearTransformsFromQueue()
        }), this
    }, e.edit = function (t, e) {
        var i = this.ids.indexOf(t + 1);
        return this.ids.splice(i, 1, t + 1), this.runners.splice(i, 1, e), this
    }, e.getByID = function (t) {
        return this.runners[this.ids.indexOf(t + 1)]
    }, e.length = function () {
        return this.ids.length
    }, e.merge = function () {
        for (var t = null, e = 0; e < this.runners.length; ++e) {
            var i = this.runners[e];
            if (t && i.done && t.done && (!i._timeline || !i._timeline._runnerIds.includes(i.id)) && (!t._timeline || !t._timeline._runnerIds.includes(t.id))) {
                this.remove(i.id);
                var n = i.mergeWith(t);
                this.edit(t.id, n), t = n, --e
            } else t = i
        }
        return this
    }, e.remove = function (t) {
        var e = this.ids.indexOf(t + 1);
        return this.ids.splice(e, 1), this.runners.splice(e, 1), this
    }, t
}();
gm({
    Element: {
        animate: function (t, e, i) {
            var n = Fg.sanitise(t, e, i),
                r = this.timeline();
            return new Fg(n.duration).loop(n).element(this).timeline(r.play()).schedule(n.delay, n.when)
        },
        delay: function (t, e) {
            return this.animate(0, t, e)
        },
        _clearTransformRunnersBefore: function (t) {
            this._transformationRunners.clearBefore(t.id)
        },
        _currentTransform: function (t) {
            return this._transformationRunners.runners.filter(function (e) {
                return e.id <= t.id
            }).map(zg).reduce(Vg, new hv)
        },
        _addRunner: function (t) {
            this._transformationRunners.add(t), Mg.cancelImmediate(this._frameId), this._frameId = Mg.immediate(function () {
                var t = this._transformationRunners.runners.map(zg).reduce(Vg, new hv);
                this.transform(t), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null)
            }.bind(this))
        },
        _prepareRunner: function () {
            null == this._frameId && (this._transformationRunners = (new Hg).add(new Ng(new hv(this))))
        }
    }
});
zm(Fg, {
    attr: function (t, e) {
        return this.styleAttr("attr", t, e)
    },
    css: function (t, e) {
        return this.styleAttr("css", t, e)
    },
    styleAttr: function (t, e, i) {
        var n;
        if ("string" == typeof e) return this.styleAttr(t, ((n = {})[e] = i, n));
        var r = e;
        if (this._tryRetarget(t, r)) return this;
        var o = new kg(this._stepper).to(r),
            s = g(r);
        return this.queue(function () {
            o = o.from(this.element()[t](s))
        }, function (e) {
            return this.element()[t](o.at(e).valueOf()), o.done()
        }, function (e) {
            var i, n = g(e),
                a = (i = s, n.filter(function (t) {
                    return !i.includes(t)
                }));
            if (a.length) {
                var h = this.element()[t](a),
                    c = new xg(o.from()).valueOf();
                m(c, h), o.from(c)
            }
            var u = new xg(o.to()).valueOf();
            m(u, e), o.to(u), s = n, r = e
        }), this._rememberMorpher(t, o), this
    },
    zoom: function (t, e) {
        if (this._tryRetarget("zoom", t, e)) return this;
        var i = new kg(this._stepper).to(new Av(t));
        return this.queue(function () {
            i = i.from(this.element().zoom())
        }, function (t) {
            return this.element().zoom(i.at(t), e), i.done()
        }, function (t, n) {
            e = n, i.to(t)
        }), this._rememberMorpher("zoom", i), this
    },
    transform: function (t, e, i) {
        if (e = t.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", t)) return this;
        var n = hv.isMatrixLike(t);
        i = null != t.affine ? t.affine : null != i ? i : !n;
        var r, o, s, a, h, c = new kg(this._stepper).type(i ? Sg : hv);
        return this.queue(function () {
            o = o || this.element(), r = r || Tm(t, o), h = new hv(e ? void 0 : o), o._addRunner(this), e || o._clearTransformRunnersBefore(this)
        }, function (u) {
            e || this.clearTransform();
            var l = new sv(r).transform(o._currentTransform(this)),
                d = l.x,
                f = l.y,
                p = new hv(m({}, t, {
                    origin: [d, f]
                })),
                v = this._isDeclarative && s ? s : h;
            if (i) {
                p = p.decompose(d, f), v = v.decompose(d, f);
                var g = p.rotate,
                    y = v.rotate,
                    _ = [g - 360, g, g + 360],
                    b = _.map(function (t) {
                        return Math.abs(t - y)
                    }),
                    w = Math.min.apply(Math, b),
                    k = b.indexOf(w);
                p.rotate = _[k]
            }
            e && (n || (p.rotate = t.rotate || 0), this._isDeclarative && a && (v.rotate = a)), c.from(v), c.to(p);
            var E = c.at(u);
            return a = E.rotate, s = new hv(E), this.addTransform(s), o._addRunner(this), c.done()
        }, function (e) {
            (e.origin || "center").toString() !== (t.origin || "center").toString() && (r = Tm(e, o)), t = m({}, e, {
                origin: r
            })
        }, !0), this._isDeclarative && this._rememberMorpher("transform", c), this
    },
    x: function (t, e) {
        return this._queueNumber("x", t)
    },
    y: function (t) {
        return this._queueNumber("y", t)
    },
    dx: function (t) {
        return void 0 === t && (t = 0), this._queueNumberDelta("x", t)
    },
    dy: function (t) {
        return void 0 === t && (t = 0), this._queueNumberDelta("y", t)
    },
    dmove: function (t, e) {
        return this.dx(t).dy(e)
    },
    _queueNumberDelta: function (t, e) {
        if (e = new Av(e), this._tryRetarget(t, e)) return this;
        var i = new kg(this._stepper).to(e),
            n = null;
        return this.queue(function () {
            n = this.element()[t](), i.from(n), i.to(n + e)
        }, function (e) {
            return this.element()[t](i.at(e)), i.done()
        }, function (t) {
            i.to(n + new Av(t))
        }), this._rememberMorpher(t, i), this
    },
    _queueObject: function (t, e) {
        if (this._tryRetarget(t, e)) return this;
        var i = new kg(this._stepper).to(e);
        return this.queue(function () {
            i.from(this.element()[t]())
        }, function (e) {
            return this.element()[t](i.at(e)), i.done()
        }), this._rememberMorpher(t, i), this
    },
    _queueNumber: function (t, e) {
        return this._queueObject(t, new Av(e))
    },
    cx: function (t) {
        return this._queueNumber("cx", t)
    },
    cy: function (t) {
        return this._queueNumber("cy", t)
    },
    move: function (t, e) {
        return this.x(t).y(e)
    },
    center: function (t, e) {
        return this.cx(t).cy(e)
    },
    size: function (t, e) {
        var i;
        return t && e || (i = this._element.bbox()), t || (t = i.width / i.height * e), e || (e = i.height / i.width * t), this.width(t).height(e)
    },
    width: function (t) {
        return this._queueNumber("width", t)
    },
    height: function (t) {
        return this._queueNumber("height", t)
    },
    plot: function (t, e, i, n) {
        if (4 === arguments.length) return this.plot([t, e, i, n]);
        if (this._tryRetarget("plot", t)) return this;
        var r = new kg(this._stepper).type(this._element.MorphArray).to(t);
        return this.queue(function () {
            r.from(this._element.array())
        }, function (t) {
            return this._element.plot(r.at(t)), r.done()
        }), this._rememberMorpher("plot", r), this
    },
    leading: function (t) {
        return this._queueNumber("leading", t)
    },
    viewbox: function (t, e, i, n) {
        return this._queueObject("viewbox", new lv(t, e, i, n))
    },
    update: function (t) {
        return "object" != typeof t ? this.update({
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
        }) : (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset), this)
    }
}), zm(Fg, {
    rx: Bv,
    ry: Ov,
    from: qv,
    to: Gv
}), Fm(Fg, "Runner");
var jg = function (t) {
    function e(e, i) {
        var n;
        return void 0 === i && (i = e), (n = t.call(this, Bm("svg", e), i) || this).namespace(), n
    }
    r(e, t);
    var i = e.prototype;
    return i.defs = function () {
        return this.isRoot() ? Om(this.node.querySelector("defs")) || this.put(new Dv) : this.root().defs()
    }, i.isRoot = function () {
        return !this.node.parentNode || !(this.node.parentNode instanceof Rm.window.SVGElement) && "#document-fragment" !== this.node.parentNode.nodeName
    }, i.namespace = function () {
        return this.isRoot() ? this.attr({
            xmlns: xm,
            version: "1.1"
        }).attr("xmlns:xlink", Cm, Am).attr("xmlns:svgjs", "http://svgjs.dev/svgjs", Am) : this.root().namespace()
    }, i.removeNamespace = function () {
        return this.attr({
            xmlns: null,
            version: null
        }).attr("xmlns:xlink", null, Am).attr("xmlns:svgjs", null, Am)
    }, i.root = function () {
        return this.isRoot() ? this : t.prototype.root.call(this)
    }, e
}(Pv);
gm({
    Container: {
        nested: Hm(function () {
            return this.put(new jg)
        })
    }
}), Fm(jg, "Svg", !0);
var $g = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("symbol", e), i) || this
    }
    return r(e, t), e
}(Pv);
gm({
    Container: {
        symbol: Hm(function () {
            return this.put(new $g)
        })
    }
}), Fm($g, "Symbol");
var Wg = Object.freeze({
        plain: function (t) {
            return !1 === this._build && this.clear(), this.node.appendChild(Rm.document.createTextNode(t)), this
        },
        length: function () {
            return this.node.getComputedTextLength()
        },
        x: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.x : this.attr("x", this.attr("x") + t - e.x)
        },
        y: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.y : this.attr("y", this.attr("y") + t - e.y)
        },
        move: function (t, e, i) {
            return void 0 === i && (i = this.bbox()), this.x(t, i).y(e, i)
        },
        cx: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.cx : this.attr("x", this.attr("x") + t - e.cx)
        },
        cy: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.cy : this.attr("y", this.attr("y") + t - e.cy)
        },
        center: function (t, e, i) {
            return void 0 === i && (i = this.bbox()), this.cx(t, i).cy(e, i)
        },
        ax: function (t) {
            return this.attr("x", t)
        },
        ay: function (t) {
            return this.attr("y", t)
        },
        amove: function (t, e) {
            return this.ax(t).ay(e)
        },
        build: function (t) {
            return this._build = !!t, this
        }
    }),
    qg = function (t) {
        function e(e, i) {
            var n;
            return void 0 === i && (i = e), (n = t.call(this, Bm("text", e), i) || this).dom.leading = new Av(1.3), n._rebuild = !0, n._build = !1, n
        }
        r(e, t);
        var i = e.prototype;
        return i.leading = function (t) {
            return null == t ? this.dom.leading : (this.dom.leading = new Av(t), this.rebuild())
        }, i.rebuild = function (t) {
            if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                var e = this,
                    i = 0,
                    n = this.dom.leading;
                this.each(function (t) {
                    var r = Rm.window.getComputedStyle(this.node).getPropertyValue("font-size"),
                        o = n * new Av(r);
                    this.dom.newLined && (this.attr("x", e.attr("x")), "\n" === this.text() ? i += o : (this.attr("dy", t ? o + i : 0), i = 0))
                }), this.fire("rebuild")
            }
            return this
        }, i.setData = function (t) {
            return this.dom = t, this.dom.leading = new Av(t.leading || 1.3), this
        }, i.text = function (t) {
            if (void 0 === t) {
                var e = this.node.childNodes,
                    i = 0;
                t = "";
                for (var n = 0, r = e.length; n < r; ++n) "textPath" !== e[n].nodeName ? (n !== i && 3 !== e[n].nodeType && !0 === Om(e[n]).dom.newLined && (t += "\n"), t += e[n].textContent) : 0 === n && (i = 1);
                return t
            }
            if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
            else
                for (var o = 0, s = (t = (t + "").split("\n")).length; o < s; o++) this.newLine(t[o]);
            return this.build(!1).rebuild()
        }, e
    }(Mv);
zm(qg, Wg), gm({
    Container: {
        text: Hm(function (t) {
            return void 0 === t && (t = ""), this.put(new qg).text(t)
        }),
        plain: Hm(function (t) {
            return void 0 === t && (t = ""), this.put(new qg).plain(t)
        })
    }
}), Fm(qg, "Text");
var Gg = function (t) {
    function e(e, i) {
        var n;
        return void 0 === i && (i = e), (n = t.call(this, Bm("tspan", e), i) || this)._build = !1, n
    }
    r(e, t);
    var i = e.prototype;
    return i.dx = function (t) {
        return this.attr("dx", t)
    }, i.dy = function (t) {
        return this.attr("dy", t)
    }, i.newLine = function () {
        this.dom.newLined = !0;
        var t = this.parent();
        if (!(t instanceof qg)) return this;
        var e = t.index(this),
            i = Rm.window.getComputedStyle(this.node).getPropertyValue("font-size"),
            n = t.dom.leading * new Av(i);
        return this.dy(e ? n : 0).attr("x", t.x())
    }, i.text = function (t) {
        return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? (this.clear().build(!0), t.call(this, this), this.build(!1)) : this.plain(t), this)
    }, e
}(Mv);
zm(Gg, Wg), gm({
    Tspan: {
        tspan: Hm(function (t) {
            void 0 === t && (t = "");
            var e = new Gg;
            return this._build || this.clear(), this.put(e).text(t)
        })
    },
    Text: {
        newLine: function (t) {
            return void 0 === t && (t = ""), this.tspan(t).newLine()
        }
    }
}), Fm(Gg, "Tspan");
var Kg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("circle", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.radius = function (t) {
        return this.attr("r", t)
    }, i.rx = function (t) {
        return this.attr("r", t)
    }, i.ry = function (t) {
        return this.rx(t)
    }, i.size = function (t) {
        return this.radius(new Av(t).divide(2))
    }, e
}(Mv);
zm(Kg, {
    x: Uv,
    y: Fv,
    cx: Nv,
    cy: Vv,
    width: zv,
    height: Hv
}), gm({
    Container: {
        circle: Hm(function (t) {
            return void 0 === t && (t = 0), this.put(new Kg).size(t).move(0, 0)
        })
    }
}), Fm(Kg, "Circle");
var Yg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("clipPath", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.remove = function () {
        return this.targets().forEach(function (t) {
            t.unclip()
        }), t.prototype.remove.call(this)
    }, i.targets = function () {
        return mv('svg [clip-path*="' + this.id() + '"]')
    }, e
}(Pv);
gm({
    Container: {
        clip: Hm(function () {
            return this.defs().put(new Yg)
        })
    },
    Element: {
        clipper: function () {
            return this.reference("clip-path")
        },
        clipWith: function (t) {
            var e = t instanceof Yg ? t : this.parent().clip().add(t);
            return this.attr("clip-path", 'url("#' + e.id() + '")')
        },
        unclip: function () {
            return this.attr("clip-path", null)
        }
    }
}), Fm(Yg, "ClipPath");
var Xg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("foreignObject", e), i) || this
    }
    return r(e, t), e
}(Iv);
gm({
    Container: {
        foreignObject: Hm(function (t, e) {
            return this.put(new Xg).size(t, e)
        })
    }
}), Fm(Xg, "ForeignObject");
var Zg = Object.freeze({
        dmove: function (t, e) {
            return this.children().forEach(function (i, n) {
                var r;
                try {
                    r = i.bbox()
                } catch (t) {
                    return
                }
                var o = new hv(i),
                    s = o.translate(t, e).transform(o.inverse()),
                    a = new sv(r.x, r.y).transform(s);
                i.move(a.x, a.y)
            }), this
        },
        dx: function (t) {
            return this.dmove(t, 0)
        },
        dy: function (t) {
            return this.dmove(0, t)
        },
        height: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.height : this.size(e.width, t, e)
        },
        move: function (t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = this.bbox());
            var n = t - i.x,
                r = e - i.y;
            return this.dmove(n, r)
        },
        size: function (t, e, i) {
            void 0 === i && (i = this.bbox());
            var n = Sm(this, t, e, i),
                r = n.width / i.width,
                o = n.height / i.height;
            return this.children().forEach(function (t, e) {
                var n = new sv(i).transform(new hv(t).inverse());
                t.scale(r, o, n.x, n.y)
            }), this
        },
        width: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.width : this.size(t, e.height, e)
        },
        x: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.x : this.move(t, e.y, e)
        },
        y: function (t, e) {
            return void 0 === e && (e = this.bbox()), null == t ? e.y : this.move(e.x, t, e)
        }
    }),
    Qg = function (t) {
        function e(e, i) {
            return void 0 === i && (i = e), t.call(this, Bm("g", e), i) || this
        }
        return r(e, t), e
    }(Pv);
zm(Qg, Zg), gm({
    Container: {
        group: Hm(function () {
            return this.put(new Qg)
        })
    }
}), Fm(Qg, "G");
var Jg = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("a", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.target = function (t) {
        return this.attr("target", t)
    }, i.to = function (t) {
        return this.attr("href", t, Cm)
    }, e
}(Pv);
zm(Jg, Zg), gm({
    Container: {
        link: Hm(function (t) {
            return this.put(new Jg).to(t)
        })
    },
    Element: {
        unlink: function () {
            var t = this.linker();
            if (!t) return this;
            var e = t.parent();
            if (!e) return this.remove();
            var i = e.index(t);
            return e.add(this, i), t.remove(), this
        },
        linkTo: function (t) {
            var e = this.linker();
            return e || (e = new Jg, this.wrap(e)), "function" == typeof t ? t.call(e, e) : e.to(t), this
        },
        linker: function () {
            var t = this.parent();
            return t && "a" === t.node.nodeName.toLowerCase() ? t : null
        }
    }
}), Fm(Jg, "A");
var ty = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("mask", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.remove = function () {
        return this.targets().forEach(function (t) {
            t.unmask()
        }), t.prototype.remove.call(this)
    }, i.targets = function () {
        return mv('svg [mask*="' + this.id() + '"]')
    }, e
}(Pv);
gm({
    Container: {
        mask: Hm(function () {
            return this.defs().put(new ty)
        })
    },
    Element: {
        masker: function () {
            return this.reference("mask")
        },
        maskWith: function (t) {
            var e = t instanceof ty ? t : this.parent().mask().add(t);
            return this.attr("mask", 'url("#' + e.id() + '")')
        },
        unmask: function () {
            return this.attr("mask", null)
        }
    }
}), Fm(ty, "Mask");
var ey = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("stop", e), i) || this
    }
    return r(e, t), e.prototype.update = function (t) {
        return ("number" == typeof t || t instanceof Av) && (t = {
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
        }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new Av(t.offset)), this
    }, e
}(Iv);
gm({
    Gradient: {
        stop: function (t, e, i) {
            return this.put(new ey).update(t, e, i)
        }
    }
}), Fm(ey, "Stop");
var iy = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("style", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.addText = function (t) {
        return void 0 === t && (t = ""), this.node.textContent += t, this
    }, i.font = function (t, e, i) {
        return void 0 === i && (i = {}), this.rule("@font-face", m({
            fontFamily: t,
            src: e
        }, i))
    }, i.rule = function (t, e) {
        return this.addText(function (t, e) {
            if (!t) return "";
            if (!e) return t;
            var i = t + "{";
            for (var n in e) i += n.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }) + ":" + e[n] + ";";
            return i += "}"
        }(t, e))
    }, e
}(Iv);
gm("Dom", {
    style: function (t, e) {
        return this.put(new iy).rule(t, e)
    },
    fontface: function (t, e, i) {
        return this.put(new iy).font(t, e, i)
    }
}), Fm(iy, "Style");
var ny = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("textPath", e), i) || this
    }
    r(e, t);
    var i = e.prototype;
    return i.array = function () {
        var t = this.track();
        return t ? t.array() : null
    }, i.plot = function (t) {
        var e = this.track(),
            i = null;
        return e && (i = e.plot(t)), null == t ? i : this
    }, i.track = function () {
        return this.reference("href")
    }, e
}(qg);
gm({
    Container: {
        textPath: Hm(function (t, e) {
            return t instanceof qg || (t = this.text(t)), t.path(e)
        })
    },
    Text: {
        path: Hm(function (t, e) {
            void 0 === e && (e = !0);
            var i, n = new ny;
            if (t instanceof Cg || (t = this.defs().path(t)), n.attr("href", "#" + t, Cm), e)
                for (; i = this.node.firstChild;) n.node.appendChild(i);
            return this.put(n)
        }),
        textPath: function () {
            return this.findOne("textPath")
        }
    },
    Path: {
        text: Hm(function (t) {
            return t instanceof qg || (t = (new qg).addTo(this.parent()).text(t)), t.path(this)
        }),
        targets: function () {
            var t = this;
            return mv("svg textPath").filter(function (e) {
                return (e.attr("href") || "").includes(t.id())
            })
        }
    }
}), ny.prototype.MorphArray = bg, Fm(ny, "TextPath");
var ry = function (t) {
    function e(e, i) {
        return void 0 === i && (i = e), t.call(this, Bm("use", e), i) || this
    }
    return r(e, t), e.prototype.use = function (t, e) {
        return this.attr("href", (e || "") + "#" + t, Cm)
    }, e
}(Mv);
gm({
    Container: {
        use: Hm(function (t, e) {
            return this.put(new ry).use(t, e)
        })
    }
}), Fm(ry, "Use");
var oy, sy = Mm;
zm([jg, $g, Zv, Xv, ig], ym("viewbox")), zm([eg, Lg, Ig, Cg], ym("marker")), zm(qg, ym("Text")), zm(Cg, ym("Path")), zm(Dv, ym("Defs")), zm([qg, Gg], ym("Tspan")), zm([Pg, $v, Yv, Fg], ym("radius")), zm(kv, ym("EventTarget")), zm(Rv, ym("Dom")), zm(Iv, ym("Element")), zm(Mv, ym("Shape")), zm([Pv, Wv], ym("Container")), zm(Yv, ym("Gradient")), zm(Fg, ym("Runner")), fv.extend([].concat(new Set(vm))), void 0 === (oy = [Av, ov, lv, hv, xv, Qv, bg]) && (oy = []), Ag.push.apply(Ag, [].concat(oy)), zm(Ag, {
    to: function (t) {
        return (new kg).type(this.constructor).from(this.valueOf()).to(t)
    },
    fromArray: function (t) {
        return this.init(t), this
    }
});
var ay = !1,
    hy = .04;
if (document.location.href && -1 !== document.location.href.indexOf("mask=test")) {
    var cy = document.location.href.split("?")[1];
    if (cy) {
        for (var uy = {}, ly = 0, dy = cy.split("&"); ly < dy.length; ly++) {
            var fy = dy[ly].split("="),
                py = fy[0],
                my = fy[1];
            uy[py] = my
        }
        "test" == uy.mask && (ay = !0), void 0 !== uy.offset && (hy = Number(uy.offset))
    }
}
var vy, gy = function () {
        function t(t, e, i) {
            this.targetView = t, this.vm = e, this._playSpeed = 1;
            var n = t.offsetWidth,
                r = t.offsetHeight;
            this.videoSize = {
                width: n,
                height: r
            };
            this.dataLoader = new pm(i);
            if (ay) {
                var o = document.createElement("div");
                o.style.position = "absolute", o.style.width = "100%", o.style.height = "100%", o.style.opacity = "0.5", o.style.backgroundSize = "contain", t.parentElement.appendChild(o), this.testImage = o
            }
        }
        var e = t.prototype;
        return e.setPlaySpeed = function (t) {
            this._playSpeed = t
        }, e.setUrl = function (t) {
            this.dataLoader = new pm(t)
        }, e.start = function () {
            var t = this;
            clearInterval(this.updateMaskInterval), this.updateMaskInterval = setInterval(function () {
                var e = t.getCurrentTime(),
                    i = hy,
                    n = t.dataLoader.getMask(e + i);
                if (n) {
                    var r = n.ptsTime,
                        o = n.image;
                    if (t.currentPtsTime == r) return;
                    if (ay && (t.testImage.innerHTML = "currentTime:" + e.toFixed(2) + " | ptsTime:" + r + " image:" + ("" == o ? "0" : "1")), "" == o) t.targetView.style.webkitMaskImage = "", t.targetView.style.maskImage = "", t.testImage && (t.testImage.style.backgroundImage = "");
                    else {
                        t.currentPtsTime = r;
                        var s = "url(" + t.resizeImage(o) + ")";
                        t.targetView.style.webkitMaskImage = s, t.targetView.style.maskImage = s, t.testImage && (t.testImage.style.backgroundImage = "url(" + t.resizeImage(o) + ")")
                    }
                }
            }, 10)
        }, e.stop = function () {
            clearInterval(this.updateMaskInterval)
        }, e.update = function (t) {
            this.dataLoader.update(t)
        }, e.getCurrentTime = function () {
            return this.vm.currentTime
        }, e.resize = function (t) {
            var e = t.width,
                i = t.height;
            this.videoSize = {
                width: e,
                height: i
            }
        }, e.resizeImage = function (t) {
            var e = sy(t),
                i = e.width(),
                n = e.height(),
                r = this.videoSize,
                o = r.width / r.height,
                s = i / n;
            if (Math.abs(s - o) < .01) return this.convertSVGToBase64(t);
            if (s < o) {
                var a = o * n,
                    h = (a - i) / 2;
                e.width(a);
                for (var c = 0, u = e.children(); c < u.length; c++) {
                    u[c].move(h, 0)
                }
                return e.rect(h + 1, n), e.rect(h + 1, n).move(a - h - 1, 0), this.convertSVGToBase64(e.svg())
            }
            var l = i / o,
                d = (l - n) / 2;
            e.height(l);
            for (var f = 0, p = e.children(); f < p.length; f++) {
                p[f].move(0, d)
            }
            return e.rect(i, l + 1), e.rect(i, l + 1).move(0, l - d - 1), this.convertSVGToBase64(e.svg())
        }, e.clear = function () {
            this.targetView.style.maskImage = "", this.targetView.style.webkitMaskImage = "", this.testImage && (this.testImage.style.backgroundImage = "")
        }, e.convertSVGToBase64 = function (t) {
            return "data:image/svg+xml;base64," + btoa(t)
        }, t
    }(),
    yy = st(function (t) {
