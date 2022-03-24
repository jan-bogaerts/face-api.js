
import { createFileSystem } from './createFileSystem';
import { createNodejsEnv } from './createNodejsEnv';
import { isBrowser } from './isBrowser';
import { isNodejs } from './isNodejs';
import { Environment } from './types';

let environment: Environment | null




function initialize() {

}

function monkeyPatch(env: Partial<Environment>) {
  if (!environment) {
    initialize()
  }

  if (!environment) {
    throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()')
  }

  const { Canvas = environment.Canvas, Image = environment.Image } = env
  environment.Canvas = Canvas
  environment.Image = Image
  environment.createCanvasElement = null
  environment.createImageElement = null

  environment.ImageData = env.ImageData || environment.ImageData
  environment.Video = env.Video || environment.Video
  environment.fetch = env.fetch || environment.fetch
  environment.readFile = env.readFile || environment.readFile
}

export const env = {
  initialize,

  createFileSystem,
  createNodejsEnv,
  monkeyPatch,
  isBrowser,
  isNodejs
}

initialize()

export * from './types'
