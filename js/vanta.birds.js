! function(e) {
  var t = {};

  function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
          i: i,
          l: !1,
          exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: i
      })
  }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var r in e) n.d(i, r, function(t) {
              return e[t]
          }.bind(null, r));
      return i
  }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 4)
}([function(e, t, n) {
  "use strict";

  function i(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e
  }

  function r() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600
  }
  n.d(t, "c", function() {
      return i
  }), n.d(t, "d", function() {
      return r
  }), n.d(t, "h", function() {
      return o
  }), n.d(t, "g", function() {
      return s
  }), n.d(t, "f", function() {
      return a
  }), n.d(t, "e", function() {
      return l
  }), n.d(t, "a", function() {
      return u
  }), n.d(t, "b", function() {
      return h
  }), Number.prototype.clamp = function(e, t) {
      return Math.min(Math.max(this, e), t)
  };
  const o = e => e[Math.floor(Math.random() * e.length)];

  function s(e, t) {
      return null == e && (e = 0), null == t && (t = 1), e + Math.random() * (t - e)
  }

  function a(e, t) {
      return null == e && (e = 0), null == t && (t = 1), Math.floor(e + Math.random() * (t - e + 1))
  }
  var l = e => document.querySelector(e);
  const u = e => "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
      h = (e, t = 1) => {
          const n = u(e),
              i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
              r = i ? {
                  r: parseInt(i[1], 16),
                  g: parseInt(i[2], 16),
                  b: parseInt(i[3], 16)
              } : null;
          return "rgba(" + r.r + "," + r.g + "," + r.b + "," + t + ")"
      }
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", function() {
      return r
  });
  var i = n(0);
  window && !window.VANTA && (window.VANTA = {
      version: "0.3.1"
  });
  const r = window.VANTA || {};
  r.register || (r.register = ((e, t) => {
      r[e] = (e => new t(e))
  }));
  var o = function() {
      return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments)
  };
  r.VantaBase = class {
      constructor(e = {}) {
          var t, n, s, a;
          if (r.current = this, this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(i.c)({}, this.defaultOptions), e instanceof HTMLElement || "string" == typeof e ? Object(i.c)(this.options, {
                  el: e
              }) : Object(i.c)(this.options, e), this.el = this.options.el, null == this.el) o('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement || (a = this.el, this.el = Object(i.e)(a), this.el))) return void o("Cannot find element", a);
          for (s = 0; s < this.el.children.length; s++) t = this.el.children[s], "static" === getComputedStyle(t).position && (t.style.position = "relative"), "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), "object" == typeof THREE && this.initThree(), this.setSize(), this.uniforms = {
              u_time: {
                  type: "f",
                  value: 1
              },
              u_resolution: {
                  type: "v2",
                  value: new THREE.Vector2(1, 1)
              },
              u_mouse: {
                  type: "v2",
                  value: new THREE.Vector2(0, 0)
              }
          };
          try {
              this.init()
          } catch (e) {
              return n = e, o("Init error"), o(n), this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = this.color2Hex(this.options.backgroundColor)))
          }
          window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), this.el.addEventListener("mousemove", this.onMouseMoveWrapper, !1), window.addEventListener("scroll", this.onMouseMoveWrapper)
      }
      applyCanvasStyles(e, t = {}) {
          Object(i.c)(e.style, {
              position: "absolute",
              zIndex: 0,
              top: 0,
              left: 0,
              background: ""
          }), Object(i.c)(e.style, t), e.classList.add("vanta-canvas")
      }
      initThree() {
          this.renderer = new THREE.WebGLRenderer({
              alpha: !0,
              antialias: !0
          }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new THREE.Scene
      }
      onMouseMoveWrapper(e) {
          var t, n, i;
          t = this.renderer.domElement.getBoundingClientRect(), n = this.mouseX = e.clientX - t.left, i = this.mouseY = e.clientY - t.top, n >= 0 && i >= 0 && !this.options.mouseEase && this.triggerMouseMove(n, i)
      }
      triggerMouseMove(e, t) {
          this.uniforms && (this.uniforms.u_mouse.value.x = e / this.scale, this.uniforms.u_mouse.value.y = t / this.scale);
          const n = e / this.width,
              i = t / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(n, i)
      }
      setSize() {
          this.scale || (this.scale = 1), Object(i.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight
      }
      resize() {
          var e, t;
          this.setSize(), null != (e = this.camera) && (e.aspect = this.width / this.height), null != (t = this.camera) && "function" == typeof t.updateProjectionMatrix && t.updateProjectionMatrix(), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize()
      }
      animationLoop() {
          var e, t, n, i, r, o, s, a;
          return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += null != (o = this.options.speed) ? o : 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), e = this.el.offsetHeight, t = this.el.getBoundingClientRect(), a = null != (s = window.pageYOffset) ? s : (document.documentElement || document.body.parentNode || document.body).scrollTop, i = (r = t.top + a) - window.innerHeight, n = r + e, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), i <= a && a <= n && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop)
      }
      restart() {
          if (this.scene)
              for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init()
      }
      init() {
          "function" == typeof this.onInit && this.onInit()
      }
      destroy() {
          "function" == typeof this.onDestroy && this.onDestroy(), this.el.removeEventListener("mousemove", this.onMouseMoveWrapper), window.removeEventListener("scroll", this.onMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null)
      }
  }, t.b = r.VantaBase
}, , , function(e, t, n) {
  "use strict";
  n.r(t);
  var i = n(1);
  let r = 32,
      o = r * r;
  const s = 800,
      a = s / 2,
      l = "uniform float time;\nuniform float delta;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D( texturePosition, uv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, uv ).xyz;\n\n  float phase = tmpPos.w;\n\n  phase = mod( ( phase + delta +\n    length( velocity.xz ) * delta * 3. +\n    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );\n\n  gl_FragColor = vec4( position + velocity * delta * 15. , phase );\n\n}",
      u = "uniform float time;\nuniform float testing;\nuniform float delta; // about 0.016\nuniform float separationDistance; // 20\nuniform float alignmentDistance; // 40\nuniform float cohesionDistance;\nuniform float speedLimit;\nuniform float freedomFactor;\nuniform vec3 predator;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nconst float PI = 3.141592653589793;\nconst float PI_2 = PI * 2.0;\n// const float VISION = PI * 0.55;\n\nfloat zoneRadius = 40.0;\nfloat zoneRadiusSquared = 1600.0;\n\nfloat separationThresh = 0.45;\nfloat alignmentThresh = 0.65;\n\nconst float UPPER_BOUNDS = BOUNDS;\nconst float LOWER_BOUNDS = -UPPER_BOUNDS;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;\n  separationThresh = separationDistance / zoneRadius;\n  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;\n  zoneRadiusSquared = zoneRadius * zoneRadius;\n\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec3 birdPosition, birdVelocity;\n\n  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;\n  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;\n\n  float dist;\n  vec3 dir; // direction\n  float distSquared;\n\n  float separationSquared = separationDistance * separationDistance;\n  float cohesionSquared = cohesionDistance * cohesionDistance;\n\n  float f;\n  float percent;\n\n  vec3 velocity = selfVelocity;\n\n  float limit = speedLimit;\n\n  dir = predator * UPPER_BOUNDS - selfPosition;\n  dir.z = 0.;\n  // dir.z *= 0.6;\n  dist = length( dir );\n  distSquared = dist * dist;\n\n  float preyRadius = 150.0;\n  float preyRadiusSq = preyRadius * preyRadius;\n\n  // move birds away from predator\n  if (dist < preyRadius) {\n\n    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;\n    velocity -= normalize( dir ) * f;\n    limit -= 5.0;\n  }\n\n  // if (testing == 0.0) {}\n  // if ( rand( uv + time ) < freedomFactor ) {}\n\n  // Attract flocks to the center\n  vec3 central = vec3( 0., 0., 0. );\n  dir = selfPosition - central;\n  dist = length( dir );\n\n  dir.y *= 2.5;\n  velocity -= normalize( dir ) * delta * 5.;\n\n  for (float y=0.0;y<height;y++) {\n    for (float x=0.0;x<width;x++) {\n\n      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;\n      birdPosition = texture2D( texturePosition, ref ).xyz;\n\n      dir = birdPosition - selfPosition;\n      dist = length(dir);\n\n      if (dist < 0.0001) continue;\n\n      distSquared = dist * dist;\n\n      if (distSquared > zoneRadiusSquared ) continue;\n\n      percent = distSquared / zoneRadiusSquared;\n\n      if ( percent < separationThresh ) { // low\n\n        // Separation - Move apart for comfort\n        f = (separationThresh / percent - 1.0) * delta;\n        velocity -= normalize(dir) * f;\n\n      } else if ( percent < alignmentThresh ) { // high\n\n        // Alignment - fly the same direction\n        float threshDelta = alignmentThresh - separationThresh;\n        float adjustedPercent = ( percent - separationThresh ) / threshDelta;\n\n        birdVelocity = texture2D( textureVelocity, ref ).xyz;\n\n        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;\n        velocity += normalize(birdVelocity) * f;\n\n      } else {\n\n        // Attraction / Cohesion - move closer\n        float threshDelta = 1.0 - alignmentThresh;\n        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;\n\n        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;\n\n        velocity += normalize(dir) * f;\n\n      }\n    }\n  }\n\n  // this make tends to fly around than down or up\n  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);\n\n  // Speed Limits\n  if ( length( velocity ) > limit ) {\n    velocity = normalize( velocity ) * limit;\n  }\n\n  gl_FragColor = vec4( velocity, 1.0 );\n\n}",
      h = "attribute vec2 reference;\nattribute float birdVertex;\n\nattribute vec3 birdColor;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nvarying vec4 vColor;\nvarying float z;\n\nuniform float time;\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, reference );\n  vec3 pos = tmpPos.xyz;\n  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);\n\n  vec3 newPosition = position;\n\n  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n    // flap wings\n    newPosition.y = sin( tmpPos.w ) * 5.;\n  }\n\n  newPosition = mat3( modelMatrix ) * newPosition;\n\n  velocity.z *= -1.;\n  float xz = length( velocity.xz );\n  float xyz = 1.;\n  float x = sqrt( 1. - velocity.y * velocity.y );\n\n  float cosry = velocity.x / xz;\n  float sinry = velocity.z / xz;\n\n  float cosrz = x / xyz;\n  float sinrz = velocity.y / xyz;\n\n  mat3 maty =  mat3(\n    cosry, 0, -sinry,\n    0    , 1, 0     ,\n    sinry, 0, cosry\n  );\n\n  mat3 matz =  mat3(\n    cosrz , sinrz, 0,\n    -sinrz, cosrz, 0,\n    0     , 0    , 1\n  );\n  newPosition =  maty * matz * newPosition;\n  newPosition += pos;\n  z = newPosition.z;\n\n  vColor = vec4( birdColor, 1.0 );\n  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );\n}",
      c = "varying vec4 vColor;\nvarying float z;\nuniform vec3 color;\nvoid main() {\n  // Fake colors for now\n  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;\n  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;\n  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;\n  gl_FragColor = vec4( rr, gg, bb, 1. );\n}",
      d = function(e) {
          const t = e.image.data;
          let n = 0;
          const i = t.length;
          return (() => {
              const e = [];
              for (; n < i;) {
                  const i = Math.random() * s - a,
                      r = Math.random() * s - a,
                      o = Math.random() * s - a;
                  t[n + 0] = i, t[n + 1] = r, t[n + 2] = o, t[n + 3] = 1, e.push(n += 4)
              }
              return e
          })()
      },
      f = function(e) {
          const t = e.image.data;
          let n = 0;
          const i = t.length;
          return (() => {
              const e = [];
              for (; n < i;) {
                  const i = Math.random() - .5,
                      r = Math.random() - .5,
                      o = Math.random() - .5;
                  t[n + 0] = 10 * i, t[n + 1] = 10 * r, t[n + 2] = 10 * o, t[n + 3] = 1, e.push(n += 4)
              }
              return e
          })()
      };
  THREE.BirdGeometry = function(e) {
      e.quantity && (r = Math.pow(2, e.quantity), o = r * r);
      const t = 3 * o,
          n = 3 * t;
      THREE.BufferGeometry.call(this);
      const i = new THREE.BufferAttribute(new Float32Array(3 * n), 3),
          s = new THREE.BufferAttribute(new Float32Array(3 * n), 3),
          a = new THREE.BufferAttribute(new Float32Array(2 * n), 2),
          l = new THREE.BufferAttribute(new Float32Array(n), 1);
      this.addAttribute("position", i), this.addAttribute("birdColor", s), this.addAttribute("reference", a), this.addAttribute("birdVertex", l);
      let u = 0;
      const h = function() {
              for (let e = 0; e < arguments.length; e++) i.array[u++] = arguments[e]
          },
          c = e.wingSpan || 20;
      for (let e = 0; e < o; e++) h(0, -0, -20, 0, 4, -20, 0, 0, 30), h(0, 0, -15, -c, 0, 0, 0, 0, 15), h(0, 0, 15, c, 0, 0, 0, 0, -15);
      const d = {};
      for (u = 0; u < 3 * t; u++) {
          const t = ~~(u / 3),
              n = t % r / r,
              i = ~~(t / r) / r,
              h = null != e.color1 ? e.color1 : 4456448,
              c = null != e.color2 ? e.color2 : 6684672,
              f = new THREE.Color(h),
              m = new THREE.Color(c),
              p = ~~(u / 9) / o,
              v = p.toString(),
              y = -1 != e.colorMode.indexOf("Gradient");
          let g, x;
          if (x = y ? Math.random() : p, !y && d[v]) g = d[v];
          else if (0 == e.colorMode.indexOf("variance")) {
              const e = (f.r + Math.random() * m.r).clamp(0, 1),
                  t = (f.g + Math.random() * m.g).clamp(0, 1),
                  n = (f.b + Math.random() * m.b).clamp(0, 1);
              g = new THREE.Color(e, t, n)
          } else g = 0 == e.colorMode.indexOf("mix") ? new THREE.Color(h + x * c) : f.lerp(m, x);
          y || d[v] || (d[v] = g), s.array[3 * u + 0] = g.r, s.array[3 * u + 1] = g.g, s.array[3 * u + 2] = g.b, a.array[2 * u] = n, a.array[2 * u + 1] = i, l.array[u] = u % 9
      }
      return this.scale(.2, .2, .2)
  }, THREE.BirdGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
  class m extends i.b {
      static initClass() {
          this.prototype.defaultOptions = {
              backgroundColor: 465199,
              color1: 16711680,
              color2: 53759,
              colorMode: "varianceGradient",
              wingSpan: 30,
              speedLimit: 5,
              separation: 20,
              alignment: 20,
              cohesion: 20,
              quantity: 5
          }
      }
      initComputeRenderer() {
          this.gpuCompute = new function(e, t, n) {
              this.variables = [], this.currentTextureIndex = 0;
              var i = new THREE.Scene,
                  r = new THREE.Camera;
              r.position.z = 1;
              var o = {
                      texture: {
                          value: null
                      }
                  },
                  s = u("uniform sampler2D texture;\n\nvoid main() {\n\n\tvec2 uv = gl_FragCoord.xy / resolution.xy;\n\n\tgl_FragColor = texture2D( texture, uv );\n\n}\n", o),
                  a = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), s);

              function l(n) {
                  n.defines.resolution = "vec2( " + e.toFixed(1) + ", " + t.toFixed(1) + " )"
              }

              function u(e, t) {
                  t = t || {};
                  var n = new THREE.ShaderMaterial({
                      uniforms: t,
                      vertexShader: "void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n",
                      fragmentShader: e
                  });
                  return l(n), n
              }
              i.add(a), this.addVariable = function(e, t, n) {
                  var i = {
                      name: e,
                      initialValueTexture: n,
                      material: this.createShaderMaterial(t),
                      dependencies: null,
                      renderTargets: [],
                      wrapS: null,
                      wrapT: null,
                      minFilter: THREE.NearestFilter,
                      magFilter: THREE.NearestFilter
                  };
                  return this.variables.push(i), i
              }, this.setVariableDependencies = function(e, t) {
                  e.dependencies = t
              }, this.init = function() {
                  if (!n.extensions.get("OES_texture_float")) return "No OES_texture_float support for float textures.";
                  if (0 === n.capabilities.maxVertexTextures) return "No support for vertex shader textures.";
                  for (var i = 0; i < this.variables.length; i++) {
                      var r = this.variables[i];
                      r.renderTargets[0] = this.createRenderTarget(e, t, r.wrapS, r.wrapT, r.minFilter, r.magFilter), r.renderTargets[1] = this.createRenderTarget(e, t, r.wrapS, r.wrapT, r.minFilter, r.magFilter), this.renderTexture(r.initialValueTexture, r.renderTargets[0]), this.renderTexture(r.initialValueTexture, r.renderTargets[1]);
                      var o = r.material,
                          s = o.uniforms;
                      if (null !== r.dependencies)
                          for (var a = 0; a < r.dependencies.length; a++) {
                              var l = r.dependencies[a];
                              if (l.name !== r.name) {
                                  for (var u = !1, h = 0; h < this.variables.length; h++)
                                      if (l.name === this.variables[h].name) {
                                          u = !0;
                                          break
                                      }
                                  if (!u) return "Variable dependency not found. Variable=" + r.name + ", dependency=" + l.name
                              }
                              s[l.name] = {
                                  value: null
                              }, o.fragmentShader = "\nuniform sampler2D " + l.name + ";\n" + o.fragmentShader
                          }
                  }
                  return this.currentTextureIndex = 0, null
              }, this.compute = function() {
                  for (var e = this.currentTextureIndex, t = 0 === this.currentTextureIndex ? 1 : 0, n = 0, i = this.variables.length; n < i; n++) {
                      var r = this.variables[n];
                      if (null !== r.dependencies)
                          for (var o = r.material.uniforms, s = 0, a = r.dependencies.length; s < a; s++) {
                              var l = r.dependencies[s];
                              o[l.name].value = l.renderTargets[e].texture
                          }
                      this.doRenderTarget(r.material, r.renderTargets[t])
                  }
                  this.currentTextureIndex = t
              }, this.getCurrentRenderTarget = function(e) {
                  return e.renderTargets[this.currentTextureIndex]
              }, this.getAlternateRenderTarget = function(e) {
                  return e.renderTargets[0 === this.currentTextureIndex ? 1 : 0]
              }, this.addResolutionDefine = l, this.createShaderMaterial = u, this.createRenderTarget = function(n, i, r, o, s, a) {
                  return n = n || e, i = i || t, r = r || THREE.ClampToEdgeWrapping, o = o || THREE.ClampToEdgeWrapping, s = s || THREE.NearestFilter, a = a || THREE.NearestFilter, new THREE.WebGLRenderTarget(n, i, {
                      wrapS: r,
                      wrapT: o,
                      minFilter: s,
                      magFilter: a,
                      format: THREE.RGBAFormat,
                      type: /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType,
                      stencilBuffer: !1
                  })
              }, this.createTexture = function(n, i) {
                  n = n || e, i = i || t;
                  var r = new Float32Array(n * i * 4),
                      o = new THREE.DataTexture(r, e, t, THREE.RGBAFormat, THREE.FloatType);
                  return o.needsUpdate = !0, o
              }, this.renderTexture = function(e, t) {
                  o.texture.value = e, this.doRenderTarget(s, t), o.texture.value = null
              }, this.doRenderTarget = function(e, t) {
                  a.material = e, n.render(i, r, t), a.material = s
              }
          }(r, r, this.renderer);
          const e = this.gpuCompute.createTexture(),
              t = this.gpuCompute.createTexture();
          d(e), f(t), this.velocityVariable = this.gpuCompute.addVariable("textureVelocity", u, t), this.positionVariable = this.gpuCompute.addVariable("texturePosition", l, e), this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]), this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]), this.positionUniforms = this.positionVariable.material.uniforms, this.velocityUniforms = this.velocityVariable.material.uniforms, this.positionUniforms.time = {
              value: 0
          }, this.positionUniforms.delta = {
              value: 0
          }, this.velocityUniforms.time = {
              value: 1
          }, this.velocityUniforms.delta = {
              value: 0
          }, this.velocityUniforms.testing = {
              value: 1
          }, this.velocityUniforms.separationDistance = {
              value: 1
          }, this.velocityUniforms.alignmentDistance = {
              value: 1
          }, this.velocityUniforms.cohesionDistance = {
              value: 1
          }, this.velocityUniforms.speedLimit = {
              value: 1
          }, this.velocityUniforms.freedomFactor = {
              value: 1
          }, this.velocityUniforms.predator = {
              value: new THREE.Vector3
          }, this.velocityVariable.material.defines.BOUNDS = s.toFixed(2), this.velocityVariable.wrapS = THREE.RepeatWrapping, this.velocityVariable.wrapT = THREE.RepeatWrapping, this.positionVariable.wrapS = THREE.RepeatWrapping, this.positionVariable.wrapT = THREE.RepeatWrapping;
          const n = this.gpuCompute.init();
          null !== n && console.error(n)
      }
      initBirds() {
          const e = new THREE.BirdGeometry(this.options);
          this.birdUniforms = {
              color: {
                  value: new THREE.Color(16720384)
              },
              texturePosition: {
                  value: null
              },
              textureVelocity: {
                  value: null
              },
              time: {
                  value: 1
              },
              delta: {
                  value: 0
              }
          };
          const t = new THREE.ShaderMaterial({
                  uniforms: this.birdUniforms,
                  vertexShader: h,
                  fragmentShader: c,
                  side: THREE.DoubleSide
              }),
              n = new THREE.Mesh(e, t);
          return n.rotation.y = Math.PI / 2, n.matrixAutoUpdate = !1, n.updateMatrix(), this.scene.add(n)
      }
      onInit() {
          this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3e3), this.camera.position.z = 350, this.fog = new THREE.Fog(16777215, 100, 1e3), this.mouseX = this.mouseY = 0;
          try {
              this.initComputeRenderer(), this.valuesChanger = this.valuesChanger.bind(this), this.valuesChanger(), this.initBirds()
          } catch (e) {
              console.error("[vanta.js] birds init error: ", e)
          }
      }
      valuesChanger() {
          return this.velocityUniforms.separationDistance.value = this.options.separation, this.velocityUniforms.alignmentDistance.value = this.options.alignment, this.velocityUniforms.speedLimit.value = this.options.speedLimit, this.velocityUniforms.cohesionDistance.value = this.options.cohesion
      }
      onUpdate() {
          this.now = performance.now(), this.last || (this.last = this.now);
          let e = (this.now - this.last) / 1e3;
          return e > 1 && (e = 1), this.last = this.now, this.positionUniforms.time.value = this.now, this.positionUniforms.delta.value = e, this.velocityUniforms.time.value = this.now, this.velocityUniforms.delta.value = e, this.birdUniforms.time.value = this.now, this.birdUniforms.delta.value = e, this.velocityUniforms.predator.value.set(this.mouseX, -this.mouseY, 0), this.mouseX = 1e4, this.mouseY = 1e4, this.gpuCompute.compute(), this.birdUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture, this.birdUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture
      }
      onMouseMove(e, t) {
          return this.mouseX = e - .5, this.mouseY = t - .5
      }
      onDestroy() {}
      onResize() {}
  }
  m.initClass(), i.a.register("BIRDS", m)
}]);