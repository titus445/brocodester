(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g = this || self;

    function m(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = g, f = 0; f < c.length; f++)
                if (d = d[c[f]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    };

    function aa(a) {
        g.setTimeout(() => {
            throw a;
        }, 0)
    };
    var n = m(610401301, !1),
        p = m(572417392, m(1, !0));
    var r;
    const v = g.navigator;
    r = v ? v.userAgentData || null : null;

    function w(a) {
        return n ? r ? r.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function z(a) {
        var b;
        a: {
            if (b = g.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function A() {
        return n ? !!r && 0 < r.brands.length : !1
    }

    function B() {
        return A() ? w("Chromium") : (z("Chrome") || z("CriOS")) && !(A() ? 0 : z("Edge")) || z("Silk")
    };
    !z("Android") || B();
    B();
    z("Safari") && (B() || (A() ? 0 : z("Coast")) || (A() ? 0 : z("Opera")) || (A() ? 0 : z("Edge")) || (A() ? w("Microsoft Edge") : z("Edg/")) || A() && w("Opera"));
    var ba = !p;
    let ca = !p;

    function C(a) {
        return Array.prototype.slice.call(a)
    };
    const D = Symbol();

    function da(a) {
        const b = a[D] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = C(a)), a[D] = b | 1)
    }

    function ea() {
        var a = [];
        a[D] |= 1;
        return a
    }

    function fa(a, b) {
        b[D] = (a | 0) & -14591
    }

    function E(a, b) {
        b[D] = (a | 34) & -14557
    }

    function F(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var G = {},
        ha = {};

    function ia(a) {
        return !(!a || "object" !== typeof a || a.S !== ha)
    }

    function H(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ja = !p;

    function J(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[D] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[D] = d | 1;
        return !0
    }
    var K;
    const ka = [];
    ka[D] = 55;
    K = Object.freeze(ka);

    function la(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    }

    function ma(a) {
        if (!Number.isFinite(a)) {
            const b = Error();
            b.__closure__error__context__984382 || (b.__closure__error__context__984382 = {});
            b.__closure__error__context__984382.severity = "incident";
            aa(b)
        }
        return a
    };
    let L;

    function M(a, b) {
        L = b;
        a = new a(b);
        L = void 0;
        return a
    };

    function na(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) {
                    if (Array.isArray(a)) return ja || !J(a, void 0, 9999) ? a : void 0;
                    if (null != a && a instanceof Uint8Array) {
                        let b = "",
                            c = 0;
                        const d = a.length - 10240;
                        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        return btoa(b)
                    }
                }
        }
        return a
    };

    function qa(a, b, c) {
        a = C(a);
        var d = a.length;
        const f = b & 256 ? a[d - 1] : void 0;
        d += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (f) {
            b = a[b] = {};
            for (const e in f) b[e] = c(f[e])
        }
        return a
    }

    function ra(a, b, c, d, f, e) {
        if (null != a) {
            if (Array.isArray(a)) a = f && 0 == a.length && (a[D] | 0) & 1 ? void 0 : e && (a[D] | 0) & 2 ? a : N(a, b, c, void 0 !== d, f, e);
            else if (H(a)) {
                const h = {};
                for (let k in a) h[k] = ra(a[k], b, c, d, f, e);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function N(a, b, c, d, f, e) {
        const h = d || c ? a[D] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = C(a);
        for (let k = 0; k < a.length; k++) a[k] = ra(a[k], b, c, d, f, e);
        c && c(h, a);
        return a
    }

    function sa(a) {
        return a.m === G ? a.toJSON() : na(a)
    };

    function ta(a, b, c = E) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[D] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[D] = (d | 34) & -12293, a) : N(a, ta, d & 4 ? E : c, !0, !1, !0)
            }
            a.m === G && (c = a.j, d = c[D], a = d & 2 ? a : M(a.constructor, ua(c, d, !0)));
            return a
        }
    }

    function ua(a, b, c) {
        const d = c || b & 2 ? E : fa,
            f = !!(b & 32);
        a = qa(a, b, e => ta(e, f, d));
        a[D] = a[D] | 32 | (c ? 2 : 0);
        return a
    };
    Object.freeze({});

    function va(a) {
        a = a.j;
        return O(a, a[D], 16)
    }

    function O(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= F(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < f) return a[b]
        }
    }

    function P(a, b, c, d) {
        var f = F(b);
        if (c >= f) {
            let e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[D] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function wa(a, b, c) {
        var d = a.j,
            f = d[D],
            e = O(d, f, c, !1);
        if (null != e && "object" === typeof e && e.m === G) b = e;
        else if (Array.isArray(e)) {
            var h = e[D] | 0;
            let k = h;
            0 === k && (k |= f & 32);
            k |= f & 2;
            k !== h && (e[D] = k);
            b = new b(e)
        } else b = void 0;
        b !== e && null != b && P(d, f, c, b);
        d = b;
        if (null == d) return d;
        a = a.j;
        f = a[D];
        f & 2 || (e = d, b = e.j, h = b[D], e = h & 2 ? M(e.constructor, ua(b, h, !1)) : e, e !== d && (d = e, P(a, f, c, d)));
        return d
    }

    function xa(a) {
        return null != a ? a : !1
    };
    var Q = class {
        constructor(a) {
            a: {
                null == a && (a = L);L = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[D] | 0;
                    if (b & 64) break a;
                    b |= 64;
                    var c = a.length;
                    if (c && (--c, H(a[c]))) {
                        b |= 256;
                        c -= +!!(b & 512) - 1;
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[D] = b
            }
            this.j = a
        }
        toJSON() {
            var a = N(this.j, sa, void 0, void 0, !1, !1);
            return ya(this, a, !0)
        }
    };
    Q.prototype.m = G;
    Q.prototype.toString = function() {
        return ya(this, this.j, !1).toString()
    };

    function ya(a, b, c) {
        const d = a.constructor.o;
        var f = (c ? a.j : b)[D],
            e = F(f),
            h = !1;
        if (d && ja) {
            if (!c) {
                b = C(b);
                var k;
                if (b.length && H(k = b[b.length - 1]))
                    for (h = 0; h < d.length; h++)
                        if (d[h] >= e) {
                            Object.assign(b[b.length - 1] = {}, k);
                            break
                        }
                h = !0
            }
            e = b;
            c = !c;
            k = a.j[D];
            a = F(k);
            k = +!!(k & 512) - 1;
            var l;
            for (let I = 0; I < d.length; I++) {
                var t = d[I];
                if (t < a) {
                    t += k;
                    var x = e[t];
                    null == x ? e[t] = c ? K : ea() : c && x !== K && da(x)
                } else {
                    if (!l) {
                        var q = void 0;
                        e.length && H(q = e[e.length - 1]) ? l = q : e.push(l = {})
                    }
                    x = l[t];
                    null == l[t] ? l[t] = c ? K : ea() : c && x !== K && da(x)
                }
            }
        }
        l = b.length;
        if (!l) return b;
        let oa, pa;
        if (H(q = b[l - 1])) {
            a: {
                var u = q;e = {};c = !1;
                for (var y in u) {
                    a = u[y];
                    if (Array.isArray(a)) {
                        k = a;
                        if (!ca && J(a, d, +y) || !ba && ia(a) && 0 === a.size) a = null;
                        a != k && (c = !0)
                    }
                    null != a ? e[y] = a : c = !0
                }
                if (c) {
                    for (let I in e) {
                        u = e;
                        break a
                    }
                    u = null
                }
            }
            u != q && (oa = !0);l--
        }
        for (f = +!!(f & 512) - 1; 0 < l; l--) {
            y = l - 1;
            q = b[y];
            if (!(null == q || !ca && J(q, d, y - f) || !ba && ia(q) && 0 === q.size)) break;
            pa = !0
        }
        if (!oa && !pa) return b;
        var U;
        h ? U = b : U = Array.prototype.slice.call(b, 0, l);
        b = U;
        h && (b.length = l);
        u && b.push(u);
        return b
    };

    function za(a) {
        let b = 0;
        for (const c in a) b++
    };
    var Aa = class extends Q {};
    Aa.o = [17];
    var Ba = class extends Q {};
    Ba.o = [76, 27];
    var Ca = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[D] |= 32;
                b = M(a, b)
            }
            return b
        }
    }(class extends Q {});
    let R = null;

    function Da() {
        const a = g.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ea() {
        const a = g.performance;
        return a && a.now ? a.now() : null
    };
    var Fa = class {
        constructor(a, b) {
            var c = Ea() || Da();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = g.performance,
        Ga = !!(S && S.mark && S.measure && S.clearMarks),
        T = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Ga) {
                var b;
                if (null === R) {
                    R = "";
                    try {
                        a = "";
                        try {
                            a = g.top.location.hash
                        } catch (c) {
                            a = g.location.hash
                        }
                        a && (R = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = R;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ha(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Ia {
        constructor() {
            var a = window;
            this.g = [];
            this.v = a || g;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new Fa(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (Ea() || Da()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.l || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };
    const V = new Ia;
    var Ja = () => {
        window.google_measure_js_timing || (V.l = !1, V.g != V.v.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.g, Ha, void 0), V.g.length = 0))
    };
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    if ("complete" == window.document.readyState) Ja();
    else if (V.l) {
        var Ka = () => {
                Ja()
            },
            W = window;
        W.addEventListener && W.addEventListener.call(W, "load", Ka, !1)
    };
    za({
        L: 0,
        K: 1,
        H: 2,
        B: 3,
        I: 4,
        C: 5,
        J: 6,
        F: 7,
        G: 8,
        A: 9,
        D: 10,
        M: 11
    });
    za({
        O: 0,
        P: 1,
        N: 2
    });

    function X(a) {
        var b = new Y,
            c = b.j;
        const d = c[D] | 0;
        if (b.j[D] & 2) throw Error();
        var f = d & 2;
        b = O(c, d, 1, !1);
        Array.isArray(b) || (b = K);
        const e = !!(d & 32);
        let h = b[D] | 0;
        0 === h && e && !f ? (h |= 33, b[D] = h) : h & 1 || (h |= 1, b[D] = h);
        if (f) h & 2 || (b[D] |= 34), Object.freeze(b);
        else if (2 & h || 2048 & h) b = C(b), f = 1, e && (f |= 32), b[D] = f, P(c, d, 1, b);
        c = b;
        if (Array.isArray(a))
            for (var k = 0; k < a.length; k++) c.push(ma(a[k]));
        else
            for (k of a) c.push(ma(k))
    }
    var Y = class extends Q {
        constructor() {
            super()
        }
    };
    Y.o = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    X([1, 8, 10, 11, 12, 2, 3, 4, 5]);
    X([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    X([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new Y;

    function Z(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function La(a) {
        if (!(0 < a.g.length)) {
            var b = Z(a.body, "environment");
            for (const c of b.split("|")) c && a.g.push(c)
        }
    }
    var Ma = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            Z(a, "sampling_mod");
            var b = Z(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if ("namespace" === c[d].getAttribute("name") && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a = document.createElement("META");
                    a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            La(this)
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function Na(a, b) {
        if (b) {
            b = JSON.parse(b);
            for (const c in b) b.hasOwnProperty(c) && a.set(c, b[c])
        }
    }
    var Oa = class {
        constructor() {
            this.g = {}
        }
        clear() {
            this.g = {}
        }
        set(a, b) {
            this.g[a] = b
        }
        get(a) {
            return this.g[a]
        }
    };

    function Pa({
        threshold: a,
        target: b,
        u: c,
        R: d
    }) {
        if (window.IntersectionObserver) {
            var f = !1;
            (new IntersectionObserver(e => {
                0 !== e.length && e[0].isIntersecting && (!f && c && c(), f = !0, d && d())
            }, {
                threshold: a
            })).observe(b)
        }
    };
    var Qa = class {
        constructor() {
            this.channel = 1;
            (this.g = !(!window.mys || !window.mys.pingback)) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, this.channel)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
        tick(a, b) {
            this.g && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b))
        }
    };
    var Ra = class {
        constructor(a) {
            this.context = a;
            this.l = new Oa;
            this.pingback = new Qa
        }
        g() {}
    };
    var Sa = class extends Ra {};
    var Ta = class extends Sa {
        constructor(a) {
            super(a)
        }
        g() {
            Pa({
                threshold: .9,
                target: document.querySelector(".x-layout"),
                u: () => {
                    const a = document.querySelector(".x-layout");
                    a && a.classList.add("web-on-show")
                }
            })
        }
    };
    (function(a) {
        var b = document.getElementById("mys-content");
        if (b) {
            b = new Ma(b);
            var c = new a(b);
            Na(c.l, Z(b.body, "runtime_data"));
            a = Ca(Z(b.body, "render_config") || "[]");
            var d;
            La(b);
            0 <= b.g.indexOf("amp") || (null == (d = wa(wa(a, Ba, 1), Aa, 10)) ? 0 : xa(la(va(d)))) || (d = mys.engine ? mys.engine.stage() : 0, 0 === (d & 1) && b.addEventListener("overallStart", () => {}), 0 !== (d & 4) && c.g(), b.addEventListener("browserStart", () => {}), b.addEventListener("browserReady", () => {
                c.g()
            }), b.addEventListener("browserQuiet", () => {}))
        }
    })(class extends Ta {});
}).call(this);