export function vec3(x=0,y=0,z=0){return {x,y,z};}

export class Renderer {
  constructor(canvas, world) {
    this.gl = canvas.getContext("webgl");
    this.world = world;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const gl = this.gl;

    gl.enable(gl.DEPTH_TEST);

    // --- SHADERS ---
    const vs = `
      attribute vec3 aPos;
      uniform mat4 uProj;
      uniform mat4 uView;
      void main(){
        gl_Position = uProj * uView * vec4(aPos,1.0);
      }
    `;
    const fs = `
      precision mediump float;
      void main(){
        gl_FragColor = vec4(0.6,0.8,0.6,1.0);
      }
    `;

    this.program = this.createProgram(vs, fs);
    gl.useProgram(this.program);

    this.aPos = gl.getAttribLocation(this.program, "aPos");
    this.uProj = gl.getUniformLocation(this.program, "uProj");
    this.uView = gl.getUniformLocation(this.program, "uView");

    this.meshes = [];
    this.buildMeshes();
  }

  buildMeshes() {
    const gl = this.gl;

    this.world.chunks.forEachChunk((cx, cz, chunk) => {
      const { vertices, indices } =
        this.world.chunks.buildMesh(cx, cz, chunk, this.world);

      if (!indices.length) return;

      const vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      const ibo = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

      this.meshes.push({
        vbo,
        ibo,
        count: indices.length
      });
    });
  }

  render() {
    const gl = this.gl;
    const p = this.world.player;

    gl.clearColor(0.5,0.7,1.0,1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const proj = mat4.perspective(
      Math.PI/3,
      gl.canvas.width / gl.canvas.height,
      0.1,
      1000
    );

    const view = mat4.identity();
    mat4.rotateY(view, view, p.yaw);
    mat4.rotateX(view, view, p.pitch);
    mat4.translate(view, view, [-p.position.x, -p.position.y, -p.position.z]);

    gl.uniformMatrix4fv(this.uProj, false, proj);
    gl.uniformMatrix4fv(this.uView, false, view);

    for (const m of this.meshes) {
      gl.bindBuffer(gl.ARRAY_BUFFER, m.vbo);
      gl.vertexAttribPointer(this.aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(this.aPos);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.ibo);
      gl.drawElements(gl.TRIANGLES, m.count, gl.UNSIGNED_SHORT, 0);
    }
  }

  createProgram(vsSrc, fsSrc) {
    const gl = this.gl;
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSrc);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSrc);
    gl.compileShader(fs);

    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    return p;
  }
}

/* ---- minimal mat4 ---- */
const mat4 = {
  identity(){
    return new Float32Array([
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1
    ]);
  },
  perspective(fov,a,n,f){
    const t=Math.tan(fov/2);
    return new Float32Array([
      1/(a*t),0,0,0,
      0,1/t,0,0,
      0,0,(f+n)/(n-f),-1,
      0,0,(2*f*n)/(n-f),0
    ]);
  },
  translate(o,a,v){
    o[12]+=v[0]; o[13]+=v[1]; o[14]+=v[2];
    return o;
  },
  rotateY(o,a,r){
    const c=Math.cos(r),s=Math.sin(r);
    o.set([
      c,0,-s,0,
      0,1,0,0,
      s,0,c,0,
      0,0,0,1
    ]);
    return o;
  },
  rotateX(o,a,r){
    const c=Math.cos(r),s=Math.sin(r);
    o.set([
      1,0,0,0,
      0,c,s,0,
      0,-s,c,0,
      0,0,0,1
    ]);
    return o;
  }
};
