;

function ctSetCookie(e) {
    let useCookies, useAltCookies;
    if ('undefined' !== typeof ct_use_cookies) {
        useCookies = ct_use_cookies
    } else {
        useCookies = !1
    };
    if ('undefined' !== typeof ct_use_alt_cookies) {
        useAltCookies = ct_use_alt_cookies
    } else {
        useAltCookies = !1
    };
    if (useCookies) {
        if (useAltCookies && useAltCookies === 1) {
            let xhr = new XMLHttpRequest();
            let json = JSON.stringify(e);
            xhr.open('POST', '/admin/config/cleantalk/set_alt_cookies');
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(json)
        } else {
            e.forEach(function(e) {
                let ctSecure = location.protocol === 'https:' ? '; secure' : '';
                document.cookie = e.name + '=' + encodeURIComponent(e.value) + '; path=/; expires=0; samesite=lax' + ctSecure
            })
        }
    }
};;;
var d = new Date(),
    ctTimeMs = new Date().getTime(),
    ctMouseEventTimerFlag = !0,
    ctMouseData = '[',
    ctMouseDataCounter = 0,
    ctScrollCollected = !1;
ctSetCookie([{
    'name': 'ct_check_js',
    'value': ct_check_js_val
}, {
    'name': 'ct_ps_timestamp',
    'value': Math.floor(new Date().getTime() / 1000)
}, {
    'name': 'ct_fkp_timestamp',
    'value': '0'
}, {
    'name': 'ct_pointer_data',
    'value': '0'
}, {
    'name': 'ct_timezone',
    'value': d.getTimezoneOffset() / 60 * (-1)
}, {
    'name': 'apbct_antibot',
    'value': drupal_ac_antibot_cookie_value
}, {
    'name': 'ct_has_scrolled',
    'value': !1
}]);
var ctMouseReadInterval = setInterval(function() {
        ctMouseEventTimerFlag = !0
    }, 150),
    ctMouseWriteDataInterval = setInterval(function() {
        if (typeof ct_use_alt_cookies !== 'undefined' && ct_use_alt_cookies === 1) {
            return
        };
        var e = ctMouseData.slice(0, -1).concat(']');
        ctSetCookie([{
            'name': 'ct_pointer_data',
            'value': e
        }])
    }, 1200);

function ctMouseStopData() {
    if (typeof window.addEventListener == 'function') {
        window.removeEventListener('mousemove', ctFunctionMouseMove)
    } else {
        window.detachEvent('onmousemove', ctFunctionMouseMove)
    };
    clearInterval(ctMouseReadInterval);
    clearInterval(ctMouseWriteDataInterval)
};
var ctFunctionMouseMove = function(e) {
    if (ctMouseEventTimerFlag == !0) {
        var t = new Date();
        ctMouseData += '[' + Math.round(e.pageY) + ',' + Math.round(e.pageX) + ',' + Math.round(t.getTime() - ctTimeMs) + '],';
        ctMouseDataCounter++;
        ctMouseEventTimerFlag = !1;
        if (ctMouseDataCounter >= 100) {
            ctMouseStopData()
        }
    }
};

function ctSetHasScrolled() {
    if (!ctScrollCollected) {
        ctSetCookie([{
            'name': 'ct_has_scrolled',
            'value': !0
        }]);
        ctScrollCollected = !0
    }
};

function ctKeyStopStopListening() {
    if (typeof window.addEventListener == 'function') {
        window.removeEventListener('mousedown', ctFunctionFirstKey);
        window.removeEventListener('keydown', ctFunctionFirstKey)
    } else {
        window.detachEvent('mousedown', ctFunctionFirstKey);
        window.detachEvent('keydown', ctFunctionFirstKey)
    }
};
var ctFunctionFirstKey = function(e) {
    var t = Math.floor(new Date().getTime() / 1000);
    ctSetCookie([{
        'name': 'ct_fkp_timestamp',
        'value': t
    }]);
    ctKeyStopStopListening()
};
if (typeof window.addEventListener == 'function') {
    window.addEventListener('mousemove', ctFunctionMouseMove);
    window.addEventListener('mousedown', ctFunctionFirstKey);
    window.addEventListener('keydown', ctFunctionFirstKey);
    window.addEventListener('scroll', ctSetHasScrolled)
} else {
    window.attachEvent('onmousemove', ctFunctionMouseMove);
    window.attachEvent('mousedown', ctFunctionFirstKey);
    window.attachEvent('keydown', ctFunctionFirstKey);
    window.attachEvent('scroll', ctSetHasScrolled)
};

