export class Sampler {
    /**
     * Samples the next token ID based on logits and temperature
     * @param {tf.Tensor} logits - The output tensor from the model
     * @param {number} temperature - Higher = more random, Lower = more deterministic
     */
    static async sample(logits, temperature = 1.0) {
        return tf.tidy(() => {
            // 1. Apply Temperature
            const scaledLogits = logits.div(tf.scalar(temperature));
            
            // 2. Convert to probabilities (Softmax)
            const probs = tf.softmax(scaledLogits);

            // 3. Draw a sample from the multinomial distribution
            // Returns a 1D tensor with the index
            return tf.multinomial(probs, 1).dataSync()[0];
        });
    }
}
