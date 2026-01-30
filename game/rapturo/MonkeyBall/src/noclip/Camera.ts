import { mat4 } from 'gl-matrix';
import { projectionMatrixForCuboid, projectionMatrixForFrustum } from './MathHelpers.js';
import { projectionMatrixConvertClipSpaceNearZ } from './gfx/helpers/ProjectionHelpers.js';
import { projectionMatrixReverseDepth } from './gfx/helpers/ReversedDepthHelpers.js';
import { GfxClipSpaceNearZ } from './gfx/platform/GfxPlatform.js';
import { Frustum } from './Geometry.js';

export class Camera {
  public clipSpaceNearZ: GfxClipSpaceNearZ;
  public viewMatrix = mat4.create();
  public worldMatrix = mat4.create();
  public projectionMatrix = mat4.create();
  public clipFromWorldMatrix = mat4.create();
  public frustum = new Frustum();
  public fovY = Math.PI / 3;
  public aspect = 1;
  public isOrthographic = false;
  public left = -1;
  public right = 1;
  public bottom = -1;
  public top = 1;
  public near = 1;
  public far = Infinity;

  public identity(): void {
    mat4.identity(this.worldMatrix);
    mat4.identity(this.viewMatrix);
  }

  public worldMatrixUpdated(): void {
    mat4.invert(this.viewMatrix, this.worldMatrix);
    this.updateClipFromWorld();
  }

  public setPerspective(fovY: number, aspect: number, n: number, f: number = Infinity): void {
    this.fovY = fovY;
    this.aspect = aspect;
    this.isOrthographic = false;

    const nearY = Math.tan(fovY * 0.5) * n;
    const nearX = nearY * aspect;
    this.setFrustum(-nearX, nearX, -nearY, nearY, n, f);
  }

  public setOrthographic(orthoScaleY: number, aspect: number, n: number, f: number): void {
    this.aspect = aspect;
    this.isOrthographic = true;

    const nearY = orthoScaleY;
    const nearX = orthoScaleY * aspect;
    this.setFrustum(-nearX, nearX, -nearY, nearY, n, f);
  }

  public setClipPlanes(n: number, f: number = Infinity): void {
    if (this.isOrthographic) {
      this.setOrthographic(this.top, this.aspect, n, f);
    } else {
      this.setPerspective(this.fovY, this.aspect, n, f);
    }
  }

  private updateClipFromWorld(): void {
    mat4.mul(this.clipFromWorldMatrix, this.projectionMatrix, this.viewMatrix);
    this.frustum.updateClipFrustum(this.clipFromWorldMatrix, this.clipSpaceNearZ);
  }

  public updateProjectionMatrix(): void {
    if (this.isOrthographic) {
      projectionMatrixForCuboid(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
    } else {
      projectionMatrixForFrustum(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
    }
    projectionMatrixReverseDepth(this.projectionMatrix);
    projectionMatrixConvertClipSpaceNearZ(this.projectionMatrix, this.clipSpaceNearZ, GfxClipSpaceNearZ.NegativeOne);
    this.updateClipFromWorld();
  }

  private setFrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): void {
    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.top = top;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
}

export enum CameraUpdateResult {
  Unchanged,
  Changed,
  ImportantChange,
}

export interface CameraController {
  camera: Camera;
  forceUpdate: boolean;
  cameraUpdateForced(): void;
  update(): CameraUpdateResult;
  setSceneMoveSpeedMult(v: number): void;
  getKeyMoveSpeed(): number | null;
  setKeyMoveSpeed(speed: number): void;
}
