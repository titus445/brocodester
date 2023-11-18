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
            for (var d = g, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    }

    function n(a, b) {
        a = a.split(".");
        var c = g;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var q = m(610401301, !1),
        r = m(572417392, m(1, !0));
    var x;
    const y = g.navigator;
    x = y ? y.userAgentData || null : null;

    function z(a) {
        return q ? x ? x.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function A(a) {
        var b;
        a: {
            if (b = g.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function B() {
        return q ? !!x && 0 < x.brands.length : !1
    }

    function C() {
        return B() ? z("Chromium") : (A("Chrome") || A("CriOS")) && !(B() ? 0 : A("Edge")) || A("Silk")
    };
    !A("Android") || C();
    C();
    A("Safari") && (C() || (B() ? 0 : A("Coast")) || (B() ? 0 : A("Opera")) || (B() ? 0 : A("Edge")) || (B() ? z("Microsoft Edge") : A("Edg/")) || B() && z("Opera"));
    var D = !r;
    let E = !r;
    const F = Symbol();

    function H(a) {
        const b = a[F] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), a[F] = b | 1)
    }

    function I() {
        var a = [];
        a[F] |= 1;
        return a
    }

    function aa(a, b) {
        b[F] = (a | 0) & -14591
    }

    function J(a, b) {
        b[F] = (a | 34) & -14557
    }

    function K(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var L = {},
        ba = {};

    function M(a) {
        return !(!a || "object" !== typeof a || a.B !== ba)
    }

    function N(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ca = !r;

    function O(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[F] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[F] = d | 1;
        return !0
    }
    var P;
    const da = [];
    da[F] = 55;
    P = Object.freeze(da);
    const ea = Symbol();
    let Q;

    function S(a, b) {
        Q = b;
        a = new a(b);
        Q = void 0;
        return a
    };

    function fa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) {
                    if (Array.isArray(a)) return ca || !O(a, void 0, 9999) ? a : void 0;
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

    function ha(a, b, c) {
        a = Array.prototype.slice.call(a);
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

    function ka(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[F] | 0) & 1 ? void 0 : f && (a[F] | 0) & 2 ? a : T(a, b, c, void 0 !== d, e, f);
            else if (N(a)) {
                const h = {};
                for (let k in a) h[k] = ka(a[k], b, c, d, e, f);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function T(a, b, c, d, e, f) {
        const h = d || c ? a[F] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let k = 0; k < a.length; k++) a[k] = ka(a[k], b, c, d, e, f);
        c && c(h, a);
        return a
    }

    function la(a) {
        return a.o === L ? a.toJSON() : fa(a)
    };

    function ma(a, b, c = J) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[F] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[F] = (d | 34) & -12293, a) : T(a, ma, d & 4 ? J : c, !0, !1, !0)
            }
            a.o === L && (c = a.j, d = c[F], a = d & 2 ? a : S(a.constructor, na(c, d, !0)));
            return a
        }
    }

    function na(a, b, c) {
        const d = c || b & 2 ? J : aa,
            e = !!(b & 32);
        a = ha(a, b, f => ma(f, e, d));
        a[F] = a[F] | 32 | (c ? 2 : 0);
        return a
    };
    Object.freeze({});

    function U(a, b, c) {
        a = a.j;
        let d = a[F];
        if (d & 2) throw Error();
        a: if (-1 === c) var e = null;
            else {
                if (c >= K(d)) {
                    if (d & 256) {
                        e = a[a.length - 1][c];
                        break a
                    }
                } else if (e = c + (+!!(d & 512) - 1), e < a.length) {
                    e = a[e];
                    break a
                }
                e = void 0
            }
        if (null != e && "object" === typeof e && e.o === L) b = e;
        else if (Array.isArray(e)) {
            var f = e[F] | 0,
                h = f;
            0 === h && (h |= d & 32);
            h |= d & 2;
            h !== f && (e[F] = h);
            b = new b(e)
        } else d & 2 ? (f = b[ea]) ? b = f : (f = new b, h = f.j, h[F] |= 34, b = b[ea] = f) : b = new b;
        f = b.j;
        h = f[F];
        b = h & 2 ? S(b.constructor, na(f, h, !1)) : b;
        if (e !== b) a: if (f = K(d), c >= f) {
            e = d;
            if (d & 256) f = a[a.length -
                1];
            else {
                if (null == b) break a;
                f = a[f + (+!!(d & 512) - 1)] = {};
                e |= 256
            }
            f[c] = b;
            e !== d && (a[F] = e)
        } else a[c + (+!!(d & 512) - 1)] = b, d & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    var V = class {
        constructor(a) {
            a: {
                null == a && (a = Q);Q = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[F] | 0;
                    if (b & 64) break a;
                    b |= 64;
                    var c = a.length;
                    if (c && (--c, N(a[c]))) {
                        b |= 256;
                        c -= +!!(b & 512) - 1;
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[F] = b
            }
            this.j = a
        }
        toJSON() {
            var a = T(this.j, la, void 0, void 0, !1, !1);
            return oa(this, a, !0)
        }
    };
    V.prototype.o = L;
    V.prototype.toString = function() {
        return oa(this, this.j, !1).toString()
    };

    function oa(a, b, c) {
        const d = a.constructor.m;
        var e = (c ? a.j : b)[F],
            f = K(e),
            h = !1;
        if (d && ca) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var k;
                if (b.length && N(k = b[b.length - 1]))
                    for (h = 0; h < d.length; h++)
                        if (d[h] >= f) {
                            Object.assign(b[b.length - 1] = {}, k);
                            break
                        }
                h = !0
            }
            f = b;
            c = !c;
            k = a.j[F];
            a = K(k);
            k = +!!(k & 512) - 1;
            var l;
            for (let G = 0; G < d.length; G++) {
                var t = d[G];
                if (t < a) {
                    t += k;
                    var v = f[t];
                    null == v ? f[t] = c ? P : I() : c && v !== P && H(v)
                } else {
                    if (!l) {
                        var p = void 0;
                        f.length && N(p = f[f.length - 1]) ? l = p : f.push(l = {})
                    }
                    v = l[t];
                    null == l[t] ? l[t] = c ? P : I() : c && v !== P && H(v)
                }
            }
        }
        l =
            b.length;
        if (!l) return b;
        let ia, ja;
        if (N(p = b[l - 1])) {
            a: {
                var u = p;f = {};c = !1;
                for (var w in u) {
                    a = u[w];
                    if (Array.isArray(a)) {
                        k = a;
                        if (!E && O(a, d, +w) || !D && M(a) && 0 === a.size) a = null;
                        a != k && (c = !0)
                    }
                    null != a ? f[w] = a : c = !0
                }
                if (c) {
                    for (let G in f) {
                        u = f;
                        break a
                    }
                    u = null
                }
            }
            u != p && (ia = !0);l--
        }
        for (e = +!!(e & 512) - 1; 0 < l; l--) {
            w = l - 1;
            p = b[w];
            if (!(null == p || !E && O(p, d, w - e) || !D && M(p) && 0 === p.size)) break;
            ja = !0
        }
        if (!ia && !ja) return b;
        var R;
        h ? R = b : R = Array.prototype.slice.call(b, 0, l);
        b = R;
        h && (b.length = l);
        u && b.push(u);
        return b
    };

    function pa(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[F] |= 32;
                b = S(a, b)
            }
            return b
        }
    };
    var qa = class extends V {};
    qa.m = [17];
    var ra = class extends V {};
    ra.m = [76, 27];
    var sa = class extends V {};
    sa.m = [8];
    var ta = pa(class extends V {});
    var ua = class extends V {},
        va = pa(ua);
    ua.m = [1, 2, 3];

    function W(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function X(a, b) {
        a = a.body;
        var c = {
            detail: void 0
        };
        let d;
        "function" === typeof window.CustomEvent ? d = new CustomEvent(b, c) : (d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !!c.bubbles, !!c.cancelable, c.detail));
        a.dispatchEvent(d)
    }
    var wa = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            W(a, "sampling_mod");
            var b = W(a, "namespace");
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
            if (!(0 < this.g.length)) {
                a = W(this.body, "environment");
                for (const d of a.split("|")) d && this.g.push(d)
            }
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function xa(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };

    function ya(a) {
        if (1 >= a.i.offsetWidth || 1 >= a.i.offsetHeight) return !1;
        a.g.remove();
        X(a.context, "spanReady");
        return !0
    }
    var za = class {
        constructor(a) {
            this.context = a;
            this.config = {
                A: !1,
                v: 100
            };
            this.i = xa("SPAN");
            this.g = xa("DIV");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!this.config.A && (X(this.context, "spanStart"), this.context.body.appendChild(this.g), !ya(this))) return new Promise(a => {
                const b = setInterval(() => {
                    ya(this) && (clearInterval(b), a())
                }, this.config.v)
            })
        }
    };
    var Aa = class {
        constructor(a, b) {
            this.context = a;
            this.config = b;
            this.g = U(b, ra, 1);
            U(b, sa, 12);
            U(this.g, qa, 10)
        }
    };

    function Ba(a) {
        a.l.length = 0;
        a.i = !0
    }

    function Ca(a, b) {
        a.g = !0;
        const c = () => {
            a.i = !1;
            const d = a.l.shift();
            return void 0 === d ? (a.g = !1, Promise.resolve()) : Ca(a, d())
        };
        return b ? b.then(c, () => {
            if (a.i) return c();
            a.g = !1;
            return Promise.reject()
        }) : c()
    }

    function Da(a, b) {
        for (const c of b) a.l.push(c);
        if (!a.g) return Ca(a)
    }
    var Ea = class {
        constructor() {
            this.i = this.g = !1;
            this.l = []
        }
    };

    function Fa(a) {
        Ba(a.l);
        return Da(a.l, [() => {
            if (!a.s) {
                var b = W(a.context.body, "render_config") || "[]";
                b = ta(b);
                b = new Aa(a.context, b);
                a.s = b
            }
            b = (new za(a.context)).wait();
            X(a.context, "browserStart");
            X(a.context, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            X(a.context, "browserReady");
            X(a.context, "browserReadyEnd");
            a.g |= 4;
            X(a.context, "overallReady")
        }, () => {
            X(a.context, "browserQuiet");
            X(a.context, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function Ga(a) {
        va(W(a.context.body, "engine_msg") || "[]");
        return Fa(a) || Promise.resolve()
    }
    var Y = class {
        constructor(a, b) {
            this.l = new Ea;
            this.g = 0;
            this.context = new wa(b)
        }
        u() {
            return this.g
        }
        i() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.context.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (1 === a) X(this.context, "overallStart"), Ga(this).then(() => {
                    X(this.context, "overallQuiet")
                });
                else {
                    var c = b.clientHeight;
                    b.clientWidth && c && Ga(this)
                }
            })
        }
    };
    let Z;
    n("mys.engine.init", (a, b) => {
        Z = new Y(a, b);
        Z.i()
    });
    n("mys.engine.stage", () => {
        let a;
        return (null == (a = Z) ? void 0 : a.g) || 0
    });
    n("mys.Engine", Y);
    n("mys.Engine.prototype.i", Y.prototype.i);
    n("mys.Engine.prototype.s", Y.prototype.u);
}).call(this);