! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 10)
}([function(t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.d(e, "g", (function() {
        return Ye
    })), n.d(e, "n", (function() {
        return hn
    })), n.d(e, "U", (function() {
        return gn
    })), n.d(e, "i", (function() {
        return Dn
    })), n.d(e, "j", (function() {
        return mn
    })), n.d(e, "k", (function() {
        return vn
    })), n.d(e, "l", (function() {
        return yn
    })), n.d(e, "m", (function() {
        return _n
    })), n.d(e, "h", (function() {
        return xn
    })), n.d(e, "o", (function() {
        return bn
    })), n.d(e, "d", (function() {
        return wn
    })), n.d(e, "p", (function() {
        return Cn
    })), n.d(e, "q", (function() {
        return Fn
    })), n.d(e, "t", (function() {
        return En
    })), n.d(e, "e", (function() {
        return Tn
    })), n.d(e, "a", (function() {
        return An
    })), n.d(e, "s", (function() {
        return Mn
    })), n.d(e, "b", (function() {
        return Pn
    })), n.d(e, "r", (function() {
        return Sn
    })), n.d(e, "f", (function() {
        return On
    })), n.d(e, "c", (function() {
        return kn
    })), n.d(e, "w", (function() {
        return Ze
    })), n.d(e, "v", (function() {
        return ze
    })), n.d(e, "u", (function() {
        return ze
    })), n.d(e, "R", (function() {
        return gn
    })), n.d(e, "fb", (function() {
        return ce
    })), n.d(e, "gb", (function() {
        return he
    })), n.d(e, "S", (function() {
        return ne
    })), n.d(e, "Z", (function() {
        return oe
    })), n.d(e, "bb", (function() {
        return ie
    })), n.d(e, "X", (function() {
        return se
    })), n.d(e, "T", (function() {
        return Gt
    })), n.d(e, "Q", (function() {
        return Zt
    })), n.d(e, "cb", (function() {
        return xe
    })), n.d(e, "db", (function() {
        return te
    })), n.d(e, "W", (function() {
        return pe
    })), n.d(e, "Y", (function() {
        return ae
    })), n.d(e, "eb", (function() {
        return ue
    })), n.d(e, "V", (function() {
        return de
    })), n.d(e, "ab", (function() {
        return ee
    })), n.d(e, "C", (function() {
        return mt
    })), n.d(e, "H", (function() {
        return Q
    })), n.d(e, "I", (function() {
        return G
    })), n.d(e, "E", (function() {
        return X
    })), n.d(e, "F", (function() {
        return z
    })), n.d(e, "L", (function() {
        return on
    })), n.d(e, "K", (function() {
        return K
    })), n.d(e, "A", (function() {
        return vt
    })), n.d(e, "O", (function() {
        return cn
    })), n.d(e, "y", (function() {
        return Ee
    })), n.d(e, "M", (function() {
        return fe
    })), n.d(e, "x", (function() {
        return We
    })), n.d(e, "J", (function() {
        return ct
    })), n.d(e, "P", (function() {
        return Te
    })), n.d(e, "z", (function() {
        return P
    })), n.d(e, "N", (function() {
        return yt
    })), n.d(e, "G", (function() {
        return rt
    })), n.d(e, "D", (function() {
        return en
    })), n.d(e, "B", (function() {
        return Dt
    }));
    var o, a, u, s, l, c, h, f, p, d, g, D, m, v, y, _, x, b, w, C, F, E, T, A, M, P = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        S = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        O = 2 * Math.PI,
        k = O / 4,
        B = 0,
        L = Math.sqrt,
        N = Math.cos,
        I = Math.sin,
        X = function(t) {
            return "string" == typeof t
        },
        Y = function(t) {
            return "function" == typeof t
        },
        R = function(t) {
            return "number" == typeof t
        },
        z = function(t) {
            return void 0 === t
        },
        j = function(t) {
            return "object" == typeof t
        },
        H = function(t) {
            return !1 !== t
        },
        q = function() {
            return "undefined" != typeof window
        },
        W = function(t) {
            return Y(t) || X(t)
        },
        U = Array.isArray,
        V = /(?:-?\.?\d|\.)+/gi,
        Q = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        G = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Z = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        $ = /\(([^()]+)\)/i,
        K = /[+-]=-?[\.\d]+/,
        J = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        tt = {},
        et = {},
        nt = function(t) {
            return (et = At(t, tt)) && gn
        },
        rt = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        it = function(t, e) {
            return !e && console.warn(t)
        },
        ot = function(t, e) {
            return t && (tt[t] = e) && et && (et[t] = e) || tt
        },
        at = function() {
            return 0
        },
        ut = {},
        st = [],
        lt = {},
        ct = {},
        ht = {},
        ft = 30,
        pt = [],
        dt = "",
        gt = function(t) {
            var e, n, r = t[0];
            if (j(r) || Y(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = pt.length; n-- && !pt[n].targetTest(r););
                e = pt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ye(t[n], e))) || t.splice(n, 1);
            return t
        },
        Dt = function(t) {
            return t._gsap || gt(te(t))[0]._gsap
        },
        mt = function(t, e) {
            var n = t[e];
            return Y(n) ? t[e]() : z(n) && t.getAttribute(e) || n
        },
        vt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        yt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        _t = function(t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n
        },
        xt = function(t, e, n) {
            var r, i = R(t[1]),
                o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                a = t[o];
            if (i && (a.duration = t[1]), a.parent = n, e) {
                for (r = a; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = H(n.vars.inherit) && n.parent;
                a.immediateRender = H(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
            }
            return a
        },
        bt = function() {
            var t, e, n = st.length,
                r = st.slice(0);
            for (lt = {}, st.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function(t, e, n, r) {
            st.length && bt(), t.render(e, n, r), st.length && bt()
        },
        Ct = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(J).length < 2 ? e : t
        },
        Ft = function(t) {
            return t
        },
        Et = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        Tt = function(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        },
        At = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Mt = function t(e, n) {
            for (var r in n) e[r] = j(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r];
            return e
        },
        Pt = function(t, e) {
            var n, r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r
        },
        St = function(t) {
            var e = t.parent || o,
                n = t.keyframes ? Tt : Et;
            if (H(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent;
            return t
        },
        Ot = function(t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                o = e._next;
            i ? i._next = o : t[n] === e && (t[n] = o), o ? o._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        kt = function(t, e) {
            !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
        },
        Bt = function(t) {
            for (var e = t; e;) e._dirty = 1, e = e.parent;
            return t
        },
        Lt = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Nt = function(t) {
            return t._repeat ? It(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        It = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        Xt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Yt = function(t) {
            return t._end = yt(t._start + (t._tDur / Math.abs(t._ts || t._pauseTS || 1e-8) || 0))
        },
        Rt = function(t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = Xt(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Bt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        zt = function(t, e, n, r) {
            return e.parent && kt(e), e._start = yt(n + e._delay), e._end = yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var o, a = t[r];
                    if (i)
                        for (o = e[i]; a && a[i] > o;) a = a._prev;
                    a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Rt(t, e), t
        },
        jt = function(t, e, n, r) {
            return Ue(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && c !== Te.frame ? (st.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        Ht = function(t, e, n) {
            var r = t._repeat,
                i = yt(e);
            return t._dur = i, t._tDur = r ? r < 0 ? 1e12 : yt(i * (r + 1) + t._rDelay * r) : i, !n && Bt(t.parent), t.parent && Yt(t), t
        },
        qt = function(t) {
            return t instanceof ze ? Bt(t) : Ht(t, t._dur)
        },
        Wt = {
            _start: 0,
            endTime: at
        },
        Ut = function t(e, n) {
            var r, i, o = e.labels,
                a = e._recent || Wt,
                u = e.duration() >= 1e8 ? a.endTime(!1) : e._dur;
            return X(n) && (isNaN(n) || n in o) ? "<" === (r = n.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (r = n.indexOf("=")) < 0 ? (n in o || (o[n] = u), o[n]) : (i = +(n.charAt(r - 1) + n.substr(r + 1)), r > 1 ? t(e, n.substr(0, r - 1)) + i : u + i) : null == n ? u : +n
        },
        Vt = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Qt = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        Gt = function(t) {
            return (t + "").substr((parseFloat(t) + "").length)
        },
        Zt = function(t, e, n) {
            return Vt(n, (function(n) {
                return Qt(t, e, n)
            }))
        },
        $t = [].slice,
        Kt = function(t, e) {
            return t && j(t) && "length" in t && (!e && !t.length || t.length - 1 in t && j(t[0])) && !t.nodeType && t !== a
        },
        Jt = function(t, e, n) {
            return void 0 === n && (n = []), t.forEach((function(t) {
                var r;
                return X(t) && !e || Kt(t, 1) ? (r = n).push.apply(r, te(t)) : n.push(t)
            })) || n
        },
        te = function(t, e) {
            return !X(t) || e || !u && Ae() ? U(t) ? Jt(t, e) : Kt(t) ? $t.call(t, 0) : t ? [t] : [] : $t.call(s.querySelectorAll(t), 0)
        },
        ee = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        ne = function(t) {
            if (Y(t)) return t;
            var e = j(t) ? t : {
                    each: t
                },
                n = Be(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                o = {},
                a = r > 0 && r < 1,
                u = isNaN(r) || a,
                s = e.axis,
                l = r,
                c = r;
            return X(r) ? l = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !a && u && (l = r[0], c = r[1]),
                function(t, a, h) {
                    var f, p, d, g, D, m, v, y, _, x = (h || e).length,
                        b = o[x];
                    if (!b) {
                        if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = h[_++].getBoundingClientRect().left) && _ < x;);
                            _--
                        }
                        for (b = o[x] = [], f = u ? Math.min(_, x) * l - .5 : r % _, p = u ? x * c / _ - .5 : r / _ | 0, v = 0, y = 1e8, m = 0; m < x; m++) d = m % _ - f, g = p - (m / _ | 0), b[m] = D = s ? Math.abs("y" === s ? g : d) : L(d * d + g * g), D > v && (v = D), D < y && (y = D);
                        "random" === r && ee(b), b.max = v - y, b.min = y, b.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (_ > x ? x - 1 : s ? "y" === s ? x / _ : _ : Math.max(_, x / _)) || 0) * ("edges" === r ? -1 : 1), b.b = x < 0 ? i - x : i, b.u = Gt(e.amount || e.each) || 0, n = n && x < 0 ? ke(n) : n
                    }
                    return x = (b[t] - b.min) / b.max || 0, yt(b.b + (n ? n(x) : x) * b.v) + b.u
                }
        },
        re = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(n) {
                return ~~(Math.round(parseFloat(n) / t) * t * e) / e + (R(n) ? 0 : Gt(n))
            }
        },
        ie = function(t, e) {
            var n, r, i = U(t);
            return !i && j(t) && (n = i = t.radius || 1e8, t.values ? (t = te(t.values), (r = !R(t[0])) && (n *= n)) : t = re(t.increment)), Vt(e, i ? Y(t) ? function(e) {
                return r = t(e), Math.abs(r - e) <= n ? r : e
            } : function(e) {
                for (var i, o, a = parseFloat(r ? e.x : e), u = parseFloat(r ? e.y : 0), s = 1e8, l = 0, c = t.length; c--;)(i = r ? (i = t[c].x - a) * i + (o = t[c].y - u) * o : Math.abs(t[c] - a)) < s && (s = i, l = c);
                return l = !n || s <= n ? t[l] : e, r || l === e || R(e) ? l : l + Gt(e)
            } : re(t))
        },
        oe = function(t, e, n, r) {
            return Vt(U(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() {
                return U(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / n) * n * r) / r
            }))
        },
        ae = function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function(t) {
                return e.reduce((function(t, e) {
                    return e(t)
                }), t)
            }
        },
        ue = function(t, e) {
            return function(n) {
                return t(parseFloat(n)) + (e || Gt(n))
            }
        },
        se = function(t, e, n) {
            return pe(t, e, 0, 1, n)
        },
        le = function(t, e, n) {
            return Vt(n, (function(n) {
                return t[~~e(n)]
            }))
        },
        ce = function t(e, n, r) {
            var i = n - e;
            return U(e) ? le(e, t(0, e.length), n) : Vt(r, (function(t) {
                return (i + (t - e) % i) % i + e
            }))
        },
        he = function t(e, n, r) {
            var i = n - e,
                o = 2 * i;
            return U(e) ? le(e, t(0, e.length - 1), n) : Vt(r, (function(t) {
                return e + ((t = (o + (t - e) % o) % o) > i ? o - t : t)
            }))
        },
        fe = function(t) {
            for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? J : V), a += t.substr(o, e - o) + oe(i ? n : +n[0], +n[1], +n[2] || 1e-5), o = r + 1;
            return a + t.substr(o, t.length - o)
        },
        pe = function(t, e, n, r, i) {
            var o = e - t,
                a = r - n;
            return Vt(i, (function(e) {
                return n + (e - t) / o * a
            }))
        },
        de = function t(e, n, r, i) {
            var o = isNaN(e + n) ? 0 : function(t) {
                return (1 - t) * e + t * n
            };
            if (!o) {
                var a, u, s, l, c, h = X(e),
                    f = {};
                if (!0 === r && (i = 1) && (r = null), h) e = {
                    p: e
                }, n = {
                    p: n
                };
                else if (U(e) && !U(n)) {
                    for (s = [], l = e.length, c = l - 2, u = 1; u < l; u++) s.push(t(e[u - 1], e[u]));
                    l--, o = function(t) {
                        t *= l;
                        var e = Math.min(c, ~~t);
                        return s[e](t - e)
                    }, r = n
                } else i || (e = At(U(e) ? [] : {}, e));
                if (!s) {
                    for (a in n) qe.call(f, e, a, "get", n[a]);
                    o = function(t) {
                        return an(t, f) || (h ? e.p : e)
                    }
                }
            }
            return Vt(r, o)
        },
        ge = function(t, e, n) {
            var r, i, o, a = t.labels,
                u = 1e8;
            for (r in a)(i = a[r] - e) < 0 == !!n && i && u > (i = Math.abs(i)) && (o = r, u = i);
            return o
        },
        De = function(t, e, n) {
            var r, i, o = t.vars,
                a = o[e];
            if (a) return r = o[e + "Params"], i = o.callbackScope || t, n && st.length && bt(), r ? a.apply(i, r) : a.call(i)
        },
        me = function(t) {
            return kt(t), t.progress() < 1 && De(t, "onInterrupt"), t
        },
        ve = function(t) {
            var e = (t = !t.name && t.default || t).name,
                n = Y(t),
                r = e && !n && t.init ? function() {
                    this._props = []
                } : t,
                i = {
                    init: at,
                    render: an,
                    add: qe,
                    kill: sn,
                    modifier: un,
                    rawVars: 0
                },
                o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: en,
                    aliases: {},
                    register: 0
                };
            if (Ae(), t !== r) {
                if (ct[e]) return;
                Et(r, Et(Pt(t, i), o)), At(r.prototype, At(i, Pt(t, o))), ct[r.prop = e] = r, t.targetTest && (pt.push(r), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ot(e, r), t.register && t.register(gn, r, hn)
        },
        ye = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        _e = function(t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        xe = function(t, e, n) {
            var r, i, o, a, u, s, l, c, h, f, p = t ? R(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ye.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) p = ye[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (p = f = t.match(V), e) {
                        if (~t.indexOf("=")) return p = t.match(Q), n && p.length < 4 && (p[3] = 1), p
                    } else a = +p[0] % 360 / 360, u = +p[1] / 100, r = 2 * (s = +p[2] / 100) - (i = s <= .5 ? s * (u + 1) : s + u - s * u), p.length > 3 && (p[3] *= 1), p[0] = _e(a + 1 / 3, r, i), p[1] = _e(a, r, i), p[2] = _e(a - 1 / 3, r, i);
                else p = t.match(V) || ye.transparent;
                p = p.map(Number)
            }
            return e && !f && (r = p[0] / 255, i = p[1] / 255, o = p[2] / 255, s = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, l === c ? a = u = 0 : (h = l - c, u = s > .5 ? h / (2 - l - c) : h / (l + c), a = l === r ? (i - o) / h + (i < o ? 6 : 0) : l === i ? (o - r) / h + 2 : (r - i) / h + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * s + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        be = function(t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(Ce).forEach((function(t) {
                var i = t.match(G) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        we = function(t, e, n) {
            var r, i, o, a, u = "",
                s = (t + u).match(Ce),
                l = e ? "hsla(" : "rgba(",
                c = 0;
            if (!s) return t;
            if (s = s.map((function(t) {
                    return (t = xe(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (o = be(t), (r = n.c).join(u) !== o.c.join(u)))
                for (a = (i = t.replace(Ce, "1").split(G)).length - 1; c < a; c++) u += i[c] + (~r.indexOf(c) ? s.shift() || l + "0,0,0,0)" : (o.length ? o : s.length ? s : n).shift());
            if (!i)
                for (a = (i = t.split(Ce)).length - 1; c < a; c++) u += i[c] + s[c];
            return u + i[a]
        },
        Ce = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ye) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Fe = /hsl[a]?\(/,
        Ee = function(t) {
            var e, n = t.join(" ");
            if (Ce.lastIndex = 0, Ce.test(n)) return e = Fe.test(n), t[1] = we(t[1], e), t[0] = we(t[0], e, be(t[1])), !0
        },
        Te = (m = Date.now, v = 500, y = 33, _ = m(), x = _, w = b = 1 / 240, F = function t(e) {
            var n, r, i = m() - x,
                o = !0 === e;
            i > v && (_ += i - y), x += i, D.time = (x - _) / 1e3, ((n = D.time - w) > 0 || o) && (D.frame++, w += n + (n >= b ? .004 : b - n), r = 1), o || (p = d(t)), r && C.forEach((function(t) {
                return t(D.time, i, D.frame, e)
            }))
        }, D = {
            time: 0,
            frame: 0,
            tick: function() {
                F(!0)
            },
            wake: function() {
                l && (!u && q() && (a = u = window, s = a.document || {}, tt.gsap = gn, (a.gsapVersions || (a.gsapVersions = [])).push(gn.version), nt(et || a.GreenSockGlobals || !a.gsap && a || {}), g = a.requestAnimationFrame), p && D.sleep(), d = g || function(t) {
                    return setTimeout(t, 1e3 * (w - D.time) + 1 | 0)
                }, f = 1, F(2))
            },
            sleep: function() {
                (g ? a.cancelAnimationFrame : clearTimeout)(p), f = 0, d = at
            },
            lagSmoothing: function(t, e) {
                v = t || 1e8, y = Math.min(e, v, 0)
            },
            fps: function(t) {
                b = 1 / (t || 240), w = D.time + b
            },
            add: function(t) {
                C.indexOf(t) < 0 && C.push(t), Ae()
            },
            remove: function(t) {
                var e;
                ~(e = C.indexOf(t)) && C.splice(e, 1)
            },
            _listeners: C = []
        }),
        Ae = function() {
            return !f && Te.wake()
        },
        Me = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        Se = /["']/g,
        Oe = function(t) {
            for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], u = 1, s = o.length; u < s; u++) n = o[u], e = u !== s - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[a] = isNaN(r) ? r.replace(Se, "").trim() : +r, a = n.substr(e + 1).trim();
            return i
        },
        ke = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Be = function(t, e) {
            return t && (Y(t) ? t : Me[t] || function(t) {
                var e = (t + "").split("("),
                    n = Me[e[0]];
                return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [Oe(e[1])] : $.exec(t)[1].split(",").map(Ct)) : Me._CE && Pe.test(t) ? Me._CE("", t) : n
            }(t)) || e
        },
        Le = function(t, e, n, r) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, o = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return vt(t, (function(t) {
                for (var e in Me[t] = tt[t] = o, Me[i = t.toLowerCase()] = n, o) Me[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Me[t + "." + e] = o[e]
            })), o
        },
        Ne = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Ie = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                a = o / O * (Math.asin(1 / i) || 0),
                u = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * I((t - a) * o) + 1
                },
                s = "out" === e ? u : "in" === e ? function(t) {
                    return 1 - u(1 - t)
                } : Ne(u);
            return o = O / o, s.config = function(n, r) {
                return t(e, n, r)
            }, s
        },
        Xe = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function(t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                i = "out" === e ? r : "in" === e ? function(t) {
                    return 1 - r(1 - t)
                } : Ne(r);
            return i.config = function(n) {
                return t(e, n)
            }, i
        };
    vt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Le(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, n)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), Me.Linear.easeNone = Me.none = Me.Linear.easeIn, Le("Elastic", Ie("in"), Ie("out"), Ie()), E = 7.5625, A = 1 / (T = 2.75), Le("Bounce", (function(t) {
        return 1 - M(1 - t)
    }), M = function(t) {
        return t < A ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / T, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / T) * t + .9375 : E * Math.pow(t - 2.625 / T, 2) + .984375
    }), Le("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Le("Circ", (function(t) {
        return -(L(1 - t * t) - 1)
    })), Le("Sine", (function(t) {
        return 1 - N(t * k)
    })), Le("Back", Xe("in"), Xe("out"), Xe()), Me.SteppedEase = Me.steps = tt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((r * Qt(0, 1 - 1e-8, t) | 0) + i) * n
            }
        }
    }, S.ease = Me["quad.out"], vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return dt += t + "," + t + "Params,"
    }));
    var Ye = function(t, e) {
            this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : en
        },
        Re = function() {
            function t(t, e) {
                var n = t.parent || o;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = t.reversed ? -1 : 1, Ht(this, +t.duration, 1), this.data = t.data, f || Te.wake(), n && zt(n, this, e || 0 === e ? e : n._time, 1), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? Ht(this, t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ae(), !arguments.length) return this._tTime;
                var n = this.parent || this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (this._start = yt(n._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), Yt(this), n._dirty || Bt(n); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && zt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Nt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Nt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? It(this._tTime, n) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return this._ts || this._pauseTS || 0;
                if (null !== this._pauseTS) return this._pauseTS = t, this;
                var e = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
                return this._ts = t, Lt(this.totalTime(e, !0))
            }, e.paused = function(t) {
                var e = !this._ts;
                return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._pauseTS || 1, this._pauseTS = null, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : e
            }, e.startTime = function(t) {
                return arguments.length ? (this.parent && this.parent._sort && zt(this.parent, this, t - this._delay), this) : this._start
            }, e.endTime = function(t) {
                return this._start + (H(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t, qt(this)) : this._repeat
            }, e.repeatDelay = function(t) {
                return arguments.length ? (this._rDelay = t, qt(this)) : this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Ut(this, t), H(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, H(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                var e = this._ts || this._pauseTS || 0;
                return arguments.length ? (t !== this.reversed() && (this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0
            }, e.invalidate = function() {
                return this._initted = 0, this._zTime = -1e-8, this
            }, e.isActive = function(t) {
                var e, n = this.parent || this._dp,
                    r = this._start;
                return !(n && !(this._ts && (this._initted || !t) && n.isActive(t) && (e = n.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = Y(t) ? t : Ft,
                        i = function() {
                            var t = e.then;
                            e.then = null, Y(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function() {
                me(this)
            }, t
        }();
    Et(Re.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _pauseTS: null
    });
    var ze = function(t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = H(e.sortChildren), i.parent && Rt(i.parent, r(i)), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return new Ze(t, xt(arguments, 0, this), Ut(this, R(e) ? arguments[3] : n)), this
        }, n.from = function(t, e, n) {
            return new Ze(t, xt(arguments, 1, this), Ut(this, R(e) ? arguments[3] : n)), this
        }, n.fromTo = function(t, e, n, r) {
            return new Ze(t, xt(arguments, 2, this), Ut(this, R(e) ? arguments[4] : r)), this
        }, n.set = function(t, e, n) {
            return e.duration = 0, e.parent = this, St(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ze(t, e, Ut(this, n), 1), this
        }, n.call = function(t, e, n) {
            return zt(this, Ze.delayedCall(0, t, e), Ut(this, n))
        }, n.staggerTo = function(t, e, n, r, i, o, a) {
            return n.duration = e, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = a, n.parent = this, new Ze(t, n, Ut(this, i)), this
        }, n.staggerFrom = function(t, e, n, r, i, o, a) {
            return n.runBackwards = 1, St(n).immediateRender = H(n.immediateRender), this.staggerTo(t, e, n, r, i, o, a)
        }, n.staggerFromTo = function(t, e, n, r, i, o, a, u) {
            return r.startAt = n, St(r).immediateRender = H(r.immediateRender), this.staggerTo(t, e, r, i, o, a, u)
        }, n.render = function(t, e, n) {
            var r, i, a, u, s, l, c, h, f, p, d, g, D = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = this !== o && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
                _ = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || n || _) {
                if (D !== this._time && v && (y += this._time - D, t += this._time - D), r = y, f = this._start, l = !(h = this._ts), _ && (v || (D = this._zTime), !t && e || (this._zTime = t)), this._repeat && (d = this._yoyo, s = v + this._rDelay, ((r = yt(y % s)) > v || m === y) && (r = v), (u = ~~(y / s)) && u === y / s && (r = v, u--), d && 1 & u && (r = v - r, g = 1), u !== (p = It(this._tTime, s)) && !this._lock)) {
                    var x = d && 1 & p,
                        b = x === (d && 1 & u);
                    if (u < p && (x = !x), D = x ? 0 : v, this._lock = 1, this.render(D, e, !v)._lock = 0, !e && this.parent && De(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), D !== this._time || l !== !this._ts) return this;
                    if (b && (this._lock = 2, D = x ? v + 1e-4 : -1e-4, this.render(D, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !l) return this
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, yt(D), yt(r))) && (y -= r - (r = c._start)), this._tTime = y, this._time = r, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), D || !r || e || De(this, "onStart"), r >= D && t >= 0)
                    for (i = this._first; i;) {
                        if (a = i._next, (i._act || r >= i._start) && i._ts && c !== i) {
                            if (i.parent !== this) return this.render(t, e, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                c = 0, a && (y += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = a
                    } else {
                        i = this._last;
                        for (var w = t < 0 ? t : r; i;) {
                            if (a = i._prev, (i._act || w <= i._end) && i._ts && c !== i) {
                                if (i.parent !== this) return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (w - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                    c = 0, a && (y += this._zTime = w ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = a
                        }
                    }
                if (c && !e && (this.pause(), c.render(r >= D ? 0 : -1e-8)._zTime = r >= D ? 1 : -1, this._ts)) return this._start = f, Yt(this), this.render(t, e, n);
                this._onUpdate && !e && De(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && this._ts < 0) && (f !== this._start && Math.abs(h) === Math.abs(this._ts) || ((t || !v) && (t && this._ts > 0 || !y && this._ts < 0) && kt(this, 1), e || t < 0 && !D || (De(this, y === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (R(e) || (e = Ut(this, e)), !(t instanceof Re)) {
                if (U(t)) return t.forEach((function(t) {
                    return n.add(t, e)
                })), Bt(this);
                if (X(t)) return this.addLabel(t, e);
                if (!Y(t)) return this;
                t = Ze.delayedCall(0, t)
            }
            return this !== t ? zt(this, t, e) : this
        }, n.getChildren = function(t, e, n, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -1e8);
            for (var i = [], o = this._first; o;) o._start >= r && (o instanceof Ze ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), o = o._next;
            return i
        }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
            return X(t) ? this.removeLabel(t) : Y(t) ? this.killTweensOf(t) : (Ot(this, t), t === this._recent && (this._recent = this._last), Bt(this))
        }, n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = yt(Te.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
            return this.labels[t] = Ut(this, e), this
        }, n.removeLabel = function(t) {
            return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
            var r = Ze.delayedCall(0, e || at, n);
            return r.data = "isPause", this._hasPause = 1, zt(this, r, Ut(this, t))
        }, n.removePause = function(t) {
            var e = this._first;
            for (t = Ut(this, t); e;) e._start === t && "isPause" === e.data && kt(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--;) je !== r[i] && r[i].kill(t, e);
            return this
        }, n.getTweensOf = function(t, e) {
            for (var n, r = [], i = te(t), o = this._first; o;) o instanceof Ze ? !_t(o._targets, i) || e && !o.isActive("started" === e) || r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n), o = o._next;
            return r
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var n = this,
                r = Ut(n, t),
                i = e,
                o = i.startAt,
                a = i.onStart,
                u = i.onStartParams,
                s = Ze.to(n, Et(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    duration: e.duration || Math.abs(r - (o && "time" in o ? o.time : n._time)) / n.timeScale() || 1e-8,
                    onStart: function() {
                        n.pause();
                        var t = e.duration || Math.abs(r - n._time) / n.timeScale();
                        s._dur !== t && Ht(s, t).render(s._time, !0, !0), a && a.apply(s, u || [])
                    }
                }));
            return s
        }, n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, Et({
                startAt: {
                    time: Ut(this, t)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ge(this, Ut(this, t))
        }, n.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ge(this, Ut(this, t), 1)
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += t), i = i._next;
            if (e)
                for (r in o) o[r] >= n && (o[r] += t);
            return Bt(this)
        }, n.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._time = this._tTime = 0, t && (this.labels = {}), Bt(this)
        }, n.totalDuration = function(t) {
            var e, n, r, i, a = 0,
                u = this,
                s = u._last,
                l = 1e8;
            if (arguments.length) return u._repeat < 0 ? u : u.timeScale(u.totalDuration() / t);
            if (u._dirty) {
                for (i = u.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > l && u._sort && s._ts && !u._lock ? (u._lock = 1, zt(u, s, r - s._delay, 1)._lock = 0) : l = r, r < 0 && s._ts && (a -= r, (!i && !u._dp || i && i.smoothChildTiming) && (u._start += r / u._ts, u._time -= r, u._tTime -= r), u.shiftChildren(-r, !1, -1e20), l = 0), (n = Yt(s)) > a && s._ts && (a = n), s = e;
                Ht(u, u === o && u._time > a ? u._time : Math.min(1e8, a), 1), u._dirty = 0
            }
            return u._tDur
        }, e.updateRoot = function(t) {
            if (o._ts && (wt(o, Xt(t, o)), c = Te.frame), Te.frame >= ft) {
                ft += P.autoSleep || 120;
                var e = o._first;
                if ((!e || !e._ts) && P.autoSleep && Te._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Te.sleep()
                }
            }
        }, e
    }(Re);
    Et(ze.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var je, He = function(t, e, n, r, i, o, a) {
            var u, s, l, c, h, f, p, d, g = new hn(this._pt, t, e, 0, 1, on, null, i),
                D = 0,
                m = 0;
            for (g.b = n, g.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = fe(r)), o && (o(d = [n, r], t, e), n = d[0], r = d[1]), s = n.match(Z) || []; u = Z.exec(r);) c = u[0], h = r.substring(D, u.index), l ? l = (l + 1) % 5 : "rgba(" === h.substr(-5) && (l = 1), c !== s[m++] && (f = parseFloat(s[m - 1]) || 0, g._pt = {
                _next: g._pt,
                p: h || 1 === m ? h : ",",
                s: f,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f,
                m: l && l < 4 ? Math.round : 0
            }, D = Z.lastIndex);
            return g.c = D < r.length ? r.substring(D, r.length) : "", g.fp = a, (K.test(r) || p) && (g.e = 0), this._pt = g, g
        },
        qe = function(t, e, n, r, i, o, a, u, s) {
            Y(r) && (r = r(i || 0, t, o));
            var l, c = t[e],
                h = "get" !== n ? n : Y(c) ? s ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](s) : t[e]() : c,
                f = Y(c) ? s ? Je : Ke : $e;
            if (X(r) && (~r.indexOf("random(") && (r = fe(r)), "=" === r.charAt(1) && (r = parseFloat(h) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Gt(h) || 0))), h !== r) return isNaN(h + r) ? (!c && !(e in t) && rt(e, r), He.call(this, t, e, h, r, f, u || P.stringFilter, s)) : (l = new hn(this._pt, t, e, +h || 0, r - (h || 0), "boolean" == typeof c ? rn : nn, 0, f), s && (l.fp = s), a && l.modifier(a, this, t), this._pt = l)
        },
        We = function(t, e, n, r, i, o) {
            var a, u, s, l;
            if (ct[t] && !1 !== (a = new ct[t]).init(i, a.rawVars ? e[t] : function(t, e, n, r, i) {
                    if (Y(t) && (t = Ve(t, i, e, n, r)), !j(t) || t.style && t.nodeType || U(t)) return X(t) ? Ve(t, i, e, n, r) : t;
                    var o, a = {};
                    for (o in t) a[o] = Ve(t[o], i, e, n, r);
                    return a
                }(e[t], r, i, o, n), n, r, o) && (n._pt = u = new hn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority), n !== h))
                for (s = n._ptLookup[n._targets.indexOf(i)], l = a._props.length; l--;) s[a._props[l]] = u;
            return a
        },
        Ue = function t(e, n) {
            var r, i, a, u, s, l, c, h, f, p, d, g, D = e.vars,
                m = D.ease,
                v = D.startAt,
                y = D.immediateRender,
                _ = D.lazy,
                x = D.onUpdate,
                b = D.onUpdateParams,
                w = D.callbackScope,
                C = D.runBackwards,
                F = D.yoyoEase,
                E = D.keyframes,
                T = D.autoRevert,
                A = e._dur,
                M = e._startAt,
                P = e._targets,
                O = e.parent,
                k = O && "nested" === O.data ? O.parent._targets : P,
                B = "auto" === e._overwrite,
                L = e.timeline;
            if (!L || E && m || (m = "none"), e._ease = Be(m, S.ease), e._yEase = F ? ke(Be(!0 === F ? m : F, S.ease)) : 0, F && e._yoyo && !e._repeat && (F = e._yEase, e._yEase = e._ease, e._ease = F), !L) {
                if (M && M.render(-1, !0).kill(), v) {
                    if (kt(e._startAt = Ze.set(P, Et({
                            data: "isStart",
                            overwrite: !1,
                            parent: O,
                            immediateRender: !0,
                            lazy: H(_),
                            startAt: null,
                            delay: 0,
                            onUpdate: x,
                            onUpdateParams: b,
                            callbackScope: w,
                            stagger: 0
                        }, v))), y)
                        if (n > 0) !T && (e._startAt = 0);
                        else if (A) return
                } else if (C && A)
                    if (M) !T && (e._startAt = 0);
                    else if (n && (y = !1), kt(e._startAt = Ze.set(P, At(Pt(D, ut), {
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && H(_),
                        immediateRender: y,
                        stagger: 0,
                        parent: O
                    }))), y) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (r = Pt(D, ut), e._pt = 0, g = (h = P[0] ? Dt(P[0]).harness : 0) && D[h.prop], _ = A && H(_) || _ && !A, i = 0; i < P.length; i++) {
                    if (c = (s = P[i])._gsap || gt(P)[i]._gsap, e._ptLookup[i] = p = {}, lt[c.id] && bt(), d = k === P ? i : k.indexOf(s), h && !1 !== (f = new h).init(s, g || r, e, d, k) && (e._pt = u = new hn(e._pt, s, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) {
                            p[t] = u
                        })), f.priority && (l = 1)), !h || g)
                        for (a in r) ct[a] && (f = We(a, r, e, d, s, k)) ? f.priority && (l = 1) : p[a] = u = qe.call(e, s, a, "get", r[a], d, k, 0, D.stringFilter);
                    e._op && e._op[i] && e.kill(s, e._op[i]), B && e._pt && (je = e, o.killTweensOf(s, p, "started"), je = 0), e._pt && _ && (lt[c.id] = 1)
                }
                l && cn(e), e._onInit && e._onInit(e)
            }
            e._from = !L && !!D.runBackwards, e._onUpdate = x, e._initted = 1
        },
        Ve = function(t, e, n, r, i) {
            return Y(t) ? t.call(e, n, r, i) : X(t) && ~t.indexOf("random(") ? fe(t) : t
        },
        Qe = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ge = (Qe + ",id,stagger,delay,duration,paused").split(","),
        Ze = function(t) {
            function e(e, n, i, a) {
                var u;
                "number" == typeof n && (i.duration = n, n = i, i = null);
                var s, l, c, h, f, p, d, g, D = (u = t.call(this, a ? n : St(n), i) || this).vars,
                    m = D.duration,
                    v = D.delay,
                    y = D.immediateRender,
                    _ = D.stagger,
                    x = D.overwrite,
                    b = D.keyframes,
                    w = D.defaults,
                    C = u.parent,
                    F = (U(e) ? R(e[0]) : "length" in n) ? [e] : te(e);
                if (u._targets = F.length ? gt(F) : it("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = x, b || _ || W(m) || W(v)) {
                    if (n = u.vars, (s = u.timeline = new ze({
                            data: "nested",
                            defaults: w || {}
                        })).kill(), s.parent = r(u), b) Et(s.vars.defaults, {
                        ease: "none"
                    }), b.forEach((function(t) {
                        return s.to(F, t, ">")
                    }));
                    else {
                        if (h = F.length, d = _ ? ne(_) : at, j(_))
                            for (f in _) ~Qe.indexOf(f) && (g || (g = {}), g[f] = _[f]);
                        for (l = 0; l < h; l++) {
                            for (f in c = {}, n) Ge.indexOf(f) < 0 && (c[f] = n[f]);
                            c.stagger = 0, g && At(c, g), n.yoyoEase && !n.repeat && (c.yoyoEase = n.yoyoEase), p = F[l], c.duration = +Ve(m, r(u), l, p, F), c.delay = (+Ve(v, r(u), l, p, F) || 0) - u._delay, !_ && 1 === h && c.delay && (u._delay = v = c.delay, u._start += v, c.delay = 0), s.to(p, c, d(l, p, F))
                        }
                        m = v = 0
                    }
                    m || u.duration(m = s.duration())
                } else u.timeline = 0;
                return !0 === x && (je = r(u), o.killTweensOf(F), je = 0), C && Rt(C, r(u)), (y || !m && !b && u._start === C._time && H(y) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(r(u)) && "nested" !== C.data) && (u._tTime = -1e-8, u.render(Math.max(0, -v))), u
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var r, i, o, a, u, s, l, c, h, f = this._time,
                    p = this._tDur,
                    d = this._dur,
                    g = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (d) {
                    if (g !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = g, c = this.timeline, this._repeat) {
                            if (a = d + this._rDelay, ((r = yt(g % a)) > d || p === g) && (r = d), (o = ~~(g / a)) && o === g / a && (r = d, o--), (s = this._yoyo && 1 & o) && (h = this._yEase, r = d - r), u = It(this._tTime, a), r === f && !n && this._initted) return this;
                            o !== u && (!this.vars.repeatRefresh || s || this._lock || (this._lock = n = 1, this.render(a * o, !0).invalidate()._lock = 0))
                        }
                        if (!this._initted && jt(this, r, n, e)) return this._tTime = 0, this;
                        for (this._tTime = g, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (h || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), f || !r || e || De(this, "onStart"), i = this._pt; i;) i.r(l, i.d), i = i._next;
                        c && c.render(t < 0 ? t : !r && s ? -1e-8 : c._dur * l, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), De(this, "onUpdate")), this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && De(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, n), (t || !d) && (t && this._ts > 0 || !g && this._ts < 0) && kt(this, 1), e || t < 0 && !f || g < p && this.timeScale() > 0 || (De(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                    }
                } else ! function(t, e, n, r) {
                    var i, o = t._zTime < 0 ? 0 : 1,
                        a = e < 0 ? 0 : 1,
                        u = t._rDelay,
                        s = 0;
                    if (u && t._repeat && (s = Qt(0, t._tDur, e), It(s, u) !== It(t._tTime, u) && (o = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !jt(t, e, r, n)) && (a !== o || r || 1e-8 === t._zTime || !e && t._zTime)) {
                        for (t._zTime = e || (n ? 1e-8 : 0), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = s, n || De(t, "onStart"), i = t._pt; i;) i.r(a, i.d), i = i._next;
                        !a && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, r), t._onUpdate && (n || De(t, "onUpdate")), s && t._repeat && !n && t.parent && De(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (t.ratio && kt(t, 1), n || (De(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    }
                }(this, t, e, n);
                return this
            }, n.targets = function() {
                return this._targets
            }, n.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, n.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return me(this);
                if (this.timeline) return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite), this;
                var n, r, i, o, a, u, s, l = this._targets,
                    c = t ? te(t) : l,
                    h = this._ptLookup,
                    f = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
                        return n < 0
                    }(l, c)) return me(this);
                for (n = this._op = this._op || [], "all" !== e && (X(e) && (a = {}, vt(e, (function(t) {
                        return a[t] = 1
                    })), e = a), e = function(t, e) {
                        var n, r, i, o, a = t[0] ? Dt(t[0]).harness : 0,
                            u = a && a.aliases;
                        if (!u) return e;
                        for (r in n = At({}, e), u)
                            if (r in n)
                                for (i = (o = u[r].split(",")).length; i--;) n[o[i]] = n[r];
                        return n
                    }(l, e)), s = l.length; s--;)
                    if (~c.indexOf(l[s]))
                        for (a in r = h[s], "all" === e ? (n[s] = e, o = r, i = {}) : (i = n[s] = n[s] || {}, o = e), o)(u = r && r[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Ot(this, u, "_pt"), delete r[a]), "all" !== i && (i[a] = 1);
                return this._initted && !this._pt && f && me(this), this
            }, e.to = function(t, n) {
                return new e(t, n, arguments[2])
            }, e.from = function(t, n) {
                return new e(t, xt(arguments, 1))
            }, e.delayedCall = function(t, n, r, i) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, e.fromTo = function(t, n, r) {
                return new e(t, xt(arguments, 2))
            }, e.set = function(t, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
            }, e.killTweensOf = function(t, e, n) {
                return o.killTweensOf(t, e, n)
            }, e
        }(Re);
    Et(Ze.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), vt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Ze[t] = function() {
            var e = new ze,
                n = $t.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var $e = function(t, e, n) {
            return t[e] = n
        },
        Ke = function(t, e, n) {
            return t[e](n)
        },
        Je = function(t, e, n, r) {
            return t[e](r.fp, n)
        },
        tn = function(t, e, n) {
            return t.setAttribute(e, n)
        },
        en = function(t, e) {
            return Y(t[e]) ? Ke : z(t[e]) && t.setAttribute ? tn : $e
        },
        nn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        rn = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        on = function(t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        an = function(t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        un = function(t, e, n, r) {
            for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(t, e, n), o = i
        },
        sn = function(t) {
            for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Ot(this, r, "_pt") : r.dep || (e = 1), r = n;
            return !e
        },
        ln = function(t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        cn = function(t) {
            for (var e, n, r, i, o = t._pt; o;) {
                for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = e
            }
            t._pt = r
        },
        hn = function() {
            function t(t, e, n, r, i, o, a, u, s) {
                this.t = e, this.s = r, this.c = i, this.p = n, this.r = o || nn, this.d = a || this, this.set = u || $e, this.pr = s || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set, this.set = ln, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    vt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", (function(t) {
        return ut[t] = 1
    })), tt.TweenMax = tt.TweenLite = Ze, tt.TimelineLite = tt.TimelineMax = ze, o = new ze({
        sortChildren: !1,
        defaults: S,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), P.stringFilter = Ee;
    var fn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) {
                return ve(t)
            }))
        },
        timeline: function(t) {
            return new ze(t)
        },
        getTweensOf: function(t, e) {
            return o.getTweensOf(t, e)
        },
        getProperty: function(t, e, n, r) {
            X(t) && (t = te(t)[0]);
            var i = Dt(t || {}).get,
                o = n ? Ft : Ct;
            return "native" === n && (n = ""), t ? e ? o((ct[e] && ct[e].get || i)(t, e, n, r)) : function(e, n, r) {
                return o((ct[e] && ct[e].get || i)(t, e, n, r))
            } : t
        },
        quickSetter: function(t, e, n) {
            if ((t = te(t)).length > 1) {
                var r = t.map((function(t) {
                        return gn.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function(t) {
                    for (var e = i; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var o = ct[e],
                a = Dt(t),
                u = o ? function(e) {
                    var r = new o;
                    h._pt = 0, r.init(t, n ? e + n : e, h, 0, [t]), r.render(1, r), h._pt && an(1, h)
                } : a.set(t, e);
            return o ? u : function(r) {
                return u(t, e, n ? r + n : r, a, 1)
            }
        },
        isTweening: function(t) {
            return o.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Be(t.ease, S.ease)), Mt(S, t || {})
        },
        config: function(t) {
            return Mt(P, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
            (r || "").split(",").forEach((function(t) {
                return t && !ct[t] && !tt[t] && it(e + " effect requires " + t + " plugin.")
            })), ht[e] = function(t, e) {
                return n(te(t), Et(e || {}, i))
            }, o && (ze.prototype[e] = function(t, n, r) {
                return this.add(ht[e](t, j(n) ? n : (r = n) && {}), r)
            })
        },
        registerEase: function(t, e) {
            Me[t] = Be(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Be(t, e) : Me
        },
        getById: function(t) {
            return o.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, r, i = new ze(t);
            for (i.smoothChildTiming = H(t.smoothChildTiming), o.remove(i), i._dp = 0, i._time = i._tTime = o._time, n = o._first; n;) r = n._next, !e && !n._dur && n instanceof Ze && n.vars.onComplete === n._targets[0] || zt(i, n, n._start - n._delay), n = r;
            return zt(o, i, 0), i
        },
        utils: {
            wrap: ce,
            wrapYoyo: he,
            distribute: ne,
            random: oe,
            snap: ie,
            normalize: se,
            getUnit: Gt,
            clamp: Zt,
            splitColor: xe,
            toArray: te,
            mapRange: pe,
            pipe: ae,
            unitize: ue,
            interpolate: de,
            shuffle: ee
        },
        install: nt,
        effects: ht,
        ticker: Te,
        updateRoot: ze.updateRoot,
        plugins: ct,
        globalTimeline: o,
        core: {
            PropTween: hn,
            globals: ot,
            Tween: Ze,
            Timeline: ze,
            Animation: Re,
            getCache: Dt,
            _removeLinkedListItem: Ot
        }
    };
    vt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return fn[t] = Ze[t]
    })), Te.add(ze.updateRoot), h = fn.to({}, {
        duration: 0
    });
    var pn = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        dn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, r) {
                    r._onInit = function(t) {
                        var r, i;
                        if (X(n) && (r = {}, vt(n, (function(t) {
                                return r[t] = 1
                            })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function(t, e) {
                            var n, r, i, o = t._targets;
                            for (n in e)
                                for (r = o.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = pn(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n))
                        }(t, n)
                    }
                }
            }
        },
        gn = fn.registerPlugin({
            name: "attr",
            init: function(t, e, n, r, i) {
                for (var o in e) this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o), this._props.push(o)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, dn("roundProps", re), dn("modifiers"), dn("snap", ie)) || fn;
    Ze.version = ze.version = gn.version = "3.2.4", l = 1, q() && Ae();
    var Dn = Me.Power0,
        mn = Me.Power1,
        vn = Me.Power2,
        yn = Me.Power3,
        _n = Me.Power4,
        xn = Me.Linear,
        bn = Me.Quad,
        wn = Me.Cubic,
        Cn = Me.Quart,
        Fn = Me.Quint,
        En = Me.Strong,
        Tn = Me.Elastic,
        An = Me.Back,
        Mn = Me.SteppedEase,
        Pn = Me.Bounce,
        Sn = Me.Sine,
        On = Me.Expo,
        kn = Me.Circ
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "gsap", (function() {
        return o
    })), n.d(e, "default", (function() {
        return o
    })), n.d(e, "TweenMax", (function() {
        return a
    }));
    var r = n(0);
    n.d(e, "TweenLite", (function() {
        return r.w
    })), n.d(e, "TimelineMax", (function() {
        return r.v
    })), n.d(e, "TimelineLite", (function() {
        return r.u
    })), n.d(e, "Power0", (function() {
        return r.i
    })), n.d(e, "Power1", (function() {
        return r.j
    })), n.d(e, "Power2", (function() {
        return r.k
    })), n.d(e, "Power3", (function() {
        return r.l
    })), n.d(e, "Power4", (function() {
        return r.m
    })), n.d(e, "Linear", (function() {
        return r.h
    })), n.d(e, "Quad", (function() {
        return r.o
    })), n.d(e, "Cubic", (function() {
        return r.d
    })), n.d(e, "Quart", (function() {
        return r.p
    })), n.d(e, "Quint", (function() {
        return r.q
    })), n.d(e, "Strong", (function() {
        return r.t
    })), n.d(e, "Elastic", (function() {
        return r.e
    })), n.d(e, "Back", (function() {
        return r.a
    })), n.d(e, "SteppedEase", (function() {
        return r.s
    })), n.d(e, "Bounce", (function() {
        return r.b
    })), n.d(e, "Sine", (function() {
        return r.r
    })), n.d(e, "Expo", (function() {
        return r.f
    })), n.d(e, "Circ", (function() {
        return r.c
    }));
    var i = n(3);
    n.d(e, "CSSPlugin", (function() {
        return i.a
    }));
    var o = r.U.registerPlugin(i.a) || r.U,
        a = o.core.Tween
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(6);
    n(9), e.getOffsetHeight = function(t) {
        for (var e = t; e && 0 === e.offsetTop;) e = e.parentElement;
        return e ? e.offsetTop : 0
    }, e.isSafari = function() {
        var t = navigator.userAgent.toLowerCase();
        if (-1 != t.indexOf("safari") && t.indexOf("chrome") <= -1) return !0
    }, e.getBackAnimation = function(t) {
        return i.fromTo(t, {
            draw: "0% 100%"
        }, {
            draw: "0% 0%"
        }, {
            duration: 3e3,
            easing: "easingCubicInOut"
        })
    }, e.getForwardAnimation = function(t) {
        return i.fromTo(t, {
            draw: "0% 0%"
        }, {
            draw: "0% 100%"
        }, {
            duration: 3e3,
            easing: "easingQuadraticIn"
        })
    }, e.typeAnimation = function(t, e, n, i) {
        void 0 === e && (e = .05), void 0 === n && (n = new r.TimelineMax), void 0 === i && (i = !1);
        var o = "string" == typeof t ? document.querySelector(t) : t,
            a = Array.from(o.querySelectorAll(".char"));
        return n.set(o, {
            autoAlpha: 1
        }), i || n.set(a, {
            autoAlpha: 0
        }), a.forEach((function(t) {
            n.to(t, 0, {
                autoAlpha: i ? 0 : 1
            }, "+=" + e)
        })), n
    }, e.mapCssLength = function(t, e) {
        var n = t.replace(/ /g, "").split(/(\d+)(\w+)/).filter(Boolean),
            r = n[0],
            i = n[1];
        return e(parseInt(r, 10)) + i
    }, e.isMobile = window.innerWidth <= 768
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return dt
    })), n.d(e, "b", (function() {
        return dt
    }));
    var r, i, o, a, u, s, l, c, h = n(0),
        f = {},
        p = 180 / Math.PI,
        d = Math.PI / 180,
        g = Math.atan2,
        D = /([A-Z])/g,
        m = /(?:left|right|width|margin|padding|x)/i,
        v = /[\s,\(]\S/,
        y = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        _ = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        x = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        b = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        w = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        C = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        F = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        E = function(t, e, n) {
            return t.style[e] = n
        },
        T = function(t, e, n) {
            return t.style.setProperty(e, n)
        },
        A = function(t, e, n) {
            return t._gsap[e] = n
        },
        M = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        P = function(t, e, n, r, i) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(i, o)
        },
        S = function(t, e, n, r, i) {
            var o = t._gsap;
            o[e] = n, o.renderTransform(i, o)
        },
        O = "transform",
        k = O + "Origin",
        B = function(t, e) {
            var n = i.createElementNS ? i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i.createElement(t);
            return n.style ? n : i.createElement(t)
        },
        L = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(D, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, I(n) || n, 1) || ""
        },
        N = "O,Moz,ms,Ms,Webkit".split(","),
        I = function(t, e, n) {
            var r = (e || u).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(N[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? N[i] : "") + t
        },
        X = function() {
            "undefined" != typeof window && (r = window, i = r.document, o = i.documentElement, u = B("div") || {
                style: {}
            }, s = B("div"), O = I(O), k = I(k), u.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", c = !!I("perspective"), a = 1)
        },
        Y = function t(e) {
            var n, r = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                a = this.nextSibling,
                u = this.style.cssText;
            if (o.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (a ? i.insertBefore(this, a) : i.appendChild(this)), o.removeChild(r), this.style.cssText = u, n
        },
        R = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        z = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Y.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Y || (e = Y.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +R(t, ["x", "cx", "x1"]) || 0,
                y: +R(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        j = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !z(t))
        },
        H = function(t, e) {
            if (e) {
                var n = t.style;
                e in f && (e = O), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(D, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        q = function(t, e, n, r, i, o) {
            var a = new h.n(t._pt, e, n, 0, 1, o ? F : C);
            return t._pt = a, a.b = r, a.e = i, t._props.push(n), a
        },
        W = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        U = function(t, e, n, r) {
            var o, a, s, l, c = parseFloat(n) || 0,
                p = (n + "").trim().substr((c + "").length) || "px",
                d = u.style,
                g = m.test(e),
                D = "svg" === t.tagName.toLowerCase(),
                v = (D ? "client" : "offset") + (g ? "Width" : "Height"),
                y = "px" === r;
            return r === p || !c || W[r] || W[p] ? c : (l = t.getCTM && j(t), "%" === r && (f[e] || ~e.indexOf("adius")) ? Object(h.N)(c / (l ? t.getBBox()[g ? "width" : "height"] : t[v]) * 100) : (d[g ? "width" : "height"] = 100 + (y ? p : r), a = ~e.indexOf("adius") || "em" === r && t.appendChild && !D ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== i && a.appendChild || (a = i.body), (s = a._gsap) && "%" === r && s.width && g && s.time === h.P.time ? Object(h.N)(c / s.width * 100) : (a === t && (d.position = "static"), a.appendChild(u), o = u[v], a.removeChild(u), d.position = "absolute", g && "%" === r && ((s = Object(h.B)(a)).time = h.P.time, s.width = a[v]), Object(h.N)(y ? o * c / 100 : 100 / o * c))))
        },
        V = function(t, e, n, r) {
            var i;
            return a || X(), e in y && "transform" !== e && ~(e = y[e]).indexOf(",") && (e = e.split(",")[0]), f[e] && "transform" !== e ? (i = it(t, r), i = "transformOrigin" !== e ? i[e] : ot(L(t, k)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = $[e] && $[e](t, e, n) || L(t, e) || Object(h.C)(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").indexOf(" ") ? U(t, e, i, n) + n : i
        },
        Q = function(t, e, n, r) {
            if (!n || "none" === n) {
                var i = I(e, t, 1),
                    o = i && L(t, i, 1);
                o && o !== n && (e = i, n = o)
            }
            var a, u, s, l, c, f, p, d, g, D, m, v, y = new h.n(this._pt, t.style, e, 0, 1, h.L),
                _ = 0,
                x = 0;
            if (y.b = n, y.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = L(t, e) || r, t.style[e] = n), a = [n, r], Object(h.y)(a), r = a[1], s = (n = a[0]).match(h.I) || [], (r.match(h.I) || []).length) {
                for (; u = h.I.exec(r);) p = u[0], g = r.substring(_, u.index), c ? c = (c + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (c = 1), p !== (f = s[x++] || "") && (l = parseFloat(f) || 0, m = f.substr((l + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), d = parseFloat(p), D = p.substr((d + "").length), _ = h.I.lastIndex - D.length, D || (D = D || h.z.units[e] || m, _ === r.length && (r += D, y.e += D)), m !== D && (l = U(t, e, f, D) || 0), y._pt = {
                    _next: y._pt,
                    p: g || 1 === x ? g : ",",
                    s: l,
                    c: v ? v * d : d - l,
                    m: c && c < 4 ? Math.round : 0
                });
                y.c = _ < r.length ? r.substring(_, r.length) : ""
            } else y.r = "display" === e && "none" === r ? F : C;
            return h.K.test(r) && (y.e = 0), this._pt = y, y
        },
        G = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Z = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, o = e.t,
                    a = o.style,
                    u = e.u,
                    s = o._gsap;
                if ("all" === u || !0 === u) a.cssText = "", r = 1;
                else
                    for (i = (u = u.split(",")).length; --i > -1;) n = u[i], f[n] && (r = 1, n = "transformOrigin" === n ? k : O), H(o, n);
                r && (H(o, O), s && (s.svg && o.removeAttribute("transform"), it(o, 1), s.uncache = 1))
            }
        },
        $ = {
            clearProps: function(t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new h.n(t._pt, e, n, 0, 0, Z);
                    return o.u = r, o.pr = -10, o.tween = i, t._props.push(n), 1
                }
            }
        },
        K = [1, 0, 0, 1, 0, 0],
        J = {},
        tt = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        et = function(t) {
            var e = L(t, O);
            return tt(e) ? K : e.substr(7).match(h.H).map(h.N)
        },
        nt = function(t, e) {
            var n, r, i, a, u = t._gsap || Object(h.B)(t),
                s = t.style,
                l = et(t);
            return u.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? K : l : (l !== K || t.offsetParent || t === o || u.svg || (i = s.display, s.display = "block", (n = t.parentNode) && t.offsetParent || (a = 1, r = t.nextSibling, o.appendChild(t)), l = et(t), i ? s.display = i : H(t, "display"), a && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : o.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        rt = function(t, e, n, r, i, o) {
            var a, u, s, l = t._gsap,
                c = i || nt(t, !0),
                h = l.xOrigin || 0,
                f = l.yOrigin || 0,
                p = l.xOffset || 0,
                d = l.yOffset || 0,
                g = c[0],
                D = c[1],
                m = c[2],
                v = c[3],
                y = c[4],
                _ = c[5],
                x = e.split(" "),
                b = parseFloat(x[0]) || 0,
                w = parseFloat(x[1]) || 0;
            n ? c !== K && (u = g * v - D * m) && (s = b * (-D / u) + w * (g / u) - (g * _ - D * y) / u, b = b * (v / u) + w * (-m / u) + (m * _ - v * y) / u, w = s) : (b = (a = z(t)).x + (~x[0].indexOf("%") ? b / 100 * a.width : b), w = a.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * a.height : w)), r || !1 !== r && l.smooth ? (y = b - h, _ = w - f, l.xOffset = p + (y * g + _ * m) - y, l.yOffset = d + (y * D + _ * v) - _) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = w, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[k] = "0px 0px", o && (q(o, l, "xOrigin", h, b), q(o, l, "yOrigin", f, w), q(o, l, "xOffset", p, l.xOffset), q(o, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", b + " " + w)
        },
        it = function(t, e) {
            var n = t._gsap || new h.g(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, o, a, u, s, l, f, D, m, v, y, _, x, b, w, C, F, E, T, A, M, P, S, B, N, I, X, Y, R, z, H, q = t.style,
                W = n.scaleX < 0,
                U = L(t, k) || "0";
            return r = i = o = s = l = f = D = m = v = 0, a = u = 1, n.svg = !(!t.getCTM || !j(t)), x = nt(t, n.svg), n.svg && (S = !n.uncache && t.getAttribute("data-svg-origin"), rt(t, S || U, !!S || n.originIsAbsolute, !1 !== n.smooth, x)), y = n.xOrigin || 0, _ = n.yOrigin || 0, x !== K && (F = x[0], E = x[1], T = x[2], A = x[3], r = M = x[4], i = P = x[5], 6 === x.length ? (a = Math.sqrt(F * F + E * E), u = Math.sqrt(A * A + T * T), s = F || E ? g(E, F) * p : 0, (D = T || A ? g(T, A) * p + s : 0) && (u *= Math.cos(D * d)), n.svg && (r -= y - (y * F + _ * T), i -= _ - (y * E + _ * A))) : (H = x[6], R = x[7], I = x[8], X = x[9], Y = x[10], z = x[11], r = x[12], i = x[13], o = x[14], l = (b = g(H, Y)) * p, b && (S = M * (w = Math.cos(-b)) + I * (C = Math.sin(-b)), B = P * w + X * C, N = H * w + Y * C, I = M * -C + I * w, X = P * -C + X * w, Y = H * -C + Y * w, z = R * -C + z * w, M = S, P = B, H = N), f = (b = g(-T, Y)) * p, b && (w = Math.cos(-b), z = A * (C = Math.sin(-b)) + z * w, F = S = F * w - I * C, E = B = E * w - X * C, T = N = T * w - Y * C), s = (b = g(E, F)) * p, b && (S = F * (w = Math.cos(b)) + E * (C = Math.sin(b)), B = M * w + P * C, E = E * w - F * C, P = P * w - M * C, F = S, M = B), l && Math.abs(l) + Math.abs(s) > 359.9 && (l = s = 0, f = 180 - f), a = Object(h.N)(Math.sqrt(F * F + E * E + T * T)), u = Object(h.N)(Math.sqrt(P * P + H * H)), b = g(M, P), D = Math.abs(b) > 2e-4 ? b * p : 0, v = z ? 1 / (z < 0 ? -z : z) : 0), n.svg && (x = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !tt(L(t, O)), x && t.setAttribute("transform", x))), Math.abs(D) > 90 && Math.abs(D) < 270 && (W ? (a *= -1, D += s <= 0 ? 180 : -180, s += s <= 0 ? 180 : -180) : (u *= -1, D += D <= 0 ? 180 : -180)), n.x = ((n.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.y = ((n.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.z = o + "px", n.scaleX = Object(h.N)(a), n.scaleY = Object(h.N)(u), n.rotation = Object(h.N)(s) + "deg", n.rotationX = Object(h.N)(l) + "deg", n.rotationY = Object(h.N)(f) + "deg", n.skewX = D + "deg", n.skewY = m + "deg", n.transformPerspective = v + "px", (n.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (q[k] = ot(U)), n.xOffset = n.yOffset = 0, n.force3D = h.z.force3D, n.renderTransform = n.svg ? lt : c ? st : ut, n.uncache = 0, n
        },
        ot = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        at = function(t, e, n) {
            var r = Object(h.T)(e);
            return Object(h.N)(parseFloat(e) + parseFloat(U(t, "x", n + "px", r))) + r
        },
        ut = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, st(t, e)
        },
        st = function(t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                o = n.x,
                a = n.y,
                u = n.z,
                s = n.rotation,
                l = n.rotationY,
                c = n.rotationX,
                h = n.skewX,
                f = n.skewY,
                p = n.scaleX,
                g = n.scaleY,
                D = n.transformPerspective,
                m = n.force3D,
                v = n.target,
                y = n.zOrigin,
                _ = "",
                x = "auto" === m && t && 1 !== t || !0 === m;
            if (y && ("0deg" !== c || "0deg" !== l)) {
                var b, w = parseFloat(l) * d,
                    C = Math.sin(w),
                    F = Math.cos(w);
                w = parseFloat(c) * d, b = Math.cos(w), o = at(v, o, C * b * -y), a = at(v, a, -Math.sin(w) * -y), u = at(v, u, F * b * -y + y)
            }
            "0px" !== D && (_ += "perspective(" + D + ") "), (r || i) && (_ += "translate(" + r + "%, " + i + "%) "), (x || "0px" !== o || "0px" !== a || "0px" !== u) && (_ += "0px" !== u || x ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + ") "), "0deg" !== s && (_ += "rotate(" + s + ") "), "0deg" !== l && (_ += "rotateY(" + l + ") "), "0deg" !== c && (_ += "rotateX(" + c + ") "), "0deg" === h && "0deg" === f || (_ += "skew(" + h + ", " + f + ") "), 1 === p && 1 === g || (_ += "scale(" + p + ", " + g + ") "), v.style[O] = _ || "translate(0, 0)"
        },
        lt = function(t, e) {
            var n, r, i, o, a, u = e || this,
                s = u.xPercent,
                l = u.yPercent,
                c = u.x,
                f = u.y,
                p = u.rotation,
                g = u.skewX,
                D = u.skewY,
                m = u.scaleX,
                v = u.scaleY,
                y = u.target,
                _ = u.xOrigin,
                x = u.yOrigin,
                b = u.xOffset,
                w = u.yOffset,
                C = u.forceCSS,
                F = parseFloat(c),
                E = parseFloat(f);
            p = parseFloat(p), g = parseFloat(g), (D = parseFloat(D)) && (g += D = parseFloat(D), p += D), p || g ? (p *= d, g *= d, n = Math.cos(p) * m, r = Math.sin(p) * m, i = Math.sin(p - g) * -v, o = Math.cos(p - g) * v, g && (D *= d, a = Math.tan(g - D), i *= a = Math.sqrt(1 + a * a), o *= a, D && (a = Math.tan(D), n *= a = Math.sqrt(1 + a * a), r *= a)), n = Object(h.N)(n), r = Object(h.N)(r), i = Object(h.N)(i), o = Object(h.N)(o)) : (n = m, o = v, r = i = 0), (F && !~(c + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (F = U(y, "x", c, "px"), E = U(y, "y", f, "px")), (_ || x || b || w) && (F = Object(h.N)(F + _ - (_ * n + x * i) + b), E = Object(h.N)(E + x - (_ * r + x * o) + w)), (s || l) && (a = y.getBBox(), F = Object(h.N)(F + s / 100 * a.width), E = Object(h.N)(E + l / 100 * a.height)), a = "matrix(" + n + "," + r + "," + i + "," + o + "," + F + "," + E + ")", y.setAttribute("transform", a), C && (y.style[O] = a)
        },
        ct = function(t, e, n, r, i, o) {
            var a, u, s = Object(h.E)(i),
                l = parseFloat(i) * (s && ~i.indexOf("rad") ? p : 1),
                c = o ? l * o : l - r,
                f = r + c + "deg";
            return s && ("short" === (a = i.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === a && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === a && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = u = new h.n(t._pt, e, n, r, c, x), u.e = f, u.u = "deg", t._props.push(n), u
        },
        ht = function(t, e, n) {
            var r, o, a, u, l, c, p, d = s.style,
                g = n._gsap;
            for (o in d.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", d[O] = e, i.body.appendChild(s), r = it(s, 1), f)(a = g[o]) !== (u = r[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (l = Object(h.T)(a) !== (p = Object(h.T)(u)) ? U(n, o, a, p) : parseFloat(a), c = parseFloat(u), t._pt = new h.n(t._pt, g, o, l, c - l, _), t._pt.u = p || 0, t._props.push(o));
            i.body.removeChild(s)
        };
    /*!
     * CSSPlugin 3.2.4
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Object(h.A)("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            o = "Left",
            a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function(n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        $[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
            var o, u;
            if (arguments.length < 4) return o = a.map((function(e) {
                return V(t, e, n)
            })), 5 === (u = o.join(" ")).split(o[0]).length ? o[0] : u;
            o = (r + "").split(" "), u = {}, a.forEach((function(t, e) {
                return u[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            })), t.init(e, u, i)
        }
    }));
    var ft, pt, dt = {
        name: "css",
        register: X,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
            var o, u, s, l, c, p, d, g, D, m, x, C, F, E, T, A, M, P, S, k = this._props,
                B = t.style;
            for (d in a || X(), e)
                if ("autoRound" !== d && (u = e[d], !h.J[d] || !Object(h.x)(d, e, n, r, t, i)))
                    if (c = typeof u, p = $[d], "function" === c && (c = typeof(u = u.call(n, r, t, i))), "string" === c && ~u.indexOf("random(") && (u = Object(h.M)(u)), p) p(this, t, d, u, n) && (T = 1);
                    else if ("--" === d.substr(0, 2)) this.add(B, "setProperty", getComputedStyle(t).getPropertyValue(d) + "", u + "", r, i, 0, 0, d);
            else {
                if (o = V(t, d), l = parseFloat(o), (m = "string" === c && "=" === u.charAt(1) ? +(u.charAt(0) + "1") : 0) && (u = u.substr(2)), s = parseFloat(u), d in y && ("autoAlpha" === d && (1 === l && "hidden" === V(t, "visibility") && s && (l = 0), q(this, B, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== d && "transform" !== d && ~(d = y[d]).indexOf(",") && (d = d.split(",")[0])), x = d in f)
                    if (C || ((F = t._gsap).renderTransform || it(t), E = !1 !== e.smoothOrigin && F.smooth, (C = this._pt = new h.n(this._pt, B, O, 0, 1, F.renderTransform, F, 0, -1)).dep = 1), "scale" === d) this._pt = new h.n(this._pt, F, "scaleY", F.scaleY, m ? m * s : s - F.scaleY), k.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            M = void 0, P = void 0, S = void 0, M = (A = u).split(" "), P = M[0], S = M[1] || "50%", "top" !== P && "bottom" !== P && "left" !== S && "right" !== S || (A = P, P = S, S = A), M[0] = G[P] || P, M[1] = G[S] || S, u = M.join(" "), F.svg ? rt(t, u, 0, E, 0, this) : ((D = parseFloat(u.split(" ")[2]) || 0) !== F.zOrigin && q(this, F, "zOrigin", F.zOrigin, D), q(this, B, d, ot(o), ot(u)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            rt(t, u, 1, E, 0, this);
                            continue
                        }
                        if (d in J) {
                            ct(this, F, d, l, u, m);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            q(this, F, "smooth", F.smooth, u);
                            continue
                        }
                        if ("force3D" === d) {
                            F[d] = u;
                            continue
                        }
                        if ("transform" === d) {
                            ht(this, u, t);
                            continue
                        }
                    }
                else d in B || (d = I(d) || d);
                if (x || (s || 0 === s) && (l || 0 === l) && !v.test(u) && d in B) s || (s = 0), (g = (o + "").substr((l + "").length)) !== (D = (u + "").substr((s + "").length) || (d in h.z.units ? h.z.units[d] : g)) && (l = U(t, d, o, D)), this._pt = new h.n(this._pt, x ? F : B, d, l, m ? m * s : s - l, "px" !== D || !1 === e.autoRound || x ? _ : w), this._pt.u = D || 0, g !== D && (this._pt.b = o, this._pt.r = b);
                else if (d in B) Q.call(this, t, d, o, u);
                else {
                    if (!(d in t)) {
                        Object(h.G)(d, u);
                        continue
                    }
                    this.add(t, d, t[d], u, r, i)
                }
                k.push(d)
            }
            T && Object(h.O)(this)
        },
        get: V,
        aliases: y,
        getSetter: function(t, e, n) {
            var r = y[e];
            return r && r.indexOf(",") < 0 && (e = r), e in f && e !== k && (t._gsap.x || V(t, "x")) ? n && l === n ? "scale" === e ? M : A : (l = n || {}) && ("scale" === e ? P : S) : t.style && !Object(h.F)(t.style[e]) ? E : ~e.indexOf("-") ? T : Object(h.D)(t, e)
        },
        core: {
            _removeProperty: H,
            _getMatrix: nt
        }
    };
    h.U.utils.checkPrefix = I, ft = "rotation,rotationX,rotationY,skewX,skewY", pt = Object(h.A)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ft + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        f[t] = 1
    })), Object(h.A)(ft, (function(t) {
        h.z.units[t] = "deg", J[t] = 1
    })), y[pt[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ft, Object(h.A)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        y[e[1]] = pt[e[0]]
    })), Object(h.A)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        h.z.units[t] = "px"
    })), h.U.registerPlugin(dt)
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "gsap", (function() {
        return Xr
    })), n.d(e, "default", (function() {
        return Xr
    })), n.d(e, "CSSPlugin", (function() {
        return f.b
    })), n.d(e, "TweenMax", (function() {
        return Yr
    })), n.d(e, "TweenLite", (function() {
        return h.w
    })), n.d(e, "TimelineMax", (function() {
        return h.v
    })), n.d(e, "TimelineLite", (function() {
        return h.u
    })), n.d(e, "Power0", (function() {
        return h.i
    })), n.d(e, "Power1", (function() {
        return h.j
    })), n.d(e, "Power2", (function() {
        return h.k
    })), n.d(e, "Power3", (function() {
        return h.l
    })), n.d(e, "Power4", (function() {
        return h.m
    })), n.d(e, "Linear", (function() {
        return h.h
    })), n.d(e, "Quad", (function() {
        return h.o
    })), n.d(e, "Cubic", (function() {
        return h.d
    })), n.d(e, "Quart", (function() {
        return h.p
    })), n.d(e, "Quint", (function() {
        return h.q
    })), n.d(e, "Strong", (function() {
        return h.t
    })), n.d(e, "Elastic", (function() {
        return h.e
    })), n.d(e, "Back", (function() {
        return h.a
    })), n.d(e, "SteppedEase", (function() {
        return h.s
    })), n.d(e, "Bounce", (function() {
        return h.b
    })), n.d(e, "Sine", (function() {
        return h.r
    })), n.d(e, "Expo", (function() {
        return h.f
    })), n.d(e, "Circ", (function() {
        return h.c
    })), n.d(e, "wrap", (function() {
        return h.fb
    })), n.d(e, "wrapYoyo", (function() {
        return h.gb
    })), n.d(e, "distribute", (function() {
        return h.S
    })), n.d(e, "random", (function() {
        return h.Z
    })), n.d(e, "snap", (function() {
        return h.bb
    })), n.d(e, "normalize", (function() {
        return h.X
    })), n.d(e, "getUnit", (function() {
        return h.T
    })), n.d(e, "clamp", (function() {
        return h.Q
    })), n.d(e, "splitColor", (function() {
        return h.cb
    })), n.d(e, "toArray", (function() {
        return h.db
    })), n.d(e, "mapRange", (function() {
        return h.W
    })), n.d(e, "pipe", (function() {
        return h.Y
    })), n.d(e, "unitize", (function() {
        return h.eb
    })), n.d(e, "interpolate", (function() {
        return h.V
    })), n.d(e, "shuffle", (function() {
        return h.ab
    })), n.d(e, "Draggable", (function() {
        return Rt
    })), n.d(e, "CSSRulePlugin", (function() {
        return Gt
    })), n.d(e, "EaselPlugin", (function() {
        return ge
    })), n.d(e, "SlowMo", (function() {
        return Fe
    })), n.d(e, "ExpoScaleEase", (function() {
        return Ee
    })), n.d(e, "RoughEase", (function() {
        return Te
    })), n.d(e, "EasePack", (function() {
        return Ae
    })), n.d(e, "MotionPathPlugin", (function() {
        return Sn
    })), n.d(e, "PixiPlugin", (function() {
        return dr
    })), n.d(e, "ScrollToPlugin", (function() {
        return Pr
    })), n.d(e, "TextPlugin", (function() {
        return Ir
    }));
    var r, i, o, a, u, s, l, c, h = n(0),
        f = n(3),
        p = "transform",
        d = p + "Origin",
        g = function(t) {
            var e = t.ownerDocument || t;
            !(p in t.style) && "msTransform" in t.style && (d = (p = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (i = window, l = new x, e) {
                r = e, o = e.documentElement, a = e.body;
                var n = e.createElement("div"),
                    u = e.createElement("div");
                a.appendChild(n), n.appendChild(u), n.style.position = "static", n.style[p] = "translate3d(0,0,1px)", c = u.offsetParent !== n, a.removeChild(n)
            }
            return e
        },
        D = [],
        m = [],
        v = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        y = function t(e, n) {
            if (e.parentNode && (r || g(e))) {
                var i = v(e),
                    o = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    a = i ? n ? "rect" : "g" : "div",
                    l = 2 !== n ? 0 : 100,
                    c = 3 === n ? 100 : 0,
                    h = "position:absolute;display:block;pointer-events:none;",
                    f = r.createElementNS ? r.createElementNS(o.replace(/^https/, "http"), a) : r.createElement(a);
                return n && (i ? (s || (s = t(e)), f.setAttribute("width", .01), f.setAttribute("height", .01), f.setAttribute("transform", "translate(" + l + "," + c + ")"), s.appendChild(f)) : (u || ((u = t(e)).style.cssText = h), f.style.cssText = h + "width:1px;height:1px;top:" + c + "px;left:" + l + "px", u.appendChild(f))), f
            }
            throw "Need document and parent."
        },
        _ = function(t, e, n, r, i, o, a) {
            return t.a = e, t.b = n, t.c = r, t.d = i, t.e = o, t.f = a, t
        },
        x = function() {
            function t(t, e, n, r, i, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), _(this, t, e, n, r, i, o)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    o = this.f,
                    a = t * r - e * n;
                return _(this, r / a, -e / a, -n / a, t / a, (n * o - r * i) / a, -(t * o - e * i) / a)
            }, e.multiply = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f,
                    u = t.a,
                    s = t.c,
                    l = t.b,
                    c = t.d,
                    h = t.e,
                    f = t.f;
                return _(this, u * e + l * r, u * n + l * i, s * e + c * r, s * n + c * i, o + h * e + f * r, a + h * n + f * i)
            }, e.clone = function() {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && o === t.e && a === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    o = this.b,
                    a = this.c,
                    u = this.d,
                    s = this.e,
                    l = this.f;
                return e.x = n * i + r * a + s || 0, e.y = n * o + r * u + l || 0, e
            }, t
        }();

    function b(t, e, n) {
        if (!t || !t.parentNode || (r || g(t)).documentElement === t) return new x;
        var h = v(t) ? D : m,
            f = function(t, e) {
                var n, r, o, a, h, f = v(t),
                    g = t === f,
                    _ = f ? D : m;
                if (t === i) return t;
                if (_.length || _.push(y(t, 1), y(t, 2), y(t, 3)), n = f ? s : u, f) o = g ? {
                    x: 0,
                    y: 0
                } : t.getBBox(), (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (a = (r = r.consolidate().matrix).a * o.x + r.c * o.y, h = r.b * o.x + r.d * o.y) : (r = l, a = o.x, h = o.y), e && "g" === t.tagName.toLowerCase() && (a = h = 0), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + a) + "," + (r.f + h) + ")"), (g ? f : t.parentNode).appendChild(n);
                else {
                    if (a = h = 0, c)
                        for (r = t.offsetParent, o = t; o && (o = o.parentNode) && o !== r && o.parentNode;)(i.getComputedStyle(o)[p] + "").length > 4 && (a = o.offsetLeft, h = o.offsetTop, o = 0);
                    (o = n.style).top = t.offsetTop - h + "px", o.left = t.offsetLeft - a + "px", r = i.getComputedStyle(t), o[p] = r[p], o[d] = r[d], o.position = "fixed" === r.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
                }
                return n
            }(t, n),
            _ = h[0].getBoundingClientRect(),
            b = h[1].getBoundingClientRect(),
            w = h[2].getBoundingClientRect(),
            C = f.parentNode,
            F = function t(e) {
                return "fixed" === i.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(t),
            E = new x((b.left - _.left) / 100, (b.top - _.top) / 100, (w.left - _.left) / 100, (w.top - _.top) / 100, _.left + (F ? 0 : i.pageXOffset || r.scrollLeft || o.scrollLeft || a.scrollLeft || 0), _.top + (F ? 0 : i.pageYOffset || r.scrollTop || o.scrollTop || a.scrollTop || 0));
        return C.removeChild(f), e ? E.inverse() : E
    }
    /*!
     * Draggable 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var w, C, F, E, T, A, M, P, S, O, k, B, L, N, I, X, Y, R, z, j, H, q = function() {
            return "undefined" != typeof window
        },
        W = function() {
            return w || q() && (w = window.gsap) && w.registerPlugin && w
        },
        U = function(t) {
            return "function" == typeof t
        },
        V = function(t) {
            return "object" == typeof t
        },
        Q = function(t) {
            return void 0 === t
        },
        G = function() {
            return !1
        },
        Z = "transform",
        $ = "transformOrigin",
        K = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        J = Array.isArray,
        tt = function(t, e) {
            var n = F.createElementNS ? F.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : F.createElement(t);
            return n.style ? n : F.createElement(t)
        },
        et = 180 / Math.PI,
        nt = new x,
        rt = Date.now || function() {
            return (new Date).getTime()
        },
        it = [],
        ot = {},
        at = 0,
        ut = /^(?:a|input|textarea|button|select)$/i,
        st = 0,
        lt = {},
        ct = {},
        ht = function(t, e) {
            var n, r = {};
            for (n in t) r[n] = e ? t[n] * e : t[n];
            return r
        },
        ft = function() {
            return it.forEach((function(t) {
                return t()
            }))
        },
        pt = function() {
            return !it.length && w.ticker.remove(ft)
        },
        dt = function(t) {
            for (var e = it.length; e--;) it[e] === t && it.splice(e, 1);
            w.to(pt, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: pt,
                data: "_draggable"
            })
        },
        gt = function(t, e, n, r) {
            if (t.addEventListener) {
                var i = L[e];
                r = r || (k ? {
                    passive: !1
                } : null), t.addEventListener(i || e, n, r), i && e !== i && "pointer" !== i.substr(0, 7) && t.addEventListener(e, n, r)
            }
        },
        Dt = function(t, e, n) {
            if (t.removeEventListener) {
                var r = L[e];
                t.removeEventListener(r || e, n), r && e !== r && "pointer" !== r.substr(0, 7) && t.removeEventListener(e, n)
            }
        },
        mt = function(t) {
            t.preventDefault && (t.preventDefault(), t.preventManipulation && t.preventManipulation())
        },
        vt = function t(e) {
            I = e.touches && N < e.touches.length, Dt(e.target, "touchend", t)
        },
        yt = function(t) {
            I = t.touches && N < t.touches.length, gt(t.target, "touchend", vt)
        },
        _t = function(t) {
            return C.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
        },
        xt = function(t) {
            return C.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
        },
        bt = function t(e, n) {
            gt(e, "scroll", n), Ct(e.parentNode) || t(e.parentNode, n)
        },
        wt = function t(e, n) {
            Dt(e, "scroll", n), Ct(e.parentNode) || t(e.parentNode, n)
        },
        Ct = function(t) {
            return !(t && t !== E && 9 !== t.nodeType && t !== F.body && t !== C && t.nodeType && t.parentNode)
        },
        Ft = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return Math.max(0, Ct(t) ? Math.max(E[r], T[r]) - (C["inner" + n] || E[i] || T[i]) : t[r] - t[i])
        },
        Et = function t(e) {
            var n = Ft(e, "x"),
                r = Ft(e, "y");
            Ct(e) ? e = ct : t(e.parentNode), e._gsMaxScrollX = n, e._gsMaxScrollY = r, e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0
        },
        Tt = function(t, e, n) {
            var r = t.style;
            r && (Q(r[e]) && (e = S(e, t) || e), null == n ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = n)
        },
        At = function(t) {
            return C.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
        },
        Mt = {},
        Pt = function(t) {
            if (t === C) return Mt.left = Mt.top = 0, Mt.width = Mt.right = E.clientWidth || t.innerWidth || T.clientWidth || 0, Mt.height = Mt.bottom = (t.innerHeight || 0) - 20 < E.clientHeight ? E.clientHeight : t.innerHeight || T.clientHeight || 0, Mt;
            var e = t.ownerDocument || F,
                n = Q(t.pageX) ? t.nodeType || Q(t.left) || Q(t.top) ? O(t)[0].getBoundingClientRect() : t : {
                    left: t.pageX - xt(e),
                    top: t.pageY - _t(e),
                    right: t.pageX - xt(e) + 1,
                    bottom: t.pageY - _t(e) + 1
                };
            return Q(n.right) && !Q(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : Q(n.width) && (n = {
                width: n.right - n.left,
                height: n.bottom - n.top,
                right: n.right,
                left: n.left,
                bottom: n.bottom,
                top: n.top
            }), n
        },
        St = function(t, e, n) {
            var r, i = t.vars,
                o = i[n],
                a = t._listeners[e];
            return U(o) && (r = o.apply(i.callbackScope || t, i[n + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (r = !1), r
        },
        Ot = function(t, e) {
            var n, r, i, o = O(t)[0];
            return o.nodeType || o === C ? Bt(o, e) : Q(t.left) ? {
                left: r = t.min || t.minX || t.minRotation || 0,
                top: n = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - r,
                height: (t.max || t.maxY || 0) - n
            } : (i = {
                x: 0,
                y: 0
            }, {
                left: t.left - i.x,
                top: t.top - i.y,
                width: t.width,
                height: t.height
            })
        },
        kt = {},
        Bt = function(t, e) {
            e = O(e)[0];
            var n, r, i, o, a, u, s, l, c, h, f, p, d, g, D = t.getBBox && t.ownerSVGElement,
                m = t.ownerDocument || F;
            if (t === C) i = _t(m), r = (n = xt(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0), o = i + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0);
            else {
                if (e === C || Q(e)) return t.getBoundingClientRect();
                n = i = 0, D ? (f = (h = t.getBBox()).width, p = h.height) : (t.viewBox && (h = t.viewBox.baseVal) && (n = h.x || 0, i = h.y || 0, f = h.width, p = h.height), f || (d = At(t), f = (parseFloat(d.width) || t.clientWidth || 0) + parseFloat(d.borderLeftWidth) + parseFloat(d.borderRightWidth), p = (parseFloat(d.height) || t.clientHeight || 0) + parseFloat(d.borderTopWidth) + parseFloat(d.borderBottomWidth))), r = f, o = p
            }
            return t === e ? {
                left: n,
                top: i,
                width: r - n,
                height: o - i
            } : (u = (a = b(e, !0).multiply(b(t))).apply({
                x: n,
                y: i
            }), s = a.apply({
                x: r,
                y: i
            }), l = a.apply({
                x: r,
                y: o
            }), c = a.apply({
                x: n,
                y: o
            }), n = Math.min(u.x, s.x, l.x, c.x), i = Math.min(u.y, s.y, l.y, c.y), {
                left: n + ((g = e.parentNode || {}).scrollLeft || 0),
                top: i + (g.scrollTop || 0),
                width: Math.max(u.x, s.x, l.x, c.x) - n,
                height: Math.max(u.y, s.y, l.y, c.y) - i
            })
        },
        Lt = function(t, e, n, r, i, o) {
            var a, u, s, l = {};
            if (e)
                if (1 !== i && e instanceof Array) {
                    if (l.end = a = [], s = e.length, V(e[0]))
                        for (u = 0; u < s; u++) a[u] = ht(e[u], i);
                    else
                        for (u = 0; u < s; u++) a[u] = e[u] * i;
                    n += 1.1, r -= 1.1
                } else U(e) ? l.end = function(n) {
                    var r, o, a = e.call(t, n);
                    if (1 !== i)
                        if (V(a)) {
                            for (o in r = {}, a) r[o] = a[o] * i;
                            a = r
                        } else a *= i;
                    return a
                } : l.end = e;
            return (n || 0 === n) && (l.max = n), (r || 0 === r) && (l.min = r), o && (l.velocity = 0), l
        },
        Nt = function t(e) {
            var n;
            return !(!e || !e.getAttribute || e === T) && (!("true" !== (n = e.getAttribute("data-clickable")) && ("false" === n || !e.onclick && !ut.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
        },
        It = function(t, e) {
            for (var n, r = t.length; r--;)(n = t[r]).ondragstart = n.onselectstart = e ? null : G, w.set(n, {
                lazy: !0,
                userSelect: e ? "text" : "none"
            })
        },
        Xt = function(t, e) {
            t = w.utils.toArray(t)[0], e = e || {};
            var n, r, i, o, a, u, s = document.createElement("div"),
                l = s.style,
                c = t.firstChild,
                h = 0,
                f = 0,
                p = t.scrollTop,
                d = t.scrollLeft,
                g = t.scrollWidth,
                D = t.scrollHeight,
                m = 0,
                v = 0,
                y = 0;
            j && !1 !== e.force3D ? (a = "translate3d(", u = "px,0px)") : Z && (a = "translate(", u = "px)"), this.scrollTop = function(t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e)
            }, this.scrollLeft = function(t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e)
            }, this.left = function(n, r) {
                if (!arguments.length) return -(t.scrollLeft + f);
                var i = t.scrollLeft - d,
                    o = f;
                if ((i > 2 || i < -2) && !r) return d = t.scrollLeft, w.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-d), void(e.onKill && e.onKill());
                (n = -n) < 0 ? (f = n - .5 | 0, n = 0) : n > v ? (f = n - v | 0, n = v) : f = 0, (f || o) && (this._skip || (l[Z] = a + -f + "px," + -h + u), f + m >= 0 && (l.paddingRight = f + m + "px")), t.scrollLeft = 0 | n, d = t.scrollLeft
            }, this.top = function(n, r) {
                if (!arguments.length) return -(t.scrollTop + h);
                var i = t.scrollTop - p,
                    o = h;
                if ((i > 2 || i < -2) && !r) return p = t.scrollTop, w.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-p), void(e.onKill && e.onKill());
                (n = -n) < 0 ? (h = n - .5 | 0, n = 0) : n > y ? (h = n - y | 0, n = y) : h = 0, (h || o) && (this._skip || (l[Z] = a + -f + "px," + -h + u)), t.scrollTop = 0 | n, p = t.scrollTop
            }, this.maxScrollTop = function() {
                return y
            }, this.maxScrollLeft = function() {
                return v
            }, this.disable = function() {
                for (c = s.firstChild; c;) o = c.nextSibling, t.appendChild(c), c = o;
                t === s.parentNode && t.removeChild(s)
            }, this.enable = function() {
                if ((c = t.firstChild) !== s) {
                    for (; c;) o = c.nextSibling, s.appendChild(c), c = o;
                    t.appendChild(s), this.calibrate()
                }
            }, this.calibrate = function(e) {
                var o, a, u, c = t.clientWidth === n;
                p = t.scrollTop, d = t.scrollLeft, c && t.clientHeight === r && s.offsetHeight === i && g === t.scrollWidth && D === t.scrollHeight && !e || ((h || f) && (a = this.left(), u = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), o = At(t), c && !e || (l.display = "block", l.width = "auto", l.paddingRight = "0px", (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(o.paddingLeft) + (H ? parseFloat(o.paddingRight) : 0))), l.display = "inline-block", l.position = "relative", l.overflow = "visible", l.verticalAlign = "top", l.boxSizing = "content-box", l.width = "100%", l.paddingRight = m + "px", H && (l.paddingBottom = o.paddingBottom), n = t.clientWidth, r = t.clientHeight, g = t.scrollWidth, D = t.scrollHeight, v = t.scrollWidth - n, y = t.scrollHeight - r, i = s.offsetHeight, l.display = "block", (a || u) && (this.left(a), this.top(u)))
            }, this.content = s, this.element = t, this._skip = !1, this.enable()
        },
        Yt = function(t) {
            var e, n, r, i, o;
            q() && document.body && (C = window, F = document, E = F.documentElement, T = F.body, A = tt("div"), z = !!window.PointerEvent, (M = tt("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", R = "grab" === M.style.cursor ? "grab" : "move", X = C.navigator && -1 !== C.navigator.userAgent.toLowerCase().indexOf("android"), B = "ontouchstart" in E && "orientation" in C, n = tt("div"), r = tt("div"), i = r.style, o = T, i.display = "inline-block", i.position = "relative", n.style.cssText = r.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(r), o.appendChild(n), e = r.offsetHeight + 18 > n.scrollHeight, o.removeChild(n), H = e, L = function(t) {
                for (var e = t.split(","), n = (Q(A.onpointerdown) ? Q(A.onmspointerdown) ? t : "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : "pointerdown,pointermove,pointerup,pointercancel").split(","), r = {}, i = 4; --i > -1;) r[e[i]] = n[i], r[n[i]] = e[i];
                try {
                    E.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            k = 1
                        }
                    }))
                } catch (t) {}
                return r
            }("touchstart,touchmove,touchend,touchcancel"), gt(F, "touchcancel", G), gt(C, "touchmove", G), T && T.addEventListener("touchstart", G), gt(F, "contextmenu", (function() {
                for (var t in ot) ot[t].isPressed && ot[t].endDrag()
            })), w = P = W()), w ? (Y = w.plugins.inertia, S = w.utils.checkPrefix, Z = S(Z), $ = S($), O = w.utils.toArray, j = !!S("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
        },
        Rt = function(t) {
            var e, n;

            function r(e, n) {
                var i;
                i = t.call(this) || this, w || Yt(1), e = O(e)[0], Y || (Y = w.plugins.inertia), i.vars = n = ht(n || {}), i.target = e, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(n.dragResistance) || 0, i.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0, i.lockAxis = n.lockAxis, i.autoScroll = n.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!n.allowEventDefault, w.getProperty(e, "x");
                var o, a, u, s, l, c, h, f, p, d, g, D, m, v, y, _, T, A, P, S, k, j, H, q, W, G, Z, tt, ut, pt, vt = (n.type || "x,y").toLowerCase(),
                    Ft = ~vt.indexOf("x") || ~vt.indexOf("y"),
                    Mt = -1 !== vt.indexOf("rotation"),
                    Bt = Mt ? "rotation" : Ft ? "x" : "left",
                    Rt = Ft ? "y" : "top",
                    zt = !(!~vt.indexOf("x") && !~vt.indexOf("left") && "scroll" !== vt),
                    jt = !(!~vt.indexOf("y") && !~vt.indexOf("top") && "scroll" !== vt),
                    Ht = n.minimumMovement || 2,
                    qt = function(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(i),
                    Wt = O(n.trigger || n.handle || e),
                    Ut = {},
                    Vt = 0,
                    Qt = !1,
                    Gt = n.autoScrollMarginTop || 40,
                    Zt = n.autoScrollMarginRight || 40,
                    $t = n.autoScrollMarginBottom || 40,
                    Kt = n.autoScrollMarginLeft || 40,
                    Jt = n.clickableTest || Nt,
                    te = 0,
                    ee = e._gsap || w.core.getCache(e),
                    ne = function t(e) {
                        return "fixed" === At(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                    }(e),
                    re = function(t, n) {
                        return parseFloat(ee.get(e, t, n))
                    },
                    ie = e.ownerDocument || F,
                    oe = function(t) {
                        if (!(qt.isPressed && t.which < 2)) return mt(t), t.stopPropagation(), !1;
                        qt.endDrag()
                    },
                    ae = function t(n) {
                        if (qt.autoScroll && qt.isDragging && (Qt || T)) {
                            var r, i, o, u, s, l, c, h, p = e,
                                d = 15 * qt.autoScroll;
                            for (Qt = !1, ct.scrollTop = null != C.pageYOffset ? C.pageYOffset : null != ie.documentElement.scrollTop ? ie.documentElement.scrollTop : ie.body.scrollTop, ct.scrollLeft = null != C.pageXOffset ? C.pageXOffset : null != ie.documentElement.scrollLeft ? ie.documentElement.scrollLeft : ie.body.scrollLeft, u = qt.pointerX - ct.scrollLeft, s = qt.pointerY - ct.scrollTop; p && !i;) r = (i = Ct(p.parentNode)) ? ct : p.parentNode, o = i ? {
                                bottom: Math.max(E.clientHeight, C.innerHeight || 0),
                                right: Math.max(E.clientWidth, C.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : r.getBoundingClientRect(), l = c = 0, jt && ((h = r._gsMaxScrollY - r.scrollTop) < 0 ? c = h : s > o.bottom - $t && h ? (Qt = !0, c = Math.min(h, d * (1 - Math.max(0, o.bottom - s) / $t) | 0)) : s < o.top + Gt && r.scrollTop && (Qt = !0, c = -Math.min(r.scrollTop, d * (1 - Math.max(0, s - o.top) / Gt) | 0)), c && (r.scrollTop += c)), zt && ((h = r._gsMaxScrollX - r.scrollLeft) < 0 ? l = h : u > o.right - Zt && h ? (Qt = !0, l = Math.min(h, d * (1 - Math.max(0, o.right - u) / Zt) | 0)) : u < o.left + Kt && r.scrollLeft && (Qt = !0, l = -Math.min(r.scrollLeft, d * (1 - Math.max(0, u - o.left) / Kt) | 0)), l && (r.scrollLeft += l)), i && (l || c) && (C.scrollTo(r.scrollLeft, r.scrollTop), ye(qt.pointerX + l, qt.pointerY + c)), p = r
                        }
                        if (T) {
                            var g = qt.x,
                                D = qt.y;
                            Mt ? (qt.deltaX = g - parseFloat(ee.rotation), qt.rotation = g, ee.rotation = g + "deg", ee.renderTransform(1, ee)) : a ? (jt && (qt.deltaY = D - a.top(), a.top(D)), zt && (qt.deltaX = g - a.left(), a.left(g))) : Ft ? (jt && (qt.deltaY = D - parseFloat(ee.y), ee.y = D + "px"), zt && (qt.deltaX = g - parseFloat(ee.x), ee.x = g + "px"), ee.renderTransform(1, ee)) : (jt && (qt.deltaY = D - parseFloat(e.style.top || 0), e.style.top = D + "px"), zt && (qt.deltaY = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !f || n || tt || (tt = !0, !1 === St(qt, "drag", "onDrag") && (zt && (qt.x -= qt.deltaX), jt && (qt.y -= qt.deltaY), t(!0)), tt = !1)
                        }
                        T = !1
                    },
                    ue = function(t, n) {
                        var r, i, o = qt.x,
                            u = qt.y;
                        e._gsap || (ee = w.core.getCache(e)), Ft ? (qt.x = parseFloat(ee.x), qt.y = parseFloat(ee.y)) : Mt ? qt.x = qt.rotation = parseFloat(ee.rotation) : a ? (qt.y = a.top(), qt.x = a.left()) : (qt.y = parseInt(e.style.top || (i = At(e)) && i.top, 10) || 0, qt.x = parseInt(e.style.left || (i || {}).left, 10) || 0), (P || S || k) && !n && (qt.isDragging || qt.isThrowing) && (k && (lt.x = qt.x, lt.y = qt.y, (r = k(lt)).x !== qt.x && (qt.x = r.x, T = !0), r.y !== qt.y && (qt.y = r.y, T = !0)), P && (r = P(qt.x)) !== qt.x && (qt.x = r, Mt && (qt.rotation = r), T = !0), S && ((r = S(qt.y)) !== qt.y && (qt.y = r), T = !0)), T && ae(!0), t || (qt.deltaX = qt.x - o, qt.deltaY = qt.y - u, St(qt, "throwupdate", "onThrowUpdate"))
                    },
                    se = function(t, e, n, r) {
                        return null == e && (e = -1e20), null == n && (n = 1e20), U(t) ? function(i) {
                            var o = qt.isPressed ? 1 - qt.edgeResistance : 1;
                            return t.call(qt, i > n ? n + (i - n) * o : i < e ? e + (i - e) * o : i) * r
                        } : J(t) ? function(r) {
                            for (var i, o, a = t.length, u = 0, s = 1e20; --a > -1;)(o = (i = t[a]) - r) < 0 && (o = -o), o < s && i >= e && i <= n && (u = a, s = o);
                            return t[u]
                        } : isNaN(t) ? function(t) {
                            return t
                        } : function() {
                            return t * r
                        }
                    },
                    le = function() {
                        var t, r, i, o;
                        h = !1, a ? (a.calibrate(), qt.minX = g = -a.maxScrollLeft(), qt.minY = m = -a.maxScrollTop(), qt.maxX = d = qt.maxY = D = 0, h = !0) : n.bounds && (t = Ot(n.bounds, e.parentNode), Mt ? (qt.minX = g = t.left, qt.maxX = d = t.left + t.width, qt.minY = m = qt.maxY = D = 0) : Q(n.bounds.maxX) && Q(n.bounds.maxY) ? (r = Ot(e, e.parentNode), qt.minX = g = Math.round(re(Bt, "px") + t.left - r.left), qt.minY = m = Math.round(re(Rt, "px") + t.top - r.top), qt.maxX = d = Math.round(g + (t.width - r.width)), qt.maxY = D = Math.round(m + (t.height - r.height))) : (t = n.bounds, qt.minX = g = t.minX, qt.minY = m = t.minY, qt.maxX = d = t.maxX, qt.maxY = D = t.maxY), g > d && (qt.minX = d, qt.maxX = d = g, g = qt.minX), m > D && (qt.minY = D, qt.maxY = D = m, m = qt.minY), Mt && (qt.minRotation = g, qt.maxRotation = d), h = !0), n.liveSnap && (i = !0 === n.liveSnap ? n.snap || {} : n.liveSnap, o = J(i) || U(i), Mt ? (P = se(o ? i : i.rotation, g, d, 1), S = null) : i.points ? k = function(t, e, n, r, i, o, a) {
                            return o = o && o < 1e20 ? o * o : 1e20, U(t) ? function(u) {
                                var s, l, c, h = qt.isPressed ? 1 - qt.edgeResistance : 1,
                                    f = u.x,
                                    p = u.y;
                                return u.x = f = f > n ? n + (f - n) * h : f < e ? e + (f - e) * h : f, u.y = p = p > i ? i + (p - i) * h : p < r ? r + (p - r) * h : p, (s = t.call(qt, u)) !== u && (u.x = s.x, u.y = s.y), 1 !== a && (u.x *= a, u.y *= a), o < 1e20 && (l = u.x - f) * l + (c = u.y - p) * c > o && (u.x = f, u.y = p), u
                            } : J(t) ? function(e) {
                                for (var n, r, i, a, u = t.length, s = 0, l = 1e20; --u > -1;)(a = (n = (i = t[u]).x - e.x) * n + (r = i.y - e.y) * r) < l && (s = u, l = a);
                                return l <= o ? t[s] : e
                            } : function(t) {
                                return t
                            }
                        }(o ? i : i.points, g, d, m, D, i.radius, a ? -1 : 1) : (zt && (P = se(o ? i : i.x || i.left || i.scrollLeft, g, d, a ? -1 : 1)), jt && (S = se(o ? i : i.y || i.top || i.scrollTop, m, D, a ? -1 : 1))))
                    },
                    ce = function() {
                        qt.isThrowing = !1, St(qt, "throwcomplete", "onThrowComplete")
                    },
                    he = function() {
                        qt.isThrowing = !1
                    },
                    fe = function(t, r) {
                        var i, o, u, s;
                        t && Y ? (!0 === t && (i = n.snap || n.liveSnap || {}, o = J(i) || U(i), t = {
                            resistance: (n.throwResistance || n.resistance || 1e3) / (Mt ? 10 : 1)
                        }, Mt ? t.rotation = Lt(qt, o ? i : i.rotation, d, g, 1, r) : (zt && (t[Bt] = Lt(qt, o ? i : i.points || i.x || i.left, d, g, a ? -1 : 1, r || "x" === qt.lockedAxis)), jt && (t[Rt] = Lt(qt, o ? i : i.points || i.y || i.top, D, m, a ? -1 : 1, r || "y" === qt.lockedAxis)), (i.points || J(i) && V(i[0])) && (t.linkedProps = Bt + "," + Rt, t.radius = i.radius))), qt.isThrowing = !0, s = isNaN(n.overshootTolerance) ? 1 === n.edgeResistance ? 0 : 1 - qt.edgeResistance + .2 : n.overshootTolerance, t.duration || (t.duration = {
                            max: Math.max(n.minDuration || 0, "maxDuration" in n ? n.maxDuration : 2),
                            min: isNaN(n.minDuration) ? 0 === s || V(t) && t.resistance > 1e3 ? 0 : .5 : n.minDuration,
                            overshoot: s
                        }), qt.tween = u = w.to(a || e, {
                            inertia: t,
                            data: "_draggable",
                            onComplete: ce,
                            onInterrupt: he,
                            onUpdate: n.fastMode ? St : ue,
                            onUpdateParams: n.fastMode ? [qt, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                        }), n.fastMode || (a && (a._skip = !0), u.render(u.duration(), !0, !0), ue(!0, !0), qt.endX = qt.x, qt.endY = qt.y, Mt && (qt.endRotation = qt.x), u.play(0), ue(!0, !0), a && (a._skip = !1))) : h && qt.applyBounds()
                    },
                    pe = function(t) {
                        var n, r = q;
                        q = b(e.parentNode, !0), t && qt.isPressed && !q.equals(r || new x) && (n = r.inverse().apply({
                            x: u,
                            y: s
                        }), q.apply(n, n), u = n.x, s = n.y), q.equals(nt) && (q = null)
                    },
                    de = function() {
                        var t, n, r, i = 1 - qt.edgeResistance;
                        pe(!1), q && (kt.x = qt.pointerX, kt.y = qt.pointerY, q.apply(kt, kt), u = kt.x, s = kt.y), T && (ye(qt.pointerX, qt.pointerY), ae(!0)), a ? (le(), c = a.top(), l = a.left()) : (ge() ? (ue(!0, !0), le()) : qt.applyBounds(), Mt ? (t = e.ownerSVGElement ? [ee.xOrigin - e.getBBox().x, ee.yOrigin - e.getBBox().y] : (At(e)[$] || "0 0").split(" "), _ = qt.rotationOrigin = b(e).apply({
                            x: parseFloat(t[0]) || 0,
                            y: parseFloat(t[1]) || 0
                        }), ue(!0, !0), n = qt.pointerX - _.x, r = _.y - qt.pointerY, ne && (n -= xt(ie), r += _t(ie)), l = qt.x, c = qt.y = Math.atan2(r, n) * et) : (c = re(Rt, "px"), l = re(Bt, "px"))), h && i && (l > d ? l = d + (l - d) / i : l < g && (l = g - (g - l) / i), Mt || (c > D ? c = D + (c - D) / i : c < m && (c = m - (m - c) / i))), qt.startX = l, qt.startY = c
                    },
                    ge = function() {
                        return qt.tween && qt.tween.isActive()
                    },
                    De = function() {
                        !M.parentNode || ge() || qt.isDragging || M.parentNode.removeChild(M)
                    },
                    me = function(t, i) {
                        var l;
                        if (o && !qt.isPressed && t && ("mousedown" !== t.type && "pointerdown" !== t.type || i || !(rt() - te < 30) || !L[qt.pointerEvent.type])) {
                            if (W = ge(), qt.pointerEvent = t, L[t.type] ? (H = ~t.type.indexOf("touch") ? t.currentTarget || t.target : ie, gt(H, "touchend", _e), gt(H, "touchmove", ve), gt(H, "touchcancel", _e), gt(ie, "touchstart", yt)) : (H = null, gt(ie, "mousemove", ve)), Z = null, z && H || (gt(ie, "mouseup", _e), t && t.target && gt(t.target, "mouseup", _e)), j = Jt.call(qt, t.target) && !1 === n.dragClickables && !i) return gt(t.target, "change", _e), St(qt, "pressInit", "onPressInit"), St(qt, "press", "onPress"), void It(Wt, !0);
                            var c;
                            if ((G = !(!H || zt === jt || !1 === qt.vars.allowNativeTouchScrolling || qt.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (zt ? "y" : "x")) || qt.allowEventDefault || (mt(t), gt(C, "touchforcechange", mt)), t.changedTouches ? (t = v = t.changedTouches[0], y = t.identifier) : t.pointerId ? y = t.pointerId : v = y = null, N++, c = ae, it.push(c), 1 === it.length && w.ticker.add(ft), s = qt.pointerY = t.pageY, u = qt.pointerX = t.pageX, St(qt, "pressInit", "onPressInit"), (G || qt.autoScroll) && Et(e.parentNode), !e.parentNode || !qt.autoScroll || a || Mt || !e.parentNode._gsMaxScrollX || M.parentNode || e.getBBox || (M.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(M)), de(), qt.tween && qt.tween.kill(), qt.isThrowing = !1, w.killTweensOf(a || e, Ut, !0), a && w.killTweensOf(e, {
                                    scrollTo: 1
                                }, !0), qt.tween = qt.lockedAxis = null, (n.zIndexBoost || !Mt && !a && !1 !== n.zIndexBoost) && (e.style.zIndex = r.zIndex++), qt.isPressed = !0, f = !(!n.onDrag && !qt._listeners.drag), p = !(!n.onMove && !qt._listeners.move), !Mt && (!1 !== n.cursor || n.activeCursor))
                                for (l = Wt.length; --l > -1;) w.set(Wt[l], {
                                    cursor: n.activeCursor || n.cursor || ("grab" === R ? "grabbing" : R)
                                });
                            St(qt, "press", "onPress")
                        }
                    },
                    ve = function(t) {
                        var e, n, r, i, a, l, c = t;
                        if (o && !I && qt.isPressed && t) {
                            if (qt.pointerEvent = t, e = t.changedTouches) {
                                if ((t = e[0]) !== v && t.identifier !== y) {
                                    for (i = e.length; --i > -1 && (t = e[i]).identifier !== y;);
                                    if (i < 0) return
                                }
                            } else if (t.pointerId && y && t.pointerId !== y) return;
                            H && G && !Z && (kt.x = t.pageX, kt.y = t.pageY, q && q.apply(kt, kt), n = kt.x, r = kt.y, ((a = Math.abs(n - u)) !== (l = Math.abs(r - s)) && (a > Ht || l > Ht) || X && G === Z) && (Z = a > l && zt ? "x" : "y", G && Z !== G && gt(C, "touchforcechange", mt), !1 !== qt.vars.lockAxisOnTouchScroll && (qt.lockedAxis = "x" === Z ? "y" : "x", U(qt.vars.onLockAxis) && qt.vars.onLockAxis.call(qt, c)), X && G === Z)) ? _e(c) : (qt.allowEventDefault || G && (!Z || G === Z) || !1 === c.cancelable || mt(c), qt.autoScroll && (Qt = !0), ye(t.pageX - (ne && Mt ? xt(ie) : 0), t.pageY - (ne && Mt ? _t(ie) : 0), p))
                        }
                    },
                    ye = function(t, e, n) {
                        var r, i, o, a, f, p, v = 1 - qt.dragResistance,
                            y = 1 - qt.edgeResistance,
                            x = qt.pointerX,
                            b = qt.pointerY,
                            w = c,
                            C = qt.x,
                            F = qt.y,
                            E = qt.endX,
                            A = qt.endY,
                            M = qt.endRotation,
                            O = T;
                        qt.pointerX = t, qt.pointerY = e, Mt ? (a = Math.atan2(_.y - e, t - _.x) * et, (f = qt.y - a) > 180 ? (c -= 360, qt.y = a) : f < -180 && (c += 360, qt.y = a), qt.x !== l || Math.abs(c - a) > Ht ? (qt.y = a, o = l + (c - a) * v) : o = l) : (q && (p = t * q.a + e * q.c + q.e, e = t * q.b + e * q.d + q.f, t = p), (i = e - s) < Ht && i > -Ht && (i = 0), (r = t - u) < Ht && r > -Ht && (r = 0), (qt.lockAxis || qt.lockedAxis) && (r || i) && ((p = qt.lockedAxis) || (qt.lockedAxis = p = zt && Math.abs(r) > Math.abs(i) ? "y" : jt ? "x" : null, p && U(qt.vars.onLockAxis) && qt.vars.onLockAxis.call(qt, qt.pointerEvent)), "y" === p ? i = 0 : "x" === p && (r = 0)), o = K(l + r * v), a = K(c + i * v)), (P || S || k) && (qt.x !== o || qt.y !== a && !Mt) ? (k && (lt.x = o, lt.y = a, p = k(lt), o = K(p.x), a = K(p.y)), P && (o = K(P(o))), S && (a = K(S(a)))) : h && (o > d ? o = d + Math.round((o - d) * y) : o < g && (o = g + Math.round((o - g) * y)), Mt || (a > D ? a = Math.round(D + (a - D) * y) : a < m && (a = Math.round(m + (a - m) * y)))), (qt.x !== o || qt.y !== a && !Mt) && (Mt ? (qt.endRotation = qt.x = qt.endX = o, T = !0) : (jt && (qt.y = qt.endY = a, T = !0), zt && (qt.x = qt.endX = o, T = !0)), n && !1 === St(qt, "move", "onMove") ? (qt.pointerX = x, qt.pointerY = b, c = w, qt.x = C, qt.y = F, qt.endX = E, qt.endY = A, qt.endRotation = M, T = O) : !qt.isDragging && qt.isPressed && (qt.isDragging = !0, St(qt, "dragstart", "onDragStart")))
                    },
                    _e = function t(r, i) {
                        if (o && qt.isPressed && (!r || null == y || i || !(r.pointerId && r.pointerId !== y || r.changedTouches && ! function(t, e) {
                                for (var n = t.length; n--;)
                                    if (t[n].identifier === e) return !0
                            }(r.changedTouches, y)))) {
                            qt.isPressed = !1;
                            var a, u, s, l, c, h = r,
                                f = qt.isDragging,
                                p = qt.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
                                d = w.delayedCall(.001, De);
                            if (H ? (Dt(H, "touchend", t), Dt(H, "touchmove", ve), Dt(H, "touchcancel", t), Dt(ie, "touchstart", yt)) : Dt(ie, "mousemove", ve), Dt(C, "touchforcechange", mt), z && H || (Dt(ie, "mouseup", t), r && r.target && Dt(r.target, "mouseup", t)), T = !1, j && !p) return r && (Dt(r.target, "change", t), qt.pointerEvent = h), It(Wt, !1), St(qt, "release", "onRelease"), St(qt, "click", "onClick"), void(j = !1);
                            if (dt(ae), !Mt)
                                for (u = Wt.length; --u > -1;) Tt(Wt[u], "cursor", n.cursor || (!1 !== n.cursor ? R : null));
                            if (f && (Vt = st = rt(), qt.isDragging = !1), N--, r) {
                                if ((a = r.changedTouches) && (r = a[0]) !== v && r.identifier !== y) {
                                    for (u = a.length; --u > -1 && (r = a[u]).identifier !== y;);
                                    if (u < 0) return
                                }
                                qt.pointerEvent = h, qt.pointerX = r.pageX, qt.pointerY = r.pageY
                            }
                            return p && h ? (mt(h), St(qt, "release", "onRelease")) : h && !f ? (W && (n.snap || n.bounds) && fe(n.inertia || n.throwProps), St(qt, "release", "onRelease"), X && "touchmove" === h.type || -1 !== h.type.indexOf("cancel") || (St(qt, "click", "onClick"), rt() - te < 300 && St(qt, "doubleclick", "onDoubleClick"), l = h.target || e, te = rt(), c = function() {
                                te === ut || !qt.enabled() || qt.isPressed || h.defaultPrevented || (l.click ? l.click() : ie.createEvent && ((s = ie.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, C, 1, qt.pointerEvent.screenX, qt.pointerEvent.screenY, qt.pointerX, qt.pointerY, !1, !1, !1, !1, 0, null), l.dispatchEvent(s)))
                            }, X || h.defaultPrevented || w.delayedCall(.05, c))) : (fe(n.inertia || n.throwProps), qt.allowEventDefault || !h || !1 === n.dragClickables && Jt.call(qt, h.target) || !f || G && (!Z || G !== Z) || !1 === h.cancelable || mt(h), St(qt, "release", "onRelease")), ge() && d.duration(qt.tween.duration()), f && St(qt, "dragend", "onDragEnd"), !0
                        }
                    },
                    xe = function(t) {
                        if (t && qt.isDragging && !a) {
                            var n = t.target || e.parentNode,
                                r = n.scrollLeft - n._gsScrollX,
                                i = n.scrollTop - n._gsScrollY;
                            (r || i) && (q ? (u -= r * q.a + i * q.c, s -= i * q.d + r * q.b) : (u -= r, s -= i), n._gsScrollX += r, n._gsScrollY += i, ye(qt.pointerX, qt.pointerY))
                        }
                    },
                    be = function(t) {
                        var e = rt(),
                            n = e - te < 40,
                            r = e - Vt < 40,
                            i = n && ut === te,
                            o = qt.pointerEvent && qt.pointerEvent.defaultPrevented,
                            a = n && pt === te,
                            u = t.isTrusted || null == t.isTrusted && n && i;
                        if ((i || r && !1 !== qt.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), n && (!qt.pointerEvent || !qt.pointerEvent.defaultPrevented) && (!i || u && !a)) return u && i && (pt = te), void(ut = te);
                        (qt.isPressed || r || n) && (u && t.detail && n && !o || mt(t))
                    },
                    we = function(t) {
                        return q ? {
                            x: t.x * q.a + t.y * q.c + q.e,
                            y: t.x * q.b + t.y * q.d + q.f
                        } : {
                            x: t.x,
                            y: t.y
                        }
                    };
                return (A = r.get(e)) && A.kill(), i.startDrag = function(t, n) {
                    var r, i, o, a;
                    me(t || qt.pointerEvent, !0), n && !qt.hitTest(t || qt.pointerEvent) && (r = Pt(t || qt.pointerEvent), i = Pt(e), o = we({
                        x: r.left + r.width / 2,
                        y: r.top + r.height / 2
                    }), a = we({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2
                    }), u -= o.x - a.x, s -= o.y - a.y), qt.isDragging || (qt.isDragging = !0, St(qt, "dragstart", "onDragStart"))
                }, i.drag = ve, i.endDrag = function(t) {
                    return _e(t || qt.pointerEvent, !0)
                }, i.timeSinceDrag = function() {
                    return qt.isDragging ? 0 : (rt() - Vt) / 1e3
                }, i.timeSinceClick = function() {
                    return (rt() - te) / 1e3
                }, i.hitTest = function(t, e) {
                    return r.hitTest(qt.target, t, e)
                }, i.getDirection = function(t, n) {
                    var r, i, o, a, u, s, h = "velocity" === t && Y ? t : V(t) && !Mt ? "element" : "start";
                    return "element" === h && (u = Pt(qt.target), s = Pt(t)), r = "start" === h ? qt.x - l : "velocity" === h ? Y.getVelocity(e, Bt) : u.left + u.width / 2 - (s.left + s.width / 2), Mt ? r < 0 ? "counter-clockwise" : "clockwise" : (n = n || 2, i = "start" === h ? qt.y - c : "velocity" === h ? Y.getVelocity(e, Rt) : u.top + u.height / 2 - (s.top + s.height / 2), a = (o = Math.abs(r / i)) < 1 / n ? "" : r < 0 ? "left" : "right", o < n && ("" !== a && (a += "-"), a += i < 0 ? "up" : "down"), a)
                }, i.applyBounds = function(t, r) {
                    var i, o, a, u, s, l;
                    if (t && n.bounds !== t) return n.bounds = t, qt.update(!0, r);
                    if (ue(!0), le(), h && !ge()) {
                        if (i = qt.x, o = qt.y, i > d ? i = d : i < g && (i = g), o > D ? o = D : o < m && (o = m), (qt.x !== i || qt.y !== o) && (a = !0, qt.x = qt.endX = i, Mt ? qt.endRotation = i : qt.y = qt.endY = o, T = !0, ae(!0), qt.autoScroll && !qt.isDragging))
                            for (Et(e.parentNode), u = e, ct.scrollTop = null != C.pageYOffset ? C.pageYOffset : null != ie.documentElement.scrollTop ? ie.documentElement.scrollTop : ie.body.scrollTop, ct.scrollLeft = null != C.pageXOffset ? C.pageXOffset : null != ie.documentElement.scrollLeft ? ie.documentElement.scrollLeft : ie.body.scrollLeft; u && !l;) s = (l = Ct(u.parentNode)) ? ct : u.parentNode, jt && s.scrollTop > s._gsMaxScrollY && (s.scrollTop = s._gsMaxScrollY), zt && s.scrollLeft > s._gsMaxScrollX && (s.scrollLeft = s._gsMaxScrollX), u = s;
                        qt.isThrowing && (a || qt.endX > d || qt.endX < g || qt.endY > D || qt.endY < m) && fe(n.inertia || n.throwProps, a)
                    }
                    return qt
                }, i.update = function(t, n, r) {
                    var i = qt.x,
                        o = qt.y;
                    return pe(!n), t ? qt.applyBounds() : (T && r && ae(!0), ue(!0)), n && (ye(qt.pointerX, qt.pointerY), T && ae(!0)), qt.isPressed && !n && (zt && Math.abs(i - qt.x) > .01 || jt && Math.abs(o - qt.y) > .01 && !Mt) && de(), qt.autoScroll && (Et(e.parentNode), Qt = qt.isDragging, ae(!0), wt(e, xe), bt(e, xe)), qt
                }, i.enable = function(t) {
                    var r, i, u, s = {
                        lazy: !0
                    };
                    if (Mt || !1 === n.cursor || (s.cursor = n.cursor || R), w.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"), s.touchAction = zt === jt ? "none" : n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : zt ? "pan-y" : "pan-x", "soft" !== t) {
                        for (i = Wt.length; --i > -1;) u = Wt[i], z || gt(u, "mousedown", me), gt(u, "touchstart", me), gt(u, "click", be, !0), w.set(u, s), u.getBBox && u.ownerSVGElement && w.set(u.ownerSVGElement, {
                            touchAction: zt === jt ? "none" : n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : zt ? "pan-y" : "pan-x"
                        }), n.allowContextMenu || gt(u, "contextmenu", oe);
                        It(Wt, !1)
                    }
                    return bt(e, xe), o = !0, Y && "soft" !== t && Y.track(a || e, Ft ? "x,y" : Mt ? "rotation" : "top,left"), e._gsDragID = r = "d" + at++, ot[r] = qt, a && (a.enable(), a.element._gsDragID = r), (n.bounds || Mt) && de(), n.bounds && qt.applyBounds(), qt
                }, i.disable = function(t) {
                    var n, r, i = qt.isDragging;
                    if (!Mt)
                        for (n = Wt.length; --n > -1;) Tt(Wt[n], "cursor", null);
                    if ("soft" !== t) {
                        for (n = Wt.length; --n > -1;) r = Wt[n], Tt(r, "touchCallout", null), Tt(r, "touchAction", null), Dt(r, "mousedown", me), Dt(r, "touchstart", me), Dt(r, "click", be), Dt(r, "contextmenu", oe);
                        It(Wt, !0), H && (Dt(H, "touchcancel", _e), Dt(H, "touchend", _e), Dt(H, "touchmove", ve)), Dt(ie, "mouseup", _e), Dt(ie, "mousemove", ve)
                    }
                    return wt(e, xe), o = !1, Y && "soft" !== t && Y.untrack(a || e, Ft ? "x,y" : Mt ? "rotation" : "top,left"), a && a.disable(), dt(ae), qt.isDragging = qt.isPressed = j = !1, i && St(qt, "dragend", "onDragEnd"), qt
                }, i.enabled = function(t, e) {
                    return arguments.length ? t ? qt.enable(e) : qt.disable(e) : o
                }, i.kill = function() {
                    return qt.isThrowing = !1, qt.tween && qt.tween.kill(), qt.disable(), w.set(Wt, {
                        clearProps: "userSelect"
                    }), delete ot[e._gsDragID], qt
                }, ~vt.indexOf("scroll") && (a = i.scrollProxy = new Xt(e, function(t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t
                }({
                    onKill: function() {
                        qt.isPressed && _e(null)
                    }
                }, n)), e.style.overflowY = jt && !B ? "auto" : "hidden", e.style.overflowX = zt && !B ? "auto" : "hidden", e = a.content), Mt ? Ut.rotation = 1 : (zt && (Ut[Bt] = 1), jt && (Ut[Rt] = 1)), ee.force3D = !("force3D" in n) || n.force3D, i.enable(), i
            }
            return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r.register = function(t) {
                w = t, Yt()
            }, r.create = function(t, e) {
                return P || Yt(!0), O(t).map((function(t) {
                    return new r(t, e)
                }))
            }, r.get = function(t) {
                return ot[(O(t)[0] || {})._gsDragID]
            }, r.timeSinceDrag = function() {
                return (rt() - st) / 1e3
            }, r.hitTest = function(t, e, n) {
                if (t === e) return !1;
                var r, i, o, a = Pt(t),
                    u = Pt(e),
                    s = a.top,
                    l = a.left,
                    c = a.right,
                    h = a.bottom,
                    f = a.width,
                    p = a.height,
                    d = u.left > c || u.right < l || u.top > h || u.bottom < s;
                return d || !n ? !d : (o = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (r = {
                    left: Math.max(l, u.left),
                    top: Math.max(s, u.top)
                }).width = Math.min(c, u.right) - r.left, r.height = Math.min(h, u.bottom) - r.top, !(r.width < 0 || r.height < 0) && (o ? (n *= .01, (i = r.width * r.height) >= f * p * n || i >= u.width * u.height * n) : r.width > n && r.height > n))
            }, r
        }(function() {
            function t(t) {
                this._listeners = {}, this.target = t || this
            }
            var e = t.prototype;
            return e.addEventListener = function(t, e) {
                var n = this._listeners[t] || (this._listeners[t] = []);
                ~n.indexOf(e) || n.push(e)
            }, e.removeEventListener = function(t, e) {
                var n = this._listeners[t],
                    r = n && n.indexOf(e) || -1;
                r > -1 && n.splice(r, 1)
            }, e.dispatchEvent = function(t) {
                var e, n = this;
                return (this._listeners[t] || []).forEach((function(r) {
                    return !1 === r.call(n, {
                        type: t,
                        target: n.target
                    }) && (e = !1)
                })), e
            }, t
        }());
    ! function(t, e) {
        for (var n in e) n in t || (t[n] = e[n])
    }(Rt.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), Rt.zIndex = 1e3, Rt.version = "3.2.4", W() && w.registerPlugin(Rt);
    /*!
     * CSSRulePlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var zt, jt, Ht, qt, Wt = function() {
            return "undefined" != typeof window
        },
        Ut = function() {
            return zt || Wt() && (zt = window.gsap) && zt.registerPlugin && zt
        },
        Vt = function() {
            return jt || (Qt(), qt || console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")), jt
        },
        Qt = function(t) {
            zt = t || Ut(), Wt() && (window, Ht = document), zt && (qt = zt.plugins.css) && (jt = 1)
        },
        Gt = {
            version: "3.2.4",
            name: "cssRule",
            init: function(t, e, n, r, i) {
                if (!Vt() || void 0 === t.cssText) return !1;
                var o = t._gsProxy = t._gsProxy || Ht.createElement("div");
                this.ss = t, this.style = o.style, o.style.cssText = t.cssText, qt.prototype.init.call(this, o, e, n, r, i)
            },
            render: function(t, e) {
                for (var n, r = e._pt, i = e.style, o = e.ss; r;) r.r(t, r.d), r = r._next;
                for (n = i.length; --n > -1;) o[i[n]] = i[i[n]]
            },
            getRule: function(t) {
                Vt();
                var e, n, r, i, o = Ht.all ? "rules" : "cssRules",
                    a = Ht.styleSheets,
                    u = a.length,
                    s = ":" === t.charAt(0);
                for (t = (s ? "" : ",") + t.split("::").join(":").toLowerCase() + ",", s && (i = []); u--;) {
                    try {
                        if (!(n = a[u][o])) continue;
                        e = n.length
                    } catch (t) {
                        console.warn(t);
                        continue
                    }
                    for (; --e > -1;)
                        if ((r = n[e]).selectorText && -1 !== ("," + r.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(t)) {
                            if (!s) return r.style;
                            i.push(r.style)
                        }
                }
                return i
            },
            register: Qt
        };
    Ut() && zt.registerPlugin(Gt);
    /*!
     * EaselPlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Zt, $t, Kt, Jt, te, ee, ne = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),
        re = function() {
            return "undefined" != typeof window
        },
        ie = function() {
            return Zt || re() && (Zt = window.gsap) && Zt.registerPlugin && Zt
        },
        oe = function() {
            return Jt || Kt && Kt.createjs || Kt || {}
        },
        ae = function(t) {
            return console.warn(t)
        },
        ue = function(t) {
            var e = t.getBounds && t.getBounds();
            t.cache && t.cache(e.x, e.y, e.width, e.height), ae("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + t)
        },
        se = function(t, e, n) {
            te || (te = oe().ColorFilter) || ae("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
            for (var r, i, o, a, u, s, l = t.filters || [], c = l.length; c--;)
                if (l[c] instanceof te) {
                    i = l[c];
                    break
                }
            if (i || (i = new te, l.push(i), t.filters = l), o = i.clone(), null != e.tint) r = Zt.utils.splitColor(e.tint), a = null != e.tintAmount ? +e.tintAmount : 1, o.redOffset = +r[0] * a, o.greenOffset = +r[1] * a, o.blueOffset = +r[2] * a, o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1 - a;
            else
                for (u in e) "exposure" !== u && "brightness" !== u && (o[u] = +e[u]);
            for (null != e.exposure ? (o.redOffset = o.greenOffset = o.blueOffset = 255 * (+e.exposure - 1), o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1) : null != e.brightness && (a = +e.brightness - 1, o.redOffset = o.greenOffset = o.blueOffset = a > 0 ? 255 * a : 0, o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1 - Math.abs(a)), c = 8; c--;) i[u = ne[c]] !== o[u] && (s = n.add(i, u, i[u], o[u])) && (s.op = "easel_colorFilter");
            n._props.push("easel_colorFilter"), t.cacheID || ue(t)
        },
        le = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        ce = .212671,
        he = .072169,
        fe = function(t, e) {
            if (!(t instanceof Array && e instanceof Array)) return e;
            var n, r, i = [],
                o = 0,
                a = 0;
            for (n = 0; n < 4; n++) {
                for (r = 0; r < 5; r++) a = 4 === r ? t[o + 4] : 0, i[o + r] = t[o] * e[r] + t[o + 1] * e[r + 5] + t[o + 2] * e[r + 10] + t[o + 3] * e[r + 15] + a;
                o += 5
            }
            return i
        },
        pe = function(t, e, n) {
            ee || (ee = oe().ColorMatrixFilter) || ae("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
            for (var r, i, o, a, u, s, l = t.filters || [], c = l.length; --c > -1;)
                if (l[c] instanceof ee) {
                    o = l[c];
                    break
                }
            for (o || (o = new ee(le.slice()), l.push(o), t.filters = l), i = o.matrix, r = le.slice(), null != e.colorize && (r = function(t, e, n) {
                    isNaN(n) && (n = 1);
                    var r = Zt.utils.splitColor(e),
                        i = r[0] / 255,
                        o = r[1] / 255,
                        a = r[2] / 255,
                        u = 1 - n;
                    return fe([u + n * i * ce, n * i * .71516, n * i * he, 0, 0, n * o * ce, u + n * o * .71516, n * o * he, 0, 0, n * a * ce, n * a * .71516, u + n * a * he, 0, 0, 0, 0, 0, 1, 0], t)
                }(r, e.colorize, Number(e.colorizeAmount))), null != e.contrast && (u = r, s = Number(e.contrast), r = isNaN(s) ? u : fe([s += .01, 0, 0, 0, 128 * (1 - s), 0, s, 0, 0, 128 * (1 - s), 0, 0, s, 0, 128 * (1 - s), 0, 0, 0, 1, 0], u)), null != e.hue && (r = function(t, e) {
                    if (isNaN(e)) return t;
                    e *= Math.PI / 180;
                    var n = Math.cos(e),
                        r = Math.sin(e);
                    return fe([ce + .787329 * n + r * -ce, .71516 + -.71516 * n + -.71516 * r, he + n * -he + .927831 * r, 0, 0, ce + n * -ce + .143 * r, .71516 + .28484 * n + .14 * r, he + n * -he + -.283 * r, 0, 0, ce + n * -ce + -.787329 * r, .71516 + -.71516 * n + .71516 * r, he + .927831 * n + r * he, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t)
                }(r, Number(e.hue))), null != e.saturation && (r = function(t, e) {
                    if (isNaN(e)) return t;
                    var n = 1 - e,
                        r = n * ce,
                        i = .71516 * n,
                        o = n * he;
                    return fe([r + e, i, o, 0, 0, r, i + e, o, 0, 0, r, i, o + e, 0, 0, 0, 0, 0, 1, 0], t)
                }(r, Number(e.saturation))), c = r.length; --c > -1;) r[c] !== i[c] && (a = n.add(i, c, i[c], r[c])) && (a.op = "easel_colorMatrixFilter");
            n._props.push("easel_colorMatrixFilter"), t.cacheID || ue(), n._matrix = i
        },
        de = function(t) {
            Zt = t || ie(), re() && (Kt = window), Zt && ($t = 1)
        },
        ge = {
            version: "3.2.4",
            name: "easel",
            init: function(t, e, n, r, i) {
                var o, a, u, s, l, c, h;
                for (o in $t || (de(), Zt || ae("Please gsap.registerPlugin(EaselPlugin)")), this.target = t, e)
                    if (l = e[o], "colorFilter" === o || "tint" === o || "tintAmount" === o || "exposure" === o || "brightness" === o) u || (se(t, e.colorFilter || e, this), u = !0);
                    else if ("saturation" === o || "contrast" === o || "hue" === o || "colorize" === o || "colorizeAmount" === o) s || (pe(t, e.colorMatrixFilter || e, this), s = !0);
                else if ("frame" === o) {
                    if ("string" == typeof l && "=" !== l.charAt(1) && (c = t.labels))
                        for (h = 0; h < c.length; h++) c[h].label === l && (l = c[h].position);
                    (a = this.add(t, "gotoAndStop", t.currentFrame, l, r, i, Math.round)) && (a.op = o)
                } else null != t[o] && this.add(t, o, "get", l)
            },
            render: function(t, e) {
                for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
                e.target.cacheID && e.target.updateCache()
            },
            register: de,
            registerCreateJS: function(t) {
                Jt = t
            }
        };
    ie() && Zt.registerPlugin(ge);
    /*!
     * EasePack 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var De, me, ve = function() {
            return De || "undefined" != typeof window && (De = window.gsap) && De.registerPlugin && De
        },
        ye = function(t, e) {
            return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"))
        },
        _e = function(t) {
            if (De = t || ve()) {
                me = De.registerEase;
                var e, n = De.parseEase(),
                    r = function(t) {
                        return function(e) {
                            var n = .5 + e / 2;
                            t.config = function(e) {
                                return t(2 * (1 - e) * e * n + e * e)
                            }
                        }
                    };
                for (e in n) n[e].config || r(n[e]);
                for (e in me("slow", Fe), me("expoScale", Ee), me("rough", Te), Ae) "version" !== e && De.core.globals(e, Ae[e]);
                1
            }
        },
        xe = function(t, e, n) {
            var r = (t = Math.min(1, t || .7)) < 1 ? e || 0 === e ? e : .7 : 0,
                i = (1 - t) / 2,
                o = i + t,
                a = ye(n);
            return function(t) {
                var e = t + (.5 - t) * r;
                return t < i ? a ? 1 - (t = 1 - t / i) * t : e - (t = 1 - t / i) * t * t * t * e : t > o ? a ? 1 === t ? 0 : 1 - (t = (t - o) / i) * t : e + (t - e) * (t = (t - o) / i) * t * t * t : a ? 1 : e
            }
        },
        be = function(t, e, n) {
            var r = Math.log(e / t),
                i = e - t;
            return n && (n = De.parseEase(n)),
                function(e) {
                    return (t * Math.exp(r * (n ? n(e) : e)) - t) / i
                }
        },
        we = function(t, e, n) {
            this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
        },
        Ce = function(t) {
            "object" != typeof t && (t = {
                points: +t || 20
            });
            for (var e, n, r, i, o, a, u, s = t.taper || "none", l = [], c = 0, h = 0 | (+t.points || 20), f = h, p = ye(t.randomize, !0), d = ye(t.clamp), g = De ? De.parseEase(t.template) : 0, D = .4 * (+t.strength || 1); --f > -1;) e = p ? Math.random() : 1 / h * f, n = g ? g(e) : e, r = "none" === s ? D : "out" === s ? (i = 1 - e) * i * D : "in" === s ? e * e * D : e < .5 ? (i = 2 * e) * i * .5 * D : (i = 2 * (1 - e)) * i * .5 * D, p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, d && (n > 1 ? n = 1 : n < 0 && (n = 0)), l[c++] = {
                x: e,
                y: n
            };
            for (l.sort((function(t, e) {
                    return t.x - e.x
                })), a = new we(1, 1, null), f = h; f--;) o = l[f], a = new we(o.x, o.y, a);
            return u = new we(0, 0, a.t ? a : a.next),
                function(t) {
                    var e = u;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return u = e, e.v + (t - e.t) / e.gap * e.c
                }
        },
        Fe = xe(.7);
    Fe.ease = Fe, Fe.config = xe;
    var Ee = be(1, 2);
    Ee.config = be;
    var Te = Ce();
    Te.ease = Te, Te.config = Ce;
    var Ae = {
        SlowMo: Fe,
        RoughEase: Te,
        ExpoScaleEase: Ee
    };
    for (var Me in Ae) Ae[Me].register = _e, Ae[Me].version = "3.2.4";
    ve() && De.registerPlugin(Fe);
    /*!
     * paths 3.2.4
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Pe = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Se = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Oe = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        ke = /(^[#\.][a-z]|[a-y][a-z])/i,
        Be = Math.PI / 180,
        Le = 180 / Math.PI,
        Ne = Math.sin,
        Ie = Math.cos,
        Xe = Math.abs,
        Ye = Math.sqrt,
        Re = Math.atan2,
        ze = function(t) {
            return "string" == typeof t
        },
        je = function(t) {
            return "number" == typeof t
        },
        He = {},
        qe = {},
        We = function(t) {
            return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
        },
        Ue = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Ve = function(t, e, n, r) {
            var i = t[e],
                o = 1 === r ? 6 : on(i, n, r);
            if (o && o + n + 2 < i.length) return t.splice(e, 0, i.slice(0, n + o + 2)), i.splice(0, n + o), 1
        },
        Qe = function(t, e) {
            return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : e.totalPoints = t.totalPoints, e
        },
        Ge = function(t, e) {
            var n = t.length,
                r = t[n - 1] || [],
                i = r.length;
            e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e
        };

    function Ze(t) {
        var e, n = (t = ze(t) && ke.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = cn(t)) : t ? ze(t) ? cn(t) : je(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }

    function $e(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var Ke = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function Je(t, e) {
        var n, r, i, o, a, u, s, l, c, h, f, p, d, g, D, m, v, y, _, x, b, w, C = t.tagName.toLowerCase(),
            F = .552284749831;
        return "path" !== C && t.getBBox ? (u = function(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                i = [].slice.call(t.attributes),
                o = i.length;
            for (e = "," + e + ","; --o > -1;) n = i[o].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[o].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), w = function(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1;) r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r
        }(t, Ke[C]), "rect" === C ? (o = w.rx, a = w.ry, r = w.x, i = w.y, h = w.width - 2 * o, f = w.height - 2 * a, n = o || a ? "M" + (m = (g = (d = r + o) + h) + o) + "," + (y = i + a) + " V" + (_ = y + f) + " C" + [m, x = _ + a * F, D = g + o * F, b = _ + a, g, b, g - (g - d) / 3, b, d + (g - d) / 3, b, d, b, p = r + o * (1 - F), b, r, x, r, _, r, _ - (_ - y) / 3, r, y + (_ - y) / 3, r, y, r, v = i + a * (1 - F), p, i, d, i, d + (g - d) / 3, i, g - (g - d) / 3, i, g, i, D, i, m, v, m, y].join(",") + "z" : "M" + (r + h) + "," + i + " v" + f + " h" + -h + " v" + -f + " h" + h + "z") : "circle" === C || "ellipse" === C ? ("circle" === C ? l = (o = a = w.r) * F : (o = w.rx, l = (a = w.ry) * F), n = "M" + ((r = w.cx) + o) + "," + (i = w.cy) + " C" + [r + o, i + l, r + (s = o * F), i + a, r, i + a, r - s, i + a, r - o, i + l, r - o, i, r - o, i - l, r - s, i - a, r, i - a, r + s, i - a, r + o, i - l, r + o, i].join(",") + "z") : "line" === C ? n = "M" + w.x1 + "," + w.y1 + " L" + w.x2 + "," + w.y2 : "polyline" !== C && "polygon" !== C || (n = "M" + (r = (c = (t.getAttribute("points") + "").match(Se) || []).shift()) + "," + (i = c.shift()) + " L" + c.join(","), "polygon" === C && (n += "," + r + "," + i + "z")), u.setAttribute("d", pn(u._gsRawPath = cn(n))), e && t.parentNode && (t.parentNode.insertBefore(u, t), t.parentNode.removeChild(t)), u) : t
    }

    function tn(t, e, n) {
        var r, i = t[e],
            o = t[e + 2],
            a = t[e + 4];
        return i += (o - i) * n, i += ((o += (a - o) * n) - i) * n, r = o + (a + (t[e + 6] - a) * n - o) * n - i, i = t[e + 1], i += ((o = t[e + 3]) - i) * n, i += ((o += ((a = t[e + 5]) - o) * n) - i) * n, Ue(Re(o + (a + (t[e + 7] - a) * n - o) * n - i, r) * Le)
    }

    function en(t, e, n) {
        void 0 === n && (n = 1);
        var r = (e = e || 0) > n,
            i = Math.max(0, ~~(Xe(n - e) - 1e-8));
        if (r && (r = n, n = e, e = r, r = 1, i -= i ? 1 : 0), e < 0 || n < 0) {
            var o = 1 + ~~Math.min(e, n);
            e += o, n += o
        }
        var a, u, s, l, c, h, f, p = function(t) {
                for (var e = [], n = 0; n < t.length; n++) e[n] = Qe(t[n], t[n].slice(0));
                return Qe(t, e)
            }(t.totalLength ? t : rn(t)),
            d = n > 1,
            g = an(p, e, He, !0),
            D = an(p, n, qe),
            m = D.segment,
            v = g.segment,
            y = D.segIndex,
            _ = g.segIndex,
            x = D.i,
            b = g.i,
            w = _ === y,
            C = x === b && w,
            F = w && b > x || C && g.t > D.t;
        if (d || i) {
            if (Ve(p, _, b, g.t) && (a = 1, _++, C ? F ? D.t /= g.t : (D.t = (D.t - g.t) / (1 - g.t), y++, x = 0) : _ <= y + 1 && !F && (y++, w && (x -= b))), D.t ? Ve(p, y, x, D.t) && (F && a && _++, r && y++) : (y--, r && _--), l = [], h = 1 + (c = p.length) * i, f = _, r)
                for (h += (c - (y = (y || c) - 1) + _) % c, s = 0; s < h; s++) Ge(l, p[f]), f = (f || c) - 1;
            else
                for (h += (c - _ + y) % c, s = 0; s < h; s++) Ge(l, p[f++ % c]);
            p = l
        } else if (u = 1 === D.t ? 6 : on(m, x, D.t), e !== n)
            for (a = on(v, b, C ? g.t / D.t : g.t), w && (u += a), m.splice(x + u + 2), (a || b) && v.splice(0, b + a), s = p.length; s--;)(s < _ || s > y) && p.splice(s, 1);
        else m.angle = tn(m, x + u, 0), g = m[x += u], D = m[x + 1], m.length = m.totalLength = 0, m.totalPoints = p.totalPoints = 8, m.push(g, D, g, D, g, D, g, D);
        return r && function(t, e) {
            var n = t.length;
            for (e || t.reverse(); n--;) t[n].reversed || $e(t[n])
        }(p, d || i), p.totalLength = 0, p
    }

    function nn(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, i, o, a, u, s, l, c, h, f, p, d, g, D, m, v, y, _ = ~~t.resolution || 12,
            x = 1 / _,
            b = n ? e + 6 * n + 1 : t.length,
            w = t[e],
            C = t[e + 1],
            F = e ? e / 6 * _ : 0,
            E = t.samples,
            T = t.lookup,
            A = (e ? t.minLength : 1e8) || 1e8,
            M = E[F + n * _ - 1],
            P = e ? E[F - 1] : 0;
        for (E.length = T.length = 0, i = e + 2; i < b; i += 6) {
            if (o = t[i + 4] - w, a = t[i + 2] - w, u = t[i] - w, c = t[i + 5] - C, h = t[i + 3] - C, f = t[i + 1] - C, s = l = p = d = 0, Xe(o) < 1e-5 && Xe(c) < 1e-5 && Xe(u) + Xe(f) < 1e-5) t.length > 8 && (t.splice(i, 6), i -= 6, b -= 6);
            else
                for (r = 1; r <= _; r++) s = l - (l = ((D = x * r) * D * o + 3 * (g = 1 - D) * (D * a + g * u)) * D), p = d - (d = (D * D * c + 3 * g * (D * h + g * f)) * D), (v = Ye(p * p + s * s)) < A && (A = v), P += v, E[F++] = P;
            w += o, C += c
        }
        if (M)
            for (M -= P; F < E.length; F++) E[F] += M;
        if (E.length && A)
            for (t.totalLength = y = E[E.length - 1] || 0, t.minLength = A, v = m = 0, r = 0; r < y; r += A) T[v++] = E[m] < r ? ++m : m;
        else t.totalLength = E[0] = 0;
        return e ? P - E[e / 2 - 1] : P
    }

    function rn(t, e) {
        var n, r, i;
        for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, r += t[i].length, n += nn(t[i]);
        return t.totalPoints = r, t.totalLength = n, t
    }

    function on(t, e, n) {
        if (n <= 0 || n >= 1) return 0;
        var r = t[e],
            i = t[e + 1],
            o = t[e + 2],
            a = t[e + 3],
            u = t[e + 4],
            s = t[e + 5],
            l = r + (o - r) * n,
            c = o + (u - o) * n,
            h = i + (a - i) * n,
            f = a + (s - a) * n,
            p = l + (c - l) * n,
            d = h + (f - h) * n,
            g = u + (t[e + 6] - u) * n,
            D = s + (t[e + 7] - s) * n;
        return c += (g - c) * n, f += (D - f) * n, t.splice(e + 2, 4, Ue(l), Ue(h), Ue(p), Ue(d), Ue(p + (c - p) * n), Ue(d + (f - d) * n), Ue(c), Ue(f), Ue(g), Ue(D)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function an(t, e, n, r) {
        n = n || {}, t.totalLength || rn(t), (e < 0 || e > 1) && (e = We(e));
        var i, o, a, u, s, l, c, h = 0,
            f = t[0];
        if (t.length > 1) {
            for (a = t.totalLength * e, s = l = 0;
                (s += t[l++].totalLength) < a;) h = l;
            e = (a - (u = s - (f = t[h]).totalLength)) / (s - u) || 0
        }
        return i = f.samples, o = f.resolution, a = f.totalLength * e, u = (l = f.lookup[~~(a / f.minLength)] || 0) ? i[l - 1] : 0, (s = i[l]) < a && (u = s, s = i[++l]), c = 1 / o * ((a - u) / (s - u) + l % o), l = 6 * ~~(l / o), r && 1 === c && (l + 6 < f.length ? (l += 6, c = 0) : h + 1 < t.length && (l = c = 0, f = t[++h])), n.t = c, n.i = l, n.path = t, n.segment = f, n.segIndex = h, n
    }

    function un(t, e, n, r) {
        var i, o, a, u, s, l, c, h, f, p = t[0],
            d = r || {};
        if ((e < 0 || e > 1) && (e = We(e)), t.length > 1) {
            for (a = t.totalLength * e, s = l = 0;
                (s += t[l++].totalLength) < a;) p = t[l];
            e = (a - (u = s - p.totalLength)) / (s - u) || 0
        }
        return i = p.samples, o = p.resolution, a = p.totalLength * e, u = (l = p.lookup[~~(a / p.minLength)] || 0) ? i[l - 1] : 0, (s = i[l]) < a && (u = s, s = i[++l]), f = 1 - (c = 1 / o * ((a - u) / (s - u) + l % o) || 0), h = p[l = 6 * ~~(l / o)], d.x = Ue((c * c * (p[l + 6] - h) + 3 * f * (c * (p[l + 4] - h) + f * (p[l + 2] - h))) * c + h), d.y = Ue((c * c * (p[l + 7] - (h = p[l + 1])) + 3 * f * (c * (p[l + 5] - h) + f * (p[l + 3] - h))) * c + h), n && (d.angle = p.totalLength ? tn(p, l, c >= 1 ? 1 - 1e-9 : c || 1e-9) : p.angle || 0), d
    }

    function sn(t, e, n, r, i, o, a) {
        for (var u, s, l, c, h, f = t.length; --f > -1;)
            for (s = (u = t[f]).length, l = 0; l < s; l += 2) c = u[l], h = u[l + 1], u[l] = c * e + h * r + o, u[l + 1] = c * n + h * i + a;
        return t._dirty = 1, t
    }

    function ln(t, e, n, r, i, o, a, u, s) {
        if (t !== u || e !== s) {
            n = Xe(n), r = Xe(r);
            var l = i % 360 * Be,
                c = Ie(l),
                h = Ne(l),
                f = Math.PI,
                p = 2 * f,
                d = (t - u) / 2,
                g = (e - s) / 2,
                D = c * d + h * g,
                m = -h * d + c * g,
                v = D * D,
                y = m * m,
                _ = v / (n * n) + y / (r * r);
            _ > 1 && (n = Ye(_) * n, r = Ye(_) * r);
            var x = n * n,
                b = r * r,
                w = (x * b - x * y - b * v) / (x * y + b * v);
            w < 0 && (w = 0);
            var C = (o === a ? -1 : 1) * Ye(w),
                F = C * (n * m / r),
                E = C * (-r * D / n),
                T = (t + u) / 2 + (c * F - h * E),
                A = (e + s) / 2 + (h * F + c * E),
                M = (D - F) / n,
                P = (m - E) / r,
                S = (-D - F) / n,
                O = (-m - E) / r,
                k = M * M + P * P,
                B = (P < 0 ? -1 : 1) * Math.acos(M / Ye(k)),
                L = (M * O - P * S < 0 ? -1 : 1) * Math.acos((M * S + P * O) / Ye(k * (S * S + O * O)));
            isNaN(L) && (L = f), !a && L > 0 ? L -= p : a && L < 0 && (L += p), B %= p, L %= p;
            var N, I = Math.ceil(Xe(L) / (p / 4)),
                X = [],
                Y = L / I,
                R = 4 / 3 * Ne(Y / 2) / (1 + Ie(Y / 2)),
                z = c * n,
                j = h * n,
                H = h * -r,
                q = c * r;
            for (N = 0; N < I; N++) D = Ie(i = B + N * Y), m = Ne(i), M = Ie(i += Y), P = Ne(i), X.push(D - R * m, m + R * D, M + R * P, P - R * M, M, P);
            for (N = 0; N < X.length; N += 2) D = X[N], m = X[N + 1], X[N] = D * z + m * H + T, X[N + 1] = D * j + m * q + A;
            return X[N - 2] = u, X[N - 1] = s, X
        }
    }

    function cn(t) {
        var e, n, r, i, o, a, u, s, l, c, h, f, p, d, g, D = (t + "").replace(Oe, (function(t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e
            })).match(Pe) || [],
            m = [],
            v = 0,
            y = 0,
            _ = D.length,
            x = 0,
            b = "ERROR: malformed path: " + t,
            w = function(t, e, n, r) {
                c = (n - t) / 3, h = (r - e) / 3, u.push(t + c, e + h, n - c, r - h, n, r)
            };
        if (!t || !isNaN(D[0]) || isNaN(D[1])) return console.log(b), m;
        for (e = 0; e < _; e++)
            if (p = o, isNaN(D[e]) ? a = (o = D[e].toUpperCase()) !== D[e] : e--, r = +D[e + 1], i = +D[e + 2], a && (r += v, i += y), e || (s = r, l = i), "M" === o) u && (u.length < 8 ? m.length -= 1 : x += u.length), v = s = r, y = l = i, u = [r, i], m.push(u), e += 2, o = "L";
            else if ("C" === o) u || (u = [0, 0]), a || (v = y = 0), u.push(r, i, v + 1 * D[e + 3], y + 1 * D[e + 4], v += 1 * D[e + 5], y += 1 * D[e + 6]), e += 6;
        else if ("S" === o) c = v, h = y, "C" !== p && "S" !== p || (c += v - u[u.length - 4], h += y - u[u.length - 3]), a || (v = y = 0), u.push(c, h, r, i, v += 1 * D[e + 3], y += 1 * D[e + 4]), e += 4;
        else if ("Q" === o) c = v + 2 / 3 * (r - v), h = y + 2 / 3 * (i - y), a || (v = y = 0), v += 1 * D[e + 3], y += 1 * D[e + 4], u.push(c, h, v + 2 / 3 * (r - v), y + 2 / 3 * (i - y), v, y), e += 4;
        else if ("T" === o) c = v - u[u.length - 4], h = y - u[u.length - 3], u.push(v + c, y + h, r + 2 / 3 * (v + 1.5 * c - r), i + 2 / 3 * (y + 1.5 * h - i), v = r, y = i), e += 2;
        else if ("H" === o) w(v, y, v = r, y), e += 1;
        else if ("V" === o) w(v, y, v, y = r + (a ? y - v : 0)), e += 1;
        else if ("L" === o || "Z" === o) "Z" === o && (r = s, i = l, u.closed = !0), ("L" === o || Xe(v - r) > .5 || Xe(y - i) > .5) && (w(v, y, r, i), "L" === o && (e += 2)), v = r, y = i;
        else if ("A" === o) {
            if (d = D[e + 4], g = D[e + 5], c = D[e + 6], h = D[e + 7], n = 7, d.length > 1 && (d.length < 3 ? (h = c, c = g, n--) : (h = g, c = d.substr(2), n -= 2), g = d.charAt(1), d = d.charAt(0)), f = ln(v, y, +D[e + 1], +D[e + 2], +D[e + 3], +d, +g, (a ? v : 0) + 1 * c, (a ? y : 0) + 1 * h), e += n, f)
                for (n = 0; n < f.length; n++) u.push(f[n]);
            v = u[u.length - 2], y = u[u.length - 1]
        } else console.log(b);
        return (e = u.length) < 6 ? (m.pop(), e = 0) : u[0] === u[e - 2] && u[1] === u[e - 1] && (u.closed = !0), m.totalPoints = x + e, m
    }

    function hn(t, e) {
        void 0 === e && (e = 1);
        for (var n = t[0], r = 0, i = [n, r], o = 2; o < t.length; o += 2) i.push(n, r, t[o], r = (t[o] - n) * e / 2, n = t[o], -r);
        return i
    }

    function fn(t, e, n) {
        var r, i, o, a, u, s, l, c, h, f, p, d, g, D, m = t.length - 2,
            v = +t[0],
            y = +t[1],
            _ = +t[2],
            x = +t[3],
            b = [v, y, v, y],
            w = _ - v,
            C = x - y;
        for (isNaN(n) && (n = Math.PI / 10), e = e || 0 === e ? +e : 1, u = 2; u < m; u += 2) r = v, i = y, v = _, y = x, d = (s = w) * s + (c = C) * c, g = (w = (_ = +t[u + 2]) - v) * w + (C = (x = +t[u + 3]) - y) * C, D = (l = _ - r) * l + (h = x - i) * h, p = (o = Math.acos((d + g - D) / Ye(4 * d * g))) / Math.PI * e, f = Ye(d) * p, p *= Ye(g), v === r && y === i || (o > n ? (a = Re(h, l), b.push(Ue(v - Ie(a) * f), Ue(y - Ne(a) * f), Ue(v), Ue(y), Ue(v + Ie(a) * p), Ue(y + Ne(a) * p))) : (a = Re(c, s), b.push(Ue(v - Ie(a) * f), Ue(y - Ne(a) * f)), a = Re(C, w), b.push(Ue(v), Ue(y), Ue(v + Ie(a) * p), Ue(y + Ne(a) * p))));
        return b.push(Ue(_), Ue(x), Ue(_), Ue(x)), b
    }

    function pn(t) {
        je(t[0]) && (t = [t]);
        var e, n, r, i, o = "",
            a = t.length;
        for (n = 0; n < a; n++) {
            for (i = t[n], o += "M" + Ue(i[0]) + "," + Ue(i[1]) + " C", e = i.length, r = 2; r < e; r++) o += Ue(i[r++]) + "," + Ue(i[r++]) + " " + Ue(i[r++]) + "," + Ue(i[r++]) + " " + Ue(i[r++]) + "," + Ue(i[r]) + " ";
            i.closed && (o += "z")
        }
        return o
    }
    /*!
     * MotionPathPlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var dn, gn, Dn, mn, vn = ["x", "translateX", "left", "marginLeft"],
        yn = ["y", "translateY", "top", "marginTop"],
        _n = Math.PI / 180,
        xn = function(t, e, n, r) {
            for (var i = e.length, o = r, a = 0; a < i; a++) t[o] = parseFloat(e[a][n]), o += 2;
            return t
        },
        bn = function(t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0
        },
        wn = function(t) {
            var e, n = t[0],
                r = t[1];
            for (e = 2; e < t.length; e += 2) n = t[e] += n, r = t[e + 1] += r
        },
        Cn = function(t, e, n, r, i, o, a) {
            "cubic" === a.type ? e = [e] : (e.unshift(bn(n, r, a.unitX), i ? bn(n, i, a.unitY) : 0), a.relative && wn(e), e = [(i ? fn : hn)(e, a.curviness)]);
            return e = o(Mn(e, n, a)), Pn(t, n, r, e, "x", a.unitX), i && Pn(t, n, i, e, "y", a.unitY), rn(e, a.resolution || (0 === a.curviness ? 20 : 12))
        },
        Fn = function(t) {
            return t
        },
        En = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
        Tn = function(t, e, n) {
            var r, i, o, a = b(t);
            return "svg" === (t.tagName + "").toLowerCase() ? (i = (r = t.viewBox.baseVal).x, o = r.y, r.width || (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height")
            })) : (r = e && t.getBBox && t.getBBox(), i = o = 0), e && "auto" !== e && (i += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, o += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(i || o ? a.apply({
                x: i,
                y: o
            }) : {
                x: a.e,
                y: a.f
            })
        },
        An = function(t, e, n, r) {
            var i, o = b(t.parentNode, !0, !0),
                a = o.clone().multiply(b(e)),
                u = Tn(t, n, o),
                s = Tn(e, r, o),
                l = s.x,
                c = s.y;
            return a.e = a.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(En) || [], l += (i = a.apply({
                x: +i[0],
                y: +i[1]
            })).x, c += i.y), (i || e.getBBox && t.getBBox) && (l -= (i = a.apply(e.getBBox())).x, c -= i.y), a.e = l - u.x, a.f = c - u.y, a
        },
        Mn = function(t, e, n) {
            var r, i, o, a = n.align,
                u = n.matrix,
                s = n.offsetX,
                l = n.offsetY,
                c = n.alignOrigin,
                h = t[0][0],
                f = t[0][1],
                p = bn(e, "x"),
                d = bn(e, "y");
            return t && t.length ? (a && ("self" === a || (r = mn(a)[0] || e) === e ? sn(t, 1, 0, 0, 1, p - h, d - f) : (c && !1 !== c[2] ? dn.set(e, {
                transformOrigin: 100 * c[0] + "% " + 100 * c[1] + "%"
            }) : c = [bn(e, "xPercent") / -100, bn(e, "yPercent") / -100], o = (i = An(e, r, c, "auto")).apply({
                x: h,
                y: f
            }), sn(t, i.a, i.b, i.c, i.d, p + i.e - (o.x - i.e), d + i.f - (o.y - i.f)))), u ? sn(t, u.a, u.b, u.c, u.d, u.e, u.f) : (s || l) && sn(t, 1, 0, 0, 1, s || 0, l || 0), t) : Ze("M0,0L0,0")
        },
        Pn = function(t, e, n, r, i, o) {
            var a = e._gsap,
                u = a.harness,
                s = u && u.aliases && u.aliases[n],
                l = s && s.indexOf(",") < 0 ? s : n,
                c = t._pt = new gn(t._pt, e, l, 0, 0, Fn, 0, a.set(e, l, t));
            c.u = Dn(a.get(e, l, o)) || 0, c.path = r, c.pp = i, t._props.push(l)
        },
        Sn = {
            version: "3.2.4",
            name: "motionPath",
            register: function(t, e, n) {
                Dn = (dn = t).utils.getUnit, mn = dn.utils.toArray, gn = n
            },
            init: function(t, e) {
                if (!dn) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                "object" == typeof e && !e.style && e.path || (e = {
                    path: e
                });
                var n, r, i, o, a, u, s = [],
                    l = e.path,
                    c = l[0],
                    h = e.autoRotate,
                    f = (a = e.start, u = "end" in e ? e.end : 1, function(t) {
                        return a || 1 !== u ? en(t, a, u) : t
                    });
                if (this.rawPaths = s, this.target = t, (this.rotate = h || 0 === h) && (this.rOffset = parseFloat(h) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = Dn(t._gsap.get(t, this.rProp)) || 0), !Array.isArray(l) || "closed" in l || "number" == typeof c) rn(n = f(Mn(Ze(e.path), t, e)), e.resolution), s.push(n), Pn(this, t, e.x || "x", n, "x", e.unitX || "px"), Pn(this, t, e.y || "y", n, "y", e.unitY || "px");
                else {
                    for (r in c) ~vn.indexOf(r) ? i = r : ~yn.indexOf(r) && (o = r);
                    for (r in i && o ? s.push(Cn(this, xn(xn([], l, i, 0), l, o, 1), t, e.x || i, e.y || o, f, e)) : i = o = 0, c) r !== i && r !== o && s.push(Cn(this, xn([], l, r, 0), t, r, 0, f, e))
                }
            },
            render: function(t, e) {
                var n = e.rawPaths,
                    r = n.length,
                    i = e._pt;
                for (t > 1 ? t = 1 : t < 0 && (t = 0); r--;) un(n[r], t, !r && e.rotate, n[r]);
                for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), i = i._next;
                e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? _n : 1) + e.rOffset + e.ru, e, t)
            },
            getLength: function(t) {
                return rn(Ze(t)).totalLength
            },
            sliceRawPath: en,
            getRawPath: Ze,
            pointsToSegment: fn,
            stringToRawPath: cn,
            rawPathToString: pn,
            transformRawPath: sn,
            getGlobalMatrix: b,
            getPositionOnPath: un,
            cacheRawPathMeasurements: rn,
            convertToPath: function(t, e) {
                return mn(t).map((function(t) {
                    return Je(t, !1 !== e)
                }))
            },
            convertCoordinates: function(t, e, n) {
                var r = b(e, !0, !0).multiply(b(t));
                return n ? r.apply(n) : r
            },
            getAlignMatrix: An,
            getRelativePosition: function(t, e, n, r) {
                var i = An(t, e, n, r);
                return {
                    x: i.e,
                    y: i.f
                }
            },
            arrayToRawPath: function(t, e) {
                var n = xn(xn([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                return e.relative && wn(n), ["cubic" === e.type ? n : fn(n, e.curviness)]
            }
        };
    (dn || "undefined" != typeof window && (dn = window.gsap) && dn.registerPlugin && dn) && dn.registerPlugin(Sn);
    /*!
     * PixiPlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var On, kn, Bn, Ln, Nn, In, Xn, Yn, Rn = function() {
            return "undefined" != typeof window
        },
        zn = function() {
            return On || Rn() && (On = window.gsap) && On.registerPlugin && On
        },
        jn = function(t) {
            return "function" == typeof t
        },
        Hn = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        qn = function(t, e) {
            var n, r, i = [],
                o = 0,
                a = 0;
            for (n = 0; n < 4; n++) {
                for (r = 0; r < 5; r++) a = 4 === r ? t[o + 4] : 0, i[o + r] = t[o] * e[r] + t[o + 1] * e[r + 5] + t[o + 2] * e[r + 10] + t[o + 3] * e[r + 15] + a;
                o += 5
            }
            return i
        },
        Wn = function(t, e) {
            var n = 1 - e,
                r = .212671 * n,
                i = .71516 * n,
                o = .072169 * n;
            return qn([r + e, i, o, 0, 0, r, i + e, o, 0, 0, r, i, o + e, 0, 0, 0, 0, 0, 1, 0], t)
        },
        Un = function(t, e, n) {
            var r = Bn(e),
                i = r[0] / 255,
                o = r[1] / 255,
                a = r[2] / 255,
                u = 1 - n;
            return qn([u + n * i * .212671, n * i * .71516, n * i * .072169, 0, 0, n * o * .212671, u + n * o * .71516, n * o * .072169, 0, 0, n * a * .212671, n * a * .71516, u + n * a * .072169, 0, 0, 0, 0, 0, 1, 0], t)
        },
        Vn = function(t, e) {
            e *= Math.PI / 180;
            var n = Math.cos(e),
                r = Math.sin(e);
            return qn([.212671 + .787329 * n + -.212671 * r, .71516 + -.71516 * n + -.71516 * r, .072169 + -.072169 * n + .927831 * r, 0, 0, .212671 + -.212671 * n + .143 * r, .71516 + .28484 * n + .14 * r, .072169 + -.072169 * n + -.283 * r, 0, 0, .212671 + -.212671 * n + -.787329 * r, .71516 + -.71516 * n + .71516 * r, .072169 + .927831 * n + .072169 * r, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t)
        },
        Qn = function(t, e) {
            return qn([e, 0, 0, 0, .5 * (1 - e), 0, e, 0, 0, .5 * (1 - e), 0, 0, e, 0, .5 * (1 - e), 0, 0, 0, 1, 0], t)
        },
        Gn = function(t, e) {
            var n, r, i = Ln.filters[e],
                o = t.filters || [],
                a = o.length;
            for (i || (r = e + " not found. PixiPlugin.registerPIXI(PIXI)", console.warn(r)); --a > -1;)
                if (o[a] instanceof i) return o[a];
            return n = new i, "BlurFilter" === e && (n.blur = 0), o.push(n), t.filters = o, n
        },
        Zn = function(t, e, n, r) {
            e.add(n, t, n[t], r[t]), e._props.push(t)
        },
        $n = function(t, e) {
            var n = new Ln.filters.ColorMatrixFilter;
            return n.matrix = e, n.brightness(t, !0), n.matrix
        },
        Kn = {
            contrast: 1,
            saturation: 1,
            colorizeAmount: 0,
            colorize: "rgb(255,255,255)",
            hue: 0,
            brightness: 1
        },
        Jn = function(t, e, n) {
            var r, i, o, a = Gn(t, "ColorMatrixFilter"),
                u = t._gsColorMatrixFilter = t._gsColorMatrixFilter || function(t) {
                    var e, n = {};
                    for (e in t) n[e] = t[e];
                    return n
                }(Kn),
                s = e.combineCMF && !("colorMatrixFilter" in e && !e.colorMatrixFilter);
            o = a.matrix, e.resolution && (a.resolution = e.resolution), e.matrix && e.matrix.length === o.length ? (i = e.matrix, 1 !== u.contrast && Zn("contrast", n, u, Kn), u.hue && Zn("hue", n, u, Kn), 1 !== u.brightness && Zn("brightness", n, u, Kn), u.colorizeAmount && (Zn("colorize", n, u, Kn), Zn("colorizeAmount", n, u, Kn)), 1 !== u.saturation && Zn("saturation", n, u, Kn)) : (i = Hn.slice(), null != e.contrast ? (i = Qn(i, +e.contrast), Zn("contrast", n, u, e)) : 1 !== u.contrast && (s ? i = Qn(i, u.contrast) : Zn("contrast", n, u, Kn)), null != e.hue ? (i = Vn(i, +e.hue), Zn("hue", n, u, e)) : u.hue && (s ? i = Vn(i, u.hue) : Zn("hue", n, u, Kn)), null != e.brightness ? (i = $n(+e.brightness, i), Zn("brightness", n, u, e)) : 1 !== u.brightness && (s ? i = $n(u.brightness, i) : Zn("brightness", n, u, Kn)), null != e.colorize ? (e.colorizeAmount = "colorizeAmount" in e ? +e.colorizeAmount : 1, i = Un(i, e.colorize, e.colorizeAmount), Zn("colorize", n, u, e), Zn("colorizeAmount", n, u, e)) : u.colorizeAmount && (s ? i = Un(i, u.colorize, u.colorizeAmount) : (Zn("colorize", n, u, Kn), Zn("colorizeAmount", n, u, Kn))), null != e.saturation ? (i = Wn(i, +e.saturation), Zn("saturation", n, u, e)) : 1 !== u.saturation && (s ? i = Wn(i, u.saturation) : Zn("saturation", n, u, Kn))), r = i.length;
            for (; --r > -1;) i[r] !== o[r] && n.add(o, r, o[r], i[r], "colorMatrixFilter");
            n._props.push("colorMatrixFilter")
        },
        tr = function(t, e) {
            var n = e.t,
                r = e.p,
                i = e.color;
            (0, e.set)(n, r, i[0] << 16 | i[1] << 8 | i[2])
        },
        er = function(t, e) {
            var n = e.g;
            n && (n.dirty++, n.clearDirty++)
        },
        nr = function(t, e) {
            e.t.visible = !!e.t.alpha
        },
        rr = function(t, e, n, r) {
            var i = t[e],
                o = Bn(jn(i) ? t[e.indexOf("set") || !jn(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)]() : i),
                a = Bn(n);
            r._pt = new Nn(r._pt, t, e, 0, 0, tr, {
                t: t,
                p: e,
                color: o,
                set: In(t, e)
            }), r.add(o, 0, o[0], a[0]), r.add(o, 1, o[1], a[1]), r.add(o, 2, o[2], a[2])
        },
        ir = {
            tint: 1,
            lineColor: 1,
            fillColor: 1
        },
        or = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
        ar = {
            x: "position",
            y: "position",
            tileX: "tilePosition",
            tileY: "tilePosition"
        },
        ur = {
            colorMatrixFilter: 1,
            saturation: 1,
            contrast: 1,
            hue: 1,
            colorize: 1,
            colorizeAmount: 1,
            brightness: 1,
            combineCMF: 1
        },
        sr = Math.PI / 180,
        lr = function(t) {
            return "string" == typeof t
        },
        cr = function(t) {
            return lr(t) && "=" === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * sr : t * sr
        },
        hr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e5 * (e.s + e.c * t)) / 1e5, e)
        },
        fr = function(t, e, n, r, i, o) {
            var a, u, s = 360 * (o ? sr : 1),
                l = lr(i),
                c = l && "=" === i.charAt(1) ? +(i.charAt(0) + "1") : 0,
                h = parseFloat(c ? i.substr(2) : i) * (o ? sr : 1),
                f = c ? h * c : h - r,
                p = r + f;
            return l && ("short" === (a = i.split("_")[1]) && (f %= s) !== f % (s / 2) && (f += f < 0 ? s : -s), "cw" === a && f < 0 ? f = (f + 1e10 * s) % s - ~~(f / s) * s : "ccw" === a && f > 0 && (f = (f - 1e10 * s) % s - ~~(f / s) * s)), t._pt = u = new Nn(t._pt, e, n, r, f, hr), u.e = p, u
        },
        pr = function() {
            Rn() && (kn = window, On = zn(), Ln = Ln || kn.PIXI, Bn = On.utils.splitColor)
        };
    for (Xn = 0; Xn < or.length; Xn++) Yn = or[Xn], ar[Yn + "X"] = Yn, ar[Yn + "Y"] = Yn;
    var dr = {
        version: "3.2.4",
        name: "pixi",
        register: function(t, e, n) {
            On = t, Nn = n, In = e.getSetter, pr()
        },
        registerPIXI: function(t) {
            Ln = t
        },
        init: function(t, e, n, r, i) {
            if (Ln || pr(), !t instanceof Ln.DisplayObject) return !1;
            var o, a, u, s, l, c, h, f, p, d = "4" === Ln.VERSION.charAt(0);
            for (c in e) {
                if (o = ar[c], u = e[c], o) a = ~c.charAt(c.length - 1).toLowerCase().indexOf("x") ? "x" : "y", this.add(t[o], a, t[o][a], "skew" === o ? cr(u) : u);
                else if ("scale" === c || "anchor" === c || "pivot" === c || "tileScale" === c) this.add(t[c], "x", t[c].x, u), this.add(t[c], "y", t[c].y, u);
                else if ("rotation" === c || "angle" === c) fr(this, t, c, t[c], u, "rotation" === c);
                else if (ur[c]) s || (Jn(t, e.colorMatrixFilter || e, this), s = !0);
                else if ("blur" === c || "blurX" === c || "blurY" === c || "blurPadding" === c) {
                    if (l = Gn(t, "BlurFilter"), this.add(l, c, l[c], u), 0 !== e.blurPadding)
                        for (h = e.blurPadding || 2 * Math.max(l[c], u), f = t.filters.length; --f > -1;) t.filters[f].padding = Math.max(t.filters[f].padding, h)
                } else if (ir[c])
                    if (("lineColor" === c || "fillColor" === c) && t instanceof Ln.Graphics)
                        for (p = (t.geometry || t).graphicsData, this._pt = new Nn(this._pt, t, c, 0, 0, er, {
                                g: t.geometry || t
                            }), f = p.length; --f > -1;) rr(d ? p[f] : p[f][c.substr(0, 4) + "Style"], d ? c : "color", u, this);
                    else rr(t, c, u, this);
                else "autoAlpha" === c ? (this._pt = new Nn(this._pt, t, "visible", 0, 0, nr), this.add(t, "alpha", t.alpha, u), this._props.push("alpha", "visible")) : this.add(t, c, "get", u);
                this._props.push(c)
            }
        }
    };
    zn() && On.registerPlugin(dr);
    /*!
     * ScrollToPlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gr, Dr, mr, vr, yr, _r, xr, br = function() {
            return "undefined" != typeof window
        },
        wr = function() {
            return gr || br() && (gr = window.gsap) && gr.registerPlugin && gr
        },
        Cr = function(t) {
            return "string" == typeof t
        },
        Fr = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return t === mr || t === vr || t === yr ? Math.max(vr[r], yr[r]) - (mr["inner" + n] || vr[i] || yr[i]) : t[r] - t["offset" + n]
        },
        Er = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === mr && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != vr[n] ? vr : yr),
                function() {
                    return t[n]
                }
        },
        Tr = function(t, e) {
            var n = _r(t)[0].getBoundingClientRect(),
                r = !e || e === mr || e === yr,
                i = r ? {
                    top: vr.clientTop - (mr.pageYOffset || vr.scrollTop || yr.scrollTop || 0),
                    left: vr.clientLeft - (mr.pageXOffset || vr.scrollLeft || yr.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                o = {
                    x: n.left - i.left,
                    y: n.top - i.top
                };
            return !r && e && (o.x += Er(e, "x")(), o.y += Er(e, "y")()), o
        },
        Ar = function(t, e, n, r) {
            return isNaN(t) || "object" == typeof t ? Cr(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r : "max" === t ? Fr(e, n) : Math.min(Fr(e, n), Tr(t, e)[n]) : parseFloat(t)
        },
        Mr = function() {
            gr = wr(), br() && gr && document.body && (mr = window, yr = document.body, vr = document.documentElement, _r = gr.utils.toArray, gr.config({
                autoKillThreshold: 7
            }), xr = gr.config(), Dr = 1)
        },
        Pr = {
            version: "3.2.4",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                gr = t, Mr()
            },
            init: function(t, e, n, r, i) {
                Dr || Mr();
                this.isWin = t === mr, this.target = t, this.tween = n, "object" != typeof e ? Cr((e = {
                    y: e
                }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                    y: e,
                    x: e
                }), this.vars = e, this.autoKill = !!e.autoKill, this.getX = Er(t, "x"), this.getY = Er(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, Ar(e.x, t, "x", this.x) - (e.offsetX || 0), r, i, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, Ar(e.y, t, "y", this.y) - (e.offsetY || 0), r, i, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, r, i, o, a, u = e._pt, s = e.target, l = e.tween, c = e.autoKill, h = e.xPrev, f = e.yPrev, p = e.isWin; u;) u.r(t, u.d), u = u._next;
                n = p || !e.skipX ? e.getX() : h, i = (r = p || !e.skipY ? e.getY() : f) - f, o = n - h, a = xr.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (o > a || o < -a) && n < Fr(s, "x") && (e.skipX = 1), !e.skipY && (i > a || i < -a) && r < Fr(s, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), p ? mr.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (s.scrollTop = e.y), e.skipX || (s.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    Pr.max = Fr, Pr.getOffset = Tr, Pr.buildGetter = Er, wr() && gr.registerPlugin(Pr);
    /*!
     * strings: 3.2.4
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Sr = /(^\s+|\s+$)/g,
        Or = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function kr(t, e, n) {
        for (var r = t.firstChild, i = []; r;) 3 === r.nodeType ? i.push.apply(i, Br((r.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), e, n)) : "br" === (r.nodeName + "").toLowerCase() ? i[i.length - 1] += "<br>" : i.push(r.outerHTML), r = r.nextSibling;
        return i
    }

    function Br(t, e, n) {
        if (n && (t = t.replace(Sr, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
        for (var r, i, o = [], a = t.length, u = 0; u < a; u++)((i = t.charAt(u)).charCodeAt(0) >= 55296 && i.charCodeAt(0) <= 56319 || t.charCodeAt(u + 1) >= 65024 && t.charCodeAt(u + 1) <= 65039) && (r = ((t.substr(u, 12).split(Or) || [])[1] || "").length || 2, i = t.substr(u, r), o.emoji = 1, u += r - 1), o.push(">" === i ? "&gt;" : "<" === i ? "&lt;" : i);
        return o
    }
    /*!
     * TextPlugin 3.2.4
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Lr, Nr, Ir = {
        version: "3.2.4",
        name: "text",
        init: function(t, e, n) {
            var r, i, o, a, u, s, l, c, h = t.nodeName.toUpperCase();
            if (this.svg = t.getBBox && ("TEXT" === h || "TSPAN" === h), !("innerHTML" in t || this.svg)) return !1;
            if (this.target = t, "object" != typeof e && (e = {
                    value: e
                }), "value" in e) {
                for (this.delimiter = e.delimiter || "", o = kr(t, this.delimiter), Nr || (Nr = document.createElement("div")), Nr.innerHTML = e.value, i = kr(Nr, this.delimiter), this.from = n._from, this.from && (h = o, o = i, i = h), this.hasClass = !(!e.newClass && !e.oldClass), this.newClass = e.newClass, this.oldClass = e.oldClass, r = (h = o.length - i.length) < 0 ? o : i, this.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""), h < 0 && (h = -h); --h > -1;) r.push(this.fillChar);
                if ("diff" === e.type) {
                    for (a = 0, u = [], s = [], l = "", h = 0; h < i.length; h++)(c = i[h]) === o[h] ? l += c : (u[a] = l + c, s[a++] = l + o[h], l = "");
                    i = u, o = s, l && (i.push(l), o.push(l))
                }
                e.speed && n.duration(Math.min(.05 / e.speed * r.length, e.maxDuration || 9999)), this.original = o, this.text = i, this._props.push("text")
            } else this.text = this.original = [""]
        },
        render: function(t, e) {
            t > 1 ? t = 1 : t < 0 && (t = 0), e.from && (t = 1 - t);
            var n, r, i, o = e.text,
                a = e.hasClass,
                u = e.newClass,
                s = e.oldClass,
                l = e.delimiter,
                c = e.target,
                h = e.fillChar,
                f = e.original,
                p = o.length,
                d = t * p + .5 | 0;
            a ? (r = s && d !== p, i = ((n = u && d) ? "<span class='" + u + "'>" : "") + o.slice(0, d).join(l) + (n ? "</span>" : "") + (r ? "<span class='" + s + "'>" : "") + l + f.slice(d).join(l) + (r ? "</span>" : "")) : i = o.slice(0, d).join(l) + l + f.slice(d).join(l), e.svg ? c.textContent = i : c.innerHTML = "&nbsp;" === h && ~i.indexOf("  ") ? i.split("  ").join("&nbsp;&nbsp;") : i
        }
    };
    Ir.splitInnerHTML = kr, Ir.emojiSafeSplit = Br, Ir.getText = function t(e) {
        var n = e.nodeType,
            r = "";
        if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) r += t(e)
        } else if (3 === n || 4 === n) return e.nodeValue;
        return r
    }, (Lr || "undefined" != typeof window && (Lr = window.gsap) && Lr.registerPlugin && Lr) && Lr.registerPlugin(Ir);
    var Xr = h.R.registerPlugin(f.b) || h.R,
        Yr = Xr.core.Tween
}, function(t, e, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    };
    e.__esModule = !0;
    var i, o, a = {
            intro: "Intro",
            about: "About",
            benefits: "Benefits",
            community: "Community",
            getstarted: "Get started"
        },
        u = Array.from(document.querySelectorAll("section.section")).map((function(t, e) {
            return {
                key: t.id,
                label: a[t.id],
                element: t,
                index: e
            }
        })).reverse();
    e.sectionStore = (i = u[u.length - 1], o = [], window.addEventListener("scroll", (function() {
        var t = u.find((function(t) {
            return t.element.getBoundingClientRect().top < 40
        }));
        (null == t ? void 0 : t.key) !== (null == i ? void 0 : i.key) && function(t) {
            i = r({}, t), o.forEach((function(t) {
                return t(i)
            }))
        }(t)
    })), {
        getCurrentSection: function() {
            return i
        },
        subscribe: function(t) {
            o.push(t), t(i)
        }
    })
}, function(t, e, n) {
    (function(n) {
        var r, i, o;
        i = [], void 0 === (o = "function" == typeof(r = function() {
            "use strict";
            for (var t, e = void 0 !== n ? n : window, r = e.performance, i = document.body, o = [], a = null, u = ["color", "backgroundColor"], s = ["top", "left", "width", "height"], l = ["translate3d", "translateX", "translateY", "translateZ", "rotate", "translate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scale"], c = ["opacity"], h = u.concat(c, s, l), f = {}, p = 0, g = h.length; p < g; p++) t = h[p], -1 !== u.indexOf(t) ? f[t] = "rgba(0,0,0,0)" : -1 !== s.indexOf(t) ? f[t] = 0 : "translate3d" === t ? f[t] = [0, 0, 0] : "translate" === t ? f[t] = [0, 0] : "rotate" === t || /X|Y|Z/.test(t) ? f[t] = 0 : "scale" !== t && "opacity" !== t || (f[t] = 1);
            var D = {
                    duration: 700,
                    delay: 0,
                    offset: 0,
                    repeat: 0,
                    repeatDelay: 0,
                    yoyo: !1,
                    easing: "linear",
                    keepHex: !1
                },
                m = function() {
                    for (var t, e = ["Moz", "moz", "Webkit", "webkit", "O", "o", "Ms", "ms"], n = 0, r = e.length; n < r; n++)
                        if (e[n] + "Transform" in i.style) {
                            t = e[n];
                            break
                        }
                    return t
                },
                v = function(t) {
                    var e = !(t in i.style),
                        n = m();
                    return e ? n + (t.charAt(0).toUpperCase() + t.slice(1)) : t
                },
                y = function(t, e) {
                    var n;
                    if (null === (n = e ? t instanceof Object || "object" == typeof t ? t : document.querySelectorAll(t) : "object" == typeof t ? t : document.querySelector(t)) && "window" !== t) throw new TypeError("Element not found or incorrect selector: " + t);
                    return n
                },
                _ = function(t) {
                    return 180 * t / Math.PI
                },
                x = function(t, e) {
                    for (var n, r = parseInt(t) || 0, i = ["px", "%", "deg", "rad", "em", "rem", "vh", "vw"], o = 0; o < i.length; o++)
                        if ("string" == typeof t && -1 !== t.indexOf(i[o])) {
                            n = i[o];
                            break
                        }
                    return {
                        v: r,
                        u: n = void 0 !== n ? n : e ? "deg" : "px"
                    }
                },
                b = function(t) {
                    if (/rgb|rgba/.test(t)) {
                        var n = t.replace(/\s|\)/, "").split("(")[1].split(","),
                            r = n[3] ? n[3] : null;
                        return r ? {
                            r: parseInt(n[0]),
                            g: parseInt(n[1]),
                            b: parseInt(n[2]),
                            a: parseFloat(r)
                        } : {
                            r: parseInt(n[0]),
                            g: parseInt(n[1]),
                            b: parseInt(n[2])
                        }
                    }
                    if (/^#/.test(t)) {
                        var i = C(t);
                        return {
                            r: i.r,
                            g: i.g,
                            b: i.b
                        }
                    }
                    if (/transparent|none|initial|inherit/.test(t)) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    };
                    if (!/^#|^rgb/.test(t)) {
                        var o = document.getElementsByTagName("head")[0];
                        o.style.color = t;
                        var a = e.getComputedStyle(o, null).color;
                        return a = /rgb/.test(a) ? a.replace(/[^\d,]/g, "").split(",") : [0, 0, 0], o.style.color = "", {
                            r: parseInt(a[0]),
                            g: parseInt(a[1]),
                            b: parseInt(a[2])
                        }
                    }
                },
                w = function(t, e, n) {
                    return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
                },
                C = function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                        return e + e + n + n + r + r
                    }));
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return e ? {
                        r: parseInt(e[1], 16),
                        g: parseInt(e[2], 16),
                        b: parseInt(e[3], 16)
                    } : null
                },
                F = function(t, n) {
                    var r = t.style,
                        i = e.getComputedStyle(t, null) || t.currentStyle,
                        o = v(n),
                        a = r[n] && !/auto|initial|none|unset/.test(r[n]) ? r[n] : i[o];
                    if ("transform" !== n && (o in i || o in r)) {
                        if (a) {
                            if ("filter" === o) {
                                var u = parseInt(a.split("=")[1].replace(")", ""));
                                return parseFloat(u / 100)
                            }
                            return a
                        }
                        return f[n]
                    }
                },
                E = function(t) {
                    var e = o.indexOf(t); - 1 !== e && o.splice(e, 1)
                },
                T = "ontouchstart" in e || navigator && navigator.msMaxTouchPoints ? "touchstart" : "mousewheel",
                A = e.requestAnimationFrame || e.webkitRequestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                },
                M = e.cancelAnimationFrame || e.webkitCancelRequestAnimationFrame || function(t) {
                    return clearTimeout(t)
                },
                P = v("transform"),
                S = document.getElementsByTagName("HTML")[0],
                O = navigator && /(EDGE|Mac)/i.test(navigator.userAgent) ? i : S,
                k = 8 === (!(!navigator || null === new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)) && parseFloat(RegExp.$1)),
                B = e.Interpolate = {},
                L = B.number = function(t, e, n) {
                    return (t = +t) + (e -= t) * n
                },
                N = (B.unit = function(t, e, n, r) {
                    return (t = +t) + (e -= t) * r + n
                }, B.color = function(t, e, n, r) {
                    var i, o = {};
                    for (i in e) o[i] = "a" !== i ? L(t[i], e[i], n) >> 0 || 0 : t[i] && e[i] ? (100 * L(t[i], e[i], n) >> 0) / 100 : null;
                    return r ? w(o.r, o.g, o.b) : o.a ? "rgba(" + o.r + "," + o.g + "," + o.b + "," + o.a + ")" : "rgb(" + o.r + "," + o.g + "," + o.b + ")"
                }),
                I = B.translate = function(t, e, n, r) {
                    var i = {};
                    for (var o in e) i[o] = (t[o] === e[o] ? e[o] : (1e3 * (t[o] + (e[o] - t[o]) * r) >> 0) / 1e3) + n;
                    return i.x || i.y ? "translate(" + i.x + "," + i.y + ")" : "translate3d(" + i.translateX + "," + i.translateY + "," + i.translateZ + ")"
                },
                X = B.rotate = function(t, e, n, r) {
                    var i = {};
                    for (var o in e) i[o] = "z" === o ? "rotate(" + (1e3 * (t[o] + (e[o] - t[o]) * r) >> 0) / 1e3 + n + ")" : o + "(" + (1e3 * (t[o] + (e[o] - t[o]) * r) >> 0) / 1e3 + n + ")";
                    return i.z ? i.z : (i.rotateX || "") + (i.rotateY || "") + (i.rotateZ || "")
                },
                Y = B.skew = function(t, e, n, r) {
                    var i = {};
                    for (var o in e) i[o] = o + "(" + (1e3 * (t[o] + (e[o] - t[o]) * r) >> 0) / 1e3 + n + ")";
                    return (i.skewX || "") + (i.skewY || "")
                },
                R = B.scale = function(t, e, n) {
                    return "scale(" + (1e3 * (t + (e - t) * n) >> 0) / 1e3 + ")"
                },
                z = {},
                j = function(t) {
                    for (var e = 0; e < o.length;) H.call(o[e], t) ? e++ : o.splice(e, 1);
                    a = A(j)
                },
                H = function(t) {
                    if ((t = t || r.now()) < this._startTime && this.playing) return !0;
                    var e = Math.min((t - this._startTime) / this.options.duration, 1),
                        n = this.options.easing(e);
                    for (var i in this.valuesEnd) z[i](this.element, i, this.valuesStart[i], this.valuesEnd[i], n, this.options);
                    if (this.options.update && this.options.update.call(this), 1 === e) {
                        if (this.options.repeat > 0) return isFinite(this.options.repeat) && this.options.repeat--, this.options.yoyo && (this.reversed = !this.reversed, G.call(this)), this._startTime = this.options.yoyo && !this.reversed ? t + this.options.repeatDelay : t, !0;
                        this.options.complete && this.options.complete.call(this), K.call(this);
                        for (var o = 0, a = this.options.chain.length; o < a; o++) this.options.chain[o].start();
                        return Z.call(this), !1
                    }
                    return !0
                },
                q = function() {
                    var t = this.element,
                        e = this.options;
                    void 0 !== e.perspective && P in this.valuesEnd && (this.valuesStart[P].perspective = this.valuesEnd[P].perspective), void 0 === e.transformOrigin || "svgTransform" in this.valuesEnd || (t.style[v("transformOrigin")] = e.transformOrigin), void 0 !== e.perspectiveOrigin && (t.style[v("perspectiveOrigin")] = e.perspectiveOrigin), void 0 !== e.parentPerspective && (t.parentNode.style[v("perspective")] = e.parentPerspective + "px"), void 0 !== e.parentPerspectiveOrigin && (t.parentNode.style[v("perspectiveOrigin")] = e.parentPerspectiveOrigin)
                },
                W = {},
                U = {},
                V = {
                    boxModel: function(t, e) {
                        t in z || (z[t] = function(t, e, n, r, i) {
                            t.style[e] = (i > .99 || i < .01 ? (10 * L(n, r, i) >> 0) / 10 : L(n, r, i) >> 0) + "px"
                        });
                        var n = x(e),
                            r = "height" === t ? "offsetHeight" : "offsetWidth";
                        return "%" === n.u ? n.v * this.element[r] / 100 : n.v
                    },
                    transform: function(t, e) {
                        if (P in z || (z[P] = function(t, e, n, r, i, o) {
                                t.style[e] = (n.perspective || "") + ("translate" in n ? I(n.translate, r.translate, "px", i) : "") + ("rotate" in n ? X(n.rotate, r.rotate, "deg", i) : "") + ("skew" in n ? Y(n.skew, r.skew, "deg", i) : "") + ("scale" in n ? R(n.scale, r.scale, i) : "")
                            }), /translate/.test(t)) {
                            if ("translate3d" === t) {
                                var n = e.split(","),
                                    r = x(n[0]),
                                    i = x(n[1], t3d2 = x(n[2]));
                                return {
                                    translateX: "%" === r.u ? r.v * this.element.offsetWidth / 100 : r.v,
                                    translateY: "%" === i.u ? i.v * this.element.offsetHeight / 100 : i.v,
                                    translateZ: "%" === t3d2.u ? t3d2.v * (this.element.offsetHeight + this.element.offsetWidth) / 200 : t3d2.v
                                }
                            }
                            if (/^translate(?:[XYZ])$/.test(t)) {
                                var o = x(e),
                                    a = /X/.test(t) ? this.element.offsetWidth / 100 : /Y/.test(t) ? this.element.offsetHeight / 100 : (this.element.offsetWidth + this.element.offsetHeight) / 200;
                                return "%" === o.u ? o.v * a : o.v
                            }
                            if ("translate" === t) {
                                var u, s = "string" == typeof e ? e.split(",") : e,
                                    l = {},
                                    c = x(s[0]),
                                    h = s.length ? x(s[1]) : {
                                        v: 0,
                                        u: "px"
                                    };
                                return s instanceof Array ? (l.x = "%" === c.u ? c.v * this.element.offsetWidth / 100 : c.v, l.y = "%" === h.u ? h.v * this.element.offsetHeight / 100 : h.v) : (u = x(s), l.x = "%" === u.u ? u.v * this.element.offsetWidth / 100 : u.v, l.y = 0), l
                            }
                        } else if (/rotate|skew/.test(t)) {
                            if (/^rotate(?:[XYZ])$|skew(?:[XY])$/.test(t)) {
                                var f = x(e, !0);
                                return "rad" === f.u ? _(f.v) : f.v
                            }
                            if ("rotate" === t) {
                                var p = {},
                                    d = x(e, !0);
                                return p.z = "rad" === d.u ? _(d.v) : d.v, p
                            }
                        } else if ("scale" === t) return parseFloat(e)
                    },
                    unitless: function(t, e) {
                        return !/scroll/.test(t) || t in z ? "opacity" === t && (t in z || (z[t] = k ? function(t, e, n, r, i) {
                            t.style.filter = "alpha(opacity=" + (100 * L(n, r, i) >> 0) + ")"
                        } : function(t, e, n, r, i) {
                            t.style.opacity = (100 * L(n, r, i) >> 0) / 100
                        })) : z[t] = function(t, e, n, r, i) {
                            t.scrollTop = L(n, r, i) >> 0
                        }, parseFloat(e)
                    },
                    colors: function(t, e) {
                        return t in z || (z[t] = function(t, e, n, r, i, o) {
                            t.style[e] = N(n, r, i, o.keepHex)
                        }), b(e)
                    }
                },
                Q = function(t, e) {
                    var n = "start" === e ? this.valuesStart : this.valuesEnd,
                        r = {},
                        i = {},
                        o = {},
                        a = {};
                    for (var h in t)
                        if (-1 !== l.indexOf(h)) {
                            var f = ["X", "Y", "Z"];
                            if (/^translate(?:[XYZ]|3d)$/.test(h)) {
                                for (var p = 0; p < 3; p++) {
                                    var d = f[p];
                                    /3d/.test(h) ? o["translate" + d] = V.transform.call(this, "translate" + d, t[h][p]) : o["translate" + d] = "translate" + d in t ? V.transform.call(this, "translate" + d, t["translate" + d]) : 0
                                }
                                a.translate = o
                            } else if (/^rotate(?:[XYZ])$|^skew(?:[XY])$/.test(h)) {
                                for (var g = /rotate/.test(h) ? "rotate" : "skew", D = "rotate" === g ? i : r, m = 0; m < 3; m++) {
                                    var v = f[m];
                                    void 0 !== t[g + v] && "skewZ" !== h && (D[g + v] = V.transform.call(this, g + v, t[g + v]))
                                }
                                a[g] = D
                            } else /(rotate|translate|scale)$/.test(h) && (a[h] = V.transform.call(this, h, t[h]));
                            n[P] = a
                        } else -1 !== s.indexOf(h) ? n[h] = V.boxModel.call(this, h, t[h]) : -1 !== c.indexOf(h) || "scroll" === h ? n[h] = V.unitless.call(this, h, t[h]) : -1 !== u.indexOf(h) ? n[h] = V.colors.call(this, h, t[h]) : h in V && (n[h] = V[h].call(this, h, t[h]))
                },
                G = function() {
                    if (this.options.yoyo)
                        for (var t in this.valuesEnd) {
                            var e = this.valuesRepeat[t];
                            this.valuesRepeat[t] = this.valuesEnd[t], this.valuesEnd[t] = e, this.valuesStart[t] = this.valuesRepeat[t]
                        }
                },
                Z = function() {
                    this.repeat > 0 && (this.options.repeat = this.repeat), this.options.yoyo && !0 === this.reversed && (G.call(this), this.reversed = !1), this.playing = !1, setTimeout((function() {
                        !o.length && a && (M(a), a = null)
                    }), 64)
                },
                $ = function(t) {
                    var e = i.getAttribute("data-tweening");
                    e && "scroll" === e && t.preventDefault()
                },
                K = function() {
                    "scroll" in this.valuesEnd && i.getAttribute("data-tweening") && i.removeAttribute("data-tweening")
                },
                J = function() {
                    "scroll" in this.valuesEnd && !i.getAttribute("data-tweening") && i.setAttribute("data-tweening", "scroll")
                },
                tt = function(t) {
                    return "function" == typeof t ? t : "string" == typeof t ? nt[t] : void 0
                },
                et = function() {
                    var t = {},
                        n = function(t) {
                            if (t) {
                                for (var e = t.style.cssText.replace(/\s/g, "").split(";"), n = {}, r = 0, i = e.length; r < i; r++)
                                    if (/transform/i.test(e[r]))
                                        for (var o = e[r].split(":")[1].split(")"), a = 0, u = o.length - 1; a < u; a++) {
                                            var s = o[a].split("("),
                                                c = s[0],
                                                h = s[1]; - 1 !== l.indexOf(c) && (n[c] = /translate3d/.test(c) ? h.split(",") : h)
                                        }
                                return n
                            }
                        }(this.element),
                        r = ["rotate", "skew"],
                        i = ["X", "Y", "Z"];
                    for (var o in this.valuesStart)
                        if (-1 !== l.indexOf(o)) {
                            var a = /(rotate|translate|scale)$/.test(o);
                            if (/translate/.test(o) && "translate" !== o) t.translate3d = n.translate3d || f[o];
                            else if (a) t[o] = n[o] || f[o];
                            else if (!a && /rotate|skew/.test(o))
                                for (var u = 0; u < 2; u++)
                                    for (var s = 0; s < 3; s++) {
                                        var c = r[u] + i[s]; - 1 !== l.indexOf(c) && c in this.valuesStart && (t[c] = n[c] || f[c])
                                    }
                        } else if ("scroll" !== o)
                        if ("opacity" === o && k) {
                            var p = F(this.element, "filter");
                            t.opacity = "number" == typeof p ? p : f.opacity
                        } else -1 !== h.indexOf(o) ? t[o] = F(this.element, o) || d[o] : t[o] = o in W ? W[o].call(this, o, this.valuesStart[o]) : 0;
                    else t[o] = this.element === O ? e.pageYOffset || O.scrollTop : this.element.scrollTop;
                    for (var g in n) - 1 === l.indexOf(g) || g in this.valuesStart || (t[g] = n[g] || f[g]);
                    if (this.valuesStart = {}, Q.call(this, t, "start"), P in this.valuesEnd)
                        for (var D in this.valuesStart[P])
                            if ("perspective" !== D)
                                if ("object" == typeof this.valuesStart[P][D])
                                    for (var m in this.valuesStart[P][D]) void 0 === this.valuesEnd[P][D] && (this.valuesEnd[P][D] = {}), "number" == typeof this.valuesStart[P][D][m] && void 0 === this.valuesEnd[P][D][m] && (this.valuesEnd[P][D][m] = this.valuesStart[P][D][m]);
                                else "number" == typeof this.valuesStart[P][D] && void 0 === this.valuesEnd[P][D] && (this.valuesEnd[P][D] = this.valuesStart[P][D])
                },
                nt = e.Easing = {};
            nt.linear = function(t) {
                return t
            }, nt.easingSinusoidalIn = function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, nt.easingSinusoidalOut = function(t) {
                return Math.sin(t * Math.PI / 2)
            }, nt.easingSinusoidalInOut = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }, nt.easingQuadraticIn = function(t) {
                return t * t
            }, nt.easingQuadraticOut = function(t) {
                return t * (2 - t)
            }, nt.easingQuadraticInOut = function(t) {
                return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
            }, nt.easingCubicIn = function(t) {
                return t * t * t
            }, nt.easingCubicOut = function(t) {
                return --t * t * t + 1
            }, nt.easingCubicInOut = function(t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }, nt.easingQuarticIn = function(t) {
                return t * t * t * t
            }, nt.easingQuarticOut = function(t) {
                return 1 - --t * t * t * t
            }, nt.easingQuarticInOut = function(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
            }, nt.easingQuinticIn = function(t) {
                return t * t * t * t * t
            }, nt.easingQuinticOut = function(t) {
                return 1 + --t * t * t * t * t
            }, nt.easingQuinticInOut = function(t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
            }, nt.easingCircularIn = function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }, nt.easingCircularOut = function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }, nt.easingCircularInOut = function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, nt.easingExponentialIn = function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }, nt.easingExponentialOut = function(t) {
                return 1 - Math.pow(2, -10 * t)
            }, nt.easingExponentialInOut = function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }, nt.easingBackIn = function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, nt.easingBackOut = function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, nt.easingBackInOut = function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, nt.easingElasticIn = function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4))
            }, nt.easingElasticOut = function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, n * Math.pow(2, -10 * t) * Math.sin((t - e) * Math.PI * 2 / .4) + 1)
            }, nt.easingElasticInOut = function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4) * .5 + 1)
            }, nt.easingBounceIn = function(t) {
                return 1 - nt.easingBounceOut(1 - t)
            }, nt.easingBounceOut = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, nt.easingBounceInOut = function(t) {
                return t < .5 ? .5 * nt.easingBounceIn(2 * t) : .5 * nt.easingBounceOut(2 * t - 1) + .5
            };
            var rt = function(t, e, n, r) {
                    for (var i in this.element = "scroll" in n && null == t ? O : t, this.playing = !1, this.reversed = !1, this.paused = !1, this._startTime = null, this._pauseTime = null, this._startFired = !1, this.options = {}, r) this.options[i] = r[i];
                    if (this.options.rpr = r.rpr || !1, this.valuesRepeat = {}, this.valuesEnd = {}, this.valuesStart = {}, Q.call(this, n, "end"), this.options.rpr ? this.valuesStart = e : Q.call(this, e, "start"), void 0 !== this.options.perspective && P in this.valuesEnd) {
                        var o = "perspective(" + parseInt(this.options.perspective) + "px)";
                        this.valuesEnd[P].perspective = o
                    }
                    for (var a in this.valuesEnd) a in U && !this.options.rpr && U[a].call(this);
                    this.options.chain = [], this.options.easing = tt(r.easing) || nt[D.easing] || nt.linear, this.options.repeat = r.repeat || D.repeat, this.options.repeatDelay = r.repeatDelay || D.repeatDelay, this.options.yoyo = r.yoyo || D.yoyo, this.options.duration = r.duration || D.duration, this.options.delay = r.delay || D.delay, this.repeat = this.options.repeat
                },
                it = (rt.prototype = {
                    start: function(t) {
                        for (var e in J.call(this), this.options.rpr && et.apply(this), q.apply(this), this.valuesEnd) e in U && this.options.rpr && U[e].call(this), this.valuesRepeat[e] = this.valuesStart[e];
                        return o.push(this), this.playing = !0, this.paused = !1, this._startFired = !1, this._startTime = t || r.now(), this._startTime += this.options.delay, this._startFired || (this.options.start && this.options.start.call(this), this._startFired = !0), !a && j(), this
                    },
                    play: function() {
                        var t;
                        return this.paused && this.playing && (this.paused = !1, this.options.resume && this.options.resume.call(this), this._startTime += r.now() - this._pauseTime, t = this, o.push(t), !a && j()), this
                    },
                    resume: function() {
                        return this.play()
                    },
                    pause: function() {
                        return !this.paused && this.playing && (E(this), this.paused = !0, this._pauseTime = r.now(), this.options.pause && this.options.pause.call(this)), this
                    },
                    stop: function() {
                        return !this.paused && this.playing && (E(this), this.playing = !1, this.paused = !1, K.call(this), this.options.stop && this.options.stop.call(this), this.stopChainedTweens(), Z.call(this)), this
                    },
                    chain: function() {
                        return this.options.chain = arguments, this
                    },
                    stopChainedTweens: function() {
                        for (var t = 0, e = this.options.chain.length; t < e; t++) this.options.chain[t].stop()
                    }
                }, function(t, e, n) {
                    this.tweens = [];
                    for (var r = [], i = 0, o = t.length; i < o; i++) r[i] = n || {}, n.delay = n.delay || D.delay, r[i].delay = i > 0 ? n.delay + (n.offset || D.offset) : n.delay, this.tweens.push(at(t[i], e, r[i]))
                }),
                ot = function(t, e, n, r) {
                    this.tweens = [];
                    for (var i = [], o = 0, a = t.length; o < a; o++) i[o] = r || {}, r.delay = r.delay || D.delay, i[o].delay = o > 0 ? r.delay + (r.offset || D.offset) : r.delay, this.tweens.push(ut(t[o], e, n, i[o]))
                },
                at = (it.prototype = ot.prototype = {
                    start: function(t) {
                        t = t || r.now();
                        for (var e = 0, n = this.tweens.length; e < n; e++) this.tweens[e].start(t);
                        return this
                    },
                    stop: function() {
                        for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].stop();
                        return this
                    },
                    pause: function() {
                        for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].pause();
                        return this
                    },
                    chain: function() {
                        return this.tweens[this.tweens.length - 1].options.chain = arguments, this
                    },
                    play: function() {
                        for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].play();
                        return this
                    },
                    resume: function() {
                        return this.play()
                    }
                }, function(t, e, n) {
                    return (n = n || {}).rpr = !0, new rt(y(t), e, e, n)
                }),
                ut = function(t, e, n, r) {
                    return r = r || {}, new rt(y(t), e, n, r)
                };
            return document.addEventListener(T, $, !1), document.addEventListener("mouseenter", $, !1), {
                property: v,
                getPrefix: m,
                selector: y,
                processEasing: tt,
                defaultOptions: D,
                to: at,
                fromTo: ut,
                allTo: function(t, e, n) {
                    return new it(y(t, !0), e, n)
                },
                allFromTo: function(t, e, n, r) {
                    return new ot(y(t, !0), e, n, r)
                },
                ticker: j,
                tick: a,
                tweens: o,
                update: H,
                dom: z,
                parseProperty: V,
                prepareStart: W,
                crossCheck: U,
                Tween: rt,
                truD: x,
                truC: b,
                rth: w,
                htr: C,
                getCurrentStyle: F
            }
        }) ? r.apply(e, i) : r) || (t.exports = o)
    }).call(this, n(8))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(4),
        i = n(1),
        o = n(2),
        a = n(6);
    n(9), a.fromTo("#intro-triangle", {
        path: "#intro-triangle"
    }, {
        path: "#intro-circle"
    }, {
        morphIndex: 20,
        delay: 1100,
        duration: 300
    }).start(), i.TweenMax.to(".intro__shapes", 1, {
        scale: 1,
        autoAlpha: 1,
        rotate: 360
    });
    var u = getComputedStyle(document.querySelector(".intro__circle--1")).getPropertyValue("--circle-size"),
        s = new i.TimelineMax({
            delay: 1.8
        }),
        l = [1, 1.5, 2, 2.5, 3, 3.5];
    s.addLabel("start", 0), s.set(".about__arrow", {
        y: 50
    }), s.to(".intro__circles", .2, {
        scale: 1
    }), s.set(".intro__shapes", {
        autoAlpha: 0
    }), s.to(".intro__circle--2", .5, {
        "--circle-size": o.mapCssLength(u, (function(t) {
            return t * l[1]
        }))
    }), s.to(".intro__circle--3", .5, {
        "--circle-size": o.mapCssLength(u, (function(t) {
            return t * l[2]
        }))
    }, "-=0.5"), s.to(".intro__circle--4", .5, {
        "--circle-size": o.mapCssLength(u, (function(t) {
            return t * l[3]
        }))
    }, "-=0.5"), s.to(".intro__circle--5", .7, {
        "--circle-size": o.mapCssLength(u, (function(t) {
            return t * l[4]
        }))
    }, "-=0.5"), s.to(".intro__circle--6", 1, {
        "--circle-size": o.mapCssLength(u, (function(t) {
            return t * l[5]
        }))
    }, "-=0.5"), s.addLabel("scale-start", 1), document.querySelectorAll(".intro__circle").forEach((function(t, e) {
        s.to(t, .7, {
            "--circle-size": o.mapCssLength(u, (function(t) {
                return t * l[e] * 5
            }))
        }, "-=0.5")
    })), s.to(".intro__circles", 2, {
        xPercent: 50,
        yPercent: 50
    }, "scale-start"), s.to(".intro__circle--1", 1, {
        scale: 30
    }), s.to(".intro__circles", 1, {
        xPercent: 0,
        yPercent: 0
    }, "-=0.5"), s.to(".intro__circles", s.duration() - 1, {
        rotate: 720,
        expo: r.Expo.easeIn
    }, "start"), s.to(".about__arrow", .5, {
        opacity: 1,
        y: 0,
        ease: r.Expo.easeOut
    }, "-=1"), e.introDuration = s.duration()
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    (function(r) {
        var i, o, a;
        o = [n(6)], void 0 === (a = "function" == typeof(i = function(t) {
            "use strict";
            var e = void 0 !== r ? r : window,
                n = t,
                i = n.dom,
                o = n.parseProperty,
                a = n.prepareStart,
                u = n.getCurrentStyle,
                s = (n.truC, n.truD, n.crossCheck),
                l = e.Interpolate.number,
                c = (e.Interpolate.unit, e.Interpolate.color, n.defaultOptions),
                h = null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) && parseFloat(RegExp.$1);
            if (!(h && h < 9)) {
                var f = /(m[^(h|v|l)]*|[vhl][^(v|h|l|z)]*)/gim,
                    p = e.Interpolate.coords = function(t, e, n, r) {
                        for (var i = [], o = 0; o < n; o++) {
                            i[o] = [];
                            for (var a = 0; a < 2; a++) i[o].push((1e3 * (t[o][a] + (e[o][a] - t[o][a]) * r) >> 0) / 1e3)
                        }
                        return i
                    },
                    d = function(t, e, n) {
                        for (var r, i, o, a, u, s = [], l = n.length, c = 0; c < l; c++) r = Math.abs(n[c][0] - e.x), i = Math.abs(n[c][1] - e.y), s.push(Math.sqrt(r * r + i * i));
                        return u = n[(o = s.indexOf(Math.min.apply(null, s))) - 1] ? o - 1 : l - 1, a = n[o + 1] ? o + 1 : 0, Math.abs(n[u][0] - e.x) < t && Math.abs(n[u][1] - e.y) < t ? n[u] : Math.abs(n[a][0] - e.x) < t && Math.abs(n[a][1] - e.y) < t ? n[a] : Math.abs(n[o][0] - e.x) < t && Math.abs(n[o][1] - e.y) < t ? n[o] : [e.x, e.y]
                    },
                    g = function(t) {
                        for (var e, n, r = t.match(f), i = r.length, o = 0, a = 0, u = 0; u < i; u++) r[u] = r[u], e = r[u][0], n = new RegExp(e + "[^\\d|\\-]*", "i"), r[u] = r[u].replace(/(^|[^,])\s*-/g, "$1,-").replace(/(\s+\,|\s|\,)/g, ",").replace(n, "").split(","), r[u][0] = parseFloat(r[u][0]), r[u][1] = parseFloat(r[u][1]), 0 === u ? (o += r[u][0], a += r[u][1]) : (o = r[u - 1][0], a = r[u - 1][1], /l/i.test(e) ? (r[u][0] = "l" === e ? r[u][0] + o : r[u][0], r[u][1] = "l" === e ? r[u][1] + a : r[u][1]) : /h/i.test(e) ? (r[u][0] = "h" === e ? r[u][0] + o : r[u][0], r[u][1] = a) : /v/i.test(e) && (r[u][0] = o, r[u][1] = "v" === e ? r[u][0] + a : r[u][0]));
                        return r
                    },
                    D = function(t) {
                        return t.split(/z/i).shift() + "z"
                    },
                    m = function(t) {
                        var e = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                            n = "object" == typeof t ? t.getAttribute("d") : t;
                        return e.setAttribute("d", n), e
                    },
                    v = function(t) {
                        var e = {},
                            n = "object" == typeof t ? t : /^\.|^\#/.test(t) ? document.querySelector(t) : null;
                        return n && /path|glyph/.test(n.tagName) ? (e.e = function(t) {
                            if ("glyph" === t.tagName) {
                                var e = m(t);
                                return t.parentNode.appendChild(e), e
                            }
                            return t
                        }(n), e.o = n.getAttribute("d")) : !n && /[a-z][^a-z]*/gi.test(t) && (e.e = m(t.trim()), e.o = t), e
                    },
                    y = function(t, e) {
                        var n, r, i, o, a, u, s, l, c, h, f = [],
                            p = this.options.morphIndex;
                        if (this._isPolygon)
                            if (t = g(t), e = g(e), t.length !== e.length) {
                                (o = Math.max(t.length, e.length)) === e.length ? (a = t, u = e) : (a = e, u = t), a.length, l = (s = m("M" + a.join("L") + "z")).getTotalLength() / o;
                                for (var D = 0; D < o; D++) c = s.getPointAtLength(l * D), h = d(l, c, a), f.push([h[0], h[1]]);
                                o === e.length ? (r = u, n = f) : (n = u, r = f)
                            } else n = t, r = e;
                        else i = function(t, e, n) {
                            for (var r = [], i = [], o = t.getTotalLength(), a = e.getTotalLength(), u = 0, s = Math.max(o, a) / n * n;
                                (u += n) < s;) r.push([t.getPointAtLength(u).x, t.getPointAtLength(u).y]), i.push([e.getPointAtLength(u).x, e.getPointAtLength(u).y]);
                            return [r, i]
                        }(t = m(t), e = m(e), this.options.morphPrecision), n = i[0], o = (r = i[1]).length;
                        if (this.options.reverseFirstPath && n.reverse(), this.options.reverseSecondPath && r.reverse(), p) {
                            var v = r.splice(p, o - p);
                            r = v.concat(r)
                        }
                        return t = e = null, [n, r]
                    };
                c.morphPrecision = 15, o.path = function(t, e) {
                    return "path" in i || (i.path = function(t, e, n, r, i) {
                        t.setAttribute("d", 1 === i ? r.o : "M" + p(n.d, r.d, r.d.length, i) + "Z")
                    }), v(e)
                }, a.path = function(t) {
                    return this.element.getAttribute("d")
                }, s.path = function() {
                    var t, e = D(this.valuesStart.path.o),
                        n = D(this.valuesEnd.path.o);
                    this.options.morphPrecision = this.options && "morphPrecision" in this.options ? parseInt(this.options.morphPrecision) : c.morphPrecision, this._isPolygon = !/[CSQTA]/i.test(e) && !/[CSQTA]/i.test(n), t = y.apply(this, [e, n]), this.valuesStart.path.d = t[0], this.valuesEnd.path.d = t[1]
                };
                var _ = function(t, e) {
                        return parseFloat(t) / 100 * e
                    },
                    x = function(t) {
                        return /rect/.test(t.tagName) ? function(t) {
                            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height")
                        }(t) : /circle/.test(t.tagName) ? function(t) {
                            var e = t.getAttribute("r");
                            return 2 * Math.PI * e
                        }(t) : /ellipse/.test(t.tagName) ? function(t) {
                            var e = 2 * t.getAttribute("rx"),
                                n = 2 * t.getAttribute("ry");
                            return Math.sqrt(.5 * (e * e + n * n)) * (2 * Math.PI) / 2
                        }(t) : /polygon|polyline/.test(t.tagName) ? function(t) {
                            var e = t.getAttribute("points").split(" "),
                                n = 0;
                            if (e.length > 1) {
                                var r = function(t) {
                                        var e = t.split(",");
                                        if (2 == e.length && !isNaN(e[0]) && !isNaN(e[1])) return [parseFloat(e[0]), parseFloat(e[1])]
                                    },
                                    i = function(t, e) {
                                        return null != t && null != e ? Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2)) : 0
                                    };
                                if (e.length > 2)
                                    for (var o = 0; o < e.length - 1; o++) n += i(r(e[o]), r(e[o + 1]));
                                n += "polygon" === t.tagName ? i(r(e[0]), r(e[e.length - 1])) : 0
                            }
                            return n
                        }(t) : /line/.test(t.tagName) ? function(t) {
                            var e = t.getAttribute("x1"),
                                n = t.getAttribute("x2"),
                                r = t.getAttribute("y1"),
                                i = t.getAttribute("y2");
                            return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - r, 2))
                        }(t) : void 0
                    },
                    b = function(t, e) {
                        var n, r, i, o, a = /path|glyph/.test(t.tagName) ? t.getTotalLength() : x(t);
                        return e instanceof Object ? e : ("string" == typeof e ? (e = e.split(/\,|\s/), n = /%/.test(e[0]) ? _(e[0].trim(), a) : parseFloat(e[0]), r = /%/.test(e[1]) ? _(e[1].trim(), a) : parseFloat(e[1])) : void 0 === e && (o = parseFloat(u(t, "stroke-dashoffset")), i = u(t, "stroke-dasharray").split(/\,/), n = 0 - o, r = parseFloat(i[0]) + n || a), {
                            s: n,
                            e: r,
                            l: a
                        })
                    };
                o.draw = function(t, e) {
                    return "draw" in i || (i.draw = function(t, e, n, r, i) {
                        var o = (100 * n.l >> 0) / 100,
                            a = 0 - (100 * l(n.s, r.s, i) >> 0) / 100,
                            u = (100 * l(n.e, r.e, i) >> 0) / 100 + a;
                        t.style.strokeDashoffset = a + "px", t.style.strokeDasharray = (100 * (u < 1 ? 0 : u) >> 0) / 100 + "px, " + o + "px"
                    }), b(this.element, e)
                }, a.draw = function() {
                    return b(this.element)
                };
                var w = function(t, e) {
                        return /[a-zA-Z]/.test(t) && !/px/.test(t) ? t.replace(/top|left/, 0).replace(/right|bottom/, 100).replace(/center|middle/, 50) : /%/.test(t) ? e.x + parseFloat(t) * e.width / 100 : parseFloat(t)
                    },
                    C = function(t) {
                        var e = t && /\)/.test(t) ? t.substring(0, t.length - 1).split(/\)\s|\)/) : "none",
                            n = {};
                        if (e instanceof Array)
                            for (var r = 0, i = e.length; r < i; r++) {
                                var o = e[r].trim().split("(");
                                n[o[0]] = o[1]
                            }
                        return n
                    },
                    F = function(t) {
                        var e, n = {},
                            r = this.element.getBBox(),
                            i = r.x + r.width / 2,
                            o = r.y + r.height / 2,
                            a = this.options.transformOrigin;
                        for (var u in (a = a ? a instanceof Array ? a : a.split(/\s/) : [i, o])[0] = "number" == typeof a[0] ? a[0] : w(a[0], r), a[1] = "number" == typeof a[1] ? a[1] : w(a[1], r), n.origin = a, t) "rotate" === u ? n[u] = "number" == typeof t[u] ? t[u] : t[u] instanceof Array ? t[u][0] : 1 * t[u].split(/\s/)[0] : "translate" === u ? (e = t[u] instanceof Array ? t[u] : /\,|\s/.test(t[u]) ? t[u].split(",") : [t[u], 0], n[u] = [1 * e[0] || 0, 1 * e[1] || 0]) : /skew/.test(u) ? n[u] = 1 * t[u] || 0 : "scale" === u && (n[u] = parseFloat(t[u]) || 1);
                        return n
                    };
                return o.svgTransform = function(t, e) {
                    return "svgTransform" in i || (i.svgTransform = function(t, e, n, r, i) {
                        var o, a = 0,
                            u = 0,
                            s = Math.PI / 180,
                            c = "scale" in r ? l(n.scale, r.scale, i) : 1,
                            h = "rotate" in r ? l(n.rotate, r.rotate, i) : 0,
                            f = Math.sin(h * s),
                            p = Math.cos(h * s),
                            d = "skewX" in r ? l(n.skewX, r.skewX, i) : 0,
                            g = "skewY" in r ? l(n.skewY, r.skewY, i) : 0,
                            D = h || d || g || 1 !== c || 0;
                        a -= D ? r.origin[0] : 0, u -= D ? r.origin[1] : 0, a *= c, u *= c, u += g ? a * Math.tan(g * s) : 0, o = p * (a += d ? u * Math.tan(d * s) : 0) - f * u, u = h ? f * a + p * u : u, a = h ? o : a, a += "translate" in r ? l(n.translate[0], r.translate[0], i) : 0, u += "translate" in r ? l(n.translate[1], r.translate[1], i) : 0, a += D ? r.origin[0] : 0, u += D ? r.origin[1] : 0, t.setAttribute("transform", (a || u ? "translate(" + (1e3 * a >> 0) / 1e3 + (u ? "," + (1e3 * u >> 0) / 1e3 : "") + ")" : "") + (h ? "rotate(" + (1e3 * h >> 0) / 1e3 + ")" : "") + (d ? "skewX(" + (1e3 * d >> 0) / 1e3 + ")" : "") + (g ? "skewY(" + (1e3 * g >> 0) / 1e3 + ")" : "") + (1 !== c ? "scale(" + (1e3 * c >> 0) / 1e3 + ")" : ""))
                    }), F.call(this, e)
                }, a.svgTransform = function(t, e) {
                    var n = {},
                        r = C(this.element.getAttribute("transform"));
                    for (var i in e) n[i] = i in r ? r[i] : "scale" === i ? 1 : 0;
                    return n
                }, s.svgTransform = function() {
                    if (this.options.rpr) {
                        var t = this.valuesStart.svgTransform,
                            e = this.valuesEnd.svgTransform,
                            n = F.call(this, C(this.element.getAttribute("transform")));
                        for (var r in n) t[r] = n[r];
                        var i = this.element.ownerSVGElement,
                            o = i.createSVGTransformFromMatrix(i.createSVGMatrix().translate(-t.origin[0], -t.origin[1]).translate("translate" in t ? t.translate[0] : 0, "translate" in t ? t.translate[1] : 0).rotate(t.rotate || 0).skewX(t.skewX || 0).skewY(t.skewY || 0).scale(t.scale || 1).translate(+t.origin[0], +t.origin[1]));
                        for (var r in t.translate = [o.matrix.e, o.matrix.f], t) r in e || (e[r] = t[r])
                    }
                }, this
            }
        }) ? i.apply(e, o) : i) || (t.exports = a)
    }).call(this, n(8))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, n(11), n(12), n(5), n(13), n(14), n(15), n(7), n(16), n(17), n(18), n(19), n(20)
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(4);
    Splitting(), r.gsap.registerPlugin(i.CSSPlugin, i.MotionPathPlugin)
}, function(t, e) {
    var n = document.querySelector(".cursor");
    document.addEventListener("mousemove", (function(t) {
        n.setAttribute("style", "--cursor-x: " + t.clientX + "px; --cursor-y: " + t.clientY + "px;")
    }))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(5),
        i = document.querySelector("#brand"),
        o = document.querySelector("#nav-button"),
        a = {
            intro: "button button--primary",
            about: "button button--primary",
            chartipedia: "button button--primary",
            community: "button button--secondary",
            benefits: "button button--primary",
            getstarted: "button button--secondary"
        },
        u = {
            intro: "brand brand--secondary",
            about: "brand brand--secondary",
            chartipedia: "brand brand--secondary",
            community: "brand brand--primary",
            benefits: "brand brand--primary",
            getstarted: "brand brand--secondary"
        };
    r.sectionStore.subscribe((function(t) {
        o.setAttribute("class", a[t.key]), i.setAttribute("class", u[t.key])
    }))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(5),
        i = Array.from(document.querySelectorAll(".toc__item")),
        o = i[0];
    r.sectionStore.subscribe((function(t) {
        o.classList.remove("toc__item--active"), o = i[t.index], i.forEach((function(e, n) {
            n <= t.index ? e.classList.remove("toc__item--upcoming") : e.classList.add("toc__item--upcoming")
        })), o.classList.add("toc__item--active")
    }))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(2),
        o = new ScrollMagic.Controller,
        a = new r.TimelineMax,
        u = document.querySelectorAll(".community__part");
    a.set(".community__count", {
        autoAlpha: 0,
        y: -50
    }), a.set(".community__count-description", {
        autoAlpha: 0,
        y: 50
    }), a.set([".community-part-1", ".community-part-2", ".community__circle-icon--2"], {
        autoAlpha: 0
    }), a.to(".community__bg", 4, {
        scale: 40
    }), a.to(".community-heading", .3, {
        autoAlpha: 1
    }, "-=4"), a.staggerFrom(".community .circle", 2, {
        scale: 0,
        stagger: {
            from: "center",
            amount: 2
        },
        delay: -4
    }), a.to(".community-heading", 2, {
        xPercent: -50,
        autoAlpha: 0
    }, "+=1"), u.forEach((function(t, e) {
        a.addLabel("start-part-" + e, "+=0"), a.to(".community-part-" + e, .1, {
            autoAlpha: 1,
            y: 0
        }), i.typeAnimation(t, .04, a), a.from(t, 4, {
            y: 100
        }, "start-part-" + e), a.to(t, 3, {
            autoAlpha: 1
        }), a.addLabel("start-hiding-part-" + e, "+=0"), i.typeAnimation(t, .02, a, !0), a.to(t, 4, {
            y: -100
        }, "start-hiding-part-" + e), 1 === e && a.to(".community__circle-icon--2", .1, {
            autoAlpha: 1
        }), e !== u.length - 1 && a.to(".community-part-" + e, 1, {
            autoAlpha: 0,
            y: -10
        }, "-=1")
    })), a.to(".community__count-container:not(.community__count-container--mobile)", .5, {
        "--item-size": "12vw"
    }, "start-part-0"), a.to(".community__count-container--mobile", .5, {
        "--item-size": "20vh"
    }, "start-part-0"), a.to(".community__count", .3, {
        autoAlpha: 1,
        y: 0
    }, "start-part-0+=0.5"), a.to(".community__count-description", .2, {
        autoAlpha: 1,
        y: 0
    }, "start-part-0+=0.7"), a.to(".community__count-container:not(.community__count-container--mobile)", 6, {
        x: "50vw"
    }, "start-part-1-=2"), a.to(".community__count-container--mobile", 3, {
        y: "2vh",
        x: 0
    }, "start-part-1-=1"), a.to([".community__count", ".community__count-description"], .5, {
        autoAlpha: 0
    }, "start-part-1");
    var s = a.duration();
    document.querySelectorAll(".community__avatar, .community__circle-icon").forEach((function(t) {
        a.to(t, s, {
            "--item-angle": +getComputedStyle(t).getPropertyValue("--item-angle") + 720
        }, "start-part-0")
    })), new ScrollMagic.Scene({
        triggerElement: ".community",
        triggerHook: "onLeave",
        duration: "700%"
    }).setTween(a).setPin(".community").addTo(o), new ScrollMagic.Scene({
        triggerElement: ".community",
        triggerHook: 0
    }).setTween(i.typeAnimation(".community-heading", .05)).addTo(o), new ScrollMagic.Scene({
        triggerElement: "#getstarted",
        triggerHook: "onEnter"
    }).setTween(r.TweenMax.to(".community__count-container", .5, {
        scale: 20
    })).setPin(".community").addTo(o).on("start", (function(t) {
        "FORWARD" === t.scrollDirection && (i.isSafari() || window.scrollTo({
            top: i.getOffsetHeight(document.getElementById("getstarted")),
            behavior: "smooth"
        }))
    }))
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(4),
        o = n(2),
        a = function(t) {
            return function(e) {
                return void 0 === e && (e = document), e.querySelector(t)
            }
        },
        u = a(".browser-window"),
        s = a(".benefit__title"),
        l = a(".benefit__h-line"),
        c = a(".benefit__panel"),
        h = a(".benefit__images"),
        f = a(".benefits__right-bg")(),
        p = Array.from(document.querySelectorAll(".benefits__dot")),
        d = function(t) {
            return p.forEach((function(e, n) {
                return n === t ? e.classList.add("benefits__dot--active") : e.classList.remove("benefits__dot--active")
            }))
        },
        g = document.querySelector(".benefit--1"),
        D = document.querySelector(".benefit--2"),
        m = document.querySelector(".benefit--3");
    if (window.innerWidth >= 768) {
        var v = new ScrollMagic.Controller;
        (_ = new r.TimelineMax).set(u(D), {
            autoAlpha: 0,
            y: 500
        }), _.set(s(D), {
            autoAlpha: 0,
            x: 500
        }), _.set(l(D), {
            autoAlpha: 0,
            scaleX: 0
        }), _.set(c(D), {
            autoAlpha: 0,
            x: 500
        }), _.set(f, {
            width: 0,
            y: "-50%"
        }), _.set(u(m), {
            autoAlpha: 0,
            y: "100%"
        }), _.set(s(m), {
            autoAlpha: 0,
            x: 500
        }), _.set(l(m), {
            autoAlpha: 0,
            scaleX: 0
        }), _.set(c(m), {
            autoAlpha: 0,
            x: 500
        }), _.to(f, 1.5, {
            width: "40%",
            ease: i.Expo.easeOut
        }), _.from(".benefits__triangle", .5, {
            autoAlpha: 0,
            motionPath: {
                path: [{
                    yPercent: -150,
                    rotate: 140
                }]
            }
        }, "-=0.5"), new ScrollMagic.Scene({
            triggerElement: ".benefits",
            triggerHook: "onEnter",
            offset: "100%",
            duration: "100%"
        }).setTween(_).addTo(v), (_ = new r.TimelineMax).addLabel("start", 0), _.call((function() {
            return d(0)
        })), _.from(u(g), 1, {
            y: "-200%",
            autoAlpha: 0
        }), _.from(s(g), 2, {
            x: "150%"
        }), _.from(l(g), 1, {
            width: 0
        }), _.from(c(g), 1, {
            x: "150%"
        }), _.to(l(g), 1, {
            scaleX: 0,
            autoAlpha: 0
        }, "+=5"), _.to(u(g), 1, {
            y: "-200%",
            autoAlpha: 0
        }), _.to(s(g), 1, {
            x: "150%"
        }), _.to(c(g), 1, {
            x: "150%"
        }), _.call((function() {
            return d(0)
        })), _.call((function() {
            return d(1)
        })), _.to(u(D), 1, {
            autoAlpha: 1,
            y: 0
        }), _.to(s(D), 1, {
            autoAlpha: 1,
            x: 0
        }), _.to(l(D), 1, {
            autoAlpha: 1,
            scaleX: 1
        }), _.to(c(D), 1, {
            autoAlpha: 1,
            x: 0
        }), _.to(l(D), 1, {
            autoAlpha: 0,
            scaleX: 0
        }, "+=5"), _.to(c(D), 1, {
            autoAlpha: 0,
            x: 500
        }), _.to(s(D), 1, {
            autoAlpha: 0,
            x: 500
        }), _.to(u(D), 1, {
            autoAlpha: 0,
            y: 500
        }), _.call((function() {
            return d(1)
        })), _.call((function() {
            return d(2)
        })), _.to(u(m), 1, {
            autoAlpha: 1,
            y: 0
        }), _.to(s(m), 1, {
            autoAlpha: 1,
            x: 0
        }), _.to(l(m), 1, {
            autoAlpha: 1,
            scaleX: 1
        }), _.to(c(m), 1, {
            autoAlpha: 1,
            x: 0
        }), _.to(".benefits__triangle", _.totalDuration(), {
            motionPath: {
                path: [{
                    xPercent: 20,
                    yPercent: 10,
                    rotate: 180,
                    scale: 1.5
                }, {
                    xPercent: 30,
                    yPercent: 30,
                    rotate: 250,
                    scale: .8
                }, {
                    xPercent: 100,
                    yPercent: 50,
                    rotate: 430,
                    scale: 1.5
                }]
            }
        }, "start"), _.to(h(m), 1.5, {
            xPercent: -100,
            ease: i.Expo.easeOut
        }, "+=2"), _.to(l(m), 1, {
            autoAlpha: 0,
            scaleX: 0
        }, "+=4"), _.to(c(m), 1, {
            autoAlpha: 0,
            x: 500
        }), _.to([s(m), ".benefits__dots"], 1, {
            autoAlpha: 0,
            x: 500
        }), _.to(u(m), 1, {
            autoAlpha: 0,
            y: -500
        }), _.to(".benefits__triangle", 2, {
            autoAlpha: 0,
            motionPath: {
                path: [{
                    xPercent: 0,
                    yPercent: -150,
                    rotate: 520,
                    scale: 1
                }]
            }
        }, "-=0.5"), _.to(".benefits__right-bg", 3, {
            width: "100%"
        }, "-=0.5");
        var y = new ScrollMagic.Scene({
            triggerElement: ".benefits",
            triggerHook: "onLeave",
            duration: "350%"
        }).setTween(_).setPin(".benefits").addTo(v);
        document.querySelectorAll(".benefits__dot").forEach((function(t, e) {
            var n = [.2, .44, .73];
            t.addEventListener("click", (function() {
                window.scrollTo({
                    top: y.scrollOffset() + n[e] * y.duration(),
                    behavior: "smooth"
                })
            }))
        })), y.on("end", (function(t) {
            if ("FORWARD" === t.scrollDirection) {
                var e = o.getOffsetHeight(document.getElementById("community"));
                window.scrollY < e && window.scrollTo({
                    top: e,
                    behavior: "smooth"
                })
            }
        }))
    } else {
        var _;
        (_ = new r.TimelineMax).to(h(m), 1.5, {
            xPercent: -100,
            ease: i.Expo.easeInOut
        }), new ScrollMagic.Scene({
            triggerElement: ".community",
            triggerHook: "onEnter",
            duration: "30%",
            offset: -100
        }).setTween(_).addTo(new ScrollMagic.Controller)
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(2),
        o = n(7),
        a = i.getForwardAnimation("#about__triangle-1"),
        u = i.getBackAnimation("#about__triangle-1"),
        s = i.getForwardAnimation("#about__triangle-2"),
        l = i.getBackAnimation("#about__triangle-2"),
        c = i.getForwardAnimation("#about__circle-1"),
        h = i.getBackAnimation("#about__circle-1"),
        f = i.getForwardAnimation("#about__circle-2"),
        p = i.getBackAnimation("#about__circle-2");
    setTimeout((function() {
        return function t() {
            a.start(), setTimeout((function() {
                return c.start()
            }), 500), setTimeout((function() {
                u.start(), setTimeout((function() {
                    return h.start()
                }), 500)
            }), 3500), setTimeout((function() {
                s.start(), setTimeout((function() {
                    return f.start()
                }), 500)
            }), 7e3), setTimeout((function() {
                l.start(), setTimeout((function() {
                    return p.start()
                }), 500)
            }), 10500), setTimeout((function() {
                t()
            }), 14e3)
        }()
    }), 1e3 * (o.introDuration - 1));
    var d = new r.TimelineMax({
        delay: o.introDuration - .5
    });
    i.typeAnimation(".about__heading", .05, d), d.fromTo(".about__description", .5, {
        y: 200
    }, {
        y: 0,
        autoAlpha: 1
    }, "-=0.5")
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(4),
        o = n(2),
        a = new ScrollMagic.Controller,
        u = new r.TimelineMax,
        s = window.innerWidth;
    u.to(".chartipedia__heading", .3, o.isSafari() ? {
        css: {
            zoom: 270
        },
        ease: i.Expo.easeIn
    } : {
        transform: "scale(270) translateX(" + (s > 1024 ? "-3px" : "-1px") + ")",
        ease: i.Expo.easeIn
    });
    new ScrollMagic.Scene({
        triggerElement: "#chartipedia",
        triggerHook: "onLeave",
        duration: o.isMobile ? "150%" : "250%"
    }).setTween(u).setPin("#chartipedia").addTo(a);
    new ScrollMagic.Scene({
        triggerElement: ".chartipedia__heading",
        triggerHook: "onEnter",
        offset: -300
    }).setTween(r.TweenMax.to(".about__arrow", .2, {
        autoAlpha: 0,
        scale: 0
    })).addTo(a)
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(1),
        i = n(2),
        o = i.getForwardAnimation("#getstarted__triangle-1"),
        a = i.getBackAnimation("#getstarted__triangle-1"),
        u = i.getForwardAnimation("#getstarted__triangle-2"),
        s = i.getBackAnimation("#getstarted__triangle-2"),
        l = i.getForwardAnimation("#getstarted__circle-1"),
        c = i.getBackAnimation("#getstarted__circle-1"),
        h = i.getForwardAnimation("#getstarted__circle-2"),
        f = i.getBackAnimation("#getstarted__circle-2");
    ! function t() {
        o.start(), setTimeout((function() {
            return l.start()
        }), 500), setTimeout((function() {
            a.start(), setTimeout((function() {
                return c.start()
            }), 500)
        }), 3500), setTimeout((function() {
            u.start(), setTimeout((function() {
                return h.start()
            }), 500)
        }), 7e3), setTimeout((function() {
            s.start(), setTimeout((function() {
                return f.start()
            }), 500)
        }), 10500), setTimeout((function() {
            t()
        }), 14e3)
    }();
    var p = new r.TimelineMax;
    i.typeAnimation(".getstarted__heading", .05, p), i.typeAnimation(".getstarted__text", .02, p), new ScrollMagic.Scene({
        triggerElement: "#getstarted",
        triggerHook: "0.5"
    }).setTween(p).addTo(new ScrollMagic.Controller)
}]);