<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Voxel World - First Person</title>
    <!-- Load Tailwind CSS for modern styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Load Three.js for 3D rendering -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <!-- Load Simplex Noise for procedural generation -->
    <script src="https://cdn.jsdelivr.net/npm/simplex-noise@2.4.0/simplex-noise.min.js"></script>
    <style>
        /* Custom CSS for a clean, immersive experience */
        body {
            margin: 0;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
            background-color: #1a1a2e; /* Deep purple background */
        }
        #info-panel {
            position: absolute;
            top: 0;
            left: 0;
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            z-index: 10;
            border-bottom-right-radius: 8px;
            font-size: 0.8rem;
        }
        #instructions {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1.5rem;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            border-radius: 12px;
            text-align: center;
            line-height: 1.6;
            z-index: 100;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transition: opacity 0.3s ease-in-out;
        }
        #crosshair {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            margin-top: -5px;
            margin-left: -5px;
            border-radius: 50%;
            background: white;
            opacity: 0; /* Hidden until Pointer Lock is active */
            z-index: 99;
            pointer-events: none;
        }
        #block-selector {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.75rem 1.5rem;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            border-radius: 12px;
            z-index: 10;
            font-size: 1rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .text-neon-green {
            color: #39ff14;
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>

    <!-- Info Panel -->
    <div id="info-panel">
        <p><strong>Voxel World Demo</strong></p>
        <p>Chunks Loaded: <span id="chunks-count">0</span></p>
        <p class="mt-2">Movement: <span class="text-neon-green">WASD</span></p>
        <p>Jump: <span class="text-neon-green">SPACE</span></p>
    </div>

    <!-- Instructions Overlay -->
    <div id="instructions" class="font-mono">
        <p class="text-xl font-bold mb-2">Click to Play</p>
        <p>Movement: <span class="text-neon-green">W A S D</span></p>
        <p>Jump: <span class="text-neon-green">SPACEBAR</span></p>
        <p>Break: <span class="text-neon-green">LMB</span> | Place: <span class="text-neon-green">RMB</span></p>
        <p>Select Block: <span class="text-neon-green">Q/E</span></p>
        <p class="mt-4 text-sm text-gray-400">Press ESC to exit control mode.</p>
    </div>

    <!-- Block Selector HUD -->
    <div id="block-selector">
        <span>Selected Block: </span>
        <span id="selected-block-name" class="text-yellow-400">Dirt</span>
    </div>

    <!-- Crosshair -->
    <div id="crosshair"></div>

    <script>
        // --- CORE VOXEL CONFIGURATION ---
        const CHUNK_SIZE = 16;
        const CHUNK_HEIGHT = 64;
        const WORLD_RADIUS = 3; 
        const BLOCK_SIZE = 1;
        const SEA_LEVEL = 20;
        
        // Player height and eye level constants
        const PLAYER_HEIGHT = 2.0 * BLOCK_SIZE; 
        const EYE_HEIGHT = 1.8 * BLOCK_SIZE;    
        const PLAYER_RADIUS = 0.3; // Used for collision checking

        // Block types and colors 
        const blockMaterials = {
            1: { color: 0x4CAF50, name: 'Grass', roughness: 0.9, metalness: 0.1, id: 1 }, 
            2: { color: 0x654321, name: 'Dirt', roughness: 0.9, metalness: 0.0, id: 2 }, 
            3: { color: 0x666666, name: 'Stone', roughness: 0.8, metalness: 0.0, id: 3 }, 
            4: { color: 0x1976D2, name: 'Water', roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.7, id: 4 }
        };
        const BLOCK_TYPE_IDS = Object.values(blockMaterials).map(m => m.id);

        // Initialize Three.js components
        let scene, camera, renderer, simplex, raycaster;
        const chunks = new Map();
        const worldGroup = new THREE.Group();
        
        let yawObject;   
        let pitchObject; 
        
        // Player/Control State
        const player = {
            velocity: new THREE.Vector3(),
            direction: new THREE.Vector3(),
            moveSpeed: 0.1,
            rotationSpeed: 0.002,
            isJumping: false,
            canMove: false,
            keys: {} // Store pressed keys
        };
        const gravity = -0.01;
        const jumpPower = 0.15;
        let currentBlockType = 2; // Default to Dirt

        /**
         * Initializes the 3D environment and procedural noise generator.
         */
        function init() {
            // Setup Scene and Simplex Noise
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x87ceeb); // Light blue sky
            scene.fog = new THREE.Fog(0x87ceeb, 10, 100); 

            if (typeof SimplexNoise !== 'undefined') {
                simplex = new SimplexNoise();
            } else {
                console.error("SimplexNoise library failed to load. Cannot generate terrain.");
                return;
            }
            
            // Raycaster setup
            raycaster = new THREE.Raycaster();

            // Setup Camera (Perspective)
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            // --- FIRST-PERSON CONTROL STRUCTURE ---
            yawObject = new THREE.Object3D();
            pitchObject = new THREE.Object3D();
            pitchObject.position.y = EYE_HEIGHT; 
            
            pitchObject.add(camera);
            yawObject.add(pitchObject);
            scene.add(yawObject);

            yawObject.position.set(0, SEA_LEVEL * BLOCK_SIZE + 0.001, 0);

            // Setup Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            document.body.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 1.0); 
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0); 
            directionalLight.position.set(20, 50, 20);
            scene.add(directionalLight);

            scene.add(worldGroup);

            // Add Controls & Handlers
            setupPointerLockControls();
            setupKeyboardControls();
            setupBlockInteraction();
            
            // Generate initial chunks
            generateWorld();
            updateBlockSelectorUI();

            // Event Listeners
            window.addEventListener('resize', onWindowResize);
            document.addEventListener('contextmenu', (event) => event.preventDefault()); // Prevent right-click context menu

            // Start the animation loop
            animate();
        }

        /**
         * Updates the UI to show the currently selected block.
         */
        function updateBlockSelectorUI() {
            const blockName = blockMaterials[currentBlockType].name;
            document.getElementById('selected-block-name').textContent = blockName;
        }
        
        /**
         * Sets up block breaking and placing via mouse clicks.
         */
        function setupBlockInteraction() {
            window.addEventListener('pointerdown', onPointerDown, false);
        }

        function onPointerDown(event) {
            if (!player.canMove) return;

            // Set raycaster origin to camera position and direction to center of screen
            raycaster.setFromCamera({ x: 0, y: 0 }, camera); 
            
            // Intersect only the opaque meshes (grass, dirt, stone) for interaction
            const opaqueMeshes = [];
            worldGroup.children.forEach(chunkGroup => {
                chunkGroup.children.forEach(mesh => {
                    // Check if the material is not transparent (i.e., not water)
                    if (mesh.material && !mesh.material.transparent) {
                        opaqueMeshes.push(mesh);
                    }
                });
            });

            const intersects = raycaster.intersectObjects(opaqueMeshes, false);

            if (intersects.length > 0) {
                const intersect = intersects[0];
                const blockMesh = intersect.object;
                
                // Find the chunkGroup associated with this mesh
                const chunkGroup = blockMesh.parent; 

                // 1. Determine Block World Coordinates (wx, wy, wz)
                // Use the face normal to push the point slightly away from the center of the face
                // For a block, the center of the block is half a block size away from the face.
                const point = intersect.point;
                const normal = intersect.face.normal;

                // Block coordinate (center of the block)
                let targetPos;
                if (event.button === 0) { // LMB: Break block (target center)
                    targetPos = point.clone().sub(normal.clone().multiplyScalar(0.01));
                } else if (event.button === 2) { // RMB: Place block (placement center)
                    targetPos = point.clone().add(normal.clone().multiplyScalar(0.01));
                } else {
                    return;
                }

                // Integer world coordinates (x, y, z) of the block
                const wx = Math.floor(targetPos.x / BLOCK_SIZE + 0.5);
                const wy = Math.floor(targetPos.y / BLOCK_SIZE + 0.5);
                const wz = Math.floor(targetPos.z / BLOCK_SIZE + 0.5);

                // 2. Find the correct chunk data and indices
                const cx = Math.floor(wx / CHUNK_SIZE);
                const cz = Math.floor(wz / CHUNK_SIZE);
                const chunkData = chunkGroup.userData.chunkData;
                
                // Local coordinates within the chunk
                const lx = wx - chunkGroup.userData.cx * CHUNK_SIZE;
                const lz = wz - chunkGroup.userData.cz * CHUNK_SIZE;
                const ly = wy;

                // Index into the 1D chunkData array
                const blockIndex = lx + ly * CHUNK_SIZE + lz * CHUNK_SIZE * CHUNK_HEIGHT;

                // --- Break Block (LMB) ---
                if (event.button === 0) { 
                    // Only break if the block is not air and not water
                    if (chunkData[blockIndex] !== 0 && chunkData[blockIndex] !== 4) {
                        chunkData[blockIndex] = 0; // Set to air
                        updateChunkGeometry(chunkGroup, chunkData);
                    }
                } 
                // --- Place Block (RMB) ---
                else if (event.button === 2) { 
                    // Check if placement coordinates are valid (within chunk height)
                    if (ly >= 0 && ly < CHUNK_HEIGHT) {
                        
                        // Check if block being placed intersects with player position
                        const placeBBox = new THREE.Box3(
                            new THREE.Vector3(wx - 0.5 * BLOCK_SIZE, wy - 0.5 * BLOCK_SIZE, wz - 0.5 * BLOCK_SIZE),
                            new THREE.Vector3(wx + 0.5 * BLOCK_SIZE, wy + 0.5 * BLOCK_SIZE, wz + 0.5 * BLOCK_SIZE)
                        );

                        const playerBBox = new THREE.Box3(
                            new THREE.Vector3(yawObject.position.x - PLAYER_RADIUS, yawObject.position.y - PLAYER_HEIGHT, yawObject.position.z - PLAYER_RADIUS),
                            new THREE.Vector3(yawObject.position.x + PLAYER_RADIUS, yawObject.position.y, yawObject.position.z + PLAYER_RADIUS)
                        );
                        
                        if (!playerBBox.intersectsBox(placeBBox) && chunkData[blockIndex] === 0) {
                            chunkData[blockIndex] = currentBlockType; 
                            updateChunkGeometry(chunkGroup, chunkData);
                        } else {
                            // console.log("Cannot place block inside player or on an occupied space.");
                        }
                    }
                }
            }
        }

        // --- Control Functions ---

        /**
         * Sets up the browser's Pointer Lock API for looking around with the mouse.
         */
        function setupPointerLockControls() {
            const instructions = document.getElementById('instructions');
            const crosshair = document.getElementById('crosshair');
            const element = document.body;

            const pointerlockchange = function () {
                if (document.pointerLockElement === element) {
                    player.canMove = true;
                    instructions.style.opacity = 0;
                    crosshair.style.opacity = 1;
                    renderer.domElement.style.cursor = 'none';
                } else {
                    player.canMove = false;
                    instructions.style.opacity = 1;
                    crosshair.style.opacity = 0;
                    renderer.domElement.style.cursor = 'pointer';
                }
            };

            const onMouseMove = function (event) {
                if (!player.canMove) return;

                const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
                const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

                yawObject.rotation.y -= movementX * player.rotationSpeed;
                pitchObject.rotation.x -= movementY * player.rotationSpeed;
                pitchObject.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitchObject.rotation.x));
            };

            document.addEventListener('pointerlockchange', pointerlockchange);
            document.addEventListener('mousemove', onMouseMove);

            instructions.addEventListener('click', function () {
                element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
                element.requestPointerLock();
            });
        }
        
        /**
         * Sets up keyboard event listeners for movement (WASD, Space) and block switching (Q/E).
         */
        function setupKeyboardControls() {
            document.addEventListener('keydown', (event) => {
                const key = event.key.toLowerCase();
                player.keys[key] = true;

                if (!player.canMove) return;

                // Block Switching (Q/E)
                const currentIndex = BLOCK_TYPE_IDS.indexOf(currentBlockType);
                let nextIndex = currentIndex;

                if (key === 'q') {
                    nextIndex = (currentIndex - 1 + BLOCK_TYPE_IDS.length) % BLOCK_TYPE_IDS.length;
                    currentBlockType = BLOCK_TYPE_IDS[nextIndex];
                    updateBlockSelectorUI();
                } else if (key === 'e') {
                    nextIndex = (currentIndex + 1) % BLOCK_TYPE_IDS.length;
                    currentBlockType = BLOCK_TYPE_IDS[nextIndex];
                    updateBlockSelectorUI();
                }
            });

            document.addEventListener('keyup', (event) => {
                player.keys[event.key.toLowerCase()] = false;
            });
        }

        /**
         * Gets the height of the terrain at a given world (wx, wz) position.
         */
        function getGroundHeight(wx, wz) {
            const noiseScale = 0.05;
            const roughness = 0.02;

            const noiseValue = simplex.noise2D(wx * noiseScale, wz * noiseScale);
            const detailNoise = simplex.noise2D(wx * roughness, wz * roughness);

            let height = Math.floor((noiseValue + 1) * 0.5 * (CHUNK_HEIGHT * 0.4)) + 1;
            height += Math.floor((detailNoise + 1) * 0.5 * 5); 
            
            const actualGroundY = Math.max(height, SEA_LEVEL) * BLOCK_SIZE;
            
            return actualGroundY;
        }


        /**
         * Updates player movement and applies gravity.
         */
        function updatePlayerMovement() {
            if (!player.canMove) return;

            const moveSpeed = player.moveSpeed;
            player.direction.set(0, 0, 0);

            const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(yawObject.quaternion);
            const right = new THREE.Vector3(1, 0, 0).applyQuaternion(yawObject.quaternion);
            
            forward.y = 0;
            forward.normalize();
            right.y = 0;
            right.normalize();

            // Handle WASD input
            if (player.keys['w']) player.direction.add(forward);
            if (player.keys['s']) player.direction.sub(forward);
            if (player.keys['a']) player.direction.sub(right);
            if (player.keys['d']) player.direction.add(right);
            
            player.direction.normalize();

            player.velocity.x = player.direction.x * moveSpeed;
            player.velocity.z = player.direction.z * moveSpeed;
            
            player.velocity.y += gravity;

            if (player.keys[' '] && !player.isJumping) {
                player.velocity.y = jumpPower;
                player.isJumping = true;
            }

            yawObject.position.add(player.velocity);

            // Simple Collision/Ground Check:
            const groundY = getGroundHeight(yawObject.position.x, yawObject.position.z);
            const playerFeetY = yawObject.position.y; 
            
            if (playerFeetY <= groundY) {
                yawObject.position.y = groundY; 
                player.velocity.y = 0;
                player.isJumping = false;
            }
        }


        // --- World Generation Functions ---
        
        /**
         * Generates the entire visible world by iterating over chunk coordinates.
         */
        function generateWorld() {
            let count = 0;
            for (let cx = -WORLD_RADIUS; cx <= WORLD_RADIUS; cx++) {
                for (let cz = -WORLD_RADIUS; cz <= WORLD_RADIUS; cz++) {
                    const chunkGroup = createChunk(cx, cz);
                    worldGroup.add(chunkGroup);
                    chunks.set(`${cx},${cz}`, chunkGroup);
                    count++;
                }
            }
            document.getElementById('chunks-count').textContent = count;
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
                         let type = 0; // Air

                         if (y < height) {
                             if (y >= height - 1 && y > SEA_LEVEL) {
                                 type = 1; // 1: Grass (surface on land)
                             } else if (y >= height - 1 && y <= SEA_LEVEL) {
                                 type = 2; // 2: Dirt (surface near or under shallow water)
                             } else if (y < height - 1) {
                                 type = (y > height - 6) ? 2 : 3; // 2: Dirt, 3: Stone
                             }
                         } else if (y <= SEA_LEVEL) {
                             type = 4; // 4: Water
                         }
                         chunkData[index] = type;
                     }
                 }
             }
             return chunkData;
        }

        /**
         * Creates the initial chunk group, generating data and geometry.
         */
        function createChunk(cx, cz) {
            const chunkData = generateChunkData(cx, cz);

            const chunkGroup = new THREE.Group();
            // Store metadata on the group for easy access during interaction
            chunkGroup.userData.chunkData = chunkData;
            chunkGroup.userData.cx = cx;
            chunkGroup.userData.cz = cz;
            
            // Generate initial meshes
            updateChunkGeometry(chunkGroup, chunkData);

            return chunkGroup;
        }

        /**
         * Re-generates the meshes for a given chunk based on its updated data.
         * Used for both initial generation and runtime updates.
         */
        function updateChunkGeometry(chunkGroup, chunkData) {
            // 1. Dispose of existing meshes to free memory
            while(chunkGroup.children.length > 0){
                const mesh = chunkGroup.children[0];
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) mesh.material.dispose();
                chunkGroup.remove(mesh);
            }
            
            // 2. Mesh Generation (Occlusion Culling)
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
            const positionAttribute = boxGeometry.getAttribute('position');
            const normalAttribute = boxGeometry.getAttribute('normal');

            const neighborOffsets = [
                [0, 0, 1], [0, 0, -1], [0, 1, 0], 
                [0, -1, 0], [1, 0, 0], [-1, 0, 0]  
            ];

            const tempColor = new THREE.Color();
            const cx = chunkGroup.userData.cx;
            const cz = chunkGroup.userData.cz;

            /** Helper to get voxel type at local coordinates */
            const getVoxel = (x, y, z) => {
                if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
                    return 0; 
                }
                const index = x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                return chunkData[index];
            };

            for (let x = 0; x < CHUNK_SIZE; x++) {
                for (let y = 0; y < CHUNK_HEIGHT; y++) {
                    for (let z = 0; z < CHUNK_SIZE; z++) {
                        const type = getVoxel(x, y, z);

                        if (type === 0) continue; // Skip air

                        for (let i = 0; i < 6; i++) {
                            const [dx, dy, dz] = neighborOffsets[i];
                            const neighborType = getVoxel(x + dx, y + dy, z + dz);
                            
                            // Face is exposed if the neighbor is air (0) or water (4) 
                            // AND the current block is NOT water.
                            const isExposed = neighborType === 0 || (neighborType === 4 && type !== 4);

                            // Water only draws top/bottom if exposed to air/land.
                            const isWaterTopBottomFace = (type === 4 && (i === 2 || i === 3));
                            if (type === 4 && !isWaterTopBottomFace && neighborType !== 0) continue; 
                            
                            if (isExposed || isWaterTopBottomFace) {
                                
                                // --- PER-FACE COLORING LOGIC ---
                                let faceColor;
                                if (type === 1) { // Grass Block
                                    faceColor = (i === 2) ? blockMaterials[1].color : blockMaterials[2].color;
                                } else {
                                    faceColor = blockMaterials[type].color;
                                }
                                tempColor.set(faceColor);

                                // Determine buffer
                                const isWaterBlock = type === 4;
                                let targetPositions = isWaterBlock ? waterPositions : opaquePositions;
                                let targetNormals = isWaterBlock ? waterNormals : opaqueNormals;
                                let targetColors = isWaterBlock ? waterColors : opaqueColors;
                                let targetIndices = isWaterBlock ? waterIndices : opaqueIndices;
                                let targetFaceCount = isWaterBlock ? waterFaceCount : opaqueFaceCount;
                                
                                const faceIndexStart = i * 4;

                                for (let j = 0; j < 4; j++) {
                                    // Calculate position in world space
                                    const vx = x * BLOCK_SIZE + positionAttribute.getX(faceIndexStart + j) + (cx * CHUNK_SIZE * BLOCK_SIZE);
                                    const vy = y * BLOCK_SIZE + positionAttribute.getY(faceIndexStart + j);
                                    const vz = z * BLOCK_SIZE + positionAttribute.getZ(faceIndexStart + j) + (cz * CHUNK_SIZE * BLOCK_SIZE);

                                    targetPositions.push(vx, vy, vz);
                                    targetNormals.push(normalAttribute.getX(faceIndexStart + j), normalAttribute.getY(faceIndexStart + j), normalAttribute.getZ(faceIndexStart + j));
                                    targetColors.push(tempColor.r, tempColor.g, tempColor.b);
                                }

                                // Add indices
                                targetIndices.push(targetFaceCount * 4, targetFaceCount * 4 + 1, targetFaceCount * 4 + 2);
                                targetIndices.push(targetFaceCount * 4 + 2, targetFaceCount * 4 + 3, targetFaceCount * 4);

                                if (isWaterBlock) {
                                    waterFaceCount++;
                                } else {
                                    opaqueFaceCount++;
                                }
                            }
                        }
                    }
                }
            }

            // 3. Create Meshes
            
            // --- OPAQUE MESH (Grass, Dirt, Stone) ---
            if (opaquePositions.length > 0) {
                const opaqueGeometry = new THREE.BufferGeometry();
                opaqueGeometry.setAttribute('position', new THREE.Float32BufferAttribute(opaquePositions, 3));
                opaqueGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(opaqueNormals, 3));
                opaqueGeometry.setAttribute('color', new THREE.Float32BufferAttribute(opaqueColors, 3));
                opaqueGeometry.setIndex(opaqueIndices);
                
                const opaqueMaterial = new THREE.MeshStandardMaterial({
                    vertexColors: true,
                    roughness: 0.9,
                    metalness: 0.1,
                    transparent: false,
                    depthWrite: true, 
                    depthTest: true,
                });
                const opaqueMesh = new THREE.Mesh(opaqueGeometry, opaqueMaterial);
                chunkGroup.add(opaqueMesh);
            }

            // --- TRANSPARENT WATER MESH ---
            if (waterPositions.length > 0) {
                const waterGeometry = new THREE.BufferGeometry();
                waterGeometry.setAttribute('position', new THREE.Float32BufferAttribute(waterPositions, 3));
                waterGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(waterNormals, 3));
                waterGeometry.setAttribute('color', new THREE.Float32BufferAttribute(waterColors, 3));
                waterGeometry.setIndex(waterIndices);
                
                const waterMaterial = new THREE.MeshStandardMaterial({
                    vertexColors: true,
                    transparent: true,
                    opacity: blockMaterials[4].opacity, 
                    side: THREE.DoubleSide, 
                    depthWrite: false, 
                    roughness: blockMaterials[4].roughness,
                    metalness: blockMaterials[4].metalness
                });

                const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
                waterMesh.renderOrder = 1; 
                chunkGroup.add(waterMesh);
            }
        }


        // --- Game Loop ---
        
        /**
         * Handles the rendering loop and controls update.
         */
        function animate() {
            requestAnimationFrame(animate);
            updatePlayerMovement(); 
            renderer.render(scene, camera);
        }

        /**
         * Handles window resize events.
         */
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Start the application when the window loads
        window.onload = function () {
            init();
        }

    </script>
</body>
</html>
