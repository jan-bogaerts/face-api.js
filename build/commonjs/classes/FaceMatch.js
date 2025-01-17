"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceMatch = void 0;
var utils_1 = require("../utils");
var FaceMatch = /** @class */ (function () {
    function FaceMatch(label, distance) {
        this._label = label;
        this._distance = distance;
    }
    Object.defineProperty(FaceMatch.prototype, "label", {
        get: function () { return this._label; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FaceMatch.prototype, "distance", {
        get: function () { return this._distance; },
        enumerable: false,
        configurable: true
    });
    FaceMatch.prototype.toString = function (withDistance) {
        if (withDistance === void 0) { withDistance = true; }
        return "" + this.label + (withDistance ? " (" + utils_1.round(this.distance) + ")" : '');
    };
    return FaceMatch;
}());
exports.FaceMatch = FaceMatch;
//# sourceMappingURL=FaceMatch.js.map