import { __awaiter, __extends, __generator } from "tslib";
import { toNetInput } from '../dom';
import { NeuralNetwork } from '../NeuralNetwork';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
var Mtcnn = /** @class */ (function (_super) {
    __extends(Mtcnn, _super);
    function Mtcnn() {
        return _super.call(this, 'Mtcnn') || this;
    }
    Mtcnn.prototype.load = function (weightsOrUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.warn('mtcnn is deprecated and will be removed soon');
                return [2 /*return*/, _super.prototype.load.call(this, weightsOrUrl)];
            });
        });
    };
    Mtcnn.prototype.forwardInput = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.reject("not supported")];
            });
        });
    };
    Mtcnn.prototype.forward = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), forwardParams])];
                    case 2: return [2 /*return*/, (_b.sent()).results];
                }
            });
        });
    };
    Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(), forwardParams])];
                }
            });
        });
    };
    Mtcnn.prototype.getDefaultModelName = function () {
        return 'mtcnn_model';
    };
    Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    Mtcnn.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return Mtcnn;
}(NeuralNetwork));
export { Mtcnn };
//# sourceMappingURL=Mtcnn.js.map