!(function () {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
                (Element.prototype.closest = function (e) {
                    var t = this;
                    if (document.documentElement.contains(this))
                        do {
                            if (t.matches(e)) return t;
                        } while (null !== (t = t.parentElement));
                    return null;
                });
        var o = function (t) {
                return Array.prototype.filter.call(t.parentNode.children, function (e) {
                    return e !== t;
                });
            },
            e = document.querySelectorAll(".menu-toggle"),
            t = document.querySelectorAll("nav .dropdown-menu-toggle"),
            n = document.querySelectorAll("nav .main-nav ul a"),
            l = document.querySelector(".mobile-menu-control-wrapper"),
            a = document.body,
            c = document.documentElement,
            u = function (e) {
                if (e && a.classList.contains("dropdown-hover")) {
                    var t = e.querySelectorAll("li.menu-item-has-children");
                    for (f = 0; f < t.length; f++)
                        t[f].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),
                            t[f].querySelector(".dropdown-menu-toggle").setAttribute("role", "presentation"),
                            t[f].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded"),
                            t[f].querySelector(".dropdown-menu-toggle").removeAttribute("aria-label");
                }
            },
            r = function (e) {
                "false" !== e.getAttribute("aria-expanded") && e.getAttribute("aria-expanded")
                    ? (e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-label", generatepressMenu.openSubMenuLabel))
                    : (e.setAttribute("aria-expanded", "true"), e.setAttribute("aria-label", generatepressMenu.closeSubMenuLabel));
            },
            s = function (e, t) {
                var n = "";
                if ((n = (t = t || this).getAttribute("data-nav") ? document.getElementById(t.getAttribute("data-nav")) : document.getElementById(t.closest("nav").getAttribute("id")))) {
                    var s = !1,
                        o = (t.closest(".mobile-menu-control-wrapper") && (s = !0), n.getElementsByTagName("ul")[0]);
                    if (n.classList.contains("toggled"))
                        n.classList.remove("toggled"),
                            c.classList.remove("mobile-menu-open"),
                            o && o.setAttribute("aria-hidden", "true"),
                            t.setAttribute("aria-expanded", "false"),
                            (s || (l && n.classList.contains("main-navigation"))) && l.classList.remove("toggled"),
                            u(o);
                    else {
                        n.classList.add("toggled"),
                            c.classList.add("mobile-menu-open"),
                            o && o.setAttribute("aria-hidden", "false"),
                            t.setAttribute("aria-expanded", "true"),
                            s
                                ? (l.classList.add("toggled"), l.querySelector(".search-item") && l.querySelector(".search-item").classList.contains("active") && l.querySelector(".search-item").click())
                                : l && n.classList.contains("main-navigation") && l.classList.add("toggled");
                        t = o;
                        if (t && a.classList.contains("dropdown-hover")) {
                            var r = t.querySelectorAll("li.menu-item-has-children");
                            for (f = 0; f < r.length; f++)
                                r[f].querySelector(".dropdown-menu-toggle").setAttribute("tabindex", "0"),
                                    r[f].querySelector(".dropdown-menu-toggle").setAttribute("role", "button"),
                                    r[f].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded", "false"),
                                    r[f].querySelector(".dropdown-menu-toggle").setAttribute("aria-label", generatepressMenu.openSubMenuLabel);
                        }
                    }
                }
            };
        for (f = 0; f < e.length; f++) e[f].addEventListener("click", s, !1);
        var i = function (e, t) {
            if (((t = t || this).closest("nav").classList.contains("toggled") || c.classList.contains("slide-opened")) && !a.classList.contains("dropdown-click")) {
                e.preventDefault();
                var n,
                    t = t.closest("li");
                if ((r(t.querySelector(".dropdown-menu-toggle")), (n = t.querySelector(".sub-menu") ? t.querySelector(".sub-menu") : t.querySelector(".children")), generatepressMenu.toggleOpenedSubMenus)) {
                    var s = o(t);
                    for (f = 0; f < s.length; f++) s[f].classList.contains("sfHover") && (s[f].classList.remove("sfHover"), s[f].querySelector(".toggled-on").classList.remove("toggled-on"), r(s[f].querySelector(".dropdown-menu-toggle")));
                }
                t.classList.toggle("sfHover"), n.classList.toggle("toggled-on");
            }
            e.stopPropagation();
        };
        for (f = 0; f < t.length; f++)
            t[f].addEventListener("click", i, !1),
                t[f].addEventListener(
                    "keypress",
                    function (e) {
                        ("Enter" !== e.key && " " !== e.key) || i(e, this);
                    },
                    !1
                );
        var d = function () {
            var e = document.querySelectorAll(".toggled, .has-active-search");
            for (f = 0; f < e.length; f++) {
                var t = e[f].querySelector(".menu-toggle");
                if ((t = l && !t.closest("nav").classList.contains("mobile-menu-control-wrapper") ? l.querySelector(".menu-toggle") : t) && null === t.offsetParent) {
                    if (e[f].classList.contains("toggled")) {
                        var n,
                            s,
                            o,
                            r = !1;
                        if (
                            ((r = e[f].classList.contains("mobile-menu-control-wrapper") ? !0 : r) || ((s = (n = e[f].getElementsByTagName("ul")[0]) ? n.getElementsByTagName("li") : []), (o = n ? n.getElementsByTagName("ul") : [])),
                            document.activeElement.blur(),
                            e[f].classList.remove("toggled"),
                            c.classList.remove("mobile-menu-open"),
                            t.setAttribute("aria-expanded", "false"),
                            !r)
                        ) {
                            for (var a = 0; a < s.length; a++) s[a].classList.remove("sfHover");
                            for (var i = 0; i < o.length; i++) o[i].classList.remove("toggled-on");
                            n && n.removeAttribute("aria-hidden");
                        }
                        u(e[f]);
                    }
                    l.querySelector(".search-item") && l.querySelector(".search-item").classList.contains("active") && l.querySelector(".search-item").click();
                }
            }
        };
        if ((window.addEventListener("resize", d, !1), window.addEventListener("orientationchange", d, !1), a.classList.contains("dropdown-hover")))
            for (f = 0; f < n.length; f++)
                n[f].addEventListener(
                    "click",
                    function (e) {
                        var t;
                        this.hostname !== window.location.hostname && document.activeElement.blur(),
                            (this.closest("nav").classList.contains("toggled") || c.classList.contains("slide-opened")) &&
                                ("#" === (t = this.getAttribute("href")) || "" === t) &&
                                (e.preventDefault(), (t = this.closest("li")).classList.toggle("sfHover"), (e = t.querySelector(".sub-menu"))) &&
                                e.classList.toggle("toggled-on");
                    },
                    !1
                );
        if (a.classList.contains("dropdown-hover")) {
            for (
                var g = document.querySelectorAll(".menu-bar-items .menu-bar-item > a"),
                    m = function () {
                        if (!this.closest("nav").classList.contains("toggled") && !this.closest("nav").classList.contains("slideout-navigation"))
                            for (var e = this; -1 === e.className.indexOf("main-nav"); ) "li" === e.tagName.toLowerCase() && e.classList.toggle("sfHover"), (e = e.parentElement);
                    },
                    v = function () {
                        if (!this.closest("nav").classList.contains("toggled") && !this.closest("nav").classList.contains("slideout-navigation"))
                            for (var e = this; -1 === e.className.indexOf("menu-bar-items"); ) e.classList.contains("menu-bar-item") && e.classList.toggle("sfHover"), (e = e.parentElement);
                    },
                    f = 0;
                f < n.length;
                f++
            )
                n[f].addEventListener("focus", m), n[f].addEventListener("blur", m);
            for (f = 0; f < g.length; f++) g[f].addEventListener("focus", v), g[f].addEventListener("blur", v);
        }
        if ("ontouchend" in document.documentElement && document.body.classList.contains("dropdown-hover")) {
            var p = document.querySelectorAll(".sf-menu .menu-item-has-children");
            for (f = 0; f < p.length; f++)
                p[f].addEventListener("touchend", function (e) {
                    if (!(this.closest("nav").classList.contains("toggled") || (1 !== e.touches.length && 0 !== e.touches.length) || (e.stopPropagation(), this.classList.contains("sfHover")))) {
                        (e.target !== this && e.target.parentNode !== this && !e.target.parentNode.parentNode) || e.preventDefault();
                        var e = this.closest("li"),
                            t = o(e);
                        for (f = 0; f < t.length; f++) t[f].classList.contains("sfHover") && t[f].classList.remove("sfHover");
                        this.classList.add("sfHover");
                        var n,
                            s = this;
                        document.addEventListener(
                            "touchend",
                            (n = function (e) {
                                e.stopPropagation(), s.classList.remove("sfHover"), document.removeEventListener("touchend", n);
                            })
                        );
                    }
                });
        }
    }
})();
