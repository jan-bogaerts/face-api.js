import { __assign } from "tslib";
import { createFileSystem } from './createFileSystem';
export function createNodejsEnv() {
    var fileSystem = createFileSystem();
    return __assign({ Canvas: null, CanvasRenderingContext2D: null, Image: null, ImageData: null, Video: null, createCanvasElement: null, createImageElement: null, fetch: fetch }, fileSystem);
}
//# sourceMappingURL=createNodejsEnv.js.map