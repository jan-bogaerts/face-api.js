"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractorsFactory = void 0;
var common_1 = require("../common");
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = common_1.extractConvParamsFactory(extractWeights, paramMappings);
    var extractSeparableConvParams = common_1.extractSeparableConvParamsFactory(extractWeights, paramMappings);
    function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var conv0 = isFirstLayer
            ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0")
            : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
        var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
        var conv2 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
        return { conv0: conv0, conv1: conv1, conv2: conv2 };
    }
    function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var _a = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer), conv0 = _a.conv0, conv1 = _a.conv1, conv2 = _a.conv2;
        var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
        return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
    }
    return {
        extractDenseBlock3Params: extractDenseBlock3Params,
        extractDenseBlock4Params: extractDenseBlock4Params
    };
}
exports.extractorsFactory = extractorsFactory;
//# sourceMappingURL=extractorsFactory.js.map