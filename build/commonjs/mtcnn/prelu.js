"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prelu = void 0;
var tf = require("@tensorflow/tfjs");
function prelu(x, alpha) {
    return tf.tidy(function () {
        return tf.add(tf.relu(x), tf.mul(alpha, tf.neg(tf.relu(tf.neg(x)))));
    });
}
exports.prelu = prelu;
//# sourceMappingURL=prelu.js.map