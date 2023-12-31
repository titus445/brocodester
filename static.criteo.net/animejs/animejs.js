window.animejs = function(n) {
    var P, u = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        c = {
            duration: 1e3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        r = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];

    function l(t, n) {
        return -1 < t.indexOf(n)
    }
    var d = {
            arr: function(t) {
                return Array.isArray(t)
            },
            obj: function(t) {
                return l(Object.prototype.toString.call(t), "Object")
            },
            pth: function(t) {
                return d.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            dom: function(t) {
                return t.nodeType || d.svg(t)
            },
            str: function(t) {
                return "string" == typeof t
            },
            fnc: function(t) {
                return "function" == typeof t
            },
            und: function(t) {
                return void 0 === t
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            cssPredefinedColors: ["black", "white", "red", "blue", "green", "yellow", "pink", "magenta", "orange", "brown"],
            col: function(t) {
                return d.hex(t) || d.rgb(t) || d.hsl(t) || -1 < d.cssPredefinedColors.indexOf(t)
            }
        },
        g = function() {
            function e(t, n) {
                return 1 - 3 * n + 3 * t
            }

            function a(t, n) {
                return 3 * n - 6 * t
            }

            function i(t) {
                return 3 * t
            }

            function c(t, n, r) {
                return ((e(n, r) * t + a(n, r)) * t + i(n)) * t
            }

            function s(t, n, r) {
                return 3 * e(n, r) * t * t + 2 * a(n, r) * t + i(n)
            }
            return function(i, n, o, r) {
                if (0 <= i && i <= 1 && 0 <= o && o <= 1) {
                    var u = new Array(11);
                    if (i !== n || o !== r)
                        for (var t = 0; t < 11; ++t) u[t] = c(.1 * t, i, o);
                    return function(t) {
                        return i === n && o === r ? t : 0 === t ? 0 : 1 === t ? 1 : c(e(t), n, r)
                    }
                }

                function e(t) {
                    for (var n = 0, r = 1; 10 !== r && u[r] <= t; ++r) n += .1;
                    var e = n + (t - u[--r]) / (u[r + 1] - u[r]) * .1,
                        a = s(e, i, o);
                    return .001 <= a ? function(t, n, r, e) {
                        for (var a = 0; a < 4; ++a) {
                            var i = s(n, r, e);
                            if (0 === i) return n;
                            n -= (c(n, r, e) - t) / i
                        }
                        return n
                    }(t, e, i, o) : 0 === a ? e : function(t, n, r, e, a) {
                        for (var i, o, u = 0; 0 < (i = c(o = n + (r - n) / 2, e, a) - t) ? r = o : n = o, 1e-7 < Math.abs(i) && ++u < 10;);
                        return o
                    }(t, n, n + .1, i, o)
                }
            }
        }(),
        p = function() {
            var r = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"];

            function e(t, n) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - n / (2 * Math.PI) * Math.asin(1)) * (2 * Math.PI) / n)
            }
            var t = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], e
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function(t, n) {
                            return 1 - e(1 - t, n)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function(t, n) {
                            e(t < .5 ? 2 * t : -2 * t + 2, n)
                        }
                    ]
                },
                a = {
                    linear: g(.25, .25, .75, .75)
                };
            for (var i in t) t[i].forEach(function(t, n) {
                a["ease" + i + r[n]] = d.fnc(t) ? t : g.apply(this, t)
            });
            return a
        }();

    function a(t) {
        if (!d.col(t)) try {
            return document.querySelectorAll(t)
        } catch (t) {
            return
        }
    }

    function C(t, n) {
        for (var r = t.length, e = 2 <= arguments.length ? n : void 0, a = [], i = 0; i < r; i++)
            if (i in t) {
                var o = t[i];
                n.call(e, o, i, t) && a.push(o)
            }
        return a
    }

    function e(t) {
        return t.reduce(function(t, n) {
            return t.concat(d.arr(n) ? e(n) : n)
        }, [])
    }

    function s(t) {
        return d.arr(t) ? t : (d.str(t) && (t = a(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function o(t, n) {
        return t.some(function(t) {
            return t === n
        })
    }

    function i(t) {
        var n = {};
        for (var r in t) n[r] = t[r];
        return n
    }

    function f(t, n) {
        var r = i(t);
        for (var e in t) r[e] = n.hasOwnProperty(e) ? n[e] : t[e];
        return r
    }

    function v(t, n) {
        var r = i(t);
        for (var e in n) r[e] = d.und(t[e]) ? n[e] : t[e];
        return r
    }

    function h(t) {
        var n = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, n, r, e) {
                return n + n + r + r + e + e
            }),
            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
        return "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)"
    }

    function m(t) {
        return d.rgb(t) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n = t)) ? "rgba(" + r[1] + ",1)" : n : d.hex(t) ? h(t) : d.hsl(t) ? function(t) {
            var n, r, e, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                i = parseInt(a[1]) / 360,
                o = parseInt(a[2]) / 100,
                u = parseInt(a[3]) / 100,
                c = a[4] || 1;

            function s(t, n, r) {
                return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (n - t) * r : r < .5 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t
            }
            if (0 == o) n = r = e = u;
            else {
                var f = u < .5 ? u * (1 + o) : u + o - u * o,
                    l = 2 * u - f;
                n = s(l, f, i + 1 / 3), r = s(l, f, i), e = s(l, f, i - 1 / 3)
            }
            return "rgba(" + 255 * n + "," + 255 * r + "," + 255 * e + "," + c + ")"
        }(t) : -1 < d.cssPredefinedColors.indexOf(t) ? "white" === (e = t) ? h("#FFFFFF") : "black" === e ? h("#000000") : "red" === e ? h("#FF0000") : "blue" === e ? h("#0000FF") : "green" === e ? h("#008000") : "yellow" === e ? h("#FFFF00") : "pink" === e ? h("#FFC0CB") : "magenta" === e ? h("#FF00FF") : "orange" === e ? h("#FFA5OO") : "brown" === e ? h("#A52A2A") : void console.log("Unknown color in animejs: " + e) : void 0;
        var n, r, e
    }

    function y(t) {
        var n = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
        if (n) return n[2]
    }

    function j(t, n, r) {
        return Math.min(Math.max(t, n), r)
    }

    function b(t, n) {
        return d.fnc(t) ? t(n.target, n.id, n.total) : t
    }

    function L(t, n) {
        if (n in t.style) return getComputedStyle(t).getPropertyValue(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function w(t, n) {
        return d.dom(t) && o(r, n) ? "transform" : d.dom(t) && (t.getAttribute(n) || d.svg(t) && t[n]) ? "attribute" : d.dom(t) && "transform" !== n && L(t, n) ? "css" : null != t[n] ? "object" : void 0
    }

    function x(t, r) {
        var n, e = l(n = r, "translate") || "perspective" === n ? "px" : l(n, "rotate") || l(n, "skew") ? "deg" : void 0,
            a = l(r, "scale") ? 1 : 0 + e,
            i = t.style.transform;
        if (!i) return a;
        for (var o = [], u = [], c = [], s = /(\w+)\((.+?)\)/g; o = s.exec(i);) u.push(o[1]), c.push(o[2]);
        var f = C(c, function(t, n) {
            return u[n] === r
        });
        return f.length ? f[0] : a
    }

    function F(t, n) {
        switch (w(t, n)) {
            case "transform":
                return x(t, n);
            case "css":
                return L(t, n);
            case "attribute":
                return t.getAttribute(n)
        }
        return t[n] || 0
    }

    function A(t, n) {
        var r = /^(\*=|\+=|-=)/.exec(t);
        if (!r) return t;
        var e = y(t) || 0,
            a = parseFloat(n),
            i = parseFloat(t.replace(r[0], ""));
        switch (r[0][0]) {
            case "+":
                return a + i + e;
            case "-":
                return a - i + e;
            case "*":
                return a * i + e
        }
    }

    function M(t, n) {
        return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
    }

    function k(t) {
        for (var n, r = t.points, e = 0, a = 0; a < r.numberOfItems; a++) {
            var i = r.getItem(a);
            0 < a && (e += M(n, i)), n = i
        }
        return e
    }

    function O(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
            case "circle":
                return i = t, 2 * Math.PI * i.getAttribute("r");
            case "rect":
                return 2 * (a = t).getAttribute("width") + 2 * a.getAttribute("height");
            case "line":
                return M({
                    x: (e = t).getAttribute("x1"),
                    y: e.getAttribute("y1")
                }, {
                    x: e.getAttribute("x2"),
                    y: e.getAttribute("y2")
                });
            case "polyline":
                return k(t);
            case "polygon":
                return r = (n = t).points, k(n) + M(r.getItem(r.numberOfItems - 1), r.getItem(0))
        }
        var n, r, e, a, i
    }

    function T(r, e) {
        function t(t) {
            t || (t = 0);
            var n = 1 <= e + t ? e + t : 0;
            return r.el.getPointAtLength(n)
        }
        var n = t(),
            a = t(-1),
            i = t(1);
        switch (r.property) {
            case "x":
                return n.x;
            case "y":
                return n.y;
            case "angle":
                return 180 * Math.atan2(i.y - a.y, i.x - a.x) / Math.PI
        }
    }

    function I(t, n) {
        var r = /-?\d*\.?\d+/g,
            e = function(t, n) {
                if (d.col(t)) return m(t);
                var r = y(t),
                    e = r ? t.substr(0, t.length - r.length) : t;
                return n && !/\s/g.test(t) ? e + n : e
            }(d.pth(t) ? t.totalLength : t, n) + "";
        return {
            original: e,
            numbers: e.match(r) ? e.match(r).map(Number) : [0],
            strings: d.str(t) || n ? e.split(r) : []
        }
    }

    function N(t) {
        return C(t ? e(d.arr(t) ? t.map(s) : s(t)) : [], function(t, n, r) {
            return r.indexOf(t) === n
        })
    }

    function E(t, a) {
        var n = i(a);
        if (d.arr(t)) {
            var r = t.length;
            2 === r && !d.obj(t[0]) ? t = {
                value: t
            } : d.fnc(a.duration) || (n.duration = a.duration / r)
        }
        return s(t).map(function(t, n) {
            var r = n ? 0 : a.delay,
                e = d.obj(t) && !d.pth(t) ? t : {
                    value: t
                };
            return d.und(e.delay) && (e.delay = r), e
        }).map(function(t) {
            return v(t, n)
        })
    }

    function $(c, s) {
        var f;
        return c.tweens.map(function(t) {
            var n = function(t, n) {
                    var r = {};
                    for (var e in t) {
                        var a = b(t[e], n);
                        d.arr(a) && 1 === (a = a.map(function(t) {
                            b(t, n)
                        })).length && (a = a[0]), r[e] = a
                    }
                    return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                }(t, s),
                r = n.value,
                e = F(s.target, c.name),
                a = f ? f.to.original : e,
                i = d.arr(r) ? r[0] : a,
                o = A(d.arr(r) ? r[1] : r, i),
                u = y(o) || y(i) || y(e);
            return n.from = I(i, u), n.to = I(o, u), n.start = f ? f.end : c.offset, n.end = n.start + n.delay + n.duration, n.easing = function(t) {
                return d.arr(t) ? g.apply(this, t) : p[t]
            }(n.easing), n.elasticity = (1e3 - j(n.elasticity, 1, 999)) / 1e3, n.isPath = d.pth(r), n.isColor = d.col(n.from.original), n.isColor && (n.round = 1), f = n
        })
    }
    var S = {
        css: function(t, n, r) {
            t.style[n] = r
        },
        attribute: function(t, n, r) {
            t.setAttribute(n, r)
        },
        object: function(t, n, r) {
            t[n] = r
        },
        transform: function(t, n, r, e, a) {
            e[a] || (e[a] = []), e[a].push(n + "(" + r + ")")
        }
    };

    function V(t, r) {
        return C(e(t.map(function(n) {
            return r.map(function(t) {
                return function(t, n) {
                    var r = w(t.target, n.name);
                    if (r) {
                        var e = $(n, t);
                        return {
                            type: r,
                            property: n.name,
                            animatable: t,
                            tweens: e,
                            duration: e[e.length - 1].end,
                            delay: e[0].delay
                        }
                    }
                }(n, t)
            })
        })), function(t) {
            return !d.und(t)
        })
    }

    function X(n, t, r, e) {
        var a = "delay" === n;
        return t.length ? (a ? Math.min : Math.max).apply(Math, t.map(function(t) {
            return t[n]
        })) : a ? e.delay : r.offset + e.delay + e.duration
    }

    function Y(t) {
        var n, r, e = f(u, t),
            a = f(c, t),
            i = (n = t.targets, (r = N(n)).map(function(t, n) {
                return {
                    target: t,
                    id: n,
                    total: r.length
                }
            })),
            o = V(i, function(t, n, r) {
                var e = [],
                    a = v(t, n);
                for (var i in r) a.hasOwnProperty(i) || "targets" === i || e.push({
                    name: i,
                    offset: a.offset,
                    tweens: E(r[i], n)
                });
                return e
            }(e, a, t));
        return v(e, {
            children: [],
            animatables: i,
            animations: o,
            duration: X("duration", o, e, a),
            delay: X("delay", o, e, a)
        })
    }
    var Z = [],
        Q = null,
        q = function() {
            function e() {
                Q = n.onNextFrame(t)
            }

            function t(t) {
                var n = Z.length;
                if (n) {
                    for (var r = 0; r < n;) Z[r] && Z[r].tick(t), r++;
                    e()
                } else Q.cancel(), Q = null
            }
            return e
        }();

    function z(t) {
        t || (t = {});
        var u, c, s = 0,
            f = null;

        function l() {
            return window.Promise && new Promise(function(t) {
                f = t
            })
        }
        var d = l(),
            I = Y(t);

        function g() {
            I.reversed = !I.reversed
        }

        function p(t) {
            return I.reversed ? I.duration - t : t
        }

        function v(n) {
            for (var t = 0, r = {}, e = I.animations, a = e.length; t < a;) {
                var i = e[t],
                    o = i.animatable,
                    u = i.tweens,
                    c = u.length - 1,
                    s = u[c];
                c && (s = C(u, function(t) {
                    return n < t.end
                })[0] || s);
                for (var f, l = j(n - s.start - s.delay, 0, s.duration) / s.duration, d = isNaN(l) ? 1 : s.easing(l, s.elasticity), g = s.to.strings, p = s.round, v = [], h = s.to.numbers.length, m = 0; m < h; m++) {
                    var y, b = s.to.numbers[m],
                        w = s.from.numbers[m];
                    y = s.isPath ? T(s.value, d * b) : w + d * (b - w), p && (s.isColor && 2 < m || (y = Math.round(y * p) / p)), v.push(y)
                }
                var x = g.length;
                if (x) {
                    f = g[0];
                    for (var F = 0; F < x; F++) {
                        g[F];
                        var A = g[F + 1];
                        m = v[F];
                        isNaN(m) || (f += A ? m + A : m + " ")
                    }
                } else f = v[0];
                S[i.type](o.target, i.property, f, r, o.id), i.currentValue = f, t++
            }
            var M = Object.keys(r).length;
            if (M)
                for (var k = 0; k < M; k++) {
                    if (!P) {
                        var O = "transform";
                        P = L(document.body, O) ? O : "-webkit-" + O
                    }
                    I.animatables[k].target.style[P] = r[k].join(" ")
                }
            I.currentTime = n, I.progress = n / I.duration * 100
        }

        function h(t) {
            I[t] && I[t](I)
        }

        function m() {
            I.remaining && !0 !== I.remaining && I.remaining--
        }

        function n(t) {
            var n = I.duration,
                r = I.offset,
                e = r + I.delay,
                a = I.currentTime,
                i = I.reversed,
                o = p(t);
            I.children.length && function(t) {
                var n = I.children,
                    r = n.length;
                if (t >= I.currentTime)
                    for (var e = 0; e < r; e++) n[e].seek(t);
                else
                    for (e = r; e--;) n[e].seek(t)
            }(o), (e <= o || !n) && (I.began || (I.began = !0, h("begin")), h("run")), r < o && o < n ? v(o) : (o <= r && 0 !== a && (v(0), i && m()), (n <= o && a !== n || !n) && (v(n), i || m())), h("update"), n <= t && (I.remaining ? (c = u, "alternate" === I.direction && g()) : (I.pause(), I.completed || (I.completed = !0, h("complete"), "Promise" in window && (f(), d = l()))), s = 0)
        }
        return I.reset = function(t) {
            var n = I.direction,
                r = I.loop;
            I.currentTime = 0, I.progress = 0, I.paused = !0, I.began = !1, I.completed = !1, I.reversed = "reverse" === n, I.remaining = "alternate" === n && 1 === r ? 2 : r, t || v(0);
            for (var e = I.children.length; e--;) I.children[e].reset()
        }, I.tick = function(t) {
            u = t, c || (c = u), n((s + u - c) * z.speed)
        }, I.seek = function(t) {
            n(p(t))
        }, I.pause = function() {
            var t = Z.indexOf(I); - 1 < t && Z.splice(t, 1), I.paused = !0
        }, I.play = function() {
            I.paused && (I.paused = !1, c = 0, s = p(I.currentTime), Z.push(I), Q && null !== Q || q())
        }, I.reverse = function() {
            g(), c = 0, s = p(I.currentTime)
        }, I.restart = function() {
            I.pause(), I.reset(), I.play()
        }, I.finished = d, I.reset(!0), I.autoplay && I.play(), I
    }
    return z.version = "2.2.0", z.speed = 1, z.running = Z, z.remove = function(t) {
        for (var n = N(t), r = Z.length; r--;)
            for (var e = Z[r], a = e.animations, i = a.length; i--;) o(n, a[i].animatable.target) && (a.splice(i, 1), a.length || e.pause())
    }, z.getValue = F, z.path = function(t, n) {
        var r = d.str(t) ? a(t)[0] : t,
            e = n || 100;
        return function(t) {
            return {
                el: r,
                property: t,
                totalLength: O(r) * (e / 100)
            }
        }
    }, z.setDashoffset = function(t) {
        var n = O(t);
        return t.setAttribute("stroke-dasharray", n), n
    }, z.bezier = g, z.easings = p, z.timeline = function(i) {
        var o = z(i);
        return o.pause(), o.duration = 0, o.add = function(t) {
            return o.children.forEach(function(t) {
                t.began = !0, t.completed = !0
            }), s(t).forEach(function(t) {
                var n = v(t, f(c, i || {}));
                n.targets = n.targets || i.targets;
                var r = o.duration,
                    e = n.offset;
                n.autoplay = !1, n.direction = o.direction, n.offset = d.und(e) ? r : A(e, r), o.began = !0, o.completed = !0, o.seek(n.offset);
                var a = z(n);
                a.began = !0, a.completed = !0, a.duration > r && (o.duration = a.duration), o.children.push(a)
            }), o.seek(0), o.reset(), o.autoplay && o.restart(), o
        }, o
    }, z.random = function(t, n) {
        return Math.floor(Math.random() * (n - t + 1)) + t
    }, {
        anime: z
    }
}, "function" == typeof window.animeJsReady && window.animeJsReady();