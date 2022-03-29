import { createFileSystem } from './createFileSystem';
import { createNodejsEnv } from './createNodejsEnv';
import { isBrowser } from './isBrowser';
import { isNodejs } from './isNodejs';
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
export var env = {
    initialize: initialize,
    createFileSystem: createFileSystem,
    createNodejsEnv: createNodejsEnv,
    monkeyPatch: monkeyPatch,
    isBrowser: isBrowser,
    isNodejs: isNodejs
};
initialize();
export * from './types';
//# sourceMappingURL=index.js.map