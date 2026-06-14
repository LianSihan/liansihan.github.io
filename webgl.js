/* ------------------------------------------------------------------
   Ambient WebGL flow-field. Renders a domain-warped noise field in
   the site's two accent colours over the ink base. Reacts to the
   pointer, pauses on prefers-reduced-motion, and falls back to a CSS
   gradient if WebGL is unavailable. No dependencies.

   Usage:  initFlowField('hero-canvas');
------------------------------------------------------------------- */

function initFlowField(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const gl =
    canvas.getContext('webgl', { antialias: false, alpha: false }) ||
    canvas.getContext('experimental-webgl');

  // Graceful fallback: keep the CSS gradient that's already behind it.
  if (!gl) {
    canvas.classList.add('webgl-unsupported');
    return;
  }

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const vert = `
    attribute vec2 a_pos;
    void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
  `;

  const frag = `
    precision highp float;
    uniform vec2  u_res;
    uniform float u_time;
    uniform vec2  u_mouse;

    float hash(vec2 p){
      p = fract(p * vec2(123.34, 345.45));
      p += dot(p, p + 34.345);
      return fract(p.x * p.y);
    }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 6; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
      return v;
    }

    void main(){
      vec2 uv = gl_FragCoord.xy / u_res.xy;
      vec2 p  = uv;
      p.x *= u_res.x / u_res.y;

      float t = u_time * 0.05;
      vec2  m = (u_mouse - 0.5) * 0.45;

      vec2 q = vec2(fbm(p + t + m), fbm(p + vec2(5.2, 1.3) - t));
      vec2 r = vec2(
        fbm(p + q * 1.6 + vec2(1.7, 9.2) + t * 0.5),
        fbm(p + q * 1.6 + vec2(8.3, 2.8) - t * 0.3)
      );
      float f = fbm(p + r * 1.4);

      vec3 ink   = vec3(0.043, 0.055, 0.078);
      vec3 deep  = vec3(0.075, 0.105, 0.185);
      vec3 coral = vec3(1.000, 0.478, 0.270);
      vec3 mint  = vec3(0.431, 0.905, 0.847);

      vec3 col = mix(ink, deep, clamp(f * 1.4, 0.0, 1.0));
      col = mix(col, coral, smoothstep(0.55, 0.96, f + r.x * 0.30) * 0.55);
      col = mix(col, mint,  smoothstep(0.50, 0.92, q.y) * 0.18);

      float vig = smoothstep(1.25, 0.20, length(uv - 0.5));
      col *= mix(0.55, 1.05, vig);

      float g = hash(gl_FragCoord.xy + u_time) * 0.045 - 0.0225;
      col += g;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, vert);
  const fs = compile(gl.FRAGMENT_SHADER, frag);
  if (!vs || !fs) {
    canvas.classList.add('webgl-unsupported');
    return;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  // Full-screen triangle.
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW
  );
  const loc = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, 'u_res');
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    mouse.tx = e.clientX / window.innerWidth;
    mouse.ty = 1.0 - e.clientY / window.innerHeight;
  });

  resize();

  const start = performance.now();

  function render(now) {
    // Ease the pointer for a softer follow.
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    const t = reduceMotion ? 8.0 : (now - start) / 1000;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, t);
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    if (!reduceMotion) requestAnimationFrame(render);
  }

  if (reduceMotion) {
    // Draw one static frame only.
    requestAnimationFrame(render);
  } else {
    requestAnimationFrame(render);
  }

  // Recover from a lost context (tab switch / GPU reset).
  canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
  canvas.addEventListener('webglcontextrestored', () => location.reload());
}
