/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/app-assets/js/core/app-menu.min.js":
/*!***************************************************!*\
  !*** ./public/app-assets/js/core/app-menu.min.js ***!
  \***************************************************/
/***/ (() => {

!function (e, n, a) {
  "use strict";

  var t = 0.01 * e.innerHeight;
  n.documentElement.style.setProperty("--vh", t + "px"), a.app = a.app || {};
  var i = a("body"),
      s = (a(e), a('div[data-menu="menu-wrapper"]').html()),
      o = a('div[data-menu="menu-wrapper"]').attr("class");
  a.app.menu = {
    expanded: null,
    collapsed: null,
    hidden: null,
    container: null,
    horizontalMenu: !1,
    is_touch_device: function is_touch_device() {
      var a = " -webkit- -moz- -o- -ms- ".split(" ");
      return !!("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) || function (n) {
        return e.matchMedia(n).matches;
      }(["(", a.join("touch-enabled),("), "heartz", ")"].join(""));
    },
    manualScroller: {
      obj: null,
      init: function init() {
        a(".main-menu").hasClass("menu-dark");
        a.app.menu.is_touch_device() ? a(".main-menu").addClass("menu-native-scroll") : this.obj = new PerfectScrollbar(".main-menu-content", {
          suppressScrollX: !0,
          wheelPropagation: !1
        });
      },
      update: function update() {
        if (!0 === a(".main-menu").data("scroll-to-active")) {
          var e, t, s;
          if (e = n.querySelector(".main-menu-content li.active"), t = n.querySelector(".main-menu-content"), i.hasClass("menu-collapsed") && a(".main-menu-content li.sidebar-group-active").length && (e = n.querySelector(".main-menu-content li.sidebar-group-active")), e && (s = e.getBoundingClientRect().top + t.scrollTop), s > parseInt(2 * t.clientHeight / 3)) var o = s - t.scrollTop - parseInt(t.clientHeight / 2);
          setTimeout(function () {
            a.app.menu.container.stop().animate({
              scrollTop: o
            }, 300), a(".main-menu").data("scroll-to-active", "false");
          }, 300);
        }
      },
      enable: function enable() {
        a(".main-menu-content").hasClass("ps") || this.init();
      },
      disable: function disable() {
        this.obj && this.obj.destroy();
      },
      updateHeight: function updateHeight() {
        "vertical-menu" != i.data("menu") && "vertical-menu-modern" != i.data("menu") && "vertical-overlay-menu" != i.data("menu") || !a(".main-menu").hasClass("menu-fixed") || (a(".main-menu-content").css("height", a(e).height() - a(".header-navbar").height() - a(".main-menu-header").outerHeight() - a(".main-menu-footer").outerHeight()), this.update());
      }
    },
    init: function init(e) {
      if (a(".main-menu-content").length > 0) {
        this.container = a(".main-menu-content");
        this.change(e);
      }
    },
    change: function change(n) {
      var t = Unison.fetch.now();
      this.reset();
      var s = i.data("menu");
      if (t) switch (t.name) {
        case "xl":
          "vertical-overlay-menu" === s ? this.hide() : !0 === n ? this.collapse(n) : this.expand();
          break;

        case "lg":
          "vertical-overlay-menu" === s || "vertical-menu-modern" === s || "horizontal-menu" === s ? this.hide() : this.collapse();
          break;

        case "md":
        case "sm":
        case "xs":
          this.hide();
      }
      "vertical-menu" !== s && "vertical-menu-modern" !== s || this.toOverlayMenu(t.name, s), i.is(".horizontal-layout") && !i.hasClass(".horizontal-menu-demo") && (this.changeMenu(t.name), a(".menu-toggle").removeClass("is-active")), "xl" == t.name && a('body[data-open="hover"] .main-menu-content .dropdown').on("mouseenter", function () {
        a(this).hasClass("show") ? a(this).removeClass("show") : a(this).addClass("show");
      }).on("mouseleave", function (e) {
        a(this).removeClass("show");
      }), "sm" == t.name || "xs" == t.name ? a(".header-navbar[data-nav=brand-center]").removeClass("navbar-brand-center") : a(".header-navbar[data-nav=brand-center]").addClass("navbar-brand-center"), "xl" == t.name && "horizontal-menu" == s && a(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active active"), "xl" !== t.name && "horizontal-menu" == s && a("#navbar-type").toggleClass("d-none d-xl-block"), a("ul.dropdown-menu [data-bs-toggle=dropdown]").on("click", function (e) {
        a(this).siblings("ul.dropdown-menu").length > 0 && e.preventDefault(), e.stopPropagation(), a(this).parent().siblings().removeClass("show"), a(this).parent().toggleClass("show");
      }), "horizontal-menu" == s && (a("li.dropdown-submenu").on("mouseenter", function () {
        a(this).parent(".dropdown").hasClass("show") || a(this).removeClass("openLeft");
        var n = a(this).find(".dropdown-menu");

        if (n) {
          var t = a(e).height(),
              i = a(this).position().top,
              s = n.offset().left,
              o = n.width();

          if (t - i - n.height() - 28 < 1) {
            var l = t - i - 170;
            a(this).find(".dropdown-menu").css({
              "max-height": l + "px",
              "overflow-y": "auto",
              "overflow-x": "hidden"
            });
            new PerfectScrollbar("li.dropdown-submenu.show .dropdown-menu", {
              wheelPropagation: !1
            });
          }

          s + o - (e.innerWidth - 16) >= 0 && a(this).addClass("openLeft");
        }
      }), a(".theme-layouts").find(".semi-dark").hide());
    },
    transit: function transit(e, n) {
      var t = this;
      i.addClass("changing-menu"), e.call(t), i.hasClass("vertical-layout") && (i.hasClass("menu-open") || i.hasClass("menu-expanded") ? (a(".menu-toggle").addClass("is-active"), "vertical-menu" === i.data("menu") && a(".main-menu-header") && a(".main-menu-header").show()) : (a(".menu-toggle").removeClass("is-active"), "vertical-menu" === i.data("menu") && a(".main-menu-header") && a(".main-menu-header").hide())), setTimeout(function () {
        n.call(t), i.removeClass("changing-menu"), t.update();
      }, 500);
    },
    open: function open() {
      this.transit(function () {
        i.removeClass("menu-hide menu-collapsed").addClass("menu-open"), this.hidden = !1, this.expanded = !0, i.hasClass("vertical-overlay-menu") && a(".sidenav-overlay").addClass("show");
      }, function () {
        !a(".main-menu").hasClass("menu-native-scroll") && a(".main-menu").hasClass("menu-fixed") && (this.manualScroller.enable(), a(".main-menu-content").css("height", a(e).height() - a(".header-navbar").height() - a(".main-menu-header").outerHeight() - a(".main-menu-footer").outerHeight())), i.hasClass("vertical-overlay-menu") || a(".sidenav-overlay").removeClass("show");
      });
    },
    hide: function hide() {
      this.transit(function () {
        i.removeClass("menu-open menu-expanded").addClass("menu-hide"), this.hidden = !0, this.expanded = !1, i.hasClass("vertical-overlay-menu") && a(".sidenav-overlay").removeClass("show");
      }, function () {
        !a(".main-menu").hasClass("menu-native-scroll") && a(".main-menu").hasClass("menu-fixed") && this.manualScroller.enable(), i.hasClass("vertical-overlay-menu") || a(".sidenav-overlay").removeClass("show");
      });
    },
    expand: function expand() {
      !1 === this.expanded && ("vertical-menu-modern" == i.data("menu") && a(".modern-nav-toggle").find(".collapse-toggle-icon").replaceWith(feather.icons.disc.toSvg({
        "class": "d-none d-xl-block collapse-toggle-icon primary font-medium-4"
      })), this.transit(function () {
        i.removeClass("menu-collapsed").addClass("menu-expanded"), this.collapsed = !1, this.expanded = !0, a(".sidenav-overlay").removeClass("show");
      }, function () {
        a(".main-menu").hasClass("menu-native-scroll") || "horizontal-menu" == i.data("menu") ? this.manualScroller.disable() : a(".main-menu").hasClass("menu-fixed") && this.manualScroller.enable(), "vertical-menu" != i.data("menu") && "vertical-menu-modern" != i.data("menu") || !a(".main-menu").hasClass("menu-fixed") || a(".main-menu-content").css("height", a(e).height() - a(".header-navbar").height() - a(".main-menu-header").outerHeight() - a(".main-menu-footer").outerHeight());
      }));
    },
    collapse: function collapse() {
      !1 === this.collapsed && ("vertical-menu-modern" == i.data("menu") && a(".modern-nav-toggle").find(".collapse-toggle-icon").replaceWith(feather.icons.circle.toSvg({
        "class": "d-none d-xl-block collapse-toggle-icon primary font-medium-4"
      })), this.transit(function () {
        i.removeClass("menu-expanded").addClass("menu-collapsed"), this.collapsed = !0, this.expanded = !1, a(".content-overlay").removeClass("d-block d-none");
      }, function () {
        "horizontal-menu" == i.data("menu") && i.hasClass("vertical-overlay-menu") && a(".main-menu").hasClass("menu-fixed") && this.manualScroller.enable(), "vertical-menu" != i.data("menu") && "vertical-menu-modern" != i.data("menu") || !a(".main-menu").hasClass("menu-fixed") || a(".main-menu-content").css("height", a(e).height() - a(".header-navbar").height()), "vertical-menu-modern" == i.data("menu") && a(".main-menu").hasClass("menu-fixed") && this.manualScroller.enable();
      }));
    },
    toOverlayMenu: function toOverlayMenu(e, n) {
      var a = i.data("menu");
      "vertical-menu-modern" == n ? "lg" == e || "md" == e || "sm" == e || "xs" == e ? i.hasClass(a) && i.removeClass(a).addClass("vertical-overlay-menu") : i.hasClass("vertical-overlay-menu") && i.removeClass("vertical-overlay-menu").addClass(a) : "sm" == e || "xs" == e ? i.hasClass(a) && i.removeClass(a).addClass("vertical-overlay-menu") : i.hasClass("vertical-overlay-menu") && i.removeClass("vertical-overlay-menu").addClass(a);
    },
    changeMenu: function changeMenu(e) {
      a('div[data-menu="menu-wrapper"]').html(""), a('div[data-menu="menu-wrapper"]').html(s);
      var n = a('div[data-menu="menu-wrapper"]'),
          t = (a('div[data-menu="menu-container"]'), a('ul[data-menu="menu-navigation"]')),
          l = a('li[data-menu="dropdown"]'),
          m = a('li[data-menu="dropdown-submenu"]');
      "xl" === e ? (i.removeClass("vertical-layout vertical-overlay-menu fixed-navbar").addClass(i.data("menu")), a("nav.header-navbar").removeClass("fixed-top"), n.removeClass().addClass(o), a("a.dropdown-item.nav-has-children").on("click", function () {
        event.preventDefault(), event.stopPropagation();
      }), a("a.dropdown-item.nav-has-parent").on("click", function () {
        event.preventDefault(), event.stopPropagation();
      })) : (i.removeClass(i.data("menu")).addClass("vertical-layout vertical-overlay-menu fixed-navbar"), a("nav.header-navbar").addClass("fixed-top"), n.removeClass().addClass("main-menu menu-light menu-fixed menu-shadow"), t.removeClass().addClass("navigation navigation-main"), l.removeClass("dropdown").addClass("has-sub"), l.find("a").removeClass("dropdown-toggle nav-link"), l.find("a").attr("data-bs-toggle", ""), l.children("ul").find("a").removeClass("dropdown-item"), l.find("ul").removeClass("dropdown-menu"), m.removeClass().addClass("has-sub"), a.app.nav.init(), a("ul.dropdown-menu [data-bs-toggle=dropdown]").on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), a(this).parent().siblings().removeClass("open"), a(this).parent().toggleClass("open");
      }), a(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active"), a(".main-menu-content").find("li.active").closest("li.nav-item").addClass("open")), feather && feather.replace({
        width: 14,
        height: 14
      });
    },
    toggle: function toggle() {
      var e = Unison.fetch.now(),
          n = (this.collapsed, this.expanded),
          a = this.hidden,
          t = i.data("menu");

      switch (e.name) {
        case "xl":
          !0 === n ? "vertical-overlay-menu" == t ? this.hide() : this.collapse() : "vertical-overlay-menu" == t ? this.open() : this.expand();
          break;

        case "lg":
          !0 === n ? "vertical-overlay-menu" == t || "vertical-menu-modern" == t || "horizontal-menu" == t ? this.hide() : this.collapse() : "vertical-overlay-menu" == t || "vertical-menu-modern" == t || "horizontal-menu" == t ? this.open() : this.expand();
          break;

        case "md":
        case "sm":
        case "xs":
          !0 === a ? this.open() : this.hide();
      }
    },
    update: function update() {
      this.manualScroller.update();
    },
    reset: function reset() {
      this.expanded = !1, this.collapsed = !1, this.hidden = !1, i.removeClass("menu-hide menu-open menu-collapsed menu-expanded");
    }
  }, a.app.nav = {
    container: a(".navigation-main"),
    initialized: !1,
    navItem: a(".navigation-main").find("li").not(".navigation-category"),
    TRANSITION_EVENTS: ["transitionend", "webkitTransitionEnd", "oTransitionEnd"],
    TRANSITION_PROPERTIES: ["transition", "MozTransition", "webkitTransition", "WebkitTransition", "OTransition"],
    config: {
      speed: 300
    },
    init: function init(e) {
      this.initialized = !0, a.extend(this.config, e), this.bind_events();
    },
    bind_events: function bind_events() {
      var e = this;
      a(".navigation-main").on("mouseenter.app.menu", "li", function () {
        var e = a(this);

        if (i.hasClass("menu-collapsed") && "vertical-menu-modern" != i.data("menu")) {
          a(".main-menu-content").children("span.menu-title").remove(), a(".main-menu-content").children("a.menu-title").remove(), a(".main-menu-content").children("ul.menu-content").remove();
          var n,
              t,
              s,
              o = e.find("span.menu-title").clone();
          e.hasClass("has-sub") || (n = e.find("span.menu-title").text(), t = e.children("a").attr("href"), "" !== n && ((o = a("<a>")).attr("href", t), o.attr("title", n), o.text(n), o.addClass("menu-title"))), s = e.css("border-top") ? e.position().top + parseInt(e.css("border-top"), 10) : e.position().top, "vertical-compact-menu" !== i.data("menu") && o.appendTo(".main-menu-content").css({
            position: "fixed",
            top: s
          });
        }
      }).on("mouseleave.app.menu", "li", function () {}).on("active.app.menu", "li", function (e) {
        a(this).addClass("active"), e.stopPropagation();
      }).on("deactive.app.menu", "li.active", function (e) {
        a(this).removeClass("active"), e.stopPropagation();
      }).on("open.app.menu", "li", function (n) {
        var t = a(this);
        if (e.expand(t), a(".main-menu").hasClass("menu-collapsible")) return !1;
        t.siblings(".open").find("li.open").trigger("close.app.menu"), t.siblings(".open").trigger("close.app.menu"), n.stopPropagation();
      }).on("close.app.menu", "li.open", function (n) {
        var t = a(this);
        e.collapse(t), n.stopPropagation();
      }).on("click.app.menu", "li", function (e) {
        var n = a(this);
        n.is(".disabled") || i.hasClass("menu-collapsed") && "vertical-menu-modern" != i.data("menu") ? e.preventDefault() : n.has("ul").length ? n.is(".open") ? n.trigger("close.app.menu") : n.trigger("open.app.menu") : n.is(".active") || (n.siblings(".active").trigger("deactive.app.menu"), n.trigger("active.app.menu")), e.stopPropagation();
      }), a(".navbar-header, .main-menu").on("mouseenter", function () {
        if ("vertical-menu-modern" == i.data("menu") && (a(".main-menu, .navbar-header").addClass("expanded"), i.hasClass("menu-collapsed"))) {
          0 === a(".main-menu li.open").length && a(".main-menu-content").find("li.active").parents("li").addClass("open");
          var e = a(".main-menu li.menu-collapsed-open");
          e.children("ul").hide().slideDown(200, function () {
            a(this).css("display", "");
          }), e.addClass("open").removeClass("menu-collapsed-open");
        }
      }).on("mouseleave", function () {
        i.hasClass("menu-collapsed") && "vertical-menu-modern" == i.data("menu") && setTimeout(function () {
          if (0 === a(".main-menu:hover").length && 0 === a(".navbar-header:hover").length && (a(".main-menu, .navbar-header").removeClass("expanded"), i.hasClass("menu-collapsed"))) {
            var e = a(".main-menu li.open"),
                n = e.children("ul");
            e.addClass("menu-collapsed-open"), n.show().slideUp(200, function () {
              a(this).css("display", "");
            }), e.removeClass("open");
          }
        }, 1);
      }), a(".main-menu-content").on("mouseleave", function () {
        i.hasClass("menu-collapsed") && (a(".main-menu-content").children("span.menu-title").remove(), a(".main-menu-content").children("a.menu-title").remove(), a(".main-menu-content").children("ul.menu-content").remove()), a(".hover", ".navigation-main").removeClass("hover");
      }), a(".navigation-main li.has-sub > a").on("click", function (e) {
        e.preventDefault();
      });
    },
    collapse: function collapse(e, n) {
      var t = e.children("ul"),
          i = e.children().first(),
          s = a(i).outerHeight();
      e.css({
        height: s + t.outerHeight() + "px",
        overflow: "hidden"
      }), e.addClass("menu-item-animating"), e.addClass("menu-item-closing"), a.app.nav._bindAnimationEndEvent(e, function () {
        e.removeClass("open"), a.app.nav._clearItemStyle(e);
      }), setTimeout(function () {
        e.css({
          height: s + "px"
        });
      }, 50);
    },
    expand: function expand(e, n) {
      var t = e.children("ul"),
          i = e.children().first(),
          s = a(i).outerHeight();
      e.addClass("menu-item-animating"), e.css({
        overflow: "hidden",
        height: s + "px"
      }), e.addClass("open"), a.app.nav._bindAnimationEndEvent(e, function () {
        a.app.nav._clearItemStyle(e);
      }), setTimeout(function () {
        e.css({
          height: s + t.outerHeight() + "px"
        });
      }, 50);
    },
    _bindAnimationEndEvent: function _bindAnimationEndEvent(n, t) {
      n = n[0];

      var i = function i(e) {
        e.target === n && (a.app.nav._unbindAnimationEndEvent(n), t(e));
      };

      var s = e.getComputedStyle(n).transitionDuration;
      s = parseFloat(s) * (-1 !== s.indexOf("ms") ? 1 : 1e3), n._menuAnimationEndEventCb = i, a.app.nav.TRANSITION_EVENTS.forEach(function (e) {
        n.addEventListener(e, n._menuAnimationEndEventCb, !1);
      }), n._menuAnimationEndEventTimeout = setTimeout(function () {
        i({
          target: n
        });
      }, s + 50);
    },
    _unbindAnimationEndEvent: function _unbindAnimationEndEvent(e) {
      var n = e._menuAnimationEndEventCb;
      e._menuAnimationEndEventTimeout && (clearTimeout(e._menuAnimationEndEventTimeout), e._menuAnimationEndEventTimeout = null), n && (a.app.nav.TRANSITION_EVENTS.forEach(function (a) {
        e.removeEventListener(a, n, !1);
      }), e._menuAnimationEndEventCb = null);
    },
    _clearItemStyle: function _clearItemStyle(e) {
      e.removeClass("menu-item-animating"), e.removeClass("menu-item-closing"), e.css({
        overflow: "",
        height: ""
      });
    },
    refresh: function refresh() {
      a.app.nav.container.find(".open").removeClass("open");
    }
  }, a(n).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });
}(window, document, jQuery), window.addEventListener("resize", function () {
  var e = 0.01 * window.innerHeight;
  document.documentElement.style.setProperty("--vh", e + "px");
});

