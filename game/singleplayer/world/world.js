// game/singleplayer/world/world.js

import {
    CHUNK_SIZE,
    CHUNK_HEIGHT,
    WORLD_RADIUS,
    BLOCK_SIZE,
    SEA_LEVEL,
    blockMaterials
} from "../singleplayer.js";

export const chunks = new Map();
export const worldGroup = new THREE.Group();

/**
 * Generates the entire visible world by iterating over chunk coordinates.
 */
export function generateWorld() {
    let count = 0;
    for (let cx = -WORLD_RADIUS; cx <= WORLD_RADIUS; cx++) {
        for (let cz = -WORLD_RADIUS; cz <= WORLD_RADIUS; cz++) {
            const chunkGroup = createChunk(cx, cz);
            worldGroup.add(chunkGroup);
            chunks.set(`${cx},${cz}`, chunkGroup);
            count++;
        }
    }
    document.getElementById("chunks-count").textContent = count;
}

/**
 * Generates the 1D array of voxel data for a chunk.
 */
function generateChunkData(cx, cz) {
    const chunkData = new Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);
    const noiseScale = 0.05;
    const roughness = 0.02;

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;

            const noiseValue = simplex.noise2D(wx * noiseScale, wz * noiseScale);
            const detailNoise = simplex.noise2D(wx * roughness, wz * roughness);

            let height = Math.floor((noiseValue + 1) * 0.5 * (CHUNK_HEIGHT * 0.4)) + 1;
            height += Math.floor((detailNoise + 1) * 0.5 * 5);
            height = Math.max(1, Math.min(CHUNK_HEIGHT, height));

            for (let y = 0; y < CHUNK_HEIGHT; y++) {
                const index = x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                let type = 0;

                if (y < height) {
                    if (y >= height - 1 && y > SEA_LEVEL) type = 1;
                    else if (y >= height - 1) type = 2;
                    else type = y > height - 6 ? 2 : 3;
                } else if (y <= SEA_LEVEL) {
                    type = 4;
                }

                chunkData[index] = type;
            }
        }
    }
    return chunkData;
}

function createChunk(cx, cz) {
    const chunkData = generateChunkData(cx, cz);
    const chunkGroup = new THREE.Group();

    chunkGroup.userData.chunkData = chunkData;
    chunkGroup.userData.cx = cx;
    chunkGroup.userData.cz = cz;

    updateChunkGeometry(chunkGroup, chunkData);
    return chunkGroup;
}

/**
 * Re-generates the meshes for a given chunk based on its updated data.
 */
export function updateChunkGeometry(chunkGroup, chunkData) {
    while (chunkGroup.children.length > 0) {
        const mesh = chunkGroup.children[0];
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) mesh.material.dispose();
        chunkGroup.remove(mesh);
    }

    const opaquePositions = [];
    const opaqueNormals = [];
    const opaqueColors = [];
    const opaqueIndices = [];
    let opaqueFaceCount = 0;

    const waterPositions = [];
    const waterNormals = [];
    const waterColors = [];
    const waterIndices = [];
    let waterFaceCount = 0;

    const boxGeometry = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    const positionAttribute = boxGeometry.getAttribute("position");
    const normalAttribute = boxGeometry.getAttribute("normal");

    const neighborOffsets = [
        [0, 0, 1], [0, 0, -1], [0, 1, 0],
        [0, -1, 0], [1, 0, 0], [-1, 0, 0]
    ];

    const tempColor = new THREE.Color();
    const cx = chunkGroup.userData.cx;
    const cz = chunkGroup.userData.cz;

    const getVoxel = (x, y, z) => {
        if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
            return 0;
        }
        return chunkData[x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT];
    };

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < CHUNK_HEIGHT; y++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {
                const type = getVoxel(x, y, z);
                if (type === 0) continue;

                for (let i = 0; i < 6; i++) {
                    const [dx, dy, dz] = neighborOffsets[i];
                    const neighborType = getVoxel(x + dx, y + dy, z + dz);

                    const isExposed =
                        neighborType === 0 || (neighborType === 4 && type !== 4);

                    const isWaterTopBottom =
                        type === 4 && (i === 2 || i === 3);

                    if (type === 4 && !isWaterTopBottom && neighborType !== 0) continue;

                    if (isExposed || isWaterTopBottom) {
                        let faceColor;
                        if (type === 1) {
                            faceColor = i === 2 ? blockMaterials[1].color : blockMaterials[2].color;
                        } else {
                            faceColor = blockMaterials[type].color;
                        }

                        tempColor.set(faceColor);

                        const isWater = type === 4;
                        const P = isWater ? waterPositions : opaquePositions;
                        const N = isWater ? waterNormals : opaqueNormals;
                        const C = isWater ? waterColors : opaqueColors;
                        const I = isWater ? waterIndices : opaqueIndices;
                        let F = isWater ? waterFaceCount : opaqueFaceCount;

                        const faceIndexStart = i * 4;

                        for (let j = 0; j < 4; j++) {
                            const vx = x * BLOCK_SIZE + positionAttribute.getX(faceIndexStart + j) + cx * CHUNK_SIZE * BLOCK_SIZE;
                            const vy = y * BLOCK_SIZE + positionAttribute.getY(faceIndexStart + j);
                            const vz = z * BLOCK_SIZE + positionAttribute.getZ(faceIndexStart + j) + cz * CHUNK_SIZE * BLOCK_SIZE;

                            P.push(vx, vy, vz);
                            N.push(
                                normalAttribute.getX(faceIndexStart + j),
                                normalAttribute.getY(faceIndexStart + j),
                                normalAttribute.getZ(faceIndexStart + j)
                            );
                            C.push(tempColor.r, tempColor.g, tempColor.b);
                        }

                        I.push(F * 4, F * 4 + 1, F * 4 + 2);
                        I.push(F * 4 + 2, F * 4 + 3, F * 4);

                        isWater ? waterFaceCount++ : opaqueFaceCount++;
                    }
                }
            }
        }
    }

    if (opaquePositions.length) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(opaquePositions, 3));
        geo.setAttribute("normal", new THREE.Float32BufferAttribute(opaqueNormals, 3));
        geo.setAttribute("color", new THREE.Float32BufferAttribute(opaqueColors, 3));
        geo.setIndex(opaqueIndices);

        const mat = new THREE.MeshStandardMaterial({ vertexColors: true });
        chunkGroup.add(new THREE.Mesh(geo, mat));
    }

    if (waterPositions.length) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(waterPositions, 3));
        geo.setAttribute("normal", new THREE.Float32BufferAttribute(waterNormals, 3));
        geo.setAttribute("color", new THREE.Float32BufferAttribute(waterColors, 3));
        geo.setIndex(waterIndices);

        const mat = new THREE.MeshStandardMaterial({
            vertexColors: true,
            transparent: true,
            opacity: blockMaterials[4].opacity,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        const mesh = new THREE.Mesh(geo, mat);
        mesh.renderOrder = 1;
        chunkGroup.add(mesh);
    }
}
