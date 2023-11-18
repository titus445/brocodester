(window.__twttrll = window.__twttrll || []).push([
    [2], {
        160: function(t, e, n) {
            var r = n(39),
                a = n(162),
                s = n(7);
            (r = Object.create(r)).build = s(r.build, null, a), t.exports = r
        },
        161: function(t, e, n) {
            var r = n(71),
                a = n(37),
                s = n(34),
                i = n(38),
                o = n(0),
                u = n(7),
                c = n(33),
                l = n(5),
                h = n(165);
            t.exports = function(t) {
                t.params({
                    partner: {
                        fallback: u(c.val, c, "partner")
                    }
                }), t.define("scribeItems", function() {
                    return {}
                }), t.define("scribeNamespace", function() {
                    return {
                        client: "tfw"
                    }
                }), t.define("scribeData", function() {
                    return {
                        widget_origin: i.rootDocumentLocation(),
                        widget_frame: i.isFramed() && i.currentDocumentLocation(),
                        widget_partner: this.params.partner,
                        widget_site_screen_name: h(c.val("site")),
                        widget_site_user_id: l.asNumber(c.val("site:id")),
                        widget_creator_screen_name: h(c.val("creator")),
                        widget_creator_user_id: l.asNumber(c.val("creator:id"))
                    }
                }), t.define("scribe", function(t, e, n) {
                    var a = this;
                    return s.getHorizonSettings().then(function(s) {
                        var i = {
                            session_id: s.sessionId
                        };
                        t = o.aug(a.scribeNamespace(), t || {}), e = o.aug(a.scribeData(), e || {}), r.clientEvent(t, e, !1, n, i)
                    })
                }), t.define("scribeInteraction", function(t, e, n) {
                    var r = a.extractTermsFromDOM(t.target);
                    return r.action = t.type, "url" === r.element && (r.element = a.clickEventElement(t.target)), this.scribe(r, e, n)
                })
            }
        },
        162: function(t, e, n) {
            var r = n(40),
                a = n(0),
                s = n(163);

            function i() {
                r.apply(this, arguments), this.Widget = this.Component
            }
            i.prototype = Object.create(r.prototype), a.aug(i.prototype, {
                factory: s,
                build: function() {
                    return r.prototype.build.apply(this, arguments)
                },
                selectors: function(t) {
                    var e = this.Widget.prototype.selectors;
                    t = t || {}, this.Widget.prototype.selectors = a.aug({}, t, e)
                }
            }), t.exports = i
        },
        163: function(t, e, n) {
            var r = n(6),
                a = n(35),
                s = n(41),
                i = n(0),
                o = n(7),
                u = n(164),
                c = "twitter-widget-";
            t.exports = function() {
                var t = s();

                function e(e, n) {
                    t.apply(this, arguments), this.id = c + u(), this.sandbox = n
                }
                return e.prototype = Object.create(t.prototype), i.aug(e.prototype, {
                    selectors: {},
                    hydrate: function() {
                        return r.resolve()
                    },
                    prepForInsertion: function() {},
                    render: function() {
                        return r.resolve()
                    },
                    show: function() {
                        return r.resolve()
                    },
                    resize: function() {
                        return r.resolve()
                    },
                    select: function(t, e) {
                        return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, i.toRealArray(t.querySelectorAll(e))) : []
                    },
                    selectOne: function() {
                        return this.select.apply(this, arguments)[0]
                    },
                    selectLast: function() {
                        return this.select.apply(this, arguments).pop()
                    },
                    on: function(t, e, n) {
                        var r, s = this.el;
                        this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : r = e, r = this.selectors[r] || r, n = o(n, this), t.forEach(r ? function(t) {
                            a.delegate(s, t, r, n)
                        } : function(t) {
                            s.addEventListener(t, n, !1)
                        }))
                    }
                }), e
            }
        },
        164: function(t, e) {
            var n = 0;
            t.exports = function() {
                return String(n++)
            }
        },
        165: function(t, e) {
            t.exports = function(t) {
                return t && "@" === t[0] ? t.substr(1) : t
            }
        },
        166: function(t, e, n) {
            var r = n(5),
                a = n(0);
            t.exports = function(t) {
                t.define("widgetDataAttributes", function() {
                    return {}
                }), t.define("setDataAttributes", function() {
                    var t = this.sandbox.sandboxEl;
                    a.forIn(this.widgetDataAttributes(), function(e, n) {
                        r.hasValue(n) && t.setAttribute("data-" + e, n)
                    })
                }), t.after("render", function() {
                    this.setDataAttributes()
                })
            }
        },
        172: function(t, e, n) {
            var r = n(34),
                a = {
                    features: {},
                    sessionId: ""
                };
            t.exports = function(t) {
                t.defineProperty("settingsData", {
                    get: function() {
                        return this._settingsData || a
                    },
                    set: function(t) {
                        this._settingsData = t
                    }
                }), t.after("initialize", function() {
                    var t = this;
                    return r.getHorizonSettings().then(function(e) {
                        t.settingsData = e
                    })
                })
            }
        },
        177: function(t, e) {
            var n = /\{\{([\w_]+)\}\}/g;
            t.exports = function(t, e) {
                return t.replace(n, function(t, n) {
                    return void 0 !== e[n] ? e[n] : t
                })
            }
        },
        181: function(t, e, n) {
            var r = n(6),
                a = n(160),
                s = n(33),
                i = n(19),
                o = n(177),
                u = n(0),
                c = n(16),
                l = n(7),
                h = n(72),
                p = n(70),
                f = h.followButtonHtmlPath,
                m = "Twitter Follow Button",
                d = "twitter-follow-button";

            function g(t) {
                return "large" === t ? "l" : "m"
            }
            t.exports = a.couple(n(161), n(166), function(t) {
                t.params({
                    screenName: {
                        required: !0
                    },
                    lang: {
                        required: !0,
                        transform: p.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: g
                    },
                    showScreenName: {
                        fallback: !0
                    },
                    showCount: {
                        fallback: !0
                    },
                    partner: {
                        fallback: l(s.val, s, "partner")
                    },
                    count: {},
                    preview: {}
                }), t.define("getUrlParams", function() {
                    var t = this.isFollowerCountSunset && this.isFollowerCountSunset();
                    return u.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        screen_name: this.params.screenName,
                        show_count: !t && "none" !== this.params.count && this.params.showCount,
                        show_screen_name: this.params.showScreenName,
                        preview: this.params.preview,
                        partner: this.params.partner,
                        dnt: i.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return u.aug({
                        "screen-name": this.params.screenName
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return u.aug(t(), {
                        page: "button",
                        section: "follow"
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "none" === this.params.count ? "nocount" : "withcount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t = o(f, {
                            lang: this.params.lang
                        }),
                        e = c.encode(this.getUrlParams()),
                        n = h.resourceBaseUrl + t + "#" + e;
                    return this.scribeImpression(), r.all([this.sandbox.setTitle(m), this.sandbox.addClass(d), this.sandbox.loadDocument(n)])
                })
            })
        },
        182: function(t, e, n) {
            var r = n(160),
                a = n(38),
                s = n(73),
                i = "tfw_legacy_timeline_sunset",
                o = "tfw_timeline_list",
                u = "tfw_follower_count_sunset";
            t.exports = r.couple(n(172), function(t) {
                t.define("isTimelineSunset", function() {
                    var t = this.settingsData.features,
                        e = s.getHostname(a.rootDocumentLocation()),
                        n = t && t[o] && t[o].bucket,
                        r = n && -1 !== n.indexOf(e);
                    return !0 === (t && t[i] && t[i].bucket) && !r
                }), t.define("isFollowerCountSunset", function() {
                    var t = this.settingsData.features;
                    return !0 === (t && t[u] && t[u].bucket)
                })
            })
        },
        199: function(t, e, n) {
            var r = n(6),
                a = n(4),
                s = n(8),
                i = n(33),
                o = n(19),
                u = n(177),
                c = n(73),
                l = n(0),
                h = n(16),
                p = n(2),
                f = n(160),
                m = n(7),
                d = n(72),
                g = n(70),
                b = d.tweetButtonHtmlPath,
                w = "Twitter Tweet Button",
                v = "twitter-tweet-button",
                _ = "twitter-share-button",
                x = "twitter-hashtag-button",
                y = "twitter-mention-button",
                D = ["share", "hashtag", "mention"];

            function k(t) {
                return "large" === t ? "l" : "m"
            }

            function N(t) {
                return l.contains(D, t)
            }

            function z(t) {
                return p.hashTag(t, !1)
            }

            function S(t) {
                return /\+/.test(t) && !/ /.test(t) ? t.replace(/\+/g, " ") : t
            }
            t.exports = f.couple(n(161), n(166), function(t) {
                t.params({
                    lang: {
                        required: !0,
                        transform: g.matchLanguage,
                        fallback: "en"
                    },
                    size: {
                        fallback: "medium",
                        transform: k
                    },
                    type: {
                        fallback: "share",
                        validate: N
                    },
                    text: {
                        transform: S
                    },
                    screenName: {
                        transform: p.screenName
                    },
                    buttonHashtag: {
                        transform: z
                    },
                    partner: {
                        fallback: m(i.val, i, "partner")
                    },
                    via: {},
                    related: {},
                    hashtags: {},
                    url: {}
                }), t.define("getUrlParams", function() {
                    var t = this.params.text,
                        e = this.params.url,
                        n = this.params.via,
                        r = this.params.related,
                        i = c.getScreenNameFromPage();
                    return "share" === this.params.type ? (t = t || a.title, e = e || c.getCanonicalURL() || s.href, n = n || i) : i && (r = r ? i + "," + r : i), l.compact({
                        id: this.id,
                        lang: this.params.lang,
                        size: this.params.size,
                        type: this.params.type,
                        text: t,
                        url: e,
                        via: n,
                        related: r,
                        button_hashtag: this.params.buttonHashtag,
                        screen_name: this.params.screenName,
                        hashtags: this.params.hashtags,
                        partner: this.params.partner,
                        original_referer: s.href,
                        dnt: o.enabled(),
                        time: +new Date
                    })
                }), t.around("widgetDataAttributes", function(t) {
                    return "mention" == this.params.type ? l.aug({
                        "screen-name": this.params.screenName
                    }, t()) : "hashtag" == this.params.type ? l.aug({
                        hashtag: this.params.buttonHashtag
                    }, t()) : l.aug({
                        url: this.params.url
                    }, t())
                }), t.around("scribeNamespace", function(t) {
                    return l.aug(t(), {
                        page: "button",
                        section: this.params.type
                    })
                }), t.define("scribeImpression", function() {
                    this.scribe({
                        action: "impression"
                    }, {
                        language: this.params.lang,
                        message: [this.params.size, "nocount"].join(":") + ":"
                    })
                }), t.override("render", function() {
                    var t, e = u(b, {
                            lang: this.params.lang
                        }),
                        n = h.encode(this.getUrlParams()),
                        a = d.resourceBaseUrl + e + "#" + n;
                    switch (this.params.type) {
                        case "hashtag":
                            t = x;
                            break;
                        case "mention":
                            t = y;
                            break;
                        default:
                            t = _
                    }
                    return this.scribeImpression(), r.all([this.sandbox.setTitle(w), this.sandbox.addClass(v), this.sandbox.addClass(t), this.sandbox.loadDocument(a)])
                })
            })
        },
        76: function(t, e, n) {
            var r = n(160);
            t.exports = r.build([n(181), n(182)])
        },
        81: function(t, e, n) {
            var r = n(160);
            t.exports = r.build([n(199)])
        }
    }
]);