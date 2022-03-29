"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNetInput = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var NetInput_1 = require("./NetInput");
/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
function toNetInput(inputs) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var inputArgArray, getIdxHint, inputArray;
        return tslib_1.__generator(this, function (_a) {
            if (inputs instanceof NetInput_1.NetInput) {
                return [2 /*return*/, inputs];
            }
            inputArgArray = Array.isArray(inputs)
                ? inputs
                : [inputs];
            if (!inputArgArray.length) {
                throw new Error('toNetInput - empty array passed as input');
            }
            getIdxHint = function (idx) { return Array.isArray(inputs) ? " at input index " + idx + ":" : ''; };
            inputArray = inputArgArray.map(function (arg) { return arg; });
            inputArray.forEach(function (input, i) {
                if (!utils_1.isTensor3D(input) && !utils_1.isTensor4D(input)) {
                    if (typeof inputArgArray[i] === 'string') {
                        throw new Error("toNetInput -" + getIdxHint(i) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i]);
                    }
                    throw new Error("toNetInput -" + getIdxHint(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
                }
                if (utils_1.isTensor4D(input)) {
                    // if tf.Tensor4D is passed in the input array, the batch size has to be 1
                    var batchSize = input.shape[0];
                    if (batchSize !== 1) {
                        throw new Error("toNetInput -" + getIdxHint(i) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                    }
                }
            });
            return [2 /*return*/, new NetInput_1.NetInput(inputArray, Array.isArray(inputs))];
        });
    });
}
exports.toNetInput = toNetInput;
//# sourceMappingURL=toNetInput.js.map