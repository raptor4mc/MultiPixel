"use strict";
var com, __extends = this && this.__extends || function() {
    var o = function(e, n) {
        return o = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, n) {
            e.__proto__ = n
        }
        : function(e, n) {
            for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }
        ),
        o(e, n)
    };
    return function(e, n) {
        if ("function" != typeof n && null !== n)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function t() {
            this.constructor = e
        }
        o(e, n),
        e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
        new t)
    }
}();
!function(e) {
    var n;
    function t(e, n, t, o) {
        if (null === e.values)
            throw new Error("Enum Type is missing values[] array!");
        if (e.values[t])
            throw new Error("There is already an enum value with ordinal " + t + "!");
        e.values[t] = this,
        this._enumName = n,
        this._ordinal = t,
        this._identifier = o
    }
    e = e.battleline || (e.battleline = {}),
    Object.defineProperty(t.prototype, "ordinal", {
        get: function() {
            return this._ordinal
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "identifier", {
        get: function() {
            return this._identifier
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.toString = function() {
        return "[" + this._enumName + "." + this._identifier + "]"
    }
    ,
    n = t,
    e.EnumValue = n
}(com = com || {}),
function(e) {
    var t, o;
    function n(e, n) {
        return o.call(this, t, "Device", e, n) || this
    }
    e = e.battleline || (e.battleline = {}),
    t = e.DeviceType || (e.DeviceType = {}),
    t.values = new Array,
    o = e.EnumValue,
    __extends(n, o),
    e = n,
    t.Other = new e(0,"Other"),
    t.Computer = new e(1,"Computer"),
    t.Tablet = new e(2,"Tablet"),
    t.Handheld = new e(3,"Handheld")
}(com = com || {}),
function(e) {
    var t, o;
    function n(e, n) {
        return o.call(this, t, "OS", e, n) || this
    }
    e = e.battleline || (e.battleline = {}),
    t = e.OS || (e.OS = {}),
    t.values = new Array,
    o = e.EnumValue,
    __extends(n, o),
    e = n,
    t.Other = new e(0,"Other"),
    t.Windows = new e(1,"Windows"),
    t.Mac = new e(2,"Mac"),
    t.ChromeOS = new e(3,"ChromeOS"),
    t.iOS = new e(4,"iOS"),
    t.Android = new e(5,"Android")
}(com = com || {}),
function(e) {
    var t, o;
    function n(e, n) {
        return o.call(this, t, "Browser", e, n) || this
    }
    e = e.battleline || (e.battleline = {}),
    t = e.Browser || (e.Browser = {}),
    t.values = new Array,
    o = e.EnumValue,
    __extends(n, o),
    e = n,
    t.Other = new e(0,"Other"),
    t.Chrome = new e(1,"Chrome"),
    t.Firefox = new e(2,"Firefox"),
    t.Safari = new e(3,"Safari"),
    t.Edge = new e(4,"Edge"),
    t.IE = new e(5,"IE"),
    t.Opera = new e(6,"Opera"),
    t.Vivaldi = new e(7,"Vivaldi")
}(com = com || {}),
function(e) {
    var n;
    function o() {
        this._major = 0,
        this._minor = 0,
        this._build = 0,
        this._revision = 0,
        this._str = "0.0.0.0",
        this._name = ""
    }
    e = e.battleline || (e.battleline = {}),
    Object.defineProperty(o.prototype, "major", {
        get: function() {
            return this._major
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "minor", {
        get: function() {
            return this._minor
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "build", {
        get: function() {
            return this._build
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "revision", {
        get: function() {
            return this._revision
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "str", {
        get: function() {
            return this._str
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(o.prototype, "name", {
        get: function() {
            return this._name
        },
        set: function(e) {
            this._name = e
        },
        enumerable: !1,
        configurable: !0
    }),
    o.prototype.fromName = function(e) {
        this._str = "0.0.0.0",
        this._major = this._minor = this._build = this._revision = 0,
        this._name = e
    }
    ,
    o.prototype.fromVersionString = function(e, n) {
        void 0 === n && (n = ""),
        this._str = e,
        this._name = n;
        n = e.split(".");
        this._major = 0 < n.length ? parseInt(n[0]) : 0,
        this._minor = 1 < n.length ? parseInt(n[1]) : 0,
        this._build = 2 < n.length ? parseInt(n[2]) : 0,
        this._revision = 3 < n.length ? parseInt(n[3]) : 0
    }
    ,
    o.fromVersionString = function(e, n) {
        void 0 === n && (n = "");
        var t = new o;
        return t.fromVersionString(e, n),
        t
    }
    ,
    o.compare = function(e, n) {
        return e._major < n._major ? -1 : e._major > n._major ? 1 : e._minor < n._minor ? -1 : e._minor > n._minor ? 1 : e._build < n._build ? -1 : e._build > n._build ? 1 : e._revision < n._revision ? -1 : e._revision > n._revision ? 1 : 0
    }
    ,
    o.prototype.fromVersionNumbers = function(e, n, t, o, r) {
        void 0 === n && (n = void 0),
        void 0 === t && (t = void 0),
        void 0 === o && (o = void 0),
        void 0 === r && (r = ""),
        this._major = e || 0,
        this._minor = n || 0,
        this._build = t || 0,
        this._revision = o || 0,
        this._name = r,
        this._str = "",
        void 0 !== e && (this._str += e),
        void 0 !== n && (this._str += "." + n),
        void 0 !== t && (this._str += "." + t),
        void 0 !== o && (this._str += "." + o)
    }
    ,
    o.prototype.toString = function() {
        var e = "";
        return "" !== this._name && (e += this._name + " "),
        e + this._str
    }
    ,
    n = o,
    e.Version = n
}(com = com || {}),
function(e) {
    var n;
    function t() {
        this._keys = [],
        this._values = []
    }
    e = e.battleline || (e.battleline = {}),
    Object.defineProperty(t.prototype, "keys", {
        get: function() {
            return this._keys.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "values", {
        get: function() {
            return this._values.slice(0)
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.containsKey = function(e) {
        return 0 <= this.getKeyIndex(e)
    }
    ,
    t.prototype.add = function(e, n, t) {
        if (void 0 === t && (t = !1),
        null == e)
            throw new Error("Keys cannot be null or undefined!");
        var o = this.getKeyIndex(e);
        if (0 <= o) {
            if (!t)
                throw new Error("Key already existed! " + e);
            this._values[o] = n
        } else
            this._keys.push(e),
            this._values.push(n)
    }
    ,
    t.prototype.remove = function(e, n) {
        void 0 === n && (n = !0);
        e = this.getKeyIndex(e);
        if (n && e < 0)
            throw new Error("Key did not exist!");
        this._keys.splice(e, 1),
        this._values.splice(e, 1)
    }
    ,
    t.prototype.getValue = function(e, n, t) {
        void 0 === n && (n = !1),
        void 0 === t && (t = null);
        e = this.getKeyIndex(e);
        if (e < 0) {
            if (n)
                throw new Error("Key did not exist!");
            return t
        }
        return this._values[e]
    }
    ,
    t.prototype.getKeyIndex = function(e) {
        for (var n = 0; n < this._keys.length; ++n)
            if (this._keys[n] === e)
                return n;
        return -1
    }
    ,
    n = t,
    e.Dictionary = n
}(com = com || {}),
function(e) {
    var t, n;
    function o(e) {
        void 0 === e && (e = null);
        var n = t.call(this) || this;
        return e && n.decode(e),
        n
    }
    e = e.battleline || (e.battleline = {}),
    t = e.Dictionary,
    __extends(o, t),
    o.prototype.clear = function() {
        this.keys.length = 0,
        this.values.length = 0
    }
    ,
    o.prototype.decode = function(e) {
        this.clear();
        0 <= e.indexOf("?") && (e = e.substr(e.indexOf("?") + 1));
        for (var n = e.split("&"), t = 0; t < n.length; ++t) {
            var o = n[t]
              , r = void 0;
            0 <= o.indexOf("=") && (o = o.substr(0, o.indexOf("=")),
            r = n[t].substr(n[t].indexOf("=") + 1)),
            o = decodeURIComponent(o),
            r = decodeURIComponent(r),
            this.add(o, r, !0)
        }
    }
    ,
    n = o,
    e.URLVariables = n
}(com = com || {}),
function(e) {
    var u, d, f;
    function h(e, n) {
        var t = e.substr(e.indexOf(n) + n.length);
        for (0 <= t.indexOf(" ") && (t = t.substr(0, t.indexOf(" "))),
        0 <= t.indexOf(";") && (t = t.substr(0, t.indexOf(";"))),
        0 <= t.indexOf(")") && (t = t.substr(0, t.indexOf(")"))); 0 <= t.indexOf("w"); )
            t = t.replace("w", "");
        for (; 0 <= t.indexOf("_"); )
            t = t.replace("_", ".");
        return t
    }
    u = e.battleline || (e.battleline = {}),
    d = u.Platform || (u.Platform = {}),
    d.forced = !1,
    f = !1,
    d.initialize = function(e) {
        if (!f) {
            f = !0,
            d.deviceType = u.DeviceType.Other,
            d.os = u.OS.Other,
            d.osVersion = new u.Version,
            d.browser = u.Browser.Other,
            d.browserVersion = new u.Version,
            d.userAgent = navigator.userAgent;
            var n = navigator.userAgent.toLowerCase()
              , e = new u.URLVariables(e)
              , t = n
              , o = e
              , r = o.getValue("os", !1, "").toLowerCase();
            if ("" !== r) {
                for (var i = 0; i < u.OS.values.length; ++i)
                    if (r === u.OS.values[i].identifier.toLowerCase()) {
                        d.os = u.OS.values[i];
                        break
                    }
                u.Logger.info("os URL Variable found. Forcing os to " + d.os.identifier)
            } else
                0 <= t.indexOf("cros") ? d.os = u.OS.ChromeOS : 0 <= t.indexOf("android") ? (d.os = u.OS.Android,
                d.osVersion.fromVersionString(h(t, "android ")),
                6 === d.osVersion.major ? d.osVersion.name = "Marshmallow" : 5 === d.osVersion.major ? d.osVersion.name = "Lollipop" : 4 === d.osVersion.major && 4 <= d.osVersion.minor ? d.osVersion.name = "KitKat" : 4 === d.osVersion.major && 1 <= d.osVersion.minor ? d.osVersion.name = "Jelly Bean" : 4 === d.osVersion.major ? d.osVersion.name = "Ice Cream Sandwich" : 3 === d.osVersion.major ? d.osVersion.name = "Honeycomb" : 2 === d.osVersion.major && 3 <= d.osVersion.minor ? d.osVersion.name = "Gingerbread" : 2 === d.osVersion.major && 2 <= d.osVersion.minor ? d.osVersion.name = "Froyo" : 2 === d.osVersion.major ? d.osVersion.name = "Eclair" : 1 === d.osVersion.major && 6 === d.osVersion.minor ? d.osVersion.name = "Donut" : 1 === d.osVersion.major && 5 === d.osVersion.minor && (d.osVersion.name = "Cupcake")) : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") || 0 <= t.indexOf("ipod") ? (d.os = u.OS.iOS,
                0 <= t.indexOf("iphone os ") ? d.osVersion.fromVersionString(h(t, "iphone os ")) : 0 <= t.indexOf("cpu os ") && d.osVersion.fromVersionString(h(t, "cpu os "))) : 0 <= t.indexOf("windows") ? (d.os = u.OS.Windows,
                0 <= t.indexOf("windows phone os ") ? d.osVersion.fromVersionString(h(t, "windows phone os "), "Windows Phone") : 0 <= t.indexOf("windows nt 6.3") ? d.osVersion.fromVersionNumbers(6, 3, 0, 0, "Windows 8.1") : 0 <= t.indexOf("windows nt 6.2") ? d.osVersion.fromVersionNumbers(6, 2, 0, 0, "Windows 8") : 0 <= t.indexOf("windows nt 6.1") ? d.osVersion.fromVersionNumbers(6, 1, 0, 0, "Windows 7") : 0 <= t.indexOf("windows nt 6.0") ? d.osVersion.fromVersionNumbers(6, 0, 0, 0, "Windows Vista") : 0 <= t.indexOf("windows nt 5.2") ? d.osVersion.fromVersionNumbers(5, 2, 0, 0, "Windows XP x64") : 0 <= t.indexOf("windows nt 5.1") ? d.osVersion.fromVersionNumbers(5, 1, 0, 0, "Windows XP") : 0 <= t.indexOf("windows nt 5.01") ? d.osVersion.fromVersionNumbers(5, 0, 1, 0, "Windows 2000 SP1") : 0 <= t.indexOf("windows nt 5.0") ? d.osVersion.fromVersionNumbers(5, 0, 0, 0, "Windows 2000") : 0 <= t.indexOf("windows nt 4.0") ? d.osVersion.fromVersionNumbers(4, 0, 0, 0, "Windows NT") : 0 <= t.indexOf("windows 98; win 9x 4.90") ? d.osVersion.fromName("Windows Me") : 0 <= t.indexOf("windows 98") ? d.osVersion.fromName("Windows 98") : 0 <= t.indexOf("windows 95") ? d.osVersion.fromName("Windows 95") : 0 <= t.indexOf("windows ce") ? d.osVersion.fromName("Windows CE") : (d.osVersion.fromVersionString(h(t, "windows nt ")),
                d.osVersion.name = "Windows " + d.osVersion.major + "." + d.osVersion.minor)) : 0 <= t.indexOf("mac os x ") ? (d.os = u.OS.Mac,
                d.osVersion.fromVersionString(h(t, "mac os x ")),
                10 === d.osVersion.major && (12 === d.osVersion.minor ? d.osVersion.name = "Sierra" : 11 === d.osVersion.minor ? d.osVersion.name = "El Capitan" : 10 === d.osVersion.minor ? d.osVersion.name = "Yosemite" : 9 === d.osVersion.minor ? d.osVersion.name = "Mavericks" : 8 === d.osVersion.minor ? d.osVersion.name = "Mountain Lion" : 7 === d.osVersion.minor ? d.osVersion.name = "Lion" : 6 === d.osVersion.minor ? d.osVersion.name = "Snow Leopard" : 5 === d.osVersion.minor ? d.osVersion.name = "Leopard" : 4 === d.osVersion.minor ? d.osVersion.name = "Tiger" : 3 === d.osVersion.minor ? d.osVersion.name = "Panther" : 2 === d.osVersion.minor ? d.osVersion.name = "Jaguar" : 1 === d.osVersion.minor ? d.osVersion.name = "Puma" : 0 === d.osVersion.minor && (d.osVersion.name = "Cheetah"))) : d.os = u.OS.Other;
            var o = n
              , t = e
              , s = t.getValue("device", !1, "").toLowerCase();
            if ("" !== s) {
                for (var l = 0; l < u.DeviceType.values.length; ++l)
                    if (s === u.DeviceType.values[l].identifier.toLowerCase()) {
                        d.deviceType = u.DeviceType.values[l];
                        break
                    }
                u.Logger.info("device URL Variable found. Forcing deviceType to " + d.deviceType.identifier)
            } else
                d.os === u.OS.iOS ? 0 <= o.indexOf("ipad") ? d.deviceType = u.DeviceType.Tablet : d.deviceType = u.DeviceType.Handheld : d.os === u.OS.Android ? 0 <= o.indexOf("mobile") ? d.deviceType = u.DeviceType.Handheld : d.deviceType = u.DeviceType.Tablet : d.os === u.OS.Windows && 0 <= o.indexOf("windows phone os") ? d.deviceType = u.DeviceType.Handheld : d.deviceType = u.DeviceType.Computer;
            var t = n
              , o = e
              , a = o.getValue("browser", !1, "").toLowerCase();
            if ("" !== a) {
                for (var c = 0; c < u.Browser.values.length; ++c)
                    if (a === u.Browser.values[c].identifier.toLowerCase()) {
                        d.browser = u.Browser.values[c];
                        break
                    }
                u.Logger.info("browser URL Variable found. Forcing browser to " + d.browser.identifier)
            } else
                0 <= t.indexOf("edge") ? (d.browser = u.Browser.Edge,
                d.browserVersion.fromVersionString(h(t, "edge/"))) : 0 <= t.indexOf("firefox") ? (d.browser = u.Browser.Firefox,
                d.browserVersion.fromVersionString(h(t, "firefox/"))) : 0 <= t.indexOf("opr") ? (d.browser = u.Browser.Opera,
                d.browserVersion.fromVersionString(h(t, "opr/"))) : 0 <= t.indexOf("opera") ? (d.browser = u.Browser.Opera,
                d.browserVersion.fromVersionString(h(t, "opera/"))) : 0 <= t.indexOf("vivaldi") ? (d.browser = u.Browser.Vivaldi,
                d.browserVersion.fromVersionString(h(t, "vivaldi/"))) : 0 <= t.indexOf("chrome") ? (d.browser = u.Browser.Chrome,
                d.browserVersion.fromVersionString(h(t, "chrome/"))) : d.os === u.OS.iOS && 0 <= t.indexOf("crios") ? (d.browser = u.Browser.Chrome,
                d.browserVersion.fromVersionString(h(t, "crios/"))) : d.os === u.OS.iOS && 0 <= t.indexOf("fxios") ? (d.browser = u.Browser.Firefox,
                d.browserVersion.fromVersionString(h(t, "fxios/"))) : d.os === u.OS.iOS && 0 <= t.indexOf("safari") && 0 <= t.indexOf("version/") || d.os === u.OS.Mac && 0 <= t.indexOf("safari") && 0 <= t.indexOf("version/") ? (d.browser = u.Browser.Safari,
                d.browserVersion.fromVersionString(h(t, "version/"))) : 0 <= t.indexOf("msie") ? (d.browser = u.Browser.IE,
                d.browserVersion.fromVersionString(h(t, "msie "))) : 0 <= t.indexOf("trident/7.") && (d.browser = u.Browser.IE,
                d.browserVersion.fromVersionString(h(t, "rv:")));
            d.browserVersion.name = d.browser.identifier
        }
    }
}(com = com || {}),
function(e) {
    var n;
    function t(e, n) {
        this.gameMsg = !0,
        this.content = null,
        this.cmd = e,
        this.content = n
    }
    e = e.battleline || (e.battleline = {}),
    t.REGISTER = "register",
    t.LAUNCH = "launch",
    t.START = "start",
    t.RELOAD = "reload",
    t.LOAD = "load",
    t.REQUEST_FULLSCREEN = "requestFullscreen",
    t.ENTER_FULLSCREEN = "enterFullscreen",
    t.REQUEST_WINDOWED = "requestWindowed",
    t.EXIT_FULLSCREEN = "exitFullscreen",
    t.KEYPRESS = "keypress",
    t.READY_ASCENDEUM_INTERSTITIALS = "readyAscendeumInterstitials",
    t.AD_CLOSED = "adClosed",
    t.AD_BLOCKED = "adBlocked",
    n = t,
    e.Message = n
}(com = com || {}),
function(e) {
    var n;
    function t(e, n) {
        void 0 === e && (e = null),
        void 0 === n && (n = null),
        this._method = null,
        this._scope = null,
        this.invoke = this.unset,
        (n || e) && this.set(e, n)
    }
    e = e.battleline || (e.battleline = {}),
    Object.defineProperty(t.prototype, "method", {
        get: function() {
            return this._method
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "scope", {
        get: function() {
            return this._scope
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "isSet", {
        get: function() {
            return null !== this._method
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.set = function(e, n) {
        if (void 0 === n && (n = null),
        this._scope || this._method)
            throw new Error("An existing delegate handler must be cleared before a new one can be set!");
        if (!e)
            throw new Error("Method must be defined! Use clear() to unset a delegate.");
        this._method = e,
        this._scope = n,
        this.invoke = this.fire
    }
    ,
    t.prototype.clear = function() {
        this._method = null,
        this._scope = null,
        this.invoke = this.unset
    }
    ,
    t.prototype.equals = function(e, n) {
        return void 0 === n && (n = null),
        this._scope === n && this._method === e
    }
    ,
    t.prototype.unset = function() {
        throw new Error("Tried to invoke a delegate that was not set!")
    }
    ,
    t.prototype.fire = function() {
        return this._method.apply(this._scope, arguments)
    }
    ,
    n = t,
    e.Delegate = n
}(com = com || {}),
function(e) {
    var r, i, n;
    function t() {}
    function o(e, n) {
        if (0 < i.length) {
            var t = i[i.length - 1];
            if (t.stream === e && t.msg === n)
                return void t.count++
        }
        i.push({
            stream: e,
            msg: n,
            count: 1
        }),
        100 < i.length && i.splice(0, 1)
    }
    function s(e) {
        o("warn", e);
        for (var n = 0; n < r.length; ++n)
            r[n].warn(e)
    }
    e = e.battleline || (e.battleline = {}),
    t.prototype.log = function(e) {
        console && console.log && console.log(e)
    }
    ,
    t.prototype.info = function(e) {
        console && console.info ? console.info(e) : this.log("[INFO] " + e)
    }
    ,
    t.prototype.warn = function(e) {
        console && console.warn ? console.warn(e) : this.log("[WARN] " + e)
    }
    ,
    t.prototype.error = function(e) {
        console && console.error ? console.error(e) : this.log("[ERROR] " + e)
    }
    ,
    t.prototype.trace = function() {
        console && console.trace ? console.trace() : console && console.error ? console.error("[TRACE]") : this.log("[TRACE] Tracing not available.")
    }
    ,
    n = t,
    e = e.Logger || (e.Logger = {}),
    r = [new n],
    i = new Array,
    e.addLogger = function(e) {
        if (0 <= r.indexOf(e))
            s("Tried to add a logger instance that was already added!");
        else {
            r.push(e);
            for (var n = 0; n < i.length; ++n)
                for (var t = i[n], o = 0; o < t.count; ++o)
                    "log" === t.stream ? e.log(t.msg) : "info" === t.stream ? e.info(t.msg) : "warn" === t.stream ? e.warn(t.msg) : "error" === t.stream ? e.error(t.msg) : "trace" === t.stream && e.trace()
        }
    }
    ,
    e.removeLogger = function(e) {
        e = r.indexOf(e),
        e < 0 ? s("Tried to remove a logger instance that was not addded!") : r.splice(e, 1)
    }
    ,
    e.log = function(e) {
        o("log", e);
        for (var n = 0; n < r.length; ++n)
            r[n].log(e)
    }
    ,
    e.info = function(e) {
        o("info", e);
        for (var n = 0; n < r.length; ++n)
            r[n].info(e)
    }
    ,
    e.warn = s,
    e.error = function(e) {
        o("error", e);
        for (var n = 0; n < r.length; ++n)
            r[n].error(e)
    }
    ,
    e.trace = function() {
        o("trace", null);
        for (var e = 0; e < r.length; ++e)
            r[e].trace()
    }
}(com = com || {}),
function(e) {
    var t;
    function n() {
        this._delegates = new Array,
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1,
        this.invoke = this.fire0
    }
    t = e.battleline || (e.battleline = {}),
    Object.defineProperty(n.prototype, "hasDelegates", {
        get: function() {
            return t.Logger.warn("DelegateEvent::hasDelegates is deprecated."),
            0 < this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(n.prototype, "count", {
        get: function() {
            return this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(n.prototype, "isEmpty", {
        get: function() {
            return 0 === this._delegates.length
        },
        enumerable: !1,
        configurable: !0
    }),
    n.prototype.add = function(e, n) {
        if (this.contains(e, n))
            throw new Error("Tried to add a delegate that was already added!");
        this._delegates.push(new t.Delegate(e,n)),
        1 === this._delegates.length ? this.invoke = this.fire1 : 2 === this._delegates.length && (this.invoke = this.fire)
    }
    ,
    n.prototype.remove = function(e, n) {
        e = this.indexOf(e, n);
        if (e < 0)
            throw new Error("Tried to remove a delegate that was not added!");
        this._delegates.splice(e, 1),
        this._invoking && (this._iteratorStop--,
        this._iterator >= e) && this._iterator--,
        1 === this._delegates.length ? this.invoke = this.fire1 : 0 === this._delegates.length && (this.invoke = this.fire0)
    }
    ,
    n.prototype.removeAll = function() {
        t.Logger.warn("DelegateEvent::removeAll() is deprecated."),
        this.clear()
    }
    ,
    n.prototype.clear = function() {
        for (var e = this._delegates, n = 0; n < e.length; ++n)
            e[n].clear();
        this._delegates.length = 0,
        this.invoke = this.fire0,
        this._invoking && (this._iterator = 0,
        this._iteratorStop = 0)
    }
    ,
    n.prototype.reset = function() {
        this._iterator = 0,
        this._invoking && (this._iterator = 0,
        this._iteratorStop = 0,
        this._invoking = !1)
    }
    ,
    n.prototype.contains = function(e, n) {
        return 0 <= this.indexOf(e, n)
    }
    ,
    n.prototype.indexOf = function(e, n) {
        for (var t = this._delegates, o = 0; o < t.length; ++o)
            if (t[o].equals(e, n))
                return o;
        return -1
    }
    ,
    n.prototype.fire0 = function() {}
    ,
    n.prototype.fire1 = function() {
        if (this._invoking)
            throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
        var e = this._delegates
          , e = e[0];
        this._invoking = !0,
        this._iterator = 0,
        this._iteratorStop = 1,
        e.invoke.apply(e, arguments),
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1
    }
    ,
    n.prototype.fire = function() {
        if (this._invoking)
            throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
        var e, n = this._delegates, t = arguments;
        for (this._iteratorStop = n.length,
        this._invoking = !0,
        this._iterator = 0; this._iterator < this._iteratorStop; ++this._iterator)
            e = n[this._iterator],
            e.invoke.apply(e, t);
        this._invoking = !1,
        this._iterator = -1,
        this._iteratorStop = -1
    }
    ,
    e = n,
    t.DelegateEvent = e
}(com = com || {}),
function(e) {
    var i, t, n, o, r;
    function s() {
        this.isFullscreen = !1,
        this.fullscreenGame = null,
        this.document_change = this.document_change.bind(this),
        document.addEventListener(s.api.events.change, this.document_change, !1)
    }
    function l() {
        this.isFullscreen = !1,
        this.fullscreenGame = null;
        var n = this;
        window.addEventListener("keyup", function(e) {
            "Escape" === e.key ? t._mode === n && (t.requestExit(),
            e.preventDefault(),
            e.stopPropagation(),
            e.stopImmediatePropagation()) : "Tab" === e.key && t._mode === n && t.isFullscreen && t.fullscreenGame.iframe.focus()
        }, !0)
    }
    i = e.battleline || (e.battleline = {}),
    n = t = i.Fullscreen || (i.Fullscreen = {}),
    n.onEnterFullscreen = new i.DelegateEvent,
    n.onExitFullscreen = new i.DelegateEvent,
    n.initialize = function() {
        o.isSupported ? n._mode = new o : n._mode = new r
    }
    ,
    Object.defineProperty(n, "isFullscreen", {
        get: function() {
            return n._mode.isFullscreen
        }
    }),
    Object.defineProperty(n, "fullscreenGame", {
        get: function() {
            return n._mode.fullscreenGame
        }
    }),
    n.requestEnter = function(e) {
        this._mode.requestEnter(e)
    }
    ,
    n.requestExit = function() {
        this._mode.requestExit()
    }
    ,
    s.prototype.document_change = function(e) {
        var n, e = e.target;
        e && e.__embed ? (e = e.__embed,
        n = !!document[s.api.element],
        this.isFullscreen !== n && (this.isFullscreen = n,
        (this.isFullscreen ? (this.fullscreenGame = e,
        t.onEnterFullscreen) : (this.fullscreenGame = null,
        t.onExitFullscreen)).invoke(e))) : console.log("   >  Not an embed element!")
    }
    ,
    s.prototype.requestEnter = function(e) {
        this.isFullscreen || e.embedElement[s.api.request]()
    }
    ,
    s.prototype.requestExit = function() {
        this.isFullscreen && document[s.api.exit]()
    }
    ,
    s.apis = {
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
    },
    s.api = null,
    s.isSupported = function() {
        var e, n = window.location.href, t = (i.Platform.initialize(n),
        s.apis), o = null;
        for (e in t)
            if (t[e].enabled in document) {
                o = t[e];
                break
            }
        i.Platform.os === i.OS.iOS && (i.Logger.info("Page is disabling the fullscreen api on iOS due to a poor user experience."),
        o = null);
        var r = "";
        return 0 <= n.indexOf("#") && (r = n.substr(n.indexOf("#"))),
        (0 <= r.indexOf("nofs") || 0 <= r.indexOf("nofullscreen")) && (i.Logger.info("Forced no fullscreen support."),
        o = null),
        s.api = o,
        !!o
    }(),
    o = s,
    l.prototype.requestEnter = function(e) {
        var n;
        this.fullscreenGame !== e && (this.isFullscreen && this.requestExit(),
        n = e.embedElement.style,
        n.width = "100%",
        n.height = "100%",
        n.overflow = "hidden",
        n.position = "fixed",
        n.top = "0",
        n.left = "0",
        n.zIndex = "2147483647",
        this.isFullscreen = !0,
        this.fullscreenGame = e,
        this.fullscreenGame.onKeypress.add(this.fullscreenGame_onKeypress, this),
        t.onEnterFullscreen.invoke(e))
    }
    ,
    l.prototype.requestExit = function() {
        var e;
        this.isFullscreen && (e = this.fullscreenGame.embedElement.style,
        e.width = null,
        e.height = null,
        e.overflow = null,
        e.position = null,
        e.top = null,
        e.left = null,
        e.zIndex = null,
        this.fullscreenGame.onKeypress.remove(this.fullscreenGame_onKeypress, this),
        e = this.fullscreenGame,
        this.isFullscreen = !1,
        this.fullscreenGame = null,
        t.onExitFullscreen.invoke(e))
    }
    ,
    l.prototype.fullscreenGame_onKeypress = function(e) {
        this.isFullscreen ? "Escape" === e && t._mode === this && t.requestExit() : "Tab" === e && t._mode === this && t.isFullscreen && t.fullscreenGame.iframe.focus()
    }
    ,
    r = l,
    t.initialize()
}(com = com || {}),
function(e) {
    var s;
    function n(e) {
        this.onLaunchReady = new s.DelegateEvent,
        this.onStartReady = new s.DelegateEvent,
        this.onKeypress = new s.DelegateEvent,
        this.isRegistered = !1,
        this.isLaunched = !1,
        this.isStarted = !1,
        this.adHolder = null,
        this._ascendeumInterstitialsEnabled = !1,
        this._ascendeumInterstitialsConfig = null,
        this.iframe = e,
        this.embedElement = e.parentElement,
        this.embedElement.__embed = this,
        this.skipBtn_click = this.skipBtn_click.bind(this),
        s.Fullscreen.onEnterFullscreen.add(this.fullscreen_onEnterFullscreen, this),
        s.Fullscreen.onExitFullscreen.add(this.fullscreen_onExitFullscreen, this),
        this.iframe.focus()
    }
    s = e.battleline || (e.battleline = {}),
    n.prototype.rcv_register = function(e) {
        this.register(),
        this.launchReady()
    }
    ,
    n.prototype.register = function() {
        this.isRegistered || (this.isRegistered = !0,
        this.send(new s.Message(s.Message.REGISTER,{
            url: window.location.href
        })))
    }
    ,
    n.prototype.launchReady = function() {
        this.isLaunched || (this.onLaunchReady.isEmpty ? this.launch() : this.onLaunchReady.invoke(this))
    }
    ,
    n.prototype.launch = function(e) {
        void 0 === e && (e = null),
        this.isLaunched || (this.isLaunched = !0,
        this.send(new s.Message(s.Message.LAUNCH,{
            launchArgs: e
        })))
    }
    ,
    n.prototype.rcv_start = function(e) {
        this.startReady()
    }
    ,
    n.prototype.startReady = function() {
        this.onStartReady.isEmpty ? this.start() : this.onStartReady.invoke(this)
    }
    ,
    n.prototype.start = function() {
        this.isStarted || (this.isStarted = !0,
        this.send(new s.Message(s.Message.START,{})))
    }
    ,
    n.prototype.rcv_reload = function(e) {
        document.location.reload()
    }
    ,
    n.prototype.rcv_load = function(e) {
        document.location.assign(e.toURL)
    }
    ,
    n.prototype.rcv_requestFullscreen = function(e) {
        !1 === s.Fullscreen.isFullscreen && s.Fullscreen.requestEnter(this)
    }
    ,
    n.prototype.enterFullscreen = function() {
        this.send(new s.Message(s.Message.ENTER_FULLSCREEN))
    }
    ,
    n.prototype.rcv_requestWindowed = function(e) {
        s.Fullscreen.fullscreenGame === this && s.Fullscreen.requestExit()
    }
    ,
    n.prototype.exitFullscreen = function() {
        this.send(new s.Message(s.Message.EXIT_FULLSCREEN))
    }
    ,
    n.prototype.rcv_keypress = function(e) {
        this.onKeypress.invoke(e.key)
    }
    ,
    n.prototype.rcv_readyAscendeumInterstitials = function(e) {
        this._ascendeumInterstitialsConfig = e,
        this.preloadAscendeumInterstitial()
    }
    ,
    n.prototype.preloadAscendeumInterstitial = function() {
        if (window.adsAllowed) {
            var e = document.createElement("div")
              , n = (e.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000000;",
            this.adHolder = e,
            document.createElement("div"))
              , t = (n.style.cssText = "display: inline-block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
            this._ascendeumInterstitialsConfig.baseId + Math.floor(1e5 * Math.random()))
              , o = (n.id = t,
            e.appendChild(n),
            document.createElement("div"))
              , r = (o.style.cssText = "\ncolor: #FFFFFF;\nbackground: rgba(0,0,0,0.15);\ndisplay: inline-block;\nfont-family: sans-serif;\nfont-weight: normal;\nfont-size: 18px;\npadding: 12px 36px;\nborder: solid 1px rgba(255,255,255,0.3);\nborder-right-width: 0;\nposition: absolute;\nbottom: 20px;\nright: 0;\nfont-weight: 500;\ncursor: pointer;\n-webkit-user-select: none;\n-ms-user-select: none;\nuser-select: none;\n",
            o.innerHTML = "\nClose Ad\n",
            o.onclick = this.skipBtn_click,
            e.appendChild(o),
            o.style.pointerEvents = "none",
            5)
              , i = (o.innerHTML = r + "",
            o.style.opacity = "0.65",
            null)
              , i = setTimeout(function e() {
                i = null,
                r--,
                0 === r ? (o.style.opacity = "1",
                o.innerHTML = "Close Ad",
                o.style.pointerEvents = "auto") : (o.innerHTML = r + "",
                i = setTimeout(e, 1e3))
            }, 1e3);
            this.embedElement.appendChild(e);
            try {
                window.games247.ads.loadBanner300x250(t, 2e3, function() {})
            } catch (e) {
                null !== i && (clearTimeout(i),
                i = null,
                this.skipBtn_click())
            }
        } else
            this.send(new s.Message(s.Message.AD_BLOCKED))
    }
    ,
    n.prototype.skipBtn_click = function(e) {
        this.adHolder && (this.adHolder.parentElement.removeChild(this.adHolder),
        this.adHolder = null,
        this.send(new s.Message(s.Message.AD_CLOSED)))
    }
    ,
    n.prototype.send = function(e) {
        this.iframe.contentWindow.postMessage(e, "*")
    }
    ,
    n.prototype.rcv = function(e) {
        e.cmd === s.Message.REGISTER ? this.rcv_register(e.content) : e.cmd === s.Message.START ? this.rcv_start(e.content) : e.cmd === s.Message.RELOAD ? this.rcv_reload(e.content) : e.cmd === s.Message.LOAD ? this.rcv_load(e.content) : e.cmd === s.Message.REQUEST_FULLSCREEN ? this.rcv_requestFullscreen(e.content) : e.cmd === s.Message.REQUEST_WINDOWED ? this.rcv_requestWindowed(e.content) : e.cmd === s.Message.KEYPRESS ? this.rcv_keypress(e.content) : e.cmd === s.Message.READY_ASCENDEUM_INTERSTITIALS && this.rcv_readyAscendeumInterstitials(e.content)
    }
    ,
    n.prototype.fullscreen_onEnterFullscreen = function(e) {
        e === this && this.enterFullscreen()
    }
    ,
    n.prototype.fullscreen_onExitFullscreen = function(e) {
        e === this && this.exitFullscreen()
    }
    ,
    e = n,
    s.Embed = e
}(com = com || {}),
function(e) {
    var o, r, i;
    function n(e) {
        var n, t;
        e && e.data && e.data.gameMsg && (n = e.source.frameElement,
        t = i.getValue(n),
        null === t && (t = new o.Embed(n),
        i.add(n, t),
        r.onGameEmbedded.invoke(t)),
        n = t,
        n.rcv(e.data))
    }
    o = e.battleline || (e.battleline = {}),
    r = o.Site || (o.Site = {}),
    r.onGameEmbedded = new o.DelegateEvent,
    i = new o.Dictionary,
    window.addEventListener("message", n)
}(com = com || {});
