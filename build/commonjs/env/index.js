"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var tslib_1 = require("tslib");
var createFileSystem_1 = require("./createFileSystem");
var createNodejsEnv_1 = require("./createNodejsEnv");
var isBrowser_1 = require("./isBrowser");
var isNodejs_1 = require("./isNodejs");
var environment;
function initialize() {
}
function monkeyPatch(env) {
    if (!environment) {
        initialize();
    }
    if (!environment) {
        throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()');
    }
    var _a = env.Canvas, Canvas = _a === void 0 ? environment.Canvas : _a, _b = env.Image, Image = _b === void 0 ? environment.Image : _b;
    environment.Canvas = Canvas;
    environment.Image = Image;
    environment.createCanvasElement = null;
    environment.createImageElement = null;
    environment.ImageData = env.ImageData || environment.ImageData;
    environment.Video = env.Video || environment.Video;
    environment.fetch = env.fetch || environment.fetch;
    environment.readFile = env.readFile || environment.readFile;
}
exports.env = {
    initialize: initialize,
    createFileSystem: createFileSystem_1.createFileSystem,
    createNodejsEnv: createNodejsEnv_1.createNodejsEnv,
    monkeyPatch: monkeyPatch,
    isBrowser: isBrowser_1.isBrowser,
    isNodejs: isNodejs_1.isNodejs
};
initialize();
tslib_1.__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map