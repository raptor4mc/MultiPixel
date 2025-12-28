export class Renderer {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.gl = canvas.getContext("webgl");

    if (!this.gl) {
      alert("WebGL not supported");
      return;
    }

    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.initGL();
    this.buildMeshes();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  initGL() {
    const gl = this.gl;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.5, 0.7, 1.0, 1.0);

    const vsSource = `
      attribute vec3 aPos;
      uniform mat4 uProj;
      uniform mat4 uView;
      void main() {
        gl_Position = uProj * uView * vec4(aPos, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(0.6, 0.6, 0.6, 1.0);
      }
    `;

    const vs = this.compile(gl.VERTEX_SHADER, vsSource);
    const fs = this.compile(gl.FRAGMENT_SHADER, fsSource);

    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);

    gl.useProgram(this.program);

    this.aPos = gl.getAttribLocation(this.program, "aPos");
    this.uProj = gl.getUniformLocation(this.program, "uProj");
    this.uView = gl.getUniformLocation(this.program, "uView");

    this.meshes = [];
  }

  compile(type, src) {
    const gl = this.gl;
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(s);
    }
    return s;
  }

  buildMeshes() {
    const gl = this.gl;
    this.meshes.length = 0;

    this.world.chunks.forEachChunk((cx, cz, chunk) => {
      const mesh = this.world.chunks.buildMesh(cx, cz, chunk, this.world);
      if (mesh.vertices.length === 0) return;

      const vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertices), gl.STATIC_DRAW);

      const ibo = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW);

      this.meshes.push({
        vbo,
        ibo,
        count: mesh.indices.length
      });
    });
  }

  render() {
    const gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const p = this.world.player;

    // Projection
    const aspect = this.canvas.width / this.canvas.height;
    const proj = mat4Perspective(70, aspect, 0.1, 1000);
    gl.uniformMatrix4fv(this.uProj, false, proj);

    // View
    const view = mat4View(
      p.pos.x,
      p.pos.y + p.collider.height * 0.9,
      p.pos.z,
      p.pitch,
      p.yaw
    );
    gl.uniformMatrix4fv(this.uView, false, view);

    for (const m of this.meshes) {
      gl.bindBuffer(gl.ARRAY_BUFFER, m.vbo);
      gl.vertexAttribPointer(this.aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(this.aPos);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.ibo);
      gl.drawElements(gl.TRIANGLES, m.count, gl.UNSIGNED_SHORT, 0);
    }
  }
}

/* ================= MATH ================= */

function mat4Perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan((fov * Math.PI) / 360);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, (2 * far * near) * nf, 0
  ]);
}

function mat4View(x, y, z, pitch, yaw) {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);

  const fx = sy * cp;
  const fy = -sp;
  const fz = cy * cp;

  const lx = -cy;
  const lz = sy;

  return new Float32Array([
     lx, 0, fx, 0,
     0,  1, fy, 0,
    -lz, 0, fz, 0,
     x * lx + z * -lz,
    -y,
     x * fx + z * fz,
     1
  ]);
}
