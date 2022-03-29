"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawFaceLandmarks = exports.DrawFaceLandmarks = exports.DrawFaceLandmarksOptions = void 0;
var FaceLandmarks_1 = require("../classes/FaceLandmarks");
var WithFaceLandmarks_1 = require("../factories/WithFaceLandmarks");
var DrawFaceLandmarksOptions = /** @class */ (function () {
    function DrawFaceLandmarksOptions(options) {
        if (options === void 0) { options = {}; }
        var _a = options.drawLines, drawLines = _a === void 0 ? true : _a, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
        this.drawLines = drawLines;
        this.drawPoints = drawPoints;
        this.lineWidth = lineWidth || 1;
        this.pointSize = pointSize || 2;
        this.lineColor = lineColor || 'rgba(0, 255, 255, 1)';
        this.pointColor = pointColor || 'rgba(255, 0, 255, 1)';
    }
    return DrawFaceLandmarksOptions;
}());
exports.DrawFaceLandmarksOptions = DrawFaceLandmarksOptions;
var DrawFaceLandmarks = /** @class */ (function () {
    function DrawFaceLandmarks(faceLandmarks, options) {
        if (options === void 0) { options = {}; }
        this.faceLandmarks = faceLandmarks;
        this.options = new DrawFaceLandmarksOptions(options);
    }
    DrawFaceLandmarks.prototype.draw = function (canvasArg) {
        throw new Error("Not supported");
    };
    return DrawFaceLandmarks;
}());
exports.DrawFaceLandmarks = DrawFaceLandmarks;
function drawFaceLandmarks(canvasArg, faceLandmarks) {
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
    faceLandmarksArray.forEach(function (f) {
        var landmarks = f instanceof FaceLandmarks_1.FaceLandmarks
            ? f
            : (WithFaceLandmarks_1.isWithFaceLandmarks(f) ? f.landmarks : undefined);
        if (!landmarks) {
            throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof');
        }
        new DrawFaceLandmarks(landmarks).draw(canvasArg);
    });
}
exports.drawFaceLandmarks = drawFaceLandmarks;
//# sourceMappingURL=DrawFaceLandmarks.js.map