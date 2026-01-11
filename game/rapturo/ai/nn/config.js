// nn/config.js

export const NN_CONFIG = {
    // These must match the model you trained in Python
    architecture: "Transformer", // or "LSTM"
    vocabSize: 10000,
    embeddingDim: 256,
    numLayers: 4,
    numHeads: 4,     // For Transformer
    seqLength: 64,   // Max context window
    
    // System settings
    useGpu: true,    // TF.js specific
    backend: 'webgl' // 'webgl' (GPU) or 'cpu' or 'wasm'
};
