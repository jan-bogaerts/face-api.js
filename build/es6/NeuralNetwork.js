import { __awaiter, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs';
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork(_name) {
        this._name = _name;
        this._params = undefined;
        this._paramMappings = [];
    }
    Object.defineProperty(NeuralNetwork.prototype, "params", {
        get: function () { return this._params; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
        get: function () { return this._paramMappings; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeuralNetwork.prototype, "isLoaded", {
        get: function () { return !!this.params; },
        enumerable: false,
        configurable: true
    });
    NeuralNetwork.prototype.getParamFromPath = function (paramPath) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        return obj[objProp];
    };
    NeuralNetwork.prototype.reassignParamFromPath = function (paramPath, tensor) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        obj[objProp].dispose();
        obj[objProp] = tensor;
    };
    NeuralNetwork.prototype.getParamList = function () {
        var _this = this;
        return this._paramMappings.map(function (_a) {
            var paramPath = _a.paramPath;
            return ({
                path: paramPath,
                tensor: _this.getParamFromPath(paramPath)
            });
        });
    };
    NeuralNetwork.prototype.getTrainableParams = function () {
        return this.getParamList().filter(function (param) { return param.tensor instanceof tf.Variable; });
    };
    NeuralNetwork.prototype.getFrozenParams = function () {
        return this.getParamList().filter(function (param) { return !(param.tensor instanceof tf.Variable); });
    };
    NeuralNetwork.prototype.variable = function () {
        var _this = this;
        this.getFrozenParams().forEach(function (_a) {
            var path = _a.path, tensor = _a.tensor;
            _this.reassignParamFromPath(path, tensor.variable());
        });
    };
    NeuralNetwork.prototype.freeze = function () {
        var _this = this;
        this.getTrainableParams().forEach(function (_a) {
            var path = _a.path, variable = _a.tensor;
            var tensor = tf.tensor(variable.dataSync());
            variable.dispose();
            _this.reassignParamFromPath(path, tensor);
        });
    };
    NeuralNetwork.prototype.dispose = function (throwOnRedispose) {
        if (throwOnRedispose === void 0) { throwOnRedispose = true; }
        this.getParamList().forEach(function (param) {
            if (throwOnRedispose && param.tensor.isDisposed) {
                throw new Error("param tensor has already been disposed for path " + param.path);
            }
            param.tensor.dispose();
        });
        this._params = undefined;
    };
    NeuralNetwork.prototype.serializeParams = function () {
        return new Float32Array(this.getParamList()
            .map(function (_a) {
            var tensor = _a.tensor;
            return Array.from(tensor.dataSync());
        })
            .reduce(function (flat, arr) { return flat.concat(arr); }));
    };
    NeuralNetwork.prototype.load = function (weightsOrUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.reject("not supopret")];
            });
        });
    };
    NeuralNetwork.prototype.loadFromUri = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Not supported");
            });
        });
    };
    NeuralNetwork.prototype.loadFromWeightMap = function (weightMap) {
        var _a = this.extractParamsFromWeigthMap(weightMap), paramMappings = _a.paramMappings, params = _a.params;
        this._paramMappings = paramMappings;
        this._params = params;
    };
    NeuralNetwork.prototype.extractWeights = function (weights) {
        var _a = this.extractParams(weights), paramMappings = _a.paramMappings, params = _a.params;
        this._paramMappings = paramMappings;
        this._params = params;
    };
    NeuralNetwork.prototype.traversePropertyPath = function (paramPath) {
        if (!this.params) {
            throw new Error("traversePropertyPath - model has no loaded params");
        }
        var result = paramPath.split('/').reduce(function (res, objProp) {
            if (!res.nextObj.hasOwnProperty(objProp)) {
                throw new Error("traversePropertyPath - object does not have property " + objProp + ", for path " + paramPath);
            }
            return { obj: res.nextObj, objProp: objProp, nextObj: res.nextObj[objProp] };
        }, { nextObj: this.params });
        var obj = result.obj, objProp = result.objProp;
        if (!obj || !objProp || !(obj[objProp] instanceof tf.Tensor)) {
            throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
        }
        return { obj: obj, objProp: objProp };
    };
    return NeuralNetwork;
}());
export { NeuralNetwork };
//# sourceMappingURL=NeuralNetwork.js.map