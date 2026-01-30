import type { GXMaterialHacks } from "../gx/gx_material.js";

export const BONUS_WAVE_MODEL_NAME = "SHAPE_STAGE134";

export const BONUS_WAVE_VERTEX_GLOBAL = `
const float BONUS_WAVE_ANGLE_TO_RAD = 0.00009587379924285257;
`;

export const BONUS_WAVE_VERTEX_MAIN = `
    float t_WaveDist = length(a_Position.xz);
    float t_WaveAmp = 0.5 + (-0.030833333333333333 * t_WaveDist);
    float t_WaveAngle = -1092.0 * (u_SceneTimeFrames - 30.0) + 16384.0 * t_WaveDist;
    if (t_WaveAngle <= 0.0) {
        float t_WaveRad = t_WaveAngle * BONUS_WAVE_ANGLE_TO_RAD;
        float t_WaveSin = sin(t_WaveRad);
        float t_WaveCos = cos(t_WaveRad);
        float t_WaveAmpDeriv = -0.030833333333333333;
        float t_WaveThetaDeriv = 16384.0 * BONUS_WAVE_ANGLE_TO_RAD;
        vec3 t_WavePos = a_Position.xyz;
        t_WavePos.y += t_WaveSin * t_WaveAmp;

        vec3 t_WaveNormal = vec3(0.0, 1.0, 0.0);
        if (t_WaveDist > 0.0) {
            float t_WaveDyDr = (t_WaveCos * t_WaveThetaDeriv * t_WaveAmp) + (t_WaveSin * t_WaveAmpDeriv);
            float t_WaveInvR = 1.0 / t_WaveDist;
            float t_WaveDx = t_WaveDyDr * a_Position.x * t_WaveInvR;
            float t_WaveDz = t_WaveDyDr * a_Position.z * t_WaveInvR;
            t_WaveNormal = normalize(vec3(-t_WaveDx, 1.0, -t_WaveDz));
        }

        mat4x3 t_WavePosMtx = UnpackMatrix(u_PosMtx[0]);
        t_Position = (t_WavePosMtx * vec4(t_WavePos, 1.0)).xyz;
        v_Position = t_Position;
        t_Normal = MulNormalMatrix(t_WavePosMtx, t_WaveNormal);
    }
`;

export function createBonusWaveMaterialHacks(): GXMaterialHacks {
    return {
        extraVertexGlobal: BONUS_WAVE_VERTEX_GLOBAL,
        extraVertexMain: BONUS_WAVE_VERTEX_MAIN,
    };
}
