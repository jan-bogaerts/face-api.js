"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawBox = exports.DrawBoxOptions = void 0;
var classes_1 = require("../classes");
var DrawTextField_1 = require("./DrawTextField");
var DrawBoxOptions = /** @class */ (function () {
    function DrawBoxOptions(options) {
        if (options === void 0) { options = {}; }
        var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
        this.boxColor = boxColor || 'rgba(0, 0, 255, 1)';
        this.lineWidth = lineWidth || 2;
        this.label = label;
        var defaultDrawLabelOptions = {
            anchorPosition: DrawTextField_1.AnchorPosition.BOTTOM_LEFT,
            backgroundColor: this.boxColor
        };
        this.drawLabelOptions = new DrawTextField_1.DrawTextFieldOptions(Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
    }
    return DrawBoxOptions;
}());
exports.DrawBoxOptions = DrawBoxOptions;
var DrawBox = /** @class */ (function () {
    function DrawBox(box, options) {
        if (options === void 0) { options = {}; }
        this.box = new classes_1.Box(box);
        this.options = new DrawBoxOptions(options);
    }
    DrawBox.prototype.draw = function (canvasArg) {
        throw new Error("Not supported");
    };
    return DrawBox;
}());
exports.DrawBox = DrawBox;
//# sourceMappingURL=DrawBox.js.map