(function() {
    if ("object" != typeof window._tct) {
        window._tct = [];
        var f = {
            protocol: "https:",
            host: "//www.trendcounter.com",
            l: "https://www.trendcounter.com",
            version: 3,
            h: {
                "default": {}
            },
            a: {
                "default": {
                    key: !1,
                    title: "trendcounter Web Analytics",
                    www: "leave",
                    url: "full",
                    cookie_domain: !1,
                    use_cookies: !0,
                    respect_dnt: !0
                }
            },
            f: {
                stack: [],
                ready: !1
            },
            D: function(a) {
                this.s();
                for (var b = 0; b < window._tcq.length; b++) {
                    a = window._tcq[b];
                    var c = this.j(a);
                    if ("object" != typeof this.a[c.b]) {
                        this.a[c.b] = {};
                        this.h[c.b] = {};
                        for (var e in this.a["default"]) this.a[c.b][e] =
                            this.a["default"][e]
                    }
                    "www" == c.action && "strip" == a[1] ? this.a[c.b].www = "strip" : "url" == c.action && this.g(a[1]) ? this.a[c.b].url = a[1] : "domain" == c.action && 0 <= a[1].indexOf(".") ? this.a[c.b].cookie_domain = a[1] : "init" == c.action ? this.a[c.b].key = a[1] : "use_cookies" == c.action ? this.a[c.b].use_cookies = a[1] : "respect_dnt" == c.action && (this.a[c.b].respect_dnt = a[1]);
                    !1 === this.a[c.b].cookie_domain && (this.a[c.b].cookie_domain = "." + location.hostname.replace(/^www\./i, ""))
                }
            },
            track: function(a, b) {
                if ("object" != typeof this.a[a] ||
                    !1 === this.a[a].key || this.v("_tc_" + this.a[a].key + "_z")) return !1;
                var c = !1;
                f.g(b[1]) && (this.a[a].url = b[1]);
                f.g(b[2]) && (c = b[2]);
                var e = navigator.language || navigator.userLanguage,
                    e = e.split("-")[0].toLowerCase();
                try {
                    0 <= window.location.href.indexOf("tcSetup") && this.u(function() {
                        var b = document.createElement("div");
                        b.style = "font-family:Sans;font-size:14px;line-height:20px;padding: 18px 22px;background: #3D444C;color:#c2cad2;width: 300px;border-radius: 6px;box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);position: fixed;top:20px;left:20px";
                        b.innerHTML = "de" == e ? b.innerHTML + ('<b>trendcounter wurde korrekt installiert</b><br>Betrachte jetzt <a href="' + f.l + "/report/" + f.a[a].key + '/" style="color:#c2cad2;text-decoration:underline;">deine Statistiken.</a>') : b.innerHTML + ('<b>trendcounter installation verified</b><br>View <a href="' + f.l + "/report/" + f.a[a].key + '/" style="color:#c2cad2;">your Statistics</a> now.');
                        document.getElementsByTagName("body")[0].appendChild(b)
                    })
                } catch (m) {}
                this.c(a, "v", this.version);
                this.c(a, "o", location.protocol + "//" + location.hostname +
                    (location.port ? ":" + location.port : ""));
                var d = 0;
                !1 !== this.v("_tc_" + this.a[a].key + "_a") && (d = 1);
                var l = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack;
                0 == this.a[a].respect_dnt && (l = !1);
                0 == l && 1 == this.a[a].use_cookies && this.B(a);
                this.c(a, "l", e);
                this.K(a);
                this.J(a);
                this.c(a, "k", d);
                this.L(a);
                d = document.title;
                !1 !== c ? this.c(a, "t", c.substr(0, 100)) : d && this.c(a, "t", d.substr(0, 100));
                this.c(a, "z", this.random());
                this.H(a)
            },
            B: function(a) {
                this.I("_tc_" + this.a[a].key + "_a", this.C(this.a[a].cookie_domain) +
                    "." + Math.floor((new Date).getTime() / 1E3), 31536E3, this.a[a].cookie_domain)
            },
            random: function() {
                return Math.round(2147483647 * Math.random())
            },
            c: function(a, b, c) {
                this.h[a][b] = c
            },
            A: function(a) {
                var b = "",
                    c;
                for (c in this.h[a]) b += encodeURIComponent(c) + "=" + encodeURIComponent(this.h[a][c]) + "&";
                return b.substr(0, b.length - 1)
            },
            J: function(a) {
                var b;
                try {
                    document.referrer && (b = document.referrer)
                } catch (c) {}
                try {
                    "object" == typeof top.document && (b = top.document.referrer)
                } catch (c) {}
                b = b.replace(/^https?:\/\//, "http://");
                b = b.substr(0,
                    250);
                this.c(a, "r", b)
            },
            K: function(a) {
                0 < screen.width && 0 < screen.height && (this.c(a, "w", screen.width), this.c(a, "h", screen.height))
            },
            L: function(a) {
                var b = "",
                    c = this.a[a].url,
                    e = window.location;
                if ("strip" == c) b = e.protocol + e.host + e.pathname;
                else if ("full" == c) b = e.href;
                else if ("canonical" == c)
                    for (tags = document.getElementsByTagName("link"), g = 0; g < tags.length; g++) {
                        if ("canonical" == tags[g].rel) {
                            b = tags[g].href;
                            break
                        }
                    } else b = c;
                b = b.replace(/^https?:\/\//, "http://");
                "strip" == this.a[a].www && (b = b.replace(/^http:\/\/www\./,
                    "http://"));
                b = b.substr(0, 250);
                this.c(a, "p", b)
            },
            C: function(a) {
                for (var b = 305419896, c = 0; c < a.length; c++) b += a.charCodeAt(c) * c;
                return b
            },
            I: function(a, b, c, e) {
                var d = new Date;
                d.setTime(d.getTime() + 1E3 * c);
                document.cookie = a + "=" + encodeURIComponent(b) + ";expires=" + d.toUTCString() + ";path=/;domain=" + e + ";secure;"
            },
            v: function(a) {
                for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                    var e = b[c].split("=");
                    if (0 <= e[0].indexOf(a)) return decodeURIComponent(e[1])
                }
                return !1
            },
            M: function(a) {
                return -1 !== document.cookie.indexOf(a +
                    "=")
            },
            g: function(a) {
                return "undefined" !== typeof a
            },
            H: function(a) {
                var b = this,
                    c = b.a[a],
                    e = b.l + "/";
                try {
                    "withCredentials" in new XMLHttpRequest ? (x = new(window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0"), x.open("GET", b.protocol + b.host + "/w/track/" + c.key + "/?" + b.A(a), !0), x.withCredentials = !0, x.onreadystatechange = function() {
                        4 === this.readyState && 200 == this.status && b.o(this.responseText, b, c, e)
                    }) : "undefined" !== typeof XDomainRequest && (x = new window.XDomainRequest, x.open("GET", document.location.protocol + b.host +
                        "/w/track/" + c.key + "/?" + b.A(a), !0), x.onload = function() {
                        b.o(x.responseText, b, c, e)
                    }), x.send()
                } catch (d) {}
            },
            o: function(a, b, c, e) {
                try {
                    var d = JSON.parse(a);
                    "undefined" != typeof d.w && ("sidebar" == d.w ? b.u(function() {
                        b.F(c, d.i, e, d.sp)
                    }) : "blank" != d.w && b.G(c, d.i, e));
                    "undefined" != typeof d.p && setTimeout(function() {
                        b.m(b, c, d.p)
                    }, d.p)
                } catch (l) {}
            },
            m: function(a, b, c) {
                (new Image(1, 1)).src = a.protocol + a.host + "/w/track/" + b.key + "/?ping=1&z=" + a.random();
                setTimeout(function() {
                    a.m(a, b, c)
                }, c)
            },
            u: function(a) {
                if ("function" == typeof a) {
                    if (this.f.ready) return a();
                    this.f.stack.push(a)
                }
            },
            s: function() {
                if (!this.f.ready) {
                    var a;
                    if (/interactive|complete|loaded/.test(document.readyState))
                        for (this.f.ready = !0; a = this.f.stack.shift();) a();
                    else {
                        var b = this;
                        setTimeout(function() {
                            b.s()
                        }, 50)
                    }
                }
            },
            G: function(a, b, c) {
                try {
                    var e = document.getElementById("tc-" + a.key);
                    null == e && (e = document.querySelector("script[data-tc-id='" + a.key + "']"));
                    element = document.createElement("a");
                    element.href = c;
                    element.target = "_blank";
                    element.innerHTML = '<img src="data:image/png;base64,' + b + '" border="0" alt="trendcounter" title="' +
                        a.title + '" />';
                    e.parentNode.insertBefore(element, e.nextSibling)
                } catch (d) {}
            },
            F: function(a, b, c, e) {
                var d = e.split("-");
                e = d[0];
                var d = d[1],
                    f = 45,
                    g = 94;
                if ("top" == e || "bottom" == e) f = 94, g = 45;
                f = "display:block !important;width: " + f + "px !important;height: " + g + "px !important;padding: 0;margin: 0;z-index: 9999999;cursor: pointer;bottom: 0;";
                if ("top" == d || "bottom" == d) f += d + ": 15% !important;" + e + ": -8px;";
                else if ("middle" == d) f += "top: 40% !important;" + e + ": -8px;";
                else if ("center" == d) f += "margin-left: -47px !important;left: 50% !important;" +
                    e + ": -8px;";
                else if ("right" == d || "left" == d) f += d + ": 15% !important;" + e + ": -8px;";
                d = document.createElement("div");
                d.title = a.title;
                f += 'position: fixed;background-image:url("data:image/png;base64,' + b + '");background-repeat:no-repeat;';
                d.style.setAttribute ? d.style.setAttribute("cssText", f) : d.setAttribute("style", f);
                d.onmouseover = function() {
                    this.style[e] = "0"
                };
                d.onmouseout = function() {
                    this.style[e] = "-8px"
                };
                d.onclick = function() {
                    window.open(c)
                };
                try {
                    document.getElementsByTagName("body")[0].insertBefore(d, document.body.firstChild)
                } catch (n) {}
            },
            j: function(a) {
                var b = {
                    b: "default",
                    action: a[0]
                };
                0 < a[0].indexOf(".") && (a = a[0].split("."), b.b = a[0], b.action = a[1]);
                return b
            }
        };
        window._trendcounter = {
            enableCookies: function() {
                f.a["default"].use_cookies = !0;
                f.a["default"].respect_dnt = !1;
                f.B("default")
            }
        };
        window._tcq.push = function(a) {
            var b = f.j(a);
            "track" == b.action && f.track(b.b, a)
        };
        try {
            for (var g = 0; g < window._tcq.length; g++) {
                var k = window._tcq[g],
                    h = f.j(k);
                if ("init" == h.action || "track" == h.action) "init" == h.action && (f.D(), f.g(k[2]) && 1 != k[2] || f.track(h.b, [])), "track" ==
                    h.action && f.track(h.b, k)
            }
        } catch (a) {}
    }
})();