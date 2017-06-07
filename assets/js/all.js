"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* jshint ignore:start */

!function ($) {

  "use strict";

  var FOUNDATION_VERSION = '6.3.1';

  // Global Foundation object
  // This is attached to the window, or used as a module for AMD/Browserify
  var Foundation = {
    version: FOUNDATION_VERSION,

    /**
     * Stores initialized plugins.
     */
    _plugins: {},

    /**
     * Stores generated unique ids for plugin instances
     */
    _uuids: [],

    /**
     * Returns a boolean for RTL support
     */
    rtl: function rtl() {
      return $('html').attr('dir') === 'rtl';
    },
    /**
     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
     * @param {Object} plugin - The constructor of the plugin.
     */
    plugin: function plugin(_plugin, name) {
      // Object key to use when adding to global Foundation object
      // Examples: Foundation.Reveal, Foundation.OffCanvas
      var className = name || functionName(_plugin);
      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
      // Examples: data-reveal, data-off-canvas
      var attrName = hyphenate(className);

      // Add to the Foundation object and the plugins list (for reflowing)
      this._plugins[attrName] = this[className] = _plugin;
    },
    /**
     * @function
     * Populates the _uuids array with pointers to each individual plugin instance.
     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
     * Also fires the initialization event for each plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @param {String} name - the name of the plugin, passed as a camelCased string.
     * @fires Plugin#init
     */
    registerPlugin: function registerPlugin(plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = this.GetYoDigits(6, pluginName);

      if (!plugin.$element.attr('data-' + pluginName)) {
        plugin.$element.attr('data-' + pluginName, plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      plugin.$element.trigger('init.zf.' + pluginName);

      this._uuids.push(plugin.uuid);

      return;
    },
    /**
     * @function
     * Removes the plugins uuid from the _uuids array.
     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
     * Also fires the destroyed event for the plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @fires Plugin#destroyed
     */
    unregisterPlugin: function unregisterPlugin(plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin'
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      ).trigger('destroyed.zf.' + pluginName);
      for (var prop in plugin) {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
      return;
    },

    /**
     * @function
     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active plugins.
     */
    reInit: function reInit(plugins) {
      var isJQ = plugins instanceof $;
      try {
        if (isJQ) {
          plugins.each(function () {
            $(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins),
              _this = this,
              fns = {
            'object': function object(plgs) {
              plgs.forEach(function (p) {
                p = hyphenate(p);
                $('[data-' + p + ']').foundation('_init');
              });
            },
            'string': function string() {
              plugins = hyphenate(plugins);
              $('[data-' + plugins + ']').foundation('_init');
            },
            'undefined': function undefined() {
              this['object'](Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },

    /**
     * returns a random base-36 uid with namespacing
     * @function
     * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
     * @param {String} namespace - name of plugin to be incorporated in uid, optional.
     * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
     * @returns {String} - unique id
     */
    GetYoDigits: function GetYoDigits(length, namespace) {
      length = length || 6;
      return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
    },
    /**
     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
     */
    reflow: function reflow(elem, plugins) {

      // If plugins is undefined, just grab everything
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      }
      // If plugins is a string, convert it to an array with one item
      else if (typeof plugins === 'string') {
          plugins = [plugins];
        }

      var _this = this;

      // Iterate through each plugin
      $.each(plugins, function (i, name) {
        // Get the current plugin
        var plugin = _this._plugins[name];

        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
        var $elem = $(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

        // For each plugin found, initialize it
        $elem.each(function () {
          var $el = $(this),
              opts = {};
          // Don't double-dip on plugins
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }

          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
              var opt = e.split(':').map(function (el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin($(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    transitionend: function transitionend($elem) {
      var transitions = {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'otransitionend'
      };
      var elem = document.createElement('div'),
          end;

      for (var t in transitions) {
        if (typeof elem.style[t] !== 'undefined') {
          end = transitions[t];
        }
      }
      if (end) {
        return end;
      } else {
        end = setTimeout(function () {
          $elem.triggerHandler('transitionend', [$elem]);
        }, 1);
        return 'transitionend';
      }
    }
  };

  Foundation.util = {
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: function throttle(func, delay) {
      var timer = null;

      return function () {
        var context = this,
            args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };

  // TODO: consider not making this a jQuery function
  // TODO: need way to reflow vs. re-initialize
  /**
   * The Foundation jQuery method.
   * @param {String|Array} method - An action to perform on the current jQuery object.
   */
  var foundation = function foundation(method) {
    var type = typeof method === 'undefined' ? 'undefined' : _typeof(method),
        $meta = $('meta.foundation-mq'),
        $noJS = $('.no-js');

    if (!$meta.length) {
      $('<meta class="foundation-mq">').appendTo(document.head);
    }
    if ($noJS.length) {
      $noJS.removeClass('no-js');
    }

    if (type === 'undefined') {
      //needs to initialize the Foundation object, or an individual plugin.
      Foundation.MediaQuery._init();
      Foundation.reflow(this);
    } else if (type === 'string') {
      //an individual method to invoke on a plugin or group of plugins
      var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
      var plugClass = this.data('zfPlugin'); //determine the class of plugin

      if (plugClass !== undefined && plugClass[method] !== undefined) {
        //make sure both the class and method exist
        if (this.length === 1) {
          //if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
        } else {
          this.each(function (i, el) {
            //otherwise loop through the jQuery collection and invoke the method on each
            plugClass[method].apply($(el).data('zfPlugin'), args);
          });
        }
      } else {
        //error for no class or no method
        throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
      }
    } else {
      //error for invalid argument type
      throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
    }
    return this;
  };

  window.Foundation = Foundation;
  $.fn.foundation = foundation;

  // Polyfill for requestAnimationFrame
  (function () {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
      return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, required by rAF
     */
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function now() {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function fNOP() {},
          fBound = function fBound() {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      if (this.prototype) {
        // native functions don't have a prototype
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
  // Polyfill to get the name of a function in IE9
  function functionName(fn) {
    if (Function.prototype.name === undefined) {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (fn.prototype === undefined) {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
    return str;
  }
  // Convert PascalCase to kebab-case
  // Thank you: http://stackoverflow.com/a/8955580
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}(jQuery);
/* jshint ignore:start */

'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

!function ($) {

  /**
   * OffCanvas module.
   * @module foundation.offcanvas
   * @requires foundation.util.keyboard
   * @requires foundation.util.mediaQuery
   * @requires foundation.util.triggers
   * @requires foundation.util.motion
   */

  var OffCanvas = function () {
    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function OffCanvas(element, options) {
      _classCallCheck(this, OffCanvas);

      this.$element = element;
      this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.$lastTrigger = $();
      this.$triggers = $();

      this._init();
      this._events();

      Foundation.registerPlugin(this, 'OffCanvas');
      Foundation.Keyboard.register('OffCanvas', {
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */

    _createClass(OffCanvas, [{
      key: '_init',
      value: function _init() {
        var id = this.$element.attr('id');

        this.$element.attr('aria-hidden', 'true');

        this.$element.addClass('is-transition-' + this.options.transition);

        // Find triggers that affect this element and add aria-expanded to them
        this.$triggers = $(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id);

        // Add an overlay over the content if necessary
        if (this.options.contentOverlay === true) {
          var overlay = document.createElement('div');
          var overlayPosition = $(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
          overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
          this.$overlay = $(overlay);
          if (overlayPosition === 'is-overlay-fixed') {
            $('body').append(this.$overlay);
          } else {
            this.$element.siblings('[data-off-canvas-content]').append(this.$overlay);
          }
        }

        this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

        if (this.options.isRevealed === true) {
          this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
          this._setMQChecker();
        }
        if (!this.options.transitionTime === true) {
          this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas]')[0]).transitionDuration) * 1000;
        }
      }

      /**
       * Adds event handlers to the off-canvas wrapper and the exit overlay.
       * @function
       * @private
       */

    }, {
      key: '_events',
      value: function _events() {
        this.$element.off('.zf.trigger .zf.offcanvas').on({
          'open.zf.trigger': this.open.bind(this),
          'close.zf.trigger': this.close.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this),
          'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
        });

        if (this.options.closeOnClick === true) {
          var $target = this.options.contentOverlay ? this.$overlay : $('[data-off-canvas-content]');
          $target.on({ 'click.zf.offcanvas': this.close.bind(this) });
        }
      }

      /**
       * Applies event listener for elements that will reveal at certain breakpoints.
       * @private
       */

    }, {
      key: '_setMQChecker',
      value: function _setMQChecker() {
        var _this = this;

        $(window).on('changed.zf.mediaquery', function () {
          if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          } else {
            _this.reveal(false);
          }
        }).one('load.zf.offcanvas', function () {
          if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          }
        });
      }

      /**
       * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
       * @param {Boolean} isRevealed - true if element should be revealed.
       * @function
       */

    }, {
      key: 'reveal',
      value: function reveal(isRevealed) {
        var $closer = this.$element.find('[data-close]');
        if (isRevealed) {
          this.close();
          this.isRevealed = true;
          this.$element.attr('aria-hidden', 'false');
          this.$element.off('open.zf.trigger toggle.zf.trigger');
          if ($closer.length) {
            $closer.hide();
          }
        } else {
          this.isRevealed = false;
          this.$element.attr('aria-hidden', 'true');
          this.$element.on({
            'open.zf.trigger': this.open.bind(this),
            'toggle.zf.trigger': this.toggle.bind(this)
          });
          if ($closer.length) {
            $closer.show();
          }
        }
      }

      /**
       * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
       * @private
       */

    }, {
      key: '_stopScrolling',
      value: function _stopScrolling(event) {
        return false;
      }

      // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
      // Only really works for y, not sure how to extend to x or if we need to.

    }, {
      key: '_recordScrollable',
      value: function _recordScrollable(event) {
        var elem = this; // called from event handler context with this as elem

        // If the element is scrollable (content overflows), then...
        if (elem.scrollHeight !== elem.clientHeight) {
          // If we're at the top, scroll down one pixel to allow scrolling up
          if (elem.scrollTop === 0) {
            elem.scrollTop = 1;
          }
          // If we're at the bottom, scroll up one pixel to allow scrolling down
          if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
            elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
          }
        }
        elem.allowUp = elem.scrollTop > 0;
        elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
        elem.lastY = event.originalEvent.pageY;
      }
    }, {
      key: '_stopScrollPropagation',
      value: function _stopScrollPropagation(event) {
        var elem = this; // called from event handler context with this as elem
        var up = event.pageY < elem.lastY;
        var down = !up;
        elem.lastY = event.pageY;

        if (up && elem.allowUp || down && elem.allowDown) {
          event.stopPropagation();
        } else {
          event.preventDefault();
        }
      }

      /**
       * Opens the off-canvas menu.
       * @function
       * @param {Object} event - Event object passed from listener.
       * @param {jQuery} trigger - element that triggered the off-canvas to open.
       * @fires OffCanvas#opened
       */

    }, {
      key: 'open',
      value: function open(event, trigger) {
        if (this.$element.hasClass('is-open') || this.isRevealed) {
          return;
        }
        var _this = this;

        if (trigger) {
          this.$lastTrigger = trigger;
        }

        if (this.options.forceTo === 'top') {
          window.scrollTo(0, 0);
        } else if (this.options.forceTo === 'bottom') {
          window.scrollTo(0, document.body.scrollHeight);
        }

        /**
         * Fires when the off-canvas menu opens.
         * @event OffCanvas#opened
         */
        _this.$element.addClass('is-open');

        this.$triggers.attr('aria-expanded', 'true');
        this.$element.attr('aria-hidden', 'false').trigger('opened.zf.offcanvas');

        // If `contentScroll` is set to false, add class and disable scrolling on touch devices.
        if (this.options.contentScroll === false) {
          $('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
          this.$element.on('touchstart', this._recordScrollable);
          this.$element.on('touchmove', this._stopScrollPropagation);
        }

        if (this.options.contentOverlay === true) {
          this.$overlay.addClass('is-visible');
        }

        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.addClass('is-closable');
        }

        if (this.options.autoFocus === true) {
          this.$element.one(Foundation.transitionend(this.$element), function () {
            _this.$element.find('a, button').eq(0).focus();
          });
        }

        if (this.options.trapFocus === true) {
          this.$element.siblings('[data-off-canvas-content]').attr('tabindex', '-1');
          Foundation.Keyboard.trapFocus(this.$element);
        }
      }

      /**
       * Closes the off-canvas menu.
       * @function
       * @param {Function} cb - optional cb to fire after closure.
       * @fires OffCanvas#closed
       */

    }, {
      key: 'close',
      value: function close(cb) {
        if (!this.$element.hasClass('is-open') || this.isRevealed) {
          return;
        }

        var _this = this;

        _this.$element.removeClass('is-open');

        this.$element.attr('aria-hidden', 'true'
        /**
         * Fires when the off-canvas menu opens.
         * @event OffCanvas#closed
         */
        ).trigger('closed.zf.offcanvas');

        // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
        if (this.options.contentScroll === false) {
          $('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
          this.$element.off('touchstart', this._recordScrollable);
          this.$element.off('touchmove', this._stopScrollPropagation);
        }

        if (this.options.contentOverlay === true) {
          this.$overlay.removeClass('is-visible');
        }

        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.removeClass('is-closable');
        }

        this.$triggers.attr('aria-expanded', 'false');

        if (this.options.trapFocus === true) {
          this.$element.siblings('[data-off-canvas-content]').removeAttr('tabindex');
          Foundation.Keyboard.releaseFocus(this.$element);
        }
      }

      /**
       * Toggles the off-canvas menu open or closed.
       * @function
       * @param {Object} event - Event object passed from listener.
       * @param {jQuery} trigger - element that triggered the off-canvas to open.
       */

    }, {
      key: 'toggle',
      value: function toggle(event, trigger) {
        if (this.$element.hasClass('is-open')) {
          this.close(event, trigger);
        } else {
          this.open(event, trigger);
        }
      }

      /**
       * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
       * @function
       * @private
       */

    }, {
      key: '_handleKeyboard',
      value: function _handleKeyboard(e) {
        var _this2 = this;

        Foundation.Keyboard.handleKey(e, 'OffCanvas', {
          close: function close() {
            _this2.close();
            _this2.$lastTrigger.focus();
            return true;
          },
          handled: function handled() {
            e.stopPropagation();
            e.preventDefault();
          }
        });
      }

      /**
       * Destroys the offcanvas plugin.
       * @function
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.close();
        this.$element.off('.zf.trigger .zf.offcanvas');
        this.$overlay.off('.zf.offcanvas');

        Foundation.unregisterPlugin(this);
      }
    }]);

    return OffCanvas;
  }();

  OffCanvas.defaults = {
    /**
     * Allow the user to click outside of the menu to close it.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnClick: true,

    /**
     * Adds an overlay on top of `[data-off-canvas-content]`.
     * @option
     * @type {boolean}
     * @default true
     */
    contentOverlay: true,

    /**
     * Enable/disable scrolling of the main content when an off canvas panel is open.
     * @option
     * @type {boolean}
     * @default true
     */
    contentScroll: true,

    /**
     * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
     * @option
     * @type {number}
     * @default 0
     */
    transitionTime: 0,

    /**
     * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
     * @option
     * @type {string}
     * @default push
     */
    transition: 'push',

    /**
     * Force the page to scroll to top or bottom on open.
     * @option
     * @type {?string}
     * @default null
     */
    forceTo: null,

    /**
     * Allow the offcanvas to remain open for certain breakpoints.
     * @option
     * @type {boolean}
     * @default false
     */
    isRevealed: false,

    /**
     * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
     * @option
     * @type {?string}
     * @default null
     */
    revealOn: null,

    /**
     * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
     * @option
     * @type {boolean}
     * @default true
     */
    autoFocus: true,

    /**
     * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
     * @option
     * @type {string}
     * @default reveal-for-
     * @todo improve the regex testing for this.
     */
    revealClass: 'reveal-for-',

    /**
     * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
     * @option
     * @type {boolean}
     * @default false
     */
    trapFocus: false
  };

  // Window exports
  Foundation.plugin(OffCanvas, 'OffCanvas');
}(jQuery);
/* jshint ignore:start */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function ($) {

  /**
   * Orbit module.
   * @module foundation.orbit
   * @requires foundation.util.keyboard
   * @requires foundation.util.motion
   * @requires foundation.util.timerAndImageLoader
   * @requires foundation.util.touch
   */

  var Orbit = function () {
    /**
    * Creates a new instance of an orbit carousel.
    * @class
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
    function Orbit(element, options) {
      _classCallCheck(this, Orbit);

      this.$element = element;
      this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);

      this._init();

      Foundation.registerPlugin(this, 'Orbit');
      Foundation.Keyboard.register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
      });
    }

    /**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */


    _createClass(Orbit, [{
      key: '_init',
      value: function _init() {
        // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
        this._reset();

        this.$wrapper = this.$element.find('.' + this.options.containerClass);
        this.$slides = this.$element.find('.' + this.options.slideClass);

        var $images = this.$element.find('img'),
            initActive = this.$slides.filter('.is-active'),
            id = this.$element[0].id || Foundation.GetYoDigits(6, 'orbit');

        this.$element.attr({
          'data-resize': id,
          'id': id
        });

        if (!initActive.length) {
          this.$slides.eq(0).addClass('is-active');
        }

        if (!this.options.useMUI) {
          this.$slides.addClass('no-motionui');
        }

        if ($images.length) {
          Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
        } else {
          this._prepareForOrbit(); //hehe
        }

        if (this.options.bullets) {
          this._loadBullets();
        }

        this._events();

        if (this.options.autoPlay && this.$slides.length > 1) {
          this.geoSync();
        }

        if (this.options.accessible) {
          // allow wrapper to be focusable to enable arrow navigation
          this.$wrapper.attr('tabindex', 0);
        }
      }

      /**
      * Creates a jQuery collection of bullets, if they are being used.
      * @function
      * @private
      */

    }, {
      key: '_loadBullets',
      value: function _loadBullets() {
        this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
      }

      /**
      * Sets a `timer` object on the orbit, and starts the counter for the next slide.
      * @function
      */

    }, {
      key: 'geoSync',
      value: function geoSync() {
        var _this = this;
        this.timer = new Foundation.Timer(this.$element, {
          duration: this.options.timerDelay,
          infinite: false
        }, function () {
          _this.changeSlide(true);
        });
        this.timer.start();
      }

      /**
      * Sets wrapper and slide heights for the orbit.
      * @function
      * @private
      */

    }, {
      key: '_prepareForOrbit',
      value: function _prepareForOrbit() {
        var _this = this;
        this._setWrapperHeight();
      }

      /**
      * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
      * @function
      * @private
      * @param {Function} cb - a callback function to fire when complete.
      */

    }, {
      key: '_setWrapperHeight',
      value: function _setWrapperHeight(cb) {
        //rewrite this to `for` loop
        var max = 0,
            temp,
            counter = 0,
            _this = this;

        this.$slides.each(function () {
          temp = this.getBoundingClientRect().height;
          $(this).attr('data-slide', counter);

          if (_this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
            //if not the active slide, set css position and display property
            $(this).css({ 'position': 'relative', 'display': 'none' });
          }
          max = temp > max ? temp : max;
          counter++;
        });

        if (counter === this.$slides.length) {
          this.$wrapper.css({ 'height': max }); //only change the wrapper height property once.
          if (cb) {
            cb(max);
          } //fire callback with max height dimension.
        }
      }

      /**
      * Sets the max-height of each slide.
      * @function
      * @private
      */

    }, {
      key: '_setSlideHeight',
      value: function _setSlideHeight(height) {
        this.$slides.each(function () {
          $(this).css('max-height', height);
        });
      }

      /**
      * Adds event listeners to basically everything within the element.
      * @function
      * @private
      */

    }, {
      key: '_events',
      value: function _events() {
        var _this = this;

        //***************************************
        //**Now using custom event - thanks to:**
        //**      Yohai Ararat of Toronto      **
        //***************************************
        //
        this.$element.off('.resizeme.zf.trigger').on({
          'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
        });
        if (this.$slides.length > 1) {

          if (this.options.swipe) {
            this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
              e.preventDefault();
              _this.changeSlide(true);
            }).on('swiperight.zf.orbit', function (e) {
              e.preventDefault();
              _this.changeSlide(false);
            });
          }
          //***************************************

          if (this.options.autoPlay) {
            this.$slides.on('click.zf.orbit', function () {
              _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
              _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
            });

            if (this.options.pauseOnHover) {
              this.$element.on('mouseenter.zf.orbit', function () {
                _this.timer.pause();
              }).on('mouseleave.zf.orbit', function () {
                if (!_this.$element.data('clickedOn')) {
                  _this.timer.start();
                }
              });
            }
          }

          if (this.options.navButtons) {
            var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
            $controls.attr('tabindex', 0
            //also need to handle enter/return and spacebar key presses
            ).on('click.zf.orbit touchend.zf.orbit', function (e) {
              e.preventDefault();
              _this.changeSlide($(this).hasClass(_this.options.nextClass));
            });
          }

          if (this.options.bullets) {
            this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
              if (/is-active/g.test(this.className)) {
                return false;
              } //if this is active, kick out of function.
              var idx = $(this).data('slide'),
                  ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                  $slide = _this.$slides.eq(idx);

              _this.changeSlide(ltr, $slide, idx);
            });
          }

          if (this.options.accessible) {
            this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
              // handle keyboard event with keyboard util
              Foundation.Keyboard.handleKey(e, 'Orbit', {
                next: function next() {
                  _this.changeSlide(true);
                },
                previous: function previous() {
                  _this.changeSlide(false);
                },
                handled: function handled() {
                  // if bullet is focused, make sure focus moves
                  if ($(e.target).is(_this.$bullets)) {
                    _this.$bullets.filter('.is-active').focus();
                  }
                }
              });
            });
          }
        }
      }

      /**
       * Resets Orbit so it can be reinitialized
       */

    }, {
      key: '_reset',
      value: function _reset() {
        // Don't do anything if there are no slides (first run)
        if (typeof this.$slides == 'undefined') {
          return;
        }

        if (this.$slides.length > 1) {
          // Remove old events
          this.$element.off('.zf.orbit').find('*').off('.zf.orbit'

          // Restart timer if autoPlay is enabled
          );if (this.options.autoPlay) {
            this.timer.restart();
          }

          // Reset all sliddes
          this.$slides.each(function (el) {
            $(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
          });

          // Show the first slide
          this.$slides.first().addClass('is-active').show();

          // Triggers when the slide has finished animating
          this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);

          // Select first bullet if bullets are present
          if (this.options.bullets) {
            this._updateBullets(0);
          }
        }
      }

      /**
      * Changes the current slide to a new one.
      * @function
      * @param {Boolean} isLTR - flag if the slide should move left to right.
      * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
      * @param {Number} idx - the index of the new slide in its collection, if one chosen.
      * @fires Orbit#slidechange
      */

    }, {
      key: 'changeSlide',
      value: function changeSlide(isLTR, chosenSlide, idx) {
        if (!this.$slides) {
          return;
        } // Don't freak out if we're in the middle of cleanup
        var $curSlide = this.$slides.filter('.is-active').eq(0);

        if (/mui/g.test($curSlide[0].className)) {
          return false;
        } //if the slide is currently animating, kick out of the function

        var $firstSlide = this.$slides.first(),
            $lastSlide = this.$slides.last(),
            dirIn = isLTR ? 'Right' : 'Left',
            dirOut = isLTR ? 'Left' : 'Right',
            _this = this,
            $newSlide;

        if (!chosenSlide) {
          //most of the time, this will be auto played or clicked from the navButtons.
          $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
          this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass) : //pick next slide if moving left to right
          this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass); //pick prev slide if moving right to left
        } else {
          $newSlide = chosenSlide;
        }

        if ($newSlide.length) {
          /**
          * Triggers before the next slide starts animating in and only if a next slide has been found.
          * @event Orbit#beforeslidechange
          */
          this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

          if (this.options.bullets) {
            idx = idx || this.$slides.index($newSlide); //grab index to update bullets
            this._updateBullets(idx);
          }

          if (this.options.useMUI && !this.$element.is(':hidden')) {
            Foundation.Motion.animateIn($newSlide.addClass('is-active').css({ 'position': 'absolute', 'top': 0 }), this.options['animInFrom' + dirIn], function () {
              $newSlide.css({ 'position': 'relative', 'display': 'block' }).attr('aria-live', 'polite');
            });

            Foundation.Motion.animateOut($curSlide.removeClass('is-active'), this.options['animOutTo' + dirOut], function () {
              $curSlide.removeAttr('aria-live');
              if (_this.options.autoPlay && !_this.timer.isPaused) {
                _this.timer.restart();
              }
              //do stuff?
            });
          } else {
            $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
            $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
            if (this.options.autoPlay && !this.timer.isPaused) {
              this.timer.restart();
            }
          }
          /**
          * Triggers when the slide has finished animating in.
          * @event Orbit#slidechange
          */
          this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
        }
      }

      /**
      * Updates the active state of the bullets, if displayed.
      * @function
      * @private
      * @param {Number} idx - the index of the current slide.
      */

    }, {
      key: '_updateBullets',
      value: function _updateBullets(idx) {
        var $oldBullet = this.$element.find('.' + this.options.boxOfBullets).find('.is-active').removeClass('is-active').blur(),
            span = $oldBullet.find('span:last').detach(),
            $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
      }

      /**
      * Destroys the carousel and hides the element.
      * @function
      */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
        Foundation.unregisterPlugin(this);
      }
    }]);

    return Orbit;
  }();

  Orbit.defaults = {
    /**
    * Tells the JS to look for and loadBullets.
    * @option
     * @type {boolean}
    * @default true
    */
    bullets: true,
    /**
    * Tells the JS to apply event listeners to nav buttons
    * @option
     * @type {boolean}
    * @default true
    */
    navButtons: true,
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-in-right'
    */
    animInFromRight: 'slide-in-right',
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-out-right'
    */
    animOutToRight: 'slide-out-right',
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-in-left'
    *
    */
    animInFromLeft: 'slide-in-left',
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-out-left'
    */
    animOutToLeft: 'slide-out-left',
    /**
    * Allows Orbit to automatically animate on page load.
    * @option
     * @type {boolean}
    * @default true
    */
    autoPlay: true,
    /**
    * Amount of time, in ms, between slide transitions
    * @option
     * @type {number}
    * @default 5000
    */
    timerDelay: 5000,
    /**
    * Allows Orbit to infinitely loop through the slides
    * @option
     * @type {boolean}
    * @default true
    */
    infiniteWrap: true,
    /**
    * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
    * @option
     * @type {boolean}
    * @default true
    */
    swipe: true,
    /**
    * Allows the timing function to pause animation on hover.
    * @option
     * @type {boolean}
    * @default true
    */
    pauseOnHover: true,
    /**
    * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
    * @option
     * @type {boolean}
    * @default true
    */
    accessible: true,
    /**
    * Class applied to the container of Orbit
    * @option
     * @type {string}
    * @default 'orbit-container'
    */
    containerClass: 'orbit-container',
    /**
    * Class applied to individual slides.
    * @option
     * @type {string}
    * @default 'orbit-slide'
    */
    slideClass: 'orbit-slide',
    /**
    * Class applied to the bullet container. You're welcome.
    * @option
     * @type {string}
    * @default 'orbit-bullets'
    */
    boxOfBullets: 'orbit-bullets',
    /**
    * Class applied to the `next` navigation button.
    * @option
     * @type {string}
    * @default 'orbit-next'
    */
    nextClass: 'orbit-next',
    /**
    * Class applied to the `previous` navigation button.
    * @option
     * @type {string}
    * @default 'orbit-previous'
    */
    prevClass: 'orbit-previous',
    /**
    * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
    * @option
     * @type {boolean}
    * @default true
    */
    useMUI: true
  };

  // Window exports
  Foundation.plugin(Orbit, 'Orbit');
}(jQuery);
/* jshint ignore:start */

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/

'use strict';

!function ($) {

  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };

  var commands = {};

  var Keyboard = {
    keys: getKeyCodes(keyCodes),

    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey: function parseKey(event) {
      var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

      // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
      key = key.replace(/\W+/, '');

      if (event.shiftKey) key = 'SHIFT_' + key;
      if (event.ctrlKey) key = 'CTRL_' + key;
      if (event.altKey) key = 'ALT_' + key;

      // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
      key = key.replace(/_$/, '');

      return key;
    },

    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey: function handleKey(event, component, functions) {
      var commandList = commands[component],
          keyCode = this.parseKey(event),
          cmds,
          command,
          fn;

      if (!commandList) return console.warn('Component not defined!');

      if (typeof commandList.ltr === 'undefined') {
        // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
      } else {
        // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];

      fn = functions[command];
      if (fn && typeof fn === 'function') {
        // execute function  if exists
        var returnValue = fn.apply();
        if (functions.handled || typeof functions.handled === 'function') {
          // execute function when event was handled
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') {
          // execute function when event was not handled
          functions.unhandled();
        }
      }
    },

    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
    findFocusable: function findFocusable($element) {
      if (!$element) {
        return false;
      }
      return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
        if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) {
          return false;
        } //only have visible elements and those that have a tabindex greater or equal 0
        return true;
      });
    },

    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */

    register: function register(componentName, cmds) {
      commands[componentName] = cmds;
    },

    /**
     * Traps the focus in the given element.
     * @param  {jQuery} $element  jQuery object to trap the foucs into.
     */
    trapFocus: function trapFocus($element) {
      var $focusable = Foundation.Keyboard.findFocusable($element),
          $firstFocusable = $focusable.eq(0),
          $lastFocusable = $focusable.eq(-1);

      $element.on('keydown.zf.trapfocus', function (event) {
        if (event.target === $lastFocusable[0] && Foundation.Keyboard.parseKey(event) === 'TAB') {
          event.preventDefault();
          $firstFocusable.focus();
        } else if (event.target === $firstFocusable[0] && Foundation.Keyboard.parseKey(event) === 'SHIFT_TAB') {
          event.preventDefault();
          $lastFocusable.focus();
        }
      });
    },

    /**
     * Releases the trapped focus from the given element.
     * @param  {jQuery} $element  jQuery object to release the focus for.
     */
    releaseFocus: function releaseFocus($element) {
      $element.off('keydown.zf.trapfocus');
    }
  };

  /*
   * Constants for easier comparing.
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   */
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      k[kcs[kc]] = kcs[kc];
    }return k;
  }

  Foundation.Keyboard = Keyboard;
}(jQuery);
/* jshint ignore:start */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function ($) {

  // Default set of media queries
  var defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };

  var MediaQuery = {
    queries: [],

    current: '',

    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init: function _init() {
      var self = this;
      var extractedStyles = $('.foundation-mq').css('font-family');
      var namedQueries;

      namedQueries = parseStyleToObject(extractedStyles);

      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self.queries.push({
            name: key,
            value: 'only screen and (min-width: ' + namedQueries[key] + ')'
          });
        }
      }

      this.current = this._getCurrentSize();

      this._watcher();
    },

    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast: function atLeast(size) {
      var query = this.get(size);

      if (query) {
        return window.matchMedia(query).matches;
      }

      return false;
    },

    /**
     * Checks if the screen matches to a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
     */
    is: function is(size) {
      size = size.trim().split(' ');
      if (size.length > 1 && size[1] === 'only') {
        if (size[0] === this._getCurrentSize()) return true;
      } else {
        return this.atLeast(size[0]);
      }
      return false;
    },

    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get: function get(size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name) return query.value;
        }
      }

      return null;
    },

    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize: function _getCurrentSize() {
      var matched;

      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];

        if (window.matchMedia(query.value).matches) {
          matched = query;
        }
      }

      if ((typeof matched === 'undefined' ? 'undefined' : _typeof(matched)) === 'object') {
        return matched.name;
      } else {
        return matched;
      }
    },

    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher: function _watcher() {
      var _this = this;

      $(window).on('resize.zf.mediaquery', function () {
        var newSize = _this._getCurrentSize(),
            currentSize = _this.current;

        if (newSize !== currentSize) {
          // Change the current media query
          _this.current = newSize;

          // Broadcast the media query change on the window
          $(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
        }
      });
    }
  };

  Foundation.MediaQuery = MediaQuery;

  // matchMedia() polyfill - Test a CSS media type/query in JS.
  // Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
  window.matchMedia || (window.matchMedia = function () {
    'use strict';

    // For browsers that support matchMedium api such as IE 9 and webkit

    var styleMedia = window.styleMedia || window.media;

    // For those that don't support matchMedium
    if (!styleMedia) {
      var style = document.createElement('style'),
          script = document.getElementsByTagName('script')[0],
          info = null;

      style.type = 'text/css';
      style.id = 'matchmediajs-test';

      script && script.parentNode && script.parentNode.insertBefore(style, script);

      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

      styleMedia = {
        matchMedium: function matchMedium(media) {
          var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

          // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }

          // Test if media query is true or false
          return info.width === '1px';
        }
      };
    }

    return function (media) {
      return {
        matches: styleMedia.matchMedium(media || 'all'),
        media: media || 'all'
      };
    };
  }());

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  Foundation.MediaQuery = MediaQuery;
}(jQuery);
/* jshint ignore:start */

'use strict';

!function ($) {

  /**
   * Motion module.
   * @module foundation.motion
   */

  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];

  var Motion = {
    animateIn: function animateIn(element, animation, cb) {
      animate(true, element, animation, cb);
    },

    animateOut: function animateOut(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };

  function Move(duration, elem, fn) {
    var anim,
        prog,
        start = null;
    // console.log('called');

    if (duration === 0) {
      fn.apply(elem);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      return;
    }

    function move(ts) {
      if (!start) start = ts;
      // console.log(start, ts);
      prog = ts - start;
      fn.apply(elem);

      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }

  /**
   * Animates an element in or out using a CSS transition class.
   * @function
   * @private
   * @param {Boolean} isIn - Defines if the animation is in or out.
   * @param {Object} element - jQuery or HTML object to animate.
   * @param {String} animation - CSS class to use.
   * @param {Function} cb - Callback to run when animation is finished.
   */
  function animate(isIn, element, animation, cb) {
    element = $(element).eq(0);

    if (!element.length) return;

    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];

    // Set up the animation
    reset();

    element.addClass(animation).css('transition', 'none');

    requestAnimationFrame(function () {
      element.addClass(initClass);
      if (isIn) element.show();
    });

    // Start the animation
    requestAnimationFrame(function () {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });

    // Clean up the animation when it finishes
    element.one(Foundation.transitionend(element), finish);

    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }

    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }

  Foundation.Move = Move;
  Foundation.Motion = Motion;
}(jQuery);
/* jshint ignore:start */

'use strict';

!function ($) {

  function Timer(elem, options, cb) {
    var _this = this,
        duration = options.duration,
        //options is an object for easily adding features later.
    nameSpace = Object.keys(elem.data())[0] || 'timer',
        remain = -1,
        start,
        timer;

    this.isPaused = false;

    this.restart = function () {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };

    this.start = function () {
      this.isPaused = false;
      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data('paused', false);
      start = Date.now();
      timer = setTimeout(function () {
        if (options.infinite) {
          _this.restart(); //rerun the timer.
        }
        if (cb && typeof cb === 'function') {
          cb();
        }
      }, remain);
      elem.trigger('timerstart.zf.' + nameSpace);
    };

    this.pause = function () {
      this.isPaused = true;
      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      elem.data('paused', true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger('timerpaused.zf.' + nameSpace);
    };
  }

  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  function onImagesLoaded(images, callback) {
    var self = this,
        unloaded = images.length;

    if (unloaded === 0) {
      callback();
    }

    images.each(function () {
      // Check if image is loaded
      if (this.complete || this.readyState === 4 || this.readyState === 'complete') {
        singleImageLoaded();
      }
      // Force load the image
      else {
          // fix for IE. See https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
          var src = $(this).attr('src');
          $(this).attr('src', src + (src.indexOf('?') >= 0 ? '&' : '?') + new Date().getTime());
          $(this).one('load', function () {
            singleImageLoaded();
          });
        }
    });

    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }

  Foundation.Timer = Timer;
  Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery);
'use strict';

/* jshint ignore:start */

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function ($) {

	$.spotSwipe = {
		version: '1.0.0',
		enabled: 'ontouchstart' in document.documentElement,
		preventDefault: false,
		moveThreshold: 75,
		timeThreshold: 200
	};

	var startPosX,
	    startPosY,
	    startTime,
	    elapsedTime,
	    isMoving = false;

	function onTouchEnd() {
		//  alert(this);
		this.removeEventListener('touchmove', onTouchMove);
		this.removeEventListener('touchend', onTouchEnd);
		isMoving = false;
	}

	function onTouchMove(e) {
		if ($.spotSwipe.preventDefault) {
			e.preventDefault();
		}
		if (isMoving) {
			var x = e.touches[0].pageX;
			var y = e.touches[0].pageY;
			var dx = startPosX - x;
			var dy = startPosY - y;
			var dir;
			elapsedTime = new Date().getTime() - startTime;
			if (Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
				dir = dx > 0 ? 'left' : 'right';
			}
			// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
			//   dir = dy > 0 ? 'down' : 'up';
			// }
			if (dir) {
				e.preventDefault();
				onTouchEnd.call(this);
				$(this).trigger('swipe', dir).trigger('swipe' + dir);
			}
		}
	}

	function onTouchStart(e) {
		if (e.touches.length == 1) {
			startPosX = e.touches[0].pageX;
			startPosY = e.touches[0].pageY;
			isMoving = true;
			startTime = new Date().getTime();
			this.addEventListener('touchmove', onTouchMove, false);
			this.addEventListener('touchend', onTouchEnd, false);
		}
	}

	function init() {
		this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
	}

	function teardown() {
		this.removeEventListener('touchstart', onTouchStart);
	}

	$.event.special.swipe = { setup: init };

	$.each(['left', 'up', 'down', 'right'], function () {
		$.event.special['swipe' + this] = { setup: function setup() {
				$(this).on('swipe', $.noop);
			} };
	});
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function ($) {
	$.fn.addTouch = function () {
		this.each(function (i, el) {
			$(el).bind('touchstart touchmove touchend touchcancel', function () {
				//we pass the original event object because the jQuery event
				//object is normalized to w3c specs and does not provide the TouchList
				handleTouch(event);
			});
		});

		var handleTouch = function handleTouch(event) {
			var touches = event.changedTouches,
			    first = touches[0],
			    eventTypes = {
				touchstart: 'mousedown',
				touchmove: 'mousemove',
				touchend: 'mouseup'
			},
			    type = eventTypes[event.type],
			    simulatedEvent;

			if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
				simulatedEvent = new window.MouseEvent(type, {
					'bubbles': true,
					'cancelable': true,
					'screenX': first.screenX,
					'screenY': first.screenY,
					'clientX': first.clientX,
					'clientY': first.clientY
				});
			} else {
				simulatedEvent = document.createEvent('MouseEvent');
				simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
			}
			first.target.dispatchEvent(simulatedEvent);
		};
	};
}(jQuery);

//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
************************************

(function( $, window, undefined ) {

	var $document = $( document ),
		// supportTouch = $.mobile.support.touch,
		touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event, bubble ) {
		var originalType = event.type;
		event.type = eventType;
		if ( bubble ) {
			$.event.trigger( event, undefined, obj );
		} else {
			$.event.dispatch.call( obj, event );
		}
		event.type = originalType;
	}

	// also handles taphold

	// Also handles swipeleft, swiperight
	$.event.special.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		getLocation: function ( event ) {
			var winPageX = window.pageXOffset,
				winPageY = window.pageYOffset,
				x = event.clientX,
				y = event.clientY;

			if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
				event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
				return true;
			}
			return false;

		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function() {
			var events,
				thisObject = this,
				$this = $( thisObject ),
				context = {};

			// Retrieve the events data for this element and add the swipe context
			events = $.data( this, "mobile-events" );
			if ( !events ) {
				events = { length: 0 };
				$.data( this, "mobile-events", events );
			}
			events.length++;
			events.swipe = context;

			context.start = function( event ) {

				// Bail if we're already working on a swipe event
				if ( $.event.special.swipe.eventInProgress ) {
					return;
				}
				$.event.special.swipe.eventInProgress = true;

				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				context.move = function( event ) {
					if ( !start || event.isDefaultPrevented() ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
						if ( emitted ) {

							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				};

				context.stop = function() {
						emitted = true;

						// Reset the context to make way for the next swipe event
						$.event.special.swipe.eventInProgress = false;
						$document.off( touchMoveEvent, context.move );
						context.move = null;
				};

				$document.on( touchMoveEvent, context.move )
					.one( touchStopEvent, context.stop );
			};
			$this.on( touchStartEvent, context.start );
		},

		teardown: function() {
			var events, context;

			events = $.data( this, "mobile-events" );
			if ( events ) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if ( events.length === 0 ) {
					$.removeData( this, "mobile-events" );
				}
			}

			if ( context ) {
				if ( context.start ) {
					$( this ).off( touchStartEvent, context.start );
				}
				if ( context.move ) {
					$document.off( touchMoveEvent, context.move );
				}
				if ( context.stop ) {
					$document.off( touchStopEvent, context.stop );
				}
			}
		}
	};
	$.each({
		swipeleft: "swipe.left",
		swiperight: "swipe.right"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});
})( jQuery, this );
*/
/* jshint ignore:start */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function ($) {

  var MutationObserver = function () {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + 'MutationObserver' in window) {
        return window[prefixes[i] + 'MutationObserver'];
      }
    }
    return false;
  }();

  var triggers = function triggers(el, type) {
    el.data(type).split(' ').forEach(function (id) {
      $('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
    });
  };
  // Elements with [data-open] will reveal a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-open]', function () {
    triggers($(this), 'open');
  });

  // Elements with [data-close] will close a plugin that supports it when clicked.
  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
  $(document).on('click.zf.trigger', '[data-close]', function () {
    var id = $(this).data('close');
    if (id) {
      triggers($(this), 'close');
    } else {
      $(this).trigger('close.zf.trigger');
    }
  });

  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-toggle]', function () {
    var id = $(this).data('toggle');
    if (id) {
      triggers($(this), 'toggle');
    } else {
      $(this).trigger('toggle.zf.trigger');
    }
  });

  // Elements with [data-closable] will respond to close.zf.trigger events.
  $(document).on('close.zf.trigger', '[data-closable]', function (e) {
    e.stopPropagation();
    var animation = $(this).data('closable');

    if (animation !== '') {
      Foundation.Motion.animateOut($(this), animation, function () {
        $(this).trigger('closed.zf');
      });
    } else {
      $(this).fadeOut().trigger('closed.zf');
    }
  });

  $(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function () {
    var id = $(this).data('toggle-focus');
    $('#' + id).triggerHandler('toggle.zf.trigger', [$(this)]);
  });

  /**
  * Fires once after all other scripts have loaded
  * @function
  * @private
  */
  $(window).on('load', function () {
    checkListeners();
  });

  function checkListeners() {
    eventsListener();
    resizeListener();
    scrollListener();
    mutateListener();
    closemeListener();
  }

  //******** only fires this function once on load, if there's something to watch ********
  function closemeListener(pluginName) {
    var yetiBoxes = $('[data-yeti-box]'),
        plugNames = ['dropdown', 'tooltip', 'reveal'];

    if (pluginName) {
      if (typeof pluginName === 'string') {
        plugNames.push(pluginName);
      } else if ((typeof pluginName === 'undefined' ? 'undefined' : _typeof(pluginName)) === 'object' && typeof pluginName[0] === 'string') {
        plugNames.concat(pluginName);
      } else {
        console.error('Plugin names must be strings');
      }
    }
    if (yetiBoxes.length) {
      var listeners = plugNames.map(function (name) {
        return 'closeme.zf.' + name;
      }).join(' ');

      $(window).off(listeners).on(listeners, function (e, pluginId) {
        var plugin = e.namespace.split('.')[0];
        var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

        plugins.each(function () {
          var _this = $(this);

          _this.triggerHandler('close.zf.trigger', [_this]);
        });
      });
    }
  }

  function resizeListener(debounce) {
    var timer = void 0,
        $nodes = $('[data-resize]');
    if ($nodes.length) {
      $(window).off('resize.zf.trigger').on('resize.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('resizeme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a resize event
          $nodes.attr('data-events', "resize");
        }, debounce || 10); //default time to emit resize event
      });
    }
  }

  function scrollListener(debounce) {
    var timer = void 0,
        $nodes = $('[data-scroll]');
    if ($nodes.length) {
      $(window).off('scroll.zf.trigger').on('scroll.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('scrollme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a scroll event
          $nodes.attr('data-events', "scroll");
        }, debounce || 10); //default time to emit scroll event
      });
    }
  }

  function mutateListener(debounce) {
    var $nodes = $('[data-mutate]');
    if ($nodes.length && MutationObserver) {
      //trigger all listening elements and signal a mutate event
      //no IE 9 or 10
      $nodes.each(function () {
        $(this).triggerHandler('mutateme.zf.trigger');
      });
    }
  }

  function eventsListener() {
    if (!MutationObserver) {
      return false;
    }
    var nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

    //element callback
    var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
      var $target = $(mutationRecordsList[0].target);

      //trigger the event handler for the element depending on type
      switch (mutationRecordsList[0].type) {

        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
          }
          if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('resizeme.zf.trigger', [$target]);
          }
          if (mutationRecordsList[0].attributeName === "style") {
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          }
          break;

        case "childList":
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          break;

        default:
          return false;
        //nothing
      }
    };

    if (nodes.length) {
      //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
      for (var i = 0; i <= nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe(nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
      }
    }
  }

  // ------------------------------------

  // [PH]
  // Foundation.CheckWatchers = checkWatchers;
  Foundation.IHearYou = checkListeners;
  // Foundation.ISeeYou = scrollListener;
  // Foundation.IFeelYou = closemeListener;
}(jQuery);