function apbct_collect_visible_fields(e) {
    var n = [],
        t = '',
        a = 0,
        o = '',
        c = 0,
        s = [];
    for (var i in e.elements) {
        if (!isNaN(+i)) {
            n[i] = e.elements[i]
        }
    };
    n = n.filter(function(e) {
        if (s.indexOf(e.getAttribute('name')) !== -1) {
            return !1
        };
        if (-1 !== ['radio', 'checkbox'].indexOf(e.getAttribute('type'))) {
            s.push(e.getAttribute('name'));
            return !1
        };
        return !0
    });
    n.forEach(function(e, n, i) {
        if (e.getAttribute('type') === 'submit' || e.getAttribute('name') === null || e.getAttribute('name') === 'ct_checkjs') {
            return
        };
        if (getComputedStyle(e).display === 'none' || getComputedStyle(e).visibility === 'hidden' || getComputedStyle(e).opacity === '0' || e.getAttribute('type') === 'hidden') {
            if (e.classList.contains('wp-editor-area')) {
                t += ' ' + e.getAttribute('name');
                a++
            } else {
                o += ' ' + e.getAttribute('name');
                c++
            }
        } else {
            t += ' ' + e.getAttribute('name');
            a++
        }
    });
    o = o.trim();
    t = t.trim();
    return {
        visible_fields: t,
        visible_fields_count: a,
        invisible_fields: o,
        invisible_fields_count: c,
    }
};

