"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mtcnn = void 0;
var tslib_1 = require("tslib");
var dom_1 = require("../dom");
var NeuralNetwork_1 = require("../NeuralNetwork");
var extractParams_1 = require("./extractParams");
var extractParamsFromWeigthMap_1 = require("./extractParamsFromWeigthMap");
var Mtcnn = /** @class */ (function (_super) {
    tslib_1.__extends(Mtcnn, _super);
    function Mtcnn() {
        return _super.call(this, 'Mtcnn') || this;
    }
    Mtcnn.prototype.load = function (weightsOrUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.warn('mtcnn is deprecated and will be removed soon');
                return [2 /*return*/, _super.prototype.load.call(this, weightsOrUrl)];
            });
        });
    };
    Mtcnn.prototype.forwardInput = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, Promise.reject("not supported")];
            });
        });
    };
    Mtcnn.prototype.forward = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, dom_1.toNetInput(input)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), forwardParams])];
                    case 2: return [2 /*return*/, (_b.sent()).results];
                }
            });
        });
    };
    Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, dom_1.toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(), forwardParams])];
                }
            });
        });
    };
    Mtcnn.prototype.getDefaultModelName = function () {
        return 'mtcnn_model';
    };
    Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap_1.extractParamsFromWeigthMap(weightMap);
    };
    Mtcnn.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return Mtcnn;
}(NeuralNetwork_1.NeuralNetwork));
exports.Mtcnn = Mtcnn;
//# sourceMappingURL=Mtcnn.js.map