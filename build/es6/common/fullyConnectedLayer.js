import * as tf from '@tensorflow/tfjs';
export function fullyConnectedLayer(x, params) {
    return tf.tidy(function () {
        return tf.add(tf.matMul(x, params.weights), params.bias);
    });
}
//# sourceMappingURL=fullyConnectedLayer.js.map