function apbct_visible_fields_set_cookie(e) {
    var t = typeof e === 'object' && e !== null ? e : {};
    ctSetCookie([{
        'name': 'apbct_visible_fields',
        'value': JSON.stringify(t)
    }])
};;
(function(s) {
    s.fn.superfish = function(i) {
        var a = s.fn.superfish,
            n = a.c,
            t = s(['<span class="', n.arrowClass, '"> &#187;</span>'].join('')),
            e = function() {
                var a = s(this),
                    n = l(a);
                clearTimeout(n.sfTimer);
                a.showSuperfishUl().siblings().hideSuperfishUl()
            },
            o = function() {
                var i = s(this),
                    o = l(i),
                    n = a.op;
                clearTimeout(o.sfTimer);
                o.sfTimer = setTimeout(function() {
                    if (i.children('.sf-clicked').length == 0) {
                        n.retainPath = (s.inArray(i[0], n.$path) > -1);
                        i.hideSuperfishUl();
                        if (n.$path.length && i.parents(['li.', n.hoverClass].join('')).length < 1) {
                            e.call(n.$path)
                        }
                    }
                }, n.delay)
            },
            l = function(s) {
                var i = s.parents(['ul.', n.menuClass, ':first'].join(''))[0];
                a.op = a.o[i.serial];
                return i
            },
            h = function(s) {
                s.addClass(n.anchorClass).append(t.clone())
            };
        return this.each(function() {
            var c = this.serial = a.o.length,
                l = s.extend({}, a.defaults, i);
            l.$path = s('li.' + l.pathClass, this).slice(0, l.pathLevels);
            var f = l.$path;
            for (var r = 0; r < f.length; r++) {
                f.eq(r).addClass([l.hoverClass, n.bcClass].join(' ')).filter('li:has(ul)').removeClass(l.pathClass)
            };
            a.o[c] = a.op = l;
            s('li:has(ul)', this)[(s.fn.hoverIntent && !l.disableHI) ? 'hoverIntent' : 'hover'](e, o).each(function() {
                if (l.autoArrows) h(s(this).children('a:first-child, span.nolink:first-child'))
            }).not('.' + n.bcClass).hideSuperfishUl();
            var t = s('a, span.nolink', this);
            t.each(function(s) {
                var a = t.eq(s).parents('li');
                t.eq(s).focus(function() {
                    e.call(a)
                }).blur(function() {
                    o.call(a)
                })
            });
            l.onInit.call(this)
        }).each(function() {
            var i = [n.menuClass];
            if (a.op.dropShadows) {
                i.push(n.shadowClass)
            };
            s(this).addClass(i.join(' '))
        })
    };
    var a = s.fn.superfish;
    a.o = [];
    a.op = {};
    a.c = {
        bcClass: 'sf-breadcrumb',
        menuClass: 'sf-js-enabled',
        anchorClass: 'sf-with-ul',
        arrowClass: 'sf-sub-indicator',
        shadowClass: 'sf-shadow'
    };
    a.defaults = {
        hoverClass: 'sfHover',
        pathClass: 'overideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        speed: 'fast',
        autoArrows: !0,
        dropShadows: !0,
        disableHI: !1,
        onInit: function() {},
        onBeforeShow: function() {},
        onShow: function() {},
        onHide: function() {}
    };
    s.fn.extend({
        hideSuperfishUl: function() {
            var n = a.op,
                e = (n.retainPath === !0) ? n.$path : '';
            n.retainPath = !1;
            var i = s(['li.', n.hoverClass].join(''), this).add(this).not(e).removeClass(n.hoverClass).children('ul').addClass('sf-hidden');
            n.onHide.call(i);
            return this
        },
        showSuperfishUl: function() {
            var s = a.op,
                i = a.c.shadowClass + '-off',
                n = this.addClass(s.hoverClass).children('ul.sf-hidden').hide().removeClass('sf-hidden');
            s.onBeforeShow.call(n);
            n.animate(s.animation, s.speed, function() {
                s.onShow.call(n)
            });
            return this
        }
    })
})(jQuery);;
/*!
 * hoverIntent v1.10.1 // 2019.10.05 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2019 Brian Cherne
 */
