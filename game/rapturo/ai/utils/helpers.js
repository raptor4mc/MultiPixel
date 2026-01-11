export class Sampler {
    /**
     * Selects the next token ID based on the model's output logits.
     * @param {tf.Tensor} logits - The output tensor from the model (shape: [vocab_size])
     * @param {number} temperature - Controls randomness (0.1 = predictable, 1.0 = creative)
     * @param {number} top_k - (Optional) Limit sampling to the top X probabilities
     */
    static async sample(logits, temperature = 1.0, top_k = 0) {
        return tf.tidy(() => {
            // 1. Apply Temperature (dividing by temp flattens or sharpens the distribution)
            const scaledLogits = logits.div(tf.scalar(temperature));
            
            // 2. Convert logits to probabilities (0.0 to 1.0)
            let probs = tf.softmax(scaledLogits);

            // 3. (Optional) Top-K Sampling
            // Zeros out all probabilities except the top K highest ones
            if (top_k > 0) {
                const { values, indices } = tf.topk(probs, top_k);
                const mask = tf.oneHot(indices, probs.shape[0]);
                // Re-normalize after masking
                probs = probs.mul(mask.sum(0)); 
                probs = probs.div(probs.sum());
            }

            // 4. Draw a sample from the distribution
            // tf.multinomial returns the index of the selected token
            return tf.multinomial(probs, 1).dataSync()[0];
        });
    }
}
