import * as tf from '@tensorflow/tfjs';
import { ScaleLayerParams } from './types';
export declare function scale(x: tf.Tensor4D, params: ScaleLayerParams): tf.Tensor4D;