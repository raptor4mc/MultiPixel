export class Renderer {
  constructor(canvas) {
    this.gl = canvas.getContext("webgl");
    if (!this.gl) throw new Error("WebGL not supported");

    this.program = this.createProgram();
    this.posLoc = this.gl.getAttribLocation(this.program, "aPos");
    this.mvpLoc = this.gl.getUniformLocation(this.program, "uMVP");
  }

  createProgram() {
    const gl = this.gl;

    const vsSource = `
      attribute vec3 aPos;
      uniform mat4 uMVP;
      void main() {
        gl_Position = uMVP * vec4(aPos, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(0.6, 0.8, 0.5, 1.0);
      }
    `;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSource);
    gl.compileShader(fs);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    return program;
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

    const proj = mat4.perspective(
      [],
      Math.PI / 3,
      gl.canvas.width / gl.canvas.height,
      0.1,
      1000
    );

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
      if (!mesh || mesh.vertices.length === 0) return;

      const vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(mesh.vertices),
        gl.STATIC_DRAW
      );

      const ibo = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(mesh.indices),
        gl.STATIC_DRAW
      );

      gl.enableVertexAttribArray(this.posLoc);
      gl.vertexAttribPointer(this.posLoc, 3, gl.FLOAT, false, 0, 0);

      gl.drawElements(
        gl.TRIANGLES,
        mesh.indices.length,
        gl.UNSIGNED_SHORT,
        0
      );
    });
  }
}
