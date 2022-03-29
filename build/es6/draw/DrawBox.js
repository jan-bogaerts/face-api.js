import { Box } from '../classes';
import { AnchorPosition, DrawTextFieldOptions } from './DrawTextField';
var DrawBoxOptions = /** @class */ (function () {
    function DrawBoxOptions(options) {
        if (options === void 0) { options = {}; }
        var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
        this.boxColor = boxColor || 'rgba(0, 0, 255, 1)';
        this.lineWidth = lineWidth || 2;
        this.label = label;
        var defaultDrawLabelOptions = {
            anchorPosition: AnchorPosition.BOTTOM_LEFT,
            backgroundColor: this.boxColor
        };
        this.drawLabelOptions = new DrawTextFieldOptions(Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
    }
    return DrawBoxOptions;
}());
export { DrawBoxOptions };
var DrawBox = /** @class */ (function () {
    function DrawBox(box, options) {
        if (options === void 0) { options = {}; }
        this.box = new Box(box);
        this.options = new DrawBoxOptions(options);
    }
    DrawBox.prototype.draw = function (canvasArg) {
        throw new Error("Not supported");
    };
    return DrawBox;
}());
export { DrawBox };
//# sourceMappingURL=DrawBox.js.map