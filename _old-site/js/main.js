(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/values.js/dist/index.umd.js
  var require_index_umd = __commonJS({
    "node_modules/values.js/dist/index.umd.js"(exports, module) {
      !function(e4, r5) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = r5() : typeof define == "function" && define.amd ? define(r5) : (e4 = e4 || self).Values = r5();
      }(exports, function() {
        "use strict";
        var e4 = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, r5 = new RegExp("[^#a-f\\d]", "gi"), n5 = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i"), t3 = new RegExp(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/, "i"), a4 = "-?\\d*(?:\\.\\d+)", i5 = "(" + a4 + "?)", o5 = "(" + a4 + "?%)", s5 = ("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,\n    \\s*" + o5 + "\\s*,\n    \\s*" + o5 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), l4 = new RegExp(s5), u4 = ("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*\n    \\s+" + o5 + "\n    \\s+" + o5 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), h4 = new RegExp(u4), d4 = ("^\n  rgba?\\(\n    \\s*" + i5 + "\\s*,\n    \\s*" + i5 + "\\s*,\n    \\s*" + i5 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), g4 = new RegExp(d4), p4 = ("^\n  rgba?\\(\n    \\s*" + o5 + "\\s*,\n    \\s*" + o5 + "\\s*,\n    \\s*" + o5 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), c4 = new RegExp(p4), f3 = ("^\n  rgba?\\(\n    \\s*" + i5 + "\n    \\s+" + i5 + "\n    \\s+" + i5 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g, ""), b4 = new RegExp(f3), m4 = ("^\n  rgba?\\(\n    \\s*" + o5 + "\n    \\s+" + o5 + "\n    \\s+" + o5 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g, ""), v4 = new RegExp(m4), y4 = new RegExp(/^transparent$/, "i"), w3 = function(e5, r6, n6) {
          return Math.min(Math.max(r6, e5), n6);
        }, k3 = function(e5) {
          var r6 = e5;
          return typeof r6 != "number" && (r6 = r6.endsWith("%") ? 255 * parseFloat(r6) / 100 : parseFloat(r6)), w3(Math.round(r6), 0, 255);
        }, x3 = function(e5) {
          return w3(parseFloat(e5), 0, 100);
        };
        function M2(e5) {
          var r6 = e5;
          return typeof r6 != "number" && (r6 = r6.endsWith("%") ? parseFloat(r6) / 100 : parseFloat(r6)), w3(r6, 0, 1);
        }
        function E3(e5) {
          var t4 = function(e6, t5) {
            if (t5 === void 0 && (t5 = {}), typeof e6 != "string" || r5.test(e6) || !n5.test(e6))
              throw new TypeError("Expected a valid hex string");
            var a5 = 1;
            (e6 = e6.replace(/^#/, "")).length === 8 && (a5 = Number.parseInt(e6.slice(6, 8), 16) / 255, e6 = e6.slice(0, 6)), e6.length === 4 && (a5 = Number.parseInt(e6.slice(3, 4).repeat(2), 16) / 255, e6 = e6.slice(0, 3)), e6.length === 3 && (e6 = e6[0] + e6[0] + e6[1] + e6[1] + e6[2] + e6[2]);
            var i6 = Number.parseInt(e6, 16), o6 = i6 >> 16, s6 = i6 >> 8 & 255, l5 = 255 & i6, u5 = typeof t5.alpha == "number" ? t5.alpha : a5;
            return t5.format === "array" ? [o6, s6, l5, u5] : t5.format === "css" ? "rgb(" + o6 + " " + s6 + " " + l5 + (u5 === 1 ? "" : " / " + Number((100 * u5).toFixed(2)) + "%") + ")" : { red: o6, green: s6, blue: l5, alpha: u5 };
          }(e5, { format: "array" });
          return F2([null, t4[0], t4[1], t4[2], t4[3]]);
        }
        function F2(e5) {
          var r6 = e5[1], n6 = e5[2], t4 = e5[3], a5 = e5[4];
          return a5 === void 0 && (a5 = 1), { type: "rgb", values: [r6, n6, t4].map(k3), alpha: M2(a5 === null ? 1 : a5) };
        }
        var R2 = function(r6) {
          if (typeof r6 != "string")
            return null;
          var n6 = t3.exec(r6);
          if (n6)
            return E3(n6[0]);
          var a5 = h4.exec(r6) || l4.exec(r6);
          if (a5)
            return function(e5) {
              var r7 = e5[1], n7 = e5[2], t4 = e5[3], a6 = e5[4];
              a6 === void 0 && (a6 = 1);
              var i7 = r7;
              return { type: "hsl", values: [i7 = i7.endsWith("turn") ? 360 * parseFloat(i7) / 1 : i7.endsWith("rad") ? Math.round(180 * parseFloat(i7) / Math.PI) : parseFloat(i7), x3(n7), x3(t4)], alpha: M2(a6 === null ? 1 : a6) };
            }(a5);
          var i6 = b4.exec(r6) || v4.exec(r6) || g4.exec(r6) || c4.exec(r6);
          if (i6)
            return F2(i6);
          if (y4.exec(r6))
            return F2([null, 0, 0, 0, 0]);
          var o6 = e4[r6.toLowerCase()];
          return o6 ? F2([null, o6[0], o6[1], o6[2], 1]) : null;
        };
        var $3 = function(e5) {
          var r6, n6, t4, a5, i6, o6 = e5[0] / 360, s6 = e5[1] / 100, l5 = e5[2] / 100;
          if (s6 == 0)
            return [i6 = 255 * l5, i6, i6];
          r6 = 2 * l5 - (n6 = l5 < 0.5 ? l5 * (1 + s6) : l5 + s6 - l5 * s6), a5 = [0, 0, 0];
          for (var u5 = 0; u5 < 3; u5++)
            (t4 = o6 + 1 / 3 * -(u5 - 1)) < 0 && t4++, t4 > 1 && t4--, i6 = 6 * t4 < 1 ? r6 + 6 * (n6 - r6) * t4 : 2 * t4 < 1 ? n6 : 3 * t4 < 2 ? r6 + (n6 - r6) * (2 / 3 - t4) * 6 : r6, a5[u5] = 255 * i6;
          return a5;
        };
        var q2 = function(e5, r6, n6) {
          return Math.min(Math.max(e5, r6), n6);
        };
        function S3(e5) {
          var r6 = Math.round(q2(e5, 0, 255)).toString(16);
          return r6.length == 1 ? "0" + r6 : r6;
        }
        var N2 = function(e5) {
          var r6 = e5.length === 4 ? S3(255 * e5[3]) : "";
          return "#" + S3(e5[0]) + S3(e5[1]) + S3(e5[2]) + r6;
        };
        var I2 = function(e5) {
          var r6, n6, t4 = e5[0] / 255, a5 = e5[1] / 255, i6 = e5[2] / 255, o6 = Math.min(t4, a5, i6), s6 = Math.max(t4, a5, i6), l5 = s6 - o6;
          return s6 == o6 ? r6 = 0 : t4 == s6 ? r6 = (a5 - i6) / l5 : a5 == s6 ? r6 = 2 + (i6 - t4) / l5 : i6 == s6 && (r6 = 4 + (t4 - a5) / l5), (r6 = Math.min(60 * r6, 360)) < 0 && (r6 += 360), n6 = (o6 + s6) / 2, [r6, 100 * (s6 == o6 ? 0 : n6 <= 0.5 ? l5 / (s6 + o6) : l5 / (2 - s6 - o6)), 100 * n6];
        };
        function j(e5) {
          var r6 = R2(e5);
          return r6 === null ? null : (r6.type === "hsl" && (r6.values = $3(r6.values)), r6);
        }
        function C2(e5, r6, n6) {
          n6 === void 0 && (n6 = 50);
          var t4 = j(e5), a5 = j(r6);
          if (!t4 || !a5)
            return null;
          var i6 = Math.min(Math.max(0, n6), 100) / 100, o6 = 2 * i6 - 1, s6 = t4.alpha - a5.alpha, l5 = ((o6 * s6 == -1 ? o6 : (o6 + s6) / (1 + o6 * s6)) + 1) / 2, u5 = 1 - l5, h5 = t4.values.map(function(e6, r7) {
            return Math.round(t4.values[r7] * l5 + a5.values[r7] * u5);
          }), d5 = h5[0], g5 = h5[1], p5 = h5[2], c5 = parseFloat((t4.alpha * i6 + a5.alpha * (1 - i6)).toFixed(8));
          return { hex: N2([d5, g5, p5]), hexa: N2([d5, g5, p5, c5]), rgba: [d5, g5, p5, c5], hsla: I2([d5, g5, p5]).map(Math.round).concat([c5]) };
        }
        var W2 = function(e5, r6) {
          return e5 === null || isNaN(e5) || typeof e5 == "string" ? r6 : e5;
        }, _3 = function(e5, r6, n6) {
          var t4;
          e5 === void 0 && (e5 = "#000"), r6 === void 0 && (r6 = "base"), n6 === void 0 && (n6 = 0), t4 = [[0, 0, 0], 1, r6, n6], this.rgb = t4[0], this.alpha = t4[1], this.type = t4[2], this.weight = t4[3];
          var a5 = e5 === null ? "#000" : e5;
          if (typeof a5 != "string")
            throw new TypeError("Input should be a string: " + a5);
          var i6 = R2(a5);
          if (!i6)
            throw new Error("Unable to parse color from string: " + a5);
          return this["_setFrom" + i6.type.toUpperCase()](i6.values.concat([i6.alpha]));
        }, O2 = { hex: { configurable: true } };
        return O2.hex.get = function() {
          return this.hexString().replace(/^#/, "");
        }, _3.prototype.setColor = function(e5) {
          var r6 = R2(e5);
          return r6 ? this["_setFrom" + r6.type.toUpperCase()](r6.values.concat([r6.alpha])) : null;
        }, _3.prototype.tint = function(e5, r6) {
          return r6 === void 0 && (r6 = W2(e5, 50)), new _3("rgb(" + C2("#fff", this.rgbString(), r6).rgba + ")", "tint", r6);
        }, _3.prototype.shade = function(e5, r6) {
          return r6 === void 0 && (r6 = W2(e5, 50)), new _3("rgb(" + C2("#000", this.rgbString(), r6).rgba + ")", "shade", r6);
        }, _3.prototype.tints = function(e5, r6) {
          var n6 = this;
          return r6 === void 0 && (r6 = W2(e5, 10)), Array.from({ length: 100 / r6 }, function(e6, t4) {
            return n6.tint((t4 + 1) * r6);
          });
        }, _3.prototype.shades = function(e5, r6) {
          var n6 = this;
          return r6 === void 0 && (r6 = W2(e5, 10)), Array.from({ length: 100 / r6 }, function(e6, t4) {
            return n6.shade((t4 + 1) * r6);
          });
        }, _3.prototype.all = function(e5) {
          return e5 === void 0 && (e5 = 10), this.tints(e5).reverse().concat([Object.assign(this)], this.shades(e5));
        }, _3.prototype.hexString = function() {
          return N2(this.alpha >= 1 ? this.rgb : this.rgb.concat([this.alpha]));
        }, _3.prototype.rgbString = function() {
          var e5 = (this.alpha >= 1 ? this.rgb : this.rgb.concat([this.alpha])).join(", ");
          return (this.alpha >= 1 ? "rgb" : "rgba") + "(" + e5 + ")";
        }, _3.prototype.getBrightness = function() {
          return Math.round(this.rgb.reduce(function(e5, r6) {
            return e5 + r6;
          }) / 765 * 100);
        }, _3.prototype._setFromRGB = function(e5) {
          var r6;
          return r6 = [[e5[0], e5[1], e5[2]], e5[3]], this.rgb = r6[0], this.alpha = r6[1], this;
        }, _3.prototype._setFromHSL = function(e5) {
          var r6, n6 = e5[0], t4 = e5[1], a5 = e5[2], i6 = e5[3];
          return r6 = [$3([n6, t4, a5]).map(Math.round), i6], this.rgb = r6[0], this.alpha = r6[1], this;
        }, Object.defineProperties(_3.prototype, O2), _3.VERSION = "v2.1.1", _3;
      });
    }
  });

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i5 = 0; i5 < queue.length; i5++) {
      queue[i5]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i5) => i5());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i5) => i5());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i5 = 0; i5 < mutations.length; i5++) {
      if (mutations[i5].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i5].type === "childList") {
        mutations[i5].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i5].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i5].type === "attributes") {
        let el = mutations[i5].target;
        let name = mutations[i5].attributeName;
        let oldValue = mutations[i5].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i5) => i5(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i5) => i5(node));
      if (node._x_cleanups) {
        while (node._x_cleanups.length)
          node._x_cleanups.pop()();
      }
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i5) => i5(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i5) => i5 !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i5) => Object.keys(i5))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, {
                ...property,
                get: getter,
                set: setter
              });
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          utilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return callback(el, utilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e4) {
      handleError(e4, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i5) => runIfTypeOfFunction(receiver, i5, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i5) => i5());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i5) => i5;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i5) => i5.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "radio",
    "tabs",
    "switch",
    "disclosure",
    "menu",
    "listbox",
    "list",
    "item",
    "combobox",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a4, b4) {
    let typeA = directiveOrder.indexOf(a4.type) === -1 ? DEFAULT : a4.type;
    let typeB = directiveOrder.indexOf(b4.type) === -1 ? DEFAULT : b4.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i5) => !el.classList.contains(i5)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i5) => {
      if (el.classList.contains(i5)) {
        el.classList.remove(i5);
        removed.push(i5);
      }
    });
    forAdd.forEach((i5) => {
      if (!el.classList.contains(i5)) {
        el.classList.add(i5);
        added.push(i5);
      }
    });
    return () => {
      removed.forEach((i5) => el.classList.add(i5));
      added.forEach((i5) => el.classList.remove(i5));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i5, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i5, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i5]) => i5());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e4) => {
            if (!e4.isFromCancelledTransition)
              throw e4;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match2 = rawValue.match(/([0-9]+)ms/);
      if (match2)
        return match2[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match2, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.10.5",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i5 = 0; i5 < list.length; i5++) {
      map[list[i5]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_3, c4) => c4 ? c4.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i5 = 0; i5 < deps.length; i5++) {
        deps[i5].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i5 = 0, l4 = this.length; i5 < l4; i5++) {
        track(arr, "get", i5 + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v4) => Reflect.getPrototypeOf(v4);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r5) {
    return Boolean(r5 && r5.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i5) => result = i5);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el, { expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e4) => {
          e4.stopPropagation();
          el.dispatchEvent(new e4.constructor(e4.type, e4));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup2(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e4) => callback(e4);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e4) => wrapper(callback2, e4);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e4) => {
        e4.preventDefault();
        next(e4);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e4) => {
        e4.stopPropagation();
        next(e4);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e4) => {
        e4.target === el && next(e4);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e4) => {
        if (el.contains(e4.target))
          return;
        if (e4.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e4);
      });
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e4) => {
        next(e4);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    handler3 = wrapHandler(handler3, (next, e4) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e4, modifiers)) {
          return;
        }
      }
      next(e4);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match2, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e4, modifiers) {
    let keyModifiers = modifiers.filter((i5) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i5);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e4.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i5) => !selectedSystemKeyModifiers.includes(i5));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e4[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e4.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e4) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e4,
        rightSideOfExpression: assigmentFunction
      } });
    });
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup: cleanup2 }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i5) => typeof i5 === "object" && !Array.isArray(i5);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i5) => i5 + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i5 = 0; i5 < items.length; i5++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i5], i5, items);
          evaluateKey((value) => keys.push(value), { scope: { index: i5, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i5 = 0; i5 < prevKeys.length; i5++) {
        let key = prevKeys[i5];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i5 = 0; i5 < keys.length; i5++) {
        let key = keys[i5];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i5, 0, key);
          adds.push([lastKey, i5]);
        } else if (prevIndex !== i5) {
          let keyInSpot = prevKeys.splice(i5, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i5, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i5 = 0; i5 < removes.length; i5++) {
        let key = removes[i5];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i5 = 0; i5 < moves.length; i5++) {
        let [keyInSpot, keyForSpot] = moves[i5];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i5 = 0; i5 < adds.length; i5++) {
        let [lastKey2, index] = adds[i5];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i5 = 0; i5 < sames.length; i5++) {
        refreshScope(lookup[sames[i5]], scopes[keys.indexOf(sames[i5])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i5) => i5.trim());
      names.forEach((name, i5) => {
        scopeVariables[name] = item[i5];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i5) => i5.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e4) => {
      evaluate2(() => {
      }, { scope: { $event: e4 }, params: [e4] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/delegate-it/delegate.js
  var ledger = /* @__PURE__ */ new WeakMap();
  function editLedger(wanted, baseElement, callback, setup) {
    var _a, _b;
    if (!wanted && !ledger.has(baseElement)) {
      return false;
    }
    const elementMap = (_a = ledger.get(baseElement)) != null ? _a : /* @__PURE__ */ new WeakMap();
    ledger.set(baseElement, elementMap);
    const setups = (_b = elementMap.get(callback)) != null ? _b : /* @__PURE__ */ new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) {
      setups.add(setup);
    } else {
      setups.delete(setup);
    }
    return existed && wanted;
  }
  function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) {
      target = target.parentElement;
    }
    if (target instanceof Element && event.currentTarget instanceof Element) {
      const closest = target.closest(selector);
      if (closest && event.currentTarget.contains(closest)) {
        return closest;
      }
    }
  }
  function delegate(selector, type, callback, options = {}) {
    const { signal, base = document } = options;
    if (signal == null ? void 0 : signal.aborted) {
      return;
    }
    const { once: once2, ...nativeListenerOptions } = options;
    const baseElement = base instanceof Document ? base.documentElement : base;
    const capture = Boolean(typeof options === "object" ? options.capture : options);
    const listenerFn = (event) => {
      const delegateTarget = safeClosest(event, selector);
      if (delegateTarget) {
        const delegateEvent = Object.assign(event, { delegateTarget });
        callback.call(baseElement, delegateEvent);
        if (once2) {
          baseElement.removeEventListener(type, listenerFn, nativeListenerOptions);
          editLedger(false, baseElement, callback, setup);
        }
      }
    };
    const setup = JSON.stringify({ selector, type, capture });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    if (!isAlreadyListening) {
      baseElement.addEventListener(type, listenerFn, nativeListenerOptions);
    }
    signal == null ? void 0 : signal.addEventListener("abort", () => {
      editLedger(false, baseElement, callback, setup);
    });
  }
  var delegate_default = delegate;

  // node_modules/path-to-regexp/dist.es2015/index.js
  function lexer(str) {
    var tokens = [];
    var i5 = 0;
    while (i5 < str.length) {
      var char = str[i5];
      if (char === "*" || char === "+" || char === "?") {
        tokens.push({ type: "MODIFIER", index: i5, value: str[i5++] });
        continue;
      }
      if (char === "\\") {
        tokens.push({ type: "ESCAPED_CHAR", index: i5++, value: str[i5++] });
        continue;
      }
      if (char === "{") {
        tokens.push({ type: "OPEN", index: i5, value: str[i5++] });
        continue;
      }
      if (char === "}") {
        tokens.push({ type: "CLOSE", index: i5, value: str[i5++] });
        continue;
      }
      if (char === ":") {
        var name = "";
        var j = i5 + 1;
        while (j < str.length) {
          var code = str.charCodeAt(j);
          if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
            name += str[j++];
            continue;
          }
          break;
        }
        if (!name)
          throw new TypeError("Missing parameter name at ".concat(i5));
        tokens.push({ type: "NAME", index: i5, value: name });
        i5 = j;
        continue;
      }
      if (char === "(") {
        var count = 1;
        var pattern = "";
        var j = i5 + 1;
        if (str[j] === "?") {
          throw new TypeError('Pattern cannot start with "?" at '.concat(j));
        }
        while (j < str.length) {
          if (str[j] === "\\") {
            pattern += str[j++] + str[j++];
            continue;
          }
          if (str[j] === ")") {
            count--;
            if (count === 0) {
              j++;
              break;
            }
          } else if (str[j] === "(") {
            count++;
            if (str[j + 1] !== "?") {
              throw new TypeError("Capturing groups are not allowed at ".concat(j));
            }
          }
          pattern += str[j++];
        }
        if (count)
          throw new TypeError("Unbalanced pattern at ".concat(i5));
        if (!pattern)
          throw new TypeError("Missing pattern at ".concat(i5));
        tokens.push({ type: "PATTERN", index: i5, value: pattern });
        i5 = j;
        continue;
      }
      tokens.push({ type: "CHAR", index: i5, value: str[i5++] });
    }
    tokens.push({ type: "END", index: i5, value: "" });
    return tokens;
  }
  function parse(str, options) {
    if (options === void 0) {
      options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i5 = 0;
    var path = "";
    var tryConsume = function(type) {
      if (i5 < tokens.length && tokens[i5].type === type)
        return tokens[i5++].value;
    };
    var mustConsume = function(type) {
      var value2 = tryConsume(type);
      if (value2 !== void 0)
        return value2;
      var _a2 = tokens[i5], nextType = _a2.type, index = _a2.index;
      throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
      var result2 = "";
      var value2;
      while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
        result2 += value2;
      }
      return result2;
    };
    while (i5 < tokens.length) {
      var char = tryConsume("CHAR");
      var name = tryConsume("NAME");
      var pattern = tryConsume("PATTERN");
      if (name || pattern) {
        var prefix2 = char || "";
        if (prefixes.indexOf(prefix2) === -1) {
          path += prefix2;
          prefix2 = "";
        }
        if (path) {
          result.push(path);
          path = "";
        }
        result.push({
          name: name || key++,
          prefix: prefix2,
          suffix: "",
          pattern: pattern || defaultPattern,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      var value = char || tryConsume("ESCAPED_CHAR");
      if (value) {
        path += value;
        continue;
      }
      if (path) {
        result.push(path);
        path = "";
      }
      var open = tryConsume("OPEN");
      if (open) {
        var prefix2 = consumeText();
        var name_1 = tryConsume("NAME") || "";
        var pattern_1 = tryConsume("PATTERN") || "";
        var suffix = consumeText();
        mustConsume("CLOSE");
        result.push({
          name: name_1 || (pattern_1 ? key++ : ""),
          pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
          prefix: prefix2,
          suffix,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      mustConsume("END");
    }
    return result;
  }
  function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
  }
  function regexpToFunction(re, keys, options) {
    if (options === void 0) {
      options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x3) {
      return x3;
    } : _a;
    return function(pathname) {
      var m4 = re.exec(pathname);
      if (!m4)
        return false;
      var path = m4[0], index = m4.index;
      var params = /* @__PURE__ */ Object.create(null);
      var _loop_1 = function(i6) {
        if (m4[i6] === void 0)
          return "continue";
        var key = keys[i6 - 1];
        if (key.modifier === "*" || key.modifier === "+") {
          params[key.name] = m4[i6].split(key.prefix + key.suffix).map(function(value) {
            return decode(value, key);
          });
        } else {
          params[key.name] = decode(m4[i6], key);
        }
      };
      for (var i5 = 1; i5 < m4.length; i5++) {
        _loop_1(i5);
      }
      return { path, index, params };
    };
  }
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function flags(options) {
    return options && options.sensitive ? "" : "i";
  }
  function regexpToRegexp(path, keys) {
    if (!keys)
      return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
      keys.push({
        name: execResult[1] || index++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
      execResult = groupsRegex.exec(path.source);
    }
    return path;
  }
  function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
      return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
  }
  function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
  }
  function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
      options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start2 = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x3) {
      return x3;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start2 ? "^" : "";
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var token = tokens_1[_i];
      if (typeof token === "string") {
        route += escapeString(encode(token));
      } else {
        var prefix2 = escapeString(encode(token.prefix));
        var suffix = escapeString(encode(token.suffix));
        if (token.pattern) {
          if (keys)
            keys.push(token);
          if (prefix2 || suffix) {
            if (token.modifier === "+" || token.modifier === "*") {
              var mod = token.modifier === "*" ? "?" : "";
              route += "(?:".concat(prefix2, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix2, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
            } else {
              route += "(?:".concat(prefix2, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
            }
          } else {
            if (token.modifier === "+" || token.modifier === "*") {
              route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
            } else {
              route += "(".concat(token.pattern, ")").concat(token.modifier);
            }
          }
        } else {
          route += "(?:".concat(prefix2).concat(suffix, ")").concat(token.modifier);
        }
      }
    }
    if (end) {
      if (!strict)
        route += "".concat(delimiterRe, "?");
      route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
      var endToken = tokens[tokens.length - 1];
      var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
      if (!strict) {
        route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
      }
      if (!isEndDelimited) {
        route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
      }
    }
    return new RegExp(route, flags(options));
  }
  function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
      return regexpToRegexp(path, keys);
    if (Array.isArray(path))
      return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
  }

  // node_modules/swup/dist/Swup.modern.js
  function s() {
    return s = Object.assign ? Object.assign.bind() : function(t3) {
      for (var e4 = 1; e4 < arguments.length; e4++) {
        var s5 = arguments[e4];
        for (var i5 in s5)
          Object.prototype.hasOwnProperty.call(s5, i5) && (t3[i5] = s5[i5]);
      }
      return t3;
    }, s.apply(this, arguments);
  }
  var i = (t3, e4) => String(t3).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e4 || "";
  var n = ({ hash: t3 } = {}) => location.pathname + location.search + (t3 ? location.hash : "");
  var o = (t3, e4 = {}) => {
    const i5 = s({ url: t3 = t3 || n({ hash: true }), random: Math.random(), source: "swup" }, e4);
    history.pushState(i5, "", t3);
  };
  var r = (t3 = null, e4 = {}) => {
    t3 = t3 || n({ hash: true });
    const i5 = s({}, history.state, { url: t3, random: Math.random(), source: "swup" }, e4);
    history.replaceState(i5, "", t3);
  };
  var a = (e4, i5, n5, o5) => {
    const r5 = new AbortController();
    return o5 = s({}, o5, { signal: r5.signal }), delegate_default(e4, i5, n5, o5), { destroy: () => r5.abort() };
  };
  var l = class extends URL {
    constructor(t3, e4 = document.baseURI) {
      super(t3.toString(), e4);
    }
    get url() {
      return this.pathname + this.search;
    }
    static fromElement(t3) {
      const e4 = t3.getAttribute("href") || t3.getAttribute("xlink:href") || "";
      return new l(e4);
    }
    static fromUrl(t3) {
      return new l(t3);
    }
  };
  var h = (t3, s5) => {
    try {
      return match(t3, s5);
    } catch (e4) {
      throw new Error(`[swup] Error parsing path "${t3}":
${e4}`);
    }
  };
  var c = class {
    constructor(t3) {
      this.swup = void 0, this.pages = /* @__PURE__ */ new Map(), this.swup = t3;
    }
    get size() {
      return this.pages.size;
    }
    get all() {
      const t3 = /* @__PURE__ */ new Map();
      return this.pages.forEach((e4, i5) => {
        t3.set(i5, s({}, e4));
      }), t3;
    }
    has(t3) {
      return this.pages.has(this.resolve(t3));
    }
    get(t3) {
      const e4 = this.pages.get(this.resolve(t3));
      return e4 ? s({}, e4) : e4;
    }
    set(t3, e4) {
      e4 = s({}, e4, { url: t3 = this.resolve(t3) }), this.pages.set(t3, e4), this.swup.hooks.callSync("cache:set", { page: e4 });
    }
    update(t3, e4) {
      t3 = this.resolve(t3);
      const i5 = s({}, this.get(t3), e4, { url: t3 });
      this.pages.set(t3, i5);
    }
    delete(t3) {
      this.pages.delete(this.resolve(t3));
    }
    clear() {
      this.pages.clear(), this.swup.hooks.callSync("cache:clear");
    }
    prune(t3) {
      this.pages.forEach((e4, s5) => {
        t3(s5, e4) && this.delete(s5);
      });
    }
    resolve(t3) {
      const { url: e4 } = l.fromUrl(t3);
      return this.swup.resolveUrl(e4);
    }
  };
  var u = (t3, e4 = document) => e4.querySelector(t3);
  var p = (t3, e4 = document) => Array.from(e4.querySelectorAll(t3));
  var d = () => new Promise((t3) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        t3();
      });
    });
  });
  function m(t3) {
    return !!t3 && (typeof t3 == "object" || typeof t3 == "function") && typeof t3.then == "function";
  }
  function g(t3, e4 = []) {
    return new Promise((s5, i5) => {
      const n5 = t3(...e4);
      m(n5) ? n5.then(s5, i5) : s5(n5);
    });
  }
  var w = (t3) => window.CSS && window.CSS.escape ? CSS.escape(t3) : t3;
  var v = (t3) => 1e3 * Number(t3.slice(0, -1).replace(",", "."));
  var y = class {
    constructor(t3) {
      this.swup = void 0, this.swupClasses = ["to-", "is-changing", "is-rendering", "is-popstate", "is-animating"], this.swup = t3;
    }
    get selectors() {
      const { scope: t3 } = this.swup.visit.animation;
      return t3 === "containers" ? this.swup.visit.containers : t3 === "html" ? ["html"] : Array.isArray(t3) ? t3 : [];
    }
    get selector() {
      return this.selectors.join(",");
    }
    get targets() {
      return this.selector.trim() ? p(this.selector) : [];
    }
    add(...t3) {
      this.targets.forEach((e4) => e4.classList.add(...t3));
    }
    remove(...t3) {
      this.targets.forEach((e4) => e4.classList.remove(...t3));
    }
    clear() {
      this.targets.forEach((t3) => {
        const e4 = t3.className.split(" ").filter((t4) => this.isSwupClass(t4));
        t3.classList.remove(...e4);
      });
    }
    isSwupClass(t3) {
      return this.swupClasses.some((e4) => t3.startsWith(e4));
    }
  };
  function k({ to: t3, from: e4 = this.currentPageUrl, hash: s5, animate: i5 = true, animation: n5, el: o5, event: r5, action: a4 = "push", resetScroll: l4 = true }) {
    return { from: { url: e4 }, to: { url: t3 }, containers: this.options.containers, animation: { animate: i5, wait: false, name: n5, scope: this.options.animationScope, selector: this.options.animationSelector }, trigger: { el: o5, event: r5 }, history: { action: a4, popstate: false, direction: void 0 }, scroll: { reset: l4, target: s5 } };
  }
  var S = class {
    constructor(t3) {
      this.swup = void 0, this.registry = /* @__PURE__ */ new Map(), this.hooks = ["animation:out:start", "animation:out:await", "animation:out:end", "animation:in:start", "animation:in:await", "animation:in:end", "animation:skip", "cache:clear", "cache:set", "content:replace", "content:scroll", "enable", "disable", "fetch:request", "fetch:error", "history:popstate", "link:click", "link:self", "link:anchor", "link:newtab", "page:load", "page:view", "scroll:top", "scroll:anchor", "visit:start", "visit:end"], this.swup = t3, this.init();
    }
    init() {
      this.hooks.forEach((t3) => this.create(t3));
    }
    create(t3) {
      this.registry.has(t3) || this.registry.set(t3, /* @__PURE__ */ new Map());
    }
    exists(t3) {
      return this.registry.has(t3);
    }
    get(t3) {
      const e4 = this.registry.get(t3);
      if (e4)
        return e4;
      console.error(`Unknown hook '${t3}'`);
    }
    clear() {
      this.registry.forEach((t3) => t3.clear());
    }
    on(t3, e4, i5 = {}) {
      const n5 = this.get(t3);
      if (!n5)
        return console.warn(`Hook '${t3}' not found.`), () => {
        };
      const o5 = s({}, i5, { id: n5.size + 1, hook: t3, handler: e4 });
      return n5.set(e4, o5), () => this.off(t3, e4);
    }
    before(t3, e4, i5 = {}) {
      return this.on(t3, e4, s({}, i5, { before: true }));
    }
    replace(t3, e4, i5 = {}) {
      return this.on(t3, e4, s({}, i5, { replace: true }));
    }
    once(t3, e4, i5 = {}) {
      return this.on(t3, e4, s({}, i5, { once: true }));
    }
    off(t3, e4) {
      const s5 = this.get(t3);
      s5 && e4 ? s5.delete(e4) || console.warn(`Handler for hook '${t3}' not found.`) : s5 && s5.clear();
    }
    async call(t3, e4, s5) {
      const { before: i5, handler: n5, after: o5 } = this.getHandlers(t3, s5);
      await this.run(i5, e4);
      const [r5] = await this.run(n5, e4);
      return await this.run(o5, e4), this.dispatchDomEvent(t3, e4), r5;
    }
    callSync(t3, e4, s5) {
      const { before: i5, handler: n5, after: o5 } = this.getHandlers(t3, s5);
      this.runSync(i5, e4);
      const [r5] = this.runSync(n5, e4);
      return this.runSync(o5, e4), this.dispatchDomEvent(t3, e4), r5;
    }
    async run(t3, e4) {
      const s5 = [];
      for (const { hook: i5, handler: n5, defaultHandler: o5, once: r5 } of t3) {
        const t4 = await g(n5, [this.swup.visit, e4, o5]);
        s5.push(t4), r5 && this.off(i5, n5);
      }
      return s5;
    }
    runSync(t3, e4) {
      const s5 = [];
      for (const { hook: i5, handler: n5, defaultHandler: o5, once: r5 } of t3) {
        const t4 = n5(this.swup.visit, e4, o5);
        s5.push(t4), m(t4) && console.warn(`Promise returned from handler for synchronous hook '${i5}'.Swup will not wait for it to resolve.`), r5 && this.off(i5, n5);
      }
      return s5;
    }
    getHandlers(t3, e4) {
      const s5 = this.get(t3);
      if (!s5)
        return { found: false, before: [], handler: [], after: [], replaced: false };
      const i5 = this.sortRegistrations, n5 = Array.from(s5.values()), o5 = n5.filter(({ before: t4, replace: e5 }) => t4 && !e5).sort(i5), r5 = n5.filter(({ replace: t4 }) => t4).sort(i5), a4 = n5.filter(({ before: t4, replace: e5 }) => !t4 && !e5).sort(i5), l4 = r5.length > 0;
      let h4 = [];
      if (e4 && (h4 = [{ id: 0, hook: t3, handler: e4 }], l4)) {
        const s6 = r5.length - 1, i6 = (t4) => {
          const s7 = r5[t4 - 1];
          return s7 ? (e5, n6) => s7.handler(e5, n6, i6(t4 - 1)) : e4;
        };
        h4 = [{ id: 0, hook: t3, handler: r5[s6].handler, defaultHandler: i6(s6) }];
      }
      return { found: true, before: o5, handler: h4, after: a4, replaced: l4 };
    }
    sortRegistrations(t3, e4) {
      var s5, i5;
      return ((s5 = t3.priority) != null ? s5 : 0) - ((i5 = e4.priority) != null ? i5 : 0) || t3.id - e4.id || 0;
    }
    dispatchDomEvent(t3, e4) {
      document.dispatchEvent(new CustomEvent(`swup:${t3}`, { detail: { hook: t3, args: e4, visit: this.swup.visit } }));
    }
  };
  var b = (t3) => {
    if (t3 && t3.charAt(0) === "#" && (t3 = t3.substring(1)), !t3)
      return null;
    const e4 = decodeURIComponent(t3);
    let s5 = document.getElementById(t3) || document.getElementById(e4) || u(`a[name='${w(t3)}']`) || u(`a[name='${w(e4)}']`);
    return s5 || t3 !== "top" || (s5 = document.body), s5;
  };
  var U = "transition";
  var P = "animation";
  async function E({ elements: t3, selector: e4 }) {
    if (e4 === false && !t3)
      return;
    let s5 = [];
    if (t3)
      s5 = Array.from(t3);
    else if (e4 && (s5 = p(e4, document.body), !s5.length))
      return void console.warn(`[swup] No elements found matching animationSelector \`${e4}\``);
    const i5 = s5.map((t4) => function(t5) {
      const { type: e5, timeout: s6, propCount: i6 } = function(t6, e6) {
        const s7 = window.getComputedStyle(t6), i7 = C(s7, `${U}Delay`), n5 = C(s7, `${U}Duration`), o5 = $(i7, n5), r5 = C(s7, `${P}Delay`), a4 = C(s7, `${P}Duration`), l4 = $(r5, a4);
        let h4 = null, c4 = 0, u4 = 0;
        return c4 = Math.max(o5, l4), h4 = c4 > 0 ? o5 > l4 ? U : P : null, u4 = h4 ? h4 === U ? n5.length : a4.length : 0, { type: h4, timeout: c4, propCount: u4 };
      }(t5);
      return !(!e5 || !s6) && new Promise((n5) => {
        const o5 = `${e5}end`, r5 = performance.now();
        let a4 = 0;
        const l4 = () => {
          t5.removeEventListener(o5, h4), n5();
        }, h4 = (e6) => {
          if (e6.target === t5) {
            if (!function(t6) {
              return [`${U}end`, `${P}end`].includes(t6.type);
            }(e6))
              throw new Error("Not a transition or animation event.");
            (performance.now() - r5) / 1e3 < e6.elapsedTime || ++a4 >= i6 && l4();
          }
        };
        setTimeout(() => {
          a4 < i6 && l4();
        }, s6 + 1), t5.addEventListener(o5, h4);
      });
    }(t4));
    i5.filter(Boolean).length > 0 ? await Promise.all(i5) : e4 && console.warn(`[swup] No CSS animation duration defined on elements matching \`${e4}\``);
  }
  function C(t3, e4) {
    return (t3[e4] || "").split(", ");
  }
  function $(t3, e4) {
    for (; t3.length < e4.length; )
      t3 = t3.concat(t3);
    return Math.max(...e4.map((e5, s5) => v(e5) + v(t3[s5])));
  }
  function x(t3, e4 = {}, i5 = {}) {
    if (this.shouldIgnoreVisit(t3, { el: i5.el, event: i5.event }))
      return void (window.location.href = t3);
    const { url: n5, hash: o5 } = l.fromUrl(t3);
    this.visit = this.createVisit(s({}, i5, { to: n5, hash: o5 })), this.performNavigation(n5, e4);
  }
  async function A(t3, e4 = {}) {
    if (typeof t3 != "string")
      throw new Error("swup.navigate() requires a URL parameter");
    const { el: s5 } = this.visit.trigger;
    this.visit.to.url = l.fromUrl(t3).url, e4.referrer = e4.referrer || this.currentPageUrl, e4.animate === false && (this.visit.animation.animate = false), this.visit.animation.animate || this.classes.clear();
    const i5 = e4.history || (s5 == null ? void 0 : s5.getAttribute("data-swup-history")) || void 0;
    i5 && ["push", "replace"].includes(i5) && (this.visit.history.action = i5);
    const a4 = e4.animation || (s5 == null ? void 0 : s5.getAttribute("data-swup-animation")) || void 0;
    a4 && (this.visit.animation.name = a4);
    try {
      await this.hooks.call("visit:start");
      const s6 = this.hooks.call("page:load", { options: e4 }, async (t4, e5) => {
        const s7 = this.cache.get(t4.to.url);
        return e5.page = s7 || await this.fetchPage(t4.to.url, e5.options), e5.cache = !!s7, e5.page;
      });
      if (!this.visit.history.popstate) {
        const e5 = t3 + (this.visit.scroll.target || "");
        this.visit.history.action === "replace" ? r(e5) : o(e5, { index: this.currentHistoryIndex + 1 });
      }
      if (this.currentPageUrl = n(), this.visit.animation.wait) {
        const { html: t4 } = await s6;
        this.visit.to.html = t4;
      }
      const i6 = this.animatePageOut(), [a5] = await Promise.all([s6, i6]);
      await this.renderPage(this.visit.to.url, a5), await this.animatePageIn(), await this.hooks.call("visit:end", void 0, () => this.classes.clear());
    } catch (t4) {
      if (!t4)
        return;
      console.error(t4), this.options.skipPopStateHandling = () => (window.location.href = this.visit.to.url, true), window.history.go(-1);
    }
  }
  var H = class extends Error {
    constructor(t3, e4) {
      super(t3), this.url = void 0, this.status = void 0, this.name = "FetchError", this.url = e4.url, this.status = e4.status;
    }
  };
  async function q(t3, e4 = {}) {
    t3 = l.fromUrl(t3).url;
    const i5 = s({}, this.options.requestHeaders, e4.headers);
    e4 = s({}, e4, { headers: i5 });
    const n5 = await this.hooks.call("fetch:request", { url: t3, options: e4 }, (t4, { url: e5, options: s5 }) => fetch(e5, s5)), { status: o5, url: r5 } = n5, a4 = await n5.text();
    if (o5 === 500)
      throw this.hooks.call("fetch:error", { status: o5, response: n5, url: r5 }), new H(`Server error: ${r5}`, { status: o5, url: r5 });
    if (!a4)
      throw new H(`Empty response: ${r5}`, { status: o5, url: r5 });
    const { url: h4 } = l.fromUrl(r5), c4 = { url: h4, html: a4 };
    return t3 === h4 && this.cache.set(c4.url, c4), c4;
  }
  var L = async function() {
    this.visit.animation.animate ? (await this.hooks.call("animation:out:start", void 0, (t3) => {
      this.classes.add("is-changing", "is-leaving", "is-animating"), t3.history.popstate && this.classes.add("is-popstate"), t3.animation.name && this.classes.add(`to-${i(t3.animation.name)}`);
    }), await this.hooks.call("animation:out:await", { skip: false }, async (t3, { skip: e4 }) => {
      e4 || await this.awaitAnimations({ selector: t3.animation.selector });
    }), await this.hooks.call("animation:out:end")) : await this.hooks.call("animation:skip");
  };
  var R = function({ html: t3 }, { containers: e4 } = this.options) {
    var s5;
    const i5 = new DOMParser().parseFromString(t3, "text/html"), n5 = ((s5 = i5.querySelector("title")) == null ? void 0 : s5.innerText) || "";
    return document.title = n5, e4.map((t4) => {
      const e5 = document.querySelector(t4), s6 = i5.querySelector(t4);
      return e5 && s6 ? (e5.replaceWith(s6), true) : (e5 || console.warn(`[swup] Container missing in current document: ${t4}`), s6 || console.warn(`[swup] Container missing in incoming document: ${t4}`), false);
    }).filter(Boolean).length === e4.length;
  };
  var I = function() {
    const t3 = { behavior: "auto" }, { target: e4, reset: i5 } = this.visit.scroll;
    let n5 = false;
    return e4 && (n5 = this.hooks.callSync("scroll:anchor", { hash: e4, options: t3 }, (t4, { hash: e5, options: s5 }) => {
      const i6 = this.getAnchorElement(e5 || "");
      return i6 && i6.scrollIntoView(s5), !!i6;
    })), i5 && !n5 && (n5 = this.hooks.callSync("scroll:top", { options: t3 }, (t4, { options: e5 }) => (window.scrollTo(s({ top: 0, left: 0 }, e5)), true))), n5;
  };
  var N = async function() {
    if (!this.visit.animation.animate)
      return;
    const t3 = this.hooks.call("animation:in:await", { skip: false }, async (t4, { skip: e4 }) => {
      e4 || await this.awaitAnimations({ selector: t4.animation.selector });
    });
    await d(), await this.hooks.call("animation:in:start", void 0, () => {
      this.classes.remove("is-animating");
    }), await t3, await this.hooks.call("animation:in:end");
  };
  var D = async function(t3, e4) {
    const { url: s5, html: o5 } = e4;
    this.classes.remove("is-leaving"), this.isSameResolvedUrl(n(), t3) && (this.isSameResolvedUrl(n(), s5) || (r(s5), this.currentPageUrl = n(), this.visit.to.url = this.currentPageUrl), this.visit.animation.animate && this.classes.add("is-rendering"), this.visit.to.html = o5, await this.hooks.call("content:replace", { page: e4 }, (t4, { page: e5 }) => {
      if (!this.replaceContent(e5, { containers: t4.containers }))
        throw new Error("[swup] Container mismatch, aborting");
      t4.animation.animate && (this.classes.add("is-animating", "is-changing", "is-rendering"), t4.animation.name && this.classes.add(`to-${i(t4.animation.name)}`));
    }), await this.hooks.call("content:scroll", void 0, () => this.scrollToContent()), await this.hooks.call("page:view", { url: this.currentPageUrl, title: document.title }), this.options.cache || this.cache.clear());
  };
  var V = function(t3) {
    var e4;
    if ((e4 = t3) == null ? void 0 : e4.isSwupPlugin) {
      if (t3.swup = this, !t3._checkRequirements || t3._checkRequirements())
        return t3._beforeMount && t3._beforeMount(), t3.mount(), this.plugins.push(t3), this.plugins;
    } else
      console.error("Not a swup plugin instance", t3);
  };
  function M(t3) {
    const e4 = this.findPlugin(t3);
    if (e4)
      return e4.unmount(), e4._afterUnmount && e4._afterUnmount(), this.plugins = this.plugins.filter((t4) => t4 !== e4), this.plugins;
    console.error("No such plugin", e4);
  }
  function O(t3) {
    return this.plugins.find((e4) => e4 === t3 || e4.name === t3 || e4.name === `Swup${t3}`);
  }
  function T(t3) {
    if (typeof this.options.resolveUrl != "function")
      return console.warn("[swup] options.resolveUrl expects a callback function."), t3;
    const e4 = this.options.resolveUrl(t3);
    return e4 && typeof e4 == "string" ? e4.startsWith("//") || e4.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t3) : e4 : (console.warn("[swup] options.resolveUrl needs to return a url"), t3);
  }
  function W(t3, e4) {
    return this.resolveUrl(t3) === this.resolveUrl(e4);
  }
  var _ = { animateHistoryBrowsing: false, animationSelector: '[class*="transition-"]', animationScope: "html", cache: true, containers: ["#swup"], ignoreVisit: (t3, { el: e4 } = {}) => !(e4 == null || !e4.closest("[data-no-swup]")), linkSelector: "a[href]", plugins: [], resolveUrl: (t3) => t3, requestHeaders: { "X-Requested-With": "swup", Accept: "text/html, application/xhtml+xml" }, skipPopStateHandling: (t3) => {
    var e4;
    return ((e4 = t3.state) == null ? void 0 : e4.source) !== "swup";
  } };
  var B = class {
    constructor(t3 = {}) {
      this.version = "4.1.0", this.options = void 0, this.defaults = _, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.currentPageUrl = n(), this.currentHistoryIndex = 1, this.clickDelegate = void 0, this.use = V, this.unuse = M, this.findPlugin = O, this.log = () => {
      }, this.navigate = x, this.performNavigation = A, this.createVisit = k, this.delegateEvent = a, this.fetchPage = q, this.awaitAnimations = E, this.renderPage = D, this.replaceContent = R, this.animatePageIn = N, this.animatePageOut = L, this.scrollToContent = I, this.getAnchorElement = b, this.getCurrentUrl = n, this.resolveUrl = T, this.isSameResolvedUrl = W, this.options = s({}, this.defaults, t3), this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new c(this), this.classes = new y(this), this.hooks = new S(this), this.visit = this.createVisit({ to: void 0 }), this.checkRequirements() && this.enable();
    }
    checkRequirements() {
      return typeof Promise != "undefined" || (console.warn("Promise is not supported"), false);
    }
    async enable() {
      const { linkSelector: t3 } = this.options;
      this.clickDelegate = this.delegateEvent(t3, "click", this.handleLinkClick), window.addEventListener("popstate", this.handlePopState), this.options.plugins.forEach((t4) => this.use(t4)), r(null, { index: 1 }), await d(), await this.hooks.call("enable", void 0, () => {
        document.documentElement.classList.add("swup-enabled");
      });
    }
    async destroy() {
      this.clickDelegate.destroy(), window.removeEventListener("popstate", this.handlePopState), this.cache.clear(), this.options.plugins.forEach((t3) => this.unuse(t3)), await this.hooks.call("disable", void 0, () => {
        document.documentElement.classList.remove("swup-enabled");
      }), this.hooks.clear();
    }
    shouldIgnoreVisit(t3, { el: e4, event: s5 } = {}) {
      const { origin: i5, url: n5, hash: o5 } = l.fromUrl(t3);
      return i5 !== window.location.origin || !(!e4 || !this.triggerWillOpenNewWindow(e4)) || !!this.options.ignoreVisit(n5 + o5, { el: e4, event: s5 });
    }
    handleLinkClick(t3) {
      const e4 = t3.delegateTarget, { href: s5, url: i5, hash: n5 } = l.fromElement(e4);
      this.shouldIgnoreVisit(s5, { el: e4, event: t3 }) || (this.visit = this.createVisit({ to: i5, hash: n5, el: e4, event: t3 }), t3.metaKey || t3.ctrlKey || t3.shiftKey || t3.altKey ? this.hooks.call("link:newtab", { href: s5 }) : t3.button === 0 && this.hooks.callSync("link:click", { el: e4, event: t3 }, () => {
        var e5;
        const s6 = (e5 = this.visit.from.url) != null ? e5 : "";
        t3.preventDefault(), i5 && i5 !== s6 ? this.isSameResolvedUrl(i5, s6) || this.performNavigation(i5) : n5 ? this.hooks.callSync("link:anchor", { hash: n5 }, () => {
          r(i5 + n5), this.scrollToContent();
        }) : this.hooks.callSync("link:self", void 0, () => {
          this.scrollToContent();
        });
      }));
    }
    handlePopState(t3) {
      var e4, s5, i5;
      const o5 = (e4 = (s5 = t3.state) == null ? void 0 : s5.url) != null ? e4 : location.href;
      if (this.options.skipPopStateHandling(t3))
        return;
      if (this.isSameResolvedUrl(n(), this.currentPageUrl))
        return;
      if (this.shouldIgnoreVisit(o5, { event: t3 }))
        return;
      const { url: r5, hash: a4 } = l.fromUrl(o5);
      this.visit = this.createVisit({ to: r5, hash: a4, event: t3, animate: this.options.animateHistoryBrowsing, resetScroll: this.options.animateHistoryBrowsing }), this.visit.history.popstate = true;
      const h4 = Number((i5 = t3.state) == null ? void 0 : i5.index);
      h4 && (this.visit.history.direction = h4 - this.currentHistoryIndex > 0 ? "forwards" : "backwards"), this.hooks.callSync("history:popstate", { event: t3 }, () => {
        this.performNavigation(r5);
      });
    }
    triggerWillOpenNewWindow(t3) {
      return !!t3.matches('[download], [target="_blank"]');
    }
  };

  // node_modules/@swup/plugin/dist/index.modern.js
  function r2() {
    return r2 = Object.assign ? Object.assign.bind() : function(r5) {
      for (var n5 = 1; n5 < arguments.length; n5++) {
        var e4 = arguments[n5];
        for (var t3 in e4)
          Object.prototype.hasOwnProperty.call(e4, t3) && (r5[t3] = e4[t3]);
      }
      return r5;
    }, r2.apply(this, arguments);
  }
  var n2 = (r5) => String(r5).split(".").map((r6) => String(parseInt(r6 || "0", 10))).concat(["0", "0"]).slice(0, 3).join(".");
  var e = class {
    constructor() {
      this.isSwupPlugin = true, this.swup = void 0, this.version = void 0, this.requires = {}, this.handlersToUnregister = [];
    }
    mount() {
    }
    unmount() {
      this.handlersToUnregister.forEach((r5) => r5()), this.handlersToUnregister = [];
    }
    _beforeMount() {
      if (!this.name)
        throw new Error("You must define a name of plugin when creating a class.");
    }
    _afterUnmount() {
    }
    _checkRequirements() {
      return typeof this.requires != "object" || Object.entries(this.requires).forEach(([r5, e4]) => {
        if (!function(r6, e5, t3) {
          const s5 = function(r7, n5) {
            var e6;
            if (r7 === "swup")
              return (e6 = n5.version) != null ? e6 : "";
            {
              var t4;
              const e7 = n5.findPlugin(r7);
              return (t4 = e7 == null ? void 0 : e7.version) != null ? t4 : "";
            }
          }(r6, t3);
          return !!s5 && ((r7, e6) => e6.every((e7) => {
            const [, t4, s6] = e7.match(/^([\D]+)?(.*)$/) || [];
            var o5, i5;
            return ((r8, n5) => {
              const e8 = { "": (r9) => r9 === 0, ">": (r9) => r9 > 0, ">=": (r9) => r9 >= 0, "<": (r9) => r9 < 0, "<=": (r9) => r9 <= 0 };
              return (e8[n5] || e8[""])(r8);
            })((i5 = s6, o5 = n2(o5 = r7), i5 = n2(i5), o5.localeCompare(i5, void 0, { numeric: true })), t4 || ">=");
          }))(s5, e5);
        }(r5, e4 = Array.isArray(e4) ? e4 : [e4], this.swup)) {
          const n5 = `${r5} ${e4.join(", ")}`;
          throw new Error(`Plugin version mismatch: ${this.name} requires ${n5}`);
        }
      }), true;
    }
    on(r5, n5, e4 = {}) {
      var t3;
      n5 = !(t3 = n5).name.startsWith("bound ") || t3.hasOwnProperty("prototype") ? n5.bind(this) : n5;
      const s5 = this.swup.hooks.on(r5, n5, e4);
      return this.handlersToUnregister.push(s5), s5;
    }
    once(n5, e4, t3 = {}) {
      return this.on(n5, e4, r2({}, t3, { once: true }));
    }
    before(n5, e4, t3 = {}) {
      return this.on(n5, e4, r2({}, t3, { before: true }));
    }
    replace(n5, e4, t3 = {}) {
      return this.on(n5, e4, r2({}, t3, { replace: true }));
    }
    off(r5, n5) {
      return this.swup.hooks.off(r5, n5);
    }
  };

  // node_modules/@swup/fragment-plugin/dist/index.modern.js
  function o2() {
    return o2 = Object.assign ? Object.assign.bind() : function(t3) {
      for (var r5 = 1; r5 < arguments.length; r5++) {
        var e4 = arguments[r5];
        for (var n5 in e4)
          Object.prototype.hasOwnProperty.call(e4, n5) && (t3[n5] = e4[n5]);
      }
      return t3;
    }, o2.apply(this, arguments);
  }
  var s2 = (t3, r5, e4) => t3 == null ? t3 : `\x1B[${r5}m${String(t3)}\x1B[${e4}m`;
  var i2 = (t3) => `\u{1F9E9} ${((t4) => s2(t4, 1, 22))(t3)}`;
  var a2 = (t3) => ((t4) => s2(t4, 91, 39))(t3);
  var l2 = class {
    log(...t3) {
      const r5 = t3.shift();
      console.log(i2(r5), ...t3);
    }
    warn(...t3) {
      const r5 = t3.shift();
      console.warn(i2(r5), ...t3);
    }
    error(...t3) {
      const r5 = t3.shift();
      console.error(i2(r5), ...t3);
    }
    logIf(t3, ...r5) {
      t3 && this.log(...r5);
    }
    warnIf(t3, ...r5) {
      t3 && this.warn(...r5);
    }
    errorIf(t3, ...r5) {
      t3 && this.error(...r5);
    }
  };
  window.process || (window.process = {}), window.process.env || (window.process.env = {});
  var u2 = true;
  var c2 = (t3) => {
    !function({ rules: t4, swup: e4, logger: n5 }) {
      const o5 = e4.getCurrentUrl();
      t4.filter((t5) => t5.matchesFrom(o5) || t5.matchesTo(o5)).forEach((t5) => {
        t5.containers.forEach((t6) => {
          const e5 = document.querySelector(`${t6}:not([data-swup-fragment])`);
          if (!e5)
            return;
          const s5 = e5.getAttribute("data-swup-fragment-url");
          s5 && u2 && (n5 == null || n5.log(`fragment url ${a2(s5)} for ${a2(t6)} provided by server`));
          const { url: i5 } = l.fromUrl(s5 || o5);
          e5.setAttribute("data-swup-fragment", ""), e5.__swupFragment = { url: i5, selector: t6 };
        });
      });
    }(t3), function({ logger: t4, swup: r5 }) {
      const e4 = "data-swup-link-to-fragment";
      document.querySelectorAll(`a[${e4}]`).forEach((n5) => {
        var o5;
        const s5 = n5.getAttribute(e4);
        if (!s5)
          return void (u2 && (t4 == null || t4.warn(`[${e4}] needs to contain a valid fragment selector`)));
        const i5 = document.querySelector(s5);
        if (!i5)
          return void (u2 && (t4 == null || t4.warn(`no element found for [${e4}="${s5}"]`)));
        const a4 = (o5 = i5.__swupFragment) == null ? void 0 : o5.url;
        a4 ? g2(a4, r5.getCurrentUrl()) ? u2 && (t4 == null || t4.warn(`The fragment URL of ${s5} is identical to the current URL. This could mean that [data-swup-fragment-url] needs to be provided by the server.`)) : n5.href = a4 : u2 && (t4 == null || t4.warn(`no fragment infos found on ${s5}`));
      });
    }(t3), function({ logger: t4 }) {
      document.querySelectorAll("dialog[data-swup-fragment]").forEach((r5) => {
        r5.__swupFragment ? r5.__swupFragment.modalShown || (r5.__swupFragment.modalShown = true, r5.removeAttribute("open"), r5.showModal()) : u2 && (t4 == null || t4.warn("fragment properties missing on element:", r5));
      });
    }(t3);
  };
  var m2 = (t3, r5) => {
    var e4;
    const n5 = (e4 = t3.__swupFragment) == null ? void 0 : e4.url;
    return !!n5 && g2(n5, r5);
  };
  var g2 = (t3, r5) => f(t3) === f(r5);
  var f = (t3) => {
    if (!t3.trim())
      return t3;
    const e4 = l.fromUrl(t3);
    return e4.searchParams.sort(), ((n5 = e4.pathname).endsWith("/") ? n5.slice(0, -1) : n5) + e4.search;
    var n5;
  };
  var h2 = (t3) => {
    const r5 = t3.from.url, e4 = t3.to.url;
    if (r5 && e4)
      return { from: r5, to: e4 };
  };
  var d2 = (t3) => {
    if (!t3.fragmentVisit)
      return;
    const { name: r5, containers: e4 } = t3.fragmentVisit;
    r5 && e4.forEach((t4) => {
      var e5;
      (e5 = document.querySelector(t4)) == null || e5.classList.add(`to-${r5}`);
    });
  };
  var p2 = (t3, r5) => r5.find((r6) => r6.matches(t3));
  function w2({ swup: t3 }) {
    const { fragmentVisit: r5 } = t3.visit;
    return !!r5 && r5.containers.every((t4) => {
      var r6;
      return ((r6 = document.querySelector(t4)) == null || (r6 = r6.tagName) == null ? void 0 : r6.toLowerCase()) === "template";
    });
  }
  var v2 = class {
    constructor(t3, r5, o5, s5, i5, a4, l4) {
      this.matchesFrom = void 0, this.matchesTo = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.name = void 0, this.scroll = false, this.focus = void 0, this.logger = void 0, this.logger = l4, this.from = t3 || "", this.to = r5 || "", s5 && (this.name = i(s5)), i5 !== void 0 && (this.scroll = i5), a4 !== void 0 && (this.focus = a4), this.containers = this.parseContainers(o5), u2 && (l4 == null || l4.errorIf(!r5, "Every fragment rule must contain a 'to' path", this), l4 == null || l4.errorIf(!t3, "Every fragment rule must contain a 'from' path", this)), this.matchesFrom = h(t3), this.matchesTo = h(r5);
    }
    parseContainers(t3) {
      var r5;
      if (!Array.isArray(t3))
        return u2 && ((r5 = this.logger) == null || r5.error("Every fragment rule must contain an array of containers", this)), [];
      const e4 = t3.map((t4) => t4.trim());
      return e4.forEach((t4) => {
        var r6;
        const e5 = this.validateSelector(t4);
        (r6 = this.logger) == null || r6.errorIf(e5 instanceof Error, e5);
      }), [...new Set(e4)];
    }
    validateSelector(t3) {
      return t3.startsWith("#") ? !t3.match(/\s|>/) || new Error(`fragment selectors must not be nested: ${t3}`) : new Error(`fragment selectors must be IDs: ${t3}`);
    }
    getDebugInfo() {
      const { from: t3, to: r5, containers: e4 } = this;
      return { from: String(t3), to: String(r5), containers: String(e4) };
    }
    matches(t3) {
      const { url: e4 } = l.fromUrl(t3.from), { url: n5 } = l.fromUrl(t3.to);
      if (!this.matchesFrom(e4) || !this.matchesTo(n5))
        return false;
      const o5 = this.containers.filter((t4) => !document.querySelector(t4));
      return !o5.length || (u2 && o5.forEach((t4) => {
        var r5;
        (r5 = this.logger) == null || r5.log(`skipping rule since ${a2(t4)} didn't match anything:`, this.getDebugInfo());
      }), false);
    }
  };
  var y2 = function(t3) {
    const r5 = h2(t3);
    r5 && p2(r5, this.rules) && (t3.scroll.reset = false);
  };
  var S2 = async function(t3) {
    const r5 = h2(t3);
    if (!r5)
      return;
    const e4 = this.getFragmentVisit(r5);
    if (!e4)
      return;
    var n5;
    t3.fragmentVisit = e4, u2 && ((n5 = this.logger) == null || n5.log(`fragment visit: ${a2(t3.fragmentVisit.containers.join(", "))}`)), t3.scroll = function(t4, r6) {
      return typeof t4.scroll == "boolean" ? o2({}, r6, { reset: t4.scroll }) : typeof t4.scroll != "string" || r6.target ? r6 : o2({}, r6, { target: t4.scroll });
    }(e4, t3.scroll);
    const s5 = t3.a11y;
    var i5;
    e4.focus !== void 0 && (u2 && ((i5 = this.logger) == null || i5.errorIf(!s5, "Can't set visit.a11y.focus. Is @swup/a11y-plugin installed?")), s5 && (s5.focus = e4.focus)), t3.animation.scope = t3.fragmentVisit.containers, t3.containers = t3.fragmentVisit.containers, t3.animation.selector = t3.fragmentVisit.containers.join(","), d2(t3);
  };
  var $2 = function(t3, r5) {
    var e4, n5;
    t3.fragmentVisit && w2(this) && (u2 && ((e4 = this.logger) == null || e4.log(`${a2("out")}-animation skipped for ${a2((n5 = t3.fragmentVisit) == null ? void 0 : n5.containers.toString())}`)), r5.skip = true);
  };
  var b2 = function(t3, r5) {
    var e4, n5;
    t3.fragmentVisit && w2(this) && (u2 && ((e4 = this.logger) == null || e4.log(`${a2("in")}-animation skipped for ${a2((n5 = t3.fragmentVisit) == null ? void 0 : n5.containers.toString())}`)), r5.skip = true);
  };
  var F = function(t3, r5) {
    var e4;
    if (t3.trigger.el || !t3.to.url)
      return;
    const n5 = this.swup.cache.get(t3.to.url);
    n5 && n5.fragmentHtml && (r5.page.html = n5.fragmentHtml, u2 && ((e4 = this.logger) == null || e4.log(`fragment cache used for ${a2(t3.to.url)}`)));
  };
  var _2 = function(t3) {
    d2(t3), c2(this), (({ swup: t4, logger: r5 }) => {
      const e4 = t4.getCurrentUrl(), n5 = t4.cache, s5 = n5.get(e4);
      if (!s5)
        return;
      const i5 = new DOMParser().parseFromString(s5.html, "text/html"), l4 = [], c4 = Array.from(document.querySelectorAll("[data-swup-fragment]")).filter((t5) => !t5.matches("template") && !m2(t5, e4));
      c4.length && (t4.options.cache ? (c4.forEach((t5) => {
        var e5, o5;
        if (t5.querySelector("[data-swup-fragment]") != null)
          return;
        const s6 = (e5 = t5.__swupFragment) == null ? void 0 : e5.url;
        if (!s6)
          return void (u2 && (r5 == null || r5.warn("no fragment url found:", t5)));
        const a4 = (o5 = t5.__swupFragment) == null ? void 0 : o5.selector;
        if (!a4)
          return void (u2 && (r5 == null || r5.warn("no fragment selector found:", t5)));
        const c5 = n5.get(s6);
        if (!c5)
          return;
        const m4 = i5.querySelector(a4);
        if (!m4)
          return;
        const g4 = new DOMParser().parseFromString(c5.html, "text/html").querySelector(a4);
        g4 && (g4.setAttribute("data-swup-fragment-url", s6), m4.replaceWith(g4), l4.push(t5));
      }), l4.length && (n5.update(e4, o2({}, s5, { fragmentHtml: i5.documentElement.outerHTML })), l4.forEach((t5) => {
        var e5, n6;
        const o5 = ((e5 = t5.__swupFragment) == null ? void 0 : e5.url) || "", s6 = ((n6 = t5.__swupFragment) == null ? void 0 : n6.selector) || "";
        u2 && (r5 == null || r5.log(`updated cache with ${a2(s6)} from ${a2(o5)}`));
      }))) : u2 && (r5 == null || r5.warn("can't cache foreign fragment elements without swup's cache")));
    })(this);
  };
  var E2 = function(t3) {
    t3.fragmentVisit && (({ name: t4, containers: r5 }) => {
      t4 && r5.forEach((r6) => {
        var e4;
        (e4 = document.querySelector(r6)) == null || e4.classList.remove(`to-${t4}`);
      });
    })(t3.fragmentVisit);
  };
  var V2 = class extends e {
    constructor(t3) {
      super(), this.name = "SwupFragmentPlugin", this.requires = { swup: ">=4" }, this.rules = [], this.options = void 0, this.defaults = { rules: [], debug: false }, this.logger = void 0, this.options = o2({}, this.defaults, t3), u2 && this.options.debug && (this.logger = new l2()), this.rules = this.options.rules.map(({ from: t4, to: r5, containers: e4, name: n5, scroll: o5, focus: s5 }) => new v2(t4, r5, e4, n5, o5, s5, this.logger));
    }
    mount() {
      const t3 = this.swup;
      var r5;
      this.before("link:self", y2), this.on("visit:start", S2), this.before("animation:out:await", $2), this.before("animation:in:await", b2), this.before("content:replace", F), this.on("content:replace", _2), this.on("visit:end", E2), t3.getFragmentVisit = this.getFragmentVisit.bind(this), u2 && ((r5 = this.logger) == null || r5.warnIf(!t3.options.cache, "fragment caching will only work with swup's cache being active")), c2(this);
    }
    unmount() {
      super.unmount(), this.swup.getFragmentVisit = void 0, document.querySelectorAll("[data-swup-fragment]").forEach((t3) => {
        t3.removeAttribute("data-swup-fragment-url"), delete t3.__swupFragment;
      });
    }
    getFragmentVisit(t3) {
      const r5 = p2(t3, this.rules);
      if (!r5)
        return;
      const e4 = ((t4, r6, e5) => {
        const n6 = g2(t4.from, t4.to);
        return r6.filter((r7) => {
          const o6 = document.querySelector(r7);
          return o6 ? !(!n6 && m2(o6, t4.to) && (u2 && (e5 == null || e5.log(`ignored fragment ${a2(r7)} as it already matches the current URL`)), 1)) : (u2 && (e5 == null || e5.log(`fragment "${r7}" missing in current document`)), false);
        });
      })(t3, r5.containers, this.logger);
      if (!e4.length)
        return;
      const { name: n5, scroll: o5, focus: s5 } = r5;
      return { containers: e4, name: n5, scroll: o5, focus: s5 };
    }
  };

  // node_modules/@studio-freight/lenis/dist/lenis.modern.mjs
  function t() {
    return t = Object.assign ? Object.assign.bind() : function(t3) {
      for (var i5 = 1; i5 < arguments.length; i5++) {
        var e4 = arguments[i5];
        for (var s5 in e4)
          Object.prototype.hasOwnProperty.call(e4, s5) && (t3[s5] = e4[s5]);
      }
      return t3;
    }, t.apply(this, arguments);
  }
  function i3(t3, i5, e4) {
    return Math.max(t3, Math.min(i5, e4));
  }
  var e2 = class {
    advance(t3) {
      var e4;
      if (!this.isRunning)
        return;
      let s5 = false;
      if (this.lerp)
        this.value = (o5 = this.value, n5 = this.to, (1 - (r5 = 1 - Math.exp(-60 * this.lerp * t3))) * o5 + r5 * n5), Math.round(this.value) === this.to && (this.value = this.to, s5 = true);
      else {
        this.currentTime += t3;
        const e5 = i3(0, this.currentTime / this.duration, 1);
        s5 = e5 >= 1;
        const o6 = s5 ? 1 : this.easing(e5);
        this.value = this.from + (this.to - this.from) * o6;
      }
      var o5, n5, r5;
      (e4 = this.onUpdate) == null || e4.call(this, this.value, { completed: s5 }), s5 && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t3, i5, { lerp: e4 = 0.1, duration: s5 = 1, easing: o5 = (t4) => t4, onUpdate: n5 }) {
      this.from = this.value = t3, this.to = i5, this.lerp = e4, this.duration = s5, this.easing = o5, this.currentTime = 0, this.isRunning = true, this.onUpdate = n5;
    }
  };
  var s3 = class {
    constructor({ wrapper: t3, content: i5, autoResize: e4 = true } = {}) {
      if (this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }, this.onWrapperResize = () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      }, this.onContentResize = () => {
        this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth;
      }, this.wrapper = t3, this.content = i5, e4) {
        const t4 = function(t5, i6) {
          let e5;
          return function() {
            let i7 = arguments, s5 = this;
            clearTimeout(e5), e5 = setTimeout(function() {
              t5.apply(s5, i7);
            }, 250);
          };
        }(this.resize);
        this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t4), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(t4), this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      var t3, i5;
      (t3 = this.wrapperResizeObserver) == null || t3.disconnect(), (i5 = this.contentResizeObserver) == null || i5.disconnect();
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var o3 = class {
    constructor() {
      this.events = {};
    }
    emit(t3, ...i5) {
      let e4 = this.events[t3] || [];
      for (let t4 = 0, s5 = e4.length; t4 < s5; t4++)
        e4[t4](...i5);
    }
    on(t3, i5) {
      var e4;
      return ((e4 = this.events[t3]) == null ? void 0 : e4.push(i5)) || (this.events[t3] = [i5]), () => {
        var e5;
        this.events[t3] = (e5 = this.events[t3]) == null ? void 0 : e5.filter((t4) => i5 !== t4);
      };
    }
    destroy() {
      this.events = {};
    }
  };
  var n3 = class {
    constructor(t3, { wheelMultiplier: e4 = 1, touchMultiplier: s5 = 2, normalizeWheel: n5 = false }) {
      this.onTouchStart = (t4) => {
        const { clientX: i5, clientY: e5 } = t4.targetTouches ? t4.targetTouches[0] : t4;
        this.touchStart.x = i5, this.touchStart.y = e5, this.lastDelta = { x: 0, y: 0 };
      }, this.onTouchMove = (t4) => {
        const { clientX: i5, clientY: e5 } = t4.targetTouches ? t4.targetTouches[0] : t4, s6 = -(i5 - this.touchStart.x) * this.touchMultiplier, o5 = -(e5 - this.touchStart.y) * this.touchMultiplier;
        this.touchStart.x = i5, this.touchStart.y = e5, this.lastDelta = { x: s6, y: o5 }, this.emitter.emit("scroll", { type: "touch", deltaX: s6, deltaY: o5, event: t4 });
      }, this.onTouchEnd = (t4) => {
        this.emitter.emit("scroll", { type: "touch", inertia: true, deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t4 });
      }, this.onWheel = (t4) => {
        let { deltaX: e5, deltaY: s6 } = t4;
        this.normalizeWheel && (e5 = i3(-100, e5, 100), s6 = i3(-100, s6, 100)), e5 *= this.wheelMultiplier, s6 *= this.wheelMultiplier, this.emitter.emit("scroll", { type: "wheel", deltaX: e5, deltaY: s6, event: t4 });
      }, this.element = t3, this.wheelMultiplier = e4, this.touchMultiplier = s5, this.normalizeWheel = n5, this.touchStart = { x: null, y: null }, this.emitter = new o3(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t3, i5) {
      return this.emitter.on(t3, i5);
    }
    destroy() {
      this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
  };
  var r3 = class {
    constructor({ wrapper: i5 = window, content: r5 = document.documentElement, wheelEventsTarget: l4 = i5, smoothWheel: h4 = true, smoothTouch: a4 = false, syncTouch: c4 = false, syncTouchLerp: u4 = 0.1, __iosNoInertiaSyncTouchLerp: p4 = 0.4, touchInertiaMultiplier: m4 = 35, duration: d4, easing: v4 = (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)), lerp: g4 = d4 && 0.1, infinite: S3 = false, orientation: w3 = "vertical", gestureOrientation: f3 = "vertical", touchMultiplier: y4 = 1, wheelMultiplier: T2 = 1, normalizeWheel: z = false, autoResize: M2 = true } = {}) {
      this.onVirtualScroll = ({ type: i6, inertia: e4, deltaX: s5, deltaY: o5, event: n5 }) => {
        if (n5.ctrlKey)
          return;
        const r6 = i6 === "touch", l5 = i6 === "wheel";
        if (this.options.gestureOrientation === "vertical" && o5 === 0 || this.options.gestureOrientation === "horizontal" && s5 === 0 || r6 && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && o5 <= 0)
          return;
        if (n5.composedPath().find((t3) => (t3 == null || t3.hasAttribute == null ? void 0 : t3.hasAttribute("data-lenis-prevent")) || r6 && (t3 == null || t3.hasAttribute == null ? void 0 : t3.hasAttribute("data-lenis-prevent-touch")) || l5 && (t3 == null || t3.hasAttribute == null ? void 0 : t3.hasAttribute("data-lenis-prevent-wheel"))))
          return;
        if (this.isStopped || this.isLocked)
          return void n5.preventDefault();
        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && r6 || this.options.smoothWheel && l5, !this.isSmooth)
          return this.isScrolling = false, void this.animate.stop();
        n5.preventDefault();
        let h5 = o5;
        this.options.gestureOrientation === "both" ? h5 = Math.abs(o5) > Math.abs(s5) ? o5 : s5 : this.options.gestureOrientation === "horizontal" && (h5 = s5);
        const a5 = r6 && this.options.syncTouch, c5 = r6 && e4 && Math.abs(h5) > 1;
        c5 && (h5 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h5, t({ programmatic: false }, a5 && { lerp: c5 ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp }));
      }, this.onScroll = () => {
        if (!this.isScrolling) {
          const t3 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t3), this.emit();
        }
      }, window.lenisVersion = "1.0.19", i5 !== document.documentElement && i5 !== document.body || (i5 = window), this.options = { wrapper: i5, content: r5, wheelEventsTarget: l4, smoothWheel: h4, smoothTouch: a4, syncTouch: c4, syncTouchLerp: u4, __iosNoInertiaSyncTouchLerp: p4, touchInertiaMultiplier: m4, duration: d4, easing: v4, lerp: g4, infinite: S3, gestureOrientation: f3, orientation: w3, touchMultiplier: y4, wheelMultiplier: T2, normalizeWheel: z, autoResize: M2 }, this.dimensions = new s3({ wrapper: i5, content: r5, autoResize: M2 }), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = false, this.isSmooth = h4 || a4, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new e2(), this.emitter = new o3(), this.options.wrapper.addEventListener("scroll", this.onScroll, { passive: false }), this.virtualScroll = new n3(l4, { touchMultiplier: y4, wheelMultiplier: T2, normalizeWheel: z }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, { passive: false }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped");
    }
    on(t3, i5) {
      return this.emitter.on(t3, i5);
    }
    off(t3, i5) {
      var e4;
      this.emitter.events[t3] = (e4 = this.emitter.events[t3]) == null ? void 0 : e4.filter((t4) => i5 !== t4);
    }
    setScroll(t3) {
      this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped = false, this.reset();
    }
    stop() {
      this.isStopped = true, this.animate.stop(), this.reset();
    }
    raf(t3) {
      const i5 = t3 - (this.time || t3);
      this.time = t3, this.animate.advance(1e-3 * i5);
    }
    scrollTo(t3, { offset: e4 = 0, immediate: s5 = false, lock: o5 = false, duration: n5 = this.options.duration, easing: r5 = this.options.easing, lerp: l4 = !n5 && this.options.lerp, onComplete: h4 = null, force: a4 = false, programmatic: c4 = true } = {}) {
      if (!this.isStopped || a4) {
        if (["top", "left", "start"].includes(t3))
          t3 = 0;
        else if (["bottom", "right", "end"].includes(t3))
          t3 = this.limit;
        else {
          var u4;
          let i5;
          if (typeof t3 == "string" ? i5 = document.querySelector(t3) : (u4 = t3) != null && u4.nodeType && (i5 = t3), i5) {
            if (this.options.wrapper !== window) {
              const t4 = this.options.wrapper.getBoundingClientRect();
              e4 -= this.isHorizontal ? t4.left : t4.top;
            }
            const s6 = i5.getBoundingClientRect();
            t3 = (this.isHorizontal ? s6.left : s6.top) + this.animatedScroll;
          }
        }
        if (typeof t3 == "number") {
          if (t3 += e4, t3 = Math.round(t3), this.options.infinite ? c4 && (this.targetScroll = this.animatedScroll = this.scroll) : t3 = i3(0, t3, this.limit), s5)
            return this.animatedScroll = this.targetScroll = t3, this.setScroll(this.scroll), this.reset(), this.emit(), void (h4 == null || h4());
          if (!c4) {
            if (t3 === this.targetScroll)
              return;
            this.targetScroll = t3;
          }
          this.animate.fromTo(this.animatedScroll, t3, { duration: n5, easing: r5, lerp: l4, onUpdate: (t4, { completed: i5 }) => {
            o5 && (this.isLocked = true), this.isScrolling = true, this.velocity = t4 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t4, this.setScroll(this.scroll), c4 && (this.targetScroll = t4), i5 && (o5 && (this.isLocked = false), requestAnimationFrame(() => {
              this.isScrolling = false;
            }), this.velocity = 0, h4 == null || h4()), this.emit();
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? this.options.content : this.options.wrapper;
    }
    get limit() {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (this.animatedScroll % (t3 = this.limit) + t3) % t3 : this.animatedScroll;
      var t3;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t3) {
      this.__isSmooth !== t3 && (this.rootElement.classList.toggle("lenis-smooth", t3), this.__isSmooth = t3);
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t3) {
      this.__isScrolling !== t3 && (this.rootElement.classList.toggle("lenis-scrolling", t3), this.__isScrolling = t3);
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t3) {
      this.__isStopped !== t3 && (this.rootElement.classList.toggle("lenis-stopped", t3), this.__isStopped = t3);
    }
  };

  // assets/js/utils/dom.js
  var isReady = false;
  document.addEventListener("DOMContentLoaded", function() {
    isReady = true;
  });
  function ready(fn) {
    if (isReady) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
  var injectCSS = (href) => {
    const link = document.createElement("link");
    link.href = href;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };
  var injectJS = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  };

  // assets/js/utils/alpine.js
  var hasInit = false;
  document.addEventListener("alpine:init", function() {
    hasInit = true;
  });
  function init(fn) {
    if (hasInit) {
      module_default.discoverUninitializedComponents(function(el) {
        module_default.initializeComponent(el);
      });
      fn();
    } else {
      document.addEventListener("alpine:init", fn);
    }
  }

  // assets/js/alpine/pageData.js
  init(() => {
    module_default.store("page", {
      title: "",
      modifier: "default",
      url: window.location.pathname,
      setTitle(title) {
        this.title = title;
      },
      setModifier(modifier) {
        this.modifier = modifier;
      },
      setUrl(url) {
        this.url = url;
      }
    });
    module_default.data("pageLink", () => ({
      isActive(el) {
        const $el = el || this.$el;
        const p4 = module_default.store("page");
        const url = $el.getAttribute("href");
        if (url === "/")
          return url === p4.url;
        return p4.url.match(url);
      },
      update() {
        if (this.isActive()) {
          this.$el.classList.add("active");
          this.$el.classList.remove("inactive");
        } else {
          this.$el.classList.remove("active");
          this.$el.classList.add("inactive");
        }
      },
      init(args) {
        this.$el.addEventListener("click", (ev) => {
          const curUrl = module_default.store("page").url;
          if (this.$el.dataset.toggle) {
            let href = this.$el.getAttribute("href");
            if (href.match("#")) {
              if (window.location.hash === href) {
                ev.preventDefault();
                module_default.store("route").removeHash();
              }
            } else {
            }
          } else {
            document.querySelectorAll('[x-data="pageLink"].active').forEach((el) => {
              if (curUrl === el.getAttribute("href") || !this.isActive(el)) {
                el.classList.remove("active");
                el.classList.add("inactive");
              }
            });
            this.$el.classList.add("active");
            this.$el.classList.remove("inactive");
          }
        });
        this.update();
        this.$watch("isActive", () => {
          this.update();
        });
      }
    }));
  });

  // assets/js/alpine/route.js
  init(() => {
    module_default.store("route", {
      href: "",
      match(rule) {
        return this.href.match(rule);
      },
      is(rule) {
        return this.href === rule;
      },
      willMatch(rule) {
        return this.loadingHref.match(rule);
      },
      willBe(rule) {
        return this.loadingHref === rule;
      },
      update(url) {
        let out = url;
        out = out.replace(/^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, "");
        this.href = `/${out}`;
      },
      removeHash() {
        var uri = window.location.toString();
        if (uri.indexOf("#") > 0) {
          var clean_uri = uri.substring(0, uri.indexOf("#"));
          window.history.pushState({}, document.title, clean_uri);
          this.update(window.location.href);
        }
      },
      init() {
        this.update(window.location.href);
        window.onpopstate = (event) => {
          this.update(event.target.location.href);
        };
        window.onhashchange = (event) => {
          this.update(window.location.href);
        };
      }
    });
  });

  // assets/js/alpine/venue.js
  init(() => {
    module_default.store("venue", {
      default: "soho",
      active: "",
      modal: "",
      setDefault() {
        this.active = "";
        this.modal = this.default;
      },
      setActive(value) {
        this.active = value;
        this.modal = value;
      },
      setModal(value) {
        this.modal = value;
      },
      init() {
      }
    });
  });

  // assets/js/alpine/lenis.js
  function getFirstElementChild(parentElement) {
    let firstElementChild = null;
    for (let i5 = 0; i5 < parentElement.childNodes.length; i5++) {
      const child = parentElement.childNodes[i5];
      if (child.nodeType === Node.ELEMENT_NODE) {
        firstElementChild = child;
        break;
      }
    }
    return firstElementChild;
  }
  init(() => {
    module_default.data("lenis", () => ({
      lenis: null,
      raf(time) {
        this.lenis.raf(time);
        this.updateCallback = this.raf.bind(this);
        this.loop = requestAnimationFrame(this.updateCallback);
      },
      init(args) {
        const lenis = new r3({
          wrapper: this.$el,
          content: getFirstElementChild(this.$el),
          wheelEventsTarget: this.$el
        });
        this.lenis = lenis;
        this.updateCallback = this.raf.bind(this);
        this.loop = requestAnimationFrame(this.updateCallback);
      },
      destroy() {
        if (this.loop) {
          cancelAnimationFrame(this.loop);
        }
        if (this.lenis)
          this.lenis.destroy();
        this.lenis = null;
      }
    }));
  });

  // src/theme/components/actionBar/actionBar.js
  init(() => {
    module_default.data("actionBar", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // node_modules/keen-slider/keen-slider.es.js
  var n4 = function() {
    return n4 = Object.assign || function(n5) {
      for (var t3, i5 = 1, e4 = arguments.length; i5 < e4; i5++)
        for (var r5 in t3 = arguments[i5])
          Object.prototype.hasOwnProperty.call(t3, r5) && (n5[r5] = t3[r5]);
      return n5;
    }, n4.apply(this, arguments);
  };
  function t2(n5, t3, i5) {
    if (i5 || arguments.length === 2)
      for (var e4, r5 = 0, a4 = t3.length; r5 < a4; r5++)
        !e4 && r5 in t3 || (e4 || (e4 = Array.prototype.slice.call(t3, 0, r5)), e4[r5] = t3[r5]);
    return n5.concat(e4 || Array.prototype.slice.call(t3));
  }
  function i4(n5) {
    return Array.prototype.slice.call(n5);
  }
  function e3(n5, t3) {
    var i5 = Math.floor(n5);
    return i5 === t3 || i5 + 1 === t3 ? n5 : t3;
  }
  function r4() {
    return Date.now();
  }
  function a3(n5, t3, i5) {
    if (t3 = "data-keen-slider-" + t3, i5 === null)
      return n5.removeAttribute(t3);
    n5.setAttribute(t3, i5 || "");
  }
  function o4(n5, t3) {
    return t3 = t3 || document, typeof n5 == "function" && (n5 = n5(t3)), Array.isArray(n5) ? n5 : typeof n5 == "string" ? i4(t3.querySelectorAll(n5)) : n5 instanceof HTMLElement ? [n5] : n5 instanceof NodeList ? i4(n5) : [];
  }
  function u3(n5) {
    n5.raw && (n5 = n5.raw), n5.cancelable && !n5.defaultPrevented && n5.preventDefault();
  }
  function s4(n5) {
    n5.raw && (n5 = n5.raw), n5.stopPropagation && n5.stopPropagation();
  }
  function c3() {
    var n5 = [];
    return { add: function(t3, i5, e4, r5) {
      t3.addListener ? t3.addListener(e4) : t3.addEventListener(i5, e4, r5), n5.push([t3, i5, e4, r5]);
    }, input: function(n6, t3, i5, e4) {
      this.add(n6, t3, function(n7) {
        return function(t4) {
          t4.nativeEvent && (t4 = t4.nativeEvent);
          var i6 = t4.changedTouches || [], e5 = t4.targetTouches || [], r5 = t4.detail && t4.detail.x ? t4.detail : null;
          return n7({ id: r5 ? r5.identifier ? r5.identifier : "i" : e5[0] ? e5[0] ? e5[0].identifier : "e" : "d", idChanged: r5 ? r5.identifier ? r5.identifier : "i" : i6[0] ? i6[0] ? i6[0].identifier : "e" : "d", raw: t4, x: r5 && r5.x ? r5.x : e5[0] ? e5[0].screenX : r5 ? r5.x : t4.pageX, y: r5 && r5.y ? r5.y : e5[0] ? e5[0].screenY : r5 ? r5.y : t4.pageY });
        };
      }(i5), e4);
    }, purge: function() {
      n5.forEach(function(n6) {
        n6[0].removeListener ? n6[0].removeListener(n6[2]) : n6[0].removeEventListener(n6[1], n6[2], n6[3]);
      }), n5 = [];
    } };
  }
  function d3(n5, t3, i5) {
    return Math.min(Math.max(n5, t3), i5);
  }
  function l3(n5) {
    return (n5 > 0 ? 1 : 0) - (n5 < 0 ? 1 : 0) || +n5;
  }
  function f2(n5) {
    var t3 = n5.getBoundingClientRect();
    return { height: e3(t3.height, n5.offsetHeight), width: e3(t3.width, n5.offsetWidth) };
  }
  function p3(n5, t3, i5, e4) {
    var r5 = n5 && n5[t3];
    return r5 == null ? i5 : e4 && typeof r5 == "function" ? r5() : r5;
  }
  function v3(n5) {
    return Math.round(1e6 * n5) / 1e6;
  }
  function h3(n5) {
    var t3, i5, e4, r5, a4, o5;
    function u4(t4) {
      o5 || (o5 = t4), s5(true);
      var a5 = t4 - o5;
      a5 > e4 && (a5 = e4);
      var l5 = r5[i5];
      if (l5[3] < a5)
        return i5++, u4(t4);
      var f3 = l5[2], p4 = l5[4], v4 = l5[0], h4 = l5[1] * (0, l5[5])(p4 === 0 ? 1 : (a5 - f3) / p4);
      if (h4 && n5.track.to(v4 + h4), a5 < e4)
        return d4();
      o5 = null, s5(false), c4(null), n5.emit("animationEnded");
    }
    function s5(n6) {
      t3.active = n6;
    }
    function c4(n6) {
      t3.targetIdx = n6;
    }
    function d4() {
      var n6;
      n6 = u4, a4 = window.requestAnimationFrame(n6);
    }
    function l4() {
      var t4;
      t4 = a4, window.cancelAnimationFrame(t4), s5(false), c4(null), o5 && n5.emit("animationStopped"), o5 = null;
    }
    return t3 = { active: false, start: function(t4) {
      if (l4(), n5.track.details) {
        var a5 = 0, o6 = n5.track.details.position;
        i5 = 0, e4 = 0, r5 = t4.map(function(n6) {
          var t5, i6 = Number(o6), r6 = (t5 = n6.earlyExit) !== null && t5 !== void 0 ? t5 : n6.duration, u5 = n6.easing, s6 = n6.distance * u5(r6 / n6.duration) || 0;
          o6 += s6;
          var c5 = e4;
          return e4 += r6, a5 += s6, [i6, n6.distance, c5, e4, n6.duration, u5];
        }), c4(n5.track.distToIdx(a5)), d4(), n5.emit("animationStarted");
      }
    }, stop: l4, targetIdx: null };
  }
  function m3(n5) {
    var i5, e4, a4, o5, u4, s5, c4, f3, h4, m4, g4, b4, x3, k3, y4 = 1 / 0, w3 = [], M2 = null, T2 = 0;
    function C2(n6) {
      _3(T2 + n6);
    }
    function E3(n6) {
      var t3 = z(T2 + n6).abs;
      return D2(t3) ? t3 : null;
    }
    function z(n6) {
      var i6 = Math.floor(Math.abs(v3(n6 / e4))), r5 = v3((n6 % e4 + e4) % e4);
      r5 === e4 && (r5 = 0);
      var a5 = l3(n6), o6 = c4.indexOf(t2([], c4, true).reduce(function(n7, t3) {
        return Math.abs(t3 - r5) < Math.abs(n7 - r5) ? t3 : n7;
      })), u5 = o6;
      return a5 < 0 && i6++, o6 === s5 && (u5 = 0, i6 += a5 > 0 ? 1 : -1), { abs: u5 + i6 * s5 * a5, origin: o6, rel: u5 };
    }
    function I2(n6, t3, i6) {
      var e5;
      if (t3 || !S3())
        return A2(n6, i6);
      if (!D2(n6))
        return null;
      var r5 = z(i6 != null ? i6 : T2), a5 = r5.abs, o6 = n6 - r5.rel, u5 = a5 + o6;
      e5 = A2(u5);
      var c5 = A2(u5 - s5 * l3(o6));
      return (c5 !== null && Math.abs(c5) < Math.abs(e5) || e5 === null) && (e5 = c5), v3(e5);
    }
    function A2(n6, t3) {
      if (t3 == null && (t3 = v3(T2)), !D2(n6) || n6 === null)
        return null;
      n6 = Math.round(n6);
      var i6 = z(t3), r5 = i6.abs, a5 = i6.rel, o6 = i6.origin, u5 = O2(n6), d4 = (t3 % e4 + e4) % e4, l4 = c4[o6], f4 = Math.floor((n6 - (r5 - a5)) / s5) * e4;
      return v3(l4 - d4 - l4 + c4[u5] + f4 + (o6 === s5 ? e4 : 0));
    }
    function D2(n6) {
      return L2(n6) === n6;
    }
    function L2(n6) {
      return d3(n6, h4, m4);
    }
    function S3() {
      return o5.loop;
    }
    function O2(n6) {
      return (n6 % s5 + s5) % s5;
    }
    function _3(t3) {
      var i6;
      i6 = t3 - T2, w3.push({ distance: i6, timestamp: r4() }), w3.length > 6 && (w3 = w3.slice(-6)), T2 = v3(t3);
      var e5 = H2().abs;
      if (e5 !== M2) {
        var a5 = M2 !== null;
        M2 = e5, a5 && n5.emit("slideChanged");
      }
    }
    function H2(t3) {
      var r5 = t3 ? null : function() {
        if (s5) {
          var n6 = S3(), t4 = n6 ? (T2 % e4 + e4) % e4 : T2, i6 = (n6 ? T2 % e4 : T2) - u4[0][2], r6 = 0 - (i6 < 0 && n6 ? e4 - Math.abs(i6) : i6), c5 = 0, d4 = z(T2), f4 = d4.abs, p4 = d4.rel, v4 = u4[p4][2], y5 = u4.map(function(t5, i7) {
            var a5 = r6 + c5;
            (a5 < 0 - t5[0] || a5 > 1) && (a5 += (Math.abs(a5) > e4 - 1 && n6 ? e4 : 0) * l3(-a5));
            var u5 = i7 - p4, d5 = l3(u5), h5 = u5 + f4;
            n6 && (d5 === -1 && a5 > v4 && (h5 += s5), d5 === 1 && a5 < v4 && (h5 -= s5), g4 !== null && h5 < g4 && (a5 += e4), b4 !== null && h5 > b4 && (a5 -= e4));
            var m5 = a5 + t5[0] + t5[1], x4 = Math.max(a5 >= 0 && m5 <= 1 ? 1 : m5 < 0 || a5 > 1 ? 0 : a5 < 0 ? Math.min(1, (t5[0] + a5) / t5[0]) : (1 - a5) / t5[0], 0);
            return c5 += t5[0] + t5[1], { abs: h5, distance: o5.rtl ? -1 * a5 + 1 - t5[0] : a5, portion: x4, size: t5[0] };
          });
          return f4 = L2(f4), p4 = O2(f4), { abs: L2(f4), length: a4, max: k3, maxIdx: m4, min: x3, minIdx: h4, position: T2, progress: n6 ? t4 / e4 : T2 / a4, rel: p4, slides: y5, slidesLength: e4 };
        }
      }();
      return i5.details = r5, n5.emit("detailsChanged"), r5;
    }
    return i5 = { absToRel: O2, add: C2, details: null, distToIdx: E3, idxToDist: I2, init: function(t3) {
      if (function() {
        if (o5 = n5.options, u4 = (o5.trackConfig || []).map(function(n6) {
          return [p3(n6, "size", 1), p3(n6, "spacing", 0), p3(n6, "origin", 0)];
        }), s5 = u4.length) {
          e4 = v3(u4.reduce(function(n6, t5) {
            return n6 + t5[0] + t5[1];
          }, 0));
          var t4, i7 = s5 - 1;
          a4 = v3(e4 + u4[0][2] - u4[i7][0] - u4[i7][2] - u4[i7][1]), c4 = u4.reduce(function(n6, i8) {
            if (!n6)
              return [0];
            var e5 = u4[n6.length - 1], r5 = n6[n6.length - 1] + (e5[0] + e5[2]) + e5[1];
            return r5 -= i8[2], n6[n6.length - 1] > r5 && (r5 = n6[n6.length - 1]), r5 = v3(r5), n6.push(r5), (!t4 || t4 < r5) && (f3 = n6.length - 1), t4 = r5, n6;
          }, null), a4 === 0 && (f3 = 0), c4.push(v3(e4));
        }
      }(), !s5)
        return H2(true);
      var i6;
      !function() {
        var t4 = n5.options.range, i7 = n5.options.loop;
        g4 = h4 = i7 ? p3(i7, "min", -1 / 0) : 0, b4 = m4 = i7 ? p3(i7, "max", y4) : f3;
        var e5 = p3(t4, "min", null), r5 = p3(t4, "max", null);
        e5 !== null && (h4 = e5), r5 !== null && (m4 = r5), x3 = h4 === -1 / 0 ? h4 : n5.track.idxToDist(h4 || 0, true, 0), k3 = m4 === y4 ? m4 : I2(m4, true, 0), r5 === null && (b4 = m4), p3(t4, "align", false) && m4 !== y4 && u4[O2(m4)][2] === 0 && (k3 -= 1 - u4[O2(m4)][0], m4 = E3(k3 - T2)), x3 = v3(x3), k3 = v3(k3);
      }(), i6 = t3, Number(i6) === i6 ? C2(A2(L2(t3))) : H2();
    }, to: _3, velocity: function() {
      var n6 = r4(), t3 = w3.reduce(function(t4, i6) {
        var e5 = i6.distance, r5 = i6.timestamp;
        return n6 - r5 > 200 || (l3(e5) !== l3(t4.distance) && t4.distance && (t4 = { distance: 0, lastTimestamp: 0, time: 0 }), t4.time && (t4.distance += e5), t4.lastTimestamp && (t4.time += r5 - t4.lastTimestamp), t4.lastTimestamp = r5), t4;
      }, { distance: 0, lastTimestamp: 0, time: 0 });
      return t3.distance / t3.time || 0;
    } };
  }
  function g3(n5) {
    var t3, i5, e4, r5, a4, o5, u4, s5;
    function c4(n6) {
      return 2 * n6;
    }
    function f3(n6) {
      return d3(n6, u4, s5);
    }
    function p4(n6) {
      return 1 - Math.pow(1 - n6, 3);
    }
    function v4() {
      return e4 ? n5.track.velocity() : 0;
    }
    function h4() {
      b4();
      var t4 = n5.options.mode === "free-snap", i6 = n5.track, e5 = v4();
      r5 = l3(e5);
      var u5 = n5.track.details, s6 = [];
      if (e5 || !t4) {
        var d4 = m4(e5), h5 = d4.dist, g5 = d4.dur;
        if (g5 = c4(g5), h5 *= r5, t4) {
          var x3 = i6.idxToDist(i6.distToIdx(h5), true);
          x3 && (h5 = x3);
        }
        s6.push({ distance: h5, duration: g5, easing: p4 });
        var k3 = u5.position, y4 = k3 + h5;
        if (y4 < a4 || y4 > o5) {
          var w3 = y4 < a4 ? a4 - k3 : o5 - k3, M2 = 0, T2 = e5;
          if (l3(w3) === r5) {
            var C2 = Math.min(Math.abs(w3) / Math.abs(h5), 1), E3 = function(n6) {
              return 1 - Math.pow(1 - n6, 1 / 3);
            }(C2) * g5;
            s6[0].earlyExit = E3, T2 = e5 * (1 - C2);
          } else
            s6[0].earlyExit = 0, M2 += w3;
          var z = m4(T2, 100), I2 = z.dist * r5;
          n5.options.rubberband && (s6.push({ distance: I2, duration: c4(z.dur), easing: p4 }), s6.push({ distance: -I2 + M2, duration: 500, easing: p4 }));
        }
        n5.animator.start(s6);
      } else
        n5.moveToIdx(f3(u5.abs), true, { duration: 500, easing: function(n6) {
          return 1 + --n6 * n6 * n6 * n6 * n6;
        } });
    }
    function m4(n6, t4) {
      t4 === void 0 && (t4 = 1e3);
      var i6 = 147e-9 + (n6 = Math.abs(n6)) / t4;
      return { dist: Math.pow(n6, 2) / i6, dur: n6 / i6 };
    }
    function g4() {
      var t4 = n5.track.details;
      t4 && (a4 = t4.min, o5 = t4.max, u4 = t4.minIdx, s5 = t4.maxIdx);
    }
    function b4() {
      n5.animator.stop();
    }
    n5.on("updated", g4), n5.on("optionsChanged", g4), n5.on("created", g4), n5.on("dragStarted", function() {
      e4 = false, b4(), t3 = i5 = n5.track.details.abs;
    }), n5.on("dragChecked", function() {
      e4 = true;
    }), n5.on("dragEnded", function() {
      var e5 = n5.options.mode;
      e5 === "snap" && function() {
        var e6 = n5.track, r6 = n5.track.details, u5 = r6.position, s6 = l3(v4());
        (u5 > o5 || u5 < a4) && (s6 = 0);
        var c5 = t3 + s6;
        r6.slides[e6.absToRel(c5)].portion === 0 && (c5 -= s6), t3 !== i5 && (c5 = i5), l3(e6.idxToDist(c5, true)) !== s6 && (c5 += s6), c5 = f3(c5);
        var d4 = e6.idxToDist(c5, true);
        n5.animator.start([{ distance: d4, duration: 500, easing: function(n6) {
          return 1 + --n6 * n6 * n6 * n6 * n6;
        } }]);
      }(), e5 !== "free" && e5 !== "free-snap" || h4();
    }), n5.on("dragged", function() {
      i5 = n5.track.details.abs;
    });
  }
  function b3(n5) {
    var t3, i5, e4, r5, a4, f3, p4, v4, h4, m4, g4, b4, x3, k3, y4, w3, M2, T2, C2 = c3();
    function E3(t4) {
      if (f3 && v4 === t4.id) {
        var o5 = D2(t4);
        if (h4) {
          if (!A2(t4))
            return I2(t4);
          m4 = o5, h4 = false, n5.emit("dragChecked");
        }
        if (w3)
          return m4 = o5;
        u3(t4);
        var c4 = function(t5) {
          if (M2 === -1 / 0 && T2 === 1 / 0)
            return t5;
          var e5 = n5.track.details, o6 = e5.length, u4 = e5.position, s5 = d3(t5, M2 - u4, T2 - u4);
          if (o6 === 0)
            return 0;
          if (!n5.options.rubberband)
            return s5;
          if (u4 <= T2 && u4 >= M2)
            return t5;
          if (u4 < M2 && i5 > 0 || u4 > T2 && i5 < 0)
            return t5;
          var c5 = (u4 < M2 ? u4 - M2 : u4 - T2) / o6, l4 = r5 * o6, f4 = Math.abs(c5 * l4), p5 = Math.max(0, 1 - f4 / a4 * 2);
          return p5 * p5 * t5;
        }(p4(m4 - o5) / r5 * e4);
        i5 = l3(c4);
        var x4 = n5.track.details.position;
        (x4 > M2 && x4 < T2 || x4 === M2 && i5 > 0 || x4 === T2 && i5 < 0) && s4(t4), g4 += c4, !b4 && Math.abs(g4 * r5) > 5 && (b4 = true), n5.track.add(c4), m4 = o5, n5.emit("dragged");
      }
    }
    function z(t4) {
      !f3 && n5.track.details && n5.track.details.length && (g4 = 0, f3 = true, b4 = false, h4 = true, v4 = t4.id, A2(t4), m4 = D2(t4), n5.emit("dragStarted"));
    }
    function I2(t4) {
      f3 && v4 === t4.idChanged && (f3 = false, n5.emit("dragEnded"));
    }
    function A2(n6) {
      var t4 = L2(), i6 = t4 ? n6.y : n6.x, e5 = t4 ? n6.x : n6.y, r6 = x3 !== void 0 && k3 !== void 0 && Math.abs(k3 - e5) <= Math.abs(x3 - i6);
      return x3 = i6, k3 = e5, r6;
    }
    function D2(n6) {
      return L2() ? n6.y : n6.x;
    }
    function L2() {
      return n5.options.vertical;
    }
    function S3() {
      r5 = n5.size, a4 = L2() ? window.innerHeight : window.innerWidth;
      var t4 = n5.track.details;
      t4 && (M2 = t4.min, T2 = t4.max);
    }
    function O2(n6) {
      b4 && (s4(n6), u3(n6));
    }
    function _3() {
      if (C2.purge(), n5.options.drag && !n5.options.disabled) {
        var i6;
        i6 = n5.options.dragSpeed || 1, p4 = typeof i6 == "function" ? i6 : function(n6) {
          return n6 * i6;
        }, e4 = n5.options.rtl ? -1 : 1, S3(), t3 = n5.container, function() {
          var n6 = "data-keen-slider-clickable";
          o4("[".concat(n6, "]:not([").concat(n6, "=false])"), t3).map(function(n7) {
            C2.add(n7, "dragstart", s4), C2.add(n7, "mousedown", s4), C2.add(n7, "touchstart", s4);
          });
        }(), C2.add(t3, "dragstart", function(n6) {
          u3(n6);
        }), C2.add(t3, "click", O2, { capture: true }), C2.input(t3, "ksDragStart", z), C2.input(t3, "ksDrag", E3), C2.input(t3, "ksDragEnd", I2), C2.input(t3, "mousedown", z), C2.input(t3, "mousemove", E3), C2.input(t3, "mouseleave", I2), C2.input(t3, "mouseup", I2), C2.input(t3, "touchstart", z, { passive: true }), C2.input(t3, "touchmove", E3, { passive: false }), C2.input(t3, "touchend", I2), C2.input(t3, "touchcancel", I2), C2.add(window, "wheel", function(n6) {
          f3 && u3(n6);
        });
        var r6 = "data-keen-slider-scrollable";
        o4("[".concat(r6, "]:not([").concat(r6, "=false])"), n5.container).map(function(n6) {
          return function(n7) {
            var t4;
            C2.input(n7, "touchstart", function(n8) {
              t4 = D2(n8), w3 = true, y4 = true;
            }, { passive: true }), C2.input(n7, "touchmove", function(i7) {
              var e5 = L2(), r7 = e5 ? n7.scrollHeight - n7.clientHeight : n7.scrollWidth - n7.clientWidth, a5 = t4 - D2(i7), o5 = e5 ? n7.scrollTop : n7.scrollLeft, s5 = e5 && n7.style.overflowY === "scroll" || !e5 && n7.style.overflowX === "scroll";
              if (t4 = D2(i7), (a5 < 0 && o5 > 0 || a5 > 0 && o5 < r7) && y4 && s5)
                return w3 = true;
              y4 = false, u3(i7), w3 = false;
            }), C2.input(n7, "touchend", function() {
              w3 = false;
            });
          }(n6);
        });
      }
    }
    n5.on("updated", S3), n5.on("optionsChanged", _3), n5.on("created", _3), n5.on("destroyed", C2.purge);
  }
  function x2(n5) {
    var t3, i5, e4 = null;
    function r5(t4, i6, e5) {
      n5.animator.active ? o5(t4, i6, e5) : requestAnimationFrame(function() {
        return o5(t4, i6, e5);
      });
    }
    function a4() {
      r5(false, false, i5);
    }
    function o5(i6, r6, a5) {
      var o6 = 0, u5 = n5.size, d5 = n5.track.details;
      if (d5 && t3) {
        var l5 = d5.slides;
        t3.forEach(function(n6, t4) {
          if (i6)
            !e4 && r6 && s5(n6, null, a5), c4(n6, null, a5);
          else {
            if (!l5[t4])
              return;
            var d6 = l5[t4].size * u5;
            !e4 && r6 && s5(n6, d6, a5), c4(n6, l5[t4].distance * u5 - o6, a5), o6 += d6;
          }
        });
      }
    }
    function u4(t4) {
      return n5.options.renderMode === "performance" ? Math.round(t4) : t4;
    }
    function s5(n6, t4, i6) {
      var e5 = i6 ? "height" : "width";
      t4 !== null && (t4 = u4(t4) + "px"), n6.style["min-" + e5] = t4, n6.style["max-" + e5] = t4;
    }
    function c4(n6, t4, i6) {
      if (t4 !== null) {
        t4 = u4(t4);
        var e5 = i6 ? t4 : 0;
        t4 = "translate3d(".concat(i6 ? 0 : t4, "px, ").concat(e5, "px, 0)");
      }
      n6.style.transform = t4, n6.style["-webkit-transform"] = t4;
    }
    function d4() {
      t3 && (o5(true, true, i5), t3 = null), n5.on("detailsChanged", a4, true);
    }
    function l4() {
      r5(false, true, i5);
    }
    function f3() {
      d4(), i5 = n5.options.vertical, n5.options.disabled || n5.options.renderMode === "custom" || (e4 = p3(n5.options.slides, "perView", null) === "auto", n5.on("detailsChanged", a4), (t3 = n5.slides).length && l4());
    }
    n5.on("created", f3), n5.on("optionsChanged", f3), n5.on("beforeOptionsChanged", function() {
      d4();
    }), n5.on("updated", l4), n5.on("destroyed", d4);
  }
  function k2(t3, i5) {
    return function(e4) {
      var r5, u4, s5, d4, l4, v4, h4 = c3();
      function m4(n5) {
        var t4;
        a3(e4.container, "reverse", (t4 = e4.container, window.getComputedStyle(t4, null).getPropertyValue("direction")) !== "rtl" || n5 ? null : ""), a3(e4.container, "v", e4.options.vertical && !n5 ? "" : null), a3(e4.container, "disabled", e4.options.disabled && !n5 ? "" : null);
      }
      function g4() {
        b4() && M2();
      }
      function b4() {
        var t4 = null;
        if (d4.forEach(function(n5) {
          n5.matches && (t4 = n5.__media);
        }), t4 === r5)
          return false;
        r5 || e4.emit("beforeOptionsChanged"), r5 = t4;
        var i6 = t4 ? s5.breakpoints[t4] : s5;
        return e4.options = n4(n4({}, s5), i6), m4(), I2(), A2(), C2(), true;
      }
      function x3(n5) {
        var t4 = f2(n5);
        return (e4.options.vertical ? t4.height : t4.width) / e4.size || 1;
      }
      function k3() {
        return e4.options.trackConfig.length;
      }
      function y4(t4) {
        for (var a4 in r5 = false, s5 = n4(n4({}, i5), t4), h4.purge(), u4 = e4.size, d4 = [], s5.breakpoints || []) {
          var o5 = window.matchMedia(a4);
          o5.__media = a4, d4.push(o5), h4.add(o5, "change", g4);
        }
        h4.add(window, "orientationchange", z), h4.add(window, "resize", E3), b4();
      }
      function w3(n5) {
        e4.animator.stop();
        var t4 = e4.track.details;
        e4.track.init(n5 != null ? n5 : t4 ? t4.abs : 0);
      }
      function M2(n5) {
        w3(n5), e4.emit("optionsChanged");
      }
      function T2(n5, t4) {
        if (n5)
          return y4(n5), void M2(t4);
        I2(), A2();
        var i6 = k3();
        C2(), k3() !== i6 ? M2(t4) : w3(t4), e4.emit("updated");
      }
      function C2() {
        var n5 = e4.options.slides;
        if (typeof n5 == "function")
          return e4.options.trackConfig = n5(e4.size, e4.slides);
        for (var t4 = e4.slides, i6 = t4.length, r6 = typeof n5 == "number" ? n5 : p3(n5, "number", i6, true), a4 = [], o5 = p3(n5, "perView", 1, true), u5 = p3(n5, "spacing", 0, true) / e4.size || 0, s6 = o5 === "auto" ? u5 : u5 / o5, c4 = p3(n5, "origin", "auto"), d5 = 0, l5 = 0; l5 < r6; l5++) {
          var f3 = o5 === "auto" ? x3(t4[l5]) : 1 / o5 - u5 + s6, v5 = c4 === "center" ? 0.5 - f3 / 2 : c4 === "auto" ? 0 : c4;
          a4.push({ origin: v5, size: f3, spacing: u5 }), d5 += f3;
        }
        if (d5 += u5 * (r6 - 1), c4 === "auto" && !e4.options.loop && o5 !== 1) {
          var h5 = 0;
          a4.map(function(n6) {
            var t5 = d5 - h5;
            return h5 += n6.size + u5, t5 >= 1 || (n6.origin = 1 - t5 - (d5 > 1 ? 0 : 1 - d5)), n6;
          });
        }
        e4.options.trackConfig = a4;
      }
      function E3() {
        I2();
        var n5 = e4.size;
        e4.options.disabled || n5 === u4 || (u4 = n5, T2());
      }
      function z() {
        E3(), setTimeout(E3, 500), setTimeout(E3, 2e3);
      }
      function I2() {
        var n5 = f2(e4.container);
        e4.size = (e4.options.vertical ? n5.height : n5.width) || 1;
      }
      function A2() {
        e4.slides = o4(e4.options.selector, e4.container);
      }
      e4.container = (v4 = o4(t3, l4 || document)).length ? v4[0] : null, e4.destroy = function() {
        h4.purge(), e4.emit("destroyed"), m4(true);
      }, e4.prev = function() {
        e4.moveToIdx(e4.track.details.abs - 1, true);
      }, e4.next = function() {
        e4.moveToIdx(e4.track.details.abs + 1, true);
      }, e4.update = T2, y4(e4.options);
    };
  }
  var y3 = function(n5, i5, e4) {
    try {
      return function(n6, t3) {
        var i6, e5 = {};
        return i6 = { emit: function(n7) {
          e5[n7] && e5[n7].forEach(function(n8) {
            n8(i6);
          });
          var t4 = i6.options && i6.options[n7];
          t4 && t4(i6);
        }, moveToIdx: function(n7, t4, e6) {
          var r5 = i6.track.idxToDist(n7, t4);
          if (r5) {
            var a4 = i6.options.defaultAnimation;
            i6.animator.start([{ distance: r5, duration: p3(e6 || a4, "duration", 500), easing: p3(e6 || a4, "easing", function(n8) {
              return 1 + --n8 * n8 * n8 * n8 * n8;
            }) }]);
          }
        }, on: function(n7, t4, i7) {
          i7 === void 0 && (i7 = false), e5[n7] || (e5[n7] = []);
          var r5 = e5[n7].indexOf(t4);
          r5 > -1 ? i7 && delete e5[n7][r5] : i7 || e5[n7].push(t4);
        }, options: n6 }, function() {
          if (i6.track = m3(i6), i6.animator = h3(i6), t3)
            for (var n7 = 0, e6 = t3; n7 < e6.length; n7++)
              (0, e6[n7])(i6);
          i6.track.init(i6.options.initial || 0), i6.emit("created");
        }(), i6;
      }(i5, t2([k2(n5, { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }), x2, b3, g3], e4 || [], true));
    } catch (n6) {
      console.error(n6);
    }
  };

  // assets/js/alpine/keen-slider.js
  var autoPlayPlugin = (slider) => {
    let timeout;
    let mouseOver = false;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver)
        return;
      timeout = setTimeout(() => {
        slider.next();
      }, 2e3);
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
  init(() => {
    module_default.data("keenslider", () => ({
      slider: null,
      init(args) {
        let $ref = this.$el;
        let settings = this.$el.dataset.settings;
        this.$nextTick(() => {
          const keenslider = new y3($ref, {
            loop: true,
            created: () => {
            },
            detailsChanged: (s5) => {
              s5.slides.forEach((element, idx) => {
                element.style.opacity = s5.track.details.slides[idx].portion;
              });
            },
            renderMode: "custom"
          }, [
            autoPlayPlugin
          ]);
          this.slider = keenslider;
        });
      },
      destroy() {
        if (this.slider)
          this.slider.destroy();
      }
    }));
  });

  // assets/js/dom/onAnimationFrame.js
  var onAnimationFrame = (fn) => {
    let loopId;
    let stop2 = function() {
      if (loopId) {
        window.cancelAnimationFrame(loopId);
      }
    };
    let controller;
    let loop2 = function() {
      loopId = window.requestAnimationFrame(loop2);
      controller = { id: loopId, stop: stop2 };
      fn(controller);
    };
    loop2();
    return [controller, stop2];
  };
  var onAnimationFrame_default = onAnimationFrame;

  // assets/js/dom/onViewportProgress.js
  var onViewportProgress = (fn, props) => {
    let PROGRESS;
    let [renderLoop, stopRenderLoop] = onAnimationFrame_default(({ stop: stop2 }) => {
      if (!props.ref)
        return;
      let viewPortHeight = window.innerHeight;
      let viewPortWidth = window.innerWidth;
      let viewPortDist = !props.horizontal ? viewPortHeight : viewPortWidth;
      let curPos = props.ref.getBoundingClientRect();
      let h4 = Math.abs(curPos.top - curPos.bottom);
      let w3 = Math.abs(curPos.left - curPos.right);
      let pos = !props.horizontal ? curPos.top : curPos.left;
      let dist = props.distance ? props.distance : viewPortDist;
      if (!props.horizontal) {
        dist = props.hasOwnProperty("ignoreHeight") ? dist : dist + h4;
      } else {
        dist = props.hasOwnProperty("ignoreWidth") ? dist : dist + w3;
      }
      if (!props.horizontal) {
        if (props.useHeight)
          dist = h4;
      } else {
        if (props.useWidth)
          dist = w3;
      }
      dist = props.hasOwnProperty("ignoreViewport") ? dist - viewPortDist : dist;
      let delayPx = props.delay ? props.delay : 0;
      let start2 = props.hasOwnProperty("start") ? props.start : viewPortDist;
      let minProgress = props.hasOwnProperty("minProgress") ? props.minProgress : 0;
      let maxProgress = props.hasOwnProperty("maxProgress") ? props.maxProgress : 1;
      let travelled = start2 - pos - delayPx;
      let progress = travelled / dist;
      progress = Math.round(progress * 100) / 100;
      if (props.reverse)
        progress = 1 - progress;
      let capProgress = props.hasOwnProperty("capProgress") ? props.capProgress : 1;
      if (capProgress) {
        if (progress > maxProgress)
          progress = maxProgress;
        if (progress < minProgress)
          progress = minProgress;
      }
      if (progress == PROGRESS)
        return;
      PROGRESS = progress;
      if (fn)
        fn({ progress, pos, travelled, dist });
    });
    return [
      props,
      function() {
        stopRenderLoop();
      }
    ];
  };
  var onViewportProgress_default = onViewportProgress;

  // assets/js/alpine/viewportProgress.js
  function lerp(start2, end, t3) {
    t3 = Math.max(0, Math.min(1, t3));
    return (1 - t3) * start2 + t3 * end;
  }
  init(() => {
    module_default.data("viewportProgress", () => ({
      amt: 0,
      stopRenderLoop: null,
      progress: 0,
      state() {
      },
      init(args) {
        const [props, stopRenderLoop] = onViewportProgress_default(({ progress }) => {
          this.progress = progress;
        }, {
          ref: this.$el,
          start: window.innerHeight
        });
        if (window.lenis && this.$el.dataset.parallax) {
          let amt = 0;
          let pllx = parseInt(this.$el.dataset.parallax);
          window.lenis.on("scroll", (props2) => {
            amt = lerp(amt, this.progress, 0.1);
            this.$el.style.transform = `translate3d(0 ,${amt * pllx}%,0)`;
          });
        }
        this.stopRenderLoop = stopRenderLoop;
      },
      opacity: {
        [":style"]() {
          return `opacity:${1 - this.progress};`;
        }
      },
      parallax: {
        [":style"]() {
          return ``;
        }
      },
      destroy() {
        if (this.stopRenderLoop)
          this.stopRenderLoop();
      }
    }));
  });

  // src/theme/components/example/example.js
  init(() => {
    module_default.data("example", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // src/theme/components/header/header.js
  init(() => {
    module_default.data("header", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // assets/js/alpine/watchSize.js
  function throttle2(callback, delay, trailing) {
    let timer = null;
    let lastCall = 0;
    return function() {
      const now = new Date().getTime();
      if (trailing && timer === null) {
        timer = setTimeout(function() {
          callback.apply(null, arguments);
          timer = null;
        }, delay);
      }
      if (now - lastCall >= delay) {
        lastCall = now;
        callback.apply(null, arguments);
      }
    };
  }
  function generateRandomAlphanumericId(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i5 = 0; i5 < length; i5++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }
  var globalObserver;
  var registeredListeners = [];
  function initGlobalObserver() {
    if (!globalObserver) {
      globalObserver = new MutationObserver((mutations) => {
        requestAnimationFrame(() => {
          registeredListeners.forEach((component) => component.setSize());
        });
      });
      globalObserver.observe(document.body, {
        attributes: false,
        childList: true,
        subtree: true
      });
    }
  }
  init(() => {
    initGlobalObserver();
    module_default.data("watchSize", () => ({
      UID: null,
      width: 0,
      height: 0,
      resizer: null,
      listener: null,
      setSize() {
        this.width = this.$el.offsetWidth;
        this.height = this.$el.offsetHeight;
      },
      init() {
        this.UID = generateRandomAlphanumericId(8);
        this.setSize();
        let interval = this.$el.dataset.interval;
        let shouldListen = this.$el.dataset.listen;
        if (shouldListen) {
          registeredListeners.push(this);
        } else if (interval) {
          this.listener = setInterval(() => {
            this.setSize();
          }, parseInt(interval));
        }
        this.$nextTick(() => {
          this.setSize();
        });
        const throttledResize = throttle2(() => {
          this.setSize();
        }, 50, true);
        this.resizer = throttledResize.bind(this);
        window.addEventListener("resize", this.resizer);
      },
      destroy() {
        if (this.resizer)
          window.removeEventListener("resize", this.resizer);
        if (this.listener)
          clearInterval(this.listener);
        let index = registeredListeners.indexOf(this);
        if (index > -1) {
          registeredListeners.splice(index, 1);
        }
      }
    }));
  });

  // node_modules/@alpinejs/intersect/dist/module.esm.js
  function src_default2(Alpine2) {
    Alpine2.directive("intersect", (el, { value, expression, modifiers }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluate2 = evaluateLater2(expression);
      let options = {
        rootMargin: getRootMargin(modifiers),
        threshold: getThreshhold(modifiers)
      };
      let observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === (value === "leave"))
            return;
          evaluate2();
          modifiers.includes("once") && observer2.disconnect();
        });
      }, options);
      observer2.observe(el);
      cleanup2(() => {
        observer2.disconnect();
      });
    });
  }
  function getThreshhold(modifiers) {
    if (modifiers.includes("full"))
      return 0.99;
    if (modifiers.includes("half"))
      return 0.5;
    if (!modifiers.includes("threshold"))
      return 0;
    let threshold = modifiers[modifiers.indexOf("threshold") + 1];
    if (threshold === "100")
      return 1;
    if (threshold === "0")
      return 0;
    return Number(`.${threshold}`);
  }
  function getLengthValue(rawValue) {
    let match2 = rawValue.match(/^(-?[0-9]+)(px|%)?$/);
    return match2 ? match2[1] + (match2[2] || "px") : void 0;
  }
  function getRootMargin(modifiers) {
    const key = "margin";
    const fallback = "0px 0px 0px 0px";
    const index = modifiers.indexOf(key);
    if (index === -1)
      return fallback;
    let values = [];
    for (let i5 = 1; i5 < 5; i5++) {
      values.push(getLengthValue(modifiers[index + i5] || ""));
    }
    values = values.filter((v4) => v4 !== void 0);
    return values.length ? values.join(" ").trim() : fallback;
  }
  var module_default2 = src_default2;

  // assets/js/alpine/image.js
  module_default.plugin(module_default2);
  init(() => {
    module_default.data("image", () => ({
      isLoading: false,
      loaded: false,
      state() {
        if (this.loaded)
          return "loaded";
        if (this.isLoading)
          return "loading";
        return "passive";
      },
      init(args) {
        if (!this.$el.getAttribute("x-bind"))
          this.load();
      },
      setImage() {
        let src = this.$el.dataset.src;
        let fit = this.$el.dataset.fit || "natural";
        if (src) {
          this.$el.innerHTML = `<img src="${src}" class="block w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${fit === "natural" ? "object-none" : ""} ${fit === "cover" ? "h-full object-cover" : ""} ${fit === "contain" ? "h-full object-contain" : ""}" />`;
        }
      },
      load() {
        let src = this.$el.getAttribute("data-src");
        if (src) {
          this.isLoading = true;
          let i5 = new Image();
          i5.onload = () => {
            this.isLoading = false;
            this.loaded = true;
            this.setImage();
          };
          i5.src = src;
        }
      },
      lazy: {
        [":class"]() {
          return `Image--${this.state()}`;
        },
        ["x-intersect.once"]() {
          this.load();
        }
      }
    }));
  });

  // src/theme/components/logos/logos.js
  init(() => {
    module_default.data("logos", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // assets/js/alpine/mapbox.js
  var import_values = __toESM(require_index_umd());
  var MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibWF0dG5pY2hvbHNvbiIsImEiOiJjbG5pd2owMDAxNnpsMmtuazlzNzlsZ3hkIn0.Nb5wUnelQnKppEYQQPflpw";
  var mapboxgl = window.mapboxgl ? window.mapboxgl : null;
  var initMapbox = ($el, callback) => {
    if (!$el)
      return;
    if (!mapboxgl) {
      setTimeout(() => {
        initMapbox($el, callback);
      }, 500);
      return;
    } else {
      let styles = $el.dataset.styles;
      let markerHex = $el.dataset.hex || "#C9C9C9";
      let tint = $el.dataset.tint || markerHex;
      let accent = $el.dataset.accent || "#FFFFFF";
      let latLng = $el.dataset.latlng.split(",");
      let lat = parseFloat(latLng[0].trim());
      let lng = parseFloat(latLng[1].trim());
      const colours = new import_values.default(tint).all(20);
      const accents = new import_values.default(accent).all(20);
      const map = new mapboxgl.Map({
        container: $el,
        style: styles,
        center: [lng, lat],
        zoom: 17
      });
      const marker1 = new mapboxgl.Marker({
        color: markerHex
      }).setLngLat([lng, lat]).addTo(map);
      map.addControl(new mapboxgl.NavigationControl());
      map.scrollZoom.disable();
      map.on("load", () => {
        const styleJson = map.getStyle();
        styleJson.layers.forEach((layer) => {
          let tint2 = colours[3];
          let bg = colours[1];
          let outline = colours[3];
          let labelOutline = accents[1];
          if (layer.type.match("background"))
            tint2 = bg;
          if (layer.id.match("road"))
            tint2 = accents[5];
          if (layer.id.match("structure"))
            tint2 = colours[2];
          if (layer.id.match("building"))
            tint2 = colours[2];
          if (layer.id.match("water"))
            tint2 = colours[5];
          if (layer.id.match("label"))
            tint2 = accents[9];
          let rgb = `rgb(${tint2.rgb[0]},${tint2.rgb[1]},${tint2.rgb[2]})`;
          let property = `${layer.type}-color`;
          if (layer.id.match("label"))
            property = "text-color";
          if (layer.type.match("background"))
            property = "background-color";
          if ([
            "background-color",
            "text-color",
            "fill-color",
            "line-color"
          ].indexOf(property) !== -1) {
            map.setPaintProperty(layer.id, property, rgb);
          }
          if (layer.id.match("building")) {
            map.setPaintProperty(layer.id, "fill-outline-color", `rgb(${outline.rgb[0]},${outline.rgb[1]},${outline.rgb[2]})`);
          }
          if (layer.id.match("label")) {
            map.setPaintProperty(layer.id, "text-halo-color", `rgb(${labelOutline.rgb[0]},${labelOutline.rgb[1]},${labelOutline.rgb[2]})`);
          }
        });
      });
      callback(map);
    }
  };
  init(() => {
    injectCSS("https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css");
    injectJS("https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js", () => {
      mapboxgl = window.mapboxgl;
      mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    });
    module_default.data("mapbox", () => ({
      map: null,
      init(args) {
        this.$nextTick(() => {
          initMapbox(this.$el, (map) => {
            this.map = map;
          });
        });
      },
      destroy() {
        if (this.map)
          this.map.remove();
      }
    }));
  });

  // src/theme/components/newsletter/newsletter.js
  init(() => {
    module_default.data("newsletter", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // src/theme/components/theme/theme.js
  init(() => {
    module_default.data("theme", () => ({
      init(args) {
      },
      destroy() {
      }
    }));
  });

  // assets/js/main.js
  window.global = window;
  ready(() => {
    const scrollWrapper = document.getElementById("page");
    let isScrolled = false;
    let lastScroll = 0;
    const lenis = new r3({});
    window.lenis = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    lenis.on("scroll", (props) => {
      if (props.animatedScroll >= 50 && lastScroll < props.animatedScroll) {
        if (!isScrolled)
          document.documentElement.classList.add("scrolled");
        isScrolled = true;
      } else {
        if (isScrolled)
          document.documentElement.classList.remove("scrolled");
        isScrolled = false;
      }
      lastScroll = props.animatedScroll;
    });
    requestAnimationFrame(raf);
    document.addEventListener("alpine:init", () => {
      module_default.directive("destroy", (el, { expression }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
        const onDestroy = evaluateLater2(expression);
        cleanup2(onDestroy);
      });
    });
    module_default.start();
    const swup = new B({
      ignoreVisit: (url, { el } = {}) => {
        let isHash = el ? el.getAttribute("href")[0] === "#" : false;
        if (isHash)
          return true;
        let isNoSwup = el == null ? void 0 : el.closest("[data-no-swup]");
        if (isNoSwup)
          return true;
        return false;
      },
      containers: ["#swup", "#opener"],
      plugins: [
        new V2({
          rules: [
            {
              from: "/pages/locations/:id?",
              to: "/pages/locations/:id?",
              containers: ["#locations"],
              debug: true
            }
          ]
        })
      ]
    });
    swup.hooks.on("link:click", (visit) => {
      router = module_default.store("route");
      page = module_default.store("page");
      if (router) {
        let p4 = visit.trigger.el.getAttribute("href");
        if (p4 === window.location.pathname) {
          if (!visit.trigger.el.getAttribute("href").match("#")) {
            if (window.location.hash) {
              router.removeHash();
            }
          }
        }
        router.update(p4);
        page.setUrl(p4);
      }
    });
    document.getElementsByTagName("html")[0].style.setProperty("--initialViewportHeight", window.innerHeight + "px");
    document.getElementsByTagName("html")[0].classList.add("js-ready");
  });
  window.Alpine = module_default;
})();
/**
	 * mix-css-color
	 * @version v0.2.0
	 * @link http://github.com/noeldelgado/mix-css-color/
	 * @license MIT
	 */
/**
	 * parse-css-color
	 * @version v0.2.0
	 * @link http://github.com/noeldelgado/parse-css-color/
	 * @license MIT
	 */
/**
	 * values.js - Get the tints and shades of a color
	 * @version v2.1.1
	 * @link http://noeldelgado.github.io/values.js/
	 * @license MIT
	 */