/***/ }),

/***/ "./public/app-assets/js/core/app.min.js":
/*!**********************************************!*\
  !*** ./public/app-assets/js/core/app.min.js ***!
  \**********************************************/
/***/ (() => {

function featherSVG(a) {
  return null == a && (a = "14"), feather.replace({
    width: a,
    height: a
  });
}

window.colors = {
  solid: {
    primary: "var(--bs-primary)",
    secondary: "#82868b",
    success: "#28C76F",
    info: "#00cfe8",
    warning: "#FF9F43",
    danger: "#EA5455",
    dark: "#4b4b4b",
    black: "#000",
    white: "#fff",
    body: "#f8f8f8"
  },
  light: {
    primary: "var(--bs-primary)1a",
    secondary: "#82868b1a",
    success: "#28C76F1a",
    info: "#00cfe81a",
    warning: "#FF9F431a",
    danger: "#EA54551a",
    dark: "#4b4b4b1a"
  }
}, function (a, e, t) {
  "use strict";

  var s = t("html"),
      n = t("body"),
      o = "#4e5154",
      r = "../../../app-assets/";

  if ("laravel" === t("body").attr("data-framework") && (r = t("body").attr("data-asset-path")), t.fn.dataTable && t.extend(t.fn.dataTable.ext.classes, {
    sFilterInput: "form-control",
    sLengthSelect: "form-select"
  }), t(a).on("load", function () {
    var r = !1;
    (n.hasClass("menu-collapsed") || "true" === localStorage.getItem("menuCollapsed")) && (r = !0), t("html").data("textdirection"), setTimeout(function () {
      s.removeClass("loading").addClass("loaded");
    }, 1200), t.app.menu.init(r);
    !1 === t.app.nav.initialized && t.app.nav.init({
      speed: 300
    }), Unison.on("change", function (a) {
      t.app.menu.change(r);
    });
    [].slice.call(e.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (a) {
      return new bootstrap.Tooltip(a);
    });
    t('a[data-action="collapse"]').on("click", function (a) {
      a.preventDefault(), t(this).closest(".card").children(".card-content").collapse("toggle"), t(this).closest(".card").find('[data-action="collapse"]').toggleClass("rotate");
    }), t(".touchspin-cart").length > 0 && t(".touchspin-cart").TouchSpin({
      buttondown_class: "btn btn-primary",
      buttonup_class: "btn btn-primary",
      buttondown_txt: feather.icons.minus.toSvg(),
      buttonup_txt: feather.icons.plus.toSvg()
    }), t(".dropdown-notification .dropdown-menu, .dropdown-cart .dropdown-menu").on("click", function (a) {
      a.stopPropagation();
    }), t(".scrollable-container").each(function () {
      new PerfectScrollbar(t(this)[0], {
        wheelPropagation: !1
      });
    }), t('a[data-action="reload"]').on("click", function () {
      var a = t(this).closest(".card");
      if (s.hasClass("dark-layout")) var e = "#10163a";else e = "#fff";
      a.block({
        message: feather.icons["refresh-cw"].toSvg({
          "class": "font-medium-1 spinner text-primary"
        }),
        timeout: 2e3,
        overlayCSS: {
          backgroundColor: e,
          cursor: "wait"
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "none"
        }
      });
    }), t('a[data-action="close"]').on("click", function () {
      t(this).closest(".card").removeClass().slideUp("fast");
    }), t('.card .heading-elements a[data-action="collapse"]').on("click", function () {
      var a,
          e = t(this).closest(".card");
      parseInt(e[0].style.height, 10) > 0 ? (a = e.css("height"), e.css("height", "").attr("data-height", a)) : e.data("height") && (a = e.data("height"), e.css("height", a).attr("data-height", ""));
    }), t("input:disabled, textarea:disabled").closest(".input-group").addClass("disabled"), t(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active");
    var l = n.data("menu");
    "horizontal-menu" != l && !1 === r && t(".main-menu-content").find("li.active").parents("li").addClass("open"), "horizontal-menu" == l && (t(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open"), t(".main-menu-content").find("li.active").closest("li.nav-item").addClass("sidebar-group-active open"));
    var i = t(".chartjs"),
        c = i.children("canvas").attr("height"),
        d = t(".main-menu");

    if (i.css("height", c), n.hasClass("boxed-layout") && n.hasClass("vertical-overlay-menu")) {
      var h = d.width(),
          u = t(".app-content").position().left - h;
      n.hasClass("menu-flipped") ? d.css("right", u + "px") : d.css("left", u + "px");
    }

    t(".char-textarea").on("keyup", function (e) {
      !function (e, s) {
        var n = parseInt(t(e).data("length")),
            r = t(".textarea-counter-value"),
            l = t(".char-textarea");
        (function (a) {
          return 8 == a.keyCode || 46 == a.keyCode || 37 == a.keyCode || 38 == a.keyCode || 39 == a.keyCode || 40 == a.keyCode;
        })(s) || e.value.length < n - 1 && (e.value = e.value.substring(0, n));
        t(".char-count").html(e.value.length), e.value.length > n ? (r.css("background-color", a.colors.solid.danger), l.css("color", a.colors.solid.danger), l.addClass("max-limit")) : (r.css("background-color", a.colors.solid.primary), l.css("color", o), l.removeClass("max-limit"));
      }(this, e), t(this).addClass("active");
    }), t(".content-overlay").on("click", function () {
      t(".search-list").removeClass("show");
      var a = t(".search-input-close").closest(".search-input");
      a.hasClass("open") && (a.removeClass("open"), w.val(""), w.blur(), y.removeClass("show")), t(".app-content").removeClass("show-overlay"), t(".bookmark-wrapper .bookmark-input").removeClass("show");
    });
    var f = e.getElementsByClassName("main-menu-content");
    f.length > 0 && f[0].addEventListener("ps-scroll-y", function () {
      t(this).find(".ps__thumb-y").position().top > 0 ? t(".shadow-bottom").css("display", "block") : t(".shadow-bottom").css("display", "none");
    });
  }), t(e).on("click", ".sidenav-overlay", function (a) {
    return t.app.menu.hide(), !1;
  }), "undefined" != typeof Hammer) {
    var l;
    "rtl" == t("html").data("textdirection") && (l = !0);
    var i = e.querySelector(".drag-target"),
        c = "panright",
        d = "panleft";
    if (!0 === l && (c = "panleft", d = "panright"), t(i).length > 0) new Hammer(i).on(c, function (a) {
      if (n.hasClass("vertical-overlay-menu")) return t.app.menu.open(), !1;
    });
    setTimeout(function () {
      var a,
          s = e.querySelector(".main-menu");
      t(s).length > 0 && ((a = new Hammer(s)).get("pan").set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 250
      }), a.on(d, function (a) {
        if (n.hasClass("vertical-overlay-menu")) return t.app.menu.hide(), !1;
      }));
    }, 300);
    var h = e.querySelector(".sidenav-overlay");
    if (t(h).length > 0) new Hammer(h).on("tap", function (a) {
      if (n.hasClass("vertical-overlay-menu")) return t.app.menu.hide(), !1;
    });
  }

  if (t(e).on("click", ".menu-toggle, .modern-nav-toggle", function (e) {
    return e.preventDefault(), t.app.menu.toggle(), setTimeout(function () {
      t(a).trigger("resize");
    }, 200), t("#collapse-sidebar-switch").length > 0 && setTimeout(function () {
      n.hasClass("menu-expanded") || n.hasClass("menu-open") ? t("#collapse-sidebar-switch").prop("checked", !1) : t("#collapse-sidebar-switch").prop("checked", !0);
    }, 50), n.hasClass("menu-expanded") || n.hasClass("menu-open") ? localStorage.setItem("menuCollapsed", !1) : localStorage.setItem("menuCollapsed", !0), !1;
  }), t(".navigation").find("li").has("ul").addClass("has-sub"), t(a).resize(function () {
    t.app.menu.manualScroller.updateHeight();
  }), t("#sidebar-page-navigation").on("click", "a.nav-link", function (a) {
    a.preventDefault(), a.stopPropagation();
    var e = t(this),
        s = e.attr("href"),
        n = t(s).offset().top - 80;
    t("html, body").animate({
      scrollTop: n
    }, 0), setTimeout(function () {
      e.parent(".nav-item").siblings(".nav-item").children(".nav-link").removeClass("active"), e.addClass("active");
    }, 100);
  }), "laravel" === n.attr("data-framework")) {
    var u = t("html")[0].lang;

    if (null !== u) {
      var f = t(".dropdown-language").find("a[data-language=" + u + "]").text(),
          m = t(".dropdown-language").find("a[data-language=" + u + "] .flag-icon").attr("class");
      t("#dropdown-flag .selected-language").text(f), t("#dropdown-flag .flag-icon").removeClass().addClass(m);
    }
  } else i18next.use(a.i18nextXHRBackend).init({
    debug: !1,
    fallbackLng: "en",
    backend: {
      loadPath: r + "data/locales/{{lng}}.json"
    },
    returnObjects: !0
  }, function (a, e) {
    jqueryI18next.init(i18next, t);
  }), t(".dropdown-language .dropdown-item").on("click", function () {
    var a = t(this);
    a.siblings(".selected").removeClass("selected"), a.addClass("selected");
    var e = a.text(),
        s = a.find(".flag-icon").attr("class");
    t("#dropdown-flag .selected-language").text(e), t("#dropdown-flag .flag-icon").removeClass().addClass(s);
    var n = a.data("language");
    i18next.changeLanguage(n, function (a, e) {
      t(".main-menu, .horizontal-menu-wrapper").localize();
    });
  });

  var p = t(".search-input input").data("search"),
      v = t(".bookmark-wrapper"),
      g = t(".bookmark-wrapper .bookmark-star"),
      b = t(".bookmark-wrapper .bookmark-input"),
      C = t(".nav-link-search"),
      k = t(".search-input"),
      w = t(".search-input input"),
      y = t(".search-input .search-list"),
      x = t(".app-content"),
      S = t(".bookmark-input .search-list");
  if (g.on("click", function (a) {
    a.stopPropagation(), b.toggleClass("show"), b.find("input").val(""), b.find("input").blur(), b.find("input").focus(), v.find(".search-list").addClass("show");
    var e = t("ul.nav.navbar-nav.bookmark-icons li"),
        s = "",
        n = "";
    t("ul.search-list li").remove();

    for (var o = 0; o < e.length; o++) {
      n = 0 === o ? "current_item" : "";
      var r = "",
          l = "";

      if (t(e[o].firstChild.firstChild).hasClass("feather")) {
        var i = e[o].firstChild.firstChild.getAttribute("class");
        r = i.split("feather-")[1].split(" ")[0], l = i.split("feather-")[1].split(" ")[1];
      }

      s += '<li class="auto-suggestion ' + n + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + e[o].firstChild.href + '><div class="d-flex justify-content-start align-items-center">' + feather.icons[r].toSvg({
        "class": "me-75 " + l
      }) + "<span>" + e[o].firstChild.dataset.bsOriginalTitle + "</span></div>" + feather.icons.star.toSvg({
        "class": "text-warning bookmark-icon float-end"
      }) + "</a></li>";
    }

    t("ul.search-list").append(s);
  }), C.on("click", function () {
    t(this);
    t(this).parent(".nav-search").find(".search-input").addClass("open"), w.focus(), y.find("li").remove(), b.removeClass("show");
  }), t(".search-input-close").on("click", function () {
    t(this);
    var a = t(this).closest(".search-input");
    a.hasClass("open") && (a.removeClass("open"), w.val(""), w.blur(), y.removeClass("show"), x.removeClass("show-overlay"));
  }), t(".search-list-main").length) var I = new PerfectScrollbar(".search-list-main", {
    wheelPropagation: !1
  });
  if (t(".search-list-bookmark").length) new PerfectScrollbar(".search-list-bookmark", {
    wheelPropagation: !1
  });

  function z() {
    return s.hasClass("dark-layout") ? "dark-layout" : s.hasClass("bordered-layout") ? "bordered-layout" : s.hasClass("semi-dark-layout") ? "semi-dark-layout" : "light-layout";
  }

  t(".search-list-main").mouseenter(function () {
    I.update();
  }), w.on("keyup", function (a) {
    if (t(this).closest(".search-list").addClass("show"), 38 !== a.keyCode && 40 !== a.keyCode && 13 !== a.keyCode) {
      27 == a.keyCode && (x.removeClass("show-overlay"), b.find("input").val(""), b.find("input").blur(), w.val(""), w.blur(), k.removeClass("open"), k.hasClass("show") && (t(this).removeClass("show"), k.removeClass("show")));
      var e = t(this).val().toLowerCase(),
          s = "",
          n = !1;

      if (t("ul.search-list li").remove(), t(this).parent().hasClass("bookmark-input") && (n = !0), "" != e) {
        x.addClass("show-overlay"), b.focus() ? S.addClass("show") : (y.addClass("show"), S.removeClass("show")), !1 === n && (y.addClass("show"), S.removeClass("show"));
        var o = "",
            l = "",
            i = "",
            c = "",
            d = '<li class="d-flex align-items-center"><a href="#"><h6 class="section-label mt-75 mb-0">Pages</h6></a></li>',
            h = "",
            u = "",
            f = 0;
        t.getJSON(r + "data/" + p + ".json", function (a) {
          for (var m = 0; m < a.listItems.length; m++) {
            if ("laravel" === t("body").attr("data-framework") && (a.listItems[m].url = r + a.listItems[m].url), !0 === n) {
              s = "";

              for (var p = t("ul.nav.navbar-nav.bookmark-icons li"), v = 0; v < p.length; v++) {
                if (a.listItems[m].name === p[v].firstChild.dataset.bsOriginalTitle) {
                  s = " text-warning";
                  break;
                }

                s = "";
              }

              h = feather.icons.star.toSvg({
                "class": "bookmark-icon float-end" + s
              });
            }

            0 == a.listItems[m].name.toLowerCase().indexOf(e) && f < 5 && (o += '<li class="auto-suggestion ' + (0 === f ? "current_item" : "") + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + a.listItems[m].url + '><div class="d-flex justify-content-start align-items-center">' + feather.icons[a.listItems[m].icon].toSvg({
              "class": "me-75 "
            }) + "<span>" + a.listItems[m].name + "</span></div>" + h + "</a></li>", f++);
          }

          for (m = 0; m < a.listItems.length; m++) {
            if (!0 === n) {
              s = "";

              for (p = t("ul.nav.navbar-nav.bookmark-icons li"), v = 0; v < p.length; v++) {
                s = a.listItems[m].name === p[v].firstChild.dataset.bsOriginalTitle ? " text-warning" : "";
              }

              h = feather.icons.star.toSvg({
                "class": "bookmark-icon float-end" + s
              });
            }

            0 != a.listItems[m].name.toLowerCase().indexOf(e) && a.listItems[m].name.toLowerCase().indexOf(e) > -1 && f < 5 && (l += '<li class="auto-suggestion ' + (0 === f ? "current_item" : "") + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + a.listItems[m].url + '><div class="d-flex justify-content-start align-items-center">' + feather.icons[a.listItems[m].icon].toSvg({
              "class": "me-75 "
            }) + "<span>" + a.listItems[m].name + "</span></div>" + h + "</a></li>", f++);
          }

          u = t(".main-search-list-defaultlist").html(), "" == o && "" == l && (l = t(".main-search-list-defaultlist-other-list").html()), i = d.concat(o, l, u), t("ul.search-list").html(i), c = o.concat(l), t("ul.search-list-bookmark").html(c);
        });
      } else if (!0 === n) {
        for (var m = t("ul.nav.navbar-nav.bookmark-icons li"), v = "", g = 0; g < m.length; g++) {
          0 === g ? "current_item" : "";
          var C = "";

          if (t(m[g].firstChild.firstChild).hasClass("feather")) {
            var I = m[g].firstChild.firstChild.getAttribute("class");
            C = I.split("feather-")[1].split(" ")[0], I.split("feather-")[1].split(" ")[1];
          }

          v += '<li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between w-100" href=' + m[g].firstChild.href + '><div class="d-flex justify-content-start align-items-center">' + feather.icons[C].toSvg({
            "class": "me-75 "
          }) + "<span>" + m[g].firstChild.dataset.bsOriginalTitle + "</span></div>" + feather.icons.star.toSvg({
            "class": "text-warning bookmark-icon float-end"
          }) + "</a></li>";
        }

        t("ul.search-list").append(v);
      } else x.hasClass("show-overlay") && x.removeClass("show-overlay"), y.hasClass("show") && y.removeClass("show");
    }
  }), t(e).on("mouseenter", ".search-list li", function (a) {
    t(this).siblings().removeClass("current_item"), t(this).addClass("current_item");
  }), t(e).on("click", ".search-list li", function (a) {
    a.stopPropagation();
  }), t("html").on("click", function (a) {
    t(a.target).hasClass("bookmark-icon") || (S.hasClass("show") && S.removeClass("show"), b.hasClass("show") && (b.removeClass("show"), x.removeClass("show-overlay")));
  }), t(e).on("click", ".bookmark-input input", function (a) {
    b.addClass("show"), S.addClass("show");
  }), t(e).on("click", ".bookmark-input .search-list .bookmark-icon", function (a) {
    if (a.stopPropagation(), t(this).hasClass("text-warning")) {
      t(this).removeClass("text-warning");

      for (var e = t("ul.nav.navbar-nav.bookmark-icons li"), s = 0; s < e.length; s++) {
        e[s].firstChild.dataset.bsOriginalTitle == t(this).parent()[0].innerText && e[s].remove();
      }

      a.preventDefault();
    } else {
      e = t("ul.nav.navbar-nav.bookmark-icons li");
      t(this).addClass("text-warning"), a.preventDefault();
      var n,
          o = t(this).parent()[0].href,
          r = t(this).parent()[0].innerText,
          l = t(this).parent()[0].firstChild.firstChild.dataset.icon;
      if (t(t(this).parent()[0].firstChild.firstChild).hasClass("feather")) l = t(this).parent()[0].firstChild.firstChild.getAttribute("class").split("feather-")[1].split(" ")[0];
      n = '<li class="nav-item d-none d-lg-block"><a class="nav-link" href="' + o + '" data-bs-toggle="tooltip" data-bs-placement="bottom" title="' + r + '">' + feather.icons[l].toSvg({
        "class": "ficon"
      }) + "</a></li>", t("ul.nav.bookmark-icons").append(n), t('[data-bs-toggle="tooltip"]').tooltip();
    }
  }), t(a).on("keydown", function (e) {
    var s,
        n,
        o = t(".search-list li.current_item");

    if (40 === e.keyCode ? (s = o.next(), o.removeClass("current_item"), o = s.addClass("current_item")) : 38 === e.keyCode && (n = o.prev(), o.removeClass("current_item"), o = n.addClass("current_item")), 13 === e.keyCode && t(".search-list li.current_item").length > 0) {
      var r = t(".search-list li.current_item a");
      a.location = r.attr("href"), t(r).trigger("click");
    }
  }), Waves.init(), Waves.attach(".btn:not([class*='btn-relief-']):not([class*='btn-gradient-']):not([class*='btn-outline-']):not([class*='btn-flat-'])", ["waves-float", "waves-light"]), Waves.attach("[class*='btn-outline-']"), Waves.attach("[class*='btn-flat-']"), t(".form-password-toggle .input-group-text").on("click", function (a) {
    a.preventDefault();
    var e = t(this),
        s = e.closest(".form-password-toggle"),
        n = e,
        o = s.find("input");
    "text" === o.attr("type") ? (o.attr("type", "password"), feather && n.find("svg").replaceWith(feather.icons.eye.toSvg({
      "class": "font-small-4"
    }))) : "password" === o.attr("type") && (o.attr("type", "text"), feather && n.find("svg").replaceWith(feather.icons["eye-off"].toSvg({
      "class": "font-small-4"
    })));
  }), t(a).on("scroll", function () {
    (t(this).scrollTop() > 400 ? t(".scroll-top").fadeIn() : t(".scroll-top").fadeOut(), n.hasClass("navbar-static")) && (t(a).scrollTop() > 65 ? (t("html:not(.dark-layout) .horizontal-menu .header-navbar.navbar-fixed").css({
      background: "#fff",
      "box-shadow": "0 4px 20px 0 rgba(0,0,0,.05)"
    }), t(".horizontal-menu.dark-layout .header-navbar.navbar-fixed").css({
      background: "#161d31",
      "box-shadow": "0 4px 20px 0 rgba(0,0,0,.05)"
    }), t("html:not(.dark-layout) .horizontal-menu .horizontal-menu-wrapper.header-navbar").css("background", "#fff"), t(".dark-layout .horizontal-menu .horizontal-menu-wrapper.header-navbar").css("background", "#161d31")) : (t("html:not(.dark-layout) .horizontal-menu .header-navbar.navbar-fixed").css({
      background: "#f8f8f8",
      "box-shadow": "none"
    }), t(".dark-layout .horizontal-menu .header-navbar.navbar-fixed").css({
      background: "#161d31",
      "box-shadow": "none"
    }), t("html:not(.dark-layout) .horizontal-menu .horizontal-menu-wrapper.header-navbar").css("background", "#fff"), t(".dark-layout .horizontal-menu .horizontal-menu-wrapper.header-navbar").css("background", "#161d31")));
  }), t(".scroll-top").on("click", function () {
    t("html, body").animate({
      scrollTop: 0
    }, 75);
  });
  var T = s.attr("data-layout") ? s.attr("data-layout") : "light-layout";
  t(".nav-link-style").on("click", function () {
    var a = z(),
        e = "",
        n = localStorage.getItem(T + "-prev-skin", a);
    e = "dark-layout" !== a ? "dark-layout" : a === n ? "light-layout" : n || "light-layout", localStorage.setItem(T + "-prev-skin", a), localStorage.setItem(T + "-current-skin", e), function (a) {
      var e = t(".nav-link-style"),
          n = z(),
          o = t(".main-menu"),
          r = t(".header-navbar"),
          l = a || n;
      s.removeClass("semi-dark-layout dark-layout bordered-layout"), "dark-layout" === l ? (s.addClass("dark-layout"), o.removeClass("menu-light").addClass("menu-dark"), r.removeClass("navbar-light").addClass("navbar-dark"), e.find(".ficon").replaceWith(feather.icons.sun.toSvg({
        "class": "ficon"
      }))) : "bordered-layout" === l ? (s.addClass("bordered-layout"), o.removeClass("menu-dark").addClass("menu-light"), r.removeClass("navbar-dark").addClass("navbar-light"), e.find(".ficon").replaceWith(feather.icons.moon.toSvg({
        "class": "ficon"
      }))) : "semi-dark-layout" === l ? (s.addClass("semi-dark-layout"), o.removeClass("menu-dark").addClass("menu-light"), r.removeClass("navbar-dark").addClass("navbar-light"), e.find(".ficon").replaceWith(feather.icons.moon.toSvg({
        "class": "ficon"
      }))) : (s.addClass("light-layout"), o.removeClass("menu-dark").addClass("menu-light"), r.removeClass("navbar-dark").addClass("navbar-light"), e.find(".ficon").replaceWith(feather.icons.moon.toSvg({
        "class": "ficon"
      })));
      t("input:radio[data-layout=" + l + "]").length > 0 && setTimeout(function () {
        t("input:radio[data-layout=" + l + "]").prop("checked", !0);
      });
    }(e), t(".horizontal-menu .header-navbar.navbar-fixed").css({
      background: "inherit",
      "box-shadow": "inherit"
    }), t(".horizontal-menu .horizontal-menu-wrapper.header-navbar").css("background", "inherit");
  });
  localStorage.getItem(T + "-current-skin");
}(window, document, jQuery), "function" == typeof jQuery.validator && jQuery.validator.setDefaults({
  errorElement: "span",
  errorPlacement: function errorPlacement(a, e) {
    e.parent().hasClass("input-group") || e.hasClass("select2") || "checkbox" === e.attr("type") ? a.insertAfter(e.parent()) : e.hasClass("form-check-input") ? a.insertAfter(e.parent().siblings(":last")) : a.insertAfter(e), e.parent().hasClass("input-group") && e.parent().addClass("is-invalid");
  },
  highlight: function highlight(a, e, t) {
    $(a).addClass("error"), $(a).parent().hasClass("input-group") && $(a).parent().addClass("is-invalid");
  },
  unhighlight: function unhighlight(a, e, t) {
    $(a).removeClass("error"), $(a).parent().hasClass("input-group") && $(a).parent().removeClass("is-invalid");
  }
});

/***/ }),

/***/ "./public/app-assets/js/scripts/customizer.min.js":
/*!********************************************************!*\
  !*** ./public/app-assets/js/scripts/customizer.min.js ***!
  \********************************************************/
/***/ (() => {

!function (a, n, e) {
  "use strict";

  var s = e("html"),
      o = e("body"),
      t = e(".main-menu"),
      r = o.attr("data-menu"),
      l = e(".footer"),
      d = e(".header-navbar"),
      i = e(".horizontal-menu-wrapper .header-navbar"),
      c = e(".header-navbar-shadow"),
      v = e("#collapse-sidebar-switch"),
      C = e(".content-wrapper"),
      m = e(".content-area-wrapper"),
      b = e(".customizer");
  if (e(".customizer-toggle").on("click", function (a) {
    a.preventDefault(), e(b).toggleClass("open");
  }), e(".customizer-close").on("click", function () {
    e(b).removeClass("open");
  }), e(".customizer-content").length > 0) new PerfectScrollbar(".customizer-content");
  e(".layout-name").on("click", function () {
    var a = e(this).data("layout");
    s.removeClass("dark-layout bordered-layout semi-dark-layout").addClass(a), "" === a ? (t.removeClass("menu-dark").addClass("menu-light"), d.removeClass("navbar-dark").addClass("navbar-light")) : "dark-layout" === a ? (t.removeClass("menu-light").addClass("menu-dark"), d.removeClass("navbar-light").addClass("navbar-dark")) : "semi-dark-layout" === a ? (t.removeClass("menu-light").addClass("menu-dark"), d.removeClass("navbar-dark").addClass("navbar-light")) : (t.removeClass("menu-dark").addClass("menu-light"), d.removeClass("navbar-dark").addClass("navbar-light"));
  });
  var f = s.data("layout");
  e(".layout-name[data-layout='" + f + "']").prop("checked", !0), v.on("click", function () {
    e(".modern-nav-toggle").trigger("click"), e(".main-menu").trigger("mouseleave");
  }), o.hasClass("menu-collapsed") ? v.prop("checked", !0) : v.prop("checked", !1), e("#customizer-navbar-colors .color-box").on("click", function () {
    var a = e(this);
    a.siblings().removeClass("selected"), a.addClass("selected");
    var n = a.data("navbar-color");
    n ? o.find(d).removeClass("bg-primary bg-secondary bg-success bg-danger bg-info bg-warning bg-dark").addClass(n + " navbar-dark") : o.find(d).removeClass("bg-primary bg-secondary bg-success bg-danger bg-info bg-warning bg-dark navbar-dark"), s.hasClass("dark-layout") && d.addClass("navbar-dark");
  }), o.hasClass("horizontal-menu") && (e(".collapse_menu").removeClass("d-none"), e(".collapse_sidebar").addClass("d-none"), e(".menu_type").removeClass("d-none"), e(".navbar_type").addClass("d-none"), e("#nav-type-hidden").closest("div").css("display", "none"), e("#customizer-navbar-colors").hide(), e(".customizer-menu").attr("style", "display: none !important").next("hr").hide(), e(".navbar-type-text").text("Nav Menu Types")), e("#nav-type-hidden").on("click", function () {
    d.addClass("d-none"), c.addClass("d-none"), o.removeClass("navbar-static navbar-floating navbar-sticky").addClass("navbar-hidden");
  }), e("#nav-type-static").on("click", function () {
    o.hasClass("horizontal-layout") ? (i.removeClass("d-none floating-nav fixed-top navbar-fixed container-xxl"), o.removeClass("navbar-hidden navbar-floating navbar-sticky").addClass("navbar-static")) : (c.addClass("d-none"), "horizontal-menu" === r ? i.removeClass("d-none floating-nav fixed-top container-xxl").addClass("navbar-static-top") : d.removeClass("d-none floating-nav fixed-top container-xxl").addClass("navbar-static-top"), o.removeClass("navbar-hidden navbar-floating navbar-sticky").addClass("navbar-static"));
  }), e("#nav-type-floating").on("click", function () {
    var a;
    o.hasClass("horizontal-layout") ? (a = e("#layout-width-full").prop("checked") ? "floating-nav" : "floating-nav container-xxl", i.removeClass("d-none fixed-top navbar-static-top").addClass(a), o.removeClass("navbar-static navbar-hidden navbar-sticky").addClass("navbar-floating")) : (a = e("#layout-width-full").prop("checked") ? "floating-nav" : "floating-nav container-xxl p-0", c.removeClass("d-none"), "horizontal-menu" === r ? i.removeClass("d-none navbar-static-top fixed-top").addClass(a) : d.removeClass("d-none navbar-static-top fixed-top").addClass(a), o.removeClass("navbar-static navbar-hidden navbar-sticky").addClass("navbar-floating"));
  }), e("#nav-type-sticky").on("click", function () {
    o.hasClass("horizontal-layout") ? (i.removeClass("d-none floating-nav navbar-static-top navbar-fixed container-xxl").addClass("fixed-top"), o.removeClass("navbar-static navbar-floating navbar-hidden").addClass("navbar-sticky")) : (c.addClass("d-none"), "horizontal-menu" === r ? i.removeClass("d-none floating-nav navbar-static-top").addClass("fixed-top") : d.removeClass("d-none floating-nav navbar-static-top container-xxl").addClass("fixed-top"), o.removeClass("navbar-static navbar-floating navbar-hidden").addClass("navbar-sticky"));
  }), C.hasClass("container-xxl") || m.hasClass("container-xxl") ? e("#layout-width-boxed").prop("checked", !0) : e("#layout-width-full").prop("checked", !0), e("#layout-width-full").on("click", function () {
    C.removeClass("container-xxl p-0"), m.removeClass("container-xxl p-0"), d.removeClass("container-xxl p-0");
  }), e("#layout-width-boxed").on("click", function () {
    C.addClass("container-xxl p-0"), m.addClass("container-xxl p-0"), d.hasClass("floating-nav") && e(".floating-nav").addClass("container-xxl p-0");
  }), e("#footer-type-hidden").on("click", function () {
    l.addClass("d-none"), o.removeClass("footer-static footer-fixed").addClass("footer-hidden");
  }), e("#footer-type-static").on("click", function () {
    o.removeClass("footer-fixed"), l.removeClass("d-none").addClass("footer-static"), o.removeClass("footer-hidden footer-fixed").addClass("footer-static");
  }), e("#footer-type-sticky").on("click", function () {
    o.removeClass("footer-static footer-hidden").addClass("footer-fixed"), l.removeClass("d-none footer-static");
  });
}(window, document, jQuery);

/***/ }),

/***/ "./public/app-assets/js/scripts/pages/dashboard-ecommerce.min.js":
/*!***********************************************************************!*\
  !*** ./public/app-assets/js/scripts/pages/dashboard-ecommerce.min.js ***!
  \***********************************************************************/
/***/ (() => {

$(window).on("load", function () {
  "use strict";

  var o,
      e,
      r,
      t,
      a,
      s,
      i,
      l,
      n,
      d,
      h,
      c = "#f3f3f3",
      w = "#EBEBEB",
      p = "#b9b9c3",
      u = document.querySelector("#statistics-order-chart"),
      g = document.querySelector("#statistics-profit-chart"),
      b = document.querySelector("#earnings-chart"),
      y = document.querySelector("#revenue-report-chart"),
      m = document.querySelector("#budget-chart"),
      f = document.querySelector("#browser-state-chart-primary"),
      k = document.querySelector("#browser-state-chart-warning"),
      x = document.querySelector("#browser-state-chart-secondary"),
      C = document.querySelector("#browser-state-chart-info"),
      A = document.querySelector("#browser-state-chart-danger"),
      B = document.querySelector("#goal-overview-radial-bar-chart"),
      S = "rtl" === $("html").attr("data-textdirection");
  setTimeout(function () {}, 2e3), o = {
    chart: {
      height: 70,
      type: "bar",
      stacked: !0,
      toolbar: {
        show: !1
      }
    },
    grid: {
      show: !1,
      padding: {
        left: 0,
        right: 0,
        top: -15,
        bottom: -15
      }
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "20%",
        startingShape: "rounded",
        colors: {
          backgroundBarColors: [c, c, c, c, c],
          backgroundBarRadius: 5
        }
      }
    },
    legend: {
      show: !1
    },
    dataLabels: {
      enabled: !1
    },
    colors: [window.colors.solid.warning],
    series: [{
      name: "2020",
      data: [45, 85, 65, 45, 65]
    }],
    xaxis: {
      labels: {
        show: !1
      },
      axisBorder: {
        show: !1
      },
      axisTicks: {
        show: !1
      }
    },
    yaxis: {
      show: !1
    },
    tooltip: {
      x: {
        show: !1
      }
    }
  }, new ApexCharts(u, o).render(), e = {
    chart: {
      height: 70,
      type: "line",
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      }
    },
    grid: {
      borderColor: w,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: !0
        }
      },
      yaxis: {
        lines: {
          show: !1
        }
      },
      padding: {
        top: -30,
        bottom: -10
      }
    },
    stroke: {
      width: 3
    },
    colors: [window.colors.solid.info],
    series: [{
      data: [0, 20, 5, 30, 15, 45]
    }],
    markers: {
      size: 2,
      colors: window.colors.solid.info,
      strokeColors: window.colors.solid.info,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#ffffff",
        strokeColor: window.colors.solid.info,
        size: 5
      }],
      shape: "circle",
      radius: 2,
      hover: {
        size: 3
      }
    },
    xaxis: {
      labels: {
        show: !0,
        style: {
          fontSize: "0px"
        }
      },
      axisBorder: {
        show: !1
      },
      axisTicks: {
        show: !1
      }
    },
    yaxis: {
      show: !1
    },
    tooltip: {
      x: {
        show: !1
      }
    }
  }, new ApexCharts(g, e).render(), r = {
    chart: {
      type: "donut",
      height: 120,
      toolbar: {
        show: !1
      }
    },
    dataLabels: {
      enabled: !1
    },
    series: [53, 16, 31],
    legend: {
      show: !1
    },
    comparedResult: [2, -3, 8],
    labels: ["App", "Service", "Product"],
    stroke: {
      width: 0
    },
    colors: ["#28c76f66", "#28c76f33", window.colors.solid.success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: !0,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter: function formatter(o) {
                return parseInt(o) + "%";
              }
            },
            total: {
              show: !0,
              offsetY: 15,
              label: "App",
              formatter: function formatter(o) {
                return "53%";
              }
            }
          }
        }
      }
    },
    responsive: [{
      breakpoint: 1325,
      options: {
        chart: {
          height: 100
        }
      }
    }, {
      breakpoint: 1200,
      options: {
        chart: {
          height: 120
        }
      }
    }, {
      breakpoint: 1045,
      options: {
        chart: {
          height: 100
        }
      }
    }, {
      breakpoint: 992,
      options: {
        chart: {
          height: 120
        }
      }
    }]
  }, new ApexCharts(b, r).render(), t = {
    chart: {
      height: 230,
      stacked: !0,
      type: "bar",
      toolbar: {
        show: !1
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "17%",
        endingShape: "rounded"
      },
      distributed: !0
    },
    colors: [window.colors.solid.primary, window.colors.solid.warning],
    series: [{
      name: "Earning",
      data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
    }, {
      name: "Expense",
      data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
    }],
    dataLabels: {
      enabled: !1
    },
    legend: {
      show: !1
    },
    grid: {
      padding: {
        top: -20,
        bottom: -10
      },
      yaxis: {
        lines: {
          show: !1
        }
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels: {
        style: {
          colors: p,
          fontSize: "0.86rem"
        }
      },
      axisTicks: {
        show: !1
      },
      axisBorder: {
        show: !1
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: p,
          fontSize: "0.86rem"
        }
      }
    }
  }, new ApexCharts(y, t).render(), a = {
    chart: {
      height: 80,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      type: "line",
      sparkline: {
        enabled: !0
      }
    },
    stroke: {
      curve: "smooth",
      dashArray: [0, 5],
      width: [2]
    },
    colors: [window.colors.solid.primary, "#dcdae3"],
    series: [{
      data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
    }, {
      data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
    }],
    tooltip: {
      enabled: !1
    }
  }, new ApexCharts(m, a).render(), s = {
    chart: {
      height: 30,
      width: 30,
      type: "radialBar"
    },
    grid: {
      show: !1,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [window.colors.solid.primary],
    series: [54.4],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "22%"
        },
        track: {
          background: w
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: !1
          },
          value: {
            show: !1
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    }
  }, new ApexCharts(f, s).render(), i = {
    chart: {
      height: 30,
      width: 30,
      type: "radialBar"
    },
    grid: {
      show: !1,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [window.colors.solid.warning],
    series: [6.1],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "22%"
        },
        track: {
          background: w
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: !1
          },
          value: {
            show: !1
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    }
  }, new ApexCharts(k, i).render(), l = {
    chart: {
      height: 30,
      width: 30,
      type: "radialBar"
    },
    grid: {
      show: !1,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [window.colors.solid.secondary],
    series: [14.6],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "22%"
        },
        track: {
          background: w
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: !1
          },
          value: {
            show: !1
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    }
  }, new ApexCharts(x, l).render(), n = {
    chart: {
      height: 30,
      width: 30,
      type: "radialBar"
    },
    grid: {
      show: !1,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [window.colors.solid.info],
    series: [4.2],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "22%"
        },
        track: {
          background: w
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: !1
          },
          value: {
            show: !1
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    }
  }, new ApexCharts(C, n).render(), d = {
    chart: {
      height: 30,
      width: 30,
      type: "radialBar"
    },
    grid: {
      show: !1,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15
      }
    },
    colors: [window.colors.solid.danger],
    series: [8.4],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "22%"
        },
        track: {
          background: w
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: !1
          },
          value: {
            show: !1
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    }
  }, new ApexCharts(A, d).render(), h = {
    chart: {
      height: 245,
      type: "radialBar",
      sparkline: {
        enabled: !0
      },
      dropShadow: {
        enabled: !0,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: ["#51e5a8"],
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: "77%"
        },
        track: {
          background: "#ebe9f1",
          strokeWidth: "50%"
        },
        dataLabels: {
          name: {
            show: !1
          },
          value: {
            color: "#5e5873",
            fontSize: "2.86rem",
            fontWeight: "600"
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [window.colors.solid.success],
        inverseColors: !0,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [83],
    stroke: {
      lineCap: "round"
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  }, new ApexCharts(B, h).render();
});

/***/ }),

/***/ "./resources/ts/master.js":
/*!********************************!*\
  !*** ./resources/ts/master.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../public/app-assets/js/core/app-menu.min.js */ "./public/app-assets/js/core/app-menu.min.js");

__webpack_require__(/*! ../../public/app-assets/js/core/app.min.js */ "./public/app-assets/js/core/app.min.js");

__webpack_require__(/*! ../../public/app-assets/js/scripts/customizer.min.js */ "./public/app-assets/js/scripts/customizer.min.js");

__webpack_require__(/*! ../../public/app-assets/js/scripts/pages/dashboard-ecommerce.min.js */ "./public/app-assets/js/scripts/pages/dashboard-ecommerce.min.js");

/***/ }),

/***/ "./resources/css/master.css":
/*!**********************************!*\
  !*** ./resources/css/master.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/master": 0,
/******/ 			"css/master": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/master","css/app"], () => (__webpack_require__("./resources/ts/master.js")))
/******/ 	__webpack_require__.O(undefined, ["css/master","css/app"], () => (__webpack_require__("./resources/css/master.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/master","css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;