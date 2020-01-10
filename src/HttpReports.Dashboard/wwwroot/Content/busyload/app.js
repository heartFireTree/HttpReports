﻿!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("jQuery")) : "function" == typeof define && define.amd ? define(["jQuery"], e) : "object" == typeof exports ? exports.busyLoad = e(require("jQuery")) : t.busyLoad = e(t.jQuery) }("undefined" != typeof self ? self : this, function (t) { return function (t) { function e(o) { if (n[o]) return n[o].exports; var i = n[o] = { i: o, l: !1, exports: {} }; return t[o].call(i.exports, i, i.exports, e), i.l = !0, i.exports } var n = {}; return e.m = t, e.c = n, e.d = function (t, n, o) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o }) }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 13) }([function (t, e, n) { function o(t, e, n) { var o = null == t ? void 0 : i(t, e); return void 0 === o ? n : o } var i = n(18); t.exports = o }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e } }(); e.Component = function () { function t(e, n, i) { o(this, t), this._options = n, this._busyLoadOptions = i, this.setTag(e) } return i(t, [{ key: "debugOptions", value: function () { console.log(this._options) } }, { key: "extendOptions", value: function (t) { $.extend(this._options, t) } }, { key: "setTag", value: function (t) { if (t instanceof jQuery) this._$tag = t; else { if (!("string" == typeof t || t instanceof String)) throw "wrong type for creating a tag"; this._$tag = $("<" + t + "/>", this._options) } } }, { key: "options", get: function () { return this._options }, set: function (t) { this._options = t } }, { key: "tag", get: function () { return this._$tag }, set: function (t) { this._$tag = t } }]), t }() }, function (t, e, n) { var o = n(10), i = o(Object, "create"); t.exports = i }, function (t, e, n) { function o(t, e) { for (var n = t.length; n--;)if (i(t[n][0], e)) return n; return -1 } var i = n(46); t.exports = o }, function (t, e, n) { function o(t, e) { var n = t.__data__; return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map } var i = n(52); t.exports = o }, function (t, e) { var n = Array.isArray; t.exports = n }, function (t, e, n) { function o(t) { return "symbol" == typeof t || r(t) && i(t) == s } var i = n(9), r = n(25), s = "[object Symbol]"; t.exports = o }, function (t, e, n) { var o = n(8), i = o.Symbol; t.exports = i }, function (t, e, n) { var o = n(21), i = "object" == typeof self && self && self.Object === Object && self, r = o || i || Function("return this")(); t.exports = r }, function (t, e, n) { function o(t) { return null == t ? void 0 === t ? c : a : u && u in Object(t) ? r(t) : s(t) } var i = n(7), r = n(23), s = n(24), a = "[object Null]", c = "[object Undefined]", u = i ? i.toStringTag : void 0; t.exports = o }, function (t, e, n) { function o(t, e) { var n = r(t, e); return i(n) ? n : void 0 } var i = n(33), r = n(38); t.exports = o }, function (t, e) { function n(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } t.exports = n }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { spinner: "pump", image: !1, fontawesome: !1, custom: !1, color: "#fff", background: "rgba(0, 0, 0, 0.21)", maxSize: "50px", minSize: "20px", text: !1, textColor: !1, textMargin: ".5rem", textPosition: "right", fontSize: "1rem", fullScreen: !1, animation: !1, animationDuration: "fast", containerClass: "busy-load-container", containerItemClass: "busy-load-container-item", spinnerClass: "busy-load-spinner", textClass: "busy-load-text" } }, function (t, e, n) { "use strict"; n(14); var o = n(15), i = n(12), r = function (t) { return t && t.__esModule ? t : { default: t } }(i), s = n(64); !function (t) { t.fn.busyLoad = o.busyLoad, t.busyLoadSetup = o.busyLoadSetup, t.busyLoadFull = o.busyLoadFull, t.fn.busyLoad.defaults = r.default }(s) }, function (t, e) { }, function (t, e, n) { "use strict"; function o(t) { $.extend(!0, c.default, t) } function i(t, e) { return this.each(function () { var n = new s.BusyLoad($(this), JSON.parse(JSON.stringify(c.default)), e); switch (t) { case "show": n.show(); break; case "hide": n.hide(); break; default: throw "don't know action '" + t + "'" } }) } function r(t, e) { var n = $("body"), o = new s.BusyLoad(n, JSON.parse(JSON.stringify(c.default)), e); switch (t.toLowerCase()) { case "show": n.addClass("no-scroll"), o.caller = n, o.extendSettings({ fullScreen: !0 }), o.show(); break; case "hide": o.hide(), n.removeClass("no-scroll") }return n } Object.defineProperty(e, "__esModule", { value: !0 }), e.busyLoadSetup = o, e.busyLoad = i, e.busyLoadFull = r; var s = n(16), a = n(12), c = function (t) { return t && t.__esModule ? t : { default: t } }(a) }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }), e.BusyLoad = void 0; var i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e } }(), r = n(17), s = n(60), a = n(61), c = n(62), u = n(0); e.BusyLoad = function () { function t(e, n, i) { o(this, t), this._settings = n, this._caller = e, this.extendSettings(i) } return i(t, [{ key: "debugSettings", value: function () { console.log(this._settings.fullScreen) } }, { key: "extendSettings", value: function (t) { $.extend(this._settings, t) } }, { key: "animateShow", value: function (t) { var e = this, n = function () { return t.trigger("bl.shown", [t, $(e.caller)]) }; if (this.caller.append(t), t.trigger("bl.show", [t, $(this.caller)]), u(this.settings, "animation", !1)) switch (u(this.settings, "animation").toLowerCase()) { case "fade": t = t.fadeIn(u(this.settings, "animationDuration", "fast"), n); break; case "slide": t = t.slideDown(u(this.settings, "animationDuration", "fast"), n); break; default: throw "don't know animation: " + u(this.settings, "animation") } else t.show(0, n); return t } }, { key: "animateHide", value: function (t) { var e = this, n = function () { t.trigger("bl.hidden", [t, $(e.caller)]), t.remove() }; if (t.trigger("bl.hide", [t, $(this.caller)]), u(this.settings, "animation", !1)) switch (u(this.settings, "animation").toLowerCase()) { case "fade": t = t.fadeOut(u(this.settings, "animationDuration", "fast"), n); break; case "slide": t = t.slideUp(u(this.settings, "animationDuration", "fast"), n); break; default: throw "don't know animation: " + u(this.settings, "animation") } else t.hide(0, n) } }, { key: "getOverlay", value: function () { return this._caller.data("busy-load-container") ? $("#" + this._caller.data("busy-load-container")) : (this._container = new r.Container(this._settings), this._containerItem = new s.ContainerItem(this._settings), u(this.settings, "text", !1) && (this._loadingText = new a.Text(this._settings), this._containerItem.tag.append(this._loadingText.tag)), !1 !== u(this.settings, "spinner", "pump") && (this._spinner = new c.Spinner(this._settings), this._containerItem.tag.append(this._spinner.tag)), this._container.tag.append(this._containerItem.tag).hide(), this._container.tag) } }, { key: "createRandomString", value: function () { return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) } }, { key: "toggle", value: function (t, e) { if ("show" == e) { var n = this.createRandomString(); "static" === this.caller.css("position") && this.caller.css("position", "relative"), this._caller.addClass("busy-load-active"), t.attr("id", n), t = this.animateShow(t), this._caller.data("busy-load-container", n) } else this.animateHide(t), this._caller.removeData("busy-load-container"), this._caller.removeClass("busy-load-active") } }, { key: "show", value: function () { this.toggle(this.getOverlay(), "show") } }, { key: "hide", value: function () { var t = this._caller.data("busy-load-container"); this.toggle($("#" + t), "hide") } }, { key: "settings", get: function () { return this._settings }, set: function (t) { this._settings = t } }, { key: "caller", get: function () { return this._caller }, set: function (t) { this._caller = t } }]), t }() }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function r(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } Object.defineProperty(e, "__esModule", { value: !0 }), e.Container = void 0; var s = n(1), a = n(0); e.Container = function (t) { function e(t) { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "div", { class: a(t, "containerClass"), css: { position: a(t, "fullScreen", !1) ? "fixed" : "absolute", top: 0, left: 0, background: a(t, "background", "#fff"), color: a(t, "color", "#0000001a"), display: "flex", "align-items": "center", "justify-content": "center", width: "100%", height: "100%", "z-index": 9999 } }, t)) } return r(e, t), e }(s.Component) }, function (t, e, n) { function o(t, e) { e = i(e, t); for (var n = 0, o = e.length; null != t && n < o;)t = t[r(e[n++])]; return n && n == o ? t : void 0 } var i = n(19), r = n(59); t.exports = o }, function (t, e, n) { function o(t, e) { return i(t) ? t : r(t, e) ? [t] : s(a(t)) } var i = n(5), r = n(20), s = n(26), a = n(56); t.exports = o }, function (t, e, n) { function o(t, e) { if (i(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !r(t)) || (a.test(t) || !s.test(t) || null != e && t in Object(e)) } var i = n(5), r = n(6), s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/; t.exports = o }, function (t, e, n) { (function (e) { var n = "object" == typeof e && e && e.Object === Object && e; t.exports = n }).call(e, n(22)) }, function (t, e) { var n; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function (t, e, n) { function o(t) { var e = s.call(t, c), n = t[c]; try { t[c] = void 0; var o = !0 } catch (t) { } var i = a.call(t); return o && (e ? t[c] = n : delete t[c]), i } var i = n(7), r = Object.prototype, s = r.hasOwnProperty, a = r.toString, c = i ? i.toStringTag : void 0; t.exports = o }, function (t, e) { function n(t) { return i.call(t) } var o = Object.prototype, i = o.toString; t.exports = n }, function (t, e) { function n(t) { return null != t && "object" == typeof t } t.exports = n }, function (t, e, n) { var o = n(27), i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, s = o(function (t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, o, i) { e.push(o ? i.replace(r, "$1") : n || t) }), e }); t.exports = s }, function (t, e, n) { function o(t) { var e = i(t, function (t) { return n.size === r && n.clear(), t }), n = e.cache; return e } var i = n(28), r = 500; t.exports = o }, function (t, e, n) { function o(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(r); var n = function () { var o = arguments, i = e ? e.apply(this, o) : o[0], r = n.cache; if (r.has(i)) return r.get(i); var s = t.apply(this, o); return n.cache = r.set(i, s) || r, s }; return n.cache = new (o.Cache || i), n } var i = n(29), r = "Expected a function"; o.Cache = i, t.exports = o }, function (t, e, n) { function o(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var o = t[e]; this.set(o[0], o[1]) } } var i = n(30), r = n(51), s = n(53), a = n(54), c = n(55); o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = a, o.prototype.set = c, t.exports = o }, function (t, e, n) { function o() { this.size = 0, this.__data__ = { hash: new i, map: new (s || r), string: new i } } var i = n(31), r = n(43), s = n(50); t.exports = o }, function (t, e, n) { function o(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var o = t[e]; this.set(o[0], o[1]) } } var i = n(32), r = n(39), s = n(40), a = n(41), c = n(42); o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = a, o.prototype.set = c, t.exports = o }, function (t, e, n) { function o() { this.__data__ = i ? i(null) : {}, this.size = 0 } var i = n(2); t.exports = o }, function (t, e, n) { function o(t) { return !(!s(t) || r(t)) && (i(t) ? h : u).test(a(t)) } var i = n(34), r = n(35), s = n(11), a = n(37), c = /[\\^$.*+?()[\]{}|]/g, u = /^\[object .+?Constructor\]$/, l = Function.prototype, f = Object.prototype, p = l.toString, d = f.hasOwnProperty, h = RegExp("^" + p.call(d).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); t.exports = o }, function (t, e, n) { function o(t) { if (!r(t)) return !1; var e = i(t); return e == a || e == c || e == s || e == u } var i = n(9), r = n(11), s = "[object AsyncFunction]", a = "[object Function]", c = "[object GeneratorFunction]", u = "[object Proxy]"; t.exports = o }, function (t, e, n) { function o(t) { return !!r && r in t } var i = n(36), r = function () { var t = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(); t.exports = o }, function (t, e, n) { var o = n(8), i = o["__core-js_shared__"]; t.exports = i }, function (t, e) { function n(t) { if (null != t) { try { return i.call(t) } catch (t) { } try { return t + "" } catch (t) { } } return "" } var o = Function.prototype, i = o.toString; t.exports = n }, function (t, e) { function n(t, e) { return null == t ? void 0 : t[e] } t.exports = n }, function (t, e) { function n(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } t.exports = n }, function (t, e, n) { function o(t) { var e = this.__data__; if (i) { var n = e[t]; return n === r ? void 0 : n } return a.call(e, t) ? e[t] : void 0 } var i = n(2), r = "__lodash_hash_undefined__", s = Object.prototype, a = s.hasOwnProperty; t.exports = o }, function (t, e, n) { function o(t) { var e = this.__data__; return i ? void 0 !== e[t] : s.call(e, t) } var i = n(2), r = Object.prototype, s = r.hasOwnProperty; t.exports = o }, function (t, e, n) { function o(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? r : e, this } var i = n(2), r = "__lodash_hash_undefined__"; t.exports = o }, function (t, e, n) { function o(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var o = t[e]; this.set(o[0], o[1]) } } var i = n(44), r = n(45), s = n(47), a = n(48), c = n(49); o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = s, o.prototype.has = a, o.prototype.set = c, t.exports = o }, function (t, e) { function n() { this.__data__ = [], this.size = 0 } t.exports = n }, function (t, e, n) { function o(t) { var e = this.__data__, n = i(e, t); return !(n < 0) && (n == e.length - 1 ? e.pop() : s.call(e, n, 1), --this.size, !0) } var i = n(3), r = Array.prototype, s = r.splice; t.exports = o }, function (t, e) { function n(t, e) { return t === e || t !== t && e !== e } t.exports = n }, function (t, e, n) { function o(t) { var e = this.__data__, n = i(e, t); return n < 0 ? void 0 : e[n][1] } var i = n(3); t.exports = o }, function (t, e, n) { function o(t) { return i(this.__data__, t) > -1 } var i = n(3); t.exports = o }, function (t, e, n) { function o(t, e) { var n = this.__data__, o = i(n, t); return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this } var i = n(3); t.exports = o }, function (t, e, n) { var o = n(10), i = n(8), r = o(i, "Map"); t.exports = r }, function (t, e, n) { function o(t) { var e = i(this, t).delete(t); return this.size -= e ? 1 : 0, e } var i = n(4); t.exports = o }, function (t, e) { function n(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } t.exports = n }, function (t, e, n) { function o(t) { return i(this, t).get(t) } var i = n(4); t.exports = o }, function (t, e, n) { function o(t) { return i(this, t).has(t) } var i = n(4); t.exports = o }, function (t, e, n) { function o(t, e) { var n = i(this, t), o = n.size; return n.set(t, e), this.size += n.size == o ? 0 : 1, this } var i = n(4); t.exports = o }, function (t, e, n) { function o(t) { return null == t ? "" : i(t) } var i = n(57); t.exports = o }, function (t, e, n) { function o(t) { if ("string" == typeof t) return t; if (s(t)) return r(t, o) + ""; if (a(t)) return l ? l.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -c ? "-0" : e } var i = n(7), r = n(58), s = n(5), a = n(6), c = 1 / 0, u = i ? i.prototype : void 0, l = u ? u.toString : void 0; t.exports = o }, function (t, e) { function n(t, e) { for (var n = -1, o = null == t ? 0 : t.length, i = Array(o); ++n < o;)i[n] = e(t[n], n, t); return i } t.exports = n }, function (t, e, n) { function o(t) { if ("string" == typeof t || i(t)) return t; var e = t + ""; return "0" == e && 1 / t == -r ? "-0" : e } var i = n(6), r = 1 / 0; t.exports = o }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function r(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } Object.defineProperty(e, "__esModule", { value: !0 }), e.ContainerItem = void 0; var s = n(1), a = n(0); e.ContainerItem = function (t) { function e(t) { o(this, e); var n = a(t, "textPosition", "right"); switch (n) { case "top": n = "column"; break; case "bottom": n = "column-reverse"; break; case "right": n = "row-reverse"; break; case "left": n = "row"; break; default: throw "don't know textPosition: " + n }return i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "div", { class: a(t, "containerItemClass"), css: { background: "none", display: "flex", "justify-content": "center", "align-items": "center", "flex-direction": n } }, t)) } return r(e, t), e }(s.Component) }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function r(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } Object.defineProperty(e, "__esModule", { value: !0 }), e.Text = void 0; var s = n(1), a = n(0); e.Text = function (t) { function e(t) { o(this, e); var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "span", { class: a(t, "textClass"), css: { color: a(t, "textColor", a(t, "color", "#fff")), "font-size": a(t, "fontSize", "1rem") }, text: a(t, "text", "Loading ...") }, t)), r = a(t, "textPosition", "right"), s = "margin-left"; switch (r) { case "top": s = "margin-bottom"; break; case "bottom": s = "margin-top"; break; case "left": s = "margin-right" }return n.tag.css(s, a(t, "textMargin", ".5rem")), n } return r(e, t), e }(s.Component) }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function r(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } Object.defineProperty(e, "__esModule", { value: !0 }), e.Spinner = void 0; var s = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e } }(), a = n(1), c = n(63), u = n(0); e.Spinner = function (t) { function e(t) { o(this, e); var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "span", {}, t)); return u(n._busyLoadOptions, "fontawesome") ? n.createFontAwesomeTag() : u(n._busyLoadOptions, "custom") ? n.createCustomTag() : u(n._busyLoadOptions, "image") ? n.createImageTag() : u(n._busyLoadOptions, "spinner") ? n.createCssTag(u(n._busyLoadOptions, "spinner")) : n.createCssTag("pump"), n.tag.addClass(u(n._busyLoadOptions, "spinnerClass")), n } return r(e, t), s(e, [{ key: "createCssTag", value: function (t) { var e = new c.SpinnerLib(t, this._busyLoadOptions); this.setTag(e.spinner), this.tag.addClass("busy-load-spinner-css"), this.setMaxMinSize() } }, { key: "createImageTag", value: function () { this.options = { class: "loader-image", src: this._busyLoadOptions.image }, this.setTag("img"), this.setMaxMinSize(), this.tag.addClass("busy-load-spinner-image") } }, { key: "createFontAwesomeTag", value: function () { this.options = { class: u(this._busyLoadOptions, "fontawesome", "fa fa-refresh fa-spin fa-2x fa-fw"), css: { color: u(this._busyLoadOptions, "color", "#fff") } }, this.setTag("span"), this.tag.addClass("busy-load-spinner-fontawesome"), this._$tag.append($("<span/>", { class: "sr-only", text: "Loading ..." })) } }, { key: "createCustomTag", value: function () { var t = u(this._busyLoadOptions, "custom"); if (!(t instanceof jQuery)) throw "wrong type for creating a tag"; this.setTag(t), this.tag.addClass("busy-load-spinner-custom") } }, { key: "setMaxMinSize", value: function () { this.tag.css({ "max-height": u(this._busyLoadOptions, "maxSize"), "max-width": u(this._busyLoadOptions, "maxSize"), "min-height": u(this._busyLoadOptions, "minSize"), "min-width": u(this._busyLoadOptions, "minSize") }) } }]), e }(a.Component) }, function (t, e, n) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(e, "__esModule", { value: !0 }); var i = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e } }(), r = n(0); e.SpinnerLib = function () { function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; switch (o(this, t), this._busyLoadOptions = n, e.toLowerCase()) { case "pump": this.createPump(); break; case "pulsar": this.createPulsar(); break; case "accordion": this.createAccordion(); break; case "cube": this.createCube(); break; case "cubes": this.createCubes(); break; case "circles": this.createCircles(); break; case "circle-line": this.createCircleLine(); break; case "cube-grid": this.createCubeGrid(); break; default: throw "don't know spinner: " + e } } return i(t, [{ key: "createCubeGrid", value: function () { this._spinner = $('<div class="spinner-cube-grid"> \n              <div class="sk-cube sk-cube1"></div>\n              <div class="sk-cube sk-cube2"></div>\n              <div class="sk-cube sk-cube3"></div>\n              <div class="sk-cube sk-cube4"></div>\n              <div class="sk-cube sk-cube5"></div>\n              <div class="sk-cube sk-cube6"></div>\n              <div class="sk-cube sk-cube7"></div>\n              <div class="sk-cube sk-cube8"></div>\n              <div class="sk-cube sk-cube9"></div>\n        </div>'), this._spinner.find(".sk-cube").css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createCircleLine", value: function () { this._spinner = $('<div class="spinner-circle-line">\n              <div class="bounce1"></div>\n              <div class="bounce2"></div>\n              <div class="bounce3"></div>\n        </div>'), this._spinner.find(".bounce1, .bounce2, .bounce3").css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createCircles", value: function () { this._spinner = $('<div class="spinner-circles">\n              <div class="dot1"></div>\n              <div class="dot2"></div>\n        </div>'), this._spinner.css({ "margin-right": "0.4rem" }).find(".dot1, .dot2").css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createPump", value: function () { this._spinner = $('<div class="spinner-pump">\n            <div class="double-bounce1"></div>\n            <div class="double-bounce2"></div>\n        </div>'), this._spinner.find(".double-bounce1, .double-bounce2").css({ "background-color": r(this._busyLoadOptions, "color", "#333"), "margin-right": "0.9rem" }) } }, { key: "createPulsar", value: function () { this._spinner = $('<div class="spinner-pulsar"></div>'), this._spinner.css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createAccordion", value: function () { this._spinner = $('<div class="spinner-accordion">\n    \t\t  <div class="rect1"></div>\n    \t\t  <div class="rect2"></div>\n    \t\t  <div class="rect3"></div>\n    \t\t  <div class="rect4"></div>\n    \t\t  <div class="rect5"></div>\n    \t\t</div>'), this._spinner.find("div").css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createCube", value: function () { this._spinner = $('<div class="spinner-cube"></div>'), this._spinner.css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "createCubes", value: function () { this._spinner = $('<div class="spinner-cubes">  \n            <div class="cube1"></div>\n            <div class="cube2"></div>\n        </div>'), this._spinner.css({ "margin-right": "0.9rem" }).find(".cube1, .cube2").css({ "background-color": r(this._busyLoadOptions, "color", "#333") }) } }, { key: "spinner", get: function () { return this._spinner }, set: function (t) { this._spinner = t } }]), t }() }, function (e, n) { e.exports = t }]) });