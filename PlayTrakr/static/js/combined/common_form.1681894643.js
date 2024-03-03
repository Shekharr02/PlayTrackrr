/*
 jQuery Validation Plugin - v1.13.1 - 10/14/2014
 http://jqueryvalidation.org/
 Copyright (c) 2014 Jörn Zaefferer; Licensed MIT  jQuery UI - v1.11.2 - 2014-10-16
 http://jqueryui.com
 Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
 Copyright 2014 jQuery Foundation and other contributors; Licensed MIT  jQuery Form Plugin
 version: 3.34.0-2013.05.17
 @requires jQuery v1.5 or later
 Copyright (c) 2013 M. Alsup
 Examples and documentation at: http://malsup.com/jquery/form/
 Project repository: https://github.com/malsup/form
 Dual licensed under the MIT and GPL licenses.
 https://github.com/malsup/form#copyright-and-license
 jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, n, p) {
    if (b == Array.prototype || b == Object.prototype) return b;
    b[n] = p.value;
    return b
};
$jscomp.getGlobal = function(b) {
    b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var n = 0; n < b.length; ++n) {
        var p = b[n];
        if (p && p.Math == Math) return p
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(b, n) {
    var p = $jscomp.propertyToPolyfillSymbol[n];
    if (null == p) return b[n];
    p = b[p];
    return void 0 !== p ? p : b[n]
};
$jscomp.polyfill = function(b, n, p, g) {
    n && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, n, p, g) : $jscomp.polyfillUnisolated(b, n, p, g))
};
$jscomp.polyfillUnisolated = function(b, n, p, g) {
    p = $jscomp.global;
    b = b.split(".");
    for (g = 0; g < b.length - 1; g++) {
        var l = b[g];
        if (!(l in p)) return;
        p = p[l]
    }
    b = b[b.length - 1];
    g = p[b];
    n = n(g);
    n != g && null != n && $jscomp.defineProperty(p, b, {
        configurable: !0,
        writable: !0,
        value: n
    })
};
$jscomp.polyfillIsolated = function(b, n, p, g) {
    var l = b.split(".");
    b = 1 === l.length;
    g = l[0];
    g = !b && g in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var u = 0; u < l.length - 1; u++) {
        var x = l[u];
        if (!(x in g)) return;
        g = g[x]
    }
    l = l[l.length - 1];
    p = $jscomp.IS_SYMBOL_NATIVE && "es6" === p ? g[l] : null;
    n = n(p);
    null != n && (b ? $jscomp.defineProperty($jscomp.polyfills, l, {
        configurable: !0,
        writable: !0,
        value: n
    }) : n !== p && (void 0 === $jscomp.propertyToPolyfillSymbol[l] && (p = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[l] = $jscomp.IS_SYMBOL_NATIVE ?
        $jscomp.global.Symbol(l) : $jscomp.POLYFILL_PREFIX + p + "$" + l), $jscomp.defineProperty(g, $jscomp.propertyToPolyfillSymbol[l], {
        configurable: !0,
        writable: !0,
        value: n
    })))
};
$jscomp.polyfill("Array.prototype.includes", function(b) {
    return b ? b : function(n, p) {
        var g = this;
        g instanceof String && (g = String(g));
        var l = g.length;
        p = p || 0;
        for (0 > p && (p = Math.max(p + l, 0)); p < l; p++) {
            var u = g[p];
            if (u === n || Object.is(u, n)) return !0
        }
        return !1
    }
}, "es7", "es3");
$jscomp.arrayIteratorImpl = function(b) {
    var n = 0;
    return function() {
        return n < b.length ? {
            done: !1,
            value: b[n++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
};
$jscomp.initSymbol = function() {};
$jscomp.iteratorPrototype = function(b) {
    b = {
        next: b
    };
    b[Symbol.iterator] = function() {
        return this
    };
    return b
};
$jscomp.iteratorFromArray = function(b, n) {
    b instanceof String && (b += "");
    var p = 0,
        g = !1,
        l = {
            next: function() {
                if (!g && p < b.length) {
                    var u = p++;
                    return {
                        value: n(u, b[u]),
                        done: !1
                    }
                }
                g = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    l[Symbol.iterator] = function() {
        return l
    };
    return l
};
$jscomp.polyfill("Array.prototype.values", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(n, p) {
            return p
        })
    }
}, "es8", "es3");
var is_showing_toast = !1,
    is_load_more_notifications_clicked = !1,
    enabledSubmitButtons = [];
$(document).ready(function() {
    hide_toast("loading_toast");
    updateWrapperHeight();
    mobile_bottom_nav_observer();
    $(document).on("click", ".close_action", function() {
        hide_modals()
    });
    $("form").on("mousewheel", "input[type=number]", function() {
        $(this).blur()
    });
    $(document).on("click", ".image_ad", function(b) {
        var n = !1;
        0 < $(this).closest("#marketing_first_container").length ? 0 < $(b.target).closest("a[href]").length && (n = !0) : n = !0;
        "undefined" != typeof is_specialization_banner_ad && is_specialization_banner_ad && (n = !1);
        if (n &&
            "undefined" != typeof is_from_campaign && is_from_campaign) n = $(b.target).closest(".image_ad").attr("data-campaign-id"), b = $(b.target).closest(".image_ad").attr("data-ad-id"), n && b && (b = "campaign_" + n + "_ad_" + b, "undefined" !== typeof dataLayer && (dataLayer.push({
            event: "campaign_try",
            eventCategory: "campaign_page_native_ad",
            eventAction: "click",
            eventLabel: b
        }), dataLayer.push({
            event: "campaign_page_native_ad_click",
            click: b
        })));
        else if (n && "undefined" != typeof is_fresher_jobs_page && is_fresher_jobs_page) {
            if (b = $(b.target).closest(".image_ad").attr("data-ad-id")) b =
                "ad_" + b, "undefined" !== typeof dataLayer && (dataLayer.push({
                    event: "campaign_try",
                    eventCategory: "jobs_generic_trainings_ad",
                    eventAction: "click",
                    eventLabel: b
                }), dataLayer.push({
                    event: "jobs_generic_trainings_ad_click",
                    click: b
                }))
        } else n && (b = $(this).attr("adId"), $.ajax("/cms/ad_clicks/" + b, {
            type: "POST"
        }))
    });
    $(document).on("click", ".showToastOnMobile", function() {
        768 > window.innerWidth && ($(".black_bottom_toast .toast-body").html($(this).attr("title")), is_showing_toast || (is_showing_toast = !0, $(".black_bottom_toast").fadeIn(400).delay(3E3).fadeOut(400,
            function() {
                is_showing_toast = !1
            })))
    });
    768 < window.innerWidth && ($(".phone_number").css("color", "#333"), $(".phone_number").css("text-decoration", "none"), $(".phone_number").removeAttr("href"));
    detectIE() || displayMessageInConsole();
    $(document).ajaxStart(function(b) {
        $(":submit").each(function() {
            $(this).is(":enabled") && !$(this).hasClass("disableNot") && ($(this).prop("disabled", !0), enabledSubmitButtons.push(this))
        })
    }).ajaxStop(function() {
        for (; 0 < enabledSubmitButtons.length;) {
            var b = enabledSubmitButtons.pop();
            $(b).hasClass("keepDisable") || $(b).prop("disabled", !1)
        }
    });
    $(document).on("click", ".post_button_internship_contest", function(b) {
        b.preventDefault();
        set_cookie("post_internship_button", 1, 30, "/");
        window.location.href = $(this).attr("href")
    });
    $.fn.isInViewport = function() {
        var b = $(this).offset().top,
            n = b + $(this).outerHeight(),
            p = $(window).scrollTop(),
            g = p + $(window).height();
        return n > p && b < g
    };
    document.documentElement.style.setProperty("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px");
    change_jquery_validate_defaults();
    change_nprogress_defaults();
    change_datepicker_defaults()
});

function updateWrapperHeight() {
    var b = $("#footer").outerHeight(),
        n = parseFloat($("#header").css("margin-bottom"));
    $("#content").css("padding-bottom", b - n);
    var p = window.innerHeight;
    $("#wrapper").css("min-height", b - n + p - 40)
}

function displayMessageInConsole() {
    console.log("");
    console.log("%cINTERNSHALA\n", "position: absolute; top: 10px;color: #fff; padding:5px; font-weight: bold; font-family: helvetica; pading:10px; background-color: #1295c9; font-size: 40px; margin:0 auto; align:center;");
    console.log("");
    console.log("%cWe are transforming the lives of millions of college students, one meaningful internship at a time. Apply here  https://internshala.com/careers to work with us.", "font-family: arial; font-style: italic; font-size: 14px;")
}
$(window).resize(function() {
    var b = $("#footer").outerHeight(),
        n = parseFloat($("#header").css("margin-bottom"));
    $("#content").css("padding-bottom", b - n)
});
var onError = function(b) {
    try {
        if (599 == b.status && "undefined" != typeof b.responseText) {
            NProgress.done();
            $(".loading_image").hide();
            var n = JSON.parse(b.responseText);
            if (599 != n.code && 598 != n.code || "redirect" != n.message || "undefined" == typeof n.url) 0 <= b.responseText.toLowerCase().indexOf("csrf") && error_ribbon("Oops! Sorry, something went wrong. Please refresh and try again. If the problem persists, please write to support@internshala.com and we'd be happy to assist.", "with_button");
            else {
                var p = "/ddos/index/ajax_" +
                    encodeURIComponent(n.url);
                598 == n.code && (p += "/ratelimiter");
                $.ajax("/ddos/index/ajax_" + p, {
                    data: {},
                    success: function() {},
                    error: function() {},
                    type: "POST"
                });
                return !1
            }
        } else 403 == b.status && "undefined" != typeof b.responseText && 0 <= b.responseText.toLowerCase().indexOf("csrf") ? (NProgress.done(), $(".loading_image").hide(), error_ribbon("Oops! Sorry, something went wrong. Please refresh your page and try again. If the problem persists, please write to support@internshala.com and we'd be happy to assist.", "with_button")) :
            (NProgress.done(), $(".loading_image").hide(), error_ribbon("Oops! Sorry, something went wrong. Please try again and if the problem persists, please write to support@internshala.com and we'd be happy to assist.", "with_button"))
    } catch (g) {
        NProgress.done(), $(".loading_image").hide(), error_ribbon("Oops! Sorry, something went wrong. Please try again and if the problem persists, please write to support@internshala.com and we'd be happy to assist.", "with_button")
    }
};

function set_cookie(b, n, p) {
    var g = new Date;
    g.setDate(g.getDate() + p);
    document.cookie = encodeURIComponent(b) + "=" + encodeURIComponent(n) + (p ? "; expires=" + g.toUTCString() : "")
}

function set_cookie(b, n, p, g) {
    var l = new Date;
    l.setDate(l.getDate() + p);
    document.cookie = encodeURIComponent(b) + "=" + encodeURIComponent(n) + (p ? "; expires=" + l.toUTCString() + ";path=" + g : "")
}

function set_session_cookie(b, n, p, g) {
    var l = new Date;
    l.setDate(l.getDate() + p);
    document.cookie = encodeURIComponent(b) + "=" + encodeURIComponent(n) + ("; expires=Session;path=" + g)
}

function delete_cookie(b) {
    document.cookie = b + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function goToByScroll(b, n = "slow") {
    b = b.replace("link", "");
    (b = $("#" + b)) && 0 !== b.length && $("html,body").animate({
        scrollTop: b.position().top
    }, n)
}

function make_field_readonly(b) {
    $(document).on("focusin", b, function(n) {
        $(this).prop("readonly", !0)
    });
    $(document).on("focusout", b, function(n) {
        $(this).prop("readonly", !1)
    })
}

function isScrolledIntoView(b) {
    var n = $(window).scrollTop() + $(window).height();
    if (b.length && "undefined" != typeof $(b).offset()) {
        var p = $(b).offset().top;
        $(b).height();
        return p <= n
    }
    return !1
}

function get_cookie(b) {
    b += "=";
    var n = "";
    0 < document.cookie.length && (offset = document.cookie.indexOf(b), -1 != offset && (offset += b.length, end = document.cookie.indexOf(";", offset), -1 == end && (end = document.cookie.length), n = unescape(document.cookie.substring(offset, end))));
    return n
}
String.prototype.replaceAll = function(b, n, p) {
    return this.replace(new RegExp(b.replace(/([\/,!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-&])/g, "\\$&"), p ? "gi" : "g"), "string" == typeof n ? n.replace(/\$/g, "$$$$") : n)
};

function encodeHTML(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
}

function prompt_for_correct_email(b, n, p) {
    var g = $("#" + b).find("#" + n).val().split("@");
    if (2 > g.length) $("#correction,#correction-button-bottom,#correction-button-top").remove();
    else {
        var l = g[0];
        g = $.inArray(g[1], input_domains);
        "email_subscription_popup_container" === p && $(".subscription_alert_footer").css("margin-top", "");
        if (0 <= g) {
            $("#correction,#correction-button-bottom,#correction-button-top").remove();
            var u = l + "@" + valid_domains[g];
            l = encodeHTML(l);
            l = "Did you mean: <u><b>" + (l + "@" + valid_domains[g]) + "</b></u>";
            "undefined" !== typeof p ? ($(".subscription_alert_footer").css("margin-top", ""), "email_subscription_popup_container" === p && $(".subscription_alert_footer").css("margin-top", "4px"), $("#email").after('<span id="correction-button-top" class="visible-xs email-correction-prompt-message-popup">' + l + "</span>"), $("#" + p).after('<span id="correction-button-bottom" class="hidden-xs email-correction-prompt-message-popup">' + l + "</span>")) : "subscribe-form-at-bottom" == b ? $("#" + b).find("#" + n).after('<label id="correction" class="email-correction-prompt-message">' +
                l + "</label>") : $("#" + b).find("#" + n).after('<span id="correction" class="email-correction-prompt-message">' + l + "</span>");
            $("#correction,#correction-button-bottom,#correction-button-top").click(function() {
                $("#" + b).find("#" + n).val(u);
                $("#correction,#correction-button-bottom,#correction-button-top").remove();
                $(".subscription_alert_footer").css("margin-top", "")
            })
        } else $("#correction,#correction-button-bottom,#correction-button-top").remove()
    }
}

function reset_form_validations(b) {
    (b = $("#" + b)) && 0 < b.length && b.validate().resetForm();
    $(".form-control").removeClass("error");
    $(".form-control").removeClass("valid");
    $(".form-group, .input-group").removeClass("has-error");
    $(".form-group, .input-group").removeClass("has-success")
}

function reset_profile_forms() {
    $(".form-group div").removeClass("has-error");
    $(".form-group div").removeClass("has-success");
    $(".form-group").removeClass("has-error");
    $(".form-group").removeClass("has-success");
    $(".form-group .form-control").removeClass("error");
    $(".form-group .form-control").removeClass("valid");
    $(".form-error").html("")
}

function setError(b, n, p) {
    p ? $(b).html(n) : $(b).text(n);
    $(b).show();
    $(b).closest("input").addClass("error");
    $(b).closest("input").removeClass("valid");
    $(b).closest(".form-group").addClass("has-error");
    $(b).closest(".form-group").removeClass("has-success")
}

function removeError(b) {
    $(b).text("");
    $(b).closest("input").removeClass("error");
    $(b).closest(".form-group").addClass("has-success");
    $(b).closest(".form-group").removeClass("has-error")
}

function detectIE() {
    var b = window.navigator.userAgent,
        n = b.indexOf("MSIE ");
    if (0 < n) return parseInt(b.substring(n + 5, b.indexOf(".", n)), 10);
    if (0 < b.indexOf("Trident/")) return n = b.indexOf("rv:"), parseInt(b.substring(n + 3, b.indexOf(".", n)), 10);
    n = b.indexOf("Edge/");
    return 0 < n ? parseInt(b.substring(n + 5, b.indexOf(".", n)), 10) : !1
}

function nl2br(b) {
    return b.replace(/(\r\n|\n\r|\r|\n)/g, "<br>")
}

function br2nl(b) {
    return b.replace(/<br \/>/g, "\r").replace(/<br>/g, "\r")
}

function placeElementAtBottomRelativeToFooter(b) {
    var n = $(this),
        p = "";
    n.scroll(function(g) {
        p = element_location(n, p, b, !0)
    });
    n.resize(function(g) {
        p = element_location(n, p, b, !0)
    });
    p = element_location(n, p, b, !1)
}

function element_location(b, n, p, g) {
    n = document.documentElement.clientHeight;
    n = $("#footer").offset().top - n;
    g ? b.scrollTop() < n ? $(p).css({
        position: "fixed",
        bottom: "-1px"
    }) : $(p).css({
        position: "absolute",
        bottom: $("#footer").outerHeight() - parseFloat($("#header").css("margin-bottom"))
    }) : 0 < n ? $(p).css({
        position: "fixed",
        bottom: "-1px"
    }) : $(p).css({
        position: "absolute",
        bottom: $("#footer").outerHeight() - parseFloat($("#header").css("margin-bottom"))
    });
    return n
}

function hasAttr(b, n) {
    b = b.attr(n);
    return "undefined" !== typeof b && !1 !== b ? !0 : !1
}
jQuery.fn.onPositionChanged = function(b, n) {
    null == n && (n = 100);
    var p = $(this[0]);
    if (1 > p.length) return p;
    var g = null,
        l = null;
    setInterval(function() {
        if (null == p || 1 > p.length) return p;
        null == g && (g = p.position());
        null == l && (l = p.offset());
        var u = p.position(),
            x = p.offset();
        if (g.top != u.top || g.left != u.left) $(this).trigger("onPositionChanged", {
            lastPos: g,
            newPos: u
        }), "function" == typeof b && b(g, u), g = p.position();
        if (l.top != x.top || l.left != x.left) $(this).trigger("onOffsetChanged", {
            lastOff: l,
            newOff: x
        }), "function" == typeof b && b(l,
            x), l = p.offset()
    }, n);
    return p
};
$(document).on("click", "#internships_new_superscript", function(b) {
    var n = window.location.href;
    n.match(/\/chat/gi) && 0 < n.match(/\/chat/gi).length || (b.preventDefault(), $("#superscript_new").is(":visible") && set_cookie("internships_new_superscript", "1", 365), window.location.href = "/internships")
});
$(document).on("click", ".internship_item", function(b) {
    $("#superscript_new").is(":visible") && set_cookie("internships_new_superscript", "1", 365)
});

function getCookie(b) {
    b += "=";
    for (var n = decodeURIComponent(document.cookie).split(";"), p = 0; p < n.length; p++) {
        for (var g = n[p];
            " " == g.charAt(0);) g = g.substring(1);
        if (0 == g.indexOf(b)) return g.substring(b.length, g.length)
    }
    return ""
}
$(document).on("click", "a[href].scrollToThis", function(b) {
    b.preventDefault();
    b = $(this).prop("hash");
    "string" === typeof b && b.startsWith("#") && 1 < b.length && (b = $(b)) && 0 !== b.length && $("html,body").animate({
        scrollTop: b.position().top
    }, "slow")
});
window.addEventListener("load", function() {
    window.ga && ga(function() {
        function b(g) {
            return -1 === "utm_source utm_medium utm_campaign utm_term utm_content name city college_name preferences degree stream first_name referral_isp_name referral_college_name alp fn ln cn mob email connect_source connect_prompt".split(" ").indexOf(g.split("=")[0])
        }
        if (!window.preserveParams && history && history.replaceState && location.search) {
            var n = location.search.slice(1).split("&"),
                p = n.filter(b);
            p.length < n.length && (n = p.length ?
                "?" + p.join("&") : "", history.replaceState(null, null, location.pathname + n + location.hash))
        }
    })
}, !1);

function textarea() {
    $(".has_char_count").children(".form-control").on("focusin", function() {
        $(this).parent().addClass("is_focused")
    });
    $(".has_char_count").children(".form-control").on("focusout", function() {
        $(this).parent().removeClass("is_focused")
    });
    textarea_char_count()
}

function textarea_char_count() {
    $(".char_count").each(function() {
        var b = $(this).siblings("textarea");
        b && 0 < b.length || (b = $(this).closest(".has_char_count").find("textarea"));
        set_textarea_char_count(b)
    });
    $(".has_char_count textarea.form-control").on("input", function() {
        set_textarea_char_count($(this))
    })
}

function set_textarea_char_count(b) {
    if ("undefined" !== typeof b.rules().maxlength) {
        var n = b.rules().maxlength,
            p = b.val().replace(/(\r\n|\n|\r)/g, "  ").length,
            g = b.siblings(".char_count");
        g && 0 < g.length || (g = b.closest(".has_char_count").find(".char_count"));
        g.text(p + "/" + n);
        0 === p ? (g.addClass("char_count_default"), g.removeClass("char_count_valid"), g.removeClass("char_count_error")) : p > n ? (g.addClass("char_count_error"), g.removeClass("char_count_valid"), g.removeClass("char_count_default")) : (g.addClass("char_count_valid"),
            g.removeClass("char_count_default"), g.removeClass("char_count_error"))
    }
}

function is_element_in_viewport(b, n = !1) {
    var p = $("#" + b).offset().top;
    b = $("#" + b).offset().top + $("#" + b).outerHeight();
    var g = $(window).scrollTop() + $(window).innerHeight(),
        l = $(window).scrollTop();
    return n && g > p && l < p ? !0 : g < p || l > b ? !1 : !0
}

function input_with_cross_button(b) {
    $(".cross_btn_container").hide();
    $(".cross_btn").on("click", function() {
        "function" === typeof b ? b.call(this, $(this).parents().siblings(".form-control")) : $(this).parents().siblings(".form-control").val("").trigger("input").focus()
    });
    $(".has_cross").children(".form-control").on("focusin", function() {
        $(this).parent().addClass("is_focused")
    });
    $(".has_cross").children(".form-control").on("focusout", function() {
        $(this).parent().removeClass("is_focused")
    });
    if ("function" ===
        typeof b) $(".has_cross").on("is:show_cross", function() {
        $(this).children(".form-control").siblings(".cross_btn_container").show()
    }).on("is:hide_cross", function() {
        $(this).children(".form-control").siblings(".cross_btn_container").hide()
    });
    else $(".has_cross").children(".form-control").on("input", function() {
        0 < $(this).val().length ? $(this).siblings(".cross_btn_container").show() : $(this).siblings(".cross_btn_container").hide()
    })
}
$(document).on("click", ".items-inside .items .item .close", function(b) {
    var n = $(b.target).closest(".items").find(".form-control");
    0 < n.length && (n.focus(), n.autocomplete("close"), $(b.target).closest(".item").remove(), n.trigger("is:change"))
});
$(document).on("keydown", ".items-inside .form-control", function(b) {
    b.target.value || 8 != b.which || ($(b.target).closest(".items").find(".item:last").remove(), $(b.target).trigger("is:change"))
});

function touchend_submit(b, n) {
    $(document).on("touchend", "form #" + n, function(p) {
        $("#" + b).submit()
    })
}

function auto_focus_elements_in_modal(b, n = "") {
    if (1 == is_mobile) {
        var p = "#" + b;
        $(p).on("shown.bs.modal", function(g) {
            goToByScroll(b, "fast")
        });
        $(p).on("hide.bs.modal", function(g) {
            n && goToByScroll(n, "fast")
        })
    }
}

function enable_copy_text_listener() {
    $(document).on("click", ".copy_text", function() {
        var b = $("<input>"),
            n = $(this);
        n.append(b);
        var p = n.attr("data-text"),
            g = n.attr("data-tooltip") || "Text copied to the clipboard";
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            b.val(p);
            p = b.get(0);
            var l = p.contentEditable,
                u = p.readOnly;
            p.contentEditable = !0;
            p.readOnly = !1;
            var x = document.createRange();
            x.selectNodeContents(p);
            var r = window.getSelection();
            r.removeAllRanges();
            r.addRange(x);
            p.setSelectionRange(0, 999999);
            p.contentEditable =
                l;
            p.readOnly = u
        } else b.val(p).select();
        document.execCommand("copy");
        n.popover("dispose");
        n.popover({
            placement: "top",
            html: !0,
            content: "<span id='popover_text'>" + g + "</span>"
        });
        n.popover("show");
        setTimeout(function() {
            n.popover("hide")
        }, 1E3);
        b.remove()
    })
}

function change_jquery_validate_defaults() {
    jQuery.extend(jQuery.validator.defaults, {
        errorClass: "help-block form-error"
    });
    jQuery.extend(jQuery.validator.prototype, {
        getLength: function(b, n) {
            switch (n.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", n).length;
                case "textarea":
                    n = b.match(/(\n\r|\r\n|\n|\r)/g);
                    var p = 0;
                    null != n && (p = n.length);
                    return b.length + p;
                case "input":
                    if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
            }
            return b.length
        }
    })
}

function change_nprogress_defaults() {
    NProgress.configure({
        showSpinner: !1
    })
}

function change_datepicker_defaults() {
    $.datepicker.regional[""] = {
        dayNamesMin: "SMTWTFS".split("")
    };
    $.datepicker.setDefaults($.datepicker.regional[""]);
    $.datepicker.setDefaults({
        yearRange: "c-20:c+30"
    })
}

function number_format_india(b) {
    var n = b.replace(/,/g, "");
    b = n.substring(n.length - 3);
    n = n.substring(0, n.length - 3);
    "" != n && (b = "," + b);
    return n.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + b
}

function mobile_bottom_nav_observer() {
    $("#footer").length && (new IntersectionObserver((b, n) => {
        b.forEach(p => {
            p.isIntersecting ? $(".mobile-bottom-nav").hide() : $(".mobile-bottom-nav").show()
        })
    }, {
        rootMargin: "24px",
        threshold: .1
    })).observe(document.querySelector("#footer"));
    $(document).on("click", "#courses-nav", function() {
        $("#nav_bar_bottom_amber_dot").hide();
        var b = get_cookie("nav_bottom_courses_amber_dot");
        b && (b = b.split("|")[1], document.cookie = "nav_bottom_courses_amber_dot=" + encodeURIComponent("0|" + b) + ("; expires=" +
            (new Date(1E3 * b)).toUTCString() + ";path=/"))
    })
}

function call_autocomplete(b, n, p, g, l) {
    $("#" + b).bind("keydown", function(u) {
        u.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active && u.preventDefault();
        13 === u.keyCode && "degree" == n && u.preventDefault()
    }).autocomplete({
        delay: 300,
        source: function(u, x) {
            var r = $("#" + b).attr("where_condition");
            "undefined" == typeof r && (r = "0");
            var B = $("#" + b).attr("where_params");
            "undefined" == typeof B && (B = "0");
            l || (l = "0");
            var J = encodeURIComponent(u.term.split(/,\s*/).pop());
            "" != n && "" != J && "." != J && $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/autocomplete/" + n + "/" + J + "/" + r + "/" + B + "/" + l,
                dataType: "json",
                success: function(D) {
                    if ("skill" !== n && "degree" !== n || 0 != D.result.length) {
                        if ("title" === n) {
                            var I = "add " + decodeURIComponent(J);
                            D.result.unshift(I)
                        }
                        x(D.result)
                    } else x(["No match found"])
                }
            })
        },
        minLength: "skill" === n || "title" === n ? 1 : "degree" === n ? 2 : 3,
        focus: function() {
            return !1
        },
        autoFocus: "title" === n ? !0 : !1,
        select: function(u, x) {
            if (p) {
                if ("skill" === n && "No match found" === x.item.value) return x = this.value.split(/,\s*/),
                    x.pop(), x.push(""), this.value = x.join(","), !1;
                u = this.value.split(/,\s*/);
                u.pop();
                u.push(x.item.value);
                u.push("");
                this.value = u.join(",");
                return !1
            }
            if ("skill" === n && "No match found" === x.item.value) return x = this.value.split(/,\s*/), x.pop(), x.push(""), this.value = x.join(","), !1;
            "title" === n && (u.preventDefault(), x.item.name ? $(this).val(x.item.name) : (x = x.item.value, "add" === x.split(" ")[0] ? $(this).val(this.value) : $(this).val(x)))
        },
        change: function(u, x) {
            if ("title" === n)
                if (x.item)
                    if (x.item.name) $(this).val(x.item.name);
                    else if (x = x.item.value, u = x.split(" "), "add" === u[0]) {
                x = "";
                for (var r = 1; r < u.length; r++) x += " " + u[r];
                $(this).val($.trim(x))
            } else $(this).val(x);
            else $(this).val("")
        }
    }).data("ui-autocomplete")._renderItem = function(u, x) {
        if ("title" === n && x.name && void 0 !== x.is_cover_letter_optional) return $("<li>").text(x.name).attr("is_cover_letter_optional", x.is_cover_letter_optional).appendTo(u);
        var r = x.value,
            B = r.split(" ");
        return "title" == n && "add" === B[0] ? (r = r.replace("add ", ""), $("<li></li>").data("ui-autocomplete-item",
            x).append("<i>add </i>" + r).appendTo(u)) : $("<li>").text(x.label).appendTo(u)
    };
    return []
}

function call_autocomplete_without_ajax(b, n, p, g) {
    $("#" + b).bind("keydown", function(l) {
        l.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active && l.preventDefault()
    }).autocomplete({
        source: function(l, u) {
            l = g ? l.term : l.term.split(/,\s*/).pop();
            u($.ui.autocomplete.filter(n, l).slice(0, 10))
        },
        focus: function() {
            return !1
        },
        select: function(l, u) {
            if (p) return l = this.value.split(/,\s*/), l.pop(), l.push(u.item.value), l.push(""), this.value = l.join(","), !1
        }
    });
    return []
}

function call_autocomplete_multiple(b, n, p) {
    var g = $("#" + b).attr("name") || b;
    $("#" + b).removeAttr("name");
    $("#" + b).on("keydown", function(x) {
        13 == x.which ? x.preventDefault() : ($("#" + b).closest(".form-group").removeClass(".has-error"), $("#" + b).closest(".form-control").removeClass("error"), $("#" + b).closest(".form-control").removeClass("valid"), $("#" + b).closest(".form-group").removeClass("has-error"), $("#" + b).closest(".input-group").removeClass("has-error"), $("#" + b + "-error").html("").hide());
        8 != x.which || $("#" +
            b).val() || $("#" + b).autocomplete("close")
    });
    $("#" + b).on("blur", function() {
        if ($("#" + b).val()) {
            var x = b + "-error";
            if (0 < $("#" + x).length) var r = $("#" + x);
            else r = $("<label>"), r.attr({
                class: "help-block form-error",
                id: x,
                for: b
            }), $("#" + b).closest(".items-inside").after(r);
            $("#" + b).closest(".form-group").addClass("has-error");
            r.text("Please choose from the dropdown only");
            r.show()
        }
        $("#" + b).val("")
    });
    var l = "Engineering (B.Tech/B.E/MCA & Similar);MBA & Similar;BBA & Similar;Commerce (B.Com & Similar);Chartered Accountant (CA, CS & Similar);Journalism, Mass Comm & Similar;Humanities (B.A./M.A. & Similar);Design, Animation, Fine Arts & Similar;Science (B.Sc/M.Sc & Similar);Law & Similar;Fashion Technology & Similar;Architecture, Planning & Similar;Hospitality (Hotel Management, Tourism & Similar)".split(";");
    var u = "degree_group" === n ? l : function(x, r) {
        var B = $("#" + b).attr("where_condition");
        "undefined" == typeof B && (B = "0");
        var J = $("#" + b).attr("where_params");
        "undefined" == typeof J && (J = "0");
        p || (p = "0");
        x = encodeURIComponent(x.term);
        "" != n && "" != x && "." != x && $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/autocomplete/" + n + "/" + x + "/" + B + "/" + J + "/" + p,
            dataType: "json",
            success: function(D) {
                "skill" !== n && "degree" !== n || 0 != D.result.length ? r(D.result) : r(["No match found"])
            }
        })
    };
    if ("degree_group" === n) $("#" +
        b).on("is:change", function() {
        var x = $("#" + b).closest(".items").find(".item").map(function(B, J) {
                return $(J).text()
            }).toArray(),
            r = $(l).filter(function(B, J) {
                return -1 === x.indexOf(J)
            }).toArray();
        $("#" + b).autocomplete("option", "source", r)
    });
    $("#" + b).bind("keydown", function(x) {
        x.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active && x.preventDefault();
        13 === x.keyCode && "degree" == n && x.preventDefault()
    }).autocomplete({
        delay: 300,
        source: u,
        minLength: "skill" === n || "title" === n ? 1 : "degree" === n ? 2 : "college" ===
            n ? 5 : "degree_group" === n ? 0 : 3,
        focus: function() {
            return !1
        },
        autoFocus: function() {
            return "title" === n ? !0 : !1
        },
        select: function(x, r) {
            if ("No match found" === r.item.value) return !1;
            $("#" + b).val("");
            x = r.item.value;
            r = b + "_" + n + "_" + x;
            0 === $("#" + b).closest(".items").find('[data-autocomplete-id="' + r.replace('"', '\\"') + '"]').length && $("#" + b).before(create_autocomplete_mutliple_item(r, x, g, x));
            "degree_group" === n && $("#" + b).trigger("is:change");
            return !1
        },
        position: {
            collision: "flip"
        }
    }).bind("click focus", function() {
        "degree_group" ===
        n && $(this).autocomplete("search")
    });
    return []
}

function create_autocomplete_mutliple_item(b, n, p, g) {
    b = $('<div class="item"></div>').attr("data-autocomplete-id", b).text(n);
    p && g && b.append($('<input type="hidden">').attr("name", p + "[]").attr("value", g));
    b.append($('<button type="button" class="close"><i class="ic-16-cross"></i></button>'));
    return b
}

function call_autocomplete_location(b, n, p = "", g = !1) {
    function l(B) {
        B.place_id ? $.ajax("/location/get_or_create", {
            data: {
                input_name: n,
                place_id: B.place_id
            },
            success: function(J) {
                J.success ? u(J.location_id) : (throw_error(J.errorThrown), $("#" + b).val(""))
            },
            error: function() {},
            type: "POST"
        }) : u(B.id)
    }

    function u(B) {
        var J = "#" + b;
        $(J + "_location_id").val(B);
        $(J).blur()
    }
    n = n || b;
    $("#" + b).on("keydown", function(B) {
        13 == B.keyCode ? B.preventDefault() : 37 != B.keyCode && 38 != B.keyCode && 39 != B.keyCode && 40 != B.keyCode && 9 != B.keyCode && $("#" +
            b + "_location_id").val("")
    });
    $("#" + b).on("focusout", function() {
        if ("" == $("#" + b + "_location_id").val()) {
            var B = $("#" + b + "-error");
            setError(B, "Invalid City");
            is_valid_city = !1;
            $("#" + b).val("")
        } else is_valid_city = !0
    });
    var x = "billing_location" != n || g ? "" : "India",
        r = [];
    $("#" + b).autocomplete({
        source: function(B, J) {
            B = encodeURIComponent(B.term);
            "" != B && "." != B && $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/autocomplete/location/" + B + "/" + x,
                dataType: "json",
                success: function(D) {
                    0 == D.result.length ?
                        J(["No match found"]) : (r = D.result, J(D.result.map(function(I) {
                            return I.name
                        })))
                }
            })
        },
        open: function() {
            $("<li></li>").appendTo("ul.ui-autocomplete")
        },
        minLength: location_autocomplete_min_length,
        focus: function() {
            return !1
        },
        delay: 300,
        select: function(B, J) {
            for (B = 0; B < r.length; B++)
                if (r[B].name === J.item.value) {
                    l(r[B]);
                    break
                }
        },
        appendTo: 0 < p.length ? "#" + p : ""
    }).autocomplete("widget").addClass("location_autocomplete_plugin");
    return []
}

function locationInputValidationOnFocusChangeListener(b, n, p) {
    var g = document.getElementById(b);
    google.maps.event.addDomListener(g, "keydown", function(u) {
        13 == u.keyCode ? u.preventDefault() : 37 != u.keyCode && 38 != u.keyCode && 39 != u.keyCode && 40 != u.keyCode && 9 != u.keyCode && $("." + b).val("")
    });
    "mac" == os_type || "iphone" == os_type || "macOS" == os_type || "iOS" == os_type ? is_valid_city = !0 : g.onfocusout = function() {
        if ("" == $("#" + b + "_locality").val() && "" == $("#" + b + "_administrative_area_level_2").val()) {
            var u = $("#" + b + "-error");
            setError(u,
                "Invalid City");
            is_valid_city = !1;
            $("#" + b).val("")
        } else is_valid_city = !0
    };
    var l = new google.maps.places.Autocomplete(g);
    l.addListener("place_changed", function() {
        $("#loading_spinner_" + b).show();
        var u = l.getPlace();
        if (u.geometry) {
            var x = {};
            if (u.address_components) {
                var r = u.address_components;
                var B = !1;
                for (index = 0; index < r.length; ++index) {
                    var J = r[index];
                    J.types.includes("locality") && (B = !0, x.locality = J.long_name);
                    J.types.includes("administrative_area_level_2") && (B = !0, x.administrative_area_level_2 = J.long_name);
                    J.types.includes("administrative_area_level_1") && (x.administrative_area_level_1 = J.long_name);
                    J.types.includes("country") && (x.country = J.long_name);
                    J.types.includes("sublocality_level_2") && (x.sublocality_level_2 = J.long_name);
                    J.types.includes("sublocality_level_1") && (x.sublocality_level_1 = J.long_name)
                }
                if (!B) {
                    $("#" + b).val("");
                    u = $("#" + b + "-error");
                    setError(u, "Please select a more specific location (city)");
                    $("#loading_spinner_" + b).hide();
                    return
                }
                $("." + b).val("");
                $.each(x, function(D, I) {
                    $("#" + b + "_" + D).val(I);
                    $("#personal_details_resume_" + b + "_" + D).val(I)
                });
                $("#" + b + "_lat").val(u.geometry.location.lat());
                $("#" + b + "_lng").val(u.geometry.location.lng());
                $("#personal_details_resume_" + b + "_lat").val(u.geometry.location.lat());
                $("#personal_details_resume_" + b + "_lng").val(u.geometry.location.lng());
                is_valid_city = !0;
                $("#" + n).validate().element("#" + b)
            }
        } else window.alert("Autocomplete's returned place contains no geometry");
        $("#loading_spinner_" + b).hide()
    });
    l.setTypes([p])
}

function call_autocomplete_location_multiple(b, n) {
    function p(r) {
        setTimeout(() => {
            $("#" + b).val("")
        }, 1);
        r.place_id ? (NProgress.start(), $(".loading_image").show(), $.ajax("/location/get_or_create", {
            data: {
                place_id: r.place_id
            },
            success: function(B) {
                NProgress.done();
                $(".loading_image").hide();
                B.success ? g(B.location_id, B.location_short_name) : l(B.errorThrown)
            },
            error: function() {
                NProgress.done();
                $(".loading_image").hide()
            },
            type: "POST"
        })) : g(r.id, r.short_name)
    }

    function g(r, B) {
        r = n ? B : r;
        var J = b + "_location_" + r;
        0 === $("#" +
            b).closest(".items").find('[data-autocomplete-id="' + J.replace('"', '\\"') + '"]').length && $("#" + b).before(create_autocomplete_mutliple_item(J, B, u, r))
    }

    function l(r) {
        var B = b + "-error";
        if (0 < $("#" + B).length) var J = $("#" + B);
        else J = $("<label>"), J.attr({
            class: "help-block form-error",
            id: B,
            for: b
        }), $("#" + b).closest(".items-inside").after(J);
        $("#" + b).closest(".form-group").addClass("has-error");
        J.text(r);
        J.show()
    }
    var u = $("#" + b).attr("name") || b;
    $("#" + b).removeAttr("name");
    $("#" + b).on("keydown", function(r) {
        13 == r.which ?
            r.preventDefault() : ($("#" + b).closest(".form-group").removeClass(".has-error"), $("#" + b).closest(".form-control").removeClass("error"), $("#" + b).closest(".form-control").removeClass("valid"), $("#" + b).closest(".form-group").removeClass("has-error"), $("#" + b).closest(".input-group").removeClass("has-error"), $("#" + b + "-error").html("").hide())
    });
    $("#" + b).on("blur", function() {
        $("#" + b).val() && l("Please choose from the dropdown only");
        $("#" + b).val("")
    });
    var x = [];
    $("#" + b).autocomplete({
        source: function(r, B) {
            r =
                encodeURIComponent(r.term);
            "" != r && "." != r && $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/autocomplete/location/" + r,
                dataType: "json",
                success: function(J) {
                    0 == J.result.length ? B(["No match found"]) : (x = J.result, B(J.result.map(function(D) {
                        return D.name
                    })))
                }
            })
        },
        open: function() {
            $("<li></li>").appendTo("ul.ui-autocomplete")
        },
        delay: 300,
        minLength: location_autocomplete_min_length,
        focus: function() {
            return !1
        },
        select: function(r, B) {
            if ("No match found" === B.item.value) return !1;
            for (r = 0; r < x.length; r++)
                if (x[r].name ===
                    B.item.value) {
                    p(x[r]);
                    break
                }
        },
        position: {
            collision: "flip"
        }
    }).autocomplete("widget").addClass("location_autocomplete_plugin");
    return []
}
$(document).ready(function() {
    jQuery.extend(jQuery.validator.messages, {
        required: "This field is required",
        remote: "Please fix this field",
        email: "Please enter a valid email address",
        url: "Please enter a valid URL (url must start with http:// or https://)",
        date: "Please enter a valid date",
        dateISO: "Please enter a valid date ( ISO )",
        number: "Please enter a valid number",
        digits: "Please enter only digits",
        creditcard: "Please enter a valid credit card number",
        equalTo: "Please enter the same value again",
        maxlength: $.validator.format("Please enter no more than {0} characters"),
        minlength: $.validator.format("Please enter at least {0} characters"),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long"),
        range: $.validator.format("Please enter a value between {0} and {1}"),
        max: $.validator.format("Please enter a value less than or equal to {0}"),
        min: $.validator.format("Please enter a value greater than or equal to {0}")
    });
    validate();
    additional_validations()
});

function validate() {
    var b;
    $.validator.addMethod("greater_than", function(p, g, l) {
        p = p.replace(/,/g, "");
        b = l;
        return this.optional(g) || p > l
    }, function() {
        return "Please enter a value greater than " + b
    });
    $.validator.addMethod("greater_than_or_equal", function(p, g, l) {
        p = p.replace(/,/g, "");
        return this.optional(g) || p >= l
    }, $.validator.format("Please enter a value greater than or equal to {0}."));
    $.validator.addMethod("less_than_or_equal", function(p, g, l) {
        p = p.replace(/,/g, "");
        return this.optional(g) || p <= l
    }, $.validator.format("Please enter a value less than or equal to {0}."));
    $.validator.addMethod("not_equal_to", function(p, g, l) {
        return this.optional(g) || p.toLowerCase() != l.toLowerCase()
    }, function() {
        return "Enter value is not allowed"
    });
    $.validator.addMethod("is_min_time_interval_zero", function(p, g, l) {
        return this.optional(g) || !l
    }, function() {
        return "Start date time and End date time can't be same"
    });
    $.validator.addMethod("is_timer_end_date_is_valid", function(p, g, l) {
        return this.optional(g) || !l
    }, function() {
        return "Timer End Date can not be earlier than Campaign End Date"
    });
    $.validator.addMethod("email",
        function(p, g) {
            var l = p.split("@");
            l = "undefined" !== typeof l[1] && "internshala.com" === l[1] ? !0 : -1 < ("undefined" !== typeof l[0] ? l[0] : "").indexOf("+") ? !1 : !0;
            return this.optional(g) || p.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && l
        }, "Please enter a valid email address");
    $.validator.addMethod("countrycode", function(p, g) {
        return this.optional(g) || p.match(/^[/\s+/][0-9]+$/) && 5 >= p.length
    }, "Please specify a valid country code starting with +");
    $.validator.addMethod("mobilenumber", function(p, g) {
        return this.optional(g) || p.match(/^[6789][0-9]{9}$/)
    }, "Please specify a valid phone number");
    $.validator.addMethod("mobile_number_with_country_code", function(p, g) {
        return this.optional(g) || p.match(/^[+][0-9]{2}[-][6789][0-9]{9}$/)
    }, "Please enter value in +91-xxxxxxxxxx format.");
    $.validator.addMethod("onlynumbers", function(p, g) {
        return ("salary" == g.id || "salary2" == g.id) && $("#lump_sum_error_container").is(":visible") || "salary_min_assured" == g.name && $("#lump_sum_error_salary_min_assured_container").is(":visible") ?
            !0 : this.optional(g) || p.match(/^[0-9]+$/)
    }, "Please enter only numbers");
    $.validator.addMethod("nonumbers", function(p, g) {
        return this.optional(g) || p.match(/^[^0-9]+$/)
    }, "Please do not enter any number");
    $.validator.addMethod("onlyalpha", function(p, g) {
        return this.optional(g) || p.match(/^[a-zA-Z ]+$/)
    }, "Please enter only alphabets");
    $.validator.addMethod("user_name", function(p, g) {
        return this.optional(g) || p.match(/^[a-zA-Z .]+$/)
    }, "Please enter only alphabets");
    $.validator.addMethod("decimalnumbers", function(p,
        g, l) {
        return l ? this.optional(g) || p.match(/^[0-9]+[.]+[0-9]+$/) || p.match(/^[0-9]+$/) : this.optional(g) || p.match(/^[0-9]+$/)
    }, "Please enter only number or decimal number");
    $.validator.addMethod("basicstring", function(p, g) {
        return this.optional(g) || p.match(/^[a-zA-Z]+[a-zA-Z .(),&']*$/) || "10th" === p || "12th" === p || -1 !== p.indexOf("5 Years")
    }, "Please enter only valid characters");
    $.validator.addMethod("valid_degree", function(p, g) {
        return this.optional(g) || p.match(/^[a-zA-Z]+[a-zA-Z0-9 .(),&\-']*$/) || "10th" ===
            p || "12th" === p || -1 !== p.indexOf("5 Years")
    }, "Please enter only valid characters");
    $.validator.addMethod("valid_stream", function(p, g) {
        return this.optional(g) || p.match(/^[0-9]*[a-zA-Z]+[a-zA-Z .(),&']*$/)
    }, "Please enter only valid characters");
    $.validator.addMethod("valid_institute", function(p, g) {
        return !0
    }, "Please enter only valid characters");
    $.validator.addMethod("valid_school", function(p, g) {
        return this.optional(g) || p.match(/^[a-zA-Z0-9]+[a-zA-Z0-9 .(),&']*$/)
    }, "Please enter only valid characters");
    $.validator.addMethod("valid_city", function(p, g) {
        return this.optional(g) || is_valid_city
    }, "Please select location from the drop-down");
    $.validator.addMethod("mindate", function(p, g, l) {
        p = $(g).datepicker("getDate");
        return this.optional(g) || l <= p
    }, "Please specify a date greater than today");
    $.validator.addMethod("maxdate", function(p, g, l) {
        p = $(g).datepicker("getDate");
        return this.optional(g) || l >= p
    }, "Please specify a date within range");
    $.validator.addMethod("valid_external_link", function(p, g) {
        return this.optional(g) ||
            p.match(/^http/)
    }, "Please enter valid a url (url must start with http://)");
    $.validator.addMethod("requiredSocialConnects", function(p, g, l) {
        return this.depend(l, g) ? "select" === g.nodeName.toLowerCase() ? (p = $(g).val()) && 0 < p.length : this.checkable(g) ? 0 < this.getLength(p, g) : 0 < $.trim(p).length : "dependency-mismatch"
    }, "Please select one option from the list above");
    $.validator.addMethod("valid_employer_email", function(p, g) {
        if (this.optional(g)) return !0;
        p = p.split("@");
        if (2 != p.length) return !1;
        p = p[0].toLowerCase();
        return -1 !== $.inArray(p, ["hr", "team", "admin", "info", "group"]) ? !1 : !0
    }, "Please provide real name in your email");
    var n;
    $.validator.addMethod("profile_url", function(p, g, l) {
        var u = "";
        "github" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?github.com/\\w{1,}", n = "Github") : "behance" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?(behance|be).net/\\w{1,}", n = "Behance") : "developer_account" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?play.google.com/store/apps/(?:dev|developer)\\?\\w{1,}", n = "Play store") : "facebook" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?facebook.com/\\w{1,}",
            n = "Facebook") : "instagram" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?instagram.com/\\w{1,}", n = "Instagram") : "linkedin" == l ? (u = "/(?:(?:http|https)://)?(?:www.)?linkedin.com/\\w{1,}", n = "LinkedIn") : "youtube" == l && (u = "/(?:(?:http|https)://)?(?:www.)?youtube.com/\\w{1,}", n = "YouTube");
        return this.optional(g) || p.match(u)
    }, function() {
        return "Please enter a valid " + n + " URL"
    });
    $.validator.addMethod("url_header", function(p, g) {
            validation_expression = "(http(s)?:\\/\\/)";
            return this.optional(g) || p.match(validation_expression)
        },
        "Please enter a valid URL (url must start with http:// or https://)");
    jQuery.validator.addMethod("validate_url_with_or_without_http", function(p, g) {
            if (0 == p.length) return !0;
            /^(https?):\/\//i.test(p) || (p = "http://" + p);
            return /^(https?):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(p)
        },
        "Please enter a valid URL");
    $.validator.addMethod("filesize", function(p, g, l) {
        return this.optional(g) || g.files[0].size <= l
    }, "Please obey the file size");
    $.validator.addMethod("in_array", function(p, g, l) {
        return this.optional(g) || -1 !== $.inArray(p, l)
    }, "Please select value from list");
    $.validator.addMethod("custom_min", function(p, g, l) {
        return ("salary" == g.id || "salary2" == g.id) && $("#lump_sum_error_container").is(":visible") || "salary_min_assured" == g.name && $("#lump_sum_error_salary_min_assured_container").is(":visible") ?
            !0 : parseInt(p.replace(/,/g, "")) >= l
    }, $.validator.format("Please enter a value greater than or equal to {0}."));
    $.validator.addMethod("custom_max", function(p, g, l) {
        return parseInt(p.replace(/,/g, "")) <= l
    }, $.validator.format("Please enter a value less than or equal to {0}."));
    $.validator.addMethod("custom_maxlength", function(p, g, l) {
        return ("salary" == g.id || "salary2" == g.id) && $("#lump_sum_error_container").is(":visible") || "salary_min_assured" == g.name && $("#lump_sum_error_salary_min_assured_container").is(":visible") ?
            !0 : p.replace(/,/g, "").length <= l
    }, $.validator.format("Please enter no more than {0} characters."));
    $.validator.addMethod("isvalidpincode", function(p) {
        return 6 == p.length
    }, "Pin code is incorrect");
    $.validator.addMethod("isvalidgstin", function(p) {
        p = p.toUpperCase();
        return 0 == p.length ? !0 : p.match(/^((0[1-9]|1[0-9]|2[0-9]|3[0-7])[A-Z]{3}[P, C, H, A, B, G, J, L, F, T][A-Z][0-9]{4}[A-Z][A-Z0-9]Z[A-Z0-9])$/) ? !0 : !1
    }, "Please enter a valid GSTIN");
    $.validator.addMethod("valid_interview_time", function(p, g) {
        return p.match(/\b(\d|1[0-2]):[0-5]\d([ap][m]$)/) ?
            !0 : !1
    }, "Invalid time.")
}

function additional_validations() {
    $.validator.addMethod("size", function(b, n, p) {
        return "file" === $(n).attr("type") && n.files && n.files.length && $(n)[0].files[0].size / 1024 / 1024 > p ? !1 : !0
    }, $.validator.format("File size should be less than {0}MB."));
    $.validator.addMethod("accept", function(b, n, p) {
        b = "string" === typeof p ? p.replace(/\s/g, "").replace(/,/g, "|").replace(/\+/g, "\\+") : "image/*";
        p = this.optional(n);
        if (p) return p;
        if ("file" === $(n).attr("type") && (b = b.replace(/\*/g, ".*"), n.files && n.files.length))
            for (p = 0; p <
                n.files.length; p++) {
                var g = n.files[p];
                if (!g.type.match(new RegExp(".?(" + b + ")$", "i"))) return !1
            }
        return !0
    }, $.validator.format("Please enter a value with a valid Filetype."));
    $.validator.addMethod("extension", function(b, n, p) {
        p = "string" === typeof p ? p.replace(/,/g, "|") : "png|jpe?g|gif";
        return this.optional(n) || b.match(new RegExp(".(" + p + ")$", "i"))
    }, $.validator.format("Please upload a file with a valid extension."));
    $.validator.addMethod("max_resolution", function(b, n, p) {
        return "file" === $(n).attr("type") ? this.optional(n) ||
            is_valid_max_resolution : !0
    }, $.validator.format("Please upload an image with lesser resolution - maximum resolution allowed is {0}px x {0}px"))
}

function checkLogoExtension() {
    var b = [".jpeg", ".jpg", ".png", ".gif", ".bmp"],
        n = document.getElementById("logo").value,
        p = n.substr(n.lastIndexOf("."), n.length);
    if (n) {
        n = 0;
        for (var g in b)
            if (b[g] == p) {
                n = 1;
                break
            }
        if (1 != n) return throw_semi_error("Please upload a file with a valid extension."), !1;
        if (1 < $("#logo")[0].files[0].size / 1024 / 1024) return throw_semi_error("File should be less than 1MB!"), !1
    }
    return !0
}

function checkAttachmentValidation() {
    var b = ".zip .pdf .doc .docx .jpeg .jpg .png".split(" "),
        n = document.getElementById("mail_attachment").value,
        p = n.substr(n.lastIndexOf("."), n.length);
    if (n) {
        n = 0;
        for (var g in b)
            if (b[g] == p) {
                n = 1;
                break
            }
        1 != n ? throw_semi_error("This extension is not allowed!") : 1 < $("#mail_attachment")[0].files[0].size / 1024 / 1024 && throw_semi_error("File should be less than 1MB!")
    }
}
$(document).ready(function() {
    var b = $("#mySidenav"),
        n = b.width(),
        p = $(".layer");
    navbar_and_sidenav_handler();
    var g = function() {
            b.addClass("open");
            $("html, body").css("overflow", "hidden");
            p.addClass("visible")
        },
        l = function() {
            b.removeClass("open");
            $("html, body").css("overflow", "");
            p.removeClass("visible")
        };
    $("#hamburger_menu_key").on("click", g);
    p.on("click", l);
    $("#ham_login_button").on("click", l);
    var u = null,
        x = null;
    document.addEventListener("touchstart", function(r) {
        u = (r.touches || r.originalEvent.touches)[0].clientX;
        x = (r.touches || r.originalEvent.touches)[0].clientY
    }, !1);
    document.addEventListener("touchend", function(r) {
        if (u && x) {
            if ("touchend" === r.type) {
                var B = r.changedTouches[0].clientX;
                r = r.changedTouches[0].clientY
            } else B = r.touches[0].clientX, r = r.touches[0].clientY;
            var J = u - B;
            Math.abs(J) > Math.abs(x - r) && (0 < J ? $(".layer").is(":visible") && J >= n / 4 && l() : 20 > u && B >= n / 4 && g());
            x = u = null
        }
    }, !1);
    handle_training_dropdown();
    set_online_trainings_dropdown_css();
    handle_internship_dropdown();
    handle_job_dropdown();
    add_gtm_for_recommend_popular_trainings()
});

function handle_training_dropdown() {
    var b;
    $(".training-dropdown-content .training-menu").on("mouseenter", function(n) {
        b = setTimeout(function() {
            clear_the_previous_selection();
            $(n.target).hasClass("menu-heading") ? ($(n.target).parent().next().removeClass("hide-the-item"), $(n.target).closest(".menu-heading-hover").addClass("show-hov")) : ($(n.target).next().removeClass("hide-the-item"), $(n.target).find("h5:first").addClass("show-hov"))
        }, 85)
    }).on("mouseleave", function() {
        clearTimeout(b)
    });
    $(".training-dropdown-content").hover(function() {
        $(".training-dropdown-content").toggleClass("show-the-item");
        $("#trainings_dropdown_link").toggleClass("show-hov-contest");
        $(".trainings_link").toggleClass("nav-hov-effect")
    });
    $(".menu-link").hover(function() {
        $(".training-dropdown-content").toggleClass("show-the-item")
    });
    $(".training-dropdown-content .contest-menu").hover(function() {
        clear_the_previous_selection()
    });
    $(".training-dropdown-content .contest-sub-menu").hover(function() {
        $(this).prev().find(".menu-heading-hover").toggleClass("show-hov-contest")
    });
    $(".training-dropdown-content .contest-sub-menu-employer").hover(function() {
        $(this).prev().find(".menu-heading-hover").toggleClass("show-hov-contest")
    });
    $("#trainings_dropdown_link").hover(function() {
        clear_the_previous_selection();
        $(".contest-menu")[0] ? ($(".contest-sub-menu").first().removeClass("hide-the-item"), $(".contest-sub-menu-employer").first().removeClass("hide-the-item"), $(this).next().find("h5:first").toggleClass("show-hov-contest")) : ($(".sub-menu").first().removeClass("hide-the-item"), $(".sub-menu-employer").first().removeClass("hide-the-item"), $(this).next().find("h5:first").toggleClass("show-hov"))
    })
}

function clear_the_previous_selection() {
    $(".sub-menu").addClass("hide-the-item");
    $(".sub-menu-employer").addClass("hide-the-item");
    $(".menu-heading-hover").removeClass("show-hov")
}

function set_online_trainings_dropdown_css() {
    var b = 0,
        n = 0;
    "undefined" !== typeof isNavBarEmployerSide && 1 === isNavBarEmployerSide ? ($(".nav_menu_container").children("li").each(function(p, g) {
            n && (b += $(this).width(), "undefined" !== typeof $(this).css("marginLeft") && (b += parseFloat($(this).css("marginLeft"))), "undefined" !== typeof $(this).css("marginRight") && (b += parseFloat($(this).css("marginRight"))));
            g.className.includes("training_container_hover") && (n = 1)
        }), $("div.training-dropdown-content").css("right", b + "px")) :
        ($(".nav-item").each(function(p, g) {
            if (g.className.includes("training_container_hover")) return !1;
            b += $(this).width();
            "undefined" !== typeof $(this).css("marginLeft") && (b += parseFloat($(this).css("marginLeft")));
            "undefined" !== typeof $(this).css("marginRight") && (b += parseFloat($(this).css("marginRight")))
        }), $("div.training-dropdown-content").css("left", "0"))
}

function navbar_and_sidenav_handler() {
    var b = $("#header");
    b.find(".profile-hover").hover(function() {}, function() {
        b.find(".profile-dropdown ul.dropdown-submenu").hide();
        b.find(".profile-dropdown .glyphicon.pull-right").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
        b.find(".profile-dropdown .fa.pull-right").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        b.find(".profile-dropdown li").removeClass("open")
    });
    $(".dropdown-hover").hover(function() {
        var n = $(".training-box", ".training-dropdown-content");
        "undefined" !== typeof isNewHeader && 1 === isNewHeader && n[0].scrollHeight > n[0].clientHeight && $(".training-dropdown-content").addClass("remove-margin");
        if (0 === $(this).find(".is_icon_header").length || $(this).find(".is_icon_header").is(":visible")) $(".dropdown-menu", this).stop(!0, !0).show(), $(this).addClass("open"), $(this).addClass("active"), $(this).find(".is_icon_header").addClass("ic-24-filled-up-arrow"), $(this).find(".is_icon_header").removeClass("ic-24-filled-down-arrow"), $(this).is(".dropdown_backdrop") &&
            $(".nav_dropdown_backdrop").show(), $(this).is(".profile_container_hover") && $(this).addClass("profile_hovered")
    }, function() {
        if (0 === $(this).find(".is_icon_header").length || $(this).find(".is_icon_header").is(":visible")) $(".dropdown-menu", this).stop(!0, !0).hide(), $(this).removeClass("open"), $(this).removeClass("active"), $(this).find(".is_icon_header").addClass("ic-24-filled-down-arrow"), $(this).find(".is_icon_header").removeClass("ic-24-filled-up-arrow"), $(this).is(".dropdown_backdrop") && $(".nav_dropdown_backdrop").hide(),
            $(this).is(".profile_container_hover") && ($(this).removeClass("profile_hovered"), $(this).find(".profile-dropdown ul.dropdown-submenu").hide(), $(this).find(".profile-dropdown li").removeClass("open"), $(this).find(".ic-24-chevron-up").toggleClass("ic-24-chevron-down ic-24-chevron-up"))
    });
    $(".dropdown-click").on("click", function(n) {
        $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
        $(this).next(".dropdown-menu").toggleClass("show");
        $(this).find("i:first").toggleClass(" ic-24-chevron-down  ic-24-chevron-up");
        return !1
    });
    $(".ham_title").click(function() {
        var n = $(this).parent();
        n.toggleClass("expanded");
        n.find(".ham_submenu_items").toggle();
        if ($(this).hasClass("ham_title_more") && n.hasClass("expanded")) {
            var p = $("#mySidenav")[0];
            p.scrollTop = p.scrollHeight
        }
        n.hasClass("expanded") || (n = $(this).parent().find(".ham_inner_menu_items"), n.hasClass("inner_expanded") && (n.removeClass("inner_expanded"), n.find(".ham_inner_submenu_items").hide(), n.find(".ham_inner_title i").removeClass("ic-24-chevron-up").addClass(" ic-24-chevron-down")))
    });
    $(".ham_title").click(function() {
        $(this).find("i").toggleClass("ic-24-chevron-down ic-24-chevron-up")
    });
    $(".ham_inner_title").click(function() {
        var n = $(this).parent();
        n.toggleClass("inner_expanded");
        n.find(".ham_inner_submenu_items").toggle();
        $(this).find("i").toggleClass("ic-24-chevron-up ic-24-chevron-down")
    });
    b.find(".profile-dropdown li:has(ul.dropdown-submenu) a:not([href])").click(function() {
        $(this).parent().find("ul.dropdown-submenu:first").toggle();
        $(this).find(".glyphicon.pull-right:first").toggleClass("glyphicon-menu-down glyphicon-menu-up");
        $(this).find(".fa.pull-right:first").toggleClass("fa-chevron-down fa-chevron-up");
        $(this).closest("li").toggleClass("open");
        return !1
    })
}

function handle_internship_dropdown() {
    var b;
    $("#internships-dropdown .menu-heading").on("mouseenter", function(n) {
        b = setTimeout(function() {
            if ($(n.target).hasClass("menu-heading")) {
                var p = $(n.target).parent().data("value");
                "undefined" === p && "" === p || internship_dropdown_hover_handler(p)
            }
        }, 85)
    }).on("mouseleave", function() {
        clearTimeout(b)
    });
    $("#internships_new_superscript").hover(function() {
        internship_dropdown_hover_handler("1")
    });
    $("#internships-dropdown").hover(function() {
        $(".internship_link").toggleClass("nav-hov-effect")
    })
}

function internship_dropdown_hover_handler(b) {
    $(".sub-menu-content-container").each(function() {
        $(this).hasClass("active-container") && $(this).removeClass("active-container")
    });
    $("#internships-dropdown .menu-heading").each(function() {
        $(this).hasClass("menu-heading-hover") && $(this).removeClass("menu-heading-hover")
    });
    $("#internships-dropdown .sub-menu-link-content-" + b).addClass("active-container");
    $("#internships-dropdown .menu-link-main-" + b + " .menu-heading").addClass("menu-heading-hover")
}

function add_gtm_for_recommend_popular_trainings() {
    $(".training_container_hover").on("mouseenter", () => {
        const b = $(".menu-link-main-1 h5").text();
        let n = null;
        b.includes("Most Popular") ? n = "most_popular" : b.includes("Recommended for You") && (n = "recommended");
        n && "undefined" != typeof dataLayer && (dataLayer.push({
            event: "is_trainings_header_event",
            eventCategory: "is_trainings_header",
            eventAction: n,
            eventLabel: "visible"
        }), dataLayer.push({
            event: "is_trainings_header",
            view: n
        }))
    })
}

function handle_job_dropdown() {
    var b;
    $("#jobs-dropdown .menu-heading").on("mouseenter", function(n) {
        b = setTimeout(function() {
            if ($(n.target).hasClass("menu-heading")) {
                var p = $(n.target).parent().data("value");
                "undefined" === p && "" === p || job_dropdown_hover_handler(p)
            }
        }, 85)
    }).on("mouseleave", function() {
        clearTimeout(b)
    });
    $("#jobs_new_superscript").hover(function() {
        job_dropdown_hover_handler("1")
    });
    $("#jobs-dropdown").hover(function() {
        $(".job_link").toggleClass("nav-hov-effect")
    })
}

function job_dropdown_hover_handler(b) {
    $(".job-sub-menu .sub-menu-content-container").each(function() {
        $(this).hasClass("active-container") && $(this).removeClass("active-container")
    });
    $("#jobs-dropdown .menu-heading").each(function() {
        $(this).hasClass("menu-heading-hover") && $(this).removeClass("menu-heading-hover")
    });
    $("#jobs-dropdown .sub-menu-link-content-" + b).addClass("active-container");
    $("#jobs-dropdown .menu-link-main-" + b + " .menu-heading").addClass("menu-heading-hover")
}! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}(function(b) {
    b.extend(b.fn, {
        validate: function(g) {
            if (!this.length) return void(g && g.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var l = b.data(this[0], "validator");
            return l ? l : (this.attr("novalidate", "novalidate"), l = new b.validator(g, this[0]), b.data(this[0], "validator", l), l.settings.onsubmit && (this.validateDelegate(":submit", "click", function(u) {
                l.settings.submitHandler && (l.submitButton =
                    u.target);
                b(u.target).hasClass("cancel") && (l.cancelSubmit = !0);
                void 0 !== b(u.target).attr("formnovalidate") && (l.cancelSubmit = !0)
            }), this.submit(function(u) {
                function x() {
                    var r, B;
                    return l.settings.submitHandler ? (l.submitButton && (r = b("<input type='hidden'/>").attr("name", l.submitButton.name).val(b(l.submitButton).val()).appendTo(l.currentForm)), B = l.settings.submitHandler.call(l, l.currentForm, u), l.submitButton && r.remove(), void 0 !== B ? B : !1) : !0
                }
                return l.settings.debug && u.preventDefault(), l.cancelSubmit ? (l.cancelSubmit = !1, x()) : l.form() ? l.pendingRequest ? (l.formSubmitted = !0, !1) : x() : (l.focusInvalid(), !1)
            })), l)
        },
        valid: function() {
            var g, l;
            return b(this[0]).is("form") ? g = this.validate().form() : (g = !0, l = b(this[0].form).validate(), this.each(function() {
                g = l.element(this) && g
            })), g
        },
        removeAttrs: function(g) {
            var l = {},
                u = this;
            return b.each(g.split(/\s/), function(x, r) {
                l[r] = u.attr(r);
                u.removeAttr(r)
            }), l
        },
        rules: function(g, l) {
            var u, x, r, B, J, D, I = this[0];
            if (g) switch (u = b.data(I.form, "validator").settings, x = u.rules, r = b.validator.staticRules(I),
                g) {
                case "add":
                    b.extend(r, b.validator.normalizeRule(l));
                    delete r.messages;
                    x[I.name] = r;
                    l.messages && (u.messages[I.name] = b.extend(u.messages[I.name], l.messages));
                    break;
                case "remove":
                    return l ? (D = {}, b.each(l.split(/\s/), function(M, P) {
                        D[P] = r[P];
                        delete r[P];
                        "required" === P && b(I).removeAttr("aria-required")
                    }), D) : (delete x[I.name], r)
            }
            return B = b.validator.normalizeRules(b.extend({}, b.validator.classRules(I), b.validator.attributeRules(I), b.validator.dataRules(I), b.validator.staticRules(I)), I), B.required && (J = B.required,
                delete B.required, B = b.extend({
                    required: J
                }, B), b(I).attr("aria-required", "true")), B.remote && (J = B.remote, delete B.remote, B = b.extend(B, {
                remote: J
            })), B
        }
    });
    b.extend(b.expr[":"], {
        blank: function(g) {
            return !b.trim("" + b(g).val())
        },
        filled: function(g) {
            return !!b.trim("" + b(g).val())
        },
        unchecked: function(g) {
            return !b(g).prop("checked")
        }
    });
    b.validator = function(g, l) {
        this.settings = b.extend(!0, {}, b.validator.defaults, g);
        this.currentForm = l;
        this.init()
    };
    b.validator.format = function(g, l) {
        return 1 === arguments.length ? function() {
            var u =
                b.makeArray(arguments);
            return u.unshift(g), b.validator.format.apply(this, u)
        } : (2 < arguments.length && l.constructor !== Array && (l = b.makeArray(arguments).slice(1)), l.constructor !== Array && (l = [l]), b.each(l, function(u, x) {
            g = g.replace(new RegExp("\\{" + u + "\\}", "g"), function() {
                return x
            })
        }), g)
    };
    b.extend(b.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: b([]),
            errorLabelContainer: b([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(g) {
                this.lastActive = g;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, g, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(g)))
            },
            onfocusout: function(g) {
                this.checkable(g) || !(g.name in this.submitted) && this.optional(g) || this.element(g)
            },
            onkeyup: function(g, l) {
                (9 !== l.which || "" !== this.elementValue(g)) && (g.name in this.submitted || g === this.lastElement) && this.element(g)
            },
            onclick: function(g) {
                g.name in
                    this.submitted ? this.element(g) : g.parentNode.name in this.submitted && this.element(g.parentNode)
            },
            highlight: function(g, l, u) {
                "radio" === g.type ? this.findByName(g.name).addClass(l).removeClass(u) : b(g).addClass(l).removeClass(u)
            },
            unhighlight: function(g, l, u) {
                "radio" === g.type ? this.findByName(g.name).removeClass(l).addClass(u) : b(g).removeClass(l).addClass(u)
            }
        },
        setDefaults: function(g) {
            b.extend(b.validator.defaults, g)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: b.validator.format("Please enter no more than {0} characters."),
            minlength: b.validator.format("Please enter at least {0} characters."),
            rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
            range: b.validator.format("Please enter a value between {0} and {1}."),
            max: b.validator.format("Please enter a value less than or equal to {0}."),
            min: b.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function g(x) {
                    var r = b.data(this[0].form, "validator"),
                        B = "on" + x.type.replace(/^validate/, ""),
                        J = r.settings;
                    J[B] && !this.is(J.ignore) && J[B].call(r, this[0], x)
                }
                this.labelContainer = b(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length &&
                    this.labelContainer || b(this.currentForm);
                this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var l = this.groups = {};
                b.each(this.settings.groups, function(x, r) {
                    "string" == typeof r && (r = r.split(/\s/));
                    b.each(r, function(B, J) {
                        l[J] = x
                    })
                });
                var u = this.settings.rules;
                b.each(u, function(x, r) {
                    u[x] = b.validator.normalizeRule(r)
                });
                b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                    "focusin focusout keyup", g).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", g);
                this.settings.invalidHandler && b(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                b(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), b.extend(this.submitted, this.errorMap), this.invalid = b.extend({}, this.errorMap), this.valid() || b(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var g = 0, l = this.currentElements = this.elements(); l[g]; g++) this.check(l[g]);
                return this.valid()
            },
            element: function(g) {
                var l = this.clean(g),
                    u = this.validationTargetFor(l),
                    x = !0;
                return this.lastElement = u, void 0 === u ? delete this.invalid[l.name] : (this.prepareElement(u), this.currentElements = b(u), x = !1 !== this.check(u), x ? delete this.invalid[u.name] : this.invalid[u.name] = !0), b(g).attr("aria-invalid", !x), this.numberOfInvalids() || (this.toHide =
                    this.toHide.add(this.containers)), this.showErrors(), x
            },
            showErrors: function(g) {
                if (g) {
                    b.extend(this.errorMap, g);
                    this.errorList = [];
                    for (var l in g) this.errorList.push({
                        message: g[l],
                        element: this.findByName(l)[0]
                    });
                    this.successList = b.grep(this.successList, function(u) {
                        return !(u.name in g)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                b.fn.resetForm && b(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement =
                    null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(g) {
                var l, u = 0;
                for (l in g) u++;
                return u
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(g) {
                g.not(this.containers).text("");
                this.addWrapper(g).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    b(this.findLastActive() ||
                        this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (g) {}
            },
            findLastActive: function() {
                var g = this.lastActive;
                return g && 1 === b.grep(this.errorList, function(l) {
                    return l.element.name === g.name
                }).length && g
            },
            elements: function() {
                var g = this,
                    l = {};
                return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && g.settings.debug && window.console && console.error("%o has no name assigned",
                        this), this.name in l || !g.objectLength(b(this).rules()) ? !1 : (l[this.name] = !0, !0)
                })
            },
            clean: function(g) {
                return b(g)[0]
            },
            errors: function() {
                var g = this.settings.errorClass.split(" ").join(".");
                return b(this.settings.errorElement + "." + g, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = b([]);
                this.toHide = b([]);
                this.currentElements = b([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(g) {
                this.reset();
                this.toHide = this.errorsFor(g)
            },
            elementValue: function(g) {
                var l, u = b(g),
                    x = g.type;
                return "radio" === x || "checkbox" === x ? b("input[name='" + g.name + "']:checked").val() : "number" === x && "undefined" != typeof g.validity ? g.validity.badInput ? !1 : u.val() : (l = u.val(), "string" == typeof l ? l.replace(/\r/g, "") : l)
            },
            check: function(g) {
                g = this.validationTargetFor(this.clean(g));
                var l, u, x = b(g).rules(),
                    r = b.map(x, function(I, M) {
                        return M
                    }).length,
                    B = !1,
                    J = this.elementValue(g);
                for (u in x) {
                    var D = {
                        method: u,
                        parameters: x[u]
                    };
                    try {
                        if (l = b.validator.methods[u].call(this,
                                J, g, D.parameters), "dependency-mismatch" === l && 1 === r) B = !0;
                        else {
                            if (B = !1, "pending" === l) return void(this.toHide = this.toHide.not(this.errorsFor(g)));
                            if (!l) return this.formatAndAdd(g, D), !1
                        }
                    } catch (I) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + g.id + ", check the '" + D.method + "' method.", I), I;
                    }
                }
                if (!B) return this.objectLength(x) && this.successList.push(g), !0
            },
            customDataMessage: function(g, l) {
                return b(g).data("msg" + l.charAt(0).toUpperCase() + l.substring(1).toLowerCase()) ||
                    b(g).data("msg")
            },
            customMessage: function(g, l) {
                return (g = this.settings.messages[g]) && (g.constructor === String ? g : g[l])
            },
            findDefined: function() {
                for (var g = 0; g < arguments.length; g++)
                    if (void 0 !== arguments[g]) return arguments[g]
            },
            defaultMessage: function(g, l) {
                return this.findDefined(this.customMessage(g.name, l), this.customDataMessage(g, l), !this.settings.ignoreTitle && g.title || void 0, b.validator.messages[l], "<strong>Warning: No message defined for " + g.name + "</strong>")
            },
            formatAndAdd: function(g, l) {
                var u = this.defaultMessage(g,
                        l.method),
                    x = /\$?\{(\d+)\}/g;
                "function" == typeof u ? u = u.call(this, l.parameters, g) : x.test(u) && (u = b.validator.format(u.replace(x, "{$1}"), l.parameters));
                this.errorList.push({
                    message: u,
                    element: g,
                    method: l.method
                });
                this.errorMap[g.name] = u;
                this.submitted[g.name] = u
            },
            addWrapper: function(g) {
                return this.settings.wrapper && (g = g.add(g.parent(this.settings.wrapper))), g
            },
            defaultShowErrors: function() {
                var g;
                for (g = 0; this.errorList[g]; g++) {
                    var l = this.errorList[g];
                    this.settings.highlight && this.settings.highlight.call(this,
                        l.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(l.element, l.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (g = 0; this.successList[g]; g++) this.showLabel(this.successList[g]);
                if (this.settings.unhighlight)
                    for (g = 0, l = this.validElements(); l[g]; g++) this.settings.unhighlight.call(this, l[g], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return b(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(g, l) {
                var u, x, r, B = this.errorsFor(g),
                    J = this.idOrName(g),
                    D = b(g).attr("aria-describedby");
                B.length ? (B.removeClass(this.settings.validClass).addClass(this.settings.errorClass), B.html(l)) : (B = b("<" + this.settings.errorElement + ">").attr("id", J + "-error").addClass(this.settings.errorClass).html(l || ""), u = B, this.settings.wrapper &&
                    (u = B.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, b(g)) : u.insertAfter(g), B.is("label") ? B.attr("for", J) : 0 === B.parents("label[for='" + J + "']").length && (r = B.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), D ? D.match(new RegExp("\\b" + r + "\\b")) || (D += " " + r) : D = r, b(g).attr("aria-describedby", D), x = this.groups[g.name], x && b.each(this.groups, function(I, M) {
                        M === x && b("[name='" + I + "']", this.currentForm).attr("aria-describedby",
                            B.attr("id"))
                    })));
                !l && this.settings.success && (B.text(""), "string" == typeof this.settings.success ? B.addClass(this.settings.success) : this.settings.success(B, g));
                this.toShow = this.toShow.add(B)
            },
            errorsFor: function(g) {
                var l = this.idOrName(g);
                g = b(g).attr("aria-describedby");
                l = "label[for='" + l + "'], label[for='" + l + "'] *";
                return g && (l = l + ", #" + g.replace(/\s+/g, ", #")), this.errors().filter(l)
            },
            idOrName: function(g) {
                return this.groups[g.name] || (this.checkable(g) ? g.name : g.id || g.name)
            },
            validationTargetFor: function(g) {
                return this.checkable(g) &&
                    (g = this.findByName(g.name)), b(g).not(this.settings.ignore)[0]
            },
            checkable: function(g) {
                return /radio|checkbox/i.test(g.type)
            },
            findByName: function(g) {
                return b(this.currentForm).find("[name='" + g + "']")
            },
            getLength: function(g, l) {
                switch (l.nodeName.toLowerCase()) {
                    case "select":
                        return b("option:selected", l).length;
                    case "input":
                        if (this.checkable(l)) return this.findByName(l.name).filter(":checked").length
                }
                return g.length
            },
            depend: function(g, l) {
                return this.dependTypes[typeof g] ? this.dependTypes[typeof g](g, l) : !0
            },
            dependTypes: {
                "boolean": function(g) {
                    return g
                },
                string: function(g, l) {
                    return !!b(g, l.form).length
                },
                "function": function(g, l) {
                    return g(l)
                }
            },
            optional: function(g) {
                var l = this.elementValue(g);
                return !b.validator.methods.required.call(this, l, g) && "dependency-mismatch"
            },
            startRequest: function(g) {
                this.pending[g.name] || (this.pendingRequest++, this.pending[g.name] = !0)
            },
            stopRequest: function(g, l) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[g.name];
                l && 0 === this.pendingRequest &&
                    this.formSubmitted && this.form() ? (b(this.currentForm).submit(), this.formSubmitted = !1) : !l && 0 === this.pendingRequest && this.formSubmitted && (b(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(g) {
                return b.data(g, "previousValue") || b.data(g, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(g, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(g, l) {
            g.constructor === String ? this.classRuleSettings[g] = l : b.extend(this.classRuleSettings, g)
        },
        classRules: function(g) {
            var l = {};
            g = b(g).attr("class");
            return g && b.each(g.split(" "), function() {
                this in b.validator.classRuleSettings && b.extend(l, b.validator.classRuleSettings[this])
            }), l
        },
        attributeRules: function(g) {
            var l, u, x = {},
                r = b(g),
                B = g.getAttribute("type");
            for (l in b.validator.methods) "required" === l ? (u = g.getAttribute(l), "" === u && (u = !0), u = !!u) : u = r.attr(l), /min|max/.test(l) &&
                (null === B || /number|range|text/.test(B)) && (u = Number(u)), u || 0 === u ? x[l] = u : B === l && "range" !== B && (x[l] = !0);
            return x.maxlength && /-1|2147483647|524288/.test(x.maxlength) && delete x.maxlength, x
        },
        dataRules: function(g) {
            var l, u = {},
                x = b(g);
            for (l in b.validator.methods) g = x.data("rule" + l.charAt(0).toUpperCase() + l.substring(1).toLowerCase()), void 0 !== g && (u[l] = g);
            return u
        },
        staticRules: function(g) {
            var l = {},
                u = b.data(g.form, "validator");
            return u.settings.rules && (l = b.validator.normalizeRule(u.settings.rules[g.name]) || {}),
                l
        },
        normalizeRules: function(g, l) {
            return b.each(g, function(u, x) {
                if (!1 === x) return void delete g[u];
                if (x.param || x.depends) {
                    var r = !0;
                    switch (typeof x.depends) {
                        case "string":
                            r = !!b(x.depends, l.form).length;
                            break;
                        case "function":
                            r = x.depends.call(l, l)
                    }
                    r ? g[u] = void 0 !== x.param ? x.param : !0 : delete g[u]
                }
            }), b.each(g, function(u, x) {
                g[u] = b.isFunction(x) ? x(l) : x
            }), b.each(["minlength", "maxlength"], function() {
                g[this] && (g[this] = Number(g[this]))
            }), b.each(["rangelength", "range"], function() {
                var u;
                g[this] && (b.isArray(g[this]) ?
                    g[this] = [Number(g[this][0]), Number(g[this][1])] : "string" == typeof g[this] && (u = g[this].replace(/[\[\]]/g, "").split(/[\s,]+/), g[this] = [Number(u[0]), Number(u[1])]))
            }), b.validator.autoCreateRanges && (null != g.min && null != g.max && (g.range = [g.min, g.max], delete g.min, delete g.max), null != g.minlength && null != g.maxlength && (g.rangelength = [g.minlength, g.maxlength], delete g.minlength, delete g.maxlength)), g
        },
        normalizeRule: function(g) {
            if ("string" == typeof g) {
                var l = {};
                b.each(g.split(/\s/), function() {
                    l[this] = !0
                });
                g = l
            }
            return g
        },
        addMethod: function(g, l, u) {
            b.validator.methods[g] = l;
            b.validator.messages[g] = void 0 !== u ? u : b.validator.messages[g];
            3 > l.length && b.validator.addClassRules(g, b.validator.normalizeRule(g))
        },
        methods: {
            required: function(g, l, u) {
                return this.depend(u, l) ? "select" === l.nodeName.toLowerCase() ? (g = b(l).val()) && 0 < g.length : this.checkable(l) ? 0 < this.getLength(g, l) : 0 < b.trim(g).length : "dependency-mismatch"
            },
            email: function(g, l) {
                return this.optional(l) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(g)
            },
            url: function(g, l) {
                return this.optional(l) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(g)
            },
            date: function(g, l) {
                return this.optional(l) || !/Invalid|NaN/.test((new Date(g)).toString())
            },
            dateISO: function(g, l) {
                return this.optional(l) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(g)
            },
            number: function(g, l) {
                return this.optional(l) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(g)
            },
            digits: function(g, l) {
                return this.optional(l) || /^\d+$/.test(g)
            },
            creditcard: function(g, l) {
                if (this.optional(l)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(g)) return !1;
                var u = 0,
                    x = !1;
                if (g = g.replace(/\D/g,
                        ""), 13 > g.length || 19 < g.length) return !1;
                for (l = g.length - 1; 0 <= l; l--) {
                    var r = g.charAt(l);
                    r = parseInt(r, 10);
                    x && 9 < (r *= 2) && (r -= 9);
                    u += r;
                    x = !x
                }
                return 0 === u % 10
            },
            minlength: function(g, l, u) {
                g = b.isArray(g) ? g.length : this.getLength(g, l);
                return this.optional(l) || g >= u
            },
            maxlength: function(g, l, u) {
                g = b.isArray(g) ? g.length : this.getLength(g, l);
                return this.optional(l) || u >= g
            },
            rangelength: function(g, l, u) {
                g = b.isArray(g) ? g.length : this.getLength(g, l);
                return this.optional(l) || g >= u[0] && g <= u[1]
            },
            min: function(g, l, u) {
                return this.optional(l) ||
                    g >= u
            },
            max: function(g, l, u) {
                return this.optional(l) || u >= g
            },
            range: function(g, l, u) {
                return this.optional(l) || g >= u[0] && g <= u[1]
            },
            equalTo: function(g, l, u) {
                u = b(u);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    b(l).valid()
                }), g === u.val()
            },
            remote: function(g, l, u) {
                if (this.optional(l)) return "dependency-mismatch";
                var x, r, B = this.previousValue(l);
                return this.settings.messages[l.name] || (this.settings.messages[l.name] = {}), B.originalMessage = this.settings.messages[l.name].remote,
                    this.settings.messages[l.name].remote = B.message, u = "string" == typeof u && {
                        url: u
                    } || u, B.old === g ? B.valid : (B.old = g, x = this, this.startRequest(l), r = {}, r[l.name] = g, b.ajax(b.extend(!0, {
                        url: u,
                        mode: "abort",
                        port: "validate" + l.name,
                        dataType: "json",
                        data: r,
                        context: x.currentForm,
                        success: function(J) {
                            var D, I, M, P = !0 === J || "true" === J;
                            x.settings.messages[l.name].remote = B.originalMessage;
                            P ? (M = x.formSubmitted, x.prepareElement(l), x.formSubmitted = M, x.successList.push(l), delete x.invalid[l.name], x.showErrors()) : (D = {}, I = J || x.defaultMessage(l,
                                "remote"), D[l.name] = B.message = b.isFunction(I) ? I(g) : I, x.invalid[l.name] = !0, x.showErrors(D));
                            B.valid = P;
                            x.stopRequest(l, P)
                        }
                    }, u)), "pending")
            }
        }
    });
    b.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
    var n, p = {};
    b.ajaxPrefilter ? b.ajaxPrefilter(function(g, l, u) {
        l = g.port;
        "abort" === g.mode && (p[l] && p[l].abort(), p[l] = u)
    }) : (n = b.ajax, b.ajax = function(g) {
        var l = ("port" in g ? g : b.ajaxSettings).port;
        return "abort" === ("mode" in g ? g : b.ajaxSettings).mode ? (p[l] && p[l].abort(), p[l] =
            n.apply(this, arguments), p[l]) : n.apply(this, arguments)
    });
    b.extend(b.fn, {
        validateDelegate: function(g, l, u) {
            return this.bind(l, function(x) {
                var r = b(x.target);
                return r.is(g) ? u.apply(r, arguments) : void 0
            })
        }
    })
});
(function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    function n(a, c) {
        var d, e, f, h = a.nodeName.toLowerCase();
        return "area" === h ? (d = a.parentNode, e = d.name, a.href && e && "map" === d.nodeName.toLowerCase() ? (f = b("img[usemap='#" + e + "']")[0], !!f && p(f)) : !1) : (/input|select|textarea|button|object/.test(h) ? !a.disabled : "a" === h ? a.href || c : c) && p(a)
    }

    function p(a) {
        return b.expr.filters.visible(a) && !b(a).parents().addBack().filter(function() {
            return "hidden" === b.css(this, "visibility")
        }).length
    }

    function g(a) {
        for (var c, d; a.length && a[0] !== document;) {
            if (c = a.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(a.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
            a = a.parent()
        }
        return 0
    }

    function l() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        b.extend(this._defaults, this.regional[""]);
        this.regional.en = b.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = b.extend(!0, {}, this.regional.en);
        this.dpDiv = u(b("<div id='" +
            this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function u(a) {
        return a.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
            b(this).removeClass("ui-state-hover"); - 1 !== this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && b(this).removeClass("ui-datepicker-next-hover")
        }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a",
            "mouseover", x)
    }

    function x() {
        b.datepicker._isDisabledDatepicker(W.inline ? W.dpDiv.parent()[0] : W.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && b(this).addClass("ui-datepicker-next-hover"))
    }

    function r(a, c) {
        b.extend(a, c);
        for (var d in c) null == c[d] && (a[d] = c[d]);
        return a
    }

    function B(a) {
        return function() {
            var c =
                this.element.val();
            a.apply(this, arguments);
            this._refresh();
            c !== this.element.val() && this._trigger("change")
        }
    }
    b.ui = b.ui || {};
    b.extend(b.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    b.fn.extend({
        scrollParent: function(a) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            a = this.parents().filter(function() {
                var f = b(this);
                return d && "static" ===
                    f.css("position") ? !1 : e.test(f.css("overflow") + f.css("overflow-y") + f.css("overflow-x"))
            }).eq(0);
            return "fixed" !== c && a.length ? a : b(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && b(this).removeAttr("id")
            })
        }
    });
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function(a) {
            return function(c) {
                return !!b.data(c,
                    a)
            }
        }) : function(a, c, d) {
            return !!b.data(a, d[3])
        },
        focusable: function(a) {
            return n(a, !isNaN(b.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var c = b.attr(a, "tabindex"),
                d = isNaN(c);
            return (d || 0 <= c) && n(a, !d)
        }
    });
    b("<a>").outerWidth(1).jquery || b.each(["Width", "Height"], function(a, c) {
        function d(k, m, q, A) {
            return b.each(e, function() {
                m -= parseFloat(b.css(k, "padding" + this)) || 0;
                q && (m -= parseFloat(b.css(k, "border" + this + "Width")) || 0);
                A && (m -= parseFloat(b.css(k, "margin" + this)) || 0)
            }), m
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top",
                "Bottom"
            ],
            f = c.toLowerCase(),
            h = {
                innerWidth: b.fn.innerWidth,
                innerHeight: b.fn.innerHeight,
                outerWidth: b.fn.outerWidth,
                outerHeight: b.fn.outerHeight
            };
        b.fn["inner" + c] = function(k) {
            return void 0 === k ? h["inner" + c].call(this) : this.each(function() {
                b(this).css(f, d(this, k) + "px")
            })
        };
        b.fn["outer" + c] = function(k, m) {
            return "number" != typeof k ? h["outer" + c].call(this, k) : this.each(function() {
                b(this).css(f, d(this, k, !0, m) + "px")
            })
        }
    });
    b.fn.addBack || (b.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    b("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (b.fn.removeData = function(a) {
        return function(c) {
            return arguments.length ? a.call(this, b.camelCase(c)) : a.call(this)
        }
    }(b.fn.removeData));
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.fn.extend({
        focus: function(a) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        b(e).focus();
                        d && d.call(e)
                    }, c)
                }) : a.apply(this, arguments)
            }
        }(b.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in
                document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(c) {
                    c.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(a) {
            if (void 0 !== a) return this.css("zIndex", a);
            if (this.length) {
                var c, d;
                for (a = b(this[0]); a.length && a[0] !== document;) {
                    if (c = a.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(a.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    a = a.parent()
                }
            }
            return 0
        }
    });
    b.ui.plugin = {
        add: function(a, c, d) {
            var e;
            a = b.ui[a].prototype;
            for (e in d) a.plugins[e] = a.plugins[e] || [], a.plugins[e].push([c, d[e]])
        },
        call: function(a, c, d, e) {
            if ((c = a.plugins[c]) && (e || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; c.length > e; e++) a.options[c[e][0]] && c[e][1].apply(a.element, d)
        }
    };
    var J = 0,
        D = Array.prototype.slice;
    b.cleanData = function(a) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                (d = b._data(e, "events")) && d.remove && b(e).triggerHandler("remove")
            } catch (h) {}
            a(c)
        }
    }(b.cleanData);
    b.widget = function(a, c, d) {
        var e, f, h, k, m = {},
            q = a.split(".")[0];
        return a = a.split(".")[1], e = q + "-" + a, d || (d = c, c = b.Widget), b.expr[":"][e.toLowerCase()] = function(A) {
            return !!b.data(A, e)
        }, b[q] = b[q] || {}, f = b[q][a], h = b[q][a] = function(A, E) {
            return this._createWidget ? (arguments.length && this._createWidget(A, E), void 0) : new h(A, E)
        }, b.extend(h, f, {
            version: d.version,
            _proto: b.extend({}, d),
            _childConstructors: []
        }), k = new c, k.options = b.widget.extend({}, k.options), b.each(d, function(A, E) {
            return b.isFunction(E) ? (m[A] = function() {
                var G =
                    function() {
                        return c.prototype[A].apply(this, arguments)
                    },
                    F = function(z) {
                        return c.prototype[A].apply(this, z)
                    };
                return function() {
                    var z, t = this._super,
                        v = this._superApply;
                    return this._super = G, this._superApply = F, z = E.apply(this, arguments), this._super = t, this._superApply = v, z
                }
            }(), void 0) : (m[A] = E, void 0)
        }), h.prototype = b.widget.extend(k, {
            widgetEventPrefix: f ? k.widgetEventPrefix || a : a
        }, m, {
            constructor: h,
            namespace: q,
            widgetName: a,
            widgetFullName: e
        }), f ? (b.each(f._childConstructors, function(A, E) {
            A = E.prototype;
            b.widget(A.namespace +
                "." + A.widgetName, h, E._proto)
        }), delete f._childConstructors) : c._childConstructors.push(h), b.widget.bridge(a, h), h
    };
    b.widget.extend = function(a) {
        for (var c, d, e = D.call(arguments, 1), f = 0, h = e.length; h > f; f++)
            for (c in e[f]) d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (a[c] = b.isPlainObject(d) ? b.isPlainObject(a[c]) ? b.widget.extend({}, a[c], d) : b.widget.extend({}, d) : d);
        return a
    };
    b.widget.bridge = function(a, c) {
        var d = c.prototype.widgetFullName || a;
        b.fn[a] = function(e) {
            var f = "string" == typeof e,
                h = D.call(arguments, 1),
                k =
                this;
            return e = !f && h.length ? b.widget.extend.apply(null, [e].concat(h)) : e, f ? this.each(function() {
                var m, q = b.data(this, d);
                return "instance" === e ? (k = q, !1) : q ? b.isFunction(q[e]) && "_" !== e.charAt(0) ? (m = q[e].apply(q, h), m !== q && void 0 !== m ? (k = m && m.jquery ? k.pushStack(m.get()) : m, !1) : void 0) : b.error("no such method '" + e + "' for " + a + " widget instance") : b.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function() {
                var m = b.data(this, d);
                m ? (m.option(e || {}), m._init &&
                    m._init()) : b.data(this, d, new c(e, this))
            }), k
        }
    };
    b.Widget = function() {};
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(a, c) {
            c = b(c || this.defaultElement || this)[0];
            this.element = b(c);
            this.uuid = J++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            c !== this && (b.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(d) {
                    d.target ===
                        c && this.destroy()
                }
            }), this.document = b(c.style ? c.ownerDocument : c.document || c), this.window = b(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), a);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function() {
            return this.element
        },
        option: function(a, c) {
            var d, e, f = a;
            if (0 === arguments.length) return b.widget.extend({}, this.options);
            if ("string" == typeof a)
                if (f = {}, d = a.split("."), a = d.shift(), d.length) {
                    var h = f[a] = b.widget.extend({},
                        this.options[a]);
                    for (e = 0; d.length - 1 > e; e++) h[d[e]] = h[d[e]] || {}, h = h[d[e]];
                    if (a = d.pop(), 1 === arguments.length) return void 0 === h[a] ? null : h[a];
                    h[a] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[a] ? null : this.options[a];
                    f[a] = c
                }
            return this._setOptions(f), this
        },
        _setOptions: function(a) {
            for (var c in a) this._setOption(c, a[c]);
            return this
        },
        _setOption: function(a, c) {
            return this.options[a] = c, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!c), c && (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(a, c, d) {
            var e, f = this;
            "boolean" != typeof a && (d = c, c = a, a = !1);
            d ? (c = e = b(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget());
            b.each(d, function(h, k) {
                function m() {
                    return a || !0 !== f.options.disabled && !b(this).hasClass("ui-state-disabled") ? ("string" == typeof k ? f[k] : k).apply(f, arguments) : void 0
                }
                "string" != typeof k &&
                    (m.guid = k.guid = k.guid || m.guid || b.guid++);
                var q = h.match(/^([\w:-]*)\s*(.*)$/);
                h = q[1] + f.eventNamespace;
                (q = q[2]) ? e.delegate(q, h, m): c.bind(h, m)
            })
        },
        _off: function(a, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(c).undelegate(c);
            this.bindings = b(this.bindings.not(a).get());
            this.focusable = b(this.focusable.not(a).get());
            this.hoverable = b(this.hoverable.not(a).get())
        },
        _delay: function(a, c) {
            var d = this;
            return setTimeout(function() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                },
                c || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function(c) {
                    b(c.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(c) {
                    b(c.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function(c) {
                    b(c.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(c) {
                    b(c.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(a, c, d) {
            var e, f, h = this.options[a];
            if (d = d || {}, c =
                b.Event(c), c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(b.isFunction(h) && !1 === h.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, c) {
        b.Widget.prototype["_" + a] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var h = e ? !0 === e || "number" == typeof e ? c : e.effect || c : a;
            e = e || {};
            "number" == typeof e && (e = {
                duration: e
            });
            var k = !b.isEmptyObject(e);
            e.complete = f;
            e.delay && d.delay(e.delay);
            k && b.effects && b.effects.effect[h] ? d[a](e) : h !== a && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(m) {
                b(this)[a]();
                f && f.call(d[0]);
                m()
            })
        }
    });
    b.widget;
    var I = !1;
    b(document).mouseup(function() {
        I = !1
    });
    b.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function(c) {
                return a._mouseDown(c)
            }).bind("click." +
                this.widgetName,
                function(c) {
                    return !0 === b.data(c.target, a.widgetName + ".preventClickEvent") ? (b.removeData(c.target, a.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (!I) {
                this._mouseMoved = !1;
                this._mouseStarted &&
                    this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this,
                    d = 1 === a.which,
                    e = "string" == typeof this.options.cancel && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : !1;
                return d && !e && this._mouseCapture(a) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a), !this._mouseStarted) ? (a.preventDefault(), !0) : (!0 ===
                    b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(f) {
                        return c._mouseMove(f)
                    }, this._mouseUpDelegate = function(f) {
                        return c._mouseUp(f)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), a.preventDefault(), I = !0, !0)) : !0
            }
        },
        _mouseMove: function(a) {
            return this._mouseMoved && (b.ui.ie && (!document.documentMode || 9 > document.documentMode) &&
                !a.button || !a.which) ? this._mouseUp(a) : ((a.which || a.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(a), a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a), this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)), !this._mouseStarted))
        },
        _mouseUp: function(a) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted &&
                (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a)), I = !1, !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    (function() {
        function a(z, t, v) {
            return [parseFloat(z[0]) *
                (G.test(z[0]) ? t / 100 : 1), parseFloat(z[1]) * (G.test(z[1]) ? v / 100 : 1)
            ]
        }

        function c(z) {
            var t = z[0];
            return 9 === t.nodeType ? {
                width: z.width(),
                height: z.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : b.isWindow(t) ? {
                width: z.width(),
                height: z.height(),
                offset: {
                    top: z.scrollTop(),
                    left: z.scrollLeft()
                }
            } : t.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: t.pageY,
                    left: t.pageX
                }
            } : {
                width: z.outerWidth(),
                height: z.outerHeight(),
                offset: z.offset()
            }
        }
        b.ui = b.ui || {};
        var d, e, f = Math.max,
            h = Math.abs,
            k = Math.round,
            m = /left|center|right/,
            q = /top|center|bottom/,
            A = /[\+\-]\d+(\.[\d]+)?%?/,
            E = /^\w+/,
            G = /%$/,
            F = b.fn.position;
        b.position = {
            scrollbarWidth: function() {
                if (void 0 !== d) return d;
                var z, t, v = b("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    y = v.children()[0];
                return b("body").append(v), z = y.offsetWidth, v.css("overflow", "scroll"), t = y.offsetWidth, z === t && (t = v[0].clientWidth), v.remove(), d = z - t
            },
            getScrollInfo: function(z) {
                var t = z.isWindow || z.isDocument ? "" : z.element.css("overflow-x"),
                    v = z.isWindow || z.isDocument ? "" : z.element.css("overflow-y");
                t = "scroll" === t || "auto" === t && z.width < z.element[0].scrollWidth;
                return {
                    width: "scroll" === v || "auto" === v && z.height < z.element[0].scrollHeight ? b.position.scrollbarWidth() : 0,
                    height: t ? b.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(z) {
                z = b(z || window);
                var t = b.isWindow(z[0]),
                    v = !!z[0] && 9 === z[0].nodeType;
                return {
                    element: z,
                    isWindow: t,
                    isDocument: v,
                    offset: z.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: z.scrollLeft(),
                    scrollTop: z.scrollTop(),
                    width: t || v ? z.width() : z.outerWidth(),
                    height: t || v ? z.height() : z.outerHeight()
                }
            }
        };
        b.fn.position = function(z) {
            if (!z || !z.of) return F.apply(this, arguments);
            z = b.extend({}, z);
            var t, v, y, w, H, L, K = b(z.of),
                C = b.position.getWithinInfo(z.within),
                N = b.position.getScrollInfo(C),
                O = (z.collision || "flip").split(" "),
                R = {};
            return L = c(K), K[0].preventDefault && (z.at = "left top"), v = L.width, y = L.height, w = L.offset, H = b.extend({}, w), b.each(["my", "at"], function() {
                var S = (z[this] || "").split(" ");
                1 === S.length && (S = m.test(S[0]) ? S.concat(["center"]) : q.test(S[0]) ? ["center"].concat(S) : ["center", "center"]);
                S[0] = m.test(S[0]) ? S[0] : "center";
                S[1] = q.test(S[1]) ? S[1] : "center";
                var X = A.exec(S[0]);
                var Z = A.exec(S[1]);
                R[this] = [X ? X[0] : 0, Z ? Z[0] : 0];
                z[this] = [E.exec(S[0])[0], E.exec(S[1])[0]]
            }), 1 === O.length && (O[1] = O[0]), "right" === z.at[0] ? H.left += v : "center" === z.at[0] && (H.left += v / 2), "bottom" === z.at[1] ? H.top += y : "center" === z.at[1] && (H.top += y / 2), t = a(R.at, v, y), H.left += t[0], H.top += t[1], this.each(function() {
                var S, X = b(this),
                    Z = X.outerWidth(),
                    ea = X.outerHeight(),
                    T = parseInt(b.css(this, "marginLeft"),
                        10) || 0,
                    U = parseInt(b.css(this, "marginTop"), 10) || 0,
                    aa = Z + T + (parseInt(b.css(this, "marginRight"), 10) || 0) + N.width,
                    Y = ea + U + (parseInt(b.css(this, "marginBottom"), 10) || 0) + N.height,
                    Q = b.extend({}, H),
                    ba = a(R.my, X.outerWidth(), X.outerHeight());
                "right" === z.my[0] ? Q.left -= Z : "center" === z.my[0] && (Q.left -= Z / 2);
                "bottom" === z.my[1] ? Q.top -= ea : "center" === z.my[1] && (Q.top -= ea / 2);
                Q.left += ba[0];
                Q.top += ba[1];
                e || (Q.left = k(Q.left), Q.top = k(Q.top));
                var ca = {
                    marginLeft: T,
                    marginTop: U
                };
                b.each(["left", "top"], function(da, fa) {
                    b.ui.position[O[da]] &&
                        b.ui.position[O[da]][fa](Q, {
                            targetWidth: v,
                            targetHeight: y,
                            elemWidth: Z,
                            elemHeight: ea,
                            collisionPosition: ca,
                            collisionWidth: aa,
                            collisionHeight: Y,
                            offset: [t[0] + ba[0], t[1] + ba[1]],
                            my: z.my,
                            at: z.at,
                            within: C,
                            elem: X
                        })
                });
                z.using && (S = function(da) {
                    var fa = w.left - Q.left,
                        ha = fa + v - Z,
                        ia = w.top - Q.top,
                        ka = ia + y - ea,
                        ja = {
                            target: {
                                element: K,
                                left: w.left,
                                top: w.top,
                                width: v,
                                height: y
                            },
                            element: {
                                element: X,
                                left: Q.left,
                                top: Q.top,
                                width: Z,
                                height: ea
                            },
                            horizontal: 0 > ha ? "left" : 0 < fa ? "right" : "center",
                            vertical: 0 > ka ? "top" : 0 < ia ? "bottom" : "middle"
                        };
                    Z >
                        v && v > h(fa + ha) && (ja.horizontal = "center");
                    ea > y && y > h(ia + ka) && (ja.vertical = "middle");
                    ja.important = f(h(fa), h(ha)) > f(h(ia), h(ka)) ? "horizontal" : "vertical";
                    z.using.call(this, da, ja)
                });
                X.offset(b.extend(Q, {
                    using: S
                }))
            })
        };
        b.ui.position = {
            fit: {
                left: function(z, t) {
                    var v, y = t.within,
                        w = y.isWindow ? y.scrollLeft : y.offset.left;
                    y = y.width;
                    var H = z.left - t.collisionPosition.marginLeft,
                        L = w - H,
                        K = H + t.collisionWidth - y - w;
                    t.collisionWidth > y ? 0 < L && 0 >= K ? (v = z.left + L + t.collisionWidth - y - w, z.left += L - v) : z.left = 0 < K && 0 >= L ? w : L > K ? w + y - t.collisionWidth :
                        w : 0 < L ? z.left += L : 0 < K ? z.left -= K : z.left = f(z.left - H, z.left)
                },
                top: function(z, t) {
                    var v, y = t.within;
                    y = y.isWindow ? y.scrollTop : y.offset.top;
                    var w = t.within.height,
                        H = z.top - t.collisionPosition.marginTop,
                        L = y - H,
                        K = H + t.collisionHeight - w - y;
                    t.collisionHeight > w ? 0 < L && 0 >= K ? (v = z.top + L + t.collisionHeight - w - y, z.top += L - v) : z.top = 0 < K && 0 >= L ? y : L > K ? y + w - t.collisionHeight : y : 0 < L ? z.top += L : 0 < K ? z.top -= K : z.top = f(z.top - H, z.top)
                }
            },
            flip: {
                left: function(z, t) {
                    var v, y, w = t.within,
                        H = w.offset.left + w.scrollLeft,
                        L = w.width;
                    w = w.isWindow ? w.scrollLeft :
                        w.offset.left;
                    var K = z.left - t.collisionPosition.marginLeft,
                        C = K - w;
                    K = K + t.collisionWidth - L - w;
                    var N = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        O = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        R = -2 * t.offset[0];
                    0 > C ? (v = z.left + N + O + R + t.collisionWidth - L - H, (0 > v || h(C) > v) && (z.left += N + O + R)) : 0 < K && (y = z.left - t.collisionPosition.marginLeft + N + O + R - w, (0 < y || K > h(y)) && (z.left += N + O + R))
                },
                top: function(z, t) {
                    var v, y, w = t.within,
                        H = w.offset.top + w.scrollTop,
                        L = w.height;
                    w = w.isWindow ? w.scrollTop :
                        w.offset.top;
                    var K = z.top - t.collisionPosition.marginTop,
                        C = K - w;
                    K = K + t.collisionHeight - L - w;
                    var N = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        O = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        R = -2 * t.offset[1];
                    0 > C ? (y = z.top + N + O + R + t.collisionHeight - L - H, z.top + N + O + R > C && (0 > y || h(C) > y) && (z.top += N + O + R)) : 0 < K && (v = z.top - t.collisionPosition.marginTop + N + O + R - w, z.top + N + O + R > K && (0 < v || K > h(v)) && (z.top += N + O + R))
                }
            },
            flipfit: {
                left: function() {
                    b.ui.position.flip.left.apply(this, arguments);
                    b.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    b.ui.position.flip.top.apply(this, arguments);
                    b.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function() {
            var z, t = document.getElementsByTagName("body")[0];
            var v = document.createElement("div");
            var y = document.createElement(t ? "div" : "body");
            var w = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            t && b.extend(w, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (z in w) y.style[z] = w[z];
            y.appendChild(v);
            w = t || document.documentElement;
            w.insertBefore(y, w.firstChild);
            v.style.cssText = "position: absolute; left: 10.7432222px;";
            v = b(v).offset().left;
            e = 10 < v && 11 > v;
            y.innerHTML = "";
            w.removeChild(y)
        })()
    })();
    b.ui.position;
    b.widget("ui.accordion", {
        version: "1.11.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var a = this.options;
            this.prevShow = this.prevHide = b();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            a.collapsible || !1 !== a.active && null != a.active || (a.active = 0);
            this._processPanels();
            0 > a.active && (a.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : b()
            }
        },
        _createIcons: function() {
            var a = this.options.icons;
            a && (b("<span>").addClass("ui-accordion-header-icon ui-icon " + a.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            var a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(a, c) {
            return "active" === a ? (this._activate(c), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(c)), this._super(a, c), "collapsible" !== a || c || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), c && this._createIcons()), "disabled" === a && (this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!c)), void 0)
        },
        _keydown: function(a) {
            if (!a.altKey && !a.ctrlKey) {
                var c = b.ui.keyCode,
                    d = this.headers.length,
                    e = this.headers.index(a.target),
                    f = !1;
                switch (a.keyCode) {
                    case c.RIGHT:
                    case c.DOWN:
                        f = this.headers[(e + 1) % d];
                        break;
                    case c.LEFT:
                    case c.UP:
                        f = this.headers[(e - 1 + d) % d];
                        break;
                    case c.SPACE:
                    case c.ENTER:
                        this._eventHandler(a);
                        break;
                    case c.HOME:
                        f = this.headers[0];
                        break;
                    case c.END:
                        f = this.headers[d - 1]
                }
                f && (b(a.target).attr("tabIndex", -1), b(f).attr("tabIndex", 0), f.focus(), a.preventDefault())
            }
        },
        _panelKeyDown: function(a) {
            a.keyCode ===
                b.ui.keyCode.UP && a.ctrlKey && b(a.currentTarget).prev().focus()
        },
        refresh: function() {
            var a = this.options;
            this._processPanels();
            !1 === a.active && !0 === a.collapsible || !this.headers.length ? (a.active = !1, this.active = b()) : !1 === a.active ? this._activate(0) : this.active.length && !b.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (a.active = !1, this.active = b()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var a = this.headers,
                c = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
            c && (this._off(a.not(this.headers)), this._off(c.not(this.panels)))
        },
        _refresh: function() {
            var a, c = this.options,
                d = c.heightStyle,
                e = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function() {
                var f = b(this),
                    h = f.uniqueId().attr("id"),
                    k = f.next(),
                    m = k.uniqueId().attr("id");
                f.attr("aria-controls", m);
                k.attr("aria-labelledby", h)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(c.event);
            "fill" === d ? (a = e.height(), this.element.siblings(":visible").each(function() {
                var f = b(this),
                    h = f.css("position");
                "absolute" !== h && "fixed" !== h && (a -= f.outerHeight(!0))
            }), this.headers.each(function() {
                a -= b(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                b(this).height(Math.max(0,
                    a - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === d && (a = 0, this.headers.next().each(function() {
                a = Math.max(a, b(this).css("height", "").height())
            }).height(a))
        },
        _activate: function(a) {
            a = this._findActive(a)[0];
            a !== this.active[0] && (a = a || this.active[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return "number" == typeof a ? this.headers.eq(a) : b()
        },
        _setupEvents: function(a) {
            var c = {
                keydown: "_keydown"
            };
            a && b.each(a.split(" "), function(d,
                e) {
                c[e] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, c);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(a) {
            var c = this.options,
                d = this.active,
                e = b(a.currentTarget),
                f = e[0] === d[0],
                h = f && c.collapsible,
                k = h ? b() : e.next(),
                m = d.next();
            k = {
                oldHeader: d,
                oldPanel: m,
                newHeader: h ? b() : e,
                newPanel: k
            };
            a.preventDefault();
            f && !c.collapsible || !1 === this._trigger("beforeActivate", a, k) || (c.active =
                h ? !1 : this.headers.index(e), this.active = f ? b() : e, this._toggle(k), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(a) {
            var c =
                a.newPanel,
                d = this.prevShow.length ? this.prevShow : a.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = c;
            this.prevHide = d;
            this.options.animate ? this._animate(c, d, a) : (d.hide(), c.show(), this._toggleComplete(a));
            d.attr({
                "aria-hidden": "true"
            });
            d.prev().attr("aria-selected", "false");
            c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(a, c, d) {
            var e, f, h, k = this,
                m = 0,
                q = a.length && (!c.length || a.index() < c.index()),
                A = this.options.animate || {};
            q = q && A.down || A;
            var E = function() {
                k._toggleComplete(d)
            };
            return "number" == typeof q && (h = q), "string" == typeof q && (f = q), f = f || q.easing || A.easing, h = h || q.duration || A.duration, c.length ? a.length ? (e = a.show().outerHeight(), c.animate(this.hideProps, {
                duration: h,
                easing: f,
                step: function(G, F) {
                    F.now = Math.round(G)
                }
            }), a.hide().animate(this.showProps, {
                duration: h,
                easing: f,
                complete: E,
                step: function(G, F) {
                    F.now = Math.round(G);
                    "height" !== F.prop ? m += F.now : "content" !== k.options.heightStyle && (F.now = Math.round(e - c.outerHeight() - m), m = 0)
                }
            }), void 0) : c.animate(this.hideProps, h, f, E) : a.animate(this.showProps, h, f, E)
        },
        _toggleComplete: function(a) {
            var c = a.oldPanel;
            c.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            c.length && (c.parent()[0].className = c.parent()[0].className);
            this._trigger("activate", null, a)
        }
    });
    b.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled",
                "true");
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(a) {
                    var c = b(a.target);
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && b(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(a) {
                    if (!this.previousFilter) {
                        var c =
                            b(a.currentTarget);
                        c.siblings(".ui-state-active").removeClass("ui-state-active");
                        this.focus(a, c)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, c) {
                    var d = this.active || this.element.find(this.options.items).eq(0);
                    c || this.focus(a, d)
                },
                blur: function(a) {
                    this._delay(function() {
                        b.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(a)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var a =
                    b(this);
                a.data("ui-menu-submenu-carat") && a.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(a) {
            var c = !0;
            switch (a.keyCode) {
                case b.ui.keyCode.PAGE_UP:
                    this.previousPage(a);
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    this.nextPage(a);
                    break;
                case b.ui.keyCode.HOME:
                    this._move("first", "first", a);
                    break;
                case b.ui.keyCode.END:
                    this._move("last", "last", a);
                    break;
                case b.ui.keyCode.UP:
                    this.previous(a);
                    break;
                case b.ui.keyCode.DOWN:
                    this.next(a);
                    break;
                case b.ui.keyCode.LEFT:
                    this.collapse(a);
                    break;
                case b.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                    break;
                case b.ui.keyCode.ENTER:
                case b.ui.keyCode.SPACE:
                    this._activate(a);
                    break;
                case b.ui.keyCode.ESCAPE:
                    this.collapse(a);
                    break;
                default:
                    c = !1;
                    var d = this.previousFilter || "";
                    var e = String.fromCharCode(a.keyCode);
                    var f = !1;
                    clearTimeout(this.filterTimer);
                    e === d ? f = !0 : e = d + e;
                    d = this._filterMenuItems(e);
                    d = f && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d;
                    d.length || (e = String.fromCharCode(a.keyCode),
                        d = this._filterMenuItems(e));
                    d.length ? (this.focus(a, d), this.previousFilter = e, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1E3)) : delete this.previousFilter
            }
            c && a.preventDefault()
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var a = this,
                c = this.options.icons.submenu;
            var d = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = b(this),
                    f = e.parent(),
                    h = b("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                f.attr("aria-haspopup", "true").prepend(h);
                e.attr("aria-labelledby", f.attr("id"))
            });
            d = d.add(this.element).find(this.options.items);
            d.not(".ui-menu-item").each(function() {
                var e = b(this);
                a._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
            });
            d.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            d.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !b.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, c) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu);
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c);
            this._super(a, c)
        },
        focus: function(a, c) {
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(c);
            this.active = c.first();
            var d = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            d = c.children(".ui-menu");
            d.length &&
                a && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = c.parent();
            this._trigger("focus", a, {
                item: c
            })
        },
        _scrollIntoView: function(a) {
            var c, d, e, f, h, k;
            this._hasScroll() && (c = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0, e = a.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), h = this.activeMenu.height(), k = a.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + k > h && this.activeMenu.scrollTop(f + e - h + k))
        },
        blur: function(a,
            c) {
            c || clearTimeout(this.timer);
            this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                item: this.active
            }))
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function(a) {
            var c = b.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded",
                "true").position(c)
        },
        collapseAll: function(a, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var d = c ? this.element : b(a && a.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(a);
                this.activeMenu = d
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(a) {
            return !b(a.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            c && c.length && (this._close(), this.focus(a, c))
        },
        expand: function(a) {
            var c = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            c && c.length && (this._open(c.parent()), this._delay(function() {
                this.focus(a, c)
            }))
        },
        next: function(a) {
            this._move("next",
                "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, c, d) {
            var e;
            this.active && (e = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
            e && e.length && this.active || (e = this.activeMenu.find(this.options.items)[c]());
            this.focus(d,
                e)
        },
        nextPage: function(a) {
            var c, d, e;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = b(this), 0 > c.offset().top - d - e
            }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(a), void 0)
        },
        previousPage: function(a) {
            var c, d, e;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(),
                this.active.prevAll(".ui-menu-item").each(function() {
                    return c = b(this), 0 < c.offset().top - d + e
                }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(a), void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(a) {
            this.active = this.active || b(a.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, c)
        },
        _filterMenuItems: function(a) {
            a =
                a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var c = RegExp("^" + a, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return c.test(b.trim(b(this).text()))
            })
        }
    });
    b.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var a, c, d, e = this.element[0].nodeName.toLowerCase(),
                f = "textarea" === e;
            e = "input" === e;
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(h) {
                    if (this.element.prop("readOnly")) return a = !0, d = !0, c = !0, void 0;
                    c = d = a = !1;
                    var k = b.ui.keyCode;
                    switch (h.keyCode) {
                        case k.PAGE_UP:
                            a = !0;
                            this._move("previousPage",
                                h);
                            break;
                        case k.PAGE_DOWN:
                            a = !0;
                            this._move("nextPage", h);
                            break;
                        case k.UP:
                            a = !0;
                            this._keyEvent("previous", h);
                            break;
                        case k.DOWN:
                            a = !0;
                            this._keyEvent("next", h);
                            break;
                        case k.ENTER:
                            this.menu.active && (a = !0, h.preventDefault(), this.menu.select(h));
                            break;
                        case k.TAB:
                            this.menu.active && this.menu.select(h);
                            break;
                        case k.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(h), h.preventDefault());
                            break;
                        default:
                            c = !0, this._searchTimeout(h)
                    }
                },
                keypress: function(h) {
                    if (a) return a = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && h.preventDefault(), void 0;
                    if (!c) {
                        var k = b.ui.keyCode;
                        switch (h.keyCode) {
                            case k.PAGE_UP:
                                this._move("previousPage", h);
                                break;
                            case k.PAGE_DOWN:
                                this._move("nextPage", h);
                                break;
                            case k.UP:
                                this._keyEvent("previous", h);
                                break;
                            case k.DOWN:
                                this._keyEvent("next", h)
                        }
                    }
                },
                input: function(h) {
                    return d ? (d = !1, h.preventDefault(), void 0) : (this._searchTimeout(h), void 0)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(h) {
                    return this.cancelBlur ?
                        (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(h), this._change(h), void 0)
                }
            });
            this._initSource();
            this.menu = b("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(h) {
                    h.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var k = this.menu.element[0];
                    b(h.target).closest(".ui-menu-item").length || this._delay(function() {
                        var m = this;
                        this.document.one("mousedown",
                            function(q) {
                                q.target === m.element[0] || q.target === k || b.contains(k, q.target) || m.close()
                            })
                    })
                },
                menufocus: function(h, k) {
                    var m, q;
                    return this.isNewMenu && (this.isNewMenu = !1, h.originalEvent && /^mouse/.test(h.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
                        b(h.target).trigger(h.originalEvent)
                    }), void 0) : (q = k.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", h, {
                            item: q
                        }) && h.originalEvent && /^key/.test(h.originalEvent.type) && this._value(q.value), m = k.item.attr("aria-label") ||
                        q.value, m && b.trim(m).length && (this.liveRegion.children().hide(), b("<div>").text(m).appendTo(this.liveRegion)), void 0)
                },
                menuselect: function(h, k) {
                    var m = k.item.data("ui-autocomplete-item"),
                        q = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = q, this._delay(function() {
                        this.previous = q;
                        this.selectedItem = m
                    }));
                    !1 !== this._trigger("select", h, {
                        item: m
                    }) && this._value(m.value);
                    this.term = this._value();
                    this.close(h);
                    this.selectedItem = m
                }
            });
            this.liveRegion = b("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "source" === a && this._initSource();
            "appendTo" === a &&
                this.menu.element.appendTo(this._appendTo());
            "disabled" === a && c && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0)), a && a[0] || (a = this.element.closest(".ui-front")), a.length || (a = this.document[0].body), a
        },
        _initSource: function() {
            var a, c, d = this;
            b.isArray(this.options.source) ? (a = this.options.source, this.source = function(e, f) {
                f(b.ui.autocomplete.filter(a, e.term))
            }) : "string" == typeof this.options.source ? (c = this.options.source,
                this.source = function(e, f) {
                    d.xhr && d.xhr.abort();
                    d.xhr = b.ajax({
                        url: c,
                        data: e,
                        dataType: "json",
                        success: function(h) {
                            f(h)
                        },
                        error: function() {
                            f([])
                        }
                    })
                }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var c = this.term === this._value(),
                    d = this.menu.element.is(":visible"),
                    e = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                c && (!c || d || e) || (this.selectedItem = null, this.search(null, a))
            }, this.options.delay)
        },
        search: function(a, c) {
            return a = null !=
                a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(c) : !1 !== this._trigger("search", c) ? this._search(a) : void 0
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var a = ++this.requestIndex;
            return b.proxy(function(c) {
                a === this.requestIndex && this.__response(c);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(a) {
            a &&
                (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            });
            !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            return a.length &&
                a[0].label && a[0].value ? a : b.map(a, function(c) {
                    return "string" == typeof c ? {
                        label: c,
                        value: c
                    } : b.extend({}, c, {
                        label: c.label || c.value,
                        value: c.value || c.label
                    })
                })
        },
        _suggest: function(a) {
            var c = this.menu.element.empty();
            this._renderMenu(c, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            c.show();
            this._resizeMenu();
            c.position(b.extend({ of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(a, c) {
            var d = this;
            b.each(c, function(e, f) {
                d._renderItemData(a, f)
            })
        },
        _renderItemData: function(a, c) {
            return this._renderItem(a, c).data("ui-autocomplete-item", c)
        },
        _renderItem: function(a, c) {
            return b("<li>").text(c.label).appendTo(a)
        },
        _move: function(a, c) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[a](c), void 0) : (this.search(null,
                c), void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, c) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, c), c.preventDefault())
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(a, c) {
            var d = RegExp(b.ui.autocomplete.escapeRegex(c), "i");
            return b.grep(a, function(e) {
                return d.test(e.label || e.value || e)
            })
        }
    });
    b.widget("ui.autocomplete",
        b.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(a) {
                var c;
                this._superApply(arguments);
                this.options.disabled || this.cancelSearch || (c = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(), b("<div>").text(c).appendTo(this.liveRegion))
            }
        });
    b.ui.autocomplete;
    var M, P = function() {
            var a =
                b(this);
            setTimeout(function() {
                a.find(":ui-button").button("refresh")
            }, 1)
        },
        V = function(a) {
            var c = a.name,
                d = a.form,
                e = b([]);
            return c && (c = c.replace(/'/g, "\\'"), e = d ? b(d).find("[name='" + c + "'][type=radio]") : b("[name='" + c + "'][type=radio]", a.ownerDocument).filter(function() {
                return !this.form
            })), e
        };
    b.widget("ui.button", {
        version: "1.11.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" +
                this.eventNamespace, P);
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this,
                c = this.options,
                d = "checkbox" === this.type || "radio" === this.type,
                e = d ? "" : "ui-state-active";
            null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role",
                "button").bind("mouseenter" + this.eventNamespace, function() {
                c.disabled || this === M && b(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                c.disabled || b(this).removeClass(e)
            }).bind("click" + this.eventNamespace, function(f) {
                c.disabled && (f.preventDefault(), f.stopImmediatePropagation())
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            d && this.element.bind("change" + this.eventNamespace,
                function() {
                    a.refresh()
                });
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return c.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (c.disabled) return !1;
                b(this).addClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", "true");
                var f = a.element[0];
                V(f).not(f).map(function() {
                    return b(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" +
                this.eventNamespace,
                function() {
                    return c.disabled ? !1 : (b(this).addClass("ui-state-active"), M = this, a.document.one("mouseup", function() {
                        M = null
                    }), void 0)
                }).bind("mouseup" + this.eventNamespace, function() {
                return c.disabled ? !1 : (b(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function(f) {
                return c.disabled ? !1 : ((f.keyCode === b.ui.keyCode.SPACE || f.keyCode === b.ui.keyCode.ENTER) && b(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                function() {
                    b(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(f) {
                f.keyCode === b.ui.keyCode.SPACE && b(this).click()
            }));
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var a, c, d;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), c = "label[for='" +
                this.element.attr("id") + "']", this.buttonElement = a.find(c), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(c), this.buttonElement.length || (this.buttonElement = a.find(c))), this.element.addClass("ui-helper-hidden-accessible"), d = this.element.is(":checked"), d && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", d)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(a, c) {
            return this._super(a, c), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!c), this.element.prop("disabled", !!c), c && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            "radio" === this.type ? V(this.element[0]).each(function() {
                b(this).is(":checked") ?
                    b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var a =
                this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                c = b("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
                d = this.options.icons,
                e = d.primary && d.secondary,
                f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " +
                d.primary + "'></span>"), d.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || a.attr("title", b.trim(c)))) : f.push("ui-button-text-only");
            a.addClass(f.join(" "))
        }
    });
    b.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(a, c) {
            "disabled" === a && this.buttons.button("option", a, c);
            this._super(a, c)
        },
        refresh: function() {
            var a = "rtl" === this.element.css("direction"),
                c = this.element.find(this.options.items),
                d = c.filter(":ui-button");
            c.not(":ui-button").button();
            d.button("refresh");
            this.buttons = c.map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ?
                "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    b.ui.button;
    b.extend(b.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    var W;
    b.extend(l.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            return r(this._defaults, a || {}), this
        },
        _attachDatepicker: function(a,
            c) {
            var d = a.nodeName.toLowerCase();
            var e = "div" === d || "span" === d;
            a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            var f = this._newInst(b(a), e);
            f.settings = b.extend({}, c || {});
            "input" === d ? this._connectDatepicker(a, f) : e && this._inlineDatepicker(a, f)
        },
        _newInst: function(a, c) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? u(b("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(a, c) {
            var d = b(a);
            c.append = b([]);
            c.trigger = b([]);
            d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), b.data(a, "datepicker", c), c.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function(a, c) {
            var d, e;
            var f = this._get(c, "appendText");
            var h = this._get(c, "isRTL");
            c.append && c.append.remove();
            f && (c.append = b("<span class='" + this._appendClass +
                "'>" + f + "</span>"), a[h ? "before" : "after"](c.append));
            a.unbind("focus", this._showDatepicker);
            c.trigger && c.trigger.remove();
            f = this._get(c, "showOn");
            "focus" !== f && "both" !== f || a.focus(this._showDatepicker);
            "button" !== f && "both" !== f || (d = this._get(c, "buttonText"), e = this._get(c, "buttonImage"), c.trigger = b(this._get(c, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({
                src: e,
                alt: d,
                title: d
            }) : b("<button type='button'></button>").addClass(this._triggerClass).html(e ? b("<img/>").attr({
                    src: e,
                    alt: d,
                    title: d
                }) :
                d)), a[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                return b.datepicker._datepickerShowing && b.datepicker._lastInput === a[0] ? b.datepicker._hideDatepicker() : b.datepicker._datepickerShowing && b.datepicker._lastInput !== a[0] ? (b.datepicker._hideDatepicker(), b.datepicker._showDatepicker(a[0])) : b.datepicker._showDatepicker(a[0]), !1
            }))
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var c, d, e, f, h = new Date(2009, 11, 20),
                    k = this._get(a, "dateFormat");
                k.match(/[DM]/) && (c = function(m) {
                    for (f =
                        e = d = 0; m.length > f; f++) m[f].length > d && (d = m[f].length, e = f);
                    return e
                }, h.setMonth(c(this._get(a, k.match(/MM/) ? "monthNames" : "monthNamesShort"))), h.setDate(c(this._get(a, k.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - h.getDay()));
                a.input.attr("size", this._formatDate(a, h).length)
            }
        },
        _inlineDatepicker: function(a, c) {
            var d = b(a);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), b.data(a, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c),
                c.settings.disabled && this._disableDatepicker(a), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(a, c, d, e, f) {
            var h, k, m, q, A;
            a = this._dialogInst;
            return a || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = b("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, b.data(this._dialogInput[0], "datepicker", a)), r(a.settings,
                    e || {}), c = c && c.constructor === Date ? this._formatDate(a, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (k = document.documentElement.clientWidth, m = document.documentElement.clientHeight, q = document.documentElement.scrollLeft || document.body.scrollLeft, A = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [k / 2 - 100 + q, m / 2 - 150 + A]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass),
                this._showDatepicker(this._dialogInput[0]), b.blockUI && b.blockUI(this.dpDiv), b.data(this._dialogInput[0], "datepicker", a), this
        },
        _destroyDatepicker: function(a) {
            var c, d = b(a),
                e = b.data(a, "datepicker");
            d.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), b.removeData(a, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) :
                ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(a) {
            var c, d, e = b(a),
                f = b.data(a, "datepicker");
            e.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), "input" === c ? (a.disabled = !1, f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = b.map(this._disabledInputs, function(h) {
                return h === a ? null : h
            }))
        },
        _disableDatepicker: function(a) {
            var c, d, e = b(a),
                f = b.data(a, "datepicker");
            e.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), "input" === c ? (a.disabled = !0, f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = b.map(this._disabledInputs, function(h) {
                return h === a ? null : h
            }), this._disabledInputs[this._disabledInputs.length] = a)
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var c = 0; this._disabledInputs.length > c; c++)
                if (this._disabledInputs[c] === a) return !0;
            return !1
        },
        _getInst: function(a) {
            try {
                return b.data(a, "datepicker")
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(a, c, d) {
            var e, f, h, k, m = this._getInst(a);
            return 2 === arguments.length && "string" ==
                typeof c ? "defaults" === c ? b.extend({}, b.datepicker._defaults) : m ? "all" === c ? b.extend({}, m.settings) : this._get(m, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), m && (this._curInst === m && this._hideDatepicker(), f = this._getDateDatepicker(a, !0), h = this._getMinMaxDate(m, "min"), k = this._getMinMaxDate(m, "max"), r(m.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (m.settings.minDate = this._formatDate(m, h)), null !== k && void 0 !== e.dateFormat && void 0 === e.maxDate && (m.settings.maxDate = this._formatDate(m,
                    k)), "disabled" in e && (e.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)), this._attachments(b(a), m), this._autoSize(m), this._setDate(m, f), this._updateAlternate(m), this._updateDatepicker(m)), void 0)
        },
        _changeDatepicker: function(a, c, d) {
            this._optionDatepicker(a, c, d)
        },
        _refreshDatepicker: function(a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, c) {
            (a = this._getInst(a)) && (this._setDate(a, c), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(a,
            c) {
            a = this._getInst(a);
            return a && !a.inline && this._setDateFromField(a, c), a ? this._getDate(a) : null
        },
        _doKeyDown: function(a) {
            var c, d, e, f = b.datepicker._getInst(a.target),
                h = !0,
                k = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, b.datepicker._datepickerShowing) switch (a.keyCode) {
                case 9:
                    b.datepicker._hideDatepicker();
                    h = !1;
                    break;
                case 13:
                    return e = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", f.dpDiv), e[0] && b.datepicker._selectDay(a.target, f.selectedMonth, f.selectedYear, e[0]), c = b.datepicker._get(f,
                        "onSelect"), c ? (d = b.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : b.datepicker._hideDatepicker(), !1;
                case 27:
                    b.datepicker._hideDatepicker();
                    break;
                case 33:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(f, "stepBigMonths") : -b.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 34:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(f, "stepBigMonths") : +b.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 35:
                    (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target);
                    h = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target);
                    h = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, k ? 1 : -1, "D");
                    h = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(f, "stepBigMonths") : -b.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 38:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D");
                    h = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    (a.ctrlKey || a.metaKey) &&
                    b.datepicker._adjustDate(a.target, k ? -1 : 1, "D");
                    h = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(f, "stepBigMonths") : +b.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 40:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, 7, "D");
                    h = a.ctrlKey || a.metaKey;
                    break;
                default:
                    h = !1
            } else 36 === a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : h = !1;
            h && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function(a) {
            var c, d, e = b.datepicker._getInst(a.target);
            return b.datepicker._get(e, "constrainInput") ? (c = b.datepicker._possibleChars(b.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), a.ctrlKey || a.metaKey || " " > d || !c || -1 < c.indexOf(d)) : void 0
        },
        _doKeyUp: function(a) {
            var c;
            a = b.datepicker._getInst(a.target);
            if (a.input.val() !== a.lastVal) try {
                (c = b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a))) && (b.datepicker._setDateFromField(a), b.datepicker._updateAlternate(a),
                    b.datepicker._updateDatepicker(a))
            } catch (d) {}
            return !0
        },
        _showDatepicker: function(a) {
            if (a = a.target || a, "input" !== a.nodeName.toLowerCase() && (a = b("input", a.parentNode)[0]), !b.datepicker._isDisabledDatepicker(a) && b.datepicker._lastInput !== a) {
                var c, d, e, f;
                var h = b.datepicker._getInst(a);
                b.datepicker._curInst && b.datepicker._curInst !== h && (b.datepicker._curInst.dpDiv.stop(!0, !0), h && b.datepicker._datepickerShowing && b.datepicker._hideDatepicker(b.datepicker._curInst.input[0]));
                var k = (k = b.datepicker._get(h, "beforeShow")) ?
                    k.apply(a, [a, h]) : {};
                !1 !== k && (r(h.settings, k), h.lastVal = null, b.datepicker._lastInput = a, b.datepicker._setDateFromField(h), b.datepicker._inDialog && (a.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(a), b.datepicker._pos[1] += a.offsetHeight), c = !1, b(a).parents().each(function() {
                        return c |= "fixed" === b(this).css("position"), !c
                    }), d = {
                        left: b.datepicker._pos[0],
                        top: b.datepicker._pos[1]
                    }, b.datepicker._pos = null, h.dpDiv.empty(), h.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }),
                    b.datepicker._updateDatepicker(h), d = b.datepicker._checkOffset(h, d, c), h.dpDiv.css({
                        position: b.datepicker._inDialog && b.blockUI ? "static" : c ? "fixed" : "absolute",
                        display: "none",
                        left: d.left + "px",
                        top: d.top + "px"
                    }), h.inline || (e = b.datepicker._get(h, "showAnim"), f = b.datepicker._get(h, "duration"), h.dpDiv.css("z-index", g(b(a)) + 1), b.datepicker._datepickerShowing = !0, b.effects && b.effects.effect[e] ? h.dpDiv.show(e, b.datepicker._get(h, "showOptions"), f) : h.dpDiv[e || "show"](e ? f : null), b.datepicker._shouldFocusInput(h) && h.input.focus(),
                        b.datepicker._curInst = h))
            }
        },
        _updateDatepicker: function(a) {
            this.maxRows = 4;
            W = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            this._attachHandlers(a);
            var c, d = this._getNumberOfMonths(a),
                e = d[1],
                f = a.dpDiv.find("." + this._dayOverClass + " a");
            0 < f.length && x.apply(f.get(0));
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < e && a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
            a.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a === b.datepicker._curInst && b.datepicker._datepickerShowing && b.datepicker._shouldFocusInput(a) && a.input.focus();
            a.yearshtml && (c = a.yearshtml, setTimeout(function() {
                c === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                c = a.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(a,
            c, d) {
            var e = a.dpDiv.outerWidth(),
                f = a.dpDiv.outerHeight(),
                h = a.input ? a.input.outerWidth() : 0,
                k = a.input ? a.input.outerHeight() : 0,
                m = document.documentElement.clientWidth + (d ? 0 : b(document).scrollLeft()),
                q = document.documentElement.clientHeight + (d ? 0 : b(document).scrollTop());
            return c.left -= this._get(a, "isRTL") ? e - h : 0, c.left -= d && c.left === a.input.offset().left ? b(document).scrollLeft() : 0, c.top -= d && c.top === a.input.offset().top + k ? b(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > m && m > e ? Math.abs(c.left + e - m) :
                0), c.top -= Math.min(c.top, c.top + f > q && q > f ? Math.abs(f + k) : 0), c
        },
        _findPos: function(a) {
            var c, d = this._getInst(a);
            for (d = this._get(d, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || b.expr.filters.hidden(a));) a = a[d ? "previousSibling" : "nextSibling"];
            return c = b(a).offset(), [c.left, c.top]
        },
        _hideDatepicker: function(a) {
            var c, d, e, f, h = this._curInst;
            !h || a && h !== b.data(a, "datepicker") || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function() {
                b.datepicker._tidyDialog(h)
            }, b.effects && (b.effects.effect[c] ||
                b.effects[c]) ? h.dpDiv.hide(c, b.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (b.datepicker._curInst) {
                a = b(a.target);
                var c = b.datepicker._getInst(a[0]);
                (!(a[0].id === b.datepicker._mainDivId || 0 !== a.parents("#" + b.datepicker._mainDivId).length || a.hasClass(b.datepicker.markerClassName) || a.closest("." + b.datepicker._triggerClass).length || !b.datepicker._datepickerShowing || b.datepicker._inDialog && b.blockUI) || a.hasClass(b.datepicker.markerClassName) && b.datepicker._curInst !== c) && b.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, c, d) {
            a = b(a);
            var e =
                this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(e, c + ("M" === d ? this._get(e, "showCurrentAtPos") : 0), d), this._updateDatepicker(e))
        },
        _gotoToday: function(a) {
            var c;
            a = b(a);
            var d = this._getInst(a[0]);
            this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear) : (c = new Date, d.selectedDay = c.getDate(), d.drawMonth = d.selectedMonth = c.getMonth(), d.drawYear = d.selectedYear = c.getFullYear());
            this._notifyChange(d);
            this._adjustDate(a)
        },
        _selectMonthYear: function(a, c, d) {
            a = b(a);
            var e = this._getInst(a[0]);
            e["selected" + ("M" === d ? "Month" : "Year")] = e["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function(a, c, d, e) {
            var f, h = b(a);
            b(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(h[0]) || (f = this._getInst(h[0]), f.selectedDay = f.currentDay = b("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(a,
                this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(a) {
            a = b(a);
            this._selectDate(a, "")
        },
        _selectDate: function(a, c) {
            a = b(a);
            var d = this._getInst(a[0]);
            c = null != c ? c : this._formatDate(d);
            d.input && d.input.val(c);
            this._updateAlternate(d);
            (a = this._get(d, "onSelect")) ? a.apply(d.input ? d.input[0] : null, [c, d]): d.input && d.input.trigger("change");
            d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput =
                null)
        },
        _updateAlternate: function(a) {
            var c, d, e, f = this._get(a, "altField");
            f && (c = this._get(a, "altFormat") || this._get(a, "dateFormat"), d = this._getDate(a), e = this.formatDate(c, d, this._getFormatConfig(a)), b(f).each(function() {
                b(this).val(e)
            }))
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
            var c;
            a = new Date(a.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), c = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((c - a) / 864E5) / 7) + 1
        },
        parseDate: function(a, c,
            d) {
            if (null == a || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null;
            var e, f, h, k = 0,
                m = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            m = "string" != typeof m ? m : (new Date).getFullYear() % 100 + parseInt(m, 10);
            var q = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                A = (d ? d.dayNames : null) || this._defaults.dayNames,
                E = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames : null) || this._defaults.monthNames;
            var G = -1,
                F = -1,
                z = -1,
                t = -1,
                v = !1,
                y = function(C) {
                    C =
                        a.length > e + 1 && a.charAt(e + 1) === C;
                    return C && e++, C
                },
                w = function(C) {
                    var N = y(C);
                    N = "@" === C ? 14 : "!" === C ? 20 : "y" === C && N ? 4 : "o" === C ? 3 : 2;
                    C = RegExp("^\\d{" + ("y" === C ? N : 1) + "," + N + "}");
                    C = c.substring(k).match(C);
                    if (!C) throw "Missing number at position " + k;
                    return k += C[0].length, parseInt(C[0], 10)
                },
                H = function(C, N, O) {
                    var R = -1;
                    C = b.map(y(C) ? O : N, function(S, X) {
                        return [
                            [X, S]
                        ]
                    }).sort(function(S, X) {
                        return -(S[1].length - X[1].length)
                    });
                    if (b.each(C, function(S, X) {
                            S = X[1];
                            return c.substr(k, S.length).toLowerCase() === S.toLowerCase() ? (R = X[0],
                                k += S.length, !1) : void 0
                        }), -1 !== R) return R + 1;
                    throw "Unknown name at position " + k;
                },
                L = function() {
                    if (c.charAt(k) !== a.charAt(e)) throw "Unexpected literal at position " + k;
                    k++
                };
            for (e = 0; a.length > e; e++)
                if (v) "'" !== a.charAt(e) || y("'") ? L() : v = !1;
                else switch (a.charAt(e)) {
                    case "d":
                        z = w("d");
                        break;
                    case "D":
                        H("D", q, A);
                        break;
                    case "o":
                        t = w("o");
                        break;
                    case "m":
                        F = w("m");
                        break;
                    case "M":
                        F = H("M", E, d);
                        break;
                    case "y":
                        G = w("y");
                        break;
                    case "@":
                        var K = new Date(w("@"));
                        G = K.getFullYear();
                        F = K.getMonth() + 1;
                        z = K.getDate();
                        break;
                    case "!":
                        K =
                            new Date((w("!") - this._ticksTo1970) / 1E4);
                        G = K.getFullYear();
                        F = K.getMonth() + 1;
                        z = K.getDate();
                        break;
                    case "'":
                        y("'") ? L() : v = !0;
                        break;
                    default:
                        L()
                }
            if (c.length > k && (h = c.substr(k), !/^\s+/.test(h))) throw "Extra/unparsed characters found in date: " + h;
            if (-1 === G ? G = (new Date).getFullYear() : 100 > G && (G += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m >= G ? 0 : -100)), -1 < t)
                for (F = 1, z = t; !(f = this._getDaysInMonth(G, F - 1), f >= z);) F++, z -= f;
            if (K = this._daylightSavingAdjust(new Date(G, F - 1, z)), K.getFullYear() !== G || K.getMonth() +
                1 !== F || K.getDate() !== z) throw "Invalid date";
            return K
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * 719162,
        formatDate: function(a, c, d) {
            if (!c) return "";
            var e, f = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                h = (d ? d.dayNames : null) || this._defaults.dayNames,
                k = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames : null) || this._defaults.monthNames;
            var m = function(F) {
                    F = a.length > e + 1 && a.charAt(e + 1) === F;
                    return F && e++, F
                },
                q = function(F, z, t) {
                    z = "" + z;
                    if (m(F))
                        for (; t > z.length;) z = "0" + z;
                    return z
                },
                A = function(F, z, t, v) {
                    return m(F) ? v[z] : t[z]
                },
                E = "",
                G = !1;
            if (c)
                for (e = 0; a.length > e; e++)
                    if (G) "'" !== a.charAt(e) || m("'") ? E += a.charAt(e) : G = !1;
                    else switch (a.charAt(e)) {
                        case "d":
                            E += q("d", c.getDate(), 2);
                            break;
                        case "D":
                            E += A("D", c.getDay(), f, h);
                            break;
                        case "o":
                            E += q("o", Math.round(((new Date(c.getFullYear(), c.getMonth(), c.getDate())).getTime() -
                                (new Date(c.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            E += q("m", c.getMonth() + 1, 2);
                            break;
                        case "M":
                            E += A("M", c.getMonth(), k, d);
                            break;
                        case "y":
                            E += m("y") ? c.getFullYear() : (10 > c.getYear() % 100 ? "0" : "") + c.getYear() % 100;
                            break;
                        case "@":
                            E += c.getTime();
                            break;
                        case "!":
                            E += 1E4 * c.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            m("'") ? E += "'" : G = !0;
                            break;
                        default:
                            E += a.charAt(e)
                    }
            return E
        },
        _possibleChars: function(a) {
            var c, d = "",
                e = !1,
                f = function(h) {
                    h = a.length > c + 1 && a.charAt(c + 1) === h;
                    return h && c++, h
                };
            for (c = 0; a.length >
                c; c++)
                if (e) "'" !== a.charAt(c) || f("'") ? d += a.charAt(c) : e = !1;
                else switch (a.charAt(c)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        d += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        f("'") ? d += "'" : e = !0;
                        break;
                    default:
                        d += a.charAt(c)
                }
            return d
        },
        _get: function(a, c) {
            return void 0 !== a.settings[c] ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function(a, c) {
            if (a.input.val() !== a.lastVal) {
                var d = this._get(a, "dateFormat"),
                    e = a.lastVal = a.input ? a.input.val() : null,
                    f = this._getDefaultDate(a),
                    h = f,
                    k = this._getFormatConfig(a);
                try {
                    h = this.parseDate(d, e, k) || f
                } catch (m) {
                    e = c ? "" : e
                }
                a.selectedDay = h.getDate();
                a.drawMonth = a.selectedMonth = h.getMonth();
                a.drawYear = a.selectedYear = h.getFullYear();
                a.currentDay = e ? h.getDate() : 0;
                a.currentMonth = e ? h.getMonth() : 0;
                a.currentYear = e ? h.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, c, d) {
            var e = function(h) {
                    var k = new Date;
                    return k.setDate(k.getDate() + h), k
                },
                f = function(h) {
                    try {
                        return b.datepicker.parseDate(b.datepicker._get(a,
                            "dateFormat"), h, b.datepicker._getFormatConfig(a))
                    } catch (G) {}
                    var k = (h.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date,
                        m = k.getFullYear(),
                        q = k.getMonth();
                    k = k.getDate();
                    for (var A = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, E = A.exec(h); E;) {
                        switch (E[2] || "d") {
                            case "d":
                            case "D":
                                k += parseInt(E[1], 10);
                                break;
                            case "w":
                            case "W":
                                k += 7 * parseInt(E[1], 10);
                                break;
                            case "m":
                            case "M":
                                q += parseInt(E[1], 10);
                                k = Math.min(k, b.datepicker._getDaysInMonth(m, q));
                                break;
                            case "y":
                            case "Y":
                                m += parseInt(E[1], 10), k = Math.min(k,
                                    b.datepicker._getDaysInMonth(m, q))
                        }
                        E = A.exec(h)
                    }
                    return new Date(m, q, k)
                };
            c = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return c = c && "Invalid Date" == "" + c ? d : c, c && (c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0)), this._daylightSavingAdjust(c)
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function(a, c, d) {
            var e = !c,
                f = a.selectedMonth,
                h = a.selectedYear;
            c = this._restrictMinMax(a,
                this._determineDate(a, c, new Date));
            a.selectedDay = a.currentDay = c.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = c.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = c.getFullYear();
            f === a.selectedMonth && h === a.selectedYear || d || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(e ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _attachHandlers: function(a) {
            var c =
                this._get(a, "stepMonths"),
                d = "#" + a.id.replace(/\\\\/g, "\\");
            a.dpDiv.find("[data-handler]").map(function() {
                b(this).bind(this.getAttribute("data-event"), {
                    prev: function() {
                        b.datepicker._adjustDate(d, -c, "M")
                    },
                    next: function() {
                        b.datepicker._adjustDate(d, +c, "M")
                    },
                    hide: function() {
                        b.datepicker._hideDatepicker()
                    },
                    today: function() {
                        b.datepicker._gotoToday(d)
                    },
                    selectDay: function() {
                        return b.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return b.datepicker._selectMonthYear(d,
                            this, "M"), !1
                    },
                    selectYear: function() {
                        return b.datepicker._selectMonthYear(d, this, "Y"), !1
                    }
                }[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(a) {
            var c, d, e, f, h, k, m, q = new Date;
            q = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate()));
            var A = this._get(a, "isRTL");
            var E = this._get(a, "showButtonPanel");
            var G = this._get(a, "hideIfNoPrevNext");
            var F = this._get(a, "navigationAsDateFormat");
            var z = this._getNumberOfMonths(a),
                t = this._get(a, "showCurrentAtPos");
            var v = this._get(a, "stepMonths");
            var y = 1 !== z[0] || 1 !== z[1],
                w = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                H = this._getMinMaxDate(a, "min"),
                L = this._getMinMaxDate(a, "max");
            t = a.drawMonth - t;
            var K = a.drawYear;
            if (0 > t && (t += 12, K--), L) {
                var C = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth() - z[0] * z[1] + 1, L.getDate()));
                for (C = H && H > C ? H : C; this._daylightSavingAdjust(new Date(K, t, 1)) > C;) t--, 0 > t && (t = 11, K--)
            }
            a.drawMonth = t;
            a.drawYear = K;
            C = this._get(a, "prevText");
            C = F ? this.formatDate(C,
                this._daylightSavingAdjust(new Date(K, t - v, 1)), this._getFormatConfig(a)) : C;
            C = this._canAdjustMonth(a, -1, K, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + C + "'><span class='ui-icon ui-icon-circle-triangle-" + (A ? "e" : "w") + "'>" + C + "</span></a>" : G ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + C + "'><span class='ui-icon ui-icon-circle-triangle-" + (A ? "e" : "w") + "'>" + C + "</span></a>";
            var N = this._get(a, "nextText");
            N = F ? this.formatDate(N, this._daylightSavingAdjust(new Date(K,
                t + v, 1)), this._getFormatConfig(a)) : N;
            G = this._canAdjustMonth(a, 1, K, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + N + "'><span class='ui-icon ui-icon-circle-triangle-" + (A ? "w" : "e") + "'>" + N + "</span></a>" : G ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + N + "'><span class='ui-icon ui-icon-circle-triangle-" + (A ? "w" : "e") + "'>" + N + "</span></a>";
            v = this._get(a, "currentText");
            N = this._get(a, "gotoCurrent") && a.currentDay ? w : q;
            v = F ? this.formatDate(v,
                N, this._getFormatConfig(a)) : v;
            F = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>";
            E = E ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (A ? F : "") + (this._isInRange(a, N) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + v + "</button>" : "") + (A ? "" : F) + "</div>" :
                "";
            F = parseInt(this._get(a, "firstDay"), 10);
            F = isNaN(F) ? 0 : F;
            v = this._get(a, "showWeek");
            N = this._get(a, "dayNames");
            var O = this._get(a, "dayNamesMin");
            var R = this._get(a, "monthNames");
            var S = this._get(a, "monthNamesShort");
            var X = this._get(a, "beforeShowDay");
            var Z = this._get(a, "showOtherMonths");
            var ea = this._get(a, "selectOtherMonths");
            var T = this._getDefaultDate(a);
            var U = "";
            for (d = 0; z[0] > d; d++) {
                var aa = "";
                this.maxRows = 4;
                for (e = 0; z[1] > e; e++) {
                    if (f = this._daylightSavingAdjust(new Date(K, t, a.selectedDay)), c = " ui-corner-all",
                        h = "", y) {
                        if (h += "<div class='ui-datepicker-group", 1 < z[1]) switch (e) {
                            case 0:
                                h += " ui-datepicker-group-first";
                                c = " ui-corner-" + (A ? "right" : "left");
                                break;
                            case z[1] - 1:
                                h += " ui-datepicker-group-last";
                                c = " ui-corner-" + (A ? "left" : "right");
                                break;
                            default:
                                h += " ui-datepicker-group-middle", c = ""
                        }
                        h += "'>"
                    }
                    h += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + c + "'>" + (/all|left/.test(c) && 0 === d ? A ? G : C : "") + (/all|right/.test(c) && 0 === d ? A ? C : G : "") + this._generateMonthYearHeader(a, t, K, H, L, 0 < d || 0 < e, R, S) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    var Y = v ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (c = 0; 7 > c; c++) {
                        var Q = (c + F) % 7;
                        Y += "<th scope='col'" + (5 <= (c + F + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + N[Q] + "'>" + O[Q] + "</span></th>"
                    }
                    h += Y + "</tr></thead><tbody>";
                    Y = this._getDaysInMonth(K, t);
                    K === a.selectedYear && t === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, Y));
                    c = (this._getFirstDayOfMonth(K, t) - F + 7) % 7;
                    Y = Math.ceil((c + Y) / 7);
                    this.maxRows = Y = y ? this.maxRows > Y ? this.maxRows : Y : Y;
                    Q = this._daylightSavingAdjust(new Date(K,
                        t, 1 - c));
                    for (k = 0; Y > k; k++) {
                        h += "<tr>";
                        var ba = v ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(Q) + "</td>" : "";
                        for (c = 0; 7 > c; c++) {
                            var ca = X ? X.apply(a.input ? a.input[0] : null, [Q]) : [!0, ""];
                            var da = (m = Q.getMonth() !== t) && !ea || !ca[0] || H && H > Q || L && Q > L;
                            ba += "<td class='" + (5 <= (c + F + 6) % 7 ? " ui-datepicker-week-end" : "") + (m ? " ui-datepicker-other-month" : "") + (Q.getTime() === f.getTime() && t === a.selectedMonth && a._keyEvent || T.getTime() === Q.getTime() && T.getTime() === f.getTime() ? " " + this._dayOverClass : "") + (da ? " " +
                                this._unselectableClass + " ui-state-disabled" : "") + (m && !Z ? "" : " " + ca[1] + (Q.getTime() === w.getTime() ? " " + this._currentClass : "") + (Q.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (m && !Z || !ca[2] ? "" : " title='" + ca[2].replace(/'/g, "&#39;") + "'") + (da ? "" : " data-handler='selectDay' data-event='click' data-month='" + Q.getMonth() + "' data-year='" + Q.getFullYear() + "'") + ">" + (m && !Z ? "&#xa0;" : da ? "<span class='ui-state-default'>" + Q.getDate() + "</span>" : "<a class='ui-state-default" + (Q.getTime() === q.getTime() ? " ui-state-highlight" :
                                "") + (Q.getTime() === w.getTime() ? " ui-state-active" : "") + (m ? " ui-priority-secondary" : "") + "' href='#'>" + Q.getDate() + "</a>") + "</td>";
                            Q.setDate(Q.getDate() + 1);
                            Q = this._daylightSavingAdjust(Q)
                        }
                        h += ba + "</tr>"
                    }
                    t++;
                    11 < t && (t = 0, K++);
                    h += "</tbody></table>" + (y ? "</div>" + (0 < z[0] && e === z[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    aa += h
                }
                U += aa
            }
            return U += E, a._keyEvent = !1, U
        },
        _generateMonthYearHeader: function(a, c, d, e, f, h, k, m) {
            var q, A = this._get(a, "changeMonth"),
                E = this._get(a, "changeYear"),
                G = this._get(a, "showMonthAfterYear"),
                F = "<div class='ui-datepicker-title'>",
                z = "";
            if (h || !A) z += "<span class='ui-datepicker-month'>" + k[c] + "</span>";
            else {
                k = e && e.getFullYear() === d;
                var t = f && f.getFullYear() === d;
                z += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (q = 0; 12 > q; q++)(!k || q >= e.getMonth()) && (!t || f.getMonth() >= q) && (z += "<option value='" + q + "'" + (q === c ? " selected='selected'" : "") + ">" + m[q] + "</option>");
                z += "</select>"
            }
            if (G || (F += z + (!h && A && E ? "" : "&#xa0;")), !a.yearshtml)
                if (a.yearshtml = "", h || !E) F += "<span class='ui-datepicker-year'>" +
                    d + "</span>";
                else {
                    m = this._get(a, "yearRange").split(":");
                    var v = (new Date).getFullYear();
                    k = function(y) {
                        y = y.match(/c[+\-].*/) ? d + parseInt(y.substring(1), 10) : y.match(/[+\-].*/) ? v + parseInt(y, 10) : parseInt(y, 10);
                        return isNaN(y) ? v : y
                    };
                    c = k(m[0]);
                    m = Math.max(c, k(m[1] || ""));
                    c = e ? Math.max(c, e.getFullYear()) : c;
                    m = f ? Math.min(m, f.getFullYear()) : m;
                    for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= c; c++) a.yearshtml += "<option value='" + c + "'" + (c === d ? " selected='selected'" :
                        "") + ">" + c + "</option>";
                    a.yearshtml += "</select>";
                    F += a.yearshtml;
                    a.yearshtml = null
                }
            return F += this._get(a, "yearSuffix"), G && (F += (!h && A && E ? "" : "&#xa0;") + z), F += "</div>"
        },
        _adjustInstDate: function(a, c, d) {
            var e = a.drawYear + ("Y" === d ? c : 0),
                f = a.drawMonth + ("M" === d ? c : 0);
            c = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + ("D" === d ? c : 0);
            e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, c)));
            a.selectedDay = e.getDate();
            a.drawMonth = a.selectedMonth = e.getMonth();
            a.drawYear = a.selectedYear = e.getFullYear();
            "M" !==
            d && "Y" !== d || this._notifyChange(a)
        },
        _restrictMinMax: function(a, c) {
            var d = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            c = d && d > c ? d : c;
            return a && c > a ? a : c
        },
        _notifyChange: function(a) {
            var c = this._get(a, "onChangeMonthYear");
            c && c.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(a, c) {
            return this._determineDate(a, this._get(a, c + "Date"), null)
        },
        _getDaysInMonth: function(a, c) {
            return 32 - this._daylightSavingAdjust(new Date(a, c, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, c) {
            return (new Date(a, c, 1)).getDay()
        },
        _canAdjustMonth: function(a, c, d, e) {
            var f = this._getNumberOfMonths(a);
            d = this._daylightSavingAdjust(new Date(d, e + (0 > c ? c : f[0] * f[1]), 1));
            return 0 > c && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth())), this._isInRange(a, d)
        },
        _isInRange: function(a, c) {
            var d, e, f = this._getMinMaxDate(a, "min"),
                h = this._getMinMaxDate(a, "max"),
                k = null,
                m = null;
            a =
                this._get(a, "yearRange");
            return a && (d = a.split(":"), e = (new Date).getFullYear(), k = parseInt(d[0], 10), m = parseInt(d[1], 10), d[0].match(/[+\-].*/) && (k += e), d[1].match(/[+\-].*/) && (m += e)), (!f || c.getTime() >= f.getTime()) && (!h || c.getTime() <= h.getTime()) && (!k || c.getFullYear() >= k) && (!m || m >= c.getFullYear())
        },
        _getFormatConfig: function(a) {
            var c = this._get(a, "shortYearCutoff");
            return c = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), {
                shortYearCutoff: c,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a,
                    "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, c, d, e) {
            c || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            c = c ? "object" == typeof c ? c : this._daylightSavingAdjust(new Date(e, d, c)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), c, this._getFormatConfig(a))
        }
    });
    b.fn.datepicker = function(a) {
        if (!this.length) return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick), b.datepicker.initialized = !0);
        0 === b("#" + b.datepicker._mainDivId).length && b("body").append(b.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof a || "isDisabled" !== a && "getDate" !== a && "widget" !== a ? "option" === a && 2 === arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function() {
            "string" == typeof a ? b.datepicker["_" +
                a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
        }) : b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c))
    };
    b.datepicker = new l;
    b.datepicker.initialized = !1;
    b.datepicker.uuid = (new Date).getTime();
    b.datepicker.version = "1.11.2";
    b.datepicker;
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function(a) {
            var c = this.options;
            return this._blurActiveElement(a), this.helper || c.disabled || 0 < b(a.target).closest(".ui-resizable-handle").length ?
                !1 : (this.handle = this._getHandle(a), this.handle ? (this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix), !0) : !1)
        },
        _blockFrames: function(a) {
            this.iframeBlocks = this.document.find(a).map(function() {
                var c = b(this);
                return b("<div>").css("position", "absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(a) {
            var c = this.document[0];
            if (this.handleElement.is(a.target)) try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && b(c.activeElement).blur()
            } catch (d) {}
        },
        _mouseStart: function(a) {
            var c = this.options;
            return this.helper = this._createHelper(a), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), b.ui.ddmanager && (b.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(),
                this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                    return "fixed" === b(this).css("position")
                }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(a), this.originalPosition = this.position = this._generatePosition(a, !1), this.originalPageX = a.pageX, this.originalPageY = a.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), !1 === this._trigger("start", a) ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this,
                    a), this._normalizeRightBottom(), this._mouseDrag(a, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this, a), !0)
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(a, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position =
                this._generatePosition(a, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                c = this._uiHash();
                if (!1 === this._trigger("drag", a, c)) return this._mouseUp({}), !1;
                this.position = c.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", b.ui.ddmanager && b.ui.ddmanager.drag(this, a), !1
        },
        _mouseStop: function(a) {
            var c = this,
                d = !1;
            return b.ui.ddmanager && !this.options.dropBehaviour && (d = b.ui.ddmanager.drop(this, a)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || b.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== c._trigger("stop", a) && c._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear(), !1
        },
        _mouseUp: function(a) {
            return this._unblockFrames(), b.ui.ddmanager && b.ui.ddmanager.dragStop(this, a), this.handleElement.is(a.target) && this.element.focus(),
                b.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(a) {
            return this.options.handle ? !!b(a.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(a) {
            var c = this.options,
                d = b.isFunction(c.helper);
            a = d ? b(c.helper.apply(this.element[0], [a])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return a.parents("body").length || a.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && a[0] === this.element[0] && this._setPositionRelative(), a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute"), a
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) ||
                (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(a) {
            "string" == typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) ||
                a === this.document[0]
        },
        _getParentOffset: function() {
            var a = this.offsetParent.offset(),
                c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (a = {
                top: 0,
                left: 0
            }), {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !==
                this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
                c = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (c ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (c ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"),
                    10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, c, d, e = this.options,
                f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? (this.containment = [b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width -
                this.margins.left, b(window).scrollTop() + (b(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ], void 0) : "document" === e.containment ? (this.containment = [0, 0, b(f).width() - this.helperProportions.width - this.margins.left, (b(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : e.containment.constructor === Array ? (this.containment = e.containment, void 0) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode),
                c = b(e.containment), d = c[0], d && (a = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (a ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(d.scrollHeight, d.offsetHeight) :
                    d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function(a, c) {
            c || (c = this.position);
            a = "absolute" === a ? 1 : -1;
            var d = this._isRootNode(this.scrollParent[0]);
            return {
                top: c.top + this.offset.relative.top * a + this.offset.parent.top * a - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) *
                    a,
                left: c.left + this.offset.relative.left * a + this.offset.parent.left * a - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * a
            }
        },
        _generatePosition: function(a, c) {
            var d, e, f, h, k = this.options,
                m = this._isRootNode(this.scrollParent[0]),
                q = a.pageX,
                A = a.pageY;
            return m && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), c && (this.containment && (this.relativeContainer ? (e = this.relativeContainer.offset(), d = [this.containment[0] +
                e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top
            ]) : d = this.containment, a.pageX - this.offset.click.left < d[0] && (q = d[0] + this.offset.click.left), a.pageY - this.offset.click.top < d[1] && (A = d[1] + this.offset.click.top), a.pageX - this.offset.click.left > d[2] && (q = d[2] + this.offset.click.left), a.pageY - this.offset.click.top > d[3] && (A = d[3] + this.offset.click.top)), k.grid && (f = k.grid[1] ? this.originalPageY + Math.round((A - this.originalPageY) / k.grid[1]) * k.grid[1] : this.originalPageY, A = d ? f - this.offset.click.top >=
                d[1] || f - this.offset.click.top > d[3] ? f : f - this.offset.click.top >= d[1] ? f - k.grid[1] : f + k.grid[1] : f, h = k.grid[0] ? this.originalPageX + Math.round((q - this.originalPageX) / k.grid[0]) * k.grid[0] : this.originalPageX, q = d ? h - this.offset.click.left >= d[0] || h - this.offset.click.left > d[2] ? h : h - this.offset.click.left >= d[0] ? h - k.grid[0] : h + k.grid[0] : h), "y" === k.axis && (q = this.originalPageX), "x" === k.axis && (A = this.originalPageY)), {
                top: A - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ?
                    -this.offset.scroll.top : m ? 0 : this.offset.scroll.top),
                left: q - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : m ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis &&
                "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(a, c, d) {
            return d = d || this._uiHash(), b.ui.plugin.call(this, a, [c, d, this], !0), /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), b.Widget.prototype._trigger.call(this, a, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function(a, c, d) {
            var e = b.extend({}, c, {
                item: d.element
            });
            d.sortables = [];
            b(d.options.connectToSortable).each(function() {
                var f = b(this).sortable("instance");
                f && !f.options.disabled && (d.sortables.push(f), f.refreshPositions(), f._trigger("activate", a, e))
            })
        },
        stop: function(a, c, d) {
            var e = b.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1;
            b.each(d.sortables, function() {
                this.isOver ? (this.isOver = 0, d.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                }, this._mouseStop(a), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", a, e))
            })
        },
        drag: function(a, c, d) {
            b.each(d.sortables, function() {
                var e = !1,
                    f = this;
                f.positionAbs = d.positionAbs;
                f.helperProportions = d.helperProportions;
                f.offset.click =
                    d.offset.click;
                f._intersectsWith(f.containerCache) && (e = !0, b.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && b.contains(f.element[0], this.element[0]) && (e = !1), e
                }));
                e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                        return c.helper[0]
                    }, a.target = f.currentItem[0],
                    f._mouseCapture(a, !0), f._mouseStart(a, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", a), d.dropped = f.element, b.each(d.sortables, function() {
                        this.refreshPositions()
                    }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(a), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert =
                    f.options.revert, f.options.revert = !1, f._trigger("out", a, f._uiHash(f)), f._mouseStop(a, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(a), c.position = d._generatePosition(a, !0), d._trigger("fromSortable", a), d.dropped = !1, b.each(d.sortables, function() {
                        this.refreshPositions()
                    }))
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function(a, c, d) {
            a = b("body");
            d = d.options;
            a.css("cursor") && (d._cursor = a.css("cursor"));
            a.css("cursor",
                d.cursor)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._cursor && b("body").css("cursor", a._cursor)
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("opacity") && (d._opacity = a.css("opacity"));
            a.css("opacity", d.opacity)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._opacity && b(c.helper).css("opacity", a._opacity)
        }
    });
    b.ui.plugin.add("draggable", "scroll", {
        start: function(a, c, d) {
            d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
            d.scrollParentNotHidden[0] !==
                d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
        },
        drag: function(a, c, d) {
            c = d.options;
            var e = !1,
                f = d.scrollParentNotHidden[0],
                h = d.document[0];
            f !== h && "HTML" !== f.tagName ? (c.axis && "x" === c.axis || (d.overflowOffset.top + f.offsetHeight - a.pageY < c.scrollSensitivity ? f.scrollTop = e = f.scrollTop + c.scrollSpeed : a.pageY - d.overflowOffset.top < c.scrollSensitivity && (f.scrollTop = e = f.scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (d.overflowOffset.left + f.offsetWidth -
                a.pageX < c.scrollSensitivity ? f.scrollLeft = e = f.scrollLeft + c.scrollSpeed : a.pageX - d.overflowOffset.left < c.scrollSensitivity && (f.scrollLeft = e = f.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (a.pageY - b(h).scrollTop() < c.scrollSensitivity ? e = b(h).scrollTop(b(h).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(h).scrollTop()) < c.scrollSensitivity && (e = b(h).scrollTop(b(h).scrollTop() + c.scrollSpeed))), c.axis && "y" === c.axis || (a.pageX - b(h).scrollLeft() < c.scrollSensitivity ? e = b(h).scrollLeft(b(h).scrollLeft() -
                c.scrollSpeed) : b(window).width() - (a.pageX - b(h).scrollLeft()) < c.scrollSensitivity && (e = b(h).scrollLeft(b(h).scrollLeft() + c.scrollSpeed))));
            !1 !== e && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(d, a)
        }
    });
    b.ui.plugin.add("draggable", "snap", {
        start: function(a, c, d) {
            a = d.options;
            d.snapElements = [];
            b(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)" : a.snap).each(function() {
                var e = b(this),
                    f = e.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: f.top,
                    left: f.left
                })
            })
        },
        drag: function(a, c, d) {
            var e, f, h, k, m, q, A = d.options,
                E = A.snapTolerance,
                G = c.offset.left,
                F = G + d.helperProportions.width,
                z = c.offset.top,
                t = z + d.helperProportions.height;
            for (m = d.snapElements.length - 1; 0 <= m; m--) {
                var v = d.snapElements[m].left - d.margins.left;
                var y = v + d.snapElements[m].width;
                var w = d.snapElements[m].top - d.margins.top;
                var H = w + d.snapElements[m].height;
                v - E > F || G > y + E || w - E > t || z > H + E || !b.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping &&
                    d.options.snap.release && d.options.snap.release.call(d.element, a, b.extend(d._uiHash(), {
                        snapItem: d.snapElements[m].item
                    })), d.snapElements[m].snapping = !1) : ("inner" !== A.snapMode && (e = E >= Math.abs(w - t), f = E >= Math.abs(H - z), h = E >= Math.abs(v - F), k = E >= Math.abs(y - G), e && (c.position.top = d._convertPositionTo("relative", {
                        top: w - d.helperProportions.height,
                        left: 0
                    }).top), f && (c.position.top = d._convertPositionTo("relative", {
                        top: H,
                        left: 0
                    }).top), h && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: v - d.helperProportions.width
                    }).left),
                    k && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: y
                    }).left)), q = e || f || h || k, "outer" !== A.snapMode && (e = E >= Math.abs(w - z), f = E >= Math.abs(H - t), h = E >= Math.abs(v - G), k = E >= Math.abs(y - F), e && (c.position.top = d._convertPositionTo("relative", {
                    top: w,
                    left: 0
                }).top), f && (c.position.top = d._convertPositionTo("relative", {
                    top: H - d.helperProportions.height,
                    left: 0
                }).top), h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: v
                }).left), k && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: y - d.helperProportions.width
                }).left)), !d.snapElements[m].snapping && (e || f || h || k || q) && d.options.snap.snap && d.options.snap.snap.call(d.element, a, b.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })), d.snapElements[m].snapping = e || f || h || k || q)
            }
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function(a, c, d) {
            var e;
            a = b.makeArray(b(d.options.stack)).sort(function(f, h) {
                return (parseInt(b(f).css("zIndex"), 10) || 0) - (parseInt(b(h).css("zIndex"), 10) || 0)
            });
            a.length && (e = parseInt(b(a[0]).css("zIndex"), 10) || 0, b(a).each(function(f) {
                b(this).css("zIndex",
                    e + f)
            }), this.css("zIndex", e + a.length))
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("zIndex") && (d._zIndex = a.css("zIndex"));
            a.css("zIndex", d.zIndex)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._zIndex && b(c.helper).css("zIndex", a._zIndex)
        }
    });
    b.ui.draggable;
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseInt(a, 10) || 0
        },
        _isNumber: function(a) {
            return !isNaN(parseInt(a, 10))
        },
        _hasScroll: function(a, c) {
            if ("hidden" === b(a).css("overflow")) return !1;
            c = c && "left" === c ? "scrollLeft" : "scrollTop";
            var d = !1;
            return 0 < a[c] ? !0 : (a[c] = 1, d = 0 < a[c], a[c] = 0, d)
        },
        _create: function() {
            var a, c = this,
                d = this.options;
            if (this.element.addClass("ui-resizable"), b.extend(this, {
                    _aspectRatio: !!d.aspectRatio,
                    aspectRatio: d.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: d.helper || d.ghost || d.animate ? d.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element =
                    this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize",
                        "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = d.handles || (b(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String) {
                "all" ===
                this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var e = this.handles.split(",");
                this.handles = {};
                for (a = 0; e.length > a; a++) {
                    var f = b.trim(e[a]);
                    var h = "ui-resizable-" + f;
                    var k = b("<div class='ui-resizable-handle " + h + "'></div>");
                    k.css({
                        zIndex: d.zIndex
                    });
                    "se" === f && k.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    this.handles[f] = ".ui-resizable-" + f;
                    this.element.append(k)
                }
            }
            this._renderAxis = function(m) {
                var q, A, E, G;
                m = m || this.element;
                for (q in this.handles) this.handles[q].constructor === String && (this.handles[q] =
                    this.element.children(this.handles[q]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (A = b(this.handles[q], this.element), G = /sw|ne|nw|se|n|s/.test(q) ? A.outerHeight() : A.outerWidth(), E = ["padding", /ne|nw|n/.test(q) ? "Top" : /se|sw|s/.test(q) ? "Bottom" : /^e$/.test(q) ? "Right" : "Left"].join(""), m.css(E, G), this._proportionallyResize()), b(this.handles[q]).length
            };
            this._renderAxis(this.element);
            this._handles = b(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                c.resizing || (this.className && (k = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), c.axis = k && k[1] ? k[1] : "se")
            });
            d.autoHide && (this._handles.hide(), b(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                d.disabled || (b(this).removeClass("ui-resizable-autohide"), c._handles.show())
            }).mouseleave(function() {
                d.disabled || c.resizing || (b(this).addClass("ui-resizable-autohide"), c._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var a, c = function(d) {
                b(d).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (c(this.element), a = this.element, this.originalElement.css({
                    position: a.css("position"),
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: a.css("top"),
                    left: a.css("left")
                }).insertAfter(a), a.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement),
                this
        },
        _mouseCapture: function(a) {
            var c, d = !1;
            for (c in this.handles) {
                var e = b(this.handles[c])[0];
                (e === a.target || b.contains(e, a.target)) && (d = !0)
            }
            return !this.options.disabled && d
        },
        _mouseStart: function(a) {
            var c, d, e, f = this.options,
                h = this.element;
            return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += b(f.containment).scrollLeft() || 0, d += b(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: c,
                    top: d
                },
                this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: h.width(),
                    height: h.height()
                }, this.originalSize = this._helper ? {
                    width: h.outerWidth(),
                    height: h.outerHeight()
                } : {
                    width: h.width(),
                    height: h.height()
                }, this.sizeDiff = {
                    width: h.outerWidth() - h.width(),
                    height: h.outerHeight() - h.height()
                }, this.originalPosition = {
                    left: c,
                    top: d
                }, this.originalMousePosition = {
                    left: a.pageX,
                    top: a.pageY
                }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height ||
                1, e = b(".ui-resizable-" + this.axis).css("cursor"), b("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), h.addClass("ui-resizable-resizing"), this._propagate("start", a), !0
        },
        _mouseDrag: function(a) {
            var c, d, e = this.originalMousePosition,
                f = a.pageX - e.left || 0;
            e = a.pageY - e.top || 0;
            var h = this._change[this.axis];
            return this._updatePrevProperties(), h ? (c = h.apply(this, [a, f, e]), this._updateVirtualBoundaries(a.shiftKey), (this._aspectRatio || a.shiftKey) && (c = this._updateRatio(c, a)), c = this._respectSize(c, a), this._updateCache(c),
                this._propagate("resize", a), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), b.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", a, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(a) {
            this.resizing = !1;
            var c, d, e, f, h, k, m, q = this.options;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, f = d ? 0 : this.sizeDiff.width,
                    h = {
                        width: this.helper.width() - f,
                        height: this.helper.height() - e
                    }, k = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, m = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, q.animate || this.element.css(b.extend(h, {
                        top: m,
                        left: k
                    })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !q.animate && this._proportionallyResize()), b("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"),
                this._propagate("stop", a), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var a = {};
            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !==
                this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
        },
        _updateVirtualBoundaries: function(a) {
            var c, d, e, f;
            var h = this.options;
            h = {
                minWidth: this._isNumber(h.minWidth) ? h.minWidth : 0,
                maxWidth: this._isNumber(h.maxWidth) ? h.maxWidth : 1 / 0,
                minHeight: this._isNumber(h.minHeight) ? h.minHeight : 0,
                maxHeight: this._isNumber(h.maxHeight) ? h.maxHeight : 1 / 0
            };
            (this._aspectRatio || a) && (c = h.minHeight * this.aspectRatio, e = h.minWidth / this.aspectRatio, d = h.maxHeight * this.aspectRatio, f = h.maxWidth / this.aspectRatio,
                c > h.minWidth && (h.minWidth = c), e > h.minHeight && (h.minHeight = e), h.maxWidth > d && (h.maxWidth = d), h.maxHeight > f && (h.maxHeight = f));
            this._vBoundaries = h
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var c = this.position,
                d = this.size,
                e = this.axis;
            return this._isNumber(a.height) ?
                a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = c.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = c.top + (d.height - a.height), a.left = c.left + (d.width - a.width)), a
        },
        _respectSize: function(a) {
            var c = this._vBoundaries,
                d = this.axis,
                e = this._isNumber(a.width) && c.maxWidth && c.maxWidth < a.width,
                f = this._isNumber(a.height) && c.maxHeight && c.maxHeight < a.height,
                h = this._isNumber(a.width) && c.minWidth && c.minWidth > a.width,
                k = this._isNumber(a.height) && c.minHeight &&
                c.minHeight > a.height,
                m = this.originalPosition.left + this.originalSize.width,
                q = this.position.top + this.size.height,
                A = /sw|nw|w/.test(d);
            d = /nw|ne|n/.test(d);
            return h && (a.width = c.minWidth), k && (a.height = c.minHeight), e && (a.width = c.maxWidth), f && (a.height = c.maxHeight), h && A && (a.left = m - c.minWidth), e && A && (a.left = m - c.maxWidth), k && d && (a.top = q - c.minHeight), f && d && (a.top = q - c.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
        },
        _getPaddingPlusBorderDimensions: function(a) {
            var c =
                0,
                d = [],
                e = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > c; c++) d[c] = parseInt(e[c], 10) || 0, d[c] += parseInt(a[c], 10) || 0;
            return {
                height: d[0] + d[2],
                width: d[1] + d[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var a, c = 0, d = this.helper || this.element; this._proportionallyResizeElements.length > c; c++) a = this._proportionallyResizeElements[c],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                        height: d.height() - this.outerDimensions.height || 0,
                        width: d.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || b("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left +
                    "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, c) {
                return {
                    width: this.originalSize.width + c
                }
            },
            w: function(a, c) {
                return {
                    left: this.originalPosition.left + c,
                    width: this.originalSize.width - c
                }
            },
            n: function(a, c, d) {
                return {
                    top: this.originalPosition.top + d,
                    height: this.originalSize.height - d
                }
            },
            s: function(a, c, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(a, c, d) {
                return b.extend(this._change.s.apply(this,
                    arguments), this._change.e.apply(this, [a, c, d]))
            },
            sw: function(a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            },
            ne: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            },
            nw: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            }
        },
        _propagate: function(a, c) {
            b.ui.plugin.call(this, a, [c, this.ui()]);
            "resize" !== a && this._trigger(a, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    b.ui.plugin.add("resizable", "animate", {
        stop: function(a) {
            var c = b(this).resizable("instance"),
                d = c.options,
                e = c._proportionallyResizeElements,
                f = e.length && /textarea/i.test(e[0].nodeName),
                h = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height;
            f = {
                width: c.size.width - (f ? 0 : c.sizeDiff.width),
                height: c.size.height - h
            };
            h = parseInt(c.element.css("left"), 10) + (c.position.left -
                c.originalPosition.left) || null;
            var k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(b.extend(f, k && h ? {
                top: k,
                left: h
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var m = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && b(e[0]).css({
                        width: m.width,
                        height: m.height
                    });
                    c._updateCache(m);
                    c._propagate("resize",
                        a)
                }
            })
        }
    });
    b.ui.plugin.add("resizable", "containment", {
        start: function() {
            var a, c, d, e, f, h, k, m = b(this).resizable("instance"),
                q = m.element,
                A = m.options.containment;
            (q = A instanceof b ? A.get(0) : /parent/.test(A) ? q.parent().get(0) : A) && (m.containerElement = b(q), /document/.test(A) || A === document ? (m.containerOffset = {
                left: 0,
                top: 0
            }, m.containerPosition = {
                left: 0,
                top: 0
            }, m.parentData = {
                element: b(document),
                left: 0,
                top: 0,
                width: b(document).width(),
                height: b(document).height() || document.body.parentNode.scrollHeight
            }) : (a = b(q), c = [],
                b(["Top", "Right", "Left", "Bottom"]).each(function(E, G) {
                    c[E] = m._num(a.css("padding" + G))
                }), m.containerOffset = a.offset(), m.containerPosition = a.position(), m.containerSize = {
                    height: a.innerHeight() - c[3],
                    width: a.innerWidth() - c[1]
                }, d = m.containerOffset, e = m.containerSize.height, f = m.containerSize.width, h = m._hasScroll(q, "left") ? q.scrollWidth : f, k = m._hasScroll(q) ? q.scrollHeight : e, m.parentData = {
                    element: q,
                    left: d.left,
                    top: d.top,
                    width: h,
                    height: k
                }))
        },
        resize: function(a) {
            var c = b(this).resizable("instance");
            var d = c.options;
            var e = c.containerOffset;
            var f = c.position;
            a = c._aspectRatio || a.shiftKey;
            var h = {
                    top: 0,
                    left: 0
                },
                k = c.containerElement,
                m = !0;
            k[0] !== document && /static/.test(k.css("position")) && (h = e);
            f.left < (c._helper ? e.left : 0) && (c.size.width += c._helper ? c.position.left - e.left : c.position.left - h.left, a && (c.size.height = c.size.width / c.aspectRatio, m = !1), c.position.left = d.helper ? e.left : 0);
            f.top < (c._helper ? e.top : 0) && (c.size.height += c._helper ? c.position.top - e.top : c.position.top, a && (c.size.width = c.size.height * c.aspectRatio, m = !1), c.position.top =
                c._helper ? e.top : 0);
            d = c.containerElement.get(0) === c.element.parent().get(0);
            f = /relative|absolute/.test(c.containerElement.css("position"));
            d && f ? (c.offset.left = c.parentData.left + c.position.left, c.offset.top = c.parentData.top + c.position.top) : (c.offset.left = c.element.offset().left, c.offset.top = c.element.offset().top);
            d = Math.abs(c.sizeDiff.width + (c._helper ? c.offset.left - h.left : c.offset.left - e.left));
            e = Math.abs(c.sizeDiff.height + (c._helper ? c.offset.top - h.top : c.offset.top - e.top));
            d + c.size.width >= c.parentData.width &&
                (c.size.width = c.parentData.width - d, a && (c.size.height = c.size.width / c.aspectRatio, m = !1));
            e + c.size.height >= c.parentData.height && (c.size.height = c.parentData.height - e, a && (c.size.width = c.size.height * c.aspectRatio, m = !1));
            m || (c.position.left = c.prevPosition.left, c.position.top = c.prevPosition.top, c.size.width = c.prevSize.width, c.size.height = c.prevSize.height)
        },
        stop: function() {
            var a = b(this).resizable("instance"),
                c = a.options,
                d = a.containerOffset,
                e = a.containerPosition,
                f = a.containerElement,
                h = b(a.helper),
                k = h.offset(),
                m = h.outerWidth() - a.sizeDiff.width;
            h = h.outerHeight() - a.sizeDiff.height;
            a._helper && !c.animate && /relative/.test(f.css("position")) && b(this).css({
                left: k.left - e.left - d.left,
                width: m,
                height: h
            });
            a._helper && !c.animate && /static/.test(f.css("position")) && b(this).css({
                left: k.left - e.left - d.left,
                width: m,
                height: h
            })
        }
    });
    b.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var a = b(this).resizable("instance").options,
                c = function(d) {
                    b(d).each(function() {
                        var e = b(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(),
                                10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof a.alsoResize || a.alsoResize.parentNode ? c(a.alsoResize) : a.alsoResize.length ? (a.alsoResize = a.alsoResize[0], c(a.alsoResize)) : b.each(a.alsoResize, function(d) {
                c(d)
            })
        },
        resize: function(a, c) {
            a = b(this).resizable("instance");
            var d = a.options,
                e = a.originalSize,
                f = a.originalPosition,
                h = {
                    height: a.size.height - e.height || 0,
                    width: a.size.width - e.width || 0,
                    top: a.position.top - f.top || 0,
                    left: a.position.left -
                        f.left || 0
                },
                k = function(m, q) {
                    b(m).each(function() {
                        var A = b(this),
                            E = b(this).data("ui-resizable-alsoresize"),
                            G = {},
                            F = q && q.length ? q : A.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        b.each(F, function(z, t) {
                            (z = (E[t] || 0) + (h[t] || 0)) && 0 <= z && (G[t] = z || null)
                        });
                        A.css(G)
                    })
                };
            "object" != typeof d.alsoResize || d.alsoResize.nodeType ? k(d.alsoResize) : b.each(d.alsoResize, function(m, q) {
                k(m, q)
            })
        },
        stop: function() {
            b(this).removeData("resizable-alsoresize")
        }
    });
    b.ui.plugin.add("resizable",
        "ghost", {
            start: function() {
                var a = b(this).resizable("instance"),
                    c = a.options,
                    d = a.size;
                a.ghost = a.originalElement.clone();
                a.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : "");
                a.ghost.appendTo(a.helper)
            },
            resize: function() {
                var a = b(this).resizable("instance");
                a.ghost && a.ghost.css({
                    position: "relative",
                    height: a.size.height,
                    width: a.size.width
                })
            },
            stop: function() {
                var a = b(this).resizable("instance");
                a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
            }
        });
    b.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var a, c = b(this).resizable("instance"),
                d = c.options,
                e = c.size,
                f = c.originalSize,
                h = c.originalPosition,
                k = c.axis,
                m = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                q = m[0] || 1,
                A = m[1] || 1,
                E = Math.round((e.width - f.width) / q) * q;
            e = Math.round((e.height - f.height) / A) * A;
            var G = f.width + E,
                F = f.height + e,
                z = d.maxWidth && G > d.maxWidth,
                t = d.maxHeight && F > d.maxHeight,
                v = d.minWidth && d.minWidth > G,
                y = d.minHeight && d.minHeight >
                F;
            d.grid = m;
            v && (G += q);
            y && (F += A);
            z && (G -= q);
            t && (F -= A);
            /^(se|s|e)$/.test(k) ? (c.size.width = G, c.size.height = F) : /^(ne)$/.test(k) ? (c.size.width = G, c.size.height = F, c.position.top = h.top - e) : /^(sw)$/.test(k) ? (c.size.width = G, c.size.height = F, c.position.left = h.left - E) : ((0 >= F - A || 0 >= G - q) && (a = c._getPaddingPlusBorderDimensions(this)), 0 < F - A ? (c.size.height = F, c.position.top = h.top - e) : (F = A - a.height, c.size.height = F, c.position.top = h.top + f.height - F), 0 < G - q ? (c.size.width = G, c.position.left = h.left - E) : (G = A - a.height, c.size.width =
                G, c.position.left = h.left + f.width - G))
        }
    });
    b.ui.resizable;
    b.widget("ui.dialog", {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(a) {
                    var c = b(this).css(a).offset().top;
                    0 > c && b(this).css("top", a.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && b.fn.draggable && this._makeDraggable();
            this.options.resizable && b.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? b(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function() {
            var a = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            var c =
                a.parent.children().eq(a.index);
            c.length && c[0] !== this.element[0] ? c.before(this.element) : a.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: b.noop,
        enable: b.noop,
        close: function(a) {
            var c, d = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", a)) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    (c = this.document[0].activeElement) && "body" !== c.nodeName.toLowerCase() && b(c).blur()
                } catch (e) {}
                this._hide(this.uiDialog,
                    this.options.hide,
                    function() {
                        d._trigger("close", a)
                    })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(a, c) {
            var d = !1,
                e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +b(this).css("z-index")
                }).get();
            e = Math.max.apply(null, e);
            return e >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", e + 1), d = !0), d && !c && this._trigger("focus", a), d
        },
        open: function() {
            var a = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) :
                (this._isOpen = !0, this.opener = b(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    a._focusTabbable();
                    a._trigger("focus")
                }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length || (a = this.uiDialog);
            a.eq(0).focus()
        },
        _keepFocus: function(a) {
            function c() {
                var d = this.document[0].activeElement;
                this.uiDialog[0] === d || b.contains(this.uiDialog[0], d) || this._focusTabbable()
            }
            a.preventDefault();
            c.call(this);
            this._delay(c)
        },
        _createWrapper: function() {
            this.uiDialog = b("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(a) {
                    if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === b.ui.keyCode.ESCAPE) return a.preventDefault(), this.close(a), void 0;
                    if (a.keyCode === b.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"),
                            d = c.filter(":first"),
                            e = c.filter(":last");
                        a.target !== e[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== d[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function() {
                                e.focus()
                            }),
                            a.preventDefault()) : (this._delay(function() {
                            d.focus()
                        }), a.preventDefault())
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            this.uiDialogTitlebar = b("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(c) {
                    b(c.target).closest(".ui-dialog-titlebar-close") ||
                        this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = b("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(c) {
                    c.preventDefault();
                    this.close(c)
                }
            });
            var a = b("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(a);
            this.uiDialog.attr({
                "aria-labelledby": a.attr("id")
            })
        },
        _title: function(a) {
            this.options.title ||
                a.html("&#160;");
            a.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = b("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = b("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var a = this,
                c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), b.isEmptyObject(c) || b.isArray(c) && !c.length ? (this.uiDialog.removeClass("ui-dialog-buttons"),
                void 0) : (b.each(c, function(d, e) {
                e = b.isFunction(e) ? {
                    click: e,
                    text: d
                } : e;
                e = b.extend({
                    type: "button"
                }, e);
                var f = e.click;
                e.click = function() {
                    f.apply(a.element[0], arguments)
                };
                d = {
                    icons: e.icons,
                    text: e.showText
                };
                delete e.icons;
                delete e.showText;
                b("<button></button>", e).button(d).appendTo(a.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function a(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var c = this,
                d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(e, f) {
                    b(this).addClass("ui-dialog-dragging");
                    c._blockFrames();
                    c._trigger("dragStart", e, a(f))
                },
                drag: function(e, f) {
                    c._trigger("drag", e, a(f))
                },
                stop: function(e, f) {
                    var h = f.offset.left - c.document.scrollLeft(),
                        k = f.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= h ? "+" : "") + h + " top" + (0 <= k ? "+" : "") + k,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-dragging");
                    c._unblockFrames();
                    c._trigger("dragStop", e, a(f))
                }
            })
        },
        _makeResizable: function() {
            function a(h) {
                return {
                    originalPosition: h.originalPosition,
                    originalSize: h.originalSize,
                    position: h.position,
                    size: h.size
                }
            }
            var c = this,
                d = this.options,
                e = d.resizable,
                f = this.uiDialog.css("position");
            e = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(h, k) {
                    b(this).addClass("ui-dialog-resizing");
                    c._blockFrames();
                    c._trigger("resizeStart", h, a(k))
                },
                resize: function(h, k) {
                    c._trigger("resize", h, a(k))
                },
                stop: function(h, k) {
                    var m = c.uiDialog.offset(),
                        q = m.left - c.document.scrollLeft();
                    m = m.top - c.document.scrollTop();
                    d.height = c.uiDialog.height();
                    d.width = c.uiDialog.width();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= q ? "+" : "") + q + " top" + (0 <= m ? "+" : "") + m,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-resizing");
                    c._unblockFrames();
                    c._trigger("resizeStop",
                        h, a(k))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(a) {
                    this._makeFocusTarget();
                    this._focusedElement = b(a.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var a = this._trackingInstances(),
                c = b.inArray(this, a); - 1 !== c && a.splice(c, 1)
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            return a || (a = [], this.document.data("ui-dialog-instances", a)), a
        },
        _minHeight: function() {
            var a =
                this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var c = this,
                d = !1,
                e = {};
            b.each(a, function(f, h) {
                c._setOption(f, h);
                f in c.sizeRelatedOptions && (d = !0);
                f in c.resizableRelatedOptions && (e[f] = h)
            });
            d && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option",
                e)
        },
        _setOption: function(a, c) {
            var d, e, f = this.uiDialog;
            "dialogClass" === a && f.removeClass(this.options.dialogClass).addClass(c);
            "disabled" !== a && (this._super(a, c), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + c
            }), "draggable" === a && (d = f.is(":data(ui-draggable)"), d && !c && f.draggable("destroy"), !d && c && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (e = f.is(":data(ui-resizable)"),
                e && !c && f.resizable("destroy"), e && "string" == typeof c && f.resizable("option", "handles", c), e || !1 === c || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var a = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            a.minWidth > a.width && (a.width = a.minWidth);
            var c = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).outerHeight();
            var d = Math.max(0, a.minHeight - c);
            var e = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight -
                c) : "none";
            "auto" === a.height ? this.element.css({
                minHeight: d,
                maxHeight: e,
                height: "auto"
            }) : this.element.height(Math.max(0, a.height - c));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var a = b(this);
                return b("<div>").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks &&
                (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(a) {
            return b(a.target).closest(".ui-dialog").length ? !0 : !!b(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var a = !0;
                this._delay(function() {
                    a = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(c) {
                        a || this._allowInteraction(c) || (c.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = b("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    b.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var a, c = this.options,
                d = c.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = b.isFunction(d) ? d : function(e) {
                return e.is(d)
            };
            this.proportions = function() {
                return arguments.length ? (a = arguments[0], void 0) : a ? a : a = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(c.scope);
            c.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(a) {
            b.ui.ddmanager.droppables[a] = b.ui.ddmanager.droppables[a] || [];
            b.ui.ddmanager.droppables[a].push(this)
        },
        _splice: function(a) {
            for (var c = 0; a.length > c; c++) a[c] === this && a.splice(c, 1)
        },
        _destroy: function() {
            this._splice(b.ui.ddmanager.droppables[this.options.scope]);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(a, c) {
            "accept" === a ? this.accept = b.isFunction(c) ? c : function(d) {
                return d.is(c)
            } : "scope" === a && (this._splice(b.ui.ddmanager.droppables[this.options.scope]),
                this._addToManager(c));
            this._super(a, c)
        },
        _activate: function(a) {
            var c = b.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            c && this._trigger("activate", a, this.ui(c))
        },
        _deactivate: function(a) {
            var c = b.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            c && this._trigger("deactivate", a, this.ui(c))
        },
        _over: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0],
                c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", a, this.ui(c)))
        },
        _out: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(c)))
        },
        _drop: function(a, c) {
            var d = c || b.ui.ddmanager.current,
                e = !1;
            return d && (d.currentItem || d.element)[0] !==
                this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var f = b(this).droppable("instance");
                    return f.options.greedy && !f.options.disabled && f.options.scope === d.options.scope && f.accept.call(f.element[0], d.currentItem || d.element) && b.ui.intersect(d, b.extend(f, {
                        offset: f.element.offset()
                    }), f.options.tolerance, a) ? (e = !0, !1) : void 0
                }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", a, this.ui(d)), this.element) : !1) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    b.ui.intersect = function() {
        return function(a, c, d, e) {
            if (!c.offset) return !1;
            var f = (a.positionAbs || a.position.absolute).left + a.margins.left,
                h = (a.positionAbs || a.position.absolute).top + a.margins.top,
                k = f + a.helperProportions.width,
                m = h + a.helperProportions.height,
                q = c.offset.left,
                A = c.offset.top,
                E = q + c.proportions().width,
                G = A + c.proportions().height;
            switch (d) {
                case "fit":
                    return f >= q && E >= k && h >= A && G >= m;
                case "intersect":
                    return f + a.helperProportions.width / 2 > q && E > k - a.helperProportions.width / 2 && h + a.helperProportions.height / 2 > A && G > m - a.helperProportions.height / 2;
                case "pointer":
                    a = e.pageY;
                    d = c.proportions().height;
                    if (A = a >= A && A + d > a) e = e.pageX, c = c.proportions().width, A = e >= q && q + c > e;
                    return A;
                case "touch":
                    return (h >= A && G >= h || m >= A && G >= m || A > h && m > G) && (f >= q && E >= f || k >= q && E >= k || q > f &&
                        k > E);
                default:
                    return !1
            }
        }
    }();
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(a, c) {
            var d, e = b.ui.ddmanager.droppables[a.options.scope] || [],
                f = c ? c.type : null,
                h = (a.currentItem || a.element).find(":data(ui-droppable)").addBack();
            var k = 0;
            a: for (; e.length > k; k++)
                if (!(e[k].options.disabled || a && !e[k].accept.call(e[k].element[0], a.currentItem || a.element))) {
                    for (d = 0; h.length > d; d++)
                        if (h[d] === e[k].element[0]) {
                            e[k].proportions().height = 0;
                            continue a
                        }
                    e[k].visible = "none" !== e[k].element.css("display");
                    e[k].visible && ("mousedown" === f && e[k]._activate.call(e[k], c), e[k].offset = e[k].element.offset(), e[k].proportions({
                        width: e[k].element[0].offsetWidth,
                        height: e[k].element[0].offsetHeight
                    }))
                }
        },
        drop: function(a, c) {
            var d = !1;
            return b.each((b.ui.ddmanager.droppables[a.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && b.ui.intersect(a, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0],
                    a.currentItem || a.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }), d
        },
        dragStart: function(a, c) {
            a.element.parentsUntil("body").bind("scroll.droppable", function() {
                a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
            })
        },
        drag: function(a, c) {
            a.options.refreshPositions && b.ui.ddmanager.prepareOffsets(a, c);
            b.each(b.ui.ddmanager.droppables[a.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, h = b.ui.intersect(a, this, this.options.tolerance,
                        c);
                    (h = !h && this.isover ? "isout" : h && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return b(this).droppable("instance").options.scope === e
                    }), f.length && (d = b(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d,
                        c)))
                }
            })
        },
        dragStop: function(a, c) {
            a.element.parentsUntil("body").unbind("scroll.droppable");
            a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
        }
    };
    b.ui.droppable;
    b.effects = {
        effect: {}
    };
    (function(a, c) {
        function d(t, v, y) {
            var w = A[v.type] || {};
            return null == t ? y || !v.def ? null : v.def : (t = w.floor ? ~~t : parseFloat(t), isNaN(t) ? v.def : w.mod ? (t + w.mod) % w.mod : 0 > t ? 0 : t > w.max ? w.max : t)
        }

        function e(t) {
            var v = m(),
                y = v._rgba = [];
            return t = t.toLowerCase(), F(k, function(w, H) {
                var L;
                w = (w = H.re.exec(t)) && H.parse(w);
                H = H.space || "rgba";
                return w ? (L = v[H](w), v[q[H].cache] = L[q[H].cache], y = v._rgba = L._rgba, !1) : c
            }), y.length ? ("0,0,0,0" === y.join() && a.extend(y, z.transparent), v) : z[t]
        }

        function f(t, v, y) {
            return y = (y + 1) % 1, 1 > 6 * y ? t + 6 * (v - t) * y : 1 > 2 * y ? v : 2 > 3 * y ? t + 6 * (v - t) * (2 / 3 - y) : t
        }
        var h = /^([\-+])=\s*(\d+\.?\d*)/,
            k = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }],
            m = a.Color = function(t, v, y, w) {
                return new a.Color.fn.parse(t, v, y, w)
            },
            q = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            A = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            E = m.support = {},
            G = a("<p>")[0],
            F = a.each;
        G.style.cssText = "background-color:rgba(1,1,1,.5)";
        E.rgba = -1 < G.style.backgroundColor.indexOf("rgba");
        F(q, function(t, v) {
            v.cache =
                "_" + t;
            v.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        m.fn = a.extend(m.prototype, {
            parse: function(t, v, y, w) {
                if (t === c) return this._rgba = [null, null, null, null], this;
                (t.jquery || t.nodeType) && (t = a(t).css(v), v = c);
                var H = this,
                    L = a.type(t),
                    K = this._rgba = [];
                return v !== c && (t = [t, v, y, w], L = "array"), "string" === L ? this.parse(e(t) || z._default) : "array" === L ? (F(q.rgba.props, function(C, N) {
                    K[N.idx] = d(t[N.idx], N)
                }), this) : "object" === L ? (t instanceof m ? F(q, function(C, N) {
                    t[N.cache] && (H[N.cache] = t[N.cache].slice())
                }) : F(q, function(C, N) {
                    var O =
                        N.cache;
                    F(N.props, function(R, S) {
                        if (!H[O] && N.to) {
                            if ("alpha" === R || null == t[R]) return;
                            H[O] = N.to(H._rgba)
                        }
                        H[O][S.idx] = d(t[R], S, !0)
                    });
                    H[O] && 0 > a.inArray(null, H[O].slice(0, 3)) && (H[O][3] = 1, N.from && (H._rgba = N.from(H[O])))
                }), this) : c
            },
            is: function(t) {
                var v = m(t),
                    y = !0,
                    w = this;
                return F(q, function(H, L) {
                    var K, C = v[L.cache];
                    return C && (K = w[L.cache] || L.to && L.to(w._rgba) || [], F(L.props, function(N, O) {
                        return null != C[O.idx] ? y = C[O.idx] === K[O.idx] : c
                    })), y
                }), y
            },
            _space: function() {
                var t = [],
                    v = this;
                return F(q, function(y, w) {
                    v[w.cache] &&
                        t.push(y)
                }), t.pop()
            },
            transition: function(t, v) {
                var y = m(t);
                t = y._space();
                var w = q[t],
                    H = 0 === this.alpha() ? m("transparent") : this,
                    L = H[w.cache] || w.to(H._rgba),
                    K = L.slice();
                return y = y[w.cache], F(w.props, function(C, N) {
                    C = N.idx;
                    var O = L[C],
                        R = y[C],
                        S = A[N.type] || {};
                    null !== R && (null === O ? K[C] = R : (S.mod && (R - O > S.mod / 2 ? O += S.mod : O - R > S.mod / 2 && (O -= S.mod)), K[C] = d((R - O) * v + O, N)))
                }), this[t](K)
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var v = this._rgba.slice(),
                    y = v.pop(),
                    w = m(t)._rgba;
                return m(a.map(v, function(H, L) {
                    return (1 -
                        y) * w[L] + y * H
                }))
            },
            toRgbaString: function() {
                var t = "rgba(",
                    v = a.map(this._rgba, function(y, w) {
                        return null == y ? 2 < w ? 1 : 0 : y
                    });
                return 1 === v[3] && (v.pop(), t = "rgb("), t + v.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(",
                    v = a.map(this.hsla(), function(y, w) {
                        return null == y && (y = 2 < w ? 1 : 0), w && 3 > w && (y = Math.round(100 * y) + "%"), y
                    });
                return 1 === v[3] && (v.pop(), t = "hsl("), t + v.join() + ")"
            },
            toHexString: function(t) {
                var v = this._rgba.slice(),
                    y = v.pop();
                return t && v.push(~~(255 * y)), "#" + a.map(v, function(w) {
                    return w = (w || 0).toString(16), 1 === w.length ?
                        "0" + w : w
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        m.fn.parse.prototype = m.fn;
        q.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var v, y, w = t[0] / 255,
                H = t[1] / 255,
                L = t[2] / 255;
            t = t[3];
            var K = Math.max(w, H, L),
                C = Math.min(w, H, L),
                N = K - C,
                O = K + C,
                R = .5 * O;
            return v = C === K ? 0 : w === K ? 60 * (H - L) / N + 360 : H === K ? 60 * (L - w) / N + 120 : 60 * (w - H) / N + 240, y = 0 === N ? 0 : .5 >= R ? N / O : N / (2 - O), [Math.round(v) % 360, y, R, null == t ? 1 : t]
        };
        q.hsla.from = function(t) {
            if (null == t[0] ||
                null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var v = t[0] / 360,
                y = t[1],
                w = t[2];
            t = t[3];
            y = .5 >= w ? w * (1 + y) : w + y - w * y;
            w = 2 * w - y;
            return [Math.round(255 * f(w, y, v + 1 / 3)), Math.round(255 * f(w, y, v)), Math.round(255 * f(w, y, v - 1 / 3)), t]
        };
        F(q, function(t, v) {
            var y = v.props,
                w = v.cache,
                H = v.to,
                L = v.from;
            m.fn[t] = function(K) {
                if (H && !this[w] && (this[w] = H(this._rgba)), K === c) return this[w].slice();
                var C, N = a.type(K),
                    O = "array" === N || "object" === N ? K : arguments,
                    R = this[w].slice();
                return F(y, function(S, X) {
                    S = O["object" === N ? S : X.idx];
                    null == S && (S = R[X.idx]);
                    R[X.idx] = d(S, X)
                }), L ? (C = m(L(R)), C[w] = R, C) : m(R)
            };
            F(y, function(K, C) {
                m.fn[K] || (m.fn[K] = function(N) {
                    var O, R = a.type(N),
                        S = "alpha" === K ? this._hsla ? "hsla" : "rgba" : t,
                        X = this[S](),
                        Z = X[C.idx];
                    return "undefined" === R ? Z : ("function" === R && (N = N.call(this, Z), R = a.type(N)), null == N && C.empty ? this : ("string" === R && (O = h.exec(N), O && (N = Z + parseFloat(O[2]) * ("+" === O[1] ? 1 : -1))), X[C.idx] = N, this[S](X)))
                })
            })
        });
        m.hook = function(t) {
            t = t.split(" ");
            F(t, function(v, y) {
                a.cssHooks[y] = {
                    set: function(w, H) {
                        var L, K = "";
                        if ("transparent" !== H && ("string" !==
                                a.type(H) || (L = e(H)))) {
                            if (H = m(L || H), !E.rgba && 1 !== H._rgba[3]) {
                                for (L = "backgroundColor" === y ? w.parentNode : w;
                                    ("" === K || "transparent" === K) && L && L.style;) try {
                                    K = a.css(L, "backgroundColor"), L = L.parentNode
                                } catch (C) {}
                                H = H.blend(K && "transparent" !== K ? K : "_default")
                            }
                            H = H.toRgbaString()
                        }
                        try {
                            w.style[y] = H
                        } catch (C) {}
                    }
                };
                a.fx.step[y] = function(w) {
                    w.colorInit || (w.start = m(w.elem, y), w.end = m(w.end), w.colorInit = !0);
                    a.cssHooks[y].set(w.elem, w.start.transition(w.end, w.pos))
                }
            })
        };
        m.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        a.cssHooks.borderColor = {
            expand: function(t) {
                var v = {};
                return F(["Top", "Right", "Bottom", "Left"], function(y, w) {
                    v["border" + w + "Color"] = t
                }), v
            }
        };
        var z = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(b);
    (function() {
        function a(e) {
            var f = e.ownerDocument.defaultView ?
                e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                h = {};
            if (f && f.length && f[0] && f[f[0]])
                for (e = f.length; e--;) {
                    var k = f[e];
                    "string" == typeof f[k] && (h[b.camelCase(k)] = f[k])
                } else
                    for (k in f) "string" == typeof f[k] && (h[k] = f[k]);
            return h
        }
        var c = ["add", "remove", "toggle"],
            d = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, f) {
            b.fx.step[f] = function(h) {
                ("none" !==
                    h.end && !h.setAttr || 1 === h.pos && !h.setAttr) && (b.style(h.elem, f, h.end), h.setAttr = !0)
            }
        });
        b.fn.addBack || (b.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        });
        b.effects.animateClass = function(e, f, h, k) {
            var m = b.speed(f, h, k);
            return this.queue(function() {
                var q = b(this),
                    A = q.attr("class") || "",
                    E = m.children ? q.find("*").addBack() : q;
                E = E.map(function() {
                    return {
                        el: b(this),
                        start: a(this)
                    }
                });
                var G = function() {
                    b.each(c, function(F, z) {
                        e[z] && q[z + "Class"](e[z])
                    })
                };
                G();
                E = E.map(function() {
                    this.end =
                        a(this.el[0]);
                    var F = this.start,
                        z = this.end,
                        t, v = {};
                    for (t in z) {
                        var y = z[t];
                        F[t] !== y && (d[t] || (b.fx.step[t] || !isNaN(parseFloat(y))) && (v[t] = y))
                    }
                    return this.diff = v, this
                });
                q.attr("class", A);
                E = E.map(function() {
                    var F = this,
                        z = b.Deferred(),
                        t = b.extend({}, m, {
                            queue: !1,
                            complete: function() {
                                z.resolve(F)
                            }
                        });
                    return this.el.animate(this.diff, t), z.promise()
                });
                b.when.apply(b, E.get()).done(function() {
                    G();
                    b.each(arguments, function() {
                        var F = this.el;
                        b.each(this.diff, function(z) {
                            F.css(z, "")
                        })
                    });
                    m.complete.call(q[0])
                })
            })
        };
        b.fn.extend({
            addClass: function(e) {
                return function(f,
                    h, k, m) {
                    return h ? b.effects.animateClass.call(this, {
                        add: f
                    }, h, k, m) : e.apply(this, arguments)
                }
            }(b.fn.addClass),
            removeClass: function(e) {
                return function(f, h, k, m) {
                    return 1 < arguments.length ? b.effects.animateClass.call(this, {
                        remove: f
                    }, h, k, m) : e.apply(this, arguments)
                }
            }(b.fn.removeClass),
            toggleClass: function(e) {
                return function(f, h, k, m, q) {
                    return "boolean" == typeof h || void 0 === h ? k ? b.effects.animateClass.call(this, h ? {
                        add: f
                    } : {
                        remove: f
                    }, k, m, q) : e.apply(this, arguments) : b.effects.animateClass.call(this, {
                        toggle: f
                    }, h, k, m)
                }
            }(b.fn.toggleClass),
            switchClass: function(e, f, h, k, m) {
                return b.effects.animateClass.call(this, {
                    add: f,
                    remove: e
                }, h, k, m)
            }
        })
    })();
    (function() {
        function a(d, e, f, h) {
            return b.isPlainObject(d) && (e = d, d = d.effect), d = {
                effect: d
            }, null == e && (e = {}), b.isFunction(e) && (h = e, f = null, e = {}), ("number" == typeof e || b.fx.speeds[e]) && (h = f, f = e, e = {}), b.isFunction(f) && (h = f, f = null), e && b.extend(d, e), f = f || e.duration, d.duration = b.fx.off ? 0 : "number" == typeof f ? f : f in b.fx.speeds ? b.fx.speeds[f] : b.fx.speeds._default, d.complete = h || e.complete, d
        }

        function c(d) {
            return !d ||
                "number" == typeof d || b.fx.speeds[d] ? !0 : "string" != typeof d || b.effects.effect[d] ? b.isFunction(d) ? !0 : "object" != typeof d || d.effect ? !1 : !0 : !0
        }
        b.extend(b.effects, {
            version: "1.11.2",
            save: function(d, e) {
                for (var f = 0; e.length > f; f++) null !== e[f] && d.data("ui-effects-" + e[f], d[0].style[e[f]])
            },
            restore: function(d, e) {
                var f, h;
                for (h = 0; e.length > h; h++) null !== e[h] && (f = d.data("ui-effects-" + e[h]), void 0 === f && (f = ""), d.css(e[h], f))
            },
            setMode: function(d, e) {
                return "toggle" === e && (e = d.is(":hidden") ? "show" : "hide"), e
            },
            getBaseline: function(d,
                e) {
                switch (d[0]) {
                    case "top":
                        var f = 0;
                        break;
                    case "middle":
                        f = .5;
                        break;
                    case "bottom":
                        f = 1;
                        break;
                    default:
                        f = d[0] / e.height
                }
                switch (d[1]) {
                    case "left":
                        d = 0;
                        break;
                    case "center":
                        d = .5;
                        break;
                    case "right":
                        d = 1;
                        break;
                    default:
                        d = d[1] / e.width
                }
                return {
                    x: d,
                    y: f
                }
            },
            createWrapper: function(d) {
                if (d.parent().is(".ui-effects-wrapper")) return d.parent();
                var e = {
                        width: d.outerWidth(!0),
                        height: d.outerHeight(!0),
                        "float": d.css("float")
                    },
                    f = b("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    h = {
                        width: d.width(),
                        height: d.height()
                    },
                    k = document.activeElement;
                try {
                    k.id
                } catch (m) {
                    k = document.body
                }
                return d.wrap(f), (d[0] === k || b.contains(d[0], k)) && b(k).focus(), f = d.parent(), "static" === d.css("position") ? (f.css({
                    position: "relative"
                }), d.css({
                    position: "relative"
                })) : (b.extend(e, {
                    position: d.css("position"),
                    zIndex: d.css("z-index")
                }), b.each(["top", "left", "bottom", "right"], function(m, q) {
                    e[q] = d.css(q);
                    isNaN(parseInt(e[q], 10)) && (e[q] = "auto")
                }), d.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), d.css(h), f.css(e).show()
            },
            removeWrapper: function(d) {
                var e = document.activeElement;
                return d.parent().is(".ui-effects-wrapper") && (d.parent().replaceWith(d), (d[0] === e || b.contains(d[0], e)) && b(e).focus()), d
            },
            setTransition: function(d, e, f, h) {
                return h = h || {}, b.each(e, function(k, m) {
                    k = d.cssUnit(m);
                    0 < k[0] && (h[m] = k[0] * f + k[1])
                }), h
            }
        });
        b.fn.extend({
            effect: function() {
                function d(m) {
                    function q() {
                        b.isFunction(E) && E.call(A[0]);
                        b.isFunction(m) && m()
                    }
                    var A = b(this),
                        E = e.complete,
                        G = e.mode;
                    (A.is(":hidden") ? "hide" ===
                        G : "show" === G) ? (A[G](), q()) : k.call(A[0], e, q)
                }
                var e = a.apply(this, arguments),
                    f = e.mode,
                    h = e.queue,
                    k = b.effects.effect[e.effect];
                return b.fx.off || !k ? f ? this[f](e.duration, e.complete) : this.each(function() {
                    e.complete && e.complete.call(this)
                }) : !1 === h ? this.each(d) : this.queue(h || "fx", d)
            },
            show: function(d) {
                return function(e) {
                    if (c(e)) return d.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "show", this.effect.call(this, f)
                }
            }(b.fn.show),
            hide: function(d) {
                return function(e) {
                    if (c(e)) return d.apply(this,
                        arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "hide", this.effect.call(this, f)
                }
            }(b.fn.hide),
            toggle: function(d) {
                return function(e) {
                    if (c(e) || "boolean" == typeof e) return d.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "toggle", this.effect.call(this, f)
                }
            }(b.fn.toggle),
            cssUnit: function(d) {
                var e = this.css(d),
                    f = [];
                return b.each(["em", "px", "%", "pt"], function(h, k) {
                    0 < e.indexOf(k) && (f = [parseFloat(e), k])
                }), f
            }
        })
    })();
    (function() {
        var a = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(c,
            d) {
            a[d] = function(e) {
                return Math.pow(e, c + 2)
            }
        });
        b.extend(a, {
            Sine: function(c) {
                return 1 - Math.cos(c * Math.PI / 2)
            },
            Circ: function(c) {
                return 1 - Math.sqrt(1 - c * c)
            },
            Elastic: function(c) {
                return 0 === c || 1 === c ? c : -Math.pow(2, 8 * (c - 1)) * Math.sin((80 * (c - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(c) {
                return c * c * (3 * c - 2)
            },
            Bounce: function(c) {
                for (var d, e = 4;
                    ((d = Math.pow(2, --e)) - 1) / 11 > c;);
                return 1 / Math.pow(4, 3 - e) - 7.5625 * Math.pow((3 * d - 2) / 22 - c, 2)
            }
        });
        b.each(a, function(c, d) {
            b.easing["easeIn" + c] = d;
            b.easing["easeOut" + c] = function(e) {
                return 1 -
                    d(1 - e)
            };
            b.easing["easeInOut" + c] = function(e) {
                return .5 > e ? d(2 * e) / 2 : 1 - d(-2 * e + 2) / 2
            }
        })
    })();
    b.effects;
    b.effects.effect.blind = function(a, c) {
        var d = b(this),
            e = "position top bottom left right height width".split(" "),
            f = b.effects.setMode(d, a.mode || "hide");
        var h = a.direction || "up";
        var k = /up|down|vertical/.test(h),
            m = k ? "height" : "width",
            q = k ? "top" : "left",
            A = /up|left|vertical|horizontal/.test(h),
            E = {},
            G = "show" === f;
        d.parent().is(".ui-effects-wrapper") ? b.effects.save(d.parent(), e) : b.effects.save(d, e);
        d.show();
        h = b.effects.createWrapper(d).css({
            overflow: "hidden"
        });
        var F = h[m]();
        var z = parseFloat(h.css(q)) || 0;
        E[m] = G ? F : 0;
        A || (d.css(k ? "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({
            position: "absolute"
        }), E[q] = G ? z : F + z);
        G && (h.css(m, 0), A || h.css(q, z + F));
        h.animate(E, {
            duration: a.duration,
            easing: a.easing,
            queue: !1,
            complete: function() {
                "hide" === f && d.hide();
                b.effects.restore(d, e);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.bounce = function(a, c) {
        var d, e = b(this),
            f = "position top bottom left right height width".split(" "),
            h = b.effects.setMode(e, a.mode || "effect"),
            k = "hide" ===
            h;
        var m = "show" === h;
        var q = a.direction || "up";
        h = a.distance;
        var A = a.times || 5,
            E = 2 * A + (m || k ? 1 : 0),
            G = a.duration / E;
        a = a.easing;
        var F = "up" === q || "down" === q ? "top" : "left";
        q = "up" === q || "left" === q;
        var z = e.queue(),
            t = z.length;
        (m || k) && f.push("opacity");
        b.effects.save(e, f);
        e.show();
        b.effects.createWrapper(e);
        h || (h = e["top" === F ? "outerHeight" : "outerWidth"]() / 3);
        m && (d = {
            opacity: 1
        }, d[F] = 0, e.css("opacity", 0).css(F, q ? 2 * -h : 2 * h).animate(d, G, a));
        k && (h /= Math.pow(2, A - 1));
        d = {};
        for (m = d[F] = 0; A > m; m++) {
            var v = {};
            v[F] = (q ? "-=" : "+=") + h;
            e.animate(v,
                G, a).animate(d, G, a);
            h = k ? 2 * h : h / 2
        }
        k && (v = {
            opacity: 0
        }, v[F] = (q ? "-=" : "+=") + h, e.animate(v, G, a));
        e.queue(function() {
            k && e.hide();
            b.effects.restore(e, f);
            b.effects.removeWrapper(e);
            c()
        });
        1 < t && z.splice.apply(z, [1, 0].concat(z.splice(t, E + 1)));
        e.dequeue()
    };
    b.effects.effect.clip = function(a, c) {
        var d = b(this),
            e = "position top bottom left right height width".split(" "),
            f = "show" === b.effects.setMode(d, a.mode || "hide"),
            h = "vertical" === (a.direction || "vertical"),
            k = h ? "height" : "width";
        h = h ? "top" : "left";
        var m = {};
        b.effects.save(d,
            e);
        d.show();
        var q = b.effects.createWrapper(d).css({
            overflow: "hidden"
        });
        q = "IMG" === d[0].tagName ? q : d;
        var A = q[k]();
        f && (q.css(k, 0), q.css(h, A / 2));
        m[k] = f ? A : 0;
        m[h] = f ? 0 : A / 2;
        q.animate(m, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                f || d.hide();
                b.effects.restore(d, e);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.drop = function(a, c) {
        var d = b(this),
            e = "position top bottom left right opacity height width".split(" "),
            f = b.effects.setMode(d, a.mode || "hide"),
            h = "show" === f;
        var k = a.direction || "left";
        var m = "up" === k || "down" === k ? "top" : "left",
            q = "up" === k || "left" === k ? "pos" : "neg",
            A = {
                opacity: h ? 1 : 0
            };
        b.effects.save(d, e);
        d.show();
        b.effects.createWrapper(d);
        k = a.distance || d["top" === m ? "outerHeight" : "outerWidth"](!0) / 2;
        h && d.css("opacity", 0).css(m, "pos" === q ? -k : k);
        A[m] = (h ? "pos" === q ? "+=" : "-=" : "pos" === q ? "-=" : "+=") + k;
        d.animate(A, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === f && d.hide();
                b.effects.restore(d, e);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.explode = function(a, c) {
        function d() {
            F.push(this);
            F.length === h * k && (m.css({
                visibility: "visible"
            }), b(F).remove(), q || m.hide(), c())
        }
        var e, f, h = a.pieces ? Math.round(Math.sqrt(a.pieces)) : 3,
            k = h,
            m = b(this),
            q = "show" === b.effects.setMode(m, a.mode || "hide"),
            A = m.show().css("visibility", "hidden").offset(),
            E = Math.ceil(m.outerWidth() / k),
            G = Math.ceil(m.outerHeight() / h),
            F = [];
        for (e = 0; h > e; e++) {
            var z = A.top + e * G;
            var t = e - (h - 1) / 2;
            for (f = 0; k > f; f++) {
                var v = A.left + f * E;
                var y = f - (k - 1) / 2;
                m.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -f *
                        E,
                    top: -e * G
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: E,
                    height: G,
                    left: v + (q ? y * E : 0),
                    top: z + (q ? t * G : 0),
                    opacity: q ? 0 : 1
                }).animate({
                    left: v + (q ? 0 : y * E),
                    top: z + (q ? 0 : t * G),
                    opacity: q ? 1 : 0
                }, a.duration || 500, a.easing, d)
            }
        }
    };
    b.effects.effect.fade = function(a, c) {
        var d = b(this),
            e = b.effects.setMode(d, a.mode || "toggle");
        d.animate({
            opacity: e
        }, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    };
    b.effects.effect.fold = function(a, c) {
        var d, e = b(this),
            f = "position top bottom left right height width".split(" ");
        var h = b.effects.setMode(e, a.mode || "hide");
        var k = "show" === h,
            m = "hide" === h,
            q = a.size || 15,
            A = /([0-9]+)%/.exec(q),
            E = !!a.horizFirst,
            G = (d = k !== E) ? ["width", "height"] : ["height", "width"],
            F = a.duration / 2,
            z = {},
            t = {};
        b.effects.save(e, f);
        e.show();
        h = b.effects.createWrapper(e).css({
            overflow: "hidden"
        });
        d = d ? [h.width(), h.height()] : [h.height(), h.width()];
        A && (q = parseInt(A[1], 10) / 100 * d[m ? 0 : 1]);
        k && h.css(E ? {
            height: 0,
            width: q
        } : {
            height: q,
            width: 0
        });
        z[G[0]] = k ? d[0] : q;
        t[G[1]] = k ? d[1] : 0;
        h.animate(z, F, a.easing).animate(t, F, a.easing, function() {
            m &&
                e.hide();
            b.effects.restore(e, f);
            b.effects.removeWrapper(e);
            c()
        })
    };
    b.effects.effect.highlight = function(a, c) {
        var d = b(this),
            e = ["backgroundImage", "backgroundColor", "opacity"],
            f = b.effects.setMode(d, a.mode || "show"),
            h = {
                backgroundColor: d.css("backgroundColor")
            };
        "hide" === f && (h.opacity = 0);
        b.effects.save(d, e);
        d.show().css({
            backgroundImage: "none",
            backgroundColor: a.color || "#ffff99"
        }).animate(h, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === f && d.hide();
                b.effects.restore(d, e);
                c()
            }
        })
    };
    b.effects.effect.size = function(a, c) {
        var d, e = b(this),
            f = "position top bottom left right width height overflow opacity".split(" ");
        var h = "position top bottom left right overflow opacity".split(" ");
        var k = ["width", "height", "overflow"],
            m = ["fontSize"],
            q = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            A = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            E = b.effects.setMode(e, a.mode || "effect"),
            G = a.restore || "effect" !== E,
            F = a.scale || "both",
            z = a.origin || ["middle", "center"],
            t = e.css("position"),
            v = G ? f : h,
            y = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === E && e.show();
        h = {
            height: e.height(),
            width: e.width(),
            outerHeight: e.outerHeight(),
            outerWidth: e.outerWidth()
        };
        "toggle" === a.mode && "show" === E ? (e.from = a.to || y, e.to = a.from || h) : (e.from = a.from || ("show" === E ? y : h), e.to = a.to || ("hide" === E ? y : h));
        var w = e.from.height / h.height;
        var H = e.from.width / h.width;
        var L = e.to.height / h.height;
        var K = e.to.width / h.width;
        ("box" === F || "both" === F) && (w !== L && (v = v.concat(q), e.from = b.effects.setTransition(e,
            q, w, e.from), e.to = b.effects.setTransition(e, q, L, e.to)), H !== K && (v = v.concat(A), e.from = b.effects.setTransition(e, A, H, e.from), e.to = b.effects.setTransition(e, A, K, e.to)));
        ("content" === F || "both" === F) && w !== L && (v = v.concat(m).concat(k), e.from = b.effects.setTransition(e, m, w, e.from), e.to = b.effects.setTransition(e, m, L, e.to));
        b.effects.save(e, v);
        e.show();
        b.effects.createWrapper(e);
        e.css("overflow", "hidden").css(e.from);
        z && (d = b.effects.getBaseline(z, h), e.from.top = (h.outerHeight - e.outerHeight()) * d.y, e.from.left = (h.outerWidth -
            e.outerWidth()) * d.x, e.to.top = (h.outerHeight - e.to.outerHeight) * d.y, e.to.left = (h.outerWidth - e.to.outerWidth) * d.x);
        e.css(e.from);
        "content" !== F && "both" !== F || (q = q.concat(["marginTop", "marginBottom"]).concat(m), A = A.concat(["marginLeft", "marginRight"]), k = f.concat(q).concat(A), e.find("*[width]").each(function() {
            var C = b(this),
                N = C.height(),
                O = C.width(),
                R = C.outerHeight(),
                S = C.outerWidth();
            G && b.effects.save(C, k);
            C.from = {
                height: N * w,
                width: O * H,
                outerHeight: R * w,
                outerWidth: S * H
            };
            C.to = {
                height: N * L,
                width: O * K,
                outerHeight: N *
                    L,
                outerWidth: O * K
            };
            w !== L && (C.from = b.effects.setTransition(C, q, w, C.from), C.to = b.effects.setTransition(C, q, L, C.to));
            H !== K && (C.from = b.effects.setTransition(C, A, H, C.from), C.to = b.effects.setTransition(C, A, K, C.to));
            C.css(C.from);
            C.animate(C.to, a.duration, a.easing, function() {
                G && b.effects.restore(C, k)
            })
        }));
        e.animate(e.to, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                0 === e.to.opacity && e.css("opacity", e.from.opacity);
                "hide" === E && e.hide();
                b.effects.restore(e, v);
                G || ("static" === t ? e.css({
                    position: "relative",
                    top: e.to.top,
                    left: e.to.left
                }) : b.each(["top", "left"], function(C, N) {
                    e.css(N, function(O, R) {
                        O = parseInt(R, 10);
                        var S = C ? e.to.left : e.to.top;
                        return "auto" === R ? S + "px" : O + S + "px"
                    })
                }));
                b.effects.removeWrapper(e);
                c()
            }
        })
    };
    b.effects.effect.scale = function(a, c) {
        var d = b(this),
            e = b.extend(!0, {}, a),
            f = b.effects.setMode(d, a.mode || "effect"),
            h = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "hide" === f ? 0 : 100),
            k = a.direction || "both",
            m = a.origin,
            q = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            },
            A = "horizontal" !== k ? h / 100 : 1;
        h = "vertical" !== k ? h / 100 : 1;
        e.effect = "size";
        e.queue = !1;
        e.complete = c;
        "effect" !== f && (e.origin = m || ["middle", "center"], e.restore = !0);
        e.from = a.from || ("show" === f ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : q);
        e.to = {
            height: q.height * A,
            width: q.width * h,
            outerHeight: q.outerHeight * A,
            outerWidth: q.outerWidth * h
        };
        e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0));
        d.effect(e)
    };
    b.effects.effect.puff = function(a, c) {
        var d = b(this),
            e = b.effects.setMode(d,
                a.mode || "hide"),
            f = "hide" === e,
            h = parseInt(a.percent, 10) || 150,
            k = h / 100,
            m = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            };
        b.extend(a, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: f ? h : 100,
            from: f ? m : {
                height: m.height * k,
                width: m.width * k,
                outerHeight: m.outerHeight * k,
                outerWidth: m.outerWidth * k
            }
        });
        d.effect(a)
    };
    b.effects.effect.pulsate = function(a, c) {
        var d = b(this),
            e = b.effects.setMode(d, a.mode || "show");
        var f = "show" === e;
        var h = "hide" === e;
        e = 2 * (a.times || 5) + (f || "hide" ===
            e ? 1 : 0);
        var k = a.duration / e,
            m = 0,
            q = d.queue(),
            A = q.length;
        (f || !d.is(":visible")) && (d.css("opacity", 0).show(), m = 1);
        for (f = 1; e > f; f++) d.animate({
            opacity: m
        }, k, a.easing), m = 1 - m;
        d.animate({
            opacity: m
        }, k, a.easing);
        d.queue(function() {
            h && d.hide();
            c()
        });
        1 < A && q.splice.apply(q, [1, 0].concat(q.splice(A, e + 1)));
        d.dequeue()
    };
    b.effects.effect.shake = function(a, c) {
        var d = b(this),
            e = "position top bottom left right height width".split(" "),
            f = b.effects.setMode(d, a.mode || "effect"),
            h = a.direction || "left";
        var k = a.distance || 20;
        var m =
            a.times || 3,
            q = 2 * m + 1,
            A = Math.round(a.duration / q),
            E = "up" === h || "down" === h ? "top" : "left",
            G = "up" === h || "left" === h;
        h = {};
        var F = {},
            z = {},
            t = d.queue(),
            v = t.length;
        b.effects.save(d, e);
        d.show();
        b.effects.createWrapper(d);
        h[E] = (G ? "-=" : "+=") + k;
        F[E] = (G ? "+=" : "-=") + 2 * k;
        z[E] = (G ? "-=" : "+=") + 2 * k;
        d.animate(h, A, a.easing);
        for (k = 1; m > k; k++) d.animate(F, A, a.easing).animate(z, A, a.easing);
        d.animate(F, A, a.easing).animate(h, A / 2, a.easing).queue(function() {
            "hide" === f && d.hide();
            b.effects.restore(d, e);
            b.effects.removeWrapper(d);
            c()
        });
        1 < v &&
            t.splice.apply(t, [1, 0].concat(t.splice(v, q + 1)));
        d.dequeue()
    };
    b.effects.effect.slide = function(a, c) {
        var d = b(this),
            e = "position top bottom left right width height".split(" "),
            f = b.effects.setMode(d, a.mode || "show"),
            h = "show" === f;
        var k = a.direction || "left";
        var m = "up" === k || "down" === k ? "top" : "left",
            q = "up" === k || "left" === k,
            A = {};
        b.effects.save(d, e);
        d.show();
        k = a.distance || d["top" === m ? "outerHeight" : "outerWidth"](!0);
        b.effects.createWrapper(d).css({
            overflow: "hidden"
        });
        h && d.css(m, q ? isNaN(k) ? "-" + k : -k : k);
        A[m] = (h ? q ? "+=" :
            "-=" : q ? "-=" : "+=") + k;
        d.animate(A, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === f && d.hide();
                b.effects.restore(d, e);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.transfer = function(a, c) {
        var d = b(this),
            e = b(a.to),
            f = "fixed" === e.css("position"),
            h = b("body"),
            k = f ? h.scrollTop() : 0;
        h = f ? h.scrollLeft() : 0;
        var m = e.offset();
        e = {
            top: m.top - k,
            left: m.left - h,
            height: e.innerHeight(),
            width: e.innerWidth()
        };
        m = d.offset();
        var q = b("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(a.className).css({
            top: m.top -
                k,
            left: m.left - h,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: f ? "fixed" : "absolute"
        }).animate(e, a.duration, a.easing, function() {
            q.remove();
            c()
        })
    };
    b.widget("ui.progressbar", {
        version: "1.11.2",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(a) {
            return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), this._refreshValue(), void 0)
        },
        _constrainedValue: function(a) {
            return void 0 === a && (a = this.options.value), this.indeterminate = !1 === a, "number" != typeof a &&
                (a = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        },
        _setOptions: function(a) {
            var c = a.value;
            delete a.value;
            this._super(a);
            this.options.value = this._constrainedValue(c);
            this._refreshValue()
        },
        _setOption: function(a, c) {
            "max" === a && (c = Math.max(this.min, c));
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c);
            this._super(a, c)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var a =
                this.options.value,
                c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = b("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": a
                }), this.overlayDiv &&
                (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== a && (this.oldValue = a, this._trigger("change"));
            a === this.options.max && this._trigger("complete")
        }
    });
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var a, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                a = b(c.options.filter,
                    c.element[0]);
                a.addClass("ui-selectee");
                a.each(function() {
                    var d = b(this),
                        e = d.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: d,
                        left: e.left,
                        top: e.top,
                        right: e.left + d.outerWidth(),
                        bottom: e.top + d.outerHeight(),
                        startselected: !1,
                        selected: d.hasClass("ui-selected"),
                        selecting: d.hasClass("ui-selecting"),
                        unselecting: d.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = a.addClass("ui-selectee");
            this._mouseInit();
            this.helper = b("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(a) {
            var c = this,
                d = this.options;
            this.opos = [a.pageX, a.pageY];
            this.options.disabled || (this.selectees = b(d.filter, this.element[0]), this._trigger("start", a), b(d.appendTo).append(this.helper), this.helper.css({
                left: a.pageX,
                top: a.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var e = b.data(this, "selectable-item");
                e.startselected = !0;
                a.metaKey ||
                    a.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, c._trigger("unselecting", a, {
                        unselecting: e.element
                    }))
            }), b(a.target).parents().addBack().each(function() {
                var e, f = b.data(this, "selectable-item");
                return f ? (e = !a.metaKey && !a.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), f.unselecting = !e, f.selecting = e, f.selected = e, e ? c._trigger("selecting",
                    a, {
                        selecting: f.element
                    }) : c._trigger("unselecting", a, {
                    unselecting: f.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(a) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this,
                    e = this.options,
                    f = this.opos[0],
                    h = this.opos[1],
                    k = a.pageX,
                    m = a.pageY;
                return f > k && (c = k, k = f, f = c), h > m && (c = m, m = h, h = c), this.helper.css({
                    left: f,
                    top: h,
                    width: k - f,
                    height: m - h
                }), this.selectees.each(function() {
                    var q = b.data(this, "selectable-item"),
                        A = !1;
                    q && q.element !== d.element[0] && ("touch" === e.tolerance ? A = !(q.left > k || f > q.right || q.top > m || h > q.bottom) :
                        "fit" === e.tolerance && (A = q.left > f && k > q.right && q.top > h && m > q.bottom), A ? (q.selected && (q.$element.removeClass("ui-selected"), q.selected = !1), q.unselecting && (q.$element.removeClass("ui-unselecting"), q.unselecting = !1), q.selecting || (q.$element.addClass("ui-selecting"), q.selecting = !0, d._trigger("selecting", a, {
                            selecting: q.element
                        }))) : (q.selecting && ((a.metaKey || a.ctrlKey) && q.startselected ? (q.$element.removeClass("ui-selecting"), q.selecting = !1, q.$element.addClass("ui-selected"), q.selected = !0) : (q.$element.removeClass("ui-selecting"),
                            q.selecting = !1, q.startselected && (q.$element.addClass("ui-unselecting"), q.unselecting = !0), d._trigger("unselecting", a, {
                                unselecting: q.element
                            }))), q.selected && (a.metaKey || a.ctrlKey || q.startselected || (q.$element.removeClass("ui-selected"), q.selected = !1, q.$element.addClass("ui-unselecting"), q.unselecting = !0, d._trigger("unselecting", a, {
                            unselecting: q.element
                        })))))
                }), !1
            }
        },
        _mouseStop: function(a) {
            var c = this;
            return this.dragged = !1, b(".ui-unselecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting");
                d.unselecting = !1;
                d.startselected = !1;
                c._trigger("unselected", a, {
                    unselected: d.element
                })
            }), b(".ui-selecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected");
                d.selecting = !1;
                d.selected = !0;
                d.startselected = !0;
                c._trigger("selected", a, {
                    selected: d.element
                })
            }), this._trigger("stop", a), this.helper.remove(), !1
        }
    });
    b.widget("ui.selectmenu", {
        version: "1.11.2",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var a = this.element.uniqueId().attr("id");
            this.ids = {
                element: a,
                button: a + "-button",
                menu: a + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var a = this,
                c = this.element.attr("tabindex");
            this.label = b("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
            this._on(this.label, {
                click: function(d) {
                    this.button.focus();
                    d.preventDefault()
                }
            });
            this.element.hide();
            this.button = b("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: c || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element);
            b("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button);
            this.buttonText = b("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button);
            this._setText(this.buttonText, this.element.find("option:selected").text());
            this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                a.menuItems || a._refreshMenu()
            });
            this._hoverable(this.button);
            this._focusable(this.button)
        },
        _drawMenu: function() {
            var a = this;
            this.menu = b("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = b("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(c, d) {
                    c.preventDefault();
                    a._setSelection();
                    a._select(d.item.data("ui-selectmenu-item"), c)
                },
                focus: function(c, d) {
                    d = d.item.data("ui-selectmenu-item");
                    null != a.focusIndex && d.index !== a.focusIndex && (a._trigger("focus", c, {
                        item: d
                    }), a.isOpen || a._select(d, c));
                    a.focusIndex = d.index;
                    a.button.attr("aria-activedescendant", a.menuItems.eq(d.index).attr("id"))
                }
            }).menu("instance");
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
            this.menuInstance._off(this.menu,
                "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            };
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this._setText(this.buttonText, this._getSelectedItem().text());
            this.options.width || this._resizeButton()
        },
        _refreshMenu: function() {
            this.menu.empty();
            var a, c = this.element.find("option");
            c.length && (this._parseOptions(c), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"),
                a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(a) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a))
        },
        _position: function() {
            this.menuWrap.position(b.extend({ of: this.button
                },
                this.options.position))
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(a, c) {
            var d = this,
                e = "";
            b.each(c, function(f, h) {
                h.optgroup !== e && (b("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (h.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: h.optgroup
                }).appendTo(a), e = h.optgroup);
                d._renderItemData(a,
                    h)
            })
        },
        _renderItemData: function(a, c) {
            return this._renderItem(a, c).data("ui-selectmenu-item", c)
        },
        _renderItem: function(a, c) {
            var d = b("<li>");
            return c.disabled && d.addClass("ui-state-disabled"), this._setText(d, c.label), d.appendTo(a)
        },
        _setText: function(a, c) {
            c ? a.text(c) : a.html("&#160;")
        },
        _move: function(a, c) {
            var d, e = ".ui-menu-item";
            this.isOpen ? d = this.menuItems.eq(this.focusIndex) : (d = this.menuItems.eq(this.element[0].selectedIndex), e += ":not(.ui-state-disabled)");
            a = "first" === a || "last" === a ? d["first" === a ? "prevAll" :
                "nextAll"](e).eq(-1) : d[a + "All"](e).eq(0);
            a.length && this.menuInstance.focus(c, a)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(a) {
            this[this.isOpen ? "close" : "open"](a)
        },
        _setSelection: function() {
            var a;
            this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(a) {
                this.isOpen && (b(a.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length ||
                    this.close(a))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var a;
                window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(a) {
                this._setSelection();
                this._toggle(a)
            },
            keydown: function(a) {
                var c = !0;
                switch (a.keyCode) {
                    case b.ui.keyCode.TAB:
                    case b.ui.keyCode.ESCAPE:
                        this.close(a);
                        c = !1;
                        break;
                    case b.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(a);
                        break;
                    case b.ui.keyCode.UP:
                        a.altKey ? this._toggle(a) : this._move("prev",
                            a);
                        break;
                    case b.ui.keyCode.DOWN:
                        a.altKey ? this._toggle(a) : this._move("next", a);
                        break;
                    case b.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(a) : this._toggle(a);
                        break;
                    case b.ui.keyCode.LEFT:
                        this._move("prev", a);
                        break;
                    case b.ui.keyCode.RIGHT:
                        this._move("next", a);
                        break;
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.PAGE_UP:
                        this._move("first", a);
                        break;
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_DOWN:
                        this._move("last", a);
                        break;
                    default:
                        this.menu.trigger(a), c = !1
                }
                c && a.preventDefault()
            }
        },
        _selectFocusedItem: function(a) {
            var c =
                this.menuItems.eq(this.focusIndex);
            c.hasClass("ui-state-disabled") || this._select(c.data("ui-selectmenu-item"), a)
        },
        _select: function(a, c) {
            var d = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index;
            this._setText(this.buttonText, a.label);
            this._setAria(a);
            this._trigger("select", c, {
                item: a
            });
            a.index !== d && this._trigger("change", c, {
                item: a
            });
            this.close(c)
        },
        _setAria: function(a) {
            a = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": a,
                "aria-activedescendant": a
            });
            this.menu.attr("aria-activedescendant",
                a)
        },
        _setOption: function(a, c) {
            "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(c.button);
            this._super(a, c);
            "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
            "disabled" === a && (this.menuInstance.option("disabled", c), this.button.toggleClass("ui-state-disabled", c).attr("aria-disabled", c), this.element.prop("disabled", c), c ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
            "width" === a && this._resizeButton()
        },
        _appendTo: function() {
            var a =
                this.options.appendTo;
            return a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0)), a && a[0] || (a = this.element.closest(".ui-front")), a.length || (a = this.document[0].body), a
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var a = this.options.width;
            a || (a = this.element.show().outerWidth(),
                this.element.hide());
            this.button.outerWidth(a)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(a) {
            var c = [];
            a.each(function(d, e) {
                e = b(e);
                var f = e.parent("optgroup");
                c.push({
                    element: e,
                    index: d,
                    value: e.attr("value"),
                    label: e.text(),
                    optgroup: f.attr("label") || "",
                    disabled: f.prop("disabled") || e.prop("disabled")
                })
            });
            this.items = c
        },
        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr("for", this.ids.element)
        }
    });
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var a = this.options;
            var c = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                d = [];
            var e = a.values && a.values.length || 1;
            c.length > e && (c.slice(e).remove(),
                c = c.slice(0, e));
            for (a = c.length; e > a; a++) d.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = c.add(b(d.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(f) {
                b(this).data("ui-slider-handle-index", f)
            })
        },
        _createRange: function() {
            var a = this.options,
                c = "";
            a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : b.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = b("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(a) {
            var c, d, e, f, h, k, m, q, A = this,
                E = this.options;
            return E.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: a.pageX,
                    y: a.pageY
                }, d = this._normValueFromMouse(c),
                e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(G) {
                    var F = Math.abs(d - A.values(G));
                    (e > F || e === F && (G === A._lastChangedValue || A.values(G) === E.min)) && (e = F, f = b(this), h = G)
                }), k = this._start(a, h), !1 === k ? !1 : (this._mouseSliding = !0, this._handleIndex = h, f.addClass("ui-state-active").focus(), m = f.offset(), q = !b(a.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = q ? {
                    left: 0,
                    top: 0
                } : {
                    left: a.pageX - m.left - f.width() / 2,
                    top: a.pageY - m.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) ||
                        0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(a, h, d), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var c = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            return this._slide(a, this._handleIndex, c), !1
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex =
                null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var c, d, e, f, h;
            return "horizontal" === this.orientation ? (c = this.elementSize.width, d = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, d = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), e = d / c, 1 < e && (e = 1), 0 > e && (e = 0), "vertical" === this.orientation &&
                (e = 1 - e), f = this._valueMax() - this._valueMin(), h = this._valueMin() + e * f, this._trimAlignValue(h)
        },
        _start: function(a, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values()), this._trigger("start", a, d)
        },
        _slide: function(a, c, d) {
            var e, f, h;
            this.options.values && this.options.values.length ? (e = this.values(c ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === c && d > e || 1 === c && e > d) && (d = e), d !== this.values(c) &&
                (f = this.values(), f[c] = d, h = this._trigger("slide", a, {
                    handle: this.handles[c],
                    value: d,
                    values: f
                }), this.values(c ? 0 : 1), !1 !== h && this.values(c, d))) : d !== this.value() && (h = this._trigger("slide", a, {
                handle: this.handles[c],
                value: d
            }), !1 !== h && this.value(d))
        },
        _stop: function(a, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
            this._trigger("stop", a, d)
        },
        _change: function(a, c) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
                this._lastChangedValue = c;
                this._trigger("change", a, d)
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(a, c) {
            var d;
            if (1 < arguments.length) return this.options.values[a] = this._trimAlignValue(c), this._refreshValue(), this._change(null, a), void 0;
            if (!arguments.length) return this._values();
            if (!b.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(a) : this.value();
            var e = this.options.values;
            var f = arguments[0];
            for (d = 0; e.length > d; d += 1) e[d] = this._trimAlignValue(f[d]), this._change(null, d);
            this._refreshValue()
        },
        _setOption: function(a, c) {
            var d = 0;
            switch ("range" === a && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values =
                null)), b.isArray(this.options.values) && (d = this.options.values.length), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c), this._super(a, c), a) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.handles.css("horizontal" === c ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (a = 0; d > a; a += 1) this._change(null, a);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            return this._trimAlignValue(this.options.value)
        },
        _values: function(a) {
            var c, d;
            if (arguments.length) return c = this.options.values[a], this._trimAlignValue(c);
            if (this.options.values && this.options.values.length) {
                c =
                    this.options.values.slice();
                for (d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (this._valueMin() >= a) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var c = 0 < this.options.step ? this.options.step : 1,
                d = (a - this._valueMin()) % c;
            a -= d;
            return 2 * Math.abs(d) >= c && (a += 0 < d ? c : -c), parseFloat(a.toFixed(5))
        },
        _calculateNewMax: function() {
            var a = (this.options.max - this._valueMin()) % this.options.step;
            this.max = this.options.max - a
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var a, c, d, e, f, h = this.options.range,
                k = this.options,
                m = this,
                q = this._animateOff ? !1 : k.animate,
                A = {};
            this.options.values && this.options.values.length ? this.handles.each(function(E) {
                c = 100 * ((m.values(E) - m._valueMin()) / (m._valueMax() - m._valueMin()));
                A["horizontal" === m.orientation ? "left" : "bottom"] = c + "%";
                b(this).stop(1, 1)[q ? "animate" : "css"](A, k.animate);
                !0 === m.options.range && ("horizontal" === m.orientation ? (0 === E && m.range.stop(1, 1)[q ? "animate" : "css"]({
                    left: c +
                        "%"
                }, k.animate), 1 === E && m.range[q ? "animate" : "css"]({
                    width: c - a + "%"
                }, {
                    queue: !1,
                    duration: k.animate
                })) : (0 === E && m.range.stop(1, 1)[q ? "animate" : "css"]({
                    bottom: c + "%"
                }, k.animate), 1 === E && m.range[q ? "animate" : "css"]({
                    height: c - a + "%"
                }, {
                    queue: !1,
                    duration: k.animate
                })));
                a = c
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, A["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[q ? "animate" : "css"](A, k.animate), "min" === h && "horizontal" === this.orientation && this.range.stop(1,
                1)[q ? "animate" : "css"]({
                width: c + "%"
            }, k.animate), "max" === h && "horizontal" === this.orientation && this.range[q ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: k.animate
            }), "min" === h && "vertical" === this.orientation && this.range.stop(1, 1)[q ? "animate" : "css"]({
                height: c + "%"
            }, k.animate), "max" === h && "vertical" === this.orientation && this.range[q ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: k.animate
            }))
        },
        _handleEvents: {
            keydown: function(a) {
                var c, d, e, f = b(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (a.preventDefault(), !this._keySliding && (this._keySliding = !0, b(a.target).addClass("ui-state-active"), c = this._start(a, f), !1 === c)) return
                }
                switch (e = this.options.step, c = d = this.options.values && this.options.values.length ? this.values(f) : this.value(), a.keyCode) {
                    case b.ui.keyCode.HOME:
                        d = this._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        d = this._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        d = this._trimAlignValue(c - (this._valueMax() -
                            this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (c === this._valueMax()) return;
                        d = this._trimAlignValue(c + e);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (c === this._valueMin()) return;
                        d = this._trimAlignValue(c - e)
                }
                this._slide(a, f, d)
            },
            keyup: function(a) {
                var c = b(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(a, c), this._change(a, c), b(a.target).removeClass("ui-state-active"))
            }
        }
    });
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, c, d) {
            return a >= c && c + d > a
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? "x" === a.axis || this._isFloating(this.items[0].item) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "handle" ===
            a && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            b.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName +
                "-item");
            return this
        },
        _mouseCapture: function(a, c) {
            var d = null,
                e = !1,
                f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(a), b(a.target).parents().each(function() {
                return b.data(this, f.widgetName + "-item") === f ? (d = b(this), !1) : void 0
            }), b.data(a.target, f.widgetName + "-item") === f && (d = b(a.target)), d ? !this.options.handle || c || (b(this.options.handle, d).find("*").addBack().each(function() {
                this === a.target && (e = !0)
            }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(a, c, d) {
            var e;
            c = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(a), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, b.extend(this.offset, {
                    click: {
                        left: a.pageX - this.offset.left,
                        top: a.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }),
                this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(a), this.originalPageX = a.pageX, this.originalPageY = a.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && "auto" !== c.cursor && (e = this.document.find("body"),
                    this.storedCursor = e.css("cursor"), e.css("cursor", c.cursor), this.storedStylesheet = b("<style>*{ cursor: " + c.cursor + " !important; }</style>").appendTo(e)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                this._trigger("start", a, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate", a, this._uiHash(this));
            return b.ui.ddmanager && (b.ui.ddmanager.current = this), b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(a), !0
        },
        _mouseDrag: function(a) {
            var c, d, e;
            var f = this.options;
            var h = !1;
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < f.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + f.scrollSpeed : a.pageY - this.overflowOffset.top < f.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - f.scrollSpeed),
                this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < f.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + f.scrollSpeed : a.pageX - this.overflowOffset.left < f.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - f.scrollSpeed)) : (a.pageY - b(document).scrollTop() < f.scrollSensitivity ? h = b(document).scrollTop(b(document).scrollTop() - f.scrollSpeed) : b(window).height() - (a.pageY - b(document).scrollTop()) < f.scrollSensitivity && (h = b(document).scrollTop(b(document).scrollTop() +
                f.scrollSpeed)), a.pageX - b(document).scrollLeft() < f.scrollSensitivity ? h = b(document).scrollLeft(b(document).scrollLeft() - f.scrollSpeed) : b(window).width() - (a.pageX - b(document).scrollLeft()) < f.scrollSensitivity && (h = b(document).scrollLeft(b(document).scrollLeft() + f.scrollSpeed))), !1 !== h && b.ui.ddmanager && !f.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (f = this.items.length - 1; 0 <= f; f--)
                if (c = this.items[f], d = c.item[0], e = this._intersectsWithPointer(c), e && c.instance === this.currentContainer && d !== this.currentItem[0] && this.placeholder[1 === e ? "next" : "prev"]()[0] !== d && !b.contains(this.placeholder[0], d) && ("semi-dynamic" === this.options.type ? !b.contains(this.element[0], d) : !0)) {
                    if (this.direction = 1 === e ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(c)) break;
                    this._rearrange(a, c);
                    this._trigger("change", a, this._uiHash());
                    break
                }
            return this._contactContainers(a), b.ui.ddmanager && b.ui.ddmanager.drag(this, a), this._trigger("sort", a, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(a, c) {
            if (a) {
                if (b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, a), this.options.revert) {
                    var d = this;
                    c = this.placeholder.offset();
                    var e = this.options.axis,
                        f = {};
                    e && "x" !== e || (f.left = c.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] ===
                        document.body ? 0 : this.offsetParent[0].scrollLeft));
                    e && "y" !== e || (f.top = c.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    b(this.helper).animate(f, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(a)
                    })
                } else this._clear(a, c);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var a = this.containers.length - 1; 0 <= a; a--) this.containers[a]._trigger("deactivate", null, this._uiHash(this)), this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)), this.containers[a].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(a) {
            var c = this._getItemsAsjQuery(a && a.connected),
                d = [];
            return a = a || {}, b(c).each(function() {
                var e = (b(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[\-=_](.+)/);
                e && d.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2]))
            }), !d.length && a.key && d.push(a.key + "="), d.join("&")
        },
        toArray: function(a) {
            var c =
                this._getItemsAsjQuery(a && a.connected),
                d = [];
            return a = a || {}, c.each(function() {
                d.push(b(a.item || this).attr(a.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function(a) {
            var c = this.positionAbs.left,
                d = c + this.helperProportions.width,
                e = this.positionAbs.top,
                f = e + this.helperProportions.height,
                h = a.left,
                k = h + a.width,
                m = a.top,
                q = m + a.height,
                A = this.offset.click.top,
                E = this.offset.click.left;
            A = "x" === this.options.axis || e + A > m && q > e + A;
            E = "y" === this.options.axis || c + E > h && k > c + E;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers ||
                "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? A && E : c + this.helperProportions.width / 2 > h && k > d - this.helperProportions.width / 2 && e + this.helperProportions.height / 2 > m && q > f - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(a) {
            var c = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left,
                a.left, a.width);
            c = c && a;
            a = this._getDragVerticalDirection();
            var d = this._getDragHorizontalDirection();
            return c ? this.floating ? d && "right" === d || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(a) {
            var c = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var d = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" ===
                e && a || "left" === e && !a : d && ("down" === d && c || "up" === d && !c)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right" : "left")
        },
        refresh: function(a) {
            return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] :
                a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            function c() {
                f.push(this)
            }
            var d, e, f = [],
                h = [],
                k = this._connectWith();
            if (k && a)
                for (a = k.length - 1; 0 <= a; a--) {
                    var m = b(k[a]);
                    for (d = m.length - 1; 0 <= d; d--)(e = b.data(m[d], this.widgetFullName)) && e !== this && !e.options.disabled && h.push([b.isFunction(e.options.items) ? e.options.items.call(e.element) : b(e.options.items, e.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), e])
                }
            h.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = h.length - 1; 0 <= a; a--) h[a][0].each(c);
            return b(f)
        },
        _removeCurrentsFromItems: function() {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(c) {
                for (var d = 0; a.length > d; d++)
                    if (a[d] === c.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var c, d, e, f, h = this.items,
                k = [
                    [b.isFunction(this.options.items) ?
                        this.options.items.call(this.element[0], a, {
                            item: this.currentItem
                        }) : b(this.options.items, this.element), this
                    ]
                ];
            if ((f = this._connectWith()) && this.ready)
                for (c = f.length - 1; 0 <= c; c--) {
                    var m = b(f[c]);
                    for (d = m.length - 1; 0 <= d; d--)(e = b.data(m[d], this.widgetFullName)) && e !== this && !e.options.disabled && (k.push([b.isFunction(e.options.items) ? e.options.items.call(e.element[0], a, {
                        item: this.currentItem
                    }) : b(e.options.items, e.element), e]), this.containers.push(e))
                }
            for (c = k.length - 1; 0 <= c; c--)
                for (a = k[c][1], m = k[c][0], d = 0, f = m.length; f >
                    d; d++) e = b(m[d]), e.data(this.widgetName + "-item", a), h.push({
                    item: e,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(a) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e;
            for (c = this.items.length - 1; 0 <= c; c--) {
                var f = this.items[c];
                f.instance !== this.currentContainer && this.currentContainer && f.item[0] !== this.currentItem[0] || (d = this.options.toleranceElement ? b(this.options.toleranceElement, f.item) : f.item, a || (f.width = d.outerWidth(), f.height = d.outerHeight()),
                    e = d.offset(), f.left = e.left, f.top = e.top)
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (c = this.containers.length - 1; 0 <= c; c--) e = this.containers[c].element.offset(), this.containers[c].containerCache.left = e.left, this.containers[c].containerCache.top = e.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function(a) {
            a =
                a || this;
            var c, d = a.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var e = a.currentItem[0].nodeName.toLowerCase(),
                        f = b("<" + e + ">", a.document[0]).addClass(c || a.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === e ? a.currentItem.children().each(function() {
                            b("<td>&#160;</td>", a.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(f)
                        }) : "img" === e && f.attr("src", a.currentItem.attr("src")),
                        c || f.css("visibility", "hidden"), f
                },
                update: function(e, f) {
                    (!c || d.forcePlaceholderSize) && (f.height() || f.height(a.currentItem.innerHeight() - parseInt(a.currentItem.css("paddingTop") || 0, 10) - parseInt(a.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(a.currentItem.innerWidth() - parseInt(a.currentItem.css("paddingLeft") || 0, 10) - parseInt(a.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            a.placeholder = b(d.placeholder.element.call(a.element, a.currentItem));
            a.currentItem.after(a.placeholder);
            d.placeholder.update(a,
                a.placeholder)
        },
        _contactContainers: function(a) {
            var c, d, e, f, h, k = e = null;
            for (c = this.containers.length - 1; 0 <= c; c--) b.contains(this.currentItem[0], this.containers[c].element[0]) || (this._intersectsWith(this.containers[c].containerCache) ? e && b.contains(this.containers[c].element[0], e.element[0]) || (e = this.containers[c], k = c) : this.containers[c].containerCache.over && (this.containers[c]._trigger("out", a, this._uiHash(this)), this.containers[c].containerCache.over = 0));
            if (e)
                if (1 === this.containers.length) this.containers[k].containerCache.over ||
                    (this.containers[k]._trigger("over", a, this._uiHash(this)), this.containers[k].containerCache.over = 1);
                else {
                    c = 1E4;
                    var m = null;
                    e = (d = e.floating || this._isFloating(this.currentItem)) ? "left" : "top";
                    var q = d ? "width" : "height";
                    var A = d ? "clientX" : "clientY";
                    for (d = this.items.length - 1; 0 <= d; d--) b.contains(this.containers[k].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (f = this.items[d].item.offset()[e], h = !1, a[A] - f > this.items[d][q] / 2 && (h = !0), c > Math.abs(a[A] - f) && (c = Math.abs(a[A] - f), m =
                        this.items[d], this.direction = h ? "up" : "down"));
                    if (m || this.options.dropOnEmpty) {
                        if (this.currentContainer === this.containers[k]) return this.currentContainer.containerCache.over || (this.containers[k]._trigger("over", a, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                        m ? this._rearrange(a, m, null, !0) : this._rearrange(a, null, this.containers[k].element, !0);
                        this._trigger("change", a, this._uiHash());
                        this.containers[k]._trigger("change", a, this._uiHash(this));
                        this.currentContainer = this.containers[k];
                        this.options.placeholder.update(this.currentContainer, this.placeholder);
                        this.containers[k]._trigger("over", a, this._uiHash(this));
                        this.containers[k].containerCache.over = 1
                    }
                }
        },
        _createHelper: function(a) {
            var c = this.options;
            a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return a.parents("body").length || b("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]), a[0] === this.currentItem[0] &&
                (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!a[0].style.width || c.forceHelperSize) && a.width(this.currentItem.width()), (!a[0].style.height || c.forceHelperSize) && a.height(this.currentItem.height()), a
        },
        _adjustOffsetFromHelper: function(a) {
            "string" == typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left =
                a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) &&
                (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie) && (a = {
                    top: 0,
                    left: 0
                }), {
                    top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"),
                        10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, c, d, e = this.options;
            "parent" === e.containment && (e.containment =
                this.helper[0].parentNode);
            "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (b("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(e.containment) || (a =
                b(e.containment)[0], c = b(e.containment).offset(), d = "hidden" !== b(a).css("overflow"), this.containment = [c.left + (parseInt(b(a).css("borderLeftWidth"), 10) || 0) + (parseInt(b(a).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(b(a).css("borderTopWidth"), 10) || 0) + (parseInt(b(a).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(b(a).css("borderLeftWidth"), 10) || 0) - (parseInt(b(a).css("paddingRight"), 10) || 0) - this.helperProportions.width -
                    this.margins.left, c.top + (d ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(b(a).css("borderTopWidth"), 10) || 0) - (parseInt(b(a).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top
                ])
        },
        _convertPositionTo: function(a, c) {
            c || (c = this.position);
            a = "absolute" === a ? 1 : -1;
            var d = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(d[0].tagName);
            return {
                top: c.top +
                    this.offset.relative.top * a + this.offset.parent.top * a - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()) * a,
                left: c.left + this.offset.relative.left * a + this.offset.parent.left * a - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()) * a
            }
        },
        _generatePosition: function(a) {
            var c, d, e = this.options,
                f = a.pageX,
                h = a.pageY,
                k = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                m = /(html|body)/i.test(k[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), a.pageY - this.offset.click.top < this.containment[1] && (h = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] +
                this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (h = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((h - this.originalPageY) / e.grid[1]) * e.grid[1], h = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >=
                this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : m ? 0 : k.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : m ? 0 : k.scrollLeft())
            }
        },
        _rearrange: function(a, c, d, e) {
            d ? d[0].appendChild(this.placeholder[0]) :
                c.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? c.item[0] : c.item[0].nextSibling);
            var f = this.counter = this.counter ? ++this.counter : 1;
            this._delay(function() {
                f === this.counter && this.refreshPositions(!e)
            })
        },
        _clear: function(a, c) {
            function d(h, k, m) {
                return function(q) {
                    m._trigger(h, q, k._uiHash(k))
                }
            }
            this.reverting = !1;
            var e, f = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (e in this._storedCSS) "auto" !==
                    this._storedCSS[e] && "static" !== this._storedCSS[e] || (this._storedCSS[e] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && f.push(function(h) {
                this._trigger("receive", h, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || c || f.push(function(h) {
                this._trigger("update", h, this._uiHash())
            });
            this !==
                this.currentContainer && (c || (f.push(function(h) {
                    this._trigger("remove", h, this._uiHash())
                }), f.push(function(h) {
                    return function(k) {
                        h._trigger("receive", k, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), f.push(function(h) {
                    return function(k) {
                        h._trigger("update", k, this._uiHash(this))
                    }
                }.call(this, this.currentContainer))));
            for (e = this.containers.length - 1; 0 <= e; e--) c || f.push(d("deactivate", this, this.containers[e])), this.containers[e].containerCache.over && (f.push(d("out", this, this.containers[e])), this.containers[e].containerCache.over =
                0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, c || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper =
                    null), !c) {
                for (e = 0; f.length > e; e++) f[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(a) {
            var c = a || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || b([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    b.widget("ui.spinner", {
        version: "1.11.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var a = {},
                c = this.element;
            return b.each(["min", "max", "step"], function(d, e) {
                d = c.attr(e);
                void 0 !== d && d.length && (a[e] = d)
            }), a
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(a) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a), void 0)
            },
            mousewheel: function(a, c) {
                if (c) {
                    if (!this.spinning &&
                        !this._start(a)) return !1;
                    this._spin((0 < c ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    }, 100);
                    a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(a) {
                function c() {
                    this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d
                    }))
                }
                var d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                a.preventDefault();
                c.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    c.call(this)
                });
                !1 !== this._start(a) && this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(a) {
                return b(a.currentTarget).hasClass("ui-state-active") ? !1 === this._start(a) ? !1 : (this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete",
                "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(.5 * a.height()) && 0 < a.height() && a.height(a.height());
            this.options.disabled && this.disable()
        },
        _keydown: function(a) {
            var c = this.options,
                d = b.ui.keyCode;
            switch (a.keyCode) {
                case d.UP:
                    return this._repeat(null, 1, a), !0;
                case d.DOWN:
                    return this._repeat(null, -1, a), !0;
                case d.PAGE_UP:
                    return this._repeat(null,
                        c.page, a), !0;
                case d.PAGE_DOWN:
                    return this._repeat(null, -c.page, a), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(a) {
            return this.spinning ||
                !1 !== this._trigger("start", a) ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(a, c, d) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, c, d)
            }, a);
            this._spin(c * this.options.step, d)
        },
        _spin: function(a, c) {
            var d = this.value() || 0;
            this.counter || (this.counter = 1);
            d = this._adjustValue(d + a * this._increment(this.counter));
            this.spinning && !1 === this._trigger("spin", c, {
                value: d
            }) || (this._value(d), this.counter++)
        },
        _increment: function(a) {
            var c = this.options.incremental;
            return c ? b.isFunction(c) ? c(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
        },
        _precisionOf: function(a) {
            a = "" + a;
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _adjustValue: function(a) {
            var c, d, e = this.options;
            return c = null !== e.min ? e.min : 0, d = a - c, d = Math.round(d / e.step) * e.step, a = c + d, a = parseFloat(a.toFixed(this._precision())), null !== e.max && a > e.max ? e.max : null !==
                e.min && e.min > a ? e.min : a
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function(a, c) {
            if ("culture" === a || "numberFormat" === a) {
                var d = this._parse(this.element.val());
                return this.options[a] = c, this.element.val(this._format(d)), void 0
            }
            "max" !== a && "min" !== a && "step" !== a || "string" != typeof c || (c = this._parse(c));
            "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(c.up),
                this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(c.down));
            this._super(a, c);
            "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!c), this.element.prop("disabled", !!c), this.buttons.button(c ? "disable" : "enable"))
        },
        _setOptions: B(function(a) {
            this._super(a)
        }),
        _parse: function(a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
        },
        _format: function(a) {
            return "" ===
                a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function(a, c) {
            var d;
            "" !== a && (d = this._parse(a), null !== d && (c || (d = this._adjustValue(d)), a = this._format(d)));
            this.element.val(a);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: B(function(a) {
            this._stepUp(a)
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: B(function(a) {
            this._stepDown(a)
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step),
                this._stop())
        },
        pageUp: B(function(a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: B(function(a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function(a) {
            return arguments.length ? (B(this._value).call(this, a), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    b.widget("ui.tabs", {
        version: "1.11.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a =
                /#.*$/;
            return function(c) {
                c = c.cloneNode(!1);
                var d = c.href.replace(a, "");
                var e = location.href.replace(a, "");
                try {
                    d = decodeURIComponent(d)
                } catch (f) {}
                try {
                    e = decodeURIComponent(e)
                } catch (f) {}
                return 1 < c.hash.length && d === e
            }
        }(),
        _create: function() {
            var a = this,
                c = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible);
            this._processTabs();
            c.active = this._initialActive();
            b.isArray(c.disabled) && (c.disabled = b.unique(c.disabled.concat(b.map(this.tabs.filter(".ui-state-disabled"),
                function(d) {
                    return a.tabs.index(d)
                }))).sort());
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : b();
            this._refresh();
            this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var a = this.options.active,
                c = this.options.collapsible,
                d = location.hash.substring(1);
            return null === a && (d && this.tabs.each(function(e, f) {
                return b(f).attr("aria-controls") === d ? (a = e, !1) : void 0
            }), null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === a || -1 === a) && (a = this.tabs.length ?
                0 : !1)), !1 !== a && (a = this.tabs.index(this.tabs.eq(a)), -1 === a && (a = c ? !1 : 0)), !c && !1 === a && this.anchors.length && (a = 0), a
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : b()
            }
        },
        _tabKeydown: function(a) {
            var c = b(this.document[0].activeElement).closest("li"),
                d = this.tabs.index(c),
                e = !0;
            if (!this._handlePageNav(a)) {
                switch (a.keyCode) {
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                        d++;
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.LEFT:
                        e = !1;
                        d--;
                        break;
                    case b.ui.keyCode.END:
                        d =
                            this.anchors.length - 1;
                        break;
                    case b.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case b.ui.keyCode.SPACE:
                        return a.preventDefault(), clearTimeout(this.activating), this._activate(d), void 0;
                    case b.ui.keyCode.ENTER:
                        return a.preventDefault(), clearTimeout(this.activating), this._activate(d === this.options.active ? !1 : d), void 0;
                    default:
                        return
                }
                a.preventDefault();
                clearTimeout(this.activating);
                d = this._focusNextTab(d, e);
                a.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active",
                        d)
                }, this.delay))
            }
        },
        _panelKeydown: function(a) {
            this._handlePageNav(a) || a.ctrlKey && a.keyCode === b.ui.keyCode.UP && (a.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(a) {
            return a.altKey && a.keyCode === b.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : a.altKey && a.keyCode === b.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(a, c) {
            for (var d = this.tabs.length - 1; - 1 !== b.inArray((a > d && (a = 0), 0 > a &&
                    (a = d), a), this.options.disabled);) a = c ? a + 1 : a - 1;
            return a
        },
        _focusNextTab: function(a, c) {
            return a = this._findNextTab(a, c), this.tabs.eq(a).focus(), a
        },
        _setOption: function(a, c) {
            return "active" === a ? (this._activate(c), void 0) : "disabled" === a ? (this._setupDisabled(c), void 0) : (this._super(a, c), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", c), c || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(c), "heightStyle" === a && this._setupHeightStyle(c), void 0)
        },
        _sanitizeSelector: function(a) {
            return a ?
                a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var a = this.options,
                c = this.tablist.children(":has(a[href])");
            a.disabled = b.map(c.filter(".ui-state-disabled"), function(d) {
                return c.index(d)
            });
            this._processTabs();
            !1 !== a.active && this.anchors.length ? this.active.length && !b.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1, this.active = b()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) : a.active = this.tabs.index(this.active) :
                (a.active = !1, this.active = b());
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var a = this,
                c = this.tabs,
                d = this.anchors,
                e = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(f) {
                b(this).is(".ui-state-disabled") && f.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
                function() {
                    b(this).closest("li").is(".ui-state-disabled") && this.blur()
                });
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return b("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = b();
            this.anchors.each(function(f, h) {
                var k, m, q, A = b(h).uniqueId().attr("id"),
                    E = b(h).closest("li"),
                    G = E.attr("aria-controls");
                a._isLocal(h) ? (k = h.hash, q = k.substring(1), m =
                    a.element.find(a._sanitizeSelector(k))) : (q = E.attr("aria-controls") || b({}).uniqueId()[0].id, k = "#" + q, m = a.element.find(k), m.length || (m = a._createPanel(q), m.insertAfter(a.panels[f - 1] || a.tablist)), m.attr("aria-live", "polite"));
                m.length && (a.panels = a.panels.add(m));
                G && E.data("ui-tabs-aria-controls", G);
                E.attr({
                    "aria-controls": q,
                    "aria-labelledby": A
                });
                m.attr("aria-labelledby", A)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
            c && (this._off(c.not(this.tabs)),
                this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(a) {
            return b("<div>").attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(a) {
            b.isArray(a) && (a.length ? a.length === this.anchors.length && (a = !0) : a = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) !0 === a || -1 !== b.inArray(d, a) ? b(c).addClass("ui-state-disabled").attr("aria-disabled", "true") :
                b(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = a
        },
        _setupEvents: function(a) {
            var c = {};
            a && b.each(a.split(" "), function(d, e) {
                c[e] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(d) {
                    d.preventDefault()
                }
            });
            this._on(this.anchors, c);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(a) {
            var c,
                d = this.element.parent();
            "fill" === a ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = b(this),
                    f = e.css("position");
                "absolute" !== f && "fixed" !== f && (c -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                c -= b(this).outerHeight(!0)
            }), this.panels.each(function() {
                b(this).height(Math.max(0, c - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === a && (c = 0, this.panels.each(function() {
                c = Math.max(c,
                    b(this).height("").height())
            }).height(c))
        },
        _eventHandler: function(a) {
            var c = this.options,
                d = this.active,
                e = b(a.currentTarget).closest("li"),
                f = e[0] === d[0],
                h = f && c.collapsible,
                k = h ? b() : this._getPanelForTab(e),
                m = d.length ? this._getPanelForTab(d) : b();
            d = {
                oldTab: d,
                oldPanel: m,
                newTab: h ? b() : e,
                newPanel: k
            };
            a.preventDefault();
            e.hasClass("ui-state-disabled") || e.hasClass("ui-tabs-loading") || this.running || f && !c.collapsible || !1 === this._trigger("beforeActivate", a, d) || (c.active = h ? !1 : this.tabs.index(e), this.active = f ? b() :
                e, this.xhr && this.xhr.abort(), m.length || k.length || b.error("jQuery UI Tabs: Mismatching fragment identifier."), k.length && this.load(this.tabs.index(e), a), this._toggle(a, d))
        },
        _toggle: function(a, c) {
            function d() {
                f.running = !1;
                f._trigger("activate", a, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                h.length && f.options.show ? f._show(h, f.options.show, d) : (h.show(), d())
            }
            var f = this,
                h = c.newPanel,
                k = c.oldPanel;
            this.running = !0;
            k.length && this.options.hide ? this._hide(k, this.options.hide,
                function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), k.hide(), e());
            k.attr("aria-hidden", "true");
            c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            h.length && k.length ? c.oldTab.attr("tabIndex", -1) : h.length && this.tabs.filter(function() {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            h.attr("aria-hidden", "false");
            c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(a) {
            var c;
            a = this._findActive(a);
            a[0] !== this.active[0] && (a.length || (a = this.active), c = a.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return !1 === a ? b() : this.tabs.eq(a)
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tablist.unbind(this.eventNamespace);
            this.tabs.add(this.panels).each(function() {
                b.data(this, "ui-tabs-destroy") ? b(this).remove() : b(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function() {
                var a = b(this),
                    c = a.data("ui-tabs-aria-controls");
                c ? a.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(a) {
            var c = this.options.disabled;
            !1 !== c && (void 0 === a ? c = !1 : (a = this._getIndex(a), c = b.isArray(c) ? b.map(c, function(d) {
                return d !== a ? d : null
            }) : b.map(this.tabs, function(d, e) {
                return e !== a ? e : null
            })), this._setupDisabled(c))
        },
        disable: function(a) {
            var c =
                this.options.disabled;
            if (!0 !== c) {
                if (void 0 === a) c = !0;
                else {
                    if (a = this._getIndex(a), -1 !== b.inArray(a, c)) return;
                    c = b.isArray(c) ? b.merge([a], c).sort() : [a]
                }
                this._setupDisabled(c)
            }
        },
        load: function(a, c) {
            a = this._getIndex(a);
            var d = this,
                e = this.tabs.eq(a);
            a = e.find(".ui-tabs-anchor");
            var f = this._getPanelForTab(e),
                h = {
                    tab: e,
                    panel: f
                };
            this._isLocal(a[0]) || (this.xhr = b.ajax(this._ajaxSettings(a, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.success(function(k) {
                setTimeout(function() {
                    f.html(k);
                    d._trigger("load", c, h)
                }, 1)
            }).complete(function(k, m) {
                setTimeout(function() {
                    "abort" === m && d.panels.stop(!1, !0);
                    e.removeClass("ui-tabs-loading");
                    f.removeAttr("aria-busy");
                    k === d.xhr && delete d.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(a, c, d) {
            var e = this;
            return {
                url: a.attr("href"),
                beforeSend: function(f, h) {
                    return e._trigger("beforeLoad", c, b.extend({
                        jqXHR: f,
                        ajaxSettings: h
                    }, d))
                }
            }
        },
        _getPanelForTab: function(a) {
            a = b(a).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + a))
        }
    });
    b.widget("ui.tooltip", {
        version: "1.11.2",
        options: {
            content: function() {
                var a = b(this).attr("title") || "";
                return b("<a>").text(a).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(a, c) {
            var d = (a.attr("aria-describedby") || "").split(/\s+/);
            d.push(c);
            a.data("ui-tooltip-id", c).attr("aria-describedby", b.trim(d.join(" ")))
        },
        _removeDescribedBy: function(a) {
            var c = a.data("ui-tooltip-id"),
                d = (a.attr("aria-describedby") || "").split(/\s+/);
            c = b.inArray(c, d); - 1 !== c && d.splice(c, 1);
            a.removeData("ui-tooltip-id");
            (d = b.trim(d.join(" "))) ? a.attr("aria-describedby", d): a.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable();
            this.liveRegion = b("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(a, c) {
            var d = this;
            return "disabled" === a ? (this[c ? "_disable" : "_enable"](), this.options[a] = c, void 0) : (this._super(a, c), "content" === a && b.each(this.tooltips, function(e, f) {
                d._updateContent(f.element)
            }), void 0)
        },
        _disable: function() {
            var a = this;
            b.each(this.tooltips, function(c, d) {
                c = b.Event("blur");
                c.target = c.currentTarget = d.element[0];
                a.close(c, !0)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var c = b(this);
                c.is("[title]") && c.data("ui-tooltip-title", c.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var a = b(this);
                a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title"))
            })
        },
        open: function(a) {
            var c = this,
                d = b(a ? a.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), a && "mouseover" === a.type && d.parents().each(function() {
                var e, f = b(this);
                f.data("ui-tooltip-open") && (e = b.Event("blur"), e.target =
                    e.currentTarget = this, c.close(e, !0));
                f.attr("title") && (f.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: f.attr("title")
                }, f.attr("title", ""))
            }), this._updateContent(d, a))
        },
        _updateContent: function(a, c) {
            var d, e = this.options.content,
                f = this,
                h = c ? c.type : null;
            return "string" == typeof e ? this._open(c, a, e) : (d = e.call(a[0], function(k) {
                a.data("ui-tooltip-open") && f._delay(function() {
                    c && (c.type = h);
                    this._open(c, a, k)
                })
            }), d && this._open(c, a, d), void 0)
        },
        _open: function(a, c, d) {
            function e(A) {
                m.of = A;
                q.is(":hidden") || q.position(m)
            }
            var f, h, k, m = b.extend({}, this.options.position);
            if (d) {
                if (f = this._find(c)) return f.tooltip.find(".ui-tooltip-content").html(d), void 0;
                c.is("[title]") && (a && "mouseover" === a.type ? c.attr("title", "") : c.removeAttr("title"));
                f = this._tooltip(c);
                var q = f.tooltip;
                this._addDescribedBy(c, q.attr("id"));
                q.find(".ui-tooltip-content").html(d);
                this.liveRegion.children().hide();
                d.clone ? (k = d.clone(), k.removeAttr("id").find("[id]").removeAttr("id")) : k = d;
                b("<div>").html(k).appendTo(this.liveRegion);
                this.options.track && a &&
                    /^mouse/.test(a.type) ? (this._on(this.document, {
                        mousemove: e
                    }), e(a)) : q.position(b.extend({ of: c
                    }, this.options.position));
                q.hide();
                this._show(q, this.options.show);
                this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    q.is(":visible") && (e(m.of), clearInterval(h))
                }, b.fx.interval));
                this._trigger("open", a, {
                    tooltip: q
                });
                d = {
                    keyup: function(A) {
                        A.keyCode === b.ui.keyCode.ESCAPE && (A = b.Event(A), A.currentTarget = c[0], this.close(A, !0))
                    }
                };
                c[0] !== this.element[0] && (d.remove = function() {
                    this._removeTooltip(q)
                });
                a && "mouseover" !== a.type || (d.mouseleave = "close");
                a && "focusin" !== a.type || (d.focusout = "close");
                this._on(!0, c, d)
            }
        },
        close: function(a) {
            var c, d = this,
                e = b(a ? a.currentTarget : this.element),
                f = this._find(e);
            f && (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
                d._removeTooltip(b(this))
            }), e.removeData("ui-tooltip-open"), this._off(e,
                "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), a && "mouseleave" === a.type && b.each(this.parents, function(h, k) {
                b(k.element).attr("title", k.title);
                delete d.parents[h]
            }), f.closing = !0, this._trigger("close", a, {
                tooltip: c
            }), f.hiding || (f.closing = !1)))
        },
        _tooltip: function(a) {
            var c = b("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                d = c.uniqueId().attr("id");
            return b("<div>").addClass("ui-tooltip-content").appendTo(c),
                c.appendTo(this.document[0].body), this.tooltips[d] = {
                    element: a,
                    tooltip: c
                }
        },
        _find: function(a) {
            return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null
        },
        _removeTooltip: function(a) {
            a.remove();
            delete this.tooltips[a.attr("id")]
        },
        _destroy: function() {
            var a = this;
            b.each(this.tooltips, function(c, d) {
                var e = b.Event("blur");
                d = d.element;
                e.target = e.currentTarget = d[0];
                a.close(e, !0);
                b("#" + c).remove();
                d.data("ui-tooltip-title") && (d.attr("title") || d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    })
});
! function(b, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n() : b.NProgress = n()
}(this, function() {
    function b(D, I, M) {
        return I > D ? I : D > M ? M : D
    }

    function n(D, I, M) {
        var P;
        return P = "translate3d" === r.positionUsing ? {
            transform: "translate3d(" + 100 * (-1 + D) + "%,0,0)"
        } : "translate" === r.positionUsing ? {
            transform: "translate(" + 100 * (-1 + D) + "%,0)"
        } : {
            "margin-left": 100 * (-1 + D) + "%"
        }, P.transition = "all " + I + "ms " + M, P
    }

    function p(D, I) {
        return 0 <= ("string" == typeof D ? D : u(D)).indexOf(" " + I + " ")
    }

    function g(D,
        I) {
        var M = u(D),
            P = M + I;
        p(M, I) || (D.className = P.substring(1))
    }

    function l(D, I) {
        var M, P = u(D);
        p(D, I) && (M = P.replace(" " + I + " ", " "), D.className = M.substring(1, M.length - 1))
    }

    function u(D) {
        return (" " + (D.className || "") + " ").replace(/\s+/gi, " ")
    }
    var x = {
            version: "0.2.0"
        },
        r = x.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
    x.configure = function(D) {
        var I;
        for (I in D) {
            var M = D[I];
            void 0 !== M && D.hasOwnProperty(I) && (r[I] = M)
        }
        return this
    };
    x.status = null;
    x.set = function(D) {
        var I = x.isStarted();
        D = b(D, r.minimum, 1);
        x.status = 1 === D ? null : D;
        var M = x.render(!I),
            P = M.querySelector(r.barSelector),
            V = r.speed,
            W = r.easing;
        return M.offsetWidth, B(function(a) {
            "" === r.positionUsing && (r.positionUsing = x.getPositioningCSS());
            J(P, n(D, V, W));
            1 === D ? (J(M, {
                transition: "none",
                opacity: 1
            }), M.offsetWidth, setTimeout(function() {
                J(M, {
                    transition: "all " + V + "ms linear",
                    opacity: 0
                });
                setTimeout(function() {
                    x.remove();
                    a()
                }, V)
            }, V)) : setTimeout(a, V)
        }), this
    };
    x.isStarted = function() {
        return "number" == typeof x.status
    };
    x.start = function() {
        x.status || x.set(0);
        var D = function() {
            setTimeout(function() {
                x.status && (x.trickle(), D())
            }, r.trickleSpeed)
        };
        return r.trickle && D(), this
    };
    x.done = function(D) {
        return D || x.status ? x.inc(.3 + .5 * Math.random()).set(1) : this
    };
    x.inc = function(D) {
        var I = x.status;
        return I ? ("number" != typeof D && (D = (1 - I) * b(Math.random() * I, .1, .95)), I = b(I + D, 0, .994), x.set(I)) : x.start()
    };
    x.trickle =
        function() {
            return x.inc(Math.random() * r.trickleRate)
        };
    (function() {
        var D = 0,
            I = 0;
        x.promise = function(M) {
            return M && "resolved" !== M.state() ? (0 === I && x.start(), D++, I++, M.always(function() {
                I--;
                0 === I ? (D = 0, x.done()) : x.set((D - I) / D)
            }), this) : this
        }
    })();
    x.render = function(D) {
        if (x.isRendered()) return document.getElementById("nprogress");
        g(document.documentElement, "nprogress-busy");
        var I = document.createElement("div");
        I.id = "nprogress";
        I.innerHTML = r.template;
        var M = I.querySelector(r.barSelector);
        var P = D ? "-100" : 100 * (-1 +
            (x.status || 0));
        D = document.querySelector(r.parent);
        J(M, {
            transition: "all 0 linear",
            transform: "translate3d(" + P + "%,0,0)"
        });
        r.showSpinner || (M = I.querySelector(r.spinnerSelector)) && M && M.parentNode && M.parentNode.removeChild(M);
        return D != document.body && g(D, "nprogress-custom-parent"), D.appendChild(I), I
    };
    x.remove = function() {
        l(document.documentElement, "nprogress-busy");
        l(document.querySelector(r.parent), "nprogress-custom-parent");
        var D = document.getElementById("nprogress");
        D && D && D.parentNode && D.parentNode.removeChild(D)
    };
    x.isRendered = function() {
        return !!document.getElementById("nprogress")
    };
    x.getPositioningCSS = function() {
        var D = document.body.style,
            I = "WebkitTransform" in D ? "Webkit" : "MozTransform" in D ? "Moz" : "msTransform" in D ? "ms" : "OTransform" in D ? "O" : "";
        return I + "Perspective" in D ? "translate3d" : I + "Transform" in D ? "translate" : "margin"
    };
    var B = function() {
            function D() {
                var M = I.shift();
                M && M(D)
            }
            var I = [];
            return function(M) {
                I.push(M);
                1 == I.length && D()
            }
        }(),
        J = function() {
            function D(V) {
                return V.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi,
                    function(W, a) {
                        return a.toUpperCase()
                    })
            }

            function I(V) {
                V = D(V);
                var W;
                if (!(W = P[V])) {
                    W = P;
                    var a = V,
                        c;
                    a: {
                        var d = document.body.style;
                        if (!(V in d))
                            for (var e = M.length, f = V.charAt(0).toUpperCase() + V.slice(1); e--;)
                                if (c = M[e] + f, c in d) break a;c = V
                    }
                    W = W[a] = c
                }
                return W
            }
            var M = ["Webkit", "O", "Moz", "ms"],
                P = {};
            return function(V, W) {
                var a = arguments;
                if (2 == a.length)
                    for (e in W) {
                        var c = W[e];
                        if (void 0 !== c && W.hasOwnProperty(e)) {
                            a = V;
                            var d = e;
                            d = I(d);
                            a.style[d] = c
                        }
                    } else {
                        var e = V;
                        d = a[1];
                        a = a[2];
                        d = I(d);
                        e.style[d] = a
                    }
            }
        }();
    return x
});
var focusedElement, loginModalSuccessPage = "";
$(document).ready(function() {
    if ("undefined" === typeof mainRole || "guest" == mainRole) $("#employer").click(function() {
        $("#employer").addClass("active");
        $("#student").removeClass("active");
        $(".google_login").hide();
        $("#form-container .helper").hide()
    }), $("#student").click(function() {
        $("#student").addClass("active");
        $("#employer").removeClass("active");
        $(".google_login").show();
        $("#form-container .helper").show()
    }), $("#modal_employer").click(function() {
        $("#modal_employer").addClass("active");
        $("#modal_student").removeClass("active");
        $("#google-button-container").hide();
        $("#login-modal .helper").hide()
    }), $("#modal_student").click(function() {
        $("#modal_student").addClass("active");
        $("#modal_employer").removeClass("active");
        $("#google-button-container").show();
        $("#login-modal .helper").show()
    }), $("#login-modal").on("shown.bs.modal", function() {
        $(".grecaptcha-badge").css("visibility", "visible")
    }), $("#login-modal").on("hidden.bs.modal", function() {
        $(".grecaptcha-badge").css("visibility", "hidden")
    }), $("#login-form").submit(function(b) {
        b.preventDefault()
    }).validate({
        onfocusout: function(b) {
            let n =
                this;
            setTimeout(function() {
                n.element(b)
            }, 500)
        },
        rules: {
            email: {
                required: !0,
                email: !0
            },
            password: {
                minlength: 6,
                required: !0
            }
        },
        highlight: function(b) {
            $(b).closest(".form-group").addClass("has-error");
            $(b).closest(".form-group").removeClass("has-success");
            $(b).closest("input").addClass("error");
            $(b).closest("input").removeClass("valid")
        },
        success: function(b) {
            $(b).closest(".form-group").addClass("has-success");
            $(b).closest(".form-group").removeClass("has-error");
            $(b).closest("input").addClass("valid");
            $(b).closest("input").removeClass("error")
        },
        submitHandler: function() {
            grecaptcha.enterprise.ready(function() {
                grecaptcha.enterprise.execute(is_g_recaptcha, {
                    action: "login_submit"
                }).then(function(b) {
                    loginFormSubmit(b, "login_submit")
                })
            });
            return !1
        }
    }), $("#modal-login-form").validate({
        onfocusout: function(b) {
            let n = this;
            setTimeout(function() {
                n.element(b)
            }, 500)
        },
        rules: {
            email: {
                required: !0,
                email: !0
            },
            password: {
                minlength: 6,
                required: !0
            }
        },
        highlight: function(b) {
            $(b).closest(".form-group").addClass("has-error");
            $(b).closest(".form-group").removeClass("has-success");
            $(b).closest("input").addClass("error");
            $(b).closest("input").removeClass("valid")
        },
        success: function(b) {
            $(b).closest(".form-group").addClass("has-success");
            $(b).closest(".form-group").removeClass("has-error");
            $(b).closest("input").addClass("valid");
            $(b).closest("input").removeClass("error")
        },
        submitHandler: function() {
            if ("undefined" === typeof view || "login/forgot_password" != view && "login/login" != view) return grecaptcha.enterprise.ready(function() {
                grecaptcha.enterprise.execute(is_g_recaptcha, {
                    action: "modal_login_submit"
                }).then(function(b) {
                    modalLoginFormSubmit(b,
                        "modal_login_submit")
                })
            }), !1;
            modalLoginFormSubmit()
        }
    });
    $("#employer").click(function() {
        $("#employer").addClass("active");
        $("#student").removeClass("active");
        $("#google-button-container").hide();
        $("#heading-login-student").hide();
        $("#heading-login-employer").show();
        $("#line-break").hide()
    });
    $("#student").click(function() {
        $("#student").addClass("active");
        $("#employer").removeClass("active");
        $("#google-button-container").show();
        $("#heading-login-student").show();
        $("#heading-login-employer").hide();
        $("#line-break").show()
    });
    $(document).keypress(function(b) {
        if ($("#semi_error_modal").is(":visible") && 13 == b.which) {
            $("#semi_error_modal").hide();
            try {
                focusedElement.focus()
            } catch (n) {}
        }
    })
});
var modalLoginFormSubmit = function(b = null, n = null) {
        var p = $("#modal-login-form").serializeArray();
        "undefined" != typeof b && null != b && (p.push({
            name: "g-recaptcha-response",
            value: b
        }), p.push({
            name: "action",
            value: n
        }));
        "undefined" != typeof utm_campaign && "em_jobs" === utm_campaign && (loginModalSuccessPage = "/job_form");
        b = "/login/verify_ajax/user" + loginModalSuccessPage;
        NProgress.start();
        $(".loading_image").show();
        $.ajax(b, {
            data: p,
            success: login_success,
            error: onError,
            type: "POST"
        })
    },
    loginFormSubmit = function(b, n) {
        var p =
            $("#login-form").serializeArray();
        p.push({
            name: "g-recaptcha-response",
            value: b
        });
        p.push({
            name: "action",
            value: n
        });
        b = "/login/verify_ajax/" + role + "/" + successPage;
        NProgress.start();
        $(".loading_image").show();
        $.ajax(b, {
            data: p,
            success: login_success,
            error: onError,
            type: "POST"
        })
    },
    login_success = function(b) {
        try {
            NProgress.done(), b.success ? "undefined" !== b.first_year_campaign && b.first_year_campaign ? throw_success(b.successMsg, b.successPage) : window.location.href = b.successPage : (focusedElement = $(document.activeElement),
                focusedElement.is("input") && focusedElement.blur(), "auto_block" === b.errorCode ? ("unpaid" == b.errorThrown ? ($("#heading_content1").html("Attempting to offer unpaid internships to applicants"), $("#error_content1").html("Pitching unpaid internships, except in the case of NGOs or niche roles (e.g.  experimental physics, or aerospace engineering), is not allowed on Internshala."), $("#heading_content2").hide(), $("#error_content2").hide()) : "followers/signup" == b.errorThrown ? ($("#heading_content1").html("Attempting to solicit followers/sign ups for your company"),
                    $("#error_content1").html("Internshala does not allow employers to send assignments that ask applicants to promote the employer\u2019s social media pages or platform. Assignments sent to applicants should assess suitability for the role."), $("#heading_content2").hide(), $("#error_content2").hide()) : ($("#heading_content1").html("\u2022 Attempting to offer unpaid internships to applicants"), $("#error_content1").html("Pitching unpaid internships, except in the case of NGOs or niche roles (e.g.  experimental physics, or aerospace engineering), is not allowed on Internshala."),
                    $("#heading_content2").html("\u2022 Attempting to solicit followers/sign ups for your company"), $("#error_content2").html("Internshala does not allow employers to send assignments that ask applicants to promote the employer\u2019s social media pages or platform. Assignments sent to applicants should assess suitability for the role.")), $("#login-modal").modal("hide"), $(".loading_image").hide(), $("#employer_blocked_error_modal").modal("show")) : "undefined" !== typeof b.errorPage ? throw_error(b.errorThrown,
                    b.errorPage) : throw_error(b.errorThrown))
        } catch (n) {
            throw_error(n), NProgress.done(), $(".loading_image").hide()
        }
    };
$(document).ready(function() {
    window.location != window.parent.location && ($("#header").hide(), $("#footer").hide());
    "undefined" !== typeof browser_name && "opera" == browser_name && ("undefined" !== typeof is_android && is_android ? general_ribbon('Internshala website does not support Opera Mini, please use Firefox or Chrome or download our <a href="https://play.google.com/store/apps/details?id=com.internshala.app&hl=en" target="_blank" style="color:#FFF; text-decoration:underline;">Android app</a>  on Playstore.') : "undefined" !==
        typeof is_mobile && is_mobile && general_ribbon("Internshala website does not support Opera Mini, please use Firefox or Chrome. "));
    "undefined" !== typeof view && "home" == view && (call_autocomplete_without_ajax("internship_modal_search_input", internship_data_for_search), call_autocomplete_without_ajax("fresher_job_modal_search_input", fresher_job_data_for_search));
    "undefined" !== typeof to_show_subscription_activated_message && to_show_subscription_activated_message && (general_ribbon("Your Premium Plan is confirmed! Please add your preferences below to start receiving latest internship/job alerts in your inbox."),
        delete_cookie("in/ternshalaActivationSuccessMessageCookie"));
    maintenance_ribbon();
    "admin" !== mainRole && "tnp" !== mainRole && "guest" !== mainRole && $.ajax("/chat/get_unread_chat_message_count", {
        data: {},
        success: get_unread_chat_message_count_success,
        error: {},
        type: "POST"
    })
});
var get_unread_chat_message_count_success = function(b) {
    try {
        b.message_count_to_show && (b.message_count_to_show ? ($(".header_chat_notification .header_chat_notification_unread_count").css("display", ""), $(".header_chat_notification .header_chat_notification_unread_count .notification-label").text(b.message_count_to_show)) : $(".header_chat_notification .header_chat_notification_unread_count").css("display", "none"), $(".header_chat_notification .header_chat_notification_unread_count .notification-label").hasClass(b.msg_count_class_name) ||
            $(".header_chat_notification .header_chat_notification_unread_count .notification-label").addClass(b.msg_count_class_name))
    } catch (n) {}
};
! function(b, n) {
    "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n()
}(0, function() {
    function b(p) {
        function g(M) {
            return !!(M && M !== document && "HTML" !== M.nodeName && "BODY" !== M.nodeName && "classList" in M && "contains" in M.classList)
        }

        function l(M) {
            M.classList.contains("focus-visible") || (M.classList.add("focus-visible"), M.setAttribute("data-focus-visible-added", ""))
        }

        function u(M) {
            B = !1
        }

        function x() {
            document.addEventListener("mousemove", r);
            document.addEventListener("mousedown",
                r);
            document.addEventListener("mouseup", r);
            document.addEventListener("pointermove", r);
            document.addEventListener("pointerdown", r);
            document.addEventListener("pointerup", r);
            document.addEventListener("touchmove", r);
            document.addEventListener("touchstart", r);
            document.addEventListener("touchend", r)
        }

        function r(M) {
            M.target.nodeName && "html" === M.target.nodeName.toLowerCase() || (B = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mousedown", r), document.removeEventListener("mouseup", r),
                document.removeEventListener("pointermove", r), document.removeEventListener("pointerdown", r), document.removeEventListener("pointerup", r), document.removeEventListener("touchmove", r), document.removeEventListener("touchstart", r), document.removeEventListener("touchend", r))
        }
        var B = !0,
            J = !1,
            D = null,
            I = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0
            };
        document.addEventListener("keydown", function(M) {
            M.metaKey || M.altKey || M.ctrlKey ||
                (g(p.activeElement) && l(p.activeElement), B = !0)
        }, !0);
        document.addEventListener("mousedown", u, !0);
        document.addEventListener("pointerdown", u, !0);
        document.addEventListener("touchstart", u, !0);
        document.addEventListener("visibilitychange", function(M) {
            "hidden" == document.visibilityState && (J && (B = !0), x())
        }, !0);
        x();
        p.addEventListener("focus", function(M) {
            var P, V, W;
            g(M.target) && (B || (P = M.target, V = P.type, "INPUT" == (W = P.tagName) && I[V] && !P.readOnly || "TEXTAREA" == W && !P.readOnly || P.isContentEditable)) && l(M.target)
        }, !0);
        p.addEventListener("blur", function(M) {
            var P;
            g(M.target) && (M.target.classList.contains("focus-visible") || M.target.hasAttribute("data-focus-visible-added")) && (J = !0, window.clearTimeout(D), D = window.setTimeout(function() {
                J = !1;
                window.clearTimeout(D)
            }, 100), (P = M.target).hasAttribute("data-focus-visible-added") && (P.classList.remove("focus-visible"), P.removeAttribute("data-focus-visible-added")))
        }, !0);
        p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host ? p.host.setAttribute("data-js-focus-visible", "") : p.nodeType ===
            Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
    }
    if ("undefined" != typeof window && "undefined" != typeof document) {
        window.applyFocusVisiblePolyfill = b;
        try {
            var n = new CustomEvent("focus-visible-polyfill-ready")
        } catch (p) {
            (n = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
        }
        window.dispatchEvent(n)
    }
    "undefined" != typeof document && b(document)
});
(function(b) {
    function n(r) {
        var B = r.data;
        r.isDefaultPrevented() || (r.preventDefault(), b(this).ajaxSubmit(B))
    }

    function p(r) {
        var B = r.target,
            J = b(B);
        if (!J.is("[type=submit],[type=image]")) {
            B = J.closest("[type=submit]");
            if (0 === B.length) return;
            B = B[0]
        }
        var D = this;
        D.clk = B;
        "image" == B.type && (void 0 !== r.offsetX ? (D.clk_x = r.offsetX, D.clk_y = r.offsetY) : "function" == typeof b.fn.offset ? (J = J.offset(), D.clk_x = r.pageX - J.left, D.clk_y = r.pageY - J.top) : (D.clk_x = r.pageX - B.offsetLeft, D.clk_y = r.pageY - B.offsetTop));
        setTimeout(function() {
            D.clk =
                D.clk_x = D.clk_y = null
        }, 100)
    }

    function g() {
        if (b.fn.ajaxSubmit.debug) {
            var r = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(r) : window.opera && window.opera.postError && window.opera.postError(r)
        }
    }
    var l = void 0 !== b("<input type='file'/>").get(0).files;
    var u = void 0 !== window.FormData;
    var x = !!b.fn.prop;
    b.fn.attr2 = function() {
        if (!x) return this.attr.apply(this, arguments);
        var r = this.prop.apply(this, arguments);
        return r && r.jquery || "string" === typeof r ? r :
            this.attr.apply(this, arguments)
    };
    b.fn.ajaxSubmit = function(r) {
        function B(m) {
            m = b.param(m).split("&");
            var q = m.length,
                A = [],
                E;
            for (E = 0; E < q; E++) {
                m[E] = m[E].replace(/\+/g, " ");
                var G = m[E].split("=");
                A.push([decodeURIComponent(G[0]), decodeURIComponent(G[1])])
            }
            return A
        }

        function J(m) {
            for (var q = new FormData, A = 0; A < m.length; A++) q.append(m[A].name, m[A].value);
            if (r.extraData)
                for (m = B(r.extraData), A = 0; A < m.length; A++) m[A] && q.append(m[A][0], m[A][1]);
            r.data = null;
            A = b.extend(!0, {}, b.ajaxSettings, r, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: M || "POST"
            });
            r.uploadProgress && (A.xhr = function() {
                var G = jQuery.ajaxSettings.xhr();
                G.upload && G.upload.addEventListener("progress", function(F) {
                    var z = 0,
                        t = F.loaded || F.position,
                        v = F.total;
                    F.lengthComputable && (z = Math.ceil(t / v * 100));
                    r.uploadProgress(F, t, v, z)
                }, !1);
                return G
            });
            A.data = null;
            var E = A.beforeSend;
            A.beforeSend = function(G, F) {
                F.data = q;
                E && E.call(this, G, F)
            };
            return b.ajax(A)
        }

        function D(m) {
            function q(T) {
                var U = null;
                try {
                    T.contentWindow && (U = T.contentWindow.document)
                } catch (aa) {
                    g("cannot get iframe.contentWindow document: " +
                        aa)
                }
                if (U) return U;
                try {
                    U = T.contentDocument ? T.contentDocument : T.document
                } catch (aa) {
                    g("cannot get iframe.contentDocument: " + aa), U = T.document
                }
                return U
            }

            function A() {
                function T() {
                    try {
                        var ba = q(K).readyState;
                        g("state = " + ba);
                        ba && "uninitialized" == ba.toLowerCase() && setTimeout(T, 50)
                    } catch (ca) {
                        g("Server abort: ", ca, " (", ca.name, ")"), E(2), v && clearTimeout(v), v = void 0
                    }
                }
                var U = I.attr2("target"),
                    aa = I.attr2("action");
                G.setAttribute("target", H);
                M || G.setAttribute("method", "POST");
                aa != w.url && G.setAttribute("action", w.url);
                w.skipEncodingOverride || M && !/post/i.test(M) || I.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                w.timeout && (v = setTimeout(function() {
                    t = !0;
                    E(1)
                }, w.timeout));
                var Y = [];
                try {
                    if (w.extraData)
                        for (var Q in w.extraData) w.extraData.hasOwnProperty(Q) && (b.isPlainObject(w.extraData[Q]) && w.extraData[Q].hasOwnProperty("name") && w.extraData[Q].hasOwnProperty("value") ? Y.push(b('<input type="hidden" name="' + w.extraData[Q].name + '">').val(w.extraData[Q].value).appendTo(G)[0]) : Y.push(b('<input type="hidden" name="' +
                            Q + '">').val(w.extraData[Q]).appendTo(G)[0]));
                    w.iframeTarget || (L.appendTo("body"), K.attachEvent ? K.attachEvent("onload", E) : K.addEventListener("load", E, !1));
                    setTimeout(T, 15);
                    try {
                        G.submit()
                    } catch (ba) {
                        document.createElement("form").submit.apply(G)
                    }
                } finally {
                    G.setAttribute("action", aa), U ? G.setAttribute("target", U) : I.removeAttr("target"), b(Y).remove()
                }
            }

            function E(T) {
                if (!C.aborted && !S)
                    if (O = q(K), O || (g("cannot access response document"), T = 2), 1 === T && C) C.abort("timeout"), y.reject(C, "timeout");
                    else if (2 == T && C) C.abort("server abort"),
                    y.reject(C, "error", "server abort");
                else if (O && O.location.href != w.iframeSrc || t) {
                    K.detachEvent ? K.detachEvent("onload", E) : K.removeEventListener("load", E, !1);
                    T = "success";
                    var U;
                    try {
                        if (t) throw "timeout";
                        var aa = "xml" == w.dataType || O.XMLDocument || b.isXMLDoc(O);
                        g("isXml=" + aa);
                        if (!aa && window.opera && (null === O.body || !O.body.innerHTML) && --R) {
                            g("requeing onLoad callback, DOM not available");
                            setTimeout(E, 250);
                            return
                        }
                        var Y = O.body ? O.body : O.documentElement;
                        C.responseText = Y ? Y.innerHTML : null;
                        C.responseXML = O.XMLDocument ?
                            O.XMLDocument : O;
                        aa && (w.dataType = "xml");
                        C.getResponseHeader = function(ha) {
                            return {
                                "content-type": w.dataType
                            }[ha]
                        };
                        Y && (C.status = Number(Y.getAttribute("status")) || C.status, C.statusText = Y.getAttribute("statusText") || C.statusText);
                        var Q = (w.dataType || "").toLowerCase(),
                            ba = /(json|script|text)/.test(Q);
                        if (ba || w.textarea) {
                            var ca = O.getElementsByTagName("textarea")[0];
                            if (ca) C.responseText = ca.value, C.status = Number(ca.getAttribute("status")) || C.status, C.statusText = ca.getAttribute("statusText") || C.statusText;
                            else if (ba) {
                                var da =
                                    O.getElementsByTagName("pre")[0],
                                    fa = O.getElementsByTagName("body")[0];
                                da ? C.responseText = da.textContent ? da.textContent : da.innerText : fa && (C.responseText = fa.textContent ? fa.textContent : fa.innerText)
                            }
                        } else "xml" == Q && !C.responseXML && C.responseText && (C.responseXML = X(C.responseText));
                        try {
                            N = ea(C, Q, w)
                        } catch (ha) {
                            T = "parsererror", C.error = U = ha || T
                        }
                    } catch (ha) {
                        g("error caught: ", ha), T = "error", C.error = U = ha || T
                    }
                    C.aborted && (g("upload aborted"), T = null);
                    C.status && (T = 200 <= C.status && 300 > C.status || 304 === C.status ? "success" :
                        "error");
                    "success" === T ? (w.success && w.success.call(w.context, N, "success", C), y.resolve(C.responseText, "success", C), z && b.event.trigger("ajaxSuccess", [C, w])) : T && (void 0 === U && (U = C.statusText), w.error && w.error.call(w.context, C, T, U), y.reject(C, "error", U), z && b.event.trigger("ajaxError", [C, w, U]));
                    z && b.event.trigger("ajaxComplete", [C, w]);
                    z && !--b.active && b.event.trigger("ajaxStop");
                    w.complete && w.complete.call(w.context, C, T);
                    S = !0;
                    w.timeout && clearTimeout(v);
                    setTimeout(function() {
                        w.iframeTarget || L.remove();
                        C.responseXML =
                            null
                    }, 100)
                }
            }
            var G = I[0],
                F, z, t, v, y = b.Deferred();
            if (m)
                for (F = 0; F < W.length; F++) m = b(W[F]), x ? m.prop("disabled", !1) : m.removeAttr("disabled");
            var w = b.extend(!0, {}, b.ajaxSettings, r);
            w.context = w.context || w;
            var H = "jqFormIO" + (new Date).getTime();
            if (w.iframeTarget) {
                var L = b(w.iframeTarget);
                (F = L.attr2("name")) ? H = F: L.attr2("name", H)
            } else L = b('<iframe name="' + H + '" src="' + w.iframeSrc + '" />'), L.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            });
            var K = L[0];
            var C = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(T) {
                    var U = "timeout" === T ? "timeout" : "aborted";
                    g("aborting upload... " + U);
                    this.aborted = 1;
                    try {
                        K.contentWindow.document.execCommand && K.contentWindow.document.execCommand("Stop")
                    } catch (aa) {}
                    L.attr("src", w.iframeSrc);
                    C.error = U;
                    w.error && w.error.call(w.context, C, U, T);
                    z && b.event.trigger("ajaxError", [C, w, U]);
                    w.complete && w.complete.call(w.context, C, U)
                }
            };
            (z = w.global) && 0 === b.active++ &&
                b.event.trigger("ajaxStart");
            z && b.event.trigger("ajaxSend", [C, w]);
            if (w.beforeSend && !1 === w.beforeSend.call(w.context, C, w)) return w.global && b.active--, y.reject(), y;
            if (C.aborted) return y.reject(), y;
            (m = G.clk) && (F = m.name) && !m.disabled && (w.extraData = w.extraData || {}, w.extraData[F] = m.value, "image" == m.type && (w.extraData[F + ".x"] = G.clk_x, w.extraData[F + ".y"] = G.clk_y));
            m = b("meta[name=csrf-token]").attr("content");
            (F = b("meta[name=csrf-param]").attr("content")) && m && (w.extraData = w.extraData || {}, w.extraData[F] = m);
            w.forceSync ? A() : setTimeout(A, 10);
            var N, O, R = 50,
                S, X = b.parseXML || function(T, U) {
                    window.ActiveXObject ? (U = new ActiveXObject("Microsoft.XMLDOM"), U.async = "false", U.loadXML(T)) : U = (new DOMParser).parseFromString(T, "text/xml");
                    return U && U.documentElement && "parsererror" != U.documentElement.nodeName ? U : null
                },
                Z = b.parseJSON || function(T) {
                    return window.eval("(" + T + ")")
                },
                ea = function(T, U, aa) {
                    var Y = T.getResponseHeader("content-type") || "",
                        Q = "xml" === U || !U && 0 <= Y.indexOf("xml");
                    T = Q ? T.responseXML : T.responseText;
                    Q && "parsererror" ===
                        T.documentElement.nodeName && b.error && b.error("parsererror");
                    aa && aa.dataFilter && (T = aa.dataFilter(T, U));
                    "string" === typeof T && ("json" === U || !U && 0 <= Y.indexOf("json") ? T = Z(T) : ("script" === U || !U && 0 <= Y.indexOf("javascript")) && b.globalEval(T));
                    return T
                };
            return y
        }
        if (!this.length) return g("ajaxSubmit: skipping submit process - no element selected"), this;
        var I = this;
        "function" == typeof r && (r = {
            success: r
        });
        var M = r.type || this.attr2("method");
        var P = r.url || this.attr2("action");
        (P = (P = "string" === typeof P ? b.trim(P) : "") ||
            window.location.href || "") && (P = (P.match(/^([^#]+)/) || [])[1]);
        r = b.extend(!0, {
            url: P,
            success: b.ajaxSettings.success,
            type: M || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, r);
        P = {};
        this.trigger("form-pre-serialize", [this, r, P]);
        if (P.veto) return g("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (r.beforeSerialize && !1 === r.beforeSerialize(this, r)) return g("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var V = r.traditional;
        void 0 ===
            V && (V = b.ajaxSettings.traditional);
        var W = [],
            a = this.formToArray(r.semantic, W);
        if (r.data) {
            r.extraData = r.data;
            var c = b.param(r.data, V)
        }
        if (r.beforeSubmit && !1 === r.beforeSubmit(a, this, r)) return g("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        this.trigger("form-submit-validate", [a, this, r, P]);
        if (P.veto) return g("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        P = b.param(a, V);
        c && (P = P ? P + "&" + c : c);
        "GET" == r.type.toUpperCase() ? (r.url += (0 <= r.url.indexOf("?") ? "&" : "?") + P, r.data = null) :
            r.data = P;
        var d = [];
        r.resetForm && d.push(function() {
            I.resetForm()
        });
        r.clearForm && d.push(function() {
            I.clearForm(r.includeHidden)
        });
        if (!r.dataType && r.target) {
            var e = r.success || function() {};
            d.push(function(m) {
                var q = r.replaceTarget ? "replaceWith" : "html";
                b(r.target)[q](m).each(e, arguments)
            })
        } else r.success && d.push(r.success);
        r.success = function(m, q, A) {
            for (var E = r.context || this, G = 0, F = d.length; G < F; G++) d[G].apply(E, [m, q, A || I, I])
        };
        if (r.error) {
            var f = r.error;
            r.error = function(m, q, A) {
                f.apply(r.context || this, [m, q, A,
                    I
                ])
            }
        }
        if (r.complete) {
            var h = r.complete;
            r.complete = function(m, q) {
                h.apply(r.context || this, [m, q, I])
            }
        }
        c = 0 < b('input[type=file]:enabled[value!=""]', this).length;
        P = "multipart/form-data" == I.attr("enctype") || "multipart/form-data" == I.attr("encoding");
        V = l && u;
        g("fileAPI :" + V);
        var k;
        !1 !== r.iframe && (r.iframe || (c || P) && !V) ? r.closeKeepAlive ? b.get(r.closeKeepAlive, function() {
            k = D(a)
        }) : k = D(a) : k = (c || P) && V ? J(a) : b.ajax(r);
        I.removeData("jqxhr").data("jqxhr", k);
        for (c = 0; c < W.length; c++) W[c] = null;
        this.trigger("form-submit-notify", [this, r]);
        return this
    };
    b.fn.ajaxForm = function(r) {
        r = r || {};
        r.delegation = r.delegation && b.isFunction(b.fn.on);
        if (!r.delegation && 0 === this.length) {
            var B = this.selector,
                J = this.context;
            if (!b.isReady && B) return g("DOM not ready, queuing ajaxForm"), b(function() {
                b(B, J).ajaxForm(r)
            }), this;
            g("terminating; zero elements found by selector" + (b.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return r.delegation ? (b(document).off("submit.form-plugin", this.selector, n).off("click.form-plugin", this.selector, p).on("submit.form-plugin",
            this.selector, r, n).on("click.form-plugin", this.selector, r, p), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, n).bind("click.form-plugin", r, p)
    };
    b.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    b.fn.formToArray = function(r, B) {
        var J = [];
        if (0 === this.length) return J;
        var D = this[0],
            I = r ? D.getElementsByTagName("*") : D.elements;
        if (!I) return J;
        var M, P, V;
        var W = 0;
        for (V = I.length; W < V; W++) {
            var a = I[W];
            if ((M = a.name) && !a.disabled)
                if (r && D.clk && "image" == a.type) D.clk == a &&
                    (J.push({
                        name: M,
                        value: b(a).val(),
                        type: a.type
                    }), J.push({
                        name: M + ".x",
                        value: D.clk_x
                    }, {
                        name: M + ".y",
                        value: D.clk_y
                    }));
                else if ((P = b.fieldValue(a, !0)) && P.constructor == Array) {
                B && B.push(a);
                var c = 0;
                for (a = P.length; c < a; c++) J.push({
                    name: M,
                    value: P[c]
                })
            } else if (l && "file" == a.type)
                if (B && B.push(a), P = a.files, P.length)
                    for (c = 0; c < P.length; c++) J.push({
                        name: M,
                        value: P[c],
                        type: a.type
                    });
                else J.push({
                    name: M,
                    value: "",
                    type: a.type
                });
            else null !== P && "undefined" != typeof P && (B && B.push(a), J.push({
                name: M,
                value: P,
                type: a.type,
                required: a.required
            }))
        }!r &&
            D.clk && (r = b(D.clk), B = r[0], (M = B.name) && !B.disabled && "image" == B.type && (J.push({
                name: M,
                value: r.val()
            }), J.push({
                name: M + ".x",
                value: D.clk_x
            }, {
                name: M + ".y",
                value: D.clk_y
            })));
        return J
    };
    b.fn.formSerialize = function(r) {
        return b.param(this.formToArray(r))
    };
    b.fn.fieldSerialize = function(r) {
        var B = [];
        this.each(function() {
            var J = this.name;
            if (J) {
                var D = b.fieldValue(this, r);
                if (D && D.constructor == Array)
                    for (var I = 0, M = D.length; I < M; I++) B.push({
                        name: J,
                        value: D[I]
                    });
                else null !== D && "undefined" != typeof D && B.push({
                    name: this.name,
                    value: D
                })
            }
        });
        return b.param(B)
    };
    b.fn.fieldValue = function(r) {
        for (var B = [], J = 0, D = this.length; J < D; J++) {
            var I = b.fieldValue(this[J], r);
            null === I || "undefined" == typeof I || I.constructor == Array && !I.length || (I.constructor == Array ? b.merge(B, I) : B.push(I))
        }
        return B
    };
    b.fieldValue = function(r, B) {
        var J = r.name,
            D = r.type,
            I = r.tagName.toLowerCase();
        void 0 === B && (B = !0);
        if (B && (!J || r.disabled || "reset" == D || "button" == D || ("checkbox" == D || "radio" == D) && !r.checked || ("submit" == D || "image" == D) && r.form && r.form.clk != r || "select" == I && -1 ==
                r.selectedIndex)) return null;
        if ("select" == I) {
            I = r.selectedIndex;
            if (0 > I) return null;
            B = [];
            r = r.options;
            J = (D = "select-one" == D) ? I + 1 : r.length;
            for (I = D ? I : 0; I < J; I++) {
                var M = r[I];
                if (M.selected) {
                    var P = M.value;
                    P || (P = M.attributes && M.attributes.value && !M.attributes.value.specified ? M.text : M.value);
                    if (D) return P;
                    B.push(P)
                }
            }
            return B
        }
        return b(r).val()
    };
    b.fn.clearForm = function(r) {
        return this.each(function() {
            b("input,select,textarea", this).clearFields(r)
        })
    };
    b.fn.clearFields = b.fn.clearInputs = function(r) {
        var B = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var J = this.type,
                D = this.tagName.toLowerCase();
            B.test(J) || "textarea" == D ? this.value = "" : "checkbox" == J || "radio" == J ? this.checked = !1 : "select" == D ? this.selectedIndex = -1 : "file" == J ? /MSIE/.test(navigator.userAgent) ? b(this).replaceWith(b(this).clone(!0)) : b(this).val("") : r && (!0 === r && /hidden/.test(J) || "string" == typeof r && b(this).is(r)) && (this.value = "")
        })
    };
    b.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) &&
            this.reset()
        })
    };
    b.fn.enable = function(r) {
        void 0 === r && (r = !0);
        return this.each(function() {
            this.disabled = !r
        })
    };
    b.fn.selected = function(r) {
        void 0 === r && (r = !0);
        return this.each(function() {
            var B = this.type;
            "checkbox" == B || "radio" == B ? this.checked = r : "option" == this.tagName.toLowerCase() && (B = b(this).parent("select"), r && B[0] && "select-one" == B[0].type && B.find("option").selected(!1), this.selected = r)
        })
    };
    b.fn.ajaxSubmit.debug = !1
})(jQuery);
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0);
(function(b, n, p) {
    function g(v) {
        var y = n.console;
        u[v] || (u[v] = !0, b.migrateWarnings.push(v), y && y.warn && !b.migrateMute && (y.warn("JQMIGRATE: " + v), b.migrateTrace && y.trace && y.trace()))
    }

    function l(v, y, w, H) {
        if (Object.defineProperty) try {
            return Object.defineProperty(v, y, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return g(H), w
                },
                set: function(L) {
                    g(H);
                    w = L
                }
            }), p
        } catch (L) {}
        b._definePropertyBroken = !0;
        v[y] = w
    }
    var u = {};
    b.migrateWarnings = [];
    !b.migrateMute && n.console && n.console.log && n.console.log("JQMIGRATE: Logging is active");
    b.migrateTrace === p && (b.migrateTrace = !0);
    b.migrateReset = function() {
        u = {};
        b.migrateWarnings.length = 0
    };
    "BackCompat" === document.compatMode && g("jQuery is not compatible with Quirks Mode");
    var x = b("<input/>", {
            size: 1
        }).attr("size") && b.attrFn,
        r = b.attr,
        B = b.attrHooks.value && b.attrHooks.value.get || function() {
            return null
        },
        J = b.attrHooks.value && b.attrHooks.value.set || function() {
            return p
        },
        D = /^(?:input|button)$/i,
        I = /^[238]$/,
        M = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        P = /^(?:checked|selected)$/i;
    l(b, "attrFn", x || {}, "jQuery.attrFn is deprecated");
    b.attr = function(v, y, w, H) {
        var L = y.toLowerCase(),
            K = v && v.nodeType;
        return H && (4 > r.length && g("jQuery.fn.attr( props, pass ) is deprecated"), v && !I.test(K) && (x ? y in x : b.isFunction(b.fn[y]))) ? b(v)[y](w) : ("type" === y && w !== p && D.test(v.nodeName) && v.parentNode && g("Can't change the 'type' of an input or button in IE 6/7/8"), !b.attrHooks[L] && M.test(L) && (b.attrHooks[L] = {
            get: function(C, N) {
                var O, R = b.prop(C, N);
                return !0 === R || "boolean" != typeof R &&
                    (O = C.getAttributeNode(N)) && !1 !== O.nodeValue ? N.toLowerCase() : p
            },
            set: function(C, N, O) {
                var R;
                return !1 === N ? b.removeAttr(C, O) : (R = b.propFix[O] || O, R in C && (C[R] = !0), C.setAttribute(O, O.toLowerCase())), O
            }
        }, P.test(L) && g("jQuery.fn.attr('" + L + "') may use property instead of attribute")), r.call(b, v, y, w))
    };
    b.attrHooks.value = {
        get: function(v, y) {
            var w = (v.nodeName || "").toLowerCase();
            return "button" === w ? B.apply(this, arguments) : ("input" !== w && "option" !== w && g("jQuery.fn.attr('value') no longer gets properties"), y in v ? v.value :
                null)
        },
        set: function(v, y) {
            var w = (v.nodeName || "").toLowerCase();
            return "button" === w ? J.apply(this, arguments) : ("input" !== w && "option" !== w && g("jQuery.fn.attr('value', val) no longer sets properties"), v.value = y, p)
        }
    };
    var V, W, a = b.fn.init,
        c = b.parseJSON,
        d = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    b.fn.init = function(v, y, w) {
        var H;
        return v && "string" == typeof v && !b.isPlainObject(y) && (H = d.exec(b.trim(v))) && H[0] && ("<" !== v.charAt(0) && g("$(html) HTML strings must start with '<' character"), H[3] && g("$(html) HTML text after last tag is ignored"),
            "#" === H[0].charAt(0) && (g("HTML string cannot start with a '#' character"), b.error("JQMIGRATE: Invalid selector string (XSS)")), y && y.context && (y = y.context), b.parseHTML) ? a.call(this, b.parseHTML(H[2], y, !0), y, w) : a.apply(this, arguments)
    };
    b.fn.init.prototype = b.fn;
    b.parseJSON = function(v) {
        return v || null === v ? c.apply(this, arguments) : (g("jQuery.parseJSON requires a valid JSON string"), null)
    };
    b.uaMatch = function(v) {
        v = v.toLowerCase();
        v = /(chrome)[ \/]([\w.]+)/.exec(v) || /(webkit)[ \/]([\w.]+)/.exec(v) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(v) ||
            /(msie) ([\w.]+)/.exec(v) || 0 > v.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(v) || [];
        return {
            browser: v[1] || "",
            version: v[2] || "0"
        }
    };
    b.browser || (V = b.uaMatch(navigator.userAgent), W = {}, V.browser && (W[V.browser] = !0, W.version = V.version), W.chrome ? W.webkit = !0 : W.webkit && (W.safari = !0), b.browser = W);
    l(b, "browser", b.browser, "jQuery.browser is deprecated");
    b.sub = function() {
        function v(w, H) {
            return new v.fn.init(w, H)
        }
        b.extend(!0, v, this);
        v.superclass = this;
        v.fn = v.prototype = this();
        v.fn.constructor = v;
        v.sub =
            this.sub;
        v.fn.init = function(w, H) {
            return H && H instanceof b && !(H instanceof v) && (H = v(H)), b.fn.init.call(this, w, H, y)
        };
        v.fn.init.prototype = v.fn;
        var y = v(document);
        return g("jQuery.sub() is deprecated"), v
    };
    b.ajaxSetup({
        converters: {
            "text json": b.parseJSON
        }
    });
    var e = b.fn.data;
    b.fn.data = function(v) {
        var y, w, H = this[0];
        return !H || "events" !== v || 1 !== arguments.length || (y = b.data(H, v), w = b._data(H, v), y !== p && y !== w || w === p) ? e.apply(this, arguments) : (g("Use of jQuery.fn.data('events') is deprecated"), w)
    };
    var f = /\/(java|ecma)script/i,
        h = b.fn.andSelf || b.fn.addBack;
    b.fn.andSelf = function() {
        return g("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), h.apply(this, arguments)
    };
    b.clean || (b.clean = function(v, y, w, H) {
        y = y || document;
        y = !y.nodeType && y[0] || y;
        y = y.ownerDocument || y;
        g("jQuery.clean() is deprecated");
        var L, K = [];
        if (b.merge(K, b.buildFragment(v, y).childNodes), w) {
            var C = function(N) {
                return !N.type || f.test(N.type) ? H ? H.push(N.parentNode ? N.parentNode.removeChild(N) : N) : w.appendChild(N) : p
            };
            for (v = 0; null != (y = K[v]); v++) b.nodeName(y, "script") &&
                C(y) || (w.appendChild(y), y.getElementsByTagName !== p && (L = b.grep(b.merge([], y.getElementsByTagName("script")), C), K.splice.apply(K, [v + 1, 0].concat(L)), v += L.length))
        }
        return K
    });
    var k = b.event.add,
        m = b.event.remove,
        q = b.event.trigger,
        A = b.fn.toggle,
        E = b.fn.live,
        G = b.fn.die,
        F = RegExp("\\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\\b"),
        z = /(?:^|\s)hover(\.\S+|)\b/,
        t = function(v) {
            return "string" != typeof v || b.event.special.hover ? v : (z.test(v) && g("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
                v && v.replace(z, "mouseenter$1 mouseleave$1"))
        };
    b.event.props && "attrChange" !== b.event.props[0] && b.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    b.event.dispatch && l(b.event, "handle", b.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    b.event.add = function(v, y, w, H, L) {
        v !== document && F.test(y) && g("AJAX events should be attached to document: " + y);
        k.call(this, v, t(y || ""), w, H, L)
    };
    b.event.remove = function(v, y, w, H, L) {
        m.call(this, v, t(y) || "", w, H, L)
    };
    b.fn.error = function() {
        var v =
            Array.prototype.slice.call(arguments, 0);
        return g("jQuery.fn.error() is deprecated"), v.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, v) : (this.triggerHandler.apply(this, v), this)
    };
    b.fn.toggle = function(v, y) {
        if (!b.isFunction(v) || !b.isFunction(y)) return A.apply(this, arguments);
        g("jQuery.fn.toggle(handler, handler...) is deprecated");
        var w = arguments,
            H = v.guid || b.guid++,
            L = 0,
            K = function(C) {
                var N = (b._data(this, "lastToggle" + v.guid) || 0) % L;
                return b._data(this, "lastToggle" + v.guid, N + 1), C.preventDefault(),
                    w[N].apply(this, arguments) || !1
            };
        for (K.guid = H; w.length > L;) w[L++].guid = H;
        return this.click(K)
    };
    b.fn.live = function(v, y, w) {
        return g("jQuery.fn.live() is deprecated"), E ? E.apply(this, arguments) : (b(this.context).on(v, this.selector, y, w), this)
    };
    b.fn.die = function(v, y) {
        return g("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (b(this.context).off(v, this.selector || "**", y), this)
    };
    b.event.trigger = function(v, y, w, H) {
        return w || F.test(v) || g("Global events are undocumented and deprecated"), q.call(this, v, y,
            w || document, H)
    };
    b.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "), function(v, y) {
        b.event.special[y] = {
            setup: function() {
                var w = this;
                return w !== document && (b.event.add(document, y + "." + b.guid, function() {
                    b.event.trigger(y, null, w, !0)
                }), b._data(this, y, b.guid++)), !1
            },
            teardown: function() {
                return this !== document && b.event.remove(document, y + "." + b._data(this, y)), !1
            }
        }
    })
})(jQuery, window);
var toast_visible = !1,
    nav_dropdown_backdrop_top = null;

function hide_modals() {
    $("#error").hide();
    $("#semi_error_modal").hide();
    $("#error_modal").hide();
    $("#semi_success_modal").hide();
    $("#success_modal").hide();
    $("#alert_modal").hide();
    $("#custom_success_modal").hide();
    $(".loading_image").hide()
}

function general_ribbon(b, n = "") {
    create_notification(b, "general_notification", n)
}

function error_ribbon(b, n = "") {
    create_notification(b, "error", n)
}

function create_notification(b, n = "", p = "", g = "") {
    $(".loading_image").hide();
    var l = "<div class='message_container'>" + b + "</div>";
    "with_button" == p && (l = "<div class='message_container'> <a title='Close' id='close_" + n + "' class='close_notification'><i class='ic-16-cross'></i></a>" + b + "</div>");
    $("#" + n).html(l).slideDown(500, function() {
        change_nav_dropdown_backdrop_top(n);
        if ("custom" == p) {
            var u = $("#" + n).outerHeight();
            $("#" + n).parent().css({
                height: u + "px"
            })
        }
    });
    $("#" + n).removeClass("has_cross_button");
    "with_button" ==
    p ? ($("#" + n).addClass("has_cross_button"), $("#close_" + n).click(function() {
        change_nav_dropdown_backdrop_top(n, !0);
        $("#" + n).slideUp(500)
    })) : "with_timeout" == p ? setTimeout(function() {
        $("#" + n).slideUp(500);
        change_nav_dropdown_backdrop_top(n, !0)
    }, 6E3) : "custom" == p && $("#" + n).addClass(g)
}

function success_notification(b) {
    general_ribbon(b, "with_timeout")
}

function general_notification(b) {
    general_ribbon(b)
}

function show_ribbon(b) {
    general_ribbon(b, "with_button")
}

function preview_notification(b) {
    general_ribbon(b, "with_button")
}

function throw_validation_error(b, n) {
    n = "undefined" == typeof n || "" == n ? "" : n + " ";
    var p = [];
    $.each(b, function(g, l) {
        if ("no_input" === g) return error_toast(l), $(".loading_image").hide(), !0;
        var u = $("<label>").text(l);
        if ("selected_categories_for_user_preference" === g) var x = "multiselect_category";
        else "profile_primary" == g || "profile_input" == g ? x = "profile_input_container" : "start_date_1" == g || "start_date_2" == g ? x = "later_date_option_container" : "start_year" == g ? x = "college_start_year_container" : "end_year" == g ? x = "college_end_year_container" :
            "cover_letter" == g ? x = "cover_letter" : "text1h" == g || "text1" == g ? x = "text1" : "text2h" == g || "text2" == g ? x = "text2" : "salary2" == g ? x = "stipendvalue" : 0 === g.indexOf("option_question_") ? x = g : 0 === g.indexOf("selected_options_") ? x = g : (x = $(n + "[name='" + g + "']").closest("input").attr("id"), "undefined" == typeof x && (x = $(n + "[name='" + g + "']").closest("textarea").attr("id")), "undefined" == typeof x && (x = $(n + "[name='" + g + "']").closest("select").attr("id")));
        if (-1 != $.inArray(x, p)) return !0;
        p.push(x);
        u.attr({
            class: "help-block form-error",
            id: x + "-error",
            for: x
        });
        if ("toc" === g) u.insertAfter("#label_toc");
        else if ("phone_primary" === g || "country_code" === g) u.insertAfter("#phone_primary");
        else if ("gender" === g) u.insertAfter("#gender_container");
        else if (0 === g.indexOf("option_question_")) u.appendTo("#" + g);
        else if ("email_body" === g) u.insertAfter(".note-editor");
        else if ("salary_min_assured" === g) u.appendTo("#salary_min_assured_error");
        else if ("profile_picture" === g) u.insertAfter(".upload_label");
        else if (0 === g.indexOf("selected_options_")) u.appendTo("#" +
            g);
        else if ($("#" + x + "-error").length) {
            $("#" + x + "-error").text(l);
            u = "#" + x;
            g = RegExp("(text_[0-9]{1,})");
            if ("cover_letter" === x || g.test(x)) $("#" + x + "-error").html(l), "cover_letter" === x && (u += "-error");
            "update_password" === x && $("#" + x + "-error").html(l)
        } else $("#" + x).is(":radio") ? (l = $("#" + x).parents(".form-group"), u.appendTo(l)) : u.insertAfter(n + "#" + x);
        $(u).parent().addClass("has-error");
        $(u).parent().removeClass("has-success");
        $(u).closest("input").addClass("error");
        $(u).closest("input").removeClass("valid");
        $(u).parent().removeClass("has-success");
        $(u).closest("textarea").addClass("error");
        $(u).closest("textarea").removeClass("valid");
        $(".loading_image").hide()
    })
}

function error_modal(b, n, p, g, l = !0) {
    b.validationError ? throw_validation_error(b.validationError) : (p || (p = "Close"), create_modal("error_modal", b, n, p, g, l))
}

function success_modal(b, n, p, g, l = !0, u = "") {
    p || (p = "Close");
    u ? ($("#success_modal .modal_secondary_btn").show(), $("#success_modal .modal_secondary_btn").text(u)) : $("#success_modal .modal_secondary_btn").hide();
    create_modal("success_modal", b, n, p, g, l)
}

function success_modal_dual_button(b, n, p, g, l = !0, u = "", x = "", r = !1) {
    p || (p = "Close");
    u ? x && 0 < x.length && ($("#success_modal_dual_button .modal_secondary_btn").removeClass("close_action"), $("#success_modal_dual_button .modal_secondary_btn").attr("href", x), $("#success_modal_dual_button .modal_secondary_btn").attr("data-dismiss", ""), $("#success_modal_dual_button .modal_secondary_btn").text(u), r && $("#success_modal_dual_button .modal_secondary_btn").attr("target", "_blank")) : $("#success_modal_dual_button .modal_secondary_btn").hide();
    create_modal("success_modal_dual_button", b, n, p, g, l)
}

function alert_modal(b, n, p, g, l = !0) {
    p || (p = "Ok");
    create_modal("alert_modal", b, n, p, g, l)
}

function confirmation_modal(b, n, p, g, l, u, x = !0) {
    p || (p = "Yes");
    create_modal("confirmation_modal", b, n, p, u, x);
    l ? ($("#confirmation_modal .modal_secondary_btn").show(), $("#confirmation_modal .modal_secondary_btn").text(l)) : $("#confirmation_modal .modal_secondary_btn").hide();
    g ? $("#confirmation_modal .modal_primary_btn").attr("id", g) : $("#confirmation_modal .modal_primary_btn").attr("id", "")
}

function create_modal(b, n = "", p, g = "", l, u = !0) {
    $(".loading_image").hide();
    $("#" + b + " .text-heading").hide();
    $("#" + b + " .text-message").html(n);
    $("#" + b + " .modal_primary_btn").text(g);
    l ? ($("#" + b + " .text-heading").show(), $("#" + b + " .text-heading").html(l)) : $("#" + b + " .text-heading").hide();
    p && 0 < p.length ? ($("#" + b + " .modal_primary_btn").removeClass("close_action"), $("#" + b + " .modal_primary_btn").attr("href", p), $("#" + b + " .modal_primary_btn").attr("data-dismiss", "")) : ($("#" + b + " .modal_primary_btn").addClass("close_action"),
        $("#" + b + " .modal_primary_btn").removeAttr("href"), $("#" + b + " .modal_primary_btn").attr("data-dismiss", "modal"));
    u ? $("#" + b).removeData("bs.modal").modal({
        show: !0,
        backdrop: "static",
        keyboard: !1
    }) : $("#" + b).removeData("bs.modal").modal({
        show: !0,
        backdrop: "true",
        keyboard: !0
    })
}

function throw_semi_error(b) {
    error_modal(b)
}

function throw_error(b, n) {
    error_modal(b, n)
}

function throw_success(b, n, p, g = !1) {
    success_modal(b, n, p, "", g)
}

function throw_semi_success(b, n) {
    success_modal(b, "", n)
}

function internshala_alert(b, n, p = "Ok") {
    alert_modal(b, n, p)
}

function general_toast(b, n = "", p = "") {
    var g = b;
    "" != n && (g = "<span class='toast-message'>" + b + "</span><button id='" + p + "' class='" + p + " btn'>" + n + "</button>");
    create_toast("general_toast", g)
}

function error_toast(b, n = "", p = "") {
    var g = b;
    "" != n && (g = "<span class='toast-message'>" + b + "</span><button id='" + p + "' class='" + p + " btn'>" + n + "</button>");
    create_toast("error_toast", g)
}

function create_toast(b, n) {
    $(".loading_image").hide();
    toast_visible && ($(".toast").hide(), clearTimeout(toast_visible));
    $("." + b).css({
        opacity: 0,
        top: "-40px"
    });
    $("." + b).stop(!0, !0, !0);
    $("." + b + " .toast-body").html(n);
    $("." + b).show();
    $("." + b).animate({
        opacity: 1,
        top: "56px"
    }, 400);
    toast_visible = setTimeout(function() {
        hide_toast(b)
    }, 3E3)
}

function hide_toast(b) {
    clearTimeout(toast_visible);
    $("." + b).animate({
        opacity: 0,
        top: "-46px"
    }, 400, function() {
        $("." + b).hide();
        toast_visible = !1
    })
}

function change_nav_dropdown_backdrop_top(b, n = !1) {
    nav_dropdown_backdrop_top || (nav_dropdown_backdrop_top = parseInt($(".nav_dropdown_backdrop").css("top"), 10));
    n ? $(".nav_dropdown_backdrop").css({
        top: nav_dropdown_backdrop_top + "px"
    }) : (b = $("#" + b).outerHeight(), b = nav_dropdown_backdrop_top + b, $(".nav_dropdown_backdrop").css({
        top: b + "px"
    }))
}

function show_remaining_time() {
    if ("undefined" !== typeof document.getElementsByClassName("ribbon_countdown") && document.getElementsByClassName("ribbon_countdown") && "undefined" !== typeof remainingTimeInSeconds && remainingTimeInSeconds) {
        var b = document.getElementsByClassName("ribbon_countdown");
        if (b[0]) {
            for (element_count = 0; element_count < b.length; element_count++)
                if (0 >= remainingTimeInSeconds) clearInterval(timer), b[element_count].innerHTML = "Expired!";
                else {
                    var n = Math.floor(remainingTimeInSeconds / 3600);
                    if ("end_of_month_campaign" ==
                        job_discount_campaign_type) {
                        n = Math.floor(remainingTimeInSeconds / 3600);
                        var p = Math.floor(n / 24);
                        n = Math.floor(n % 24)
                    }
                    var g = Math.floor(remainingTimeInSeconds % 3600 / 60),
                        l = remainingTimeInSeconds % 60;
                    10 > n && (n = "0" + n);
                    10 > g && (g = "0" + g);
                    10 > l && (l = "0" + l);
                    b[element_count].innerHTML = "undefined" != typeof discount_source && "draft_reminder" == discount_source ? " " + n + ":" + g + ":" + l : "end_of_month_campaign" == job_discount_campaign_type ? " 0" + p + "d:" + n + "h:" + g + "m:" + l + "s" : " " + n + ":" + g + ":" + l
                }
            0 < remainingTimeInSeconds && remainingTimeInSeconds--
        }
    }
}
timer = setInterval(show_remaining_time, 1E3);

function maintenance_ribbon() {
    "undefined" != typeof show_maintenance_ribbon && show_maintenance_ribbon && "undefined" != typeof maintenance_ribbon_message && maintenance_ribbon_message && general_notification(maintenance_ribbon_message)
};