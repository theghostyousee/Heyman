(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [469],
  {
    81516: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomainLocale = function (t, e, i, r) {
          return !1;
        }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    93740: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(6495).Z,
        n = i(92648).Z,
        s = i(91598).Z,
        o = i(17273).Z,
        a = s(i(67294)),
        l = n(i(42636)),
        u = i(97757),
        h = i(3735),
        c = i(83341);
      i(34210);
      var d = n(i(57746));
      let p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function f(t) {
        return void 0 !== t.default;
      }
      function m(t) {
        return "number" == typeof t || void 0 === t
          ? t
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function g(t, e, i, n, s, o, a) {
        if (!t || t["data-loaded-src"] === e) return;
        t["data-loaded-src"] = e;
        let l = "decode" in t ? t.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (t.parentElement && t.isConnected) {
            if (("blur" === i && o(!0), null == n ? void 0 : n.current)) {
              let e = new Event("load");
              Object.defineProperty(e, "target", { writable: !1, value: t });
              let i = !1,
                s = !1;
              n.current(
                r({}, e, {
                  nativeEvent: e,
                  currentTarget: t,
                  target: t,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => s,
                  persist: () => {},
                  preventDefault: () => {
                    (i = !0), e.preventDefault();
                  },
                  stopPropagation: () => {
                    (s = !0), e.stopPropagation();
                  },
                })
              );
            }
            (null == s ? void 0 : s.current) && s.current(t);
          }
        });
      }
      function v(t) {
        let [e, i] = a.version.split("."),
          r = parseInt(e, 10),
          n = parseInt(i, 10);
        return r > 18 || (18 === r && n >= 3)
          ? { fetchPriority: t }
          : { fetchpriority: t };
      }
      let y = a.forwardRef((t, e) => {
          var {
              imgAttributes: i,
              heightInt: n,
              widthInt: s,
              qualityInt: l,
              className: u,
              imgStyle: h,
              blurStyle: c,
              isLazy: d,
              fetchPriority: p,
              fill: f,
              placeholder: m,
              loading: y,
              srcString: x,
              config: b,
              unoptimized: P,
              loader: w,
              onLoadRef: A,
              onLoadingCompleteRef: T,
              setBlurComplete: S,
              setShowAltText: E,
              onLoad: C,
              onError: V,
            } = t,
            M = o(t, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fetchPriority",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (y = d ? "lazy" : y),
            a.default.createElement(
              a.default.Fragment,
              null,
              a.default.createElement(
                "img",
                Object.assign(
                  {},
                  M,
                  v(p),
                  {
                    loading: y,
                    width: s,
                    height: n,
                    decoding: "async",
                    "data-nimg": f ? "fill" : "1",
                    className: u,
                    style: r({}, h, c),
                  },
                  i,
                  {
                    ref: a.useCallback(
                      (t) => {
                        e &&
                          ("function" == typeof e
                            ? e(t)
                            : "object" == typeof e && (e.current = t)),
                          t &&
                            (V && (t.src = t.src),
                            t.complete && g(t, x, m, A, T, S, P));
                      },
                      [x, m, A, T, S, V, P, e]
                    ),
                    onLoad: (t) => {
                      let e = t.currentTarget;
                      g(e, x, m, A, T, S, P);
                    },
                    onError: (t) => {
                      E(!0), "blur" === m && S(!0), V && V(t);
                    },
                  }
                )
              )
            )
          );
        }),
        x = a.forwardRef((t, e) => {
          let i, n;
          var s,
            {
              src: g,
              sizes: x,
              unoptimized: b = !1,
              priority: P = !1,
              loading: w,
              className: A,
              quality: T,
              width: S,
              height: E,
              fill: C,
              style: V,
              onLoad: M,
              onLoadingComplete: k,
              placeholder: R = "empty",
              blurDataURL: D,
              fetchPriority: j,
              layout: L,
              objectFit: F,
              objectPosition: B,
              lazyBoundary: O,
              lazyRoot: I,
            } = t,
            U = o(t, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "fetchPriority",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let N = a.useContext(c.ImageConfigContext),
            z = a.useMemo(() => {
              let t = p || N || h.imageConfigDefault,
                e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                i = t.deviceSizes.sort((t, e) => t - e);
              return r({}, t, { allSizes: e, deviceSizes: i });
            }, [N]),
            $ = U,
            _ = $.loader || d.default;
          delete $.loader;
          let W = "__next_img_default" in _;
          if (W) {
            if ("custom" === z.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let t = _;
            _ = (e) => {
              let { config: i } = e,
                r = o(e, ["config"]);
              return t(r);
            };
          }
          if (L) {
            "fill" === L && (C = !0);
            let t = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[L];
            t && (V = r({}, V, t));
            let e = { responsive: "100vw", fill: "100vw" }[L];
            e && !x && (x = e);
          }
          let H = "",
            G = m(S),
            Y = m(E);
          if ("object" == typeof (s = g) && (f(s) || void 0 !== s.src)) {
            let t = f(g) ? g.default : g;
            if (!t.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(t)
                )
              );
            if (!t.height || !t.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(t)
                )
              );
            if (
              ((i = t.blurWidth),
              (n = t.blurHeight),
              (D = D || t.blurDataURL),
              (H = t.src),
              !C)
            ) {
              if (G || Y) {
                if (G && !Y) {
                  let e = G / t.width;
                  Y = Math.round(t.height * e);
                } else if (!G && Y) {
                  let e = Y / t.height;
                  G = Math.round(t.width * e);
                }
              } else (G = t.width), (Y = t.height);
            }
          }
          let q = !P && ("lazy" === w || void 0 === w);
          (!(g = "string" == typeof g ? g : H) ||
            g.startsWith("data:") ||
            g.startsWith("blob:")) &&
            ((b = !0), (q = !1)),
            z.unoptimized && (b = !0),
            W && g.endsWith(".svg") && !z.dangerouslyAllowSVG && (b = !0),
            P && (j = "high");
          let [X, Z] = a.useState(!1),
            [K, J] = a.useState(!1),
            Q = m(T),
            tt = Object.assign(
              C
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: F,
                    objectPosition: B,
                  }
                : {},
              K ? {} : { color: "transparent" },
              V
            ),
            te =
              "blur" === R && D && !X
                ? {
                    backgroundSize: tt.objectFit || "cover",
                    backgroundPosition: tt.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        u.getImageBlurSvg({
                          widthInt: G,
                          heightInt: Y,
                          blurWidth: i,
                          blurHeight: n,
                          blurDataURL: D,
                          objectFit: tt.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ti = (function (t) {
              let {
                config: e,
                src: i,
                unoptimized: r,
                width: n,
                quality: s,
                sizes: o,
                loader: a,
              } = t;
              if (r) return { src: i, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: u } = (function (t, e, i) {
                  let { deviceSizes: r, allSizes: n } = t;
                  if (i) {
                    let t = /(^|\s)(1?\d?\d)vw/g,
                      e = [];
                    for (let r; (r = t.exec(i)); r) e.push(parseInt(r[2]));
                    if (e.length) {
                      let t = 0.01 * Math.min(...e);
                      return {
                        widths: n.filter((e) => e >= r[0] * t),
                        kind: "w",
                      };
                    }
                    return { widths: n, kind: "w" };
                  }
                  if ("number" != typeof e) return { widths: r, kind: "w" };
                  let s = [
                    ...new Set(
                      [e, 2 * e].map(
                        (t) => n.find((e) => e >= t) || n[n.length - 1]
                      )
                    ),
                  ];
                  return { widths: s, kind: "x" };
                })(e, n, o),
                h = l.length - 1;
              return {
                sizes: o || "w" !== u ? o : "100vw",
                srcSet: l
                  .map((t, r) =>
                    ""
                      .concat(
                        a({ config: e, src: i, quality: s, width: t }),
                        " "
                      )
                      .concat("w" === u ? t : r + 1)
                      .concat(u)
                  )
                  .join(", "),
                src: a({ config: e, src: i, quality: s, width: l[h] }),
              };
            })({
              config: z,
              src: g,
              unoptimized: b,
              width: G,
              quality: Q,
              sizes: x,
              loader: _,
            }),
            tr = g,
            tn = a.useRef(M);
          a.useEffect(() => {
            tn.current = M;
          }, [M]);
          let ts = a.useRef(k);
          a.useEffect(() => {
            ts.current = k;
          }, [k]);
          let to = r(
            {
              isLazy: q,
              imgAttributes: ti,
              heightInt: Y,
              widthInt: G,
              qualityInt: Q,
              className: A,
              imgStyle: tt,
              blurStyle: te,
              loading: w,
              config: z,
              fetchPriority: j,
              fill: C,
              unoptimized: b,
              placeholder: R,
              loader: _,
              srcString: tr,
              onLoadRef: tn,
              onLoadingCompleteRef: ts,
              setBlurComplete: Z,
              setShowAltText: J,
            },
            $
          );
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(y, Object.assign({}, to, { ref: e })),
            P
              ? a.default.createElement(
                  l.default,
                  null,
                  a.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ti.src + ti.srcSet + ti.sizes,
                        rel: "preload",
                        as: "image",
                        href: ti.srcSet ? void 0 : ti.src,
                        imageSrcSet: ti.srcSet,
                        imageSizes: ti.sizes,
                        crossOrigin: $.crossOrigin,
                      },
                      v(j)
                    )
                  )
                )
              : null
          );
        });
      (e.default = x),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    95569: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(92648).Z,
        n = i(17273).Z,
        s = r(i(67294)),
        o = i(14532),
        a = i(83353),
        l = i(61410),
        u = i(79064),
        h = i(370),
        c = i(69955),
        d = i(24224),
        p = i(80508),
        f = i(81516),
        m = i(64266);
      let g = new Set();
      function v(t, e, i, r, n) {
        if (n || a.isLocalURL(e)) {
          if (!r.bypassPrefetchedCheck) {
            let n =
                void 0 !== r.locale
                  ? r.locale
                  : "locale" in t
                  ? t.locale
                  : void 0,
              s = e + "%" + i + "%" + n;
            if (g.has(s)) return;
            g.add(s);
          }
          Promise.resolve(t.prefetch(e, i, r)).catch((t) => {});
        }
      }
      function y(t) {
        return "string" == typeof t ? t : l.formatUrl(t);
      }
      let x = s.default.forwardRef(function (t, e) {
        let i, r;
        let {
            href: l,
            as: g,
            children: x,
            prefetch: b,
            passHref: P,
            replace: w,
            shallow: A,
            scroll: T,
            locale: S,
            onClick: E,
            onMouseEnter: C,
            onTouchStart: V,
            legacyBehavior: M = !1,
          } = t,
          k = n(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (i = x),
          M &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = s.default.createElement("a", null, i));
        let R = !1 !== b,
          D = s.default.useContext(c.RouterContext),
          j = s.default.useContext(d.AppRouterContext),
          L = null != D ? D : j,
          F = !D,
          { href: B, as: O } = s.default.useMemo(() => {
            if (!D) {
              let t = y(l);
              return { href: t, as: g ? y(g) : t };
            }
            let [t, e] = o.resolveHref(D, l, !0);
            return { href: t, as: g ? o.resolveHref(D, g) : e || t };
          }, [D, l, g]),
          I = s.default.useRef(B),
          U = s.default.useRef(O);
        M && (r = s.default.Children.only(i));
        let N = M ? r && "object" == typeof r && r.ref : e,
          [z, $, _] = p.useIntersection({ rootMargin: "200px" }),
          W = s.default.useCallback(
            (t) => {
              (U.current !== O || I.current !== B) &&
                (_(), (U.current = O), (I.current = B)),
                z(t),
                N &&
                  ("function" == typeof N
                    ? N(t)
                    : "object" == typeof N && (N.current = t));
            },
            [O, N, B, _, z]
          );
        s.default.useEffect(() => {
          L && $ && R && v(L, B, O, { locale: S }, F);
        }, [O, B, $, S, R, null == D ? void 0 : D.locale, L, F]);
        let H = {
          ref: W,
          onClick(t) {
            M || "function" != typeof E || E(t),
              M &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              L &&
                !t.defaultPrevented &&
                (function (t, e, i, r, n, o, l, u, h, c) {
                  let { nodeName: d } = t.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (t) {
                      let e = t.currentTarget,
                        i = e.getAttribute("target");
                      return (
                        (i && "_self" !== i) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !a.isLocalURL(i)))
                  )
                    return;
                  t.preventDefault();
                  let f = () => {
                    "beforePopState" in e
                      ? e[n ? "replace" : "push"](i, r, {
                          shallow: o,
                          locale: u,
                          scroll: l,
                        })
                      : e[n ? "replace" : "push"](r || i, {
                          forceOptimisticNavigation: !c,
                        });
                  };
                  h ? s.default.startTransition(f) : f();
                })(t, L, B, O, w, A, T, S, F, R);
          },
          onMouseEnter(t) {
            M || "function" != typeof C || C(t),
              M &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              L &&
                (R || !F) &&
                v(
                  L,
                  B,
                  O,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  F
                );
          },
          onTouchStart(t) {
            M || "function" != typeof V || V(t),
              M &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              L &&
                (R || !F) &&
                v(
                  L,
                  B,
                  O,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  F
                );
          },
        };
        if (u.isAbsoluteUrl(O)) H.href = O;
        else if (!M || P || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== S ? S : null == D ? void 0 : D.locale,
            e =
              (null == D ? void 0 : D.isLocaleDomain) &&
              f.getDomainLocale(
                O,
                t,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales
              );
          H.href =
            e ||
            m.addBasePath(
              h.addLocale(O, t, null == D ? void 0 : D.defaultLocale)
            );
        }
        return M
          ? s.default.cloneElement(r, H)
          : s.default.createElement("a", Object.assign({}, k, H), i);
      });
      (e.default = x),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    80508: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          let { rootRef: e, rootMargin: i, disabled: l } = t,
            u = l || !s,
            [h, c] = r.useState(!1),
            d = r.useRef(null),
            p = r.useCallback((t) => {
              d.current = t;
            }, []);
          r.useEffect(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName) {
                let r = (function (t, e, i) {
                  let {
                    id: r,
                    observer: n,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (r && (e = o.get(r))) return e;
                    let n = new Map(),
                      s = new IntersectionObserver((t) => {
                        t.forEach((t) => {
                          let e = n.get(t.target),
                            i = t.isIntersecting || t.intersectionRatio > 0;
                          e && i && e(i);
                        });
                      }, t);
                    return (
                      (e = { id: i, observer: s, elements: n }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    s.set(t, e),
                    n.observe(t),
                    function () {
                      if ((s.delete(t), n.unobserve(t), 0 === s.size)) {
                        n.disconnect(), o.delete(r);
                        let t = a.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
                return r;
              }
            } else if (!h) {
              let t = n.requestIdleCallback(() => c(!0));
              return () => n.cancelIdleCallback(t);
            }
          }, [u, i, e, h, d.current]);
          let f = r.useCallback(() => {
            c(!1);
          }, []);
          return [p, h, f];
        });
      var r = i(67294),
        n = i(10029);
      let s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    97757: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getImageBlurSvg = function (t) {
          let {
              widthInt: e,
              heightInt: i,
              blurWidth: r,
              blurHeight: n,
              blurDataURL: s,
              objectFit: o,
            } = t,
            a = r || e,
            l = n || i,
            u = s.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return a && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(a, " ")
                .concat(
                  l,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(r && n ? "1" : "20", "'/%3E")
                .concat(
                  u,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(s, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  "contain" === o
                    ? "xMidYMid"
                    : "cover" === o
                    ? "xMidYMid slice"
                    : "none",
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(s, "'/%3E%3C/svg%3E");
        });
    },
    57746: function (t, e) {
      "use strict";
      function i(t) {
        let { config: e, src: i, width: r, quality: n } = t;
        return ""
          .concat(e.path, "?url=")
          .concat(encodeURIComponent(i), "&w=")
          .concat(r, "&q=")
          .concat(n || 75);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        (i.__next_img_default = !0),
        (e.default = i);
    },
    25675: function (t, e, i) {
      t.exports = i(93740);
    },
    41664: function (t, e, i) {
      t.exports = i(95569);
    },
    11163: function (t, e, i) {
      t.exports = i(96885);
    },
    25426: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return nH;
        },
      });
      var r,
        n = i(67294);
      let s = (0, n.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        o = (0, n.createContext)({}),
        a = (0, n.createContext)(null),
        l = "undefined" != typeof document,
        u = l ? n.useLayoutEffect : n.useEffect,
        h = (0, n.createContext)({ strict: !1 });
      function c(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function d(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function p(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let f = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        m = ["initial", ...f];
      function g(t) {
        return p(t.animate) || m.some((e) => d(t[e]));
      }
      function v(t) {
        return !!(g(t) || t.variants);
      }
      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let x = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        b = {};
      for (let t in x) b[t] = { isEnabled: (e) => x[t].some((t) => !!e[t]) };
      function P(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      let w = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        A = 1,
        T = (0, n.createContext)({}),
        S = (0, n.createContext)({}),
        E = Symbol.for("motionComponentSymbol"),
        C = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function V(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (C.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let M = {},
        k = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        R = new Set(k);
      function D(t, { layout: e, layoutId: i }) {
        return (
          R.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!M[t] || "opacity" === t))
        );
      }
      let j = (t) => !!(t && t.getVelocity),
        L = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        F = k.length,
        B = (t) => (e) => "string" == typeof e && e.startsWith(t),
        O = B("--"),
        I = B("var(--"),
        U = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        N = (t, e, i) => Math.min(Math.max(i, t), e),
        z = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        $ = { ...z, transform: (t) => N(0, 1, t) },
        _ = { ...z, default: 1 },
        W = (t) => Math.round(1e5 * t) / 1e5,
        H = /(-)?([\d]*\.?[\d])+/g,
        G =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Y =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function q(t) {
        return "string" == typeof t;
      }
      let X = (t) => ({
          test: (e) => q(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        Z = X("deg"),
        K = X("%"),
        J = X("px"),
        Q = X("vh"),
        tt = X("vw"),
        te = {
          ...K,
          parse: (t) => K.parse(t) / 100,
          transform: (t) => K.transform(100 * t),
        },
        ti = { ...z, transform: Math.round },
        tr = {
          borderWidth: J,
          borderTopWidth: J,
          borderRightWidth: J,
          borderBottomWidth: J,
          borderLeftWidth: J,
          borderRadius: J,
          radius: J,
          borderTopLeftRadius: J,
          borderTopRightRadius: J,
          borderBottomRightRadius: J,
          borderBottomLeftRadius: J,
          width: J,
          maxWidth: J,
          height: J,
          maxHeight: J,
          size: J,
          top: J,
          right: J,
          bottom: J,
          left: J,
          padding: J,
          paddingTop: J,
          paddingRight: J,
          paddingBottom: J,
          paddingLeft: J,
          margin: J,
          marginTop: J,
          marginRight: J,
          marginBottom: J,
          marginLeft: J,
          rotate: Z,
          rotateX: Z,
          rotateY: Z,
          rotateZ: Z,
          scale: _,
          scaleX: _,
          scaleY: _,
          scaleZ: _,
          skew: Z,
          skewX: Z,
          skewY: Z,
          distance: J,
          translateX: J,
          translateY: J,
          translateZ: J,
          x: J,
          y: J,
          z: J,
          perspective: J,
          transformPerspective: J,
          opacity: $,
          originX: te,
          originY: te,
          originZ: J,
          zIndex: ti,
          fillOpacity: $,
          strokeOpacity: $,
          numOctaves: ti,
        };
      function tn(t, e, i, r) {
        let { style: n, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (O(t)) {
            s[t] = i;
            continue;
          }
          let r = tr[t],
            c = U(i, r);
          if (R.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (r.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (n[t] = c);
        }
        if (
          (!e.transform &&
            (l || r
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  r,
                  n
                ) {
                  let s = "";
                  for (let e = 0; e < F; e++) {
                    let i = k[e];
                    if (void 0 !== t[i]) {
                      let e = L[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    n ? (s = n(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t.transform, i, h, r))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let ts = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function to(t, e, i) {
        for (let r in e) j(e[r]) || D(r, i) || (t[r] = e[r]);
      }
      function ta(t, e, i) {
        let r = {},
          s = (function (t, e, i) {
            let r = t.style || {},
              s = {};
            return (
              to(s, r, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, n.useMemo)(() => {
                    let r = ts();
                    return (
                      tn(r, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, r.vars, r.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (r.tabIndex = 0),
          (r.style = s),
          r
        );
      }
      let tl = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function tu(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          tl.has(t)
        );
      }
      let th = (t) => !tu(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (th = (t) => (t.startsWith("on") ? !tu(t) : r(t)));
      } catch (t) {}
      function tc(t, e, i) {
        return "string" == typeof t ? t : J.transform(e + i * t);
      }
      let td = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tp = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tf(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((tn(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: f, dimensions: m } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== n || void 0 !== s || f.transform) &&
            (f.transformOrigin = (function (t, e, i) {
              let r = tc(e, t.x, t.width),
                n = tc(i, t.y, t.height);
              return `${r} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== r && (p.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? td : tp;
              t[s.offset] = J.transform(-r);
              let o = J.transform(e),
                a = J.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tm = () => ({ ...ts(), attrs: {} }),
        tg = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tv(t, e, i, r) {
        let s = (0, n.useMemo)(() => {
          let i = tm();
          return (
            tf(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tg(r),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          to(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      let ty = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tx(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tb = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tP(t, e, i, r) {
        for (let i in (tx(t, e, void 0, r), e.attrs))
          t.setAttribute(tb.has(i) ? i : ty(i), e.attrs[i]);
      }
      function tw(t, e) {
        let { style: i } = t,
          r = {};
        for (let n in i)
          (j(i[n]) || (e.style && j(e.style[n])) || D(n, t)) && (r[n] = i[n]);
        return r;
      }
      function tA(t, e) {
        let i = tw(t, e);
        for (let r in t)
          if (j(t[r]) || j(e[r])) {
            let e =
              -1 !== k.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            i[e] = t[r];
          }
        return i;
      }
      function tT(t, e, i, r = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          e
        );
      }
      let tS = (t) => Array.isArray(t),
        tE = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tC = (t) => (tS(t) ? t[t.length - 1] || 0 : t);
      function tV(t) {
        let e = j(t) ? t.get() : t;
        return tE(e) ? e.toValue() : e;
      }
      let tM = (t) => (e, i) => {
          let r = (0, n.useContext)(o),
            s = (0, n.useContext)(a),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                r,
                n,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, r) {
                    let n = {},
                      s = r(t, {});
                    for (let t in s) n[t] = tV(s[t]);
                    let { initial: o, animate: a } = t,
                      l = g(t),
                      u = v(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial;
                    h = h || !1 === o;
                    let c = h ? a : o;
                    if (c && "boolean" != typeof c && !p(c)) {
                      let e = Array.isArray(c) ? c : [c];
                      e.forEach((e) => {
                        let i = tT(t, e);
                        if (!i) return;
                        let { transitionEnd: r, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let t in r) n[t] = r[t];
                      });
                    }
                    return n;
                  })(r, n, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(r, t, o)), o;
              })(t, e, r, s);
          return i ? l() : P(l);
        },
        tk = {
          useVisualState: tM({
            scrapeMotionValuesFromProps: tA,
            createRenderState: tm,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tf(
                i,
                r,
                { enableHardwareAcceleration: !1 },
                tg(e.tagName),
                t.transformTemplate
              ),
                tP(e, i);
            },
          }),
        },
        tR = {
          useVisualState: tM({
            scrapeMotionValuesFromProps: tw,
            createRenderState: ts,
          }),
        };
      function tD(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      let tj = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tL(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tF = (t) => (e) => tj(e) && t(e, tL(e));
      function tB(t, e, i, r) {
        return tD(t, e, tF(i), r);
      }
      let tO = (t, e) => (i) => e(t(i)),
        tI = (...t) => t.reduce(tO);
      function tU(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tN = tU("dragHorizontal"),
        tz = tU("dragVertical");
      function t$(t) {
        let e = !1;
        if ("y" === t) e = tz();
        else if ("x" === t) e = tN();
        else {
          let t = tN(),
            i = tz();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function t_() {
        let t = t$(!0);
        return !t || (t(), !1);
      }
      class tW {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      let tH = { delta: 0, timestamp: 0, isProcessing: !1 },
        tG = !0,
        tY = !1,
        tq = ["read", "update", "preRender", "render", "postRender"],
        tX = tq.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                i = [],
                r = 0,
                n = !1,
                s = !1,
                o = new WeakSet(),
                a = {
                  schedule: (t, s = !1, a = !1) => {
                    let l = a && n,
                      u = l ? e : i;
                    return (
                      s && o.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && n && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1), o.delete(t);
                  },
                  process: (l) => {
                    if (n) {
                      s = !0;
                      return;
                    }
                    if (
                      ((n = !0),
                      ([e, i] = [i, e]),
                      (i.length = 0),
                      (r = e.length))
                    )
                      for (let i = 0; i < r; i++) {
                        let r = e[i];
                        r(l), o.has(r) && (a.schedule(r), t());
                      }
                    (n = !1), s && ((s = !1), a.process(l));
                  },
                };
              return a;
            })(() => (tY = !0))),
            t
          ),
          {}
        ),
        tZ = (t) => tX[t].process(tH),
        tK = (t) => {
          (tY = !1),
            (tH.delta = tG
              ? 1e3 / 60
              : Math.max(Math.min(t - tH.timestamp, 40), 1)),
            (tH.timestamp = t),
            (tH.isProcessing = !0),
            tq.forEach(tZ),
            (tH.isProcessing = !1),
            tY && ((tG = !1), requestAnimationFrame(tK));
        },
        tJ = () => {
          (tY = !0), (tG = !0), tH.isProcessing || requestAnimationFrame(tK);
        },
        tQ = tq.reduce((t, e) => {
          let i = tX[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (tY || tJ(), i.schedule(t, e, r))), t
          );
        }, {});
      function t0(t) {
        tq.forEach((e) => tX[e].cancel(t));
      }
      function t1(t, e) {
        let i = "onHover" + (e ? "Start" : "End"),
          r = (r, n) => {
            if ("touch" === r.type || t_()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && tQ.update(() => s[i](r, n));
          };
        return tB(t.current, "pointer" + (e ? "enter" : "leave"), r, {
          passive: !t.getProps()[i],
        });
      }
      let t5 = (t, e) => !!e && (t === e || t5(t, e.parentElement)),
        t3 = (t) => t;
      function t2(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tL(i));
      }
      let t9 = new WeakMap(),
        t6 = new WeakMap(),
        t4 = (t) => {
          let e = t9.get(t.target);
          e && e(t);
        },
        t7 = (t) => {
          t.forEach(t4);
        },
        t8 = { some: 0, all: 1 };
      function et(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function ee(t, e, i) {
        let r = t.getProps();
        return tT(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let ei = "data-" + ty("framerAppearId"),
        er = (t) => 1e3 * t,
        en = (t) => t / 1e3,
        es = { current: !1 },
        eo = (t) => Array.isArray(t) && "number" == typeof t[0],
        ea = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        el = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ea([0, 0.65, 0.55, 1]),
          circOut: ea([0.55, 0, 1, 0.45]),
          backIn: ea([0.31, 0.01, 0.66, -0.59]),
          backOut: ea([0.33, 1.53, 0.69, 0.99]),
        },
        eu = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        eh = {},
        ec = {};
      for (let t in eu)
        ec[t] = () => (void 0 === eh[t] && (eh[t] = eu[t]()), eh[t]);
      let ed = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ep(t, e, i, r) {
        if (t === e && i === r) return t3;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = ed((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ed(n(t), e, r));
      }
      let ef = ep(0.42, 0, 1, 1),
        em = ep(0, 0, 0.58, 1),
        eg = ep(0.42, 0, 0.58, 1),
        ev = (t) => Array.isArray(t) && "number" != typeof t[0],
        ey = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ex = (t) => (e) => 1 - t(1 - e),
        eb = (t) => 1 - Math.sin(Math.acos(t)),
        eP = ex(eb),
        ew = ey(eP),
        eA = ep(0.33, 1.53, 0.69, 0.99),
        eT = ex(eA),
        eS = ey(eT),
        eE = (t) =>
          (t *= 2) < 1 ? 0.5 * eT(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        eC = {
          linear: t3,
          easeIn: ef,
          easeInOut: eg,
          easeOut: em,
          circIn: eb,
          circInOut: ew,
          circOut: eP,
          backIn: eT,
          backInOut: eS,
          backOut: eA,
          anticipate: eE,
        },
        eV = (t) => {
          if (Array.isArray(t)) {
            t3(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return ep(e, i, r, n);
          }
          return "string" == typeof t
            ? (t3(void 0 !== eC[t], `Invalid easing type '${t}'`), eC[t])
            : t;
        },
        eM = (t, e) => (i) =>
          !!(
            (q(i) && Y.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        ek = (t, e, i) => (r) => {
          if (!q(r)) return r;
          let [n, s, o, a] = r.match(H);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eR = (t) => N(0, 255, t),
        eD = { ...z, transform: (t) => Math.round(eR(t)) },
        ej = {
          test: eM("rgb", "red"),
          parse: ek("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            eD.transform(t) +
            ", " +
            eD.transform(e) +
            ", " +
            eD.transform(i) +
            ", " +
            W($.transform(r)) +
            ")",
        },
        eL = {
          test: eM("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: ej.transform,
        },
        eF = {
          test: eM("hsl", "hue"),
          parse: ek("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            K.transform(W(e)) +
            ", " +
            K.transform(W(i)) +
            ", " +
            W($.transform(r)) +
            ")",
        },
        eB = {
          test: (t) => ej.test(t) || eL.test(t) || eF.test(t),
          parse: (t) =>
            ej.test(t) ? ej.parse(t) : eF.test(t) ? eF.parse(t) : eL.parse(t),
          transform: (t) =>
            q(t)
              ? t
              : t.hasOwnProperty("red")
              ? ej.transform(t)
              : eF.transform(t),
        },
        eO = (t, e, i) => -i * t + i * e + t;
      function eI(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let eU = (t, e, i) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r));
        },
        eN = [eL, ej, eF],
        ez = (t) => eN.find((e) => e.test(t));
      function e$(t) {
        let e = ez(t);
        t3(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eF &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = eI(a, r, t + 1 / 3)),
                  (s = eI(a, r, t)),
                  (o = eI(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let e_ = (t, e) => {
          let i = e$(t),
            r = e$(e),
            n = { ...i };
          return (t) => (
            (n.red = eU(i.red, r.red, t)),
            (n.green = eU(i.green, r.green, t)),
            (n.blue = eU(i.blue, r.blue, t)),
            (n.alpha = eO(i.alpha, r.alpha, t)),
            ej.transform(n)
          );
        },
        eW = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: t3,
        },
        eH = { regex: G, countKey: "Colors", token: "${c}", parse: eB.parse },
        eG = { regex: H, countKey: "Numbers", token: "${n}", parse: z.parse };
      function eY(t, { regex: e, countKey: i, token: r, parse: n }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, r)),
          t.values.push(...s.map(n)));
      }
      function eq(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && eY(i, eW), eY(i, eH), eY(i, eG), i;
      }
      function eX(t) {
        return eq(t).values;
      }
      function eZ(t) {
        let { values: e, numColors: i, numVars: r, tokenised: n } = eq(t),
          s = e.length;
        return (t) => {
          let e = n;
          for (let n = 0; n < s; n++)
            e =
              n < r
                ? e.replace(eW.token, t[n])
                : n < r + i
                ? e.replace(eH.token, eB.transform(t[n]))
                : e.replace(eG.token, W(t[n]));
          return e;
        };
      }
      let eK = (t) => ("number" == typeof t ? 0 : t),
        eJ = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              q(t) &&
              ((null === (e = t.match(H)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(G)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eX,
          createTransformer: eZ,
          getAnimatableNone: function (t) {
            let e = eX(t),
              i = eZ(t);
            return i(e.map(eK));
          },
        },
        eQ = (t, e) => (i) => `${i > 0 ? e : t}`;
      function e0(t, e) {
        return "number" == typeof t
          ? (i) => eO(t, e, i)
          : eB.test(t)
          ? e_(t, e)
          : t.startsWith("var(")
          ? eQ(t, e)
          : e3(t, e);
      }
      let e1 = (t, e) => {
          let i = [...t],
            r = i.length,
            n = t.map((t, i) => e0(t, e[i]));
          return (t) => {
            for (let e = 0; e < r; e++) i[e] = n[e](t);
            return i;
          };
        },
        e5 = (t, e) => {
          let i = { ...t, ...e },
            r = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (r[n] = e0(t[n], e[n]));
          return (t) => {
            for (let e in r) i[e] = r[e](t);
            return i;
          };
        },
        e3 = (t, e) => {
          let i = eJ.createTransformer(e),
            r = eq(t),
            n = eq(e),
            s =
              r.numVars === n.numVars &&
              r.numColors === n.numColors &&
              r.numNumbers >= n.numNumbers;
          return s
            ? tI(e1(r.values, n.values), i)
            : (t3(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eQ(t, e));
        },
        e2 = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        },
        e9 = (t, e) => (i) => eO(t, e, i);
      function e6(t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
        let s = t.length;
        if (
          (t3(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let r = [],
              n =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eB.test(t) ? e_ : e3;
                  else if (Array.isArray(t)) return e1;
                  else if ("object" == typeof t) return e5;
                  return e9;
                })(t[0]),
              s = t.length - 1;
            for (let i = 0; i < s; i++) {
              let s = n(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || t3 : e;
                s = tI(t, s);
              }
              r.push(s);
            }
            return r;
          })(e, r, n),
          a = o.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = e2(t[i], t[i + 1], e);
            return o[i](r);
          };
        return i ? (e) => l(N(t[0], t[s - 1], e)) : l;
      }
      function e4({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = ev(r) ? r.map(eV) : eV(r),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = e2(0, e, r);
                        t.push(eO(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = e6(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || eg).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function e7(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return (r = i - t(s)), (n = e - s) ? r * (1e3 / n) : 0;
      }
      function e8(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let it = ["duration", "bounce"],
        ie = ["stiffness", "damping", "mass"];
      function ii(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ir({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ii(t, ie) && ii(t, it)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, s;
                t3(t <= er(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = N(0.05, 1, o)),
                  (t = N(0.01, 10, en(t))),
                  o < 1
                    ? ((n = (e) => {
                        let r = e * o,
                          n = r * t,
                          s = e8(e, o);
                        return 0.001 - ((r - i) / s) * Math.exp(-n);
                      }),
                      (s = (e) => {
                        let r = e * o,
                          s = r * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = e8(Math.pow(e, 2), o),
                          u = -n(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((n = (e) => {
                        let r = Math.exp(-e * t),
                          n = (e - i) * t + 1;
                        return -0.001 + r * n;
                      }),
                      (s = (e) => {
                        let r = Math.exp(-e * t),
                          n = (i - e) * (t * t);
                        return r * n;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, a);
                if (((t = er(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(r),
          f = c ? -en(c) : 0,
          m = u / (2 * Math.sqrt(l * h)),
          g = o - s,
          v = en(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), m < 1)) {
          let t = e8(v, m);
          n = (e) =>
            o -
            Math.exp(-m * v * e) *
              (((f + m * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === m)
          n = (t) => o - Math.exp(-v * t) * (g + (f + v * g) * t);
        else {
          let t = v * Math.sqrt(m * m - 1);
          n = (e) => {
            let i = Math.min(t * e, 300);
            return (
              o -
              (Math.exp(-m * v * e) *
                ((f + m * v * g) * Math.sinh(i) + t * g * Math.cosh(i))) /
                t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let r = n(t);
            if (p) a.done = t >= d;
            else {
              let s = f;
              0 !== t && (s = m < 1 ? e7(n, t, r) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - r) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : r), a;
          },
        };
      }
      function is({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let b = (t) => -v * Math.exp(-t / r),
          P = (t) => x + b(t),
          w = (t) => {
            let e = b(t),
              i = P(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          A = (t) => {
            m(f.value) &&
              ((c = t),
              (d = ir({
                keyframes: [f.value, g(f.value)],
                velocity: e7(P, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), A(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || w(t), f);
            },
          }
        );
      }
      let io = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => tQ.update(e, !0),
          stop: () => t0(e),
          now: () => (tH.isProcessing ? tH.timestamp : performance.now()),
        };
      };
      function ia(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let il = { decay: is, inertia: is, tween: e4, keyframes: e4, spring: ir };
      function iu({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = io,
        keyframes: r,
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          f,
          m,
          g,
          v,
          y = 1,
          x = !1,
          b = () => {
            p && p(),
              (f = new Promise((t) => {
                p = t;
              }));
          };
        b();
        let P = il[n] || e4;
        P !== e4 &&
          "number" != typeof r[0] &&
          ((g = e6([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let w = P({ ...d, keyframes: r });
        "mirror" === a &&
          (v = P({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let A = "idle",
          T = null,
          S = null,
          E = null;
        null === w.calculatedDuration && s && (w.calculatedDuration = ia(w));
        let { calculatedDuration: C } = w,
          V = 1 / 0,
          M = 1 / 0;
        null !== C && (M = (V = C + o) * (s + 1) - o);
        let k = 0,
          R = (t) => {
            if (null === S) return;
            y > 0 && (S = Math.min(S, t)), (k = null !== T ? T : (t - S) * y);
            let i = k - e,
              n = i < 0;
            (k = Math.max(i, 0)), "finished" === A && null === T && (k = M);
            let l = k,
              u = w;
            if (s) {
              let t = k / V,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let r = !!(e % 2);
              r &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / V))
                  : "mirror" === a && (u = v));
              let n = N(0, 1, i);
              k > M && (n = "reverse" === a && r ? 1 : 0), (l = n * V);
            }
            let h = n ? { done: !1, value: r[0] } : u.next(l);
            g && (h.value = g(h.value));
            let { done: d } = h;
            n || null === C || (d = k >= M);
            let p =
              null === T &&
              ("finished" === A || ("running" === A && d) || (y < 0 && k <= 0));
            return c && c(h.value), p && L(), h;
          },
          D = () => {
            m && m.stop(), (m = void 0);
          },
          j = () => {
            (A = "idle"), D(), b(), (S = E = null);
          },
          L = () => {
            (A = "finished"), h && h(), D(), b();
          },
          F = () => {
            if (x) return;
            m || (m = i(R));
            let t = m.now();
            l && l(),
              null !== T ? (S = t - T) : (S && "finished" !== A) || (S = t),
              (E = S),
              (T = null),
              (A = "running"),
              m.start();
          };
        t && F();
        let B = {
          then: (t, e) => f.then(t, e),
          get time() {
            return en(k);
          },
          set time(newTime) {
            (k = newTime = er(newTime)),
              null === T && m && 0 !== y
                ? (S = m.now() - newTime / y)
                : (T = newTime);
          },
          get duration() {
            let t =
              null === w.calculatedDuration ? ia(w) : w.calculatedDuration;
            return en(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (B.time = en(k));
          },
          get state() {
            return A;
          },
          play: F,
          pause: () => {
            (A = "paused"), (T = k);
          },
          stop: () => {
            (x = !0), "idle" !== A && ((A = "idle"), u && u(), j());
          },
          cancel: () => {
            null !== E && R(E), j();
          },
          complete: () => {
            A = "finished";
          },
          sample: (t) => ((S = 0), R(t)),
        };
        return B;
      }
      let ih = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ic = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && el[e]) ||
              eo(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        id = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ip = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        im = { type: "keyframes", duration: 0.8 },
        ig = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        iv = (t, { keyframes: e }) =>
          e.length > 2
            ? im
            : R.has(t)
            ? t.startsWith("scale")
              ? ip(e[1])
              : id
            : ig,
        iy = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e && eJ.test(e) && !e.startsWith("url("))
          ),
        ix = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ib(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(H) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = ix.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let iP = /([a-z-]*)\(.*?\)/g,
        iw = {
          ...eJ,
          getAnimatableNone: (t) => {
            let e = t.match(iP);
            return e ? e.map(ib).join(" ") : t;
          },
        },
        iA = {
          ...tr,
          color: eB,
          backgroundColor: eB,
          outlineColor: eB,
          fill: eB,
          stroke: eB,
          borderColor: eB,
          borderTopColor: eB,
          borderRightColor: eB,
          borderBottomColor: eB,
          borderLeftColor: eB,
          filter: iw,
          WebkitFilter: iw,
        },
        iT = (t) => iA[t];
      function iS(t, e) {
        let i = iT(t);
        return (
          i !== iw && (i = eJ),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      function iE(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function iC(t) {
        return "number" == typeof t ? 0 : iS("", t);
      }
      function iV(t, e) {
        return t[e] || t.default || t;
      }
      let iM =
        (t, e, i, r = {}) =>
        (n) => {
          let s = iV(r, t) || {},
            o = s.delay || r.delay || 0,
            { elapsed: a = 0 } = r;
          a -= er(o);
          let l = (function (t, e, i, r) {
              let n = iy(e, i),
                s = void 0 !== r.from ? r.from : t.get();
              return ("none" === s && n && "string" == typeof i
                ? (s = iS(e, i))
                : iE(s) && "string" == typeof i
                ? (s = iC(i))
                : !Array.isArray(i) &&
                  iE(i) &&
                  "string" == typeof s &&
                  (i = iC(s)),
              Array.isArray(i))
                ? (function (t, [...e]) {
                    for (let i = 0; i < e.length; i++)
                      null === e[i] && (e[i] = 0 === i ? t : e[i - 1]);
                    return e;
                  })(s, i)
                : [s, i];
            })(e, t, i, s),
            u = l[0],
            h = l[l.length - 1],
            c = iy(t, u),
            d = iy(t, h);
          t3(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              n(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (p = { ...p, ...iv(t, p) }),
            p.duration && (p.duration = er(p.duration)),
            p.repeatDelay && (p.repeatDelay = er(p.repeatDelay)),
            !c || !d || es.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: r,
            }) {
              let n = () => (
                i && i(t[t.length - 1]),
                r && r(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: t3,
                  pause: t3,
                  stop: t3,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: t3,
                  complete: t3,
                }
              );
              return e
                ? iu({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: n,
                  })
                : n();
            })(p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: r, ...n }) {
              let s, o;
              let a =
                ec.waapi() &&
                ih.has(e) &&
                !n.repeatDelay &&
                "mirror" !== n.repeatType &&
                0 !== n.damping &&
                "inertia" !== n.type;
              if (!a) return !1;
              let l = !1,
                u = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              u();
              let { keyframes: h, duration: c = 300, ease: d, times: p } = n;
              if (ic(e, n)) {
                let t = iu({ ...n, repeat: 0, delay: 0 }),
                  e = { done: !1, value: h[0] },
                  i = [],
                  r = 0;
                for (; !e.done && r < 2e4; )
                  i.push((e = t.sample(r)).value), (r += 10);
                (p = void 0), (h = i), (c = r - 10), (d = "linear");
              }
              let f = (function (
                  t,
                  e,
                  i,
                  {
                    delay: r = 0,
                    duration: n,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: i };
                  l && (u.offset = l);
                  let h = (function t(e) {
                    if (e)
                      return eo(e)
                        ? ea(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : el[e];
                  })(a);
                  return (
                    Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                      delay: r,
                      duration: n,
                      easing: Array.isArray(h) ? "linear" : h,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, h, {
                  ...n,
                  duration: c,
                  ease: d,
                  times: p,
                }),
                m = () => f.cancel(),
                g = () => {
                  tQ.update(m), s(), u();
                };
              return (
                (f.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let r =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[r];
                    })(h, n)
                  ),
                    r && r(),
                    g();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  get time() {
                    return en(f.currentTime || 0);
                  },
                  set time(newTime) {
                    f.currentTime = er(newTime);
                  },
                  get speed() {
                    return f.playbackRate;
                  },
                  set speed(newSpeed) {
                    f.playbackRate = newSpeed;
                  },
                  get duration() {
                    return en(c);
                  },
                  play: () => {
                    l || (f.play(), t0(m));
                  },
                  pause: () => f.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === f.playState)) return;
                    let { currentTime: e } = f;
                    if (e) {
                      let i = iu({ ...n, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    g();
                  },
                  complete: () => f.finish(),
                  cancel: g,
                }
              );
            })(e, t, p);
            if (i) return i;
          }
          return iu(p);
        };
      function ik(t) {
        return !!(j(t) && t.add);
      }
      let iR = (t) => /^\-?\d*\.?\d+$/.test(t),
        iD = (t) => /^0[^.\s]+$/.test(t);
      function ij(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function iL(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class iF {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return ij(this.subscriptions, t), () => iL(this.subscriptions, t);
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iB = (t) => !isNaN(parseFloat(t));
      class iO {
        constructor(t, e = {}) {
          (this.version = "10.12.4"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: r } = tH;
              this.lastUpdated !== r &&
                ((this.timeDelta = i),
                (this.lastUpdated = r),
                tQ.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              tQ.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = iB(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new iF());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tQ.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function iI(t, e) {
        return new iO(t, e);
      }
      let iU = (t) => (e) => e.test(t),
        iN = [
          z,
          J,
          K,
          Z,
          tt,
          Q,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        iz = (t) => iN.find(iU(t)),
        i$ = [...iN, eB, eJ],
        i_ = (t) => i$.find(iU(t));
      function iW(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        r && (s = r);
        let u = [],
          h = n && t.animationState && t.animationState.getState()[n];
        for (let e in a) {
          let r = t.getValue(e),
            n = a[e];
          if (
            !r ||
            void 0 === n ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            let i = t.getProps()[ei];
            i && (o.elapsed = window.HandoffAppearAnimations(i, e, r, tQ));
          }
          r.start(
            iM(e, r, n, t.shouldReduceMotion && R.has(e) ? { type: !1 } : o)
          );
          let c = r.animation;
          ik(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let i = ee(t, e),
                    {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...r })) {
                    var o;
                    let i = tC(s[e]);
                    (o = e),
                      t.hasValue(o)
                        ? t.getValue(o).set(i)
                        : t.addValue(o, iI(i));
                  }
                })(t, o);
            }),
          u
        );
      }
      function iH(t, e, i = {}) {
        let r = ee(t, e, i.custom),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(iW(t, r, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(iG)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iH(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = n;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function iG(t, e) {
        return t.sortNodePosition(e);
      }
      let iY = [...f].reverse(),
        iq = f.length;
      function iX(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let iZ = 0,
        iK = (t, e) => Math.abs(t - e);
      class iJ {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = i1(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iK(t.x, e.x),
                      r = iK(t.y, e.y);
                    return Math.sqrt(i ** 2 + r ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = tH;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iQ(e, this.transformPagePoint)),
                tQ.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: r } = this.handlers,
                n = i1(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : iQ(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, n), r && r(t, n);
            }),
            !tj(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let r = tL(t),
            n = iQ(r, this.transformPagePoint),
            { point: s } = n,
            { timestamp: o } = tH;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, i1(n, this.history)),
            (this.removeListeners = tI(
              tB(window, "pointermove", this.handlePointerMove),
              tB(window, "pointerup", this.handlePointerUp),
              tB(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), t0(this.updatePoint);
        }
      }
      function iQ(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function i0(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function i1({ point: t }, e) {
        return {
          point: t,
          delta: i0(t, i5(e)),
          offset: i0(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = i5(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > er(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = en(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function i5(t) {
        return t[t.length - 1];
      }
      function i3(t) {
        return t.max - t.min;
      }
      function i2(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function i9(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = eO(e.min, e.max, t.origin)),
          (t.scale = i3(i) / i3(e)),
          (i2(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = eO(i.min, i.max, t.origin) - t.originPoint),
          (i2(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function i6(t, e, i, r) {
        i9(t.x, e.x, i.x, r ? r.originX : void 0),
          i9(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function i4(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + i3(e));
      }
      function i7(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + i3(e));
      }
      function i8(t, e, i) {
        i7(t.x, e.x, i.x), i7(t.y, e.y, i.y);
      }
      function rt(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function re(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function ri(t, e, i) {
        return { min: rr(t, e), max: rr(t, i) };
      }
      function rr(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let rn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rs = () => ({ x: rn(), y: rn() }),
        ro = () => ({ min: 0, max: 0 }),
        ra = () => ({ x: ro(), y: ro() });
      function rl(t) {
        return [t("x"), t("y")];
      }
      function ru({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function rh(t) {
        return void 0 === t || 1 === t;
      }
      function rc({ scale: t, scaleX: e, scaleY: i }) {
        return !rh(t) || !rh(e) || !rh(i);
      }
      function rd(t) {
        return rc(t) || rp(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function rp(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function rf(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function rm(t, e = 0, i = 1, r, n) {
        (t.min = rf(t.min, e, i, r, n)), (t.max = rf(t.max, e, i, r, n));
      }
      function rg(t, { x: e, y: i }) {
        rm(t.x, e.translate, e.scale, e.originPoint),
          rm(t.y, i.translate, i.scale, i.originPoint);
      }
      function rv(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function ry(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rx(t, e, [i, r, n]) {
        let s = void 0 !== e[n] ? e[n] : 0.5,
          o = eO(t.min, t.max, s);
        rm(t, e[i], e[r], o, e.scale);
      }
      let rb = ["x", "scaleX", "originX"],
        rP = ["y", "scaleY", "originY"];
      function rw(t, e) {
        rx(t.x, e, rb), rx(t.y, e, rP);
      }
      function rA(t, e) {
        return ru(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let rT = new WeakMap();
      class rS {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ra()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let r = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tL(t, "page").point);
            },
            n = (t, e) => {
              let {
                drag: i,
                dragPropagation: r,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !r &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = t$(i)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                rl((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (K.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let r = i.layout.layoutBox[t];
                      if (r) {
                        let t = i3(r);
                        e = t * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && tQ.update(() => n(t, e), !1, !0);
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: r,
                onDirectionLock: n,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (r && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new iJ(
            t,
            { onSessionStart: r, onStart: n, onMove: s, onSessionEnd: o },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && tQ.update(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !rE(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? eO(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? eO(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            r = this.constraints;
          t && c(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: rt(t.x, i, n), y: rt(t.y, e, r) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ri(t, "left", "right"), y: ri(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rl((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !c(e)) return !1;
          let r = e.current;
          t3(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = rA(t, i),
                { scroll: n } = e;
              return n && (ry(r.x, n.offset.x), ry(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: re((t = n.layout.layoutBox).x, s.x), y: re(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = ru(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = rl((o) => {
              if (!rE(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(iM(t, i, 0, e));
        }
        stopAnimation() {
          rl((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            r = i[e];
          return (
            r ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          rl((e) => {
            let { drag: i } = this.getProps();
            if (!rE(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - eO(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!c(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          rl((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = i3(t),
                  n = i3(e);
                return (
                  n > r
                    ? (i = e2(e.min, e.max - r, t.min))
                    : r > n && (i = e2(t.min, t.max - n, e.min)),
                  N(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            rl((e) => {
              if (!rE(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(eO(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rT.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tB(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              c(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", i);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            i();
          let s = tD(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (rl((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function rE(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let rC = (t) => (e, i) => {
        t && tQ.update(() => t(e, i));
      };
      function rV(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rM = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!J.test(t)) return t;
            t = parseFloat(t);
          }
          let i = rV(t, e.target.x),
            r = rV(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      class rk extends n.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(M, rD),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (w.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    tQ.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rR(t) {
        let [e, i] = (function () {
            let t = (0, n.useContext)(a);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              s = (0, n.useId)();
            (0, n.useEffect)(() => r(s), []);
            let o = () => i && i(s);
            return !e && i ? [!1, o] : [!0];
          })(),
          r = (0, n.useContext)(T);
        return n.createElement(rk, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, n.useContext)(S),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rD = {
          borderRadius: {
            ...rM,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rM,
          borderTopRightRadius: rM,
          borderBottomLeftRadius: rM,
          borderBottomRightRadius: rM,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = eJ.parse(t);
              if (r.length > 5) return t;
              let n = eJ.createTransformer(t),
                s = "number" != typeof r[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (r[0 + s] /= o), (r[1 + s] /= a);
              let l = eO(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        rj = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rL = rj.length,
        rF = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rB = (t) => "number" == typeof t || J.test(t);
      function rO(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rI = rN(0, 0.5, eP),
        rU = rN(0.5, 0.95, t3);
      function rN(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(e2(t, e, r)));
      }
      function rz(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function r$(t, e) {
        rz(t.x, e.x), rz(t.y, e.y);
      }
      function r_(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rW(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (K.test(e)) {
            e = parseFloat(e);
            let t = eO(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = eO(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = r_(t.min, e, i, a, n)),
            (t.max = r_(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let rH = ["x", "scaleX", "originX"],
        rG = ["y", "scaleY", "originY"];
      function rY(t, e, i, r) {
        rW(t.x, e, rH, i ? i.x : void 0, r ? r.x : void 0),
          rW(t.y, e, rG, i ? i.y : void 0, r ? r.y : void 0);
      }
      function rq(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rX(t) {
        return rq(t.x) && rq(t.y);
      }
      function rZ(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function rK(t) {
        return i3(t.x) / i3(t.y);
      }
      class rJ {
        constructor() {
          this.members = [];
        }
        add(t) {
          ij(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (iL(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rQ(t, e, i) {
        let r = "",
          n = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            n && (r += `rotateY(${n}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none";
      }
      let r0 = (t, e) => t.depth - e.depth;
      class r1 {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          ij(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          iL(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(r0),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let r5 = ["", "X", "Y", "Z"],
        r3 = 0,
        r2 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function r9({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t, i = {}, r = null == e ? void 0 : e()) {
            (this.id = r3++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (r2.totalNodes =
                  r2.resolvedTargetDeltas =
                  r2.recalculatedProjection =
                    0),
                  this.nodes.forEach(r7),
                  this.nodes.forEach(nn),
                  this.nodes.forEach(ns),
                  this.nodes.forEach(r8),
                  window.MotionDebug && window.MotionDebug.record(r2);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = i),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new r1());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new iF()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, i = !1) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      r = ({ timestamp: n }) => {
                        let s = n - i;
                        s >= e && (t0(r), t(s - e));
                      };
                    return tQ.read(r, !0), () => t0(r);
                  })(r, 250)),
                  w.hasAnimatedSinceResize &&
                    ((w.hasAnimatedSinceResize = !1), this.nodes.forEach(nr));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nc,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !rZ(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...iV(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || 0 !== this.animationProgress || nr(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              t0(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(no),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ne);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(nd), this.potentialNodes.clear()),
              this.nodes.forEach(ni),
              this.nodes.forEach(r6),
              this.nodes.forEach(r4),
              this.clearAllSnapshots(),
              tX.update.process(tH),
              tX.preRender.process(tH),
              tX.render.process(tH));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nt), this.sharedNodes.forEach(na);
          }
          scheduleUpdateProjection() {
            tQ.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tQ.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ra()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !rX(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || rd(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              np((e = r).x),
              np(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ra();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (ry(e.x, i.offset.x), ry(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = ra();
            r$(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  r$(e, t);
                  let { scroll: i } = this.root;
                  i && (ry(e.x, -i.offset.x), ry(e.y, -i.offset.y));
                }
                ry(e.x, n.offset.x), ry(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = ra();
            r$(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rw(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rd(r.latestValues) && rw(i, r.latestValues);
            }
            return rd(this.latestValues) && rw(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ra();
            r$(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !rd(i.latestValues)) continue;
              rc(i.latestValues) && i.updateSnapshot();
              let r = ra(),
                n = i.measurePageBox();
              r$(r, n),
                rY(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return rd(this.latestValues) && rY(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tH.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = tH.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ra()),
                    (this.relativeTargetOrigin = ra()),
                    i8(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    r$(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ra()), (this.targetWithTransforms = ra())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      i4(i.x, r.x, n.x),
                      i4(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : r$(this.target, this.layout.layoutBox),
                      rg(this.target, this.targetDelta))
                    : r$(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ra()),
                      (this.relativeTargetOrigin = ra()),
                      i8(this.relativeTargetOrigin, this.target, t.target),
                      r$(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                r2.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rc(this.parent.latestValues) ||
              rp(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === tH.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            r$(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, i, r = !1) {
                let n, s;
                let o = i.length;
                if (o) {
                  e.x = e.y = 1;
                  for (let a = 0; a < o; a++) {
                    s = (n = i[a]).projectionDelta;
                    let o = n.instance;
                    (!o || !o.style || "contents" !== o.style.display) &&
                      (r &&
                        n.options.layoutScroll &&
                        n.scroll &&
                        n !== n.root &&
                        rw(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                      s && ((e.x *= s.x.scale), (e.y *= s.y.scale), rg(t, s)),
                      r && rd(n.latestValues) && rw(t, n.latestValues));
                  }
                  (e.x = rv(e.x)), (e.y = rv(e.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, i);
            let { target: o } = e;
            if (!o) return;
            this.projectionDelta ||
              ((this.projectionDelta = rs()),
              (this.projectionDeltaWithTransform = rs()));
            let a = this.treeScale.x,
              l = this.treeScale.y,
              u = this.projectionTransform;
            i6(
              this.projectionDelta,
              this.layoutCorrected,
              o,
              this.latestValues
            ),
              (this.projectionTransform = rQ(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== a ||
                this.treeScale.y !== l) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              r2.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = rs();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ra(),
              l = r ? r.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(nh)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var r, l;
                let u = e / 1e3;
                nl(o.x, t.x, u),
                  nl(o.y, t.y, u),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (i8(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (r = this.relativeTarget),
                    (l = this.relativeTargetOrigin),
                    nu(r.x, l.x, a.x, u),
                    nu(r.y, l.y, a.y, u),
                    i &&
                      rZ(this.relativeTarget, i) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ra()),
                    r$(i, this.relativeTarget)),
                  h &&
                    ((this.animationValues = s),
                    (function (t, e, i, r, n, s) {
                      n
                        ? ((t.opacity = eO(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            rI(r)
                          )),
                          (t.opacityExit = eO(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            rU(r)
                          )))
                        : s &&
                          (t.opacity = eO(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            r
                          ));
                      for (let n = 0; n < rL; n++) {
                        let s = `border${rj[n]}Radius`,
                          o = rO(e, s),
                          a = rO(i, s);
                        if (void 0 === o && void 0 === a) continue;
                        o || (o = 0), a || (a = 0);
                        let l = 0 === o || 0 === a || rB(o) === rB(a);
                        l
                          ? ((t[s] = Math.max(eO(rF(o), rF(a), r), 0)),
                            (K.test(a) || K.test(o)) && (t[s] += "%"))
                          : (t[s] = a);
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = eO(e.rotate || 0, i.rotate || 0, r));
                    })(s, n, this.latestValues, u, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = u);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (t0(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tQ.update(() => {
                (w.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = j(t) ? t : iI(t);
                    return r.start(iM("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                nf(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || ra();
                let e = i3(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = i3(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              r$(e, i),
                rw(e, n),
                i6(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rJ());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let r = {};
            for (let e = 0; e < r5.length; e++) {
              let n = "rotate" + r5[e];
              i[n] && ((r[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), r)) t.setStaticValue(e, r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tV(t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tV(t.pointerEvents) || "")),
                this.hasProjected &&
                  !rd(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rQ(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            M)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = M[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tV(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ne),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r6(t) {
        t.updateLayout();
      }
      function r4(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? rl((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = i3(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : nf(n, i.layoutBox, e) &&
              rl((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = i3(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = rs();
          i6(o, e, i.layoutBox);
          let a = rs();
          s
            ? i6(a, t.applyTransform(r, !0), i.measuredBox)
            : i6(a, e, i.layoutBox);
          let l = !rX(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = ra();
                i8(o, i.layoutBox, n.layoutBox);
                let a = ra();
                i8(a, e, s.layoutBox),
                  rZ(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function r7(t) {
        r2.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function r8(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nt(t) {
        t.clearSnapshot();
      }
      function ne(t) {
        t.clearMeasurements();
      }
      function ni(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nr(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function nn(t) {
        t.resolveTargetDelta();
      }
      function ns(t) {
        t.calcProjection();
      }
      function no(t) {
        t.resetRotation();
      }
      function na(t) {
        t.removeLeadSnapshot();
      }
      function nl(t, e, i) {
        (t.translate = eO(e.translate, 0, i)),
          (t.scale = eO(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nu(t, e, i, r) {
        (t.min = eO(e.min, i.min, r)), (t.max = eO(e.max, i.max, r));
      }
      function nh(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function nd(t, e) {
        let i = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (t.path[e].instance) {
            i = t.path[e];
            break;
          }
        let r = i && i !== t.root ? i.instance : document,
          n = r.querySelector(`[data-projection-id="${e}"]`);
        n && t.mount(n, !0);
      }
      function np(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function nf(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !i2(rK(e), rK(i), 0.2))
        );
      }
      let nm = r9({
          attachResizeListener: (t, e) => tD(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ng = { current: void 0 },
        nv = r9({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ng.current) {
              let t = new nm(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ng.current = t);
            }
            return ng.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        ny = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nx(t, e, i = 1) {
        t3(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [r, n] = (function (t) {
          let e = ny.exec(t);
          if (!e) return [,];
          let [, i, r] = e;
          return [i, r];
        })(t);
        if (!r) return;
        let s = window.getComputedStyle(e).getPropertyValue(r);
        return s ? s.trim() : I(n) ? nx(n, e, i + 1) : n;
      }
      let nb = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        nP = (t) => nb.has(t),
        nw = (t) => Object.keys(t).some(nP),
        nA = (t) => t === z || t === J,
        nT = (t, e) => parseFloat(t.split(", ")[e]),
        nS =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/);
            if (n) return nT(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/);
              return e ? nT(e[1], t) : 0;
            }
          },
        nE = new Set(["x", "y", "z"]),
        nC = k.filter((t) => !nE.has(t)),
        nV = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: nS(4, 13),
          y: nS(5, 14),
        },
        nM = (t, e, i) => {
          let r = e.measureViewportBox(),
            n = e.current,
            s = getComputedStyle(n),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = nV[t](r, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let r = e.getValue(i);
              r && r.jump(a[i]), (t[i] = nV[i](l, s));
            }),
            t
          );
        },
        nk = (t, e, i = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          let n = Object.keys(e).filter(nP),
            s = [],
            o = !1,
            a = [];
          if (
            (n.forEach((n) => {
              let l;
              let u = t.getValue(n);
              if (!t.hasValue(n)) return;
              let h = i[n],
                c = iz(h),
                d = e[n];
              if (tS(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = iz((h = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? t3(
                        iz(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : t3(
                        (l = iz(d[i])) === c || (nA(c) && nA(l)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else l = iz(d);
              if (c !== l) {
                if (nA(c) && nA(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[n] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === J &&
                        (e[n] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[n] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            nC.forEach((i) => {
                              let r = t.getValue(i);
                              void 0 !== r &&
                                (e.push([i, r.get()]),
                                r.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(n),
                      (r[n] = void 0 !== r[n] ? r[n] : e[n]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: r };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = nM(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              l && null !== i && window.scrollTo({ top: i }),
              { target: n, transitionEnd: r }
            );
          }
        },
        nR = (t, e, i, r) => {
          var n, s;
          let o = (function (t, { ...e }, i) {
            let r = t.current;
            if (!(r instanceof Element)) return { target: e, transitionEnd: i };
            for (let n in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!I(e)) return;
              let i = nx(e, r);
              i && t.set(i);
            }),
            e)) {
              let t = e[n];
              if (!I(t)) continue;
              let s = nx(t, r);
              s && ((e[n] = s), i || (i = {}), void 0 === i[n] && (i[n] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, r);
          return (
            (e = o.target),
            (r = o.transitionEnd),
            (n = e),
            (s = r),
            nw(n) ? nk(t, n, i, s) : { target: n, transitionEnd: s }
          );
        },
        nD = { current: null },
        nj = { current: !1 },
        nL = new WeakMap(),
        nF = Object.keys(b),
        nB = nF.length,
        nO = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nI = m.length;
      class nU {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            visualState: n,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tQ.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = n;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = s),
            (this.isControllingVariants = g(e)),
            (this.isVariantNode = v(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && j(e) && (e.set(o[t], !1), ik(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nL.set(t, this),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nj.current ||
              (function () {
                if (((nj.current = !0), l)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nD.current = t.matches);
                    t.addListener(e), e();
                  } else nD.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nD.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nL.delete(this.current),
          this.projection && this.projection.unmount(),
          t0(this.notifyUpdate),
          t0(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = R.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tQ.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, r, n, s) {
          let o, a;
          for (let t = 0; t < nB; t++) {
            let i = nF[t],
              {
                isEnabled: r,
                Feature: n,
                ProjectionNode: s,
                MeasureLayout: l,
              } = b[i];
            s && (o = s),
              r(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (a = l));
          }
          if (!this.projection && o) {
            this.projection = new o(
              n,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: r,
              dragConstraints: a,
              layoutScroll: l,
              layoutRoot: u,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!r || (a && c(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: s,
              layoutScroll: l,
              layoutRoot: u,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted
              ? e.update(this.props, this.prevProps)
              : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ra();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nO.length; e++) {
            let i = nO[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: r } = e;
            for (let n in e) {
              let s = e[n],
                o = i[n];
              if (j(s)) t.addValue(n, s), ik(r) && r.add(n);
              else if (j(o))
                t.addValue(n, iI(s, { owner: t })), ik(r) && r.remove(n);
              else if (o !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, iI(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nI; t++) {
            let i = m[t],
              r = this.props[i];
            (d(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = iI(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            r =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tT(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || j(n)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iF()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nN extends nU {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: r },
          n
        ) {
          let s = (function (t, e, i) {
            let r = {};
            for (let n in t) {
              let t = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(n, e);
              if (void 0 !== t) r[n] = t;
              else {
                let t = i.getValue(n);
                t && (r[n] = t.get());
              }
            }
            return r;
          })(i, t || {}, this);
          if ((r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n)) {
            !(function (t, e, i) {
              var r, n;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (n =
                            null !== (r = i[o]) && void 0 !== r
                              ? r
                              : t.readValue(o)) && void 0 !== n
                          ? n
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (iR(u) || iD(u))
                        ? (u = parseFloat(u))
                        : !i_(u) && eJ.test(l) && (u = iS(o, l)),
                      t.addValue(o, iI(u, { owner: t })),
                      void 0 === i[o] && (i[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, i, s);
            let t = nR(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class nz extends nN {
        readValueFromInstance(t, e) {
          if (R.has(e)) {
            let t = iT(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (O(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return rA(t, e);
        }
        build(t, e, i, r) {
          tn(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tw(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          j(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, r) {
          tx(t, e, i, r);
        }
      }
      class n$ extends nN {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (R.has(e)) {
            let t = iT(e);
            return (t && t.default) || 0;
          }
          return (e = tb.has(e) ? e : ty(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return ra();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tA(t, e);
        }
        build(t, e, i, r) {
          tf(t, e, i, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          tP(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = tg(t.tagName)), super.mount(t);
        }
      }
      let n_ = (t, e) =>
          V(t)
            ? new n$(e, { enableHardwareAcceleration: !1 })
            : new nz(e, { enableHardwareAcceleration: !0 }),
        nW = {
          animation: {
            Feature: class extends tW {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let r;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let n = e.map((e) => iH(t, e, i));
                                  r = Promise.all(n);
                                } else if ("string" == typeof e)
                                  r = iH(t, e, i);
                                else {
                                  let n =
                                    "function" == typeof e
                                      ? ee(t, e, i.custom)
                                      : e;
                                  r = Promise.all(iW(t, n, i));
                                }
                                return r.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: iX(!0),
                          whileInView: iX(),
                          whileHover: iX(),
                          whileTap: iX(),
                          whileDrag: iX(),
                          whileFocus: iX(),
                          exit: iX(),
                        },
                        r = !0,
                        n = (e, i) => {
                          let r = ee(t, i);
                          if (r) {
                            let { transition: t, transitionEnd: i, ...n } = r;
                            e = { ...e, ...n, ...i };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          c = {},
                          f = 1 / 0;
                        for (let e = 0; e < iq; e++) {
                          var m;
                          let g = iY[e],
                            v = i[g],
                            y = void 0 !== a[g] ? a[g] : l[g],
                            x = d(y),
                            b = g === o ? v.isActive : null;
                          !1 === b && (f = e);
                          let P = y === l[g] && y !== a[g] && x;
                          if (
                            (P && r && t.manuallyAnimateOnMount && (P = !1),
                            (v.protectedKeys = { ...c }),
                            (!v.isActive && null === b) ||
                              (!y && !v.prevProp) ||
                              p(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let w =
                              ((m = v.prevProp),
                              "string" == typeof y
                                ? y !== m
                                : !!Array.isArray(y) && !et(y, m)),
                            A =
                              w ||
                              (g === o && v.isActive && !P && x) ||
                              (e > f && x),
                            T = Array.isArray(y) ? y : [y],
                            S = T.reduce(n, {});
                          !1 === b && (S = {});
                          let { prevResolvedValues: E = {} } = v,
                            C = { ...E, ...S },
                            V = (t) => {
                              (A = !0), h.delete(t), (v.needsAnimating[t] = !0);
                            };
                          for (let t in C) {
                            let e = S[t],
                              i = E[t];
                            c.hasOwnProperty(t) ||
                              (e !== i
                                ? tS(e) && tS(i)
                                  ? !et(e, i) || w
                                    ? V(t)
                                    : (v.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? V(t)
                                  : h.add(t)
                                : void 0 !== e && h.has(t)
                                ? V(t)
                                : (v.protectedKeys[t] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = S),
                            v.isActive && (c = { ...c, ...S }),
                            r && t.blockInitialAnimation && (A = !1),
                            A &&
                              !P &&
                              u.push(
                                ...T.map((t) => ({
                                  animation: t,
                                  options: { type: g, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((i) => {
                            let r = t.getBaseTarget(i);
                            void 0 !== r && (e[i] = r);
                          }),
                            u.push({ animation: e });
                        }
                        let g = !!u.length;
                        return (
                          r &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (g = !1),
                          (r = !1),
                          g ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, r, n) {
                          var o;
                          if (i[e].isActive === r) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, r);
                            }),
                            (i[e].isActive = r);
                          let a = s(n, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), p(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tW {
              constructor() {
                super(...arguments), (this.id = iZ++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: r } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === r) return;
                let n = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
                });
                e && !t && n.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tW {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: r = "some", once: n } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof r ? r : t8[r],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), n && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: r } =
                        this.node.getProps(),
                      s = e ? i : r;
                    s && s(t);
                  };
                return (function (t, e, i) {
                  let r = (function ({ root: t, ...e }) {
                    let i = t || document;
                    t6.has(i) || t6.set(i, {});
                    let r = t6.get(i),
                      n = JSON.stringify(e);
                    return (
                      r[n] ||
                        (r[n] = new IntersectionObserver(t7, {
                          root: t,
                          ...e,
                        })),
                      r[n]
                    );
                  })(e);
                  return (
                    t9.set(t, i),
                    r.observe(t),
                    () => {
                      t9.delete(t), r.unobserve(t);
                    }
                  );
                })(this.node.current, s, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tW {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = t3),
                  (this.removeEndListeners = t3),
                  (this.removeAccessibleListeners = t3),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let i = this.node.getProps(),
                      r = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: i, onTapCancel: r } = this.node.getProps();
                        tQ.update(() => {
                          t5(this.node.current, t.target)
                            ? i && i(t, e)
                            : r && r(t, e);
                        });
                      },
                      n = tB(window, "pointerup", r, {
                        passive: !(i.onTap || i.onPointerUp),
                      }),
                      s = tB(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = tI(n, s)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            t2("up", (t, e) => {
                              let { onTap: i } = this.node.getProps();
                              i && tQ.update(() => i(t, e));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tD(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          t2("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = tD(this.node.current, "keydown", t),
                      i = () => {
                        this.isPressing &&
                          t2("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      r = tD(this.node.current, "blur", i);
                    this.removeAccessibleListeners = tI(e, r);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: r } = this.node.getProps();
                r &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && tQ.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !t_()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && tQ.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = tB(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = tD(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tI(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tW {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tI(
                  tD(this.node.current, "focus", () => this.onFocus()),
                  tD(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tW {
              mount() {
                this.unmount = tI(t1(this.node, !0), t1(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tW {
              constructor() {
                super(...arguments), (this.removePointerDownListener = t3);
              }
              onPointerDown(t) {
                this.session = new iJ(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: r,
                } = this.node.getProps();
                return {
                  onSessionStart: rC(t),
                  onStart: rC(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, r && tQ.update(() => r(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tB(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tW {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = t3),
                  (this.removeListeners = t3),
                  (this.controls = new rS(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || t3);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: nv,
            MeasureLayout: rR,
          },
          layout: { ProjectionNode: nv, MeasureLayout: rR },
        },
        nH = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: r,
              Component: p,
            }) {
              t &&
                (function (t) {
                  for (let e in t) b[e] = { ...b[e], ...t[e] };
                })(t);
              let f = (0, n.forwardRef)(function (f, m) {
                var v, x;
                let b;
                let E = {
                    ...(0, n.useContext)(s),
                    ...f,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, n.useContext)(T).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(f),
                  },
                  { isStatic: C } = E,
                  V = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (g(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || d(e) ? e : void 0,
                          animate: d(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, n.useContext)(o));
                    return (0, n.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [y(e), y(i)]
                    );
                  })(f),
                  M = C
                    ? void 0
                    : P(() => {
                        if (w.hasEverUpdated) return A++;
                      }),
                  k = r(f, C);
                if (!C && l) {
                  V.visualElement = (function (t, e, i, r) {
                    let { visualElement: l } = (0, n.useContext)(o),
                      c = (0, n.useContext)(h),
                      d = (0, n.useContext)(a),
                      p = (0, n.useContext)(s).reducedMotion,
                      f = (0, n.useRef)();
                    (r = r || c.renderer),
                      !f.current &&
                        r &&
                        (f.current = r(t, {
                          visualState: e,
                          parent: l,
                          props: i,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let m = f.current;
                    (0, n.useInsertionEffect)(() => {
                      m && m.update(i, d);
                    }),
                      u(() => {
                        m && m.render();
                      }),
                      (0, n.useEffect)(() => {
                        m && m.updateFeatures();
                      });
                    let g = window.HandoffAppearAnimations ? u : n.useEffect;
                    return (
                      g(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      m
                    );
                  })(p, k, E, e);
                  let i = (0, n.useContext)(S),
                    r = (0, n.useContext)(h).strict;
                  V.visualElement &&
                    (b = V.visualElement.loadFeatures(E, r, t, M, i));
                }
                return n.createElement(
                  o.Provider,
                  { value: V },
                  b && V.visualElement
                    ? n.createElement(b, {
                        visualElement: V.visualElement,
                        ...E,
                      })
                    : null,
                  i(
                    p,
                    f,
                    M,
                    ((v = V.visualElement),
                    (x = m),
                    (0, n.useCallback)(
                      (t) => {
                        t && k.mount && k.mount(t),
                          v && (t ? v.mount(t) : v.unmount()),
                          x &&
                            ("function" == typeof x
                              ? x(t)
                              : c(x) && (x.current = t));
                      },
                      [v]
                    )),
                    k,
                    C,
                    V.visualElement
                  )
                );
              });
              return (f[E] = p), f;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, r) {
            let s = V(t) ? tk : tR;
            return {
              ...s,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, r, s, { latestValues: o }, a) => {
                  let l = V(e) ? tv : ta,
                    u = l(i, o, a, e),
                    h = (function (t, e, i) {
                      let r = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (th(n) ||
                            (!0 === i && tu(n)) ||
                            (!e && !tu(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (r[n] = t[n]);
                      return r;
                    })(i, "string" == typeof e, t),
                    c = { ...h, ...u, ref: s },
                    { children: d } = i,
                    p = (0, n.useMemo)(() => (j(d) ? d.get() : d), [d]);
                  return (
                    r && (c["data-projection-id"] = r),
                    (0, n.createElement)(e, { ...c, children: p })
                  );
                };
                return e;
              })(e),
              createVisualElement: r,
              Component: t,
            };
          })(t, e, nW, n_)
        );
    },
  },
]);
