import * as tf from '@tensorflow/tfjs-core';

import { Box, IDimensions } from '../classes';

export async function extractImagePatches(
  img: HTMLCanvasElement,
  boxes: Box[],
  { width, height }: IDimensions
): Promise<tf.Tensor4D[]> {


  throw new Error("Not supported")
}