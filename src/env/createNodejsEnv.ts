import { createFileSystem } from './createFileSystem';
import { Environment } from './types';

export function createNodejsEnv(): Environment {


    const fileSystem = createFileSystem()
  return {
    Canvas: null,
    CanvasRenderingContext2D: null,
    Image: null,
    ImageData: null,
    Video: null,
    createCanvasElement: null,
    createImageElement: null,
    fetch,
    ...fileSystem
  }
}