! function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && factory(jQuery)
}(function($) {
    "use strict";

    function track(ev) {
        cX = ev.pageX, cY = ev.pageY
    }
    var cX, cY, _cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        INSTANCE_COUNT = 0,
        compare = function(ev, $el, s, cfg) {
            if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]);
            s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function() {
                compare(ev, $el, s, cfg)
            }, cfg.interval)
        };
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++,
            cfg = $.extend({}, _cfg);
        $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, {
            over: handlerIn,
            out: handlerOut,
            selector: selector
        }) : $.extend(cfg, {
            over: handlerIn,
            out: handlerIn,
            selector: handlerOut
        });

        function handleHover(e) {
            var ev = $.extend({}, e),
                $el = $(this),
                hoverIntentData = $el.data("hoverIntent");
            hoverIntentData || $el.data("hoverIntent", hoverIntentData = {});
            var state = hoverIntentData[instanceId];
            state || (hoverIntentData[instanceId] = state = {
                id: instanceId
            }), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId));
            var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId;
            if ("mouseenter" === e.type) {
                if (state.isActive) return;
                state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function() {
                    compare(ev, $el, state, cfg)
                }, cfg.interval)
            } else {
                if (!state.isActive) return;
                $el.off(mousemove, track), state.timeoutId = setTimeout(function() {
                    ! function(ev, $el, s, out) {
                        var data = $el.data("hoverIntent");
                        data && delete data[s.id], out.apply($el[0], [ev])
                    }(ev, $el, state, cfg.out)
                }, cfg.timeout)
            }
        }
        return this.on({
            "mouseenter.hoverIntent": handleHover,
            "mouseleave.hoverIntent": handleHover
        }, cfg.selector)
    }
});;
(function(e) {
    e.fn.sfsmallscreen = function(n) {
        n = e.extend({
            mode: 'inactive',
            type: 'accordion',
            breakpoint: 768,
            breakpointUnit: 'px',
            useragent: '',
            title: '',
            addSelected: !1,
            menuClasses: !1,
            hyperlinkClasses: !1,
            excludeClass_menu: '',
            excludeClass_hyperlink: '',
            includeClass_menu: '',
            includeClass_hyperlink: '',
            accordionButton: 1,
            expandText: 'Expand',
            collapseText: 'Collapse'
        }, n);

        function f(e) {
            var i = e.clone(),
                f = i.find('span.sf-sub-indicator'),
                r = i.find('.sf-smallscreen-remove'),
                u = i.find('ul.sf-multicolumn');
            for (var l = 0; l < r.length; l++) {
                r.eq(l).replaceWith(r.eq(l).html())
            };
            if (n.accordionButton == 2 || n.type == 'select') {
                for (var o = 0; o < f.length; o++) {
                    f.eq(o).remove()
                }
            };
            if (u.length > 0) {
                u.removeClass('sf-multicolumn');
                var d = i.find('div.sf-multicolumn-column > ol');
                for (var a = 0; a < d.length; a++) {
                    d.eq(a).replaceWith('<ul>' + d.eq(a).html() + '</ul>')
                };
                var c = ['div.sf-multicolumn-column', '.sf-multicolumn-wrapper > ol', 'li.sf-multicolumn-wrapper'];
                for (var t = 0; t < c.length; t++) {
                    obj = i.find(c[t]);
                    for (var s = 0; s < obj.length; s++) {
                        obj.eq(s).replaceWith(obj.eq(s).html())
                    }
                };
                i.find('.sf-multicolumn-column').removeClass('sf-multicolumn-column')
            };
            i.add(i.find('*')).css({
                width: ''
            });
            return i
        };

        function o(i, t) {
            var u = '',
                m = e(i).children('li');
            for (var f = 0; f < m.length; f++) {
                var h = m.eq(f),
                    p = h.children('a, span');
                for (var c = 0; c < p.length; c++) {
                    var a = p.eq(c),
                        r = (a.is('a') && !!a.attr('href')) ? a.attr('href') : '',
                        l = a.clone(),
                        s = (n.hyperlinkClasses) ? ((n.excludeClass_hyperlink && l.hasClass(n.excludeClass_hyperlink)) ? l.removeClass(n.excludeClass_hyperlink).attr('class') : l.attr('class')) : '',
                        s = (n.includeClass_hyperlink && !l.hasClass(n.includeClass_hyperlink)) ? ((n.hyperlinkClasses) ? l.addClass(n.includeClass_hyperlink).attr('class') : n.includeClass_hyperlink) : s;
                    if (n.addSelected && a.hasClass('active')) {
                        s += ' active'
                    };
                    s = (s) ? ' class="' + s + '"' : '';
                    disable = (r == '') || (r == '#') ? ' disabled="disabled"' : '', subIndicator = 1 < t ? Array(t).join('-') + ' ' : '';
                    u += '<option value="' + r + '"' + s + disable + '>' + subIndicator + e.trim(a.text()) + '</option>', childUL = h.find('> ul');
                    for (var d = 0; d < childUL.length; d++) {
                        u += o(childUL.eq(d), t + 1)
                    }
                }
            };
            return u
        };

        function s(i) {
            var d = i.attr('id'),
                m = f(i);
            if (n.type == 'accordion') {
                var p = d + '-toggle',
                    u = d + '-accordion';
                if (e('#' + u).length == 0) {
                    var g = i.attr('class').split(' ').filter(function(e) {
                            return e.indexOf('sf-style-') > -1 ? e : ''
                        }),
                        s = e(m).attr('id', u);
                    s.removeClass('sf-horizontal sf-vertical sf-navbar sf-shadow sf-js-enabled');
                    s.addClass('sf-accordion sf-hidden');
                    s.find('li').each(function() {
                        e(this).removeAttr('style').removeClass('sfHover').attr('id', e(this).attr('id') + '-accordion')
                    });
                    s.children('ul').removeAttr('style').not('.sf-hidden').addClass('sf-hidden');
                    var b = '<div class="sf-accordion-toggle ' + g + '"><a href="#" id="' + p + '"><span>' + n.title + '</span></a></div>';
                    if (n.accordionButton == 2) {
                        s.addClass('sf-accordion-with-buttons');
                        var h = s.find('li.menuparent');
                        for (var c = 0; c < h.length; c++) {
                            h.eq(c).prepend('<a href="#" class="sf-accordion-button">' + n.expandText + '</a>')
                        }
                    };
                    i.before(b).before(s).hide();
                    var l = e('#' + u),
                        C = (n.accordionButton < 2) ? 'a.menuparent,span.nolink.menuparent' : 'a.sf-accordion-button',
                        x = l.find(C);
                    e('#' + p).on('click', function(i) {
                        i.preventDefault();
                        e(this).toggleClass('sf-expanded');
                        if (l.hasClass('sf-expanded')) {
                            l.add(l.find('li.sf-expanded')).removeClass('sf-expanded').end().children('ul').hide().end().hide().addClass('sf-hidden').show();
                            if (n.accordionButton == 2) {
                                l.find('a.sf-accordion-button').text(n.expandText)
                            }
                        } else {
                            l.addClass('sf-expanded').hide().removeClass('sf-hidden').show()
                        }
                    });
                    x.on('click', function(i) {
                        if (e(this).closest('li').children('ul').length > 0) {
                            i.preventDefault();
                            var s = e(this).closest('li');
                            if (n.accordionButton == 1 && s.children('a.menuparent,span.nolink.menuparent').length > 0 && s.children('ul').children('li.sf-clone-parent').length == 0) {
                                var a = s.children('a.menuparent').clone();
                                a.removeClass('menuparent sf-with-ul').children('.sf-sub-indicator').remove();
                                a = e('<li class="sf-clone-parent" />').html(a);
                                s.children('ul').addClass('sf-has-clone-parent').prepend(a)
                            };
                            if (s.hasClass('sf-expanded')) {
                                s.children('ul').slideUp('fast', function() {
                                    e(this).closest('li').removeClass('sf-expanded').end().addClass('sf-hidden').show()
                                });
                                if (n.accordionButton == 2 && s.children('.sf-accordion-button').length > 0) {
                                    s.children('.sf-accordion-button').text(n.expandText)
                                }
                            } else {
                                s.children('ul').hide().removeClass('sf-hidden').slideDown('fast').end().addClass('sf-expanded').children('a.sf-accordion-button').text(n.collapseText).end().siblings('li.sf-expanded').children('ul').slideUp('fast', function() {
                                    e(this).closest('li').removeClass('sf-expanded').end().addClass('sf-hidden').show()
                                }).parent().children('a.sf-accordion-button').text(n.expandText)
                            }
                        }
                    })
                }
            } else {
                var t = i.clone(),
                    a = (n.menuClasses) ? ((n.excludeClass_menu && t.hasClass(n.excludeClass_menu)) ? t.removeClass(n.excludeClass_menu).attr('class') : t.attr('class')) : '',
                    a = (n.includeClass_menu && !t.hasClass(n.includeClass_menu)) ? ((n.menuClasses) ? t.addClass(n.includeClass_menu).attr('class') : n.includeClass_menu) : a,
                    a = (a) ? ' class="' + a + '"' : '';
                if (e('#' + d + '-select').length == 0) {
                    var v = o(m, 1),
                        r = e('<select' + a + ' id="' + d + '-select"/>').html('<option>' + n.title + '</option>' + v).change(function() {
                            if (e('option:selected', this).index()) {
                                window.location = r.val()
                            }
                        });
                    if (n.addSelected) {
                        r.find('.active').attr('selected', !0)
                    };
                    i.before(r).hide()
                }
            }
        };

        function u(i) {
            var s = '#' + i.attr('id');
            e(s + '-' + n.type).remove();
            if (n.type == 'accordion') {
                e(s + '-toggle').parent('div').remove()
            };
            e(s).css('display', '')
        };
        for (var t = 0; t < this.length; t++) {
            var i = e(this).eq(t),
                l = n.mode;
            if (i.children('li').length == 0) {} else if (l == 'always_active') {
                s(i)
            } else if (l == 'window_width') {
                var a = (n.breakpointUnit == 'em') ? (n.breakpoint * parseFloat(e('body').css('font-size'))) : n.breakpoint,
                    c = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    d;
                if ((typeof Modernizr === 'undefined' || typeof Modernizr.mq !== 'function') && c < a) {
                    s(i)
                } else if (typeof Modernizr !== 'undefined' && typeof Modernizr.mq === 'function' && Modernizr.mq('(max-width:' + (a - 1) + 'px)')) {
                    s(i)
                };
                e(window).resize(function() {
                    clearTimeout(d);
                    d = setTimeout(function() {
                        var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        if ((typeof Modernizr === 'undefined' || typeof Modernizr.mq !== 'function') && e < a) {
                            s(i)
                        } else if (typeof Modernizr !== 'undefined' && typeof Modernizr.mq === 'function' && Modernizr.mq('(max-width:' + (a - 1) + 'px)')) {
                            s(i)
                        } else {
                            u(i)
                        }
                    }, 50)
                })
            } else if (l == 'useragent_custom') {
                if (n.useragent != '') {
                    var r = RegExp(n.useragent, 'i');
                    if (navigator.userAgent.match(r)) {
                        s(i)
                    }
                }
            } else if (l == 'useragent_predefined' && navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i)) {
                s(i)
            }
        };
        return this
    }
})(jQuery);;
(function(s) {
    s.fn.supposition = function() {
        var t = s(window),
            e = function(s) {
                return window[s == 'y' ? 'pageYOffset' : 'pageXOffset'] || document.documentElement && document.documentElement[s == 'y' ? 'scrollTop' : 'scrollLeft'] || document.body[s == 'y' ? 'scrollTop' : 'scrollLeft']
            },
            o = function() {
                this.css({
                    bottom: ''
                })
            },
            i = function() {
                this.each(function() {
                    var o = s(this);
                    o.css('display', 'block');
                    var i = o.closest('.sf-menu'),
                        a = o.parents('ul').length,
                        n = o.width(),
                        l = o.closest('li').outerWidth(!0),
                        f = o.closest('li').offset().left,
                        v = t.width() + e('x'),
                        c = o.offset().left + n,
                        C = (c > (l + f)) ? n - (c - (l + f)) : n;
                    if (o.parents('.sf-js-enabled').hasClass('rtl')) {
                        if (f < C) {
                            if ((i.hasClass('sf-horizontal') && a == 1) || (i.hasClass('sf-navbar') && a == 2)) {
                                o.css({
                                    left: 0,
                                    right: 'auto'
                                })
                            } else {
                                o.css({
                                    left: l + 'px',
                                    right: 'auto'
                                })
                            };
                            o.parent().addClass('sf-supposition-active')
                        }
                    } else {
                        if (c > v && f > n) {
                            if ((i.hasClass('sf-horizontal') && a == 1) || (i.hasClass('sf-navbar') && a == 2)) {
                                o.css({
                                    right: 0,
                                    left: 'auto'
                                })
                            } else {
                                o.css({
                                    right: l + 'px',
                                    left: 'auto'
                                })
                            };
                            o.parent().addClass('sf-supposition-active')
                        }
                    };
                    var p = t.height(),
                        h = o.offset().top,
                        r = (i.hasClass('sf-shadow') && o.css('padding-bottom').length > 0) ? parseInt(o.css('padding-bottom').slice(0, -2)) : 0,
                        d = (i.hasClass('sf-vertical')) ? '-' + r : o.parent().outerHeight(!0) - r,
                        u = o.height(),
                        g = p + e('y'),
                        m = ((h + u > g) && (h > u));
                    if (m) {
                        o.css({
                            bottom: d + 'px',
                            top: 'auto'
                        })
                    };
                    o.css('display', 'none')
                })
            };
        return this.each(function() {
            var t = s.fn.superfish.o[this.serial],
                e = t.onBeforeShow,
                a = t.onHide;
            s.extend(s.fn.superfish.o[this.serial], {
                onBeforeShow: function() {
                    i.call(this);
                    e.call(this)
                },
                onHide: function() {
                    o.call(this);
                    a.call(this)
                }
            })
        })
    }
})(jQuery);;
(function(t) {
    t.fn.supersubs = function(s) {
        var o = t.extend({}, t.fn.supersubs.defaults, s);
        for (var h = 0; h < this.length; h++) {
            var e = t(this).eq(h),
                l = t.meta ? t.extend({}, o, e.data()) : o;
            if (e.hasClass('sf-navbar')) {
                e = e.children('li').children('ul')
            };
            var u = e.find('ul');
            if (u.length) {
                var c = t('<li id="menu-fontsize">&#8212;</li>'),
                    v = c.attr('style', 'padding:0;position:absolute;top:-99999em;width:auto;').appendTo(e)[0].clientWidth;
                c.remove();
                for (var r = 0; r < u.length; r++) {
                    var i = u.eq(r);
                    if (l.multicolumn && i.hasClass('sf-multicolumn') && i.find('.sf-multicolumn-column').length > 0) {
                        var n = i.find('div.sf-multicolumn-column > ol'),
                            f = 0;
                        for (var d = 0; d < n.length; d++) {
                            m(n.eq(d));
                            var a = Math.ceil(n.width());
                            n.css({
                                width: a
                            }).parents('.sf-multicolumn-column').css({
                                width: a
                            });
                            f += a
                        };
                        i.add(i.find('li.sf-multicolumn-wrapper, li.sf-multicolumn-wrapper > ol')).css({
                            width: f
                        })
                    } else {
                        m(i)
                    }
                }
            }
        };

        function m(i) {
            var e = i.children(),
                a = e.children('a');
            e.css('white-space', 'nowrap');
            i.add(e).add(a).css({
                float: 'none',
                width: 'auto'
            });
            var t = i.get(0).clientWidth / v;
            t += l.extraWidth;
            if (t > l.maxWidth) {
                t = l.maxWidth
            } else if (t < l.minWidth) {
                t = l.minWidth
            };
            t += 'em';
            i.css({
                width: t
            });
            e.add(a).css({
                float: '',
                width: '',
                whiteSpace: ''
            });
            for (var n = 0; n < e.length; n++) {
                var s = e.eq(n).children('ul'),
                    d = s.css('left') !== undefined ? 'left' : 'right';
                s.css(d, '100%')
            }
        };
        return this
    };
    t.fn.supersubs.defaults = {
        multicolumn: !0,
        minWidth: 12,
        maxWidth: 27,
        extraWidth: 1
    }
})(jQuery);;
(function(s, u, i) {
    'use strict';
    u.behaviors.superfish = {
        attach: function(u, i) {
            s.each(i.superfish || {}, function(e, i) {
                var n = s('ul#' + i.id, u);
                if (i.plugins || !1) {
                    if (i.plugins.supersubs || !1) {
                        n.supersubs(i.plugins.supersubs)
                    }
                };
                n.superfish(i.sf);
                if (i.plugins || !1) {
                    if (i.plugins.touchscreen || !1) {
                        n.sftouchscreen(i.plugins.touchscreen)
                    };
                    if (i.plugins.smallscreen || !1) {
                        n.sfsmallscreen(i.plugins.smallscreen)
                    };
                    if (i.plugins.supposition || !1) {
                        n.supposition()
                    }
                }
            })
        }
    }
})(jQuery, Drupal, drupalSettings);;;
jQuery(document).ready(function(o) {
    o(window).scroll(function() {
        if (o(this).scrollTop() != 0) {
            o('#toTop').fadeIn()
        } else {
            o('#toTop').fadeOut()
        }
    });
    o('#toTop').click(function() {
        o('body,html').animate({
            scrollTop: 0
        }, 800)
    })
});;