/* prebid.js v9.44.1
Updated: 2025-06-30
Modules: userId, ixBidAdapter, kueezRtbBidAdapter, minutemediaBidAdapter, onetagBidAdapter, openxBidAdapter, pubmaticBidAdapter, riseBidAdapter, rubiconBidAdapter, smartadserverBidAdapter, sovrnBidAdapter, ttdBidAdapter, vidazooBidAdapter, consentManagementGpp, consentManagementTcf, gppControl_usnat, gppControl_usstates, gptPreAuction, tcfControl, adpod, consentManagementUsp, dfpAdServerVideo, 33acrossIdSystem, id5IdSystem, sharedIdSystem, uid2IdSystem */
if (window.pbjs && window.pbjs.libLoaded)
    try {
        window.pbjs.getConfig("debug") && console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")
    } catch (e) {}
else
    (function() {
        ( () => {
            var r, t = {
                70433: (r, t, e) => {
                    function n(r, t, e, n, o) {
                        for (t = t.split ? t.split(".") : t,
                        n = 0; n < t.length; n++)
                            r = r ? r[t[n]] : o;
                        return r === o ? e : r
                    }
                    e.d(t, {
                        A: () => n
                    })
                }
                ,
                68128: r => {
                    /*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
                    u.SYNC = 1,
                    u.ASYNC = 2,
                    u.QUEUE = 4;
                    var t = "fun-hooks";
                    var e = Object.freeze({
                        useProxy: !0,
                        ready: 0
                    })
                      , n = new WeakMap
                      , o = "2,1,0" === [1].reduce((function(r, t, e) {
                        return [r, t, e]
                    }
                    ), 2).toString() ? Array.prototype.reduce : function(r, t) {
                        var e, n = Object(this), o = n.length >>> 0, i = 0;
                        if (t)
                            e = t;
                        else {
                            for (; i < o && !(i in n); )
                                i++;
                            e = n[i++]
                        }
                        for (; i < o; )
                            i in n && (e = r(e, n[i], i, n)),
                            i++;
                        return e
                    }
                    ;
                    function i(r, t) {
                        return Array.prototype.slice.call(r, t)
                    }
                    var f = Object.assign || function(r) {
                        return o.call(i(arguments, 1), (function(r, t) {
                            return t && Object.keys(t).forEach((function(e) {
                                r[e] = t[e]
                            }
                            )),
                            r
                        }
                        ), r)
                    }
                    ;
                    function u(r) {
                        var a, c = {}, l = [];
                        function p(r, t) {
                            return "function" == typeof r ? h.call(null, "sync", r, t) : "string" == typeof r && "function" == typeof t ? h.apply(null, arguments) : "object" == typeof r ? y.apply(null, arguments) : void 0
                        }
                        function y(r, t, e) {
                            var n = !0;
                            void 0 === t && (t = Object.getOwnPropertyNames(r),
                            n = !1);
                            var o = {}
                              , i = ["constructor"];
                            do {
                                (t = t.filter((function(t) {
                                    return !("function" != typeof r[t] || -1 !== i.indexOf(t) || t.match(/^_/))
                                }
                                ))).forEach((function(t) {
                                    var n = t.split(":")
                                      , i = n[0]
                                      , f = n[1] || "sync";
                                    if (!o[i]) {
                                        var u = r[i];
                                        o[i] = r[i] = h(f, u, e ? [e, i] : void 0)
                                    }
                                }
                                )),
                                r = Object.getPrototypeOf(r)
                            } while (n && r);
                            return o
                        }
                        function s(r) {
                            var e = Array.isArray(r) ? r : r.split(".");
                            return o.call(e, (function(n, o, i) {
                                var f = n[o]
                                  , u = !1;
                                return f || (i === e.length - 1 ? (a || l.push((function() {
                                    u || console.warn(t + ": referenced '" + r + "' but it was never created")
                                }
                                )),
                                n[o] = v((function(r) {
                                    n[o] = r,
                                    u = !0
                                }
                                ))) : n[o] = {})
                            }
                            ), c)
                        }
                        function v(r) {
                            var t = []
                              , e = []
                              , o = function() {}
                              , i = {
                                before: function(r, e) {
                                    return a.call(this, t, "before", r, e)
                                },
                                after: function(r, t) {
                                    return a.call(this, e, "after", r, t)
                                },
                                getHooks: function(r) {
                                    var n = t.concat(e);
                                    "object" == typeof r && (n = n.filter((function(t) {
                                        return Object.keys(r).every((function(e) {
                                            return t[e] === r[e]
                                        }
                                        ))
                                    }
                                    )));
                                    try {
                                        f(n, {
                                            remove: function() {
                                                return n.forEach((function(r) {
                                                    r.remove()
                                                }
                                                )),
                                                this
                                            }
                                        })
                                    } catch (r) {
                                        console.error("error adding `remove` to array, did you modify Array.prototype?")
                                    }
                                    return n
                                },
                                removeAll: function() {
                                    return this.getHooks().remove()
                                }
                            }
                              , u = {
                                install: function(n, i, f) {
                                    this.type = n,
                                    o = f,
                                    f(t, e),
                                    r && r(i)
                                }
                            };
                            return n.set(i.after, u),
                            i;
                            function a(r, n, i, f) {
                                var u = {
                                    hook: i,
                                    type: n,
                                    priority: f || 10,
                                    remove: function() {
                                        var n = r.indexOf(u);
                                        -1 !== n && (r.splice(n, 1),
                                        o(t, e))
                                    }
                                };
                                return r.push(u),
                                r.sort((function(r, t) {
                                    return t.priority - r.priority
                                }
                                )),
                                o(t, e),
                                this
                            }
                        }
                        function h(e, o, c) {
                            var p = o.after && n.get(o.after);
                            if (p) {
                                if (p.type !== e)
                                    throw t + ": recreated hookable with different type";
                                return o
                            }
                            var y, h, d = c ? s(c) : v(), b = {
                                get: function(r, t) {
                                    return d[t] || Reflect.get.apply(Reflect, arguments)
                                }
                            };
                            return a || l.push(g),
                            r.useProxy && "function" == typeof Proxy && Proxy.revocable ? h = new Proxy(o,b) : (h = function() {
                                return b.apply ? b.apply(o, this, i(arguments)) : o.apply(this, arguments)
                            }
                            ,
                            f(h, d)),
                            n.get(h.after).install(e, h, (function(r, t) {
                                var n, o = [];
                                r.length || t.length ? (r.forEach(f),
                                n = o.push(void 0) - 1,
                                t.forEach(f),
                                y = function(r, t, f) {
                                    var u, a = 0, c = "async" === e && "function" == typeof f[f.length - 1] && f.pop();
                                    function l(r) {
                                        "sync" === e ? u = r : c && c.apply(null, arguments)
                                    }
                                    function p(r) {
                                        if (o[a]) {
                                            var n = i(arguments);
                                            return p.bail = l,
                                            n.unshift(p),
                                            o[a++].apply(t, n)
                                        }
                                        "sync" === e ? u = r : c && c.apply(null, arguments)
                                    }
                                    return o[n] = function() {
                                        var n = i(arguments, 1);
                                        "async" === e && c && (delete p.bail,
                                        n.push(p));
                                        var o = r.apply(t, n);
                                        "sync" === e && p(o)
                                    }
                                    ,
                                    p.apply(null, f),
                                    u
                                }
                                ) : y = void 0;
                                function f(r) {
                                    o.push(r.hook)
                                }
                                g()
                            }
                            )),
                            h;
                            function g() {
                                !a && ("sync" !== e || r.ready & u.SYNC) && ("async" !== e || r.ready & u.ASYNC) ? "sync" !== e && r.ready & u.QUEUE ? b.apply = function() {
                                    var r = arguments;
                                    l.push((function() {
                                        h.apply(r[1], r[2])
                                    }
                                    ))
                                }
                                : b.apply = function() {
                                    throw t + ": hooked function not ready"
                                }
                                : b.apply = y
                            }
                        }
                        return (r = f({}, e, r)).ready ? p.ready = function() {
                            a = !0,
                            function(r) {
                                for (var t; t = r.shift(); )
                                    t()
                            }(l)
                        }
                        : a = !0,
                        p.get = s,
                        p
                    }
                    r.exports = u
                }
                ,
                63172: (r, t, e) => {
                    function n(r, t, e) {
                        t.split && (t = t.split("."));
                        for (var n, o, i = 0, f = t.length, u = r; i < f && "__proto__" != (o = "" + t[i++]) && "constructor" !== o && "prototype" !== o; )
                            u = u[o] = i === f ? e : typeof (n = u[o]) == typeof t ? n : 0 * t[i] != 0 || ~("" + t[i]).indexOf(".") ? {} : []
                    }
                    e.d(t, {
                        J: () => n
                    })
                }
                ,
                45751: (r, t, e) => {
                    function n(r) {
                        var t, e, o;
                        if (Array.isArray(r)) {
                            for (e = Array(t = r.length); t--; )
                                e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                            return e
                        }
                        if ("[object Object]" === Object.prototype.toString.call(r)) {
                            for (t in e = {},
                            r)
                                "__proto__" === t ? Object.defineProperty(e, t, {
                                    value: n(r[t]),
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0
                                }) : e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                            return e
                        }
                        return r
                    }
                    e.d(t, {
                        Q: () => n
                    })
                }
            }, e = {};
            function n(r) {
                var o = e[r];
                if (void 0 !== o)
                    return o.exports;
                var i = e[r] = {
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, n),
                i.exports
            }
            n.m = t,
            r = [],
            n.O = (t, e, o, i) => {
                if (!e) {
                    var f = 1 / 0;
                    for (l = 0; l < r.length; l++) {
                        e = r[l][0],
                        o = r[l][1],
                        i = r[l][2];
                        for (var u = !0, a = 0; a < e.length; a++)
                            (!1 & i || f >= i) && Object.keys(n.O).every((r => n.O[r](e[a]))) ? e.splice(a--, 1) : (u = !1,
                            i < f && (f = i));
                        if (u) {
                            r.splice(l--, 1);
                            var c = o();
                            void 0 !== c && (t = c)
                        }
                    }
                    return t
                }
                i = i || 0;
                for (var l = r.length; l > 0 && r[l - 1][2] > i; l--)
                    r[l] = r[l - 1];
                r[l] = [e, o, i]
            }
            ,
            n.n = r => {
                var t = r && r.__esModule ? () => r.default : () => r;
                return n.d(t, {
                    a: t
                }),
                t
            }
            ,
            n.d = (r, t) => {
                for (var e in t)
                    n.o(t, e) && !n.o(r, e) && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: t[e]
                    })
            }
            ,
            n.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (r) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            n.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t),
            n.r = r => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(r, "__esModule", {
                    value: !0
                })
            }
            ,
            ( () => {
                var r = {
                    39673: 0
                };
                n.O.j = t => 0 === r[t];
                var t = (t, e) => {
                    var o, i, f = e[0], u = e[1], a = e[2], c = 0;
                    if (f.some((t => 0 !== r[t]))) {
                        for (o in u)
                            n.o(u, o) && (n.m[o] = u[o]);
                        if (a)
                            var l = a(n)
                    }
                    for (t && t(e); c < f.length; c++)
                        i = f[c],
                        n.o(r, i) && r[i] && r[i][0](),
                        r[i] = 0;
                    return n.O(l)
                }
                  , e = self.pbjsChunk = self.pbjsChunk || [];
                e.forEach(t.bind(null, 0)),
                e.push = t.bind(null, e.push.bind(e))
            }
            )();
            var o = n.O(void 0, [60802, 37769, 12139, 51085], ( () => n(77332)));
            o = n.O(o)
        }
        )();
        (self.pbjsChunk = self.pbjsChunk || []).push([[60802], {
            95789: (e, t, n) => {
                n.d(t, {
                    A4: () => l,
                    J7: () => u,
                    Pg: () => g
                });
                var r = n(41580)
                  , i = n(91069)
                  , o = n(15901)
                  , s = n(7873)
                  , a = n(45569);
                const d = (0,
                s.m)()
                  , c = "outstream";
                function l(e) {
                    const {url: t, config: n, id: s, callback: l, loaded: u, adUnitCode: g, renderNow: f} = e;
                    this.url = t,
                    this.config = n,
                    this.handlers = {},
                    this.id = s,
                    this.renderNow = f,
                    this.adUnitCode = g,
                    this.loaded = u,
                    this.cmd = [],
                    this.push = e => {
                        "function" == typeof e ? this.loaded ? e.call() : this.cmd.push(e) : (0,
                        i.logError)("Commands given to Renderer.push must be wrapped in a function")
                    }
                    ,
                    this.callback = l || ( () => {
                        this.loaded = !0,
                        this.process()
                    }
                    ),
                    this.render = function() {
                        const e = arguments
                          , n = () => {
                            this._render ? this._render.apply(this, e) : (0,
                            i.logWarn)("No render function was provided, please use .setRender on the renderer")
                        }
                        ;
                        !function(e) {
                            const t = d.adUnits
                              , n = (0,
                            o.I6)(t, (t => t.code === e));
                            if (!n)
                                return !1;
                            const r = n?.renderer
                              , i = !!(r && r.url && r.render)
                              , s = n?.mediaTypes?.video?.renderer
                              , a = !!(s && s.url && s.render);
                            return !!(i && !0 !== r.backupOnly || a && !0 !== s.backupOnly)
                        }(g) ? f ? n() : (this.cmd.unshift(n),
                        (0,
                        r.R)(t, a.tp, c, this.callback, this.documentContext)) : ((0,
                        i.logWarn)(`External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ${g}`),
                        n())
                    }
                    .bind(this)
                }
                function u(e) {
                    return !(!e || !e.url && !e.renderNow)
                }
                function g(e, t, n) {
                    let r = null;
                    e.config && e.config.documentResolver && (r = e.config.documentResolver(t, document, n)),
                    r || (r = document),
                    e.documentContext = r,
                    e.render(t, e.documentContext)
                }
                l.install = function(e) {
                    let {url: t, config: n, id: r, callback: i, loaded: o, adUnitCode: s, renderNow: a} = e;
                    return new l({
                        url: t,
                        config: n,
                        id: r,
                        callback: i,
                        loaded: o,
                        adUnitCode: s,
                        renderNow: a
                    })
                }
                ,
                l.prototype.getConfig = function() {
                    return this.config
                }
                ,
                l.prototype.setRender = function(e) {
                    this._render = e
                }
                ,
                l.prototype.setEventHandlers = function(e) {
                    this.handlers = e
                }
                ,
                l.prototype.handleVideoEvent = function(e) {
                    let {id: t, eventName: n} = e;
                    "function" == typeof this.handlers[n] && this.handlers[n](),
                    (0,
                    i.logMessage)(`Prebid Renderer event for id ${t} type ${n}`)
                }
                ,
                l.prototype.process = function() {
                    for (; this.cmd.length > 0; )
                        try {
                            this.cmd.shift().call()
                        } catch (e) {
                            (0,
                            i.logError)(`Error processing Renderer command on ad unit '${this.adUnitCode}':`, e)
                        }
                }
            }
            ,
            76811: (e, t, n) => {
                n.d(t, {
                    DL: () => l,
                    Ml: () => i,
                    Ue: () => r,
                    VJ: () => g,
                    hE: () => u,
                    hq: () => c,
                    mo: () => d,
                    pY: () => f,
                    qX: () => o,
                    uc: () => a,
                    yl: () => s
                });
                const r = "accessDevice"
                  , i = "syncUser"
                  , o = "enrichUfpd"
                  , s = "enrichEids"
                  , a = "fetchBids"
                  , d = "reportAnalytics"
                  , c = "transmitEids"
                  , l = "transmitUfpd"
                  , u = "transmitPreciseGeo"
                  , g = "transmitTid"
                  , f = "loadExternalScript"
            }
            ,
            83441: (e, t, n) => {
                n.d(t, {
                    s: () => i
                });
                var r = n(11445);
                const i = (0,
                n(2604).ZI)((e => r.Ay.resolveAlias(e)))
            }
            ,
            45569: (e, t, n) => {
                n.d(t, {
                    Tn: () => a,
                    fW: () => o,
                    tW: () => i,
                    tp: () => r,
                    zu: () => s
                });
                const r = "prebid"
                  , i = "bidder"
                  , o = "userId"
                  , s = "rtd"
                  , a = "analytics"
            }
            ,
            2604: (e, t, n) => {
                n.d(t, {
                    Dk: () => s,
                    Ii: () => o,
                    TQ: () => f,
                    U3: () => m,
                    XG: () => l,
                    ZI: () => p,
                    Zw: () => c,
                    bt: () => u,
                    e3: () => g,
                    iK: () => a,
                    q7: () => d
                });
                var r = n(45569)
                  , i = n(16833);
                const o = "component"
                  , s = o + "Type"
                  , a = o + "Name"
                  , d = "adapterCode"
                  , c = "storageType"
                  , l = "configName"
                  , u = "syncType"
                  , g = "syncUrl"
                  , f = "_config";
                function p(e) {
                    return function(t, n, i) {
                        const c = {
                            [s]: t,
                            [a]: n,
                            [o]: `${t}.${n}`
                        };
                        return t === r.tW && (c[d] = e(n)),
                        m(Object.assign(c, i))
                    }
                }
                const m = (0,
                i.A_)("sync", (e => e))
            }
            ,
            96953: (e, t, n) => {
                n.d(t, {
                    Vx: () => d,
                    l7: () => a,
                    p4: () => h,
                    $V: () => m,
                    nl: () => f,
                    ZP: () => b,
                    $p: () => y,
                    uD: () => p
                });
                var r = n(70433)
                  , i = n(43272)
                  , o = n(95139)
                  , s = n(76811);
                const a = ["data", "ext.data", "yob", "gender", "keywords", "kwarray", "id", "buyeruid", "customdata"].map((e => `user.${e}`)).concat("device.ext.cdep")
                  , d = ["user.eids", "user.ext.eids"]
                  , c = ["user.geo.lat", "user.geo.lon", "device.geo.lat", "device.geo.lon"]
                  , l = ["device.ip"]
                  , u = ["device.ipv6"];
                function g(e) {
                    return Object.assign({
                        get() {},
                        run(e, t, n, r, i) {
                            const o = n && n[r];
                            if (m(o) && i()) {
                                const e = this.get(o);
                                void 0 === e ? delete n[r] : n[r] = e
                            }
                        }
                    }, e)
                }
                function f(e) {
                    return e.forEach((e => {
                        e.paths = e.paths.map((e => {
                            const t = e.split(".")
                              , n = t.pop();
                            return [t.length > 0 ? t.join(".") : null, n]
                        }
                        ))
                    }
                    )),
                    function(t, n) {
                        const i = [];
                        for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)
                            s[a - 2] = arguments[a];
                        const d = p(t, ...s);
                        return e.forEach((e => {
                            if (!1 !== t[e.name])
                                for (const [o,s] of e.paths) {
                                    const a = null == o ? n : (0,
                                    r.A)(n, o);
                                    if (i.push(e.run(n, o, a, s, d.bind(null, e))),
                                    !1 === t[e.name])
                                        return
                                }
                        }
                        )),
                        i.filter((e => null != e))
                    }
                }
                function p(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return function(t) {
                        return e.hasOwnProperty(t.name) || (e[t.name] = !!t.applies(...n)),
                        e[t.name]
                    }
                }
                function m(e) {
                    return null != e && ("object" != typeof e || Object.keys(e).length > 0)
                }
                function h(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.io;
                    return function(n) {
                        return !t(e, n)
                    }
                }
                function b() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                    return [{
                        name: s.DL,
                        paths: a,
                        applies: h(s.DL, e)
                    }, {
                        name: s.hq,
                        paths: d,
                        applies: h(s.hq, e)
                    }, {
                        name: s.hE,
                        paths: c,
                        applies: h(s.hE, e),
                        get: e => Math.round(100 * (e + Number.EPSILON)) / 100
                    }, {
                        name: s.hE,
                        paths: l,
                        applies: h(s.hE, e),
                        get: e => function(e) {
                            if (!e)
                                return null;
                            let t = e.split(".").map(Number);
                            if (4 != t.length)
                                return null;
                            let n = [];
                            for (let e = 0; e < 4; e++) {
                                let t = Math.max(0, Math.min(8, 24 - 8 * e));
                                n.push(255 << 8 - t & 255)
                            }
                            return t.map(( (e, t) => e & n[t])).join(".")
                        }(e)
                    }, {
                        name: s.hE,
                        paths: u,
                        applies: h(s.hE, e),
                        get: e => function(e) {
                            if (!e)
                                return null;
                            let t = e.split(":").map((e => parseInt(e, 16)));
                            for (t = t.map((e => isNaN(e) ? 0 : e)); t.length < 8; )
                                t.push(0);
                            if (8 != t.length)
                                return null;
                            let n = [];
                            for (let e = 0; e < 8; e++) {
                                let t = Math.max(0, Math.min(16, 64 - 16 * e));
                                n.push(65535 << 16 - t & 65535)
                            }
                            return t.map(( (e, t) => e & n[t])).map((e => e.toString(16))).join(":")
                        }(e)
                    }, {
                        name: s.VJ,
                        paths: ["source.tid"],
                        applies: h(s.VJ, e)
                    }].map(g)
                }
                const y = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                    const t = f(b(e))
                      , n = f(function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                        return [{
                            name: s.hq,
                            paths: ["userId", "userIdAsEids"],
                            applies: h(s.hq, e)
                        }, {
                            name: s.VJ,
                            paths: ["ortb2Imp.ext.tid"],
                            applies: h(s.VJ, e)
                        }].map(g)
                    }(e));
                    return function(e) {
                        const r = {};
                        return {
                            ortb2: n => (t(r, n, e),
                            n),
                            bidRequest: t => (n(r, t, e),
                            t)
                        }
                    }
                }();
                (0,
                o.qB)(s.VJ, "enableTIDs config", ( () => {
                    if (!i.$W.getConfig("enableTIDs"))
                        return {
                            allow: !1,
                            reason: "TIDs are disabled"
                        }
                }
                ))
            }
            ,
            95139: (e, t, n) => {
                n.d(t, {
                    io: () => s,
                    qB: () => o
                });
                var r = n(91069)
                  , i = n(2604);
                const [o,s] = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
                    r.prefixLog)("Activity control:");
                    const t = {};
                    function n(e) {
                        return t[e] = t[e] || []
                    }
                    function o(t, n, r, o) {
                        let s;
                        try {
                            s = r(o)
                        } catch (r) {
                            e.logError(`Exception in rule ${n} for '${t}'`, r),
                            s = {
                                allow: !1,
                                reason: r
                            }
                        }
                        return s && Object.assign({
                            activity: t,
                            name: n,
                            component: o[i.Ii]
                        }, s)
                    }
                    const s = {};
                    function a(t) {
                        let {activity: n, name: r, allow: i, reason: o, component: a} = t;
                        const d = `${r} ${i ? "allowed" : "denied"} '${n}' for '${a}'${o ? ":" : ""}`
                          , c = s.hasOwnProperty(d);
                        if (c && clearTimeout(s[d]),
                        s[d] = setTimeout(( () => delete s[d]), 1e3),
                        !c) {
                            const t = [d];
                            o && t.push(o),
                            (i ? e.logInfo : e.logWarn).apply(e, t)
                        }
                    }
                    return [function(e, t, r) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                        const o = n(e)
                          , s = o.findIndex((e => {
                            let[t] = e;
                            return i < t
                        }
                        ))
                          , a = [i, t, r];
                        return o.splice(s < 0 ? o.length : s, 0, a),
                        function() {
                            const e = o.indexOf(a);
                            e >= 0 && o.splice(e, 1)
                        }
                    }
                    , function(e, t) {
                        let r, i;
                        for (const [s,d,c] of n(e)) {
                            if (r !== s && i)
                                break;
                            r = s;
                            const n = o(e, d, c, t);
                            if (n) {
                                if (!n.allow)
                                    return a(n),
                                    !1;
                                i = n
                            }
                        }
                        return i && a(i),
                        !0
                    }
                    ]
                }()
            }
            ,
            29075: (e, t, n) => {
                n.d(t, {
                    $A: () => T,
                    BS: () => P,
                    Hh: () => N,
                    Pk: () => q,
                    Uc: () => B,
                    XO: () => M,
                    _0: () => D,
                    bw: () => _,
                    n6: () => C,
                    qn: () => j,
                    vB: () => W,
                    vW: () => R,
                    vd: () => U
                });
                var r = n(91069)
                  , i = n(75023)
                  , o = n(78969)
                  , s = n(43272)
                  , a = n(95789)
                  , d = n(71371)
                  , c = n(67314)
                  , l = n(46031)
                  , u = n(16833)
                  , g = n(12449)
                  , f = n(25555)
                  , p = n(11445)
                  , m = n(16894)
                  , h = n(97779)
                  , b = n(33005);
                const {AD_RENDER_FAILED: y, AD_RENDER_SUCCEEDED: v, STALE_RENDER: E, BID_WON: A, EXPIRED_RENDER: I} = o.qY
                  , {EXCEPTION: w} = o.as
                  , T = (0,
                u.A_)("sync", (function(e) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.U9.resolve()).then((t => t ?? c.n.findBidByAdId(e))).catch(( () => {}
                    ))
                }
                ))
                  , C = (0,
                u.A_)("sync", (function(e) {
                    ((0,
                    b.$T)(e.eventtrackers)[b.RO]?.[b.Ni] || []).forEach((e => (0,
                    r.triggerPixel)(e))),
                    i.emit(A, e),
                    c.n.addWinningBid(e)
                }
                ));
                function S(e) {
                    let {reason: t, message: n, bid: o, id: s} = e;
                    const a = {
                        reason: t,
                        message: n
                    };
                    o && (a.bid = o,
                    a.adId = o.adId),
                    s && (a.adId = s),
                    (0,
                    r.logError)(`Error rendering ad (id: ${s}): ${n}`),
                    i.emit(y, a)
                }
                function O(e) {
                    let {doc: t, bid: n, id: r} = e;
                    const o = {
                        doc: t
                    };
                    n && (o.bid = n),
                    r && (o.adId = r),
                    p.Ay.callAdRenderSucceededBidder(n.adapterCode || n.bidder, n),
                    i.emit(v, o)
                }
                function B(e, t) {
                    switch (e.event) {
                    case o.qY.AD_RENDER_FAILED:
                        S({
                            bid: t,
                            id: t.adId,
                            reason: e.info.reason,
                            message: e.info.message
                        });
                        break;
                    case o.qY.AD_RENDER_SUCCEEDED:
                        O({
                            doc: null,
                            bid: t,
                            id: t.adId
                        });
                        break;
                    default:
                        (0,
                        r.logError)(`Received event request for unsupported event: '${e.event}' (adId: '${t.adId}')`)
                    }
                }
                function R(e, t, n) {
                    let {resizeFn: r, fireTrackers: i=g.vO} = n;
                    if ("resizeNativeHeight" === e.action)
                        r(e.width, e.height);
                    else
                        i(e, t)
                }
                const k = {
                    [o.nl.EVENT]: B
                };
                k[o.nl.NATIVE] = R;
                const U = (0,
                u.A_)("sync", (function(e, t) {
                    const {ad: n, adUrl: i, cpm: o, originalCpm: s, width: a, height: d, instl: c} = e
                      , l = {
                        AUCTION_PRICE: s || o,
                        CLICKTHROUGH: t?.clickUrl || ""
                    };
                    return {
                        ad: (0,
                        r.replaceMacros)(n, l),
                        adUrl: (0,
                        r.replaceMacros)(i, l),
                        width: a,
                        height: d,
                        instl: c
                    }
                }
                ))
                  , D = (0,
                u.A_)("sync", (function(e) {
                    let {renderFn: t, resizeFn: n, bidResponse: i, options: s, doc: a, isMainDocument: c=a === document && !(0,
                    r.inIframe)()} = e;
                    const l = i.mediaType === d.G_;
                    if (c || l)
                        return void S({
                            reason: o.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                            message: l ? "Cannot render video ad without a renderer" : "renderAd was prevented from writing to the main document.",
                            bid: i,
                            id: i.adId
                        });
                    const u = U(i, s);
                    t(Object.assign({
                        adId: i.adId
                    }, u));
                    const {width: g, height: f} = u;
                    null != (g ?? f) && n(g, f)
                }
                ));
                function _(e) {
                    let {renderFn: t, resizeFn: n, adId: a, options: d, bidResponse: c, doc: l} = e;
                    N(c, ( () => {
                        if (null != c) {
                            if ((c.status !== o.tl.RENDERED || ((0,
                            r.logWarn)(`Ad id ${a} has been rendered before`),
                            i.emit(E, c),
                            !s.$W.getConfig("auctionOptions")?.suppressStaleRender)) && (h.uW.isBidNotExpired(c) || ((0,
                            r.logWarn)(`Ad id ${a} has been expired`),
                            i.emit(I, c),
                            !s.$W.getConfig("auctionOptions")?.suppressExpiredRender)))
                                try {
                                    D({
                                        renderFn: t,
                                        resizeFn: n,
                                        bidResponse: c,
                                        options: d,
                                        doc: l
                                    })
                                } catch (e) {
                                    S({
                                        reason: o.as.EXCEPTION,
                                        message: e.message,
                                        id: a,
                                        bid: c
                                    })
                                }
                        } else
                            S({
                                reason: o.as.CANNOT_FIND_AD,
                                message: `Cannot find ad '${a}'`,
                                id: a
                            })
                    }
                    ))
                }
                function j(e) {
                    const t = (0,
                    m.BO)(e.metrics);
                    t.checkpoint("bidRender"),
                    t.timeBetween("bidWon", "bidRender", "render.deferred"),
                    t.timeBetween("auctionEnd", "bidRender", "render.pending"),
                    t.timeBetween("requestBids", "bidRender", "render.e2e"),
                    e.status = o.tl.RENDERED
                }
                D.before((function(e, t) {
                    const {bidResponse: n, doc: r} = t;
                    (0,
                    a.J7)(n.renderer) ? ((0,
                    a.Pg)(n.renderer, n, r),
                    O({
                        doc: r,
                        bid: n,
                        id: n.adId
                    }),
                    e.bail()) : e(t)
                }
                ), 100);
                const $ = new WeakMap
                  , x = new WeakSet;
                function N(e, t) {
                    null != e ? ($.set(e, t),
                    e.deferRendering || W(e),
                    q(e)) : t()
                }
                function q(e) {
                    x.has(e) || (x.add(e),
                    C(e))
                }
                function W(e) {
                    const t = $.get(e);
                    t && (t(),
                    j(e),
                    $.delete(e))
                }
                function P(e, t, n) {
                    let i;
                    function s(e, n) {
                        S(Object.assign({
                            id: t,
                            bid: i
                        }, {
                            reason: e,
                            message: n
                        }))
                    }
                    function a(t, n) {
                        const r = e.defaultView?.frameElement;
                        r && (t && (r.width = t,
                        r.style.width && (r.style.width = `${t}px`)),
                        n && (r.height = n,
                        r.style.height && (r.style.height = `${n}px`)))
                    }
                    const d = (c = {
                        resizeFn: a
                    },
                    function(e, t, n) {
                        k.hasOwnProperty(e) && k[e](t, n, c)
                    }
                    );
                    var c;
                    function u(t) {
                        t.ad ? (e.write(t.ad),
                        e.close(),
                        O({
                            doc: e,
                            bid: i,
                            id: i.adId
                        })) : (0,
                        l.HH)(i).then((n => n(t, {
                            sendMessage: (e, t) => d(e, t, i),
                            mkFrame: r.createIframe
                        }, e.defaultView))).then(( () => O({
                            doc: e,
                            bid: i,
                            id: i.adId
                        })), (e => {
                            s(e?.reason || o.as.EXCEPTION, e?.message),
                            e?.stack && (0,
                            r.logError)(e)
                        }
                        ));
                        const n = document.createComment(`Creative ${i.creativeId} served by ${i.bidder} Prebid.js Header Bidding`);
                        (0,
                        r.insertElement)(n, e, "html")
                    }
                    try {
                        t && e ? T(t).then((r => {
                            i = r,
                            _({
                                renderFn: u,
                                resizeFn: a,
                                adId: t,
                                options: {
                                    clickUrl: n?.clickThrough
                                },
                                bidResponse: r,
                                doc: e
                            })
                        }
                        )) : s(o.as.MISSING_DOC_OR_ADID, "missing " + (t ? "doc" : "adId"))
                    } catch (e) {
                        s(w, e.message)
                    }
                }
                function M() {
                    if (!window.frames[o.IY])
                        if (document.body) {
                            const e = (0,
                            r.createInvisibleIframe)();
                            e.name = o.IY,
                            document.body.appendChild(e)
                        } else
                            window.requestAnimationFrame(M)
                }
            }
            ,
            10201: (e, t, n) => {
                n.d(t, {
                    U: () => s
                });
                var r = n(7873)
                  , i = n(91069);
                const o = (0,
                r.m)();
                function s(e, t) {
                    o.adServers = o.adServers || {},
                    o.adServers[e] = o.adServers[e] || {},
                    Object.keys(t).forEach((n => {
                        o.adServers[e][n] ? (0,
                        i.logWarn)(`Attempting to add an already registered function property ${n} for AdServer ${e}.`) : o.adServers[e][n] = t[n]
                    }
                    ))
                }
            }
            ,
            69759: (e, t, n) => {
                function r(e) {
                    var t = e;
                    return {
                        callBids: function() {},
                        setBidderCode: function(e) {
                            t = e
                        },
                        getBidderCode: function() {
                            return t
                        }
                    }
                }
                n.d(t, {
                    A: () => r
                })
            }
            ,
            11445: (e, t, n) => {
                n.d(t, {
                    S1: () => k,
                    Ay: () => K,
                    tS: () => M,
                    pX: () => L,
                    Mf: () => F,
                    K5: () => W,
                    Gs: () => G
                });
                var r = n(91069)
                  , i = n(12449)
                  , o = n(57377)
                  , s = n(68044)
                  , a = n(43272)
                  , d = n(16833)
                  , c = n(15901);
                let l = {};
                function u(e, t, n) {
                    let r = function(e, t) {
                        let n = l[e] = l[e] || {
                            bidders: {}
                        };
                        return t ? n.bidders[t] = n.bidders[t] || {} : n
                    }(e, n);
                    return r[t] = (r[t] || 0) + 1,
                    r[t]
                }
                function g(e) {
                    return u(e, "auctionsCounter")
                }
                function f(e) {
                    return l?.[e]?.requestsCounter || 0
                }
                function p(e, t) {
                    return l?.[e]?.bidders?.[t]?.requestsCounter || 0
                }
                function m(e, t) {
                    return l?.[e]?.bidders?.[t]?.winsCounter || 0
                }
                function h(e) {
                    return l?.[e]?.auctionsCounter || 0
                }
                var b = n(27934)
                  , y = n(16916)
                  , v = n(75023)
                  , E = n(78969)
                  , A = n(16894)
                  , I = n(67314)
                  , w = n(45569)
                  , T = n(95139)
                  , C = n(76811)
                  , S = n(2604)
                  , O = n(96953)
                  , B = n(33005);
                const R = "pbsBidAdapter"
                  , k = {
                    CLIENT: "client",
                    SERVER: "server"
                }
                  , U = {
                    isAllowed: T.io,
                    redact: O.$p
                };
                let D = {}
                  , _ = D.bidderRegistry = {}
                  , j = D.aliasRegistry = {}
                  , $ = [];
                a.$W.getConfig("s2sConfig", (e => {
                    e && e.s2sConfig && ($ = (0,
                    r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
                }
                ));
                var x = {};
                const N = (0,
                S.ZI)((e => D.resolveAlias(e)));
                function q(e) {
                    return e.configName ?? e.name
                }
                function W(e) {
                    return N(w.tp, R, {
                        [S.XG]: q(e)
                    })
                }
                const P = (0,
                d.A_)("sync", (function(e) {
                    let {bidderCode: t, auctionId: n, bidderRequestId: i, adUnits: o, src: s, metrics: a} = e;
                    return o.reduce(( (e, o) => {
                        const d = o.bids.filter((e => e.bidder === t));
                        return null == t && 0 === d.length && null != o.s2sBid && d.push({
                            bidder: null
                        }),
                        e.push(d.reduce(( (e, d) => {
                            const c = null == (d = Object.assign({}, d, {
                                ortb2Imp: (0,
                                r.mergeDeep)({}, o.ortb2Imp, d.ortb2Imp)
                            }, (0,
                            r.getDefinedParams)(o, ["nativeParams", "nativeOrtbRequest", "mediaType", "renderer"]))).mediaTypes ? o.mediaTypes : d.mediaTypes;
                            return (0,
                            r.isValidMediaTypes)(c) ? d = Object.assign({}, d, {
                                mediaTypes: c
                            }) : (0,
                            r.logError)(`mediaTypes is not correctly configured for adunit ${o.code}`),
                            "client" === s && function(e, t) {
                                u(e, "requestsCounter", t)
                            }(o.code, t),
                            e.push(Object.assign({}, d, {
                                adUnitCode: o.code,
                                transactionId: o.transactionId,
                                adUnitId: o.adUnitId,
                                sizes: c?.banner?.sizes || c?.video?.playerSize || [],
                                bidId: d.bid_id || (0,
                                r.getUniqueIdentifierStr)(),
                                bidderRequestId: i,
                                auctionId: n,
                                src: s,
                                metrics: a,
                                auctionsCount: h(o.code),
                                bidRequestsCount: f(o.code),
                                bidderRequestsCount: p(o.code, d.bidder),
                                bidderWinsCount: m(o.code, d.bidder),
                                deferBilling: !!o.deferBilling
                            })),
                            e
                        }
                        ), [])),
                        e
                    }
                    ), []).reduce(r.flatten, []).filter((e => "" !== e))
                }
                ), "getBids");
                const M = (0,
                d.A_)("sync", (function(e, t) {
                    let {getS2SBidders: n=L} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (null == t)
                        return e;
                    {
                        const r = n(t);
                        return e.filter((e => {
                            if (!r.has(e.bidder))
                                return !1;
                            if (null == e.s2sConfigName)
                                return !0;
                            const n = q(t);
                            return (Array.isArray(e.s2sConfigName) ? e.s2sConfigName : [e.s2sConfigName]).includes(n)
                        }
                        ))
                    }
                }
                ), "filterBidsForAdUnit");
                const G = (0,
                d.A_)("sync", ( (e, t) => e), "setupAdUnitMediaTypes");
                function L(e) {
                    (0,
                    r.isArray)(e) || (e = [e]);
                    const t = new Set([null]);
                    return e.filter((e => e && e.enabled)).flatMap((e => e.bidders)).forEach((e => t.add(e))),
                    t
                }
                const F = (0,
                d.A_)("sync", (function(e, t) {
                    let {getS2SBidders: n=L} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const i = n(t);
                    return (0,
                    r.getBidderCodes)(e).reduce(( (e, t) => (e[i.has(t) ? k.SERVER : k.CLIENT].push(t),
                    e)), {
                        [k.CLIENT]: [],
                        [k.SERVER]: []
                    })
                }
                ), "partitionBidders");
                function z(e, t) {
                    const n = _[e]
                      , r = n?.getSpec && n.getSpec();
                    if (r && r[t] && "function" == typeof r[t])
                        return [r, r[t]]
                }
                function H(e, t, n, i) {
                    try {
                        (0,
                        r.logInfo)(`Invoking ${e}.${t}`);
                        for (var o = arguments.length, s = new Array(o > 4 ? o - 4 : 0), d = 4; d < o; d++)
                            s[d - 4] = arguments[d];
                        a.$W.runWithBidder(e, i.bind(n, ...s))
                    } catch (n) {
                        (0,
                        r.logWarn)(`Error calling ${t} of ${e}`)
                    }
                }
                function V(e, t, n) {
                    if (n?.source !== E.RW.SRC) {
                        const r = z(e, t);
                        null != r && H(e, t, ...r, n)
                    }
                }
                D.makeBidRequests = (0,
                d.A_)("sync", (function(e, t, n, o, s) {
                    let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                      , l = arguments.length > 6 ? arguments[6] : void 0;
                    l = (0,
                    A.BO)(l),
                    v.emit(E.qY.BEFORE_REQUEST_BIDS, e),
                    (0,
                    i.nk)(e),
                    e.map((e => e.code)).filter(r.uniques).forEach(g),
                    e.forEach((e => {
                        (0,
                        r.isPlainObject)(e.mediaTypes) || (e.mediaTypes = {}),
                        e.bids = e.bids.filter((e => !e.bidder || U.isAllowed(C.uc, N(w.tW, e.bidder)))),
                        u(e.code, "requestsCounter")
                    }
                    )),
                    e = G(e, s);
                    let {[k.CLIENT]: f, [k.SERVER]: p} = F(e, $);
                    a.$W.getConfig("bidderSequence") === a.Ov && (f = (0,
                    r.shuffle)(f));
                    const m = (0,
                    b.EN)();
                    let h = [];
                    const I = d.global || {}
                      , T = d.bidder || {};
                    function S(e, t) {
                        const i = U.redact(null != t ? t : N(w.tW, e.bidderCode))
                          , o = Object.freeze(i.ortb2((0,
                        r.mergeDeep)({
                            source: {
                                tid: n
                            }
                        }, I, T[e.bidderCode])));
                        return e.ortb2 = o,
                        e.bids = e.bids.map((e => (e.ortb2 = o,
                        i.bidRequest(e)))),
                        e
                    }
                    $.forEach((i => {
                        const o = W(i);
                        if (i && i.enabled && U.isAllowed(C.uc, o)) {
                            let {adUnits: s, hasModuleBids: a} = function(e, t) {
                                let n = (0,
                                r.deepClone)(e)
                                  , i = !1;
                                return n.forEach((e => {
                                    const n = e.bids.filter((e => e.module === R && e.params?.configName === q(t)));
                                    1 === n.length ? (e.s2sBid = n[0],
                                    i = !0,
                                    e.ortb2Imp = (0,
                                    r.mergeDeep)({}, e.s2sBid.ortb2Imp, e.ortb2Imp)) : n.length > 1 && (0,
                                    r.logWarn)('Multiple "module" bids for the same s2s configuration; all will be ignored', n),
                                    e.bids = M(e.bids, t).map((e => (e.bid_id = (0,
                                    r.getUniqueIdentifierStr)(),
                                    e)))
                                }
                                )),
                                n = n.filter((e => 0 !== e.bids.length || null != e.s2sBid)),
                                {
                                    adUnits: n,
                                    hasModuleBids: i
                                }
                            }(e, i)
                              , d = (0,
                            r.generateUUID)();
                            (0 === p.length && a ? [null] : p).forEach((e => {
                                const a = (0,
                                r.getUniqueIdentifierStr)()
                                  , c = l.fork()
                                  , u = S({
                                    bidderCode: e,
                                    auctionId: n,
                                    bidderRequestId: a,
                                    uniquePbsTid: d,
                                    bids: P({
                                        bidderCode: e,
                                        auctionId: n,
                                        bidderRequestId: a,
                                        adUnits: (0,
                                        r.deepClone)(s),
                                        src: E.RW.SRC,
                                        metrics: c
                                    }),
                                    auctionStart: t,
                                    timeout: i.timeout,
                                    src: E.RW.SRC,
                                    refererInfo: m,
                                    metrics: c
                                }, o);
                                0 !== u.bids.length && h.push(u)
                            }
                            )),
                            s.forEach((e => {
                                let t = e.bids.filter((e => (0,
                                c.I6)(h, (t => (0,
                                c.I6)(t.bids, (t => t.bidId === e.bid_id))))));
                                e.bids = t
                            }
                            )),
                            h.forEach((e => {
                                void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = s.filter((e => e.bids.length > 0 || null != e.s2sBid)))
                            }
                            ))
                        }
                    }
                    ));
                    let O = function(e) {
                        let t = (0,
                        r.deepClone)(e);
                        return t.forEach((e => {
                            e.bids = M(e.bids, null)
                        }
                        )),
                        t = t.filter((e => 0 !== e.bids.length)),
                        t
                    }(e);
                    return f.forEach((e => {
                        const i = (0,
                        r.getUniqueIdentifierStr)()
                          , a = l.fork()
                          , d = S({
                            bidderCode: e,
                            auctionId: n,
                            bidderRequestId: i,
                            bids: P({
                                bidderCode: e,
                                auctionId: n,
                                bidderRequestId: i,
                                adUnits: (0,
                                r.deepClone)(O),
                                labels: s,
                                src: "client",
                                metrics: a
                            }),
                            auctionStart: t,
                            timeout: o,
                            refererInfo: m,
                            metrics: a
                        })
                          , c = _[e];
                        c || (0,
                        r.logError)(`Trying to make a request for bidder that does not exist: ${e}`),
                        c && d.bids && 0 !== d.bids.length && h.push(d)
                    }
                    )),
                    h.forEach((e => {
                        y.mW.getConsentData() && (e.gdprConsent = y.mW.getConsentData()),
                        y.t6.getConsentData() && (e.uspConsent = y.t6.getConsentData()),
                        y.ad.getConsentData() && (e.gppConsent = y.ad.getConsentData())
                    }
                    )),
                    h
                }
                ), "makeBidRequests"),
                D.callBids = function(e, t, n, i, o, d, c) {
                    let l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
                    if (!t.length)
                        return void (0,
                        r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
                    let[u,g] = t.reduce(( (e, t) => (e[Number(void 0 !== t.src && t.src === E.RW.SRC)].push(t),
                    e)), [[], []]);
                    var f = [];
                    g.forEach((e => {
                        for (var t = -1, n = 0; n < f.length; ++n)
                            if (e.uniquePbsTid === f[n].uniquePbsTid) {
                                t = n;
                                break
                            }
                        t <= -1 && f.push(e)
                    }
                    ));
                    let p = 0;
                    $.forEach((e => {
                        if (e && f[p] && L(e).has(f[p].bidderCode)) {
                            const t = (0,
                            s.g4)(d, o ? {
                                request: o.request.bind(null, "s2s"),
                                done: o.done
                            } : void 0);
                            let a = e.bidders;
                            const u = _[e.adapter];
                            let m = f[p].uniquePbsTid
                              , h = f[p].adUnitsS2SCopy
                              , b = g.filter((e => e.uniquePbsTid === m));
                            if (u) {
                                let o = {
                                    ad_units: h,
                                    s2sConfig: e,
                                    ortb2Fragments: l,
                                    requestBidsTimeout: d
                                };
                                if (o.ad_units.length) {
                                    let e = b.map((e => (e.start = (0,
                                    r.timestamp)(),
                                    function(t) {
                                        t || c(e.bidderRequestId),
                                        i.apply(e, arguments)
                                    }
                                    )));
                                    const s = (0,
                                    r.getBidderCodes)(o.ad_units).filter((e => a.includes(e)));
                                    (0,
                                    r.logMessage)(`CALLING S2S HEADER BIDDERS ==== ${s.length > 0 ? s.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only'}`),
                                    b.forEach((e => {
                                        v.emit(E.qY.BID_REQUESTED, {
                                            ...e,
                                            tid: e.auctionId
                                        })
                                    }
                                    )),
                                    u.callBids(o, g, n, (t => e.forEach((e => e(t)))), t)
                                }
                            } else
                                (0,
                                r.logError)("missing " + e.adapter);
                            p++
                        }
                    }
                    )),
                    u.forEach((e => {
                        e.start = (0,
                        r.timestamp)();
                        const t = _[e.bidderCode];
                        a.$W.runWithBidder(e.bidderCode, ( () => {
                            (0,
                            r.logMessage)("CALLING BIDDER"),
                            v.emit(E.qY.BID_REQUESTED, e)
                        }
                        ));
                        let l = (0,
                        s.g4)(d, o ? {
                            request: o.request.bind(null, e.bidderCode),
                            done: o.done
                        } : void 0);
                        const u = i.bind(e);
                        try {
                            a.$W.runWithBidder(e.bidderCode, t.callBids.bind(t, e, n, u, l, ( () => c(e.bidderRequestId)), a.$W.callbackWithBidder(e.bidderCode)))
                        } catch (t) {
                            (0,
                            r.logError)(`${e.bidderCode} Bid Adapter emitted an uncaught error when parsing their bidRequest`, {
                                e: t,
                                bidRequest: e
                            }),
                            u()
                        }
                    }
                    ))
                }
                ,
                D.videoAdapters = [],
                D.registerBidAdapter = function(e, t) {
                    let {supportedMediaTypes: n=[]} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    e && t ? "function" == typeof e.callBids ? (_[t] = e,
                    y.o2.register(w.tW, t, e.getSpec?.().gvlid),
                    (0,
                    c.mK)(n, "video") && D.videoAdapters.push(t),
                    (0,
                    c.mK)(n, "native") && i.mT.push(t)) : (0,
                    r.logError)("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : (0,
                    r.logError)("bidAdapter or bidderCode not specified")
                }
                ,
                D.aliasBidAdapter = function(e, t, n) {
                    if (void 0 === _[t]) {
                        let s = _[e];
                        if (void 0 === s) {
                            const n = [];
                            $.forEach((r => {
                                if (r.bidders && r.bidders.length) {
                                    const i = r && r.bidders;
                                    r && (0,
                                    c.mK)(i, t) ? j[t] = e : n.push(e)
                                }
                            }
                            )),
                            n.forEach((e => {
                                (0,
                                r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            }
                            ))
                        } else
                            try {
                                let a, d = function(e) {
                                    let t = [];
                                    return (0,
                                    c.mK)(D.videoAdapters, e) && t.push("video"),
                                    (0,
                                    c.mK)(i.mT, e) && t.push("native"),
                                    t
                                }(e);
                                if (s.constructor.prototype != Object.prototype)
                                    a = new s.constructor,
                                    a.setBidderCode(t);
                                else {
                                    const {useBaseGvlid: i=!1} = n || {};
                                    let d = s.getSpec();
                                    const c = i ? d.gvlid : n?.gvlid;
                                    null == c && null != d.gvlid && (0,
                                    r.logWarn)(`Alias '${t}' will NOT re-use the GVL ID of the original adapter ('${d.code}', gvlid: ${d.gvlid}). Functionality that requires TCF consent may not work as expected.`);
                                    let l = n && n.skipPbsAliasing;
                                    a = (0,
                                    o.xb)(Object.assign({}, d, {
                                        code: t,
                                        gvlid: c,
                                        skipPbsAliasing: l
                                    })),
                                    j[t] = e
                                }
                                D.registerBidAdapter(a, t, {
                                    supportedMediaTypes: d
                                })
                            } catch (t) {
                                (0,
                                r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                            }
                    } else
                        (0,
                        r.logMessage)('alias name "' + t + '" has been already specified.')
                }
                ,
                D.resolveAlias = function(e) {
                    let t, n = e;
                    for (; j[n] && (!t || !t.has(n)); )
                        n = j[n],
                        (t = t || new Set).add(n);
                    return n
                }
                ,
                D.registerAnalyticsAdapter = function(e) {
                    let {adapter: t, code: n, gvlid: i} = e;
                    t && n ? "function" == typeof t.enableAnalytics ? (t.code = n,
                    x[n] = {
                        adapter: t,
                        gvlid: i
                    },
                    y.o2.register(w.Tn, n, i)) : (0,
                    r.logError)(`Prebid Error: Analytics adaptor error for analytics "${n}"\n        analytics adapter must implement an enableAnalytics() function`) : (0,
                    r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
                }
                ,
                D.enableAnalytics = function(e) {
                    (0,
                    r.isArray)(e) || (e = [e]),
                    e.forEach((e => {
                        const t = x[e.provider];
                        t && t.adapter ? U.isAllowed(C.mo, N(w.Tn, e.provider, {
                            [S.TQ]: e
                        })) && t.adapter.enableAnalytics(e) : (0,
                        r.logError)(`Prebid Error: no analytics adapter found in registry for '${e.provider}'.`)
                    }
                    ))
                }
                ,
                D.getBidAdapter = function(e) {
                    return _[e]
                }
                ,
                D.getAnalyticsAdapter = function(e) {
                    return x[e]
                }
                ,
                D.callTimedOutBidders = function(e, t, n) {
                    t = t.map((t => (t.params = (0,
                    r.getUserConfiguredParams)(e, t.adUnitCode, t.bidder),
                    t.timeout = n,
                    t))),
                    t = (0,
                    r.groupBy)(t, "bidder"),
                    Object.keys(t).forEach((e => {
                        V(e, "onTimeout", t[e])
                    }
                    ))
                }
                ,
                D.callBidWonBidder = function(e, t, n) {
                    var i, o;
                    t.params = (0,
                    r.getUserConfiguredParams)(n, t.adUnitCode, t.bidder),
                    i = t.adUnitCode,
                    o = t.bidder,
                    u(i, "winsCounter", o),
                    V(e, "onBidWon", t)
                }
                ,
                D.triggerBilling = ( () => {
                    const e = new WeakSet;
                    return t => {
                        e.has(t) || (e.add(t),
                        ((0,
                        B.$T)(t.eventtrackers)[B.OA]?.[B.Ni] || []).forEach((e => r.internal.triggerPixel(e))),
                        V(t.bidder, "onBidBillable", t))
                    }
                }
                )(),
                D.callSetTargetingBidder = function(e, t) {
                    V(e, "onSetTargeting", t)
                }
                ,
                D.callBidViewableBidder = function(e, t) {
                    V(e, "onBidViewable", t)
                }
                ,
                D.callBidderError = function(e, t, n) {
                    V(e, "onBidderError", {
                        error: t,
                        bidderRequest: n
                    })
                }
                ,
                D.callAdRenderSucceededBidder = function(e, t) {
                    V(e, "onAdRenderSucceeded", t)
                }
                ,
                D.callDataDeletionRequest = (0,
                d.A_)("sync", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    const i = "onDataDeletionRequest";
                    Object.keys(_).filter((e => !j.hasOwnProperty(e))).forEach((e => {
                        const n = z(e, i);
                        if (null != n) {
                            const r = I.n.getBidsRequested().filter((t => function(e) {
                                const t = new Set;
                                for (; j.hasOwnProperty(e) && !t.has(e); )
                                    t.add(e),
                                    e = j[e];
                                return e
                            }(t.bidderCode) === e));
                            H(e, i, ...n, r, ...t)
                        }
                    }
                    )),
                    Object.entries(x).forEach((e => {
                        let[n,o] = e;
                        const s = o?.adapter?.[i];
                        if ("function" == typeof s)
                            try {
                                s.apply(o.adapter, t)
                            } catch (e) {
                                (0,
                                r.logError)(`error calling ${i} of ${n}`, e)
                            }
                    }
                    ))
                }
                ));
                const K = D
            }
            ,
            57377: (e, t, n) => {
                n.d(t, {
                    JN: () => k,
                    JS: () => D,
                    a$: () => T,
                    eI: () => C,
                    fn: () => U,
                    xb: () => S
                });
                var r = n(69759)
                  , i = n(11445)
                  , o = n(43272)
                  , s = n(93597)
                  , a = n(38230)
                  , d = n(12449)
                  , c = n(63895)
                  , l = n(78969)
                  , u = n(75023)
                  , g = n(15901)
                  , f = n(91069)
                  , p = n(16833)
                  , m = n(67314)
                  , h = n(12693)
                  , b = n(16894)
                  , y = n(95139)
                  , v = n(83441)
                  , E = n(45569)
                  , A = n(76811);
                const I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"]
                  , w = ["auctionId", "transactionId"];
                function T(e) {
                    const t = Array.isArray(e.supportedMediaTypes) ? {
                        supportedMediaTypes: e.supportedMediaTypes
                    } : void 0;
                    function n(e) {
                        const n = S(e);
                        i.Ay.registerBidAdapter(n, e.code, t)
                    }
                    n(e),
                    Array.isArray(e.aliases) && e.aliases.forEach((t => {
                        let r, o, s = t;
                        (0,
                        f.isPlainObject)(t) && (s = t.code,
                        r = t.gvlid,
                        o = t.skipPbsAliasing),
                        i.Ay.aliasRegistry[s] = e.code,
                        n(Object.assign({}, e, {
                            code: s,
                            gvlid: r,
                            skipPbsAliasing: o
                        }))
                    }
                    ))
                }
                const C = (0,
                f.memoize)((e => {
                    let {bidderCode: t} = e;
                    if ((0,
                    y.io)(A.VJ, (0,
                    v.s)(E.tW, t)))
                        return {
                            bidRequest: e => e,
                            bidderRequest: e => e
                        };
                    function n(e, t, n) {
                        return w.includes(t) ? null : Reflect.get(e, t, n)
                    }
                    function r(e, t) {
                        const n = new Proxy(e,t);
                        return Object.entries(e).filter((e => {
                            let[t,n] = e;
                            return "function" == typeof n
                        }
                        )).forEach((t => {
                            let[r,i] = t;
                            return n[r] = i.bind(e)
                        }
                        )),
                        n
                    }
                    const i = (0,
                    f.memoize)((e => r(e, {
                        get: n
                    })), (e => e.bidId));
                    return {
                        bidRequest: i,
                        bidderRequest: e => r(e, {
                            get: (t, r, o) => "bids" === r ? e.bids.map(i) : n(t, r, o)
                        })
                    }
                }
                ));
                function S(e) {
                    return Object.assign(new r.A(e.code), {
                        getSpec: function() {
                            return Object.freeze(Object.assign({}, e))
                        },
                        registerSyncs: t,
                        callBids: function(n, r, a, d, c, g) {
                            if (!Array.isArray(n.bids))
                                return;
                            const p = C(n)
                              , m = {};
                            const y = [];
                            function v() {
                                a(),
                                o.$W.runWithBidder(e.code, ( () => {
                                    u.emit(l.qY.BIDDER_DONE, n),
                                    t(y, n.gdprConsent, n.uspConsent, n.gppConsent)
                                }
                                ))
                            }
                            const E = D(n).measureTime("validate", ( () => n.bids.filter((t => function(t) {
                                if (!e.isBidRequestValid(t))
                                    return (0,
                                    f.logWarn)(`Invalid bid sent to bidder ${e.code}: ${JSON.stringify(t)}`),
                                    !1;
                                return !0
                            }(p.bidRequest(t))))));
                            if (0 === E.length)
                                return void v();
                            const A = {};
                            E.forEach((e => {
                                A[e.bidId] = e,
                                e.adUnitCode || (e.adUnitCode = e.placementCode)
                            }
                            )),
                            B(e, E, n, d, g, {
                                onRequest: e => u.emit(l.qY.BEFORE_BIDDER_HTTP, n, e),
                                onResponse: t => {
                                    c(e.code),
                                    y.push(t)
                                }
                                ,
                                onPaapi: e => {
                                    const t = A[e.bidId];
                                    t ? k(t, e) : (0,
                                    f.logWarn)("Received fledge auction configuration for an unknown bidId", e)
                                }
                                ,
                                onError: (t, r) => {
                                    r.timedOut || c(e.code),
                                    i.Ay.callBidderError(e.code, r, n),
                                    u.emit(l.qY.BIDDER_ERROR, {
                                        error: r,
                                        bidderRequest: n
                                    }),
                                    (0,
                                    f.logError)(`Server call for ${e.code} failed: ${t} ${r.status}. Continuing without bids.`, {
                                        bidRequests: E
                                    })
                                }
                                ,
                                onBid: t => {
                                    const n = A[t.requestId];
                                    if (n) {
                                        if (t.adapterCode = n.bidder,
                                        function(e, t) {
                                            let n = h.u.get(t, "allowAlternateBidderCodes") || !1
                                              , r = h.u.get(t, "allowedAlternateBidderCodes");
                                            if (e && t && t !== e && (r = (0,
                                            f.isArray)(r) ? r.map((e => e.trim().toLowerCase())).filter((e => !!e)).filter(f.uniques) : r,
                                            !n || (0,
                                            f.isArray)(r) && "*" !== r[0] && !r.includes(e)))
                                                return !0;
                                            return !1
                                        }(t.bidderCode, n.bidder))
                                            return (0,
                                            f.logWarn)(`${t.bidderCode} is not a registered partner or known bidder of ${n.bidder}, hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.`),
                                            void r.reject(n.adUnitCode, t, l.Tf.BIDDER_DISALLOWED);
                                        t.originalCpm = t.cpm,
                                        t.originalCurrency = t.currency,
                                        t.meta = t.meta || Object.assign({}, t[n.bidder]),
                                        t.deferBilling = n.deferBilling,
                                        t.deferRendering = t.deferBilling && (t.deferRendering ?? "function" != typeof e.onBidBillable);
                                        const i = Object.assign((0,
                                        s.O)(l.XQ.GOOD, n), t, (0,
                                        f.pick)(n, w));
                                        !function(e, t) {
                                            const n = (0,
                                            b.BO)(t.metrics);
                                            n.checkpoint("addBidResponse"),
                                            m[e] = !0,
                                            n.measureTime("addBidResponse.validate", ( () => U(e, t))) ? r(e, t) : r.reject(e, t, l.Tf.INVALID)
                                        }(n.adUnitCode, i)
                                    } else
                                        (0,
                                        f.logWarn)(`Bidder ${e.code} made bid for unknown request ID: ${t.requestId}. Ignoring.`),
                                        r.reject(null, t, l.Tf.INVALID_REQUEST_ID)
                                }
                                ,
                                onCompletion: v
                            })
                        }
                    });
                    function t(t, n, r, i) {
                        R(e, t, n, r, i)
                    }
                }
                const O = ["bids", "paapi"]
                  , B = (0,
                p.A_)("async", (function(e, t, n, r, i, o) {
                    let {onRequest: s, onResponse: a, onPaapi: d, onError: c, onBid: u, onCompletion: g} = o;
                    const p = D(n);
                    g = p.startTiming("total").stopBefore(g);
                    const m = C(n);
                    let b = p.measureTime("buildRequests", ( () => e.buildRequests(t.map(m.bidRequest), m.bidderRequest(n))));
                    if (!b || 0 === b.length)
                        return void g();
                    Array.isArray(b) || (b = [b]);
                    const I = (0,
                    f.delayExecution)(g, b.length);
                    b.forEach((t => {
                        const n = p.fork();
                        function o(e) {
                            null != e && (e.metrics = n.fork().renameWith()),
                            u(e)
                        }
                        const g = i((function(r, i) {
                            b();
                            try {
                                r = JSON.parse(r)
                            } catch (e) {}
                            r = {
                                body: r,
                                headers: {
                                    get: i.getResponseHeader.bind(i)
                                }
                            },
                            a(r);
                            try {
                                r = n.measureTime("interpretResponse", ( () => e.interpretResponse(r, t)))
                            } catch (t) {
                                return (0,
                                f.logError)(`Bidder ${e.code} failed to interpret the server's response. Continuing without bids`, null, t),
                                void I()
                            }
                            let s, c;
                            r && !Object.keys(r).some((e => !O.includes(e))) ? (s = r.bids,
                            c = r.paapi) : s = r,
                            (0,
                            f.isArray)(c) && c.forEach(d),
                            s && ((0,
                            f.isArray)(s) ? s.forEach(o) : o(s)),
                            I()
                        }
                        ))
                          , m = i((function(e, t) {
                            b(),
                            c(e, t),
                            I()
                        }
                        ));
                        s(t);
                        const b = n.startTiming("net");
                        function w(n) {
                            const r = t.options;
                            return Object.assign(n, r, {
                                browsingTopics: !(r?.hasOwnProperty("browsingTopics") && !r.browsingTopics) && ((h.u.get(e.code, "topicsHeader") ?? !0) && (0,
                                y.io)(A.DL, (0,
                                v.s)(E.tW, e.code)))
                            })
                        }
                        switch (t.method) {
                        case "GET":
                            r(`${t.url}${function(e) {
                                if (e)
                                    return `?${"object" == typeof e ? (0,
                                    f.parseQueryStringParameters)(e) : e}`;
                                return ""
                            }(t.data)}`, {
                                success: g,
                                error: m
                            }, void 0, w({
                                method: "GET",
                                withCredentials: !0
                            }));
                            break;
                        case "POST":
                            const n = t.options?.endpointCompression
                              , i = "TRUE" === (0,
                            f.getParameterByName)(l.M).toUpperCase() || (0,
                            f.debugTurnedOn)()
                              , o = e => {
                                let {url: t, payload: n} = e;
                                r(t, {
                                    success: g,
                                    error: m
                                }, n, w({
                                    method: "POST",
                                    contentType: "text/plain",
                                    withCredentials: !0
                                }))
                            }
                            ;
                            n && i && (0,
                            f.logWarn)(`Skipping GZIP compression for ${e.code} as debug mode is enabled`),
                            n && !i && (0,
                            f.isGzipCompressionSupported)() ? (0,
                            f.compressDataWithGZip)(t.data).then((e => {
                                const n = new URL(t.url,window.location.origin);
                                n.searchParams.has("gzip") || n.searchParams.set("gzip", "1"),
                                o({
                                    url: n.href,
                                    payload: e
                                })
                            }
                            )) : o({
                                url: t.url,
                                payload: "string" == typeof t.data ? t.data : JSON.stringify(t.data)
                            });
                            break;
                        default:
                            (0,
                            f.logWarn)(`Skipping invalid request from ${e.code}. Request type ${t.type} must be GET or POST`),
                            I()
                        }
                    }
                    ))
                }
                ), "processBidderRequests")
                  , R = (0,
                p.A_)("async", (function(e, t, n, r, s) {
                    const d = o.$W.getConfig("userSync.aliasSyncEnabled");
                    if (e.getUserSyncs && (d || !i.Ay.aliasRegistry[e.code])) {
                        let i = e.getUserSyncs({
                            iframeEnabled: a.zt.canBidderRegisterSync("iframe", e.code),
                            pixelEnabled: a.zt.canBidderRegisterSync("image", e.code)
                        }, t, n, r, s);
                        i && (Array.isArray(i) || (i = [i]),
                        i.forEach((t => {
                            a.zt.registerSync(t.type, e.code, t.url)
                        }
                        )),
                        a.zt.bidderDone(e.code))
                    }
                }
                ), "registerSyncs")
                  , k = (0,
                p.A_)("sync", ( (e, t) => {}
                ), "addPaapiConfig");
                function U(e, t) {
                    let {index: n=m.n.index} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    function r(e) {
                        return `Invalid bid from ${t.bidderCode}. Ignoring bid: ${e}`
                    }
                    return e ? t ? function() {
                        let e = Object.keys(t);
                        return I.every((n => (0,
                        g.mK)(e, n) && !(0,
                        g.mK)([void 0, null], t[n])))
                    }() ? "native" !== t.mediaType || (0,
                    d.Bm)(t, {
                        index: n
                    }) ? "video" !== t.mediaType || (0,
                    c.vk)(t, {
                        index: n
                    }) ? !("banner" === t.mediaType && !function(e, t) {
                        let {index: n=m.n.index} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                            return t.width = parseInt(t.width, 10),
                            t.height = parseInt(t.height, 10),
                            !0;
                        if (null != t.wratio && null != t.hratio)
                            return t.wratio = parseInt(t.wratio, 10),
                            t.hratio = parseInt(t.hratio, 10),
                            !0;
                        const r = n.getBidRequest(t)
                          , i = n.getMediaTypes(t)
                          , o = r && r.sizes || i && i.banner && i.banner.sizes
                          , s = (0,
                        f.parseSizesInput)(o);
                        if (1 === s.length) {
                            const [e,n] = s[0].split("x");
                            return t.width = parseInt(e, 10),
                            t.height = parseInt(n, 10),
                            !0
                        }
                        return !1
                    }(e, t, {
                        index: n
                    })) || ((0,
                    f.logError)(r("Banner bids require a width and height")),
                    !1) : ((0,
                    f.logError)(r("Video bid does not have required vastUrl or renderer property")),
                    !1) : ((0,
                    f.logError)(r("Native bid missing some required properties.")),
                    !1) : ((0,
                    f.logError)(r(`Bidder ${t.bidderCode} is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.`)),
                    !1) : ((0,
                    f.logWarn)(`Some adapter tried to add an undefined bid for ${e}.`),
                    !1) : ((0,
                    f.logWarn)("No adUnitCode was supplied to addBidResponse."),
                    !1)
                }
                function D(e) {
                    return (0,
                    b.BO)(e.metrics).renameWith((t => [`adapter.client.${t}`, `adapters.client.${e.bidderCode}.${t}`]))
                }
            }
            ,
            41580: (e, t, n) => {
                n.d(t, {
                    R: () => l
                });
                var r = n(76811)
                  , i = n(83441)
                  , o = n(95139)
                  , s = n(15901)
                  , a = n(91069);
                const d = new WeakMap
                  , c = ["debugging", "outstream", "aaxBlockmeter", "adagio", "adloox", "akamaidap", "arcspan", "airgrid", "browsi", "brandmetrics", "clean.io", "humansecurity", "confiant", "contxtful", "hadron", "mediafilter", "medianet", "azerionedge", "a1Media", "geoedge", "qortex", "dynamicAdBoost", "51Degrees", "symitridap", "wurfl", "nodalsAi", "anonymised", "optable", "justtag", "tncId", "ftrackId", "id5"];
                function l(e, t, n, l, u, g) {
                    if (!(0,
                    o.io)(r.pY, (0,
                    i.s)(t, n)))
                        return;
                    if (!n || !e)
                        return void (0,
                        a.logError)("cannot load external script without url and moduleCode");
                    if (!(0,
                    s.mK)(c, n))
                        return void (0,
                        a.logError)(`${n} not whitelisted for loading external JavaScript`);
                    u || (u = document);
                    const f = h(u, e);
                    if (f)
                        return l && "function" == typeof l && (f.loaded ? l() : f.callbacks.push(l)),
                        f.tag;
                    const p = d.get(u) || {}
                      , m = {
                        loaded: !1,
                        tag: null,
                        callbacks: []
                    };
                    return p[e] = m,
                    d.set(u, p),
                    l && "function" == typeof l && m.callbacks.push(l),
                    (0,
                    a.logWarn)(`module ${n} is loading external JavaScript`),
                    function(t, n, r, i) {
                        r || (r = document);
                        var o = r.createElement("script");
                        o.type = "text/javascript",
                        o.async = !0;
                        const s = h(r, e);
                        s && (s.tag = o);
                        o.readyState ? o.onreadystatechange = function() {
                            "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null,
                            n())
                        }
                        : o.onload = function() {
                            n()
                        }
                        ;
                        o.src = t,
                        i && (0,
                        a.setScriptAttributes)(o, i);
                        return (0,
                        a.insertElement)(o, r),
                        o
                    }(e, (function() {
                        m.loaded = !0;
                        try {
                            for (let e = 0; e < m.callbacks.length; e++)
                                m.callbacks[e]()
                        } catch (e) {
                            (0,
                            a.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                        }
                    }
                    ), u, g);
                    function h(e, t) {
                        const n = d.get(e);
                        return n && n[t] ? n[t] : null
                    }
                }
            }
            ,
            51692: (e, t, n) => {
                n.d(t, {
                    Q: () => r
                });
                const r = (0,
                n(16833).A_)("sync", ( () => {}
                ))
            }
            ,
            68044: (e, t, n) => {
                n.d(t, {
                    RD: () => f,
                    Rz: () => g,
                    g4: () => u,
                    hd: () => p
                });
                var r = n(43272)
                  , i = n(91069);
                const o = {
                    fetch: window.fetch.bind(window),
                    makeRequest: (e, t) => new Request(e,t),
                    timeout(e, t) {
                        const n = new AbortController;
                        let r = setTimeout(( () => {
                            n.abort(),
                            (0,
                            i.logError)(`Request timeout after ${e}ms`, t),
                            r = null
                        }
                        ), e);
                        return {
                            signal: n.signal,
                            done() {
                                r && clearTimeout(r)
                            }
                        }
                    }
                }
                  , s = "GET"
                  , a = "POST"
                  , d = "Content-Type";
                function c() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3
                      , {request: t, done: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = (t, n) => {
                        let i;
                        null == e || null != n?.signal || r.$W.getConfig("disableAjaxTimeout") || (i = o.timeout(e, t),
                        n = Object.assign({
                            signal: i.signal
                        }, n));
                        let s = o.fetch(t, n);
                        return null != i?.done && (s = s.finally(i.done)),
                        s
                    }
                    ;
                    return null == t && null == n || (i = (e => function(r, i) {
                        const o = new URL(null == r?.url ? r : r.url,document.location).origin;
                        let s = e(r, i);
                        return t && t(o),
                        n && (s = s.finally(( () => n(o)))),
                        s
                    }
                    )(i)),
                    i
                }
                function l(e, t) {
                    let {status: n, statusText: r="", headers: o, url: s} = e
                      , a = 0;
                    function c(e) {
                        if (0 === a)
                            try {
                                a = (new DOMParser).parseFromString(t, o?.get(d)?.split(";")?.[0])
                            } catch (t) {
                                a = null,
                                e && e(t)
                            }
                        return a
                    }
                    return {
                        readyState: XMLHttpRequest.DONE,
                        status: n,
                        statusText: r,
                        responseText: t,
                        response: t,
                        responseType: "",
                        responseURL: s,
                        get responseXML() {
                            return c(i.logError)
                        },
                        getResponseHeader: e => o?.has(e) ? o.get(e) : null,
                        toJSON() {
                            return Object.assign({
                                responseXML: c()
                            }, this)
                        },
                        timedOut: !1
                    }
                }
                function u() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3
                      , {request: t, done: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const r = c(e, {
                        request: t,
                        done: n
                    });
                    return function(e, t, n) {
                        !function(e, t) {
                            const {success: n, error: r} = "object" == typeof t && null != t ? t : {
                                success: "function" == typeof t ? t : () => null,
                                error: (e, t) => (0,
                                i.logError)("Network error", e, t)
                            };
                            e.then((e => e.text().then((t => [e, t])))).then((e => {
                                let[t,i] = e;
                                const o = l(t, i);
                                t.ok || 304 === t.status ? n(i, o) : r(t.statusText, o)
                            }
                            ), (e => r("", Object.assign(l({
                                status: 0
                            }, ""), {
                                reason: e,
                                timedOut: "AbortError" === e?.name
                            }))))
                        }(r(function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            const r = n.method || (t ? a : s);
                            if (r === s && t) {
                                const r = (0,
                                i.parseUrl)(e, n);
                                Object.assign(r.search, t),
                                e = (0,
                                i.buildUrl)(r)
                            }
                            const c = new Headers(n.customHeaders);
                            c.set(d, n.contentType || "text/plain");
                            const l = {
                                method: r,
                                headers: c
                            };
                            return r !== s && t && (l.body = t),
                            n.withCredentials && (l.credentials = "include"),
                            isSecureContext && ["browsingTopics", "adAuctionHeaders"].forEach((e => {
                                n[e] && (l[e] = !0)
                            }
                            )),
                            n.keepalive && (l.keepalive = !0),
                            o.makeRequest(e, l)
                        }(e, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {})), t)
                    }
                }
                function g(e, t) {
                    return !(!window.navigator || !window.navigator.sendBeacon) && window.navigator.sendBeacon(e, t)
                }
                const f = u()
                  , p = c()
            }
            ,
            81657: (e, t, n) => {
                n.d(t, {
                    AA: () => O,
                    BU: () => P,
                    HN: () => J,
                    UZ: () => B,
                    ZV: () => L,
                    mO: () => G,
                    mX: () => j,
                    sR: () => $,
                    v8: () => W,
                    w1: () => N
                });
                var r = n(91069)
                  , i = n(86833)
                  , o = n(12449)
                  , s = n(68693)
                  , a = n(95789)
                  , d = n(43272)
                  , c = n(38230)
                  , l = n(16833)
                  , u = n(15901)
                  , g = n(63895)
                  , f = n(71371)
                  , p = n(67314)
                  , m = n(12693)
                  , h = n(75023)
                  , b = n(11445)
                  , y = n(78969)
                  , v = n(25555)
                  , E = n(16894)
                  , A = n(57176)
                  , I = n(7873)
                  , w = n(76853)
                  , T = n(27863);
                const {syncUsers: C} = c.zt
                  , S = "started"
                  , O = "inProgress"
                  , B = "completed";
                h.on(y.qY.BID_ADJUSTMENT, (function(e) {
                    !function(e) {
                        let t = (0,
                        A.y)(e.cpm, e);
                        t >= 0 && (e.cpm = t)
                    }(e)
                }
                ));
                const R = 4
                  , k = {}
                  , U = {}
                  , D = []
                  , _ = (0,
                I.m)();
                function j(e) {
                    let {adUnits: t, adUnitCodes: n, callback: c, cbTimeout: l, labels: m, auctionId: A, ortb2Fragments: I, metrics: j} = e;
                    j = (0,
                    E.BO)(j);
                    const G = t
                      , L = m
                      , F = n
                      , z = A || (0,
                    r.generateUUID)()
                      , H = l
                      , V = new Set
                      , K = (0,
                    v.v6)()
                      , J = (0,
                    v.v6)();
                    let Y, Q, Z, ee, te = [], ne = c, re = [], ie = (0,
                    w.H)({
                        startTime: e => e.responseTimestamp,
                        ttl: e => null == (0,
                        T.S9)() ? null : 1e3 * Math.max((0,
                        T.S9)(), e.ttl)
                    }), oe = [], se = [], ae = [];
                    function de() {
                        return {
                            auctionId: z,
                            timestamp: Y,
                            auctionEnd: Q,
                            auctionStatus: ee,
                            adUnits: G,
                            adUnitCodes: F,
                            labels: L,
                            bidderRequests: re,
                            noBids: oe,
                            bidsReceived: ie.toArray(),
                            bidsRejected: te,
                            winningBids: se,
                            timeout: H,
                            metrics: j,
                            seatNonBids: ae
                        }
                    }
                    function ce(e) {
                        if (e ? h.emit(y.qY.AUCTION_TIMEOUT, de()) : clearTimeout(Z),
                        void 0 === Q) {
                            let n = [];
                            e && ((0,
                            r.logMessage)(`Auction ${z} timedOut`),
                            n = re.filter((e => !V.has(e.bidderRequestId))).flatMap((e => e.bids)),
                            n.length && h.emit(y.qY.BID_TIMEOUT, n)),
                            ee = B,
                            Q = Date.now(),
                            j.checkpoint("auctionEnd"),
                            j.timeBetween("requestBids", "auctionEnd", "requestBids.total"),
                            j.timeBetween("callBids", "auctionEnd", "requestBids.callBids"),
                            K.resolve(),
                            h.emit(y.qY.AUCTION_END, de()),
                            q(G, (function() {
                                try {
                                    if (null != ne) {
                                        const t = ie.toArray().filter((e => F.includes(e.adUnitCode))).reduce(X, {});
                                        ne.apply(_, [t, e, z]),
                                        ne = null
                                    }
                                } catch (e) {
                                    (0,
                                    r.logError)("Error executing bidsBackHandler", null, e)
                                } finally {
                                    n.length && b.Ay.callTimedOutBidders(t, n, H);
                                    let e = d.$W.getConfig("userSync") || {};
                                    e.enableOverride || C(e.syncDelay)
                                }
                            }
                            ))
                        }
                    }
                    function le() {
                        d.$W.resetBidder(),
                        (0,
                        r.logInfo)(`Bids Received for Auction with id: ${z}`, ie.toArray()),
                        ee = B,
                        ce(!1)
                    }
                    function ue(e) {
                        V.add(e)
                    }
                    function ge(e) {
                        e.forEach((e => {
                            var t;
                            t = e,
                            re = re.concat(t)
                        }
                        ));
                        let t = {}
                          , n = {
                            bidRequests: e,
                            run: () => {
                                Z = setTimeout(( () => ce(!0)), H),
                                ee = O,
                                h.emit(y.qY.AUCTION_INIT, de());
                                let n = function(e, t) {
                                    let {index: n=p.n.index} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                                      , c = 0
                                      , l = !1
                                      , m = new Set
                                      , b = {};
                                    function E() {
                                        c--,
                                        l && 0 === c && e()
                                    }
                                    function A(e, t, n) {
                                        return b[t.requestId] = !0,
                                        function(e, t) {
                                            let {index: n=p.n.index} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                            const i = n.getBidderRequest(e)
                                              , o = n.getAdUnit(e)
                                              , s = i && i.start || e.requestTimestamp;
                                            Object.assign(e, {
                                                responseTimestamp: e.responseTimestamp || (0,
                                                r.timestamp)(),
                                                requestTimestamp: e.requestTimestamp || s,
                                                cpm: parseFloat(e.cpm) || 0,
                                                bidder: e.bidder || e.bidderCode,
                                                adUnitCode: t
                                            }),
                                            null != o?.ttlBuffer && (e.ttlBuffer = o.ttlBuffer);
                                            e.timeToRespond = e.responseTimestamp - e.requestTimestamp
                                        }(t, e),
                                        c++,
                                        n(E)
                                    }
                                    function I(e, c) {
                                        A(e, c, (e => {
                                            let l = function(e) {
                                                let {index: t=p.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                h.emit(y.qY.BID_ADJUSTMENT, e);
                                                const n = t.getAdUnit(e);
                                                e.instl = 1 === n?.ortb2Imp?.instl;
                                                const r = t.getBidRequest(e)?.renderer || n.renderer
                                                  , o = e.mediaType
                                                  , s = t.getMediaTypes(e)
                                                  , c = s && s[o];
                                                var l = c && c.renderer
                                                  , u = null;
                                                !l || !l.render || !0 === l.backupOnly && e.renderer ? !r || !r.render || !0 === r.backupOnly && e.renderer || (u = r) : u = l;
                                                u && (e.renderer = a.A4.install({
                                                    url: u.url,
                                                    config: u.options,
                                                    renderNow: null == u.url
                                                }),
                                                e.renderer.setRender(u.render));
                                                const g = M(e.mediaType, s, d.$W.getConfig("mediaTypePriceGranularity"))
                                                  , f = (0,
                                                i.j)(e.cpm, "object" == typeof g ? g : d.$W.getConfig("customPriceBucket"), d.$W.getConfig("currency.granularityMultiplier"));
                                                return e.pbLg = f.low,
                                                e.pbMg = f.med,
                                                e.pbHg = f.high,
                                                e.pbAg = f.auto,
                                                e.pbDg = f.dense,
                                                e.pbCg = f.custom,
                                                e
                                            }(c);
                                            h.emit(y.qY.BID_ACCEPTED, l),
                                            l.mediaType === f.G_ ? function(e, t, n) {
                                                let {index: i=p.n.index} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                                                  , o = !0;
                                                const a = i.getMediaTypes({
                                                    requestId: t.originalRequestId || t.requestId,
                                                    adUnitId: t.adUnitId
                                                })?.video
                                                  , c = a && a?.context
                                                  , l = a && a?.useCacheKey
                                                  , {useLocal: u, url: f, ignoreBidderCacheKey: m} = d.$W.getConfig("cache") || {};
                                                u ? (0,
                                                s.Sb)(t) : f && (l || c !== g.H6) && (!t.videoCacheKey || m ? (o = !1,
                                                P(e, t, n, a)) : t.vastUrl || ((0,
                                                r.logError)("videoCacheKey specified but not required vastUrl for video bid"),
                                                o = !1));
                                                o && (W(e, t),
                                                n())
                                            }(t, l, e) : ((0,
                                            o.l6)(l) && (0,
                                            o.gs)(l, n.getAdUnit(l)),
                                            W(t, l),
                                            e())
                                        }
                                        ))
                                    }
                                    function w(e, n, i) {
                                        return A(e, n, (e => {
                                            n.rejectionReason = i,
                                            (0,
                                            r.logWarn)(`Bid from ${n.bidder || "unknown bidder"} was rejected: ${i}`, n),
                                            h.emit(y.qY.BID_REJECTED, n),
                                            t.addBidRejected(n),
                                            e()
                                        }
                                        ))
                                    }
                                    function T() {
                                        let n = this
                                          , i = t.getBidRequests();
                                        const o = d.$W.getConfig("auctionOptions");
                                        if (m.add(n),
                                        o && !(0,
                                        r.isEmpty)(o)) {
                                            const e = o.secondaryBidders;
                                            e && !i.every((t => (0,
                                            u.mK)(e, t.bidderCode))) && (i = i.filter((t => !(0,
                                            u.mK)(e, t.bidderCode))))
                                        }
                                        l = i.every((e => m.has(e))),
                                        n.bids.forEach((e => {
                                            b[e.bidId] || (t.addNoBid(e),
                                            h.emit(y.qY.NO_BID, e))
                                        }
                                        )),
                                        l && 0 === c && e()
                                    }
                                    return {
                                        addBidResponse: function() {
                                            function e(e, t) {
                                                $.call({
                                                    dispatch: I
                                                }, e, t, ( () => {
                                                    let n = !1;
                                                    return r => {
                                                        n || (w(e, t, r),
                                                        n = !0)
                                                    }
                                                }
                                                )())
                                            }
                                            return e.reject = w,
                                            e
                                        }(),
                                        adapterDone: function() {
                                            x(v.U9.resolve()).finally(( () => T.call(this)))
                                        }
                                    }
                                }(le, this);
                                b.Ay.callBids(G, e, n.addBidResponse, n.adapterDone, {
                                    request(e, n) {
                                        l(k, n),
                                        l(t, e),
                                        U[e] || (U[e] = {
                                            SRA: !0,
                                            origin: n
                                        }),
                                        t[e] > 1 && (U[e].SRA = !1)
                                    },
                                    done(e) {
                                        k[e]--,
                                        D[0] && c(D[0]) && D.shift()
                                    }
                                }, H, ue, I),
                                J.resolve()
                            }
                        };
                        function c(e) {
                            let t = !0
                              , n = d.$W.getConfig("maxRequestsPerOrigin") || R;
                            return e.bidRequests.some((e => {
                                let r = 1
                                  , i = void 0 !== e.src && e.src === y.RW.SRC ? "s2s" : e.bidderCode;
                                return U[i] && (!1 === U[i].SRA && (r = Math.min(e.bids.length, n)),
                                k[U[i].origin] + r > n && (t = !1)),
                                !t
                            }
                            )),
                            t && e.run(),
                            t
                        }
                        function l(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++
                        }
                        c(n) || ((0,
                        r.logWarn)("queueing auction due to limited endpoint capacity"),
                        D.push(n))
                    }
                    return (0,
                    T.lc)(( () => ie.refresh())),
                    h.on(y.qY.SEAT_NON_BID, (e => {
                        var t;
                        e.auctionId === z && (t = e.seatnonbid,
                        ae = ae.concat(t))
                    }
                    )),
                    {
                        addBidReceived: function(e) {
                            ie.add(e)
                        },
                        addBidRejected: function(e) {
                            te = te.concat(e)
                        },
                        addNoBid: function(e) {
                            oe = oe.concat(e)
                        },
                        callBids: function() {
                            ee = S,
                            Y = Date.now();
                            let e = j.measureTime("requestBids.makeRequests", ( () => b.Ay.makeBidRequests(G, Y, z, H, L, I, j)));
                            (0,
                            r.logInfo)(`Bids Requested for Auction with id: ${z}`, e),
                            j.checkpoint("callBids"),
                            e.length < 1 ? ((0,
                            r.logWarn)("No valid bid requests returned for auction"),
                            le()) : N.call({
                                dispatch: ge,
                                context: this
                            }, e)
                        },
                        addWinningBid: function(e) {
                            se = se.concat(e),
                            b.Ay.callBidWonBidder(e.adapterCode || e.bidder, e, t),
                            e.deferBilling || b.Ay.triggerBilling(e)
                        },
                        setBidTargeting: function(e) {
                            b.Ay.callSetTargetingBidder(e.adapterCode || e.bidder, e)
                        },
                        getWinningBids: () => se,
                        getAuctionStart: () => Y,
                        getAuctionEnd: () => Q,
                        getTimeout: () => H,
                        getAuctionId: () => z,
                        getAuctionStatus: () => ee,
                        getAdUnits: () => G,
                        getAdUnitCodes: () => F,
                        getBidRequests: () => re,
                        getBidsReceived: () => ie.toArray(),
                        getNoBids: () => oe,
                        getNonBids: () => ae,
                        getFPD: () => I,
                        getMetrics: () => j,
                        end: K.promise,
                        requestsDone: J.promise,
                        getProperties: de
                    }
                }
                const $ = (0,
                l.u2)((0,
                l.A_)("async", (function(e, t, n) {
                    !function(e) {
                        const t = d.$W.getConfig("maxBid");
                        return !t || !e.cpm || t >= Number(e.cpm)
                    }(t) ? n(y.Tf.PRICE_TOO_HIGH) : this.dispatch.call(null, e, t)
                }
                ), "addBidResponse"))
                  , x = (0,
                l.A_)("sync", (e => e), "responsesReady")
                  , N = (0,
                l.A_)("sync", (function(e) {
                    this.dispatch.call(this.context, e)
                }
                ), "addBidderRequests")
                  , q = (0,
                l.A_)("async", (function(e, t) {
                    t && t()
                }
                ), "bidsBackCallback");
                function W(e, t) {
                    !function(e) {
                        let t;
                        const n = !0 === m.u.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
                        e.bidderCode && (n || e.dealId) && (t = function(e, t) {
                            let {index: n=p.n.index} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (!t)
                                return {};
                            const r = n.getBidRequest(t);
                            var i = {};
                            const s = J(t.mediaType, e);
                            Y(i, s, t, r),
                            e && m.u.getOwn(e, y.iD.ADSERVER_TARGETING) && (Y(i, m.u.ownSettingsFor(e), t, r),
                            t.sendStandardTargeting = m.u.get(e, "sendStandardTargeting"));
                            t.native && (i = Object.assign({}, i, (0,
                            o.Zj)(t)));
                            return i
                        }(e.bidderCode, e));
                        e.adserverTargeting = Object.assign(e.adserverTargeting || {}, t)
                    }(t),
                    (0,
                    E.BO)(t.metrics).timeSince("addBidResponse", "addBidResponse.total"),
                    e.addBidReceived(t),
                    h.emit(y.qY.BID_RESPONSE, t)
                }
                const P = (0,
                l.A_)("async", (function(e, t, n, r) {
                    (0,
                    s.X5)(e, t, n)
                }
                ), "callPrebidCache");
                function M(e, t, n) {
                    if (e && n) {
                        if (e === f.G_) {
                            const e = t?.[f.G_]?.context ?? "instream";
                            if (n[`${f.G_}-${e}`])
                                return n[`${f.G_}-${e}`]
                        }
                        return n[e]
                    }
                }
                const G = function(e) {
                    let {index: t=p.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = M(e.mediaType, t.getMediaTypes(e), d.$W.getConfig("mediaTypePriceGranularity"));
                    return "string" == typeof e.mediaType && n ? "string" == typeof n ? n : "custom" : d.$W.getConfig("priceGranularity")
                }
                  , L = e => t => {
                    const n = e || G(t);
                    return n === y.UE.AUTO ? t.pbAg : n === y.UE.DENSE ? t.pbDg : n === y.UE.LOW ? t.pbLg : n === y.UE.MEDIUM ? t.pbMg : n === y.UE.HIGH ? t.pbHg : n === y.UE.CUSTOM ? t.pbCg : void 0
                }
                  , F = () => e => e.creativeId ? e.creativeId : ""
                  , z = () => e => e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? [e.meta.advertiserDomains].flat()[0] : ""
                  , H = () => e => e.meta && (e.meta.networkId || e.meta.networkName) ? e?.meta?.networkName || e?.meta?.networkId : ""
                  , V = () => e => e.meta && e.meta.primaryCatId ? e.meta.primaryCatId : "";
                function K(e, t) {
                    return {
                        key: e,
                        val: "function" == typeof t ? function(e, n) {
                            return t(e, n)
                        }
                        : function(e) {
                            return e[t]
                        }
                    }
                }
                function J(e, t) {
                    const n = Object.assign({}, m.u.settingsFor(null));
                    if (n[y.iD.ADSERVER_TARGETING] || (n[y.iD.ADSERVER_TARGETING] = [K(y.xS.BIDDER, "bidderCode"), K(y.xS.AD_ID, "adId"), K(y.xS.PRICE_BUCKET, L()), K(y.xS.SIZE, "size"), K(y.xS.DEAL, "dealId"), K(y.xS.SOURCE, "source"), K(y.xS.FORMAT, "mediaType"), K(y.xS.ADOMAIN, z()), K(y.xS.ACAT, V()), K(y.xS.DSP, H()), K(y.xS.CRID, F())]),
                    "video" === e) {
                        const e = n[y.iD.ADSERVER_TARGETING].slice();
                        if (n[y.iD.ADSERVER_TARGETING] = e,
                        [y.xS.UUID, y.xS.CACHE_ID].forEach((t => {
                            void 0 === (0,
                            u.I6)(e, (e => e.key === t)) && e.push(K(t, "videoCacheKey"))
                        }
                        )),
                        d.$W.getConfig("cache.url") && (!t || !1 !== m.u.get(t, "sendStandardTargeting"))) {
                            const t = (0,
                            r.parseUrl)(d.$W.getConfig("cache.url"));
                            void 0 === (0,
                            u.I6)(e, (e => e.key === y.xS.CACHE_HOST)) && e.push(K(y.xS.CACHE_HOST, (function(e) {
                                return e?.adserverTargeting?.[y.xS.CACHE_HOST] || t.hostname
                            }
                            )))
                        }
                    }
                    return n
                }
                function Y(e, t, n, i) {
                    var o = t[y.iD.ADSERVER_TARGETING];
                    return n.size = n.getSize(),
                    (o || []).forEach((function(o) {
                        var s = o.key
                          , a = o.val;
                        if (e[s] && (0,
                        r.logWarn)("The key: " + s + " is being overwritten"),
                        (0,
                        r.isFn)(a))
                            try {
                                a = a(n, i)
                            } catch (e) {
                                (0,
                                r.logError)("bidmanager", "ERROR", e)
                            }
                        (void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && s !== y.xS.DEAL && s !== y.xS.ACAT && s !== y.xS.DSP && s !== y.xS.CRID || !(0,
                        r.isEmptyStr)(a) && null != a ? e[s] = a : (0,
                        r.logInfo)("suppressing empty key '" + s + "' from adserver targeting")
                    }
                    )),
                    e
                }
                function X(e, t) {
                    return e[t.adUnitCode] || (e[t.adUnitCode] = {
                        bids: []
                    }),
                    e[t.adUnitCode].bids.push(t),
                    e
                }
            }
            ,
            67314: (e, t, n) => {
                n.d(t, {
                    n: () => l
                });
                var r = n(91069)
                  , i = n(81657);
                function o(e) {
                    Object.assign(this, {
                        getAuction(t) {
                            let {auctionId: n} = t;
                            if (null != n)
                                return e().find((e => e.getAuctionId() === n))
                        },
                        getAdUnit(t) {
                            let {adUnitId: n} = t;
                            if (null != n)
                                return e().flatMap((e => e.getAdUnits())).find((e => e.adUnitId === n))
                        },
                        getMediaTypes(e) {
                            let {adUnitId: t, requestId: n} = e;
                            if (null != n) {
                                const e = this.getBidRequest({
                                    requestId: n
                                });
                                if (null != e && (null == t || e.adUnitId === t))
                                    return e.mediaTypes
                            } else if (null != t) {
                                const e = this.getAdUnit({
                                    adUnitId: t
                                });
                                if (null != e)
                                    return e.mediaTypes
                            }
                        },
                        getBidderRequest(t) {
                            let {requestId: n, bidderRequestId: r} = t;
                            if (null != n || null != r) {
                                let t = e().flatMap((e => e.getBidRequests()));
                                return null != r && (t = t.filter((e => e.bidderRequestId === r))),
                                null == n ? t[0] : t.find((e => e.bids && null != e.bids.find((e => e.bidId === n))))
                            }
                        },
                        getBidRequest(t) {
                            let {requestId: n} = t;
                            if (null != n)
                                return e().flatMap((e => e.getBidRequests())).flatMap((e => e.bids)).find((e => e && e.bidId === n))
                        },
                        getOrtb2(e) {
                            return this.getBidderRequest(e)?.ortb2 || this.getAuction(e)?.getFPD()?.global?.ortb2
                        }
                    })
                }
                var s = n(78969)
                  , a = n(16894)
                  , d = n(76853)
                  , c = n(27863);
                const l = function() {
                    const e = (0,
                    d.H)({
                        startTime: e => e.end.then(( () => e.getAuctionEnd())),
                        ttl: e => null == (0,
                        c.S9)() ? null : e.end.then(( () => 1e3 * Math.max((0,
                        c.S9)(), ...e.getBidsReceived().map((e => e.ttl)))))
                    });
                    (0,
                    c.lc)(( () => e.refresh()));
                    const t = {
                        onExpiry: e.onExpiry
                    };
                    function n(t) {
                        for (const n of e)
                            if (n.getAuctionId() === t)
                                return n
                    }
                    function l() {
                        return e.toArray().flatMap((e => e.getBidsReceived()))
                    }
                    return t.addWinningBid = function(e) {
                        const t = (0,
                        a.BO)(e.metrics);
                        t.checkpoint("bidWon"),
                        t.timeBetween("auctionEnd", "bidWon", "adserver.pending"),
                        t.timeBetween("requestBids", "bidWon", "adserver.e2e");
                        const i = n(e.auctionId);
                        i ? i.addWinningBid(e) : (0,
                        r.logWarn)("Auction not found when adding winning bid")
                    }
                    ,
                    Object.entries({
                        getAllWinningBids: {
                            name: "getWinningBids"
                        },
                        getBidsRequested: {
                            name: "getBidRequests"
                        },
                        getNoBids: {},
                        getAdUnits: {},
                        getBidsReceived: {
                            pre: e => e.getAuctionStatus() === i.UZ
                        },
                        getAdUnitCodes: {
                            post: r.uniques
                        }
                    }).forEach((n => {
                        let[r,{name: i=r, pre: o, post: s}] = n;
                        const a = null == o ? e => e[i]() : e => o(e) ? e[i]() : []
                          , d = null == s ? e => e : e => e.filter(s);
                        t[r] = () => d(e.toArray().flatMap(a))
                    }
                    )),
                    t.getAllBidsForAdUnitCode = function(e) {
                        return l().filter((t => t && t.adUnitCode === e))
                    }
                    ,
                    t.createAuction = function(t) {
                        const n = (0,
                        i.mX)(t);
                        return function(t) {
                            e.add(t)
                        }(n),
                        n
                    }
                    ,
                    t.findBidByAdId = function(e) {
                        return l().find((t => t.adId === e))
                    }
                    ,
                    t.getStandardBidderAdServerTargeting = function() {
                        return (0,
                        i.HN)()[s.iD.ADSERVER_TARGETING]
                    }
                    ,
                    t.setStatusForBids = function(e, r) {
                        let i = t.findBidByAdId(e);
                        if (i && (i.status = r),
                        i && r === s.tl.BID_TARGETING_SET) {
                            const e = n(i.auctionId);
                            e && e.setBidTargeting(i)
                        }
                    }
                    ,
                    t.getLastAuctionId = function() {
                        const t = e.toArray();
                        return t.length && t[t.length - 1].getAuctionId()
                    }
                    ,
                    t.clearAllAuctions = function() {
                        e.clear()
                    }
                    ,
                    t.index = new o(( () => e.toArray())),
                    t
                }()
            }
            ,
            27863: (e, t, n) => {
                n.d(t, {
                    S9: () => l,
                    cT: () => c,
                    lc: () => u
                });
                var r = n(43272)
                  , i = n(91069);
                const o = "minBidCacheTTL";
                let s = 1
                  , a = null;
                const d = [];
                function c(e) {
                    return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : s)
                }
                function l() {
                    return a
                }
                function u(e) {
                    d.push(e)
                }
                r.$W.getConfig("ttlBuffer", (e => {
                    "number" == typeof e.ttlBuffer ? s = e.ttlBuffer : (0,
                    i.logError)("Invalid value for ttlBuffer", e.ttlBuffer)
                }
                )),
                r.$W.getConfig(o, (e => {
                    const t = a;
                    a = e?.[o],
                    a = "number" == typeof a ? a : null,
                    t !== a && d.forEach((e => e(a)))
                }
                ))
            }
            ,
            12693: (e, t, n) => {
                n.d(t, {
                    u: () => a
                });
                var r = n(70433)
                  , i = n(91069)
                  , o = n(7873)
                  , s = n(78969);
                const a = new class {
                    constructor(e, t) {
                        this.getSettings = e,
                        this.defaultScope = t
                    }
                    get(e, t) {
                        let n = this.getOwn(e, t);
                        return void 0 === n && (n = this.getOwn(null, t)),
                        n
                    }
                    getOwn(e, t) {
                        return e = this.#e(e),
                        (0,
                        r.A)(this.getSettings(), `${e}.${t}`)
                    }
                    getScopes() {
                        return Object.keys(this.getSettings()).filter((e => e !== this.defaultScope))
                    }
                    settingsFor(e) {
                        return (0,
                        i.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
                    }
                    ownSettingsFor(e) {
                        return e = this.#e(e),
                        this.getSettings()[e] || {}
                    }
                    #e(e) {
                        return null == e ? this.defaultScope : e
                    }
                }
                (( () => (0,
                o.m)().bidderSettings || {}),s.iD.BD_SETTING_STANDARD)
            }
            ,
            93597: (e, t, n) => {
                n.d(t, {
                    O: () => o
                });
                var r = n(91069);
                function i(e) {
                    let {src: t="client", bidder: n="", bidId: i, transactionId: o, adUnitId: s, auctionId: a} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var d = t
                      , c = e || 0;
                    Object.assign(this, {
                        bidderCode: n,
                        width: 0,
                        height: 0,
                        statusMessage: function() {
                            switch (c) {
                            case 0:
                                return "Pending";
                            case 1:
                                return "Bid available";
                            case 2:
                                return "Bid returned empty or error response";
                            case 3:
                                return "Bid timed out"
                            }
                        }(),
                        adId: (0,
                        r.getUniqueIdentifierStr)(),
                        requestId: i,
                        transactionId: o,
                        adUnitId: s,
                        auctionId: a,
                        mediaType: "banner",
                        source: d
                    }),
                    this.getStatusCode = function() {
                        return c
                    }
                    ,
                    this.getSize = function() {
                        return this.width + "x" + this.height
                    }
                    ,
                    this.getIdentifiers = function() {
                        return {
                            src: this.source,
                            bidder: this.bidderCode,
                            bidId: this.requestId,
                            transactionId: this.transactionId,
                            adUnitId: this.adUnitId,
                            auctionId: this.auctionId
                        }
                    }
                }
                function o(e, t) {
                    return new i(e,t)
                }
            }
            ,
            43272: (e, t, n) => {
                n.d(t, {
                    $W: () => m,
                    Ov: () => l
                });
                var r = n(86833)
                  , i = n(15901)
                  , o = n(91069)
                  , s = n(70433)
                  , a = n(78969);
                const d = "TRUE" === (0,
                o.getParameterByName)(a.M).toUpperCase()
                  , c = {}
                  , l = "random"
                  , u = {};
                u[l] = !0,
                u.fixed = !0;
                const g = l
                  , f = {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                };
                function p(e) {
                    const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? {
                        priceGranularity: f.MEDIUM,
                        customPriceBucket: {},
                        mediaTypePriceGranularity: {},
                        bidderSequence: g,
                        auctionOptions: {}
                    } : {};
                    function n(e) {
                        return t[e]
                    }
                    function s(n, r) {
                        t.hasOwnProperty(n) || Object.defineProperty(e, n, {
                            enumerable: !0
                        }),
                        t[n] = r
                    }
                    const a = {
                        publisherDomain: {
                            set(e) {
                                null != e && (0,
                                o.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),
                                s("publisherDomain", e)
                            }
                        },
                        priceGranularity: {
                            set(e) {
                                c(e) && ("string" == typeof e ? s("priceGranularity", d(e) ? e : f.MEDIUM) : (0,
                                o.isPlainObject)(e) && (s("customPriceBucket", e),
                                s("priceGranularity", f.CUSTOM),
                                (0,
                                o.logMessage)("Using custom price granularity")))
                            }
                        },
                        customPriceBucket: {},
                        mediaTypePriceGranularity: {
                            set(e) {
                                null != e && s("mediaTypePriceGranularity", Object.keys(e).reduce(( (t, r) => (c(e[r]) ? "string" == typeof e ? t[r] = d(e[r]) ? e[r] : n("priceGranularity") : (0,
                                o.isPlainObject)(e) && (t[r] = e[r],
                                (0,
                                o.logMessage)(`Using custom price granularity for ${r}`)) : (0,
                                o.logWarn)(`Invalid price granularity for media type: ${r}`),
                                t)), {}))
                            }
                        },
                        bidderSequence: {
                            set(e) {
                                u[e] ? s("bidderSequence", e) : (0,
                                o.logWarn)(`Invalid order: ${e}. Bidder Sequence was not set.`)
                            }
                        },
                        auctionOptions: {
                            set(e) {
                                (function(e) {
                                    if (!(0,
                                    o.isPlainObject)(e))
                                        return (0,
                                        o.logWarn)("Auction Options must be an object"),
                                        !1;
                                    for (let t of Object.keys(e)) {
                                        if ("secondaryBidders" !== t && "suppressStaleRender" !== t && "suppressExpiredRender" !== t)
                                            return (0,
                                            o.logWarn)(`Auction Options given an incorrect param: ${t}`),
                                            !1;
                                        if ("secondaryBidders" === t) {
                                            if (!(0,
                                            o.isArray)(e[t]))
                                                return (0,
                                                o.logWarn)(`Auction Options ${t} must be of type Array`),
                                                !1;
                                            if (!e[t].every(o.isStr))
                                                return (0,
                                                o.logWarn)(`Auction Options ${t} must be only string`),
                                                !1
                                        } else if (("suppressStaleRender" === t || "suppressExpiredRender" === t) && !(0,
                                        o.isBoolean)(e[t]))
                                            return (0,
                                            o.logWarn)(`Auction Options ${t} must be of type boolean`),
                                            !1
                                    }
                                    return !0
                                }
                                )(e) && s("auctionOptions", e)
                            }
                        }
                    };
                    return Object.defineProperties(e, Object.fromEntries(Object.entries(a).map((e => {
                        let[r,i] = e;
                        return [r, Object.assign({
                            get: n.bind(null, r),
                            set: s.bind(null, r),
                            enumerable: t.hasOwnProperty(r),
                            configurable: !t.hasOwnProperty(r)
                        }, i)]
                    }
                    )))),
                    e;
                    function d(e) {
                        return (0,
                        i.I6)(Object.keys(f), (t => e === f[t]))
                    }
                    function c(e) {
                        if (!e)
                            return (0,
                            o.logError)("Prebid Error: no value passed to `setPriceGranularity()`"),
                            !1;
                        if ("string" == typeof e)
                            d(e) || (0,
                            o.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ((0,
                        o.isPlainObject)(e) && !(0,
                        r.q)(e))
                            return (0,
                            o.logError)("Invalid custom price value passed to `setPriceGranularity()`"),
                            !1;
                        return !0
                    }
                }
                const m = function() {
                    let e, t, n, r = [], a = null;
                    function l() {
                        e = {};
                        let r = p({
                            debug: d,
                            bidderTimeout: 3e3,
                            enableSendAllBids: true,
                            useBidCache: false,
                            deviceAccess: true,
                            disableAjaxTimeout: false,
                            maxNestedIframes: 10,
                            maxBid: 5e3,
                            userSync: {
                                topics: c
                            }
                        });
                        t && v(Object.keys(t).reduce(( (e, n) => (t[n] !== r[n] && (e[n] = r[n] || {}),
                        e)), {})),
                        t = r,
                        n = {}
                    }
                    function u() {
                        if (a && n && (0,
                        o.isPlainObject)(n[a])) {
                            const e = n[a]
                              , r = new Set([...Object.keys(t), ...Object.keys(e)])
                              , i = {};
                            for (const n of r) {
                                const r = t[n]
                                  , s = e[n];
                                i[n] = void 0 === s ? r : void 0 === r ? s : (0,
                                o.isPlainObject)(s) ? (0,
                                o.mergeDeep)({}, r, s) : s
                            }
                            return i
                        }
                        return {
                            ...t
                        }
                    }
                    const [g,f] = [u, function() {
                        const e = u();
                        return Object.defineProperty(e, "ortb2", {
                            get: function() {
                                throw new Error("invalid access to 'orbt2' config - use request parameters instead")
                            }
                        }),
                        e
                    }
                    ].map((e => function() {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            const t = arguments.length <= 0 ? void 0 : arguments[0];
                            return t ? (0,
                            s.A)(e(), t) : u()
                        }
                        return y(...arguments)
                    }
                    ))
                      , [m,h] = [f, g].map((e => function() {
                        let t = e(...arguments);
                        return t && "object" == typeof t && (t = (0,
                        o.deepClone)(t)),
                        t
                    }
                    ));
                    function b(n) {
                        if (!(0,
                        o.isPlainObject)(n))
                            return void (0,
                            o.logError)("setConfig options must be an object");
                        let r = Object.keys(n)
                          , i = {};
                        r.forEach((r => {
                            let s = n[r];
                            (0,
                            o.isPlainObject)(e[r]) && (0,
                            o.isPlainObject)(s) && (s = Object.assign({}, e[r], s));
                            try {
                                i[r] = t[r] = s
                            } catch (e) {
                                (0,
                                o.logWarn)(`Cannot set config for property ${r} : `, e)
                            }
                        }
                        )),
                        v(i)
                    }
                    function y(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , i = t;
                        if ("string" != typeof e && (i = e,
                        e = "*",
                        n = t || {}),
                        "function" != typeof i)
                            return void (0,
                            o.logError)("listener must be a function");
                        const s = {
                            topic: e,
                            callback: i
                        };
                        return r.push(s),
                        n.init && i("*" === e ? f() : {
                            [e]: f(e)
                        }),
                        function() {
                            r.splice(r.indexOf(s), 1)
                        }
                    }
                    function v(e) {
                        const t = Object.keys(e);
                        r.filter((e => (0,
                        i.mK)(t, e.topic))).forEach((t => {
                            t.callback({
                                [t.topic]: e[t.topic]
                            })
                        }
                        )),
                        r.filter((e => "*" === e.topic)).forEach((t => t.callback(e)))
                    }
                    function E(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        try {
                            !function(e) {
                                if (!(0,
                                o.isPlainObject)(e))
                                    throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length)
                                    throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!(0,
                                o.isPlainObject)(e.config))
                                    throw "setBidderConfig bidder options must contain a config object"
                            }(e),
                            e.bidders.forEach((r => {
                                n[r] || (n[r] = p({}, !1)),
                                Object.keys(e.config).forEach((i => {
                                    let s = e.config[i];
                                    const a = n[r][i];
                                    if ((0,
                                    o.isPlainObject)(s) && (null == a || (0,
                                    o.isPlainObject)(a))) {
                                        const e = t ? o.mergeDeep : Object.assign;
                                        n[r][i] = e({}, a || {}, s)
                                    } else
                                        n[r][i] = s
                                }
                                ))
                            }
                            ))
                        } catch (e) {
                            (0,
                            o.logError)(e)
                        }
                    }
                    function A(e, t) {
                        a = e;
                        try {
                            return t()
                        } finally {
                            I()
                        }
                    }
                    function I() {
                        a = null
                    }
                    return l(),
                    {
                        getCurrentBidder: function() {
                            return a
                        },
                        resetBidder: I,
                        getConfig: f,
                        getAnyConfig: g,
                        readConfig: m,
                        readAnyConfig: h,
                        setConfig: b,
                        mergeConfig: function(e) {
                            if (!(0,
                            o.isPlainObject)(e))
                                return void (0,
                                o.logError)("mergeConfig input must be an object");
                            const t = (0,
                            o.mergeDeep)(u(), e);
                            return b({
                                ...t
                            }),
                            t
                        },
                        setDefaults: function(n) {
                            (0,
                            o.isPlainObject)(e) ? (Object.assign(e, n),
                            Object.assign(t, n)) : (0,
                            o.logError)("defaults must be an object")
                        },
                        resetConfig: l,
                        runWithBidder: A,
                        callbackWithBidder: function(e) {
                            return function(t) {
                                return function() {
                                    if ("function" == typeof t) {
                                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                                            r[i] = arguments[i];
                                        return A(e, t.bind(this, ...r))
                                    }
                                    (0,
                                    o.logWarn)("config.callbackWithBidder callback is not a function")
                                }
                            }
                        },
                        setBidderConfig: E,
                        getBidderConfig: function() {
                            return n
                        },
                        mergeBidderConfig: function(e) {
                            return E(e, !0)
                        }
                    }
                }()
            }
            ,
            16916: (e, t, n) => {
                n.d(t, {
                    B1: () => s,
                    SL: () => p,
                    ad: () => l,
                    et: () => u,
                    mW: () => d,
                    o2: () => g,
                    t6: () => c
                });
                var r = n(91069)
                  , i = n(25555)
                  , o = n(43272);
                const s = Object.freeze({});
                class a {
                    #t;
                    #n;
                    #r;
                    #i;
                    #o = !0;
                    #s;
                    generatedTime;
                    hashFields;
                    constructor() {
                        this.reset()
                    }
                    #a(e) {
                        this.#i = !0,
                        this.#n = e,
                        this.#r.resolve(e)
                    }
                    reset() {
                        this.#r = (0,
                        i.v6)(),
                        this.#t = !1,
                        this.#n = null,
                        this.#i = !1,
                        this.generatedTime = null
                    }
                    enable() {
                        this.#t = !0
                    }
                    get enabled() {
                        return this.#t
                    }
                    get ready() {
                        return this.#i
                    }
                    get promise() {
                        return this.#i ? i.U9.resolve(this.#n) : (this.#t || this.#a(null),
                        this.#r.promise)
                    }
                    setConsentData(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0,
                        r.timestamp)();
                        this.generatedTime = t,
                        this.#o = !0,
                        this.#a(e)
                    }
                    getConsentData() {
                        return this.#n
                    }
                    get hash() {
                        return this.#o && (this.#s = (0,
                        r.cyrb53Hash)(JSON.stringify(this.#n && this.hashFields ? this.hashFields.map((e => this.#n[e])) : this.#n)),
                        this.#o = !1),
                        this.#s
                    }
                }
                const d = new class extends a {
                    hashFields = ["gdprApplies", "consentString"];
                    getConsentMeta() {
                        const e = this.getConsentData();
                        if (e && e.vendorData && this.generatedTime)
                            return {
                                gdprApplies: e.gdprApplies,
                                consentStringSize: (0,
                                r.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                                generatedAt: this.generatedTime,
                                apiVersion: e.apiVersion
                            }
                    }
                }
                  , c = new class extends a {
                    getConsentMeta() {
                        if (this.getConsentData() && this.generatedTime)
                            return {
                                generatedAt: this.generatedTime
                            }
                    }
                }
                  , l = new class extends a {
                    hashFields = ["applicableSections", "gppString"];
                    getConsentMeta() {
                        if (this.getConsentData() && this.generatedTime)
                            return {
                                generatedAt: this.generatedTime
                            }
                    }
                }
                  , u = ( () => {
                    function e() {
                        return !!o.$W.getConfig("coppa")
                    }
                    return {
                        getCoppa: e,
                        getConsentData: e,
                        getConsentMeta: e,
                        reset() {},
                        get promise() {
                            return i.U9.resolve(e())
                        },
                        get hash() {
                            return e() ? "1" : "0"
                        }
                    }
                }
                )()
                  , g = function() {
                    const e = {}
                      , t = {}
                      , n = {};
                    return {
                        register(r, i, o) {
                            o && ((e[i] = e[i] || {})[r] = o,
                            t.hasOwnProperty(i) ? t[i] !== o && (t[i] = n) : t[i] = o)
                        },
                        get(r) {
                            const i = {
                                modules: e[r] || {}
                            };
                            return t.hasOwnProperty(r) && t[r] !== n && (i.gvlid = t[r]),
                            i
                        }
                    }
                }()
                  , f = {
                    gdpr: d,
                    usp: c,
                    gpp: l,
                    coppa: u
                };
                const p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    return e = Object.entries(e),
                    Object.assign({
                        get promise() {
                            return i.U9.all(e.map((e => {
                                let[t,n] = e;
                                return n.promise.then((e => [t, e]))
                            }
                            ))).then((e => Object.fromEntries(e)))
                        },
                        get hash() {
                            return (0,
                            r.cyrb53Hash)(e.map((e => {
                                let[t,n] = e;
                                return n.hash
                            }
                            )).join(":"))
                        }
                    }, Object.fromEntries(["getConsentData", "getConsentMeta", "reset"].map((t => {
                        return [t, (n = t,
                        function() {
                            return Object.fromEntries(e.map((e => {
                                let[t,r] = e;
                                return [t, r[n]()]
                            }
                            )))
                        }
                        )];
                        var n
                    }
                    ))))
                }()
            }
            ,
            78969: (e, t, n) => {
                n.d(t, {
                    IY: () => A,
                    M: () => i,
                    RW: () => f,
                    Tf: () => m,
                    UE: () => c,
                    XQ: () => o,
                    Zh: () => u,
                    _B: () => v,
                    as: () => a,
                    cA: () => d,
                    h0: () => h,
                    iD: () => r,
                    jO: () => b,
                    nl: () => E,
                    oA: () => y,
                    qY: () => s,
                    tl: () => p,
                    x5: () => g,
                    xS: () => l
                });
                const r = {
                    PL_CODE: "code",
                    PL_SIZE: "sizes",
                    PL_BIDS: "bids",
                    BD_BIDDER: "bidder",
                    BD_ID: "paramsd",
                    BD_PL_ID: "placementId",
                    ADSERVER_TARGETING: "adserverTargeting",
                    BD_SETTING_STANDARD: "standard"
                }
                  , i = "pbjs_debug"
                  , o = {
                    GOOD: 1
                }
                  , s = {
                    AUCTION_INIT: "auctionInit",
                    AUCTION_TIMEOUT: "auctionTimeout",
                    AUCTION_END: "auctionEnd",
                    BID_ADJUSTMENT: "bidAdjustment",
                    BID_TIMEOUT: "bidTimeout",
                    BID_REQUESTED: "bidRequested",
                    BID_RESPONSE: "bidResponse",
                    BID_REJECTED: "bidRejected",
                    NO_BID: "noBid",
                    SEAT_NON_BID: "seatNonBid",
                    BID_WON: "bidWon",
                    BIDDER_DONE: "bidderDone",
                    BIDDER_ERROR: "bidderError",
                    SET_TARGETING: "setTargeting",
                    BEFORE_REQUEST_BIDS: "beforeRequestBids",
                    BEFORE_BIDDER_HTTP: "beforeBidderHttp",
                    REQUEST_BIDS: "requestBids",
                    ADD_AD_UNITS: "addAdUnits",
                    AD_RENDER_FAILED: "adRenderFailed",
                    AD_RENDER_SUCCEEDED: "adRenderSucceeded",
                    TCF2_ENFORCEMENT: "tcf2Enforcement",
                    AUCTION_DEBUG: "auctionDebug",
                    BID_VIEWABLE: "bidViewable",
                    STALE_RENDER: "staleRender",
                    EXPIRED_RENDER: "expiredRender",
                    BILLABLE_EVENT: "billableEvent",
                    BID_ACCEPTED: "bidAccepted",
                    RUN_PAAPI_AUCTION: "paapiRunAuction",
                    PBS_ANALYTICS: "pbsAnalytics",
                    PAAPI_BID: "paapiBid",
                    PAAPI_NO_BID: "paapiNoBid",
                    PAAPI_ERROR: "paapiError",
                    BEFORE_PBS_HTTP: "beforePBSHttp",
                    BROWSI_INIT: "browsiInit",
                    BROWSI_DATA: "browsiData"
                }
                  , a = {
                    PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
                    NO_AD: "noAd",
                    EXCEPTION: "exception",
                    CANNOT_FIND_AD: "cannotFindAd",
                    MISSING_DOC_OR_ADID: "missingDocOrAdid"
                }
                  , d = {
                    bidWon: "adUnitCode"
                }
                  , c = {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                }
                  , l = {
                    BIDDER: "hb_bidder",
                    AD_ID: "hb_adid",
                    PRICE_BUCKET: "hb_pb",
                    SIZE: "hb_size",
                    DEAL: "hb_deal",
                    SOURCE: "hb_source",
                    FORMAT: "hb_format",
                    UUID: "hb_uuid",
                    CACHE_ID: "hb_cache_id",
                    CACHE_HOST: "hb_cache_host",
                    ADOMAIN: "hb_adomain",
                    ACAT: "hb_acat",
                    CRID: "hb_crid",
                    DSP: "hb_dsp"
                }
                  , u = {
                    BIDDER: "hb_bidder",
                    AD_ID: "hb_adid",
                    PRICE_BUCKET: "hb_pb",
                    SIZE: "hb_size",
                    DEAL: "hb_deal",
                    FORMAT: "hb_format",
                    UUID: "hb_uuid",
                    CACHE_HOST: "hb_cache_host"
                }
                  , g = {
                    title: "hb_native_title",
                    body: "hb_native_body",
                    body2: "hb_native_body2",
                    privacyLink: "hb_native_privacy",
                    privacyIcon: "hb_native_privicon",
                    sponsoredBy: "hb_native_brand",
                    image: "hb_native_image",
                    icon: "hb_native_icon",
                    clickUrl: "hb_native_linkurl",
                    displayUrl: "hb_native_displayurl",
                    cta: "hb_native_cta",
                    rating: "hb_native_rating",
                    address: "hb_native_address",
                    downloads: "hb_native_downloads",
                    likes: "hb_native_likes",
                    phone: "hb_native_phone",
                    price: "hb_native_price",
                    salePrice: "hb_native_saleprice",
                    rendererUrl: "hb_renderer_url",
                    adTemplate: "hb_adTemplate"
                }
                  , f = {
                    SRC: "s2s",
                    DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                    SYNCED_BIDDERS_KEY: "pbjsSyncs"
                }
                  , p = {
                    BID_TARGETING_SET: "targetingSet",
                    RENDERED: "rendered",
                    BID_REJECTED: "bidRejected"
                }
                  , m = {
                    INVALID: "Bid has missing or invalid properties",
                    INVALID_REQUEST_ID: "Invalid request ID",
                    BIDDER_DISALLOWED: "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
                    FLOOR_NOT_MET: "Bid does not meet price floor",
                    CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
                    DSA_REQUIRED: "Bid does not provide required DSA transparency info",
                    DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
                    PRICE_TOO_HIGH: "Bid price exceeds maximum value"
                }
                  , h = {
                    body: "desc",
                    body2: "desc2",
                    sponsoredBy: "sponsored",
                    cta: "ctatext",
                    rating: "rating",
                    address: "address",
                    downloads: "downloads",
                    likes: "likes",
                    phone: "phone",
                    price: "price",
                    salePrice: "saleprice",
                    displayUrl: "displayurl"
                }
                  , b = {
                    sponsored: 1,
                    desc: 2,
                    rating: 3,
                    likes: 4,
                    downloads: 5,
                    price: 6,
                    saleprice: 7,
                    phone: 8,
                    address: 9,
                    desc2: 10,
                    displayurl: 11,
                    ctatext: 12
                }
                  , y = {
                    ICON: 1,
                    MAIN: 3
                }
                  , v = ["privacyIcon", "clickUrl", "sendTargetingKeys", "adTemplate", "rendererUrl", "type"]
                  , E = {
                    REQUEST: "Prebid Request",
                    RESPONSE: "Prebid Response",
                    NATIVE: "Prebid Native",
                    EVENT: "Prebid Event"
                }
                  , A = "__pb_locator__"
            }
            ,
            86833: (e, t, n) => {
                n.d(t, {
                    j: () => g,
                    q: () => p
                });
                var r = n(15901)
                  , i = n(91069)
                  , o = n(43272);
                const s = 2
                  , a = {
                    buckets: [{
                        max: 5,
                        increment: .5
                    }]
                }
                  , d = {
                    buckets: [{
                        max: 20,
                        increment: .1
                    }]
                }
                  , c = {
                    buckets: [{
                        max: 20,
                        increment: .01
                    }]
                }
                  , l = {
                    buckets: [{
                        max: 3,
                        increment: .01
                    }, {
                        max: 8,
                        increment: .05
                    }, {
                        max: 20,
                        increment: .5
                    }]
                }
                  , u = {
                    buckets: [{
                        max: 5,
                        increment: .05
                    }, {
                        max: 10,
                        increment: .1
                    }, {
                        max: 20,
                        increment: .5
                    }]
                };
                function g(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , r = parseFloat(e);
                    return isNaN(r) && (r = ""),
                    {
                        low: "" === r ? "" : f(e, a, n),
                        med: "" === r ? "" : f(e, d, n),
                        high: "" === r ? "" : f(e, c, n),
                        auto: "" === r ? "" : f(e, u, n),
                        dense: "" === r ? "" : f(e, l, n),
                        custom: "" === r ? "" : f(e, t, n)
                    }
                }
                function f(e, t, n) {
                    let a = "";
                    if (!p(t))
                        return a;
                    const d = t.buckets.reduce(( (e, t) => e.max > t.max ? e : t), {
                        max: 0
                    });
                    let c = 0
                      , l = (0,
                    r.I6)(t.buckets, (t => {
                        if (e > d.max * n) {
                            let e = t.precision;
                            void 0 === e && (e = s),
                            a = (t.max * n).toFixed(e)
                        } else {
                            if (e <= t.max * n && e >= c * n)
                                return t.min = c,
                                t;
                            c = t.max
                        }
                    }
                    ));
                    return l && (a = function(e, t, n) {
                        const r = void 0 !== t.precision ? t.precision : s
                          , a = t.increment * n
                          , d = t.min * n;
                        let c = Math.floor
                          , l = o.$W.getConfig("cpmRoundingFunction");
                        "function" == typeof l && (c = l);
                        let u, g, f = Math.pow(10, r + 2), p = (e * f - d * f) / (a * f);
                        try {
                            u = c(p) * a + d
                        } catch (e) {
                            g = !0
                        }
                        (g || "number" != typeof u) && ((0,
                        i.logWarn)("Invalid rounding function passed in config"),
                        u = Math.floor(p) * a + d);
                        return u = Number(u.toFixed(10)),
                        u.toFixed(r)
                    }(e, l, n)),
                    a
                }
                function p(e) {
                    if ((0,
                    i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets))
                        return !1;
                    let t = !0;
                    return e.buckets.forEach((e => {
                        e.max && e.increment || (t = !1)
                    }
                    )),
                    t
                }
            }
            ,
            46031: (e, t, n) => {
                n.d(t, {
                    HH: () => c,
                    kj: () => d,
                    xh: () => a
                });
                var r = n(25555)
                  , i = n(91069)
                  , o = n(34595)
                  , s = n(16833);
                const a = 3
                  , d = (0,
                s.A_)("sync", (function(e) {
                    return o.G
                }
                ))
                  , c = function() {
                    const e = {};
                    return function(t) {
                        const n = d(t);
                        return e.hasOwnProperty(n) || (e[n] = new r.U9((e => {
                            const t = (0,
                            i.createInvisibleIframe)();
                            t.srcdoc = `<script>${n}<\/script>`,
                            t.onload = () => e(t.contentWindow.render),
                            document.body.appendChild(t)
                        }
                        ))),
                        e[n]
                    }
                }()
            }
            ,
            49164: (e, t, n) => {
                n.d(t, {
                    L6: () => h,
                    ey: () => u
                });
                var r = n(43272)
                  , i = n(16833)
                  , o = n(7873)
                  , s = n(91069)
                  , a = n(93597)
                  , d = n(41580)
                  , c = n(25555)
                  , l = n(45569);
                const u = "__pbjs_debugging__";
                function g() {
                    return (0,
                    o.m)().installedModules.includes("debugging")
                }
                function f(e) {
                    return new c.U9((t => {
                        (0,
                        d.R)(e, l.tp, "debugging", t)
                    }
                    ))
                }
                function p() {
                    let {alreadyInstalled: e=g, script: t=f} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = null;
                    return function() {
                        return null == n && (n = new c.U9(( (n, d) => {
                            setTimeout(( () => {
                                if (e())
                                    n();
                                else {
                                    const e = "https://cdn.jsdelivr.net/npm/prebid.js@9.44.1/dist/debugging-standalone.js";
                                    (0,
                                    s.logMessage)(`Debugging module not installed, loading it from "${e}"...`),
                                    (0,
                                    o.m)()._installDebugging = !0,
                                    t(e).then(( () => {
                                        (0,
                                        o.m)()._installDebugging({
                                            DEBUG_KEY: u,
                                            hook: i.A_,
                                            config: r.$W,
                                            createBid: a.O,
                                            logger: (0,
                                            s.prefixLog)("DEBUG:")
                                        })
                                    }
                                    )).then(n, d)
                                }
                            }
                            ))
                        }
                        ))),
                        n
                    }
                }
                const m = function() {
                    let {load: e=p(), hook: t=(0,
                    i.Yn)("requestBids")} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = null
                      , r = !1;
                    function o(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                            r[i - 1] = arguments[i];
                        return (n || c.U9.resolve()).then(( () => e.apply(this, r)))
                    }
                    function s() {
                        t.getHooks({
                            hook: o
                        }).remove(),
                        r = !1
                    }
                    return {
                        enable: function() {
                            r || (n = e(),
                            t.before(o, 99),
                            r = !0)
                        },
                        disable: s,
                        reset: function() {
                            n = null,
                            s()
                        }
                    }
                }();
                m.reset;
                function h() {
                    let e = null;
                    try {
                        e = window.sessionStorage
                    } catch (e) {}
                    if (null !== e) {
                        let t = m
                          , n = null;
                        try {
                            n = e.getItem(u)
                        } catch (e) {}
                        null !== n && t.enable()
                    }
                }
                r.$W.getConfig("debugging", (function(e) {
                    let {debugging: t} = e;
                    t?.enabled ? m.enable() : m.disable()
                }
                ))
            }
            ,
            33005: (e, t, n) => {
                n.d(t, {
                    $T: () => a,
                    Ni: () => r,
                    OA: () => o,
                    RO: () => s,
                    fR: () => i
                });
                const r = 1
                  , i = 2
                  , o = 1
                  , s = 500;
                function a(e) {
                    return (e ?? []).reduce(( (e, t) => {
                        let {event: n, method: r, url: i} = t;
                        const o = e[n] = e[n] ?? {};
                        return (o[r] = o[r] ?? []).push(i),
                        e
                    }
                    ), {})
                }
            }
            ,
            75023: (e, t, n) => {
                n.r(t),
                n.d(t, {
                    addEvents: () => E,
                    clearEvents: () => I,
                    emit: () => v,
                    get: () => b,
                    getEvents: () => y,
                    has: () => A,
                    off: () => h,
                    on: () => m
                });
                var r = n(91069)
                  , i = n(78969)
                  , o = n(76853)
                  , s = n(43272);
                const a = "eventHistoryTTL";
                let d = null;
                const c = (0,
                o.H)({
                    monotonic: !0,
                    ttl: () => d
                });
                s.$W.getConfig(a, (e => {
                    const t = d;
                    e = e?.[a],
                    d = "number" == typeof e ? 1e3 * e : null,
                    t !== d && c.refresh()
                }
                ));
                let l = Array.prototype.slice
                  , u = Array.prototype.push
                  , g = Object.values(i.qY);
                const f = i.cA
                  , p = function() {
                    let e = {}
                      , t = {};
                    function n(e) {
                        return g.includes(e)
                    }
                    return t.has = n,
                    t.on = function(t, i, o) {
                        if (n(t)) {
                            let n = e[t] || {
                                que: []
                            };
                            o ? (n[o] = n[o] || {
                                que: []
                            },
                            n[o].que.push(i)) : n.que.push(i),
                            e[t] = n
                        } else
                            r.logError("Wrong event name : " + t + " Valid event names :" + g)
                    }
                    ,
                    t.emit = function(t) {
                        !function(t, n) {
                            r.logMessage("Emitting event for: " + t);
                            let i = n[0] || {}
                              , o = i[f[t]]
                              , s = e[t] || {
                                que: []
                            };
                            var a = Object.keys(s);
                            let d = [];
                            c.add({
                                eventType: t,
                                args: i,
                                id: o,
                                elapsedTime: r.getPerformanceNow()
                            }),
                            o && a.includes(o) && u.apply(d, s[o].que),
                            u.apply(d, s.que),
                            (d || []).forEach((function(e) {
                                if (e)
                                    try {
                                        e.apply(null, n)
                                    } catch (e) {
                                        r.logError("Error executing handler:", "events.js", e, t)
                                    }
                            }
                            ))
                        }(t, l.call(arguments, 1))
                    }
                    ,
                    t.off = function(t, n, i) {
                        let o = e[t];
                        r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? (o[i].que || []).forEach((function(e) {
                            let t = o[i].que;
                            e === n && t.splice(t.indexOf(e), 1)
                        }
                        )) : (o.que || []).forEach((function(e) {
                            let t = o.que;
                            e === n && t.splice(t.indexOf(e), 1)
                        }
                        )),
                        e[t] = o)
                    }
                    ,
                    t.get = function() {
                        return e
                    }
                    ,
                    t.addEvents = function(e) {
                        g = g.concat(e)
                    }
                    ,
                    t.getEvents = function() {
                        return c.toArray().map((e => Object.assign({}, e)))
                    }
                    ,
                    t
                }();
                r._setEventEmitter(p.emit.bind(p));
                const {on: m, off: h, get: b, getEvents: y, emit: v, addEvents: E, has: A} = p;
                function I() {
                    c.clear()
                }
            }
            ,
            70068: (e, t, n) => {
                n.d(t, {
                    w: () => v
                });
                var r = n(16833)
                  , i = n(27934)
                  , o = n(5973)
                  , s = n(91069)
                  , a = n(63172)
                  , d = n(43272)
                  , c = n(25250)
                  , l = n(25555)
                  , u = n(73858)
                  , g = n(95139)
                  , f = n(83441)
                  , p = n(76811)
                  , m = n(45569)
                  , h = n(88944);
                const b = {
                    getRefererInfo: i.EN,
                    findRootDomain: o.S,
                    getWindowTop: s.getWindowTop,
                    getWindowSelf: s.getWindowSelf,
                    getHighEntropySUA: c.FD,
                    getLowEntropySUA: c.zO,
                    getDocument: s.getDocument
                }
                  , y = (0,
                u.i8)("FPD")
                  , v = (0,
                r.A_)("sync", (e => {
                    const t = [e, A().catch(( () => null)), l.U9.resolve("cookieDeprecationLabel"in navigator && (0,
                    g.io)(p.Ue, (0,
                    f.s)(m.tp, "cdep")) && navigator.cookieDeprecationLabel.getValue()).catch(( () => null))];
                    return l.U9.all(t).then((e => {
                        let[t,n,r] = e;
                        const i = b.getRefererInfo();
                        if (Object.entries(w).forEach((e => {
                            let[n,r] = e;
                            const o = r(t, i);
                            o && Object.keys(o).length > 0 && (t[n] = (0,
                            s.mergeDeep)({}, o, t[n]))
                        }
                        )),
                        n && (0,
                        a.J)(t, "device.sua", Object.assign({}, n, t.device.sua)),
                        r) {
                            const e = {
                                cdep: r
                            };
                            (0,
                            a.J)(t, "device.ext", Object.assign({}, e, t.device.ext))
                        }
                        const o = b.getDocument().documentElement.lang;
                        o && (0,
                        a.J)(t, "site.ext.data.documentLang", o),
                        t = y(t);
                        for (let e of u.Dy)
                            if ((0,
                            u.O$)(t, e)) {
                                t[e] = (0,
                                s.mergeDeep)({}, T(t, i), t[e]);
                                break
                            }
                        return t
                    }
                    ))
                }
                ));
                function E(e) {
                    try {
                        return e(b.getWindowTop())
                    } catch (t) {
                        return e(b.getWindowSelf())
                    }
                }
                function A() {
                    const e = d.$W.getConfig("firstPartyData.uaHints");
                    return Array.isArray(e) && 0 !== e.length ? b.getHighEntropySUA(e) : l.U9.resolve(b.getLowEntropySUA())
                }
                function I(e) {
                    return (0,
                    s.getDefinedParams)(e, Object.keys(e))
                }
                const w = {
                    site(e, t) {
                        if (!u.Dy.filter((e => "site" !== e)).some(u.O$.bind(null, e)))
                            return I({
                                page: t.page,
                                ref: t.ref
                            })
                    },
                    device: () => E((e => {
                        const t = (0,
                        s.getWinDimensions)().screen.width
                          , n = (0,
                        s.getWinDimensions)().screen.height
                          , {width: r, height: i} = (0,
                        h.M)()
                          , o = {
                            w: t,
                            h: n,
                            dnt: (0,
                            s.getDNT)() ? 1 : 0,
                            ua: e.navigator.userAgent,
                            language: e.navigator.language.split("-").shift(),
                            ext: {
                                vpw: r,
                                vph: i
                            }
                        };
                        return e.navigator?.webdriver && (0,
                        a.J)(o, "ext.webdriver", !0),
                        o
                    }
                    )),
                    regs() {
                        const e = {};
                        E((e => e.navigator.globalPrivacyControl)) && (0,
                        a.J)(e, "ext.gpc", "1");
                        const t = d.$W.getConfig("coppa");
                        return "boolean" == typeof t && (e.coppa = t ? 1 : 0),
                        e
                    }
                };
                function T(e, t) {
                    const n = (0,
                    i.gR)(t.page, {
                        noLeadingWww: !0
                    })
                      , r = E((e => e.document.querySelector("meta[name='keywords']")))?.content?.replace?.(/\s/g, "");
                    return I({
                        domain: n,
                        keywords: r,
                        publisher: I({
                            domain: b.findRootDomain(n)
                        })
                    })
                }
            }
            ,
            73858: (e, t, n) => {
                n.d(t, {
                    Dy: () => i,
                    O$: () => s,
                    i8: () => o
                });
                var r = n(91069);
                const i = ["dooh", "app", "site"];
                function o(e) {
                    return function(t) {
                        return i.reduce(( (n, i) => (s(t, i) && (null != n ? ((0,
                        r.logWarn)(`${e} specifies both '${n}' and '${i}'; dropping the latter.`),
                        delete t[i]) : n = i),
                        n)), null),
                        t
                    }
                }
                function s(e, t) {
                    return null != e[t] && Object.keys(e[t]).length > 0
                }
            }
            ,
            5973: (e, t, n) => {
                n.d(t, {
                    S: () => o
                });
                var r = n(91069);
                const i = (0,
                n(12938).CK)("fpdEnrichment")
                  , o = (0,
                r.memoize)((function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.host;
                    if (!i.cookiesAreEnabled())
                        return e;
                    const t = e.split(".");
                    if (2 === t.length)
                        return e;
                    let n, o, s = -2;
                    const a = `_rdc${Date.now()}`
                      , d = "writeable";
                    do {
                        n = t.slice(s).join(".");
                        let e = new Date((0,
                        r.timestamp)() + 1e4).toUTCString();
                        i.setCookie(a, d, e, "Lax", n, void 0);
                        i.getCookie(a, void 0) === d ? (o = !1,
                        i.setCookie(a, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n, void 0)) : (s += -1,
                        o = Math.abs(s) <= t.length)
                    } while (o);
                    return n
                }
                ))
            }
            ,
            25250: (e, t, n) => {
                n.d(t, {
                    CP: () => l,
                    FD: () => c,
                    zO: () => d
                });
                var r = n(91069)
                  , i = n(25555);
                const o = 2
                  , s = ["architecture", "bitness", "model", "platformVersion", "fullVersionList"]
                  , a = ["brands", "mobile", "platform"]
                  , d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator?.userAgentData;
                    const t = e && a.some((t => void 0 !== e[t])) ? Object.freeze(u(1, e)) : null;
                    return function() {
                        return t
                    }
                }()
                  , c = l();
                function l() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator?.userAgentData;
                    const t = {}
                      , n = new WeakMap;
                    return function() {
                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                        if (!n.has(a)) {
                            const e = Array.from(a);
                            e.sort(),
                            n.set(a, e.join("|"))
                        }
                        const d = n.get(a);
                        if (!t.hasOwnProperty(d))
                            try {
                                t[d] = e.getHighEntropyValues(a).then((e => (0,
                                r.isEmpty)(e) ? null : Object.freeze(u(o, e)))).catch(( () => null))
                            } catch (e) {
                                t[d] = i.U9.resolve(null)
                            }
                        return t[d]
                    }
                }
                function u(e, t) {
                    function n(e, t) {
                        const n = {
                            brand: e
                        };
                        return (0,
                        r.isStr)(t) && !(0,
                        r.isEmptyStr)(t) && (n.version = t.split(".")),
                        n
                    }
                    const i = {
                        source: e
                    };
                    return t.platform && (i.platform = n(t.platform, t.platformVersion)),
                    (t.fullVersionList || t.brands) && (i.browsers = (t.fullVersionList || t.brands).map((e => {
                        let {brand: t, version: r} = e;
                        return n(t, r)
                    }
                    ))),
                    void 0 !== t.mobile && (i.mobile = t.mobile ? 1 : 0),
                    ["model", "bitness", "architecture"].forEach((e => {
                        const n = t[e];
                        (0,
                        r.isStr)(n) && (i[e] = n)
                    }
                    )),
                    i
                }
            }
            ,
            16833: (e, t, n) => {
                n.d(t, {
                    A_: () => s,
                    Gc: () => d,
                    Y6: () => p,
                    Yn: () => c,
                    bz: () => f,
                    pT: () => l,
                    u2: () => m,
                    xG: () => g
                });
                var r = n(68128)
                  , i = n.n(r)
                  , o = n(25555);
                let s = i()({
                    ready: i().SYNC | i().ASYNC | i().QUEUE
                });
                const a = (0,
                o.v6)();
                s.ready = ( () => {
                    const e = s.ready;
                    return function() {
                        try {
                            return e.apply(s, arguments)
                        } finally {
                            a.resolve()
                        }
                    }
                }
                )();
                const d = a.promise
                  , c = s.get;
                function l(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
                    0 === e.getHooks({
                        hook: t
                    }).length && e.before(t, n)
                }
                const u = {};
                function g(e, t) {
                    let {postInstallAllowed: n=!1} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    s("async", (function(r) {
                        r.forEach((e => t(...e))),
                        n && (u[e] = t)
                    }
                    ), e)([])
                }
                function f(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    const i = u[e];
                    if (i)
                        return i(...n);
                    c(e).before(( (e, t) => {
                        t.push(n),
                        e(t)
                    }
                    ))
                }
                function p(e, t) {
                    return Object.defineProperties(t, Object.fromEntries(["before", "after", "getHooks", "removeAll"].map((t => [t, {
                        get: () => e[t]
                    }])))),
                    t
                }
                function m(e) {
                    return p(e, (function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        return n.push((function() {}
                        )),
                        e.apply(this, n)
                    }
                    ))
                }
            }
            ,
            71371: (e, t, n) => {
                n.d(t, {
                    D4: () => o,
                    GE: () => a,
                    G_: () => i,
                    LM: () => s,
                    s6: () => r
                });
                const r = "native"
                  , i = "video"
                  , o = "banner"
                  , s = "adpod"
                  , a = [r, i, o]
            }
            ,
            12449: (e, t, n) => {
                n.d(t, {
                    Bm: () => E,
                    Ex: () => N,
                    Gg: () => C,
                    IX: () => B,
                    Nh: () => g,
                    Xj: () => j,
                    Zj: () => w,
                    gs: () => I,
                    l6: () => h,
                    mT: () => u,
                    nk: () => y,
                    rn: () => U,
                    vO: () => A,
                    yl: () => R
                });
                var r = n(91069)
                  , i = n(15901)
                  , o = n(67314)
                  , s = n(78969)
                  , a = n(71371)
                  , d = n(29075)
                  , c = n(46031)
                  , l = n(33005);
                const u = []
                  , g = Object.keys(s.x5).map((e => s.x5[e]))
                  , f = {
                    image: {
                        ortb: {
                            ver: "1.2",
                            assets: [{
                                required: 1,
                                id: 1,
                                img: {
                                    type: 3,
                                    wmin: 100,
                                    hmin: 100
                                }
                            }, {
                                required: 1,
                                id: 2,
                                title: {
                                    len: 140
                                }
                            }, {
                                required: 1,
                                id: 3,
                                data: {
                                    type: 1
                                }
                            }, {
                                required: 0,
                                id: 4,
                                data: {
                                    type: 2
                                }
                            }, {
                                required: 0,
                                id: 5,
                                img: {
                                    type: 1,
                                    wmin: 20,
                                    hmin: 20
                                }
                            }]
                        },
                        image: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        body: {
                            required: !1
                        },
                        icon: {
                            required: !1
                        }
                    }
                }
                  , p = q(s.h0)
                  , m = q(s.jO);
                function h(e) {
                    return e.native && "object" == typeof e.native
                }
                function b(e) {
                    if (e && e.type && function(e) {
                        if (!e || !(0,
                        i.mK)(Object.keys(f), e))
                            return (0,
                            r.logError)(`${e} nativeParam is not supported`),
                            !1;
                        return !0
                    }(e.type) && (e = f[e.type]),
                    !e || !e.ortb || v(e.ortb))
                        return e
                }
                function y(e) {
                    e.forEach((e => {
                        const t = e.nativeParams || e?.mediaTypes?.native;
                        t && (e.nativeParams = b(t)),
                        e.nativeParams && (e.nativeOrtbRequest = e.nativeParams.ortb || U(e.nativeParams))
                    }
                    ))
                }
                function v(e) {
                    const t = e.assets;
                    if (!Array.isArray(t) || 0 === t.length)
                        return (0,
                        r.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ", t),
                        !1;
                    const n = t.map((e => e.id));
                    return t.length !== new Set(n).size || n.some((e => e !== parseInt(e, 10))) ? ((0,
                    r.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"),
                    !1) : e.hasOwnProperty("eventtrackers") && !Array.isArray(e.eventtrackers) ? ((0,
                    r.logError)("ortb.eventtrackers is not an array. Eventtrackers: ", e.eventtrackers),
                    !1) : t.every((e => function(e) {
                        if (!(0,
                        r.isPlainObject)(e))
                            return (0,
                            r.logError)("asset must be an object. Provided asset: ", e),
                            !1;
                        if (e.img) {
                            if (!(0,
                            r.isNumber)(e.img.w) && !(0,
                            r.isNumber)(e.img.wmin))
                                return (0,
                                r.logError)("for img asset there must be 'w' or 'wmin' property"),
                                !1;
                            if (!(0,
                            r.isNumber)(e.img.h) && !(0,
                            r.isNumber)(e.img.hmin))
                                return (0,
                                r.logError)("for img asset there must be 'h' or 'hmin' property"),
                                !1
                        } else if (e.title) {
                            if (!(0,
                            r.isNumber)(e.title.len))
                                return (0,
                                r.logError)("for title asset there must be 'len' property defined"),
                                !1
                        } else if (e.data) {
                            if (!(0,
                            r.isNumber)(e.data.type))
                                return (0,
                                r.logError)("for data asset 'type' property must be a number"),
                                !1
                        } else if (e.video && !(Array.isArray(e.video.mimes) && Array.isArray(e.video.protocols) && (0,
                        r.isNumber)(e.video.minduration) && (0,
                        r.isNumber)(e.video.maxduration)))
                            return (0,
                            r.logError)("video asset is not properly configured"),
                            !1;
                        return !0
                    }(e)))
                }
                function E(e) {
                    let {index: t=o.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = t.getAdUnit(e);
                    if (!n)
                        return !1;
                    let s = n.nativeOrtbRequest;
                    return function(e, t) {
                        if (!e?.link?.url)
                            return (0,
                            r.logError)("native response doesn't have 'link' property. Ortb response: ", e),
                            !1;
                        let n = t.assets.filter((e => 1 === e.required)).map((e => e.id))
                          , o = e.assets.map((e => e.id));
                        const s = n.every((e => (0,
                        i.mK)(o, e)));
                        s || (0,
                        r.logError)(`didn't receive a bid with all required assets. Required ids: ${n}, but received ids in response: ${o}`);
                        return s
                    }(e.native?.ortb || x(e.native, s), s)
                }
                function A(e, t) {
                    const n = t.native.ortb || $(t.native);
                    return "click" === e.action ? function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                          , {fetchURL: n=r.triggerPixel} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (t) {
                            const r = (e.assets || []).filter((e => e.link)).reduce(( (e, t) => (e[t.id] = t.link,
                            e)), {})
                              , i = e.link?.clicktrackers || [];
                            let o = r[t]
                              , s = i;
                            o && (s = o.clicktrackers || []),
                            s.forEach((e => n(e)))
                        } else
                            (e.link?.clicktrackers || []).forEach((e => n(e)))
                    }(n, e?.assetId) : function(e) {
                        let {runMarkup: t=(e => (0,
                        r.insertHtmlIntoIframe)(e)), fetchURL: n=r.triggerPixel} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , {[l.Ni]: i=[], [l.fR]: o=[]} = (0,
                        l.$T)(e.eventtrackers || [])[l.OA] || {};
                        e.imptrackers && (i = i.concat(e.imptrackers));
                        i.forEach((e => n(e))),
                        o = o.map((e => `<script async src="${e}"><\/script>`)),
                        e.jstracker && (o = o.concat([e.jstracker]));
                        o.length && t(o.join("\n"))
                    }(n),
                    e.action
                }
                function I(e, t) {
                    const n = t?.nativeOrtbRequest
                      , r = e.native?.ortb;
                    if (n && r) {
                        const t = N(r, n);
                        Object.assign(e.native, t)
                    }
                    ["rendererUrl", "adTemplate"].forEach((n => {
                        const r = t?.nativeParams?.[n];
                        r && (e.native[n] = k(r))
                    }
                    ))
                }
                function w(e) {
                    let {index: t=o.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = {};
                    const r = t.getAdUnit(e)
                      , i = null == r?.nativeParams?.ortb && !1 !== r?.nativeParams?.sendTargetingKeys
                      , a = function(e) {
                        const t = {};
                        e?.nativeParams?.ext && Object.keys(e.nativeParams.ext).forEach((e => {
                            t[e] = `hb_native_${e}`
                        }
                        ));
                        return {
                            ...s.x5,
                            ...t
                        }
                    }(r)
                      , d = {
                        ...e.native,
                        ...e.native.ext
                    };
                    return delete d.ext,
                    Object.keys(d).forEach((t => {
                        const o = a[t];
                        let s = k(e.native[t]) || k(e?.native?.ext?.[t]);
                        if ("adTemplate" === t || !o || !s)
                            return;
                        let d = r?.nativeParams?.[t]?.sendId;
                        if ("boolean" != typeof d && (d = r?.nativeParams?.ext?.[t]?.sendId),
                        d) {
                            s = `${o}:${e.adId}`
                        }
                        let c = r?.nativeParams?.[t]?.sendTargetingKeys;
                        "boolean" != typeof c && (c = r?.nativeParams?.ext?.[t]?.sendTargetingKeys);
                        ("boolean" == typeof c ? c : i) && (n[o] = s)
                    }
                    )),
                    n
                }
                function T(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = [];
                    return Object.entries(e).filter((e => {
                        let[r,i] = e;
                        return i && (!1 === n && "ext" === r || null == t || t.includes(r))
                    }
                    )).forEach((e => {
                        let[i,o] = e;
                        !1 === n && "ext" === i ? r.push(...T(o, t, !0)) : (n || s.x5.hasOwnProperty(i)) && r.push({
                            key: i,
                            value: k(o)
                        })
                    }
                    )),
                    r
                }
                function C(e, t, n) {
                    const i = {
                        ...(0,
                        r.getDefinedParams)(e.native, ["rendererUrl", "adTemplate"]),
                        assets: T(e.native, n),
                        nativeKeys: s.x5
                    };
                    return e.native.ortb ? i.ortb = e.native.ortb : t.mediaTypes?.native?.ortb && (i.ortb = x(e.native, t.nativeOrtbRequest)),
                    i
                }
                function S(e, t, n) {
                    let {index: r=o.n.index} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const i = {
                        message: "assetResponse",
                        adId: e.adId
                    };
                    let s = (0,
                    d.vd)(t).native;
                    return s ? (i.native = Object.assign({}, s),
                    i.renderer = (0,
                    c.kj)(t),
                    i.rendererVersion = c.xh,
                    null != n && (s.assets = s.assets.filter((e => {
                        let {key: t} = e;
                        return n.includes(t)
                    }
                    )))) : s = C(t, r.getAdUnit(t), n),
                    Object.assign(i, s)
                }
                const O = Object.fromEntries(Object.entries(s.x5).map((e => {
                    let[t,n] = e;
                    return [n, t]
                }
                )));
                function B(e, t) {
                    const n = e.assets.map((e => O[e]));
                    return S(e, t, n)
                }
                function R(e, t) {
                    return S(e, t, null)
                }
                function k(e) {
                    return e?.url || e
                }
                function U(e) {
                    if (!e && !(0,
                    r.isPlainObject)(e))
                        return void (0,
                        r.logError)("Native assets object is empty or not an object: ", e);
                    const t = {
                        ver: "1.2",
                        assets: []
                    };
                    for (let n in e) {
                        if (s._B.includes(n))
                            continue;
                        if (!s.x5.hasOwnProperty(n)) {
                            (0,
                            r.logError)(`Unrecognized native asset code: ${n}. Asset will be ignored.`);
                            continue
                        }
                        if ("privacyLink" === n) {
                            t.privacy = 1;
                            continue
                        }
                        const i = e[n];
                        let o = 0;
                        i.required && (0,
                        r.isBoolean)(i.required) && (o = Number(i.required));
                        const a = {
                            id: t.assets.length,
                            required: o
                        };
                        if (n in s.h0)
                            a.data = {
                                type: s.jO[s.h0[n]]
                            },
                            i.len && (a.data.len = i.len);
                        else if ("icon" === n || "image" === n) {
                            if (a.img = {
                                type: "icon" === n ? s.oA.ICON : s.oA.MAIN
                            },
                            i.aspect_ratios)
                                if ((0,
                                r.isArray)(i.aspect_ratios))
                                    if (i.aspect_ratios.length) {
                                        const {min_width: e, min_height: t} = i.aspect_ratios[0];
                                        (0,
                                        r.isInteger)(e) && (0,
                                        r.isInteger)(t) ? (a.img.wmin = e,
                                        a.img.hmin = t) : (0,
                                        r.logError)("image.aspect_ratios min_width or min_height are invalid: ", e, t);
                                        const n = i.aspect_ratios.filter((e => e.ratio_width && e.ratio_height)).map((e => `${e.ratio_width}:${e.ratio_height}`));
                                        n.length > 0 && (a.img.ext = {
                                            aspectratios: n
                                        })
                                    } else
                                        (0,
                                        r.logError)("image.aspect_ratios was passed, but it's empty:", i.aspect_ratios);
                                else
                                    (0,
                                    r.logError)("image.aspect_ratios was passed, but it's not a an array:", i.aspect_ratios);
                            i.sizes && (2 === i.sizes.length && (0,
                            r.isInteger)(i.sizes[0]) && (0,
                            r.isInteger)(i.sizes[1]) ? (a.img.w = i.sizes[0],
                            a.img.h = i.sizes[1],
                            delete a.img.hmin,
                            delete a.img.wmin) : (0,
                            r.logError)("image.sizes was passed, but its value is not an array of integers:", i.sizes))
                        } else
                            "title" === n ? a.title = {
                                len: i.len || 140
                            } : "ext" === n && (a.ext = i,
                            delete a.required);
                        t.assets.push(a)
                    }
                    return t
                }
                function D(e, t) {
                    for (; e && t && e !== t; )
                        e > t ? e -= t : t -= e;
                    return e || t
                }
                function _(e) {
                    if (!v(e))
                        return;
                    const t = {};
                    for (const n of e.assets) {
                        if (n.title) {
                            const e = {
                                required: !!n.required && Boolean(n.required),
                                len: n.title.len
                            };
                            t.title = e
                        } else if (n.img) {
                            const e = {
                                required: !!n.required && Boolean(n.required)
                            };
                            if (n.img.w && n.img.h)
                                e.sizes = [n.img.w, n.img.h];
                            else if (n.img.wmin && n.img.hmin) {
                                const t = D(n.img.wmin, n.img.hmin);
                                e.aspect_ratios = [{
                                    min_width: n.img.wmin,
                                    min_height: n.img.hmin,
                                    ratio_width: n.img.wmin / t,
                                    ratio_height: n.img.hmin / t
                                }]
                            }
                            n.img.type === s.oA.MAIN ? t.image = e : t.icon = e
                        } else if (n.data) {
                            let e = Object.keys(s.jO).find((e => s.jO[e] === n.data.type))
                              , r = Object.keys(s.h0).find((t => s.h0[t] === e));
                            t[r] = {
                                required: !!n.required && Boolean(n.required)
                            },
                            n.data.len && (t[r].len = n.data.len)
                        }
                        e.privacy && (t.privacyLink = {
                            required: !1
                        })
                    }
                    return t
                }
                function j(e) {
                    {
                        if (!e || !(0,
                        r.isArray)(e))
                            return e;
                        if (!e.some((e => (e?.mediaTypes || {})[a.s6]?.ortb)))
                            return e;
                        let t = (0,
                        r.deepClone)(e);
                        for (const e of t)
                            e.mediaTypes && e.mediaTypes[a.s6] && e.mediaTypes[a.s6].ortb && (e.mediaTypes[a.s6] = Object.assign((0,
                            r.pick)(e.mediaTypes[a.s6], s._B), _(e.mediaTypes[a.s6].ortb)),
                            e.nativeParams = b(e.mediaTypes[a.s6]));
                        return t
                    }
                }
                function $(e) {
                    const t = {
                        link: {},
                        eventtrackers: []
                    };
                    return Object.entries(e).forEach((e => {
                        let[n,r] = e;
                        switch (n) {
                        case "clickUrl":
                            t.link.url = r;
                            break;
                        case "clickTrackers":
                            t.link.clicktrackers = Array.isArray(r) ? r : [r];
                            break;
                        case "impressionTrackers":
                            (Array.isArray(r) ? r : [r]).forEach((e => {
                                t.eventtrackers.push({
                                    event: l.OA,
                                    method: l.Ni,
                                    url: e
                                })
                            }
                            ));
                            break;
                        case "javascriptTrackers":
                            t.jstracker = Array.isArray(r) ? r.join("") : r;
                            break;
                        case "privacyLink":
                            t.privacy = r
                        }
                    }
                    )),
                    t
                }
                function x(e, t) {
                    const n = {
                        ...$(e),
                        assets: []
                    };
                    function i(e, i) {
                        let o = t.assets.find(e);
                        null != o && (o = (0,
                        r.deepClone)(o),
                        i(o),
                        n.assets.push(o))
                    }
                    return Object.keys(e).filter((t => !!e[t])).forEach((t => {
                        const n = k(e[t]);
                        switch (t) {
                        case "title":
                            i((e => null != e.title), (e => {
                                e.title = {
                                    text: n
                                }
                            }
                            ));
                            break;
                        case "image":
                        case "icon":
                            const e = "image" === t ? s.oA.MAIN : s.oA.ICON;
                            i((t => null != t.img && t.img.type === e), (e => {
                                e.img = {
                                    url: n
                                }
                            }
                            ));
                            break;
                        default:
                            t in s.h0 && i((e => null != e.data && e.data.type === s.jO[s.h0[t]]), (e => {
                                e.data = {
                                    value: n
                                }
                            }
                            ))
                        }
                    }
                    )),
                    n
                }
                function N(e, t) {
                    const n = {}
                      , r = t?.assets || [];
                    n.clickUrl = e.link?.url,
                    n.privacyLink = e.privacy;
                    for (const t of e?.assets || []) {
                        const e = r.find((e => t.id === e.id));
                        t.title ? n.title = t.title.text : t.img ? n[e?.img?.type === s.oA.MAIN ? "image" : "icon"] = {
                            url: t.img.url,
                            width: t.img.w,
                            height: t.img.h
                        } : t.data && (n[p[m[e?.data?.type]]] = t.data.value)
                    }
                    n.impressionTrackers = [];
                    let i = [];
                    e.imptrackers && n.impressionTrackers.push(...e.imptrackers);
                    for (const t of e?.eventtrackers || [])
                        t.event === l.OA && t.method === l.Ni && n.impressionTrackers.push(t.url),
                        t.event === l.OA && t.method === l.fR && i.push(t.url);
                    return i = i.map((e => `<script async src="${e}"><\/script>`)),
                    e?.jstracker && i.push(e.jstracker),
                    i.length && (n.javascriptTrackers = i.join("\n")),
                    n
                }
                function q(e) {
                    var t = {};
                    for (var n in e)
                        t[e[n]] = n;
                    return t
                }
            }
            ,
            1e3: (e, t, n) => {
                n.d(t, {
                    Cf: () => a,
                    S3: () => i,
                    Tb: () => o,
                    WR: () => s,
                    e4: () => c,
                    pS: () => u,
                    qN: () => d,
                    yB: () => g,
                    zt: () => r
                });
                const r = ["request", "imp", "bidResponse", "response"]
                  , [i,o,s,a] = r
                  , [d,c] = ["default", "pbs"]
                  , l = new Set(r);
                const {registerOrtbProcessor: u, getProcessors: g} = function() {
                    const e = {};
                    return {
                        registerOrtbProcessor(t) {
                            let {type: n, name: i, fn: o, priority: s=0, dialects: a=[d]} = t;
                            if (!l.has(n))
                                throw new Error(`ORTB processor type must be one of: ${r.join(", ")}`);
                            a.forEach((t => {
                                e.hasOwnProperty(t) || (e[t] = {}),
                                e[t].hasOwnProperty(n) || (e[t][n] = {}),
                                e[t][n][i] = {
                                    priority: s,
                                    fn: o
                                }
                            }
                            ))
                        },
                        getProcessors: t => e[t] || {}
                    }
                }()
            }
            ,
            15901: (e, t, n) => {
                function r(e, t, n) {
                    return e && e.includes(t, n) || !1
                }
                function i(e, t, n) {
                    return e && e.find(t, n)
                }
                function o(e, t, n) {
                    return e && e.findIndex(t, n)
                }
                n.d(t, {
                    I6: () => i,
                    SL: () => o,
                    mK: () => r
                })
            }
            ,
            77332: (e, t, n) => {
                n.d(t, {
                    WH: () => Q,
                    Z: () => Z,
                    gH: () => te
                });
                var r = n(7873)
                  , i = n(91069)
                  , o = n(70433)
                  , s = n(63172)
                  , a = n(12449)
                  , d = n(78969)
                  , c = n(15901)
                  , l = n(29075)
                  , u = n(46031);
                const {REQUEST: g, RESPONSE: f, NATIVE: p, EVENT: m} = d.nl
                  , h = {
                    [g]: function(e, t, n) {
                        (0,
                        l.bw)({
                            renderFn(t) {
                                e(Object.assign({
                                    message: f,
                                    renderer: (0,
                                    u.kj)(n),
                                    rendererVersion: u.xh
                                }, t))
                            },
                            resizeFn: y(t.adId, n),
                            options: t.options,
                            adId: t.adId,
                            bidResponse: n
                        })
                    },
                    [m]: function(e, t, n) {
                        if (null == n)
                            return void (0,
                            i.logError)(`Cannot find ad '${t.adId}' for x-origin event request`);
                        if (n.status !== d.tl.RENDERED)
                            return void (0,
                            i.logWarn)(`Received x-origin event request without corresponding render request for ad '${n.adId}'`);
                        return (0,
                        l.Uc)(t, n)
                    }
                };
                function b() {
                    window.addEventListener("message", (function(e) {
                        !function(e) {
                            var t = e.message ? "message" : "data"
                              , n = {};
                            try {
                                n = JSON.parse(e[t])
                            } catch (e) {
                                return
                            }
                            if (n && n.adId && n.message && h.hasOwnProperty(n.message))
                                (0,
                                l.$A)(n.adId, n.message === d.nl.REQUEST).then((t => {
                                    var r, o;
                                    h[n.message]((r = n.adId,
                                    o = function(e) {
                                        return null == e.origin && 0 === e.ports.length ? function() {
                                            const e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                            throw (0,
                                            i.logError)(e),
                                            new Error(e)
                                        }
                                        : e.ports.length > 0 ? function(t) {
                                            e.ports[0].postMessage(JSON.stringify(t))
                                        }
                                        : function(t) {
                                            e.source.postMessage(JSON.stringify(t), e.origin)
                                        }
                                    }(e),
                                    function(e) {
                                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                                            n[i - 1] = arguments[i];
                                        return o(Object.assign({}, e, {
                                            adId: r
                                        }), ...n)
                                    }
                                    ), n, t)
                                }
                                ))
                        }(e)
                    }
                    ), !1)
                }
                function y(e, t) {
                    return function(n, r) {
                        !function(e) {
                            let {instl: t, adId: n, adUnitCode: r, width: o, height: s} = e;
                            if (t)
                                return;
                            function a(e) {
                                return e ? e + "px" : "100%"
                            }
                            function d(e) {
                                let t = l(n, r)
                                  , i = document.getElementById(t);
                                return i && i.querySelector(e)
                            }
                            function l(e, t) {
                                return (0,
                                i.isGptPubadsDefined)() ? u(e) : (0,
                                i.isApnGetTagDefined)() ? g(t) : t
                            }
                            function u(e) {
                                const t = (0,
                                c.I6)(window.googletag.pubads().getSlots(), (t => (0,
                                c.I6)(t.getTargetingKeys(), (n => (0,
                                c.mK)(t.getTargeting(n), e)))));
                                return t ? t.getSlotElementId() : null
                            }
                            function g(e) {
                                let t = window.apntag.getTag(e);
                                return t && t.targetId
                            }
                            ["div", "iframe"].forEach((e => {
                                let t = d(e + ':not([style*="display: none"])');
                                if (t) {
                                    let e = t.style;
                                    e.width = a(o),
                                    e.height = a(s)
                                } else
                                    (0,
                                    i.logError)(`Unable to locate matching page element for adUnitCode ${r}.  Can't resize it to ad's dimensions.  Please review setup.`)
                            }
                            ))
                        }({
                            ...t,
                            width: n,
                            height: r,
                            adId: e
                        })
                    }
                }
                Object.assign(h, {
                    [p]: function(e, t, n) {
                        if (null == n)
                            return void (0,
                            i.logError)(`Cannot find ad for x-origin event request: '${t.adId}'`);
                        switch (t.action) {
                        case "assetRequest":
                            (0,
                            l.Hh)(n, ( () => e((0,
                            a.IX)(t, n))));
                            break;
                        case "allAssetRequest":
                            (0,
                            l.Hh)(n, ( () => e((0,
                            a.yl)(t, n))));
                            break;
                        default:
                            (0,
                            l.vW)(t, n, {
                                resizeFn: y(t.adId, n)
                            }),
                            (0,
                            l.Pk)(n)
                        }
                    }
                });
                var v = n(38230)
                  , E = n(43272)
                  , A = n(67314)
                  , I = n(97779)
                  , w = n(16833)
                  , T = n(49164)
                  , C = n(93597)
                  , S = n(12938)
                  , O = n(11445)
                  , B = n(75023)
                  , R = n(16894)
                  , k = n(25555)
                  , U = n(70068)
                  , D = n(16916)
                  , _ = n(12713)
                  , j = n(63895);
                const $ = new Map([["format", e => Array.isArray(e) && e.length > 0 && e.every((e => "object" == typeof e))], ["w", i.isInteger], ["h", i.isInteger], ["btype", i.isArrayOfNums], ["battr", i.isArrayOfNums], ["pos", i.isInteger], ["mimes", e => Array.isArray(e) && e.length > 0 && e.every((e => "string" == typeof e))], ["topframe", e => [1, 0].includes(e)], ["expdir", i.isArrayOfNums], ["api", i.isArrayOfNums], ["id", i.isStr], ["vcm", e => [1, 0].includes(e)]]);
                var x = n(71371);
                function N(e, t) {
                    return function() {
                        if (document.prerendering && e()) {
                            const e = this
                              , n = Array.from(arguments);
                            return new Promise((r => {
                                document.addEventListener("prerenderingchange", ( () => {
                                    (0,
                                    i.logInfo)("Auctions were suspended while page was prerendering"),
                                    r(t.apply(e, n))
                                }
                                ), {
                                    once: !0
                                })
                            }
                            ))
                        }
                        return Promise.resolve(t.apply(this, arguments))
                    }
                }
                var q = n(57377);
                const W = (0,
                r.m)()
                  , {triggerUserSyncs: P} = v.zt
                  , {ADD_AD_UNITS: M, REQUEST_BIDS: G, SET_TARGETING: L} = d.qY
                  , F = {
                    bidWon: function(e) {
                        if (!A.n.getBidsRequested().map((e => e.bids.map((e => e.adUnitCode)))).reduce(i.flatten).filter(i.uniques).includes(e))
                            return void (0,
                            i.logError)('The "' + e + '" placement is not defined.');
                        return !0
                    }
                };
                function z(e, t) {
                    let n = [];
                    return (0,
                    i.isArray)(e) && (t ? e.length === t : e.length > 0) && (e.every((e => (0,
                    i.isArrayOfNums)(e, 2))) ? n = e : (0,
                    i.isArrayOfNums)(e, 2) && n.push(e)),
                    n
                }
                function H(e, t) {
                    const n = (0,
                    o.A)(e, `ortb2Imp.${t}`)
                      , r = (0,
                    o.A)(e, `mediaTypes.${t}`);
                    if (!n && !r)
                        return;
                    const a = {
                        [x.G_]: j.Zy,
                        [x.D4]: $
                    }[t];
                    a && [...a].forEach((n => {
                        let[r,a] = n;
                        const d = (0,
                        o.A)(e, `mediaTypes.${t}.${r}`)
                          , c = (0,
                        o.A)(e, `ortb2Imp.${t}.${r}`);
                        null == d && null == c || (null == d ? (0,
                        s.J)(e, `mediaTypes.${t}.${r}`, c) : null == c ? (0,
                        s.J)(e, `ortb2Imp.${t}.${r}`, d) : ((0,
                        i.logWarn)(`adUnit ${e.code}: specifies conflicting ortb2Imp.${t}.${r} and mediaTypes.${t}.${r}, the latter will be ignored`, e),
                        (0,
                        s.J)(e, `mediaTypes.${t}.${r}`, c)))
                    }
                    ))
                }
                function V(e) {
                    const t = (0,
                    i.deepClone)(e)
                      , n = t.mediaTypes.banner
                      , r = null == n.sizes ? null : z(n.sizes)
                      , o = e.ortb2Imp?.banner?.format ?? n?.format;
                    let a;
                    if (null != o) {
                        (0,
                        s.J)(t, "ortb2Imp.banner.format", o),
                        n.format = o;
                        try {
                            a = o.filter((t => {
                                let {w: n, h: r, wratio: o, hratio: s} = t;
                                return null != (n ?? r) && null != (o ?? s) ? ((0,
                                i.logWarn)("Ad unit banner.format specifies both w/h and wratio/hratio", e),
                                !1) : null != n && null != r || null != o && null != s
                            }
                            )).map((e => {
                                let {w: t, h: n, wratio: r, hratio: i} = e;
                                return [t ?? r, n ?? i]
                            }
                            ))
                        } catch (t) {
                            (0,
                            i.logError)(`Invalid format definition on ad unit ${e.code}`, o)
                        }
                        null == a || null == r || (0,
                        i.deepEqual)(r, a) || (0,
                        i.logWarn)(`Ad unit ${e.code} has conflicting sizes and format definitions`, e)
                    }
                    const d = a ?? r ?? []
                      , c = e.ortb2Imp?.banner?.expdir ?? n.expdir;
                    return null != c && (n.expdir = c,
                    (0,
                    s.J)(t, "ortb2Imp.banner.expdir", c)),
                    d.length > 0 ? (n.sizes = d,
                    t.sizes = d) : ((0,
                    i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),
                    delete t.mediaTypes.banner),
                    H(t, "banner"),
                    t
                }
                function K(e) {
                    const t = (0,
                    i.deepClone)(e)
                      , n = t.mediaTypes.video;
                    if (n.playerSize) {
                        let e = "number" == typeof n.playerSize[0] ? 2 : 1;
                        const r = z(n.playerSize, e);
                        r.length > 0 ? (2 === e && (0,
                        i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),
                        n.playerSize = r,
                        t.sizes = r) : ((0,
                        i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
                        delete t.mediaTypes.video.playerSize)
                    }
                    return (0,
                    j.aP)(t),
                    H(t, "video"),
                    t
                }
                function J(e) {
                    function t(t) {
                        return (0,
                        i.logError)(`Error in adUnit "${e.code}": ${t}. Removing native request from ad unit`, e),
                        delete r.mediaTypes.native,
                        r
                    }
                    function n(e) {
                        for (const t of ["sendTargetingKeys", "types"])
                            if (o.hasOwnProperty(t)) {
                                const n = e(t);
                                if (n)
                                    return n
                            }
                    }
                    const r = (0,
                    i.deepClone)(e)
                      , o = r.mediaTypes.native;
                    if (o.ortb) {
                        if (o.ortb.assets?.some((e => !(0,
                        i.isNumber)(e.id) || e.id < 0 || e.id % 1 != 0)))
                            return t("native asset ID must be a nonnegative integer");
                        if (n((e => t(`ORTB native requests cannot specify "${e}"`))))
                            return r;
                        const e = Object.keys(d.x5).filter((e => d.x5[e].includes("hb_native_")))
                          , s = Object.keys(o).filter((t => e.includes(t)));
                        s.length > 0 && ((0,
                        i.logError)(`when using native OpenRTB format, you cannot use legacy native properties. Deleting ${s} keys from request.`),
                        s.forEach((e => delete r.mediaTypes.native[e])))
                    } else
                        n((e => `mediaTypes.native.${e} is deprecated, consider using native ORTB instead`));
                    return o.image && o.image.sizes && !Array.isArray(o.image.sizes) && ((0,
                    i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
                    delete r.mediaTypes.native.image.sizes),
                    o.image && o.image.aspect_ratios && !Array.isArray(o.image.aspect_ratios) && ((0,
                    i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
                    delete r.mediaTypes.native.image.aspect_ratios),
                    o.icon && o.icon.sizes && !Array.isArray(o.icon.sizes) && ((0,
                    i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
                    delete r.mediaTypes.native.icon.sizes),
                    r
                }
                function Y(e, t) {
                    let n = e?.mediaTypes?.[t]?.pos;
                    if (!(0,
                    i.isNumber)(n) || isNaN(n) || !isFinite(n)) {
                        let n = `Value of property 'pos' on ad unit ${e.code} should be of type: Number`;
                        (0,
                        i.logWarn)(n),
                        delete e.mediaTypes[t].pos
                    }
                    return e
                }
                function X(e) {
                    const t = t => `adUnit.code '${e.code}' ${t}`
                      , n = e.mediaTypes
                      , r = e.bids;
                    return null == r || (0,
                    i.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0,
                    i.logError)(t("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),
                    null) : n && 0 !== Object.keys(n).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
                        bidder: null
                    }],
                    (0,
                    i.logMessage)(t("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),
                    e) : ((0,
                    i.logError)(t("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),
                    null) : ((0,
                    i.logError)(t("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),
                    null)
                }
                (0,
                T.L6)(),
                W.bidderSettings = W.bidderSettings || {},
                W.libLoaded = !0,
                W.version = "v9.44.1",
                (0,
                i.logInfo)("Prebid.js v9.44.1 loaded"),
                W.installedModules = W.installedModules || [],
                W.adUnits = W.adUnits || [],
                W.triggerUserSyncs = P;
                const Q = {
                    validateAdUnit: X,
                    validateBannerMediaType: V,
                    validateSizes: z
                };
                Object.assign(Q, {
                    validateNativeMediaType: J
                }),
                Object.assign(Q, {
                    validateVideoMediaType: K
                });
                const Z = (0,
                w.A_)("sync", (function(e) {
                    const t = [];
                    return e.forEach((e => {
                        if (null == (e = X(e)))
                            return;
                        const n = e.mediaTypes;
                        let r, i, o;
                        n.banner && (r = V(e),
                        n.banner.hasOwnProperty("pos") && (r = Y(r, "banner"))),
                        n.video && (i = K(r || e),
                        n.video.hasOwnProperty("pos") && (i = Y(i, "video"))),
                        n.native && (o = J(i || (r || e)));
                        const s = Object.assign({}, r, i, o);
                        t.push(s)
                    }
                    )),
                    t
                }
                ), "checkAdUnitSetup");
                function ee(e) {
                    const t = A.n[e]().filter((e => A.n.getAdUnitCodes().includes(e.adUnitCode)))
                      , n = A.n.getLastAuctionId();
                    return t.map((e => e.adUnitCode)).filter(i.uniques).map((e => t.filter((t => t.auctionId === n && t.adUnitCode === e)))).filter((e => e && e[0] && e[0].adUnitCode)).map((e => ({
                        [e[0].adUnitCode]: {
                            bids: e
                        }
                    }))).reduce(( (e, t) => Object.assign(e, t)), {})
                }
                W.getAdserverTargetingForAdUnitCodeStr = function(e) {
                    if ((0,
                    i.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments),
                    e) {
                        var t = W.getAdserverTargetingForAdUnitCode(e);
                        return (0,
                        i.transformAdServerTargetingObj)(t)
                    }
                    (0,
                    i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                }
                ,
                W.getHighestUnusedBidResponseForAdUnitCode = function(e) {
                    if (e) {
                        const t = A.n.getAllBidsForAdUnitCode(e).filter(I.Yl);
                        return t.length ? t.reduce(_.Vk) : {}
                    }
                    (0,
                    i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
                }
                ,
                W.getAdserverTargetingForAdUnitCode = function(e) {
                    return W.getAdserverTargeting(e)[e]
                }
                ,
                W.getAdserverTargeting = function(e) {
                    return (0,
                    i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments),
                    I.iS.getAllTargeting(e)
                }
                ,
                W.getConsentMetadata = function() {
                    return (0,
                    i.logInfo)("Invoking pbjs.getConsentMetadata"),
                    D.SL.getConsentMeta()
                }
                ,
                W.getNoBids = function() {
                    return (0,
                    i.logInfo)("Invoking pbjs.getNoBids", arguments),
                    ee("getNoBids")
                }
                ,
                W.getNoBidsForAdUnitCode = function(e) {
                    return {
                        bids: A.n.getNoBids().filter((t => t.adUnitCode === e))
                    }
                }
                ,
                W.getBidResponses = function() {
                    return (0,
                    i.logInfo)("Invoking pbjs.getBidResponses", arguments),
                    ee("getBidsReceived")
                }
                ,
                W.getBidResponsesForAdUnitCode = function(e) {
                    return {
                        bids: A.n.getBidsReceived().filter((t => t.adUnitCode === e))
                    }
                }
                ,
                W.setTargetingForGPTAsync = function(e, t) {
                    (0,
                    i.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments),
                    (0,
                    i.isGptPubadsDefined)() ? I.iS.setTargetingForGPT(e, t) : (0,
                    i.logError)("window.googletag is not defined on the page")
                }
                ,
                W.setTargetingForAst = function(e) {
                    (0,
                    i.logInfo)("Invoking pbjs.setTargetingForAn", arguments),
                    I.iS.isApntagDefined() ? (I.iS.setTargetingForAst(e),
                    B.emit(L, I.iS.getAllTargeting())) : (0,
                    i.logError)("window.apntag is not defined on the page")
                }
                ,
                W.renderAd = (0,
                w.A_)("async", (function(e, t, n) {
                    (0,
                    i.logInfo)("Invoking pbjs.renderAd", arguments),
                    (0,
                    i.logMessage)("Calling renderAd with adId :" + t),
                    (0,
                    l.BS)(e, t, n)
                }
                )),
                W.removeAdUnit = function(e) {
                    if ((0,
                    i.logInfo)("Invoking pbjs.removeAdUnit", arguments),
                    !e)
                        return void (W.adUnits = []);
                    let t;
                    t = (0,
                    i.isArray)(e) ? e : [e],
                    t.forEach((e => {
                        for (let t = W.adUnits.length - 1; t >= 0; t--)
                            W.adUnits[t].code === e && W.adUnits.splice(t, 1)
                    }
                    ))
                }
                ,
                W.requestBids = function() {
                    const e = (0,
                    w.A_)("async", (function() {
                        let {bidsBackHandler: e, timeout: t, adUnits: n, adUnitCodes: r, labels: o, auctionId: s, ttlBuffer: a, ortb2: d, metrics: l, defer: u} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        B.emit(G);
                        const g = t || E.$W.getConfig("bidderTimeout");
                        (0,
                        i.logInfo)("Invoking pbjs.requestBids", arguments),
                        null == r || Array.isArray(r) || (r = [r]),
                        r && r.length ? n = n.filter((e => (0,
                        c.mK)(r, e.code))) : r = n && n.map((e => e.code)),
                        r = r.filter(i.uniques);
                        const f = {
                            global: (0,
                            i.mergeDeep)({}, E.$W.getAnyConfig("ortb2") || {}, d || {}),
                            bidder: Object.fromEntries(Object.entries(E.$W.getBidderConfig()).map((e => {
                                let[t,n] = e;
                                return [t, (0,
                                i.deepClone)(n.ortb2)]
                            }
                            )).filter((e => {
                                let[t,n] = e;
                                return null != n
                            }
                            )))
                        };
                        return (0,
                        U.w)(k.U9.resolve(f.global)).then((t => (f.global = t,
                        te({
                            bidsBackHandler: e,
                            timeout: g,
                            adUnits: n,
                            adUnitCodes: r,
                            labels: o,
                            auctionId: s,
                            ttlBuffer: a,
                            ortb2Fragments: f,
                            metrics: l,
                            defer: u
                        }))))
                    }
                    ), "requestBids");
                    return (0,
                    w.Y6)(e, N(( () => !E.$W.getConfig("allowPrerendering")), (function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = t.adUnits || W.adUnits;
                        return t.adUnits = (0,
                        i.isArray)(n) ? n.slice() : [n],
                        t.metrics = (0,
                        R.K7)(),
                        t.metrics.checkpoint("requestBids"),
                        t.defer = (0,
                        k.v6)({
                            promiseFactory: e => new Promise(e)
                        }),
                        e.call(this, t),
                        t.defer.promise
                    }
                    )))
                }();
                const te = (0,
                w.A_)("async", (function() {
                    let {bidsBackHandler: e, timeout: t, adUnits: n, ttlBuffer: r, adUnitCodes: o, labels: a, auctionId: d, ortb2Fragments: l, metrics: u, defer: g} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const f = (0,
                    O.pX)(E.$W.getConfig("s2sConfig") || []);
                    function p(t, n, r) {
                        if ("function" == typeof e)
                            try {
                                e(t, n, r)
                            } catch (e) {
                                (0,
                                i.logError)("Error executing bidsBackHandler", null, e)
                            }
                        g.resolve({
                            bids: t,
                            timedOut: n,
                            auctionId: r
                        })
                    }
                    !function(e) {
                        e.forEach((e => (0,
                        j.V0)(e)))
                    }(n),
                    n = (0,
                    R.BO)(u).measureTime("requestBids.validate", ( () => Z(n)));
                    const m = {};
                    if (n.forEach((e => {
                        const t = Object.keys(e.mediaTypes || {
                            banner: "banner"
                        })
                          , n = e.bids.map((e => e.bidder))
                          , o = O.Ay.bidderRegistry
                          , s = n.filter((e => !f.has(e)));
                        e.adUnitId = (0,
                        i.generateUUID)();
                        const a = e.ortb2Imp?.ext?.tid;
                        a && (m.hasOwnProperty(e.code) ? (0,
                        i.logWarn)(`Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '${e.code}'`) : m[e.code] = a),
                        null == r || e.hasOwnProperty("ttlBuffer") || (e.ttlBuffer = r),
                        s.forEach((n => {
                            const r = o[n]
                              , s = r && r.getSpec && r.getSpec()
                              , a = s && s.supportedMediaTypes || ["banner"];
                            t.some((e => (0,
                            c.mK)(a, e))) || ((0,
                            i.logWarn)((0,
                            i.unsupportedBidderMessage)(e, n)),
                            e.bids = e.bids.filter((e => e.bidder !== n)))
                        }
                        ))
                    }
                    )),
                    n && 0 !== n.length) {
                        n.forEach((e => {
                            const t = e.ortb2Imp?.ext?.tid || m[e.code] || (0,
                            i.generateUUID)();
                            m.hasOwnProperty(e.code) || (m[e.code] = t),
                            e.transactionId = t,
                            (0,
                            s.J)(e, "ortb2Imp.ext.tid", t)
                        }
                        ));
                        const e = A.n.createAuction({
                            adUnits: n,
                            adUnitCodes: o,
                            callback: p,
                            cbTimeout: t,
                            labels: a,
                            auctionId: d,
                            ortb2Fragments: l,
                            metrics: u
                        });
                        let r = n.length;
                        r > 15 && (0,
                        i.logInfo)(`Current auction ${e.getAuctionId()} contains ${r} adUnits.`, n),
                        o.forEach((t => I.iS.setLatestAuctionForAdUnit(t, e.getAuctionId()))),
                        e.callBids()
                    } else
                        (0,
                        i.logMessage)("No adUnits configured. No bids requested."),
                        p()
                }
                ), "startAuction");
                W.requestBids.before((function(e, t) {
                    function n(e) {
                        for (var t; t = e.shift(); )
                            t()
                    }
                    n(S.s0),
                    n(ne),
                    e.call(this, t)
                }
                ), 49),
                W.addAdUnits = function(e) {
                    (0,
                    i.logInfo)("Invoking pbjs.addAdUnits", arguments),
                    W.adUnits.push.apply(W.adUnits, (0,
                    i.isArray)(e) ? e : [e]),
                    B.emit(M)
                }
                ,
                W.onEvent = function(e, t, n) {
                    (0,
                    i.logInfo)("Invoking pbjs.onEvent", arguments),
                    (0,
                    i.isFn)(t) ? !n || F[e].call(null, n) ? B.on(e, t, n) : (0,
                    i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : (0,
                    i.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
                }
                ,
                W.offEvent = function(e, t, n) {
                    (0,
                    i.logInfo)("Invoking pbjs.offEvent", arguments),
                    n && !F[e].call(null, n) || B.off(e, t, n)
                }
                ,
                W.getEvents = function() {
                    return (0,
                    i.logInfo)("Invoking pbjs.getEvents"),
                    B.getEvents()
                }
                ,
                W.registerBidAdapter = function(e, t, n) {
                    (0,
                    i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
                    try {
                        const r = n ? (0,
                        q.xb)(n) : e();
                        O.Ay.registerBidAdapter(r, t)
                    } catch (e) {
                        (0,
                        i.logError)("Error registering bidder adapter : " + e.message)
                    }
                }
                ,
                W.registerAnalyticsAdapter = function(e) {
                    (0,
                    i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
                    try {
                        O.Ay.registerAnalyticsAdapter(e)
                    } catch (e) {
                        (0,
                        i.logError)("Error registering analytics adapter : " + e.message)
                    }
                }
                ,
                W.createBid = function(e) {
                    return (0,
                    i.logInfo)("Invoking pbjs.createBid", arguments),
                    (0,
                    C.O)(e)
                }
                ;
                const ne = []
                  , re = (0,
                w.A_)("async", (function(e) {
                    e && !(0,
                    i.isEmpty)(e) ? ((0,
                    i.logInfo)("Invoking pbjs.enableAnalytics for: ", e),
                    O.Ay.enableAnalytics(e)) : (0,
                    i.logError)("pbjs.enableAnalytics should be called with option {}")
                }
                ), "enableAnalyticsCb");
                function ie(e) {
                    if ("function" == typeof e)
                        try {
                            e.call()
                        } catch (e) {
                            (0,
                            i.logError)("Error processing command :", e.message, e.stack)
                        }
                    else
                        (0,
                        i.logError)("Commands written into pbjs.cmd.push must be wrapped in a function")
                }
                function oe(e) {
                    e.forEach((function(e) {
                        if (void 0 === e.called)
                            try {
                                e.call(),
                                e.called = !0
                            } catch (e) {
                                (0,
                                i.logError)("Error processing command :", "prebid.js", e)
                            }
                    }
                    ))
                }
                W.enableAnalytics = function(e) {
                    ne.push(re.bind(this, e))
                }
                ,
                W.aliasBidder = function(e, t, n) {
                    (0,
                    i.logInfo)("Invoking pbjs.aliasBidder", arguments),
                    e && t ? O.Ay.aliasBidAdapter(e, t, n) : (0,
                    i.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                }
                ,
                W.aliasRegistry = O.Ay.aliasRegistry,
                E.$W.getConfig("aliasRegistry", (e => {
                    "private" === e.aliasRegistry && delete W.aliasRegistry
                }
                )),
                W.getAllWinningBids = function() {
                    return A.n.getAllWinningBids()
                }
                ,
                W.getAllPrebidWinningBids = function() {
                    return A.n.getBidsReceived().filter((e => e.status === d.tl.BID_TARGETING_SET))
                }
                ,
                W.getHighestCpmBids = function(e) {
                    return I.iS.getWinningBids(e)
                }
                ,
                W.clearAllAuctions = function() {
                    A.n.clearAllAuctions()
                }
                ,
                W.markWinningBidAsUsed = function(e) {
                    let t, {adId: n, adUnitCode: r, analytics: o=!1, events: s=!1} = e;
                    r && null == n ? t = I.iS.getWinningBids(r) : n ? t = A.n.getBidsReceived().filter((e => e.adId === n)) : (0,
                    i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),
                    t.length > 0 && (o || s ? (0,
                    l.n6)(t[0]) : A.n.addWinningBid(t[0]),
                    (0,
                    l.qn)(t[0]))
                }
                ,
                W.getConfig = E.$W.getAnyConfig,
                W.readConfig = E.$W.readAnyConfig,
                W.mergeConfig = E.$W.mergeConfig,
                W.mergeBidderConfig = E.$W.mergeBidderConfig,
                W.setConfig = E.$W.setConfig,
                W.setBidderConfig = E.$W.setBidderConfig,
                W.que.push(( () => b())),
                W.processQueue = N(( () => (0,
                r.m)().delayPrerendering), (function() {
                    W.que.push = W.cmd.push = ie,
                    (0,
                    l.XO)(),
                    w.A_.ready(),
                    oe(W.que),
                    oe(W.cmd)
                }
                )),
                W.triggerBilling = e => {
                    let {adId: t, adUnitCode: n} = e;
                    A.n.getAllWinningBids().filter((e => e.adId === t || null == t && e.adUnitCode === n)).forEach((e => {
                        O.Ay.triggerBilling(e),
                        (0,
                        l.vB)(e)
                    }
                    ))
                }
            }
            ,
            7873: (e, t, n) => {
                n.d(t, {
                    E: () => s,
                    m: () => o
                });
                const r = window
                  , i = r.pbjs = r.pbjs || {};
                function o() {
                    return i
                }
                function s(e) {
                    i.installedModules.push(e)
                }
                i.cmd = i.cmd || [],
                i.que = i.que || [],
                r === window && (r._pbjsGlobals = r._pbjsGlobals || [],
                r._pbjsGlobals.push("pbjs"))
            }
            ,
            27934: (e, t, n) => {
                n.d(t, {
                    EN: () => d,
                    gR: () => s
                });
                var r = n(43272)
                  , i = n(91069);
                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    if (!e)
                        return e;
                    if (/\w+:\/\//.exec(e))
                        return e;
                    let n = t.location.protocol;
                    try {
                        n = t.top.location.protocol
                    } catch (e) {}
                    return /^\/\//.exec(e) ? n + e : `${n}//${e}`
                }
                function s(e) {
                    let {noLeadingWww: t=!1, noPort: n=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        e = new URL(o(e))
                    } catch (e) {
                        return
                    }
                    return e = n ? e.hostname : e.host,
                    t && e.startsWith("www.") && (e = e.substring(4)),
                    e
                }
                function a(e) {
                    try {
                        const t = e.querySelector("link[rel='canonical']");
                        if (null !== t)
                            return t.href
                    } catch (e) {}
                    return null
                }
                const d = function(e) {
                    let t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    return i.top !== i ? e : function() {
                        const o = a(i.document)
                          , s = i.location.href;
                        return t === o && s === n || (t = o,
                        n = s,
                        r = e()),
                        r
                    }
                }((c = window,
                function() {
                    const e = []
                      , t = function(e) {
                        try {
                            if (!e.location.ancestorOrigins)
                                return;
                            return e.location.ancestorOrigins
                        } catch (e) {}
                    }(c)
                      , n = r.$W.getConfig("maxNestedIframes");
                    let d, l, u, g, f = !1, p = 0, m = !1, h = !1, b = !1;
                    do {
                        const n = d
                          , r = h;
                        let o, s = !1, g = null;
                        h = !1,
                        d = d ? d.parent : c;
                        try {
                            o = d.location.href || null
                        } catch (e) {
                            s = !0
                        }
                        if (s)
                            if (r) {
                                const e = n.context;
                                try {
                                    g = e.sourceUrl,
                                    l = g,
                                    b = !0,
                                    m = !0,
                                    d === c.top && (f = !0),
                                    e.canonicalUrl && (u = e.canonicalUrl)
                                } catch (e) {}
                            } else {
                                (0,
                                i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                try {
                                    const e = n.document.referrer;
                                    e && (g = e,
                                    d === c.top && (f = !0))
                                } catch (e) {}
                                !g && t && t[p - 1] && (g = t[p - 1],
                                d === c.top && (b = !0)),
                                g && !m && (l = g)
                            }
                        else {
                            if (o && (g = o,
                            l = g,
                            m = !1,
                            d === c.top)) {
                                f = !0;
                                const e = a(d.document);
                                e && (u = e)
                            }
                            d.context && d.context.sourceUrl && (h = !0)
                        }
                        e.push(g),
                        p++
                    } while (d !== c.top && p < n);
                    e.reverse();
                    try {
                        g = c.top.document.referrer
                    } catch (e) {}
                    const y = f || b ? l : null
                      , v = r.$W.getConfig("pageUrl") || u || null;
                    let E = r.$W.getConfig("pageUrl") || y || o(v, c);
                    return y && y.indexOf("?") > -1 && -1 === E.indexOf("?") && (E = `${E}${y.substring(y.indexOf("?"))}`),
                    {
                        reachedTop: f,
                        isAmp: m,
                        numIframes: p - 1,
                        stack: e,
                        topmostLocation: l || null,
                        location: y,
                        canonicalUrl: v,
                        page: E,
                        domain: s(E) || null,
                        ref: g || null,
                        legacy: {
                            reachedTop: f,
                            isAmp: m,
                            numIframes: p - 1,
                            stack: e,
                            referer: l || null,
                            canonicalUrl: v
                        }
                    }
                }
                ));
                var c
            }
            ,
            12938: (e, t, n) => {
                n.d(t, {
                    CK: () => b,
                    X0: () => f,
                    qk: () => g,
                    s0: () => p,
                    vM: () => h
                });
                var r = n(91069)
                  , i = n(12693)
                  , o = n(45569)
                  , s = n(95139)
                  , a = n(2604)
                  , d = n(76811)
                  , c = n(43272)
                  , l = n(11445)
                  , u = n(83441);
                const g = "html5"
                  , f = "cookie";
                let p = [];
                function m() {
                    let {moduleName: e, moduleType: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , {isAllowed: n=s.io} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    function i(r, i) {
                        let s = e;
                        const g = c.$W.getCurrentBidder();
                        g && t === o.tW && l.Ay.aliasRegistry[g] === e && (s = g);
                        return r({
                            valid: n(d.Ue, (0,
                            u.s)(t, s, {
                                [a.Zw]: i
                            }))
                        })
                    }
                    function m(e, t, n) {
                        if (!n || "function" != typeof n)
                            return i(e, t);
                        p.push((function() {
                            let r = i(e, t);
                            n(r)
                        }
                        ))
                    }
                    function h(e) {
                        const t = e.charAt(0).toUpperCase() + e.substring(1)
                          , n = () => window[e]
                          , i = function(t) {
                            return m((function(t) {
                                if (t && t.valid)
                                    try {
                                        return !!n()
                                    } catch (t) {
                                        (0,
                                        r.logError)(`${e} api disabled`)
                                    }
                                return !1
                            }
                            ), g, t)
                        };
                        return {
                            [`has${t}`]: i,
                            [`${e}IsEnabled`]: e => m((function(e) {
                                if (e && e.valid)
                                    try {
                                        return n().setItem("prebid.cookieTest", "1"),
                                        "1" === n().getItem("prebid.cookieTest")
                                    } catch (e) {} finally {
                                        try {
                                            n().removeItem("prebid.cookieTest")
                                        } catch (e) {}
                                    }
                                return !1
                            }
                            ), g, e),
                            [`setDataIn${t}`]: (e, t, r) => m((function(r) {
                                r && r.valid && i() && n().setItem(e, t)
                            }
                            ), g, r),
                            [`getDataFrom${t}`]: (e, t) => m((function(t) {
                                return t && t.valid && i() ? n().getItem(e) : null
                            }
                            ), g, t),
                            [`removeDataFrom${t}`]: (e, t) => m((function(t) {
                                t && t.valid && i() && n().removeItem(e)
                            }
                            ), g, t)
                        }
                    }
                    return {
                        setCookie: function(e, t, n, r, i, o) {
                            return m((function(o) {
                                if (o && o.valid) {
                                    const o = i && "" !== i ? ` ;domain=${encodeURIComponent(i)}` : ""
                                      , s = n && "" !== n ? ` ;expires=${n}` : ""
                                      , a = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                                    document.cookie = `${e}=${encodeURIComponent(t)}${s}; path=/${o}${r ? `; SameSite=${r}` : ""}${a}`
                                }
                            }
                            ), f, o)
                        },
                        getCookie: function(e, t) {
                            return m((function(t) {
                                if (t && t.valid) {
                                    let t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                    return t ? decodeURIComponent(t[2]) : null
                                }
                                return null
                            }
                            ), f, t)
                        },
                        cookiesAreEnabled: function(e) {
                            return m((function(e) {
                                return !(!e || !e.valid) && (0,
                                r.checkCookieSupport)()
                            }
                            ), f, e)
                        },
                        ...h("localStorage"),
                        ...h("sessionStorage"),
                        findSimilarCookies: function(e, t) {
                            return m((function(t) {
                                if (t && t.valid) {
                                    const t = [];
                                    if ((0,
                                    r.hasDeviceAccess)()) {
                                        const n = document.cookie.split(";");
                                        for (; n.length; ) {
                                            const r = n.pop();
                                            let i = r.indexOf("=");
                                            i = i < 0 ? r.length : i;
                                            decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(r.slice(i + 1)))
                                        }
                                    }
                                    return t
                                }
                            }
                            ), f, t)
                        }
                    }
                }
                function h() {
                    let {moduleType: e, moduleName: t, bidderCode: n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    function r() {
                        throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")
                    }
                    return n ? ((e && e !== o.tW || t) && r(),
                    e = o.tW,
                    t = n) : t && e || r(),
                    m({
                        moduleType: e,
                        moduleName: t
                    })
                }
                function b(e) {
                    return m({
                        moduleName: e,
                        moduleType: o.tp
                    })
                }
                (0,
                s.qB)(d.Ue, "deviceAccess config", (function() {
                    if (!(0,
                    r.hasDeviceAccess)())
                        return {
                            allow: !1
                        }
                }
                )),
                (0,
                s.qB)(d.Ue, "bidderSettings.*.storageAllowed", (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.u;
                    if (e[a.Dk] !== o.tW)
                        return;
                    let n = t.get(e[a.q7], "storageAllowed");
                    if (n && !0 !== n) {
                        const t = e[a.Zw];
                        n = Array.isArray(n) ? n.some((e => e === t)) : n === t
                    } else
                        n = !!n;
                    return n ? void 0 : {
                        allow: n
                    }
                }
                ))
            }
            ,
            97779: (e, t, n) => {
                n.d(t, {
                    Jp: () => C,
                    ME: () => T,
                    Yl: () => w,
                    iS: () => O,
                    m2: () => S,
                    uW: () => I
                });
                var r = n(67314)
                  , i = n(27863)
                  , o = n(12693)
                  , s = n(43272)
                  , a = n(78969)
                  , d = n(75023)
                  , c = n(16833)
                  , l = n(71371)
                  , u = n(12449)
                  , g = n(15901)
                  , f = n(91069)
                  , p = n(70433)
                  , m = n(12713)
                  , h = [];
                const b = 20
                  , y = "targetingControls.allowTargetingKeys"
                  , v = "targetingControls.addTargetingKeys"
                  , E = `Only one of "${y}" or "${v}" can be set`
                  , A = Object.keys(a.xS).map((e => a.xS[e]));
                let I = {
                    isActualBid: e => e.getStatusCode() === a.XQ.GOOD,
                    isBidNotExpired: e => e.responseTimestamp + 1e3 * (0,
                    i.cT)(e) > (0,
                    f.timestamp)(),
                    isUnusedBid: e => e && (e.status && !(0,
                    g.mK)([a.tl.RENDERED], e.status) || !e.status)
                };
                function w(e) {
                    return !Object.values(I).some((t => !t(e)))
                }
                const T = (0,
                c.A_)("sync", (function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.sortByHighestCpm;
                    if (!r) {
                        const r = []
                          , o = s.$W.getConfig("sendBidsControl.dealPrioritization");
                        let a = (0,
                        f.groupBy)(e, "adUnitCode");
                        return Object.keys(a).forEach((e => {
                            let s = []
                              , d = (0,
                            f.groupBy)(a[e], "bidderCode");
                            Object.keys(d).forEach((e => {
                                s.push(d[e].reduce(t))
                            }
                            )),
                            n ? (s = o ? s.sort(C(!0)) : s.sort(( (e, t) => t.cpm - e.cpm)),
                            r.push(...s.slice(0, n))) : (s = s.sort(i),
                            r.push(...s))
                        }
                        )),
                        r
                    }
                    return e
                }
                ));
                function C() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(t, n) {
                        return void 0 !== t.adserverTargeting.hb_deal && void 0 === n.adserverTargeting.hb_deal ? -1 : void 0 === t.adserverTargeting.hb_deal && void 0 !== n.adserverTargeting.hb_deal ? 1 : e ? n.cpm - t.cpm : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb
                    }
                }
                function S(e, t) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => window.googletag.pubads().getSlots())().reduce(( (e, n) => {
                        const r = (0,
                        f.isFn)(t) && t(n);
                        return Object.keys(e).filter((0,
                        f.isFn)(r) ? r : (0,
                        f.isAdUnitCodeMatchingSlot)(n)).forEach((t => e[t].push(n))),
                        e
                    }
                    ), Object.fromEntries(e.map((e => [e, []]))))
                }
                const O = function(e) {
                    let t = {}
                      , n = {};
                    function r(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        const r = A.concat(u.Nh)
                          , i = s.$W.getConfig("targetingControls.allowSendAllBidsTargetingKeys")
                          , o = i ? i.map((e => a.xS[e])) : r;
                        return e.reduce(( (e, i) => {
                            if (t || n && i.dealId) {
                                const t = function(e, t) {
                                    return t.reduce(( (t, n) => (e.adserverTargeting[n] && t.push({
                                        [`${n}_${e.bidderCode}`.substring(0, 20)]: [e.adserverTargeting[n]]
                                    }),
                                    t)), [])
                                }(i, r.filter((e => void 0 !== i.adserverTargeting[e] && (n || -1 !== o.indexOf(e)))));
                                t && e.push({
                                    [i.adUnitCode]: t
                                })
                            }
                            return e
                        }
                        ), [])
                    }
                    function i(t) {
                        return "string" == typeof t ? [t] : (0,
                        f.isArray)(t) ? t : e.getAdUnitCodes() || []
                    }
                    function I() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Bq
                          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
                          , i = e.getBidsReceived().reduce(( (e, t) => {
                            const r = s.$W.getConfig("useBidCache")
                              , i = s.$W.getConfig("bidCacheFilterFunction")
                              , o = n[t.adUnitCode] === t.auctionId
                              , a = !(r && !o && "function" == typeof i) || !!i(t);
                            return (r || o) && a && (0,
                            p.A)(t, "video.context") !== l.LM && w(t) && (t.latestTargetedAuctionId = n[t.adUnitCode],
                            e.push(t)),
                            e
                        }
                        ), []);
                        return T(i, t, void 0, void 0, void 0, r)
                    }
                    function O(e, n) {
                        let r = t.getWinningBids(n, e)
                          , i = B();
                        return r = r.map((e => ({
                            [e.adUnitCode]: Object.keys(e.adserverTargeting).filter((t => void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(t))).reduce(( (t, n) => {
                                const r = [e.adserverTargeting[n]]
                                  , i = {
                                    [n.substring(0, b)]: r
                                };
                                if (n === a.xS.DEAL) {
                                    const o = `${n}_${e.bidderCode}`.substring(0, b)
                                      , s = {
                                        [o]: r
                                    };
                                    return [...t, i, s]
                                }
                                return [...t, i]
                            }
                            ), [])
                        }))),
                        r
                    }
                    function B() {
                        return e.getStandardBidderAdServerTargeting().map((e => e.key)).concat(A).filter(f.uniques)
                    }
                    return t.setLatestAuctionForAdUnit = function(e, t) {
                        n[e] = t
                    }
                    ,
                    t.resetPresetTargeting = function(e, t) {
                        if ((0,
                        f.isGptPubadsDefined)()) {
                            const n = i(e);
                            Object.values(S(n, t)).forEach((e => {
                                e.forEach((e => {
                                    !function(e) {
                                        h.forEach((t => {
                                            e.getTargeting(t) && e.clearTargeting(t)
                                        }
                                        ))
                                    }(e)
                                }
                                ))
                            }
                            ))
                        }
                    }
                    ,
                    t.resetPresetTargetingAST = function(e) {
                        i(e).forEach((function(e) {
                            const t = window.apntag.getTag(e);
                            if (t && t.keywords) {
                                const n = Object.keys(t.keywords)
                                  , r = {};
                                n.forEach((e => {
                                    (0,
                                    g.mK)(h, e.toLowerCase()) || (r[e] = t.keywords[e])
                                }
                                )),
                                window.apntag.modifyTag(e, {
                                    keywords: r
                                })
                            }
                        }
                        ))
                    }
                    ,
                    t.getAllTargeting = function(t, n, d) {
                        let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.Vk
                          , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.sortByHighestCpm;
                        d ||= I(c, l);
                        const p = i(t)
                          , A = s.$W.getConfig("enableSendAllBids")
                          , w = s.$W.getConfig("sendBidsControl.bidLimit")
                          , S = A && (n || w) || 0
                          , {customKeysByUnit: R, filteredBids: k} = function(e, t) {
                            const n = []
                              , r = {}
                              , i = s.$W.getConfig("targetingControls.alwaysIncludeDeals");
                            return t.forEach((t => {
                                const s = (0,
                                g.mK)(e, t.adUnitCode)
                                  , a = !0 === o.u.get(t.bidderCode, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0
                                  , d = i && t.dealId;
                                s && (d || a) && (n.push(t),
                                Object.keys(t.adserverTargeting).filter(function() {
                                    let e = B();
                                    e = e.concat(u.Nh);
                                    return function(t) {
                                        return -1 === e.indexOf(t)
                                    }
                                }()).forEach((e => {
                                    const n = e.substring(0, b)
                                      , i = r[t.adUnitCode] || {}
                                      , o = [t.adserverTargeting[e]];
                                    i[n] ? i[n] = i[n].concat(o).filter(f.uniques) : i[n] = o,
                                    r[t.adUnitCode] = i
                                }
                                )))
                            }
                            )),
                            {
                                filteredBids: n,
                                customKeysByUnit: r
                            }
                        }(p, d);
                        let U = function(t, n, i) {
                            const o = !1 !== s.$W.getConfig("targetingControls.allBidsCustomTargeting")
                              , d = O(t, i).concat(function(e) {
                                const t = s.$W.getConfig("targetingControls.alwaysIncludeDeals");
                                return r(e, s.$W.getConfig("enableSendAllBids"), t)
                            }(t)).concat(function(t) {
                                function n(e) {
                                    return e?.[a.iD.ADSERVER_TARGETING]
                                }
                                function r(e) {
                                    const t = n(e);
                                    return Object.keys(t).map((function(e) {
                                        return (0,
                                        f.isStr)(t[e]) && (t[e] = t[e].split(",").map((e => e.trim()))),
                                        (0,
                                        f.isArray)(t[e]) || (t[e] = [t[e]]),
                                        {
                                            [e]: t[e]
                                        }
                                    }
                                    ))
                                }
                                return e.getAdUnits().filter((e => t.includes(e.code) && n(e))).reduce(( (e, t) => {
                                    const n = r(t);
                                    return n && e.push({
                                        [t.code]: n
                                    }),
                                    e
                                }
                                ), [])
                            }(i));
                            o && d.push(...function(e, t) {
                                return e.reduce(( (e, n) => {
                                    const r = Object.assign({}, n)
                                      , i = t[r.adUnitCode]
                                      , o = [];
                                    return i && Object.keys(i).forEach((e => {
                                        e && i[e] && o.push({
                                            [e]: i[e]
                                        })
                                    }
                                    )),
                                    e.push({
                                        [r.adUnitCode]: o
                                    }),
                                    e
                                }
                                ), [])
                            }(t, n));
                            return d.forEach((e => {
                                !function(e) {
                                    Object.keys(e).forEach((t => {
                                        e[t].forEach((e => {
                                            const t = Object.keys(e);
                                            -1 === h.indexOf(t[0]) && (h = t.concat(h))
                                        }
                                        ))
                                    }
                                    ))
                                }(e)
                            }
                            )),
                            d
                        }(T(k, c, S, void 0, l), R, p);
                        const D = Object.keys(Object.assign({}, a.Zh, a.x5));
                        let _ = s.$W.getConfig(y);
                        const j = s.$W.getConfig(v);
                        if (null != j && null != _)
                            throw new Error(E);
                        _ = null != j ? D.concat(j) : _ || D,
                        Array.isArray(_) && _.length > 0 && (U = function(e, t) {
                            const n = Object.assign({}, a.xS, a.x5)
                              , r = Object.keys(n)
                              , i = {};
                            (0,
                            f.logInfo)(`allowTargetingKeys - allowed keys [ ${t.map((e => n[e])).join(", ")} ]`),
                            e.map((e => {
                                const o = Object.keys(e)[0]
                                  , s = e[o].filter((e => {
                                    const o = Object.keys(e)[0]
                                      , s = 0 === r.filter((e => 0 === o.indexOf(n[e]))).length || (0,
                                    g.I6)(t, (e => {
                                        const t = n[e];
                                        return 0 === o.indexOf(t)
                                    }
                                    ));
                                    return i[o] = !s,
                                    s
                                }
                                ));
                                e[o] = s
                            }
                            ));
                            const o = Object.keys(i).filter((e => i[e]));
                            return (0,
                            f.logInfo)(`allowTargetingKeys - removed keys [ ${o.join(", ")} ]`),
                            e.filter((e => e[Object.keys(e)[0]].length > 0))
                        }(U, _)),
                        U = function(e) {
                            let t = e.map((e => ({
                                [Object.keys(e)[0]]: e[Object.keys(e)[0]].map((e => ({
                                    [Object.keys(e)[0]]: e[Object.keys(e)[0]].join(",")
                                }))).reduce(( (e, t) => Object.assign(t, e)), {})
                            })));
                            return t = t.reduce((function(e, t) {
                                var n = Object.keys(t)[0];
                                return e[n] = Object.assign({}, e[n], t[n]),
                                e
                            }
                            ), {}),
                            t
                        }(U);
                        const $ = s.$W.getConfig("targetingControls.auctionKeyMaxChars");
                        return $ && ((0,
                        f.logInfo)(`Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ${$} characters.  Running checks on auction keys...`),
                        U = function(e, t) {
                            let n = (0,
                            f.deepClone)(e)
                              , r = Object.keys(n).map((e => ({
                                adUnitCode: e,
                                adserverTargeting: n[e]
                            }))).sort(C());
                            return r.reduce((function(e, r, i, o) {
                                let s = (a = r.adserverTargeting,
                                Object.keys(a).reduce((function(e, t) {
                                    return e + `${t}%3d${encodeURIComponent(a[t])}%26`
                                }
                                ), ""));
                                var a;
                                i + 1 === o.length && (s = s.slice(0, -3));
                                let d = r.adUnitCode
                                  , c = s.length;
                                return c <= t ? (t -= c,
                                (0,
                                f.logInfo)(`AdUnit '${d}' auction keys comprised of ${c} characters.  Deducted from running threshold; new limit is ${t}`, n[d]),
                                e[d] = n[d]) : (0,
                                f.logWarn)(`The following keys for adUnitCode '${d}' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ${c}, the current allotted amount was ${t}.\n`, n[d]),
                                i + 1 === o.length && 0 === Object.keys(e).length && (0,
                                f.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                                e
                            }
                            ), {})
                        }(U, $)),
                        p.forEach((e => {
                            U[e] || (U[e] = {})
                        }
                        )),
                        U
                    }
                    ,
                    s.$W.getConfig("targetingControls", (function(e) {
                        null != (0,
                        p.A)(e, y) && null != (0,
                        p.A)(e, v) && (0,
                        f.logError)(E)
                    }
                    )),
                    t.setTargetingForGPT = (0,
                    c.A_)("sync", (function(n, r) {
                        let i = t.getAllTargeting(n)
                          , o = Object.fromEntries(h.map((e => [e, null])));
                        Object.entries(S(Object.keys(i), r)).forEach((e => {
                            let[t,n] = e;
                            n.length > 1 && (0,
                            f.logWarn)(`Multiple slots found matching: ${t}. Targeting will be set on all matching slots, which can lead to duplicate impressions if more than one are requested from GAM. To resolve this, ensure the arguments to setTargetingForGPTAsync resolve to a single slot by explicitly matching the desired slotElementID.`),
                            n.forEach((e => {
                                Object.keys(i[t]).forEach((e => {
                                    let n = i[t][e];
                                    "string" == typeof n && -1 !== n.indexOf(",") && (n = n.split(",")),
                                    i[t][e] = n
                                }
                                )),
                                (0,
                                f.logMessage)(`Attempting to set targeting-map for slot: ${e.getSlotElementId()} with targeting-map:`, i[t]),
                                e.updateTargetingFromMap(Object.assign({}, o, i[t]))
                            }
                            ))
                        }
                        )),
                        Object.keys(i).forEach((t => {
                            Object.keys(i[t]).forEach((n => {
                                "hb_adid" === n && e.setStatusForBids(i[t][n], a.tl.BID_TARGETING_SET)
                            }
                            ))
                        }
                        )),
                        t.targetingDone(i),
                        d.emit(a.qY.SET_TARGETING, i)
                    }
                    ), "setTargetingForGPT"),
                    t.targetingDone = (0,
                    c.A_)("sync", (function(e) {
                        return e
                    }
                    ), "targetingDone"),
                    t.getWinningBids = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Vk
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.sortByHighestCpm;
                        const s = t || I(n, r)
                          , a = i(e);
                        return s.filter((e => (0,
                        g.mK)(a, e.adUnitCode))).filter((e => !0 === o.u.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0)).map((e => e.adUnitCode)).filter(f.uniques).map((e => s.filter((t => t.adUnitCode === e ? t : null)).reduce(m.Vk)))
                    }
                    ,
                    t.setTargetingForAst = function(e) {
                        let n = t.getAllTargeting(e);
                        try {
                            t.resetPresetTargetingAST(e)
                        } catch (e) {
                            (0,
                            f.logError)("unable to reset targeting for AST" + e)
                        }
                        Object.keys(n).forEach((e => Object.keys(n[e]).forEach((t => {
                            if ((0,
                            f.logMessage)(`Attempting to set targeting for targetId: ${e} key: ${t} value: ${n[e][t]}`),
                            (0,
                            f.isStr)(n[e][t]) || (0,
                            f.isArray)(n[e][t])) {
                                let r = {}
                                  , i = /pt[0-9]/;
                                t.search(i) < 0 ? r[t.toUpperCase()] = n[e][t] : r[t] = n[e][t],
                                window.apntag.setKeywords(e, r, {
                                    overrideKeyValue: !0
                                })
                            }
                        }
                        ))))
                    }
                    ,
                    t.isApntagDefined = function() {
                        if (window.apntag && (0,
                        f.isFn)(window.apntag.setKeywords))
                            return !0
                    }
                    ,
                    t
                }(r.n)
            }
            ,
            38230: (e, t, n) => {
                n.d(t, {
                    qh: () => g,
                    zt: () => p
                });
                var r = n(91069)
                  , i = n(43272)
                  , o = n(15901)
                  , s = n(12938)
                  , a = n(95139)
                  , d = n(76811)
                  , c = n(2604)
                  , l = n(45569)
                  , u = n(83441);
                const g = {
                    syncEnabled: !0,
                    filterSettings: {
                        image: {
                            bidders: "*",
                            filter: "include"
                        }
                    },
                    syncsPerBidder: 5,
                    syncDelay: 3e3,
                    auctionDelay: 500
                };
                i.$W.setDefaults({
                    userSync: (0,
                    r.deepClone)(g)
                });
                const f = (0,
                s.CK)("usersync");
                const p = function(e) {
                    let t = {}
                      , n = {
                        image: [],
                        iframe: []
                    }
                      , s = new Set
                      , a = {}
                      , g = {
                        image: !0,
                        iframe: !1
                    }
                      , f = e.config;
                    function p() {
                        if (f.syncEnabled && e.browserSupportsCookies) {
                            try {
                                !function() {
                                    if (!g.iframe)
                                        return;
                                    m(n.iframe, (e => {
                                        let[t,i] = e;
                                        (0,
                                        r.logMessage)(`Invoking iframe user sync for bidder: ${t}`),
                                        (0,
                                        r.insertUserSyncIframe)(i),
                                        function(e, t) {
                                            e.image = e.image.filter((e => e[0] !== t))
                                        }(n, t)
                                    }
                                    ))
                                }(),
                                function() {
                                    if (!g.image)
                                        return;
                                    m(n.image, (e => {
                                        let[t,n] = e;
                                        (0,
                                        r.logMessage)(`Invoking image pixel user sync for bidder: ${t}`),
                                        (0,
                                        r.triggerPixel)(n)
                                    }
                                    ))
                                }()
                            } catch (e) {
                                return (0,
                                r.logError)("Error firing user syncs", e)
                            }
                            n = {
                                image: [],
                                iframe: []
                            }
                        }
                    }
                    function m(e, t) {
                        (0,
                        r.shuffle)(e).forEach(t)
                    }
                    function h(e, t) {
                        let n = f.filterSettings;
                        if (function(e, t) {
                            if (e.all && e[t])
                                return (0,
                                r.logWarn)(`Detected presence of the "filterSettings.all" and "filterSettings.${t}" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.`),
                                !1;
                            let n = e.all ? e.all : e[t]
                              , i = e.all ? "all" : t;
                            if (!n)
                                return !1;
                            let o = n.filter
                              , s = n.bidders;
                            if (o && "include" !== o && "exclude" !== o)
                                return (0,
                                r.logWarn)(`UserSync "filterSettings.${i}.filter" setting '${o}' is not a valid option; use either 'include' or 'exclude'.`),
                                !1;
                            if ("*" !== s && !(Array.isArray(s) && s.length > 0 && s.every((e => (0,
                            r.isStr)(e) && "*" !== e))))
                                return (0,
                                r.logWarn)(`Detected an invalid setup in userSync "filterSettings.${i}.bidders"; use either '*' (to represent all bidders) or an array of bidders.`),
                                !1;
                            return !0
                        }(n, e)) {
                            g[e] = !0;
                            let r = n.all ? n.all : n[e]
                              , i = "*" === r.bidders ? [t] : r.bidders;
                            const s = {
                                include: (e, t) => !(0,
                                o.mK)(e, t),
                                exclude: (e, t) => (0,
                                o.mK)(e, t)
                            };
                            return s[r.filter || "include"](i, t)
                        }
                        return !g[e]
                    }
                    return i.$W.getConfig("userSync", (e => {
                        if (e.userSync) {
                            let t = e.userSync.filterSettings;
                            (0,
                            r.isPlainObject)(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                                bidders: "*",
                                filter: "include"
                            }))
                        }
                        f = Object.assign(f, e.userSync)
                    }
                    )),
                    e.regRule(d.Ml, "userSync config", (e => {
                        if (!f.syncEnabled)
                            return {
                                allow: !1,
                                reason: "syncs are disabled"
                            };
                        if (e[c.Dk] === l.tW) {
                            const n = e[c.bt]
                              , r = e[c.iK];
                            if (!t.canBidderRegisterSync(n, r))
                                return {
                                    allow: !1,
                                    reason: `${n} syncs are not enabled for ${r}`
                                }
                        }
                    }
                    )),
                    t.registerSync = (t, i, o) => s.has(i) ? (0,
                    r.logMessage)(`already fired syncs for "${i}", ignoring registerSync call`) : f.syncEnabled && (0,
                    r.isArray)(n[t]) ? i ? 0 !== f.syncsPerBidder && Number(a[i]) >= f.syncsPerBidder ? (0,
                    r.logWarn)(`Number of user syncs exceeded for "${i}"`) : void (e.isAllowed(d.Ml, (0,
                    u.s)(l.tW, i, {
                        [c.bt]: t,
                        [c.e3]: o
                    })) && (n[t].push([i, o]),
                    a = function(e, t) {
                        return e[t] ? e[t] += 1 : e[t] = 1,
                        e
                    }(a, i))) : (0,
                    r.logWarn)("Bidder is required for registering sync") : (0,
                    r.logWarn)(`User sync type "${t}" not supported`),
                    t.bidderDone = s.add.bind(s),
                    t.syncUsers = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e)
                            return setTimeout(p, Number(e));
                        p()
                    }
                    ,
                    t.triggerUserSyncs = () => {
                        f.enableOverride && t.syncUsers()
                    }
                    ,
                    t.canBidderRegisterSync = (e, t) => !f.filterSettings || !h(e, t),
                    t
                }(Object.defineProperties({
                    config: i.$W.getConfig("userSync"),
                    isAllowed: a.io,
                    regRule: a.qB
                }, {
                    browserSupportsCookies: {
                        get: function() {
                            return !(0,
                            r.isSafariBrowser)() && f.cookiesAreEnabled()
                        }
                    }
                }))
            }
            ,
            91069: (e, t, n) => {
                n.r(t),
                n.d(t, {
                    _each: () => be,
                    _map: () => ve,
                    _setEventEmitter: () => C,
                    binarySearch: () => wt,
                    buildUrl: () => gt,
                    canAccessWindowTop: () => Y,
                    checkCookieSupport: () => Je,
                    cleanObj: () => st,
                    compareCodeAndSlot: () => nt,
                    compressDataWithGZip: () => Rt,
                    contains: () => ye,
                    convertObjectToArray: () => At,
                    createIframe: () => oe,
                    createInvisibleIframe: () => se,
                    createTrackPixelHtml: () => Ce,
                    createTrackPixelIframeHtml: () => Oe,
                    cyrb53Hash: () => ht,
                    debugTurnedOn: () => ie,
                    deepAccess: () => c.A,
                    deepClone: () => Ne,
                    deepEqual: () => ft,
                    deepSetValue: () => l.J,
                    delayExecution: () => Ye,
                    encodeMacroURI: () => Se,
                    extractDomainFromHost: () => St,
                    flatten: () => Re,
                    formatQS: () => lt,
                    generateUUID: () => $,
                    getBidIdParameter: () => x,
                    getBidRequest: () => ke,
                    getBidderCodes: () => De,
                    getDNT: () => tt,
                    getDefinedParams: () => Qe,
                    getDocument: () => J,
                    getDomLoadingDuration: () => Ve,
                    getParameterByName: () => ae,
                    getPerformanceNow: () => He,
                    getPrebidInternal: () => U,
                    getSafeframeGeometry: () => Pe,
                    getUniqueIdentifierStr: () => j,
                    getUnixTimestampFromNow: () => Et,
                    getUserConfiguredParams: () => et,
                    getValue: () => Ue,
                    getWinDimensions: () => O,
                    getWindowLocation: () => K,
                    getWindowSelf: () => V,
                    getWindowTop: () => H,
                    groupBy: () => Xe,
                    hasConsoleLogger: () => re,
                    hasDeviceAccess: () => Ke,
                    hasNonSerializableProperty: () => Tt,
                    inIframe: () => qe,
                    insertElement: () => Ee,
                    insertHtmlIntoIframe: () => we,
                    insertUserSyncIframe: () => Te,
                    internal: () => R,
                    isA: () => de,
                    isAdUnitCodeMatchingSlot: () => rt,
                    isApnGetTagDefined: () => je,
                    isArray: () => ue,
                    isArrayOfNums: () => dt,
                    isBoolean: () => pe,
                    isEmpty: () => me,
                    isEmptyStr: () => he,
                    isFn: () => ce,
                    isGptPubadsDefined: () => _e,
                    isGzipCompressionSupported: () => Bt,
                    isInteger: () => ot,
                    isNumber: () => ge,
                    isPlainObject: () => fe,
                    isSafariBrowser: () => Me,
                    isSafeFrameWindow: () => We,
                    isStr: () => le,
                    isValidMediaTypes: () => Ze,
                    logError: () => ee,
                    logInfo: () => Q,
                    logMessage: () => X,
                    logWarn: () => Z,
                    memoize: () => vt,
                    mergeDeep: () => pt,
                    parseGPTSingleSizeArray: () => G,
                    parseGPTSingleSizeArrayToRtbSize: () => F,
                    parseQS: () => ct,
                    parseQueryStringParameters: () => N,
                    parseSizesInput: () => P,
                    parseUrl: () => ut,
                    pick: () => at,
                    prefixLog: () => te,
                    replaceAuctionPrice: () => Le,
                    replaceClickThrough: () => Fe,
                    replaceMacros: () => Ge,
                    resetWinDimensions: () => B,
                    safeJSONEncode: () => yt,
                    safeJSONParse: () => bt,
                    setOnAny: () => Ct,
                    setScriptAttributes: () => It,
                    shuffle: () => xe,
                    sizeTupleToRtbSize: () => L,
                    sizeTupleToSizeString: () => M,
                    sizesToSizeTuples: () => W,
                    sortByHighestCpm: () => $e,
                    timestamp: () => ze,
                    transformAdServerTargetingObj: () => q,
                    triggerNurlWithCpm: () => Ot,
                    triggerPixel: () => Ie,
                    uniques: () => Be,
                    unsupportedBidderMessage: () => it,
                    waitForElementToLoad: () => Ae
                });
                var r = n(43272)
                  , i = n(45751)
                  , o = n(15901)
                  , s = n(78969)
                  , a = n(25555)
                  , d = n(7873)
                  , c = n(70433)
                  , l = n(63172)
                  , u = "String"
                  , g = "Function"
                  , f = "Number"
                  , p = "Object"
                  , m = "Boolean"
                  , h = Object.prototype.toString;
                let b, y, v = Boolean(window.console), E = Boolean(v && window.console.log), A = Boolean(v && window.console.info), I = Boolean(v && window.console.warn), w = Boolean(v && window.console.error);
                const T = (0,
                d.m)();
                function C(e) {
                    b = e
                }
                function S() {
                    null != b && b(...arguments)
                }
                const O = function() {
                    let e;
                    return () => ((!y || !e || Date.now() - e > 20) && (R.resetWinDimensions(),
                    e = Date.now()),
                    y)
                }();
                function B() {
                    const e = Y() ? R.getWindowTop() : R.getWindowSelf();
                    y = {
                        screen: {
                            width: e.screen?.width,
                            height: e.screen?.height,
                            availWidth: e.screen?.availWidth,
                            availHeight: e.screen?.availHeight,
                            colorDepth: e.screen?.colorDepth
                        },
                        innerHeight: e.innerHeight,
                        innerWidth: e.innerWidth,
                        outerWidth: e.outerWidth,
                        outerHeight: e.outerHeight,
                        visualViewport: {
                            height: e.visualViewport?.height,
                            width: e.visualViewport?.width
                        },
                        document: {
                            documentElement: {
                                clientWidth: e.document?.documentElement?.clientWidth,
                                clientHeight: e.document?.documentElement?.clientHeight,
                                scrollTop: e.document?.documentElement?.scrollTop,
                                scrollLeft: e.document?.documentElement?.scrollLeft
                            },
                            body: {
                                scrollTop: document.body?.scrollTop,
                                scrollLeft: document.body?.scrollLeft,
                                clientWidth: document.body?.clientWidth,
                                clientHeight: document.body?.clientHeight
                            }
                        }
                    }
                }
                const R = {
                    checkCookieSupport: Je,
                    createTrackPixelIframeHtml: Oe,
                    getWindowSelf: V,
                    getWindowTop: H,
                    canAccessWindowTop: Y,
                    getWindowLocation: K,
                    insertUserSyncIframe: Te,
                    insertElement: Ee,
                    isFn: ce,
                    triggerPixel: Ie,
                    logError: ee,
                    logWarn: Z,
                    logMessage: X,
                    logInfo: Q,
                    parseQS: ct,
                    formatQS: lt,
                    deepEqual: ft,
                    resetWinDimensions: B
                };
                let k = {};
                function U() {
                    return k
                }
                var D, _ = (D = 0,
                function() {
                    return ++D
                }
                );
                function j() {
                    return _() + Math.random().toString(16).substr(2)
                }
                function $(e) {
                    return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, $)
                }
                function x(e, t) {
                    return t?.[e] || ""
                }
                function N(e) {
                    let t = "";
                    for (var n in e)
                        e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                    return t = t.replace(/&$/, ""),
                    t
                }
                function q(e) {
                    return e && Object.getOwnPropertyNames(e).length > 0 ? Object.keys(e).map((t => `${t}=${encodeURIComponent(e[t])}`)).join("&") : ""
                }
                function W(e) {
                    return "string" == typeof e ? e.split(/\s*,\s*/).map((e => e.match(/^(\d+)x(\d+)$/i))).filter((e => e)).map((e => {
                        let[t,n,r] = e;
                        return [parseInt(n, 10), parseInt(r, 10)]
                    }
                    )) : Array.isArray(e) ? z(e) ? [e] : e.filter(z) : []
                }
                function P(e) {
                    return W(e).map(M)
                }
                function M(e) {
                    return e[0] + "x" + e[1]
                }
                function G(e) {
                    if (z(e))
                        return M(e)
                }
                function L(e) {
                    return {
                        w: e[0],
                        h: e[1]
                    }
                }
                function F(e) {
                    if (z(e))
                        return L(e)
                }
                function z(e) {
                    return ue(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                }
                function H() {
                    return window.top
                }
                function V() {
                    return window.self
                }
                function K() {
                    return window.location
                }
                function J() {
                    return document
                }
                function Y() {
                    try {
                        if (R.getWindowTop().location.href)
                            return !0
                    } catch (e) {
                        return !1
                    }
                }
                function X() {
                    ie() && E && console.log.apply(console, ne(arguments, "MESSAGE:"))
                }
                function Q() {
                    ie() && A && console.info.apply(console, ne(arguments, "INFO:"))
                }
                function Z() {
                    ie() && I && console.warn.apply(console, ne(arguments, "WARNING:")),
                    S(s.qY.AUCTION_DEBUG, {
                        type: "WARNING",
                        arguments
                    })
                }
                function ee() {
                    ie() && w && console.error.apply(console, ne(arguments, "ERROR:")),
                    S(s.qY.AUCTION_DEBUG, {
                        type: "ERROR",
                        arguments
                    })
                }
                function te(e) {
                    function t(t) {
                        return function() {
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                                r[i] = arguments[i];
                            t(e, ...r)
                        }
                    }
                    return {
                        logError: t(ee),
                        logWarn: t(Z),
                        logMessage: t(X),
                        logInfo: t(Q)
                    }
                }
                function ne(e, t) {
                    e = [].slice.call(e);
                    let n = r.$W.getCurrentBidder();
                    return t && e.unshift(t),
                    n && e.unshift(i("#aaa")),
                    e.unshift(i("#3b88c3")),
                    e.unshift("%cPrebid" + (n ? `%c${n}` : "")),
                    e;
                    function i(e) {
                        return `display: inline-block; color: #fff; background: ${e}; padding: 1px 4px; border-radius: 3px;`
                    }
                }
                function re() {
                    return E
                }
                function ie() {
                    return !!r.$W.getConfig("debug")
                }
                const oe = ( () => {
                    const e = {
                        border: "0px",
                        hspace: "0",
                        vspace: "0",
                        marginWidth: "0",
                        marginHeight: "0",
                        scrolling: "no",
                        frameBorder: "0",
                        allowtransparency: "true"
                    };
                    return function(t, n) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        const i = t.createElement("iframe");
                        return Object.assign(i, Object.assign({}, e, n)),
                        Object.assign(i.style, r),
                        i
                    }
                }
                )();
                function se() {
                    return oe(document, {
                        id: j(),
                        width: 0,
                        height: 0,
                        src: "about:blank"
                    }, {
                        display: "none",
                        height: "0px",
                        width: "0px",
                        border: "0px"
                    })
                }
                function ae(e) {
                    return ct(K().search)[e] || ""
                }
                function de(e, t) {
                    return h.call(e) === "[object " + t + "]"
                }
                function ce(e) {
                    return de(e, g)
                }
                function le(e) {
                    return de(e, u)
                }
                const ue = Array.isArray.bind(Array);
                function ge(e) {
                    return de(e, f)
                }
                function fe(e) {
                    return de(e, p)
                }
                function pe(e) {
                    return de(e, m)
                }
                function me(e) {
                    return !e || (ue(e) || le(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
                }
                function he(e) {
                    return le(e) && (!e || 0 === e.length)
                }
                function be(e, t) {
                    if (ce(e?.forEach))
                        return e.forEach(t, this);
                    Object.entries(e || {}).forEach((e => {
                        let[n,r] = e;
                        return t.call(this, r, n)
                    }
                    ))
                }
                function ye(e, t) {
                    return ce(e?.includes) && e.includes(t)
                }
                function ve(e, t) {
                    return ce(e?.map) ? e.map(t) : Object.entries(e || {}).map((n => {
                        let[r,i] = n;
                        return t(i, r, e)
                    }
                    ))
                }
                function Ee(e, t, n, r) {
                    let i;
                    t = t || document,
                    i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                    try {
                        if (i = i.length ? i : t.getElementsByTagName("body"),
                        i.length) {
                            i = i[0];
                            let t = r ? null : i.firstChild;
                            return i.insertBefore(e, t)
                        }
                    } catch (e) {}
                }
                function Ae(e, t) {
                    let n = null;
                    return new a.U9((r => {
                        const i = function() {
                            e.removeEventListener("load", i),
                            e.removeEventListener("error", i),
                            null != n && window.clearTimeout(n),
                            r()
                        };
                        e.addEventListener("load", i),
                        e.addEventListener("error", i),
                        null != t && (n = window.setTimeout(i, t))
                    }
                    ))
                }
                function Ie(e, t, n) {
                    const r = new Image;
                    t && R.isFn(t) && Ae(r, n).then(t),
                    r.src = e
                }
                function we(e) {
                    if (!e)
                        return;
                    const t = se();
                    var n;
                    R.insertElement(t, document, "body"),
                    (n = t.contentWindow.document).open(),
                    n.write(e),
                    n.close()
                }
                function Te(e, t, n) {
                    let r = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
                      , i = document.createElement("div");
                    i.innerHTML = r;
                    let o = i.firstChild;
                    t && R.isFn(t) && Ae(o, n).then(t),
                    R.insertElement(o, document, "html", !0)
                }
                function Ce(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : encodeURI;
                    if (!e)
                        return "";
                    let n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                    return n += '<img src="' + t(e) + '"></div>',
                    n
                }
                function Se(e) {
                    return Array.from(e.matchAll(/\$({[^}]+})/g)).map((e => e[1])).reduce(( (e, t) => e.replace("$" + encodeURIComponent(t), "$" + t)), encodeURI(e))
                }
                function Oe(e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)),
                    t && (t = `sandbox="${t}"`),
                    `<iframe ${t} id="${j()}"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="${e}">\n    </iframe>`) : ""
                }
                function Be(e, t, n) {
                    return n.indexOf(e) === t
                }
                function Re(e, t) {
                    return e.concat(t)
                }
                function ke(e, t) {
                    if (e)
                        return t.flatMap((e => e.bids)).find((t => ["bidId", "adId", "bid_id"].some((n => t[n] === e))))
                }
                function Ue(e, t) {
                    return e[t]
                }
                function De() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.adUnits).map((e => e.bids.map((e => e.bidder)).reduce(Re, []))).reduce(Re, []).filter((e => void 0 !== e)).filter(Be)
                }
                function _e() {
                    if (window.googletag && ce(window.googletag.pubads) && ce(window.googletag.pubads().getSlots))
                        return !0
                }
                function je() {
                    if (window.apntag && ce(window.apntag.getTag))
                        return !0
                }
                const $e = (e, t) => t.cpm - e.cpm;
                function xe(e) {
                    let t = e.length;
                    for (; t > 0; ) {
                        let n = Math.floor(Math.random() * t);
                        t--;
                        let r = e[t];
                        e[t] = e[n],
                        e[n] = r
                    }
                    return e
                }
                function Ne(e) {
                    return (0,
                    i.Q)(e) || {}
                }
                function qe() {
                    try {
                        return R.getWindowSelf() !== R.getWindowTop()
                    } catch (e) {
                        return !0
                    }
                }
                function We() {
                    if (!qe())
                        return !1;
                    const e = R.getWindowSelf();
                    return !(!e.$sf || !e.$sf.ext)
                }
                function Pe() {
                    try {
                        const e = V();
                        return "function" == typeof e.$sf.ext.geom ? e.$sf.ext.geom() : void 0
                    } catch (e) {
                        return void ee("Error getting SafeFrame geometry", e)
                    }
                }
                function Me() {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
                }
                function Ge(e, t) {
                    if (e)
                        return Object.entries(t).reduce(( (e, t) => {
                            let[n,r] = t;
                            return e.replace(new RegExp("\\$\\{" + n + "\\}","g"), r || "")
                        }
                        ), e)
                }
                function Le(e, t) {
                    return Ge(e, {
                        AUCTION_PRICE: t
                    })
                }
                function Fe(e, t) {
                    if (e && t && "string" == typeof t)
                        return e.replace(/\${CLICKTHROUGH}/g, t)
                }
                function ze() {
                    return (new Date).getTime()
                }
                function He() {
                    return window.performance && window.performance.now && window.performance.now() || 0
                }
                function Ve(e) {
                    let t = -1;
                    const n = (e = e || V()).performance;
                    if (e.performance?.timing && e.performance.timing.navigationStart > 0) {
                        const e = n.timing.domLoading - n.timing.navigationStart;
                        e > 0 && (t = e)
                    }
                    return t
                }
                function Ke() {
                    return !1 !== r.$W.getConfig("deviceAccess")
                }
                function Je() {
                    if (window.navigator.cookieEnabled || document.cookie.length)
                        return !0
                }
                function Ye(e, t) {
                    if (t < 1)
                        throw new Error(`numRequiredCalls must be a positive number. Got ${t}`);
                    let n = 0;
                    return function() {
                        n++,
                        n === t && e.apply(this, arguments)
                    }
                }
                function Xe(e, t) {
                    return e.reduce((function(e, n) {
                        return (e[n[t]] = e[n[t]] || []).push(n),
                        e
                    }
                    ), {})
                }
                function Qe(e, t) {
                    return t.filter((t => e[t])).reduce(( (t, n) => Object.assign(t, {
                        [n]: e[n]
                    })), {})
                }
                function Ze(e) {
                    const t = ["banner", "native", "video"]
                      , n = ["instream", "outstream", "adpod"];
                    return !!Object.keys(e).every((e => (0,
                    o.mK)(t, e))) && (!e.video || !e.video.context || (0,
                    o.mK)(n, e.video.context))
                }
                function et(e, t, n) {
                    return e.filter((e => e.code === t)).flatMap((e => e.bids)).filter((e => e.bidder === n)).map((e => e.params || {}))
                }
                function tt() {
                    return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                }
                const nt = (e, t) => e.getAdUnitPath() === t || e.getSlotElementId() === t;
                function rt(e) {
                    return t => nt(e, t)
                }
                function it(e, t) {
                    const n = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }).join(", ");
                    return `\n    ${e.code} is a ${n} ad unit\n    containing bidders that don't support ${n}: ${t}.\n    This bidder won't fetch demand.\n  `
                }
                const ot = Number.isInteger.bind(Number);
                function st(e) {
                    return Object.fromEntries(Object.entries(e).filter((e => {
                        let[t,n] = e;
                        return void 0 !== n
                    }
                    )))
                }
                function at(e, t) {
                    return "object" != typeof e ? {} : t.reduce(( (n, r, i) => {
                        if ("function" == typeof r)
                            return n;
                        let o = r
                          , s = r.match(/^(.+?)\sas\s(.+?)$/i);
                        s && (r = s[1],
                        o = s[2]);
                        let a = e[r];
                        return "function" == typeof t[i + 1] && (a = t[i + 1](a, n)),
                        void 0 !== a && (n[o] = a),
                        n
                    }
                    ), {})
                }
                function dt(e, t) {
                    return ue(e) && (!t || e.length === t) && e.every((e => ot(e)))
                }
                function ct(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce(( (e, t) => {
                        let[n,r] = t.split("=");
                        return /\[\]$/.test(n) ? (n = n.replace("[]", ""),
                        e[n] = e[n] || [],
                        e[n].push(r)) : e[n] = r || "",
                        e
                    }
                    ), {}) : {}
                }
                function lt(e) {
                    return Object.keys(e).map((t => Array.isArray(e[t]) ? e[t].map((e => `${t}[]=${e}`)).join("&") : `${t}=${e[t]}`)).join("&")
                }
                function ut(e, t) {
                    let n = document.createElement("a");
                    t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                    let r = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
                    return {
                        href: n.href,
                        protocol: (n.protocol || "").replace(/:$/, ""),
                        hostname: n.hostname,
                        port: +n.port,
                        pathname: n.pathname.replace(/^(?!\/)/, "/"),
                        search: r ? n.search : R.parseQS(n.search || ""),
                        hash: (n.hash || "").replace(/^#/, ""),
                        host: n.host || window.location.host
                    }
                }
                function gt(e) {
                    return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? `:${e.port}` : "")) + (e.pathname || "") + (e.search ? `?${R.formatQS(e.search || "")}` : "") + (e.hash ? `#${e.hash}` : "")
                }
                function ft(e, t) {
                    let {checkTypes: n=!1} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e === t)
                        return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                        return !1;
                    const r = Array.isArray(e)
                      , i = Array.isArray(t);
                    if (r && i) {
                        if (e.length !== t.length)
                            return !1;
                        for (let r = 0; r < e.length; r++)
                            if (!ft(e[r], t[r], {
                                checkTypes: n
                            }))
                                return !1;
                        return !0
                    }
                    if (r || i)
                        return !1;
                    if (n && e.constructor !== t.constructor)
                        return !1;
                    const o = Object.keys(e)
                      , s = Object.keys(t);
                    if (o.length !== s.length)
                        return !1;
                    for (const r of o) {
                        if (!Object.prototype.hasOwnProperty.call(t, r))
                            return !1;
                        if (!ft(e[r], t[r], {
                            checkTypes: n
                        }))
                            return !1
                    }
                    return !0
                }
                function pt(e) {
                    for (let t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t++) {
                        const n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                        fe(n) && mt(e, n)
                    }
                    return e
                }
                function mt(e, t) {
                    if (!fe(e) || !fe(t))
                        return;
                    const n = Object.keys(t);
                    for (let r = 0; r < n.length; r++) {
                        const i = n[r];
                        if ("__proto__" === i || "constructor" === i)
                            continue;
                        const o = t[i];
                        fe(o) ? (e[i] || (e[i] = {}),
                        mt(e[i], o)) : Array.isArray(o) ? Array.isArray(e[i]) ? o.forEach((t => {
                            e[i].some((e => ft(e, t))) || e[i].push(t)
                        }
                        )) : e[i] = [...o] : e[i] = o
                    }
                }
                function ht(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = function(e, t) {
                        if (ce(Math.imul))
                            return Math.imul(e, t);
                        var n = (4194303 & e) * (t |= 0);
                        return 4290772992 & e && (n += (4290772992 & e) * t | 0),
                        0 | n
                    }
                      , r = 3735928559 ^ t
                      , i = 1103547991 ^ t;
                    for (let t, o = 0; o < e.length; o++)
                        t = e.charCodeAt(o),
                        r = n(r ^ t, 2654435761),
                        i = n(i ^ t, 1597334677);
                    return r = n(r ^ r >>> 16, 2246822507) ^ n(i ^ i >>> 13, 3266489909),
                    i = n(i ^ i >>> 16, 2246822507) ^ n(r ^ r >>> 13, 3266489909),
                    (4294967296 * (2097151 & i) + (r >>> 0)).toString()
                }
                function bt(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {}
                }
                function yt(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return ""
                    }
                }
                function vt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                        return e
                    }
                    ;
                    const n = new Map
                      , r = function() {
                        const r = t.apply(this, arguments);
                        return n.has(r) || n.set(r, e.apply(this, arguments)),
                        n.get(r)
                    };
                    return r.clear = n.clear.bind(n),
                    r
                }
                function Et() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "d";
                    if (["m", "d"].indexOf(t) < 0)
                        return Date.now();
                    const n = e / ("m" === t ? 1440 : 1);
                    return Date.now() + (e && e > 0 ? 864e5 * n : 0)
                }
                function At(e) {
                    return Object.keys(e).map((t => ({
                        [t]: e[t]
                    })))
                }
                function It(e, t) {
                    Object.entries(t).forEach((t => {
                        let[n,r] = t;
                        return e.setAttribute(n, r)
                    }
                    ))
                }
                function wt(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e
                      , r = 0
                      , i = e.length && e.length - 1;
                    const o = n(t);
                    for (; i - r > 1; ) {
                        const t = r + Math.round((i - r) / 2);
                        o > n(e[t]) ? r = t : i = t
                    }
                    for (; e.length > r && o > n(e[r]); )
                        r++;
                    return r
                }
                function Tt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
                    for (const n in e) {
                        const r = e[n]
                          , i = typeof r;
                        if (void 0 === r || "function" === i || "symbol" === i || r instanceof RegExp || r instanceof Map || r instanceof Set || r instanceof Date || null !== r && "object" === i && r.hasOwnProperty("toJSON"))
                            return !0;
                        if (null !== r && "object" === i && r.constructor === Object) {
                            if (t.has(r))
                                return !0;
                            if (t.add(r),
                            Tt(r, t))
                                return !0
                        }
                    }
                    return !1
                }
                function Ct(e, t) {
                    for (let n, r = 0; r < e.length; r++)
                        if (n = (0,
                        c.A)(e[r], t),
                        n)
                            return n
                }
                function St(e) {
                    let t = null;
                    try {
                        let n = /[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e);
                        if (null != n && n.length > 0) {
                            t = n[0];
                            for (let e = 1; e < n.length; e++)
                                n[e].length > t.length && (t = n[e])
                        }
                    } catch (e) {
                        t = null
                    }
                    return t
                }
                function Ot(e, t) {
                    le(e.nurl) && "" !== e.nurl && (e.nurl = e.nurl.replace(/\${AUCTION_PRICE}/, t),
                    Ie(e.nurl))
                }
                const Bt = function() {
                    let e;
                    return function() {
                        if (void 0 !== e)
                            return e;
                        try {
                            void 0 === window.CompressionStream ? e = !1 : (new window.CompressionStream("gzip"),
                            e = !0)
                        } catch (t) {
                            e = !1
                        }
                        return e
                    }
                }();
                async function Rt(e) {
                    "string" != typeof e && (e = JSON.stringify(e));
                    const t = (new TextEncoder).encode(e)
                      , n = new Blob([t]).stream().pipeThrough(new window.CompressionStream("gzip"))
                      , r = await new Response(n).blob()
                      , i = await r.arrayBuffer();
                    return new Uint8Array(i)
                }
            }
            ,
            57176: (e, t, n) => {
                n.d(t, {
                    y: () => s
                });
                var r = n(67314)
                  , i = n(12693)
                  , o = n(91069);
                function s(e, t, n) {
                    let {index: s=r.n.index, bs: a=i.u} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    n = n || s.getBidRequest(t);
                    const d = t?.adapterCode
                      , c = t?.bidderCode || n?.bidder
                      , l = a.get(t?.adapterCode, "adjustAlternateBids")
                      , u = a.getOwn(c, "bidCpmAdjustment") || a.get(l ? d : c, "bidCpmAdjustment");
                    if (u && "function" == typeof u)
                        try {
                            return u(e, Object.assign({}, t), n)
                        } catch (e) {
                            (0,
                            o.logError)("Error during bid adjustment", e)
                        }
                    return e
                }
            }
            ,
            82621: (e, t, n) => {
                function r(e) {
                    return !e?.gdprApplies || !0 === e?.vendorData?.purpose?.consents?.[1]
                }
                n.d(t, {
                    C: () => r
                })
            }
            ,
            16894: (e, t, n) => {
                n.d(t, {
                    Ak: () => h,
                    BO: () => f,
                    K7: () => p,
                    NL: () => b
                });
                var r = n(43272);
                const i = "performanceMetrics"
                  , o = window.performance && window.performance.now ? () => window.performance.now() : () => Date.now()
                  , s = new WeakMap;
                function a() {
                    let {now: e=o, mkNode: t=l, mkTimer: n=c, mkRenamer: r=(e => e), nodes: i=s} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function() {
                        return function o(s) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => ({
                                forEach(t) {
                                    t(e)
                                }
                            });
                            a = r(a);
                            const d = (c = "timestamps",
                            function(e) {
                                return s.dfWalk({
                                    visit(t, n) {
                                        const r = n[c];
                                        if (r.hasOwnProperty(e))
                                            return r[e]
                                    }
                                })
                            }
                            );
                            var c;
                            function l(e, t) {
                                const n = a(e);
                                s.dfWalk({
                                    follow: (e, t) => t.propagate && (!e || !e.stopPropagation),
                                    visit(e, r) {
                                        n.forEach((n => {
                                            null == e ? r.metrics[n] = t : (r.groups.hasOwnProperty(n) || (r.groups[n] = []),
                                            r.groups[n].push(t))
                                        }
                                        ))
                                    }
                                })
                            }
                            function u(t) {
                                return n(e, (e => l(t, e)))
                            }
                            function g() {
                                let e = {};
                                return s.dfWalk({
                                    visit(t, n) {
                                        e = Object.assign({}, !t || t.includeGroups ? n.groups : null, n.metrics, e)
                                    }
                                }),
                                e
                            }
                            const f = {
                                startTiming: u,
                                measureTime: function(e, t) {
                                    return u(e).stopAfter(t)()
                                },
                                measureHookTime: function(e, t, n) {
                                    const r = u(e);
                                    return n(function(e) {
                                        const t = r.stopBefore(e);
                                        return t.bail = e.bail && r.stopBefore(e.bail),
                                        t.stopTiming = r,
                                        t.untimed = e,
                                        t
                                    }(t))
                                },
                                checkpoint: function(t) {
                                    s.timestamps[t] = e()
                                },
                                timeSince: function(t, n) {
                                    const r = d(t)
                                      , i = null != r ? e() - r : null;
                                    return null != n && l(n, i),
                                    i
                                },
                                timeBetween: function(e, t, n) {
                                    const r = d(e)
                                      , i = d(t)
                                      , o = null != r && null != i ? i - r : null;
                                    return null != n && l(n, o),
                                    o
                                },
                                setMetric: l,
                                getMetrics: g,
                                fork: function() {
                                    let {propagate: e=!0, stopPropagation: n=!1, includeGroups: r=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return o(t([[s, {
                                        propagate: e,
                                        stopPropagation: n,
                                        includeGroups: r
                                    }]]), a)
                                },
                                join: function(e) {
                                    let {propagate: t=!0, stopPropagation: n=!1, includeGroups: r=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    const o = i.get(e);
                                    null != o && o.addParent(s, {
                                        propagate: t,
                                        stopPropagation: n,
                                        includeGroups: r
                                    })
                                },
                                newMetrics: function() {
                                    return o(s.newSibling(), a)
                                },
                                renameWith: function(e) {
                                    return o(s, e)
                                },
                                toJSON: () => g()
                            };
                            return i.set(f, s),
                            f
                        }(t([]))
                    }
                }
                function d(e, t, n) {
                    return function() {
                        t && t();
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            n && n()
                        }
                    }
                }
                function c(e, t) {
                    const n = e();
                    let r = !1;
                    function i() {
                        r || (t(e() - n),
                        r = !0)
                    }
                    return i.stopBefore = e => d(e, i),
                    i.stopAfter = e => d(e, null, i),
                    i
                }
                function l(e) {
                    return {
                        metrics: {},
                        timestamps: {},
                        groups: {},
                        addParent(t, n) {
                            e.push([t, n])
                        },
                        newSibling: () => l(e.slice()),
                        dfWalk() {
                            let t, {visit: n, follow: r=( () => !0), visited: i=new Set, inEdge: o} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!i.has(this)) {
                                if (i.add(this),
                                t = n(o, this),
                                null != t)
                                    return t;
                                for (const [s,a] of e)
                                    if (r(o, a) && (t = s.dfWalk({
                                        visit: n,
                                        follow: r,
                                        visited: i,
                                        inEdge: a
                                    }),
                                    null != t))
                                        return t
                            }
                        }
                    }
                }
                const u = ( () => {
                    const e = function() {}
                      , t = () => ({})
                      , n = {
                        forEach: e
                    }
                      , r = () => null;
                    r.stopBefore = e => e,
                    r.stopAfter = e => e;
                    const i = Object.defineProperties({
                        dfWalk: e,
                        newSibling: () => i,
                        addParent: e
                    }, Object.fromEntries(["metrics", "timestamps", "groups"].map((e => [e, {
                        get: t
                    }]))));
                    return a({
                        now: () => 0,
                        mkNode: () => i,
                        mkRenamer: () => () => n,
                        mkTimer: () => r,
                        nodes: {
                            get: e,
                            set: e
                        }
                    })()
                }
                )();
                let g = !0;
                function f(e) {
                    return g && e || u
                }
                r.$W.getConfig(i, (e => {
                    g = !!e[i]
                }
                ));
                const p = ( () => {
                    const e = a();
                    return function() {
                        return g ? e() : u
                    }
                }
                )();
                function m(e, t) {
                    return function(n, r) {
                        return function(i) {
                            for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
                                s[a - 1] = arguments[a];
                            const d = this;
                            return f(t.apply(d, s)).measureHookTime(e + n, i, (function(e) {
                                return r.call(d, e, ...s)
                            }
                            ))
                        }
                    }
                }
                const h = m("requestBids.", (e => e.metrics))
                  , b = m("addBidResponse.", ( (e, t) => t.metrics))
            }
            ,
            25555: (e, t, n) => {
                n.d(t, {
                    U9: () => s,
                    cb: () => a,
                    v6: () => d
                });
                var r = n(30043)
                  , i = n(7873);
                const o = (0,
                i.m)().setTimeout ?? r.w
                  , s = (0,
                i.m)().Promise ?? r.k;
                function a() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new s((t => {
                        o(t, e)
                    }
                    ))
                }
                function d() {
                    let e, t, {promiseFactory: n=(e => new s(e))} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    function r(e) {
                        return t => e(t)
                    }
                    return {
                        promise: n(( (n, r) => {
                            e = n,
                            t = r
                        }
                        )),
                        resolve: r(e),
                        reject: r(t)
                    }
                }
            }
            ,
            12713: (e, t, n) => {
                function r(e, t) {
                    return e === t ? 0 : e < t ? -1 : 1
                }
                function i() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e;
                    return (t, n) => r(e(t), e(n))
                }
                function o() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    return (t, n) => -e(t, n) || 0
                }
                function s() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return function(e, n) {
                        for (const r of t) {
                            const t = r(e, n);
                            if (0 !== t)
                                return t
                        }
                        return 0
                    }
                }
                function a() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    return (t, n) => e(n, t) < 0 ? n : t
                }
                function d() {
                    return a(o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r))
                }
                n.d(t, {
                    Bp: () => a,
                    Bq: () => g,
                    NV: () => i,
                    Ph: () => d,
                    Vk: () => u
                });
                const c = i((e => e.cpm))
                  , l = i((e => e.responseTimestamp))
                  , u = d(s(c, o(i((e => e.timeToRespond)))))
                  , g = d(s(c, o(l)));
                d(s(c, l))
            }
            ,
            76853: (e, t, n) => {
                n.d(t, {
                    H: () => l
                });
                var r = n(25555)
                  , i = n(91069);
                let o = null
                  , s = 0
                  , a = [];
                function d() {
                    document.hidden ? o = Date.now() : (s += Date.now() - (o ?? 0),
                    o = null,
                    a.forEach((e => {
                        let {callback: t, startTime: n, setTimerId: r} = e;
                        return r(c(t, s - n)())
                    }
                    )),
                    a = [])
                }
                function c(e, t) {
                    const n = s;
                    let r = setTimeout(( () => {
                        s === n && null == o ? e() : null != o ? a.push({
                            callback: e,
                            startTime: n,
                            setTimerId(e) {
                                r = e
                            }
                        }) : r = c(e, s - n)()
                    }
                    ), t);
                    return () => r
                }
                function l() {
                    let {startTime: e=i.timestamp, ttl: t=( () => null), monotonic: n=!1, slack: o=5e3} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const s = new Map
                      , a = []
                      , d = []
                      , l = n ? e => d.push(e) : e => d.splice((0,
                    i.binarySearch)(d, e, (e => e.expiry)), 0, e);
                    let u, g;
                    function f() {
                        if (g && clearTimeout(g),
                        d.length > 0) {
                            const e = (0,
                            i.timestamp)();
                            u = Math.max(e, d[0].expiry + o),
                            g = c(( () => {
                                const e = (0,
                                i.timestamp)();
                                let t = 0;
                                for (const n of d) {
                                    if (n.expiry > e)
                                        break;
                                    a.forEach((e => {
                                        try {
                                            e(n.item)
                                        } catch (e) {
                                            (0,
                                            i.logError)(e)
                                        }
                                    }
                                    )),
                                    s.delete(n.item),
                                    t++
                                }
                                d.splice(0, t),
                                g = null,
                                f()
                            }
                            ), u - e)
                        } else
                            g = null
                    }
                    function p(n) {
                        const i = {}
                          , s = m;
                        let a;
                        const [d,c] = Object.entries({
                            start: e,
                            delta: t
                        }).map((e => {
                            let t, [d,c] = e;
                            return function() {
                                const e = t = {};
                                r.U9.resolve(c(n)).then((n => {
                                    e === t && (i[d] = n,
                                    s === m && null != i.start && null != i.delta && (a = i.start + i.delta,
                                    l(p),
                                    (null == g || u > a + o) && f()))
                                }
                                ))
                            }
                        }
                        ))
                          , p = {
                            item: n,
                            refresh: c,
                            get expiry() {
                                return a
                            }
                        };
                        return d(),
                        c(),
                        p
                    }
                    let m = {};
                    return {
                        [Symbol.iterator]: () => s.keys(),
                        add(e) {
                            !s.has(e) && s.set(e, p(e))
                        },
                        clear() {
                            d.length = 0,
                            f(),
                            s.clear(),
                            m = {}
                        },
                        toArray: () => Array.from(s.keys()),
                        refresh() {
                            d.length = 0,
                            f();
                            for (const e of s.values())
                                e.refresh()
                        },
                        onExpiry: e => (a.push(e),
                        () => {
                            const t = a.indexOf(e);
                            t >= 0 && a.splice(t, 1)
                        }
                        )
                    }
                }
                document.addEventListener("visibilitychange", d)
            }
            ,
            63895: (e, t, n) => {
                n.d(t, {
                    E2: () => f,
                    H6: () => a,
                    V0: () => l,
                    Zy: () => c,
                    aP: () => u,
                    mn: () => d,
                    vk: () => g
                });
                var r = n(91069)
                  , i = n(43272)
                  , o = n(16833)
                  , s = n(67314);
                const a = "outstream"
                  , d = "instream"
                  , c = new Map([["mimes", e => Array.isArray(e) && e.length > 0 && e.every((e => "string" == typeof e))], ["minduration", r.isInteger], ["maxduration", r.isInteger], ["startdelay", r.isInteger], ["maxseq", r.isInteger], ["poddur", r.isInteger], ["protocols", r.isArrayOfNums], ["w", r.isInteger], ["h", r.isInteger], ["podid", r.isStr], ["podseq", r.isInteger], ["rqddurs", r.isArrayOfNums], ["placement", r.isInteger], ["plcmt", r.isInteger], ["linearity", r.isInteger], ["skip", e => [1, 0].includes(e)], ["skipmin", r.isInteger], ["skipafter", r.isInteger], ["sequence", r.isInteger], ["slotinpod", r.isInteger], ["mincpmpersec", r.isNumber], ["battr", r.isArrayOfNums], ["maxextended", r.isInteger], ["minbitrate", r.isInteger], ["maxbitrate", r.isInteger], ["boxingallowed", r.isInteger], ["playbackmethod", r.isArrayOfNums], ["playbackend", r.isInteger], ["delivery", r.isArrayOfNums], ["pos", r.isInteger], ["api", r.isArrayOfNums], ["companiontype", r.isArrayOfNums], ["poddedupe", r.isArrayOfNums]]);
                function l(e) {
                    const t = e?.mediaTypes?.video;
                    null != t && null == t.plcmt && (t.context === a || [2, 3, 4].includes(t.placement) ? t.plcmt = 4 : t.context !== a && [2, 6].includes(t.playbackmethod) && (t.plcmt = 2))
                }
                function u(e, t) {
                    const n = e?.mediaTypes?.video;
                    (0,
                    r.isPlainObject)(n) ? null != n && Object.entries(n).forEach((i => {
                        let[o,s] = i;
                        if (!c.has(o))
                            return;
                        c.get(o)(s) || ("function" == typeof t ? t(o, s, e) : (delete n[o],
                        (0,
                        r.logWarn)(`Invalid prop in adUnit "${e.code}": Invalid value for mediaTypes.video.${o} ORTB property. The property has been removed.`)))
                    }
                    )) : (0,
                    r.logWarn)("validateOrtbVideoFields: videoParams must be an object.")
                }
                function g(e) {
                    let {index: t=s.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = t.getMediaTypes(e)?.video
                      , r = n && n?.context
                      , i = n && n?.useCacheKey
                      , o = t.getAdUnit(e);
                    return f(e, o, n, r, i)
                }
                const f = (0,
                o.A_)("sync", (function(e, t, n, o, s) {
                    if (n && (s || o !== a)) {
                        const {url: t, useLocal: n} = i.$W.getConfig("cache") || {};
                        return t || n || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0,
                        r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling either prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n        or local cache with pbjs.setConfig({ cache: { useLocal: true }});\n      '),
                        !1)
                    }
                    return !(o === a && !s) || !!(e.renderer || t && t.renderer || n.renderer)
                }
                ), "checkVideoBidSetup")
            }
            ,
            68693: (e, t, n) => {
                n.d(t, {
                    M_: () => g,
                    Sb: () => f,
                    X5: () => E,
                    kh: () => c
                });
                var r = n(68044)
                  , i = n(43272)
                  , o = n(67314)
                  , s = n(91069)
                  , a = n(81657);
                const d = 15
                  , c = new Map;
                function l(e) {
                    let {index: t=o.n.index} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = u(e)
                      , r = t.getAuction(e);
                    let s = {
                        type: "xml",
                        value: n,
                        ttlseconds: Number(e.ttl) + d
                    };
                    return i.$W.getConfig("cache.vasttrack") && (s.bidder = e.bidder,
                    s.bidid = e.requestId,
                    s.aid = e.auctionId),
                    null != r && (s.timestamp = r.getAuctionStart()),
                    "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (s.key = e.customCacheKey),
                    s
                }
                function u(e) {
                    return e.vastXml ? e.vastXml : (t = e.vastUrl,
                    n = e.vastImpUrl,
                    `<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[${t}]]></VASTAdTagURI>\n        ${(n = n && (Array.isArray(n) ? n : [n])) ? n.map((e => `<Impression><![CDATA[${e}]]></Impression>`)).join("") : ""}\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>`);
                    var t, n
                }
                function g(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.g4;
                    const o = {
                        puts: e.map(l)
                    };
                    n(i.$W.getConfig("cache.timeout"))(i.$W.getConfig("cache.url"), function(e) {
                        return {
                            success: function(t) {
                                let n;
                                try {
                                    n = JSON.parse(t).responses
                                } catch (t) {
                                    return void e(t, [])
                                }
                                n ? e(null, n) : e(new Error("The cache server didn't respond with a responses property."), [])
                            },
                            error: function(t, n) {
                                e(new Error(`Error storing video ad in the cache: ${t}: ${JSON.stringify(n)}`), [])
                            }
                        }
                    }(t), JSON.stringify(o), {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                }
                const f = e => {
                    const t = u(e)
                      , n = URL.createObjectURL(new Blob([t],{
                        type: "text/xml"
                    }));
                    p(e, n),
                    c.set(e.videoCacheKey, n)
                }
                  , p = (e, t, n) => {
                    e.videoCacheKey = n || (0,
                    s.generateUUID)(),
                    e.vastUrl || (e.vastUrl = t)
                }
                  , m = {
                    store: g
                };
                function h(e) {
                    const t = e.map((e => e.bidResponse));
                    m.store(t, (function(n, r) {
                        var o;
                        n ? (o = n,
                        (0,
                        s.logError)(`Failed to save to the video cache: ${o}. Video bids will be discarded:`, t)) : e.length !== r.length ? (0,
                        s.logError)(`expected ${e.length} cache IDs, got ${r.length} instead`) : r.forEach(( (t, n) => {
                            const {auctionInstance: r, bidResponse: o, afterBidAdded: d} = e[n];
                            var c;
                            "" === t.uuid ? (0,
                            s.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.") : (p(o, (c = t.uuid,
                            `${i.$W.getConfig("cache.url")}?uuid=${c}`), t.uuid),
                            (0,
                            a.v8)(r, o),
                            d())
                        }
                        ))
                    }
                    ))
                }
                let b, y, v;
                i.$W.getConfig("cache", (e => {
                    let {cache: t} = e;
                    b = "number" == typeof t.batchSize && t.batchSize > 0 ? t.batchSize : 1,
                    y = "number" == typeof t.batchTimeout && t.batchTimeout > 0 ? t.batchTimeout : 0,
                    t.useLocal && !v && (v = o.n.onExpiry((e => {
                        e.getBidsReceived().forEach((e => {
                            const t = c.get(e.videoCacheKey);
                            t && t.startsWith("blob") && URL.revokeObjectURL(t),
                            c.delete(e.videoCacheKey)
                        }
                        ))
                    }
                    )))
                }
                ));
                const E = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : setTimeout
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h
                      , n = [[]]
                      , r = !1;
                    const i = e => e();
                    return function(o, s, a) {
                        const d = y > 0 ? e : i;
                        n[n.length - 1].length >= b && n.push([]),
                        n[n.length - 1].push({
                            auctionInstance: o,
                            bidResponse: s,
                            afterBidAdded: a
                        }),
                        r || (r = !0,
                        d(( () => {
                            n.forEach(t),
                            n = [[]],
                            r = !1
                        }
                        ), y))
                    }
                }()
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[37769], {
            88944: (t, n, e) => {
                e.d(n, {
                    M: () => o,
                    g: () => c
                });
                var i = e(91069);
                function c() {
                    try {
                        const t = (0,
                        i.getWindowTop)();
                        let {scrollY: n, scrollX: e} = t;
                        const {height: c, width: h} = o();
                        return {
                            top: n,
                            right: e + h,
                            bottom: n + c,
                            left: e
                        }
                    } catch (t) {
                        return {}
                    }
                }
                function o() {
                    const t = (0,
                    i.getWinDimensions)();
                    try {
                        const n = t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight || 0;
                        return {
                            width: t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth || 0,
                            height: n
                        }
                    } catch (t) {
                        return {}
                    }
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[12139], {
            30043: (t, e, n) => {
                n.d(e, {
                    k: () => c,
                    w: () => r
                });
                const s = 0
                  , l = 1;
                class c {
                    #t;
                    #e;
                    constructor(t) {
                        if ("function" != typeof t)
                            throw new Error("resolver not a function");
                        const e = []
                          , n = [];
                        let[c,r] = [s, l].map((t => function(l) {
                            if (t === s && "function" == typeof l?.then)
                                l.then(c, r);
                            else if (!e.length)
                                for (e.push(t, l); n.length; )
                                    n.shift()()
                        }
                        ));
                        try {
                            t(c, r)
                        } catch (t) {
                            r(t)
                        }
                        this.#t = e,
                        this.#e = n
                    }
                    then(t, e) {
                        const n = this.#t;
                        return new this.constructor(( (l, c) => {
                            const r = () => {
                                let r = n[1]
                                  , [h,i] = n[0] === s ? [t, l] : [e, c];
                                if ("function" == typeof h) {
                                    try {
                                        r = h(r)
                                    } catch (t) {
                                        return void c(t)
                                    }
                                    i = l
                                }
                                i(r)
                            }
                            ;
                            n.length ? r() : this.#e.push(r)
                        }
                        ))
                    }
                    catch(t) {
                        return this.then(null, t)
                    }
                    finally(t) {
                        let e;
                        return this.then((n => (e = n,
                        t())), (n => (e = this.constructor.reject(n),
                        t()))).then(( () => e))
                    }
                    static #n(t, e, n) {
                        let s = t.length;
                        function l() {
                            e.apply(this, arguments),
                            --s <= 0 && n && n()
                        }
                        0 === t.length && n ? n() : t.forEach(( (t, e) => this.resolve(t).then((t => l(!0, t, e)), (t => l(!1, t, e)))))
                    }
                    static race(t) {
                        return new this(( (e, n) => {
                            this.#n(t, ( (t, s) => t ? e(s) : n(s)))
                        }
                        ))
                    }
                    static all(t) {
                        return new this(( (e, n) => {
                            let s = [];
                            this.#n(t, ( (t, e, l) => t ? s[l] = e : n(e)), ( () => e(s)))
                        }
                        ))
                    }
                    static allSettled(t) {
                        return new this((e => {
                            let n = [];
                            this.#n(t, ( (t, e, s) => n[s] = t ? {
                                status: "fulfilled",
                                value: e
                            } : {
                                status: "rejected",
                                reason: e
                            }), ( () => e(n)))
                        }
                        ))
                    }
                    static resolve(t) {
                        return new this((e => e(t)))
                    }
                    static reject(t) {
                        return new this(( (e, n) => n(t)))
                    }
                }
                function r(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (e > 0)
                        return setTimeout(t, e);
                    t()
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[51085], {
            34595: (e, t, n) => {
                n.d(t, {
                    G: () => s
                });
                const s = '(()=>{"use strict";window.render=function({ad:e,adUrl:t,width:n,height:i,instl:d},{mkFrame:r},s){if(!e&&!t)throw{reason:"noAd",message:"Missing ad markup or URL"};{if(null==i){const e=s.document?.body;[e,e?.parentElement].filter((e=>null!=e?.style)).forEach((e=>e.style.height="100%"))}const h=s.document,o={width:n??"100%",height:i??"100%"};if(t&&!e?o.src=t:o.srcdoc=e,h.body.appendChild(r(h,o)),d&&s.frameElement){const e=s.frameElement.style;e.width=n?`${n}px`:"100vw",e.height=i?`${i}px`:"100vh"}}}})();'
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[12764], {
            2339: (o, n, e) => {
                function t(o, n) {
                    return function() {
                        const e = document.domain.split(".")
                          , t = `_gd${Date.now()}_${n}`;
                        for (let n, i, s = 0; s < e.length; s++) {
                            const u = e.slice(s).join(".");
                            if (o.setCookie(t, "1", void 0, void 0, u),
                            i = o.getCookie(t),
                            o.setCookie(t, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, u),
                            "1" !== i)
                                return n;
                            n = u
                        }
                    }
                }
                e.d(n, {
                    w: () => t
                })
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[57109], {
            20965: (t, e, n) => {
                n.d(e, {
                    c5: () => o,
                    q4: () => r
                });
                var a = n(25555);
                const c = 0
                  , l = 1
                  , r = 2;
                function o(t) {
                    let {apiName: e, apiVersion: n, apiArgs: o=["command", "callback", "parameter", "version"], callbackArgs: s=["returnValue", "success"], mode: i=c} = t
                      , u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    const f = {}
                      , d = `${e}Call`
                      , p = `${e}Return`;
                    function b(t) {
                        const e = "string" == typeof t.data && t.data.includes(p) ? JSON.parse(t.data) : t.data;
                        if (e?.[p]?.callId) {
                            const t = e[p];
                            f.hasOwnProperty(t.callId) && f[t.callId](...s.map((e => t[e])))
                        }
                    }
                    const [k,m] = function() {
                        let t, n = u, a = !1;
                        for (; null != n; ) {
                            try {
                                if ("function" == typeof n[e]) {
                                    t = n,
                                    a = !0;
                                    break
                                }
                            } catch (t) {}
                            try {
                                if (n.frames[`${e}Locator`]) {
                                    t = n;
                                    break
                                }
                            } catch (t) {}
                            if (n === u.top)
                                break;
                            n = n.parent
                        }
                        return [t, a]
                    }();
                    if (!k)
                        return;
                    function g(t) {
                        return t = Object.assign({
                            version: n
                        }, t),
                        o.map((e => [e, t[e]]))
                    }
                    function h(t, e, n, a) {
                        const c = "function" == typeof t;
                        return function(r, o) {
                            if (a && a(),
                            i !== l) {
                                (null == o || o ? e : n)(c ? void 0 : r)
                            }
                            c && t.apply(this, arguments)
                        }
                    }
                    let v;
                    return m ? v = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new a.U9(( (n, a) => {
                            const o = k[e](...g({
                                ...t,
                                callback: t.callback || i === r ? h(t.callback, n, a) : void 0
                            }).map((t => {
                                let[e,n] = t;
                                return n
                            }
                            )));
                            (i === l || null == t.callback && i === c) && n(o)
                        }
                        ))
                    }
                    : (u.addEventListener("message", b, !1),
                    v = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new a.U9(( (n, a) => {
                            const c = Math.random().toString()
                              , r = {
                                [d]: {
                                    ...Object.fromEntries(g(t).filter((t => {
                                        let[e] = t;
                                        return "callback" !== e
                                    }
                                    ))),
                                    callId: c
                                }
                            };
                            f[c] = h(t?.callback, n, a, (e || null == t?.callback) && ( () => {
                                delete f[c]
                            }
                            )),
                            k.postMessage(r, "*"),
                            i === l && n()
                        }
                        ))
                    }
                    ),
                    Object.assign(v, {
                        isDirect: m,
                        close() {
                            !m && u.removeEventListener("message", b)
                        }
                    })
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[90010], {
            63806: (n, t, e) => {
                e.d(t, {
                    yq: () => l
                });
                var o = e(16894)
                  , a = e(91069)
                  , s = e(7873)
                  , r = e(25555)
                  , i = e(2604);
                function l() {
                    let n, t, e, {namespace: l, displayName: c, consentDataHandler: u, parseConsentData: m, getNullConsent: g, cmpHandlers: d, DEFAULT_CMP: f="iab", DEFAULT_CONSENT_TIMEOUT: p=1e4} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    function C(n) {
                        return `consentManagement.${l} ${n}`
                    }
                    function D(n, t) {
                        return n(Object.assign({
                            [`${l}Consent`]: u.getConsentData()
                        }, t))
                    }
                    function h() {
                        return t().then((n => {
                            let {error: t} = n;
                            return {
                                error: t,
                                consentData: u.getConsentData()
                            }
                        }
                        ))
                    }
                    function b() {
                        null == n && (n = function(n, t) {
                            const e = new WeakSet;
                            return (0,
                            o.Ak)(n, (function(n, o) {
                                return t().then((t => {
                                    let {consentData: s, error: r} = t;
                                    !r || s && e.has(r) || (e.add(r),
                                    (0,
                                    a.logWarn)(r.message, ...r.args || [])),
                                    n.call(this, o)
                                }
                                )).catch((t => {
                                    (0,
                                    a.logError)(`${t?.message} Canceling auction as per consentManagement config.`, ...t?.args || []),
                                    n.stopTiming(),
                                    "function" == typeof o.bidsBackHandler ? o.bidsBackHandler() : (0,
                                    a.logError)("Error executing bidsBackHandler")
                                }
                                ))
                            }
                            ))
                        }(l, ( () => t())),
                        (0,
                        s.m)().requestBids.before(n, 50),
                        i.U3.before(D),
                        (0,
                        a.logInfo)(`${c} consentManagement module has been activated...`))
                    }
                    return function(o) {
                        if (o = o?.[l],
                        !o || "object" != typeof o)
                            return (0,
                            a.logWarn)(C("config not defined, exiting consent manager module")),
                            null != n && ((0,
                            s.m)().requestBids.getHooks({
                                hook: n
                            }).remove(),
                            i.U3.getHooks({
                                hook: D
                            }).remove(),
                            n = null),
                            {};
                        let T, k;
                        (0,
                        a.isStr)(o.cmpApi) ? T = o.cmpApi : (T = f,
                        (0,
                        a.logInfo)(C(`config did not specify cmp.  Using system default setting (${f}).`))),
                        (0,
                        a.isNumber)(o.timeout) ? k = o.timeout : (k = p,
                        (0,
                        a.logInfo)(C(`config did not specify timeout.  Using system default setting (${p}).`)));
                        const w = (0,
                        a.isNumber)(o.actionTimeout) ? o.actionTimeout : null;
                        let y;
                        "static" === T ? (0,
                        a.isPlainObject)(o.consentData) ? (e = o.consentData,
                        k = null,
                        y = () => new r.U9((n => n(u.setConsentData(m(e)))))) : (0,
                        a.logError)(C("config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")) : d.hasOwnProperty(T) ? y = d[T] : (u.setConsentData(null),
                        (0,
                        a.logWarn)(`${c} CMP framework (${T}) is not a supported framework.  Aborting consentManagement module and resuming auction.`),
                        y = () => r.U9.resolve());
                        const H = () => function(n) {
                            let t, {name: e, consentDataHandler: o, setupCmp: a, cmpTimeout: s, actionTimeout: r, getNullConsent: i} = n;
                            return o.enable(),
                            new Promise(( (n, l) => {
                                let c, u = !1;
                                function m(a) {
                                    null != t && clearTimeout(t),
                                    t = null != a ? setTimeout(( () => {
                                        const t = o.getConsentData() ?? (u ? c : i())
                                          , a = "timeout waiting for " + (u ? "user action on CMP" : "CMP to load");
                                        o.setConsentData(t),
                                        n({
                                            consentData: t,
                                            error: new Error(`${e} ${a}`)
                                        })
                                    }
                                    ), a) : null
                                }
                                a((function(n) {
                                    c = n,
                                    u || (u = !0,
                                    null != r && m(r))
                                }
                                )).then(( () => n({
                                    consentData: o.getConsentData()
                                })), l),
                                null != s && m(s)
                            }
                            )).finally(( () => {
                                t && clearTimeout(t)
                            }
                            )).catch((n => {
                                throw o.setConsentData(null),
                                n
                            }
                            ))
                        }({
                            name: c,
                            consentDataHandler: u,
                            setupCmp: y,
                            cmpTimeout: k,
                            actionTimeout: w,
                            getNullConsent: g
                        });
                        return t = ( () => {
                            let n;
                            return function() {
                                return null == n && (n = H().catch((t => {
                                    throw n = null,
                                    t
                                }
                                ))),
                                n
                            }
                        }
                        )(),
                        b(),
                        {
                            cmpHandler: T,
                            cmpTimeout: k,
                            actionTimeout: w,
                            staticConsentData: e,
                            loadConsentData: h,
                            requestBidsHook: n
                        }
                    }
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[33005], {
            51252: (t, n, o) => {
                o.d(n, {
                    Cn: () => w,
                    eu: () => r,
                    ho: () => f,
                    mw: () => a,
                    n9: () => u,
                    p: () => s,
                    ph: () => l
                });
                var e = o(73858)
                  , g = o(15901)
                  , d = o(91069)
                  , i = o(70433);
                function a(t) {
                    return n => (0,
                    d.compareCodeAndSlot)(n, t)
                }
                function l(t, n) {
                    if (!t || "string" != typeof t)
                        return !1;
                    window.googletag = window.googletag || {
                        cmd: []
                    },
                    window.googletag.cmd = window.googletag.cmd || [],
                    window.googletag.cmd.push(( () => {
                        window.googletag.pubads().setTargeting(t, n)
                    }
                    ))
                }
                function u(t) {
                    let n;
                    return (0,
                    d.isGptPubadsDefined)() && (n = (0,
                    g.I6)(window.googletag.pubads().getSlots(), a(t))),
                    n
                }
                function s(t) {
                    const n = u(t);
                    return n ? {
                        gptSlot: n.getAdUnitPath(),
                        divId: n.getSlotElementId()
                    } : {}
                }
                const w = ["IAB_AUDIENCE_1_1", "IAB_CONTENT_2_2"];
                function r(t) {
                    return Object.entries({
                        [w[0]]: c(t, ["user.data"], 4),
                        [w[1]]: c(t, e.Dy.map((t => `${t}.content.data`)), 6)
                    }).map((t => {
                        let[n,o] = t;
                        return o.length ? {
                            taxonomy: n,
                            values: o
                        } : null
                    }
                    )).filter((t => t))
                }
                function c(t, n, o) {
                    return n.flatMap((n => (0,
                    i.A)(t, n) || [])).filter((t => t.ext?.segtax === o)).flatMap((t => t.segment?.map((t => t.id)))).filter((t => t)).filter(d.uniques)
                }
                function f(t) {
                    !function(t, n) {
                        const o = () => window.googletag.pubads().addEventListener(t, n);
                        (0,
                        d.isGptPubadsDefined)() ? o() : (window.googletag = window.googletag || {},
                        window.googletag.cmd = window.googletag.cmd || [],
                        window.googletag.cmd.push(o))
                    }("slotRenderEnded", t)
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[47650], {
            25246: (t, n, e) => {
                e.d(n, {
                    Mu: () => o,
                    P8: () => p,
                    QS: () => d
                });
                var s = e(16916);
                const o = {
                    env: "vp",
                    gdfp_req: 1,
                    output: "vast",
                    unviewed_position_start: 1
                }
                  , p = {
                    protocol: "https",
                    host: "securepubads.g.doubleclick.net",
                    pathname: "/gampad/ads"
                };
                function d() {
                    const t = s.mW.getConsentData()
                      , n = {};
                    return t && ("boolean" == typeof t.gdprApplies && (n.gdpr = Number(t.gdprApplies)),
                    t.consentString && (n.gdpr_consent = t.consentString),
                    t.addtlConsent && (n.addtl_consent = t.addtlConsent)),
                    n
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[41], {
            74420: (e, n, r) => {
                r.d(n, {
                    A: () => s
                });
                const i = "application/xml";
                function s() {
                    let e, n;
                    return {
                        parse: function(n) {
                            return (e || (e = new DOMParser),
                            e).parseFromString(n, i)
                        },
                        serialize: function(e) {
                            return (n || (n = new XMLSerializer),
                            n).serializeToString(e)
                        }
                    }
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[40082], {
            77274: (e, n, t) => {
                t.d(n, {
                    l: () => v
                });
                var i = t(95139)
                  , o = t(76811)
                  , s = t(16916)
                  , r = t(91069);
                function a(e) {
                    return null != e && 0 !== e
                }
                function c(e) {
                    return ["MspaServiceProviderMode", "Gpc"].some((n => 1 === e[n])) || 2 === e.PersonalDataConsents || 1 === e.KnownChildSensitiveDataConsents[0] || 1 === e.KnownChildSensitiveDataConsents[2] || a(e.KnownChildSensitiveDataConsents[1]) || 0 === e.MspaCoveredTransaction
                }
                function l(e, n) {
                    return ["SensitiveDataProcessingOptOutNotice", "SensitiveDataLimitUseNotice"].some((t => e[t] === n))
                }
                function u(e) {
                    return c(e) || ["Sale", "Sharing", "TargetedAdvertising"].some((n => {
                        const t = e[`${n}OptOut`]
                          , i = e[`${n}OptOutNotice`];
                        return 1 === t || 2 === i || 2 === t && 0 === i
                    }
                    )) || 2 === e.SharingNotice || 2 === e.SharingOptOut && 0 === e.SharingNotice
                }
                const f = ( () => {
                    const e = ( () => {
                        const e = [6, 7, 9, 10, 12, 14, 16].map((e => --e))
                          , n = Array.from(Array(16).keys()).filter((e => 7 !== e))
                          , t = n.filter((n => !e.includes(n)));
                        return Object.fromEntries(Object.entries({
                            1: 12,
                            2: 16
                        }).map((i => {
                            let[o,s] = i;
                            const r = e => e < s;
                            return [o, {
                                cannotBeInScope: e.filter(r),
                                allExceptGeo: n.filter(r),
                                mustHaveConsent: t.filter(r)
                            }]
                        }
                        )))
                    }
                    )();
                    return function(n) {
                        const {cannotBeInScope: t, mustHaveConsent: i, allExceptGeo: o} = e[n.Version];
                        return u(n) || l(n, 2) || t.some((e => a(n.SensitiveDataProcessing[e]))) || i.some((e => 1 === n.SensitiveDataProcessing[e])) || l(n, 0) && o.some((e => 2 === n.SensitiveDataProcessing[e]))
                    }
                }
                )();
                const p = {
                    [o.Ml]: u,
                    [o.yl]: u,
                    [o.qX]: f,
                    [o.hE]: function(e) {
                        const n = e.SensitiveDataProcessing[7];
                        return 1 === n || c(e) || l(e, 2) || l(e, 0) && 2 === n
                    }
                };
                function v(e, n) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p
                      , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.qB
                      , c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => s.ad.getConsentData();
                    const l = []
                      , u = `MSPA (GPP '${e}' for section${n.length > 1 ? "s" : ""} ${n.join(", ")})`;
                    return (0,
                    r.logInfo)(`Enabling activity controls for ${u}`),
                    Object.entries(o).forEach((i => {
                        let[o,r] = i;
                        l.push(a(o, u, function(e, n, t) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => s.ad.getConsentData()?.applicableSections;
                            return function() {
                                if (i().some((n => e.includes(n)))) {
                                    const e = n();
                                    if (null == e)
                                        return {
                                            allow: !1,
                                            reason: "consent data not available"
                                        };
                                    if (![1, 2].includes(e.Version))
                                        return {
                                            allow: !1,
                                            reason: `unsupported consent specification version "${e.Version}"`
                                        };
                                    if (t(e))
                                        return {
                                            allow: !1
                                        }
                                }
                            }
                        }(n, ( () => {
                            return t((n = c()?.parsedSections?.[e],
                            Array.isArray(n) ? n.reduceRight(( (e, n) => Object.assign(n, e)), {}) : n));
                            var n
                        }
                        ), r, ( () => c()?.applicableSections || []))))
                    }
                    )),
                    () => l.forEach((e => e()))
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[44982], {
            29906: (e, l, s) => {
                function t(e, l) {
                    let s = [];
                    for (let t = 0; t < Math.ceil(e.length / l); t++) {
                        let h = t * l
                          , n = h + l;
                        s.push(e.slice(h, n))
                    }
                    return s
                }
                s.d(l, {
                    i: () => t
                })
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[85946], {
            42986: (e, t, n) => {
                n.d(t, {
                    $d: () => f,
                    EE: () => v,
                    GH: () => u,
                    Lp: () => A,
                    W: () => C,
                    Wu: () => D,
                    Zq: () => S,
                    bH: () => y,
                    lE: () => U,
                    pT: () => b
                });
                var r = n(91069)
                  , i = n(70433)
                  , o = n(29906)
                  , d = n(44796)
                  , a = n(12693)
                  , s = n(43272)
                  , c = n(71371);
                function u() {
                    return "wsid_" + parseInt(Date.now() * Math.random())
                }
                function p() {
                    try {
                        return (0,
                        r.parseUrl)(window.top.document.URL, {
                            decodeSearchAsString: !0
                        }).search
                    } catch (e) {
                        return ""
                    }
                }
                function l(e) {
                    return e.cId || e.CID || e.cID || e.CId || e.cid || e.ciD || e.Cid || e.CiD
                }
                function g(e) {
                    return e.pId || e.PID || e.pID || e.PId || e.pid || e.piD || e.Pid || e.PiD
                }
                function m(e) {
                    return e.subDomain || e.SubDomain || e.Subdomain || e.subdomain || e.SUBDOMAIN || e.subDOMAIN
                }
                function f(e) {
                    const t = e.params || {};
                    return !(!l(t) || !g(t))
                }
                function b(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                }
                function h(e, t, n, r) {
                    try {
                        const i = r || Date.now()
                          , o = JSON.stringify({
                            value: n,
                            created: i
                        });
                        e.setDataInLocalStorage(t, o)
                    } catch (e) {}
                }
                function I(e, t) {
                    try {
                        return b(e.getDataFromLocalStorage(t, null))
                    } catch (e) {}
                    return null
                }
                function C(e, t) {
                    let n = e.getDataFromLocalStorage(t, null);
                    return n || (n = String(Date.now()),
                    e.setDataInLocalStorage(t, n, null)),
                    n
                }
                function S(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Xz;
                    try {
                        const r = I(e, t);
                        let i, o = 0;
                        r && r.value && Date.now() - r.created < n && (o = r.value,
                        i = r.created);
                        const d = o + 1;
                        return h(e, t, d, i),
                        d
                    } catch (e) {
                        return 0
                    }
                }
                function y(e) {
                    if (!e.nurl)
                        return;
                    const t = {
                        adId: e.adId,
                        creativeId: e.creativeId,
                        auctionId: e.auctionId,
                        transactionId: e.transactionId,
                        adUnitCode: e.adUnitCode,
                        cpm: e.cpm,
                        currency: e.currency,
                        originalCpm: e.originalCpm,
                        originalCurrency: e.originalCurrency,
                        netRevenue: e.netRevenue,
                        mediaType: e.mediaType,
                        timeToRespond: e.timeToRespond,
                        status: e.status
                    }
                      , n = (0,
                    r.formatQS)(t)
                      , i = e.nurl + (-1 === e.nurl.indexOf("?") ? "?" : "&") + n;
                    (0,
                    r.triggerPixel)(i)
                }
                function v() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        iframeSyncUrl: "",
                        imageSyncUrl: ""
                    };
                    return function(t, n) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
                          , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        const c = []
                          , {iframeEnabled: u, pixelEnabled: p} = t
                          , {gdprApplies: l, consentString: g=""} = o
                          , {gppString: m, applicableSections: f} = a
                          , b = s.$W.getConfig("coppa") ? 1 : 0
                          , h = n.filter((e => (0,
                        i.A)(e, "body.cid"))).map((e => e.body.cid)).filter(r.uniques);
                        let I = `?cid=${encodeURIComponent(h.join(","))}&gdpr=${l ? 1 : 0}&gdpr_consent=${encodeURIComponent(g || "")}&us_privacy=${encodeURIComponent(d || "")}&coppa=${encodeURIComponent(b)}`;
                        return m && f?.length && (I += "&gpp=" + encodeURIComponent(m),
                        I += "&gpp_sid=" + encodeURIComponent(f.join(","))),
                        u && e.iframeSyncUrl && c.push({
                            type: "iframe",
                            url: `${e.iframeSyncUrl}/${I}`
                        }),
                        p && e.imageSyncUrl && c.push({
                            type: "image",
                            url: `${e.imageSyncUrl}/${I}`
                        }),
                        c
                    }
                }
                function D(e) {
                    return I(e, d.T7) || ""
                }
                function $(e, t, n, o, s, c, u, l, m) {
                    const {params: f, bidId: b, userId: C, adUnitCode: S, schain: y, mediaTypes: v, ortb2Imp: D, bidderRequestId: $, bidRequestsCount: A, bidderRequestsCount: U, bidderWinsCount: R} = e
                      , {ext: T} = f;
                    let {bidFloor: w} = f;
                    const q = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
                        const n = e.length;
                        let r = 0
                          , i = 0;
                        if (n > 0)
                            for (; i < n; )
                                r = (r << 5) - r + e.charCodeAt(i++) | 0;
                        return t + r
                    }(t)
                      , x = (0,
                    r.isFn)(m) ? m(q, e) : {}
                      , z = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.dB;
                        const r = `u_${t}`
                          , i = Date.now()
                          , o = I(e, r);
                        let a;
                        return !o || !o.value || i - o.created > n ? (a = `${t}_${i.toString()}`,
                        h(e, r, a)) : a = o.value,
                        a
                    }(c, q)
                      , _ = g(f)
                      , O = a.u.get(l, "storageAllowed")
                      , E = (0,
                    i.A)(e, "ortb2Imp.ext.gpid") || (0,
                    i.A)(e, "ortb2Imp.ext.data.pbadslot", "")
                      , W = (0,
                    i.A)(o, "ortb2.site.cat", [])
                      , j = (0,
                    i.A)(o, "ortb2.site.pagecat", [])
                      , F = (0,
                    i.A)(o, "ortb2.site.content.data", [])
                      , L = (0,
                    i.A)(o, "ortb2.user.data", [])
                      , P = (0,
                    i.A)(o, "ortb2.site.content.language") || document.documentElement.lang
                      , M = (0,
                    i.A)(o, "ortb2.regs.coppa", 0)
                      , k = (0,
                    i.A)(o, "ortb2.device", {});
                    if ((0,
                    r.isFn)(e.getFloor)) {
                        const t = e.getFloor({
                            currency: "USD",
                            mediaType: "*",
                            size: "*"
                        });
                        "USD" === t?.currency && (w = t.floor)
                    }
                    let X = {
                        url: encodeURIComponent(t),
                        uqs: p(),
                        cb: Date.now(),
                        bidFloor: w,
                        bidId: b,
                        referrer: o.refererInfo.ref,
                        adUnitCode: S,
                        publisherId: _,
                        sizes: n,
                        uniqueDealId: z,
                        bidderVersion: u,
                        prebidVersion: "9.44.1",
                        res: `${screen.width}x${screen.height}`,
                        schain: y,
                        mediaTypes: v,
                        isStorageAllowed: O,
                        gpid: E,
                        cat: W,
                        contentData: F,
                        contentLang: P,
                        coppa: M,
                        userData: L,
                        pagecat: j,
                        transactionId: D?.ext?.tid,
                        bidderRequestId: $,
                        bidRequestsCount: A,
                        bidderRequestsCount: U,
                        bidderWinsCount: R,
                        bidderTimeout: s,
                        device: k,
                        ...x
                    };
                    !function(e, t) {
                        let n;
                        (0,
                        r._each)(t, ( (t, r) => {
                            switch (n = `uid.${r}`,
                            r) {
                            case "lipb":
                                e[n] = t.lipbid;
                                break;
                            case "id5id":
                                e[n] = t.uid;
                                break;
                            default:
                                e[n] = t
                            }
                        }
                        ))
                    }(X, C);
                    const B = (0,
                    i.A)(o, "ortb2.device.sua");
                    if (B && (X.sua = B),
                    o.gdprConsent && (o.gdprConsent.consentString && (X.gdprConsent = o.gdprConsent.consentString),
                    void 0 !== o.gdprConsent.gdprApplies && (X.gdpr = o.gdprConsent.gdprApplies ? 1 : 0)),
                    o.uspConsent && (X.usPrivacy = o.uspConsent),
                    o.gppConsent ? (X.gppString = o.gppConsent.gppString,
                    X.gppSid = o.gppConsent.applicableSections) : o.ortb2?.regs?.gpp && (X.gppString = o.ortb2.regs.gpp,
                    X.gppSid = o.ortb2.regs.gpp_sid),
                    o.paapi?.enabled) {
                        const e = (0,
                        i.A)(o, "ortb2Imp.ext.ae");
                        e && (X.fledge = e)
                    }
                    if ((0,
                    i.A)(v, "video.api", []).includes(7)) {
                        const e = (0,
                        i.A)(o, "ortb2.source.ext");
                        e?.omidpv && (X.omidpv = e.omidpv),
                        e?.omidpn && (X.omidpn = e.omidpn)
                    }
                    const N = (0,
                    i.A)(o, "ortb2.regs.ext.dsa");
                    return N && (X.dsa = N),
                    (0,
                    r._each)(T, ( (e, t) => {
                        X["ext." + t] = e
                    }
                    )),
                    X
                }
                function A(e, t) {
                    return function(n, r) {
                        if (!n || !n.body)
                            return [];
                        const o = t && s.$W.getConfig(`${e}.singleRequest`)
                          , a = (0,
                        i.A)(r, "data.bidId")
                          , {results: u} = n.body;
                        let p = [];
                        try {
                            return u.forEach(( (e, t) => {
                                const {creativeId: n, ad: r, price: i, exp: s, width: u, height: l, currency: g, bidId: m, nurl: f, advertiserDomains: b, metaData: h, mediaType: I=c.D4} = e;
                                if (!r || !i)
                                    return;
                                const C = {
                                    requestId: o && m ? m : a,
                                    cpm: i,
                                    width: u,
                                    height: l,
                                    creativeId: n,
                                    currency: g || d.UM,
                                    netRevenue: !0,
                                    ttl: s || d.Xd
                                };
                                f && (C.nurl = f),
                                h ? Object.assign(C, {
                                    meta: h
                                }) : Object.assign(C, {
                                    meta: {
                                        advertiserDomains: b || []
                                    }
                                }),
                                I === c.D4 ? Object.assign(C, {
                                    ad: r
                                }) : Object.assign(C, {
                                    vastXml: r,
                                    mediaType: c.G_
                                }),
                                p.push(C)
                            }
                            )),
                            p
                        } catch (e) {
                            return []
                        }
                    }
                }
                function U(e, t, n, i, d, a) {
                    function u(r, o, a, s, c) {
                        const {params: u} = r
                          , p = l(u)
                          , g = m(u)
                          , f = $(r, o, a, s, c, n, d, i, t);
                        return {
                            method: "POST",
                            url: `${e(g)}/prebid/multi/${p}`,
                            data: f
                        }
                    }
                    return function(p, g) {
                        const f = g.refererInfo.page || g.refererInfo.topmostLocation
                          , b = g.timeout || s.$W.getConfig("bidderTimeout")
                          , h = a && s.$W.getConfig(`${i}.singleRequest`)
                          , I = [];
                        if (h) {
                            const a = p.filter((e => (0,
                            r.isArray)(e.mediaTypes) ? e.mediaTypes.includes(c.D4) : void 0 !== e.mediaTypes[c.D4]));
                            if (a.length > 0) {
                                const c = function(a, c, u, p) {
                                    const {params: g} = a[0]
                                      , f = l(g)
                                      , b = m(g)
                                      , h = a.map((e => {
                                        const o = (0,
                                        r.parseSizesInput)(e.sizes);
                                        return $(e, u, o, c, p, n, d, i, t)
                                    }
                                    ))
                                      , I = Math.min(20, s.$W.getConfig(`${i}.chunkSize`) || 10);
                                    return (0,
                                    o.i)(h, I).map((t => ({
                                        method: "POST",
                                        url: `${e(b)}/prebid/multi/${f}`,
                                        data: {
                                            bids: t
                                        }
                                    })))
                                }(a, g, f, b);
                                I.push(...c)
                            }
                            p.filter((e => void 0 !== e.mediaTypes[c.G_])).forEach((e => {
                                const t = (0,
                                r.parseSizesInput)(e.sizes)
                                  , n = u(e, f, t, g, b);
                                I.push(n)
                            }
                            ))
                        } else
                            p.forEach((e => {
                                const t = (0,
                                r.parseSizesInput)(e.sizes)
                                  , n = u(e, f, t, g, b);
                                I.push(n)
                            }
                            ));
                        return I
                    }
                }
            }
            ,
            44796: (e, t, n) => {
                n.d(t, {
                    T7: () => a,
                    UM: () => r,
                    Xd: () => i,
                    Xz: () => o,
                    Zb: () => s,
                    dB: () => d,
                    mB: () => c
                });
                const r = "USD"
                  , i = 300
                  , o = 9e5
                  , d = 36e5
                  , a = "vidSid"
                  , s = "vdzwopt"
                  , c = "vdzHum"
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[12183], {
            29609: (e, t, n) => {
                n.d(t, {
                    C1: () => d,
                    FN: () => m,
                    H: () => c,
                    HX: () => o,
                    OS: () => a,
                    Rj: () => s,
                    nf: () => p,
                    rY: () => u,
                    xg: () => r
                });
                var i = n(71371);
                const r = [i.D4, i.G_, i.s6]
                  , s = "7.0.0"
                  , o = 360
                  , a = "USD"
                  , d = "https://hb.yellowblue.io/"
                  , p = "rise"
                  , c = 1043
                  , u = [{
                    code: "risexchange",
                    gvlid: c
                }, {
                    code: "openwebxchange",
                    gvlid: 280
                }]
                  , m = {
                    PRODUCTION: "hb-multi",
                    TEST: "hb-multi-test"
                }
            }
            ,
            37668: (e, t, n) => {
                n.d(t, {
                    $h: () => m,
                    B2: () => d,
                    c5: () => y,
                    q0: () => b
                });
                var i = n(70433)
                  , r = n(91069)
                  , s = n(71371)
                  , o = n(43272)
                  , a = n(29609);
                const d = (e, t) => ({
                    version: a.Rj,
                    supportedMediaTypes: a.xg,
                    buildRequests: function(n, i) {
                        const r = {}
                          , s = n[0]
                          , o = s.params.testMode
                          , a = s.params.rtbDomain || e;
                        return r.params = b(s, i),
                        r.bids = y(n, i),
                        {
                            method: "POST",
                            url: f(o, a, t),
                            data: r
                        }
                    },
                    interpretResponse: function(e) {
                        let {body: t} = e;
                        const n = [];
                        return t.bids && t.bids.forEach((e => {
                            const t = function(e) {
                                const t = {
                                    requestId: e.requestId,
                                    cpm: e.cpm,
                                    currency: e.currency || a.OS,
                                    width: e.width,
                                    height: e.height,
                                    ttl: e.ttl || a.HX,
                                    creativeId: e.creativeId,
                                    netRevenue: e.netRevenue || !0,
                                    nurl: e.nurl,
                                    mediaType: e.mediaType,
                                    meta: {
                                        mediaType: e.mediaType
                                    }
                                };
                                e.mediaType === s.G_ ? t.vastXml = e.vastXml : e.mediaType === s.D4 ? t.ad = e.ad : e.mediaType === s.s6 && (t.native = {
                                    ortb: e.native
                                });
                                e.adomain && e.adomain.length && (t.meta.advertiserDomains = e.adomain);
                                return t
                            }(e);
                            n.push(t)
                        }
                        )),
                        n
                    },
                    getUserSyncs: function(e, t) {
                        const n = [];
                        for (const s of t)
                            if (e.iframeEnabled && (0,
                            i.A)(s, "body.params.userSyncURL") && n.push({
                                type: "iframe",
                                url: (0,
                                i.A)(s, "body.params.userSyncURL")
                            }),
                            e.pixelEnabled && (0,
                            r.isArray)((0,
                            i.A)(s, "body.params.userSyncPixels"))) {
                                const e = s.body.params.userSyncPixels.map((e => ({
                                    type: "image",
                                    url: e
                                })));
                                n.push(...e)
                            }
                        return n
                    },
                    onBidWon: function(e) {
                        null != e && ((0,
                        r.logInfo)("onBidWon:", e),
                        e.hasOwnProperty("nurl") && e.nurl.length > 0 && (0,
                        r.triggerPixel)(e.nurl))
                    }
                });
                function p(e) {
                    const t = (0,
                    i.A)(e, "mediaTypes");
                    return (0,
                    r.isPlainObject)(t) ? Object.keys(t) : []
                }
                function c(e) {
                    if (!(0,
                    r.isFn)(e.getFloor))
                        return 0;
                    const t = p(e)
                      , n = t[0];
                    let i = e.getFloor({
                        currency: "USD",
                        mediaType: 1 === t.length ? n : "*",
                        size: "*"
                    });
                    return (0,
                    r.isPlainObject)(i) && "USD" === i.currency && i.floor ? i.floor : 0
                }
                function u(e) {
                    let t = [];
                    const n = p(e)
                      , s = n[0];
                    return 1 === n.length && (0,
                    i.A)(e, `mediaTypes.${s}.sizes`) ? t = e.mediaTypes[s].sizes : (0,
                    r.isArray)(e.sizes) && e.sizes.length > 0 && (t = e.sizes),
                    t
                }
                function m(e) {
                    if ((0,
                    r.isEmpty)(e))
                        return "";
                    let t = `${e.ver},${e.complete}`;
                    return e.nodes.forEach((e => {
                        t += "!",
                        t += `${l(e.asi)},`,
                        t += `${l(e.sid)},`,
                        t += `${l(e.hp)},`,
                        t += `${l(e.rid)},`,
                        t += `${l(e.name)},`,
                        t += `${l(e.domain)}`
                    }
                    )),
                    t
                }
                function l(e) {
                    return "" !== e && void 0 !== e ? encodeURIComponent(e) : ""
                }
                function g(e, t) {
                    if (!e)
                        return !1;
                    const n = "include" === e.filter
                      , i = (0,
                    r.isArray)(e.bidders) ? e.bidders : [t];
                    return n && (0,
                    r.contains)(i, t)
                }
                function f(e, t, n) {
                    const i = t.startsWith("http") ? "" : "https://"
                      , r = t.endsWith("/") ? t : `${t}/`;
                    return e ? `${i}${r}${n.TEST}` : `${i}${r}${n.PRODUCTION}`
                }
                function y(e, t) {
                    const n = [];
                    return e.length && e.forEach((e => {
                        n.push(function(e, t) {
                            const {params: n} = e
                              , o = p(e);
                            isNaN(n.floorPrice) && (n.floorPrice = 0);
                            const a = {
                                mediaType: o.join(","),
                                adUnitCode: (0,
                                r.getBidIdParameter)("adUnitCode", e),
                                sizes: u(e),
                                floorPrice: Math.max(c(e), n.floorPrice),
                                bidId: (0,
                                r.getBidIdParameter)("bidId", e),
                                loop: e.auctionsCount || 0,
                                bidderRequestId: (0,
                                r.getBidIdParameter)("bidderRequestId", e),
                                transactionId: e.ortb2Imp?.ext?.tid || "",
                                coppa: 0
                            }
                              , d = function(e) {
                                const t = p(e)
                                  , n = t[0];
                                if (1 === t.length)
                                    return (0,
                                    i.A)(e, `mediaTypes.${n}.pos`)
                            }(e);
                            (0,
                            r.isInteger)(d) && (a.pos = d);
                            const m = (0,
                            i.A)(e, "ortb2Imp.ext.gpid");
                            m && (a.gpid = m);
                            const l = n.placementId || function(e) {
                                const t = p(e)
                                  , n = t[0];
                                if (1 === t.length)
                                    return (0,
                                    i.A)(e, `mediaTypes.${n}.name`)
                            }(e);
                            l && (a.placementId = l);
                            const g = (0,
                            i.A)(e, "ortb2.device.sua");
                            g && (a.sua = g);
                            const f = (0,
                            i.A)(e, "ortb2.regs.coppa");
                            f && (a.coppa = 1);
                            if (o.includes(s.G_)) {
                                const t = (0,
                                i.A)(e, "mediaTypes.video.playbackmethod");
                                let n;
                                (0,
                                r.isArray)(t) && (0,
                                r.isInteger)(t[0]) ? n = t[0] : (0,
                                r.isInteger)(t) && (n = t),
                                n && (a.playbackMethod = n);
                                const s = (0,
                                i.A)(e, "mediaTypes.video.placement");
                                s && (a.placement = s);
                                const o = (0,
                                i.A)(e, "mediaTypes.video.minduration");
                                o && (a.minDuration = o);
                                const d = (0,
                                i.A)(e, "mediaTypes.video.maxduration");
                                d && (a.maxDuration = d);
                                const p = (0,
                                i.A)(e, "mediaTypes.video.skip");
                                p && (a.skip = p);
                                const c = (0,
                                i.A)(e, "mediaTypes.video.linearity");
                                c && (a.linearity = c);
                                const u = (0,
                                i.A)(e, "mediaTypes.video.protocols");
                                u && (a.protocols = u);
                                const m = (0,
                                i.A)(e, "mediaTypes.video.plcmt");
                                m && (a.plcmt = m);
                                const l = (0,
                                i.A)(e, "mediaTypes.video.mimes");
                                l && (a.mimes = l);
                                const g = (0,
                                i.A)(e, "mediaTypes.video.api");
                                g && (a.api = g)
                            }
                            if (o.includes(s.s6)) {
                                const t = (0,
                                i.A)(e, "nativeOrtbRequest");
                                t && (a.nativeOrtbRequest = t)
                            }
                            return a
                        }(e))
                    }
                    )),
                    n
                }
                function b(e, t, n) {
                    const s = window.location.hostname
                      , {syncEnabled: a, filterSettings: d} = o.$W.getConfig("userSync") || {}
                      , {bidderCode: p} = t
                      , c = e.params
                      , u = t.timeout
                      , l = {
                        wrapper_type: "prebidjs",
                        wrapper_vendor: "pbjs",
                        wrapper_version: "9.44.1",
                        adapter_version: n || "6.0.0",
                        auction_start: t.auctionStart,
                        publisher_id: c.org,
                        publisher_name: s,
                        site_domain: s,
                        dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                        device_type: (f = navigator.userAgent,
                        /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(f.toLowerCase()) ? "5" : /iphone|ipod|android|blackberry|opera|mini|windows\\sce|palm|smartphone|iemobile/i.test(f.toLowerCase()) ? "4" : /smart[-_\\s]?tv|hbbtv|appletv|googletv|hdmi|netcast|viera|nettv|roku|\\bdtv\\b|sonydtv|inettvbrowser|\\btv\\b/i.test(f.toLowerCase()) ? "3" : "1"),
                        ua: navigator.userAgent,
                        is_wrapper: !!c.isWrapper,
                        session_id: c.sessionId || (0,
                        r.getBidIdParameter)("bidderRequestId", e),
                        tmax: u
                    };
                    var f;
                    const y = (0,
                    r.getBidIdParameter)("userId", e);
                    y && (l.userIds = JSON.stringify(y));
                    const b = t.ortb2 || {};
                    if (b.site && (l.site_metadata = JSON.stringify(b.site)),
                    b.user && (l.user_metadata = JSON.stringify(b.user)),
                    b.device && (l.device = b.device),
                    a) {
                        const e = function(e, t) {
                            const n = "image";
                            return e && ["all", "iframe"].some((n => g(e[n], t))) ? "iframe" : e && e[n] && !g(e[n], t) ? void 0 : "pixel"
                        }(d, p);
                        e && (l.cs_method = e)
                    }
                    return t.uspConsent && (l.us_privacy = t.uspConsent),
                    t && t.gdprConsent && t.gdprConsent.gdprApplies && (l.gdpr = t.gdprConsent.gdprApplies,
                    l.gdpr_consent = t.gdprConsent.consentString),
                    t.gppConsent ? (l.gpp = t.gppConsent.gppString,
                    l.gpp_sid = t.gppConsent.applicableSections) : t.ortb2?.regs?.gpp && (l.gpp = t.ortb2.regs.gpp,
                    l.gpp_sid = t.ortb2.regs.gpp_sid),
                    c.ifa && (l.ifa = c.ifa),
                    e.schain && (l.schain = m(e.schain)),
                    t && t.refererInfo && (l.referrer = (0,
                    i.A)(t, "refererInfo.ref"),
                    l.page_url = (0,
                    i.A)(t, "refererInfo.page") || (0,
                    i.A)(window, "location.href"),
                    l.site_domain = (0,
                    i.A)(t, "refererInfo.domain") || (0,
                    i.A)(window, "location.hostname")),
                    l
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[32316], {
            34278: (e, n, t) => {
                t.d(n, {
                    G: () => l
                });
                var s = t(77332);
                const u = new Map;
                function l(e) {
                    let n;
                    return u.has(e) ? n = u.get(e) : (n = e.getBoundingClientRect(),
                    u.set(e, n)),
                    n
                }
                s.gH.before(( (e, n) => {
                    u.clear(),
                    e(n)
                }
                ))
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[58498], {
            89766: (e, t, r) => {
                r.d(t, {
                    T: () => l,
                    A: () => m
                });
                const n = new WeakMap;
                var i = r(91069)
                  , s = r(71371);
                var o = r(63895);
                var a = r(75561);
                var d = r(1e3)
                  , p = r(73858);
                const c = {
                    [d.S3]: {
                        fpd: {
                            priority: 99,
                            fn(e, t) {
                                (0,
                                i.mergeDeep)(e, t.ortb2)
                            }
                        },
                        onlyOneClient: {
                            priority: -99,
                            fn: (0,
                            p.i8)("ORTB request")
                        },
                        props: {
                            fn(e, t) {
                                Object.assign(e, {
                                    id: e.id || (0,
                                    i.generateUUID)(),
                                    test: e.test || 0
                                });
                                const r = parseInt(t.timeout, 10);
                                isNaN(r) || (e.tmax = r)
                            }
                        }
                    },
                    [d.Tb]: {
                        fpd: {
                            priority: 99,
                            fn(e, t) {
                                (0,
                                i.mergeDeep)(e, t.ortb2Imp)
                            }
                        },
                        id: {
                            fn(e, t) {
                                e.id = t.bidId
                            }
                        },
                        banner: {
                            fn: function(e, t, r) {
                                if (r.mediaType && r.mediaType !== s.D4)
                                    return;
                                const n = t?.mediaTypes?.banner;
                                if (n) {
                                    const r = {
                                        topframe: !0 === (0,
                                        i.inIframe)() ? 0 : 1
                                    };
                                    n.sizes && null == t.ortb2Imp?.banner?.format && (r.format = (0,
                                    i.sizesToSizeTuples)(n.sizes).map(i.sizeTupleToRtbSize)),
                                    n.hasOwnProperty("pos") && (r.pos = n.pos),
                                    e.banner = (0,
                                    i.mergeDeep)(r, e.banner)
                                }
                            }
                        },
                        pbadslot: {
                            fn(e) {
                                const t = e.ext?.data?.pbadslot;
                                t && "string" == typeof t || delete e.ext?.data?.pbadslot
                            }
                        },
                        secure: {
                            fn(e, t) {
                                e.secure = e.secure ?? 1
                            }
                        }
                    },
                    [d.WR]: {
                        mediaType: {
                            priority: 99,
                            fn: a.K
                        },
                        banner: {
                            fn: function() {
                                let {createPixel: e=(e => (0,
                                i.createTrackPixelHtml)(decodeURIComponent(e), i.encodeMacroURI))} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return function(t, r) {
                                    t.mediaType === s.D4 && (r.adm && r.nurl ? t.ad = e(r.nurl) + r.adm : r.adm ? t.ad = r.adm : r.nurl && (t.adUrl = r.nurl))
                                }
                            }()
                        },
                        props: {
                            fn(e, t, r) {
                                Object.entries({
                                    requestId: r.bidRequest?.bidId,
                                    seatBidId: t.id,
                                    cpm: t.price,
                                    currency: r.ortbResponse.cur || r.currency,
                                    width: t.w,
                                    height: t.h,
                                    wratio: t.wratio,
                                    hratio: t.hratio,
                                    dealId: t.dealid,
                                    creative_id: t.crid,
                                    creativeId: t.crid,
                                    burl: t.burl,
                                    ttl: t.exp || r.ttl,
                                    netRevenue: r.netRevenue
                                }).filter((e => {
                                    let[t,r] = e;
                                    return void 0 !== r
                                }
                                )).forEach((t => {
                                    let[r,n] = t;
                                    return e[r] = n
                                }
                                )),
                                e.meta || (e.meta = {}),
                                t.adomain && (e.meta.advertiserDomains = t.adomain),
                                t.ext?.dsa && (e.meta.dsa = t.ext.dsa),
                                t.cat && (e.meta.primaryCatId = t.cat[0],
                                e.meta.secondaryCatIds = t.cat.slice(1)),
                                t.attr && (e.meta.attr = t.attr),
                                t.ext?.eventtrackers && (e.eventtrackers = (e.eventtrackers ?? []).concat(t.ext.eventtrackers))
                            }
                        }
                    }
                };
                c[d.Tb].native = {
                    fn: function(e, t, r) {
                        if (r.mediaType && r.mediaType !== s.s6)
                            return;
                        let n = t.nativeOrtbRequest;
                        n && (n = Object.assign({}, r.nativeRequest, n),
                        n.assets?.length ? e.native = (0,
                        i.mergeDeep)({}, {
                            request: JSON.stringify(n),
                            ver: n.ver
                        }, e.native) : (0,
                        i.logWarn)("mediaTypes.native is set, but no assets were specified. Native request skipped.", t))
                    }
                },
                c[d.WR].native = {
                    fn: function(e, t) {
                        if (e.mediaType === s.s6) {
                            let r;
                            if (r = "string" == typeof t.adm ? JSON.parse(t.adm) : t.adm,
                            !(0,
                            i.isPlainObject)(r) || !Array.isArray(r.assets))
                                throw new Error("ORTB native response contained no assets");
                            e.native = {
                                ortb: r
                            }
                        }
                    }
                },
                c[d.Tb].video = {
                    fn: function(e, t, r) {
                        if (r.mediaType && r.mediaType !== s.G_)
                            return;
                        const n = t?.mediaTypes?.video;
                        if (!(0,
                        i.isEmpty)(n)) {
                            const t = Object.fromEntries(Object.entries(n).filter((e => {
                                let[t] = e;
                                return o.Zy.has(t)
                            }
                            )));
                            if (n.playerSize) {
                                const e = (0,
                                i.sizesToSizeTuples)(n.playerSize).map(i.sizeTupleToRtbSize);
                                e.length > 1 && (0,
                                i.logWarn)("video request specifies more than one playerSize; all but the first will be ignored"),
                                Object.assign(t, e[0])
                            }
                            e.video = (0,
                            i.mergeDeep)(t, e.video)
                        }
                    }
                },
                c[d.WR].video = {
                    fn: function(e, t, r) {
                        e.mediaType === s.G_ && (r?.imp?.video?.w && r?.imp?.video?.h && ([e.playerWidth,e.playerHeight] = [r.imp.video.w, r.imp.video.h]),
                        t.adm && (e.vastXml = t.adm),
                        t.nurl && (e.vastUrl = t.nurl))
                    }
                };
                var u = r(99466);
                function m() {
                    let {context: e={}, processors: t=l, overrides: r={}, imp: s, request: o, bidResponse: a, response: p} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const c = new WeakMap;
                    function u(e, i, s, o) {
                        let a;
                        return function() {
                            return null == a && (a = function() {
                                let a = s.bind(this, function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (!n.has(e)) {
                                        const t = Object.entries(e);
                                        t.sort(( (e, t) => (e = e[1].priority || 0) === (t = t[1].priority || 0) ? 0 : e > t ? -1 : 1)),
                                        n.set(e, t.map((e => {
                                            let[t,r] = e;
                                            return [t, r.fn]
                                        }
                                        )))
                                    }
                                    const r = n.get(e).filter((e => {
                                        let[r] = e;
                                        return !t.hasOwnProperty(r) || t[r]
                                    }
                                    )).map((function(e) {
                                        let[r,n] = e;
                                        return t.hasOwnProperty(r) ? t[r].bind(this, n) : n
                                    }
                                    ));
                                    return function() {
                                        const e = Array.from(arguments);
                                        r.forEach((t => {
                                            t.apply(this, e)
                                        }
                                        ))
                                    }
                                }(t()[e] || {}, r[e] || {}));
                                return i && (a = i.bind(this, a)),
                                function() {
                                    try {
                                        return a.apply(this, arguments)
                                    } catch (e) {
                                        o.call(this, e, ...arguments)
                                    }
                                }
                            }()),
                            a.apply(this, arguments)
                        }
                    }
                    const m = u(d.Tb, s, (function(e, t, r) {
                        const n = {};
                        return e(n, t, r),
                        n
                    }
                    ), (function(e, t, r) {
                        (0,
                        i.logError)("Error while converting bidRequest to ORTB imp; request skipped.", {
                            error: e,
                            bidRequest: t,
                            context: r
                        })
                    }
                    ))
                      , f = u(d.S3, o, (function(e, t, r, n) {
                        const i = {
                            imp: t
                        };
                        return e(i, r, n),
                        i
                    }
                    ), (function(e, t, r, n) {
                        throw (0,
                        i.logError)("Error while converting to ORTB request", {
                            error: e,
                            imps: t,
                            bidderRequest: r,
                            context: n
                        }),
                        e
                    }
                    ))
                      , b = u(d.WR, a, (function(e, t, r) {
                        const n = {};
                        return e(n, t, r),
                        n
                    }
                    ), (function(e, t, r) {
                        (0,
                        i.logError)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.", {
                            error: e,
                            bid: t,
                            context: r
                        })
                    }
                    ))
                      , y = u(d.Cf, p, (function(e, t, r, n) {
                        const i = {
                            bids: t
                        };
                        return e(i, r, n),
                        i
                    }
                    ), (function(e, t, r, n) {
                        throw (0,
                        i.logError)("Error while converting from ORTB response", {
                            error: e,
                            bidResponses: t,
                            ortbResponse: r,
                            context: n
                        }),
                        e
                    }
                    ));
                    return {
                        toORTB(t) {
                            let {bidderRequest: r, bidRequests: n, context: s={}} = t;
                            n = n || r.bids;
                            const o = {
                                req: Object.assign({
                                    bidRequests: n
                                }, e, s),
                                imp: {}
                            };
                            o.req.impContext = o.imp;
                            const a = n.map((t => {
                                const n = Object.assign({
                                    bidderRequest: r,
                                    reqContext: o.req
                                }, e, s)
                                  , a = m(t, n);
                                if (null != a) {
                                    if (a.hasOwnProperty("id"))
                                        return Object.assign(n, {
                                            bidRequest: t,
                                            imp: a
                                        }),
                                        o.imp[a.id] = n,
                                        a;
                                    (0,
                                    i.logError)("Converted ORTB imp does not specify an id, ignoring bid request", t, a)
                                }
                            }
                            )).filter(Boolean)
                              , d = f(a, r, o.req);
                            return o.req.bidderRequest = r,
                            null != d && c.set(d, o),
                            d
                        },
                        fromORTB(e) {
                            let {request: t, response: r} = e;
                            const n = c.get(t);
                            if (null == n)
                                throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");
                            function s(e) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return Object.assign(e, {
                                    ortbRequest: t
                                }, r)
                            }
                            const o = Object.fromEntries((t.imp || []).map((e => [e.id, e])))
                              , a = (r.seatbid || []).flatMap((e => (e.bid || []).map((t => {
                                if (o.hasOwnProperty(t.impid) && n.imp.hasOwnProperty(t.impid))
                                    return b(t, s(n.imp[t.impid], {
                                        imp: o[t.impid],
                                        seatbid: e,
                                        ortbResponse: r
                                    }));
                                (0,
                                i.logError)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid", t)
                            }
                            )))).filter(Boolean);
                            return y(a, r, s(n.req))
                        }
                    }
                }
                const l = (0,
                i.memoize)(( () => (0,
                u.U)(c, (0,
                d.yB)(d.qN))))
            }
            ,
            99466: (e, t, r) => {
                r.d(t, {
                    U: () => i
                });
                var n = r(1e3);
                function i() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    const s = t.shift()
                      , o = t.length > 1 ? i(...t) : t[0];
                    return Object.fromEntries(n.zt.map((e => [e, Object.assign({}, s[e], o[e])])))
                }
            }
            ,
            75561: (e, t, r) => {
                r.d(t, {
                    K: () => s,
                    X: () => i
                });
                var n = r(71371);
                const i = {
                    1: n.D4,
                    2: n.G_,
                    4: n.s6
                };
                function s(e, t, r) {
                    if (e.mediaType)
                        return;
                    const n = r.mediaType;
                    if (!n && !i.hasOwnProperty(t.mtype))
                        throw new Error("Cannot determine mediaType for response");
                    e.mediaType = n || i[t.mtype]
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[97247], {
            28656: (r, e, a) => {
                a.d(e, {
                    D: () => o
                });
                var n = a(73858)
                  , t = a(70433);
                const s = ["user.keywords"].concat(n.Dy.flatMap((r => ["keywords", "content.keywords"].map((e => `${r}.${e}`)))));
                function o(r) {
                    for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                        a[n - 1] = arguments[n];
                    return function() {
                        const r = new Set;
                        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++)
                            a[n] = arguments[n];
                        return a.filter((r => r)).flatMap((r => Array.isArray(r) ? r : r.split(","))).map((r => r.replace(/^\s*/, "").replace(/\s*$/, ""))).filter((r => r)).forEach((e => r.add(e))),
                        Array.from(r.keys())
                    }(...s.map((e => (0,
                    t.A)(r, e))), ...a)
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[47618], {
            20981: (e, t, i) => {
                i.d(t, {
                    m: () => m
                });
                var r = i(99466)
                  , d = i(1e3)
                  , n = i(70433)
                  , s = i(91069)
                  , a = i(25825)
                  , b = i(11445)
                  , o = i(43272)
                  , p = i(63172);
                var c = i(43323);
                var l = i(7873);
                var f = i(71371);
                var u = i(33005);
                const v = {
                    [d.S3]: {
                        extPrebid: {
                            fn: function(e, t) {
                                (0,
                                p.J)(e, "ext.prebid", (0,
                                s.mergeDeep)({
                                    auctiontimestamp: t.auctionStart,
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1
                                    }
                                }, e.ext?.prebid)),
                                o.$W.getConfig("debug") && (e.ext.prebid.debug = !0)
                            }
                        },
                        extPrebidChannel: {
                            fn: function(e) {
                                (0,
                                p.J)(e, "ext.prebid.channel", Object.assign({
                                    name: "pbjs",
                                    version: (0,
                                    l.m)().version
                                }, e.ext?.prebid?.channel))
                            }
                        },
                        extPrebidAliases: {
                            fn: function(e, t, i) {
                                let {am: r=b.Ay} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                if (r.aliasRegistry[t.bidderCode]) {
                                    const i = r.bidderRegistry[t.bidderCode];
                                    if (!i || !i.getSpec().skipPbsAliasing) {
                                        (0,
                                        p.J)(e, `ext.prebid.aliases.${t.bidderCode}`, r.aliasRegistry[t.bidderCode]);
                                        const d = o.$W.getConfig(`gvlMapping.${t.bidderCode}`) || i?.getSpec?.().gvlid;
                                        d && (0,
                                        p.J)(e, `ext.prebid.aliasgvlids.${t.bidderCode}`, d)
                                    }
                                }
                            }
                        }
                    },
                    [d.Tb]: {
                        params: {
                            fn: c.W
                        },
                        adUnitCode: {
                            fn: function(e, t) {
                                const i = t.adUnitCode;
                                i && (0,
                                p.J)(e, "ext.prebid.adunitcode", i)
                            }
                        }
                    },
                    [d.WR]: {
                        mediaType: {
                            fn: a.o,
                            priority: 99
                        },
                        videoCache: {
                            fn: function(e, t) {
                                if (e.mediaType === f.G_) {
                                    let {cacheId: i, url: r} = (0,
                                    n.A)(t, "ext.prebid.cache.vastXml") || {};
                                    if (!i || !r) {
                                        const {hb_uuid: e, hb_cache_host: d, hb_cache_path: s} = (0,
                                        n.A)(t, "ext.prebid.targeting") || {};
                                        e && d && s && (i = e,
                                        r = `https://${d}${s}?uuid=${e}`)
                                    }
                                    i && r && Object.assign(e, {
                                        videoCacheKey: i,
                                        vastUrl: r
                                    })
                                }
                            },
                            priority: -10
                        },
                        bidderCode: {
                            fn(e, t, i) {
                                e.bidderCode = i.seatbid.seat,
                                e.adapterCode = (0,
                                n.A)(t, "ext.prebid.meta.adaptercode") || i.bidRequest?.bidder || e.bidderCode
                            }
                        },
                        pbsBidId: {
                            fn(e, t) {
                                const i = (0,
                                n.A)(t, "ext.prebid.bidid");
                                (0,
                                s.isStr)(i) && (e.pbsBidId = i)
                            }
                        },
                        adserverTargeting: {
                            fn(e, t) {
                                const i = (0,
                                n.A)(t, "ext.prebid.targeting");
                                (0,
                                s.isPlainObject)(i) && (e.adserverTargeting = i)
                            }
                        },
                        extPrebidMeta: {
                            fn(e, t) {
                                e.meta = (0,
                                s.mergeDeep)({}, (0,
                                n.A)(t, "ext.prebid.meta"), e.meta)
                            }
                        },
                        pbsWinTrackers: {
                            fn: function(e, t) {
                                e.eventtrackers = e.eventtrackers || [],
                                [[t.burl, u.OA], [t?.ext?.prebid?.events?.win, u.RO]].filter((t => {
                                    let[i,r] = t;
                                    return i && null == e.eventtrackers.find((e => {
                                        let {method: t, event: d, url: n} = e;
                                        return d === r && t === u.Ni && n === i
                                    }
                                    ))
                                }
                                )).forEach((t => {
                                    let[i,r] = t;
                                    e.eventtrackers.push({
                                        method: u.Ni,
                                        event: r,
                                        url: i
                                    })
                                }
                                ))
                            }
                        }
                    },
                    [d.Cf]: {
                        serverSideStats: {
                            fn(e, t, i) {
                                Object.entries({
                                    errors: "serverErrors",
                                    responsetimemillis: "serverResponseTimeMs"
                                }).forEach((e => {
                                    let[r,d] = e;
                                    const s = (0,
                                    n.A)(t, `ext.${r}.${i.bidderRequest.bidderCode}`);
                                    s && (i.bidderRequest[d] = s,
                                    i.bidRequests.forEach((e => e[d] = s)))
                                }
                                ))
                            }
                        }
                    }
                };
                var g = i(89766);
                const m = (0,
                s.memoize)(( () => (0,
                r.U)((0,
                g.T)(), v, (0,
                d.yB)(d.e4))))
            }
            ,
            25825: (e, t, i) => {
                i.d(t, {
                    o: () => s,
                    s: () => n
                });
                var r = i(71371)
                  , d = i(75561);
                const n = {
                    [r.D4]: "banner",
                    [r.s6]: "native",
                    [r.G_]: "video"
                };
                function s(e, t, i) {
                    let s = i.mediaType;
                    s || (s = d.X.hasOwnProperty(t.mtype) ? d.X[t.mtype] : t.ext?.prebid?.type,
                    n.hasOwnProperty(s) || (s = r.D4)),
                    e.mediaType = s
                }
            }
            ,
            43323: (e, t, i) => {
                i.d(t, {
                    W: () => d
                });
                var r = i(63172);
                function d(e, t) {
                    let i = t.params;
                    i && (0,
                    r.J)(e, `ext.prebid.bidder.${t.bidder}`, i)
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[46550], {
            8702: (p, n, e) => {
                function t(p, n, e) {
                    let t = {};
                    return p && ("boolean" == typeof p.gdprApplies && (t.gdpr = Number(p.gdprApplies)),
                    "string" == typeof p.consentString && (t.gdpr_consent = p.consentString)),
                    n && (t.us_privacy = encodeURIComponent(n)),
                    e?.gppString && (t.gpp = e.gppString,
                    t.gpp_sid = e.applicableSections?.toString()),
                    t
                }
                e.d(n, {
                    d: () => t
                })
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[19147], {
            29495: (e, r, n) => {
                function u(e) {
                    return e?.ortb2?.ext?.prebid?.adServerCurrency
                }
                n.d(r, {
                    b: () => u
                })
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[90467], {
            6036: (e, s, n) => {
                n.d(s, {
                    M: () => a
                });
                var o = n(71371)
                  , r = n(91069)
                  , i = n(70433);
                const t = 0;
                function a(e, s, n) {
                    const a = [];
                    return (0,
                    r.isFn)(e.getFloor) && ((0,
                    i.A)(e, `mediaTypes.${n}.${n === o.G_ ? "playerSize" : "sizes"}`) || []).forEach((o => {
                        const r = e.getFloor({
                            currency: s || "USD",
                            mediaType: n,
                            size: o
                        }).floor;
                        a.push(isNaN(r) ? t : r)
                    }
                    )),
                    a.length ? Math.min(...a) : t
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[99498], {
            90011: (e, r, i) => {
                i.d(r, {
                    Z: () => t,
                    n: () => n
                });
                var a = i(91069);
                const t = {
                    mimes: e => Array.isArray(e) && e.length > 0 && e.every((e => "string" == typeof e)),
                    minduration: e => (0,
                    a.isInteger)(e),
                    maxduration: e => (0,
                    a.isInteger)(e),
                    protocols: e => Array.isArray(e) && e.every((e => e >= 1 && e <= 10)),
                    w: e => (0,
                    a.isInteger)(e),
                    h: e => (0,
                    a.isInteger)(e),
                    startdelay: e => (0,
                    a.isInteger)(e),
                    linearity: e => -1 !== [1, 2].indexOf(e),
                    skip: e => -1 !== [0, 1].indexOf(e),
                    skipmin: e => (0,
                    a.isInteger)(e),
                    skipafter: e => (0,
                    a.isInteger)(e),
                    sequence: e => (0,
                    a.isInteger)(e),
                    battr: e => Array.isArray(e) && e.every((e => e >= 1 && e <= 17)),
                    maxextended: e => (0,
                    a.isInteger)(e),
                    minbitrate: e => (0,
                    a.isInteger)(e),
                    maxbitrate: e => (0,
                    a.isInteger)(e),
                    boxingallowed: e => -1 !== [0, 1].indexOf(e),
                    playbackmethod: e => Array.isArray(e) && e.every((e => e >= 1 && e <= 6)),
                    playbackend: e => -1 !== [1, 2, 3].indexOf(e),
                    api: e => Array.isArray(e) && e.every((e => e >= 1 && e <= 6))
                };
                function n(e) {
                    return {
                        requestId: e && e.impid ? e.impid : void 0,
                        cpm: e && e.price ? e.price : 0,
                        width: e && e.w ? e.w : 0,
                        height: e && e.h ? e.h : 0,
                        ad: e && e.adm ? e.adm : "",
                        meta: {
                            advertiserDomains: e && e.adomain ? e.adomain : []
                        },
                        creativeId: e && e.crid ? e.crid : void 0,
                        netRevenue: !1,
                        currency: e && e.cur ? e.cur : "USD",
                        ttl: 300,
                        dealId: e && e.dealId ? e.dealId : void 0
                    }
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[40259], {
            91223: (e, t, n) => {
                function r() {
                    const e = navigator.connection || navigator.webkitConnection;
                    if (!e)
                        return 0;
                    switch (e.type) {
                    case "ethernet":
                        return 1;
                    case "wifi":
                        return 2;
                    case "wimax":
                        return 6;
                    default:
                        switch (e.effectiveType) {
                        case "slow-2g":
                        case "2g":
                            return 4;
                        case "3g":
                            return 5;
                        case "4g":
                            return 6;
                        case "5g":
                            return 7;
                        default:
                            return "cellular" == e.type ? 3 : 0
                        }
                    }
                }
                n.d(t, {
                    Z: () => r
                })
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[51912], {
            20947: (e, t, s) => {
                s.d(t, {
                    E0: () => g,
                    kz: () => n,
                    wq: () => p
                });
                var r = s(68044)
                  , i = s(91069);
                const n = "1.1";
                function o(e) {
                    return !!("object" == typeof e && null !== e && e.advertising_token && e.identity_expires && e.refresh_from && e.refresh_token && e.refresh_expires)
                }
                function a(e) {
                    return `UID2 shared library - ${e}`
                }
                function l(e) {
                    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        s[r - 1] = arguments[r];
                    e(a(s[0]), ...s.slice(1))
                }
                class c {
                    constructor(e, t, s, r) {
                        this._baseUrl = e.baseUrl,
                        this._clientVersion = t,
                        this._logInfo = function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            return l(s, ...t)
                        }
                        ,
                        this._logWarn = r
                    }
                    createArrayBuffer(e) {
                        const t = new Uint8Array(e.length);
                        for (let s = 0; s < e.length; s++)
                            t[s] = e.charCodeAt(s);
                        return t
                    }
                    hasStatusResponse(e) {
                        return "object" == typeof e && e && e.status
                    }
                    isValidRefreshResponse(e) {
                        return this.hasStatusResponse(e) && ("optout" === e.status || "expired_token" === e.status || "success" === e.status && e.body && o(e.body))
                    }
                    ResponseToRefreshResult(e) {
                        return this.isValidRefreshResponse(e) ? "success" === e.status ? {
                            status: e.status,
                            identity: e.body
                        } : e : a("Response didn't contain a valid status")
                    }
                    callRefreshApi(e) {
                        const t = this._baseUrl + "/v2/token/refresh";
                        let s, i;
                        const n = new Promise(( (e, t) => {
                            s = e,
                            i = t
                        }
                        ));
                        return this._logInfo("Sending refresh request", e),
                        (0,
                        r.RD)(t, {
                            success: t => {
                                try {
                                    if (e.refresh_response_key) {
                                        this._logInfo("Decrypting refresh API response");
                                        const r = this.createArrayBuffer(atob(t));
                                        window.crypto.subtle.importKey("raw", this.createArrayBuffer(atob(e.refresh_response_key)), {
                                            name: "AES-GCM"
                                        }, !1, ["decrypt"]).then((e => {
                                            this._logInfo("Imported decryption key"),
                                            window.crypto.subtle.decrypt({
                                                name: "AES-GCM",
                                                iv: r.slice(0, 12),
                                                tagLength: 128
                                            }, e, r.slice(12)).then((e => {
                                                const t = String.fromCharCode(...new Uint8Array(e));
                                                this._logInfo("Decrypted to:", t);
                                                const r = JSON.parse(t)
                                                  , n = this.ResponseToRefreshResult(r);
                                                "string" == typeof n ? i(a(n)) : s(n)
                                            }
                                            ), (e => this._logWarn(a("Call to UID2 API failed"), e)))
                                        }
                                        ), (e => this._logWarn(a("Call to UID2 API failed"), e)))
                                    } else {
                                        this._logInfo("No response decryption key available, assuming unencrypted JSON");
                                        const e = JSON.parse(t)
                                          , r = this.ResponseToRefreshResult(e);
                                        "string" == typeof r ? i(a(r)) : s(r)
                                    }
                                } catch (e) {
                                    i(a(t))
                                }
                            }
                            ,
                            error: (e, t) => {
                                try {
                                    this._logInfo("Error status, assuming unencrypted JSON");
                                    const e = JSON.parse(t.responseText)
                                      , r = this.ResponseToRefreshResult(e);
                                    "string" == typeof r ? i(a(r)) : s(r)
                                } catch (t) {
                                    i(a(e))
                                }
                            }
                        }, e.refresh_token, {
                            method: "POST",
                            customHeaders: {
                                "X-UID2-Client-Version": this._clientVersion
                            }
                        }),
                        n
                    }
                }
                class d {
                    constructor(e, t, s, r) {
                        this._storage = e,
                        this._preferLocalStorage = t,
                        this._storageName = s,
                        this._logInfo = function() {
                            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                                t[s] = arguments[s];
                            return l(r, ...t)
                        }
                    }
                    readCookie(e) {
                        return this._storage.cookiesAreEnabled() ? this._storage.getCookie(e) : null
                    }
                    readLocalStorage(e) {
                        return this._storage.localStorageIsEnabled() ? this._storage.getDataFromLocalStorage(e) : null
                    }
                    readModuleCookie() {
                        return this.parseIfContainsBraces(this.readCookie(this._storageName))
                    }
                    writeModuleCookie(e) {
                        this._storage.setCookie(this._storageName, JSON.stringify(e), Date.now() + 864e5)
                    }
                    readModuleStorage() {
                        return this.parseIfContainsBraces(this.readLocalStorage(this._storageName))
                    }
                    writeModuleStorage(e) {
                        this._storage.setDataInLocalStorage(this._storageName, JSON.stringify(e))
                    }
                    readProvidedCookie(e) {
                        return JSON.parse(this.readCookie(e))
                    }
                    parseIfContainsBraces(e) {
                        return e?.includes("{") ? JSON.parse(e) : e
                    }
                    storeValue(e) {
                        this._preferLocalStorage ? this.writeModuleStorage(e) : this.writeModuleCookie(e)
                    }
                    getStoredValueWithFallback() {
                        const e = this._preferLocalStorage ? "local storage" : "cookie"
                          , t = (this._preferLocalStorage ? this.readModuleStorage : this.readModuleCookie).bind(this)
                          , s = (this._preferLocalStorage ? this.writeModuleStorage : this.writeModuleCookie).bind(this)
                          , r = (this._preferLocalStorage ? this.readModuleCookie : this.readModuleStorage).bind(this)
                          , i = t();
                        if (i) {
                            if ("string" == typeof i) {
                                const t = r();
                                if (t && "object" == typeof t)
                                    return this._logInfo(`${e} contained a basic token, but found a refreshable token fallback. Copying the fallback value to ${e}.`),
                                    s(t),
                                    t
                            }
                        } else {
                            const t = r();
                            if (t)
                                return this._logInfo(`${e} was empty, but found a fallback value.`),
                                "object" == typeof t && (this._logInfo(`Copying the fallback value to ${e}.`),
                                s(t)),
                                t
                        }
                        return i
                    }
                }
                function u(e, t, s, r, i, n) {
                    i("UID2 base url provided: ", e);
                    return new c({
                        baseUrl: e
                    },s,i,n).callRefreshApi(t).then((e => {
                        i("Refresh endpoint responded with:", e);
                        const s = {
                            originalToken: t,
                            latestToken: e.identity
                        };
                        let n = r.getStoredValueWithFallback();
                        return n?.originalIdentity && (s.originalIdentity = n.originalIdentity),
                        r.storeValue(s),
                        s
                    }
                    ))
                }
                let h;
                {
                    const e = 9;
                    h = {
                        isCSTGOptionsValid(e, t) {
                            if ("object" != typeof e || null === e)
                                return t('CSTG is not being used, but is included in the Prebid.js bundle. You can reduce the bundle size by passing "--disable UID2_CSTG" to the Prebid.js build.'),
                                !1;
                            const s = e;
                            if (!s.serverPublicKey && !s.subscriptionId)
                                return t("CSTG has been enabled but its parameters have not been set."),
                                !1;
                            if ("string" != typeof s.serverPublicKey)
                                return t("CSTG opts.serverPublicKey must be a string"),
                                !1;
                            const r = /^(UID2|EUID)-X-[A-Z]-.+/;
                            return r.test(s.serverPublicKey) ? "string" != typeof s.subscriptionId ? (t("CSTG opts.subscriptionId must be a string"),
                            !1) : 0 !== s.subscriptionId.length || (t("CSTG opts.subscriptionId is empty"),
                            !1) : (t(`CSTG opts.serverPublicKey must match the regular expression ${r}`),
                            !1)
                        },
                        getValidIdentity(e, s) {
                            if (e.emailHash)
                                return t.isBase64Hash(e.emailHash) ? {
                                    email_hash: e.emailHash
                                } : void s("CSTG opts.emailHash is invalid");
                            if (e.phoneHash)
                                return t.isBase64Hash(e.phoneHash) ? {
                                    phone_hash: e.phoneHash
                                } : void s("CSTG opts.phoneHash is invalid");
                            if (e.email) {
                                const r = t.normalizeEmail(e.email);
                                return void 0 === r ? void s("CSTG opts.email is invalid") : {
                                    email: r
                                }
                            }
                            return e.phone ? t.isNormalizedPhone(e.phone) ? {
                                phone: e.phone
                            } : void s("CSTG opts.phone is invalid") : void 0
                        },
                        isStoredTokenInvalid(e, t, s, r) {
                            if (t) {
                                if ("optout" === t.latestToken)
                                    return !0;
                                const r = Object.values(e)[0];
                                if (!this.isStoredTokenFromSameIdentity(t, r))
                                    return s("CSTG supplied new identity - ignoring stored value.", t.originalIdentity, e),
                                    !0
                            }
                            return !1
                        },
                        async generateTokenAndStore(e, t, r, i, n, o) {
                            n("UID2 cstg opts provided: ", JSON.stringify(t));
                            const a = new s({
                                baseUrl: e,
                                cstg: t
                            },n,o)
                              , l = await a.generateToken(r);
                            n("CSTG endpoint responded with:", l);
                            const c = {
                                originalIdentity: this.encodeOriginalIdentity(r),
                                latestToken: l.identity
                            };
                            return i.storeValue(c),
                            c
                        },
                        isStoredTokenFromSameIdentity: (e, t) => !!e.originalIdentity && (0,
                        i.cyrb53Hash)(t, e.originalIdentity.salt) === e.originalIdentity.identity,
                        encodeOriginalIdentity(e) {
                            const t = Object.values(e)[0]
                              , s = Math.floor(Math.random() * Math.pow(2, 32));
                            return {
                                identity: (0,
                                i.cyrb53Hash)(t, s),
                                salt: s
                            }
                        }
                    };
                    class t {
                        static EMAIL_EXTENSION_SYMBOL = "+";
                        static EMAIL_DOT = ".";
                        static GMAIL_DOMAIN = "gmail.com";
                        static isBase64Hash(e) {
                            if (!e || 44 !== e.length)
                                return !1;
                            try {
                                return btoa(atob(e)) === e
                            } catch (e) {
                                return !1
                            }
                        }
                        static isNormalizedPhone(e) {
                            return /^\+[0-9]{10,15}$/.test(e)
                        }
                        static normalizeEmail(e) {
                            if (!e || !e.length)
                                return;
                            const t = e.trim().toLowerCase();
                            if (t.indexOf(" ") > 0)
                                return;
                            const s = this.splitEmailIntoAddressAndDomain(t);
                            if (!s)
                                return;
                            const {address: r, domain: i} = s
                              , n = this.isGmail(i)
                              , o = this.normalizeAddressPart(r, n, n);
                            return o ? `${o}@${i}` : void 0
                        }
                        static splitEmailIntoAddressAndDomain(e) {
                            const t = e.split("@");
                            if (2 === t.length && !t.some((e => "" === e)))
                                return {
                                    address: t[0],
                                    domain: t[1]
                                }
                        }
                        static isGmail(e) {
                            return e === this.GMAIL_DOMAIN
                        }
                        static dropExtension(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.EMAIL_EXTENSION_SYMBOL;
                            return e.split(t)[0]
                        }
                        static normalizeAddressPart(e, t, s) {
                            let r = e;
                            return t && (r = r.replaceAll(this.EMAIL_DOT, "")),
                            s && (r = this.dropExtension(r)),
                            r
                        }
                    }
                    class s {
                        constructor(e, t, s) {
                            this._baseUrl = e.baseUrl,
                            this._serverPublicKey = e.cstg.serverPublicKey,
                            this._subscriptionId = e.cstg.subscriptionId,
                            this._logInfo = function() {
                                for (var e = arguments.length, s = new Array(e), r = 0; r < e; r++)
                                    s[r] = arguments[r];
                                return l(t, ...s)
                            }
                            ,
                            this._logWarn = s
                        }
                        hasStatusResponse(e) {
                            return "object" == typeof e && e && e.status
                        }
                        isCstgApiSuccessResponse(e) {
                            return this.hasStatusResponse(e) && "success" === e.status && o(e.body)
                        }
                        isCstgApiOptoutResponse(e) {
                            return this.hasStatusResponse(e) && "optout" === e.status
                        }
                        isCstgApiClientErrorResponse(e) {
                            return this.hasStatusResponse(e) && "client_error" === e.status && "string" == typeof e.message
                        }
                        isCstgApiForbiddenResponse(e) {
                            return this.hasStatusResponse(e) && "invalid_http_origin" === e.status && "string" == typeof e.message
                        }
                        stripPublicKeyPrefix(t) {
                            return t.substring(e)
                        }
                        async generateCstgRequest(e) {
                            if ("email_hash"in e || "phone_hash"in e)
                                return e;
                            if ("email"in e) {
                                return {
                                    email_hash: await c.hash(e.email)
                                }
                            }
                            if ("phone"in e) {
                                return {
                                    phone_hash: await c.hash(e.phone)
                                }
                            }
                        }
                        async generateToken(e) {
                            const t = await this.generateCstgRequest(e);
                            this._logInfo("Building CSTG request for", t);
                            const s = await n.build(this.stripPublicKeyPrefix(this._serverPublicKey))
                              , r = new TextEncoder
                              , i = Date.now()
                              , {iv: o, ciphertext: a} = await s.encrypt(r.encode(JSON.stringify(t)), r.encode(JSON.stringify([i])))
                              , l = await c.exportPublicKey(s.clientPublicKey)
                              , d = {
                                payload: c.bytesToBase64(new Uint8Array(a)),
                                iv: c.bytesToBase64(new Uint8Array(o)),
                                public_key: c.bytesToBase64(new Uint8Array(l)),
                                timestamp: i,
                                subscription_id: this._subscriptionId
                            };
                            return this.callCstgApi(d, s)
                        }
                        async callCstgApi(e, t) {
                            const s = this._baseUrl + "/v2/token/client-generate";
                            let i, n;
                            const o = new Promise(( (e, t) => {
                                i = e,
                                n = t
                            }
                            ));
                            return this._logInfo("Sending CSTG request", e),
                            (0,
                            r.RD)(s, {
                                success: async (e, s) => {
                                    try {
                                        const s = c.base64ToBytes(e)
                                          , r = await t.decrypt(s.slice(0, 12), s.slice(12))
                                          , o = (new TextDecoder).decode(r)
                                          , l = JSON.parse(o);
                                        this.isCstgApiSuccessResponse(l) ? i({
                                            status: "success",
                                            identity: l.body
                                        }) : this.isCstgApiOptoutResponse(l) ? i({
                                            status: "optout",
                                            identity: "optout"
                                        }) : n(a(`API error: Response body was invalid for HTTP status 200: ${o}`))
                                    } catch (e) {
                                        n(a(e))
                                    }
                                }
                                ,
                                error: (e, t) => {
                                    try {
                                        if (400 === t.status) {
                                            const e = JSON.parse(t.responseText);
                                            this.isCstgApiClientErrorResponse(e) ? n(a(`Client error: ${e.message}`)) : n(a(`UID2 API error: Response body was invalid for HTTP status 400: ${t.responseText}`))
                                        } else if (403 === t.status) {
                                            const e = JSON.parse(t.responseText);
                                            this.isCstgApiForbiddenResponse(t) ? n(a(`Forbidden: ${e.message}`)) : n(a(`UID2 API error: Response body was invalid for HTTP status 403: ${t.responseText}`))
                                        } else
                                            n(a(`UID2 API error: Unexpected HTTP status ${t.status}: ${e}`))
                                    } catch (t) {
                                        n(a(e))
                                    }
                                }
                            }, JSON.stringify(e), {
                                method: "POST"
                            }),
                            o
                        }
                    }
                    class n {
                        static _namedCurve = "P-256";
                        constructor(e, t) {
                            this._clientPublicKey = e,
                            this._sharedKey = t
                        }
                        static async build(e) {
                            const t = await c.generateKeyPair(n._namedCurve)
                              , s = await c.importPublicKey(e, this._namedCurve)
                              , r = await c.deriveKey(s, t.privateKey);
                            return new n(t.publicKey,r)
                        }
                        async encrypt(e, t) {
                            const s = window.crypto.getRandomValues(new Uint8Array(12));
                            return {
                                iv: s,
                                ciphertext: await window.crypto.subtle.encrypt({
                                    name: "AES-GCM",
                                    iv: s,
                                    additionalData: t
                                }, this._sharedKey, e)
                            }
                        }
                        async decrypt(e, t) {
                            return window.crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: e
                            }, this._sharedKey, t)
                        }
                        get clientPublicKey() {
                            return this._clientPublicKey
                        }
                    }
                    class c {
                        static base64ToBytes(e) {
                            const t = atob(e);
                            return Uint8Array.from(t, (e => e.codePointAt(0)))
                        }
                        static bytesToBase64(e) {
                            const t = Array.from(e, (e => String.fromCodePoint(e))).join("");
                            return btoa(t)
                        }
                        static async generateKeyPair(e) {
                            const t = {
                                name: "ECDH",
                                namedCurve: e
                            };
                            return window.crypto.subtle.generateKey(t, !1, ["deriveKey"])
                        }
                        static async importPublicKey(e, t) {
                            const s = {
                                name: "ECDH",
                                namedCurve: t
                            };
                            return window.crypto.subtle.importKey("spki", this.base64ToBytes(e), s, !1, [])
                        }
                        static exportPublicKey(e) {
                            return window.crypto.subtle.exportKey("spki", e)
                        }
                        static async deriveKey(e, t) {
                            return window.crypto.subtle.deriveKey({
                                name: "ECDH",
                                public: e
                            }, t, {
                                name: "AES-GCM",
                                length: 256
                            }, !1, ["encrypt", "decrypt"])
                        }
                        static async hash(e) {
                            const t = await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(e));
                            return this.bytesToBase64(new Uint8Array(t))
                        }
                    }
                }
                function p(e, t, s, r) {
                    const i = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                            t[r] = arguments[r];
                        return l(s, ...t)
                    };
                    let n = null;
                    const o = "cookie" !== e.storage
                      , a = new d(t,o,e.internalStorage,i);
                    i(`Module is using ${o ? "local storage" : "cookies"} for internal storage.`);
                    const c = h && h.isCSTGOptionsValid(e.cstg, r);
                    c ? (i("Module is using client-side token generation."),
                    n = null) : e.paramToken ? (n = e.paramToken,
                    i("Read token from params", n)) : e.serverCookieName && (n = a.readProvidedCookie(e.serverCookieName),
                    i("Read token from server-supplied cookie", n));
                    let p = a.getStoredValueWithFallback();
                    if (i("Loaded module-stored tokens:", p),
                    p && "string" == typeof p) {
                        if (!n && !c)
                            return i("Returning legacy cookie value."),
                            {
                                id: p
                            };
                        i("Discarding superseded legacy cookie."),
                        p = null
                    }
                    if (n && p && p.originalToken?.advertising_token !== n.advertising_token && (i("Server supplied new token - ignoring stored value.", p.originalToken?.advertising_token, n.advertising_token),
                    p = null),
                    c) {
                        const t = h.getValidIdentity(e.cstg, r);
                        if (t && (p && h.isStoredTokenInvalid(t, p, i, r) && (p = null),
                        !p || Date.now() > p.latestToken.refresh_expires)) {
                            const s = h.generateTokenAndStore(e.apiBaseUrl, e.cstg, t, a, i, r);
                            return i("Generate token using CSTG"),
                            {
                                callback: e => {
                                    s.then((t => {
                                        i("Token generation responded, passing the new token on.", t),
                                        e(t)
                                    }
                                    ))
                                }
                            }
                        }
                    }
                    const g = !p?.latestToken || n && n.identity_expires > p.latestToken.identity_expires
                      , y = g ? n : p.latestToken;
                    if (i("UID2 module selected latest token", g, y),
                    !y || Date.now() > y.refresh_expires)
                        return i("Newest available token is expired and not refreshable."),
                        {
                            id: null
                        };
                    if (Date.now() > y.identity_expires) {
                        const t = u(e.apiBaseUrl, y, e.clientId, a, i, r);
                        return i("Token is expired but can be refreshed, attempting refresh."),
                        {
                            callback: e => {
                                t.then((t => {
                                    i("Refresh reponded, passing the updated token on.", t),
                                    e(t)
                                }
                                ))
                            }
                        }
                    }
                    Date.now() > y.refresh_from && (i("Refreshing token in background with low priority."),
                    u(e.apiBaseUrl, y, e.clientId, a, i, r));
                    const f = {
                        originalToken: n ?? p?.originalToken,
                        latestToken: y
                    };
                    return c && (f.originalIdentity = p?.originalIdentity),
                    a.storeValue(f),
                    {
                        id: f
                    }
                }
                function g(e) {
                    const t = ["emailHash", "phoneHash", "email", "phone"];
                    for (let s of t)
                        if (e.hasOwnProperty(s))
                            return {
                                [s]: e[s]
                            };
                    return {}
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[44950], {
            50646: (e, t, u) => {
                u.d(t, {
                    x: () => n
                });
                const n = {
                    uid2: {
                        source: "uidapi.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        },
                        getUidExt: function(e) {
                            if (e.ext)
                                return e.ext
                        }
                    }
                }
            }
        }]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[84262], {
            57024: (e, o, r) => {
                var t = r(7873)
                  , n = r(91069)
                  , s = r(68044)
                  , a = r(16833)
                  , p = r(16916)
                  , i = r(12938)
                  , d = r(45569)
                  , c = r(2339);
                const l = "33acrossId"
                  , u = "https://lexicon.33across.com/v1/envelope"
                  , g = "33acrossIdFp"
                  , v = "33acrossIdTp"
                  , f = "33acrossIdHm"
                  , m = !0
                  , b = !0
                  , h = (0,
                i.vM)({
                    moduleType: d.fW,
                    moduleName: l
                })
                  , S = {
                    domainOverride: (0,
                    c.w)(h, l)
                };
                function C(e) {
                    if (h.cookiesAreEnabled()) {
                        const o = new Date(0).toUTCString();
                        h.setCookie(e, "", o, "Lax", S.domainOverride())
                    }
                    h.removeDataFromLocalStorage(e)
                }
                function I(e, o) {
                    let r;
                    return o.find((o => (o === i.X0 ? r = h.getCookie(e) : o === i.qk && (r = h.getDataFromLocalStorage(e)),
                    !!r))),
                    r
                }
                function T(e, o) {
                    const [r,t,n] = e;
                    n ? C(r) : t && function(e, o, r) {
                        let {enabledStorageTypes: t, expires: n} = r;
                        t.forEach((r => {
                            if (r === i.X0) {
                                const r = 864e5 * n
                                  , t = new Date(Date.now() + r);
                                h.setCookie(e, o, t.toUTCString(), "Lax", S.domainOverride())
                            } else
                                r === i.qk && h.setDataInLocalStorage(e, o)
                        }
                        ))
                    }(r, t, o)
                }
                function D(e, o) {
                    let {enabledStorageTypes: r, expires: t, ...n} = o;
                    (function(e, o) {
                        let {tp: r, fp: t, hem: n} = e
                          , {storeFpid: s, storeTpid: a, envelopeAvailable: p} = o;
                        const i = [];
                        return s && i.push([g, t, !t], [f, n, !p]),
                        a && i.push([v, r, !r]),
                        i
                    }
                    )(e, n).forEach((e => {
                        T(e, {
                            enabledStorageTypes: r,
                            expires: t
                        })
                    }
                    ))
                }
                const y = {
                    name: l,
                    gvlid: 58,
                    decode: e => ({
                        [l]: {
                            envelope: e
                        }
                    }),
                    getId(e) {
                        let {params: o={}, enabledStorageTypes: r=[], storage: t={}} = e
                          , {gdpr: a} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ("string" != typeof o.pid)
                            return void (0,
                            n.logError)(`${l}: Submodule requires a partner ID to be defined`);
                        if (!0 === a?.gdprApplies)
                            return void (0,
                            n.logWarn)(`${l}: Submodule cannot be used where GDPR applies`);
                        const {storeFpid: i=m, storeTpid: d=b, apiUrl: c=u, pid: h, hem: S} = o
                          , T = S || window._33across?.hem?.sha256;
                        return {
                            callback(e) {
                                (0,
                                s.g4)(1e4)(c, {
                                    success(o) {
                                        let s = {};
                                        try {
                                            s = function(e) {
                                                return e.succeeded ? e.data.envelope ? {
                                                    envelope: e.data.envelope,
                                                    fp: e.data.fp,
                                                    tp: e.data.tp
                                                } : ((0,
                                                n.logMessage)(`${l}: No envelope was received`),
                                                {}) : ("Cookied User" == e.error ? (0,
                                                n.logMessage)(`${l}: Unsuccessful response`.concat(" ", e.error)) : (0,
                                                n.logError)(`${l}: Unsuccessful response`.concat(" ", e.error)),
                                                {})
                                            }(JSON.parse(o))
                                        } catch (e) {
                                            (0,
                                            n.logError)(`${l}: ID reading error:`, e)
                                        }
                                        s.envelope || ["", "_last", "_exp", "_cst"].forEach((e => {
                                            C(`${l}${e}`)
                                        }
                                        )),
                                        D({
                                            fp: s.fp,
                                            tp: s.tp,
                                            hem: T
                                        }, {
                                            storeFpid: i,
                                            storeTpid: d,
                                            envelopeAvailable: !!s.envelope,
                                            enabledStorageTypes: r,
                                            expires: t.expires
                                        }),
                                        e(s.envelope)
                                    },
                                    error(o) {
                                        (0,
                                        n.logError)(`${l}: ID error response`, o),
                                        e()
                                    }
                                }, function(e, o, r) {
                                    let {pid: t, pubProvidedHem: n} = e;
                                    const s = p.t6.getConsentData()
                                      , a = p.et.getCoppa()
                                      , i = p.ad.getConsentData()
                                      , d = {
                                        pid: t,
                                        gdpr: 0,
                                        src: "pbjs",
                                        ver: "9.44.1",
                                        coppa: Number(a)
                                    };
                                    if (s && (d.us_privacy = s),
                                    i) {
                                        const {gppString: e="", applicableSections: o=[]} = i;
                                        d.gpp = e,
                                        d.gpp_sid = encodeURIComponent(o.join(","))
                                    }
                                    o?.consentString && (d.gdpr_consent = o.consentString);
                                    const c = I(g, r);
                                    c && (d.fp = encodeURIComponent(c));
                                    const l = I(v, r);
                                    l && (d.tp = encodeURIComponent(l));
                                    const u = n || I(f, r);
                                    return u && (d.sha256 = encodeURIComponent(u)),
                                    d
                                }({
                                    pid: h,
                                    pubProvidedHem: T
                                }, a, r), {
                                    method: "GET",
                                    withCredentials: !0
                                })
                            }
                        }
                    },
                    domainOverride: S.domainOverride,
                    eids: {
                        "33acrossId": {
                            source: "33across.com",
                            atype: 1,
                            getValue: function(e) {
                                return e.envelope
                            }
                        }
                    }
                };
                (0,
                a.bz)("userId", y),
                (0,
                t.E)("33acrossIdSystem")
            }
        }, e => {
            e.O(0, [12764, 60802, 37769, 12139, 51085], ( () => {
                return o = 57024,
                e(e.s = o);
                var o
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[60041], {
            63399: (e, i, t) => {
                var n = t(7873)
                  , a = t(91069)
                  , o = t(70433)
                  , d = t(81657)
                  , r = t(77332)
                  , u = t(63895)
                  , c = t(16833)
                  , l = t(68693)
                  , s = t(43272)
                  , g = t(71371)
                  , f = t(15901)
                  , h = t(67314)
                  , p = t(78969);
                const v = "hb_pb_cat_dur"
                  , m = "hb_cache_id";
                let b = 50
                  , T = 5
                  , C = function() {
                    let e = {};
                    function i(i) {
                        e[i] = {},
                        e[i].bidStorage = new Set,
                        e[i].queueDispatcher = function(e) {
                            let i, t = 1;
                            return function(n, a, o, d) {
                                const r = this;
                                var u = function() {
                                    S.call(r, n, a, o)
                                };
                                clearTimeout(i),
                                d ? t = 1 : t === T ? (t = 1,
                                u()) : (t++,
                                i = setTimeout(u, e))
                            }
                        }(b),
                        e[i].initialCacheKey = (0,
                        a.generateUUID)()
                    }
                    return {
                        addBid: function(t) {
                            e[t.auctionId] || i(t.auctionId),
                            e[t.auctionId].bidStorage.add(t)
                        },
                        removeBid: function(i) {
                            e[i.auctionId].bidStorage.delete(i)
                        },
                        getBids: function(i) {
                            return e[i.auctionId] && e[i.auctionId].bidStorage.values()
                        },
                        getQueueDispatcher: function(i) {
                            return e[i.auctionId] && e[i.auctionId].queueDispatcher
                        },
                        setupInitialCacheKey: function(i) {
                            e[i.auctionId] || (e[i.auctionId] = {},
                            e[i.auctionId].initialCacheKey = (0,
                            a.generateUUID)())
                        },
                        getInitialCacheKey: function(i) {
                            return e[i.auctionId] && e[i.auctionId].initialCacheKey
                        }
                    }
                }();
                function y(e, i) {
                    let t = C.getInitialCacheKey(e)
                      , n = (0,
                    o.A)(e, "video.durationBucket");
                    const a = function(e) {
                        let i;
                        if (s.$W.getConfig("adpod.prioritizeDeals") && (0,
                        o.A)(e, "video.dealTier")) {
                            const t = s.$W.getConfig(`adpod.dealTier.${e.bidderCode}.prefix`);
                            i = t ? t + (0,
                            o.A)(e, "video.dealTier") : (0,
                            o.A)(e, "video.dealTier")
                        } else {
                            const t = (0,
                            d.mO)(e);
                            i = (0,
                            d.ZV)(t)(e)
                        }
                        return i
                    }(e);
                    let r;
                    if (i) {
                        r = `${a}_${(0,
                        o.A)(e, "meta.adServerCatId")}_${n}s`
                    } else
                        r = `${a}_${n}s`;
                    e.adserverTargeting || (e.adserverTargeting = {}),
                    e.adserverTargeting[v] = r,
                    e.adserverTargeting[m] = t,
                    e.videoCacheKey = t,
                    e.customCacheKey = `${r}_${t}`
                }
                function S(e, i, t) {
                    !function(e) {
                        for (let i = 0; i < e.length; i++)
                            C.removeBid(e[i])
                    }(i),
                    (0,
                    l.M_)(i, (function(n, o) {
                        if (n)
                            (0,
                            a.logWarn)(`Failed to save to the video cache: ${n}. Video bid(s) must be discarded.`);
                        else
                            for (let n = 0; n < o.length; n++)
                                "" !== o[n].uuid ? (0,
                                d.v8)(e, i[n]) : (0,
                                a.logInfo)(`Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ${i[n].customCacheKey}. Bid was: `, i[n]),
                                t()
                    }
                    ))
                }
                function A(e, i, t, n, r) {
                    if (r && r.context === g.LM) {
                        let e = s.$W.getConfig("adpod.brandCategoryExclusion");
                        !(0,
                        o.A)(t, "meta.adServerCatId") && e ? ((0,
                        a.logWarn)("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", t),
                        n()) : !1 === s.$W.getConfig("adpod.deferCaching") ? (C.addBid(t),
                        y(t, e),
                        function(e, i, t) {
                            let n = C.getBids(i);
                            if (n) {
                                let a = Array.from(n)
                                  , o = C.getQueueDispatcher(i)
                                  , r = !(e.getAuctionStatus() === d.AA);
                                o(e, a, t, r)
                            } else
                                (0,
                                a.logWarn)("Attempted to cache a bid from an unknown auction. Bid:", i)
                        }(i, t, n)) : (C.setupInitialCacheKey(t),
                        y(t, e),
                        (0,
                        d.v8)(i, t),
                        n())
                    } else
                        e.call(this, i, t, n, r)
                }
                function I(e, i) {
                    let t = i.filter((e => {
                        let i = (0,
                        o.A)(e, "mediaTypes")
                          , t = (0,
                        o.A)(i, "video");
                        if (t && t.context === g.LM) {
                            if (Object.keys(i).length > 1)
                                return (0,
                                a.logWarn)(`Detected more than one mediaType in adUnitCode: ${e.code} while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.`),
                                !1;
                            let n = `Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ${e.code}.  This adUnit will be removed from the auction.`
                              , o = !!(t.playerSize && ((0,
                            a.isArrayOfNums)(t.playerSize, 2) || (0,
                            a.isArray)(t.playerSize) && t.playerSize.every((e => (0,
                            a.isArrayOfNums)(e, 2)))) || t.sizeConfig)
                              , d = !!(t.adPodDurationSec && (0,
                            a.isNumber)(t.adPodDurationSec) && t.adPodDurationSec > 0)
                              , r = !!(t.durationRangeSec && (0,
                            a.isArrayOfNums)(t.durationRangeSec) && t.durationRangeSec.every((e => e > 0)));
                            if (!o || !d || !r)
                                return n += o ? "" : "\nmediaTypes.video.playerSize",
                                n += d ? "" : "\nmediaTypes.video.adPodDurationSec",
                                n += r ? "" : "\nmediaTypes.video.durationRangeSec",
                                (0,
                                a.logWarn)(n),
                                !1
                        }
                        return !0
                    }
                    ));
                    i = t,
                    e.call(this, i)
                }
                function D(e, i, t, n, d) {
                    if (d === g.LM) {
                        let t = !0;
                        if (s.$W.getConfig("adpod.brandCategoryExclusion") && !(0,
                        o.A)(i, "meta.primaryCatId") && (t = !1),
                        (0,
                        o.A)(i, "video"))
                            if ((0,
                            o.A)(i, "video.context") && i.video.context === g.LM || (t = !1),
                            !(0,
                            o.A)(i, "video.durationSeconds") || i.video.durationSeconds <= 0)
                                t = !1;
                            else {
                                let e = function(e, i) {
                                    let t = (0,
                                    o.A)(i, "video.durationSeconds")
                                      , n = e.durationRangeSec;
                                    if (n.sort(( (e, i) => e - i)),
                                    e.requireExactDuration) {
                                        if (!(0,
                                        f.I6)(n, (e => e === t)))
                                            return (0,
                                            a.logWarn)("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", i),
                                            !1;
                                        i.video.durationBucket = t
                                    } else {
                                        let e = Math.max(...n);
                                        if (!(t <= e + 2))
                                            return (0,
                                            a.logWarn)("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", i),
                                            !1;
                                        {
                                            let e = (0,
                                            f.I6)(n, (e => e + 2 >= t));
                                            i.video.durationBucket = e
                                        }
                                    }
                                    return !0
                                }(n, i);
                                e || (t = !1)
                            }
                        s.$W.getConfig("cache.url") || !i.vastXml || i.vastUrl || ((0,
                        a.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                        t = !1),
                        e.bail(t)
                    } else
                        e.call(this, i, t, n, d)
                }
                function E(e, i) {
                    return e.adserverTargeting[p.xS.PRICE_BUCKET] / e.video.durationBucket < i.adserverTargeting[p.xS.PRICE_BUCKET] / i.video.durationBucket ? 1 : e.adserverTargeting[p.xS.PRICE_BUCKET] / e.video.durationBucket > i.adserverTargeting[p.xS.PRICE_BUCKET] / i.video.durationBucket ? -1 : 0
                }
                s.$W.getConfig("adpod", (e => function(e) {
                    void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && e.bidQueueTimeDelay > 0 ? b = e.bidQueueTimeDelay : (0,
                    a.logWarn)(`Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ${b}`)),
                    void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && e.bidQueueSizeLimit > 0 ? T = e.bidQueueSizeLimit : (0,
                    a.logWarn)(`Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ${T}`))
                }(e.adpod))),
                (0,
                c.pT)((0,
                c.Yn)("callPrebidCache"), A),
                (0,
                c.pT)(r.Z, I),
                (0,
                c.pT)(u.E2, D);
                const B = {
                    TARGETING_KEY_PB_CAT_DUR: v,
                    TARGETING_KEY_CACHE_ID: m,
                    getTargeting: function() {
                        let {codes: e, callback: i} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!i)
                            return void (0,
                            a.logError)("No callback function was defined in the getTargeting call.  Aborting getTargeting().");
                        e = e || [];
                        const t = function(e) {
                            return h.n.getAdUnits().filter((e => (0,
                            o.A)(e, "mediaTypes.video.context") === g.LM)).filter((i => !(e.length > 0) || -1 != e.indexOf(i.code)))
                        }(e)
                          , n = h.n.getBidsReceived()
                          , d = s.$W.getConfig("adpod.brandCategoryExclusion")
                          , r = s.$W.getConfig("adpod.deferCaching")
                          , u = "boolean" != typeof r || r;
                        let c = function(e, i) {
                            let t = i.map((e => e.code));
                            return e.filter((e => -1 != t.indexOf(e.adUnitCode) && e.video && e.video.context === g.LM))
                        }(n, t);
                        if (c = d || u ? function(e) {
                            let i = e.map((e => Object.assign({}, e, {
                                [v]: e.adserverTargeting[v]
                            })));
                            i = (0,
                            a.groupBy)(i, v);
                            let t = [];
                            return Object.keys(i).forEach((e => {
                                var n;
                                i[e].sort((n = "responseTimestamp",
                                function(e, i) {
                                    return e[n] < i[n] ? 1 : e[n] > i[n] ? -1 : 0
                                }
                                )),
                                t.push(i[e][0])
                            }
                            )),
                            t
                        }(c) : c,
                        s.$W.getConfig("adpod.prioritizeDeals")) {
                            let[e,i] = c.reduce(( (e, i) => {
                                let t = (0,
                                o.A)(i, "video.dealTier")
                                  , n = s.$W.getConfig(`adpod.dealTier.${i.bidderCode}.minDealTier`);
                                return n && t ? t >= n ? e[1].push(i) : e[0].push(i) : t ? e[1].push(i) : e[0].push(i),
                                e
                            }
                            ), [[], []]);
                            i.sort(E),
                            e.sort(E),
                            c = i.concat(e)
                        } else
                            c.sort(E);
                        let f = {};
                        if (!1 === u)
                            t.forEach((e => {
                                let i = []
                                  , t = (0,
                                o.A)(e, "mediaTypes.video.adPodDurationSec");
                                c.filter((i => i.adUnitCode === e.code)).forEach(( (e, n, a) => {
                                    e.video.durationBucket <= t && (i.push({
                                        [v]: e.adserverTargeting[v]
                                    }),
                                    t -= e.video.durationBucket),
                                    n === a.length - 1 && i.length > 0 && i.push({
                                        [m]: e.adserverTargeting[m]
                                    })
                                }
                                )),
                                f[e.code] = i
                            }
                            )),
                            i(null, f);
                        else {
                            let e = [];
                            t.forEach((i => {
                                let t = (0,
                                o.A)(i, "mediaTypes.video.adPodDurationSec");
                                c.filter((e => e.adUnitCode === i.code)).forEach((i => {
                                    i.video.durationBucket <= t && (e.push(i),
                                    t -= i.video.durationBucket)
                                }
                                ))
                            }
                            )),
                            function(e, i) {
                                (0,
                                l.M_)(e, (function(t, n) {
                                    if (t)
                                        i(t, null);
                                    else {
                                        let t = [];
                                        for (let i = 0; i < n.length; i++)
                                            "" !== n[i] && t.push(e[i]);
                                        i(null, t)
                                    }
                                }
                                ))
                            }(e, (function(e, t) {
                                if (e)
                                    i(e, null);
                                else {
                                    let e = (0,
                                    a.groupBy)(t, "adUnitCode");
                                    Object.keys(e).forEach((i => {
                                        let t = [];
                                        e[i].forEach(( (e, i, n) => {
                                            t.push({
                                                [v]: e.adserverTargeting[v]
                                            }),
                                            i === n.length - 1 && t.length > 0 && t.push({
                                                [m]: e.adserverTargeting[m]
                                            })
                                        }
                                        )),
                                        f[i] = t
                                    }
                                    )),
                                    i(null, f)
                                }
                            }
                            ))
                        }
                        return f
                    }
                };
                Object.freeze(B),
                (0,
                c.xG)("adpod", (function() {
                    (0,
                    a.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0]) ? function(e, i) {
                        for (let t in i)
                            e[t] = i[t]
                    }(arguments.length <= 0 ? void 0 : arguments[0], B) : (0,
                    a.logError)("Adpod module needs plain object to share methods with submodule")
                }
                )),
                (0,
                n.E)("adpod")
            }
        }, e => {
            e.O(0, [60802, 37769, 12139, 51085], ( () => {
                return i = 63399,
                e(e.s = i);
                var i
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[38793], {
            96345: (e, n, t) => {
                var s = t(7873)
                  , i = t(91069)
                  , a = t(63172)
                  , r = t(43272)
                  , o = t(16916)
                  , p = t(70068)
                  , c = t(20965)
                  , l = t(25555)
                  , u = t(63806);
                let d = {};
                class g {
                    constructor(e, n) {
                        this.message = e,
                        this.args = null == n ? [] : [n]
                    }
                }
                class h {
                    apiVersion = "1.1";
                    static INST;
                    static get() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.c5;
                        if (null == this.INST) {
                            const n = e({
                                apiName: "__gpp",
                                apiArgs: ["command", "callback", "parameter"],
                                mode: c.q4
                            });
                            if (null == n)
                                throw new g("GPP CMP not found");
                            this.INST = new this(n)
                        }
                        return this.INST
                    }
                    #e;
                    #n;
                    #t = [];
                    initialized = !1;
                    constructor(e) {
                        this.cmp = e,
                        [this.#e,this.#n] = ["resolve", "reject"].map((e => n => {
                            for (; this.#t.length; )
                                this.#t.pop()[e](n)
                        }
                        ))
                    }
                    init(e) {
                        const n = this.updateWhenReady(e);
                        return this.initialized || (e.gppVersion !== this.apiVersion && (0,
                        i.logWarn)(`Unrecognized GPP CMP version: ${e.apiVersion}. Continuing using GPP API version ${this.apiVersion}...`),
                        this.initialized = !0,
                        this.cmp({
                            command: "addEventListener",
                            callback: (e, n) => {
                                null == n || n ? "error" === e?.pingData?.cmpStatus ? this.#n(new g('CMP status is "error"; please check CMP setup',e)) : this.isCMPReady(e?.pingData || {}) && ["sectionChange", "signalStatus"].includes(e?.eventName) && this.#e(this.updateConsent(e.pingData)) : this.#n(new g("Received error response from CMP",e)),
                                null == o.ad.getConsentData() || null == e?.pingData || this.isCMPReady(e.pingData) || o.ad.setConsentData(null)
                            }
                        })),
                        n
                    }
                    refresh() {
                        return this.cmp({
                            command: "ping"
                        }).then(this.init.bind(this))
                    }
                    updateConsent(e) {
                        return new l.U9((n => {
                            if (null == e || (0,
                            i.isEmpty)(e))
                                throw new g("Received empty response from CMP",e);
                            const t = C(e);
                            (0,
                            i.logInfo)("Retrieved GPP consent from CMP:", t),
                            o.ad.setConsentData(t),
                            n(t)
                        }
                        ))
                    }
                    nextUpdate() {
                        const e = (0,
                        l.v6)();
                        return this.#t.push(e),
                        e.promise
                    }
                    updateWhenReady(e) {
                        return this.isCMPReady(e) ? this.updateConsent(e) : this.nextUpdate()
                    }
                    isCMPReady(e) {
                        return "ready" === e.signalStatus
                    }
                }
                const m = {
                    iab: function() {
                        return new l.U9((e => e(h.get().refresh())))
                    }
                };
                function C(e) {
                    if (null != e?.applicableSections && !Array.isArray(e.applicableSections) || null != e?.gppString && !(0,
                    i.isStr)(e.gppString) || null != e?.parsedSections && !(0,
                    i.isPlainObject)(e.parsedSections))
                        throw new g("CMP returned unexpected value during lookup process.",e);
                    return ["usnatv1", "uscav1"].forEach((n => {
                        e?.parsedSections?.[n] && (0,
                        i.logWarn)(`Received invalid section from cmp: '${n}'. Some functionality may not work as expected`, e)
                    }
                    )),
                    S(e)
                }
                function S() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        gppString: e?.gppString,
                        applicableSections: e?.applicableSections || [],
                        parsedSections: e?.parsedSections || {},
                        gppData: e
                    }
                }
                const f = (0,
                u.yq)({
                    namespace: "gpp",
                    displayName: "GPP",
                    consentDataHandler: o.ad,
                    parseConsentData: C,
                    getNullConsent: () => S(null),
                    cmpHandlers: m
                });
                r.$W.getConfig("consentManagement", (e => function(e) {
                    return d = f(e),
                    d.loadConsentData?.()?.catch?.(( () => null))
                }(e.consentManagement))),
                p.w.before((function(e, n) {
                    return e(n.then((e => {
                        const n = o.ad.getConsentData();
                        return n && (Array.isArray(n.applicableSections) && (0,
                        a.J)(e, "regs.gpp_sid", n.applicableSections),
                        (0,
                        a.J)(e, "regs.gpp", n.gppString)),
                        e
                    }
                    )))
                }
                )),
                (0,
                s.E)("consentManagementGpp")
            }
        }, e => {
            e.O(0, [57109, 90010, 60802, 37769, 12139, 51085], ( () => {
                return n = 96345,
                e(e.s = n);
                var n
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[15081], {
            66117: (e, n, t) => {
                var o = t(7873)
                  , r = t(91069)
                  , s = t(63172)
                  , a = t(43272)
                  , c = t(16916)
                  , i = t(1e3)
                  , p = t(70068)
                  , d = t(20965)
                  , l = t(63806);
                let g, u, f = {};
                const C = 2
                  , m = {
                    iab: function(e) {
                        return new Promise(( (n, t) => {
                            const o = (0,
                            d.c5)({
                                apiName: "__tcfapi",
                                apiVersion: C,
                                apiArgs: ["command", "version", "callback", "parameter"]
                            });
                            o || t(new Error("TCF2 CMP not found.")),
                            o.isDirect ? (0,
                            r.logInfo)("Detected CMP API is directly accessible, calling it now...") : (0,
                            r.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),
                            o({
                                command: "addEventListener",
                                callback: function(o, s) {
                                    if ((0,
                                    r.logInfo)("Received a response from CMP", o),
                                    s) {
                                        try {
                                            e(b(o))
                                        } catch (e) {}
                                        if (!1 === o.gdprApplies || "tcloaded" === o.eventStatus || "useractioncomplete" === o.eventStatus)
                                            try {
                                                c.mW.setConsentData(b(o)),
                                                n()
                                            } catch (e) {
                                                t(e)
                                            }
                                    } else
                                        t(Error("CMP unable to register callback function.  Please check CMP setup."))
                                }
                            })
                        }
                        ))
                    }
                };
                function b(e) {
                    if (function() {
                        const n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : g
                          , t = e && e.tcString;
                        return !("boolean" == typeof n && (!0 !== n || t && (0,
                        r.isStr)(t)))
                    }())
                        throw Object.assign(new Error("CMP returned unexpected value during lookup process."), {
                            args: [e]
                        });
                    return D(e)
                }
                function D(e) {
                    const n = {
                        consentString: e ? e.tcString : void 0,
                        vendorData: e || void 0,
                        gdprApplies: e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : g
                    };
                    return e && e.addtlConsent && (0,
                    r.isStr)(e.addtlConsent) && (n.addtlConsent = e.addtlConsent),
                    n.apiVersion = C,
                    n
                }
                const v = (0,
                l.yq)({
                    namespace: "gdpr",
                    displayName: "TCF",
                    consentDataHandler: c.mW,
                    cmpHandlers: m,
                    parseConsentData: b,
                    getNullConsent: () => D(null)
                });
                a.$W.getConfig("consentManagement", (e => function(e) {
                    return e = e && (e.gdpr || e.usp || e.gpp ? e.gdpr : e),
                    null != e?.consentData?.getTCData && (e.consentData = e.consentData.getTCData),
                    g = !0 === e?.defaultGdprScope,
                    u = !!e?.dsaPlatform,
                    f = v({
                        gdpr: e
                    }),
                    f.loadConsentData?.()?.catch?.(( () => null))
                }(e.consentManagement))),
                p.w.before((function(e, n) {
                    return e(n.then((e => {
                        const n = c.mW.getConsentData();
                        return n && ("boolean" == typeof n.gdprApplies && (0,
                        s.J)(e, "regs.ext.gdpr", n.gdprApplies ? 1 : 0),
                        (0,
                        s.J)(e, "user.ext.consent", n.consentString)),
                        u && (0,
                        s.J)(e, "regs.ext.dsa.dsarequired", 3),
                        e
                    }
                    )))
                }
                )),
                (0,
                i.pS)({
                    type: i.S3,
                    name: "gdprAddtlConsent",
                    fn: function(e, n) {
                        const t = n.gdprConsent?.addtlConsent;
                        t && "string" == typeof t && (0,
                        s.J)(e, "user.ext.ConsentedProvidersSettings.consented_providers", t)
                    }
                }),
                (0,
                o.E)("consentManagementTcf")
            }
        }, e => {
            e.O(0, [60802, 57109, 90010, 37769, 12139, 51085], ( () => {
                return n = 66117,
                e(e.s = n);
                var n
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[98662], {
            86056: (n, t, e) => {
                var o = e(7873)
                  , a = e(91069)
                  , s = e(63172)
                  , i = e(43272)
                  , c = e(11445)
                  , r = e(16916)
                  , u = e(16894)
                  , l = e(16833)
                  , g = e(70068)
                  , f = e(20965);
                const d = "iab";
                let m, p, P = d, b = 50, S = !1;
                const v = {
                    iab: function(n) {
                        let {onSuccess: t, onError: e} = n;
                        let o = function() {
                            const n = {};
                            return {
                                consentDataCallback: (o, a) => {
                                    a && o.uspString && (n.usPrivacy = o.uspString),
                                    n.usPrivacy ? h(n, {
                                        onSuccess: t,
                                        onError: e
                                    }) : e("Unable to get USP consent string.")
                                }
                            }
                        }();
                        const s = (0,
                        f.c5)({
                            apiName: "__uspapi",
                            apiVersion: 1,
                            apiArgs: ["command", "version", "callback"]
                        });
                        if (!s)
                            return e("USP CMP not found.");
                        s.isDirect ? (0,
                        a.logInfo)("Detected USP CMP is directly accessible, calling it now...") : (0,
                        a.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...");
                        s({
                            command: "getUSPData",
                            callback: o.consentDataCallback
                        }),
                        s({
                            command: "registerDeletion",
                            callback: (n, t) => (null == t || t) && c.Ay.callDataDeletionRequest(n)
                        }).catch((n => {
                            (0,
                            a.logError)("Error invoking CMP `registerDeletion`:", n)
                        }
                        ))
                    },
                    static: function(n) {
                        let {onSuccess: t, onError: e} = n;
                        h(m, {
                            onSuccess: t,
                            onError: e
                        })
                    }
                };
                function D(n) {
                    let t = null
                      , e = !1;
                    function o(o, a) {
                        if (null != t && clearTimeout(t),
                        e = !0,
                        r.t6.setConsentData(o),
                        null != n) {
                            for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
                                i[c - 2] = arguments[c];
                            n(a, ...i)
                        }
                    }
                    if (!v[P])
                        return void o(null, `USP framework (${P}) is not a supported framework. Aborting consentManagement module and resuming auction.`);
                    const a = {
                        onSuccess: o,
                        onError: function(n) {
                            for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                                e[a - 1] = arguments[a];
                            o(null, `${n} Resuming auction without consent data as per consentManagement config.`, ...e)
                        }
                    };
                    v[P](a),
                    e || (0 === b ? h(void 0, a) : t = setTimeout(a.onError.bind(null, "USPAPI workflow exceeded timeout threshold."), b))
                }
                const y = (0,
                u.Ak)("usp", (function(n, t) {
                    var e = this;
                    S || U(),
                    D((function(o) {
                        if (null != o) {
                            for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
                                i[c - 1] = arguments[c];
                            (0,
                            a.logWarn)(o, ...i)
                        }
                        n.call(e, t)
                    }
                    ))
                }
                ));
                function h(n, t) {
                    let {onSuccess: e, onError: o} = t;
                    !n || !n.usPrivacy ? o("USPAPI returned unexpected value during lookup process.", n) : (!function(n) {
                        n && n.usPrivacy && (p = n.usPrivacy)
                    }(n),
                    e(p))
                }
                function U() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    S || ((0,
                    a.logInfo)("USPAPI consentManagement module has been activated" + (n ? "" : ` using default values (api: '${P}', timeout: ${b}ms)`)),
                    S = !0,
                    r.t6.enable()),
                    D()
                }
                i.$W.getConfig("consentManagement", (n => function(n) {
                    (n = n && n.usp) && "object" == typeof n || (0,
                    a.logWarn)("consentManagement.usp config not defined, using defaults"),
                    n && (0,
                    a.isStr)(n.cmpApi) ? P = n.cmpApi : (P = d,
                    (0,
                    a.logInfo)(`consentManagement.usp config did not specify cmpApi. Using system default setting (${d}).`)),
                    n && (0,
                    a.isNumber)(n.timeout) ? b = n.timeout : (b = 50,
                    (0,
                    a.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (50).")),
                    "static" === P && ((0,
                    a.isPlainObject)(n.consentData) && (0,
                    a.isPlainObject)(n.consentData.getUSPData) ? (n.consentData.getUSPData.uspString && (m = {
                        usPrivacy: n.consentData.getUSPData.uspString
                    }),
                    b = 0) : (0,
                    a.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),
                    U(!0)
                }(n.consentManagement))),
                (0,
                l.Yn)("requestBids").before(y, 50),
                g.w.before((function(n, t) {
                    return n(t.then((n => {
                        const t = r.t6.getConsentData();
                        return t && (0,
                        s.J)(n, "regs.ext.us_privacy", t),
                        n
                    }
                    )))
                }
                )),
                (0,
                o.E)("consentManagementUsp")
            }
        }, n => {
            n.O(0, [57109, 60802, 37769, 12139, 51085], ( () => {
                return t = 86056,
                n(n.s = t);
                var t
            }
            ));
            n.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[36050], {
            96480: (e, t, r) => {
                var n = r(7873)
                  , a = r(51252)
                  , o = r(10201)
                  , i = r(51692)
                  , s = r(67314)
                  , c = r(43272)
                  , l = r(78969)
                  , d = r(75023)
                  , u = r(16833)
                  , p = r(27934)
                  , m = r(97779)
                  , f = r(91069)
                  , b = r(25246)
                  , h = r(68693)
                  , g = r(68044)
                  , y = r(74420);
                const A = {
                    ri: p.EN
                }
                  , v = "VASTAdTagURI";
                function U(e) {
                    if (!e.params && !e.url)
                        return void (0,
                        f.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl");
                    const t = e.adUnit
                      , r = e.bid || m.iS.getWinningBids(t.code)[0];
                    let n = {};
                    if (e.url && (n = (0,
                    f.parseUrl)(e.url, {
                        noDecodeWholeURL: !0
                    }),
                    (0,
                    f.isEmpty)(e.params)))
                        return function(e, t, r) {
                            const n = _(t, e, "search");
                            n && (e.search.description_url = n);
                            return e.search.cust_params = x(t, r, e.search.cust_params),
                            (0,
                            f.buildUrl)(e)
                        }(n, r, e);
                    const o = {
                        correlator: Date.now(),
                        sz: (0,
                        f.parseSizesInput)(t?.mediaTypes?.video?.playerSize).join("|"),
                        url: encodeURIComponent(location.href)
                    }
                      , c = n.search
                      , l = c && c.sz;
                    l && (o.sz = l + "|" + o.sz);
                    let d = x(r, e, c && c.cust_params);
                    const u = Object.assign({}, b.Mu, n.search, o, e.params, {
                        cust_params: d
                    }, (0,
                    b.QS)())
                      , p = _(r, e, "params");
                    if (p && (u.description_url = p),
                    !u.ppid) {
                        const e = (0,
                        i.Q)();
                        null != e && (u.ppid = e)
                    }
                    const h = e.adUnit?.mediaTypes?.video;
                    Object.entries({
                        plcmt: () => h?.plcmt,
                        min_ad_duration: () => (0,
                        f.isNumber)(h?.minduration) ? 1e3 * h.minduration : null,
                        max_ad_duration: () => (0,
                        f.isNumber)(h?.maxduration) ? 1e3 * h.maxduration : null,
                        vpos() {
                            const e = h?.startdelay;
                            if ((0,
                            f.isNumber)(e))
                                return -2 === e ? "postroll" : -1 === e || e > 0 ? "midroll" : "preroll"
                        },
                        vconp: () => Array.isArray(h?.playbackmethod) && h.playbackmethod.some((e => 7 === e)) ? "2" : void 0,
                        vpa() {
                            if (Array.isArray(h?.playbackmethod)) {
                                const e = h.playbackmethod.some((e => 3 === e))
                                  , t = h.playbackmethod.some((e => [1, 2, 4, 5, 6].includes(e)));
                                if (e && !t)
                                    return "click";
                                if (t && !e)
                                    return "auto"
                            }
                        },
                        vpmute() {
                            if (Array.isArray(h?.playbackmethod)) {
                                const e = h.playbackmethod.some((e => [2, 6].includes(e)))
                                  , t = h.playbackmethod.some((e => [1, 3, 4, 5].includes(e)));
                                if (e && !t)
                                    return "1";
                                if (t && !e)
                                    return "0"
                            }
                        }
                    }).forEach((e => {
                        let[t,r] = e;
                        if (!u.hasOwnProperty(t)) {
                            const e = r();
                            null != e && (u[t] = e)
                        }
                    }
                    ));
                    const g = s.n.index.getBidRequest(e.bid || {})?.ortb2 ?? s.n.index.getAuction(e.bid || {})?.getFPD()?.global
                      , y = (0,
                    a.eu)(g);
                    return y.length && (u.ppsj = btoa(JSON.stringify({
                        PublisherProvidedTaxonomySignals: y
                    }))),
                    (0,
                    f.buildUrl)(Object.assign({}, b.P8, n, {
                        search: u
                    }))
                }
                function _(e, t, r) {
                    return t?.[r]?.description_url || encodeURIComponent(A.ri().page)
                }
                function x(e, t, r) {
                    const n = e && e.adserverTargeting || {};
                    let a = {};
                    const o = t && t.adUnit;
                    if (o) {
                        let e = m.iS.getAllTargeting(o.code);
                        a = e ? e[o.code] : {}
                    }
                    const i = Object.assign({}, {
                        hb_uuid: e && e.videoCacheKey
                    }, {
                        hb_cache_id: e && e.videoCacheKey
                    }, a, n);
                    d.emit(l.qY.SET_TARGETING, {
                        [o.code]: i
                    });
                    const s = t?.params?.cust_params
                      , c = Object.assign({}, i, s);
                    let u = encodeURIComponent((0,
                    f.formatQS)(c));
                    return r && (u = r + "%26" + u),
                    u
                }
                async function C(e, t) {
                    try {
                        const r = (0,
                        y.A)()
                          , n = r.parse(e)
                          , a = n.querySelectorAll(v)[0];
                        if (!a || !a.textContent)
                            return e;
                        const o = new RegExp("[A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}","gi")
                          , i = Array.from(a.textContent.matchAll(o)).map((e => {
                            let[t] = e;
                            return t
                        }
                        )).filter((e => t.has(e)));
                        if (1 != i.length)
                            return (0,
                            f.logWarn)(`Unable to determine unique uuid in ${v}`),
                            e;
                        const s = i[0]
                          , c = t.get(s)
                          , l = await async function(e) {
                            const t = await (0,
                            g.hd)(e);
                            if (!t.ok)
                                throw (0,
                                f.logError)("Unable to fetch blob"),
                                new Error("Blob not found");
                            const r = await t.text();
                            return `data://text/xml;base64,${btoa(r)}`
                        }(c)
                          , d = n.createCDATASection(l);
                        return a.textContent = "",
                        a.appendChild(d),
                        r.serialize(n)
                    } catch (t) {
                        return (0,
                        f.logWarn)("Unable to process xml", t),
                        e
                    }
                }
                c.$W.getConfig("brandCategoryTranslation.translationFile") && (0,
                u.Yn)("registerAdserver").before((function(e) {
                    e.call(this, "dfp")
                }
                )),
                (0,
                o.U)("dfp", {
                    buildVideoUrl: U,
                    getVastXml: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.kh;
                        const r = U(e)
                          , n = await (0,
                        g.hd)(r);
                        if (!n.ok)
                            throw new Error("Unable to fetch GAM VAST wrapper");
                        const a = await n.text();
                        if (c.$W.getConfig("cache.useLocal")) {
                            return await C(a, t)
                        }
                        return a
                    }
                }),
                (0,
                n.E)("dfpAdServerVideo")
            }
        }, e => {
            e.O(0, [60802, 33005, 47650, 41, 37769, 12139, 51085], ( () => {
                return t = 96480,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[99301], {
            11057: (n, e, s) => {
                var t = s(7873)
                  , a = s(43272)
                  , l = s(77274);
                let p = !1;
                a.$W.getConfig("consentManagement", (n => {
                    null == n?.consentManagement?.gpp || p || ((0,
                    l.l)("usnat", [7]),
                    p = !0)
                }
                )),
                (0,
                t.E)("gppControl_usnat")
            }
        }, n => {
            n.O(0, [40082, 60802, 37769, 12139, 51085], ( () => {
                return e = 11057,
                n(n.s = e);
                var e
            }
            ));
            n.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[27534], {
            18194: (n, e, t) => {
                var s = t(7873)
                  , r = t(43272)
                  , o = t(77274)
                  , i = t(63172)
                  , a = t(91069);
                const l = {
                    Version: 0,
                    Gpc: 0,
                    SharingNotice: 0,
                    SaleOptOutNotice: 0,
                    SharingOptOutNotice: 0,
                    TargetedAdvertisingOptOutNotice: 0,
                    SensitiveDataProcessingOptOutNotice: 0,
                    SensitiveDataLimitUseNotice: 0,
                    SaleOptOut: 0,
                    SharingOptOut: 0,
                    TargetedAdvertisingOptOut: 0,
                    SensitiveDataProcessing: 12,
                    KnownChildSensitiveDataConsents: 2,
                    PersonalDataConsents: 0,
                    MspaCoveredTransaction: 0,
                    MspaOptOutOptionMode: 0,
                    MspaServiceProviderMode: 0
                };
                function c(n) {
                    let {nullify: e=[], move: t={}, fn: s} = n
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
                    return t = Object.fromEntries(Object.entries(t).map((n => {
                        let[e,t] = n;
                        return [e, Object.fromEntries(Object.entries(t).map((n => {
                            let[e,t] = n;
                            return [e, Array.isArray(t) ? t : [t]]
                        }
                        )).map((n => {
                            let[e,t] = n;
                            return [--e, t.map((n => --n))]
                        }
                        )))]
                    }
                    ))),
                    function(n) {
                        const o = Object.fromEntries(Object.entries(r).map((e => {
                            let[s,r] = e
                              , o = null;
                            if (r > 0) {
                                if (o = Array(r).fill(null),
                                Array.isArray(n[s])) {
                                    const e = t[s] || {}
                                      , i = [];
                                    n[s].forEach(( (n, t) => {
                                        const [s,a] = e.hasOwnProperty(t) ? [e[t], !0] : [[t], !1];
                                        s.forEach((e => {
                                            e < r && !i.includes(e) && (o[e] = n,
                                            a && i.push(e))
                                        }
                                        ))
                                    }
                                    ))
                                }
                            } else
                                null != n[s] && (o = Array.isArray(n[s]) ? null : n[s]);
                            return [s, o]
                        }
                        )));
                        return e.forEach((n => (0,
                        i.J)(o, n, null))),
                        s && s(n, o),
                        o
                    }
                }
                function u(n, e) {
                    e.KnownChildSensitiveDataConsents = 0 === n.KnownChildSensitiveDataConsents ? [0, 0] : [1, 1]
                }
                const p = {
                    7: n => n,
                    8: c({
                        move: {
                            SensitiveDataProcessing: {
                                1: 9,
                                2: 10,
                                3: 8,
                                4: [1, 2],
                                5: 12,
                                8: 3,
                                9: 4
                            }
                        },
                        fn(n, e) {
                            n.KnownChildSensitiveDataConsents.some((n => 0 !== n)) && (e.KnownChildSensitiveDataConsents = [1, 1])
                        }
                    }),
                    9: c({
                        fn: u
                    }),
                    10: c({
                        fn: u
                    }),
                    11: c({
                        move: {
                            SensitiveDataProcessing: {
                                3: 4,
                                4: 5,
                                5: 3
                            }
                        },
                        fn: u
                    }),
                    12: c({
                        fn(n, e) {
                            const t = n.KnownChildSensitiveDataConsents;
                            let s;
                            s = t.some((n => 0 !== n)) ? 2 === t[1] && 2 === t[2] ? [2, 1] : [1, 1] : [0, 0],
                            e.KnownChildSensitiveDataConsents = s
                        }
                    })
                }
                  , f = {
                    8: "usca",
                    9: "usva",
                    10: "usco",
                    11: "usut",
                    12: "usct"
                }
                  , O = ( () => {
                    const n = Object.keys(f).map(Number);
                    return function() {
                        let {sections: e={}, sids: t=n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return t.map((n => {
                            const t = (0,
                            a.prefixLog)(`Cannot set up MSPA controls for SID ${n}:`)
                              , s = e[n] || {}
                              , r = s.normalizeAs || n;
                            if (!p.hasOwnProperty(r))
                                return void t.logError(`no normalization rules are known for SID ${r}`);
                            const o = s.name || f[n];
                            if ("string" == typeof o)
                                return [o, [n], p[r]];
                            t.logError("cannot determine GPP section name")
                        }
                        )).filter((n => null != n))
                    }
                }
                )()
                  , v = [];
                r.$W.getConfig("consentManagement", (n => {
                    const e = n.consentManagement?.gpp;
                    if (e) {
                        for (; v.length; )
                            v.pop()();
                        O(e?.mspa || {}).forEach((n => {
                            let[e,t,s] = n;
                            return v.push((0,
                            o.l)(e, t, s))
                        }
                        ))
                    }
                }
                )),
                (0,
                s.E)("gppControl_usstates")
            }
        }, n => {
            n.O(0, [40082, 60802, 37769, 12139, 51085], ( () => {
                return e = 18194,
                n(n.s = e);
                var e
            }
            ));
            n.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[4584], {
            84232: (t, e, o) => {
                var n = o(7873)
                  , a = o(51252)
                  , d = o(67314)
                  , s = o(43272)
                  , r = o(78969)
                  , i = o(16833)
                  , l = o(15901)
                  , c = o(91069)
                  , u = o(63172)
                  , p = o(70433);
                let f = {}
                  , g = !1;
                function b(t) {
                    return (0,
                    a.eu)(t)
                }
                const m = t => (s.$W.getConfig("gptPreAuction") || {}).mcmEnabled ? t.replace(/(^\/\d*),\d*\//, "$1/") : t;
                function h(t) {
                    (0,
                    c.logWarn)("pbadslot is deprecated and will soon be removed, use gpid instead", t)
                }
                const A = function(t, e) {
                    const o = (t => {
                        const {customGptSlotMatching: e} = f;
                        if (!(0,
                        c.isGptPubadsDefined)())
                            return;
                        const o = t.reduce(( (t, e) => (t[e.code] = t[e.code] || [],
                        t[e.code].push(e),
                        t)), {})
                          , n = {};
                        return window.googletag.pubads().getSlots().forEach((t => {
                            const a = (0,
                            l.I6)(Object.keys(o), e ? e(t) : (0,
                            c.isAdUnitCodeMatchingSlot)(t));
                            if (a) {
                                const e = n[a] = t.getAdUnitPath()
                                  , d = {
                                    name: "gam",
                                    adslot: m(e)
                                };
                                o[a].forEach((t => {
                                    (0,
                                    u.J)(t, "ortb2Imp.ext.data.adserver", Object.assign({}, t.ortb2Imp?.ext?.data?.adserver, d))
                                }
                                ))
                            }
                        }
                        )),
                        n
                    }
                    )(e)
                      , {useDefaultPreAuction: n, customPreAuction: a} = f;
                    e.forEach((t => {
                        t.ortb2Imp = t.ortb2Imp || {},
                        t.ortb2Imp.ext = t.ortb2Imp.ext || {},
                        t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {};
                        const e = t.ortb2Imp.ext;
                        if (a || n) {
                            e.data?.pbadslot && h(t);
                            let d, s = (0,
                            p.A)(e, "data.adserver.adslot");
                            a ? d = a(t, s, o?.[t.code]) : n && (d = ( (t, e, o) => {
                                const n = t.ortb2Imp.ext.data;
                                if (n.pbadslot)
                                    return n.pbadslot;
                                if ((0,
                                c.isGptPubadsDefined)()) {
                                    var a = window.googletag.pubads().getSlots().filter((t => t.getAdUnitPath() === o));
                                    if (0 !== a.length)
                                        return 1 === a.length ? e : `${e}#${t.code}`
                                }
                            }
                            )(t, s, o?.[t.code])),
                            d && (e.gpid = e.data.pbadslot = d)
                        } else {
                            h(t);
                            const o = (t => {
                                const e = t.ortb2Imp.ext.data
                                  , {customPbAdSlot: o} = f;
                                if (!e.pbadslot)
                                    if (o)
                                        e.pbadslot = o(t.code, (0,
                                        p.A)(e, "adserver.adslot"));
                                    else {
                                        try {
                                            const o = document.getElementById(t.code);
                                            if (o.dataset.adslotid)
                                                return void (e.pbadslot = o.dataset.adslotid)
                                        } catch (t) {}
                                        if (!(0,
                                        p.A)(e, "adserver.adslot"))
                                            return e.pbadslot = t.code,
                                            !0;
                                        e.pbadslot = e.adserver.adslot
                                    }
                            }
                            )(t);
                            e.gpid || o || (e.gpid = e.data.pbadslot)
                        }
                    }
                    ));
                    for (var d = arguments.length, s = new Array(d > 2 ? d - 2 : 0), r = 2; r < d; r++)
                        s[r - 2] = arguments[r];
                    return t.call(undefined, e, ...s)
                }
                  , v = (t, e) => {
                    const o = function(t) {
                        const e = {};
                        return a.Cn.forEach((o => {
                            const n = t.flatMap((t => t)).filter((t => t.taxonomy === o)).map((t => t.values));
                            e[o] = n.length ? n.reduce(( (t, e) => t.filter((t => e.includes(t))))) : [],
                            e[o] = {
                                values: e[o]
                            }
                        }
                        )),
                        e
                    }(function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.n.index;
                        return t.map((t => e.getAuction({
                            auctionId: t
                        })?.getFPD()?.global)).map(b).filter((t => t))
                    }(function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.n;
                        return Object.values(t).flatMap((t => Object.entries(t))).filter((t => t[0] === r.xS.AD_ID || t[0].startsWith(r.xS.AD_ID + "_"))).flatMap((t => t[1])).map((t => e.findBidByAdId(t)?.auctionId)).filter((t => null != t)).filter(c.uniques)
                    }(e)));
                    window.googletag.setConfig && window.googletag.setConfig({
                        pps: {
                            taxonomies: o
                        }
                    }),
                    t(e)
                }
                  , I = t => {
                    f = (0,
                    c.pick)(t, ["enabled", t => !1 !== t, "customGptSlotMatching", t => "function" == typeof t && t, "customPbAdSlot", t => "function" == typeof t && t, "customPreAuction", t => "function" == typeof t && t, "useDefaultPreAuction", t => t ?? !0]),
                    f.enabled ? g || ((0,
                    i.Yn)("makeBidRequests").before(A),
                    (0,
                    i.Yn)("targetingDone").after(v),
                    g = !0) : ((0,
                    c.logInfo)("GPT Pre-Auction: Turning off module"),
                    f = {},
                    (0,
                    i.Yn)("makeBidRequests").getHooks({
                        hook: A
                    }).remove(),
                    (0,
                    i.Yn)("targetingDone").getHooks({
                        hook: v
                    }).remove(),
                    g = !1)
                }
                ;
                s.$W.getConfig("gptPreAuction", (t => I(t.gptPreAuction))),
                I({}),
                (0,
                n.E)("gptPreAuction")
            }
        }, t => {
            t.O(0, [33005, 60802, 37769, 12139, 51085], ( () => {
                return e = 84232,
                t(t.s = e);
                var e
            }
            ));
            t.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[26497], {
            74263: (e, t, r) => {
                var i = r(7873)
                  , n = r(91069)
                  , o = r(70433)
                  , s = r(63172)
                  , a = r(68044)
                  , d = r(16833)
                  , u = r(27934)
                  , c = r(12938)
                  , l = r(45569)
                  , p = r(25555)
                  , g = r(41580);
                const h = "id5id"
                  , f = "User ID - ID5 submodule: "
                  , b = "id5-sync.com"
                  , m = (0,
                c.vM)({
                    moduleType: l.fW,
                    moduleName: "id5Id"
                })
                  , w = {
                    id5id: {
                        getValue: function(e) {
                            return e.uid
                        },
                        source: b,
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext)
                                return e.ext
                        }
                    },
                    euid: {
                        getValue: function(e) {
                            return e.uid
                        },
                        getSource: function(e) {
                            return e.source
                        },
                        atype: 3,
                        getUidExt: function(e) {
                            if (e.ext)
                                return e.ext
                        }
                    },
                    trueLinkId: {
                        getValue: function(e) {
                            return e.uid
                        },
                        getSource: function(e) {
                            return "true-link-id5-sync.com"
                        },
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext)
                                return e.ext
                        }
                    }
                }
                  , y = {
                    name: "id5Id",
                    gvlid: 131,
                    decode(e, t) {
                        if (e && void 0 !== e.ids) {
                            const t = {}
                              , r = {};
                            return Object.entries(e.ids).forEach((e => {
                                let[i,n] = e
                                  , o = n.eid
                                  , s = o?.uids?.[0];
                                t[i] = {
                                    uid: s?.id,
                                    ext: s?.ext
                                },
                                r[i] = function() {
                                    return o
                                }
                            }
                            )),
                            this.eids = r,
                            t
                        }
                        let r, i, a = {};
                        if (!e || "string" != typeof e.universal_uid)
                            return;
                        r = e.universal_uid,
                        a = e.ext || a,
                        i = e.publisherTrueLinkId,
                        this.eids = w;
                        let d = {
                            id5id: {
                                uid: r,
                                ext: a
                            }
                        };
                        (0,
                        n.isPlainObject)(a.euid) && (d.euid = {
                            uid: a.euid.uids[0].id,
                            source: a.euid.source,
                            ext: {
                                provider: b
                            }
                        }),
                        i && (d.trueLinkId = {
                            uid: i
                        });
                        switch ((0,
                        o.A)(e, "ab_testing.result")) {
                        case "control":
                            (0,
                            n.logInfo)(f + "A/B Testing - user is in the Control Group: ID5 ID is NOT exposed"),
                            (0,
                            s.J)(d, "id5id.ext.abTestingControlGroup", !0);
                            break;
                        case "error":
                            (0,
                            n.logError)(f + "A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1");
                            break;
                        case "normal":
                            (0,
                            n.logInfo)(f + "A/B Testing - user is NOT in the Control Group"),
                            (0,
                            s.J)(d, "id5id.ext.abTestingControlGroup", !1)
                        }
                        return (0,
                        n.logInfo)(f + "Decoded ID", d),
                        d
                    },
                    getId(e, t, r) {
                        if (!function(e) {
                            if (!e || !e.params || !e.params.partner)
                                return (0,
                                n.logError)(f + "partner required to be defined"),
                                !1;
                            const t = e.params.partner;
                            if ("string" == typeof t || t instanceof String) {
                                let r = parseInt(t);
                                if (isNaN(r) || r < 0)
                                    return (0,
                                    n.logError)(f + "partner required to be a number or a String parsable to a positive integer"),
                                    !1;
                                e.params.partner = r
                            } else if ("number" != typeof t)
                                return (0,
                                n.logError)(f + "partner required to be a number or a String parsable to a positive integer"),
                                !1;
                            if (!e.storage || !e.storage.type || !e.storage.name)
                                return (0,
                                n.logError)(f + "storage required to be set"),
                                !1;
                            e.storage.name !== h && (0,
                            n.logWarn)(f + `storage name recommended to be '${h}'.`);
                            return !0
                        }(e))
                            return;
                        if (!E(t?.gdpr))
                            return void (0,
                            n.logInfo)(f + "Skipping ID5 local storage write because no consent given.");
                        return {
                            callback: function(i) {
                                new v(e,t?.gdpr,r,t?.usp,t?.gpp).execute().then((e => {
                                    i(e)
                                }
                                )).catch((e => {
                                    (0,
                                    n.logError)(f + "getId fetch encountered an error", e),
                                    i()
                                }
                                ))
                            }
                        }
                    },
                    extendId: (e, t, r) => E(t?.gdpr) ? ((0,
                    n.logInfo)(f + "using cached ID", r),
                    r && (r.nbPage = I(r)),
                    r) : ((0,
                    n.logInfo)(f + "No consent given for ID5 local storage writing, skipping nb increment."),
                    r),
                    primaryIds: ["id5id", "trueLinkId"],
                    eids: w,
                    _reset() {
                        this.eids = w
                    }
                };
                class v {
                    constructor(e, t, r, i, n) {
                        this.submoduleConfig = e,
                        this.gdprConsentData = t,
                        this.cacheIdObj = r,
                        this.usPrivacyData = i,
                        this.gppData = n
                    }
                    async execute() {
                        const e = this.#e();
                        if (!this.#t())
                            return this.#r(e);
                        try {
                            return await this.#i(e)
                        } catch (t) {
                            return (0,
                            n.logError)(f + "Error while performing ID5 external module flow. Continuing with regular flow.", t),
                            this.#r(e)
                        }
                    }
                    #t() {
                        return "string" == typeof this.submoduleConfig.params.externalModuleUrl
                    }
                    async #i(e) {
                        await async function(e) {
                            return new p.U9(( (t, r) => {
                                if (window.id5Prebid)
                                    t();
                                else
                                    try {
                                        (0,
                                        g.R)(e, l.fW, "id5", t)
                                    } catch (e) {
                                        r(e)
                                    }
                            }
                            ))
                        }(this.submoduleConfig.params.externalModuleUrl);
                        const t = await e;
                        return this.#n().fetchId5Id(t, this.submoduleConfig.params, (0,
                        u.EN)(), this.gdprConsentData, this.usPrivacyData, this.gppData)
                    }
                    #n() {
                        return window.id5Prebid && window.id5Prebid.integration
                    }
                    async #r(e) {
                        const t = await e
                          , r = await this.#o(t.extensionsCall)
                          , i = await this.#s(t.fetchCall, r);
                        return this.#a(i)
                    }
                    async #e() {
                        let e = this.submoduleConfig.params.configUrl || "https://id5-sync.com/api/config/prebid";
                        const t = await (0,
                        a.hd)(e, {
                            method: "POST",
                            body: JSON.stringify({
                                ...this.submoduleConfig,
                                bounce: !0
                            }),
                            credentials: "include"
                        });
                        if (!t.ok)
                            throw new Error("Error while calling config endpoint: ",t);
                        const r = await t.json();
                        return (0,
                        n.logInfo)(f + "config response received from the server", r),
                        r
                    }
                    async #o(e) {
                        if (void 0 === e)
                            return;
                        const t = e.url
                          , r = e.method || "GET"
                          , i = "GET" === r ? void 0 : JSON.stringify(e.body || {})
                          , o = await (0,
                        a.hd)(t, {
                            method: r,
                            body: i
                        });
                        if (!o.ok)
                            throw new Error("Error while calling extensions endpoint: ",o);
                        const s = await o.json();
                        return (0,
                        n.logInfo)(f + "extensions response received from the server", s),
                        s
                    }
                    async #s(e, t) {
                        const r = e.url
                          , i = e.overrides || {}
                          , o = JSON.stringify({
                            ...this.#d(),
                            ...i,
                            extensions: t
                        })
                          , s = await (0,
                        a.hd)(r, {
                            method: "POST",
                            body: o,
                            credentials: "include"
                        });
                        if (!s.ok)
                            throw new Error("Error while calling fetch endpoint: ",s);
                        const d = await s.json();
                        return (0,
                        n.logInfo)(f + "fetch response received from the server", d),
                        d
                    }
                    #d() {
                        const e = this.submoduleConfig.params
                          , t = this.gdprConsentData && "boolean" == typeof this.gdprConsentData.gdprApplies && this.gdprConsentData.gdprApplies ? 1 : 0
                          , r = (0,
                        u.EN)()
                          , i = this.cacheIdObj ? this.cacheIdObj.signature : void 0
                          , o = I(this.cacheIdObj)
                          , s = window.id5Bootstrap ? window.id5Bootstrap.getTrueLinkInfo() : {
                            booted: !1
                        }
                          , a = {
                            partner: e.partner,
                            gdpr: t,
                            nbPage: o,
                            o: "pbjs",
                            tml: r.topmostLocation,
                            ref: r.ref,
                            cu: r.canonicalUrl,
                            top: r.reachedTop ? 1 : 0,
                            u: r.stack[0] || window.location.href,
                            v: "9.44.1",
                            storage: this.submoduleConfig.storage,
                            localStorage: m.localStorageIsEnabled() ? 1 : 0,
                            true_link: s
                        };
                        !t || void 0 === this.gdprConsentData.consentString || (0,
                        n.isEmpty)(this.gdprConsentData.consentString) || (0,
                        n.isEmptyStr)(this.gdprConsentData.consentString) || (a.gdpr_consent = this.gdprConsentData.consentString),
                        void 0 === this.usPrivacyData || (0,
                        n.isEmpty)(this.usPrivacyData) || (0,
                        n.isEmptyStr)(this.usPrivacyData) || (a.us_privacy = this.usPrivacyData),
                        this.gppData && (a.gpp_string = this.gppData.gppString,
                        a.gpp_sid = this.gppData.applicableSections),
                        void 0 === i || (0,
                        n.isEmptyStr)(i) || (a.s = i),
                        void 0 === e.pd || (0,
                        n.isEmptyStr)(e.pd) || (a.pd = e.pd),
                        void 0 === e.provider || (0,
                        n.isEmptyStr)(e.provider) || (a.provider = e.provider);
                        const d = e.abTesting || {
                            enabled: !1
                        };
                        return d.enabled && (a.ab_testing = {
                            enabled: !0,
                            control_group_pct: d.controlGroupPct
                        }),
                        a
                    }
                    #a(e) {
                        try {
                            e.privacy && window.id5Bootstrap && window.id5Bootstrap.setPrivacy && window.id5Bootstrap.setPrivacy(e.privacy)
                        } catch (e) {
                            (0,
                            n.logError)(f + "Error while writing privacy info into local storage.", e)
                        }
                        return e
                    }
                }
                function I(e) {
                    return e && void 0 !== e.nbPage ? e.nbPage + 1 : 1
                }
                function E(e) {
                    const t = e && "boolean" == typeof e.gdprApplies && e.gdprApplies
                      , r = (0,
                    o.A)(e, "vendorData.purpose.consents.1")
                      , i = (0,
                    o.A)(e, `vendorData.vendor.consents.${131. .toString()}`);
                    return !!(!t || r && i)
                }
                (0,
                d.bz)("userId", y),
                (0,
                i.E)("id5IdSystem")
            }
        }, e => {
            e.O(0, [60802, 37769, 12139, 51085], ( () => {
                return t = 74263,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[53170], {
            77764: (e, t, i) => {
                var r = i(7873)
                  , n = i(70433)
                  , o = i(91069)
                  , a = i(63172)
                  , s = i(71371)
                  , d = i(43272)
                  , p = i(12938)
                  , l = i(15901)
                  , c = i(57377)
                  , u = i(63895)
                  , m = i(95789)
                  , f = i(51252);
                const g = "ix"
                  , b = [s.D4, s.G_, s.s6]
                  , x = 50
                  , h = [144, 144]
                  , y = {
                    JPY: 1
                }
                  , v = {
                    PBJS: "p",
                    IX: "x"
                }
                  , I = {
                    SITE: ["id", "name", "domain", "cat", "sectioncat", "pagecat", "page", "ref", "search", "mobile", "privacypolicy", "publisher", "content", "keywords", "ext"],
                    USER: ["id", "buyeruid", "yob", "gender", "keywords", "customdata", "geo", "data", "ext"]
                }
                  , A = {
                    "liveramp.com": "idl",
                    "netid.de": "NETID",
                    "neustar.biz": "fabrickId",
                    "zeotap.com": "zeotapIdPlus",
                    "uidapi.com": "UID2",
                    "adserver.org": "TDID"
                }
                  , C = ["lipbid", "criteoId", "merkleId", "parrableId", "connectid", "tapadId", "quantcastId", "pubProvidedId", "pairId"]
                  , w = ["mimes", "minduration", "maxduration"]
                  , O = ["mimes", "minduration", "maxduration", "protocols", "protocol", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext", "playerSize", "w", "h", "plcmt"]
                  , U = `${g}_features`
                  , S = (0,
                p.vM)({
                    bidderCode: g
                })
                  , E = {
                    REQUESTED_FEATURE_TOGGLES: ["pbjs_enable_multiformat", "pbjs_allow_all_eids"],
                    featureToggles: {},
                    isFeatureEnabled: function(e) {
                        return (0,
                        n.A)(this.featureToggles, `features.${e}.activated`, !1)
                    },
                    getFeatureToggles: function() {
                        if (S.localStorageIsEnabled()) {
                            const e = (0,
                            o.safeJSONParse)(S.getDataFromLocalStorage(U));
                            (0,
                            n.A)(e, "expiry") && e.expiry >= (new Date).getTime() ? this.featureToggles = e : this.clearFeatureToggles()
                        }
                    },
                    setFeatureToggles: function(e) {
                        const t = e.body
                          , i = new Date
                          , r = (0,
                        n.A)(t, "ext.features");
                        r && (this.featureToggles = {
                            expiry: i.setHours(i.getHours() + 1),
                            features: r
                        },
                        S.localStorageIsEnabled() && S.setDataInLocalStorage(U, JSON.stringify(this.featureToggles)))
                    },
                    clearFeatureToggles: function() {
                        this.featureToggles = {},
                        S.localStorageIsEnabled() && S.removeDataFromLocalStorage(U)
                    }
                };
                let P = 0
                  , T = ""
                  , D = ""
                  , _ = !1;
                const J = 2;
                function k(e) {
                    const t = j(e, s.G_)
                      , i = (0,
                    n.A)(e, "mediaTypes.video")
                      , r = (0,
                    n.A)(e, "params.video");
                    if ($(i, r).length)
                        return {};
                    t.video = r ? (0,
                    o.deepClone)(e.params.video) : {};
                    let d = (0,
                    n.A)(e, "ortb2Imp.ext.tid");
                    d && (0,
                    a.J)(t, "ext.tid", d),
                    function(e, t) {
                        if ((0,
                        n.A)(t, "mediaTypes.video.context") === u.H6) {
                            let i = (0,
                            n.A)(t, "mediaTypes.video.renderer");
                            if (i || (i = (0,
                            n.A)(t, "renderer")),
                            (0,
                            n.A)(t, "schain", !1))
                                e.displaymanager = "pbjs_wrapper";
                            else if (i && "object" == typeof i) {
                                if (void 0 !== i.url) {
                                    let t = "";
                                    try {
                                        t = new URL(i.url).hostname
                                    } catch {
                                        return
                                    }
                                    t.includes("js-sec.indexww") ? e.displaymanager = "ix" : e.displaymanager = i.url
                                }
                            } else
                                e.displaymanager = "ix"
                        }
                    }(t, e),
                    H(t, e);
                    for (const e in i)
                        -1 === O.indexOf(e) || t.video.hasOwnProperty(e) || (t.video[e] = i[e]);
                    if (t.video.minduration > t.video.maxduration)
                        return (0,
                        o.logError)(`IX Bid Adapter: video minduration [${t.video.minduration}] cannot be greater than video maxduration [${t.video.maxduration}]`),
                        {};
                    const p = r && r.context || i && i.context;
                    if (function(e) {
                        e.video.hasOwnProperty("plcmt") && (!(0,
                        o.isInteger)(e.video.plcmt) || e.video.plcmt < 1 || e.video.plcmt > 4) && ((0,
                        o.logWarn)(`IX Bid Adapter: video.plcmt [${e.video.plcmt}] must be an integer between 1-4 inclusive`),
                        delete e.video.plcmt)
                    }(t),
                    p && !t.video.hasOwnProperty("placement") && (p === u.mn ? t.video.placement = 1 : p === u.H6 ? (0,
                    n.A)(r, "playerConfig.floatOnScroll") ? t.video.placement = 5 : (t.video.placement = 3,
                    _ = !0) : (0,
                    o.logWarn)(`IX Bid Adapter: Video context '${p}' is not supported`)),
                    !t.video.w || !t.video.h) {
                        const i = W((0,
                        n.A)(t, "video.playerSize")) || W((0,
                        n.A)(e, "params.size"));
                        if (!i)
                            return (0,
                            o.logWarn)("IX Bid Adapter: Video size is missing in [mediaTypes.video]"),
                            {};
                        t.video.w = i[0],
                        t.video.h = i[1]
                    }
                    return B(e, t, s.G_),
                    t
                }
                function j(e, t) {
                    const i = {};
                    if (i.id = e.bidId,
                    ne() && (0,
                    n.A)(e, "params.externalId") && (0,
                    a.J)(i, "ext.externalID", e.params.externalId),
                    (0,
                    n.A)(e, `params.${t}.siteId`) && !isNaN(Number(e.params[t].siteId)))
                        switch (t) {
                        case s.D4:
                            (0,
                            a.J)(i, "ext.siteID", e.params.banner.siteId.toString());
                            break;
                        case s.G_:
                            (0,
                            a.J)(i, "ext.siteID", e.params.video.siteId.toString());
                            break;
                        case s.s6:
                            (0,
                            a.J)(i, "ext.siteID", e.params.native.siteId.toString())
                        }
                    else
                        e.params.siteId && (0,
                        a.J)(i, "ext.siteID", e.params.siteId.toString());
                    return !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id || (0,
                    a.J)(i, "ext.sid", String(e.params.id)),
                    i
                }
                function B(e, t, i) {
                    let r = null
                      , n = null;
                    if (e.params.bidFloor && e.params.bidFloorCur && (r = {
                        floor: e.params.bidFloor,
                        currency: e.params.bidFloorCur
                    }),
                    (0,
                    o.isFn)(e.getFloor)) {
                        let r = "*"
                          , a = "*";
                        if (i && (0,
                        o.contains)(b, i)) {
                            const {w: e, h: n} = t[i];
                            r = i,
                            a = [e, n]
                        }
                        try {
                            n = e.getFloor({
                                mediaType: r,
                                size: a
                            })
                        } catch (e) {
                            (0,
                            o.logWarn)("priceFloors module call getFloor failed, error : ", e)
                        }
                    }
                    let d = !1;
                    n ? (t.bidfloor = n.floor,
                    t.bidfloorcur = n.currency,
                    (0,
                    a.J)(t, "ext.fl", v.PBJS),
                    d = !0) : r && (t.bidfloor = r.floor,
                    t.bidfloorcur = r.currency,
                    (0,
                    a.J)(t, "ext.fl", v.IX),
                    d = !0),
                    d && (i == s.D4 ? ((0,
                    a.J)(t, "banner.ext.bidfloor", t.bidfloor),
                    (0,
                    a.J)(t, "banner.ext.fl", t.ext.fl)) : i == s.G_ ? ((0,
                    a.J)(t, "video.ext.bidfloor", t.bidfloor),
                    (0,
                    a.J)(t, "video.ext.fl", t.ext.fl)) : ((0,
                    a.J)(t, "native.ext.bidfloor", t.bidfloor),
                    (0,
                    a.J)(t, "native.ext.fl", t.ext.fl)))
                }
                function F(e, t, i) {
                    const r = {}
                      , a = !(!(0,
                    n.A)(e, "exp") || !(0,
                    o.isInteger)(e.exp))
                      , d = (0,
                    n.A)(e, "dealid") || (0,
                    n.A)(e, "ext.dealid");
                    y.hasOwnProperty(t) ? r.cpm = e.price / y[t] : r.cpm = e.price / 100,
                    r.requestId = e.impid,
                    d && (r.dealId = d),
                    r.netRevenue = true,
                    r.currency = t,
                    r.creativeId = e.hasOwnProperty("crid") ? e.crid : "-",
                    e.mtype != J || (!e.ext || e.ext.vasturl) && e.ext ? e.ext && e.ext.vasturl && (r.vastUrl = e.ext.vasturl) : r.vastXml = e.adm;
                    let p = null;
                    if ("string" == typeof e.adm && "{" === e.adm[0] && "}" === e.adm[e.adm.length - 1])
                        try {
                            p = JSON.parse(e.adm)
                        } catch (e) {
                            (0,
                            o.logWarn)("adm looks like JSON but failed to parse: ", e)
                        }
                    return e.ext && e.ext.vasturl || e.mtype == J ? (r.width = i.video.w,
                    r.height = i.video.h,
                    r.mediaType = s.G_,
                    r.mediaTypes = i.mediaTypes,
                    r.ttl = a ? e.exp : 3600) : p && p.native ? (r.native = {
                        ortb: p.native
                    },
                    r.width = e.w ? e.w : 1,
                    r.height = e.h ? e.h : 1,
                    r.mediaType = s.s6,
                    r.ttl = a ? e.exp : 3600) : (r.ad = e.adm,
                    r.width = e.w,
                    r.height = e.h,
                    r.mediaType = s.D4,
                    r.ttl = a ? e.exp : 300),
                    r.meta = {},
                    r.meta.networkId = (0,
                    n.A)(e, "ext.dspid"),
                    r.meta.brandId = (0,
                    n.A)(e, "ext.advbrandid"),
                    r.meta.brandName = (0,
                    n.A)(e, "ext.advbrand"),
                    e.adomain && e.adomain.length > 0 && (r.meta.advertiserDomains = e.adomain),
                    e.ext?.dsa && (r.meta.dsa = e.ext.dsa),
                    e.ext?.ibv && (r.ext = r.ext || {},
                    r.ext.ibv = e.ext.ibv),
                    r
                }
                function z(e) {
                    return Array.isArray(e) && 2 === e.length && (0,
                    o.isInteger)(e[0]) && (0,
                    o.isInteger)(e[1])
                }
                function R() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (z(e))
                        return e[0] === t[0] && e[1] === t[1];
                    for (let i = 0; i < e.length; i++)
                        if (e[i][0] === t[0] && e[i][1] === t[1])
                            return !0;
                    return !1
                }
                function $(e, t) {
                    const i = [];
                    e || (0,
                    o.logWarn)("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");
                    for (let r of w) {
                        const n = e && e.hasOwnProperty(r)
                          , o = t && t.hasOwnProperty(r);
                        n || o || i.push(`IX Bid Adapter: ${r} is not included in either the adunit or params level`)
                    }
                    const r = e && e.hasOwnProperty("protocol")
                      , n = e && e.hasOwnProperty("protocols")
                      , a = t && t.hasOwnProperty("protocol")
                      , s = t && t.hasOwnProperty("protocols");
                    return r || n || a || s || i.push("IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"),
                    i
                }
                function W() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return z(e) ? e : !!z(e[0]) && e[0]
                }
                function X(e, t, i) {
                    if (!e)
                        return;
                    return {
                        ...(0,
                        l.I6)(i, (t => t.bidId === e)),
                        ...(0,
                        l.I6)(t, (t => t.id === e))
                    }
                }
                function N(e, t, i, r) {
                    let s = "https://htlb.casalemedia.com/openrtb/pbjs"
                      , p = function(e) {
                        let t = []
                          , i = {};
                        if ((0,
                        o.isArray)(e))
                            for (const r of e) {
                                const e = A.hasOwnProperty(r.source);
                                if ((0,
                                n.A)(r, "uids.0") && (i[r.source] = !0,
                                e && "" !== A[r.source] && (r.uids[0].ext = {
                                    rtiPartner: A[r.source]
                                }),
                                t.push(r),
                                t.length >= x))
                                    break
                            }
                        return {
                            toSend: t,
                            seenSources: i
                        }
                    }((0,
                    n.A)(e, "0.userIdAsEids"))
                      , l = p.toSend;
                    window.headertag && "function" == typeof window.headertag.getIdentityInfo && function(e, t) {
                        let i = window.headertag.getIdentityInfo();
                        if (i && "object" == typeof i)
                            for (const r in i) {
                                if (e.length >= x)
                                    return;
                                if (i.hasOwnProperty(r)) {
                                    let n = i[r];
                                    !n.responsePending && n.data && "object" == typeof n.data && Object.keys(n.data).length && !t.seenSources[n.data.source] && e.push(n.data)
                                }
                            }
                    }(l, p);
                    const c = [];
                    let u = function(e) {
                        const t = {};
                        return t.id = e[0].bidderRequestId.toString(),
                        t.site = {},
                        t.ext = {},
                        t.ext.source = "prebid",
                        t.ext.ixdiag = {},
                        t.ext.ixdiag.ls = S.localStorageIsEnabled(),
                        t.imp = [],
                        t.at = 1,
                        t
                    }(e);
                    u = function(e, t) {
                        t.length > 0 && (e.ext.features = {},
                        t.forEach((t => {
                            e.ext.features[t] = {
                                activated: E.isFeatureEnabled(t)
                            }
                        }
                        )));
                        return e
                    }(u, E.REQUESTED_FEATURE_TOGGLES);
                    let m = function(e, t) {
                        var i = e.map((e => e.adUnitCode)).filter(( (e, t, i) => i.indexOf(e) === t));
                        let r = (0,
                        n.A)(e, "0.userIdAsEids", [])
                          , o = {
                            mfu: 0,
                            bu: 0,
                            iu: 0,
                            nu: 0,
                            ou: 0,
                            allu: 0,
                            ren: !1,
                            version: "9.44.1",
                            userIds: V(e[0]),
                            url: window.location.href.split("?")[0],
                            vpd: _,
                            ae: t,
                            eidLength: r.length
                        };
                        for (let t of i) {
                            let i = e.filter((e => e.adUnitCode === t))[0];
                            (0,
                            n.A)(i, "mediaTypes") && (Object.keys(i.mediaTypes).length > 1 && o.mfu++,
                            (0,
                            n.A)(i, "mediaTypes.native") && o.nu++,
                            (0,
                            n.A)(i, "mediaTypes.banner") && o.bu++,
                            "outstream" === (0,
                            n.A)(i, "mediaTypes.video.context") && (o.ou++,
                            re(i) && (o.ren = !0)),
                            "instream" === (0,
                            n.A)(i, "mediaTypes.video.context") && o.iu++,
                            o.allu++)
                        }
                        return o
                    }(e, (0,
                    n.A)(t, "paapi.enabled"));
                    for (let e in m)
                        u.ext.ixdiag[e] = m[e];
                    u = function(e, t, i, r, o) {
                        const a = (0,
                        n.A)(t, "timeout");
                        a && (e.ext.ixdiag.tmax = a);
                        d.$W.getConfig("userSync") && (e.ext.ixdiag.syncsPerBidder = d.$W.getConfig("userSync").syncsPerBidder);
                        e.ext.ixdiag.imps = Object.keys(i).length,
                        e.source = {
                            tid: t?.ortb2?.source?.tid
                        },
                        r[0].schain && (e.source.ext = {},
                        e.source.ext.schain = r[0].schain);
                        o.length > 0 && (e.user = {},
                        e.user.eids = o);
                        document.referrer && "" !== document.referrer && (e.site.ref = document.referrer);
                        return e
                    }(u, t, i, e, l),
                    u = function(e, t) {
                        if (t) {
                            t.gdprConsent && (T = t.gdprConsent,
                            T.hasOwnProperty("gdprApplies") && (e.regs = {
                                ext: {
                                    gdpr: T.gdprApplies ? 1 : 0
                                }
                            }),
                            T.hasOwnProperty("consentString") && (e.user = e.user || {},
                            e.user.ext = {
                                consent: T.consentString || ""
                            },
                            T.hasOwnProperty("addtlConsent") && T.addtlConsent && (e.user.ext.consented_providers_settings = {
                                addtl_consent: T.addtlConsent
                            }))),
                            t.uspConsent && ((0,
                            a.J)(e, "regs.ext.us_privacy", t.uspConsent),
                            D = t.uspConsent);
                            const i = (0,
                            n.A)(t, "refererInfo.page");
                            i && (e.site.page = i),
                            t.gppConsent && ((0,
                            a.J)(e, "regs.gpp", t.gppConsent.gppString),
                            (0,
                            a.J)(e, "regs.gpp_sid", t.gppConsent.applicableSections))
                        }
                        d.$W.getConfig("coppa") && (0,
                        a.J)(e, "regs.coppa", 1);
                        return e
                    }(u, t);
                    let f = {};
                    e[0].params.siteId && (P = e[0].params.siteId,
                    f.s = P);
                    const g = Object.keys(i);
                    let b = !1;
                    for (let r = 0; r < g.length && !(c.length >= 4); r++) {
                        u = G(i, g, u, r);
                        const a = (0,
                        n.A)(t, "ortb2") || {}
                          , p = {
                            ...a.site || a.context
                        };
                        p.page = q(t);
                        const l = {
                            ...a.user
                        };
                        (0,
                        o.isEmpty)(a) || b || (u = L(t, u, a, p, l),
                        u.site = (0,
                        o.mergeDeep)({}, u.site, p),
                        u.user = (0,
                        o.mergeDeep)({}, u.user, l),
                        b = !0),
                        u = M(i, u, g, r, f, s);
                        const m = r === g.length - 1;
                        if (u = le(u),
                        u = se(u),
                        u = de(u),
                        m) {
                            let t = `${s}?`;
                            0 !== P && (t += `s=${P}`),
                            ne() && (t += 0 !== P ? "&" : "",
                            t += `p=${d.$W.getConfig("exchangeId")}`),
                            c.push({
                                method: "POST",
                                url: t,
                                data: (0,
                                o.deepClone)(u),
                                options: {
                                    contentType: "text/plain",
                                    withCredentials: !0
                                },
                                validBidRequests: e
                            }),
                            u.imp = [],
                            b = !1
                        }
                    }
                    return c
                }
                function G(e, t, i, r) {
                    const d = e[t[r]]
                      , {missingImps: p=[], ixImps: l=[]} = d
                      , c = {
                        ixImps: l,
                        missingBannerImpressions: p
                    }
                      , u = Object.keys(c).map((e => c[e])).filter((e => Array.isArray(e))).reduce(( (e, t) => e.concat(...t)), [])
                      , m = e[t[r]].gpid
                      , f = e[t[r]].dfp_ad_unit_code
                      , g = e[t[r]].tid
                      , b = e[t[r]].sid
                      , x = e[t[r]].ae
                      , h = e[t[r]].paapi
                      , y = u.filter((e => s.D4 in e))
                      , v = u.filter((e => !(s.D4 in e)));
                    if (y.length > 0) {
                        const s = y.reduce(( (e, t) => (e[t.adunitCode] || (e[t.adunitCode] = []),
                        e[t.adunitCode].push(t),
                        e)), {});
                        for (const d in s) {
                            const p = s[d]
                              , {id: l, banner: {topframe: c}} = p[0];
                            let u = (0,
                            n.A)(p[0], "ext.externalID");
                            const y = {
                                id: l,
                                banner: {
                                    topframe: c,
                                    format: p.map((e => {
                                        let {banner: {w: t, h: i}, ext: r} = e;
                                        return {
                                            w: t,
                                            h: i,
                                            ext: r
                                        }
                                    }
                                    ))
                                }
                            };
                            for (let e = 0; e < y.banner.format.length; e++)
                                null != y.banner.format[e].ext && (null != y.banner.format[e].ext.sid && delete y.banner.format[e].ext.sid,
                                null != y.banner.format[e].ext.externalID && delete y.banner.format[e].ext.externalID),
                                "bidfloor"in p[e] && (y.banner.format[e].ext.bidfloor = p[e].bidfloor),
                                "{}" === JSON.stringify(y.banner.format[e].ext) && delete y.banner.format[e].ext;
                            const v = e[t[r]].pos;
                            (0,
                            o.isInteger)(v) && (y.banner.pos = v),
                            (f || m || g || b || x || u || h) && (y.ext = {},
                            y.ext.dfp_ad_unit_code = f,
                            y.ext.gpid = m,
                            y.ext.tid = g,
                            y.ext.sid = b,
                            y.ext.externalID = u,
                            1 == x && (y.ext.ae = 1,
                            y.ext.paapi = h)),
                            "bidfloor"in p[0] && (y.bidfloor = p[0].bidfloor),
                            "bidfloorcur"in p[0] && (y.bidfloorcur = p[0].bidfloorcur);
                            const I = e[t[r]].adUnitFPD;
                            I && (0,
                            a.J)(y, "ext.data", I),
                            i.imp.push(y)
                        }
                    }
                    return v.length > 0 && v.forEach((e => {
                        if (m && (0,
                        a.J)(e, "ext.gpid", m),
                        i.imp.length > 0) {
                            let t = !1;
                            i.imp.forEach(( (r, o) => {
                                e.id === r.id && s.G_ in e ? (r.video = e.video,
                                r.video.ext = Object.assign({}, e.video.ext, e.ext),
                                (0,
                                n.A)(r, "video.ext.bidfloor", !1) && (0,
                                n.A)(r, "bidfloor", !1) && r.video.ext.bidfloor < r.bidfloor && (r.bidfloor = r.video.ext.bidfloor),
                                !(0,
                                n.A)(r, "ext.siteID", !1) && (0,
                                n.A)(e, "video.ext.siteID") && ((0,
                                a.J)(r, "ext.siteID", e.video.ext.siteID),
                                (0,
                                a.J)(i, "ext.ixdiag.usid", !0)),
                                t = !0) : e.id === r.id && s.s6 in e && (r.native = e.native,
                                r.native.ext = Object.assign({}, e.native.ext, e.ext),
                                (0,
                                n.A)(r, "native.ext.bidfloor", !1) && (0,
                                n.A)(r, "bidfloor", !1) && r.native.ext.bidfloor < r.bidfloor && (r.bidfloor = r.native.ext.bidfloor),
                                !(0,
                                n.A)(r, "ext.siteID", !1) && (0,
                                n.A)(e, "native.ext.siteID", !1) && ((0,
                                a.J)(r, "ext.siteID", e.native.ext.siteID),
                                (0,
                                a.J)(i, "ext.ixdiag.usid", !0)),
                                t = !0)
                            }
                            )),
                            t || i.imp.push(e)
                        } else
                            i.imp.push(e)
                    }
                    )),
                    i
                }
                function q(e) {
                    const t = e && e.bidderCode || "ix"
                      , i = d.$W.getConfig(t);
                    let r = "";
                    if (r = (0,
                    n.A)(e, "ortb2.site.page") ? e.ortb2.site.page : (0,
                    n.A)(e, "refererInfo.page"),
                    i && "object" == typeof i.firstPartyData) {
                        return function(e, t, i) {
                            let r;
                            try {
                                r = new URL(t)
                            } catch (i) {
                                (0,
                                o.logWarn)(`IX Bid Adapter: Invalid URL set in ortb2.site.page: ${t}. Using referer URL instead.`),
                                r = new URL((0,
                                n.A)(e, "refererInfo.page"))
                            }
                            const a = new URLSearchParams(r.search);
                            for (const [e,t] of Object.entries(i))
                                a.has(e) || a.append(e, t);
                            return r.search = a.toString(),
                            r.toString()
                        }(e, r, i.firstPartyData)
                    }
                    return r
                }
                function L(e, t, i, r, n) {
                    if (t.ext.ixdiag.fpd = !0,
                    Object.keys(r).forEach((e => {
                        -1 === I.SITE.indexOf(e) && delete r[e]
                    }
                    )),
                    Object.keys(n).forEach((e => {
                        -1 === I.USER.indexOf(e) && delete n[e]
                    }
                    )),
                    i.device) {
                        const e = {
                            ...i.device.sua
                        };
                        (0,
                        o.isEmpty)(e) || (0,
                        a.J)(t, "device.sua", e);
                        const r = i.device.ip;
                        r && (0,
                        a.J)(t, "device.ip", r);
                        const n = i.device.ipv6;
                        n && (0,
                        a.J)(t, "device.ipv6", n)
                    }
                    if (i.hasOwnProperty("regs") && !e.gppConsent && (i.regs.hasOwnProperty("gpp") && "string" == typeof i.regs.gpp && (0,
                    a.J)(t, "regs.gpp", i.regs.gpp),
                    i.regs.hasOwnProperty("gpp_sid") && Array.isArray(i.regs.gpp_sid) && (0,
                    a.J)(t, "regs.gpp_sid", i.regs.gpp_sid),
                    i.regs.ext?.dsa)) {
                        const e = i.regs.ext.dsa
                          , r = {};
                        if (["dsarequired", "pubrender", "datatopub"].forEach((t => {
                            (0,
                            o.isNumber)(e[t]) && (r[t] = e[t])
                        }
                        )),
                        (0,
                        o.isArray)(e.transparency)) {
                            const t = [];
                            e.transparency.forEach((e => {
                                (0,
                                o.isPlainObject)(e) && (0,
                                o.isStr)(e.domain) && "" != e.domain && (0,
                                o.isArray)(e.dsaparams) && e.dsaparams.every((e => (0,
                                o.isNumber)(e))) && t.push(e)
                            }
                            )),
                            t.length > 0 && (r.transparency = t)
                        }
                        (0,
                        o.isEmpty)(r) || (0,
                        a.J)(t, "regs.ext.dsa", r)
                    }
                    return t
                }
                function H(e, t) {
                    const i = (0,
                    n.A)(t, "ortb2Imp.ext.data");
                    i && (0,
                    a.J)(e, "ext.data", i)
                }
                function M(e, t, i, r, n, o) {
                    const a = e[i[r]].pbadslot
                      , s = e[i[r]].tagId
                      , d = e[i[r]].adUnitCode
                      , p = e[i[r]].divId;
                    return (a || s || d || p) && (t.ext.ixdiag.pbadslot = a,
                    t.ext.ixdiag.tagid = s,
                    t.ext.ixdiag.adunitcode = d,
                    t.ext.ixdiag.divId = p),
                    t
                }
                function V(e) {
                    const t = e.userId || {};
                    return C.filter((e => t[e]))
                }
                function Q(e, t) {
                    if (t)
                        for (let i = 0; i < e.length; i++) {
                            const r = e[i];
                            if (t[0] === r[0] && t[1] === r[1]) {
                                e.splice(i, 1);
                                break
                            }
                        }
                }
                function Y(e, t) {
                    const i = function(e) {
                        const t = j(e, s.s6)
                          , i = e.nativeOrtbRequest;
                        i.eventtrackers = [{
                            event: 1,
                            methods: [1, 2]
                        }],
                        i.privacy = 1,
                        t.native = {
                            request: JSON.stringify(i),
                            ver: "1.2"
                        };
                        let r = (0,
                        n.A)(e, "ortb2Imp.ext.tid");
                        return r && (0,
                        a.J)(t, "ext.tid", r),
                        H(t, e),
                        B(e, t, s.s6),
                        t
                    }(e);
                    if (0 != Object.keys(i).length) {
                        t[e.adUnitCode] = {},
                        t[e.adUnitCode].ixImps = [],
                        t[e.adUnitCode].ixImps.push(i),
                        t[e.adUnitCode].gpid = (0,
                        n.A)(e, "ortb2Imp.ext.gpid"),
                        t[e.adUnitCode].dfp_ad_unit_code = (0,
                        n.A)(e, "ortb2Imp.ext.data.adserver.adslot"),
                        t[e.adUnitCode].pbadslot = (0,
                        n.A)(e, "ortb2Imp.ext.data.pbadslot"),
                        t[e.adUnitCode].tagId = (0,
                        n.A)(e, "params.tagId");
                        const r = e.adUnitCode
                          , o = document.getElementById(r) ? r : (0,
                        f.p)(r).divId;
                        t[e.adUnitCode].adUnitCode = r,
                        t[e.adUnitCode].divId = o
                    }
                }
                function Z(e, t) {
                    const i = k(e);
                    if (0 != Object.keys(i).length) {
                        t[e.adUnitCode] = {},
                        t[e.adUnitCode].ixImps = [],
                        t[e.adUnitCode].ixImps.push(i),
                        t[e.adUnitCode].gpid = (0,
                        n.A)(e, "ortb2Imp.ext.gpid"),
                        t[e.adUnitCode].dfp_ad_unit_code = (0,
                        n.A)(e, "ortb2Imp.ext.data.adserver.adslot"),
                        t[e.adUnitCode].pbadslot = (0,
                        n.A)(e, "ortb2Imp.ext.data.pbadslot"),
                        t[e.adUnitCode].tagId = (0,
                        n.A)(e, "params.tagId");
                        const r = e.adUnitCode
                          , o = document.getElementById(r) ? r : (0,
                        f.p)(r).divId;
                        t[e.adUnitCode].adUnitCode = r,
                        t[e.adUnitCode].divId = o
                    }
                }
                function K(e, t, i, r) {
                    let a = function(e) {
                        const t = j(e, s.D4);
                        t.banner = {},
                        t.adunitCode = e.adUnitCode;
                        const i = (0,
                        n.A)(e, "params.size");
                        return i && (t.banner.w = i[0],
                        t.banner.h = i[1]),
                        t.banner.topframe = (0,
                        o.inIframe)() ? 0 : 1,
                        B(e, t, s.D4),
                        t
                    }(e);
                    const d = R((0,
                    n.A)(e, "mediaTypes.banner.sizes"), (0,
                    n.A)(e, "params.size"));
                    i.hasOwnProperty(e.adUnitCode) || (i[e.adUnitCode] = {}),
                    i[e.adUnitCode].gpid = (0,
                    n.A)(e, "ortb2Imp.ext.gpid"),
                    i[e.adUnitCode].dfp_ad_unit_code = (0,
                    n.A)(e, "ortb2Imp.ext.data.adserver.adslot"),
                    i[e.adUnitCode].tid = (0,
                    n.A)(e, "ortb2Imp.ext.tid"),
                    i[e.adUnitCode].pbadslot = (0,
                    n.A)(e, "ortb2Imp.ext.data.pbadslot"),
                    i[e.adUnitCode].tagId = (0,
                    n.A)(e, "params.tagId"),
                    i[e.adUnitCode].pos = (0,
                    n.A)(e, "mediaTypes.banner.pos");
                    if ((0,
                    n.A)(r, "paapi.enabled")) {
                        const t = (0,
                        n.A)(e, "ortb2Imp.ext.ae")
                          , r = (0,
                        n.A)(e, "ortb2Imp.ext.paapi");
                        r && (i[e.adUnitCode].paapi = r),
                        t && ((0,
                        o.isInteger)(t) ? i[e.adUnitCode].ae = t : (0,
                        o.logWarn)("error setting auction environment flag - must be an integer"))
                    }
                    const p = (0,
                    n.A)(e, "ortb2Imp.ext.data");
                    p && (i[e.adUnitCode].adUnitFPD = p);
                    const l = (0,
                    n.A)(e, "params.id");
                    !l || "string" != typeof l && "number" != typeof l || (i[e.adUnitCode].sid = String(l));
                    const c = e.adUnitCode
                      , u = document.getElementById(c) ? c : (0,
                    f.p)(c).divId;
                    i[e.adUnitCode].adUnitCode = c,
                    i[e.adUnitCode].divId = u,
                    d && (i[e.adUnitCode].hasOwnProperty("ixImps") || (i[e.adUnitCode].ixImps = []),
                    i[e.adUnitCode].ixImps.push(a)),
                    function(e, t, i) {
                        if (t.hasOwnProperty(e.adUnitCode)) {
                            let i = [];
                            t[e.adUnitCode].hasOwnProperty("missingSizes") && (i = t[e.adUnitCode].missingSizes),
                            Q(i, e.params.size),
                            t[e.adUnitCode].missingSizes = i
                        } else if ((0,
                        n.A)(e, "mediaTypes.banner.sizes")) {
                            let r = (0,
                            o.deepClone)(e.mediaTypes.banner.sizes);
                            Q(r, e.params.size);
                            let n = {
                                missingSizes: r,
                                impression: i
                            };
                            t[e.adUnitCode] = n
                        }
                    }(e, t, a)
                }
                function ee(e, t, i) {
                    const r = (0,
                    o.deepClone)(t);
                    return r.banner.w = i[0],
                    r.banner.h = i[1],
                    B(e, r, s.D4),
                    r
                }
                function te(e) {
                    e.renderer.push((function() {
                        const t = e.adUnitCode
                          , i = document.getElementById(t) ? t : (0,
                        f.p)(t).divId;
                        i ? window.createIXPlayer(i, e) : (0,
                        o.logWarn)(`IX Bid Adapter: adUnitCode: ${i} not found on page.`)
                    }
                    ))
                }
                function ie(e, t) {
                    const i = m.A4.install({
                        id: e,
                        url: t,
                        loaded: !1
                    });
                    try {
                        i.setRender(te)
                    } catch (e) {
                        return (0,
                        o.logWarn)("Prebid Error calling setRender on renderer", e),
                        null
                    }
                    return t ? i : ((0,
                    o.logWarn)("Outstream renderer URL not found"),
                    null)
                }
                function re(e) {
                    if ("outstream" !== (0,
                    n.A)(e, "mediaTypes.video.context"))
                        return !1;
                    let t = (0,
                    n.A)(e, "mediaTypes.video.renderer");
                    t || (t = (0,
                    n.A)(e, "renderer"));
                    return !!("object" != typeof t || !t.url || !t.render) || t.backupOnly
                }
                function ne() {
                    let e = d.$W.getConfig("exchangeId");
                    return !("number" != typeof e || !isFinite(e)) || !("string" != typeof e || "" === e.trim() || !isFinite(Number(e)))
                }
                const oe = {
                    code: g,
                    gvlid: 10,
                    supportedMediaTypes: b,
                    isBidRequestValid: function(e) {
                        const t = (0,
                        n.A)(e, "params.video")
                          , i = (0,
                        n.A)(e, "params.size")
                          , r = (0,
                        n.A)(e, "mediaTypes.banner.sizes")
                          , a = (0,
                        n.A)(e, "mediaTypes.video")
                          , s = (0,
                        n.A)(e, "mediaTypes.video.playerSize")
                          , d = e.params.hasOwnProperty("bidFloor")
                          , p = e.params.hasOwnProperty("bidFloorCur");
                        if (e.hasOwnProperty("mediaType") && !(0,
                        o.contains)(b, e.mediaType))
                            return (0,
                            o.logWarn)("IX Bid Adapter: media type is not supported."),
                            !1;
                        if ((0,
                        n.A)(e, "mediaTypes.banner") && !r)
                            return !1;
                        if (i) {
                            const t = W(i);
                            if (!t)
                                return (0,
                                o.logError)("IX Bid Adapter: size has invalid format."),
                                !1;
                            if (!R(e.sizes, t) && !R(s, t) && !R(r, t))
                                return (0,
                                o.logError)("IX Bid Adapter: bid size is not included in ad unit sizes or player size."),
                                !1
                        }
                        if (!ne() && null == e.params.siteId)
                            return (0,
                            o.logError)("IX Bid Adapter: Invalid configuration - either siteId or exchangeId must be configured."),
                            !1;
                        if (void 0 !== e.params.siteId) {
                            if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId)
                                return (0,
                                o.logError)("IX Bid Adapter: siteId must be string or number type."),
                                !1;
                            if ("string" != typeof e.params.siteId && isNaN(Number(e.params.siteId)))
                                return (0,
                                o.logError)("IX Bid Adapter: siteId must valid value"),
                                !1
                        }
                        if ((d || p) && !(d && p && (l = e.params.bidFloor,
                        c = e.params.bidFloorCur,
                        Boolean("number" == typeof l && "string" == typeof c && c.match(/^[A-Z]{3}$/)))))
                            return (0,
                            o.logError)("IX Bid Adapter: bidFloor / bidFloorCur parameter has invalid format."),
                            !1;
                        var l, c;
                        if (a && t) {
                            const i = k(e).video
                              , r = $(a, t);
                            if ((0,
                            n.A)(e, "mediaTypes.video.context") === u.H6 && re(e) && i) {
                                const e = [(0,
                                n.A)(i, "w"), (0,
                                n.A)(i, "h")];
                                if (!(e[0] >= h[0] && e[1] >= h[1]))
                                    return (0,
                                    o.logError)(`IX Bid Adapter: ${e} is an invalid size for IX outstream renderer`),
                                    !1
                            }
                            if (r.length)
                                return r.forEach((e => {
                                    (0,
                                    o.logError)(e)
                                }
                                )),
                                !1
                        }
                        return function(e) {
                            return void 0 === (0,
                            n.A)(e, "mediaTypes.native") || e.nativeOrtbRequest && Array.isArray(e.nativeOrtbRequest.assets) && e.nativeOrtbRequest.assets.length > 0
                        }(e)
                    },
                    resetSiteID: function() {
                        P = 0
                    },
                    buildRequests: function(e, t) {
                        const i = []
                          , r = {}
                          , a = {}
                          , d = {}
                          , p = {};
                        E.getFeatureToggles(),
                        e.forEach((e => {
                            const i = Object.keys((0,
                            n.A)(e, "mediaTypes", {}));
                            for (const n in i)
                                switch (i[n]) {
                                case s.D4:
                                    K(e, p, r, t);
                                    break;
                                case s.G_:
                                    Z(e, a);
                                    break;
                                case s.s6:
                                    Y(e, d);
                                    break;
                                default:
                                    (0,
                                    o.logWarn)(`IX Bid Adapter: ad unit mediaTypes ${n} is not supported`)
                                }
                        }
                        ));
                        for (let t in p)
                            if (p.hasOwnProperty(t)) {
                                let i = p[t].missingSizes;
                                r.hasOwnProperty(t) || (r[t] = {}),
                                r[t].hasOwnProperty("missingImps") || (r[t].missingImps = [],
                                r[t].missingCount = 0);
                                let n = p[t].impression;
                                for (let o = 0; o < i.length; o++) {
                                    let a = ee(e[0], n, i[o]);
                                    r[t].missingImps.push(a),
                                    r[t].missingCount++
                                }
                            }
                        let l = [];
                        return Object.keys(r).length > 0 && l.push(r),
                        Object.keys(a).length > 0 && l.push(a),
                        Object.keys(d).length > 0 && l.push(d),
                        E.isFeatureEnabled("pbjs_enable_multiformat") ? i.push(...N(e, t, function(e) {
                            const t = {};
                            return e.forEach((e => {
                                Object.keys(e).forEach((i => {
                                    Object.keys(t).includes(i) ? t[i].hasOwnProperty("ixImps") && e[i].hasOwnProperty("ixImps") ? t[i].ixImps = [...t[i].ixImps, ...e[i].ixImps] : t[i].hasOwnProperty("missingImps") && e[i].hasOwnProperty("missingImps") ? t[i].missingImps = [...t[i].missingImps, ...e[i].missingImps] : e[i].hasOwnProperty("ixImps") ? t[i].ixImps = e[i].ixImps : e[i].hasOwnProperty("missingImps") && (t[i].missingImps = e[i].missingImps) : t[i] = e[i]
                                }
                                ))
                            }
                            )),
                            t
                        }(l))) : (Object.keys(r).length > 0 && i.push(...N(e, t, r)),
                        Object.keys(a).length > 0 && i.push(...N(e, t, a)),
                        Object.keys(d).length > 0 && i.push(...N(e, t, d))),
                        i
                    },
                    interpretResponse: function(e, t) {
                        const i = [];
                        let r = null
                          , a = (0,
                        n.A)(e, "body.ext.protectedAudienceAuctionConfigs") || [];
                        if (E.setFeatureToggles(e),
                        !e.hasOwnProperty("body"))
                            return i;
                        const d = e.body
                          , p = d.seatbid || [];
                        for (let e = 0; e < p.length; e++) {
                            if (!p[e].hasOwnProperty("bid"))
                                continue;
                            const a = p[e].bid
                              , l = t.data;
                            for (let e = 0; e < a.length; e++) {
                                const o = X(a[e].impid, l.imp, t.validBidRequests);
                                if (r = F(a[e], d.cur, o),
                                r.mediaType === s.G_ && re(o)) {
                                    const t = (0,
                                    n.A)(d, "ext.videoplayerurl");
                                    if (r.renderer = ie(a[e].bidId, t),
                                    !r.renderer)
                                        continue
                                }
                                i.push(r)
                            }
                            if ((0,
                            n.A)(l, "ext.ixdiag.err") && S.localStorageIsEnabled())
                                try {
                                    S.removeDataFromLocalStorage("ixdiag")
                                } catch (e) {
                                    (0,
                                    o.logError)("ix can not clear ixdiag from localStorage.")
                                }
                        }
                        if (!(Array.isArray(a) && a.length > 0))
                            return i;
                        a = a.filter((e => !!function(e) {
                            return "object" == typeof e && null !== e
                        }(e) || ((0,
                        o.logWarn)("Malformed auction config detected:", e),
                        !1)));
                        try {
                            return {
                                bids: i,
                                paapi: a
                            }
                        } catch (e) {
                            return (0,
                            o.logWarn)("Error attaching AuctionConfigs", e),
                            i
                        }
                    },
                    getUserSyncs: function(e, t) {
                        const i = [];
                        let r = null;
                        if (t.length > 0 && (r = (0,
                        n.A)(t[0], "body.ext.publishersyncsperbidderoverride")),
                        void 0 !== r && 0 == r)
                            return [];
                        if (e.iframeEnabled)
                            i.push({
                                type: "iframe",
                                url: "https://js-sec.indexww.com/um/ixmatch.html"
                            });
                        else {
                            let e = null;
                            d.$W.getConfig("userSync") && (e = d.$W.getConfig("userSync").syncsPerBidder),
                            0 === e && (e = r),
                            e = r && (0 === e || e) ? r > e ? e : r : 1;
                            for (let t = 0; t < e; t++)
                                i.push({
                                    type: "image",
                                    url: ae(e, t)
                                })
                        }
                        return i
                    }
                };
                function ae(e, t) {
                    let i = ""
                      , r = "0";
                    return T && T.hasOwnProperty("gdprApplies") && (r = T.gdprApplies ? "1" : "0"),
                    T && T.hasOwnProperty("consentString") && (i = T.consentString || ""),
                    "https://dsum.casalemedia.com/pbusermatch?origin=prebid" + (0 !== P ? "&site_id=" + P.toString() : "") + "&p=" + e.toString() + "&i=" + t.toString() + "&gdpr=" + r + "&gdpr_consent=" + i + "&us_privacy=" + (D || "")
                }
                function se(e) {
                    return e.imp.forEach(( (t, i) => {
                        const r = t.ext;
                        if (null == r)
                            return e;
                        pe(t) < 2 || Object.keys(r).forEach((n => {
                            if (s.D4 in t) {
                                const o = t.banner.ext;
                                if (void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].banner.ext[n],
                                void 0 !== t.banner.format)
                                    for (let o = 0; o < t.banner.format.length; o++)
                                        null != t.banner.format[o].ext && null != t.banner.format[o].ext[n] && t.banner.format[o].ext[n] == r[n] && delete e.imp[i].banner.format[o].ext[n]
                            }
                            if (s.G_ in t) {
                                const o = t.video.ext;
                                void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].video.ext[n]
                            }
                            if (s.s6 in t) {
                                const o = t.native.ext;
                                void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].native.ext[n]
                            }
                        }
                        ))
                    }
                    )),
                    e
                }
                function de(e) {
                    return e.imp.forEach(( (t, i) => {
                        if (null == t.ext)
                            return e;
                        if (!(pe(t) < 2)) {
                            if (s.D4 in t) {
                                const r = t.banner.ext;
                                if (void 0 !== r && void 0 !== r.siteID && delete e.imp[i].banner.ext.siteID,
                                void 0 !== t.banner.format)
                                    for (let r = 0; r < t.banner.format.length; r++)
                                        void 0 !== t.banner.format[r].ext && void 0 !== t.banner.format[r].ext.siteID && ((0,
                                        a.J)(e.imp[i], "ext.siteID", t.banner.format[r].ext.siteID),
                                        (0,
                                        a.J)(e, "ext.ixdiag.usid", !0),
                                        delete e.imp[i].banner.format[r].ext.siteID)
                            }
                            if (s.G_ in t) {
                                const r = t.video.ext;
                                void 0 !== r && void 0 !== r.siteID && delete e.imp[i].video.ext.siteID
                            }
                            if (s.s6 in t) {
                                const r = t.native.ext;
                                void 0 !== r && void 0 !== r.siteID && delete e.imp[i].native.ext.siteID
                            }
                        }
                    }
                    )),
                    e
                }
                function pe(e) {
                    let t = 0;
                    return void 0 !== e.banner && (t += 1),
                    void 0 !== e.video && (t += 1),
                    void 0 !== e.native && (t += 1),
                    t
                }
                function le(e) {
                    return null == e.device && (e.device = {}),
                    e.device.h = window.screen.height,
                    e.device.w = window.screen.width,
                    e
                }
                (0,
                c.a$)(oe),
                (0,
                r.E)("ixBidAdapter")
            }
        }, e => {
            e.O(0, [33005, 60802, 37769, 12139, 51085], ( () => {
                return t = 77764,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[61665], {
            62349: (t, e, a) => {
                var r = a(7873)
                  , n = a(57377)
                  , i = a(71371)
                  , c = a(12938)
                  , o = a(42986);
                const s = "kueezrtb"
                  , x = "1.0.0"
                  , u = (0,
                c.vM)({
                    bidderCode: s
                })
                  , d = {
                    code: s,
                    version: x,
                    gvlid: 1165,
                    supportedMediaTypes: [i.D4, i.G_],
                    isBidRequestValid: o.$d,
                    buildRequests: (0,
                    o.lE)((function() {
                        return `https://${arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "exchange"}.kueezrtb.com`
                    }
                    ), (function(t, e) {
                        const {auctionId: a, transactionId: r} = e
                          , n = function() {
                            if (!u.hasLocalStorage())
                                return;
                            let t = (0,
                            o.pT)(u.getDataFromLocalStorage("_iiq_fdata"));
                            t || (t = d.createFirstPartyData(),
                            u.setDataInLocalStorage("_iiq_fdata", JSON.stringify(t)));
                            return t
                        }();
                        return {
                            auctionId: a,
                            transactionId: r,
                            ...n && {
                                iiqpcid: n.pcid,
                                iiqpcidDate: n.pcidDate
                            }
                        }
                    }
                    ), u, s, x, !1),
                    interpretResponse: (0,
                    o.Lp)(s, !1),
                    getUserSyncs: (0,
                    o.EE)({
                        iframeSyncUrl: "https://sync.kueezrtb.com/api/sync/iframe",
                        imageSyncUrl: "https://sync.kueezrtb.com/api/sync/image"
                    }),
                    createFirstPartyData: function() {
                        return {
                            pcid: p(),
                            pcidDate: Date.now()
                        }
                    }
                };
                function p() {
                    let t = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        const a = (t + 16 * Math.random()) % 16 | 0;
                        return t = Math.floor(t / 16),
                        ("x" === e ? a : 3 & a | 8).toString(16)
                    }
                    ))
                }
                (0,
                n.a$)(d),
                (0,
                r.E)("kueezRtbBidAdapter")
            }
        }, t => {
            t.O(0, [44982, 85946, 60802, 37769, 12139, 51085], ( () => {
                return e = 62349,
                t(t.s = e);
                var e
            }
            ));
            t.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[52787], {
            73853: (a, e, t) => {
                var i = t(7873)
                  , r = t(91069)
                  , m = t(57377);
                const n = {
                    ...(0,
                    t(37668).B2)("https://hb.minutemedia-prebid.com/", {
                        PRODUCTION: "hb-mm-multi",
                        TEST: "hb-multi-mm-test"
                    }),
                    code: "minutemedia",
                    gvlid: 918,
                    isBidRequestValid: function(a) {
                        return a.params ? !!a.params.org || ((0,
                        r.logWarn)("org is a mandatory param for MinuteMedia adapter"),
                        !1) : ((0,
                        r.logWarn)("no params have been set to MinuteMedia adapter"),
                        !1)
                    }
                };
                (0,
                m.a$)(n),
                (0,
                i.E)("minutemediaBidAdapter")
            }
        }, a => {
            a.O(0, [12183, 60802, 37769, 12139, 51085], ( () => {
                return e = 73853,
                a(a.s = e);
                var e
            }
            ));
            a.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[32149], {
            61725: (e, t, n) => {
                var i = n(7873)
                  , r = n(71371)
                  , s = n(63895)
                  , o = n(95789)
                  , a = n(15901)
                  , d = n(12938)
                  , p = n(57377)
                  , c = n(91069)
                  , l = n(70433)
                  , u = n(34278)
                  , f = n(12449);
                const g = "https://onetag-sys.com/usync/"
                  , m = "onetag"
                  , y = "Ad"
                  , h = (0,
                d.vM)({
                    bidderCode: m
                });
                function v(e) {
                    return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video
                }
                function b(e, t) {
                    if (e === r.D4)
                        return U(t).length > 0;
                    if (e === r.G_ && v(t)) {
                        const e = t.mediaTypes.video.context;
                        if ("outstream" === e || "instream" === e)
                            return O(t).length > 0
                    } else if (e === r.s6) {
                        if ("object" != typeof t.mediaTypes.native || null === t.mediaTypes.native)
                            return !1;
                        if (!S(t)) {
                            if (void 0 === t.nativeParams)
                                return !1;
                            const e = (0,
                            f.rn)(t.nativeParams);
                            return e && e.assets && Array.isArray(e.assets) && e.assets.length > 0 && e.assets.every((e => I(e)))
                        }
                        let e = !1
                          , n = !1;
                        const i = t.mediaTypes.native?.ortb?.assets
                          , r = t.mediaTypes.native?.ortb?.eventtrackers;
                        return i && Array.isArray(i) && i.length > 0 && i.every((e => I(e))) && (e = !0),
                        r && Array.isArray(r) && r.length > 0 ? r.every((e => T(e))) && (n = !0) : r || (n = !0),
                        e && n
                    }
                    return !1
                }
                const T = function(e) {
                    return !(!(e.event && e.methods && Number.isInteger(e.event) && Array.isArray(e.methods)) || !e.methods.length > 0)
                }
                  , I = function(e) {
                    if (!e.hasOwnProperty("id") || !Number.isInteger(e.id))
                        return !1;
                    return !!(e.title || e.img || e.data || e.video) && (!!(!e.title || e.title.len && Number.isInteger(e.title.len)) && (!!(!e.data || e.data.type && Number.isInteger(e.data.type)) && !(e.video && !(e.video.mimes && e.video.minduration && e.video.maxduration && e.video.protocols))))
                };
                function A(e) {
                    try {
                        return void 0 !== e.document.hidden ? e.document.hidden : void 0 !== e.document.msHidden ? e.document.msHidden : void 0 !== e.document.webkitHidden ? e.document.webkitHidden : null
                    } catch (e) {
                        return null
                    }
                }
                function C(e) {
                    const t = (0,
                    c.getWinDimensions)()
                      , n = function() {
                        let e = window
                          , t = window.parent;
                        try {
                            for (; e !== e.parent; )
                                t = e.parent,
                                t.location.href,
                                e = e.parent
                        } catch (e) {}
                        return e
                    }();
                    return {
                        location: (0,
                        l.A)(e, "refererInfo.page", null),
                        referrer: (0,
                        l.A)(e, "refererInfo.ref", null),
                        stack: (0,
                        l.A)(e, "refererInfo.stack", []),
                        numIframes: (0,
                        l.A)(e, "refererInfo.numIframes", 0),
                        wWidth: (0,
                        c.getWinDimensions)().innerWidth,
                        wHeight: (0,
                        c.getWinDimensions)().innerHeight,
                        oWidth: t.outerWidth,
                        oHeight: t.outerHeight,
                        sWidth: t.screen.width,
                        sHeight: t.screen.height,
                        aWidth: t.screen.availWidth,
                        aHeight: t.screen.availHeight,
                        sLeft: "screenLeft"in n ? n.screenLeft : n.screenX,
                        sTop: "screenTop"in n ? n.screenTop : n.screenY,
                        xOffset: n.pageXOffset,
                        yOffset: n.pageYOffset,
                        docHidden: A(n),
                        docHeight: n.document.body ? n.document.body.scrollHeight : null,
                        hLength: history.length,
                        timing: E(),
                        version: {
                            prebid: "9.44.1",
                            adapter: "1.1.3"
                        }
                    }
                }
                function w(e) {
                    const t = e.filter((e => v(e))).map((e => {
                        const t = {};
                        return z.call(t, e),
                        t.context = e.mediaTypes.video.context,
                        t.playerSize = O(e),
                        t.mediaTypeInfo = (0,
                        c.deepClone)(e.mediaTypes.video),
                        t.type = r.G_,
                        t.priceFloors = D(e, r.G_, t.playerSize),
                        t
                    }
                    ))
                      , n = e.filter((e => b(r.D4, e))).map((e => {
                        const t = {};
                        return z.call(t, e),
                        t.sizes = U(e),
                        t.type = r.D4,
                        t.mediaTypeInfo = (0,
                        c.deepClone)(e.mediaTypes.banner),
                        t.priceFloors = D(e, r.D4, t.sizes),
                        t
                    }
                    ))
                      , i = e.filter((e => b(r.s6, e))).map((e => {
                        const t = {};
                        if (z.call(t, e),
                        t.sizes = U(e),
                        t.type = r.s6 + y,
                        t.mediaTypeInfo = (0,
                        c.deepClone)(e.mediaTypes.native),
                        !S(e)) {
                            const n = (0,
                            f.rn)(e.nativeParams);
                            t.mediaTypeInfo = {},
                            t.mediaTypeInfo.adTemplate = e.nativeParams.adTemplate,
                            t.mediaTypeInfo.ortb = n
                        }
                        return t.priceFloors = D(e, r.s6, t.sizes),
                        t
                    }
                    ));
                    return t.concat(n).concat(i)
                }
                function S(e) {
                    return e.mediaTypes.native.ortb && "object" == typeof e.mediaTypes.native.ortb
                }
                function z(e) {
                    const t = e.params;
                    this.adUnitCode = e.adUnitCode,
                    this.bidId = e.bidId,
                    this.bidderRequestId = e.bidderRequestId,
                    this.auctionId = (0,
                    l.A)(e, "ortb2.source.tid"),
                    this.transactionId = (0,
                    l.A)(e, "ortb2Imp.ext.tid"),
                    this.gpid = (0,
                    l.A)(e, "ortb2Imp.ext.gpid") || (0,
                    l.A)(e, "ortb2Imp.ext.data.pbadslot"),
                    this.pubId = t.pubId,
                    this.ext = t.ext,
                    this.ortb2Imp = (0,
                    l.A)(e, "ortb2Imp"),
                    t.pubClick && (this.click = t.pubClick),
                    t.dealId && (this.dealId = t.dealId);
                    const n = function(e) {
                        const t = document.getElementById(e);
                        try {
                            const {top: e, left: n, width: i, height: r} = (0,
                            u.G)(t);
                            let s = t.ownerDocument.defaultView;
                            const o = {
                                top: e + s.pageYOffset,
                                left: n + s.pageXOffset,
                                width: i,
                                height: r
                            };
                            let a = s.frameElement;
                            for (; null != a; ) {
                                const {top: e, left: t} = (0,
                                u.G)(a);
                                o.top += e + s.pageYOffset,
                                o.left += t + s.pageXOffset,
                                s = s.parent,
                                a = s.frameElement
                            }
                            return o
                        } catch (e) {
                            return null
                        }
                    }(e.adUnitCode);
                    n && (this.coords = n)
                }
                function E() {
                    try {
                        if (null != window.performance && null != window.performance.timing) {
                            const e = {}
                              , t = window.performance.timing;
                            return e.pageLoadTime = t.loadEventEnd - t.navigationStart,
                            e.connectTime = t.responseEnd - t.requestStart,
                            e.renderTime = t.domComplete - t.domLoading,
                            e
                        }
                    } catch (e) {
                        return null
                    }
                    return null
                }
                function O(e) {
                    const t = e.mediaTypes.video.playerSize;
                    return void 0 !== t && Array.isArray(t) && t.length > 0 ? H(t) : []
                }
                function U(e) {
                    if (void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.banner && void 0 !== e.mediaTypes.banner.sizes && Array.isArray(e.mediaTypes.banner.sizes) && e.mediaTypes.banner.sizes.length > 0)
                        return H(e.mediaTypes.banner.sizes);
                    return !v(e) && e.sizes && Array.isArray(e.sizes) ? H(e.sizes) : []
                }
                function H(e) {
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n];
                        t.push({
                            width: i[0],
                            height: i[1]
                        })
                    }
                    return t
                }
                function D(e, t, n) {
                    if ("function" != typeof e.getFloor)
                        return [];
                    const i = n => {
                        const i = e.getFloor({
                            currency: "EUR",
                            mediaType: t || "*",
                            size: n || "*"
                        }) || {};
                        return {
                            ...i,
                            size: n ? (0,
                            c.deepClone)(n) : void 0,
                            floor: null != i.floor ? i.floor : null
                        }
                    }
                    ;
                    return Array.isArray(n) && n.length > 0 ? n.map((e => i([e.width, e.height]))) : [i("*")]
                }
                const k = {
                    code: m,
                    gvlid: 241,
                    supportedMediaTypes: [r.D4, r.G_, r.s6],
                    isBidRequestValid: function(e) {
                        return void 0 !== e && void 0 !== e.params && "string" == typeof e.params.pubId && (b(r.D4, e) || b(r.G_, e) || b(r.s6, e))
                    },
                    buildRequests: function(e, t) {
                        const n = {
                            bids: w(e),
                            ...C(t)
                        };
                        t && t.gdprConsent && (n.gdprConsent = {
                            consentString: t.gdprConsent.consentString,
                            consentRequired: t.gdprConsent.gdprApplies,
                            addtlConsent: t.gdprConsent.addtlConsent
                        }),
                        t && t.gppConsent && (n.gppConsent = {
                            consentString: t.gppConsent.gppString,
                            applicableSections: t.gppConsent.applicableSections
                        }),
                        t && t.uspConsent && (n.usPrivacy = t.uspConsent),
                        t && t.ortb2 && (n.ortb2 = t.ortb2),
                        e && 0 !== e.length && e[0].userIdAsEids && (n.userId = e[0].userIdAsEids),
                        e && 0 !== e.length && e[0].schain && function(e) {
                            let t = !1;
                            const n = ["asi", "sid", "hp"];
                            if (!e || !e.nodes)
                                return t;
                            t = e.nodes.reduce(( (e, t) => e ? n.every((e => t.hasOwnProperty(e))) : e), !0),
                            t || (0,
                            c.logError)("OneTag: required schain params missing");
                            return t
                        }(e[0].schain) && (n.schain = e[0].schain);
                        try {
                            h.hasLocalStorage() && (n.onetagSid = h.getDataFromLocalStorage("onetag_sid"))
                        } catch (e) {}
                        const i = navigator.connection || navigator.webkitConnection;
                        return n.networkConnectionType = i && i.type ? i.type : null,
                        n.networkEffectiveConnectionType = i && i.effectiveType ? i.effectiveType : null,
                        n.fledgeEnabled = Boolean(t?.paapi?.enabled),
                        {
                            method: "POST",
                            url: "https://onetag-sys.com/prebid-request",
                            data: JSON.stringify(n)
                        }
                    },
                    interpretResponse: function(e, t) {
                        const n = e.body
                          , i = []
                          , d = JSON.parse(t.data);
                        if (!n || n.nobid && !0 === n.nobid)
                            return i;
                        if (!(n.fledgeAuctionConfigs || n.bids && Array.isArray(n.bids) && 0 !== n.bids.length))
                            return i;
                        if (Array.isArray(n.bids) && n.bids.forEach((e => {
                            const t = {
                                requestId: e.requestId,
                                cpm: e.cpm,
                                width: e.width,
                                height: e.height,
                                creativeId: e.creativeId,
                                dealId: null == e.dealId ? e.dealId : "",
                                currency: e.currency,
                                netRevenue: e.netRevenue || !1,
                                mediaType: e.mediaType === r.s6 + y ? r.s6 : e.mediaType,
                                meta: {
                                    mediaType: e.mediaType,
                                    advertiserDomains: e.adomain
                                },
                                ttl: e.ttl || 300
                            };
                            if (e.dsa && (t.meta.dsa = e.dsa),
                            e.mediaType === r.D4)
                                t.ad = e.ad;
                            else if (e.mediaType === r.G_) {
                                const {context: n, adUnitCode: i} = (0,
                                a.I6)(d.bids, (t => t.bidId === e.requestId && t.type === r.G_));
                                n === s.mn ? (t.vastUrl = e.vastUrl,
                                t.videoCacheKey = e.videoCacheKey) : n === s.H6 && (t.vastXml = e.ad,
                                t.vastUrl = e.vastUrl,
                                e.rendererUrl && (t.renderer = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    const n = o.A4.install({
                                        id: e.requestId,
                                        url: e.rendererUrl,
                                        config: t,
                                        adUnitCode: e.adUnitCode,
                                        loaded: !1
                                    });
                                    try {
                                        n.setRender((t => {
                                            let {renderer: n, width: i, height: r, vastXml: s, adUnitCode: o} = t;
                                            n.push(( () => {
                                                window.onetag.Player.init({
                                                    ...e,
                                                    width: i,
                                                    height: r,
                                                    vastXml: s,
                                                    nodeId: o,
                                                    config: n.getConfig()
                                                })
                                            }
                                            ))
                                        }
                                        ))
                                    } catch (e) {}
                                    return n
                                }({
                                    ...e,
                                    adUnitCode: i
                                })))
                            } else
                                e.mediaType !== r.s6 && e.mediaType !== r.s6 + y || (t.native = e.native);
                            i.push(t)
                        }
                        )),
                        n.fledgeAuctionConfigs && Array.isArray(n.fledgeAuctionConfigs)) {
                            const e = n.fledgeAuctionConfigs;
                            return {
                                bids: i,
                                paapi: e
                            }
                        }
                        return i
                    },
                    getUserSyncs: function(e, t, n, i, r) {
                        let s = []
                          , o = "";
                        return n && ("boolean" == typeof n.gdprApplies && (o += "&gdpr=" + (n.gdprApplies ? 1 : 0)),
                        "string" == typeof n.consentString && (o += "&gdpr_consent=" + n.consentString)),
                        r && "string" == typeof r.gppString && (o += "&gpp_consent=" + r.gppString),
                        i && "string" == typeof i && (o += "&us_privacy=" + i),
                        e.iframeEnabled && s.push({
                            type: "iframe",
                            url: g + "?cb=" + (new Date).getTime() + o
                        }),
                        e.pixelEnabled && s.push({
                            type: "image",
                            url: g + "?tag=img" + o
                        }),
                        s
                    }
                };
                (0,
                p.a$)(k),
                (0,
                i.E)("onetagBidAdapter")
            }
        }, e => {
            e.O(0, [32316, 60802, 37769, 12139, 51085], ( () => {
                return t = 61725,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[63879], {
            57257: (e, t, a) => {
                var n = a(7873)
                  , r = a(43272)
                  , s = a(57377)
                  , o = a(63172)
                  , p = a(70433)
                  , i = a(91069)
                  , d = a(71371)
                  , m = a(89766);
                const u = "https://rtb.openx.net/openrtbb/prebidjs"
                  , l = {
                    code: "openx",
                    gvlid: 69,
                    supportedMediaTypes: [d.D4, d.G_, d.s6],
                    isBidRequestValid: function(e) {
                        const t = e.params.delDomain || e.params.platform;
                        if (p.A(e, "mediaTypes.banner") && t)
                            return !!e.params.unit || p.A(e, "mediaTypes.banner.sizes.length") > 0;
                        return !(!e.params.unit || !t)
                    },
                    buildRequests: function(e, t) {
                        let a = e.filter((e => f(e)))
                          , n = e.filter((e => function(e) {
                            const t = !f(e) && !x(e);
                            return p.A(e, "mediaTypes.banner") || t
                        }(e) || x(e))).map((e => ({
                            ...e,
                            mediaTypes: {
                                ...e.mediaTypes,
                                video: void 0
                            }
                        })))
                          , r = n.length ? [b(n, t, null)] : [];
                        return a.forEach((e => {
                            r.push(b([e], t, d.G_))
                        }
                        )),
                        r
                    },
                    interpretResponse: function(e, t) {
                        e.body || (e.body = {
                            nbr: 0
                        });
                        return c.fromORTB({
                            request: t.data,
                            response: e.body
                        })
                    },
                    getUserSyncs: function(e, t, a, n) {
                        if (e.iframeEnabled || e.pixelEnabled) {
                            let r = e.iframeEnabled ? "iframe" : "image"
                              , s = []
                              , o = "https://u.openx.net/w/1.0/pd";
                            if (a && (s.push("gdpr=" + (a.gdprApplies ? 1 : 0)),
                            s.push("gdpr_consent=" + encodeURIComponent(a.consentString || ""))),
                            n && s.push("us_privacy=" + encodeURIComponent(n)),
                            t.length > 0 && t[0].body && t[0].body.ext) {
                                const e = t[0].body.ext;
                                e.delDomain ? o = `https://${e.delDomain}/w/1.0/pd` : e.platform && s.push("ph=" + e.platform)
                            } else
                                s.push("ph=2d1251ae-7f3a-47cf-bd2a-2f288854a0ba");
                            return [{
                                type: r,
                                url: `${o}${s.length > 0 ? "?" + s.join("&") : ""}`
                            }]
                        }
                    }
                };
                (0,
                s.a$)(l);
                const c = (0,
                m.A)({
                    context: {
                        netRevenue: !0,
                        ttl: 300,
                        nativeRequest: {
                            eventtrackers: [{
                                event: 1,
                                methods: [1, 2]
                            }]
                        }
                    },
                    imp(e, t, a) {
                        const n = e(t, a);
                        return (0,
                        i.mergeDeep)(n, {
                            tagid: t.params.unit,
                            ext: {
                                divid: t.adUnitCode
                            }
                        }),
                        t.params.customParams && o.J(n, "ext.customParams", t.params.customParams),
                        t.params.customFloor && !n.bidfloor && (n.bidfloor = t.params.customFloor),
                        n
                    },
                    request(e, t, a, n) {
                        const r = e(t, a, n);
                        (0,
                        i.mergeDeep)(r, {
                            at: 1,
                            ext: {
                                bc: "hb_pb_ortb_2.0",
                                pv: "9.44.1"
                            }
                        });
                        const s = n.bidRequests[0];
                        return s.params.coppa && o.J(r, "regs.coppa", 1),
                        s.params.doNotTrack && o.J(r, "device.dnt", 1),
                        s.params.platform && o.J(r, "ext.platform", s.params.platform),
                        s.params.delDomain && o.J(r, "ext.delDomain", s.params.delDomain),
                        s.params.response_template_name && o.J(r, "ext.response_template_name", s.params.response_template_name),
                        s.params.test && (r.test = 1),
                        r
                    },
                    bidResponse(e, t, a) {
                        const n = e(t, a);
                        return t.ext && (n.meta.networkId = t.ext.dsp_id,
                        n.meta.advertiserId = t.ext.buyer_id,
                        n.meta.brandId = t.ext.brand_id),
                        n
                    },
                    response(e, t, a, n) {
                        const {ortbRequest: r} = n;
                        r.ext && (r.ext.delDomain && o.J(a, "ext.delDomain", r.ext.delDomain),
                        r.ext.platform && o.J(a, "ext.platform", r.ext.platform));
                        const s = e(t, a, n);
                        let d = p.A(a, "ext.fledge_auction_configs");
                        return d ? (d = Object.entries(d).map((e => {
                            let[t,a] = e;
                            return {
                                bidId: t,
                                config: (0,
                                i.mergeDeep)(Object.assign({}, a), {
                                    auctionSignals: {
                                        ortb2Imp: n.impContext[t]?.imp
                                    }
                                })
                            }
                        }
                        )),
                        {
                            bids: s.bids,
                            paapi: d
                        }) : s
                    },
                    overrides: {
                        imp: {
                            bidfloor(e, t, a, n) {
                                const r = {};
                                e(r, a, {
                                    ...n,
                                    currency: "USD"
                                }),
                                "USD" === r.bidfloorcur && Object.assign(t, r)
                            },
                            video(e, t, a, n) {
                                {
                                    let r = a.mediaTypes[d.G_];
                                    r && (r = Object.assign({}, r, a.params.video),
                                    a = {
                                        ...a,
                                        mediaTypes: {
                                            [d.G_]: r
                                        }
                                    }),
                                    e(t, a, n)
                                }
                            }
                        }
                    }
                });
                function b(e, t, a) {
                    return {
                        method: "POST",
                        url: r.$W.getConfig("openxOrtbUrl") || u,
                        data: c.toORTB({
                            bidRequests: e,
                            bidderRequest: t,
                            context: {
                                mediaType: a
                            }
                        })
                    }
                }
                function f(e) {
                    return p.A(e, "mediaTypes.video")
                }
                function x(e) {
                    return p.A(e, "mediaTypes.native")
                }
                (0,
                n.E)("openxBidAdapter")
            }
        }, e => {
            e.O(0, [60802, 58498, 37769, 12139, 51085], ( () => {
                return t = 57257,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[41252], {
            63990: (e, t, r) => {
                var i = r(7873)
                  , n = r(91069)
                  , o = r(70433)
                  , a = r(63172)
                  , s = r(57377)
                  , d = r(71371)
                  , l = r(43272)
                  , p = r(95789)
                  , c = r(12693)
                  , u = r(89766)
                  , m = r(78969);
                const g = "PubMatic: "
                  , f = void 0
                  , b = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js")
                  , h = Object.values(m.h0)
                  , y = {
                    kadpageurl: "",
                    gender: "",
                    yob: "",
                    lat: "",
                    lon: "",
                    wiid: ""
                }
                  , v = {
                    1: "PMP",
                    5: "PREF",
                    6: "PMPG"
                }
                  , w = {
                    banner: 360,
                    video: 1800,
                    native: 1800
                };
                let x, I = {}, C = [], $ = [], _ = 0;
                const R = (0,
                u.A)({
                    context: {
                        netRevenue: !0,
                        ttl: 360
                    },
                    imp(e, t, r) {
                        const {kadfloor: i, currency: n, adSlot: o="", deals: a, dctr: s, pmzoneid: d, hashedKey: l} = t.params
                          , {adUnitCode: p, mediaTypes: c, rtd: u} = t
                          , m = e(t, r);
                        return a && W(m, a),
                        s && P(m, s),
                        u?.jwplayer && k(m, u.jwplayer),
                        m.bidfloor = X("kadfloor", i),
                        m.bidfloorcur = n ? X("currency", n) : "USD",
                        A(m, t),
                        m.hasOwnProperty("banner") && S(m.banner, o),
                        m.hasOwnProperty("video") && T(m.video, c?.video, p, m),
                        m.hasOwnProperty("native") && U(m, c?.native),
                        m.hasOwnProperty("banner") || m.hasOwnProperty("video") || m.hasOwnProperty("native") ? (d && (m.ext.pmZoneId = d),
                        E(m, o.trim(), l),
                        O(m),
                        ["banner", "video", "native"].forEach((e => {
                            m[e]?.battr && !Array.isArray(m[e].battr) && delete m[e].battr
                        }
                        )),
                        m) : null
                    },
                    request(e, t, r, i) {
                        const n = e(t, r, i);
                        if (C.length || n.bcat) {
                            const e = G([...C || [], ...n.bcat || []]);
                            e.length && (n.bcat = e)
                        }
                        if ($.length || n.acat) {
                            const e = F([...$ || [], ...n.acat || []]);
                            e.length && (n.acat = e)
                        }
                        N(n),
                        M(n, i?.bidRequests),
                        B(n);
                        return (r?.bidderCode ? c.u.get(r.bidderCode, "allowAlternateBidderCodes") : void 0) && q(n, r),
                        n
                    },
                    bidResponse(e, t, r) {
                        const i = e(t, r);
                        i.meta && (i.meta.mediaType = i.mediaType),
                        z(i, t, r);
                        const {mediaType: o, playerWidth: a, playerHeight: s} = i
                          , {params: l, adUnitCode: p, mediaTypes: c} = r?.bidRequest;
                        if (o === d.G_) {
                            i.width || (i.width = a),
                            i.height || (i.height = s);
                            const {context: e, maxduration: t} = c[o];
                            "outstream" === e && l.outstreamAU && p && (i.rendererCode = l.outstreamAU,
                            i.renderer = L.newRenderer(i.rendererCode, p)),
                            D(i, e, t)
                        }
                        if (o === d.s6 && t.adm) {
                            try {
                                const e = JSON.parse(t.adm.replace(/\\/g, ""));
                                i.native = {
                                    ortb: {
                                        ...e.native
                                    }
                                }
                            } catch (e) {
                                return void (0,
                                n.logWarn)(`${g}Error: Cannot parse native response for ad response: ${t.adm}`)
                            }
                            i.width = t.w || 0,
                            i.height = t.h || 0
                        }
                        return i
                    },
                    response: (e, t, r, i) => e(t, r, i),
                    overrides: {
                        imp: {
                            bidfloor: !1,
                            extBidfloor: !1
                        },
                        bidResponse: {
                            native: !1
                        }
                    }
                });
                const j = e => {
                    const t = {};
                    if (e.aspect_ratios && (0,
                    n.isArray)(e.aspect_ratios) && e.aspect_ratios.length) {
                        const {min_width: r, min_height: i} = e.aspect_ratios[0];
                        (0,
                        n.isInteger)(r) && (0,
                        n.isInteger)(i) && (t.wmin = r,
                        t.hmin = i),
                        t.ext = {
                            aspectratios: e.aspect_ratios.filter((e => {
                                let {ratio_width: t, ratio_height: r} = e;
                                return t && r
                            }
                            )).map((e => {
                                let {ratio_width: t, ratio_height: r} = e;
                                return `${t}:${r}`
                            }
                            ))
                        }
                    }
                    return t.w = e.w || e.width,
                    t.h = e.h || e.height,
                    e.sizes && 2 === e.sizes.length && (0,
                    n.isInteger)(e.sizes[0]) && (0,
                    n.isInteger)(e.sizes[1]) && (t.w = e.sizes[0],
                    t.h = e.sizes[1],
                    delete t.wmin,
                    delete t.hmin),
                    e.ext && (t.ext = e.ext),
                    e.mimes && (t.mimes = e.mimes),
                    t
                }
                  , O = e => {
                    e.displaymanager ||= "Prebid.js",
                    e.displaymanagerver ||= "9.44.1";
                    const t = e.ext?.data?.adserver?.adslot;
                    t && (e.ext.dfp_ad_unit_code = t),
                    e.ext?.data && 0 === Object.keys(e.ext.data).length && delete e.ext.data
                }
                ;
                const A = (e, t) => {
                    let r = -1
                      , i = Object.keys(t.mediaTypes)
                      , o = i.length > 1;
                    "function" != typeof t.getFloor || l.$W.getConfig("pubmatic.disableFloors") || [d.D4, d.G_, d.s6].forEach((i => {
                        if (!e.hasOwnProperty(i))
                            return;
                        (("banner" === i ? e[i]?.format?.map((e => {
                            let {w: t, h: r} = e;
                            return [t, r]
                        }
                        )) : ["*"]) || ["*"]).forEach((a => {
                            const s = t.getFloor({
                                currency: e.bidfloorcur,
                                mediaType: i,
                                size: a
                            });
                            if ((0,
                            n.logInfo)(g, "floor from floor module returned for mediatype:", i, " and size:", a, " is: currency", s.currency, "floor", s.floor),
                            (0,
                            n.isPlainObject)(s) && s?.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                                const t = parseFloat(s.floor);
                                o && i !== d.D4 && ((0,
                                n.logInfo)(g, "floor from floor module returned for mediatype:", i, "is : ", t, "with currency :", e.bidfloorcur),
                                e[i].ext = {
                                    bidfloor: t,
                                    bidfloorcur: e.bidfloorcur
                                }),
                                (0,
                                n.logInfo)(g, "floor from floor module:", t, "previous floor value", r, "Min:", Math.min(t, r)),
                                r = -1 === r ? t : Math.min(t, r),
                                (0,
                                n.logInfo)(g, "new floor value:", r)
                            }
                        }
                        )),
                        o && i === d.D4 && (e[i].ext = {
                            bidfloor: r,
                            bidfloorcur: e.bidfloorcur
                        })
                    }
                    )),
                    e.bidfloor && ((0,
                    n.logInfo)(g, "Comparing floors:", "from floor module:", r, "impObj.bidfloor:", e.bidfloor, "Max:", Math.max(r, e.bidfloor)),
                    r = Math.max(r, e.bidfloor)),
                    e.bidfloor = r > 0 ? r : f,
                    (0,
                    n.logInfo)(g, "Updated imp.bidfloor:", e.bidfloor),
                    o && function(e, t) {
                        t.forEach((t => {
                            e[t]?.ext && e[t].ext.bidfloor === e.bidfloor && e[t].ext.bidfloorcur === e.bidfloorcur && delete e[t].ext
                        }
                        ))
                    }(e, i)
                }
                  , S = (e, t) => {
                    let r = t.split(":")
                      , i = r[0]?.split("@");
                    i = 2 == i?.length ? i[1].split("x") : 3 == i.length ? i[2].split("x") : [];
                    const n = e.format[0];
                    2 !== i.length || 0 == parseInt(i[0]) && 0 == parseInt(i[1]) ? (e.w = n.w,
                    e.h = n.h) : (e.w = parseInt(i[0]),
                    e.h = parseInt(i[1])),
                    e.format = e.format.filter((t => !(t.w === e.w && t.h === e.h))),
                    e.pos ??= 0
                }
                  , E = (e, t, r) => {
                    const i = t.split(":")[0].split("@");
                    e.tagid = r || i[0]
                }
                  , U = (e, t) => {
                    if (t?.ortb || (e.native.request = JSON.stringify((e => {
                        const t = {
                            ver: "1.2",
                            assets: []
                        };
                        for (let r in e) {
                            if (m._B.includes(r))
                                continue;
                            if (!m.x5.hasOwnProperty(r) && !h.includes(r)) {
                                (0,
                                n.logWarn)(`${g}: Unrecognized asset: ${r}. Ignored.`);
                                continue
                            }
                            const i = e[r]
                              , o = i.required && (0,
                            n.isBoolean)(i.required) ? 1 : 0
                              , a = {
                                id: t.assets.length,
                                required: o
                            };
                            r in m.h0 ? a.data = {
                                type: m.jO[m.h0[r]],
                                ...i.len && {
                                    len: i.len
                                },
                                ...i.ext && {
                                    ext: i.ext
                                }
                            } : "icon" === r || "image" === r ? a.img = {
                                type: "icon" === r ? m.oA.ICON : m.oA.MAIN,
                                ...j(i)
                            } : "title" === r ? a.title = {
                                len: i.len || 140,
                                ...i.ext && {
                                    ext: i.ext
                                }
                            } : "ext" === r && (a.ext = i,
                            delete a.required),
                            t.assets.push(a)
                        }
                        return t
                    }
                    )(t))),
                    t?.ortb) {
                        let t = JSON.parse(e.native.request);
                        const {assets: r} = t;
                        r?.some((e => e.title || e.img || e.data || e.video)) ? e.native.request = JSON.stringify({
                            ver: "1.2",
                            ...t
                        }) : ((0,
                        n.logWarn)(`${g}: Native assets object is empty or contains invalid objects`),
                        delete e.native)
                    }
                }
                  , T = (e, t, r, i) => {
                    (0,
                    o.A)(t, "plcmt") || (0,
                    n.logWarn)("Video.plcmt param missing for " + r),
                    t && (e.w || e.h) || (delete i.video,
                    (0,
                    n.logWarn)(`${g}Error: Missing ${t ? "video size params (playersize or w&h)" : "video config params"} for adunit: ${r} with mediaType set as video. Ignoring video impression in the adunit.`))
                }
                  , k = (e, t) => {
                    const r = t?.targeting;
                    if (!r || !r.segments?.length)
                        return;
                    const i = `${`jw-id=${r.content.id}`}|${r.segments.map((e => `jw-${e}=1`)).join("|")}`;
                    e.ext = e.ext || {},
                    e.ext.key_val = e.ext.key_val ? `${e.ext.key_val}|${i}` : i
                }
                  , P = (e, t) => {
                    if ((0,
                    n.isStr)(t) && t.length > 0) {
                        const r = t.split("|").filter((e => e.trim().length > 0));
                        t = r.map((e => e.trim())).join("|"),
                        e.ext.key_val = t
                    } else
                        (0,
                        n.logWarn)(g + "Ignoring param : dctr with value : " + t + ", expects string-value, found empty or non-string value")
                }
                  , W = (e, t) => {
                    (0,
                    n.isArray)(t) ? t.forEach((t => {
                        "string" == typeof t && t.length > 3 ? (e.pmp || (e.pmp = {
                            private_auction: 0,
                            deals: []
                        }),
                        e.pmp.deals.push({
                            id: t
                        })) : (0,
                        n.logWarn)(`${g}Error: deal-id present in array bid.params.deals should be a string with more than 3 characters length, deal-id ignored: ${t}`)
                    }
                    )) : (0,
                    n.logWarn)(`${g}Error: bid.params.deals should be an array of strings.`)
                }
                  , q = (e, t) => {
                    const r = ["all"];
                    let i = c.u.get(t.bidderCode, "allowedAlternateBidderCodes");
                    const o = (0,
                    n.isArray)(i) ? i.map((e => e.trim().toLowerCase())).filter(n.uniques) : r;
                    e.ext.marketplace = {
                        allowedbidders: o.includes("*") || o.includes("all") ? r : [...new Set(["pubmatic", ...o.filter((e => e && e.trim()))])]
                    }
                }
                  , N = e => {
                    (0,
                    a.J)(e, "at", 1),
                    (0,
                    a.J)(e, "cur", ["USD"]),
                    e.test = window.location.href.includes("pubmaticTest=true") ? 1 : void 0,
                    e.source && !Object.keys(e.source).length && delete e.source,
                    e.app?.publisher && (e.app.publisher.id = _)
                }
                  , M = (e, t) => {
                    const {gender: r, yob: i, pubId: n, refURL: a, kadpageurl: s} = I
                      , {user: d} = e;
                    e.device && Object.assign(e.device, {
                        js: 1,
                        connectiontype: J()
                    }),
                    e.user = {
                        ...e.user,
                        gender: d?.gender || r?.trim() || f,
                        yob: d?.yob || X("yob", i)
                    };
                    const l = (0,
                    o.A)(t, "0.userIdAsEids");
                    t.length && l?.length && !e.user.ext?.eids && (e.user.ext = e.user.ext || {},
                    e.user.ext.eids = l),
                    e.site?.publisher && (e.site.ref = e.site.ref || a,
                    e.site.publisher.id = n?.trim()),
                    e.site?.page && s && (e.site.page = s.trim()),
                    e.device.geo && !e.user.geo ? e.user.geo = e.device.geo : e.user.geo && !e.device.geo && (e.device.geo = e.user.geo)
                }
                  , z = (e, t, r) => {
                    const {ortbRequest: i, seatbid: n} = r;
                    if (e.referrer = i.site?.ref || "",
                    e.sspID = e.partnerImpId = t.id || "",
                    e.ad = t.adm,
                    e.pm_dspid = t.ext?.dspid ? t.ext.dspid : null,
                    e.pm_seat = n.seat,
                    e.creativeId || (e.creativeId = t.id),
                    360 == e.ttl && (e.ttl = w[e.mediaType]),
                    t.dealid && (e.dealChannel = t.ext?.deal_channel ? v[t.ext.deal_channel] || null : "PMP"),
                    n.ext?.buyid && (e.adserverTargeting = {
                        hb_buyid_pubmatic: n.ext.buyid
                    }),
                    t.ext?.marketplace && (e.bidderCode = t.ext.marketplace),
                    t.ext) {
                        const {dspid: r, dchain: i, dsa: n, ibv: o} = t.ext;
                        r && (e.meta.networkId = e.meta.demandSource = r),
                        i && (e.meta.dchain = i),
                        n && Object.keys(n).length && (e.meta.dsa = n),
                        o && (e.ext = e.ext || {},
                        e.ext.ibv = o,
                        e.meta.mediaType = d.G_)
                    }
                    const o = n.seat || t.ext?.advid;
                    o && (e.meta.advertiserId = e.meta.agencyId = e.meta.buyerId = o),
                    V(t.adomain) && (e.meta.clickUrl = e.meta.brandId = t.adomain[0])
                }
                  , B = e => {
                    const {profId: t, verId: r, wiid: i, transactionId: n} = I;
                    e.ext = {
                        epoch: (new Date).getTime(),
                        wrapper: {
                            profile: t ? parseInt(t) : void 0,
                            version: r ? parseInt(r) : void 0,
                            wiid: i,
                            wv: "prebid_prebid_9.44.1",
                            transactionId: n,
                            wp: "pbjs"
                        },
                        cpmAdjustment: x
                    }
                }
                  , D = (e, t, r) => {
                    if (!e?.ext?.prebiddealpriority)
                        return;
                    if (t != d.LM)
                        return;
                    const i = e?.ext?.video?.duration || r;
                    e.video = {
                        context: d.LM,
                        durationSeconds: i,
                        dealTier: e.ext.prebiddealpriority
                    }
                }
                  , F = e => [...new Set(e.filter((e => {
                    if ("string" == typeof e)
                        return !0;
                    (0,
                    n.logWarn)(g + "acat: Each category should be a string, ignoring category: " + e)
                }
                )).map((e => e.trim())))]
                  , G = e => {
                    const t = (e = e.map((e => "string" == typeof e ? e.trim() : e))).filter((e => "string" != typeof e || e.length < 3));
                    return (0,
                    n.logWarn)(g + "bcat: Each category must be a string with a length greater than 3, ignoring " + t),
                    [...new Set(e.filter((e => "string" == typeof e && e.length >= 3)))]
                }
                  , J = () => {
                    let e = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection);
                    return {
                        ethernet: 1,
                        wifi: 2,
                        "slow-2g": 4,
                        "2g": 4,
                        "3g": 5,
                        "4g": 6
                    }[e?.effectiveType] || 0
                }
                  , L = {
                    bootstrapPlayer: function(e) {
                        const t = {
                            code: e.adUnitCode,
                            vastXml: e.vastXml || null,
                            vastUrl: e.vastUrl || null
                        };
                        if (!t.vastXml && !t.vastUrl)
                            return void (0,
                            n.logWarn)(`${g}: No vastXml or vastUrl on bid, bailing...`);
                        const r = L.getRendererId("pubmatic", e.rendererCode)
                          , i = document.getElementById(e.adUnitCode)
                          , o = window.bluebillywig.renderers.find((e => e._id === r));
                        o ? o.bootstrap(t, i) : (0,
                        n.logWarn)(`${g}: Couldn't find a renderer with ${r}`)
                    },
                    newRenderer: function(e, t) {
                        const r = b.replace("$RENDERER", e)
                          , i = p.A4.install({
                            url: r,
                            loaded: !1,
                            adUnitCode: t
                        });
                        try {
                            i.setRender(L.outstreamRender)
                        } catch (e) {
                            (0,
                            n.logWarn)(`${g}: Error tying to setRender on renderer`, e)
                        }
                        return i
                    },
                    outstreamRender: function(e) {
                        e.renderer.push(( () => L.bootstrapPlayer(e)))
                    },
                    getRendererId: function(e, t) {
                        return `${e}-${t}`
                    }
                };
                function X(e, t) {
                    if (!(0,
                    n.isStr)(t))
                        return t && (0,
                        n.logWarn)(g + "Ignoring param key: " + e + ", expects string-value, found " + typeof t),
                        f;
                    const r = {
                        pmzoneid: () => t.split(",").slice(0, 50).map((e => e.trim())).join(),
                        kadfloor: () => parseFloat(t),
                        lat: () => parseFloat(t),
                        lon: () => parseFloat(t),
                        yob: () => parseInt(t)
                    };
                    return r[e]?.() || t
                }
                function V(e) {
                    return !0 === (0,
                    n.isArray)(e) && e.length > 0
                }
                const H = {
                    code: "pubmatic",
                    gvlid: 76,
                    supportedMediaTypes: [d.D4, d.G_, d.s6],
                    isBidRequestValid: e => {
                        if (!e || !e.params)
                            return !1;
                        const {publisherId: t} = e.params
                          , r = e.mediaTypes || {}
                          , i = r[d.G_] || {};
                        if (!(0,
                        n.isStr)(t))
                            return (0,
                            n.logWarn)(g + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)),
                            !1;
                        if (r.hasOwnProperty(d.G_)) {
                            const t = (0,
                            o.A)(e, "mediaTypes.video.mimes")
                              , a = (0,
                            o.A)(e, "params.video.mimes");
                            if (!V(t) && !V(a))
                                return (0,
                                n.logWarn)(g + "Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)),
                                !1;
                            if (!i.context)
                                return (0,
                                n.logError)(`${g}: No context specified in bid. Rejecting bid: `, e),
                                !1;
                            if ("outstream" === i.context && !(0,
                            n.isStr)(e.params.outstreamAU) && !e.renderer && !i.renderer)
                                return r.hasOwnProperty(d.D4) || r.hasOwnProperty(d.s6) ? (delete r[d.G_],
                                (0,
                                n.logWarn)(`${g}: for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: `, e),
                                !0) : ((0,
                                n.logError)(`${g}: for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: `, e),
                                !1)
                        }
                        return !0
                    }
                    ,
                    buildRequests: (e, t) => {
                        const {page: r, ref: i} = t?.refererInfo || {}
                          , {publisherId: o, profId: a, verId: s} = t?.bids?.[0]?.params || {};
                        var d;
                        _ = o?.trim() || (d = t?.bids,
                        Array.isArray(d) && d.length > 0 && d.find((e => e.params?.publisherId?.trim()))?.params.publisherId || null)?.trim();
                        const l = (0,
                        n.generateUUID)();
                        let p;
                        C = [],
                        $ = [],
                        I = {
                            pageURL: r || window.location.href,
                            refURL: i || window.document.referrer,
                            pubId: _,
                            kadpageurl: r || window.location.href,
                            profId: a,
                            verId: s
                        },
                        e.forEach((e => {
                            e.params.wiid = e.params.wiid || t.auctionId || l,
                            p = (0,
                            n.deepClone)(e),
                            ( (e, t) => {
                                Object.keys(y).forEach((r => {
                                    const i = e[r];
                                    i && ((0,
                                    n.isStr)(i) ? t[r] = i : (0,
                                    n.logWarn)(`${g}Ignoring param: ${r} with value: ${y[r]}, expects string value, found ${typeof i}`))
                                }
                                ))
                            }
                            )(p.params, I),
                            I.transactionId = p.ortb2Imp?.ext?.tid;
                            const {bcat: r, acat: i} = p.params;
                            r && (C = C.concat(r)),
                            i && ($ = $.concat(i))
                        }
                        ));
                        const c = R.toORTB({
                            validBidRequests: e,
                            bidderRequest: t
                        });
                        let u = {
                            method: "POST",
                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: c,
                            bidderRequest: t,
                            options: {
                                endpointCompression: !0
                            }
                        };
                        return c?.imp?.length ? u : null
                    }
                    ,
                    interpretResponse: (e, t) => {
                        const {bids: r} = R.fromORTB({
                            response: e.body,
                            request: t.data
                        })
                          , i = (0,
                        o.A)(e.body, "ext.fledge_auction_configs");
                        return i ? {
                            bids: r,
                            paapi: Object.entries(i).map((e => {
                                let[t,r] = e;
                                return {
                                    bidId: t,
                                    config: {
                                        auctionSignals: {},
                                        ...r
                                    }
                                }
                            }
                            ))
                        } : r
                    }
                    ,
                    getUserSyncs: (e, t, r, i, n) => {
                        let o = _;
                        r && (o += `&gdpr=${r.gdprApplies ? 1 : 0}&gdpr_consent=${encodeURIComponent(r.consentString || "")}`),
                        i && (o += `&us_privacy=${encodeURIComponent(i)}`),
                        n?.gppString && n?.applicableSections?.length && (o += `&gpp=${encodeURIComponent(n.gppString)}&gpp_sid=${encodeURIComponent(n.applicableSections.join(","))}`),
                        !0 === l.$W.getConfig("coppa") && (o += "&coppa=1");
                        const a = e.iframeEnabled ? "iframe" : "image";
                        return [{
                            type: a,
                            url: ("iframe" === a ? "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" : "https://image8.pubmatic.com/AdServer/ImgSync?p=") + o
                        }]
                    }
                    ,
                    onBidWon: e => {
                        !function(e) {
                            if (!e)
                                return;
                            const {originalCurrency: t, currency: r, cpm: i, originalCpm: o, meta: a} = e
                              , s = t !== r && (0,
                            n.isFn)(e.getCpmInNewCurrency) ? e.getCpmInNewCurrency(t) : i
                              , d = e.mediaType
                              , l = a?.mediaType;
                            x = x || {
                                currency: r,
                                originalCurrency: t,
                                adjustment: []
                            };
                            const p = {
                                cpmAdjustment: Number(((o - s) / o).toFixed(2)),
                                mediaType: d,
                                metaMediaType: l,
                                cpm: s,
                                originalCpm: o
                            }
                              , c = x?.adjustment?.findIndex((e => e?.mediaType === d && e?.metaMediaType === l));
                            -1 !== c ? x.adjustment.splice(c, 1, p) : x.adjustment.push(p)
                        }(e)
                    }
                };
                (0,
                s.a$)(H),
                (0,
                i.E)("pubmaticBidAdapter")
            }
        }, e => {
            e.O(0, [60802, 58498, 37769, 12139, 51085], ( () => {
                return t = 63990,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[53206], {
            26848: (a, r, s) => {
                var e = s(7873)
                  , n = s(91069)
                  , i = s(57377)
                  , o = s(37668)
                  , t = s(29609);
                const p = {
                    ...(0,
                    o.B2)(t.C1, t.FN),
                    code: t.nf,
                    aliases: t.rY,
                    gvlid: t.H,
                    isBidRequestValid: function(a) {
                        return a.params ? !!a.params.org || ((0,
                        n.logWarn)("org is a mandatory param for Rise adapter"),
                        !1) : ((0,
                        n.logWarn)("no params have been set to Rise adapter"),
                        !1)
                    }
                };
                (0,
                i.a$)(p),
                (0,
                e.E)("riseBidAdapter")
            }
        }, a => {
            a.O(0, [12183, 60802, 37769, 12139, 51085], ( () => {
                return r = 26848,
                a(a.s = r);
                var r
            }
            ));
            a.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[62711], {
            99293: (e, t, r) => {
                var i = r(7873)
                  , n = r(89766)
                  , o = r(20981)
                  , s = r(57377)
                  , a = r(43272)
                  , d = r(71371)
                  , c = r(95789)
                  , p = r(91069)
                  , u = r(63172)
                  , l = r(70433)
                  , m = r(28656)
                  , b = r(8702);
                const g = "https://video-outstream.rubiconproject.com/apex-2.2.1.js";
                let x = a.$W.getConfig("rubicon") || {};
                a.$W.getConfig("rubicon", (e => {
                    (0,
                    p.mergeDeep)(x, e.rubicon)
                }
                ));
                let f = {};
                var y = {
                    1: "468x60",
                    2: "728x90",
                    5: "120x90",
                    7: "125x125",
                    8: "120x600",
                    9: "160x600",
                    10: "300x600",
                    13: "200x200",
                    14: "250x250",
                    15: "300x250",
                    16: "336x280",
                    17: "240x400",
                    19: "300x100",
                    31: "980x120",
                    32: "250x360",
                    33: "180x500",
                    35: "980x150",
                    37: "468x400",
                    38: "930x180",
                    39: "750x100",
                    40: "750x200",
                    41: "750x300",
                    42: "2x4",
                    43: "320x50",
                    44: "300x50",
                    48: "300x300",
                    53: "1024x768",
                    54: "300x1050",
                    55: "970x90",
                    57: "970x250",
                    58: "1000x90",
                    59: "320x80",
                    60: "320x150",
                    61: "1000x1000",
                    64: "580x500",
                    65: "640x480",
                    66: "930x600",
                    67: "320x480",
                    68: "1800x1000",
                    72: "320x320",
                    73: "320x160",
                    78: "980x240",
                    79: "980x300",
                    80: "980x400",
                    83: "480x300",
                    85: "300x120",
                    90: "548x150",
                    94: "970x310",
                    95: "970x100",
                    96: "970x210",
                    101: "480x320",
                    102: "768x1024",
                    103: "480x280",
                    105: "250x800",
                    108: "320x240",
                    113: "1000x300",
                    117: "320x100",
                    125: "800x250",
                    126: "200x600",
                    144: "980x600",
                    145: "980x150",
                    152: "1000x250",
                    156: "640x320",
                    159: "320x250",
                    179: "250x600",
                    195: "600x300",
                    198: "640x360",
                    199: "640x200",
                    213: "1030x590",
                    214: "980x360",
                    221: "1x1",
                    229: "320x180",
                    230: "2000x1400",
                    232: "580x400",
                    234: "6x6",
                    251: "2x2",
                    256: "480x820",
                    257: "400x600",
                    258: "500x200",
                    259: "998x200",
                    261: "480x480",
                    264: "970x1000",
                    265: "1920x1080",
                    274: "1800x200",
                    278: "320x500",
                    282: "320x400",
                    288: "640x380",
                    484: "720x1280",
                    524: "1x2",
                    548: "500x1000",
                    550: "980x480",
                    552: "300x200",
                    558: "640x640",
                    562: "300x431",
                    564: "320x431",
                    566: "320x300",
                    568: "300x150",
                    570: "300x125",
                    572: "250x350",
                    574: "620x891",
                    576: "610x877",
                    578: "980x552",
                    580: "505x656",
                    622: "192x160",
                    632: "1200x450",
                    634: "340x450",
                    680: "970x570",
                    682: "300x240",
                    684: "970x550",
                    686: "300x210",
                    688: "300x220",
                    690: "970x170",
                    710: "600x250",
                    712: "340x430"
                };
                (0,
                p._each)(y, ( (e, t) => y[e] = t));
                const h = (0,
                n.A)({
                    request(e, t, r, n) {
                        const {bidRequests: o} = n
                          , s = e(t, r, n);
                        var d;
                        s.cur = ["USD"],
                        s.test = a.$W.getConfig("debug") ? 1 : 0,
                        (0,
                        u.J)(s, "ext.prebid.cache", {
                            vastxml: {
                                returnCreative: !0 === x.returnVast
                            }
                        }),
                        (0,
                        u.J)(s, "ext.prebid.bidders", {
                            rubicon: {
                                integration: x.int_type || "pbjs"
                            }
                        }),
                        (0,
                        u.J)(s, "ext.prebid.targeting.pricegranularity", {
                            ranges: {
                                low: [{
                                    max: 5,
                                    increment: .5
                                }],
                                medium: [{
                                    max: 20,
                                    increment: .1
                                }],
                                high: [{
                                    max: 20,
                                    increment: .01
                                }],
                                auto: [{
                                    max: 5,
                                    increment: .05
                                }, {
                                    min: 5,
                                    max: 10,
                                    increment: .1
                                }, {
                                    min: 10,
                                    max: 20,
                                    increment: .5
                                }],
                                dense: [{
                                    max: 3,
                                    increment: .01
                                }, {
                                    min: 3,
                                    max: 8,
                                    increment: .05
                                }, {
                                    min: 8,
                                    max: 20,
                                    increment: .5
                                }],
                                custom: (d = a.$W).getConfig("customPriceBucket") && d.getConfig("customPriceBucket").buckets
                            }[d.getConfig("priceGranularity")]
                        });
                        let c = (0,
                        i.m)().installedModules;
                        !c || c.length && -1 === c.indexOf("rubiconAnalyticsAdapter") || (0,
                        u.J)(s, "ext.prebid.analytics", {
                            rubicon: {
                                "client-analytics": !0
                            }
                        }),
                        function(e, t, r) {
                            let i = {};
                            const n = (0,
                            m.D)(r, ...t.map((e => e.params.keywords)));
                            t.forEach((t => {
                                const r = {
                                    user: {
                                        ext: {
                                            data: {
                                                ...t.params.visitor
                                            }
                                        }
                                    },
                                    site: {
                                        ext: {
                                            data: {
                                                ...t.params.inventory
                                            }
                                        }
                                    }
                                }
                                  , n = e.imp.find((e => e.ext?.prebid?.bidder?.rubicon?.video?.language));
                                n && (r.site.content = {
                                    language: n.ext?.prebid?.bidder?.rubicon?.video?.language
                                }),
                                i = (0,
                                p.mergeDeep)(i, t.ortb2 || {}, r);
                                const o = a.$W.getConfig("user.id");
                                i.user.id = i.user.id || o
                            }
                            )),
                            (0,
                            p.mergeDeep)(e, i),
                            n && n.length && (0,
                            u.J)(e, "site.keywords", n.join(","));
                            delete e?.ext?.prebid?.storedrequest
                        }(s, o, r.ortb2),
                        delete s?.ext?.prebid?.storedrequest,
                        !0 === x.disableFloors && delete s.ext.prebid.floors;
                        return o.filter((e => "object" == typeof e.floorData)).length > 0 && (s.ext.prebid.floors = {
                            enabled: !1
                        }),
                        s
                    },
                    imp(e, t, r) {
                        const i = S(t);
                        if (i.includes(d.D4) && 1 == i.length)
                            return;
                        const n = e(t, r);
                        return n.id = t.adUnitCode,
                        delete n.banner,
                        "atf" === t.params.position && n.video && (n.video.pos = 1),
                        "btf" === t.params.position && n.video && (n.video.pos = 3),
                        delete n.ext?.prebid?.storedrequest,
                        !0 === t.params.bidonmultiformat && i.length > 1 && (0,
                        u.J)(n, "ext.prebid.bidder.rubicon.formats", i),
                        function(e, t) {
                            "USD" != t.bidfloorcur && (delete t.bidfloor,
                            delete t.bidfloorcur);
                            if (!t.bidfloor) {
                                let r = parseFloat((0,
                                l.A)(e, "params.floor"));
                                isNaN(r) || (t.bidfloor = r,
                                t.bidfloorcur = "USD")
                            }
                        }(t, n),
                        n.id = f[n.id] ? n.id + f[n.id]++ : (f[n.id] = 2,
                        n.id),
                        n
                    },
                    bidResponse(e, t, r) {
                        const i = e(t, r);
                        i.meta.mediaType = (0,
                        l.A)(t, "ext.prebid.type");
                        const {bidRequest: n} = r;
                        let[o,s] = "outstream" === n.mediaTypes.video?.context ? j(n, d.G_) : [void 0, void 0];
                        return i.width = t.w || o || i.playerWidth || 0,
                        i.height = t.h || s || i.playerHeight || 0,
                        i.mediaType === d.G_ && "outstream" === n.mediaTypes.video.context && (i.renderer = function(e) {
                            const t = c.A4.install({
                                id: e.adId,
                                url: x.rendererUrl || g,
                                config: x.rendererConfig || {},
                                loaded: !1,
                                adUnitCode: e.adUnitCode
                            });
                            try {
                                t.setRender(A)
                            } catch (e) {
                                (0,
                                p.logWarn)("Prebid Error calling setRender on renderer", e)
                            }
                            return t
                        }(i)),
                        (0,
                        l.A)(t, "ext.bidder.rp.advid") && (0,
                        u.J)(i, "meta.advertiserId", t.ext.bidder.rp.advid),
                        i
                    },
                    context: {
                        netRevenue: !1 !== x.netRevenue,
                        ttl: 360
                    },
                    processors: o.m
                })
                  , _ = {
                    code: "rubicon",
                    gvlid: 52,
                    supportedMediaTypes: [d.D4, d.G_, d.s6],
                    isBidRequestValid: function(e) {
                        let t = !0;
                        if ("object" != typeof e.params)
                            return !1;
                        for (let t = 0, r = ["accountId", "siteId", "zoneId"]; t < r.length; t++)
                            if (e.params[r[t]] = parseInt(e.params[r[t]]),
                            isNaN(e.params[r[t]]))
                                return (0,
                                p.logError)("Rubicon: wrong format of accountId or siteId or zoneId."),
                                !1;
                        let r = S(e, !0);
                        if (!r.length)
                            return !1;
                        r.includes(d.G_) && (t = function(e) {
                            let t = !0
                              , r = Object.prototype.toString.call([])
                              , i = Object.prototype.toString.call(0);
                            var n = {
                                mimes: r,
                                protocols: r,
                                linearity: i
                            };
                            return Object.keys(n).forEach((function(r) {
                                Object.prototype.toString.call((0,
                                l.A)(e, "mediaTypes.video." + r)) !== n[r] && (t = !1,
                                (0,
                                p.logError)("Rubicon: mediaTypes.video." + r + " is required and must be of type: " + n[r]))
                            }
                            )),
                            t
                        }(e));
                        const i = [d.D4, d.s6].filter((e => r.includes(e))).length > 0;
                        return i ? t && i : t
                    },
                    buildRequests: function(e, t) {
                        let r, i = [], n = [];
                        if (r = e.filter((e => {
                            const t = S(e) || []
                              , {length: r} = t
                              , {bidonmultiformat: i, video: n} = e.params || {};
                            return 1 === r && (t.includes(d.G_) || t.includes(d.s6)) || 2 === r && !t.includes(d.D4) || n && t.includes(d.G_) || i && (t.includes(d.G_) || t.includes(d.s6))
                        }
                        )),
                        r && r.length) {
                            const e = h.toORTB({
                                bidRequests: r,
                                bidderRequest: t
                            });
                            R(),
                            n.push({
                                method: "POST",
                                url: `https://${x.videoHost || "prebid-server"}.rubiconproject.com/openrtb2/auction`,
                                data: e,
                                bidRequest: r
                            })
                        }
                        const o = e.filter((e => {
                            const t = S(e) || []
                              , {bidonmultiformat: r, video: i} = e.params || {};
                            return t.includes(d.D4) && (1 === t.length || r || !r && !i || !r && i && !t.includes(d.G_))
                        }
                        ));
                        if (!0 !== x.singleRequest)
                            i = n.concat(o.map((e => {
                                const r = _.createSlotParams(e, t);
                                return {
                                    method: "GET",
                                    url: `https://${x.bannerHost || "fastlane"}.rubiconproject.com/a/api/fastlane.json`,
                                    data: _.getOrderedParams(r).reduce(( (e, t) => {
                                        const i = r[t];
                                        return (0,
                                        p.isStr)(i) && "" !== i || (0,
                                        p.isNumber)(i) ? `${e}${I(t, i)}&` : e
                                    }
                                    ), "") + `slots=1&rand=${Math.random()}`,
                                    bidRequest: e
                                }
                            }
                            )));
                        else {
                            const e = o.reduce(( (e, t) => ((e[t.params.siteId] = e[t.params.siteId] || []).push(t),
                            e)), {})
                              , r = 10;
                            i = n.concat(Object.keys(e).reduce(( (i, n) => {
                                var o, s;
                                return (o = e[n],
                                s = r,
                                o.map(( (e, t) => t % s == 0 ? o.slice(t, t + s) : null)).filter((e => e))).forEach((e => {
                                    const r = _.combineSlotUrlParams(e.map((e => _.createSlotParams(e, t))));
                                    i.push({
                                        method: "GET",
                                        url: `https://${x.bannerHost || "fastlane"}.rubiconproject.com/a/api/fastlane.json`,
                                        data: _.getOrderedParams(r).reduce(( (e, t) => {
                                            const i = r[t];
                                            return (0,
                                            p.isStr)(i) && "" !== i || (0,
                                            p.isNumber)(i) ? `${e}${I(t, i)}&` : e
                                        }
                                        ), "") + `slots=${e.length}&rand=${Math.random()}`,
                                        bidRequest: e
                                    })
                                }
                                )),
                                i
                            }
                            ), []))
                        }
                        return i
                    },
                    getOrderedParams: function(e) {
                        const t = /^tg_v/
                          , r = /^tg_i/
                          , i = /^eid_|^tpid_/
                          , n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "gpp", "gpp_sid", "rp_schain"].concat(Object.keys(e).filter((e => i.test(e)))).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter((e => t.test(e)))).concat(Object.keys(e).filter((e => r.test(e)))).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "p_screen_res", "o_ae", "o_cdep", "rp_floor", "rp_secure", "tk_user_key"]);
                        return n.concat(Object.keys(e).filter((e => -1 === n.indexOf(e))))
                    },
                    combineSlotUrlParams: function(e) {
                        if (1 === e.length)
                            return e[0];
                        const t = e.reduce((function(t, r, i) {
                            return Object.keys(r).forEach((function(n) {
                                t.hasOwnProperty(n) || (t[n] = new Array(e.length)),
                                t[n].splice(i, 1, r[n])
                            }
                            )),
                            t
                        }
                        ), {})
                          , r = new RegExp("^([^;]*)(;\\1)+$");
                        return Object.keys(t).forEach((function(e) {
                            const i = t[e].join(";")
                              , n = i.match(r);
                            t[e] = n ? n[1] : i
                        }
                        )),
                        t
                    },
                    createSlotParams: function(e, t) {
                        e.startTime = (new Date).getTime();
                        const r = e.params
                          , i = j(e, "banner")
                          , [n,o] = r.latLong || []
                          , s = {
                            account_id: r.accountId,
                            site_id: r.siteId,
                            zone_id: r.zoneId,
                            size_id: i[0],
                            alt_size_ids: i.slice(1).join(",") || void 0,
                            rp_floor: (r.floor = parseFloat(r.floor)) >= .01 ? r.floor : void 0,
                            rp_secure: "1",
                            tk_flint: `${x.int_type || "pbjs_lite"}_v9.44.1`,
                            "x_source.tid": t.ortb2?.source?.tid,
                            "x_imp.ext.tid": e.ortb2Imp?.ext?.tid,
                            l_pb_bid_id: e.bidId,
                            o_cdep: e.ortb2?.device?.ext?.cdep,
                            ip: e.ortb2?.device?.ip,
                            ipv6: e.ortb2?.device?.ipv6,
                            p_screen_res: [window.screen.width, window.screen.height].join("x"),
                            tk_user_key: r.userId,
                            "p_geo.latitude": isNaN(parseFloat(n)) ? void 0 : parseFloat(n).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: v(e, t)
                        };
                        if ("function" == typeof e.getFloor && !x.disableFloors) {
                            let t;
                            try {
                                t = e.getFloor({
                                    currency: "USD",
                                    mediaType: "banner",
                                    size: "*"
                                })
                            } catch (e) {
                                (0,
                                p.logError)("Rubicon: getFloor threw an error: ", e)
                            }
                            s.rp_hard_floor = (0,
                            p.isPlainObject)(t) && "USD" === t.currency && !isNaN(parseInt(t.floor)) ? t.floor : void 0
                        }
                        !0 === r.bidonmultiformat && (0,
                        l.A)(e, "mediaTypes") && Object.keys(e.mediaTypes).length > 1 && (s.p_formats = Object.keys(e.mediaTypes).join(","));
                        let c = {
                            1: "atf",
                            3: "btf"
                        }[(0,
                        l.A)(e, "mediaTypes.banner.pos")] || "";
                        s.p_pos = "atf" === r.position || "btf" === r.position ? r.position : c;
                        const u = a.$W.getConfig("user.id");
                        return u && (s.ppuid = u),
                        e?.ortb2Imp?.ext?.ae && (s.o_ae = 1),
                        "number" == typeof e?.ortb2?.site?.mobile && (s["p_site.mobile"] = e.ortb2.site.mobile),
                        function(e, t) {
                            if (!1 === x.readTopics)
                                return;
                            let r = [1, 2, 5, 6, 7, 507].concat(x.sendSiteSegtax?.map((e => Number(e))) || [])
                              , i = [4, 508].concat(x.sendUserSegtax?.map((e => Number(e))) || [])
                              , n = e.ortb2?.user?.data || []
                              , o = e.ortb2?.site?.content?.data || [];
                            n.forEach($(t, "v", i)),
                            o.forEach($(t, "i", r))
                        }(t, s),
                        e?.ortb2?.user?.ext?.eids && e.ortb2.user.ext.eids.forEach((e => {
                            let {source: t, uids: r=[], inserter: i, matcher: n, mm: o, ext: a={}} = e;
                            try {
                                const e = r[0];
                                if (!e)
                                    return;
                                const a = e => [e.id, e.atype || "", "", i || "", n || "", o || "", e?.ext?.rtiPartner || e?.ext?.rtipartner || ""].join("^")
                                  , d = a(e);
                                if (s[`eid_${t}`] = d,
                                !s.ppuid) {
                                    const e = r.find((e => "ppuid" === e.ext?.stype));
                                    e?.id && (s.ppuid = e.id)
                                }
                            } catch (e) {
                                (0,
                                p.logWarn)("Rubicon: error reading eid:", {
                                    source: t,
                                    uids: r
                                }, e)
                            }
                        }
                        )),
                        t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (s.gdpr = Number(t.gdprConsent.gdprApplies)),
                        s.gdpr_consent = t.gdprConsent.consentString),
                        t.uspConsent && (s.us_privacy = encodeURIComponent(t.uspConsent)),
                        t.gppConsent?.gppString && (s.gpp = t.gppConsent.gppString,
                        s.gpp_sid = t.gppConsent?.applicableSections?.toString()),
                        s.rp_maxbids = t.bidLimit || 1,
                        function(e, t, r) {
                            const i = {
                                user: {
                                    ext: {
                                        data: {
                                            ...e.params.visitor
                                        }
                                    }
                                },
                                site: {
                                    ext: {
                                        data: {
                                            ...e.params.inventory
                                        }
                                    }
                                }
                            };
                            e.params.keywords && (i.site.keywords = (0,
                            p.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
                            let n = (0,
                            p.mergeDeep)({}, e.ortb2 || {}, i)
                              , o = (0,
                            l.A)(e.ortb2Imp, "ext") || {}
                              , s = (0,
                            l.A)(e.ortb2Imp, "ext.data") || {};
                            const a = (0,
                            l.A)(e, "ortb2Imp.ext.gpid")
                              , c = (0,
                            l.A)(n, "regs.ext.dsa")
                              , u = {
                                user: [4],
                                site: [1, 2, 5, 6, 7]
                            }
                              , m = {
                                user: "tg_v.",
                                site: "tg_i.",
                                adserver: "tg_i.dfp_ad_unit_code",
                                pbadslot: "tg_i.pbadslot",
                                keywords: "kw"
                            }
                              , b = function(e, t, r) {
                                return "data" === t && Array.isArray(e) ? e.filter((e => e.segment && (0,
                                l.A)(e, "ext.segtax") && u[r] && -1 !== u[r].indexOf((0,
                                l.A)(e, "ext.segtax")))).map((e => {
                                    let t = e.segment.filter((e => e.id)).reduce(( (e, t) => (e.push(t.id),
                                    e)), []);
                                    if (t.length > 0)
                                        return t.toString()
                                }
                                )).toString() : ("object" != typeof e || Array.isArray(e)) && void 0 !== e ? Array.isArray(e) ? e.filter((e => {
                                    if ("object" != typeof e && void 0 !== e)
                                        return e.toString();
                                    (0,
                                    p.logWarn)("Rubicon: Filtered value: ", e, "for key", t, ": Expected value to be string, integer, or an array of strings/ints")
                                }
                                )).toString() : e.toString() : void 0
                            }
                              , g = function(e, t, i) {
                                let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                                  , o = b(e, i, t)
                                  , s = m[i] && n ? `${m[i]}` : "data" === i ? `${m[t]}iab` : `${m[t]}${i}`;
                                r[s] = r[s] ? r[s].concat(",", o) : o
                            };
                            if (t === d.D4) {
                                ["site", "user"].forEach((e => {
                                    Object.keys(n[e]).forEach((t => {
                                        "site" === e && "content" === t && n[e][t].data ? g(n[e][t].data, e, "data") : "ext" !== t ? g(n[e][t], e, t) : n[e][t].data && Object.keys(n[e].ext.data).forEach((t => {
                                            g(n[e].ext.data[t], e, t, !1)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                Object.keys(s).forEach((e => {
                                    "adserver" !== e ? g(s[e], "site", e) : "gam" === s[e].name && g(s[e].adslot, name, e)
                                }
                                )),
                                a && (r.p_gpid = a),
                                c && Object.keys(c).length && (0,
                                p.pick)(c, ["dsainfo", e => r.dsainfo = e, "dsarequired", e => r.dsarequired = e, "pubrender", e => r.dsapubrender = e, "datatopub", e => r.dsadatatopubs = e, "transparency", e => {
                                    Array.isArray(e) && e.length && (r.dsatransparency = e.reduce(( (e, t) => {
                                        const r = t.domain || "";
                                        if (!r)
                                            return e;
                                        const i = t.dsaparams || t.params;
                                        return Array.isArray(i) && 0 !== i.length ? (e && (e += "~~"),
                                        e + `${r}~${i.join("_")}`) : e
                                    }
                                    ), ""))
                                }
                                ]),
                                r["tg_i.pbadslot"] && delete r["tg_i.dfp_ad_unit_code"];
                                const e = (0,
                                l.A)(n, "device.sua");
                                e && !1 !== x.chEnabled && (0,
                                p.pick)(e, ["architecture", e => r.m_ch_arch = e, "bitness", e => r.m_ch_bitness = e, "browsers", e => {
                                    if (!Array.isArray(e))
                                        return;
                                    const [t,i] = e.reduce(( (e, t) => (e[0].push(`"${t?.brand}"|v="${t?.version?.[0]}"`),
                                    t.version.length > 1 && e[1].push(`"${t?.brand}"|v="${t?.version?.join?.(".")}"`),
                                    e)), [[], []]);
                                    r.m_ch_ua = t?.join?.(","),
                                    r.m_ch_full_ver = i?.join?.(",")
                                }
                                , "mobile", e => r.m_ch_mobile = `?${e}`, "model", e => r.m_ch_model = e, "platform", e => {
                                    r.m_ch_platform = e?.brand,
                                    r.m_ch_platform_ver = e?.version?.join?.(".")
                                }
                                ])
                            } else
                                Object.keys(o).length && (0,
                                p.mergeDeep)(r.imp[0].ext, o),
                                a && (r.imp[0].ext.gpid = a),
                                (0,
                                p.mergeDeep)(r, n)
                        }(e, d.D4, s),
                        !0 === a.$W.getConfig("coppa") && (s.coppa = 1),
                        e.schain && C(e.schain) && (s.rp_schain = _.serializeSupplyChain(e.schain)),
                        s
                    },
                    serializeSupplyChain: function(e) {
                        if (!C(e))
                            return "";
                        const {ver: t, complete: r, nodes: i} = e;
                        return `${t},${r}!${_.serializeSupplyChainNodes(i)}`
                    },
                    serializeSupplyChainNodes: function(e) {
                        const t = ["asi", "sid", "hp", "rid", "name", "domain"];
                        return e.map((e => t.map((t => encodeURIComponent(e[t] || ""))).join(","))).join("!")
                    },
                    interpretResponse: function(e, t) {
                        e = e.body;
                        const {data: r} = t;
                        if (!e || "object" != typeof e)
                            return [];
                        if (e.seatbid) {
                            const t = (0,
                            l.A)(e, "ext.errors.rubicon");
                            Array.isArray(t) && t.length > 0 && (0,
                            p.logWarn)("Rubicon: Error in video response");
                            return h.fromORTB({
                                request: r,
                                response: e
                            }).bids
                        }
                        let i, n = e.ads, o = 0;
                        const {bidRequest: s} = t;
                        if ("object" == typeof s && !Array.isArray(s) && S(s).includes(d.G_) && "object" == typeof n && (n = n[s.adUnitCode]),
                        !Array.isArray(n) || n.length < 1)
                            return [];
                        let a = n.reduce(( (t, r, n) => {
                            if (r.impression_id && i === r.impression_id ? o++ : i = r.impression_id,
                            "ok" !== r.status)
                                return t;
                            const a = Array.isArray(s) ? s[n - o] : s;
                            if (a && "object" == typeof a) {
                                let e = {
                                    requestId: a.bidId,
                                    currency: "USD",
                                    creativeId: r.creative_id || `${r.network || ""}-${r.advertiser || ""}`,
                                    cpm: r.cpm || 0,
                                    dealId: r.deal,
                                    ttl: 360,
                                    netRevenue: !1 !== x.netRevenue,
                                    rubicon: {
                                        advertiserId: r.advertiser,
                                        networkId: r.network
                                    },
                                    meta: {
                                        advertiserId: r.advertiser,
                                        networkId: r.network,
                                        mediaType: d.D4
                                    }
                                };
                                r.creative_type && (e.mediaType = r.creative_type),
                                r.dsa && Object.keys(r.dsa).length && (e.meta.dsa = r.dsa),
                                r.adomain && (e.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]),
                                r.emulated_format && (e.meta.mediaType = r.emulated_format),
                                r.creative_type === d.G_ ? (e.width = a.params.video.playerWidth,
                                e.height = a.params.video.playerHeight,
                                e.vastUrl = r.creative_depot_url,
                                e.impression_id = r.impression_id,
                                e.videoCacheKey = r.impression_id) : (e.ad = (c = r.script,
                                `<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='${r.impression_id}'>\n<script type='text/javascript'>${c}<\/script>\n</div>\n</body>\n</html>`),
                                [e.width,e.height] = y[r.size_id].split("x").map((e => Number(e)))),
                                e.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(( (e, t) => (e[t.key] = t.values[0],
                                e)), {
                                    rpfl_elemid: a.adUnitCode
                                }),
                                t.push(e)
                            } else
                                (0,
                                p.logError)(`Rubicon: bidRequest undefined at index position:${n}`, s, e);
                            var c;
                            return t
                        }
                        ), []).sort(( (e, t) => (t.cpm || 0) - (e.cpm || 0)))
                          , c = e.component_auction_config?.map((e => ({
                            config: e,
                            bidId: e.bidId
                        })));
                        return c ? {
                            bids: a,
                            paapi: c
                        } : a
                    },
                    getUserSyncs: function(e, t, r, i, n) {
                        if (!w && e.iframeEnabled) {
                            let e = (0,
                            b.d)(r, i, n);
                            return e = Object.keys(e).length ? `?${(0,
                            p.formatQS)(e)}` : "",
                            w = !0,
                            {
                                type: "iframe",
                                url: `https://${x.syncHost || "eus"}.rubiconproject.com/usync.html` + e
                            }
                        }
                    }
                };
                function v(e, t) {
                    let r;
                    return r = e.params.referrer ? e.params.referrer : t.refererInfo.page,
                    e.params.secure ? r.replace(/^http:/i, "https:") : r
                }
                function A(e) {
                    const t = document.getElementById(e.adUnitCode);
                    !function(e) {
                        const t = e.querySelector("div[id^='google_ads']");
                        t && t.style.setProperty("display", "none")
                    }(t),
                    function(e) {
                        const t = e.querySelector("script[id^='sas_script']")
                          , r = t && t.nextSibling;
                        r && "iframe" === r.localName && r.style.setProperty("display", "none")
                    }(t);
                    const r = {
                        ...{
                            align: "center",
                            position: "append",
                            closeButton: !1,
                            label: void 0,
                            collapse: !0
                        },
                        ...e.renderer.getConfig()
                    };
                    e.renderer.push(( () => {
                        window.MagniteApex.renderAd({
                            width: e.width,
                            height: e.height,
                            vastUrl: e.vastUrl,
                            placement: {
                                attachTo: `#${e.adUnitCode}`,
                                align: r.align,
                                position: r.position
                            },
                            closeButton: r.closeButton,
                            label: r.label,
                            collapse: r.collapse
                        })
                    }
                    ))
                }
                function j(e, t) {
                    let r = e.params;
                    if (t === d.G_) {
                        let t = [];
                        return r.video && r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray((0,
                        l.A)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? t = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (t = e.sizes[0]),
                        t
                    }
                    let i = [];
                    return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== (0,
                    l.A)(e, "mediaTypes.banner.sizes") ? i = k(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? i = k(e.sizes) : (0,
                    p.logWarn)("Rubicon: no sizes are setup or found"),
                    function(e) {
                        const t = [15, 2, 9];
                        return e.sort(( (e, r) => {
                            const i = t.indexOf(e)
                              , n = t.indexOf(r);
                            return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - r
                        }
                        ))
                    }(i)
                }
                function $(e, t, r) {
                    return i => {
                        const n = Number(i.ext?.segtax);
                        r.includes(n) && (e[`tg_${t}.tax${n}`] = i.segment?.map((e => e.id)).join(","))
                    }
                }
                function k(e) {
                    return (0,
                    p.parseSizesInput)(e).reduce(( (e, t) => {
                        let r = parseInt(y[t], 10);
                        return r && e.push(r),
                        e
                    }
                    ), [])
                }
                function S(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = [];
                    if (function(e) {
                        let t = void 0 !== (0,
                        l.A)(e, `mediaTypes.${d.G_}`)
                          , r = void 0 !== (0,
                        l.A)(e, `mediaTypes.${d.D4}`)
                          , i = void 0 !== (0,
                        l.A)(e, "params.bidonmultiformat")
                          , n = "object" != typeof (0,
                        l.A)(e, "params.video");
                        return !(!t || !i) || (r && n && (t = !1),
                        t && n && (0,
                        u.J)(e, "params.video", {}),
                        t)
                    }(e)) {
                        if (-1 === ["outstream", "instream"].indexOf((0,
                        l.A)(e, `mediaTypes.${d.G_}.context`)))
                            return t && (0,
                            p.logError)("Rubicon: mediaTypes.video.context must be outstream or instream"),
                            r;
                        if (j(e, d.G_).length < 2)
                            return t && (0,
                            p.logError)("Rubicon: could not determine the playerSize of the video"),
                            r;
                        t && (0,
                        p.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode),
                        r.push(d.G_)
                    }
                    if (void 0 !== (0,
                    l.A)(e, `mediaTypes.${d.s6}`) && r.push(d.s6),
                    void 0 !== (0,
                    l.A)(e, `mediaTypes.${d.D4}`)) {
                        if (0 === j(e, d.D4).length)
                            return t && (0,
                            p.logError)("Rubicon: could not determine the sizes for banner request"),
                            r;
                        t && (0,
                        p.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode),
                        r.push(d.D4)
                    }
                    return r
                }
                const R = () => f = {};
                function C(e) {
                    let t = !1;
                    const r = ["asi", "sid", "hp"];
                    return e.nodes ? (t = e.nodes.reduce(( (e, t) => e ? r.every((e => t.hasOwnProperty(e))) : e), !0),
                    t || (0,
                    p.logError)("Rubicon: required schain params missing"),
                    t) : t
                }
                function I(e, t) {
                    return "rp_schain" === e ? `rp_schain=${t}` : `${e}=${encodeURIComponent(t)}`
                }
                var w = !1;
                (0,
                s.a$)(_),
                (0,
                i.E)("rubiconBidAdapter")
            }
        }, e => {
            e.O(0, [60802, 58498, 97247, 47618, 46550, 37769, 12139, 51085], ( () => {
                return t = 99293,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[45496], {
            25862: (e, o, t) => {
                var n = t(7873)
                  , r = t(91069)
                  , d = t(16833)
                  , i = t(12938)
                  , a = t(16916)
                  , u = t(45569)
                  , c = t(2339);
                const s = (0,
                i.vM)({
                    moduleType: u.fW,
                    moduleName: "sharedId"
                })
                  , l = "cookie"
                  , m = "html5"
                  , p = "_pubcid_optout"
                  , f = "PublisherCommonId";
                function g(e, o) {
                    if (o === l)
                        return s.getCookie(e);
                    if (o === m && s.hasLocalStorage()) {
                        const o = s.getDataFromLocalStorage(`${e}_exp`);
                        if (!o)
                            return s.getDataFromLocalStorage(e);
                        if (new Date(o).getTime() - Date.now() > 0)
                            return s.getDataFromLocalStorage(e)
                    }
                }
                function I(e, o) {
                    return function(t, n) {
                        o ? b(o, e, ( () => {
                            t(n() || e)
                        }
                        ))() : t(e)
                    }
                }
                function b(e) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , t = arguments.length > 2 ? arguments[2] : void 0;
                    if (!e)
                        return;
                    const n = (0,
                    r.parseUrl)(e);
                    n.search.id = encodeURIComponent("pubcid:" + o);
                    const d = (0,
                    r.buildUrl)(n);
                    return function() {
                        (0,
                        r.triggerPixel)(d, t)
                    }
                }
                function v() {
                    return !!(s.cookiesAreEnabled() && g(p, l) || s.hasLocalStorage() && g(p, m))
                }
                const h = {
                    name: "sharedId",
                    aliasName: "pubCommonId",
                    gvlid: a.B1,
                    decode(e, o) {
                        if (v())
                            return void (0,
                            r.logInfo)("PubCommonId decode: Has opted-out");
                        (0,
                        r.logInfo)(" Decoded value PubCommonId " + e);
                        return {
                            pubcid: e
                        }
                    },
                    getId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , o = arguments.length > 1 ? arguments[1] : void 0
                          , t = arguments.length > 2 ? arguments[2] : void 0;
                        if (v())
                            return void (0,
                            r.logInfo)("PubCommonId: Has opted-out");
                        if (o?.coppa)
                            return void (0,
                            r.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
                        const {params: {create: n=!0, pixelUrl: d}={}} = e;
                        let i = t;
                        if (!i) {
                            try {
                                "object" == typeof window[f] && (i = window[f].getId())
                            } catch (e) {}
                            i || (i = n && (0,
                            r.hasDeviceAccess)() ? (0,
                            r.generateUUID)() : void 0)
                        }
                        return {
                            id: i,
                            callback: I(i, d)
                        }
                    },
                    extendId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , o = arguments.length > 1 ? arguments[1] : void 0
                          , t = arguments.length > 2 ? arguments[2] : void 0;
                        if (v())
                            return (0,
                            r.logInfo)("PubCommonId: Has opted-out"),
                            {
                                id: void 0
                            };
                        if (o?.coppa)
                            return void (0,
                            r.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
                        const {params: {extend: n=!1, pixelUrl: d}={}} = e;
                        if (n) {
                            if (d) {
                                return {
                                    callback: b(d, t)
                                }
                            }
                            return {
                                id: t
                            }
                        }
                    },
                    domainOverride: (0,
                    c.w)(s, "sharedId"),
                    eids: {
                        pubcid(e, o) {
                            const t = {
                                source: "pubcid.org",
                                uids: e.map((e => ({
                                    id: e,
                                    atype: 1
                                })))
                            };
                            return null != o?.params?.inserter && (t.inserter = o.params.inserter),
                            t
                        }
                    }
                };
                (0,
                d.bz)("userId", h),
                (0,
                n.E)("sharedIdSystem")
            }
        }, e => {
            e.O(0, [12764, 60802, 37769, 12139, 51085], ( () => {
                return o = 25862,
                e(e.s = o);
                var o
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[54026], {
            88518: (e, t, a) => {
                var r = a(7873)
                  , s = a(91069)
                  , i = a(70433)
                  , o = a(71371)
                  , d = a(43272)
                  , n = a(6036)
                  , p = a(57377)
                  , l = a(29495);
                const m = {
                    code: "smartadserver",
                    gvlid: 45,
                    aliases: ["smart"],
                    supportedMediaTypes: [o.D4, o.G_],
                    isBidRequestValid: function(e) {
                        return !!(e.params && e.params.siteId && e.params.pageId && e.params.formatId)
                    },
                    serializeSupplyChain: function(e) {
                        if (!e || !e.nodes)
                            return null;
                        const t = ["asi", "sid", "hp", "rid", "name", "domain"];
                        return `${e.ver},${e.complete}!` + e.nodes.map((e => t.map((t => e[t] ? encodeURIComponent(e[t]) : "")).join(","))).join("!")
                    },
                    adaptBannerSizes: function(e) {
                        return e.map((e => ({
                            w: e[0],
                            h: e[1]
                        })))
                    },
                    fillPayloadForVideoBidRequest: function(e, t, a) {
                        const r = t.playerSize[0]
                          , i = {
                            maxbitrate: "vbrmax",
                            maxduration: "vdmax",
                            minbitrate: "vbrmin",
                            minduration: "vdmin",
                            placement: "vpt",
                            plcmt: "vplcmt",
                            skip: "skip"
                        };
                        e.mediaType = o.G_,
                        e.isVideo = "instream" === t.context,
                        e.videoData = {};
                        for (const [a,r] of Object.entries(i))
                            e.videoData = {
                                ...e.videoData,
                                ...this.getValuableProperty(r, t[a])
                            };
                        e.videoData = {
                            ...e.videoData,
                            ...this.getValuableProperty("playerWidth", r[0]),
                            ...this.getValuableProperty("playerHeight", r[1]),
                            ...this.getValuableProperty("adBreak", this.getStartDelayForVideoBidRequest(t, a)),
                            ...this.getValuableProperty("videoProtocol", this.getProtocolForVideoBidRequest(t, a)),
                            ...(0,
                            s.isArrayOfNums)(t.api) && t.api.length ? {
                                iabframeworks: t.api.toString()
                            } : {},
                            ...(0,
                            s.isArrayOfNums)(t.playbackmethod) && t.playbackmethod.length ? {
                                vpmt: t.playbackmethod
                            } : {}
                        }
                    },
                    getValuableProperty: function(e, t) {
                        return "string" == typeof e && (0,
                        s.isInteger)(t) && t ? {
                            [e]: t
                        } : {}
                    },
                    getProtocolForVideoBidRequest: function(e, t) {
                        return void 0 !== t && t.protocol ? t.protocol : void 0 !== e && Array.isArray(e.protocols) ? Math.max.apply(Math, e.protocols) : null
                    },
                    getStartDelayForVideoBidRequest: function(e, t) {
                        if (t?.startDelay)
                            return t.startDelay;
                        if (e?.startdelay) {
                            if (e.startdelay > 0 || -1 == e.startdelay)
                                return 2;
                            if (-2 == e.startdelay)
                                return 3
                        }
                        return 1
                    },
                    createServerRequest: function(e, t) {
                        return {
                            method: "POST",
                            url: (void 0 !== t ? t : "https://prg.smartadserver.com") + "/prebid/v1",
                            data: JSON.stringify(e),
                            options: {
                                browsingTopics: !1
                            }
                        }
                    },
                    buildRequests: function(e, t) {
                        const a = (0,
                        l.b)(t)
                          , r = (0,
                        i.A)(t, "ortb2.user.data", d.$W.getAnyConfig("ortb2.user.data"))
                          , p = (0,
                        i.A)(t, "ortb2.site.content.data", d.$W.getAnyConfig("ortb2.site.content.data"));
                        return e.reduce(( (e, l) => {
                            let u = {
                                siteid: l.params.siteId,
                                pageid: l.params.pageId,
                                formatid: l.params.formatId,
                                currencyCode: a,
                                targeting: l.params.target && "" !== l.params.target ? l.params.target : void 0,
                                buid: l.params.buId && "" !== l.params.buId ? l.params.buId : void 0,
                                appname: l.params.appName && "" !== l.params.appName ? l.params.appName : void 0,
                                ckid: l.params.ckId || 0,
                                tagId: l.adUnitCode,
                                pageDomain: t && t.refererInfo && t.refererInfo.page ? t.refererInfo.page : void 0,
                                transactionId: l.ortb2Imp?.ext?.tid,
                                timeout: d.$W.getConfig("bidderTimeout"),
                                bidId: l.bidId,
                                prebidVersion: "9.44.1",
                                schain: m.serializeSupplyChain(l.schain),
                                sda: r,
                                sdc: p
                            };
                            const c = (0,
                            i.A)(l, "ortb2Imp.ext.gpid") || (0,
                            i.A)(l, "ortb2Imp.ext.data.pbadslot");
                            c && (u.gpid = c);
                            const g = (0,
                            i.A)(l, "ortb2.regs.ext.dsa");
                            g && (u.dsa = g),
                            t && (t.gdprConsent && (u.addtl_consent = t.gdprConsent.addtlConsent,
                            u.gdpr_consent = t.gdprConsent.consentString,
                            u.gdpr = t.gdprConsent.gdprApplies),
                            t.gppConsent && (u.gpp = t.gppConsent.gppString,
                            u.gpp_sid = t.gppConsent.applicableSections),
                            t.uspConsent && (u.us_privacy = t.uspConsent)),
                            l && l.userIdAsEids && (u.eids = l.userIdAsEids),
                            t && t.uspConsent && (u.us_privacy = t.uspConsent);
                            const y = (0,
                            i.A)(l, "mediaTypes.banner")
                              , b = (0,
                            i.A)(l, "mediaTypes.video")
                              , f = b && ("instream" === b.context || "outstream" === b.context);
                            if (y || f) {
                                let t;
                                if (y) {
                                    if (t = o.D4,
                                    u.sizes = m.adaptBannerSizes(y.sizes),
                                    f) {
                                        let t = (0,
                                        s.deepClone)(u);
                                        m.fillPayloadForVideoBidRequest(t, b, l.params.video),
                                        t.bidfloor = l.params.bidfloor || (0,
                                        n.M)(l, a, o.G_),
                                        e.push(m.createServerRequest(t, l.params.domain))
                                    }
                                } else
                                    t = o.G_,
                                    m.fillPayloadForVideoBidRequest(u, b, l.params.video);
                                u.bidfloor = l.params.bidfloor || (0,
                                n.M)(l, a, t),
                                e.push(m.createServerRequest(u, l.params.domain))
                            } else
                                e.push({});
                            return e
                        }
                        ), [])
                    },
                    interpretResponse: function(e, t) {
                        const a = [];
                        let r = e.body;
                        try {
                            if (r && !r.isNoAd && (r.ad || r.adUrl)) {
                                const e = JSON.parse(t.data);
                                let i = {
                                    requestId: e.bidId,
                                    cpm: r.cpm,
                                    width: r.width,
                                    height: r.height,
                                    creativeId: r.creativeId,
                                    dealId: r.dealId,
                                    currency: r.currency,
                                    netRevenue: r.isNetCpm,
                                    ttl: r.ttl,
                                    dspPixels: r.dspPixels,
                                    meta: {
                                        ...(0,
                                        s.isArray)(r.adomain) && !(0,
                                        s.isEmpty)(r.adomain) ? {
                                            advertiserDomains: r.adomain
                                        } : {},
                                        ...(0,
                                        s.isEmpty)(r.dsa) ? {} : {
                                            dsa: r.dsa
                                        }
                                    }
                                };
                                e.mediaType === o.G_ ? (i.mediaType = o.G_,
                                i.vastUrl = r.adUrl,
                                i.vastXml = r.ad,
                                i.content = r.ad) : (i.adUrl = r.adUrl,
                                i.ad = r.ad),
                                a.push(i)
                            }
                        } catch (e) {
                            (0,
                            s.logError)("Error while parsing smart server response", e)
                        }
                        return a
                    },
                    getUserSyncs: function(e, t) {
                        const a = [];
                        return e.iframeEnabled && t.length > 0 && null != t[0].body.cSyncUrl ? a.push({
                            type: "iframe",
                            url: t[0].body.cSyncUrl
                        }) : e.pixelEnabled && t.length > 0 && void 0 !== t[0].body.dspPixels && t[0].body.dspPixels.forEach((function(e) {
                            a.push({
                                type: "image",
                                url: e
                            })
                        }
                        )),
                        a
                    }
                };
                (0,
                p.a$)(m),
                (0,
                r.E)("smartadserverBidAdapter")
            }
        }, e => {
            e.O(0, [19147, 90467, 60802, 37769, 12139, 51085], ( () => {
                return t = 88518,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[68723], {
            32605: (e, r, t) => {
                var i = t(7873)
                  , s = t(91069)
                  , n = t(70433)
                  , a = t(63172)
                  , o = t(57377)
                  , d = t(71371);
                const p = {
                    ...t(90011).Z,
                    placement: e => (0,
                    s.isInteger)(e) && e >= 1 && e <= 5,
                    plcmt: e => (0,
                    s.isInteger)(e) && e >= 1 && e <= 4,
                    delivery: e => Array.isArray(e) && e.every((e => e >= 1 && e <= 3)),
                    pos: e => (0,
                    s.isInteger)(e) && e >= 1 && e <= 7
                }
                  , c = {
                    mimes: p.mimes,
                    maxduration: p.maxduration,
                    protocols: p.protocols
                }
                  , l = {
                    code: "sovrn",
                    supportedMediaTypes: [d.D4, d.G_],
                    gvlid: 13,
                    isBidRequestValid: function(e) {
                        const r = e?.mediaTypes?.video;
                        return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid) || r && !Object.keys(c).every((e => c[e](r[e]))))
                    },
                    buildRequests: function(e, r) {
                        try {
                            let t, i, o, d, c = [];
                            (0,
                            s._each)(e, (function(e) {
                                !o && e.userIdAsEids && (o = e.userIdAsEids,
                                o.forEach((function(e) {
                                    e.uids && e.uids[0] && "criteo.com" === e.source && (d = e.uids[0].id)
                                }
                                ))),
                                e.schain && (i = i || e.schain),
                                t = t || (0,
                                s.getBidIdParameter)("iv", e.params);
                                const a = {
                                    adunitcode: e.adUnitCode,
                                    id: e.bidId,
                                    tagid: String((0,
                                    s.getBidIdParameter)("tagid", e.params)),
                                    bidfloor: u(e)
                                };
                                if ((0,
                                n.A)(e, "mediaTypes.banner")) {
                                    let r = (0,
                                    n.A)(e, "mediaTypes.banner.sizes") || e.sizes;
                                    r = (0,
                                    s.isArray)(r) && (0,
                                    s.isArray)(r[0]) ? r : [r],
                                    r = r.filter((e => (0,
                                    s.isArray)(e)));
                                    const t = r.map((e => ({
                                        w: parseInt(e[0], 10),
                                        h: parseInt(e[1], 10)
                                    })));
                                    a.banner = {
                                        format: t,
                                        w: 1,
                                        h: 1
                                    }
                                }
                                (0,
                                n.A)(e, "mediaTypes.video") && (a.video = function(e) {
                                    const r = {}
                                      , t = (0,
                                    n.A)(e, "sizes")
                                      , i = (0,
                                    n.A)(e, "mediaTypes.video", {})
                                      , a = (0,
                                    n.A)(e, "params.video", {})
                                      , o = {};
                                    if (t) {
                                        const e = Array.isArray(t[0]) ? t[0] : t;
                                        o.w = e[0],
                                        o.h = e[1]
                                    } else if (Array.isArray(i.playerSize)) {
                                        const e = Array.isArray(i.playerSize[0]) ? i.playerSize[0] : i.playerSize;
                                        o.w = e[0],
                                        o.h = e[1]
                                    }
                                    const d = {
                                        ...o,
                                        ...i,
                                        ...a
                                    };
                                    return Object.keys(p).forEach((e => {
                                        d.hasOwnProperty(e) && (p[e](d[e]) ? r[e] = d[e] : (0,
                                        s.logWarn)(`The OpenRTB video param ${e} has been skipped due to misformating. Please refer to OpenRTB 2.5 spec.`))
                                    }
                                    )),
                                    r
                                }(e)),
                                a.ext = (0,
                                s.getBidIdParameter)("ext", e.ortb2Imp) || void 0;
                                const l = (0,
                                s.getBidIdParameter)("segments", e.params);
                                l && (a.ext = a.ext || {},
                                a.ext.deals = l.split(",").map((e => e.trim())));
                                const m = e?.ortb2Imp?.ext?.ae;
                                r.paapi?.enabled && (0,
                                s.isInteger)(m) ? (a.ext = a.ext || {},
                                a.ext.ae = m) : a.ext?.ae && delete a.ext.ae,
                                c.push(a)
                            }
                            ));
                            const l = r.ortb2 || {}
                              , m = l.site || {};
                            m.page = r.refererInfo.page,
                            m.domain = r.refererInfo.domain;
                            const g = (0,
                            n.A)(r, "timeout")
                              , y = {
                                id: (0,
                                s.getUniqueIdentifierStr)(),
                                imp: c,
                                site: m,
                                user: l.user || {},
                                tmax: g
                            };
                            i && (y.source = {
                                ext: {
                                    schain: i
                                }
                            });
                            const b = (0,
                            n.A)(r, "ortb2.source.tid");
                            b && (0,
                            a.J)(y, "source.tid", b);
                            (0,
                            n.A)(r, "ortb2.regs.coppa") && (0,
                            a.J)(y, "regs.coppa", 1);
                            const f = (0,
                            n.A)(r, "ortb2.bcat");
                            f && (0,
                            a.J)(y, "bcat", f),
                            r.gdprConsent && ((0,
                            a.J)(y, "regs.ext.gdpr", +r.gdprConsent.gdprApplies),
                            (0,
                            a.J)(y, "user.ext.consent", r.gdprConsent.consentString)),
                            r.uspConsent && (0,
                            a.J)(y, "regs.ext.us_privacy", r.uspConsent),
                            r.gppConsent && ((0,
                            a.J)(y, "regs.gpp", r.gppConsent.gppString),
                            (0,
                            a.J)(y, "regs.gpp_sid", r.gppConsent.applicableSections)),
                            r?.ortb2?.device && (y.device = y.device || {},
                            (0,
                            s.mergeDeep)(y.device, r.ortb2.device)),
                            o && ((0,
                            a.J)(y, "user.ext.eids", o),
                            d && (0,
                            a.J)(y, "user.ext.prebid_criteoid", d));
                            let h = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_9.44.1";
                            return t && (h += `&iv=${t}`),
                            {
                                method: "POST",
                                url: h,
                                data: JSON.stringify(y),
                                options: {
                                    contentType: "text/plain"
                                }
                            }
                        } catch (e) {
                            (0,
                            s.logError)("Could not build bidrequest, error deatils:", e)
                        }
                    },
                    interpretResponse: function(e) {
                        let {body: {id: r, seatbid: t, ext: i}} = e;
                        if (!r || !t || !Array.isArray(t))
                            return [];
                        try {
                            let e = t.filter((e => e)).map((e => e.bid.map((e => {
                                const r = {
                                    requestId: e.impid,
                                    cpm: parseFloat(e.price),
                                    width: parseInt(e.w),
                                    height: parseInt(e.h),
                                    creativeId: e.crid || e.id,
                                    dealId: e.dealid || null,
                                    currency: "USD",
                                    netRevenue: !0,
                                    mediaType: e.nurl ? d.D4 : d.G_,
                                    ttl: e.ext?.ttl || 90,
                                    meta: {
                                        advertiserDomains: e && e.adomain ? e.adomain : []
                                    }
                                };
                                return e.nurl ? r.ad = decodeURIComponent(`${e.adm}<img src="${e.nurl}">`) : r.vastXml = decodeURIComponent(e.adm),
                                r
                            }
                            )))).flat()
                              , r = null;
                            if ((0,
                            s.isArray)(i?.igbid)) {
                                const e = i.seller
                                  , t = i.decisionLogicUrl
                                  , n = i.sellerTimeout;
                                i.igbid.filter((e => {
                                    return r = e,
                                    !(0,
                                    s.isEmptyStr)(r.impid) && (0,
                                    s.isArray)(r.igbuyer) && r.igbuyer.length;
                                    var r
                                }
                                )).forEach((i => {
                                    const a = {};
                                    i.igbuyer.filter((e => {
                                        return r = e,
                                        !(0,
                                        s.isEmptyStr)(r.igdomain);
                                        var r
                                    }
                                    )).forEach((e => {
                                        a[e.igdomain] = e.buyerdata
                                    }
                                    ));
                                    const o = [...Object.keys(a)];
                                    o.length && (r = r || {},
                                    r[i.impid] = {
                                        seller: e,
                                        decisionLogicUrl: t,
                                        sellerTimeout: n,
                                        interestGroupBuyers: o,
                                        perBuyerSignals: a
                                    })
                                }
                                ))
                            }
                            return r ? (r = Object.entries(r).map((e => {
                                let[r,t] = e;
                                return {
                                    bidId: r,
                                    config: Object.assign({
                                        auctionSignals: {}
                                    }, t)
                                }
                            }
                            )),
                            {
                                bids: e,
                                paapi: r
                            }) : e
                        } catch (e) {
                            return (0,
                            s.logError)("Could not interpret bidresponse, error details:", e),
                            e
                        }
                    },
                    getUserSyncs: function(e, r, t, i, s) {
                        try {
                            const a = [];
                            if (r && 0 !== r.length) {
                                if (e.iframeEnabled) {
                                    const e = r.filter((e => (0,
                                    n.A)(e, "body.ext.iid"))).map((e => e.body.ext.iid))
                                      , o = [];
                                    t && t.gdprApplies && "string" == typeof t.consentString && o.push(["gdpr_consent", t.consentString]),
                                    i && o.push(["us_privacy", i]),
                                    s && (o.push(["gpp", s.gppString]),
                                    o.push(["gpp_sid", s.applicableSections])),
                                    e[0] && (o.push(["informer", e[0]]),
                                    a.push({
                                        type: "iframe",
                                        url: "https://ce.lijit.com/beacon?" + o.map((e => e.join("="))).join("&")
                                    }))
                                }
                                e.pixelEnabled && r.filter((e => (0,
                                n.A)(e, "body.ext.sync.pixels"))).reduce(( (e, r) => e.concat(r.body.ext.sync.pixels)), []).map((e => e.url)).forEach((e => a.push({
                                    type: "image",
                                    url: e
                                })))
                            }
                            return a
                        } catch (e) {
                            return []
                        }
                    }
                };
                function u(e) {
                    const r = e.getFloor && "function" == typeof e.getFloor ? e.getFloor({
                        currency: "USD",
                        mediaType: e.mediaTypes && e.mediaTypes.banner ? "banner" : "video",
                        size: "*"
                    }) : {}
                      , t = parseFloat(r?.floor);
                    if (!isNaN(t))
                        return t;
                    const i = parseFloat((0,
                    s.getBidIdParameter)("bidfloor", e.params));
                    return isNaN(i) ? void 0 : i
                }
                (0,
                o.a$)(l),
                (0,
                i.E)("sovrnBidAdapter")
            }
        }, e => {
            e.O(0, [99498, 60802, 37769, 12139, 51085], ( () => {
                return r = 32605,
                e(e.s = r);
                var r
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[4085], {
            43297: (e, n, t) => {
                var r = t(7873)
                  , o = t(91069)
                  , u = t(70433)
                  , s = t(43272)
                  , p = t(11445)
                  , i = t(16916)
                  , l = t(75023)
                  , c = t(78969)
                  , a = t(45569)
                  , d = t(2604)
                  , f = t(95139)
                  , g = t(76811);
                const h = {
                    purpose: {},
                    feature: {}
                }
                  , v = {
                    purpose: !1,
                    feature: "specialFeatureOptins"
                }
                  , m = {
                    storage: {
                        type: "purpose",
                        default: {
                            purpose: "storage",
                            enforcePurpose: !0,
                            enforceVendor: !0,
                            vendorExceptions: []
                        },
                        id: 1
                    },
                    basicAds: {
                        type: "purpose",
                        id: 2,
                        default: {
                            purpose: "basicAds",
                            enforcePurpose: !0,
                            enforceVendor: !0,
                            vendorExceptions: []
                        }
                    },
                    personalizedAds: {
                        type: "purpose",
                        id: 4
                    },
                    measurement: {
                        type: "purpose",
                        id: 7
                    },
                    transmitPreciseGeo: {
                        type: "feature",
                        id: 1
                    }
                }
                  , y = new Set
                  , B = new Set
                  , E = new Set
                  , k = new Set
                  , q = new Set
                  , A = new Set;
                let $ = !1
                  , b = !1;
                const C = [a.tW, a.fW, a.Tn, a.zu]
                  , D = "TCF2"
                  , w = []
                  , O = [2]
                  , W = [2, 7, 9, 10];
                function P(e, n, t, r) {
                    const o = (0,
                    u.A)(e, `vendorData.${n}`);
                    return !!o?.consents?.[t] || r && !!o?.legitimateInterests?.[t]
                }
                function S(e, n, t, r) {
                    let o;
                    if (!1 !== v[n])
                        o = !!(0,
                        u.A)(e, `vendorData.${v[n]}.${t}`);
                    else {
                        const [n,u] = r === i.B1 ? ["publisher", W] : ["purpose", O];
                        o = P(e, n, t, u.includes(t))
                    }
                    return {
                        purpose: o,
                        vendor: P(e, "vendor", r, O.includes(t))
                    }
                }
                function T(e, n, t, r) {
                    const o = m[e.purpose];
                    if ((e.vendorExceptions || []).includes(t))
                        return !0;
                    const u = e.enforceVendor && !(r === i.B1 || (e.softVendorExceptions || []).includes(t))
                      , {purpose: s, vendor: p} = S(n, o.type, o.id, r);
                    return (!e.enforcePurpose || s) && (!u || p)
                }
                function x(e, n) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => null;
                    return function(u) {
                        const p = i.mW.getConsentData()
                          , l = u[d.iK];
                        if (function(e, n, t) {
                            return null == e && i.mW.enabled ? ((0,
                            o.logWarn)(`Attempting operation that requires purpose ${n} consent while consent data is not available${t ? ` (module: ${t})` : ""}. Assuming no consent was given.`),
                            !0) : e && e.gdprApplies
                        }(p, e, l)) {
                            const e = function(e, n, t) {
                                if (n) {
                                    const r = s.$W.getConfig("gvlMapping");
                                    if (r && r[n])
                                        return r[n];
                                    if (e === a.tp)
                                        return i.B1;
                                    {
                                        let {gvlid: r, modules: u} = i.o2.get(n);
                                        if (null == r && Object.keys(u).length > 0)
                                            for (const t of C)
                                                if (u.hasOwnProperty(t)) {
                                                    r = u[t],
                                                    t !== e && (0,
                                                    o.logWarn)(`Multiple GVL IDs found for module '${n}'; using the ${t} module's ID (${r}) instead of the ${e}'s ID (${u[e]})`);
                                                    break
                                                }
                                        return null == r && t && (r = t()),
                                        r || null
                                    }
                                }
                                return null
                            }(u[d.Dk], l, r(u));
                            let c = !!n(p, l, e);
                            if (!c)
                                return t && t.add(l),
                                {
                                    allow: c
                                }
                        }
                    }
                }
                function F(e) {
                    return x(e, ( (n, t, r) => !!T(h.purpose[e], n, t, r)), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null)
                }
                function M(e) {
                    return function(n) {
                        if (n[d.Dk] !== a.tp)
                            return e(n)
                    }
                }
                const V = (j = F(1, y),
                function(e) {
                    if (e[d.Dk] !== a.tp || b)
                        return j(e)
                }
                );
                var j;
                const I = F(1, y)
                  , N = F(1, y)
                  , z = M(F(2, B))
                  , G = F(7, E, (e => function(e, n) {
                    const t = p.Ay.getAnalyticsAdapter(e);
                    return (r => {
                        if ("function" != typeof r)
                            return r;
                        try {
                            return r.call(t.adapter, n)
                        } catch (n) {
                            (0,
                            o.logError)(`Error invoking ${e} adapter.gvlid()`, n)
                        }
                    }
                    )(t?.adapter?.gvlid)
                }(e[d.iK], e[d.TQ])))
                  , K = F(4, k)
                  , L = M(( () => {
                    const e = x("2-10", (function(e, n, t) {
                        for (let r = 2; r <= 10; r++) {
                            if (h.purpose[r]?.vendorExceptions?.includes(n))
                                return !0;
                            const {purpose: o, vendor: u} = S(e, "purpose", r, t);
                            if (o && (u || h.purpose[r]?.softVendorExceptions?.includes(n)))
                                return !0
                        }
                        return !1
                    }
                    ), q)
                      , n = F(4, q);
                    return function() {
                        return (h.purpose[4]?.eidsRequireP4Consent ? n : e).apply(this, arguments)
                    }
                }
                )())
                  , R = x("Special Feature 1", ( (e, n, t) => T(h.feature[1], e, n, t)), A);
                l.on(c.qY.AUCTION_END, (function() {
                    const e = function(e) {
                        return Array.from(e.keys()).filter((e => null != e))
                    }
                      , n = {
                        storageBlocked: e(y),
                        biddersBlocked: e(B),
                        analyticsBlocked: e(E),
                        ufpdBlocked: e(k),
                        eidsBlocked: e(q),
                        geoBlocked: e(A)
                    };
                    l.emit(c.qY.TCF2_ENFORCEMENT, n),
                    [y, B, E, k, q, A].forEach((e => e.clear()))
                }
                )),
                s.$W.getConfig("consentManagement", (e => function(e) {
                    let n = (0,
                    u.A)(e, "gdpr.rules");
                    n || (0,
                    o.logWarn)("TCF2: enforcing P1 and P2 by default"),
                    n = Object.fromEntries((n || []).map((e => [e.purpose, e]))),
                    b = !!(0,
                    u.A)(e, "strictStorageEnforcement"),
                    Object.entries(m).forEach((e => {
                        let[t,r] = e;
                        h[r.type][r.id] = n[t] ?? r.default
                    }
                    )),
                    $ || (null != h.purpose[1] && ($ = !0,
                    w.push((0,
                    f.qB)(g.Ue, D, V)),
                    w.push((0,
                    f.qB)(g.Ml, D, I)),
                    w.push((0,
                    f.qB)(g.yl, D, N))),
                    null != h.purpose[2] && w.push((0,
                    f.qB)(g.uc, D, z)),
                    null != h.purpose[4] && w.push((0,
                    f.qB)(g.DL, D, K), (0,
                    f.qB)(g.qX, D, K)),
                    null != h.purpose[7] && w.push((0,
                    f.qB)(g.mo, D, G)),
                    null != h.feature[1] && w.push((0,
                    f.qB)(g.hE, D, R)),
                    w.push((0,
                    f.qB)(g.hq, D, L)))
                }(e.consentManagement))),
                (0,
                r.E)("tcfControl")
            }
        }, e => {
            e.O(0, [60802, 37769, 12139, 51085], ( () => {
                return n = 43297,
                e(e.s = n);
                var n
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[94183], {
            63429: (e, r, t) => {
                var i = t(7873)
                  , a = t(63172)
                  , s = t(91069)
                  , n = t(70433)
                  , p = t(43272)
                  , o = t(57377)
                  , d = t(71371)
                  , m = t(91223);
                const u = "ttd"
                  , l = 1
                  , c = 2;
                function g(e) {
                    return {
                        ttdprebid: {
                            ver: "TTD-PREBID-2025.04.25",
                            pbjs: "9.44.1",
                            keywords: e.site?.keywords ? e.site.keywords.split(",").map((e => e.trim())) : []
                        }
                    }
                }
                function b(e) {
                    let r = {};
                    return e.gdprConsent && "boolean" == typeof e.gdprConsent.gdprApplies && a.J(r, "ext.gdpr", e.gdprConsent.gdprApplies ? 1 : 0),
                    e.uspConsent && a.J(r, "ext.us_privacy", e.uspConsent),
                    !0 === p.$W.getConfig("coppa") && (r.coppa = 1),
                    e.ortb2?.regs && s.mergeDeep(r, e.ortb2.regs),
                    r
                }
                function f(e, r) {
                    let t = {
                        tid: r?.ortb2?.source?.tid
                    };
                    return e[0].schain && a.J(t, "ext.schain", e[0].schain),
                    t
                }
                function y(e) {
                    const r = navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;
                    let t = {
                        ua: navigator.userAgent,
                        dnt: s.getDNT() ? 1 : 0,
                        language: r,
                        connectiontype: (0,
                        m.Z)()
                    };
                    return s.mergeDeep(t, e.device),
                    t
                }
                function h(e, r) {
                    let t = {};
                    e.gdprConsent && a.J(t, "ext.consent", e.gdprConsent.consentString),
                    s.isStr(n.A(e, "bids.0.userId.tdid")) && (t.buyeruid = e.bids[0].userId.tdid);
                    var i = n.A(e, "bids.0.userIdAsEids");
                    return i && i.length && a.J(t, "ext.eids", i),
                    s.mergeDeep(t, r.user),
                    t
                }
                function v(e, r) {
                    var t = s.mergeDeep({
                        page: n.A(e, "refererInfo.page"),
                        ref: n.A(e, "refererInfo.ref"),
                        publisher: {
                            id: n.A(e, "bids.0.params.publisherId")
                        }
                    }, r.site)
                      , i = e.refererInfo.domain;
                    return i && a.J(t, "publisher.domain", i),
                    t
                }
                function I(e) {
                    let r = {
                        id: e.bidId
                    };
                    const t = n.A(e, "ortb2Imp.ext.gpid") || e.params.placementId;
                    t && (r.tagid = t);
                    const i = n.A(e, "mediaTypes.video");
                    let a = {};
                    n.A(e, "mediaTypes.banner") && (a[d.D4] = function(e) {
                        const r = function(e) {
                            const r = s.parseSizesInput(e).filter((e => e)).map((e => e.split("x"))).map((e => ({
                                width: parseInt(e[0]),
                                height: parseInt(e[1])
                            })));
                            return r
                        }(e.mediaTypes.banner.sizes).map((e => ({
                            w: e.width,
                            h: e.height
                        })))
                          , t = parseInt(n.A(e, "mediaTypes.banner.pos"))
                          , i = n.A(e, "params.banner.expdir");
                        let a = {};
                        t && (a.pos = t);
                        i && Array.isArray(i) && (a.expdir = i);
                        const p = Object.assign({
                            w: r[0].w,
                            h: r[0].h,
                            format: r
                        }, a)
                          , o = n.A(e, "ortb2Imp.banner.battr");
                        o && (p.battr = o);
                        return p
                    }(e)),
                    i && (a[d.G_] = function(e) {
                        {
                            let r = n.A(e, "mediaTypes.video.minduration");
                            const t = n.A(e, "mediaTypes.video.maxduration")
                              , i = n.A(e, "mediaTypes.video.playerSize")
                              , a = n.A(e, "mediaTypes.video.api")
                              , p = n.A(e, "mediaTypes.video.mimes")
                              , o = n.A(e, "mediaTypes.video.placement")
                              , d = n.A(e, "mediaTypes.video.plcmt")
                              , m = n.A(e, "mediaTypes.video.protocols")
                              , u = n.A(e, "mediaTypes.video.playbackmethod")
                              , l = n.A(e, "mediaTypes.video.pos")
                              , c = n.A(e, "mediaTypes.video.startdelay")
                              , g = n.A(e, "mediaTypes.video.skip")
                              , b = n.A(e, "mediaTypes.video.skipmin")
                              , f = n.A(e, "mediaTypes.video.skipafter")
                              , y = n.A(e, "mediaTypes.video.minbitrate")
                              , h = n.A(e, "mediaTypes.video.maxbitrate");
                            r && s.isInteger(r) || (r = 0);
                            let v = {
                                minduration: r,
                                maxduration: t,
                                api: a,
                                mimes: p,
                                placement: o,
                                protocols: m
                            };
                            void 0 !== i && (s.isArray(i[0]) ? (v.w = parseInt(i[0][0]),
                            v.h = parseInt(i[0][1])) : s.isNumber(i[0]) && (v.w = parseInt(i[0]),
                            v.h = parseInt(i[1]))),
                            u && (v.playbackmethod = u),
                            d && (v.plcmt = d),
                            l && (v.pos = l),
                            c && s.isInteger(c) && (v.startdelay = c),
                            !g || 0 !== g && 1 !== g || (v.skip = g),
                            b && s.isInteger(b) && (v.skipmin = b),
                            f && s.isInteger(f) && (v.skipafter = f),
                            y && s.isInteger(y) && (v.minbitrate = y),
                            h && s.isInteger(h) && (v.maxbitrate = h);
                            const I = n.A(e, "ortb2Imp.video.battr");
                            return I && (v.battr = I),
                            v
                        }
                    }(e)),
                    Object.assign(r, a);
                    let p = function(e) {
                        if (e.params.bidfloor)
                            return e.params.bidfloor;
                        if (!s.isFn(e.getFloor))
                            return null;
                        let r = e.getFloor({
                            currency: "USD",
                            mediaType: "*",
                            size: "*"
                        });
                        return s.isPlainObject(r) && !isNaN(r.floor) && "USD" === r.currency ? r.floor : null
                    }(e);
                    p && (r.bidfloor = parseFloat(p),
                    r.bidfloorcur = "USD");
                    const o = n.A(e, "ortb2Imp.secure");
                    r.secure = (0,
                    s.isNumber)(o) ? o : 1;
                    const {video: m, ...u} = e.ortb2Imp;
                    return s.mergeDeep(r, u),
                    r
                }
                const A = {
                    code: u,
                    gvlid: 21,
                    aliases: ["thetradedesk"],
                    supportedMediaTypes: [d.D4, d.G_],
                    isBidRequestValid: function(e) {
                        if (!e || !e.params)
                            return s.logWarn(u + ": Missing bid parameters"),
                            !1;
                        if (!e.params.supplySourceId)
                            return s.logWarn(u + ": Missing required parameter params.supplySourceId"),
                            !1;
                        if (!/^[\w+]+$/.test(e.params.supplySourceId))
                            return s.logWarn(u + ": supplySourceId must only contain alphabetic characters"),
                            !1;
                        if (!e.params.publisherId)
                            return s.logWarn(u + ": Missing required parameter params.publisherId"),
                            !1;
                        if (e.params.publisherId.length > 32)
                            return s.logWarn(u + ": params.publisherId must be 32 characters or less"),
                            !1;
                        if (e.params.bidfloor && isNaN(parseFloat(e.params.bidfloor)))
                            return !1;
                        const r = n.A(e, "ortb2Imp.ext.gpid");
                        if (!e.params.placementId && !r)
                            return s.logWarn(u + ": one of params.placementId or gpid (via the GPT module https://docs.prebid.org/dev-docs/modules/gpt-pre-auction.html) must be passed"),
                            !1;
                        const t = n.A(e, "mediaTypes.banner")
                          , i = n.A(e, "mediaTypes.video");
                        if (!t && !i)
                            return s.logWarn(u + ": one of mediaTypes.banner or mediaTypes.video must be passed"),
                            !1;
                        if (i) {
                            if (!i.maxduration || !s.isInteger(i.maxduration))
                                return s.logWarn(u + ": mediaTypes.video.maxduration must be set to the maximum video ad duration in seconds"),
                                !1;
                            if (!i.api || 0 === i.api.length)
                                return s.logWarn(u + ": mediaTypes.video.api should be an array of supported api frameworks. See the Open RTB v2.5 spec for valid values"),
                                !1;
                            if (!i.mimes || 0 === i.mimes.length)
                                return s.logWarn(u + ": mediaTypes.video.mimes should be an array of supported mime types"),
                                !1;
                            if (!i.protocols)
                                return s.logWarn(u + ": mediaTypes.video.protocols should be an array of supported protocols. See the Open RTB v2.5 spec for valid values"),
                                !1
                        }
                        return !0
                    },
                    buildRequests: function(e, r) {
                        const t = r.ortb2 || {}
                          , i = r.ortb2Imp || {};
                        let a = {
                            id: r.bidderRequestId,
                            imp: e.map((e => I(e))),
                            site: v(r, t),
                            device: y(t),
                            user: h(r, t),
                            at: 1,
                            tmax: Math.max(r.timeout || 400, 400),
                            cur: ["USD"],
                            regs: b(r),
                            source: f(e, r),
                            ext: g(t)
                        };
                        return t && t.bcat && (a.bcat = t.bcat),
                        t && t.badv && (a.badv = t.badv),
                        t && t.app && (a.app = t.app),
                        (t && t.pmp || i && i.pmp) && a.imp.forEach((e => {
                            e.pmp = s.mergeDeep({}, e.pmp || {}, t?.pmp || {}, i?.pmp || {})
                        }
                        )),
                        {
                            method: "POST",
                            url: (r.bids[0].params.useHttp2 ? "https://d2.adsrvr.org/bid/bidder/" : "https://direct.adsrvr.org/bid/bidder/") + r.bids[0].params.supplySourceId,
                            data: a,
                            options: {
                                withCredentials: !0
                            }
                        }
                    },
                    interpretResponse: function(e, r) {
                        let t = n.A(e, "body.seatbid");
                        const i = n.A(e, "body.cur");
                        if (!t || 0 === t.length)
                            return [];
                        let a = []
                          , p = n.A(r, "data.imp");
                        return t.forEach((e => {
                            e.bid.forEach((e => {
                                let r = p.find((r => r.id === e.impid));
                                const t = e.price || 0;
                                let n = {
                                    requestId: e.impid,
                                    cpm: t,
                                    creativeId: e.crid,
                                    dealId: e.dealid || null,
                                    currency: i || "USD",
                                    netRevenue: !0,
                                    ttl: e.ttl || 360,
                                    meta: {}
                                };
                                e.adomain && e.adomain.length > 0 && (n.meta.advertiserDomains = e.adomain),
                                e.ext.mediatype === l ? Object.assign(n, {
                                    width: e.w,
                                    height: e.h,
                                    ad: s.replaceAuctionPrice(e.adm, t),
                                    mediaType: d.D4
                                }) : e.ext.mediatype === c && (Object.assign(n, {
                                    width: r.video.w,
                                    height: r.video.h,
                                    mediaType: d.G_
                                }),
                                e.nurl ? n.vastUrl = s.replaceAuctionPrice(e.nurl, t) : n.vastXml = s.replaceAuctionPrice(e.adm, t)),
                                a.push(n)
                            }
                            ))
                        }
                        )),
                        a
                    },
                    getUserSyncs: function(e, r) {
                        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        const a = [];
                        let s = `&gdpr=${t.gdprApplies ? 1 : 0}&gdpr_consent=${encodeURIComponent(t.consentString)}`
                          , n = `https://match.adsrvr.org/track/usersync?us_privacy=${encodeURIComponent(i)}${s}`;
                        return e.pixelEnabled ? a.push({
                            type: "image",
                            url: n + "&ust=image"
                        }) : e.iframeEnabled && a.push({
                            type: "iframe",
                            url: n + "&ust=iframe"
                        }),
                        a
                    }
                };
                (0,
                o.a$)(A),
                (0,
                i.E)("ttdBidAdapter")
            }
        }, e => {
            e.O(0, [40259, 60802, 37769, 12139, 51085], ( () => {
                return r = 63429,
                e(e.s = r);
                var r
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[68907], {
            85263: (e, r, t) => {
                var n = t(7873)
                  , o = t(91069)
                  , i = t(16833)
                  , a = t(12938)
                  , s = t(45569)
                  , u = t(20947)
                  , d = t(50646);
                const p = "uid2"
                  , l = `PrebidJS-9.44.1-UID2Module-${u.kz}`
                  , c = "UID2: ";
                function f(e, r) {
                    return function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        e(r + " ", ...n)
                    }
                }
                const m = f(o.logInfo, c)
                  , k = f(o.logWarn, c)
                  , g = (0,
                a.vM)({
                    moduleType: s.fW,
                    moduleName: p
                })
                  , I = {
                    name: p,
                    decode(e) {
                        const r = function(e) {
                            if ("string" == typeof e) {
                                m("Found server-only token. Refresh is unavailable for this token.");
                                return {
                                    uid2: {
                                        id: e
                                    }
                                }
                            }
                            if ("optout" === e.latestToken)
                                return m("Found optout token.  Refresh is unavailable for this token."),
                                {
                                    uid2: {
                                        optout: !0
                                    }
                                };
                            if (Date.now() < e.latestToken.identity_expires)
                                return {
                                    uid2: {
                                        id: e.latestToken.advertising_token
                                    }
                                };
                            return null
                        }(e);
                        return m("UID2 decode returned", r),
                        r
                    },
                    getId(e, r) {
                        if (!0 === r?.gdpr?.gdprApplies)
                            return void k("UID2 is not intended for use where GDPR applies. The UID2 module will not run.");
                        const t = {
                            apiBaseUrl: e?.params?.uid2ApiBase ?? "https://prod.uidapi.com",
                            paramToken: e?.params?.uid2Token,
                            serverCookieName: e?.params?.uid2Cookie ?? e?.params?.uid2ServerCookie,
                            storage: e?.params?.storage ?? "localStorage",
                            clientId: l,
                            internalStorage: "__uid2_advertising_token"
                        };
                        t.cstg = {
                            serverPublicKey: e?.params?.serverPublicKey,
                            subscriptionId: e?.params?.subscriptionId,
                            ...(0,
                            u.E0)(e?.params ?? {})
                        },
                        m("UID2 configuration loaded and mapped.", t);
                        const n = (0,
                        u.wq)(t, g, m, k);
                        return m("UID2 getId returned", n),
                        n
                    },
                    eids: d.x
                };
                (0,
                i.bz)("userId", I),
                (0,
                n.E)("uid2IdSystem")
            }
        }, e => {
            e.O(0, [51912, 44950, 60802, 37769, 12139, 51085], ( () => {
                return r = 85263,
                e(e.s = r);
                var r
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[73469], {
            34836: (e, t, n) => {
                var o = n(7873)
                  , r = n(15901)
                  , s = n(43272)
                  , i = n(75023)
                  , a = n(11445)
                  , l = n(78969)
                  , c = n(16833)
                  , u = n(91069);
                const d = new Map;
                function f(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
                    const n = {};
                    function o(e) {
                        const t = JSON.stringify([e.source?.toLowerCase(), ...Object.keys(e).filter((e => !["uids", "source"].includes(e))).sort().map((t => e[t]))]);
                        n.hasOwnProperty(t) ? n[t].uids.push(...e.uids) : n[t] = e
                    }
                    return Object.entries(e).forEach((e => {
                        let[n,r] = e;
                        r = Array.isArray(r) ? r : [r];
                        const s = t.get(n);
                        let i;
                        if ("pubProvidedId" === n)
                            i = (0,
                            u.deepClone)(r);
                        else if ("function" == typeof s)
                            try {
                                i = s(r),
                                Array.isArray(i) || (i = [i]),
                                i.forEach((e => e.uids = e.uids.filter((e => {
                                    let {id: t} = e;
                                    return (0,
                                    u.isStr)(t)
                                }
                                )))),
                                i = i.filter((e => {
                                    let {uids: t} = e;
                                    return t?.length > 0
                                }
                                ))
                            } catch (e) {
                                (0,
                                u.logError)(`Could not generate EID for "${n}"`, e)
                            }
                        else
                            i = r.map((e => function(e, t, n) {
                                if (n && e) {
                                    let t = {};
                                    t.source = (0,
                                    u.isFn)(n.getSource) ? n.getSource(e) : n.source;
                                    const o = (0,
                                    u.isFn)(n.getValue) ? n.getValue(e) : e;
                                    if ((0,
                                    u.isStr)(o)) {
                                        const r = {
                                            id: o,
                                            atype: n.atype
                                        };
                                        if ((0,
                                        u.isFn)(n.getUidExt)) {
                                            const t = n.getUidExt(e);
                                            t && (r.ext = t)
                                        }
                                        if (t.uids = [r],
                                        (0,
                                        u.isFn)(n.getEidExt)) {
                                            const o = n.getEidExt(e);
                                            o && (t.ext = o)
                                        }
                                        return t
                                    }
                                }
                                return null
                            }(e, 0, s)));
                        Array.isArray(i) && i.filter((e => null != e)).forEach(o)
                    }
                    )),
                    Object.values(n)
                }
                function g(e) {
                    const t = new Map
                      , n = {};
                    return Object.entries(e).forEach((e => {
                        let[o,r] = e;
                        const s = r();
                        if (s) {
                            n[o] = s.idObj[o];
                            let e = s.submodule.eids?.[o];
                            "function" == typeof e && (i = e,
                            e = function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n];
                                return i(...t, s.config)
                            }
                            ),
                            t.set(o, e)
                        }
                        var i
                    }
                    )),
                    f(n, t)
                }
                var m = n(12938)
                  , b = n(63172)
                  , h = n(51692)
                  , p = n(25555)
                  , y = n(16894)
                  , I = n(5973)
                  , w = n(16916)
                  , S = n(45569)
                  , E = n(95139)
                  , D = n(76811)
                  , v = n(83441)
                  , O = n(38230)
                  , k = n(77332);
                const j = "User ID"
                  , $ = m.X0
                  , A = m.qk
                  , C = "_pbjs_id_optout"
                  , T = (0,
                m.CK)("userId")
                  , U = {
                    isAllowed: E.io
                };
                let x, N, P, L, _, F, W = [], q = [], M = {}, G = [];
                const J = ( () => {
                    let e;
                    return () => (null == e && (e = (0,
                    y.K7)()),
                    e)
                }
                )();
                function R(e) {
                    return J().fork().renameWith((t => [`userId.mod.${t}`, `userId.mods.${e}.${t}`]))
                }
                function H(e, t) {
                    t = t || e.storageMgr;
                    const n = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null
                      , o = e.config.storage.name;
                    return function(e, r, s) {
                        t.setCookie(o + (e || ""), r, s, "Lax", n)
                    }
                }
                function B(e, t) {
                    const n = e.config.storage;
                    try {
                        const o = new Date(Date.now() + 864e5 * n.expires).toUTCString()
                          , r = (0,
                        u.isPlainObject)(t) ? JSON.stringify(t) : t;
                        e.enabledStorageTypes.forEach((t => {
                            switch (t) {
                            case $:
                                !function(e, t, n) {
                                    const o = e.config.storage
                                      , r = H(e);
                                    r(null, t, n),
                                    r("_cst", be(), n),
                                    "number" == typeof o.refreshInSeconds && r("_last", (new Date).toUTCString(), n)
                                }(e, r, o);
                                break;
                            case A:
                                !function(e, t, n) {
                                    const o = e.config.storage
                                      , r = e.storageMgr;
                                    r.setDataInLocalStorage(`${o.name}_exp`, n),
                                    r.setDataInLocalStorage(`${o.name}_cst`, be()),
                                    r.setDataInLocalStorage(o.name, encodeURIComponent(t)),
                                    "number" == typeof o.refreshInSeconds && r.setDataInLocalStorage(`${o.name}_last`, (new Date).toUTCString())
                                }(e, r, o)
                            }
                        }
                        ))
                    } catch (e) {
                        (0,
                        u.logError)(e)
                    }
                }
                function K(e) {
                    Ee(e),
                    e.enabledStorageTypes.forEach((t => {
                        switch (t) {
                        case $:
                            !function(e) {
                                const t = H(e, T)
                                  , n = new Date(Date.now() - 864e5).toUTCString();
                                ["", "_last", "_cst"].forEach((e => {
                                    try {
                                        t(e, "", n)
                                    } catch (e) {
                                        (0,
                                        u.logError)(e)
                                    }
                                }
                                ))
                            }(e);
                            break;
                        case A:
                            !function(e) {
                                ["", "_last", "_exp", "_cst"].forEach((t => {
                                    try {
                                        T.removeDataFromLocalStorage(e.config.storage.name + t)
                                    } catch (e) {
                                        (0,
                                        u.logError)(e)
                                    }
                                }
                                ))
                            }(e)
                        }
                    }
                    ))
                }
                function V(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    const n = e.config.storage
                      , o = t ? `${n.name}_${t}` : n.name;
                    let r;
                    try {
                        e.enabledStorageTypes.find((t => {
                            switch (t) {
                            case $:
                                r = function(e, t) {
                                    return e.storageMgr.getCookie(t)
                                }(e, o);
                                break;
                            case A:
                                r = function(e, t) {
                                    const n = e.storageMgr
                                      , o = e.config.storage
                                      , r = n.getDataFromLocalStorage(`${o.name}_exp`);
                                    return "" === r ? n.getDataFromLocalStorage(t) : r && new Date(r).getTime() - Date.now() > 0 ? decodeURIComponent(n.getDataFromLocalStorage(t)) : void 0
                                }(e, o)
                            }
                            return !!r
                        }
                        )),
                        "string" == typeof r && "{" === r.trim().charAt(0) && (r = JSON.parse(r))
                    } catch (e) {
                        (0,
                        u.logError)(e)
                    }
                    return r
                }
                function Y(e, t, n) {
                    t = J().fork().startTiming("userId.callbacks.total").stopBefore(t);
                    const o = (0,
                    u.delayExecution)(( () => {
                        clearTimeout(N),
                        t()
                    }
                    ), e.length);
                    e.forEach((function(e) {
                        const t = R(e.submodule.name).startTiming("callback").stopBefore(o);
                        try {
                            e.callback((function(o) {
                                o ? (e.config.storage && B(e, o),
                                e.idObj = e.submodule.decode(o, e.config),
                                n.refresh(),
                                pe(n)) : (0,
                                u.logInfo)(`${j}: ${e.submodule.name} - request id responded with an empty value`),
                                t()
                            }
                            ), V.bind(null, e))
                        } catch (n) {
                            (0,
                            u.logError)(`Error in userID module '${e.submodule.name}':`, n),
                            t()
                        }
                        e.callback = void 0
                    }
                    ))
                }
                function z(e) {
                    return Object.fromEntries(Object.entries(e).map((e => {
                        let[t,n] = e;
                        return [t, n()?.idObj?.[t]]
                    }
                    )).filter((e => {
                        let[t,n] = e;
                        return null != n
                    }
                    )))
                }
                function Q(e, t, n) {
                    const o = {};
                    return e.forEach((e => {
                        const r = n(e)
                          , s = function(e) {
                            if (e.primaryIds)
                                return e.primaryIds;
                            const t = Object.keys(e.eids ?? {});
                            if (t.length > 1)
                                throw new Error(`ID submodule ${e.name} can provide multiple IDs, but does not specify 'primaryIds'`);
                            return t
                        }(r);
                        t(e).forEach((t => {
                            const n = o[t] = o[t] ?? []
                              , i = M[t]?.indexOf(r.name) ?? (s.includes(t) ? 0 : -1)
                              , a = n.findIndex((e => {
                                let[t] = e;
                                return t < i
                            }
                            ));
                            n.splice(-1 === a ? n.length : a, 0, [i, e])
                        }
                        ))
                    }
                    )),
                    Object.fromEntries(Object.entries(o).map((e => {
                        let[t,n] = e;
                        return [t, n.map((e => {
                            let[t,n] = e;
                            return n
                        }
                        ))]
                    }
                    )))
                }
                function X() {
                    const e = {
                        submodules: [],
                        global: {},
                        bidder: {},
                        combined: {},
                        refresh() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            const n = new Set(t.map((e => e.submodule)));
                            e.submodules = e.submodules.filter((e => !n.has(e.submodule))).concat(t),
                            function() {
                                const t = Q(e.submodules, (e => Object.keys(e.idObj ?? {})), (e => e.submodule))
                                  , n = {}
                                  , o = {};
                                function r(e, t, n) {
                                    return function() {
                                        for (const {allowed: o, bidders: r, module: s} of n) {
                                            if (!U.isAllowed(D.yl, (0,
                                            v.s)(S.fW, s?.config?.name, {
                                                init: !1
                                            })))
                                                continue;
                                            const i = s.idObj?.[e];
                                            if (null != i) {
                                                if (o)
                                                    return s;
                                                if (t) {
                                                    const t = e => e.map((e => e.module.submodule.name)).join(", ");
                                                    return (0,
                                                    u.logWarn)(`userID modules ${t(n)} provide the same ID ('${e}'); ${s.submodule.name} is the preferred source, but it's configured only for some bidders, unlike ${t(n.filter((e => null == e.bidders)))}. Other bidders will not see the "${e}" ID.`),
                                                    null
                                                }
                                                if (null == r)
                                                    return null
                                            }
                                        }
                                        return null
                                    }
                                }
                                Object.entries(t).forEach((e => {
                                    let[t,s] = e
                                      , i = !0;
                                    const a = new Set;
                                    s = s.map((e => {
                                        let t = null;
                                        return Array.isArray(e.config.bidders) && e.config.bidders.length > 0 ? (t = e.config.bidders,
                                        t.forEach((e => a.add(e)))) : i = !1,
                                        {
                                            module: e,
                                            bidders: t
                                        }
                                    }
                                    )),
                                    i || (n[t] = r(t, !0, s.map((e => {
                                        let {bidders: t, module: n} = e;
                                        return {
                                            allowed: null == t,
                                            bidders: t,
                                            module: n
                                        }
                                    }
                                    )))),
                                    a.forEach((e => {
                                        o[e] = o[e] ?? {},
                                        o[e][t] = r(t, !1, s.map((t => {
                                            let {bidders: n, module: o} = t;
                                            return {
                                                allowed: n?.includes(e),
                                                bidders: n,
                                                module: o
                                            }
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ));
                                const s = Object.values(o).concat([n]).reduce(( (e, t) => Object.assign(e, t)), {});
                                Object.assign(e, {
                                    global: n,
                                    bidder: o,
                                    combined: s
                                })
                            }()
                        }
                    };
                    return e
                }
                function Z(e) {
                    let {adUnits: t, ortb2Fragments: n} = e;
                    if (n = n ?? {
                        global: {},
                        bidder: {}
                    },
                    function(e) {
                        const {global: t, bidder: n} = e
                          , {global: o, bidder: r} = x
                          , s = g(o);
                        s.length > 0 && (0,
                        b.J)(t, "user.ext.eids", (t.user?.ext?.eids ?? []).concat(s)),
                        Object.entries(r).forEach((e => {
                            let[t,o] = e;
                            const r = g(o);
                            r.length > 0 && (0,
                            b.J)(n, `${t}.user.ext.eids`, (n[t]?.user?.ext?.eids ?? []).concat(r))
                        }
                        ))
                    }(n),
                    [t].some((e => !Array.isArray(e) || !e.length)))
                        return;
                    const o = z(x.global)
                      , r = n.global.user?.ext?.eids || [];
                    t.forEach((e => {
                        e.bids && (0,
                        u.isArray)(e.bids) && e.bids.forEach((e => {
                            const t = Object.assign({}, o, z(x.bidder[e.bidder] ?? {}))
                              , s = r.concat(n.bidder?.[e.bidder]?.user?.ext?.eids || []);
                            Object.keys(t).length > 0 && (e.userId = t),
                            s.length > 0 && (e.userIdAsEids = s)
                        }
                        ))
                    }
                    ))
                }
                const ee = {};
                let te;
                function ne() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae() || [];
                    const t = _ && e.find((e => e.source === _));
                    if (t && "string" == typeof t?.uids?.[0]?.id) {
                        const e = t.uids[0].id.replace(/[\W_]/g, "");
                        if (e.length >= 32 && e.length <= 150)
                            return e;
                        (0,
                        u.logWarn)(`User ID - Googletag Publisher Provided ID for ${_} is not between 32 and 150 characters - ${e}`)
                    }
                }
                const oe = (0,
                y.Ak)("userId", (function(e, t) {
                    let {mkDelay: n=p.cb, getIds: o=me} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    p.U9.race([o().catch(( () => null)), n(L)]).then(( () => {
                        Z(t),
                        J().join((0,
                        y.BO)(t.metrics), {
                            propagate: !1,
                            includeGroups: !0
                        }),
                        e.call(this, t)
                    }
                    ))
                }
                ))
                  , re = (0,
                y.Ak)("userId", (function(e, t) {
                    Z(t),
                    e.call(this, t)
                }
                ));
                function se() {
                    return !!k.gH.getHooks({
                        hook: oe
                    }).length
                }
                function ie() {
                    return z(x.combined)
                }
                function ae() {
                    return g(x.combined)
                }
                function le(e) {
                    return ae().filter((t => t.source === e))[0]
                }
                function ce(e, t, n) {
                    return fe().then(( () => {
                        let o = {};
                        if ((0,
                        u.isFn)(n)) {
                            (0,
                            u.logInfo)(`${j} - Getting encrypted signal from custom function : ${n.name} & source : ${e} `);
                            const t = n(e);
                            o[e] = t ? ue(t) : null
                        } else {
                            const n = le(e);
                            (0,
                            u.logInfo)(`${j} - Getting encrypted signal for eids :${JSON.stringify(n)}`),
                            (0,
                            u.isEmpty)(n) || (o[n.source] = !0 === t ? ue(n) : n.uids[0].id)
                        }
                        return (0,
                        u.logInfo)(`${j} - Fetching encrypted eids: ${o[e]}`),
                        o[e]
                    }
                    ))
                }
                function ue(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , n = "";
                    if (1 === t)
                        n = "object" == typeof e ? window.btoa(JSON.stringify(e)) : window.btoa(e);
                    return `${t}||${n}`
                }
                function de() {
                    if (!(0,
                    u.isGptPubadsDefined)())
                        return;
                    window.googletag.secureSignalProviders = window.googletag.secureSignalProviders || [];
                    const e = s.$W.getConfig("userSync.encryptedSignalSources");
                    if (e) {
                        const t = e.registerDelay || 0;
                        setTimeout(( () => {
                            e.sources && e.sources.forEach((e => {
                                let {source: t, encrypt: n, customFunc: o} = e;
                                t.forEach((e => {
                                    window.googletag.secureSignalProviders.push({
                                        id: e,
                                        collectorFunction: () => ce(e, n, o)
                                    })
                                }
                                ))
                            }
                            ))
                        }
                        ), t)
                    } else
                        (0,
                        u.logWarn)(`${j} - ESP : encryptedSignalSources config not defined under userSync Object`)
                }
                function fe(e) {
                    return te(e).then(( () => ie()), (e => e === ee ? Promise.resolve().then(me) : ((0,
                    u.logError)("Error initializing userId", e),
                    p.U9.reject(e))))
                }
                function ge() {
                    let {submoduleNames: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return fe({
                        refresh: !0,
                        submoduleNames: e
                    }).then((e => (t && (0,
                    u.isFn)(t) && t(),
                    e)))
                }
                function me() {
                    return fe()
                }
                function be() {
                    let e = Number(w.SL.hash);
                    const t = [];
                    for (; e > 0; )
                        t.push(String.fromCharCode(255 & e)),
                        e >>>= 8;
                    return btoa(t.join())
                }
                function he(e, t) {
                    const n = w.SL.getConsentData();
                    if (e.config.storage) {
                        let o, r = V(e), s = !1;
                        if ("number" == typeof e.config.storage.refreshInSeconds) {
                            const t = new Date(V(e, "last"));
                            s = t && Date.now() - t.getTime() > 1e3 * e.config.storage.refreshInSeconds
                        }
                        if (!r || s || t || function(e) {
                            const t = V(e, "cst");
                            return !t || t !== be()
                        }(e)) {
                            const t = Object.assign({
                                enabledStorageTypes: e.enabledStorageTypes
                            }, e.config);
                            o = e.submodule.getId(t, n, r)
                        } else
                            "function" == typeof e.submodule.extendId && (o = e.submodule.extendId(e.config, n, r));
                        (0,
                        u.isPlainObject)(o) && (o.id && (B(e, o.id),
                        r = o.id),
                        "function" == typeof o.callback && (e.callback = o.callback)),
                        r && (e.idObj = e.submodule.decode(r, e.config))
                    } else if (e.config.value)
                        e.idObj = e.config.value;
                    else {
                        const t = e.submodule.getId(e.config, n);
                        (0,
                        u.isPlainObject)(t) && ("function" == typeof t.callback && (e.callback = t.callback),
                        t.id && (e.idObj = e.submodule.decode(t.id, e.config)))
                    }
                }
                function pe(e) {
                    const t = g(e.combined);
                    if (t.length && _) {
                        const e = ne(t);
                        e && ((0,
                        u.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(e) : (window.googletag = window.googletag || {},
                        window.googletag.cmd = window.googletag.cmd || [],
                        window.googletag.cmd.push((function() {
                            window.googletag.pubads().setPublisherProvidedId(e)
                        }
                        ))))
                    }
                }
                function ye(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return J().fork().measureTime("userId.init.modules", (function() {
                        if (!t.length)
                            return [];
                        if (t.forEach((e => Ee(e))),
                        !(t = t.filter((e => (!e.config.storage || !!e.enabledStorageTypes.length) && U.isAllowed(D.yl, (0,
                        v.s)(S.fW, e.config.name))))).length)
                            return (0,
                            u.logWarn)(`${j} - no ID module configured`),
                            [];
                        const o = t.reduce(( (e, t) => R(t.submodule.name).measureTime("init", ( () => {
                            try {
                                he(t, n),
                                e.push(t)
                            } catch (e) {
                                (0,
                                u.logError)(`Error in userID module '${t.submodule.name}':`, e)
                            }
                            return e
                        }
                        ))), []);
                        return e.refresh(o),
                        pe(e),
                        o
                    }
                    ))
                }
                function Ie(e) {
                    return e?.storage?.type?.trim().split(/\s*&\s*/) || []
                }
                function we(e) {
                    function t(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        (0,
                        u.logWarn)(`Invalid userSync.userId config: ${e}`, ...n)
                    }
                    return Array.isArray(e) ? e.filter((e => {
                        if (!e?.name)
                            return t('must specify "name"', e);
                        if (e.storage) {
                            if (!e.storage.name || !e.storage.type)
                                return t('must specify "storage.name" and "storage.type"', e);
                            if (!function(e) {
                                return Ie(e).every((e => Se.has(e)))
                            }(e))
                                return t('invalid "storage.type"', e);
                            ["expires", "refreshInSeconds"].forEach((n => {
                                let o = e.storage[n];
                                null != o && "number" != typeof o && (o = Number(o),
                                isNaN(o) ? (t(`storage.${n} must be a number and will be ignored`, e),
                                delete e.storage[n]) : e.storage[n] = o)
                            }
                            ))
                        }
                        return !0
                    }
                    )) : (null != e && t("must be an array", e),
                    [])
                }
                const Se = new Set([A, $]);
                function Ee(e) {
                    if (e.enabledStorageTypes)
                        return;
                    const t = Ie(e.config);
                    e.enabledStorageTypes = t.filter((t => {
                        switch (t) {
                        case A:
                            return function(e) {
                                return !(!e.storageMgr.localStorageIsEnabled() || T.getDataFromLocalStorage(C) && ((0,
                                u.logInfo)(`${j} - opt-out localStorage found, storage disabled`),
                                1))
                            }(e);
                        case $:
                            return function(e) {
                                return !(!e.storageMgr.cookiesAreEnabled() || T.getCookie(C) && ((0,
                                u.logInfo)(`${j} - opt-out cookie found, storage disabled`),
                                1))
                            }(e)
                        }
                        return !1
                    }
                    ))
                }
                function De(e) {
                    d.clear(),
                    Object.entries(Q(e, (e => Object.keys(e.eids || {})), (e => e))).forEach((e => {
                        let[t,n] = e;
                        return d.set(t, n[0].eids[t])
                    }
                    ))
                }
                function ve() {
                    De(G);
                    const e = we(q);
                    if (!e.length)
                        return;
                    const t = G.filter((e => !(0,
                    r.I6)(W, (t => t.name === e.name))));
                    W.splice(0, W.length),
                    t.map((t => {
                        const n = (0,
                        r.I6)(e, (e => e.name && (e.name.toLowerCase() === t.name.toLowerCase() || t.aliasName && e.name.toLowerCase() === t.aliasName.toLowerCase())));
                        return n && t.name !== n.name && (n.name = t.name),
                        n ? {
                            submodule: t,
                            config: n,
                            callback: void 0,
                            idObj: void 0,
                            storageMgr: (0,
                            m.vM)({
                                moduleType: S.fW,
                                moduleName: n.name
                            })
                        } : null
                    }
                    )).filter((e => null !== e)).forEach((e => W.push(e))),
                    W.length && (se() || (k.gH.getHooks({
                        hook: re
                    }).remove(),
                    k.gH.before(oe, 100),
                    a.Ay.callDataDeletionRequest.before(Oe),
                    h.Q.after((e => e(ne())))),
                    (0,
                    u.logInfo)(`${j} - usersync config updated for ${W.length} submodules: `, W.map((e => e.submodule.name))))
                }
                function Oe(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        n[o - 1] = arguments[o];
                    (0,
                    u.logInfo)("UserID: received data deletion request; deleting all stored IDs..."),
                    W.forEach((e => {
                        if ("function" == typeof e.submodule.onDataDeletionRequest)
                            try {
                                e.submodule.onDataDeletionRequest(e.config, e.idObj, ...n)
                            } catch (t) {
                                (0,
                                u.logError)(`Error calling onDataDeletionRequest for ID submodule ${e.submodule.name}`, t)
                            }
                        K(e)
                    }
                    )),
                    e.apply(this, n)
                }
                function ke(e) {
                    return function() {
                        return Promise.resolve(e.apply(this, arguments))
                    }
                }
                function je(e) {
                    let {mkDelay: t=p.cb} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _ = void 0,
                    W = [],
                    q = [],
                    x = X(),
                    te = function() {
                        let {mkDelay: e=p.cb} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const t = (0,
                        p.v6)()
                          , n = (0,
                        p.v6)();
                        let o, r, s = !1;
                        function a(e) {
                            return r = J().fork(),
                            null != o && o.reject(ee),
                            o = (0,
                            p.v6)(),
                            p.U9.race([e, o.promise]).finally(r.startTiming("userId.total"))
                        }
                        let d = x
                          , f = W;
                        function g(e) {
                            return function() {
                                if (d === x && f === W)
                                    return e(...arguments)
                            }
                        }
                        function m() {
                            return w.SL.promise.finally(r.startTiming("userId.init.consent"))
                        }
                        let b = a(p.U9.all([c.Gc, t.promise]).then(m).then(g(( () => {
                            ye(d, f)
                        }
                        ))).then(( () => n.promise.finally(r.startTiming("userId.callbacks.pending")))).then(g(( () => {
                            const e = d.submodules.filter((e => (0,
                            u.isFn)(e.callback)));
                            if (e.length)
                                return new p.U9((t => Y(e, t, d)))
                        }
                        ))));
                        return function() {
                            let {refresh: o=!1, submoduleNames: r=null, ready: c=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return c && !s && (s = !0,
                            t.resolve(),
                            L > 0 ? n.resolve() : i.on(l.qY.AUCTION_END, (function t() {
                                i.off(l.qY.AUCTION_END, t),
                                e(P).then(n.resolve)
                            }
                            ))),
                            o && s && (b = a(b.catch(( () => null)).then(m).then(g(( () => {
                                const e = ye(d, f.filter((e => null == r || r.includes(e.submodule.name))), !0).filter((e => null != e.callback));
                                if (e.length)
                                    return new p.U9((t => Y(e, t, d)))
                            }
                            ))))),
                            b
                        }
                    }({
                        mkDelay: t
                    }),
                    null != F && F(),
                    G = [],
                    F = e.getConfig("userSync", (e => {
                        const t = e.userSync;
                        t && (_ = t.ppid,
                        t.userIds && (q = t.userIds,
                        P = (0,
                        u.isNumber)(t.syncDelay) ? t.syncDelay : O.qh.syncDelay,
                        L = (0,
                        u.isNumber)(t.auctionDelay) ? t.auctionDelay : O.qh.auctionDelay,
                        ve(),
                        function(e, t) {
                            if (e) {
                                const n = {}
                                  , o = new Map(t.map((e => e.aliasName ? [e.aliasName, e.name] : [])));
                                Object.keys(e).forEach((t => {
                                    const r = (0,
                                    u.isArray)(e[t]) ? [...e[t]].reverse() : [];
                                    n[t] = r.map((e => o.has(e) ? o.get(e) : e))
                                }
                                )),
                                M = n
                            } else
                                M = {};
                            x.refresh(),
                            De(t)
                        }(t.idPriority, G),
                        te({
                            ready: !0
                        })))
                    }
                    )),
                    (0,
                    o.m)().getUserIds = ie,
                    (0,
                    o.m)().getUserIdsAsEids = ae,
                    (0,
                    o.m)().getEncryptedEidsForSource = ke(ce),
                    (0,
                    o.m)().registerSignalSources = de,
                    (0,
                    o.m)().refreshUserIds = ke(ge),
                    (0,
                    o.m)().getUserIdsAsync = ke(me),
                    (0,
                    o.m)().getUserIdsAsEidBySource = le,
                    se() || k.gH.before(re, 100)
                }
                je(s.$W),
                (0,
                c.xG)("userId", (function(e) {
                    e.findRootDomain = I.S,
                    (0,
                    r.I6)(G, (t => t.name === e.name)) || (G.push(e),
                    w.o2.register(S.fW, e.name, e.gvlid),
                    ve(),
                    te({
                        refresh: !0,
                        submoduleNames: [e.name]
                    }))
                }
                ), {
                    postInstallAllowed: !0
                }),
                (0,
                o.E)("userId")
            }
        }, e => {
            e.O(0, [60802, 37769, 12139, 51085], ( () => {
                return t = 34836,
                e(e.s = t);
                var t
            }
            ));
            e.O()
        }
        ]);
        (self.pbjsChunk = self.pbjsChunk || []).push([[47957], {
            93043: (e, s, o) => {
                var i = o(7873)
                  , n = o(57377)
                  , t = o(71371)
                  , d = o(12938)
                  , r = o(42986)
                  , c = o(44796);
                const p = "vidazoo"
                  , a = "1.0.0"
                  , u = (0,
                d.vM)({
                    bidderCode: p
                })
                  , l = (0,
                r.GH)();
                const m = (0,
                r.lE)((function() {
                    return `https://${arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "prebid"}.cootlogix.com`
                }
                ), (function(e) {
                    return {
                        dealId: (0,
                        r.Zq)(u, e),
                        sessionId: (0,
                        r.Wu)(u),
                        ptrace: (0,
                        r.W)(u, c.Zb),
                        vdzhum: (0,
                        r.W)(u, c.mB),
                        webSessionId: l
                    }
                }
                ), u, p, a, !0)
                  , v = (0,
                r.Lp)(p, !0)
                  , b = (0,
                r.EE)({
                    iframeSyncUrl: "https://sync.cootlogix.com/api/sync/iframe",
                    imageSyncUrl: "https://sync.cootlogix.com/api/sync/image"
                })
                  , g = {
                    code: p,
                    version: a,
                    gvlid: 744,
                    supportedMediaTypes: [t.D4, t.G_],
                    isBidRequestValid: r.$d,
                    buildRequests: m,
                    interpretResponse: v,
                    getUserSyncs: b,
                    onBidWon: r.bH
                };
                (0,
                n.a$)(g),
                (0,
                i.E)("vidazooBidAdapter")
            }
        }, e => {
            e.O(0, [44982, 85946, 60802, 37769, 12139, 51085], ( () => {
                return s = 93043,
                e(e.s = s);
                var s
            }
            ));
            e.O()
        }
        ]);
    }
    )(),
    pbjs.processQueue();
