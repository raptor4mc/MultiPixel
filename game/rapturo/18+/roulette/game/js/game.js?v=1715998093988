this.createjs = this.createjs || {},
createjs.extend = function(t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }
    return i.prototype = e.prototype,
    t.prototype = new i
}
,
this.createjs = this.createjs || {},
createjs.promote = function(t, e) {
    "use strict";
    var i = t.prototype
      , s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (s)
        for (var n in i[(e += "_") + "constructor"] = s.constructor,
        s)
            i.hasOwnProperty(n) && "function" == typeof s[n] && (i[e + n] = s[n]);
    return t
}
,
this.createjs = this.createjs || {},
createjs.indexOf = function(t, e) {
    "use strict";
    for (var i = 0, s = t.length; i < s; i++)
        if (e === t[i])
            return i;
    return -1
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        throw "UID cannot be instantiated"
    }
    t._nextID = 0,
    t.get = function() {
        return t._nextID++
    }
    ,
    createjs.UID = t
}(),
this.createjs = this.createjs || {},
createjs.deprecate = function(e, i) {
    "use strict";
    return function() {
        var t = "Deprecated property or method '" + i + "'. See docs for info.";
        return console && (console.warn ? console.warn(t) : console.log(t)),
        e && e.apply(this, arguments)
    }
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.type = t,
        this.target = null,
        this.currentTarget = null,
        this.eventPhase = 0,
        this.bubbles = !!e,
        this.cancelable = !!i,
        this.timeStamp = (new Date).getTime(),
        this.defaultPrevented = !1,
        this.propagationStopped = !1,
        this.immediatePropagationStopped = !1,
        this.removed = !1
    }
    var e = t.prototype;
    e.preventDefault = function() {
        this.defaultPrevented = this.cancelable && !0
    }
    ,
    e.stopPropagation = function() {
        this.propagationStopped = !0
    }
    ,
    e.stopImmediatePropagation = function() {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }
    ,
    e.remove = function() {
        this.removed = !0
    }
    ,
    e.clone = function() {
        return new t(this.type,this.bubbles,this.cancelable)
    }
    ,
    e.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    e.toString = function() {
        return "[Event (type=" + this.type + ")]"
    }
    ,
    createjs.Event = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this._listeners = null,
        this._captureListeners = null
    }
    var e = t.prototype;
    t.initialize = function(t) {
        t.addEventListener = e.addEventListener,
        t.on = e.on,
        t.removeEventListener = t.off = e.removeEventListener,
        t.removeAllEventListeners = e.removeAllEventListeners,
        t.hasEventListener = e.hasEventListener,
        t.dispatchEvent = e.dispatchEvent,
        t._dispatchEvent = e._dispatchEvent,
        t.willTrigger = e.willTrigger
    }
    ,
    e.addEventListener = function(t, e, i) {
        var s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {}
          , n = s[t];
        return n && this.removeEventListener(t, e, i),
        n = s[t],
        n ? n.push(e) : s[t] = [e],
        e
    }
    ,
    e.on = function(t, e, i, s, n, a) {
        return e.handleEvent && (i = i || e,
        e = e.handleEvent),
        i = i || this,
        this.addEventListener(t, function(t) {
            e.call(i, t, n),
            s && t.remove()
        }, a)
    }
    ,
    e.removeEventListener = function(t, e, i) {
        var s = i ? this._captureListeners : this._listeners;
        if (s) {
            var n = s[t];
            if (n)
                for (var a = 0, r = n.length; a < r; a++)
                    if (n[a] == e) {
                        1 == r ? delete s[t] : n.splice(a, 1);
                        break
                    }
        }
    }
    ,
    e.off = e.removeEventListener,
    e.removeAllEventListeners = function(t) {
        t ? (this._listeners && delete this._listeners[t],
        this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }
    ,
    e.dispatchEvent = function(t, e, i) {
        if ("string" == typeof t) {
            var s = this._listeners;
            if (!(e || s && s[t]))
                return !0;
            t = new createjs.Event(t,e,i)
        } else
            t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (t) {}
        if (t.bubbles && this.parent) {
            for (var n = this, a = [n]; n.parent; )
                a.push(n = n.parent);
            for (var r = a.length, o = r - 1; 0 <= o && !t.propagationStopped; o--)
                a[o]._dispatchEvent(t, 1 + (0 == o));
            for (o = 1; o < r && !t.propagationStopped; o++)
                a[o]._dispatchEvent(t, 3)
        } else
            this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }
    ,
    e.hasEventListener = function(t) {
        var e = this._listeners
          , i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }
    ,
    e.willTrigger = function(t) {
        for (var e = this; e; ) {
            if (e.hasEventListener(t))
                return !0;
            e = e.parent
        }
        return !1
    }
    ,
    e.toString = function() {
        return "[EventDispatcher]"
    }
    ,
    e._dispatchEvent = function(t, e) {
        var i, s = e <= 2 ? this._captureListeners : this._listeners;
        if (t && s && (n = s[t.type]) && (i = n.length)) {
            try {
                t.currentTarget = this
            } catch (t) {}
            try {
                t.eventPhase = 0 | e
            } catch (t) {}
            t.removed = !1;
            for (var n = n.slice(), a = 0; a < i && !t.immediatePropagationStopped; a++) {
                var r = n[a];
                r.handleEvent ? r.handleEvent(t) : r(t),
                t.removed && (this.off(t.type, r, 1 == e),
                t.removed = !1)
            }
        }
        2 === e && this._dispatchEvent(t, 2.1)
    }
    ,
    createjs.EventDispatcher = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function a() {
        throw "Ticker cannot be instantiated."
    }
    a.RAF_SYNCHED = "synched",
    a.RAF = "raf",
    a.TIMEOUT = "timeout",
    a.timingMode = null,
    a.maxDelta = 0,
    a.paused = !1,
    a.removeEventListener = null,
    a.removeAllEventListeners = null,
    a.dispatchEvent = null,
    a.hasEventListener = null,
    a._listeners = null,
    createjs.EventDispatcher.initialize(a),
    a._addEventListener = a.addEventListener,
    a.addEventListener = function() {
        return a._inited || a.init(),
        a._addEventListener.apply(a, arguments)
    }
    ,
    a._inited = !1,
    a._startTime = 0,
    a._pausedTime = 0,
    a._ticks = 0,
    a._pausedTicks = 0,
    a._interval = 50,
    a._lastTime = 0,
    a._times = null,
    a._tickTimes = null,
    a._timerId = null,
    a._raf = !0,
    a._setInterval = function(t) {
        a._interval = t,
        a._inited && a._setupTick()
    }
    ,
    a.setInterval = createjs.deprecate(a._setInterval, "Ticker.setInterval"),
    a._getInterval = function() {
        return a._interval
    }
    ,
    a.getInterval = createjs.deprecate(a._getInterval, "Ticker.getInterval"),
    a._setFPS = function(t) {
        a._setInterval(1e3 / t)
    }
    ,
    a.setFPS = createjs.deprecate(a._setFPS, "Ticker.setFPS"),
    a._getFPS = function() {
        return 1e3 / a._interval
    }
    ,
    a.getFPS = createjs.deprecate(a._getFPS, "Ticker.getFPS");
    try {
        Object.defineProperties(a, {
            interval: {
                get: a._getInterval,
                set: a._setInterval
            },
            framerate: {
                get: a._getFPS,
                set: a._setFPS
            }
        })
    } catch (t) {
        console.log(t)
    }
    a.init = function() {
        a._inited || (a._inited = !0,
        a._times = [],
        a._tickTimes = [],
        a._startTime = a._getTime(),
        a._times.push(a._lastTime = 0),
        a.interval = a._interval)
    }
    ,
    a.reset = function() {
        var t;
        a._raf ? (t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame,
        t && t(a._timerId)) : clearTimeout(a._timerId),
        a.removeAllEventListeners("tick"),
        a._timerId = a._times = a._tickTimes = null,
        a._startTime = a._lastTime = a._ticks = a._pausedTime = 0,
        a._inited = !1
    }
    ,
    a.getMeasuredTickTime = function(t) {
        var e = 0
          , i = a._tickTimes;
        if (!i || i.length < 1)
            return -1;
        t = Math.min(i.length, t || 0 | a._getFPS());
        for (var s = 0; s < t; s++)
            e += i[s];
        return e / t
    }
    ,
    a.getMeasuredFPS = function(t) {
        var e = a._times;
        return !e || e.length < 2 ? -1 : (t = Math.min(e.length - 1, t || 0 | a._getFPS()),
        1e3 / ((e[0] - e[t]) / t))
    }
    ,
    a.getTime = function(t) {
        return a._startTime ? a._getTime() - (t ? a._pausedTime : 0) : -1
    }
    ,
    a.getEventTime = function(t) {
        return a._startTime ? (a._lastTime || a._startTime) - (t ? a._pausedTime : 0) : -1
    }
    ,
    a.getTicks = function(t) {
        return a._ticks - (t ? a._pausedTicks : 0)
    }
    ,
    a._handleSynch = function() {
        a._timerId = null,
        a._setupTick(),
        a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
    }
    ,
    a._handleRAF = function() {
        a._timerId = null,
        a._setupTick(),
        a._tick()
    }
    ,
    a._handleTimeout = function() {
        a._timerId = null,
        a._setupTick(),
        a._tick()
    }
    ,
    a._setupTick = function() {
        if (null == a._timerId) {
            var t = a.timingMode;
            if (t == a.RAF_SYNCHED || t == a.RAF) {
                var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (e)
                    return a._timerId = e(t == a.RAF ? a._handleRAF : a._handleSynch),
                    void (a._raf = !0)
            }
            a._raf = !1,
            a._timerId = setTimeout(a._handleTimeout, a._interval)
        }
    }
    ,
    a._tick = function() {
        var t, e, i = a.paused, s = a._getTime(), n = s - a._lastTime;
        for (a._lastTime = s,
        a._ticks++,
        i && (a._pausedTicks++,
        a._pausedTime += n),
        a.hasEventListener("tick") && (t = new createjs.Event("tick"),
        e = a.maxDelta,
        t.delta = e && e < n ? e : n,
        t.paused = i,
        t.time = s,
        t.runTime = s - a._pausedTime,
        a.dispatchEvent(t)),
        a._tickTimes.unshift(a._getTime() - s); 100 < a._tickTimes.length; )
            a._tickTimes.pop();
        for (a._times.unshift(s); 100 < a._times.length; )
            a._times.pop()
    }
    ;
    var t = window
      , e = t.performance.now || t.performance.mozNow || t.performance.msNow || t.performance.oNow || t.performance.webkitNow;
    a._getTime = function() {
        return (e && e.call(t.performance) || (new Date).getTime()) - a._startTime
    }
    ,
    createjs.Ticker = a
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.readyState = t.readyState,
        this._video = t,
        this._canvas = null,
        this._lastTime = -1,
        this.readyState < 2 && t.addEventListener("canplaythrough", this._videoReady.bind(this))
    }
    var e = t.prototype;
    e.getImage = function() {
        var t, e, i;
        if (!(this.readyState < 2))
            return t = this._canvas,
            e = this._video,
            t || (t = this._canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"),
            t.width = e.videoWidth,
            t.height = e.videoHeight),
            2 <= e.readyState && e.currentTime !== this._lastTime && (i = t.getContext("2d"),
            i.clearRect(0, 0, t.width, t.height),
            i.drawImage(e, 0, 0, t.width, t.height),
            this._lastTime = e.currentTime),
            t
    }
    ,
    e._videoReady = function() {
        this.readyState = 2
    }
    ,
    createjs.VideoBuffer = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s, n, a, r, o, h, l, c) {
        this.Event_constructor(t, e, i),
        this.stageX = s,
        this.stageY = n,
        this.rawX = null == h ? s : h,
        this.rawY = null == l ? n : l,
        this.nativeEvent = a,
        this.pointerID = r,
        this.primary = !!o,
        this.relatedTarget = c
    }
    var e = createjs.extend(t, createjs.Event);
    e._get_localX = function() {
        return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
    }
    ,
    e._get_localY = function() {
        return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
    }
    ,
    e._get_isTouch = function() {
        return -1 !== this.pointerID
    }
    ;
    try {
        Object.defineProperties(e, {
            localX: {
                get: e._get_localX
            },
            localY: {
                get: e._get_localY
            },
            isTouch: {
                get: e._get_isTouch
            }
        })
    } catch (t) {}
    e.clone = function() {
        return new t(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)
    }
    ,
    e.toString = function() {
        return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
    }
    ,
    createjs.MouseEvent = createjs.promote(t, "Event")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function c(t, e, i, s, n, a) {
        this.setValues(t, e, i, s, n, a)
    }
    var t = c.prototype;
    c.DEG_TO_RAD = Math.PI / 180,
    c.identity = null,
    t.setValues = function(t, e, i, s, n, a) {
        return this.a = null == t ? 1 : t,
        this.b = e || 0,
        this.c = i || 0,
        this.d = null == s ? 1 : s,
        this.tx = n || 0,
        this.ty = a || 0,
        this
    }
    ,
    t.append = function(t, e, i, s, n, a) {
        var r = this.a
          , o = this.b
          , h = this.c
          , l = this.d;
        return 1 == t && 0 == e && 0 == i && 1 == s || (this.a = r * t + h * e,
        this.b = o * t + l * e,
        this.c = r * i + h * s,
        this.d = o * i + l * s),
        this.tx = r * n + h * a + this.tx,
        this.ty = o * n + l * a + this.ty,
        this
    }
    ,
    t.prepend = function(t, e, i, s, n, a) {
        var r = this.a
          , o = this.c
          , h = this.tx;
        return this.a = t * r + i * this.b,
        this.b = e * r + s * this.b,
        this.c = t * o + i * this.d,
        this.d = e * o + s * this.d,
        this.tx = t * h + i * this.ty + n,
        this.ty = e * h + s * this.ty + a,
        this
    }
    ,
    t.appendMatrix = function(t) {
        return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
    }
    ,
    t.prependMatrix = function(t) {
        return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
    }
    ,
    t.appendTransform = function(t, e, i, s, n, a, r, o, h) {
        var l, n = n % 360 ? (n = n * c.DEG_TO_RAD,
        l = Math.cos(n),
        Math.sin(n)) : (l = 1,
        0);
        return a || r ? (a *= c.DEG_TO_RAD,
        r *= c.DEG_TO_RAD,
        this.append(Math.cos(r), Math.sin(r), -Math.sin(a), Math.cos(a), t, e),
        this.append(l * i, n * i, -n * s, l * s, 0, 0)) : this.append(l * i, n * i, -n * s, l * s, t, e),
        (o || h) && (this.tx -= o * this.a + h * this.c,
        this.ty -= o * this.b + h * this.d),
        this
    }
    ,
    t.prependTransform = function(t, e, i, s, n, a, r, o, h) {
        var l, n = n % 360 ? (n = n * c.DEG_TO_RAD,
        l = Math.cos(n),
        Math.sin(n)) : (l = 1,
        0);
        return (o || h) && (this.tx -= o,
        this.ty -= h),
        a || r ? (a *= c.DEG_TO_RAD,
        r *= c.DEG_TO_RAD,
        this.prepend(l * i, n * i, -n * s, l * s, 0, 0),
        this.prepend(Math.cos(r), Math.sin(r), -Math.sin(a), Math.cos(a), t, e)) : this.prepend(l * i, n * i, -n * s, l * s, t, e),
        this
    }
    ,
    t.rotate = function(t) {
        t *= c.DEG_TO_RAD;
        var e = Math.cos(t)
          , t = Math.sin(t)
          , i = this.a
          , s = this.b;
        return this.a = i * e + this.c * t,
        this.b = s * e + this.d * t,
        this.c = -i * t + this.c * e,
        this.d = -s * t + this.d * e,
        this
    }
    ,
    t.skew = function(t, e) {
        return t *= c.DEG_TO_RAD,
        e *= c.DEG_TO_RAD,
        this.append(Math.cos(e), Math.sin(e), -Math.sin(t), Math.cos(t), 0, 0),
        this
    }
    ,
    t.scale = function(t, e) {
        return this.a *= t,
        this.b *= t,
        this.c *= e,
        this.d *= e,
        this
    }
    ,
    t.translate = function(t, e) {
        return this.tx += this.a * t + this.c * e,
        this.ty += this.b * t + this.d * e,
        this
    }
    ,
    t.identity = function() {
        return this.a = this.d = 1,
        this.b = this.c = this.tx = this.ty = 0,
        this
    }
    ,
    t.invert = function() {
        var t = this.a
          , e = this.b
          , i = this.c
          , s = this.d
          , n = this.tx
          , a = t * s - e * i;
        return this.a = s / a,
        this.b = -e / a,
        this.c = -i / a,
        this.d = t / a,
        this.tx = (i * this.ty - s * n) / a,
        this.ty = -(t * this.ty - e * n) / a,
        this
    }
    ,
    t.isIdentity = function() {
        return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
    }
    ,
    t.equals = function(t) {
        return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d
    }
    ,
    t.transformPoint = function(t, e, i) {
        return i = i || {},
        i.x = t * this.a + e * this.c + this.tx,
        i.y = t * this.b + e * this.d + this.ty,
        i
    }
    ,
    t.decompose = function(t) {
        null == t && (t = {}),
        t.x = this.tx,
        t.y = this.ty,
        t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b),
        t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var e = Math.atan2(-this.c, this.d)
          , i = Math.atan2(this.b, this.a)
          , s = (-0 === e && (e = 0),
        -0 === i && (i = 0),
        Math.abs(1 - e / i));
        return 0 === e && 0 === i || s < 1e-5 ? (t.rotation = i / c.DEG_TO_RAD,
        this.a < 0 && 0 <= this.d && (t.rotation += t.rotation <= 0 ? 180 : -180),
        t.skewX = t.skewY = 0) : (t.skewX = e / c.DEG_TO_RAD,
        t.skewY = i / c.DEG_TO_RAD),
        t
    }
    ,
    t.copy = function(t) {
        return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
    }
    ,
    t.clone = function() {
        return new c(this.a,this.b,this.c,this.d,this.tx,this.ty)
    }
    ,
    t.toString = function() {
        return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
    }
    ,
    c.identity = new c,
    createjs.Matrix2D = c
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s, n) {
        this.setValues(t, e, i, s, n)
    }
    var e = t.prototype;
    e.setValues = function(t, e, i, s, n) {
        return this.visible = null == t || !!t,
        this.alpha = null == e ? 1 : e,
        this.shadow = i,
        this.compositeOperation = s,
        this.matrix = n || this.matrix && this.matrix.identity() || new createjs.Matrix2D,
        this
    }
    ,
    e.append = function(t, e, i, s, n) {
        return this.alpha *= e,
        this.shadow = i || this.shadow,
        this.compositeOperation = s || this.compositeOperation,
        this.visible = this.visible && t,
        n && this.matrix.appendMatrix(n),
        this
    }
    ,
    e.prepend = function(t, e, i, s, n) {
        return this.alpha *= e,
        this.shadow = this.shadow || i,
        this.compositeOperation = this.compositeOperation || s,
        this.visible = this.visible && t,
        n && this.matrix.prependMatrix(n),
        this
    }
    ,
    e.identity = function() {
        return this.visible = !0,
        this.alpha = 1,
        this.shadow = this.compositeOperation = null,
        this.matrix.identity(),
        this
    }
    ,
    e.clone = function() {
        return new t(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())
    }
    ,
    createjs.DisplayProps = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.setValues(t, e)
    }
    var e = t.prototype;
    e.setValues = function(t, e) {
        return this.x = t || 0,
        this.y = e || 0,
        this
    }
    ,
    e.copy = function(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    }
    ,
    e.clone = function() {
        return new t(this.x,this.y)
    }
    ,
    e.toString = function() {
        return "[Point (x=" + this.x + " y=" + this.y + ")]"
    }
    ,
    createjs.Point = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function n(t, e, i, s) {
        this.setValues(t, e, i, s)
    }
    var t = n.prototype;
    t.setValues = function(t, e, i, s) {
        return this.x = t || 0,
        this.y = e || 0,
        this.width = i || 0,
        this.height = s || 0,
        this
    }
    ,
    t.extend = function(t, e, i, s) {
        return i = i || 0,
        s = s || 0,
        t + i > this.x + this.width && (this.width = t + i - this.x),
        e + s > this.y + this.height && (this.height = e + s - this.y),
        t < this.x && (this.width += this.x - t,
        this.x = t),
        e < this.y && (this.height += this.y - e,
        this.y = e),
        this
    }
    ,
    t.pad = function(t, e, i, s) {
        return this.x -= e,
        this.y -= t,
        this.width += e + s,
        this.height += t + i,
        this
    }
    ,
    t.copy = function(t) {
        return this.setValues(t.x, t.y, t.width, t.height)
    }
    ,
    t.contains = function(t, e, i, s) {
        return i = i || 0,
        s = s || 0,
        t >= this.x && t + i <= this.x + this.width && e >= this.y && e + s <= this.y + this.height
    }
    ,
    t.union = function(t) {
        return this.clone().extend(t.x, t.y, t.width, t.height)
    }
    ,
    t.intersection = function(t) {
        var e = t.x
          , i = t.y
          , s = e + t.width
          , t = i + t.height;
        return this.x > e && (e = this.x),
        this.y > i && (i = this.y),
        this.x + this.width < s && (s = this.x + this.width),
        this.y + this.height < t && (t = this.y + this.height),
        s <= e || t <= i ? null : new n(e,i,s - e,t - i)
    }
    ,
    t.intersects = function(t) {
        return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height
    }
    ,
    t.isEmpty = function() {
        return this.width <= 0 || this.height <= 0
    }
    ,
    t.clone = function() {
        return new n(this.x,this.y,this.width,this.height)
    }
    ,
    t.toString = function() {
        return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
    }
    ,
    createjs.Rectangle = n
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s, n, a, r) {
        t.addEventListener && (this.target = t,
        this.overLabel = null == i ? "over" : i,
        this.outLabel = null == e ? "out" : e,
        this.downLabel = null == s ? "down" : s,
        this.play = n,
        this._isPressed = !1,
        this._isOver = !1,
        this._enabled = !1,
        t.mouseChildren = !1,
        this.enabled = !0,
        this.handleEvent({}),
        a) && (r && (a.actionsEnabled = !1,
        a.gotoAndStop) && a.gotoAndStop(r),
        t.hitArea = a)
    }
    var e = t.prototype;
    e._setEnabled = function(t) {
        var e;
        t != this._enabled && (e = this.target,
        this._enabled = t,
        t ? (e.cursor = "pointer",
        e.addEventListener("rollover", this),
        e.addEventListener("rollout", this),
        e.addEventListener("mousedown", this),
        e.addEventListener("pressup", this),
        e._reset && (e.__reset = e._reset,
        e._reset = this._reset)) : (e.cursor = null,
        e.removeEventListener("rollover", this),
        e.removeEventListener("rollout", this),
        e.removeEventListener("mousedown", this),
        e.removeEventListener("pressup", this),
        e.__reset && (e._reset = e.__reset,
        delete e.__reset)))
    }
    ,
    e.setEnabled = createjs.deprecate(e._setEnabled, "ButtonHelper.setEnabled"),
    e._getEnabled = function() {
        return this._enabled
    }
    ,
    e.getEnabled = createjs.deprecate(e._getEnabled, "ButtonHelper.getEnabled");
    try {
        Object.defineProperties(e, {
            enabled: {
                get: e._getEnabled,
                set: e._setEnabled
            }
        })
    } catch (t) {}
    e.toString = function() {
        return "[ButtonHelper]"
    }
    ,
    e.handleEvent = function(t) {
        var e = this.target
          , t = t.type
          , t = "mousedown" == t ? (this._isPressed = !0,
        this.downLabel) : "pressup" == t ? (this._isPressed = !1,
        this._isOver ? this.overLabel : this.outLabel) : "rollover" == t ? (this._isOver = !0,
        this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1,
        this._isPressed ? this.overLabel : this.outLabel);
        this.play ? e.gotoAndPlay && e.gotoAndPlay(t) : e.gotoAndStop && e.gotoAndStop(t)
    }
    ,
    e._reset = function() {
        var t = this.paused;
        this.__reset(),
        this.paused = t
    }
    ,
    createjs.ButtonHelper = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s) {
        this.color = t || "black",
        this.offsetX = e || 0,
        this.offsetY = i || 0,
        this.blur = s || 0
    }
    var e = t.prototype;
    t.identity = new t("transparent",0,0,0),
    e.toString = function() {
        return "[Shadow]"
    }
    ,
    e.clone = function() {
        return new t(this.color,this.offsetX,this.offsetY,this.blur)
    }
    ,
    createjs.Shadow = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.EventDispatcher_constructor(),
        this.complete = !0,
        this.framerate = 0,
        this._animations = null,
        this._frames = null,
        this._images = null,
        this._data = null,
        this._loadCount = 0,
        this._frameHeight = 0,
        this._frameWidth = 0,
        this._numFrames = 0,
        this._regX = 0,
        this._regY = 0,
        this._spacing = 0,
        this._margin = 0,
        this._parseData(t)
    }
    var e = createjs.extend(t, createjs.EventDispatcher);
    e._getAnimations = function() {
        return this._animations.slice()
    }
    ,
    e.getAnimations = createjs.deprecate(e._getAnimations, "SpriteSheet.getAnimations");
    try {
        Object.defineProperties(e, {
            animations: {
                get: e._getAnimations
            }
        })
    } catch (t) {}
    e.getNumFrames = function(t) {
        return null == t ? this._frames ? this._frames.length : this._numFrames || 0 : (t = this._data[t],
        null == t ? 0 : t.frames.length)
    }
    ,
    e.getAnimation = function(t) {
        return this._data[t]
    }
    ,
    e.getFrame = function(t) {
        return this._frames && (t = this._frames[t]) ? t : null
    }
    ,
    e.getFrameBounds = function(t, e) {
        t = this.getFrame(t);
        return t ? (e || new createjs.Rectangle).setValues(-t.regX, -t.regY, t.rect.width, t.rect.height) : null
    }
    ,
    e.toString = function() {
        return "[SpriteSheet]"
    }
    ,
    e.clone = function() {
        throw "SpriteSheet cannot be cloned."
    }
    ,
    e._parseData = function(t) {
        var e, i, s, n;
        if (null != t) {
            if (this.framerate = t.framerate || 0,
            t.images && 0 < (i = t.images.length))
                for (u = this._images = [],
                e = 0; e < i; e++) {
                    var a, r = t.images[e];
                    "string" == typeof r && (a = r,
                    r = document.createElement("img"),
                    r.src = a),
                    u.push(r),
                    r.getContext || r.naturalWidth || (this._loadCount++,
                    this.complete = !1,
                    function(t, e) {
                        r.onload = function() {
                            t._handleImageLoad(e)
                        }
                    }(this, a),
                    function(t, e) {
                        r.onerror = function() {
                            t._handleImageError(e)
                        }
                    }(this, a))
                }
            if (null != t.frames)
                if (Array.isArray(t.frames))
                    for (this._frames = [],
                    u = t.frames,
                    e = 0,
                    i = u.length; e < i; e++) {
                        var o = u[e];
                        this._frames.push({
                            image: this._images[o[4] || 0],
                            rect: new createjs.Rectangle(o[0],o[1],o[2],o[3]),
                            regX: o[5] || 0,
                            regY: o[6] || 0
                        })
                    }
                else
                    s = t.frames,
                    this._frameWidth = s.width,
                    this._frameHeight = s.height,
                    this._regX = s.regX || 0,
                    this._regY = s.regY || 0,
                    this._spacing = s.spacing || 0,
                    this._margin = s.margin || 0,
                    this._numFrames = s.count,
                    0 == this._loadCount && this._calculateFrames();
            if (this._animations = [],
            null != (s = t.animations))
                for (n in this._data = {},
                s) {
                    var h = {
                        name: n
                    }
                      , l = s[n];
                    if ("number" == typeof l)
                        u = h.frames = [l];
                    else if (Array.isArray(l))
                        if (1 == l.length)
                            h.frames = [l[0]];
                        else
                            for (h.speed = l[3],
                            h.next = l[2],
                            u = h.frames = [],
                            e = l[0]; e <= l[1]; e++)
                                u.push(e);
                    else {
                        h.speed = l.speed,
                        h.next = l.next;
                        var c = l.frames
                          , u = h.frames = "number" == typeof c ? [c] : c.slice(0)
                    }
                    !0 !== h.next && void 0 !== h.next || (h.next = n),
                    (!1 === h.next || u.length < 2 && h.next == n) && (h.next = null),
                    h.speed || (h.speed = 1),
                    this._animations.push(n),
                    this._data[n] = h
                }
        }
    }
    ,
    e._handleImageLoad = function(t) {
        0 == --this._loadCount && (this._calculateFrames(),
        this.complete = !0,
        this.dispatchEvent("complete"))
    }
    ,
    e._handleImageError = function(t) {
        var e = new createjs.Event("error");
        e.src = t,
        this.dispatchEvent(e),
        0 == --this._loadCount && this.dispatchEvent("complete")
    }
    ,
    e._calculateFrames = function() {
        if (!this._frames && 0 != this._frameWidth) {
            this._frames = [];
            var t = this._numFrames || 1e5
              , e = 0
              , i = this._frameWidth
              , s = this._frameHeight
              , n = this._spacing
              , a = this._margin;
            t: for (var r = 0, o = this._images; r < o.length; r++)
                for (var h = o[r], l = h.width || h.naturalWidth, c = h.height || h.naturalHeight, u = a; u <= c - a - s; ) {
                    for (var d = a; d <= l - a - i; ) {
                        if (t <= e)
                            break t;
                        e++,
                        this._frames.push({
                            image: h,
                            rect: new createjs.Rectangle(d,u,i,s),
                            regX: this._regX,
                            regY: this._regY
                        }),
                        d += i + n
                    }
                    u += s + n
                }
            this._numFrames = e
        }
    }
    ,
    createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function w() {
        this.command = null,
        this._stroke = null,
        this._strokeStyle = null,
        this._oldStrokeStyle = null,
        this._strokeDash = null,
        this._oldStrokeDash = null,
        this._strokeIgnoreScale = !1,
        this._fill = null,
        this._instructions = [],
        this._commitIndex = 0,
        this._activeInstructions = [],
        this._dirty = !1,
        this._storeIndex = 0,
        this.clear()
    }
    var t = w.prototype
      , h = w
      , e = (w.getRGB = function(t, e, i, s) {
        return null != t && null == i && (s = e,
        i = 255 & t,
        e = t >> 8 & 255,
        t = t >> 16 & 255),
        null == s ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i + "," + s + ")"
    }
    ,
    w.getHSL = function(t, e, i, s) {
        return null == s ? "hsl(" + t % 360 + "," + e + "%," + i + "%)" : "hsla(" + t % 360 + "," + e + "%," + i + "%," + s + ")"
    }
    ,
    w.BASE_64 = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
        a: 26,
        b: 27,
        c: 28,
        d: 29,
        e: 30,
        f: 31,
        g: 32,
        h: 33,
        i: 34,
        j: 35,
        k: 36,
        l: 37,
        m: 38,
        n: 39,
        o: 40,
        p: 41,
        q: 42,
        r: 43,
        s: 44,
        t: 45,
        u: 46,
        v: 47,
        w: 48,
        x: 49,
        y: 50,
        z: 51,
        0: 52,
        1: 53,
        2: 54,
        3: 55,
        4: 56,
        5: 57,
        6: 58,
        7: 59,
        8: 60,
        9: 61,
        "+": 62,
        "/": 63
    },
    w.STROKE_CAPS_MAP = ["butt", "round", "square"],
    w.STROKE_JOINTS_MAP = ["miter", "round", "bevel"],
    createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"));
    e.getContext && (w._ctx = e.getContext("2d"),
    e.width = e.height = 1),
    t._getInstructions = function() {
        return this._updateInstructions(),
        this._instructions
    }
    ,
    t.getInstructions = createjs.deprecate(t._getInstructions, "Graphics.getInstructions");
    try {
        Object.defineProperties(t, {
            instructions: {
                get: t._getInstructions
            }
        })
    } catch (t) {}
    t.isEmpty = function() {
        return !(this._instructions.length || this._activeInstructions.length)
    }
    ,
    t.draw = function(t, e) {
        this._updateInstructions();
        for (var i = this._instructions, s = this._storeIndex, n = i.length; s < n; s++)
            i[s].exec(t, e)
    }
    ,
    t.drawAsPath = function(t) {
        this._updateInstructions();
        for (var e, i = this._instructions, s = this._storeIndex, n = i.length; s < n; s++)
            !1 !== (e = i[s]).path && e.exec(t)
    }
    ,
    t.moveTo = function(t, e) {
        return this.append(new h.MoveTo(t,e), !0)
    }
    ,
    t.lineTo = function(t, e) {
        return this.append(new h.LineTo(t,e))
    }
    ,
    t.arcTo = function(t, e, i, s, n) {
        return this.append(new h.ArcTo(t,e,i,s,n))
    }
    ,
    t.arc = function(t, e, i, s, n, a) {
        return this.append(new h.Arc(t,e,i,s,n,a))
    }
    ,
    t.quadraticCurveTo = function(t, e, i, s) {
        return this.append(new h.QuadraticCurveTo(t,e,i,s))
    }
    ,
    t.bezierCurveTo = function(t, e, i, s, n, a) {
        return this.append(new h.BezierCurveTo(t,e,i,s,n,a))
    }
    ,
    t.rect = function(t, e, i, s) {
        return this.append(new h.Rect(t,e,i,s))
    }
    ,
    t.closePath = function() {
        return this._activeInstructions.length ? this.append(new h.ClosePath) : this
    }
    ,
    t.clear = function() {
        return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0,
        this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null,
        this._dirty = this._strokeIgnoreScale = !1,
        this
    }
    ,
    t.beginFill = function(t) {
        return this._setFill(t ? new h.Fill(t) : null)
    }
    ,
    t.beginLinearGradientFill = function(t, e, i, s, n, a) {
        return this._setFill((new h.Fill).linearGradient(t, e, i, s, n, a))
    }
    ,
    t.beginRadialGradientFill = function(t, e, i, s, n, a, r, o) {
        return this._setFill((new h.Fill).radialGradient(t, e, i, s, n, a, r, o))
    }
    ,
    t.beginBitmapFill = function(t, e, i) {
        return this._setFill(new h.Fill(null,i).bitmap(t, e))
    }
    ,
    t.endFill = function() {
        return this.beginFill()
    }
    ,
    t.setStrokeStyle = function(t, e, i, s, n) {
        return this._updateInstructions(!0),
        this._strokeStyle = this.command = new h.StrokeStyle(t,e,i,s,n),
        this._stroke && (this._stroke.ignoreScale = n),
        this._strokeIgnoreScale = n,
        this
    }
    ,
    t.setStrokeDash = function(t, e) {
        return this._updateInstructions(!0),
        this._strokeDash = this.command = new h.StrokeDash(t,e),
        this
    }
    ,
    t.beginStroke = function(t) {
        return this._setStroke(t ? new h.Stroke(t) : null)
    }
    ,
    t.beginLinearGradientStroke = function(t, e, i, s, n, a) {
        return this._setStroke((new h.Stroke).linearGradient(t, e, i, s, n, a))
    }
    ,
    t.beginRadialGradientStroke = function(t, e, i, s, n, a, r, o) {
        return this._setStroke((new h.Stroke).radialGradient(t, e, i, s, n, a, r, o))
    }
    ,
    t.beginBitmapStroke = function(t, e) {
        return this._setStroke((new h.Stroke).bitmap(t, e))
    }
    ,
    t.endStroke = function() {
        return this.beginStroke()
    }
    ,
    t.curveTo = t.quadraticCurveTo,
    t.drawRect = t.rect,
    t.drawRoundRect = function(t, e, i, s, n) {
        return this.drawRoundRectComplex(t, e, i, s, n, n, n, n)
    }
    ,
    t.drawRoundRectComplex = function(t, e, i, s, n, a, r, o) {
        return this.append(new h.RoundRect(t,e,i,s,n,a,r,o))
    }
    ,
    t.drawCircle = function(t, e, i) {
        return this.append(new h.Circle(t,e,i))
    }
    ,
    t.drawEllipse = function(t, e, i, s) {
        return this.append(new h.Ellipse(t,e,i,s))
    }
    ,
    t.drawPolyStar = function(t, e, i, s, n, a) {
        return this.append(new h.PolyStar(t,e,i,s,n,a))
    }
    ,
    t.append = function(t, e) {
        return this._activeInstructions.push(t),
        this.command = t,
        e || (this._dirty = !0),
        this
    }
    ,
    t.decodePath = function(t) {
        for (var e = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], i = [2, 2, 4, 6, 0], s = 0, n = t.length, a = [], r = 0, o = 0, h = w.BASE_64; s < n; ) {
            var l = t.charAt(s)
              , c = h[l]
              , u = c >> 3
              , d = e[u];
            if (!d || 3 & c)
                throw "bad path data (@" + s + "): " + l;
            for (var p = i[u], m = (u || (r = o = 0),
            a.length = 0,
            s++,
            2 + (c >> 2 & 1)), _ = 0; _ < p; _++) {
                var f = h[t.charAt(s)]
                  , g = f >> 5 ? -1 : 1
                  , f = (31 & f) << 6 | h[t.charAt(s + 1)];
                3 == m && (f = f << 6 | h[t.charAt(s + 2)]),
                f = g * f / 10,
                _ % 2 ? r = f += r : o = f += o,
                a[_] = f,
                s += m
            }
            d.apply(this, a)
        }
        return this
    }
    ,
    t.store = function() {
        return this._updateInstructions(!0),
        this._storeIndex = this._instructions.length,
        this
    }
    ,
    t.unstore = function() {
        return this._storeIndex = 0,
        this
    }
    ,
    t.clone = function() {
        var t = new w;
        return t.command = this.command,
        t._stroke = this._stroke,
        t._strokeStyle = this._strokeStyle,
        t._strokeDash = this._strokeDash,
        t._strokeIgnoreScale = this._strokeIgnoreScale,
        t._fill = this._fill,
        t._instructions = this._instructions.slice(),
        t._commitIndex = this._commitIndex,
        t._activeInstructions = this._activeInstructions.slice(),
        t._dirty = this._dirty,
        t._storeIndex = this._storeIndex,
        t
    }
    ,
    t.toString = function() {
        return "[Graphics]"
    }
    ,
    t.mt = t.moveTo,
    t.lt = t.lineTo,
    t.at = t.arcTo,
    t.bt = t.bezierCurveTo,
    t.qt = t.quadraticCurveTo,
    t.a = t.arc,
    t.r = t.rect,
    t.cp = t.closePath,
    t.c = t.clear,
    t.f = t.beginFill,
    t.lf = t.beginLinearGradientFill,
    t.rf = t.beginRadialGradientFill,
    t.bf = t.beginBitmapFill,
    t.ef = t.endFill,
    t.ss = t.setStrokeStyle,
    t.sd = t.setStrokeDash,
    t.s = t.beginStroke,
    t.ls = t.beginLinearGradientStroke,
    t.rs = t.beginRadialGradientStroke,
    t.bs = t.beginBitmapStroke,
    t.es = t.endStroke,
    t.dr = t.drawRect,
    t.rr = t.drawRoundRect,
    t.rc = t.drawRoundRectComplex,
    t.dc = t.drawCircle,
    t.de = t.drawEllipse,
    t.dp = t.drawPolyStar,
    t.p = t.decodePath,
    t._updateInstructions = function(t) {
        var e = this._instructions
          , i = this._activeInstructions
          , s = this._commitIndex;
        if (this._dirty && i.length) {
            e.length = s,
            e.push(w.beginCmd);
            var n = i.length
              , a = e.length;
            e.length = a + n;
            for (var r = 0; r < n; r++)
                e[r + a] = i[r];
            this._fill && e.push(this._fill),
            this._stroke && (this._strokeDash !== this._oldStrokeDash && e.push(this._strokeDash),
            this._strokeStyle !== this._oldStrokeStyle && e.push(this._strokeStyle),
            t && (this._oldStrokeStyle = this._strokeStyle,
            this._oldStrokeDash = this._strokeDash),
            e.push(this._stroke)),
            this._dirty = !1
        }
        t && (i.length = 0,
        this._commitIndex = e.length)
    }
    ,
    t._setFill = function(t) {
        return this._updateInstructions(!0),
        this.command = this._fill = t,
        this
    }
    ,
    t._setStroke = function(t) {
        return this._updateInstructions(!0),
        (this.command = this._stroke = t) && (t.ignoreScale = this._strokeIgnoreScale),
        this
    }
    ,
    (h.LineTo = function(t, e) {
        this.x = t,
        this.y = e
    }
    ).prototype.exec = function(t) {
        t.lineTo(this.x, this.y)
    }
    ,
    (h.MoveTo = function(t, e) {
        this.x = t,
        this.y = e
    }
    ).prototype.exec = function(t) {
        t.moveTo(this.x, this.y)
    }
    ,
    (h.ArcTo = function(t, e, i, s, n) {
        this.x1 = t,
        this.y1 = e,
        this.x2 = i,
        this.y2 = s,
        this.radius = n
    }
    ).prototype.exec = function(t) {
        t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
    }
    ,
    (h.Arc = function(t, e, i, s, n, a) {
        this.x = t,
        this.y = e,
        this.radius = i,
        this.startAngle = s,
        this.endAngle = n,
        this.anticlockwise = !!a
    }
    ).prototype.exec = function(t) {
        t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
    }
    ,
    (h.QuadraticCurveTo = function(t, e, i, s) {
        this.cpx = t,
        this.cpy = e,
        this.x = i,
        this.y = s
    }
    ).prototype.exec = function(t) {
        t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
    }
    ,
    (h.BezierCurveTo = function(t, e, i, s, n, a) {
        this.cp1x = t,
        this.cp1y = e,
        this.cp2x = i,
        this.cp2y = s,
        this.x = n,
        this.y = a
    }
    ).prototype.exec = function(t) {
        t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
    }
    ,
    (h.Rect = function(t, e, i, s) {
        this.x = t,
        this.y = e,
        this.w = i,
        this.h = s
    }
    ).prototype.exec = function(t) {
        t.rect(this.x, this.y, this.w, this.h)
    }
    ,
    (h.ClosePath = function() {}
    ).prototype.exec = function(t) {
        t.closePath()
    }
    ,
    (h.BeginPath = function() {}
    ).prototype.exec = function(t) {
        t.beginPath()
    }
    ,
    t = (h.Fill = function(t, e) {
        this.style = t,
        this.matrix = e
    }
    ).prototype,
    t.exec = function(t) {
        var e;
        this.style && (t.fillStyle = this.style,
        e = this.matrix,
        e && (t.save(),
        t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)),
        t.fill(),
        e) && t.restore()
    }
    ,
    t.linearGradient = function(t, e, i, s, n, a) {
        for (var r = this.style = w._ctx.createLinearGradient(i, s, n, a), o = 0, h = t.length; o < h; o++)
            r.addColorStop(e[o], t[o]);
        return r.props = {
            colors: t,
            ratios: e,
            x0: i,
            y0: s,
            x1: n,
            y1: a,
            type: "linear"
        },
        this
    }
    ,
    t.radialGradient = function(t, e, i, s, n, a, r, o) {
        for (var h = this.style = w._ctx.createRadialGradient(i, s, n, a, r, o), l = 0, c = t.length; l < c; l++)
            h.addColorStop(e[l], t[l]);
        return h.props = {
            colors: t,
            ratios: e,
            x0: i,
            y0: s,
            r0: n,
            x1: a,
            y1: r,
            r1: o,
            type: "radial"
        },
        this
    }
    ,
    t.bitmap = function(t, e) {
        var i;
        return (t.naturalWidth || t.getContext || 2 <= t.readyState) && (i = this.style = w._ctx.createPattern(t, e || ""),
        i.props = {
            image: t,
            repetition: e,
            type: "bitmap"
        }),
        this
    }
    ,
    t.path = !1,
    t = (h.Stroke = function(t, e) {
        this.style = t,
        this.ignoreScale = e
    }
    ).prototype,
    t.exec = function(t) {
        this.style && (t.strokeStyle = this.style,
        this.ignoreScale && (t.save(),
        t.setTransform(1, 0, 0, 1, 0, 0)),
        t.stroke(),
        this.ignoreScale) && t.restore()
    }
    ,
    t.linearGradient = h.Fill.prototype.linearGradient,
    t.radialGradient = h.Fill.prototype.radialGradient,
    t.bitmap = h.Fill.prototype.bitmap,
    t.path = !1,
    t = (h.StrokeStyle = function(t, e, i, s, n) {
        this.width = t,
        this.caps = e,
        this.joints = i,
        this.miterLimit = s,
        this.ignoreScale = n
    }
    ).prototype,
    t.exec = function(t) {
        t.lineWidth = null == this.width ? "1" : this.width,
        t.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : w.STROKE_CAPS_MAP[this.caps],
        t.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : w.STROKE_JOINTS_MAP[this.joints],
        t.miterLimit = null == this.miterLimit ? "10" : this.miterLimit,
        t.ignoreScale = null != this.ignoreScale && this.ignoreScale
    }
    ,
    t.path = !1,
    (h.StrokeDash = function(t, e) {
        this.segments = t,
        this.offset = e || 0
    }
    ).prototype.exec = function(t) {
        t.setLineDash && (t.setLineDash(this.segments || h.StrokeDash.EMPTY_SEGMENTS),
        t.lineDashOffset = this.offset || 0)
    }
    ,
    h.StrokeDash.EMPTY_SEGMENTS = [],
    (h.RoundRect = function(t, e, i, s, n, a, r, o) {
        this.x = t,
        this.y = e,
        this.w = i,
        this.h = s,
        this.radiusTL = n,
        this.radiusTR = a,
        this.radiusBR = r,
        this.radiusBL = o
    }
    ).prototype.exec = function(t) {
        var e = NaN
          , i = 0
          , s = 0
          , n = 0
          , a = 0
          , r = this.x
          , o = this.y
          , h = this.w
          , l = this.h
          , c = this.radiusTL
          , u = this.radiusTR
          , d = this.radiusBR
          , p = this.radiusBL;
        c < 0 && (c *= i = -1),
        e < c && (c = e),
        u < 0 && (u *= s = -1),
        e < u && (u = e),
        d < 0 && (d *= n = -1),
        e < d && (d = e),
        p < 0 && (p *= a = -1),
        e < p && (p = e),
        t.moveTo(r + h - u, o),
        t.arcTo(r + h + u * s, o - u * s, r + h, o + u, u),
        t.lineTo(r + h, o + l - d),
        t.arcTo(r + h + d * n, o + l + d * n, r + h - d, o + l, d),
        t.lineTo(r + p, o + l),
        t.arcTo(r - p * a, o + l + p * a, r, o + l - p, p),
        t.lineTo(r, o + c),
        t.arcTo(r - c * i, o - c * i, r + c, o, c),
        t.closePath()
    }
    ,
    (h.Circle = function(t, e, i) {
        this.x = t,
        this.y = e,
        this.radius = i
    }
    ).prototype.exec = function(t) {
        t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    }
    ,
    (h.Ellipse = function(t, e, i, s) {
        this.x = t,
        this.y = e,
        this.w = i,
        this.h = s
    }
    ).prototype.exec = function(t) {
        var e = this.x
          , i = this.y
          , s = this.w
          , n = this.h
          , a = s / 2 * .5522848
          , r = n / 2 * .5522848
          , o = e + s
          , h = i + n
          , s = e + s / 2
          , n = i + n / 2;
        t.moveTo(e, n),
        t.bezierCurveTo(e, n - r, s - a, i, s, i),
        t.bezierCurveTo(s + a, i, o, n - r, o, n),
        t.bezierCurveTo(o, n + r, s + a, h, s, h),
        t.bezierCurveTo(s - a, h, e, n + r, e, n)
    }
    ,
    (h.PolyStar = function(t, e, i, s, n, a) {
        this.x = t,
        this.y = e,
        this.radius = i,
        this.sides = s,
        this.pointSize = n,
        this.angle = a
    }
    ).prototype.exec = function(t) {
        var e = this.x
          , i = this.y
          , s = this.radius
          , n = (this.angle || 0) / 180 * Math.PI
          , a = this.sides
          , r = 1 - (this.pointSize || 0)
          , o = Math.PI / a;
        t.moveTo(e + Math.cos(n) * s, i + Math.sin(n) * s);
        for (var h = 0; h < a; h++)
            n += o,
            1 != r && t.lineTo(e + Math.cos(n) * s * r, i + Math.sin(n) * s * r),
            n += o,
            t.lineTo(e + Math.cos(n) * s, i + Math.sin(n) * s);
        t.closePath()
    }
    ,
    w.beginCmd = new h.BeginPath,
    createjs.Graphics = w
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function a() {
        this.EventDispatcher_constructor(),
        this.noMouseOverTest = !1,
        this.alpha = 1,
        this.cacheCanvas = null,
        this.bitmapCache = null,
        this.id = createjs.UID.get(),
        this.mouseEnabled = !0,
        this.tickEnabled = !0,
        this.name = null,
        this.parent = null,
        this.regX = 0,
        this.regY = 0,
        this.rotation = 0,
        this.scaleX = 1,
        this.scaleY = 1,
        this.skewX = 0,
        this.skewY = 0,
        this.shadow = null,
        this.visible = !0,
        this.x = 0,
        this.y = 0,
        this.transformMatrix = null,
        this.compositeOperation = null,
        this.snapToPixel = !0,
        this.filters = null,
        this.mask = null,
        this.hitArea = null,
        this.cursor = null,
        this._props = new createjs.DisplayProps,
        this._rectangle = new createjs.Rectangle,
        this._bounds = null,
        this._webGLRenderStyle = a._StageGL_NONE
    }
    var t = createjs.extend(a, createjs.EventDispatcher)
      , e = (a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"],
    a.suppressCrossDomainErrors = !1,
    a._snapToPixelEnabled = !1,
    a._StageGL_NONE = 0,
    a._StageGL_SPRITE = 1,
    a._StageGL_BITMAP = 2,
    createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"));
    e.getContext && (a._hitTestCanvas = e,
    a._hitTestContext = e.getContext("2d"),
    e.width = e.height = 1),
    t._getStage = function() {
        for (var t = this, e = createjs.Stage; t.parent; )
            t = t.parent;
        return t instanceof e ? t : null
    }
    ,
    t.getStage = createjs.deprecate(t._getStage, "DisplayObject.getStage");
    try {
        Object.defineProperties(t, {
            stage: {
                get: t._getStage
            },
            cacheID: {
                get: function() {
                    return this.bitmapCache && this.bitmapCache.cacheID
                },
                set: function(t) {
                    this.bitmapCache && (this.bitmapCache.cacheID = t)
                }
            },
            scale: {
                get: function() {
                    return this.scaleX
                },
                set: function(t) {
                    this.scaleX = this.scaleY = t
                }
            }
        })
    } catch (t) {}
    t.isVisible = function() {
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY)
    }
    ,
    t.draw = function(t, e) {
        var i = this.bitmapCache;
        return !(!i || e) && i.draw(t)
    }
    ,
    t.updateContext = function(t) {
        var e = this
          , i = e.mask
          , s = e._props.matrix
          , i = (i && i.graphics && !i.graphics.isEmpty() && (i.getMatrix(s),
        t.transform(s.a, s.b, s.c, s.d, s.tx, s.ty),
        i.graphics.drawAsPath(t),
        t.clip(),
        s.invert(),
        t.transform(s.a, s.b, s.c, s.d, s.tx, s.ty)),
        this.getMatrix(s),
        s.tx)
          , n = s.ty;
        a._snapToPixelEnabled && e.snapToPixel && (i = i + (i < 0 ? -.5 : .5) | 0,
        n = n + (n < 0 ? -.5 : .5) | 0),
        t.transform(s.a, s.b, s.c, s.d, i, n),
        t.globalAlpha *= e.alpha,
        e.compositeOperation && (t.globalCompositeOperation = e.compositeOperation),
        e.shadow && this._applyShadow(t, e.shadow)
    }
    ,
    t.cache = function(t, e, i, s, n, a) {
        this.bitmapCache || (this.bitmapCache = new createjs.BitmapCache),
        this.bitmapCache.define(this, t, e, i, s, n, a)
    }
    ,
    t.updateCache = function(t) {
        if (!this.bitmapCache)
            throw "cache() must be called before updateCache()";
        this.bitmapCache.update(t)
    }
    ,
    t.uncache = function() {
        this.bitmapCache && (this.bitmapCache.release(),
        this.bitmapCache = void 0)
    }
    ,
    t.getCacheDataURL = function() {
        return this.bitmapCache ? this.bitmapCache.getDataURL() : null
    }
    ,
    t.localToGlobal = function(t, e, i) {
        return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs.Point)
    }
    ,
    t.globalToLocal = function(t, e, i) {
        return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new createjs.Point)
    }
    ,
    t.localToLocal = function(t, e, i, s) {
        return s = this.localToGlobal(t, e, s),
        i.globalToLocal(s.x, s.y, s)
    }
    ,
    t.setTransform = function(t, e, i, s, n, a, r, o, h) {
        return this.x = t || 0,
        this.y = e || 0,
        this.scaleX = null == i ? 1 : i,
        this.scaleY = null == s ? 1 : s,
        this.rotation = n || 0,
        this.skewX = a || 0,
        this.skewY = r || 0,
        this.regX = o || 0,
        this.regY = h || 0,
        this
    }
    ,
    t.getMatrix = function(t) {
        var e = this
          , t = t && t.identity() || new createjs.Matrix2D;
        return e.transformMatrix ? t.copy(e.transformMatrix) : t.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
    }
    ,
    t.getConcatenatedMatrix = function(t) {
        for (var e = this, i = this.getMatrix(t); e = e.parent; )
            i.prependMatrix(e.getMatrix(e._props.matrix));
        return i
    }
    ,
    t.getConcatenatedDisplayProps = function(t) {
        t = t ? t.identity() : new createjs.DisplayProps;
        for (var e = this, i = e.getMatrix(t.matrix); t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation),
        e != this && i.prependMatrix(e.getMatrix(e._props.matrix)),
        e = e.parent; )
            ;
        return t
    }
    ,
    t.hitTest = function(t, e) {
        var i = a._hitTestContext
          , t = (i.setTransform(1, 0, 0, 1, -t, -e),
        this.draw(i),
        this._testHit(i));
        return i.setTransform(1, 0, 0, 1, 0, 0),
        i.clearRect(0, 0, 2, 2),
        t
    }
    ,
    t.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    t.getBounds = function() {
        var t, e;
        return this._bounds ? this._rectangle.copy(this._bounds) : (t = this.cacheCanvas,
        t ? (e = this._cacheScale,
        this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)) : null)
    }
    ,
    t.getTransformedBounds = function() {
        return this._getBounds()
    }
    ,
    t.setBounds = function(t, e, i, s) {
        this._bounds = null == t ? t : (this._bounds || new createjs.Rectangle).setValues(t, e, i, s)
    }
    ,
    t.clone = function() {
        return this._cloneProps(new a)
    }
    ,
    t.toString = function() {
        return "[DisplayObject (name=" + this.name + ")]"
    }
    ,
    t._updateState = null,
    t._cloneProps = function(t) {
        return t.alpha = this.alpha,
        t.mouseEnabled = this.mouseEnabled,
        t.tickEnabled = this.tickEnabled,
        t.name = this.name,
        t.regX = this.regX,
        t.regY = this.regY,
        t.rotation = this.rotation,
        t.scaleX = this.scaleX,
        t.scaleY = this.scaleY,
        t.shadow = this.shadow,
        t.skewX = this.skewX,
        t.skewY = this.skewY,
        t.visible = this.visible,
        t.x = this.x,
        t.y = this.y,
        t.compositeOperation = this.compositeOperation,
        t.snapToPixel = this.snapToPixel,
        t.filters = null == this.filters ? null : this.filters.slice(0),
        t.mask = this.mask,
        t.hitArea = this.hitArea,
        t.cursor = this.cursor,
        t._bounds = this._bounds,
        t
    }
    ,
    t._intermediateHitTest = function(t, e) {
        if (this.hitCircle) {
            var i = this.globalToLocal(t, e)
              , s = this.hitCircle.radius * this.hitCircle.radius
              , n = (i.x - this.hitCircle.x) * (i.x - this.hitCircle.x) + (i.y - this.hitCircle.y) * (i.y - this.hitCircle.y);
            if (n <= s)
                return !0
        }
        if ("number" == typeof this.hitRadius) {
            i = this.globalToLocal(t, e),
            s = this.hitRadius * this.hitRadius,
            n = +i.x * +i.x + +i.y * +i.y;
            if (n <= s)
                return !0
        }
        if (this.hitRect) {
            i = this.globalToLocal(t, e);
            if (this.hitRect.contains(i.x, i.y))
                return !0
        }
        return !this.hitRect && !this.hitCircle && "number" != typeof this.hitRadius && !!this.hitArea && this.hitArea._intermediateHitTest(t, e)
    }
    ,
    t._optimizedHitTest = function(t, e) {
        if (this.hitCircle) {
            var i = this.globalToLocal(t, e)
              , s = this.hitCircle.radius * this.hitCircle.radius
              , n = (i.x - this.hitCircle.x) * (i.x - this.hitCircle.x) + (i.y - this.hitCircle.y) * (i.y - this.hitCircle.y);
            if (n <= s)
                return !0
        }
        if (this.hitRect) {
            i = this.globalToLocal(t, e);
            if (this.hitRect.contains(i.x, i.y))
                return !0
        }
        if (!this.hitRect && !this.hitCircle)
            if (this.isHitArea) {
                for (var a = !1, r = 0; r < this.children.length; ++r)
                    if (this.children[r]._optimizedHitTest(t, e)) {
                        a = !0;
                        break
                    }
                if (a)
                    return !0
            } else if (this.hitArea)
                return this.hitArea._optimizedHitTest(t, e);
        return !1
    }
    ,
    t._applyShadow = function(t, e) {
        e = e || Shadow.identity,
        t.shadowColor = e.color,
        t.shadowOffsetX = e.offsetX,
        t.shadowOffsetY = e.offsetY,
        t.shadowBlur = e.blur
    }
    ,
    t._tick = function(t) {
        var e = this._listeners;
        e && e.tick && (t.target = null,
        t.propagationStopped = t.immediatePropagationStopped = !1,
        this.dispatchEvent(t))
    }
    ,
    t._testHit = function(t) {
        try {
            var e = 1 < t.getImageData(0, 0, 1, 1).data[3]
        } catch (t) {
            if (!a.suppressCrossDomainErrors)
                throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
        }
        return e
    }
    ,
    t._getBounds = function(t, e) {
        return this._transformBounds(this.getBounds(), t, e)
    }
    ,
    t._transformBounds = function(t, e, i) {
        var s, n, a, r, o, h, l, c, u, d;
        return t && (s = t.x,
        n = t.y,
        a = t.width,
        r = t.height,
        h = this._props.matrix,
        h = i ? h.identity() : this.getMatrix(h),
        (s || n) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -s, -n),
        e && h.prependMatrix(e),
        i = a * h.a,
        e = a * h.b,
        a = r * h.c,
        r = r * h.d,
        o = h.tx,
        h = h.ty,
        l = o,
        c = o,
        u = h,
        d = h,
        (s = i + o) < l ? l = s : c < s && (c = s),
        (s = i + a + o) < l ? l = s : c < s && (c = s),
        (s = a + o) < l ? l = s : c < s && (c = s),
        (n = e + h) < u ? u = n : d < n && (d = n),
        (n = e + r + h) < u ? u = n : d < n && (d = n),
        (n = r + h) < u ? u = n : d < n && (d = n),
        t.setValues(l, u, c - l, d - u))
    }
    ,
    t._hasMouseEventListener = function() {
        for (var t = a._MOUSE_EVENTS, e = 0, i = t.length; e < i; e++)
            if (this.hasEventListener(t[e]))
                return !0;
        return !!this.cursor
    }
    ,
    createjs.DisplayObject = createjs.promote(a, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function v() {
        this.DisplayObject_constructor(),
        this.children = [],
        this.mouseChildren = !0,
        this.tickChildren = !0
    }
    var t = createjs.extend(v, createjs.DisplayObject);
    t._getNumChildren = function() {
        return this.children.length
    }
    ,
    t.getNumChildren = createjs.deprecate(t._getNumChildren, "Container.getNumChildren");
    try {
        Object.defineProperties(t, {
            numChildren: {
                get: t._getNumChildren
            }
        })
    } catch (t) {}
    t.initialize = v,
    t.isVisible = function() {
        var t = this.cacheCanvas || this.children.length;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && t)
    }
    ,
    t.draw = function(t, e) {
        if (!this.DisplayObject_draw(t, e))
            for (var i = this.children.slice(), s = 0, n = i.length; s < n; s++) {
                var a = i[s];
                a.isVisible() && (t.save(),
                a.updateContext(t),
                a.draw(t),
                t.restore())
            }
        return !0
    }
    ,
    t.addChild = function(t) {
        if (null != t) {
            var e = arguments.length;
            if (1 < e) {
                for (var i = 0; i < e; i++)
                    this.addChild(arguments[i]);
                return arguments[e - 1]
            }
            var s = t.parent
              , n = s === this;
            s && s._removeChildAt(createjs.indexOf(s.children, t), n),
            t.parent = this,
            this.children.push(t),
            n || t.dispatchEvent("added")
        }
        return t
    }
    ,
    t.addChildAt = function(t, e) {
        var i = arguments.length
          , s = arguments[i - 1];
        if (s < 0 || s > this.children.length)
            return arguments[i - 2];
        if (2 < i) {
            for (var n = 0; n < i - 1; n++)
                this.addChildAt(arguments[n], s + n);
            return arguments[i - 2]
        }
        var a = t.parent
          , r = a === this;
        return a && a._removeChildAt(createjs.indexOf(a.children, t), r),
        t.parent = this,
        this.children.splice(e, 0, t),
        r || t.dispatchEvent("added"),
        t
    }
    ,
    t.removeChild = function(t) {
        var e = arguments.length;
        if (1 < e) {
            for (var i = !0, s = 0; s < e; s++)
                i = i && this.removeChild(arguments[s]);
            return i
        }
        return this._removeChildAt(createjs.indexOf(this.children, t))
    }
    ,
    t.removeChildAt = function(t) {
        var e = arguments.length;
        if (1 < e) {
            for (var i = [], s = 0; s < e; s++)
                i[s] = arguments[s];
            i.sort(function(t, e) {
                return e - t
            });
            for (var n = !0, s = 0; s < e; s++)
                n = n && this._removeChildAt(i[s]);
            return n
        }
        return this._removeChildAt(t)
    }
    ,
    t.removeAllChildren = function() {
        for (var t = this.children; t.length; )
            this._removeChildAt(0)
    }
    ,
    t.getChildAt = function(t) {
        return this.children[t]
    }
    ,
    t.getChildByName = function(t) {
        for (var e = this.children, i = 0, s = e.length; i < s; i++)
            if (e[i].name == t)
                return e[i];
        return null
    }
    ,
    t.sortChildren = function(t) {
        this.children.sort(t)
    }
    ,
    t.getChildIndex = function(t) {
        return createjs.indexOf(this.children, t)
    }
    ,
    t.swapChildrenAt = function(t, e) {
        var i = this.children
          , s = i[t]
          , n = i[e];
        s && n && (i[t] = n,
        i[e] = s)
    }
    ,
    t.swapChildren = function(t, e) {
        for (var i, s, n = this.children, a = 0, r = n.length; a < r && (n[a] == t && (i = a),
        n[a] == e && (s = a),
        null == i || null == s); a++)
            ;
        a != r && (n[i] = e,
        n[s] = t)
    }
    ,
    t.setChildIndex = function(t, e) {
        var i = this.children
          , s = i.length;
        if (!(t.parent != this || e < 0 || s <= e)) {
            for (var n = 0; n < s && i[n] != t; n++)
                ;
            n != s && n != e && (i.splice(n, 1),
            i.splice(e, 0, t))
        }
    }
    ,
    t.contains = function(t) {
        for (; t; ) {
            if (t == this)
                return !0;
            t = t.parent
        }
        return !1
    }
    ,
    t.hitTest = function(t, e) {
        return null != this.getObjectUnderPoint(t, e)
    }
    ,
    t.getObjectsUnderPoint = function(t, e, i) {
        var s = []
          , t = this.localToGlobal(t, e);
        return this._getObjectsUnderPoint(t.x, t.y, s, 0 < i, 1 == i),
        s
    }
    ,
    t.getObjectUnderPoint = function(t, e, i) {
        t = this.localToGlobal(t, e);
        return this._getObjectsUnderPoint(t.x, t.y, null, 0 < i, 1 == i)
    }
    ,
    t.getBounds = function() {
        return this._getBounds(null, !0)
    }
    ,
    t.getTransformedBounds = function() {
        return this._getBounds()
    }
    ,
    t.clone = function(t) {
        var e = this._cloneProps(new v);
        return t && this._cloneChildren(e),
        e
    }
    ,
    t.toString = function() {
        return "[Container (name=" + this.name + ")]"
    }
    ,
    t._tick = function(t) {
        if (this.tickChildren)
            for (var e = this.children.length - 1; 0 <= e; e--) {
                var i = this.children[e];
                i.tickEnabled && i._tick && i._tick(t)
            }
        this.DisplayObject__tick(t)
    }
    ,
    t._cloneChildren = function(t) {
        t.children.length && t.removeAllChildren();
        for (var e = t.children, i = 0, s = this.children.length; i < s; i++) {
            var n = this.children[i].clone(!0);
            n.parent = t,
            e.push(n)
        }
    }
    ,
    t._removeChildAt = function(t, e) {
        var i;
        return !(t < 0 || t > this.children.length - 1 || (i = this.children[t],
        i && (i.parent = null),
        this.children.splice(t, 1),
        e || i.dispatchEvent("removed"),
        0))
    }
    ,
    t._getObjectsUnderPoint = function(t, e, i, s, n, a, r) {
        if (createjs.useIntermediateHitTesting) {
            if (a = a || 0,
            (a || this._testMask(this, t, e)) && (n = n || s && this._hasMouseEventListener(),
            !r || !this.noMouseOverTest) && (!s || this.mouseEnabled)) {
                if (this.hitRect || this.hitCircle || this.hitArea || "number" == typeof this.hitRadius)
                    return this._intermediateHitTest(t, e) ? this : null;
                for (var o = this.children, h = o.length, l = h - 1; 0 <= l; l--) {
                    var c = o[l];
                    if (c.visible && (c.mouseEnabled && 0 !== c.alpha && c instanceof v)) {
                        var u = c._getObjectsUnderPoint(t, e, i, s, n, a + 1, r);
                        if (!i && u)
                            return s && !this.mouseChildren ? this : u
                    }
                }
            }
        } else if (createjs.useOptimizedHitTesting) {
            if (a = a || 0,
            (a || this._testMask(this, t, e)) && (n = n || s && this._hasMouseEventListener(),
            !r || !this.noMouseOverTest) && (!s || this.mouseEnabled)) {
                if (this.hitRect || this.hitCircle || this.hitArea)
                    return this._optimizedHitTest(t, e) ? this : null;
                if (this.mouseChildren)
                    for (o = this.children,
                    h = o.length,
                    l = h - 1; 0 <= l; l--) {
                        c = o[l];
                        if (c.visible && (c.mouseEnabled && 0 !== c.alpha && c instanceof v)) {
                            u = c._getObjectsUnderPoint(t, e, i, s, n, a + 1, r);
                            if (!i && u)
                                return s && !this.mouseChildren ? this : u
                        }
                    }
            }
        } else if (createjs.warnedUnoptimizedHitTesting || (createjs.warnedUnoptimizedHitTesting = !0,
        console.warn("WARNING: CreateJS is using unoptimized hit testing. This may incure a performance hit becuase it allows to pixel testing.")),
        (!r || !this.noMouseOverTest) && (a = a || 0,
        a || this._testMask(this, t, e))) {
            var d = createjs.DisplayObject._hitTestContext;
            if (n = n || s && this._hasMouseEventListener(),
            this.hitCircle) {
                var p = this.globalToLocal(t, e)
                  , m = this.hitCircle.radius * this.hitCircle.radius
                  , _ = (p.x - this.hitCircle.x) * (p.x - this.hitCircle.x) + (p.y - this.hitCircle.y) * (p.y - this.hitCircle.y);
                if (_ <= m)
                    return this
            }
            if (this.hitRect) {
                p = this.globalToLocal(t, e);
                if (this.hitRect.contains(p.x, p.y))
                    return this
            }
            if (!this.hitRect && !this.hitCircle)
                for (o = this.children,
                h = o.length,
                l = h - 1; 0 <= l; l--) {
                    c = o[l];
                    if (!r || !c.noMouseOverTest) {
                        var f = c.hitArea;
                        if (c.visible && (f || c.isVisible()) && (!s || c.mouseEnabled) && (f || this._testMask(c, t, e)))
                            if (!f && c instanceof v) {
                                u = c._getObjectsUnderPoint(t, e, i, s, n, a + 1, r);
                                if (!i && u)
                                    return s && !this.mouseChildren ? this : u
                            } else if (!s || n || c._hasMouseEventListener()) {
                                var g = c.getConcatenatedDisplayProps(c._props)
                                  , w = g.matrix;
                                if (f && (w.appendMatrix(f.getMatrix(f._props.matrix)),
                                g.alpha = f.alpha),
                                d.globalAlpha = g.alpha,
                                d.setTransform(w.a, w.b, w.c, w.d, w.tx - t, w.ty - e),
                                (f || c).draw(d),
                                this._testHit(d)) {
                                    if (d.setTransform(1, 0, 0, 1, 0, 0),
                                    d.clearRect(0, 0, 2, 2),
                                    !i)
                                        return s && !this.mouseChildren ? this : c;
                                    i.push(c)
                                }
                            }
                    }
                }
        }
        return null
    }
    ,
    t._testMask = function(t, e, i) {
        var s = t.mask;
        if (s && s.graphics && !s.graphics.isEmpty()) {
            var n = this._props.matrix
              , t = t.parent
              , n = t ? t.getConcatenatedMatrix(n) : n.identity()
              , t = (n = s.getMatrix(s._props.matrix).prependMatrix(n),
            createjs.DisplayObject._hitTestContext);
            if (t.setTransform(n.a, n.b, n.c, n.d, n.tx - e, n.ty - i),
            s.graphics.drawAsPath(t),
            t.fillStyle = "#000",
            t.fill(),
            !this._testHit(t))
                return !1;
            t.setTransform(1, 0, 0, 1, 0, 0),
            t.clearRect(0, 0, 2, 2)
        }
        return !0
    }
    ,
    t._getBounds = function(t, e) {
        var i = this.DisplayObject_getBounds();
        if (i)
            return this._transformBounds(i, t, e);
        var s = this._props.matrix
          , s = e ? s.identity() : this.getMatrix(s);
        t && s.prependMatrix(t);
        for (var n = this.children.length, a = null, r = 0; r < n; r++) {
            var o = this.children[r];
            o.visible && (i = o._getBounds(s)) && (a ? a.extend(i.x, i.y, i.width, i.height) : a = i.clone())
        }
        return a
    }
    ,
    createjs.Container = createjs.promote(v, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.Container_constructor(),
        "number" != typeof createjs.Stage._247_stage_id_gen && (createjs.Stage._247_stage_id_gen = 0),
        this._247_stage_id = createjs.Stage._247_stage_id_gen,
        createjs.Stage._247_stage_id_gen++,
        this.autoClear = !0,
        this.canvas = "string" == typeof t ? document.getElementById(t) : t,
        this.mouseX = 0,
        this.mouseY = 0,
        this.drawRect = null,
        this.snapToPixelEnabled = !1,
        this.mouseInBounds = !1,
        this.tickOnUpdate = !0,
        this.mouseMoveOutside = !1,
        this.preventSelection = !0,
        this._pointerData = {},
        this._pointerCount = 0,
        this._primaryPointerID = null,
        this._mouseOverIntervalID = null,
        this._nextStage = null,
        this._prevStage = null,
        this.enableDOMEvents(!0)
    }
    var e = createjs.extend(t, createjs.Container);
    e._get_nextStage = function() {
        return this._nextStage
    }
    ,
    e._set_nextStage = function(t) {
        this._nextStage && (this._nextStage._prevStage = null),
        t && (t._prevStage = this),
        this._nextStage = t
    }
    ;
    try {
        Object.defineProperties(e, {
            nextStage: {
                get: e._get_nextStage,
                set: e._set_nextStage
            }
        })
    } catch (t) {}
    e.update = function(t) {
        var e;
        this.canvas && (this.tickOnUpdate && this.tick(t),
        !1 !== this.dispatchEvent("drawstart", !1, !0)) && (createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled,
        t = this.drawRect,
        e = this.canvas.getContext("2d"),
        e.setTransform(1, 0, 0, 1, 0, 0),
        this.autoClear && (t ? e.clearRect(t.x, t.y, t.width, t.height) : e.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)),
        e.save(),
        this.drawRect && (e.beginPath(),
        e.rect(t.x, t.y, t.width, t.height),
        e.clip()),
        this.updateContext(e),
        this.draw(e, !1),
        e.restore(),
        this.dispatchEvent("drawend"))
    }
    ,
    e.tick = function(t) {
        if (this.tickEnabled && !1 !== this.dispatchEvent("tickstart", !1, !0)) {
            var e = new createjs.Event("tick");
            if (t)
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i]);
            this._tick(e),
            this.dispatchEvent("tickend")
        }
    }
    ,
    e.handleEvent = function(t) {
        "tick" == t.type && this.update(t)
    }
    ,
    e.clear = function() {
        var t;
        this.canvas && (t = this.canvas.getContext("2d"),
        t.setTransform(1, 0, 0, 1, 0, 0),
        t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1))
    }
    ,
    e.toDataURL = function(t, e) {
        var i, s, n = this.canvas.getContext("2d"), a = this.canvas.width, r = this.canvas.height, a = (t && (i = n.getImageData(0, 0, a, r),
        s = n.globalCompositeOperation,
        n.globalCompositeOperation = "destination-over",
        n.fillStyle = t,
        n.fillRect(0, 0, a, r)),
        this.canvas.toDataURL(e || "image/png"));
        return t && (n.putImageData(i, 0, 0),
        n.globalCompositeOperation = s),
        a
    }
    ,
    e.enableMouseOver = function(t) {
        if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID),
        this._mouseOverIntervalID = null,
        0 == t) && this._testMouseOver(!0),
        null == t)
            t = 20;
        else if (t <= 0)
            return;
        var e = this;
        this._mouseOverIntervalID = setInterval(function() {
            e._testMouseOver()
        }, 1e3 / Math.min(50, t))
    }
    ,
    e.enableDOMEvents = function(t) {
        null == t && (t = !0);
        var e, i, s = this._eventListeners;
        if (!t && s) {
            for (e in s)
                i = s[e],
                i.t.removeEventListener(e, i.f, !1);
            this._eventListeners = null
        } else if (t && !s && this.canvas) {
            var t = window.addEventListener ? window : document
              , n = this
              , s = this._eventListeners = {};
            for (e in s.mouseup = {
                t: t,
                f: function(t) {
                    n._handleMouseUp(t)
                }
            },
            s.mousemove = {
                t: t,
                f: function(t) {
                    n._handleMouseMove(t)
                }
            },
            s.dblclick = {
                t: this.canvas,
                f: function(t) {
                    n._handleDoubleClick(t)
                }
            },
            s.mousedown = {
                t: this.canvas,
                f: function(t) {
                    n._handleMouseDown(t)
                }
            },
            s)
                i = s[e],
                i.t.addEventListener(e, i.f, !1)
        }
    }
    ,
    e.clone = function() {
        throw "Stage cannot be cloned."
    }
    ,
    e.toString = function() {
        return "[Stage (name=" + this.name + ")]"
    }
    ,
    e._getElementRect = function(e) {
        var i;
        try {
            i = e.getBoundingClientRect()
        } catch (t) {
            i = {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        var t = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0)
          , s = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0)
          , e = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
          , n = parseInt(e.paddingLeft) + parseInt(e.borderLeftWidth)
          , a = parseInt(e.paddingTop) + parseInt(e.borderTopWidth)
          , r = parseInt(e.paddingRight) + parseInt(e.borderRightWidth)
          , e = parseInt(e.paddingBottom) + parseInt(e.borderBottomWidth);
        return {
            left: i.left + t + n,
            right: i.right + t - r,
            top: i.top + s + a,
            bottom: i.bottom + s - e
        }
    }
    ,
    e._getPointerData = function(t) {
        var e = this._pointerData[t]
          , e = e || (this._pointerData[t] = {
            x: 0,
            y: 0
        });
        return e
    }
    ,
    e._handleMouseMove = function(t) {
        var e, i;
        t = t || window.event;
        try {
            e = t.pageX,
            i = t.pageY
        } catch (t) {
            return
        }
        this._handlePointerMove(-1, t, e, i)
    }
    ,
    e._handlePointerMove = function(t, e, i, s, n) {
        var a, r;
        this._prevStage && void 0 === n || this.canvas && (n = this._nextStage,
        a = this._getPointerData(t),
        r = a.inBounds,
        this._updatePointerPosition(t, e, i, s),
        (r || a.inBounds || this.mouseMoveOutside) && (-1 === t && a.inBounds == !r && this._dispatchMouseEvent(this, r ? "mouseleave" : "mouseenter", !1, t, a, e),
        this._dispatchMouseEvent(this, "stagemousemove", !1, t, a, e),
        this._dispatchMouseEvent(a.target, "pressmove", !0, t, a, e)),
        n) && n._handlePointerMove(t, e, i, s, null)
    }
    ,
    e._updatePointerPosition = function(t, e, i, s) {
        var n = this._getElementRect(this.canvas)
          , a = (i -= n.left,
        s -= n.top,
        this.canvas.width)
          , r = this.canvas.height
          , n = (i /= (n.right - n.left) / a,
        s /= (n.bottom - n.top) / r,
        this._getPointerData(t));
        (n.inBounds = 0 <= i && 0 <= s && i <= a - 1 && s <= r - 1) ? (n.x = i,
        n.y = s) : this.mouseMoveOutside && (n.x = i < 0 ? 0 : a - 1 < i ? a - 1 : i,
        n.y = s < 0 ? 0 : r - 1 < s ? r - 1 : s),
        n.posEvtObj = e,
        n.rawX = i,
        n.rawY = s;
        t !== this._primaryPointerID && -1 !== t || (this.mouseX = n.x,
        this.mouseY = n.y,
        this.mouseInBounds = n.inBounds)
    }
    ,
    e._handleMouseUp = function(t) {
        this._handlePointerUp(-1, t, !1)
    }
    ,
    e._handlePointerUp = function(t, e, i, s) {
        var n, a, r = this._nextStage, o = this._getPointerData(t);
        this._prevStage && void 0 === s || (n = null,
        a = o.target,
        s || !a && !r || (n = this._getObjectsUnderPoint(o.x, o.y, null, !0)),
        o.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, o, e, n),
        o.down = !1),
        n == a && this._dispatchMouseEvent(a, "click", !0, t, o, e),
        this._dispatchMouseEvent(a, "pressup", !0, t, o, e),
        i ? (t == this._primaryPointerID && (this._primaryPointerID = null),
        delete this._pointerData[t]) : o.target = null,
        r && r._handlePointerUp(t, e, i, s || n && this))
    }
    ,
    e._handleMouseDown = function(t) {
        this._handlePointerDown(-1, t, t.pageX, t.pageY)
    }
    ,
    e._handlePointerDown = function(t, e, i, s, n) {
        this.preventSelection && e.preventDefault(),
        null != this._primaryPointerID && -1 !== t || (this._primaryPointerID = t),
        null != s && this._updatePointerPosition(t, e, i, s);
        var a = null
          , r = this._nextStage
          , o = this._getPointerData(t);
        n || (a = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)),
        o.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, o, e, a),
        o.down = !0),
        this._dispatchMouseEvent(a, "mousedown", !0, t, o, e),
        r && r._handlePointerDown(t, e, i, s, n || a && this)
    }
    ,
    e._testMouseOver = function(t, e, i) {
        if (!this._prevStage || void 0 !== e) {
            var s = this._nextStage;
            if (this._mouseOverIntervalID) {
                var n = this._getPointerData(-1);
                if (n && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                    for (var a, r, o = n.posEvtObj, h = i || o && o.target == this.canvas, l = null, c = -1, u = "", d = (!e && (t || this.mouseInBounds && h) && (l = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0, void 0, void 0, !0),
                    this._mouseOverX = this.mouseX,
                    this._mouseOverY = this.mouseY),
                    this._mouseOverTarget || []), p = d[d.length - 1], m = this._mouseOverTarget = [], _ = l; _; )
                        m.unshift(_),
                        u = u || _.cursor,
                        _ = _.parent;
                    for (this.canvas.style.cursor = u,
                    !e && i && (i.canvas.style.cursor = u),
                    a = 0,
                    r = m.length; a < r && m[a] == d[a]; a++)
                        c = a;
                    for (p != l && this._dispatchMouseEvent(p, "mouseout", !0, -1, n, o, l),
                    a = d.length - 1; c < a; a--)
                        this._dispatchMouseEvent(d[a], "rollout", !1, -1, n, o, l);
                    for (a = m.length - 1; c < a; a--)
                        this._dispatchMouseEvent(m[a], "rollover", !1, -1, n, o, p);
                    p != l && this._dispatchMouseEvent(l, "mouseover", !0, -1, n, o, p),
                    s && s._testMouseOver(t, e || l && this, i || h && this)
                }
            } else
                s && s._testMouseOver(t, e, i)
        }
    }
    ,
    e._handleDoubleClick = function(t, e) {
        var i = null
          , s = this._nextStage
          , n = this._getPointerData(-1);
        e || (i = this._getObjectsUnderPoint(n.x, n.y, null, !0),
        this._dispatchMouseEvent(i, "dblclick", !0, -1, n, t)),
        s && s._handleDoubleClick(t, e || i && this)
    }
    ,
    e._dispatchMouseEvent = function(t, e, i, s, n, a, r) {
        t && (i || t.hasEventListener(e)) && (e = new createjs.MouseEvent(e,i,!1,n.x,n.y,a,s,s === this._primaryPointerID || -1 === s,n.rawX,n.rawY,r),
        t.dispatchEvent(e))
    }
    ,
    createjs.Stage = createjs.promote(t, "Container")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function C(t, e) {
        if (this.Stage_constructor(t),
        void 0 !== e) {
            if ("object" != typeof e)
                throw "Invalid options object";
            var i = e.premultiply
              , s = e.transparent
              , n = e.antialias
              , a = e.preserveBuffer
              , r = e.autoPurge
        }
        this.vocalDebug = !1,
        this._preserveBuffer = a || !1,
        this._antialias = n || !1,
        this._transparent = s || !1,
        this._premultiply = i || !1,
        this._autoPurge = void 0,
        this.autoPurge = r,
        this._viewportWidth = 0,
        this._viewportHeight = 0,
        this._projectionMatrix = null,
        this._webGLContext = null,
        this._clearColor = {
            r: .5,
            g: .5,
            b: .5,
            a: 0
        },
        this._maxCardsPerBatch = C.DEFAULT_MAX_BATCH_SIZE,
        this._activeShader = null,
        this._vertices = null,
        this._vertexPositionBuffer = null,
        this._uvs = null,
        this._uvPositionBuffer = null,
        this._indices = null,
        this._textureIndexBuffer = null,
        this._alphas = null,
        this._alphaBuffer = null,
        this._textureDictionary = [],
        this._textureIDs = {},
        this._batchTextures = [],
        this._baseTextures = [],
        this._batchTextureCount = 8,
        this._lastTextureInsert = -1,
        this._batchID = 0,
        this._drawID = 0,
        this._slotBlacklist = [],
        this._isDrawing = 0,
        this._lastTrackedCanvas = 0,
        this.isCacheControlled = !1,
        this._cacheContainer = new createjs.Container,
        this._initializeWebGL()
    }
    var t = createjs.extend(C, createjs.Stage);
    C.buildUVRects = function(t, e, i) {
        if (!t || !t._frames)
            return null;
        void 0 === e && (e = -1),
        void 0 === i && (i = !1);
        for (var s = -1 != e && i ? e : 0, n = -1 != e && i ? e + 1 : t._frames.length, a = s; a < n; a++) {
            var r, o = t._frames[a];
            o.uvRect || o.image.width <= 0 || o.image.height <= 0 || (r = o.rect,
            o.uvRect = {
                t: r.y / o.image.height,
                l: r.x / o.image.width,
                b: (r.y + r.height) / o.image.height,
                r: (r.x + r.width) / o.image.width
            })
        }
        return t._frames[-1 != e ? e : 0].uvRect || {
            t: 0,
            l: 0,
            b: 1,
            r: 1
        }
    }
    ,
    C.isWebGLActive = function(t) {
        return t && t instanceof WebGLRenderingContext && "undefined" != typeof WebGLRenderingContext
    }
    ,
    C.VERTEX_PROPERTY_COUNT = 6,
    C.INDICIES_PER_CARD = 6,
    C.DEFAULT_MAX_BATCH_SIZE = 1e4,
    C.WEBGL_MAX_INDEX_NUM = Math.pow(2, 16),
    C.UV_RECT = {
        t: 0,
        l: 0,
        b: 1,
        r: 1
    };
    try {
        C.COVER_VERT = new Float32Array([-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1]),
        C.COVER_UV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]),
        C.COVER_UV_FLIP = new Float32Array([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0])
    } catch (t) {}
    C.REGULAR_VARYING_HEADER = "precision mediump float;varying vec2 vTextureCoord;varying lowp float indexPicker;varying lowp float alphaValue;",
    C.REGULAR_VERTEX_HEADER = C.REGULAR_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;attribute lowp float textureIndex;attribute lowp float objectAlpha;uniform mat4 pMatrix;",
    C.REGULAR_FRAGMENT_HEADER = C.REGULAR_VARYING_HEADER + "uniform sampler2D uSampler[{{count}}];",
    C.REGULAR_VERTEX_BODY = "void main(void) {gl_Position = vec4((vertexPosition.x * pMatrix[0][0]) + pMatrix[3][0],(vertexPosition.y * pMatrix[1][1]) + pMatrix[3][1],pMatrix[3][2],1.0);alphaValue = objectAlpha;indexPicker = textureIndex;vTextureCoord = uvPosition;}",
    C.REGULAR_FRAGMENT_BODY = "void main(void) {vec4 color = vec4(1.0, 0.0, 0.0, 1.0);if (indexPicker <= 0.5) {color = texture2D(uSampler[0], vTextureCoord);{{alternates}}}{{fragColor}}}",
    C.REGULAR_FRAG_COLOR_NORMAL = "gl_FragColor = vec4(color.rgb, color.a * alphaValue);",
    C.REGULAR_FRAG_COLOR_PREMULTIPLY = "if(color.a > 0.0035) {gl_FragColor = vec4(color.rgb/color.a, color.a * alphaValue);} else {gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);}",
    C.PARTICLE_VERTEX_BODY = C.REGULAR_VERTEX_BODY,
    C.PARTICLE_FRAGMENT_BODY = C.REGULAR_FRAGMENT_BODY,
    C.COVER_VARYING_HEADER = "precision mediump float;varying highp vec2 vRenderCoord;varying highp vec2 vTextureCoord;",
    C.COVER_VERTEX_HEADER = C.COVER_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;uniform float uUpright;",
    C.COVER_FRAGMENT_HEADER = C.COVER_VARYING_HEADER + "uniform sampler2D uSampler;",
    C.COVER_VERTEX_BODY = "void main(void) {gl_Position = vec4(vertexPosition.x, vertexPosition.y, 0.0, 1.0);vRenderCoord = uvPosition;vTextureCoord = vec2(uvPosition.x, abs(uUpright - uvPosition.y));}",
    C.COVER_FRAGMENT_BODY = "void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = color;}",
    t._get_isWebGL = function() {
        return !!this._webGLContext
    }
    ,
    t._set_autoPurge = function(t) {
        t = isNaN(t) ? 1200 : t,
        -1 != t && (t = t < 10 ? 10 : t),
        this._autoPurge = t
    }
    ,
    t._get_autoPurge = function() {
        return Number(this._autoPurge)
    }
    ;
    try {
        Object.defineProperties(t, {
            isWebGL: {
                get: t._get_isWebGL
            },
            autoPurge: {
                get: t._get_autoPurge,
                set: t._set_autoPurge
            }
        })
    } catch (t) {}
    t._initializeWebGL = function() {
        if (this.canvas) {
            if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
                var t = {
                    depth: !1,
                    alpha: this._transparent,
                    stencil: !0,
                    antialias: this._antialias,
                    premultipliedAlpha: this._premultiply,
                    preserveDrawingBuffer: this._preserveBuffer
                }
                  , t = this._webGLContext = this._fetchWebGLContext(this.canvas, t);
                if (!t)
                    return null;
                this.updateSimultaneousTextureCount(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),
                this._maxTextureSlots = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                this._createBuffers(t),
                this._initTextures(t),
                t.disable(t.DEPTH_TEST),
                t.enable(t.BLEND),
                t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA),
                t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply),
                this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a),
                this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height)
            }
        } else
            this._webGLContext = null;
        return this._webGLContext
    }
    ,
    t.update = function(t) {
        this.canvas && (this.tickOnUpdate && this.tick(t),
        this.dispatchEvent("drawstart"),
        this.autoClear && this.clear(),
        this._webGLContext ? (this._batchDraw(this, this._webGLContext),
        -1 == this._autoPurge || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge)) : (t = this.canvas.getContext("2d"),
        t.save(),
        this.updateContext(t),
        this.draw(t, !1),
        t.restore()),
        this.dispatchEvent("drawend"))
    }
    ,
    t.clear = function() {
        var t, e, i;
        this.canvas && (C.isWebGLActive(this._webGLContext) ? (t = this._webGLContext,
        e = this._clearColor,
        i = this._transparent ? e.a : 1,
        this._webGLContext.clearColor(e.r * i, e.g * i, e.b * i, i),
        t.clear(t.COLOR_BUFFER_BIT),
        this._webGLContext.clearColor(e.r, e.g, e.b, e.a)) : this.Stage_clear())
    }
    ,
    t.draw = function(t, e) {
        var i;
        return t === this._webGLContext && C.isWebGLActive(this._webGLContext) ? (i = this._webGLContext,
        this._batchDraw(this, i, e),
        !0) : this.Stage_draw(t, e)
    }
    ,
    t.cacheDraw = function(t, e, i) {
        var s;
        return !!C.isWebGLActive(this._webGLContext) && (s = this._webGLContext,
        this._cacheDraw(s, t, e, i),
        !0)
    }
    ,
    t.protectTextureSlot = function(t, e) {
        if (t > this._maxTextureSlots || t < 0)
            throw "Slot outside of acceptable range";
        this._slotBlacklist[t] = !!e
    }
    ,
    t.getTargetRenderTexture = function(t, e, i) {
        var s = !1
          , n = this._webGLContext;
        if (void 0 !== t.__lastRT && t.__lastRT === t.__rtA && (s = !0),
        s = s ? (void 0 === t.__rtB ? t.__rtB = this.getRenderBufferTexture(e, i) : (e == t.__rtB._width && i == t.__rtB._height || this.resizeTexture(t.__rtB, e, i),
        this.setTextureParams(n)),
        t.__rtB) : (void 0 === t.__rtA ? t.__rtA = this.getRenderBufferTexture(e, i) : (e == t.__rtA._width && i == t.__rtA._height || this.resizeTexture(t.__rtA, e, i),
        this.setTextureParams(n)),
        t.__rtA),
        s)
            return t.__lastRT = s,
            s;
        throw "Problems creating render textures, known causes include using too much VRAM by not releasing WebGL texture instances"
    }
    ,
    t.releaseTexture = function(t) {
        var e, i;
        if (t) {
            if (t.children)
                for (e = 0,
                i = t.children.length; e < i; e++)
                    this.releaseTexture(t.children[e]);
            t.cacheCanvas && t.uncache();
            var s = void 0;
            if (void 0 !== t._storeID) {
                if (t === this._textureDictionary[t._storeID])
                    return this._killTextureObject(t),
                    void (t._storeID = void 0);
                s = t
            } else if (2 === t._webGLRenderStyle)
                s = t.image;
            else if (1 === t._webGLRenderStyle) {
                for (e = 0,
                i = t.spriteSheet._images.length; e < i; e++)
                    this.releaseTexture(t.spriteSheet._images[e]);
                return
            }
            void 0 === s ? this.vocalDebug && console.log("No associated texture found on release") : (this._killTextureObject(this._textureDictionary[s._storeID]),
            s._storeID = void 0)
        }
    }
    ,
    t.purgeTextures = function(t) {
        null == t && (t = 100);
        for (var e = this._textureDictionary, i = e.length, s = 0; s < i; s++) {
            var n = e[s];
            n && n._drawID + t <= this._drawID && this._killTextureObject(n)
        }
    }
    ,
    t.updateSimultaneousTextureCount = function(t) {
        var e = this._webGLContext
          , i = !1;
        for ((t < 1 || isNaN(t)) && (t = 1),
        this._batchTextureCount = t; !i; )
            try {
                this._activeShader = this._fetchShaderProgram(e),
                i = !0
            } catch (t) {
                if (1 == this._batchTextureCount)
                    throw "Cannot compile shader " + t;
                this._batchTextureCount -= 4,
                this._batchTextureCount < 1 && (this._batchTextureCount = 1),
                this.vocalDebug && console.log("Reducing desired texture count due to errors: " + this._batchTextureCount)
            }
    }
    ,
    t.updateViewport = function(t, e) {
        this._viewportWidth = 0 | t,
        this._viewportHeight = 0 | e;
        t = this._webGLContext;
        t && (t.viewport(0, 0, this._viewportWidth, this._viewportHeight),
        this._projectionMatrix = new Float32Array([2 / this._viewportWidth, 0, 0, 0, 0, -2 / this._viewportHeight, 1, 0, 0, 0, 1, 0, -1, 1, .1, 0]),
        this._projectionMatrixFlip = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        this._projectionMatrixFlip.set(this._projectionMatrix),
        this._projectionMatrixFlip[5] *= -1,
        this._projectionMatrixFlip[13] *= -1)
    }
    ,
    t.getFilterShader = function(t) {
        t = t || this;
        var e = this._webGLContext
          , i = this._activeShader;
        if (t._builtShader)
            i = t._builtShader,
            t.shaderParamSetup && (e.useProgram(i),
            t.shaderParamSetup(e, this, i));
        else
            try {
                i = this._fetchShaderProgram(e, "filter", t.VTX_SHADER_BODY, t.FRAG_SHADER_BODY, t.shaderParamSetup && t.shaderParamSetup.bind(t)),
                t._builtShader = i,
                i._name = t.toString()
            } catch (t) {
                console && console.log("SHADER SWITCH FAILURE", t)
            }
        return i
    }
    ,
    t.getBaseTexture = function(t, e) {
        var t = Math.ceil(0 < t ? t : 1) || 1
          , e = Math.ceil(0 < e ? e : 1) || 1
          , i = this._webGLContext
          , s = i.createTexture();
        return this.resizeTexture(s, t, e),
        this.setTextureParams(i, !1),
        s
    }
    ,
    t.resizeTexture = function(t, e, i) {
        var s = this._webGLContext;
        s.bindTexture(s.TEXTURE_2D, t),
        s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, e, i, 0, s.RGBA, s.UNSIGNED_BYTE, null),
        t.width = e,
        t.height = i
    }
    ,
    t.getRenderBufferTexture = function(t, e) {
        var i, s = this._webGLContext, n = this.getBaseTexture(t, e);
        return n && (i = s.createFramebuffer(),
        i) ? (n.width = t,
        n.height = e,
        s.bindFramebuffer(s.FRAMEBUFFER, i),
        s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, n, 0),
        i._renderTexture = n,
        n._frameBuffer = i,
        n._storeID = this._textureDictionary.length,
        this._textureDictionary[n._storeID] = n,
        s.bindFramebuffer(s.FRAMEBUFFER, null),
        n) : null
    }
    ,
    t.setTextureParams = function(t, e) {
        e && this._antialias ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
    }
    ,
    t.setClearColor = function(t) {
        var e, i, s, n, a;
        "string" == typeof t ? 0 == t.indexOf("#") ? (4 == t.length && (t = "#" + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2) + t.charAt(3) + t.charAt(3)),
        e = Number("0x" + t.slice(1, 3)) / 255,
        i = Number("0x" + t.slice(3, 5)) / 255,
        s = Number("0x" + t.slice(5, 7)) / 255,
        n = Number("0x" + t.slice(7, 9)) / 255) : 0 == t.indexOf("rgba(") && (a = t.slice(5, -1).split(","),
        e = Number(a[0]) / 255,
        i = Number(a[1]) / 255,
        s = Number(a[2]) / 255,
        n = Number(a[3])) : (e = ((4278190080 & t) >>> 24) / 255,
        i = ((16711680 & t) >>> 16) / 255,
        s = ((65280 & t) >>> 8) / 255,
        n = (255 & t) / 255),
        this._clearColor.r = e || 0,
        this._clearColor.g = i || 0,
        this._clearColor.b = s || 0,
        this._clearColor.a = n || 0,
        this._webGLContext && this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a)
    }
    ,
    t.toString = function() {
        return "[StageGL (name=" + this.name + ")]"
    }
    ,
    t._fetchWebGLContext = function(t, e) {
        var i;
        try {
            i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)
        } catch (t) {}
        return i ? (i.viewportWidth = t.width,
        i.viewportHeight = t.height) : (e = "Could not initialize WebGL",
        console.error ? console.error(e) : console.log(e)),
        i
    }
    ,
    t._fetchShaderProgram = function(t, e, i, s, n) {
        var a, r;
        switch (t.useProgram(null),
        e) {
        case "filter":
            r = C.COVER_VERTEX_HEADER + (i || C.COVER_VERTEX_BODY),
            a = C.COVER_FRAGMENT_HEADER + (s || C.COVER_FRAGMENT_BODY);
            break;
        case "particle":
            r = C.REGULAR_VERTEX_HEADER + C.PARTICLE_VERTEX_BODY,
            a = C.REGULAR_FRAGMENT_HEADER + C.PARTICLE_FRAGMENT_BODY;
            break;
        case "override":
            r = C.REGULAR_VERTEX_HEADER + (i || C.REGULAR_VERTEX_BODY),
            a = C.REGULAR_FRAGMENT_HEADER + (s || C.REGULAR_FRAGMENT_BODY);
            break;
        default:
            r = C.REGULAR_VERTEX_HEADER + C.REGULAR_VERTEX_BODY,
            a = C.REGULAR_FRAGMENT_HEADER + C.REGULAR_FRAGMENT_BODY
        }
        var o = this._createShader(t, t.VERTEX_SHADER, r)
          , h = this._createShader(t, t.FRAGMENT_SHADER, a)
          , l = t.createProgram();
        if (t.attachShader(l, o),
        t.attachShader(l, h),
        t.linkProgram(l),
        l._type = e,
        !t.getProgramParameter(l, t.LINK_STATUS))
            throw t.useProgram(this._activeShader),
            t.getProgramInfoLog(l);
        if (t.useProgram(l),
        "filter" === e)
            l.vertexPositionAttribute = t.getAttribLocation(l, "vertexPosition"),
            t.enableVertexAttribArray(l.vertexPositionAttribute),
            l.uvPositionAttribute = t.getAttribLocation(l, "uvPosition"),
            t.enableVertexAttribArray(l.uvPositionAttribute),
            l.samplerUniform = t.getUniformLocation(l, "uSampler"),
            t.uniform1i(l.samplerUniform, 0),
            l.uprightUniform = t.getUniformLocation(l, "uUpright"),
            t.uniform1f(l.uprightUniform, 0),
            n && n(t, this, l);
        else {
            l.vertexPositionAttribute = t.getAttribLocation(l, "vertexPosition"),
            t.enableVertexAttribArray(l.vertexPositionAttribute),
            l.uvPositionAttribute = t.getAttribLocation(l, "uvPosition"),
            t.enableVertexAttribArray(l.uvPositionAttribute),
            l.textureIndexAttribute = t.getAttribLocation(l, "textureIndex"),
            t.enableVertexAttribArray(l.textureIndexAttribute),
            l.alphaAttribute = t.getAttribLocation(l, "objectAlpha"),
            t.enableVertexAttribArray(l.alphaAttribute);
            for (var c = [], u = 0; u < this._batchTextureCount; u++)
                c[u] = u;
            l.samplerData = c,
            l.samplerUniform = t.getUniformLocation(l, "uSampler"),
            t.uniform1iv(l.samplerUniform, c),
            l.pMatrixUniform = t.getUniformLocation(l, "pMatrix")
        }
        return t.useProgram(this._activeShader),
        l
    }
    ,
    t._createShader = function(t, e, i) {
        i = i.replace(/{{count}}/g, this._batchTextureCount);
        for (var s = "", n = 1; n < this._batchTextureCount; n++)
            s += "} else if (indexPicker <= " + n + ".5) { color = texture2D(uSampler[" + n + "], vTextureCoord);";
        i = i.replace(/{{alternates}}/g, s),
        i = i.replace(/{{fragColor}}/g, this._premultiply ? C.REGULAR_FRAG_COLOR_PREMULTIPLY : C.REGULAR_FRAG_COLOR_NORMAL);
        e = t.createShader(e);
        if (t.shaderSource(e, i),
        t.compileShader(e),
        t.getShaderParameter(e, t.COMPILE_STATUS))
            return e;
        throw t.getShaderInfoLog(e)
    }
    ,
    t._createBuffers = function(t) {
        for (var e, i = this._maxCardsPerBatch * C.INDICIES_PER_CARD, s = this._vertexPositionBuffer = t.createBuffer(), n = (t.bindBuffer(t.ARRAY_BUFFER, s),
        e = 2,
        this._vertices = new Float32Array(i * e)), a = 0, r = n.length; a < r; a += e)
            n[a] = n[a + 1] = 0;
        t.bufferData(t.ARRAY_BUFFER, n, t.DYNAMIC_DRAW),
        s.itemSize = e,
        s.numItems = i;
        var s = this._uvPositionBuffer = t.createBuffer()
          , o = (t.bindBuffer(t.ARRAY_BUFFER, s),
        e = 2,
        this._uvs = new Float32Array(i * e));
        for (a = 0,
        r = o.length; a < r; a += e)
            o[a] = o[a + 1] = 0;
        t.bufferData(t.ARRAY_BUFFER, o, t.DYNAMIC_DRAW),
        s.itemSize = e,
        s.numItems = i;
        var s = this._textureIndexBuffer = t.createBuffer()
          , h = (t.bindBuffer(t.ARRAY_BUFFER, s),
        e = 1,
        this._indices = new Float32Array(i * e));
        for (a = 0,
        r = h.length; a < r; a++)
            h[a] = 0;
        t.bufferData(t.ARRAY_BUFFER, h, t.DYNAMIC_DRAW),
        s.itemSize = e,
        s.numItems = i;
        var s = this._alphaBuffer = t.createBuffer()
          , l = (t.bindBuffer(t.ARRAY_BUFFER, s),
        e = 1,
        this._alphas = new Float32Array(i * e));
        for (a = 0,
        r = l.length; a < r; a++)
            l[a] = 1;
        t.bufferData(t.ARRAY_BUFFER, l, t.DYNAMIC_DRAW),
        s.itemSize = e,
        s.numItems = i
    }
    ,
    t._initTextures = function() {
        this._lastTextureInsert = -1,
        this._textureDictionary = [],
        this._textureIDs = {},
        this._baseTextures = [],
        this._batchTextures = [];
        for (var t = 0; t < this._batchTextureCount; t++) {
            var e = this.getBaseTexture();
            if (this._baseTextures[t] = this._batchTextures[t] = e,
            !e)
                throw "Problems creating basic textures, known causes include using too much VRAM by not releasing WebGL texture instances"
        }
    }
    ,
    t._loadTextureImage = function(t, e) {
        var i = e.src
          , s = (i || (e._isCanvas = !0,
        i = e.src = "canvas_" + this._lastTrackedCanvas++),
        this._textureIDs[i])
          , i = (void 0 === s && (s = this._textureIDs[i] = this._textureDictionary.length),
        void 0 === this._textureDictionary[s] && (this._textureDictionary[s] = this.getBaseTexture()),
        this._textureDictionary[s]);
        return i ? (i._batchID = this._batchID,
        i._storeID = s,
        i._imageData = e,
        this._insertTextureInBatch(t, i),
        e._storeID = s,
        e.complete || e.naturalWidth || e._isCanvas ? this._updateTextureImageData(t, e) : e.addEventListener("load", this._updateTextureImageData.bind(this, t, e))) : (s = "Problem creating desired texture, known causes include using too much VRAM by not releasing WebGL texture instances",
        console.error && console.error(s) || console.log(s),
        i = this._baseTextures[0],
        i._batchID = this._batchID,
        i._storeID = -1,
        i._imageData = i,
        this._insertTextureInBatch(t, i)),
        i
    }
    ,
    t._updateTextureImageData = function(t, e) {
        var i = e.width & e.width - 1 || e.height & e.height - 1
          , s = this._textureDictionary[e._storeID];
        t.activeTexture(t.TEXTURE0 + s._activeIndex),
        t.bindTexture(t.TEXTURE_2D, s),
        s.isPOT = !i,
        this.setTextureParams(t, s.isPOT);
        try {
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e)
        } catch (t) {
            var n = "\nAn error has occurred. This is most likely due to security restrictions on WebGL images with local or cross-domain origins";
            console.error ? (console.error(n),
            console.error(t)) : console && (console.log(n),
            console.log(t))
        }
        e._invalid = !1,
        s._w = e.width,
        s._h = e.height,
        this.vocalDebug && (i && console.warn("NPOT(Non Power of Two) Texture: " + e.src),
        e.width > t.MAX_TEXTURE_SIZE || e.height > t.MAX_TEXTURE_SIZE) && console && console.error("Oversized Texture: " + e.width + "x" + e.height + " vs " + t.MAX_TEXTURE_SIZE + "max")
    }
    ,
    t._insertTextureInBatch = function(t, e) {
        if (this._batchTextures[e._activeIndex] !== e) {
            var i = -1
              , s = (this._lastTextureInsert + 1) % this._batchTextureCount
              , n = s;
            do {
                if (this._batchTextures[n]._batchID != this._batchID && !this._slotBlacklist[n]) {
                    i = n;
                    break
                }
            } while (n = (n + 1) % this._batchTextureCount,
            n !== s);
            -1 === i && (this.batchReason = "textureOverflow",
            this._drawBuffers(t),
            this.batchCardCount = 0,
            i = s),
            this._batchTextures[i] = e,
            e._activeIndex = i;
            var a = e._imageData;
            a && a._invalid && void 0 !== e._drawID ? this._updateTextureImageData(t, a) : (t.activeTexture(t.TEXTURE0 + i),
            t.bindTexture(t.TEXTURE_2D, e),
            this.setTextureParams(t)),
            this._lastTextureInsert = i
        } else {
            a = e._imageData;
            null != e._storeID && a && a._invalid && this._updateTextureImageData(t, a)
        }
        e._drawID = this._drawID,
        e._batchID = this._batchID
    }
    ,
    t._killTextureObject = function(t) {
        if (t) {
            var e = this._webGLContext;
            if (void 0 !== t._storeID && 0 <= t._storeID) {
                for (var i in this._textureDictionary[t._storeID] = void 0,
                this._textureIDs)
                    this._textureIDs[i] == t._storeID && delete this._textureIDs[i];
                t._imageData && (t._imageData._storeID = void 0),
                t._imageData = t._storeID = void 0
            }
            void 0 !== t._activeIndex && this._batchTextures[t._activeIndex] === t && (this._batchTextures[t._activeIndex] = this._baseTextures[t._activeIndex]);
            try {
                t._frameBuffer && e.deleteFramebuffer(t._frameBuffer),
                t._frameBuffer = void 0
            } catch (t) {
                this.vocalDebug && console.log(t)
            }
            try {
                e.deleteTexture(t)
            } catch (t) {
                this.vocalDebug && console.log(t)
            }
        }
    }
    ,
    t._backupBatchTextures = function(t, e) {
        var i = this._webGLContext;
        this._backupTextures || (this._backupTextures = []),
        void 0 === e && (e = this._backupTextures);
        for (var s = 0; s < this._batchTextureCount; s++)
            i.activeTexture(i.TEXTURE0 + s),
            t ? this._batchTextures[s] = e[s] : (e[s] = this._batchTextures[s],
            this._batchTextures[s] = this._baseTextures[s]),
            i.bindTexture(i.TEXTURE_2D, this._batchTextures[s]),
            this.setTextureParams(i, this._batchTextures[s].isPOT);
        t && e === this._backupTextures && (this._backupTextures = [])
    }
    ,
    t._batchDraw = function(t, e, i) {
        0 < this._isDrawing && this._drawBuffers(e),
        this._isDrawing++,
        this._drawID++,
        this.batchCardCount = 0,
        this.depth = 0,
        this._appendToBatchGroup(t, e, new createjs.Matrix2D, this.alpha, i),
        this.batchReason = "drawFinish",
        this._drawBuffers(e),
        this._isDrawing--
    }
    ,
    t._cacheDraw = function(t, e, i, s) {
        var n = this._activeShader
          , a = this._slotBlacklist
          , r = this._maxTextureSlots - 1
          , o = this._viewportWidth
          , h = this._viewportHeight
          , l = (this.protectTextureSlot(r, !0),
        e.getMatrix())
          , l = l.clone()
          , c = (l.scale(1 / s.scale, 1 / s.scale),
        l = l.invert(),
        l.translate(-s.offX / s.scale * e.scaleX, -s.offY / s.scale * e.scaleY),
        this._cacheContainer);
        c.children = [e],
        c.transformMatrix = l,
        this._backupBatchTextures(!1),
        i && i.length ? this._drawFilters(e, i, s) : this.isCacheControlled ? (t.clear(t.COLOR_BUFFER_BIT),
        this._batchDraw(c, t, !0)) : (t.activeTexture(t.TEXTURE0 + r),
        e.cacheCanvas = this.getTargetRenderTexture(e, s._drawWidth, s._drawHeight),
        l = e.cacheCanvas,
        t.bindFramebuffer(t.FRAMEBUFFER, l._frameBuffer),
        this.updateViewport(s._drawWidth, s._drawHeight),
        this._projectionMatrix = this._projectionMatrixFlip,
        t.clear(t.COLOR_BUFFER_BIT),
        this._batchDraw(c, t, !0),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        this.updateViewport(o, h)),
        this._backupBatchTextures(!0),
        this.protectTextureSlot(r, !1),
        this._activeShader = n,
        this._slotBlacklist = a
    }
    ,
    t._drawFilters = function(t, e, i) {
        for (var s, n = this._webGLContext, a = this._maxTextureSlots - 1, r = this._viewportWidth, o = this._viewportHeight, h = this._cacheContainer, l = e.length, c = (n.activeTexture(n.TEXTURE0 + a),
        s = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight),
        n.bindFramebuffer(n.FRAMEBUFFER, s._frameBuffer),
        this.updateViewport(i._drawWidth, i._drawHeight),
        n.clear(n.COLOR_BUFFER_BIT),
        this._batchDraw(h, n, !0),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, s),
        this.setTextureParams(n),
        !1), u = 0, d = e[u]; this._activeShader = this.getFilterShader(d),
        this._activeShader && (n.activeTexture(n.TEXTURE0 + a),
        s = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight),
        n.bindFramebuffer(n.FRAMEBUFFER, s._frameBuffer),
        n.viewport(0, 0, i._drawWidth, i._drawHeight),
        n.clear(n.COLOR_BUFFER_BIT),
        this._drawCover(n, c),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, s),
        this.setTextureParams(n),
        (1 < l || e[0]._multiPass) && (c = !c),
        d = null !== d._multiPass ? d._multiPass : e[++u]),
        d; )
            ;
        this.isCacheControlled ? (n.bindFramebuffer(n.FRAMEBUFFER, null),
        this.updateViewport(r, o),
        this._activeShader = this.getFilterShader(this),
        n.clear(n.COLOR_BUFFER_BIT),
        this._drawCover(n, c)) : (c && (n.activeTexture(n.TEXTURE0 + a),
        s = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight),
        n.bindFramebuffer(n.FRAMEBUFFER, s._frameBuffer),
        this._activeShader = this.getFilterShader(this),
        n.viewport(0, 0, i._drawWidth, i._drawHeight),
        n.clear(n.COLOR_BUFFER_BIT),
        this._drawCover(n, !c)),
        n.bindFramebuffer(n.FRAMEBUFFER, null),
        this.updateViewport(r, o),
        t.cacheCanvas = s)
    }
    ,
    t._appendToBatchGroup = function(t, e, i, s, n) {
        t._glMtx || (t._glMtx = new createjs.Matrix2D);
        for (var a, r, o, h, l = t._glMtx, c = (l.copy(i),
        t.transformMatrix ? l.appendMatrix(t.transformMatrix) : l.appendTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY),
        t.children.length), u = 0; u < c; u++) {
            var d = t.children[u];
            if (d.visible && s)
                if (d.cacheCanvas && !n || (d._updateState && d._updateState(),
                !d.children)) {
                    this.batchCardCount + 1 > this._maxCardsPerBatch && (this.batchReason = "vertexOverflow",
                    this._drawBuffers(e),
                    this.batchCardCount = 0),
                    d._glMtx || (d._glMtx = new createjs.Matrix2D);
                    var p, m, _, f, g = d._glMtx, w = (g.copy(l),
                    d.transformMatrix ? g.appendMatrix(d.transformMatrix) : g.appendTransform(d.x, d.y, d.scaleX, d.scaleY, d.rotation, d.skewX, d.skewY, d.regX, d.regY),
                    d.cacheCanvas && !n);
                    if (2 === d._webGLRenderStyle || w)
                        p = !n && d.cacheCanvas || d.image;
                    else {
                        if (1 !== d._webGLRenderStyle)
                            continue;
                        if (m = d.spriteSheet.getFrame(d.currentFrame),
                        null === m)
                            continue;
                        p = m.image
                    }
                    var v = this._uvs
                      , y = this._vertices
                      , b = this._indices
                      , T = this._alphas;
                    if (p) {
                        if (void 0 === p._storeID)
                            _ = this._loadTextureImage(e, p),
                            this._insertTextureInBatch(e, _);
                        else {
                            if (_ = this._textureDictionary[p._storeID],
                            !_) {
                                this.vocalDebug && console.log("Texture should not be looked up while not being stored.");
                                continue
                            }
                            _._batchID !== this._batchID && this._insertTextureInBatch(e, _)
                        }
                        var S, E = _._activeIndex, w = (2 === d._webGLRenderStyle || w ? h = !w && d.sourceRect ? (d._uvRect || (d._uvRect = {}),
                        f = d.sourceRect,
                        S = d._uvRect,
                        S.t = f.y / p.height,
                        S.l = f.x / p.width,
                        S.b = (f.y + f.height) / p.height,
                        S.r = (f.x + f.width) / p.width,
                        a = 0,
                        r = 0,
                        o = f.width + a,
                        f.height + r) : (S = C.UV_RECT,
                        w ? (f = d.bitmapCache,
                        a = f.x + f._filterOffX / f.scale,
                        r = f.y + f._filterOffY / f.scale,
                        o = f._drawWidth / f.scale + a,
                        f._drawHeight / f.scale + r) : (a = 0,
                        r = 0,
                        o = p.width + a,
                        p.height + r)) : 1 === d._webGLRenderStyle && (w = m.rect,
                        S = m.uvRect,
                        S = S || C.buildUVRects(d.spriteSheet, d.currentFrame, !1),
                        a = -m.regX,
                        r = -m.regY,
                        o = w.width - m.regX,
                        h = w.height - m.regY),
                        this.batchCardCount * C.INDICIES_PER_CARD), x = 2 * w;
                        y[x] = a * g.a + r * g.c + g.tx,
                        y[1 + x] = a * g.b + r * g.d + g.ty,
                        y[2 + x] = a * g.a + h * g.c + g.tx,
                        y[3 + x] = a * g.b + h * g.d + g.ty,
                        y[4 + x] = o * g.a + r * g.c + g.tx,
                        y[5 + x] = o * g.b + r * g.d + g.ty,
                        y[6 + x] = y[2 + x],
                        y[7 + x] = y[3 + x],
                        y[8 + x] = y[4 + x],
                        y[9 + x] = y[5 + x],
                        y[10 + x] = o * g.a + h * g.c + g.tx,
                        y[11 + x] = o * g.b + h * g.d + g.ty,
                        v[x] = S.l,
                        v[1 + x] = S.t,
                        v[2 + x] = S.l,
                        v[3 + x] = S.b,
                        v[4 + x] = S.r,
                        v[5 + x] = S.t,
                        v[6 + x] = S.l,
                        v[7 + x] = S.b,
                        v[8 + x] = S.r,
                        v[9 + x] = S.t,
                        v[10 + x] = S.r,
                        v[11 + x] = S.b,
                        b[w] = b[1 + w] = b[2 + w] = b[3 + w] = b[4 + w] = b[5 + w] = E,
                        T[w] = T[1 + w] = T[2 + w] = T[3 + w] = T[4 + w] = T[5 + w] = d.alpha * s,
                        this.batchCardCount++
                    }
                } else
                    this._appendToBatchGroup(d, e, l, d.alpha * s)
        }
    }
    ,
    t._drawBuffers = function(t) {
        if (!(this.batchCardCount <= 0)) {
            this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
            var e = this._activeShader
              , i = this._vertexPositionBuffer
              , s = this._textureIndexBuffer
              , n = this._uvPositionBuffer
              , a = this._alphaBuffer;
            t.useProgram(e),
            t.bindBuffer(t.ARRAY_BUFFER, i),
            t.vertexAttribPointer(e.vertexPositionAttribute, i.itemSize, t.FLOAT, !1, 0, 0),
            t.bufferSubData(t.ARRAY_BUFFER, 0, this._vertices),
            t.bindBuffer(t.ARRAY_BUFFER, s),
            t.vertexAttribPointer(e.textureIndexAttribute, s.itemSize, t.FLOAT, !1, 0, 0),
            t.bufferSubData(t.ARRAY_BUFFER, 0, this._indices),
            t.bindBuffer(t.ARRAY_BUFFER, n),
            t.vertexAttribPointer(e.uvPositionAttribute, n.itemSize, t.FLOAT, !1, 0, 0),
            t.bufferSubData(t.ARRAY_BUFFER, 0, this._uvs),
            t.bindBuffer(t.ARRAY_BUFFER, a),
            t.vertexAttribPointer(e.alphaAttribute, a.itemSize, t.FLOAT, !1, 0, 0),
            t.bufferSubData(t.ARRAY_BUFFER, 0, this._alphas),
            t.uniformMatrix4fv(e.pMatrixUniform, t.FALSE, this._projectionMatrix);
            for (var r = 0; r < this._batchTextureCount; r++) {
                var o = this._batchTextures[r];
                t.activeTexture(t.TEXTURE0 + r),
                t.bindTexture(t.TEXTURE_2D, o),
                this.setTextureParams(t, o.isPOT)
            }
            t.drawArrays(t.TRIANGLES, 0, this.batchCardCount * C.INDICIES_PER_CARD),
            this._batchID++
        }
    }
    ,
    t._drawCover = function(t, e) {
        0 < this._isDrawing && this._drawBuffers(t),
        this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : Cover");
        var i = this._activeShader
          , s = this._vertexPositionBuffer
          , n = this._uvPositionBuffer;
        t.clear(t.COLOR_BUFFER_BIT),
        t.useProgram(i),
        t.bindBuffer(t.ARRAY_BUFFER, s),
        t.vertexAttribPointer(i.vertexPositionAttribute, s.itemSize, t.FLOAT, !1, 0, 0),
        t.bufferSubData(t.ARRAY_BUFFER, 0, C.COVER_VERT),
        t.bindBuffer(t.ARRAY_BUFFER, n),
        t.vertexAttribPointer(i.uvPositionAttribute, n.itemSize, t.FLOAT, !1, 0, 0),
        t.bufferSubData(t.ARRAY_BUFFER, 0, e ? C.COVER_UV_FLIP : C.COVER_UV),
        t.uniform1i(i.samplerUniform, 0),
        t.uniform1f(i.uprightUniform, e ? 0 : 1),
        t.drawArrays(t.TRIANGLES, 0, C.INDICIES_PER_CARD)
    }
    ,
    createjs.StageGL = createjs.promote(C, "Stage")
}(),
this.createjs = this.createjs || {},
!function() {
    function i(t) {
        this.DisplayObject_constructor(),
        "string" == typeof t ? (this.image = document.createElement("img"),
        this.image.src = t) : this.image = t,
        this.sourceRect = null,
        this._webGLRenderStyle = createjs.DisplayObject._StageGL_BITMAP
    }
    var t = createjs.extend(i, createjs.DisplayObject);
    t.initialize = i,
    t.isVisible = function() {
        var t = this.image
          , t = this.cacheCanvas || t && (t.naturalWidth || t.getContext || 2 <= t.readyState);
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && t)
    }
    ,
    t.draw = function(t, e) {
        var i, s, n, a, r, o, h, l, c;
        return this.DisplayObject_draw(t, e) || (e = this.image,
        r = this.sourceRect,
        e.getImage && (e = e.getImage()),
        e && (i = t.imageSmoothingEnabled,
        !1 === this.imageSmoothingEnabled && (t.imageSmoothingEnabled = !1),
        r ? (s = r.x,
        n = r.y,
        a = s + r.width,
        r = n + r.height,
        o = 0,
        h = 0,
        l = e.width,
        c = e.height,
        s < 0 && (o -= s,
        s = 0),
        l < a && (a = l),
        n < 0 && (h -= n,
        n = 0),
        c < r && (r = c),
        t.drawImage(e, s, n, a - s, r - n, o, h, a - s, r - n)) : t.drawImage(e, 0, 0),
        !1 === this.imageSmoothingEnabled) && (t.imageSmoothingEnabled = i)),
        !0
    }
    ,
    t.getBounds = function() {
        var t, e = this.DisplayObject_getBounds();
        return e || (e = this.image,
        t = this.sourceRect || e,
        e = e && (e.naturalWidth || e.getContext || 2 <= e.readyState),
        e ? this._rectangle.setValues(0, 0, t.width, t.height) : null)
    }
    ,
    t.clone = function(t) {
        var e = this.image
          , t = (e && t && (e = e.cloneNode()),
        new i(e));
        return this.sourceRect && (t.sourceRect = this.sourceRect.clone()),
        this._cloneProps(t),
        t
    }
    ,
    t.toString = function() {
        return "[Bitmap (name=" + this.name + ")]"
    }
    ,
    createjs.Bitmap = createjs.promote(i, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.DisplayObject_constructor(),
        this.currentFrame = 0,
        this.currentAnimation = null,
        this.paused = !0,
        this.spriteSheet = t,
        this.currentAnimationFrame = 0,
        this.framerate = 0,
        this._animation = null,
        this._currentFrame = null,
        this._skipAdvance = !1,
        this._webGLRenderStyle = createjs.DisplayObject._StageGL_SPRITE,
        null != e && this.gotoAndPlay(e)
    }
    var e = createjs.extend(t, createjs.DisplayObject);
    e.initialize = t,
    e.isVisible = function() {
        var t = this.cacheCanvas || this.spriteSheet.complete;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && t)
    }
    ,
    e.draw = function(t, e) {
        if (!this.DisplayObject_draw(t, e)) {
            this._normalizeFrame();
            e = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!e)
                return !1;
            var i = e.rect;
            i.width && i.height && t.drawImage(e.image, i.x, i.y, i.width, i.height, -e.regX, -e.regY, i.width, i.height)
        }
        return !0
    }
    ,
    e.play = function() {
        this.paused = !1
    }
    ,
    e.stop = function() {
        this.paused = !0
    }
    ,
    e.gotoAndPlay = function(t) {
        this.paused = !1,
        this._skipAdvance = !0,
        this._goto(t)
    }
    ,
    e.gotoAndStop = function(t) {
        this.paused = !0,
        this._goto(t)
    }
    ,
    e.advance = function(t) {
        var e = this.framerate || this.spriteSheet.framerate
          , t = e && null != t ? t / (1e3 / e) : 1;
        this._normalizeFrame(t)
    }
    ,
    e.getBounds = function() {
        return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
    }
    ,
    e.clone = function() {
        return this._cloneProps(new t(this.spriteSheet))
    }
    ,
    e.toString = function() {
        return "[Sprite (name=" + this.name + ")]"
    }
    ,
    e._cloneProps = function(t) {
        return this.DisplayObject__cloneProps(t),
        t.currentFrame = this.currentFrame,
        t.currentAnimation = this.currentAnimation,
        t.paused = this.paused,
        t.currentAnimationFrame = this.currentAnimationFrame,
        t.framerate = this.framerate,
        t._animation = this._animation,
        t._currentFrame = this._currentFrame,
        t._skipAdvance = this._skipAdvance,
        t
    }
    ,
    e._tick = function(t) {
        this.paused || (this._skipAdvance || this.advance(t && t.delta),
        this._skipAdvance = !1),
        this.DisplayObject__tick(t)
    }
    ,
    e._normalizeFrame = function(t) {
        t = t || 0;
        var e = this._animation
          , i = this.paused
          , s = this._currentFrame;
        if (e) {
            var n = e.speed || 1
              , a = this.currentAnimationFrame
              , r = e.frames.length;
            if (r <= a + t * n) {
                var o = e.next;
                if (this._dispatchAnimationEnd(e, s, i, o, r - 1))
                    return;
                if (o)
                    return this._goto(o, t - (r - a) / n);
                this.paused = !0,
                a = e.frames.length - 1
            } else
                a += t * n;
            this.currentAnimationFrame = a,
            this._currentFrame = e.frames[0 | a]
        } else if (s = this._currentFrame += t,
        r = this.spriteSheet.getNumFrames(),
        r <= s && 0 < r && !this._dispatchAnimationEnd(e, s, i, r - 1) && (this._currentFrame -= r) >= r)
            return this._normalizeFrame();
        s = 0 | this._currentFrame,
        this.currentFrame != s && (this.currentFrame = s,
        this.dispatchEvent("change"))
    }
    ,
    e._dispatchAnimationEnd = function(t, e, i, s, n) {
        var a, r = t ? t.name : null, r = (this.hasEventListener("animationend") && (a = new createjs.Event("animationend"),
        a.name = r,
        a.next = s,
        this.dispatchEvent(a)),
        this._animation != t || this._currentFrame != e);
        return r || i || !this.paused || (this.currentAnimationFrame = n,
        r = !0),
        r
    }
    ,
    e._goto = function(t, e) {
        var i;
        this.currentAnimationFrame = 0,
        isNaN(t) ? (i = this.spriteSheet.getAnimation(t),
        i && (this._animation = i,
        this.currentAnimation = t,
        this._normalizeFrame(e))) : (this.currentAnimation = this._animation = null,
        this._currentFrame = t,
        this._normalizeFrame())
    }
    ,
    createjs.Sprite = createjs.promote(t, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function e(t) {
        this.DisplayObject_constructor(),
        this.graphics = t || new createjs.Graphics
    }
    var t = createjs.extend(e, createjs.DisplayObject);
    t.isVisible = function() {
        var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && t)
    }
    ,
    t.draw = function(t, e) {
        return this.DisplayObject_draw(t, e) || this.graphics.draw(t, this),
        !0
    }
    ,
    t.clone = function(t) {
        t = t && this.graphics ? this.graphics.clone() : this.graphics;
        return this._cloneProps(new e(t))
    }
    ,
    t.toString = function() {
        return "[Shape (name=" + this.name + ")]"
    }
    ,
    createjs.Shape = createjs.promote(e, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function f(t, e, i) {
        this.DisplayObject_constructor(),
        this.text = t,
        this.font = e,
        this.color = i,
        this.textAlign = "left",
        this.textBaseline = "top",
        this.maxWidth = null,
        this.outline = 0,
        this.lineHeight = 0,
        this.lineWidth = null
    }
    var t = createjs.extend(f, createjs.DisplayObject)
      , e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    e.getContext && (f._workingContext = e.getContext("2d"),
    e.width = e.height = 1),
    f.H_OFFSETS = {
        start: 0,
        left: 0,
        center: -.5,
        end: -1,
        right: -1
    },
    f.V_OFFSETS = {
        top: 0,
        hanging: -.01,
        middle: -.4,
        alphabetic: -.8,
        ideographic: -.85,
        bottom: -1
    },
    t.isVisible = function() {
        var t = this.cacheCanvas || null != this.text && "" !== this.text;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && t)
    }
    ,
    t.draw = function(t, e) {
        return this.DisplayObject_draw(t, e) || (e = this.color || "#000",
        this.outline ? (t.strokeStyle = e,
        t.lineWidth = +this.outline) : t.fillStyle = e,
        this._drawText(this._prepContext(t))),
        !0
    }
    ,
    t.getMeasuredWidth = function() {
        return this._getMeasuredWidth(this.text)
    }
    ,
    t.getMeasuredLineHeight = function() {
        return 1.2 * this._getMeasuredWidth("M")
    }
    ,
    t.getMeasuredHeight = function() {
        return this._drawText(null, {}).height
    }
    ,
    t.getBounds = function() {
        var t, e, i, s = this.DisplayObject_getBounds();
        return s || (null == this.text || "" === this.text ? null : (s = this._drawText(null, {}),
        t = this.maxWidth && this.maxWidth < s.width ? this.maxWidth : s.width,
        e = t * f.H_OFFSETS[this.textAlign || "left"],
        i = this.lineHeight || this.getMeasuredLineHeight(),
        i = i * f.V_OFFSETS[this.textBaseline || "top"],
        this._rectangle.setValues(e, i, t, s.height)))
    }
    ,
    t.getMetrics = function() {
        var t = {
            lines: []
        };
        return t.lineHeight = this.lineHeight || this.getMeasuredLineHeight(),
        t.vOffset = t.lineHeight * f.V_OFFSETS[this.textBaseline || "top"],
        this._drawText(null, t, t.lines)
    }
    ,
    t.clone = function() {
        return this._cloneProps(new f(this.text,this.font,this.color))
    }
    ,
    t.toString = function() {
        return "[Text (text=" + (20 < this.text.length ? this.text.substr(0, 17) + "..." : this.text) + ")]"
    }
    ,
    t._cloneProps = function(t) {
        return this.DisplayObject__cloneProps(t),
        t.textAlign = this.textAlign,
        t.textBaseline = this.textBaseline,
        t.maxWidth = this.maxWidth,
        t.outline = this.outline,
        t.lineHeight = this.lineHeight,
        t.lineWidth = this.lineWidth,
        t
    }
    ,
    t._prepContext = function(t) {
        return t.font = this.font || "10px sans-serif",
        t.textAlign = this.textAlign || "left",
        t.textBaseline = this.textBaseline || "top",
        t.lineJoin = "miter",
        t.miterLimit = 2.5,
        t
    }
    ,
    t._drawText = function(t, e, i) {
        for (var s = !!t, n = (s || (t = f._workingContext,
        t.save(),
        this._prepContext(t)),
        this.lineHeight || this.getMeasuredLineHeight()), a = 0, r = 0, o = String(this.text).split(/(?:\r\n|\r|\n)/), h = 0, l = o.length; h < l; h++) {
            var c = o[h]
              , u = null;
            if (null != this.lineWidth && (u = t.measureText(c).width) > this.lineWidth)
                for (var d = c.split(/(\s)/), c = d[0], u = t.measureText(c).width, p = 1, m = d.length; p < m; p += 2) {
                    var _ = t.measureText(d[p] + d[p + 1]).width;
                    u + _ > this.lineWidth ? (s && this._drawTextLine(t, c, r * n),
                    i && i.push(c),
                    a < u && (a = u),
                    c = d[p + 1],
                    u = t.measureText(c).width,
                    r++) : (c += d[p] + d[p + 1],
                    u += _)
                }
            s && this._drawTextLine(t, c, r * n),
            i && i.push(c),
            e && null == u && (u = t.measureText(c).width),
            a < u && (a = u),
            r++
        }
        return e && (e.width = a,
        e.height = r * n),
        s || t.restore(),
        e
    }
    ,
    t._drawTextLine = function(t, e, i) {
        this.outline ? t.strokeText(e, 0, i, this.maxWidth || 65535) : t.fillText(e, 0, i, this.maxWidth || 65535)
    }
    ,
    t._getMeasuredWidth = function(t) {
        var e = f._workingContext
          , t = (e.save(),
        this._prepContext(e).measureText(t).width);
        return e.restore(),
        t
    }
    ,
    createjs.Text = createjs.promote(f, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function g(t, e) {
        this.Container_constructor(),
        this.text = t || "",
        this.spriteSheet = e,
        this.lineHeight = 0,
        this.letterSpacing = 0,
        this.spaceWidth = 0,
        this._oldProps = {
            text: 0,
            spriteSheet: 0,
            lineHeight: 0,
            letterSpacing: 0,
            spaceWidth: 0
        },
        this._oldStage = null,
        this._drawAction = null
    }
    var t = createjs.extend(g, createjs.Container);
    g.maxPoolSize = 100,
    g._spritePool = [],
    t.draw = function(t, e) {
        this.DisplayObject_draw(t, e) || (this._updateState(),
        this.Container_draw(t, e))
    }
    ,
    t.getBounds = function() {
        return this._updateText(),
        this.Container_getBounds()
    }
    ,
    t.isVisible = function() {
        var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
        return !!(this.visible && 0 < this.alpha && 0 !== this.scaleX && 0 !== this.scaleY && t)
    }
    ,
    t.clone = function() {
        return this._cloneProps(new g(this.text,this.spriteSheet))
    }
    ,
    t.addChild = t.addChildAt = t.removeChild = t.removeChildAt = t.removeAllChildren = function() {}
    ,
    t._updateState = function() {
        this._updateText()
    }
    ,
    t._cloneProps = function(t) {
        return this.Container__cloneProps(t),
        t.lineHeight = this.lineHeight,
        t.letterSpacing = this.letterSpacing,
        t.spaceWidth = this.spaceWidth,
        t
    }
    ,
    t._getFrameIndex = function(t, e) {
        var i, s = e.getAnimation(t);
        return s || (t == (i = t.toUpperCase()) && t == (i = t.toLowerCase()) && (i = null),
        i && (s = e.getAnimation(i))),
        s && s.frames[0]
    }
    ,
    t._getFrame = function(t, e) {
        t = this._getFrameIndex(t, e);
        return null == t ? t : e.getFrame(t)
    }
    ,
    t._getLineHeight = function(t) {
        t = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
        return t ? t.rect.height : 1
    }
    ,
    t._getSpaceWidth = function(t) {
        t = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
        return t ? t.rect.width : 1
    }
    ,
    t._updateText = function() {
        var t, e, i = 0, s = 0, n = this._oldProps, a = !1, r = this.spaceWidth, o = this.lineHeight, h = this.spriteSheet, l = g._spritePool, c = this.children, u = 0, d = c.length;
        for (e in n)
            n[e] != this[e] && (n[e] = this[e],
            a = !0);
        if (a) {
            var p = !!this._getFrame(" ", h);
            p || (r = r || this._getSpaceWidth(h));
            for (var o = o || this._getLineHeight(h), m = 0, _ = this.text.length; m < _; m++) {
                var f = this.text.charAt(m);
                " " != f || p ? "\n" == f || "\r" == f ? ("\r" == f && "\n" == this.text.charAt(m + 1) && m++,
                i = 0,
                s += o) : (f = this._getFrameIndex(f, h),
                null != f && (u < d ? t = c[u] : (c.push(t = l.length ? l.pop() : new createjs.Sprite),
                t.parent = this,
                d++),
                t.spriteSheet = h,
                t.gotoAndStop(f),
                t.x = i,
                t.y = s,
                u++,
                i += t.getBounds().width + this.letterSpacing)) : i += r
            }
            for (; u < d; )
                l.push(t = c.pop()),
                t.parent = null,
                d--;
            l.length > g.maxPoolSize && (l.length = g.maxPoolSize)
        }
    }
    ,
    createjs.BitmapText = createjs.promote(g, "Container")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function a(t) {
        var e, i, s, n;
        this.Container_constructor(),
        a.inited || a.init(),
        t instanceof String || 1 < arguments.length ? (e = t,
        i = arguments[1],
        s = arguments[2],
        n = arguments[3],
        null == s && (s = -1),
        t = null) : t && (e = t.mode,
        i = t.startPosition,
        s = t.loop,
        n = t.labels),
        t = t || {
            labels: n
        },
        this.mode = e || a.INDEPENDENT,
        this.startPosition = i || 0,
        this.loop = !0 === s ? -1 : s || 0,
        this.currentFrame = 0,
        this.paused = t.paused || !1,
        this.actionsEnabled = !0,
        this.autoReset = !0,
        this.frameBounds = this.frameBounds || t.frameBounds,
        this.framerate = null,
        t.useTicks = t.paused = !0,
        this.timeline = new createjs.Timeline(t),
        this._synchOffset = 0,
        this._rawPosition = -1,
        this._bound_resolveState = this._resolveState.bind(this),
        this._t = 0,
        this._managed = {}
    }
    var t = createjs.extend(a, createjs.Container);
    a.INDEPENDENT = "independent",
    a.SINGLE_FRAME = "single",
    a.SYNCHED = "synched",
    a.inited = !1,
    a.init = function() {
        a.inited || (s.install(),
        a.inited = !0)
    }
    ,
    t._getLabels = function() {
        return this.timeline.getLabels()
    }
    ,
    t.getLabels = createjs.deprecate(t._getLabels, "MovieClip.getLabels"),
    t._getCurrentLabel = function() {
        return this.timeline.currentLabel
    }
    ,
    t.getCurrentLabel = createjs.deprecate(t._getCurrentLabel, "MovieClip.getCurrentLabel"),
    t._getDuration = function() {
        return this.timeline.duration
    }
    ,
    t.getDuration = createjs.deprecate(t._getDuration, "MovieClip.getDuration");
    try {
        Object.defineProperties(t, {
            labels: {
                get: t._getLabels
            },
            currentLabel: {
                get: t._getCurrentLabel
            },
            totalFrames: {
                get: t._getDuration
            },
            duration: {
                get: t._getDuration
            }
        })
    } catch (t) {}
    function s() {
        throw "MovieClipPlugin cannot be instantiated."
    }
    t.initialize = a,
    t.isVisible = function() {
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY)
    }
    ,
    t.draw = function(t, e) {
        return this.DisplayObject_draw(t, e) || (this._updateState(),
        this.Container_draw(t, e)),
        !0
    }
    ,
    t.play = function() {
        this.paused = !1
    }
    ,
    t.stop = function() {
        this.paused = !0
    }
    ,
    t.gotoAndPlay = function(t) {
        this.paused = !1,
        this._goto(t)
    }
    ,
    t.gotoAndStop = function(t) {
        this.paused = !0,
        this._goto(t)
    }
    ,
    t.advance = function(t) {
        var e = a.INDEPENDENT;
        if (this.mode === e) {
            for (var i = this, s = i.framerate; (i = i.parent) && null === s; )
                i.mode === e && (s = i._framerate);
            if (this._framerate = s,
            !this.paused) {
                var t = null !== s && -1 !== s && null !== t ? t / (1e3 / s) + this._t : 1
                  , n = 0 | t;
                for (this._t = t - n; n--; )
                    this._updateTimeline(this._rawPosition + 1, !1)
            }
        }
    }
    ,
    t.clone = function() {
        throw "MovieClip cannot be cloned."
    }
    ,
    t.toString = function() {
        return "[MovieClip (name=" + this.name + ")]"
    }
    ,
    t._updateState = function() {
        -1 !== this._rawPosition && this.mode === a.INDEPENDENT || this._updateTimeline(-1)
    }
    ,
    t._tick = function(t) {
        this.advance(t && t.delta),
        this.Container__tick(t)
    }
    ,
    t._goto = function(t) {
        t = this.timeline.resolve(t);
        null != t && (this._t = 0,
        this._updateTimeline(t, !0))
    }
    ,
    t._reset = function() {
        this._rawPosition = -1,
        this._t = this.currentFrame = 0,
        this.paused = !1
    }
    ,
    t._updateTimeline = function(t, e) {
        var i = this.mode !== a.INDEPENDENT
          , s = this.timeline;
        i && (t = this.startPosition + (this.mode === a.SINGLE_FRAME ? 0 : this._synchOffset)),
        t < 0 && (t = 0),
        this._rawPosition === t && !i || (this._rawPosition = t,
        s.loop = this.loop,
        s.setPosition(t, i || !this.actionsEnabled, e, this._bound_resolveState))
    }
    ,
    t._renderFirstFrame = function() {
        var t = this.timeline
          , e = t.rawPosition;
        t.setPosition(0, !0, !0, this._bound_resolveState),
        t.rawPosition = e
    }
    ,
    t._resolveState = function() {
        var t, e = this.timeline;
        for (t in this.currentFrame = e.position,
        this._managed)
            this._managed[t] = 1;
        for (var i = e.tweens, s = 0, n = i.length; s < n; s++) {
            var a = i[s]
              , r = a.target;
            r === this || a.passive || (a = a._stepPosition,
            r instanceof createjs.DisplayObject ? this._addManagedChild(r, a) : this._setState(r.state, a))
        }
        for (var o = this.children, s = o.length - 1; 0 <= s; s--) {
            var h = o[s].id;
            1 === this._managed[h] && (this.removeChildAt(s),
            delete this._managed[h])
        }
    }
    ,
    t._setState = function(t, e) {
        if (t)
            for (var i = t.length - 1; 0 <= i; i--) {
                var s, n = t[i], a = n.t, r = n.p;
                for (s in r)
                    a[s] = r[s];
                this._addManagedChild(a, e)
            }
    }
    ,
    t._addManagedChild = function(t, e) {
        t._off || (this.addChildAt(t, 0),
        t instanceof a && (t._synchOffset = e,
        t.mode === a.INDEPENDENT) && t.autoReset && !this._managed[t.id] && t._reset(),
        this._managed[t.id] = 2)
    }
    ,
    t._getBounds = function(t, e) {
        var i = this.DisplayObject_getBounds();
        return i || this.frameBounds && (i = this._rectangle.copy(this.frameBounds[this.currentFrame])),
        i ? this._transformBounds(i, t, e) : this.Container__getBounds(t, e)
    }
    ,
    createjs.MovieClip = createjs.promote(a, "Container"),
    s.priority = 100,
    s.ID = "MovieClip",
    s.install = function() {
        createjs.Tween._installPlugin(s)
    }
    ,
    s.init = function(t, e, i) {
        "startPosition" === e && t.target instanceof a && t._addPlugin(s)
    }
    ,
    s.step = function(t, e, i) {}
    ,
    s.change = function(t, e, i, s, n, a) {
        if ("startPosition" === i)
            return (1 === n ? e : e.prev).props[i]
    }
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function S() {
        throw "SpriteSheetUtils cannot be instantiated"
    }
    var t = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    t.getContext && (S._workingCanvas = t,
    S._workingContext = t.getContext("2d"),
    t.width = t.height = 1),
    S.extractFrame = function(t, e) {
        isNaN(e) && (e = t.getAnimation(e).frames[0]);
        var i, t = t.getFrame(e);
        return t ? (e = t.rect,
        i = S._workingCanvas,
        i.width = e.width,
        i.height = e.height,
        S._workingContext.drawImage(t.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height),
        t = document.createElement("img"),
        t.src = i.toDataURL("image/png"),
        t) : null
    }
    ,
    S.addFlippedFrames = createjs.deprecate(null, "SpriteSheetUtils.addFlippedFrames"),
    S.mergeAlpha = createjs.deprecate(null, "SpriteSheetUtils.mergeAlpha"),
    S._flip = function(t, e, i, s) {
        for (var n = t._images, a = S._workingCanvas, r = S._workingContext, o = n.length / e, h = 0; h < o; h++) {
            var l = n[h]
              , c = (l.__tmp = h,
            r.setTransform(1, 0, 0, 1, 0, 0),
            r.clearRect(0, 0, a.width + 1, a.height + 1),
            a.width = l.width,
            a.height = l.height,
            r.setTransform(i ? -1 : 1, 0, 0, s ? -1 : 1, i ? l.width : 0, s ? l.height : 0),
            r.drawImage(l, 0, 0),
            document.createElement("img"));
            c.src = a.toDataURL("image/png"),
            c.width = l.width || l.naturalWidth,
            c.height = l.height || l.naturalHeight,
            n.push(c)
        }
        for (var u = t._frames, d = u.length / e, h = 0; h < d; h++) {
            var l = u[h]
              , p = l.rect.clone()
              , c = n[l.image.__tmp + o * e]
              , m = {
                image: c,
                rect: p,
                regX: l.regX,
                regY: l.regY
            };
            i && (p.x = (c.width || c.naturalWidth) - p.x - p.width,
            m.regX = p.width - l.regX),
            s && (p.y = (c.height || c.naturalHeight) - p.y - p.height,
            m.regY = p.height - l.regY),
            u.push(m)
        }
        var _ = "_" + (i ? "h" : "") + (s ? "v" : "")
          , f = t._animations
          , g = t._data
          , w = f.length / e;
        for (h = 0; h < w; h++) {
            var v = f[h]
              , y = (l = g[v],
            {
                name: v + _,
                speed: l.speed,
                next: l.next,
                frames: []
            });
            l.next && (y.next += _);
            for (var u = l.frames, b = 0, T = u.length; b < T; b++)
                y.frames.push(u[b] + d * e);
            g[y.name] = y,
            f.push(y.name)
        }
    }
    ,
    createjs.SpriteSheetUtils = S
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function b(t) {
        this.EventDispatcher_constructor(),
        this.maxWidth = 2048,
        this.maxHeight = 2048,
        this.spriteSheet = null,
        this.scale = 1,
        this.padding = 1,
        this.timeSlice = .3,
        this.progress = -1,
        this.framerate = t || 0,
        this._frames = [],
        this._animations = {},
        this._data = null,
        this._nextFrameIndex = 0,
        this._index = 0,
        this._timerID = null,
        this._scale = 1
    }
    var t = createjs.extend(b, createjs.EventDispatcher);
    b.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions",
    b.ERR_RUNNING = "a build is already running",
    t.addFrame = function(t, e, i, s, n) {
        if (this._data)
            throw b.ERR_RUNNING;
        e = e || t.bounds || t.nominalBounds;
        return !e && t.getBounds && (e = t.getBounds()),
        e ? (i = i || 1,
        this._frames.push({
            source: t,
            sourceRect: e,
            scale: i,
            funct: s,
            data: n,
            index: this._frames.length,
            height: e.height * i
        }) - 1) : null
    }
    ,
    t.addAnimation = function(t, e, i, s) {
        if (this._data)
            throw b.ERR_RUNNING;
        this._animations[t] = {
            frames: e,
            next: i,
            speed: s
        }
    }
    ,
    t.addMovieClip = function(t, e, i, s, n, a) {
        if (this._data)
            throw b.ERR_RUNNING;
        var r = t.frameBounds
          , o = e || t.bounds || t.nominalBounds;
        if (!o && t.getBounds && (o = t.getBounds()),
        o || r) {
            for (var h, l = this._frames.length, c = t.timeline.duration, u = 0; u < c; u++) {
                var d = r && r[u] ? r[u] : o;
                this.addFrame(t, d, i, this._setupMovieClipFrame, {
                    i: u,
                    f: s,
                    d: n
                })
            }
            var p, m = t.timeline._labels, _ = [];
            for (p in m)
                _.push({
                    index: m[p],
                    label: p
                });
            if (_.length)
                for (_.sort(function(t, e) {
                    return t.index - e.index
                }),
                u = 0,
                h = _.length; u < h; u++) {
                    for (var f = _[u].label, g = l + _[u].index, w = l + (u == h - 1 ? c : _[u + 1].index), v = [], y = g; y < w; y++)
                        v.push(y);
                    a && (f = a(f, t, g, w),
                    !f) || this.addAnimation(f, v, !0)
                }
        }
    }
    ,
    t.build = function() {
        if (this._data)
            throw b.ERR_RUNNING;
        for (this._startBuild(); this._drawNext(); )
            ;
        return this._endBuild(),
        this.spriteSheet
    }
    ,
    t.buildAsync = function(t) {
        if (this._data)
            throw b.ERR_RUNNING;
        this.timeSlice = t,
        this._startBuild();
        var e = this;
        this._timerID = setTimeout(function() {
            e._run()
        }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
    }
    ,
    t.stopAsync = function() {
        clearTimeout(this._timerID),
        this._data = null
    }
    ,
    t.clone = function() {
        throw "SpriteSheetBuilder cannot be cloned."
    }
    ,
    t.toString = function() {
        return "[SpriteSheetBuilder]"
    }
    ,
    t._startBuild = function() {
        var t = this.padding || 0
          , e = (this.progress = 0,
        this.spriteSheet = null,
        this._index = 0,
        this._scale = this.scale,
        [])
          , i = (this._data = {
            images: [],
            frames: e,
            framerate: this.framerate,
            animations: this._animations
        },
        this._frames.slice());
        if (i.sort(function(t, e) {
            return t.height <= e.height ? -1 : 1
        }),
        i[i.length - 1].height + 2 * t > this.maxHeight)
            throw b.ERR_DIMENSIONS;
        for (var s = 0, n = 0, a = 0; i.length; ) {
            var r, o = this._fillRow(i, s, a, e, t);
            o.w > n && (n = o.w),
            s += o.h,
            o.h && i.length || (r = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"),
            r.width = this._getSize(n, this.maxWidth),
            r.height = this._getSize(s, this.maxHeight),
            this._data.images[a] = r,
            o.h) || (n = s = 0,
            a++)
        }
    }
    ,
    t._setupMovieClipFrame = function(t, e) {
        var i = t.actionsEnabled;
        t.actionsEnabled = !1,
        t.gotoAndStop(e.i),
        t.actionsEnabled = i,
        e.f && e.f(t, e.d, e.i)
    }
    ,
    t._getSize = function(t, e) {
        for (var i = 4; Math.pow(2, ++i) < t; )
            ;
        return Math.min(e, Math.pow(2, i))
    }
    ,
    t._fillRow = function(t, e, i, s, n) {
        for (var a = this.maxWidth, r = this.maxHeight, o = (e += n,
        r - e), h = n, l = 0, c = t.length - 1; 0 <= c; c--) {
            var u = t[c]
              , d = this._scale * u.scale
              , p = u.sourceRect
              , m = u.source
              , _ = Math.floor(d * p.x - n)
              , f = Math.floor(d * p.y - n)
              , g = Math.ceil(d * p.height + 2 * n)
              , p = Math.ceil(d * p.width + 2 * n);
            if (a < p)
                throw b.ERR_DIMENSIONS;
            o < g || a < h + p || (u.img = i,
            u.rect = new createjs.Rectangle(h,e,p,g),
            l = l || g,
            t.splice(c, 1),
            s[u.index] = [h, e, p, g, i, Math.round(-_ + d * m.regX - n), Math.round(-f + d * m.regY - n)],
            h += p)
        }
        return {
            w: h,
            h: l
        }
    }
    ,
    t._endBuild = function() {
        this.spriteSheet = new createjs.SpriteSheet(this._data),
        this._data = null,
        this.progress = 1,
        this.dispatchEvent("complete")
    }
    ,
    t._run = function() {
        for (var t, e = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), i = (new Date).getTime() + e, s = !1; i > (new Date).getTime(); )
            if (!this._drawNext()) {
                s = !0;
                break
            }
        s ? this._endBuild() : (t = this,
        this._timerID = setTimeout(function() {
            t._run()
        }, 50 - e));
        var n, e = this.progress = this._index / this._frames.length;
        this.hasEventListener("progress") && (n = new createjs.Event("progress"),
        n.progress = e,
        this.dispatchEvent(n))
    }
    ,
    t._drawNext = function() {
        var t = this._frames[this._index]
          , e = t.scale * this._scale
          , i = t.rect
          , s = t.sourceRect
          , n = this._data.images[t.img]
          , n = n.getContext("2d");
        return t.funct && t.funct(t.source, t.data),
        n.save(),
        n.beginPath(),
        n.rect(i.x, i.y, i.width, i.height),
        n.clip(),
        n.translate(Math.ceil(i.x - s.x * e), Math.ceil(i.y - s.y * e)),
        n.scale(e, e),
        t.source.draw(n),
        n.restore(),
        ++this._index < this._frames.length
    }
    ,
    createjs.SpriteSheetBuilder = createjs.promote(b, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.DisplayObject_constructor(),
        "string" == typeof t && (t = document.getElementById(t)),
        this.mouseEnabled = !1;
        var e = t.style;
        e.position = "absolute",
        e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%",
        this.htmlElement = t,
        this._oldProps = null,
        this._oldStage = null,
        this._drawAction = null
    }
    var e = createjs.extend(t, createjs.DisplayObject);
    e.isVisible = function() {
        return null != this.htmlElement
    }
    ,
    e.draw = function(t, e) {
        return !0
    }
    ,
    e.cache = function() {}
    ,
    e.uncache = function() {}
    ,
    e.updateCache = function() {}
    ,
    e.hitTest = function() {}
    ,
    e.localToGlobal = function() {}
    ,
    e.globalToLocal = function() {}
    ,
    e.localToLocal = function() {}
    ,
    e.clone = function() {
        throw "DOMElement cannot be cloned."
    }
    ,
    e.toString = function() {
        return "[DOMElement (name=" + this.name + ")]"
    }
    ,
    e._tick = function(t) {
        var e = this.stage;
        e && e !== this._oldStage && (this._drawAction && e.off("drawend", this._drawAction),
        this._drawAction = e.on("drawend", this._handleDrawEnd, this),
        this._oldStage = e),
        this.DisplayObject__tick(t)
    }
    ,
    e._handleDrawEnd = function(t) {
        var e, i, s, n, a, r = this.htmlElement;
        r && (r = r.style,
        e = this.getConcatenatedDisplayProps(this._props),
        i = e.matrix,
        s = e.visible ? "visible" : "hidden",
        s != r.visibility && (r.visibility = s),
        e.visible) && (s = this._oldProps,
        a = s && s.matrix,
        n = 1e4,
        a && a.equals(i) || (a = "matrix(" + (i.a * n | 0) / n + "," + (i.b * n | 0) / n + "," + (i.c * n | 0) / n + "," + (i.d * n | 0) / n + "," + (i.tx + .5 | 0),
        r.transform = r.WebkitTransform = r.OTransform = r.msTransform = a + "," + (i.ty + .5 | 0) + ")",
        r.MozTransform = a + "px," + (i.ty + .5 | 0) + "px)",
        s = s || (this._oldProps = new createjs.DisplayProps(!0,null)),
        s.matrix.copy(i)),
        s.alpha != e.alpha) && (r.opacity = "" + (e.alpha * n | 0) / n,
        s.alpha = e.alpha)
    }
    ,
    createjs.DOMElement = createjs.promote(t, "DisplayObject")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this.usesContext = !1,
        this._multiPass = null,
        this.VTX_SHADER_BODY = null,
        this.FRAG_SHADER_BODY = null
    }
    var e = t.prototype;
    e.getBounds = function(t) {
        return t
    }
    ,
    e.shaderParamSetup = function(t, e, i) {}
    ,
    e.applyFilter = function(t, e, i, s, n, a, r, o) {
        a = a || t,
        null == r && (r = e),
        null == o && (o = i);
        try {
            var h = t.getImageData(e, i, s, n)
        } catch (t) {
            return !1
        }
        return !!this._applyFilter(h) && (a.putImageData(h, r, o),
        !0)
    }
    ,
    e.toString = function() {
        return "[Filter]"
    }
    ,
    e.clone = function() {
        return new t
    }
    ,
    e._applyFilter = function(t) {
        return !0
    }
    ,
    createjs.Filter = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function s() {
        this.width = void 0,
        this.height = void 0,
        this.x = void 0,
        this.y = void 0,
        this.scale = 1,
        this.offX = 0,
        this.offY = 0,
        this.cacheID = 0,
        this._filterOffX = 0,
        this._filterOffY = 0,
        this._cacheDataURLID = 0,
        this._cacheDataURL = null,
        this._drawWidth = 0,
        this._drawHeight = 0
    }
    var t = s.prototype;
    s.getFilterBounds = function(t, e) {
        e = e || new createjs.Rectangle;
        var i = t.filters
          , s = i && i.length;
        if (!(!!s <= 0))
            for (var n = 0; n < s; n++) {
                var a = i[n];
                a && a.getBounds && (a = a.getBounds(),
                a) && (0 == n ? e.setValues(a.x, a.y, a.width, a.height) : e.extend(a.x, a.y, a.width, a.height))
            }
        return e
    }
    ,
    t.toString = function() {
        return "[BitmapCache]"
    }
    ,
    t.define = function(t, e, i, s, n, a, r) {
        if (!t)
            throw "No symbol to cache";
        this._options = r,
        this.target = t,
        this.width = 1 <= s ? s : 1,
        this.height = 1 <= n ? n : 1,
        this.x = e || 0,
        this.y = i || 0,
        this.scale = a || 1,
        this.update()
    }
    ,
    t.update = function(t) {
        if (!this.target)
            throw "define() must be called before update()";
        var e = s.getFilterBounds(this.target)
          , i = this.target.cacheCanvas;
        this._drawWidth = Math.ceil(this.width * this.scale) + e.width,
        this._drawHeight = Math.ceil(this.height * this.scale) + e.height,
        i && this._drawWidth == i.width && this._drawHeight == i.height || this._updateSurface(),
        this._filterOffX = e.x,
        this._filterOffY = e.y,
        this.offX = this.x * this.scale + this._filterOffX,
        this.offY = this.y * this.scale + this._filterOffY,
        this._drawToCache(t),
        this.cacheID = this.cacheID ? this.cacheID + 1 : 1
    }
    ,
    t.release = function() {
        var t;
        this._webGLCache ? (this._webGLCache.isCacheControlled || (this.__lastRT && (this.__lastRT = void 0),
        this.__rtA && this._webGLCache._killTextureObject(this.__rtA),
        this.__rtB && this._webGLCache._killTextureObject(this.__rtB),
        this.target && this.target.cacheCanvas && this._webGLCache._killTextureObject(this.target.cacheCanvas)),
        this._webGLCache = !1) : (t = this.target.stage,
        t instanceof createjs.StageGL && t.releaseTexture(this.target.cacheCanvas)),
        this.target = this.target.cacheCanvas = null,
        this.cacheID = this._cacheDataURLID = this._cacheDataURL = void 0,
        this.width = this.height = this.x = this.y = this.offX = this.offY = 0,
        this.scale = 1
    }
    ,
    t.getCacheDataURL = function() {
        var t = this.target && this.target.cacheCanvas;
        return t ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURLID = this.cacheID,
        this._cacheDataURL = t.toDataURL ? t.toDataURL() : null),
        this._cacheDataURL) : null
    }
    ,
    t.draw = function(t) {
        return !!this.target && (t.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale),
        !0)
    }
    ,
    t._updateSurface = function() {
        if (this._options && this._options.useGL) {
            if (!this._webGLCache)
                if ("stage" === this._options.useGL) {
                    if (!this.target.stage || !this.target.stage.isWebGL)
                        throw t = "Cannot use 'stage' for cache because the object's parent stage is ",
                        t += this.target.stage ? "non WebGL." : "not set, please addChild to the correct stage.",
                        t;
                    this.target.cacheCanvas = !0,
                    this._webGLCache = this.target.stage
                } else {
                    if ("new" === this._options.useGL)
                        this.target.cacheCanvas = document.createElement("canvas"),
                        this._webGLCache = new createjs.StageGL(this.target.cacheCanvas,{
                            antialias: !0,
                            transparent: !0,
                            autoPurge: -1
                        });
                    else {
                        if (!(this._options.useGL instanceof createjs.StageGL))
                            throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
                        this.target.cacheCanvas = !0,
                        this._webGLCache = this._options.useGL
                    }
                    this._webGLCache.isCacheControlled = !0
                }
            var t = this.target.cacheCanvas
              , e = this._webGLCache;
            e.isCacheControlled && (t.width = this._drawWidth,
            t.height = this._drawHeight,
            e.updateViewport(this._drawWidth, this._drawHeight)),
            this.target.filters ? (e.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight),
            e.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)) : e.isCacheControlled || e.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)
        } else
            t = this.target.cacheCanvas,
            t = t || (this.target.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")),
            t.width = this._drawWidth,
            t.height = this._drawHeight
    }
    ,
    t._drawToCache = function(t) {
        var e = this.target.cacheCanvas
          , i = this.target
          , s = this._webGLCache;
        s ? (s.cacheDraw(i, i.filters, this),
        e = this.target.cacheCanvas,
        e.width = this._drawWidth,
        e.height = this._drawHeight) : (s = e.getContext("2d"),
        t || s.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1),
        s.save(),
        s.globalCompositeOperation = t,
        s.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY),
        s.translate(-this.x, -this.y),
        i.draw(s, !0),
        s.restore(),
        i.filters && i.filters.length && this._applyFilters(s)),
        e._invalid = !0
    }
    ,
    t._applyFilters = function(t) {
        for (var e, i = this.target.filters, s = this._drawWidth, n = this._drawHeight, a = 0, r = i[a]; r.usesContext ? (e && (t.putImageData(e, 0, 0),
        e = null),
        r.applyFilter(t, 0, 0, s, n)) : (e = e || t.getImageData(0, 0, s, n),
        r._applyFilter(e)),
        r = null !== r._multiPass ? r._multiPass : i[++a],
        r; )
            ;
        e && t.putImageData(e, 0, 0)
    }
    ,
    createjs.BitmapCache = s
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function N(t, e, i) {
        this.Filter_constructor(),
        this._blurX = t,
        this._blurXTable = [],
        this._lastBlurX = null,
        this._blurY = e,
        this._blurYTable = [],
        this._lastBlurY = null,
        this._quality,
        this._lastQuality = null,
        this.FRAG_SHADER_TEMPLATE = "uniform float xWeight[{{blurX}}];uniform float yWeight[{{blurY}}];uniform vec2 textureOffset;void main(void) {vec4 color = vec4(0.0);float xAdj = ({{blurX}}.0-1.0)/2.0;float yAdj = ({{blurY}}.0-1.0)/2.0;vec2 sampleOffset;for(int i=0; i<{{blurX}}; i++) {for(int j=0; j<{{blurY}}; j++) {sampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));color += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);}}gl_FragColor = color.rgba;}",
        (isNaN(i) || i < 1) && (i = 1),
        this.setQuality(0 | i)
    }
    var t = createjs.extend(N, createjs.Filter);
    t.getBlurX = function() {
        return this._blurX
    }
    ,
    t.getBlurY = function() {
        return this._blurY
    }
    ,
    t.setBlurX = function(t) {
        (isNaN(t) || t < 0) && (t = 0),
        this._blurX = t
    }
    ,
    t.setBlurY = function(t) {
        (isNaN(t) || t < 0) && (t = 0),
        this._blurY = t
    }
    ,
    t.getQuality = function() {
        return this._quality
    }
    ,
    t.setQuality = function(t) {
        (isNaN(t) || t < 0) && (t = 0),
        this._quality = 0 | t
    }
    ,
    t._getShader = function() {
        var t = this._lastBlurX !== this._blurX
          , e = this._lastBlurY !== this._blurY
          , i = this._lastQuality !== this._quality;
        if (!(t || e || i))
            return this._compiledShader;
        (t || i) && (this._blurXTable = this._getTable(this._blurX * this._quality)),
        (e || i) && (this._blurYTable = this._getTable(this._blurY * this._quality)),
        this._updateShader(),
        this._lastBlurX = this._blurX,
        this._lastBlurY = this._blurY,
        this._lastQuality = this._quality
    }
    ,
    t._setShader = function() {
        this._compiledShader
    }
    ;
    try {
        Object.defineProperties(t, {
            blurX: {
                get: t.getBlurX,
                set: t.setBlurX
            },
            blurY: {
                get: t.getBlurY,
                set: t.setBlurY
            },
            quality: {
                get: t.getQuality,
                set: t.setQuality
            },
            _builtShader: {
                get: t._getShader,
                set: t._setShader
            }
        })
    } catch (t) {
        console.log(t)
    }
    t._getTable = function(t) {
        if (t <= 1)
            return [1];
        for (var e = [], t = Math.ceil(2 * t), i = (t += t % 2 ? 0 : 1,
        t / 2 | 0), s = -i; s <= i; s++) {
            var n = s / i * 4.2;
            e.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -Math.pow(n, 2) / 4))
        }
        var a = e.reduce(function(t, e) {
            return t + e
        });
        return e.map(function(t, e, i) {
            return t / a
        })
    }
    ,
    t._updateShader = function() {
        var t;
        void 0 !== this._blurX && void 0 !== this._blurY && (t = this.FRAG_SHADER_TEMPLATE,
        t = t.replace(/\{\{blurX\}\}/g, this._blurXTable.length.toFixed(0)),
        t = t.replace(/\{\{blurY\}\}/g, this._blurYTable.length.toFixed(0)),
        this.FRAG_SHADER_BODY = t)
    }
    ,
    t.shaderParamSetup = function(t, e, i) {
        t.uniform1fv(t.getUniformLocation(i, "xWeight"), this._blurXTable),
        t.uniform1fv(t.getUniformLocation(i, "yWeight"), this._blurYTable),
        t.uniform2f(t.getUniformLocation(i, "textureOffset"), 2 / (e._viewportWidth * this._quality), 2 / (e._viewportHeight * this._quality))
    }
    ,
    N.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1],
    N.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9],
    t.getBounds = function(t) {
        var e, i = 0 | this.blurX, s = 0 | this.blurY;
        return i <= 0 && s <= 0 ? t : (e = Math.pow(this.quality, .2),
        (t || new createjs.Rectangle).pad(s * e + 1, i * e + 1, s * e + 1, i * e + 1))
    }
    ,
    t.clone = function() {
        return new N(this.blurX,this.blurY,this.quality)
    }
    ,
    t.toString = function() {
        return "[BlurFilter]"
    }
    ,
    t._applyFilter = function(t) {
        var e = this._blurX >> 1;
        if (isNaN(e) || e < 0)
            return !1;
        var i = this._blurY >> 1;
        if (isNaN(i) || i < 0)
            return !1;
        if (0 == e && 0 == i)
            return !1;
        for (var s = this.quality, n = ((isNaN(s) || s < 1) && (s = 1),
        s |= 0,
        3 < s && (s = 3),
        s < 1 && (s = 1),
        t.data), a = 0, r = 0, o = 0, h = 0, l = 0, c = 0, u = 0, d = 0, p = 0, m = 0, _ = 0, f = 0, g = 0, w = 0, v = 0, y = e + e + 1 | 0, b = i + i + 1 | 0, T = 0 | t.width, S = 0 | t.height, E = T - 1 | 0, x = S - 1 | 0, C = 1 + e | 0, A = 1 + i | 0, L = {
            r: 0,
            b: 0,
            g: 0,
            a: 0
        }, R = L, o = 1; o < y; o++)
            R = R.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
        R.n = L;
        var B = {
            r: 0,
            b: 0,
            g: 0,
            a: 0
        }
          , P = B;
        for (o = 1; o < b; o++)
            P = P.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
        P.n = B;
        for (var j = null, D = 0 | N.MUL_TABLE[e], M = 0 | N.SHG_TABLE[e], I = 0 | N.MUL_TABLE[i], F = 0 | N.SHG_TABLE[i]; 0 < s--; ) {
            for (var u = c = 0, k = D, O = M, r = S; -1 < --r; ) {
                for (d = C * (f = n[0 | c]),
                p = C * (g = n[c + 1 | 0]),
                m = C * (w = n[c + 2 | 0]),
                _ = C * (v = n[c + 3 | 0]),
                R = L,
                o = C; -1 < --o; )
                    R.r = f,
                    R.g = g,
                    R.b = w,
                    R.a = v,
                    R = R.n;
                for (o = 1; o < C; o++)
                    h = c + ((E < o ? E : o) << 2) | 0,
                    d += R.r = n[h],
                    p += R.g = n[h + 1],
                    m += R.b = n[h + 2],
                    _ += R.a = n[h + 3],
                    R = R.n;
                for (j = L,
                a = 0; a < T; a++)
                    n[c++] = d * k >>> O,
                    n[c++] = p * k >>> O,
                    n[c++] = m * k >>> O,
                    n[c++] = _ * k >>> O,
                    h = u + ((h = a + e + 1) < E ? h : E) << 2,
                    d -= j.r - (j.r = n[h]),
                    p -= j.g - (j.g = n[h + 1]),
                    m -= j.b - (j.b = n[h + 2]),
                    _ -= j.a - (j.a = n[h + 3]),
                    j = j.n;
                u += T
            }
            for (k = I,
            O = F,
            a = 0; a < T; a++) {
                for (c = a << 2 | 0,
                d = A * (f = n[c]) | 0,
                p = A * (g = n[c + 1 | 0]) | 0,
                m = A * (w = n[c + 2 | 0]) | 0,
                _ = A * (v = n[c + 3 | 0]) | 0,
                P = B,
                o = 0; o < A; o++)
                    P.r = f,
                    P.g = g,
                    P.b = w,
                    P.a = v,
                    P = P.n;
                for (l = T,
                o = 1; o <= i; o++)
                    c = l + a << 2,
                    d += P.r = n[c],
                    p += P.g = n[c + 1],
                    m += P.b = n[c + 2],
                    _ += P.a = n[c + 3],
                    P = P.n,
                    o < x && (l += T);
                if (c = a,
                j = B,
                0 < s)
                    for (r = 0; r < S; r++)
                        h = c << 2,
                        n[h + 3] = v = _ * k >>> O,
                        0 < v ? (n[h] = d * k >>> O,
                        n[h + 1] = p * k >>> O,
                        n[h + 2] = m * k >>> O) : n[h] = n[h + 1] = n[h + 2] = 0,
                        h = a + ((h = r + A) < x ? h : x) * T << 2,
                        d -= j.r - (j.r = n[h]),
                        p -= j.g - (j.g = n[h + 1]),
                        m -= j.b - (j.b = n[h + 2]),
                        _ -= j.a - (j.a = n[h + 3]),
                        j = j.n,
                        c += T;
                else
                    for (r = 0; r < S; r++)
                        h = c << 2,
                        n[h + 3] = v = _ * k >>> O,
                        0 < v ? (v = 255 / v,
                        n[h] = (d * k >>> O) * v,
                        n[h + 1] = (p * k >>> O) * v,
                        n[h + 2] = (m * k >>> O) * v) : n[h] = n[h + 1] = n[h + 2] = 0,
                        h = a + ((h = r + A) < x ? h : x) * T << 2,
                        d -= j.r - (j.r = n[h]),
                        p -= j.g - (j.g = n[h + 1]),
                        m -= j.b - (j.b = n[h + 2]),
                        _ -= j.a - (j.a = n[h + 3]),
                        j = j.n,
                        c += T
            }
        }
        return !0
    }
    ,
    createjs.BlurFilter = createjs.promote(N, "Filter")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function e(t) {
        this.Filter_constructor(),
        this.alphaMap = t,
        this._alphaMap = null,
        this._mapData = null,
        this._mapTexture = null,
        this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));}"
    }
    var t = createjs.extend(e, createjs.Filter);
    t.shaderParamSetup = function(t, e, i) {
        this._mapTexture || (this._mapTexture = t.createTexture()),
        t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, this._mapTexture),
        e.setTextureParams(t),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.alphaMap),
        t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1)
    }
    ,
    t.clone = function() {
        var t = new e(this.alphaMap);
        return t._alphaMap = this._alphaMap,
        t._mapData = this._mapData,
        t
    }
    ,
    t.toString = function() {
        return "[AlphaMapFilter]"
    }
    ,
    t._applyFilter = function(t) {
        if (this.alphaMap) {
            if (!this._prepAlphaMap())
                return !1;
            for (var e = t.data, i = this._mapData, s = 0, n = e.length; s < n; s += 4)
                e[s + 3] = i[s] || 0
        }
        return !0
    }
    ,
    t._prepAlphaMap = function() {
        if (!this.alphaMap)
            return !1;
        if (this.alphaMap != this._alphaMap || !this._mapData) {
            this._mapData = null;
            var t, e = this._alphaMap = this.alphaMap, i = e;
            e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"),
            i.width = e.width,
            i.height = e.height,
            t = i.getContext("2d"),
            t.drawImage(e, 0, 0));
            try {
                var s = t.getImageData(0, 0, e.width, e.height)
            } catch (t) {
                return !1
            }
            this._mapData = s.data
        }
        return !0
    }
    ,
    createjs.AlphaMapFilter = createjs.promote(e, "Filter")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.Filter_constructor(),
        this.mask = t,
        this.usesContext = !0,
        this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * alphaMap.a);}"
    }
    var e = createjs.extend(t, createjs.Filter);
    e.shaderParamSetup = function(t, e, i) {
        this._mapTexture || (this._mapTexture = t.createTexture()),
        t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, this._mapTexture),
        e.setTextureParams(t),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.mask),
        t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1)
    }
    ,
    e.applyFilter = function(t, e, i, s, n, a, r, o) {
        if (this.mask) {
            if (a = a || t,
            null == r && (r = e),
            null == o && (o = i),
            a.save(),
            t != a)
                return !1;
            a.globalCompositeOperation = "destination-in",
            a.drawImage(this.mask, r, o),
            a.restore()
        }
        return !0
    }
    ,
    e.clone = function() {
        return new t(this.mask)
    }
    ,
    e.toString = function() {
        return "[AlphaMaskFilter]"
    }
    ,
    createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s, n, a, r, o) {
        this.Filter_constructor(),
        this.redMultiplier = null != t ? t : 1,
        this.greenMultiplier = null != e ? e : 1,
        this.blueMultiplier = null != i ? i : 1,
        this.alphaMultiplier = null != s ? s : 1,
        this.redOffset = n || 0,
        this.greenOffset = a || 0,
        this.blueOffset = r || 0,
        this.alphaOffset = o || 0,
        this.FRAG_SHADER_BODY = "uniform vec4 uColorMultiplier;uniform vec4 uColorOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = (color * uColorMultiplier) + uColorOffset;}"
    }
    var e = createjs.extend(t, createjs.Filter);
    e.shaderParamSetup = function(t, e, i) {
        t.uniform4f(t.getUniformLocation(i, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier),
        t.uniform4f(t.getUniformLocation(i, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255)
    }
    ,
    e.toString = function() {
        return "[ColorFilter]"
    }
    ,
    e.clone = function() {
        return new t(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)
    }
    ,
    e._applyFilter = function(t) {
        for (var e = t.data, i = e.length, s = 0; s < i; s += 4)
            e[s] = e[s] * this.redMultiplier + this.redOffset,
            e[s + 1] = e[s + 1] * this.greenMultiplier + this.greenOffset,
            e[s + 2] = e[s + 2] * this.blueMultiplier + this.blueOffset,
            e[s + 3] = e[s + 3] * this.alphaMultiplier + this.alphaOffset;
        return !0
    }
    ,
    createjs.ColorFilter = createjs.promote(t, "Filter")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function s(t, e, i, s) {
        this.setColor(t, e, i, s)
    }
    var t = s.prototype;
    s.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10],
    s.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    s.LENGTH = s.IDENTITY_MATRIX.length,
    t.setColor = function(t, e, i, s) {
        return this.reset().adjustColor(t, e, i, s)
    }
    ,
    t.reset = function() {
        return this.copy(s.IDENTITY_MATRIX)
    }
    ,
    t.adjustColor = function(t, e, i, s) {
        return this.adjustHue(s),
        this.adjustContrast(e),
        this.adjustBrightness(t),
        this.adjustSaturation(i)
    }
    ,
    t.adjustBrightness = function(t) {
        return 0 == t || isNaN(t) || (t = this._cleanValue(t, 255),
        this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])),
        this
    }
    ,
    t.adjustContrast = function(t) {
        var e;
        return 0 == t || isNaN(t) || (t = this._cleanValue(t, 100),
        e = t < 0 ? 127 + t / 100 * 127 : (e = t % 1,
        e = 0 == e ? s.DELTA_INDEX[t] : s.DELTA_INDEX[t << 0] * (1 - e) + s.DELTA_INDEX[1 + (t << 0)] * e,
        127 * e + 127),
        this._multiplyMatrix([e / 127, 0, 0, 0, .5 * (127 - e), 0, e / 127, 0, 0, .5 * (127 - e), 0, 0, e / 127, 0, .5 * (127 - e), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])),
        this
    }
    ,
    t.adjustSaturation = function(t) {
        return 0 == t || isNaN(t) || (t = this._cleanValue(t, 100),
        t = 1 + (0 < t ? 3 * t / 100 : t / 100),
        this._multiplyMatrix([.3086 * (1 - t) + t, .6094 * (1 - t), .082 * (1 - t), 0, 0, .3086 * (1 - t), .6094 * (1 - t) + t, .082 * (1 - t), 0, 0, .3086 * (1 - t), .6094 * (1 - t), .082 * (1 - t) + t, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])),
        this
    }
    ,
    t.adjustHue = function(t) {
        var e, i, s, n;
        return 0 == t || isNaN(t) || (t = this._cleanValue(t, 180) / 180 * Math.PI,
        e = Math.cos(t),
        t = Math.sin(t),
        i = .213,
        s = .715,
        n = .072,
        this._multiplyMatrix([i + .787 * e + t * -i, s + e * -s + t * -s, n + e * -n + .928 * t, 0, 0, i + e * -i + .143 * t, s + e * (1 - s) + .14 * t, n + e * -n + -.283 * t, 0, 0, i + e * -i + -.787 * t, s + e * -s + t * s, n + .928 * e + t * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])),
        this
    }
    ,
    t.concat = function(t) {
        return t = this._fixMatrix(t),
        t.length == s.LENGTH && this._multiplyMatrix(t),
        this
    }
    ,
    t.clone = function() {
        return (new s).copy(this)
    }
    ,
    t.toArray = function() {
        for (var t = [], e = 0, i = s.LENGTH; e < i; e++)
            t[e] = this[e];
        return t
    }
    ,
    t.copy = function(t) {
        for (var e = s.LENGTH, i = 0; i < e; i++)
            this[i] = t[i];
        return this
    }
    ,
    t.toString = function() {
        return "[ColorMatrix]"
    }
    ,
    t._multiplyMatrix = function(t) {
        for (var e, i = [], s = 0; s < 5; s++) {
            for (e = 0; e < 5; e++)
                i[e] = this[e + 5 * s];
            for (e = 0; e < 5; e++) {
                for (var n = 0, a = 0; a < 5; a++)
                    n += t[e + 5 * a] * i[a];
                this[e + 5 * s] = n
            }
        }
    }
    ,
    t._cleanValue = function(t, e) {
        return Math.min(e, Math.max(-e, t))
    }
    ,
    t._fixMatrix = function(t) {
        return t instanceof s && (t = t.toArray()),
        t.length < s.LENGTH ? t = t.slice(0, t.length).concat(s.IDENTITY_MATRIX.slice(t.length, s.LENGTH)) : t.length > s.LENGTH && (t = t.slice(0, s.LENGTH)),
        t
    }
    ,
    createjs.ColorMatrix = s
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.Filter_constructor(),
        this.matrix = t,
        this.FRAG_SHADER_BODY = "uniform mat4 uColorMatrix;uniform vec4 uColorMatrixOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);mat4 m = uColorMatrix;vec4 newColor = vec4(0,0,0,0);newColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];newColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];newColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];newColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];gl_FragColor = newColor + uColorMatrixOffset;}"
    }
    var e = createjs.extend(t, createjs.Filter);
    e.shaderParamSetup = function(t, e, i) {
        var s = this.matrix
          , n = new Float32Array([s[0], s[1], s[2], s[3], s[5], s[6], s[7], s[8], s[10], s[11], s[12], s[13], s[15], s[16], s[17], s[18]]);
        t.uniformMatrix4fv(t.getUniformLocation(i, "uColorMatrix"), !1, n),
        t.uniform4f(t.getUniformLocation(i, "uColorMatrixOffset"), s[4] / 255, s[9] / 255, s[14] / 255, s[19] / 255)
    }
    ,
    e.toString = function() {
        return "[ColorMatrixFilter]"
    }
    ,
    e.clone = function() {
        return new t(this.matrix)
    }
    ,
    e._applyFilter = function(t) {
        for (var e, i, s, n, a = t.data, r = a.length, t = this.matrix, o = t[0], h = t[1], l = t[2], c = t[3], u = t[4], d = t[5], p = t[6], m = t[7], _ = t[8], f = t[9], g = t[10], w = t[11], v = t[12], y = t[13], b = t[14], T = t[15], S = t[16], E = t[17], x = t[18], C = t[19], A = 0; A < r; A += 4)
            e = a[A],
            i = a[A + 1],
            s = a[A + 2],
            n = a[A + 3],
            a[A] = e * o + i * h + s * l + n * c + u,
            a[A + 1] = e * d + i * p + s * m + n * _ + f,
            a[A + 2] = e * g + i * w + s * v + n * y + b,
            a[A + 3] = e * T + i * S + s * E + n * x + C;
        return !0
    }
    ,
    createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function s() {
        throw "Touch cannot be instantiated"
    }
    s.isSupported = function() {
        return !!("ontouchstart"in window || window.navigator.msPointerEnabled && 0 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 0 < window.navigator.maxTouchPoints)
    }
    ,
    s.enable = function(t, e, i) {
        return !!(t && t.canvas && s.isSupported()) && (t.__touch || (t._247_touchSettings_singleTouch = e,
        t._247_touchSettings_allowDefault = i,
        t.__touch = {
            pointers: {},
            multitouch: !e,
            preventDefault: !i,
            count: 0
        },
        "ontouchstart"in window ? s._IOS_enable(t) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && s._IE_enable(t)),
        !0)
    }
    ,
    s.disable = function(t) {
        t && ("ontouchstart"in window ? s._IOS_disable(t) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && s._IE_disable(t),
        delete t.__touch)
    }
    ,
    s._IOS_enable = function(e) {
        var t = e.canvas
          , i = e.__touch.f = function(t) {
            s._IOS_handleEvent(e, t)
        }
        ;
        t.addEventListener("touchstart", i, !1),
        t.addEventListener("touchmove", i, !1),
        t.addEventListener("touchend", i, !1),
        t.addEventListener("touchcancel", i, !1)
    }
    ,
    s._IOS_disable = function(t) {
        var e = t.canvas;
        e && (t = t.__touch.f,
        e.removeEventListener("touchstart", t, !1),
        e.removeEventListener("touchmove", t, !1),
        e.removeEventListener("touchend", t, !1),
        e.removeEventListener("touchcancel", t, !1))
    }
    ,
    s._IOS_handleEvent = function(t, e) {
        if (t) {
            t.__touch.preventDefault && e.preventDefault && e.preventDefault();
            for (var i = e.changedTouches, s = e.type, n = 0, a = i.length; n < a; n++) {
                var r = i[n]
                  , o = r.identifier;
                r.target == t.canvas && ("touchstart" == s ? this._handleStart(t, o, e, r.pageX, r.pageY) : "touchmove" == s ? this._handleMove(t, o, e, r.pageX, r.pageY) : "touchend" != s && "touchcancel" != s || this._handleEnd(t, o, e))
            }
        }
    }
    ,
    s._IE_enable = function(e) {
        var t = e.canvas
          , i = e.__touch.f = function(t) {
            s._IE_handleEvent(e, t)
        }
        ;
        void 0 === window.navigator.pointerEnabled ? (t.addEventListener("MSPointerDown", i, !1),
        window.addEventListener("MSPointerMove", i, !1),
        window.addEventListener("MSPointerUp", i, !1),
        window.addEventListener("MSPointerCancel", i, !1),
        e.__touch.preventDefault && (t.style.msTouchAction = "none")) : (t.addEventListener("pointerdown", i, !1),
        window.addEventListener("pointermove", i, !1),
        window.addEventListener("pointerup", i, !1),
        window.addEventListener("pointercancel", i, !1),
        e.__touch.preventDefault && (t.style.touchAction = "none")),
        e.__touch.activeIDs = {}
    }
    ,
    s._IE_disable = function(t) {
        var e = t.__touch.f;
        void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e, !1),
        window.removeEventListener("MSPointerUp", e, !1),
        window.removeEventListener("MSPointerCancel", e, !1),
        t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener("pointermove", e, !1),
        window.removeEventListener("pointerup", e, !1),
        window.removeEventListener("pointercancel", e, !1),
        t.canvas && t.canvas.removeEventListener("pointerdown", e, !1))
    }
    ,
    s._IE_handleEvent = function(t, e) {
        var i, s, n;
        t && (t.__touch.preventDefault && e.preventDefault && e.preventDefault(),
        i = e.type,
        s = e.pointerId,
        n = t.__touch.activeIDs,
        "MSPointerDown" == i || "pointerdown" == i ? e.srcElement == t.canvas && (n[s] = !0,
        this._handleStart(t, s, e, e.pageX, e.pageY)) : n[s] && ("MSPointerMove" == i || "pointermove" == i ? this._handleMove(t, s, e, e.pageX, e.pageY) : "MSPointerUp" != i && "MSPointerCancel" != i && "pointerup" != i && "pointercancel" != i || (delete n[s],
        this._handleEnd(t, s, e))))
    }
    ,
    s._handleStart = function(t, e, i, s, n) {
        var a, r = t.__touch;
        !r.multitouch && r.count || (a = r.pointers,
        a[e]) || (a[e] = !0,
        r.count++,
        t._handlePointerDown(e, i, s, n))
    }
    ,
    s._handleMove = function(t, e, i, s, n) {
        t.__touch.pointers[e] && t._handlePointerMove(e, i, s, n)
    }
    ,
    s._handleEnd = function(t, e, i) {
        var s = t.__touch
          , n = s.pointers;
        n[e] && (s.count--,
        t._handlePointerUp(e, i, !0),
        delete n[e])
    }
    ,
    s.reset = function(t) {
        t.__touch && (t._primaryPointerID = null,
        t._pointerCount = 0,
        t._pointerData = {},
        s.disable(t),
        s.enable(t, t._247_touchSettings_singleTouch, t._247_touchSettings_allowDefault))
    }
    ,
    createjs.Touch = s
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    var t = createjs.EaselJS = createjs.EaselJS || {};
    t.version = "1.0.0",
    t.buildDate = "Thu, 14 Sep 2017 19:47:53 GMT"
}(),
this.createjs = this.createjs || {},
createjs.extend = function(t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }
    return i.prototype = e.prototype,
    t.prototype = new i
}
,
this.createjs = this.createjs || {},
createjs.promote = function(t, e) {
    "use strict";
    var i = t.prototype
      , s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (s)
        for (var n in i[(e += "_") + "constructor"] = s.constructor,
        s)
            i.hasOwnProperty(n) && "function" == typeof s[n] && (i[e + n] = s[n]);
    return t
}
,
this.createjs = this.createjs || {},
createjs.deprecate = function(e, i) {
    "use strict";
    return function() {
        var t = "Deprecated property or method '" + i + "'. See docs for info.";
        return console && (console.warn ? console.warn(t) : console.log(t)),
        e && e.apply(this, arguments)
    }
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.type = t,
        this.target = null,
        this.currentTarget = null,
        this.eventPhase = 0,
        this.bubbles = !!e,
        this.cancelable = !!i,
        this.timeStamp = (new Date).getTime(),
        this.defaultPrevented = !1,
        this.propagationStopped = !1,
        this.immediatePropagationStopped = !1,
        this.removed = !1
    }
    var e = t.prototype;
    e.preventDefault = function() {
        this.defaultPrevented = this.cancelable && !0
    }
    ,
    e.stopPropagation = function() {
        this.propagationStopped = !0
    }
    ,
    e.stopImmediatePropagation = function() {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }
    ,
    e.remove = function() {
        this.removed = !0
    }
    ,
    e.clone = function() {
        return new t(this.type,this.bubbles,this.cancelable)
    }
    ,
    e.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    e.toString = function() {
        return "[Event (type=" + this.type + ")]"
    }
    ,
    createjs.Event = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this._listeners = null,
        this._captureListeners = null
    }
    var e = t.prototype;
    t.initialize = function(t) {
        t.addEventListener = e.addEventListener,
        t.on = e.on,
        t.removeEventListener = t.off = e.removeEventListener,
        t.removeAllEventListeners = e.removeAllEventListeners,
        t.hasEventListener = e.hasEventListener,
        t.dispatchEvent = e.dispatchEvent,
        t._dispatchEvent = e._dispatchEvent,
        t.willTrigger = e.willTrigger
    }
    ,
    e.addEventListener = function(t, e, i) {
        var s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {}
          , n = s[t];
        return n && this.removeEventListener(t, e, i),
        n = s[t],
        n ? n.push(e) : s[t] = [e],
        e
    }
    ,
    e.on = function(t, e, i, s, n, a) {
        return e.handleEvent && (i = i || e,
        e = e.handleEvent),
        i = i || this,
        this.addEventListener(t, function(t) {
            e.call(i, t, n),
            s && t.remove()
        }, a)
    }
    ,
    e.removeEventListener = function(t, e, i) {
        var s = i ? this._captureListeners : this._listeners;
        if (s) {
            var n = s[t];
            if (n)
                for (var a = 0, r = n.length; a < r; a++)
                    if (n[a] == e) {
                        1 == r ? delete s[t] : n.splice(a, 1);
                        break
                    }
        }
    }
    ,
    e.off = e.removeEventListener,
    e.removeAllEventListeners = function(t) {
        t ? (this._listeners && delete this._listeners[t],
        this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }
    ,
    e.dispatchEvent = function(t, e, i) {
        if ("string" == typeof t) {
            var s = this._listeners;
            if (!(e || s && s[t]))
                return !0;
            t = new createjs.Event(t,e,i)
        } else
            t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (t) {}
        if (t.bubbles && this.parent) {
            for (var n = this, a = [n]; n.parent; )
                a.push(n = n.parent);
            for (var r = a.length, o = r - 1; 0 <= o && !t.propagationStopped; o--)
                a[o]._dispatchEvent(t, 1 + (0 == o));
            for (o = 1; o < r && !t.propagationStopped; o++)
                a[o]._dispatchEvent(t, 3)
        } else
            this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }
    ,
    e.hasEventListener = function(t) {
        var e = this._listeners
          , i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }
    ,
    e.willTrigger = function(t) {
        for (var e = this; e; ) {
            if (e.hasEventListener(t))
                return !0;
            e = e.parent
        }
        return !1
    }
    ,
    e.toString = function() {
        return "[EventDispatcher]"
    }
    ,
    e._dispatchEvent = function(t, e) {
        var i, s = e <= 2 ? this._captureListeners : this._listeners;
        if (t && s && (n = s[t.type]) && (i = n.length)) {
            try {
                t.currentTarget = this
            } catch (t) {}
            try {
                t.eventPhase = 0 | e
            } catch (t) {}
            t.removed = !1;
            for (var n = n.slice(), a = 0; a < i && !t.immediatePropagationStopped; a++) {
                var r = n[a];
                r.handleEvent ? r.handleEvent(t) : r(t),
                t.removed && (this.off(t.type, r, 1 == e),
                t.removed = !1)
            }
        }
        2 === e && this._dispatchEvent(t, 2.1)
    }
    ,
    createjs.EventDispatcher = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function a() {
        throw "Ticker cannot be instantiated."
    }
    a.RAF_SYNCHED = "synched",
    a.RAF = "raf",
    a.TIMEOUT = "timeout",
    a.timingMode = null,
    a.maxDelta = 0,
    a.paused = !1,
    a.removeEventListener = null,
    a.removeAllEventListeners = null,
    a.dispatchEvent = null,
    a.hasEventListener = null,
    a._listeners = null,
    createjs.EventDispatcher.initialize(a),
    a._addEventListener = a.addEventListener,
    a.addEventListener = function() {
        return a._inited || a.init(),
        a._addEventListener.apply(a, arguments)
    }
    ,
    a._inited = !1,
    a._startTime = 0,
    a._pausedTime = 0,
    a._ticks = 0,
    a._pausedTicks = 0,
    a._interval = 50,
    a._lastTime = 0,
    a._times = null,
    a._tickTimes = null,
    a._timerId = null,
    a._raf = !0,
    a._setInterval = function(t) {
        a._interval = t,
        a._inited && a._setupTick()
    }
    ,
    a.setInterval = createjs.deprecate(a._setInterval, "Ticker.setInterval"),
    a._getInterval = function() {
        return a._interval
    }
    ,
    a.getInterval = createjs.deprecate(a._getInterval, "Ticker.getInterval"),
    a._setFPS = function(t) {
        a._setInterval(1e3 / t)
    }
    ,
    a.setFPS = createjs.deprecate(a._setFPS, "Ticker.setFPS"),
    a._getFPS = function() {
        return 1e3 / a._interval
    }
    ,
    a.getFPS = createjs.deprecate(a._getFPS, "Ticker.getFPS");
    try {
        Object.defineProperties(a, {
            interval: {
                get: a._getInterval,
                set: a._setInterval
            },
            framerate: {
                get: a._getFPS,
                set: a._setFPS
            }
        })
    } catch (t) {
        console.log(t)
    }
    a.init = function() {
        a._inited || (a._inited = !0,
        a._times = [],
        a._tickTimes = [],
        a._startTime = a._getTime(),
        a._times.push(a._lastTime = 0),
        a.interval = a._interval)
    }
    ,
    a.reset = function() {
        var t;
        a._raf ? (t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame,
        t && t(a._timerId)) : clearTimeout(a._timerId),
        a.removeAllEventListeners("tick"),
        a._timerId = a._times = a._tickTimes = null,
        a._startTime = a._lastTime = a._ticks = a._pausedTime = 0,
        a._inited = !1
    }
    ,
    a.getMeasuredTickTime = function(t) {
        var e = 0
          , i = a._tickTimes;
        if (!i || i.length < 1)
            return -1;
        t = Math.min(i.length, t || 0 | a._getFPS());
        for (var s = 0; s < t; s++)
            e += i[s];
        return e / t
    }
    ,
    a.getMeasuredFPS = function(t) {
        var e = a._times;
        return !e || e.length < 2 ? -1 : (t = Math.min(e.length - 1, t || 0 | a._getFPS()),
        1e3 / ((e[0] - e[t]) / t))
    }
    ,
    a.getTime = function(t) {
        return a._startTime ? a._getTime() - (t ? a._pausedTime : 0) : -1
    }
    ,
    a.getEventTime = function(t) {
        return a._startTime ? (a._lastTime || a._startTime) - (t ? a._pausedTime : 0) : -1
    }
    ,
    a.getTicks = function(t) {
        return a._ticks - (t ? a._pausedTicks : 0)
    }
    ,
    a._handleSynch = function() {
        a._timerId = null,
        a._setupTick(),
        a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
    }
    ,
    a._handleRAF = function() {
        a._timerId = null,
        a._setupTick(),
        a._tick()
    }
    ,
    a._handleTimeout = function() {
        a._timerId = null,
        a._setupTick(),
        a._tick()
    }
    ,
    a._setupTick = function() {
        if (null == a._timerId) {
            var t = a.timingMode;
            if (t == a.RAF_SYNCHED || t == a.RAF) {
                var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (e)
                    return a._timerId = e(t == a.RAF ? a._handleRAF : a._handleSynch),
                    void (a._raf = !0)
            }
            a._raf = !1,
            a._timerId = setTimeout(a._handleTimeout, a._interval)
        }
    }
    ,
    a._tick = function() {
        var t, e, i = a.paused, s = a._getTime(), n = s - a._lastTime;
        for (a._lastTime = s,
        a._ticks++,
        i && (a._pausedTicks++,
        a._pausedTime += n),
        a.hasEventListener("tick") && (t = new createjs.Event("tick"),
        e = a.maxDelta,
        t.delta = e && e < n ? e : n,
        t.paused = i,
        t.time = s,
        t.runTime = s - a._pausedTime,
        a.dispatchEvent(t)),
        a._tickTimes.unshift(a._getTime() - s); 100 < a._tickTimes.length; )
            a._tickTimes.pop();
        for (a._times.unshift(s); 100 < a._times.length; )
            a._times.pop()
    }
    ;
    var t = window
      , e = t.performance.now || t.performance.mozNow || t.performance.msNow || t.performance.oNow || t.performance.webkitNow;
    a._getTime = function() {
        return (e && e.call(t.performance) || (new Date).getTime()) - a._startTime
    }
    ,
    createjs.Ticker = a
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.EventDispatcher_constructor(),
        this.ignoreGlobalPause = !1,
        this.loop = 0,
        this.useTicks = !1,
        this.reversed = !1,
        this.bounce = !1,
        this.timeScale = 1,
        this.duration = 0,
        this.position = 0,
        this.rawPosition = -1,
        this._paused = !0,
        this._next = null,
        this._prev = null,
        this._parent = null,
        this._labels = null,
        this._labelList = null,
        t && (this.useTicks = !!t.useTicks,
        this.ignoreGlobalPause = !!t.ignoreGlobalPause,
        this.loop = !0 === t.loop ? -1 : t.loop || 0,
        this.reversed = !!t.reversed,
        this.bounce = !!t.bounce,
        this.timeScale = t.timeScale || 1,
        t.onChange && this.addEventListener("change", t.onChange),
        t.onComplete) && this.addEventListener("complete", t.onComplete)
    }
    var e = createjs.extend(t, createjs.EventDispatcher);
    e._setPaused = function(t) {
        return createjs.Tween._register(this, t),
        this
    }
    ,
    e.setPaused = createjs.deprecate(e._setPaused, "AbstractTween.setPaused"),
    e._getPaused = function() {
        return this._paused
    }
    ,
    e.getPaused = createjs.deprecate(e._getPaused, "AbstactTween.getPaused"),
    e._getCurrentLabel = function(t) {
        var e = this.getLabels();
        null == t && (t = this.position);
        for (var i = 0, s = e.length; i < s && !(t < e[i].position); i++)
            ;
        return 0 === i ? null : e[i - 1].label
    }
    ,
    e.getCurrentLabel = createjs.deprecate(e._getCurrentLabel, "AbstractTween.getCurrentLabel");
    try {
        Object.defineProperties(e, {
            paused: {
                set: e._setPaused,
                get: e._getPaused
            },
            currentLabel: {
                get: e._getCurrentLabel
            }
        })
    } catch (t) {}
    e.advance = function(t, e) {
        this.setPosition(this.rawPosition + t * this.timeScale, e)
    }
    ,
    e.setPosition = function(t, e, i, s) {
        var n = this.duration
          , a = this.loop
          , r = this.rawPosition
          , o = 0
          , h = 0
          , l = !1;
        if (t < 0 && (t = 0),
        0 === n) {
            if (l = !0,
            -1 !== r)
                return l
        } else {
            if (o = t / n | 0,
            h = t - o * n,
            l = -1 !== a && a * n + n <= t,
            l && (t = (h = n) * (o = a) + n),
            t === r)
                return l;
            a = !this.reversed != !(this.bounce && o % 2);
            a && (h = n - h)
        }
        this.position = h,
        this.rawPosition = t,
        this._updatePosition(i, l),
        l && (this.paused = !0),
        s && s(this),
        e || this._runActions(r, t, i, !i && -1 === r),
        this.dispatchEvent("change"),
        l && this.dispatchEvent("complete")
    }
    ,
    e.calculatePosition = function(t) {
        var e = this.duration
          , i = this.loop
          , s = 0
          , n = 0;
        if (0 === e)
            return 0;
        -1 !== i && i * e + e <= t ? (n = e,
        s = i) : n = t < 0 ? 0 : (s = t / e | 0,
        t - s * e);
        i = !this.reversed != !(this.bounce && s % 2);
        return i ? e - n : n
    }
    ,
    e.getLabels = function() {
        var t = this._labelList;
        if (!t) {
            var e, t = this._labelList = [], i = this._labels;
            for (e in i)
                t.push({
                    label: e,
                    position: i[e]
                });
            t.sort(function(t, e) {
                return t.position - e.position
            })
        }
        return t
    }
    ,
    e.setLabels = function(t) {
        this._labels = t,
        this._labelList = null
    }
    ,
    e.addLabel = function(t, e) {
        this._labels || (this._labels = {}),
        this._labels[t] = e;
        var i = this._labelList;
        if (i) {
            for (var s = 0, n = i.length; s < n && !(e < i[s].position); s++)
                ;
            i.splice(s, 0, {
                label: t,
                position: e
            })
        }
    }
    ,
    e.gotoAndPlay = function(t) {
        this.paused = !1,
        this._goto(t)
    }
    ,
    e.gotoAndStop = function(t) {
        this.paused = !0,
        this._goto(t)
    }
    ,
    e.resolve = function(t) {
        var e = Number(t);
        return isNaN(e) && (e = this._labels && this._labels[t]),
        e
    }
    ,
    e.toString = function() {
        return "[AbstractTween]"
    }
    ,
    e.clone = function() {
        throw "AbstractTween can not be cloned."
    }
    ,
    e._init = function(t) {
        t && t.paused || (this.paused = !1),
        t && null != t.position && this.setPosition(t.position)
    }
    ,
    e._updatePosition = function(t, e) {}
    ,
    e._goto = function(t) {
        t = this.resolve(t);
        null != t && this.setPosition(t, !1, !0)
    }
    ,
    e._runActions = function(t, e, i, s) {
        if (this._actionHead || this.tweens) {
            var n, a, r, o, h = this.duration, l = this.reversed, c = this.bounce, u = this.loop;
            if (0 === h ? (n = a = r = o = 0,
            l = c = !1) : (n = t / h | 0,
            a = e / h | 0,
            r = t - n * h,
            o = e - a * h),
            -1 !== u && (u < a && (o = h,
            a = u),
            u < n) && (r = h,
            n = u),
            i)
                return this._runActionsRange(o, o, i, s);
            if (n !== a || r !== o || i || s) {
                -1 === n && (n = r = 0);
                var d = t <= e
                  , p = n;
                do {
                    var m = !l != !(c && p % 2)
                      , _ = p === n ? r : d ? 0 : h
                      , f = p === a ? o : d ? h : 0;
                    if (m && (_ = h - _,
                    f = h - f),
                    (!c || p === n || _ !== f) && this._runActionsRange(_, f, i, s || p !== n && !c))
                        return !0
                } while (s = !1,
                d && ++p <= a || !d && --p >= a)
            }
        }
    }
    ,
    e._runActionsRange = function(t, e, i, s) {}
    ,
    createjs.AbstractTween = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function f(t, e) {
        this.AbstractTween_constructor(e),
        this.pluginData = null,
        this.target = t,
        this.passive = !1,
        this._stepHead = new n(null,0,0,{},null,!0),
        this._stepTail = this._stepHead,
        this._stepPosition = 0,
        this._actionHead = null,
        this._actionTail = null,
        this._plugins = null,
        this._pluginIds = null,
        this._injected = null,
        e && (this.pluginData = e.pluginData,
        e.override) && f.removeTweens(t),
        this.pluginData || (this.pluginData = {}),
        this._init(e)
    }
    var t = createjs.extend(f, createjs.AbstractTween);
    function n(t, e, i, s, n, a) {
        this.next = null,
        this.prev = t,
        this.t = e,
        this.d = i,
        this.props = s,
        this.ease = n,
        this.passive = a,
        this.index = t ? t.index + 1 : 0
    }
    function s(t, e, i, s, n) {
        this.next = null,
        this.prev = t,
        this.t = e,
        this.d = 0,
        this.scope = i,
        this.funct = s,
        this.params = n
    }
    f.IGNORE = {},
    f._tweens = [],
    f._plugins = null,
    f._tweenHead = null,
    f._tweenTail = null,
    f.get = function(t, e) {
        return new f(t,e)
    }
    ,
    f.tick = function(t, e) {
        for (var i = f._tweenHead; i; ) {
            var s = i._next;
            e && !i.ignoreGlobalPause || i._paused || i.advance(i.useTicks ? 1 : t),
            i = s
        }
    }
    ,
    f.handleEvent = function(t) {
        "tick" === t.type && this.tick(t.delta, t.paused)
    }
    ,
    f.removeTweens = function(t) {
        if (t.tweenjs_count) {
            for (var e = f._tweenHead; e; ) {
                var i = e._next;
                e.target === t && f._register(e, !0),
                e = i
            }
            t.tweenjs_count = 0
        }
    }
    ,
    f.removeAllTweens = function() {
        for (var t = f._tweenHead; t; ) {
            var e = t._next;
            t._paused = !0,
            t.target && (t.target.tweenjs_count = 0),
            t._next = t._prev = null,
            t = e
        }
        f._tweenHead = f._tweenTail = null
    }
    ,
    f.hasActiveTweens = function(t) {
        return t ? !!t.tweenjs_count : !!f._tweenHead
    }
    ,
    f._installPlugin = function(t) {
        for (var e = t.priority = t.priority || 0, i = f._plugins = f._plugins || [], s = 0, n = i.length; s < n && !(e < i[s].priority); s++)
            ;
        i.splice(s, 0, t)
    }
    ,
    f._register = function(t, e) {
        var i, s = t.target;
        !e && t._paused ? (s && (s.tweenjs_count = s.tweenjs_count ? s.tweenjs_count + 1 : 1),
        i = f._tweenTail,
        i ? (f._tweenTail = i._next = t,
        t._prev = i) : f._tweenHead = f._tweenTail = t,
        !f._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", f),
        f._inited = !0)) : e && !t._paused && (s && s.tweenjs_count--,
        i = t._next,
        s = t._prev,
        i ? i._prev = s : f._tweenTail = s,
        s ? s._next = i : f._tweenHead = i,
        t._next = t._prev = null),
        t._paused = e
    }
    ,
    t.wait = function(t, e) {
        return 0 < t && this._addStep(+t, this._stepTail.props, null, e),
        this
    }
    ,
    t.to = function(t, e, i) {
        (null == e || e < 0) && (e = 0);
        e = this._addStep(+e, null, i);
        return this._appendProps(t, e),
        this
    }
    ,
    t.label = function(t) {
        return this.addLabel(t, this.duration),
        this
    }
    ,
    t.call = function(t, e, i) {
        return this._addAction(i || this.target, t, e || [this])
    }
    ,
    t.set = function(t, e) {
        return this._addAction(e || this.target, this._set, [t])
    }
    ,
    t.play = function(t) {
        return this._addAction(t || this, this._set, [{
            paused: !1
        }])
    }
    ,
    t.pause = function(t) {
        return this._addAction(t || this, this._set, [{
            paused: !0
        }])
    }
    ,
    t.w = t.wait,
    t.t = t.to,
    t.c = t.call,
    t.s = t.set,
    t.toString = function() {
        return "[Tween]"
    }
    ,
    t.clone = function() {
        throw "Tween can not be cloned."
    }
    ,
    t._addPlugin = function(t) {
        var e = this._pluginIds || (this._pluginIds = {})
          , i = t.ID;
        if (i && !e[i]) {
            e[i] = !0;
            for (var s = this._plugins || (this._plugins = []), n = t.priority || 0, a = 0, r = s.length; a < r; a++)
                if (n < s[a].priority)
                    return void s.splice(a, 0, t);
            s.push(t)
        }
    }
    ,
    t._updatePosition = function(t, e) {
        var i = this._stepHead.next
          , s = this.position
          , n = this.duration;
        if (this.target && i) {
            for (var a = i.next; a && a.t <= s; )
                i = i.next,
                a = i.next;
            n = e ? 0 === n ? 1 : s / n : (s - i.t) / i.d;
            this._updateTargetProps(i, n, e)
        }
        this._stepPosition = i ? s - i.t : 0
    }
    ,
    t._updateTargetProps = function(t, e, i) {
        if (!(this.passive = !!t.passive)) {
            var s, n, a, r, o = t.prev.props, h = t.props, l = ((r = t.ease) && (e = r(e, 0, 1, 1)),
            this._plugins);
            t: for (var c in o) {
                if (n = o[c],
                a = h[c],
                s = n !== a && "number" == typeof n ? n + (a - n) * e : 1 <= e ? a : n,
                l)
                    for (var u = 0, d = l.length; u < d; u++) {
                        var p = l[u].change(this, t, c, s, e, i);
                        if (p === f.IGNORE)
                            continue t;
                        void 0 !== p && (s = p)
                    }
                this.target[c] = s
            }
        }
    }
    ,
    t._runActionsRange = function(t, e, i, s) {
        for (var n = e < t, a = n ? this._actionTail : this._actionHead, r = e, o = t, h = (n && (r = t,
        o = e),
        this.position); a; ) {
            var l = a.t;
            if ((l === e || o < l && l < r || s && l === t) && (a.funct.apply(a.scope, a.params),
            h !== this.position))
                return !0;
            a = n ? a.prev : a.next
        }
    }
    ,
    t._appendProps = function(t, e, i) {
        var s, n, a, r = this._stepHead.props, o = this.target, h = f._plugins, l = e.prev, c = l.props, u = e.props || (e.props = this._cloneProps(c)), d = {};
        for (s in t)
            if (t.hasOwnProperty(s) && (d[s] = u[s] = t[s],
            void 0 === r[s])) {
                if (a = void 0,
                h)
                    for (n = h.length - 1; 0 <= n; n--)
                        if (m = h[n].init(this, s, a),
                        void 0 !== m && (a = m),
                        a === f.IGNORE) {
                            delete u[s],
                            delete d[s];
                            break
                        }
                a !== f.IGNORE && (void 0 === a && (a = o[s]),
                c[s] = void 0 === a ? null : a)
            }
        for (s in d)
            for (var p, m = t[s], _ = l; (p = _) && (_ = p.prev); )
                if (_.props !== p.props) {
                    if (void 0 !== _.props[s])
                        break;
                    _.props[s] = c[s]
                }
        if (!1 !== i && (h = this._plugins))
            for (n = h.length - 1; 0 <= n; n--)
                h[n].step(this, e, d);
        (i = this._injected) && (this._injected = null,
        this._appendProps(i, e, !1))
    }
    ,
    t._injectProp = function(t, e) {
        var i = this._injected || (this._injected = {});
        i[t] = e
    }
    ,
    t._addStep = function(t, e, i, s) {
        e = new n(this._stepTail,this.duration,t,e,i,s || !1);
        return this.duration += t,
        this._stepTail = this._stepTail.next = e
    }
    ,
    t._addAction = function(t, e, i) {
        t = new s(this._actionTail,this.duration,t,e,i);
        return this._actionTail ? this._actionTail.next = t : this._actionHead = t,
        this._actionTail = t,
        this
    }
    ,
    t._set = function(t) {
        for (var e in t)
            this[e] = t[e]
    }
    ,
    t._cloneProps = function(t) {
        var e, i = {};
        for (e in t)
            i[e] = t[e];
        return i
    }
    ,
    createjs.Tween = createjs.promote(f, "AbstractTween")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        var e, i;
        t instanceof Array || null == t && 1 < arguments.length ? (e = t,
        i = arguments[1],
        t = arguments[2]) : t && (e = t.tweens,
        i = t.labels),
        this.AbstractTween_constructor(t),
        this.tweens = [],
        e && this.addTween.apply(this, e),
        this.setLabels(i),
        this._init(t)
    }
    var e = createjs.extend(t, createjs.AbstractTween);
    e.addTween = function(t) {
        t._parent && t._parent.removeTween(t);
        var e = arguments.length;
        if (1 < e) {
            for (var i = 0; i < e; i++)
                this.addTween(arguments[i]);
            return arguments[e - 1]
        }
        if (0 === e)
            return null;
        this.tweens.push(t),
        t._parent = this,
        t.paused = !0;
        var s = t.duration;
        return 0 < t.loop && (s *= t.loop + 1),
        s > this.duration && (this.duration = s),
        0 <= this.rawPosition && t.setPosition(this.rawPosition),
        t
    }
    ,
    e.removeTween = function(t) {
        var e = arguments.length;
        if (1 < e) {
            for (var i = !0, s = 0; s < e; s++)
                i = i && this.removeTween(arguments[s]);
            return i
        }
        if (0 === e)
            return !0;
        for (var n = this.tweens, s = n.length; s--; )
            if (n[s] === t)
                return n.splice(s, 1),
                t._parent = null,
                t.duration >= this.duration && this.updateDuration(),
                !0;
        return !1
    }
    ,
    e.updateDuration = function() {
        this.duration = 0;
        for (var t = 0, e = this.tweens.length; t < e; t++) {
            var i = this.tweens[t]
              , s = i.duration;
            0 < i.loop && (s *= i.loop + 1),
            s > this.duration && (this.duration = s)
        }
    }
    ,
    e.toString = function() {
        return "[Timeline]"
    }
    ,
    e.clone = function() {
        throw "Timeline can not be cloned."
    }
    ,
    e._updatePosition = function(t, e) {
        for (var i = this.position, s = 0, n = this.tweens.length; s < n; s++)
            this.tweens[s].setPosition(i, !0, t)
    }
    ,
    e._runActionsRange = function(t, e, i, s) {
        for (var n = this.position, a = 0, r = this.tweens.length; a < r; a++)
            if (this.tweens[a]._runActions(t, e, i, s),
            n !== this.position)
                return !0
    }
    ,
    createjs.Timeline = createjs.promote(t, "AbstractTween")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function e() {
        throw "Ease cannot be instantiated."
    }
    e.linear = function(t) {
        return t
    }
    ,
    e.none = e.linear,
    e.get = function(e) {
        return e < -1 ? e = -1 : 1 < e && (e = 1),
        function(t) {
            return 0 == e ? t : e < 0 ? t * (t * -e + 1 + e) : t * ((2 - t) * e + (1 - e))
        }
    }
    ,
    e.getPowIn = function(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }
    ,
    e.getPowOut = function(e) {
        return function(t) {
            return 1 - Math.pow(1 - t, e)
        }
    }
    ,
    e.getPowInOut = function(e) {
        return function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(t, e) : 1 - .5 * Math.abs(Math.pow(2 - t, e))
        }
    }
    ,
    e.quadIn = e.getPowIn(2),
    e.quadOut = e.getPowOut(2),
    e.quadInOut = e.getPowInOut(2),
    e.cubicIn = e.getPowIn(3),
    e.cubicOut = e.getPowOut(3),
    e.cubicInOut = e.getPowInOut(3),
    e.quartIn = e.getPowIn(4),
    e.quartOut = e.getPowOut(4),
    e.quartInOut = e.getPowInOut(4),
    e.quintIn = e.getPowIn(5),
    e.quintOut = e.getPowOut(5),
    e.quintInOut = e.getPowInOut(5),
    e.sineIn = function(t) {
        return 1 - Math.cos(t * Math.PI / 2)
    }
    ,
    e.sineOut = function(t) {
        return Math.sin(t * Math.PI / 2)
    }
    ,
    e.sineInOut = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }
    ,
    e.getBackIn = function(e) {
        return function(t) {
            return t * t * ((e + 1) * t - e)
        }
    }
    ,
    e.backIn = e.getBackIn(1.7),
    e.getBackOut = function(e) {
        return function(t) {
            return --t * t * ((e + 1) * t + e) + 1
        }
    }
    ,
    e.backOut = e.getBackOut(1.7),
    e.getBackInOut = function(e) {
        return e *= 1.525,
        function(t) {
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }
    }
    ,
    e.backInOut = e.getBackInOut(1.7),
    e.circIn = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }
    ,
    e.circOut = function(t) {
        return Math.sqrt(1 - --t * t)
    }
    ,
    e.circInOut = function(t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }
    ,
    e.bounceIn = function(t) {
        return 1 - e.bounceOut(1 - t)
    }
    ,
    e.bounceOut = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }
    ,
    e.bounceInOut = function(t) {
        return t < .5 ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
    }
    ,
    e.getElasticIn = function(i, s) {
        var n = 2 * Math.PI;
        return function(t) {
            var e;
            return 0 == t || 1 == t ? t : (e = s / n * Math.asin(1 / i),
            -(i * Math.pow(2, 10 * --t) * Math.sin((t - e) * n / s)))
        }
    }
    ,
    e.elasticIn = e.getElasticIn(1, .3),
    e.getElasticOut = function(i, s) {
        var n = 2 * Math.PI;
        return function(t) {
            var e;
            return 0 == t || 1 == t ? t : (e = s / n * Math.asin(1 / i),
            i * Math.pow(2, -10 * t) * Math.sin((t - e) * n / s) + 1)
        }
    }
    ,
    e.elasticOut = e.getElasticOut(1, .3),
    e.getElasticInOut = function(i, s) {
        var n = 2 * Math.PI;
        return function(t) {
            var e = s / n * Math.asin(1 / i);
            return (t *= 2) < 1 ? i * Math.pow(2, 10 * --t) * Math.sin((t - e) * n / s) * -.5 : i * Math.pow(2, -10 * --t) * Math.sin((t - e) * n / s) * .5 + 1
        }
    }
    ,
    e.elasticInOut = e.getElasticInOut(1, .3 * 1.5),
    createjs.Ease = e
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        throw "MotionGuidePlugin cannot be instantiated."
    }
    var b = t;
    b.priority = 0,
    b.ID = "MotionGuide",
    b.install = function() {
        return createjs.Tween._installPlugin(t),
        createjs.Tween.IGNORE
    }
    ,
    b.init = function(t, e, i) {
        "guide" == e && t._addPlugin(b)
    }
    ,
    b.step = function(t, e, i) {
        for (var s in i)
            if ("guide" === s) {
                var n = e.props.guide
                  , s = b._solveGuideData(i.guide, n)
                  , a = (n.valid = !s,
                n.endData);
                if (t._injectProp("x", a.x),
                t._injectProp("y", a.y),
                s || !n.orient)
                    break;
                s = void 0 === e.prev.props.rotation ? t.target.rotation || 0 : e.prev.props.rotation;
                if (n.startOffsetRot = s - n.startData.rotation,
                "fixed" == n.orient)
                    n.endAbsRot = a.rotation + n.startOffsetRot,
                    n.deltaRotation = 0;
                else {
                    var s = void 0 === i.rotation ? t.target.rotation || 0 : i.rotation
                      , r = s - n.endData.rotation - n.startOffsetRot
                      , o = r % 360;
                    switch (n.endAbsRot = s,
                    n.orient) {
                    case "auto":
                        n.deltaRotation = r;
                        break;
                    case "cw":
                        n.deltaRotation = (360 + o) % 360 + 360 * Math.abs(r / 360 | 0);
                        break;
                    case "ccw":
                        n.deltaRotation = (o - 360) % 360 + -360 * Math.abs(r / 360 | 0)
                    }
                }
                t._injectProp("rotation", n.endAbsRot)
            }
    }
    ,
    b.change = function(t, e, i, s, n, a) {
        var r = e.props.guide;
        if (r && e.props !== e.prev.props && r !== e.prev.props.guide)
            return "guide" === i && !r.valid || "x" == i || "y" == i || "rotation" === i && r.orient ? createjs.Tween.IGNORE : void b._ratioToPositionData(n, r, t.target)
    }
    ,
    b.debug = function(t, e, i) {
        t = t.guide || t;
        var s = b._findPathProblems(t);
        if (s && console.error("MotionGuidePlugin Error found: \n" + s),
        e) {
            var n = t.path
              , a = n.length;
            for (e.save(),
            e.lineCap = "round",
            e.lineJoin = "miter",
            e.beginPath(),
            e.moveTo(n[0], n[1]),
            l = 2; l < a; l += 4)
                e.quadraticCurveTo(n[l], n[l + 1], n[l + 2], n[l + 3]);
            e.strokeStyle = "black",
            e.lineWidth = 4.5,
            e.stroke(),
            e.strokeStyle = "white",
            e.lineWidth = 3,
            e.stroke(),
            e.closePath();
            var r = i.length;
            if (i && r) {
                var o = {}
                  , h = {};
                b._solveGuideData(t, o);
                for (var l = 0; l < r; l++)
                    o.orient = "fixed",
                    b._ratioToPositionData(i[l], o, h),
                    e.beginPath(),
                    e.moveTo(h.x, h.y),
                    e.lineTo(h.x + 9 * Math.cos(.0174533 * h.rotation), h.y + 9 * Math.sin(.0174533 * h.rotation)),
                    e.strokeStyle = "black",
                    e.lineWidth = 4.5,
                    e.stroke(),
                    e.strokeStyle = "red",
                    e.lineWidth = 3,
                    e.stroke(),
                    e.closePath()
            }
            e.restore()
        }
        return s
    }
    ,
    b._solveGuideData = function(t, e) {
        if (y = b.debug(t))
            return y;
        for (var i = e.path = t.path, s = (e.orient = t.orient,
        e.subLines = [],
        e.totalLength = 0,
        e.startOffsetRot = 0,
        e.deltaRotation = 0,
        e.startData = {
            ratio: 0
        },
        e.endData = {
            ratio: 1
        },
        e.animSpan = 1,
        i.length), n = {}, a = i[0], r = i[1], o = 2; o < s; o += 4) {
            for (var h = i[o], l = i[o + 1], c = i[o + 2], u = i[o + 3], d = {
                weightings: [],
                estLength: 0,
                portion: 0
            }, p = a, m = r, _ = 1; _ <= 10; _++) {
                b._getParamsForCurve(a, r, h, l, c, u, _ / 10, !1, n);
                var f = n.x - p
                  , g = n.y - m
                  , w = Math.sqrt(f * f + g * g);
                d.weightings.push(w),
                d.estLength += w,
                p = n.x,
                m = n.y
            }
            for (e.totalLength += d.estLength,
            _ = 0; _ < 10; _++)
                w = d.estLength,
                d.weightings[_] = d.weightings[_] / w;
            e.subLines.push(d),
            a = c,
            r = u
        }
        w = e.totalLength;
        var v = e.subLines.length;
        for (o = 0; o < v; o++)
            e.subLines[o].portion = e.subLines[o].estLength / w;
        var y = isNaN(t.start) ? 0 : t.start
          , t = isNaN(t.end) ? 1 : t.end;
        b._ratioToPositionData(y, e, e.startData),
        b._ratioToPositionData(t, e, e.endData),
        e.startData.ratio = y,
        e.endData.ratio = t,
        e.animSpan = e.endData.ratio - e.startData.ratio
    }
    ,
    b._ratioToPositionData = function(t, e, i) {
        for (var s, n = e.subLines, a = 0, r = t * e.animSpan + e.startData.ratio, o = n.length, h = 0; h < o; h++) {
            if (s = n[h].portion,
            r <= a + s) {
                u = h;
                break
            }
            a += s
        }
        void 0 === u && (u = o - 1,
        a -= s);
        var l = n[u].weightings
          , c = s;
        for (o = l.length,
        h = 0; h < o && (s = l[h] * c,
        !(r <= a + s)); h++)
            a += s;
        var u = 4 * u + 2
          , d = h / 10 + (r - a) / s * .1
          , p = e.path;
        return b._getParamsForCurve(p[u - 2], p[u - 1], p[u], p[u + 1], p[u + 2], p[u + 3], d, e.orient, i),
        e.orient && (.99999 <= t && t <= 1.00001 && void 0 !== e.endAbsRot ? i.rotation = e.endAbsRot : i.rotation += e.startOffsetRot + t * e.deltaRotation),
        i
    }
    ,
    b._getParamsForCurve = function(t, e, i, s, n, a, r, o, h) {
        var l = 1 - r;
        h.x = l * l * t + 2 * l * r * i + r * r * n,
        h.y = l * l * e + 2 * l * r * s + r * r * a,
        o && (h.rotation = 57.2957795 * Math.atan2((s - e) * l + (a - s) * r, (i - t) * l + (n - i) * r))
    }
    ,
    b._findPathProblems = function(t) {
        var e = t.path
          , i = e && e.length || 0;
        if (i < 6 || (i - 2) % 4)
            return n = "\tCannot parse 'path' array due to invalid number of entries in path. ",
            n += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ",
            n += "See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\n",
            n += "Only [ " + i + " ] values found. Expected: " + Math.max(4 * Math.ceil((i - 2) / 4) + 2, 6),
            n;
        for (var s = 0; s < i; s++)
            if (isNaN(e[s]))
                return "All data in path array must be numeric";
        var n = t.start;
        return isNaN(n) && void 0 !== n ? "'start' out of bounds. Expected 0 to 1, got: " + n : (n = t.end,
        isNaN(n) && void 0 !== n ? "'end' out of bounds. Expected 0 to 1, got: " + n : (n = t.orient,
        n && "fixed" != n && "auto" != n && "cw" != n && "ccw" != n ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + n : void 0))
    }
    ,
    createjs.MotionGuidePlugin = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    var t = createjs.TweenJS = createjs.TweenJS || {};
    t.version = "1.0.0",
    t.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
}(),
this.createjs = this.createjs || {},
!function() {
    var t = createjs.SoundJS = createjs.SoundJS || {};
    t.version = "1.0.0",
    t.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
}(),
this.createjs = this.createjs || {},
createjs.extend = function(t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }
    return i.prototype = e.prototype,
    t.prototype = new i
}
,
this.createjs = this.createjs || {},
createjs.promote = function(t, e) {
    "use strict";
    var i = t.prototype
      , s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (s)
        for (var n in i[(e += "_") + "constructor"] = s.constructor,
        s)
            i.hasOwnProperty(n) && "function" == typeof s[n] && (i[e + n] = s[n]);
    return t
}
,
this.createjs = this.createjs || {},
createjs.deprecate = function(e, i) {
    "use strict";
    return function() {
        var t = "Deprecated property or method '" + i + "'. See docs for info.";
        return console && (console.warn ? console.warn(t) : console.log(t)),
        e && e.apply(this, arguments)
    }
}
,
this.createjs = this.createjs || {},
createjs.indexOf = function(t, e) {
    "use strict";
    for (var i = 0, s = t.length; i < s; i++)
        if (e === t[i])
            return i;
    return -1
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    createjs.proxy = function(t, e) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function() {
            return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
        }
    }
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        throw "BrowserDetect cannot be instantiated"
    }
    var e = t.agent = window.navigator.userAgent;
    t.isWindowPhone = -1 < e.indexOf("IEMobile") || -1 < e.indexOf("Windows Phone"),
    t.isFirefox = -1 < e.indexOf("Firefox"),
    t.isOpera = null != window.opera,
    t.isChrome = -1 < e.indexOf("Chrome"),
    t.isIOS = (-1 < e.indexOf("iPod") || -1 < e.indexOf("iPhone") || -1 < e.indexOf("iPad")) && !t.isWindowPhone,
    t.isAndroid = -1 < e.indexOf("Android") && !t.isWindowPhone,
    t.isBlackberry = -1 < e.indexOf("Blackberry"),
    createjs.BrowserDetect = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this._listeners = null,
        this._captureListeners = null
    }
    var e = t.prototype;
    t.initialize = function(t) {
        t.addEventListener = e.addEventListener,
        t.on = e.on,
        t.removeEventListener = t.off = e.removeEventListener,
        t.removeAllEventListeners = e.removeAllEventListeners,
        t.hasEventListener = e.hasEventListener,
        t.dispatchEvent = e.dispatchEvent,
        t._dispatchEvent = e._dispatchEvent,
        t.willTrigger = e.willTrigger
    }
    ,
    e.addEventListener = function(t, e, i) {
        var s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {}
          , n = s[t];
        return n && this.removeEventListener(t, e, i),
        n = s[t],
        n ? n.push(e) : s[t] = [e],
        e
    }
    ,
    e.on = function(t, e, i, s, n, a) {
        return e.handleEvent && (i = i || e,
        e = e.handleEvent),
        i = i || this,
        this.addEventListener(t, function(t) {
            e.call(i, t, n),
            s && t.remove()
        }, a)
    }
    ,
    e.removeEventListener = function(t, e, i) {
        var s = i ? this._captureListeners : this._listeners;
        if (s) {
            var n = s[t];
            if (n)
                for (var a = 0, r = n.length; a < r; a++)
                    if (n[a] == e) {
                        1 == r ? delete s[t] : n.splice(a, 1);
                        break
                    }
        }
    }
    ,
    e.off = e.removeEventListener,
    e.removeAllEventListeners = function(t) {
        t ? (this._listeners && delete this._listeners[t],
        this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }
    ,
    e.dispatchEvent = function(t, e, i) {
        if ("string" == typeof t) {
            var s = this._listeners;
            if (!(e || s && s[t]))
                return !0;
            t = new createjs.Event(t,e,i)
        } else
            t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (t) {}
        if (t.bubbles && this.parent) {
            for (var n = this, a = [n]; n.parent; )
                a.push(n = n.parent);
            for (var r = a.length, o = r - 1; 0 <= o && !t.propagationStopped; o--)
                a[o]._dispatchEvent(t, 1 + (0 == o));
            for (o = 1; o < r && !t.propagationStopped; o++)
                a[o]._dispatchEvent(t, 3)
        } else
            this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }
    ,
    e.hasEventListener = function(t) {
        var e = this._listeners
          , i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }
    ,
    e.willTrigger = function(t) {
        for (var e = this; e; ) {
            if (e.hasEventListener(t))
                return !0;
            e = e.parent
        }
        return !1
    }
    ,
    e.toString = function() {
        return "[EventDispatcher]"
    }
    ,
    e._dispatchEvent = function(t, e) {
        var i, s = e <= 2 ? this._captureListeners : this._listeners;
        if (t && s && (n = s[t.type]) && (i = n.length)) {
            try {
                t.currentTarget = this
            } catch (t) {}
            try {
                t.eventPhase = 0 | e
            } catch (t) {}
            t.removed = !1;
            for (var n = n.slice(), a = 0; a < i && !t.immediatePropagationStopped; a++) {
                var r = n[a];
                r.handleEvent ? r.handleEvent(t) : r(t),
                t.removed && (this.off(t.type, r, 1 == e),
                t.removed = !1)
            }
        }
        2 === e && this._dispatchEvent(t, 2.1)
    }
    ,
    createjs.EventDispatcher = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.type = t,
        this.target = null,
        this.currentTarget = null,
        this.eventPhase = 0,
        this.bubbles = !!e,
        this.cancelable = !!i,
        this.timeStamp = (new Date).getTime(),
        this.defaultPrevented = !1,
        this.propagationStopped = !1,
        this.immediatePropagationStopped = !1,
        this.removed = !1
    }
    var e = t.prototype;
    e.preventDefault = function() {
        this.defaultPrevented = this.cancelable && !0
    }
    ,
    e.stopPropagation = function() {
        this.propagationStopped = !0
    }
    ,
    e.stopImmediatePropagation = function() {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }
    ,
    e.remove = function() {
        this.removed = !0
    }
    ,
    e.clone = function() {
        return new t(this.type,this.bubbles,this.cancelable)
    }
    ,
    e.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    e.toString = function() {
        return "[Event (type=" + this.type + ")]"
    }
    ,
    createjs.Event = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.Event_constructor("error"),
        this.title = t,
        this.message = e,
        this.data = i
    }
    var e = createjs.extend(t, createjs.Event);
    e.clone = function() {
        return new createjs.ErrorEvent(this.title,this.message,this.data)
    }
    ,
    createjs.ErrorEvent = createjs.promote(t, "Event")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.Event_constructor("progress"),
        this.loaded = t,
        this.total = null == e ? 1 : e,
        this.progress = 0 == e ? 0 : this.loaded / this.total
    }
    var e = createjs.extend(t, createjs.Event);
    e.clone = function() {
        return new createjs.ProgressEvent(this.loaded,this.total)
    }
    ,
    createjs.ProgressEvent = createjs.promote(t, "Event")
}(window),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function i() {
        this.src = null,
        this.type = null,
        this.id = null,
        this.maintainOrder = !1,
        this.callback = null,
        this.data = null,
        this.method = createjs.Methods.GET,
        this.values = null,
        this.headers = null,
        this.withCredentials = !1,
        this.mimeType = null,
        this.crossOrigin = null,
        this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT
    }
    var t = i.prototype = {}
      , s = i;
    s.LOAD_TIMEOUT_DEFAULT = 8e3,
    s.create = function(t) {
        var e;
        if ("string" == typeof t)
            return e = new i,
            e.src = t,
            e;
        if (t instanceof s)
            return t;
        if (t instanceof Object && t.src)
            return null == t.loadTimeout && (t.loadTimeout = s.LOAD_TIMEOUT_DEFAULT),
            t;
        throw new Error("Type not recognized.")
    }
    ,
    t.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    createjs.LoadItem = s
}(),
this.createjs = this.createjs || {},
!function() {
    var t = {
        POST: "POST",
        GET: "GET"
    };
    createjs.Methods = t
}(),
this.createjs = this.createjs || {},
!function() {
    var t = {
        BINARY: "binary",
        CSS: "css",
        FONT: "font",
        FONTCSS: "fontcss",
        IMAGE: "image",
        JAVASCRIPT: "javascript",
        JSON: "json",
        JSONP: "jsonp",
        MANIFEST: "manifest",
        SOUND: "sound",
        VIDEO: "video",
        SPRITESHEET: "spritesheet",
        SVG: "svg",
        TEXT: "text",
        XML: "xml"
    };
    createjs.Types = t
}(),
!function() {
    var t = {
        a: function() {
            return t.el("a")
        },
        svg: function() {
            return t.el("svg")
        },
        object: function() {
            return t.el("object")
        },
        image: function() {
            return t.el("image")
        },
        img: function() {
            return t.el("img")
        },
        style: function() {
            return t.el("style")
        },
        link: function() {
            return t.el("link")
        },
        script: function() {
            return t.el("script")
        },
        audio: function() {
            return t.el("audio")
        },
        video: function() {
            return t.el("video")
        },
        text: function(t) {
            return document.createTextNode(t)
        },
        el: function(t) {
            return document.createElement(t)
        }
    };
    createjs.Elements = t
}(),
!function() {
    var i = {
        container: null,
        appendToHead: function(t) {
            i.getHead().appendChild(t)
        },
        appendToBody: function(t) {
            var e;
            null == i.container && (i.container = document.createElement("div"),
            i.container.id = "preloadjs-container",
            e = i.container.style,
            e.visibility = "hidden",
            e.position = "absolute",
            e.width = i.container.style.height = "10px",
            e.overflow = "hidden",
            e.transform = e.msTransform = e.webkitTransform = e.oTransform = "translate(-10px, -10px)",
            i.getBody().appendChild(i.container)),
            i.container.appendChild(t)
        },
        getHead: function() {
            return document.head || document.getElementsByTagName("head")[0]
        },
        getBody: function() {
            return document.body || document.getElementsByTagName("body")[0]
        },
        removeChild: function(t) {
            t.parent && t.parent.removeChild(t)
        },
        isImageTag: function(t) {
            return t instanceof HTMLImageElement
        },
        isAudioTag: function(t) {
            return !!window.HTMLAudioElement && t instanceof HTMLAudioElement
        },
        isVideoTag: function(t) {
            return !!window.HTMLVideoElement && t instanceof HTMLVideoElement
        }
    };
    createjs.DomUtils = i
}(),
!function() {
    var t = {
        isBinary: function(t) {
            switch (t) {
            case createjs.Types.IMAGE:
            case createjs.Types.BINARY:
                return !0;
            default:
                return !1
            }
        },
        isText: function(t) {
            switch (t) {
            case createjs.Types.TEXT:
            case createjs.Types.JSON:
            case createjs.Types.MANIFEST:
            case createjs.Types.XML:
            case createjs.Types.CSS:
            case createjs.Types.SVG:
            case createjs.Types.JAVASCRIPT:
            case createjs.Types.SPRITESHEET:
                return !0;
            default:
                return !1
            }
        },
        getTypeByExtension: function(t) {
            if (null == t)
                return createjs.Types.TEXT;
            switch (t.toLowerCase()) {
            case "jpeg":
            case "jpg":
            case "gif":
            case "png":
            case "webp":
            case "bmp":
                return createjs.Types.IMAGE;
            case "ogg":
            case "mp3":
            case "webm":
                return createjs.Types.SOUND;
            case "mp4":
            case "webm":
            case "ts":
                return createjs.Types.VIDEO;
            case "json":
                return createjs.Types.JSON;
            case "xml":
                return createjs.Types.XML;
            case "css":
                return createjs.Types.CSS;
            case "js":
                return createjs.Types.JAVASCRIPT;
            case "svg":
                return createjs.Types.SVG;
            default:
                return createjs.Types.TEXT
            }
        }
    };
    createjs.RequestUtils = t
}(),
!function() {
    var a = {
        ABSOLUTE_PATT: /^(?:\w+:)?\/{2}/i,
        RELATIVE_PATT: /^[./]*?\//i,
        EXTENSION_PATT: /\/?[^/]+\.(\w{1,5})$/i,
        parseURI: function(t) {
            var e = {
                absolute: !1,
                relative: !1,
                protocol: null,
                hostname: null,
                port: null,
                pathname: null,
                search: null,
                hash: null,
                host: null
            };
            if (null != t) {
                var i, s = createjs.Elements.a();
                for (i in s.href = t,
                e)
                    i in s && (e[i] = s[i]);
                var n = t.indexOf("?");
                -1 < n && (t = t.substr(0, n)),
                a.ABSOLUTE_PATT.test(t) ? e.absolute = !0 : a.RELATIVE_PATT.test(t) && (e.relative = !0),
                (n = t.match(a.EXTENSION_PATT)) && (e.extension = n[1].toLowerCase())
            }
            return e
        },
        formatQueryString: function(t, e) {
            if (null == t)
                throw new Error("You must specify data.");
            var i, s = [];
            for (i in t)
                s.push(i + "=" + escape(t[i]));
            return e && (s = s.concat(e)),
            s.join("&")
        },
        buildURI: function(t, e) {
            var i, s, n;
            return null == e ? t : (n = [],
            i = t.indexOf("?"),
            -1 != i && (s = t.slice(i + 1),
            n = n.concat(s.split("&"))),
            -1 != i ? t.slice(0, i) + "?" + this.formatQueryString(e, n) : t + "?" + this.formatQueryString(e, n))
        },
        isCrossDomain: function(t) {
            var e = createjs.Elements.a()
              , t = (e.href = t.src,
            createjs.Elements.a())
              , e = (t.href = location.href,
            "" != e.hostname && (e.port != t.port || e.protocol != t.protocol || e.hostname != t.hostname));
            return e
        },
        isLocal: function(t) {
            var e = createjs.Elements.a();
            return e.href = t.src,
            "" == e.hostname && "file:" == e.protocol
        }
    };
    createjs.URLUtils = a
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.EventDispatcher_constructor(),
        this.loaded = !1,
        this.canceled = !1,
        this.progress = 0,
        this.type = i,
        this.resultFormatter = null,
        this._item = t ? createjs.LoadItem.create(t) : null,
        this._preferXHR = e,
        this._result = null,
        this._rawResult = null,
        this._loadedItems = null,
        this._tagSrcAttribute = null,
        this._tag = null
    }
    var e = createjs.extend(t, createjs.EventDispatcher)
      , i = t;
    try {
        Object.defineProperties(i, {
            POST: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.POST
                }, "AbstractLoader.POST")
            },
            GET: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.GET
                }, "AbstractLoader.GET")
            },
            BINARY: {
                get: createjs.deprecate(function() {
                    return createjs.Types.BINARY
                }, "AbstractLoader.BINARY")
            },
            CSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.CSS
                }, "AbstractLoader.CSS")
            },
            FONT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONT
                }, "AbstractLoader.FONT")
            },
            FONTCSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONTCSS
                }, "AbstractLoader.FONTCSS")
            },
            IMAGE: {
                get: createjs.deprecate(function() {
                    return createjs.Types.IMAGE
                }, "AbstractLoader.IMAGE")
            },
            JAVASCRIPT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JAVASCRIPT
                }, "AbstractLoader.JAVASCRIPT")
            },
            JSON: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSON
                }, "AbstractLoader.JSON")
            },
            JSONP: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSONP
                }, "AbstractLoader.JSONP")
            },
            MANIFEST: {
                get: createjs.deprecate(function() {
                    return createjs.Types.MANIFEST
                }, "AbstractLoader.MANIFEST")
            },
            SOUND: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SOUND
                }, "AbstractLoader.SOUND")
            },
            VIDEO: {
                get: createjs.deprecate(function() {
                    return createjs.Types.VIDEO
                }, "AbstractLoader.VIDEO")
            },
            SPRITESHEET: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SPRITESHEET
                }, "AbstractLoader.SPRITESHEET")
            },
            SVG: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SVG
                }, "AbstractLoader.SVG")
            },
            TEXT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.TEXT
                }, "AbstractLoader.TEXT")
            },
            XML: {
                get: createjs.deprecate(function() {
                    return createjs.Types.XML
                }, "AbstractLoader.XML")
            }
        })
    } catch (t) {}
    e.getItem = function() {
        return this._item
    }
    ,
    e.getResult = function(t) {
        return t ? this._rawResult : this._result
    }
    ,
    e.getTag = function() {
        return this._tag
    }
    ,
    e.setTag = function(t) {
        this._tag = t
    }
    ,
    e.load = function() {
        this._createRequest(),
        this._request.on("complete", this, this),
        this._request.on("progress", this, this),
        this._request.on("loadStart", this, this),
        this._request.on("abort", this, this),
        this._request.on("timeout", this, this),
        this._request.on("error", this, this);
        var t = new createjs.Event("initialize");
        t.loader = this._request,
        this.dispatchEvent(t),
        this._request.load()
    }
    ,
    e.cancel = function() {
        this.canceled = !0,
        this.destroy()
    }
    ,
    e.destroy = function() {
        this._request && (this._request.removeAllEventListeners(),
        this._request.destroy()),
        this._request = null,
        this._item = null,
        this._rawResult = null,
        this._result = null,
        this._loadItems = null,
        this.removeAllEventListeners()
    }
    ,
    e.getLoadedItems = function() {
        return this._loadedItems
    }
    ,
    e._createRequest = function() {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
    }
    ,
    e._createTag = function(t) {
        return null
    }
    ,
    e._sendLoadStart = function() {
        this._isCanceled() || this.dispatchEvent("loadstart")
    }
    ,
    e._sendProgress = function(t) {
        var e;
        this._isCanceled() || (e = null,
        "number" == typeof t ? (this.progress = t,
        e = new createjs.ProgressEvent(this.progress)) : (e = t,
        this.progress = t.loaded / t.total,
        e.progress = this.progress,
        !isNaN(this.progress) && Infinity != this.progress || (this.progress = 0)),
        this.hasEventListener("progress") && this.dispatchEvent(e))
    }
    ,
    e._sendComplete = function() {
        var t;
        this._isCanceled() || (this.loaded = !0,
        t = new createjs.Event("complete"),
        t.rawResult = this._rawResult,
        null != this._result && (t.result = this._result),
        this.dispatchEvent(t))
    }
    ,
    e._sendError = function(t) {
        !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),
        this.dispatchEvent(t))
    }
    ,
    e._isCanceled = function() {
        return !(null != window.createjs && !this.canceled)
    }
    ,
    e.resultFormatter = null,
    e.handleEvent = function(t) {
        switch (t.type) {
        case "complete":
            this._rawResult = t.target._response;
            var e = this.resultFormatter && this.resultFormatter(this);
            e instanceof Function ? e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = e || this._rawResult,
            this._sendComplete());
            break;
        case "progress":
            this._sendProgress(t);
            break;
        case "error":
            this._sendError(t);
            break;
        case "loadstart":
            this._sendLoadStart();
            break;
        case "abort":
        case "timeout":
            this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"))
        }
    }
    ,
    e._resultFormatSuccess = function(t) {
        this._result = t,
        this._sendComplete()
    }
    ,
    e._resultFormatFailed = function(t) {
        this._sendError(t)
    }
    ,
    e.toString = function() {
        return "[PreloadJS AbstractLoader]"
    }
    ,
    createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractLoader_constructor(t, e, i),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "src",
        this.on("initialize", this._updateXHR, this)
    }
    var e = createjs.extend(t, createjs.AbstractLoader);
    e.load = function() {
        this._tag || (this._tag = this._createTag(this._item.src)),
        this._tag.preload = "auto",
        this._tag.load(),
        this.AbstractLoader_load()
    }
    ,
    e._createTag = function() {}
    ,
    e._createRequest = function() {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
    }
    ,
    e._updateXHR = function(t) {
        t.loader.setResponseType && t.loader.setResponseType("blob")
    }
    ,
    e._formatResult = function(t) {
        var e, i;
        return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
        this._tag.onstalled = null,
        this._preferXHR && (e = window.URL || window.webkitURL,
        i = t.getResult(!0),
        t.getTag().src = e.createObjectURL(i)),
        t.getTag()
    }
    ,
    createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this._item = t
    }
    var e = createjs.extend(t, createjs.EventDispatcher);
    e.load = function() {}
    ,
    e.destroy = function() {}
    ,
    e.cancel = function() {}
    ,
    createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t),
        this._tag = e,
        this._tagSrcAttribute = i,
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this),
        this._addedToDOM = !1
    }
    var e = createjs.extend(t, createjs.AbstractRequest);
    e.load = function() {
        this._tag.onload = createjs.proxy(this._handleTagComplete, this),
        this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this),
        this._tag.onerror = createjs.proxy(this._handleError, this);
        var t = new createjs.Event("initialize");
        t.loader = this._tag,
        this.dispatchEvent(t),
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
        this._tag[this._tagSrcAttribute] = this._item.src,
        null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag),
        this._addedToDOM = !0)
    }
    ,
    e.destroy = function() {
        this._clean(),
        this._tag = null,
        this.AbstractRequest_destroy()
    }
    ,
    e._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }
    ,
    e._handleError = function() {
        this._clean(),
        this.dispatchEvent("error")
    }
    ,
    e._handleTagComplete = function() {
        this._rawResult = this._tag,
        this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult,
        this._clean(),
        this.dispatchEvent("complete")
    }
    ,
    e._handleTimeout = function() {
        this._clean(),
        this.dispatchEvent(new createjs.Event("timeout"))
    }
    ,
    e._clean = function() {
        this._tag.onload = null,
        this._tag.onreadystatechange = null,
        this._tag.onerror = null,
        this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag),
        clearTimeout(this._loadTimeout)
    }
    ,
    e._handleStalled = function() {}
    ,
    createjs.TagRequest = createjs.promote(t, "AbstractRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t),
        this._tag = e,
        this._tagSrcAttribute = i,
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }
    var e = createjs.extend(t, createjs.TagRequest);
    e.load = function() {
        var t = createjs.proxy(this._handleStalled, this)
          , e = (this._stalledCallback = t,
        createjs.proxy(this._handleProgress, this));
        this._handleProgress = e,
        this._tag.addEventListener("stalled", t),
        this._tag.addEventListener("progress", e),
        this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1),
        this.TagRequest_load()
    }
    ,
    e._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }
    ,
    e._handleStalled = function() {}
    ,
    e._handleProgress = function(t) {
        !t || 0 < t.loaded && 0 == t.total || (t = new createjs.ProgressEvent(t.loaded,t.total),
        this.dispatchEvent(t))
    }
    ,
    e._clean = function() {
        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
        this._tag.removeEventListener("stalled", this._stalledCallback),
        this._tag.removeEventListener("progress", this._progressCallback),
        this.TagRequest__clean()
    }
    ,
    createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractRequest_constructor(t),
        this._request = null,
        this._loadTimeout = null,
        this._xhrLevel = 1,
        this._response = null,
        this._rawResponse = null,
        this._canceled = !1,
        this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this),
        this._handleProgressProxy = createjs.proxy(this._handleProgress, this),
        this._handleAbortProxy = createjs.proxy(this._handleAbort, this),
        this._handleErrorProxy = createjs.proxy(this._handleError, this),
        this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this),
        this._handleLoadProxy = createjs.proxy(this._handleLoad, this),
        this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this),
        this._createXHR(t)
    }
    var e = createjs.extend(t, createjs.AbstractRequest);
    t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
    e.getResult = function(t) {
        return t && this._rawResponse ? this._rawResponse : this._response
    }
    ,
    e.cancel = function() {
        this.canceled = !0,
        this._clean(),
        this._request.abort()
    }
    ,
    e.load = function() {
        if (null == this._request)
            this._handleError();
        else {
            null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1),
            this._request.addEventListener("progress", this._handleProgressProxy, !1),
            this._request.addEventListener("abort", this._handleAbortProxy, !1),
            this._request.addEventListener("error", this._handleErrorProxy, !1),
            this._request.addEventListener("timeout", this._handleTimeoutProxy, !1),
            this._request.addEventListener("load", this._handleLoadProxy, !1),
            this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy,
            this._request.onprogress = this._handleProgressProxy,
            this._request.onabort = this._handleAbortProxy,
            this._request.onerror = this._handleErrorProxy,
            this._request.ontimeout = this._handleTimeoutProxy,
            this._request.onload = this._handleLoadProxy,
            this._request.onreadystatechange = this._handleReadyStateChangeProxy),
            1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (t) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,t))
            }
        }
    }
    ,
    e.setResponseType = function(t) {
        "blob" === t && (t = window.URL ? "blob" : "arraybuffer",
        this._responseType = t),
        this._request.responseType = t
    }
    ,
    e.getAllResponseHeaders = function() {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }
    ,
    e.getResponseHeader = function(t) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
    }
    ,
    e._handleProgress = function(t) {
        !t || 0 < t.loaded && 0 == t.total || (t = new createjs.ProgressEvent(t.loaded,t.total),
        this.dispatchEvent(t))
    }
    ,
    e._handleLoadStart = function(t) {
        clearTimeout(this._loadTimeout),
        this.dispatchEvent("loadstart")
    }
    ,
    e._handleAbort = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,t))
    }
    ,
    e._handleError = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent(t.message))
    }
    ,
    e._handleReadyStateChange = function(t) {
        4 == this._request.readyState && this._handleLoad()
    }
    ,
    e._handleLoad = function(t) {
        if (!this.loaded) {
            this.loaded = !0;
            var e = this._checkError();
            if (e)
                this._handleError(e);
            else {
                if (this._response = this._getResponse(),
                "arraybuffer" === this._responseType)
                    try {
                        this._response = new Blob([this._response])
                    } catch (t) {
                        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                        "TypeError" === t.name && window.BlobBuilder && (e = new BlobBuilder,
                        e.append(this._response),
                        this._response = e.getBlob())
                    }
                this._clean(),
                this.dispatchEvent(new createjs.Event("complete"))
            }
        }
    }
    ,
    e._handleTimeout = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,t))
    }
    ,
    e._checkError = function() {
        var t = parseInt(this._request.status);
        return 400 <= t && t <= 599 ? new Error(t) : 0 == t && /^https?:/.test(location.protocol) ? new Error(0) : null
    }
    ,
    e._getResponse = function() {
        if (null != this._response)
            return this._response;
        if (null != this._request.response)
            return this._request.response;
        try {
            if (null != this._request.responseText)
                return this._request.responseText
        } catch (t) {}
        try {
            if (null != this._request.responseXML)
                return this._request.responseXML
        } catch (t) {}
        return null
    }
    ,
    e._createXHR = function(t) {
        var e = createjs.URLUtils.isCrossDomain(t)
          , i = {}
          , n = null;
        if (window.XMLHttpRequest)
            n = new XMLHttpRequest,
            e && void 0 === n.withCredentials && window.XDomainRequest && (n = new XDomainRequest);
        else {
            for (var a = 0, r = s.ACTIVEX_VERSIONS.length; a < r; a++) {
                var o = s.ACTIVEX_VERSIONS[a];
                try {
                    n = new ActiveXObject(o);
                    break
                } catch (t) {}
            }
            if (null == n)
                return !1
        }
        null == t.mimeType && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"),
        t.mimeType && n.overrideMimeType && n.overrideMimeType(t.mimeType),
        this._xhrLevel = "string" == typeof n.responseType ? 2 : 1;
        var h = null
          , h = t.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(t.src, t.values) : t.src;
        if (n.open(t.method || createjs.Methods.GET, h, !0),
        e && n instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin),
        t.values && t.method == createjs.Methods.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"),
        e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
        t.headers)
            for (var l in t.headers)
                i[l] = t.headers[l];
        for (l in i)
            n.setRequestHeader(l, i[l]);
        return n instanceof XMLHttpRequest && void 0 !== t.withCredentials && (n.withCredentials = t.withCredentials),
        this._request = n,
        !0
    }
    ,
    e._clean = function() {
        clearTimeout(this._loadTimeout),
        null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy),
        this._request.removeEventListener("progress", this._handleProgressProxy),
        this._request.removeEventListener("abort", this._handleAbortProxy),
        this._request.removeEventListener("error", this._handleErrorProxy),
        this._request.removeEventListener("timeout", this._handleTimeoutProxy),
        this._request.removeEventListener("load", this._handleLoadProxy),
        this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null,
        this._request.onprogress = null,
        this._request.onabort = null,
        this._request.onerror = null,
        this._request.ontimeout = null,
        this._request.onload = null,
        this._request.onreadystatechange = null)
    }
    ,
    e.toString = function() {
        return "[PreloadJS XHRRequest]"
    }
    ,
    createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractMediaLoader_constructor(t, e, createjs.Types.SOUND),
        createjs.DomUtils.isAudioTag(t) || createjs.DomUtils.isAudioTag(t.src) ? this._tag = t : createjs.DomUtils.isAudioTag(t.tag) && (this._tag = createjs.DomUtils.isAudioTag(t) ? t : t.src),
        null != this._tag && (this._preferXHR = !1)
    }
    var e = createjs.extend(t, createjs.AbstractMediaLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.SOUND
    }
    ,
    e._createTag = function(t) {
        var e = createjs.Elements.audio();
        return e.autoplay = !1,
        e.preload = "none",
        e.src = t,
        e
    }
    ,
    createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this.interrupt = null,
        this.delay = null,
        this.offset = null,
        this.loop = null,
        this.volume = null,
        this.pan = null,
        this.startTime = null,
        this.duration = null
    }
    var e = t.prototype = {}
      , i = t;
    i.create = function(t) {
        if ("string" == typeof t)
            return console && (console.warn || console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."),
            (new createjs.PlayPropsConfig).set({
                interrupt: t
            });
        if (null == t || t instanceof i || t instanceof Object)
            return (new createjs.PlayPropsConfig).set(t);
        if (null == t)
            throw new Error("PlayProps configuration not recognized.")
    }
    ,
    e.set = function(t) {
        if (null != t)
            for (var e in t)
                this[e] = t[e];
        return this
    }
    ,
    e.toString = function() {
        return "[PlayPropsConfig]"
    }
    ,
    createjs.PlayPropsConfig = i
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function r() {
        throw "Sound cannot be instantiated"
    }
    var o = r;
    function h(t, e) {
        this.init(t, e)
    }
    o.INTERRUPT_ANY = "any",
    o.INTERRUPT_EARLY = "early",
    o.INTERRUPT_LATE = "late",
    o.INTERRUPT_NONE = "none",
    o.PLAY_INITED = "playInited",
    o.PLAY_SUCCEEDED = "playSucceeded",
    o.PLAY_INTERRUPTED = "playInterrupted",
    o.PLAY_FINISHED = "playFinished",
    o.PLAY_FAILED = "playFailed",
    o.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"],
    o.EXTENSION_MAP = {
        m4a: "mp4"
    },
    o.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,
    o.defaultInterruptBehavior = o.INTERRUPT_NONE,
    o.alternateExtensions = [],
    o.activePlugin = null,
    o._masterVolume = 1,
    o._getMasterVolume = function() {
        return this._masterVolume
    }
    ,
    o.getVolume = createjs.deprecate(o._getMasterVolume, "Sound.getVolume"),
    o._setMasterVolume = function(t) {
        if (null != Number(t) && (t = Math.max(0, Math.min(1, t)),
        o._masterVolume = t,
        !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t)))
            for (var e = this._instances, i = 0, s = e.length; i < s; i++)
                e[i].setMasterVolume(t)
    }
    ,
    o.setVolume = createjs.deprecate(o._setMasterVolume, "Sound.setVolume"),
    o._masterMute = !1,
    o._getMute = function() {
        return this._masterMute
    }
    ,
    o.getMute = createjs.deprecate(o._getMute, "Sound.getMute"),
    o._setMute = function(t) {
        if (null != t && (this._masterMute = t,
        !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)))
            for (var e = this._instances, i = 0, s = e.length; i < s; i++)
                e[i].setMasterMute(t)
    }
    ,
    o.setMute = createjs.deprecate(o._setMute, "Sound.setMute"),
    o._getCapabilities = function() {
        return null == o.activePlugin ? null : o.activePlugin._capabilities
    }
    ,
    o.getCapabilities = createjs.deprecate(o._getCapabilities, "Sound.getCapabilities"),
    Object.defineProperties(o, {
        volume: {
            get: o._getMasterVolume,
            set: o._setMasterVolume
        },
        muted: {
            get: o._getMute,
            set: o._setMute
        },
        capabilities: {
            get: o._getCapabilities
        }
    }),
    o._pluginsRegistered = !1,
    o._lastID = 0,
    o._instances = [],
    o._idHash = {},
    o._preloadHash = {},
    o._defaultPlayPropsHash = {},
    o.addEventListener = null,
    o.removeEventListener = null,
    o.removeAllEventListeners = null,
    o.dispatchEvent = null,
    o.hasEventListener = null,
    o._listeners = null,
    createjs.EventDispatcher.initialize(o),
    o.getPreloadHandlers = function() {
        return {
            callback: createjs.proxy(o.initLoad, o),
            types: ["sound"],
            extensions: o.SUPPORTED_EXTENSIONS
        }
    }
    ,
    o._handleLoadComplete = function(t) {
        var e = t.target.getItem().src;
        if (o._preloadHash[e])
            for (var i = 0, s = o._preloadHash[e].length; i < s; i++) {
                var n = o._preloadHash[e][i];
                o._preloadHash[e][i] = !0,
                o.hasEventListener("fileload") && (t = new createjs.Event("fileload"),
                t.src = n.src,
                t.id = n.id,
                t.data = n.data,
                t.sprite = n.sprite,
                o.dispatchEvent(t))
            }
    }
    ,
    o._handleLoadError = function(t) {
        var e = t.target.getItem().src;
        if (o._preloadHash[e])
            for (var i = 0, s = o._preloadHash[e].length; i < s; i++) {
                var n = o._preloadHash[e][i];
                o._preloadHash[e][i] = !1,
                o.hasEventListener("fileerror") && (t = new createjs.Event("fileerror"),
                t.src = n.src,
                t.id = n.id,
                t.data = n.data,
                t.sprite = n.sprite,
                o.dispatchEvent(t))
            }
    }
    ,
    o._registerPlugin = function(t) {
        return !!t.isSupported() && (o.activePlugin = new t,
        !0)
    }
    ,
    o.registerPlugins = function(t) {
        o._pluginsRegistered = !0;
        for (var e = 0, i = t.length; e < i; e++)
            if (o._registerPlugin(t[e]))
                return !0;
        return !1
    }
    ,
    o.initializeDefaultPlugins = function() {
        return null != o.activePlugin || !o._pluginsRegistered && !!o.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
    }
    ,
    o.isReady = function() {
        return null != o.activePlugin
    }
    ,
    o.initLoad = function(t) {
        return "video" == t.type || o._registerSound(t)
    }
    ,
    o._registerSound = function(t) {
        if (!o.initializeDefaultPlugins())
            return !1;
        if (t.src instanceof Object ? (i = o._parseSrc(t.src),
        i.src = t.path + i.src) : i = o._parsePath(t.src),
        null == i)
            return !1;
        t.src = i.src,
        t.type = "sound";
        var e = t.data
          , i = null;
        if (null != e && (isNaN(e.channels) ? isNaN(e) || (i = parseInt(e)) : i = parseInt(e.channels),
        e.audioSprite))
            for (var s, n = e.audioSprite.length; n--; )
                s = e.audioSprite[n],
                o._idHash[s.id] = {
                    src: t.src,
                    startTime: parseInt(s.startTime),
                    duration: parseInt(s.duration)
                },
                s.defaultPlayProps && (o._defaultPlayPropsHash[s.id] = createjs.PlayPropsConfig.create(s.defaultPlayProps));
        null != t.id && (o._idHash[t.id] = {
            src: t.src
        });
        var a = o.activePlugin.register(t);
        return h.create(t.src, i),
        null != e && isNaN(e) ? t.data.channels = i || h.maxPerChannel() : t.data = i || h.maxPerChannel(),
        a.type && (t.type = a.type),
        t.defaultPlayProps && (o._defaultPlayPropsHash[t.src] = createjs.PlayPropsConfig.create(t.defaultPlayProps)),
        a
    }
    ,
    o.registerSound = function(t, e, i, s, n) {
        i = {
            src: t,
            id: e,
            data: i,
            defaultPlayProps: n
        },
        t instanceof Object && t.src && (s = e,
        i = t),
        i = createjs.LoadItem.create(i),
        i.path = s,
        null == s || i.src instanceof Object || (i.src = s + i.src),
        n = o._registerSound(i);
        if (!n)
            return !1;
        if (o._preloadHash[i.src] || (o._preloadHash[i.src] = []),
        o._preloadHash[i.src].push(i),
        1 == o._preloadHash[i.src].length)
            n.on("complete", this._handleLoadComplete, this),
            n.on("error", this._handleLoadError, this),
            o.activePlugin.preload(n);
        else if (1 == o._preloadHash[i.src][0])
            return !0;
        return i
    }
    ,
    o.registerSounds = function(t, e) {
        var i = [];
        t.path && (e ? e += t.path : e = t.path,
        t = t.manifest);
        for (var s = 0, n = t.length; s < n; s++)
            i[s] = createjs.Sound.registerSound(t[s].src, t[s].id, t[s].data, e, t[s].defaultPlayProps);
        return i
    }
    ,
    o.removeSound = function(t, e) {
        if (null == o.activePlugin)
            return !1;
        var i, s;
        if (t instanceof Object && t.src && (t = t.src),
        i = t instanceof Object ? o._parseSrc(t) : (t = o._getSrcById(t).src,
        o._parsePath(t)),
        null == i)
            return !1;
        for (s in t = i.src,
        null != e && (t = e + t),
        o._idHash)
            o._idHash[s].src == t && delete o._idHash[s];
        return h.removeSrc(t),
        delete o._preloadHash[t],
        o.activePlugin.removeSound(t),
        !0
    }
    ,
    o.removeSounds = function(t, e) {
        var i = [];
        t.path && (e ? e += t.path : e = t.path,
        t = t.manifest);
        for (var s = 0, n = t.length; s < n; s++)
            i[s] = createjs.Sound.removeSound(t[s].src, e);
        return i
    }
    ,
    o.removeAllSounds = function() {
        o._idHash = {},
        o._preloadHash = {},
        h.removeAll(),
        o.activePlugin && o.activePlugin.removeAllSounds()
    }
    ,
    o.loadComplete = function(t) {
        var e;
        return !!o.isReady() && (e = o._parsePath(t),
        t = (e ? o._getSrcById(e.src) : o._getSrcById(t)).src,
        null != o._preloadHash[t]) && 1 == o._preloadHash[t][0]
    }
    ,
    o._parsePath = function(t) {
        "string" != typeof t && (t = t.toString());
        var e = t.match(o.FILE_PATTERN);
        if (null == e)
            return !1;
        for (var i = e[4], s = e[5], n = o.capabilities, a = 0; !n[s]; )
            if (s = o.alternateExtensions[a++],
            a > o.alternateExtensions.length)
                return null;
        t = t.replace("." + e[5], "." + s);
        e = {
            name: i,
            src: t,
            extension: s
        };
        return e
    }
    ,
    o._parseSrc = function(t) {
        var e, i, s = {
            name: void 0,
            src: void 0,
            extension: void 0
        }, n = o.capabilities;
        for (e in t)
            if (t.hasOwnProperty(e) && n[e]) {
                s.src = t[e],
                s.extension = e;
                break
            }
        return !!s.src && (i = s.src.lastIndexOf("/"),
        s.name = -1 != i ? s.src.slice(i + 1) : s.src,
        s)
    }
    ,
    o.play = function(t, e) {
        e = createjs.PlayPropsConfig.create(e),
        t = o.createInstance(t, e.startTime, e.duration),
        e = o._playInstance(t, e);
        return e || t._playFailed(),
        t
    }
    ,
    o.createInstance = function(t, e, i) {
        var s, n, a;
        return o.initializeDefaultPlugins() ? (s = o._defaultPlayPropsHash[t],
        t = o._getSrcById(t),
        n = o._parsePath(t.src),
        a = null,
        null != n && null != n.src ? (h.create(n.src),
        null == e && (e = t.startTime),
        a = o.activePlugin.create(n.src, e, i || t.duration),
        s = s || o._defaultPlayPropsHash[n.src],
        s && a.applyPlayProps(s)) : a = new createjs.DefaultSoundInstance(t,e,i),
        a.uniqueId = o._lastID++,
        a) : new createjs.DefaultSoundInstance(t,e,i)
    }
    ,
    o.stop = function() {
        for (var t = this._instances, e = t.length; e--; )
            t[e].stop()
    }
    ,
    o.setDefaultPlayProps = function(t, e) {
        t = o._getSrcById(t),
        o._defaultPlayPropsHash[o._parsePath(t.src).src] = createjs.PlayPropsConfig.create(e)
    }
    ,
    o.getDefaultPlayProps = function(t) {
        return t = o._getSrcById(t),
        o._defaultPlayPropsHash[o._parsePath(t.src).src]
    }
    ,
    o._playInstance = function(t, e) {
        var i = o._defaultPlayPropsHash[t.src] || {};
        if (null == e.interrupt && (e.interrupt = i.interrupt || o.defaultInterruptBehavior),
        null == e.delay && (e.delay = i.delay || 0),
        null == e.offset && (e.offset = t.position),
        null == e.loop && (e.loop = t.loop),
        null == e.volume && (e.volume = t.volume),
        null == e.pan && (e.pan = t.pan),
        0 == e.delay) {
            i = o._beginPlaying(t, e);
            if (!i)
                return !1
        } else {
            i = setTimeout(function() {
                o._beginPlaying(t, e)
            }, e.delay);
            t.delayTimeoutId = i
        }
        return this._instances.push(t),
        !0
    }
    ,
    o._beginPlaying = function(t, e) {
        return !!h.add(t, e.interrupt) && (e = t._beginPlaying(e),
        !!e || (e = createjs.indexOf(this._instances, t),
        -1 < e && this._instances.splice(e, 1),
        !1))
    }
    ,
    o._getSrcById = function(t) {
        return o._idHash[t] || {
            src: t
        }
    }
    ,
    o._playFinished = function(t) {
        h.remove(t);
        t = createjs.indexOf(this._instances, t);
        -1 < t && this._instances.splice(t, 1)
    }
    ,
    createjs.Sound = r,
    h.channels = {},
    h.create = function(t, e) {
        var i = h.get(t);
        return null == i && (h.channels[t] = new h(t,e),
        !0)
    }
    ,
    h.removeSrc = function(t) {
        var e = h.get(t);
        return null != e && (e._removeAll(),
        delete h.channels[t],
        !0)
    }
    ,
    h.removeAll = function() {
        for (var t in h.channels)
            h.channels[t]._removeAll();
        h.channels = {}
    }
    ,
    h.add = function(t, e) {
        var i = h.get(t.src);
        return null != i && i._add(t, e)
    }
    ,
    h.remove = function(t) {
        var e = h.get(t.src);
        return null != e && (e._remove(t),
        !0)
    }
    ,
    h.maxPerChannel = function() {
        return t.maxDefault
    }
    ,
    h.get = function(t) {
        return h.channels[t]
    }
    ;
    var t = h.prototype;
    t.constructor = h,
    t.src = null,
    t.max = null,
    t.maxDefault = 100,
    t.length = 0,
    t.init = function(t, e) {
        this.src = t,
        this.max = e || this.maxDefault,
        -1 == this.max && (this.max = this.maxDefault),
        this._instances = []
    }
    ,
    t._get = function(t) {
        return this._instances[t]
    }
    ,
    t._add = function(t, e) {
        return !!this._getSlot(e, t) && (this._instances.push(t),
        this.length++,
        !0)
    }
    ,
    t._remove = function(t) {
        t = createjs.indexOf(this._instances, t);
        return -1 != t && (this._instances.splice(t, 1),
        this.length--,
        !0)
    }
    ,
    t._removeAll = function() {
        for (var t = this.length - 1; 0 <= t; t--)
            this._instances[t].stop()
    }
    ,
    t._getSlot = function(t, e) {
        var i, s;
        if (t != r.INTERRUPT_NONE && (s = this._get(0),
        null == s))
            return !0;
        for (var n = 0, a = this.max; n < a; n++) {
            if (i = this._get(n),
            null == i)
                return !0;
            if (i.playState == r.PLAY_FINISHED || i.playState == r.PLAY_INTERRUPTED || i.playState == r.PLAY_FAILED) {
                s = i;
                break
            }
            t != r.INTERRUPT_NONE && (t == r.INTERRUPT_EARLY && i.position < s.position || t == r.INTERRUPT_LATE && i.position > s.position) && (s = i)
        }
        return null != s && (s._interrupt(),
        this._remove(s),
        !0)
    }
    ,
    t.toString = function() {
        return "[Sound SoundChannel]"
    }
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s) {
        this.EventDispatcher_constructor(),
        this.src = t,
        this.uniqueId = -1,
        this.playState = null,
        this.delayTimeoutId = null,
        this._volume = 1,
        Object.defineProperty(this, "volume", {
            get: this._getVolume,
            set: this._setVolume
        }),
        this._pan = 0,
        Object.defineProperty(this, "pan", {
            get: this._getPan,
            set: this._setPan
        }),
        this._startTime = Math.max(0, e || 0),
        Object.defineProperty(this, "startTime", {
            get: this._getStartTime,
            set: this._setStartTime
        }),
        this._duration = Math.max(0, i || 0),
        Object.defineProperty(this, "duration", {
            get: this._getDuration,
            set: this._setDuration
        }),
        this._playbackResource = null,
        Object.defineProperty(this, "playbackResource", {
            get: this._getPlaybackResource,
            set: this._setPlaybackResource
        }),
        !1 !== s && !0 !== s && this._setPlaybackResource(s),
        this._position = 0,
        Object.defineProperty(this, "position", {
            get: this._getPosition,
            set: this._setPosition
        }),
        this._loop = 0,
        Object.defineProperty(this, "loop", {
            get: this._getLoop,
            set: this._setLoop
        }),
        this._muted = !1,
        Object.defineProperty(this, "muted", {
            get: this._getMuted,
            set: this._setMuted
        }),
        this._paused = !1,
        Object.defineProperty(this, "paused", {
            get: this._getPaused,
            set: this._setPaused
        })
    }
    var e = createjs.extend(t, createjs.EventDispatcher);
    e.play = function(t) {
        t = createjs.PlayPropsConfig.create(t);
        if (this.playState != createjs.Sound.PLAY_SUCCEEDED)
            return this._cleanUp(),
            createjs.Sound._playInstance(this, t),
            this;
        this.applyPlayProps(t),
        this._paused && this._setPaused(!1)
    }
    ,
    e.stop = function() {
        return this._position = 0,
        this._paused = !1,
        this._handleStop(),
        this._cleanUp(),
        this.playState = createjs.Sound.PLAY_FINISHED,
        this
    }
    ,
    e.destroy = function() {
        this._cleanUp(),
        this.src = null,
        this.playbackResource = null,
        this.removeAllEventListeners()
    }
    ,
    e.applyPlayProps = function(t) {
        return null != t.offset && this._setPosition(t.offset),
        null != t.loop && this._setLoop(t.loop),
        null != t.volume && this._setVolume(t.volume),
        null != t.pan && this._setPan(t.pan),
        null != t.startTime && (this._setStartTime(t.startTime),
        this._setDuration(t.duration)),
        this
    }
    ,
    e.toString = function() {
        return "[AbstractSoundInstance]"
    }
    ,
    e._getPaused = function() {
        return this._paused
    }
    ,
    e._setPaused = function(t) {
        if (!(!0 !== t && !1 !== t || this._paused == t || 1 == t && this.playState != createjs.Sound.PLAY_SUCCEEDED))
            return this._paused = t,
            t ? this._pause() : this._resume(),
            clearTimeout(this.delayTimeoutId),
            this
    }
    ,
    e._setVolume = function(t) {
        return t == this._volume || (this._volume = Math.max(0, Math.min(1, t)),
        this._muted) || this._updateVolume(),
        this
    }
    ,
    e._getVolume = function() {
        return this._volume
    }
    ,
    e._setMuted = function(t) {
        if (!0 === t || !1 === t)
            return this._muted = t,
            this._updateVolume(),
            this
    }
    ,
    e._getMuted = function() {
        return this._muted
    }
    ,
    e._setPan = function(t) {
        return t != this._pan && (this._pan = Math.max(-1, Math.min(1, t)),
        this._updatePan()),
        this
    }
    ,
    e._getPan = function() {
        return this._pan
    }
    ,
    e._getPosition = function() {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()),
        this._position
    }
    ,
    e._setPosition = function(t) {
        return this._position = Math.max(0, t),
        this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(),
        this
    }
    ,
    e._getStartTime = function() {
        return this._startTime
    }
    ,
    e._setStartTime = function(t) {
        return t != this._startTime && (this._startTime = Math.max(0, t || 0),
        this._updateStartTime()),
        this
    }
    ,
    e._getDuration = function() {
        return this._duration
    }
    ,
    e._setDuration = function(t) {
        return t != this._duration && (this._duration = Math.max(0, t || 0),
        this._updateDuration()),
        this
    }
    ,
    e._setPlaybackResource = function(t) {
        return this._playbackResource = t,
        0 == this._duration && this._playbackResource && this._setDurationFromSource(),
        this
    }
    ,
    e._getPlaybackResource = function() {
        return this._playbackResource
    }
    ,
    e._getLoop = function() {
        return this._loop
    }
    ,
    e._setLoop = function(t) {
        null != this._playbackResource && (0 != this._loop && 0 == t ? this._removeLooping(t) : 0 == this._loop && 0 != t && this._addLooping(t)),
        this._loop = t
    }
    ,
    e._sendEvent = function(t) {
        t = new createjs.Event(t);
        this.dispatchEvent(t)
    }
    ,
    e._cleanUp = function() {
        clearTimeout(this.delayTimeoutId),
        this._handleCleanUp(),
        this._paused = !1,
        createjs.Sound._playFinished(this)
    }
    ,
    e._interrupt = function() {
        this._cleanUp(),
        this.playState = createjs.Sound.PLAY_INTERRUPTED,
        this._sendEvent("interrupted")
    }
    ,
    e._beginPlaying = function(t) {
        return this._setPosition(t.offset),
        this._setLoop(t.loop),
        this._setVolume(t.volume),
        this._setPan(t.pan),
        null != t.startTime && (this._setStartTime(t.startTime),
        this._setDuration(t.duration)),
        null != this._playbackResource && this._position < this._duration ? (this._paused = !1,
        this._handleSoundReady(),
        this.playState = createjs.Sound.PLAY_SUCCEEDED,
        this._sendEvent("succeeded"),
        !0) : (this._playFailed(),
        !1)
    }
    ,
    e._playFailed = function() {
        this._cleanUp(),
        this.playState = createjs.Sound.PLAY_FAILED,
        this._sendEvent("failed")
    }
    ,
    e._handleSoundComplete = function(t) {
        this._position = 0,
        0 != this._loop ? (this._loop--,
        this._handleLoop(),
        this._sendEvent("loop")) : (this._cleanUp(),
        this.playState = createjs.Sound.PLAY_FINISHED,
        this._sendEvent("complete"))
    }
    ,
    e._handleSoundReady = function() {}
    ,
    e._updateVolume = function() {}
    ,
    e._updatePan = function() {}
    ,
    e._updateStartTime = function() {}
    ,
    e._updateDuration = function() {}
    ,
    e._setDurationFromSource = function() {}
    ,
    e._calculateCurrentPosition = function() {}
    ,
    e._updatePosition = function() {}
    ,
    e._removeLooping = function(t) {}
    ,
    e._addLooping = function(t) {}
    ,
    e._pause = function() {}
    ,
    e._resume = function() {}
    ,
    e._handleStop = function() {}
    ,
    e._handleCleanUp = function() {}
    ,
    e._handleLoop = function() {}
    ,
    createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher"),
    createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this._capabilities = null,
        this._loaders = {},
        this._audioSources = {},
        this._soundInstances = {},
        this._volume = 1,
        this._loaderClass,
        this._soundInstanceClass
    }
    var e = t.prototype;
    t._capabilities = null,
    t.isSupported = function() {
        return !0
    }
    ,
    e.register = function(t) {
        var e = this._loaders[t.src];
        return e && !e.canceled ? this._loaders[t.src] : (this._audioSources[t.src] = !0,
        this._soundInstances[t.src] = [],
        e = new this._loaderClass(t),
        e.on("complete", this._handlePreloadComplete, this),
        this._loaders[t.src] = e,
        e)
    }
    ,
    e.preload = function(t) {
        t.on("error", this._handlePreloadError, this),
        t.load()
    }
    ,
    e.isPreloadStarted = function(t) {
        return null != this._audioSources[t]
    }
    ,
    e.isPreloadComplete = function(t) {
        return !(null == this._audioSources[t] || 1 == this._audioSources[t])
    }
    ,
    e.removeSound = function(t) {
        if (this._soundInstances[t]) {
            for (var e = this._soundInstances[t].length; e--; ) {
                var i = this._soundInstances[t][e];
                i.destroy()
            }
            delete this._soundInstances[t],
            delete this._audioSources[t],
            this._loaders[t] && this._loaders[t].destroy(),
            delete this._loaders[t]
        }
    }
    ,
    e.removeAllSounds = function() {
        for (var t in this._audioSources)
            this.removeSound(t)
    }
    ,
    e.create = function(t, e, i) {
        this.isPreloadStarted(t) || this.preload(this.register(t));
        e = new this._soundInstanceClass(t,e,i,this._audioSources[t]);
        return this._soundInstances[t] && this._soundInstances[t].push(e),
        e.setMasterVolume && e.setMasterVolume(createjs.Sound.volume),
        e.setMasterMute && e.setMasterMute(createjs.Sound.muted),
        e
    }
    ,
    e.setVolume = function(t) {
        return this._volume = t,
        this._updateVolume(),
        !0
    }
    ,
    e.getVolume = function() {
        return this._volume
    }
    ,
    e.setMute = function(t) {
        return this._updateVolume(),
        !0
    }
    ,
    e.toString = function() {
        return "[AbstractPlugin]"
    }
    ,
    e._handlePreloadComplete = function(t) {
        var e = t.target.getItem().src;
        this._audioSources[e] = t.result;
        for (var i = 0, s = this._soundInstances[e].length; i < s; i++) {
            var n = this._soundInstances[e][i];
            n.setPlaybackResource(this._audioSources[e]),
            this._soundInstances[e] = null
        }
    }
    ,
    e._handlePreloadError = function(t) {}
    ,
    e._updateVolume = function() {}
    ,
    createjs.AbstractPlugin = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function e(t) {
        this.AbstractLoader_constructor(t, !0, createjs.Types.SOUND)
    }
    var t = createjs.extend(e, createjs.AbstractLoader);
    e.context = null,
    t.toString = function() {
        return "[WebAudioLoader]"
    }
    ,
    t._createRequest = function() {
        this._request = new createjs.XHRRequest(this._item,!1),
        this._request.setResponseType("arraybuffer")
    }
    ,
    t._sendComplete = function(t) {
        e.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
    }
    ,
    t._handleAudioDecoded = function(t) {
        this._result = t,
        this.AbstractLoader__sendComplete()
    }
    ,
    createjs.WebAudioLoader = createjs.promote(e, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s) {
        this.AbstractSoundInstance_constructor(t, e, i, s),
        this.gainNode = n.context.createGain(),
        this.panNode = n.context.createPanner(),
        this.panNode.panningModel = n._panningModel,
        this.panNode.connect(this.gainNode),
        this._updatePan(),
        this.sourceNode = null,
        this._soundCompleteTimeout = null,
        this._sourceNodeNext = null,
        this._playbackStartTime = 0,
        this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
    }
    var e = createjs.extend(t, createjs.AbstractSoundInstance)
      , n = t;
    n.context = null,
    n._scratchBuffer = null,
    n.destinationNode = null,
    n._panningModel = "equalpower",
    e.destroy = function() {
        this.AbstractSoundInstance_destroy(),
        this.panNode.disconnect(0),
        this.panNode = null,
        this.gainNode.disconnect(0),
        this.gainNode = null
    }
    ,
    e.toString = function() {
        return "[WebAudioSoundInstance]"
    }
    ,
    e._updatePan = function() {
        this.panNode.setPosition(this._pan, 0, -.5)
    }
    ,
    e._removeLooping = function(t) {
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
    }
    ,
    e._addLooping = function(t) {
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }
    ,
    e._setDurationFromSource = function() {
        this._duration = 1e3 * this.playbackResource.duration
    }
    ,
    e._handleCleanUp = function() {
        this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode),
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)),
        0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
        clearTimeout(this._soundCompleteTimeout),
        this._playbackStartTime = 0
    }
    ,
    e._cleanUpAudioNode = function(t) {
        if (t) {
            try {
                t.stop(0),
                t.disconnect(0)
            } catch (t) {}
            if (createjs.BrowserDetect.isIOS)
                try {
                    t.buffer = n._scratchBuffer
                } catch (t) {}
            t = null
        }
        return t
    }
    ,
    e._handleSoundReady = function(t) {
        this.gainNode.connect(n.destinationNode);
        var e = .001 * this._duration
          , i = Math.min(.001 * Math.max(0, this._position), e);
        this.sourceNode = this._createAndPlayAudioNode(n.context.currentTime - e, i),
        this._playbackStartTime = this.sourceNode.startTime - i,
        this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (e - i)),
        0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }
    ,
    e._createAndPlayAudioNode = function(t, e) {
        var i = n.context.createBufferSource()
          , s = (i.buffer = this.playbackResource,
        i.connect(this.panNode),
        .001 * this._duration);
        i.startTime = t + s;
        try {
            i.start(i.startTime, e + .001 * this._startTime, s - e)
        } catch (t) {}
        return i
    }
    ,
    e._pause = function() {
        this._position = 1e3 * (n.context.currentTime - this._playbackStartTime),
        this.sourceNode = this._cleanUpAudioNode(this.sourceNode),
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext),
        0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
        clearTimeout(this._soundCompleteTimeout)
    }
    ,
    e._resume = function() {
        this._handleSoundReady()
    }
    ,
    e._updateVolume = function() {
        var t = this._muted ? 0 : this._volume;
        t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
    }
    ,
    e._calculateCurrentPosition = function() {
        return 1e3 * (n.context.currentTime - this._playbackStartTime)
    }
    ,
    e._updatePosition = function() {
        this.sourceNode = this._cleanUpAudioNode(this.sourceNode),
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext),
        clearTimeout(this._soundCompleteTimeout),
        this._paused || this._handleSoundReady()
    }
    ,
    e._handleLoop = function() {
        this._cleanUpAudioNode(this.sourceNode),
        this.sourceNode = this._sourceNodeNext,
        this._playbackStartTime = this.sourceNode.startTime,
        this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0),
        this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
    }
    ,
    e._updateDuration = function() {
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(),
        this._resume())
    }
    ,
    createjs.WebAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this.AbstractPlugin_constructor(),
        this._panningModel = o._panningModel,
        this.context = o.context,
        this.dynamicsCompressorNode = this.context.createDynamicsCompressor(),
        this.dynamicsCompressorNode.connect(this.context.destination),
        this.gainNode = this.context.createGain(),
        this.gainNode.connect(this.dynamicsCompressorNode),
        createjs.WebAudioSoundInstance.destinationNode = this.gainNode,
        this._capabilities = o._capabilities,
        this._loaderClass = createjs.WebAudioLoader,
        this._soundInstanceClass = createjs.WebAudioSoundInstance,
        this._addPropsToClasses()
    }
    var e = createjs.extend(t, createjs.AbstractPlugin)
      , o = t;
    o._capabilities = null,
    o._panningModel = "equalpower",
    o.context = null,
    o._scratchBuffer = null,
    o._unlocked = !1,
    o.DEFAULT_SAMPLE_RATE = 44100,
    o.isSupported = function() {
        var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
        return !("file:" == location.protocol && !t && !this._isFileXHRSupported()) && (o._generateCapabilities(),
        null != o.context)
    }
    ,
    o.playEmptySound = function() {
        var t;
        null != o.context && (t = o.context.createBufferSource(),
        t.buffer = o._scratchBuffer,
        t.connect(o.context.destination),
        t.start(0, 0, 0))
    }
    ,
    o._isFileXHRSupported = function() {
        var e = !0
          , t = new XMLHttpRequest;
        try {
            t.open("GET", "WebAudioPluginTest.fail", !1)
        } catch (t) {
            return e = !1,
            e
        }
        t.onerror = function() {
            e = !1
        }
        ,
        t.onload = function() {
            e = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
        }
        ;
        try {
            t.send()
        } catch (t) {
            e = !1
        }
        return e
    }
    ,
    o._generateCapabilities = function() {
        if (null == o._capabilities) {
            var t = document.createElement("audio");
            if (null == t.canPlayType)
                return null;
            if (null == o.context && (o.context = o._createAudioContext(),
            null == o.context))
                return null;
            null == o._scratchBuffer && (o._scratchBuffer = o.context.createBuffer(1, 1, 22050)),
            o._compatibilitySetUp(),
            "ontouchstart"in window && "running" != o.context.state && (o._unlock(),
            document.addEventListener("mousedown", o._unlock, !0),
            document.addEventListener("touchstart", o._unlock, !0),
            document.addEventListener("touchend", o._unlock, !0)),
            o._capabilities = {
                panning: !0,
                volume: !0,
                tracks: -1
            };
            for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, s = 0, n = e.length; s < n; s++) {
                var a = e[s]
                  , r = i[a] || a;
                o._capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + r) && "" != t.canPlayType("audio/" + r)
            }
            o.context.destination.numberOfChannels < 2 && (o._capabilities.panning = !1)
        }
    }
    ,
    o._createAudioContext = function() {
        var t, e, i, s = window.AudioContext || window.webkitAudioContext;
        return null == s ? null : (t = new s,
        /(iPhone|iPad)/i.test(navigator.userAgent) && t.sampleRate !== o.DEFAULT_SAMPLE_RATE && (e = t.createBuffer(1, 1, o.DEFAULT_SAMPLE_RATE),
        i = t.createBufferSource(),
        i.buffer = e,
        i.connect(t.destination),
        i.start(0),
        i.disconnect(),
        t.close(),
        t = new s),
        t)
    }
    ,
    o._compatibilitySetUp = function() {
        var t;
        o._panningModel = "equalpower",
        o.context.createGain || (o.context.createGain = o.context.createGainNode,
        t = o.context.createBufferSource(),
        t.__proto__.start = t.__proto__.noteGrainOn,
        t.__proto__.stop = t.__proto__.noteOff,
        o._panningModel = 0)
    }
    ,
    o._unlock = function() {
        o._unlocked || (o.playEmptySound(),
        "running" == o.context.state && (document.removeEventListener("mousedown", o._unlock, !0),
        document.removeEventListener("touchend", o._unlock, !0),
        document.removeEventListener("touchstart", o._unlock, !0),
        o._unlocked = !0))
    }
    ,
    e.toString = function() {
        return "[WebAudioPlugin]"
    }
    ,
    e._addPropsToClasses = function() {
        var t = this._soundInstanceClass;
        t.context = this.context,
        t._scratchBuffer = o._scratchBuffer,
        t.destinationNode = this.gainNode,
        t._panningModel = this._panningModel,
        this._loaderClass.context = this.context
    }
    ,
    e._updateVolume = function() {
        var t = createjs.Sound._masterMute ? 0 : this._volume;
        t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
    }
    ,
    createjs.WebAudioPlugin = createjs.promote(t, "AbstractPlugin")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        throw "HTMLAudioTagPool cannot be instantiated"
    }
    var i = t;
    function e(t) {
        this._tags = []
    }
    i._tags = {},
    i._tagPool = new e,
    i._tagUsed = {},
    i.get = function(t) {
        var e = i._tags[t];
        return null == e ? (e = i._tags[t] = i._tagPool.get(),
        e.src = t) : i._tagUsed[t] ? (e = i._tagPool.get(),
        e.src = t) : i._tagUsed[t] = !0,
        e
    }
    ,
    i.set = function(t, e) {
        e == i._tags[t] ? i._tagUsed[t] = !1 : i._tagPool.set(e)
    }
    ,
    i.remove = function(t) {
        var e = i._tags[t];
        return null != e && (i._tagPool.set(e),
        delete i._tags[t],
        delete i._tagUsed[t],
        !0)
    }
    ,
    i.getDuration = function(t) {
        t = i._tags[t];
        return null != t && t.duration ? 1e3 * t.duration : 0
    }
    ,
    createjs.HTMLAudioTagPool = t;
    var s = e.prototype;
    s.constructor = e,
    s.get = function() {
        var t = 0 == this._tags.length ? this._createTag() : this._tags.pop();
        return null == t.parentNode && document.body.appendChild(t),
        t
    }
    ,
    s.set = function(t) {
        var e = createjs.indexOf(this._tags, t);
        -1 == e && (this._tags.src = null,
        this._tags.push(t))
    }
    ,
    s.toString = function() {
        return "[TagPool]"
    }
    ,
    s._createTag = function() {
        var t = document.createElement("audio");
        return t.autoplay = !1,
        t.preload = "none",
        t
    }
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i, s) {
        this.AbstractSoundInstance_constructor(t, e, i, s),
        this._audioSpriteStopTime = null,
        this._delayTimeoutId = null,
        this._endedHandler = createjs.proxy(this._handleSoundComplete, this),
        this._readyHandler = createjs.proxy(this._handleTagReady, this),
        this._stalledHandler = createjs.proxy(this._playFailed, this),
        this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this),
        this._loopHandler = createjs.proxy(this._handleSoundComplete, this),
        i ? this._audioSpriteStopTime = .001 * (e + i) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
    }
    var e = createjs.extend(t, createjs.AbstractSoundInstance);
    e.setMasterVolume = function(t) {
        this._updateVolume()
    }
    ,
    e.setMasterMute = function(t) {
        this._updateVolume()
    }
    ,
    e.toString = function() {
        return "[HTMLAudioSoundInstance]"
    }
    ,
    e._removeLooping = function() {
        null != this._playbackResource && (this._playbackResource.loop = !1,
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }
    ,
    e._addLooping = function() {
        null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1),
        this._playbackResource.loop = !0)
    }
    ,
    e._handleCleanUp = function() {
        var t = this._playbackResource;
        if (null != t) {
            t.pause(),
            t.loop = !1,
            t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1),
            t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1),
            t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1),
            t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1),
            t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
            try {
                t.currentTime = this._startTime
            } catch (t) {}
            createjs.HTMLAudioTagPool.set(this.src, t),
            this._playbackResource = null
        }
    }
    ,
    e._beginPlaying = function(t) {
        return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src),
        this.AbstractSoundInstance__beginPlaying(t)
    }
    ,
    e._handleSoundReady = function(t) {
        var e;
        4 !== this._playbackResource.readyState ? (e = this._playbackResource,
        e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1),
        e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1),
        e.preload = "auto",
        e.load()) : (this._updateVolume(),
        this._playbackResource.currentTime = .001 * (this._startTime + this._position),
        this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1),
        0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1),
        this._playbackResource.loop = !0)),
        this._playbackResource.play())
    }
    ,
    e._handleTagReady = function(t) {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1),
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1),
        this._handleSoundReady()
    }
    ,
    e._pause = function() {
        this._playbackResource.pause()
    }
    ,
    e._resume = function() {
        this._playbackResource.play()
    }
    ,
    e._updateVolume = function() {
        var t;
        null != this._playbackResource && (t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume,
        t != this._playbackResource.volume) && (this._playbackResource.volume = t)
    }
    ,
    e._calculateCurrentPosition = function() {
        return 1e3 * this._playbackResource.currentTime - this._startTime
    }
    ,
    e._updatePosition = function() {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1),
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
        try {
            this._playbackResource.currentTime = .001 * (this._position + this._startTime)
        } catch (t) {
            this._handleSetPositionSeek(null)
        }
    }
    ,
    e._handleSetPositionSeek = function(t) {
        null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1),
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }
    ,
    e._handleAudioSpriteLoop = function(t) {
        this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(),
        0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0,
        this._loop--,
        this._playbackResource.currentTime = .001 * this._startTime,
        this._paused || this._playbackResource.play(),
        this._sendEvent("loop")))
    }
    ,
    e._handleLoop = function(t) {
        0 == this._loop && (this._playbackResource.loop = !1,
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }
    ,
    e._updateStartTime = function() {
        this._audioSpriteStopTime = .001 * (this._startTime + this._duration),
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1),
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    }
    ,
    e._updateDuration = function() {
        this._audioSpriteStopTime = .001 * (this._startTime + this._duration),
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1),
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    }
    ,
    e._setDurationFromSource = function() {
        this._duration = createjs.HTMLAudioTagPool.getDuration(this.src),
        this._playbackResource = null
    }
    ,
    createjs.HTMLAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this.AbstractPlugin_constructor(),
        this._capabilities = o._capabilities,
        this._loaderClass = createjs.SoundLoader,
        this._soundInstanceClass = createjs.HTMLAudioSoundInstance
    }
    var e = createjs.extend(t, createjs.AbstractPlugin)
      , o = t;
    o.MAX_INSTANCES = 30,
    o._AUDIO_READY = "canplaythrough",
    o._AUDIO_ENDED = "ended",
    o._AUDIO_SEEKED = "seeked",
    o._AUDIO_STALLED = "stalled",
    o._TIME_UPDATE = "timeupdate",
    o._capabilities = null,
    o.isSupported = function() {
        return o._generateCapabilities(),
        null != o._capabilities
    }
    ,
    o._generateCapabilities = function() {
        if (null == o._capabilities) {
            var t = document.createElement("audio");
            if (null == t.canPlayType)
                return null;
            o._capabilities = {
                panning: !1,
                volume: !0,
                tracks: -1
            };
            for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, s = 0, n = e.length; s < n; s++) {
                var a = e[s]
                  , r = i[a] || a;
                o._capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + r) && "" != t.canPlayType("audio/" + r)
            }
        }
    }
    ,
    e.register = function(t) {
        var e = createjs.HTMLAudioTagPool.get(t.src)
          , t = this.AbstractPlugin_register(t);
        return t.setTag(e),
        t
    }
    ,
    e.removeSound = function(t) {
        this.AbstractPlugin_removeSound(t),
        createjs.HTMLAudioTagPool.remove(t)
    }
    ,
    e.create = function(t, e, i) {
        t = this.AbstractPlugin_create(t, e, i);
        return t.playbackResource = null,
        t
    }
    ,
    e.toString = function() {
        return "[HTMLAudioPlugin]"
    }
    ,
    e.setVolume = e.getVolume = e.setMute = null,
    createjs.HTMLAudioPlugin = createjs.promote(t, "AbstractPlugin")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    var t = createjs.PreloadJS = createjs.PreloadJS || {};
    t.version = "1.0.0",
    t.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
}(),
this.createjs = this.createjs || {},
createjs.extend = function(t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }
    return i.prototype = e.prototype,
    t.prototype = new i
}
,
this.createjs = this.createjs || {},
createjs.promote = function(t, e) {
    "use strict";
    var i = t.prototype
      , s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (s)
        for (var n in i[(e += "_") + "constructor"] = s.constructor,
        s)
            i.hasOwnProperty(n) && "function" == typeof s[n] && (i[e + n] = s[n]);
    return t
}
,
this.createjs = this.createjs || {},
createjs.deprecate = function(e, i) {
    "use strict";
    return function() {
        var t = "Deprecated property or method '" + i + "'. See docs for info.";
        return console && (console.warn ? console.warn(t) : console.log(t)),
        e && e.apply(this, arguments)
    }
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    createjs.proxy = function(t, e) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function() {
            return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
        }
    }
}(),
this.createjs = this.createjs || {},
createjs.indexOf = function(t, e) {
    "use strict";
    for (var i = 0, s = t.length; i < s; i++)
        if (e === t[i])
            return i;
    return -1
}
,
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.type = t,
        this.target = null,
        this.currentTarget = null,
        this.eventPhase = 0,
        this.bubbles = !!e,
        this.cancelable = !!i,
        this.timeStamp = (new Date).getTime(),
        this.defaultPrevented = !1,
        this.propagationStopped = !1,
        this.immediatePropagationStopped = !1,
        this.removed = !1
    }
    var e = t.prototype;
    e.preventDefault = function() {
        this.defaultPrevented = this.cancelable && !0
    }
    ,
    e.stopPropagation = function() {
        this.propagationStopped = !0
    }
    ,
    e.stopImmediatePropagation = function() {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }
    ,
    e.remove = function() {
        this.removed = !0
    }
    ,
    e.clone = function() {
        return new t(this.type,this.bubbles,this.cancelable)
    }
    ,
    e.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    e.toString = function() {
        return "[Event (type=" + this.type + ")]"
    }
    ,
    createjs.Event = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.Event_constructor("error"),
        this.title = t,
        this.message = e,
        this.data = i
    }
    var e = createjs.extend(t, createjs.Event);
    e.clone = function() {
        return new createjs.ErrorEvent(this.title,this.message,this.data)
    }
    ,
    createjs.ErrorEvent = createjs.promote(t, "Event")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t() {
        this._listeners = null,
        this._captureListeners = null
    }
    var e = t.prototype;
    t.initialize = function(t) {
        t.addEventListener = e.addEventListener,
        t.on = e.on,
        t.removeEventListener = t.off = e.removeEventListener,
        t.removeAllEventListeners = e.removeAllEventListeners,
        t.hasEventListener = e.hasEventListener,
        t.dispatchEvent = e.dispatchEvent,
        t._dispatchEvent = e._dispatchEvent,
        t.willTrigger = e.willTrigger
    }
    ,
    e.addEventListener = function(t, e, i) {
        var s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {}
          , n = s[t];
        return n && this.removeEventListener(t, e, i),
        n = s[t],
        n ? n.push(e) : s[t] = [e],
        e
    }
    ,
    e.on = function(t, e, i, s, n, a) {
        return e.handleEvent && (i = i || e,
        e = e.handleEvent),
        i = i || this,
        this.addEventListener(t, function(t) {
            e.call(i, t, n),
            s && t.remove()
        }, a)
    }
    ,
    e.removeEventListener = function(t, e, i) {
        var s = i ? this._captureListeners : this._listeners;
        if (s) {
            var n = s[t];
            if (n)
                for (var a = 0, r = n.length; a < r; a++)
                    if (n[a] == e) {
                        1 == r ? delete s[t] : n.splice(a, 1);
                        break
                    }
        }
    }
    ,
    e.off = e.removeEventListener,
    e.removeAllEventListeners = function(t) {
        t ? (this._listeners && delete this._listeners[t],
        this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }
    ,
    e.dispatchEvent = function(t, e, i) {
        if ("string" == typeof t) {
            var s = this._listeners;
            if (!(e || s && s[t]))
                return !0;
            t = new createjs.Event(t,e,i)
        } else
            t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (t) {}
        if (t.bubbles && this.parent) {
            for (var n = this, a = [n]; n.parent; )
                a.push(n = n.parent);
            for (var r = a.length, o = r - 1; 0 <= o && !t.propagationStopped; o--)
                a[o]._dispatchEvent(t, 1 + (0 == o));
            for (o = 1; o < r && !t.propagationStopped; o++)
                a[o]._dispatchEvent(t, 3)
        } else
            this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }
    ,
    e.hasEventListener = function(t) {
        var e = this._listeners
          , i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }
    ,
    e.willTrigger = function(t) {
        for (var e = this; e; ) {
            if (e.hasEventListener(t))
                return !0;
            e = e.parent
        }
        return !1
    }
    ,
    e.toString = function() {
        return "[EventDispatcher]"
    }
    ,
    e._dispatchEvent = function(t, e) {
        var i, s = e <= 2 ? this._captureListeners : this._listeners;
        if (t && s && (n = s[t.type]) && (i = n.length)) {
            try {
                t.currentTarget = this
            } catch (t) {}
            try {
                t.eventPhase = 0 | e
            } catch (t) {}
            t.removed = !1;
            for (var n = n.slice(), a = 0; a < i && !t.immediatePropagationStopped; a++) {
                var r = n[a];
                r.handleEvent ? r.handleEvent(t) : r(t),
                t.removed && (this.off(t.type, r, 1 == e),
                t.removed = !1)
            }
        }
        2 === e && this._dispatchEvent(t, 2.1)
    }
    ,
    createjs.EventDispatcher = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.Event_constructor("progress"),
        this.loaded = t,
        this.total = null == e ? 1 : e,
        this.progress = 0 == e ? 0 : this.loaded / this.total
    }
    var e = createjs.extend(t, createjs.Event);
    e.clone = function() {
        return new createjs.ProgressEvent(this.loaded,this.total)
    }
    ,
    createjs.ProgressEvent = createjs.promote(t, "Event")
}(window),
!function() {
    var t, e, i, s, n = "function" == typeof define && define.amd, F = {
        function: !0,
        object: !0
    }, a = F[typeof exports] && exports && !exports.nodeType && exports, N = F[typeof window] && window || this, r = a && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    function H(t, o) {
        t = t || N.Object(),
        o = o || N.Object();
        var b, T, S, c, E, x, C, h, A, i, L, l, s, R, u, B, P, d, p, m, _, f, n, a, r, g, w = t.Number || N.Number, v = t.String || N.String, e = t.Object || N.Object, y = t.Date || N.Date, j = t.SyntaxError || N.SyntaxError, M = t.TypeError || N.TypeError, I = t.Math || N.Math, t = t.JSON || N.JSON, t = ("object" == typeof t && t && (o.stringify = t.stringify,
        o.parse = t.parse),
        e.prototype), D = t.toString, k = new y(-0xc782b5b800cec);
        try {
            k = -109252 == k.getUTCFullYear() && 0 === k.getUTCMonth() && 1 === k.getUTCDate() && 10 == k.getUTCHours() && 37 == k.getUTCMinutes() && 6 == k.getUTCSeconds() && 708 == k.getUTCMilliseconds()
        } catch (t) {}
        function O(t) {
            if (O[t] !== S)
                return O[t];
            var e;
            if ("bug-string-char-index" == t)
                e = "a" != "a"[0];
            else if ("json" == t)
                e = O("json-stringify") && O("json-parse");
            else {
                var i = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == t) {
                    var s = o.stringify
                      , n = "function" == typeof s && k;
                    if (n) {
                        (a = function() {
                            return 1
                        }
                        ).toJSON = a;
                        try {
                            n = "0" === s(0) && "0" === s(new w) && '""' == s(new v) && s(D) === S && s(S) === S && s() === S && "1" === s(a) && "[1]" == s([a]) && "[null]" == s([S]) && "null" == s(null) && "[null,null,null]" == s([S, D, null]) && s({
                                a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                            }) == i && "1" === s(null, a) && "[\n 1,\n 2\n]" == s([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == s(new y(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == s(new y(864e13)) && '"-000001-01-01T00:00:00.000Z"' == s(new y(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == s(new y(-1))
                        } catch (t) {
                            n = !1
                        }
                    }
                    e = n
                }
                if ("json-parse" == t) {
                    s = o.parse;
                    if ("function" == typeof s)
                        try {
                            if (0 === s("0") && !s(!1)) {
                                var a = s(i)
                                  , r = 5 == a.a.length && 1 === a.a[0];
                                if (r) {
                                    try {
                                        r = !s('"\t"')
                                    } catch (t) {}
                                    if (r)
                                        try {
                                            r = 1 !== s("01")
                                        } catch (t) {}
                                    if (r)
                                        try {
                                            r = 1 !== s("1.")
                                        } catch (t) {}
                                }
                            }
                        } catch (t) {
                            r = !1
                        }
                    e = r
                }
            }
            return O[t] = !!e
        }
        return O("json") || (c = "[object Function]",
        E = "[object Number]",
        x = "[object String]",
        C = "[object Array]",
        h = O("bug-string-char-index"),
        k || (A = I.floor,
        i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        L = function(t, e) {
            return i[e] + 365 * (t - 1970) + A((t - 1969 + (e = +(1 < e))) / 4) - A((t - 1901 + e) / 100) + A((t - 1601 + e) / 400)
        }
        ),
        b = (b = t.hasOwnProperty) || function(t) {
            var i, e = {
                __proto__: null
            };
            return e.__proto__ = {
                toString: 1
            },
            b = e.toString != D ? function(t) {
                var e = this.__proto__
                  , t = t in (this.__proto__ = null,
                this);
                return this.__proto__ = e,
                t
            }
            : (i = e.constructor,
            function(t) {
                var e = (this.constructor || i).prototype;
                return t in this && !(t in e && this[t] === e[t])
            }
            ),
            e = null,
            b.call(this, t)
        }
        ,
        T = function(t, e) {
            var i, r, s, n = 0;
            for (s in (i = function() {
                this.valueOf = 0
            }
            ).prototype.valueOf = 0,
            r = new i,
            r)
                b.call(r, s) && n++;
            return r = null,
            T = n ? 2 == n ? function(t, e) {
                var i, s = {}, n = D.call(t) == c;
                for (i in t)
                    n && "prototype" == i || b.call(s, i) || (s[i] = 1,
                    !b.call(t, i)) || e(i)
            }
            : function(t, e) {
                var i, s, n = D.call(t) == c;
                for (i in t)
                    n && "prototype" == i || !b.call(t, i) || (s = "constructor" === i) || e(i);
                (s || b.call(t, i = "constructor")) && e(i)
            }
            : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
            function(t, e) {
                var i, s, n = D.call(t) == c, a = !n && "function" != typeof t.constructor && F[typeof t.hasOwnProperty] && t.hasOwnProperty || b;
                for (i in t)
                    n && "prototype" == i || !a.call(t, i) || e(i);
                for (s = r.length; i = r[--s]; a.call(t, i) && e(i))
                    ;
            }
            ),
            T(t, e)
        }
        ,
        O("json-stringify") || (l = {
            92: "\\\\",
            34: '\\"',
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
        },
        s = "000000",
        R = function(t, e) {
            return (s + (e || 0)).slice(-t)
        }
        ,
        u = "\\u00",
        B = function(t) {
            for (var e = '"', i = 0, s = t.length, n = !h || 10 < s, a = n && (h ? t.split("") : t); i < s; i++) {
                var r = t.charCodeAt(i);
                switch (r) {
                case 8:
                case 9:
                case 10:
                case 12:
                case 13:
                case 34:
                case 92:
                    e += l[r];
                    break;
                default:
                    r < 32 ? e += u + R(2, r.toString(16)) : e += n ? a[i] : t.charAt(i)
                }
            }
            return e + '"'
        }
        ,
        P = function(t, e, i, s, n, a, r) {
            var o, h, l, c, u, d, p, m, _, f, g, w, v, y;
            try {
                o = e[t]
            } catch (t) {}
            if ("object" == typeof o && o)
                if (h = D.call(o),
                "[object Date]" != h || b.call(o, "toJSON"))
                    "function" == typeof o.toJSON && (h != E && h != x && h != C || b.call(o, "toJSON")) && (o = o.toJSON(t));
                else if (-1 / 0 < o && o < 1 / 0) {
                    if (L) {
                        for (u = A(o / 864e5),
                        l = A(u / 365.2425) + 1970 - 1; L(l + 1, 0) <= u; l++)
                            ;
                        for (c = A((u - L(l, 0)) / 30.42); L(l, c + 1) <= u; c++)
                            ;
                        u = 1 + u - L(l, c),
                        m = (o % 864e5 + 864e5) % 864e5,
                        v = A(m / 36e5) % 24,
                        d = A(m / 6e4) % 60,
                        p = A(m / 1e3) % 60,
                        m = m % 1e3
                    } else
                        l = o.getUTCFullYear(),
                        c = o.getUTCMonth(),
                        u = o.getUTCDate(),
                        v = o.getUTCHours(),
                        d = o.getUTCMinutes(),
                        p = o.getUTCSeconds(),
                        m = o.getUTCMilliseconds();
                    o = (l <= 0 || 1e4 <= l ? (l < 0 ? "-" : "+") + R(6, l < 0 ? -l : l) : R(4, l)) + "-" + R(2, c + 1) + "-" + R(2, u) + "T" + R(2, v) + ":" + R(2, d) + ":" + R(2, p) + "." + R(3, m) + "Z"
                } else
                    o = null;
            if (i && (o = i.call(e, t, o)),
            null === o)
                return "null";
            if (h = D.call(o),
            "[object Boolean]" == h)
                return "" + o;
            if (h == E)
                return -1 / 0 < o && o < 1 / 0 ? "" + o : "null";
            if (h == x)
                return B("" + o);
            if ("object" == typeof o) {
                for (w = r.length; w--; )
                    if (r[w] === o)
                        throw M();
                if (r.push(o),
                _ = [],
                v = a,
                a += n,
                h == C) {
                    for (g = 0,
                    w = o.length; g < w; g++)
                        f = P(g, o, i, s, n, a, r),
                        _.push(f === S ? "null" : f);
                    y = _.length ? n ? "[\n" + a + _.join(",\n" + a) + "\n" + v + "]" : "[" + _.join(",") + "]" : "[]"
                } else
                    T(s || o, function(t) {
                        var e = P(t, o, i, s, n, a, r);
                        e !== S && _.push(B(t) + ":" + (n ? " " : "") + e)
                    }),
                    y = _.length ? n ? "{\n" + a + _.join(",\n" + a) + "\n" + v + "}" : "{" + _.join(",") + "}" : "{}";
                return r.pop(),
                y
            }
        }
        ,
        o.stringify = function(t, e, i) {
            var s, n, a;
            if (F[typeof e] && e)
                if ((a = D.call(e)) == c)
                    n = e;
                else if (a == C)
                    for (var r, o = {}, h = 0, l = e.length; h < l; r = e[h++],
                    a = D.call(r),
                    a != x && a != E || (o[r] = 1))
                        ;
            if (i)
                if ((a = D.call(i)) == E) {
                    if (0 < (i -= i % 1))
                        for (s = "",
                        10 < i && (i = 10); s.length < i; s += " ")
                            ;
                } else
                    a == x && (s = i.length <= 10 ? i : i.slice(0, 10));
            return P("", (r = {},
            r[""] = t,
            r), n, o, s, "", [])
        }
        ),
        O("json-parse")) || (d = v.fromCharCode,
        p = {
            92: "\\",
            34: '"',
            47: "/",
            98: "\b",
            116: "\t",
            110: "\n",
            102: "\f",
            114: "\r"
        },
        f = function() {
            throw m = _ = null,
            j()
        }
        ,
        n = function() {
            for (var t, e, i, s, n, a = _, r = a.length; m < r; )
                switch (n = a.charCodeAt(m),
                n) {
                case 9:
                case 10:
                case 13:
                case 32:
                    m++;
                    break;
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                    return t = h ? a.charAt(m) : a[m],
                    m++,
                    t;
                case 34:
                    for (t = "@",
                    m++; m < r; )
                        if (n = a.charCodeAt(m),
                        n < 32)
                            f();
                        else if (92 == n)
                            switch (n = a.charCodeAt(++m),
                            n) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                                t += p[n],
                                m++;
                                break;
                            case 117:
                                for (e = ++m,
                                i = m + 4; m < i; m++)
                                    n = a.charCodeAt(m),
                                    48 <= n && n <= 57 || 97 <= n && n <= 102 || 65 <= n && n <= 70 || f();
                                t += d("0x" + a.slice(e, m));
                                break;
                            default:
                                f()
                            }
                        else {
                            if (34 == n)
                                break;
                            for (n = a.charCodeAt(m),
                            e = m; 32 <= n && 92 != n && 34 != n; )
                                n = a.charCodeAt(++m);
                            t += a.slice(e, m)
                        }
                    if (34 == a.charCodeAt(m))
                        return m++,
                        t;
                    f();
                default:
                    if (e = m,
                    45 == n && (s = !0,
                    n = a.charCodeAt(++m)),
                    48 <= n && n <= 57) {
                        for (48 == n && (n = a.charCodeAt(m + 1),
                        48 <= n) && n <= 57 && f(),
                        s = !1; m < r && (n = a.charCodeAt(m),
                        48 <= n) && n <= 57; m++)
                            ;
                        if (46 == a.charCodeAt(m)) {
                            for (i = ++m; i < r && (n = a.charCodeAt(i),
                            48 <= n) && n <= 57; i++)
                                ;
                            i == m && f(),
                            m = i
                        }
                        if (n = a.charCodeAt(m),
                        101 == n || 69 == n) {
                            for (n = a.charCodeAt(++m),
                            43 != n && 45 != n || m++,
                            i = m; i < r && (n = a.charCodeAt(i),
                            48 <= n) && n <= 57; i++)
                                ;
                            i == m && f(),
                            m = i
                        }
                        return +a.slice(e, m)
                    }
                    if (s && f(),
                    "true" == a.slice(m, m + 4))
                        return m += 4,
                        !0;
                    if ("false" == a.slice(m, m + 5))
                        return m += 5,
                        !1;
                    if ("null" == a.slice(m, m + 4))
                        return m += 4,
                        null;
                    f()
                }
            return "$"
        }
        ,
        a = function(t) {
            var e, i;
            if ("$" == t && f(),
            "string" == typeof t) {
                if ("@" == (h ? t.charAt(0) : t[0]))
                    return t.slice(1);
                if ("[" == t) {
                    for (e = []; t = n(),
                    "]" != t; i = i || !0)
                        !i || "," == t && (t = n(),
                        "]" != t) || f(),
                        "," == t && f(),
                        e.push(a(t));
                    return e
                }
                if ("{" == t) {
                    for (e = {}; t = n(),
                    "}" != t; i = i || !0)
                        !i || "," == t && (t = n(),
                        "}" != t) || f(),
                        "," != t && "string" == typeof t && "@" == (h ? t.charAt(0) : t[0]) && ":" == n() || f(),
                        e[t.slice(1)] = a(n());
                    return e
                }
                f()
            }
            return t
        }
        ,
        r = function(t, e, i) {
            i = g(t, e, i);
            i === S ? delete t[e] : t[e] = i
        }
        ,
        g = function(t, e, i) {
            var s, n = t[e];
            if ("object" == typeof n && n)
                if (D.call(n) == C)
                    for (s = n.length; s--; )
                        r(n, s, i);
                else
                    T(n, function(t) {
                        r(n, t, i)
                    });
            return i.call(t, e, n)
        }
        ,
        o.parse = function(t, e) {
            var i;
            return m = 0,
            _ = "" + t,
            t = a(n()),
            "$" != n() && f(),
            m = _ = null,
            e && D.call(e) == c ? g((i = {},
            i[""] = t,
            i), "", e) : t
        }
        ),
        o.runInContext = H,
        o
    }
    !r || r.global !== r && r.window !== r && r.self !== r || (N = r),
    a && !n ? H(N, a) : (t = N.JSON,
    e = N.JSON3,
    i = !1,
    s = H(N, N.JSON3 = {
        noConflict: function() {
            return i || (i = !0,
            N.JSON = t,
            N.JSON3 = e,
            t = e = null),
            s
        }
    }),
    N.JSON = {
        parse: s.parse,
        stringify: s.stringify
    }),
    n && define(function() {
        return s
    })
}
.call(this),
!function() {
    var t = {
        a: function() {
            return t.el("a")
        },
        svg: function() {
            return t.el("svg")
        },
        object: function() {
            return t.el("object")
        },
        image: function() {
            return t.el("image")
        },
        img: function() {
            return t.el("img")
        },
        style: function() {
            return t.el("style")
        },
        link: function() {
            return t.el("link")
        },
        script: function() {
            return t.el("script")
        },
        audio: function() {
            return t.el("audio")
        },
        video: function() {
            return t.el("video")
        },
        text: function(t) {
            return document.createTextNode(t)
        },
        el: function(t) {
            return document.createElement(t)
        }
    };
    createjs.Elements = t
}(),
!function() {
    var a = {
        ABSOLUTE_PATT: /^(?:\w+:)?\/{2}/i,
        RELATIVE_PATT: /^[./]*?\//i,
        EXTENSION_PATT: /\/?[^/]+\.(\w{1,5})$/i,
        parseURI: function(t) {
            var e = {
                absolute: !1,
                relative: !1,
                protocol: null,
                hostname: null,
                port: null,
                pathname: null,
                search: null,
                hash: null,
                host: null
            };
            if (null != t) {
                var i, s = createjs.Elements.a();
                for (i in s.href = t,
                e)
                    i in s && (e[i] = s[i]);
                var n = t.indexOf("?");
                -1 < n && (t = t.substr(0, n)),
                a.ABSOLUTE_PATT.test(t) ? e.absolute = !0 : a.RELATIVE_PATT.test(t) && (e.relative = !0),
                (n = t.match(a.EXTENSION_PATT)) && (e.extension = n[1].toLowerCase())
            }
            return e
        },
        formatQueryString: function(t, e) {
            if (null == t)
                throw new Error("You must specify data.");
            var i, s = [];
            for (i in t)
                s.push(i + "=" + escape(t[i]));
            return e && (s = s.concat(e)),
            s.join("&")
        },
        buildURI: function(t, e) {
            var i, s, n;
            return null == e ? t : (n = [],
            i = t.indexOf("?"),
            -1 != i && (s = t.slice(i + 1),
            n = n.concat(s.split("&"))),
            -1 != i ? t.slice(0, i) + "?" + this.formatQueryString(e, n) : t + "?" + this.formatQueryString(e, n))
        },
        isCrossDomain: function(t) {
            var e = createjs.Elements.a()
              , t = (e.href = t.src,
            createjs.Elements.a())
              , e = (t.href = location.href,
            "" != e.hostname && (e.port != t.port || e.protocol != t.protocol || e.hostname != t.hostname));
            return e
        },
        isLocal: function(t) {
            var e = createjs.Elements.a();
            return e.href = t.src,
            "" == e.hostname && "file:" == e.protocol
        }
    };
    createjs.URLUtils = a
}(),
!function() {
    var i = {
        container: null,
        appendToHead: function(t) {
            i.getHead().appendChild(t)
        },
        appendToBody: function(t) {
            var e;
            null == i.container && (i.container = document.createElement("div"),
            i.container.id = "preloadjs-container",
            e = i.container.style,
            e.visibility = "hidden",
            e.position = "absolute",
            e.width = i.container.style.height = "10px",
            e.overflow = "hidden",
            e.transform = e.msTransform = e.webkitTransform = e.oTransform = "translate(-10px, -10px)",
            i.getBody().appendChild(i.container)),
            i.container.appendChild(t)
        },
        getHead: function() {
            return document.head || document.getElementsByTagName("head")[0]
        },
        getBody: function() {
            return document.body || document.getElementsByTagName("body")[0]
        },
        removeChild: function(t) {
            t.parent && t.parent.removeChild(t)
        },
        isImageTag: function(t) {
            return t instanceof HTMLImageElement
        },
        isAudioTag: function(t) {
            return !!window.HTMLAudioElement && t instanceof HTMLAudioElement
        },
        isVideoTag: function(t) {
            return !!window.HTMLVideoElement && t instanceof HTMLVideoElement
        }
    };
    createjs.DomUtils = i
}(),
!function() {
    var t = {
        parseXML: function(t) {
            var e, i = null;
            try {
                window.DOMParser && (e = new DOMParser,
                i = e.parseFromString(t, "text/xml"))
            } catch (t) {}
            if (!i)
                try {
                    i = new ActiveXObject("Microsoft.XMLDOM"),
                    i.async = !1,
                    i.loadXML(t)
                } catch (t) {
                    i = null
                }
            return i
        },
        parseJSON: function(t) {
            if (null == t)
                return null;
            try {
                return JSON.parse(t)
            } catch (t) {
                throw t
            }
        }
    };
    createjs.DataUtils = t
}(),
this.createjs = this.createjs || {},
!function() {
    var t = {
        BINARY: "binary",
        CSS: "css",
        FONT: "font",
        FONTCSS: "fontcss",
        IMAGE: "image",
        JAVASCRIPT: "javascript",
        JSON: "json",
        JSONP: "jsonp",
        MANIFEST: "manifest",
        SOUND: "sound",
        VIDEO: "video",
        SPRITESHEET: "spritesheet",
        SVG: "svg",
        TEXT: "text",
        XML: "xml"
    };
    createjs.Types = t
}(),
this.createjs = this.createjs || {},
!function() {
    var t = {
        POST: "POST",
        GET: "GET"
    };
    createjs.Methods = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function i() {
        this.src = null,
        this.type = null,
        this.id = null,
        this.maintainOrder = !1,
        this.callback = null,
        this.data = null,
        this.method = createjs.Methods.GET,
        this.values = null,
        this.headers = null,
        this.withCredentials = !1,
        this.mimeType = null,
        this.crossOrigin = null,
        this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT
    }
    var t = i.prototype = {}
      , s = i;
    s.LOAD_TIMEOUT_DEFAULT = 8e3,
    s.create = function(t) {
        var e;
        if ("string" == typeof t)
            return e = new i,
            e.src = t,
            e;
        if (t instanceof s)
            return t;
        if (t instanceof Object && t.src)
            return null == t.loadTimeout && (t.loadTimeout = s.LOAD_TIMEOUT_DEFAULT),
            t;
        throw new Error("Type not recognized.")
    }
    ,
    t.set = function(t) {
        for (var e in t)
            this[e] = t[e];
        return this
    }
    ,
    createjs.LoadItem = s
}(),
!function() {
    var t = {
        isBinary: function(t) {
            switch (t) {
            case createjs.Types.IMAGE:
            case createjs.Types.BINARY:
                return !0;
            default:
                return !1
            }
        },
        isText: function(t) {
            switch (t) {
            case createjs.Types.TEXT:
            case createjs.Types.JSON:
            case createjs.Types.MANIFEST:
            case createjs.Types.XML:
            case createjs.Types.CSS:
            case createjs.Types.SVG:
            case createjs.Types.JAVASCRIPT:
            case createjs.Types.SPRITESHEET:
                return !0;
            default:
                return !1
            }
        },
        getTypeByExtension: function(t) {
            if (null == t)
                return createjs.Types.TEXT;
            switch (t.toLowerCase()) {
            case "jpeg":
            case "jpg":
            case "gif":
            case "png":
            case "webp":
            case "bmp":
                return createjs.Types.IMAGE;
            case "ogg":
            case "mp3":
            case "webm":
                return createjs.Types.SOUND;
            case "mp4":
            case "webm":
            case "ts":
                return createjs.Types.VIDEO;
            case "json":
                return createjs.Types.JSON;
            case "xml":
                return createjs.Types.XML;
            case "css":
                return createjs.Types.CSS;
            case "js":
                return createjs.Types.JAVASCRIPT;
            case "svg":
                return createjs.Types.SVG;
            default:
                return createjs.Types.TEXT
            }
        }
    };
    createjs.RequestUtils = t
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.EventDispatcher_constructor(),
        this.loaded = !1,
        this.canceled = !1,
        this.progress = 0,
        this.type = i,
        this.resultFormatter = null,
        this._item = t ? createjs.LoadItem.create(t) : null,
        this._preferXHR = e,
        this._result = null,
        this._rawResult = null,
        this._loadedItems = null,
        this._tagSrcAttribute = null,
        this._tag = null
    }
    var e = createjs.extend(t, createjs.EventDispatcher)
      , i = t;
    try {
        Object.defineProperties(i, {
            POST: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.POST
                }, "AbstractLoader.POST")
            },
            GET: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.GET
                }, "AbstractLoader.GET")
            },
            BINARY: {
                get: createjs.deprecate(function() {
                    return createjs.Types.BINARY
                }, "AbstractLoader.BINARY")
            },
            CSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.CSS
                }, "AbstractLoader.CSS")
            },
            FONT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONT
                }, "AbstractLoader.FONT")
            },
            FONTCSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONTCSS
                }, "AbstractLoader.FONTCSS")
            },
            IMAGE: {
                get: createjs.deprecate(function() {
                    return createjs.Types.IMAGE
                }, "AbstractLoader.IMAGE")
            },
            JAVASCRIPT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JAVASCRIPT
                }, "AbstractLoader.JAVASCRIPT")
            },
            JSON: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSON
                }, "AbstractLoader.JSON")
            },
            JSONP: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSONP
                }, "AbstractLoader.JSONP")
            },
            MANIFEST: {
                get: createjs.deprecate(function() {
                    return createjs.Types.MANIFEST
                }, "AbstractLoader.MANIFEST")
            },
            SOUND: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SOUND
                }, "AbstractLoader.SOUND")
            },
            VIDEO: {
                get: createjs.deprecate(function() {
                    return createjs.Types.VIDEO
                }, "AbstractLoader.VIDEO")
            },
            SPRITESHEET: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SPRITESHEET
                }, "AbstractLoader.SPRITESHEET")
            },
            SVG: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SVG
                }, "AbstractLoader.SVG")
            },
            TEXT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.TEXT
                }, "AbstractLoader.TEXT")
            },
            XML: {
                get: createjs.deprecate(function() {
                    return createjs.Types.XML
                }, "AbstractLoader.XML")
            }
        })
    } catch (t) {}
    e.getItem = function() {
        return this._item
    }
    ,
    e.getResult = function(t) {
        return t ? this._rawResult : this._result
    }
    ,
    e.getTag = function() {
        return this._tag
    }
    ,
    e.setTag = function(t) {
        this._tag = t
    }
    ,
    e.load = function() {
        this._createRequest(),
        this._request.on("complete", this, this),
        this._request.on("progress", this, this),
        this._request.on("loadStart", this, this),
        this._request.on("abort", this, this),
        this._request.on("timeout", this, this),
        this._request.on("error", this, this);
        var t = new createjs.Event("initialize");
        t.loader = this._request,
        this.dispatchEvent(t),
        this._request.load()
    }
    ,
    e.cancel = function() {
        this.canceled = !0,
        this.destroy()
    }
    ,
    e.destroy = function() {
        this._request && (this._request.removeAllEventListeners(),
        this._request.destroy()),
        this._request = null,
        this._item = null,
        this._rawResult = null,
        this._result = null,
        this._loadItems = null,
        this.removeAllEventListeners()
    }
    ,
    e.getLoadedItems = function() {
        return this._loadedItems
    }
    ,
    e._createRequest = function() {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
    }
    ,
    e._createTag = function(t) {
        return null
    }
    ,
    e._sendLoadStart = function() {
        this._isCanceled() || this.dispatchEvent("loadstart")
    }
    ,
    e._sendProgress = function(t) {
        var e;
        this._isCanceled() || (e = null,
        "number" == typeof t ? (this.progress = t,
        e = new createjs.ProgressEvent(this.progress)) : (e = t,
        this.progress = t.loaded / t.total,
        e.progress = this.progress,
        !isNaN(this.progress) && Infinity != this.progress || (this.progress = 0)),
        this.hasEventListener("progress") && this.dispatchEvent(e))
    }
    ,
    e._sendComplete = function() {
        var t;
        this._isCanceled() || (this.loaded = !0,
        t = new createjs.Event("complete"),
        t.rawResult = this._rawResult,
        null != this._result && (t.result = this._result),
        this.dispatchEvent(t))
    }
    ,
    e._sendError = function(t) {
        !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),
        this.dispatchEvent(t))
    }
    ,
    e._isCanceled = function() {
        return !(null != window.createjs && !this.canceled)
    }
    ,
    e.resultFormatter = null,
    e.handleEvent = function(t) {
        switch (t.type) {
        case "complete":
            this._rawResult = t.target._response;
            var e = this.resultFormatter && this.resultFormatter(this);
            e instanceof Function ? e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = e || this._rawResult,
            this._sendComplete());
            break;
        case "progress":
            this._sendProgress(t);
            break;
        case "error":
            this._sendError(t);
            break;
        case "loadstart":
            this._sendLoadStart();
            break;
        case "abort":
        case "timeout":
            this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"))
        }
    }
    ,
    e._resultFormatSuccess = function(t) {
        this._result = t,
        this._sendComplete()
    }
    ,
    e._resultFormatFailed = function(t) {
        this._sendError(t)
    }
    ,
    e.toString = function() {
        return "[PreloadJS AbstractLoader]"
    }
    ,
    createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractLoader_constructor(t, e, i),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "src",
        this.on("initialize", this._updateXHR, this)
    }
    var e = createjs.extend(t, createjs.AbstractLoader);
    e.load = function() {
        this._tag || (this._tag = this._createTag(this._item.src)),
        this._tag.preload = "auto",
        this._tag.load(),
        this.AbstractLoader_load()
    }
    ,
    e._createTag = function() {}
    ,
    e._createRequest = function() {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
    }
    ,
    e._updateXHR = function(t) {
        t.loader.setResponseType && t.loader.setResponseType("blob")
    }
    ,
    e._formatResult = function(t) {
        var e, i;
        return this._tag.removeEventListener && this._tag.removeEventListener(com.battleline.App.isWebApp || com.battleline.Platform.os !== com.battleline.OS.iOS ? "canplaythrough" : "loadedmetadata", this._loadedHandler),
        this._tag.onstalled = null,
        this._preferXHR && (e = window.URL || window.webkitURL,
        i = t.getResult(!0),
        t.getTag().src = e.createObjectURL(i)),
        t.getTag()
    }
    ,
    createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this._item = t
    }
    var e = createjs.extend(t, createjs.EventDispatcher);
    e.load = function() {}
    ,
    e.destroy = function() {}
    ,
    e.cancel = function() {}
    ,
    createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t),
        this._tag = e,
        this._tagSrcAttribute = i,
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this),
        this._addedToDOM = !1
    }
    var e = createjs.extend(t, createjs.AbstractRequest);
    e.load = function() {
        this._tag.onload = createjs.proxy(this._handleTagComplete, this),
        this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this),
        this._tag.onerror = createjs.proxy(this._handleError, this);
        var t = new createjs.Event("initialize")
          , t = (t.loader = this._tag,
        this.dispatchEvent(t),
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
        this._item.src)
          , e = !1
          , t = t + ""
          , t = t.split("?")[0]
          , i = com.battleline.App.basePath;
        i && "" !== i && "./" !== i && 0 === t.indexOf(i) && (t = t.substr(i.length)),
        com.battleline.EncodedAssets[t] && (e = !0),
        this._tag[this._tagSrcAttribute] = e ? com.battleline.EncodedAssets[t] : this._item.src,
        null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag),
        this._addedToDOM = !0)
    }
    ,
    e.destroy = function() {
        this._clean(),
        this._tag = null,
        this.AbstractRequest_destroy()
    }
    ,
    e._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }
    ,
    e._handleError = function() {
        this._clean(),
        this.dispatchEvent("error")
    }
    ,
    e._handleTagComplete = function() {
        this._rawResult = this._tag,
        this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult,
        this._clean(),
        this.dispatchEvent("complete")
    }
    ,
    e._handleTimeout = function() {
        this._clean(),
        this.dispatchEvent(new createjs.Event("timeout"))
    }
    ,
    e._clean = function() {
        this._tag.onload = null,
        this._tag.onreadystatechange = null,
        this._tag.onerror = null,
        this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag),
        clearTimeout(this._loadTimeout)
    }
    ,
    e._handleStalled = function() {}
    ,
    createjs.TagRequest = createjs.promote(t, "AbstractRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t),
        this._tag = e,
        this._tagSrcAttribute = i,
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }
    var e = createjs.extend(t, createjs.TagRequest);
    e.load = function() {
        var t = createjs.proxy(this._handleStalled, this)
          , e = (this._stalledCallback = t,
        createjs.proxy(this._handleProgress, this));
        this._handleProgress = e,
        this._tag.addEventListener("stalled", t),
        this._tag.addEventListener("progress", e),
        this._tag.addEventListener && this._tag.addEventListener(com.battleline.App.isWebApp || com.battleline.Platform.os !== com.battleline.OS.iOS ? "canplaythrough" : "loadedmetadata", this._loadedHandler),
        this.TagRequest_load()
    }
    ,
    e._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }
    ,
    e._handleStalled = function() {}
    ,
    e._handleProgress = function(t) {
        !t || 0 < t.loaded && 0 == t.total || (t = new createjs.ProgressEvent(t.loaded,t.total),
        this.dispatchEvent(t))
    }
    ,
    e._clean = function() {
        this._tag.removeEventListener && this._tag.removeEventListener(com.battleline.App.isWebApp || com.battleline.Platform.os !== com.battleline.OS.iOS ? "canplaythrough" : "loadedmetadata", this._loadedHandler),
        this._tag.removeEventListener("stalled", this._stalledCallback),
        this._tag.removeEventListener("progress", this._progressCallback),
        this.TagRequest__clean()
    }
    ,
    createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractRequest_constructor(t),
        this._request = null,
        this._loadTimeout = null,
        this._xhrLevel = 1,
        this._response = null,
        this._rawResponse = null,
        this._canceled = !1,
        this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this),
        this._handleProgressProxy = createjs.proxy(this._handleProgress, this),
        this._handleAbortProxy = createjs.proxy(this._handleAbort, this),
        this._handleErrorProxy = createjs.proxy(this._handleError, this),
        this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this),
        this._handleLoadProxy = createjs.proxy(this._handleLoad, this),
        this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this),
        this._createXHR(t)
    }
    var e = createjs.extend(t, createjs.AbstractRequest);
    t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
    e.getResult = function(t) {
        return t && this._rawResponse ? this._rawResponse : this._response
    }
    ,
    e.cancel = function() {
        this.canceled = !0,
        this._clean(),
        this._request.abort()
    }
    ,
    e.load = function() {
        if (null == this._request)
            this._handleError();
        else {
            null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1),
            this._request.addEventListener("progress", this._handleProgressProxy, !1),
            this._request.addEventListener("abort", this._handleAbortProxy, !1),
            this._request.addEventListener("error", this._handleErrorProxy, !1),
            this._request.addEventListener("timeout", this._handleTimeoutProxy, !1),
            this._request.addEventListener("load", this._handleLoadProxy, !1),
            this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy,
            this._request.onprogress = this._handleProgressProxy,
            this._request.onabort = this._handleAbortProxy,
            this._request.onerror = this._handleErrorProxy,
            this._request.ontimeout = this._handleTimeoutProxy,
            this._request.onload = this._handleLoadProxy,
            this._request.onreadystatechange = this._handleReadyStateChangeProxy),
            1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (t) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,t))
            }
        }
    }
    ,
    e.setResponseType = function(t) {
        "blob" === t && (t = window.URL ? "blob" : "arraybuffer",
        this._responseType = t),
        this._request.responseType = t
    }
    ,
    e.getAllResponseHeaders = function() {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }
    ,
    e.getResponseHeader = function(t) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
    }
    ,
    e._handleProgress = function(t) {
        !t || 0 < t.loaded && 0 == t.total || (t = new createjs.ProgressEvent(t.loaded,t.total),
        this.dispatchEvent(t))
    }
    ,
    e._handleLoadStart = function(t) {
        clearTimeout(this._loadTimeout),
        this.dispatchEvent("loadstart")
    }
    ,
    e._handleAbort = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,t))
    }
    ,
    e._handleError = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent(t.message))
    }
    ,
    e._handleReadyStateChange = function(t) {
        4 == this._request.readyState && this._handleLoad()
    }
    ,
    e._handleLoad = function(t) {
        if (!this.loaded) {
            this.loaded = !0;
            var e = this._checkError();
            if (e)
                this._handleError(e);
            else {
                if (this._response = this._getResponse(),
                "arraybuffer" === this._responseType)
                    try {
                        this._response = new Blob([this._response])
                    } catch (t) {
                        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                        "TypeError" === t.name && window.BlobBuilder && (e = new BlobBuilder,
                        e.append(this._response),
                        this._response = e.getBlob())
                    }
                this._clean(),
                this.dispatchEvent(new createjs.Event("complete"))
            }
        }
    }
    ,
    e._handleTimeout = function(t) {
        this._clean(),
        this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,t))
    }
    ,
    e._checkError = function() {
        var t = parseInt(this._request.status);
        return 400 <= t && t <= 599 ? new Error(t) : 0 == t && /^https?:/.test(location.protocol) ? new Error(0) : null
    }
    ,
    e._getResponse = function() {
        if (null != this._response)
            return this._response;
        if (null != this._request.response)
            return this._request.response;
        try {
            if (null != this._request.responseText)
                return this._request.responseText
        } catch (t) {}
        try {
            if (null != this._request.responseXML)
                return this._request.responseXML
        } catch (t) {}
        return null
    }
    ,
    e._createXHR = function(t) {
        var e = createjs.URLUtils.isCrossDomain(t)
          , i = {}
          , n = null;
        if (window.XMLHttpRequest)
            n = new XMLHttpRequest,
            e && void 0 === n.withCredentials && window.XDomainRequest && (n = new XDomainRequest);
        else {
            for (var a = 0, r = s.ACTIVEX_VERSIONS.length; a < r; a++) {
                var o = s.ACTIVEX_VERSIONS[a];
                try {
                    n = new ActiveXObject(o);
                    break
                } catch (t) {}
            }
            if (null == n)
                return !1
        }
        null == t.mimeType && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"),
        t.mimeType && n.overrideMimeType && n.overrideMimeType(t.mimeType),
        this._xhrLevel = "string" == typeof n.responseType ? 2 : 1;
        var h = null
          , h = t.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(t.src, t.values) : t.src;
        if (n.open(t.method || createjs.Methods.GET, h, !0),
        e && n instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin),
        t.values && t.method == createjs.Methods.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"),
        e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
        t.headers)
            for (var l in t.headers)
                i[l] = t.headers[l];
        for (l in i)
            n.setRequestHeader(l, i[l]);
        return n instanceof XMLHttpRequest && void 0 !== t.withCredentials && (n.withCredentials = t.withCredentials),
        this._request = n,
        !0
    }
    ,
    e._clean = function() {
        clearTimeout(this._loadTimeout),
        null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy),
        this._request.removeEventListener("progress", this._handleProgressProxy),
        this._request.removeEventListener("abort", this._handleAbortProxy),
        this._request.removeEventListener("error", this._handleErrorProxy),
        this._request.removeEventListener("timeout", this._handleTimeoutProxy),
        this._request.removeEventListener("load", this._handleLoadProxy),
        this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null,
        this._request.onprogress = null,
        this._request.onabort = null,
        this._request.onerror = null,
        this._request.ontimeout = null,
        this._request.onload = null,
        this._request.onreadystatechange = null)
    }
    ,
    e.toString = function() {
        return "[PreloadJS XHRRequest]"
    }
    ,
    createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e, i) {
        this.AbstractLoader_constructor(),
        this._plugins = [],
        this._typeCallbacks = {},
        this._extensionCallbacks = {},
        this.next = null,
        this.maintainScriptOrder = !0,
        this.stopOnError = !1,
        this._maxConnections = 1,
        this._availableLoaders = [createjs.FontLoader, createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader],
        this._defaultLoaderLength = this._availableLoaders.length,
        this.init(t, e, i)
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , h = t;
    try {
        Object.defineProperties(h, {
            POST: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.POST
                }, "AbstractLoader.POST")
            },
            GET: {
                get: createjs.deprecate(function() {
                    return createjs.Methods.GET
                }, "AbstractLoader.GET")
            },
            BINARY: {
                get: createjs.deprecate(function() {
                    return createjs.Types.BINARY
                }, "AbstractLoader.BINARY")
            },
            CSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.CSS
                }, "AbstractLoader.CSS")
            },
            FONT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONT
                }, "AbstractLoader.FONT")
            },
            FONTCSS: {
                get: createjs.deprecate(function() {
                    return createjs.Types.FONTCSS
                }, "AbstractLoader.FONTCSS")
            },
            IMAGE: {
                get: createjs.deprecate(function() {
                    return createjs.Types.IMAGE
                }, "AbstractLoader.IMAGE")
            },
            JAVASCRIPT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JAVASCRIPT
                }, "AbstractLoader.JAVASCRIPT")
            },
            JSON: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSON
                }, "AbstractLoader.JSON")
            },
            JSONP: {
                get: createjs.deprecate(function() {
                    return createjs.Types.JSONP
                }, "AbstractLoader.JSONP")
            },
            MANIFEST: {
                get: createjs.deprecate(function() {
                    return createjs.Types.MANIFEST
                }, "AbstractLoader.MANIFEST")
            },
            SOUND: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SOUND
                }, "AbstractLoader.SOUND")
            },
            VIDEO: {
                get: createjs.deprecate(function() {
                    return createjs.Types.VIDEO
                }, "AbstractLoader.VIDEO")
            },
            SPRITESHEET: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SPRITESHEET
                }, "AbstractLoader.SPRITESHEET")
            },
            SVG: {
                get: createjs.deprecate(function() {
                    return createjs.Types.SVG
                }, "AbstractLoader.SVG")
            },
            TEXT: {
                get: createjs.deprecate(function() {
                    return createjs.Types.TEXT
                }, "AbstractLoader.TEXT")
            },
            XML: {
                get: createjs.deprecate(function() {
                    return createjs.Types.XML
                }, "AbstractLoader.XML")
            }
        })
    } catch (t) {}
    e.init = function(t, e, i) {
        this.preferXHR = !0,
        this._preferXHR = !0,
        this.setPreferXHR(t),
        this._paused = !1,
        this._basePath = e,
        this._crossOrigin = i,
        this._loadStartWasDispatched = !1,
        this._currentlyLoadingScript = null,
        this._currentLoads = [],
        this._loadQueue = [],
        this._loadQueueBackup = [],
        this._loadItemsById = {},
        this._loadItemsBySrc = {},
        this._loadedResults = {},
        this._loadedRawResults = {},
        this._numItems = 0,
        this._numItemsLoaded = 0,
        this._scriptOrder = [],
        this._loadedScripts = [],
        this._lastProgress = NaN
    }
    ,
    e.registerLoader = function(t) {
        if (!t || !t.canLoadItem)
            throw new Error("loader is of an incorrect type.");
        if (-1 != this._availableLoaders.indexOf(t))
            throw new Error("loader already exists.");
        this._availableLoaders.unshift(t)
    }
    ,
    e.unregisterLoader = function(t) {
        t = this._availableLoaders.indexOf(t);
        -1 != t && t < this._defaultLoaderLength - 1 && this._availableLoaders.splice(t, 1)
    }
    ,
    e.setPreferXHR = function(t) {
        return this.preferXHR = 0 != t && null != window.XMLHttpRequest,
        this.preferXHR
    }
    ,
    e.removeAll = function() {
        this.remove()
    }
    ,
    e.remove = function(t) {
        var e = null;
        if (t && !Array.isArray(t))
            e = [t];
        else if (t)
            e = t;
        else if (0 < arguments.length)
            return;
        var i = !1;
        if (e) {
            for (; e.length; ) {
                for (var s = e.pop(), n = this.getResult(s), a = this._loadQueue.length - 1; 0 <= a; a--)
                    if (r = this._loadQueue[a].getItem(),
                    r.id == s || r.src == s) {
                        this._loadQueue.splice(a, 1)[0].cancel();
                        break
                    }
                for (a = this._loadQueueBackup.length - 1; 0 <= a; a--)
                    if (r = this._loadQueueBackup[a].getItem(),
                    r.id == s || r.src == s) {
                        this._loadQueueBackup.splice(a, 1)[0].cancel();
                        break
                    }
                if (n)
                    this._disposeItem(this.getItem(s));
                else
                    for (var a = this._currentLoads.length - 1; 0 <= a; a--) {
                        var r = this._currentLoads[a].getItem();
                        if (r.id == s || r.src == s) {
                            this._currentLoads.splice(a, 1)[0].cancel(),
                            i = !0;
                            break
                        }
                    }
            }
            i && this._loadNext()
        } else {
            for (var o in this.close(),
            this._loadItemsById)
                this._disposeItem(this._loadItemsById[o]);
            this.init(this.preferXHR, this._basePath)
        }
    }
    ,
    e.reset = function() {
        for (var t in this.close(),
        this._loadItemsById)
            this._disposeItem(this._loadItemsById[t]);
        for (var e = [], i = 0, s = this._loadQueueBackup.length; i < s; i++)
            e.push(this._loadQueueBackup[i].getItem());
        this.loadManifest(e, !1)
    }
    ,
    e.installPlugin = function(t) {
        if (null != t && null != t.getPreloadHandlers) {
            this._plugins.push(t);
            var e = t.getPreloadHandlers();
            if (e.scope = t,
            null != e.types)
                for (var i = 0, s = e.types.length; i < s; i++)
                    this._typeCallbacks[e.types[i]] = e;
            if (null != e.extensions)
                for (i = 0,
                s = e.extensions.length; i < s; i++)
                    this._extensionCallbacks[e.extensions[i]] = e
        }
    }
    ,
    e.setMaxConnections = function(t) {
        this._maxConnections = t,
        !this._paused && 0 < this._loadQueue.length && this._loadNext()
    }
    ,
    e.loadFile = function(t, e, i) {
        var s;
        null == t ? (s = new createjs.ErrorEvent("PRELOAD_NO_FILE"),
        this._sendError(s)) : (this._addItem(t, null, i),
        !1 !== e ? this.setPaused(!1) : this.setPaused(!0))
    }
    ,
    e.loadManifest = function(t, e, i) {
        var s, n = null, a = null;
        if (Array.isArray(t)) {
            if (0 == t.length)
                return s = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY"),
                void this._sendError(s);
            n = t
        } else if ("string" == typeof t)
            n = [{
                src: t,
                type: h.MANIFEST
            }];
        else {
            if ("object" != typeof t)
                return s = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL"),
                void this._sendError(s);
            void 0 !== t.src ? (null == t.type ? t.type = h.MANIFEST : t.type != h.MANIFEST && (s = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE"),
            this._sendError(s)),
            n = [t]) : void 0 !== t.manifest && (n = t.manifest,
            a = t.path)
        }
        for (var r = 0, o = n.length; r < o; r++)
            this._addItem(n[r], a, i);
        !1 !== e ? this.setPaused(!1) : this.setPaused(!0)
    }
    ,
    e.load = function() {
        this.setPaused(!1)
    }
    ,
    e.getItem = function(t) {
        return this._loadItemsById[t] || this._loadItemsBySrc[t]
    }
    ,
    e.getResult = function(t, e) {
        var t = this._loadItemsById[t] || this._loadItemsBySrc[t];
        return null == t ? null : (t = t.id,
        (e && this._loadedRawResults[t] ? this._loadedRawResults : this._loadedResults)[t])
    }
    ,
    e.getItems = function(t) {
        var e, i = [];
        for (e in this._loadItemsById) {
            var s = this._loadItemsById[e]
              , n = this.getResult(e);
            !0 === t && null == n || i.push({
                item: s,
                result: n,
                rawResult: this.getResult(e, !0)
            })
        }
        return i
    }
    ,
    e.setPaused = function(t) {
        this._paused = t,
        this._paused || this._loadNext()
    }
    ,
    e.close = function() {
        for (; this._currentLoads.length; )
            this._currentLoads.pop().cancel();
        this._scriptOrder.length = 0,
        this._loadedScripts.length = 0,
        this.loadStartWasDispatched = !1,
        this._itemCount = 0,
        this._lastProgress = NaN
    }
    ,
    e._addItem = function(t, e, i) {
        t = this._createLoadItem(t, e, i);
        null != t && (e = this._createLoader(t),
        null != e) && ("plugins"in e && (e.plugins = this._plugins),
        t._loader = e,
        this._loadQueue.push(e),
        this._loadQueueBackup.push(e),
        this._numItems++,
        this._updateProgress(),
        this.maintainScriptOrder && t.type == createjs.Types.JAVASCRIPT || !0 === t.maintainOrder) && (this._scriptOrder.push(t),
        this._loadedScripts.push(null))
    }
    ,
    e._createLoadItem = function(t, e, i) {
        t = createjs.LoadItem.create(t);
        if (null == t)
            return null;
        var s = ""
          , i = i || this._basePath;
        if (t.src instanceof Object) {
            if (!t.type)
                return null;
            e ? (s = e,
            r = createjs.URLUtils.parseURI(e),
            null == i || r.absolute || r.relative || (s = i + s)) : null != i && (s = i)
        } else {
            var n = createjs.URLUtils.parseURI(t.src)
              , a = (n.extension && (t.ext = n.extension),
            null == t.type && (t.type = createjs.RequestUtils.getTypeByExtension(t.ext)),
            t.src);
            n.absolute || n.relative || (e ? (s = e,
            r = createjs.URLUtils.parseURI(e),
            a = e + a,
            null == i || r.absolute || r.relative || (s = i + s)) : null != i && (s = i)),
            t.src = s + t.src
        }
        t.path = s,
        void 0 !== t.id && null !== t.id && "" !== t.id || (t.id = a);
        e = this._typeCallbacks[t.type] || this._extensionCallbacks[t.ext];
        if (e) {
            var r = e.callback.call(e.scope, t, this);
            if (!1 === r)
                return null;
            !0 !== r && null != r && (t._loader = r),
            n = createjs.URLUtils.parseURI(t.src),
            null != n.extension && (t.ext = n.extension)
        }
        return this._loadItemsById[t.id] = t,
        this._loadItemsBySrc[t.src] = t,
        null == t.crossOrigin && (t.crossOrigin = this._crossOrigin),
        t
    }
    ,
    e._createLoader = function(t) {
        if (null != t._loader)
            return t._loader;
        for (var e = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
            var s = this._availableLoaders[i];
            if (s && s.canLoadItem(t))
                return new s(t,e)
        }
        return null
    }
    ,
    e._loadNext = function() {
        if (!this._paused) {
            this._loadStartWasDispatched || (this._sendLoadStart(),
            this._loadStartWasDispatched = !0),
            this._numItems == this._numItemsLoaded ? (this.loaded = !0,
            this._sendComplete(),
            this.next && this.next.load && this.next.load()) : this.loaded = !1;
            for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
                var e = this._loadQueue[t];
                this._canStartLoad(e) && (this._loadQueue.splice(t, 1),
                t--,
                this._loadItem(e))
            }
        }
    }
    ,
    e._loadItem = function(t) {
        t.on("fileload", this._handleFileLoad, this),
        t.on("progress", this._handleProgress, this),
        t.on("complete", this._handleFileComplete, this),
        t.on("error", this._handleError, this),
        t.on("fileerror", this._handleFileError, this),
        this._currentLoads.push(t),
        this._sendFileStart(t.getItem()),
        t.load()
    }
    ,
    e._handleFileLoad = function(t) {
        t.target = null,
        this.dispatchEvent(t)
    }
    ,
    e._handleFileError = function(t) {
        t = new createjs.ErrorEvent("FILE_LOAD_ERROR",null,t.item);
        this._sendError(t)
    }
    ,
    e._handleError = function(t) {
        var t = t.target
          , e = (this._numItemsLoaded++,
        this._finishOrderedItem(t, !0),
        this._updateProgress(),
        new createjs.ErrorEvent("FILE_LOAD_ERROR",null,t.getItem()));
        this._sendError(e),
        this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(t),
        this._cleanLoadItem(t),
        this._loadNext())
    }
    ,
    e._handleFileComplete = function(t) {
        var t = t.target
          , e = t.getItem()
          , i = t.getResult()
          , s = (this._loadedResults[e.id] = i,
        t.getResult(!0));
        null != s && s !== i && (this._loadedRawResults[e.id] = s),
        this._saveLoadedItems(t),
        this._removeLoadItem(t),
        this._finishOrderedItem(t) || this._processFinishedLoad(e, t),
        this._cleanLoadItem(t)
    }
    ,
    e._saveLoadedItems = function(t) {
        var e = t.getLoadedItems();
        if (null !== e)
            for (var i = 0; i < e.length; i++) {
                var s = e[i].item;
                this._loadItemsBySrc[s.src] = s,
                this._loadItemsById[s.id] = s,
                this._loadedResults[s.id] = e[i].result,
                this._loadedRawResults[s.id] = e[i].rawResult
            }
    }
    ,
    e._finishOrderedItem = function(t, e) {
        var i = t.getItem();
        return !!(this.maintainScriptOrder && i.type == createjs.Types.JAVASCRIPT || i.maintainOrder) && (t instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1),
        t = createjs.indexOf(this._scriptOrder, i),
        -1 != t) && (this._loadedScripts[t] = !0 === e || i,
        this._checkScriptLoadOrder(),
        !0)
    }
    ,
    e._checkScriptLoadOrder = function() {
        for (var t = this._loadedScripts.length, e = 0; e < t; e++) {
            var i, s = this._loadedScripts[e];
            if (null === s)
                break;
            !0 !== s && (i = this._loadedResults[s.id],
            s.type == createjs.Types.JAVASCRIPT && createjs.DomUtils.appendToHead(i),
            i = s._loader,
            this._processFinishedLoad(s, i),
            this._loadedScripts[e] = !0)
        }
    }
    ,
    e._processFinishedLoad = function(t, e) {
        var i;
        this._numItemsLoaded++,
        this.maintainScriptOrder || t.type != createjs.Types.JAVASCRIPT || (i = e.getTag(),
        createjs.DomUtils.appendToHead(i)),
        this._updateProgress(),
        this._sendFileComplete(t, e),
        this._loadNext()
    }
    ,
    e._canStartLoad = function(t) {
        if (this.maintainScriptOrder && !t.preferXHR) {
            t = t.getItem();
            if (t.type == createjs.Types.JAVASCRIPT) {
                if (this._currentlyLoadingScript)
                    return !1;
                for (var e = this._scriptOrder.indexOf(t), i = 0; i < e; ) {
                    var s = this._loadedScripts[i];
                    if (null == s)
                        return !1;
                    i++
                }
                this._currentlyLoadingScript = !0
            }
        }
        return !0
    }
    ,
    e._removeLoadItem = function(t) {
        for (var e = this._currentLoads.length, i = 0; i < e; i++)
            if (this._currentLoads[i] == t) {
                this._currentLoads.splice(i, 1);
                break
            }
    }
    ,
    e._cleanLoadItem = function(t) {
        t = t.getItem();
        t && delete t._loader
    }
    ,
    e._handleProgress = function(t) {
        t = t.target;
        this._sendFileProgress(t.getItem(), t.progress),
        this._updateProgress()
    }
    ,
    e._updateProgress = function() {
        var t = this._numItemsLoaded / this._numItems
          , e = this._numItems - this._numItemsLoaded;
        if (0 < e) {
            for (var i = 0, s = 0, n = this._currentLoads.length; s < n; s++)
                i += this._currentLoads[s].progress;
            t += i / e * (e / this._numItems)
        }
        this._lastProgress != t && (this._sendProgress(t),
        this._lastProgress = t)
    }
    ,
    e._disposeItem = function(t) {
        delete this._loadedResults[t.id],
        delete this._loadedRawResults[t.id],
        delete this._loadItemsById[t.id],
        delete this._loadItemsBySrc[t.src]
    }
    ,
    e._sendFileProgress = function(t, e) {
        var i;
        this._isCanceled() || this._paused || this.hasEventListener("fileprogress") && (i = new createjs.Event("fileprogress"),
        i.progress = e,
        i.loaded = e,
        i.total = 1,
        i.item = t,
        this.dispatchEvent(i))
    }
    ,
    e._sendFileComplete = function(t, e) {
        var i;
        this._isCanceled() || this._paused || (i = new createjs.Event("fileload"),
        i.loader = e,
        i.item = t,
        i.result = this._loadedResults[t.id],
        i.rawResult = this._loadedRawResults[t.id],
        t.completeHandler && t.completeHandler(i),
        this.hasEventListener("fileload") && this.dispatchEvent(i))
    }
    ,
    e._sendFileStart = function(t) {
        var e = new createjs.Event("filestart");
        e.item = t,
        this.hasEventListener("filestart") && this.dispatchEvent(e)
    }
    ,
    e.toString = function() {
        return "[PreloadJS LoadQueue]"
    }
    ,
    createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.Types.TEXT)
    }
    createjs.extend(t, createjs.AbstractLoader);
    var e = t;
    e.canLoadItem = function(t) {
        return t.type == createjs.Types.TEXT
    }
    ,
    createjs.TextLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.Types.BINARY),
        this.on("initialize", this._updateXHR, this)
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.BINARY
    }
    ,
    e._updateXHR = function(t) {
        t.loader.setResponseType("arraybuffer")
    }
    ,
    createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.Types.CSS),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "href",
        this._tag = e ? createjs.Elements.style() : createjs.Elements.link(),
        this._tag.rel = "stylesheet",
        this._tag.type = "text/css"
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.CSS
    }
    ,
    e._formatResult = function(t) {
        var e;
        return this._preferXHR ? (e = t.getTag(),
        e.styleSheet ? e.styleSheet.cssText = t.getResult(!0) : (t = createjs.Elements.text(t.getResult(!0)),
        e.appendChild(t))) : e = this._tag,
        createjs.DomUtils.appendToHead(e),
        e
    }
    ,
    createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function l(t, e) {
        this.AbstractLoader_constructor(t, e, t.type),
        this._faces = {},
        this._watched = [],
        this._count = 0,
        this._watchInterval = null,
        this._loadTimeout = null,
        this._injectCSS = void 0 === t.injectCSS || t.injectCSS,
        this.dispatchEvent("initialize")
    }
    var t = createjs.extend(l, createjs.AbstractLoader);
    l.canLoadItem = function(t) {
        return t.type == createjs.Types.FONT || t.type == createjs.Types.FONTCSS
    }
    ,
    l.sampleText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    l._ctx = document.createElement("canvas").getContext("2d"),
    l._referenceFonts = ["serif", "monospace"],
    l.WEIGHT_REGEX = /[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi,
    l.STYLE_REGEX = /[- ._]*(italic|oblique)[- ._]*/gi,
    l.FONT_FORMAT = {
        woff2: "woff2",
        woff: "woff",
        ttf: "truetype",
        otf: "truetype"
    },
    l.FONT_WEIGHT = {
        thin: 100,
        extralight: 200,
        ultralight: 200,
        light: 300,
        semilight: 300,
        demilight: 300,
        book: "normal",
        regular: "normal",
        semibold: 600,
        demibold: 600,
        extrabold: 800,
        ultrabold: 800,
        black: 900,
        heavy: 900
    },
    l.WATCH_DURATION = 10,
    t.load = function() {
        if (this.type == createjs.Types.FONTCSS) {
            var t = this._watchCSS();
            if (!t)
                return void this.AbstractLoader_load()
        } else
            this._item.src instanceof Array ? this._watchFontArray() : (t = this._defFromSrc(this._item.src),
            this._watchFont(t),
            this._injectStyleTag(this._cssFromDef(t)));
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
        this.dispatchEvent("loadstart")
    }
    ,
    t._handleTimeout = function() {
        this._stopWatching(),
        this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"))
    }
    ,
    t._createRequest = function() {
        return this._request
    }
    ,
    t.handleEvent = function(t) {
        switch (t.type) {
        case "complete":
            this._rawResult = t.target._response,
            this._result = !0,
            this._parseCSS(this._rawResult);
            break;
        case "error":
            this._stopWatching(),
            this.AbstractLoader_handleEvent(t)
        }
    }
    ,
    t._watchCSS = function() {
        var t = this._item.src;
        return t instanceof HTMLStyleElement && (this._injectCSS && !t.parentNode && (document.head || document.getElementsByTagName("head")[0]).appendChild(t),
        this._injectCSS = !1,
        t = "\n" + t.textContent),
        -1 !== t.search(/\n|\r|@font-face/i) ? (this._parseCSS(t),
        !0) : (this._request = new createjs.XHRRequest(this._item),
        !1)
    }
    ,
    t._parseCSS = function(t) {
        for (var e = /@font-face\s*\{([^}]+)}/g; ; ) {
            var i = e.exec(t);
            if (!i)
                break;
            this._watchFont(this._parseFontFace(i[1]))
        }
        this._injectStyleTag(t)
    }
    ,
    t._watchFontArray = function() {
        for (var t = this._item.src, e = "", i = t.length - 1; 0 <= i; i--) {
            var s = t[i]
              , s = "string" == typeof s ? this._defFromSrc(s) : this._defFromObj(s);
            this._watchFont(s),
            e += this._cssFromDef(s) + "\n"
        }
        this._injectStyleTag(e)
    }
    ,
    t._injectStyleTag = function(t) {
        var e, i;
        this._injectCSS && (e = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style"),
        i.type = "text/css",
        i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)),
        e.appendChild(i))
    }
    ,
    t._parseFontFace = function(t) {
        var e = this._getCSSValue(t, "font-family")
          , i = this._getCSSValue(t, "src");
        return e && i ? this._defFromObj({
            family: e,
            src: i,
            style: this._getCSSValue(t, "font-style"),
            weight: this._getCSSValue(t, "font-weight")
        }) : null
    }
    ,
    t._watchFont = function(t) {
        t && !this._faces[t.id] && (this._faces[t.id] = t,
        this._watched.push(t),
        this._count++,
        this._calculateReferenceSizes(t),
        this._startWatching())
    }
    ,
    t._startWatching = function() {
        null == this._watchInterval && (this._watchInterval = setInterval(createjs.proxy(this._watch, this), l.WATCH_DURATION))
    }
    ,
    t._stopWatching = function() {
        clearInterval(this._watchInterval),
        clearTimeout(this._loadTimeout),
        this._watchInterval = null
    }
    ,
    t._watch = function() {
        for (var t = this._watched, e = l._referenceFonts, i = t.length, s = i - 1; 0 <= s; s--)
            for (var n = t[s], a = n.refs, r = a.length - 1; 0 <= r; r--) {
                var o = this._getTextWidth(n.family + "," + e[r], n.weight, n.style);
                if (o != a[r]) {
                    var h = new createjs.Event("fileload");
                    n.type = "font-family",
                    h.item = n,
                    this.dispatchEvent(h),
                    t.splice(s, 1);
                    break
                }
            }
        i !== t.length && (h = new createjs.ProgressEvent(this._count - t.length,this._count),
        this.dispatchEvent(h)),
        0 === i && (this._stopWatching(),
        this._sendComplete())
    }
    ,
    t._calculateReferenceSizes = function(t) {
        for (var e = l._referenceFonts, i = t.refs = [], s = 0; s < e.length; s++)
            i[s] = this._getTextWidth(e[s], t.weight, t.style)
    }
    ,
    t._defFromSrc = function(t) {
        var e = /[- ._]+/g
          , i = t
          , s = null
          , n = i.search(/[?#]/)
          , n = (-1 !== n && (i = i.substr(0, n)),
        n = i.lastIndexOf("."),
        -1 !== n && (s = i.substr(n + 1),
        i = i.substr(0, n)),
        n = i.lastIndexOf("/"),
        -1 !== n && (i = i.substr(n + 1)),
        i)
          , a = n.match(l.WEIGHT_REGEX)
          , r = (a && (a = a[0],
        n = n.replace(a, ""),
        a = a.replace(e, "").toLowerCase()),
        i.match(l.STYLE_REGEX))
          , i = (r && (n = n.replace(r[0], ""),
        r = "italic"),
        n = n.replace(e, ""),
        "local('" + i.replace(e, " ") + "'), url('" + t + "')")
          , e = l.FONT_FORMAT[s];
        return e && (i += " format('" + e + "')"),
        this._defFromObj({
            family: n,
            weight: l.FONT_WEIGHT[a] || a,
            style: r,
            src: i
        })
    }
    ,
    t._defFromObj = function(t) {
        t = {
            family: t.family,
            src: t.src,
            style: t.style || "normal",
            weight: t.weight || "normal"
        };
        return t.id = t.family + ";" + t.style + ";" + t.weight,
        t
    }
    ,
    t._cssFromDef = function(t) {
        return "@font-face {\n\tfont-family: '" + t.family + "';\n\tfont-style: " + t.style + ";\n\tfont-weight: " + t.weight + ";\n\tsrc: " + t.src + ";\n}"
    }
    ,
    t._getTextWidth = function(t, e, i) {
        var s = l._ctx;
        return s.font = i + " " + e + " 72px " + t,
        s.measureText(l.sampleText).width
    }
    ,
    t._getCSSValue = function(t, e) {
        e = new RegExp(e + ":s*([^;}]+?)s*[;}]"),
        e = e.exec(t);
        return e && e[1] ? e[1] : null
    }
    ,
    createjs.FontLoader = createjs.promote(l, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        var i = t.src + ""
          , i = i.split("?")[0]
          , s = com.battleline.App.basePath;
        s && "" !== s && "./" !== s && 0 === i.indexOf(s) && (i = i.substr(s.length)),
        com.battleline.EncodedAssets[i] && (e = !1,
        i = com.battleline.EncodedAssets[i],
        t.tag = document.createElement("img"),
        t.src = i),
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "src",
        createjs.DomUtils.isImageTag(t) ? this._tag = t : createjs.DomUtils.isImageTag(t.src) ? this._tag = t.src : createjs.DomUtils.isImageTag(t.tag) && (this._tag = t.tag),
        null != this._tag ? this._preferXHR = !1 : this._tag = createjs.Elements.img(),
        this.on("initialize", this._updateXHR, this)
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.IMAGE
    }
    ,
    e.load = function() {
        var t;
        "" != this._tag.src && this._tag.complete ? this._sendComplete() : (t = this._item.crossOrigin,
        1 == t && (t = "Anonymous"),
        null == t || createjs.URLUtils.isLocal(this._item) || (this._tag.crossOrigin = t),
        this.AbstractLoader_load())
    }
    ,
    e._updateXHR = function(t) {
        t.loader.mimeType = "text/plain; charset=x-user-defined-binary",
        t.loader.setResponseType && t.loader.setResponseType("blob")
    }
    ,
    e._formatResult = function(t) {
        return this._formatImage
    }
    ,
    e._formatImage = function(t, e) {
        var i = this._tag
          , s = window.URL || window.webkitURL;
        this._preferXHR && (s ? (s = s.createObjectURL(this.getResult(!0)),
        i.src = s,
        i.addEventListener("load", this._cleanUpURL, !1),
        i.addEventListener("error", this._cleanUpURL, !1)) : i.src = this._item.src),
        i.complete ? t(i) : (i.onload = createjs.proxy(function() {
            t(this._tag),
            i.onload = i.onerror = null
        }, this),
        i.onerror = createjs.proxy(function(t) {
            e(new createjs.ErrorEvent("IMAGE_FORMAT",null,t)),
            i.onload = i.onerror = null
        }, this))
    }
    ,
    e._cleanUpURL = function(t) {
        var e = window.URL || window.webkitURL;
        e.revokeObjectURL(t.target.src)
    }
    ,
    createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.Types.JAVASCRIPT),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "src",
        this.setTag(createjs.Elements.script())
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.JAVASCRIPT
    }
    ,
    e._formatResult = function(t) {
        var e = t.getTag();
        return this._preferXHR && (e.text = t.getResult(!0)),
        e
    }
    ,
    createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.Types.JSON),
        this.resultFormatter = this._formatResult
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.JSON
    }
    ,
    e._formatResult = function(e) {
        var t = null;
        try {
            t = createjs.DataUtils.parseJSON(e.getResult(!0))
        } catch (t) {
            e = new createjs.ErrorEvent("JSON_FORMAT",null,t);
            return this._sendError(e),
            t
        }
        return t
    }
    ,
    createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !1, createjs.Types.JSONP),
        this.setTag(createjs.Elements.script()),
        this.getTag().type = "text/javascript"
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.JSONP
    }
    ,
    e.cancel = function() {
        this.AbstractLoader_cancel(),
        this._dispose()
    }
    ,
    e.load = function() {
        if (null == this._item.callback)
            throw new Error("callback is required for loading JSONP requests.");
        if (null != window[this._item.callback])
            throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
        window[this._item.callback] = createjs.proxy(this._handleLoad, this),
        createjs.DomUtils.appendToBody(this._tag),
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
        this._tag.src = this._item.src
    }
    ,
    e._handleLoad = function(t) {
        this._result = this._rawResult = t,
        this._sendComplete(),
        this._dispose()
    }
    ,
    e._handleTimeout = function() {
        this._dispose(),
        this.dispatchEvent(new createjs.ErrorEvent("timeout"))
    }
    ,
    e._dispose = function() {
        createjs.DomUtils.removeChild(this._tag),
        delete window[this._item.callback],
        clearTimeout(this._loadTimeout)
    }
    ,
    createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.Types.MANIFEST),
        this.plugins = null,
        this._manifestQueue = null
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.MANIFEST_PROGRESS = .25,
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.MANIFEST
    }
    ,
    e.load = function() {
        this.AbstractLoader_load()
    }
    ,
    e._createRequest = function() {
        var t = this._item.callback;
        this._request = new (null != t ? createjs.JSONPLoader : createjs.JSONLoader)(this._item)
    }
    ,
    e.handleEvent = function(t) {
        switch (t.type) {
        case "complete":
            return this._rawResult = t.target.getResult(!0),
            this._result = t.target.getResult(),
            this._sendProgress(i.MANIFEST_PROGRESS),
            void this._loadManifest(this._result);
        case "progress":
            return t.loaded *= i.MANIFEST_PROGRESS,
            this.progress = t.loaded / t.total,
            !isNaN(this.progress) && Infinity != this.progress || (this.progress = 0),
            void this._sendProgress(t)
        }
        this.AbstractLoader_handleEvent(t)
    }
    ,
    e.destroy = function() {
        this.AbstractLoader_destroy(),
        this._manifestQueue.close()
    }
    ,
    e._loadManifest = function(t) {
        if (t && t.manifest) {
            var e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR);
            e.on("fileload", this._handleManifestFileLoad, this),
            e.on("progress", this._handleManifestProgress, this),
            e.on("complete", this._handleManifestComplete, this, !0),
            e.on("error", this._handleManifestError, this, !0);
            for (var i = 0, s = this.plugins.length; i < s; i++)
                e.installPlugin(this.plugins[i]);
            e.loadManifest(t)
        } else
            this._sendComplete()
    }
    ,
    e._handleManifestFileLoad = function(t) {
        t.target = null,
        this.dispatchEvent(t)
    }
    ,
    e._handleManifestComplete = function(t) {
        this._loadedItems = this._manifestQueue.getItems(!0),
        this._sendComplete()
    }
    ,
    e._handleManifestProgress = function(t) {
        this.progress = t.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS,
        this._sendProgress(this.progress)
    }
    ,
    e._handleManifestError = function(t) {
        var e = new createjs.Event("fileerror");
        e.item = t.data,
        this.dispatchEvent(e)
    }
    ,
    createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractMediaLoader_constructor(t, e, createjs.Types.SOUND),
        createjs.DomUtils.isAudioTag(t) || createjs.DomUtils.isAudioTag(t.src) ? this._tag = t : createjs.DomUtils.isAudioTag(t.tag) && (this._tag = createjs.DomUtils.isAudioTag(t) ? t : t.src),
        null != this._tag && (this._preferXHR = !1)
    }
    var e = createjs.extend(t, createjs.AbstractMediaLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.SOUND
    }
    ,
    e._createTag = function(t) {
        var e = createjs.Elements.audio();
        return e.autoplay = !1,
        e.preload = "none",
        e.src = t,
        e
    }
    ,
    createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractMediaLoader_constructor(t, e, createjs.Types.VIDEO),
        createjs.DomUtils.isVideoTag(t) || createjs.DomUtils.isVideoTag(t.src) ? (this.setTag(createjs.DomUtils.isVideoTag(t) ? t : t.src),
        this._preferXHR = !1) : this.setTag(this._createTag())
    }
    var e = createjs.extend(t, createjs.AbstractMediaLoader)
      , i = t;
    e._createTag = function() {
        return createjs.Elements.video()
    }
    ,
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.VIDEO
    }
    ,
    createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.Types.SPRITESHEET),
        this._manifestQueue = null
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.SPRITESHEET_PROGRESS = .25,
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.SPRITESHEET
    }
    ,
    e.destroy = function() {
        this.AbstractLoader_destroy(),
        this._manifestQueue.close()
    }
    ,
    e._createRequest = function() {
        var t = this._item.callback;
        this._request = new (null != t ? createjs.JSONPLoader : createjs.JSONLoader)(this._item)
    }
    ,
    e.handleEvent = function(t) {
        switch (t.type) {
        case "complete":
            return this._rawResult = t.target.getResult(!0),
            this._result = t.target.getResult(),
            this._sendProgress(i.SPRITESHEET_PROGRESS),
            void this._loadManifest(this._result);
        case "progress":
            return t.loaded *= i.SPRITESHEET_PROGRESS,
            this.progress = t.loaded / t.total,
            !isNaN(this.progress) && Infinity != this.progress || (this.progress = 0),
            void this._sendProgress(t)
        }
        this.AbstractLoader_handleEvent(t)
    }
    ,
    e._loadManifest = function(t) {
        var e;
        t && t.images && (e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin),
        e.on("complete", this._handleManifestComplete, this, !0),
        e.on("fileload", this._handleManifestFileLoad, this),
        e.on("progress", this._handleManifestProgress, this),
        e.on("error", this._handleManifestError, this, !0),
        e.loadManifest(t.images))
    }
    ,
    e._handleManifestFileLoad = function(t) {
        var e, i = t.result;
        null != i && (e = this.getResult().images,
        t = e.indexOf(t.item.src),
        e[t] = i)
    }
    ,
    e._handleManifestComplete = function(t) {
        this._result = new createjs.SpriteSheet(this._result),
        this._loadedItems = this._manifestQueue.getItems(!0),
        this._sendComplete()
    }
    ,
    e._handleManifestProgress = function(t) {
        this.progress = t.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS,
        this._sendProgress(this.progress)
    }
    ,
    e._handleManifestError = function(t) {
        var e = new createjs.Event("fileerror");
        e.item = t.data,
        this.dispatchEvent(e)
    }
    ,
    createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.Types.SVG),
        this.resultFormatter = this._formatResult,
        this._tagSrcAttribute = "data",
        e ? this.setTag(createjs.Elements.svg()) : (this.setTag(createjs.Elements.object()),
        this.getTag().type = "image/svg+xml")
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.SVG
    }
    ,
    e._formatResult = function(t) {
        var e, i = createjs.DataUtils.parseXML(t.getResult(!0)), t = t.getTag();
        return !this._preferXHR && document.body.contains(t) && document.body.removeChild(t),
        null != i.documentElement ? (e = i.documentElement,
        document.importNode && (e = document.importNode(e, !0)),
        t.appendChild(e),
        t) : i
    }
    ,
    createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
}(),
this.createjs = this.createjs || {},
!function() {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.Types.XML),
        this.resultFormatter = this._formatResult
    }
    var e = createjs.extend(t, createjs.AbstractLoader)
      , i = t;
    i.canLoadItem = function(t) {
        return t.type == createjs.Types.XML
    }
    ,
    e._formatResult = function(t) {
        return createjs.DataUtils.parseXML(t.getResult(!0))
    }
    ,
    createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
}();
var cjs = createjs, images = (createjs.Text.strokeEnabled = !0,
createjs.Text.textShadowEnabled = !0,
images || []), AdobeAn, cjs, AdobeAn, cjs, AdobeAn, com, com, com, com, com, com, com;
function importAdobeAnimateLibrary(t, e) {
    var i, s = AdobeAn || {};
    for (i in s.compositions) {
        var n = s.compositions[i]
          , a = n.getLibrary();
        if (a[t])
            return window[e] = a,
            a.img = n.getImages(),
            a.ss = n.getSpriteSheet(),
            a.name = t,
            void (a.namespace = e)
    }
    console.warn("Could not find Adobe Animate Libary with name", t)
}
createjs.useOptimizedHitTesting = !1,
createjs.warnedUnoptimizedHitTesting = !1,
createjs.Text.fontAdjustTable = {},
createjs.Text.fontAdjustXBaseTable = {},
createjs.Text.fontAdjustYBaseTable = {},
createjs.Text.fontAdjustYFactorTable = {},
createjs.Text.registerFont = function(t, e, i, s, n, a, r) {
    s = s || 0,
    n = n || 0,
    a = a || 0,
    !0 !== r && (r = !1),
    !r && 0 === s && 0 === n && 0 === a && -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && console && (console.warn ? console.warn("On Firefox, fonts render out of alignment, are you sure you don't want to supply some adjustments?") : console.log && console.log("On Firefox, fonts render out of alignment, are you sure you don't want to supply some adjustments?"));
    r = t + "-" + e + "-" + i;
    createjs.Text.fontAdjustTable[r] = !0,
    createjs.Text.fontAdjustXBaseTable[r] = s,
    createjs.Text.fontAdjustYBaseTable[r] = n,
    createjs.Text.fontAdjustYFactorTable[r] = a
}
,
createjs.Text.prototype.draw = function(t, e) {
    return this.DisplayObject_draw(t, e) || (e = this.color || "#000",
    this.outline ? (t.strokeStyle = e,
    t.lineWidth = +this.outline) : (this.stroke && (t.strokeStyle = this.strokeStyle,
    t.lineWidth = +this.stroke),
    t.fillStyle = e),
    this._drawText(this._prepContext(t))),
    !0
}
,
createjs.Text.prototype._drawTextLine = function(t, e, i) {
    var s = 2
      , n = 2
      , a = 0;
    if (!0 !== this.lookedUpTable) {
        this.lookedUpTable = !0;
        for (var r = this.font.substr(this.font.lastIndexOf("px ") + 3); 0 <= r.indexOf('"'); )
            r = r.replace('"', "");
        for (; 0 <= r.indexOf("'"); )
            r = r.replace("'", "");
        var o = "normal"
          , h = ((0 === this.font.indexOf("bold ") || 0 <= this.font.indexOf(" bold ")) && (o = "bold"),
        "normal")
          , o = ((0 === this.font.indexOf("italic ") || 0 <= this.font.indexOf(" italic ")) && (h = "italic"),
        r + "-" + o + "-" + h)
          , h = createjs.Text.fontAdjustTable
          , l = createjs.Text.fontAdjustXBaseTable
          , c = createjs.Text.fontAdjustYBaseTable
          , u = createjs.Text.fontAdjustYFactorTable;
        this.tableAdjustXBase = 0,
        this.tableAdjustYBase = 0,
        this.tableAdjustYFactor = 0,
        h[o] ? (l[o] && (this.tableAdjustXBase = l[o]),
        c[o] && (this.tableAdjustYBase = c[o]),
        u[o] && (this.tableAdjustYFactor = u[o])) : console && (console.warn ? console.warn("Missing createjs.Text.fontAdjust table entries for " + o + " in font str " + this.font) : console.log && console.log("Missing createjs.Text.fontAdjust table entries for " + o + " in font str " + this.font))
    }
    s += this.tableAdjustXBase,
    n += this.tableAdjustYBase,
    a += this.tableAdjustYFactor;
    var d, h = (this.renderAdjustXBase || 0) + s, l = (this.renderAdjustYBase || 0) + n, c = (this.renderAdjustYFactor || 0) + a, u = c ? this.lineHeight || this.getMeasuredLineHeight() : 0, o = h, s = l + u * c;
    createjs.Text.textShadowEnabled && this.textShadowStyle && (n = this.textShadowOffsetX,
    a = this.textShadowOffsetY,
    null == n && (n = 0),
    null == a && (a = 6),
    t.fillStyle = this.textShadowStyle,
    t.fillText(e, 0 + o + n, i + s + a, this.maxWidth || 65535),
    d = this.color || "#000",
    t.fillStyle = d),
    this.outline ? t.strokeText(e, 0 + o, i + s, this.maxWidth || 65535) : (createjs.Text.strokeEnabled && this.stroke && (this.strokeLineCap ? t.lineCap = this.strokeLineCap : t.lineCap = "round",
    this.strokeLineJoin ? t.lineJoin = this.strokeLineJoin : t.lineJoin = "round",
    t.fillStyle = this.strokeStyle,
    t.fillText(e, 0 + o, i + s, this.maxWidth || 65535),
    t.strokeText(e, 0 + o, i + s, this.maxWidth || 65535),
    d = this.color || "#000",
    t.fillStyle = d),
    t.fillText(e, 0 + o, i + s, this.maxWidth || 65535))
}
,
!function(t, i) {
    var e = {}
      , s = {}
      , n = {};
    e.ssMetadata = [],
    (e.AudioLib = function(t, e, i) {
        this.initialize(t, e, i, {})
    }
    ).prototype = t = new t.MovieClip,
    t.nominalBounds = null,
    e.properties = {
        id: "BDE07C6BDA3FBE47B9D095E300A6798E",
        width: 1,
        height: 1,
        fps: 30,
        color: "#444444",
        opacity: 1,
        manifest: [{
            src: "sounds/ball_bounce_03.mp3",
            id: "ball_bounce_03"
        }, {
            src: "sounds/ball_bounce_04.mp3",
            id: "ball_bounce_04"
        }, {
            src: "sounds/ball_bounce_05.mp3",
            id: "ball_bounce_05"
        }, {
            src: "sounds/ball_bounce_06.mp3",
            id: "ball_bounce_06"
        }, {
            src: "sounds/ball_bounce_final.mp3",
            id: "ball_bounce_final"
        }, {
            src: "sounds/board_highlight_01.mp3",
            id: "board_highlight_01"
        }, {
            src: "sounds/board_highlight_02.mp3",
            id: "board_highlight_02"
        }, {
            src: "sounds/board_highlight_03.mp3",
            id: "board_highlight_03"
        }, {
            src: "sounds/board_highlight_04.mp3",
            id: "board_highlight_04"
        }, {
            src: "sounds/board_highlight_05.mp3",
            id: "board_highlight_05"
        }, {
            src: "sounds/board_highlight_06.mp3",
            id: "board_highlight_06"
        }, {
            src: "sounds/chip_pickup_chip_pile_01.mp3",
            id: "chip_pickup_chip_pile_01"
        }, {
            src: "sounds/chip_pickup_chip_pile_02.mp3",
            id: "chip_pickup_chip_pile_02"
        }, {
            src: "sounds/chip_pickup_chip_pile_03.mp3",
            id: "chip_pickup_chip_pile_03"
        }, {
            src: "sounds/chip_put_down_chip_04.mp3",
            id: "chip_put_down_chip_04"
        }, {
            src: "sounds/chip_put_down_chip_05.mp3",
            id: "chip_put_down_chip_05"
        }, {
            src: "sounds/chip_put_down_chip_07.mp3",
            id: "chip_put_down_chip_07"
        }, {
            src: "sounds/chip_put_down_chip_08.mp3",
            id: "chip_put_down_chip_08"
        }, {
            src: "sounds/chip_put_down_table_01.mp3",
            id: "chip_put_down_table_01"
        }, {
            src: "sounds/chip_put_down_table_02.mp3",
            id: "chip_put_down_table_02"
        }, {
            src: "sounds/chip_put_down_table_03.mp3",
            id: "chip_put_down_table_03"
        }, {
            src: "sounds/chip_put_down_table_04.mp3",
            id: "chip_put_down_table_04"
        }, {
            src: "sounds/chip_put_down_table_05.mp3",
            id: "chip_put_down_table_05"
        }, {
            src: "sounds/chip_put_down_table_06.mp3",
            id: "chip_put_down_table_06"
        }, {
            src: "sounds/chip_put_down_table_07.mp3",
            id: "chip_put_down_table_07"
        }, {
            src: "sounds/chip_put_down_table_08.mp3",
            id: "chip_put_down_table_08"
        }, {
            src: "sounds/clear_01.mp3",
            id: "clear_01"
        }, {
            src: "sounds/clear_02.mp3",
            id: "clear_02"
        }, {
            src: "sounds/clear_03.mp3",
            id: "clear_03"
        }, {
            src: "sounds/dealer_wins.mp3",
            id: "dealer_wins"
        }, {
            src: "sounds/menu_back_01.mp3",
            id: "menu_back_01"
        }, {
            src: "sounds/menu_back_02.mp3",
            id: "menu_back_02"
        }, {
            src: "sounds/menu_back_03.mp3",
            id: "menu_back_03"
        }, {
            src: "sounds/menu_forward_01.mp3",
            id: "menu_forward_01"
        }, {
            src: "sounds/menu_forward_02.mp3",
            id: "menu_forward_02"
        }, {
            src: "sounds/menu_forward_03.mp3",
            id: "menu_forward_03"
        }, {
            src: "sounds/player_wins.mp3",
            id: "player_wins"
        }, {
            src: "sounds/spin_wheel.mp3",
            id: "spin_wheel"
        }, {
            src: "sounds/undo_01.mp3",
            id: "undo_01"
        }, {
            src: "sounds/undo_02.mp3",
            id: "undo_02"
        }, {
            src: "sounds/table_spinning.mp3",
            id: "table_spinning"
        }],
        preloads: []
    },
    (e.Stage = function(t) {
        createjs.Stage.call(this, t)
    }
    ).prototype = t = new createjs.Stage,
    t.setAutoPlay = function(t) {
        this.tickEnabled = t
    }
    ,
    t.play = function() {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ,
    t.stop = function(t) {
        t && this.seek(t),
        this.tickEnabled = !1
    }
    ,
    t.seek = function(t) {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndStop(e.properties.fps * t / 1e3)
    }
    ,
    t.getDuration = function() {
        return this.getChildAt(0).totalFrames / e.properties.fps * 1e3
    }
    ,
    t.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / e.properties.fps * 1e3
    }
    ,
    i.bootcompsLoaded = i.bootcompsLoaded || [],
    i.bootstrapListeners || (i.bootstrapListeners = []),
    i.bootstrapCallback = function(t) {
        if (i.bootstrapListeners.push(t),
        0 < i.bootcompsLoaded.length)
            for (var e = 0; e < i.bootcompsLoaded.length; ++e)
                t(i.bootcompsLoaded[e])
    }
    ,
    i.compositions = i.compositions || {},
    i.compositions.BDE07C6BDA3FBE47B9D095E300A6798E = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return e
        },
        getSpriteSheet: function() {
            return s
        },
        getImages: function() {
            return n
        }
    },
    i.compositionLoaded = function(t) {
        i.bootcompsLoaded.push(t);
        for (var e = 0; e < i.bootstrapListeners.length; e++)
            i.bootstrapListeners[e](t)
    }
    ,
    i.getComposition = function(t) {
        return i.compositions[t]
    }
}(cjs = cjs || {}, AdobeAn = AdobeAn || {}),
importAdobeAnimateLibrary("AudioLib", "audioLib"),
!function(s, i) {
    var t, n = {}, e = {}, a = {};
    function r() {
        var t = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        return t.gotoAndStop(this.currentFrame),
        t.paused = this.paused,
        t.framerate = this.framerate,
        t
    }
    function o(t, e, i) {
        t = s.extend(t, s.MovieClip);
        return t.clone = r,
        t.nominalBounds = e,
        t.frameBounds = i,
        t
    }
    n.ssMetadata = [],
    (n.ball = function() {
        this.initialize(a.ball)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,23,23),
    (n.bg_game = function() {
        this.initialize(a.bg_game)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,900,360),
    (n.bg_overlay = function() {
        this.initialize(a.bg_overlay)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,1300,1300),
    (n.bg_shadow = function() {
        this.initialize(a.bg_shadow)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,32,26),
    (n.board = function() {
        this.initialize(a.board)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,1330,584),
    (n.board_numbers_highlight = function() {
        this.initialize(a.board_numbers_highlight)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,92,116),
    (n.board_range_highlight = function() {
        this.initialize(a.board_range_highlight)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,184,116),
    (n.board_range_wide_highlight = function() {
        this.initialize(a.board_range_wide_highlight)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,367,116),
    (n.board_zeros_highlight = function() {
        this.initialize(a.board_zeros_highlight)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,133,174),
    (n.chip_1 = function() {
        this.initialize(a.chip_1)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_10 = function() {
        this.initialize(a.chip_10)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_100 = function() {
        this.initialize(a.chip_100)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_100k = function() {
        this.initialize(a.chip_100k)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_1M = function() {
        this.initialize(a.chip_1M)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_250k = function() {
        this.initialize(a.chip_250k)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_25k = function() {
        this.initialize(a.chip_25k)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_500 = function() {
        this.initialize(a.chip_500)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_500k = function() {
        this.initialize(a.chip_500k)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_5k = function() {
        this.initialize(a.chip_5k)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_credits = function() {
        this.initialize(a.chip_credits)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.chip_stack_unselected_dimmer = function() {
        this.initialize(a.chip_stack_unselected_dimmer)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,267,267),
    (n.clear = function() {
        this.initialize(a.clear)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,158,158),
    (n.home = function() {
        this.initialize(a.home)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.intro = function() {
        this.initialize(a.intro)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,1300,720),
    (n.maximize = function() {
        this.initialize(a.maximize)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.minimize = function() {
        this.initialize(a.minimize)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.more_games = function() {
        this.initialize(a.more_games)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.new_game = function() {
        this.initialize(a.new_game)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.new_record = function() {
        this.initialize(a.new_record)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,206,232),
    (n.numbers_box = function() {
        this.initialize(a.numbers_box)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,54,584),
    (n.play = function() {
        this.initialize(a.play)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.rate_us = function() {
        this.initialize(a.rate_us)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,734,126),
    (n.resume = function() {
        this.initialize(a.resume)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.screen_overlay_dark = function() {
        this.initialize(a.screen_overlay_dark)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.sound_off = function() {
        this.initialize(a.sound_off)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.sound_on = function() {
        this.initialize(a.sound_on)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.sparkle_large = function() {
        this.initialize(a.sparkle_large)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,90,80),
    (n.undo = function() {
        this.initialize(a.undo)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,158,158),
    (n.wheel_button = function() {
        this.initialize(a.wheel_button)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,275,275),
    (n.wheel_highlight = function() {
        this.initialize(a.wheel_highlight)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,80,180),
    (n.wheel_inner = function() {
        this.initialize(a.wheel_inner)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,609,609),
    (n.wheel_outer = function() {
        this.initialize(a.wheel_outer)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,987,987),
    (n.window = function() {
        this.initialize(a.window)
    }
    ).prototype = t = new s.Bitmap,
    t.nominalBounds = new s.Rectangle(0,0,1010,800),
    (n.WinningNumbersTextSwitch = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.text_txt = new s.Text("00","bold 30px 'Noto Serif'"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 32,
        this.text_txt.lineWidth = 41,
        this.text_txt.parent = this,
        this.text_txt.setTransform(22.5, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.WinningNumbersTextSwitch, new s.Rectangle(0,0,45,45), null),
    (n.WinningNumbersBoxArt = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.numbers_box,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.WinningNumbersBoxArt, new s.Rectangle(0,0,54,584), null),
    (n.WinMenuTitleText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("Win $999,999,000,000","bold 80px 'Noto Serif'","#FFCC33"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 88,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.WinMenuTitleText, new s.Rectangle(0,0,1600,143.2), null),
    (n.WheelBase = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.wheel_outer,
        this.instance.parent = this,
        this.instance.setTransform(-494, -494),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.WheelBase, new s.Rectangle(-494,-494,987,987), null),
    (n.Wheel = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.wheel_inner,
        this.instance.parent = this,
        this.instance.setTransform(-305, -305),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Wheel, new s.Rectangle(-305,-305,609,609), null),
    (n.UndoButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.undo,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.UndoButtonContent, new s.Rectangle(0,0,158,158), null),
    (n.StackDimmer = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.chip_stack_unselected_dimmer,
        this.instance.parent = this,
        this.instance.setTransform(-1, -1),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.StackDimmer, new s.Rectangle(-1,-1,267,267), null),
    (n.SpinTitleText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("Dealer Wins!","bold 80px 'Noto Serif'","#FFCC33"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 88,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.SpinTitleText, new s.Rectangle(0,0,1600,106.6), null),
    (n.SpinButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.wheel_button,
        this.instance.parent = this,
        this.instance_1 = new n.wheel_button,
        this.instance_1.parent = this,
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }
    ).prototype = o(n.SpinButtonContent, new s.Rectangle(0,0,275,275), null),
    (n.SparkleShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.sparkle_large,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.SparkleShape, new s.Rectangle(0,0,90,80), null),
    (n.RouletteWheelHighlightMC = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.wheel_highlight,
        this.instance.parent = this,
        this.instance.setTransform(-40, -333),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.RouletteWheelHighlightMC, new s.Rectangle(-40,-333,124.5,461.1), null),
    (n.ResumeButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.resume,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.ResumeButtonContent, new s.Rectangle(0,0,360,120), null),
    (n.RateUsButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.rate_us,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.RateUsButtonContent, new s.Rectangle(0,0,734,126), null),
    (n.PlayButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.play,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.PlayButtonContent, new s.Rectangle(0,0,360,120), null),
    (n.PlaceYourBetsText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.text_txt = new s.Text("Place Your Bets","bold 96px 'Noto Serif'","#FFFFFF"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 105,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.PlaceYourBetsText, new s.Rectangle(0,0,1600,147.4), null),
    (n.OutOfCreditsText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("Out of Credits","bold 80px 'Noto Serif'","#FFFFFF"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 88,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.OutOfCreditsText, new s.Rectangle(0,0,1600,140.5), null),
    (n.NewRecord = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.new_record,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.NewRecord, new s.Rectangle(0,0,206,232), null),
    (n.NewGameButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.new_game,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.NewGameButtonContent, new s.Rectangle(0,0,360,120), null),
    (n.MuteToggleButtonContentSoundOn = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.sound_on,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.MuteToggleButtonContentSoundOn, new s.Rectangle(0,0,110,110), null),
    (n.MuteToggleButtonContentSoundOff = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickChildren = this.tickEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.sound_off,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.MuteToggleButtonContentSoundOff, new s.Rectangle(0,0,110,110), null),
    (n.MoreGamesButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.more_games,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.MoreGamesButtonContent, new s.Rectangle(0,0,360,120), null),
    (n.LoseMenuTitleText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("Dealer Wins!","bold 80px 'Noto Serif'","#FFFFFF"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 88,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.LoseMenuTitleText, new s.Rectangle(0,0,1600,106.6), null),
    (n.Intro = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.intro,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Intro, new s.Rectangle(0,0,1300,720), null),
    (n.HomeButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickChildren = this.tickEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.home,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.HomeButtonContent, new s.Rectangle(0,0,110,110), null),
    (n.HitAreaPartial = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.alpha = 1,
            this.isHitArea = !0,
            this.hitRect = new createjs.Rectangle(0,0,100,100),
            this.setBounds(0, 0, 100, 100),
            this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.shape = new s.Shape,
        this.shape.graphics.f("#FF00FF").s().dr(-50, -50, 100, 100),
        this.shape.setTransform(50, 50),
        this.timeline.addTween(s.Tween.get(this.shape).wait(1))
    }
    ).prototype = o(n.HitAreaPartial, new s.Rectangle(0,0,100,100), null),
    (n.HitAreaCircle = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.alpha = 1,
            this.isHitArea = !0,
            this.parent.hitArea = this,
            this.hitCircle = {
                x: 50,
                y: 50,
                radius: 50
            },
            this.setBounds(0, 0, 100, 100),
            this.visible = this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.shape = new s.Shape,
        this.shape.graphics.f("#FF00FF").s().de(-77.8, -77.8, 155.7, 155.7),
        this.shape.setTransform(50, 50, .642, .642),
        this.timeline.addTween(s.Tween.get(this.shape).wait(1))
    }
    ).prototype = o(n.HitAreaCircle, new s.Rectangle(0,0,100,100), null),
    (n.HitArea = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.alpha = 1,
            this.parent.hitArea = this,
            this.isHitArea = !0,
            this.hitRect = new createjs.Rectangle(0,0,100,100),
            this.setBounds(0, 0, 100, 100),
            this.visible = this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.shape = new s.Shape,
        this.shape.graphics.f("#FF00FF").s().dr(-50, -50, 100, 100),
        this.shape.setTransform(50, 50),
        this.timeline.addTween(s.Tween.get(this.shape).wait(1))
    }
    ).prototype = o(n.HitArea, new s.Rectangle(0,0,100,100), null),
    (n.FullscreenToggleButtonContentMinimize = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickChildren = this.tickEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.minimize,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.FullscreenToggleButtonContentMinimize, new s.Rectangle(0,0,110,110), null),
    (n.FullscreenToggleButtonContentMaximize = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.maximize,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.FullscreenToggleButtonContentMaximize, new s.Rectangle(0,0,110,110), null),
    (n.DimmerDarkShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.screen_overlay_dark,
        this.instance.parent = this,
        this.instance.setTransform(-800, -600),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.DimmerDarkShape, new s.Rectangle(-800,-600,1600,1200), null),
    (n.ClearButtonContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.clear,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.ClearButtonContent, new s.Rectangle(0,0,158,158), null),
    (n.ChipEmpty = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1))
    }
    ).prototype = o(n.ChipEmpty, null, null),
    (n.Chip1000000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_1M,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip1000000, new s.Rectangle(0,0,262,262), null),
    (n.Chip500000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_500k,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip500000, new s.Rectangle(0,0,262,262), null),
    (n.Chip250000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_250k,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip250000, new s.Rectangle(0,0,262,262), null),
    (n.Chip100000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_100k,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip100000, new s.Rectangle(0,0,262,262), null),
    (n.Chip25000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_25k,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip25000, new s.Rectangle(0,0,262,262), null),
    (n.Chip5000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_5k,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip5000, new s.Rectangle(0,0,262,262), null),
    (n.Chip1000 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1))
    }
    ).prototype = o(n.Chip1000, null, null),
    (n.Chip500 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_500,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip500, new s.Rectangle(0,0,262,262), null),
    (n.Chip100 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_100,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip100, new s.Rectangle(0,0,262,262), null),
    (n.Chip10 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_10,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip10, new s.Rectangle(0,0,262,262), null),
    (n.Chip1 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_1,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip1, new s.Rectangle(0,0,262,262), null),
    (n.Chip0 = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.chip_credits,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Chip0, new s.Rectangle(0,0,262,262), null),
    (n.BoardSpot = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.shape = new s.Shape,
        this.shape.graphics.f("#FF00FF").s().dr(-6, -6, 12, 12),
        this.timeline.addTween(s.Tween.get(this.shape).wait(1))
    }
    ).prototype = o(n.BoardSpot, new s.Rectangle(-6,-6,12,12), null),
    (n.BoardShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.board,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BoardShape, new s.Rectangle(0,0,1330,584), null),
    (n.BoardHighlightZerosShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.board_zeros_highlight,
        this.instance.parent = this,
        this.instance.setTransform(-3, -2),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BoardHighlightZerosShape, new s.Rectangle(-3,-2,133,174), null),
    (n.BoardHighlightRangeWideShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.board_range_wide_highlight,
        this.instance.parent = this,
        this.instance.setTransform(-2, -2),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BoardHighlightRangeWideShape, new s.Rectangle(-2,-2,367,116), null),
    (n.BoardHighlightRangeShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.board_range_highlight,
        this.instance.parent = this,
        this.instance.setTransform(-2, -2),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BoardHighlightRangeShape, new s.Rectangle(-2,-2,184,116), null),
    (n.BoardHighlightNumbersShape = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.board_numbers_highlight,
        this.instance.parent = this,
        this.instance.setTransform(-2, -2),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BoardHighlightNumbersShape, new s.Rectangle(-2,-2,92,116), null),
    (n.BoardClipChips = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseEnabled = !1,
            this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1))
    }
    ).prototype = o(n.BoardClipChips, null, null),
    (n.BgShadowBottom = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.bg_shadow,
        this.instance.parent = this,
        this.instance.setTransform(0, 19, 50.011, 1, 0, 180, 0),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BgShadowBottom, new s.Rectangle(0,-7,1600.4,26), null),
    (n.BgShadow = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.bg_shadow,
        this.instance.parent = this,
        this.instance.setTransform(0, -20, 50, 1),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BgShadow, new s.Rectangle(0,-20,1600,26), null),
    (n.BgOverlay = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.bg_overlay,
        this.instance.parent = this,
        this.instance.setTransform(-2600, -2600, 4, 4),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.BgOverlay, new s.Rectangle(-2600,-2600,5200,5200), null),
    (n.BetTotalText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("$000,000,000","bold 62px 'Noto Serif'","#FFCC33"),
        this.text_txt.name = "text_txt",
        this.text_txt.textAlign = "center",
        this.text_txt.lineHeight = 66,
        this.text_txt.lineWidth = 1596,
        this.text_txt.parent = this,
        this.text_txt.setTransform(800, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.BetTotalText, new s.Rectangle(0,0,1600,112.9), null),
    (n.BankTotalText = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_txt = new s.Text("$000,000,000","bold 52px 'Noto Serif'","#FFFFFF"),
        this.text_txt.name = "text_txt",
        this.text_txt.lineHeight = 56,
        this.text_txt.lineWidth = 673,
        this.text_txt.parent = this,
        this.text_txt.setTransform(2, 2),
        this.timeline.addTween(s.Tween.get(this.text_txt).wait(1))
    }
    ).prototype = o(n.BankTotalText, new s.Rectangle(0,0,677.5,90.9), null),
    (n.Ball = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.ball,
        this.instance.parent = this,
        this.instance.setTransform(-13, -11),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.Ball, new s.Rectangle(-13,-11,23,23), null),
    (n.WinningNumbersBox = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.n9_mc = new n.WinningNumbersTextSwitch,
        this.n9_mc.name = "n9_mc",
        this.n9_mc.parent = this,
        this.n9_mc.setTransform(-303, 311, 1, 1, 0, 0, 0, -307.4, -168.8),
        this.timeline.addTween(s.Tween.get(this.n9_mc).wait(1)),
        this.n7_mc = new n.WinningNumbersTextSwitch,
        this.n7_mc.name = "n7_mc",
        this.n7_mc.parent = this,
        this.n7_mc.setTransform(-303, 205.5, 1, 1, 0, 0, 0, -307.4, -168.8),
        this.timeline.addTween(s.Tween.get(this.n7_mc).wait(1)),
        this.n5_mc = new n.WinningNumbersTextSwitch,
        this.n5_mc.name = "n5_mc",
        this.n5_mc.parent = this,
        this.n5_mc.setTransform(-303, 100, 1, 1, 0, 0, 0, -307.4, -168.8),
        this.timeline.addTween(s.Tween.get(this.n5_mc).wait(1)),
        this.n3_mc = new n.WinningNumbersTextSwitch,
        this.n3_mc.name = "n3_mc",
        this.n3_mc.parent = this,
        this.n3_mc.setTransform(-303, -5.5, 1, 1, 0, 0, 0, -307.4, -168.8),
        this.timeline.addTween(s.Tween.get(this.n3_mc).wait(1)),
        this.n1_mc = new n.WinningNumbersTextSwitch,
        this.n1_mc.name = "n1_mc",
        this.n1_mc.parent = this,
        this.n1_mc.setTransform(-303, -111, 1, 1, 0, 0, 0, -307.4, -168.8),
        this.timeline.addTween(s.Tween.get(this.n1_mc).wait(1)),
        this.n10_mc = new n.WinningNumbersTextSwitch,
        this.n10_mc.name = "n10_mc",
        this.n10_mc.parent = this,
        this.n10_mc.setTransform(-24.7, 464.9, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n10_mc).wait(1)),
        this.n8_mc = new n.WinningNumbersTextSwitch,
        this.n8_mc.name = "n8_mc",
        this.n8_mc.parent = this,
        this.n8_mc.setTransform(-24.7, 359.2, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n8_mc).wait(1)),
        this.n6_mc = new n.WinningNumbersTextSwitch,
        this.n6_mc.name = "n6_mc",
        this.n6_mc.parent = this,
        this.n6_mc.setTransform(-24.7, 253.7, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n6_mc).wait(1)),
        this.n4_mc = new n.WinningNumbersTextSwitch,
        this.n4_mc.name = "n4_mc",
        this.n4_mc.parent = this,
        this.n4_mc.setTransform(-24.7, 148.2, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n4_mc).wait(1)),
        this.n2_mc = new n.WinningNumbersTextSwitch,
        this.n2_mc.name = "n2_mc",
        this.n2_mc.parent = this,
        this.n2_mc.setTransform(-24.7, 42.7, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n2_mc).wait(1)),
        this.n0_mc = new n.WinningNumbersTextSwitch,
        this.n0_mc.name = "n0_mc",
        this.n0_mc.parent = this,
        this.n0_mc.setTransform(-24.7, -62.8, 1, 1, 0, 0, 0, -29.1, -67.8),
        this.timeline.addTween(s.Tween.get(this.n0_mc).wait(1)),
        this.art_mc = new n.WinningNumbersBoxArt,
        this.art_mc.name = "art_mc",
        this.art_mc.parent = this,
        this.art_mc.setTransform(13.8, 146.1, 1, 1, 0, 0, 0, 13.5, 146.1),
        this.timeline.addTween(s.Tween.get(this.art_mc).wait(1))
    }
    ).prototype = o(n.WinningNumbersBox, new s.Rectangle(.3,0,54,584), null),
    (n.WheelHighlight = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.instance = new n.RouletteWheelHighlightMC,
        this.instance.parent = this,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.WheelHighlight, new s.Rectangle(-40,-333,80,180), null),
    (n.UndoButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitAreaCircle,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 1.4, 1.4),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.UndoButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,158,158),
    (n.StackDimmerAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 5,
            toOn: 6
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_5 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6)),
        this.dimmer_mc = new n.StackDimmer,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(133.5, 133.5, 1, 1, 0, 0, 0, 132.5, 132.5),
        this.dimmer_mc.alpha = .5,
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).to({
            alpha: 0
        }, 5).to({
            alpha: .5
        }, 5).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,267,267),
    (n.SpinButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitAreaCircle,
        this.instance.parent = this,
        this.instance.setTransform(14.2, 3.9, 2.58, 2.58, 0, 0, 0, .1, .1),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.SpinButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,275,275),
    (n.Sparkle = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_29 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).wait(29).call(this.frame_29).wait(1)),
        this.instance = new n.SparkleShape,
        this.instance.parent = this,
        this.instance.setTransform(45, 40, 1, 1, 0, 0, 0, 45, 40),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 7).to({
            scaleX: .5,
            scaleY: .5,
            alpha: 0
        }, 21).wait(2))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,90,80),
    (n.ResumeButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 3.4, 1.02),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.ResumeButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.RateUsButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(6, .1, 7.28, 1.2, 0, 0, 0, 0, .1),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.RateUsButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,734,126),
    (n.PopupPanelBackground = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.tickChildren = this.tickEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(4.9, 2, 9.81, 7.718, 0, 0, 0, .5, .3),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(1)),
        this.instance_1 = new n.window,
        this.instance_1.parent = this,
        this.instance_1.setTransform(-20, -8),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(1))
    }
    ).prototype = o(n.PopupPanelBackground, new s.Rectangle(-20,-8,1010,800), null),
    (n.PlayButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 3.4, 1.02),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.PlayButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.PlaceYourBetsTitle = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop(),
            this.visible = !0,
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_7 = function() {
            this.stop(),
            this.visible = !1,
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_8 = function() {
            this.visible = !0,
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7)),
        this.holder_mc = new n.PlaceYourBetsText,
        this.holder_mc.name = "holder_mc",
        this.holder_mc.parent = this,
        this.holder_mc.setTransform(314.4, 43.9, 1, 1, 0, 0, 0, 314.4, 43.9),
        this.timeline.addTween(s.Tween.get(this.holder_mc).to({
            alpha: 0
        }, 7).to({
            y: -22.4
        }, 1).to({
            y: 43.9,
            alpha: 1
        }, 6).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,147.4),
    (n.NewRecordDisplay = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickEnabled = this.tickChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.score_txt = new s.Text("$5,000!","bold 80px 'Noto Serif'","#FFCC33"),
        this.score_txt.name = "score_txt",
        this.score_txt.textAlign = "center",
        this.score_txt.lineHeight = 88,
        this.score_txt.lineWidth = 1596,
        this.score_txt.parent = this,
        this.score_txt.setTransform(800, 115.5),
        this.timeline.addTween(s.Tween.get(this.score_txt).wait(1)),
        this.instance = new n.NewRecord,
        this.instance.parent = this,
        this.instance.setTransform(800, 46.8, .8, .8, 0, 0, 0, 103, 116),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.NewRecordDisplay, new s.Rectangle(0,-46,1600,277.4), null),
    (n.NewGameButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 3.4, 1.02),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.NewGameButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.MuteToggleButton = function(t, e, i) {
        this.initialize(t, e, i, {
            "up#0": 0,
            "over#0": 1,
            "down#0": 2,
            "disabled#0": 3,
            "up#1": 4,
            "over#1": 5,
            "down#1": 6,
            "disabled#1": 7
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.frame_3 = function() {
            this.stop()
        }
        ,
        this.frame_4 = function() {
            this.stop()
        }
        ,
        this.frame_5 = function() {
            this.stop()
        }
        ,
        this.frame_6 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(12.1, 6, .92, .92, 0, 0, 0, .1, 0),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(8)),
        this.instance_1 = new n.MuteToggleButtonContentSoundOn,
        this.instance_1.parent = this,
        this.instance_2 = new n.MuteToggleButtonContentSoundOff,
        this.instance_2.parent = this,
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 4).wait(4))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.MoreGamesButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 3.4, 1.02),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.MoreGamesButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,360,120),
    (n.LoseMenuClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.title_mc = new n.LoseMenuTitleText,
        this.title_mc.name = "title_mc",
        this.title_mc.parent = this,
        this.title_mc.setTransform(208.3, 221.5, 1, 1, 0, 0, 0, 208.3, 41.5),
        this.timeline.addTween(s.Tween.get(this.title_mc).wait(1))
    }
    ).prototype = o(n.LoseMenuClip, new s.Rectangle(0,0,1600,286.6), null),
    (n.IntroMenuSparkles = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.frame_80 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(35)),
        this.instance = new n.Sparkle,
        this.instance.parent = this,
        this.instance.setTransform(305.7, 237.5, 1, 1, 0, 0, 0, 45.1, 40),
        this.instance._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(80).to({
            _off: !1
        }, 0).wait(35)),
        this.instance_1 = new n.Sparkle,
        this.instance_1.parent = this,
        this.instance_1.setTransform(304.5, 533.9, 1, 1, 0, 0, 0, 45.1, 40),
        this.instance_1._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(76).to({
            _off: !1
        }, 0).wait(39)),
        this.instance_2 = new n.Sparkle,
        this.instance_2.parent = this,
        this.instance_2.setTransform(442.7, 403.5, 1, 1, 0, 0, 0, 45, 39.9),
        this.instance_2._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_2).wait(72).to({
            _off: !1
        }, 0).wait(43)),
        this.instance_3 = new n.Sparkle,
        this.instance_3.parent = this,
        this.instance_3.setTransform(807.8, 345.3, 1, 1, 0, 0, 0, 45.1, 40),
        this.instance_3._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_3).wait(68).to({
            _off: !1
        }, 0).wait(47)),
        this.instance_4 = new n.Sparkle,
        this.instance_4.parent = this,
        this.instance_4.setTransform(876.7, 237.5, 1, 1, 0, 0, 0, 45, 40),
        this.instance_4._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_4).wait(64).to({
            _off: !1
        }, 0).wait(51)),
        this.instance_5 = new n.Sparkle,
        this.instance_5.parent = this,
        this.instance_5.setTransform(1069.1, 222.4, 1, 1, 0, 0, 0, 45.1, 40),
        this.instance_5._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_5).wait(60).to({
            _off: !1
        }, 0).wait(55)),
        this.instance_6 = new n.Sparkle,
        this.instance_6.parent = this,
        this.instance_6.setTransform(552.2, 69, 1, 1, 0, 0, 0, 45, 40),
        this.instance_6._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_6).wait(56).to({
            _off: !1
        }, 0).wait(59)),
        this.instance_7 = new n.Sparkle,
        this.instance_7.parent = this,
        this.instance_7.setTransform(458.7, 127.4, 1, 1, 0, 0, 0, 45, 40),
        this.instance_7._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_7).wait(52).to({
            _off: !1
        }, 0).wait(63)),
        this.instance_8 = new n.Sparkle,
        this.instance_8.parent = this,
        this.instance_8.setTransform(-250.3, 232.9, 1, 1, 0, 0, 0, 47.9, 43.5),
        this.instance_8._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_8).wait(48).to({
            _off: !1
        }, 0).wait(67)),
        this.instance_9 = new n.Sparkle,
        this.instance_9.parent = this,
        this.instance_9.setTransform(245.5, 179, 1, 1, 0, 0, 0, 45, 40),
        this.instance_9._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_9).wait(44).to({
            _off: !1
        }, 0).wait(71)),
        this.instance_10 = new n.Sparkle,
        this.instance_10.parent = this,
        this.instance_10.setTransform(-66.1, 222.4, 1, 1, 0, 0, 0, 45, 40),
        this.instance_10._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_10).wait(40).to({
            _off: !1
        }, 0).wait(75)),
        this.instance_11 = new n.Sparkle,
        this.instance_11.parent = this,
        this.instance_11.setTransform(305.6, 61.9, 1, 1, 0, 0, 0, 45, 40),
        this.instance_11._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_11).wait(36).to({
            _off: !1
        }, 0).wait(79)),
        this.instance_12 = new n.Sparkle,
        this.instance_12.parent = this,
        this.instance_12.setTransform(689.3, 229.4, 1, 1, 0, 0, 0, 45, 40),
        this.instance_12._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_12).wait(32).to({
            _off: !1
        }, 0).wait(83)),
        this.instance_13 = new n.Sparkle,
        this.instance_13.parent = this,
        this.instance_13.setTransform(228.4, 345.3, 1, 1, 0, 0, 0, 45, 40),
        this.instance_13._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_13).wait(28).to({
            _off: !1
        }, 0).wait(87)),
        this.instance_14 = new n.Sparkle,
        this.instance_14.parent = this,
        this.instance_14.setTransform(586.4, 317.5, 1, 1, 0, 0, 0, 45, 40),
        this.instance_14._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_14).wait(24).to({
            _off: !1
        }, 0).wait(91)),
        this.instance_15 = new n.Sparkle,
        this.instance_15.parent = this,
        this.instance_15.setTransform(442.7, 237.5, 1, 1, 0, 0, 0, 45, 40),
        this.instance_15._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_15).wait(20).to({
            _off: !1
        }, 0).wait(95)),
        this.instance_16 = new n.Sparkle,
        this.instance_16.parent = this,
        this.instance_16.setTransform(-90.3, 345.3, 1, 1, 0, 0, 0, 45, 40),
        this.instance_16._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_16).wait(16).to({
            _off: !1
        }, 0).wait(99)),
        this.instance_17 = new n.Sparkle,
        this.instance_17.parent = this,
        this.instance_17.setTransform(458.7, 533.9, 1, 1, 0, 0, 0, 45, 40),
        this.instance_17._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_17).wait(12).to({
            _off: !1
        }, 0).wait(103)),
        this.instance_18 = new n.Sparkle,
        this.instance_18.parent = this,
        this.instance_18.setTransform(368.7, 650.3, 1, 1, 0, 0, 0, 45, 40),
        this.instance_18._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_18).wait(8).to({
            _off: !1
        }, 0).wait(107)),
        this.instance_19 = new n.Sparkle,
        this.instance_19.parent = this,
        this.instance_19.setTransform(1012.3, 356.9, 1, 1, 0, 0, 0, 45, 40),
        this.instance_19._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_19).wait(4).to({
            _off: !1
        }, 0).wait(111)),
        this.instance_20 = new n.Sparkle,
        this.instance_20.parent = this,
        this.instance_20.setTransform(60.4, 265.3, 1, 1, 0, 0, 0, 45, 40),
        this.instance_20._off = !0,
        this.timeline.addTween(s.Tween.get(this.instance_20).wait(1).to({
            _off: !1
        }, 0).wait(114))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = null,
    (n.IntroMenuGui = function(t, e, i) {
        this.initialize(t, e, i, {
            "on:default": 0,
            toOff: 1,
            off: 6,
            toOn: 7,
            on: 19
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_6 = function() {
            this.stop()
        }
        ,
        this.frame_19 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(13).call(this.frame_19).wait(1)),
        this.sparkles_mc = new n.IntroMenuSparkles,
        this.sparkles_mc.name = "sparkles_mc",
        this.sparkles_mc.parent = this,
        this.sparkles_mc.setTransform(399.2, 21.7),
        this.sparkles_mc._off = !0,
        this.timeline.addTween(s.Tween.get(this.sparkles_mc).wait(11).to({
            _off: !1
        }, 0).wait(9)),
        this.gamesBtn_mc = new n.MoreGamesButton,
        this.gamesBtn_mc.name = "gamesBtn_mc",
        this.gamesBtn_mc.parent = this,
        this.gamesBtn_mc.setTransform(1e3, 820, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.gamesBtn_mc).to({
            alpha: 0
        }, 6, s.Ease.get(-1)).wait(1).to({
            y: 850
        }, 0).wait(3).to({
            y: 820,
            alpha: 1
        }, 6, s.Ease.get(1)).wait(4)),
        this.playBtn_mc = new n.PlayButton,
        this.playBtn_mc.name = "playBtn_mc",
        this.playBtn_mc.parent = this,
        this.playBtn_mc.setTransform(600, 820, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.playBtn_mc).to({
            alpha: 0
        }, 6, s.Ease.get(-1)).wait(1).to({
            y: 850
        }, 0).wait(3).to({
            y: 820,
            alpha: 1
        }, 6, s.Ease.get(1)).wait(4)),
        this.newRecord_mc = new n.NewRecordDisplay,
        this.newRecord_mc.name = "newRecord_mc",
        this.newRecord_mc.parent = this,
        this.newRecord_mc.setTransform(800, 1055, 1, 1, 0, 0, 0, 800, 105),
        this.timeline.addTween(s.Tween.get(this.newRecord_mc).to({
            alpha: 0
        }, 6, s.Ease.get(-1)).wait(1).to({
            y: 1085
        }, 0).wait(3).to({
            y: 1055,
            alpha: 1
        }, 6, s.Ease.get(1)).wait(4)),
        this.instance = new n.Intro,
        this.instance.parent = this,
        this.instance.setTransform(800, 581.9, 1, 1, 0, 0, 0, 650, 561.9),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            regX: 650.1,
            scaleX: .8,
            scaleY: .8,
            y: 543.5,
            alpha: 0
        }, 6, s.Ease.get(-1)).wait(1).to({
            regY: 561.8,
            scaleX: .86,
            scaleY: .86,
            y: 398.2
        }, 0).to({
            regX: 650,
            regY: 561.9,
            scaleX: 1,
            scaleY: 1,
            y: 581.9,
            alpha: 1
        }, 6, s.Ease.get(1)).wait(7))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,20,1600,1161.4),
    (n.HomeButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(12.1, 6, .92, .92, 0, 0, 0, .1, 0),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.HomeButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(86.3, 26.7, 1, 1, 0, 0, 0, 86.3, 26.7),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.GameOverMenuClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.newGameBtn_mc = new n.NewGameButton,
        this.newGameBtn_mc.name = "newGameBtn_mc",
        this.newGameBtn_mc.parent = this,
        this.newGameBtn_mc.setTransform(713.5, 754.7, 1, 1, 0, 0, 0, 86.5, 26.7),
        this.timeline.addTween(s.Tween.get(this.newGameBtn_mc).wait(1)),
        this.title_mc = new n.OutOfCreditsText,
        this.title_mc.name = "title_mc",
        this.title_mc.parent = this,
        this.title_mc.setTransform(230.9, 187.6, 1, 1, 0, 0, 0, 230.9, 40.6),
        this.timeline.addTween(s.Tween.get(this.title_mc).wait(1)),
        this.instance = new n.Chip0,
        this.instance.parent = this,
        this.instance.setTransform(734.7, 434.6, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1))
    }
    ).prototype = o(n.GameOverMenuClip, new s.Rectangle(0,147,1600,701), null),
    (n.FullscreenToggleButton = function(t, e, i) {
        this.initialize(t, e, i, {
            "up#0": 0,
            "over#0": 1,
            "down#0": 2,
            "disabled#0": 3,
            "up#1": 4,
            "over#1": 5,
            "down#1": 6,
            "disabled#1": 7
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.frame_3 = function() {
            this.stop()
        }
        ,
        this.frame_4 = function() {
            this.stop()
        }
        ,
        this.frame_5 = function() {
            this.stop()
        }
        ,
        this.frame_6 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1)),
        this.instance = new n.HitArea,
        this.instance.parent = this,
        this.instance.setTransform(12.1, 6, .92, .92, 0, 0, 0, .1, 0),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(8)),
        this.instance_1 = new n.FullscreenToggleButtonContentMaximize,
        this.instance_1.parent = this,
        this.instance_2 = new n.FullscreenToggleButtonContentMinimize,
        this.instance_2.parent = this,
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 4).wait(4))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.DimmerDark = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(11)),
        this.instance = new n.DimmerDarkShape,
        this.instance.parent = this,
        this.instance.setTransform(32, 32, 1, 1, 0, 0, 0, 32, 32),
        this.instance.alpha = .602,
        this.timeline.addTween(s.Tween.get(this.instance).to({
            alpha: 0
        }, 7, s.Ease.get(-1)).to({
            alpha: .602
        }, 10, s.Ease.get(1)).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-800,-600,1600,1200),
    (n.DimmerAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.dimmer_mc = new n.DimmerDark,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.ClearButton = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1)),
        this.instance = new n.HitAreaCircle,
        this.instance.parent = this,
        this.instance.setTransform(13, 6, 1.4, 1.4),
        this.instance.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.instance).wait(3)),
        this.instance_1 = new n.ClearButtonContent,
        this.instance_1.parent = this,
        this.instance_1.setTransform(180, 60, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(3))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,158,158),
    (n.ChipSwitch = function(t, e, i) {
        this.initialize(t, e, i, {
            dollars500: 0,
            dollars500000: 1,
            dollars250000: 2,
            dollars100: 3,
            dollars100000: 4,
            dollars25000: 5,
            dollars10: 6,
            dollars5000: 7,
            dollars1000000: 8,
            dollars1: 9,
            dollars0: 10,
            empty: 11,
            init: 12,
            dollars1000: 13
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.frame_3 = function() {
            this.stop()
        }
        ,
        this.frame_4 = function() {
            this.stop()
        }
        ,
        this.frame_5 = function() {
            this.stop()
        }
        ,
        this.frame_6 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.frame_8 = function() {
            this.stop()
        }
        ,
        this.frame_9 = function() {
            this.stop()
        }
        ,
        this.frame_10 = function() {
            this.stop()
        }
        ,
        this.frame_11 = function() {
            this.stop()
        }
        ,
        this.frame_12 = function() {
            this.stop()
        }
        ,
        this.frame_13 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1)),
        this.instance = new n.Chip500,
        this.instance.parent = this,
        this.instance_1 = new n.Chip500000,
        this.instance_1.parent = this,
        this.instance_1.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_2 = new n.Chip250000,
        this.instance_2.parent = this,
        this.instance_2.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_3 = new n.Chip100,
        this.instance_3.parent = this,
        this.instance_3.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_4 = new n.Chip100000,
        this.instance_4.parent = this,
        this.instance_4.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_5 = new n.Chip25000,
        this.instance_5.parent = this,
        this.instance_5.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_6 = new n.Chip10,
        this.instance_6.parent = this,
        this.instance_6.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_7 = new n.Chip5000,
        this.instance_7.parent = this,
        this.instance_7.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_8 = new n.Chip1000000,
        this.instance_8.parent = this,
        this.instance_8.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_9 = new n.Chip1,
        this.instance_9.parent = this,
        this.instance_9.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_10 = new n.Chip0,
        this.instance_10.parent = this,
        this.instance_10.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_11 = new n.ChipEmpty,
        this.instance_11.parent = this,
        this.instance_11.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.instance_12 = new n.Chip1000,
        this.instance_12.parent = this,
        this.instance_12.setTransform(65.3, 65.3, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,262,262),
    (n.ChipDisplayClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.switch_mc = new n.ChipSwitch,
        this.switch_mc.name = "switch_mc",
        this.switch_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.switch_mc).wait(1))
    }
    ).prototype = o(n.ChipDisplayClip, new s.Rectangle(0,0,262,262), null),
    (n.BoardSpotRangeWide = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.hitArea_mc = new n.HitArea,
        this.hitArea_mc.name = "hitArea_mc",
        this.hitArea_mc.parent = this,
        this.hitArea_mc.setTransform(-183.2, -39, 3.67, .948, 0, 0, 0, 0, -.1),
        this.timeline.addTween(s.Tween.get(this.hitArea_mc).wait(1))
    }
    ).prototype = o(n.BoardSpotRangeWide, new s.Rectangle(-183.2,-38.9,367,94.8), null),
    (n.BoardSpotRange = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.hitArea_mc = new n.HitArea,
        this.hitArea_mc.name = "hitArea_mc",
        this.hitArea_mc.parent = this,
        this.hitArea_mc.setTransform(-92.2, -58.5, 1.85, 1.152),
        this.timeline.addTween(s.Tween.get(this.hitArea_mc).wait(1))
    }
    ).prototype = o(n.BoardSpotRange, new s.Rectangle(-92.2,-58.5,185,115.2), null),
    (n.BoardHitArea = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.alpha = 1,
            this.parent.hitArea = this,
            this.isHitArea = !0,
            this.visible = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.instance = new n.HitAreaPartial,
        this.instance.parent = this,
        this.instance.setTransform(86, 326, .94, .823),
        this.timeline.addTween(s.Tween.get(this.instance).wait(1)),
        this.instance_1 = new n.HitAreaPartial,
        this.instance_1.parent = this,
        this.instance_1.setTransform(86, -48, 11.975, .823),
        this.timeline.addTween(s.Tween.get(this.instance_1).wait(1)),
        this.instance_2 = new n.HitAreaPartial,
        this.instance_2.parent = this,
        this.instance_2.setTransform(134.9, 333.1, 11.027, 2.509),
        this.timeline.addTween(s.Tween.get(this.instance_2).wait(1)),
        this.instance_3 = new n.HitAreaPartial,
        this.instance_3.parent = this,
        this.instance_3.setTransform(0, -2, 13.321, 3.542),
        this.timeline.addTween(s.Tween.get(this.instance_3).wait(1))
    }
    ).prototype = o(n.BoardHitArea, new s.Rectangle(0,-48,1332.1,632), null),
    (n.BoardHighlightZeros = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 6,
            toOn: 7
        }),
        this.frame_0 = function() {
            this.stop(),
            this.visible = !0
        }
        ,
        this.frame_6 = function() {
            this.stop(),
            this.visible = !1
        }
        ,
        this.frame_7 = function() {
            this.visible = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(6)),
        this.instance = new n.BoardHighlightZerosShape,
        this.instance.parent = this,
        this.instance.setTransform(32.3, 42.5, 1, 1, 0, 0, 0, 32.3, 42.5),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            alpha: 0
        }, 6).to({
            alpha: 1
        }, 6).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-3,-2,133,174),
    (n.BoardHighlightRangeWide = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 6,
            toOn: 7
        }),
        this.frame_0 = function() {
            this.stop(),
            this.visible = !0
        }
        ,
        this.frame_6 = function() {
            this.stop(),
            this.visible = !1
        }
        ,
        this.frame_7 = function() {
            this.visible = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(6)),
        this.instance = new n.BoardHighlightRangeWideShape,
        this.instance.parent = this,
        this.instance.setTransform(90.8, 28, 1, 1, 0, 0, 0, 90.8, 28),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            alpha: 0
        }, 6).to({
            alpha: 1
        }, 6).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-2,-2,367,116),
    (n.BoardHighlightRange = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 6,
            toOn: 7
        }),
        this.frame_0 = function() {
            this.stop(),
            this.visible = !0
        }
        ,
        this.frame_6 = function() {
            this.stop(),
            this.visible = !1
        }
        ,
        this.frame_7 = function() {
            this.visible = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(6)),
        this.instance = new n.BoardHighlightRangeShape,
        this.instance.parent = this,
        this.instance.setTransform(44.9, 28, 1, 1, 0, 0, 0, 44.9, 28),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            alpha: 0
        }, 6).to({
            alpha: 1
        }, 6).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-2,-2,184,116),
    (n.BoardHighlightNumbers = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 6,
            toOn: 7
        }),
        this.frame_0 = function() {
            this.stop(),
            this.visible = !0
        }
        ,
        this.frame_6 = function() {
            this.stop(),
            this.visible = !1
        }
        ,
        this.frame_7 = function() {
            this.visible = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(6)),
        this.instance = new n.BoardHighlightNumbersShape,
        this.instance.parent = this,
        this.instance.setTransform(22, 28, 1, 1, 0, 0, 0, 22, 28),
        this.timeline.addTween(s.Tween.get(this.instance).to({
            alpha: .5
        }, 3).to({
            alpha: 0
        }, 3).to({
            alpha: 1
        }, 6).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-2,-2,92,116),
    (n.BetTotalTextAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 4,
            toOn: 5
        }),
        this.frame_0 = function() {
            this.mouseEnabled = this.mouseChildren = !1,
            this.stop(),
            this.visible = !0
        }
        ,
        this.frame_4 = function() {
            this.mouseEnabled = this.mouseChildren = !1,
            this.stop(),
            this.visible = !1
        }
        ,
        this.frame_5 = function() {
            this.mouseEnabled = this.mouseChildren = !1,
            this.visible = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(4)),
        this.text_mc = new n.BetTotalText,
        this.text_mc.name = "text_mc",
        this.text_mc.parent = this,
        this.text_mc.setTransform(43.4, 13.1, 1, 1, 0, 0, 0, 43.4, 13.1),
        this.timeline.addTween(s.Tween.get(this.text_mc).to({
            alpha: 0
        }, 4).to({
            alpha: 1
        }, 4).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,112.9),
    (n.BankTotalAnimTextHolder = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.text_mc = new n.BankTotalText,
        this.text_mc.name = "text_mc",
        this.text_mc.parent = this,
        this.text_mc.setTransform(51.5, 20.2, 1, 1, 0, 0, 0, 51.5, 20.2),
        this.timeline.addTween(s.Tween.get(this.text_mc).wait(1))
    }
    ).prototype = o(n.BankTotalAnimTextHolder, new s.Rectangle(0,0,677.5,90.9), null),
    (n.BankTotalAnimText = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 14,
            toOn: 15
        }),
        this.frame_0 = function() {
            this.stop(),
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.frame_14 = function() {
            this.stop(),
            this.mouseEnabled = this.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16)),
        this.holder_mc = new n.BankTotalAnimTextHolder,
        this.holder_mc.name = "holder_mc",
        this.holder_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.holder_mc).to({
            alpha: 0
        }, 14).to({
            alpha: 1
        }, 15).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,677.5,90.9),
    (n.BallRotator = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.ball_mc = new n.Ball,
        this.ball_mc.name = "ball_mc",
        this.ball_mc.parent = this,
        this.ball_mc.setTransform(0, -300),
        this.timeline.addTween(s.Tween.get(this.ball_mc).wait(1))
    }
    ).prototype = o(n.BallRotator, new s.Rectangle(-13,-311,23,23), null),
    (n.WinMenuClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.rateBtn_mc = new n.RateUsButton,
        this.rateBtn_mc.name = "rateBtn_mc",
        this.rateBtn_mc.parent = this,
        this.rateBtn_mc.setTransform(613, 1027.2, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.rateBtn_mc).wait(1)),
        this.title_mc = new n.WinMenuTitleText,
        this.title_mc.name = "title_mc",
        this.title_mc.parent = this,
        this.title_mc.setTransform(208.3, 261.5, 1, 1, 0, 0, 0, 208.3, 41.5),
        this.timeline.addTween(s.Tween.get(this.title_mc).wait(1)),
        this.record_mc = new n.NewRecordDisplay,
        this.record_mc.name = "record_mc",
        this.record_mc.parent = this,
        this.record_mc.setTransform(0, 689.5),
        this.timeline.addTween(s.Tween.get(this.record_mc).wait(1))
    }
    ).prototype = o(n.WinMenuClip, new s.Rectangle(0,0,1600,1093.2), null),
    (n.WheelRotator = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.ballRotator_mc = new n.BallRotator,
        this.ballRotator_mc.name = "ballRotator_mc",
        this.ballRotator_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.ballRotator_mc).wait(1)),
        this.highlight_mc = new n.WheelHighlight,
        this.highlight_mc.name = "highlight_mc",
        this.highlight_mc.parent = this,
        this.highlight_mc.setTransform(0, 0, 1, 1, 4.6),
        this.timeline.addTween(s.Tween.get(this.highlight_mc).wait(1)),
        this.wheel_mc = new n.Wheel,
        this.wheel_mc.name = "wheel_mc",
        this.wheel_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.wheel_mc).wait(1))
    }
    ).prototype = o(n.WheelRotator, new s.Rectangle(-305,-335,609,639.1), null),
    (n.StackDisplayChipMount = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {}
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.c3_mc = new n.ChipDisplayClip,
        this.c3_mc.name = "c3_mc",
        this.c3_mc.parent = this,
        this.c3_mc.setTransform(128.6, 121.4, 1, 1, 0, 0, 0, 131, 131),
        this.timeline.addTween(s.Tween.get(this.c3_mc).wait(1)),
        this.c2_mc = new n.ChipDisplayClip,
        this.c2_mc.name = "c2_mc",
        this.c2_mc.parent = this,
        this.c2_mc.setTransform(139.4, 126.8, 1, 1, 0, 0, 0, 131, 131),
        this.timeline.addTween(s.Tween.get(this.c2_mc).wait(1)),
        this.c1_mc = new n.ChipDisplayClip,
        this.c1_mc.name = "c1_mc",
        this.c1_mc.parent = this,
        this.c1_mc.setTransform(131, 131, 1, 1, 0, 0, 0, 131, 131),
        this.timeline.addTween(s.Tween.get(this.c1_mc).wait(1))
    }
    ).prototype = o(n.StackDisplayChipMount, new s.Rectangle(-2.4,-9.6,272.8,271.6), null),
    (n.SpinClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.title_mc = new n.SpinTitleText,
        this.title_mc.name = "title_mc",
        this.title_mc.parent = this,
        this.title_mc.setTransform(208.3, 71.5, 1, 1, 0, 0, 0, 208.3, 41.5),
        this.timeline.addTween(s.Tween.get(this.title_mc).wait(1)),
        this.wheelRotator_mc = new n.WheelRotator,
        this.wheelRotator_mc.name = "wheelRotator_mc",
        this.wheelRotator_mc.parent = this,
        this.wheelRotator_mc.setTransform(800, 680),
        this.timeline.addTween(s.Tween.get(this.wheelRotator_mc).wait(1)),
        this.wheelBase_mc = new n.WheelBase,
        this.wheelBase_mc.name = "wheelBase_mc",
        this.wheelBase_mc.parent = this,
        this.wheelBase_mc.setTransform(800, 680),
        this.timeline.addTween(s.Tween.get(this.wheelBase_mc).wait(1))
    }
    ).prototype = o(n.SpinClip, new s.Rectangle(0,30,1600,1143), null),
    (n.ResumeMenuClipPassiveContent = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickChildren = this.tickEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.title_txt = new s.Text("Resume","bold 90px 'Noto Serif'","#FFFFFF"),
        this.title_txt.name = "title_txt",
        this.title_txt.textAlign = "center",
        this.title_txt.lineHeight = 98,
        this.title_txt.lineWidth = 964,
        this.title_txt.parent = this,
        this.title_txt.setTransform(786.3, -184),
        this.timeline.addTween(s.Tween.get(this.title_txt).wait(1)),
        this.chipSwitch_mc = new n.ChipSwitch,
        this.chipSwitch_mc.name = "chipSwitch_mc",
        this.chipSwitch_mc.parent = this,
        this.chipSwitch_mc.setTransform(728.6, 43.8, 1, 1, 0, 0, 0, 65.3, 65.3),
        this.timeline.addTween(s.Tween.get(this.chipSwitch_mc).wait(1)),
        this.winnings_txt = new s.Text("$999,999,000,000","bold 96px 'Noto Serif'","#FFFFFF"),
        this.winnings_txt.name = "winnings_txt",
        this.winnings_txt.textAlign = "center",
        this.winnings_txt.lineHeight = 105,
        this.winnings_txt.lineWidth = 955,
        this.winnings_txt.parent = this,
        this.winnings_txt.setTransform(785.3, 267),
        this.timeline.addTween(s.Tween.get(this.winnings_txt).wait(1))
    }
    ).prototype = o(n.ResumeMenuClipPassiveContent, new s.Rectangle(302.2,-186,968.2,601.4), null),
    (n.ResumeMenuClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.newBtn_mc = new n.NewGameButton,
        this.newBtn_mc.name = "newBtn_mc",
        this.newBtn_mc.parent = this,
        this.newBtn_mc.setTransform(505.7, 880.5, 1, 1, 0, 0, 0, 86.3, 26.7),
        this.timeline.addTween(s.Tween.get(this.newBtn_mc).wait(1)),
        this.resumeBtn_mc = new n.ResumeButton,
        this.resumeBtn_mc.name = "resumeBtn_mc",
        this.resumeBtn_mc.parent = this,
        this.resumeBtn_mc.setTransform(911.7, 880.5, 1, 1, 0, 0, 0, 86.3, 26.7),
        this.timeline.addTween(s.Tween.get(this.resumeBtn_mc).wait(1)),
        this.texts_mc = new n.ResumeMenuClipPassiveContent,
        this.texts_mc.name = "texts_mc",
        this.texts_mc.parent = this,
        this.texts_mc.setTransform(812, 622.7, 1, 1, 0, 0, 0, 789.6, 187.5),
        this.timeline.addTween(s.Tween.get(this.texts_mc).wait(1)),
        this.panel_mc = new n.PopupPanelBackground,
        this.panel_mc.name = "panel_mc",
        this.panel_mc.parent = this,
        this.panel_mc.setTransform(317.4, 239.8),
        this.timeline.addTween(s.Tween.get(this.panel_mc).wait(1))
    }
    ).prototype = o(n.ResumeMenuClip, new s.Rectangle(297.4,231.8,1010,800), null),
    (n.MuteToggleButtonAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.frame_1 = function() {
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_7 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_8 = function() {
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(8)),
        this.btog_mc = new n.MuteToggleButton,
        this.btog_mc.name = "btog_mc",
        this.btog_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.btog_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.LoseMenuGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.clip_mc = new n.LoseMenuClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.clip_mc.setTransform(35.6, 269.4, 1, 1, 0, 0, 0, 35.6, 269.4),
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1)),
        this.dimmerAnim_mc = new n.DimmerAnim,
        this.dimmerAnim_mc.name = "dimmerAnim_mc",
        this.dimmerAnim_mc.parent = this,
        this.dimmerAnim_mc.setTransform(800, 600, 1, 1, 0, 0, 0, 800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmerAnim_mc).wait(16))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.HomeButtonAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.frame_1 = function() {
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_7 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_8 = function() {
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(8)),
        this.btn_mc = new n.HomeButton,
        this.btn_mc.name = "btn_mc",
        this.btn_mc.parent = this,
        this.btn_mc.setTransform(86.3, 26.7, 1, 1, 0, 0, 0, 86.3, 26.7),
        this.timeline.addTween(s.Tween.get(this.btn_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.GameOverMenuGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.clip_mc = new n.GameOverMenuClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.clip_mc.setTransform(35.6, 269.4, 1, 1, 0, 0, 0, 35.6, 269.4),
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1)),
        this.dimmer_mc = new n.DimmerDark,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).to({
            alpha: 0
        }, 7).wait(1).to({
            alpha: 1
        }, 0).wait(8))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.FullscreenToggleButtonAnim = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.frame_1 = function() {
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_7 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.frame_8 = function() {
            this.mouseChildren = this.mouseEnabled = !0
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(8)),
        this.btog_mc = new n.FullscreenToggleButton,
        this.btog_mc.name = "btog_mc",
        this.btog_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.btog_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,110,110),
    (n.BoardSpots = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1,
            this.tickEnabled = this.tickChildren = !1,
            this.visible = !1,
            this.alpha = 1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.c31_mc = new n.BoardSpot,
        this.c31_mc.name = "c31_mc",
        this.c31_mc.parent = this,
        this.c31_mc.setTransform(1144.8, 234.2),
        this.c32_mc = new n.BoardSpot,
        this.c32_mc.name = "c32_mc",
        this.c32_mc.parent = this,
        this.c32_mc.setTransform(1144.8, 118.2),
        this.c28_mc = new n.BoardSpot,
        this.c28_mc.name = "c28_mc",
        this.c28_mc.parent = this,
        this.c28_mc.setTransform(1053, 234.2),
        this.c29_mc = new n.BoardSpot,
        this.c29_mc.name = "c29_mc",
        this.c29_mc.parent = this,
        this.c29_mc.setTransform(1053, 118.2),
        this.c25_mc = new n.BoardSpot,
        this.c25_mc.name = "c25_mc",
        this.c25_mc.parent = this,
        this.c25_mc.setTransform(961.2, 234.2),
        this.c26_mc = new n.BoardSpot,
        this.c26_mc.name = "c26_mc",
        this.c26_mc.parent = this,
        this.c26_mc.setTransform(961.2, 118.2),
        this.c22_mc = new n.BoardSpot,
        this.c22_mc.name = "c22_mc",
        this.c22_mc.parent = this,
        this.c22_mc.setTransform(869.5, 234.2),
        this.c23_mc = new n.BoardSpot,
        this.c23_mc.name = "c23_mc",
        this.c23_mc.parent = this,
        this.c23_mc.setTransform(869.5, 118.2),
        this.c19_mc = new n.BoardSpot,
        this.c19_mc.name = "c19_mc",
        this.c19_mc.parent = this,
        this.c19_mc.setTransform(777.7, 234.2),
        this.c20_mc = new n.BoardSpot,
        this.c20_mc.name = "c20_mc",
        this.c20_mc.parent = this,
        this.c20_mc.setTransform(777.7, 118.2),
        this.c16_mc = new n.BoardSpot,
        this.c16_mc.name = "c16_mc",
        this.c16_mc.parent = this,
        this.c16_mc.setTransform(686, 234.2),
        this.c17_mc = new n.BoardSpot,
        this.c17_mc.name = "c17_mc",
        this.c17_mc.parent = this,
        this.c17_mc.setTransform(686, 118.2),
        this.c13_mc = new n.BoardSpot,
        this.c13_mc.name = "c13_mc",
        this.c13_mc.parent = this,
        this.c13_mc.setTransform(594.2, 234.2),
        this.c14_mc = new n.BoardSpot,
        this.c14_mc.name = "c14_mc",
        this.c14_mc.parent = this,
        this.c14_mc.setTransform(594.2, 118.2),
        this.c10_mc = new n.BoardSpot,
        this.c10_mc.name = "c10_mc",
        this.c10_mc.parent = this,
        this.c10_mc.setTransform(502.5, 234.2),
        this.c11_mc = new n.BoardSpot,
        this.c11_mc.name = "c11_mc",
        this.c11_mc.parent = this,
        this.c11_mc.setTransform(502.5, 118.2),
        this.c7_mc = new n.BoardSpot,
        this.c7_mc.name = "c7_mc",
        this.c7_mc.parent = this,
        this.c7_mc.setTransform(410.7, 234.2),
        this.c8_mc = new n.BoardSpot,
        this.c8_mc.name = "c8_mc",
        this.c8_mc.parent = this,
        this.c8_mc.setTransform(410.7, 118.2),
        this.c4_mc = new n.BoardSpot,
        this.c4_mc.name = "c4_mc",
        this.c4_mc.parent = this,
        this.c4_mc.setTransform(319, 234.2),
        this.c5_mc = new n.BoardSpot,
        this.c5_mc.name = "c5_mc",
        this.c5_mc.parent = this,
        this.c5_mc.setTransform(319, 118.2),
        this.c1_mc = new n.BoardSpot,
        this.c1_mc.name = "c1_mc",
        this.c1_mc.parent = this,
        this.c1_mc.setTransform(227.2, 234.2),
        this.c2_mc = new n.BoardSpot,
        this.c2_mc.name = "c2_mc",
        this.c2_mc.parent = this,
        this.c2_mc.setTransform(227.2, 118.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.c2_mc
            }, {
                t: this.c1_mc
            }, {
                t: this.c5_mc
            }, {
                t: this.c4_mc
            }, {
                t: this.c8_mc
            }, {
                t: this.c7_mc
            }, {
                t: this.c11_mc
            }, {
                t: this.c10_mc
            }, {
                t: this.c14_mc
            }, {
                t: this.c13_mc
            }, {
                t: this.c17_mc
            }, {
                t: this.c16_mc
            }, {
                t: this.c20_mc
            }, {
                t: this.c19_mc
            }, {
                t: this.c23_mc
            }, {
                t: this.c22_mc
            }, {
                t: this.c26_mc
            }, {
                t: this.c25_mc
            }, {
                t: this.c29_mc
            }, {
                t: this.c28_mc
            }, {
                t: this.c32_mc
            }, {
                t: this.c31_mc
            }]
        }).wait(1)),
        this.sp0002_mc = new n.BoardSpot,
        this.sp0002_mc.name = "sp0002_mc",
        this.sp0002_mc.parent = this,
        this.sp0002_mc.setTransform(135.1, 175.7),
        this.sp012_mc = new n.BoardSpot,
        this.sp012_mc.name = "sp012_mc",
        this.sp012_mc.parent = this,
        this.sp012_mc.setTransform(135.1, 252.7),
        this.sp0023_mc = new n.BoardSpot,
        this.sp0023_mc.name = "sp0023_mc",
        this.sp0023_mc.parent = this,
        this.sp0023_mc.setTransform(135.1, 97.4),
        this.sp01_mc = new n.BoardSpot,
        this.sp01_mc.name = "sp01_mc",
        this.sp01_mc.parent = this,
        this.sp01_mc.setTransform(135.1, 291.2),
        this.sp003_mc = new n.BoardSpot,
        this.sp003_mc.name = "sp003_mc",
        this.sp003_mc.parent = this,
        this.sp003_mc.setTransform(135.1, 58.2),
        this.sp02_mc = new n.BoardSpot,
        this.sp02_mc.name = "sp02_mc",
        this.sp02_mc.parent = this,
        this.sp02_mc.setTransform(135.1, 214.2),
        this.sp002_mc = new n.BoardSpot,
        this.sp002_mc.name = "sp002_mc",
        this.sp002_mc.parent = this,
        this.sp002_mc.setTransform(135.1, 136.5),
        this.sp000_mc = new n.BoardSpot,
        this.sp000_mc.name = "sp000_mc",
        this.sp000_mc.parent = this,
        this.sp000_mc.setTransform(43.3, 175.7),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.sp000_mc
            }, {
                t: this.sp002_mc
            }, {
                t: this.sp02_mc
            }, {
                t: this.sp003_mc
            }, {
                t: this.sp01_mc
            }, {
                t: this.sp0023_mc
            }, {
                t: this.sp012_mc
            }, {
                t: this.sp0002_mc
            }]
        }).wait(1)),
        this.vs34_mc = new n.BoardSpot,
        this.vs34_mc.name = "vs34_mc",
        this.vs34_mc.parent = this,
        this.vs34_mc.setTransform(1188.2, 234.2),
        this.vs35_mc = new n.BoardSpot,
        this.vs35_mc.name = "vs35_mc",
        this.vs35_mc.parent = this,
        this.vs35_mc.setTransform(1188.2, 118.2),
        this.vs31_mc = new n.BoardSpot,
        this.vs31_mc.name = "vs31_mc",
        this.vs31_mc.parent = this,
        this.vs31_mc.setTransform(1096.6, 234.2),
        this.vs32_mc = new n.BoardSpot,
        this.vs32_mc.name = "vs32_mc",
        this.vs32_mc.parent = this,
        this.vs32_mc.setTransform(1096.6, 118.2),
        this.vs28_mc = new n.BoardSpot,
        this.vs28_mc.name = "vs28_mc",
        this.vs28_mc.parent = this,
        this.vs28_mc.setTransform(1005.1, 234.2),
        this.vs29_mc = new n.BoardSpot,
        this.vs29_mc.name = "vs29_mc",
        this.vs29_mc.parent = this,
        this.vs29_mc.setTransform(1005.1, 118.2),
        this.vs25_mc = new n.BoardSpot,
        this.vs25_mc.name = "vs25_mc",
        this.vs25_mc.parent = this,
        this.vs25_mc.setTransform(913.5, 234.2),
        this.vs26_mc = new n.BoardSpot,
        this.vs26_mc.name = "vs26_mc",
        this.vs26_mc.parent = this,
        this.vs26_mc.setTransform(913.5, 118.2),
        this.vs22_mc = new n.BoardSpot,
        this.vs22_mc.name = "vs22_mc",
        this.vs22_mc.parent = this,
        this.vs22_mc.setTransform(822, 234.2),
        this.vs23_mc = new n.BoardSpot,
        this.vs23_mc.name = "vs23_mc",
        this.vs23_mc.parent = this,
        this.vs23_mc.setTransform(822, 118.2),
        this.vs19_mc = new n.BoardSpot,
        this.vs19_mc.name = "vs19_mc",
        this.vs19_mc.parent = this,
        this.vs19_mc.setTransform(730.4, 234.2),
        this.vs20_mc = new n.BoardSpot,
        this.vs20_mc.name = "vs20_mc",
        this.vs20_mc.parent = this,
        this.vs20_mc.setTransform(730.4, 118.2),
        this.vs16_mc = new n.BoardSpot,
        this.vs16_mc.name = "vs16_mc",
        this.vs16_mc.parent = this,
        this.vs16_mc.setTransform(638.9, 234.2),
        this.vs17_mc = new n.BoardSpot,
        this.vs17_mc.name = "vs17_mc",
        this.vs17_mc.parent = this,
        this.vs17_mc.setTransform(638.9, 118.2),
        this.vs13_mc = new n.BoardSpot,
        this.vs13_mc.name = "vs13_mc",
        this.vs13_mc.parent = this,
        this.vs13_mc.setTransform(547.3, 234.2),
        this.vs14_mc = new n.BoardSpot,
        this.vs14_mc.name = "vs14_mc",
        this.vs14_mc.parent = this,
        this.vs14_mc.setTransform(547.3, 118.2),
        this.vs10_mc = new n.BoardSpot,
        this.vs10_mc.name = "vs10_mc",
        this.vs10_mc.parent = this,
        this.vs10_mc.setTransform(455.8, 234.2),
        this.vs11_mc = new n.BoardSpot,
        this.vs11_mc.name = "vs11_mc",
        this.vs11_mc.parent = this,
        this.vs11_mc.setTransform(455.8, 118.2),
        this.vs7_mc = new n.BoardSpot,
        this.vs7_mc.name = "vs7_mc",
        this.vs7_mc.parent = this,
        this.vs7_mc.setTransform(364.2, 234.2),
        this.vs8_mc = new n.BoardSpot,
        this.vs8_mc.name = "vs8_mc",
        this.vs8_mc.parent = this,
        this.vs8_mc.setTransform(364.2, 118.2),
        this.vs4_mc = new n.BoardSpot,
        this.vs4_mc.name = "vs4_mc",
        this.vs4_mc.parent = this,
        this.vs4_mc.setTransform(272.7, 234.2),
        this.vs5_mc = new n.BoardSpot,
        this.vs5_mc.name = "vs5_mc",
        this.vs5_mc.parent = this,
        this.vs5_mc.setTransform(272.7, 118.2),
        this.vs1_mc = new n.BoardSpot,
        this.vs1_mc.name = "vs1_mc",
        this.vs1_mc.parent = this,
        this.vs1_mc.setTransform(181.1, 234.2),
        this.vs2_mc = new n.BoardSpot,
        this.vs2_mc.name = "vs2_mc",
        this.vs2_mc.parent = this,
        this.vs2_mc.setTransform(181.1, 118.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.vs2_mc
            }, {
                t: this.vs1_mc
            }, {
                t: this.vs5_mc
            }, {
                t: this.vs4_mc
            }, {
                t: this.vs8_mc
            }, {
                t: this.vs7_mc
            }, {
                t: this.vs11_mc
            }, {
                t: this.vs10_mc
            }, {
                t: this.vs14_mc
            }, {
                t: this.vs13_mc
            }, {
                t: this.vs17_mc
            }, {
                t: this.vs16_mc
            }, {
                t: this.vs20_mc
            }, {
                t: this.vs19_mc
            }, {
                t: this.vs23_mc
            }, {
                t: this.vs22_mc
            }, {
                t: this.vs26_mc
            }, {
                t: this.vs25_mc
            }, {
                t: this.vs29_mc
            }, {
                t: this.vs28_mc
            }, {
                t: this.vs32_mc
            }, {
                t: this.vs31_mc
            }, {
                t: this.vs35_mc
            }, {
                t: this.vs34_mc
            }]
        }).wait(1)),
        this.hs33_mc = new n.BoardSpot,
        this.hs33_mc.name = "hs33_mc",
        this.hs33_mc.parent = this,
        this.hs33_mc.setTransform(1144.9, 58.2),
        this.hs30_mc = new n.BoardSpot,
        this.hs30_mc.name = "hs30_mc",
        this.hs30_mc.parent = this,
        this.hs30_mc.setTransform(1053.1, 58.2),
        this.hs27_mc = new n.BoardSpot,
        this.hs27_mc.name = "hs27_mc",
        this.hs27_mc.parent = this,
        this.hs27_mc.setTransform(961.3, 58.2),
        this.hs24_mc = new n.BoardSpot,
        this.hs24_mc.name = "hs24_mc",
        this.hs24_mc.parent = this,
        this.hs24_mc.setTransform(869.5, 58.2),
        this.hs21_mc = new n.BoardSpot,
        this.hs21_mc.name = "hs21_mc",
        this.hs21_mc.parent = this,
        this.hs21_mc.setTransform(777.7, 58.2),
        this.hs18_mc = new n.BoardSpot,
        this.hs18_mc.name = "hs18_mc",
        this.hs18_mc.parent = this,
        this.hs18_mc.setTransform(685.9, 58.2),
        this.hs15_mc = new n.BoardSpot,
        this.hs15_mc.name = "hs15_mc",
        this.hs15_mc.parent = this,
        this.hs15_mc.setTransform(594.1, 58.2),
        this.hs12_mc = new n.BoardSpot,
        this.hs12_mc.name = "hs12_mc",
        this.hs12_mc.parent = this,
        this.hs12_mc.setTransform(502.3, 58.2),
        this.hs9_mc = new n.BoardSpot,
        this.hs9_mc.name = "hs9_mc",
        this.hs9_mc.parent = this,
        this.hs9_mc.setTransform(410.5, 58.2),
        this.hs6_mc = new n.BoardSpot,
        this.hs6_mc.name = "hs6_mc",
        this.hs6_mc.parent = this,
        this.hs6_mc.setTransform(318.7, 58.2),
        this.hs3_mc = new n.BoardSpot,
        this.hs3_mc.name = "hs3_mc",
        this.hs3_mc.parent = this,
        this.hs3_mc.setTransform(226.9, 58.2),
        this.hs32_mc = new n.BoardSpot,
        this.hs32_mc.name = "hs32_mc",
        this.hs32_mc.parent = this,
        this.hs32_mc.setTransform(1144.9, 176.3),
        this.hs29_mc = new n.BoardSpot,
        this.hs29_mc.name = "hs29_mc",
        this.hs29_mc.parent = this,
        this.hs29_mc.setTransform(1053.1, 176.3),
        this.hs26_mc = new n.BoardSpot,
        this.hs26_mc.name = "hs26_mc",
        this.hs26_mc.parent = this,
        this.hs26_mc.setTransform(961.3, 176.3),
        this.hs23_mc = new n.BoardSpot,
        this.hs23_mc.name = "hs23_mc",
        this.hs23_mc.parent = this,
        this.hs23_mc.setTransform(869.5, 176.3),
        this.hs20_mc = new n.BoardSpot,
        this.hs20_mc.name = "hs20_mc",
        this.hs20_mc.parent = this,
        this.hs20_mc.setTransform(777.7, 176.3),
        this.hs17_mc = new n.BoardSpot,
        this.hs17_mc.name = "hs17_mc",
        this.hs17_mc.parent = this,
        this.hs17_mc.setTransform(685.9, 176.3),
        this.hs14_mc = new n.BoardSpot,
        this.hs14_mc.name = "hs14_mc",
        this.hs14_mc.parent = this,
        this.hs14_mc.setTransform(594.1, 176.3),
        this.hs11_mc = new n.BoardSpot,
        this.hs11_mc.name = "hs11_mc",
        this.hs11_mc.parent = this,
        this.hs11_mc.setTransform(502.3, 176.3),
        this.hs8_mc = new n.BoardSpot,
        this.hs8_mc.name = "hs8_mc",
        this.hs8_mc.parent = this,
        this.hs8_mc.setTransform(410.5, 176.3),
        this.hs5_mc = new n.BoardSpot,
        this.hs5_mc.name = "hs5_mc",
        this.hs5_mc.parent = this,
        this.hs5_mc.setTransform(318.7, 176.3),
        this.hs2_mc = new n.BoardSpot,
        this.hs2_mc.name = "hs2_mc",
        this.hs2_mc.parent = this,
        this.hs2_mc.setTransform(226.9, 176.3),
        this.hs31_mc = new n.BoardSpot,
        this.hs31_mc.name = "hs31_mc",
        this.hs31_mc.parent = this,
        this.hs31_mc.setTransform(1144.9, 291.2),
        this.hs28_mc = new n.BoardSpot,
        this.hs28_mc.name = "hs28_mc",
        this.hs28_mc.parent = this,
        this.hs28_mc.setTransform(1053.1, 291.2),
        this.hs25_mc = new n.BoardSpot,
        this.hs25_mc.name = "hs25_mc",
        this.hs25_mc.parent = this,
        this.hs25_mc.setTransform(961.3, 291.2),
        this.hs22_mc = new n.BoardSpot,
        this.hs22_mc.name = "hs22_mc",
        this.hs22_mc.parent = this,
        this.hs22_mc.setTransform(869.5, 291.2),
        this.hs19_mc = new n.BoardSpot,
        this.hs19_mc.name = "hs19_mc",
        this.hs19_mc.parent = this,
        this.hs19_mc.setTransform(777.7, 291.2),
        this.hs16_mc = new n.BoardSpot,
        this.hs16_mc.name = "hs16_mc",
        this.hs16_mc.parent = this,
        this.hs16_mc.setTransform(685.9, 291.2),
        this.hs13_mc = new n.BoardSpot,
        this.hs13_mc.name = "hs13_mc",
        this.hs13_mc.parent = this,
        this.hs13_mc.setTransform(594.1, 291.2),
        this.hs10_mc = new n.BoardSpot,
        this.hs10_mc.name = "hs10_mc",
        this.hs10_mc.parent = this,
        this.hs10_mc.setTransform(502.3, 291.2),
        this.hs7_mc = new n.BoardSpot,
        this.hs7_mc.name = "hs7_mc",
        this.hs7_mc.parent = this,
        this.hs7_mc.setTransform(410.5, 291.2),
        this.hs4_mc = new n.BoardSpot,
        this.hs4_mc.name = "hs4_mc",
        this.hs4_mc.parent = this,
        this.hs4_mc.setTransform(318.7, 291.2),
        this.hs1_mc = new n.BoardSpot,
        this.hs1_mc.name = "hs1_mc",
        this.hs1_mc.parent = this,
        this.hs1_mc.setTransform(226.9, 291.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.hs1_mc
            }, {
                t: this.hs4_mc
            }, {
                t: this.hs7_mc
            }, {
                t: this.hs10_mc
            }, {
                t: this.hs13_mc
            }, {
                t: this.hs16_mc
            }, {
                t: this.hs19_mc
            }, {
                t: this.hs22_mc
            }, {
                t: this.hs25_mc
            }, {
                t: this.hs28_mc
            }, {
                t: this.hs31_mc
            }, {
                t: this.hs2_mc
            }, {
                t: this.hs5_mc
            }, {
                t: this.hs8_mc
            }, {
                t: this.hs11_mc
            }, {
                t: this.hs14_mc
            }, {
                t: this.hs17_mc
            }, {
                t: this.hs20_mc
            }, {
                t: this.hs23_mc
            }, {
                t: this.hs26_mc
            }, {
                t: this.hs29_mc
            }, {
                t: this.hs32_mc
            }, {
                t: this.hs3_mc
            }, {
                t: this.hs6_mc
            }, {
                t: this.hs9_mc
            }, {
                t: this.hs12_mc
            }, {
                t: this.hs15_mc
            }, {
                t: this.hs18_mc
            }, {
                t: this.hs21_mc
            }, {
                t: this.hs24_mc
            }, {
                t: this.hs27_mc
            }, {
                t: this.hs30_mc
            }, {
                t: this.hs33_mc
            }]
        }).wait(1)),
        this.ss12a_mc = new n.BoardSpot,
        this.ss12a_mc.name = "ss12a_mc",
        this.ss12a_mc.parent = this,
        this.ss12a_mc.setTransform(1144.9, 2.2),
        this.ss11a_mc = new n.BoardSpot,
        this.ss11a_mc.name = "ss11a_mc",
        this.ss11a_mc.parent = this,
        this.ss11a_mc.setTransform(1052.6, 2.2),
        this.ss10a_mc = new n.BoardSpot,
        this.ss10a_mc.name = "ss10a_mc",
        this.ss10a_mc.parent = this,
        this.ss10a_mc.setTransform(960.9, 2.2),
        this.ss9a_mc = new n.BoardSpot,
        this.ss9a_mc.name = "ss9a_mc",
        this.ss9a_mc.parent = this,
        this.ss9a_mc.setTransform(869.1, 2.2),
        this.ss8a_mc = new n.BoardSpot,
        this.ss8a_mc.name = "ss8a_mc",
        this.ss8a_mc.parent = this,
        this.ss8a_mc.setTransform(777.4, 2.2),
        this.ss7a_mc = new n.BoardSpot,
        this.ss7a_mc.name = "ss7a_mc",
        this.ss7a_mc.parent = this,
        this.ss7a_mc.setTransform(685.6, 2.2),
        this.ss6a_mc = new n.BoardSpot,
        this.ss6a_mc.name = "ss6a_mc",
        this.ss6a_mc.parent = this,
        this.ss6a_mc.setTransform(593.9, 2.2),
        this.ss5a_mc = new n.BoardSpot,
        this.ss5a_mc.name = "ss5a_mc",
        this.ss5a_mc.parent = this,
        this.ss5a_mc.setTransform(502.1, 2.2),
        this.ss4a_mc = new n.BoardSpot,
        this.ss4a_mc.name = "ss4a_mc",
        this.ss4a_mc.parent = this,
        this.ss4a_mc.setTransform(410.4, 2.2),
        this.ss3a_mc = new n.BoardSpot,
        this.ss3a_mc.name = "ss3a_mc",
        this.ss3a_mc.parent = this,
        this.ss3a_mc.setTransform(318.6, 2.2),
        this.ss2a_mc = new n.BoardSpot,
        this.ss2a_mc.name = "ss2a_mc",
        this.ss2a_mc.parent = this,
        this.ss2a_mc.setTransform(226.9, 2.2),
        this.ss1a_mc = new n.BoardSpot,
        this.ss1a_mc.name = "ss1a_mc",
        this.ss1a_mc.parent = this,
        this.ss1a_mc.setTransform(135.1, 2.2),
        this.ss12_mc = new n.BoardSpot,
        this.ss12_mc.name = "ss12_mc",
        this.ss12_mc.parent = this,
        this.ss12_mc.setTransform(1144.9, 350.2),
        this.ss11_mc = new n.BoardSpot,
        this.ss11_mc.name = "ss11_mc",
        this.ss11_mc.parent = this,
        this.ss11_mc.setTransform(1052.6, 350.2),
        this.ss10_mc = new n.BoardSpot,
        this.ss10_mc.name = "ss10_mc",
        this.ss10_mc.parent = this,
        this.ss10_mc.setTransform(960.9, 350.2),
        this.ss9_mc = new n.BoardSpot,
        this.ss9_mc.name = "ss9_mc",
        this.ss9_mc.parent = this,
        this.ss9_mc.setTransform(869.1, 350.2),
        this.ss8_mc = new n.BoardSpot,
        this.ss8_mc.name = "ss8_mc",
        this.ss8_mc.parent = this,
        this.ss8_mc.setTransform(777.4, 350.2),
        this.ss7_mc = new n.BoardSpot,
        this.ss7_mc.name = "ss7_mc",
        this.ss7_mc.parent = this,
        this.ss7_mc.setTransform(685.6, 350.2),
        this.ss6_mc = new n.BoardSpot,
        this.ss6_mc.name = "ss6_mc",
        this.ss6_mc.parent = this,
        this.ss6_mc.setTransform(593.9, 350.2),
        this.ss5_mc = new n.BoardSpot,
        this.ss5_mc.name = "ss5_mc",
        this.ss5_mc.parent = this,
        this.ss5_mc.setTransform(502.1, 350.2),
        this.ss4_mc = new n.BoardSpot,
        this.ss4_mc.name = "ss4_mc",
        this.ss4_mc.parent = this,
        this.ss4_mc.setTransform(410.4, 350.2),
        this.ss3_mc = new n.BoardSpot,
        this.ss3_mc.name = "ss3_mc",
        this.ss3_mc.parent = this,
        this.ss3_mc.setTransform(318.6, 350.2),
        this.ss2_mc = new n.BoardSpot,
        this.ss2_mc.name = "ss2_mc",
        this.ss2_mc.parent = this,
        this.ss2_mc.setTransform(226.9, 350.2),
        this.ss1_mc = new n.BoardSpot,
        this.ss1_mc.name = "ss1_mc",
        this.ss1_mc.parent = this,
        this.ss1_mc.setTransform(135.1, 350.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.ss1_mc
            }, {
                t: this.ss2_mc
            }, {
                t: this.ss3_mc
            }, {
                t: this.ss4_mc
            }, {
                t: this.ss5_mc
            }, {
                t: this.ss6_mc
            }, {
                t: this.ss7_mc
            }, {
                t: this.ss8_mc
            }, {
                t: this.ss9_mc
            }, {
                t: this.ss10_mc
            }, {
                t: this.ss11_mc
            }, {
                t: this.ss12_mc
            }, {
                t: this.ss1a_mc
            }, {
                t: this.ss2a_mc
            }, {
                t: this.ss3a_mc
            }, {
                t: this.ss4a_mc
            }, {
                t: this.ss5a_mc
            }, {
                t: this.ss6a_mc
            }, {
                t: this.ss7a_mc
            }, {
                t: this.ss8a_mc
            }, {
                t: this.ss9a_mc
            }, {
                t: this.ss10a_mc
            }, {
                t: this.ss11a_mc
            }, {
                t: this.ss12a_mc
            }]
        }).wait(1)),
        this.s12a_mc = new n.BoardSpot,
        this.s12a_mc.name = "s12a_mc",
        this.s12a_mc.parent = this,
        this.s12a_mc.setTransform(1188.2, 2.2),
        this.s11a_mc = new n.BoardSpot,
        this.s11a_mc.name = "s11a_mc",
        this.s11a_mc.parent = this,
        this.s11a_mc.setTransform(1096.6, 1.1),
        this.s10a_mc = new n.BoardSpot,
        this.s10a_mc.name = "s10a_mc",
        this.s10a_mc.parent = this,
        this.s10a_mc.setTransform(1005.1, 1.1),
        this.s9a_mc = new n.BoardSpot,
        this.s9a_mc.name = "s9a_mc",
        this.s9a_mc.parent = this,
        this.s9a_mc.setTransform(913.5, 1.1),
        this.s8a_mc = new n.BoardSpot,
        this.s8a_mc.name = "s8a_mc",
        this.s8a_mc.parent = this,
        this.s8a_mc.setTransform(822, 1.1),
        this.s7a_mc = new n.BoardSpot,
        this.s7a_mc.name = "s7a_mc",
        this.s7a_mc.parent = this,
        this.s7a_mc.setTransform(730.4, 1.1),
        this.s6a_mc = new n.BoardSpot,
        this.s6a_mc.name = "s6a_mc",
        this.s6a_mc.parent = this,
        this.s6a_mc.setTransform(638.9, 1.1),
        this.s5a_mc = new n.BoardSpot,
        this.s5a_mc.name = "s5a_mc",
        this.s5a_mc.parent = this,
        this.s5a_mc.setTransform(547.3, 1.1),
        this.s4a_mc = new n.BoardSpot,
        this.s4a_mc.name = "s4a_mc",
        this.s4a_mc.parent = this,
        this.s4a_mc.setTransform(455.8, 1.1),
        this.s3a_mc = new n.BoardSpot,
        this.s3a_mc.name = "s3a_mc",
        this.s3a_mc.parent = this,
        this.s3a_mc.setTransform(364.2, 1.1),
        this.s2a_mc = new n.BoardSpot,
        this.s2a_mc.name = "s2a_mc",
        this.s2a_mc.parent = this,
        this.s2a_mc.setTransform(272.7, 1.1),
        this.s1a_mc = new n.BoardSpot,
        this.s1a_mc.name = "s1a_mc",
        this.s1a_mc.parent = this,
        this.s1a_mc.setTransform(181.1, 1.1),
        this.s12_mc = new n.BoardSpot,
        this.s12_mc.name = "s12_mc",
        this.s12_mc.parent = this,
        this.s12_mc.setTransform(1188.2, 350.2),
        this.s11_mc = new n.BoardSpot,
        this.s11_mc.name = "s11_mc",
        this.s11_mc.parent = this,
        this.s11_mc.setTransform(1096.6, 350.2),
        this.s10_mc = new n.BoardSpot,
        this.s10_mc.name = "s10_mc",
        this.s10_mc.parent = this,
        this.s10_mc.setTransform(1005.1, 350.2),
        this.s9_mc = new n.BoardSpot,
        this.s9_mc.name = "s9_mc",
        this.s9_mc.parent = this,
        this.s9_mc.setTransform(913.5, 350.2),
        this.s8_mc = new n.BoardSpot,
        this.s8_mc.name = "s8_mc",
        this.s8_mc.parent = this,
        this.s8_mc.setTransform(822, 350.2),
        this.s7_mc = new n.BoardSpot,
        this.s7_mc.name = "s7_mc",
        this.s7_mc.parent = this,
        this.s7_mc.setTransform(730.4, 350.2),
        this.s6_mc = new n.BoardSpot,
        this.s6_mc.name = "s6_mc",
        this.s6_mc.parent = this,
        this.s6_mc.setTransform(638.9, 350.2),
        this.s5_mc = new n.BoardSpot,
        this.s5_mc.name = "s5_mc",
        this.s5_mc.parent = this,
        this.s5_mc.setTransform(547.3, 350.2),
        this.s4_mc = new n.BoardSpot,
        this.s4_mc.name = "s4_mc",
        this.s4_mc.parent = this,
        this.s4_mc.setTransform(455.8, 350.2),
        this.s3_mc = new n.BoardSpot,
        this.s3_mc.name = "s3_mc",
        this.s3_mc.parent = this,
        this.s3_mc.setTransform(364.2, 350.2),
        this.s2_mc = new n.BoardSpot,
        this.s2_mc.name = "s2_mc",
        this.s2_mc.parent = this,
        this.s2_mc.setTransform(272.7, 350.2),
        this.s1_mc = new n.BoardSpot,
        this.s1_mc.name = "s1_mc",
        this.s1_mc.parent = this,
        this.s1_mc.setTransform(181.1, 350.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.s1_mc
            }, {
                t: this.s2_mc
            }, {
                t: this.s3_mc
            }, {
                t: this.s4_mc
            }, {
                t: this.s5_mc
            }, {
                t: this.s6_mc
            }, {
                t: this.s7_mc
            }, {
                t: this.s8_mc
            }, {
                t: this.s9_mc
            }, {
                t: this.s10_mc
            }, {
                t: this.s11_mc
            }, {
                t: this.s12_mc
            }, {
                t: this.s1a_mc
            }, {
                t: this.s2a_mc
            }, {
                t: this.s3a_mc
            }, {
                t: this.s4a_mc
            }, {
                t: this.s5a_mc
            }, {
                t: this.s6a_mc
            }, {
                t: this.s7a_mc
            }, {
                t: this.s8a_mc
            }, {
                t: this.s9a_mc
            }, {
                t: this.s10a_mc
            }, {
                t: this.s11a_mc
            }, {
                t: this.s12a_mc
            }]
        }).wait(1)),
        this.n19t36_mc = new n.BoardSpotRange,
        this.n19t36_mc.name = "n19t36_mc",
        this.n19t36_mc.parent = this,
        this.n19t36_mc.setTransform(1144, 525.8),
        this.nOdd_mc = new n.BoardSpotRange,
        this.nOdd_mc.name = "nOdd_mc",
        this.nOdd_mc.parent = this,
        this.nOdd_mc.setTransform(960.5, 525.8),
        this.nBlack_mc = new n.BoardSpotRange,
        this.nBlack_mc.name = "nBlack_mc",
        this.nBlack_mc.parent = this,
        this.nBlack_mc.setTransform(777.1, 525.8),
        this.nRed_mc = new n.BoardSpotRange,
        this.nRed_mc.name = "nRed_mc",
        this.nRed_mc.parent = this,
        this.nRed_mc.setTransform(593.6, 525.8),
        this.nEven_mc = new n.BoardSpotRange,
        this.nEven_mc.name = "nEven_mc",
        this.nEven_mc.parent = this,
        this.nEven_mc.setTransform(410.2, 525.8),
        this.n25t36_mc = new n.BoardSpotRangeWide,
        this.n25t36_mc.name = "n25t36_mc",
        this.n25t36_mc.parent = this,
        this.n25t36_mc.setTransform(1053, 411.6),
        this.n13t24_mc = new n.BoardSpotRangeWide,
        this.n13t24_mc.name = "n13t24_mc",
        this.n13t24_mc.parent = this,
        this.n13t24_mc.setTransform(685.3, 411.6),
        this.n1t18_mc = new n.BoardSpotRange,
        this.n1t18_mc.name = "n1t18_mc",
        this.n1t18_mc.parent = this,
        this.n1t18_mc.setTransform(226.7, 525.8),
        this.n1t12_mc = new n.BoardSpotRangeWide,
        this.n1t12_mc.name = "n1t12_mc",
        this.n1t12_mc.parent = this,
        this.n1t12_mc.setTransform(317.7, 411.6),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.n1t12_mc
            }, {
                t: this.n1t18_mc
            }, {
                t: this.n13t24_mc
            }, {
                t: this.n25t36_mc
            }, {
                t: this.nEven_mc
            }, {
                t: this.nRed_mc
            }, {
                t: this.nBlack_mc
            }, {
                t: this.nOdd_mc
            }, {
                t: this.n19t36_mc
            }]
        }).wait(1)),
        this.n0_mc = new n.BoardSpot,
        this.n0_mc.name = "n0_mc",
        this.n0_mc.parent = this,
        this.n0_mc.setTransform(78.7, 263.2),
        this.n00_mc = new n.BoardSpot,
        this.n00_mc.name = "n00_mc",
        this.n00_mc.parent = this,
        this.n00_mc.setTransform(78.7, 89.2),
        this.n1st_mc = new n.BoardSpot,
        this.n1st_mc.name = "n1st_mc",
        this.n1st_mc.parent = this,
        this.n1st_mc.setTransform(1279.7, 291.2),
        this.n2nd_mc = new n.BoardSpot,
        this.n2nd_mc.name = "n2nd_mc",
        this.n2nd_mc.parent = this,
        this.n2nd_mc.setTransform(1279.7, 175.2),
        this.n3rd_mc = new n.BoardSpot,
        this.n3rd_mc.name = "n3rd_mc",
        this.n3rd_mc.parent = this,
        this.n3rd_mc.setTransform(1279.7, 58.2),
        this.n34_mc = new n.BoardSpot,
        this.n34_mc.name = "n34_mc",
        this.n34_mc.parent = this,
        this.n34_mc.setTransform(1188.2, 291.2),
        this.n35_mc = new n.BoardSpot,
        this.n35_mc.name = "n35_mc",
        this.n35_mc.parent = this,
        this.n35_mc.setTransform(1188.2, 175.2),
        this.n36_mc = new n.BoardSpot,
        this.n36_mc.name = "n36_mc",
        this.n36_mc.parent = this,
        this.n36_mc.setTransform(1188.2, 58.2),
        this.n31_mc = new n.BoardSpot,
        this.n31_mc.name = "n31_mc",
        this.n31_mc.parent = this,
        this.n31_mc.setTransform(1096.6, 291.2),
        this.n32_mc = new n.BoardSpot,
        this.n32_mc.name = "n32_mc",
        this.n32_mc.parent = this,
        this.n32_mc.setTransform(1096.6, 175.2),
        this.n33_mc = new n.BoardSpot,
        this.n33_mc.name = "n33_mc",
        this.n33_mc.parent = this,
        this.n33_mc.setTransform(1096.6, 58.2),
        this.n28_mc = new n.BoardSpot,
        this.n28_mc.name = "n28_mc",
        this.n28_mc.parent = this,
        this.n28_mc.setTransform(1005.1, 291.2),
        this.n29_mc = new n.BoardSpot,
        this.n29_mc.name = "n29_mc",
        this.n29_mc.parent = this,
        this.n29_mc.setTransform(1005.1, 175.2),
        this.n30_mc = new n.BoardSpot,
        this.n30_mc.name = "n30_mc",
        this.n30_mc.parent = this,
        this.n30_mc.setTransform(1005.1, 58.2),
        this.n25_mc = new n.BoardSpot,
        this.n25_mc.name = "n25_mc",
        this.n25_mc.parent = this,
        this.n25_mc.setTransform(913.5, 291.2),
        this.n26_mc = new n.BoardSpot,
        this.n26_mc.name = "n26_mc",
        this.n26_mc.parent = this,
        this.n26_mc.setTransform(913.5, 175.2),
        this.n27_mc = new n.BoardSpot,
        this.n27_mc.name = "n27_mc",
        this.n27_mc.parent = this,
        this.n27_mc.setTransform(913.5, 58.2),
        this.n22_mc = new n.BoardSpot,
        this.n22_mc.name = "n22_mc",
        this.n22_mc.parent = this,
        this.n22_mc.setTransform(822, 291.2),
        this.n23_mc = new n.BoardSpot,
        this.n23_mc.name = "n23_mc",
        this.n23_mc.parent = this,
        this.n23_mc.setTransform(822, 175.2),
        this.n24_mc = new n.BoardSpot,
        this.n24_mc.name = "n24_mc",
        this.n24_mc.parent = this,
        this.n24_mc.setTransform(822, 58.2),
        this.n19_mc = new n.BoardSpot,
        this.n19_mc.name = "n19_mc",
        this.n19_mc.parent = this,
        this.n19_mc.setTransform(730.4, 291.2),
        this.n20_mc = new n.BoardSpot,
        this.n20_mc.name = "n20_mc",
        this.n20_mc.parent = this,
        this.n20_mc.setTransform(730.4, 175.2),
        this.n21_mc = new n.BoardSpot,
        this.n21_mc.name = "n21_mc",
        this.n21_mc.parent = this,
        this.n21_mc.setTransform(730.4, 58.2),
        this.n16_mc = new n.BoardSpot,
        this.n16_mc.name = "n16_mc",
        this.n16_mc.parent = this,
        this.n16_mc.setTransform(638.9, 291.2),
        this.n17_mc = new n.BoardSpot,
        this.n17_mc.name = "n17_mc",
        this.n17_mc.parent = this,
        this.n17_mc.setTransform(638.9, 175.2),
        this.n18_mc = new n.BoardSpot,
        this.n18_mc.name = "n18_mc",
        this.n18_mc.parent = this,
        this.n18_mc.setTransform(638.9, 58.2),
        this.n13_mc = new n.BoardSpot,
        this.n13_mc.name = "n13_mc",
        this.n13_mc.parent = this,
        this.n13_mc.setTransform(547.3, 291.2),
        this.n14_mc = new n.BoardSpot,
        this.n14_mc.name = "n14_mc",
        this.n14_mc.parent = this,
        this.n14_mc.setTransform(547.3, 175.2),
        this.n15_mc = new n.BoardSpot,
        this.n15_mc.name = "n15_mc",
        this.n15_mc.parent = this,
        this.n15_mc.setTransform(547.3, 58.2),
        this.n10_mc = new n.BoardSpot,
        this.n10_mc.name = "n10_mc",
        this.n10_mc.parent = this,
        this.n10_mc.setTransform(455.8, 291.2),
        this.n11_mc = new n.BoardSpot,
        this.n11_mc.name = "n11_mc",
        this.n11_mc.parent = this,
        this.n11_mc.setTransform(455.8, 175.2),
        this.n12_mc = new n.BoardSpot,
        this.n12_mc.name = "n12_mc",
        this.n12_mc.parent = this,
        this.n12_mc.setTransform(455.8, 58.2),
        this.n7_mc = new n.BoardSpot,
        this.n7_mc.name = "n7_mc",
        this.n7_mc.parent = this,
        this.n7_mc.setTransform(364.2, 291.2),
        this.n8_mc = new n.BoardSpot,
        this.n8_mc.name = "n8_mc",
        this.n8_mc.parent = this,
        this.n8_mc.setTransform(364.2, 175.2),
        this.n9_mc = new n.BoardSpot,
        this.n9_mc.name = "n9_mc",
        this.n9_mc.parent = this,
        this.n9_mc.setTransform(364.2, 58.2),
        this.n4_mc = new n.BoardSpot,
        this.n4_mc.name = "n4_mc",
        this.n4_mc.parent = this,
        this.n4_mc.setTransform(272.7, 291.2),
        this.n5_mc = new n.BoardSpot,
        this.n5_mc.name = "n5_mc",
        this.n5_mc.parent = this,
        this.n5_mc.setTransform(272.7, 175.2),
        this.n6_mc = new n.BoardSpot,
        this.n6_mc.name = "n6_mc",
        this.n6_mc.parent = this,
        this.n6_mc.setTransform(272.7, 58.2),
        this.n1_mc = new n.BoardSpot,
        this.n1_mc.name = "n1_mc",
        this.n1_mc.parent = this,
        this.n1_mc.setTransform(181.1, 291.2),
        this.n2_mc = new n.BoardSpot,
        this.n2_mc.name = "n2_mc",
        this.n2_mc.parent = this,
        this.n2_mc.setTransform(181.1, 175.2),
        this.n3_mc = new n.BoardSpot,
        this.n3_mc.name = "n3_mc",
        this.n3_mc.parent = this,
        this.n3_mc.setTransform(181.1, 58.2),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.n3_mc
            }, {
                t: this.n2_mc
            }, {
                t: this.n1_mc
            }, {
                t: this.n6_mc
            }, {
                t: this.n5_mc
            }, {
                t: this.n4_mc
            }, {
                t: this.n9_mc
            }, {
                t: this.n8_mc
            }, {
                t: this.n7_mc
            }, {
                t: this.n12_mc
            }, {
                t: this.n11_mc
            }, {
                t: this.n10_mc
            }, {
                t: this.n15_mc
            }, {
                t: this.n14_mc
            }, {
                t: this.n13_mc
            }, {
                t: this.n18_mc
            }, {
                t: this.n17_mc
            }, {
                t: this.n16_mc
            }, {
                t: this.n21_mc
            }, {
                t: this.n20_mc
            }, {
                t: this.n19_mc
            }, {
                t: this.n24_mc
            }, {
                t: this.n23_mc
            }, {
                t: this.n22_mc
            }, {
                t: this.n27_mc
            }, {
                t: this.n26_mc
            }, {
                t: this.n25_mc
            }, {
                t: this.n30_mc
            }, {
                t: this.n29_mc
            }, {
                t: this.n28_mc
            }, {
                t: this.n33_mc
            }, {
                t: this.n32_mc
            }, {
                t: this.n31_mc
            }, {
                t: this.n36_mc
            }, {
                t: this.n35_mc
            }, {
                t: this.n34_mc
            }, {
                t: this.n3rd_mc
            }, {
                t: this.n2nd_mc
            }, {
                t: this.n1st_mc
            }, {
                t: this.n00_mc
            }, {
                t: this.n0_mc
            }]
        }).wait(1))
    }
    ).prototype = o(n.BoardSpots, new s.Rectangle(37.3,-4.9,1248.4,587.4), null),
    (n.BoardHighlights = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.mouseChildren = this.mouseEnabled = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.h3rd_mc = new n.BoardHighlightNumbers,
        this.h3rd_mc.name = "h3rd_mc",
        this.h3rd_mc.parent = this,
        this.h3rd_mc.setTransform(1259.9, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h36_mc = new n.BoardHighlightNumbers,
        this.h36_mc.name = "h36_mc",
        this.h36_mc.parent = this,
        this.h36_mc.setTransform(1168.2, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h33_mc = new n.BoardHighlightNumbers,
        this.h33_mc.name = "h33_mc",
        this.h33_mc.parent = this,
        this.h33_mc.setTransform(1076.4, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h30_mc = new n.BoardHighlightNumbers,
        this.h30_mc.name = "h30_mc",
        this.h30_mc.parent = this,
        this.h30_mc.setTransform(984.7, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h27_mc = new n.BoardHighlightNumbers,
        this.h27_mc.name = "h27_mc",
        this.h27_mc.parent = this,
        this.h27_mc.setTransform(892.9, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h24_mc = new n.BoardHighlightNumbers,
        this.h24_mc.name = "h24_mc",
        this.h24_mc.parent = this,
        this.h24_mc.setTransform(801.2, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h21_mc = new n.BoardHighlightNumbers,
        this.h21_mc.name = "h21_mc",
        this.h21_mc.parent = this,
        this.h21_mc.setTransform(709.4, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h18_mc = new n.BoardHighlightNumbers,
        this.h18_mc.name = "h18_mc",
        this.h18_mc.parent = this,
        this.h18_mc.setTransform(617.7, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h15_mc = new n.BoardHighlightNumbers,
        this.h15_mc.name = "h15_mc",
        this.h15_mc.parent = this,
        this.h15_mc.setTransform(525.9, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h12_mc = new n.BoardHighlightNumbers,
        this.h12_mc.name = "h12_mc",
        this.h12_mc.parent = this,
        this.h12_mc.setTransform(434.2, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h9_mc = new n.BoardHighlightNumbers,
        this.h9_mc.name = "h9_mc",
        this.h9_mc.parent = this,
        this.h9_mc.setTransform(342.4, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h6_mc = new n.BoardHighlightNumbers,
        this.h6_mc.name = "h6_mc",
        this.h6_mc.parent = this,
        this.h6_mc.setTransform(250.7, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h3_mc = new n.BoardHighlightNumbers,
        this.h3_mc.name = "h3_mc",
        this.h3_mc.parent = this,
        this.h3_mc.setTransform(158.9, 31.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h3_mc
            }, {
                t: this.h6_mc
            }, {
                t: this.h9_mc
            }, {
                t: this.h12_mc
            }, {
                t: this.h15_mc
            }, {
                t: this.h18_mc
            }, {
                t: this.h21_mc
            }, {
                t: this.h24_mc
            }, {
                t: this.h27_mc
            }, {
                t: this.h30_mc
            }, {
                t: this.h33_mc
            }, {
                t: this.h36_mc
            }, {
                t: this.h3rd_mc
            }]
        }).wait(1)),
        this.h2nd_mc = new n.BoardHighlightNumbers,
        this.h2nd_mc.name = "h2nd_mc",
        this.h2nd_mc.parent = this,
        this.h2nd_mc.setTransform(1259.9, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h35_mc = new n.BoardHighlightNumbers,
        this.h35_mc.name = "h35_mc",
        this.h35_mc.parent = this,
        this.h35_mc.setTransform(1168.2, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h32_mc = new n.BoardHighlightNumbers,
        this.h32_mc.name = "h32_mc",
        this.h32_mc.parent = this,
        this.h32_mc.setTransform(1076.4, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h29_mc = new n.BoardHighlightNumbers,
        this.h29_mc.name = "h29_mc",
        this.h29_mc.parent = this,
        this.h29_mc.setTransform(984.7, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h26_mc = new n.BoardHighlightNumbers,
        this.h26_mc.name = "h26_mc",
        this.h26_mc.parent = this,
        this.h26_mc.setTransform(892.9, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h23_mc = new n.BoardHighlightNumbers,
        this.h23_mc.name = "h23_mc",
        this.h23_mc.parent = this,
        this.h23_mc.setTransform(801.2, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h20_mc = new n.BoardHighlightNumbers,
        this.h20_mc.name = "h20_mc",
        this.h20_mc.parent = this,
        this.h20_mc.setTransform(709.4, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h17_mc = new n.BoardHighlightNumbers,
        this.h17_mc.name = "h17_mc",
        this.h17_mc.parent = this,
        this.h17_mc.setTransform(617.7, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h14_mc = new n.BoardHighlightNumbers,
        this.h14_mc.name = "h14_mc",
        this.h14_mc.parent = this,
        this.h14_mc.setTransform(525.9, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h11_mc = new n.BoardHighlightNumbers,
        this.h11_mc.name = "h11_mc",
        this.h11_mc.parent = this,
        this.h11_mc.setTransform(434.2, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h8_mc = new n.BoardHighlightNumbers,
        this.h8_mc.name = "h8_mc",
        this.h8_mc.parent = this,
        this.h8_mc.setTransform(342.4, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h5_mc = new n.BoardHighlightNumbers,
        this.h5_mc.name = "h5_mc",
        this.h5_mc.parent = this,
        this.h5_mc.setTransform(250.7, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h2_mc = new n.BoardHighlightNumbers,
        this.h2_mc.name = "h2_mc",
        this.h2_mc.parent = this,
        this.h2_mc.setTransform(158.9, 147.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h2_mc
            }, {
                t: this.h5_mc
            }, {
                t: this.h8_mc
            }, {
                t: this.h11_mc
            }, {
                t: this.h14_mc
            }, {
                t: this.h17_mc
            }, {
                t: this.h20_mc
            }, {
                t: this.h23_mc
            }, {
                t: this.h26_mc
            }, {
                t: this.h29_mc
            }, {
                t: this.h32_mc
            }, {
                t: this.h35_mc
            }, {
                t: this.h2nd_mc
            }]
        }).wait(1)),
        this.h1st_mc = new n.BoardHighlightNumbers,
        this.h1st_mc.name = "h1st_mc",
        this.h1st_mc.parent = this,
        this.h1st_mc.setTransform(1259.9, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h34_mc = new n.BoardHighlightNumbers,
        this.h34_mc.name = "h34_mc",
        this.h34_mc.parent = this,
        this.h34_mc.setTransform(1168.2, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h31_mc = new n.BoardHighlightNumbers,
        this.h31_mc.name = "h31_mc",
        this.h31_mc.parent = this,
        this.h31_mc.setTransform(1076.4, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h28_mc = new n.BoardHighlightNumbers,
        this.h28_mc.name = "h28_mc",
        this.h28_mc.parent = this,
        this.h28_mc.setTransform(984.7, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h25_mc = new n.BoardHighlightNumbers,
        this.h25_mc.name = "h25_mc",
        this.h25_mc.parent = this,
        this.h25_mc.setTransform(892.9, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h22_mc = new n.BoardHighlightNumbers,
        this.h22_mc.name = "h22_mc",
        this.h22_mc.parent = this,
        this.h22_mc.setTransform(801.2, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h19_mc = new n.BoardHighlightNumbers,
        this.h19_mc.name = "h19_mc",
        this.h19_mc.parent = this,
        this.h19_mc.setTransform(709.4, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h16_mc = new n.BoardHighlightNumbers,
        this.h16_mc.name = "h16_mc",
        this.h16_mc.parent = this,
        this.h16_mc.setTransform(617.7, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h13_mc = new n.BoardHighlightNumbers,
        this.h13_mc.name = "h13_mc",
        this.h13_mc.parent = this,
        this.h13_mc.setTransform(525.9, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h10_mc = new n.BoardHighlightNumbers,
        this.h10_mc.name = "h10_mc",
        this.h10_mc.parent = this,
        this.h10_mc.setTransform(434.2, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h7_mc = new n.BoardHighlightNumbers,
        this.h7_mc.name = "h7_mc",
        this.h7_mc.parent = this,
        this.h7_mc.setTransform(342.4, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h4_mc = new n.BoardHighlightNumbers,
        this.h4_mc.name = "h4_mc",
        this.h4_mc.parent = this,
        this.h4_mc.setTransform(250.7, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.h1_mc = new n.BoardHighlightNumbers,
        this.h1_mc.name = "h1_mc",
        this.h1_mc.parent = this,
        this.h1_mc.setTransform(158.9, 263.9, 1, 1, 0, 0, 0, 21.9, 27.9),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h1_mc
            }, {
                t: this.h4_mc
            }, {
                t: this.h7_mc
            }, {
                t: this.h10_mc
            }, {
                t: this.h13_mc
            }, {
                t: this.h16_mc
            }, {
                t: this.h19_mc
            }, {
                t: this.h22_mc
            }, {
                t: this.h25_mc
            }, {
                t: this.h28_mc
            }, {
                t: this.h31_mc
            }, {
                t: this.h34_mc
            }, {
                t: this.h1st_mc
            }]
        }).wait(1)),
        this.h0_mc = new n.BoardHighlightZeros,
        this.h0_mc.name = "h0_mc",
        this.h0_mc.parent = this,
        this.h0_mc.setTransform(37.1, 220.5, 1, 1, 0, 0, 0, 32.1, 42.5),
        this.h00_mc = new n.BoardHighlightZeros,
        this.h00_mc.name = "h00_mc",
        this.h00_mc.parent = this,
        this.h00_mc.setTransform(37.1, 46.5, 1, 1, 0, 0, 0, 32.1, 42.5),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h00_mc
            }, {
                t: this.h0_mc
            }]
        }).wait(1)),
        this.h25t36_mc = new n.BoardHighlightRangeWide,
        this.h25t36_mc.name = "h25t36_mc",
        this.h25t36_mc.parent = this,
        this.h25t36_mc.setTransform(961.8, 379.9, 1, 1, 0, 0, 0, 90.8, 27.9),
        this.h13t24_mc = new n.BoardHighlightRangeWide,
        this.h13t24_mc.name = "h13t24_mc",
        this.h13t24_mc.parent = this,
        this.h13t24_mc.setTransform(594.8, 379.9, 1, 1, 0, 0, 0, 90.8, 27.9),
        this.h1t12_mc = new n.BoardHighlightRangeWide,
        this.h1t12_mc.name = "h1t12_mc",
        this.h1t12_mc.parent = this,
        this.h1t12_mc.setTransform(227.8, 379.9, 1, 1, 0, 0, 0, 90.8, 27.9),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h1t12_mc
            }, {
                t: this.h13t24_mc
            }, {
                t: this.h25t36_mc
            }]
        }).wait(1)),
        this.h19t36_mc = new n.BoardHighlightRange,
        this.h19t36_mc.name = "h19t36_mc",
        this.h19t36_mc.parent = this,
        this.h19t36_mc.setTransform(1098.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.hOdd_mc = new n.BoardHighlightRange,
        this.hOdd_mc.name = "hOdd_mc",
        this.hOdd_mc.parent = this,
        this.hOdd_mc.setTransform(915.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.hBlack_mc = new n.BoardHighlightRange,
        this.hBlack_mc.name = "hBlack_mc",
        this.hBlack_mc.parent = this,
        this.hBlack_mc.setTransform(731.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.hRed_mc = new n.BoardHighlightRange,
        this.hRed_mc.name = "hRed_mc",
        this.hRed_mc.parent = this,
        this.hRed_mc.setTransform(548.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.hEven_mc = new n.BoardHighlightRange,
        this.hEven_mc.name = "hEven_mc",
        this.hEven_mc.parent = this,
        this.hEven_mc.setTransform(364.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.h1t18_mc = new n.BoardHighlightRange,
        this.h1t18_mc.name = "h1t18_mc",
        this.h1t18_mc.parent = this,
        this.h1t18_mc.setTransform(181.9, 495.9, 1, 1, 0, 0, 0, 44.9, 27.9),
        this.timeline.addTween(s.Tween.get({}).to({
            state: [{
                t: this.h1t18_mc
            }, {
                t: this.hEven_mc
            }, {
                t: this.hRed_mc
            }, {
                t: this.hBlack_mc
            }, {
                t: this.hOdd_mc
            }, {
                t: this.h19t36_mc
            }]
        }).wait(1))
    }
    ).prototype = o(n.BoardHighlights, new s.Rectangle(2,2,1326,580), null),
    (n.Board = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.frame_0 = function() {
            this.stop(),
            this.spots_mc.visible = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1)),
        this.hitArea_mc = new n.BoardHitArea,
        this.hitArea_mc.name = "hitArea_mc",
        this.hitArea_mc.parent = this,
        this.hitArea_mc.setTransform(333, 156.9, 1, 1, 0, 0, 0, 333, 156.9),
        this.hitArea_mc.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.hitArea_mc).wait(1)),
        this.spots_mc = new n.BoardSpots,
        this.spots_mc.name = "spots_mc",
        this.spots_mc.parent = this,
        this.spots_mc.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.spots_mc).wait(1)),
        this.chips_mc = new n.BoardClipChips,
        this.chips_mc.name = "chips_mc",
        this.chips_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.chips_mc).wait(1)),
        this.board_mc = new n.BoardShape,
        this.board_mc.name = "board_mc",
        this.board_mc.parent = this,
        this.board_mc.setTransform(665, 292, 1, 1, 0, 0, 0, 665, 292),
        this.timeline.addTween(s.Tween.get(this.board_mc).wait(1)),
        this.highlights_mc = new n.BoardHighlights,
        this.highlights_mc.name = "highlights_mc",
        this.highlights_mc.parent = this,
        this.highlights_mc.setTransform(330.6, 144.1, 1, 1, 0, 0, 0, 330.6, 144.1),
        this.timeline.addTween(s.Tween.get(this.highlights_mc).wait(1))
    }
    ).prototype = o(n.Board, new s.Rectangle(0,-48,1332.1,632), null),
    (n.WinMenuGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.sparkles_mc = new n.IntroMenuSparkles,
        this.sparkles_mc.name = "sparkles_mc",
        this.sparkles_mc.parent = this,
        this.sparkles_mc.setTransform(399.2, 21.7),
        this.timeline.addTween(s.Tween.get(this.sparkles_mc).wait(16)),
        this.clip_mc = new n.WinMenuClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.clip_mc.setTransform(35.6, 269.4, 1, 1, 0, 0, 0, 35.6, 269.4),
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1)),
        this.dimmer_mc = new n.DimmerDark,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).to({
            alpha: 0
        }, 7).wait(1).to({
            alpha: 1
        }, 0).wait(8))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.StackDisplayClip = function(t, e, i) {
        this.initialize(t, e, i, {
            up: 0,
            over: 1,
            down: 2,
            disabled: 3
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_1 = function() {
            this.stop()
        }
        ,
        this.frame_2 = function() {
            this.stop()
        }
        ,
        this.frame_3 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1)),
        this.hitArea_mc = new n.HitAreaCircle,
        this.hitArea_mc.name = "hitArea_mc",
        this.hitArea_mc.parent = this,
        this.hitArea_mc.setTransform(3.6, 3.1, 2.554, 2.554),
        this.hitArea_mc.alpha = 0,
        this.timeline.addTween(s.Tween.get(this.hitArea_mc).wait(4)),
        this.dimmer_mc = new n.StackDimmerAnim,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(133.1, 126.1, 1, 1, 0, 0, 0, 133.5, 133.5),
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).wait(4)),
        this.chips_mc = new n.StackDisplayChipMount,
        this.chips_mc.name = "chips_mc",
        this.chips_mc.parent = this,
        this.chips_mc.setTransform(134, 126.2, 1, 1, 0, 0, 0, 134, 126.2),
        this.timeline.addTween(s.Tween.get(this.chips_mc).wait(4))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-2.4,-9.6,272.8,271.6),
    (n.SpinGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.clip_mc = new n.SpinClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.clip_mc.setTransform(35.6, 269.4, 1, 1, 0, 0, 0, 35.6, 269.4),
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1)),
        this.dimmerAnim_mc = new n.DimmerAnim,
        this.dimmerAnim_mc.name = "dimmerAnim_mc",
        this.dimmerAnim_mc.parent = this,
        this.dimmerAnim_mc.setTransform(800, 600, 1, 1, 0, 0, 0, 800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmerAnim_mc).wait(16))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.ResumeMenuGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.clip_mc = new n.ResumeMenuClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7, s.Ease.get(-1)).to({
            alpha: 1
        }, 8, s.Ease.get(-1)).wait(1)),
        this.dimmer_mc = new n.DimmerDark,
        this.dimmer_mc.name = "dimmer_mc",
        this.dimmer_mc.parent = this,
        this.dimmer_mc.setTransform(800, 600),
        this.timeline.addTween(s.Tween.get(this.dimmer_mc).wait(16))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(0,0,1600,1200),
    (n.OverlayDisplay = function(t, e, i) {
        this.initialize(t, e, i, {
            mobile: 0,
            pc: 1
        }),
        this.frame_0 = function() {
            this.stop(),
            this.fullscreen_mc.mouseEnabled = this.fullscreen_mc.mouseChildren = !0
        }
        ,
        this.frame_1 = function() {
            this.stop(),
            this.fullscreen_mc.mouseEnabled = this.fullscreen_mc.mouseChildren = !1
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1)),
        this.fullscreen_mc = new n.FullscreenToggleButtonAnim,
        this.fullscreen_mc.name = "fullscreen_mc",
        this.fullscreen_mc.parent = this,
        this.fullscreen_mc.setTransform(1531, 66, 1, 1, 0, 0, 0, 55, 55),
        this.timeline.addTween(s.Tween.get(this.fullscreen_mc).wait(1).to({
            x: 1928.5,
            y: -249,
            alpha: 0
        }, 0).wait(1)),
        this.mute_mc = new n.MuteToggleButtonAnim,
        this.mute_mc.name = "mute_mc",
        this.mute_mc.parent = this,
        this.mute_mc.setTransform(1411, 66, 1, 1, 0, 0, 0, 55, 55),
        this.timeline.addTween(s.Tween.get(this.mute_mc).wait(1).to({
            x: 1531
        }, 0).wait(1)),
        this.home_mc = new n.HomeButtonAnim,
        this.home_mc.name = "home_mc",
        this.home_mc.parent = this,
        this.home_mc.setTransform(67, 66, 1, 1, 0, 0, 0, 55, 55),
        this.timeline.addTween(s.Tween.get(this.home_mc).wait(2))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(12,11,1574,110),
    (n.BankDisplayClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.lowestBtn_mc = new n.StackDisplayClip,
        this.lowestBtn_mc.name = "lowestBtn_mc",
        this.lowestBtn_mc.parent = this,
        this.lowestBtn_mc.setTransform(74.5, 783.4, 1, 1, 0, 0, 0, 134, 126.2),
        this.timeline.addTween(s.Tween.get(this.lowestBtn_mc).wait(1)),
        this.highestBtn_mc = new n.StackDisplayClip,
        this.highestBtn_mc.name = "highestBtn_mc",
        this.highestBtn_mc.parent = this,
        this.highestBtn_mc.setTransform(316.7, 1034.7),
        this.timeline.addTween(s.Tween.get(this.highestBtn_mc).wait(1)),
        this.lowBtn_mc = new n.StackDisplayClip,
        this.lowBtn_mc.name = "lowBtn_mc",
        this.lowBtn_mc.parent = this,
        this.lowBtn_mc.setTransform(-66.7, 868.2),
        this.timeline.addTween(s.Tween.get(this.lowBtn_mc).wait(1)),
        this.highBtn_mc = new n.StackDisplayClip,
        this.highBtn_mc.name = "highBtn_mc",
        this.highBtn_mc.parent = this,
        this.highBtn_mc.setTransform(74.3, 1031.5),
        this.timeline.addTween(s.Tween.get(this.highBtn_mc).wait(1)),
        this.total_mc = new n.BankTotalAnimText,
        this.total_mc.name = "total_mc",
        this.total_mc.parent = this,
        this.total_mc.setTransform(737.2, 1132.4, 1, 1, 0, 0, 0, 144.8, 23.5),
        this.timeline.addTween(s.Tween.get(this.total_mc).wait(1))
    }
    ).prototype = o(n.BankDisplayClip, new s.Rectangle(-69.1,647.6,1338.9,649.1), null),
    (n.GameplayClip = function(t, e, i) {
        this.initialize(t, e, i, {}),
        this.board_mc = new n.Board,
        this.board_mc.name = "board_mc",
        this.board_mc.parent = this,
        this.board_mc.setTransform(130, 300),
        this.timeline.addTween(s.Tween.get(this.board_mc).wait(1)),
        this.winningNumbersBox_mc = new n.WinningNumbersBox,
        this.winningNumbersBox_mc.name = "winningNumbersBox_mc",
        this.winningNumbersBox_mc.parent = this,
        this.winningNumbersBox_mc.setTransform(1513.5, 446.1, 1, 1, 0, 0, 0, 13.5, 146.1),
        this.timeline.addTween(s.Tween.get(this.winningNumbersBox_mc).wait(1)),
        this.betTotal_mc = new n.BetTotalTextAnim,
        this.betTotal_mc.name = "betTotal_mc",
        this.betTotal_mc.parent = this,
        this.betTotal_mc.setTransform(136.4, 936.1, 1, 1, 0, 0, 0, 136.4, 23.1),
        this.timeline.addTween(s.Tween.get(this.betTotal_mc).wait(1)),
        this.placeTitle_mc = new n.PlaceYourBetsTitle,
        this.placeTitle_mc.name = "placeTitle_mc",
        this.placeTitle_mc.parent = this,
        this.placeTitle_mc.setTransform(186.5, 71.2, 1, 1, 0, 0, 0, 186.5, 18.4),
        this.timeline.addTween(s.Tween.get(this.placeTitle_mc).wait(1)),
        this.spinBtn_mc = new n.SpinButton,
        this.spinBtn_mc.name = "spinBtn_mc",
        this.spinBtn_mc.parent = this,
        this.spinBtn_mc.setTransform(1476, 970, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.spinBtn_mc).wait(1)),
        this.undoBtn_mc = new n.UndoButton,
        this.undoBtn_mc.name = "undoBtn_mc",
        this.undoBtn_mc.parent = this,
        this.undoBtn_mc.setTransform(198, 222, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.undoBtn_mc).wait(1)),
        this.clearBtn_mc = new n.ClearButton,
        this.clearBtn_mc.name = "clearBtn_mc",
        this.clearBtn_mc.parent = this,
        this.clearBtn_mc.setTransform(198, 222, 1, 1, 0, 0, 0, 180, 60),
        this.timeline.addTween(s.Tween.get(this.clearBtn_mc).wait(1)),
        this.bank_mc = new n.BankDisplayClip,
        this.bank_mc.name = "bank_mc",
        this.bank_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.bank_mc).wait(1))
    }
    ).prototype = o(n.GameplayClip, new s.Rectangle(-69.1,52.8,1669.1,1243.9), null),
    (n.PlayGui = function(t, e, i) {
        this.initialize(t, e, i, {
            on: 0,
            toOff: 1,
            off: 7,
            toOn: 8
        }),
        this.frame_0 = function() {
            this.stop()
        }
        ,
        this.frame_7 = function() {
            this.stop()
        }
        ,
        this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9)),
        this.clip_mc = new n.GameplayClip,
        this.clip_mc.name = "clip_mc",
        this.clip_mc.parent = this,
        this.timeline.addTween(s.Tween.get(this.clip_mc).to({
            alpha: 0
        }, 7).to({
            alpha: 1
        }, 8).wait(1))
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-69.1,52.8,1669.1,1243.9),
    (n.GuiLib = function(t, e, i) {
        this.initialize(t, e, i, {})
    }
    ).prototype = t = new s.MovieClip,
    t.nominalBounds = new s.Rectangle(-999.7,-1399.4,5200,5200),
    n.properties = {
        id: "68EC25A91E73BA4EBCBFDEE1834B853D",
        width: 1600,
        height: 1200,
        fps: 30,
        color: "#006600",
        opacity: 1,
        manifest: [{
            src: "images/gui/ball.png",
            id: "ball"
        }, {
            src: "images/gui/bg_game.png",
            id: "bg_game"
        }, {
            src: "images/gui/bg_overlay.png",
            id: "bg_overlay"
        }, {
            src: "images/gui/bg_shadow.png",
            id: "bg_shadow"
        }, {
            src: "images/gui/board.png",
            id: "board"
        }, {
            src: "images/gui/board_numbers_highlight.png",
            id: "board_numbers_highlight"
        }, {
            src: "images/gui/board_range_highlight.png",
            id: "board_range_highlight"
        }, {
            src: "images/gui/board_range_wide_highlight.png",
            id: "board_range_wide_highlight"
        }, {
            src: "images/gui/board_zeros_highlight.png",
            id: "board_zeros_highlight"
        }, {
            src: "images/gui/chip_1.png",
            id: "chip_1"
        }, {
            src: "images/gui/chip_10.png",
            id: "chip_10"
        }, {
            src: "images/gui/chip_100.png",
            id: "chip_100"
        }, {
            src: "images/gui/chip_100k.png",
            id: "chip_100k"
        }, {
            src: "images/gui/chip_1M.png",
            id: "chip_1M"
        }, {
            src: "images/gui/chip_250k.png",
            id: "chip_250k"
        }, {
            src: "images/gui/chip_25k.png",
            id: "chip_25k"
        }, {
            src: "images/gui/chip_500.png",
            id: "chip_500"
        }, {
            src: "images/gui/chip_500k.png",
            id: "chip_500k"
        }, {
            src: "images/gui/chip_5k.png",
            id: "chip_5k"
        }, {
            src: "images/gui/chip_credits.png",
            id: "chip_credits"
        }, {
            src: "images/gui/chip_stack_unselected_dimmer.png",
            id: "chip_stack_unselected_dimmer"
        }, {
            src: "images/gui/clear.png",
            id: "clear"
        }, {
            src: "images/gui/home.png",
            id: "home"
        }, {
            src: "images/gui/intro.png",
            id: "intro"
        }, {
            src: "images/gui/maximize.png",
            id: "maximize"
        }, {
            src: "images/gui/minimize.png",
            id: "minimize"
        }, {
            src: "images/gui/more_games.png",
            id: "more_games"
        }, {
            src: "images/gui/new_game.png",
            id: "new_game"
        }, {
            src: "images/gui/new_record.png",
            id: "new_record"
        }, {
            src: "images/gui/numbers_box.png",
            id: "numbers_box"
        }, {
            src: "images/gui/play.png",
            id: "play"
        }, {
            src: "images/gui/rate_us.png",
            id: "rate_us"
        }, {
            src: "images/gui/resume.png",
            id: "resume"
        }, {
            src: "images/gui/screen_overlay_dark.png",
            id: "screen_overlay_dark"
        }, {
            src: "images/gui/sound_off.png",
            id: "sound_off"
        }, {
            src: "images/gui/sound_on.png",
            id: "sound_on"
        }, {
            src: "images/gui/sparkle_large.png",
            id: "sparkle_large"
        }, {
            src: "images/gui/undo.png",
            id: "undo"
        }, {
            src: "images/gui/wheel_button.png",
            id: "wheel_button"
        }, {
            src: "images/gui/wheel_highlight.png",
            id: "wheel_highlight"
        }, {
            src: "images/gui/wheel_inner.png",
            id: "wheel_inner"
        }, {
            src: "images/gui/wheel_outer.png",
            id: "wheel_outer"
        }, {
            src: "images/gui/window.png",
            id: "window"
        }],
        preloads: []
    },
    (n.Stage = function(t) {
        createjs.Stage.call(this, t)
    }
    ).prototype = t = new createjs.Stage,
    t.setAutoPlay = function(t) {
        this.tickEnabled = t
    }
    ,
    t.play = function() {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ,
    t.stop = function(t) {
        t && this.seek(t),
        this.tickEnabled = !1
    }
    ,
    t.seek = function(t) {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndStop(n.properties.fps * t / 1e3)
    }
    ,
    t.getDuration = function() {
        return this.getChildAt(0).totalFrames / n.properties.fps * 1e3
    }
    ,
    t.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / n.properties.fps * 1e3
    }
    ,
    i.bootcompsLoaded = i.bootcompsLoaded || [],
    i.bootstrapListeners || (i.bootstrapListeners = []),
    i.bootstrapCallback = function(t) {
        if (i.bootstrapListeners.push(t),
        0 < i.bootcompsLoaded.length)
            for (var e = 0; e < i.bootcompsLoaded.length; ++e)
                t(i.bootcompsLoaded[e])
    }
    ,
    i.compositions = i.compositions || {},
    i.compositions["68EC25A91E73BA4EBCBFDEE1834B853D"] = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return n
        },
        getSpriteSheet: function() {
            return e
        },
        getImages: function() {
            return a
        }
    },
    i.compositionLoaded = function(t) {
        i.bootcompsLoaded.push(t);
        for (var e = 0; e < i.bootstrapListeners.length; e++)
            i.bootstrapListeners[e](t)
    }
    ,
    i.getComposition = function(t) {
        return i.compositions[t]
    }
}(cjs = cjs || {}, AdobeAn = AdobeAn || {}),
importAdobeAnimateLibrary("GuiLib", "guiLib"),
!function(t) {
    var e;
    function i(t, e) {
        void 0 === t && (t = null),
        void 0 === e && (e = null),
        this._method = null,
        this._scope = null,
        this.invoke = this.unset,
        (e || t) && this.set(t, e)
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "method", {
        get: function() {
            return this._method
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "scope", {
        get: function() {
            return this._scope
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isSet", {
        get: function() {
            return null !== this._method
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.set = function(t, e) {
        if (void 0 === e && (e = null),
        this._scope || this._method)
            throw new Error("An existing delegate handler must be cleared before a new one can be set!");
        if (!t)
            throw new Error("Method must be defined! Use clear() to unset a delegate.");
        this._method = t,
        this._scope = e,
        this.invoke = this.fire
    }
    ,
    i.prototype.clear = function() {
        this._method = null,
        this._scope = null,
        this.invoke = this.unset
    }
    ,
    i.prototype.equals = function(t, e) {
        return void 0 === e && (e = null),
        this._scope === e && this._method === t
    }
    ,
    i.prototype.unset = function() {
        throw new Error("Tried to invoke a delegate that was not set!")
    }
    ,
    i.prototype.fire = function() {
        return this._method.apply(this._scope, arguments)
    }
    ,
    e = i,
    t.Delegate = e
}(com = com || {}),
!function(t) {
    var n, a, e;
    function i() {}
    function s(t, e) {
        if (0 < a.length) {
            var i = a[a.length - 1];
            if (i.stream === t && i.msg === e)
                return void i.count++
        }
        a.push({
            stream: t,
            msg: e,
            count: 1
        }),
        100 < a.length && a.splice(0, 1)
    }
    function r(t) {
        s("warn", t);
        for (var e = 0; e < n.length; ++e)
            n[e].warn(t)
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.log = function(t) {
        console && console.log && console.log(t)
    }
    ,
    i.prototype.info = function(t) {
        console && console.info ? console.info(t) : this.log("[INFO] " + t)
    }
    ,
    i.prototype.warn = function(t) {
        console && console.warn ? console.warn(t) : this.log("[WARN] " + t)
    }
    ,
    i.prototype.error = function(t) {
        console && console.error ? console.error(t) : this.log("[ERROR] " + t)
    }
    ,
    i.prototype.trace = function() {
        console && console.trace ? console.trace() : console && console.error ? console.error("[TRACE]") : this.log("[TRACE] Tracing not available.")
    }
    ,
    e = i,
    t = t.Logger || (t.Logger = {}),
    n = [new e],
    a = new Array,
    t.addLogger = function(t) {
        if (0 <= n.indexOf(t))
            r("Tried to add a logger instance that was already added!");
        else {
            n.push(t);
            for (var e = 0; e < a.length; ++e)
                for (var i = a[e], s = 0; s < i.count; ++s)
                    "log" === i.stream ? t.log(i.msg) : "info" === i.stream ? t.info(i.msg) : "warn" === i.stream ? t.warn(i.msg) : "error" === i.stream ? t.error(i.msg) : "trace" === i.stream && t.trace()
        }
    }
    ,
    t.removeLogger = function(t) {
        t = n.indexOf(t),
        t < 0 ? r("Tried to remove a logger instance that was not addded!") : n.splice(t, 1)
    }
    ,
    t.log = function(t) {
        s("log", t);
        for (var e = 0; e < n.length; ++e)
            n[e].log(t)
    }
    ,
    t.info = function(t) {
        s("info", t);
        for (var e = 0; e < n.length; ++e)
            n[e].info(t)
    }
    ,
    t.warn = r,
    t.error = function(t) {
        s("error", t);
        for (var e = 0; e < n.length; ++e)
            n[e].error(t)
    }
    ,
    t.trace = function() {
        s("trace", null);
        for (var t = 0; t < n.length; ++t)
            n[t].trace()
    }
}(com = com || {}),
!function(t) {
    var i;
    function e() {
        this._delegates = new Array,
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1,
        this.invoke = this.fire0
    }
    i = t.battleline || (t.battleline = {}),
    Object.defineProperty(e.prototype, "hasDelegates", {
        get: function() {
            return i.Logger.warn("DelegateEvent::hasDelegates is deprecated."),
            0 < this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "count", {
        get: function() {
            return this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isEmpty", {
        get: function() {
            return 0 === this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.add = function(t, e) {
        if (this.contains(t, e))
            throw new Error("Tried to add a delegate that was already added!");
        this._delegates.push(new i.Delegate(t,e)),
        1 === this._delegates.length ? this.invoke = this.fire1 : 2 === this._delegates.length && (this.invoke = this.fire)
    }
    ,
    e.prototype.remove = function(t, e) {
        t = this.indexOf(t, e);
        if (t < 0)
            throw new Error("Tried to remove a delegate that was not added!");
        this._delegates.splice(t, 1),
        this._invoking && (this._iteratorStop--,
        this._iterator >= t) && this._iterator--,
        1 === this._delegates.length ? this.invoke = this.fire1 : 0 === this._delegates.length && (this.invoke = this.fire0)
    }
    ,
    e.prototype.removeAll = function() {
        i.Logger.warn("DelegateEvent::removeAll() is deprecated."),
        this.clear()
    }
    ,
    e.prototype.clear = function() {
        for (var t = this._delegates, e = 0; e < t.length; ++e)
            t[e].clear();
        this._delegates.length = 0,
        this.invoke = this.fire0,
        this._invoking && (this._iterator = 0,
        this._iteratorStop = 0)
    }
    ,
    e.prototype.reset = function() {
        this._iterator = 0,
        this._invoking && (this._iterator = 0,
        this._iteratorStop = 0,
        this._invoking = !1)
    }
    ,
    e.prototype.contains = function(t, e) {
        return 0 <= this.indexOf(t, e)
    }
    ,
    e.prototype.indexOf = function(t, e) {
        for (var i = this._delegates, s = 0; s < i.length; ++s)
            if (i[s].equals(t, e))
                return s;
        return -1
    }
    ,
    e.prototype.fire0 = function() {}
    ,
    e.prototype.fire1 = function() {
        if (this._invoking)
            throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
        var t = this._delegates
          , t = t[0];
        this._invoking = !0,
        this._iterator = 0,
        this._iteratorStop = 1,
        t.invoke.apply(t, arguments),
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1
    }
    ,
    e.prototype.fire = function() {
        if (this._invoking)
            throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
        var t, e = this._delegates, i = arguments;
        for (this._iteratorStop = e.length,
        this._invoking = !0,
        this._iterator = 0; this._iterator < this._iteratorStop; ++this._iterator)
            t = e[this._iterator],
            t.invoke.apply(t, i);
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1
    }
    ,
    t = e,
    i.DelegateEvent = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t, e) {
        this.gameMsg = !0,
        this.content = null,
        this.cmd = t,
        this.content = e
    }
    t = t.battleline || (t.battleline = {}),
    i.REGISTER = "register",
    i.LAUNCH = "launch",
    i.START = "start",
    i.RELOAD = "reload",
    i.LOAD = "load",
    i.REQUEST_FULLSCREEN = "requestFullscreen",
    i.ENTER_FULLSCREEN = "enterFullscreen",
    i.REQUEST_WINDOWED = "requestWindowed",
    i.EXIT_FULLSCREEN = "exitFullscreen",
    i.KEYPRESS = "keypress",
    i.AD_CLOSED = "adClosed",
    i.AD_BLOCKED = "adBlocked",
    e = i,
    t.Message = e
}(com = com || {}),
!function(t) {
    var i, s, n;
    function e(t) {
        window.parent.postMessage(t, "*")
    }
    function a(t) {
        var e;
        t.cmd === i.Message.REGISTER ? (e = t.content,
        n && (clearInterval(n),
        n = void 0,
        s.url = e.url)) : t.cmd === i.Message.LAUNCH ? (e = t.content,
        i.App.launch(e.launchArgs)) : t.cmd === i.Message.START ? (t.content,
        i.App.start()) : t.cmd === i.Message.ENTER_FULLSCREEN ? (t.content,
        i.App.didEnterFullscreen()) : t.cmd === i.Message.EXIT_FULLSCREEN ? (t.content,
        i.App.didExitFullscreen()) : t.cmd !== i.Message.AD_CLOSED && t.cmd !== i.Message.AD_BLOCKED || t.content
    }
    function r(t) {
        t && t.data && t.data.gameMsg && a(t.data)
    }
    function o(t) {
        e(new i.Message(i.Message.KEYPRESS,{
            key: t.key
        }))
    }
    i = t.battleline || (t.battleline = {}),
    s = i.ExternalInterface || (i.ExternalInterface = {}),
    s.initialize = function() {
        window.addEventListener("message", r),
        window.addEventListener("keypress", o)
    }
    ,
    s.register = function() {
        function t() {
            e(new i.Message(i.Message.REGISTER))
        }
        n = setInterval(t, 50),
        t()
    }
    ,
    s.start = function() {
        e(new i.Message(i.Message.START))
    }
    ,
    s.reload = function() {
        e(new i.Message(i.Message.RELOAD))
    }
    ,
    s.load = function(t) {
        e(new i.Message(i.Message.LOAD,{
            toURL: t
        }))
    }
    ,
    s.requestFullscreen = function() {
        e(new i.Message(i.Message.REQUEST_FULLSCREEN))
    }
    ,
    s.requestWindowed = function() {
        e(new i.Message(i.Message.REQUEST_WINDOWED))
    }
    ,
    s.send = e
}(com = com || {}),
!function(t) {
    function e() {
        this.isWebApp = !0,
        this.targetMarketIdentifier = "Web",
        this.basePath = ""
    }
    t = t.battleline || (t.battleline = {}),
    t.AppProperties = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t, e, i, s) {
        if (null === t.values)
            throw new Error("Enum Type is missing values[] array!");
        if (t.values[i])
            throw new Error("There is already an enum value with ordinal " + i + "!");
        t.values[i] = this,
        this._enumName = e,
        this._ordinal = i,
        this._identifier = s
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "ordinal", {
        get: function() {
            return this._ordinal
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "identifier", {
        get: function() {
            return this._identifier
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.toString = function() {
        return "[" + this._enumName + "." + this._identifier + "]"
    }
    ,
    e = i,
    t.EnumValue = e
}(com = com || {});
var __extends = this && this.__extends || function() {
    var s = function(t, e) {
        return s = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(t, e) {
            t.__proto__ = e
        }
        : function(t, e) {
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }
        ),
        s(t, e)
    };
    return function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function i() {
            this.constructor = t
        }
        s(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
        new i)
    }
}(), com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com, com = (!function(t) {
    var i, s;
    function e(t, e) {
        return s.call(this, i, "Device", t, e) || this
    }
    t = t.battleline || (t.battleline = {}),
    i = t.DeviceType || (t.DeviceType = {}),
    i.values = new Array,
    s = t.EnumValue,
    __extends(e, s),
    t = e,
    i.Other = new t(0,"Other"),
    i.Computer = new t(1,"Computer"),
    i.Tablet = new t(2,"Tablet"),
    i.Handheld = new t(3,"Handheld")
}(com = com || {}),
!function(t) {
    var i, s;
    function e(t, e) {
        return s.call(this, i, "OS", t, e) || this
    }
    t = t.battleline || (t.battleline = {}),
    i = t.OS || (t.OS = {}),
    i.values = new Array,
    s = t.EnumValue,
    __extends(e, s),
    t = e,
    i.Other = new t(0,"Other"),
    i.Windows = new t(1,"Windows"),
    i.Mac = new t(2,"Mac"),
    i.ChromeOS = new t(3,"ChromeOS"),
    i.iOS = new t(4,"iOS"),
    i.Android = new t(5,"Android")
}(com = com || {}),
!function(t) {
    var i, s;
    function e(t, e) {
        return s.call(this, i, "Browser", t, e) || this
    }
    t = t.battleline || (t.battleline = {}),
    i = t.Browser || (t.Browser = {}),
    i.values = new Array,
    s = t.EnumValue,
    __extends(e, s),
    t = e,
    i.Other = new t(0,"Other"),
    i.Chrome = new t(1,"Chrome"),
    i.Firefox = new t(2,"Firefox"),
    i.Safari = new t(3,"Safari"),
    i.Edge = new t(4,"Edge"),
    i.IE = new t(5,"IE"),
    i.Opera = new t(6,"Opera"),
    i.Vivaldi = new t(7,"Vivaldi")
}(com = com || {}),
!function(t) {
    var e;
    function s() {
        this._major = 0,
        this._minor = 0,
        this._build = 0,
        this._revision = 0,
        this._str = "0.0.0.0",
        this._name = ""
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(s.prototype, "major", {
        get: function() {
            return this._major
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "minor", {
        get: function() {
            return this._minor
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "build", {
        get: function() {
            return this._build
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "revision", {
        get: function() {
            return this._revision
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "str", {
        get: function() {
            return this._str
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "name", {
        get: function() {
            return this._name
        },
        set: function(t) {
            this._name = t
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.fromName = function(t) {
        this._str = "0.0.0.0",
        this._major = this._minor = this._build = this._revision = 0,
        this._name = t
    }
    ,
    s.prototype.fromVersionString = function(t, e) {
        void 0 === e && (e = ""),
        this._str = t,
        this._name = e;
        e = t.split(".");
        this._major = 0 < e.length ? parseInt(e[0]) : 0,
        this._minor = 1 < e.length ? parseInt(e[1]) : 0,
        this._build = 2 < e.length ? parseInt(e[2]) : 0,
        this._revision = 3 < e.length ? parseInt(e[3]) : 0
    }
    ,
    s.fromVersionString = function(t, e) {
        void 0 === e && (e = "");
        var i = new s;
        return i.fromVersionString(t, e),
        i
    }
    ,
    s.compare = function(t, e) {
        return t._major < e._major ? -1 : t._major > e._major ? 1 : t._minor < e._minor ? -1 : t._minor > e._minor ? 1 : t._build < e._build ? -1 : t._build > e._build ? 1 : t._revision < e._revision ? -1 : t._revision > e._revision ? 1 : 0
    }
    ,
    s.prototype.fromVersionNumbers = function(t, e, i, s, n) {
        void 0 === e && (e = void 0),
        void 0 === i && (i = void 0),
        void 0 === s && (s = void 0),
        void 0 === n && (n = ""),
        this._major = t || 0,
        this._minor = e || 0,
        this._build = i || 0,
        this._revision = s || 0,
        this._name = n,
        this._str = "",
        void 0 !== t && (this._str += t),
        void 0 !== e && (this._str += "." + e),
        void 0 !== i && (this._str += "." + i),
        void 0 !== s && (this._str += "." + s)
    }
    ,
    s.prototype.toString = function() {
        var t = "";
        return "" !== this._name && (t += this._name + " "),
        t + this._str
    }
    ,
    e = s,
    t.Version = e
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        this._keys = [],
        this._values = []
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "keys", {
        get: function() {
            return this._keys.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "values", {
        get: function() {
            return this._values.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.containsKey = function(t) {
        return 0 <= this.getKeyIndex(t)
    }
    ,
    i.prototype.add = function(t, e, i) {
        if (void 0 === i && (i = !1),
        null == t)
            throw new Error("Keys cannot be null or undefined!");
        var s = this.getKeyIndex(t);
        if (0 <= s) {
            if (!i)
                throw new Error("Key already existed! " + t);
            this._values[s] = e
        } else
            this._keys.push(t),
            this._values.push(e)
    }
    ,
    i.prototype.remove = function(t, e) {
        void 0 === e && (e = !0);
        t = this.getKeyIndex(t);
        if (e && t < 0)
            throw new Error("Key did not exist!");
        this._keys.splice(t, 1),
        this._values.splice(t, 1)
    }
    ,
    i.prototype.getValue = function(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = null);
        t = this.getKeyIndex(t);
        if (t < 0) {
            if (e)
                throw new Error("Key did not exist!");
            return i
        }
        return this._values[t]
    }
    ,
    i.prototype.getKeyIndex = function(t) {
        for (var e = 0; e < this._keys.length; ++e)
            if (this._keys[e] === t)
                return e;
        return -1
    }
    ,
    e = i,
    t.Dictionary = e
}(com = com || {}),
!function(t) {
    var i, e;
    function s(t) {
        void 0 === t && (t = null);
        var e = i.call(this) || this;
        return t && e.decode(t),
        e
    }
    t = t.battleline || (t.battleline = {}),
    i = t.Dictionary,
    __extends(s, i),
    s.prototype.clear = function() {
        this.keys.length = 0,
        this.values.length = 0
    }
    ,
    s.prototype.decode = function(t) {
        this.clear();
        0 <= t.indexOf("?") && (t = t.substr(t.indexOf("?") + 1));
        for (var e = t.split("&"), i = 0; i < e.length; ++i) {
            var s = e[i]
              , n = void 0;
            0 <= s.indexOf("=") && (s = s.substr(0, s.indexOf("=")),
            n = e[i].substr(e[i].indexOf("=") + 1)),
            s = decodeURIComponent(s),
            n = decodeURIComponent(n),
            this.add(s, n, !0)
        }
    }
    ,
    e = s,
    t.URLVariables = e
}(com = com || {}),
!function(t) {
    var c, u, d;
    function p(t, e) {
        var i = t.substr(t.indexOf(e) + e.length);
        for (0 <= i.indexOf(" ") && (i = i.substr(0, i.indexOf(" "))),
        0 <= i.indexOf(";") && (i = i.substr(0, i.indexOf(";"))),
        0 <= i.indexOf(")") && (i = i.substr(0, i.indexOf(")"))); 0 <= i.indexOf("w"); )
            i = i.replace("w", "");
        for (; 0 <= i.indexOf("_"); )
            i = i.replace("_", ".");
        return i
    }
    c = t.battleline || (t.battleline = {}),
    u = c.Platform || (c.Platform = {}),
    u.forced = !1,
    d = !1,
    u.initialize = function(t) {
        if (!d) {
            d = !0,
            u.deviceType = c.DeviceType.Other,
            u.os = c.OS.Other,
            u.osVersion = new c.Version,
            u.browser = c.Browser.Other,
            u.browserVersion = new c.Version,
            u.userAgent = navigator.userAgent;
            var e = navigator.userAgent.toLowerCase()
              , t = new c.URLVariables(t)
              , i = e
              , s = t
              , n = s.getValue("os", !1, "").toLowerCase();
            if ("" !== n) {
                for (var a = 0; a < c.OS.values.length; ++a)
                    if (n === c.OS.values[a].identifier.toLowerCase()) {
                        u.os = c.OS.values[a];
                        break
                    }
                c.Logger.info("os URL Variable found. Forcing os to " + u.os.identifier)
            } else
                0 <= i.indexOf("cros") ? u.os = c.OS.ChromeOS : 0 <= i.indexOf("android") ? (u.os = c.OS.Android,
                u.osVersion.fromVersionString(p(i, "android ")),
                6 === u.osVersion.major ? u.osVersion.name = "Marshmallow" : 5 === u.osVersion.major ? u.osVersion.name = "Lollipop" : 4 === u.osVersion.major && 4 <= u.osVersion.minor ? u.osVersion.name = "KitKat" : 4 === u.osVersion.major && 1 <= u.osVersion.minor ? u.osVersion.name = "Jelly Bean" : 4 === u.osVersion.major ? u.osVersion.name = "Ice Cream Sandwich" : 3 === u.osVersion.major ? u.osVersion.name = "Honeycomb" : 2 === u.osVersion.major && 3 <= u.osVersion.minor ? u.osVersion.name = "Gingerbread" : 2 === u.osVersion.major && 2 <= u.osVersion.minor ? u.osVersion.name = "Froyo" : 2 === u.osVersion.major ? u.osVersion.name = "Eclair" : 1 === u.osVersion.major && 6 === u.osVersion.minor ? u.osVersion.name = "Donut" : 1 === u.osVersion.major && 5 === u.osVersion.minor && (u.osVersion.name = "Cupcake")) : 0 <= i.indexOf("iphone") || 0 <= i.indexOf("ipad") || 0 <= i.indexOf("ipod") ? (u.os = c.OS.iOS,
                0 <= i.indexOf("iphone os ") ? u.osVersion.fromVersionString(p(i, "iphone os ")) : 0 <= i.indexOf("cpu os ") && u.osVersion.fromVersionString(p(i, "cpu os "))) : 0 <= i.indexOf("windows") ? (u.os = c.OS.Windows,
                0 <= i.indexOf("windows phone os ") ? u.osVersion.fromVersionString(p(i, "windows phone os "), "Windows Phone") : 0 <= i.indexOf("windows nt 6.3") ? u.osVersion.fromVersionNumbers(6, 3, 0, 0, "Windows 8.1") : 0 <= i.indexOf("windows nt 6.2") ? u.osVersion.fromVersionNumbers(6, 2, 0, 0, "Windows 8") : 0 <= i.indexOf("windows nt 6.1") ? u.osVersion.fromVersionNumbers(6, 1, 0, 0, "Windows 7") : 0 <= i.indexOf("windows nt 6.0") ? u.osVersion.fromVersionNumbers(6, 0, 0, 0, "Windows Vista") : 0 <= i.indexOf("windows nt 5.2") ? u.osVersion.fromVersionNumbers(5, 2, 0, 0, "Windows XP x64") : 0 <= i.indexOf("windows nt 5.1") ? u.osVersion.fromVersionNumbers(5, 1, 0, 0, "Windows XP") : 0 <= i.indexOf("windows nt 5.01") ? u.osVersion.fromVersionNumbers(5, 0, 1, 0, "Windows 2000 SP1") : 0 <= i.indexOf("windows nt 5.0") ? u.osVersion.fromVersionNumbers(5, 0, 0, 0, "Windows 2000") : 0 <= i.indexOf("windows nt 4.0") ? u.osVersion.fromVersionNumbers(4, 0, 0, 0, "Windows NT") : 0 <= i.indexOf("windows 98; win 9x 4.90") ? u.osVersion.fromName("Windows Me") : 0 <= i.indexOf("windows 98") ? u.osVersion.fromName("Windows 98") : 0 <= i.indexOf("windows 95") ? u.osVersion.fromName("Windows 95") : 0 <= i.indexOf("windows ce") ? u.osVersion.fromName("Windows CE") : (u.osVersion.fromVersionString(p(i, "windows nt ")),
                u.osVersion.name = "Windows " + u.osVersion.major + "." + u.osVersion.minor)) : 0 <= i.indexOf("mac os x ") ? (u.os = c.OS.Mac,
                u.osVersion.fromVersionString(p(i, "mac os x ")),
                10 === u.osVersion.major && (12 === u.osVersion.minor ? u.osVersion.name = "Sierra" : 11 === u.osVersion.minor ? u.osVersion.name = "El Capitan" : 10 === u.osVersion.minor ? u.osVersion.name = "Yosemite" : 9 === u.osVersion.minor ? u.osVersion.name = "Mavericks" : 8 === u.osVersion.minor ? u.osVersion.name = "Mountain Lion" : 7 === u.osVersion.minor ? u.osVersion.name = "Lion" : 6 === u.osVersion.minor ? u.osVersion.name = "Snow Leopard" : 5 === u.osVersion.minor ? u.osVersion.name = "Leopard" : 4 === u.osVersion.minor ? u.osVersion.name = "Tiger" : 3 === u.osVersion.minor ? u.osVersion.name = "Panther" : 2 === u.osVersion.minor ? u.osVersion.name = "Jaguar" : 1 === u.osVersion.minor ? u.osVersion.name = "Puma" : 0 === u.osVersion.minor && (u.osVersion.name = "Cheetah"))) : u.os = c.OS.Other;
            var s = e
              , i = t
              , r = i.getValue("device", !1, "").toLowerCase();
            if ("" !== r) {
                for (var o = 0; o < c.DeviceType.values.length; ++o)
                    if (r === c.DeviceType.values[o].identifier.toLowerCase()) {
                        u.deviceType = c.DeviceType.values[o];
                        break
                    }
                c.Logger.info("device URL Variable found. Forcing deviceType to " + u.deviceType.identifier)
            } else
                u.os === c.OS.iOS ? 0 <= s.indexOf("ipad") ? u.deviceType = c.DeviceType.Tablet : u.deviceType = c.DeviceType.Handheld : u.os === c.OS.Android ? 0 <= s.indexOf("mobile") ? u.deviceType = c.DeviceType.Handheld : u.deviceType = c.DeviceType.Tablet : u.os === c.OS.Windows && 0 <= s.indexOf("windows phone os") ? u.deviceType = c.DeviceType.Handheld : u.deviceType = c.DeviceType.Computer;
            var i = e
              , s = t
              , h = s.getValue("browser", !1, "").toLowerCase();
            if ("" !== h) {
                for (var l = 0; l < c.Browser.values.length; ++l)
                    if (h === c.Browser.values[l].identifier.toLowerCase()) {
                        u.browser = c.Browser.values[l];
                        break
                    }
                c.Logger.info("browser URL Variable found. Forcing browser to " + u.browser.identifier)
            } else
                0 <= i.indexOf("edge") ? (u.browser = c.Browser.Edge,
                u.browserVersion.fromVersionString(p(i, "edge/"))) : 0 <= i.indexOf("firefox") ? (u.browser = c.Browser.Firefox,
                u.browserVersion.fromVersionString(p(i, "firefox/"))) : 0 <= i.indexOf("opr") ? (u.browser = c.Browser.Opera,
                u.browserVersion.fromVersionString(p(i, "opr/"))) : 0 <= i.indexOf("opera") ? (u.browser = c.Browser.Opera,
                u.browserVersion.fromVersionString(p(i, "opera/"))) : 0 <= i.indexOf("vivaldi") ? (u.browser = c.Browser.Vivaldi,
                u.browserVersion.fromVersionString(p(i, "vivaldi/"))) : 0 <= i.indexOf("chrome") ? (u.browser = c.Browser.Chrome,
                u.browserVersion.fromVersionString(p(i, "chrome/"))) : u.os === c.OS.iOS && 0 <= i.indexOf("crios") ? (u.browser = c.Browser.Chrome,
                u.browserVersion.fromVersionString(p(i, "crios/"))) : u.os === c.OS.iOS && 0 <= i.indexOf("fxios") ? (u.browser = c.Browser.Firefox,
                u.browserVersion.fromVersionString(p(i, "fxios/"))) : u.os === c.OS.iOS && 0 <= i.indexOf("safari") && 0 <= i.indexOf("version/") || u.os === c.OS.Mac && 0 <= i.indexOf("safari") && 0 <= i.indexOf("version/") ? (u.browser = c.Browser.Safari,
                u.browserVersion.fromVersionString(p(i, "version/"))) : 0 <= i.indexOf("msie") ? (u.browser = c.Browser.IE,
                u.browserVersion.fromVersionString(p(i, "msie "))) : 0 <= i.indexOf("trident/7.") && (u.browser = c.Browser.IE,
                u.browserVersion.fromVersionString(p(i, "rv:")));
            u.browserVersion.name = u.browser.identifier
        }
    }
}(com = com || {}),
!function(t) {
    var e, i, s;
    function n(t) {
        var e = !document[s.hidden];
        e !== i.isVisible && (i.isVisible = e,
        (i.isVisible ? i.onVisible : i.onHidden).invoke())
    }
    e = t.battleline || (t.battleline = {}),
    i = e.PageVisibilityAPI || (e.PageVisibilityAPI = {}),
    i.onVisible = new e.DelegateEvent,
    i.onHidden = new e.DelegateEvent,
    i.isSupported = null,
    i.isVisible = null,
    s = null,
    i.initialize = function() {
        "hidden"in document ? s = {
            hidden: "hidden",
            visibilitychange: "visibilitychange"
        } : "mozHidden"in document ? s = {
            hidden: "mozHidden",
            visibilitychange: "mozvisibilitychange"
        } : "webkitHidden"in document ? s = {
            hidden: "webkitHidden",
            visibilitychange: "webkitvisibilitychange"
        } : "msHidden"in document && (s = {
            hidden: "msHidden",
            visibilitychange: "msvisibilitychange"
        }),
        s ? (i.isSupported = !0,
        i.isVisible = !document[s.hidden],
        document.addEventListener(s.visibilitychange, n)) : (i.isSupported = !1,
        i.isVisible = !0,
        e.Logger.info("Page Visibility API is unsupported. Defaulting to always visible."))
    }
}(com = com || {}),
!function(t) {
    var a, r, o;
    a = t.battleline || (t.battleline = {}),
    r = a.FullscreenAPI || (a.FullscreenAPI = {}),
    r.onEnterFullscreen = new a.DelegateEvent,
    r.onExitFullscreen = new a.DelegateEvent,
    r.isSupported = null,
    r.isFullscreen = !1,
    o = null,
    r.initialize = function(t) {
        var e, i = {
            w3: {
                element: "fullscreenElement",
                enabled: "fullscreenEnabled",
                events: {
                    change: "fullscreenchange",
                    error: "fullscreenerror"
                },
                exit: "exitFullscreen",
                request: "requestFullscreen"
            },
            webkit: {
                element: "webkitCurrentFullScreenElement",
                enabled: "webkitFullscreenEnabled",
                events: {
                    change: "webkitfullscreenchange",
                    error: "webkitfullscreenerror"
                },
                exit: "webkitCancelFullScreen",
                request: "webkitRequestFullScreen"
            },
            moz: {
                element: "mozFullScreenElement",
                enabled: "mozFullScreenEnabled",
                events: {
                    change: "mozfullscreenchange",
                    error: "mozfullscreenerror"
                },
                exit: "mozCancelFullScreen",
                request: "mozRequestFullScreen"
            },
            ms: {
                element: "msFullscreenElement",
                enabled: "msFullscreenEnabled",
                events: {
                    change: "MSFullscreenChange",
                    error: "MSFullscreenError"
                },
                exit: "msExitFullscreen",
                request: "msRequestFullscreen"
            }
        };
        for (e in i)
            if (i[e].enabled in document) {
                o = i[e];
                break
            }
        a.Platform.os === a.OS.iOS && (o = null);
        var s = ""
          , n = !1;
        0 <= t.indexOf("#") && (s = t.substr(t.indexOf("#"))),
        (0 <= s.indexOf("nofs") || 0 <= s.indexOf("nofullscreen")) && (a.Logger.info("Forced no fullscreen support."),
        o = null,
        n = !0),
        null !== o || n || a.Logger.info("Fullscreen API is unsupported. Defaulting to simulated fullscreen."),
        r.isSupported = !1,
        r.isFullscreen = !1
    }
    ,
    r.enter = function() {
        r.isFullscreen || document.documentElement[o.request]()
    }
    ,
    r.exit = function() {
        r.isFullscreen && document[o.exit]()
    }
}(com = com || {}),
!function(t) {
    var e, i;
    function s() {
        i.isShowing || (i.isShowing = !0,
        i.element.style.display = "block")
    }
    function n() {
        i.isShowing && (i.isShowing = !1,
        i.element.style.display = "none")
    }
    function a(t) {
        e.App.enterFullscreen()
    }
    e = t.battleline || (t.battleline = {}),
    i = e.MobilePlayOverlay || (e.MobilePlayOverlay = {}),
    i.isShowing = !1,
    i.initialize = function() {
        i.element = document.getElementById("pause-overlay"),
        i.element.oncontextmenu = function() {
            return !1
        }
        ,
        i.element.addEventListener("click", a),
        e.App.onActivated.add(n, null),
        e.App.onDeactivated.add(s, null),
        i.element.style.display = "none",
        e.App.isActive || s()
    }
    ,
    i.show = s,
    i.hide = n
}(com = com || {}),
!function(t) {
    var e;
    function i(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = 1),
        this.id = t,
        this.isLooped = e,
        this.volume = Math.min(Math.max(i, 0), 1)
    }
    function s(t) {
        this.onComplete = new e.DelegateEvent,
        this._sound = null,
        this.ignoreGlobalActions = !1,
        this._globallyPaused = !1,
        this._sound = e.ContentManager.getSound(t.id),
        this.id = t.id,
        this.isLooped = t.isLooped,
        this.volume = t.volume,
        this._sound.onComplete.add(this.sound_onComplete, this)
    }
    e = t.battleline || (t.battleline = {}),
    e.CueDefinition = i,
    Object.defineProperty(s.prototype, "duration", {
        get: function() {
            return this._sound.duration
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isStopped", {
        get: function() {
            return this._sound.isStopped
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isPlaying", {
        get: function() {
            return this._sound.isPlaying
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isPaused", {
        get: function() {
            return this._sound.isPaused
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isLooped", {
        get: function() {
            return this._sound.isLooped
        },
        set: function(t) {
            this._sound.isLooped = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "volume", {
        get: function() {
            return this._volume
        },
        set: function(t) {
            t = Math.min(Math.max(t, 0), 1),
            this._volume = t,
            this.updateVolume()
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.updateVolume = function() {
        this._sound.volume = e.AudioManager.isMuted ? 0 : this._volume * e.AudioManager.volume * e.AudioManager.engineVolume
    }
    ,
    s.prototype.play = function() {
        this.isStopped || this.stop(),
        this._globallyPaused = !1,
        e.AudioManager.registerCue(this),
        this.updateVolume(),
        this._sound.play(),
        e.AudioManager.globalPaused && !this.ignoreGlobalActions && (this.pause(),
        this._globallyPaused = !0)
    }
    ,
    s.prototype.stop = function() {
        this.isStopped || this._sound.stop(),
        this._globallyPaused = !1,
        e.AudioManager.unregisterCue(this)
    }
    ,
    s.prototype.pause = function() {
        this._sound.isPlaying && this._sound.pause()
    }
    ,
    s.prototype.resume = function() {
        this.isPaused && this._sound.resume()
    }
    ,
    s.prototype.sound_onComplete = function(t) {
        e.AudioManager.unregisterCue(this),
        this.onComplete.invoke(this, !0)
    }
    ,
    t = s,
    e.Cue = t
}(com = com || {}),
!function(t) {
    var s, n, a, e, i, r, o;
    function h(t) {
        var e = a[t];
        if (e)
            return new s.Cue(e);
        throw new Error("There was no Cue defined with id: " + t)
    }
    function l() {
        for (var t = o.slice(0), e = 0; e < t.length; ++e) {
            var i = t[e];
            i.updateVolume()
        }
    }
    s = t.battleline || (t.battleline = {}),
    n = s.AudioManager || (s.AudioManager = {}),
    n.onMuted = new s.DelegateEvent,
    n.onUnmuted = new s.DelegateEvent,
    n.globalPaused = !1,
    a = {},
    e = 1,
    Object.defineProperty(n, "volume", {
        get: function() {
            return e
        },
        set: function(t) {
            e = Math.min(1, Math.max(t, 0)),
            l()
        },
        enumerable: !0
    }),
    i = 1,
    Object.defineProperty(n, "engineVolume", {
        get: function() {
            return i
        },
        set: function(t) {
            i = Math.min(1, Math.max(t, 0)),
            l()
        },
        enumerable: !0
    }),
    r = !1,
    Object.defineProperty(n, "isMuted", {
        get: function() {
            return r
        },
        set: function(t) {
            r !== t && (r = t,
            l(),
            (t ? n.onMuted : n.onUnmuted).invoke())
        },
        enumerable: !0
    }),
    o = new Array,
    n.registerCue = function(t) {
        var e = o.indexOf(t);
        e < 0 && o.push(t)
    }
    ,
    n.unregisterCue = function(t) {
        t = o.indexOf(t),
        0 <= t && o.splice(t, 1)
    }
    ,
    n.pause = function() {
        n.globalPaused = !0,
        n.engineVolume = 0;
        for (var t = o.slice(0), e = 0; e < t.length; ++e) {
            var i = t[e];
            !i.ignoreGlobalActions && i.isPlaying && (i.pause(),
            i._globallyPaused = !0)
        }
    }
    ,
    n.resume = function() {
        n.globalPaused = !1,
        n.engineVolume = 1;
        for (var t = o.slice(0), e = 0; e < t.length; ++e) {
            var i = t[e];
            !i.ignoreGlobalActions && i.isPaused && i._globallyPaused && (i.resume(),
            i._globallyPaused = !1)
        }
    }
    ,
    n.stop = function() {
        for (var t = o.slice(0), e = 0; e < t.length; ++e) {
            var i = t[e];
            i.ignoreGlobalActions || i.isStopped || (i.stop(),
            i._globallyPaused = !1)
        }
    }
    ,
    n.getCue = h,
    n.playCue = function(t) {
        return t = h(t),
        t.play(),
        t
    }
    ,
    n.addCueDefinition = function(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = 1),
        a[t] === t && s.Logger.warn("There was already a cue defined with that id ()" + t + ") ignoring new definition!"),
        a[t] = new s.CueDefinition(t,e,i)
    }
    ,
    n.getCueDefinition = function(t) {
        var e = a[t];
        if (e)
            return e;
        throw new Error("There was no Cue defined with id: " + t)
    }
}(com = com || {}),
!function(com) {
    var battleline;
    !function(battleline) {
        var DomConsoleLogger = function() {
            function t() {}
            return t.prototype.log = function(t) {
                DomConsole.write("#FFF", t)
            }
            ,
            t.prototype.info = function(t) {
                DomConsole.write("#999", t)
            }
            ,
            t.prototype.warn = function(t) {
                DomConsole.write("#FC0", t)
            }
            ,
            t.prototype.error = function(t) {
                DomConsole.write("#F0F", t)
            }
            ,
            t.prototype.trace = function() {
                DomConsole.write("#999", "[TRACE] Trace request ignored, tracing not available in Console!")
            }
            ,
            t
        }(), DomConsole;
        !function(DomConsole) {
            DomConsole.enableOnUncaughtError = !1;
            var _isEnabled = !1
              , _isVisible = (Object.defineProperty(DomConsole, "isEnabled", {
                get: function() {
                    return _isEnabled
                },
                set: function(t) {
                    _isEnabled !== t && (t ? enable : disable)()
                },
                enumerable: !0
            }),
            !0)
              , _isOpen = (Object.defineProperty(DomConsole, "isVisible", {
                get: function() {
                    return _isVisible
                },
                set: function(t) {
                    _isVisible !== t && (t ? show : hide)()
                },
                enumerable: !0
            }),
            !1)
              , _display = (Object.defineProperty(DomConsole, "isOpen", {
                get: function() {
                    return _isOpen
                },
                set: function(t) {
                    _isOpen !== t && (t ? open : close)()
                },
                enumerable: !0
            }),
            null)
              , _dimmer = null
              , _trayHolder = null
              , _outputTray = null
              , _output = null
              , _inputTray = null
              , _inputForm = null
              , _input = null
              , _btnTray = null
              , _toggleBtn = null
              , _clearBtn = null
              , _gfxOptionsTray = null
              , _hdBtn = null
              , _qualityBtn = null
              , _unread = 0
              , _lastEntry = {}
              , _pendingEntries = new Array
              , _nextTabColor = null
              , _dirty = !1
              , _logger = null
              , _hdOn = !0
              , _quality = 1
              , _consoleCommands = null
              , _defaultInputValue = "Enter a command or 'help' for a list of commands..."
              , _defaultInputColor = "#777";
            function enable() {
                _isEnabled = !0,
                _quality = battleline.Game.defaultViewQuality,
                _hdOn = battleline.Game.defaultViewHD,
                create(),
                window.addEventListener("keyup", window_keyUp),
                document.addEventListener("DOMContentLoaded", document_DomContentLoaded, !1),
                null === _consoleCommands && (_consoleCommands = {},
                addCommand(helpCmd, "help", "help / ?", "Displays a list of available commands."),
                addCommand(helpCmd, "?", "", "", !0),
                addCommand(echoCmd, "echo", "echo [message]", "Writes a message to the console."),
                addCommand(errorCmd, "error", "error [message]", "Throws and error with the given message."),
                addCommand(evalCmd, "eval", "eval [javascript]", "Executes the given javascript."),
                addCommand(clrCmd, "clear", "clear / clr / cls", "Clears all console messages."),
                addCommand(clrCmd, "clr", "", "", !0),
                addCommand(clrCmd, "cls", "", "", !0),
                addCommand(versionCmd, "version", "version / ver / v", "Prints the app version to the console."),
                addCommand(versionCmd, "ver", "", "", !0),
                addCommand(versionCmd, "v", "", "", !0),
                addCommand(closeCmd, "close", "close", "Closes the console."),
                addCommand(hideCmd, "hide", "hide", "Hides the console."),
                addCommand(disableCmd, "disable", "disable", "Disables the console."))
            }
            function disable() {
                _isEnabled = !1,
                destroy(),
                window.removeEventListener("keyup", window_keyUp),
                document.removeEventListener("DOMContentLoaded", document_DomContentLoaded, !1)
            }
            function document_DomContentLoaded(t) {
                _isEnabled && document.body.appendChild(_display)
            }
            function window_keyUp(t) {
                var e = !1;
                192 === t.keyCode ? ((_isVisible ? _isOpen ? close : open : show)(),
                e = !0) : 27 === t.keyCode && (_isOpen ? close() : _isVisible && hide(),
                e = !0),
                e && (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation())
            }
            function show() {
                _isVisible = !0,
                null !== _display && (_dirty && render(),
                _display.style.display = "inline")
            }
            function hide() {
                _isVisible = !1,
                null !== _display && (_display.style.display = "none")
            }
            function open() {
                _isOpen = !0,
                null !== _display && (_display.style.width = "100%",
                _display.style.height = "100%",
                _dimmer.style.display = "block",
                _trayHolder.style.pointerEvents = "auto",
                _trayHolder.style.width = "100%",
                _trayHolder.style.height = "100%",
                _outputTray.style.display = "block",
                _inputTray.style.display = "block",
                _toggleBtn.innerHTML = "Close",
                _toggleBtn.style.borderTopWidth = "0px",
                _clearBtn.style.display = "inline-block",
                _nextTabColor = null,
                _outputTray.scrollTop = _outputTray.scrollHeight,
                _dirty) && render()
            }
            function close() {
                _isOpen = !1,
                null !== _display && (_display.style.width = "0%",
                _display.style.height = "0%",
                _dimmer.style.display = "none",
                _trayHolder.style.pointerEvents = "none",
                _trayHolder.style.width = "0%",
                _trayHolder.style.height = "0%",
                _outputTray.style.display = "none",
                _inputTray.style.display = "none",
                _toggleBtn.innerHTML = "Console",
                _clearBtn.style.display = "none",
                _input.blur(),
                _input.value = _defaultInputValue,
                _input.style.color = _defaultInputColor,
                _unread = 0)
            }
            function create() {
                _display = document.createElement("div"),
                _display.id = "com.battleline.DomConsole.display",
                _display.style.position = "fixed",
                _display.style.top = "0%",
                _display.style.left = "0%",
                _display.style.width = "0%",
                _display.style.height = "0%",
                _display.style.zIndex = "2408481508",
                _display.style.display = "inline",
                _display.style.pointerEvents = "none",
                _display.style.overflow = "visible",
                _display.style.userSelect = "none",
                _display.style.webkitUserSelect = "none",
                _display.style.msUserSelect = "none",
                _display.style.MozUserSelect = "none",
                _dimmer = document.createElement("div"),
                _dimmer.id = "com.battleline.DomConsole.dimmer",
                _dimmer.style.position = "absolute",
                _dimmer.style.top = "0%",
                _dimmer.style.left = "0%",
                _dimmer.style.width = "100%",
                _dimmer.style.height = "100%",
                _dimmer.style.display = "block",
                _dimmer.style.backgroundColor = "rgba(255, 255, 255, 0.2)",
                _dimmer.style.pointerEvents = "auto",
                _display.appendChild(_dimmer),
                _trayHolder = document.createElement("div"),
                _trayHolder.id = "com.battleline.DomConsole.trayHolder",
                _trayHolder.style.position = "absolute",
                _trayHolder.style.top = "0%",
                _trayHolder.style.left = "0%",
                _trayHolder.style.width = "0%",
                _trayHolder.style.height = "0%",
                _trayHolder.style.display = "block",
                _trayHolder.style.pointerEvents = "none",
                _trayHolder.style.overflow = "visible",
                _display.appendChild(_trayHolder),
                _outputTray = document.createElement("div"),
                _outputTray.id = "com.battleline.DomConsole.outputTray",
                _outputTray.style.position = "relative",
                _outputTray.style.top = "0%",
                _outputTray.style.left = "0%",
                _outputTray.style.width = "100%",
                _outputTray.style.height = "40%",
                _outputTray.style.display = "block",
                _outputTray.style.backgroundColor = "rgba(0,0,0,0.9)",
                _outputTray.style.borderBottom = "solid 1px #333",
                _outputTray.style.overflowY = "scroll",
                _outputTray.style.WebkitOverflowScrolling = "touch",
                _outputTray.style.userSelect = "text",
                _outputTray.style.webkitUserSelect = "text",
                _outputTray.style.msUserSelect = "element",
                _outputTray.style.MozUserSelect = "text",
                _trayHolder.appendChild(_outputTray),
                _output = document.createElement("div"),
                _output.id = "com.battleline.DomConsole.output",
                _output.style.margin = "10px",
                _output.style.cursor = "text",
                _output.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _output.style.fontSize = "8pt",
                _outputTray.appendChild(_output),
                _inputTray = document.createElement("div"),
                _inputTray.id = "com.battleline.DomConsole.inputTray",
                _inputTray.style.position = "relative",
                _inputTray.style.width = "100%",
                _inputTray.style.height = "1.75em",
                _inputTray.style.display = "block",
                _inputTray.style.backgroundColor = "rgba(0,0,0,1)",
                _inputTray.style.borderBottom = "solid 1px #FFF",
                _trayHolder.appendChild(_inputTray),
                _inputForm = document.createElement("form"),
                _inputForm.id = "com.battleline.DomConsole.inputForm",
                _inputTray.appendChild(_inputForm),
                _input = document.createElement("input"),
                _input.id = "com.battleline.DomConsole.input",
                _input.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _input.style.fontSize = "8pt",
                _input.style.border = "none",
                _input.style.width = "95%",
                _input.style.height = "2em",
                _input.style.marginTop = "2px",
                _input.style.color = "#FFF",
                _input.style.marginLeft = "10px",
                _input.style.marginRight = "10px",
                _input.style.backgroundColor = "rgba(0,0,0,0)",
                _input.style.webkitTapHighlightColor = "rgba(255, 255, 255, 0)",
                _input.style.webkitTapHighlightColor = "transparent",
                _input.style.outline = "none",
                _input.style.boxShadow = "none",
                _input.value = _defaultInputValue,
                _input.style.color = _defaultInputColor,
                _inputForm.appendChild(_input),
                _btnTray = document.createElement("div"),
                _btnTray.id = "com.battleline.DomConsole.btnTray",
                _btnTray.style.position = "relative",
                _btnTray.style.width = "100%",
                _trayHolder.appendChild(_btnTray),
                _toggleBtn = document.createElement("div"),
                _toggleBtn.id = "com.battleline.DomConsole.toggleBtn",
                _toggleBtn.style.position = "absolute",
                _toggleBtn.style.top = "0px",
                _toggleBtn.style.left = "0%",
                _toggleBtn.style.padding = "6px",
                _toggleBtn.style.backgroundColor = "rgba(0,0,0, 0.65)",
                _toggleBtn.style.color = "#FFF",
                _toggleBtn.style.display = "inline-block",
                _toggleBtn.style.pointerEvents = "auto",
                _toggleBtn.style.cursor = "pointer",
                _toggleBtn.style.userSelect = "none",
                _toggleBtn.style.webkitUserSelect = "none",
                _toggleBtn.style.msUserSelect = "none",
                _toggleBtn.style.MozUserSelect = "none",
                _toggleBtn.style.border = "solid 1px #333",
                _toggleBtn.style.borderLeftWidth = "0px",
                _toggleBtn.style.borderTopWidth = "0px",
                _toggleBtn.style.webkitTapHighlightColor = "rgba(255, 255, 255, 0)",
                _toggleBtn.style.webkitTapHighlightColor = "transparent",
                _toggleBtn.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _toggleBtn.style.fontSize = "8pt",
                _toggleBtn.style.fontWeight = "bolder",
                _toggleBtn.innerHTML = "Close",
                _btnTray.appendChild(_toggleBtn),
                _clearBtn = document.createElement("div"),
                _clearBtn.id = "com.battleline.DomConsole.clearBtn",
                _clearBtn.style.position = "absolute",
                _clearBtn.style.top = "0px",
                _clearBtn.style.right = "0%",
                _clearBtn.style.border = "solid 1px #333",
                _clearBtn.style.borderRightWidth = "0px",
                _clearBtn.style.padding = "6px",
                _clearBtn.style.backgroundColor = "rgba(0,0,0, 0.65)",
                _clearBtn.style.color = "#FFF",
                _clearBtn.style.display = "inline-block",
                _clearBtn.style.pointerEvents = "auto",
                _clearBtn.style.cursor = "pointer",
                _clearBtn.style.userSelect = "none",
                _clearBtn.style.webkitUserSelect = "none",
                _clearBtn.style.msUserSelect = "none",
                _clearBtn.style.MozUserSelect = "none",
                _clearBtn.style.webkitTapHighlightColor = "rgba(255, 255, 255, 0)",
                _clearBtn.style.webkitTapHighlightColor = "transparent",
                _clearBtn.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _clearBtn.style.fontWeight = "bolder",
                _clearBtn.style.fontSize = "8pt",
                _clearBtn.innerHTML = "Clear",
                _btnTray.appendChild(_clearBtn),
                _gfxOptionsTray = document.createElement("div"),
                _gfxOptionsTray.id = "com.battleline.DomConsole.gfxOptionsTray",
                _gfxOptionsTray.style.position = "fixed",
                _gfxOptionsTray.style.bottom = "0px",
                _gfxOptionsTray.style.left = "0%",
                _gfxOptionsTray.style.width = "100%",
                _trayHolder.appendChild(_gfxOptionsTray),
                _hdBtn = document.createElement("div"),
                _hdBtn.id = "com.battleline.DomConsole.hdBtn",
                _hdBtn.style.position = "relative",
                _hdBtn.style.bottom = "0px",
                _hdBtn.style.left = "0%",
                _hdBtn.style.border = "solid 1px #333",
                _hdBtn.style.borderLeftWidth = "0px",
                _hdBtn.style.borderBottomWidth = "0px",
                _hdBtn.style.padding = "6px",
                _hdBtn.style.backgroundColor = "rgba(0,0,0, 0.65)",
                _hdBtn.style.color = "#FFF",
                _hdBtn.style.display = "inline-block",
                _hdBtn.style.pointerEvents = "auto",
                _hdBtn.style.cursor = "pointer",
                _hdBtn.style.userSelect = "none",
                _hdBtn.style.webkitUserSelect = "none",
                _hdBtn.style.msUserSelect = "none",
                _hdBtn.style.MozUserSelect = "none",
                _hdBtn.style.webkitTapHighlightColor = "rgba(255, 255, 255, 0)",
                _hdBtn.style.webkitTapHighlightColor = "transparent",
                _hdBtn.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _hdBtn.style.fontWeight = "bolder",
                _hdBtn.style.fontSize = "8pt",
                _hdBtn.innerHTML = _hdOn ? "High Def" : "Low Def",
                _gfxOptionsTray.appendChild(_hdBtn),
                _qualityBtn = document.createElement("div"),
                _qualityBtn.id = "com.battleline.DomConsole.qualityBtn",
                _qualityBtn.style.position = "relative",
                _qualityBtn.style.bottom = "0px",
                _qualityBtn.style.left = "0%",
                _qualityBtn.style.border = "solid 1px #333",
                _qualityBtn.style.borderLeftWidth = "0px",
                _qualityBtn.style.borderBottomWidth = "0px",
                _qualityBtn.style.padding = "6px",
                _qualityBtn.style.backgroundColor = "rgba(0,0,0, 0.65)",
                _qualityBtn.style.color = "#FFF",
                _qualityBtn.style.display = "inline-block",
                _qualityBtn.style.pointerEvents = "auto",
                _qualityBtn.style.cursor = "pointer",
                _qualityBtn.style.userSelect = "none",
                _qualityBtn.style.webkitUserSelect = "none",
                _qualityBtn.style.msUserSelect = "none",
                _qualityBtn.style.MozUserSelect = "none",
                _qualityBtn.style.webkitTapHighlightColor = "rgba(255, 255, 255, 0)",
                _qualityBtn.style.webkitTapHighlightColor = "transparent",
                _qualityBtn.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
                _qualityBtn.style.fontWeight = "bolder",
                _qualityBtn.style.fontSize = "8pt",
                _qualityBtn.innerHTML = "Quality: " + Math.round(100 * _quality) + "%",
                _gfxOptionsTray.appendChild(_qualityBtn),
                _outputTray.addEventListener("touchstart", stopEvent),
                _outputTray.addEventListener("touchmove", stopEvent),
                _outputTray.addEventListener("touchend", stopEvent),
                _inputForm.addEventListener("submit", inputForm_submit),
                _input.addEventListener("keydown", input_keyDown, !0),
                _input.addEventListener("focus", input_focus),
                _input.addEventListener("blur", input_blur),
                _toggleBtn.addEventListener("click", toggleBtn_click),
                _clearBtn.addEventListener("click", clearBtn_click),
                _hdBtn.addEventListener("click", hdBtn_click),
                _qualityBtn.addEventListener("click", qualityBtn_click),
                _isVisible || hide(),
                _isOpen || close(),
                !document.body || "interactive" !== document.readyState && "complete" !== document.readyState || document.body.appendChild(_display),
                _logger = new DomConsoleLogger,
                battleline.Logger.addLogger(_logger)
            }
            function destroy() {
                battleline.Logger.removeLogger(_logger),
                _logger = null,
                !document.body || "interactive" !== document.readyState && "complete" !== document.readyState || document.body.removeChild(_display),
                _outputTray.removeEventListener("touchstart", stopEvent),
                _outputTray.removeEventListener("touchmove", stopEvent),
                _outputTray.removeEventListener("touchend", stopEvent),
                _inputForm.removeEventListener("submit", inputForm_submit),
                _input.removeEventListener("keydown", input_keyDown, !0),
                _input.removeEventListener("focus", input_focus),
                _input.removeEventListener("blur", input_blur),
                _toggleBtn.removeEventListener("click", toggleBtn_click),
                _clearBtn.removeEventListener("click", clearBtn_click),
                _hdBtn.removeEventListener("click", hdBtn_click),
                _qualityBtn.removeEventListener("click", qualityBtn_click),
                _display = null,
                _dimmer = null,
                _trayHolder = null,
                _outputTray = null,
                _output = null,
                _inputTray = null,
                _inputForm = null,
                _input = null,
                _btnTray = null,
                _toggleBtn = null,
                _clearBtn = null,
                _gfxOptionsTray = null,
                _hdBtn = null,
                _qualityBtn = null,
                _unread = 0,
                _lastEntry = {},
                _pendingEntries = new Array,
                _nextTabColor = null,
                _dirty = !1
            }
            function render() {
                if (_isEnabled)
                    if (_isVisible && _isOpen && _dirty) {
                        var t = !1
                          , e = _outputTray.scrollTop + _outputTray.clientHeight;
                        _outputTray.scrollHeight - e < 28 && (t = !0);
                        for (var i = 0; i < _pendingEntries.length; ++i)
                            _output.appendChild(_pendingEntries[i]);
                        for (_pendingEntries.length = 0,
                        _dirty = !1; 100 < _output.childElementCount; )
                            _output.removeChild(_output.children.item(0));
                        t && (_outputTray.scrollTop = _outputTray.scrollHeight)
                    } else
                        _isVisible && _nextTabColor && (_toggleBtn.style.borderTopWidth = "3px",
                        _toggleBtn.style.borderTopColor = _nextTabColor,
                        _nextTabColor = null,
                        _toggleBtn.innerHTML = 0 < _unread ? "Console&nbsp;(" + _unread + ")" : "Console")
            }
            function hdBtn_click(t) {
                if (_hdOn = !_hdOn,
                battleline.Game.instance)
                    for (var e = battleline.Game.instance._views, i = 0; i < e.length; ++i)
                        e[i].hd = _hdOn;
                _hdBtn.innerHTML = _hdOn ? "High Def" : "Low Def"
            }
            function qualityBtn_click(t) {
                if (_quality -= .1,
                _quality <= .01 && (_quality = 1),
                battleline.Game.instance)
                    for (var e = battleline.Game.instance._views, i = 0; i < e.length; ++i)
                        e[i].quality = _quality;
                _qualityBtn.innerHTML = "Quality: " + Math.round(100 * _quality) + "%"
            }
            function inputForm_submit(t) {
                if (t.preventDefault(),
                _isEnabled && _isVisible && _isOpen) {
                    var e = _input.value;
                    for (_input.value = _defaultInputValue,
                    _input.style.color = _defaultInputColor,
                    _input.value === _defaultInputValue && (_input.value = ""),
                    _input.style.color = "#FFF"; 0 < e.length && 0 === e.indexOf(" "); )
                        e = e.replace(" ", "");
                    for (; 0 < e.length && " " === e.charAt(e.length - 1); )
                        e = e.substr(0, e.length - 1);
                    "" !== e && (DomConsole.write("#0CF", "> " + e),
                    _outputTray.scrollTop = _outputTray.scrollHeight,
                    processInput(e))
                }
            }
            function input_keyDown(t) {
                192 === t.keyCode && (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation())
            }
            function input_focus(t) {
                _input.value === _defaultInputValue && (_input.value = ""),
                _input.style.color = "#FFF"
            }
            function input_blur(t) {
                "" === _input.value && (_input.value = _defaultInputValue,
                _input.style.color = _defaultInputColor)
            }
            function toggleBtn_click(t) {
                (_isOpen ? close : open)()
            }
            function clearBtn_click(t) {
                for (; 0 < _output.childElementCount; )
                    _output.removeChild(_output.children.item(0));
                _dirty = !0,
                render()
            }
            function stopEvent(t) {
                t.stopPropagation(),
                t.stopImmediatePropagation()
            }
            function addCommand(t, e, i, s, n) {
                void 0 === n && (n = !1),
                e = e.toLowerCase(),
                _consoleCommands[e] && battleline.Logger.warn("There was already a console command named: " + e),
                _consoleCommands[e] = {
                    func: t,
                    desc: i + " --\x3e " + s,
                    alias: n
                }
            }
            function removeCommand(t) {
                t = t.toLowerCase();
                var e = _consoleCommands[t];
                e ? _consoleCommands[t] = null : battleline.Logger.warn("There was already no console command named: " + t)
            }
            function processInput(t) {
                var e, i, s = t.indexOf(" ");
                i = s < 0 ? t : t.substring(0, s),
                i && (i = i.toLowerCase(),
                _consoleCommands[i] ? (e = "",
                0 < s && (e = t.substr(s + 1)),
                _consoleCommands[i].func(e)) : _logger.info(i + " is not a recognized command. Enter ? for a list of commands."))
            }
            function helpCmd(t) {
                var e, i = "Available commands:";
                for (e in _consoleCommands)
                    !1 === _consoleCommands[e].alias && (i += "\n   " + e + ": " + _consoleCommands[e].desc);
                i += "\nKeyboard commands:",
                i += "\n    ~ : Shows the console, or toggles it open and closed.",
                i += "\n   ESC: Closes the console, or hides it when closed.",
                _logger.info(i)
            }
            function hideCmd(t) {
                close(),
                hide()
            }
            function errorCmd(t) {
                setTimeout(function() {
                    throw new Error("Console Test Error: " + t)
                }, 0)
            }
            function evalCmd(argStr) {
                var retVal;
                battleline.Logger.info("Evaluating: " + argStr);
                try {
                    retVal = eval(argStr)
                } catch (err) {
                    return battleline.Logger.warn("Error executing js"),
                    void battleline.Logger.error(err)
                }
                battleline.Logger.info("Returned: " + retVal)
            }
            function closeCmd(t) {
                close()
            }
            function clrCmd(t) {
                clearBtn_click(null)
            }
            function disableCmd(t) {
                destroy()
            }
            function echoCmd(t) {
                battleline.Logger.info(t)
            }
            function versionCmd(t) {
                battleline.Logger.info("Version: " + battleline.App.versionNumber.toString()),
                battleline.Logger.info("Build Date: " + battleline.App.buildDate.toString()),
                battleline.Logger.info("Build Timestamp: " + battleline.App.buildTimestamp.toString())
            }
            DomConsole.write = function(t, e) {
                if (_isEnabled) {
                    for (_unread++,
                    e += ""; 0 <= e.indexOf("&"); )
                        e = e.replace("&", "~!@#$%^*()AMP~!@#$%^*()");
                    for (; 0 <= e.indexOf("~!@#$%^*()AMP~!@#$%^*()"); )
                        e = e.replace("~!@#$%^*()AMP~!@#$%^*()", "&amp;");
                    for (; 0 <= e.indexOf("'"); )
                        e = e.replace("'", "&apos;");
                    for (; 0 <= e.indexOf('"'); )
                        e = e.replace('"', "&quot;");
                    for (; 0 <= e.indexOf("<"); )
                        e = e.replace("<", "&lt;");
                    for (; 0 <= e.indexOf(">"); )
                        e = e.replace(">", "&gt;");
                    for (; 0 <= e.indexOf("\r"); )
                        e = e.replace("\r", "");
                    for (; 0 <= e.indexOf("\n"); )
                        e = e.replace("\n", "<br/>");
                    for (; 0 <= e.indexOf("\t"); )
                        e = e.replace("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
                    for (; 0 <= e.indexOf(" "); )
                        e = e.replace(" ", "&nbsp;");
                    var i;
                    _lastEntry.msg === e && _lastEntry.hexColor === t ? (_lastEntry.count++,
                    _lastEntry.entry.innerHTML = "<i style='color: #6495ED;'>(" + _lastEntry.count + ")</i> " + _lastEntry.msg) : (i = document.createElement("div"),
                    i.style.padding = "0px",
                    i.style.margin = "0px",
                    i.style.marginBottom = "6pt",
                    i.style.fontSize = "8pt",
                    i.style.color = t,
                    i.innerHTML = e,
                    _pendingEntries.push(i),
                    _lastEntry.entry = i,
                    _lastEntry.hexColor = t,
                    _lastEntry.msg = e,
                    _lastEntry.count = 1),
                    _nextTabColor = t,
                    _dirty = !0,
                    render()
                }
            }
            ,
            DomConsole.addCommand = addCommand,
            DomConsole.removeCommand = removeCommand
        }(DomConsole = battleline.DomConsole || (battleline.DomConsole = {}))
    }(battleline = com.battleline || (com.battleline = {}))
}(com = com || {}),
!function(t) {
    var i, e, s, n, a, r;
    function o() {
        e.time = Date.now() - e.start,
        e.elapsed = 0
    }
    function h() {
        var t, e = i.App.isSuspended ? n : s;
        r !== e && (t = !1,
        a && (t = !0,
        clearInterval(a),
        a = null),
        r = e,
        0 < e) && (t || o(),
        a = setInterval(c, 1e3 / e))
    }
    function l(t, e) {
        t = Math.floor(t),
        e = Math.floor(e),
        t < 0 && (t = 0),
        e < 0 && (e = 0),
        s = t,
        n = e,
        h()
    }
    function c() {
        null !== a && (e.elapsed = Date.now() - e.start - e.time,
        e.time += e.elapsed,
        e.onEngineTick.invoke(),
        e.onTick.invoke())
    }
    i = t.battleline || (t.battleline = {}),
    e = i.Time || (i.Time = {}),
    e.onEngineTick = new i.DelegateEvent,
    e.onTick = new i.DelegateEvent,
    s = 30,
    n = 0,
    Object.defineProperty(e, "activeTicksPerSecond", {
        get: function() {
            return s
        },
        set: function(t) {
            l(t, n)
        },
        enumerable: !0
    }),
    Object.defineProperty(e, "inactiveTicksPerSecond", {
        get: function() {
            return n
        },
        set: function(t) {
            l(s, t)
        },
        enumerable: !0
    }),
    e.time = 0,
    e.elapsed = 0,
    a = null,
    r = null,
    e.initialize = function() {
        e.start = Date.now(),
        h()
    }
    ,
    e.dispose = function() {
        l(0, 0)
    }
    ,
    e.appActiveStateChange = function() {
        h()
    }
    ,
    e.resetElapsedTime = o
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this._name = t
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "name", {
        get: function() {
            return this._name
        },
        enumerable: !1,
        configurable: !0
    }),
    i.getByIdentifier = function(t) {
        if ("Web" === t)
            return this.Web;
        if ("Google" === t)
            return this.Google;
        if ("Apple" === t)
            return this.Apple;
        if ("Amazon" === t)
            return this.Amazon;
        throw new Error("Unknown TargetMarket identifier: " + t)
    }
    ,
    i.Web = new i("Web"),
    i.Google = new i("Google Play"),
    i.Apple = new i("Apple App Store"),
    i.Amazon = new i("Amazon Appstore"),
    e = i,
    t.TargetMarket = e
}(com = com || {}),
!function(t) {
    var e, i, s;
    function n(t) {
        if (t <= 0) {
            if (!s)
                return;
            t = 0,
            s = !1
        } else
            s = !0;
        i.isSupported && i.isEnabled && (console.log("run for " + t),
        navigator.vibrate(t))
    }
    e = t.battleline || (t.battleline = {}),
    i = e.Vibration || (e.Vibration = {}),
    i.isEnabled = !0,
    s = !1,
    i.initialize = function() {
        void 0 !== navigator.notification ? navigator.vibrate = navigator.notification.vibrate || navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate : navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate,
        "vibrate"in navigator && (i.isSupported = !0,
        e.App.onDeactivated.add(i.stop, null),
        e.App.onHidden.add(i.stop, null),
        e.App.onSuspended.add(i.stop, null))
    }
    ,
    i.run = n,
    i.stop = function() {
        s && n(0)
    }
}(com = com || {}),
!function(e) {
    var r, o, n;
    function i() {
        var t = !o.isActive || !o.isVisible;
        t !== o.isSuspended && (t ? o.isSuspended || (o.isSuspended = !0,
        r.Time.appActiveStateChange(),
        r.AudioManager.pause(),
        o.onSuspended.invoke()) : o.isSuspended && (o.isSuspended = !1,
        r.Time.appActiveStateChange(),
        r.AudioManager.resume(),
        o.onResumed.invoke()))
    }
    function s() {
        o.isVisible && (o.isVisible = !1,
        i(),
        o.onHidden.invoke())
    }
    function t() {
        o.isVisible || (o.isVisible = !0,
        o.onVisible.invoke(),
        i())
    }
    function a() {
        t()
    }
    function h() {
        s()
    }
    function l() {
        r.Logger.log("resume"),
        t()
    }
    function c() {
        r.Logger.log("pause"),
        s()
    }
    function u() {
        r.Logger.log("backbutton"),
        o.onBackButton.invoke()
    }
    function d() {
        o.didEnterFullscreen()
    }
    function p() {
        o.didExitFullscreen()
    }
    function m(t, e, i, s, n) {
        var a = "UNCAUGHT ERRROR:\n" + t + "\nError Message: " + t + "\nScript: " + e + "\nLine: " + i + " Column: " + s + "\nError Object: " + n;
        (r.DomConsole.isEnabled || r.DomConsole.enableOnUncaughtError) && (r.DomConsole.isEnabled = !0,
        r.DomConsole.isVisible = !0,
        r.DomConsole.isOpen = !0);
        a += "\nApp Version: " + o.versionNumber,
        a += "\nBuild Timestamp: " + o.buildTimestamp,
        a += "\nBuild Date: " + o.buildDate;
        try {
            r.Logger.error(a)
        } catch (t) {}
        try {
            o.onUncaughtError.invoke(t, e, i, s, n)
        } catch (t) {}
        return !1
    }
    r = e.battleline || (e.battleline = {}),
    r.EncodedAssets = {},
    o = r.App || (r.App = {}),
    o.onSuspended = new r.DelegateEvent,
    o.onResumed = new r.DelegateEvent,
    o.onDeactivated = new r.DelegateEvent,
    o.onActivated = new r.DelegateEvent,
    o.onEnterFullscreen = new r.DelegateEvent,
    o.onExitFullscreen = new r.DelegateEvent,
    o.onHidden = new r.DelegateEvent,
    o.onVisible = new r.DelegateEvent,
    o.onBackButton = new r.DelegateEvent,
    o.onUncaughtError = new r.DelegateEvent,
    o.isClickToPlay = !1,
    o.isSuspended = !1,
    o.isActive = !0,
    o.isVisible = !0,
    o.create = function() {
        function i() {
            var t = window.appProperties = window.appProperties || new r.AppProperties;
            t.isWebApp || window.cordovaReady ? o.initialize(t) : document.addEventListener("deviceready", function() {
                o.initialize(window.appProperties)
            }, !1)
        }
        window.onerror = m,
        !document.body || "interactive" !== document.readyState && "complete" !== document.readyState ? document.addEventListener("DOMContentLoaded", function t(e) {
            document.removeEventListener("DOMContentLoaded", t),
            i()
        }) : setTimeout(i, 0)
    }
    ,
    o.initialize = function(t) {
        o.isWebApp = t.isWebApp,
        o.targetMarket = r.TargetMarket.getByIdentifier(t.targetMarketIdentifier),
        o.basePath = t.basePath,
        createjs.Ticker.framerate = 30,
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]),
        createjs.Sound.initializeDefaultPlugins(),
        r.PageVisibilityAPI.initialize(),
        o.isWebApp && r.MobilePlayOverlay.initialize(),
        o.isWebApp && r.ExternalInterface.initialize(),
        o.isWebApp ? r.ExternalInterface.register() : o.launch(e.battleline.Config)
    }
    ,
    o.launch = function(t) {
        void 0 === t && (t = null),
        o.url = o.isWebApp ? r.ExternalInterface.url : document.location.href,
        o.urlVariables = new r.URLVariables(0 <= o.url.indexOf("?") ? o.url.substr(o.url.indexOf("?") + 1) : ""),
        e.battleline.Config = t,
        r.Platform.initialize(o.url),
        r.FontRegistration.register(),
        o.isWebApp && 0 === document.location.toString().indexOf("file://") || o.isWebApp,
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]),
        r.WebAudio.isSupported ? r.WebAudio.enabled = !0 : r.WebAudio.enabled = !1,
        r.FullscreenAPI.initialize(o.url),
        r.Time.initialize(),
        r.Vibration.initialize(),
        r.Keyboard.initialize(document.getElementById("game")),
        t.wideLayout && r.InterstitialAds.systemInit(),
        r.WebAudio.isSupported && r.WebAudio.initialize(),
        r.HTMLAudio.initialize(),
        r.Splash.initialize(),
        r.PageVisibilityAPI.onHidden.add(h, null),
        r.PageVisibilityAPI.onVisible.add(a, null),
        o.isWebApp || (document.addEventListener("resume", l, !1),
        document.addEventListener("pause", c, !1),
        document.addEventListener("backbutton", u, !1)),
        r.FullscreenAPI.onEnterFullscreen.add(d, null),
        r.FullscreenAPI.onExitFullscreen.add(p, null),
        r.PageVisibilityAPI.isVisible || s(),
        !o.isWebApp || r.Platform.deviceType !== r.DeviceType.Handheld && r.Platform.deviceType !== r.DeviceType.Tablet || (o.isClickToPlay = !0,
        o.deactivate()),
        i(),
        e.battleline.main(),
        r.Game.instance.prePreload()
    }
    ,
    o.ready = function() {
        (o.isWebApp ? r.ExternalInterface : o).start()
    }
    ,
    o.start = function() {
        r.Game.instance.start()
    }
    ,
    n = !1,
    o.touchReset = function() {
        n || (n = !0,
        document.body.addEventListener("touchstart", function t() {
            n = !1,
            document.body.removeEventListener("touchstart", t, {
                capture: !0,
                passive: !0
            });
            for (var e = 0, i = r.Game.instance._views; e < i.length; e++) {
                var s = i[e];
                createjs.Touch.reset(s.stage)
            }
        }, {
            capture: !0,
            passive: !0
        }))
    }
    ,
    o.activate = function() {
        o.isActive || (o.isActive = !0,
        o.onActivated.invoke(),
        i())
    }
    ,
    o.deactivate = function() {
        o.isActive && (o.isActive = !1,
        i(),
        o.onDeactivated.invoke())
    }
    ,
    o.reload = function() {
        (o.isWebApp ? r.ExternalInterface : document.location).reload()
    }
    ,
    o.load = function(t) {
        o.isWebApp ? r.ExternalInterface.load(t) : document.location.assign(t)
    }
    ,
    o.isFullscreen = !1,
    o.enterFullscreen = function() {
        o.isWebApp && (r.FullscreenAPI.isSupported ? r.FullscreenAPI.enter() : r.ExternalInterface.requestFullscreen())
    }
    ,
    o.didEnterFullscreen = function() {
        o.isWebApp && (o.isFullscreen = !0,
        o.onEnterFullscreen.invoke(),
        o.isClickToPlay) && o.activate()
    }
    ,
    o.exitFullscreen = function() {
        o.isWebApp && (r.FullscreenAPI.isSupported ? r.FullscreenAPI.exit() : r.ExternalInterface.requestWindowed())
    }
    ,
    o.didExitFullscreen = function() {
        o.isWebApp && (o.isFullscreen = !1,
        o.onExitFullscreen.invoke(),
        o.isClickToPlay) && o.deactivate()
    }
}(com = com || {}),
!function(t) {
    var r;
    function e(t, e) {
        void 0 === t && (t = 1600),
        void 0 === e && (e = 1200),
        this.onResize = new r.DelegateEvent,
        this.viewWidth = 1,
        this.viewHeight = 1,
        this._alignCenterCenter = !0,
        this.canvasWidth = this.appWidth = t,
        this.canvasHeight = this.appHeight = e,
        this.display = new createjs.Container
    }
    r = t.battleline || (t.battleline = {}),
    Object.defineProperty(e.prototype, "alignCenterCenter", {
        get: function() {
            return this._alignCenterCenter
        },
        set: function(t) {
            this._alignCenterCenter !== t && (this._alignCenterCenter = t,
            this.resize(this.appWidth, this.appHeight, this.canvasWidth, this.canvasHeight))
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.canvasResize = function(t, e) {
        this.canvasWidth = t,
        this.canvasHeight = e,
        this.resize(this.appWidth, this.appHeight, this.canvasWidth, this.canvasHeight)
    }
    ,
    e.prototype.resize = function(t, e, i, s) {
        var n, a;
        r.Platform.os === r.OS.iOS && r.Platform.deviceType === r.DeviceType.Tablet && (s -= 40),
        t === i && e === s ? (this.display.x = this.display.y = 0,
        this.display.scaleX = this.display.scaleY = 1,
        this.viewWidth = t,
        this.viewHeight = e) : (n = t / i,
        a = e / s,
        a = n = 1 / (a <= n ? n : a),
        t *= n,
        e *= a,
        this._alignCenterCenter ? (this.display.x = (i - t) / 2,
        this.display.y = (s - e) / 2) : (this.display.x = 0,
        this.display.y = 0),
        this.display.scaleX = n,
        this.display.scaleY = a,
        this.viewWidth = this.canvasWidth / n,
        this.viewHeight = this.canvasHeight / a),
        this.onResize.invoke()
    }
    ,
    t = e,
    r.Letterbox = t
}(com = com || {}),
!function(t) {
    var r, o;
    function s(t, e, i, s, n) {
        var a;
        void 0 === i && (i = 1600),
        void 0 === s && (s = 1200),
        void 0 === n && (n = void 0),
        this.onResize = new r.DelegateEvent,
        this.canvas = null,
        this.stage = null,
        this.letterbox = null,
        this._width = 100,
        this._height = 100,
        this.designedFrameRate = 30,
        this.step = 0,
        this.quality = 1,
        this.hd = !0,
        this.dirty = !0,
        this._resized = !1,
        this._tickProps = new o,
        this._refreshTickProps = new o,
        this.autoTick = t,
        this.autoRender = e,
        this.appWidth = i,
        this.appHeight = s,
        this._refreshTickProps.paused = !0,
        void 0 === n ? this.canvas = document.createElement("canvas") : (t = document.createElement("div"),
        t.innerHTML = "<canvas tabindex='" + n.toString() + "'></canvas>",
        this.canvas = t.firstChild,
        a = this.canvas,
        e = function(t) {
            a.focus()
        }
        ,
        a.addEventListener("touchstart", e),
        a.addEventListener("mousedown", e)),
        this.canvas.width = 100,
        this.canvas.height = 100,
        this.canvas.style.cssText = "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; outline: 0;",
        this.canvas.style.left = "0px",
        this.stage = new createjs.Stage(this.canvas),
        this.stage.tickOnUpdate = !1,
        this.letterbox = new r.Letterbox,
        this.stage.addChild(this.letterbox.display)
    }
    r = t.battleline || (t.battleline = {}),
    o = function() {
        this.type = "tick",
        this.paused = !1,
        this.delta = 0,
        this.time = 0,
        this.runTime = 0
    }
    ,
    s.prototype.refreshStage = function() {
        this._refreshTickProps.time = this._tickProps.time,
        this.stage.tick(this._refreshTickProps)
    }
    ,
    s.prototype.tick = function(t) {
        var e = 1e3 / this.designedFrameRate
          , i = (this.step += t,
        Math.floor(this.step / e));
        this.step -= i * e,
        4 < i && (i = 4);
        for (var s = 0; s < i; ++s)
            this._tickProps.delta = e,
            this._tickProps.paused = !1,
            this._tickProps.time = this._tickProps.runTime = r.Time.time,
            this.stage.tick(this._tickProps)
    }
    ,
    s.prototype.preRender = function(t, e, i) {
        this.autoRender && (this.dirty = !0),
        this.hd || (i = 1);
        t = Math.round(t * i * this.quality * s.viewportScale),
        e = Math.round(e * i * this.quality * s.viewportScale);
        t <= 0 && (t = 1),
        e <= 0 && (e = 1),
        this._width === t && this._height === e || (this._width = t,
        this._height = e,
        this._resized = !0,
        this.dirty = !0)
    }
    ,
    s.prototype.render = function() {
        this._resized && (this.canvas.width = this._width,
        this.canvas.height = this._height,
        this.letterbox.canvasResize(this._width, this._height),
        this.onResize.invoke(),
        this._resized = !1),
        this.dirty && (this.stage.update(),
        this.dirty = !1)
    }
    ,
    s.viewportScale = 1,
    t = s,
    r.View = t
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        this.onRemoved = new e.DelegateEvent,
        this._isInitialized = !1,
        this._isModal = !0,
        this._isActive = !1,
        this._isPopup = !1,
        this._isFocused = !1,
        this._isOccluded = !0,
        this._isInputAllowed = !1,
        this._isExiting = !1,
        this._isDisposed = !1,
        this._display = null,
        this._inputEnabled = !0,
        this._display = new createjs.Container,
        this._display.name = "" + this,
        this._display.visible = !1,
        this._display.mouseEnabled = this._display.mouseChildren = !1
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "isModal", {
        get: function() {
            return this._isModal
        },
        set: function(t) {
            this._isModal = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isActive", {
        get: function() {
            return this._isActive
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isPopup", {
        get: function() {
            return this._isPopup
        },
        set: function(t) {
            this._isPopup = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isFocused", {
        get: function() {
            return this._isFocused
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isOccluded", {
        get: function() {
            return this._isOccluded
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isExiting", {
        get: function() {
            return this._isExiting
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isDisposed", {
        get: function() {
            return this._isDisposed
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "display", {
        get: function() {
            return this._display
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "inputEnabled", {
        get: function() {
            return this._inputEnabled
        },
        set: function(t) {
            this._inputEnabled !== t && (this._inputEnabled = t,
            this.refreshInputState())
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.gainFocus = function() {
        i.debug && e.Logger.info("gainFocus: " + this),
        this._isFocused = !0
    }
    ,
    i.prototype.loseFocus = function() {
        i.debug && e.Logger.info("loseFocus: " + this),
        this._isFocused = !1
    }
    ,
    i.prototype.show = function() {
        i.debug && e.Logger.info("show: " + this),
        this._isOccluded = !1,
        this._display.visible = !0
    }
    ,
    i.prototype.hide = function() {
        i.debug && e.Logger.info("hide: " + this),
        this._isOccluded = !0,
        this._display.visible = !1
    }
    ,
    i.prototype.handleBackPressed = function() {}
    ,
    i.prototype.refreshInputState = function() {
        this._isInputAllowed && this._inputEnabled ? this._display.mouseEnabled = this._display.mouseChildren = !0 : this._display.mouseEnabled = this._display.mouseChildren = !1
    }
    ,
    i.prototype.initialize = function() {
        i.debug && e.Logger.info("initialize: " + this),
        this._isInitialized = !0
    }
    ,
    i.prototype.dispose = function() {
        this._isDisposed = !0,
        this._display = null
    }
    ,
    i.prototype.added = function() {
        i.debug && e.Logger.info("added: " + this)
    }
    ,
    i.prototype.removed = function() {
        i.debug && e.Logger.info("removed: " + this)
    }
    ,
    i.prototype.exit = function() {
        !this._isActive || this._isExiting || (this._isExiting = !0,
        this.screenManager.remove(this))
    }
    ,
    i.prototype.update = function(t) {}
    ,
    i.prototype.draw = function() {}
    ,
    i.prototype.refresh = function() {
        this.screenManager.view.refreshStage()
    }
    ,
    i.prototype.toString = function() {
        try {
            return "[" + this.constructor.name + "]"
        } catch (t) {
            return "[Screen]"
        }
    }
    ,
    i.debug = !1,
    t = i,
    e.Screen = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this._list = new Array,
        this._iterator = -1,
        this._reverseIterator = -1,
        this._count = 0,
        this.display = null,
        this.view = t,
        this.display = new createjs.Container,
        this.display.name = "screenManagerDisplay_mc"
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.add = function(t) {
        if (t.isActive)
            throw new Error("Screen is already added to the screen manager!");
        if (t._isDisposed)
            throw new Error("Screen is disposed!");
        t._isExiting = !1,
        t._isActive = !0,
        t._isFocused = !1,
        t._isOccluded = !0,
        t.screenManager = this,
        this._list.push(t),
        this._count++,
        this.display.addChild(t._display),
        t._isInitialized || t.initialize(),
        t.added(),
        this.updateVisualState()
    }
    ,
    i.prototype.handleBackPressed = function() {
        0 < this._list.length && this._list[this._list.length - 1].handleBackPressed()
    }
    ,
    i.prototype.remove = function(t) {
        var e = t;
        if (!t.isActive)
            throw new Error("Screen is not in the screen manager!");
        t.isFocused && e.loseFocus(),
        t.isOccluded || e.hide(),
        e.removed();
        var i = this._list.indexOf(t);
        0 <= i && (this._list.splice(i, 1),
        this._count--,
        i <= this._iterator && this._iterator--,
        i <= this._reverseIterator) && this._reverseIterator--,
        this.display.removeChild(t.display),
        e._isActive = !1,
        e.screenManager = null,
        t.onRemoved.invoke(t),
        this.updateVisualState()
    }
    ,
    i.prototype.removeAll = function() {
        for (; 0 < this._list.length; )
            this.remove(this._list[this._list.length - 1])
    }
    ,
    i.prototype.update = function(t) {
        if (-1 !== this._iterator)
            throw new Error("already iterating!");
        for (this._iterator = 0; this._iterator < this._count; ++this._iterator)
            this._list[this._iterator].update(t);
        this._iterator = -1
    }
    ,
    i.prototype.updateVisualState = function() {
        if (-1 !== this._reverseIterator)
            throw new Error("Already iterating!");
        var t = !0
          , e = !1
          , i = !0;
        for (this._reverseIterator = this._count - 1; 0 <= this._reverseIterator; this._reverseIterator--) {
            var s = this._list[this._reverseIterator];
            i ? (s._isInputAllowed || (s._isInputAllowed = !0,
            s.refreshInputState()),
            s._isModal && (i = !1)) : s._isInputAllowed && (s._isInputAllowed = !1,
            s.refreshInputState()),
            t ? (s._isFocused || s.gainFocus(),
            s._isModal && (t = !1)) : s._isFocused && s.loseFocus(),
            e ? s._isOccluded || s.hide() : (s._isOccluded && s.show(),
            s._isPopup || (e = !0))
        }
        this._reverseIterator = -1
    }
    ,
    i.prototype.draw = function() {
        if (this.updateVisualState(),
        -1 !== this._iterator)
            throw new Error("already iterating!");
        for (this._iterator = 0; this._iterator < this._count; ++this._iterator)
            this._list[this._iterator].draw();
        this._iterator = -1
    }
    ,
    i.prototype.toString = function() {
        for (var t = "ScreenManager:", e = this._list.length - 1; 0 <= e; --e)
            t += "\n    " + this._list[e];
        return t
    }
    ,
    e = i,
    t.ScreenManager = e
}(com = com || {}),
!function(t) {
    var e, i, s, n, a, r, o, h, l, c, u, d, p, m, _, f;
    function g() {
        c = !1,
        null !== u && (u.style.display = "none")
    }
    function w(t) {
        l && document.body.appendChild(u)
    }
    function v(t) {
        s++
    }
    function y() {
        n++
    }
    function b() {
        var t = Date.now();
        1e3 <= t - a && (r = Math.round(i / (t - a) * 1e3),
        o = Math.round(s / (t - a) * 1e3),
        h = Math.round(n / (t - a) * 1e3),
        i = 0,
        s = 0,
        n = 0,
        a = t,
        _ = !0,
        f = !0,
        E()),
        i++
    }
    function T() {
        e.Time.activeTicksPerSecond !== e.Time.inactiveTicksPerSecond && S()
    }
    function S() {
        r = -1,
        o = -1,
        h = -1,
        i = 0,
        s = 0,
        n = 0,
        a = Date.now(),
        _ = !0,
        f = !1,
        E()
    }
    function E() {
        var t;
        l && c && _ && (_ = !1,
        t = e.App.isActive ? e.Time.activeTicksPerSecond : e.Time.inactiveTicksPerSecond,
        f ? (d.style.color = .8 * t <= r ? "#0F0" : .5 * t <= r ? "#FF0" : "#F00",
        d.innerHTML = "TPS: " + r + " / " + t,
        e.Game.instance ? (p.style.color = .8 * t <= o ? "#0F0" : .5 * t <= o ? "#FF0" : "#F00",
        p.innerHTML = "UPS: " + o + " / " + t,
        m.style.color = .8 * t <= h ? "#0F0" : .5 * t <= h ? "#FF0" : "#F00",
        m.innerHTML = "FPS: " + h + " / " + t) : (p.style.color = "#333",
        p.innerHTML = "UPS: -- / " + t,
        m.style.color = "#333",
        m.innerHTML = "FPS: -- / " + t),
        0 === t && (d.style.color = "#333",
        p.style.color = "#333",
        m.style.color = "#333")) : (d.style.color = "#333",
        d.innerHTML = "TPS: -- / " + t,
        p.style.color = "#333",
        p.innerHTML = "UPS: -- / " + t,
        m.style.color = "#333",
        m.innerHTML = "FPS: -- / " + t))
    }
    e = t.battleline || (t.battleline = {}),
    t = e.FramerateMeter || (e.FramerateMeter = {}),
    l = !1,
    Object.defineProperty(t, "isEnabled", {
        get: function() {
            return l
        },
        set: function(t) {
            l !== t && (t ? (l = !0,
            u = document.createElement("div"),
            u.id = "com.battleline.FramerateMeter.display",
            u.style.position = "fixed",
            u.style.bottom = "0%",
            u.style.right = "0%",
            u.style.paddingLeft = "5px",
            u.style.paddingRight = "5px",
            u.style.paddingTop = "3px",
            u.style.paddingBottom = "3px",
            u.style.zIndex = "9998",
            u.style.backgroundColor = "rgba(0,0,0, 0.65)",
            u.style.display = "inline-block",
            u.style.pointerEvents = "none",
            u.style.userSelect = "none",
            u.style.webkitUserSelect = "none",
            u.style.msUserSelect = "none",
            u.style.MozUserSelect = "none",
            u.style.border = "solid 1px #333",
            u.style.borderRightWidth = "0px",
            u.style.borderBottomWidth = "0px",
            d = document.createElement("div"),
            d.style.display = "block",
            d.style.pointerEvents = "none",
            d.style.webkitUserSelect = "none",
            d.style.msUserSelect = "none",
            d.style.padding = "0px",
            d.style.margin = "0px",
            d.style.MozUserSelect = "none",
            d.style.userSelect = "none",
            d.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
            d.style.fontWeight = "bolder",
            d.style.fontSize = "6pt",
            u.appendChild(d),
            p = document.createElement("div"),
            p.style.display = "block",
            p.style.pointerEvents = "none",
            p.style.webkitUserSelect = "none",
            p.style.msUserSelect = "none",
            p.style.padding = "0px",
            p.style.margin = "0px",
            p.style.MozUserSelect = "none",
            p.style.userSelect = "none",
            p.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
            p.style.fontWeight = "bolder",
            p.style.fontSize = "6pt",
            u.appendChild(p),
            m = document.createElement("div"),
            m.style.display = "block",
            m.style.pointerEvents = "none",
            m.style.webkitUserSelect = "none",
            m.style.msUserSelect = "none",
            m.style.padding = "0px",
            m.style.margin = "0px",
            m.style.MozUserSelect = "none",
            m.style.userSelect = "none",
            m.style.fontFamily = "Consolas, 'Lucida Console', Monospace",
            m.style.fontWeight = "bolder",
            m.style.fontSize = "6pt",
            u.appendChild(m),
            f = !1,
            _ = !0,
            E(),
            c || g(),
            !document.body || "interactive" !== document.readyState && "complete" !== document.readyState || document.body.appendChild(u),
            document.addEventListener("DOMContentLoaded", w, !1),
            e.Time.onEngineTick.add(b),
            e.Game.onUpdate.add(v, null),
            e.Game.onDraw.add(y, null),
            e.App.onDeactivated.add(T, null),
            e.App.onActivated.add(T, null),
            S()) : (l = !1,
            !document.body || "interactive" !== document.readyState && "complete" !== document.readyState || document.body.removeChild(u),
            u = null,
            _ = !1,
            document.removeEventListener("DOMContentLoaded", w, !1),
            e.Time.onEngineTick.remove(b),
            e.Game.onUpdate.remove(v, null),
            e.Game.onDraw.remove(y, null),
            e.App.onDeactivated.remove(T, null),
            e.App.onActivated.remove(T, null)))
        },
        enumerable: !0
    }),
    c = !0,
    Object.defineProperty(t, "isVisible", {
        get: function() {
            return c
        },
        set: function(t) {
            c !== t && (t ? (c = !0,
            null !== u && (_ && E(),
            u.style.display = "inline")) : g())
        },
        enumerable: !0
    }),
    u = null,
    d = null,
    p = null,
    m = null,
    _ = !1,
    f = !1
}(com = com || {}),
!function(r) {
    var t, o, h, l, e;
    function i(t) {
        this.image = t,
        this.shape = new createjs.Shape
    }
    function s(t, e) {
        void 0 === e && (e = 1),
        this.cont = t,
        this.scalar = e
    }
    function n(t, e, i) {
        this.anchorX = 0,
        this.anchorY = 0,
        this.cont = t,
        this.anchorX = e,
        this.anchorY = i
    }
    function a(t, e, i, s, n, a) {
        void 0 === a && (a = 1),
        this.felt = null,
        this.grad = null,
        this.top = null,
        this.bot = null,
        this.letterbox = t,
        this.display = new createjs.Container,
        e && (this.felt = new o(e),
        this.display.addChild(this.felt.shape)),
        i && (this.grad = new h(i,a),
        this.display.addChild(this.grad.cont)),
        s && (this.top = new l(s,0,0),
        this.display.addChild(this.top.cont)),
        n && (this.bot = new l(n,0,1),
        this.display.addChild(this.bot.cont)),
        !0 === r.battleline.Config.wideLayout ? (this.felt.shape.visible = !1,
        this.grad.cont.visible = !1,
        this.top.cont.visible = !1,
        this.bot.cont.visible = !1) : !1 === r.battleline.Config.wideLayout ? console.log("WIDE LAYOUT: false, sites should all be using wide layout now!") : console.log("WIDE LAYOUT: Missing or invalid, will not use wide. This is the expected case when running games in the test page."),
        this.resize(),
        this.letterbox.onResize.add(this.resize, this)
    }
    t = r.battleline || (r.battleline = {}),
    i.prototype.render = function(t, e) {
        this.shape.graphics.clear(),
        this.shape.graphics.beginBitmapFill(this.image, "repeat"),
        this.shape.graphics.drawRect(0, 0, t, e),
        this.shape.graphics.endFill()
    }
    ,
    o = i,
    s.prototype.render = function(t, e, i) {
        this.cont.scaleX = t.display.scaleX * this.scalar,
        this.cont.scaleY = t.display.scaleY * this.scalar,
        this.cont.x = e / 2,
        this.cont.y = i / 2
    }
    ,
    h = s,
    n.prototype.render = function(t) {
        this.cont.scaleX = t.canvasWidth / 1600,
        this.cont.scaleY = this.cont.scaleX,
        this.cont.x = t.canvasWidth * this.anchorX,
        this.cont.y = t.canvasHeight * this.anchorY
    }
    ,
    l = n,
    a.prototype.resize = function() {
        this.felt && this.felt.render(this.letterbox.canvasWidth, this.letterbox.canvasHeight),
        this.grad && this.grad.render(this.letterbox, this.letterbox.canvasWidth, this.letterbox.canvasHeight),
        this.top && this.top.render(this.letterbox),
        this.bot && this.bot.render(this.letterbox)
    }
    ,
    e = a,
    t.Background = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.onClick = new e.DelegateEvent,
        this.onDown = new e.DelegateEvent,
        this.onOver = new e.DelegateEvent,
        this.onOut = new e.DelegateEvent,
        this.onEnabled = new e.DelegateEvent,
        this.onDisabled = new e.DelegateEvent,
        this._isOver = !1,
        this._isDown = !1,
        this.hasOver = !1,
        this.hasUp = !1,
        this.hasDown = !1,
        this.hasDisabled = !1,
        this._enabled = !0,
        this.overCue = null,
        this.clickCue = null,
        this.display = t,
        this.display.control = this,
        t.cursor = "pointer",
        t.mouseChildren = !1,
        this.display_rollover = this.display_rollover.bind(this),
        this.display_rollout = this.display_rollout.bind(this),
        this.display_mousedown = this.display_mousedown.bind(this),
        this.display_pressup = this.display_pressup.bind(this),
        this.display_click = this.display_click.bind(this),
        t.addEventListener("rollover", this.display_rollover),
        t.addEventListener("rollout", this.display_rollout),
        t.addEventListener("mousedown", this.display_mousedown),
        t.addEventListener("pressup", this.display_pressup),
        t.addEventListener("click", this.display_click),
        this.findLabels()
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "isDown", {
        get: function() {
            return this._isDown
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isOver", {
        get: function() {
            return this._isOver
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "_isTouch", {
        get: function() {
            return i.isTouch
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "enabled", {
        get: function() {
            return this._enabled
        },
        set: function(t) {
            this._enabled !== t && (this._enabled = t,
            (t ? (this.display.mouseEnabled = !0,
            this.updateState(),
            this.onEnabled) : (this._isOver = !1,
            this._isDown = !1,
            this.display.mouseEnabled = !1,
            this.updateState(),
            this.onDisabled)).invoke(this))
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.findLabels = function() {
        var t = this.display;
        if (t.labels)
            for (var e = 0; e < t.labels.length; ++e) {
                var i = t.labels[e].label;
                "up" === i ? this.hasUp = !0 : "down" === i ? this.hasDown = !0 : "disabled" === i ? this.hasDisabled = !0 : "over" === i && (this.hasOver = !0)
            }
    }
    ,
    i.prototype.display_rollover = function(t) {
        this._isOver = !0,
        this.overCue && this.overCue.play(),
        this.updateState(),
        this.onOver.invoke(this)
    }
    ,
    i.prototype.display_rollout = function(t) {
        this._isOver = !1,
        this.updateState(),
        this.onOut.invoke(this)
    }
    ,
    i.prototype.display_mousedown = function(t) {
        this._isDown = !0,
        this.updateState(),
        this.onDown.invoke(this)
    }
    ,
    i.prototype.display_pressup = function(t) {
        this._isDown = !1,
        this.updateState()
    }
    ,
    i.prototype.display_click = function(t) {
        i.isTouch && t && t.nativeEvent && "mouseup" === t.nativeEvent.type || (this.clickCue && this.clickCue.play(),
        this.onClick.invoke(this))
    }
    ,
    i.prototype.getDesiredLabel = function() {
        return this._enabled ? (this._isOver || this._isTouch) && this._isDown ? this.hasDown ? "down" : this.hasOver ? "over" : this.hasUp ? "up" : null : this._isOver && this.hasOver ? "over" : this.hasUp ? "up" : null : this.hasDisabled ? "disabled" : this.hasUp ? "up" : null
    }
    ,
    i.prototype.updateState = function() {
        var t, e = this.getDesiredLabel();
        e && (t = this.display,
        t.currentLabel !== e) && t.gotoAndPlay(e)
    }
    ,
    i.isTouch = !1,
    t = i,
    e.Button = t
}(com = com || {}),
!function(t) {
    var i;
    function e(t) {
        this.onMouseDown = new i.DelegateEvent,
        this.onClick = new i.DelegateEvent,
        this.letterbox = null,
        this.useNewResponsiveScaling = !1,
        this.display = t,
        this.display.control = this,
        this.display.hitRect = new createjs.Rectangle(-1e5,-1e5,2e5,2e5),
        this.display_mouseDown = this.display_mouseDown.bind(this),
        this.display_click = this.display_click.bind(this),
        this.display.addEventListener("mousedown", this.display_mouseDown),
        this.display.addEventListener("click", this.display_click)
    }
    i = t.battleline || (t.battleline = {}),
    e.prototype.added = function(t) {
        this.view = t,
        this.letterbox = t.letterbox,
        this.letterbox && (this.letterbox.onResize.add(this.letterbox_onResize, this),
        this.resize())
    }
    ,
    e.prototype.removed = function() {
        this.letterbox && (this.letterbox.onResize.remove(this.letterbox_onResize, this),
        this.letterbox = null),
        this.view = null
    }
    ,
    e.prototype.resize = function() {
        var t, e;
        this.letterbox && (this.useNewResponsiveScaling ? (e = i.Game.instance.gameView.letterbox.viewWidth,
        t = i.Game.instance.gameView.letterbox.viewHeight,
        this.display.scaleX = e / 1590,
        this.display.scaleY = t / 1190) : (e = this.letterbox.display.scaleX,
        t = 1 / e * (this.view.canvas.width / +this.view.appWidth),
        e = 1 / e * (this.view.canvas.height / +this.view.appHeight),
        this.display.scaleX = t,
        this.display.scaleY = e,
        this.display.x = this.letterbox.appWidth / 2,
        this.display.y = this.letterbox.appHeight / 2,
        this.display.scaleX *= this.letterbox.appWidth / 1600,
        this.display.scaleY *= this.letterbox.appHeight / 1200))
    }
    ,
    e.prototype.letterbox_onResize = function() {
        this.resize()
    }
    ,
    e.prototype.show = function(t, e) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !1),
        this.showHideAnim(this.display, "n", "toOn", "on", t, e)
    }
    ,
    e.prototype.hide = function(t, e) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !1),
        this.showHideAnim(this.display, "f", "toOff", "off", t, e)
    }
    ,
    e.prototype.showHideAnim = function(t, e, i, s, n, a) {
        a ? n ? t.currentLabel !== i && t.gotoAndPlay(i) : t.currentLabel !== s && t.gotoAndPlay(s) : n ? t.currentLabel.indexOf(e) < 0 && t.gotoAndPlay(i) : t.currentLabel !== s && t.gotoAndPlay(s)
    }
    ,
    e.prototype.display_mouseDown = function(t) {
        this.onMouseDown.invoke(this)
    }
    ,
    e.prototype.display_click = function(t) {
        this.onClick.invoke(this)
    }
    ,
    t = e,
    i.Dimmer = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s(t) {
        t = i.call(this, t) || this;
        return t.onClick = new e.DelegateEvent,
        t._isOn = !1,
        t.hasUpOn = !1,
        t.hasOverOn = !1,
        t.hasDownOn = !1,
        t.hasDisabledOn = !1,
        t.updateState(),
        t
    }
    e = t.battleline || (t.battleline = {}),
    i = e.Button,
    __extends(s, i),
    Object.defineProperty(s.prototype, "isOn", {
        get: function() {
            return this._isOn
        },
        set: function(t) {
            this._isOn !== t && (this._isOn = t,
            i.prototype.updateState.call(this))
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.findLabels = function() {
        var t = this.display;
        if (t.labels)
            for (var e = 0; e < t.labels.length; ++e) {
                var i = t.labels[e].label;
                "up#0" === i ? this.hasUp = !0 : "down#0" === i ? this.hasDown = !0 : "disabled#0" === i ? this.hasDisabled = !0 : "over#0" === i ? this.hasOver = !0 : "up#1" === i ? this.hasUpOn = !0 : "down#1" === i ? this.hasDownOn = !0 : "disabled#1" === i ? this.hasDisabledOn = !0 : "over#1" === i && (this.hasOverOn = !0)
            }
    }
    ,
    s.prototype.getDesiredLabel = function() {
        var t = this._isOn ? "#1" : "#0"
          , e = i.prototype.getDesiredLabel.call(this);
        return e && (e += t),
        e
    }
    ,
    t = s,
    e.ToggleButton = t
}(com = com || {}),
!function(t) {
    var r;
    t = t.battleline || (t.battleline = {}),
    t = t.UID || (t.UID = {}),
    r = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70],
    t.createUID = function() {
        for (var t = new Array(36), e = 0, i = 0; i < 8; i++)
            t[e++] = r[Math.floor(16 * Math.random())];
        t[e++] = 45;
        for (var s = 0; s < 4; s++)
            t[e++] = r[Math.floor(16 * Math.random())];
        for (t[e++] = 45,
        s = 0; s < 4; s++)
            t[e++] = r[Math.floor(16 * Math.random())];
        for (t[e++] = 45,
        s = 0; s < 4; s++)
            t[e++] = r[Math.floor(16 * Math.random())];
        t[e++] = 45;
        for (var n = (new Date).getTime(), a = ("0000000" + n.toString(16).toUpperCase()).substr(-8), i = 0; i < 8; i++)
            t[e++] = a.charCodeAt(i);
        for (i = 0; i < 4; i++)
            t[e++] = r[Math.floor(16 * Math.random())];
        return String.fromCharCode.apply(null, t)
    }
    ,
    t.isUID = function(t) {
        if (null === t || 36 !== t.length)
            return !1;
        for (var e = 0; e < 36; e++) {
            var i = t.charCodeAt(e);
            if (8 === e || 13 === e || 18 === e || 23 === e) {
                if (45 !== i)
                    return !1
            } else if (i < 48 || 70 < i || 57 < i && i < 65)
                return !1
        }
        return !0
    }
}(com = com || {}),
!function(t) {
    var o;
    function e(t) {
        this.enabled = !0,
        this.debug = !1;
        var e = location.href;
        0 <= e.indexOf("file://") && (!window.games247 || !window.games247.nativeAppType) || 0 <= e.indexOf("127.0.0.1") || 0 <= e.indexOf("192.168.1.") || 0 <= e.indexOf("localhost") || location.host.includes(".local") || 0 <= e.indexOf("247gamesdev.com") || 0 <= e.indexOf("nautgames.com") || 0 <= e.indexOf("spencer-evans.com") ? (this.enabled = !1,
        console.info("GoogleAnalytics are disabled because the game is running on a test server.")) : window.parent && window.parent.gtag || (this.enabled = !1,
        console.info("GoogleAnalytics are disabled because the game could not find the gtag function."))
    }
    o = t.battleline || (t.battleline = {}),
    e.prototype.track = function(t, e, i, s) {
        var n = !this.enabled || o.Analytics.ignore
          , a = void 0 !== s ? t + " --\x3e " + e + (i ? " :: " + i + " = " + s : "") : t + " --\x3e " + e + (i ? " :: " + i : "");
        if (this.debug && (n ? console.info("GA Ignore Event: " + a) : console.info("GA Send Event: " + a)),
        !n)
            try {
                var r = {};
                r.event_category = t,
                void 0 !== i && (r.event_label = i),
                void 0 !== s && (r.value = s),
                window.parent.gtag("event", e, r)
            } catch (t) {
                this.debug && console.info("GA Failed Event: " + a)
            }
    }
    ,
    t = e,
    o.GoogleAnalytics = t
}(com = com || {}),
!function(t) {
    var l;
    function e(t) {
        if (this.debug = !1,
        this._analyticsWebInterface = null,
        l.App.isWebApp)
            this._enabled = !1;
        else {
            try {
                this._analyticsWebInterface = window.AnalyticsWebInterface
            } catch (t) {
                this._analyticsWebInterface = null,
                l.Logger.warn("WARNING: Error accessing AnalyticsWebInterface bridge."),
                l.Logger.warn(t)
            }
            var e;
            this._analyticsWebInterface ? (l.Logger.info("using android firebase"),
            this._enabled = !0) : (e = window,
            e && e.webkit && e.webkit.messageHandlers && e.webkit.messageHandlers.app ? (this._enabled = !0,
            l.Logger.info("using ios analytics")) : (this._analyticsWebInterface = null,
            this._enabled = !1,
            l.Logger.info("NOTE: Firebase Analytics are disabled because the AnalyticsWebInterface bridge (android) and app callack bridge (ios) could not be found.")))
        }
    }
    l = t.battleline || (t.battleline = {}),
    e.prototype.track = function(t, e, i, s) {
        void 0 === i && (i = void 0),
        void 0 === s && (s = void 0);
        for (var n = t + ""; 0 <= n.indexOf(" "); )
            n = n.replace(" ", "");
        var a, r, o = n, h = (40 < o.length && (o = o.substr(0, 40)),
        {});
        if (h.category = t,
        h.action = e,
        void 0 !== i && (h.label = i),
        void 0 !== s && (h.value = s),
        this.debug && (a = void 0 !== s ? t + " --\x3e " + e + (i ? " :: " + i + " = " + s : "") : t + " --\x3e " + e + (i ? " :: " + i : "")),
        l.Analytics.ignore)
            this.debug && l.Logger.info("FA Ignore Event: " + a);
        else
            try {
                this.debug && (this._enabled ? l.Logger.info("FA Send Event: " + a) : l.Logger.info("FA Ignore Event: " + a)),
                this._enabled && (this._analyticsWebInterface ? this._analyticsWebInterface.logEvent(o, JSON.stringify(h)) : (r = window,
                r.webkit.messageHandlers.app.postMessage({
                    cmd: "Analytics.logEvent",
                    name: o,
                    parameters: h
                })))
            } catch (t) {
                this.debug && l.Logger.info("FA Failed Event: " + a)
            }
    }
    ,
    t = e,
    l.FirebaseAnalytics = t
}(com = com || {}),
!function(t) {
    var a, r;
    a = t.battleline || (t.battleline = {}),
    r = a.Analytics || (a.Analytics = {}),
    r.google = null,
    r.firebase = null,
    r.ignore = !1,
    r.initialize = function(t, e, i, s, n) {
        void 0 === i && (i = "No Session ID Assigned"),
        void 0 === s && (s = 0),
        void 0 === n && (n = 0),
        r.appVersion = t,
        r.targetMarket = e,
        r.sessionID = i || a.UID.createUID(),
        r.sessionStartTime = s || Date.now(),
        r.totalSessions = n || 1,
        r.pixelAspectRatio = window.devicePixelRatio || (a.Screen.deviceXDPI && a.Screen.logicalXDPI ? a.Screen.deviceXDPI / a.Screen.logicalXDPI : "unknown")
    }
}(com = com || {}),
!function(t) {
    var n, i;
    function e() {}
    n = t.battleline || (t.battleline = {}),
    i = n.Util || (n.Util = {}),
    i.validateBoolean = function(t, e) {
        return null == t || !0 !== t && !1 !== t ? e : t
    }
    ,
    i.validateString = function(t, e) {
        return null == t || "string" != typeof t ? e : t
    }
    ,
    i.validateNumberMinInclusive = function(t, e, i) {
        return null == t || "number" != typeof t || t < e ? i : t
    }
    ,
    i.validateNumberMinMaxInclusive = function(t, e, i, s) {
        return null == t || "number" != typeof t || t < e || i < t ? s : t
    }
    ,
    i.validateOneOf = function(t, e, i) {
        return e.indexOf(t) < 0 ? i : t
    }
    ,
    i.validateArray = function(t, e) {
        return null != t && Array.isArray(t) ? t : e
    }
    ,
    i.toTimerString = function(t) {
        var t = Math.floor(t / 1e3)
          , e = Math.floor(t / 60 / 60)
          , i = Math.floor((t - 60 * e * 60) / 60)
          , t = Math.floor(t - (60 * e * 60 + 60 * i))
          , s = ""
          , e = (0 < e && (s = e.toString() + ":"),
        i.toString())
          , i = (1 === e.length && (e = "0" + e),
        t.toString())
          , t = (1 === i.length && (i = "0" + i),
        s + e + ":" + i);
        return t
    }
    ,
    i.mouseOpaque = function(t) {
        t.addEventListener("click", e),
        t.addEventListener("dblclick", e),
        t.addEventListener("mousedown", e),
        t.addEventListener("mouseout", e),
        t.addEventListener("mouseover", e),
        t.addEventListener("pressmove", e),
        t.addEventListener("pressup", e),
        t.addEventListener("rollout", e),
        t.addEventListener("rollover", e),
        t.control = e
    }
    ,
    i.openLink = function(e, t, i) {
        if (void 0 === i && (i = null),
        i = i || "_blank",
        e)
            n.Logger.info("opening as native app link"),
            window.open(t, "_system");
        else {
            e = window.open(t, "_blank");
            if (void 0 === e) {
                n.Logger.info("popup blocker got link, opening via hidden link (" + i + "): " + t);
                e = null;
                try {
                    e = document.getElementById("com.battleline.util.hiddenLink")
                } catch (t) {
                    e = null
                }
                e || (e = document.createElement("a"),
                e.id = "com.battleline.util.hiddenLink",
                e.style.display = "none",
                e.href = "",
                e.target = "_blank",
                document.body.insertBefore(e, document.body.firstChild));
                var s = document.createEvent("Event");
                e.href = t,
                e.target = i,
                s.initEvent("click", !0, !1),
                e.dispatchEvent(s)
            }
        }
    }
    ,
    i.suppressEvent = function(t) {
        return t && (t.preventDefault(),
        t.stopImmediatePropagation(),
        t.stopPropagation()),
        !0
    }
    ,
    i.toNumericString = function(t, e) {
        void 0 === e && (e = 0);
        var i = !1
          , s = (t < 0 && (i = !0,
        t *= -1),
        t.toString())
          , n = "";
        if (0 <= s.indexOf(".") && (t = s.split("."),
        n = t[1],
        s = t[0]),
        0 === e)
            n = "";
        else if (0 < e)
            if (n.length > e)
                n = n.substring(0, e);
            else
                for (; n.length < e; )
                    n += "0";
        for (var a = 3; s.length > a; )
            s = s.substr(0, s.length - a) + "," + s.substr(s.length - a),
            a += 4;
        return t = i ? "-" : "",
        "" !== n && null != n ? t + s + "." + n : t + s
    }
    ,
    i.toPlaceString = function(t) {
        var e;
        return 4 <= t && t <= 20 ? t + "th" : (e = t % 10,
        1 == e ? t + "st" : 2 == e ? t + "nd" : 3 == e ? t + "rd" : t + "th")
    }
    ,
    i.setAnimState = function(t, e, i, s, n) {
        var a = t.currentLabel;
        s ? (n || a !== i && a !== e) && t.gotoAndPlay(e) : a !== i && t.gotoAndPlay(i)
    }
    ,
    i.forceMouseOverTest = function(t) {
        t._mouseOverTarget = void 0,
        t._testMouseOver(!0, void 0, {
            canvas: t.canvas
        })
    }
    ,
    i.trackAllEvents = function(t, e, i) {
        void 0 === i && (i = !1);
        for (var s = ["abort", "afterprint", "afterscriptexecute", "AlertActive", "AlertClose", "alerting", "animationend", "animationiteration", "animationstart", "audioprocess", "audioprocessaudioend", "audiostart", "beforeinstallprompt", "beforeprint", "beforescriptexecute", "beforeunload", "beginEvent", "blocked", "blur", "boundary", "broadcast", "busy", "cached", "callschanged", "canplay", "canplaythrough", "cardstatechange", "cfstatechange", "change", "chargingchange", "chargingtimechange", "CheckboxStateChange", "checking", "click", "close", "command", "commandupdate", "compassneedscalibration", "complete", "completecompositionend", "compositionend", "compositionstart", "compositionupdate", "connected", "connecting", "connectionInfoUpdate", "contextmenu", "copy", "CssRuleViewChanged", "CssRuleViewCSSLinkClicked", "CssRuleViewRefreshed", "cut", "datachange", "dataerror", "dblclick", "delivered", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dialing", "disabled", "dischargingtimechange", "disconnected", "disconnecting", "DOMActivate ", "DOMAttributeNameChanged", "DOMAttributeNameChanged ", "DOMAttrModified", "DOMAttrModified ", "DOMAutoComplete", "DOMCharacterDataModified", "DOMCharacterDataModified ", "DOMContentLoaded", "DOMElementNameChanged", "DOMElementNameChanged ", "DOMFocusIn", "DOMFocusIn  Unimplemented", "DOMFocusOut", "DOMFocusOut  Unimplemented", "DOMFrameContentLoaded", "DOMLinkAdded", "DOMLinkRemoved", "DOMMenuItemActive", "DOMMenuItemInactive", "DOMMetaAdded", "DOMMetaRemoved", "DOMModalDialogClosed", "DOMMouseScroll", "DOMNodeInserted", "DOMNodeInserted ", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved", "DOMNodeRemoved ", "DOMNodeRemovedFromDocument", "DOMNodeRemovedFromDocument ", "DOMPopupBlocked", "DOMSubtreeModified", "DOMSubtreeModified ", "DOMTitleChanged", "DOMWillOpenModalDialog", "DOMWindowClose", "DOMWindowCreated", "downloading", "drag", "dragdrop", "dragdrop ", "dragend", "dragenter", "dragexit", "dragexit ", "draggesture", "draggesture ", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "enabled", "end", "ended", "endEvent", "error", "focus", "focusin", "focusinUnimplemented", "focusout", "focusoutUnimplemented", "fullscreen", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "held", "holding", "icccardlockerror", "iccinfochange", "incoming", "input", "invalid", "keydown", "keypress", "keyup", "languagechangelevelchange", "levelchange", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "localized", "lostpointercapture", "mark", "message", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "mousewheel Unimplemented", "MozAfterPaint", "MozAudioAvailable", "MozBeforeResize", "MozBeforeResize ", "mozbrowseractivitydone", "mozbrowserasyncscroll", "mozbrowseraudioplaybackchange", "mozbrowsercaretstatechanged", "mozbrowserclose", "mozbrowsercontextmenu", "mozbrowserdocumentfirstpaint", "mozbrowsererror", "mozbrowserfindchange", "mozbrowserfirstpaint", "mozbrowsericonchange", "mozbrowserloadend", "mozbrowserloadstart", "mozbrowserlocationchange", "mozbrowsermanifestchange", "mozbrowsermetachange", "mozbrowseropensearch", "mozbrowseropentab", "mozbrowseropenwindow", "mozbrowserresize", "mozbrowserscroll", "mozbrowserscrollareachanged", "mozbrowserscrollviewchange", "mozbrowsersecuritychange", "mozbrowserselectionstatechanged", "mozbrowsershowmodalprompt", "mozbrowsertitlechange", "mozbrowserusernameandpasswordrequired", "mozbrowservisibilitychange", "MozEdgeUIGesture", "MozEnteredDomFullscreen", "MozGamepadButtonDown", "MozGamepadButtonUp", "MozMagnifyGesture", "MozMagnifyGestureStart", "MozMagnifyGestureUpdate", "MozMousePixelScroll", "MozMousePixelScroll ", "MozOrientation", "MozOrientation ", "MozPressTapGesture", "MozRotateGesture", "MozRotateGestureStart", "MozRotateGestureUpdate", "MozScrolledAreaChanged", "MozSwipeGesture", "MozTapGesture", "moztimechange", "MozTouchDown", "MozTouchDown ", "MozTouchMove", "MozTouchMove ", "MozTouchUp", "MozTouchUp ", "nomatch", "notificationclicknoupdate", "noupdate", "obsolete", "offline", "onconnected connected", "online", "open", "orientationchange", "overflow", "pagehide", "pageshow", "paste", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "popstate", "popuphidden", "popuphiding", "popupshowing", "popupshown", "progress", "push", "pushsubscriptionchange", "RadioStateChange", "ratechange", "readystatechange", "received", "repeatEvent", "reset", "resize", "resourcetimingbufferfull", "result", "resume", "resuming", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "sent", "show", "sizemodechange", "smartcard-insert", "smartcard-remove", "soundend", "soundstart", "speechend", "speechstart", "SSTabClosing", "SSTabRestored", "SSTabRestoring", "SSWindowClosing", "SSWindowStateBusy", "SSWindowStateReady", "stalled", "start", "statechange", "statuschange", "stkcommand", "stksessionend", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "TabClose", "TabHide", "TabOpen", "TabPinned", "TabSelect", "TabShow", "TabUnpinned", "TabUnpinnedCssRuleViewRefreshed", "tabviewframeinitialized", "tabviewhidden", "tabviewsearchdisabled", "tabviewsearchenabled", "tabviewshown", "text", "timeout", "timeupdate", "touchcancel", "touchend", "touchenter", "touchleave", "touchmove", "touchstart", "transitionend", "underflow", "unload", "updateready", "upgradeneeded", "uploadprogress", "uploadprogress ", "userproximity", "ussdreceived", "ValueChange", "ValueChangeMozSwipeGesture", "versionchange", "visibilitychange", "voicechange", "voicechangebroadcast", "voiceschanged", "volumechange", "waiting", "wheel", "mousewheel"], n = 0; n < s.length; ++n)
            t.addEventListener(s[n], e, i)
    }
    ,
    i.dataURLToArrayBuffer = function(t) {
        var e = t.indexOf(";base64,")
          , t = t.substr(e + 8);
        return i.base64ToArrayBuffer(t)
    }
    ,
    i.base64ToArrayBuffer = function(t) {
        for (var e = window.atob(t), i = e.length, s = new Uint8Array(i), n = 0; n < i; ++n)
            s[n] = e.charCodeAt(n);
        return s.buffer
    }
}(com = com || {}),
!function(t) {
    t = t.battleline || (t.battleline = {}),
    t = t.Easing || (t.Easing = {}),
    t.none = function(t, e, i, s) {
        return i * t / s + e
    }
    ,
    t = t.Quadratic || (t.Quadratic = {}),
    t.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t + e
    }
    ,
    t.easeOut = function(t, e, i, s) {
        return -i * (t /= s) * (t - 2) + e
    }
    ,
    t.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
    }
}(com = com || {}),
!function(t) {
    var r;
    function e(t, e, i, s, n, a) {
        void 0 === s && (s = 0),
        void 0 === n && (n = null),
        void 0 === a && (a = null),
        this.onStarted = new r.DelegateEvent,
        this.onLooped = new r.DelegateEvent,
        this.onReverseLooped = new r.DelegateEvent,
        this.onFinished = new r.DelegateEvent,
        this._duration = 1,
        this.time = 0,
        this._isDisposed = !1,
        this.delay = s,
        this.start = t,
        this.end = e,
        this.duration = i,
        this.ease = n || r.Easing.none,
        this.looper = a
    }
    r = t.battleline || (t.battleline = {}),
    Object.defineProperty(e.prototype, "duration", {
        get: function() {
            return this._duration
        },
        set: function(t) {
            if (t <= 0)
                throw new Error("Supplied duration must be greater than 0!");
            this._duration = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "value", {
        get: function() {
            return this.time <= this.delay ? this.start : this.time - this.delay > this.duration ? this.end : this.ease(this.time - this.delay, this.start, this.end - this.start, this._duration)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isFinished", {
        get: function() {
            return this.time >= this._duration + this.delay && (!this.looper || !this.looper.hasMoreLoops)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.dispose = function() {
        this._isDisposed || (this.onStarted.clear(),
        this.onReverseLooped.clear(),
        this.onLooped.clear(),
        this.onFinished.clear(),
        this._isDisposed = !0)
    }
    ,
    e.prototype.underflow = function() {
        for (; this.time < 0; )
            this.looper ? (this.looper.loop(this, !1),
            this.onReverseLooped.isEmpty || this.onReverseLooped.invoke(this)) : this.time = 0
    }
    ,
    e.prototype.overflow = function() {
        for (; this.time > this._duration + this.delay; )
            this.looper && this.looper.hasMoreLoops ? (this.looper.loop(this, !0),
            this.onLooped.isEmpty || this.onLooped.invoke(this)) : (this.time = this._duration + this.delay,
            this.onFinished.isEmpty || this.onFinished.invoke(this))
    }
    ,
    e.prototype.reachedEnding = function() {
        this.looper && this.looper.hasMoreLoops || this.onFinished.isEmpty || this.onFinished.invoke(this)
    }
    ,
    e.prototype.advance = function(t) {
        this.time,
        this.delay,
        this.time += t
    }
    ,
    e.prototype.update = function(t) {
        return this.advance(t),
        this.time > this.delay && this.onStarted.invoke(this),
        this.time < 0 ? this.underflow() : this.time === this._duration + this.delay ? this.reachedEnding() : this.time > this._duration + this.delay && this.overflow(),
        this.value
    }
    ,
    t = e,
    r.Interpolator = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        void 0 === t && (t = -1),
        this.total = 0,
        this.count = 0,
        this.total = t
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "hasMoreLoops", {
        get: function() {
            return this.total < 0 || this.count < this.total
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.loop = function(t, e) {
        void 0 === e && (e = !0),
        e ? (this.count++,
        t.time -= t.duration) : (this.count--,
        t.time += t.duration)
    }
    ,
    e = i,
    t.Looper = e
}(com = com || {}),
!function(t) {
    var i, s, n, a, r, o, h, e, l;
    function c(t, e) {
        this.onDown = new i.DelegateEvent,
        this.onUp = new i.DelegateEvent,
        this.onPress = new i.DelegateEvent,
        this.onRepeat = new i.DelegateEvent,
        this.onCancel = new i.DelegateEvent,
        this._isDown = !1,
        this._code = t,
        this._name = e
    }
    function u(t) {
        t.hitGameArea || l && (l = !1,
        s.onLoseFocus.invoke())
    }
    function d(t) {
        t.hitGameArea = !0,
        t.nativeEvent && (t.nativeEvent.hitGameArea = !0),
        l = l || !0
    }
    function p(t) {
        var e, i;
        l && (t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation(),
        i = t.keyCode,
        e = t.key,
        " " === e && (e = "space"),
        i = n.fromCode(i),
        i = i || n.fromName(e),
        i) && (s.onDown.invoke(i.code, i.name, t.shiftKey),
        (i.isDown ? i.onRepeat : (i._isDown = !0,
        i.onDown)).invoke(i))
    }
    function m(t) {
        var e;
        l && (t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation(),
        e = t.keyCode,
        t = t.key,
        " " === t && (t = "space"),
        e = n.fromCode(e),
        e = e || n.fromName(t),
        e) && e.isDown && (e._isDown = !1,
        e.onUp.invoke(e),
        e.onPress.invoke(e))
    }
    i = t.battleline || (t.battleline = {}),
    s = i.Keyboard || (i.Keyboard = {}),
    Object.defineProperty(c.prototype, "code", {
        get: function() {
            return this._code
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "name", {
        get: function() {
            return this._name
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(c.prototype, "isDown", {
        get: function() {
            return this._isDown
        },
        enumerable: !1,
        configurable: !0
    }),
    c.prototype.cancel = function() {
        this._isDown && (this._isDown = !0,
        this.onCancel.invoke(this))
    }
    ,
    t = c,
    s.Key = t,
    a = n = s.Keys || (s.Keys = {}),
    a.A = new t(65,"a"),
    a.B = new t(66,"b"),
    a.C = new t(67,"c"),
    a.D = new t(68,"d"),
    a.E = new t(69,"e"),
    a.F = new t(70,"f"),
    a.G = new t(71,"g"),
    a.H = new t(72,"h"),
    a.I = new t(73,"i"),
    a.J = new t(74,"j"),
    a.K = new t(75,"k"),
    a.L = new t(76,"l"),
    a.M = new t(77,"m"),
    a.N = new t(78,"n"),
    a.O = new t(79,"o"),
    a.P = new t(80,"p"),
    a.Q = new t(81,"q"),
    a.R = new t(82,"r"),
    a.S = new t(83,"s"),
    a.T = new t(84,"t"),
    a.U = new t(85,"u"),
    a.V = new t(86,"v"),
    a.W = new t(87,"w"),
    a.X = new t(88,"x"),
    a.Y = new t(89,"y"),
    a.Z = new t(90,"z"),
    a.Num_0 = new t(48,"0"),
    a.Num_1 = new t(49,"1"),
    a.Num_2 = new t(50,"2"),
    a.Num_3 = new t(51,"3"),
    a.Num_4 = new t(52,"4"),
    a.Num_5 = new t(53,"5"),
    a.Num_6 = new t(54,"6"),
    a.Num_7 = new t(55,"7"),
    a.Num_8 = new t(56,"8"),
    a.Num_9 = new t(57,"9"),
    a.Tab = new t(9,"Tab"),
    a.Escape = new t(27,"Escape"),
    a.Backspace = new t(8,"Backspace"),
    a.Delete = new t(46,"Delete"),
    a.Space = new t(32,"Space"),
    a.Tilde = new t(192,"`"),
    a.Left = new t(37,"Left"),
    a.Up = new t(38,"Up"),
    a.Right = new t(39,"Right"),
    a.Down = new t(40,"Down"),
    a.Shift = new t(16,"Shift"),
    a.Enter = new t(13,"Enter"),
    r = null,
    o = null,
    h = null,
    a.fromCode = function(t) {
        var e = null;
        try {
            e = o[t]
        } catch (t) {
            e = null
        }
        return e = e || null,
        e
    }
    ,
    a.fromName = function(t) {
        var e = null;
        try {
            e = h[t.toLowerCase()]
        } catch (t) {
            e = null
        }
        return e = e || null,
        e
    }
    ,
    a.initialize = function() {
        if (null === r && (r = new Array,
        r.push(a.A),
        r.push(a.B),
        r.push(a.C),
        r.push(a.D),
        r.push(a.E),
        r.push(a.F),
        r.push(a.G),
        r.push(a.H),
        r.push(a.I),
        r.push(a.J),
        r.push(a.K),
        r.push(a.L),
        r.push(a.M),
        r.push(a.N),
        r.push(a.O),
        r.push(a.P),
        r.push(a.Q),
        r.push(a.R),
        r.push(a.S),
        r.push(a.T),
        r.push(a.U),
        r.push(a.V),
        r.push(a.W),
        r.push(a.X),
        r.push(a.Y),
        r.push(a.Z),
        r.push(a.Num_0),
        r.push(a.Num_1),
        r.push(a.Num_2),
        r.push(a.Num_3),
        r.push(a.Num_4),
        r.push(a.Num_5),
        r.push(a.Num_6),
        r.push(a.Num_7),
        r.push(a.Num_8),
        r.push(a.Num_9),
        r.push(a.Tab),
        r.push(a.Escape),
        r.push(a.Backspace),
        r.push(a.Delete),
        r.push(a.Space),
        r.push(a.Tilde),
        r.push(a.Left),
        r.push(a.Up),
        r.push(a.Right),
        r.push(a.Down),
        r.push(a.Shift),
        r.push(a.Enter)),
        null === o) {
            o = {};
            for (var t = 0; t < r.length; ++t) {
                var e = r[t];
                o[e.code] = e
            }
        }
        if (null === h)
            for (h = {},
            t = 0; t < r.length; ++t) {
                e = r[t];
                h[e.name.toLowerCase()] = e
            }
    }
    ,
    s.onDown = new i.DelegateEvent,
    s.onLoseFocus = new i.DelegateEvent,
    l = !1,
    s.initialize = function(t) {
        e = t,
        window.addEventListener("mousedown", u),
        window.addEventListener("MSPointerDown", u),
        window.addEventListener("pointerdown", u),
        window.addEventListener("touchstart", u),
        t.addEventListener("mousedown", d),
        t.addEventListener("MSPointerDown", d),
        t.addEventListener("pointerdown", d),
        t.addEventListener("touchstart", d),
        document.addEventListener("keydown", p),
        document.addEventListener("keyup", m),
        n.initialize()
    }
    ,
    s.dispose = function() {
        var t;
        window.removeEventListener("mousedown", u),
        window.removeEventListener("MSPointerDown", u),
        window.removeEventListener("pointerdown", u),
        window.removeEventListener("touchstart", u),
        e && (t = e,
        t.removeEventListener("mousedown", d),
        t.removeEventListener("MSPointerDown", d),
        t.removeEventListener("pointerdown", d),
        t.removeEventListener("touchstart", d)),
        document.removeEventListener("keydown", p),
        document.removeEventListener("keyup", m)
    }
}(com = com || {}),
!function(t) {
    var s;
    function e() {}
    s = t.battleline || (t.battleline = {}),
    e.prototype.read = function() {
        var e = null
          , t = this.readItem(this.containerName);
        try {
            e = JSON.parse(t)
        } catch (t) {
            s.Logger.warn("Error attempting to load " + this.containerName + ": " + t),
            e = null
        }
        return e = e || {},
        e
    }
    ,
    e.prototype.readOther = function(t) {
        var e = null
          , t = this.readItem(t);
        try {
            e = JSON.parse(t)
        } catch (t) {
            s.Logger.warn("Error attempting to load other item " + this.containerName + ": " + t),
            e = null
        }
        return e = e || {},
        e
    }
    ,
    e.prototype.readItem = function(e) {
        var i = null;
        try {
            i = localStorage.getItem(e)
        } catch (t) {
            s.Logger.warn("Error attempting to read " + e + ": " + t),
            i = null
        }
        return i
    }
    ,
    e.prototype.write = function(t) {
        try {
            localStorage.setItem(this.containerName, JSON.stringify(t))
        } catch (t) {
            s.Logger.warn("Error attempting to save " + this.containerName + ": " + t)
        }
    }
    ,
    e.prototype.exists = function() {
        return this.itemExists(this.containerName)
    }
    ,
    e.prototype.itemExists = function(e) {
        var i = !1;
        try {
            var t = localStorage.getItem(e)
              , i = null != t
        } catch (t) {
            s.Logger.warn("Error attempting to check for " + e + ": " + t),
            i = !1
        }
        return i
    }
    ,
    e.prototype.removeItem = function(e) {
        try {
            localStorage.removeItem(e)
        } catch (t) {
            s.Logger.warn("Error attempting to remove " + e + ": " + t)
        }
    }
    ,
    e.prototype.reset = function() {
        this.defaults(),
        this.save()
    }
    ,
    t = e,
    s.StorageItem = t
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        this.onTick = new e.DelegateEvent,
        this._framerate = 30,
        this.isRunning = !1,
        this._intervalID = null,
        this.interval_callback = this.interval_callback.bind(this)
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "framerate", {
        get: function() {
            return this._framerate
        },
        set: function(t) {
            this._framerate = t,
            this.isRunning && (this.stop(),
            this.start())
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.start = function() {
        this.isRunning || (this.isRunning = !0,
        this._time = Date.now(),
        this._intervalID = setInterval(this.interval_callback, 1e3 / this._framerate))
    }
    ,
    i.prototype.stop = function() {
        this.isRunning && (this.isRunning = !1,
        clearInterval(this._intervalID),
        this._intervalID = null)
    }
    ,
    i.prototype.interval_callback = function() {
        var t, e;
        null !== this._intervalID && (t = Date.now(),
        e = t - this._time,
        this._time = t,
        this.onTick.invoke(this, e))
    }
    ,
    t = i,
    e.Ticker = t
}(com = com || {}),
!function(t) {
    t = t.battleline || (t.battleline = {}),
    t = t.abstract || (t.abstract = {}),
    t.type = function(t, e, i) {
        if (i.constructor === e)
            throw new Error(t + " is an abstract class!")
    }
    ,
    t.method = function(t) {
        throw new Error(t + "() is abstract!")
    }
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.onLoaded = new e.DelegateEvent,
        e.abstract.type("Asset", i, this),
        this._type = t,
        this._state = i.State.Init
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "isLoaded", {
        get: function() {
            return this._state === i.State.Loaded
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.load = function() {
        e.abstract.method("load")
    }
    ,
    t = i,
    e.Asset = t,
    t = e.Asset || (e.Asset = {}),
    t = t.State || (t.State = {}),
    t[t.Init = 0] = "Init",
    t[t.Loading = 1] = "Loading",
    t[t.Loaded = 2] = "Loaded",
    t[t.Error = 3] = "Error"
}(com = com || {}),
!function(t) {
    var e, a;
    function r(t, e, i, s) {
        void 0 === t && (t = void 0),
        void 0 === i && (i = "normal"),
        void 0 === s && (s = "normal");
        var n = a.call(this, r.TYPE) || this;
        return n._intervalId = null,
        n._timeoutDelay = 5e3,
        n._family = e,
        n._weight = i,
        n._style = s,
        n.src = t,
        n.document_DOMContentLoaded = n.document_DOMContentLoaded.bind(n),
        n.setInterval_handler = n.setInterval_handler.bind(n),
        n
    }
    e = t.battleline || (t.battleline = {}),
    a = e.Asset,
    __extends(r, a),
    Object.defineProperty(r.prototype, "family", {
        get: function() {
            return this._family
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "weight", {
        get: function() {
            return this._weight
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "style", {
        get: function() {
            return this._style
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.load = function() {
        this._state === e.Asset.State.Loaded || "Arial" === this._family && "normal" === this._weight && "normal" === this._style ? this.complete() : this._state !== e.Asset.State.Loading && (this._state = e.Asset.State.Loading,
        this.createTestBed(),
        !document.body || "interactive" !== document.readyState && "complete" !== document.readyState ? document.addEventListener("DOMContentLoaded", this.document_DOMContentLoaded) : this.start())
    }
    ,
    r.prototype.start = function() {
        document.body.appendChild(this._div),
        this.measure(),
        this._div.style.fontFamily = this._family,
        this._div.style.fontWeight = this._weight,
        this._div.style.fontStyle = this._style,
        this.check() || this.startInterval()
    }
    ,
    r.prototype.complete = function() {
        this.stopInterval(),
        this.destroyTestBed(),
        this._state = e.Asset.State.Loaded,
        this.onLoaded.invoke(this)
    }
    ,
    r.prototype.timeout = function() {
        e.Logger.error("Font " + this._family + " (weight: " + this._weight + ", style: " + this._style + ") timed out. Marking as loaded."),
        this.complete()
    }
    ,
    r.prototype.createTestBed = function() {
        this._div = document.createElement("div"),
        this._div.style.border = "solid",
        this._div.style.display = "inline-block",
        this._div.style.clear = "both",
        this._div.style.whiteSpace = "nowrap",
        this._div.style.position = "absolute",
        this._div.style.left = "-10000px",
        this._div.style.top = "-10000px",
        this._div.style.fontFamily = "Arial",
        this._div.style.fontWeight = "normal",
        this._div.style.fontStyle = "normal",
        this._div.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcderfhijklmnopqrstuvwxyz0123456789`~!@#$%^&amp;*()_-+=|]}[{'&quot;;:/?.&gt;,&lt;"
    }
    ,
    r.prototype.destroyTestBed = function() {
        this._div && (this._div.parentElement && this._div.parentElement.removeChild(this._div),
        this._div = null)
    }
    ,
    r.prototype.measure = function() {
        var t = this._div.clientWidth
          , e = this._div.clientHeight
          , i = t !== this._lastWidth || e !== this._lastHeight;
        return this._lastWidth = t,
        this._lastHeight = e,
        i
    }
    ,
    r.prototype.check = function() {
        return !!this.measure() && (this.complete(),
        !0)
    }
    ,
    r.prototype.startInterval = function() {
        this._startTime = Date.now(),
        this._intervalId = setInterval(this.setInterval_handler, 50)
    }
    ,
    r.prototype.stopInterval = function() {
        null !== this._intervalId && clearInterval(this._intervalId),
        this._intervalId = null
    }
    ,
    r.prototype.document_DOMContentLoaded = function(t) {
        document.removeEventListener("DOMContentLoaded", this.document_DOMContentLoaded),
        this.start()
    }
    ,
    r.prototype.setInterval_handler = function() {
        null === this._intervalId || this.check() || Date.now() - this._startTime >= this._timeoutDelay && this.timeout()
    }
    ,
    r.TYPE = "Font",
    t = r,
    e.FontAsset = t
}(com = com || {}),
!function(t) {
    var e = t.battleline || (t.battleline = {})
      , i = (s.prototype.dispose = function() {
        this._ticker.stop()
    }
    ,
    s.prototype.font_onLoaded = function(t) {
        this.setProgress(this._progress)
    }
    ,
    s.prototype.setProgress = function(t) {
        this._progress = t,
        this._isError || (this._statusText.innerHTML = "LOADING... " + Math.floor(100 * t) + "%")
    }
    ,
    s.prototype.setError = function() {
        this._isError || (this._isError = !0,
        this._statusText.innerHTML = "Sorry! There was an error.<br/>Press here to try again",
        this._element.style.cursor = "pointer",
        this._element.addEventListener("click", this.element_click.bind(this)))
    }
    ,
    s.prototype.element_click = function(t) {
        e.App.reload()
    }
    ,
    s.prototype.hide = function() {
        this._hidden || (this._hidden = !0,
        this._hideTween = new e.Interpolator(0,1,600,0,e.Easing.Quadratic.easeInOut,null))
    }
    ,
    s.prototype.setTransform = function(t, e) {
        t.style.msTransform = e,
        t.style.MozTransform = e,
        t.style.WebkitTransform = e,
        t.style.transform = e
    }
    ,
    s.prototype.ticker_onTick = function(t, e) {
        var i;
        this._hideTween ? (i = Math.round(100 * this._hideTween.update(e)) / 100,
        this._element.style.transform = "translateY(" + -100 * i + "%)",
        this._hideTween.isFinished && (this._hideTween = null,
        this._element.style.display = "none",
        this.dispose())) : this.isReady || (this._displayTime += e,
        this._displayTime > c.minShowTime && (this.isReady = !0,
        c.check()))
    }
    ,
    s);
    function s() {
        this._hideTween = null,
        this._hidden = !1,
        this._progress = 0,
        this._isError = !1,
        this._displayTime = 0,
        this.isReady = !1,
        this.ticker_onTick = this.ticker_onTick.bind(this),
        this._element = document.getElementById("preloader"),
        this._element.oncontextmenu = function() {
            return !1
        }
        ,
        this._statusText = this._element.children.item(0),
        this._ticker = new e.Ticker,
        this._ticker.onTick.add(this.ticker_onTick, this),
        this._ticker.start()
    }
    e.WebSplashDisplay = i,
    a.prototype.dispose = function() {
        this._ticker.stop()
    }
    ,
    a.prototype.setProgress = function() {}
    ,
    a.prototype.setError = function() {}
    ,
    a.prototype.hide = function() {
        if (void 0 !== navigator.splashscreen)
            navigator.splashscreen.hide();
        else
            try {
                window.SplashScreenWebInterface.hide()
            } catch (t) {}
    }
    ,
    a.prototype.ticker_onTick = function(t, e) {
        this.isReady || (this._displayTime += e,
        this._displayTime > c.minShowTime && (this.isReady = !0,
        c.check()))
    }
    ;
    var n = a;
    function a() {
        this.isReady = !1,
        this._displayTime = 0,
        this._ticker = new e.Ticker,
        this._ticker.onTick.add(this.ticker_onTick, this),
        this._ticker.start()
    }
    e.AndroidSplashDisplay = n,
    o.prototype.dispose = function() {
        this._ticker.stop()
    }
    ,
    o.prototype.setProgress = function() {}
    ,
    o.prototype.setError = function() {}
    ,
    o.prototype.hide = function() {
        var t = window;
        t && t.webkit && t.webkit.messageHandlers && t.webkit.messageHandlers.app ? t.webkit.messageHandlers.app.postMessage({
            cmd: "hideSplash"
        }) : e.Logger.warn("Could not find ios callback interface")
    }
    ,
    o.prototype.ticker_onTick = function(t, e) {
        this.isReady || (this._displayTime += e,
        this._displayTime > c.minShowTime && (this.isReady = !0,
        c.check()))
    }
    ;
    var r = o;
    function o() {
        this.isReady = !1,
        this._displayTime = 0,
        this._ticker = new e.Ticker,
        this._ticker.onTick.add(this.ticker_onTick, this),
        this._ticker.start()
    }
    e.IOSSplashDisplay = r,
    l.prototype.dispose = function() {}
    ,
    l.prototype.setProgress = function() {}
    ,
    l.prototype.setError = function() {}
    ,
    l.prototype.hide = function() {}
    ;
    var h = l;
    function l() {
        this.isReady = !0
    }
    e.OtherSplashDisplay = h,
    Object.defineProperty(u, "isReady", {
        get: function() {
            return this.display && this.display.isReady
        },
        enumerable: !1,
        configurable: !0
    }),
    u.initialize = function(t) {
        void 0 === t && (t = i),
        e.App.isWebApp ? this.display = new t : e.Platform.os === e.OS.Android ? this.display = new n : e.Platform.os === e.OS.iOS ? this.display = new r : this.display = new h,
        this.check()
    }
    ,
    u.dispose = function() {
        this.display = null
    }
    ,
    u.check = function() {
        this.display.isReady && this.onReadyToClose.invoke()
    }
    ,
    u.onReadyToClose = new e.DelegateEvent,
    u.minShowTime = 500;
    var c = u;
    function u() {}
    e.Splash = c
}(com = com || {}),
!function(t) {
    var e, i;
    function s() {
        this.onLoading = new e.DelegateEvent,
        this.onProgress = new e.DelegateEvent,
        this.onRetrying = new e.DelegateEvent,
        this.onLoaded = new e.DelegateEvent,
        this.onFailed = new e.DelegateEvent,
        this.onCanceled = new e.DelegateEvent,
        this.__state = s.State.Init,
        this._progress = 0
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(s.prototype, "_state", {
        get: function() {
            return this.__state
        },
        set: function(t) {
            this.__state = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "state", {
        get: function() {
            return this._state
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isLoading", {
        get: function() {
            return this._state === s.State.Loading
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isLoaded", {
        get: function() {
            return this._state === s.State.Loaded
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isFailed", {
        get: function() {
            return this._state === s.State.Failed
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "isRetrying", {
        get: function() {
            return this._state === s.State.Retrying
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "progress", {
        get: function() {
            return this._progress
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.load = function() {
        this._state === s.State.Loaded ? this.setLoaded() : this._state !== s.State.Loading && (this.setLoading(),
        this.startLoading())
    }
    ,
    s.prototype.stop = function() {
        this.isLoading && this.stopLoading()
    }
    ,
    s.prototype.cancel = function() {
        this.stop(),
        this._state = s.State.Init,
        this.onCanceled.invoke(this)
    }
    ,
    s.prototype.setLoading = function() {
        this.setProgress(0),
        this._state = s.State.Loading,
        this.onLoading.invoke(this)
    }
    ,
    s.prototype.setProgress = function(t) {
        this._progress = t,
        this.onProgress.invoke(this)
    }
    ,
    s.prototype.setLoaded = function() {
        this.setProgress(1),
        this._state = s.State.Loaded,
        this.onLoaded.invoke(this)
    }
    ,
    s.prototype.setTimedout = function(t) {
        this._state = s.State.Failed,
        this.onFailed.invoke(this, s.Failure.Timeout, t)
    }
    ,
    s.prototype.setAbort = function(t) {
        this._state = s.State.Failed,
        this.onFailed.invoke(this, s.Failure.Abort, t)
    }
    ,
    s.prototype.setError = function(t) {
        this._state = s.State.Failed,
        this.onFailed.invoke(this, s.Failure.Error, t)
    }
    ,
    s.prototype.setFatalError = function(t) {
        this._state = s.State.Failed,
        this.onFailed.invoke(this, s.Failure.Exception, t)
    }
    ,
    t = s,
    e.Loadable = t,
    t = e.Loadable || (e.Loadable = {}),
    i = t.State || (t.State = {}),
    i[i.Init = 0] = "Init",
    i[i.Loading = 1] = "Loading",
    i[i.Loaded = 2] = "Loaded",
    i[i.Failed = 3] = "Failed",
    i[i.Retrying = 4] = "Retrying",
    i = t.Failure || (t.Failure = {}),
    i[i.Error = 0] = "Error",
    i[i.Timeout = 1] = "Timeout",
    i[i.Abort = 2] = "Abort",
    i[i.Exception = 3] = "Exception"
}(com = com || {}),
!function(t) {
    var s, n, e;
    function a(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        var s = n.call(this) || this;
        return s.caching = a.Caching.Build,
        s.retries = a.Retries.Infinite,
        s.retryDelay = 500,
        s._retyTimeoutId = null,
        s._retried = 0,
        s.basePath = null,
        s.src = t,
        s.contentId = e,
        s.assetLib = i,
        s.retry = s.retry.bind(s),
        s
    }
    s = t.battleline || (t.battleline = {}),
    n = s.Loadable,
    __extends(a, n),
    Object.defineProperty(a.prototype, "content", {
        get: function() {
            return this._content
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "retried", {
        get: function() {
            return this._retried
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(a.prototype, "targetSrc", {
        get: function() {
            var t, e, i;
            return this.src && (0 === this.src.indexOf("data:") ? this.src : (t = this.src + "",
            this.basePath && "" !== this.basePath && (e = t.indexOf("://"),
            i = t.indexOf("?"),
            e < 0 || !(i < 0 || e < i)) && (t = this.basePath + t),
            this.caching !== a.Caching.All && (t.indexOf("?") < 0 ? t += "?" : t += "&",
            this.caching === a.Caching.None ? t += "noCache=" + Date.now().toString() : t += "build=" + s.App.buildTimestamp),
            t))
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.stopLoading = function() {
        null !== this._retyTimeoutId && (clearTimeout(this._retyTimeoutId),
        this._retyTimeoutId = null)
    }
    ,
    a.prototype.setLoading = function() {
        n.prototype.setLoading.call(this)
    }
    ,
    a.prototype.setTimedout = function(t) {
        0 < this.retries ? (this.stop(),
        this.retries--,
        this._retyTimeoutId = setTimeout(this.retry, this.retryDelay)) : n.prototype.setTimedout.call(this, t)
    }
    ,
    a.prototype.setError = function(t) {
        0 < this.retries ? (this.stop(),
        this.retries--,
        this._state = a.State.Retrying,
        this._retyTimeoutId = setTimeout(this.retry, this.retryDelay)) : n.prototype.setError.call(this, t)
    }
    ,
    a.prototype.retry = function() {
        null !== this._retyTimeoutId && (this._retyTimeoutId = null,
        this.isRetrying) && (this._state = a.State.Init,
        this.retries--,
        this._retried++,
        this.onRetrying.invoke(this),
        this.startLoading())
    }
    ,
    a.prototype.setLoaded = function(t) {
        void 0 === t && (t = !0),
        t && this.contentId && s.ContentManager.addData(this.contentId, this._content),
        n.prototype.setLoaded.call(this)
    }
    ,
    t = a,
    s.Loader = t,
    t = s.Loader || (s.Loader = {}),
    e = t.Caching || (t.Caching = {}),
    e[e.All = 0] = "All",
    e[e.Build = 1] = "Build",
    e[e.None = 2] = "None",
    e = t.Retries || (t.Retries = {}),
    e.Infinite = Number.POSITIVE_INFINITY,
    e.None = 0
}(com = com || {}),
!function(t) {
    var a, i, r, e;
    function s() {
        this._canvas = null
    }
    function n(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        var s = this
          , n = "";
        return t.lastIndexOf(".png") === t.length - 4 && (n = t,
        t = t.substring(0, t.lastIndexOf(".png")) + ".webp"),
        s = r.call(this, t, e, i) || this,
        s._tag = null,
        s._pngSrc = "",
        s._pngSrc = n,
        s.tag_load = s.tag_load.bind(s),
        s.tag_progress = s.tag_progress.bind(s),
        s.tag_error = s.tag_error.bind(s),
        s.tag_abort = s.tag_abort.bind(s),
        s.tag_timeout = s.tag_timeout.bind(s),
        s._tag = document.createElement("img"),
        s
    }
    a = t.battleline || (t.battleline = {}),
    Object.defineProperty(s.prototype, "canvas", {
        get: function() {
            return this._canvas
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.fromImage = function(t) {
        this._canvas || (this._canvas = document.createElement("canvas"));
        var e = !0
          , i = !1
          , s = 100
          , n = (0 < t.naturalWidth ? s = t.naturalWidth : e = !1,
        t.hasAttribute("width") && void 0 !== t.width && null !== t.width && (0 < t.width ? s = t.width : (e = !1,
        i = !0)),
        100)
          , i = (0 < t.naturalHeight ? n = t.naturalHeight : e = !1,
        t.hasAttribute("height") && void 0 !== t.height && null !== t.height && (0 < t.height ? n = t.height : (e = !1,
        i = !0)),
        e || ((t.naturalWidth <= 0 || t.naturalHeight <= 0) && a.Logger.warn("Image had invalid natural dimensions, is it loaded? (naturalWidth=" + t.naturalWidth + " naturalHeight=" + t.naturalHeight + ")"),
        i && a.Logger.warn("Image had invalid dimensions. (width=" + t.width + " height=" + t.height + ")")),
        this._canvas.getContext("2d"));
        return this.resetCanvas(s, n, i),
        e ? i.drawImage(t, 0, 0) : this.drawInvalid(i),
        this
    }
    ,
    s.prototype.fromCanvas = function(t) {
        this._canvas || (this._canvas = document.createElement("canvas"));
        var e = !0
          , i = 100
          , s = (0 < t.width ? i = t.width : e = !1,
        0 < t.height ? i = t.height : e = !1,
        e || a.Logger.warn("Canvas had invalid dimensions (width=" + t.width + " height=" + t.height + ")"),
        this._canvas.getContext("2d"));
        return this.resetCanvas(i, 100, s),
        e ? s.drawImage(t, 0, 0) : this.drawInvalid(s),
        this
    }
    ,
    s.prototype.fromImageData = function(t) {
        this._canvas || (this._canvas = document.createElement("canvas"));
        var e = !0
          , i = 100
          , s = (0 < t.width ? i = t.width : e = !1,
        0 < t.height ? i = t.height : e = !1,
        e || a.Logger.warn("ImageData had invalid dimensions (width=" + t.width + " height=" + t.height + ")"),
        this._canvas.getContext("2d"));
        return this.resetCanvas(i, 100, s),
        e ? s.putImageData(t, 0, 0) : this.drawInvalid(s),
        this
    }
    ,
    s.prototype.fromDimensions = function(t, e) {
        this._canvas || (this._canvas = document.createElement("canvas"));
        var i = !0
          , s = 100
          , i = (0 < t ? s = t : i = !1,
        0 < e ? s = e : i = !1,
        i || a.Logger.warn("Invalid dimensions (width=" + t + " height=" + e + ")"),
        this._canvas.getContext("2d"));
        return this.resetCanvas(s, 100, i),
        this
    }
    ,
    s.prototype.resetCanvas = function(t, e, i) {
        var s = !1;
        this._canvas.width !== t && (this._canvas.width = t,
        s = !0),
        this._canvas.height !== e && (this._canvas.height = e,
        s = !0),
        i.setTransform(1, 0, 0, 1, 0, 0),
        s || i.clearRect(0, 0, t, e)
    }
    ,
    s.prototype.drawInvalid = function(t) {
        var e = this._canvas.width
          , i = this._canvas.height;
        t.strokeStyle = "#F00",
        t.lineWidth = 10,
        t.strokeRect(0, 0, e, i),
        t.lineWidth = 5,
        t.setLineDash([10, 10]),
        t.moveTo(0, i),
        t.lineTo(e, 0),
        t.moveTo(e, i),
        t.lineTo(0, 0),
        t.stroke(),
        t.strokeStyle = "#000",
        t.lineWidth = 1,
        t.setLineDash([])
    }
    ,
    e = s,
    a.TextureData = e,
    i = a.TextureData || (a.TextureData = {}),
    r = t.battleline.Loader,
    __extends(n, r),
    n.prototype.startLoading = function() {
        this.loadURL()
    }
    ,
    n.prototype.stopLoading = function() {
        this.unwatchTag(),
        this._tag.src = null,
        this._tag.removeAttribute("src"),
        r.prototype.stopLoading.call(this)
    }
    ,
    n.prototype.loadURL = function() {
        this.watchTag(),
        this._tag.src = this.targetSrc
    }
    ,
    n.prototype.watchTag = function() {
        this._tag.addEventListener("load", this.tag_load),
        this._tag.addEventListener("progress", this.tag_progress),
        this._tag.addEventListener("error", this.tag_error),
        this._tag.addEventListener("abort", this.tag_abort),
        this._tag.addEventListener("timeout", this.tag_timeout)
    }
    ,
    n.prototype.unwatchTag = function() {
        this._tag.removeEventListener("load", this.tag_load),
        this._tag.removeEventListener("progress", this.tag_progress),
        this._tag.removeEventListener("error", this.tag_error),
        this._tag.removeEventListener("abort", this.tag_abort),
        this._tag.removeEventListener("timeout", this.tag_timeout)
    }
    ,
    n.prototype.tag_progress = function(t) {
        try {
            t.lengthComputable && this.setProgress(t.loaded / t.total)
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.tag_load = function(t) {
        try {
            this.unwatchTag();
            var e = (new i).fromImage(this._tag);
            this._content = e,
            this.contentId && (this.assetLib && (this.assetLib.img[this.contentId] = this._content.canvas),
            images[this.contentId] ? a.Logger.warn("There is already an image with id: " + this.contentId + "  Cannot add new image from " + this.src) : images[this.contentId] = this._content.canvas),
            this.setLoaded()
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.tag_abort = function(t) {
        try {
            this.unwatchTag(),
            this._tag.src = null,
            this._tag.removeAttribute("src"),
            this.setAbort(new Error("Load request was aborted for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.tag_error = function(t) {
        if ("" !== this._pngSrc) {
            var e = this._pngSrc;
            this._pngSrc = "",
            this.src = e,
            this._tag.src = this.targetSrc
        } else
            try {
                this.unwatchTag(),
                this._tag.src = null,
                this._tag.removeAttribute("src"),
                this.setError(new Error("Error loading tag request for " + this.src))
            } catch (t) {
                this.setFatalError(t)
            }
    }
    ,
    n.prototype.tag_timeout = function(t) {
        try {
            this.unwatchTag(),
            this._tag.src = null,
            this._tag.removeAttribute("src"),
            this.setTimedout(new Error("Load request was timed out for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    e = n,
    i.Loader = e
}(com = com || {}),
!function(t) {
    function e(t) {
        this.data = null,
        this.data = t
    }
    t = t.battleline || (t.battleline = {}),
    t.Texture = e
}(com = com || {}),
!function(t) {
    var i;
    function e(t, e) {
        this.onComplete = new i.DelegateEvent,
        this._state = i.Sound.State.Stopped,
        this.sound = t,
        this.data = e
    }
    i = t.battleline || (t.battleline = {}),
    Object.defineProperty(e.prototype, "isPlaying", {
        get: function() {
            return this._state === i.Sound.State.Playing
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isStopped", {
        get: function() {
            return this._state === i.Sound.State.Stopped
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isPaused", {
        get: function() {
            return this._state === i.Sound.State.Paused
        },
        enumerable: !1,
        configurable: !0
    }),
    t = e,
    i.SoundRenderer = t
}(com = com || {}),
!function(t) {
    function e() {}
    t = t.battleline || (t.battleline = {}),
    t.SoundData = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.onComplete = new e.DelegateEvent,
        this.renderer = new t.Renderer(this,t),
        this.renderer.onComplete.add(this.renderer_onComplete, this)
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "data", {
        get: function() {
            return this.renderer.data
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "position", {
        get: function() {
            return this.renderer.position
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "duration", {
        get: function() {
            return this.renderer.duration
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "volume", {
        get: function() {
            return this.renderer.volume
        },
        set: function(t) {
            this.renderer.volume = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "pan", {
        get: function() {
            return this.renderer.pan
        },
        set: function(t) {
            this.renderer.pan = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isMuted", {
        get: function() {
            return this.renderer.isMuted
        },
        set: function(t) {
            this.renderer.isMuted = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isLooped", {
        get: function() {
            return this.renderer.isLooped
        },
        set: function(t) {
            this.renderer.isLooped = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isPlaying", {
        get: function() {
            return this.renderer.isPlaying
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isStopped", {
        get: function() {
            return this.renderer.isStopped
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isPaused", {
        get: function() {
            return this.renderer.isPaused
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.renderer_onComplete = function(t) {
        this.onComplete.invoke(this)
    }
    ,
    i.prototype.play = function() {
        this.renderer.play()
    }
    ,
    i.prototype.pause = function() {
        this.renderer.pause()
    }
    ,
    i.prototype.resume = function() {
        this.renderer.resume()
    }
    ,
    i.prototype.stop = function() {
        this.renderer.stop()
    }
    ,
    t = i,
    e.Sound = t,
    t = e.Sound || (e.Sound = {}),
    t = t.State || (t.State = {}),
    t[t.Stopped = 0] = "Stopped",
    t[t.Playing = 1] = "Playing",
    t[t.Paused = 2] = "Paused"
}(com = com || {}),
!function(t) {
    function e(t) {
        this.url = t
    }
    t = t.battleline || (t.battleline = {}),
    t.ContentSource = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        void 0 === t && (t = new Array),
        this.sources = t
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.getSource = function() {
        for (var t = 0; t < this.sources.length; ++t)
            if (0 === this.sources[t].url.indexOf("data:"))
                return this.sources[t];
        return this.sources[0]
    }
    ,
    e = i,
    t.ContentItem = e
}(com = com || {}),
!function(t) {
    function e() {
        this.items = new Array
    }
    t = t.battleline || (t.battleline = {}),
    t.ContentManifest = e
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        throw new Error("Static class")
    }
    e = t.battleline || (t.battleline = {}),
    i.addData = function(t, e) {
        this._all.add(t, e, !1)
    }
    ,
    i.getData = function(t) {
        return this._all.getValue(t)
    }
    ,
    i.getSound = function(t) {
        return new e.Sound(this.getData(t))
    }
    ,
    i.getTexture = function(t) {
        return new e.Texture(this.getData(t))
    }
    ,
    i.manifest = new e.ContentManifest,
    i._all = new e.Dictionary,
    t = i,
    e.ContentManager = t
}(com = com || {}),
!function(t) {
    function e(t) {
        this.loader = null,
        this.loader = t
    }
    t = t.battleline || (t.battleline = {}),
    t.LoadItem = e
}(com = com || {}),
!function(t) {
    var e, i;
    function s() {
        var t = e.call(this) || this;
        return t.items = new Array,
        t._watchingItems = new Array,
        t._stopping = !1,
        t.maxStreams = 16,
        t._progressDirty = !1,
        t
    }
    t = t.battleline || (t.battleline = {}),
    e = t.Loadable,
    __extends(s, e),
    Object.defineProperty(s.prototype, "progress", {
        get: function() {
            return this._progressDirty && this.updateProgress(),
            this._progress
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "retried", {
        get: function() {
            for (var t = 0, e = 0; e < this.items.length; ++e) {
                var i = this.items[e];
                t += i.loader.retried
            }
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.startLoading = function() {
        0 === this.items.length && 0 === this._watchingItems.length ? this.setLoaded() : this.dequeue()
    }
    ,
    s.prototype.stopLoading = function() {
        this._stopping = !0;
        for (var t = 0; t < this._watchingItems.length; ++t) {
            var e = this._watchingItems[t];
            e.cancel()
        }
        this._stopping = !1
    }
    ,
    s.prototype.dequeue = function() {
        var t = this.next();
        if (t)
            for (; this._watchingItems.length < this.maxStreams && null !== t; )
                this.start(t),
                t = this.next();
        else
            0 === this._watchingItems.length && null === t && this.done()
    }
    ,
    s.prototype.start = function(t) {
        this.watch(t.loader),
        t.loader.load()
    }
    ,
    s.prototype.watch = function(t) {
        t.onProgress.add(this.loader_onProgress, this),
        t.onLoaded.add(this.loader_onLoaded, this),
        t.onFailed.add(this.loader_onFailed, this),
        t.onCanceled.add(this.loader_onCanceled, this),
        t.onRetrying.add(this.loader_onRetrying, this),
        this._watchingItems.push(t)
    }
    ,
    s.prototype.unwatch = function(t) {
        t.onProgress.remove(this.loader_onProgress, this),
        t.onLoaded.remove(this.loader_onLoaded, this),
        t.onFailed.remove(this.loader_onFailed, this),
        t.onCanceled.remove(this.loader_onCanceled, this),
        t.onRetrying.remove(this.loader_onRetrying, this);
        t = this._watchingItems.indexOf(t);
        0 <= t && this._watchingItems.splice(t, 1)
    }
    ,
    s.prototype.loader_onProgress = function(t) {
        this._progressDirty = !0,
        this.onProgress.invoke(this)
    }
    ,
    s.prototype.loader_onRetrying = function(t) {
        this.onRetrying.invoke(this)
    }
    ,
    s.prototype.loader_onLoaded = function(t) {
        this.unwatch(t),
        this.dequeue()
    }
    ,
    s.prototype.loader_onFailed = function(t, e, i) {
        this.stop(),
        this.onFailed.invoke(this, e, i)
    }
    ,
    s.prototype.loader_onCanceled = function(t) {
        this._stopping || (this.stop(),
        this.onCanceled.invoke(this))
    }
    ,
    s.prototype.updateProgress = function() {
        for (var t = 0, e = 0; e < this.items.length; ++e) {
            var i = this.items[e];
            t += i.loader.progress
        }
        0 === this.items.length ? t = 1 : t /= this.items.length,
        this._progress = t
    }
    ,
    s.prototype.done = function() {
        this.onLoaded.invoke(this)
    }
    ,
    s.prototype.next = function() {
        for (var t = 0; t < this.items.length; ++t) {
            var e = this.items[t];
            if (!e.loader.isLoading && !e.loader.isLoaded && !e.loader.isRetrying)
                return e
        }
        return null
    }
    ,
    i = s,
    t.LoadQueue = i
}(com = com || {}),
!function(t) {
    var e, i, s;
    function n(t) {
        var e = i.call(this, null, null, null) || this;
        return e._watching = !1,
        e._setTargetSrc = !1,
        e._fontAsset = t,
        e
    }
    e = t.battleline || (t.battleline = {}),
    s = function() {}
    ,
    e.FontData = s,
    s = e.FontData || (e.FontData = {}),
    i = t.battleline.Loader,
    __extends(n, i),
    Object.defineProperty(n.prototype, "src", {
        get: function() {
            return this._fontAsset.src
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.startLoading = function() {
        this._fontAsset.onLoaded.add(this.fontAsset_onLoaded, this),
        this._watching = !0,
        this._fontAsset.load()
    }
    ,
    n.prototype.stopLoading = function() {
        this._watching && this._fontAsset.onLoaded.remove(this.fontAsset_onLoaded, this),
        this._watching = !1,
        i.prototype.stopLoading.call(this)
    }
    ,
    n.prototype.fontAsset_onLoaded = function(t) {
        this._watching && this._fontAsset.onLoaded.remove(this.fontAsset_onLoaded, this),
        this._watching = !1,
        this.setLoaded()
    }
    ,
    e = n,
    s.Loader = e
}(com = com || {}),
!function(t) {
    var e, s, i;
    function n(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        t = s.call(this, t, e, i) || this;
        return t._request = null,
        t.request_load = t.request_load.bind(t),
        t.request_progress = t.request_progress.bind(t),
        t.request_error = t.request_error.bind(t),
        t.request_timeout = t.request_timeout.bind(t),
        t.request_abort = t.request_abort.bind(t),
        t
    }
    e = t.battleline || (t.battleline = {}),
    i = function() {}
    ,
    e.JsonData = i,
    i = e.JsonData || (e.JsonData = {}),
    s = t.battleline.Loader,
    __extends(n, s),
    n.prototype.startLoading = function() {
        this.loadXHR()
    }
    ,
    n.prototype.stopLoading = function() {
        this._request && this.disposeRequest(),
        s.prototype.stopLoading.call(this)
    }
    ,
    n.prototype.loadXHR = function() {
        this.createRequest(),
        this._request.send()
    }
    ,
    n.prototype.createRequest = function() {
        this._request = new XMLHttpRequest,
        this._request.overrideMimeType("application/json"),
        this._request.open("GET", this.targetSrc, !0),
        this._request.addEventListener("progress", this.request_progress),
        this._request.addEventListener("load", this.request_load),
        this._request.addEventListener("abort", this.request_abort),
        this._request.addEventListener("error", this.request_error),
        this._request.addEventListener("timeout", this.request_timeout)
    }
    ,
    n.prototype.disposeRequest = function() {
        this._request.removeEventListener("progress", this.request_progress),
        this._request.removeEventListener("load", this.request_load),
        this._request.removeEventListener("abort", this.request_abort),
        this._request.removeEventListener("error", this.request_error),
        this._request.removeEventListener("timeout", this.request_timeout),
        this._request = null
    }
    ,
    n.prototype.request_progress = function(t) {
        try {
            t.lengthComputable && this.setProgress(t.loaded / t.total)
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.request_load = function(t) {
        try {
            this._content = JSON.parse(this._request.responseText),
            this.disposeRequest(),
            this.setLoaded()
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.request_abort = function(t) {
        try {
            this.disposeRequest(),
            this.setAbort(new Error("Load request was aborted for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.request_timeout = function(t) {
        try {
            this.disposeRequest(),
            this.setTimedout(new Error("Load request timed out for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    n.prototype.request_error = function(t) {
        try {
            this.disposeRequest(),
            this.setError(new Error("Error loading xhr request for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    e = n,
    i.Loader = e
}(com = com || {}),
!function(t) {
    var i, s;
    function e(t, e) {
        t = s.call(this, t, e) || this;
        return t._sourceNode = null,
        t._gainNode = null,
        t._panNode = null,
        t._position = 0,
        t._startTime = 0,
        t.source_ended = t.source_ended.bind(t),
        t._gainNode = i.WebAudio.context.createGain(),
        t._panNode = i.WebAudio.context.createPanner(),
        t._panNode.panningModel = "equalpower",
        t.pan = 0,
        t.volume = 1,
        t.isMuted = !1,
        t.isLooped = !1,
        t
    }
    i = t.battleline || (t.battleline = {}),
    s = i.SoundRenderer,
    __extends(e, s),
    Object.defineProperty(e.prototype, "position", {
        get: function() {
            var t = this._position;
            return this.isPlaying && (t += i.WebAudio.sampleFunction() - this._startTime),
            t < 0 && (t = 0),
            t >= 1e3 * this.data.audioBuffer.duration && (t = 1e3 * this.data.audioBuffer.duration),
            t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "duration", {
        get: function() {
            return 1e3 * this.data.audioBuffer.duration
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "pan", {
        get: function() {
            return this._pan
        },
        set: function(t) {
            var e;
            t = t < -1 ? -1 : t,
            t = 1 < t ? 1 : t,
            this._pan !== t && (this._pan = t,
            t *= 90,
            t = t,
            e = t + 90,
            90 < e && (e = 180 - e),
            t = Math.sin(t * (Math.PI / 180)),
            e = Math.sin(e * (Math.PI / 180)),
            this._panNode.setPosition(t, 0, e))
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "volume", {
        get: function() {
            return this._volume
        },
        set: function(t) {
            t = t < 0 ? 0 : t,
            t = 1 < t ? 1 : t,
            this._volume !== t && (this._volume = t,
            this.updateVolume())
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isMuted", {
        get: function() {
            return this._isMuted
        },
        set: function(t) {
            t = !!t,
            this._isMuted !== t && (this._isMuted = t,
            this.updateVolume())
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isLooped", {
        get: function() {
            return this._isLooped
        },
        set: function(t) {
            t = !!t,
            this._isLooped !== t && (this._isLooped = t,
            this._sourceNode) && (this._sourceNode.loop = t)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.updateVolume = function() {
        this._isMuted ? this._gainNode.gain.value = 0 : this._gainNode.gain.value = this._volume
    }
    ,
    e.prototype.play = function() {
        this.isPaused ? this.resume() : this.isStopped && (this._state = i.Sound.State.Playing,
        this.createSource(),
        this._position = 0,
        this._startTime = i.WebAudio.sampleFunction(),
        this._sourceNode.start())
    }
    ,
    e.prototype.pause = function() {
        this.isPlaying && (this._position = this.position,
        this._startTime = 0,
        this.destroySource(),
        this._state = i.Sound.State.Paused)
    }
    ,
    e.prototype.resume = function() {
        this.isPaused && (this._state = i.Sound.State.Playing,
        this.createSource(),
        this._startTime = i.WebAudio.sampleFunction(),
        this._sourceNode.start(0, this._position / 1e3))
    }
    ,
    e.prototype.stop = function() {
        this.isStopped || (this.destroySource(),
        this._position = 0,
        this._startTime = 0,
        this._state = i.Sound.State.Stopped)
    }
    ,
    e.prototype.source_ended = function(t) {
        !this._sourceNode || t && t.currentTarget && t.currentTarget !== this._sourceNode || (this.destroySource(),
        this._position = 0,
        this._startTime = 0,
        this._state = i.Sound.State.Stopped,
        this.onComplete.invoke(this))
    }
    ,
    e.prototype.createSource = function() {
        this._sourceNode = i.WebAudio.context.createBufferSource(),
        this._sourceNode.buffer = this.data.audioBuffer,
        this._sourceNode.loop = this._isLooped,
        this._sourceNode.connect(this._gainNode),
        this._gainNode.connect(this._panNode),
        this._panNode.connect(i.WebAudio.context.destination),
        this._sourceNode.addEventListener("ended", this.source_ended),
        this._sourceNode.onended = this.source_ended
    }
    ,
    e.prototype.destroySource = function() {
        this._sourceNode.removeEventListener("ended", this.source_ended),
        this._sourceNode.onended = null,
        this._sourceNode.stop(),
        this._sourceNode.disconnect(),
        this._gainNode.disconnect(),
        this._panNode.disconnect(),
        this._sourceNode = null
    }
    ,
    t = e,
    i.WebAudioSoundRenderer = t
}(com = com || {}),
!function(t) {
    var a, i, r, e, s, n;
    function o(t) {
        void 0 === t && (t = null);
        var e = i.call(this) || this;
        return e.Renderer = a.WebAudioSoundRenderer,
        e.audioBuffer = t,
        e
    }
    function h(t, e) {
        this.valid = !0,
        this.success = t,
        this.failure = e,
        this.decodeAudioData_success = this.decodeAudioData_success.bind(this),
        this.decodeAudioData_error = this.decodeAudioData_error.bind(this)
    }
    function l(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        t = s.call(this, t, e, i) || this;
        return t._request = null,
        t._decodeHandler = null,
        t.request_load = t.request_load.bind(t),
        t.request_progress = t.request_progress.bind(t),
        t.request_error = t.request_error.bind(t),
        t.request_timeout = t.request_timeout.bind(t),
        t.request_abort = t.request_abort.bind(t),
        t.decodeAudioData_success = t.decodeAudioData_success.bind(t),
        t.decodeAudioData_error = t.decodeAudioData_error.bind(t),
        t
    }
    a = t.battleline || (t.battleline = {}),
    i = a.SoundData,
    __extends(o, i),
    n = o,
    a.WebAudioSoundData = n,
    r = a.WebAudioSoundData || (a.WebAudioSoundData = {}),
    h.prototype.decodeAudioData_success = function(t) {
        this.valid && this.success(t)
    }
    ,
    h.prototype.decodeAudioData_error = function(t) {
        this.valid && this.failure(t)
    }
    ,
    e = h,
    s = t.battleline.Loader,
    __extends(l, s),
    l.prototype.startLoading = function() {
        0 === this.src.indexOf("data:") ? this.loadDataURL() : this.loadXHR()
    }
    ,
    l.prototype.stopLoading = function() {
        this._request && this.disposeRequest(),
        this._decodeHandler && (this._decodeHandler.valid = !1,
        this._decodeHandler = null),
        s.prototype.stopLoading.call(this)
    }
    ,
    l.prototype.loadXHR = function() {
        this.createRequest(),
        this._request.send()
    }
    ,
    l.prototype.createRequest = function() {
        this._request = new XMLHttpRequest,
        this._request.open("GET", this.targetSrc, !0),
        this._request.responseType = "arraybuffer",
        this._request.addEventListener("progress", this.request_progress),
        this._request.addEventListener("load", this.request_load),
        this._request.addEventListener("abort", this.request_abort),
        this._request.addEventListener("error", this.request_error),
        this._request.addEventListener("timeout", this.request_timeout)
    }
    ,
    l.prototype.disposeRequest = function() {
        this._request.removeEventListener("progress", this.request_progress),
        this._request.removeEventListener("load", this.request_load),
        this._request.removeEventListener("abort", this.request_abort),
        this._request.removeEventListener("error", this.request_error),
        this._request.removeEventListener("timeout", this.request_timeout),
        this._request = null
    }
    ,
    l.prototype.request_progress = function(t) {
        try {
            t.lengthComputable && this.setProgress(t.loaded / t.total * .5)
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.request_load = function(t) {
        try {
            var e = this._request.response;
            this.disposeRequest(),
            this.decodeData(e)
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.request_abort = function(t) {
        try {
            this.disposeRequest(),
            this.setAbort(new Error("Load request was aborted for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.request_timeout = function(t) {
        try {
            this.disposeRequest(),
            this.setTimedout(new Error("Load request timed out for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.request_error = function(t) {
        try {
            this.disposeRequest(),
            this.setError(new Error("Error loading xhr request for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.loadDataURL = function() {
        this.decodeData(a.Util.dataURLToArrayBuffer(this.src))
    }
    ,
    l.prototype.decodeData = function(t) {
        this._decodeHandler = new e(this.decodeAudioData_success,this.decodeAudioData_error);
        t = a.WebAudio.context.decodeAudioData(t, this._decodeHandler.success, this._decodeHandler.failure);
        t && t.then(this._decodeHandler.success, this._decodeHandler.failure).catch(this._decodeHandler.failure)
    }
    ,
    l.prototype.decodeAudioData_success = function(t) {
        if (this._decodeHandler && this._decodeHandler.valid)
            try {
                this._decodeHandler.valid = !1,
                this._decodeHandler = null;
                var e = new r(t);
                this._content = e,
                this.contentId && a.AudioManager.addCueDefinition(this.contentId, !1, 1),
                this.setLoaded()
            } catch (t) {
                this.setFatalError(t)
            }
    }
    ,
    l.prototype.silenceFallback = function() {
        console.log("Error decoding audio data for " + this.src + " falling back to 1s silence audio.");
        try {
            for (var t = a.WebAudio.context.createBuffer(1, +a.WebAudio.context.sampleRate, a.WebAudio.context.sampleRate), e = 0; e < t.numberOfChannels; e++)
                for (var i = t.getChannelData(e), s = 0; s < t.length; ++s)
                    i[s] = 0;
            var n = new r(t);
            this._content = n,
            this.contentId && a.AudioManager.addCueDefinition(this.contentId, !1, 1),
            this.setLoaded()
        } catch (t) {
            console.log("Fatal error attempting to fallback to null audio"),
            this.setFatalError(t)
        }
    }
    ,
    l.prototype.htmlFallback = function() {
        console.log("Error decoding audio data for " + this.src + " falling back to html audio.");
        var t = this
          , e = new a.HTMLSoundData.Loader(this.src,this.contentId,this.assetLib);
        e.onCanceled.add(function() {
            t.setFatalError(new Error("html audio fallback error (canceled)"))
        }, null),
        e.onFailed.add(function() {
            t.setFatalError(new Error("html audio fallback error (failed) " + t.src))
        }, null),
        e.onLoaded.add(function() {
            t.setLoaded(!1)
        }, null),
        e.load()
    }
    ,
    l.prototype.decodeAudioData_error = function(t) {
        this._decodeHandler && this._decodeHandler.valid && (this._decodeHandler.valid = !1,
        this._decodeHandler = null,
        a.Platform.os === a.OS.iOS || a.Platform.os === a.OS.Mac && 1 < navigator.maxTouchPoints ? this.silenceFallback() : this.htmlFallback())
    }
    ,
    n = l,
    r.Loader = n
}(com = com || {}),
!function(t) {
    var i;
    function s() {
        throw new Error("Static class!")
    }
    i = t.battleline || (t.battleline = {}),
    Object.defineProperty(s, "isSupported", {
        get: function() {
            return !!window.AudioContext
        },
        enumerable: !1,
        configurable: !0
    }),
    s.initialize = function() {
        var t, e;
        this.window_userAction = this.window_userAction.bind(this),
        this.context = new AudioContext,
        window.performance && window.performance.now ? s.sampleFunction = window.performance.now.bind(window.performance) : s.sampleFunction = Date.now.bind(Date.now),
        i.App.isWebApp && (t = s.context.createBuffer(1, 2205, 22050),
        e = new i.WebAudioSoundData,
        e.audioBuffer = t,
        this._webAudioSound = new i.Sound(e),
        this.startListeningForUserAction())
    }
    ,
    s.startListeningForUserAction = function() {
        this._isListening || (this._isListening = !0,
        window.addEventListener("touchstart", this.window_userAction),
        window.addEventListener("mousedown", this.window_userAction),
        window.addEventListener("click", this.window_userAction))
    }
    ,
    s.stopListeningForUserAction = function() {
        this._isListening && (this._isListening = !1,
        window.removeEventListener("touchstart", this.window_userAction),
        window.removeEventListener("mousedown", this.window_userAction),
        window.removeEventListener("click", this.window_userAction))
    }
    ,
    s.App_onSuspended = function() {}
    ,
    s.window_userAction = function(t) {
        this.context.resume(),
        this._webAudioSound.play()
    }
    ,
    s.context = null,
    s.sampleFunction = null,
    s.enabled = !0,
    s._webAudioSound = null,
    s._isListening = !1,
    t = s,
    i.WebAudio = t
}(com = com || {}),
window.AudioContext = window.AudioContext || window.webkitAudioContext,
!function(t) {
    var e, s;
    function i(t, e) {
        var i = s.call(this, null, e) || this;
        i.tag_ended = i.tag_ended.bind(i),
        i._tag = document.createElement("audio"),
        i._tag.controls = !1,
        i._tag.crossOrigin = i.data.audioElement.crossOrigin;
        try {
            i._tag.currentTime = 0
        } catch (t) {}
        i._tag.playbackRate = i.data.audioElement.playbackRate,
        i._tag.preload = "auto",
        i._tag.addEventListener("ended", i.tag_ended),
        i.isLooped = !1,
        i.isMuted = !1,
        i.volume = 1,
        i.pan = 0;
        i._tag;
        return i._tag.src = e.audioElement.src,
        i
    }
    e = t.battleline || (t.battleline = {}),
    s = e.SoundRenderer,
    __extends(i, s),
    Object.defineProperty(i.prototype, "position", {
        get: function() {
            return 1e3 * this._tag.currentTime
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "duration", {
        get: function() {
            return 1e3 * this._tag.duration
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "pan", {
        get: function() {
            return this._pan
        },
        set: function(t) {
            this._pan = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "volume", {
        get: function() {
            return this._volume
        },
        set: function(t) {
            if (t = t < 0 ? 0 : t,
            t = 1 < t ? 1 : t,
            this._volume !== t) {
                this._volume = t;
                try {
                    this._tag.volume = t
                } catch (t) {
                    console.log("here")
                }
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isMuted", {
        get: function() {
            return this._isMuted
        },
        set: function(t) {
            t = !!t,
            this._isMuted !== t && (this._isMuted = t,
            this._tag.muted = t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isLooped", {
        get: function() {
            return this._isLooped
        },
        set: function(t) {
            t = !!t,
            this._isLooped !== t && (this._isLooped = t,
            this._tag) && (this._tag.loop = t)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.play = function() {
        if (this.isPaused)
            this.resume();
        else if (this.isStopped) {
            this._state = e.Sound.State.Playing;
            var t = this._tag.play();
            if (t)
                try {
                    t.catch(function() {
                        console.warn("Promise Failure: Failed to resume HTML sound.")
                    })
                } catch (t) {}
        }
    }
    ,
    i.prototype.pause = function() {
        this.isPlaying && (this._tag.pause(),
        this._state = e.Sound.State.Paused)
    }
    ,
    i.prototype.resume = function() {
        if (this.isPaused) {
            this._state = e.Sound.State.Playing;
            var t = this._tag.play();
            if (t)
                try {
                    t.catch(function() {
                        console.warn("Promise Failure: Failed to resume HTML sound.")
                    })
                } catch (t) {}
        }
    }
    ,
    i.prototype.stop = function() {
        this.isStopped || (this._tag.pause(),
        this._tag.currentTime = 0,
        this._state = e.Sound.State.Stopped)
    }
    ,
    i.prototype.tag_ended = function(t) {
        this._tag.pause(),
        this._tag.currentTime = 0,
        this._state = e.Sound.State.Stopped,
        this.onComplete.invoke(this)
    }
    ,
    t = i,
    e.HTMLSoundRenderer = t
}(com = com || {}),
!function(t) {
    var i, s, n, a, e;
    function r(t) {
        void 0 === t && (t = null);
        var e = s.call(this) || this;
        return e.Renderer = i.HTMLSoundRenderer,
        e.audioElement = t,
        r._warned && i.Logger.info("Using HTML Audio. Note that the following features are unsupported: pan"),
        e
    }
    function o(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        t = a.call(this, t, e, i) || this;
        t._tag = null,
        t.tag_canplaythrough = t.tag_canplaythrough.bind(t),
        t.tag_progress = t.tag_progress.bind(t),
        t.tag_error = t.tag_error.bind(t),
        t.tag_abort = t.tag_abort.bind(t),
        t.tag_timeout = t.tag_timeout.bind(t),
        t._tag = document.createElement("audio"),
        t._tag.controls = !1,
        t._tag.preload = "auto",
        t._tag.loop = !1,
        t._tag;
        return t
    }
    i = t.battleline || (t.battleline = {}),
    s = i.SoundData,
    __extends(r, s),
    r._warned = !1,
    e = r,
    i.HTMLSoundData = e,
    n = i.HTMLSoundData || (i.HTMLSoundData = {}),
    a = t.battleline.Loader,
    __extends(o, a),
    o.prototype.startLoading = function() {
        this.loadURL()
    }
    ,
    o.prototype.stopLoading = function() {
        this.unwatchTag(),
        this._tag.removeAttribute("src"),
        this._tag.load(),
        a.prototype.stopLoading.call(this)
    }
    ,
    o.prototype.loadURL = function() {
        this.watchTag(),
        this._tag.src = this.targetSrc
    }
    ,
    o.prototype.watchTag = function() {
        i.Platform.os === i.OS.Android ? this._tag.addEventListener("loadstart", this.tag_canplaythrough) : this._tag.addEventListener("canplaythrough", this.tag_canplaythrough),
        this._tag.addEventListener("progress", this.tag_progress),
        this._tag.addEventListener("error", this.tag_error),
        this._tag.addEventListener("abort", this.tag_abort),
        this._tag.addEventListener("timeout", this.tag_timeout)
    }
    ,
    o.prototype.unwatchTag = function() {
        i.Platform.os === i.OS.Android ? this._tag.removeEventListener("loadstart", this.tag_canplaythrough) : this._tag.removeEventListener("canplaythrough", this.tag_canplaythrough),
        this._tag.removeEventListener("progress", this.tag_progress),
        this._tag.removeEventListener("error", this.tag_error),
        this._tag.removeEventListener("abort", this.tag_abort),
        this._tag.removeEventListener("timeout", this.tag_timeout)
    }
    ,
    o.prototype.tag_progress = function(t) {
        try {
            t.lengthComputable && this.setProgress(t.loaded / t.total)
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    o.prototype.tag_canplaythrough = function(t) {
        try {
            this.unwatchTag();
            var e = new n(this._tag);
            this._content = e,
            this.contentId && i.AudioManager.addCueDefinition(this.contentId, !1, 1),
            this.setLoaded()
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    o.prototype.tag_abort = function(t) {
        try {
            this.unwatchTag(),
            this._tag.removeAttribute("src"),
            this._tag.load(),
            this.setAbort(new Error("Load request was aborted for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    o.prototype.tag_timeout = function(t) {
        try {
            this.unwatchTag(),
            this._tag.removeAttribute("src"),
            this._tag.load(),
            this.setTimedout(new Error("Load request was timed out for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    o.prototype.tag_error = function(t) {
        try {
            this.unwatchTag(),
            this._tag.removeAttribute("src"),
            this._tag.load(),
            this.setError(new Error("Error loading tag request for " + this.src))
        } catch (t) {
            this.setFatalError(t)
        }
    }
    ,
    e = o,
    n.Loader = e
}(com = com || {}),
!function(t) {
    var e = t.battleline || (t.battleline = {})
      , t = (Object.defineProperty(i, "isSupported", {
        get: function() {
            return !0
        },
        enumerable: !1,
        configurable: !0
    }),
    i.initialize = function() {
        this._unlocker = new s
    }
    ,
    i.brokenDataURL = "data:audio/mpeg;base64,",
    i.silenceDataURL = "data:audio/mpeg;base64,//MkxAAHiAICWABElBeKPL/RANb2w+yiT1g/gTok//lP/W/l3h8QO/OCdCqCW2Cw//MkxAQHkAIWUAhEmAQXWUOFW2dxPu//9mr60ElY5sseQ+xxesmHKtZr7bsqqX2L//MkxAgFwAYiQAhEAC2hq22d3///9FTV6tA36JdgBJoOGgc+7qvqej5Zu7/7uI9l//MkxBQHAAYi8AhEAO193vt9KGOq+6qcT7hhfN5FTInmwk8RkqKImTM55pRQHQSq//MkxBsGkgoIAABHhTACIJLf99nVI///yuW1uBqWfEu7CgNPWGpUadBmZ////4sL//MkxCMHMAH9iABEmAsKioqKigsLCwtVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVV//MkxCkECAUYCAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
    i._unlocker = null,
    i);
    function i() {
        throw new Error("Static class!")
    }
    e.HTMLAudio = t,
    n.prototype.watch = function() {
        document.addEventListener("click", this.userActionHandler),
        window.addEventListener("click", this.userActionHandler),
        document.addEventListener("mousedown", this.userActionHandler),
        window.addEventListener("mousedown", this.userActionHandler)
    }
    ,
    n.prototype.unwatch = function() {
        document.removeEventListener("click", this.userActionHandler),
        window.removeEventListener("click", this.userActionHandler),
        document.removeEventListener("mousedown", this.userActionHandler),
        window.removeEventListener("mousedown", this.userActionHandler)
    }
    ,
    n.prototype.userActionHandler = function(t) {
        e.Logger.log("HTMLAudio unlocking... " + t.type),
        this.vidTag.play();
        try {
            this.unwatch(),
            this.tag.addEventListener("ended", this.tag_ended),
            this.tag.play(),
            e.Logger.log(" html audio unlock attempt went through...")
        } catch (t) {
            this.tag.removeEventListener("ended", this.tag_ended),
            e.Logger.log(" html audio unlock attempt exception!"),
            this.watch()
        }
    }
    ,
    n.prototype.tag_ended = function(t) {
        e.Logger.log("HTMLAudio unlocked 99! " + t.type),
        this.tag.removeEventListener("ended", this.tag_ended)
    }
    ;
    var s = n;
    function n() {}
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        void 0 === t && (t = null),
        this.list = null,
        this.prev = null,
        this.next = null,
        this.value = t
    }
    function s(t) {
        this.head = null,
        this.tail = null,
        this.length = 0,
        this._curr = null,
        t && this.push(t)
    }
    t = t.battleline || (t.battleline = {}),
    t.LinkedListNode = i,
    s.prototype.push = function(t) {
        if (t.list)
            throw new Error("Node is in a list!");
        return t.list = this,
        this.tail ? (this.tail.next = t,
        t.prev = this.tail,
        this.tail = t) : this.head = this.tail = t,
        this.length++,
        t
    }
    ,
    s.prototype.unshift = function(t) {
        if (t.list)
            throw new Error("Node is in a list!");
        return t.list = this,
        this.head ? (this.head.prev = t,
        t.next = this.head,
        this.head = t) : this.head = this.tail = t,
        this.length++,
        t
    }
    ,
    s.prototype.remove = function(t) {
        if (t.list !== this)
            throw new Error("Node isn't in list!");
        return 1 === this.length ? this.head = this.tail = null : this.head === t ? (this.head = t.next,
        this.head.prev = null) : this.tail === t ? (this.tail = t.prev,
        this.tail.next = null) : (t.prev.next = t.next,
        t.next.prev = t.prev),
        t.next = t.prev = t.list = null,
        this.length--,
        t
    }
    ,
    s.prototype.empty = function() {
        for (this._curr = this.head; this._curr; )
            this._curr = this.head.next,
            this.head.next = this.head.prev = this.head.list = null,
            this.head = this._curr;
        this.tail = null,
        this.length = 0
    }
    ,
    e = s,
    t.LinkedList = e
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        this._instances = [],
        this._length = 0
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "length", {
        get: function() {
            return this._length
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.pop = function() {
        var t = null;
        return 0 < this._length && (t = this._instances[this._length - 1],
        this._instances[this._length - 1] = null,
        this._length--),
        t
    }
    ,
    i.prototype.push = function(t) {
        if (!t)
            throw new Error("item must exist!");
        this._instances.length > this._length ? this._instances[this._length] = t : this._instances.push(t),
        this._length++
    }
    ,
    e = i,
    t.InstancePool = e
}(com = com || {}),
!function(t) {
    var e;
    function i() {}
    e = t.battleline || (t.battleline = {}),
    i.register = function() {
        e.Platform.os === e.OS.iOS ? this.safari() : e.Platform.browser === e.Browser.Chrome ? this.chrome() : e.Platform.browser === e.Browser.Firefox ? this.firefox() : e.Platform.browser === e.Browser.Safari ? this.safari() : e.Platform.browser === e.Browser.Edge || e.Platform.browser === e.Browser.IE ? this.edgeOrIE() : e.Platform.deviceType === e.DeviceType.Handheld || e.Platform.deviceType === e.DeviceType.Tablet ? this.otherTabletOrHandheld() : this.unknown()
    }
    ,
    i.chrome = function() {
        createjs.Text.registerFont("Bubblegum Sans", "normal", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Lobster Two", "bold", "normal", 0, 0, .12),
        createjs.Text.registerFont("Noto Serif", "normal", "normal", -2, 0, .04),
        createjs.Text.registerFont("Noto Serif", "bold", "normal", -2, 0, .04),
        createjs.Text.registerFont("Noto Serif", "bold", "italic", -2, 0, .16),
        createjs.Text.registerFont("Patua One", "normal", "normal", -2, -.5, .12),
        createjs.Text.registerFont("Rajdhani Bold", "bold", "normal", 0, 0, .15),
        createjs.Text.registerFont("Clarendon Blk BT", "normal", "normal", 0, 0, .14),
        createjs.Text.registerFont("Domine", "bold", "normal", 0, 0, .06),
        createjs.Text.registerFont("Tinos", "bold", "italic", 0, 0, .06),
        createjs.Text.registerFont("Vibrocentric", "normal", "normal", -1.5, 0, .13),
        createjs.Text.registerFont("Vibrocentric", "bold", "normal", -1.5, 0, .13),
        createjs.Text.registerFont("Asap", "normal", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Asap", "bold", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Asap Condensed", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Asap Condensed Medium", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Asap Condensed SemiBold", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Baloo Bhai", "normal", "normal", 0, 0, .23),
        createjs.Text.registerFont("Open Sans Extrabold", "bold", "normal", 0, 0, .21),
        createjs.Text.registerFont("Vitesse Book", "normal", "normal")
    }
    ,
    i.firefox = function() {
        createjs.Text.registerFont("Bubblegum Sans", "normal", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Lobster Two", "bold", "normal", 0, 0, .12),
        createjs.Text.registerFont("Noto Serif", "normal", "normal", -2, 0, .04),
        createjs.Text.registerFont("Noto Serif", "bold", "normal", -2, 0, .04),
        createjs.Text.registerFont("Noto Serif", "bold", "italic", -2, 0, .16),
        createjs.Text.registerFont("Patua One", "normal", "normal", -2, -.5, .12),
        createjs.Text.registerFont("Rajdhani Bold", "bold", "normal", 0, 0, .15),
        createjs.Text.registerFont("Clarendon Blk BT", "normal", "normal", 0, 0, .14),
        createjs.Text.registerFont("Domine", "bold", "normal", 0, 0, .06),
        createjs.Text.registerFont("Tinos", "bold", "italic", 0, 0, .06),
        createjs.Text.registerFont("Vibrocentric", "normal", "normal", -1.5, 0, .13),
        createjs.Text.registerFont("Vibrocentric", "bold", "normal", -1.5, 0, .13),
        createjs.Text.registerFont("Asap", "normal", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Asap", "bold", "normal", -1.5, 0, .085),
        createjs.Text.registerFont("Asap Condensed", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Asap Condensed Medium", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Asap Condensed SemiBold", "normal", "normal", 0, 0, .13),
        createjs.Text.registerFont("Baloo Bhai", "normal", "normal", 0, 0, .23),
        createjs.Text.registerFont("Open Sans Extrabold", "bold", "normal", 0, 0, .21),
        createjs.Text.registerFont("Vitesse Book", "normal", "normal", 0, 0, .14)
    }
    ,
    i.safari = function() {
        createjs.Text.registerFont("Bubblegum Sans", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Lobster Two", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Noto Serif", "normal", "normal", -2, 0, -.04),
        createjs.Text.registerFont("Noto Serif", "bold", "normal", -2, 0, -.04),
        createjs.Text.registerFont("Noto Serif", "bold", "italic", -2, -2, 0),
        createjs.Text.registerFont("Patua One", "normal", "normal", -2, -2, 0),
        createjs.Text.registerFont("Rajdhani Bold", "bold", "normal", -1, -1, 0),
        createjs.Text.registerFont("Clarendon Blk BT", "normal", "normal", -1, -1, 0),
        createjs.Text.registerFont("Domine", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Tinos", "bold", "italic", 0, 0, 0, !0),
        createjs.Text.registerFont("Vibrocentric", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Vibrocentric", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap Condensed", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap Condensed Medium", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap Condensed SemiBold", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Baloo Bhai", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Open Sans Extrabold", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Vitesse Book", "normal", "normal", 0, 0, .14)
    }
    ,
    i.edgeOrIE = function() {
        createjs.Text.registerFont("Bubblegum Sans", "normal", "normal", -1.5, -1.5, 0),
        createjs.Text.registerFont("Lobster Two", "bold", "normal", 0, 0, 0, !0),
        e.Platform.browser === e.Browser.IE ? createjs.Text.registerFont("Noto Serif", "normal", "normal", -2, 0, .04) : createjs.Text.registerFont("Noto Serif", "normal", "normal", -2, 0, -.04),
        e.Platform.browser === e.Browser.IE ? createjs.Text.registerFont("Noto Serif", "bold", "normal", -2, 0, .04) : createjs.Text.registerFont("Noto Serif", "bold", "normal", -2, 0, -.04),
        createjs.Text.registerFont("Noto Serif", "bold", "italic", -2, -2, 0),
        createjs.Text.registerFont("Patua One", "normal", "normal", -2, -2, 0),
        createjs.Text.registerFont("Rajdhani Bold", "bold", "normal", -1, -1, 0),
        createjs.Text.registerFont("Clarendon Blk BT", "normal", "normal", -1, -1, 0),
        createjs.Text.registerFont("Domine", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Tinos", "bold", "italic", 0, 0, 0, !0),
        createjs.Text.registerFont("Vibrocentric", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Vibrocentric", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Asap Condensed", "normal", "normal", 0, 0, .06, !0),
        createjs.Text.registerFont("Asap Condensed Medium", "normal", "normal", 0, 0, .06, !0),
        createjs.Text.registerFont("Asap Condensed SemiBold", "normal", "normal", 0, 0, .06, !0),
        createjs.Text.registerFont("Baloo Bhai", "normal", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Open Sans Extrabold", "bold", "normal", 0, 0, 0, !0),
        createjs.Text.registerFont("Vitesse Book", "normal", "normal")
    }
    ,
    i.otherTabletOrHandheld = function() {
        this.safari()
    }
    ,
    i.unknown = function() {
        this.chrome()
    }
    ,
    t = i,
    e.FontRegistration = t
}(com = com || {}),
!function(e) {
    var i;
    function t() {
        this.onAdClosed = new i.DelegateEvent,
        this.isShowingAd = !1,
        this._adBreak = null
    }
    i = e.battleline || (e.battleline = {}),
    i.InterstitialAds = (t.prototype.systemInit = function() {
        e.battleline.Config;
        var t = window.parent;
        t && t.games247 && t.games247.ads && t.games247.ads.createAdBreak ? this.enabled = !0 : this.enabled = !1
    }
    ,
    t.prototype.adsBlocked = function() {
        return 1 !== window.parent.games247pbjs
    }
    ,
    t.prototype.showAd = function() {
        window.parent.games247.ads.createAdBreak ? this.showAdBreak() : this.onAdClosed.invoke(!1)
    }
    ,
    t.prototype.showAdBreak = function() {
        this._adBreak = window.parent.games247.ads.createAdBreak(),
        this._adBreak.onStart.add(this.adBreak_onStart, this),
        this._adBreak.onEnd.add(this.adBreak_onEnd, this),
        this._adBreak.start()
    }
    ,
    t.prototype.adBreak_onStart = function(t) {}
    ,
    t.prototype.adBreak_onEnd = function(t) {
        this._adBreak.onStart.remove(this.adBreak_onStart, this),
        this._adBreak.onEnd.remove(this.adBreak_onEnd, this),
        this._adBreak = null,
        i.App.touchReset(),
        this.onAdClosed.invoke(!1)
    }
    ,
    new t)
}(com = com || {}),
!function(t) {
    var a;
    function r() {
        if (this.maxUpdateTicks = 3,
        this.lockedUpdateTime = .06,
        this.lockedUpdate = !1,
        this.holder = null,
        this._views = new Array,
        this.isRunningSlowly = !1,
        this.droppedFrames = 0,
        this.maxDroppedFrames = 3,
        this.pendingResize = !1,
        this.lastResize = 0,
        r.instance)
            throw new Error("Only one game instance may exist!");
        r.instance = this,
        r.onCreated.invoke(),
        this.holder = document.getElementById("game"),
        this.pixelRatio = window.devicePixelRatio || (screen.deviceXDPI && screen.logicalXDPI ? screen.deviceXDPI / screen.logicalXDPI : 1),
        document.oncontextmenu = a.Util.suppressEvent;
        var t = -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
          , e = !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
        t || e || a.Platform.deviceType === a.DeviceType.Handheld || (a.Platform.deviceType,
        a.DeviceType.Tablet)
    }
    a = t.battleline || (t.battleline = {}),
    r.prototype.createView = function(t, e, i, s, n) {
        void 0 === i && (i = void 0),
        void 0 === s && (s = void 0),
        void 0 === n && (n = void 0);
        t = new a.View(t,e,i,s,n),
        t.quality = r.defaultViewQuality,
        t.hd = r.defaultViewHD,
        this._views.push(t),
        this.holder.appendChild(t.canvas),
        e = this.holder.clientWidth,
        i = this.holder.clientHeight;
        return t.preRender(e, i, this.pixelRatio),
        t
    }
    ,
    r.prototype.prePreload = function() {
        this.preload()
    }
    ,
    r.prototype.preload = function() {}
    ,
    r.prototype.App_onBackButton = function() {}
    ,
    r.prototype.start = function(t) {
        void 0 === t && (t = !0),
        a.View.viewportScale = 1,
        this.update(0),
        this.draw(),
        a.Time.onTick.add(this.time_onTick, this),
        a.Time.resetElapsedTime(),
        window.addEventListener("resize", this.window_resize.bind(this)),
        this.doResize = this.doResize.bind(this),
        t && a.Splash.display.hide(),
        a.App.onBackButton.add(this.App_onBackButton, this)
    }
    ,
    r.prototype.window_resize = function() {
        a.App.isWebApp ? this.pendingResize || (this.pendingResize = !0,
        100 < Date.now() - this.lastResize ? this.doResize() : setTimeout(this.doResize, 100)) : this.doResize()
    }
    ,
    r.prototype.doResize = function() {
        this.pendingResize = !1,
        this.lastResize = Date.now(),
        this.draw()
    }
    ,
    r.prototype.time_onTick = function() {
        var t = 1e3 * this.maxUpdateTicks / (a.App.isActive ? a.Time.activeTicksPerSecond : a.Time.inactiveTicksPerSecond)
          , e = a.Time.elapsed;
        t < e ? (e = t,
        this.isRunningSlowly = !0) : this.isRunningSlowly = !1,
        this.lockedUpdate ? (this.update(this.lockedUpdateTime),
        this.draw()) : (this.update(e),
        !this.isRunningSlowly || this.droppedFrames >= this.maxDroppedFrames ? this.draw() : this.droppedFrames++)
    }
    ,
    r.prototype.update = function(t) {
        r.onUpdate.invoke(t);
        for (var e = 0; e < this._views.length; ++e) {
            var i = this._views[e];
            i.autoTick && i.tick(t)
        }
    }
    ,
    r.prototype.draw = function() {
        this.droppedFrames = 0,
        r.onDraw.invoke();
        for (var t = this.holder.clientWidth, e = this.holder.clientHeight, i = 0; i < this._views.length; ++i) {
            var s = this._views[i];
            s.preRender(t, e, this.pixelRatio),
            s.dirty && s.render()
        }
    }
    ,
    r.instance = null,
    r.onCreated = new a.DelegateEvent,
    r.onUpdate = new a.DelegateEvent,
    r.onDraw = new a.DelegateEvent,
    r.defaultViewHD = !0,
    r.defaultViewQuality = 1,
    t = r,
    a.Game = t
}(com = com || {}),
!function(t) {
    var n;
    function e() {}
    n = t.battleline || (t.battleline = {}),
    Object.defineProperty(e, "isInterstitialReady", {
        get: function() {
            return this._isInterstitialLoaded
        },
        enumerable: !1,
        configurable: !0
    }),
    e.initialize = function(t, e, i) {
        if (!1 === this.enabled)
            n.Logger.info("Ads disabled manually.");
        else {
            try {
                this._adMobWebInterface = window.AdMobWebInterface
            } catch (t) {
                this._adMobWebInterface = null,
                this.enabled = !1,
                n.Logger.warn("AdMob disabled. Could not find AdMobWebInterface bridge"),
                n.Logger.warn(t)
            }
            var s = window;
            this._adMobWebInterface ? (this.enabled = !0,
            n.Logger.info("AdMob enabled, bridge found, initializing"),
            this._adMobWebInterface.initialize(t, e, i)) : s && s.webkit && s.webkit.messageHandlers && s.webkit.messageHandlers.app ? (this.enabled = !0,
            n.Logger.info("AdMob enabled, ios bridge found, initializing")) : this.enabled = !1
        }
        this.loadInterstitial()
    }
    ,
    e.showBanner = function() {
        var t;
        this.enabled && (t = window,
        this._adMobWebInterface ? this._adMobWebInterface.showBanner() : t.webkit.messageHandlers.app.postMessage({
            cmd: "Ads.showBanner"
        }))
    }
    ,
    e.hideBanner = function() {
        var t;
        this.enabled && (t = window,
        this._adMobWebInterface ? this._adMobWebInterface.hideBanner() : t.webkit.messageHandlers.app.postMessage({
            cmd: "Ads.hideBanner"
        }))
    }
    ,
    e.loadInterstitial = function() {
        var t;
        this.enabled && (n.Logger.info("AdMob.loadInterstitial " + this._isInterstitialLoading + " " + this._isInterstitialLoaded),
        this._isInterstitialLoaded || this._isInterstitialLoading || (this._isInterstitialLoaded = !1,
        this._isInterstitialLoading = !0,
        t = window,
        this._adMobWebInterface ? this._adMobWebInterface.loadInterstitial() : t.webkit.messageHandlers.app.postMessage({
            cmd: "Ads.loadInterstitial"
        })))
    }
    ,
    e.showInterstitial = function() {
        var t;
        this.enabled && (n.Logger.info("AdMob.showInterstitial " + this._isInterstitialLoading + " " + this._isInterstitialLoaded),
        this._isInterstitialLoaded) && (t = window,
        this._adMobWebInterface ? this._adMobWebInterface.showInterstitial() : t.webkit.messageHandlers.app.postMessage({
            cmd: "Ads.showInterstitial"
        }))
    }
    ,
    e.cb_interstitialLoading = function() {
        n.Logger.info("AdMob.cb_interstitialLoading " + this._isInterstitialLoading + " " + this._isInterstitialLoaded),
        this._isInterstitialLoading = !0,
        this._isInterstitialLoaded = !1
    }
    ,
    e.cb_interstitialLoaded = function() {
        n.Logger.info("AdMob.cb_interstitialLoaded " + this._isInterstitialLoading + " " + this._isInterstitialLoaded),
        this._isInterstitialLoading = !1,
        this._isInterstitialLoaded = !0
    }
    ,
    e.cb_interstitialReset = function() {
        n.Logger.info("AdMob.cb_interstitialReset " + this._isInterstitialLoading + " " + this._isInterstitialLoaded),
        this._isInterstitialLoading = !1,
        this._isInterstitialLoaded = !1,
        n.Logger.info("setting timer to request new ad..."),
        setTimeout(function() {
            n.Logger.info("timer elapsed... requesting ad again"),
            e.loadInterstitial()
        }, 5e3),
        this.onInterstitialClosed.invoke()
    }
    ,
    e.onInterstitialClosed = new n.DelegateEvent,
    e._adMobWebInterface = null,
    e.enabled = null,
    e._isInterstitialLoading = !1,
    e._isInterstitialLoaded = !1,
    t = e,
    n.AdMob = t
}(com = com || {}),
!function(t) {
    (t.battleline || (t.battleline = {})).Config = null
}(com = com || {}),
!function(t) {
    var i, e, s, n;
    function a() {
        return null !== s && s.apply(this, arguments) || this
    }
    i = t.battleline || (t.battleline = {}),
    t = e = e || {},
    s = i.StorageItem,
    __extends(a, s),
    Object.defineProperty(a.prototype, "containerName", {
        get: function() {
            return "com.games247." + i.Config.gameType + "." + i.Config.theme + ".Settings"
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.defaults = function() {
        this.mute = i.Config.defaultMute
    }
    ,
    a.prototype.load = function() {
        if (this.defaults(),
        this.exists()) {
            var t = this.read();
            this.mute = i.Util.validateBoolean(t.mute, i.Config.defaultMute)
        } else if (this.itemExists("settings")) {
            var t = this.readItem("settings")
              , e = null;
            try {
                e = JSON.parse(t)
            } catch (t) {
                e = null
            }
            e = e || {},
            this.mute = i.Util.validateBoolean(e.mute, i.Config.defaultMute),
            this.removeItem("settings"),
            this.removeItem("settings_init_1"),
            this.removeItem("settings_init_0"),
            this.removeItem("settings_init"),
            this.save()
        }
    }
    ,
    a.prototype.save = function() {
        var t = {
            mute: this.mute
        };
        this.write(t)
    }
    ,
    n = a,
    t.Settings = n,
    i.Settings = new e.Settings
}(com = com || {}),
!function(t) {
    var i, e, s, n;
    function a() {
        return null !== s && s.apply(this, arguments) || this
    }
    i = t.battleline || (t.battleline = {}),
    t = e = e || {},
    s = i.StorageItem,
    __extends(a, s),
    Object.defineProperty(a.prototype, "containerName", {
        get: function() {
            return "com.games247." + i.Config.gameType + "." + i.Config.theme + ".Records"
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.defaults = function() {
        this.money = i.Config.defaultRecord
    }
    ,
    a.prototype.load = function() {
        if (this.defaults(),
        this.exists()) {
            var t = this.read();
            this.money = i.Util.validateNumberMinInclusive(t.money, 0, i.Config.defaultRecord)
        } else if (this.itemExists("records")) {
            var t = this.readItem("records")
              , e = null;
            try {
                e = JSON.parse(t)
            } catch (t) {
                e = null
            }
            e = e || {},
            this.money = i.Util.validateNumberMinInclusive(e.money, 0, i.Config.defaultRecord),
            this.removeItem("records"),
            this.removeItem("records_init_1"),
            this.removeItem("records_init_0"),
            this.removeItem("records_init"),
            this.save()
        }
    }
    ,
    a.prototype.save = function() {
        var t = {
            money: this.money
        };
        this.write(t)
    }
    ,
    n = a,
    t.Records = n,
    i.Records = new e.Records
}(com = com || {}),
!function(t) {
    t = t.battleline || (t.battleline = {}),
    t = t.WheelColor || (t.WheelColor = {}),
    t.Black = "Black",
    t.Red = "Red",
    t.Green = "Green"
}(com = com || {}),
!function(t) {
    t = t.battleline || (t.battleline = {}),
    t = t.WheelNumber || (t.WheelNumber = {}),
    t.n0 = "0",
    t.n1 = "1",
    t.n2 = "2",
    t.n3 = "3",
    t.n4 = "4",
    t.n5 = "5",
    t.n6 = "6",
    t.n7 = "7",
    t.n8 = "8",
    t.n9 = "9",
    t.n10 = "10",
    t.n11 = "11",
    t.n12 = "12",
    t.n13 = "13",
    t.n14 = "14",
    t.n15 = "15",
    t.n16 = "16",
    t.n17 = "17",
    t.n18 = "18",
    t.n19 = "19",
    t.n20 = "20",
    t.n21 = "21",
    t.n22 = "22",
    t.n23 = "23",
    t.n24 = "24",
    t.n25 = "25",
    t.n26 = "26",
    t.n27 = "27",
    t.n28 = "28",
    t.n29 = "29",
    t.n30 = "30",
    t.n31 = "31",
    t.n32 = "32",
    t.n33 = "33",
    t.n34 = "34",
    t.n35 = "35",
    t.n36 = "36",
    t.n00 = "00"
}(com = com || {}),
!function(t) {
    var n, a, e;
    function i(t, e, i, s) {
        t = a.call(this, n, "WheelSlot", t, e) || this;
        return t.wheelNumber = s,
        t.wheelColor = i,
        t
    }
    t = t.battleline || (t.battleline = {}),
    n = t.WheelSlot || (t.WheelSlot = {}),
    n.values = new Array,
    a = t.EnumValue,
    __extends(i, a),
    e = i,
    n.Green0 = new e(0,"Green0",t.WheelColor.Green,t.WheelNumber.n0),
    n.Red1 = new e(1,"Red1",t.WheelColor.Red,t.WheelNumber.n1),
    n.Black2 = new e(2,"Black2",t.WheelColor.Black,t.WheelNumber.n2),
    n.Red3 = new e(3,"Red3",t.WheelColor.Red,t.WheelNumber.n3),
    n.Black4 = new e(4,"Black4",t.WheelColor.Black,t.WheelNumber.n4),
    n.Red5 = new e(5,"Red5",t.WheelColor.Red,t.WheelNumber.n5),
    n.Black6 = new e(6,"Black6",t.WheelColor.Black,t.WheelNumber.n6),
    n.Red7 = new e(7,"Red7",t.WheelColor.Red,t.WheelNumber.n7),
    n.Black8 = new e(8,"Black8",t.WheelColor.Black,t.WheelNumber.n8),
    n.Red9 = new e(9,"Red9",t.WheelColor.Red,t.WheelNumber.n9),
    n.Black10 = new e(10,"Black10",t.WheelColor.Black,t.WheelNumber.n10),
    n.Black11 = new e(11,"Black11",t.WheelColor.Black,t.WheelNumber.n11),
    n.Red12 = new e(12,"Red12",t.WheelColor.Red,t.WheelNumber.n12),
    n.Black13 = new e(13,"Black13",t.WheelColor.Black,t.WheelNumber.n13),
    n.Red14 = new e(14,"Red14",t.WheelColor.Red,t.WheelNumber.n14),
    n.Black15 = new e(15,"Black15",t.WheelColor.Black,t.WheelNumber.n15),
    n.Red16 = new e(16,"Red16",t.WheelColor.Red,t.WheelNumber.n16),
    n.Black17 = new e(17,"Black17",t.WheelColor.Black,t.WheelNumber.n17),
    n.Red18 = new e(18,"Red18",t.WheelColor.Red,t.WheelNumber.n18),
    n.Red19 = new e(19,"Red19",t.WheelColor.Red,t.WheelNumber.n19),
    n.Black20 = new e(20,"Black20",t.WheelColor.Black,t.WheelNumber.n20),
    n.Red21 = new e(21,"Red21",t.WheelColor.Red,t.WheelNumber.n21),
    n.Black22 = new e(22,"Black22",t.WheelColor.Black,t.WheelNumber.n22),
    n.Red23 = new e(23,"Red23",t.WheelColor.Red,t.WheelNumber.n23),
    n.Black24 = new e(24,"Black24",t.WheelColor.Black,t.WheelNumber.n24),
    n.Red25 = new e(25,"Red25",t.WheelColor.Red,t.WheelNumber.n25),
    n.Black26 = new e(26,"Black26",t.WheelColor.Black,t.WheelNumber.n26),
    n.Red27 = new e(27,"Red27",t.WheelColor.Red,t.WheelNumber.n27),
    n.Black28 = new e(28,"Black28",t.WheelColor.Black,t.WheelNumber.n28),
    n.Black29 = new e(29,"Black29",t.WheelColor.Black,t.WheelNumber.n29),
    n.Red30 = new e(30,"Red30",t.WheelColor.Red,t.WheelNumber.n30),
    n.Black31 = new e(31,"Black31",t.WheelColor.Black,t.WheelNumber.n31),
    n.Red32 = new e(32,"Red32",t.WheelColor.Red,t.WheelNumber.n32),
    n.Black33 = new e(33,"Black33",t.WheelColor.Black,t.WheelNumber.n33),
    n.Red34 = new e(34,"Red34",t.WheelColor.Red,t.WheelNumber.n34),
    n.Black35 = new e(35,"Black35",t.WheelColor.Black,t.WheelNumber.n35),
    n.Red36 = new e(36,"Red36",t.WheelColor.Red,t.WheelNumber.n36),
    n.Green00 = new e(37,"Green00",t.WheelColor.Green,t.WheelNumber.n00),
    n.getByNumStr = function(t) {
        for (var e = 0; e < n.values.length; ++e) {
            var i = n.values[e];
            if (i.wheelNumber === t)
                return i
        }
        throw new Error("Could not find wheel slot with number str: " + t)
    }
}(com = com || {}),
!function(t) {
    var r, e, i, s;
    function n() {
        return null !== i && i.apply(this, arguments) || this
    }
    r = t.battleline || (t.battleline = {}),
    t = e = e || {},
    i = r.StorageItem,
    __extends(n, i),
    Object.defineProperty(n.prototype, "containerName", {
        get: function() {
            return "com.games247." + r.Config.gameType + "." + r.Config.theme + ".GameSaves"
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.defaults = function() {
        this.hasSaveGame = !1,
        this.bank = r.Config.defaultBank,
        this.results = []
    }
    ,
    n.prototype.load = function() {
        if (this.defaults(),
        this.exists())
            for (var t = this.read(), e = (this.hasSaveGame = r.Util.validateBoolean(t.hasSaveGame, !1),
            this.bank = r.Util.validateNumberMinInclusive(t.bank, 0, r.Config.defaultBank),
            r.Util.validateArray(t.resultOrdinals, [])), i = 0; i < e.length; ++i) {
                var s = null;
                try {
                    s = r.WheelSlot.values[e[i]]
                } catch (t) {
                    s = null
                }
                s && this.results.push(s)
            }
        else if (this.itemExists("gameState")) {
            var t = this.readItem("gameState")
              , n = null;
            try {
                n = JSON.parse(t)
            } catch (t) {
                n = null
            }
            n = n || {},
            this.bank = r.Util.validateNumberMinInclusive(n.money, 0, r.Config.defaultRecord),
            0 < this.bank && (this.hasSaveGame = !0);
            for (var a = r.Util.validateArray(n.results, []), i = 0; i < a.length; ++i) {
                s = null;
                try {
                    s = r.WheelSlot.getByNumStr(a[i].numberStr)
                } catch (t) {
                    s = null
                }
                s && this.results.push(s)
            }
            11 < this.results.length && (this.results.length = 11),
            this.removeItem("gameState"),
            this.removeItem("gameState_init_1"),
            this.removeItem("gameState_init_0"),
            this.removeItem("gameState_init"),
            this.save()
        }
        this.bank <= 0 && (this.hasSaveGame = !1)
    }
    ,
    n.prototype.save = function() {
        for (var t = {
            hasSaveGame: this.hasSaveGame,
            bank: this.bank,
            resultOrdinals: []
        }, e = 0; e < this.results.length; ++e)
            t.resultOrdinals.push(this.results[e].ordinal);
        this.write(t)
    }
    ,
    s = n,
    t.GameSaves = s,
    r.GameSaves = new e.GameSaves
}(com = com || {}),
!function(t) {
    var e, i, s, n;
    function a() {
        return null !== s && s.apply(this, arguments) || this
    }
    e = t.battleline || (t.battleline = {}),
    t = i = i || {},
    s = e.StorageItem,
    __extends(a, s),
    Object.defineProperty(a.prototype, "containerName", {
        get: function() {
            return "com.games247." + e.Config.gameType + ".GameAds"
        },
        enumerable: !1,
        configurable: !0
    }),
    a.prototype.defaults = function() {
        this.launches = 0,
        this.adPlacementOpportunities = 0
    }
    ,
    a.prototype.load = function() {
        this.defaults();
        var t = null;
        this.exists() && (t = this.read()),
        t && (this.launches = e.Util.validateNumberMinInclusive(t.launches, 0, 0),
        this.adPlacementOpportunities = e.Util.validateNumberMinInclusive(t.adPlacementOpportunities, 0, 0))
    }
    ,
    a.prototype.save = function() {
        var t = {
            launches: this.launches,
            adPlacementOpportunities: this.adPlacementOpportunities
        };
        this.write(t)
    }
    ,
    n = a,
    t.GameAds = n,
    e.GameAds = new i.GameAds
}(com = com || {}),
!function(t) {
    var s;
    function n() {}
    s = t.battleline || (t.battleline = {}),
    n.forward = function() {
        0 === n.forwardCueNames.length && (n.forwardCueNames.push("menu_forward_01"),
        n.forwardCueNames.push("menu_forward_02"),
        n.forwardCueNames.push("menu_forward_03"));
        var t = Math.floor(Math.random() * n.forwardCueNames.length)
          , e = n.forwardCueNames[t]
          , t = (n.forwardCueNames.splice(t, 1),
        s.AudioManager.getCue(e));
        t.play()
    }
    ,
    n.getForward = function() {
        0 === n.forwardCueNames.length && (n.forwardCueNames.push("menu_forward_01"),
        n.forwardCueNames.push("menu_forward_02"),
        n.forwardCueNames.push("menu_forward_03"));
        var t = Math.floor(Math.random() * n.forwardCueNames.length)
          , e = n.forwardCueNames[t]
          , t = (n.forwardCueNames.splice(t, 1),
        s.AudioManager.getCue(e));
        return t
    }
    ,
    n.back = function() {
        0 === n.backCueName.length && (n.backCueName.push("menu_back_01"),
        n.backCueName.push("menu_back_02"),
        n.backCueName.push("menu_back_03"));
        var t = Math.floor(Math.random() * n.backCueName.length)
          , e = n.backCueName[t];
        n.backCueName.splice(t, 1),
        s.AudioManager.playCue(e)
    }
    ,
    n.undo = function() {
        var t = n.undoCueNames
          , e = (0 === t.length && (t.push("undo_01"),
        t.push("undo_02")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.spin = function() {
        s.AudioManager.playCue("spin_wheel")
    }
    ,
    n.clear = function() {
        var t = n.clearCueNames
          , e = (0 === t.length && (t.push("clear_01"),
        t.push("clear_02"),
        t.push("clear_03")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.highlight = function() {
        var t = n.highlightCueNames
          , e = (0 === t.length && (t.push("board_highlight_01"),
        t.push("board_highlight_02"),
        t.push("board_highlight_03"),
        t.push("board_highlight_04"),
        t.push("board_highlight_05"),
        t.push("board_highlight_06")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.playChip = function() {
        var t = n.playChipCueNames
          , e = (0 === t.length && (t.push("chip_put_down_table_01"),
        t.push("chip_put_down_table_02"),
        t.push("chip_put_down_table_03"),
        t.push("chip_put_down_table_04"),
        t.push("chip_put_down_table_05"),
        t.push("chip_put_down_table_06"),
        t.push("chip_put_down_table_07"),
        t.push("chip_put_down_table_08")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.returnChip = function() {
        var t = n.returnChipCueNames
          , e = (0 === t.length && (t.push("chip_put_down_chip_04"),
        t.push("chip_put_down_chip_05"),
        t.push("chip_put_down_chip_07"),
        t.push("chip_put_down_chip_08")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.hitStack = function() {
        var t = n.hitStackCueNames
          , e = (0 === t.length && (t.push("chip_pickup_chip_pile_01"),
        t.push("chip_pickup_chip_pile_02"),
        t.push("chip_pickup_chip_pile_03")),
        Math.floor(Math.random() * t.length))
          , i = t[e];
        t.splice(e, 1),
        s.AudioManager.playCue(i)
    }
    ,
    n.forwardCueNames = [],
    n.backCueName = [],
    n.undoCueNames = [],
    n.clearCueNames = [],
    n.highlightCueNames = [],
    n.playChipCueNames = [],
    n.returnChipCueNames = [],
    n.hitStackCueNames = [],
    t = n,
    s.MenuSounds = t
}(com = com || {}),
!function(t) {
    var s;
    function n() {}
    s = t.battleline || (t.battleline = {}),
    n.hit = function(t) {
        void 0 === t && (t = 1),
        0 === n.hitCueNames.length && (n.hitCueNames.push("ball_bounce_03"),
        n.hitCueNames.push("ball_bounce_04"),
        n.hitCueNames.push("ball_bounce_05"),
        n.hitCueNames.push("ball_bounce_06"));
        var e = Math.floor(Math.random() * n.hitCueNames.length)
          , i = n.hitCueNames[e]
          , e = (n.hitCueNames.splice(e, 1),
        s.AudioManager.getCue(i));
        e.volume = t,
        e.play()
    }
    ,
    n.drop = function() {
        0 === n.dropCueNames.length && n.dropCueNames.push("ball_bounce_final");
        var t = Math.floor(Math.random() * n.dropCueNames.length)
          , e = n.dropCueNames[t];
        n.dropCueNames.splice(t, 1),
        s.AudioManager.playCue(e)
    }
    ,
    n.hitCueNames = [],
    n.dropCueNames = [],
    t = n,
    s.BallSounds = t
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        if (this.focusedScreen = null,
        null !== i.instance)
            throw new Error("Singleton!");
        i.instance = this,
        this.display = new guiLib.OverlayDisplay
    }
    e = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "layoutSwitch", {
        get: function() {
            return this.display
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fullscreenAnim", {
        get: function() {
            return this.display.fullscreen_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "muteAnim", {
        get: function() {
            return this.display.mute_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "homeAnim", {
        get: function() {
            return this.display.home_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.initialize = function() {
        !e.App.isWebApp || e.Platform.deviceType !== e.DeviceType.Handheld && e.Platform.deviceType !== e.DeviceType.Tablet ? (this.layoutSwitch.gotoAndStop("pc"),
        this.isFullscreenOptionAvailable = !1) : this.isFullscreenOptionAvailable = !0,
        this.fullscreenToggleButton = new e.ToggleButton(this.display.fullscreen_mc.btog_mc),
        this.muteToggleButton = new e.ToggleButton(this.display.mute_mc.btog_mc),
        this.homeButton = new e.Button(this.display.home_mc.btn_mc),
        this.fullscreenToggleButton.isOn = e.App.isFullscreen,
        this.muteToggleButton.isOn = e.AudioManager.isMuted,
        e.App.onEnterFullscreen.add(this.App_onFullscreenChange, this),
        e.App.onExitFullscreen.add(this.App_onFullscreenChange, this),
        e.AudioManager.onMuted.add(this.AudioManager_onMuteChange, this),
        e.AudioManager.onUnmuted.add(this.AudioManager_onMuteChange, this),
        this.showHideOption(this.fullscreenAnim, !0, !1),
        this.showHideOption(this.muteAnim, !1, !1),
        this.showHideOption(this.homeAnim, !1, !1),
        this.fullscreenToggleButton.onClick.add(this.fullscreenToggleButton_onClick, this),
        this.muteToggleButton.onClick.add(this.muteToggleButton_onClick, this),
        this.homeButton.onClick.add(this.backButton_onClick, this),
        this.homeButton.clickCue = this.muteToggleButton.clickCue = this.fullscreenToggleButton.clickCue = e.MenuSounds.getForward()
    }
    ,
    i.prototype.setFullscreenOption = function(t, e) {
        this.showHideOption(this.fullscreenAnim, t, e)
    }
    ,
    i.prototype.setMuteOption = function(t, e) {
        this.showHideOption(this.muteAnim, t, e)
    }
    ,
    i.prototype.setHomeOption = function(t, e) {
        this.showHideOption(this.homeAnim, t, e)
    }
    ,
    i.prototype.showHideOption = function(t, e, i) {
        var s = e ? "on" : "off"
          , e = e ? "toOn" : "toOff"
          , n = t.currentLabel;
        n !== s && (i ? n !== e && t.gotoAndPlay(e) : t.gotoAndPlay(s))
    }
    ,
    i.prototype.muteToggleButton_onClick = function(t) {
        this.focusedScreen && this.focusedScreen.track("Mute Button Pressed"),
        e.AudioManager.isMuted = !e.AudioManager.isMuted,
        this.muteToggleButton.isOn = e.AudioManager.isMuted,
        e.Settings.mute = e.AudioManager.isMuted,
        e.Settings.save(),
        this.focusedScreen && (e.AudioManager.isMuted ? this.focusedScreen.track("Muted") : this.focusedScreen.track("Unmuted"))
    }
    ,
    i.prototype.fullscreenToggleButton_onClick = function(t) {
        this.focusedScreen && this.focusedScreen.track("Fullscreen Button Pressed"),
        e.App.isFullscreen ? e.App.exitFullscreen() : e.App.enterFullscreen()
    }
    ,
    i.prototype.backButton_onClick = function(t) {
        this.focusedScreen && this.focusedScreen.inputEnabled && (t.onClick.reset(),
        this.focusedScreen.onHomePressed())
    }
    ,
    i.prototype.App_onFullscreenChange = function() {
        this.fullscreenToggleButton.isOn = e.App.isFullscreen,
        this.focusedScreen && (e.App.isFullscreen ? this.focusedScreen.track("Enter Fullscreen") : this.focusedScreen.track("Exit Fullscreen"))
    }
    ,
    i.prototype.AudioManager_onMuteChange = function() {
        this.muteToggleButton.isOn = e.AudioManager.isMuted
    }
    ,
    i.instance = null,
    t = i,
    e.OverlayDisplay = t
}(com = com || {}),
!function(t) {
    var s, r;
    function e(t, e, i, s, n) {
        var a = r.call(this) || this;
        return a.dimmer = null,
        a._firstFocus = !0,
        a.defaultAnalyticsLabel = void 0,
        a.name = t,
        a._showHomeOption = e,
        a._showMuteOption = i,
        a._showFullscreenOption = s,
        a._animateOptions = n,
        a
    }
    s = t.battleline || (t.battleline = {}),
    r = s.Screen,
    __extends(e, r),
    Object.defineProperty(e.prototype, "showHomeOption", {
        get: function() {
            return this._showHomeOption
        },
        set: function(t) {
            this._showHomeOption !== t && (this._showHomeOption = t,
            this.updateOptions())
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "showMuteOption", {
        get: function() {
            return this._showMuteOption
        },
        set: function(t) {
            this._showMuteOption !== t && (this._showMuteOption = t,
            this.updateOptions())
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "showFullscreenOption", {
        get: function() {
            return this._showFullscreenOption
        },
        set: function(t) {
            this._showFullscreenOption !== t && (this._showFullscreenOption = t,
            this.updateOptions())
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.added = function() {
        this.dimmer && this.dimmer.added(this.screenManager.view),
        this.track("Opened"),
        r.prototype.added.call(this)
    }
    ,
    e.prototype.removed = function() {
        this.dimmer && this.dimmer.removed(),
        this.track("Closed"),
        r.prototype.removed.call(this)
    }
    ,
    e.prototype.gainFocus = function() {
        s.OverlayDisplay.instance.focusedScreen = this,
        this.updateOptions(),
        this._firstFocus = !1,
        r.prototype.gainFocus.call(this)
    }
    ,
    e.prototype.loseFocus = function() {
        s.OverlayDisplay.instance.focusedScreen === this && (s.OverlayDisplay.instance.focusedScreen = null),
        r.prototype.loseFocus.call(this)
    }
    ,
    e.prototype.onHomePressed = function() {}
    ,
    e.prototype.updateOptions = function() {
        s.OverlayDisplay.instance.focusedScreen === this && (s.OverlayDisplay.instance.setHomeOption(this._showHomeOption, !this._firstFocus || this._animateOptions),
        s.OverlayDisplay.instance.setMuteOption(this._showMuteOption, !this._firstFocus || this._animateOptions),
        s.OverlayDisplay.instance.setFullscreenOption(this._showFullscreenOption, !this._firstFocus || this._animateOptions))
    }
    ,
    e.prototype.track = function(t, e, i) {
        e = e || this.defaultAnalyticsLabel,
        s.Analytics.google.track(this.name, t, e, i)
    }
    ,
    t = e,
    s.BaseScreen = t
}(com = com || {}),
!function(t) {
    var e;
    function s(t, e, i) {
        if (t !== s.KEY)
            throw new Error("You cannot create enumeration values directly!");
        this._value = e,
        this._desiredStackSize = i
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(s.prototype, "value", {
        get: function() {
            return this._value
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "desiredStackSize", {
        get: function() {
            return this._desiredStackSize
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s, "lowToHigh", {
        get: function() {
            return null == this._lowToHigh && (this._lowToHigh = [this.One, this.Ten, this.OneHundred, this.FiveHundred, this.FiveThousand, this.TwentyFiveThousand, this.OneHundredThousand, this.TwoHundredFiftyThousand, this.FiveHundredThousand, this.OneMillion]),
            this._lowToHigh.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s, "highToLow", {
        get: function() {
            return null == this._highToLow && (this._highToLow = this.lowToHigh.slice(0).reverse()),
            this._highToLow.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    s.KEY = Math.random(),
    s.One = new s(s.KEY,1,10),
    s.Ten = new s(s.KEY,10,10),
    s.OneHundred = new s(s.KEY,100,5),
    s.FiveHundred = new s(s.KEY,500,10),
    s.FiveThousand = new s(s.KEY,5e3,5),
    s.TwentyFiveThousand = new s(s.KEY,25e3,4),
    s.OneHundredThousand = new s(s.KEY,1e5,2),
    s.TwoHundredFiftyThousand = new s(s.KEY,25e4,2),
    s.FiveHundredThousand = new s(s.KEY,5e5,2),
    s.OneMillion = new s(s.KEY,1e6,Number.MAX_VALUE),
    s._lowToHigh = null,
    s._highToLow = null,
    e = s,
    t.Denomination = e
}(com = com || {}),
!function(t) {
    var a;
    function e(t) {
        void 0 === t && (t = 0),
        this.lowest = null,
        this.low = null,
        this.high = null,
        this.highest = null,
        this.lowToHighCompact = null,
        this.match(t)
    }
    a = t.battleline || (t.battleline = {}),
    e.prototype.match = function(t) {
        for (var e = new Array, i = a.Denomination.highToLow, s = 0; s < i.length; ++s) {
            var n = i[s];
            if (0 === e.length)
                n.value <= t && e.unshift(n);
            else if (e.unshift(n),
            4 === e.length)
                break
        }
        for (this.lowToHighCompact = e.slice(0); e.length < 4; )
            e.push(null);
        this.highest = e[3],
        this.high = e[2],
        this.low = e[1],
        this.lowest = e[0]
    }
    ,
    t = e,
    a.Bank = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s(t) {
        var e = i.call(this, "Resume Menu", !0, !0, !0, !0) || this;
        return e._nextScreen = null,
        e._intoMenuScreen = t,
        e.isPopup = !0,
        e
    }
    e = t.battleline || (t.battleline = {}),
    i = e.BaseScreen,
    __extends(s, i),
    Object.defineProperty(s.prototype, "titleText", {
        get: function() {
            return this.gui.clip_mc.texts_mc.title_txt
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "winningsText", {
        get: function() {
            return this.gui.clip_mc.texts_mc.winnings_txt
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "chipSwitch", {
        get: function() {
            return this.gui.clip_mc.texts_mc.chipSwitch_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.initialize = function() {
        var t = this.gui = new guiLib.ResumeMenuGui
          , t = (this.display.addChild(t),
        this.refresh(),
        e.Util.mouseOpaque(t.clip_mc),
        this.newGameButton = new e.Button(t.clip_mc.newBtn_mc),
        this.resumeButton = new e.Button(t.clip_mc.resumeBtn_mc),
        this.dimmer = new e.Dimmer(t.dimmer_mc),
        this.titleText.stroke = e.Config.popupTitleStrokeWidth,
        this.titleText.strokeStyle = e.Config.popupTitleStrokeStyle,
        this.winningsText.stroke = e.Config.popupTitleStrokeWidth,
        this.winningsText.strokeStyle = e.Config.popupTitleStrokeStyle,
        this.newGameButton.clickCue = this.resumeButton.clickCue = e.MenuSounds.getForward(),
        this.newGameButton.onClick.add(this.newGameButton_onClick, this),
        this.resumeButton.onClick.add(this.resumeButton_onClick, this),
        this.dimmer.onClick.add(this.dimmer_onClick, this),
        this.winningsText.text = "$" + e.Util.toNumericString(e.GameSaves.bank),
        new e.Bank(e.GameSaves.bank))
          , t = t.lowToHighCompact;
        this.chipSwitch.gotoAndStop("dollars" + t[t.length - 1].value.toString()),
        this.gui.gotoAndPlay("toOn"),
        this.dimmer.hide(!1),
        this.dimmer.show(!0),
        i.prototype.initialize.call(this)
    }
    ,
    s.prototype.removed = function() {
        i.prototype.removed.call(this)
    }
    ,
    s.prototype.newGame = function() {
        this.track("New Game Button Pressed"),
        e.GameSaves.hasSaveGame = !0,
        e.GameSaves.bank = e.Config.defaultBank,
        e.GameSaves.results.length = 0,
        e.GameSaves.save(),
        this._nextScreen = new e.InterstitialAdScreen(new e.PlayScreen),
        this._intoMenuScreen.inputEnabled = !1,
        this._intoMenuScreen.gui.gotoAndPlay("toOff"),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"),
        this.dimmer.hide(!0)
    }
    ,
    s.prototype.resume = function() {
        this.track("Resume Game Button Pressed"),
        e.GameSaves.load(),
        this._nextScreen = new e.PlayScreen,
        this._intoMenuScreen.inputEnabled = !1,
        this._intoMenuScreen.gui.gotoAndPlay("toOff"),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"),
        this.dimmer.hide(!0)
    }
    ,
    s.prototype.back = function() {
        this.track("Back Button Pressed"),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"),
        this.dimmer.hide(!0),
        this.showHomeOption = !1,
        this.updateOptions()
    }
    ,
    s.prototype.newGameButton_onClick = function(t) {
        this.newGame()
    }
    ,
    s.prototype.resumeButton_onClick = function(t) {
        this.resume()
    }
    ,
    s.prototype.onHomePressed = function() {
        this.back(),
        i.prototype.onHomePressed.call(this)
    }
    ,
    s.prototype.handleBackPressed = function() {
        this.inputEnabled && this.onHomePressed(),
        i.prototype.handleBackPressed.call(this)
    }
    ,
    s.prototype.dimmer_onClick = function() {
        this.inputEnabled && this.onHomePressed()
    }
    ,
    s.prototype.update = function(t) {
        this.isFocused && "off" === this.gui.currentLabel && (this._nextScreen && this.screenManager.add(this._nextScreen),
        this._nextScreen = null,
        this.exit()),
        i.prototype.update.call(this, t)
    }
    ,
    t = s,
    e.ResumeMenuScreen = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this._denomination = t
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "denomination", {
        get: function() {
            return this._denomination
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "value", {
        get: function() {
            return this._denomination.value
        },
        enumerable: !1,
        configurable: !0
    }),
    e = i,
    t.Chip = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.offset = new createjs.Point(12 * Math.random() - 6,12 * Math.random() - 6),
        this._denomination = null,
        this.dragging = !1,
        this.display = t,
        this.display.controller = this,
        this.display.gotoAndStop(0),
        this.chipSwitch.gotoAndStop("init")
    }
    t = t.battleline || (t.battleline = {}),
    Object.defineProperty(i.prototype, "chipSwitch", {
        get: function() {
            return this.display.switch_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "denomination", {
        get: function() {
            return this._denomination
        },
        set: function(t) {
            this._denomination = t,
            null == this._denomination ? this.chipSwitch.gotoAndStop("init") : this.chipSwitch.gotoAndStop("dollars" + t.value)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.enableDragging = function() {
        this.dragging = !0,
        this.display.scaleX = this.display.scaleY = 120 / 262
    }
    ,
    i.prototype.disableDragging = function() {
        this.dragging = !1,
        this.display.scaleX = this.display.scaleY = 1
    }
    ,
    i.prototype.socket = function() {
        this.display.scaleX = this.display.scaleY = 72 / 262
    }
    ,
    i.prototype.drag = function() {
        var t = this.display.parent.globalToLocal(this.display.stage.mouseX, this.display.stage.mouseY);
        this.display.x = t.x,
        this.display.y = t.y,
        this.display.x -= 131 * this.display.scaleX,
        this.display.y -= 131 * this.display.scaleY
    }
    ,
    i.prototype.update = function(t) {
        this.dragging && this.display.stage && this.drag()
    }
    ,
    e = i,
    t.ChipDisplay = e
}(com = com || {}),
!function(t) {
    var i, s;
    function e(t) {
        var e = s.call(this, t) || this;
        e._denomination = null,
        e._clickingEnabled = !1,
        e._numChips = 0,
        e.numReturning = 0,
        e.origIndex = 0;
        return new i.ChipDisplay(t.chips_mc.c1_mc),
        new i.ChipDisplay(t.chips_mc.c2_mc),
        new i.ChipDisplay(t.chips_mc.c3_mc),
        e.dimmer = t.dimmer_mc,
        t.controller = e,
        t.isStackDisplay = !0,
        e.match(),
        e.setOff(),
        e
    }
    i = t.battleline || (t.battleline = {}),
    s = i.Button,
    __extends(e, s),
    Object.defineProperty(e.prototype, "chips", {
        get: function() {
            return this.display.chips_mc
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "chip1", {
        get: function() {
            return this.display.chips_mc.getChildAt(0).controller
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "chip2", {
        get: function() {
            return this.display.chips_mc.getChildAt(1).controller
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "chip3", {
        get: function() {
            return this.display.chips_mc.getChildAt(2).controller
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "topChip", {
        get: function() {
            for (var t = 2; 0 <= t; --t)
                if (this.chips.getChildAt(t).visible)
                    return this.chips.getChildAt(t).controller;
            return null
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "denomination", {
        get: function() {
            return this._denomination
        },
        set: function(t) {
            this._denomination = t,
            this.match()
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.match = function() {
        this.chip1.denomination = this._denomination,
        this.chip2.denomination = this._denomination,
        this.chip3.denomination = this._denomination,
        this.updateVisibility(),
        this.updateClicking()
    }
    ,
    e.prototype.getTopChipDisplay = function() {
        var t = new i.ChipDisplay(new guiLib.ChipDisplayClip)
          , e = (t.denomination = this._denomination,
        this.topChip);
        return t.display.x = e.display.x,
        t.display.y = e.display.y,
        this.chips.addChild(t.display),
        t
    }
    ,
    e.prototype.hideTopChipDisplay = function() {
        this.topChip.display.visible = !1
    }
    ,
    e.prototype.pop = function() {
        this.shuffle(!1)
    }
    ,
    e.prototype.push = function() {
        this.shuffle(!0)
    }
    ,
    e.prototype.shuffle = function(t) {
        t ? this.chips.setChildIndex(this.chips.getChildAt(0), 2) : this.chips.setChildIndex(this.chips.getChildAt(2), 0)
    }
    ,
    e.prototype.updateVisibility = function() {
        var t;
        null == this._denomination ? (this.chip1.display.visible = !1,
        this.chip2.display.visible = !1,
        this.chip3.display.visible = !1,
        this.dimmer.visible = !1,
        this._numChips = 0) : (t = Math.floor(i.GameSaves.bank / this.denomination.value),
        t -= this.numReturning,
        this.chip1.display.visible = !0,
        this.chip2.display.visible = !0,
        this.chip3.display.visible = !0,
        t <= 2 && (this.chip3.display.visible = !1),
        t <= 1 && (this.chip2.display.visible = !1),
        0 == t && (this.chip1.display.visible = !1),
        this.chip1.display.visible || this.chip2.display.visible || this.chip3.display.visible ? this.dimmer.visible = !0 : this.dimmer.visible = !1,
        this._numChips = t)
    }
    ,
    e.prototype.updateClicking = function(t) {
        void 0 === t && (t = 0),
        this._clickingEnabled && this._denomination && 0 < this._numChips ? this.enabled = !0 : this.enabled = !1
    }
    ,
    e.prototype.enableClicking = function() {
        this._clickingEnabled = !0,
        this.updateClicking()
    }
    ,
    e.prototype.disableClicking = function() {
        this._clickingEnabled = !1,
        this.updateClicking()
    }
    ,
    e.prototype.turnOn = function() {
        this.display.scaleX = this.display.scaleY = 1,
        "off" !== this.dimmer.currentLabel && "toOff" !== this.dimmer.currentLabel && this.dimmer.gotoAndPlay("toOff")
    }
    ,
    e.prototype.setOn = function() {
        this.display.scaleX = this.display.scaleY = 1,
        "off" !== this.dimmer.currentLabel && this.dimmer.gotoAndPlay("off")
    }
    ,
    e.prototype.setOff = function() {
        this.display.scaleX = this.display.scaleY = .9,
        "on" !== this.dimmer.currentLabel && this.dimmer.gotoAndPlay("on")
    }
    ,
    e.prototype.turnOff = function() {
        this.display.scaleX = this.display.scaleY = .9,
        "on" !== this.dimmer.currentLabel && "toOn" !== this.dimmer.currentLabel && ("off" === this.dimmer.currentLabel ? this.dimmer.gotoAndPlay("toOn") : this.dimmer.gotoAndPlay("on"))
    }
    ,
    t = e,
    i.StackDisplay = t
}(com = com || {}),
!function(t) {
    var i;
    function e(t) {
        this.value = 0,
        this.prefix = "",
        this.isDoubled = !1,
        this.display = t,
        this.textDisplay.text = "",
        this.display.gotoAndStop("off")
    }
    i = t.battleline || (t.battleline = {}),
    Object.defineProperty(e.prototype, "textDisplay", {
        get: function() {
            return this.display.holder_mc.text_mc.text_txt
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.setAmount = function(t, e) {
        if (void 0 === e && (e = !0),
        t < 0)
            throw new Error("negative!");
        this.value = t,
        0 === t ? this.display.currentLabel.indexOf("f") < 0 && (e ? this.display.gotoAndPlay("toOff") : this.display.gotoAndStop("off")) : (this.textDisplay.text = this.prefix + i.Util.toNumericString(t),
        this.isDoubled && (this.textDisplay.text += " x 2"),
        this.display.currentLabel.indexOf("n") < 0 && (e ? this.display.gotoAndPlay("toOn") : this.display.gotoAndStop("on")))
    }
    ,
    t = e,
    i.AnimAmountText = t
}(com = com || {}),
!function(t) {
    var i;
    function e(t) {
        this.stacks = [],
        this.dealer = null,
        this.selectedStack = null,
        this.display = t;
        this.totalText = new i.AnimAmountText(t.total_mc),
        this.lowest = new i.StackDisplay(t.lowestBtn_mc),
        this.low = new i.StackDisplay(t.lowBtn_mc),
        this.high = new i.StackDisplay(t.highBtn_mc),
        this.highest = new i.StackDisplay(t.highestBtn_mc),
        this.stacks.push(this.highest),
        this.stacks.push(this.high),
        this.stacks.push(this.low),
        this.stacks.push(this.lowest),
        this.highest.origIndex = this.display.getChildIndex(this.highest.display),
        this.high.origIndex = this.display.getChildIndex(this.high.display),
        this.low.origIndex = this.display.getChildIndex(this.low.display),
        this.lowest.origIndex = this.display.getChildIndex(this.lowest.display),
        this.match(i.GameSaves.bank),
        this.disableStackSelection(),
        this.highest.onDown.add(this.stack_down, this),
        this.high.onDown.add(this.stack_down, this),
        this.low.onDown.add(this.stack_down, this),
        this.lowest.onDown.add(this.stack_down, this)
    }
    i = t.battleline || (t.battleline = {}),
    e.prototype.match = function(t) {
        this.bankTotal = t;
        var e = new i.Bank(t);
        this.highest.denomination = e.highest,
        this.high.denomination = e.high,
        this.low.denomination = e.low,
        this.lowest.denomination = e.lowest,
        this.totalText.prefix = "$",
        this.totalText.setAmount(t, !1),
        this.selectedStack && null === this.selectedStack.denomination && (this.high.denomination ? this.selectStack(this.high) : this.low.denomination ? this.selectStack(this.low) : this.selectStack(this.lowest))
    }
    ,
    e.prototype.stackMatch = function(t) {
        void 0 === t && (t = !1),
        this.highest.match(),
        this.high.match(),
        this.low.match(),
        this.lowest.match(),
        this.totalText.prefix = "$",
        this.totalText.setAmount(this.bankTotal, t)
    }
    ,
    e.prototype.getStackDisplayFor = function(t) {
        return this.highest.denomination === t ? this.highest : this.high.denomination === t ? this.high : this.low.denomination === t ? this.low : this.lowest.denomination === t ? this.lowest : (i.Logger.warn("Tried to get stack display that didn't exist!"),
        null)
    }
    ,
    e.prototype.getDenominationsHighToLow = function() {
        var t = new Array;
        return this.highest.denomination && t.push(this.highest.denomination),
        this.high.denomination && t.push(this.high.denomination),
        this.low.denomination && t.push(this.low.denomination),
        this.lowest.denomination && t.push(this.lowest.denomination),
        t
    }
    ,
    e.prototype.selectStackByDenom = function(t) {
        for (var e = 0; e < this.stacks.length; ++e)
            if (this.stacks[e].denomination === t) {
                this.selectStack(this.stacks[e]);
                break
            }
    }
    ,
    e.prototype.selectStack = function(t) {
        for (var e = 0; e < this.stacks.length; ++e)
            this.display.setChildIndex(this.stacks[e].display, this.stacks[e].origIndex),
            this.stacks[e] !== t && this.stacks[e].turnOff();
        this.display.setChildIndex(t.display, this.display.numChildren - 1),
        t.turnOn(),
        this.selectedStack = t
    }
    ,
    e.prototype.enableStackSelection = function() {
        this.display.mouseEnabled = this.display.mouseChildren = !0,
        this.highest.enableClicking(),
        this.high.enableClicking(),
        this.low.enableClicking(),
        this.lowest.enableClicking()
    }
    ,
    e.prototype.disableStackSelection = function() {
        this.display.mouseEnabled = this.display.mouseChildren = !1,
        this.highest.disableClicking(),
        this.high.disableClicking(),
        this.low.disableClicking(),
        this.lowest.disableClicking()
    }
    ,
    e.prototype.stack_down = function(t) {
        this.selectStack(t),
        i.MenuSounds.hitStack(),
        this.dealer.stackMouseDown()
    }
    ,
    t = e,
    i.BankDisplay = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.display = t,
        this.set(!1, !1)
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.set = function(t, e) {
        var i = t ? "on" : "off"
          , t = t ? "toOn" : "toOff";
        e ? this.display.currentLabel !== i && this.display.currentLabel !== t && this.display.gotoAndPlay(t) : this.display.currentLabel !== i && this.display.gotoAndPlay(i)
    }
    ,
    e = i,
    t.HighlightDisplay = e
}(com = com || {}),
!function(t) {
    var a;
    function e(t, e, i) {
        var s, n;
        if (this.wheelSlots = [],
        this.boardDisplay = t,
        this.str = e,
        this.highlightDisplay = new a.HighlightDisplay(t.display.highlights_mc[i]),
        "0" === e)
            this.wheelSlots.push(a.WheelSlot.Green0);
        else if ("00" === e)
            this.wheelSlots.push(a.WheelSlot.Green00);
        else if ("1-12" === e)
            for (s = 1; s <= 12; ++s)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("13-24" === e)
            for (s = 13; s <= 24; ++s)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("25-36" === e)
            for (s = 25; s <= 36; ++s)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("1-18" === e)
            for (s = 1; s <= 18; ++s)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("19-36" === e)
            for (s = 19; s <= 36; ++s)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("Even" === e)
            for (s = 2; s <= 36; s += 2)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("Odd" === e)
            for (s = 1; s <= 35; s += 2)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("Red" === e)
            for (s = 1; s <= 36; ++s)
                n = a.WheelSlot.values[s],
                n.wheelColor === a.WheelColor.Red && this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("Black" === e)
            for (s = 1; s <= 36; ++s)
                n = a.WheelSlot.values[s],
                n.wheelColor === a.WheelColor.Black && this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("1st" === e)
            for (s = 1; s <= 34; s += 3)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("2nd" === e)
            for (s = 2; s <= 35; s += 3)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else if ("3rd" === e)
            for (s = 3; s <= 36; s += 3)
                this.wheelSlots.push(a.WheelSlot.values[s]);
        else
            this.wheelSlots.push(a.WheelSlot.values[parseInt(e)])
    }
    a = t.battleline || (t.battleline = {}),
    a.SquareDisplay = e
}(com = com || {}),
!function(t) {
    var i;
    function e(t, e, i, s) {
        this.squareDisplays = new Array,
        this.point = new createjs.Point,
        this.bets = [],
        this.boardDisplay = t,
        this.display = t.display.spots_mc[e],
        this.display.regX = 0,
        this.display.regY = 0,
        this.point.x = this.display.x,
        this.point.y = this.display.y,
        this.payout = s;
        for (var n = 0; n < i.length; ++n)
            this.squareDisplays.push(t.getSquareDisplayByStr(i[n]));
        this.display.hitArea_mc ? this.bounds = this.display.hitArea_mc.getBounds() : this.bounds = null
    }
    i = t.battleline || (t.battleline = {}),
    e.prototype.turnOn = function() {
        for (var t = 0; t < this.squareDisplays.length; ++t) {
            var e = this.squareDisplays[t];
            e.highlightDisplay.set(!0, !0)
        }
        i.MenuSounds.highlight()
    }
    ,
    e.prototype.turnOff = function() {
        for (var t = 0; t < this.squareDisplays.length; ++t) {
            var e = this.squareDisplays[t];
            e.highlightDisplay.set(!1, !0)
        }
    }
    ,
    e.prototype.addBet = function(t) {
        0 < this.bets.length && (this.bets[this.bets.length - 1].chipDisplay.display.visible = !1),
        this.bets.push(t)
    }
    ,
    e.prototype.removeBet = function(t) {
        this.bets.splice(this.bets.indexOf(t), 1),
        0 < this.bets.length && (this.bets[this.bets.length - 1].chipDisplay.display.visible = !0)
    }
    ,
    t = e,
    i.SpotDisplay = t
}(com = com || {}),
!function(t) {
    var s;
    function e(t) {
        this.squareDisplays = new Array,
        this.spotDisplays = new Array,
        this.highlightedSpot = null,
        this.highlightingActive = !1,
        this.display = t,
        this.initSquares(),
        this.initSpots(),
        this.chipsLayer = t.chips_mc,
        this.display.cursor = "pointer"
    }
    s = t.battleline || (t.battleline = {}),
    e.prototype.initSquares = function() {
        var t = this.display;
        t.highlights_mc;
        this.squareDisplays.push(new s.SquareDisplay(this,"00","h00_mc"));
        for (var e = 0; e <= 36; ++e)
            this.squareDisplays.push(new s.SquareDisplay(this,e.toString(),"h" + e.toString() + "_mc"));
        this.squareDisplays.push(new s.SquareDisplay(this,"1-12","h1t12_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"13-24","h13t24_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"25-36","h25t36_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"1-18","h1t18_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"19-36","h19t36_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"Even","hEven_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"Odd","hOdd_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"Red","hRed_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"Black","hBlack_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"1st","h1st_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"2nd","h2nd_mc")),
        this.squareDisplays.push(new s.SquareDisplay(this,"3rd","h3rd_mc"))
    }
    ,
    e.prototype.initSpots = function() {
        this.spotDisplays.push(new s.SpotDisplay(this,"n00_mc",["00"],35));
        for (var t = 0; t <= 36; ++t)
            this.spotDisplays.push(new s.SpotDisplay(this,"n" + t.toString() + "_mc",[t.toString()],35));
        for (this.spotDisplays.push(new s.SpotDisplay(this,"n1t12_mc",["1-12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],2)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n13t24_mc",["13-24", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],2)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n25t36_mc",["25-36", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],2)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n1t18_mc",["1-18", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n19t36_mc",["19-36", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"nEven_mc",["Even", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"nOdd_mc",["Odd", "1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"nRed_mc",["Red", "1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"nBlack_mc",["Black", "2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "24", "22", "26", "28", "29", "31", "33", "35"],1)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n1st_mc",["1st", "1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"],2)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n2nd_mc",["2nd", "2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"],2)),
        this.spotDisplays.push(new s.SpotDisplay(this,"n3rd_mc",["3rd", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],2)),
        t = 1; t <= 12; ++t) {
            var e = [];
            e.push(3 * (t - 1) + 1 + ""),
            e.push(3 * (t - 1) + 2 + ""),
            e.push(3 * (t - 1) + 3 + ""),
            this.spotDisplays.push(new s.SpotDisplay(this,"s" + t.toString() + "_mc",e,11)),
            this.spotDisplays.push(new s.SpotDisplay(this,"s" + t.toString() + "a_mc",e,11))
        }
        for (t = 1; t <= 12; ++t) {
            var e = []
              , i = 1 === t ? (e.push("00"),
            e.push("0"),
            e.push(3 * (t - 1) + 1 + ""),
            e.push(3 * (t - 1) + 2 + ""),
            e.push(3 * (t - 1) + 3 + ""),
            6) : (e.push(3 * (t - 2) + 1 + ""),
            e.push(3 * (t - 2) + 2 + ""),
            e.push(3 * (t - 2) + 3 + ""),
            e.push(3 * (t - 1) + 1 + ""),
            e.push(3 * (t - 1) + 2 + ""),
            e.push(3 * (t - 1) + 3 + ""),
            5);
            this.spotDisplays.push(new s.SpotDisplay(this,"ss" + t.toString() + "_mc",e,i)),
            this.spotDisplays.push(new s.SpotDisplay(this,"ss" + t.toString() + "a_mc",e,i))
        }
        for (t = 1; t <= 33; ++t)
            e = [],
            e.push(t + ""),
            e.push(t + 3 + ""),
            this.spotDisplays.push(new s.SpotDisplay(this,"hs" + t.toString() + "_mc",e,17));
        for (t = 1; t <= 35; ++t)
            t % 3 != 0 && (e = [],
            e.push(t + ""),
            e.push(t + 1 + ""),
            this.spotDisplays.push(new s.SpotDisplay(this,"vs" + t.toString() + "_mc",e,17)));
        for (this.spotDisplays.push(new s.SpotDisplay(this,"sp000_mc",["00", "0"],17)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp003_mc",["00", "3"],17)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp002_mc",["00", "2"],17)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp02_mc",["0", "2"],17)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp01_mc",["0", "1"],17)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp0023_mc",["00", "2", "3"],11)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp0002_mc",["00", "0", "2"],11)),
        this.spotDisplays.push(new s.SpotDisplay(this,"sp012_mc",["0", "1", "2"],11)),
        t = 1; t <= 32; ++t)
            t % 3 != 0 && (e = [],
            e.push(t + ""),
            e.push(t + 1 + ""),
            e.push(t + 3 + ""),
            e.push(t + 4 + ""),
            this.spotDisplays.push(new s.SpotDisplay(this,"c" + t.toString() + "_mc",e,8)))
    }
    ,
    e.prototype.getSquareDisplayByStr = function(t) {
        for (var e = 0; e < this.squareDisplays.length; ++e)
            if (this.squareDisplays[e].str === t)
                return this.squareDisplays[e];
        throw new Error("No square found with str: " + t)
    }
    ,
    e.prototype.highlightNearestSpot = function(t, e) {
        for (var i = this.display.globalToLocal(t, e), s = null, n = 0, a = 0; a < this.spotDisplays.length; ++a) {
            var r = this.spotDisplays[a];
            if (r.bounds) {
                var o = r.display.hitArea_mc.globalToLocal(t, e);
                if (r.bounds.contains(o.x, o.y)) {
                    s = r;
                    break
                }
            } else {
                var o = new createjs.Point(i.x - r.point.x,i.y - r.point.y)
                  , h = o.x * o.x + o.y * o.y;
                (null === s || h < n) && (s = r,
                n = h)
            }
        }
        if (this.highlightedSpot !== s) {
            for (var l = [], a = 0; a < s.squareDisplays.length; ++a)
                l.push(s.squareDisplays[a].highlightDisplay),
                s.squareDisplays[a].highlightDisplay.set(!0, !0);
            if (this.highlightedSpot)
                for (a = 0; a < this.highlightedSpot.squareDisplays.length; ++a)
                    l.indexOf(this.highlightedSpot.squareDisplays[a].highlightDisplay) < 0 && this.highlightedSpot.squareDisplays[a].highlightDisplay.set(!1, !0);
            this.highlightedSpot = s
        }
    }
    ,
    e.prototype.clearHighlightedSpot = function() {
        this.highlightedSpot && (this.highlightedSpot.turnOff(),
        this.highlightedSpot = null)
    }
    ,
    e.prototype.isOverCheck = function() {
        var t = this.display.hitArea_mc.children;
        if (this.display.stage)
            for (var e = 0; e < t.length; ++e) {
                var i = t[e].globalToLocal(this.display.stage.mouseX, this.display.stage.mouseY);
                if (0 <= i.x && i.x <= 100 && 0 <= i.y && i.y <= 100)
                    return !0
            }
        return !1
    }
    ,
    e.prototype.enableHighlighting = function() {
        this.highlightingActive = !0,
        this.display.stage && this.isOverCheck() && this.highlightNearestSpot(this.display.stage.mouseX, this.display.stage.mouseY)
    }
    ,
    e.prototype.disableHighlighting = function() {
        this.highlightingActive = !1,
        this.highlightedSpot && this.clearHighlightedSpot()
    }
    ,
    e.prototype.update = function(t) {
        this.highlightingActive && this.display.stage && this.isOverCheck() ? this.highlightNearestSpot(this.display.stage.mouseX, this.display.stage.mouseY) : this.highlightedSpot && this.clearHighlightedSpot()
    }
    ,
    t = e,
    s.BoardDisplay = t
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        t = this.display = t;
        this.textField = t.text_mc.text_txt,
        this.textField.text = "",
        this.display.gotoAndStop("off")
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.setValue = function(t) {
        "" === t || "0" === t || "$0" === t || null == t ? "off" !== this.display.currentLabel && "toOff" !== this.display.currentLabel && this.display.gotoAndPlay("toOff") : (this.textField.text = t,
        "on" !== this.display.currentLabel && "toOn" !== this.display.currentLabel && this.display.gotoAndPlay("toOn"))
    }
    ,
    e = i,
    t.ValueText = e
}(com = com || {}),
!function(t) {
    var e;
    function i(t) {
        this.display = t
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.turnOn = function() {
        "on" !== this.display.currentLabel && "toOn" !== this.display.currentLabel && this.display.gotoAndPlay("toOn")
    }
    ,
    i.prototype.turnOff = function() {
        "off" !== this.display.currentLabel && "toOff" !== this.display.currentLabel && this.display.gotoAndPlay("toOff")
    }
    ,
    i.prototype.setOff = function() {
        "off" !== this.display.currentLabel && this.display.gotoAndPlay("off")
    }
    ,
    e = i,
    t.OnOffAnim = e
}(com = com || {}),
!function(t) {
    var s;
    function e(t) {
        this.textFields = new Array,
        this.results = new Array;
        for (var e = this.display = t, i = 0; i <= 10; ++i) {
            var s = e["n" + i.toString() + "_mc"].text_txt;
            s.visible = !1,
            s.text = "",
            this.textFields.push(s)
        }
    }
    s = t.battleline || (t.battleline = {}),
    e.prototype.addResult = function(t) {
        this.results.unshift(t),
        11 < this.results.length && (this.results.length = 11),
        this.refresh()
    }
    ,
    e.prototype.addResults = function(t) {
        for (var e = t.length - 1; 0 <= e; --e)
            this.results.unshift(t[e]);
        11 < this.results.length && (this.results.length = 11),
        this.refresh()
    }
    ,
    e.prototype.refresh = function() {
        for (var t = 0; t <= 10; ++t) {
            var e, i = this.textFields[t];
            t >= this.results.length ? (i.visible = !1,
            i.text = "") : (e = this.results[t],
            i.color = s.Config[e.wheelColor.toLowerCase() + "Color"],
            i.text = e.wheelNumber,
            i.visible = !0)
        }
    }
    ,
    t = e,
    s.ResultsDisplay = t
}(com = com || {}),
!function(t) {
    function e(t, e) {
        this.isOldBet = !1,
        this.spotDisplay = t,
        this.chipDisplay = e
    }
    t = t.battleline || (t.battleline = {}),
    t.Bet = e
}(com = com || {}),
!function(t) {
    var a;
    function e(t, e, i) {
        this.betTotal = 0,
        this.draggingChip = null,
        this.bets = [],
        this.bettingEnabled = !1,
        this.pastBets = [],
        this.screen = t,
        this.bankDisplay = e,
        this.boardDisplay = i,
        this.bankDisplay.dealer = this,
        this.bankTotal = a.GameSaves.bank,
        this.boardDisplay_mouseDown = this.boardDisplay_mouseDown.bind(this),
        this.boardDisplay.display.addEventListener("mousedown", this.boardDisplay_mouseDown),
        this.boardDisplay.display.mouseEnabled = this.boardDisplay.display.mouseChildren = !1,
        this.stage_mouseUp_leave = this.stage_mouseUp_leave.bind(this),
        a.Roulette.instance.gameView.stage.addEventListener("stagemouseup", this.stage_mouseUp_leave),
        a.Roulette.instance.gameView.stage.addEventListener("mouseleave", this.stage_mouseUp_leave),
        this.screen.undoButton.onClick.add(this.undoButton_onClick, this),
        this.screen.undoButton.display.visible = !1,
        this.screen.clearButton.onClick.add(this.clearButton_onClick, this),
        this.screen.clearButton.display.visible = !1,
        this.screen.spinButton.onClick.add(this.spinButton_onClick, this),
        this.screen.spinButton.display.visible = !1,
        this.screen.placeBetsTitle.setOff()
    }
    a = t.battleline || (t.battleline = {}),
    e.prototype.dispose = function() {
        this.boardDisplay.display.removeEventListener("mousedown", this.boardDisplay_mouseDown),
        a.Roulette.instance.gameView.stage.removeEventListener("stagemouseup", this.stage_mouseUp_leave),
        a.Roulette.instance.gameView.stage.removeEventListener("mouseleave", this.stage_mouseUp_leave)
    }
    ,
    e.prototype.stage_mouseUp_leave = function() {
        this.bettingEnabled && this.draggingChip && this.dropChip(!0)
    }
    ,
    e.prototype.boardDisplay_mouseDown = function() {
        this.bettingEnabled && this.pickupChip()
    }
    ,
    e.prototype.stackMouseDown = function() {
        this.bettingEnabled && this.pickupChip()
    }
    ,
    e.prototype.pickupChip = function() {
        var t;
        null !== this.bankDisplay.selectedStack && null !== this.bankDisplay.selectedStack.denomination && (t = new a.ChipDisplay(new guiLib.ChipDisplayClip),
        t.denomination = this.bankDisplay.selectedStack.denomination,
        this.boardDisplay.chipsLayer.addChild(t.display),
        this.draggingChip = t,
        t.enableDragging(),
        t.drag(),
        this.bankDisplay.selectedStack.pop(),
        this.boardDisplay.enableHighlighting())
    }
    ,
    e.prototype.dropChip = function(t) {
        var e = this.draggingChip
          , i = (this.draggingChip = null,
        e.disableDragging(),
        this.boardDisplay.chipsLayer.removeChild(e.display),
        this.boardDisplay.highlightedSpot);
        this.boardDisplay.disableHighlighting(),
        t && i ? (a.MenuSounds.playChip(),
        this.placeBet(new a.Bet(i,e))) : (a.MenuSounds.returnChip(),
        this.bankDisplay.selectedStack && this.bankDisplay.selectedStack.push())
    }
    ,
    e.prototype.placeBet = function(t) {
        var e = t.chipDisplay
          , i = t.spotDisplay;
        this.boardDisplay.chipsLayer.addChild(e.display),
        e.socket(),
        e.display.x = i.display.x - 131 * e.display.scaleX,
        e.display.y = i.display.y - 131 * e.display.scaleY,
        this.bets.push(t),
        i.addBet(t),
        this.betTotal += t.chipDisplay.denomination.value,
        this.bankTotal -= t.chipDisplay.denomination.value,
        this.screen.undoButton.display.visible = !0,
        this.screen.clearButton.display.visible = !1,
        this.screen.betTotalValueText.setValue("$" + a.Util.toNumericString(this.betTotal, 0)),
        this.bankDisplay.match(this.bankTotal),
        this.screen.spinButton.display.visible = !0
    }
    ,
    e.prototype.placeAllBets = function(t) {
        if (0 !== t.length) {
            for (var e = 0; e < t.length; ++e) {
                var i = t[e]
                  , s = (i.isOldBet = !0,
                i.chipDisplay)
                  , n = i.spotDisplay;
                this.boardDisplay.chipsLayer.addChild(s.display),
                s.socket(),
                s.display.x = n.display.x - 131 * s.display.scaleX,
                s.display.y = n.display.y - 131 * s.display.scaleY,
                s.display.visible = !0,
                this.pastBets.push(i),
                n.addBet(i),
                this.betTotal += i.chipDisplay.denomination.value,
                this.bankTotal -= i.chipDisplay.denomination.value
            }
            this.screen.undoButton.display.visible = !1,
            this.screen.clearButton.display.visible = !0,
            this.screen.betTotalValueText.setValue("$" + a.Util.toNumericString(this.betTotal, 0)),
            this.bankDisplay.match(this.bankTotal),
            this.screen.spinButton.display.visible = !0
        }
    }
    ,
    e.prototype.undoBet = function() {
        var t;
        this.screen.track("Undo Button Pressed"),
        this.bettingEnabled && 0 !== this.bets.length && (t = this.bets[this.bets.length - 1],
        this.bets.splice(this.bets.length - 1, 1),
        t.spotDisplay.removeBet(t),
        this.boardDisplay.chipsLayer.removeChild(t.chipDisplay.display),
        this.betTotal -= t.chipDisplay.denomination.value,
        this.bankTotal += t.chipDisplay.denomination.value,
        0 === this.bets.length && (this.screen.undoButton.display.visible = !1,
        0 < this.pastBets.length ? this.screen.clearButton.display.visible = !0 : this.screen.spinButton.display.visible = !1),
        a.MenuSounds.undo(),
        this.screen.betTotalValueText.setValue("$" + a.Util.toNumericString(this.betTotal, 0)),
        this.bankDisplay.match(this.bankTotal),
        this.bankDisplay.selectStackByDenom(t.chipDisplay.denomination))
    }
    ,
    e.prototype.clearPastBets = function() {
        if (this.screen.track("Clear Button Pressed"),
        a.MenuSounds.clear(),
        this.bettingEnabled && 0 !== this.pastBets.length) {
            for (var t = 0; t < this.pastBets.length; ++t) {
                var e = this.pastBets[t];
                e.spotDisplay.removeBet(e),
                this.boardDisplay.chipsLayer.removeChild(e.chipDisplay.display),
                this.betTotal -= e.chipDisplay.denomination.value,
                this.bankTotal += e.chipDisplay.denomination.value
            }
            this.pastBets.length = 0,
            this.screen.betTotalValueText.setValue("$" + a.Util.toNumericString(this.betTotal, 0)),
            this.bankDisplay.match(this.bankTotal),
            this.screen.clearButton.display.visible = !1,
            this.screen.spinButton.display.visible = !1
        }
    }
    ,
    e.prototype.spin = function() {
        !this.bettingEnabled || this.betTotal <= 0 || (this.disableBetting(),
        this.screen.spin())
    }
    ,
    e.prototype.enableBetting = function() {
        this.bettingEnabled || (this.bettingEnabled = !0,
        this.screen.placeBetsTitle.turnOn(),
        null === this.bankDisplay.selectedStack && this.bankDisplay.selectStack(this.bankDisplay.lowest),
        this.bankDisplay.enableStackSelection(),
        this.boardDisplay.display.mouseEnabled = this.boardDisplay.display.mouseChildren = !0,
        0 < this.pastBets.length && (this.screen.spinButton.display.visible = !0,
        this.screen.clearButton.display.visible = !0))
    }
    ,
    e.prototype.disableBetting = function() {
        this.bettingEnabled && (this.bettingEnabled = !1,
        this.screen.placeBetsTitle.turnOff(),
        this.draggingChip && this.dropChip(!1),
        this.bankDisplay.disableStackSelection(),
        this.boardDisplay.display.mouseEnabled = this.boardDisplay.display.mouseChildren = !1,
        this.screen.undoButton.display.visible = !1,
        this.screen.clearButton.display.visible = !1,
        this.screen.spinButton.display.visible = !1)
    }
    ,
    e.prototype.getAllBets = function() {
        if (this.pastBets) {
            for (var t = this.pastBets.slice(0), e = 0; e < this.bets.length; ++e)
                t.push(this.bets[e]);
            return t
        }
        return this.pastBets = [],
        []
    }
    ,
    e.prototype.archiveBets = function() {
        for (var t = 0; t < this.bets.length; ++t)
            this.pastBets.push(this.bets[t]);
        this.bets.length = 0
    }
    ,
    e.prototype.clearBets = function() {
        for (var t = this.getAllBets(), e = 0; e < t.length; ++e) {
            var i = t[e]
              , s = (i.chipDisplay,
            i.spotDisplay);
            this.boardDisplay.chipsLayer.removeChild(i.chipDisplay.display),
            s.removeBet(i)
        }
        this.bets = [],
        this.pastBets = [],
        this.betTotal = 0,
        this.bankTotal = a.GameSaves.bank,
        this.screen.betTotalValueText.setValue("$0"),
        this.screen.bankDisplay.match(this.bankTotal)
    }
    ,
    e.prototype.undoButton_onClick = function(t) {
        this.undoBet()
    }
    ,
    e.prototype.clearButton_onClick = function(t) {
        this.clearPastBets()
    }
    ,
    e.prototype.spinButton_onClick = function(t) {
        a.MenuSounds.spin(),
        this.spin()
    }
    ,
    e.prototype.update = function(t) {
        this.draggingChip && this.draggingChip.update(t),
        this.boardDisplay.update(t)
    }
    ,
    t = e,
    a.Dealer = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s() {
        var t = i.call(this, "Lose Menu", 0 < e.GameSaves.bank, !0, !0, !0) || this;
        return t.onClosing = new e.DelegateEvent,
        t.isHome = !1,
        t.minShowTime = 200,
        t.showTime = 0,
        t.isPopup = !0,
        t.gui_mouseDown = t.gui_mouseDown.bind(t),
        t
    }
    e = t.battleline || (t.battleline = {}),
    i = e.BaseScreen,
    __extends(s, i),
    s.prototype.initialize = function() {
        var t = this.gui = new guiLib.LoseMenuGui;
        this.display.addChild(t),
        this.refresh(),
        this.dimmer = this.hitArea = new e.Dimmer(t.dimmerAnim_mc.dimmer_mc),
        this.titleText = t.clip_mc.title_mc.text_txt,
        this.titleText.stroke = e.Config.popupTitleStrokeWidth,
        this.titleText.strokeStyle = e.Config.popupTitleStrokeStyle,
        this.gui.addEventListener("mousedown", this.gui_mouseDown),
        e.AudioManager.playCue("dealer_wins"),
        this.gui.gotoAndPlay("toOn"),
        i.prototype.initialize.call(this)
    }
    ,
    s.prototype.added = function() {
        i.prototype.added.call(this)
    }
    ,
    s.prototype.removed = function() {
        i.prototype.removed.call(this)
    }
    ,
    s.prototype.done = function() {
        e.MenuSounds.forward(),
        this.isHome = !1,
        this.close()
    }
    ,
    s.prototype.home = function() {
        this.isHome = !0,
        this.close()
    }
    ,
    s.prototype.close = function() {
        this.onClosing.invoke(this),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"),
        (this.isHome || 0 < e.GameSaves.bank) && this.gui.dimmerAnim_mc.gotoAndPlay("toOff")
    }
    ,
    s.prototype.gui_mouseDown = function(t) {
        this.showTime >= this.minShowTime && (this.track("Continue"),
        this.done())
    }
    ,
    s.prototype.onHomePressed = function() {
        i.prototype.onHomePressed.call(this),
        this.home()
    }
    ,
    s.prototype.update = function(t) {
        this.showTime < this.minShowTime && (this.showTime += t,
        this.showTime >= this.minShowTime) && (this.gui.cursor = "pointer"),
        "off" === this.gui.currentLabel && this.exit(),
        i.prototype.update.call(this, t)
    }
    ,
    t = s,
    e.LoseMenuScreen = t
}(com = com || {}),
!function(t) {
    var s, n;
    function e(t, e) {
        var i = n.call(this, "Win Menu", !0, !0, !0, !0) || this;
        return i.onClosing = new s.DelegateEvent,
        i.isHome = !1,
        i.minShowTime = 200,
        i.showTime = 0,
        i.isPopup = !0,
        i.amount = t,
        i.newRecord = e,
        i.hitArea_mouseDown = i.hitArea_mouseDown.bind(i),
        i
    }
    s = t.battleline || (t.battleline = {}),
    n = s.BaseScreen,
    __extends(e, n),
    e.prototype.initialize = function() {
        var t = this.gui = new guiLib.WinMenuGui;
        this.display.addChild(t),
        this.refresh(),
        this.dimmer = this.hitArea = new s.Dimmer(t.dimmer_mc),
        this.titleText = t.clip_mc.title_mc.text_txt,
        this.sparkleAnim = t.sparkles_mc,
        this.rateButton = new s.Button(t.clip_mc.rateBtn_mc),
        this.record = t.clip_mc.record_mc,
        this.recordText = t.clip_mc.record_mc.score_txt,
        this.sparkleAnim.mouseEnabled = !1,
        this.sparkleAnim.mouseChildren = !1,
        t.clip_mc.title_mc.mouseEnabled = !1,
        this.titleText.stroke = s.Config.popupTitleStrokeWidth,
        this.titleText.strokeStyle = s.Config.popupTitleStrokeStyle,
        this.recordText.text = "$" + s.Util.toNumericString(s.Records.money),
        this.recordText.stroke = s.Config.popupTitleStrokeWidth,
        this.recordText.strokeStyle = s.Config.popupTitleStrokeStyle,
        this.newRecord || (this.record.visible = !1),
        this.hitArea.display.addEventListener("mousedown", this.hitArea_mouseDown),
        this.rateButton.clickCue = s.MenuSounds.getForward(),
        this.amount >= s.Config.winHighAmount ? (this.titleText.text = "Massive Win $" + s.Util.toNumericString(this.amount),
        this.sparkleAnim.gotoAndPlay("run")) : this.amount >= s.Config.winMediumAmount ? (this.titleText.text = "Big Win $" + s.Util.toNumericString(this.amount),
        this.sparkleAnim.gotoAndPlay("run")) : (this.titleText.text = "Win $" + s.Util.toNumericString(this.amount),
        this.sparkleAnim.visible = !1),
        s.AudioManager.playCue("player_wins"),
        this.rateButton.onClick.add(this.rateButton_onClick, this),
        !1 !== s.Config.showRateUsButton && this.newRecord || (this.rateButton.display.visible = !1),
        this.gui.gotoAndPlay("toOn"),
        n.prototype.initialize.call(this)
    }
    ,
    e.prototype.added = function() {
        n.prototype.added.call(this)
    }
    ,
    e.prototype.removed = function() {
        n.prototype.removed.call(this)
    }
    ,
    e.prototype.done = function() {
        this.isHome = !1,
        this.close()
    }
    ,
    e.prototype.home = function() {
        this.isHome = !0,
        this.close()
    }
    ,
    e.prototype.close = function() {
        this.onClosing.invoke(this),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff")
    }
    ,
    e.prototype.hitArea_mouseDown = function(t) {
        this.showTime >= this.minShowTime && (this.track("Continue"),
        this.done())
    }
    ,
    e.prototype.onHomePressed = function() {
        n.prototype.onHomePressed.call(this),
        this.home()
    }
    ,
    e.prototype.rateButton_onClick = function(t) {
        this.track("Feedback Button Pressed"),
        s.Util.openLink(!s.App.isWebApp, s.Config.rateUsURL)
    }
    ,
    e.prototype.update = function(t) {
        this.showTime < this.minShowTime && (this.showTime += t,
        this.showTime >= this.minShowTime) && (this.gui.cursor = "pointer"),
        "off" === this.gui.currentLabel && this.exit(),
        n.prototype.update.call(this, t)
    }
    ,
    t = e,
    s.WinMenuScreen = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s() {
        var t = i.call(this, "Game Over Menu", !1, !0, !0, !0) || this;
        return t._nextScreen = null,
        t.isPopup = !0,
        t
    }
    e = t.battleline || (t.battleline = {}),
    i = e.BaseScreen,
    __extends(s, i),
    s.prototype.initialize = function() {
        var t = this.gui = new guiLib.GameOverMenuGui;
        this.display.addChild(t),
        this.refresh(),
        this.dimmer = new e.Dimmer(t.dimmer_mc),
        this.newGameButton = new e.Button(t.clip_mc.newGameBtn_mc),
        this.titleText = t.clip_mc.title_mc.text_txt,
        this.newGameButton.clickCue = e.MenuSounds.getForward(),
        this.newGameButton.onClick.add(this.newGameButton_onClick, this),
        this.titleText.stroke = e.Config.popupTitleStrokeWidth,
        this.titleText.strokeStyle = e.Config.popupTitleStrokeStyle,
        this.gui.gotoAndPlay("toOn"),
        i.prototype.initialize.call(this)
    }
    ,
    s.prototype.added = function() {
        i.prototype.added.call(this)
    }
    ,
    s.prototype.removed = function() {
        i.prototype.removed.call(this)
    }
    ,
    s.prototype.newGameButton_onClick = function(t) {
        this.track("New Game Button Pressed"),
        e.App.isWebApp ? e.App.reload() : (this._nextScreen = new e.IntroMenuScreen,
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"))
    }
    ,
    s.prototype.update = function(t) {
        "off" === this.gui.currentLabel && (null != this._nextScreen && this.screenManager.add(this._nextScreen),
        this.exit()),
        i.prototype.update.call(this, t)
    }
    ,
    t = s,
    e.GameOverMenuScreen = t
}(com = com || {}),
!function(t) {
    var e;
    function i() {
        this.index = 0,
        this.randSet = []
    }
    t = t.battleline || (t.battleline = {}),
    i.prototype.reset = function() {
        this.index = 0
    }
    ,
    i.prototype.nextNumber = function() {
        this.index >= this.randSet.length && this.randSet.push(Math.random());
        var t = this.randSet[this.index];
        return this.index++,
        t
    }
    ,
    e = i,
    t.Random = e
}(com = com || {}),
!function(t) {
    var i, s;
    function e() {
        var t = s.call(this, "Spin", !1, !0, !0, !0) || this;
        t.endDelay = 2500,
        t.displayedOutcome = !1,
        t.slatTopY = -234,
        t.slatBotY = -204,
        t.rand = null,
        t.simTimeSecs = 0,
        t.fixedSimTimeStep = 1 / 30,
        t.secsToBallStop = 8,
        t.slots = ["28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34", "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2", "0"],
        t.wheelSlots = [],
        t.ended = !1,
        t.ballInSlot = !1,
        t.wheelRot = 0,
        t.ballInPocketRing = !1,
        t.wheelRPS = -1 / 3,
        t.ballZ = 1,
        t.ballVelZ = 0,
        t.dontRotateWheel = !0,
        t.wheelTween = !1,
        t.wheelOuterRingDepth = .15,
        t.slotDepth = .15,
        t.ballStopped = !1,
        t.currentSlotIndex = 0,
        t.winningSlotIndex = 0,
        t.isPopup = !0;
        for (var e = 0; e < t.slots.length; ++e)
            t.wheelSlots.push(i.WheelSlot.getByNumStr(t.slots[e]));
        return t
    }
    i = t.battleline || (t.battleline = {}),
    s = i.BaseScreen,
    __extends(e, s),
    e.prototype.initialize = function() {
        var t = this.gui = new guiLib.SpinGui;
        this.display.addChild(this.gui),
        this.refresh(),
        this.dimmer = new i.Dimmer(t.dimmerAnim_mc.dimmer_mc),
        this.wheelRotator = t.clip_mc.wheelRotator_mc,
        this.wheel = t.clip_mc.wheelRotator_mc.wheel_mc,
        this.ballRotator = t.clip_mc.wheelRotator_mc.ballRotator_mc,
        this.ball = t.clip_mc.wheelRotator_mc.ballRotator_mc.ball_mc,
        this.highlight = t.clip_mc.wheelRotator_mc.highlight_mc,
        this.title = t.clip_mc.title_mc,
        this.titleText = t.clip_mc.title_mc.text_txt,
        this.dimmer.onClick.add(this.dimmer_onClick, this),
        this.title.visible = !1,
        this.highlight.visible = !1,
        this.titleText.stroke = i.Config.popupTitleStrokeWidth,
        this.titleText.strokeStyle = i.Config.popupTitleStrokeStyle,
        this.spinCue = i.AudioManager.getCue("table_spinning"),
        this.spinCue.isLooped = !0,
        this.spinCue.play(),
        this.setupSim(),
        this.updateGraphics(),
        this.gui.gotoAndPlay("toOn"),
        this.gui.dimmerAnim_mc.gotoAndPlay("toOn"),
        s.prototype.initialize.call(this)
    }
    ,
    e.prototype.setupSim = function() {
        null === this.rand ? this.rand = new i.Random : this.rand.reset();
        var t = -20 * this.rand.nextNumber() - 344
          , e = -10 * this.rand.nextNumber() - 210
          , e = Math.abs(t - e);
        this.slots = ["28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34", "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2", "0"],
        this.slotSize = 360 / this.slots.length,
        this.wheelRot = 360 * this.rand.nextNumber(),
        this.wheelOuterRingHeight = -144,
        this.wheelOuterRingDepth = .15,
        this.numbersTopY = -300,
        this.slatTopY = -234,
        this.slatBotY = -204,
        this.slatHeight = Math.abs(-30),
        this.ballRot = -this.wheelRot,
        this.ballRPS = 1 - this.wheelRPS,
        this.ballStartRPS = this.ballRPS,
        this.ballRPSDeltaPS = -this.ballRPS / this.secsToBallStop,
        this.ballPosY = t,
        this.ballVelY = e / this.secsToBallStop * (+this.rand.nextNumber() + 1.5),
        this.ballInPocketRing = !1,
        this.ballInSlot = !1,
        this.ballZ = (this.ballPosY - this.slatTopY) / this.wheelOuterRingHeight * this.wheelOuterRingDepth + this.slotDepth + 1,
        this.ballVelZ = 0,
        this.playDropSound = !1,
        this.playHitSound = !1,
        this.dontRotateWheel = !1,
        this.wheelTween = null,
        this.ballStopped = !1,
        this.hitNumbers = !1,
        this.ended = !1
    }
    ,
    e.prototype.simToEnd = function() {
        for (; !1 === this.ballInSlot; )
            this.simulate(this.fixedSimTimeStep)
    }
    ,
    e.prototype.simulate = function(t) {
        for (this.simTimeSecs += t; this.simTimeSecs >= this.fixedSimTimeStep; )
            this.simTimeSecs -= this.fixedSimTimeStep,
            this.ballInSlot ? this.simStepSlot(this.fixedSimTimeStep) : this.ballInPocketRing ? this.simStepPocketRing(this.fixedSimTimeStep) : this.simStepOuterRing(this.fixedSimTimeStep)
    }
    ,
    e.prototype.simStepOuterRing = function(t) {
        var e = 360 * t;
        this.wheelRot += this.wheelRPS * e,
        this.ballRot += this.ballRPS * e,
        this.ballRPS += this.ballRPSDeltaPS * t,
        this.ballRPS < 0 && (this.ballRPS = 0),
        this.ballPosY += this.ballVelY * t,
        this.ballZ = (this.ballPosY - this.slatTopY) / this.wheelOuterRingHeight * this.wheelOuterRingDepth + this.slotDepth + 1,
        !this.hitNumbers && this.ballPosY > this.numbersTopY && (this.hitNumbers = !0),
        this.ballPosY > this.slatTopY && (this.spinCue.stop(),
        this.ballInPocketRing = !0,
        this.ballPosY += 3,
        this.ballVelY *= 4,
        this.ballZ = 1,
        this.ballVelZ = 1,
        this.playDropSound = !0,
        this.currentSlotIndex = this.calcSlotIndex(),
        this.ballPosY >= this.slatBotY) && (this.ballVelY *= -1,
        this.ballPosY = this.slatBotY,
        this.playHitSound = !0)
    }
    ,
    e.prototype.simStepPocketRing = function(t) {
        var e = 360 * t
          , i = (this.wheelRot += this.wheelRPS * e,
        this.currentSlotIndex);
        this.ballRot += this.ballRPS * e,
        this.currentSlotIndex = this.calcSlotIndex(),
        this.ballZ < this.slotDepth + 1 && i !== this.currentSlotIndex && (this.playHitSound = !0,
        this.ballRot = (i + 1) * this.slotSize - 1,
        this.ballRPS > .1 * (1 + 1 / 3) ? (this.ballRPS *= .65,
        this.ballZ = this.slotDepth + 1,
        this.ballVelZ = .25) : (this.currentSlotIndex = i,
        this.ballInSlot = !0,
        this.ballRPS *= -1)),
        this.updateBallY(t),
        this.updateBallZ(t)
    }
    ,
    e.prototype.simStepSlot = function(t) {
        var e = 360 * t
          , i = (this.dontRotateWheel || (this.wheelRot += this.wheelRPS * e),
        this.currentSlotIndex);
        this.ballRot += this.ballRPS * e,
        this.currentSlotIndex = this.calcSlotIndex(),
        0 !== this.ballRPS && (this.ballRPS *= .95,
        Math.abs(this.ballRPS) < 1 / 360) && (this.ballRPS = 0),
        i !== this.currentSlotIndex && (this.playHitSound = !0,
        0 < this.ballRPS ? this.ballRot = (i + 1) * this.slotSize - .25 : this.ballRot = i * this.slotSize + .25,
        this.currentSlotIndex = i,
        this.ballRPS *= -1),
        this.updateBallY(t),
        this.updateBallZ(t),
        0 === this.ballRPS && 0 === this.ballVelY && (this.ballStopped = !0)
    }
    ,
    e.prototype.updateBallY = function(t) {
        this.ballPosY += this.ballVelY * t,
        this.ballVelY *= .97,
        Math.abs(this.ballVelY) < 10 && (this.ballVelY = 0),
        this.ballPosY >= this.slatBotY ? (this.playHitSound = !0,
        this.ballVelY *= -1,
        this.ballPosY = this.slatBotY - .25) : this.ballPosY <= this.slatTopY && (this.playHitSound = !0,
        this.ballVelY *= -1,
        this.ballPosY = this.slatTopY + .25)
    }
    ,
    e.prototype.updateBallZ = function(t) {
        this.ballZ += this.ballVelZ * t,
        this.ballZ < 1 && (this.playHitSound = !0,
        this.ballZ = 1,
        this.ballVelZ *= -.9,
        Math.abs(this.ballVelZ) < .65) && (this.ballVelZ = 0),
        0 !== this.ballVelZ && (this.ballVelZ -= 5 * t)
    }
    ,
    e.prototype.calcSlotIndex = function() {
        for (var t = this.ballRot; 360 <= t; )
            t -= 360;
        for (; t < 0; )
            t += 360;
        return Math.floor(t / this.slotSize)
    }
    ,
    e.prototype.displayOutcome = function() {
        this.spinCue.stop();
        var t = this.currentSlotIndex
          , e = (this.winningSlotIndex = t,
        this.winningSlotColor = this.wheelSlots[t].wheelColor,
        this.winningSlotNumber = this.wheelSlots[t].wheelNumber,
        this.winningWheelSlot = this.wheelSlots[t],
        this.winningSlotColor)
          , e = "red" === e.toLowerCase() ? i.Config.redColorName : "black" === e.toLowerCase() ? i.Config.blackColorName : i.Config.greenColorName;
        this.titleText.text = e + " " + this.slots[t] + "!",
        this.title.visible = !0,
        this.highlight.visible = !0,
        this.highlight.rotation = (this.currentSlotIndex + .5) * this.slotSize
    }
    ,
    e.prototype.updateSounds = function() {
        var t;
        this.playHitSound && (t = this.ballRPS / this.ballStartRPS + .25,
        1 < t && (t = 1),
        i.BallSounds.hit(t)),
        this.playDropSound && i.BallSounds.drop(),
        this.playHitSound = !1,
        this.playDropSound = !1
    }
    ,
    e.prototype.updateGraphics = function() {
        this.wheelRotator.rotation = this.wheelRot,
        this.ballRotator.rotation = this.ballRot,
        this.ball.y = this.ballPosY,
        this.ball.scaleX = this.ball.scaleY = this.ballZ
    }
    ,
    e.prototype.dimmer_onClick = function() {
        !1 === this.ended ? (this.ended = !0,
        this.track("Skip Spin Pressed"),
        !1 === this.ballInSlot && this.simToEnd(),
        this.wheelRot = 0,
        this.wheelRPS = 0,
        this.ballZ = 1,
        this.ballVelZ = 0,
        this.dontRotateWheel = !0,
        this.wheelTween = !1,
        this.displayedOutcome || (this.displayedOutcome = !0,
        this.displayOutcome())) : (this.track("Continue Pressed"),
        i.MenuSounds.forward(),
        this.inputEnabled = !1,
        this.showHomeOption = !0,
        this.gui.gotoAndPlay("toOff"))
    }
    ,
    e.prototype.update = function(t) {
        if ("off" === this.gui.currentLabel)
            this.exit();
        else {
            if (this.simulate(t / 1e3 * 1),
            !this.displayedOutcome && this.ballInSlot) {
                for (this.displayedOutcome = !0,
                this.displayOutcome(); 360 <= this.wheelRot; )
                    this.wheelRot -= 360;
                for (; this.wheelRot < 0; )
                    this.wheelRot += 360;
                this.wheelTween = !0,
                this.origWheelRPS = this.wheelRPS,
                this.wheelTweenCount = 0,
                this.startedWheelRPSTween = !1
            } else if (null !== this.wheelTween) {
                for (; 360 <= this.wheelRot; )
                    this.wheelRot -= 360;
                for (; this.wheelRot < 0; )
                    this.wheelRot += 360;
                45 <= this.wheelRot && this.wheelTweenCount++,
                0 < this.wheelTweenCount && this.wheelRot < 45 && (this.startedWheelRPSTween = !0,
                this.wheelRPS = this.origWheelRPS * (this.wheelRot / 45)),
                this.startedWheelRPSTween && (45 < this.wheelRot || 0 === this.wheelRot || this.wheelRot < .25) && (this.dontRotateWheel = !0,
                this.wheelTween = null,
                this.wheelRPS = 0,
                this.wheelRot = 0,
                this.ended = !0,
                this.ballZ = 1,
                this.ballVelZ = 0)
            }
            this.updateSounds(),
            this.updateGraphics()
        }
        this.ended && 0 < this.endDelay && (this.endDelay -= t,
        this.endDelay <= 0) && (this.inputEnabled = !1,
        this.showHomeOption = !0,
        this.gui.gotoAndPlay("toOff")),
        s.prototype.update.call(this, t)
    }
    ,
    t = e,
    i.SpinScreen = t
}(com = com || {}),
!function(t) {
    var _, e;
    function i() {
        var t = e.call(this, "Play", !0, !0, !0, !0) || this;
        return t.winAmount = 0,
        t.loseAmount = 0,
        t.betRegainAmount = 0,
        t.winningBets = null,
        t.losingBets = null,
        t._nextScreen = null,
        t._gameOver = !1,
        t
    }
    _ = t.battleline || (t.battleline = {}),
    e = _.BaseScreen,
    __extends(i, e),
    i.prototype.initialize = function() {
        var t = this.gui = new guiLib.PlayGui
          , t = (t.name = "gui",
        this.display.addChild(this.gui),
        this.refresh(),
        this.undoButton = new _.Button(t.clip_mc.undoBtn_mc),
        this.clearButton = new _.Button(t.clip_mc.clearBtn_mc),
        this.spinButton = new _.Button(t.clip_mc.spinBtn_mc),
        this.betTotalValueText = new _.ValueText(t.clip_mc.betTotal_mc),
        this.placeBetsTitle = new _.OnOffAnim(t.clip_mc.placeTitle_mc),
        this.resultsDisplay = new _.ResultsDisplay(t.clip_mc.winningNumbersBox_mc),
        this.resultsDisplay.addResults(_.GameSaves.results),
        this.boardDisplay = new _.BoardDisplay(t.clip_mc.board_mc),
        this.bankDisplay = new _.BankDisplay(t.clip_mc.bank_mc),
        t.clip_mc.placeTitle_mc.holder_mc.text_txt);
        t.strokeStyle = _.Config.popupTitleStrokeStyle,
        t.stroke = _.Config.popupTitleStrokeWidth,
        this.betTotalValueText.textField.strokeStyle = _.Config.popupTitleStrokeStyle,
        this.betTotalValueText.textField.stroke = _.Config.popupTitleStrokeWidth / 2,
        this.bankDisplay.totalText.textDisplay.strokeStyle = _.Config.popupTextStrokeStyle,
        this.bankDisplay.totalText.textDisplay.stroke = _.Config.popupTextStrokeWidth,
        this.gui.gotoAndPlay("toOn"),
        this.track("Begin Play"),
        this.dealer = new _.Dealer(this,this.bankDisplay,this.boardDisplay),
        this.dealer.enableBetting(),
        e.prototype.initialize.call(this)
    }
    ,
    i.prototype.removed = function() {
        this.dealer.dispose(),
        e.prototype.removed.call(this)
    }
    ,
    i.prototype.home = function(t) {
        t && this.track("Home Button Pressed"),
        this._nextScreen = new _.IntroMenuScreen(!0),
        this.inputEnabled = !1,
        this.gui.mouseEnabled = this.gui.mouseChildren = !1,
        this.gui.gotoAndPlay("toOff")
    }
    ,
    i.prototype.spin = function() {
        this.track("Spin Button Pressed");
        var t = new _.SpinScreen;
        t.onRemoved.add(this.spinScreen_onRemoved, this),
        this.screenManager.add(t),
        this.gui.mouseChildren = this.gui.mouseEnabled = !1
    }
    ,
    i.prototype.score = function(t) {
        for (var e = this.dealer.getAllBets(), i = [], s = [], n = 0; n < e.length; ++n) {
            for (var a = e[n], r = a.spotDisplay, o = r.squareDisplays, h = !1, l = 0; l < o.length; ++l) {
                var c = o[l];
                if (0 <= c.wheelSlots.indexOf(t)) {
                    h = !0;
                    break
                }
            }
            (h ? i : s).push(a)
        }
        for (var u = 0, d = 0, p = 0, n = 0; n < i.length; ++n)
            a = i[n],
            u += a.chipDisplay.denomination.value * a.spotDisplay.payout,
            d += a.chipDisplay.denomination.value;
        for (n = 0; n < s.length; ++n)
            a = s[n],
            p += a.chipDisplay.denomination.value;
        this.winningBets = i,
        this.losingBets = s,
        this.winAmount = u,
        this.betRegainAmount = d,
        this.loseAmount = p;
        var m = this.dealer.bankTotal;
        m += this.betRegainAmount,
        m += this.winAmount,
        m < 0 && (m = 0),
        _.GameSaves.bank = m,
        _.GameSaves.bank < 0 && (_.GameSaves.hasSaveGame = !1),
        _.GameSaves.results.unshift(t),
        11 < _.GameSaves.results.length && (_.GameSaves.results.length = 11),
        _.GameSaves.save(),
        0 < i.length ? this.won() : this.lost()
    }
    ,
    i.prototype.lost = function() {
        this.track("Lost Spin");
        var t = new _.LoseMenuScreen;
        t.onClosing.add(this.win_lose_MenuScreen_onClosing, this),
        t.onRemoved.add(this.win_lose_MenuScreen_onRemoved, this),
        this.screenManager.add(t)
    }
    ,
    i.prototype.won = function() {
        this.track("Won Spin");
        var t = !1
          , t = (_.Records.money < _.GameSaves.bank && (t = !0,
        _.Records.money = _.GameSaves.bank,
        _.Records.save()),
        new _.WinMenuScreen(this.betRegainAmount + this.winAmount,t));
        t.onClosing.add(this.win_lose_MenuScreen_onClosing, this),
        t.onRemoved.add(this.win_lose_MenuScreen_onRemoved, this),
        this.screenManager.add(t)
    }
    ,
    i.prototype.startNextPlay = function() {
        this.gui.mouseEnabled = this.gui.mouseChildren = !0;
        var t = this.dealer.betTotal
          , e = this.dealer.getAllBets();
        this.dealer.clearBets(),
        this.dealer.bankTotal >= t && this.dealer.placeAllBets(e),
        this.dealer.enableBetting()
    }
    ,
    i.prototype.gameOver = function() {
        this.track("Game Over"),
        this._gameOver = !0,
        this.screenManager.add(new _.GameOverMenuScreen),
        this._nextScreen = null,
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff")
    }
    ,
    i.prototype.spinScreen_onRemoved = function(t) {
        t.onRemoved.remove(this.spinScreen_onRemoved, this),
        this.resultsDisplay.addResult(t.winningWheelSlot),
        this.score(t.winningWheelSlot)
    }
    ,
    i.prototype.win_lose_MenuScreen_onClosing = function(t) {
        t.onClosing.remove(this.win_lose_MenuScreen_onClosing, this),
        t.isHome && (t.onRemoved.remove(this.win_lose_MenuScreen_onRemoved, this),
        this.home(!1)),
        _.GameSaves.bank <= 0 && this.gameOver()
    }
    ,
    i.prototype.win_lose_MenuScreen_onRemoved = function(t) {
        t.onRemoved.remove(this.win_lose_MenuScreen_onRemoved, this),
        0 < _.GameSaves.bank && this.startNextPlay()
    }
    ,
    i.prototype.onHomePressed = function() {
        this.home(!0),
        e.prototype.onHomePressed.call(this)
    }
    ,
    i.prototype.update = function(t) {
        "off" === this.gui.currentLabel && (null != this._nextScreen && this.screenManager.add(this._nextScreen),
        this.exit()),
        this.isFocused && !this._gameOver && this.dealer.update(t),
        e.prototype.update.call(this, t)
    }
    ,
    t = i,
    _.PlayScreen = t
}(com = com || {}),
!function(t) {
    var s, i;
    function e(t) {
        var e = i.call(this) || this;
        return e.dimmer = null,
        e._nextScreen = null,
        e.allowAutoExit = !0,
        e.analyticsCategory = t,
        e
    }
    s = t.battleline || (t.battleline = {}),
    i = s.Screen,
    __extends(e, i),
    e.prototype.added = function() {
        this.dimmer && this.dimmer.added(this.screenManager.view),
        this.googleTrack("Opened"),
        i.prototype.added.call(this)
    }
    ,
    e.prototype.removed = function() {
        this.dimmer && this.dimmer.removed(),
        this.googleTrack("Closed"),
        i.prototype.removed.call(this)
    }
    ,
    e.prototype.gainFocus = function() {
        i.prototype.gainFocus.call(this)
    }
    ,
    e.prototype.loseFocus = function() {
        i.prototype.loseFocus.call(this)
    }
    ,
    e.prototype.onHomeClick = function() {}
    ,
    e.prototype.onMuteClick = function() {
        this.googleTrack("Mute Button Pressed"),
        s.AudioManager.isMuted ? this.googleTrack("Muted") : this.googleTrack("Unmuted")
    }
    ,
    e.prototype.googleTrack = function(t, e, i) {
        void 0 === e && (e = void 0),
        void 0 === i && (i = void 0),
        s.Analytics.google.track(this.analyticsCategory, t, e, i)
    }
    ,
    e.prototype.update = function(t) {
        this.screenManager && this.gui && "off" === this.gui.currentLabel && this.isFocused && (this._nextScreen && this.screenManager.add(this._nextScreen),
        this._nextScreen = null,
        this.allowAutoExit) && this.exit(),
        i.prototype.update.call(this, t)
    }
    ,
    t = e,
    s.BaseScreenBasic = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s(t) {
        var e = i.call(this, "Interstitial") || this;
        return e.isPopup = !0,
        e._nextScreen = t,
        e
    }
    e = t.battleline || (t.battleline = {}),
    i = e.BaseScreenBasic,
    __extends(s, i),
    s.prototype.markPlacementOpportunity = function() {
        e.GameAds.adPlacementOpportunities++,
        e.GameAds.save()
    }
    ,
    s.prototype.shouldShowAd = function() {
        var t = !1;
        return e.InterstitialAds.enabled && 1 < e.GameAds.adPlacementOpportunities && 1 <= e.GameAds.launches && (t = !0),
        t
    }
    ,
    s.prototype.initialize = function() {
        this.refresh(),
        i.prototype.initialize.call(this),
        this.markPlacementOpportunity(),
        e.InterstitialAds.enabled && this.shouldShowAd() ? this.showAd() : this.close()
    }
    ,
    s.prototype.showAd = function() {
        e.InterstitialAds.onAdClosed.add(this.InterstitialAds_onAdClosed, this),
        e.InterstitialAds.showAd()
    }
    ,
    s.prototype.close = function() {
        this._nextScreen && this.screenManager.add(this._nextScreen),
        this._nextScreen = null,
        this.exit()
    }
    ,
    s.prototype.InterstitialAds_onAdClosed = function(t) {
        e.InterstitialAds.onAdClosed.remove(this.InterstitialAds_onAdClosed, this),
        this.close()
    }
    ,
    t = s,
    e.InterstitialAdScreen = t
}(com = com || {}),
!function(t) {
    var e, i;
    function s(t) {
        void 0 === t && (t = !0);
        var e = i.call(this, "Intro Menu", !1, !0, !0, t) || this;
        return e._animateOn = !1,
        e._nextScreen = null,
        e._animateOn = t,
        e
    }
    e = t.battleline || (t.battleline = {}),
    i = e.BaseScreen,
    __extends(s, i),
    s.prototype.initialize = function() {
        var t = this.gui = new guiLib.IntroMenuGui;
        this.display.addChild(this.gui),
        this.refresh(),
        this.playButton = new e.Button(t.playBtn_mc),
        this.moreGamesButton = new e.Button(t.gamesBtn_mc),
        this.newRecord = t.newRecord_mc,
        this.newRecordMoneyText = t.newRecord_mc.score_txt,
        this.playButton.clickCue = this.moreGamesButton.clickCue = e.MenuSounds.getForward(),
        this.playButton.onClick.add(this.playButton_onClick, this),
        this.moreGamesButton.onClick.add(this.moreGamesButton_onClick, this),
        this.newRecordMoneyText.text = "$" + e.Util.toNumericString(e.Records.money),
        this.newRecordMoneyText.stroke = e.Config.popupTitleStrokeWidth,
        this.newRecordMoneyText.strokeStyle = e.Config.popupTitleStrokeStyle,
        e.Records.money <= e.Config.defaultRecord && (this.newRecord.visible = !1),
        this._animateOn ? this.gui.gotoAndPlay("toOn") : this.gui.gotoAndStop("on"),
        i.prototype.initialize.call(this)
    }
    ,
    s.prototype.play = function() {
        this.track("Play Button Pressed"),
        e.GameSaves.hasSaveGame ? this.screenManager.add(new e.ResumeMenuScreen(this)) : (e.GameSaves.hasSaveGame = !0,
        e.GameSaves.bank = e.Config.defaultBank,
        e.GameSaves.results.length = 0,
        e.GameSaves.save(),
        this._nextScreen = new e.InterstitialAdScreen(new e.PlayScreen),
        this.inputEnabled = !1,
        this.gui.gotoAndPlay("toOff"))
    }
    ,
    s.prototype.moreGames = function() {
        this.track("More Games Button Pressed"),
        e.Util.openLink(!e.App.isWebApp, e.Config.moreGamesURL)
    }
    ,
    s.prototype.playButton_onClick = function(t) {
        this.play()
    }
    ,
    s.prototype.moreGamesButton_onClick = function(t) {
        this.moreGames()
    }
    ,
    s.prototype.update = function(t) {
        "off" === this.gui.currentLabel && (this._nextScreen && this.screenManager.add(this._nextScreen),
        this._nextScreen = null,
        this.exit()),
        i.prototype.update.call(this, t)
    }
    ,
    t = s,
    e.IntroMenuScreen = t
}(com = com || {}),
!function() {
    var t = document.createElement("style");
    t.innerText = "\n@font-face {\n\tfont-family: 'Noto Serif';\n\tsrc: url('./fonts/NotoSerif-bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n.NotoSerif-bold {\n\tfont-family: 'Noto Serif';\n\tfont-weight: bold;\n}\n",
    document.head.appendChild(t)
}(),
!function(c) {
    var u, d, e, t;
    function n() {
        var t = this;
        if (e(),
        t = d.call(this) || this,
        t._reportedUncaughtError = !1,
        t._loadQueue = null,
        t._reportedRetry = !1,
        t._hidePreloaderInFrames = 0,
        null !== n.instance)
            throw new Error("Roulette is a singleton class!");
        return n.instance = t,
        createjs.useOptimizedHitTesting = !0,
        t.initialize(),
        t
    }
    u = c.battleline || (c.battleline = {}),
    e = function() {
        for (var t = 0, e = [{
            theme: "247",
            greenColor: "#118744",
            greenColorName: "Green",
            redColor: "#FF0000",
            redColorName: "Red",
            blackColor: "#000000",
            blackColorName: "Black"
        }, {
            theme: "spring",
            greenColor: "#83B739",
            greenColorName: "Green",
            redColor: "#0099E6",
            redColorName: "Blue",
            blackColor: "#B42D86",
            blackColorName: "Purple"
        }, {
            theme: "summer",
            greenColor: "#83B739",
            greenColorName: "Green",
            redColor: "#FF9900",
            redColorName: "Orange",
            blackColor: "#00709E",
            blackColorName: "Blue"
        }, {
            theme: "fall",
            greenColor: "#9CA826",
            greenColorName: "Green",
            redColor: "#FF9900",
            redColorName: "Orange",
            blackColor: "#832607",
            blackColorName: "Brown"
        }, {
            theme: "winter",
            greenColor: "#028CBC",
            greenColorName: "Blue",
            redColor: "#46BA97",
            redColorName: "Teal",
            blackColor: "#043B4F",
            blackColorName: "Dark Blue"
        }, {
            theme: "christmas",
            greenColor: "#666666",
            greenColorName: "Gray",
            redColor: "#40933E",
            redColorName: "Green",
            blackColor: "#910000",
            blackColorName: "Red"
        }, {
            theme: "easter",
            greenColor: "#60CE36",
            greenColorName: "Green",
            redColor: "#FF5F93",
            redColorName: "Pink",
            blackColor: "#0099FF",
            blackColorName: "Blue"
        }, {
            theme: "4th-of-july",
            greenColor: "#999999",
            greenColorName: "Gray",
            redColor: "#FF0000",
            redColorName: "Red",
            blackColor: "#0A3865",
            blackColorName: "Blue"
        }, {
            theme: "halloween",
            greenColor: "#999999",
            greenColorName: "Gray",
            redColor: "#FF6600",
            redColorName: "Orange",
            blackColor: "#202020",
            blackColorName: "Black"
        }, {
            theme: "thanksgiving",
            greenColor: "#9CA826",
            greenColorName: "Green",
            redColor: "#ED5704",
            redColorName: "Orange",
            blackColor: "#60210A",
            blackColorName: "Brown"
        }, {
            theme: "new-years",
            greenColor: "#237C6F",
            greenColorName: "Teal",
            redColor: "#663399",
            redColorName: "Purple",
            blackColor: "#262626",
            blackColorName: "Black"
        }, {
            theme: "valentines",
            greenColor: "#999999",
            greenColorName: "Gray",
            redColor: "#F27979",
            redColorName: "Pink",
            blackColor: "#D90000",
            blackColorName: "Red"
        }, {
            theme: "st-patricks",
            greenColor: "#84241F",
            greenColorName: "Brown",
            redColor: "#F56E00",
            redColorName: "Orange",
            blackColor: "#2C8401",
            blackColorName: "Green"
        }, {
            theme: "cinco-de-mayo",
            greenColor: "#999999",
            greenColorName: "Gray",
            redColor: "#FF3300",
            redColorName: "Red",
            blackColor: "#0A8757",
            blackColorName: "Green"
        }]; t < e.length; t++) {
            var i = e[t];
            if (u.Config.theme === i.theme) {
                u.Config.greenColor = i.greenColor,
                u.Config.greenColorName = i.greenColorName,
                u.Config.redColor = i.redColor,
                u.Config.redColorName = i.redColorName,
                u.Config.blackColor = i.blackColor,
                u.Config.blackColorName = i.blackColorName;
                break
            }
        }
        u.Config.defaultBank = u.Config.defaultRecord = 2500,
        u.Config.winHighAmount = 100,
        u.Config.winMediumAmount = 50,
        u.Config.popupTitleStrokeWidth = 16,
        u.Config.popupTitleStrokeStyle = "#000",
        u.Config.popupTextStrokeWidth = 8,
        u.Config.popupTextStrokeStyle = "rgba(0,0,0,0.15)",
        "boolean" != typeof u.Config.analyticsEnabled && (u.Config.analyticsEnabled = !0),
        "boolean" != typeof u.Config.showRateUsButton && (u.Config.showRateUsButton = !0),
        "boolean" != typeof u.Config.defaultMute && (u.Config.defaultMute = !1)
    }
    ,
    d = u.Game,
    __extends(n, d),
    n.prototype.initialize = function() {
        (u.App.isWebApp && 0 === u.App.url.indexOf("file://") || !u.App.isWebApp) && (u.Splash.minShowTime = 0),
        u.App.isWebApp && (u.Platform.os,
        u.OS.iOS),
        u.App.isWebApp && 0 <= u.App.url.indexOf("file://") || 0 <= u.App.url.indexOf("spencer-evans") || 0 <= u.App.url.indexOf("nautgames") ? (u.DomConsole.isEnabled = !0,
        u.DomConsole.enableOnUncaughtError = !0,
        u.FramerateMeter.isEnabled = !0,
        u.Analytics.ignore = !0) : (u.DomConsole.isEnabled = !1,
        u.DomConsole.enableOnUncaughtError = !1,
        u.FramerateMeter.isEnabled = !1),
        u.App.urlVariables.containsKey("debug") && ("false" === u.App.urlVariables.getValue("debug") ? (u.DomConsole.isEnabled = !1,
        u.DomConsole.enableOnUncaughtError = !1,
        u.FramerateMeter.isEnabled = !1,
        u.Logger.info("Turning off console and fps because debug url var was set to false.")) : "hidden" === u.App.urlVariables.getValue("debug") ? (u.DomConsole.isEnabled = !0,
        u.DomConsole.enableOnUncaughtError = !0,
        u.FramerateMeter.isEnabled = !0,
        u.DomConsole.isVisible = !1,
        u.FramerateMeter.isVisible = !1,
        u.Logger.info("Turning on, but hiding, console and fps because debug url var was set to hidden.")) : (u.DomConsole.isEnabled = !0,
        u.DomConsole.enableOnUncaughtError = !0,
        u.FramerateMeter.isEnabled = !0,
        u.Logger.info("Turning on console and fps because debug url var was set."))),
        u.App.urlVariables.containsKey("console") && ("false" === u.App.urlVariables.getValue("console") ? (u.DomConsole.isEnabled = !1,
        u.DomConsole.enableOnUncaughtError = !1,
        u.Logger.info("Turning off console because console url var was set to false.")) : (u.DomConsole.isEnabled = !0,
        u.DomConsole.enableOnUncaughtError = !0,
        u.Logger.info("Turning on console because console url var was set."))),
        u.App.urlVariables.containsKey("fps") && ("false" === u.App.urlVariables.getValue("fps") ? (u.FramerateMeter.isEnabled = !1,
        u.Logger.info("Turning off fps because fps url var was set to false.")) : (u.FramerateMeter.isEnabled = !0,
        u.Logger.info("Turning on fps because fps url var was set.")))
    }
    ,
    n.prototype.preload = function() {
        u.Analytics.initialize(u.App.versionNumber, u.App.targetMarket.name),
        u.Analytics.google = new u.GoogleAnalytics(u.Config.googleAnalyticsTrackingID),
        u.Analytics.firebase = new u.FirebaseAnalytics("Roulette"),
        u.Analytics.google.track("On Load", "Preloader"),
        u.Analytics.google.track("On Load", "Version", u.App.versionNumber),
        u.Splash.minShowTime = 0;
        for (var t = new Array, e = (t.push(new u.FontAsset("../fonts/NotoSerif-bold.ttf","Noto Serif","bold")),
        new Array,
        new Array), i = (e.push(audioLib),
        e.push(guiLib),
        this._loadQueue = new u.LoadQueue), s = 0; s < t.length; ++s)
            i.items.push(new u.LoadItem(new u.FontData.Loader(t[s])));
        for (var s = 0; s < e.length; ++s)
            for (var n = e[s], a = 0; a < n.properties.manifest.length; ++a) {
                var r, o = n.properties.manifest[a], h = o.src, l = (c.battleline.EncodedAssets[h] && (h = c.battleline.EncodedAssets[h]),
                "");
                if (0 <= o.src.indexOf(".") && (r = o.src.toLowerCase().split("."),
                l = r[r.length - 1]),
                "mp3" === l)
                    u.WebAudio.isSupported && u.WebAudio.enabled ? i.items.push(new u.LoadItem(new u.WebAudioSoundData.Loader(h,o.id,n))) : i.items.push(new u.LoadItem(new u.HTMLSoundData.Loader(h,o.id,n)));
                else {
                    if ("png" !== l && "jpg" !== l && "jpeg" !== l)
                        throw new Error("Can't load extension: " + l);
                    i.items.push(new u.LoadItem(new u.TextureData.Loader(h,o.id,n)))
                }
            }
        for (i.maxStreams = 32,
        s = 0; s < i.items.length; ++s)
            i.items[s].loader.retries = u.Loader.Retries.None,
            i.items[s].loader.caching = u.Loader.Caching.Build,
            i.items[s].loader.basePath = u.App.basePath;
        this._loadQueue.onCanceled.add(this.loadQueue_onCanceled, this),
        this._loadQueue.onFailed.add(this.loadQueue_onFailed, this),
        this._loadQueue.onLoaded.add(this.loadQueue_onLoaded, this),
        this._loadQueue.onRetrying.add(this.loadQueue_onRetrying, this),
        this._loadQueue.onProgress.add(this.loadQueue_onProgress, this),
        d.prototype.preload.call(this),
        this._loadQueue.load()
    }
    ,
    n.prototype.preloadCleanup = function() {
        this._loadQueue.onCanceled.remove(this.loadQueue_onCanceled, this),
        this._loadQueue.onFailed.remove(this.loadQueue_onFailed, this),
        this._loadQueue.onLoaded.remove(this.loadQueue_onLoaded, this),
        this._loadQueue.onProgress.remove(this.loadQueue_onProgress, this),
        this._loadQueue = null
    }
    ,
    n.prototype.loadQueue_onCanceled = function(t) {
        u.Logger.warn("Preloading canceled."),
        this.preloadCleanup(),
        u.Splash.display.setError(),
        u.Analytics.google.track("On Load", "Failure", "Preloading canceled.")
    }
    ,
    n.prototype.loadQueue_onRetrying = function(t) {
        this._reportedRetry || (this._reportedRetry = !0,
        u.Analytics.google.track("On Load", "Retry"))
    }
    ,
    n.prototype.loadQueue_onFailed = function(t, e, i) {
        u.Logger.warn("Preloading failed."),
        u.Logger.warn(i),
        this.preloadCleanup(),
        u.Splash.display.setError(),
        u.Analytics.google.track("On Load", "Failure", "Preloading failure (" + e + "). " + i.name + ": " + i.message + ": " + i.stack.toString())
    }
    ,
    n.prototype.loadQueue_onLoaded = function(t) {
        0 < t.retried && u.Analytics.google.track("On Load", "Retry Successful"),
        u.Analytics.google.track("On Load", "Game"),
        this.preloadCleanup(),
        u.App.ready()
    }
    ,
    n.prototype.loadQueue_onProgress = function(t) {
        u.Splash.display.setProgress(this._loadQueue.progress)
    }
    ,
    n.prototype.start = function() {
        if (u.Config.minAdVersion) {
            u.Logger.info("found min ad version: " + u.Config.minAdVersion);
            var e = null;
            try {
                var t = localStorage.getItem("InstallInfo");
                t && "" !== t && "null" !== t && "undefined" !== t && (i = JSON.parse(localStorage.getItem("InstallInfo")),
                e = i.initialVersion || null)
            } catch (t) {
                e = null,
                u.Logger.warn("Error attempting to load InstallInfo: " + t)
            }
            if (null === e) {
                e = u.App.versionNumber.toString(),
                i = i || {};
                try {
                    i.initialVersion = e,
                    localStorage.setItem("InstallInfo", JSON.stringify(i))
                } catch (t) {
                    u.Logger.warn("Error attempting to save InstallInfo: " + t)
                }
            }
            var t = new u.Version
              , i = (t.fromVersionString(e),
            u.Logger.info("found initial version: " + t.toString()),
            u.Version.fromVersionString(u.Config.minAdVersion));
            u.Version.compare(t, i) < 0 ? (u.Logger.info("Initially installed version " + t.toString() + " was less than the min ad version number " + i.toString() + ". Disabling ads."),
            u.AdMob.enabled = !1) : u.Logger.info("Initially installed version " + t.toString() + " was >= the min ad version number " + i.toString() + ". Allowing ads.")
        }
        u.Analytics.google.track("On Start", "Game"),
        u.AdMob.initialize(u.Config.adMobAppId, u.Config.adMobBannerAdUnitId, u.Config.adMobInterstitialAdUnitId),
        u.Settings.load(),
        u.Records.load(),
        u.GameSaves.load(),
        u.GameAds.load(),
        u.GameAds.launches++,
        u.GameAds.save(),
        u.AudioManager.isMuted = u.Settings.mute,
        u.App.onUncaughtError.add(this.App_onUncaughtError, this),
        this.backgroundView = this.createView(!1, !1),
        this.backgroundView.hd = !0,
        this.backgroundView.stage.tickEnabled = this.backgroundView.stage.tickChildren = !1,
        this.backgroundView.stage.mouseEnabled = this.backgroundView.stage.mouseChildren = !1,
        this.gameView = this.createView(!0, !0, n.DESIGNED_WIDTH, n.DESIGNED_HEIGHT, 99),
        createjs.Touch.enable(this.gameView.stage, !0, !0),
        u.Platform.os !== u.OS.iOS ? (this.gameView.stage.enableMouseOver(),
        this.document_touchStart = this.document_touchStart.bind(this),
        document.body.addEventListener("touchstart", this.document_touchStart, !0)) : u.Button.isTouch = !0,
        this.gameView.letterbox.onResize.add(this.letterbox_onResize, this),
        this.letterbox_onResize(),
        this.background = new u.Background(this.backgroundView.letterbox,images.bg_game,new guiLib.BgOverlay,new guiLib.BgShadow,new guiLib.BgShadowBottom,1),
        this.backgroundView.stage.addChildAt(this.background.display, 0),
        this.screenManager = new u.ScreenManager(this.gameView);
        var e = new createjs.MovieClip
          , s = (e.hitRect = new createjs.Rectangle(0,0,4e4,4e4),
        this.gameView.stage.addChildAt(e, 0),
        this.gameView.letterbox.display.addChild(this.screenManager.display),
        new u.OverlayDisplay,
        this.gameView.letterbox.display.addChild(u.OverlayDisplay.instance.display),
        this.gameView.refreshStage(),
        u.OverlayDisplay.instance.initialize(),
        this.gameView.refreshStage(),
        this);
        u.App.onResumed.add(function() {
            s.draw()
        }, null),
        this.screenManager.add(new u.IntroMenuScreen(!1)),
        u.App.isWebApp ? d.prototype.start.call(this, !0) : (this._hidePreloaderInFrames = 5,
        d.prototype.start.call(this, !1))
    }
    ,
    n.prototype.letterbox_onResize = function() {}
    ,
    n.prototype.App_onUncaughtError = function(t, e, i, s, n) {
        u.Config.errorTrackingEnabled && !this._reportedUncaughtError && (this._reportedUncaughtError = !0,
        n && n.stack) && n.stack
    }
    ,
    n.prototype.App_onBackButton = function() {
        this.screenManager.handleBackPressed()
    }
    ,
    n.prototype.document_touchStart = function(t) {
        u.Button.isTouch = !0,
        this.gameView.stage.enableMouseOver(0),
        document.body.removeEventListener("touchstart", this.document_touchStart, !0)
    }
    ,
    n.prototype.update = function(t) {
        this.screenManager.update(t),
        d.prototype.update.call(this, t)
    }
    ,
    n.prototype.draw = function() {
        this.screenManager.draw(),
        0 < this._hidePreloaderInFrames && (this._hidePreloaderInFrames--,
        this._hidePreloaderInFrames <= 0) && u.Splash.display.hide(),
        d.prototype.draw.call(this)
    }
    ,
    n.instance = null,
    n.DESIGNED_WIDTH = 1600,
    n.DESIGNED_HEIGHT = 1200,
    t = n,
    u.Roulette = t
}(com = com || {}),
!function(t) {
    var e;
    e = t.battleline || (t.battleline = {}),
    e.main = function() {
        new e.Roulette
    }
}(com = com || {}),
com || {});
com.battleline = com.battleline || {},
com.battleline.App = com.battleline.App || {},
com.battleline.App.versionNumber = "1.2.0.0",
com.battleline.App.buildTimestamp = 1715998332997,
com.battleline.App.buildDate = "Fri May 17 2024 19:12:12 GMT-0700 (Pacific Daylight Time)";
