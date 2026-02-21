(function () {
  function createWorldGenerator(options) {
    const {
      CHUNK_SIZE,
      CHUNK_HEIGHT,
      SEA_LEVEL,
      BASE_LAND_Y,
      ISLAND_RADIUS,
      CAVE_SCALE,
      CAVE_THRESHOLD,
      CAVE_MIN_Y,
      CAVE_MAX_Y_OFFSET,
      WORLD_MIN_COORD,
      WORLD_MAX_COORD,
      TerrainModules,
      getPerlin,
      getWorldSeed,
    } = options;

    const BIOME_CLIMATE_TARGETS = [
      { name: 'Desert', temp: 0.09, humidity: -0.12, continentalness: 0.18, erosion: 0.08, weirdness: 0.06 },
      { name: 'Forest', temp: 0.0, humidity: 0.16, continentalness: 0.14, erosion: 0.06, weirdness: -0.04 },
      { name: 'Plains', temp: -0.02, humidity: 0.02, continentalness: 0.1, erosion: 0.2, weirdness: 0.02 },
    ];

    function getRiverMask(wx, wz) {
      return TerrainModules['river'].getMask({ perlin: getPerlin(), wx, wz });
    }

    function octaveNoise2D(x, z, octaves, persistence, lacunarity, scale, offsetX = 0, offsetZ = 0) {
      const perlin = getPerlin();
      let amp = 1;
      let freq = 1;
      let sum = 0;
      let norm = 0;
      for (let i = 0; i < octaves; i++) {
        sum += perlin.noise2D((x + offsetX) * scale * freq, (z + offsetZ) * scale * freq) * amp;
        norm += amp;
        amp *= persistence;
        freq *= lacunarity;
      }
      return norm > 0 ? (sum / norm) : 0;
    }

    function octaveNoise3D(x, y, z, octaves, persistence, lacunarity, scale, offsetX = 0, offsetY = 0, offsetZ = 0) {
      const perlin = getPerlin();
      let amp = 1;
      let freq = 1;
      let sum = 0;
      let norm = 0;
      for (let i = 0; i < octaves; i++) {
        sum += perlin.noise3D((x + offsetX) * scale * freq, (y + offsetY) * scale * freq, (z + offsetZ) * scale * freq) * amp;
        norm += amp;
        amp *= persistence;
        freq *= lacunarity;
      }
      return norm > 0 ? (sum / norm) : 0;
    }

    function hashRand2D(wx, wz, salt = 0) {
      const worldSeed = getWorldSeed();
      let h = (Math.imul(wx | 0, 374761393) ^ Math.imul(wz | 0, 668265263) ^ Math.imul((worldSeed + salt) | 0, 2246822519)) >>> 0;
      h = (h ^ (h >>> 13)) >>> 0;
      h = Math.imul(h, 1274126177) >>> 0;
      h = (h ^ (h >>> 16)) >>> 0;
      return h / 4294967296;
    }

    function sampleTerrainVector(wx, wz) {
      const continentalness = octaveNoise2D(wx, wz, 3, 0.52, 2.0, 0.00145, 200, 200);
      const erosion = octaveNoise2D(wx, wz, 4, 0.5, 2.05, 0.0039, 180, -90);
      const weirdness = octaveNoise2D(wx, wz, 4, 0.5, 2.0, 0.0021, -510, 140);
      const humidity = octaveNoise2D(wx, wz, 3, 0.55, 2.0, 0.0011, 320, -130);
      const peaksValleys = 1 - Math.abs(weirdness);
      const ridges = Math.pow(Math.max(0, peaksValleys), 1.8);
      return { continentalness, erosion, weirdness, humidity, peaksValleys, ridges };
    }

    function sampleClimateVector(wx, wz, y = SEA_LEVEL) {
      return {
        temp: octaveNoise3D(wx, y, wz, 3, 0.52, 2.0, 0.00048, -600, 170, 300),
        humidity: octaveNoise3D(wx, y, wz, 3, 0.55, 2.0, 0.00072, 320, -240, -130),
        continentalness: octaveNoise3D(wx, y, wz, 3, 0.52, 2.0, 0.00145, 200, 90, 200),
        erosion: octaveNoise3D(wx, y, wz, 4, 0.5, 2.05, 0.0039, 180, -120, -90),
        weirdness: octaveNoise3D(wx, y, wz, 4, 0.5, 2.0, 0.0021, -510, 380, 140),
      };
    }

    function chooseBiomeByClimate(vec) {
      let best = 'Plains';
      let bestDist = Infinity;
      for (const t of BIOME_CLIMATE_TARGETS) {
        const dTemp = vec.temp - t.temp;
        const dHum = vec.humidity - t.humidity;
        const dCont = vec.continentalness - t.continentalness;
        const dEro = vec.erosion - t.erosion;
        const dWeird = vec.weirdness - t.weirdness;
        const dist = dTemp * dTemp + dHum * dHum + dCont * dCont + dEro * dEro + dWeird * dWeird;
        if (dist < bestDist) {
          bestDist = dist;
          best = t.name;
        }
      }
      return best;
    }

    function getRavineMask(wx, wz) {
      const perlin = getPerlin();
      const warp = perlin.noise2D(wx * 0.001 + 250, wz * 0.001 + 250) * 30;
      const line = Math.abs(perlin.noise2D(wx * 0.0018 + warp, wz * 0.0018));
      return 1.0 - Math.min(1.0, line / 0.043);
    }

    function getBiome(wx, wz) {
      const tv = sampleTerrainVector(wx, wz);
      const climate = sampleClimateVector(wx, wz, SEA_LEVEL + 8);
      const detailNoise = octaveNoise2D(wx, wz, 3, 0.6, 2.0, 0.003, 0, 0);
      const mountainNoise = (Math.abs(octaveNoise2D(wx, wz, 3, 0.56, 2.0, 0.0013, -400, 750)) + 1) * 0.5;
      const continentalNoise = (tv.continentalness + 1) * 0.5;
      const distFromCenter = Math.sqrt(wx * wx + wz * wz);
      const riverMask = getRiverMask(wx, wz);

      if (TerrainModules['mountains'].isBiome({ mountainNoise, continentalNoise, climateNoise: climate.temp })) return 'Mountains';
      if (TerrainModules['ocean'].isBiome({ continentalNoise, climateNoise: climate.temp })) return 'Ocean';

      const aridNoise = octaveNoise2D(wx, wz, 3, 0.54, 2.0, 0.0016, 1400, -900);
      const heatNoise = octaveNoise2D(wx, wz, 2, 0.58, 2.0, 0.0022, -1700, 500);
      const likelyDesert = aridNoise > 0.18 && heatNoise > -0.05 && continentalNoise > 0.35 && mountainNoise < 0.72 && riverMask < 0.28;
      const likelyForest = climate.humidity > 0.16 && climate.temp > -0.35 && climate.temp < 0.38;

      let selected = chooseBiomeByClimate(climate);
      if (likelyDesert) selected = 'Desert';
      else if (likelyForest && selected !== 'Desert') selected = 'Forest';

      if (selected === 'Desert') {
        const isDesert = TerrainModules['desert'].isBiome({
          climateNoise: climate.temp,
          moistureNoise: Math.min(climate.humidity, octaveNoise2D(wx, wz, 3, 0.55, 2.0, 0.0007, 1000, 1000)),
          continentalNoise,
        });
        if (!isDesert || riverMask > 0.35) selected = 'Plains';
      }

      const shouldForceForest = climate.humidity > 0.14 && detailNoise > -0.22 && climate.temp > -0.35;
      if (selected === 'Forest' && !TerrainModules['oakForest'].isBiome({ detailNoise, humidityNoise: climate.humidity, distFromCenter, ISLAND_RADIUS }) && !shouldForceForest) {
        selected = 'Plains';
      } else if (selected === 'Plains' && shouldForceForest && climate.temp > -0.35) {
        selected = 'Forest';
      }

      return selected;
    }

    function getNoiseGroundHeight(wx, wz, biome) {
      const perlin = getPerlin();
      const tv = sampleTerrainVector(wx, wz);
      const continentalMask = (tv.continentalness + 1) * 0.5;
      const terrainNoise = (perlin.noise2D(wx * 0.03, wz * 0.03) + 1) * 0.5;
      const detailNoise = (perlin.noise2D(wx * 0.08, wz * 0.08) + 1) * 0.5;
      const erosionNoise = (tv.erosion + 1) * 0.5;
      const ridgeNoise = Math.abs(perlin.noise2D(wx * 0.02 + 50, wz * 0.02 + 50));
      const peakNoise = Math.abs(perlin.noise2D(wx * 0.007 - 250, wz * 0.007 + 400));
      const jaggedNoise = Math.abs(octaveNoise2D(wx, wz, 5, 0.46, 2.25, 0.013, -1200, 950));
      const cliffNoise = Math.abs(perlin.noise2D(wx * 0.012 - 910, wz * 0.012 + 260));
      const deepNoise = (perlin.noise2D(wx * 0.01 - 200, wz * 0.01 + 430) + 1) * 0.5;
      const duneNoise = (perlin.noise2D(wx * 0.045 + 15, wz * 0.045 - 15) + 1) * 0.5;

      let h;
      if (biome === 'Plains') {
        h = TerrainModules['plains'].getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise });
      } else if (biome === 'Forest') {
        h = TerrainModules['oakForest'].getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise });
      } else if (biome === 'Desert') {
        h = TerrainModules['desert'].getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, duneNoise });
      } else if (biome === 'Mountains') {
        h = TerrainModules['mountains'].getHeight({
          BASE_LAND_Y,
          continentalness: tv.continentalness,
          erosion: tv.erosion,
          ridges: tv.ridges,
          peaksValleys: tv.peaksValleys,
          terrainNoise,
          cliffNoise,
          peakNoise,
          jaggedNoise,
        });
      } else {
        h = TerrainModules['ocean'].getHeight({ SEA_LEVEL, deepNoise, terrainNoise });
      }

      h += detailNoise * (biome === 'Mountains' ? 1.2 : 0.7);

      const riverInfluence = getRiverMask(wx, wz);
      h = TerrainModules['river'].applyHeight({ height: h, riverInfluence, SEA_LEVEL });

      const ravine = getRavineMask(wx, wz);
      if (ravine > 0.84 && biome !== 'Ocean') h -= (ravine - 0.84) * 70;

      if (biome === 'Mountains' && h < SEA_LEVEL + 8) h = SEA_LEVEL + 8;
      return Math.max(1, Math.min(CHUNK_HEIGHT - 2, Math.floor(h)));
    }

    function generateChunkData(cx, cz) {
      const perlin = getPerlin();
      const data = new Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);
      for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
          const wx = cx * CHUNK_SIZE + x;
          const wz = cz * CHUNK_SIZE + z;
          const biome = getBiome(wx, wz);
          const h = getNoiseGroundHeight(wx, wz, biome);
          const isNearBoundary = wx < WORLD_MIN_COORD + 4 || wx >= WORLD_MAX_COORD - 4 || wz < WORLD_MIN_COORD + 4 || wz >= WORLD_MAX_COORD - 4;
          const riverInfluence = getRiverMask(wx, wz);
          const isRiver = riverInfluence > 0.1;

          for (let y = 0; y < CHUNK_HEIGHT; y++) {
            let t = 0;
            if (y === 0) {
              t = 14;
              data[x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT] = t;
              continue;
            }

            if (y < h) {
              const distFromSurface = h - 1 - y;
              if (biome === 'Desert') {
                if (distFromSurface < 5) t = 7; else t = 13;
              } else if (biome === 'Mountains') {
                const isSnowCap = h > SEA_LEVEL + 26;
                const cheese = perlin.noise3D(wx * 0.045, y * 0.062, wz * 0.045);
                const overhang = perlin.noise3D(wx * 0.02 + 700, y * 0.03, wz * 0.02 - 300);
                const density = (h - y) + cheese * 5.5 + overhang * 3.2 - ((CHUNK_HEIGHT - y) / CHUNK_HEIGHT) * 3.5;
                if (density <= 0.4 && distFromSurface <= 22) t = 0;
                else if (distFromSurface === 0) t = isSnowCap ? 15 : 3;
                else t = 3;
              } else {
                const isBeachZone = h >= SEA_LEVEL - 1 && h <= SEA_LEVEL + 2;
                if (distFromSurface === 0) t = isBeachZone ? 7 : 1;
                else if (distFromSurface < 4) t = isBeachZone ? 7 : 2;
                else t = 3;
              }

              if (isRiver && y < SEA_LEVEL - 1) t = y > SEA_LEVEL - 3 ? (biome === 'Desert' ? 7 : 2) : 3;
            } else if (y < SEA_LEVEL) {
              if (isRiver || biome === 'Ocean') t = 4;
            }

            if (y > CAVE_MIN_Y && y < h - CAVE_MAX_Y_OFFSET) {
              if (t === 3 || t === 2 || t === 7 || t === 13) {
                const n1 = perlin.noise3D(wx * CAVE_SCALE, y * CAVE_SCALE * 1.7, wz * CAVE_SCALE);
                const n2 = perlin.noise3D(wx * CAVE_SCALE * 2.2 + 100, y * CAVE_SCALE * 1.1, wz * CAVE_SCALE * 2.2 + 100);
                const caveShape = n1 * 0.7 + n2 * 0.3;
                const depth = Math.max(0, (h - y) / Math.max(1, h));
                const dynamicThreshold = CAVE_THRESHOLD - Math.min(0.14, depth * 0.2);
                const tunnelNoise = Math.abs(perlin.noise3D(wx * CAVE_SCALE * 0.7, y * CAVE_SCALE * 0.45, wz * CAVE_SCALE * 0.7));
                if (caveShape > dynamicThreshold || (depth > 0.35 && tunnelNoise < 0.06)) t = 0;
              }
            }

            const ravineMask = getRavineMask(wx, wz);
            if (ravineMask > 0.82) {
              const ravineDepth = Math.floor((ravineMask - 0.82) * 70) + 10;
              const ravineTop = Math.min(h + 6, CHUNK_HEIGHT - 1);
              const ravineBottom = Math.max(2, ravineTop - ravineDepth);
              if (y <= ravineTop && y >= ravineBottom) t = y < SEA_LEVEL - 2 ? 4 : 0;
            }

            if (t === 3 && y > 6 && y < Math.min(CHUNK_HEIGHT - 6, h - 2)) {
              const veinNoise = octaveNoise2D(wx, wz, 3, 0.5, 2.0, 0.09, 1450, -870);
              const depthBias = 1 - (y / CHUNK_HEIGHT);
              const oreRoll = hashRand2D(wx + y * 13, wz - y * 7, 301);
              if (veinNoise > 0.12 && oreRoll < (0.06 + depthBias * 0.08)) t = 18;
            }

            if (isNearBoundary && y < SEA_LEVEL && (t === 4 || t === 0)) t = 3;
            data[x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT] = t;
          }

          if (!isRiver && (biome === 'Forest' || biome === 'Plains')) {
            let topY = -1;
            let topType = 0;
            for (let yy = CHUNK_HEIGHT - 2; yy >= 1; yy--) {
              const tidx = x + yy * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
              const ttype = data[tidx];
              if (ttype !== 0 && ttype !== 4) {
                topY = yy;
                topType = ttype;
                break;
              }
            }

            if (topY > SEA_LEVEL && (topType === 1 || topType === 2)) {
              const densityNoise = octaveNoise2D(wx, wz, 3, 0.55, 2.0, 0.04, 700, -350) * 0.5 + 0.5;
              const scatter = hashRand2D(wx, wz, 99);
              const localScore = densityNoise * 0.65 + scatter * 0.35;
              const cell = biome === 'Forest' ? 3 : 5;
              const cellRoll = hashRand2D(Math.floor(wx / cell), Math.floor(wz / cell), biome === 'Forest' ? 611 : 619);
              const threshold = biome === 'Forest' ? 0.5 : 0.82;
              const canSpawn = (localScore > threshold) || (biome === 'Forest' && cellRoll > 0.52 && localScore > 0.38);

              if (canSpawn) {
                const heightLimit = 5 + Math.floor(hashRand2D(wx, wz, 157) * 4);
                let obstructed = false;
                for (let ty = topY + 1; ty <= Math.min(CHUNK_HEIGHT - 2, topY + heightLimit + 2) && !obstructed; ty++) {
                  const canopyRadius = ty >= topY + heightLimit - 2 ? 2 : 0;
                  for (let ox = -canopyRadius; ox <= canopyRadius && !obstructed; ox++) {
                    for (let oz = -canopyRadius; oz <= canopyRadius && !obstructed; oz++) {
                      const tx = x + ox;
                      const tz = z + oz;
                      if (tx < 0 || tx >= CHUNK_SIZE || tz < 0 || tz >= CHUNK_SIZE) continue;
                      const idx = tx + ty * CHUNK_SIZE + tz * CHUNK_SIZE * CHUNK_HEIGHT;
                      const b = data[idx];
                      if (b !== 0 && b !== 6) obstructed = true;
                    }
                  }
                }

                if (!obstructed) {
                  const baseIdx = x + topY * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                  if (data[baseIdx] === 2) data[baseIdx] = 1;
                  for (let i = 1; i <= heightLimit; i++) {
                    const ty = topY + i;
                    if (ty >= CHUNK_HEIGHT) break;
                    const idx = x + ty * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                    if (data[idx] === 0 || data[idx] === 6) data[idx] = 5;
                  }
                  for (let ly = -3; ly <= 1; ly++) {
                    const yAbs = topY + heightLimit + ly;
                    if (yAbs < 1 || yAbs >= CHUNK_HEIGHT) continue;
                    const radius = ly >= 0 ? 1 : (ly === -1 ? 2 : (ly === -2 ? 2 : 1));
                    for (let lx = -radius; lx <= radius; lx++) {
                      for (let lz = -radius; lz <= radius; lz++) {
                        if (Math.abs(lx) + Math.abs(lz) > radius + 1) continue;
                        const tx = x + lx;
                        const tz = z + lz;
                        if (tx < 0 || tx >= CHUNK_SIZE || tz < 0 || tz >= CHUNK_SIZE) continue;
                        const lidx = tx + yAbs * CHUNK_SIZE + tz * CHUNK_SIZE * CHUNK_HEIGHT;
                        if (data[lidx] === 0) data[lidx] = 6;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return data;
    }

    return { getRiverMask, getBiome, getNoiseGroundHeight, generateChunkData };
  }

  window.WorldGeneration = { createWorldGenerator };
})();