// function domMutationObserver(debounce) {
//   // !!! This is coming soon and needs more work; not active  !!! //
//   var timer,
//   nodes = document.querySelectorAll('[data-mutate]');
//   //
//   if (nodes.length) {
//     // var MutationObserver = (function () {
//     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
//     //   for (var i=0; i < prefixes.length; i++) {
//     //     if (prefixes[i] + 'MutationObserver' in window) {
//     //       return window[prefixes[i] + 'MutationObserver'];
//     //     }
//     //   }
//     //   return false;
//     // }());
//
//
//     //for the body, we need to listen for all changes effecting the style and class attributes
//     var bodyObserver = new MutationObserver(bodyMutation);
//     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
//
//
//     //body callback
//     function bodyMutation(mutate) {
//       //trigger all listening elements and signal a mutation event
//       if (timer) { clearTimeout(timer); }
//
//       timer = setTimeout(function() {
//         bodyObserver.disconnect();
//         $('[data-mutate]').attr('data-events',"mutate");
//       }, debounce || 150);
//     }
//   }
// }
"use strict";

(function () {
  $(document).foundation();
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.MotionUI = factory(root.jQuery);
  }
})(undefined, function ($) {
  'use strict';

  // Polyfill for requestAnimationFrame

  (function () {
    if (!Date.now) Date.now = function () {
      return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
  })();

  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];

  // Find the right "transitionend" event for this browser
  var endEvent = function () {
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = window.document.createElement('div');

    for (var t in transitions) {
      if (typeof elem.style[t] !== 'undefined') {
        return transitions[t];
      }
    }

    return null;
  }();

  function animate(isIn, element, animation, cb) {
    element = $(element).eq(0);

    if (!element.length) return;

    if (endEvent === null) {
      isIn ? element.show() : element.hide();
      cb();
      return;
    }

    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];

    // Set up the animation
    reset();
    element.addClass(animation);
    element.css('transition', 'none');
    requestAnimationFrame(function () {
      element.addClass(initClass);
      if (isIn) element.show();
    });

    // Start the animation
    requestAnimationFrame(function () {
      element[0].offsetWidth;
      element.css('transition', '');
      element.addClass(activeClass);
    });

    // Clean up the animation when it finishes
    element.one('transitionend', finish);

    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }

    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }

  var MotionUI = {
    animateIn: function animateIn(element, animation, cb) {
      animate(true, element, animation, cb);
    },

    animateOut: function animateOut(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };

  return MotionUI;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJmb3VuZGF0aW9uLmNvcmUuanMiLCJmb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsImZvdW5kYXRpb24ub3JiaXQuanMiLCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQuanMiLCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsImZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJmb3VuZGF0aW9uLnV0aWwudGltZXJBbmRJbWFnZUxvYWRlci5qcyIsImZvdW5kYXRpb24udXRpbC50b3VjaC5qcyIsImZvdW5kYXRpb24udXRpbC50cmlnZ2Vycy5qcyIsIm1haW4uanMiLCJtb3Rpb24tdWkuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwiZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiZiIsInNsaWNlIiwiZyIsImNvbmNhdCIsImgiLCJwdXNoIiwiaSIsImluZGV4T2YiLCJqIiwiayIsInRvU3RyaW5nIiwibCIsImhhc093blByb3BlcnR5IiwibSIsIm4iLCJjYWxsIiwibyIsInAiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInEiLCJyIiwiZm4iLCJpbml0IiwicyIsInQiLCJ1IiwidiIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJ0b0FycmF5IiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwidHlwZSIsImlzV2luZG93IiwiaXNOdW1lcmljIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJjYW1lbENhc2UiLCJ3IiwidHJpbSIsIm1ha2VBcnJheSIsImluQXJyYXkiLCJncmVwIiwiZ3VpZCIsInByb3h5Iiwibm93IiwiRGF0ZSIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJ4IiwieSIsImhhIiwieiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwicG9wIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlJlZ0V4cCIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFhIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmEiLCJjYSIsImNoYXJDb2RlQXQiLCJkYSIsImVhIiwidGEiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwibm9kZVR5cGUiLCJmYSIsImdhIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsIm5vZGVOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2EiLCJqb2luIiwicWEiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImlhIiwiamEiLCJrYSIsImF0dHJIYW5kbGUiLCJsYSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJtYSIsIm5hIiwib2EiLCJpc0Rpc2FibGVkIiwicGEiLCJpc1hNTCIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJpbm5lclRleHQiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwiZXZlbiIsIm9kZCIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInJhIiwiZmlsdGVycyIsInRva2VuaXplIiwidWEiLCJ2YSIsIndhIiwieGEiLCJ5YSIsInphIiwiY29tcGlsZSIsInNlbGVjdG9yIiwic2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZXhwciIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJpcyIsInBhcnNlSFRNTCIsInJlYWR5IiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50IiwicmV2ZXJzZSIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiRGVmZXJyZWQiLCJzdGF0ZSIsImFsd2F5cyIsInBpcGUiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInJlc29sdmUiLCJyZWplY3QiLCJUeXBlRXJyb3IiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJleGNlcHRpb25Ib29rIiwic3RhY2tUcmFjZSIsInJlamVjdFdpdGgiLCJnZXRTdGFja0hvb2siLCJzZXRUaW1lb3V0Iiwid2hlbiIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlXYWl0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsImN1ciIsImNzc051bWJlciIsInVuaXQiLCJzdGFydCIsImJvZHkiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0Iiwib3B0Z3JvdXAiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaHRtbFByZWZpbHRlciIsImNyZWF0ZVRleHROb2RlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib2ZmIiwiZXZlbnQiLCJnbG9iYWwiLCJoYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsIm5hbWVzcGFjZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJhZGRQcm9wIiwiRXZlbnQiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwidHJpZ2dlciIsImJsdXIiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJpc1NpbXVsYXRlZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhckNvZGUiLCJrZXkiLCJrZXlDb2RlIiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwidGFyZ2V0VG91Y2hlcyIsInRvRWxlbWVudCIsInRvdWNoZXMiLCJ3aGljaCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJBYSIsIkJhIiwiQ2EiLCJEYSIsIkVhIiwiRmEiLCJHYSIsIkhhIiwiSWEiLCJKYSIsImh0bWwiLCJjbG9uZSIsInNyYyIsIl9ldmFsVXJsIiwiS2EiLCJjbGVhbkRhdGEiLCJkZXRhY2giLCJhcHBlbmQiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiTGEiLCJNYSIsIk5hIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNzc1RleHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwicGl4ZWxQb3NpdGlvbiIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxNYXJnaW5SaWdodCIsInJlbGlhYmxlTWFyZ2luTGVmdCIsIk9hIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJQYSIsIlFhIiwiUmEiLCJTYSIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsIlRhIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJVYSIsIlZhIiwiV2EiLCJYYSIsImNzc1Byb3BzIiwiWWEiLCJtYXgiLCJaYSIsIiRhIiwiY3NzSG9va3MiLCJvcGFjaXR5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJjb2x1bW5Db3VudCIsImZpbGxPcGFjaXR5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwibGluZUhlaWdodCIsIm9yZGVyIiwib3JwaGFucyIsIndpZG93cyIsInpJbmRleCIsInpvb20iLCJzZXRQcm9wZXJ0eSIsImlzRmluaXRlIiwiZ2V0Q2xpZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsIl9hIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJhYiIsImJiIiwiY2IiLCJkYiIsImViIiwiaGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW50ZXJ2YWwiLCJ0aWNrIiwiZmIiLCJnYiIsImhlaWdodCIsImhiIiwia2IiLCJ0d2VlbmVycyIsImliIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImpiIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImNvbXBsZXRlIiwidGltZXIiLCJhbmltIiwiQW5pbWF0aW9uIiwidHdlZW5lciIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInJhZGlvVmFsdWUiLCJsYiIsIm1iIiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsIm5iIiwib2IiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsInBhcnNlSW50IiwicGIiLCJxYiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwicmIiLCJ2YWwiLCJ2YWxIb29rcyIsInNiIiwiaXNUcmlnZ2VyIiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsImhvdmVyIiwiZm9jdXNpbiIsInRiIiwidWIiLCJ2YiIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwid2IiLCJ4YiIsInliIiwiemIiLCJBYiIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsImRhdGFUeXBlcyIsIk9iIiwiYWpheFNldHRpbmdzIiwiZmxhdE9wdGlvbnMiLCJQYiIsIm1pbWVUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjb252ZXJ0ZXJzIiwiUWIiLCJyZXNwb25zZUZpZWxkcyIsImRhdGFGaWx0ZXIiLCJkYXRhVHlwZSIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsImNvbnRleHQiLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwiaG9zdCIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJ0aW1lb3V0Iiwic2VuZCIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiUmIiLCJTYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbmxvYWQiLCJvbmVycm9yIiwib25hYm9ydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsImJpbmFyeSIsInJlc3BvbnNlIiwic2NyaXB0IiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJUYiIsIlViIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvZmZzZXRQYXJlbnQiLCJzY3JvbGxUbyIsIkhlaWdodCIsIldpZHRoIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImRlZmluZSIsImFtZCIsIlZiIiwialF1ZXJ5IiwiV2IiLCJub0NvbmZsaWN0IiwiRk9VTkRBVElPTl9WRVJTSU9OIiwiRm91bmRhdGlvbiIsInZlcnNpb24iLCJfcGx1Z2lucyIsIl91dWlkcyIsInJ0bCIsInBsdWdpbiIsImZ1bmN0aW9uTmFtZSIsImF0dHJOYW1lIiwiaHlwaGVuYXRlIiwicmVnaXN0ZXJQbHVnaW4iLCJwbHVnaW5OYW1lIiwidXVpZCIsIkdldFlvRGlnaXRzIiwiJGVsZW1lbnQiLCJ1bnJlZ2lzdGVyUGx1Z2luIiwicmVJbml0IiwicGx1Z2lucyIsImlzSlEiLCJfaW5pdCIsIl90aGlzIiwiZm5zIiwicGxncyIsImZvckVhY2giLCJmb3VuZGF0aW9uIiwia2V5cyIsImVyciIsInJvdW5kIiwicG93IiwicmVmbG93IiwiJGVsZW0iLCIkZWwiLCJ0aGluZyIsIm9wdCIsImVsIiwicGFyc2VWYWx1ZSIsImVyIiwiZ2V0Rm5OYW1lIiwidHJhbnNpdGlvbmVuZCIsInRyYW5zaXRpb25zIiwidXRpbCIsInRocm90dGxlIiwiZnVuYyIsImFyZ3MiLCIkbWV0YSIsIiRub0pTIiwiTWVkaWFRdWVyeSIsInBsdWdDbGFzcyIsInVuZGVmaW5lZCIsIlJlZmVyZW5jZUVycm9yIiwiZ2V0VGltZSIsInZlbmRvcnMiLCJ2cCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibGFzdFRpbWUiLCJjYWxsYmFjayIsIm5leHRUaW1lIiwicGVyZm9ybWFuY2UiLCJGdW5jdGlvbiIsIm9UaGlzIiwiYUFyZ3MiLCJmVG9CaW5kIiwiZk5PUCIsImZCb3VuZCIsImZ1bmNOYW1lUmVnZXgiLCJyZXN1bHRzIiwic3RyIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiT2ZmQ2FudmFzIiwiZWxlbWVudCIsImRlZmF1bHRzIiwiJGxhc3RUcmlnZ2VyIiwiJHRyaWdnZXJzIiwiX2V2ZW50cyIsIktleWJvYXJkIiwicmVnaXN0ZXIiLCJ0cmFuc2l0aW9uIiwiY29udGVudE92ZXJsYXkiLCJvdmVybGF5Iiwib3ZlcmxheVBvc2l0aW9uIiwiJG92ZXJsYXkiLCJpc1JldmVhbGVkIiwicmV2ZWFsQ2xhc3MiLCJyZXZlYWxPbiIsIl9zZXRNUUNoZWNrZXIiLCJ0cmFuc2l0aW9uVGltZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImNsb3NlIiwiX2hhbmRsZUtleWJvYXJkIiwiY2xvc2VPbkNsaWNrIiwiJHRhcmdldCIsImF0TGVhc3QiLCJyZXZlYWwiLCIkY2xvc2VyIiwiX3N0b3BTY3JvbGxpbmciLCJfcmVjb3JkU2Nyb2xsYWJsZSIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImFsbG93VXAiLCJhbGxvd0Rvd24iLCJsYXN0WSIsIl9zdG9wU2Nyb2xsUHJvcGFnYXRpb24iLCJ1cCIsImRvd24iLCJmb3JjZVRvIiwiY29udGVudFNjcm9sbCIsImF1dG9Gb2N1cyIsInRyYXBGb2N1cyIsInJlbGVhc2VGb2N1cyIsIl90aGlzMiIsImhhbmRsZUtleSIsImhhbmRsZWQiLCJkZXN0cm95IiwiT3JiaXQiLCJfcmVzZXQiLCIkd3JhcHBlciIsImNvbnRhaW5lckNsYXNzIiwiJHNsaWRlcyIsInNsaWRlQ2xhc3MiLCIkaW1hZ2VzIiwiaW5pdEFjdGl2ZSIsInVzZU1VSSIsIm9uSW1hZ2VzTG9hZGVkIiwiX3ByZXBhcmVGb3JPcmJpdCIsImJ1bGxldHMiLCJfbG9hZEJ1bGxldHMiLCJhdXRvUGxheSIsImdlb1N5bmMiLCJhY2Nlc3NpYmxlIiwiJGJ1bGxldHMiLCJib3hPZkJ1bGxldHMiLCJUaW1lciIsInRpbWVyRGVsYXkiLCJpbmZpbml0ZSIsImNoYW5nZVNsaWRlIiwiX3NldFdyYXBwZXJIZWlnaHQiLCJ0ZW1wIiwiY291bnRlciIsInN3aXBlIiwicGF1c2VPbkhvdmVyIiwicGF1c2UiLCJuYXZCdXR0b25zIiwiJGNvbnRyb2xzIiwibmV4dENsYXNzIiwicHJldkNsYXNzIiwiaWR4IiwibHRyIiwiJHNsaWRlIiwicHJldmlvdXMiLCJyZXN0YXJ0IiwiX3VwZGF0ZUJ1bGxldHMiLCJpc0xUUiIsImNob3NlblNsaWRlIiwiJGN1clNsaWRlIiwiJGZpcnN0U2xpZGUiLCIkbGFzdFNsaWRlIiwiZGlySW4iLCJkaXJPdXQiLCIkbmV3U2xpZGUiLCJpbmZpbml0ZVdyYXAiLCJNb3Rpb24iLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiaXNQYXVzZWQiLCIkb2xkQnVsbGV0Iiwic3BhbiIsIiRuZXdCdWxsZXQiLCJhbmltSW5Gcm9tUmlnaHQiLCJhbmltT3V0VG9SaWdodCIsImFuaW1JbkZyb21MZWZ0IiwiYW5pbU91dFRvTGVmdCIsImtleUNvZGVzIiwiY29tbWFuZHMiLCJnZXRLZXlDb2RlcyIsInBhcnNlS2V5IiwiY29tcG9uZW50IiwiZnVuY3Rpb25zIiwiY29tbWFuZExpc3QiLCJjbWRzIiwiY29tbWFuZCIsInVuaGFuZGxlZCIsImZpbmRGb2N1c2FibGUiLCJjb21wb25lbnROYW1lIiwiJGZvY3VzYWJsZSIsIiRmaXJzdEZvY3VzYWJsZSIsIiRsYXN0Rm9jdXNhYmxlIiwia2NzIiwia2MiLCJkZWZhdWx0UXVlcmllcyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwicmV0aW5hIiwicXVlcmllcyIsImN1cnJlbnQiLCJzZWxmIiwiZXh0cmFjdGVkU3R5bGVzIiwibmFtZWRRdWVyaWVzIiwicGFyc2VTdHlsZVRvT2JqZWN0IiwiX2dldEN1cnJlbnRTaXplIiwiX3dhdGNoZXIiLCJzaXplIiwicXVlcnkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlZCIsIm5ld1NpemUiLCJjdXJyZW50U2l6ZSIsInN0eWxlTWVkaWEiLCJtZWRpYSIsImluZm8iLCJjdXJyZW50U3R5bGUiLCJtYXRjaE1lZGl1bSIsInN0eWxlU2hlZXQiLCJzdHlsZU9iamVjdCIsInJlZHVjZSIsInJldCIsInBhcnRzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW5pdENsYXNzZXMiLCJhY3RpdmVDbGFzc2VzIiwiYW5pbWF0aW9uIiwiTW92ZSIsInByb2ciLCJtb3ZlIiwidHMiLCJpc0luIiwiaW5pdENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJuYW1lU3BhY2UiLCJyZW1haW4iLCJpbWFnZXMiLCJ1bmxvYWRlZCIsInNpbmdsZUltYWdlTG9hZGVkIiwic3BvdFN3aXBlIiwibW92ZVRocmVzaG9sZCIsInRpbWVUaHJlc2hvbGQiLCJzdGFydFBvc1giLCJzdGFydFBvc1kiLCJlbGFwc2VkVGltZSIsImlzTW92aW5nIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwiZHgiLCJkeSIsImFicyIsIm9uVG91Y2hTdGFydCIsImFkZFRvdWNoIiwiaGFuZGxlVG91Y2giLCJldmVudFR5cGVzIiwidG91Y2hzdGFydCIsInRvdWNobW92ZSIsInRvdWNoZW5kIiwic2ltdWxhdGVkRXZlbnQiLCJNb3VzZUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwicHJlZml4ZXMiLCJ0cmlnZ2VycyIsImNoZWNrTGlzdGVuZXJzIiwiZXZlbnRzTGlzdGVuZXIiLCJyZXNpemVMaXN0ZW5lciIsInNjcm9sbExpc3RlbmVyIiwibXV0YXRlTGlzdGVuZXIiLCJjbG9zZW1lTGlzdGVuZXIiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJsaXN0ZW5lcnMiLCJwbHVnaW5JZCIsImRlYm91bmNlIiwiJG5vZGVzIiwibm9kZXMiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImF0dHJpYnV0ZU5hbWUiLCJlbGVtZW50T2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJJSGVhcllvdSIsImZhY3Rv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Ii8qISBqUXVlcnkgdjMuMi4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGY9Yy5zbGljZSxnPWMuY29uY2F0LGg9Yy5wdXNoLGk9Yy5pbmRleE9mLGo9e30saz1qLnRvU3RyaW5nLGw9ai5oYXNPd25Qcm9wZXJ0eSxtPWwudG9TdHJpbmcsbj1tLmNhbGwoT2JqZWN0KSxvPXt9O2Z1bmN0aW9uIHAoYSxiKXtiPWJ8fGQ7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2MudGV4dD1hLGIuaGVhZC5hcHBlbmRDaGlsZChjKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfXZhciBxPVwiMy4yLjFcIixyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByLmZuLmluaXQoYSxiKX0scz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csdD0vXi1tcy0vLHU9Ly0oW2Etel0pL2csdj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O3IuZm49ci5wcm90b3R5cGU9e2pxdWVyeTpxLGNvbnN0cnVjdG9yOnIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBmLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9mLmNhbGwodGhpcyk6YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPXIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiByLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoYTwwP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmM8Yj9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6aCxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LHIuZXh0ZW5kPXIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8ci5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtoPGk7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKHIuaXNQbGFpbk9iamVjdChkKXx8KGU9QXJyYXkuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmQXJyYXkuaXNBcnJheShjKT9jOltdKTpmPWMmJnIuaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09ci5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LHIuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKHErTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09ci50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYodyhhKSl7Zm9yKGM9YS5sZW5ndGg7ZDxjO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UocyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJih3KE9iamVjdChhKSk/ci5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpoLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aS5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2Q8YztkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztmPGc7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj0wLGg9W107aWYodyhhKSlmb3IoZD1hLmxlbmd0aDtmPGQ7ZisrKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGYgaW4gYSllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZy5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gZD1mLmNhbGwoYXJndW1lbnRzLDIpLGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGYuY2FsbChhcmd1bWVudHMpKSl9LGUuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxyLmd1aWQrKyxlfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpvfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoci5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksci5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtqW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiB3KGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9ci50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWMmJiFyLmlzV2luZG93KGEpJiYoXCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKX12YXIgeD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz17fS5oYXNPd25Qcm9wZXJ0eSxEPVtdLEU9RC5wb3AsRj1ELnB1c2gsRz1ELnB1c2gsSD1ELnNsaWNlLEk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEo9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEs9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEw9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLE09XCJcXFxcW1wiK0srXCIqKFwiK0wrXCIpKD86XCIrSytcIiooWypeJHwhfl0/PSlcIitLK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTCtcIikpfClcIitLK1wiKlxcXFxdXCIsTj1cIjooXCIrTCtcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTStcIikqKXwuKilcXFxcKXwpXCIsTz1uZXcgUmVnRXhwKEsrXCIrXCIsXCJnXCIpLFA9bmV3IFJlZ0V4cChcIl5cIitLK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitLK1wiKyRcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0srXCIqLFwiK0srXCIqXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitLK1wiKihbPit+XXxcIitLK1wiKVwiK0srXCIqXCIpLFM9bmV3IFJlZ0V4cChcIj1cIitLK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrSytcIipcXFxcXVwiLFwiZ1wiKSxUPW5ldyBSZWdFeHAoTiksVT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitMK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0wrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitMK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK00pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK04pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0srXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitLK1wiKig/OihbKy1dfClcIitLK1wiKihcXFxcZCspfCkpXCIrSytcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitKK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrSytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrSytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrSytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFg9L15oXFxkJC9pLFk9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLCQ9L1srfl0vLF89bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0srXCI/fChcIitLK1wiKXwuKVwiLFwiaWdcIiksYWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOmQ8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sYmE9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csY2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9cIlxcMFwiPT09YT9cIlxcdWZmZmRcIjphLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2EuY2hhckNvZGVBdChhLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrYX0sZGE9ZnVuY3Rpb24oKXttKCl9LGVhPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITAmJihcImZvcm1cImluIGF8fFwibGFiZWxcImluIGEpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtHLmFwcGx5KEQ9SC5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxEW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtHPXthcHBseTpELmxlbmd0aD9mdW5jdGlvbihhLGIpe0YuYXBwbHkoYSxILmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzPWImJmIub3duZXJEb2N1bWVudCx3PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09dyYmOSE9PXcmJjExIT09dylyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXcmJihsPVouZXhlYyhhKSkpaWYoZj1sWzFdKXtpZig5PT09dyl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHMmJihqPXMuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKGxbMl0pcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPWxbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT13KXM9YixyPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShiYSxjYSk6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSksbz1nKGEpLGg9by5sZW5ndGg7d2hpbGUoaC0tKW9baF09XCIjXCIraytcIiBcIitzYShvW2hdKTtyPW8uam9pbihcIixcIikscz0kLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGJ9aWYocil0cnl7cmV0dXJuIEcuYXBwbHkoZCxzLnF1ZXJ5U2VsZWN0b3JBbGwocikpLGR9Y2F0Y2goeCl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUCxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJmEuc291cmNlSW5kZXgtYi5zb3VyY2VJbmRleDtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImZvcm1cImluIGI/Yi5wYXJlbnROb2RlJiZiLmRpc2FibGVkPT09ITE/XCJsYWJlbFwiaW4gYj9cImxhYmVsXCJpbiBiLnBhcmVudE5vZGU/Yi5wYXJlbnROb2RlLmRpc2FibGVkPT09YTpiLmRpc2FibGVkPT09YTpiLmlzRGlzYWJsZWQ9PT1hfHxiLmlzRGlzYWJsZWQhPT0hYSYmZWEoYik9PT1hOmIuZGlzYWJsZWQ9PT1hOlwibGFiZWxcImluIGImJmIuZGlzYWJsZWQ9PT1hfX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiEhYiYmXCJIVE1MXCIhPT1iLm5vZGVOYW1lfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLHYhPT1uJiYoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9WS50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSk6KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjLGQsZSxmPWIuZ2V0RWxlbWVudEJ5SWQoYSk7aWYoZil7aWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl07ZT1iLmdldEVsZW1lbnRzQnlOYW1lKGEpLGQ9MDt3aGlsZShmPWVbZCsrXSlpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXX1yZXR1cm5bXX19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwKXJldHVybiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSl9LHI9W10scT1bXSwoYy5xc2E9WS50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0srXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0srXCIqKD86dmFsdWV8XCIrSitcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitLK1wiKlsqXiR8IX5dPz1cIiksMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxvLmFwcGVuZENoaWxkKGEpLmRpc2FibGVkPSEwLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9WS50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiKlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE4pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9WS50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8WS50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0koayxhKS1JKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SShrLGEpLUkoayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/bGEoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShTLFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXNjYXBlPWZ1bmN0aW9uKGEpe3JldHVybihhK1wiXCIpLnJlcGxhY2UoYmEsY2EpfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShfLGFhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKF8sYWEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVC50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0srXCIpXCIrYStcIihcIitLK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6IWJ8fChlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKE8sXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWImJihlPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SShhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUCxcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoXyxhYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFUudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOm9hKCExKSxkaXNhYmxlZDpvYSghMCksY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnBhKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6cGEoZnVuY3Rpb24oYSxiLGMpe3JldHVybltjPDA/YytiOmNdfSksZXZlbjpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHJhKCl7fXJhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcmEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1RLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHNhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2I8YztiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1iLm5leHQsZj1lfHxkLGc9YyYmXCJwYXJlbnROb2RlXCI9PT1mLGg9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxlKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpcmV0dXJuIGEoYixjLGUpO3JldHVybiExfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG09W3csaF07aWYoaSl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZykmJmEoYixjLGkpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKWlmKGw9Ylt1XXx8KGJbdV09e30pLGs9bFtiLnVuaXF1ZUlEXXx8KGxbYi51bmlxdWVJRF09e30pLGUmJmU9PT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYj1iW2RdfHxiO2Vsc2V7aWYoKGo9a1tmXSkmJmpbMF09PT13JiZqWzFdPT09aClyZXR1cm4gbVsyXT1qWzJdO2lmKGtbZl09bSxtWzJdPWEoYixjLGkpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB1YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB3YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtoPGk7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXhhKGQpKSxlJiYhZVt1XSYmKGU9eGEoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dmEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp3YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9d2EocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0koZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXdhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpHLmFwcGx5KGcscil9KX1mdW5jdGlvbiB5YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBJKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtpPGY7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3RhKHVhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2U8ZjtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB4YShpPjEmJnVhKG0pLGk+MSYmc2EoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShQLFwiJDFcIiksYyxpPGUmJnlhKGEuc2xpY2UoaSxlKSksZTxmJiZ5YShhPWEuc2xpY2UoZSkpLGU8ZiYmc2EoYSkpfW0ucHVzaChjKX1yZXR1cm4gdWEobSl9ZnVuY3Rpb24gemEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUUuY2FsbChpKSk7dT13YSh1KX1HLmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eWEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHphKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsaSxqLGssbCxtPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbj0hZSYmZyhhPW0uc2VsZWN0b3J8fGEpO2lmKGM9Y3x8W10sMT09PW4ubGVuZ3RoKXtpZihpPW5bMF09blswXS5zbGljZSgwKSxpLmxlbmd0aD4yJiZcIklEXCI9PT0oaj1pWzBdKS50eXBlJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtpWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksYil8fFtdKVswXSwhYilyZXR1cm4gYzttJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShpLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1mPVYubmVlZHNDb250ZXh0LnRlc3QoYSk/MDppLmxlbmd0aDt3aGlsZShmLS0pe2lmKGo9aVtmXSxkLnJlbGF0aXZlW2s9ai50eXBlXSlicmVhaztpZigobD1kLmZpbmRba10pJiYoZT1sKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLCQudGVzdChpWzBdLnR5cGUpJiZxYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGkuc3BsaWNlKGYsMSksYT1lLmxlbmd0aCYmc2EoaSksIWEpcmV0dXJuIEcuYXBwbHkoYyxlKSxjO2JyZWFrfX19cmV0dXJuKG18fGgoYSxuKSkoZSxiLCFwLGMsIWJ8fCQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8YiksY30sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtpZighYyYmXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEosZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKCFjKXJldHVybiBhW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtyLmZpbmQ9eCxyLmV4cHI9eC5zZWxlY3RvcnMsci5leHByW1wiOlwiXT1yLmV4cHIucHNldWRvcyxyLnVuaXF1ZVNvcnQ9ci51bmlxdWU9eC51bmlxdWVTb3J0LHIudGV4dD14LmdldFRleHQsci5pc1hNTERvYz14LmlzWE1MLHIuY29udGFpbnM9eC5jb250YWlucyxyLmVzY2FwZVNlbGVjdG9yPXguZXNjYXBlO3ZhciB5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZyKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sQT1yLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEIoYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfXZhciBDPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pLEQ9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEUoYSxiLGMpe3JldHVybiByLmlzRnVuY3Rpb24oYik/ci5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk6Yi5ub2RlVHlwZT9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk6XCJzdHJpbmdcIiE9dHlwZW9mIGI/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09Y30pOkQudGVzdChiKT9yLmZpbHRlcihiLGEsYyk6KGI9ci5maWx0ZXIoYixhKSxyLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jJiYxPT09YS5ub2RlVHlwZX0pKX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBGLEc9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sSD1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxGLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkcuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQy50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0gucHJvdG90eXBlPXIuZm4sRj1yKGQpO3ZhciBJPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEo9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudDooQihhLFwidGVtcGxhdGVcIikmJihhPWEuY29udGVudHx8YSksci5tZXJnZShbXSxhLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPXIubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPXIuZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihKW2FdfHxyLnVuaXF1ZVNvcnQoZSksSS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEw9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIE0oYSl7dmFyIGI9e307cmV0dXJuIHIuZWFjaChhLm1hdGNoKEwpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifXIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/TShhKTpyLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9ZXx8YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtyLmVhY2goYixmdW5jdGlvbihiLGMpe3IuaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXIudHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiByLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9ci5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxjPD1oJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/ci5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fGJ8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan07ZnVuY3Rpb24gTihhKXtyZXR1cm4gYX1mdW5jdGlvbiBPKGEpe3Rocm93IGF9ZnVuY3Rpb24gUChhLGIsYyxkKXt2YXIgZTt0cnl7YSYmci5pc0Z1bmN0aW9uKGU9YS5wcm9taXNlKT9lLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihlPWEudGhlbik/ZS5jYWxsKGEsYixjKTpiLmFwcGx5KHZvaWQgMCxbYV0uc2xpY2UoZCkpfWNhdGNoKGEpe2MuYXBwbHkodm9pZCAwLFthXSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpKTooZisrLGouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSxnKGYsYyxOLGMubm90aWZ5V2l0aCkpKTooZCE9PU4mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TyYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TixhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpOKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihQKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QsIWIpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlQKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBRPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlEudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFI9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFIudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8Ui5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1SLnRoZW47ZnVuY3Rpb24gUygpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxcbmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSxyLnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChyLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSk7dmFyIFQ9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09ci50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpVChhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxyLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwocihhKSxjKX0pKSxiKSlmb3IoO2g8aTtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxVPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gVigpe3RoaXMuZXhwYW5kbz1yLmV4cGFuZG8rVi51aWQrK31WLnVpZD0xLFYucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LFUoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbci5jYW1lbENhc2UoYildPWM7ZWxzZSBmb3IoZCBpbiBiKWVbci5jYW1lbENhc2UoZCldPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bci5jYW1lbENhc2UoYildfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz90aGlzLmdldChhLGIpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1kKXtpZih2b2lkIDAhPT1iKXtBcnJheS5pc0FycmF5KGIpP2I9Yi5tYXAoci5jYW1lbENhc2UpOihiPXIuY2FtZWxDYXNlKGIpLGI9YiBpbiBkP1tiXTpiLm1hdGNoKEwpfHxbXSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGRbYltjXV19KHZvaWQgMD09PWJ8fHIuaXNFbXB0eU9iamVjdChkKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIXIuaXNFbXB0eU9iamVjdChiKX19O3ZhciBXPW5ldyBWLFg9bmV3IFYsWT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sWj0vW0EtWl0vZztmdW5jdGlvbiAkKGEpe3JldHVyblwidHJ1ZVwiPT09YXx8XCJmYWxzZVwiIT09YSYmKFwibnVsbFwiPT09YT9udWxsOmE9PT0rYStcIlwiPythOlkudGVzdChhKT9KU09OLnBhcnNlKGEpOmEpfWZ1bmN0aW9uIF8oYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShaLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9JChjKX1jYXRjaChlKXt9WC5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9ci5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIFguaGFzRGF0YShhKXx8Vy5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gWC5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7WC5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBXLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Vy5yZW1vdmUoYSxiKX19KSxyLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPVguZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhVy5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPXIuY2FtZWxDYXNlKGQuc2xpY2UoNSkpLF8oZixkLGVbZF0pKSk7Vy5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEpfSk6VCh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9WC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9XyhmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5yZW1vdmUodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoYSlyZXR1cm4gYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1XLmdldChhLGIpLGMmJighZHx8QXJyYXkuaXNBcnJheShjKT9kPVcuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBXLmdldChhLGMpfHxXLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vy5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vy5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgYWE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLGJhPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2FhK1wiKShbYS16JV0qKSRcIixcImlcIiksY2E9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGRhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PWEuc3R5bGUuZGlzcGxheXx8XCJcIj09PWEuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSkmJlwibm9uZVwiPT09ci5jc3MoYSxcImRpc3BsYXlcIil9LGVhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTtmdW5jdGlvbiBmYShhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gci5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChyLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0oci5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmYmEuZXhlYyhyLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLHIuc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIGdhPXt9O2Z1bmN0aW9uIGhhKGEpe3ZhciBiLGM9YS5vd25lckRvY3VtZW50LGQ9YS5ub2RlTmFtZSxlPWdhW2RdO3JldHVybiBlP2U6KGI9Yy5ib2R5LmFwcGVuZENoaWxkKGMuY3JlYXRlRWxlbWVudChkKSksZT1yLmNzcyhiLFwiZGlzcGxheVwiKSxiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksXCJub25lXCI9PT1lJiYoZT1cImJsb2NrXCIpLGdhW2RdPWUsZSl9ZnVuY3Rpb24gaWEoYSxiKXtmb3IodmFyIGMsZCxlPVtdLGY9MCxnPWEubGVuZ3RoO2Y8ZztmKyspZD1hW2ZdLGQuc3R5bGUmJihjPWQuc3R5bGUuZGlzcGxheSxiPyhcIm5vbmVcIj09PWMmJihlW2ZdPVcuZ2V0KGQsXCJkaXNwbGF5XCIpfHxudWxsLGVbZl18fChkLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJmRhKGQpJiYoZVtmXT1oYShkKSkpOlwibm9uZVwiIT09YyYmKGVbZl09XCJub25lXCIsVy5zZXQoZCxcImRpc3BsYXlcIixjKSkpO2ZvcihmPTA7ZjxnO2YrKyludWxsIT1lW2ZdJiYoYVtmXS5zdHlsZS5kaXNwbGF5PWVbZl0pO3JldHVybiBhfXIuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGEodGhpcyk/cih0aGlzKS5zaG93KCk6cih0aGlzKS5oaWRlKCl9KX19KTt2YXIgamE9L14oPzpjaGVja2JveHxyYWRpbykkL2ksa2E9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLGxhPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksbWE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTttYS5vcHRncm91cD1tYS5vcHRpb24sbWEudGJvZHk9bWEudGZvb3Q9bWEuY29sZ3JvdXA9bWEuY2FwdGlvbj1tYS50aGVhZCxtYS50aD1tYS50ZDtmdW5jdGlvbiBuYShhLGIpe3ZhciBjO3JldHVybiBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXSx2b2lkIDA9PT1ifHxiJiZCKGEsYik/ci5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBvYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylXLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxXLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIHBhPS88fCYjP1xcdys7LztmdW5jdGlvbiBxYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG49MCxvPWEubGVuZ3RoO248bztuKyspaWYoZj1hW25dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1yLnR5cGUoZikpci5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYocGEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oa2EuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT1tYVtoXXx8bWEuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStyLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7ci5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixuPTA7d2hpbGUoZj1tW24rK10paWYoZCYmci5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1yLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPW5hKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmb2EoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKWxhLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksby5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLG8ubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgcmE9ZC5kb2N1bWVudEVsZW1lbnQsc2E9L15rZXkvLHRhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyx1YT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHZhKCl7cmV0dXJuITB9ZnVuY3Rpb24gd2EoKXtyZXR1cm4hMX1mdW5jdGlvbiB4YSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24geWEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXlhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9d2E7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gcigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1yLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1yLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuZ2V0KGEpO2lmKHEpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IocmEsZSksYy5ndWlkfHwoYy5ndWlkPXIuZ3VpZCsrKSwoaT1xLmV2ZW50cyl8fChpPXEuZXZlbnRzPXt9KSwoZz1xLmhhbmRsZSl8fChnPXEuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiByJiZyLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9yLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuJiYobD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LGs9ci5leHRlbmQoe3R5cGU6bixvcmlnVHlwZTpwLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmci5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpvLmpvaW4oXCIuXCIpfSxmKSwobT1pW25dKXx8KG09aVtuXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLG8sZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobixnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLHIuZXZlbnQuZ2xvYmFsW25dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmhhc0RhdGEoYSkmJlcuZ2V0KGEpO2lmKHEmJihpPXEuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbil7bD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbT1pW25dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitvLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcCE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxvLHEuaGFuZGxlKSE9PSExfHxyLnJlbW92ZUV2ZW50KGEsbixxLmhhbmRsZSksZGVsZXRlIGlbbl0pfWVsc2UgZm9yKG4gaW4gaSlyLmV2ZW50LnJlbW92ZShhLG4rYltqXSxjLGQsITApO3IuaXNFbXB0eU9iamVjdChpKSYmVy5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXt2YXIgYj1yLmV2ZW50LmZpeChhKSxjLGQsZSxmLGcsaCxpPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxqPShXLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXXx8W10saz1yLmV2ZW50LnNwZWNpYWxbYi50eXBlXXx8e307Zm9yKGlbMF09YixjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylpW2NdPWFyZ3VtZW50c1tjXTtpZihiLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGIpIT09ITEpe2g9ci5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYixqKSxjPTA7d2hpbGUoKGY9aFtjKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7Yi5jdXJyZW50VGFyZ2V0PWYuZWxlbSxkPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tkKytdKSYmIWIuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSliLnJuYW1lc3BhY2UmJiFiLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChiLmhhbmRsZU9iaj1nLGIuZGF0YT1nLmRhdGEsZT0oKHIuZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGIucmVzdWx0PWUpPT09ITEmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGIpLGIucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGg9W10saT1iLmRlbGVnYXRlQ291bnQsaj1hLnRhcmdldDtpZihpJiZqLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWEudHlwZSYmYS5idXR0b24+PTEpKWZvcig7aiE9PXRoaXM7aj1qLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWoubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGouZGlzYWJsZWQhPT0hMCkpe2ZvcihmPVtdLGc9e30sYz0wO2M8aTtjKyspZD1iW2NdLGU9ZC5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1nW2VdJiYoZ1tlXT1kLm5lZWRzQ29udGV4dD9yKGUsdGhpcykuaW5kZXgoaik+LTE6ci5maW5kKGUsdGhpcyxudWxsLFtqXSkubGVuZ3RoKSxnW2VdJiZmLnB1c2goZCk7Zi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmZ9KX1yZXR1cm4gaj10aGlzLGk8Yi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmIuc2xpY2UoaSl9KSxofSxhZGRQcm9wOmZ1bmN0aW9uKGEsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIuRXZlbnQucHJvdG90eXBlLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpyLmlzRnVuY3Rpb24oYik/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGIodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFthXX0sc2V0OmZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX19KX0sZml4OmZ1bmN0aW9uKGEpe3JldHVybiBhW3IuZXhwYW5kb10/YTpuZXcgci5FdmVudChhKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PXhhKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PXhhKCkmJnRoaXMuYmx1cilyZXR1cm4gdGhpcy5ibHVyKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYoXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZCKHRoaXMsXCJpbnB1dFwiKSlyZXR1cm4gdGhpcy5jbGljaygpLCExfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gQihhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sci5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sci5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygci5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/dmE6d2EsdGhpcy50YXJnZXQ9YS50YXJnZXQmJjM9PT1hLnRhcmdldC5ub2RlVHlwZT9hLnRhcmdldC5wYXJlbnROb2RlOmEudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1hLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWEucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWEsYiYmci5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8ci5ub3coKSx2b2lkKHRoaXNbci5leHBhbmRvXT0hMCkpOm5ldyByLkV2ZW50KGEsYil9LHIuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpyLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDp3YSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LHIuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihhKXt2YXIgYj1hLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS53aGljaCYmc2EudGVzdChhLnR5cGUpP251bGwhPWEuY2hhckNvZGU/YS5jaGFyQ29kZTphLmtleUNvZGU6IWEud2hpY2gmJnZvaWQgMCE9PWImJnRhLnRlc3QoYS50eXBlKT8xJmI/MToyJmI/Mzo0JmI/MjowOmEud2hpY2h9fSxyLmV2ZW50LmFkZFByb3ApLHIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe3IuZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8ci5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksci5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLHIoYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz13YSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIgemE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksQWE9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQmE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxDYT0vXnRydWVcXC8oLiopLyxEYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gRWEoYSxiKXtyZXR1cm4gQihhLFwidGFibGVcIikmJkIoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/cihcIj50Ym9keVwiLGEpWzBdfHxhOmF9ZnVuY3Rpb24gRmEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gR2EoYSl7dmFyIGI9Q2EuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIEhhKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoVy5oYXNEYXRhKGEpJiYoZj1XLmFjY2VzcyhhKSxnPVcuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtjPGQ7YysrKXIuZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1YLmhhc0RhdGEoYSkmJihoPVguYWNjZXNzKGEpLGk9ci5leHRlbmQoe30saCksWC5zZXQoYixpKSl9fWZ1bmN0aW9uIElhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJmphLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gSmEoYSxiLGMsZCl7Yj1nLmFwcGx5KFtdLGIpO3ZhciBlLGYsaCxpLGosayxsPTAsbT1hLmxlbmd0aCxuPW0tMSxxPWJbMF0scz1yLmlzRnVuY3Rpb24ocSk7aWYoc3x8bT4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIW8uY2hlY2tDbG9uZSYmQmEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7cyYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLEphKGYsYixjLGQpfSk7aWYobSYmKGU9cWEoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxmPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZiksZnx8ZCkpe2ZvcihoPXIubWFwKG5hKGUsXCJzY3JpcHRcIiksRmEpLGk9aC5sZW5ndGg7bDxtO2wrKylqPWUsbCE9PW4mJihqPXIuY2xvbmUoaiwhMCwhMCksaSYmci5tZXJnZShoLG5hKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVtsXSxqLGwpO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LHIubWFwKGgsR2EpLGw9MDtsPGk7bCsrKWo9aFtsXSxsYS50ZXN0KGoudHlwZXx8XCJcIikmJiFXLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmci5jb250YWlucyhrLGopJiYoai5zcmM/ci5fZXZhbFVybCYmci5fZXZhbFVybChqLnNyYyk6cChqLnRleHRDb250ZW50LnJlcGxhY2UoRGEsXCJcIiksaykpfXJldHVybiBhfWZ1bmN0aW9uIEthKGEsYixjKXtmb3IodmFyIGQsZT1iP3IuZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxyLmNsZWFuRGF0YShuYShkKSksZC5wYXJlbnROb2RlJiYoYyYmci5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJm9hKG5hKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9ci5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh6YSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShvLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxyLmlzWE1MRG9jKGEpKSlmb3IoZz1uYShoKSxmPW5hKGEpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSWEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8bmEoYSksZz1nfHxuYShoKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUhhKGZbZF0sZ1tkXSk7ZWxzZSBIYShhLGgpO3JldHVybiBnPW5hKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmb2EoZywhaSYmbmEoYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1yLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihVKGMpKXtpZihiPWNbVy5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9yLmV2ZW50LnJlbW92ZShjLGQpOnIucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW1cuZXhwYW5kb109dm9pZCAwfWNbWC5leHBhbmRvXSYmKGNbWC5leHBhbmRvXT12b2lkIDApfX19KSxyLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9yLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbCE9YSYmYSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFBYS50ZXN0KGEpJiYhbWFbKGthLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1yLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7YzxkO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO3IuaW5BcnJheSh0aGlzLGEpPDAmJihyLmNsZWFuRGF0YShuYSh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLHIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1yKGEpLGY9ZS5sZW5ndGgtMSxnPTA7Zzw9ZjtnKyspYz1nPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLHIoZVtnXSlbYl0oYyksaC5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgTGE9L15tYXJnaW4vLE1hPW5ldyBSZWdFeHAoXCJeKFwiK2FhK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLE5hPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscmEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscmEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gT2EoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxOYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmTWEudGVzdChnKSYmTGEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBQYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgUWE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFJhPS9eLS0vLFNhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxUYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFVhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxWYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gV2EoYSl7aWYoYSBpbiBWYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVVhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1VYVtjXStiLGEgaW4gVmEpcmV0dXJuIGF9ZnVuY3Rpb24gWGEoYSl7dmFyIGI9ci5jc3NQcm9wc1thXTtyZXR1cm4gYnx8KGI9ci5jc3NQcm9wc1thXT1XYShhKXx8YSksYn1mdW5jdGlvbiBZYShhLGIsYyl7dmFyIGQ9YmEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIFphKGEsYixjLGQsZSl7dmFyIGYsZz0wO2ZvcihmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowO2Y8NDtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9ci5jc3MoYSxjK2NhW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gJGEoYSxiLGMpe3ZhciBkLGU9TmEoYSksZj1PYShhLGIsZSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKTtyZXR1cm4gTWEudGVzdChmKT9mOihkPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGY9PT1hLnN0eWxlW2JdKSxcImF1dG9cIj09PWYmJihmPWFbXCJvZmZzZXRcIitiWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKV0pLGY9cGFyc2VGbG9hdChmKXx8MCxmK1phKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGUpK1wicHhcIil9ci5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1PYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKSxqPWEuc3R5bGU7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTpqW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1iYS5leGVjKGMpKSYmZVsxXSYmKGM9ZmEoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChyLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLG8uY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChqW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGk/ai5zZXRQcm9wZXJ0eShiLGMpOmpbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1PYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIFRhJiYoZT1UYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxyLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7aWYoYylyZXR1cm4hUWEudGVzdChyLmNzcyhhLFwiZGlzcGxheVwiKSl8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/JGEoYSxiLGQpOmVhKGEsU2EsZnVuY3Rpb24oKXtyZXR1cm4gJGEoYSxiLGQpfSl9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZOYShhKSxnPWQmJlphKGEsYixkLFwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1iYS5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1yLmNzcyhhLGIpKSxZYShhLGMsZyl9fX0pLHIuY3NzSG9va3MubWFyZ2luTGVmdD1QYShvLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe2lmKGIpcmV0dXJuKHBhcnNlRmxvYXQoT2EoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtZWEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksci5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdO2Q8NDtkKyspZVthK2NhW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LExhLnRlc3QoYSl8fChyLmNzc0hvb2tzW2ErYl0uc2V0PVlhKX0pLHIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKEFycmF5LmlzQXJyYXkoYikpe2ZvcihkPU5hKGEpLGU9Yi5sZW5ndGg7ZzxlO2crKylmW2JbZ11dPXIuY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9yLnN0eWxlKGEsYixjKTpyLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiBfYShhLGIsYyxkLGUpe3JldHVybiBuZXcgX2EucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1yLlR3ZWVuPV9hLF9hLnByb3RvdHlwZT17Y29uc3RydWN0b3I6X2EsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8ci5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChyLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9ci5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LF9hLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1fYS5wcm90b3R5cGUsX2EucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9ci5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe3IuZnguc3RlcFthLnByb3BdP3IuZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtyLmNzc1Byb3BzW2EucHJvcF1dJiYhci5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93OnIuc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LF9hLnByb3BIb29rcy5zY3JvbGxUb3A9X2EucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sci5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHIuZng9X2EucHJvdG90eXBlLmluaXQsci5meC5zdGVwPXt9O3ZhciBhYixiYixjYj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sZGI9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBlYigpe2JiJiYoZC5oaWRkZW49PT0hMSYmYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZWIpOmEuc2V0VGltZW91dChlYixyLmZ4LmludGVydmFsKSxyLmZ4LnRpY2soKSl9ZnVuY3Rpb24gZmIoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YWI9dm9pZCAwfSksYWI9ci5ub3coKX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ZDw0O2QrPTItYiljPWNhW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIGhiKGEsYixjKXtmb3IodmFyIGQsZT0oa2IudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoa2IudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBpYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPVwid2lkdGhcImluIGJ8fFwiaGVpZ2h0XCJpbiBiLG09dGhpcyxuPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJmRhKGEpLHE9Vy5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoZz1yLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1nLnVucXVldWVkJiYoZy51bnF1ZXVlZD0wLGg9Zy5lbXB0eS5maXJlLGcuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2cudW5xdWV1ZWR8fGgoKX0pLGcudW5xdWV1ZWQrKyxtLmFsd2F5cyhmdW5jdGlvbigpe20uYWx3YXlzKGZ1bmN0aW9uKCl7Zy51bnF1ZXVlZC0tLHIucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8Zy5lbXB0eS5maXJlKCl9KX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxjYi50ZXN0KGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1uW2RdPXEmJnFbZF18fHIuc3R5bGUoYSxkKX1pZihpPSFyLmlzRW1wdHlPYmplY3QoYiksaXx8IXIuaXNFbXB0eU9iamVjdChuKSl7bCYmMT09PWEubm9kZVR5cGUmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPXEmJnEuZGlzcGxheSxudWxsPT1qJiYoaj1XLmdldChhLFwiZGlzcGxheVwiKSksaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxcIm5vbmVcIj09PWsmJihqP2s9ajooaWEoW2FdLCEwKSxqPWEuc3R5bGUuZGlzcGxheXx8aixrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLGlhKFthXSkpKSwoXCJpbmxpbmVcIj09PWt8fFwiaW5saW5lLWJsb2NrXCI9PT1rJiZudWxsIT1qKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZmxvYXRcIikmJihpfHwobS5kb25lKGZ1bmN0aW9uKCl7by5kaXNwbGF5PWp9KSxudWxsPT1qJiYoaz1vLmRpc3BsYXksaj1cIm5vbmVcIj09PWs/XCJcIjprKSksby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLG0uYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKSxpPSExO2ZvcihkIGluIG4paXx8KHE/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPVcuYWNjZXNzKGEsXCJmeHNob3dcIix7ZGlzcGxheTpqfSksZiYmKHEuaGlkZGVuPSFwKSxwJiZpYShbYV0sITApLG0uZG9uZShmdW5jdGlvbigpe3B8fGlhKFthXSksVy5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoZCBpbiBuKXIuc3R5bGUoYSxkLG5bZF0pfSkpLGk9aGIocD9xW2RdOjAsZCxtKSxkIGluIHF8fChxW2RdPWkuc3RhcnQscCYmKGkuZW5kPWkuc3RhcnQsaS5zdGFydD0wKSl9fWZ1bmN0aW9uIGpiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9ci5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxBcnJheS5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1yLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24ga2IoYSxiLGMpe3ZhciBkLGUsZj0wLGc9a2IucHJlZmlsdGVycy5sZW5ndGgsaD1yLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1hYnx8ZmIoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7ZzxpO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLGY8MSYmaT9jOihpfHxoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6ci5leHRlbmQoe30sYiksb3B0czpyLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ci5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTphYnx8ZmIoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPXIuVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7YzxkO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoamIoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7ZjxnO2YrKylpZihkPWtiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiByLmlzRnVuY3Rpb24oZC5zdG9wKSYmKHIuX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1yLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gci5tYXAoayxoYixqKSxyLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKSxyLmZ4LnRpbWVyKHIuZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGp9ci5BbmltYXRpb249ci5leHRlbmQoa2Ise3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIGZhKGMuZWxlbSxhLGJhLmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7ci5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goTCk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspYz1hW2RdLGtiLnR3ZWVuZXJzW2NdPWtiLnR3ZWVuZXJzW2NdfHxbXSxrYi50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltpYl0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9rYi5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6a2IucHJlZmlsdGVycy5wdXNoKGEpfX0pLHIuc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP3IuZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8ci5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFyLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiByLmZ4Lm9mZj9kLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIGQuZHVyYXRpb24mJihkLmR1cmF0aW9uIGluIHIuZnguc3BlZWRzP2QuZHVyYXRpb249ci5meC5zcGVlZHNbZC5kdXJhdGlvbl06ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe3IuaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmci5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LHIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKGRhKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXIuaXNFbXB0eU9iamVjdChhKSxmPXIuc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1rYih0aGlzLHIuZXh0ZW5kKHt9LGEpLGYpOyhlfHxXLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9ci50aW1lcnMsZz1XLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZkYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxyLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPVcuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9ci50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLHIucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2I8ZztiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksci5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPXIuZm5bYl07ci5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZ2IoYiwhMCksYSxkLGUpfX0pLHIuZWFjaCh7c2xpZGVEb3duOmdiKFwic2hvd1wiKSxzbGlkZVVwOmdiKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpnYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxyLnRpbWVycz1bXSxyLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1yLnRpbWVycztmb3IoYWI9ci5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxyLmZ4LnN0b3AoKSxhYj12b2lkIDB9LHIuZngudGltZXI9ZnVuY3Rpb24oYSl7ci50aW1lcnMucHVzaChhKSxyLmZ4LnN0YXJ0KCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpe2JifHwoYmI9ITAsZWIoKSl9LHIuZnguc3RvcD1mdW5jdGlvbigpe2JiPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGxiLG1iPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9sYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgci5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1yLmZpbmQuYXR0cihhLGIpLFxubnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFvLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJkIoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9YiYmYi5tYXRjaChMKTtpZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxsYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1tYltiXXx8ci5maW5kLmF0dHI7bWJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPW1iW2ddLG1iW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsbWJbZ109ZiksZX19KTt2YXIgbmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxvYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6bmIudGVzdChhLm5vZGVOYW1lKXx8b2IudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gcGIoYSl7dmFyIGI9YS5tYXRjaChMKXx8W107cmV0dXJuIGIuam9pbihcIiBcIil9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXIuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpyLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxxYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1yKHRoaXMpLGY9YS5tYXRjaChMKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPXFiKHRoaXMpLGImJlcuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpXLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK3BiKHFiKGMpKStcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgcmI9L1xcci9nO3IuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1yLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMscih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOkFycmF5LmlzQXJyYXkoZSkmJihlPXIubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1yLnZhbEhvb2tzW3RoaXMudHlwZV18fHIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9ci52YWxIb29rc1tlLnR5cGVdfHxyLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLHIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6cGIoci50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPWEub3B0aW9ucyxmPWEuc2VsZWN0ZWRJbmRleCxnPVwic2VsZWN0LW9uZVwiPT09YS50eXBlLGg9Zz9udWxsOltdLGk9Zz9mKzE6ZS5sZW5ndGg7Zm9yKGQ9ZjwwP2k6Zz9mOjA7ZDxpO2QrKylpZihjPWVbZF0sKGMuc2VsZWN0ZWR8fGQ9PT1mKSYmIWMuZGlzYWJsZWQmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhQihjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9cihjKS52YWwoKSxnKXJldHVybiBiO2gucHVzaChiKX1yZXR1cm4gaH0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPXIubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1yLmluQXJyYXkoci52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksci5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3IudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEuY2hlY2tlZD1yLmluQXJyYXkocihhKS52YWwoKSxiKT4tMX19LG8uY2hlY2tPbnx8KHIudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHNiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztyLmV4dGVuZChyLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGssbSxuLG89W2V8fGRdLHA9bC5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9bC5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhc2IudGVzdChwK3IuZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+LTEmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxrPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW3IuZXhwYW5kb10/YjpuZXcgci5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOnIubWFrZUFycmF5KGMsW2JdKSxuPXIuZXZlbnQuc3BlY2lhbFtwXXx8e30sZnx8IW4udHJpZ2dlcnx8bi50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbi5ub0J1YmJsZSYmIXIuaXNXaW5kb3coZSkpe2ZvcihqPW4uZGVsZWdhdGVUeXBlfHxwLHNiLnRlc3QoaitwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZvLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1vW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpuLmJpbmRUeXBlfHxwLG09KFcuZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZXLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWsmJmhba10sbSYmbS5hcHBseSYmVShoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cCxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYykhPT0hMXx8IVUoZSl8fGsmJnIuaXNGdW5jdGlvbihlW3BdKSYmIXIuaXNXaW5kb3coZSkmJihpPWVba10saSYmKGVba109bnVsbCksci5ldmVudC50cmlnZ2VyZWQ9cCxlW3BdKCksci5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2tdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yLmV4dGVuZChuZXcgci5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtyLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLHIuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO2lmKGMpcmV0dXJuIHIuZXZlbnQudHJpZ2dlcihhLGIsYywhMCl9fSksci5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLHIuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxvLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsby5mb2N1c2lufHxyLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3IuZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxyLmV2ZW50LmZpeChhKSl9O3IuZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLFcuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKS0xO2U/Vy5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLnJlbW92ZShkLGIpKX19fSk7dmFyIHRiPWEubG9jYXRpb24sdWI9ci5ub3coKSx2Yj0vXFw/LztyLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ci5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihBcnJheS5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8d2IudGVzdChhKT9kKGEsZSk6QWIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilBYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKEFycmF5LmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhci5pc1BsYWluT2JqZWN0KGEpKXIuZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpQWIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIil9LHIuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gci5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/ci5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhcih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmemIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIXliLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFqYS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPXIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpBcnJheS5pc0FycmF5KGMpP3IubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBCYj0vJTIwL2csQ2I9LyMuKiQvLERiPS8oWz8mXSlfPVteJl0qLyxFYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEZiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEdiPS9eKD86R0VUfEhFQUQpJC8sSGI9L15cXC9cXC8vLEliPXt9LEpiPXt9LEtiPVwiKi9cIi5jb25jYXQoXCIqXCIpLExiPWQuY3JlYXRlRWxlbWVudChcImFcIik7TGIuaHJlZj10Yi5ocmVmO2Z1bmN0aW9uIE1iKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W107aWYoci5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUpiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsci5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gT2IoYSxiKXt2YXIgYyxkLGU9ci5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmci5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIFBiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9aWYoZilyZXR1cm4gZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdfWZ1bmN0aW9uIFFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19ci5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnRiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RmIudGVzdCh0Yi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOnIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsci5hamF4U2V0dGluZ3MpLGIpOk9iKHIuYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtLG4sbz1yLmFqYXhTZXR1cCh7fSxjKSxwPW8uY29udGV4dHx8byxxPW8uY29udGV4dCYmKHAubm9kZVR5cGV8fHAuanF1ZXJ5KT9yKHApOnIuZXZlbnQscz1yLkRlZmVycmVkKCksdD1yLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHU9by5zdGF0dXNDb2RlfHx7fSx2PXt9LHc9e30seD1cImNhbmNlbGVkXCIseT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGspe2lmKCFoKXtoPXt9O3doaWxlKGI9RWIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBrP2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1rJiYoYT13W2EudG9Mb3dlckNhc2UoKV09d1thLnRvTG93ZXJDYXNlKCldfHxhLHZbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09ayYmKG8ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKGspeS5hbHdheXMoYVt5LnN0YXR1c10pO2Vsc2UgZm9yKGIgaW4gYSl1W2JdPVt1W2JdLGFbYl1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx4O3JldHVybiBlJiZlLmFib3J0KGIpLEEoMCxiKSx0aGlzfX07aWYocy5wcm9taXNlKHkpLG8udXJsPSgoYnx8by51cmx8fHRiLmhyZWYpK1wiXCIpLnJlcGxhY2UoSGIsdGIucHJvdG9jb2wrXCIvL1wiKSxvLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8by5tZXRob2R8fG8udHlwZSxvLmRhdGFUeXBlcz0oby5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtcIlwiXSxudWxsPT1vLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1vLnVybCxqLmhyZWY9ai5ocmVmLG8uY3Jvc3NEb21haW49TGIucHJvdG9jb2wrXCIvL1wiK0xiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh6KXtvLmNyb3NzRG9tYWluPSEwfX1pZihvLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBvLmRhdGEmJihvLmRhdGE9ci5wYXJhbShvLmRhdGEsby50cmFkaXRpb25hbCkpLE5iKEliLG8sYyx5KSxrKXJldHVybiB5O2w9ci5ldmVudCYmby5nbG9iYWwsbCYmMD09PXIuYWN0aXZlKysmJnIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxvLnR5cGU9by50eXBlLnRvVXBwZXJDYXNlKCksby5oYXNDb250ZW50PSFHYi50ZXN0KG8udHlwZSksZj1vLnVybC5yZXBsYWNlKENiLFwiXCIpLG8uaGFzQ29udGVudD9vLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJjA9PT0oby5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKG8uZGF0YT1vLmRhdGEucmVwbGFjZShCYixcIitcIikpOihuPW8udXJsLnNsaWNlKGYubGVuZ3RoKSxvLmRhdGEmJihmKz0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrby5kYXRhLGRlbGV0ZSBvLmRhdGEpLG8uY2FjaGU9PT0hMSYmKGY9Zi5yZXBsYWNlKERiLFwiJDFcIiksbj0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ViKysgK24pLG8udXJsPWYrbiksby5pZk1vZGlmaWVkJiYoci5sYXN0TW9kaWZpZWRbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsci5sYXN0TW9kaWZpZWRbZl0pLHIuZXRhZ1tmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHIuZXRhZ1tmXSkpLChvLmRhdGEmJm8uaGFzQ29udGVudCYmby5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsby5jb250ZW50VHlwZSkseS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsby5kYXRhVHlwZXNbMF0mJm8uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0/by5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1vLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOm8uYWNjZXB0c1tcIipcIl0pO2ZvcihtIGluIG8uaGVhZGVycyl5LnNldFJlcXVlc3RIZWFkZXIobSxvLmhlYWRlcnNbbV0pO2lmKG8uYmVmb3JlU2VuZCYmKG8uYmVmb3JlU2VuZC5jYWxsKHAseSxvKT09PSExfHxrKSlyZXR1cm4geS5hYm9ydCgpO2lmKHg9XCJhYm9ydFwiLHQuYWRkKG8uY29tcGxldGUpLHkuZG9uZShvLnN1Y2Nlc3MpLHkuZmFpbChvLmVycm9yKSxlPU5iKEpiLG8sYyx5KSl7aWYoeS5yZWFkeVN0YXRlPTEsbCYmcS50cmlnZ2VyKFwiYWpheFNlbmRcIixbeSxvXSksaylyZXR1cm4geTtvLmFzeW5jJiZvLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5hYm9ydChcInRpbWVvdXRcIil9LG8udGltZW91dCkpO3RyeXtrPSExLGUuc2VuZCh2LEEpfWNhdGNoKHope2lmKGspdGhyb3cgejtBKC0xLHopfX1lbHNlIEEoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gQShiLGMsZCxoKXt2YXIgaixtLG4sdix3LHg9YztrfHwoaz0hMCxpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseS5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJmI8MzAwfHwzMDQ9PT1iLGQmJih2PVBiKG8seSxkKSksdj1RYihvLHYseSxqKSxqPyhvLmlmTW9kaWZpZWQmJih3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihyLmxhc3RNb2RpZmllZFtmXT13KSx3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihyLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09by50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3g9XCJub3Rtb2RpZmllZFwiOih4PXYuc3RhdGUsbT12LmRhdGEsbj12LmVycm9yLGo9IW4pKToobj14LCFiJiZ4fHwoeD1cImVycm9yXCIsYjwwJiYoYj0wKSkpLHkuc3RhdHVzPWIseS5zdGF0dXNUZXh0PShjfHx4KStcIlwiLGo/cy5yZXNvbHZlV2l0aChwLFttLHgseV0pOnMucmVqZWN0V2l0aChwLFt5LHgsbl0pLHkuc3RhdHVzQ29kZSh1KSx1PXZvaWQgMCxsJiZxLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeSxvLGo/bTpuXSksdC5maXJlV2l0aChwLFt5LHhdKSxsJiYocS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3ksb10pLC0tci5hY3RpdmV8fHIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHl9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiByLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiByLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLHIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtyW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiByLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxyLmFqYXgoci5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LHIuaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLHIuX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sci5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIHRoaXNbMF0mJihyLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzWzBdKSksYj1yKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1yKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPXIuaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJlbnQoYSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7cih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxyLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIuZXhwci5wc2V1ZG9zLnZpc2libGUoYSl9LHIuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuISEoYS5vZmZzZXRXaWR0aHx8YS5vZmZzZXRIZWlnaHR8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxyLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBSYj17MDoyMDAsMTIyMzoyMDR9LFNiPXIuYWpheFNldHRpbmdzLnhocigpO28uY29ycz0hIVNiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gU2Isby5hamF4PVNiPSEhU2Isci5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoby5jb3JzfHxTYiYmIWIuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKFJiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fSksci5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEpe2EuY3Jvc3NEb21haW4mJihhLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxyLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gci5nbG9iYWxFdmFsKGEpLGF9fX0pLHIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksci5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9cihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBUYj1bXSxVYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPVRiLnBvcCgpfHxyLmV4cGFuZG8rXCJfXCIrdWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLHIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoVWIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlViLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO2lmKGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdKXJldHVybiBlPWIuanNvbnBDYWxsYmFjaz1yLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShVYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh2Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxyLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP3IoYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssVGIucHVzaChlKSksZyYmci5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwifSksby5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksci5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKTt2YXIgZSxmLGc7cmV0dXJuIGJ8fChvLmNyZWF0ZUhUTUxEb2N1bWVudD8oYj1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxlPWIuY3JlYXRlRWxlbWVudChcImJhc2VcIiksZS5ocmVmPWQubG9jYXRpb24uaHJlZixiLmhlYWQuYXBwZW5kQ2hpbGQoZSkpOmI9ZCksZj1DLmV4ZWMoYSksZz0hYyYmW10sZj9bYi5jcmVhdGVFbGVtZW50KGZbMV0pXTooZj1xYShbYV0sYixnKSxnJiZnLmxlbmd0aCYmcihnKS5yZW1vdmUoKSxyLm1lcmdlKFtdLGYuY2hpbGROb2RlcykpfSxyLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1wYihhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH0sci5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1yLmNzcyhhLFwicG9zaXRpb25cIiksbD1yKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9ci5jc3MoYSxcInRvcFwiKSxpPXIuY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksci5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLHIuZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sci5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQsZSxmPXRoaXNbMF07aWYoZilyZXR1cm4gZi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZD1mLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Zi5vd25lckRvY3VtZW50LGM9Yi5kb2N1bWVudEVsZW1lbnQsZT1iLmRlZmF1bHRWaWV3LHt0b3A6ZC50b3ArZS5wYWdlWU9mZnNldC1jLmNsaWVudFRvcCxsZWZ0OmQubGVmdCtlLnBhZ2VYT2Zmc2V0LWMuY2xpZW50TGVmdH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09ci5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxCKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkPXt0b3A6ZC50b3Arci5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGxlZnQ6ZC5sZWZ0K3IuY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCl9KSx7dG9wOmIudG9wLWQudG9wLXIuY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LXIuY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1yLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8cmF9KX19KSxyLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtyLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGEpP2Y9YTo5PT09YS5ub2RlVHlwZSYmKGY9YS5kZWZhdWx0Vmlldyksdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPVBhKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9T2EoYSxiKSxNYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLmhvbGRSZWFkeT1mdW5jdGlvbihhKXthP3IucmVhZHlXYWl0Kys6ci5yZWFkeSghMCl9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5LHIucGFyc2VKU09OPUpTT04ucGFyc2Usci5ub2RlTmFtZT1CLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBWYj1hLmpRdWVyeSxXYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1XYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VmIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pO1xuIiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4hZnVuY3Rpb24gKCQpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgRk9VTkRBVElPTl9WRVJTSU9OID0gJzYuMy4xJztcblxuICAvLyBHbG9iYWwgRm91bmRhdGlvbiBvYmplY3RcbiAgLy8gVGhpcyBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93LCBvciB1c2VkIGFzIGEgbW9kdWxlIGZvciBBTUQvQnJvd3NlcmlmeVxuICB2YXIgRm91bmRhdGlvbiA9IHtcbiAgICB2ZXJzaW9uOiBGT1VOREFUSU9OX1ZFUlNJT04sXG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgaW5pdGlhbGl6ZWQgcGx1Z2lucy5cbiAgICAgKi9cbiAgICBfcGx1Z2luczoge30sXG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgZ2VuZXJhdGVkIHVuaXF1ZSBpZHMgZm9yIHBsdWdpbiBpbnN0YW5jZXNcbiAgICAgKi9cbiAgICBfdXVpZHM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gZm9yIFJUTCBzdXBwb3J0XG4gICAgICovXG4gICAgcnRsOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJCgnaHRtbCcpLmF0dHIoJ2RpcicpID09PSAncnRsJztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBGb3VuZGF0aW9uIHBsdWdpbiwgYWRkaW5nIGl0IHRvIHRoZSBgRm91bmRhdGlvbmAgbmFtZXNwYWNlIGFuZCB0aGUgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUgd2hlbiByZWZsb3dpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGx1Z2luLlxuICAgICAqL1xuICAgIHBsdWdpbjogZnVuY3Rpb24gKHBsdWdpbiwgbmFtZSkge1xuICAgICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBhZGRpbmcgdG8gZ2xvYmFsIEZvdW5kYXRpb24gb2JqZWN0XG4gICAgICAvLyBFeGFtcGxlczogRm91bmRhdGlvbi5SZXZlYWwsIEZvdW5kYXRpb24uT2ZmQ2FudmFzXG4gICAgICB2YXIgY2xhc3NOYW1lID0gbmFtZSB8fCBmdW5jdGlvbk5hbWUocGx1Z2luKTtcbiAgICAgIC8vIE9iamVjdCBrZXkgdG8gdXNlIHdoZW4gc3RvcmluZyB0aGUgcGx1Z2luLCBhbHNvIHVzZWQgdG8gY3JlYXRlIHRoZSBpZGVudGlmeWluZyBkYXRhIGF0dHJpYnV0ZSBmb3IgdGhlIHBsdWdpblxuICAgICAgLy8gRXhhbXBsZXM6IGRhdGEtcmV2ZWFsLCBkYXRhLW9mZi1jYW52YXNcbiAgICAgIHZhciBhdHRyTmFtZSA9IGh5cGhlbmF0ZShjbGFzc05hbWUpO1xuXG4gICAgICAvLyBBZGQgdG8gdGhlIEZvdW5kYXRpb24gb2JqZWN0IGFuZCB0aGUgcGx1Z2lucyBsaXN0IChmb3IgcmVmbG93aW5nKVxuICAgICAgdGhpcy5fcGx1Z2luc1thdHRyTmFtZV0gPSB0aGlzW2NsYXNzTmFtZV0gPSBwbHVnaW47XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBQb3B1bGF0ZXMgdGhlIF91dWlkcyBhcnJheSB3aXRoIHBvaW50ZXJzIHRvIGVhY2ggaW5kaXZpZHVhbCBwbHVnaW4gaW5zdGFuY2UuXG4gICAgICogQWRkcyB0aGUgYHpmUGx1Z2luYCBkYXRhLWF0dHJpYnV0ZSB0byBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZWQgcGx1Z2lucyB0byBhbGxvdyB1c2Ugb2YgJChzZWxlY3RvcikuZm91bmRhdGlvbihtZXRob2QpIGNhbGxzLlxuICAgICAqIEFsc28gZmlyZXMgdGhlIGluaXRpYWxpemF0aW9uIGV2ZW50IGZvciBlYWNoIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBldGl0aXZlIGNvZGUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIGFuIGluc3RhbmNlIG9mIGEgcGx1Z2luLCB1c3VhbGx5IGB0aGlzYCBpbiBjb250ZXh0LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHBsdWdpbiwgcGFzc2VkIGFzIGEgY2FtZWxDYXNlZCBzdHJpbmcuXG4gICAgICogQGZpcmVzIFBsdWdpbiNpbml0XG4gICAgICovXG4gICAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uIChwbHVnaW4sIG5hbWUpIHtcbiAgICAgIHZhciBwbHVnaW5OYW1lID0gbmFtZSA/IGh5cGhlbmF0ZShuYW1lKSA6IGZ1bmN0aW9uTmFtZShwbHVnaW4uY29uc3RydWN0b3IpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwbHVnaW4udXVpZCA9IHRoaXMuR2V0WW9EaWdpdHMoNiwgcGx1Z2luTmFtZSk7XG5cbiAgICAgIGlmICghcGx1Z2luLiRlbGVtZW50LmF0dHIoJ2RhdGEtJyArIHBsdWdpbk5hbWUpKSB7XG4gICAgICAgIHBsdWdpbi4kZWxlbWVudC5hdHRyKCdkYXRhLScgKyBwbHVnaW5OYW1lLCBwbHVnaW4udXVpZCk7XG4gICAgICB9XG4gICAgICBpZiAoIXBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpKSB7XG4gICAgICAgIHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHBsdWdpbik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgaW5pdGlhbGl6ZWQuXG4gICAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgICAqL1xuICAgICAgcGx1Z2luLiRlbGVtZW50LnRyaWdnZXIoJ2luaXQuemYuJyArIHBsdWdpbk5hbWUpO1xuXG4gICAgICB0aGlzLl91dWlkcy5wdXNoKHBsdWdpbi51dWlkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogUmVtb3ZlcyB0aGUgcGx1Z2lucyB1dWlkIGZyb20gdGhlIF91dWlkcyBhcnJheS5cbiAgICAgKiBSZW1vdmVzIHRoZSB6ZlBsdWdpbiBkYXRhIGF0dHJpYnV0ZSwgYXMgd2VsbCBhcyB0aGUgZGF0YS1wbHVnaW4tbmFtZSBhdHRyaWJ1dGUuXG4gICAgICogQWxzbyBmaXJlcyB0aGUgZGVzdHJveWVkIGV2ZW50IGZvciB0aGUgcGx1Z2luLCBjb25zb2xpZGF0aW5nIHJlcGV0aXRpdmUgY29kZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gYW4gaW5zdGFuY2Ugb2YgYSBwbHVnaW4sIHVzdWFsbHkgYHRoaXNgIGluIGNvbnRleHQuXG4gICAgICogQGZpcmVzIFBsdWdpbiNkZXN0cm95ZWRcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICB2YXIgcGx1Z2luTmFtZSA9IGh5cGhlbmF0ZShmdW5jdGlvbk5hbWUocGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykuY29uc3RydWN0b3IpKTtcblxuICAgICAgdGhpcy5fdXVpZHMuc3BsaWNlKHRoaXMuX3V1aWRzLmluZGV4T2YocGx1Z2luLnV1aWQpLCAxKTtcbiAgICAgIHBsdWdpbi4kZWxlbWVudC5yZW1vdmVBdHRyKCdkYXRhLScgKyBwbHVnaW5OYW1lKS5yZW1vdmVEYXRhKCd6ZlBsdWdpbicpXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gICAgICAgKiBAZXZlbnQgUGx1Z2luI2Rlc3Ryb3llZFxuICAgICAgICovXG4gICAgICAudHJpZ2dlcignZGVzdHJveWVkLnpmLicgKyBwbHVnaW5OYW1lKTtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gcGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbltwcm9wXSA9IG51bGw7IC8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQ2F1c2VzIG9uZSBvciBtb3JlIGFjdGl2ZSBwbHVnaW5zIHRvIHJlLWluaXRpYWxpemUsIHJlc2V0dGluZyBldmVudCBsaXN0ZW5lcnMsIHJlY2FsY3VsYXRpbmcgcG9zaXRpb25zLCBldGMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBsdWdpbnMgLSBvcHRpb25hbCBzdHJpbmcgb2YgYW4gaW5kaXZpZHVhbCBwbHVnaW4ga2V5LCBhdHRhaW5lZCBieSBjYWxsaW5nIGAkKGVsZW1lbnQpLmRhdGEoJ3BsdWdpbk5hbWUnKWAsIG9yIHN0cmluZyBvZiBhIHBsdWdpbiBjbGFzcyBpLmUuIGAnZHJvcGRvd24nYFxuICAgICAqIEBkZWZhdWx0IElmIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmVmbG93IGFsbCBjdXJyZW50bHkgYWN0aXZlIHBsdWdpbnMuXG4gICAgICovXG4gICAgcmVJbml0OiBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgICAgdmFyIGlzSlEgPSBwbHVnaW5zIGluc3RhbmNlb2YgJDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0pRKSB7XG4gICAgICAgICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnemZQbHVnaW4nKS5faW5pdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHBsdWdpbnMsXG4gICAgICAgICAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgICAgICAgICAgZm5zID0ge1xuICAgICAgICAgICAgJ29iamVjdCc6IGZ1bmN0aW9uIChwbGdzKSB7XG4gICAgICAgICAgICAgIHBsZ3MuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHAgPSBoeXBoZW5hdGUocCk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtJyArIHAgKyAnXScpLmZvdW5kYXRpb24oJ19pbml0Jyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzdHJpbmcnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBsdWdpbnMgPSBoeXBoZW5hdGUocGx1Z2lucyk7XG4gICAgICAgICAgICAgICQoJ1tkYXRhLScgKyBwbHVnaW5zICsgJ10nKS5mb3VuZGF0aW9uKCdfaW5pdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd1bmRlZmluZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRoaXNbJ29iamVjdCddKE9iamVjdC5rZXlzKF90aGlzLl9wbHVnaW5zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbnNbdHlwZV0ocGx1Z2lucyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICByZXR1cm4gcGx1Z2lucztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhIHJhbmRvbSBiYXNlLTM2IHVpZCB3aXRoIG5hbWVzcGFjaW5nXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIG51bWJlciBvZiByYW5kb20gYmFzZS0zNiBkaWdpdHMgZGVzaXJlZC4gSW5jcmVhc2UgZm9yIG1vcmUgcmFuZG9tIHN0cmluZ3MuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIG5hbWUgb2YgcGx1Z2luIHRvIGJlIGluY29ycG9yYXRlZCBpbiB1aWQsIG9wdGlvbmFsLlxuICAgICAqIEBkZWZhdWx0IHtTdHJpbmd9ICcnIC0gaWYgbm8gcGx1Z2luIG5hbWUgaXMgcHJvdmlkZWQsIG5vdGhpbmcgaXMgYXBwZW5kZWQgdG8gdGhlIHVpZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIHVuaXF1ZSBpZFxuICAgICAqL1xuICAgIEdldFlvRGlnaXRzOiBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lc3BhY2UpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8fCA2O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5wb3coMzYsIGxlbmd0aCArIDEpIC0gTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCBsZW5ndGgpKS50b1N0cmluZygzNikuc2xpY2UoMSkgKyAobmFtZXNwYWNlID8gJy0nICsgbmFtZXNwYWNlIDogJycpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBwbHVnaW5zIG9uIGFueSBlbGVtZW50cyB3aXRoaW4gYGVsZW1gIChhbmQgYGVsZW1gIGl0c2VsZikgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyB0aGUgZWxlbWVudCB0byBjaGVjayBpbnNpZGUuIEFsc28gY2hlY2tzIHRoZSBlbGVtZW50IGl0c2VsZiwgdW5sZXNzIGl0J3MgdGhlIGBkb2N1bWVudGAgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwbHVnaW5zIC0gQSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZS4gTGVhdmUgdGhpcyBvdXQgdG8gaW5pdGlhbGl6ZSBldmVyeXRoaW5nLlxuICAgICAqL1xuICAgIHJlZmxvdzogZnVuY3Rpb24gKGVsZW0sIHBsdWdpbnMpIHtcblxuICAgICAgLy8gSWYgcGx1Z2lucyBpcyB1bmRlZmluZWQsIGp1c3QgZ3JhYiBldmVyeXRoaW5nXG4gICAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBsdWdpbnMgPSBPYmplY3Qua2V5cyh0aGlzLl9wbHVnaW5zKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHBsdWdpbnMgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXkgd2l0aCBvbmUgaXRlbVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcGx1Z2lucyA9IFtwbHVnaW5zXTtcbiAgICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBwbHVnaW5cbiAgICAgICQuZWFjaChwbHVnaW5zLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGx1Z2luXG4gICAgICAgIHZhciBwbHVnaW4gPSBfdGhpcy5fcGx1Z2luc1tuYW1lXTtcblxuICAgICAgICAvLyBMb2NhbGl6ZSB0aGUgc2VhcmNoIHRvIGFsbCBlbGVtZW50cyBpbnNpZGUgZWxlbSwgYXMgd2VsbCBhcyBlbGVtIGl0c2VsZiwgdW5sZXNzIGVsZW0gPT09IGRvY3VtZW50XG4gICAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSkuZmluZCgnW2RhdGEtJyArIG5hbWUgKyAnXScpLmFkZEJhY2soJ1tkYXRhLScgKyBuYW1lICsgJ10nKTtcblxuICAgICAgICAvLyBGb3IgZWFjaCBwbHVnaW4gZm91bmQsIGluaXRpYWxpemUgaXRcbiAgICAgICAgJGVsZW0uZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICRlbCA9ICQodGhpcyksXG4gICAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgICAvLyBEb24ndCBkb3VibGUtZGlwIG9uIHBsdWdpbnNcbiAgICAgICAgICBpZiAoJGVsLmRhdGEoJ3pmUGx1Z2luJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyaWVkIHRvIGluaXRpYWxpemUgXCIgKyBuYW1lICsgXCIgb24gYW4gZWxlbWVudCB0aGF0IGFscmVhZHkgaGFzIGEgRm91bmRhdGlvbiBwbHVnaW4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkZWwuYXR0cignZGF0YS1vcHRpb25zJykpIHtcbiAgICAgICAgICAgIHZhciB0aGluZyA9ICRlbC5hdHRyKCdkYXRhLW9wdGlvbnMnKS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgICAgICAgdmFyIG9wdCA9IGUuc3BsaXQoJzonKS5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRyaW0oKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChvcHRbMF0pIG9wdHNbb3B0WzBdXSA9IHBhcnNlVmFsdWUob3B0WzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgJGVsLmRhdGEoJ3pmUGx1Z2luJywgbmV3IHBsdWdpbigkKHRoaXMpLCBvcHRzKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Rm5OYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgdHJhbnNpdGlvbmVuZDogZnVuY3Rpb24gKCRlbGVtKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgJ01velRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICdPVHJhbnNpdGlvbic6ICdvdHJhbnNpdGlvbmVuZCdcbiAgICAgIH07XG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIGVuZDtcblxuICAgICAgZm9yICh2YXIgdCBpbiB0cmFuc2l0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0uc3R5bGVbdF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZW5kID0gdHJhbnNpdGlvbnNbdF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgcmV0dXJuIGVuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRlbGVtLnRyaWdnZXJIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgWyRlbGVtXSk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBGb3VuZGF0aW9uLnV0aWwgPSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZm9yIGFwcGx5aW5nIGEgZGVib3VuY2UgZWZmZWN0IHRvIGEgZnVuY3Rpb24gY2FsbC5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGF0IGVuZCBvZiB0aW1lb3V0LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSAtIFRpbWUgaW4gbXMgdG8gZGVsYXkgdGhlIGNhbGwgb2YgYGZ1bmNgLlxuICAgICAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gICAgICovXG4gICAgdGhyb3R0bGU6IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgICAgdmFyIHRpbWVyID0gbnVsbDtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIC8vIFRPRE86IGNvbnNpZGVyIG5vdCBtYWtpbmcgdGhpcyBhIGpRdWVyeSBmdW5jdGlvblxuICAvLyBUT0RPOiBuZWVkIHdheSB0byByZWZsb3cgdnMuIHJlLWluaXRpYWxpemVcbiAgLyoqXG4gICAqIFRoZSBGb3VuZGF0aW9uIGpRdWVyeSBtZXRob2QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBtZXRob2QgLSBBbiBhY3Rpb24gdG8gcGVyZm9ybSBvbiB0aGUgY3VycmVudCBqUXVlcnkgb2JqZWN0LlxuICAgKi9cbiAgdmFyIGZvdW5kYXRpb24gPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgbWV0aG9kLFxuICAgICAgICAkbWV0YSA9ICQoJ21ldGEuZm91bmRhdGlvbi1tcScpLFxuICAgICAgICAkbm9KUyA9ICQoJy5uby1qcycpO1xuXG4gICAgaWYgKCEkbWV0YS5sZW5ndGgpIHtcbiAgICAgICQoJzxtZXRhIGNsYXNzPVwiZm91bmRhdGlvbi1tcVwiPicpLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xuICAgIH1cbiAgICBpZiAoJG5vSlMubGVuZ3RoKSB7XG4gICAgICAkbm9KUy5yZW1vdmVDbGFzcygnbm8tanMnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vbmVlZHMgdG8gaW5pdGlhbGl6ZSB0aGUgRm91bmRhdGlvbiBvYmplY3QsIG9yIGFuIGluZGl2aWR1YWwgcGx1Z2luLlxuICAgICAgRm91bmRhdGlvbi5NZWRpYVF1ZXJ5Ll9pbml0KCk7XG4gICAgICBGb3VuZGF0aW9uLnJlZmxvdyh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvL2FuIGluZGl2aWR1YWwgbWV0aG9kIHRvIGludm9rZSBvbiBhIHBsdWdpbiBvciBncm91cCBvZiBwbHVnaW5zXG4gICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7IC8vY29sbGVjdCBhbGwgdGhlIGFyZ3VtZW50cywgaWYgbmVjZXNzYXJ5XG4gICAgICB2YXIgcGx1Z0NsYXNzID0gdGhpcy5kYXRhKCd6ZlBsdWdpbicpOyAvL2RldGVybWluZSB0aGUgY2xhc3Mgb2YgcGx1Z2luXG5cbiAgICAgIGlmIChwbHVnQ2xhc3MgIT09IHVuZGVmaW5lZCAmJiBwbHVnQ2xhc3NbbWV0aG9kXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vbWFrZSBzdXJlIGJvdGggdGhlIGNsYXNzIGFuZCBtZXRob2QgZXhpc3RcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy9pZiB0aGVyZSdzIG9ubHkgb25lLCBjYWxsIGl0IGRpcmVjdGx5LlxuICAgICAgICAgIHBsdWdDbGFzc1ttZXRob2RdLmFwcGx5KHBsdWdDbGFzcywgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgLy9vdGhlcndpc2UgbG9vcCB0aHJvdWdoIHRoZSBqUXVlcnkgY29sbGVjdGlvbiBhbmQgaW52b2tlIHRoZSBtZXRob2Qgb24gZWFjaFxuICAgICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkoJChlbCkuZGF0YSgnemZQbHVnaW4nKSwgYXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vZXJyb3IgZm9yIG5vIGNsYXNzIG9yIG5vIG1ldGhvZFxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJXZSdyZSBzb3JyeSwgJ1wiICsgbWV0aG9kICsgXCInIGlzIG5vdCBhbiBhdmFpbGFibGUgbWV0aG9kIGZvciBcIiArIChwbHVnQ2xhc3MgPyBmdW5jdGlvbk5hbWUocGx1Z0NsYXNzKSA6ICd0aGlzIGVsZW1lbnQnKSArICcuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vZXJyb3IgZm9yIGludmFsaWQgYXJndW1lbnQgdHlwZVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignV2VcXCdyZSBzb3JyeSwgJyArIHR5cGUgKyAnIGlzIG5vdCBhIHZhbGlkIHBhcmFtZXRlci4gWW91IG11c3QgdXNlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWV0aG9kIHlvdSB3aXNoIHRvIGludm9rZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgd2luZG93LkZvdW5kYXRpb24gPSBGb3VuZGF0aW9uO1xuICAkLmZuLmZvdW5kYXRpb24gPSBmb3VuZGF0aW9uO1xuXG4gIC8vIFBvbHlmaWxsIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIURhdGUubm93IHx8ICF3aW5kb3cuRGF0ZS5ub3cpIHdpbmRvdy5EYXRlLm5vdyA9IERhdGUubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgICB2YXIgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgICAgdmFyIHZwID0gdmVuZG9yc1tpXTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdnAgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuICAgIGlmICgvaVAoYWR8aG9uZXxvZCkuKk9TIDYvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XG4gICAgICAgIH0sIG5leHRUaW1lIC0gbm93KTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBvbHlmaWxsIGZvciBwZXJmb3JtYW5jZS5ub3csIHJlcXVpcmVkIGJ5IHJBRlxuICAgICAqL1xuICAgIGlmICghd2luZG93LnBlcmZvcm1hbmNlIHx8ICF3aW5kb3cucGVyZm9ybWFuY2Uubm93KSB7XG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UgPSB7XG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xuICBpZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAob1RoaXMpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBjbG9zZXN0IHRoaW5nIHBvc3NpYmxlIHRvIHRoZSBFQ01BU2NyaXB0IDVcbiAgICAgICAgLy8gaW50ZXJuYWwgSXNDYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZScpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYUFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgIGZUb0JpbmQgPSB0aGlzLFxuICAgICAgICAgIGZOT1AgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICBmQm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmVG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QID8gdGhpcyA6IG9UaGlzLCBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMucHJvdG90eXBlKSB7XG4gICAgICAgIC8vIG5hdGl2ZSBmdW5jdGlvbnMgZG9uJ3QgaGF2ZSBhIHByb3RvdHlwZVxuICAgICAgICBmTk9QLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuICAgICAgfVxuICAgICAgZkJvdW5kLnByb3RvdHlwZSA9IG5ldyBmTk9QKCk7XG5cbiAgICAgIHJldHVybiBmQm91bmQ7XG4gICAgfTtcbiAgfVxuICAvLyBQb2x5ZmlsbCB0byBnZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiBpbiBJRTlcbiAgZnVuY3Rpb24gZnVuY3Rpb25OYW1lKGZuKSB7XG4gICAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICB2YXIgcmVzdWx0cyA9IGZ1bmNOYW1lUmVnZXguZXhlYyhmbi50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSA/IHJlc3VsdHNbMV0udHJpbSgpIDogXCJcIjtcbiAgICB9IGVsc2UgaWYgKGZuLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm4uY29uc3RydWN0b3IubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwYXJzZVZhbHVlKHN0cikge1xuICAgIGlmICgndHJ1ZScgPT09IHN0cikgcmV0dXJuIHRydWU7ZWxzZSBpZiAoJ2ZhbHNlJyA9PT0gc3RyKSByZXR1cm4gZmFsc2U7ZWxzZSBpZiAoIWlzTmFOKHN0ciAqIDEpKSByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgLy8gQ29udmVydCBQYXNjYWxDYXNlIHRvIGtlYmFiLWNhc2VcbiAgLy8gVGhhbmsgeW91OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84OTU1NTgwXG4gIGZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn0oalF1ZXJ5KTsiLCIvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuIWZ1bmN0aW9uICgkKSB7XG5cbiAgLyoqXG4gICAqIE9mZkNhbnZhcyBtb2R1bGUuXG4gICAqIEBtb2R1bGUgZm91bmRhdGlvbi5vZmZjYW52YXNcbiAgICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICAgKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcbiAgICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICAgKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1vdGlvblxuICAgKi9cblxuICB2YXIgT2ZmQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gb2ZmLWNhbnZhcyB3cmFwcGVyLlxuICAgICAqIEBjbGFzc1xuICAgICAqIEBmaXJlcyBPZmZDYW52YXMjaW5pdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBpbml0aWFsaXplLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBPZmZDYW52YXMoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9mZkNhbnZhcyk7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE9mZkNhbnZhcy5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgICAgdGhpcy4kbGFzdFRyaWdnZXIgPSAkKCk7XG4gICAgICB0aGlzLiR0cmlnZ2VycyA9ICQoKTtcblxuICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgdGhpcy5fZXZlbnRzKCk7XG5cbiAgICAgIEZvdW5kYXRpb24ucmVnaXN0ZXJQbHVnaW4odGhpcywgJ09mZkNhbnZhcycpO1xuICAgICAgRm91bmRhdGlvbi5LZXlib2FyZC5yZWdpc3RlcignT2ZmQ2FudmFzJywge1xuICAgICAgICAnRVNDQVBFJzogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG9mZi1jYW52YXMgd3JhcHBlciBieSBhZGRpbmcgdGhlIGV4aXQgb3ZlcmxheSAoaWYgbmVlZGVkKS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoT2ZmQ2FudmFzLCBbe1xuICAgICAga2V5OiAnX2luaXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtdHJhbnNpdGlvbi0nICsgdGhpcy5vcHRpb25zLnRyYW5zaXRpb24pO1xuXG4gICAgICAgIC8vIEZpbmQgdHJpZ2dlcnMgdGhhdCBhZmZlY3QgdGhpcyBlbGVtZW50IGFuZCBhZGQgYXJpYS1leHBhbmRlZCB0byB0aGVtXG4gICAgICAgIHRoaXMuJHRyaWdnZXJzID0gJChkb2N1bWVudCkuZmluZCgnW2RhdGEtb3Blbj1cIicgKyBpZCArICdcIl0sIFtkYXRhLWNsb3NlPVwiJyArIGlkICsgJ1wiXSwgW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKS5hdHRyKCdhcmlhLWNvbnRyb2xzJywgaWQpO1xuXG4gICAgICAgIC8vIEFkZCBhbiBvdmVybGF5IG92ZXIgdGhlIGNvbnRlbnQgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHZhciBvdmVybGF5UG9zaXRpb24gPSAkKHRoaXMuJGVsZW1lbnQpLmNzcyhcInBvc2l0aW9uXCIpID09PSAnZml4ZWQnID8gJ2lzLW92ZXJsYXktZml4ZWQnIDogJ2lzLW92ZXJsYXktYWJzb2x1dGUnO1xuICAgICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdqcy1vZmYtY2FudmFzLW92ZXJsYXkgJyArIG92ZXJsYXlQb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQob3ZlcmxheSk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlQb3NpdGlvbiA9PT0gJ2lzLW92ZXJsYXktZml4ZWQnKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJG92ZXJsYXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykuYXBwZW5kKHRoaXMuJG92ZXJsYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc1JldmVhbGVkID0gdGhpcy5vcHRpb25zLmlzUmV2ZWFsZWQgfHwgbmV3IFJlZ0V4cCh0aGlzLm9wdGlvbnMucmV2ZWFsQ2xhc3MsICdnJykudGVzdCh0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1JldmVhbGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnJldmVhbE9uID0gdGhpcy5vcHRpb25zLnJldmVhbE9uIHx8IHRoaXMuJGVsZW1lbnRbMF0uY2xhc3NOYW1lLm1hdGNoKC8ocmV2ZWFsLWZvci1tZWRpdW18cmV2ZWFsLWZvci1sYXJnZSkvZylbMF0uc3BsaXQoJy0nKVsyXTtcbiAgICAgICAgICB0aGlzLl9zZXRNUUNoZWNrZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoJCgnW2RhdGEtb2ZmLWNhbnZhc10nKVswXSkudHJhbnNpdGlvbkR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBvZmYtY2FudmFzIHdyYXBwZXIgYW5kIHRoZSBleGl0IG92ZXJsYXkuXG4gICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19ldmVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9ldmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYudHJpZ2dlciAuemYub2ZmY2FudmFzJykub24oe1xuICAgICAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICdrZXlkb3duLnpmLm9mZmNhbnZhcyc6IHRoaXMuX2hhbmRsZUtleWJvYXJkLmJpbmQodGhpcylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgJHRhcmdldCA9IHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA/IHRoaXMuJG92ZXJsYXkgOiAkKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJyk7XG4gICAgICAgICAgJHRhcmdldC5vbih7ICdjbGljay56Zi5vZmZjYW52YXMnOiB0aGlzLmNsb3NlLmJpbmQodGhpcykgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBcHBsaWVzIGV2ZW50IGxpc3RlbmVyIGZvciBlbGVtZW50cyB0aGF0IHdpbGwgcmV2ZWFsIGF0IGNlcnRhaW4gYnJlYWtwb2ludHMuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfc2V0TVFDaGVja2VyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0TVFDaGVja2VyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChGb3VuZGF0aW9uLk1lZGlhUXVlcnkuYXRMZWFzdChfdGhpcy5vcHRpb25zLnJldmVhbE9uKSkge1xuICAgICAgICAgICAgX3RoaXMucmV2ZWFsKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5yZXZlYWwoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkub25lKCdsb2FkLnpmLm9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoRm91bmRhdGlvbi5NZWRpYVF1ZXJ5LmF0TGVhc3QoX3RoaXMub3B0aW9ucy5yZXZlYWxPbikpIHtcbiAgICAgICAgICAgIF90aGlzLnJldmVhbCh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgdGhlIHJldmVhbGluZy9oaWRpbmcgdGhlIG9mZi1jYW52YXMgYXQgYnJlYWtwb2ludHMsIG5vdCB0aGUgc2FtZSBhcyBvcGVuLlxuICAgICAgICogQHBhcmFtIHtCb29sZWFufSBpc1JldmVhbGVkIC0gdHJ1ZSBpZiBlbGVtZW50IHNob3VsZCBiZSByZXZlYWxlZC5cbiAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZXZlYWwnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVhbChpc1JldmVhbGVkKSB7XG4gICAgICAgIHZhciAkY2xvc2VyID0gdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1jbG9zZV0nKTtcbiAgICAgICAgaWYgKGlzUmV2ZWFsZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5pc1JldmVhbGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ29wZW4uemYudHJpZ2dlciB0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgICAgICAgIGlmICgkY2xvc2VyLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNsb3Nlci5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNSZXZlYWxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQub24oe1xuICAgICAgICAgICAgJ29wZW4uemYudHJpZ2dlcic6IHRoaXMub3Blbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ3RvZ2dsZS56Zi50cmlnZ2VyJzogdGhpcy50b2dnbGUuYmluZCh0aGlzKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICgkY2xvc2VyLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNsb3Nlci5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RvcHMgc2Nyb2xsaW5nIG9mIHRoZSBib2R5IHdoZW4gb2ZmY2FudmFzIGlzIG9wZW4gb24gbW9iaWxlIFNhZmFyaSBhbmQgb3RoZXIgdHJvdWJsZXNvbWUgYnJvd3NlcnMuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfc3RvcFNjcm9sbGluZycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3N0b3BTY3JvbGxpbmcoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBUYWtlbiBhbmQgYWRhcHRlZCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY4ODk0NDcvcHJldmVudC1mdWxsLXBhZ2Utc2Nyb2xsaW5nLWlvc1xuICAgICAgLy8gT25seSByZWFsbHkgd29ya3MgZm9yIHksIG5vdCBzdXJlIGhvdyB0byBleHRlbmQgdG8geCBvciBpZiB3ZSBuZWVkIHRvLlxuXG4gICAgfSwge1xuICAgICAga2V5OiAnX3JlY29yZFNjcm9sbGFibGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWNvcmRTY3JvbGxhYmxlKGV2ZW50KSB7XG4gICAgICAgIHZhciBlbGVtID0gdGhpczsgLy8gY2FsbGVkIGZyb20gZXZlbnQgaGFuZGxlciBjb250ZXh0IHdpdGggdGhpcyBhcyBlbGVtXG5cbiAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSAoY29udGVudCBvdmVyZmxvd3MpLCB0aGVuLi4uXG4gICAgICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCAhPT0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgdG9wLCBzY3JvbGwgZG93biBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBib3R0b20sIHNjcm9sbCB1cCBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICBpZiAoZWxlbS5zY3JvbGxUb3AgPT09IGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsZW0uYWxsb3dVcCA9IGVsZW0uc2Nyb2xsVG9wID4gMDtcbiAgICAgICAgZWxlbS5hbGxvd0Rvd24gPSBlbGVtLnNjcm9sbFRvcCA8IGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGVsZW0ubGFzdFkgPSBldmVudC5vcmlnaW5hbEV2ZW50LnBhZ2VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19zdG9wU2Nyb2xsUHJvcGFnYXRpb24nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zdG9wU2Nyb2xsUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGVsZW0gPSB0aGlzOyAvLyBjYWxsZWQgZnJvbSBldmVudCBoYW5kbGVyIGNvbnRleHQgd2l0aCB0aGlzIGFzIGVsZW1cbiAgICAgICAgdmFyIHVwID0gZXZlbnQucGFnZVkgPCBlbGVtLmxhc3RZO1xuICAgICAgICB2YXIgZG93biA9ICF1cDtcbiAgICAgICAgZWxlbS5sYXN0WSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgICAgIGlmICh1cCAmJiBlbGVtLmFsbG93VXAgfHwgZG93biAmJiBlbGVtLmFsbG93RG93bikge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVucyB0aGUgb2ZmLWNhbnZhcyBtZW51LlxuICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXIuXG4gICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gdHJpZ2dlciAtIGVsZW1lbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIG9mZi1jYW52YXMgdG8gb3Blbi5cbiAgICAgICAqIEBmaXJlcyBPZmZDYW52YXMjb3BlbmVkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ29wZW4nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oZXZlbnQsIHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSB8fCB0aGlzLmlzUmV2ZWFsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICAgIHRoaXMuJGxhc3RUcmlnZ2VyID0gdHJpZ2dlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9yY2VUbyA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmZvcmNlVG8gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbnMuXG4gICAgICAgICAqIEBldmVudCBPZmZDYW52YXMjb3BlbmVkXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgIHRoaXMuJHRyaWdnZXJzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJykudHJpZ2dlcignb3BlbmVkLnpmLm9mZmNhbnZhcycpO1xuXG4gICAgICAgIC8vIElmIGBjb250ZW50U2Nyb2xsYCBpcyBzZXQgdG8gZmFsc2UsIGFkZCBjbGFzcyBhbmQgZGlzYWJsZSBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlcy5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50U2Nyb2xsID09PSBmYWxzZSkge1xuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtb2ZmLWNhbnZhcy1vcGVuJykub24oJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxpbmcpO1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9yZWNvcmRTY3JvbGxhYmxlKTtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsUHJvcGFnYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlICYmIHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2lzLWNsb3NhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQub25lKEZvdW5kYXRpb24udHJhbnNpdGlvbmVuZCh0aGlzLiRlbGVtZW50KSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZmluZCgnYSwgYnV0dG9uJykuZXEoMCkuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgRm91bmRhdGlvbi5LZXlib2FyZC50cmFwRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZXMgdGhlIG9mZi1jYW52YXMgbWVudS5cbiAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgLSBvcHRpb25hbCBjYiB0byBmaXJlIGFmdGVyIGNsb3N1cmUuXG4gICAgICAgKiBAZmlyZXMgT2ZmQ2FudmFzI2Nsb3NlZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjbG9zZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoY2IpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykgfHwgdGhpcy5pc1JldmVhbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbnMuXG4gICAgICAgICAqIEBldmVudCBPZmZDYW52YXMjY2xvc2VkXG4gICAgICAgICAqL1xuICAgICAgICAudHJpZ2dlcignY2xvc2VkLnpmLm9mZmNhbnZhcycpO1xuXG4gICAgICAgIC8vIElmIGBjb250ZW50U2Nyb2xsYCBpcyBzZXQgdG8gZmFsc2UsIHJlbW92ZSBjbGFzcyBhbmQgcmUtZW5hYmxlIHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzLlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRTY3JvbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy1vZmYtY2FudmFzLW9wZW4nKS5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxpbmcpO1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5fcmVjb3JkU2Nyb2xsYWJsZSk7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxQcm9wYWdhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaXMtY2xvc2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRyaWdnZXJzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRyYXBGb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIEZvdW5kYXRpb24uS2V5Ym9hcmQucmVsZWFzZUZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVG9nZ2xlcyB0aGUgb2ZmLWNhbnZhcyBtZW51IG9wZW4gb3IgY2xvc2VkLlxuICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXIuXG4gICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gdHJpZ2dlciAtIGVsZW1lbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIG9mZi1jYW52YXMgdG8gb3Blbi5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAndG9nZ2xlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoZXZlbnQsIHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoZXZlbnQsIHRyaWdnZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3BlbihldmVudCwgdHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIGtleWJvYXJkIGlucHV0IHdoZW4gZGV0ZWN0ZWQuIFdoZW4gdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCwgdGhlIG9mZi1jYW52YXMgbWVudSBjbG9zZXMsIGFuZCBmb2N1cyBpcyByZXN0b3JlZCB0byB0aGUgZWxlbWVudCB0aGF0IG9wZW5lZCB0aGUgbWVudS5cbiAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX2hhbmRsZUtleWJvYXJkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlS2V5Ym9hcmQoZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBGb3VuZGF0aW9uLktleWJvYXJkLmhhbmRsZUtleShlLCAnT2ZmQ2FudmFzJywge1xuICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIuY2xvc2UoKTtcbiAgICAgICAgICAgIF90aGlzMi4kbGFzdFRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc3Ryb3lzIHRoZSBvZmZjYW52YXMgcGx1Z2luLlxuICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5vZmZjYW52YXMnKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5vZmYoJy56Zi5vZmZjYW52YXMnKTtcblxuICAgICAgICBGb3VuZGF0aW9uLnVucmVnaXN0ZXJQbHVnaW4odGhpcyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE9mZkNhbnZhcztcbiAgfSgpO1xuXG4gIE9mZkNhbnZhcy5kZWZhdWx0cyA9IHtcbiAgICAvKipcbiAgICAgKiBBbGxvdyB0aGUgdXNlciB0byBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHRvIGNsb3NlIGl0LlxuICAgICAqIEBvcHRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBvdmVybGF5IG9uIHRvcCBvZiBgW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XWAuXG4gICAgICogQG9wdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBjb250ZW50T3ZlcmxheTogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZS9kaXNhYmxlIHNjcm9sbGluZyBvZiB0aGUgbWFpbiBjb250ZW50IHdoZW4gYW4gb2ZmIGNhbnZhcyBwYW5lbCBpcyBvcGVuLlxuICAgICAqIEBvcHRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgY29udGVudFNjcm9sbDogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEFtb3VudCBvZiB0aW1lIGluIG1zIHRoZSBvcGVuIGFuZCBjbG9zZSB0cmFuc2l0aW9uIHJlcXVpcmVzLiBJZiBub25lIHNlbGVjdGVkLCBwdWxscyBmcm9tIGJvZHkgc3R5bGUuXG4gICAgICogQG9wdGlvblxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRyYW5zaXRpb25UaW1lOiAwLFxuXG4gICAgLyoqXG4gICAgICogVHlwZSBvZiB0cmFuc2l0aW9uIGZvciB0aGUgb2ZmY2FudmFzIG1lbnUuIE9wdGlvbnMgYXJlICdwdXNoJywgJ2RldGFjaGVkJyBvciAnc2xpZGUnLlxuICAgICAqIEBvcHRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBkZWZhdWx0IHB1c2hcbiAgICAgKi9cbiAgICB0cmFuc2l0aW9uOiAncHVzaCcsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZSB0aGUgcGFnZSB0byBzY3JvbGwgdG8gdG9wIG9yIGJvdHRvbSBvbiBvcGVuLlxuICAgICAqIEBvcHRpb25cbiAgICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgZm9yY2VUbzogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEFsbG93IHRoZSBvZmZjYW52YXMgdG8gcmVtYWluIG9wZW4gZm9yIGNlcnRhaW4gYnJlYWtwb2ludHMuXG4gICAgICogQG9wdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgaXNSZXZlYWxlZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBCcmVha3BvaW50IGF0IHdoaWNoIHRvIHJldmVhbC4gSlMgd2lsbCB1c2UgYSBSZWdFeHAgdG8gdGFyZ2V0IHN0YW5kYXJkIGNsYXNzZXMsIGlmIGNoYW5naW5nIGNsYXNzbmFtZXMsIHBhc3MgeW91ciBjbGFzcyB3aXRoIHRoZSBgcmV2ZWFsQ2xhc3NgIG9wdGlvbi5cbiAgICAgKiBAb3B0aW9uXG4gICAgICogQHR5cGUgez9zdHJpbmd9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHJldmVhbE9uOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2UgZm9jdXMgdG8gdGhlIG9mZmNhbnZhcyBvbiBvcGVuLiBJZiB0cnVlLCB3aWxsIGZvY3VzIHRoZSBvcGVuaW5nIHRyaWdnZXIgb24gY2xvc2UuXG4gICAgICogQG9wdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyB1c2VkIHRvIGZvcmNlIGFuIG9mZmNhbnZhcyB0byByZW1haW4gb3Blbi4gRm91bmRhdGlvbiBkZWZhdWx0cyBmb3IgdGhpcyBhcmUgYHJldmVhbC1mb3ItbGFyZ2VgICYgYHJldmVhbC1mb3ItbWVkaXVtYC5cbiAgICAgKiBAb3B0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCByZXZlYWwtZm9yLVxuICAgICAqIEB0b2RvIGltcHJvdmUgdGhlIHJlZ2V4IHRlc3RpbmcgZm9yIHRoaXMuXG4gICAgICovXG4gICAgcmV2ZWFsQ2xhc3M6ICdyZXZlYWwtZm9yLScsXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBvcHRpb25hbCBmb2N1cyB0cmFwcGluZyB3aGVuIG9wZW5pbmcgYW4gb2ZmY2FudmFzLiBTZXRzIHRhYmluZGV4IG9mIFtkYXRhLW9mZi1jYW52YXMtY29udGVudF0gdG8gLTEgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG4gICAgICogQG9wdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgdHJhcEZvY3VzOiBmYWxzZVxuICB9O1xuXG4gIC8vIFdpbmRvdyBleHBvcnRzXG4gIEZvdW5kYXRpb24ucGx1Z2luKE9mZkNhbnZhcywgJ09mZkNhbnZhcycpO1xufShqUXVlcnkpOyIsIi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG4vKipcbiAqIE9yYml0IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5vcmJpdFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tb3Rpb25cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudGltZXJBbmRJbWFnZUxvYWRlclxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50b3VjaFxuICovXG5cbmNsYXNzIE9yYml0IHtcbiAgLyoqXG4gICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhbiBvcmJpdCBjYXJvdXNlbC5cbiAgKiBAY2xhc3NcbiAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBpbnRvIGFuIE9yYml0IENhcm91c2VsLlxuICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyl7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE9yYml0LmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBGb3VuZGF0aW9uLnJlZ2lzdGVyUGx1Z2luKHRoaXMsICdPcmJpdCcpO1xuICAgIEZvdW5kYXRpb24uS2V5Ym9hcmQucmVnaXN0ZXIoJ09yYml0Jywge1xuICAgICAgJ2x0cic6IHtcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgICAnQVJST1dfTEVGVCc6ICdwcmV2aW91cydcbiAgICAgIH0sXG4gICAgICAncnRsJzoge1xuICAgICAgICAnQVJST1dfTEVGVCc6ICduZXh0JyxcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ3ByZXZpb3VzJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogSW5pdGlhbGl6ZXMgdGhlIHBsdWdpbiBieSBjcmVhdGluZyBqUXVlcnkgY29sbGVjdGlvbnMsIHNldHRpbmcgYXR0cmlidXRlcywgYW5kIHN0YXJ0aW5nIHRoZSBhbmltYXRpb24uXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKi9cbiAgX2luaXQoKSB7XG4gICAgLy8gQFRPRE86IGNvbnNpZGVyIGRpc2N1c3Npb24gb24gUFIgIzkyNzggYWJvdXQgRE9NIHBvbGx1dGlvbiBieSBjaGFuZ2VTbGlkZVxuICAgIHRoaXMuX3Jlc2V0KCk7XG5cbiAgICB0aGlzLiR3cmFwcGVyID0gdGhpcy4kZWxlbWVudC5maW5kKGAuJHt0aGlzLm9wdGlvbnMuY29udGFpbmVyQ2xhc3N9YCk7XG4gICAgdGhpcy4kc2xpZGVzID0gdGhpcy4kZWxlbWVudC5maW5kKGAuJHt0aGlzLm9wdGlvbnMuc2xpZGVDbGFzc31gKTtcblxuICAgIHZhciAkaW1hZ2VzID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbWcnKSxcbiAgICAgICAgaW5pdEFjdGl2ZSA9IHRoaXMuJHNsaWRlcy5maWx0ZXIoJy5pcy1hY3RpdmUnKSxcbiAgICAgICAgaWQgPSB0aGlzLiRlbGVtZW50WzBdLmlkIHx8IEZvdW5kYXRpb24uR2V0WW9EaWdpdHMoNiwgJ29yYml0Jyk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ2RhdGEtcmVzaXplJzogaWQsXG4gICAgICAnaWQnOiBpZFxuICAgIH0pO1xuXG4gICAgaWYgKCFpbml0QWN0aXZlLmxlbmd0aCkge1xuICAgICAgdGhpcy4kc2xpZGVzLmVxKDApLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy51c2VNVUkpIHtcbiAgICAgIHRoaXMuJHNsaWRlcy5hZGRDbGFzcygnbm8tbW90aW9udWknKTtcbiAgICB9XG5cbiAgICBpZiAoJGltYWdlcy5sZW5ndGgpIHtcbiAgICAgIEZvdW5kYXRpb24ub25JbWFnZXNMb2FkZWQoJGltYWdlcywgdGhpcy5fcHJlcGFyZUZvck9yYml0LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wcmVwYXJlRm9yT3JiaXQoKTsvL2hlaGVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmJ1bGxldHMpIHtcbiAgICAgIHRoaXMuX2xvYWRCdWxsZXRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9QbGF5ICYmIHRoaXMuJHNsaWRlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmdlb1N5bmMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFjY2Vzc2libGUpIHsgLy8gYWxsb3cgd3JhcHBlciB0byBiZSBmb2N1c2FibGUgdG8gZW5hYmxlIGFycm93IG5hdmlnYXRpb25cbiAgICAgIHRoaXMuJHdyYXBwZXIuYXR0cigndGFiaW5kZXgnLCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIGEgalF1ZXJ5IGNvbGxlY3Rpb24gb2YgYnVsbGV0cywgaWYgdGhleSBhcmUgYmVpbmcgdXNlZC5cbiAgKiBAZnVuY3Rpb25cbiAgKiBAcHJpdmF0ZVxuICAqL1xuICBfbG9hZEJ1bGxldHMoKSB7XG4gICAgdGhpcy4kYnVsbGV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZChgLiR7dGhpcy5vcHRpb25zLmJveE9mQnVsbGV0c31gKS5maW5kKCdidXR0b24nKTtcbiAgfVxuXG4gIC8qKlxuICAqIFNldHMgYSBgdGltZXJgIG9iamVjdCBvbiB0aGUgb3JiaXQsIGFuZCBzdGFydHMgdGhlIGNvdW50ZXIgZm9yIHRoZSBuZXh0IHNsaWRlLlxuICAqIEBmdW5jdGlvblxuICAqL1xuICBnZW9TeW5jKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy50aW1lciA9IG5ldyBGb3VuZGF0aW9uLlRpbWVyKFxuICAgICAgdGhpcy4kZWxlbWVudCxcbiAgICAgIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy50aW1lckRlbGF5LFxuICAgICAgICBpbmZpbml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuY2hhbmdlU2xpZGUodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB0aGlzLnRpbWVyLnN0YXJ0KCk7XG4gIH1cblxuICAvKipcbiAgKiBTZXRzIHdyYXBwZXIgYW5kIHNsaWRlIGhlaWdodHMgZm9yIHRoZSBvcmJpdC5cbiAgKiBAZnVuY3Rpb25cbiAgKiBAcHJpdmF0ZVxuICAqL1xuICBfcHJlcGFyZUZvck9yYml0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5fc2V0V3JhcHBlckhlaWdodCgpO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsdWxhdGVzIHRoZSBoZWlnaHQgb2YgZWFjaCBzbGlkZSBpbiB0aGUgY29sbGVjdGlvbiwgYW5kIHVzZXMgdGhlIHRhbGxlc3Qgb25lIGZvciB0aGUgd3JhcHBlciBoZWlnaHQuXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlyZSB3aGVuIGNvbXBsZXRlLlxuICAqL1xuICBfc2V0V3JhcHBlckhlaWdodChjYikgey8vcmV3cml0ZSB0aGlzIHRvIGBmb3JgIGxvb3BcbiAgICB2YXIgbWF4ID0gMCwgdGVtcCwgY291bnRlciA9IDAsIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdGVtcCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNsaWRlJywgY291bnRlcik7XG5cbiAgICAgIGlmIChfdGhpcy4kc2xpZGVzLmZpbHRlcignLmlzLWFjdGl2ZScpWzBdICE9PSBfdGhpcy4kc2xpZGVzLmVxKGNvdW50ZXIpWzBdKSB7Ly9pZiBub3QgdGhlIGFjdGl2ZSBzbGlkZSwgc2V0IGNzcyBwb3NpdGlvbiBhbmQgZGlzcGxheSBwcm9wZXJ0eVxuICAgICAgICAkKHRoaXMpLmNzcyh7J3Bvc2l0aW9uJzogJ3JlbGF0aXZlJywgJ2Rpc3BsYXknOiAnbm9uZSd9KTtcbiAgICAgIH1cbiAgICAgIG1heCA9IHRlbXAgPiBtYXggPyB0ZW1wIDogbWF4O1xuICAgICAgY291bnRlcisrO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50ZXIgPT09IHRoaXMuJHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuJHdyYXBwZXIuY3NzKHsnaGVpZ2h0JzogbWF4fSk7IC8vb25seSBjaGFuZ2UgdGhlIHdyYXBwZXIgaGVpZ2h0IHByb3BlcnR5IG9uY2UuXG4gICAgICBpZihjYikge2NiKG1heCk7fSAvL2ZpcmUgY2FsbGJhY2sgd2l0aCBtYXggaGVpZ2h0IGRpbWVuc2lvbi5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBTZXRzIHRoZSBtYXgtaGVpZ2h0IG9mIGVhY2ggc2xpZGUuXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKi9cbiAgX3NldFNsaWRlSGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5jc3MoJ21heC1oZWlnaHQnLCBoZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gYmFzaWNhbGx5IGV2ZXJ5dGhpbmcgd2l0aGluIHRoZSBlbGVtZW50LlxuICAqIEBmdW5jdGlvblxuICAqIEBwcml2YXRlXG4gICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8qKk5vdyB1c2luZyBjdXN0b20gZXZlbnQgLSB0aGFua3MgdG86KipcbiAgICAvLyoqICAgICAgWW9oYWkgQXJhcmF0IG9mIFRvcm9udG8gICAgICAqKlxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy9cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnJlc2l6ZW1lLnpmLnRyaWdnZXInKS5vbih7XG4gICAgICAncmVzaXplbWUuemYudHJpZ2dlcic6IHRoaXMuX3ByZXBhcmVGb3JPcmJpdC5iaW5kKHRoaXMpXG4gICAgfSlcbiAgICBpZiAodGhpcy4kc2xpZGVzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zd2lwZSkge1xuICAgICAgICB0aGlzLiRzbGlkZXMub2ZmKCdzd2lwZWxlZnQuemYub3JiaXQgc3dpcGVyaWdodC56Zi5vcmJpdCcpXG4gICAgICAgIC5vbignc3dpcGVsZWZ0LnpmLm9yYml0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLmNoYW5nZVNsaWRlKHRydWUpO1xuICAgICAgICB9KS5vbignc3dpcGVyaWdodC56Zi5vcmJpdCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5jaGFuZ2VTbGlkZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUGxheSkge1xuICAgICAgICB0aGlzLiRzbGlkZXMub24oJ2NsaWNrLnpmLm9yYml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZGF0YSgnY2xpY2tlZE9uJywgX3RoaXMuJGVsZW1lbnQuZGF0YSgnY2xpY2tlZE9uJykgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICAgIF90aGlzLnRpbWVyW190aGlzLiRlbGVtZW50LmRhdGEoJ2NsaWNrZWRPbicpID8gJ3BhdXNlJyA6ICdzdGFydCddKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5vbignbW91c2VlbnRlci56Zi5vcmJpdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZXIucGF1c2UoKTtcbiAgICAgICAgICB9KS5vbignbW91c2VsZWF2ZS56Zi5vcmJpdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy4kZWxlbWVudC5kYXRhKCdjbGlja2VkT24nKSkge1xuICAgICAgICAgICAgICBfdGhpcy50aW1lci5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubmF2QnV0dG9ucykge1xuICAgICAgICB2YXIgJGNvbnRyb2xzID0gdGhpcy4kZWxlbWVudC5maW5kKGAuJHt0aGlzLm9wdGlvbnMubmV4dENsYXNzfSwgLiR7dGhpcy5vcHRpb25zLnByZXZDbGFzc31gKTtcbiAgICAgICAgJGNvbnRyb2xzLmF0dHIoJ3RhYmluZGV4JywgMClcbiAgICAgICAgLy9hbHNvIG5lZWQgdG8gaGFuZGxlIGVudGVyL3JldHVybiBhbmQgc3BhY2ViYXIga2V5IHByZXNzZXNcbiAgICAgICAgLm9uKCdjbGljay56Zi5vcmJpdCB0b3VjaGVuZC56Zi5vcmJpdCcsIGZ1bmN0aW9uKGUpe1xuXHQgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5jaGFuZ2VTbGlkZSgkKHRoaXMpLmhhc0NsYXNzKF90aGlzLm9wdGlvbnMubmV4dENsYXNzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJ1bGxldHMpIHtcbiAgICAgICAgdGhpcy4kYnVsbGV0cy5vbignY2xpY2suemYub3JiaXQgdG91Y2hlbmQuemYub3JiaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoL2lzLWFjdGl2ZS9nLnRlc3QodGhpcy5jbGFzc05hbWUpKSB7IHJldHVybiBmYWxzZTsgfS8vaWYgdGhpcyBpcyBhY3RpdmUsIGtpY2sgb3V0IG9mIGZ1bmN0aW9uLlxuICAgICAgICAgIHZhciBpZHggPSAkKHRoaXMpLmRhdGEoJ3NsaWRlJyksXG4gICAgICAgICAgbHRyID0gaWR4ID4gX3RoaXMuJHNsaWRlcy5maWx0ZXIoJy5pcy1hY3RpdmUnKS5kYXRhKCdzbGlkZScpLFxuICAgICAgICAgICRzbGlkZSA9IF90aGlzLiRzbGlkZXMuZXEoaWR4KTtcblxuICAgICAgICAgIF90aGlzLmNoYW5nZVNsaWRlKGx0ciwgJHNsaWRlLCBpZHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2Nlc3NpYmxlKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuYWRkKHRoaXMuJGJ1bGxldHMpLm9uKCdrZXlkb3duLnpmLm9yYml0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIC8vIGhhbmRsZSBrZXlib2FyZCBldmVudCB3aXRoIGtleWJvYXJkIHV0aWxcbiAgICAgICAgICBGb3VuZGF0aW9uLktleWJvYXJkLmhhbmRsZUtleShlLCAnT3JiaXQnLCB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU2xpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTbGlkZShmYWxzZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlZDogZnVuY3Rpb24oKSB7IC8vIGlmIGJ1bGxldCBpcyBmb2N1c2VkLCBtYWtlIHN1cmUgZm9jdXMgbW92ZXNcbiAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKF90aGlzLiRidWxsZXRzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRidWxsZXRzLmZpbHRlcignLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyBPcmJpdCBzbyBpdCBjYW4gYmUgcmVpbml0aWFsaXplZFxuICAgKi9cbiAgX3Jlc2V0KCkge1xuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZXJlIGFyZSBubyBzbGlkZXMgKGZpcnN0IHJ1bilcbiAgICBpZiAodHlwZW9mIHRoaXMuJHNsaWRlcyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiRzbGlkZXMubGVuZ3RoID4gMSkge1xuICAgICAgLy8gUmVtb3ZlIG9sZCBldmVudHNcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYub3JiaXQnKS5maW5kKCcqJykub2ZmKCcuemYub3JiaXQnKVxuXG4gICAgICAvLyBSZXN0YXJ0IHRpbWVyIGlmIGF1dG9QbGF5IGlzIGVuYWJsZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1BsYXkpIHtcbiAgICAgICAgdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBzbGlkZGVzXG4gICAgICB0aGlzLiRzbGlkZXMuZWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAkKGVsKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlIGlzLWFjdGl2ZSBpcy1pbicpXG4gICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtbGl2ZScpXG4gICAgICAgICAgLmhpZGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaG93IHRoZSBmaXJzdCBzbGlkZVxuICAgICAgdGhpcy4kc2xpZGVzLmZpcnN0KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLnNob3coKTtcblxuICAgICAgLy8gVHJpZ2dlcnMgd2hlbiB0aGUgc2xpZGUgaGFzIGZpbmlzaGVkIGFuaW1hdGluZ1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzbGlkZWNoYW5nZS56Zi5vcmJpdCcsIFt0aGlzLiRzbGlkZXMuZmlyc3QoKV0pO1xuXG4gICAgICAvLyBTZWxlY3QgZmlyc3QgYnVsbGV0IGlmIGJ1bGxldHMgYXJlIHByZXNlbnRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVsbGV0cykge1xuICAgICAgICB0aGlzLl91cGRhdGVCdWxsZXRzKDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgc2xpZGUgdG8gYSBuZXcgb25lLlxuICAqIEBmdW5jdGlvblxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNMVFIgLSBmbGFnIGlmIHRoZSBzbGlkZSBzaG91bGQgbW92ZSBsZWZ0IHRvIHJpZ2h0LlxuICAqIEBwYXJhbSB7alF1ZXJ5fSBjaG9zZW5TbGlkZSAtIHRoZSBqUXVlcnkgZWxlbWVudCBvZiB0aGUgc2xpZGUgdG8gc2hvdyBuZXh0LCBpZiBvbmUgaXMgc2VsZWN0ZWQuXG4gICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIHRoZSBpbmRleCBvZiB0aGUgbmV3IHNsaWRlIGluIGl0cyBjb2xsZWN0aW9uLCBpZiBvbmUgY2hvc2VuLlxuICAqIEBmaXJlcyBPcmJpdCNzbGlkZWNoYW5nZVxuICAqL1xuICBjaGFuZ2VTbGlkZShpc0xUUiwgY2hvc2VuU2xpZGUsIGlkeCkge1xuICAgIGlmICghdGhpcy4kc2xpZGVzKSB7cmV0dXJuOyB9IC8vIERvbid0IGZyZWFrIG91dCBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGNsZWFudXBcbiAgICB2YXIgJGN1clNsaWRlID0gdGhpcy4kc2xpZGVzLmZpbHRlcignLmlzLWFjdGl2ZScpLmVxKDApO1xuXG4gICAgaWYgKC9tdWkvZy50ZXN0KCRjdXJTbGlkZVswXS5jbGFzc05hbWUpKSB7IHJldHVybiBmYWxzZTsgfSAvL2lmIHRoZSBzbGlkZSBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLCBraWNrIG91dCBvZiB0aGUgZnVuY3Rpb25cblxuICAgIHZhciAkZmlyc3RTbGlkZSA9IHRoaXMuJHNsaWRlcy5maXJzdCgpLFxuICAgICRsYXN0U2xpZGUgPSB0aGlzLiRzbGlkZXMubGFzdCgpLFxuICAgIGRpckluID0gaXNMVFIgPyAnUmlnaHQnIDogJ0xlZnQnLFxuICAgIGRpck91dCA9IGlzTFRSID8gJ0xlZnQnIDogJ1JpZ2h0JyxcbiAgICBfdGhpcyA9IHRoaXMsXG4gICAgJG5ld1NsaWRlO1xuXG4gICAgaWYgKCFjaG9zZW5TbGlkZSkgeyAvL21vc3Qgb2YgdGhlIHRpbWUsIHRoaXMgd2lsbCBiZSBhdXRvIHBsYXllZCBvciBjbGlja2VkIGZyb20gdGhlIG5hdkJ1dHRvbnMuXG4gICAgICAkbmV3U2xpZGUgPSBpc0xUUiA/IC8vaWYgd3JhcHBpbmcgZW5hYmxlZCwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgYG5leHRgIG9yIGBwcmV2YCBzaWJsaW5nLCBpZiBub3QsIHNlbGVjdCB0aGUgZmlyc3Qgb3IgbGFzdCBzbGlkZSB0byBmaWxsIGluLiBpZiB3cmFwcGluZyBub3QgZW5hYmxlZCwgYXR0ZW1wdCB0byBzZWxlY3QgYG5leHRgIG9yIGBwcmV2YCwgaWYgdGhlcmUncyBub3RoaW5nIHRoZXJlLCB0aGUgZnVuY3Rpb24gd2lsbCBraWNrIG91dCBvbiBuZXh0IHN0ZXAuIENSQVpZIE5FU1RFRCBURVJOQVJJRVMhISEhIVxuICAgICAgKHRoaXMub3B0aW9ucy5pbmZpbml0ZVdyYXAgPyAkY3VyU2xpZGUubmV4dChgLiR7dGhpcy5vcHRpb25zLnNsaWRlQ2xhc3N9YCkubGVuZ3RoID8gJGN1clNsaWRlLm5leHQoYC4ke3RoaXMub3B0aW9ucy5zbGlkZUNsYXNzfWApIDogJGZpcnN0U2xpZGUgOiAkY3VyU2xpZGUubmV4dChgLiR7dGhpcy5vcHRpb25zLnNsaWRlQ2xhc3N9YCkpLy9waWNrIG5leHQgc2xpZGUgaWYgbW92aW5nIGxlZnQgdG8gcmlnaHRcbiAgICAgIDpcbiAgICAgICh0aGlzLm9wdGlvbnMuaW5maW5pdGVXcmFwID8gJGN1clNsaWRlLnByZXYoYC4ke3RoaXMub3B0aW9ucy5zbGlkZUNsYXNzfWApLmxlbmd0aCA/ICRjdXJTbGlkZS5wcmV2KGAuJHt0aGlzLm9wdGlvbnMuc2xpZGVDbGFzc31gKSA6ICRsYXN0U2xpZGUgOiAkY3VyU2xpZGUucHJldihgLiR7dGhpcy5vcHRpb25zLnNsaWRlQ2xhc3N9YCkpOy8vcGljayBwcmV2IHNsaWRlIGlmIG1vdmluZyByaWdodCB0byBsZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgICRuZXdTbGlkZSA9IGNob3NlblNsaWRlO1xuICAgIH1cblxuICAgIGlmICgkbmV3U2xpZGUubGVuZ3RoKSB7XG4gICAgICAvKipcbiAgICAgICogVHJpZ2dlcnMgYmVmb3JlIHRoZSBuZXh0IHNsaWRlIHN0YXJ0cyBhbmltYXRpbmcgaW4gYW5kIG9ubHkgaWYgYSBuZXh0IHNsaWRlIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgKiBAZXZlbnQgT3JiaXQjYmVmb3Jlc2xpZGVjaGFuZ2VcbiAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2JlZm9yZXNsaWRlY2hhbmdlLnpmLm9yYml0JywgWyRjdXJTbGlkZSwgJG5ld1NsaWRlXSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVsbGV0cykge1xuICAgICAgICBpZHggPSBpZHggfHwgdGhpcy4kc2xpZGVzLmluZGV4KCRuZXdTbGlkZSk7IC8vZ3JhYiBpbmRleCB0byB1cGRhdGUgYnVsbGV0c1xuICAgICAgICB0aGlzLl91cGRhdGVCdWxsZXRzKGlkeCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlTVVJICYmICF0aGlzLiRlbGVtZW50LmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgRm91bmRhdGlvbi5Nb3Rpb24uYW5pbWF0ZUluKFxuICAgICAgICAgICRuZXdTbGlkZS5hZGRDbGFzcygnaXMtYWN0aXZlJykuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAndG9wJzogMH0pLFxuICAgICAgICAgIHRoaXMub3B0aW9uc1tgYW5pbUluRnJvbSR7ZGlySW59YF0sXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRuZXdTbGlkZS5jc3Moeydwb3NpdGlvbic6ICdyZWxhdGl2ZScsICdkaXNwbGF5JzogJ2Jsb2NrJ30pXG4gICAgICAgICAgICAuYXR0cignYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBGb3VuZGF0aW9uLk1vdGlvbi5hbmltYXRlT3V0KFxuICAgICAgICAgICRjdXJTbGlkZS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyksXG4gICAgICAgICAgdGhpcy5vcHRpb25zW2BhbmltT3V0VG8ke2Rpck91dH1gXSxcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJGN1clNsaWRlLnJlbW92ZUF0dHIoJ2FyaWEtbGl2ZScpO1xuICAgICAgICAgICAgaWYoX3RoaXMub3B0aW9ucy5hdXRvUGxheSAmJiAhX3RoaXMudGltZXIuaXNQYXVzZWQpe1xuICAgICAgICAgICAgICBfdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2RvIHN0dWZmP1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGN1clNsaWRlLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUgaXMtaW4nKS5yZW1vdmVBdHRyKCdhcmlhLWxpdmUnKS5oaWRlKCk7XG4gICAgICAgICRuZXdTbGlkZS5hZGRDbGFzcygnaXMtYWN0aXZlIGlzLWluJykuYXR0cignYXJpYS1saXZlJywgJ3BvbGl0ZScpLnNob3coKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUGxheSAmJiAhdGhpcy50aW1lci5pc1BhdXNlZCkge1xuICAgICAgICAgIHRoaXMudGltZXIucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgLyoqXG4gICAgKiBUcmlnZ2VycyB3aGVuIHRoZSBzbGlkZSBoYXMgZmluaXNoZWQgYW5pbWF0aW5nIGluLlxuICAgICogQGV2ZW50IE9yYml0I3NsaWRlY2hhbmdlXG4gICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc2xpZGVjaGFuZ2UuemYub3JiaXQnLCBbJG5ld1NsaWRlXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogVXBkYXRlcyB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBidWxsZXRzLCBpZiBkaXNwbGF5ZWQuXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHNsaWRlLlxuICAqL1xuICBfdXBkYXRlQnVsbGV0cyhpZHgpIHtcbiAgICB2YXIgJG9sZEJ1bGxldCA9IHRoaXMuJGVsZW1lbnQuZmluZChgLiR7dGhpcy5vcHRpb25zLmJveE9mQnVsbGV0c31gKVxuICAgIC5maW5kKCcuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmJsdXIoKSxcbiAgICBzcGFuID0gJG9sZEJ1bGxldC5maW5kKCdzcGFuOmxhc3QnKS5kZXRhY2goKSxcbiAgICAkbmV3QnVsbGV0ID0gdGhpcy4kYnVsbGV0cy5lcShpZHgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5hcHBlbmQoc3Bhbik7XG4gIH1cblxuICAvKipcbiAgKiBEZXN0cm95cyB0aGUgY2Fyb3VzZWwgYW5kIGhpZGVzIHRoZSBlbGVtZW50LlxuICAqIEBmdW5jdGlvblxuICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYub3JiaXQnKS5maW5kKCcqJykub2ZmKCcuemYub3JiaXQnKS5lbmQoKS5oaWRlKCk7XG4gICAgRm91bmRhdGlvbi51bnJlZ2lzdGVyUGx1Z2luKHRoaXMpO1xuICB9XG59XG5cbk9yYml0LmRlZmF1bHRzID0ge1xuICAvKipcbiAgKiBUZWxscyB0aGUgSlMgdG8gbG9vayBmb3IgYW5kIGxvYWRCdWxsZXRzLlxuICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICogQGRlZmF1bHQgdHJ1ZVxuICAqL1xuICBidWxsZXRzOiB0cnVlLFxuICAvKipcbiAgKiBUZWxscyB0aGUgSlMgdG8gYXBwbHkgZXZlbnQgbGlzdGVuZXJzIHRvIG5hdiBidXR0b25zXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgKiBAZGVmYXVsdCB0cnVlXG4gICovXG4gIG5hdkJ1dHRvbnM6IHRydWUsXG4gIC8qKlxuICAqIG1vdGlvbi11aSBhbmltYXRpb24gY2xhc3MgdG8gYXBwbHlcbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQGRlZmF1bHQgJ3NsaWRlLWluLXJpZ2h0J1xuICAqL1xuICBhbmltSW5Gcm9tUmlnaHQ6ICdzbGlkZS1pbi1yaWdodCcsXG4gIC8qKlxuICAqIG1vdGlvbi11aSBhbmltYXRpb24gY2xhc3MgdG8gYXBwbHlcbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQGRlZmF1bHQgJ3NsaWRlLW91dC1yaWdodCdcbiAgKi9cbiAgYW5pbU91dFRvUmlnaHQ6ICdzbGlkZS1vdXQtcmlnaHQnLFxuICAvKipcbiAgKiBtb3Rpb24tdWkgYW5pbWF0aW9uIGNsYXNzIHRvIGFwcGx5XG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBkZWZhdWx0ICdzbGlkZS1pbi1sZWZ0J1xuICAqXG4gICovXG4gIGFuaW1JbkZyb21MZWZ0OiAnc2xpZGUtaW4tbGVmdCcsXG4gIC8qKlxuICAqIG1vdGlvbi11aSBhbmltYXRpb24gY2xhc3MgdG8gYXBwbHlcbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQGRlZmF1bHQgJ3NsaWRlLW91dC1sZWZ0J1xuICAqL1xuICBhbmltT3V0VG9MZWZ0OiAnc2xpZGUtb3V0LWxlZnQnLFxuICAvKipcbiAgKiBBbGxvd3MgT3JiaXQgdG8gYXV0b21hdGljYWxseSBhbmltYXRlIG9uIHBhZ2UgbG9hZC5cbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAqIEBkZWZhdWx0IHRydWVcbiAgKi9cbiAgYXV0b1BsYXk6IHRydWUsXG4gIC8qKlxuICAqIEFtb3VudCBvZiB0aW1lLCBpbiBtcywgYmV0d2VlbiBzbGlkZSB0cmFuc2l0aW9uc1xuICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgKiBAZGVmYXVsdCA1MDAwXG4gICovXG4gIHRpbWVyRGVsYXk6IDUwMDAsXG4gIC8qKlxuICAqIEFsbG93cyBPcmJpdCB0byBpbmZpbml0ZWx5IGxvb3AgdGhyb3VnaCB0aGUgc2xpZGVzXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgKiBAZGVmYXVsdCB0cnVlXG4gICovXG4gIGluZmluaXRlV3JhcDogdHJ1ZSxcbiAgLyoqXG4gICogQWxsb3dzIHRoZSBPcmJpdCBzbGlkZXMgdG8gYmluZCB0byBzd2lwZSBldmVudHMgZm9yIG1vYmlsZSwgcmVxdWlyZXMgYW4gYWRkaXRpb25hbCB1dGlsIGxpYnJhcnlcbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAqIEBkZWZhdWx0IHRydWVcbiAgKi9cbiAgc3dpcGU6IHRydWUsXG4gIC8qKlxuICAqIEFsbG93cyB0aGUgdGltaW5nIGZ1bmN0aW9uIHRvIHBhdXNlIGFuaW1hdGlvbiBvbiBob3Zlci5cbiAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAqIEBkZWZhdWx0IHRydWVcbiAgKi9cbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAvKipcbiAgKiBBbGxvd3MgT3JiaXQgdG8gYmluZCBrZXlib2FyZCBldmVudHMgdG8gdGhlIHNsaWRlciwgdG8gYW5pbWF0ZSBmcmFtZXMgd2l0aCBhcnJvdyBrZXlzXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgKiBAZGVmYXVsdCB0cnVlXG4gICovXG4gIGFjY2Vzc2libGU6IHRydWUsXG4gIC8qKlxuICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBvZiBPcmJpdFxuICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgKiBAZGVmYXVsdCAnb3JiaXQtY29udGFpbmVyJ1xuICAqL1xuICBjb250YWluZXJDbGFzczogJ29yYml0LWNvbnRhaW5lcicsXG4gIC8qKlxuICAqIENsYXNzIGFwcGxpZWQgdG8gaW5kaXZpZHVhbCBzbGlkZXMuXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBkZWZhdWx0ICdvcmJpdC1zbGlkZSdcbiAgKi9cbiAgc2xpZGVDbGFzczogJ29yYml0LXNsaWRlJyxcbiAgLyoqXG4gICogQ2xhc3MgYXBwbGllZCB0byB0aGUgYnVsbGV0IGNvbnRhaW5lci4gWW91J3JlIHdlbGNvbWUuXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBkZWZhdWx0ICdvcmJpdC1idWxsZXRzJ1xuICAqL1xuICBib3hPZkJ1bGxldHM6ICdvcmJpdC1idWxsZXRzJyxcbiAgLyoqXG4gICogQ2xhc3MgYXBwbGllZCB0byB0aGUgYG5leHRgIG5hdmlnYXRpb24gYnV0dG9uLlxuICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgKiBAZGVmYXVsdCAnb3JiaXQtbmV4dCdcbiAgKi9cbiAgbmV4dENsYXNzOiAnb3JiaXQtbmV4dCcsXG4gIC8qKlxuICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIGBwcmV2aW91c2AgbmF2aWdhdGlvbiBidXR0b24uXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBkZWZhdWx0ICdvcmJpdC1wcmV2aW91cydcbiAgKi9cbiAgcHJldkNsYXNzOiAnb3JiaXQtcHJldmlvdXMnLFxuICAvKipcbiAgKiBCb29sZWFuIHRvIGZsYWcgdGhlIGpzIHRvIHVzZSBtb3Rpb24gdWkgY2xhc3NlcyBvciBub3QuIERlZmF1bHQgdG8gdHJ1ZSBmb3IgYmFja3dhcmRzIGNvbXBhdGFiaWxpdHkuXG4gICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgKiBAZGVmYXVsdCB0cnVlXG4gICovXG4gIHVzZU1VSTogdHJ1ZVxufTtcblxuLy8gV2luZG93IGV4cG9ydHNcbkZvdW5kYXRpb24ucGx1Z2luKE9yYml0LCAnT3JiaXQnKTtcblxufShqUXVlcnkpO1xuIiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIFRoaXMgdXRpbCB3YXMgY3JlYXRlZCBieSBNYXJpdXMgT2xiZXJ0eiAqXG4gKiBQbGVhc2UgdGhhbmsgTWFyaXVzIG9uIEdpdEh1YiAvb3dsYmVydHogKlxuICogb3IgdGhlIHdlYiBodHRwOi8vd3d3Lm1hcml1c29sYmVydHouZGUvICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBrZXlDb2RlcyA9IHtcbiAgICA5OiAnVEFCJyxcbiAgICAxMzogJ0VOVEVSJyxcbiAgICAyNzogJ0VTQ0FQRScsXG4gICAgMzI6ICdTUEFDRScsXG4gICAgMzc6ICdBUlJPV19MRUZUJyxcbiAgICAzODogJ0FSUk9XX1VQJyxcbiAgICAzOTogJ0FSUk9XX1JJR0hUJyxcbiAgICA0MDogJ0FSUk9XX0RPV04nXG4gIH07XG5cbiAgdmFyIGNvbW1hbmRzID0ge307XG5cbiAgdmFyIEtleWJvYXJkID0ge1xuICAgIGtleXM6IGdldEtleUNvZGVzKGtleUNvZGVzKSxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgKGtleWJvYXJkKSBldmVudCBhbmQgcmV0dXJucyBhIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgaXRzIGtleVxuICAgICAqIENhbiBiZSB1c2VkIGxpa2UgRm91bmRhdGlvbi5wYXJzZUtleShldmVudCkgPT09IEZvdW5kYXRpb24ua2V5cy5TUEFDRVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGdlbmVyYXRlZCBieSB0aGUgZXZlbnQgaGFuZGxlclxuICAgICAqIEByZXR1cm4gU3RyaW5nIGtleSAtIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGtleSBwcmVzc2VkXG4gICAgICovXG4gICAgcGFyc2VLZXk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGtleSA9IGtleUNvZGVzW2V2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGVdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIC8vIFJlbW92ZSB1bi1wcmludGFibGUgY2hhcmFjdGVycywgZS5nLiBmb3IgYGZyb21DaGFyQ29kZWAgY2FsbHMgZm9yIENUUkwgb25seSBldmVudHNcbiAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXFcrLywgJycpO1xuXG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIGtleSA9ICdTSElGVF8nICsga2V5O1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIGtleSA9ICdDVFJMXycgKyBrZXk7XG4gICAgICBpZiAoZXZlbnQuYWx0S2V5KSBrZXkgPSAnQUxUXycgKyBrZXk7XG5cbiAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyB1bmRlcnNjb3JlLCBpbiBjYXNlIG9ubHkgbW9kaWZpZXJzIHdlcmUgdXNlZCAoZS5nLiBvbmx5IGBDVFJMX0FMVGApXG4gICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXyQvLCAnJyk7XG5cbiAgICAgIHJldHVybiBrZXk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgZ2l2ZW4gKGtleWJvYXJkKSBldmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGdlbmVyYXRlZCBieSB0aGUgZXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnQgLSBGb3VuZGF0aW9uIGNvbXBvbmVudCdzIG5hbWUsIGUuZy4gU2xpZGVyIG9yIFJldmVhbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0c30gZnVuY3Rpb25zIC0gY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdGhhdCBhcmUgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChldmVudCwgY29tcG9uZW50LCBmdW5jdGlvbnMpIHtcbiAgICAgIHZhciBjb21tYW5kTGlzdCA9IGNvbW1hbmRzW2NvbXBvbmVudF0sXG4gICAgICAgICAga2V5Q29kZSA9IHRoaXMucGFyc2VLZXkoZXZlbnQpLFxuICAgICAgICAgIGNtZHMsXG4gICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICBmbjtcblxuICAgICAgaWYgKCFjb21tYW5kTGlzdCkgcmV0dXJuIGNvbnNvbGUud2FybignQ29tcG9uZW50IG5vdCBkZWZpbmVkIScpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbW1hbmRMaXN0Lmx0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgZG9lcyBub3QgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGx0ciBhbmQgcnRsXG4gICAgICAgIGNtZHMgPSBjb21tYW5kTGlzdDsgLy8gdXNlIHBsYWluIGxpc3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1lcmdlIGx0ciBhbmQgcnRsOiBpZiBkb2N1bWVudCBpcyBydGwsIHJ0bCBvdmVyd3JpdGVzIGx0ciBhbmQgdmljZSB2ZXJzYVxuICAgICAgICBpZiAoRm91bmRhdGlvbi5ydGwoKSkgY21kcyA9ICQuZXh0ZW5kKHt9LCBjb21tYW5kTGlzdC5sdHIsIGNvbW1hbmRMaXN0LnJ0bCk7ZWxzZSBjbWRzID0gJC5leHRlbmQoe30sIGNvbW1hbmRMaXN0LnJ0bCwgY29tbWFuZExpc3QubHRyKTtcbiAgICAgIH1cbiAgICAgIGNvbW1hbmQgPSBjbWRzW2tleUNvZGVdO1xuXG4gICAgICBmbiA9IGZ1bmN0aW9uc1tjb21tYW5kXTtcbiAgICAgIGlmIChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gZXhlY3V0ZSBmdW5jdGlvbiAgaWYgZXhpc3RzXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KCk7XG4gICAgICAgIGlmIChmdW5jdGlvbnMuaGFuZGxlZCB8fCB0eXBlb2YgZnVuY3Rpb25zLmhhbmRsZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBleGVjdXRlIGZ1bmN0aW9uIHdoZW4gZXZlbnQgd2FzIGhhbmRsZWRcbiAgICAgICAgICBmdW5jdGlvbnMuaGFuZGxlZChyZXR1cm5WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmdW5jdGlvbnMudW5oYW5kbGVkIHx8IHR5cGVvZiBmdW5jdGlvbnMudW5oYW5kbGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSBmdW5jdGlvbiB3aGVuIGV2ZW50IHdhcyBub3QgaGFuZGxlZFxuICAgICAgICAgIGZ1bmN0aW9ucy51bmhhbmRsZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBnaXZlbiBgJGVsZW1lbnRgXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBzZWFyY2ggd2l0aGluXG4gICAgICogQHJldHVybiB7alF1ZXJ5fSAkZm9jdXNhYmxlIC0gYWxsIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gYCRlbGVtZW50YFxuICAgICAqL1xuICAgIGZpbmRGb2N1c2FibGU6IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICAgaWYgKCEkZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gJGVsZW1lbnQuZmluZCgnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgKlt0YWJpbmRleF0sICpbY29udGVudGVkaXRhYmxlXScpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCh0aGlzKS5pcygnOnZpc2libGUnKSB8fCAkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JykgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vb25seSBoYXZlIHZpc2libGUgZWxlbWVudHMgYW5kIHRob3NlIHRoYXQgaGF2ZSBhIHRhYmluZGV4IGdyZWF0ZXIgb3IgZXF1YWwgMFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbXBvbmVudCBuYW1lIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IC0gRm91bmRhdGlvbiBjb21wb25lbnQsIGUuZy4gU2xpZGVyIG9yIFJldmVhbFxuICAgICAqIEByZXR1cm4gU3RyaW5nIGNvbXBvbmVudE5hbWVcbiAgICAgKi9cblxuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoY29tcG9uZW50TmFtZSwgY21kcykge1xuICAgICAgY29tbWFuZHNbY29tcG9uZW50TmFtZV0gPSBjbWRzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRyYXBzIHRoZSBmb2N1cyBpbiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtqUXVlcnl9ICRlbGVtZW50ICBqUXVlcnkgb2JqZWN0IHRvIHRyYXAgdGhlIGZvdWNzIGludG8uXG4gICAgICovXG4gICAgdHJhcEZvY3VzOiBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgIHZhciAkZm9jdXNhYmxlID0gRm91bmRhdGlvbi5LZXlib2FyZC5maW5kRm9jdXNhYmxlKCRlbGVtZW50KSxcbiAgICAgICAgICAkZmlyc3RGb2N1c2FibGUgPSAkZm9jdXNhYmxlLmVxKDApLFxuICAgICAgICAgICRsYXN0Rm9jdXNhYmxlID0gJGZvY3VzYWJsZS5lcSgtMSk7XG5cbiAgICAgICRlbGVtZW50Lm9uKCdrZXlkb3duLnpmLnRyYXBmb2N1cycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSAkbGFzdEZvY3VzYWJsZVswXSAmJiBGb3VuZGF0aW9uLktleWJvYXJkLnBhcnNlS2V5KGV2ZW50KSA9PT0gJ1RBQicpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICRmaXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gJGZpcnN0Rm9jdXNhYmxlWzBdICYmIEZvdW5kYXRpb24uS2V5Ym9hcmQucGFyc2VLZXkoZXZlbnQpID09PSAnU0hJRlRfVEFCJykge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJGxhc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIHRoZSB0cmFwcGVkIGZvY3VzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7alF1ZXJ5fSAkZWxlbWVudCAgalF1ZXJ5IG9iamVjdCB0byByZWxlYXNlIHRoZSBmb2N1cyBmb3IuXG4gICAgICovXG4gICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICRlbGVtZW50Lm9mZigna2V5ZG93bi56Zi50cmFwZm9jdXMnKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogQ29uc3RhbnRzIGZvciBlYXNpZXIgY29tcGFyaW5nLlxuICAgKiBDYW4gYmUgdXNlZCBsaWtlIEZvdW5kYXRpb24ucGFyc2VLZXkoZXZlbnQpID09PSBGb3VuZGF0aW9uLmtleXMuU1BBQ0VcbiAgICovXG4gIGZ1bmN0aW9uIGdldEtleUNvZGVzKGtjcykge1xuICAgIHZhciBrID0ge307XG4gICAgZm9yICh2YXIga2MgaW4ga2NzKSB7XG4gICAgICBrW2tjc1trY11dID0ga2NzW2tjXTtcbiAgICB9cmV0dXJuIGs7XG4gIH1cblxuICBGb3VuZGF0aW9uLktleWJvYXJkID0gS2V5Ym9hcmQ7XG59KGpRdWVyeSk7IiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbiAoJCkge1xuXG4gIC8vIERlZmF1bHQgc2V0IG9mIG1lZGlhIHF1ZXJpZXNcbiAgdmFyIGRlZmF1bHRRdWVyaWVzID0ge1xuICAgICdkZWZhdWx0JzogJ29ubHkgc2NyZWVuJyxcbiAgICBsYW5kc2NhcGU6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgICBwb3J0cmFpdDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICAgcmV0aW5hOiAnb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgKyAnb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgKyAnb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLCcgKyAnb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICsgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksJyArICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknXG4gIH07XG5cbiAgdmFyIE1lZGlhUXVlcnkgPSB7XG4gICAgcXVlcmllczogW10sXG5cbiAgICBjdXJyZW50OiAnJyxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtZWRpYSBxdWVyeSBoZWxwZXIsIGJ5IGV4dHJhY3RpbmcgdGhlIGJyZWFrcG9pbnQgbGlzdCBmcm9tIHRoZSBDU1MgYW5kIGFjdGl2YXRpbmcgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlci5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXh0cmFjdGVkU3R5bGVzID0gJCgnLmZvdW5kYXRpb24tbXEnKS5jc3MoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgICB2YXIgbmFtZWRRdWVyaWVzO1xuXG4gICAgICBuYW1lZFF1ZXJpZXMgPSBwYXJzZVN0eWxlVG9PYmplY3QoZXh0cmFjdGVkU3R5bGVzKTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWVkUXVlcmllcykge1xuICAgICAgICBpZiAobmFtZWRRdWVyaWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBzZWxmLnF1ZXJpZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAnICsgbmFtZWRRdWVyaWVzW2tleV0gKyAnKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuXG4gICAgICB0aGlzLl93YXRjaGVyKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBzY3JlZW4gaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyBhIGJyZWFrcG9pbnQuXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCdzIHNtYWxsZXIuXG4gICAgICovXG4gICAgYXRMZWFzdDogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHNpemUpO1xuXG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBzY3JlZW4gbWF0Y2hlcyB0byBhIGJyZWFrcG9pbnQuXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLCBlaXRoZXIgJ3NtYWxsIG9ubHknIG9yICdzbWFsbCcuIE9taXR0aW5nICdvbmx5JyBmYWxscyBiYWNrIHRvIHVzaW5nIGF0TGVhc3QoKSBtZXRob2QuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0IGRvZXMgbm90LlxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgc2l6ZSA9IHNpemUudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoc2l6ZS5sZW5ndGggPiAxICYmIHNpemVbMV0gPT09ICdvbmx5Jykge1xuICAgICAgICBpZiAoc2l6ZVswXSA9PT0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKSkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5hdExlYXN0KHNpemVbMF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1lZGlhIHF1ZXJ5IG9mIGEgYnJlYWtwb2ludC5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gZ2V0LlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gLSBUaGUgbWVkaWEgcXVlcnkgb2YgdGhlIGJyZWFrcG9pbnQsIG9yIGBudWxsYCBpZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0LlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5xdWVyaWVzKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG4gICAgICAgICAgaWYgKHNpemUgPT09IHF1ZXJ5Lm5hbWUpIHJldHVybiBxdWVyeS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZSBieSB0ZXN0aW5nIGV2ZXJ5IGJyZWFrcG9pbnQgYW5kIHJldHVybmluZyB0aGUgbGFzdCBvbmUgdG8gbWF0Y2ggKHRoZSBiaWdnZXN0IG9uZSkuXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBOYW1lIG9mIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQuXG4gICAgICovXG4gICAgX2dldEN1cnJlbnRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWF0Y2hlZDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeS52YWx1ZSkubWF0Y2hlcykge1xuICAgICAgICAgIG1hdGNoZWQgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG1hdGNoZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlciwgd2hpY2ggZmlyZXMgYW4gZXZlbnQgb24gdGhlIHdpbmRvdyB3aGVuZXZlciB0aGUgYnJlYWtwb2ludCBjaGFuZ2VzLlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3dhdGNoZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQod2luZG93KS5vbigncmVzaXplLnpmLm1lZGlhcXVlcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdTaXplID0gX3RoaXMuX2dldEN1cnJlbnRTaXplKCksXG4gICAgICAgICAgICBjdXJyZW50U2l6ZSA9IF90aGlzLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKG5ld1NpemUgIT09IGN1cnJlbnRTaXplKSB7XG4gICAgICAgICAgLy8gQ2hhbmdlIHRoZSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAgICAgICAgX3RoaXMuY3VycmVudCA9IG5ld1NpemU7XG5cbiAgICAgICAgICAvLyBCcm9hZGNhc3QgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZSBvbiB0aGUgd2luZG93XG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIFtuZXdTaXplLCBjdXJyZW50U2l6ZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRm91bmRhdGlvbi5NZWRpYVF1ZXJ5ID0gTWVkaWFRdWVyeTtcblxuICAvLyBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuXG4gIC8vIEF1dGhvcnMgJiBjb3B5cmlnaHQgKGMpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLCBEYXZpZCBLbmlnaHQuIER1YWwgTUlUL0JTRCBsaWNlbnNlXG4gIHdpbmRvdy5tYXRjaE1lZGlhIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxuXG4gICAgdmFyIHN0eWxlTWVkaWEgPSB3aW5kb3cuc3R5bGVNZWRpYSB8fCB3aW5kb3cubWVkaWE7XG5cbiAgICAvLyBGb3IgdGhvc2UgdGhhdCBkb24ndCBzdXBwb3J0IG1hdGNoTWVkaXVtXG4gICAgaWYgKCFzdHlsZU1lZGlhKSB7XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXSxcbiAgICAgICAgICBpbmZvID0gbnVsbDtcblxuICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBzdHlsZS5pZCA9ICdtYXRjaG1lZGlhanMtdGVzdCc7XG5cbiAgICAgIHNjcmlwdCAmJiBzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIHNjcmlwdCk7XG5cbiAgICAgIC8vICdzdHlsZS5jdXJyZW50U3R5bGUnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlJyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICBpbmZvID0gJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdyAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdHlsZSwgbnVsbCkgfHwgc3R5bGUuY3VycmVudFN0eWxlO1xuXG4gICAgICBzdHlsZU1lZGlhID0ge1xuICAgICAgICBtYXRjaE1lZGl1bTogZnVuY3Rpb24gKG1lZGlhKSB7XG4gICAgICAgICAgdmFyIHRleHQgPSAnQG1lZGlhICcgKyBtZWRpYSArICd7ICNtYXRjaG1lZGlhanMtdGVzdCB7IHdpZHRoOiAxcHg7IH0gfSc7XG5cbiAgICAgICAgICAvLyAnc3R5bGUuc3R5bGVTaGVldCcgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnc3R5bGUudGV4dENvbnRlbnQnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgIHJldHVybiBpbmZvLndpZHRoID09PSAnMXB4JztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1lZGlhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzOiBzdHlsZU1lZGlhLm1hdGNoTWVkaXVtKG1lZGlhIHx8ICdhbGwnKSxcbiAgICAgICAgbWVkaWE6IG1lZGlhIHx8ICdhbGwnXG4gICAgICB9O1xuICAgIH07XG4gIH0oKSk7XG5cbiAgLy8gVGhhbmsgeW91OiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZ1xuICBmdW5jdGlvbiBwYXJzZVN0eWxlVG9PYmplY3Qoc3RyKSB7XG4gICAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG5cbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIudHJpbSgpLnNsaWNlKDEsIC0xKTsgLy8gYnJvd3NlcnMgcmUtcXVvdGUgc3RyaW5nIHN0eWxlIHZhbHVlc1xuXG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG5cbiAgICBzdHlsZU9iamVjdCA9IHN0ci5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbiAocmV0LCBwYXJhbSkge1xuICAgICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICAgIHZhciBrZXkgPSBwYXJ0c1swXTtcbiAgICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcbiAgICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG4gICAgICAvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuICAgICAgLy8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuICAgICAgdmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cbiAgICAgIGlmICghcmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0W2tleV0gPSB2YWw7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG4gICAgICAgIHJldFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBGb3VuZGF0aW9uLk1lZGlhUXVlcnkgPSBNZWRpYVF1ZXJ5O1xufShqUXVlcnkpOyIsIi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24gKCQpIHtcblxuICAvKipcbiAgICogTW90aW9uIG1vZHVsZS5cbiAgICogQG1vZHVsZSBmb3VuZGF0aW9uLm1vdGlvblxuICAgKi9cblxuICB2YXIgaW5pdENsYXNzZXMgPSBbJ211aS1lbnRlcicsICdtdWktbGVhdmUnXTtcbiAgdmFyIGFjdGl2ZUNsYXNzZXMgPSBbJ211aS1lbnRlci1hY3RpdmUnLCAnbXVpLWxlYXZlLWFjdGl2ZSddO1xuXG4gIHZhciBNb3Rpb24gPSB7XG4gICAgYW5pbWF0ZUluOiBmdW5jdGlvbiAoZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICAgICAgYW5pbWF0ZSh0cnVlLCBlbGVtZW50LCBhbmltYXRpb24sIGNiKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZU91dDogZnVuY3Rpb24gKGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICAgIGFuaW1hdGUoZmFsc2UsIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBNb3ZlKGR1cmF0aW9uLCBlbGVtLCBmbikge1xuICAgIHZhciBhbmltLFxuICAgICAgICBwcm9nLFxuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCcpO1xuXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICBmbi5hcHBseShlbGVtKTtcbiAgICAgIGVsZW0udHJpZ2dlcignZmluaXNoZWQuemYuYW5pbWF0ZScsIFtlbGVtXSkudHJpZ2dlckhhbmRsZXIoJ2ZpbmlzaGVkLnpmLmFuaW1hdGUnLCBbZWxlbV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmUodHMpIHtcbiAgICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdHM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGFydCwgdHMpO1xuICAgICAgcHJvZyA9IHRzIC0gc3RhcnQ7XG4gICAgICBmbi5hcHBseShlbGVtKTtcblxuICAgICAgaWYgKHByb2cgPCBkdXJhdGlvbikge1xuICAgICAgICBhbmltID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlLCBlbGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltKTtcbiAgICAgICAgZWxlbS50cmlnZ2VyKCdmaW5pc2hlZC56Zi5hbmltYXRlJywgW2VsZW1dKS50cmlnZ2VySGFuZGxlcignZmluaXNoZWQuemYuYW5pbWF0ZScsIFtlbGVtXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW0gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIGFuIGVsZW1lbnQgaW4gb3Igb3V0IHVzaW5nIGEgQ1NTIHRyYW5zaXRpb24gY2xhc3MuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW4gLSBEZWZpbmVzIGlmIHRoZSBhbmltYXRpb24gaXMgaW4gb3Igb3V0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvciBIVE1MIG9iamVjdCB0byBhbmltYXRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5pbWF0aW9uIC0gQ1NTIGNsYXNzIHRvIHVzZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayB0byBydW4gd2hlbiBhbmltYXRpb24gaXMgZmluaXNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhbmltYXRlKGlzSW4sIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICBlbGVtZW50ID0gJChlbGVtZW50KS5lcSgwKTtcblxuICAgIGlmICghZWxlbWVudC5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBpbml0Q2xhc3MgPSBpc0luID8gaW5pdENsYXNzZXNbMF0gOiBpbml0Q2xhc3Nlc1sxXTtcbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0luID8gYWN0aXZlQ2xhc3Nlc1swXSA6IGFjdGl2ZUNsYXNzZXNbMV07XG5cbiAgICAvLyBTZXQgdXAgdGhlIGFuaW1hdGlvblxuICAgIHJlc2V0KCk7XG5cbiAgICBlbGVtZW50LmFkZENsYXNzKGFuaW1hdGlvbikuY3NzKCd0cmFuc2l0aW9uJywgJ25vbmUnKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmFkZENsYXNzKGluaXRDbGFzcyk7XG4gICAgICBpZiAoaXNJbikgZWxlbWVudC5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBlbGVtZW50LmNzcygndHJhbnNpdGlvbicsICcnKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgYW5pbWF0aW9uIHdoZW4gaXQgZmluaXNoZXNcbiAgICBlbGVtZW50Lm9uZShGb3VuZGF0aW9uLnRyYW5zaXRpb25lbmQoZWxlbWVudCksIGZpbmlzaCk7XG5cbiAgICAvLyBIaWRlcyB0aGUgZWxlbWVudCAoZm9yIG91dCBhbmltYXRpb25zKSwgcmVzZXRzIHRoZSBlbGVtZW50LCBhbmQgcnVucyBhIGNhbGxiYWNrXG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKCFpc0luKSBlbGVtZW50LmhpZGUoKTtcbiAgICAgIHJlc2V0KCk7XG4gICAgICBpZiAoY2IpIGNiLmFwcGx5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0cyB0cmFuc2l0aW9ucyBhbmQgcmVtb3ZlcyBtb3Rpb24tc3BlY2lmaWMgY2xhc3Nlc1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgZWxlbWVudFswXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhpbml0Q2xhc3MgKyAnICcgKyBhY3RpdmVDbGFzcyArICcgJyArIGFuaW1hdGlvbik7XG4gICAgfVxuICB9XG5cbiAgRm91bmRhdGlvbi5Nb3ZlID0gTW92ZTtcbiAgRm91bmRhdGlvbi5Nb3Rpb24gPSBNb3Rpb247XG59KGpRdWVyeSk7IiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbmZ1bmN0aW9uIFRpbWVyKGVsZW0sIG9wdGlvbnMsIGNiKSB7XG4gIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sLy9vcHRpb25zIGlzIGFuIG9iamVjdCBmb3IgZWFzaWx5IGFkZGluZyBmZWF0dXJlcyBsYXRlci5cbiAgICAgIG5hbWVTcGFjZSA9IE9iamVjdC5rZXlzKGVsZW0uZGF0YSgpKVswXSB8fCAndGltZXInLFxuICAgICAgcmVtYWluID0gLTEsXG4gICAgICBzdGFydCxcbiAgICAgIHRpbWVyO1xuXG4gIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICB0aGlzLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZW1haW4gPSAtMTtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgLy8gaWYoIWVsZW0uZGF0YSgncGF1c2VkJykpeyByZXR1cm4gZmFsc2U7IH0vL21heWJlIGltcGxlbWVudCB0aGlzIHNhbml0eSBjaGVjayBpZiB1c2VkIGZvciBvdGhlciB0aGluZ3MuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByZW1haW4gPSByZW1haW4gPD0gMCA/IGR1cmF0aW9uIDogcmVtYWluO1xuICAgIGVsZW0uZGF0YSgncGF1c2VkJywgZmFsc2UpO1xuICAgIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGlmKG9wdGlvbnMuaW5maW5pdGUpe1xuICAgICAgICBfdGhpcy5yZXN0YXJ0KCk7Ly9yZXJ1biB0aGUgdGltZXIuXG4gICAgICB9XG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgICB9LCByZW1haW4pO1xuICAgIGVsZW0udHJpZ2dlcihgdGltZXJzdGFydC56Zi4ke25hbWVTcGFjZX1gKTtcbiAgfVxuXG4gIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAvL2lmKGVsZW0uZGF0YSgncGF1c2VkJykpeyByZXR1cm4gZmFsc2U7IH0vL21heWJlIGltcGxlbWVudCB0aGlzIHNhbml0eSBjaGVjayBpZiB1c2VkIGZvciBvdGhlciB0aGluZ3MuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBlbGVtLmRhdGEoJ3BhdXNlZCcsIHRydWUpO1xuICAgIHZhciBlbmQgPSBEYXRlLm5vdygpO1xuICAgIHJlbWFpbiA9IHJlbWFpbiAtIChlbmQgLSBzdGFydCk7XG4gICAgZWxlbS50cmlnZ2VyKGB0aW1lcnBhdXNlZC56Zi4ke25hbWVTcGFjZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnMgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIGltYWdlcyBhcmUgZnVsbHkgbG9hZGVkLlxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlcyAtIEltYWdlKHMpIHRvIGNoZWNrIGlmIGxvYWRlZC5cbiAqIEBwYXJhbSB7RnVuY30gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLlxuICovXG5mdW5jdGlvbiBvbkltYWdlc0xvYWRlZChpbWFnZXMsIGNhbGxiYWNrKXtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgdW5sb2FkZWQgPSBpbWFnZXMubGVuZ3RoO1xuXG4gIGlmICh1bmxvYWRlZCA9PT0gMCkge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxuICBpbWFnZXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyBDaGVjayBpZiBpbWFnZSBpcyBsb2FkZWRcbiAgICBpZiAodGhpcy5jb21wbGV0ZSB8fCAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB8fCAodGhpcy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSkge1xuICAgICAgc2luZ2xlSW1hZ2VMb2FkZWQoKTtcbiAgICB9XG4gICAgLy8gRm9yY2UgbG9hZCB0aGUgaW1hZ2VcbiAgICBlbHNlIHtcbiAgICAgIC8vIGZpeCBmb3IgSUUuIFNlZSBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9maXhpbmctbG9hZC1pbi1pZS1mb3ItY2FjaGVkLWltYWdlcy9cbiAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBzcmMgKyAoc3JjLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkpO1xuICAgICAgJCh0aGlzKS5vbmUoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2luZ2xlSW1hZ2VMb2FkZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2luZ2xlSW1hZ2VMb2FkZWQoKSB7XG4gICAgdW5sb2FkZWQtLTtcbiAgICBpZiAodW5sb2FkZWQgPT09IDApIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbkZvdW5kYXRpb24uVGltZXIgPSBUaW1lcjtcbkZvdW5kYXRpb24ub25JbWFnZXNMb2FkZWQgPSBvbkltYWdlc0xvYWRlZDtcblxufShqUXVlcnkpO1xuIiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqV29yayBpbnNwaXJlZCBieSBtdWx0aXBsZSBqcXVlcnkgc3dpcGUgcGx1Z2lucyoqXG4vLyoqRG9uZSBieSBZb2hhaSBBcmFyYXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4oZnVuY3Rpb24oJCkge1xuXG4gICQuc3BvdFN3aXBlID0ge1xuICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgZW5hYmxlZDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIHByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgICBtb3ZlVGhyZXNob2xkOiA3NSxcbiAgICB0aW1lVGhyZXNob2xkOiAyMDBcbiAgfTtcblxuICB2YXIgICBzdGFydFBvc1gsXG4gICAgICAgIHN0YXJ0UG9zWSxcbiAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgaXNNb3ZpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIC8vICBhbGVydCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoJC5zcG90U3dpcGUucHJldmVudERlZmF1bHQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgaWYoaXNNb3ZpbmcpIHtcbiAgICAgIHZhciB4ID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgdmFyIHkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICB2YXIgZHggPSBzdGFydFBvc1ggLSB4O1xuICAgICAgdmFyIGR5ID0gc3RhcnRQb3NZIC0geTtcbiAgICAgIHZhciBkaXI7XG4gICAgICBlbGFwc2VkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lO1xuICAgICAgaWYoTWF0aC5hYnMoZHgpID49ICQuc3BvdFN3aXBlLm1vdmVUaHJlc2hvbGQgJiYgZWxhcHNlZFRpbWUgPD0gJC5zcG90U3dpcGUudGltZVRocmVzaG9sZCkge1xuICAgICAgICBkaXIgPSBkeCA+IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSBpZihNYXRoLmFicyhkeSkgPj0gJC5zcG90U3dpcGUubW92ZVRocmVzaG9sZCAmJiBlbGFwc2VkVGltZSA8PSAkLnNwb3RTd2lwZS50aW1lVGhyZXNob2xkKSB7XG4gICAgICAvLyAgIGRpciA9IGR5ID4gMCA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAvLyB9XG4gICAgICBpZihkaXIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblRvdWNoRW5kLmNhbGwodGhpcyk7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignc3dpcGUnLCBkaXIpLnRyaWdnZXIoYHN3aXBlJHtkaXJ9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBzdGFydFBvc1ggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBzdGFydFBvc1kgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICBpc01vdmluZyA9IHRydWU7XG4gICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgJiYgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICB9XG5cbiAgJC5ldmVudC5zcGVjaWFsLnN3aXBlID0geyBzZXR1cDogaW5pdCB9O1xuXG4gICQuZWFjaChbJ2xlZnQnLCAndXAnLCAnZG93bicsICdyaWdodCddLCBmdW5jdGlvbiAoKSB7XG4gICAgJC5ldmVudC5zcGVjaWFsW2Bzd2lwZSR7dGhpc31gXSA9IHsgc2V0dXA6IGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLm9uKCdzd2lwZScsICQubm9vcCk7XG4gICAgfSB9O1xuICB9KTtcbn0pKGpRdWVyeSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTWV0aG9kIGZvciBhZGRpbmcgcHN1ZWRvIGRyYWcgZXZlbnRzIHRvIGVsZW1lbnRzICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4hZnVuY3Rpb24oJCl7XG4gICQuZm4uYWRkVG91Y2ggPSBmdW5jdGlvbigpe1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLGVsKXtcbiAgICAgICQoZWwpLmJpbmQoJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsJyxmdW5jdGlvbigpe1xuICAgICAgICAvL3dlIHBhc3MgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCBiZWNhdXNlIHRoZSBqUXVlcnkgZXZlbnRcbiAgICAgICAgLy9vYmplY3QgaXMgbm9ybWFsaXplZCB0byB3M2Mgc3BlY3MgYW5kIGRvZXMgbm90IHByb3ZpZGUgdGhlIFRvdWNoTGlzdFxuICAgICAgICBoYW5kbGVUb3VjaChldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBoYW5kbGVUb3VjaCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgZmlyc3QgPSB0b3VjaGVzWzBdLFxuICAgICAgICAgIGV2ZW50VHlwZXMgPSB7XG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgIHRvdWNobW92ZTogJ21vdXNlbW92ZScsXG4gICAgICAgICAgICB0b3VjaGVuZDogJ21vdXNldXAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlID0gZXZlbnRUeXBlc1tldmVudC50eXBlXSxcbiAgICAgICAgICBzaW11bGF0ZWRFdmVudFxuICAgICAgICA7XG5cbiAgICAgIGlmKCdNb3VzZUV2ZW50JyBpbiB3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5Nb3VzZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNpbXVsYXRlZEV2ZW50ID0gbmV3IHdpbmRvdy5Nb3VzZUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlLFxuICAgICAgICAgICdzY3JlZW5YJzogZmlyc3Quc2NyZWVuWCxcbiAgICAgICAgICAnc2NyZWVuWSc6IGZpcnN0LnNjcmVlblksXG4gICAgICAgICAgJ2NsaWVudFgnOiBmaXJzdC5jbGllbnRYLFxuICAgICAgICAgICdjbGllbnRZJzogZmlyc3QuY2xpZW50WVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpbXVsYXRlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQuaW5pdE1vdXNlRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCBmaXJzdC5zY3JlZW5YLCBmaXJzdC5zY3JlZW5ZLCBmaXJzdC5jbGllbnRYLCBmaXJzdC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMC8qbGVmdCovLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIGZpcnN0LnRhcmdldC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlZEV2ZW50KTtcbiAgICB9O1xuICB9O1xufShqUXVlcnkpO1xuXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8qKkZyb20gdGhlIGpRdWVyeSBNb2JpbGUgTGlicmFyeSoqXG4vLyoqbmVlZCB0byByZWNyZWF0ZSBmdW5jdGlvbmFsaXR5Kipcbi8vKiphbmQgdHJ5IHRvIGltcHJvdmUgaWYgcG9zc2libGUqKlxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8qIFJlbW92aW5nIHRoZSBqUXVlcnkgZnVuY3Rpb24gKioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbihmdW5jdGlvbiggJCwgd2luZG93LCB1bmRlZmluZWQgKSB7XG5cblx0dmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICksXG5cdFx0Ly8gc3VwcG9ydFRvdWNoID0gJC5tb2JpbGUuc3VwcG9ydC50b3VjaCxcblx0XHR0b3VjaFN0YXJ0RXZlbnQgPSAndG91Y2hzdGFydCcvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2hzdGFydFwiIDogXCJtb3VzZWRvd25cIixcblx0XHR0b3VjaFN0b3BFdmVudCA9ICd0b3VjaGVuZCcvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2hlbmRcIiA6IFwibW91c2V1cFwiLFxuXHRcdHRvdWNoTW92ZUV2ZW50ID0gJ3RvdWNobW92ZScvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2htb3ZlXCIgOiBcIm1vdXNlbW92ZVwiO1xuXG5cdC8vIHNldHVwIG5ldyBldmVudCBzaG9ydGN1dHNcblx0JC5lYWNoKCAoIFwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgXCIgK1xuXHRcdFwic3dpcGUgc3dpcGVsZWZ0IHN3aXBlcmlnaHRcIiApLnNwbGl0KCBcIiBcIiApLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHRcdCQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdHJldHVybiBmbiA/IHRoaXMuYmluZCggbmFtZSwgZm4gKSA6IHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHRcdH07XG5cblx0XHQvLyBqUXVlcnkgPCAxLjhcblx0XHRpZiAoICQuYXR0ckZuICkge1xuXHRcdFx0JC5hdHRyRm5bIG5hbWUgXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB0cmlnZ2VyQ3VzdG9tRXZlbnQoIG9iaiwgZXZlbnRUeXBlLCBldmVudCwgYnViYmxlICkge1xuXHRcdHZhciBvcmlnaW5hbFR5cGUgPSBldmVudC50eXBlO1xuXHRcdGV2ZW50LnR5cGUgPSBldmVudFR5cGU7XG5cdFx0aWYgKCBidWJibGUgKSB7XG5cdFx0XHQkLmV2ZW50LnRyaWdnZXIoIGV2ZW50LCB1bmRlZmluZWQsIG9iaiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLmV2ZW50LmRpc3BhdGNoLmNhbGwoIG9iaiwgZXZlbnQgKTtcblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IG9yaWdpbmFsVHlwZTtcblx0fVxuXG5cdC8vIGFsc28gaGFuZGxlcyB0YXBob2xkXG5cblx0Ly8gQWxzbyBoYW5kbGVzIHN3aXBlbGVmdCwgc3dpcGVyaWdodFxuXHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUgPSB7XG5cblx0XHQvLyBNb3JlIHRoYW4gdGhpcyBob3Jpem9udGFsIGRpc3BsYWNlbWVudCwgYW5kIHdlIHdpbGwgc3VwcHJlc3Mgc2Nyb2xsaW5nLlxuXHRcdHNjcm9sbFN1cHJlc3Npb25UaHJlc2hvbGQ6IDMwLFxuXG5cdFx0Ly8gTW9yZSB0aW1lIHRoYW4gdGhpcywgYW5kIGl0IGlzbid0IGEgc3dpcGUuXG5cdFx0ZHVyYXRpb25UaHJlc2hvbGQ6IDEwMDAsXG5cblx0XHQvLyBTd2lwZSBob3Jpem9udGFsIGRpc3BsYWNlbWVudCBtdXN0IGJlIG1vcmUgdGhhbiB0aGlzLlxuXHRcdGhvcml6b250YWxEaXN0YW5jZVRocmVzaG9sZDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPj0gMiA/IDE1IDogMzAsXG5cblx0XHQvLyBTd2lwZSB2ZXJ0aWNhbCBkaXNwbGFjZW1lbnQgbXVzdCBiZSBsZXNzIHRoYW4gdGhpcy5cblx0XHR2ZXJ0aWNhbERpc3RhbmNlVGhyZXNob2xkOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+PSAyID8gMTUgOiAzMCxcblxuXHRcdGdldExvY2F0aW9uOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdFx0dmFyIHdpblBhZ2VYID0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHR3aW5QYWdlWSA9IHdpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdFx0eCA9IGV2ZW50LmNsaWVudFgsXG5cdFx0XHRcdHkgPSBldmVudC5jbGllbnRZO1xuXG5cdFx0XHRpZiAoIGV2ZW50LnBhZ2VZID09PSAwICYmIE1hdGguZmxvb3IoIHkgKSA+IE1hdGguZmxvb3IoIGV2ZW50LnBhZ2VZICkgfHxcblx0XHRcdFx0ZXZlbnQucGFnZVggPT09IDAgJiYgTWF0aC5mbG9vciggeCApID4gTWF0aC5mbG9vciggZXZlbnQucGFnZVggKSApIHtcblxuXHRcdFx0XHQvLyBpT1M0IGNsaWVudFgvY2xpZW50WSBoYXZlIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBoYXZlIGJlZW5cblx0XHRcdFx0Ly8gaW4gcGFnZVgvcGFnZVkuIFdoaWxlIHBhZ2VYL3BhZ2UvIGhhdmUgdGhlIHZhbHVlIDBcblx0XHRcdFx0eCA9IHggLSB3aW5QYWdlWDtcblx0XHRcdFx0eSA9IHkgLSB3aW5QYWdlWTtcblx0XHRcdH0gZWxzZSBpZiAoIHkgPCAoIGV2ZW50LnBhZ2VZIC0gd2luUGFnZVkpIHx8IHggPCAoIGV2ZW50LnBhZ2VYIC0gd2luUGFnZVggKSApIHtcblxuXHRcdFx0XHQvLyBTb21lIEFuZHJvaWQgYnJvd3NlcnMgaGF2ZSB0b3RhbGx5IGJvZ3VzIHZhbHVlcyBmb3IgY2xpZW50WC9ZXG5cdFx0XHRcdC8vIHdoZW4gc2Nyb2xsaW5nL3pvb21pbmcgYSBwYWdlLiBEZXRlY3RhYmxlIHNpbmNlIGNsaWVudFgvY2xpZW50WVxuXHRcdFx0XHQvLyBzaG91bGQgbmV2ZXIgYmUgc21hbGxlciB0aGFuIHBhZ2VYL3BhZ2VZIG1pbnVzIHBhZ2Ugc2Nyb2xsXG5cdFx0XHRcdHggPSBldmVudC5wYWdlWCAtIHdpblBhZ2VYO1xuXHRcdFx0XHR5ID0gZXZlbnQucGFnZVkgLSB3aW5QYWdlWTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogeCxcblx0XHRcdFx0eTogeVxuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBkYXRhID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzID9cblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbIDAgXSA6IGV2ZW50LFxuXHRcdFx0XHRsb2NhdGlvbiA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5nZXRMb2NhdGlvbiggZGF0YSApO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWU6ICggbmV3IERhdGUoKSApLmdldFRpbWUoKSxcblx0XHRcdFx0XHRcdGNvb3JkczogWyBsb2NhdGlvbi54LCBsb2NhdGlvbi55IF0sXG5cdFx0XHRcdFx0XHRvcmlnaW46ICQoIGV2ZW50LnRhcmdldCApXG5cdFx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIGRhdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgP1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1sgMCBdIDogZXZlbnQsXG5cdFx0XHRcdGxvY2F0aW9uID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmdldExvY2F0aW9uKCBkYXRhICk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZTogKCBuZXcgRGF0ZSgpICkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdFx0Y29vcmRzOiBbIGxvY2F0aW9uLngsIGxvY2F0aW9uLnkgXVxuXHRcdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdGhhbmRsZVN3aXBlOiBmdW5jdGlvbiggc3RhcnQsIHN0b3AsIHRoaXNPYmplY3QsIG9yaWdUYXJnZXQgKSB7XG5cdFx0XHRpZiAoIHN0b3AudGltZSAtIHN0YXJ0LnRpbWUgPCAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZHVyYXRpb25UaHJlc2hvbGQgJiZcblx0XHRcdFx0TWF0aC5hYnMoIHN0YXJ0LmNvb3Jkc1sgMCBdIC0gc3RvcC5jb29yZHNbIDAgXSApID4gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmhvcml6b250YWxEaXN0YW5jZVRocmVzaG9sZCAmJlxuXHRcdFx0XHRNYXRoLmFicyggc3RhcnQuY29vcmRzWyAxIF0gLSBzdG9wLmNvb3Jkc1sgMSBdICkgPCAkLmV2ZW50LnNwZWNpYWwuc3dpcGUudmVydGljYWxEaXN0YW5jZVRocmVzaG9sZCApIHtcblx0XHRcdFx0dmFyIGRpcmVjdGlvbiA9IHN0YXJ0LmNvb3Jkc1swXSA+IHN0b3AuY29vcmRzWyAwIF0gPyBcInN3aXBlbGVmdFwiIDogXCJzd2lwZXJpZ2h0XCI7XG5cblx0XHRcdFx0dHJpZ2dlckN1c3RvbUV2ZW50KCB0aGlzT2JqZWN0LCBcInN3aXBlXCIsICQuRXZlbnQoIFwic3dpcGVcIiwgeyB0YXJnZXQ6IG9yaWdUYXJnZXQsIHN3aXBlc3RhcnQ6IHN0YXJ0LCBzd2lwZXN0b3A6IHN0b3AgfSksIHRydWUgKTtcblx0XHRcdFx0dHJpZ2dlckN1c3RvbUV2ZW50KCB0aGlzT2JqZWN0LCBkaXJlY3Rpb24sJC5FdmVudCggZGlyZWN0aW9uLCB7IHRhcmdldDogb3JpZ1RhcmdldCwgc3dpcGVzdGFydDogc3RhcnQsIHN3aXBlc3RvcDogc3RvcCB9ICksIHRydWUgKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9LFxuXG5cdFx0Ly8gVGhpcyBzZXJ2ZXMgYXMgYSBmbGFnIHRvIGVuc3VyZSB0aGF0IGF0IG1vc3Qgb25lIHN3aXBlIGV2ZW50IGV2ZW50IGlzXG5cdFx0Ly8gaW4gd29yayBhdCBhbnkgZ2l2ZW4gdGltZVxuXHRcdGV2ZW50SW5Qcm9ncmVzczogZmFsc2UsXG5cblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZXZlbnRzLFxuXHRcdFx0XHR0aGlzT2JqZWN0ID0gdGhpcyxcblx0XHRcdFx0JHRoaXMgPSAkKCB0aGlzT2JqZWN0ICksXG5cdFx0XHRcdGNvbnRleHQgPSB7fTtcblxuXHRcdFx0Ly8gUmV0cmlldmUgdGhlIGV2ZW50cyBkYXRhIGZvciB0aGlzIGVsZW1lbnQgYW5kIGFkZCB0aGUgc3dpcGUgY29udGV4dFxuXHRcdFx0ZXZlbnRzID0gJC5kYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiApO1xuXHRcdFx0aWYgKCAhZXZlbnRzICkge1xuXHRcdFx0XHRldmVudHMgPSB7IGxlbmd0aDogMCB9O1xuXHRcdFx0XHQkLmRhdGEoIHRoaXMsIFwibW9iaWxlLWV2ZW50c1wiLCBldmVudHMgKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50cy5sZW5ndGgrKztcblx0XHRcdGV2ZW50cy5zd2lwZSA9IGNvbnRleHQ7XG5cblx0XHRcdGNvbnRleHQuc3RhcnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0Ly8gQmFpbCBpZiB3ZSdyZSBhbHJlYWR5IHdvcmtpbmcgb24gYSBzd2lwZSBldmVudFxuXHRcdFx0XHRpZiAoICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG5cdFx0XHRcdHZhciBzdG9wLFxuXHRcdFx0XHRcdHN0YXJ0ID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLnN0YXJ0KCBldmVudCApLFxuXHRcdFx0XHRcdG9yaWdUYXJnZXQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRcdFx0ZW1pdHRlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdGNvbnRleHQubW92ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0XHRpZiAoICFzdGFydCB8fCBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzdG9wID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLnN0b3AoIGV2ZW50ICk7XG5cdFx0XHRcdFx0aWYgKCAhZW1pdHRlZCApIHtcblx0XHRcdFx0XHRcdGVtaXR0ZWQgPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuaGFuZGxlU3dpcGUoIHN0YXJ0LCBzdG9wLCB0aGlzT2JqZWN0LCBvcmlnVGFyZ2V0ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGVtaXR0ZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvbnRleHQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXh0IHN3aXBlIGV2ZW50XG5cdFx0XHRcdFx0XHRcdCQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gcHJldmVudCBzY3JvbGxpbmdcblx0XHRcdFx0XHRpZiAoIE1hdGguYWJzKCBzdGFydC5jb29yZHNbIDAgXSAtIHN0b3AuY29vcmRzWyAwIF0gKSA+ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5zY3JvbGxTdXByZXNzaW9uVGhyZXNob2xkICkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29udGV4dC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRlbWl0dGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvbnRleHQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXh0IHN3aXBlIGV2ZW50XG5cdFx0XHRcdFx0XHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZXZlbnRJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKCB0b3VjaE1vdmVFdmVudCwgY29udGV4dC5tb3ZlICk7XG5cdFx0XHRcdFx0XHRjb250ZXh0Lm1vdmUgPSBudWxsO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdCRkb2N1bWVudC5vbiggdG91Y2hNb3ZlRXZlbnQsIGNvbnRleHQubW92ZSApXG5cdFx0XHRcdFx0Lm9uZSggdG91Y2hTdG9wRXZlbnQsIGNvbnRleHQuc3RvcCApO1xuXHRcdFx0fTtcblx0XHRcdCR0aGlzLm9uKCB0b3VjaFN0YXJ0RXZlbnQsIGNvbnRleHQuc3RhcnQgKTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGV2ZW50cywgY29udGV4dDtcblxuXHRcdFx0ZXZlbnRzID0gJC5kYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiApO1xuXHRcdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBldmVudHMuc3dpcGU7XG5cdFx0XHRcdGRlbGV0ZSBldmVudHMuc3dpcGU7XG5cdFx0XHRcdGV2ZW50cy5sZW5ndGgtLTtcblx0XHRcdFx0aWYgKCBldmVudHMubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdCQucmVtb3ZlRGF0YSggdGhpcywgXCJtb2JpbGUtZXZlbnRzXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGNvbnRleHQgKSB7XG5cdFx0XHRcdGlmICggY29udGV4dC5zdGFydCApIHtcblx0XHRcdFx0XHQkKCB0aGlzICkub2ZmKCB0b3VjaFN0YXJ0RXZlbnQsIGNvbnRleHQuc3RhcnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGNvbnRleHQubW92ZSApIHtcblx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKCB0b3VjaE1vdmVFdmVudCwgY29udGV4dC5tb3ZlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBjb250ZXh0LnN0b3AgKSB7XG5cdFx0XHRcdFx0JGRvY3VtZW50Lm9mZiggdG91Y2hTdG9wRXZlbnQsIGNvbnRleHQuc3RvcCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHQkLmVhY2goe1xuXHRcdHN3aXBlbGVmdDogXCJzd2lwZS5sZWZ0XCIsXG5cdFx0c3dpcGVyaWdodDogXCJzd2lwZS5yaWdodFwiXG5cdH0sIGZ1bmN0aW9uKCBldmVudCwgc291cmNlRXZlbnQgKSB7XG5cblx0XHQkLmV2ZW50LnNwZWNpYWxbIGV2ZW50IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5iaW5kKCBzb3VyY2VFdmVudCwgJC5ub29wICk7XG5cdFx0XHR9LFxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCB0aGlzICkudW5iaW5kKCBzb3VyY2VFdmVudCApO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufSkoIGpRdWVyeSwgdGhpcyApO1xuKi9cbiIsIi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJlZml4ZXNbaV0gKyAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbcHJlZml4ZXNbaV0gKyAnTXV0YXRpb25PYnNlcnZlciddO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0oKTtcblxuICB2YXIgdHJpZ2dlcnMgPSBmdW5jdGlvbiAoZWwsIHR5cGUpIHtcbiAgICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICQoJyMnICsgaWQpW3R5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXSh0eXBlICsgJy56Zi50cmlnZ2VyJywgW2VsXSk7XG4gICAgfSk7XG4gIH07XG4gIC8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgZnVuY3Rpb24gKCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG4gIH0pO1xuXG4gIC8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4gIC8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuICAkKGRvY3VtZW50KS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zYWJsZV0nLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmIChhbmltYXRpb24gIT09ICcnKSB7XG4gICAgICBGb3VuZGF0aW9uLk1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSk7XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKCcjJyArIGlkKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9KTtcblxuICAvKipcbiAgKiBGaXJlcyBvbmNlIGFmdGVyIGFsbCBvdGhlciBzY3JpcHRzIGhhdmUgbG9hZGVkXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKi9cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGNoZWNrTGlzdGVuZXJzKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrTGlzdGVuZXJzKCkge1xuICAgIGV2ZW50c0xpc3RlbmVyKCk7XG4gICAgcmVzaXplTGlzdGVuZXIoKTtcbiAgICBzY3JvbGxMaXN0ZW5lcigpO1xuICAgIG11dGF0ZUxpc3RlbmVyKCk7XG4gICAgY2xvc2VtZUxpc3RlbmVyKCk7XG4gIH1cblxuICAvLyoqKioqKioqIG9ubHkgZmlyZXMgdGhpcyBmdW5jdGlvbiBvbmNlIG9uIGxvYWQsIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHdhdGNoICoqKioqKioqXG4gIGZ1bmN0aW9uIGNsb3NlbWVMaXN0ZW5lcihwbHVnaW5OYW1lKSB7XG4gICAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgICBpZiAocGx1Z2luTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoeWV0aUJveGVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdjbG9zZW1lLnpmLicgKyBuYW1lO1xuICAgICAgfSkuam9pbignICcpO1xuXG4gICAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBmdW5jdGlvbiAoZSwgcGx1Z2luSWQpIHtcbiAgICAgICAgdmFyIHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgICAgIHZhciBwbHVnaW5zID0gJCgnW2RhdGEtJyArIHBsdWdpbiArICddJykubm90KCdbZGF0YS15ZXRpLWJveD1cIicgKyBwbHVnaW5JZCArICdcIl0nKTtcblxuICAgICAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGRlYm91bmNlKSB7XG4gICAgdmFyIHRpbWVyID0gdm9pZCAwLFxuICAgICAgICAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gICAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS56Zi50cmlnZ2VyJykub24oJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICBpZiAoIU11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAgICAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgICAgICAgfSwgZGVib3VuY2UgfHwgMTApOyAvL2RlZmF1bHQgdGltZSB0byBlbWl0IHJlc2l6ZSBldmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsTGlzdGVuZXIoZGVib3VuY2UpIHtcbiAgICB2YXIgdGltZXIgPSB2b2lkIDAsXG4gICAgICAgICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLnpmLnRyaWdnZXInKS5vbignc2Nyb2xsLnpmLnRyaWdnZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIGlmICghTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgLy9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICAgICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICAgICAgICB9LCBkZWJvdW5jZSB8fCAxMCk7IC8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtdXRhdGVMaXN0ZW5lcihkZWJvdW5jZSkge1xuICAgIHZhciAkbm9kZXMgPSAkKCdbZGF0YS1tdXRhdGVdJyk7XG4gICAgaWYgKCRub2Rlcy5sZW5ndGggJiYgTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIG11dGF0ZSBldmVudFxuICAgICAgLy9ubyBJRSA5IG9yIDEwXG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50c0xpc3RlbmVyKCkge1xuICAgIGlmICghTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuXG4gICAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsIFwibXV0YXRlXCIpO1xuICAgICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLCBcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gW1BIXVxuICAvLyBGb3VuZGF0aW9uLkNoZWNrV2F0Y2hlcnMgPSBjaGVja1dhdGNoZXJzO1xuICBGb3VuZGF0aW9uLklIZWFyWW91ID0gY2hlY2tMaXN0ZW5lcnM7XG4gIC8vIEZvdW5kYXRpb24uSVNlZVlvdSA9IHNjcm9sbExpc3RlbmVyO1xuICAvLyBGb3VuZGF0aW9uLklGZWVsWW91ID0gY2xvc2VtZUxpc3RlbmVyO1xufShqUXVlcnkpO1xuXG4vLyBmdW5jdGlvbiBkb21NdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlKSB7XG4vLyAgIC8vICEhISBUaGlzIGlzIGNvbWluZyBzb29uIGFuZCBuZWVkcyBtb3JlIHdvcms7IG5vdCBhY3RpdmUgICEhISAvL1xuLy8gICB2YXIgdGltZXIsXG4vLyAgIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbXV0YXRlXScpO1xuLy8gICAvL1xuLy8gICBpZiAobm9kZXMubGVuZ3RoKSB7XG4vLyAgICAgLy8gdmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIC8vICAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4vLyAgICAgLy8gICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBpZiAocHJlZml4ZXNbaV0gKyAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4vLyAgICAgLy8gICAgICAgcmV0dXJuIHdpbmRvd1twcmVmaXhlc1tpXSArICdNdXRhdGlvbk9ic2VydmVyJ107XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyAgIHJldHVybiBmYWxzZTtcbi8vICAgICAvLyB9KCkpO1xuLy9cbi8vXG4vLyAgICAgLy9mb3IgdGhlIGJvZHksIHdlIG5lZWQgdG8gbGlzdGVuIGZvciBhbGwgY2hhbmdlcyBlZmZlY3RpbmcgdGhlIHN0eWxlIGFuZCBjbGFzcyBhdHRyaWJ1dGVzXG4vLyAgICAgdmFyIGJvZHlPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGJvZHlNdXRhdGlvbik7XG4vLyAgICAgYm9keU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOnRydWUsIGF0dHJpYnV0ZUZpbHRlcjpbXCJzdHlsZVwiLCBcImNsYXNzXCJdfSk7XG4vL1xuLy9cbi8vICAgICAvL2JvZHkgY2FsbGJhY2tcbi8vICAgICBmdW5jdGlvbiBib2R5TXV0YXRpb24obXV0YXRlKSB7XG4vLyAgICAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgbXV0YXRpb24gZXZlbnRcbi8vICAgICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4vL1xuLy8gICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuLy8gICAgICAgICAkKCdbZGF0YS1tdXRhdGVdJykuYXR0cignZGF0YS1ldmVudHMnLFwibXV0YXRlXCIpO1xuLy8gICAgICAgfSwgZGVib3VuY2UgfHwgMTUwKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iLCIoZnVuY3Rpb24oKSB7ICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTsgfSgpKTtcbiIsIjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Nb3Rpb25VSSA9IGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCQpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gUG9seWZpbGwgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIURhdGUubm93KVxuICAgIERhdGUubm93ID0gZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcblxuICB2YXIgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2kpIHtcbiAgICAgIHZhciB2cCA9IHZlbmRvcnNbaV07XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZwKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICh3aW5kb3dbdnArJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2cCsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10pO1xuICB9XG4gIGlmICgvaVAoYWR8aG9uZXxvZCkuKk9TIDYvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgfHwgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaW1lIC0gbm93KTtcbiAgICB9O1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcbiAgfVxufSkoKTtcblxudmFyIGluaXRDbGFzc2VzICAgPSBbJ211aS1lbnRlcicsICdtdWktbGVhdmUnXTtcbnZhciBhY3RpdmVDbGFzc2VzID0gWydtdWktZW50ZXItYWN0aXZlJywgJ211aS1sZWF2ZS1hY3RpdmUnXTtcblxuLy8gRmluZCB0aGUgcmlnaHQgXCJ0cmFuc2l0aW9uZW5kXCIgZXZlbnQgZm9yIHRoaXMgYnJvd3NlclxudmFyIGVuZEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgJ01velRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ290cmFuc2l0aW9uZW5kJ1xuICB9XG4gIHZhciBlbGVtID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIHQgaW4gdHJhbnNpdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGVsZW0uc3R5bGVbdF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59KSgpO1xuXG5mdW5jdGlvbiBhbmltYXRlKGlzSW4sIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgZWxlbWVudCA9ICQoZWxlbWVudCkuZXEoMCk7XG5cbiAgaWYgKCFlbGVtZW50Lmxlbmd0aCkgcmV0dXJuO1xuXG4gIGlmIChlbmRFdmVudCA9PT0gbnVsbCkge1xuICAgIGlzSW4gPyBlbGVtZW50LnNob3coKSA6IGVsZW1lbnQuaGlkZSgpO1xuICAgIGNiKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGluaXRDbGFzcyA9IGlzSW4gPyBpbml0Q2xhc3Nlc1swXSA6IGluaXRDbGFzc2VzWzFdO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0luID8gYWN0aXZlQ2xhc3Nlc1swXSA6IGFjdGl2ZUNsYXNzZXNbMV07XG5cbiAgLy8gU2V0IHVwIHRoZSBhbmltYXRpb25cbiAgcmVzZXQoKTtcbiAgZWxlbWVudC5hZGRDbGFzcyhhbmltYXRpb24pO1xuICBlbGVtZW50LmNzcygndHJhbnNpdGlvbicsICdub25lJyk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICBlbGVtZW50LmFkZENsYXNzKGluaXRDbGFzcyk7XG4gICAgaWYgKGlzSW4pIGVsZW1lbnQuc2hvdygpO1xuICB9KTtcblxuICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICBlbGVtZW50WzBdLm9mZnNldFdpZHRoO1xuICAgIGVsZW1lbnQuY3NzKCd0cmFuc2l0aW9uJywgJycpO1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICB9KTtcblxuICAvLyBDbGVhbiB1cCB0aGUgYW5pbWF0aW9uIHdoZW4gaXQgZmluaXNoZXNcbiAgZWxlbWVudC5vbmUoJ3RyYW5zaXRpb25lbmQnLCBmaW5pc2gpO1xuXG4gIC8vIEhpZGVzIHRoZSBlbGVtZW50IChmb3Igb3V0IGFuaW1hdGlvbnMpLCByZXNldHMgdGhlIGVsZW1lbnQsIGFuZCBydW5zIGEgY2FsbGJhY2tcbiAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgIGlmICghaXNJbikgZWxlbWVudC5oaWRlKCk7XG4gICAgcmVzZXQoKTtcbiAgICBpZiAoY2IpIGNiLmFwcGx5KGVsZW1lbnQpO1xuICB9XG5cbiAgLy8gUmVzZXRzIHRyYW5zaXRpb25zIGFuZCByZW1vdmVzIG1vdGlvbi1zcGVjaWZpYyBjbGFzc2VzXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGVsZW1lbnRbMF0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gMDtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGluaXRDbGFzcyArICcgJyArIGFjdGl2ZUNsYXNzICsgJyAnICsgYW5pbWF0aW9uKTtcbiAgfVxufVxuXG52YXIgTW90aW9uVUkgPSB7XG4gIGFuaW1hdGVJbjogZnVuY3Rpb24oZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICAgIGFuaW1hdGUodHJ1ZSwgZWxlbWVudCwgYW5pbWF0aW9uLCBjYik7XG4gIH0sXG5cbiAgYW5pbWF0ZU91dDogZnVuY3Rpb24oZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICAgIGFuaW1hdGUoZmFsc2UsIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpO1xuICB9XG59XG5cbnJldHVybiBNb3Rpb25VSTtcbn0pKTtcbiJdfQ==
