(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m = this || self;

    function aa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    };

    function ba(a) {
        a = a.o;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ca(a, b) {
        return a.g ? a.l.slice(0, a.g.index) + b + a.l.slice(a.g.index) : a.l + b
    }

    function da(a) {
        let b = "&act=1&ri=1";
        a.h && a.o && (b += ba(a));
        return ca(a, b)
    }

    function ea(a, b) {
        return a.h && a.i || a.m ? 1 == b ? a.h ? a.i : ca(a, "&dct=1") : 2 == b ? ca(a, "&ri=2") : ca(a, "&ri=16") : a.l
    }
    var fa = class {
        constructor({
            url: a,
            X: b
        }) {
            this.l = a;
            this.o = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.m = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };
    var r = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    r.prototype.h = !0;
    var ha;
    try {
        new URL("s://g"), ha = !0
    } catch (a) {
        ha = !1
    }
    var ia = ha,
        ka = {},
        la = new r("about:invalid#zClosurez", ka);

    function ma(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };

    function na(a) {
        let b = 0;
        for (const c in a) b++
    };
    var oa = aa(610401301, !1),
        pa = aa(572417392, aa(1, !0));
    var qa;
    const ra = m.navigator;
    qa = ra ? ra.userAgentData || null : null;

    function sa(a) {
        return oa ? qa ? qa.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function u() {
        return oa ? !!qa && 0 < qa.brands.length : !1
    }

    function ta() {
        return u() ? sa("Chromium") : (t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge")) || t("Silk")
    };

    function ua(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    class va {
        constructor(a) {
            this.ga = a
        }
    }

    function v(a) {
        return new va(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const wa = new va(a => /^[^:]*([/?#]|$)/.test(a));
    var xa = v("http"),
        ya = v("https"),
        za = v("ftp"),
        Aa = v("mailto"),
        Ba = v("intent"),
        Ca = v("market"),
        Da = v("itms"),
        Ea = v("itms-appss");
    const Fa = [v("data"), xa, ya, Aa, za, wa];

    function Ga(a, b = Fa) {
        if (a instanceof r) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof va && d.ga(a)) return new r(a, ka)
        }
    }

    function Ha(a, b = Fa) {
        return Ga(a, b) || la
    };

    function Ia(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };

    function Ja() {
        return t("iPhone") && !t("iPod") && !t("iPad")
    };

    function Ka(a) {
        Ka[" "](a);
        return a
    }
    Ka[" "] = function() {};
    var La = Ja(),
        Ma = t("iPad");
    var Na = Ja() || t("iPod"),
        Oa = t("iPad");
    !t("Android") || ta();
    ta();
    t("Safari") && (ta() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? sa("Microsoft Edge") : t("Edg/")) || u() && sa("Opera"));
    var Pa = {},
        Qa = null;
    var Ra = !pa;
    let Sa = !pa;

    function x(a) {
        return Array.prototype.slice.call(a)
    };
    const y = Symbol();

    function Ta(a) {
        const b = a[y] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = x(a)), a[y] = b | 1)
    }

    function B(a, b, c) {
        return c ? a | b : a & ~b
    }

    function Ua() {
        var a = [];
        a[y] |= 1;
        return a
    }

    function C(a) {
        a[y] |= 34;
        return a
    }

    function Va(a, b) {
        b[y] = (a | 0) & -14591
    }

    function Wa(a, b) {
        b[y] = (a | 34) & -14557
    }

    function Xa(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Ya = {},
        Za = {};

    function $a(a) {
        return !(!a || "object" !== typeof a || a.ia !== Za)
    }

    function ab(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let bb, cb = !pa;

    function db(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[y] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[y] = d | 1;
        return !0
    }
    var E;
    const eb = [];
    eb[y] = 55;
    E = Object.freeze(eb);

    function fb(a) {
        if (a & 2) throw Error();
    }
    class gb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new gb(this.g, this.h, this.l)
        }
    }
    var ib = {};

    function jb() {
        const a = Error();
        ua(a, "incident");
        return a
    };

    function kb(a) {
        if (!Number.isFinite(a)) {
            const b = jb();
            Ia(b)
        }
        return a
    }

    function lb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function F(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function nb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.C === Ya) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[ob]) ? b = a : (a = new b, C(a.j), b = b[ob] = a) : b = new b : b = void 0, b;
        let e = c = a[y] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[y] = e);
        return new b(a)
    }
    const ob = Symbol();

    function pb(a) {
        return a
    }

    function qb(a, b, c) {
        if (b) {
            if ("string" !== typeof a) throw Error();
            return a
        }
        let d;
        return null != (d = F(a)) ? d : c ? "" : void 0
    };
    let rb;
    const sb = (() => class extends Map {
        constructor() {
            super()
        }
    })();

    function tb(a) {
        if (a.u & 2) throw Error("Cannot mutate an immutable Map");
    }
    var H = class extends sb {
        constructor(a, b, c = pb, d = pb) {
            super();
            let e = a[y] | 0;
            e |= 64;
            this.u = a[y] = e;
            this.B = b;
            this.s = c || pb;
            this.J = this.B ? ub : d || pb;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    g = c(h[0], !1, !0);
                let k = h[1];
                b ? void 0 === k && (k = null) : k = d(h[1], !1, !0, void 0, void 0, e);
                super.set(g, k)
            }
        }
        W(a = yb) {
            return this.G(a)
        }
        G(a = yb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            tb(this);
            super.clear()
        }
        delete(a) {
            tb(this);
            return super.delete(this.s(a, !0, !1))
        }
        entries() {
            var a = this.U();
            return new gb(a, zb, this)
        }
        keys() {
            return this.ha()
        }
        values() {
            var a = this.U();
            return new gb(a, H.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            tb(this);
            a = this.s(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.J(b, !0, !0, this.B, !1, this.u))
        }
        has(a) {
            return super.has(this.s(a, !1, !1))
        }
        get(a) {
            a = this.s(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.B;
                return c ? (c = this.J(b, !1, !0, c, this.fa, this.u),
                    c !== b && super.set(a, c), c) : b
            }
        }
        U() {
            return Array.from(super.keys())
        }
        ha() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    H.prototype.toJSON = void 0;
    H.prototype.ia = Za;

    function ub(a, b, c, d, e, f) {
        a = nb(a, d, c, f);
        e && (a = Ab(a));
        return a
    }

    function yb(a) {
        return a
    }

    function zb(a) {
        return [a, this.get(a)]
    };

    function Bb(a, b) {
        return Cb(b)
    }

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) {
                    if (Array.isArray(a)) return cb || !db(a, void 0, 9999) ? a : void 0;
                    if (null != a && a instanceof Uint8Array) {
                        let b = "",
                            c = 0;
                        const d = a.length - 10240;
                        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        return btoa(b)
                    }
                    if (a instanceof H) return a = a.W(), Ra || 0 !== a.length ? a : void 0
                }
        }
        return a
    };

    function Db(a, b, c) {
        a = x(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function Eb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[y] | 0) & 1 ? void 0 : f && (a[y] | 0) & 2 ? a : Fb(a, b, c, void 0 !== d, e, f);
            else if (ab(a)) {
                const h = {};
                for (let g in a) h[g] = Eb(a[g], b, c, d, e, f);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function Fb(a, b, c, d, e, f) {
        const h = d || c ? a[y] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = x(a);
        for (let g = 0; g < a.length; g++) a[g] = Eb(a[g], b, c, d, e, f);
        c && c(h, a);
        return a
    }

    function Gb(a) {
        return Eb(a, Hb, void 0, void 0, !1, !1)
    }

    function Hb(a) {
        return a.C === Ya ? a.toJSON() : a instanceof H ? a.W(Gb) : Cb(a)
    };

    function Ib(a, b, c = Wa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = (d | 34) & -12293, a) : Fb(a, Ib, d & 4 ? Wa : c, !0, !1, !0)
            }
            a.C === Ya ? (c = a.j, d = c[y], a = d & 2 ? a : Jb(a, c, d, !0)) : a instanceof H && (c = C(a.G(Ib)), a = new H(c, a.B, a.s, a.J));
            return a
        }
    }

    function Kb(a) {
        const b = a.j;
        return Jb(a, b, b[y], !1)
    }

    function Jb(a, b, c, d) {
        a = a.constructor;
        rb = b = Lb(b, c, d);
        b = new a(b);
        rb = void 0;
        return b
    }

    function Lb(a, b, c) {
        const d = c || b & 2 ? Wa : Va,
            e = !!(b & 32);
        a = Db(a, b, f => Ib(f, e, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function Ab(a) {
        const b = a.j,
            c = b[y];
        return c & 2 ? Jb(a, b, c, !1) : a
    };
    Object.freeze({});

    function I(a, b) {
        a = a.j;
        return Mb(a, a[y], b)
    }

    function Mb(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= Xa(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Nb(a, b, c) {
        const d = a.j;
        let e = d[y];
        fb(e);
        J(d, e, b, c);
        return a
    }

    function J(a, b, c, d, e) {
        var f = Xa(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return e;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[y] = e);
            return e
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Ob(a, b, c, d, e) {
        var f = b & 2;
        let h = Mb(a, b, c, e);
        Array.isArray(h) || (h = E);
        const g = !(d & 2);
        d = !(d & 1);
        const k = !!(b & 32);
        let l = h[y] | 0;
        0 !== l || !k || f || g ? l & 1 || (l |= 1, h[y] = l) : (l |= 33, h[y] = l);
        f ? (a = !1, l & 2 || (C(h), a = !!(4 & l)), (d || a) && Object.freeze(h)) : (f = !!(2 & l) || !!(2048 & l), d && f ? (h = x(h), d = 1, k && !g && (d |= 32), h[y] = d, J(a, b, c, h, e)) : g && l & 32 && !f && (h[y] &= -33));
        return h
    }

    function Pb(a, b) {
        var c = 2;
        a = a.j;
        let d = a[y];
        2 & d && (c = 1);
        let e = Ob(a, d, b, 1);
        d = a[y];
        var f = e[y] | 0;
        let h = f,
            g = !!(2 & f);
        var k = g && !!(4 & f);
        if (!(4 & f)) {
            Object.isFrozen(e) && (e = x(e), h = 0, f = Qb(f, d, !1), g = !!(2 & f), d = J(a, d, b, e));
            f = B(f, 4, !1);
            f = B(f, 4096, !1);
            f = B(f, 8192, !1);
            let l = 0,
                n = 0;
            for (; l < e.length; l++) {
                const p = F(e[l]);
                null != p && (e[n++] = p)
            }
            n < l && (e.length = n);
            f = B(f, 20, !0)
        }
        k || ((k = 1 === c) && (f = B(f, 2, !0)), f !== h && (e[y] = f), (k || g) && Object.freeze(e));
        2 === c && g && (e = x(e), f = Qb(f, d, !1), e[y] = f, J(a, d, b, e));
        return e
    }
    let Rb;

    function Sb() {
        let a;
        return null != (a = Rb) ? a : Rb = new H(C([]), void 0, void 0, void 0, ib)
    }

    function Tb(a, b, c, d, e, f) {
        const h = b & 2;
        a: {
            var g = c,
                k = b & 2;c = !1;
            if (null == g) {
                if (k) {
                    a = Sb();
                    break a
                }
                g = []
            } else if (g.constructor === H) {
                if (0 == (g.u & 2) || k) {
                    a = g;
                    break a
                }
                g = g.G()
            } else Array.isArray(g) ? c = !!((g[y] | 0) & 2) : g = [];
            if (k) {
                if (!g.length) {
                    a = Sb();
                    break a
                }
                c || (c = !0, C(g))
            } else if (c) {
                c = !1;
                k = x(g);
                for (g = 0; g < k.length; g++) {
                    const l = k[g] = x(k[g]);
                    Array.isArray(l[1]) && (l[1] = C(l[1]))
                }
                g = k
            }
            c || ((g[y] | 0) & 64 ? g[y] &= -33 : 32 & b && (g[y] |= 32));f = new H(g, e, qb, f);J(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !h && e && (a.fa = !0);
        return a
    }

    function Ub(a, b) {
        a = a.j;
        const c = a[y];
        return Tb(a, c, Mb(a, c, b), b, void 0, qb)
    }

    function K(a, b, c) {
        a = a.j;
        let d = a[y];
        const e = Mb(a, d, c, !1);
        b = nb(e, b, !1, d);
        b !== e && null != b && J(a, d, c, b, !1);
        return b
    }

    function M(a, b, c) {
        b = K(a, b, c);
        if (null == b) return b;
        a = a.j;
        let d = a[y];
        if (!(d & 2)) {
            const e = Ab(b);
            e !== b && (b = e, J(a, d, c, b, !1))
        }
        return b
    }

    function Vb(a) {
        a = a.j;
        var b = a[y],
            c = !!(2 & b),
            d = c ? 1 : 2,
            e = Wb;
        const f = 1 === d;
        d = 2 === d;
        var h = !!(2 & b) && d;
        let g = Ob(a, b, 7, 3);
        b = a[y];
        var k = g[y] | 0,
            l = !!(2 & k);
        const n = !!(4 & k),
            p = !!(32 & k);
        let q = l && n || !!(2048 & k);
        if (!n) {
            var z = g,
                A = b;
            const D = !!(2 & k);
            D && (A = B(A, 2, !0));
            let L = !D,
                G = !0,
                R = 0,
                X = 0;
            for (; R < z.length; R++) {
                const w = nb(z[R], e, !1, A);
                if (w instanceof e) {
                    if (!D) {
                        const S = !!((w.j[y] | 0) & 2);
                        L && (L = !S);
                        G && (G = S)
                    }
                    z[X++] = w
                }
            }
            X < R && (z.length = X);
            k = B(k, 4, !0);
            k = B(k, 16, G);
            k = B(k, 8, L);
            z[y] = k;
            l && !h && (Object.freeze(g), q = !0)
        }
        e = k;
        h = !!(8 & k) || f && !g.length;
        if (!c && !h) {
            q && (g = x(g), q = !1, e = 0, k = Qb(k, b, !1), b = J(a, b, 7, g));
            c = g;
            h = k;
            for (l = 0; l < c.length; l++) z = c[l], k = Ab(z), z !== k && (c[l] = k);
            h = B(h, 8, !0);
            k = h = B(h, 16, !c.length)
        }
        q || (f ? k = B(k, !g.length || 16 & k && (!n || p) ? 2 : 2048, !0) : k = B(k, 32, !1), k !== e && (g[y] = k), f && (Object.freeze(g), q = !0));
        d && q && (g = x(g), k = Qb(k, b, !1), g[y] = k, J(a, b, 7, g));
        return g
    }

    function Qb(a, b, c) {
        a = B(a, 2, !!(2 & b));
        a = B(a, 32, !!(32 & b) && c);
        return a = B(a, 2048, !1)
    }

    function N(a, b) {
        return null != a ? a : b
    }

    function P(a, b, c = !1) {
        a = I(a, b);
        return N(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, c)
    }

    function Q(a, b) {
        return N(F(I(a, b)), "")
    }

    function T(a, b, c = 0) {
        return N(I(a, b), c)
    }

    function Xb(a, b, c) {
        if (null != c && "boolean" !== typeof c) throw a = typeof c, Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return Nb(a, b, c)
    }

    function Yb(a, b, c) {
        if (null != c) {
            if ("number" !== typeof c) throw a = Error("int32"), ua(a, "warning"), a;
            if (!Number.isFinite(c)) {
                const d = jb();
                Ia(d)
            }
        }
        Nb(a, b, c)
    }

    function U(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        return Nb(a, b, c)
    }

    function Zb(a, b, c) {
        Nb(a, b, null == c ? c : kb(c))
    };

    function $b(a) {
        bb = !0;
        try {
            return JSON.stringify(a.toJSON(), Bb)
        } finally {
            bb = !1
        }
    }
    var V = class {
        constructor(a) {
            a: {
                null == a && (a = rb);rb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[y] | 0;
                    if (b & 64) break a;
                    b |= 64;
                    var c = a.length;
                    if (c && (--c, ab(a[c]))) {
                        b |= 256;
                        c -= +!!(b & 512) - 1;
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[y] = b
            }
            this.j = a
        }
        toJSON() {
            if (bb) var a = ac(this, this.j, !1);
            else a = Fb(this.j, Hb, void 0, void 0, !1, !1), a = ac(this, a, !0);
            return a
        }
    };
    V.prototype.C = Ya;
    V.prototype.toString = function() {
        return ac(this, this.j, !1).toString()
    };

    function ac(a, b, c) {
        const d = a.constructor.A;
        var e = (c ? a.j : b)[y],
            f = Xa(e),
            h = !1;
        if (d && cb) {
            if (!c) {
                b = x(b);
                var g;
                if (b.length && ab(g = b[b.length - 1]))
                    for (h = 0; h < d.length; h++)
                        if (d[h] >= f) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                h = !0
            }
            f = b;
            c = !c;
            g = a.j[y];
            a = Xa(g);
            g = +!!(g & 512) - 1;
            var k;
            for (let G = 0; G < d.length; G++) {
                var l = d[G];
                if (l < a) {
                    l += g;
                    var n = f[l];
                    null == n ? f[l] = c ? E : Ua() : c && n !== E && Ta(n)
                } else {
                    if (!k) {
                        var p = void 0;
                        f.length && ab(p = f[f.length - 1]) ? k = p : f.push(k = {})
                    }
                    n = k[l];
                    null == k[l] ? k[l] = c ? E : Ua() : c && n !== E && Ta(n)
                }
            }
        }
        k = b.length;
        if (!k) return b;
        let q, z;
        if (ab(p = b[k - 1])) {
            a: {
                var A = p;f = {};c = !1;
                for (var D in A) {
                    a = A[D];
                    if (Array.isArray(a)) {
                        g = a;
                        if (!Sa && db(a, d, +D) || !Ra && $a(a) && 0 === a.size) a = null;
                        a != g && (c = !0)
                    }
                    null != a ? f[D] = a : c = !0
                }
                if (c) {
                    for (let G in f) {
                        A = f;
                        break a
                    }
                    A = null
                }
            }
            A != p && (q = !0);k--
        }
        for (e = +!!(e & 512) - 1; 0 < k; k--) {
            D = k - 1;
            p = b[D];
            if (!(null == p || !Sa && db(p, d, D - e) || !Ra && $a(p) && 0 === p.size)) break;
            z = !0
        }
        if (!q && !z) return b;
        var L;
        h ? L = b : L = Array.prototype.slice.call(b, 0, k);
        b = L;
        h && (b.length = k);
        A && b.push(A);
        return b
    };
    var bc = class extends V {
        constructor() {
            super()
        }
    };
    var cc = class extends V {};
    var dc = class extends V {};
    var Wb = class extends V {
        v() {
            return Q(this, 3)
        }
        V(a) {
            Xb(this, 5, a)
        }
    };
    var ec = class extends V {
        v() {
            return Q(this, 1)
        }
        V(a) {
            Xb(this, 2, a)
        }
    };
    var fc = class extends V {};
    var gc = class extends V {};
    gc.A = [6, 7];

    function hc(a) {
        a = a.j;
        const b = a[y];
        return Tb(a, b, Mb(a, b, 1), 1, gc)
    }
    var ic = class extends V {};
    ic.A = [17];
    var jc = class extends V {};
    var kc = class extends V {
        constructor() {
            super()
        }
    };

    function lc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var mc = {
            capture: !0
        },
        nc = {
            passive: !0
        },
        oc = lc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function pc(a) {
        return a ? a.passive && oc() ? a : a.capture || !1 : !1
    }

    function qc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, pc(d))
    };

    function rc(a, b) {
        if (!(b instanceof r || b instanceof r)) {
            b = "object" == typeof b && b.h ? b.g.toString() : String(b);
            b: {
                var c = b;
                if (ia) {
                    try {
                        var d = new URL(c)
                    } catch (e) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (e) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" === c && (b = "about:invalid#zClosurez");
            b = new r(b, ka)
        }
        a.href = b instanceof r && b.constructor === r ? b.g : "type_error:SafeUrl"
    };
    var sc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function tc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) tc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function uc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var vc = /#|$/;

    function wc(a, b) {
        var c = a.search(vc),
            d = uc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var xc = /[?&]($|#)/;

    function yc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var zc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let Ac = [];
    const Bc = () => {
        const a = Ac;
        Ac = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Cc = a => {
            Ac.push(a);
            1 == Ac.length && (window.Promise ? Promise.resolve().then(Bc) : window.setImmediate ? setImmediate(Bc) : setTimeout(Bc, 0))
        },
        Dc = a => {
            var b = W;
            "complete" === b.readyState || "interactive" === b.readyState ? Cc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        Ec = a => {
            var b = window;
            "complete" === b.document.readyState ? Cc(a) : b.addEventListener("load", a)
        };

    function Fc(a = document) {
        return a.createElement("img")
    };

    function Gc(a, b, c = null, d = !1) {
        Hc(a, b, c, d)
    }

    function Hc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Fc(a.document);
        if (c || d) {
            const f = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const g = Array.prototype.indexOf.call(h, e, void 0);
                    0 <= g && Array.prototype.splice.call(h, g, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, pc());
                e.removeEventListener && e.removeEventListener("error", f, pc())
            };
            qc(e, "load", f);
            qc(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Jc(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Gc(a, b, void 0, !1)
    };
    let Kc = 0;

    function Lc(a) {
        return (a = Mc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Mc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Nc(a) {
        if (!(.01 < Math.random())) {
            const b = Mc(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Lc(a)}&sample=${.01}`;
            Jc(window, a)
        }
    };
    var W = document,
        Oc = window;
    const Pc = [xa, ya, Aa, za, wa, Ca, Da, Ba, Ea];

    function Qc(a, b) {
        if (a instanceof r) return a;
        const c = Ha(a, Pc);
        c === la && b(a);
        return c
    }
    var Rc = a => {
        var b = `${"http:"===Oc.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) tc(e, c[e], d);
            var e = d.join("&");
            if (e) {
                c = b.indexOf("#");
                0 > c && (c = b.length);
                d = b.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var f = ""
                } else f = b.substring(d + 1, c);
                c = [b.slice(0, d), f, b.slice(c)];
                d = c[1];
                c[1] = e ? d ? d + "&" + e : e : d;
                e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else e = b;
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };
    var Sc = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Tc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Uc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Vc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Wc = class {
            constructor(a, b) {
                this.url = a;
                this.T = !!b;
                this.depth = null
            }
        };
    let Xc = null;

    function Yc() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Zc() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var $c = class {
        constructor(a, b) {
            var c = Zc() || Yc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Y = m.performance,
        ad = !!(Y && Y.mark && Y.measure && Y.clearMarks),
        bd = lc(() => {
            var a;
            if (a = ad) {
                var b;
                if (null === Xc) {
                    Xc = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Xc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Xc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function cd(a) {
        a && Y && bd() && (Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class dd {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = bd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new $c(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Y && bd() && Y.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Zc() || Yc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Y && bd() && Y.mark(b);
                !this.g ||
                    2048 < this.h.length || this.h.push(a)
            }
        }
    };

    function ed(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function fd(a, b, c, d, e) {
        const f = [];
        yc(a, function(h, g) {
            (h = gd(h, b, c, d, e)) && f.push(g + "=" + h)
        });
        return f.join(b)
    }

    function gd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(gd(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(fd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function hd(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function id(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = hd(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                g = a.h[h];
            for (let k = 0; k < g.length; k++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                let l = fd(g[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class jd {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function kd(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }

    function ld(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                cd(e), c = a.m(b, new Tc(f, {
                    message: kd(f)
                }), void 0, void 0)
            } catch (h) {
                a.l(217, h)
            }
            if (c) {
                let h, g;
                null == (h = window.console) || null == (g = h.error) || g.call(h, f)
            } else throw f;
        }
        return d
    }

    function md(a, b) {
        var c = nd;
        return (...d) => ld(c, a, () => b.apply(void 0, d))
    }
    var qd = class {
        constructor(a = null) {
            this.pinger = od;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const w = new jd;
                w.g.push(1);
                w.h[1] = ed("context", a);
                b.error && b.meta && b.id || (b = new Tc(b, {
                    message: kd(b)
                }));
                if (b.msg) {
                    var h = b.msg.substring(0, 512);
                    w.g.push(2);
                    w.h[2] = ed("msg", h)
                }
                const S = b.meta || {};
                if (this.h) try {
                    this.h(S)
                } catch (O) {}
                if (d) try {
                    d(S)
                } catch (O) {}
                b = [S];
                w.g.push(3);
                w.h[3] = b;
                d = m;
                b = [];
                let vb;
                h = null;
                do {
                    var g = d;
                    try {
                        var k;
                        if (k = !!g && null != g.location.href) b: {
                            try {
                                Ka(g.foo);
                                k = !0;
                                break b
                            } catch (O) {}
                            k = !1
                        }
                        var l = k
                    } catch (O) {
                        l = !1
                    }
                    l ? (vb = g.location.href, h = g.document && g.document.referrer || null) : (vb = h, h = null);
                    b.push(new Wc(vb || ""));
                    try {
                        d = g.parent
                    } catch (O) {
                        d = null
                    }
                } while (d && g != d);
                for (let O = 0, Ic = b.length - 1; O <= Ic; ++O) b[O].depth = Ic - O;
                g = m;
                if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == b.length - 1)
                    for (l = 1; l < b.length; ++l) {
                        var n = b[l];
                        n.url || (n.url = g.location.ancestorOrigins[l - 1] || "", n.T = !0)
                    }
                var p = b;
                let wb = new Wc(m.location.href, !1);
                g = null;
                const xb = p.length -
                    1;
                for (n = xb; 0 <= n; --n) {
                    var q = p[n];
                    !g && Uc.test(q.url) && (g = q);
                    if (q.url && !q.T) {
                        wb = q;
                        break
                    }
                }
                q = null;
                const Od = p.length && p[xb].url;
                0 != wb.depth && Od && (q = p[xb]);
                f = new Vc(wb, q);
                if (f.h) {
                    var z = f.h.url || "";
                    w.g.push(4);
                    w.h[4] = ed("top", z)
                }
                var A = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var D = f.g.url.match(sc),
                        L = D[1],
                        G = D[3],
                        R = D[4];
                    p = "";
                    L && (p += L + ":");
                    G && (p += "//", p += G, R && (p += ":" + R));
                    var X = p
                } else X = "";
                A = [A, {
                    url: X
                }];
                w.g.push(5);
                w.h[5] = A;
                pd(this.pinger, e, w, this.i, c)
            } catch (w) {
                try {
                    pd(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: kd(w),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (S) {}
            }
            return !0
        }
    };
    class rd {};

    function pd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof jd ? f = c : (f = new jd, yc(c, (g, k) => {
                var l = f;
                const n = l.l++;
                g = ed(k, g);
                l.g.push(n);
                l.h[n] = g
            }));
            const h = id(f, "/pagead/gen_204?id=" + b + "&");
            h && Gc(m, h)
        } catch (f) {}
    }

    function sd() {
        var a = od,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class td {
        constructor() {
            this.g = Math.random()
        }
    };
    let od, nd;
    const Z = new dd;
    var ud = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (bd() && Array.prototype.forEach.call(Z.h, cd, void 0), Z.h.length = 0))
    };
    (a => {
        od = null != a ? a : new td;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        sd();
        nd = new qd(Z);
        nd.h = b => {
            const c = Kc;
            0 !== c && (b.jc = String(c), b.shv = Lc(c))
        };
        nd.i = !0;
        "complete" == window.document.readyState ? ud() : Z.g && qc(window, "load", () => {
            ud()
        })
    })();
    var vd = (a, b) => md(a, b),
        wd = a => {
            var b = rd;
            var c = "S";
            b.S && b.hasOwnProperty(c) || (c = new b, b.S = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            pd(od, "gdn-asoch", a, !0)
        };

    function xd(a = window) {
        return a
    };
    na({
        ua: 0,
        ta: 1,
        qa: 2,
        la: 3,
        ra: 4,
        ma: 5,
        sa: 6,
        oa: 7,
        pa: 8,
        ka: 9,
        na: 10,
        va: 11
    });
    na({
        xa: 0,
        ya: 1,
        wa: 2
    });

    function yd(a) {
        var b = new zd;
        const c = b.j,
            d = c[y] | 0;
        fb(b.j[y]);
        b = Ob(c, d, 1, 2, !1);
        if (Array.isArray(a))
            for (var e = 0; e < a.length; e++) b.push(kb(a[e]));
        else
            for (e of a) b.push(kb(e))
    }
    var zd = class extends V {
        constructor() {
            super()
        }
    };
    zd.A = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    yd([1, 8, 10, 11, 12, 2, 3, 4, 5]);
    yd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    yd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new zd;
    var Ad = (a, b) => {
            b = Q(a, 2) || b;
            if (!b) return "";
            if (P(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Ub(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Bd = (a, b = []) => {
            b = 0 < b.length ? b : Sc("data-asoch-targets");
            a = hc(a);
            const c = [];
            for (let g = 0; g < b.length; ++g) {
                var d = b[g].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let k of e)
                    if (!a.has(k)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f = a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var h = a.get(e[d]);
                        f = Kb(f).toJSON();
                        h = h.toJSON();
                        const k = Math.max(f.length, h.length);
                        for (let l = 0; l < k; ++l) null == f[l] && (f[l] = h[l]);
                        f = new gc(f)
                    }
                    e = Ub(f, 4);
                    null != I(f, 5) && e.set("nb", T(f, 5, 0).toString());
                    c.push({
                        element: b[g],
                        data: f
                    })
                } else wd({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        Ed = (a, b, c, d) => {
            c = Ad(b, c);
            if (0 !== c.length) {
                if ("2" === wc(c, "ase") && 1087 !== d) {
                    const f = 609 === d;
                    var e;
                    const h = !(null == (e = W.featurePolicy) || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : h ? 6 : 5;
                    let g = "";
                    f || h &&
                        !Cd(c) ? (c = Dd(c, "nis", e.toString()), a.setAttribute("attributionsrc", g)) : h && Cd(c) && (g = Dd(da(new fa({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", g))
                }
                rc(a, Qc(c, Rc(d)));
                a.target || (a.target = null != F(I(b, 11)) ? Q(b, 11) : "_top")
            }
        },
        Fd = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !P(a, 1)) {
                    const c = b.element;
                    Ed(c, a, c.href, 609)
                }
        },
        Gd = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const e = c.exec(a);
            b = b + "=" + d;
            return e ? a.replace(c, e[0].charAt(0) +
                b) : a.replace("?", "?" + b + "&")
        },
        Cd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        Hd = a => {
            const b = m.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== K(a, fc, 8)) {
                        const d = Q(M(a, fc, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, Q(M(a, fc, 8), 6));
                            break
                        }
                    }
        },
        Id = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && void 0 !== K(a, ec, 12) && (d.push(M(a, ec, 12)), c.push(M(a, ec, 12).v()));
            e = (f, h) => {
                if (h)
                    for (const g of d) h[g.v()] && g.V(!0)
            };
            a = m.oneAfmaInstance;
            for (const f of c) {
                let h;
                null == (h = a) || h.canOpenAndroidApp(f,
                    e, () => {}, b)
            }
        },
        Kd = (a, b, c, d, e) => {
            if (!b || void 0 === K(b, fc, 8)) return !1;
            const f = M(b, fc, 8);
            let h = Q(f, 2);
            Ub(b, 10).forEach((l, n) => {
                h = Gd(h, n, l)
            });
            Jd(b) && P(b, 15) && !/[?&]label=/.test(c) && (c = Dd(c, "label", "deep_link_fallback"));
            const g = l => d.openStoreOverlay(l, void 0, Q(f, 6)),
                k = l => Jc(Oc, l);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: Q(f, 3),
                finalUrl: h,
                pingFunc: P(b, 13) ? d.httpTrack : e ? k : d.click,
                openFunc: (null == a ? 0 : P(a, 1)) ? g : d.openIntentOrNativeApp,
                isExternalClickUrl: P(b, 13)
            })
        },
        Md = (a, b, c, d, e, f, h, g = !1, k = !1) => {
            const l =
                P(e, 15),
                n = Cd(f);
            if (a && b && (!l || !n) && (f = g ? Ld(f) : Ld(f, h.click), k && (null == e ? 0 : P(e, 21, !1)))) return;
            f && f.startsWith("intent:") ? h.openIntentOrNativeApp(f) : c ? d ? h.openBrowser(f) : h.openChromeCustomTab(f) : h.openSystemBrowser(f, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        Ld = (a, b = null) => {
            if (null !== b) {
                const c = new fa({
                    url: a
                });
                if (c.h && c.i || c.m) return b(da(c)), ea(c, 1)
            } else return {
                X: b
            } = {}, b = new fa({
                url: a,
                X: b
            }), b.h && b.i || b.m ? navigator.sendBeacon ? navigator.sendBeacon(da(b), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : a;
            return a
        },
        Nd =
        (a, b = !0) => {
            b && Oc.fetch ? Oc.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Gc(Oc, a)
            }) : Gc(Oc, a)
        },
        Dd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Jd = a => {
            for (const b of Vb(a))
                if (3 === T(b, 1, 0) && Q(b, 2)) return !0;
            return !1
        };
    var Pd = (a, b) => a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
    var Qd = class extends V {
        constructor() {
            super()
        }
    };

    function Rd(a, b) {
        return U(a, 2, b)
    }

    function Sd(a, b) {
        return U(a, 3, b)
    }

    function Td(a, b) {
        return U(a, 4, b)
    }

    function Ud(a, b) {
        return U(a, 5, b)
    }

    function Vd(a, b) {
        return U(a, 9, b)
    }

    function Wd(a, b) {
        {
            const n = a.j;
            let p = n[y];
            fb(p);
            if (null == b) J(n, p, 10);
            else {
                var c = b[y] | 0,
                    d = c,
                    e = !!(2 & c) || !!(2048 & c),
                    f = e || Object.isFrozen(b),
                    h;
                if (h = !f) h = !1;
                var g = !0,
                    k = !0;
                for (let q = 0; q < b.length; q++) {
                    var l = b[q];
                    e || (l = !!((l.j[y] | 0) & 2), g && (g = !l), k && (k = l))
                }
                e || (c = B(c, 5, !0), c = B(c, 8, g), c = B(c, 16, k), h && (c = B(c, k ? 2 : 2048, !0)), c !== d && (f && (b = x(b), c = Qb(c, p, !0)), b[y] = c), h && Object.freeze(b));
                J(n, p, 10, b)
            }
        }
        return a
    }

    function Xd(a, b) {
        return Xb(a, 11, b)
    }

    function Yd(a, b) {
        return U(a, 1, b)
    }

    function Zd(a, b) {
        return Xb(a, 7, b)
    }
    var $d = class extends V {
        constructor() {
            super()
        }
    };
    $d.A = [10, 6];
    const ae = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function be(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ce(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function de() {
        var a = window;
        if (!ce(a)) return null;
        const b = be(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ae).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function ee(a) {
        let b;
        return Xd(Wd(Ud(Rd(Yd(Td(Zd(Vd(Sd(new $d, String(a.architecture || "")), String(a.bitness || "")), !!a.mobile), String(a.model || "")), String(a.platform || "")), String(a.platformVersion || "")), String(a.uaFullVersion || "")), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Qd;
            d = U(d, 1, String(c.brand));
            return U(d, 2, String(c.version))
        })) || []), !!a.wow64)
    }

    function fe() {
        let a, b;
        return null != (b = null == (a = de()) ? void 0 : a.then(c => ee(c))) ? b : null
    };

    function ge(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == F(I(c, 2)) && U(c, 2, a.href)
            }
    }

    function he(a, b) {
        return ma(a, c => c.element === b)
    }

    function ie(a) {
        Dc(vd(556, () => {
            new je(a || {})
        }))
    }

    function ke(a, b) {
        if (!b.defaultPrevented || a.F === b) {
            for (var c, d, e = b.target;
                (!c || !d) && e;) {
                d || "A" != e.tagName || (d = e);
                var f = e.hasAttribute("data-asoch-targets"),
                    h = e.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (h) c = new gc(JSON.parse(e.getAttribute("data-asoch-fixed-value")) || []);
                    else if ("A" == e.tagName || f)
                    if (f = f && "true" === e.getAttribute("data-asoch-is-dynamic") ? Bd(a.h, [e]) : a.g, f = he(f, e)) c = f.data;
                e = e.parentElement
            }
            e = c && !P(c, 1);
            if (a.I && a.l && b.defaultPrevented) le(a, b, d, e ? c : a.l);
            else {
                if (e) {
                    if (!a.I && b.defaultPrevented) {
                        le(a,
                            b, d, c);
                        return
                    }
                    f = c;
                    for (var g of Pb(f, 6)) Nd(g)
                }
                a.K && e && P(c, 21, !1) && (zc(b), (g = c) && Q(g, 2) && (f = Gd(Q(g, 2), "ae", "1"), U(g, 2, f)));
                if (d && e) {
                    c = e ? c : null;
                    (g = he(a.g, d)) ? g = g.data: (g = new gc, U(g, 2, d.href), U(g, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: g
                    }));
                    Ed(d, c || g, Q(g, 2), 557);
                    me(a, b, d, c);
                    for (var k of Pb(a.h, 17)) g = W.body, e = {}, "function" === typeof window.CustomEvent ? f = new CustomEvent(k, e) : (f = document.createEvent("CustomEvent"), f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)), g.dispatchEvent(f);
                    if (null ==
                        c ? 0 : null != F(I(c, 19))) {
                        k = new bc;
                        g = T(c, 5, 0);
                        Zb(k, 1, g);
                        g = Pd(d.href, "nx");
                        "" != g && Yb(k, 2, +g);
                        g = Pd(d.href, "ny");
                        "" != g && Yb(k, 3, +g);
                        g = Pd(d.href, "bg");
                        "" != g && U(k, 4, g);
                        g = Pd(d.href, "nm");
                        "" != g && Yb(k, 5, +g);
                        g = Pd(d.href, "mb");
                        "" != g && Yb(k, 6, +g);
                        g = d.href;
                        e = g.search(vc);
                        f = 0;
                        for (var l = []; 0 <= (h = uc(g, f, "bg", e));) l.push(g.substring(f, h)), f = Math.min(g.indexOf("&", h) + 1 || e, e);
                        l.push(g.slice(f));
                        g = l.join("").replace(xc, "$1");
                        rc(d, Qc(g, Rc(1211)));
                        g = Q(c, 19);
                        e = null != lb(I(c, 20)) ? N(lb(I(c, 20)), 0) : null;
                        h = $b(k);
                        l = a.o;
                        k = xd(m);
                        f =
                            new kc;
                        U(f, 1, g);
                        null !== e && Yb(f, 2, e);
                        null !== l && U(f, 3, l);
                        g = U(f, 4, h);
                        Zb(g, 9, 4);
                        var n;
                        null == k || null == (n = k.fence) || n.reportEvent({
                            eventType: "click",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"]
                        });
                        var p;
                        null == k || null == (p = k.fence) || p.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        });
                        Zb(f, 9, 5);
                        let q;
                        null == k || null == (q = k.fence) || q.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        });
                        Zb(f, 9, 7);
                        let z;
                        null == k ||
                            null == (z = k.fence) || z.setReportEventDataForAutomaticBeacons({
                                eventType: "reserved.top_navigation_start",
                                eventData: JSON.stringify(f),
                                destination: ["buyer"],
                                once: !0
                            })
                    }
                    P(a.h, 16) || a.M ? ne(a, b, d, c) : (n = "", (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)), oe(a, b, d, c, n))
                }
            }
        }
    }

    function le(a, b, c, d) {
        if (a.F === b && a.H) {
            const f = new dc(a.H),
                h = Q(d, 9);
            var e = "";
            switch (T(f, 4, 1)) {
                case 2:
                    if (N(lb(I(f, 2)), 0)) e = "blocked_fast_click";
                    else if (Q(f, 1) || Q(f, 7)) e = "blocked_border_click";
                    break;
                case 3:
                    e = W;
                    e = e.getElementById ? e.getElementById("common_15click_anchor") : null;
                    const g = window;
                    if ("function" === typeof g.copfcChm && e) {
                        d = Kb(d);
                        Zb(d, 5, 12);
                        Ub(d, 4).set("nb", (12).toString());
                        const k = he(a.g, e);
                        k ? k.data = d : a.g.push({
                            element: e,
                            data: d
                        });
                        !a.R && c && (me(a, b, c, d), U(d, 2, c.href));
                        g.copfcChm(b, Ad(d, e.href), null,
                            void 0 !== K(f, cc, 10) ? $b(M(f, cc, 10)) : null);
                        a.R && me(a, b, e, d)
                    }
                    e = "onepointfiveclick_first_click"
            }
            h && e && Nd(h + "&label=" + e, !1);
            Nc(a.N)
        }
    }

    function me(a, b, c, d) {
        if (!P(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (rc(c, Qc(e[0], Rc(557))); !c.id;)
                if (f = "asoch-id-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, W.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" ===
            typeof window.ja && window.ja(f, d ? T(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(c);
            a.i && "function" === typeof window.ss && (a.P ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
            0 < e.length && (a = 0 < a.o.length && (null == d || null == F(I(d, 19))) ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1] : c.href + e[1], rc(c, Qc(a, Rc(557))))
        }
    }
    async function ne(a, b, c, d) {
        let e = "";
        var f = m.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.M)) {
            if (a.aa) return;
            if (f = await f.getNativeClickMeta()) {
                if (f.customClickGestureEligible) return;
                e = Dd(e, "nas", f.encodedNas)
            }
        }
        oe(a, b, c, d, e)
    }

    function oe(a, b, c, d, e) {
        const f = P(a.h, 2),
            h = f && 300 < Date.now() - a.O,
            g = m.oneAfmaInstance;
        g ? (zc(b), (() => {
            let k = P(d, 13) ? e : g.logScionEventAndAddParam(e);
            if (!a.D && d && void 0 !== K(d, ec, 12)) {
                var l = M(d, ec, 12).v();
                if (0 < Vb(d).length)
                    for (const n of Vb(d));
                P(M(d, ec, 12), 2) ? (g.click(k), g.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Kd(a.m, d, k, g, a.ba) || Md(f, h, a.da, a.D, d, k, g, a.ca, a.K)
        })()) : (b = window, a.Z && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : h && (b = null != c.getAttribute("attributionsrc") && "6" === wc(c.getAttribute("attributionsrc"),
            "nis") ? Ld(c.href, () => {}) : Ld(c.href), b !== c.href && rc(c, Qc(b, Rc(599)))));
        h && (a.O = Date.now());
        Nc(a.N)
    }
    var je = class {
        constructor(a) {
            this.D = Na || La || Oa || Ma;
            var b = Sc("data-asoch-meta");
            if (1 !== b.length) wd({
                type: 2,
                data: b.length
            });
            else {
                this.N = 70;
                this.h = new ic(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.L = a["extra-meta"] ? new ic(JSON.parse(a["extra-meta"])) : null;
                this.M = "true" === a["is-fsn"];
                this.aa = "true" === a["is-tap-disabled-for-fsn"];
                this.m = a["ios-store-overlay-config"] ? new jc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.da = "true" === a["use-cct-over-browser"];
                this.ba = "true" === a["send-ac-click-ping-by-js"];
                this.R = "true" === a["correct-redirect-url-for-och-15-click"];
                this.ca = "true" === a["send-click-ping-by-js-in-och"];
                this.Y = "true" === a["middle-clicks-in-och"];
                this.I = "true" === a["default-msg-in-och"];
                this.Z = "true" === a["enable-paw"];
                this.K = "true" === a["allow-redirection-muted-in-och"];
                this.o = "";
                b = fe();
                null != b && b.then(d => {
                    var e = $b(d);
                    d = [];
                    for (var f = 0, h = 0; h < e.length; h++) {
                        var g = e.charCodeAt(h);
                        255 < g && (d[f++] = g & 255, g >>= 8);
                        d[f++] = g
                    }
                    e = 3;
                    void 0 === e && (e = 0);
                    if (!Qa)
                        for (Qa = {}, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                            h = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; 5 > g; g++) {
                            var k = f.concat(h[g].split(""));
                            Pa[g] = k;
                            for (var l = 0; l < k.length; l++) {
                                var n = k[l];
                                void 0 === Qa[n] && (Qa[n] = l)
                            }
                        }
                    e = Pa[e];
                    f = Array(Math.floor(d.length / 3));
                    h = e[64] || "";
                    for (g = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            q = d[k + 1];
                        n = d[k + 2];
                        l = e[p >> 2];
                        p = e[(p & 3) << 4 | q >> 4];
                        q = e[(q & 15) << 2 | n >> 6];
                        n = e[n & 63];
                        f[g++] = l + p + q + n
                    }
                    l = 0;
                    n = h;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], n = e[(l & 15) << 2] || h;
                        case 1:
                            d = d[k], f[g] = e[d >> 2] + e[(d & 3) << 4 | l >> 4] + n + h
                    }
                    this.o = f.join("")
                });
                this.g = Bd(this.h);
                this.I && (this.l = null,
                    hc(this.h).forEach(d => {
                        null == this.l && null != F(I(d, 2)) && null != F(I(d, 9)) && (this.l = d)
                    }));
                this.ea = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.O = -Infinity;
                this.i = Q(this.h, 5) || "";
                this.P = P(this.h, 11);
                this.L && (this.P = P(this.L, 11));
                this.H = this.F = null;
                P(this.h, 3) || (Fd(this.g), Xb(this.h, 3, !0));
                ge(this.g);
                a = m.oneAfmaInstance;
                !this.D && a && Id(this.g, this.ea);
                var c;
                if (a && (null == (c = this.m) ? 0 : P(c, 2))) switch (c = () => {
                    const d = N(lb(I(this.m, 4)), 0);
                    0 < d ? m.setTimeout(() => {
                        Hd(this.g)
                    }, d) : Hd(this.g)
                }, T(this.m,
                    3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        Ec(c);
                        break;
                    default:
                        Hd(this.g)
                }
                qc(W, "click", vd(557, d => {
                    ke(this, d)
                }), mc);
                this.Y && qc(W, "auxclick", vd(557, d => {
                    1 === d.button && ke(this, d)
                }), mc);
                this.i && "function" === typeof window.ss && qc(W.body, "mouseover", vd(626, () => {
                    window.ss(this.i, 0)
                }), nc);
                "function" === typeof window.ivti && window.ivti(W.body);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, e) => {
                    this.F = d;
                    this.H = e
                })
            }
        }
    };
    var pe = vd(555, a => ie(a));
    Kc = 70;
    const qe = Mc(70, document.currentScript);
    if (null == qe) throw Error("JSC not found 70");
    const re = {},
        se = qe.attributes;
    for (let a = se.length - 1; 0 <= a; a--) {
        const b = se[a].name;
        0 === b.indexOf("data-jcp-") && (re[b.substring(9)] = se[a].value)
    }
    pe(re);
}).call(this);