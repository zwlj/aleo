(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
	[5387], {
		24574: function(a) {
			a.exports = d;
			var b = 128,
				c = 127;

			function d(a, e) {
				var f, g = 0,
					e = e || 0,
					h = 0,
					i = e,
					j = a.length;
				do {
					if (i >= j || h > 49) throw d.bytes = 0, RangeError("Could not decode varint");
					f = a[i++], g += h < 28 ? (f & c) << h : (f & c) * Math.pow(2, h), h += 7
				} while (f >= b);
				return d.bytes = i - e, g
			}
		},
		95078: function(a) {
			a.exports = e;
			var b = 128,
				c = -128,
				d = 2147483648;

			function e(a, f, g) {
				if (Number.MAX_SAFE_INTEGER && a > Number.MAX_SAFE_INTEGER) throw e.bytes = 0, RangeError("Could not encode varint");
				f = f || [];
				for (var h = g = g || 0; a >= d;) f[g++] = 255 & a | b, a /= 128;
				for (; a & c;) f[g++] = 255 & a | b, a >>>= 7;
				return f[g] = 0 | a, e.bytes = g - h + 1, f
			}
		},
		30045: function(a, b, c) {
			a.exports = {
				encode: c(95078),
				decode: c(24574),
				encodingLength: c(60453)
			}
		},
		60453: function(a) {
			var b = 128,
				c = 16384,
				d = 2097152,
				e = 268435456,
				f = 34359738368,
				g = 4398046511104,
				h = 562949953421312,
				i = 72057594037927940,
				j = 0x7fffffffffffffff;
			a.exports = function(a) {
				return a < b ? 1 : a < c ? 2 : a < d ? 3 : a < e ? 4 : a < f ? 5 : a < g ? 6 : a < h ? 7 : a < i ? 8 : a < j ? 9 : 10
			}
		},
		41424: function(a) {
			a.exports = d;
			var b = 128,
				c = 127;

			function d(a, e) {
				var f, g = 0,
					e = e || 0,
					h = 0,
					i = e,
					j = a.length;
				do {
					if (i >= j || h > 49) throw d.bytes = 0, RangeError("Could not decode varint");
					f = a[i++], g += h < 28 ? (f & c) << h : (f & c) * Math.pow(2, h), h += 7
				} while (f >= b);
				return d.bytes = i - e, g
			}
		},
		48297: function(a) {
			a.exports = e;
			var b = 128,
				c = -128,
				d = 2147483648;

			function e(a, f, g) {
				if (Number.MAX_SAFE_INTEGER && a > Number.MAX_SAFE_INTEGER) throw e.bytes = 0, RangeError("Could not encode varint");
				f = f || [];
				for (var h = g = g || 0; a >= d;) f[g++] = 255 & a | b, a /= 128;
				for (; a & c;) f[g++] = 255 & a | b, a >>>= 7;
				return f[g] = 0 | a, e.bytes = g - h + 1, f
			}
		},
		46193: function(a, b, c) {
			a.exports = {
				encode: c(48297),
				decode: c(41424),
				encodingLength: c(13566)
			}
		},
		13566: function(a) {
			var b = 128,
				c = 16384,
				d = 2097152,
				e = 268435456,
				f = 34359738368,
				g = 4398046511104,
				h = 562949953421312,
				i = 72057594037927940,
				j = 0x7fffffffffffffff;
			a.exports = function(a) {
				return a < b ? 1 : a < c ? 2 : a < d ? 3 : a < e ? 4 : a < f ? 5 : a < g ? 6 : a < h ? 7 : a < i ? 8 : a < j ? 9 : 10
			}
		},
		46781: function(a) {
			"use strict";

			function b(a, b) {
				for (var c = Array(arguments.length - 1), d = 0, e = 2, f = !0; e < arguments.length;) c[d++] = arguments[e++];
				return new Promise(function(e, g) {
					c[d] = function(a) {
						if (f) {
							if (f = !1, a) g(a);
							else {
								for (var b = Array(arguments.length - 1), c = 0; c < b.length;) b[c++] = arguments[c];
								e.apply(null, b)
							}
						}
					};
					try {
						a.apply(b || null, c)
					} catch (h) {
						f && (f = !1, g(h))
					}
				})
			}
			a.exports = b
		},
		87026: function(a, b) {
			"use strict";
			var c = b;
			c.length = function(a) {
				var b = a.length;
				if (!b) return 0;
				for (var c = 0; --b % 4 > 1 && "=" === a.charAt(b);) ++c;
				return Math.ceil(3 * a.length) / 4 - c
			};
			for (var d = Array(64), e = Array(123), f = 0; f < 64;) e[d[f] = f < 26 ? f + 65 : f < 52 ? f + 71 : f < 62 ? f - 4 : f - 59 | 43] = f++;
			c.encode = function(a, b, c) {
				for (var e, f = null, g = [], h = 0, i = 0; b < c;) {
					var j = a[b++];
					switch (i) {
						case 0:
							g[h++] = d[j >> 2], e = (3 & j) << 4, i = 1;
							break;
						case 1:
							g[h++] = d[e | j >> 4], e = (15 & j) << 2, i = 2;
							break;
						case 2:
							g[h++] = d[e | j >> 6], g[h++] = d[63 & j], i = 0
					}
					h > 8191 && ((f || (f = []))
						.push(String.fromCharCode.apply(String, g)), h = 0)
				}
				return (i && (g[h++] = d[e], g[h++] = 61, 1 === i && (g[h++] = 61)), f) ? (h && f.push(String.fromCharCode.apply(String, g.slice(0, h))), f.join("")) : String.fromCharCode.apply(String, g.slice(0, h))
			};
			var g = "invalid encoding";
			c.decode = function(a, b, c) {
				for (var d, f = c, h = 0, i = 0; i < a.length;) {
					var j = a.charCodeAt(i++);
					if (61 === j && h > 1) break;
					if (void 0 === (j = e[j])) throw Error(g);
					switch (h) {
						case 0:
							d = j, h = 1;
							break;
						case 1:
							b[c++] = d << 2 | (48 & j) >> 4, d = j, h = 2;
							break;
						case 2:
							b[c++] = (15 & d) << 4 | (60 & j) >> 2, d = j, h = 3;
							break;
						case 3:
							b[c++] = (3 & d) << 6 | j, h = 0
					}
				}
				if (1 === h) throw Error(g);
				return c - f
			}, c.test = function(a) {
				return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)
			}
		},
		15570: function(a) {
			"use strict";

			function b() {
				this._listeners = {}
			}
			a.exports = b, b.prototype.on = function(a, b, c) {
				return (this._listeners[a] || (this._listeners[a] = []))
					.push({
						fn: b,
						ctx: c || this
					}), this
			}, b.prototype.off = function(a, b) {
				if (void 0 === a) this._listeners = {};
				else if (void 0 === b) this._listeners[a] = [];
				else
					for (var c = this._listeners[a], d = 0; d < c.length;) c[d].fn === b ? c.splice(d, 1) : ++d;
				return this
			}, b.prototype.emit = function(a) {
				var b = this._listeners[a];
				if (b) {
					for (var c = [], d = 1; d < arguments.length;) c.push(arguments[d++]);
					for (d = 0; d < b.length;) b[d].fn.apply(b[d++].ctx, c)
				}
				return this
			}
		},
		5298: function(a) {
			"use strict";

			function b(a) {
				if ("undefined" != typeof Float32Array) ! function() {
					var b = new Float32Array([-0]),
						c = new Uint8Array(b.buffer),
						d = 128 === c[3];

					function e(a, d, e) {
						b[0] = a, d[e] = c[0], d[e + 1] = c[1], d[e + 2] = c[2], d[e + 3] = c[3]
					}

					function f(a, d, e) {
						b[0] = a, d[e] = c[3], d[e + 1] = c[2], d[e + 2] = c[1], d[e + 3] = c[0]
					}

					function g(a, d) {
						return c[0] = a[d], c[1] = a[d + 1], c[2] = a[d + 2], c[3] = a[d + 3], b[0]
					}

					function h(a, d) {
						return c[3] = a[d], c[2] = a[d + 1], c[1] = a[d + 2], c[0] = a[d + 3], b[0]
					}
					a.writeFloatLE = d ? e : f, a.writeFloatBE = d ? f : e, a.readFloatLE = d ? g : h, a.readFloatBE = d ? h : g
				}();
				else {
					function b(a, b, c, d) {
						var e = b < 0 ? 1 : 0;
						if (e && (b = -b), 0 === b) a(1 / b > 0 ? 0 : 2147483648, c, d);
						else if (isNaN(b)) a(2143289344, c, d);
						else if (b > 34028234663852886e22) a((e << 31 | 2139095040) >>> 0, c, d);
						else if (b < 11754943508222875e-54) a((e << 31 | Math.round(b / 1401298464324817e-60)) >>> 0, c, d);
						else {
							var f = Math.floor(Math.log(b) / Math.LN2),
								g = 8388607 & Math.round(b * Math.pow(2, -f) * 8388608);
							a((e << 31 | f + 127 << 23 | g) >>> 0, c, d)
						}
					}

					function g(a, b, c) {
						var d = a(b, c),
							e = (d >> 31) * 2 + 1,
							f = d >>> 23 & 255,
							g = 8388607 & d;
						return 255 === f ? g ? NaN : e * (1 / 0) : 0 === f ? 1401298464324817e-60 * e * g : e * Math.pow(2, f - 150) * (g + 8388608)
					}
					a.writeFloatLE = b.bind(null, c), a.writeFloatBE = b.bind(null, d), a.readFloatLE = g.bind(null, e), a.readFloatBE = g.bind(null, f)
				}
				if ("undefined" != typeof Float64Array) ! function() {
					var b = new Float64Array([-0]),
						c = new Uint8Array(b.buffer),
						d = 128 === c[7];

					function e(a, d, e) {
						b[0] = a, d[e] = c[0], d[e + 1] = c[1], d[e + 2] = c[2], d[e + 3] = c[3], d[e + 4] = c[4], d[e + 5] = c[5], d[e + 6] = c[6], d[e + 7] = c[7]
					}

					function f(a, d, e) {
						b[0] = a, d[e] = c[7], d[e + 1] = c[6], d[e + 2] = c[5], d[e + 3] = c[4], d[e + 4] = c[3], d[e + 5] = c[2], d[e + 6] = c[1], d[e + 7] = c[0]
					}

					function g(a, d) {
						return c[0] = a[d], c[1] = a[d + 1], c[2] = a[d + 2], c[3] = a[d + 3], c[4] = a[d + 4], c[5] = a[d + 5], c[6] = a[d + 6], c[7] = a[d + 7], b[0]
					}

					function h(a, d) {
						return c[7] = a[d], c[6] = a[d + 1], c[5] = a[d + 2], c[4] = a[d + 3], c[3] = a[d + 4], c[2] = a[d + 5], c[1] = a[d + 6], c[0] = a[d + 7], b[0]
					}
					a.writeDoubleLE = d ? e : f, a.writeDoubleBE = d ? f : e, a.readDoubleLE = d ? g : h, a.readDoubleBE = d ? h : g
				}();
				else {
					function h(a, b, c, d, e, f) {
						var g, h = d < 0 ? 1 : 0;
						if (h && (d = -d), 0 === d) a(0, e, f + b), a(1 / d > 0 ? 0 : 2147483648, e, f + c);
						else if (isNaN(d)) a(0, e, f + b), a(2146959360, e, f + c);
						else if (d > 17976931348623157e292) a(0, e, f + b), a((h << 31 | 2146435072) >>> 0, e, f + c);
						else if (d < 22250738585072014e-324) a((g = d / 5e-324) >>> 0, e, f + b), a((h << 31 | g / 4294967296) >>> 0, e, f + c);
						else {
							var i = Math.floor(Math.log(d) / Math.LN2);
							1024 === i && (i = 1023), a(4503599627370496 * (g = d * Math.pow(2, -i)) >>> 0, e, f + b), a((h << 31 | i + 1023 << 20 | 1048576 * g & 1048575) >>> 0, e, f + c)
						}
					}

					function i(a, b, c, d, e) {
						var f = a(d, e + b),
							g = a(d, e + c),
							h = (g >> 31) * 2 + 1,
							i = g >>> 20 & 2047,
							j = 4294967296 * (1048575 & g) + f;
						return 2047 === i ? j ? NaN : h * (1 / 0) : 0 === i ? 5e-324 * h * j : h * Math.pow(2, i - 1075) * (j + 4503599627370496)
					}
					a.writeDoubleLE = h.bind(null, c, 0, 4), a.writeDoubleBE = h.bind(null, d, 4, 0), a.readDoubleLE = i.bind(null, e, 0, 4), a.readDoubleBE = i.bind(null, f, 4, 0)
				}
				return a
			}

			function c(a, b, c) {
				b[c] = 255 & a, b[c + 1] = a >>> 8 & 255, b[c + 2] = a >>> 16 & 255, b[c + 3] = a >>> 24
			}

			function d(a, b, c) {
				b[c] = a >>> 24, b[c + 1] = a >>> 16 & 255, b[c + 2] = a >>> 8 & 255, b[c + 3] = 255 & a
			}

			function e(a, b) {
				return (a[b] | a[b + 1] << 8 | a[b + 2] << 16 | a[b + 3] << 24) >>> 0
			}

			function f(a, b) {
				return (a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]) >>> 0
			}
			a.exports = b(b)
		},
		36116: function(module) {
			"use strict";

			function inquire(moduleName) {
				try {
					var mod = eval("quire".replace(/^/, "re"))(moduleName);
					if (mod && (mod.length || Object.keys(mod)
						.length)) return mod
				} catch (e) {}
				return null
			}
			module.exports = inquire
		},
		90804: function(a) {
			"use strict";

			function b(a, b, c) {
				var d = c || 8192,
					e = d >>> 1,
					f = null,
					g = d;
				return function(c) {
					if (c < 1 || c > e) return a(c);
					g + c > d && (f = a(d), g = 0);
					var h = b.call(f, g, g += c);
					return 7 & g && (g = (7 | g) + 1), h
				}
			}
			a.exports = b
		},
		57958: function(a, b) {
			"use strict";
			var c = b;
			c.length = function(a) {
				for (var b = 0, c = 0, d = 0; d < a.length; ++d)(c = a.charCodeAt(d)) < 128 ? b += 1 : c < 2048 ? b += 2 : (64512 & c) == 55296 && (64512 & a.charCodeAt(d + 1)) == 56320 ? (++d, b += 4) : b += 3;
				return b
			}, c.read = function(a, b, c) {
				if (c - b < 1) return "";
				for (var d, e = null, f = [], g = 0; b < c;)(d = a[b++]) < 128 ? f[g++] = d : d > 191 && d < 224 ? f[g++] = (31 & d) << 6 | 63 & a[b++] : d > 239 && d < 365 ? (d = ((7 & d) << 18 | (63 & a[b++]) << 12 | (63 & a[b++]) << 6 | 63 & a[b++]) - 65536, f[g++] = 55296 + (d >> 10), f[g++] = 56320 + (1023 & d)) : f[g++] = (15 & d) << 12 | (63 & a[b++]) << 6 | 63 & a[b++], g > 8191 && ((e || (e = []))
					.push(String.fromCharCode.apply(String, f)), g = 0);
				return e ? (g && e.push(String.fromCharCode.apply(String, f.slice(0, g))), e.join("")) : String.fromCharCode.apply(String, f.slice(0, g))
			}, c.write = function(a, b, c) {
				for (var d, e, f = c, g = 0; g < a.length; ++g)(d = a.charCodeAt(g)) < 128 ? b[c++] = d : d < 2048 ? (b[c++] = d >> 6 | 192, b[c++] = 63 & d | 128) : (64512 & d) == 55296 && (64512 & (e = a.charCodeAt(g + 1))) == 56320 ? (d = 65536 + ((1023 & d) << 10) + (1023 & e), ++g, b[c++] = d >> 18 | 240, b[c++] = d >> 12 & 63 | 128, b[c++] = d >> 6 & 63 | 128, b[c++] = 63 & d | 128) : (b[c++] = d >> 12 | 224, b[c++] = d >> 6 & 63 | 128, b[c++] = 63 & d | 128);
				return c - f
			}
		},
		24379: function(a) {
			function b(a) {
				let b = new globalThis.AbortController;

				function c() {
					for (let d of (b.abort(), a)) d && d.removeEventListener && d.removeEventListener("abort", c)
				}
				for (let d of a)
					if (d && d.addEventListener) {
						if (d.aborted) {
							c();
							break
						}
						d.addEventListener("abort", c)
					} return b.signal
			}
			a.exports = b, a.exports.anySignal = b
		},
		30794: function(a, b) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.C_ACCESS_TOKEN_KEY = b.DFLAG = void 0, b.DFLAG = !1, b.C_ACCESS_TOKEN_KEY = "CYBERCONNECT_ACCESS_TOKEN"
		},
		34523: function(a, b, c) {
			"use strict";
			var d = this && this.__awaiter || function(a, b, c, d) {
					function e(a) {
						return a instanceof c ? a : new c(function(b) {
							b(a)
						})
					}
					return new(c || (c = Promise))(function(c, f) {
						function g(a) {
							try {
								i(d.next(a))
							} catch (b) {
								f(b)
							}
						}

						function h(a) {
							try {
								i(d.throw(a))
							} catch (b) {
								f(b)
							}
						}

						function i(a) {
							a.done ? c(a.value) : e(a.value)
								.then(g, h)
						}
						i((d = d.apply(a, b || []))
							.next())
					})
				},
				e = this && this.__generator || function(a, b) {
					var c, d, e, f, g = {
						label: 0,
						sent: function() {
							if (1 & e[0]) throw e[1];
							return e[1]
						},
						trys: [],
						ops: []
					};
					return f = {
						next: h(0),
						throw: h(1),
						return: h(2)
					}, "function" == typeof Symbol && (f[Symbol.iterator] = function() {
						return this
					}), f;

					function h(a) {
						return function(b) {
							return i([a, b])
						}
					}

					function i(h) {
						if (c) throw TypeError("Generator is already executing.");
						for (; f && (f = 0, h[0] && (g = 0)), g;) try {
							if (c = 1, d && (e = 2 & h[0] ? d.return : h[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, h[1]))
								.done) return e;
							switch (d = 0, e && (h = [2 & h[0], e.value]), h[0]) {
								case 0:
								case 1:
									e = h;
									break;
								case 4:
									return g.label++, {
										value: h[1],
										done: !1
									};
								case 5:
									g.label++, d = h[1], h = [0];
									continue;
								case 7:
									h = g.ops.pop(), g.trys.pop();
									continue;
								default:
									if (!(e = (e = g.trys)
										.length > 0 && e[e.length - 1]) && (6 === h[0] || 2 === h[0])) {
										g = 0;
										continue
									}
									if (3 === h[0] && (!e || h[1] > e[0] && h[1] < e[3])) {
										g.label = h[1];
										break
									}
									if (6 === h[0] && g.label < e[1]) {
										g.label = e[1], e = h;
										break
									}
									if (e && g.label < e[2]) {
										g.label = e[2], g.ops.push(h);
										break
									}
									e[2] && g.ops.pop(), g.trys.pop();
									continue
							}
							h = b.call(a, g)
						} catch (i) {
							h = [6, i], d = 0
						} finally {
							c = e = 0
						}
						if (5 & h[0]) throw h[1];
						return {
							value: h[0] ? h[1] : void 0,
							done: !0
						}
					}
				};
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.arrayBuffer2Hex = b.signWithSigningKey = b.getPublicKey = b.getSigningKey = b.hasSigningKey = b.generateSigningKey = b.rotateSigningKey = b.clearSigningKeyByAddress = b.clearSigningKey = b.clear = b.set = b.get = void 0;
			var f = c(55389),
				g = null,
				h = "signingKey_";

			function i(a) {
				return d(this, void 0, void 0, function() {
					return e(this, function(b) {
						switch (b.label) {
							case 0:
								if (!g) return [3, 2];
								return [4, g];
							case 1:
								return [2, b.sent()
									.get("store", a)
								];
							case 2:
								return [2]
						}
					})
				})
			}

			function j(a, b) {
				return d(this, void 0, void 0, function() {
					return e(this, function(c) {
						switch (c.label) {
							case 0:
								if (!g) return [3, 2];
								return [4, g];
							case 1:
								return [2, c.sent()
									.put("store", b, a)
								];
							case 2:
								return [2]
						}
					})
				})
			}

			function k() {
				return d(this, void 0, void 0, function() {
					return e(this, function(a) {
						switch (a.label) {
							case 0:
								return [4, g];
							case 1:
								return [2, a.sent()
									.clear("store")
								]
						}
					})
				})
			}

			function l() {
				return d(this, void 0, void 0, function() {
					return e(this, function(a) {
						switch (a.label) {
							case 0:
								return [4, k()];
							case 1:
								return a.sent(), [2]
						}
					})
				})
			}

			function m(a) {
				return d(this, void 0, void 0, function() {
					return e(this, function(b) {
						switch (b.label) {
							case 0:
								return [4, g];
							case 1:
								return [2, b.sent()
									.delete("store", h + a)
								]
						}
					})
				})
			}

			function n(a) {
				return d(this, void 0, void 0, function() {
					return e(this, function(b) {
						switch (b.label) {
							case 0:
								return [4, k()];
							case 1:
								return b.sent(), [2, o(a)]
						}
					})
				})
			}

			function o(a) {
				return d(this, void 0, void 0, function() {
					var b, c, d, f;
					return e(this, function(e) {
						switch (e.label) {
							case 0:
								return b = {
									name: "ECDSA",
									namedCurve: "P-256"
								}, c = !1, d = ["sign", "verify"], [4, window.crypto.subtle.generateKey(b, c, d)];
							case 1:
								return j(h + a, f = e.sent())
									.then(), [2, f]
						}
					})
				})
			}

			function p(a) {
				return d(this, void 0, void 0, function() {
					return e(this, function(b) {
						switch (b.label) {
							case 0:
								return [4, i(h + a)];
							case 1:
								return [2, b.sent()]
						}
					})
				})
			}

			function q(a) {
				return d(this, void 0, void 0, function() {
					var b;
					return e(this, function(c) {
						switch (c.label) {
							case 0:
								return [4, i(h + a)];
							case 1:
								return (b = c.sent()) || (b = o(a)), [2, b]
						}
					})
				})
			}

			function r(a) {
				return d(this, void 0, void 0, function() {
					var b, c;
					return e(this, function(d) {
						switch (d.label) {
							case 0:
								return [4, q(a)];
							case 1:
								return b = d.sent(), [4, window.crypto.subtle.exportKey("spki", b.publicKey)];
							case 2:
								return c = d.sent(), [2, window.btoa(u(c))]
						}
					})
				})
			}

			function s(a, b) {
				return d(this, void 0, void 0, function() {
					var c, d, f, g, h;
					return e(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, q(b)];
							case 1:
								return c = e.sent(), d = {
										name: "ECDSA",
										hash: {
											name: "SHA-256"
										}
									}, g = (f = new TextEncoder)
									.encode(a), [4, window.crypto.subtle.sign(d, c.privateKey, g)];
							case 2:
								return [2, t(h = e.sent())]
						}
					})
				})
			}

			function t(a) {
				return "0x" + Array.prototype.map.call(new Uint8Array(a), function(a) {
						return ("00" + a.toString(16))
							.slice(-2)
					})
					.join("")
			}

			function u(a) {
				return String.fromCharCode.apply(null, new Uint8Array(a))
			}
			"undefined" != typeof window && void 0 !== window.indexedDB && (g = (0, f.openDB)("CyberConnect", 1, {
				upgrade: function(a) {
					a.createObjectStore("store")
				}
			})), b.get = i, b.set = j, b.clear = k, b.clearSigningKey = l, b.clearSigningKeyByAddress = m, b.rotateSigningKey = n, b.generateSigningKey = o, b.hasSigningKey = p, b.getSigningKey = q, b.getPublicKey = r, b.signWithSigningKey = s, b.arrayBuffer2Hex = t
		},
		26683: function(a, b, c) {
			"use strict";
			var d = this && this.__assign || function() {
					return (d = Object.assign || function(a) {
							for (var b, c = 1, d = arguments.length; c < d; c++)
								for (var e in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
							return a
						})
						.apply(this, arguments)
				},
				e = this && this.__awaiter || function(a, b, c, d) {
					function e(a) {
						return a instanceof c ? a : new c(function(b) {
							b(a)
						})
					}
					return new(c || (c = Promise))(function(c, f) {
						function g(a) {
							try {
								i(d.next(a))
							} catch (b) {
								f(b)
							}
						}

						function h(a) {
							try {
								i(d.throw(a))
							} catch (b) {
								f(b)
							}
						}

						function i(a) {
							a.done ? c(a.value) : e(a.value)
								.then(g, h)
						}
						i((d = d.apply(a, b || []))
							.next())
					})
				},
				f = this && this.__generator || function(a, b) {
					var c, d, e, f, g = {
						label: 0,
						sent: function() {
							if (1 & e[0]) throw e[1];
							return e[1]
						},
						trys: [],
						ops: []
					};
					return f = {
						next: h(0),
						throw: h(1),
						return: h(2)
					}, "function" == typeof Symbol && (f[Symbol.iterator] = function() {
						return this
					}), f;

					function h(a) {
						return function(b) {
							return i([a, b])
						}
					}

					function i(h) {
						if (c) throw TypeError("Generator is already executing.");
						for (; f && (f = 0, h[0] && (g = 0)), g;) try {
							if (c = 1, d && (e = 2 & h[0] ? d.return : h[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, h[1]))
								.done) return e;
							switch (d = 0, e && (h = [2 & h[0], e.value]), h[0]) {
								case 0:
								case 1:
									e = h;
									break;
								case 4:
									return g.label++, {
										value: h[1],
										done: !1
									};
								case 5:
									g.label++, d = h[1], h = [0];
									continue;
								case 7:
									h = g.ops.pop(), g.trys.pop();
									continue;
								default:
									if (!(e = (e = g.trys)
										.length > 0 && e[e.length - 1]) && (6 === h[0] || 2 === h[0])) {
										g = 0;
										continue
									}
									if (3 === h[0] && (!e || h[1] > e[0] && h[1] < e[3])) {
										g.label = h[1];
										break
									}
									if (6 === h[0] && g.label < e[1]) {
										g.label = e[1], e = h;
										break
									}
									if (e && g.label < e[2]) {
										g.label = e[2], g.ops.push(h);
										break
									}
									e[2] && g.ops.pop(), g.trys.pop();
									continue
							}
							h = b.call(a, g)
						} catch (i) {
							h = [6, i], d = 0
						} finally {
							c = e = 0
						}
						if (5 & h[0]) throw h[1];
						return {
							value: h[0] ? h[1] : void 0,
							done: !0
						}
					}
				};
			Object.defineProperty(b, "__esModule", {
				value: !0
			});
			var g = c(94119),
				h = c(45639),
				i = c(9674),
				j = c(91301),
				k = c(33902),
				l = c(29939),
				m = c(30794),
				n = c(34523),
				o = function() {
					function a(a) {
						this.address = "", this.signature = "", this.chain = j.Blockchain.ETH, this.chainRef = "", this.provider = null, this.signingMessageEntity = "";
						var b = a.provider,
							c = a.namespace,
							d = a.env,
							e = a.chainRef,
							f = a.chain,
							h = a.signingMessageEntity;
						if (!c) throw new i.ConnectError(i.ErrorCode.EmptyNamespace);
						this.chainId = d === l.Env.PRODUCTION ? 56 : 97, this.namespace = c, this.endpoint = g.endpoints[d || l.Env.PRODUCTION], this.chain = f || j.Blockchain.ETH, this.chainRef = e || "", this.provider = b, this.signingMessageEntity = h, delete window.localStorage[m.C_ACCESS_TOKEN_KEY]
					}
					return a.prototype.getAddress = function() {
						return e(this, void 0, void 0, function() {
							var a;
							return f(this, function(b) {
								switch (b.label) {
									case 0:
										if (this.address) return [2, this.address];
										return a = this, [4, (0, k.getAddressByProvider)(this.provider, this.chain)];
									case 1:
										return [2, a.address = b.sent()]
								}
							})
						})
					}, a.prototype.authWithSigningKey = function() {
						var a, b;
						return e(this, void 0, void 0, function() {
							var c, d, e, g, j, l, m;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, (0, n.hasSigningKey)(this.address)];
									case 1:
										if (f.sent()) return [2];
										return [4, (0, n.getPublicKey)(this.address)];
									case 2:
										return c = f.sent(), d = "I authorize ".concat(this.signingMessageEntity || "CyberConnect", " from this device using signing key:\n"), e = "".concat(d)
											.concat(c), g = this, [4, this.getAddress()];
									case 3:
										g.address = f.sent(), f.label = 4;
									case 4:
										return f.trys.push([4, 9, , 10]), [4, (0, k.getSigningKeySignature)(this.provider, this.chain, e, this.address)];
									case 5:
										if (!(j = f.sent())) return [3, 7];
										return [4, (0, h.registerSigningKey)({
											address: this.address,
											signature: j,
											message: e,
											url: this.endpoint.cyberConnectApi
										})];
									case 6:
										if ((null === (a = null == (l = f.sent()) ? void 0 : l.data) || void 0 === a ? void 0 : a.registerSigningKey.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (b = null == l ? void 0 : l.data) || void 0 === b ? void 0 : b.registerSigningKey.result);
										return [3, 8];
									case 7:
										throw Error("signingKeySignature is empty");
									case 8:
										return [3, 10];
									case 9:
										throw m = f.sent(), (0, n.clearSigningKeyByAddress)(this.address), Error("User cancel the sign process");
									case 10:
										return [2]
								}
							})
						})
					}, a.prototype.retryFollow = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g, j;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 3, , 4]), [4, this.getFollowRequestParams(a, b)];
									case 1:
										return e = f.sent(), [4, (0, h.follow)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.follow.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry follow with ts from server failed:" + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.follow.status));
										return [3, 4];
									case 3:
										throw j = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, j.message || j);
									case 4:
										return [2]
								}
							})
						})
					}, a.prototype.getHandleWithoutSuffix = function(a) {
						return a.split(".")[0]
					}, a.prototype.getFollowRequestParams = function(a, b) {
						return e(this, void 0, void 0, function() {
							var c, d, e, g, h;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return c = this, [4, this.getAddress()];
									case 1:
										return c.address = f.sent(), [4, this.authWithSigningKey()];
									case 2:
										return f.sent(), d = {
											op: "follow",
											address: this.address,
											handle: this.getHandleWithoutSuffix(a),
											ts: b || Date.now()
										}, [4, (0, n.signWithSigningKey)(JSON.stringify(d), this.address)];
									case 3:
										return e = f.sent(), [4, (0, n.getPublicKey)(this.address)];
									case 4:
										return g = f.sent(), [2, h = {
											address: this.address,
											handle: a,
											message: JSON.stringify(d),
											signature: e,
											signingKey: g
										}]
								}
							})
						})
					}, a.prototype.follow = function(a) {
						var b, c, d, g, j, k, l;
						return e(this, void 0, void 0, function() {
							var e, m, o;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 8, , 9]), [4, this.getFollowRequestParams(a)];
									case 1:
										return e = f.sent(), [4, (0, h.follow)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if (!((null === (b = null == (m = f.sent()) ? void 0 : m.data) || void 0 === b ? void 0 : b.follow.status) === "INVALID_SIGNATURE" || (null === (c = null == m ? void 0 : m.data) || void 0 === c ? void 0 : c.follow.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (d = null == m ? void 0 : m.data) || void 0 === d ? void 0 : d.follow.status);
									case 4:
										if ((null === (g = null == m ? void 0 : m.data) || void 0 === g ? void 0 : g.follow.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryFollow(a, null === (j = null == m ? void 0 : m.data) || void 0 === j ? void 0 : j.follow.tsInServer)];
									case 5:
										return f.sent(), [3, 7];
									case 6:
										if ((null === (k = null == m ? void 0 : m.data) || void 0 === k ? void 0 : k.follow.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (l = null == m ? void 0 : m.data) || void 0 === l ? void 0 : l.follow.status);
										f.label = 7;
									case 7:
										return [3, 9];
									case 8:
										throw o = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, o.message || o);
									case 9:
										return [2]
								}
							})
						})
					}, a.prototype.getUnfollowRequestParams = function(a, b) {
						return e(this, void 0, void 0, function() {
							var c, d, e, g, h;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return c = this, [4, this.getAddress()];
									case 1:
										return c.address = f.sent(), [4, this.authWithSigningKey()];
									case 2:
										return f.sent(), d = {
											op: "unfollow",
											address: this.address,
											handle: this.getHandleWithoutSuffix(a),
											ts: b || Date.now()
										}, [4, (0, n.signWithSigningKey)(JSON.stringify(d), this.address)];
									case 3:
										return e = f.sent(), [4, (0, n.getPublicKey)(this.address)];
									case 4:
										return g = f.sent(), [2, h = {
											address: this.address,
											handle: a,
											message: JSON.stringify(d),
											signature: e,
											signingKey: g
										}]
								}
							})
						})
					}, a.prototype.retryUnfollow = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getUnfollowRequestParams(a, b)];
									case 1:
										return e = f.sent(), [4, (0, h.unfollow)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.unfollow.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry unfollow with ts from server failed:" + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.unfollow.status));
										return [2]
								}
							})
						})
					}, a.prototype.unfollow = function(a) {
						var b, c, d, g, j, k, l;
						return e(this, void 0, void 0, function() {
							var e, m, o;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getUnfollowRequestParams(a)];
									case 1:
										return e = f.sent(), [4, (0, h.unfollow)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if (!((null === (b = null == (m = f.sent()) ? void 0 : m.data) || void 0 === b ? void 0 : b.unfollow.status) === "INVALID_SIGNATURE" || (null === (c = null == m ? void 0 : m.data) || void 0 === c ? void 0 : c.unfollow.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (d = null == m ? void 0 : m.data) || void 0 === d ? void 0 : d.unfollow.status);
									case 4:
										if ((null === (g = null == m ? void 0 : m.data) || void 0 === g ? void 0 : g.unfollow.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryUnfollow(a, null === (j = null == m ? void 0 : m.data) || void 0 === j ? void 0 : j.unfollow.tsInServer)];
									case 5:
										f.sent(), f.label = 6;
									case 6:
										if ((null === (k = null == m ? void 0 : m.data) || void 0 === k ? void 0 : k.unfollow.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (l = null == m ? void 0 : m.data) || void 0 === l ? void 0 : l.unfollow.status);
										return [3, 8];
									case 7:
										throw o = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, o.message || o);
									case 8:
										return [2]
								}
							})
						})
					}, a.prototype.createPost = function(a) {
						return e(this, void 0, void 0, function() {
							return f(this, function(b) {
								switch (b.label) {
									case 0:
										return [4, this.publishPost(a)];
									case 1:
										return [2, b.sent()]
								}
							})
						})
					}, a.prototype.updatePost = function(a, b) {
						return e(this, void 0, void 0, function() {
							return f(this, function(c) {
								switch (c.label) {
									case 0:
										return [4, this.publishPost(d(d({}, b), {
											id: a
										}))];
									case 1:
										return [2, c.sent()]
								}
							})
						})
					}, a.prototype.retryLike = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getReactParams(a, "like", b)];
									case 1:
										return e = f.sent(), [4, (0, h.like)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.like.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry with ts from server failed: " + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.like.status));
										return [2]
								}
							})
						})
					}, a.prototype.like = function(a) {
						var b, c, d, g, j, k, l, m, o;
						return e(this, void 0, void 0, function() {
							var e, p, q;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getReactParams(a, "like")];
									case 1:
										return e = f.sent(), [4, (0, h.like)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (b = null == (p = f.sent()) ? void 0 : p.data) || void 0 === b ? void 0 : b.like.status) === "SUCCESS") return [2, null === (c = null == p ? void 0 : p.data) || void 0 === c ? void 0 : c.like];
										if (!((null === (d = null == p ? void 0 : p.data) || void 0 === d ? void 0 : d.like.status) === "INVALID_SIGNATURE" || (null === (g = null == p ? void 0 : p.data) || void 0 === g ? void 0 : g.like.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (j = null == p ? void 0 : p.data) || void 0 === j ? void 0 : j.like.status);
									case 4:
										if ((null === (k = null == p ? void 0 : p.data) || void 0 === k ? void 0 : k.like.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryLike(a, null === (l = null == p ? void 0 : p.data) || void 0 === l ? void 0 : l.like.tsInServer)];
									case 5:
										f.sent(), f.label = 6;
									case 6:
										if ((null === (m = null == p ? void 0 : p.data) || void 0 === m ? void 0 : m.like.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (o = null == p ? void 0 : p.data) || void 0 === o ? void 0 : o.like.status);
										return [3, 8];
									case 7:
										throw q = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, q.message || q);
									case 8:
										return [2]
								}
							})
						})
					}, a.prototype.retryDislike = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getReactParams(a, "dislike", b)];
									case 1:
										return e = f.sent(), [4, (0, h.dislike)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.dislike.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry dislike with ts from server failed: " + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.dislike.status));
										return [2]
								}
							})
						})
					}, a.prototype.dislike = function(a) {
						var b, c, d, g, j, k, l, m, o;
						return e(this, void 0, void 0, function() {
							var e, p, q;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getReactParams(a, "dislike")];
									case 1:
										return e = f.sent(), [4, (0, h.dislike)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (b = null == (p = f.sent()) ? void 0 : p.data) || void 0 === b ? void 0 : b.dislike.status) === "SUCCESS") return [2, null === (c = null == p ? void 0 : p.data) || void 0 === c ? void 0 : c.dislike.status];
										if (!((null === (d = null == p ? void 0 : p.data) || void 0 === d ? void 0 : d.dislike.status) === "INVALID_SIGNATURE" || (null === (g = null == p ? void 0 : p.data) || void 0 === g ? void 0 : g.dislike.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (j = null == p ? void 0 : p.data) || void 0 === j ? void 0 : j.dislike.status);
									case 4:
										if ((null === (k = null == p ? void 0 : p.data) || void 0 === k ? void 0 : k.dislike.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryDislike(a, null === (l = null == p ? void 0 : p.data) || void 0 === l ? void 0 : l.dislike.tsInServer)];
									case 5:
										f.sent(), f.label = 6;
									case 6:
										if ((null === (m = null == p ? void 0 : p.data) || void 0 === m ? void 0 : m.dislike.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (o = null == p ? void 0 : p.data) || void 0 === o ? void 0 : o.dislike.status);
										return [3, 8];
									case 7:
										throw q = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, q.message || q);
									case 8:
										return [2]
								}
							})
						})
					}, a.prototype.retryCancelReaction = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getReactParams(a, "cancel", b)];
									case 1:
										return e = f.sent(), [4, (0, h.cancelLike)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.cancelLike.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry cancel like with fs from server failed: " + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.dislike.status));
										return [2]
								}
							})
						})
					}, a.prototype.cancelReaction = function(a) {
						var b, c, d, g, j, k, l, m, o;
						return e(this, void 0, void 0, function() {
							var e, p, q;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getReactParams(a, "cancel")];
									case 1:
										return e = f.sent(), [4, (0, h.cancelLike)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (b = null == (p = f.sent()) ? void 0 : p.data) || void 0 === b ? void 0 : b.cancelLike.status) === "SUCCESS") return [2, null === (c = null == p ? void 0 : p.data) || void 0 === c ? void 0 : c.cancelLike.status];
										if (!((null === (d = null == p ? void 0 : p.data) || void 0 === d ? void 0 : d.cancelLike.status) === "INVALID_SIGNATURE" || (null === (g = null == p ? void 0 : p.data) || void 0 === g ? void 0 : g.cancelLike.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (j = null == p ? void 0 : p.data) || void 0 === j ? void 0 : j.dislike.status);
									case 4:
										if ((null === (k = null == p ? void 0 : p.data) || void 0 === k ? void 0 : k.cancelLike.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryCancelReaction(a, null === (l = null == p ? void 0 : p.data) || void 0 === l ? void 0 : l.cancelLike.tsInServer)];
									case 5:
										f.sent(), f.label = 6;
									case 6:
										if ((null === (m = null == p ? void 0 : p.data) || void 0 === m ? void 0 : m.cancelLike.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (o = null == p ? void 0 : p.data) || void 0 === o ? void 0 : o.dislike.status);
										return [3, 8];
									case 7:
										throw q = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, q.message || q);
									case 8:
										return [2]
								}
							})
						})
					}, a.prototype.getReactParams = function(a, b, c) {
						return e(this, void 0, void 0, function() {
							var d, e, g, h, j, k;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 5, , 6]), d = this, [4, this.getAddress()];
									case 1:
										return d.address = f.sent(), [4, this.authWithSigningKey()];
									case 2:
										return f.sent(), e = {
											op: b,
											address: this.address,
											target: a,
											ts: c || Date.now()
										}, [4, (0, n.signWithSigningKey)(JSON.stringify(e), this.address)];
									case 3:
										return g = f.sent(), [4, (0, n.getPublicKey)(this.address)];
									case 4:
										return h = f.sent(), [2, j = {
											postId: a,
											message: JSON.stringify(e),
											signature: g,
											signingKey: h
										}];
									case 5:
										throw k = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, k.message || k);
									case 6:
										return [2]
								}
							})
						})
					}, a.prototype.getCommentParams = function(a, b, c) {
						return e(this, void 0, void 0, function() {
							var d, e, g, h, i, j;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return d = this, [4, this.getAddress()];
									case 1:
										return d.address = f.sent(), [4, this.authWithSigningKey()];
									case 2:
										return f.sent(), g = JSON.stringify(e = {
											op: "comment",
											title: a.title,
											body: a.body,
											address: this.address,
											ts: c || Date.now(),
											chainId: this.chainId,
											target: b,
											handle: this.getHandleWithoutSuffix(a.author)
										}), [4, (0, n.signWithSigningKey)(g, this.address)];
									case 3:
										return h = f.sent(), [4, (0, n.getPublicKey)(this.address)];
									case 4:
										return i = f.sent(), [2, j = {
											contentId: a.id,
											targetContentId: b,
											input: {
												message: g,
												signature: h,
												signingKey: i
											}
										}]
								}
							})
						})
					}, a.prototype.retryPublishComment = function(a, b, c) {
						var d, g;
						return e(this, void 0, void 0, function() {
							var e, j;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getCommentParams(a, b, c)];
									case 1:
										return e = f.sent(), [4, (0, h.publishComment)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (d = null == (j = f.sent()) ? void 0 : j.data) || void 0 === d ? void 0 : d.publishComment.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry comment with ts from server failed: " + (null === (g = null == j ? void 0 : j.data) || void 0 === g ? void 0 : g.publishComment.status));
										return [2]
								}
							})
						})
					}, a.prototype.publishComment = function(a, b) {
						var c, d, g, j, k, l, m, o, p;
						return e(this, void 0, void 0, function() {
							var e, q, r;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getCommentParams(b, a)];
									case 1:
										return e = f.sent(), [4, (0, h.publishComment)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (q = f.sent()) ? void 0 : q.data) || void 0 === c ? void 0 : c.publishComment.status) === "SUCCESS") return [2, null === (d = null == q ? void 0 : q.data) || void 0 === d ? void 0 : d.publishComment];
										if (!((null === (g = null == q ? void 0 : q.data) || void 0 === g ? void 0 : g.publishComment.status) === "INVALID_SIGNATURE" || (null === (j = null == q ? void 0 : q.data) || void 0 === j ? void 0 : j.publishComment.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (k = null == q ? void 0 : q.data) || void 0 === k ? void 0 : k.publishComment.status);
									case 4:
										if ((null === (l = null == q ? void 0 : q.data) || void 0 === l ? void 0 : l.publishComment.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryPublishComment(b, a, null === (m = null == q ? void 0 : q.data) || void 0 === m ? void 0 : m.publishComment.tsInServer)];
									case 5:
										f.sent(), f.label = 6;
									case 6:
										if ((null === (o = null == q ? void 0 : q.data) || void 0 === o ? void 0 : o.publishComment.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (p = null == q ? void 0 : q.data) || void 0 === p ? void 0 : p.publishComment.status);
										return [3, 8];
									case 7:
										throw r = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, r.message || r);
									case 8:
										return [2]
								}
							})
						})
					}, a.prototype.createComment = function(a, b) {
						return e(this, void 0, void 0, function() {
							return f(this, function(c) {
								switch (c.label) {
									case 0:
										return [4, this.publishComment(a, b)];
									case 1:
										return [2, c.sent()]
								}
							})
						})
					}, a.prototype.updateComment = function(a, b, c) {
						return e(this, void 0, void 0, function() {
							return f(this, function(e) {
								switch (e.label) {
									case 0:
										return [4, this.publishComment(b, d(d({}, c), {
											id: a
										}))];
									case 1:
										return [2, e.sent()]
								}
							})
						})
					}, a.prototype.getPublishPostParams = function(a, b) {
						return e(this, void 0, void 0, function() {
							var c, d, e, g, h, i;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return c = this, [4, this.getAddress()];
									case 1:
										return c.address = f.sent(), [4, this.authWithSigningKey()];
									case 2:
										return f.sent(), e = JSON.stringify(d = {
											op: "post",
											title: a.title,
											body: a.body,
											address: this.address,
											ts: b || Date.now(),
											chainId: this.chainId,
											handle: this.getHandleWithoutSuffix(a.author)
										}), [4, (0, n.signWithSigningKey)(e, this.address)];
									case 3:
										return g = f.sent(), [4, (0, n.getPublicKey)(this.address)];
									case 4:
										return h = f.sent(), [2, i = {
											contentId: a.id,
											input: {
												authorAddress: this.address,
												message: e,
												signature: g,
												signingKey: h,
												authorHandle: a.author
											}
										}]
								}
							})
						})
					}, a.prototype.retryPublishPost = function(a, b) {
						var c, d;
						return e(this, void 0, void 0, function() {
							var e, g;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return [4, this.getPublishPostParams(a, b)];
									case 1:
										return e = f.sent(), [4, (0, h.publishPost)(e, this.endpoint.cyberConnectApi)];
									case 2:
										if ((null === (c = null == (g = f.sent()) ? void 0 : g.data) || void 0 === c ? void 0 : c.publishPost.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, "Retry publish with ts from server failed: " + (null === (d = null == g ? void 0 : g.data) || void 0 === d ? void 0 : d.publishPost.status));
										return [2]
								}
							})
						})
					}, a.prototype.publishPost = function(a) {
						var b, c, d, g, h, j, k, l, m;
						return e(this, void 0, void 0, function() {
							var e, o, p;
							return f(this, function(f) {
								switch (f.label) {
									case 0:
										return f.trys.push([0, 7, , 8]), [4, this.getPublishPostParams(a)];
									case 1:
										return e = f.sent(), console.log("params", e), [2];
									case 2:
										if ((null === (b = null == (o = f.sent()) ? void 0 : o.data) || void 0 === b ? void 0 : b.publishPost.status) === "SUCCESS") return [2, null === (c = null == o ? void 0 : o.data) || void 0 === c ? void 0 : c.publishPost];
										if (!((null === (d = null == o ? void 0 : o.data) || void 0 === d ? void 0 : d.publishPost.status) === "INVALID_SIGNATURE" || (null === (g = null == o ? void 0 : o.data) || void 0 === g ? void 0 : g.publishPost.status) === "EXPIRED_SIGNING_KEY")) return [3, 4];
										return [4, (0, n.clearSigningKey)()];
									case 3:
										throw f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, null === (h = null == o ? void 0 : o.data) || void 0 === h ? void 0 : h.publishPost.status);
									case 4:
										if ((null === (j = null == o ? void 0 : o.data) || void 0 === j ? void 0 : j.publishPost.status) !== "MESSAGE_EXPIRED") return [3, 6];
										return [4, this.retryPublishPost(a, null === (k = null == o ? void 0 : o.data) || void 0 === k ? void 0 : k.publishPost.tsInServer)];
									case 5:
										return f.sent(), [2];
									case 6:
										if ((null === (l = null == o ? void 0 : o.data) || void 0 === l ? void 0 : l.publishPost.status) !== "SUCCESS") throw new i.ConnectError(i.ErrorCode.GraphqlError, null === (m = null == o ? void 0 : o.data) || void 0 === m ? void 0 : m.publishPost.status);
										return [3, 8];
									case 7:
										throw p = f.sent(), new i.ConnectError(i.ErrorCode.GraphqlError, p.message || p);
									case 8:
										return [2]
								}
							})
						})
					}, a
				}();
			b.default = o
		},
		9674: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.ErrorCode = b.ConnectError = void 0;
			var d, e, f = c(30794),
				g = function() {
					function a(a, b) {
						this.code = a, this.message = b || h[a], !f.DFLAG && window && window.localStorage && delete window.localStorage[f.C_ACCESS_TOKEN_KEY]
					}
					return a.prototype.printError = function() {
						console.error(this.message)
					}, a
				}();
			b.ConnectError = g, (e = d = b.ErrorCode || (b.ErrorCode = {}))
				.EmptyNamespace = "EmptyNamespace", e.EmptyEthProvider = "EmptyEthProvider", e.EmptyAuthProvider = "EmptyAuthProvider", e.NetworkError = "NetworkError", e.GraphqlError = "GraphqlError", e.AuthProviderError = "AuthProviderError", e.SignJwtError = "SignJwtError";
			var h = {
				EmptyNamespace: "Namespace can not be empty",
				EmptyEthProvider: "Eth provider can not be empty",
				EmptyAuthProvider: "Could not find authProvider",
				NetworkError: "",
				GraphqlError: "",
				AuthProviderError: "",
				SignJwtError: ""
			}
		},
		29939: function(a, b, c) {
			"use strict";
			var d = this && this.__importDefault || function(a) {
				return a && a.__esModule ? a : {
					default: a
				}
			};
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.getAddressByProvider = b.ConnectError = b.BiConnectionType = b.ConnectionType = b.Blockchain = b.Env = void 0;
			var e = d(c(26683)),
				f = c(91301);
			Object.defineProperty(b, "Env", {
				enumerable: !0,
				get: function() {
					return f.Env
				}
			}), Object.defineProperty(b, "Blockchain", {
				enumerable: !0,
				get: function() {
					return f.Blockchain
				}
			}), Object.defineProperty(b, "ConnectionType", {
				enumerable: !0,
				get: function() {
					return f.ConnectionType
				}
			}), Object.defineProperty(b, "BiConnectionType", {
				enumerable: !0,
				get: function() {
					return f.BiConnectionType
				}
			});
			var g = c(9674);
			Object.defineProperty(b, "ConnectError", {
				enumerable: !0,
				get: function() {
					return g.ConnectError
				}
			});
			var h = c(33902);
			Object.defineProperty(b, "getAddressByProvider", {
				enumerable: !0,
				get: function() {
					return h.getAddressByProvider
				}
			}), b.default = e.default
		},
		94119: function(a, b) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.endpoints = void 0, b.endpoints = {
				STAGING: {
					cyberConnectApi: "https://api.stg.cyberconnect.dev/profile/"
				},
				PRODUCTION: {
					cyberConnectApi: "https://api.cyberconnect.dev/profile/"
				}
			}
		},
		45639: function(a, b, c) {
			"use strict";
			var d = this && this.__assign || function() {
					return (d = Object.assign || function(a) {
							for (var b, c = 1, d = arguments.length; c < d; c++)
								for (var e in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
							return a
						})
						.apply(this, arguments)
				},
				e = this && this.__awaiter || function(a, b, c, d) {
					function e(a) {
						return a instanceof c ? a : new c(function(b) {
							b(a)
						})
					}
					return new(c || (c = Promise))(function(c, f) {
						function g(a) {
							try {
								i(d.next(a))
							} catch (b) {
								f(b)
							}
						}

						function h(a) {
							try {
								i(d.throw(a))
							} catch (b) {
								f(b)
							}
						}

						function i(a) {
							a.done ? c(a.value) : e(a.value)
								.then(g, h)
						}
						i((d = d.apply(a, b || []))
							.next())
					})
				},
				f = this && this.__generator || function(a, b) {
					var c, d, e, f, g = {
						label: 0,
						sent: function() {
							if (1 & e[0]) throw e[1];
							return e[1]
						},
						trys: [],
						ops: []
					};
					return f = {
						next: h(0),
						throw: h(1),
						return: h(2)
					}, "function" == typeof Symbol && (f[Symbol.iterator] = function() {
						return this
					}), f;

					function h(a) {
						return function(b) {
							return i([a, b])
						}
					}

					function i(h) {
						if (c) throw TypeError("Generator is already executing.");
						for (; f && (f = 0, h[0] && (g = 0)), g;) try {
							if (c = 1, d && (e = 2 & h[0] ? d.return : h[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, h[1]))
								.done) return e;
							switch (d = 0, e && (h = [2 & h[0], e.value]), h[0]) {
								case 0:
								case 1:
									e = h;
									break;
								case 4:
									return g.label++, {
										value: h[1],
										done: !1
									};
								case 5:
									g.label++, d = h[1], h = [0];
									continue;
								case 7:
									h = g.ops.pop(), g.trys.pop();
									continue;
								default:
									if (!(e = (e = g.trys)
										.length > 0 && e[e.length - 1]) && (6 === h[0] || 2 === h[0])) {
										g = 0;
										continue
									}
									if (3 === h[0] && (!e || h[1] > e[0] && h[1] < e[3])) {
										g.label = h[1];
										break
									}
									if (6 === h[0] && g.label < e[1]) {
										g.label = e[1], e = h;
										break
									}
									if (e && g.label < e[2]) {
										g.label = e[2], g.ops.push(h);
										break
									}
									e[2] && g.ops.pop(), g.trys.pop();
									continue
							}
							h = b.call(a, g)
						} catch (i) {
							h = [6, i], d = 0
						} finally {
							c = e = 0
						}
						if (5 & h[0]) throw h[1];
						return {
							value: h[0] ? h[1] : void 0,
							done: !0
						}
					}
				};
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.ackAllNotifications = b.ackNotifications = b.biConnect = b.setAlias = b.batchFollow = b.follow = b.unfollow = b.publishPost = b.publishComment = b.like = b.dislike = b.cancelLike = b.auth = b.registerSigningKey = b.handleQuery = b.request = b.querySchemas = b.authSchema = b.ackAllNotificationsQuerySchema = b.ackNotificationsQuerySchema = b.bidirectionalConnectQuerySchema = b.setAliasQuerySchema = b.disconnectQuerySchema = b.batchConnectQuerySchema = b.connectQuerySchema = b.followSchema = b.unfollowSchema = b.registerSigningKeySchema = b.publishPostSchema = b.publishCommentSchema = b.likeSchema = b.dislikeSchema = b.cancelLikeSchema = void 0;
			var g = c(91301),
				h = function(a) {
					return {
						operationName: "cancelLike",
						query: "mutation cancelLike($input: CancelLikeRequest!) {\n	          cancelLike(input: $input) {\n                   status\n		   tsInServer\n		  }\n    		}",
						variables: {
							input: a
						}
					}
				};
			b.cancelLikeSchema = h;
			var i = function(a) {
				return {
					operationName: "dislike",
					query: "mutation dislike($input: DislikePostRequest!) {\n	          dislike(input: $input) {\n                   status\n		   tsInServer\n		  }\n    		}",
					variables: {
						input: a
					}
				}
			};
			b.dislikeSchema = i;
			var j = function(a) {
				return {
					operationName: "like",
					query: "mutation like($input: LikePostRequest!) {\n	          like(input: $input) {\n                   status\n		   tsInServer\n		  }\n    		}",
					variables: {
						input: a
					}
				}
			};
			b.likeSchema = j;
			var k = function(a) {
				return {
					operationName: "publishComment",
					query: "mutation publishComment($input: PublishPostCommentRequest!) {\n	          publishComment( input: $input) {\n		      status\n		      contentID\n		      arweaveTxHash\n		      tsInServer\n		  }\n    }",
					variables: {
						input: d(d({}, a.input), {
							postId: a.targetContentId
						})
					}
				}
			};
			b.publishCommentSchema = k;
			var l = function(a) {
				return {
					operationName: "publishPost",
					query: "mutation publishPost($contentId: String, $input: PublishRequest!) {\n	          publishPost(contentID: $contentId, input: $input) {\n		      status\n		      contentID\n		      arweaveTxHash\n		      tsInServer\n		  }\n    }",
					variables: {
						contentId: a.contentId,
						input: a.input
					}
				}
			};
			b.publishPostSchema = l;
			var m = function(a) {
				return {
					operationName: "registerSigningKey",
					query: "mutation registerSigningKey($input:RegisterSigningKeyRequest!) {\n      registerSigningKey(input: $input) {\n	      status\n      }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.registerSigningKeySchema = m;
			var n = function(a) {
				return {
					operationName: "unfollow",
					query: "mutation unfollow($input: UnFollowRequest!) {\n	          unfollow(input: $input) {\n			  status\n			  tsInServer\n		  }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.unfollowSchema = n;
			var o = function(a) {
				return {
					operationName: "follow",
					query: "mutation follow($input: FollowRequest!) {\n	          follow(input: $input) {\n			  status\n			  tsInServer\n		  }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.followSchema = o;
			var p = function(a) {
				return {
					operationName: "connect",
					query: "mutation connect($input: UpdateConnectionInput!) {connect(input: $input) {result}}",
					variables: {
						input: a
					}
				}
			};
			b.connectQuerySchema = p;
			var q = function(a) {
				return {
					operationName: "batchConnect",
					query: "mutation batchConnect($input: BatchUpdateConnectionInput!) {\n      batchConnect(input: $input) {\n        result\n        alreadyFollowed\n        successFollowed\n        failToFollow\n      }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.batchConnectQuerySchema = q;
			var r = function(a) {
				return {
					operationName: "disconnect",
					query: "mutation disconnect($input: UpdateConnectionInput!) {disconnect(input: $input) {result}}",
					variables: {
						input: a
					}
				}
			};
			b.disconnectQuerySchema = r;
			var s = function(a) {
				return {
					operationName: "alias",
					query: "mutation alias($input: UpdateConnectionInput!) {alias(input: $input) {result}}",
					variables: {
						input: a
					}
				}
			};
			b.setAliasQuerySchema = s;
			var t = function(a) {
				return {
					operationName: "bidirectionalConnect",
					query: "mutation bidirectionalConnect($input: BiConnectInput!) {\n      bidirectionalConnect(input: $input) {\n        result\n        message\n      }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.bidirectionalConnectQuerySchema = t;
			var u = function(a) {
				return {
					operationName: "ackNotifications",
					query: "mutation ackNotifications($input: AckNotificationsInput!) {\n      ackNotifications(input: $input) {\n        result\n      }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.ackNotificationsQuerySchema = u;
			var v = function(a) {
				return {
					operationName: "ackAllNotifications",
					query: "mutation ackAllNotifications($input: AckAllNotificationsInput!) {\n      ackAllNotifications(input: $input) {\n        result\n      }\n    }",
					variables: {
						input: a
					}
				}
			};
			b.ackAllNotificationsQuerySchema = v;
			var w = function(a) {
				var b = a.address,
					c = a.signature,
					d = a.network,
					e = void 0 === d ? g.Blockchain.ETH : d;
				return {
					operationName: "auth",
					query: "mutation auth($address: String!, $signature: String!, $network: String) {\n      auth(address: $address, signature: $signature, network: $network) {\n        result\n        authToken\n      }\n    }",
					variables: {
						address: b,
						signature: c,
						network: e
					}
				}
			};
			b.authSchema = w, b.querySchemas = {
				cancelLike: b.cancelLikeSchema,
				dislike: b.dislikeSchema,
				like: b.likeSchema,
				publishPost: b.publishPostSchema,
				publishComment: b.publishCommentSchema,
				follow: b.followSchema,
				unfollow: b.unfollowSchema,
				connect: b.connectQuerySchema,
				batchConnect: b.batchConnectQuerySchema,
				disconnect: b.disconnectQuerySchema,
				biConnect: b.bidirectionalConnectQuerySchema,
				auth: b.authSchema,
				setAlias: b.setAliasQuerySchema,
				registerSigningKey: b.registerSigningKeySchema,
				ackNotifications: b.ackNotificationsQuerySchema,
				ackAllNotifications: b.ackAllNotificationsQuerySchema
			};
			var x = function(a, b) {
				return void 0 === a && (a = ""), void 0 === b && (b = {}), e(void 0, void 0, void 0, function() {
					var c, d, e;
					return f(this, function(f) {
						switch (f.label) {
							case 0:
								return c = {
									"Content-Type": "application/json"
								}, (d = window.localStorage.getItem("LINK3_TO_ACCESS_TOKEN")) && (c.Authorization = d), [4, fetch(a, {
									method: "POST",
									mode: "cors",
									cache: "no-cache",
									headers: c,
									referrerPolicy: "no-referrer",
									body: JSON.stringify(b)
								})];
							case 1:
								return [2, (e = f.sent())
									.json()
								]
						}
					})
				})
			};
			b.request = x;
			var y = function(a, c) {
				return (0, b.request)(c, a)
			};
			b.handleQuery = y;
			var z = function(a) {
				var c = a.address,
					d = a.message,
					e = a.signature,
					f = a.url,
					g = b.querySchemas.registerSigningKey({
						address: c,
						message: d,
						signature: e
					});
				return (0, b.handleQuery)(g, f)
			};
			b.registerSigningKey = z;
			var A = function(a) {
				var c = a.address,
					d = a.signature,
					e = a.network,
					f = void 0 === e ? g.Blockchain.ETH : e,
					h = a.url,
					i = b.querySchemas.auth({
						address: c,
						signature: d,
						network: f
					});
				return (0, b.handleQuery)(i, h)
			};
			b.auth = A;
			var B = function(a, c) {
				var d = b.querySchemas.cancelLike(a);
				return (0, b.handleQuery)(d, c)
			};
			b.cancelLike = B;
			var C = function(a, c) {
				var d = b.querySchemas.dislike(a);
				return (0, b.handleQuery)(d, c)
			};
			b.dislike = C;
			var D = function(a, c) {
				var d = b.querySchemas.like(a);
				return (0, b.handleQuery)(d, c)
			};
			b.like = D;
			var E = function(a, c) {
				var d = b.querySchemas.publishComment(a);
				return (0, b.handleQuery)(d, c)
			};
			b.publishComment = E;
			var F = function(a, c) {
				var d = b.querySchemas.publishPost(a);
				return (0, b.handleQuery)(d, c)
			};
			b.publishPost = F;
			var G = function(a, c) {
				var d = b.querySchemas.unfollow(a);
				return (0, b.handleQuery)(d, c)
			};
			b.unfollow = G;
			var H = function(a, c) {
				var d = b.querySchemas.follow(a);
				return (0, b.handleQuery)(d, c)
			};
			b.follow = H;
			var I = function(a, c) {
				var d = b.querySchemas.batchConnect(a);
				return (0, b.handleQuery)(d, c)
			};
			b.batchFollow = I;
			var J = function(a, c) {
				var d = b.querySchemas.setAlias(a);
				return (0, b.handleQuery)(d, c)
			};
			b.setAlias = J;
			var K = function(a, c) {
				var d = b.querySchemas.biConnect(a);
				return (0, b.handleQuery)(d, c)
			};
			b.biConnect = K;
			var L = function(a, c) {
				var d = b.querySchemas.ackNotifications(a);
				return (0, b.handleQuery)(d, c)
			};
			b.ackNotifications = L;
			var M = function(a, c) {
				var d = b.querySchemas.ackAllNotifications(a);
				return (0, b.handleQuery)(d, c)
			};
			b.ackAllNotifications = M
		},
		91301: function(a, b) {
			"use strict";
			var c, d, e, f, g, h, i, j;
			Object.defineProperty(b, "__esModule", {
					value: !0
				}), b.BiConnectionType = b.ConnectionType = b.Env = b.Blockchain = void 0, (g = c = b.Blockchain || (b.Blockchain = {}))
				.ETH = "ETH", (h = d = b.Env || (b.Env = {}))
				.STAGING = "STAGING", h.PRODUCTION = "PRODUCTION", (i = e = b.ConnectionType || (b.ConnectionType = {}))
				.FOLLOW = "FOLLOW", i.LIKE = "LIKE", i.REPORT = "REPORT", i.WATCH = "WATCH", i.VOTE = "VOTE", (j = f = b.BiConnectionType || (b.BiConnectionType = {}))
				.INIT = "INIT", j.ACCEPT = "ACCEPT", j.REJECT = "REJECT", j.TERMINATE = "TERMINATE", j.BLOCK = "BLOCK", j.UNBLOCK = "UNBLOCK"
		},
		33902: function(a, b, c) {
			"use strict";
			var d = this && this.__awaiter || function(a, b, c, d) {
					function e(a) {
						return a instanceof c ? a : new c(function(b) {
							b(a)
						})
					}
					return new(c || (c = Promise))(function(c, f) {
						function g(a) {
							try {
								i(d.next(a))
							} catch (b) {
								f(b)
							}
						}

						function h(a) {
							try {
								i(d.throw(a))
							} catch (b) {
								f(b)
							}
						}

						function i(a) {
							a.done ? c(a.value) : e(a.value)
								.then(g, h)
						}
						i((d = d.apply(a, b || []))
							.next())
					})
				},
				e = this && this.__generator || function(a, b) {
					var c, d, e, f, g = {
						label: 0,
						sent: function() {
							if (1 & e[0]) throw e[1];
							return e[1]
						},
						trys: [],
						ops: []
					};
					return f = {
						next: h(0),
						throw: h(1),
						return: h(2)
					}, "function" == typeof Symbol && (f[Symbol.iterator] = function() {
						return this
					}), f;

					function h(a) {
						return function(b) {
							return i([a, b])
						}
					}

					function i(h) {
						if (c) throw TypeError("Generator is already executing.");
						for (; f && (f = 0, h[0] && (g = 0)), g;) try {
							if (c = 1, d && (e = 2 & h[0] ? d.return : h[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, h[1]))
								.done) return e;
							switch (d = 0, e && (h = [2 & h[0], e.value]), h[0]) {
								case 0:
								case 1:
									e = h;
									break;
								case 4:
									return g.label++, {
										value: h[1],
										done: !1
									};
								case 5:
									g.label++, d = h[1], h = [0];
									continue;
								case 7:
									h = g.ops.pop(), g.trys.pop();
									continue;
								default:
									if (!(e = (e = g.trys)
										.length > 0 && e[e.length - 1]) && (6 === h[0] || 2 === h[0])) {
										g = 0;
										continue
									}
									if (3 === h[0] && (!e || h[1] > e[0] && h[1] < e[3])) {
										g.label = h[1];
										break
									}
									if (6 === h[0] && g.label < e[1]) {
										g.label = e[1], e = h;
										break
									}
									if (e && g.label < e[2]) {
										g.label = e[2], g.ops.push(h);
										break
									}
									e[2] && g.ops.pop(), g.trys.pop();
									continue
							}
							h = b.call(a, g)
						} catch (i) {
							h = [6, i], d = 0
						} finally {
							c = e = 0
						}
						if (5 & h[0]) throw h[1];
						return {
							value: h[0] ? h[1] : void 0,
							done: !0
						}
					}
				};
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.getSigningKeySignature = b.getAddressByProvider = b.safeSend = b.encodeRpcMessage = void 0;
			var f = c(91301),
				g = c(75398),
				h = c(47969),
				i = function(a, b) {
					return {
						jsonrpc: "2.0",
						id: 1,
						method: a,
						params: b
					}
				};
			b.encodeRpcMessage = i;
			var j = function(a, c, d) {
				if (null == d && (d = []), a.request) return a.request({
						method: c,
						params: d
					})
					.then(function(a) {
						return a
					}, function(a) {
						throw a
					});
				if (a.sendAsync || a.send) {
					var e = (a.sendAsync ? a.sendAsync : a.send)
						.bind(a),
						f = (0, b.encodeRpcMessage)(c, d);
					return new Promise(function(a, b) {
						e(f, function(c, d) {
							if (c && b(c), d.error) {
								var e = Error(d.error.message);
								e.code = d.error.code, e.data = d.error.data, b(e)
							}
							a(d.result)
						})
					})
				}
				throw Error("Unsupported provider; provider must implement one of the following methods: send, sendAsync, request")
			};
			b.safeSend = j;
			var k = function(a, c) {
				return d(void 0, void 0, void 0, function() {
					var d, g, h, i;
					return e(this, function(e) {
						switch (e.label) {
							case 0:
								if ((d = c) === f.Blockchain.ETH) return [3, 1];
								return [3, 5];
							case 1:
								if ("function" != typeof a.getSigner) return [3, 3];
								return [4, (g = a.getSigner())
									.getAddress()
								];
							case 2:
								return [2, h = e.sent()];
							case 3:
								return [4, (0, b.safeSend)(a, "eth_accounts")];
							case 4:
								if ((i = e.sent()) && i[0]) return [2, i[0]];
								return [2, ""];
							case 5:
								return [2, ""];
							case 6:
								return [2]
						}
					})
				})
			};
			b.getAddressByProvider = k;
			var l = function(a, c, i, j) {
				return d(void 0, void 0, void 0, function() {
					var d, k, l;
					return e(this, function(e) {
						switch (e.label) {
							case 0:
								if (c !== f.Blockchain.ETH) return [3, 4];
								if (a.isAuthereum) return [2, a.signMessageWithSigningKey(i)];
								if ("function" != typeof a.getSigner) return [3, 2];
								return [4, (d = a.getSigner())
									.signMessage(i)
								];
							case 1:
								return [2, k = e.sent()];
							case 2:
								return [4, (0, b.safeSend)(a, "personal_sign", [(0, g.hexlify)((0, h.toUtf8Bytes)(i)), j, ])];
							case 3:
								return [2, l = e.sent()];
							case 4:
								return [2, ""]
						}
					})
				})
			};
			b.getSigningKeySignature = l
		},
		65881: function(a) {
			var b = 1e3,
				c = 60 * b,
				d = 60 * c,
				e = 24 * d,
				f = 7 * e,
				g = 365.25 * e;

			function h(a) {
				if (!((a = String(a))
					.length > 100)) {
					var h = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);
					if (h) {
						var i = parseFloat(h[1]),
							j = (h[2] || "ms")
							.toLowerCase();
						switch (j) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return i * g;
							case "weeks":
							case "week":
							case "w":
								return i * f;
							case "days":
							case "day":
							case "d":
								return i * e;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return i * d;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return i * c;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return i * b;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return i;
							default:
								return
						}
					}
				}
			}

			function i(a) {
				var f = Math.abs(a);
				return f >= e ? Math.round(a / e) + "d" : f >= d ? Math.round(a / d) + "h" : f >= c ? Math.round(a / c) + "m" : f >= b ? Math.round(a / b) + "s" : a + "ms"
			}

			function j(a) {
				var f = Math.abs(a);
				return f >= e ? k(a, f, e, "day") : f >= d ? k(a, f, d, "hour") : f >= c ? k(a, f, c, "minute") : f >= b ? k(a, f, b, "second") : a + " ms"
			}

			function k(a, b, c, d) {
				var e = b >= 1.5 * c;
				return Math.round(a / c) + " " + d + (e ? "s" : "")
			}
			a.exports = function(a, b) {
				b = b || {};
				var c = typeof a;
				if ("string" === c && a.length > 0) return h(a);
				if ("number" === c && isFinite(a)) return b.long ? j(a) : i(a);
				throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
			}
		},
		25130: function(a, b, c) {
			var d = c(34406);
			b.formatArgs = g, b.save = h, b.load = i, b.useColors = f, b.storage = j();
			let e;

			function f() {
				return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase()
					.match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase()
					.match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase()
					.match(/applewebkit\/(\d+)/))
			}

			function g(b) {
				if (b[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + b[0] + (this.useColors ? "%c " : " ") + "+" + a.exports.humanize(this.diff), !this.useColors) return;
				let c = "color: " + this.color;
				b.splice(1, 0, c, "color: inherit");
				let d = 0,
					e = 0;
				b[0].replace(/%[a-zA-Z%]/g, a => {
					"%%" !== a && (d++, "%c" === a && (e = d))
				}), b.splice(e, 0, c)
			}

			function h(a) {
				try {
					a ? b.storage.setItem("debug", a) : b.storage.removeItem("debug")
				} catch (c) {}
			}

			function i() {
				let a;
				try {
					a = b.storage.getItem("debug")
				} catch (c) {}
				return !a && void 0 !== d && "env" in d && (a = d.env.DEBUG), a
			}

			function j() {
				try {
					return localStorage
				} catch (a) {}
			}
			b.destroy = (e = !1, () => {
				e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
			}), b.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], b.log = console.debug || console.log || (() => {}), a.exports = c(87123)(b);
			let {
				formatters: k
			} = a.exports;
			k.j = function(a) {
				try {
					return JSON.stringify(a)
				} catch (b) {
					return "[UnexpectedJSONParseError]: " + b.message
				}
			}
		},
		87123: function(a, b, c) {
			function d(a) {
				function b(a) {
					let b = 0;
					for (let c = 0; c < a.length; c++) b = (b << 5) - b + a.charCodeAt(c), b |= 0;
					return d.colors[Math.abs(b) % d.colors.length]
				}

				function d(a) {
					let b, c = null,
						f, g;

					function h(...a) {
						if (!h.enabled) return;
						let c = h,
							e = Number(new Date),
							f = e - (b || e);
						c.diff = f, c.prev = b, c.curr = e, b = e, a[0] = d.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
						let g = 0;
						a[0] = a[0].replace(/%([a-zA-Z%])/g, (b, e) => {
							if ("%%" === b) return "%";
							g++;
							let f = d.formatters[e];
							if ("function" == typeof f) {
								let h = a[g];
								b = f.call(c, h), a.splice(g, 1), g--
							}
							return b
						}), d.formatArgs.call(c, a);
						let i = c.log || d.log;
						i.apply(c, a)
					}
					return h.namespace = a, h.useColors = d.useColors(), h.color = d.selectColor(a), h.extend = e, h.destroy = d.destroy, Object.defineProperty(h, "enabled", {
						enumerable: !0,
						configurable: !1,
						get: () => null !== c ? c : (f !== d.namespaces && (f = d.namespaces, g = d.enabled(a)), g),
						set: a => {
							c = a
						}
					}), "function" == typeof d.init && d.init(h), h
				}

				function e(a, b) {
					let c = d(this.namespace + (void 0 === b ? ":" : b) + a);
					return c.log = this.log, c
				}

				function f(a) {
					d.save(a), d.namespaces = a, d.names = [], d.skips = [];
					let b, c = ("string" == typeof a ? a : "")
						.split(/[\s,]+/),
						e = c.length;
					for (b = 0; b < e; b++) c[b] && ("-" === (a = c[b].replace(/\*/g, ".*?"))[0] ? d.skips.push(RegExp("^" + a.slice(1) + "$")) : d.names.push(RegExp("^" + a + "$")))
				}

				function g() {
					let a = [...d.names.map(i), ...d.skips.map(i)
						.map(a => "-" + a)
					].join(",");
					return d.enable(""), a
				}

				function h(a) {
					if ("*" === a[a.length - 1]) return !0;
					let b, c;
					for (b = 0, c = d.skips.length; b < c; b++)
						if (d.skips[b].test(a)) return !1;
					for (b = 0, c = d.names.length; b < c; b++)
						if (d.names[b].test(a)) return !0;
					return !1
				}

				function i(a) {
					return a.toString()
						.substring(2, a.toString()
							.length - 2)
						.replace(/\.\*\?$/, "*")
				}

				function j(a) {
					return a instanceof Error ? a.stack || a.message : a
				}

				function k() {
					console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
				}
				return d.debug = d, d.default = d, d.coerce = j, d.disable = g, d.enable = f, d.enabled = h, d.humanize = c(65881), d.destroy = k, Object.keys(a)
					.forEach(b => {
						d[b] = a[b]
					}), d.names = [], d.skips = [], d.formatters = {}, d.selectColor = b, d.enable(d.load()), d
			}
			a.exports = d
		},
		57740: function(a) {
			"use strict";

			function b(a, b) {
				for (let c in b) Object.defineProperty(a, c, {
					value: b[c],
					enumerable: !0,
					configurable: !0
				});
				return a
			}

			function c(a, c, d) {
				if (!a || "string" == typeof a) throw TypeError("Please pass an Error to err-code");
				d || (d = {}), "object" == typeof c && (d = c, c = ""), c && (d.code = c);
				try {
					return b(a, d)
				} catch (e) {
					d.message = a.message, d.stack = a.stack;
					let f = function() {};
					f.prototype = Object.create(Object.getPrototypeOf(a));
					let g = b(new f, d);
					return g
				}
			}
			a.exports = c
		},
		89081: function(a) {
			"use strict";
			async function* b(a, b = {}) {
				let c = a.getReader();
				try {
					for (;;) {
						let d = await c.read();
						if (d.done) return;
						yield d.value
					}
				} finally {
					!0 !== b.preventCancel && c.cancel(), c.releaseLock()
				}
			}
			a.exports = b
		},
		142: function(a, b, c) {
			"use strict";
			globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response ? a.exports = {
				default: globalThis.fetch,
				Headers: globalThis.Headers,
				Request: globalThis.Request,
				Response: globalThis.Response
			} : a.exports = {
				default: c(34911)
					.default,
				Headers: c(34911)
					.Headers,
				Request: c(34911)
					.Request,
				Response: c(34911)
					.Response
			}
		},
		97359: function(a, b, c) {
			"use strict";
			var d = c(34406);
			let e = c(72751),
				f = "object" == typeof window && "object" == typeof document && 9 === document.nodeType,
				g = e(),
				h = f && !g,
				i = g && !f,
				j = g && f,
				k = void 0 !== d && void 0 !== d.release && "node" === d.release.name && !g,
				l = "function" == typeof importScripts && "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
				m = void 0 !== d && void 0 !== d.env,
				n = "undefined" != typeof navigator && "ReactNative" === navigator.product;
			a.exports = {
				isTest: m,
				isElectron: g,
				isElectronMain: i,
				isElectronRenderer: j,
				isNode: k,
				isBrowser: h,
				isWebWorker: l,
				isEnvWithDom: f,
				isReactNative: n
			}
		},
		76504: function(a, b, c) {
			"use strict";
			a.exports = c(142)
		},
		27295: function(a, b, c) {
			"use strict";
			let d = c(29397),
				e = (a, b) => ({
					path: decodeURIComponent(new URL(a)
						.pathname.split("/")
						.pop() || ""),
					content: f(a, b)
				});
			async function* f(a, b) {
				let c = new d,
					e = await c.get(a, b);
				yield* e.iterator()
			}
			a.exports = e
		},
		29397: function(a, b, c) {
			"use strict";
			let {
				fetch: d,
				Request: e,
				Headers: f
			} = c(33946), {
					TimeoutError: g,
					HTTPError: h
				} = c(26624), i = c(34329)
				.bind({
					ignoreUndefined: !0
				}), {
					URL: j,
					URLSearchParams: k
				} = c(88811), l = c(24379), m = c(89081), {
					isBrowser: n,
					isWebWorker: o
				} = c(97359), p = c(96596), q = (a, b, c) => {
					if (void 0 === b) return a;
					let d = Date.now(),
						e = () => {
							let a = Date.now() - d;
							return a >= b
						};
					return new Promise((d, f) => {
						let h = setTimeout(() => {
								e() && (f(new g), c.abort())
							}, b),
							i = a => {
								let b = b => {
									if (clearTimeout(h), e()) {
										f(new g);
										return
									}
									a(b)
								};
								return b
							};
						a.then(i(d), i(f))
					})
				}, r = {
					throwHttpErrors: !0,
					credentials: "same-origin"
				};
			class s {
				constructor(a = {}) {
					this.opts = i(r, a)
				}
				async fetch(a, b = {}) {
					let c = i(this.opts, b),
						g = new f(c.headers);
					if ("string" != typeof a && !(a instanceof j || a instanceof e)) throw TypeError("`resource` must be a string, URL, or Request");
					let r = new j(a.toString(), c.base),
						{
							searchParams: s,
							transformSearchParams: v,
							json: w
						} = c;
					s && ("function" == typeof v ? r.search = v(new k(c.searchParams)) : r.search = new k(c.searchParams)), w && (c.body = JSON.stringify(c.json), g.set("content-type", "application/json"));
					let x = new AbortController,
						y = l([x.signal, c.signal]);
					null != globalThis.ReadableStream && c.body instanceof globalThis.ReadableStream && (n || o) && (c.body = new Blob(await p(m(c.body))));
					let z = await q(d(r.toString(), {
						...c,
						signal: y,
						timeout: void 0,
						headers: g,
						duplex: "half"
					}), c.timeout, x);
					if (!z.ok && c.throwHttpErrors) throw c.handleError && await c.handleError(z), new h(z);
					return z.iterator = async function*() {
						yield* u(z.body)
					}, z.ndjson = async function*() {
						for await (let a of t(z.iterator())) b.transform ? yield b.transform(a): yield a
					}, z
				}
				post(a, b = {}) {
					return this.fetch(a, {
						...b,
						method: "POST"
					})
				}
				get(a, b = {}) {
					return this.fetch(a, {
						...b,
						method: "GET"
					})
				}
				put(a, b = {}) {
					return this.fetch(a, {
						...b,
						method: "PUT"
					})
				}
				delete(a, b = {}) {
					return this.fetch(a, {
						...b,
						method: "DELETE"
					})
				}
				options(a, b = {}) {
					return this.fetch(a, {
						...b,
						method: "OPTIONS"
					})
				}
			}
			let t = async function*(a) {
				let b = new TextDecoder,
					c = "";
				for await (let d of a) {
					c += b.decode(d, {
						stream: !0
					});
					let e = c.split(/\r?\n/);
					for (let f = 0; f < e.length - 1; f++) {
						let g = e[f].trim();
						g.length > 0 && (yield JSON.parse(g))
					}
					c = e[e.length - 1]
				}
				c += b.decode(), 0 !== (c = c.trim())
					.length && (yield JSON.parse(c))
			}, u = a => {
				if (v(a)) return a;
				if (x(a)) {
					let b = a[Symbol.asyncIterator]();
					return {
						[Symbol.asyncIterator]() {
							return {
								next: b.next.bind(b),
								return (c) {
									return (a.destroy(), "function" == typeof b.return) ? b.return() : Promise.resolve({
										done: !0,
										value: c
									})
								}
							}
						}
					}
				}
				if (w(a)) {
					let c = a.getReader();
					return async function*() {
						try {
							for (;;) {
								let {
									done: a,
									value: b
								} = await c.read();
								if (a) return;
								b && (yield b)
							}
						} finally {
							c.releaseLock()
						}
					}()
				}
				throw TypeError("Body can't be converted to AsyncIterable")
			}, v = a => "object" == typeof a && null !== a && "function" == typeof a[Symbol.asyncIterator], w = a => a && "function" == typeof a.getReader, x = a => Object.prototype.hasOwnProperty.call(a, "readable") && Object.prototype.hasOwnProperty.call(a, "writable");
			s.HTTPError = h, s.TimeoutError = g, s.streamToAsyncIterator = u, s.post = (a, b) => new s(b)
				.post(a, b), s.get = (a, b) => new s(b)
				.get(a, b), s.put = (a, b) => new s(b)
				.put(a, b), s.delete = (a, b) => new s(b)
				.delete(a, b), s.options = (a, b) => new s(b)
				.options(a, b), a.exports = s
		},
		26624: function(a, b) {
			"use strict";
			class c extends Error {
				constructor(a = "Request timed out") {
					super(a), this.name = "TimeoutError"
				}
			}
			b.TimeoutError = c;
			class d extends Error {
				constructor(a = "The operation was aborted.") {
					super(a), this.name = "AbortError"
				}
			}
			b.AbortError = d;
			class e extends Error {
				constructor(a) {
					super(a.statusText), this.name = "HTTPError", this.response = a
				}
			}
			b.HTTPError = e
		},
		33946: function(a, b, c) {
			"use strict";
			let {
				TimeoutError: d,
				AbortError: e
			} = c(26624), {
				Response: f,
				Request: g,
				Headers: h,
				default: i
			} = c(76504), j = (a, b = {}) => {
				let c = new XMLHttpRequest;
				c.open(b.method || "GET", a.toString(), !0);
				let {
					timeout: g,
					headers: i
				} = b;
				if (g && g > 0 && g < 1 / 0 && (c.timeout = g), null != b.overrideMimeType && c.overrideMimeType(b.overrideMimeType), i)
					for (let [j, k] of new h(i)) c.setRequestHeader(j, k);
				return b.signal && (b.signal.onabort = () => c.abort()), b.onUploadProgress && (c.upload.onprogress = b.onUploadProgress), c.responseType = "arraybuffer", new Promise((a, g) => {
					let h = b => {
						switch (b.type) {
							case "error":
								a(f.error());
								break;
							case "load":
								a(new n(c.responseURL, c.response, {
									status: c.status,
									statusText: c.statusText,
									headers: m(c.getAllResponseHeaders())
								}));
								break;
							case "timeout":
								g(new d);
								break;
							case "abort":
								g(new e)
						}
					};
					c.onerror = h, c.onload = h, c.ontimeout = h, c.onabort = h, c.send(b.body)
				})
			}, k = i, l = (a, b = {}) => null != b.onUploadProgress ? j(a, b) : k(a, b), m = a => {
				let b = new h;
				for (let c of a.trim()
					.split(/[\r\n]+/)) {
					let d = c.indexOf(": ");
					d > 0 && b.set(c.slice(0, d), c.slice(d + 1))
				}
				return b
			};
			class n extends f {
				constructor(a, b, c) {
					super(b, c), Object.defineProperty(this, "url", {
						value: a
					})
				}
			}
			a.exports = {
				fetch: l,
				Request: g,
				Headers: h
			}
		},
		72751: function(a, b, c) {
			var d = c(34406);

			function e() {
				return !!("undefined" != typeof window && "object" == typeof window.process && "renderer" === window.process.type || void 0 !== d && "object" == typeof d.versions && d.versions.electron || "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
			}
			a.exports = e
		},
		21856: function(a) {
			"use strict";
			a.exports = a => {
				if ("[object Object]" !== Object.prototype.toString.call(a)) return !1;
				let b = Object.getPrototypeOf(a);
				return null === b || b === Object.prototype
			}
		},
		88811: function(a, b, c) {
			"use strict";
			let {
				URLWithLegacySupport: d,
				format: e,
				URLSearchParams: f,
				defaultBase: g
			} = c(39311), h = c(74904);
			a.exports = {
				URL: d,
				URLSearchParams: f,
				format: e,
				relative: h,
				defaultBase: g
			}
		},
		74904: function(a, b, c) {
			"use strict";
			let {
				URLWithLegacySupport: d,
				format: e
			} = c(39311);
			a.exports = (a, b = {}, c = {}, f) => {
				let g = b.protocol ? b.protocol.replace(":", "") : "http";
				g = (c[g] || f || g) + ":";
				let h;
				try {
					h = new d(a)
				} catch (i) {
					h = {}
				}
				let j = Object.assign({}, b, {
					protocol: g || h.protocol,
					host: b.host || h.host
				});
				return new d(a, e(j))
					.toString()
			}
		},
		39311: function(a) {
			"use strict";
			let b = "undefined" != typeof navigator && "ReactNative" === navigator.product;

			function c() {
				return b ? "http://localhost" : self.location ? self.location.protocol + "//" + self.location.host : ""
			}
			let d = self.URL,
				e = c();
			class f {
				constructor(a = "", b = e) {
					this.super = new d(a, b), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null
				}
				get hash() {
					return this.super.hash
				}
				get host() {
					return this.super.host
				}
				get hostname() {
					return this.super.hostname
				}
				get href() {
					return this.super.href
				}
				get origin() {
					return this.super.origin
				}
				get password() {
					return this.super.password
				}
				get pathname() {
					return this.super.pathname
				}
				get port() {
					return this.super.port
				}
				get protocol() {
					return this.super.protocol
				}
				get search() {
					return this.super.search
				}
				get searchParams() {
					return this.super.searchParams
				}
				get username() {
					return this.super.username
				}
				set hash(a) {
					this.super.hash = a
				}
				set host(a) {
					this.super.host = a
				}
				set hostname(a) {
					this.super.hostname = a
				}
				set href(a) {
					this.super.href = a
				}
				set password(a) {
					this.super.password = a
				}
				set pathname(a) {
					this.super.pathname = a
				}
				set port(a) {
					this.super.port = a
				}
				set protocol(a) {
					this.super.protocol = a
				}
				set search(a) {
					this.super.search = a
				}
				set username(a) {
					this.super.username = a
				}
				static createObjectURL(a) {
					return d.createObjectURL(a)
				}
				static revokeObjectURL(a) {
					d.revokeObjectURL(a)
				}
				toJSON() {
					return this.super.toJSON()
				}
				toString() {
					return this.super.toString()
				}
				format() {
					return this.toString()
				}
			}

			function g(a) {
				if ("string" == typeof a) {
					let b = new d(a);
					return b.toString()
				}
				if (!(a instanceof d)) {
					let c = a.username && a.password ? `${a.username}:${a.password}@` : "",
						e = a.auth ? a.auth + "@" : "",
						f = a.port ? ":" + a.port : "",
						g = a.protocol ? a.protocol + "//" : "",
						h = a.host || "",
						i = a.hostname || "",
						j = a.search || (a.query ? "?" + a.query : ""),
						k = a.hash || "",
						l = a.pathname || "",
						m = a.path || l + j;
					return `${g}${c||e}${h||i+f}${m}${k}`
				}
			}
			a.exports = {
				URLWithLegacySupport: f,
				URLSearchParams: self.URLSearchParams,
				defaultBase: e,
				format: g
			}
		},
		96596: function(a) {
			"use strict";
			let b = async a => {
				let b = [];
				for await (let c of a) b.push(c);
				return b
			};
			a.exports = b
		},
		34329: function(a, b, c) {
			"use strict";
			let d = c(21856),
				{
					hasOwnProperty: e
				} = Object.prototype,
				{
					propertyIsEnumerable: f
				} = Object,
				g = (a, b, c) => Object.defineProperty(a, b, {
					value: c,
					writable: !0,
					enumerable: !0,
					configurable: !0
				}),
				h = this,
				i = {
					concatArrays: !1,
					ignoreUndefined: !1
				},
				j = a => {
					let b = [];
					for (let c in a) e.call(a, c) && b.push(c);
					if (Object.getOwnPropertySymbols) {
						let d = Object.getOwnPropertySymbols(a);
						for (let g of d) f.call(a, g) && b.push(g)
					}
					return b
				};

			function k(a) {
				return Array.isArray(a) ? l(a) : d(a) ? m(a) : a
			}

			function l(a) {
				let b = a.slice(0, 0);
				return j(a)
					.forEach(c => {
						g(b, c, k(a[c]))
					}), b
			}

			function m(a) {
				let b = null === Object.getPrototypeOf(a) ? Object.create(null) : {};
				return j(a)
					.forEach(c => {
						g(b, c, k(a[c]))
					}), b
			}
			let n = (a, b, c, d) => (c.forEach(c => {
					(void 0 !== b[c] || !d.ignoreUndefined) && (c in a && a[c] !== Object.getPrototypeOf(a) ? g(a, c, p(a[c], b[c], d)) : g(a, c, k(b[c])))
				}), a),
				o = (a, b, c) => {
					let d = a.slice(0, 0),
						f = 0;
					return [a, b].forEach(b => {
						let h = [];
						for (let i = 0; i < b.length; i++) e.call(b, i) && (h.push(String(i)), b === a ? g(d, f++, b[i]) : g(d, f++, k(b[i])));
						d = n(d, b, j(b)
							.filter(a => !h.includes(a)), c)
					}), d
				};

			function p(a, b, c) {
				return c.concatArrays && Array.isArray(a) && Array.isArray(b) ? o(a, b, c) : d(b) && d(a) ? n(a, b, j(b), c) : k(b)
			}
			a.exports = function(...a) {
				let b = p(k(i), this !== h && this || {}, i),
					c = {
						_: {}
					};
				for (let e of a)
					if (void 0 !== e) {
						if (!d(e)) throw TypeError("`" + e + "` is not an Option Object");
						c = p(c, {
							_: e
						}, b)
					} return c._
			}
		},
		34911: function(a, b, c) {
			"use strict";
			var d = function() {
				if ("undefined" != typeof self) return self;
				if ("undefined" != typeof window) return window;
				if (void 0 !== c.g) return c.g;
				throw Error("unable to locate global object")
			}();
			a.exports = b = d.fetch, d.fetch && (b.default = d.fetch.bind(d)), b.Headers = d.Headers, b.Request = d.Request, b.Response = d.Response
		},
		73737: function(a, b, c) {
			"use strict";
			a.exports = c(50536)
		},
		50536: function(a, b, c) {
			"use strict";
			var d = b;

			function e() {
				d.util._configure(), d.Writer._configure(d.BufferWriter), d.Reader._configure(d.BufferReader)
			}
			d.build = "minimal", d.Writer = c(60123), d.BufferWriter = c(76673), d.Reader = c(39799), d.BufferReader = c(87038), d.util = c(34165), d.rpc = c(34963), d.roots = c(29009), d.configure = e, e()
		},
		39799: function(a, b, c) {
			"use strict";
			a.exports = i;
			var d, e = c(34165),
				f = e.LongBits,
				g = e.utf8;

			function h(a, b) {
				return RangeError("index out of range: " + a.pos + " + " + (b || 1) + " > " + a.len)
			}

			function i(a) {
				this.buf = a, this.pos = 0, this.len = a.length
			}
			var j, k = "undefined" != typeof Uint8Array ? function(a) {
					if (a instanceof Uint8Array || Array.isArray(a)) return new i(a);
					throw Error("illegal buffer")
				} : function(a) {
					if (Array.isArray(a)) return new i(a);
					throw Error("illegal buffer")
				},
				l = function() {
					return e.Buffer ? function(a) {
						return (i.create = function(a) {
							return e.Buffer.isBuffer(a) ? new d(a) : k(a)
						})(a)
					} : k
				};

			function m() {
				var a = new f(0, 0),
					b = 0;
				if (this.len - this.pos > 4) {
					for (; b < 4; ++b)
						if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0, this.buf[this.pos++] < 128) return a;
					if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 28) >>> 0, a.hi = (a.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return a;
					b = 0
				} else {
					for (; b < 3; ++b) {
						if (this.pos >= this.len) throw h(this);
						if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0, this.buf[this.pos++] < 128) return a
					}
					return a.lo = (a.lo | (127 & this.buf[this.pos++]) << 7 * b) >>> 0, a
				}
				if (this.len - this.pos > 4) {
					for (; b < 5; ++b)
						if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0, this.buf[this.pos++] < 128) return a
				} else
					for (; b < 5; ++b) {
						if (this.pos >= this.len) throw h(this);
						if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0, this.buf[this.pos++] < 128) return a
					}
				throw Error("invalid varint encoding")
			}

			function n(a, b) {
				return (a[b - 4] | a[b - 3] << 8 | a[b - 2] << 16 | a[b - 1] << 24) >>> 0
			}

			function o() {
				if (this.pos + 8 > this.len) throw h(this, 8);
				return new f(n(this.buf, this.pos += 4), n(this.buf, this.pos += 4))
			}
			i.create = l(), i.prototype._slice = e.Array.prototype.subarray || e.Array.prototype.slice, i.prototype.uint32 = (j = 4294967295, function() {
				if (j = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (j = (j | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (j = (j | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (j = (j | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (j = (j | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)) return j;
				if ((this.pos += 5) > this.len) throw this.pos = this.len, h(this, 10);
				return j
			}), i.prototype.int32 = function() {
				return 0 | this.uint32()
			}, i.prototype.sint32 = function() {
				var a = this.uint32();
				return a >>> 1 ^ -(1 & a) | 0
			}, i.prototype.bool = function() {
				return 0 !== this.uint32()
			}, i.prototype.fixed32 = function() {
				if (this.pos + 4 > this.len) throw h(this, 4);
				return n(this.buf, this.pos += 4)
			}, i.prototype.sfixed32 = function() {
				if (this.pos + 4 > this.len) throw h(this, 4);
				return 0 | n(this.buf, this.pos += 4)
			}, i.prototype.float = function() {
				if (this.pos + 4 > this.len) throw h(this, 4);
				var a = e.float.readFloatLE(this.buf, this.pos);
				return this.pos += 4, a
			}, i.prototype.double = function() {
				if (this.pos + 8 > this.len) throw h(this, 4);
				var a = e.float.readDoubleLE(this.buf, this.pos);
				return this.pos += 8, a
			}, i.prototype.bytes = function() {
				var a = this.uint32(),
					b = this.pos,
					c = this.pos + a;
				if (c > this.len) throw h(this, a);
				return (this.pos += a, Array.isArray(this.buf)) ? this.buf.slice(b, c) : b === c ? new this.buf.constructor(0) : this._slice.call(this.buf, b, c)
			}, i.prototype.string = function() {
				var a = this.bytes();
				return g.read(a, 0, a.length)
			}, i.prototype.skip = function(a) {
				if ("number" == typeof a) {
					if (this.pos + a > this.len) throw h(this, a);
					this.pos += a
				} else
					do
						if (this.pos >= this.len) throw h(this); while (128 & this.buf[this.pos++]);
				return this
			}, i.prototype.skipType = function(a) {
				switch (a) {
					case 0:
						this.skip();
						break;
					case 1:
						this.skip(8);
						break;
					case 2:
						this.skip(this.uint32());
						break;
					case 3:
						for (; 4 != (a = 7 & this.uint32());) this.skipType(a);
						break;
					case 5:
						this.skip(4);
						break;
					default:
						throw Error("invalid wire type " + a + " at offset " + this.pos)
				}
				return this
			}, i._configure = function(a) {
				d = a, i.create = l(), d._configure();
				var b = e.Long ? "toLong" : "toNumber";
				e.merge(i.prototype, {
					int64: function() {
						return m.call(this)[b](!1)
					},
					uint64: function() {
						return m.call(this)[b](!0)
					},
					sint64: function() {
						return m.call(this)
							.zzDecode()[b](!1)
					},
					fixed64: function() {
						return o.call(this)[b](!0)
					},
					sfixed64: function() {
						return o.call(this)[b](!1)
					}
				})
			}
		},
		87038: function(a, b, c) {
			"use strict";
			a.exports = f;
			var d = c(39799);
			(f.prototype = Object.create(d.prototype))
			.constructor = f;
			var e = c(34165);

			function f(a) {
				d.call(this, a)
			}
			f._configure = function() {
				e.Buffer && (f.prototype._slice = e.Buffer.prototype.slice)
			}, f.prototype.string = function() {
				var a = this.uint32();
				return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + a, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + a, this.len))
			}, f._configure()
		},
		29009: function(a) {
			"use strict";
			a.exports = {}
		},
		34963: function(a, b, c) {
			"use strict";
			b.Service = c(29548)
		},
		29548: function(a, b, c) {
			"use strict";
			a.exports = e;
			var d = c(34165);

			function e(a, b, c) {
				if ("function" != typeof a) throw TypeError("rpcImpl must be a function");
				d.EventEmitter.call(this), this.rpcImpl = a, this.requestDelimited = Boolean(b), this.responseDelimited = Boolean(c)
			}(e.prototype = Object.create(d.EventEmitter.prototype))
			.constructor = e, e.prototype.rpcCall = function a(b, c, e, f, g) {
				if (!f) throw TypeError("request must be specified");
				var h = this;
				if (!g) return d.asPromise(a, h, b, c, e, f);
				if (!h.rpcImpl) {
					setTimeout(function() {
						g(Error("already ended"))
					}, 0);
					return
				}
				try {
					return h.rpcImpl(b, c[h.requestDelimited ? "encodeDelimited" : "encode"](f)
						.finish(),
						function(a, c) {
							if (a) return h.emit("error", a, b), g(a);
							if (null === c) {
								h.end(!0);
								return
							}
							if (!(c instanceof e)) try {
								c = e[h.responseDelimited ? "decodeDelimited" : "decode"](c)
							} catch (d) {
								return h.emit("error", d, b), g(d)
							}
							return h.emit("data", c, b), g(null, c)
						})
				} catch (i) {
					h.emit("error", i, b), setTimeout(function() {
						g(i)
					}, 0);
					return
				}
			}, e.prototype.end = function(a) {
				return this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end")
					.off()), this
			}
		},
		61697: function(a, b, c) {
			"use strict";
			a.exports = e;
			var d = c(34165);

			function e(a, b) {
				this.lo = a >>> 0, this.hi = b >>> 0
			}
			var f = e.zero = new e(0, 0);
			f.toNumber = function() {
				return 0
			}, f.zzEncode = f.zzDecode = function() {
				return this
			}, f.length = function() {
				return 1
			};
			var g = e.zeroHash = "\0\0\0\0\0\0\0\0";
			e.fromNumber = function(a) {
				if (0 === a) return f;
				var b = a < 0;
				b && (a = -a);
				var c = a >>> 0,
					d = (a - c) / 4294967296 >>> 0;
				return b && (d = ~d >>> 0, c = ~c >>> 0, ++c > 4294967295 && (c = 0, ++d > 4294967295 && (d = 0))), new e(c, d)
			}, e.from = function(a) {
				if ("number" == typeof a) return e.fromNumber(a);
				if (d.isString(a)) {
					if (!d.Long) return e.fromNumber(parseInt(a, 10));
					a = d.Long.fromString(a)
				}
				return a.low || a.high ? new e(a.low >>> 0, a.high >>> 0) : f
			}, e.prototype.toNumber = function(a) {
				if (!a && this.hi >>> 31) {
					var b = ~this.lo + 1 >>> 0,
						c = ~this.hi >>> 0;
					return b || (c = c + 1 >>> 0), -(b + 4294967296 * c)
				}
				return this.lo + 4294967296 * this.hi
			}, e.prototype.toLong = function(a) {
				return d.Long ? new d.Long(0 | this.lo, 0 | this.hi, Boolean(a)) : {
					low: 0 | this.lo,
					high: 0 | this.hi,
					unsigned: Boolean(a)
				}
			};
			var h = String.prototype.charCodeAt;
			e.fromHash = function(a) {
				return a === g ? f : new e((h.call(a, 0) | h.call(a, 1) << 8 | h.call(a, 2) << 16 | h.call(a, 3) << 24) >>> 0, (h.call(a, 4) | h.call(a, 5) << 8 | h.call(a, 6) << 16 | h.call(a, 7) << 24) >>> 0)
			}, e.prototype.toHash = function() {
				return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
			}, e.prototype.zzEncode = function() {
				var a = this.hi >> 31;
				return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ a) >>> 0, this.lo = (this.lo << 1 ^ a) >>> 0, this
			}, e.prototype.zzDecode = function() {
				var a = -(1 & this.lo);
				return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ a) >>> 0, this.hi = (this.hi >>> 1 ^ a) >>> 0, this
			}, e.prototype.length = function() {
				var a = this.lo,
					b = (this.lo >>> 28 | this.hi << 4) >>> 0,
					c = this.hi >>> 24;
				return 0 === c ? 0 === b ? a < 16384 ? a < 128 ? 1 : 2 : a < 2097152 ? 3 : 4 : b < 16384 ? b < 128 ? 5 : 6 : b < 2097152 ? 7 : 8 : c < 128 ? 9 : 10
			}
		},
		34165: function(a, b, c) {
			"use strict";
			var d = b;

			function e(a, b, c) {
				for (var d = Object.keys(b), e = 0; e < d.length; ++e) void 0 !== a[d[e]] && c || (a[d[e]] = b[d[e]]);
				return a
			}

			function f(a) {
				function b(a, c) {
					if (!(this instanceof b)) return new b(a, c);
					Object.defineProperty(this, "message", {
						get: function() {
							return a
						}
					}), Error.captureStackTrace ? Error.captureStackTrace(this, b) : Object.defineProperty(this, "stack", {
						value: Error()
							.stack || ""
					}), c && e(this, c)
				}
				return b.prototype = Object.create(Error.prototype, {
					constructor: {
						value: b,
						writable: !0,
						enumerable: !1,
						configurable: !0
					},
					name: {
						get: function() {
							return a
						},
						set: void 0,
						enumerable: !1,
						configurable: !0
					},
					toString: {
						value: function() {
							return this.name + ": " + this.message
						},
						writable: !0,
						enumerable: !1,
						configurable: !0
					}
				}), b
			}
			d.asPromise = c(46781), d.base64 = c(87026), d.EventEmitter = c(15570), d.float = c(5298), d.inquire = c(36116), d.utf8 = c(57958), d.pool = c(90804), d.LongBits = c(61697), d.isNode = Boolean(void 0 !== c.g && c.g && c.g.process && c.g.process.versions && c.g.process.versions.node), d.global = d.isNode && c.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, d.emptyArray = Object.freeze ? Object.freeze([]) : [], d.emptyObject = Object.freeze ? Object.freeze({}) : {}, d.isInteger = Number.isInteger || function(a) {
				return "number" == typeof a && isFinite(a) && Math.floor(a) === a
			}, d.isString = function(a) {
				return "string" == typeof a || a instanceof String
			}, d.isObject = function(a) {
				return a && "object" == typeof a
			}, d.isset = d.isSet = function(a, b) {
				var c = a[b];
				return !!(null != c && a.hasOwnProperty(b)) && ("object" != typeof c || (Array.isArray(c) ? c.length : Object.keys(c)
					.length) > 0)
			}, d.Buffer = function() {
				try {
					var a = d.inquire("buffer")
						.Buffer;
					return a.prototype.utf8Write ? a : null
				} catch (b) {
					return null
				}
			}(), d._Buffer_from = null, d._Buffer_allocUnsafe = null, d.newBuffer = function(a) {
				return "number" == typeof a ? d.Buffer ? d._Buffer_allocUnsafe(a) : new d.Array(a) : d.Buffer ? d._Buffer_from(a) : "undefined" == typeof Uint8Array ? a : new Uint8Array(a)
			}, d.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, d.Long = d.global.dcodeIO && d.global.dcodeIO.Long || d.global.Long || d.inquire("long"), d.key2Re = /^true|false|0|1$/, d.key32Re = /^-?(?:0|[1-9][0-9]*)$/, d.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, d.longToHash = function(a) {
				return a ? d.LongBits.from(a)
					.toHash() : d.LongBits.zeroHash
			}, d.longFromHash = function(a, b) {
				var c = d.LongBits.fromHash(a);
				return d.Long ? d.Long.fromBits(c.lo, c.hi, b) : c.toNumber(Boolean(b))
			}, d.merge = e, d.lcFirst = function(a) {
				return a.charAt(0)
					.toLowerCase() + a.substring(1)
			}, d.newError = f, d.ProtocolError = f("ProtocolError"), d.oneOfGetter = function(a) {
				for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = 1;
				return function() {
					for (var a = Object.keys(this), c = a.length - 1; c > -1; --c)
						if (1 === b[a[c]] && void 0 !== this[a[c]] && null !== this[a[c]]) return a[c]
				}
			}, d.oneOfSetter = function(a) {
				return function(b) {
					for (var c = 0; c < a.length; ++c) a[c] !== b && delete this[a[c]]
				}
			}, d.toJSONOptions = {
				longs: String,
				enums: String,
				bytes: String,
				json: !0
			}, d._configure = function() {
				var a = d.Buffer;
				if (!a) {
					d._Buffer_from = d._Buffer_allocUnsafe = null;
					return
				}
				d._Buffer_from = a.from !== Uint8Array.from && a.from || function(b, c) {
					return new a(b, c)
				}, d._Buffer_allocUnsafe = a.allocUnsafe || function(b) {
					return new a(b)
				}
			}
		},
		60123: function(a, b, c) {
			"use strict";
			a.exports = l;
			var d, e = c(34165),
				f = e.LongBits,
				g = e.base64,
				h = e.utf8;

			function i(a, b, c) {
				this.fn = a, this.len = b, this.next = void 0, this.val = c
			}

			function j() {}

			function k(a) {
				this.head = a.head, this.tail = a.tail, this.len = a.len, this.next = a.states
			}

			function l() {
				this.len = 0, this.head = new i(j, 0, 0), this.tail = this.head, this.states = null
			}
			var m = function() {
				return e.Buffer ? function() {
					return (l.create = function() {
						return new d
					})()
				} : function() {
					return new l
				}
			};

			function n(a, b, c) {
				b[c] = 255 & a
			}

			function o(a, b, c) {
				for (; a > 127;) b[c++] = 127 & a | 128, a >>>= 7;
				b[c] = a
			}

			function p(a, b) {
				this.len = a, this.next = void 0, this.val = b
			}

			function q(a, b, c) {
				for (; a.hi;) b[c++] = 127 & a.lo | 128, a.lo = (a.lo >>> 7 | a.hi << 25) >>> 0, a.hi >>>= 7;
				for (; a.lo > 127;) b[c++] = 127 & a.lo | 128, a.lo = a.lo >>> 7;
				b[c++] = a.lo
			}

			function r(a, b, c) {
				b[c] = 255 & a, b[c + 1] = a >>> 8 & 255, b[c + 2] = a >>> 16 & 255, b[c + 3] = a >>> 24
			}
			l.create = m(), l.alloc = function(a) {
				return new e.Array(a)
			}, e.Array !== Array && (l.alloc = e.pool(l.alloc, e.Array.prototype.subarray)), l.prototype._push = function(a, b, c) {
				return this.tail = this.tail.next = new i(a, b, c), this.len += b, this
			}, p.prototype = Object.create(i.prototype), p.prototype.fn = o, l.prototype.uint32 = function(a) {
				return this.len += (this.tail = this.tail.next = new p((a >>>= 0) < 128 ? 1 : a < 16384 ? 2 : a < 2097152 ? 3 : a < 268435456 ? 4 : 5, a))
					.len, this
			}, l.prototype.int32 = function(a) {
				return a < 0 ? this._push(q, 10, f.fromNumber(a)) : this.uint32(a)
			}, l.prototype.sint32 = function(a) {
				return this.uint32((a << 1 ^ a >> 31) >>> 0)
			}, l.prototype.uint64 = function(a) {
				var b = f.from(a);
				return this._push(q, b.length(), b)
			}, l.prototype.int64 = l.prototype.uint64, l.prototype.sint64 = function(a) {
				var b = f.from(a)
					.zzEncode();
				return this._push(q, b.length(), b)
			}, l.prototype.bool = function(a) {
				return this._push(n, 1, a ? 1 : 0)
			}, l.prototype.fixed32 = function(a) {
				return this._push(r, 4, a >>> 0)
			}, l.prototype.sfixed32 = l.prototype.fixed32, l.prototype.fixed64 = function(a) {
				var b = f.from(a);
				return this._push(r, 4, b.lo)
					._push(r, 4, b.hi)
			}, l.prototype.sfixed64 = l.prototype.fixed64, l.prototype.float = function(a) {
				return this._push(e.float.writeFloatLE, 4, a)
			}, l.prototype.double = function(a) {
				return this._push(e.float.writeDoubleLE, 8, a)
			};
			var s = e.Array.prototype.set ? function(a, b, c) {
				b.set(a, c)
			} : function(a, b, c) {
				for (var d = 0; d < a.length; ++d) b[c + d] = a[d]
			};
			l.prototype.bytes = function(a) {
				var b = a.length >>> 0;
				if (!b) return this._push(n, 1, 0);
				if (e.isString(a)) {
					var c = l.alloc(b = g.length(a));
					g.decode(a, c, 0), a = c
				}
				return this.uint32(b)
					._push(s, b, a)
			}, l.prototype.string = function(a) {
				var b = h.length(a);
				return b ? this.uint32(b)
					._push(h.write, b, a) : this._push(n, 1, 0)
			}, l.prototype.fork = function() {
				return this.states = new k(this), this.head = this.tail = new i(j, 0, 0), this.len = 0, this
			}, l.prototype.reset = function() {
				return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new i(j, 0, 0), this.len = 0), this
			}, l.prototype.ldelim = function() {
				var a = this.head,
					b = this.tail,
					c = this.len;
				return this.reset()
					.uint32(c), c && (this.tail.next = a.next, this.tail = b, this.len += c), this
			}, l.prototype.finish = function() {
				for (var a = this.head.next, b = this.constructor.alloc(this.len), c = 0; a;) a.fn(a.val, b, c), c += a.len, a = a.next;
				return b
			}, l._configure = function(a) {
				d = a, l.create = m(), d._configure()
			}
		},
		76673: function(a, b, c) {
			"use strict";
			a.exports = f;
			var d = c(60123);
			(f.prototype = Object.create(d.prototype))
			.constructor = f;
			var e = c(34165);

			function f() {
				d.call(this)
			}

			function g(a, b, c) {
				a.length < 40 ? e.utf8.write(a, b, c) : b.utf8Write ? b.utf8Write(a, c) : b.write(a, c)
			}
			f._configure = function() {
				f.alloc = e._Buffer_allocUnsafe, f.writeBytesBuffer = e.Buffer && e.Buffer.prototype instanceof Uint8Array && "set" === e.Buffer.prototype.set.name ? function(a, b, c) {
					b.set(a, c)
				} : function(a, b, c) {
					if (a.copy) a.copy(b, c, 0, a.length);
					else
						for (var d = 0; d < a.length;) b[c++] = a[d++]
				}
			}, f.prototype.bytes = function(a) {
				e.isString(a) && (a = e._Buffer_from(a, "base64"));
				var b = a.length >>> 0;
				return this.uint32(b), b && this._push(f.writeBytesBuffer, b, a), this
			}, f.prototype.string = function(a) {
				var b = e.Buffer.byteLength(a);
				return this.uint32(b), b && this._push(g, b, a), this
			}, f._configure()
		},
		95972: function(a) {
			a.exports = a => {
				if (a[Symbol.asyncIterator]) return a;
				if (a.getReader) return async function*() {
					let b = a.getReader();
					try {
						for (;;) {
							let {
								done: c,
								value: d
							} = await b.read();
							if (c) return;
							yield d
						}
					} finally {
						b.releaseLock()
					}
				}();
				throw Error("unknown stream")
			}
		},
		55389: function(a, b, c) {
			"use strict";
			c.r(b), c.d(b, {
				deleteDB: function() {
					return w
				},
				openDB: function() {
					return v
				},
				unwrap: function() {
					return u
				},
				wrap: function() {
					return t
				}
			});
			let d = (a, b) => b.some(b => a instanceof b),
				e, f;

			function g() {
				return e || (e = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction, ])
			}

			function h() {
				return f || (f = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey, ])
			}
			let i = new WeakMap,
				j = new WeakMap,
				k = new WeakMap,
				l = new WeakMap,
				m = new WeakMap;

			function n(a) {
				let b = new Promise((b, c) => {
					let d = () => {
							a.removeEventListener("success", e), a.removeEventListener("error", f)
						},
						e = () => {
							b(t(a.result)), d()
						},
						f = () => {
							c(a.error), d()
						};
					a.addEventListener("success", e), a.addEventListener("error", f)
				});
				return b.then(b => {
						b instanceof IDBCursor && i.set(b, a)
					})
					.catch(() => {}), m.set(b, a), b
			}

			function o(a) {
				if (j.has(a)) return;
				let b = new Promise((b, c) => {
					let d = () => {
							a.removeEventListener("complete", e), a.removeEventListener("error", f), a.removeEventListener("abort", f)
						},
						e = () => {
							b(), d()
						},
						f = () => {
							c(a.error || new DOMException("AbortError", "AbortError")), d()
						};
					a.addEventListener("complete", e), a.addEventListener("error", f), a.addEventListener("abort", f)
				});
				j.set(a, b)
			}
			let p = {
				get(a, b, c) {
					if (a instanceof IDBTransaction) {
						if ("done" === b) return j.get(a);
						if ("objectStoreNames" === b) return a.objectStoreNames || k.get(a);
						if ("store" === b) return c.objectStoreNames[1] ? void 0 : c.objectStore(c.objectStoreNames[0])
					}
					return t(a[b])
				},
				set(a, b, c) {
					return a[b] = c, !0
				},
				has(a, b) {
					return a instanceof IDBTransaction && ("done" === b || "store" === b) || b in a
				}
			};

			function q(a) {
				p = a(p)
			}

			function r(a) {
				return a !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? h()
					.includes(a) ? function(...b) {
						return a.apply(u(this), b), t(i.get(this))
					} : function(...b) {
						return t(a.apply(u(this), b))
					} : function(b, ...c) {
						let d = a.call(u(this), b, ...c);
						return k.set(d, b.sort ? b.sort() : [b]), t(d)
					}
			}

			function s(a) {
				return "function" == typeof a ? r(a) : (a instanceof IDBTransaction && o(a), d(a, g())) ? new Proxy(a, p) : a
			}

			function t(a) {
				if (a instanceof IDBRequest) return n(a);
				if (l.has(a)) return l.get(a);
				let b = s(a);
				return b !== a && (l.set(a, b), m.set(b, a)), b
			}
			let u = a => m.get(a);

			function v(a, b, {
				blocked: c,
				upgrade: d,
				blocking: e,
				terminated: f
			} = {}) {
				let g = indexedDB.open(a, b),
					h = t(g);
				return d && g.addEventListener("upgradeneeded", a => {
						d(t(g.result), a.oldVersion, a.newVersion, t(g.transaction), a)
					}), c && g.addEventListener("blocked", a => c(a.oldVersion, a.newVersion, a)), h.then(a => {
						f && a.addEventListener("close", () => f()), e && a.addEventListener("versionchange", a => e(a.oldVersion, a.newVersion, a))
					})
					.catch(() => {}), h
			}

			function w(a, {
				blocked: b
			} = {}) {
				let c = indexedDB.deleteDatabase(a);
				return b && c.addEventListener("blocked", a => b(a.oldVersion, a)), t(c)
					.then(() => void 0)
			}
			let x = ["get", "getKey", "getAll", "getAllKeys", "count"],
				y = ["put", "add", "delete", "clear"],
				z = new Map;

			function A(a, b) {
				if (!(a instanceof IDBDatabase && !(b in a) && "string" == typeof b)) return;
				if (z.get(b)) return z.get(b);
				let c = b.replace(/FromIndex$/, ""),
					d = b !== c,
					e = y.includes(c);
				if (!(c in (d ? IDBIndex : IDBObjectStore)
					.prototype) || !(e || x.includes(c))) return;
				let f = async function(a, ...b) {
					let f = this.transaction(a, e ? "readwrite" : "readonly"),
						g = f.store;
					return d && (g = g.index(b.shift())), (await Promise.all([g[c](...b), e && f.done, ]))[0]
				};
				return z.set(b, f), f
			}
			q(a => ({
				...a,
				get: (b, c, d) => A(b, c) || a.get(b, c, d),
				has: (b, c) => !!A(b, c) || a.has(b, c)
			}))
		},
		64913: function(a, b, c) {
			"use strict";
			c.d(b, {
				Ue: function() {
					return li
				}
			});
			var d, e, f, g, h, i, j, k, l, m = {};
			c.r(m), c.d(m, {
				base58btc: function() {
					return ay
				},
				base58flickr: function() {
					return az
				}
			});
			var n = {};
			c.r(n), c.d(n, {
				base32: function() {
					return aA
				},
				base32hex: function() {
					return aE
				},
				base32hexpad: function() {
					return aG
				},
				base32hexpadupper: function() {
					return aH
				},
				base32hexupper: function() {
					return aF
				},
				base32pad: function() {
					return aC
				},
				base32padupper: function() {
					return aD
				},
				base32upper: function() {
					return aB
				},
				base32z: function() {
					return aI
				}
			});
			var o = {};
			c.r(o), c.d(o, {
				code: function() {
					return bk
				},
				createLink: function() {
					return bi
				},
				createNode: function() {
					return bh
				},
				decode: function() {
					return bm
				},
				encode: function() {
					return bl
				},
				name: function() {
					return bj
				},
				prepare: function() {
					return bf
				},
				validate: function() {
					return bg
				}
			});
			var p = {};
			c.r(p), c.d(p, {
				code: function() {
					return dK
				},
				decode: function() {
					return dM
				},
				encode: function() {
					return dL
				},
				name: function() {
					return dJ
				}
			});
			var q = {};
			c.r(q), c.d(q, {
				base64: function() {
					return dP
				},
				base64pad: function() {
					return dQ
				},
				base64url: function() {
					return dR
				},
				base64urlpad: function() {
					return dS
				}
			});
			var r = {};
			c.r(r), c.d(r, {
				code: function() {
					return d5
				},
				decode: function() {
					return d7
				},
				encode: function() {
					return d6
				},
				format: function() {
					return d8
				},
				name: function() {
					return d4
				},
				parse: function() {
					return ea
				},
				stringify: function() {
					return d8
				}
			});
			var s = {};
			c.r(s), c.d(s, {
				code: function() {
					return ep
				},
				decode: function() {
					return ew
				},
				encode: function() {
					return ev
				},
				name: function() {
					return eo
				},
				toGeneral: function() {
					return eu
				}
			});
			var t = {};
			c.r(t), c.d(t, {
				identity: function() {
					return eB
				}
			});
			var u = {};
			c.r(u), c.d(u, {
				identity: function() {
					return eC
				}
			});
			var v = {};
			c.r(v), c.d(v, {
				base2: function() {
					return eD
				}
			});
			var w = {};
			c.r(w), c.d(w, {
				base8: function() {
					return eE
				}
			});
			var x = {};
			c.r(x), c.d(x, {
				base10: function() {
					return eF
				}
			});
			var y = {};
			c.r(y), c.d(y, {
				base16: function() {
					return eG
				},
				base16upper: function() {
					return eH
				}
			});
			var z = {};
			c.r(z), c.d(z, {
				base36: function() {
					return eI
				},
				base36upper: function() {
					return eJ
				}
			});
			var A = {};
			c.r(A), c.d(A, {
				base256emoji: function() {
					return eP
				}
			});
			var B = {};
			c.r(B), c.d(B, {
				sha256: function() {
					return eR
				},
				sha512: function() {
					return eS
				}
			});
			var C = {};
			c.r(C), c.d(C, {
				code: function() {
					return eU
				},
				decode: function() {
					return eW
				},
				encode: function() {
					return eV
				},
				name: function() {
					return eT
				}
			});
			var D = {};
			c.r(D), c.d(D, {
				code: function() {
					return e$
				},
				decode: function() {
					return e0
				},
				encode: function() {
					return e_
				},
				name: function() {
					return eZ
				}
			});
			let E = a => Promise.reject(Error(`No base found for "${a}"`));
			class F {
				constructor(a) {
					for (let b of (this._basesByName = {}, this._basesByPrefix = {}, this._loadBase = a.loadBase || E, a.bases)) this.addBase(b)
				}
				addBase(a) {
					if (this._basesByName[a.name] || this._basesByPrefix[a.prefix]) throw Error(`Codec already exists for codec "${a.name}"`);
					this._basesByName[a.name] = a, this._basesByPrefix[a.prefix] = a
				}
				removeBase(a) {
					delete this._basesByName[a.name], delete this._basesByPrefix[a.prefix]
				}
				async getBase(a) {
					if (this._basesByName[a]) return this._basesByName[a];
					if (this._basesByPrefix[a]) return this._basesByPrefix[a];
					let b = await this._loadBase(a);
					return null == this._basesByName[b.name] && null == this._basesByPrefix[b.prefix] && this.addBase(b), b
				}
				listBases() {
					return Object.values(this._basesByName)
				}
			}
			let G = a => Promise.reject(Error(`No codec found for "${a}"`));
			class H {
				constructor(a) {
					for (let b of (this._codecsByName = {}, this._codecsByCode = {}, this._loadCodec = a.loadCodec || G, a.codecs)) this.addCodec(b)
				}
				addCodec(a) {
					if (this._codecsByName[a.name] || this._codecsByCode[a.code]) throw Error(`Resolver already exists for codec "${a.name}"`);
					this._codecsByName[a.name] = a, this._codecsByCode[a.code] = a
				}
				removeCodec(a) {
					delete this._codecsByName[a.name], delete this._codecsByCode[a.code]
				}
				async getCodec(a) {
					let b = "string" == typeof a ? this._codecsByName : this._codecsByCode;
					if (b[a]) return b[a];
					let c = await this._loadCodec(a);
					return null == b[a] && this.addCodec(c), c
				}
				listCodecs() {
					return Object.values(this._codecsByName)
				}
			}
			let I = a => Promise.reject(Error(`No hasher found for "${a}"`));
			class J {
				constructor(a) {
					for (let b of (this._hashersByName = {}, this._hashersByCode = {}, this._loadHasher = a.loadHasher || I, a.hashers)) this.addHasher(b)
				}
				addHasher(a) {
					if (this._hashersByName[a.name] || this._hashersByCode[a.code]) throw Error(`Resolver already exists for codec "${a.name}"`);
					this._hashersByName[a.name] = a, this._hashersByCode[a.code] = a
				}
				removeHasher(a) {
					delete this._hashersByName[a.name], delete this._hashersByCode[a.code]
				}
				async getHasher(a) {
					let b = "string" == typeof a ? this._hashersByName : this._hashersByCode;
					if (b[a]) return b[a];
					let c = await this._loadHasher(a);
					return null == b[a] && this.addHasher(c), c
				}
				listHashers() {
					return Object.values(this._hashersByName)
				}
			}
			var K = O,
				L = 128,
				M = -128,
				N = 2147483648;

			function O(a, b, c) {
				b = b || [];
				for (var d = c = c || 0; a >= N;) b[c++] = 255 & a | L, a /= 128;
				for (; a & M;) b[c++] = 255 & a | L, a >>>= 7;
				return b[c] = 0 | a, O.bytes = c - d + 1, b
			}
			var P = S,
				Q = 128,
				R = 127;

			function S(a, b) {
				var c, d = 0,
					b = b || 0,
					e = 0,
					f = b,
					g = a.length;
				do {
					if (f >= g) throw S.bytes = 0, RangeError("Could not decode varint");
					c = a[f++], d += e < 28 ? (c & R) << e : (c & R) * Math.pow(2, e), e += 7
				} while (c >= Q);
				return S.bytes = f - b, d
			}
			var T = 128,
				U = 16384,
				V = 2097152,
				W = 268435456,
				X = 34359738368,
				Y = 4398046511104,
				Z = 562949953421312,
				$ = 72057594037927940,
				_ = 0x7fffffffffffffff,
				aa = {
					encode: K,
					decode: P,
					encodingLength: function(a) {
						return a < T ? 1 : a < U ? 2 : a < V ? 3 : a < W ? 4 : a < X ? 5 : a < Y ? 6 : a < Z ? 7 : a < $ ? 8 : a < _ ? 9 : 10
					}
				};
			let ab = (a, b = 0) => {
					let c = aa.decode(a, b);
					return [c, aa.decode.bytes]
				},
				ac = (a, b, c = 0) => (aa.encode(a, b, c), b),
				ad = a => aa.encodingLength(a),
				ae = (new Uint8Array(0), (a, b) => {
					if (a === b) return !0;
					if (a.byteLength !== b.byteLength) return !1;
					for (let c = 0; c < a.byteLength; c++)
						if (a[c] !== b[c]) return !1;
					return !0
				}),
				af = a => {
					if (a instanceof Uint8Array && "Uint8Array" === a.constructor.name) return a;
					if (a instanceof ArrayBuffer) return new Uint8Array(a);
					if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
					throw Error("Unknown type, must be binary type")
				},
				ag = a => new TextEncoder()
				.encode(a),
				ah = a => new TextDecoder()
				.decode(a),
				ai = (a, b) => {
					let c = b.byteLength,
						d = ad(a),
						e = d + ad(c),
						f = new Uint8Array(e + c);
					return ac(a, f, 0), ac(c, f, d), f.set(b, e), new al(a, c, b, f)
				},
				aj = a => {
					let b = af(a),
						[c, d] = ab(b),
						[e, f] = ab(b.subarray(d)),
						g = b.subarray(d + f);
					if (g.byteLength !== e) throw Error("Incorrect length");
					return new al(c, e, g, b)
				},
				ak = (a, b) => {
					if (a === b) return !0; {
						let c = b;
						return a.code === c.code && a.size === c.size && c.bytes instanceof Uint8Array && ae(a.bytes, c.bytes)
					}
				};
			class al {
				constructor(a, b, c, d) {
					this.code = a, this.size = b, this.digest = c, this.bytes = d
				}
			}

			function am(a, b) {
				if (a.length >= 255) throw TypeError("Alphabet too long");
				for (var c = new Uint8Array(256), d = 0; d < c.length; d++) c[d] = 255;
				for (var e = 0; e < a.length; e++) {
					var f = a.charAt(e),
						g = f.charCodeAt(0);
					if (255 !== c[g]) throw TypeError(f + " is ambiguous");
					c[g] = e
				}
				var h = a.length,
					i = a.charAt(0),
					j = Math.log(h) / Math.log(256),
					k = Math.log(256) / Math.log(h);

				function l(b) {
					if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
					if (0 === b.length) return "";
					for (var c = 0, d = 0, e = 0, f = b.length; e !== f && 0 === b[e];) e++, c++;
					for (var g = (f - e) * k + 1 >>> 0, j = new Uint8Array(g); e !== f;) {
						for (var l = b[e], m = 0, n = g - 1;
							(0 !== l || m < d) && -1 !== n; n--, m++) l += 256 * j[n] >>> 0, j[n] = l % h >>> 0, l = l / h >>> 0;
						if (0 !== l) throw Error("Non-zero carry");
						d = m, e++
					}
					for (var o = g - d; o !== g && 0 === j[o];) o++;
					for (var p = i.repeat(c); o < g; ++o) p += a.charAt(j[o]);
					return p
				}

				function m(a) {
					if ("string" != typeof a) throw TypeError("Expected String");
					if (0 === a.length) return new Uint8Array;
					var b = 0;
					if (" " !== a[b]) {
						for (var d = 0, e = 0; a[b] === i;) d++, b++;
						for (var f = (a.length - b) * j + 1 >>> 0, g = new Uint8Array(f); a[b];) {
							var k = c[a.charCodeAt(b)];
							if (255 === k) return;
							for (var l = 0, m = f - 1;
								(0 !== k || l < e) && -1 !== m; m--, l++) k += h * g[m] >>> 0, g[m] = k % 256 >>> 0, k = k / 256 >>> 0;
							if (0 !== k) throw Error("Non-zero carry");
							e = l, b++
						}
						if (" " !== a[b]) {
							for (var n = f - e; n !== f && 0 === g[n];) n++;
							for (var o = new Uint8Array(d + (f - n)), p = d; n !== f;) o[p++] = g[n++];
							return o
						}
					}
				}

				function n(a) {
					var c = m(a);
					if (c) return c;
					throw Error(`Non-${b} character`)
				}
				return {
					encode: l,
					decodeUnsafe: m,
					decode: n
				}
			}
			var an = am;
			class ao {
				constructor(a, b, c) {
					this.name = a, this.prefix = b, this.baseEncode = c
				}
				encode(a) {
					if (a instanceof Uint8Array) return `${this.prefix}${this.baseEncode(a)}`;
					throw Error("Unknown type, must be binary type")
				}
			}
			class ap {
				constructor(a, b, c) {
					if (this.name = a, this.prefix = b, void 0 === b.codePointAt(0)) throw Error("Invalid prefix character");
					this.prefixCodePoint = b.codePointAt(0), this.baseDecode = c
				}
				decode(a) {
					if ("string" == typeof a) {
						if (a.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(a)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
						return this.baseDecode(a.slice(this.prefix.length))
					}
					throw Error("Can only multibase decode strings")
				}
				or(a) {
					return ar(this, a)
				}
			}
			class aq {
				constructor(a) {
					this.decoders = a
				}
				or(a) {
					return ar(this, a)
				}
				decode(a) {
					let b = a[0],
						c = this.decoders[b];
					if (c) return c.decode(a);
					throw RangeError(`Unable to decode multibase string ${JSON.stringify(a)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
				}
			}
			let ar = (a, b) => new aq({
				...a.decoders || {
					[a.prefix]: a
				},
				...b.decoders || {
					[b.prefix]: b
				}
			});
			class as {
				constructor(a, b, c, d) {
					this.name = a, this.prefix = b, this.baseEncode = c, this.baseDecode = d, this.encoder = new ao(a, b, c), this.decoder = new ap(a, b, d)
				}
				encode(a) {
					return this.encoder.encode(a)
				}
				decode(a) {
					return this.decoder.decode(a)
				}
			}
			let at = ({
					name: a,
					prefix: b,
					encode: c,
					decode: d
				}) => new as(a, b, c, d),
				au = ({
					prefix: a,
					name: b,
					alphabet: c
				}) => {
					let {
						encode: d,
						decode: e
					} = an(c, b);
					return at({
						prefix: a,
						name: b,
						encode: d,
						decode: a => af(e(a))
					})
				},
				av = (a, b, c, d) => {
					let e = {};
					for (let f = 0; f < b.length; ++f) e[b[f]] = f;
					let g = a.length;
					for (;
						"=" === a[g - 1];) --g;
					let h = new Uint8Array(g * c / 8 | 0),
						i = 0,
						j = 0,
						k = 0;
					for (let l = 0; l < g; ++l) {
						let m = e[a[l]];
						if (void 0 === m) throw SyntaxError(`Non-${d} character`);
						j = j << c | m, i += c, i >= 8 && (i -= 8, h[k++] = 255 & j >> i)
					}
					if (i >= c || 255 & j << 8 - i) throw SyntaxError("Unexpected end of data");
					return h
				},
				aw = (a, b, c) => {
					let d = "=" === b[b.length - 1],
						e = (1 << c) - 1,
						f = "",
						g = 0,
						h = 0;
					for (let i = 0; i < a.length; ++i)
						for (h = h << 8 | a[i], g += 8; g > c;) g -= c, f += b[e & h >> g];
					if (g && (f += b[e & h << c - g]), d)
						for (; f.length * c & 7;) f += "=";
					return f
				},
				ax = ({
					name: a,
					prefix: b,
					bitsPerChar: c,
					alphabet: d
				}) => at({
					prefix: b,
					name: a,
					encode(a) {
						return aw(a, d, c)
					},
					decode(b) {
						return av(b, d, c, a)
					}
				}),
				ay = au({
					name: "base58btc",
					prefix: "z",
					alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
				}),
				az = au({
					name: "base58flickr",
					prefix: "Z",
					alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
				}),
				aA = ax({
					prefix: "b",
					name: "base32",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567",
					bitsPerChar: 5
				}),
				aB = ax({
					prefix: "B",
					name: "base32upper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
					bitsPerChar: 5
				}),
				aC = ax({
					prefix: "c",
					name: "base32pad",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
					bitsPerChar: 5
				}),
				aD = ax({
					prefix: "C",
					name: "base32padupper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
					bitsPerChar: 5
				}),
				aE = ax({
					prefix: "v",
					name: "base32hex",
					alphabet: "0123456789abcdefghijklmnopqrstuv",
					bitsPerChar: 5
				}),
				aF = ax({
					prefix: "V",
					name: "base32hexupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
					bitsPerChar: 5
				}),
				aG = ax({
					prefix: "t",
					name: "base32hexpad",
					alphabet: "0123456789abcdefghijklmnopqrstuv=",
					bitsPerChar: 5
				}),
				aH = ax({
					prefix: "T",
					name: "base32hexpadupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
					bitsPerChar: 5
				}),
				aI = ax({
					prefix: "h",
					name: "base32z",
					alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
					bitsPerChar: 5
				}),
				aJ = (a, b) => {
					let {
						bytes: c,
						version: d
					} = a;
					return 0 === d ? aO(c, aL(a), b || ay.encoder) : aP(c, aL(a), b || aA.encoder)
				},
				aK = new WeakMap,
				aL = a => {
					let b = aK.get(a);
					if (null == b) {
						let c = new Map;
						return aK.set(a, c), c
					}
					return b
				};
			class aM {
				constructor(a, b, c, d) {
					this.code = b, this.version = a, this.multihash = c, this.bytes = d, this["/"] = d
				}
				get asCID() {
					return this
				}
				get byteOffset() {
					return this.bytes.byteOffset
				}
				get byteLength() {
					return this.bytes.byteLength
				}
				toV0() {
					switch (this.version) {
						case 0:
							return this;
						case 1:
							{
								let {
									code: a,
									multihash: b
								} = this;
								if (a !== aQ) throw Error("Cannot convert a non dag-pb CID to CIDv0");
								if (b.code !== aR) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
								return aM.createV0(b)
							}
						default:
							throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
					}
				}
				toV1() {
					switch (this.version) {
						case 0:
							{
								let {
									code: a,
									digest: b
								} = this.multihash,
								c = ai(a, b);
								return aM.createV1(this.code, c)
							}
						case 1:
							return this;
						default:
							throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`)
					}
				}
				equals(a) {
					return aM.equals(this, a)
				}
				static equals(a, b) {
					let c = b;
					return c && a.code === c.code && a.version === c.version && ak(a.multihash, c.multihash)
				}
				toString(a) {
					return aJ(this, a)
				}
				toJSON() {
					return {
						"/": aJ(this)
					}
				}
				link() {
					return this
				}
				get[Symbol.toStringTag]() {
					return "CID"
				} [Symbol.for("nodejs.util.inspect.custom")]() {
					return `CID(${this.toString()})`
				}
				static asCID(a) {
					if (null == a) return null;
					let b = a;
					if (b instanceof aM) return b;
					if (null != b["/"] && b["/"] === b.bytes || b.asCID === b) {
						let {
							version: c,
							code: d,
							multihash: e,
							bytes: f
						} = b;
						return new aM(c, d, e, f || aS(c, d, e.bytes))
					}
					if (!0 !== b[aT]) return null; {
						let {
							version: g,
							multihash: h,
							code: i
						} = b, j = aj(h);
						return aM.create(g, i, j)
					}
				}
				static create(a, b, c) {
					if ("number" != typeof b) throw Error("String codecs are no longer supported");
					if (!(c.bytes instanceof Uint8Array)) throw Error("Invalid digest");
					switch (a) {
						case 0:
							if (b === aQ) return new aM(a, b, c, c.bytes);
							throw Error(`Version 0 CID must use dag-pb (code: ${aQ}) block encoding`);
						case 1:
							{
								let d = aS(a, b, c.bytes);
								return new aM(a, b, c, d)
							}
						default:
							throw Error("Invalid version")
					}
				}
				static createV0(a) {
					return aM.create(0, aQ, a)
				}
				static createV1(a, b) {
					return aM.create(1, a, b)
				}
				static decode(a) {
					let [b, c] = aM.decodeFirst(a);
					if (c.length) throw Error("Incorrect length");
					return b
				}
				static decodeFirst(a) {
					let b = aM.inspectBytes(a),
						c = b.size - b.multihashSize,
						d = af(a.subarray(c, c + b.multihashSize));
					if (d.byteLength !== b.multihashSize) throw Error("Incorrect length");
					let e = d.subarray(b.multihashSize - b.digestSize),
						f = new al(b.multihashCode, b.digestSize, e, d),
						g = 0 === b.version ? aM.createV0(f) : aM.createV1(b.codec, f);
					return [g, a.subarray(b.size)]
				}
				static inspectBytes(a) {
					let b = 0,
						c = () => {
							let [c, d] = ab(a.subarray(b));
							return b += d, c
						},
						d = c(),
						e = aQ;
					if (18 === d ? (d = 0, b = 0) : e = c(), 0 !== d && 1 !== d) throw RangeError(`Invalid CID version ${d}`);
					let f = b,
						g = c(),
						h = c(),
						i = b + h,
						j = i - f;
					return {
						version: d,
						codec: e,
						multihashCode: g,
						digestSize: h,
						multihashSize: j,
						size: i
					}
				}
				static parse(a, b) {
					let [c, d] = aN(a, b), e = aM.decode(d);
					if (0 === e.version && "Q" !== a[0]) throw Error("Version 0 CID string must not include multibase prefix");
					return aL(e)
						.set(c, a), e
				}
			}
			let aN = (a, b) => {
					switch (a[0]) {
						case "Q":
							{
								let c = b || ay;
								return [ay.prefix, c.decode(`${ay.prefix}${a}`)]
							}
						case ay.prefix:
							{
								let d = b || ay;
								return [ay.prefix, d.decode(a)]
							}
						case aA.prefix:
							{
								let e = b || aA;
								return [aA.prefix, e.decode(a)]
							}
						default:
							if (null == b) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
							return [a[0], b.decode(a)]
					}
				},
				aO = (a, b, c) => {
					let {
						prefix: d
					} = c;
					if (d !== ay.prefix) throw Error(`Cannot string encode V0 in ${c.name} encoding`);
					let e = b.get(d);
					if (null != e) return e; {
						let f = c.encode(a)
							.slice(1);
						return b.set(d, f), f
					}
				},
				aP = (a, b, c) => {
					let {
						prefix: d
					} = c, e = b.get(d);
					if (null != e) return e; {
						let f = c.encode(a);
						return b.set(d, f), f
					}
				},
				aQ = 112,
				aR = 18,
				aS = (a, b, c) => {
					let d = ad(a),
						e = d + ad(b),
						f = new Uint8Array(e + c.byteLength);
					return ac(a, f, 0), ac(b, f, d), f.set(c, e), f
				},
				aT = Symbol.for("@ipld/js-cid/CID"),
				aU = new TextDecoder;

			function aV(a, b) {
				let c = 0;
				for (let d = 0;; d += 7) {
					if (d >= 64) throw Error("protobuf: varint overflow");
					if (b >= a.length) throw Error("protobuf: unexpected end of data");
					let e = a[b++];
					if (c += d < 28 ? (127 & e) << d : (127 & e) * 2 ** d, e < 128) break
				}
				return [c, b]
			}

			function aW(a, b) {
				let c;
				[c, b] = aV(a, b);
				let d = b + c;
				if (c < 0 || d < 0) throw Error("protobuf: invalid length");
				if (d > a.length) throw Error("protobuf: unexpected end of data");
				return [a.subarray(b, d), d]
			}

			function aX(a, b) {
				let c;
				return [c, b] = aV(a, b), [7 & c, c >> 3, b]
			}

			function aY(a) {
				let b = {},
					c = a.length,
					d = 0;
				for (; d < c;) {
					let e, f;
					if ([e, f, d] = aX(a, d), 1 === f) {
						if (b.Hash) throw Error("protobuf: (PBLink) duplicate Hash section");
						if (2 !== e) throw Error(`protobuf: (PBLink) wrong wireType (${e}) for Hash`);
						if (void 0 !== b.Name) throw Error("protobuf: (PBLink) invalid order, found Name before Hash");
						if (void 0 !== b.Tsize) throw Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
						[b.Hash, d] = aW(a, d)
					} else if (2 === f) {
						if (void 0 !== b.Name) throw Error("protobuf: (PBLink) duplicate Name section");
						if (2 !== e) throw Error(`protobuf: (PBLink) wrong wireType (${e}) for Name`);
						if (void 0 !== b.Tsize) throw Error("protobuf: (PBLink) invalid order, found Tsize before Name");
						let g;
						[g, d] = aW(a, d), b.Name = aU.decode(g)
					} else if (3 === f) {
						if (void 0 !== b.Tsize) throw Error("protobuf: (PBLink) duplicate Tsize section");
						if (0 !== e) throw Error(`protobuf: (PBLink) wrong wireType (${e}) for Tsize`);
						[b.Tsize, d] = aV(a, d)
					} else throw Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${f}`)
				}
				if (d > c) throw Error("protobuf: (PBLink) unexpected end of data");
				return b
			}

			function aZ(a) {
				let b = a.length,
					c = 0,
					d, e = !1,
					f;
				for (; c < b;) {
					let g, h;
					if ([g, h, c] = aX(a, c), 2 !== g) throw Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${g}`);
					if (1 === h) {
						if (f) throw Error("protobuf: (PBNode) duplicate Data section");
						[f, c] = aW(a, c), d && (e = !0)
					} else if (2 === h) {
						if (e) throw Error("protobuf: (PBNode) duplicate Links section");
						d || (d = []);
						let i;
						[i, c] = aW(a, c), d.push(aY(i))
					} else throw Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${h}`)
				}
				if (c > b) throw Error("protobuf: (PBNode) unexpected end of data");
				let j = {};
				return f && (j.Data = f), j.Links = d || [], j
			}
			let a$ = new TextEncoder,
				a_ = 4294967296,
				a0 = 2147483648;

			function a1(a, b) {
				let c = b.length;
				if ("number" == typeof a.Tsize) {
					if (a.Tsize < 0) throw Error("Tsize cannot be negative");
					if (!Number.isSafeInteger(a.Tsize)) throw Error("Tsize too large for encoding");
					c = a5(b, c, a.Tsize) - 1, b[c] = 24
				}
				if ("string" == typeof a.Name) {
					let d = a$.encode(a.Name);
					c -= d.length, b.set(d, c), c = a5(b, c, d.length) - 1, b[c] = 18
				}
				return a.Hash && (c -= a.Hash.length, b.set(a.Hash, c), c = a5(b, c, a.Hash.length) - 1, b[c] = 10), b.length - c
			}

			function a2(a) {
				let b = a4(a),
					c = new Uint8Array(b),
					d = b;
				if (a.Data && (d -= a.Data.length, c.set(a.Data, d), d = a5(c, d, a.Data.length) - 1, c[d] = 10), a.Links)
					for (let e = a.Links.length - 1; e >= 0; e--) {
						let f = a1(a.Links[e], c.subarray(0, d));
						d -= f, d = a5(c, d, f) - 1, c[d] = 18
					}
				return c
			}

			function a3(a) {
				let b = 0;
				if (a.Hash) {
					let c = a.Hash.length;
					b += 1 + c + a6(c)
				}
				if ("string" == typeof a.Name) {
					let d = a$.encode(a.Name)
						.length;
					b += 1 + d + a6(d)
				}
				return "number" == typeof a.Tsize && (b += 1 + a6(a.Tsize)), b
			}

			function a4(a) {
				let b = 0;
				if (a.Data) {
					let c = a.Data.length;
					b += 1 + c + a6(c)
				}
				if (a.Links)
					for (let d of a.Links) {
						let e = a3(d);
						b += 1 + e + a6(e)
					}
				return b
			}

			function a5(a, b, c) {
				b -= a6(c);
				let d = b;
				for (; c >= a0;) a[b++] = 127 & c | 128, c /= 128;
				for (; c >= 128;) a[b++] = 127 & c | 128, c >>>= 7;
				return a[b] = c, d
			}

			function a6(a) {
				return a % 2 == 0 && a++, Math.floor((a7(a) + 6) / 7)
			}

			function a7(a) {
				let b = 0;
				return a >= a_ && (a = Math.floor(a / a_), b = 32), a >= 65536 && (a >>>= 16, b += 16), a >= 256 && (a >>>= 8, b += 8), b + a8[a]
			}
			let a8 = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
				a9 = ["Data", "Links"],
				ba = ["Hash", "Name", "Tsize"],
				bb = new TextEncoder;

			function bc(a, b) {
				if (a === b) return 0;
				let c = a.Name ? bb.encode(a.Name) : [],
					d = b.Name ? bb.encode(b.Name) : [],
					e = c.length,
					f = d.length;
				for (let g = 0, h = Math.min(e, f); g < h; ++g)
					if (c[g] !== d[g]) {
						e = c[g], f = d[g];
						break
					} return e < f ? -1 : f < e ? 1 : 0
			}

			function bd(a, b) {
				return !Object.keys(a)
					.some(a => !b.includes(a))
			}

			function be(a) {
				if ("object" == typeof a.asCID) {
					let b = aM.asCID(a);
					if (!b) throw TypeError("Invalid DAG-PB form");
					return {
						Hash: b
					}
				}
				if ("object" != typeof a || Array.isArray(a)) throw TypeError("Invalid DAG-PB form");
				let c = {};
				if (a.Hash) {
					let d = aM.asCID(a.Hash);
					try {
						!d && ("string" == typeof a.Hash ? d = aM.parse(a.Hash) : a.Hash instanceof Uint8Array && (d = aM.decode(a.Hash)))
					} catch (e) {
						throw TypeError(`Invalid DAG-PB form: ${e.message}`)
					}
					d && (c.Hash = d)
				}
				if (!c.Hash) throw TypeError("Invalid DAG-PB form");
				return "string" == typeof a.Name && (c.Name = a.Name), "number" == typeof a.Tsize && (c.Tsize = a.Tsize), c
			}

			function bf(a) {
				if ((a instanceof Uint8Array || "string" == typeof a) && (a = {
					Data: a
				}), "object" != typeof a || Array.isArray(a)) throw TypeError("Invalid DAG-PB form");
				let b = {};
				if (void 0 !== a.Data) {
					if ("string" == typeof a.Data) b.Data = bb.encode(a.Data);
					else if (a.Data instanceof Uint8Array) b.Data = a.Data;
					else throw TypeError("Invalid DAG-PB form")
				}
				if (void 0 !== a.Links) {
					if (Array.isArray(a.Links)) b.Links = a.Links.map(be), b.Links.sort(bc);
					else throw TypeError("Invalid DAG-PB form")
				} else b.Links = [];
				return b
			}

			function bg(a) {
				if (!a || "object" != typeof a || Array.isArray(a) || a instanceof Uint8Array || a["/"] && a["/"] === a.bytes) throw TypeError("Invalid DAG-PB form");
				if (!bd(a, a9)) throw TypeError("Invalid DAG-PB form (extraneous properties)");
				if (void 0 !== a.Data && !(a.Data instanceof Uint8Array)) throw TypeError("Invalid DAG-PB form (Data must be bytes)");
				if (!Array.isArray(a.Links)) throw TypeError("Invalid DAG-PB form (Links must be a list)");
				for (let b = 0; b < a.Links.length; b++) {
					let c = a.Links[b];
					if (!c || "object" != typeof c || Array.isArray(c) || c instanceof Uint8Array || c["/"] && c["/"] === c.bytes) throw TypeError("Invalid DAG-PB form (bad link)");
					if (!bd(c, ba)) throw TypeError("Invalid DAG-PB form (extraneous properties on link)");
					if (void 0 === c.Hash) throw TypeError("Invalid DAG-PB form (link must have a Hash)");
					if (null == c.Hash || !c.Hash["/"] || c.Hash["/"] !== c.Hash.bytes) throw TypeError("Invalid DAG-PB form (link Hash must be a CID)");
					if (void 0 !== c.Name && "string" != typeof c.Name) throw TypeError("Invalid DAG-PB form (link Name must be a string)");
					if (void 0 !== c.Tsize) {
						if ("number" != typeof c.Tsize || c.Tsize % 1 != 0) throw TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
						if (c.Tsize < 0) throw TypeError("Invalid DAG-PB form (link Tsize cannot be negative)")
					}
					if (b > 0 && -1 === bc(c, a.Links[b - 1])) throw TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)")
				}
			}

			function bh(a, b = []) {
				return bf({
					Data: a,
					Links: b
				})
			}

			function bi(a, b, c) {
				return be({
					Hash: c,
					Name: a,
					Tsize: b
				})
			}
			let bj = "dag-pb",
				bk = 112;

			function bl(a) {
				bg(a);
				let b = {};
				return a.Links && (b.Links = a.Links.map(a => {
					let b = {};
					return a.Hash && (b.Hash = a.Hash.bytes), void 0 !== a.Name && (b.Name = a.Name), void 0 !== a.Tsize && (b.Tsize = a.Tsize), b
				})), a.Data && (b.Data = a.Data), a2(b)
			}

			function bm(a) {
				let b = aZ(a),
					c = {};
				return b.Data && (c.Data = b.Data), b.Links && (c.Links = b.Links.map(a => {
					let b = {};
					try {
						b.Hash = aM.decode(a.Hash)
					} catch (c) {}
					if (!b.Hash) throw Error("Invalid Hash field found in link, expected CID");
					return void 0 !== a.Name && (b.Name = a.Name), void 0 !== a.Tsize && (b.Tsize = a.Tsize), b
				})), c
			}
			let bn = ["string", "number", "bigint", "symbol"],
				bo = ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "HTMLElement", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];

			function bp(a) {
				if (null === a) return "null";
				if (void 0 === a) return "undefined";
				if (!0 === a || !1 === a) return "boolean";
				let b = typeof a;
				if (bn.includes(b)) return b;
				if ("function" === b) return "Function";
				if (Array.isArray(a)) return "Array";
				if (bq(a)) return "Buffer";
				let c = br(a);
				return c || "Object"
			}

			function bq(a) {
				return a && a.constructor && a.constructor.isBuffer && a.constructor.isBuffer.call(null, a)
			}

			function br(a) {
				let b = Object.prototype.toString.call(a)
					.slice(8, -1);
				if (bo.includes(b)) return b
			}
			class bs {
				constructor(a, b, c) {
					this.major = a, this.majorEncoded = a << 5, this.name = b, this.terminal = c
				}
				toString() {
					return `Type[${this.major}].${this.name}`
				}
				compare(a) {
					return this.major < a.major ? -1 : this.major > a.major ? 1 : 0
				}
			}
			bs.uint = new bs(0, "uint", !0), bs.negint = new bs(1, "negint", !0), bs.bytes = new bs(2, "bytes", !0), bs.string = new bs(3, "string", !0), bs.array = new bs(4, "array", !1), bs.map = new bs(5, "map", !1), bs.tag = new bs(6, "tag", !1), bs.float = new bs(7, "float", !0), bs.false = new bs(7, "false", !0), bs.true = new bs(7, "true", !0), bs.null = new bs(7, "null", !0), bs.undefined = new bs(7, "undefined", !0), bs.break = new bs(7, "break", !0);
			class bt {
				constructor(a, b, c) {
					this.type = a, this.value = b, this.encodedLength = c, this.encodedBytes = void 0, this.byteValue = void 0
				}
				toString() {
					return `Token[${this.type}].${this.value}`
				}
			}
			let bu = globalThis.process && !globalThis.process.browser && globalThis.Buffer && "function" == typeof globalThis.Buffer.isBuffer,
				bv = new TextDecoder,
				bw = new TextEncoder;

			function bx(a) {
				return bu && globalThis.Buffer.isBuffer(a)
			}

			function by(a) {
				return a instanceof Uint8Array ? bx(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : a : Uint8Array.from(a)
			}
			let bz = bu ? (a, b, c) => c - b > 64 ? globalThis.Buffer.from(a.subarray(b, c))
				.toString("utf8") : bH(a, b, c) : (a, b, c) => c - b > 64 ? bv.decode(a.subarray(b, c)) : bH(a, b, c),
				bA = bu ? a => a.length > 64 ? globalThis.Buffer.from(a) : bG(a) : a => a.length > 64 ? bw.encode(a) : bG(a),
				bB = a => Uint8Array.from(a),
				bC = bu ? (a, b, c) => bx(a) ? new Uint8Array(a.subarray(b, c)) : a.slice(b, c) : (a, b, c) => a.slice(b, c),
				bD = bu ? (a, b) => (a = a.map(a => a instanceof Uint8Array ? a : globalThis.Buffer.from(a)), by(globalThis.Buffer.concat(a, b))) : (a, b) => {
					let c = new Uint8Array(b),
						d = 0;
					for (let e of a) d + e.length > c.length && (e = e.subarray(0, c.length - d)), c.set(e, d), d += e.length;
					return c
				},
				bE = bu ? a => globalThis.Buffer.allocUnsafe(a) : a => new Uint8Array(a);

			function bF(a, b) {
				if (bx(a) && bx(b)) return a.compare(b);
				for (let c = 0; c < a.length; c++)
					if (a[c] !== b[c]) return a[c] < b[c] ? -1 : 1;
				return 0
			}

			function bG(a, b = 1 / 0) {
				let c, d = a.length,
					e = null,
					f = [];
				for (let g = 0; g < d; ++g) {
					if ((c = a.charCodeAt(g)) > 55295 && c < 57344) {
						if (!e) {
							if (c > 56319 || g + 1 === d) {
								(b -= 3) > -1 && f.push(239, 191, 189);
								continue
							}
							e = c;
							continue
						}
						if (c < 56320) {
							(b -= 3) > -1 && f.push(239, 191, 189), e = c;
							continue
						}
						c = (e - 55296 << 10 | c - 56320) + 65536
					} else e && (b -= 3) > -1 && f.push(239, 191, 189);
					if (e = null, c < 128) {
						if ((b -= 1) < 0) break;
						f.push(c)
					} else if (c < 2048) {
						if ((b -= 2) < 0) break;
						f.push(c >> 6 | 192, 63 & c | 128)
					} else if (c < 65536) {
						if ((b -= 3) < 0) break;
						f.push(c >> 12 | 224, c >> 6 & 63 | 128, 63 & c | 128)
					} else if (c < 1114112) {
						if ((b -= 4) < 0) break;
						f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, 63 & c | 128)
					} else throw Error("Invalid code point")
				}
				return f
			}

			function bH(a, b, c) {
				let d = [];
				for (; b < c;) {
					let e = a[b],
						f = null,
						g = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
					if (b + g <= c) {
						let h, i, j, k;
						switch (g) {
							case 1:
								e < 128 && (f = e);
								break;
							case 2:
								(192 & (h = a[b + 1])) == 128 && (k = (31 & e) << 6 | 63 & h) > 127 && (f = k);
								break;
							case 3:
								h = a[b + 1], i = a[b + 2], (192 & h) == 128 && (192 & i) == 128 && (k = (15 & e) << 12 | (63 & h) << 6 | 63 & i) > 2047 && (k < 55296 || k > 57343) && (f = k);
								break;
							case 4:
								h = a[b + 1], i = a[b + 2], j = a[b + 3], (192 & h) == 128 && (192 & i) == 128 && (192 & j) == 128 && (k = (15 & e) << 18 | (63 & h) << 12 | (63 & i) << 6 | 63 & j) > 65535 && k < 1114112 && (f = k)
						}
					}
					null === f ? (f = 65533, g = 1) : f > 65535 && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), d.push(f), b += g
				}
				return bJ(d)
			}
			let bI = 4096;

			function bJ(a) {
				let b = a.length;
				if (b <= bI) return String.fromCharCode.apply(String, a);
				let c = "",
					d = 0;
				for (; d < b;) c += String.fromCharCode.apply(String, a.slice(d, d += bI));
				return c
			}
			let bK = 256;
			class bL {
				constructor(a = bK) {
					this.chunkSize = a, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null
				}
				reset() {
					this.cursor = 0, this.maxCursor = -1, this.chunks.length && (this.chunks = []), null !== this._initReuseChunk && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1)
				}
				push(a) {
					let b = this.chunks[this.chunks.length - 1],
						c = this.cursor + a.length;
					if (c <= this.maxCursor + 1) {
						let d = b.length - (this.maxCursor - this.cursor) - 1;
						b.set(a, d)
					} else {
						if (b) {
							let e = b.length - (this.maxCursor - this.cursor) - 1;
							e < b.length && (this.chunks[this.chunks.length - 1] = b.subarray(0, e), this.maxCursor = this.cursor - 1)
						}
						a.length < 64 && a.length < this.chunkSize ? (b = bE(this.chunkSize), this.chunks.push(b), this.maxCursor += b.length, null === this._initReuseChunk && (this._initReuseChunk = b), b.set(a, 0)) : (this.chunks.push(a), this.maxCursor += a.length)
					}
					this.cursor += a.length
				}
				toBytes(a = !1) {
					let b;
					if (1 === this.chunks.length) {
						let c = this.chunks[0];
						a && this.cursor > c.length / 2 ? (b = this.cursor === c.length ? c : c.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : b = bC(c, 0, this.cursor)
					} else b = bD(this.chunks, this.cursor);
					return a && this.reset(), b
				}
			}
			let bM = "CBOR decode error:",
				bN = "CBOR encode error:",
				bO = [];

			function bP(a, b, c) {
				if (a.length - b < c) throw Error(`${bM} not enough data for type`)
			}
			bO[23] = 1, bO[24] = 2, bO[25] = 3, bO[26] = 5, bO[27] = 9;
			let bQ = [24, 256, 65536, 4294967296, BigInt("18446744073709551616")];

			function bR(a, b, c) {
				bP(a, b, 1);
				let d = a[b];
				if (!0 === c.strict && d < bQ[0]) throw Error(`${bM} integer encoded in more bytes than necessary (strict decode)`);
				return d
			}

			function bS(a, b, c) {
				bP(a, b, 2);
				let d = a[b] << 8 | a[b + 1];
				if (!0 === c.strict && d < bQ[1]) throw Error(`${bM} integer encoded in more bytes than necessary (strict decode)`);
				return d
			}

			function bT(a, b, c) {
				bP(a, b, 4);
				let d = 16777216 * a[b] + (a[b + 1] << 16) + (a[b + 2] << 8) + a[b + 3];
				if (!0 === c.strict && d < bQ[2]) throw Error(`${bM} integer encoded in more bytes than necessary (strict decode)`);
				return d
			}

			function bU(a, b, c) {
				bP(a, b, 8);
				let d = 16777216 * a[b] + (a[b + 1] << 16) + (a[b + 2] << 8) + a[b + 3],
					e = 16777216 * a[b + 4] + (a[b + 5] << 16) + (a[b + 6] << 8) + a[b + 7],
					f = (BigInt(d) << BigInt(32)) + BigInt(e);
				if (!0 === c.strict && f < bQ[3]) throw Error(`${bM} integer encoded in more bytes than necessary (strict decode)`);
				if (f <= Number.MAX_SAFE_INTEGER) return Number(f);
				if (!0 === c.allowBigInt) return f;
				throw Error(`${bM} integers outside of the safe integer range are not supported`)
			}

			function bV(a, b, c, d) {
				return new bt(bs.uint, bR(a, b + 1, d), 2)
			}

			function bW(a, b, c, d) {
				return new bt(bs.uint, bS(a, b + 1, d), 3)
			}

			function bX(a, b, c, d) {
				return new bt(bs.uint, bT(a, b + 1, d), 5)
			}

			function bY(a, b, c, d) {
				return new bt(bs.uint, bU(a, b + 1, d), 9)
			}

			function bZ(a, b) {
				return b$(a, 0, b.value)
			}

			function b$(a, b, c) {
				if (c < bQ[0]) {
					let d = Number(c);
					a.push([b | d])
				} else if (c < bQ[1]) {
					let e = Number(c);
					a.push([24 | b, e])
				} else if (c < bQ[2]) {
					let f = Number(c);
					a.push([25 | b, f >>> 8, 255 & f])
				} else if (c < bQ[3]) {
					let g = Number(c);
					a.push([26 | b, g >>> 24 & 255, g >>> 16 & 255, g >>> 8 & 255, 255 & g])
				} else {
					let h = BigInt(c);
					if (h < bQ[4]) {
						let i = [27 | b, 0, 0, 0, 0, 0, 0, 0],
							j = Number(h & BigInt(4294967295)),
							k = Number(h >> BigInt(32) & BigInt(4294967295));
						i[8] = 255 & j, j >>= 8, i[7] = 255 & j, j >>= 8, i[6] = 255 & j, j >>= 8, i[5] = 255 & j, i[4] = 255 & k, k >>= 8, i[3] = 255 & k, k >>= 8, i[2] = 255 & k, k >>= 8, i[1] = 255 & k, a.push(i)
					} else throw Error(`${bM} encountered BigInt larger than allowable range`)
				}
			}

			function b_(a, b, c, d) {
				return new bt(bs.negint, -1 - bR(a, b + 1, d), 2)
			}

			function b0(a, b, c, d) {
				return new bt(bs.negint, -1 - bS(a, b + 1, d), 3)
			}

			function b1(a, b, c, d) {
				return new bt(bs.negint, -1 - bT(a, b + 1, d), 5)
			}
			bZ.encodedSize = function(a) {
				return b$.encodedSize(a.value)
			}, b$.encodedSize = function(a) {
				return a < bQ[0] ? 1 : a < bQ[1] ? 2 : a < bQ[2] ? 3 : a < bQ[3] ? 5 : 9
			}, bZ.compareTokens = function(a, b) {
				return a.value < b.value ? -1 : a.value > b.value ? 1 : 0
			};
			let b2 = BigInt(-1),
				b3 = BigInt(1);

			function b4(a, b, c, d) {
				let e = bU(a, b + 1, d);
				if ("bigint" != typeof e) {
					let f = -1 - e;
					if (f >= Number.MIN_SAFE_INTEGER) return new bt(bs.negint, f, 9)
				}
				if (!0 !== d.allowBigInt) throw Error(`${bM} integers outside of the safe integer range are not supported`);
				return new bt(bs.negint, b2 - BigInt(e), 9)
			}

			function b5(a, b) {
				let c = b.value,
					d = "bigint" == typeof c ? c * b2 - b3 : -1 * c - 1;
				b$(a, b.type.majorEncoded, d)
			}

			function b6(a, b, c, d) {
				bP(a, b, c + d);
				let e = bC(a, b + c, b + c + d);
				return new bt(bs.bytes, e, c + d)
			}

			function b7(a, b, c, d) {
				return b6(a, b, 1, c)
			}

			function b8(a, b, c, d) {
				return b6(a, b, 2, bR(a, b + 1, d))
			}

			function b9(a, b, c, d) {
				return b6(a, b, 3, bS(a, b + 1, d))
			}

			function ca(a, b, c, d) {
				return b6(a, b, 5, bT(a, b + 1, d))
			}

			function cb(a, b, c, d) {
				let e = bU(a, b + 1, d);
				if ("bigint" == typeof e) throw Error(`${bM} 64-bit integer bytes lengths not supported`);
				return b6(a, b, 9, e)
			}

			function cc(a) {
				return void 0 === a.encodedBytes && (a.encodedBytes = a.type === bs.string ? bA(a.value) : a.value), a.encodedBytes
			}

			function cd(a, b) {
				let c = cc(b);
				b$(a, b.type.majorEncoded, c.length), a.push(c)
			}

			function ce(a, b) {
				return a.length < b.length ? -1 : a.length > b.length ? 1 : bF(a, b)
			}

			function cf(a, b, c, d, e) {
				let f = c + d;
				bP(a, b, f);
				let g = new bt(bs.string, bz(a, b + c, b + f), f);
				return !0 === e.retainStringBytes && (g.byteValue = bC(a, b + c, b + f)), g
			}

			function cg(a, b, c, d) {
				return cf(a, b, 1, c, d)
			}

			function ch(a, b, c, d) {
				return cf(a, b, 2, bR(a, b + 1, d), d)
			}

			function ci(a, b, c, d) {
				return cf(a, b, 3, bS(a, b + 1, d), d)
			}

			function cj(a, b, c, d) {
				return cf(a, b, 5, bT(a, b + 1, d), d)
			}

			function ck(a, b, c, d) {
				let e = bU(a, b + 1, d);
				if ("bigint" == typeof e) throw Error(`${bM} 64-bit integer string lengths not supported`);
				return cf(a, b, 9, e, d)
			}
			b5.encodedSize = function(a) {
				let b = a.value,
					c = "bigint" == typeof b ? b * b2 - b3 : -1 * b - 1;
				return c < bQ[0] ? 1 : c < bQ[1] ? 2 : c < bQ[2] ? 3 : c < bQ[3] ? 5 : 9
			}, b5.compareTokens = function(a, b) {
				return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
			}, cd.encodedSize = function(a) {
				let b = cc(a);
				return b$.encodedSize(b.length) + b.length
			}, cd.compareTokens = function(a, b) {
				return ce(cc(a), cc(b))
			};
			let cl = cd;

			function cm(a, b, c, d) {
				return new bt(bs.array, d, c)
			}

			function cn(a, b, c, d) {
				return cm(a, b, 1, c)
			}

			function co(a, b, c, d) {
				return cm(a, b, 2, bR(a, b + 1, d))
			}

			function cp(a, b, c, d) {
				return cm(a, b, 3, bS(a, b + 1, d))
			}

			function cq(a, b, c, d) {
				return cm(a, b, 5, bT(a, b + 1, d))
			}

			function cr(a, b, c, d) {
				let e = bU(a, b + 1, d);
				if ("bigint" == typeof e) throw Error(`${bM} 64-bit integer array lengths not supported`);
				return cm(a, b, 9, e)
			}

			function cs(a, b, c, d) {
				if (!1 === d.allowIndefinite) throw Error(`${bM} indefinite length items not allowed`);
				return cm(a, b, 1, 1 / 0)
			}

			function ct(a, b) {
				b$(a, bs.array.majorEncoded, b.value)
			}

			function cu(a, b, c, d) {
				return new bt(bs.map, d, c)
			}

			function cv(a, b, c, d) {
				return cu(a, b, 1, c)
			}

			function cw(a, b, c, d) {
				return cu(a, b, 2, bR(a, b + 1, d))
			}

			function cx(a, b, c, d) {
				return cu(a, b, 3, bS(a, b + 1, d))
			}

			function cy(a, b, c, d) {
				return cu(a, b, 5, bT(a, b + 1, d))
			}

			function cz(a, b, c, d) {
				let e = bU(a, b + 1, d);
				if ("bigint" == typeof e) throw Error(`${bM} 64-bit integer map lengths not supported`);
				return cu(a, b, 9, e)
			}

			function cA(a, b, c, d) {
				if (!1 === d.allowIndefinite) throw Error(`${bM} indefinite length items not allowed`);
				return cu(a, b, 1, 1 / 0)
			}

			function cB(a, b) {
				b$(a, bs.map.majorEncoded, b.value)
			}

			function cC(a, b, c, d) {
				return new bt(bs.tag, c, 1)
			}

			function cD(a, b, c, d) {
				return new bt(bs.tag, bR(a, b + 1, d), 2)
			}

			function cE(a, b, c, d) {
				return new bt(bs.tag, bS(a, b + 1, d), 3)
			}

			function cF(a, b, c, d) {
				return new bt(bs.tag, bT(a, b + 1, d), 5)
			}

			function cG(a, b, c, d) {
				return new bt(bs.tag, bU(a, b + 1, d), 9)
			}

			function cH(a, b) {
				b$(a, bs.tag.majorEncoded, b.value)
			}
			ct.compareTokens = bZ.compareTokens, ct.encodedSize = function(a) {
				return b$.encodedSize(a.value)
			}, cB.compareTokens = bZ.compareTokens, cB.encodedSize = function(a) {
				return b$.encodedSize(a.value)
			}, cH.compareTokens = bZ.compareTokens, cH.encodedSize = function(a) {
				return b$.encodedSize(a.value)
			};
			let cI = 20,
				cJ = 21,
				cK = 22,
				cL = 23;

			function cM(a, b, c, d) {
				if (!1 === d.allowUndefined) throw Error(`${bM} undefined values are not supported`);
				return !0 === d.coerceUndefinedToNull ? new bt(bs.null, null, 1) : new bt(bs.undefined, void 0, 1)
			}

			function cN(a, b, c, d) {
				if (!1 === d.allowIndefinite) throw Error(`${bM} indefinite length items not allowed`);
				return new bt(bs.break, void 0, 1)
			}

			function cO(a, b, c) {
				if (c) {
					if (!1 === c.allowNaN && Number.isNaN(a)) throw Error(`${bM} NaN values are not supported`);
					if (!1 === c.allowInfinity && (a === 1 / 0 || a === -1 / 0)) throw Error(`${bM} Infinity values are not supported`)
				}
				return new bt(bs.float, a, b)
			}

			function cP(a, b, c, d) {
				return cO(cX(a, b + 1), 3, d)
			}

			function cQ(a, b, c, d) {
				return cO(cZ(a, b + 1), 5, d)
			}

			function cR(a, b, c, d) {
				return cO(c_(a, b + 1), 9, d)
			}

			function cS(a, b, c) {
				let d = b.value;
				if (!1 === d) a.push([bs.float.majorEncoded | cI]);
				else if (!0 === d) a.push([bs.float.majorEncoded | cJ]);
				else if (null === d) a.push([bs.float.majorEncoded | cK]);
				else if (void 0 === d) a.push([bs.float.majorEncoded | cL]);
				else {
					let e, f = !1;
					c && !0 === c.float64 || (cW(d), e = cX(cV, 1), d === e || Number.isNaN(d) ? (cV[0] = 249, a.push(cV.slice(0, 3)), f = !0) : (cY(d), e = cZ(cV, 1), d !== e || (cV[0] = 250, a.push(cV.slice(0, 5)), f = !0))), f || (c$(d), e = c_(cV, 1), cV[0] = 251, a.push(cV.slice(0, 9)))
				}
			}
			cS.encodedSize = function(a, b) {
				let c = a.value;
				if (!1 === c || !0 === c || null == c) return 1;
				if (!b || !0 !== b.float64) {
					cW(c);
					let d = cX(cV, 1);
					if (c === d || Number.isNaN(c)) return 3;
					if (cY(c), d = cZ(cV, 1), c === d) return 5
				}
				return 9
			};
			let cT = new ArrayBuffer(9),
				cU = new DataView(cT, 1),
				cV = new Uint8Array(cT, 0);

			function cW(a) {
				if (a === 1 / 0) cU.setUint16(0, 31744, !1);
				else if (a === -1 / 0) cU.setUint16(0, 64512, !1);
				else if (Number.isNaN(a)) cU.setUint16(0, 32256, !1);
				else {
					cU.setFloat32(0, a);
					let b = cU.getUint32(0),
						c = (2139095040 & b) >> 23,
						d = 8388607 & b;
					if (255 === c) cU.setUint16(0, 31744, !1);
					else if (0 === c) cU.setUint16(0, (2147483648 & a) >> 16 | d >> 13, !1);
					else {
						let e = c - 127;
						e < -24 ? cU.setUint16(0, 0) : e < -14 ? cU.setUint16(0, (2147483648 & b) >> 16 | 1 << 24 + e, !1) : cU.setUint16(0, (2147483648 & b) >> 16 | e + 15 << 10 | d >> 13, !1)
					}
				}
			}

			function cX(a, b) {
				if (a.length - b < 2) throw Error(`${bM} not enough data for float16`);
				let c = (a[b] << 8) + a[b + 1];
				if (31744 === c) return 1 / 0;
				if (64512 === c) return -1 / 0;
				if (32256 === c) return NaN;
				let d = c >> 10 & 31,
					e = 1023 & c,
					f;
				return f = 0 === d ? 5960464477539063e-23 * e : 31 !== d ? (e + 1024) * 2 ** (d - 25) : 0 === e ? 1 / 0 : NaN, 32768 & c ? -f : f
			}

			function cY(a) {
				cU.setFloat32(0, a, !1)
			}

			function cZ(a, b) {
				if (a.length - b < 4) throw Error(`${bM} not enough data for float32`);
				let c = (a.byteOffset || 0) + b;
				return new DataView(a.buffer, c, 4)
					.getFloat32(0, !1)
			}

			function c$(a) {
				cU.setFloat64(0, a, !1)
			}

			function c_(a, b) {
				if (a.length - b < 8) throw Error(`${bM} not enough data for float64`);
				let c = (a.byteOffset || 0) + b;
				return new DataView(a.buffer, c, 8)
					.getFloat64(0, !1)
			}

			function c0(a, b, c) {
				throw Error(`${bM} encountered invalid minor (${c}) for major ${a[b]>>>5}`)
			}

			function c1(a) {
				return () => {
					throw Error(`${bM} ${a}`)
				}
			}
			cS.compareTokens = bZ.compareTokens;
			let c2 = [];
			for (let c3 = 0; c3 <= 23; c3++) c2[c3] = c0;
			c2[24] = bV, c2[25] = bW, c2[26] = bX, c2[27] = bY, c2[28] = c0, c2[29] = c0, c2[30] = c0, c2[31] = c0;
			for (let c4 = 32; c4 <= 55; c4++) c2[c4] = c0;
			c2[56] = b_, c2[57] = b0, c2[58] = b1, c2[59] = b4, c2[60] = c0, c2[61] = c0, c2[62] = c0, c2[63] = c0;
			for (let c5 = 64; c5 <= 87; c5++) c2[c5] = b7;
			c2[88] = b8, c2[89] = b9, c2[90] = ca, c2[91] = cb, c2[92] = c0, c2[93] = c0, c2[94] = c0, c2[95] = c1("indefinite length bytes/strings are not supported");
			for (let c6 = 96; c6 <= 119; c6++) c2[c6] = cg;
			c2[120] = ch, c2[121] = ci, c2[122] = cj, c2[123] = ck, c2[124] = c0, c2[125] = c0, c2[126] = c0, c2[127] = c1("indefinite length bytes/strings are not supported");
			for (let c7 = 128; c7 <= 151; c7++) c2[c7] = cn;
			c2[152] = co, c2[153] = cp, c2[154] = cq, c2[155] = cr, c2[156] = c0, c2[157] = c0, c2[158] = c0, c2[159] = cs;
			for (let c8 = 160; c8 <= 183; c8++) c2[c8] = cv;
			c2[184] = cw, c2[185] = cx, c2[186] = cy, c2[187] = cz, c2[188] = c0, c2[189] = c0, c2[190] = c0, c2[191] = cA;
			for (let c9 = 192; c9 <= 215; c9++) c2[c9] = cC;
			c2[216] = cD, c2[217] = cE, c2[218] = cF, c2[219] = cG, c2[220] = c0, c2[221] = c0, c2[222] = c0, c2[223] = c0;
			for (let da = 224; da <= 243; da++) c2[da] = c1("simple values are not supported");
			c2[244] = c0, c2[245] = c0, c2[246] = c0, c2[247] = cM, c2[248] = c1("simple values are not supported"), c2[249] = cP, c2[250] = cQ, c2[251] = cR, c2[252] = c0, c2[253] = c0, c2[254] = c0, c2[255] = cN;
			let db = [];
			for (let dc = 0; dc < 24; dc++) db[dc] = new bt(bs.uint, dc, 1);
			for (let dd = -1; dd >= -24; dd--) db[31 - dd] = new bt(bs.negint, dd, 1);

			function de(a) {
				switch (a.type) {
					case bs.false:
						return bB([244]);
					case bs.true:
						return bB([245]);
					case bs.null:
						return bB([246]);
					case bs.bytes:
						if (!a.value.length) return bB([64]);
						return;
					case bs.string:
						if ("" === a.value) return bB([96]);
						return;
					case bs.array:
						if (0 === a.value) return bB([128]);
						return;
					case bs.map:
						if (0 === a.value) return bB([160]);
						return;
					case bs.uint:
						if (a.value < 24) return bB([Number(a.value)]);
						return;
					case bs.negint:
						if (a.value >= -24) return bB([31 - Number(a.value)])
				}
			}
			db[64] = new bt(bs.bytes, new Uint8Array(0), 1), db[96] = new bt(bs.string, "", 1), db[128] = new bt(bs.array, 0, 1), db[160] = new bt(bs.map, 0, 1), db[244] = new bt(bs.false, !1, 1), db[245] = new bt(bs.true, !0, 1), db[246] = new bt(bs.null, null, 1);
			let df = {
				float64: !1,
				mapSorter: dq,
				quickEncodeToken: de
			};

			function dg() {
				let a = [];
				return a[bs.uint.major] = bZ, a[bs.negint.major] = b5, a[bs.bytes.major] = cd, a[bs.string.major] = cl, a[bs.array.major] = ct, a[bs.map.major] = cB, a[bs.tag.major] = cH, a[bs.float.major] = cS, a
			}
			let dh = dg(),
				di = new bL;
			class dj {
				constructor(a, b) {
					this.obj = a, this.parent = b
				}
				includes(a) {
					let b = this;
					do
						if (b.obj === a) return !0; while (b = b.parent);
					return !1
				}
				static createCheck(a, b) {
					if (a && a.includes(b)) throw Error(`${bN} object contains circular references`);
					return new dj(b, a)
				}
			}
			let dk = {
					null: new bt(bs.null, null),
					undefined: new bt(bs.undefined, void 0),
					true: new bt(bs.true, !0),
					false: new bt(bs.false, !1),
					emptyArray: new bt(bs.array, 0),
					emptyMap: new bt(bs.map, 0)
				},
				dl = {
					number(a, b, c, d) {
						return Number.isInteger(a) && Number.isSafeInteger(a) ? a >= 0 ? new bt(bs.uint, a) : new bt(bs.negint, a) : new bt(bs.float, a)
					},
					bigint(a, b, c, d) {
						return a >= BigInt(0) ? new bt(bs.uint, a) : new bt(bs.negint, a)
					},
					Uint8Array(a, b, c, d) {
						return new bt(bs.bytes, a)
					},
					string(a, b, c, d) {
						return new bt(bs.string, a)
					},
					boolean(a, b, c, d) {
						return a ? dk.true : dk.false
					},
					null(a, b, c, d) {
						return dk.null
					},
					undefined(a, b, c, d) {
						return dk.undefined
					},
					ArrayBuffer(a, b, c, d) {
						return new bt(bs.bytes, new Uint8Array(a))
					},
					DataView(a, b, c, d) {
						return new bt(bs.bytes, new Uint8Array(a.buffer, a.byteOffset, a.byteLength))
					},
					Array(a, b, c, d) {
						if (!a.length) return !0 === c.addBreakTokens ? [dk.emptyArray, new bt(bs.break)] : dk.emptyArray;
						d = dj.createCheck(d, a);
						let e = [],
							f = 0;
						for (let g of a) e[f++] = dn(g, c, d);
						return c.addBreakTokens ? [new bt(bs.array, a.length), e, new bt(bs.break)] : [new bt(bs.array, a.length), e]
					},
					Object(a, b, c, d) {
						let e = "Object" !== b,
							f = e ? a.keys() : Object.keys(a),
							g = e ? a.size : f.length;
						if (!g) return !0 === c.addBreakTokens ? [dk.emptyMap, new bt(bs.break)] : dk.emptyMap;
						d = dj.createCheck(d, a);
						let h = [],
							i = 0;
						for (let j of f) h[i++] = [dn(j, c, d), dn(e ? a.get(j) : a[j], c, d)];
						return (dp(h, c), c.addBreakTokens) ? [new bt(bs.map, g), h, new bt(bs.break)] : [new bt(bs.map, g), h]
					}
				};
			for (let dm of (dl.Map = dl.Object, dl.Buffer = dl.Uint8Array, "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))) dl[`${dm}Array`] = dl.DataView;

			function dn(a, b = {}, c) {
				let d = bp(a),
					e = b && b.typeEncoders && b.typeEncoders[d] || dl[d];
				if ("function" == typeof e) {
					let f = e(a, d, b, c);
					if (null != f) return f
				}
				let g = dl[d];
				if (!g) throw Error(`${bN} unsupported type: ${d}`);
				return g(a, d, b, c)
			}

			function dp(a, b) {
				b.mapSorter && a.sort(b.mapSorter)
			}

			function dq(a, b) {
				let c = Array.isArray(a[0]) ? a[0][0] : a[0],
					d = Array.isArray(b[0]) ? b[0][0] : b[0];
				if (c.type !== d.type) return c.type.compare(d.type);
				let e = c.type.major,
					f = dh[e].compareTokens(c, d);
				return 0 === f && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone"), f
			}

			function dr(a, b, c, d) {
				if (Array.isArray(b))
					for (let e of b) dr(a, e, c, d);
				else c[b.type.major](a, b, d)
			}

			function ds(a, b, c) {
				let d = dn(a, c);
				if (!Array.isArray(d) && c.quickEncodeToken) {
					let e = c.quickEncodeToken(d);
					if (e) return e;
					let f = b[d.type.major];
					if (f.encodedSize) {
						let g = f.encodedSize(d, c),
							h = new bL(g);
						if (f(h, d, c), 1 !== h.chunks.length) throw Error(`Unexpected error: pre-calculated length for ${d} was wrong`);
						return by(h.chunks[0])
					}
				}
				return di.reset(), dr(di, d, b, c), di.toBytes(!0)
			}

			function dt(a, b) {
				return b = Object.assign({}, df, b), ds(a, dh, b)
			}
			let du = {
				strict: !1,
				allowIndefinite: !0,
				allowUndefined: !0,
				allowBigInt: !0
			};
			class dv {
				constructor(a, b = {}) {
					this.pos = 0, this.data = a, this.options = b
				}
				done() {
					return this.pos >= this.data.length
				}
				next() {
					let a = this.data[this.pos],
						b = db[a];
					if (void 0 === b) {
						let c = c2[a];
						if (!c) throw Error(`${bM} no decoder for major type ${a>>>5} (byte 0x${a.toString(16).padStart(2,"0")})`);
						let d = 31 & a;
						b = c(this.data, this.pos, d, this.options)
					}
					return this.pos += b.encodedLength, b
				}
			}
			let dw = Symbol.for("DONE"),
				dx = Symbol.for("BREAK");

			function dy(a, b, c) {
				let d = [];
				for (let e = 0; e < a.value; e++) {
					let f = dA(b, c);
					if (f === dx) {
						if (a.value === 1 / 0) break;
						throw Error(`${bM} got unexpected break to lengthed array`)
					}
					if (f === dw) throw Error(`${bM} found array but not enough entries (got ${e}, expected ${a.value})`);
					d[e] = f
				}
				return d
			}

			function dz(a, b, c) {
				let d = !0 === c.useMaps,
					e = d ? void 0 : {},
					f = d ? new Map : void 0;
				for (let g = 0; g < a.value; g++) {
					let h = dA(b, c);
					if (h === dx) {
						if (a.value === 1 / 0) break;
						throw Error(`${bM} got unexpected break to lengthed map`)
					}
					if (h === dw) throw Error(`${bM} found map but not enough entries (got ${g} [no key], expected ${a.value})`);
					if (!0 !== d && "string" != typeof h) throw Error(`${bM} non-string keys not supported (got ${typeof h})`);
					if (!0 === c.rejectDuplicateMapKeys && (d && f.has(h) || !d && h in e)) throw Error(`${bM} found repeat map key "${h}"`);
					let i = dA(b, c);
					if (i === dw) throw Error(`${bM} found map but not enough entries (got ${g} [no value], expected ${a.value})`);
					d ? f.set(h, i) : e[h] = i
				}
				return d ? f : e
			}

			function dA(a, b) {
				if (a.done()) return dw;
				let c = a.next();
				if (c.type === bs.break) return dx;
				if (c.type.terminal) return c.value;
				if (c.type === bs.array) return dy(c, a, b);
				if (c.type === bs.map) return dz(c, a, b);
				if (c.type === bs.tag) {
					if (b.tags && "function" == typeof b.tags[c.value]) {
						let d = dA(a, b);
						return b.tags[c.value](d)
					}
					throw Error(`${bM} tag not supported (${c.value})`)
				}
				throw Error("unsupported")
			}

			function dB(a, b) {
				if (!(a instanceof Uint8Array)) throw Error(`${bM} data to decode must be a Uint8Array`);
				b = Object.assign({}, du, b);
				let c = b.tokenizer || new dv(a, b),
					d = dA(c, b);
				if (d === dw) throw Error(`${bM} did not find any content to decode`);
				if (d === dx) throw Error(`${bM} got unexpected break`);
				if (!c.done()) throw Error(`${bM} too many terminals, data makes no sense`);
				return d
			}
			let dC = 42;

			function dD(a) {
				if (a.asCID !== a && a["/"] !== a.bytes) return null;
				let b = aM.asCID(a);
				if (!b) return null;
				let c = new Uint8Array(b.bytes.byteLength + 1);
				return c.set(b.bytes, 1), [new bt(bs.tag, dC), new bt(bs.bytes, c)]
			}

			function dE() {
				throw Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
			}

			function dF(a) {
				if (Number.isNaN(a)) throw Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
				if (a === 1 / 0 || a === -1 / 0) throw Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
				return null
			}
			let dG = {
				float64: !0,
				typeEncoders: {
					Object: dD,
					undefined: dE,
					number: dF
				}
			};

			function dH(a) {
				if (0 !== a[0]) throw Error("Invalid CID for CBOR tag 42; expected leading 0x00");
				return aM.decode(a.subarray(1))
			}
			let dI = {
				allowIndefinite: !1,
				coerceUndefinedToNull: !0,
				allowNaN: !1,
				allowInfinity: !1,
				allowBigInt: !0,
				strict: !0,
				useMaps: !1,
				rejectDuplicateMapKeys: !0,
				tags: []
			};
			dI.tags[dC] = dH;
			let dJ = "dag-cbor",
				dK = 113,
				dL = a => dt(a, dG),
				dM = a => dB(a, dI),
				dN = ({
					name: a,
					code: b,
					encode: c
				}) => new dO(a, b, c);
			class dO {
				constructor(a, b, c) {
					this.name = a, this.code = b, this.encode = c
				}
				digest(a) {
					if (a instanceof Uint8Array) {
						let b = this.encode(a);
						return b instanceof Uint8Array ? ai(this.code, b) : b.then(a => ai(this.code, a))
					}
					throw Error("Unknown type, must be binary type")
				}
			}
			let dP = ax({
					prefix: "m",
					name: "base64",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					bitsPerChar: 6
				}),
				dQ = ax({
					prefix: "M",
					name: "base64pad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					bitsPerChar: 6
				}),
				dR = ax({
					prefix: "u",
					name: "base64url",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
					bitsPerChar: 6
				}),
				dS = ax({
					prefix: "U",
					name: "base64urlpad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
					bitsPerChar: 6
				});
			class dT extends Array {
				constructor() {
					super(), this.inRecursive = []
				}
				prefix(a) {
					let b = this.inRecursive[this.inRecursive.length - 1];
					b && (b.type === bs.array && (b.elements++, 1 !== b.elements && a.push([44])), b.type === bs.map && (b.elements++, 1 !== b.elements && (b.elements % 2 == 1 ? a.push([44]) : a.push([58]))))
				} [bs.uint.major](a, b) {
					this.prefix(a);
					let c = String(b.value),
						d = [];
					for (let e = 0; e < c.length; e++) d[e] = c.charCodeAt(e);
					a.push(d)
				} [bs.negint.major](a, b) {
					this[bs.uint.major](a, b)
				} [bs.bytes.major](a, b) {
					throw Error(`${bN} unsupported type: Uint8Array`)
				} [bs.string.major](a, b) {
					this.prefix(a);
					let c = bA(JSON.stringify(b.value));
					a.push(c.length > 32 ? by(c) : c)
				} [bs.array.major](a, b) {
					this.prefix(a), this.inRecursive.push({
						type: bs.array,
						elements: 0
					}), a.push([91])
				} [bs.map.major](a, b) {
					this.prefix(a), this.inRecursive.push({
						type: bs.map,
						elements: 0
					}), a.push([123])
				} [bs.tag.major](a, b) {} [bs.float.major](a, b) {
					if ("break" === b.type.name) {
						let c = this.inRecursive.pop();
						if (c) {
							if (c.type === bs.array) a.push([93]);
							else if (c.type === bs.map) a.push([125]);
							else throw Error("Unexpected recursive type; this should not happen!");
							return
						}
						throw Error("Unexpected break; this should not happen!")
					}
					if (void 0 === b.value) throw Error(`${bN} unsupported type: undefined`);
					if (this.prefix(a), "true" === b.type.name) {
						a.push([116, 114, 117, 101]);
						return
					}
					if ("false" === b.type.name) {
						a.push([102, 97, 108, 115, 101]);
						return
					}
					if ("null" === b.type.name) {
						a.push([110, 117, 108, 108]);
						return
					}
					let d = String(b.value),
						e = [],
						f = !1;
					for (let g = 0; g < d.length; g++) e[g] = d.charCodeAt(g), f || 46 !== e[g] && 101 !== e[g] && 69 !== e[g] || (f = !0);
					f || (e.push(46), e.push(48)), a.push(e)
				}
			}

			function dU(a, b) {
				if (Array.isArray(a[0]) || Array.isArray(b[0])) throw Error(`${bN} complex map keys are not supported`);
				let c = a[0],
					d = b[0];
				if (c.type !== bs.string || d.type !== bs.string) throw Error(`${bN} non-string map keys are not supported`);
				if (c < d) return -1;
				if (c > d) return 1;
				throw Error(`${bN} unexpected duplicate map keys, this is not supported`)
			}
			let dV = {
				addBreakTokens: !0,
				mapSorter: dU
			};

			function dW(a, b) {
				return b = Object.assign({}, dV, b), ds(a, new dT, b)
			}
			class dX {
				constructor(a, b = {}) {
					this.pos = 0, this.data = a, this.options = b, this.modeStack = ["value"], this.lastToken = ""
				}
				done() {
					return this.pos >= this.data.length
				}
				ch() {
					return this.data[this.pos]
				}
				currentMode() {
					return this.modeStack[this.modeStack.length - 1]
				}
				skipWhitespace() {
					let a = this.ch();
					for (; 32 === a || 9 === a || 13 === a || 10 === a;) a = this.data[++this.pos]
				}
				expect(a) {
					if (this.data.length - this.pos < a.length) throw Error(`${bM} unexpected end of input at position ${this.pos}`);
					for (let b = 0; b < a.length; b++)
						if (this.data[this.pos++] !== a[b]) throw Error(`${bM} unexpected token at position ${this.pos}, expected to find '${String.fromCharCode(...a)}'`)
				}
				parseNumber() {
					let a = this.pos,
						b = !1,
						c = !1,
						d = a => {
							for (; !this.done();) {
								let b = this.ch();
								if (a.includes(b)) this.pos++;
								else break
							}
						};
					if (45 === this.ch() && (b = !0, this.pos++), 48 === this.ch()) {
						if (this.pos++, 46 !== this.ch()) return new bt(bs.uint, 0, this.pos - a);
						this.pos++, c = !0
					}
					if (d([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]), b && this.pos === a + 1) throw Error(`${bM} unexpected token at position ${this.pos}`);
					if (!this.done() && 46 === this.ch()) {
						if (c) throw Error(`${bM} unexpected token at position ${this.pos}`);
						c = !0, this.pos++, d([48, 49, 50, 51, 52, 53, 54, 55, 56, 57])
					}
					this.done() || 101 !== this.ch() && 69 !== this.ch() || (c = !0, this.pos++, !this.done() && (43 === this.ch() || 45 === this.ch()) && this.pos++, d([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]));
					let e = String.fromCharCode.apply(null, this.data.subarray(a, this.pos)),
						f = parseFloat(e);
					return c ? new bt(bs.float, f, this.pos - a) : !0 !== this.options.allowBigInt || Number.isSafeInteger(f) ? new bt(f >= 0 ? bs.uint : bs.negint, f, this.pos - a) : new bt(f >= 0 ? bs.uint : bs.negint, BigInt(e), this.pos - a)
				}
				parseString() {
					if (34 !== this.ch()) throw Error(`${bM} unexpected character at position ${this.pos}; this shouldn't happen`);
					this.pos++;
					for (let a = this.pos, b = 0; a < this.data.length && b < 65536; a++, b++) {
						let c = this.data[a];
						if (92 === c || c < 32 || c >= 128) break;
						if (34 === c) {
							let d = String.fromCharCode.apply(null, this.data.subarray(this.pos, a));
							return this.pos = a + 1, new bt(bs.string, d, b)
						}
					}
					let e = this.pos,
						f = [],
						g = () => {
							if (this.pos + 4 >= this.data.length) throw Error(`${bM} unexpected end of unicode escape sequence at position ${this.pos}`);
							let a = 0;
							for (let b = 0; b < 4; b++) {
								let c = this.ch();
								if (c >= 48 && c <= 57) c -= 48;
								else if (c >= 97 && c <= 102) c = c - 97 + 10;
								else if (c >= 65 && c <= 70) c = c - 65 + 10;
								else throw Error(`${bM} unexpected unicode escape character at position ${this.pos}`);
								a = 16 * a + c, this.pos++
							}
							return a
						},
						h = () => {
							let a = this.ch(),
								b = null,
								c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
							if (this.pos + c > this.data.length) throw Error(`${bM} unexpected unicode sequence at position ${this.pos}`);
							let d, e, g, h;
							switch (c) {
								case 1:
									a < 128 && (b = a);
									break;
								case 2:
									(192 & (d = this.data[this.pos + 1])) == 128 && (h = (31 & a) << 6 | 63 & d) > 127 && (b = h);
									break;
								case 3:
									d = this.data[this.pos + 1], e = this.data[this.pos + 2], (192 & d) == 128 && (192 & e) == 128 && (h = (15 & a) << 12 | (63 & d) << 6 | 63 & e) > 2047 && (h < 55296 || h > 57343) && (b = h);
									break;
								case 4:
									d = this.data[this.pos + 1], e = this.data[this.pos + 2], g = this.data[this.pos + 3], (192 & d) == 128 && (192 & e) == 128 && (192 & g) == 128 && (h = (15 & a) << 18 | (63 & d) << 12 | (63 & e) << 6 | 63 & g) > 65535 && h < 1114112 && (b = h)
							}
							null === b ? (b = 65533, c = 1) : b > 65535 && (b -= 65536, f.push(b >>> 10 & 1023 | 55296), b = 56320 | 1023 & b), f.push(b), this.pos += c
						};
					for (; !this.done();) {
						let i = this.ch(),
							j;
						switch (i) {
							case 92:
								if (this.pos++, this.done()) throw Error(`${bM} unexpected string termination at position ${this.pos}`);
								switch (j = this.ch(), this.pos++, j) {
									case 34:
									case 39:
									case 92:
									case 47:
										f.push(j);
										break;
									case 98:
										f.push(8);
										break;
									case 116:
										f.push(9);
										break;
									case 110:
										f.push(10);
										break;
									case 102:
										f.push(12);
										break;
									case 114:
										f.push(13);
										break;
									case 117:
										f.push(g());
										break;
									default:
										throw Error(`${bM} unexpected string escape character at position ${this.pos}`)
								}
								break;
							case 34:
								return this.pos++, new bt(bs.string, bJ(f), this.pos - e);
							default:
								if (i < 32) throw Error(`${bM} invalid control character at position ${this.pos}`);
								i < 128 ? (f.push(i), this.pos++) : h()
						}
					}
					throw Error(`${bM} unexpected end of string at position ${this.pos}`)
				}
				parseValue() {
					switch (this.ch()) {
						case 123:
							return this.modeStack.push("obj-start"), this.pos++, new bt(bs.map, 1 / 0, 1);
						case 91:
							return this.modeStack.push("array-start"), this.pos++, new bt(bs.array, 1 / 0, 1);
						case 34:
							return this.parseString();
						case 110:
							return this.expect([110, 117, 108, 108]), new bt(bs.null, null, 4);
						case 102:
							return this.expect([102, 97, 108, 115, 101]), new bt(bs.false, !1, 5);
						case 116:
							return this.expect([116, 114, 117, 101]), new bt(bs.true, !0, 4);
						case 45:
						case 48:
						case 49:
						case 50:
						case 51:
						case 52:
						case 53:
						case 54:
						case 55:
						case 56:
						case 57:
							return this.parseNumber();
						default:
							throw Error(`${bM} unexpected character at position ${this.pos}`)
					}
				}
				next() {
					switch (this.skipWhitespace(), this.currentMode()) {
						case "value":
							return this.modeStack.pop(), this.parseValue();
						case "array-value":
							if (this.modeStack.pop(), 93 === this.ch()) return this.pos++, this.skipWhitespace(), new bt(bs.break, void 0, 1);
							if (44 !== this.ch()) throw Error(`${bM} unexpected character at position ${this.pos}, was expecting array delimiter but found '${String.fromCharCode(this.ch())}'`);
							return this.pos++, this.modeStack.push("array-value"), this.skipWhitespace(), this.parseValue();
						case "array-start":
							if (this.modeStack.pop(), 93 === this.ch()) return this.pos++, this.skipWhitespace(), new bt(bs.break, void 0, 1);
							return this.modeStack.push("array-value"), this.skipWhitespace(), this.parseValue();
						case "obj-key":
							if (125 === this.ch()) return this.modeStack.pop(), this.pos++, this.skipWhitespace(), new bt(bs.break, void 0, 1);
							if (44 !== this.ch()) throw Error(`${bM} unexpected character at position ${this.pos}, was expecting object delimiter but found '${String.fromCharCode(this.ch())}'`);
							this.pos++, this.skipWhitespace();
						case "obj-start":
							{
								if (this.modeStack.pop(), 125 === this.ch()) return this.pos++,
								this.skipWhitespace(),
								new bt(bs.break, void 0, 1);
								let a = this.parseString();
								if (this.skipWhitespace(), 58 !== this.ch()) throw Error(`${bM} unexpected character at position ${this.pos}, was expecting key/value delimiter ':' but found '${String.fromCharCode(this.ch())}'`);
								return this.pos++,
								this.modeStack.push("obj-value"),
								a
							}
						case "obj-value":
							return this.modeStack.pop(), this.modeStack.push("obj-key"), this.skipWhitespace(), this.parseValue();
						default:
							throw Error(`${bM} unexpected parse state at position ${this.pos}; this shouldn't happen`)
					}
				}
			}

			function dY(a, b) {
				return b = Object.assign({
					tokenizer: new dX(a, b)
				}, b), dB(a, b)
			}

			function dZ(a) {
				if (a.asCID !== a && a["/"] !== a.bytes) return null;
				let b = aM.asCID(a);
				if (!b) return null;
				let c = b.toString();
				return [new bt(bs.map, 1 / 0, 1), new bt(bs.string, "/", 1), new bt(bs.string, c, c.length), new bt(bs.break, void 0, 1)]
			}

			function d$(a) {
				let b = dP.encode(a)
					.slice(1);
				return [new bt(bs.map, 1 / 0, 1), new bt(bs.string, "/", 1), new bt(bs.map, 1 / 0, 1), new bt(bs.string, "bytes", 5), new bt(bs.string, b, b.length), new bt(bs.break, void 0, 1), new bt(bs.break, void 0, 1)]
			}

			function d_() {
				throw Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")
			}

			function d0(a) {
				if (Number.isNaN(a)) throw Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
				if (a === 1 / 0 || a === -1 / 0) throw Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
				return null
			}
			let d1 = {
				typeEncoders: {
					Object: dZ,
					Uint8Array: d$,
					Buffer: d$,
					undefined: d_,
					number: d0
				}
			};
			class d2 extends dX {
				constructor(a, b) {
					super(a, b), this.tokenBuffer = []
				}
				done() {
					return 0 === this.tokenBuffer.length && super.done()
				}
				_next() {
					return this.tokenBuffer.length > 0 ? this.tokenBuffer.pop() : super.next()
				}
				next() {
					let a = this._next();
					if (a.type === bs.map) {
						let b = this._next();
						if (b.type === bs.string && "/" === b.value) {
							let c = this._next();
							if (c.type === bs.string) {
								let d = this._next();
								if (d.type !== bs.break) throw Error("Invalid encoded CID form");
								return this.tokenBuffer.push(c), new bt(bs.tag, 42, 0)
							}
							if (c.type === bs.map) {
								let e = this._next();
								if (e.type === bs.string && "bytes" === e.value) {
									let f = this._next();
									if (f.type === bs.string) {
										for (let g = 0; g < 2; g++) {
											let h = this._next();
											if (h.type !== bs.break) throw Error("Invalid encoded Bytes form")
										}
										let i = dP.decode(`m${f.value}`);
										return new bt(bs.bytes, i, f.value.length)
									}
									this.tokenBuffer.push(f)
								}
								this.tokenBuffer.push(e)
							}
							this.tokenBuffer.push(c)
						}
						this.tokenBuffer.push(b)
					}
					return a
				}
			}
			let d3 = {
				allowIndefinite: !1,
				allowUndefined: !1,
				allowNaN: !1,
				allowInfinity: !1,
				allowBigInt: !0,
				strict: !0,
				useMaps: !1,
				rejectDuplicateMapKeys: !0,
				tags: []
			};
			d3.tags[42] = aM.parse;
			let d4 = "dag-json",
				d5 = 297,
				d6 = a => dW(a, d1),
				d7 = a => {
					let b = Object.assign(d3, {
						tokenizer: new d2(a, d3)
					});
					return dY(a, b)
				},
				d8 = a => d9.decode(d6(a)),
				d9 = new TextDecoder,
				ea = a => d7(eb.encode(a)),
				eb = new TextEncoder;

			function ec(a) {
				return dR.encode(a)
					.slice(1)
			}

			function ed(a) {
				return dR.decode(`u${a}`)
			}

			function ee(a) {
				let [b, c, d] = a;
				return {
					payload: c,
					signatures: [{
						protected: b,
						signature: d
					}],
					link: aM.decode(ed(c))
				}
			}

			function ef(a) {
				let b = {
					signature: ed(a.signature)
				};
				return a.header && (b.header = a.header), a.protected && (b.protected = ed(a.protected)), b
			}

			function eg(a) {
				let b = ed(a.payload);
				try {
					aM.decode(b)
				} catch (c) {
					throw Error("Not a valid DagJWS")
				}
				return {
					payload: b,
					signatures: a.signatures.map(ef)
				}
			}

			function eh(a) {
				let b = {
					signature: ec(a.signature)
				};
				return a.header && (b.header = a.header), a.protected && (b.protected = ec(a.protected)), b
			}

			function ei(a) {
				let b = {
					payload: ec(a.payload),
					signatures: a.signatures.map(eh)
				};
				return b.link = aM.decode(new Uint8Array(a.payload)), b
			}

			function ej(a) {
				let [b, c, d, e, f] = a, g = {
					ciphertext: e,
					iv: d,
					protected: b,
					tag: f
				};
				return c && (g.recipients = [{
					encrypted_key: c
				}]), g
			}

			function ek(a) {
				let b = {};
				return a.encrypted_key && (b.encrypted_key = ed(a.encrypted_key)), a.header && (b.header = a.header), b
			}

			function el(a) {
				let b = {
					ciphertext: ed(a.ciphertext),
					protected: ed(a.protected),
					iv: ed(a.iv),
					tag: ed(a.tag)
				};
				return a.aad && (b.aad = ed(a.aad)), a.recipients && (b.recipients = a.recipients.map(ek)), a.unprotected && (b.unprotected = a.unprotected), b
			}

			function em(a) {
				let b = {};
				return a.encrypted_key && (b.encrypted_key = ec(a.encrypted_key)), a.header && (b.header = a.header), b
			}

			function en(a) {
				let b = {
					ciphertext: ec(a.ciphertext),
					protected: ec(a.protected),
					iv: ec(a.iv),
					tag: ec(a.tag)
				};
				return a.aad && (b.aad = ec(a.aad)), a.recipients && (b.recipients = a.recipients.map(em)), a.unprotected && (b.unprotected = a.unprotected), b
			}
			let eo = "dag-jose",
				ep = 133;

			function eq(a) {
				return "payload" in a && "string" == typeof a.payload && "signatures" in a && Array.isArray(a.signatures)
			}

			function er(a) {
				return "payload" in a && a.payload instanceof Uint8Array && "signatures" in a && Array.isArray(a.signatures)
			}

			function es(a) {
				return "ciphertext" in a && a.ciphertext instanceof Uint8Array && "iv" in a && a.iv instanceof Uint8Array && "protected" in a && a.protected instanceof Uint8Array && "tag" in a && a.tag instanceof Uint8Array
			}

			function et(a) {
				return "ciphertext" in a && "string" == typeof a.ciphertext && "iv" in a && "string" == typeof a.iv && "protected" in a && "string" == typeof a.protected && "tag" in a && "string" == typeof a.tag
			}

			function eu(a) {
				if ("string" == typeof a) {
					let b = a.split(".");
					if (3 === b.length) return ee(b);
					if (5 === b.length) return ej(b);
					throw Error("Not a valid JOSE string")
				}
				if (eq(a) || et(a)) return a;
				throw Error("Not a valid unencoded JOSE object")
			}

			function ev(a) {
				"string" == typeof a && (a = eu(a));
				let b;
				if (eq(a)) b = eg(a);
				else if (et(a)) b = el(a);
				else throw Error("Not a valid JOSE object");
				return new Uint8Array(dL(b))
			}

			function ew(a) {
				let b;
				try {
					b = dM(a)
				} catch (c) {
					throw Error("Not a valid DAG-JOSE object")
				}
				if (er(b)) return ei(b);
				if (es(b)) return en(b);
				throw Error("Not a valid DAG-JOSE object")
			}
			let ex = 0,
				ey = "identity",
				ez = af,
				eA = a => ai(ex, ez(a)),
				eB = {
					code: ex,
					name: ey,
					encode: ez,
					digest: eA
				},
				eC = at({
					prefix: "\0",
					name: "identity",
					encode: a => ah(a),
					decode: a => ag(a)
				}),
				eD = ax({
					prefix: "0",
					name: "base2",
					alphabet: "01",
					bitsPerChar: 1
				}),
				eE = ax({
					prefix: "7",
					name: "base8",
					alphabet: "01234567",
					bitsPerChar: 3
				}),
				eF = au({
					prefix: "9",
					name: "base10",
					alphabet: "0123456789"
				}),
				eG = ax({
					prefix: "f",
					name: "base16",
					alphabet: "0123456789abcdef",
					bitsPerChar: 4
				}),
				eH = ax({
					prefix: "F",
					name: "base16upper",
					alphabet: "0123456789ABCDEF",
					bitsPerChar: 4
				}),
				eI = au({
					prefix: "k",
					name: "base36",
					alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
				}),
				eJ = au({
					prefix: "K",
					name: "base36upper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
				}),
				eK = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
				eL = eK.reduce((a, b, c) => (a[c] = b, a), []),
				eM = eK.reduce((a, b, c) => (a[b.codePointAt(0)] = c, a), []);

			function eN(a) {
				return a.reduce((a, b) => a += eL[b], "")
			}

			function eO(a) {
				let b = [];
				for (let c of a) {
					let d = eM[c.codePointAt(0)];
					if (void 0 === d) throw Error(`Non-base256emoji character: ${c}`);
					b.push(d)
				}
				return new Uint8Array(b)
			}
			let eP = at({
					prefix: "\uD83D\uDE80",
					name: "base256emoji",
					encode: eN,
					decode: eO
				}),
				eQ = a => async b => new Uint8Array(await crypto.subtle.digest(a, b)), eR = dN({
					name: "sha2-256",
					code: 18,
					encode: eQ("SHA-256")
				}), eS = dN({
					name: "sha2-512",
					code: 19,
					encode: eQ("SHA-512")
				}), eT = "raw", eU = 85, eV = a => af(a), eW = a => af(a), eX = new TextEncoder, eY = new TextDecoder, eZ = "json", e$ = 512, e_ = a => eX.encode(JSON.stringify(a)), e0 = a => JSON.parse(eY.decode(a)), e1 = {
					...u,
					...v,
					...w,
					...x,
					...y,
					...n,
					...z,
					...m,
					...q,
					...A
				}, e2 = {
					...B,
					...t
				}, e3 = {
					raw: C,
					json: D
				};
			class e4 {
				index = 0;
				input = "";
				new(a) {
					return this.index = 0, this.input = a, this
				}
				readAtomically(a) {
					let b = this.index,
						c = a();
					return void 0 === c && (this.index = b), c
				}
				parseWith(a) {
					let b = a();
					if (this.index === this.input.length) return b
				}
				peekChar() {
					if (!(this.index >= this.input.length)) return this.input[this.index]
				}
				readChar() {
					if (!(this.index >= this.input.length)) return this.input[this.index++]
				}
				readGivenChar(a) {
					return this.readAtomically(() => {
						let b = this.readChar();
						if (b === a) return b
					})
				}
				readSeparator(a, b, c) {
					return this.readAtomically(() => {
						if (!(b > 0) || void 0 !== this.readGivenChar(a)) return c()
					})
				}
				readNumber(a, b, c, d) {
					return this.readAtomically(() => {
						let e = 0,
							f = 0,
							g = this.peekChar();
						if (void 0 === g) return;
						let h = "0" === g,
							i = 2 ** (8 * d) - 1;
						for (;;) {
							let j = this.readAtomically(() => {
								let b = this.readChar();
								if (void 0 === b) return;
								let c = Number.parseInt(b, a);
								if (!Number.isNaN(c)) return c
							});
							if (void 0 === j) break;
							if (e *= a, (e += j) > i || (f += 1, void 0 !== b && f > b)) return
						}
						return 0 === f ? void 0 : !c && h && f > 1 ? void 0 : e
					})
				}
				readIPv4Addr() {
					return this.readAtomically(() => {
						let a = new Uint8Array(4);
						for (let b = 0; b < a.length; b++) {
							let c = this.readSeparator(".", b, () => this.readNumber(10, 3, !1, 1));
							if (void 0 === c) return;
							a[b] = c
						}
						return a
					})
				}
				readIPv6Addr() {
					let a = a => {
						for (let b = 0; b < a.length / 2; b++) {
							let c = 2 * b;
							if (b < a.length - 3) {
								let d = this.readSeparator(":", b, () => this.readIPv4Addr());
								if (void 0 !== d) return a[c] = d[0], a[c + 1] = d[1], a[c + 2] = d[2], a[c + 3] = d[3], [c + 4, !0]
							}
							let e = this.readSeparator(":", b, () => this.readNumber(16, 4, !0, 2));
							if (void 0 === e) return [c, !1];
							a[c] = e >> 8, a[c + 1] = 255 & e
						}
						return [a.length, !1]
					};
					return this.readAtomically(() => {
						let b = new Uint8Array(16),
							[c, d] = a(b);
						if (16 === c) return b;
						if (d || void 0 === this.readGivenChar(":") || void 0 === this.readGivenChar(":")) return;
						let e = new Uint8Array(14),
							f = 16 - (c + 2),
							[g] = a(e.subarray(0, f));
						return b.set(e.subarray(0, g), 16 - g), b
					})
				}
				readIPAddr() {
					return this.readIPv4Addr() ? ? this.readIPv6Addr()
				}
			}
			let e5 = 45,
				e6 = 15,
				e7 = new e4;

			function e8(a) {
				if (!(a.length > e6)) return e7.new(a)
					.parseWith(() => e7.readIPv4Addr())
			}

			function e9(a) {
				if (!(a.length > e5)) return e7.new(a)
					.parseWith(() => e7.readIPv6Addr())
			}

			function fa(a) {
				if (!(a.length > e5)) return e7.new(a)
					.parseWith(() => e7.readIPAddr())
			}

			function fb(a) {
				return Boolean(e8(a))
			}

			function fc(a) {
				return Boolean(e9(a))
			}

			function fd(a) {
				return Boolean(fa(a))
			}

			function fe(a) {
				return null != globalThis.Buffer ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : a
			}

			function ff(a = 0) {
				return globalThis.Buffer ? .allocUnsafe != null ? fe(globalThis.Buffer.allocUnsafe(a)) : new Uint8Array(a)
			}

			function fg(a, b, c, d) {
				return {
					name: a,
					prefix: b,
					encoder: {
						name: a,
						prefix: b,
						encode: c
					},
					decoder: {
						decode: d
					}
				}
			}
			let fh = fg("utf8", "u", a => {
					let b = new TextDecoder("utf8");
					return "u" + b.decode(a)
				}, a => {
					let b = new TextEncoder;
					return b.encode(a.substring(1))
				}),
				fi = fg("ascii", "a", a => {
					let b = "a";
					for (let c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
					return b
				}, a => {
					a = a.substring(1);
					let b = ff(a.length);
					for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
					return b
				}),
				fj = {
					utf8: fh,
					"utf-8": fh,
					hex: e1.base16,
					latin1: fi,
					ascii: fi,
					binary: fi,
					...e1
				};
			var fk = fj;

			function fl(a, b = "utf8") {
				let c = fk[b];
				if (null == c) throw Error(`Unsupported encoding "${b}"`);
				return ("utf8" === b || "utf-8" === b) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(a.buffer, a.byteOffset, a.byteLength)
					.toString("utf8") : c.encoder.encode(a)
					.substring(1)
			}
			let fm = fb,
				fn = fc,
				fo = function(a) {
					let b = 0;
					if (fm(a = a.toString()
						.trim())) {
						let c = new Uint8Array(b + 4);
						return a.split(/\./g)
							.forEach(a => {
								c[b++] = 255 & parseInt(a, 10)
							}), c
					}
					if (fn(a)) {
						let d = a.split(":", 8),
							e;
						for (e = 0; e < d.length; e++) {
							let f = fm(d[e]),
								g;
							f && (g = fo(d[e]), d[e] = fl(g.slice(0, 2), "base16")), null != g && ++e < 8 && d.splice(e, 0, fl(g.slice(2, 4), "base16"))
						}
						if ("" === d[0])
							for (; d.length < 8;) d.unshift("0");
						else if ("" === d[d.length - 1])
							for (; d.length < 8;) d.push("0");
						else if (d.length < 8) {
							for (e = 0; e < d.length && "" !== d[e]; e++);
							let h = [e, 1];
							for (e = 9 - d.length; e > 0; e--) h.push("0");
							d.splice.apply(d, h)
						}
						let i = new Uint8Array(b + 16);
						for (e = 0; e < d.length; e++) {
							let j = parseInt(d[e], 16);
							i[b++] = j >> 8 & 255, i[b++] = 255 & j
						}
						return i
					}
					throw Error("invalid ip address")
				},
				fp = function(a, b = 0, c) {
					b = ~~b, c = c ? ? a.length - b;
					let d = new DataView(a.buffer);
					if (4 === c) {
						let e = [];
						for (let f = 0; f < c; f++) e.push(a[b + f]);
						return e.join(".")
					}
					if (16 === c) {
						let g = [];
						for (let h = 0; h < c; h += 2) g.push(d.getUint16(b + h)
							.toString(16));
						return g.join(":")
							.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")
							.replace(/:{3,4}/, "::")
					}
					return ""
				},
				fq = -1,
				fr = {},
				fs = {},
				ft = [
					[4, 32, "ip4"],
					[6, 16, "tcp"],
					[33, 16, "dccp"],
					[41, 128, "ip6"],
					[42, fq, "ip6zone"],
					[43, 8, "ipcidr"],
					[53, fq, "dns", !0],
					[54, fq, "dns4", !0],
					[55, fq, "dns6", !0],
					[56, fq, "dnsaddr", !0],
					[132, 16, "sctp"],
					[273, 16, "udp"],
					[275, 0, "p2p-webrtc-star"],
					[276, 0, "p2p-webrtc-direct"],
					[277, 0, "p2p-stardust"],
					[280, 0, "webrtc"],
					[281, 0, "webrtc-w3c"],
					[290, 0, "p2p-circuit"],
					[301, 0, "udt"],
					[302, 0, "utp"],
					[400, fq, "unix", !1, !0],
					[421, fq, "ipfs"],
					[421, fq, "p2p"],
					[443, 0, "https"],
					[444, 96, "onion"],
					[445, 296, "onion3"],
					[446, fq, "garlic64"],
					[448, 0, "tls"],
					[449, fq, "sni"],
					[460, 0, "quic"],
					[461, 0, "quic-v1"],
					[465, 0, "webtransport"],
					[466, fq, "certhash"],
					[477, 0, "ws"],
					[478, 0, "wss"],
					[479, 0, "p2p-websocket-star"],
					[480, 0, "http"],
					[777, fq, "memory"]
				];

			function fu(a, b, c, d, e) {
				return {
					code: a,
					size: b,
					name: c,
					resolvable: Boolean(d),
					path: Boolean(e)
				}
			}

			function fv(a) {
				if ("number" == typeof a) {
					if (null != fs[a]) return fs[a];
					throw Error(`no protocol with code: ${a}`)
				}
				if ("string" == typeof a) {
					if (null != fr[a]) return fr[a];
					throw Error(`no protocol with name: ${a}`)
				}
				throw Error(`invalid protocol id type: ${typeof a}`)
			}
			ft.forEach(a => {
				let b = fu(...a);
				fs[b.code] = b, fr[b.name] = b
			});
			var fw = c(46193);

			function fx(a, b = "utf8") {
				let c = fk[b];
				if (null == c) throw Error(`Unsupported encoding "${b}"`);
				return ("utf8" === b || "utf-8" === b) && null != globalThis.Buffer && null != globalThis.Buffer.from ? fe(globalThis.Buffer.from(a, "utf-8")) : c.decoder.decode(`${c.prefix}${a}`)
			}

			function fy(a, b) {
				null == b && (b = a.reduce((a, b) => a + b.length, 0));
				let c = ff(b),
					d = 0;
				for (let e of a) c.set(e, d), d += e.length;
				return fe(c)
			}

			function fz(a, b) {
				let c = fv(a);
				switch (c.code) {
					case 4:
					case 41:
						return fF(b);
					case 42:
					case 53:
					case 54:
					case 55:
					case 56:
					case 400:
					case 449:
					case 777:
						return fJ(b);
					case 6:
					case 273:
					case 33:
					case 132:
						return fH(b)
							.toString();
					case 421:
						return fN(b);
					case 444:
					case 445:
						return fQ(b);
					case 466:
						return fM(b);
					default:
						return fl(b, "base16")
				}
			}

			function fA(a, b) {
				let c = fv(a);
				switch (c.code) {
					case 4:
					case 41:
						return fE(b);
					case 42:
					case 53:
					case 54:
					case 55:
					case 56:
					case 400:
					case 449:
					case 777:
						return fI(b);
					case 6:
					case 273:
					case 33:
					case 132:
						return fG(parseInt(b, 10));
					case 421:
						return fK(b);
					case 444:
						return fO(b);
					case 445:
						return fP(b);
					case 466:
						return fL(b);
					default:
						return fx(b, "base16")
				}
			}
			let fB = Object.values(e1)
				.map(a => a.decoder),
				fC, fD = (fC = fB[0].or(fB[1]), fB.slice(2)
					.forEach(a => fC = fC.or(a)), fC);

			function fE(a) {
				if (!fd(a)) throw Error("invalid ip address");
				return fo(a)
			}

			function fF(a) {
				let b = fp(a, 0, a.length);
				if (null == b) throw Error("ipBuff is required");
				if (!fd(b)) throw Error("invalid ip address");
				return b
			}

			function fG(a) {
				let b = new ArrayBuffer(2),
					c = new DataView(b);
				return c.setUint16(0, a), new Uint8Array(b)
			}

			function fH(a) {
				let b = new DataView(a.buffer);
				return b.getUint16(a.byteOffset)
			}

			function fI(a) {
				let b = fx(a),
					c = Uint8Array.from(fw.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function fJ(a) {
				let b = fw.decode(a);
				if ((a = a.slice(fw.decode.bytes))
					.length !== b) throw Error("inconsistent lengths");
				return fl(a)
			}

			function fK(a) {
				let b;
				b = "Q" === a[0] || "1" === a[0] ? aj(ay.decode(`z${a}`))
					.bytes : aM.parse(a)
					.multihash.bytes;
				let c = Uint8Array.from(fw.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function fL(a) {
				let b = fD.decode(a),
					c = Uint8Array.from(fw.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function fM(a) {
				let b = fw.decode(a),
					c = a.slice(fw.decode.bytes);
				if (c.length !== b) throw Error("inconsistent lengths");
				return "u" + fl(c, "base64url")
			}

			function fN(a) {
				let b = fw.decode(a),
					c = a.slice(fw.decode.bytes);
				if (c.length !== b) throw Error("inconsistent lengths");
				return fl(c, "base58btc")
			}

			function fO(a) {
				let b = a.split(":");
				if (2 !== b.length) throw Error(`failed to parse onion addr: ["'${b.join('", "')}'"]' does not contain a port number`);
				if (16 !== b[0].length) throw Error(`failed to parse onion addr: ${b[0]} not a Tor onion address.`);
				let c = aA.decode("b" + b[0]),
					d = parseInt(b[1], 10);
				if (d < 1 || d > 65536) throw Error("Port number is not in range(1, 65536)");
				let e = fG(d);
				return fy([c, e], c.length + e.length)
			}

			function fP(a) {
				let b = a.split(":");
				if (2 !== b.length) throw Error(`failed to parse onion addr: ["'${b.join('", "')}'"]' does not contain a port number`);
				if (56 !== b[0].length) throw Error(`failed to parse onion addr: ${b[0]} not a Tor onion3 address.`);
				let c = aA.decode(`b${b[0]}`),
					d = parseInt(b[1], 10);
				if (d < 1 || d > 65536) throw Error("Port number is not in range(1, 65536)");
				let e = fG(d);
				return fy([c, e], c.length + e.length)
			}

			function fQ(a) {
				let b = a.slice(0, a.length - 2),
					c = a.slice(a.length - 2),
					d = fl(b, "base32"),
					e = fH(c);
				return `${d}:${e}`
			}

			function fR(a) {
				let b = [],
					c = a.split("/")
					.slice(1);
				if (1 === c.length && "" === c[0]) return [];
				for (let d = 0; d < c.length; d++) {
					let e = c[d],
						f = fv(e);
					if (0 === f.size) {
						b.push([e]);
						continue
					}
					if (++d >= c.length) throw f2("invalid address: " + a);
					if (!0 === f.path) {
						b.push([e, f1(c.slice(d)
							.join("/"))]);
						break
					}
					b.push([e, c[d]])
				}
				return b
			}

			function fS(a) {
				let b = [];
				return a.map(a => {
					let c = f3(a);
					return b.push(c.name), a.length > 1 && null != a[1] && b.push(a[1]), null
				}), f1(b.join("/"))
			}

			function fT(a) {
				return a.map(a => {
					Array.isArray(a) || (a = [a]);
					let b = f3(a);
					return a.length > 1 ? [b.code, fA(b.code, a[1])] : [b.code]
				})
			}

			function fU(a) {
				return a.map(a => {
					let b = f3(a);
					return null != a[1] ? [b.code, fz(b.code, a[1])] : [b.code]
				})
			}

			function fV(a) {
				return f_(fy(a.map(a => {
					let b = f3(a),
						c = Uint8Array.from(fw.encode(b.code));
					return a.length > 1 && null != a[1] && (c = fy([c, a[1]])), c
				})))
			}

			function fW(a, b) {
				if (a.size > 0) return a.size / 8;
				if (0 === a.size) return 0; {
					let c = fw.decode(b);
					return c + (fw.decode.bytes ? ? 0)
				}
			}

			function fX(a) {
				let b = [],
					c = 0;
				for (; c < a.length;) {
					let d = fw.decode(a, c),
						e = fw.decode.bytes ? ? 0,
						f = fv(d),
						g = fW(f, a.slice(c + e));
					if (0 === g) {
						b.push([d]), c += e;
						continue
					}
					let h = a.slice(c + e, c + e + g);
					if ((c += g + e) > a.length) throw f2("Invalid address Uint8Array: " + fl(a, "base16"));
					b.push([d, h])
				}
				return b
			}

			function fY(a) {
				let b = fX(a),
					c = fU(b);
				return fS(c)
			}

			function fZ(a) {
				a = f1(a);
				let b = fR(a),
					c = fT(b);
				return fV(c)
			}

			function f$(a) {
				return fZ(a)
			}

			function f_(a) {
				let b = f0(a);
				if (null != b) throw b;
				return Uint8Array.from(a)
			}

			function f0(a) {
				try {
					fX(a)
				} catch (b) {
					return b
				}
			}

			function f1(a) {
				return "/" + a.trim()
					.split("/")
					.filter(a => a)
					.join("/")
			}

			function f2(a) {
				return Error("Error parsing address: " + a)
			}

			function f3(a) {
				let b = fv(a[0]);
				return b
			}
			var f4 = c(57740);

			function f5(a, b) {
				if (a === b) return !0;
				if (a.byteLength !== b.byteLength) return !1;
				for (let c = 0; c < a.byteLength; c++)
					if (a[c] !== b[c]) return !1;
				return !0
			}
			var f6 = function(a, b, c, d) {
					if ("a" === c && !d) throw TypeError("Private accessor was defined without a getter");
					if ("function" == typeof b ? a !== b || !d : !b.has(a)) throw TypeError("Cannot read private member from an object whose class did not declare it");
					return "m" === c ? d : "a" === c ? d.call(a) : d ? d.value : b.get(a)
				},
				f7 = function(a, b, c, d, e) {
					if ("m" === d) throw TypeError("Private method is not writable");
					if ("a" === d && !e) throw TypeError("Private accessor was defined without a setter");
					if ("function" == typeof b ? a !== b || !e : !b.has(a)) throw TypeError("Cannot write private member to an object whose class did not declare it");
					return "a" === d ? e.call(a, c) : e ? e.value = c : b.set(a, c), c
				};
			let f8 = Symbol.for("nodejs.util.inspect.custom"),
				f9 = [fv("dns")
					.code, fv("dns4")
					.code, fv("dns6")
					.code, fv("dnsaddr")
					.code
				],
				ga = new Map,
				gb = Symbol.for("@multiformats/js-multiaddr/multiaddr");

			function gc(a) {
				return Boolean(a ? . [gb])
			}
			class gd {
				constructor(a) {
					if (d.set(this, void 0), e.set(this, void 0), f.set(this, void 0), this[g] = !0, null == a && (a = ""), a instanceof Uint8Array) this.bytes = f_(a);
					else if ("string" == typeof a) {
						if (a.length > 0 && "/" !== a.charAt(0)) throw Error(`multiaddr "${a}" must start with a "/"`);
						this.bytes = f$(a)
					} else if (gc(a)) this.bytes = f_(a.bytes);
					else throw Error("addr must be a string, Buffer, or another Multiaddr")
				}
				toString() {
					return null == f6(this, d, "f") && f7(this, d, fY(this.bytes), "f"), f6(this, d, "f")
				}
				toJSON() {
					return this.toString()
				}
				toOptions() {
					let a, b, c, d, e = "",
						f = fv("tcp"),
						g = fv("udp"),
						h = fv("ip4"),
						i = fv("ip6"),
						j = fv("dns6"),
						k = fv("ip6zone");
					for (let [l, m] of this.stringTuples()) l === k.code && (e = `%${m??""}`), f9.includes(l) && (b = f.name, d = 443, c = `${m??""}${e}`, a = l === j.code ? 6 : 4), (l === f.code || l === g.code) && (b = fv(l)
						.name, d = parseInt(m ? ? "")), (l === h.code || l === i.code) && (b = fv(l)
						.name, c = `${m??""}${e}`, a = l === i.code ? 6 : 4);
					if (null == a || null == b || null == c || null == d) throw Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
					let n = {
						family: a,
						host: c,
						transport: b,
						port: d
					};
					return n
				}
				protos() {
					return this.protoCodes()
						.map(a => Object.assign({}, fv(a)))
				}
				protoCodes() {
					let a = [],
						b = this.bytes,
						c = 0;
					for (; c < b.length;) {
						let d = fw.decode(b, c),
							e = fw.decode.bytes ? ? 0,
							f = fv(d),
							g = fW(f, b.slice(c + e));
						c += g + e, a.push(d)
					}
					return a
				}
				protoNames() {
					return this.protos()
						.map(a => a.name)
				}
				tuples() {
					return null == f6(this, e, "f") && f7(this, e, fX(this.bytes), "f"), f6(this, e, "f")
				}
				stringTuples() {
					return null == f6(this, f, "f") && f7(this, f, fU(this.tuples()), "f"), f6(this, f, "f")
				}
				encapsulate(a) {
					return a = new gd(a), new gd(this.toString() + a.toString())
				}
				decapsulate(a) {
					let b = a.toString(),
						c = this.toString(),
						d = c.lastIndexOf(b);
					if (d < 0) throw Error(`Address ${this.toString()} does not contain subaddress: ${a.toString()}`);
					return new gd(c.slice(0, d))
				}
				decapsulateCode(a) {
					let b = this.tuples();
					for (let c = b.length - 1; c >= 0; c--)
						if (b[c][0] === a) return new gd(fV(b.slice(0, c)));
					return this
				}
				getPeerId() {
					try {
						let a = this.stringTuples()
							.filter(a => a[0] === fr.ipfs.code),
							b = a.pop();
						if (b ? . [1] != null) {
							let c = b[1];
							if ("Q" === c[0] || "1" === c[0]) return fl(ay.decode(`z${c}`), "base58btc");
							return fl(aM.parse(c)
								.multihash.bytes, "base58btc")
						}
						return null
					} catch (d) {
						return null
					}
				}
				getPath() {
					let a = null;
					try {
						a = this.stringTuples()
							.filter(a => {
								let b = fv(a[0]);
								return !0 === b.path
							})[0][1], null == a && (a = null)
					} catch {
						a = null
					}
					return a
				}
				equals(a) {
					return f5(this.bytes, a.bytes)
				}
				async resolve(a) {
					let b = this.protos()
						.find(a => a.resolvable);
					if (null == b) return [this];
					let c = ga.get(b.name);
					if (null == c) throw f4(Error(`no available resolver for ${b.name}`), "ERR_NO_AVAILABLE_RESOLVER");
					let d = await c(this, a);
					return d.map(a => new gd(a))
				}
				nodeAddress() {
					let a = this.toOptions();
					if ("tcp" !== a.transport && "udp" !== a.transport) throw Error(`multiaddr must have a valid format - no protocol with name: "${a.transport}". Must have a valid transport protocol: "{tcp, udp}"`);
					return {
						family: a.family,
						address: a.host,
						port: a.port
					}
				}
				isThinWaistAddress(a) {
					let b = (a ? ? this)
						.protos();
					return 2 === b.length && (4 === b[0].code || 41 === b[0].code) && (6 === b[1].code || 273 === b[1].code)
				} [(d = new WeakMap, e = new WeakMap, f = new WeakMap, g = gb, f8)]() {
					return `Multiaddr(${fY(this.bytes)})`
				}
			}

			function ge(a) {
				return new gd(a)
			}
			var gf = c(97359);
			let gg = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig;

			function gh(a = "", b = "ms") {
				var c = null;
				return (a = (a + "")
						.replace(/(\d)[,_](\d)/g, "$1$2"))
					.replace(gg, function(a, b, d) {
						(d = gi(d)) && (c = (c || 0) + parseFloat(b, 10) * d)
					}), c && c / (gi(b) || 1)
			}

			function gi(a) {
				return gh[a] || gh[a.toLowerCase()
					.replace(/s$/, "")]
			}
			gh.nanosecond = gh.ns = 1 / 1e6, gh["\xb5s"] = gh["μs"] = gh.us = gh.microsecond = .001, gh.millisecond = gh.ms = gh[""] = 1, gh.second = gh.sec = gh.s = 1e3 * gh.ms, gh.minute = gh.min = gh.m = 60 * gh.s, gh.hour = gh.hr = gh.h = 60 * gh.m, gh.day = gh.d = 24 * gh.h, gh.week = gh.wk = gh.w = 7 * gh.d, gh.month = gh.b = 30.4375 * gh.d, gh.year = gh.yr = gh.y = 365.25 * gh.d;
			var gj = gh,
				gk = c(25130);

			function gl(a) {
				let b = () => {};
				return b.enabled = !1, b.color = "", b.diff = 0, b.log = () => {}, b.namespace = a, b.destroy = () => !0, b.extend = () => b, b
			}

			function gm(a) {
				let b = gl(`${a}:trace`);
				return gk.enabled(`${a}:trace`) && null != gk.names.map(a => a.toString())
					.find(a => a.includes(":trace")) && (b = gk(`${a}:trace`)), Object.assign(gk(a), {
						error: gk(`${a}:error`),
						trace: b
					})
			}
			gk.formatters.b = a => null == a ? "undefined" : ay.baseEncode(a), gk.formatters.t = a => null == a ? "undefined" : aA.baseEncode(a), gk.formatters.m = a => null == a ? "undefined" : dP.baseEncode(a), gk.formatters.p = a => null == a ? "undefined" : a.toString(), gk.formatters.c = a => null == a ? "undefined" : a.toString(), gk.formatters.k = a => null == a ? "undefined" : a.toString();
			var gn = c(29397),
				go = c(34329);
			let gp = fb,
				gq = fc,
				gr = function(a) {
					let b = 0;
					if (gp(a = a.toString()
						.trim())) {
						let c = new Uint8Array(b + 4);
						return a.split(/\./g)
							.forEach(a => {
								c[b++] = 255 & parseInt(a, 10)
							}), c
					}
					if (gq(a)) {
						let d = a.split(":", 8),
							e;
						for (e = 0; e < d.length; e++) {
							let f = gp(d[e]),
								g;
							f && (g = gr(d[e]), d[e] = fl(g.slice(0, 2), "base16")), null != g && ++e < 8 && d.splice(e, 0, fl(g.slice(2, 4), "base16"))
						}
						if ("" === d[0])
							for (; d.length < 8;) d.unshift("0");
						else if ("" === d[d.length - 1])
							for (; d.length < 8;) d.push("0");
						else if (d.length < 8) {
							for (e = 0; e < d.length && "" !== d[e]; e++);
							let h = [e, 1];
							for (e = 9 - d.length; e > 0; e--) h.push("0");
							d.splice.apply(d, h)
						}
						let i = new Uint8Array(b + 16);
						for (e = 0; e < d.length; e++) {
							let j = parseInt(d[e], 16);
							i[b++] = j >> 8 & 255, i[b++] = 255 & j
						}
						return i
					}
					throw Error("invalid ip address")
				},
				gs = function(a, b = 0, c) {
					b = ~~b, c = c ? ? a.length - b;
					let d = new DataView(a.buffer);
					if (4 === c) {
						let e = [];
						for (let f = 0; f < c; f++) e.push(a[b + f]);
						return e.join(".")
					}
					if (16 === c) {
						let g = [];
						for (let h = 0; h < c; h += 2) g.push(d.getUint16(b + h)
							.toString(16));
						return g.join(":")
							.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")
							.replace(/:{3,4}/, "::")
					}
					return ""
				},
				gt = -1,
				gu = {},
				gv = {},
				gw = [
					[4, 32, "ip4"],
					[6, 16, "tcp"],
					[33, 16, "dccp"],
					[41, 128, "ip6"],
					[42, gt, "ip6zone"],
					[43, 8, "ipcidr"],
					[53, gt, "dns", !0],
					[54, gt, "dns4", !0],
					[55, gt, "dns6", !0],
					[56, gt, "dnsaddr", !0],
					[132, 16, "sctp"],
					[273, 16, "udp"],
					[275, 0, "p2p-webrtc-star"],
					[276, 0, "p2p-webrtc-direct"],
					[277, 0, "p2p-stardust"],
					[280, 0, "webrtc-direct"],
					[281, 0, "webrtc"],
					[290, 0, "p2p-circuit"],
					[301, 0, "udt"],
					[302, 0, "utp"],
					[400, gt, "unix", !1, !0],
					[421, gt, "ipfs"],
					[421, gt, "p2p"],
					[443, 0, "https"],
					[444, 96, "onion"],
					[445, 296, "onion3"],
					[446, gt, "garlic64"],
					[448, 0, "tls"],
					[449, gt, "sni"],
					[460, 0, "quic"],
					[461, 0, "quic-v1"],
					[465, 0, "webtransport"],
					[466, gt, "certhash"],
					[477, 0, "ws"],
					[478, 0, "wss"],
					[479, 0, "p2p-websocket-star"],
					[480, 0, "http"],
					[777, gt, "memory"]
				];

			function gx(a, b, c, d, e) {
				return {
					code: a,
					size: b,
					name: c,
					resolvable: Boolean(d),
					path: Boolean(e)
				}
			}

			function gy(a) {
				if ("number" == typeof a) {
					if (null != gv[a]) return gv[a];
					throw Error(`no protocol with code: ${a}`)
				}
				if ("string" == typeof a) {
					if (null != gu[a]) return gu[a];
					throw Error(`no protocol with name: ${a}`)
				}
				throw Error(`invalid protocol id type: ${typeof a}`)
			}
			gw.forEach(a => {
				let b = gx(...a);
				gv[b.code] = b, gu[b.name] = b
			});
			var gz = c(30045);
			parseInt("0xFFFF", 16);
			let gA = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, ]);

			function gB(a, b) {
				let c = gy(a);
				switch (c.code) {
					case 4:
					case 41:
						return gH(b);
					case 42:
					case 53:
					case 54:
					case 55:
					case 56:
					case 400:
					case 449:
					case 777:
						return gL(b);
					case 6:
					case 273:
					case 33:
					case 132:
						return gJ(b)
							.toString();
					case 421:
						return gP(b);
					case 444:
					case 445:
						return gS(b);
					case 466:
						return gO(b);
					default:
						return fl(b, "base16")
				}
			}

			function gC(a, b) {
				let c = gy(a);
				switch (c.code) {
					case 4:
					case 41:
						return gG(b);
					case 42:
					case 53:
					case 54:
					case 55:
					case 56:
					case 400:
					case 449:
					case 777:
						return gK(b);
					case 6:
					case 273:
					case 33:
					case 132:
						return gI(parseInt(b, 10));
					case 421:
						return gM(b);
					case 444:
						return gQ(b);
					case 445:
						return gR(b);
					case 466:
						return gN(b);
					default:
						return fx(b, "base16")
				}
			}
			gy("ip4"), gy("ip6"), gy("ipcidr");
			let gD = Object.values(e1)
				.map(a => a.decoder),
				gE, gF = (gE = gD[0].or(gD[1]), gD.slice(2)
					.forEach(a => gE = gE.or(a)), gE);

			function gG(a) {
				if (!fd(a)) throw Error("invalid ip address");
				return gr(a)
			}

			function gH(a) {
				let b = gs(a, 0, a.length);
				if (null == b) throw Error("ipBuff is required");
				if (!fd(b)) throw Error("invalid ip address");
				return b
			}

			function gI(a) {
				let b = new ArrayBuffer(2),
					c = new DataView(b);
				return c.setUint16(0, a), new Uint8Array(b)
			}

			function gJ(a) {
				let b = new DataView(a.buffer);
				return b.getUint16(a.byteOffset)
			}

			function gK(a) {
				let b = fx(a),
					c = Uint8Array.from(gz.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function gL(a) {
				let b = gz.decode(a);
				if ((a = a.slice(gz.decode.bytes))
					.length !== b) throw Error("inconsistent lengths");
				return fl(a)
			}

			function gM(a) {
				let b;
				b = "Q" === a[0] || "1" === a[0] ? aj(ay.decode(`z${a}`))
					.bytes : aM.parse(a)
					.multihash.bytes;
				let c = Uint8Array.from(gz.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function gN(a) {
				let b = gF.decode(a),
					c = Uint8Array.from(gz.encode(b.length));
				return fy([c, b], c.length + b.length)
			}

			function gO(a) {
				let b = gz.decode(a),
					c = a.slice(gz.decode.bytes);
				if (c.length !== b) throw Error("inconsistent lengths");
				return "u" + fl(c, "base64url")
			}

			function gP(a) {
				let b = gz.decode(a),
					c = a.slice(gz.decode.bytes);
				if (c.length !== b) throw Error("inconsistent lengths");
				return fl(c, "base58btc")
			}

			function gQ(a) {
				let b = a.split(":");
				if (2 !== b.length) throw Error(`failed to parse onion addr: ["'${b.join('", "')}'"]' does not contain a port number`);
				if (16 !== b[0].length) throw Error(`failed to parse onion addr: ${b[0]} not a Tor onion address.`);
				let c = aA.decode("b" + b[0]),
					d = parseInt(b[1], 10);
				if (d < 1 || d > 65536) throw Error("Port number is not in range(1, 65536)");
				let e = gI(d);
				return fy([c, e], c.length + e.length)
			}

			function gR(a) {
				let b = a.split(":");
				if (2 !== b.length) throw Error(`failed to parse onion addr: ["'${b.join('", "')}'"]' does not contain a port number`);
				if (56 !== b[0].length) throw Error(`failed to parse onion addr: ${b[0]} not a Tor onion3 address.`);
				let c = aA.decode(`b${b[0]}`),
					d = parseInt(b[1], 10);
				if (d < 1 || d > 65536) throw Error("Port number is not in range(1, 65536)");
				let e = gI(d);
				return fy([c, e], c.length + e.length)
			}

			function gS(a) {
				let b = a.slice(0, a.length - 2),
					c = a.slice(a.length - 2),
					d = fl(b, "base32"),
					e = gJ(c);
				return `${d}:${e}`
			}

			function gT(a) {
				let b = [],
					c = a.split("/")
					.slice(1);
				if (1 === c.length && "" === c[0]) return [];
				for (let d = 0; d < c.length; d++) {
					let e = c[d],
						f = gy(e);
					if (0 === f.size) {
						b.push([e]);
						continue
					}
					if (++d >= c.length) throw g4("invalid address: " + a);
					if (!0 === f.path) {
						b.push([e, g3(c.slice(d)
							.join("/"))]);
						break
					}
					b.push([e, c[d]])
				}
				return b
			}

			function gU(a) {
				let b = [];
				return a.map(a => {
					let c = g5(a);
					return b.push(c.name), a.length > 1 && null != a[1] && b.push(a[1]), null
				}), g3(b.join("/"))
			}

			function gV(a) {
				return a.map(a => {
					Array.isArray(a) || (a = [a]);
					let b = g5(a);
					return a.length > 1 ? [b.code, gC(b.code, a[1])] : [b.code]
				})
			}

			function gW(a) {
				return a.map(a => {
					let b = g5(a);
					return null != a[1] ? [b.code, gB(b.code, a[1])] : [b.code]
				})
			}

			function gX(a) {
				return g1(fy(a.map(a => {
					let b = g5(a),
						c = Uint8Array.from(gz.encode(b.code));
					return a.length > 1 && null != a[1] && (c = fy([c, a[1]])), c
				})))
			}

			function gY(a, b) {
				if (a.size > 0) return a.size / 8;
				if (0 === a.size) return 0; {
					let c = gz.decode(b);
					return c + (gz.decode.bytes ? ? 0)
				}
			}

			function gZ(a) {
				let b = [],
					c = 0;
				for (; c < a.length;) {
					let d = gz.decode(a, c),
						e = gz.decode.bytes ? ? 0,
						f = gy(d),
						g = gY(f, a.slice(c + e));
					if (0 === g) {
						b.push([d]), c += e;
						continue
					}
					let h = a.slice(c + e, c + e + g);
					if ((c += g + e) > a.length) throw g4("Invalid address Uint8Array: " + fl(a, "base16"));
					b.push([d, h])
				}
				return b
			}

			function g$(a) {
				let b = gZ(a),
					c = gW(b);
				return gU(c)
			}

			function g_(a) {
				a = g3(a);
				let b = gT(a),
					c = gV(b);
				return gX(c)
			}

			function g0(a) {
				return g_(a)
			}

			function g1(a) {
				let b = g2(a);
				if (null != b) throw b;
				return Uint8Array.from(a)
			}

			function g2(a) {
				try {
					gZ(a)
				} catch (b) {
					return b
				}
			}

			function g3(a) {
				return "/" + a.trim()
					.split("/")
					.filter(a => a)
					.join("/")
			}

			function g4(a) {
				return Error("Error parsing address: " + a)
			}

			function g5(a) {
				let b = gy(a[0]);
				return b
			}
			class g6 extends Error {
				constructor(a = "The operation was aborted") {
					super(a), this.code = g6.code, this.type = g6.type
				}
				static get code() {
					return "ABORT_ERR"
				}
				static get type() {
					return "aborted"
				}
			}
			class g7 extends Error {
				constructor(a, b, c) {
					super(a), this.code = b, this.name = c ? .name ? ? "CodeError", this.props = c ? ? {}
				}
			}
			var g8 = function(a, b, c, d) {
					if ("a" === c && !d) throw TypeError("Private accessor was defined without a getter");
					if ("function" == typeof b ? a !== b || !d : !b.has(a)) throw TypeError("Cannot read private member from an object whose class did not declare it");
					return "m" === c ? d : "a" === c ? d.call(a) : d ? d.value : b.get(a)
				},
				g9 = function(a, b, c, d, e) {
					if ("m" === d) throw TypeError("Private method is not writable");
					if ("a" === d && !e) throw TypeError("Private accessor was defined without a setter");
					if ("function" == typeof b ? a !== b || !e : !b.has(a)) throw TypeError("Cannot write private member to an object whose class did not declare it");
					return "a" === d ? e.call(a, c) : e ? e.value = c : b.set(a, c), c
				};
			let ha = Symbol.for("nodejs.util.inspect.custom"),
				hb = [gy("dns")
					.code, gy("dns4")
					.code, gy("dns6")
					.code, gy("dnsaddr")
					.code
				],
				hc = new Map,
				hd = Symbol.for("@multiformats/js-multiaddr/multiaddr");

			function he(a) {
				return Boolean(a ? . [hd])
			}
			class hf {
				constructor(a) {
					if (h.set(this, void 0), i.set(this, void 0), j.set(this, void 0), k.set(this, void 0), this[l] = !0, null == a && (a = ""), a instanceof Uint8Array) this.bytes = g1(a);
					else if ("string" == typeof a) {
						if (a.length > 0 && "/" !== a.charAt(0)) throw Error(`multiaddr "${a}" must start with a "/"`);
						this.bytes = g0(a)
					} else if (he(a)) this.bytes = g1(a.bytes);
					else throw Error("addr must be a string, Buffer, or another Multiaddr")
				}
				toString() {
					return null == g8(this, h, "f") && g9(this, h, g$(this.bytes), "f"), g8(this, h, "f")
				}
				toJSON() {
					return this.toString()
				}
				toOptions() {
					let a, b, c, d, e = "",
						f = gy("tcp"),
						g = gy("udp"),
						h = gy("ip4"),
						i = gy("ip6"),
						j = gy("dns6"),
						k = gy("ip6zone");
					for (let [l, m] of this.stringTuples()) l === k.code && (e = `%${m??""}`), hb.includes(l) && (b = f.name, d = 443, c = `${m??""}${e}`, a = l === j.code ? 6 : 4), (l === f.code || l === g.code) && (b = gy(l)
						.name, d = parseInt(m ? ? "")), (l === h.code || l === i.code) && (b = gy(l)
						.name, c = `${m??""}${e}`, a = l === i.code ? 6 : 4);
					if (null == a || null == b || null == c || null == d) throw Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".');
					let n = {
						family: a,
						host: c,
						transport: b,
						port: d
					};
					return n
				}
				protos() {
					return this.protoCodes()
						.map(a => Object.assign({}, gy(a)))
				}
				protoCodes() {
					let a = [],
						b = this.bytes,
						c = 0;
					for (; c < b.length;) {
						let d = gz.decode(b, c),
							e = gz.decode.bytes ? ? 0,
							f = gy(d),
							g = gY(f, b.slice(c + e));
						c += g + e, a.push(d)
					}
					return a
				}
				protoNames() {
					return this.protos()
						.map(a => a.name)
				}
				tuples() {
					return null == g8(this, i, "f") && g9(this, i, gZ(this.bytes), "f"), g8(this, i, "f")
				}
				stringTuples() {
					return null == g8(this, j, "f") && g9(this, j, gW(this.tuples()), "f"), g8(this, j, "f")
				}
				encapsulate(a) {
					return a = new hf(a), new hf(this.toString() + a.toString())
				}
				decapsulate(a) {
					let b = a.toString(),
						c = this.toString(),
						d = c.lastIndexOf(b);
					if (d < 0) throw Error(`Address ${this.toString()} does not contain subaddress: ${a.toString()}`);
					return new hf(c.slice(0, d))
				}
				decapsulateCode(a) {
					let b = this.tuples();
					for (let c = b.length - 1; c >= 0; c--)
						if (b[c][0] === a) return new hf(gX(b.slice(0, c)));
					return this
				}
				getPeerId() {
					try {
						let a = this.stringTuples()
							.filter(a => a[0] === gu.ipfs.code),
							b = a.pop();
						if (b ? . [1] != null) {
							let c = b[1];
							if ("Q" === c[0] || "1" === c[0]) return fl(ay.decode(`z${c}`), "base58btc");
							return fl(aM.parse(c)
								.multihash.bytes, "base58btc")
						}
						return null
					} catch (d) {
						return null
					}
				}
				getPath() {
					if (void 0 === g8(this, k, "f")) try {
						g9(this, k, this.stringTuples()
							.filter(a => {
								let b = gy(a[0]);
								return !0 === b.path
							})[0][1], "f"), null == g8(this, k, "f") && g9(this, k, null, "f")
					} catch {
						g9(this, k, null, "f")
					}
					return g8(this, k, "f")
				}
				equals(a) {
					return f5(this.bytes, a.bytes)
				}
				async resolve(a) {
					let b = this.protos()
						.find(a => a.resolvable);
					if (null == b) return [this];
					let c = hc.get(b.name);
					if (null == c) throw new g7(`no available resolver for ${b.name}`, "ERR_NO_AVAILABLE_RESOLVER");
					let d = await c(this, a);
					return d.map(a => new hf(a))
				}
				nodeAddress() {
					let a = this.toOptions();
					if ("tcp" !== a.transport && "udp" !== a.transport) throw Error(`multiaddr must have a valid format - no protocol with name: "${a.transport}". Must have a valid transport protocol: "{tcp, udp}"`);
					return {
						family: a.family,
						address: a.host,
						port: a.port
					}
				}
				isThinWaistAddress(a) {
					let b = (a ? ? this)
						.protos();
					return 2 === b.length && (4 === b[0].code || 41 === b[0].code) && (6 === b[1].code || 273 === b[1].code)
				} [(h = new WeakMap, i = new WeakMap, j = new WeakMap, k = new WeakMap, l = hd, ha)]() {
					return `Multiaddr(${g$(this.bytes)})`
				}
			}

			function hg(a) {
				return new hf(a)
			}
			let hh = (a, b) => b,
				hi = (a, b, c, d) => {
					if (null != d && !1 === d.assumeHttp) return `tcp://${a}:${b}`;
					let e = "tcp",
						f = `:${b}`,
						g = c[c.length - 1];
					return "tcp" === g.protocol && (e = "443" === b ? "https" : "http", f = "443" === b || "80" === b ? "" : f), `${e}://${a}${f}`
				},
				hj = {
					ip4: hh,
					ip6: (a, b, c, d) => 1 === d.length && "ip6" === d[0].protocol ? b : `[${b}]`,
					tcp: (a, b, c, d, e) => d.some(a => ["http", "https", "ws", "wss"].includes(a.protocol)) ? `${a}:${b}` : hi(a, b, d, e),
					udp: (a, b) => `udp://${a}:${b}`,
					dnsaddr: hh,
					dns4: hh,
					dns6: hh,
					ipfs: (a, b) => `${a}/ipfs/${b}`,
					p2p: (a, b) => `${a}/p2p/${b}`,
					http: a => `http://${a}`,
					https: a => `https://${a}`,
					ws: a => `ws://${a}`,
					wss: a => `wss://${a}`,
					"p2p-websocket-star": a => `${a}/p2p-websocket-star`,
					"p2p-webrtc-star": a => `${a}/p2p-webrtc-star`,
					"p2p-webrtc-direct": a => `${a}/p2p-webrtc-direct`
				};

			function hk(a, b) {
				let c = hg(a),
					d = c.toString()
					.split("/")
					.slice(1);
				return c.tuples()
					.map(a => ({
						protocol: d.shift() ? ? "",
						content: null != a[1] ? d.shift() ? ? "" : ""
					}))
					.reduce((a, c, d, e) => {
						let f = hj[c.protocol];
						if (null == f) throw Error(`Unsupported protocol ${c.protocol}`);
						return f(a, c.content, d, e, b)
					}, "")
			}

			function hl(a) {
				try {
					a = hk(ge(a))
				} catch (b) {}
				return a = a.toString()
			}
			var hm = () => {};
			let hn = gm("ipfs-http-client:lib:error-handler"),
				ho = go.bind({
					ignoreUndefined: !0
				}),
				hp = gf.isBrowser || gf.isWebWorker ? location.protocol : "http",
				hq = gf.isBrowser || gf.isWebWorker ? location.hostname : "localhost",
				hr = gf.isBrowser || gf.isWebWorker ? location.port : "5001",
				hs = (a = {}) => {
					let b, c = {},
						d;
					if ("string" == typeof a || gc(a)) b = new URL(hl(a));
					else if (a instanceof URL) b = a;
					else if ("string" == typeof a.url || gc(a.url)) b = new URL(hl(a.url)), c = a;
					else if (a.url instanceof URL) b = a.url, c = a;
					else {
						c = a || {};
						let e = (c.protocol || hp)
							.replace(":", ""),
							f = (c.host || hq)
							.split(":")[0],
							g = c.port || hr;
						b = new URL(`${e}://${f}:${g}`)
					}
					if (c.apiPath ? b.pathname = c.apiPath : ("/" === b.pathname || void 0 === b.pathname) && (b.pathname = "api/v0"), gf.isNode) {
						let h = hm(b);
						d = c.agent || new h({
							keepAlive: !0,
							maxSockets: 6
						})
					}
					return {
						...c,
						host: b.host,
						protocol: b.protocol.replace(":", ""),
						port: Number(b.port),
						apiPath: b.pathname,
						url: b,
						agent: d
					}
				},
				ht = async a => {
					let b;
					try {
						if ((a.headers.get("Content-Type") || "")
							.startsWith("application/json")) {
							let c = await a.json();
							hn(c), b = c.Message || c.message
						} else b = await a.text()
					} catch (d) {
						hn("Failed to parse error response", d), b = d.message
					}
					let e = new gn.HTTPError(a);
					throw b && (b.includes("deadline has elapsed") && (e = new gn.TimeoutError), b && b.includes("context deadline exceeded") && (e = new gn.TimeoutError)), b && b.includes("request timed out") && (e = new gn.TimeoutError), b && (e.message = b), e
				}, hu = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, hv = a => a.replace(hu, function(a) {
					return "-" + a.toLowerCase()
				}), hw = a => "string" == typeof a ? gj(a) : a;
			class hx extends gn {
				constructor(a = {}) {
					let b = hs(a);
					super({
						timeout: hw(b.timeout || 0) || void 0,
						headers: b.headers,
						base: `${b.url}`,
						handleError: ht,
						transformSearchParams: a => {
							let b = new URLSearchParams;
							for (let [c, d] of a) "undefined" !== d && "null" !== d && "signal" !== c && b.append(hv(c), d), "timeout" !== c || isNaN(d) || b.append(hv(c), d);
							return b
						},
						agent: b.agent
					}), delete this.get, delete this.put, delete this.delete, delete this.options;
					let c = this.fetch;
					this.fetch = (a, d = {}) => ("string" != typeof a || a.startsWith("/") || (a = `${b.url}/${a}`), c.call(this, a, ho(d, {
						method: "POST"
					})))
				}
			}
			gn.HTTPError;
			let hy = a => b => a(new hx(b), b);

			function hz(a) {
				return null == a ? void 0 : "string" == typeof a ? a : a.toString(8)
					.padStart(4, "0")
			}

			function hA(a) {
				if (null == a) return;
				let b;
				if (null != a.secs && (b = {
					secs: a.secs,
					nsecs: a.nsecs
				}), null != a.Seconds && (b = {
					secs: a.Seconds,
					nsecs: a.FractionalNanoseconds
				}), Array.isArray(a) && (b = {
					secs: a[0],
					nsecs: a[1]
				}), a instanceof Date) {
					let c = a.getTime(),
						d = Math.floor(c / 1e3);
					b = {
						secs: d,
						nsecs: (c - 1e3 * d) * 1e3
					}
				}
				if (Object.prototype.hasOwnProperty.call(b, "secs")) {
					if (null != b && null != b.nsecs && (b.nsecs < 0 || b.nsecs > 999999999)) throw f4(Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
					return b
				}
			}

			function hB({
				arg: a,
				searchParams: b,
				hashAlg: c,
				mtime: d,
				mode: e,
				...f
			} = {}) {
				b && (f = {
					...f,
					...b
				}), c && (f.hash = c), null != d && (d = hA(d), f.mtime = d.secs, f.mtimeNsecs = d.nsecs), null != e && (f.mode = hz(e)), f.timeout && !isNaN(f.timeout) && (f.timeout = `${f.timeout}ms`), null == a ? a = [] : Array.isArray(a) || (a = [a]);
				let g = new URLSearchParams(f);
				return a.forEach(a => g.append("arg", a)), g
			}
			let hC = hy(a => {
					async function b(b = {}) {
						let c = await (await a.post("bitswap/wantlist", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}))
							.json();
						return (c.Keys || [])
							.map(a => aM.parse(a["/"]))
					}
					return b
				}),
				hD = hy(a => {
					async function b(b, c = {}) {
						let d = await (await a.post("bitswap/wantlist", {
								signal: c.signal,
								searchParams: hB({
									...c,
									peer: b.toString()
								}),
								headers: c.headers
							}))
							.json();
						return (d.Keys || [])
							.map(a => aM.parse(a["/"]))
					}
					return b
				}),
				hE = Symbol.for("@libp2p/peer-id"),
				hF = Symbol.for("nodejs.util.inspect.custom"),
				hG = Object.values(e1)
				.map(a => a.decoder)
				.reduce((a, b) => a.or(b), e1.identity.decoder),
				hH = 114,
				hI = 36,
				hJ = 37;
			class hK {
				constructor(a) {
					this.type = a.type, this.multihash = a.multihash, this.privateKey = a.privateKey, Object.defineProperty(this, "string", {
						enumerable: !1,
						writable: !0
					})
				}
				get[Symbol.toStringTag]() {
					return `PeerId(${this.toString()})`
				}
				get[hE]() {
					return !0
				}
				toString() {
					return null == this.string && (this.string = ay.encode(this.multihash.bytes)
						.slice(1)), this.string
				}
				toCID() {
					return aM.createV1(hH, this.multihash)
				}
				toBytes() {
					return this.multihash.bytes
				}
				toJSON() {
					return this.toString()
				}
				equals(a) {
					if (a instanceof Uint8Array) return f5(this.multihash.bytes, a);
					if ("string" == typeof a) return hO(a)
						.equals(this);
					if (a ? .multihash ? .bytes != null) return f5(this.multihash.bytes, a.multihash.bytes);
					throw Error("not valid Id")
				} [hF]() {
					return `PeerId(${this.toString()})`
				}
			}
			class hL extends hK {
				constructor(a) {
					super({
						...a,
						type: "RSA"
					}), this.type = "RSA", this.publicKey = a.publicKey
				}
			}
			class hM extends hK {
				constructor(a) {
					super({
						...a,
						type: "Ed25519"
					}), this.type = "Ed25519", this.publicKey = a.multihash.digest
				}
			}
			class hN extends hK {
				constructor(a) {
					super({
						...a,
						type: "secp256k1"
					}), this.type = "secp256k1", this.publicKey = a.multihash.digest
				}
			}

			function hO(a, b) {
				if (b = b ? ? hG, "1" === a.charAt(0) || "Q" === a.charAt(0)) {
					let c = aj(ay.decode(`z${a}`));
					return a.startsWith("12D") ? new hM({
						multihash: c
					}) : a.startsWith("16U") ? new hN({
						multihash: c
					}) : new hL({
						multihash: c
					})
				}
				return hP(hG.decode(a))
			}

			function hP(a) {
				try {
					let b = aj(a);
					if (b.code === eB.code) {
						if (b.digest.length === hI) return new hM({
							multihash: b
						});
						if (b.digest.length === hJ) return new hN({
							multihash: b
						})
					}
					if (b.code === eR.code) return new hL({
						multihash: b
					})
				} catch {
					return hQ(aM.decode(a))
				}
				throw Error("Supplied PeerID CID is invalid")
			}

			function hQ(a) {
				if (null == a || null == a.multihash || null == a.version || 1 === a.version && a.code !== hH) throw Error("Supplied PeerID CID is invalid");
				let b = a.multihash;
				if (b.code === eR.code) return new hL({
					multihash: a.multihash
				});
				if (b.code === eB.code) {
					if (b.digest.length === hI) return new hM({
						multihash: a.multihash
					});
					if (b.digest.length === hJ) return new hN({
						multihash: a.multihash
					})
				}
				throw Error("Supplied PeerID CID is invalid")
			}
			let hR = hy(a => {
				async function b(b = {}) {
					let c = await a.post("bitswap/stat", {
						searchParams: hB(b),
						signal: b.signal,
						headers: b.headers
					});
					return hS(await c.json())
				}
				return b
			});

			function hS(a) {
				return {
					provideBufLen: a.ProvideBufLen,
					wantlist: (a.Wantlist || [])
						.map(a => aM.parse(a["/"])),
					peers: (a.Peers || [])
						.map(a => hO(a)),
					blocksReceived: BigInt(a.BlocksReceived),
					dataReceived: BigInt(a.DataReceived),
					blocksSent: BigInt(a.BlocksSent),
					dataSent: BigInt(a.DataSent),
					dupBlksReceived: BigInt(a.DupBlksReceived),
					dupDataReceived: BigInt(a.DupDataReceived)
				}
			}
			let hT = hy(a => {
				async function b(b, c = {}) {
					let d = await a.post("bitswap/unwant", {
						signal: c.signal,
						searchParams: hB({
							arg: b.toString(),
							...c
						}),
						headers: c.headers
					});
					return d.json()
				}
				return b
			});

			function hU(a) {
				return {
					wantlist: hC(a),
					wantlistForPeer: hD(a),
					unwant: hT(a),
					stat: hR(a)
				}
			}
			let hV = hy(a => {
				async function b(b, c = {}) {
					let d = await a.post("block/get", {
						signal: c.signal,
						searchParams: hB({
							arg: b.toString(),
							...c
						}),
						headers: c.headers
					});
					return new Uint8Array(await d.arrayBuffer())
				}
				return b
			});

			function hW(a) {
				let [b, c] = null != a[Symbol.asyncIterator] ? [a[Symbol.asyncIterator](), Symbol.asyncIterator] : [a[Symbol.iterator](), Symbol.iterator], d = [];
				return {
					peek: () => b.next(),
					push: a => {
						d.push(a)
					},
					next: () => d.length > 0 ? {
						done: !1,
						value: d.shift()
					} : b.next(),
					[c]() {
						return this
					}
				}
			}
			async function* hX(a, b = {}) {
				let c = a.getReader();
				try {
					for (;;) {
						let d = await c.read();
						if (d.done) return;
						yield d.value
					}
				} finally {
					!0 !== b.preventCancel && await c.cancel(), c.releaseLock()
				}
			}
			async function hY(a) {
				let b = [];
				for await (let c of a) b.push(c);
				return b
			}

			function hZ(a) {
				return ArrayBuffer.isView(a) || a instanceof ArrayBuffer
			}

			function h$(a) {
				return a.constructor && ("Blob" === a.constructor.name || "File" === a.constructor.name) && "function" == typeof a.stream
			}

			function h_(a) {
				return "object" == typeof a && (a.path || a.content)
			}
			let h0 = a => a && "function" == typeof a.getReader;
			async function h1(a) {
				if (hZ(a)) return new Blob([a]);
				if ("string" == typeof a || a instanceof String) return new Blob([a.toString()]);
				if (h$(a)) return a;
				if (h0(a) && (a = hX(a)), Symbol.iterator in a || Symbol.asyncIterator in a) {
					let b = hW(a),
						{
							value: c,
							done: d
						} = await b.peek();
					if (d) return h2(b);
					if (b.push(c), Number.isInteger(c)) return new Blob([Uint8Array.from(await hY(b))]);
					if (hZ(c) || "string" == typeof c || c instanceof String) return h2(b)
				}
				throw f4(Error(`Unexpected input: ${a}`), "ERR_UNEXPECTED_INPUT")
			}
			async function h2(a) {
				let b = [];
				for await (let c of a) b.push(c);
				return new Blob(b)
			}
			async function* h3(a, b) {
				for await (let c of a) yield b(c)
			}
			var h4 = c(73737);
			let h5 = h4.Reader,
				h6 = h4.Writer,
				h7 = h4.util,
				h8 = h4.roots["ipfs-unixfs"] || (h4.roots["ipfs-unixfs"] = {}),
				h9 = h8.Data = (() => {
					function a(a) {
						if (this.blocksizes = [], a)
							for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
					}
					return a.prototype.Type = 0, a.prototype.Data = h7.newBuffer([]), a.prototype.filesize = h7.Long ? h7.Long.fromBits(0, 0, !0) : 0, a.prototype.blocksizes = h7.emptyArray, a.prototype.hashType = h7.Long ? h7.Long.fromBits(0, 0, !0) : 0, a.prototype.fanout = h7.Long ? h7.Long.fromBits(0, 0, !0) : 0, a.prototype.mode = 0, a.prototype.mtime = null, a.encode = function(a, b) {
						if (b || (b = h6.create()), b.uint32(8)
							.int32(a.Type), null != a.Data && Object.hasOwnProperty.call(a, "Data") && b.uint32(18)
							.bytes(a.Data), null != a.filesize && Object.hasOwnProperty.call(a, "filesize") && b.uint32(24)
							.uint64(a.filesize), null != a.blocksizes && a.blocksizes.length)
							for (var c = 0; c < a.blocksizes.length; ++c) b.uint32(32)
								.uint64(a.blocksizes[c]);
						return null != a.hashType && Object.hasOwnProperty.call(a, "hashType") && b.uint32(40)
							.uint64(a.hashType), null != a.fanout && Object.hasOwnProperty.call(a, "fanout") && b.uint32(48)
							.uint64(a.fanout), null != a.mode && Object.hasOwnProperty.call(a, "mode") && b.uint32(56)
							.uint32(a.mode), null != a.mtime && Object.hasOwnProperty.call(a, "mtime") && h8.UnixTime.encode(a.mtime, b.uint32(66)
								.fork())
							.ldelim(), b
					}, a.decode = function(a, b) {
						a instanceof h5 || (a = h5.create(a));
						for (var c = void 0 === b ? a.len : a.pos + b, d = new h8.Data; a.pos < c;) {
							var e = a.uint32();
							switch (e >>> 3) {
								case 1:
									d.Type = a.int32();
									break;
								case 2:
									d.Data = a.bytes();
									break;
								case 3:
									d.filesize = a.uint64();
									break;
								case 4:
									if (d.blocksizes && d.blocksizes.length || (d.blocksizes = []), (7 & e) == 2)
										for (var f = a.uint32() + a.pos; a.pos < f;) d.blocksizes.push(a.uint64());
									else d.blocksizes.push(a.uint64());
									break;
								case 5:
									d.hashType = a.uint64();
									break;
								case 6:
									d.fanout = a.uint64();
									break;
								case 7:
									d.mode = a.uint32();
									break;
								case 8:
									d.mtime = h8.UnixTime.decode(a, a.uint32());
									break;
								default:
									a.skipType(7 & e)
							}
						}
						if (!d.hasOwnProperty("Type")) throw h7.ProtocolError("missing required 'Type'", {
							instance: d
						});
						return d
					}, a.fromObject = function(a) {
						if (a instanceof h8.Data) return a;
						var b = new h8.Data;
						switch (a.Type) {
							case "Raw":
							case 0:
								b.Type = 0;
								break;
							case "Directory":
							case 1:
								b.Type = 1;
								break;
							case "File":
							case 2:
								b.Type = 2;
								break;
							case "Metadata":
							case 3:
								b.Type = 3;
								break;
							case "Symlink":
							case 4:
								b.Type = 4;
								break;
							case "HAMTShard":
							case 5:
								b.Type = 5
						}
						if (null != a.Data && ("string" == typeof a.Data ? h7.base64.decode(a.Data, b.Data = h7.newBuffer(h7.base64.length(a.Data)), 0) : a.Data.length && (b.Data = a.Data)), null != a.filesize && (h7.Long ? (b.filesize = h7.Long.fromValue(a.filesize))
							.unsigned = !0 : "string" == typeof a.filesize ? b.filesize = parseInt(a.filesize, 10) : "number" == typeof a.filesize ? b.filesize = a.filesize : "object" == typeof a.filesize && (b.filesize = new h7.LongBits(a.filesize.low >>> 0, a.filesize.high >>> 0)
								.toNumber(!0))), a.blocksizes) {
							if (!Array.isArray(a.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
							b.blocksizes = [];
							for (var c = 0; c < a.blocksizes.length; ++c) h7.Long ? (b.blocksizes[c] = h7.Long.fromValue(a.blocksizes[c]))
								.unsigned = !0 : "string" == typeof a.blocksizes[c] ? b.blocksizes[c] = parseInt(a.blocksizes[c], 10) : "number" == typeof a.blocksizes[c] ? b.blocksizes[c] = a.blocksizes[c] : "object" == typeof a.blocksizes[c] && (b.blocksizes[c] = new h7.LongBits(a.blocksizes[c].low >>> 0, a.blocksizes[c].high >>> 0)
									.toNumber(!0))
						}
						if (null != a.hashType && (h7.Long ? (b.hashType = h7.Long.fromValue(a.hashType))
							.unsigned = !0 : "string" == typeof a.hashType ? b.hashType = parseInt(a.hashType, 10) : "number" == typeof a.hashType ? b.hashType = a.hashType : "object" == typeof a.hashType && (b.hashType = new h7.LongBits(a.hashType.low >>> 0, a.hashType.high >>> 0)
								.toNumber(!0))), null != a.fanout && (h7.Long ? (b.fanout = h7.Long.fromValue(a.fanout))
							.unsigned = !0 : "string" == typeof a.fanout ? b.fanout = parseInt(a.fanout, 10) : "number" == typeof a.fanout ? b.fanout = a.fanout : "object" == typeof a.fanout && (b.fanout = new h7.LongBits(a.fanout.low >>> 0, a.fanout.high >>> 0)
								.toNumber(!0))), null != a.mode && (b.mode = a.mode >>> 0), null != a.mtime) {
							if ("object" != typeof a.mtime) throw TypeError(".Data.mtime: object expected");
							b.mtime = h8.UnixTime.fromObject(a.mtime)
						}
						return b
					}, a.toObject = function(a, b) {
						b || (b = {});
						var c = {};
						if ((b.arrays || b.defaults) && (c.blocksizes = []), b.defaults) {
							if (c.Type = b.enums === String ? "Raw" : 0, b.bytes === String ? c.Data = "" : (c.Data = [], b.bytes !== Array && (c.Data = h7.newBuffer(c.Data))), h7.Long) {
								var d = new h7.Long(0, 0, !0);
								c.filesize = b.longs === String ? d.toString() : b.longs === Number ? d.toNumber() : d
							} else c.filesize = b.longs === String ? "0" : 0;
							if (h7.Long) {
								var d = new h7.Long(0, 0, !0);
								c.hashType = b.longs === String ? d.toString() : b.longs === Number ? d.toNumber() : d
							} else c.hashType = b.longs === String ? "0" : 0;
							if (h7.Long) {
								var d = new h7.Long(0, 0, !0);
								c.fanout = b.longs === String ? d.toString() : b.longs === Number ? d.toNumber() : d
							} else c.fanout = b.longs === String ? "0" : 0;
							c.mode = 0, c.mtime = null
						}
						if (null != a.Type && a.hasOwnProperty("Type") && (c.Type = b.enums === String ? h8.Data.DataType[a.Type] : a.Type), null != a.Data && a.hasOwnProperty("Data") && (c.Data = b.bytes === String ? h7.base64.encode(a.Data, 0, a.Data.length) : b.bytes === Array ? Array.prototype.slice.call(a.Data) : a.Data), null != a.filesize && a.hasOwnProperty("filesize") && ("number" == typeof a.filesize ? c.filesize = b.longs === String ? String(a.filesize) : a.filesize : c.filesize = b.longs === String ? h7.Long.prototype.toString.call(a.filesize) : b.longs === Number ? new h7.LongBits(a.filesize.low >>> 0, a.filesize.high >>> 0)
							.toNumber(!0) : a.filesize), a.blocksizes && a.blocksizes.length) {
							c.blocksizes = [];
							for (var e = 0; e < a.blocksizes.length; ++e) "number" == typeof a.blocksizes[e] ? c.blocksizes[e] = b.longs === String ? String(a.blocksizes[e]) : a.blocksizes[e] : c.blocksizes[e] = b.longs === String ? h7.Long.prototype.toString.call(a.blocksizes[e]) : b.longs === Number ? new h7.LongBits(a.blocksizes[e].low >>> 0, a.blocksizes[e].high >>> 0)
								.toNumber(!0) : a.blocksizes[e]
						}
						return null != a.hashType && a.hasOwnProperty("hashType") && ("number" == typeof a.hashType ? c.hashType = b.longs === String ? String(a.hashType) : a.hashType : c.hashType = b.longs === String ? h7.Long.prototype.toString.call(a.hashType) : b.longs === Number ? new h7.LongBits(a.hashType.low >>> 0, a.hashType.high >>> 0)
							.toNumber(!0) : a.hashType), null != a.fanout && a.hasOwnProperty("fanout") && ("number" == typeof a.fanout ? c.fanout = b.longs === String ? String(a.fanout) : a.fanout : c.fanout = b.longs === String ? h7.Long.prototype.toString.call(a.fanout) : b.longs === Number ? new h7.LongBits(a.fanout.low >>> 0, a.fanout.high >>> 0)
							.toNumber(!0) : a.fanout), null != a.mode && a.hasOwnProperty("mode") && (c.mode = a.mode), null != a.mtime && a.hasOwnProperty("mtime") && (c.mtime = h8.UnixTime.toObject(a.mtime, b)), c
					}, a.prototype.toJSON = function() {
						return this.constructor.toObject(this, h4.util.toJSONOptions)
					}, a.DataType = function() {
						let a = {},
							b = Object.create(a);
						return b[a[0] = "Raw"] = 0, b[a[1] = "Directory"] = 1, b[a[2] = "File"] = 2, b[a[3] = "Metadata"] = 3, b[a[4] = "Symlink"] = 4, b[a[5] = "HAMTShard"] = 5, b
					}(), a
				})();
			h8.UnixTime = (() => {
				function a(a) {
					if (a)
						for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
				}
				return a.prototype.Seconds = h7.Long ? h7.Long.fromBits(0, 0, !1) : 0, a.prototype.FractionalNanoseconds = 0, a.encode = function(a, b) {
					return b || (b = h6.create()), b.uint32(8)
						.int64(a.Seconds), null != a.FractionalNanoseconds && Object.hasOwnProperty.call(a, "FractionalNanoseconds") && b.uint32(21)
						.fixed32(a.FractionalNanoseconds), b
				}, a.decode = function(a, b) {
					a instanceof h5 || (a = h5.create(a));
					for (var c = void 0 === b ? a.len : a.pos + b, d = new h8.UnixTime; a.pos < c;) {
						var e = a.uint32();
						switch (e >>> 3) {
							case 1:
								d.Seconds = a.int64();
								break;
							case 2:
								d.FractionalNanoseconds = a.fixed32();
								break;
							default:
								a.skipType(7 & e)
						}
					}
					if (!d.hasOwnProperty("Seconds")) throw h7.ProtocolError("missing required 'Seconds'", {
						instance: d
					});
					return d
				}, a.fromObject = function(a) {
					if (a instanceof h8.UnixTime) return a;
					var b = new h8.UnixTime;
					return null != a.Seconds && (h7.Long ? (b.Seconds = h7.Long.fromValue(a.Seconds))
						.unsigned = !1 : "string" == typeof a.Seconds ? b.Seconds = parseInt(a.Seconds, 10) : "number" == typeof a.Seconds ? b.Seconds = a.Seconds : "object" == typeof a.Seconds && (b.Seconds = new h7.LongBits(a.Seconds.low >>> 0, a.Seconds.high >>> 0)
							.toNumber())), null != a.FractionalNanoseconds && (b.FractionalNanoseconds = a.FractionalNanoseconds >>> 0), b
				}, a.toObject = function(a, b) {
					b || (b = {});
					var c = {};
					if (b.defaults) {
						if (h7.Long) {
							var d = new h7.Long(0, 0, !1);
							c.Seconds = b.longs === String ? d.toString() : b.longs === Number ? d.toNumber() : d
						} else c.Seconds = b.longs === String ? "0" : 0;
						c.FractionalNanoseconds = 0
					}
					return null != a.Seconds && a.hasOwnProperty("Seconds") && ("number" == typeof a.Seconds ? c.Seconds = b.longs === String ? String(a.Seconds) : a.Seconds : c.Seconds = b.longs === String ? h7.Long.prototype.toString.call(a.Seconds) : b.longs === Number ? new h7.LongBits(a.Seconds.low >>> 0, a.Seconds.high >>> 0)
						.toNumber() : a.Seconds), null != a.FractionalNanoseconds && a.hasOwnProperty("FractionalNanoseconds") && (c.FractionalNanoseconds = a.FractionalNanoseconds), c
				}, a.prototype.toJSON = function() {
					return this.constructor.toObject(this, h4.util.toJSONOptions)
				}, a
			})(), h8.Metadata = (() => {
				function a(a) {
					if (a)
						for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
				}
				return a.prototype.MimeType = "", a.encode = function(a, b) {
					return b || (b = h6.create()), null != a.MimeType && Object.hasOwnProperty.call(a, "MimeType") && b.uint32(10)
						.string(a.MimeType), b
				}, a.decode = function(a, b) {
					a instanceof h5 || (a = h5.create(a));
					for (var c = void 0 === b ? a.len : a.pos + b, d = new h8.Metadata; a.pos < c;) {
						var e = a.uint32();
						e >>> 3 == 1 ? d.MimeType = a.string() : a.skipType(7 & e)
					}
					return d
				}, a.fromObject = function(a) {
					if (a instanceof h8.Metadata) return a;
					var b = new h8.Metadata;
					return null != a.MimeType && (b.MimeType = String(a.MimeType)), b
				}, a.toObject = function(a, b) {
					b || (b = {});
					var c = {};
					return b.defaults && (c.MimeType = ""), null != a.MimeType && a.hasOwnProperty("MimeType") && (c.MimeType = a.MimeType), c
				}, a.prototype.toJSON = function() {
					return this.constructor.toObject(this, h4.util.toJSONOptions)
				}, a
			})();
			let ia = h9,
				ib = null,
				ic = null,
				id = parseInt("0644", 8),
				ie = parseInt("0755", 8);

			function ig(a) {
				return null == a ? void 0 : "number" == typeof a ? 4095 & a : "0" === (a = a.toString())
					.substring(0, 1) ? 4095 & parseInt(a, 8) : 4095 & parseInt(a, 10)
			}

			function ih(a) {
				if (null == a) return;
				let b;
				if (null != a.secs && (b = {
					secs: a.secs,
					nsecs: a.nsecs
				}), null != a.Seconds && (b = {
					secs: a.Seconds,
					nsecs: a.FractionalNanoseconds
				}), Array.isArray(a) && (b = {
					secs: a[0],
					nsecs: a[1]
				}), a instanceof Date) {
					let c = a.getTime(),
						d = Math.floor(c / 1e3);
					b = {
						secs: d,
						nsecs: (c - 1e3 * d) * 1e3
					}
				}
				if (Object.prototype.hasOwnProperty.call(b, "secs")) {
					if (null != b && null != b.nsecs && (b.nsecs < 0 || b.nsecs > 999999999)) throw f4(Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
					return b
				}
			}
			class ii {
				static unmarshal(a) {
					let b = ia.decode(a),
						c = ia.toObject(b, {
							defaults: !1,
							arrays: !0,
							longs: Number,
							objects: !1
						}),
						d = new ii({
							type: ib[c.Type],
							data: c.Data,
							blockSizes: c.blocksizes,
							mode: c.mode,
							mtime: c.mtime ? {
								secs: c.mtime.Seconds,
								nsecs: c.mtime.FractionalNanoseconds
							} : void 0
						});
					return d._originalMode = c.mode || 0, d
				}
				constructor(a = {
					type: "file"
				}) {
					let {
						type: b,
						data: c,
						blockSizes: d,
						hashType: e,
						fanout: f,
						mtime: g,
						mode: h
					} = a;
					if (b && !ib.includes(b)) throw errcode(Error("Type: " + b + " is not valid"), "ERR_INVALID_TYPE");
					this.type = b || "file", this.data = c, this.hashType = e, this.fanout = f, this.blockSizes = d || [], this._originalMode = 0, this.mode = ig(h), g && (this.mtime = ih(g), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0))
				}
				set mode(a) {
					this._mode = this.isDirectory() ? ie : id;
					let b = ig(a);
					void 0 !== b && (this._mode = b)
				}
				get mode() {
					return this._mode
				}
				isDirectory() {
					return Boolean(this.type && ic.includes(this.type))
				}
				addBlockSize(a) {
					this.blockSizes.push(a)
				}
				removeBlockSize(a) {
					this.blockSizes.splice(a, 1)
				}
				fileSize() {
					if (this.isDirectory()) return 0;
					let a = 0;
					return this.blockSizes.forEach(b => {
						a += b
					}), this.data && (a += this.data.length), a
				}
				marshal() {
					let a;
					switch (this.type) {
						case "raw":
							a = ia.DataType.Raw;
							break;
						case "directory":
							a = ia.DataType.Directory;
							break;
						case "file":
							a = ia.DataType.File;
							break;
						case "metadata":
							a = ia.DataType.Metadata;
							break;
						case "symlink":
							a = ia.DataType.Symlink;
							break;
						case "hamt-sharded-directory":
							a = ia.DataType.HAMTShard;
							break;
						default:
							throw errcode(Error("Type: " + a + " is not valid"), "ERR_INVALID_TYPE")
					}
					let b = this.data;
					this.data && this.data.length || (b = void 0);
					let c;
					null != this.mode && ((c = 4294963200 & this._originalMode | (ig(this.mode) || 0)) !== id || this.isDirectory() || (c = void 0), c === ie && this.isDirectory() && (c = void 0));
					let d;
					if (null != this.mtime) {
						let e = ih(this.mtime);
						e && 0 === (d = {
								Seconds: e.secs,
								FractionalNanoseconds: e.nsecs
							})
							.FractionalNanoseconds && delete d.FractionalNanoseconds
					}
					let f = {
						Type: a,
						Data: b,
						filesize: this.isDirectory() ? void 0 : this.fileSize(),
						blocksizes: this.blockSizes,
						hashType: this.hashType,
						fanout: this.fanout,
						mode: c,
						mtime: d
					};
					return ia.encode(f)
						.finish()
				}
			}
			async function* ij(a, b) {
				if ("string" == typeof a || a instanceof String || hZ(a) || h$(a) || a._readableState) throw f4(Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
				if (h0(a) && (a = hX(a)), Symbol.iterator in a || Symbol.asyncIterator in a) {
					let c = hW(a),
						{
							value: d,
							done: e
						} = await c.peek();
					if (e) {
						yield*[];
						return
					}
					if (c.push(d), Number.isInteger(d)) throw f4(Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
					if (d._readableState) {
						yield* h3(c, a => ik({
							content: a
						}, b));
						return
					}
					if (hZ(d)) {
						yield ik({
							content: c
						}, b);
						return
					}
					if (h_(d) || d[Symbol.iterator] || d[Symbol.asyncIterator] || h0(d) || h$(d)) {
						yield* h3(c, a => ik(a, b));
						return
					}
				}
				if (h_(a)) throw f4(Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
				throw f4(Error("Unexpected input: " + typeof a), "ERR_UNEXPECTED_INPUT")
			}
			async function ik(a, b) {
				let {
					path: c,
					mode: d,
					mtime: e,
					content: f
				} = a, g = {
					path: c || "",
					mode: ig(d),
					mtime: ih(e)
				};
				return f ? g.content = await b(f) : c || (g.content = await b(a)), g
			}

			function il(a) {
				return ij(a, h1, !0)
			}

			function im(a) {
				return null == a ? void 0 : "string" == typeof a ? a : a.toString(8)
					.padStart(4, "0")
			}
			async function io(a, b, c = {}) {
				let d = [],
					e = new FormData,
					f = 0,
					g = 0;
				for await (let {
					content: h,
					path: i,
					mode: j,
					mtime: k
				} of il(a)) {
					let l = "",
						m = h ? "file" : "dir";
					f > 0 && (l = `-${f}`);
					let n = m + l,
						o = [];
					if (null != j && o.push(`mode=${im(j)}`), null != k) {
						let {
							secs: p,
							nsecs: q
						} = k;
						o.push(`mtime=${p}`), null != q && o.push(`mtime-nsecs=${q}`)
					}
					if (o.length && (n = `${n}?${o.join("&")}`), h) {
						e.set(n, h, null != i ? encodeURIComponent(i) : void 0);
						let r = g + h.size;
						d.push({
							name: i,
							start: g,
							end: r
						}), g = r
					} else if (null != i) e.set(n, new File([""], encodeURIComponent(i), {
						type: "application/x-directory"
					}));
					else throw Error("path or content or both must be set");
					f++
				}
				return {
					total: g,
					parts: d,
					headers: c,
					body: e
				}
			}
			var ip = c(24379);

			function iq(a) {
				return a.filter(Boolean)
			}

			function ir(...a) {
				return (0, ip.anySignal)(iq(a))
			}
			let is = hy(a => {
					async function b(c, d = {}) {
						let e = new AbortController,
							f = ir(e.signal, d.signal),
							g;
						try {
							let h = await a.post("block/put", {
								signal: f,
								searchParams: hB(d),
								...await io([c], e, d.headers)
							});
							g = await h.json()
						} catch (i) {
							if ("dag-pb" === d.format) return b(c, {
								...d,
								format: "protobuf"
							});
							if ("dag-cbor" === d.format) return b(c, {
								...d,
								format: "cbor"
							});
							throw i
						}
						return aM.parse(g.Key)
					}
					return b
				}),
				it = hy(a => {
					async function* b(b, c = {}) {
						Array.isArray(b) || (b = [b]);
						let d = await a.post("block/rm", {
							signal: c.signal,
							searchParams: hB({
								arg: b.map(a => a.toString()),
								"stream-channels": !0,
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield iu(e)
					}
					return b
				});

			function iu(a) {
				let b = {
					cid: aM.parse(a.Hash)
				};
				return a.Error && (b.error = Error(a.Error)), b
			}
			let iv = hy(a => {
				async function b(b, c = {}) {
					let d = await a.post("block/stat", {
							signal: c.signal,
							searchParams: hB({
								arg: b.toString(),
								...c
							}),
							headers: c.headers
						}),
						e = await d.json();
					return {
						cid: aM.parse(e.Key),
						size: e.Size
					}
				}
				return b
			});

			function iw(a) {
				return {
					get: hV(a),
					put: is(a),
					rm: it(a),
					stat: iv(a)
				}
			}
			let ix = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("bootstrap/add", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							{
								Peers: e
							} = await d.json();
						return {
							Peers: e.map(a => ge(a))
						}
					}
					return b
				}),
				iy = hy(a => {
					async function b(b = {}) {
						let c = await a.post("bootstrap/rm", {
								signal: b.signal,
								searchParams: hB({
									...b,
									all: !0
								}),
								headers: b.headers
							}),
							{
								Peers: d
							} = await c.json();
						return {
							Peers: d.map(a => ge(a))
						}
					}
					return b
				}),
				iz = hy(a => {
					async function b(b = {}) {
						let c = await a.post("bootstrap/list", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							{
								Peers: d
							} = await c.json();
						return {
							Peers: d.map(a => ge(a))
						}
					}
					return b
				}),
				iA = hy(a => {
					async function b(b = {}) {
						let c = await a.post("bootstrap/add", {
								signal: b.signal,
								searchParams: hB({
									...b,
									default: !0
								}),
								headers: b.headers
							}),
							{
								Peers: d
							} = await c.json();
						return {
							Peers: d.map(a => ge(a))
						}
					}
					return b
				}),
				iB = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("bootstrap/rm", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							{
								Peers: e
							} = await d.json();
						return {
							Peers: e.map(a => ge(a))
						}
					}
					return b
				});

			function iC(a) {
				return {
					add: ix(a),
					clear: iy(a),
					list: iz(a),
					reset: iA(a),
					rm: iB(a)
				}
			}
			let iD = hy(a => {
				async function b(b, c = {}) {
					let d = await a.post("config/profile/apply", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								...c
							}),
							headers: c.headers
						}),
						e = await d.json();
					return {
						original: e.OldCfg,
						updated: e.NewCfg
					}
				}
				return b
			});

			function iE(a) {
				if (null == a) return a;
				let b = /^[A-Z]+$/,
					c = {};
				return Object.keys(a)
					.reduce((c, d) => (b.test(d) ? c[d.toLowerCase()] = a[d] : b.test(d[0]) ? c[d[0].toLowerCase() + d.slice(1)] = a[d] : c[d] = a[d], c), c)
			}
			let iF = hy(a => {
				async function b(b = {}) {
					let c = await a.post("config/profile/list", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						}),
						d = await c.json();
					return d.map(a => iE(a))
				}
				return b
			});

			function iG(a) {
				return {
					apply: iD(a),
					list: iF(a)
				}
			}
			let iH = hy(a => {
					let b = async (b, c = {}) => {
						if (!b) throw Error("key argument is required");
						let d = await a.post("config", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return e.Value
					};
					return b
				}),
				iI = hy(a => {
					let b = async (b = {}) => {
						let c = await a.post("config/show", {
								signal: b.signal,
								searchParams: hB({
									...b
								}),
								headers: b.headers
							}),
							d = await c.json();
						return d
					};
					return b
				}),
				iJ = hy(a => {
					let b = async (b, c = {}) => {
						let d = new AbortController,
							e = ir(d.signal, c.signal),
							f = await a.post("config/replace", {
								signal: e,
								searchParams: hB(c),
								...await io([fx(JSON.stringify(b))], d, c.headers)
							});
						await f.text()
					};
					return b
				}),
				iK = hy(a => {
					let b = async (b, c, d = {}) => {
						if ("string" != typeof b) throw Error("Invalid key type");
						let e = {
								...d,
								...iL(b, c)
							},
							f = await a.post("config", {
								signal: d.signal,
								searchParams: hB(e),
								headers: d.headers
							});
						await f.text()
					};
					return b
				}),
				iL = (a, b) => {
					switch (typeof b) {
						case "boolean":
							return {
								arg: [a, b.toString()],
								bool: !0
							};
						case "string":
							return {
								arg: [a, b]
							};
						default:
							return {
								arg: [a, JSON.stringify(b)],
								json: !0
							}
					}
				};

			function iM(a) {
				return {
					getAll: iI(a),
					get: iH(a),
					set: iK(a),
					replace: iJ(a),
					profiles: iG(a)
				}
			}
			let iN = hy(a => {
				async function* b(b, c = {}) {
					let d = await a.post("dag/export", {
						signal: c.signal,
						searchParams: hB({
							arg: b.toString()
						}),
						headers: c.headers
					});
					yield* d.iterator()
				}
				return b
			});
			async function* iO(a, b, c, d, e) {
				let f = async a => {
						let b = await c.getCodec(a.code),
							f = await d(a, e);
						return b.decode(f)
					}, g = b.split("/")
					.filter(Boolean), h = await f(a), i = a;
				for (; g.length;) {
					let j = g.shift();
					if (!j) throw f4(Error(`Could not resolve path "${b}"`), "ERR_INVALID_PATH");
					if (Object.prototype.hasOwnProperty.call(h, j)) yield {
						value: h = h[j],
						remainderPath: g.join("/")
					};
					else throw f4(Error(`no link named "${j}" under ${i}`), "ERR_NO_LINK");
					let k = aM.asCID(h);
					k && (i = k, h = await f(h))
				}
				yield {
					value: h,
					remainderPath: ""
				}
			}
			async function iP(a) {
				for await (let b of a) return b
			}
			async function iQ(a) {
				let b;
				for await (let c of a) b = c;
				return b
			}
			let iR = (a, b) => {
					let c = hy((b, c) => {
						let d = hV(c),
							e = async (b, c = {}) => {
								if (c.path) {
									let e = c.localResolve ? await iP(iO(b, c.path, a, d, c)) : await iQ(iO(b, c.path, a, d, c)),
										f = e;
									if (!f) throw f4(Error("Not found"), "ERR_NOT_FOUND");
									return f
								}
								let g = await a.getCodec(b.code),
									h = await d(b, c),
									i = g.decode(h);
								return {
									value: i,
									remainderPath: ""
								}
							};
						return e
					});
					return c(b)
				},
				iS = hy(a => {
					async function* b(b, c = {}) {
						let d = new AbortController,
							e = ir(d.signal, c.signal),
							{
								headers: f,
								body: g
							} = await io(b, d, c.headers),
							h = await a.post("dag/import", {
								signal: e,
								headers: f,
								body: g,
								searchParams: hB({
									"pin-roots": c.pinRoots
								})
							});
						for await (let {
							Root: i
						} of h.ndjson()) if (void 0 !== i) {
							let {
								Cid: {
									"/": j
								},
								PinErrorMsg: k
							} = i;
							yield {
								root: {
									cid: aM.parse(j),
									pinErrorMsg: k
								}
							}
						}
					}
					return b
				}),
				iT = (a, b) => {
					let c = hy(b => {
						let c = async (c, d = {}) => {
							let e = {
									storeCodec: "dag-cbor",
									hashAlg: "sha2-256",
									...d
								},
								f;
							if (e.inputCodec) {
								if (!(c instanceof Uint8Array)) throw Error("Can only inputCodec on raw bytes that can be decoded");
								f = c
							} else {
								let g = await a.getCodec(e.storeCodec);
								f = g.encode(c), e.inputCodec = e.storeCodec
							}
							let h = new AbortController,
								i = ir(h.signal, e.signal),
								j = await b.post("dag/put", {
									timeout: e.timeout,
									signal: i,
									searchParams: hB(e),
									...await io([f], h, e.headers)
								}),
								k = await j.json();
							return aM.parse(k.Cid["/"])
						};
						return c
					});
					return c(b)
				},
				iU = hy(a => {
					let b = async (b, c = {}) => {
						let d = await a.post("dag/resolve", {
								signal: c.signal,
								searchParams: hB({
									arg: `${b}${c.path?`/${c.path}`.replace(/\/[/]+/g,"/"):""}`,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return {
							cid: aM.parse(e.Cid["/"]),
							remainderPath: e.RemPath
						}
					};
					return b
				});

			function iV(a, b) {
				return {
					export: iN(b),
					get: iR(a, b),
					import: iS(b),
					put: iT(a, b),
					resolve: iU(b)
				}
			}
			let iW = 0,
				iX = 1,
				iY = 2,
				iZ = 3,
				i$ = 4,
				i_ = 5,
				i0 = 6,
				i1 = 7,
				i2 = a => {
					if (a.Type === iW) return {
						name: "SENDING_QUERY",
						type: a.Type
					};
					if (a.Type === iX) return {
						from: hO(a.ID),
						name: "PEER_RESPONSE",
						type: a.Type,
						messageType: 0,
						messageName: "PUT_VALUE",
						closer: (a.Responses || [])
							.map(({
								ID: a,
								Addrs: b
							}) => ({
								id: hO(a),
								multiaddrs: b.map(a => ge(a)),
								protocols: []
							})),
						providers: (a.Responses || [])
							.map(({
								ID: a,
								Addrs: b
							}) => ({
								id: hO(a),
								multiaddrs: b.map(a => ge(a)),
								protocols: []
							}))
					};
					if (a.Type === iY) {
						let b = {
							id: a.ID ? ? hO(a.ID),
							multiaddrs: [],
							protocols: []
						};
						return a.Responses && a.Responses.length && (b = {
							id: hO(a.Responses[0].ID),
							multiaddrs: a.Responses[0].Addrs.map(a => ge(a)),
							protocols: []
						}), {
							name: "FINAL_PEER",
							type: a.Type,
							peer: b
						}
					}
					if (a.Type === iZ) return {
						name: "QUERY_ERROR",
						type: a.Type,
						error: Error(a.Extra)
					};
					if (a.Type === i$) return {
						name: "PROVIDER",
						type: a.Type,
						providers: a.Responses.map(({
							ID: a,
							Addrs: b
						}) => ({
							id: hO(a),
							multiaddrs: b.map(a => ge(a)),
							protocols: []
						}))
					};
					if (a.Type === i_) return {
						name: "VALUE",
						type: a.Type,
						value: fx(a.Extra, "base64pad")
					};
					if (a.Type === i0) {
						let c = a.Responses.map(({
							ID: a
						}) => hO(a));
						if (!c.length) throw Error("No peer found");
						return {
							name: "ADDING_PEER",
							type: a.Type,
							peer: c[0]
						}
					}
					if (a.Type === i1) return {
						name: "DIALING_PEER",
						type: a.Type,
						peer: hO(a.ID)
					};
					throw Error("Unknown DHT event type")
				},
				i3 = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("dht/findpeer", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield i2(e)
					}
					return b
				}),
				i4 = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("dht/findprovs", {
							signal: c.signal,
							searchParams: hB({
								arg: b.toString(),
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield i2(e)
					}
					return b
				}),
				i5 = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("dht/get", {
							signal: c.signal,
							searchParams: hB({
								arg: b instanceof Uint8Array ? fl(b) : b.toString(),
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield i2(e)
					}
					return b
				}),
				i6 = hy(a => {
					async function* b(b, c = {
						recursive: !1
					}) {
						let d = Array.isArray(b) ? b : [b],
							e = await a.post("dht/provide", {
								signal: c.signal,
								searchParams: hB({
									arg: d.map(a => a.toString()),
									...c
								}),
								headers: c.headers
							});
						for await (let f of e.ndjson()) yield i2(f)
					}
					return b
				}),
				i7 = hy(a => {
					async function* b(b, c, d = {}) {
						let e = new AbortController,
							f = ir(e.signal, d.signal),
							g = await a.post("dht/put", {
								signal: f,
								searchParams: hB({
									arg: b instanceof Uint8Array ? fl(b) : b.toString(),
									...d
								}),
								...await io([c], e, d.headers)
							});
						for await (let h of g.ndjson()) yield i2(h)
					}
					return b
				}),
				i8 = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("dht/query", {
							signal: c.signal,
							searchParams: hB({
								arg: b.toString(),
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield i2(e)
					}
					return b
				});

			function i9(a) {
				return {
					findPeer: i3(a),
					findProvs: i4(a),
					get: i5(a),
					provide: i6(a),
					put: i7(a),
					query: i8(a)
				}
			}
			let ja = hy(a => {
					async function b(b = {}) {
						let c = await a.post("diag/cmds", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return c.json()
					}
					return b
				}),
				jb = hy(a => {
					async function b(b = {}) {
						let c = await a.post("diag/net", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return c.json()
					}
					return b
				}),
				jc = hy(a => {
					async function b(b = {}) {
						let c = await a.post("diag/sys", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return c.json()
					}
					return b
				});

			function jd(a) {
				return {
					cmds: ja(a),
					net: jb(a),
					sys: jc(a)
				}
			}
			let je = hy(a => {
					async function b(b, c, d = {}) {
						let e = await a.post("files/chmod", {
							signal: d.signal,
							searchParams: hB({
								arg: b,
								mode: c,
								...d
							}),
							headers: d.headers
						});
						await e.text()
					}
					return b
				}),
				jf = hy(a => {
					async function b(b, c, d = {}) {
						let e = Array.isArray(b) ? b : [b],
							f = await a.post("files/cp", {
								signal: d.signal,
								searchParams: hB({
									arg: e.concat(c)
										.map(a => aM.asCID(a) ? `/ipfs/${a}` : a),
									...d
								}),
								headers: d.headers
							});
						await f.text()
					}
					return b
				}),
				jg = hy(a => {
					async function b(b, c = {}) {
						if (!b || "string" != typeof b) throw Error("ipfs.files.flush requires a path");
						let d = await a.post("files/flush", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return aM.parse(e.Cid)
					}
					return b
				});

			function jh(a) {
				let b = iE(a);
				return Object.prototype.hasOwnProperty.call(b, "mode") && (b.mode = parseInt(b.mode, 8)), Object.prototype.hasOwnProperty.call(b, "mtime") && (b.mtime = {
					secs: b.mtime,
					nsecs: b.mtimeNsecs || 0
				}, delete b.mtimeNsecs), b
			}
			let ji = hy(a => {
				async function* b(b, c = {}) {
					if (!b) throw Error("ipfs.files.ls requires a path");
					let d = await a.post("files/ls", {
						signal: c.signal,
						searchParams: hB({
							arg: aM.asCID(b) ? `/ipfs/${b}` : b,
							long: !0,
							...c,
							stream: !0
						}),
						headers: c.headers
					});
					for await (let e of d.ndjson()) if ("Entries" in e)
						for (let f of e.Entries || []) yield jj(jh(f));
					else yield jj(jh(e))
				}
				return b
			});

			function jj(a) {
				return a.hash && (a.cid = aM.parse(a.hash)), delete a.hash, a.type = 1 === a.type ? "directory" : "file", a
			}
			let jk = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("files/mkdir", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								...c
							}),
							headers: c.headers
						});
						await d.text()
					}
					return b
				}),
				jl = hy(a => {
					async function b(b, c, d = {}) {
						Array.isArray(b) || (b = [b]);
						let e = await a.post("files/mv", {
							signal: d.signal,
							searchParams: hB({
								arg: b.concat(c),
								...d
							}),
							headers: d.headers
						});
						await e.text()
					}
					return b
				});
			var jm = c(95972);
			let jn = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("files/read", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								count: c.length,
								...c
							}),
							headers: c.headers
						});
						yield* jm(d.body)
					}
					return b
				}),
				jo = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("files/rm", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.text();
						if ("" !== e) {
							let f = new gn.HTTPError(d);
							throw f.message = e, f
						}
					}
					return b
				}),
				jp = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("files/stat", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return e.WithLocality = e.WithLocality || !1, jq(jh(e))
					}
					return b
				});

			function jq(a) {
				return a.cid = aM.parse(a.hash), delete a.hash, a
			}
			let jr = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("files/touch", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								...c
							}),
							headers: c.headers
						});
						await d.text()
					}
					return b
				}),
				js = hy(a => {
					async function b(b, c, d = {}) {
						let e = new AbortController,
							f = ir(e.signal, d.signal),
							g = await a.post("files/write", {
								signal: f,
								searchParams: hB({
									arg: b,
									streamChannels: !0,
									count: d.length,
									...d
								}),
								...await io([{
									content: c,
									path: "arg",
									mode: hz(d.mode),
									mtime: hA(d.mtime)
								}], e, d.headers)
							});
						await g.text()
					}
					return b
				});

			function jt(a) {
				return {
					chmod: je(a),
					cp: jf(a),
					flush: jg(a),
					ls: ji(a),
					mkdir: jk(a),
					mv: jl(a),
					read: jn(a),
					rm: jo(a),
					stat: jp(a),
					touch: jr(a),
					write: js(a)
				}
			}
			let ju = hy(a => {
					let b = async (a, b, c = {}) => {
						throw f4(Error("Not implemented"), "ERR_NOT_IMPLEMENTED")
					};
					return b
				}),
				jv = hy(a => {
					async function b(b, c) {
						let d = c ? ? {
								type: "Ed25519"
							},
							e = await a.post("key/gen", {
								signal: d.signal,
								searchParams: hB({
									arg: b,
									...d
								}),
								headers: d.headers
							}),
							f = await e.json();
						return iE(f)
					}
					return b
				}),
				jw = hy(a => {
					async function b(b, c, d, e = {}) {
						let f = await a.post("key/import", {
								signal: e.signal,
								searchParams: hB({
									arg: b,
									pem: c,
									password: d,
									...e
								}),
								headers: e.headers
							}),
							g = await f.json();
						return iE(g)
					}
					return b
				}),
				jx = hy(a => {
					let b = async (a, b = {}) => {
						throw f4(Error("Not implemented"), "ERR_NOT_IMPLEMENTED")
					};
					return b
				}),
				jy = hy(a => {
					async function b(b = {}) {
						let c = await a.post("key/list", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							d = await c.json();
						return (d.Keys || [])
							.map(a => iE(a))
					}
					return b
				}),
				jz = hy(a => {
					async function b(b, c, d = {}) {
						let e = await a.post("key/rename", {
							signal: d.signal,
							searchParams: hB({
								arg: [b, c],
								...d
							}),
							headers: d.headers
						});
						return iE(await e.json())
					}
					return b
				}),
				jA = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("key/rm", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return iE(e.Keys[0])
					}
					return b
				});

			function jB(a) {
				return {
					export: ju(a),
					gen: jv(a),
					import: jw(a),
					info: jx(a),
					list: jy(a),
					rename: jz(a),
					rm: jA(a)
				}
			}
			let jC = hy(a => {
					async function b(b, c, d = {}) {
						let e = await a.post("log/level", {
							signal: d.signal,
							searchParams: hB({
								arg: [b, c],
								...d
							}),
							headers: d.headers
						});
						return iE(await e.json())
					}
					return b
				}),
				jD = hy(a => {
					async function b(b = {}) {
						let c = await a.post("log/ls", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							d = await c.json();
						return d.Strings
					}
					return b
				}),
				jE = hy(a => {
					async function* b(b = {}) {
						let c = await a.post("log/tail", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						yield* c.ndjson()
					}
					return b
				});

			function jF(a) {
				return {
					level: jC(a),
					ls: jD(a),
					tail: jE(a)
				}
			}
			let jG = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("name/publish", {
							signal: c.signal,
							searchParams: hB({
								arg: `${b}`,
								...c
							}),
							headers: c.headers
						});
						return iE(await d.json())
					}
					return b
				}),
				jH = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("name/resolve", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								stream: !0,
								...c
							}),
							headers: c.headers
						});
						for await (let e of d.ndjson()) yield e.Path
					}
					return b
				}),
				jI = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("name/pubsub/cancel", {
							signal: c.signal,
							searchParams: hB({
								arg: b,
								...c
							}),
							headers: c.headers
						});
						return iE(await d.json())
					}
					return b
				}),
				jJ = hy(a => {
					async function b(b = {}) {
						let c = await a.post("name/pubsub/state", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return iE(await c.json())
					}
					return b
				}),
				jK = hy(a => {
					async function b(b = {}) {
						let c = await a.post("name/pubsub/subs", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							d = await c.json();
						return d.Strings || []
					}
					return b
				});

			function jL(a) {
				return {
					cancel: jI(a),
					state: jJ(a),
					subs: jK(a)
				}
			}

			function jM(a) {
				return {
					publish: jG(a),
					resolve: jH(a),
					pubsub: jL(a)
				}
			}
			let jN = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("object/data", {
								signal: c.signal,
								searchParams: hB({
									arg: `${b instanceof Uint8Array?aM.decode(b):b}`,
									...c
								}),
								headers: c.headers
							}),
							e = await d.arrayBuffer();
						return new Uint8Array(e, 0, e.byteLength)
					}
					return b
				}),
				jO = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("object/get", {
								signal: c.signal,
								searchParams: hB({
									arg: `${b instanceof Uint8Array?aM.decode(b):b}`,
									dataEncoding: "base64",
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return {
							Data: fx(e.Data, "base64pad"),
							Links: (e.Links || [])
								.map(a => ({
									Name: a.Name,
									Hash: aM.parse(a.Hash),
									Tsize: a.Size
								}))
						}
					}
					return b
				}),
				jP = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("object/links", {
								signal: c.signal,
								searchParams: hB({
									arg: `${b instanceof Uint8Array?aM.decode(b):b}`,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return (e.Links || [])
							.map(a => ({
								Name: a.Name,
								Tsize: a.Size,
								Hash: aM.parse(a.Hash)
							}))
					}
					return b
				}),
				jQ = hy(a => {
					async function b(b = {}) {
						let c = await a.post("object/new", {
								signal: b.signal,
								searchParams: hB({
									arg: b.template,
									...b
								}),
								headers: b.headers
							}),
							{
								Hash: d
							} = await c.json();
						return aM.parse(d)
					}
					return b
				}),
				jR = (a, b) => {
					let c = hy(c => {
						let d = iT(a, b);
						async function e(a, b = {}) {
							return d(a, {
								...b,
								storeCodec: "dag-pb",
								hashAlg: "sha2-256",
								version: 1
							})
						}
						return e
					});
					return c(b)
				},
				jS = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("object/stat", {
								signal: c.signal,
								searchParams: hB({
									arg: `${b}`,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return {
							...e,
							Hash: aM.parse(e.Hash)
						}
					}
					return b
				}),
				jT = hy(a => {
					async function b(b, c, d = {}) {
						let e = await a.post("object/patch/add-link", {
								signal: d.signal,
								searchParams: hB({
									arg: [`${b}`, c.Name || c.name || "", (c.Hash || c.cid || "")
										.toString() || null
									],
									...d
								}),
								headers: d.headers
							}),
							{
								Hash: f
							} = await e.json();
						return aM.parse(f)
					}
					return b
				}),
				jU = hy(a => {
					async function b(b, c, d = {}) {
						let e = new AbortController,
							f = ir(e.signal, d.signal),
							g = await a.post("object/patch/append-data", {
								signal: f,
								searchParams: hB({
									arg: `${b}`,
									...d
								}),
								...await io([c], e, d.headers)
							}),
							{
								Hash: h
							} = await g.json();
						return aM.parse(h)
					}
					return b
				}),
				jV = hy(a => {
					async function b(b, c, d = {}) {
						let e = await a.post("object/patch/rm-link", {
								signal: d.signal,
								searchParams: hB({
									arg: [`${b}`, c.Name || c.name || null],
									...d
								}),
								headers: d.headers
							}),
							{
								Hash: f
							} = await e.json();
						return aM.parse(f)
					}
					return b
				}),
				jW = hy(a => {
					async function b(b, c, d = {}) {
						let e = new AbortController,
							f = ir(e.signal, d.signal),
							g = await a.post("object/patch/set-data", {
								signal: f,
								searchParams: hB({
									arg: [`${b}`],
									...d
								}),
								...await io([c], e, d.headers)
							}),
							{
								Hash: h
							} = await g.json();
						return aM.parse(h)
					}
					return b
				});

			function jX(a) {
				return {
					addLink: jT(a),
					appendData: jU(a),
					rmLink: jV(a),
					setData: jW(a)
				}
			}

			function jY(a, b) {
				return {
					data: jN(b),
					get: jO(b),
					links: jP(b),
					new: jQ(b),
					put: jR(a, b),
					stat: jS(b),
					patch: jX(b)
				}
			}

			function jZ(a) {
				return Symbol.iterator in a
			}

			function j$(a) {
				return Symbol.asyncIterator in a
			}

			function j_(a) {
				return null != aM.asCID(a)
			}
			async function* j0(a) {
				if (null == a) throw f4(Error(`Unexpected input: ${a}`), "ERR_UNEXPECTED_INPUT");
				let b = aM.asCID(a);
				if (b) {
					yield j1({
						cid: b
					});
					return
				}
				if (a instanceof String || "string" == typeof a) {
					yield j1({
						path: a
					});
					return
				}
				if (null != a.cid || null != a.path) return yield j1(a);
				if (jZ(a)) {
					let c = a[Symbol.iterator](),
						d = c.next();
					if (d.done) return c;
					if (j_(d.value)) {
						for (let e of (yield j1({
							cid: d.value
						}), c)) yield j1({
							cid: e
						});
						return
					}
					if (d.value instanceof String || "string" == typeof d.value) {
						for (let f of (yield j1({
							path: d.value
						}), c)) yield j1({
							path: f
						});
						return
					}
					if (null != d.value.cid || null != d.value.path) {
						for (let g of (yield j1(d.value), c)) yield j1(g);
						return
					}
					throw f4(Error("Unexpected input: " + typeof a), "ERR_UNEXPECTED_INPUT")
				}
				if (j$(a)) {
					let h = a[Symbol.asyncIterator](),
						i = await h.next();
					if (i.done) return h;
					if (j_(i.value)) {
						for await (let j of (yield j1({
							cid: i.value
						}), h)) yield j1({
							cid: j
						});
						return
					}
					if (i.value instanceof String || "string" == typeof i.value) {
						for await (let k of (yield j1({
							path: i.value
						}), h)) yield j1({
							path: k
						});
						return
					}
					if (null != i.value.cid || null != i.value.path) {
						for await (let l of (yield j1(i.value), h)) yield j1(l);
						return
					}
				}
				throw f4(Error("Unexpected input: " + typeof a), "ERR_UNEXPECTED_INPUT")
			}

			function j1(a) {
				let b = a.cid || `${a.path}`;
				if (!b) throw f4(Error("Unexpected input: Please path either a CID or an IPFS path"), "ERR_UNEXPECTED_INPUT");
				let c = {
					path: b,
					recursive: !1 !== a.recursive
				};
				return null != a.metadata && (c.metadata = a.metadata), c
			}
			let j2 = hy(a => {
				async function* b(b, c = {}) {
					for await (let {
						path: d,
						recursive: e,
						metadata: f
					} of j0(b)) {
						let g = await a.post("pin/add", {
							signal: c.signal,
							searchParams: hB({
								...c,
								arg: d,
								recursive: e,
								metadata: f ? JSON.stringify(f) : void 0,
								stream: !0
							}),
							headers: c.headers
						});
						for await (let h of g.ndjson()) {
							if (h.Pins) {
								for (let i of h.Pins) yield aM.parse(i);
								continue
							}
							yield aM.parse(h)
						}
					}
				}
				return b
			});

			function j3(a) {
				let b = j2(a);
				return hy(() => {
					async function a(a, c = {}) {
						return iQ(b([{
							path: a,
							...c
						}], c))
					}
					return a
				})(a)
			}

			function j4(a, b, c) {
				let d = {
					type: a,
					cid: aM.parse(b)
				};
				return c && (d.metadata = c), d
			}
			let j5 = hy(a => {
					async function* b(b = {}) {
						let c = [];
						b.paths && (c = Array.isArray(b.paths) ? b.paths : [b.paths]);
						let d = await a.post("pin/ls", {
							signal: b.signal,
							searchParams: hB({
								...b,
								arg: c.map(a => `${a}`),
								stream: !0
							}),
							headers: b.headers
						});
						for await (let e of d.ndjson()) {
							if (e.Keys) {
								for (let f of Object.keys(e.Keys)) yield j4(e.Keys[f].Type, f, e.Keys[f].Metadata);
								return
							}
							yield j4(e.Type, e.Cid, e.Metadata)
						}
					}
					return b
				}),
				j6 = hy(a => {
					async function* b(b, c = {}) {
						for await (let {
							path: d,
							recursive: e
						} of j0(b)) {
							let f = new URLSearchParams(c.searchParams);
							f.append("arg", `${d}`), null != e && f.set("recursive", String(e));
							let g = await a.post("pin/rm", {
								signal: c.signal,
								headers: c.headers,
								searchParams: hB({
									...c,
									arg: `${d}`,
									recursive: e
								})
							});
							for await (let h of g.ndjson()) {
								if (h.Pins) {
									yield* h.Pins.map(a => aM.parse(a));
									continue
								}
								yield aM.parse(h)
							}
						}
					}
					return b
				}),
				j7 = a => {
					let b = j6(a);
					return hy(() => {
						async function a(a, c = {}) {
							return iQ(b([{
								path: a,
								...c
							}], c))
						}
						return a
					})(a)
				},
				j8 = ({
					Name: a,
					Status: b,
					Cid: c
				}) => ({
					cid: aM.parse(c),
					name: a,
					status: b
				}),
				j9 = a => {
					if ("string" == typeof a && "" !== a) return a;
					throw TypeError("service name must be passed")
				},
				ka = a => {
					if (aM.asCID(a)) return a.toString();
					throw TypeError(`CID instance expected instead of ${typeof a}`)
				},
				kb = ({
					service: a,
					cid: b,
					name: c,
					status: d,
					all: e
				}) => {
					let f = hB({
						service: j9(a),
						name: c,
						force: !!e || void 0
					});
					if (b)
						for (let g of b) f.append("cid", ka(g));
					if (d)
						for (let h of d) f.append("status", h);
					return f
				},
				kc = ({
					cid: a,
					service: b,
					background: c,
					name: d,
					origins: e
				}) => {
					let f = hB({
						arg: ka(a),
						service: j9(b),
						name: d,
						background: !!c || void 0
					});
					if (e)
						for (let g of e) f.append("origin", g.toString());
					return f
				};

			function kd(a) {
				async function b(b, {
					timeout: c,
					signal: d,
					headers: e,
					...f
				}) {
					let g = await a.post("pin/remote/add", {
						timeout: c,
						signal: d,
						headers: e,
						searchParams: kc({
							cid: b,
							...f
						})
					});
					return j8(await g.json())
				}
				return b
			}

			function ke(a) {
				async function* b({
					timeout: b,
					signal: c,
					headers: d,
					...e
				}) {
					let f = await a.post("pin/remote/ls", {
						timeout: b,
						signal: c,
						headers: d,
						searchParams: kb(e)
					});
					for await (let g of f.ndjson()) yield j8(g)
				}
				return b
			}

			function kf(a) {
				async function b({
					timeout: b,
					signal: c,
					headers: d,
					...e
				}) {
					await a.post("pin/remote/rm", {
						timeout: b,
						signal: c,
						headers: d,
						searchParams: kb({
							...e,
							all: !1
						})
					})
				}
				return b
			}

			function kg(a) {
				async function b({
					timeout: b,
					signal: c,
					headers: d,
					...e
				}) {
					await a.post("pin/remote/rm", {
						timeout: b,
						signal: c,
						headers: d,
						searchParams: kb({
							...e,
							all: !0
						})
					})
				}
				return b
			}

			function kh(a) {
				let b = String(a);
				if ("undefined" === b) throw Error("endpoint is required");
				return "/" === b[b.length - 1] ? b.slice(0, -1) : b
			}

			function ki(a) {
				return {
					service: a.Service,
					endpoint: new URL(a.ApiEndpoint),
					...a.Stat && {
						stat: kj(a.Stat)
					}
				}
			}

			function kj(a) {
				switch (a.Status) {
					case "valid":
						{
							let {
								Pinning: b,
								Pinned: c,
								Queued: d,
								Failed: e
							} = a.PinCount;
							return {
								status: "valid",
								pinCount: {
									queued: d,
									pinning: b,
									pinned: c,
									failed: e
								}
							}
						}
					case "invalid":
						return {
							status: "invalid"
						};
					default:
						return {
							status: a.Status
						}
				}
			}

			function kk(a) {
				async function b(b, c) {
					let {
						endpoint: d,
						key: e,
						headers: f,
						timeout: g,
						signal: h
					} = c;
					await a.post("pin/remote/service/add", {
						timeout: g,
						signal: h,
						searchParams: hB({
							arg: [b, kh(d), e]
						}),
						headers: f
					})
				}
				return b
			}

			function kl(a) {
				async function b(b = {}) {
					let {
						stat: c,
						headers: d,
						timeout: e,
						signal: f
					} = b, g = await a.post("pin/remote/service/ls", {
						timeout: e,
						signal: f,
						headers: d,
						searchParams: !0 === c ? hB({
							stat: c
						}) : void 0
					}), {
						RemoteServices: h
					} = await g.json();
					return h.map(ki)
				}
				return b
			}

			function km(a) {
				async function b(b, c = {}) {
					await a.post("pin/remote/service/rm", {
						signal: c.signal,
						headers: c.headers,
						searchParams: hB({
							arg: b
						})
					})
				}
				return b
			}

			function kn(a) {
				let b = new hx(a);
				return {
					add: kk(b),
					ls: kl(b),
					rm: km(b)
				}
			}

			function ko(a) {
				let b = new hx(a);
				return {
					add: kd(b),
					ls: ke(b),
					rm: kf(b),
					rmAll: kg(b),
					service: kn(a)
				}
			}

			function kp(a) {
				return {
					addAll: j2(a),
					add: j3(a),
					ls: j5(a),
					rmAll: j6(a),
					rm: j7(a),
					remote: ko(a)
				}
			}
			let kq = a => Array.isArray(a) ? a.map(kr) : a,
				kr = a => fl(ks(a)),
				ks = a => dR.decode(a),
				kt = a => BigInt(`0x${fl(dR.decode(a),"base16")}`),
				ku = a => dR.encode(fx(a)),
				kv = hy(a => {
					async function b(b = {}) {
						let {
							Strings: c
						} = await (await a.post("pubsub/ls", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						}))
						.json();
						return kq(c) || []
					}
					return b
				}),
				kw = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("pubsub/peers", {
								signal: c.signal,
								searchParams: hB({
									arg: ku(b),
									...c
								}),
								headers: c.headers
							}),
							{
								Strings: e
							} = await d.json();
						return e || []
					}
					return b
				}),
				kx = hy(a => {
					async function b(b, c, d = {}) {
						let e = hB({
								arg: ku(b),
								...d
							}),
							f = new AbortController,
							g = ir(f.signal, d.signal),
							h = await a.post("pubsub/pub", {
								signal: g,
								searchParams: e,
								...await io([c], f, d.headers)
							});
						await h.text()
					}
					return b
				}),
				ky = gm("ipfs-http-client:pubsub:subscribe"),
				kz = (a, b) => hy(a => {
					async function c(c, d, e = {}) {
						e.signal = b.subscribe(c, d, e.signal);
						let f, g, h = new Promise((a, b) => {
								f = a, g = b
							}),
							i = setTimeout(() => f(), 1e3);
						return a.post("pubsub/sub", {
								signal: e.signal,
								searchParams: hB({
									arg: ku(c),
									...e
								}),
								headers: e.headers
							})
							.catch(a => {
								b.unsubscribe(c, d), g(a)
							})
							.then(a => {
								clearTimeout(i), a && (kA(a, {
									onMessage: a => {
										if (d) {
											if ("function" == typeof d) {
												d(a);
												return
											}
											"function" == typeof d.handleEvent && d.handleEvent(a)
										}
									},
									onEnd: () => b.unsubscribe(c, d),
									onError: e.onError
								}), f())
							}), h
					}
					return c
				})(a);
			async function kA(a, {
				onMessage: b,
				onEnd: c,
				onError: d
			}) {
				d = d || ky;
				try {
					for await (let e of a.ndjson()) try {
						if (!e.from) continue;
						b(null != e.from && null != e.seqno ? {
							type: "signed",
							from: hO(e.from),
							data: ks(e.data),
							sequenceNumber: kt(e.seqno),
							topic: kr(e.topicIDs[0]),
							key: ks(e.key ? ? "u"),
							signature: ks(e.signature ? ? "u")
						} : {
							type: "unsigned",
							data: ks(e.data),
							topic: kr(e.topicIDs[0])
						})
					} catch (f) {
						f.message = `Failed to parse pubsub message: ${f.message}`, d(f, !1, e)
					}
				} catch (g) {
					kB(g) || d(g, !0)
				} finally {
					c()
				}
			}
			let kB = a => {
					switch (a.type) {
						case "aborted":
						case "abort":
							return !0;
						default:
							return "AbortError" === a.name
					}
				},
				kC = (a, b) => {
					async function c(a, c) {
						b.unsubscribe(a, c)
					}
					return c
				};
			class kD {
				constructor() {
					this._subs = new Map
				}
				subscribe(a, b, c) {
					let d = this._subs.get(a) || [];
					if (d.find(a => a.handler === b)) throw Error(`Already subscribed to ${a} with this handler`);
					let e = new AbortController;
					return this._subs.set(a, [{
						handler: b,
						controller: e
					}].concat(d)), c && c.addEventListener("abort", () => this.unsubscribe(a, b)), e.signal
				}
				unsubscribe(a, b) {
					let c = this._subs.get(a) || [],
						d;
					b ? (this._subs.set(a, c.filter(a => a.handler !== b)), d = c.filter(a => a.handler === b)) : (this._subs.set(a, []), d = c), (this._subs.get(a) || [])
						.length || this._subs.delete(a), d.forEach(a => a.controller.abort())
				}
			}

			function kE(a) {
				let b = new kD;
				return {
					ls: kv(a),
					peers: kw(a),
					publish: kx(a),
					subscribe: kz(a, b),
					unsubscribe: kC(a, b)
				}
			}
			let kF = hy(a => {
					async function* b(b = {}) {
						let c = await a.post("refs/local", {
							signal: b.signal,
							transform: iE,
							searchParams: hB(b),
							headers: b.headers
						});
						yield* c.ndjson()
					}
					return b
				}),
				kG = hy((a, b) => {
					let c = async function*(b, c = {}) {
						let d = Array.isArray(b) ? b : [b],
							e = await a.post("refs", {
								signal: c.signal,
								searchParams: hB({
									arg: d.map(a => `${a instanceof Uint8Array?aM.decode(a):a}`),
									...c
								}),
								headers: c.headers,
								transform: iE
							});
						yield* e.ndjson()
					};
					return Object.assign(c, {
						local: kF(b)
					})
				}),
				kH = hy(a => {
					async function* b(b = {}) {
						let c = await a.post("repo/gc", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers,
							transform: a => ({
								err: a.Error ? Error(a.Error) : null,
								cid: (a.Key || {})["/"] ? aM.parse(a.Key["/"]) : null
							})
						});
						yield* c.ndjson()
					}
					return b
				}),
				kI = hy(a => {
					async function b(b = {}) {
						let c = await a.post("repo/stat", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							d = await c.json();
						return {
							numObjects: BigInt(d.NumObjects),
							repoSize: BigInt(d.RepoSize),
							repoPath: d.RepoPath,
							version: d.Version,
							storageMax: BigInt(d.StorageMax)
						}
					}
					return b
				}),
				kJ = hy(a => {
					async function b(b = {}) {
						let c = await (await a.post("repo/version", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}))
							.json();
						return c.Version
					}
					return b
				});

			function kK(a) {
				return {
					gc: kH(a),
					stat: kI(a),
					version: kJ(a)
				}
			}
			let kL = hy(a => {
				async function* b(b = {}) {
					let c = await a.post("stats/bw", {
						signal: b.signal,
						searchParams: hB(b),
						headers: b.headers,
						transform: a => ({
							totalIn: BigInt(a.TotalIn),
							totalOut: BigInt(a.TotalOut),
							rateIn: parseFloat(a.RateIn),
							rateOut: parseFloat(a.RateOut)
						})
					});
					yield* c.ndjson()
				}
				return b
			});

			function kM(a) {
				return {
					bitswap: hR(a),
					repo: kI(a),
					bw: kL(a)
				}
			}
			let kN = hy(a => {
					async function b(b = {}) {
						let c = await a.post("swarm/addrs", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							{
								Addrs: d
							} = await c.json();
						return Object.keys(d)
							.map(a => ({
								id: hO(a),
								addrs: (d[a] || [])
									.map(a => ge(a))
							}))
					}
					return b
				}),
				kO = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("swarm/connect", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							{
								Strings: e
							} = await d.json();
						return e || []
					}
					return b
				}),
				kP = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("swarm/disconnect", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							{
								Strings: e
							} = await d.json();
						return e || []
					}
					return b
				}),
				kQ = hy(a => {
					async function b(b = {}) {
						let c = await a.post("swarm/addrs/local", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							{
								Strings: d
							} = await c.json();
						return (d || [])
							.map(a => ge(a))
					}
					return b
				}),
				kR = hy(a => {
					async function b(b = {}) {
						let c = await a.post("swarm/peers", {
								signal: b.signal,
								searchParams: hB(b),
								headers: b.headers
							}),
							{
								Peers: d
							} = await c.json();
						return (d || [])
							.map(a => ({
								addr: ge(a.Addr),
								peer: hO(a.Peer),
								muxer: a.Muxer,
								latency: a.Latency,
								streams: a.Streams,
								direction: null == a.Direction ? void 0 : 0 === a.Direction ? "inbound" : "outbound"
							}))
					}
					return b
				});

			function kS(a) {
				return {
					addrs: kN(a),
					connect: kO(a),
					disconnect: kP(a),
					localAddrs: kQ(a),
					peers: kR(a)
				}
			}
			let kT = hy(a => {
					async function* b(b, c = {}) {
						let d = new AbortController,
							e = ir(d.signal, c.signal),
							{
								headers: f,
								body: g,
								total: h,
								parts: i
							} = await io(b, d, c.headers),
							[j, k] = "function" == typeof c.progress ? kU(h, i, c.progress) : [void 0, void 0],
							l = await a.post("add", {
								searchParams: hB({
									"stream-channels": !0,
									...c,
									progress: Boolean(j)
								}),
								onUploadProgress: k,
								signal: e,
								headers: f,
								body: g
							});
						for await (let m of l.ndjson()) void 0 !== (m = iE(m))
							.hash ? yield kW(m): j && j(m.bytes || 0, m.name)
					}
					return b
				}),
				kU = (a, b, c) => b ? [void 0, kV(a, b, c)] : [c, void 0],
				kV = (a, b, c) => {
					let d = 0,
						e = b.length;
					return ({
						loaded: f,
						total: g
					}) => {
						let h = Math.floor(f / g * a);
						for (; d < e;) {
							let {
								start: i,
								end: j,
								name: k
							} = b[d];
							if (h < j) {
								c(h - i, k);
								break
							}
							c(j - i, k), d += 1
						}
					}
				};

			function kW({
				name: a,
				hash: b,
				size: c,
				mode: d,
				mtime: e,
				mtimeNsecs: f
			}) {
				let g = {
					path: a,
					cid: aM.parse(b),
					size: parseInt(c)
				};
				return null != d && (g.mode = parseInt(d, 8)), null != e && (g.mtime = {
					secs: e,
					nsecs: f || 0
				}), g
			}

			function kX(a) {
				return "function" == typeof a.stream ? hX(a.stream()) : hX(new Response(a)
					.body)
			}
			async function* kY(a) {
				yield a
			}
			async function kZ(a) {
				if (hZ(a)) return kY(k$(a));
				if ("string" == typeof a || a instanceof String) return kY(k$(a.toString()));
				if (h$(a)) return kX(a);
				if (h0(a) && (a = hX(a)), Symbol.iterator in a || Symbol.asyncIterator in a) {
					let b = hW(a),
						{
							value: c,
							done: d
						} = await b.peek();
					if (d) return kY(new Uint8Array(0));
					if (b.push(c), Number.isInteger(c)) return kY(Uint8Array.from(await hY(b)));
					if (hZ(c) || "string" == typeof c || c instanceof String) return h3(b, k$)
				}
				throw f4(Error(`Unexpected input: ${a}`), "ERR_UNEXPECTED_INPUT")
			}

			function k$(a) {
				return a instanceof Uint8Array ? a : ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : a instanceof ArrayBuffer ? new Uint8Array(a) : Array.isArray(a) ? Uint8Array.from(a) : fx(a.toString())
			}
			async function* k_(a, b) {
				if (null == a) throw f4(Error(`Unexpected input: ${a}`), "ERR_UNEXPECTED_INPUT");
				if ("string" == typeof a || a instanceof String) {
					yield k0(a.toString(), b);
					return
				}
				if (hZ(a) || h$(a)) {
					yield k0(a, b);
					return
				}
				if (h0(a) && (a = hX(a)), Symbol.iterator in a || Symbol.asyncIterator in a) {
					let c = hW(a),
						{
							value: d,
							done: e
						} = await c.peek();
					if (e) {
						yield {
							content: []
						};
						return
					}
					if (c.push(d), Number.isInteger(d) || hZ(d) || "string" == typeof d || d instanceof String) {
						yield k0(c, b);
						return
					}
					throw f4(Error("Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead"), "ERR_UNEXPECTED_INPUT")
				}
				if (h_(a)) {
					yield k0(a, b);
					return
				}
				throw f4(Error('Unexpected input: cannot convert "' + typeof a + '" into ImportCandidate'), "ERR_UNEXPECTED_INPUT")
			}
			async function k0(a, b) {
				let {
					path: c,
					mode: d,
					mtime: e,
					content: f
				} = a, g = {
					path: c || "",
					mode: ig(d),
					mtime: ih(e)
				};
				return f ? g.content = await b(f) : c || (g.content = await b(a)), g
			}

			function k1(a) {
				return k_(a, kZ)
			}

			function k2(a) {
				let b = kT(a);
				return hy(() => {
					async function a(a, c = {}) {
						return await iQ(b(k1(a), c))
					}
					return a
				})(a)
			}
			let k3 = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("cat", {
							signal: c.signal,
							searchParams: hB({
								arg: b.toString(),
								...c
							}),
							headers: c.headers
						});
						yield* d.iterator()
					}
					return b
				}),
				k4 = hy(a => {
					let b = async (b = {}) => {
						let c = await a.post("commands", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return c.json()
					};
					return b
				}),
				k5 = hy(a => {
					let b = async (b, c = {}) => {
						let d = await a.post("dns", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							e = await d.json();
						return e.Path
					};
					return b
				}),
				k6 = hy(a => () => {
					let b = new URL(a.opts.base || "");
					return {
						host: b.hostname,
						port: b.port,
						protocol: b.protocol,
						pathname: b.pathname,
						"api-path": b.pathname
					}
				}),
				k7 = hy(a => {
					async function* b(b, c = {}) {
						let d = {
							arg: `${b instanceof Uint8Array?aM.decode(b):b}`,
							...c
						};
						d.compressionLevel && (d["compression-level"] = d.compressionLevel, delete d.compressionLevel);
						let e = await a.post("get", {
							signal: c.signal,
							searchParams: hB(d),
							headers: c.headers
						});
						yield* e.iterator()
					}
					return b
				}),
				k8 = hy(a => {
					async function b(b = {}) {
						let c = await a.post("id", {
								signal: b.signal,
								searchParams: hB({
									arg: b.peerId ? b.peerId.toString() : void 0,
									...b
								}),
								headers: b.headers
							}),
							d = await c.json(),
							e = {
								...iE(d)
							};
						return e.id = hO(e.id), e.addresses && (e.addresses = e.addresses.map(a => ge(a))), e
					}
					return b
				}),
				k9 = a => {
					let b = k8(a);
					async function c(a = {}) {
						let c = await b(a);
						return Boolean(c && c.addresses && c.addresses.length)
					}
					return c
				},
				la = hy((a, b) => {
					async function* c(c, d = {}) {
						let e = `${c instanceof Uint8Array?aM.decode(c):c}`;
						async function f(a) {
							let c = a.Hash;
							if (c.includes("/")) {
								let d = c.startsWith("/ipfs/") ? c : `/ipfs/${c}`,
									f = await jp(b)(d);
								c = f.cid
							} else c = aM.parse(c);
							let g = {
								name: a.Name,
								path: e + (a.Name ? `/${a.Name}` : ""),
								size: a.Size,
								cid: c,
								type: lb(a)
							};
							return a.Mode && (g.mode = parseInt(a.Mode, 8)), void 0 !== a.Mtime && null !== a.Mtime && (g.mtime = {
								secs: a.Mtime
							}, void 0 !== a.MtimeNsecs && null !== a.MtimeNsecs && (g.mtime.nsecs = a.MtimeNsecs)), g
						}
						let g = await a.post("ls", {
							signal: d.signal,
							searchParams: hB({
								arg: e,
								...d
							}),
							headers: d.headers
						});
						for await (let h of g.ndjson()) {
							if (!(h = h.Objects)) throw Error("expected .Objects in results");
							if (!(h = h[0])) throw Error("expected one array in results.Objects");
							let i = h.Links;
							if (!Array.isArray(i)) throw Error("expected one array in results.Objects[0].Links");
							if (!i.length) {
								yield f(h);
								return
							}
							yield* i.map(f)
						}
					}
					return c
				});

			function lb(a) {
				switch (a.Type) {
					case 1:
					case 5:
						return "dir";
					default:
						return "file"
				}
			}
			let lc = hy(a => {
					async function b(b = {}) {
						let c = await a.post("dns", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return iE(await c.json())
					}
					return b
				}),
				ld = hy(a => {
					async function* b(b, c = {}) {
						let d = await a.post("ping", {
							signal: c.signal,
							searchParams: hB({
								arg: `${b}`,
								...c
							}),
							headers: c.headers,
							transform: iE
						});
						yield* d.ndjson()
					}
					return b
				}),
				le = hy(a => {
					async function b(b, c = {}) {
						let d = await a.post("resolve", {
								signal: c.signal,
								searchParams: hB({
									arg: b,
									...c
								}),
								headers: c.headers
							}),
							{
								Path: e
							} = await d.json();
						return e
					}
					return b
				}),
				lf = hy(a => {
					let b = async (a = {}) => {
						throw f4(Error("Not implemented"), "ERR_NOT_IMPLEMENTED")
					};
					return b
				}),
				lg = hy(a => {
					async function b(b = {}) {
						let c = await a.post("shutdown", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						await c.text()
					}
					return b
				}),
				lh = hy(a => {
					async function b(b = {}) {
						let c = await a.post("version", {
							signal: b.signal,
							searchParams: hB(b),
							headers: b.headers
						});
						return {
							...iE(await c.json()),
							"ipfs-http-client": "1.0.0"
						}
					}
					return b
				});

			function li(a = {}) {
				let b = {
						name: eB.name,
						code: eB.code,
						encode: a => a,
						decode: a => a
					},
					c = Object.values(e1);
				(a.ipld && a.ipld.bases ? a.ipld.bases : [])
				.forEach(a => c.push(a));
				let d = new F({
						bases: c,
						loadBase: a.ipld && a.ipld.loadBase
					}),
					e = Object.values(e3);
				[o, p, r, s, b].concat(a.ipld && a.ipld.codecs || [])
					.forEach(a => e.push(a));
				let f = new H({
						codecs: e,
						loadCodec: a.ipld && a.ipld.loadCodec
					}),
					g = Object.values(e2);
				(a.ipld && a.ipld.hashers ? a.ipld.hashers : [])
				.forEach(a => g.push(a));
				let h = new J({
						hashers: g,
						loadHasher: a.ipld && a.ipld.loadHasher
					}),
					i = {
						add: k2(a),
						addAll: kT(a),
						bitswap: hU(a),
						block: iw(a),
						bootstrap: iC(a),
						cat: k3(a),
						commands: k4(a),
						config: iM(a),
						dag: iV(f, a),
						dht: i9(a),
						diag: jd(a),
						dns: k5(a),
						files: jt(a),
						get: k7(a),
						getEndpointConfig: k6(a),
						id: k8(a),
						isOnline: k9(a),
						key: jB(a),
						log: jF(a),
						ls: la(a),
						mount: lc(a),
						name: jM(a),
						object: jY(f, a),
						pin: kp(a),
						ping: ld(a),
						pubsub: kE(a),
						refs: kG(a),
						repo: kK(a),
						resolve: le(a),
						start: lf(a),
						stats: kM(a),
						stop: lg(a),
						swarm: kS(a),
						version: lh(a),
						bases: d,
						codecs: f,
						hashers: h
					};
				return i
			}
			c(89528), c(27295)
		}
	}
])
//# sourceMappingURL=5387-e859a84d28e0c624.js.map