if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = re.type(t);
            return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (re.isFunction(e)) return re.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return re.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (fe.test(e)) return re.filter(e, t, n);
                e = re.filter(e, t)
            }
            return re.grep(t, function(t) {
                return re.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = we[t] = {};
            return re.each(t.match(xe) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (s(), re.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Ne, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n
                    } catch (o) {}
                    re.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, n, i) {
            if (re.acceptData(t)) {
                var o, r, s = re.expando,
                    a = t.nodeType,
                    l = a ? re.cache : t,
                    u = a ? t[s] : t[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = Y.pop() || re.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[re.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[re.camelCase(e)])) : o = r, o
            }
        }

        function p(t, e, n) {
            if (re.acceptData(t)) {
                var i, o, r = t.nodeType,
                    s = r ? re.cache : t,
                    a = r ? t[re.expando] : re.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !u(i) : !re.isEmptyObject(i)) return
                    }(n || (delete s[a].data, u(s[a]))) && (r ? re.cleanData([t], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return me.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = ze.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function v(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== Se ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Se ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || re.nodeName(i, e) ? r.push(i) : re.merge(r, v(i, e));
            return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
        }

        function g(t) {
            Ae.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
        }

        function x(t) {
            var e = Xe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
        }

        function T(t, e) {
            if (1 === e.nodeType && re.hasData(t)) {
                var n, i, o, r = re._data(t),
                    s = re._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) re.event.add(e, n, a[n][i])
                }
                s.data && (s.data = re.extend({}, s.data))
            }
        }

        function S(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                    o = re._data(e);
                    for (i in o.events) re.removeEvent(e, i, o.handle);
                    e.removeAttribute(re.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function C(e, n) {
            var i, o = re(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : re.css(o[0], "display");
            return o.detach(), r
        }

        function E(t) {
            var e = me,
                n = tn[t];
            return n || (n = C(t, e), "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Ze.detach()), tn[t] = n), n
        }

        function N(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function _(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = hn.length; o--;)
                if (e = hn[o] + n, e in t) return e;
            return i
        }

        function k(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = re._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (r[s] = re._data(i, "olddisplay", E(i.nodeName)))) : (o = Le(i), (n && "none" !== n || !o) && re._data(i, "olddisplay", o ? n : re.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function L(t, e, n) {
            var i = cn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function I(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += re.css(t, n + ke[r], !0, o)), i ? ("content" === n && (s -= re.css(t, "padding" + ke[r], !0, o)), "margin" !== n && (s -= re.css(t, "border" + ke[r] + "Width", !0, o))) : (s += re.css(t, "padding" + ke[r], !0, o), "padding" !== n && (s += re.css(t, "border" + ke[r] + "Width", !0, o)));
            return s
        }

        function A(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = on(t),
                s = ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = rn(t, e, r), (0 > o || null == o) && (o = t.style[e]), nn.test(o)) return o;
                i = s && (ie.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + I(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function O(t, e, n, i, o) {
            return new O.prototype.init(t, e, n, i, o)
        }

        function D() {
            return setTimeout(function() {
                mn = void 0
            }), mn = re.now()
        }

        function j(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = ke[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function P(t, e, n) {
            for (var i, o = (wn[e] || []).concat(wn["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function z(t, e, n) {
            var i, o, r, s, a, l, u, c, p = this,
                d = {},
                f = t.style,
                h = t.nodeType && Le(t),
                m = re._data(t, "fxshow");
            n.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(t, "display"), c = "none" === u ? re._data(t, "olddisplay") || E(t.nodeName) : u, "inline" === c && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || p.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], gn.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        h = !0
                    }
                    d[i] = m && m[i] || re.style(t, i)
                } else u = void 0;
            if (re.isEmptyObject(d)) "inline" === ("none" === u ? E(t.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = re._data(t, "fxshow", {}), r && (m.hidden = !h), h ? re(t).show() : p.done(function() {
                    re(t).hide()
                }), p.done(function() {
                    var e;
                    re._removeData(t, "fxshow");
                    for (e in d) re.style(t, e, d[e])
                });
                for (i in d) s = P(h ? m[i] : 0, i, p), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = re.camelCase(n), o = e[i], r = t[n], re.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = re.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function H(t, e, n) {
            var i, o, r = 0,
                s = xn.length,
                a = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = mn || D(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: re.extend({}, e),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: mn || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (M(c, u.opts.specialEasing); s > r; r++)
                if (i = xn[r].call(u, t, c, u.opts)) return i;
            return re.map(c, P, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function W(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(xe) || [];
                if (re.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function R(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, re.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                s = t === Un;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function q(t, e) {
            var n, i, o = re.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && re.extend(!0, t, n), t
        }

        function F(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function B(t, e, n, i) {
            var o, r, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)
                    for (o in u)
                        if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: s ? p : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function U(t, e, n, i) {
            var o;
            if (re.isArray(e)) re.each(e, function(e, o) {
                n || Yn.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== re.type(e)) i(t, e);
            else
                for (o in e) U(t + "[" + o + "]", e[o], n, i)
        }

        function V() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function Q() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(t) {
            return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var Y = [],
            G = Y.slice,
            J = Y.concat,
            K = Y.push,
            Z = Y.indexOf,
            te = {},
            ee = te.toString,
            ne = te.hasOwnProperty,
            ie = {},
            oe = "1.11.1",
            re = function(t, e) {
                return new re.fn.init(t, e)
            },
            se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            le = /-([\da-z])/gi,
            ue = function(t, e) {
                return e.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: oe,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = re.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return re.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(re.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: Y.sort,
            splice: Y.splice
        }, re.extend = re.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) t = s[i], n = o[i], s !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {}, s[i] = re.extend(u, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, re.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === re.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === re.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !re.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ne.call(t, "constructor") && !ne.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ie.ownLast)
                    for (e in t) return ne.call(t, e);
                for (e in t);
                return void 0 === e || ne.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? te[ee.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && re.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ae, "ms-").replace(le, ue)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(se, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (Z) return Z.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && l.push(o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return J.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), re.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            te["[object " + e + "]"] = e.toLowerCase()
        });
        var ce = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, u, p, f, h, m;
                if ((e ? e.ownerDocument || e : R) !== O && A(e), e = e || O, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (j && !i) {
                    if (o = be.exec(t))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return te.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && w.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (w.qsa && (!P || !P.test(t))) {
                        if (f = p = W, h = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = E(t), (p = e.getAttribute("id")) ? f = p.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            h = xe.test(t) && c(e.parentNode) || e, m = u.join(",")
                        }
                        if (m) try {
                            return te.apply(n, h.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return _(t.replace(ue, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function p() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = F++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, u = [q, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[W] || (e[W] = {}), (a = l[i]) && a[0] === q && a[1] === r) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function v(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
                return s
            }

            function g(t, e, n, o, r, s) {
                return o && !o[W] && (o = g(o)), r && !r[W] && (r = g(r, s)), i(function(i, s, a, l) {
                    var u, c, p, d = [],
                        f = [],
                        h = s.length,
                        g = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? g : v(g, d, t, a, l),
                        b = n ? r || (i ? t : h || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (u = v(b, f), o(u, [], a, l), c = u.length; c--;)(p = u[c]) && (b[f[c]] = !(y[f[c]] = p));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(p = b[c]) && u.push(y[c] = p);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(p = b[c]) && (u = r ? ne.call(i, p) : d[c]) > -1 && (i[u] = !(s[u] = p))
                        }
                    } else b = v(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : te.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, s, !0), u = f(function(t) {
                        return ne.call(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        return !r && (i || n !== k) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }]; o > a; a++)
                    if (n = T.relative[t[a].type]) c = [f(h(c), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                            for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                            return g(a > 1 && h(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, p, d, f = 0,
                            h = "0",
                            m = i && [],
                            g = [],
                            y = k,
                            b = i || r && T.find.TAG("*", u),
                            x = q += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (k = s !== O && s); h !== w && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (p = 0; d = t[p++];)
                                    if (d(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = x)
                            }
                            o && ((c = !d && c) && f--, i && m.push(c))
                        }
                        if (f += h, o && h !== f) {
                            for (p = 0; d = n[p++];) d(m, g, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = K.call(l));
                                g = v(g)
                            }
                            te.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (q = x, k = y), m
                    };
                return o ? i(s) : s
            }
            var x, w, T, S, C, E, N, _, k, L, I, A, O, D, j, P, z, M, H, W = "sizzle" + -new Date,
                R = t.document,
                q = 0,
                F = 0,
                B = n(),
                U = n(),
                V = n(),
                Q = function(t, e) {
                    return t === e && (I = !0), 0
                },
                X = "undefined",
                Y = 1 << 31,
                G = {}.hasOwnProperty,
                J = [],
                K = J.pop,
                Z = J.push,
                te = J.push,
                ee = J.slice,
                ne = J.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                oe = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                se = re.replace("w", "w#"),
                ae = "\\[" + oe + "*(" + re + ")(?:" + oe + "*([*^$|!~]?=)" + oe + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + oe + "*\\]",
                le = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                ue = new RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
                ce = new RegExp("^" + oe + "*," + oe + "*"),
                pe = new RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
                de = new RegExp("=" + oe + "*([^\\]'\"]*?)" + oe + "*\\]", "g"),
                fe = new RegExp(le),
                he = new RegExp("^" + se + "$"),
                me = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + le),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: new RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
                },
                ve = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ye = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xe = /[+~]/,
                we = /'|\\/g,
                Te = new RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
                Se = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                te.apply(J = ee.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
            } catch (Ce) {
                te = {
                    apply: J.length ? function(t, e) {
                        Z.apply(t, ee.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, A = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : R,
                    i = n.defaultView;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, D = n.documentElement, j = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    A()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    A()
                })), w.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ye.test(n.getElementsByClassName) && o(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = o(function(t) {
                    return D.appendChild(t).id = W, !n.getElementsByName || !n.getElementsByName(W).length
                }), w.getById ? (T.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && j) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(Te, Se);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(Te, Se);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && j ? e.getElementsByClassName(t) : void 0
                }, z = [], P = [], (w.qsa = ye.test(n.querySelectorAll)) && (o(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + oe + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + oe + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || P.push(":checked")
                }), o(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + oe + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                })), (w.matchesSelector = ye.test(M = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(t) {
                    w.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), z.push("!=", le)
                }), P = P.length && new RegExp(P.join("|")), z = z.length && new RegExp(z.join("|")), e = ye.test(D.compareDocumentPosition), H = e || ye.test(D.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Q = e ? function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && H(R, t) ? -1 : e === n || e.ownerDocument === R && H(R, e) ? 1 : L ? ne.call(L, t) - ne.call(L, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i, o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : L ? ne.call(L, t) - ne.call(L, e) : 0;
                    if (r === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[o] === u[o];) o++;
                    return o ? s(l[o], u[o]) : l[o] === R ? -1 : u[o] === R ? 1 : 0
                }, n) : O
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== O && A(t), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !j || z && z.test(n) || P && P.test(n))) try {
                    var i = M.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, O, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== O && A(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== O && A(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && G.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
                return void 0 !== i ? i : w.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (I = !w.detectDuplicates, L = !w.sortStable && t.slice(0), t.sort(Q), I) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return L = null, t
            }, S = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += S(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: me,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Te, Se), t[3] = (t[3] || t[4] || t[5] || "").replace(Te, Se), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return me.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && fe.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Te, Se).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, p, d, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                g = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (v) {
                                if (r) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                        h = m = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (c = v[W] || (v[W] = {}), u = c[t] || [], f = u[0] === q && u[1], d = u[0] === q && u[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++d && p === e) {
                                            c[t] = [q, f, d];
                                            break
                                        }
                                } else if (y && (u = (e[W] || (e[W] = {}))[t]) && u[0] === q) d = u[1];
                                else
                                    for (;
                                        (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++d || (y && ((p[W] || (p[W] = {}))[t] = [q, d]), p !== e)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = ne.call(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = N(t.replace(ue, "$1"));
                        return o[W] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Te, Se).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === D
                    },
                    focus: function(t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return ve.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, E = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, u, c = U[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = pe.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ue, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(o = me[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
            }, N = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = E(t)), n = e.length; n--;) r = y(e[n]), r[W] ? i.push(r) : o.push(r);
                    r = V(t, b(o, i)), r.selector = t
                }
                return r
            }, _ = e.select = function(t, e, n, i) {
                var o, r, s, a, l, u = "function" == typeof t && t,
                    p = !i && E(t = u.selector || t);
                if (n = n || [], 1 === p.length) {
                    if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && j && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(Te, Se), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = me.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(Te, Se), xe.test(r[0].type) && c(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && d(r), !t) return te.apply(n, i), n;
                            break
                        }
                }
                return (u || N(t, p))(i, e, !j, n, xe.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = W.split("").sort(Q).join("") === W, w.detectDuplicates = !!I, A(), w.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(ie, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var pe = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        re.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, re.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (re.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) re.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && pe.test(t) ? re(t) : t || [], !1).length
            }
        });
        var he, me = t.document,
            ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = re.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ve.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || he).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), de.test(n[1]) && re.isPlainObject(e))
                            for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = me.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return he.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = me, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof he.ready ? he.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
            };
        ge.prototype = re.fn, he = re(me);
        var ye = /^(?:parents|prev(?:Until|All))/,
            be = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !re(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), re.fn.extend({
            has: function(t) {
                var e, n = re(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (re.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = pe.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? re.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), re.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return re.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return re.dir(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return re.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return re.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return re.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return re.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return re.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return re.sibling(t.firstChild)
            },
            contents: function(t) {
                return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
            }
        }, function(t, e) {
            re.fn[t] = function(n, i) {
                var o = re.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (be[t] || (o = re.unique(o)), ye.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var xe = /\S+/g,
            we = {};
        re.Callbacks = function(t) {
            t = "string" == typeof t ? we[t] || r(t) : re.extend({}, t);
            var e, n, i, o, s, a, l = [],
                u = !t.once && [],
                c = function(r) {
                    for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                        if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function r(e) {
                                re.each(e, function(e, n) {
                                    var i = re.type(n);
                                    "function" === i ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), e ? o = l.length : n && (a = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(t, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, s >= i && s--)
                        }), this
                    },
                    has: function(t) {
                        return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || p.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(t, n) {
                        return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return p
        }, re.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return re.Deferred(function(n) {
                                re.each(e, function(e, r) {
                                    var s = re.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? re.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, re.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e = 0,
                    n = G.call(arguments),
                    i = n.length,
                    o = 1 !== i || t && re.isFunction(t.promise) ? i : 0,
                    r = 1 === o ? t : re.Deferred(),
                    s = function(t, e, n) {
                        return function(i) {
                            e[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : i, n === a ? r.notifyWith(e, n) : --o || r.resolveWith(e, n)
                        }
                    },
                    a, l, u;
                if (i > 1)
                    for (a = new Array(i), l = new Array(i), u = new Array(i); i > e; e++) n[e] && re.isFunction(n[e].promise) ? n[e].promise().done(s(e, u, n)).fail(r.reject).progress(s(e, l, a)) : --o;
                return o || r.resolveWith(u, n), r.promise()
            }
        });
        var Te;
        re.fn.ready = function(t) {
            return re.ready.promise().done(t), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? re.readyWait++ : re.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--re.readyWait : !re.isReady) {
                    if (!me.body) return setTimeout(re.ready);
                    re.isReady = !0, t !== !0 && --re.readyWait > 0 || (Te.resolveWith(me, [re]), re.fn.triggerHandler && (re(me).triggerHandler("ready"), re(me).off("ready")))
                }
            }
        }), re.ready.promise = function(e) {
            if (!Te)
                if (Te = re.Deferred(), "complete" === me.readyState) setTimeout(re.ready);
                else if (me.addEventListener) me.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                me.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && me.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        s(), re.ready()
                    }
                }()
            }
            return Te.promise(e)
        };
        var Se = "undefined",
            Ce;
        for (Ce in re(ie)) break;
        ie.ownLast = "0" !== Ce, ie.inlineBlockNeedsLayout = !1, re(function() {
                var t, e, n, i;
                n = me.getElementsByTagName("body")[0], n && n.style && (e = me.createElement("div"), i = me.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = me.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                t = null
            }(), re.acceptData = function(t) {
                var e = re.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ne = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return p(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return p(t, e, !0)
            }
        }), re.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                        re._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    re.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, t, e)
                }) : r ? l(r, t, re.data(r, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    re.removeData(this, t)
                })
            }
        }), re.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = re.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = re._queueHooks(t, e),
                    s = function() {
                        re.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return re._data(t, n) || re._data(t, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(t, e + "queue"), re._removeData(t, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = re.queue(this, t, e);
                    re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    re.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = re.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = re._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ke = ["Top", "Right", "Bottom", "Left"],
            Le = function(t, e) {
                return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
            },
            Ie = re.access = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === re.type(n)) {
                    o = !0;
                    for (a in n) re.access(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(re(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            Ae = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = me.createElement("input"),
                e = me.createElement("div"),
                n = me.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    ie.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, n, i = me.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Oe = /^(?:input|select|textarea)$/i,
            De = /^key/,
            $e = /^(?:mouse|pointer|contextmenu)|click/,
            je = /^(?:focusinfocus|focusoutblur)$/,
            Pe = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, p, d, f, h, m, v = re._data(t);
                if (v) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = re.guid++), (s = v.events) || (s = v.events = {}), (c = v.handle) || (c = v.handle = function(t) {
                            return typeof re === Se || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(xe) || [""], a = e.length; a--;) r = Pe.exec(e[a]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, p = re.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, h, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), re.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, p, d, f, h, m, v = re.hasData(t) && re._data(t);
                if (v && (c = v.events)) {
                    for (e = (e || "").match(xe) || [""], u = e.length; u--;)
                        if (a = Pe.exec(e[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                            for (p = re.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, p.remove && p.remove.call(t, s));
                            l && !d.length && (p.teardown && p.teardown.call(t, h, v.handle) !== !1 || re.removeEvent(t, f, v.handle), delete c[f])
                        } else
                            for (f in c) re.event.remove(t, f + e[u], n, i, !0);
                    re.isEmptyObject(c) && (delete v.handle, re._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, u, c, p, d = [i || me],
                    f = ne.call(e, "type") ? e.type : e,
                    h = ne.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !je.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[re.expando] ? e : new re.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), u = re.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !re.isWindow(i)) {
                        for (l = u.delegateType || f, je.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                        c === (i.ownerDocument || me) && d.push(c.defaultView || c.parentWindow || t)
                    }
                    for (p = 0;
                        (a = d[p++]) && !e.isPropagationStopped();) e.type = p > 1 ? l : u.bindType || f, r = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && re.acceptData(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = f, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && re.acceptData(i) && s && i[f] && !re.isWindow(i)) {
                        c = i[s], c && (i[s] = null), re.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        re.event.triggered = void 0, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = re.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = G.call(arguments),
                    l = (re._data(this, "events") || {})[t.type] || [],
                    u = re.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = re.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; a > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[re.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = $e.test(o) ? this.mouseHooks : De.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return re.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = re.extend(new re.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = me.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Se && (t[i] = null), t.detachEvent(i, n))
        }, re.Event = function(t, e) {
            return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
        }, re.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            re.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !re.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ie.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (re.event.special.change = {
            setup: function() {
                return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Oe.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                    }), re._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !Oe.test(this.nodeName)
            }
        }), ie.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                re.event.simulate(e, t.target, re.event.fix(t), !0)
            };
            re.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, e);
                    o || i.addEventListener(t, n, !0), re._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, e) - 1;
                    o ? re._data(i, e, o) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
                }
            }
        }), re.fn.extend({
            on: function(t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(t) {
                    return re().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                    re.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                    re.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    re.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? re.event.trigger(t, e, n, !0) : void 0
            }
        });
        var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Me = / jQuery\d+="(?:null|\d+)"/g,
            He = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
            We = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            Fe = /<tbody/i,
            Be = /<|&#?\w+;/,
            Ue = /<(?:script|style|link)/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Qe = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Je = m(me),
            Ke = Je.appendChild(me.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
            clone: function(t, e, n) {
                var i, o, r, s, a, l = re.contains(t.ownerDocument, t);
                if (ie.html5Clone || re.isXMLDoc(t) || !He.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                    for (i = v(r), a = v(t), s = 0; null != (o = a[s]); ++s) i[s] && S(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || v(t), i = i || v(r), s = 0; null != (o = a[s]); s++) T(o, i[s]);
                    else T(t, r);
                return i = v(r, "script"), i.length > 0 && w(i, !l && v(t, "script")), i = a = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, s, a, l, u, c, p = t.length, d = m(e), f = [], h = 0; p > h; h++)
                    if (r = t[h], r || 0 === r)
                        if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
                        else if (Be.test(r)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (qe.exec(r) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + r.replace(Re, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                    if (!ie.leadingWhitespace && We.test(r) && f.push(e.createTextNode(We.exec(r)[0])), !ie.tbody)
                        for (r = "table" !== l || Fe.test(r) ? "<table>" !== c[1] || Fe.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) re.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (re.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = d.lastChild
                } else f.push(e.createTextNode(r));
                for (a && d.removeChild(a), ie.appendChecked || re.grep(v(f, "input"), g), h = 0; r = f[h++];)
                    if ((!i || -1 === re.inArray(r, i)) && (s = re.contains(r.ownerDocument, r), a = v(d.appendChild(r), "script"), s && w(a), n))
                        for (o = 0; r = a[o++];) Qe.test(r.type || "") && n.push(r);
                return a = null, d
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, s = 0, a = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (n = t[s]); s++)
                    if ((e || re.acceptData(n)) && (o = n[a], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== Se ? n.removeAttribute(a) : n[a] = null, Y.push(o))
                    }
            }
        }), re.fn.extend({
            text: function(t) {
                return Ie(this, function(t) {
                    return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? re.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || re.cleanData(v(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && re.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && re.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return re.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ie(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
                    if (!("string" != typeof t || Ue.test(t) || !ie.htmlSerialize && He.test(t) || !ie.leadingWhitespace && We.test(t) || Ge[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, re.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = J.apply([], t);
                var n, i, o, r, s, a, l = 0,
                    u = this.length,
                    c = this,
                    p = u - 1,
                    d = t[0],
                    f = re.isFunction(d);
                if (f || u > 1 && "string" == typeof d && !ie.checkClone && Ve.test(d)) return this.each(function(n) {
                    var i = c.eq(n);
                    f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (u && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (r = re.map(v(a, "script"), b), o = r.length; u > l; l++) i = a, l !== p && (i = re.clone(i, !0, !0), o && re.merge(r, v(i, "script"))), e.call(this[l], i, l);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, re.map(r, x), l = 0; o > l; l++) i = r[l], Qe.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                    a = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            re.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = re(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), re(r[i])[e](n), K.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Ze, tn = {};
        ! function() {
            var t;
            ie.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = me.getElementsByTagName("body")[0], n && n.style ? (e = me.createElement("div"), i = me.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(me.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var en = /^margin/,
            nn = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            on, rn, sn = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (on = function(t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            }, rn = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || on(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || re.contains(t.ownerDocument, t) || (s = re.style(t, e)), nn.test(s) && en.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
            }) : me.documentElement.currentStyle && (on = function(t) {
                return t.currentStyle
            }, rn = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || on(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), nn.test(s) && !sn.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
            }),
            function() {
                function e() {
                    var e, n, i, o;
                    n = me.getElementsByTagName("body")[0], n && n.style && (e = me.createElement("div"), i = me.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width, o = e.appendChild(me.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
                }
                var n, i, o, r, s, a, l;
                n = me.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === i.opacity, ie.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, ie.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ie, {
                    reliableHiddenOffsets: function() {
                        return null == a && e(), a
                    },
                    boxSizingReliable: function() {
                        return null == s && e(), s
                    },
                    pixelPosition: function() {
                        return null == r && e(), r
                    },
                    reliableMarginRight: function() {
                        return null == l && e(), l
                    }
                }))
            }(), re.swap = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            };
        var an = /alpha\([^)]*\)/i,
            ln = /opacity\s*=\s*([^)]*)/,
            un = /^(none|table(?!-c[ea]).+)/,
            cn = new RegExp("^(" + _e + ")(.*)$", "i"),
            pn = new RegExp("^([+-])=(" + _e + ")", "i"),
            dn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fn = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            hn = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = rn(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = re.camelCase(e),
                        l = t.style;
                    if (e = re.cssProps[a] || (re.cssProps[a] = _(l, a)), s = re.cssHooks[e] || re.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = pn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || re.cssNumber[a] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (u) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = re.camelCase(e);
                return e = re.cssProps[a] || (re.cssProps[a] = _(t.style, a)), s = re.cssHooks[e] || re.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = rn(t, e, i)), "normal" === r && e in fn && (r = fn[e]), "" === n || n ? (o = parseFloat(r), n === !0 || re.isNumeric(o) ? o || 0 : r) : r
            }
        }), re.each(["height", "width"], function(t, e) {
            re.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? un.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, dn, function() {
                        return A(t, e, i)
                    }) : A(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && on(t);
                    return L(t, n, i ? I(t, e, i, ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ie.opacity || (re.cssHooks.opacity = {
            get: function(t, e) {
                return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(r) ? r.replace(an, o) : r + " " + o)
            }
        }), re.cssHooks.marginRight = N(ie.reliableMarginRight, function(t, e) {
            return e ? re.swap(t, {
                display: "inline-block"
            }, rn, [t, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            re.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + ke[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, en.test(t) || (re.cssHooks[t + e].set = L)
        }), re.fn.extend({
            css: function(t, e) {
                return Ie(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (re.isArray(e)) {
                        for (i = on(t), o = e.length; o > s; s++) r[e[s]] = re.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Le(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = O, O.prototype = {
            constructor: O,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = O.propHooks[this.prop];
                return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, re.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, re.fx = O.prototype.init, re.fx.step = {};
        var mn, vn, gn = /^(?:toggle|show|hide)$/,
            yn = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            bn = /queueHooks$/,
            xn = [z],
            wn = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = yn.exec(e),
                        r = o && o[3] || (re.cssNumber[t] ? "" : "px"),
                        s = (re.cssNumber[t] || "px" !== r && +i) && yn.exec(re.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, re.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        re.Animation = re.extend(H, {
                tweener: function(t, e) {
                    re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? xn.unshift(t) : xn.push(t)
                }
            }), re.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? re.extend({}, t) : {
                    complete: n || !n && e || re.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !re.isFunction(e) && e
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Le).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = re.isEmptyObject(t),
                        r = re.speed(e, n, i),
                        s = function() {
                            var e = H(this, re.extend({}, t), r);
                            (o || re._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = re.timers,
                            s = re._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && bn.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && re.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = re._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = re.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(t, e) {
                var n = re.fn[e];
                re.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, o)
                }
            }), re.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                re.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var t, e = re.timers,
                    n = 0;
                for (mn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || re.fx.stop(), mn = void 0
            }, re.fx.timer = function(t) {
                re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                vn || (vn = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(vn), vn = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(t, e) {
                return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, o;
                e = me.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = me.createElement("select"), o = n.appendChild(me.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(i.getAttribute("style")), ie.hrefNormalized = "/a" === i.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = o.selected, ie.enctype = !!me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !o.disabled, t = me.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
            }();
        var Tn = /\r/g;
        re.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = re.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, re(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tn, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = re.find.attr(t, "value");
                        return null != e ? e : re.trim(re.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                                if (e = re(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = re.makeArray(e), s = o.length; s--;)
                            if (i = o[s], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(t, e) {
                    return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
                }
            }, ie.checkOn || (re.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Sn, Cn, En = re.expr.attrHandle,
            Nn = /^(?:checked|selected)$/i,
            _n = ie.getSetAttribute,
            kn = ie.input;
        re.fn.extend({
            attr: function(t, e) {
                return Ie(this, re.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    re.removeAttr(this, t)
                })
            }
        }), re.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Se ? re.prop(t, e, n) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Cn : Sn)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = re.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(xe);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? kn && _n || !Nn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(_n ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Cn = {
            set: function(t, e, n) {
                return e === !1 ? re.removeAttr(t, n) : kn && _n || !Nn.test(n) ? t.setAttribute(!_n && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = En[e] || re.find.attr;
            En[e] = kn && _n || !Nn.test(e) ? function(t, e, i) {
                var o, r;
                return i || (r = En[e], En[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, En[e] = r), o
            } : function(t, e, n) {
                return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), kn && _n || (re.attrHooks.value = {
            set: function(t, e, n) {
                return re.nodeName(t, "input") ? void(t.defaultValue = e) : Sn && Sn.set(t, e, n)
            }
        }), _n || (Sn = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, En.id = En.name = En.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: Sn.set
        }, re.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Sn.set(t, "" === e ? !1 : e, n)
            }
        }, re.each(["width", "height"], function(t, e) {
            re.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ie.style || (re.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ln = /^(?:input|select|textarea|button|object)$/i,
            In = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(t, e) {
                return Ie(this, re.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = re.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !re.isXMLDoc(t), r && (e = re.propFix[e] || e, o = re.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = re.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ln.test(t.nodeName) || In.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
            re.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ie.optSelected || (re.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ie.enctype || (re.propFix.enctype = "encoding");
        var An = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (re.isFunction(t)) return this.each(function(e) {
                    re(this).addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(xe) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = re.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (re.isFunction(t)) return this.each(function(e) {
                    re(this).removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(xe) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            s = t ? re.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                    re(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, o = re(this), r = t.match(xe) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Se || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            re.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), re.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var On = re.now(),
            Dn = /\?/,
            $n = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = re.trim(e + "");
            return o && !re.trim(o.replace($n, function(t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : re.error("Invalid JSON: " + e)
        }, re.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
        };
        var jn, Pn, zn = /#.*$/,
            Mn = /([?&])_=[^&]*/,
            Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Wn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Rn = /^(?:GET|HEAD)$/,
            qn = /^\/\//,
            Fn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Bn = {},
            Un = {},
            Vn = "*/".concat("*");
        try {
            Pn = location.href
        } catch (Qn) {
            Pn = me.createElement("a"), Pn.href = "", Pn = Pn.href
        }
        jn = Fn.exec(Pn.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pn,
                type: "GET",
                isLocal: Wn.test(jn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Vn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? q(q(t, re.ajaxSettings), e) : q(re.ajaxSettings, t)
            },
            ajaxPrefilter: W(Bn),
            ajaxTransport: W(Un),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var o, c, g, y, x, T = e;
                    2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = F(p, w, n)), y = B(p, y, w, o), o ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, g = y.error, o = !g)) : (g = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || T) + "", o ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, g]), w.statusCode(v), v = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? c : g]), m.fireWith(d, [w, T]), l && (f.trigger("ajaxComplete", [w, p]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, u, c, p = re.ajaxSetup({}, e),
                    d = p.context || p,
                    f = p.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                    h = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    v = p.statusCode || {},
                    g = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; e = Hn.exec(s);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, g[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return u && u.abort(e), n(0, e), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Pn) + "").replace(zn, "").replace(qn, jn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain && (i = Fn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), R(Bn, p, e, w), 2 === b) return w;
                l = p.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rn.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (Dn.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mn.test(r) ? r.replace(Mn, "$1_=" + On++) : r + (Dn.test(r) ? "&" : "?") + "_=" + On++)), p.ifModified && (re.lastModified[r] && w.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && w.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[o](p[o]);
                if (u = R(Un, p, e, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, u.send(g, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, n) {
                return re.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return re.get(t, void 0, e, "script")
            }
        }), re.each(["get", "post"], function(t, e) {
            re[e] = function(t, n, i, o) {
                return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            re.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), re._evalUrl = function(t) {
            return re.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, re.fn.extend({
            wrapAll: function(t) {
                if (re.isFunction(t)) return this.each(function(e) {
                    re(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(re.isFunction(t) ? function(e) {
                    re(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = re(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = re.isFunction(t);
                return this.each(function(n) {
                    re(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
        }, re.expr.filters.visible = function(t) {
            return !re.expr.filters.hidden(t)
        };
        var Xn = /%20/g,
            Yn = /\[\]$/,
            Gn = /\r?\n/g,
            Jn = /^(?:submit|button|image|reset|file)$/i,
            Kn = /^(?:input|select|textarea|keygen)/i;
        re.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) U(n, t[n], e, o);
            return i.join("&").replace(Xn, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = re.prop(this, "elements");
                    return t ? re.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !re(this).is(":disabled") && Kn.test(this.nodeName) && !Jn.test(t) && (this.checked || !Ae.test(t))
                }).map(function(t, e) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Gn, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Gn, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || Q()
        } : V;
        var Zn = 0,
            ti = {},
            ei = re.ajaxSettings.xhr();
        t.ActiveXObject && re(t).on("unload", function() {
            for (var t in ti) ti[t](void 0, !0)
        }), ie.cors = !!ei && "withCredentials" in ei, ei = ie.ajax = !!ei, ei && re.ajaxTransport(function(t) {
            if (!t.crossDomain || ie.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var o, r = t.xhr(),
                            s = ++Zn;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function(n, o) {
                            var a, l, u;
                            if (e && (o || 4 === r.readyState))
                                if (delete ti[s], e = void 0, r.onreadystatechange = re.noop, o) 4 !== r.readyState && r.abort();
                                else {
                                    u = {}, a = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                    try {
                                        l = r.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && i(a, l, u, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ti[s] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return re.globalEval(t), t
                }
            }
        }), re.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), re.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = me.head || re("head")[0] || me.documentElement;
                return {
                    send: function(i, o) {
                        e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ni = [],
            ii = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ni.pop() || re.expando + "_" + On++;
                return this[t] = !0, t
            }
        }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ii, "$1" + o) : e.jsonp !== !1 && (e.url += (Dn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || re.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, ni.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), re.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || me;
            var i = de.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
        };
        var oi = re.fn.load;
        re.fn.load = function(t, e, n) {
            if ("string" != typeof t && oi) return oi.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && re.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, re.expr.filters.animated = function(t) {
            return re.grep(re.timers, function(e) {
                return t === e.elem
            }).length
        };
        var ri = t.document.documentElement;
        re.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u, c = re.css(t, "position"),
                    p = re(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = p.offset(), r = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [r, l]) > -1, u ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
            }
        }, re.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    re.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r) return e = r.documentElement, re.contains(e, o) ? (typeof o.getBoundingClientRect !== Se && (i = o.getBoundingClientRect()), n = X(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - re.css(i, "marginTop", !0),
                        left: e.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                    return t || ri
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            re.fn[t] = function(i) {
                return Ie(this, function(t, i, o) {
                    var r = X(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? re(r).scrollLeft() : o, n ? o : re(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(t, e) {
            re.cssHooks[e] = N(ie.pixelPosition, function(t, n) {
                return n ? (n = rn(t, e), nn.test(n) ? re(t).position()[e] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            re.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                re.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ie(this, function(e, n, i) {
                        var o;
                        return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? re.css(e, n, s) : re.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var si = t.jQuery,
            ai = t.$;
        return re.noConflict = function(e) {
            return t.$ === re && (t.$ = ai), e && t.jQuery === re && (t.jQuery = si), re
        }, typeof e === Se && (t.jQuery = t.$ = re), re
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function($) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    $.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            n = this;
        $(this).one("bsTransitionEnd", function() {
            e = !0
        });
        var i = function() {
            e || $(n).trigger($.support.transition.end)
        };
        return setTimeout(i, t), this
    }, $(function() {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(t) {
                return $(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var e = $(this),
                i = e.data("bs.alert");
            i || e.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(e)
        })
    }
    var e = '[data-dismiss="alert"]',
        n = function(t) {
            $(t).on("click", e, this.close)
        };
    n.VERSION = "3.2.0", n.TRANSITION_DURATION = 150, n.prototype.close = function(t) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var i = $(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = $(o);
        t && t.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(t = $.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), $.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(n.TRANSITION_DURATION) : e())
    };
    var i = $.fn.alert;
    $.fn.alert = t, $.fn.alert.Constructor = n, $.fn.alert.noConflict = function() {
        return $.fn.alert = i, this
    }, $(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.button"),
                o = "object" == typeof t && t;
            i || n.data("bs.button", i = new e(this, o)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }
    var e = function(t, n) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, n), this.isLoading = !1
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(t) {
        var e = "disabled",
            n = this.$element,
            i = n.is("input") ? "val" : "html",
            o = n.data();
        t += "Text", null == o.resetText && n.data("resetText", n[i]()), n[i](null == o[t] ? this.options[t] : o[t]), setTimeout($.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = $.fn.button;
    $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function() {
        return $.fn.button = n, this
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var n = $(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), t.call(n, "toggle"), e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        $(t.target).closest(".btn").toggleClass("focus", "focus" == t.type)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.carousel"),
                o = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t),
                r = "string" == typeof t ? t : o.slide;
            i || n.data("bs.carousel", i = new e(this, o)), "number" == typeof t ? i.to(t) : r ? i[r]() : o.interval && i.pause().cycle()
        })
    }
    var e = function(t, e) {
        this.$element = $(t).on("keydown.bs.carousel", $.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
    };
    e.VERSION = "3.2.0", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, e.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function(t, e) {
        var n = "prev" == t ? -1 : 1,
            i = this.getItemIndex(e),
            o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, e.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(t, n) {
        var i = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(t, i),
            r = this.interval,
            s = "next" == t ? "left" : "right",
            a = "next" == t ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = $.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = $(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var d = $.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return $.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var n = $.fn.carousel;
    $.fn.carousel = t, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = n, this
    }, $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var n, i = $(this),
            o = $(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = $.extend({}, o.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (r.interval = !1), t.call(o, r), s && o.data("bs.carousel").to(s), e.preventDefault()
        }
    }), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var e = $(this);
            t.call(e, e.data())
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.collapse"),
                o = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && o.toggle && "show" == t && (o.toggle = !1), i || n.data("bs.collapse", i = new e(this, o)), "string" == typeof t && i[t]()
        })
    }
    var e = function(t, n) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.VERSION = "3.2.0", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = $.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    t.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!$.support.transition) return s.call(this);
                var a = $.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", $.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][a])
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return $.support.transition ? void this.$element[n](0).one("bsTransitionEnd", $.proxy(i, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = $.fn.collapse;
    $.fn.collapse = t, $.fn.collapse.Constructor = e, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = n, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var n, i = $(this),
            o = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            r = $(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : i.data(),
            l = i.attr("data-parent"),
            u = l && $(l);
        s && s.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i.toggleClass("collapsed", r.hasClass("in"))), t.call(r, a)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        t && 3 === t.which || ($(i).remove(), $(o).each(function() {
            var n = $(this),
                i = e(n),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = $.Event("hide.bs.dropdown", o)), t.isDefaultPrevented() || (n.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }

    function e(t) {
        var e = t.attr("data-target");
        e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var n = e && $(e);
        return n && n.length ? n : t.parent()
    }

    function n(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("bs.dropdown");
            n || e.data("bs.dropdown", n = new r(this)), "string" == typeof t && n[t].call(e)
        })
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(t) {
            $(t).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.2.0", r.prototype.toggle = function(n) {
        var i = $(this);
        if (!i.is(".disabled, :disabled")) {
            var o = e(i),
                r = o.hasClass("open");
            if (t(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", t);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(n = $.Event("show.bs.dropdown", s)), n.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, r.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var n = $(this);
            if (t.preventDefault(), t.stopPropagation(), !n.is(".disabled, :disabled")) {
                var i = e(n),
                    r = i.hasClass("open");
                if (!r || r && 27 == t.keyCode) return 27 == t.which && i.find(o).trigger("focus"), n.trigger("click");
                var s = " li:not(.divider):visible a",
                    a = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (a.length) {
                    var l = a.index(a.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = $.fn.dropdown;
    $.fn.dropdown = n, $.fn.dropdown.Constructor = r, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = s, this
    }, $(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), + function($) {
    "use strict";

    function t(t, n) {
        return this.each(function() {
            var i = $(this),
                o = i.data("bs.modal"),
                r = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t);
            o || i.data("bs.modal", o = new e(this, r)), "string" == typeof t ? o[t](n) : r.show && o.show(n)
        })
    }
    var e = function(t, e) {
        this.options = e, this.$body = $(document.body), this.$element = $(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.2.0", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(t) {
        var n = this,
            i = $.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function() {
            var i = $.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = $.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
        }))
    }, e.prototype.hide = function(t) {
        t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(t) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = $.support.transition && i;
            if (this.$backdrop = $('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss.bs.modal", $.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), t && t()
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
        } else t && t()
    }, e.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function() {
        return $.fn.modal = n, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var n = $(this),
            i = n.attr("href"),
            o = $(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : $.extend({
                remote: !/#/.test(i) && i
            }, o.data(), n.data());
        n.is("a") && e.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), t.call(o, r, this)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (i || "destroy" != t) && (i || n.data("bs.tooltip", i = new e(this, o)), "string" == typeof t && i[t]())
        })
    }
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.2.0", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(t, e, n) {
        this.enabled = !0, this.type = t, this.$element = $(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var r = i[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            else if ("manual" != r) {
                var s = "hover" == r ? "mouseenter" : "focusin",
                    a = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(t) {
        return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, e.prototype.getDelegateOptions = function() {
        var t = {},
            e = this.getDefaults();
        return this._options && $.each(this._options, function(n, i) {
            e[n] != i && (t[n] = i)
        }), t
    }, e.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show()
    }, e.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide()
    }, e.prototype.show = function() {
        var t = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var n = $.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(s);
            l && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(),
                c = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (l) {
                var d = s,
                    f = this.$element.parent(),
                    h = this.getPosition(f);
                s = "bottom" == s && u.top + u.height + p - h.scroll > h.height ? "top" : "top" == s && u.top - h.scroll - p < 0 ? "bottom" : "right" == s && u.right + c > h.width ? "left" : "left" == s && u.left - c < h.left ? "right" : s, o.removeClass(d).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, c, p);
            this.applyPlacement(m, s);
            var v = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            $.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var n = this.tip(),
            i = n[0].offsetWidth,
            o = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            s = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(s) && (s = 0), t.top = t.top + r, t.left = t.left + s, $.offset.setOffset(n[0], $.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), n.addClass("in");
        var a = n[0].offsetWidth,
            l = n[0].offsetHeight;
        "top" == e && l != o && (t.top = t.top + o - l);
        var u = this.getViewportAdjustedDelta(e, t, a, l);
        u.left ? t.left += u.left : t.top += u.top;
        var c = u.left ? 2 * u.left - i + a : 2 * u.top - o + l,
            p = u.left ? "left" : "top",
            d = u.left ? "offsetWidth" : "offsetHeight";
        n.offset(t), this.replaceArrow(c, n[0][d], p)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            o = $.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(e.TRANSITION_DURATION) : t(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(t) {
        t = t || this.$element;
        var e = t[0],
            n = "BODY" == e.tagName,
            i = window.SVGElement && e instanceof window.SVGElement,
            o = e.getBoundingClientRect(),
            r = n ? {
                top: 0,
                left: 0
            } : t.offset(),
            s = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            a = i ? {} : {
                width: n ? $(window).width() : t.outerWidth(),
                height: n ? $(window).height() : t.outerHeight()
            };
        return $.extend({}, o, s, a, r)
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.width && (o.left = s.left + s.width - c)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, e.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(t) {
        var e = this;
        t && (e = $(t.currentTarget).data("bs." + this.type), e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = $.fn.tooltip;
    $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = n, this
    }
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.popover"),
                o = "object" == typeof t && t;
            (i || "destroy" != t) && (i || n.data("bs.popover", i = new e(this, o)), "string" == typeof t && i[t]())
        })
    }
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.2.0", e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function() {
        return this.$tip || (this.$tip = $(this.options.template)), this.$tip
    };
    var n = $.fn.popover;
    $.fn.popover = t, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function() {
        return $.fn.popover = n, this
    }
}(jQuery), + function($) {
    "use strict";

    function t(e, n) {
        var i = $.proxy(this.process, this);
        this.$body = $("body"), this.$scrollElement = $($(e).is("body") ? window : e), this.options = $.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }

    function e(e) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.scrollspy"),
                o = "object" == typeof e && e;
            i || n.data("bs.scrollspy", i = new t(this, o)), "string" == typeof e && i[e]()
        })
    }
    t.VERSION = "3.2.0", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = "offset",
            e = 0;
        $.isWindow(this.$scrollElement[0]) || (t = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var n = this;
        this.$body.find(this.selector).map(function() {
            var n = $(this),
                i = n.data("target") || n.attr("href"),
                o = /^#./.test(i) && $(i);
            return o && o.length && o.is(":visible") && [
                [o[t]().top + e, i]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var t = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.getScrollHeight(),
            n = this.options.offset + e - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            r = this.activeTarget,
            s;
        if (this.scrollHeight != e && this.refresh(), t >= n) return r != (s = o[o.length - 1]) && this.activate(s);
        if (r && t <= i[0]) return r != (s = o[0]) && this.activate(s);
        for (s = i.length; s--;) r != o[s] && t >= i[s] && (!i[s + 1] || t <= i[s + 1]) && this.activate(o[s])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            n = $(e).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    };
    var n = $.fn.scrollspy;
    $.fn.scrollspy = e, $.fn.scrollspy.Constructor = t, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = n, this
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var t = $(this);
            e.call(t, t.data())
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.tab");
            i || n.data("bs.tab", i = new e(this)), "string" == typeof t && i[t]()
        })
    }
    var e = function(t) {
        this.element = $(t)
    };
    e.VERSION = "3.2.0", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            n = t.data("target");
        if (n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = e.find(".active:last a")[0],
                o = $.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var r = $(n);
                this.activate(t.closest("li"), e), this.activate(r, r.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, e.prototype.activate = function(t, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var r = n.find("> .active"),
            s = i && $.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var n = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function() {
        return $.fn.tab = n, this
    }, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t.call($(this), "show")
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = $(this),
                i = n.data("bs.affix"),
                o = "object" == typeof t && t;
            i || n.data("bs.affix", i = new e(this, o)), "string" == typeof t && i[t]()
        })
    }
    var e = function(t, n) {
        this.options = $.extend({}, e.DEFAULTS, n), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.VERSION = "3.2.0", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            u = a ? s : e;
        return null != n && n >= l ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                n = this.options.offset,
                i = n.top,
                o = n.bottom,
                r = $("body").height();
            "object" != typeof n && (o = i = n), "function" == typeof i && (i = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var s = this.getState(r, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (s ? "-" + s : ""),
                    l = $.Event(a + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: r - t - o
            })
        }
    };
    var n = $.fn.affix;
    $.fn.affix = t, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function() {
        return $.fn.affix = n, this
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var e = $(this),
                n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.call(e, n)
        })
    })
}(jQuery),
function($, t, e, n) {
    function i(t, e) {
        this.element = t, this.options = $.extend({}, r, e), this._defaults = r, this._name = o, this.init()
    }
    var o = "stellar",
        r = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        s = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[u];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[u];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        a = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, n, i, o) {
                    t[0].style[u] = "translate3d(" + (e - n) + "px, " + (i - o) + "px, 0)"
                }
            }
        },
        l = function() {
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                e = $("script")[0].style,
                n = "",
                i;
            for (i in e)
                if (t.test(i)) {
                    n = i.match(t)[0];
                    break
                }
            return "WebkitOpacity" in e && (n = "Webkit"), "KhtmlOpacity" in e && (n = "Khtml"),
                function(t) {
                    return n + (n.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }(),
        u = l("transform"),
        c = $("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== n,
        p = c ? function(t, e, n) {
            t.css({
                "background-position-x": e,
                "background-position-y": n
            })
        } : function(t, e, n) {
            t.css("background-position", e + " " + n)
        },
        d = c ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        f = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };
    i.prototype = {
        init: function() {
            this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === e.body && (this.element = t), this.$scrollElement = $(this.element), this.$element = this.element === t ? $("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? $(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = s[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var t = this,
                e = s[t.options.scrollProperty],
                n = a[t.options.positionProperty],
                i = e.setLeft,
                o = e.setTop;
            this._setScrollLeft = "function" == typeof i ? function(e) {
                i(t.$scrollElement, e)
            } : $.noop, this._setScrollTop = "function" == typeof o ? function(e) {
                o(t.$scrollElement, e)
            } : $.noop, this._setPosition = n.setPosition || function(e, i, o, r, s) {
                t.options.horizontalScrolling && n.setLeft(e, i, o), t.options.verticalScrolling && n.setTop(e, r, s)
            }
        },
        _handleWindowLoadAndResize: function() {
            var e = this,
                n = $(t);
            e.options.responsive && n.bind("load." + this.name, function() {
                e.refresh()
            }), n.bind("resize." + this.name, function() {
                e._detectViewport(), e.options.responsive && e.refresh()
            })
        },
        refresh: function(e) {
            var n = this,
                i = n._getScrollLeft(),
                o = n._getScrollTop();
            e && e.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), e && e.firstLoad && /WebKit/.test(navigator.userAgent) && $(t).load(function() {
                var t = n._getScrollLeft(),
                    e = n._getScrollTop();
                n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
            }), this._setScrollLeft(i), this._setScrollTop(o)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var t = this,
                e = this._getScrollLeft(),
                i = this._getScrollTop();
            if (this.particles !== n)
                for (var o = this.particles.length - 1; o >= 0; o--) this.particles[o].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(e) {
                var i = $(this),
                    o, r, s, a, l, u, c, p, d, f = 0,
                    h = 0,
                    m = 0,
                    v = 0;
                if (i.data("stellar-elementIsActive")) {
                    if (i.data("stellar-elementIsActive") !== this) return
                } else i.data("stellar-elementIsActive", this);
                t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), s = i.position().left, a = i.position().top, l = "auto" === i.css("margin-left") ? 0 : parseInt(i.css("margin-left"), 10), u = "auto" === i.css("margin-top") ? 0 : parseInt(i.css("margin-top"), 10), p = i.offset().left - l, d = i.offset().top - u, i.parents().each(function() {
                    var t = $(this);
                    return t.data("stellar-offset-parent") === !0 ? (f = m, h = v, c = t, !1) : (m += t.position().left, void(v += t.position().top))
                }), o = i.data("stellar-horizontal-offset") !== n ? i.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : t.horizontalOffset, r = i.data("stellar-vertical-offset") !== n ? i.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: "fixed" === i.css("position"),
                    horizontalOffset: o,
                    verticalOffset: r,
                    startingPositionLeft: s,
                    startingPositionTop: a,
                    startingOffsetLeft: p,
                    startingOffsetTop: d,
                    parentOffsetLeft: f,
                    parentOffsetTop: h,
                    stellarRatio: i.data("stellar-ratio") !== n ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var t = this,
                e = this._getScrollLeft(),
                i = this._getScrollTop(),
                o;
            this.backgrounds = [], this.options.parallaxBackgrounds && (o = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (o = o.add(this.$element)), o.each(function() {
                var o = $(this),
                    r = d(o),
                    s, a, l, u, c, f, h, m, v, g = 0,
                    y = 0,
                    b = 0,
                    x = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? p(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", r[0]), o.data("stellar-backgroundStartingTop", r[1])), c = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), f = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), h = o.offset().left - c - e, m = o.offset().top - f - i, o.parents().each(function() {
                    var t = $(this);
                    return t.data("stellar-offset-parent") === !0 ? (g = b, y = x, v = t, !1) : (b += t.position().left, void(x += t.position().top))
                }), s = o.data("stellar-horizontal-offset") !== n ? o.data("stellar-horizontal-offset") : v !== n && v.data("stellar-horizontal-offset") !== n ? v.data("stellar-horizontal-offset") : t.horizontalOffset, a = o.data("stellar-vertical-offset") !== n ? o.data("stellar-vertical-offset") : v !== n && v.data("stellar-vertical-offset") !== n ? v.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({
                    $element: o,
                    $offsetParent: v,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: s,
                    verticalOffset: a,
                    startingValueLeft: r[0],
                    startingValueTop: r[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(r[0], 10)) ? 0 : parseInt(r[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(r[1], 10)) ? 0 : parseInt(r[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: h,
                    startingOffsetTop: m,
                    parentOffsetLeft: g,
                    parentOffsetTop: y,
                    stellarRatio: o.data("stellar-background-ratio") === n ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, n, i, o;
            for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--) i = this.backgrounds[o], i.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), p(i.$element, i.startingValueLeft, i.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = $.noop, $(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var e = this,
                n = $(t);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                e.horizontalOffset = e.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                e.verticalOffset = e.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t = this._getScrollLeft(),
                e = this._getScrollTop(),
                n, i, o, r, s, a, l, u = !0,
                c = !0,
                d, f, h, m, v;
            if (this.currentScrollLeft !== t || this.currentScrollTop !== e || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = t, this.currentScrollTop = e, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, v = this.particles.length - 1; v >= 0; v--) o = this.particles[v], r = o.isFixed ? 1 : 0, this.options.horizontalScrolling ? (d = (t + o.horizontalOffset + this.viewportOffsetLeft + o.startingPositionLeft - o.startingOffsetLeft + o.parentOffsetLeft) * -(o.stellarRatio + r - 1) + o.startingPositionLeft, h = d - o.startingPositionLeft + o.startingOffsetLeft) : (d = o.startingPositionLeft, h = o.startingOffsetLeft), this.options.verticalScrolling ? (f = (e + o.verticalOffset + this.viewportOffsetTop + o.startingPositionTop - o.startingOffsetTop + o.parentOffsetTop) * -(o.stellarRatio + r - 1) + o.startingPositionTop, m = f - o.startingPositionTop + o.startingOffsetTop) : (f = o.startingPositionTop, m = o.startingOffsetTop), this.options.hideDistantElements && (c = !this.options.horizontalScrolling || h + o.width > (o.isFixed ? 0 : t) && h < (o.isFixed ? 0 : t) + this.viewportWidth + this.viewportOffsetLeft, u = !this.options.verticalScrolling || m + o.height > (o.isFixed ? 0 : e) && m < (o.isFixed ? 0 : e) + this.viewportHeight + this.viewportOffsetTop), c && u ? (o.isHidden && (this.options.showElement(o.$element), o.isHidden = !1), this._setPosition(o.$element, d, o.startingPositionLeft, f, o.startingPositionTop)) : o.isHidden || (this.options.hideElement(o.$element), o.isHidden = !0);
                for (v = this.backgrounds.length - 1; v >= 0; v--) s = this.backgrounds[v], r = s.isFixed ? 0 : 1, a = this.options.horizontalScrolling ? (t + s.horizontalOffset - this.viewportOffsetLeft - s.startingOffsetLeft + s.parentOffsetLeft - s.startingBackgroundPositionLeft) * (r - s.stellarRatio) + "px" : s.startingValueLeft, l = this.options.verticalScrolling ? (e + s.verticalOffset - this.viewportOffsetTop - s.startingOffsetTop + s.parentOffsetTop - s.startingBackgroundPositionTop) * (r - s.stellarRatio) + "px" : s.startingValueTop, p(s.$element, a, l)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                n = function() {
                    t._repositionElements(), e = !1
                },
                i = function() {
                    e || (f(n), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, i), i()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                f(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, $.fn[o] = function(t) {
        var e = arguments;
        return t === n || "object" == typeof t ? this.each(function() {
            $.data(this, "plugin_" + o) || $.data(this, "plugin_" + o, new i(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var n = $.data(this, "plugin_" + o);
            n instanceof i && "function" == typeof n[t] && n[t].apply(n, Array.prototype.slice.call(e, 1)), "destroy" === t && $.data(this, "plugin_" + o, null)
        }) : void 0
    }, $[o] = function(e) {
        var n = $(t);
        return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    }, $[o].scrollProperty = s, $[o].positionProperty = a, t.Stellar = i
}(jQuery, this, document), $(document).ready(function() {
        var t = function(t, e, n) {
            this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(n, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
        };
        t.prototype.tick = function() {
            var t = this.loopNum % this.toRotate.length,
                e = this.toRotate[t];
            this.txt = this.isDeleting ? e.substring(0, this.txt.length - 1) : e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
            var n = this,
                i = 300 - 100 * Math.random();
            this.isDeleting && (i /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, i = 500) : (i = this.period, this.isDeleting = !0), setTimeout(function() {
                n.tick()
            }, i)
        }, window.onload = function() {
            for (var e = document.getElementsByClassName("txt-rotate"), n = 0; n < e.length; n++) {
                var i = e[n].getAttribute("data-rotate"),
                    o = e[n].getAttribute("data-period");
                i && new t(e[n], JSON.parse(i), o)
            }
            var r = document.createElement("style");
            r.type = "text/css", r.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }", document.body.appendChild(r)
        }
    }),
    function(t) {
        function e() {}

        function n($) {
            function t(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    $.isPlainObject(t) && (this.options = $.extend(!0, this.options, t))
                })
            }

            function n(t, e) {
                $.fn[t] = function(n) {
                    if ("string" == typeof n) {
                        for (var r = i.call(arguments, 1), s = 0, a = this.length; a > s; s++) {
                            var l = this[s],
                                u = $.data(l, t);
                            if (u)
                                if ($.isFunction(u[n]) && "_" !== n.charAt(0)) {
                                    var c = u[n].apply(u, r);
                                    if (void 0 !== c) return c
                                } else o("no such method '" + n + "' for " + t + " instance");
                            else o("cannot call methods on " + t + " prior to initialization; attempted to call '" + n + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var i = $.data(this, t);
                        i ? (i.option(n), i._init()) : (i = new e(this, n), $.data(this, t, i))
                    })
                }
            }
            if ($) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return $.bridget = function(e, i) {
                    t(i), n(e, i)
                }, $.bridget
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var n = t.event;
            return n.target = n.target || n.srcElement || e, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(t, e, n) {
            t.addEventListener(e, n, !1)
        } : n.attachEvent && (i = function(t, n, i) {
            t[n + i] = i.handleEvent ? function() {
                var n = e(t);
                i.handleEvent.call(i, n)
            } : function() {
                var n = e(t);
                i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var o = function() {};
        n.removeEventListener ? o = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        } : n.detachEvent && (o = function(t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {
            bind: i,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function n(t) {
            var n = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || n || i()
        }

        function i() {
            e.isReady = !0;
            for (var t = 0, n = s.length; n > t; t++) {
                var i = s[t];
                i()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window),
    /*!
     * EventEmitter v4.2.9 - git.io/ee
     * Oliver Caldwell
     * MIT license
     * @preserve
     */
    function() {
        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function e() {
                return this[t].apply(this, arguments)
            }
        }
        var i = t.prototype,
            o = this,
            r = o.EventEmitter;
        i.getListeners = function s(t) {
            var e = this._getEvents(),
                n, i;
            if (t instanceof RegExp) {
                n = {};
                for (i in e) e.hasOwnProperty(i) && t.test(i) && (n[i] = e[i])
            } else n = e[t] || (e[t] = []);
            return n
        }, i.flattenListeners = function a(t) {
            var e = [],
                n;
            for (n = 0; n < t.length; n += 1) e.push(t[n].listener);
            return e
        }, i.getListenersAsObject = function l(t) {
            var e = this.getListeners(t),
                n;
            return e instanceof Array && (n = {}, n[t] = e), n || e
        }, i.addListener = function u(t, n) {
            var i = this.getListenersAsObject(t),
                o = "object" == typeof n,
                r;
            for (r in i) i.hasOwnProperty(r) && -1 === e(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function c(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function p(t) {
            return this.getListeners(t), this
        }, i.defineEvents = function d(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function f(t, n) {
            var i = this.getListenersAsObject(t),
                o, r;
            for (r in i) i.hasOwnProperty(r) && (o = e(i[r], n), -1 !== o && i[r].splice(o, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function h(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function m(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function v(t, e, n) {
            var i, o, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (i = n.length; i--;) r.call(this, e, n[i]);
            else
                for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
            return this
        }, i.removeEvent = function g(t) {
            var e = typeof t,
                n = this._getEvents(),
                i;
            if ("string" === e) delete n[t];
            else if (t instanceof RegExp)
                for (i in n) n.hasOwnProperty(i) && t.test(i) && delete n[i];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function y(t, e) {
            var n = this.getListenersAsObject(t),
                i, o, r, s;
            for (r in n)
                if (n.hasOwnProperty(r))
                    for (o = n[r].length; o--;) i = n[r][o], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function b(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function x(t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function w() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function T() {
            return this._events || (this._events = {})
        }, t.noConflict = function S() {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof i[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = n.length; r > o; o++)
                    if (e = n[o] + t, "string" == typeof i[e]) return e
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function n(t) {
            var e = parseFloat(t),
                n = -1 === t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function i() {}

        function o() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, n = a.length; n > e; e++) {
                var i = a[e];
                t[i] = 0
            }
            return t
        }

        function r(e) {
            function i() {
                if (!u) {
                    u = !0;
                    var i = t.getComputedStyle;
                    if (c = function() {
                            var t = i ? function(t) {
                                return i(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function e(n) {
                                var i = t(n);
                                return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), p = e("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[p] = "border-box";
                        var r = document.body || document.documentElement;
                        r.appendChild(o);
                        var a = c(o);
                        d = 200 === n(a.width), r.removeChild(o)
                    }
                }
            }

            function r(t) {
                if (i(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = c(t);
                    if ("none" === e.display) return o();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var s = r.isBorderBox = !(!p || !e[p] || "border-box" !== e[p]), u = 0, f = a.length; f > u; u++) {
                        var h = a[u],
                            m = e[h];
                        m = l(t, m);
                        var v = parseFloat(m);
                        r[h] = isNaN(v) ? 0 : v
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        y = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        x = r.marginTop + r.marginBottom,
                        w = r.borderLeftWidth + r.borderRightWidth,
                        T = r.borderTopWidth + r.borderBottomWidth,
                        S = s && d,
                        C = n(e.width);
                    C !== !1 && (r.width = C + (S ? 0 : g + w));
                    var E = n(e.height);
                    return E !== !1 && (r.height = E + (S ? 0 : y + T)), r.innerWidth = r.width - (g + w), r.innerHeight = r.height - (y + T), r.outerWidth = r.width + b, r.outerHeight = r.height + x, r
                }
            }

            function l(e, n) {
                if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
                var i = e.style,
                    o = i.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
            }
            var u = !1,
                c, p, d;
            return r
        }
        var s = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t, e) {
            return t[r](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function i(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function o(t, i) {
            return n(t), e(t, i)
        }
        var r = function() {
                if (t.matchesSelector) return "matchesSelector";
                for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                    var o = e[n],
                        r = o + "MatchesSelector";
                    if (t[r]) return r
                }
            }(),
            s;
        if (r) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : o
        } else s = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
    }(Element.prototype),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function i(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r("transition"),
                u = r("transform"),
                c = l && u,
                p = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = function() {
                    for (var t = {}, e = 0, n = f.length; n > e; e++) {
                        var i = f[e],
                            o = r(i);
                        o && o !== i && (t[i] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var n in t) {
                    var i = h[n] || n;
                    e[i] = t[n]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    n = e.isOriginLeft,
                    i = e.isOriginTop,
                    o = parseInt(t[n ? "left" : "right"], 10),
                    r = parseInt(t[i ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    n = {};
                e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var m = p ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var n = this.position.x,
                    i = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                var a = t - n,
                    l = e - i,
                    u = {},
                    c = this.layout.options;
                a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = m(a, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    var i = this.element.offsetHeight;
                    i = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var v = u && i(u) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: v,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        i = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                        var o = e.onEnd[i];
                        o.call(this), delete e.onEnd[i]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var n in t) e[n] = "";
                this.css(e)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === p.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var n = f(e, t); - 1 !== n && e.splice(n, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        }

        function s(n, s, p, f, h, m) {
            function v(t, n) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
                var i = ++g;
                this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                y = {};
            return v.namespace = "outlayer", v.Item = m, v.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(v.prototype, p.prototype), v.prototype.option = function(t) {
                e(this.options, t)
            }, v.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, v.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, v.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new n(s, this);
                    i.push(a)
                }
                return i
            }, v.prototype._filterFindItemElements = function(t) {
                t = i(t);
                for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (d(s))
                        if (e) {
                            h(s, e) && n.push(s);
                            for (var a = s.querySelectorAll(e), l = 0, u = a.length; u > l; l++) n.push(a[l])
                        } else n.push(s)
                }
                return n
            }, v.prototype.getItemElements = function() {
                for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
                return t
            }, v.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, v.prototype._init = v.prototype.layout, v.prototype._resetLayout = function() {
                this.getSize()
            }, v.prototype.getSize = function() {
                this.size = f(this.element)
            }, v.prototype._getMeasurement = function(t, e) {
                var n = this.options[t],
                    i;
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : d(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
            }, v.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, v.prototype._getItemsForLayout = function(t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n];
                    o.isIgnored || e.push(o)
                }
                return e
            }, v.prototype._layoutItems = function(t, e) {
                function n() {
                    i.emitEvent("layoutComplete", [i, t])
                }
                var i = this;
                if (!t || !t.length) return void n();
                this._itemsOn(t, "layout", n);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        l = this._getItemLayoutPosition(a);
                    l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
                }
                this._processLayoutQueue(o)
            }, v.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, v.prototype._processLayoutQueue = function(t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, v.prototype._positionItem = function(t, e, n, i) {
                i ? t.goTo(e, n) : t.moveTo(e, n)
            }, v.prototype._postLayout = function() {
                this.resizeContainer()
            }, v.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, v.prototype._getContainerSize = c, v.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var n = this.size;
                    n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, v.prototype._itemsOn = function(t, e, n) {
                function i() {
                    return o++, o === r && n.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                    var u = t[a];
                    u.on(e, i)
                }
            }, v.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, v.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, v.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        this.ignore(i)
                    }
                }
            }, v.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        o(i, this.stamps), this.unignore(i)
                    }
            }, v.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
            }, v.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var n = this.stamps[t];
                        this._manageStamp(n)
                    }
                }
            }, v.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, v.prototype._manageStamp = c, v.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    i = f(t),
                    o = {
                        left: e.left - n.left - i.marginLeft,
                        top: e.top - n.top - i.marginTop,
                        right: n.right - e.right - i.marginRight,
                        bottom: n.bottom - e.bottom - i.marginBottom
                    };
                return o
            }, v.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, v.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
            }, v.prototype.unbindResize = function() {
                this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound = !1
            }, v.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, v.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, v.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, v.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, v.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, v.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
                }
            }, v.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var n = 0; e > n; n++) {
                        var i = t[n];
                        i.reveal()
                    }
            }, v.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var n = 0; e > n; n++) {
                        var i = t[n];
                        i.hide()
                    }
            }, v.prototype.getItem = function(t) {
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    if (i.element === t) return i
                }
            }, v.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], n = 0, i = t.length; i > n; n++) {
                        var o = t[n],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, v.prototype.remove = function(t) {
                t = i(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var n = 0, r = e.length; r > n; n++) {
                        var s = e[n];
                        s.remove(), o(s, this.items)
                    }
                }
            }, v.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    i.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete y[o], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
            }, v.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && y[e]
            }, v.create = function(t, n) {
                function i() {
                    v.apply(this, arguments)
                }
                return Object.create ? i.prototype = Object.create(v.prototype) : e(i.prototype, v.prototype), i.prototype.constructor = i, i.defaults = e({}, v.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = v.data, i.Item = function o() {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, s(function() {
                    for (var e = r(t), n = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, c = n.length; c > s; s++) {
                        var p = n[s],
                            d = p.getAttribute(o),
                            f;
                        try {
                            f = d && JSON.parse(d)
                        } catch (h) {
                            l && l.error("Error parsing " + o + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + h);
                            continue
                        }
                        var m = new i(p, f);
                        u && u.data(p, t, m)
                    }
                }), u && u.bridget && u.bridget(t, i), i
            }, v.Item = m, v
        }
        var a = t.document,
            l = t.console,
            u = t.jQuery,
            c = function() {},
            p = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function h(t) {
                return t instanceof HTMLElement
            } : function m(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var n in t) {
                        var i = e[n];
                        this.sortData[n] = i(this.element, this)
                    }
                }
            };
            var n = e.prototype.destroy;
            return e.prototype.destroy = function() {
                n.apply(this, arguments), this.css({
                    display: ""
                })
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function n(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = i.length; r > o; o++) {
                    var s = i[o];
                    n.prototype[s] = t(s)
                }
            }(), n.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    n = this.isotope.size && e;
                return n && e.innerHeight !== this.isotope.size.innerHeight
            }, n.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, n.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, n.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, n.prototype.getSegmentSize = function(t, e) {
                var n = t + e,
                    i = "outer" + e;
                if (this._getMeasurement(n, i), !this[n]) {
                    var o = this.getFirstItemSize();
                    this[n] = o && o[i] || this.isotope.size["inner" + e]
                }
            }, n.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, n.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, n.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, n.modes = {}, n.create = function(t, e) {
                function i() {
                    n.apply(this, arguments)
                }
                return i.prototype = new n, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i, i
            }, n
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var i = t.create("masonry");
            return i.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, i.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        n = t && t.element;
                    this.columnWidth = n && e(n).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, i.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    n = e(t);
                this.containerWidth = n && n.innerWidth
            }, i.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && 1 > e ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = n(r, s), l = {
                        x: this.columnWidth * a,
                        y: s
                    }, u = s + t.size.outerHeight, c = this.cols + 1 - r.length, p = 0; c > p; p++) this.colYs[a + p] = u;
                return l
            }, i.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                    var o = this.colYs.slice(i, i + t);
                    e[i] = Math.max.apply(Math, o)
                }
                return e
            }, i.prototype._manageStamp = function(t) {
                var n = e(t),
                    i = this._getElementOffset(t),
                    o = this.options.isOriginLeft ? i.left : i.right,
                    r = o + n.outerWidth,
                    s = Math.floor(o / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
            }, i.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, i.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, i.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, i
        }
        var n = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                if (o === e) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t, n) {
            var i = t.create("masonry"),
                o = i.prototype._getElementOffset,
                r = i.prototype.layout,
                s = i.prototype._getMeasurement;
            e(i.prototype, n.prototype), i.prototype._getElementOffset = o, i.prototype.layout = r, i.prototype._getMeasurement = s;
            var a = i.prototype.measureColumns;
            i.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var l = i.prototype._manageStamp;
            return i.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : "object" == typeof exports ? module.exports = n(require("../layout-mode"), require("masonry-layout")) : n(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    n = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
                var i = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    n = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: n
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === c.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var n = p(e, t); - 1 !== n && e.splice(n, 1)
        }

        function r(t, n, r, l, c) {
            function p(t, e) {
                return function n(i, o) {
                    for (var r = 0, s = t.length; s > r; r++) {
                        var a = t[r],
                            l = i.sortData[a],
                            u = o.sortData[a];
                        if (l > u || u > l) {
                            var c = void 0 !== e[a] ? e[a] : e,
                                p = c ? 1 : -1;
                            return (l > u ? 1 : -1) * p
                        }
                    }
                    return 0
                }
            }
            var d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = l, d.LayoutMode = c, d.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in c.modes) this._initLayoutMode(e)
            }, d.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, d.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    o.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, d.prototype._initLayoutMode = function(t) {
                var n = c.modes[t],
                    i = this.options[t] || {};
                this.options[t] = n.options ? e(n.options, i) : i, this.modes[t] = new n(this)
            }, d.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
            }, d.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, d.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, d.prototype._filter = function(t) {
                function e() {
                    p.reveal(o), p.hide(r)
                }
                var n = this.options.filter;
                n = n || "*";
                for (var i = [], o = [], r = [], s = this._getFilterTest(n), a = 0, l = t.length; l > a; a++) {
                    var u = t[a];
                    if (!u.isIgnored) {
                        var c = s(u);
                        c && i.push(u), c && u.isHidden ? o.push(u) : c || u.isHidden || r.push(u)
                    }
                }
                var p = this;
                return this._isInstant ? this._noTransition(e) : e(), i
            }, d.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, d.prototype.updateSortData = function(t) {
                var e;
                t ? (t = i(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
            }, d.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var n = t[e];
                    this._sorters[e] = f(n)
                }
            }, d.prototype._updateItemsSortData = function(t) {
                for (var e = t && t.length, n = 0; e && e > n; n++) {
                    var i = t[n];
                    i.updateSortData()
                }
            };
            var f = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var n = a(t).split(" "),
                        i = n[0],
                        o = i.match(/^\[(.+)\]$/),
                        r = o && o[1],
                        s = e(r, i),
                        l = d.sortDataParsers[n[1]];
                    return t = l ? function(t) {
                        return t && l(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var n;
                    return n = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var n = t.querySelector(e);
                        return n && u(n)
                    }
                }
                return t
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, d.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        n = p(e, this.options.sortAscending);
                    this.filteredItems.sort(n), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, d.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, d.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, d.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, d.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, d.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, d.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, d.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var n = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(n)
                }
            }, d.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(n), this.filteredItems = i.concat(this.filteredItems)
                }
            }, d.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, d.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var n, i, o = e.length;
                    for (n = 0; o > n; n++) i = e[n], this.element.appendChild(i.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                            this.hide(r)
                        }), n = 0; o > n; n++) e[n].isLayoutInstant = !0;
                    for (this.arrange(), n = 0; o > n; n++) delete e[n].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var h = d.prototype.remove;
            return d.prototype.remove = function(t) {
                t = i(t);
                var e = this.getItems(t);
                if (h.call(this, t), e && e.length)
                    for (var n = 0, r = e.length; r > n; n++) {
                        var s = e[n];
                        o(s, this.filteredItems)
                    }
            }, d.prototype.shuffle = function() {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var n = this.items[t];
                    n.sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, d.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var n = t.call(this);
                return this.options.transitionDuration = e, n
            }, d.prototype.getFilteredItemElements = function() {
                for (var t = [], e = 0, n = this.filteredItems.length; n > e; e++) t.push(this.filteredItems[e].element);
                return t
            }, d
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            l = document.documentElement,
            u = l.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            c = Object.prototype.toString,
            p = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window),
    function($) {
        $.fn.jflickrfeed = function(t, e) {
            t = $.extend(!0, {
                flickrbase: "http://api.flickr.com/services/feeds/",
                feedapi: "photos_public.gne",
                limit: 20,
                qstrings: {
                    lang: "en-us",
                    format: "json",
                    jsoncallback: "?"
                },
                cleanDescription: !0,
                useTemplate: !0,
                itemTemplate: "",
                itemCallback: function() {}
            }, t);
            var n = t.flickrbase + t.feedapi + "?",
                i = !0;
            for (var o in t.qstrings) i || (n += "&"), n += o + "=" + t.qstrings[o], i = !1;
            return $(this).each(function() {
                var i = $(this),
                    o = this;
                $.getJSON(n, function(n) {
                    $.each(n.items, function(e, n) {
                        if (e < t.limit) {
                            if (t.cleanDescription) {
                                var r = /<p>(.*?)<\/p>/g,
                                    s = n.description;
                                r.test(s) && (n.description = s.match(r)[2], void 0 != n.description && (n.description = n.description.replace("<p>", "").replace("</p>", "")))
                            }
                            if (n.image_s = n.media.m.replace("_m", "_s"), n.image_t = n.media.m.replace("_m", "_t"), n.image_m = n.media.m.replace("_m", "_m"), n.image = n.media.m.replace("_m", ""), n.image_b = n.media.m.replace("_m", "_b"), delete n.media, t.useTemplate) {
                                var a = t.itemTemplate;
                                for (var l in n) {
                                    var u = new RegExp("{{" + l + "}}", "g");
                                    a = a.replace(u, n[l])
                                }
                                i.append(a)
                            }
                            t.itemCallback.call(o, n)
                        }
                    }), $.isFunction(e) && e.call(o, n)
                })
            })
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function($, t, e, n) {
        var i = {
            init: function(t, e) {
                var n = this;
                n.elem = e, n.$elem = $(e), n.api = "https://api.instagram.com/v1", n.accessData = $.fn.spectragram.accessData, n.options = $.extend({}, $.fn.spectragram.options, t)
            },
            getRecentMedia: function(t) {
                var e = this,
                    n = "/users/" + t + "/media/recent/?" + e.accessData.clientID + "&access_token=" + e.accessData.accessToken;
                e.fetch(n).done(function(t) {
                    e.display(t)
                })
            },
            getUserFeed: function() {
                var t = this,
                    e = "/users/search?q=" + t.options.query + "&count=" + t.options.max + "&client_id=" + t.accessData.clientID;
                t.fetch(e).done(function(e) {
                    e.data.length ? t.getRecentMedia(e.data[0].id) : $.error("Spectagram.js - Error: the username " + t.options.query + " does not exist.")
                })
            },
            getPopular: function() {
                var t = this,
                    e = "/media/popular?client_id=" + t.accessData.clientID + "&access_token=" + t.accessData.accessToken;
                t.fetch(e).done(function(e) {
                    t.display(e)
                })
            },
            getRecentTagged: function() {
                var t = this,
                    e = "/tags/" + t.options.query + "/media/recent?client_id=" + t.accessData.clientID + "&access_token=" + t.accessData.accessToken;
                t.fetch(e).done(function(e) {
                    e.data.length ? t.display(e) : $.error("Spectagram.js - Error: the tag " + t.options.query + " does not have results.")
                })
            },
            fetch: function(t) {
                var e = this,
                    n = e.api + t;
                return $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: !1,
                    url: n
                })
            },
            display: function(t) {
                var e = this,
                    n = e.options.size,
                    i, o = e.options.max >= t.data.length ? t.data.length : e.options.max;
                if (0 === t.data.length) e.$elem.append($(e.options.wrapEachWith).append(e.options.notFoundMsg));
                else
                    for (var r = 0; o > r; r++) i = "small" == n ? t.data[r].images.thumbnail.url : "medium" == n ? t.data[r].images.low_resolution.url : t.data[r].images.standard_resolution.url, e.$elem.append($(e.options.wrapEachWith).append("<a target='_blank' href='" + t.data[r].link + "'><img src='" + i + "'></img></a>"))
            }
        };
        jQuery.fn.spectragram = function(t, e) {
            jQuery.fn.spectragram.accessData.clientID ? this.each(function() {
                var n = Object.create(i);
                return n.init(e, this), n[t] ? n[t](this) : void $.error("Method " + t + " does not exist on jQuery.spectragram")
            }) : $.error("You must define an accessToken and a clientID on jQuery.spectragram")
        }, jQuery.fn.spectragram.options = {
            max: 10,
            query: "coffee",
            size: "medium",
            wrapEachWith: '<li class="col-xs-3 col-sm-2"></li>'
        }, jQuery.fn.spectragram.accessData = {
            accessToken: null,
            clientID: null
        }
    }(jQuery, window, document),
    function($) {
        $.flexslider = function(t, e) {
            var n = $(t);
            n.vars = $.extend({}, $.flexslider.defaults, e);
            var i = n.vars.namespace,
                o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                r = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                s = "click touchend MSPointerUp",
                a = "",
                l, u = "vertical" === n.vars.direction,
                c = n.vars.reverse,
                p = n.vars.itemWidth > 0,
                d = "fade" === n.vars.animation,
                f = "" !== n.vars.asNavFor,
                h = {},
                m = !0;
            $.data(t, "flexslider", n), h = {
                init: function() {
                    n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = u ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !d && n.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                        return !1
                    }(), "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && h.controlNav.setup(), n.vars.directionNav && h.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!n.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? n.getTarget("next") : 37 === e ? n.getTarget("prev") : !1;
                            n.flexAnimate(i, n.vars.pauseOnAction)
                        }
                    }), n.vars.mousewheel && n.bind("mousewheel", function(t, e, i, o) {
                        t.preventDefault();
                        var r = n.getTarget(0 > e ? "next" : "prev");
                        n.flexAnimate(r, n.vars.pauseOnAction)
                    }), n.vars.pausePlay && h.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && h.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                        n.manualPlay || n.manualPause || n.pause()
                    }, function() {
                        n.manualPause || n.manualPlay || n.stopped || n.play()
                    }), n.vars.pauseInvisible && h.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), f && h.asNav.setup(), r && n.vars.touch && h.touch(), (!d || d && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", h.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                        n.vars.start(n)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), o ? (t._slider = n, n.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var e = $(this),
                                    i = e.index();
                                $(n.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : n.slides.on(s, function(t) {
                            t.preventDefault();
                            var e = $(this),
                                o = e.index(),
                                r = e.offset().left - $(n).scrollLeft();
                            0 >= r && e.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || e.hasClass(i + "active-slide") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        n.manualControls ? h.controlNav.setupManual() : h.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                            e = 1,
                            o, r;
                        if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + t + '"></ol>'), n.pagingCount > 1)
                            for (var l = 0; l < n.pagingCount; l++) {
                                if (r = n.slides.eq(l), o = "thumbnails" === n.vars.controlNav ? '<img src="' + r.attr("data-thumb") + '"/>' : "<a>" + e + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                    var u = r.attr("data-thumbcaption");
                                    "" != u && void 0 != u && (o += '<span class="' + i + 'caption">' + u + "</span>")
                                }
                                n.controlNavScaffold.append("<li>" + o + "</li>"), e++
                            }
                        n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), h.controlNav.set(), h.controlNav.active(), n.controlNavScaffold.delegate("a, img", s, function(t) {
                            if (t.preventDefault(), "" === a || a === t.type) {
                                var e = $(this),
                                    o = n.controlNav.index(e);
                                e.hasClass(i + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                            }
                            "" === a && (a = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        n.controlNav = n.manualControls, h.controlNav.active(), n.controlNav.bind(s, function(t) {
                            if (t.preventDefault(), "" === a || a === t.type) {
                                var e = $(this),
                                    o = n.controlNav.index(e);
                                e.hasClass(i + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                            }
                            "" === a && (a = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
                        n.controlNav = $("." + i + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
                    },
                    active: function() {
                        n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                    },
                    update: function(t, e) {
                        n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append($("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(e).closest("li").remove(), h.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(e, t) : h.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = $('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                        n.controlsContainer ? ($(n.controlsContainer).append(t), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = $("." + i + "direction-nav li a", n)), h.directionNav.update(), n.directionNav.bind(s, function(t) {
                            t.preventDefault();
                            var e;
                            ("" === a || a === t.type) && (e = n.getTarget($(this).hasClass(i + "next") ? "next" : "prev"), n.flexAnimate(e, n.vars.pauseOnAction)), "" === a && (a = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = i + "disabled";
                        1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + i + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + i + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = $('<div class="' + i + 'pauseplay"><a></a></div>');
                        n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = $("." + i + "pauseplay a", n)), h.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(s, function(t) {
                            t.preventDefault(), ("" === a || a === t.type) && ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === a && (a = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), v = u ? n.h : n.w, y = Number(new Date), x = e.touches[0].pageX, w = e.touches[0].pageY, m = p && c && n.animatingTo === n.last ? 0 : p && c ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : c ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v, f = u ? w : x, h = u ? x : w, t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", r, !1))
                    }

                    function i(t) {
                        x = t.touches[0].pageX, w = t.touches[0].pageY, g = u ? f - w : f - x, b = u ? Math.abs(g) < Math.abs(x - h) : Math.abs(g) < Math.abs(w - h);
                        var e = 500;
                        (!b || Number(new Date) - y > e) && (t.preventDefault(), !d && n.transitions && (n.vars.animationLoop || (g /= 0 === n.currentSlide && 0 > g || n.currentSlide === n.last && g > 0 ? Math.abs(g) / v + 2 : 1), n.setProps(m + g, "setTouch")))
                    }

                    function r(e) {
                        if (t.removeEventListener("touchmove", i, !1), n.animatingTo === n.currentSlide && !b && null !== g) {
                            var o = c ? -g : g,
                                s = n.getTarget(o > 0 ? "next" : "prev");
                            n.canAdvance(s) && (Number(new Date) - y < 550 && Math.abs(o) > 50 || Math.abs(o) > v / 2) ? n.flexAnimate(s, n.vars.pauseOnAction) : d || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", r, !1), f = null, h = null, g = null, m = null
                    }

                    function s(e) {
                        e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, v = u ? n.h : n.w, y = Number(new Date), m = p && c && n.animatingTo === n.last ? 0 : p && c ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : c ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v)
                    }

                    function a(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (n) {
                            var i = -e.translationX,
                                o = -e.translationY;
                            return T += u ? o : i, g = T, b = u ? Math.abs(T) < Math.abs(-i) : Math.abs(T) < Math.abs(-o), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                t._gesture.stop()
                            }) : void((!b || Number(new Date) - y > 500) && (e.preventDefault(), !d && n.transitions && (n.vars.animationLoop || (g = T / (0 === n.currentSlide && 0 > T || n.currentSlide === n.last && T > 0 ? Math.abs(T) / v + 2 : 1)), n.setProps(m + g, "setTouch"))))
                        }
                    }

                    function l(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !b && null !== g) {
                                var n = c ? -g : g,
                                    i = e.getTarget(n > 0 ? "next" : "prev");
                                e.canAdvance(i) && (Number(new Date) - y < 550 && Math.abs(n) > 50 || Math.abs(n) > v / 2) ? e.flexAnimate(i, e.vars.pauseOnAction) : d || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            f = null, h = null, g = null, m = null, T = 0
                        }
                    }
                    var f, h, m, v, g, y, b = !1,
                        x = 0,
                        w = 0,
                        T = 0;
                    o ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
                },
                resize: function() {
                    !n.animating && n.is(":visible") && (p || n.doMath(), d ? h.smoothHeight() : p ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : u ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && h.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!u || d) {
                        var e = d ? n : n.viewport;
                        t ? e.animate({
                            height: n.slides.eq(n.animatingTo).height()
                        }, t) : e.height(n.slides.eq(n.animatingTo).height())
                    }
                },
                sync: function(t) {
                    var e = $(n.vars.sync).data("flexslider"),
                        i = n.animatingTo;
                    switch (t) {
                        case "animate":
                            e.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            e.playing || e.asNav || e.play();
                            break;
                        case "pause":
                            e.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.find("[id]").each(function() {
                        var t = $(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++) t[e] + "Hidden" in document && (h.pauseInvisible.visProp = t[e] + "Hidden");
                        if (h.pauseInvisible.visProp) {
                            var i = h.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(i, function() {
                                h.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                            })
                        }
                    },
                    isHidden: function() {
                        return document[h.pauseInvisible.visProp] || !1
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(l), l = setTimeout(function() {
                        a = ""
                    }, 3e3)
                }
            }, n.flexAnimate = function(t, e, o, s, a) {
                if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, a) || o) && n.is(":visible")) {
                    if (f && s) {
                        var l = $(n.vars.asNavFor).data("flexslider");
                        if (n.atEnd = 0 === t || t === n.count - 1, l.flexAnimate(t, !0, !1, !0, a), n.direction = n.currentItem < t ? "next" : "prev", l.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t) return n.currentItem = t, n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), !1;
                        n.currentItem = t, n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), t = Math.floor(t / n.visible)
                    }
                    if (n.animating = !0, n.animatingTo = t, e && n.pause(), n.vars.before(n), n.syncExists && !a && h.sync("animate"), n.vars.controlNav && h.controlNav.active(), p || n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && h.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), d) r ? (n.slides.eq(n.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), n.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), n.wrapup(m)) : (n.slides.eq(n.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                    else {
                        var m = u ? n.slides.filter(":first").height() : n.computedW,
                            v, g, y;
                        p ? (v = n.vars.itemMargin, y = (n.itemW + v) * n.move * n.animatingTo, g = y > n.limit && 1 !== n.visible ? n.limit : y) : g = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? c ? (n.count + n.cloneOffset) * m : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? c ? 0 : (n.count + 1) * m : c ? (n.count - 1 - t + n.cloneOffset) * m : (t + n.cloneOffset) * m, n.setProps(g, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                            n.wrapup(m)
                        })) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                            n.wrapup(m)
                        })
                    }
                    n.vars.smoothHeight && h.smoothHeight(n.vars.animationSpeed)
                }
            }, n.wrapup = function(t) {
                d || p || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
            }, n.animateSlides = function() {
                !n.animating && m && n.flexAnimate(n.getTarget("next"))
            }, n.pause = function() {
                clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && h.pausePlay.update("play"), n.syncExists && h.sync("pause")
            }, n.play = function() {
                n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && h.pausePlay.update("pause"), n.syncExists && h.sync("play")
            }, n.stop = function() {
                n.pause(), n.stopped = !0
            }, n.canAdvance = function(t, e) {
                var i = f ? n.pagingCount - 1 : n.last;
                return e ? !0 : f && n.currentItem === n.count - 1 && 0 === t && "prev" === n.direction ? !0 : f && 0 === n.currentItem && t === n.pagingCount - 1 && "next" !== n.direction ? !1 : t !== n.currentSlide || f ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && t === i && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === i && 0 === t && "next" === n.direction ? !1 : !0 : !1
            }, n.getTarget = function(t) {
                return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
            }, n.setProps = function(t, e, i) {
                var o = function() {
                    var i = t ? t : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                        o = function() {
                            if (p) return "setTouch" === e ? t : c && n.animatingTo === n.last ? 0 : c ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                            switch (e) {
                                case "setTotal":
                                    return c ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                                case "setTouch":
                                    return c ? t : t;
                                case "jumpEnd":
                                    return c ? t : n.count * t;
                                case "jumpStart":
                                    return c ? n.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return -1 * o + "px"
                }();
                n.transitions && (o = u ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = o, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", o)
            }, n.setup = function(t) {
                if (d) n.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (r ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && h.smoothHeight();
                else {
                    var e, o;
                    "init" === t && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, c && (o = $.makeArray(n.slides).reverse(), n.slides = $(o), n.container.empty().append(n.slides))), n.vars.animationLoop && !p && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(n.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(n.slides.last().clone().addClass("clone").attr("aria-hidden", "true")), h.uniqueID(n.slides.first().clone().addClass("clone")).appendTo(n.container), h.uniqueID(n.slides.last().clone().addClass("clone")).prependTo(n.container)), n.newSlides = $(n.vars.selector, n), e = c ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, u && !p ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        n.newSlides.css({
                            display: "block"
                        }), n.doMath(), n.viewport.height(n.h), n.setProps(e * n.h, "init")
                    }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(e * n.computedW, "init"), setTimeout(function() {
                        n.doMath(), n.newSlides.css({
                            width: n.computedW,
                            "float": "left",
                            display: "block"
                        }), n.vars.smoothHeight && h.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                p || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
            }, n.doMath = function() {
                var t = n.slides.first(),
                    e = n.vars.itemMargin,
                    i = n.vars.minItems,
                    o = n.vars.maxItems;
                n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), p ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = o ? o * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (o - 1)) / o : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
            }, n.update = function(t, e) {
                n.doMath(), p || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !p || n.pagingCount > n.controlNav.length ? h.controlNav.update("add") : ("remove" === e && !p || n.pagingCount < n.controlNav.length) && (p && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), h.controlNav.update("remove", n.last))), n.vars.directionNav && h.directionNav.update()
            }, n.addSlide = function(t, e) {
                var i = $(t);
                n.count += 1, n.last = n.count - 1, u && c ? void 0 !== e ? n.slides.eq(n.count - e).after(i) : n.container.prepend(i) : void 0 !== e ? n.slides.eq(e).before(i) : n.container.append(i), n.update(e, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
            }, n.removeSlide = function(t) {
                var e = isNaN(t) ? n.slides.index($(t)) : t;
                n.count -= 1, n.last = n.count - 1, isNaN(t) ? $(t, n.slides).remove() : u && c ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(e, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
            }, h.init()
        }, $(window).blur(function(t) {
            focused = !1
        }).focus(function(t) {
            focused = !0
        }), $.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, $.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var e = $(this),
                    n = t.selector ? t.selector : ".slides > li",
                    i = e.find(n);
                1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(e)) : void 0 === e.data("flexslider") && new $.flexslider(this, t)
            });
            var e = $(this).data("flexslider");
            switch (t) {
                case "play":
                    e.play();
                    break;
                case "pause":
                    e.pause();
                    break;
                case "stop":
                    e.stop();
                    break;
                case "next":
                    e.flexAnimate(e.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    e.flexAnimate(e.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && e.flexAnimate(t, !0)
            }
        }
    }(jQuery);
var twitterFetcher = function() {
    function t(t) {
        if (null === h) {
            for (var e = t.length, n = 0, i = document.getElementById(o), r = "<ul>"; e > n;) r += "<li>" + t[n] + "</li>", n++;
            r += "</ul>", i.innerHTML = r
        } else h(t)
    }

    function e(t) {
        return t.replace(/<b[^>]*>(.*?)<\/b>/gi, function(t, e) {
            return e
        }).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
    }

    function n(t, e) {
        for (var n = [], i = new RegExp("(^| )" + e + "( |$)"), o = t.getElementsByTagName("*"), r = 0, s = o.length; s > r; r++) i.test(o[r].className) && n.push(o[r]);
        return n
    }

    function i(t) {
        if (void 0 !== t) {
            var e = t.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];
            return decodeURIComponent(e).split('"')[1]
        }
    }
    var o = "",
        r = 20,
        s = !0,
        a = [],
        l = !1,
        u = !0,
        c = !0,
        p = null,
        d = !0,
        f = !0,
        h = null,
        m = !0,
        v = !1,
        g = "en";
    return {
        fetch: function(t) {
            if (void 0 === t.maxTweets && (t.maxTweets = 20), void 0 === t.enableLinks && (t.enableLinks = !0), void 0 === t.showUser && (t.showUser = !0), void 0 === t.showTime && (t.showTime = !0), void 0 === t.dateFunction && (t.dateFunction = "default"), void 0 === t.showRetweet && (t.showRetweet = !0), void 0 === t.customCallback && (t.customCallback = null), void 0 === t.showInteraction && (t.showInteraction = !0), void 0 === t.showImages && (t.showImages = !1), l) a.push(t);
            else {
                l = !0, o = t.domId, r = t.maxTweets, s = t.enableLinks, c = t.showUser, u = t.showTime, f = t.showRetweet, p = t.dateFunction, h = t.customCallback, m = t.showInteraction, v = t.showImages;
                var e = document.createElement("script");
                e.type = "text/javascript", e.src = "//cdn.syndication.twimg.com/widgets/timelines/" + t.id + "?&lang=" + (t.lang || g) + "&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" + Math.random(), document.getElementsByTagName("head")[0].appendChild(e)
            }
        },
        callback: function(o) {
            var h = document.createElement("div");
            h.innerHTML = o.body, "undefined" == typeof h.getElementsByClassName && (d = !1);
            var g = [],
                y = [],
                b = [],
                x = [],
                w = [],
                T = [],
                S = 0;
            if (d)
                for (var C = h.getElementsByClassName("tweet"); S < C.length;) w.push(C[S].getElementsByClassName("retweet-credit").length > 0 ? !0 : !1), (!w[S] || w[S] && f) && (g.push(C[S].getElementsByClassName("e-entry-title")[0]), T.push(C[S].getAttribute("data-tweet-id")), y.push(C[S].getElementsByClassName("p-author")[0]), b.push(C[S].getElementsByClassName("dt-updated")[0]), x.push(void 0 !== C[S].getElementsByClassName("inline-media")[0] ? C[S].getElementsByClassName("inline-media")[0] : void 0)), S++;
            else
                for (var C = n(h, "tweet"); S < C.length;) g.push(n(C[S], "e-entry-title")[0]), T.push(C[S].getAttribute("data-tweet-id")), y.push(n(C[S], "p-author")[0]), b.push(n(C[S], "dt-updated")[0]), x.push(void 0 !== n(C[S], "inline-media")[0] ? n(C[S], "inline-media")[0] : void 0), w.push(n(C[S], "retweet-credit").length > 0 ? !0 : !1), S++;
            g.length > r && (g.splice(r, g.length - r), y.splice(r, y.length - r), b.splice(r, b.length - r), w.splice(r, w.length - r), x.splice(r, x.length - r));
            for (var E = [], S = g.length, N = 0; S > N;) {
                if ("string" != typeof p) {
                    var _ = b[N].getAttribute("datetime"),
                        k = new Date(b[N].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                        L = p(k, _);
                    if (b[N].setAttribute("aria-label", L), g[N].innerText)
                        if (d) b[N].innerText = L;
                        else {
                            var I = document.createElement("p"),
                                A = document.createTextNode(L);
                            I.appendChild(A), I.setAttribute("aria-label", L), b[N] = I
                        }
                    else b[N].textContent = L
                }
                var O = "";
                s ? (c && (O += '<div class="user">' + e(y[N].innerHTML) + "</div>"), O += '<p class="tweet">' + e(g[N].innerHTML) + "</p>", u && (O += '<p class="timePosted">' + b[N].getAttribute("aria-label") + "</p>")) : g[N].innerText ? (c && (O += '<p class="user">' + y[N].innerText + "</p>"), O += '<p class="tweet">' + g[N].innerText + "</p>", u && (O += '<p class="timePosted">' + b[N].innerText + "</p>")) : (c && (O += '<p class="user">' + y[N].textContent + "</p>"), O += '<p class="tweet">' + g[N].textContent + "</p>", u && (O += '<p class="timePosted">' + b[N].textContent + "</p>")), m && (O += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + T[N] + '" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + T[N] + '" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + T[N] + '" class="twitter_fav_icon">Favorite</a></p>'), v && void 0 !== x[N] && (O += '<div class="media"><img src="' + i(x[N]) + '" alt="Image from tweet" /></div>'), E.push(O), N++
            }
            t(E), l = !1, a.length > 0 && (twitterFetcher.fetch(a[0]), a.splice(0, 1))
        }
    }
}();
(function() {
    var t, e, n, i, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o, r;
            for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)
                if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r, s;
            for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
                if (i = s[n], i === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, r, s;
                    for (s = [], o = 0, r = e.length; r > o; o++) i = e[o], s.push(function() {
                        var t, e, o, r;
                        for (o = i.addedNodes || [], r = [], t = 0, e = o.length; e > t; t++) n = o[t], r.push(this.doSync(n));
                        return r
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            r = [];
            for (n in e) i = e[n], t["" + n] = i, r.push(function() {
                var e, r, s, a;
                for (s = this.vendors, a = [], e = 0, r = s.length; r > e; e++) o = s[e], a.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                return a
            }.call(this));
            return r
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, r, s, a, l;
            for (o = i(t), n = o.getPropertyCSSValue(e), l = this.vendors, s = 0, a = l.length; a > s; s++) r = l[s], n = n || o.getPropertyCSSValue("-" + r + "-" + e);
            return n
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this), $(document).ready(function() {
    function t(t) {
        for (var e = t.length, n = 0, i = document.getElementById("tweets"), o = '<ul class="slides">'; e > n;) o += "<li>" + t[n] + "</li>", n++;
        o += "</ul>", i.innerHTML = o, $(".twitter_reply_icon").html("<i class='fa fa-reply'></i>"), $(".twitter_retweet_icon").html("<i class='fa fa-retweet'></i>"), $(".twitter_fav_icon").html("<i class='fa fa-star'></i>")
    }
    $(document).ready(function() {
        $(window).load(function() {
            $(".preloader").fadeOut(1e3, function() {
                $(this).remove()
            })
        })
    }), $(window).scroll(function() {
        $(window).scrollTop() <= 50 ? $("#home-nav").removeClass("scroll") : $("#home-nav").addClass("scroll")
    }), $(".navbar-collapse ul li a").click(function() {
        $(".navbar-toggle:visible").click()
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                    scrollTop: t.offset().top - 70
                }, 1e3), !1
            }
        })
    });
    var e = $("#container");
    $(window).load(function() {
        e.isotope({
            layoutMode: "fitRows"
        })
    }), $("#filters").on("click", "button", function() {
        var t = $(this).attr("data-filter");
        e.isotope({
            filter: t
        })
    }), $("button.btn-isotope").click(function() {
        $("button.btn-isotope").removeClass("active"), $(this).addClass("active")
    }), $(".search").click(function() {
        $(".search-overlay").css("display", "block")
    }), $(".close-overlay").click(function() {
        $(".search-overlay").css("display", "none")
    }), $("#photography-btns ul li").click(function() {
        $("#photography-btns ul li").removeClass("active"), $(this).addClass("active")
    }), $("#photography-btns ul li").click(function() {
        "flickr-btn" === jQuery(this).attr("id") ? (jQuery("#instagram-feed").hide(), jQuery("#flickr-feed").fadeIn(1e3)) : "instagram-btn" === jQuery(this).attr("id") && (jQuery("#flickr-feed").hide(), jQuery("#instagram-feed").fadeIn(1e3))
    }), $("#flickr-feed").jflickrfeed({
        limit: 12,
        qstrings: {
            id: "30881294@N06"
        },
        itemTemplate: '<div class="col-md-2 col-sm-3 col-xs-6"><div id="bg"><a href="{{image_b}}"target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></div></div>'
    }), jQuery.fn.spectragram.accessData = {
        accessToken: "209153810.88665a8.9e81c6f48608418aa92cce797a9f700a",
        clientID: "88665a8ee17044de89518d8350b81299"
    }, jQuery("#instagram-feed").spectragram("getUserFeed", {
        query: "iamkevinrhodes",
        max: 12,
        wrapEachWith: '<div class="col-md-2 col-sm-3 col-xs-6"></div>'
    }), $(window).load(function() {
        $(".tweet-slider").flexslider({
            slideshowSpeed: 5e3,
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            useCSS: !0,
            pauseOnAction: !1,
            pauseOnHover: !0,
            controlNav: !1,
            directionNav: !0,
            controlsContainer: ".holder_arrow"
        })
    }), $(".quote-slider").flexslider({
        slideshowSpeed: 5e3,
        useCSS: !0,
        pauseOnAction: !1,
        pauseOnHover: !0,
        directionNav: !1,
        animation: "slide"
    });
    var n = {
        id: "534991704836042752",
        domId: "",
        maxTweets: 3,
        enableLinks: !0,
        showUser: !1,
        customCallback: t
    };
    twitterFetcher.fetch(n), wow = new WOW({
        offset: 200,
        mobile: !1
    }), wow.init()
});