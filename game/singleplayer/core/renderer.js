export class Renderer {
  constructor(canvas) {
    this.gl = canvas.getContext("webgl");
    if (!this.gl) throw new Error("WebGL not supported");

    this.program = this.createProgram();
    this.posLoc = this.gl.getAttribLocation(this.program, "aPos");
    this.mvpLoc = this.gl.getUniformLocation(this.program, "uMVP");

    this.buffers = [];
  }

  createProgram() {
    const vs = `
      attribute vec3 aPos;
      uniform mat4 uMVP;
      void main() {
        gl_Position = uMVP * vec4(aPos, 1.0);
      }
    `;
    const fs = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(0.6, 0.8, 0.5, 1.0);
      }
    `;
    const gl = this.gl;

    const v = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(v, vs);
    gl.compileShader(v);

    const f = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(f, fs);
    gl.compileShader(f);

    const p = gl.createProgram();
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    return p;
  }

  clear() {
    const gl = this.gl;
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.5, 0.7, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  render(world, camera) {
    const gl = this.gl;
    gl.useProgram(this.program);
    this.clear();

    const proj = mat4.perspective([], Math.PI / 3, gl.canvas.width / gl.canvas.height, 0.1, 1000);
    const view = mat4.create();

    mat4.rotateX(view, view, camera.rotation[0]);
    mat4.rotateY(view, view, camera.rotation[1]);
    mat4.translate(view, view, [
      -camera.position[0],
      -camera.position[1],
      -camera.position[2]
    ]);

    const mvp = mat4.multiply([], proj, view);
    gl.uniformMatrix4fv(this.mvpLoc, false, mvp);

    world.chunks.forEachChunk((cx, cz, chunk) => {
      const mesh = world.chunks.buildMesh(cx, cz, chunk, world);
      if (mesh.vertices.length === 0) retu
