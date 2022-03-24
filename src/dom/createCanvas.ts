import { IDimensions } from '../classes/Dimensions';


export function createCanvas({ width, height }: IDimensions): HTMLCanvasElement {

    throw new Error("Not supported");
}

export function createCanvasFromMedia(media: HTMLImageElement | HTMLVideoElement | ImageData, dims?: IDimensions): HTMLCanvasElement {

  throw new Error("Not supported");
}