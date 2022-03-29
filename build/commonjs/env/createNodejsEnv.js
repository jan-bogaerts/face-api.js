"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodejsEnv = void 0;
var tslib_1 = require("tslib");
var createFileSystem_1 = require("./createFileSystem");
function createNodejsEnv() {
    var fileSystem = createFileSystem_1.createFileSystem();
    return tslib_1.__assign({ Canvas: null, CanvasRenderingContext2D: null, Image: null, ImageData: null, Video: null, createCanvasElement: null, createImageElement: null, fetch: fetch }, fileSystem);
}
exports.createNodejsEnv = createNodejsEnv;
//# sourceMappingURL=createNodejsEnv.js.map