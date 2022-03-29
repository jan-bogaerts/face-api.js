import * as tf from '@tensorflow/tfjs';
import { ConvWithBatchNorm } from './types';
export declare function convWithBatchNorm(x: tf.Tensor4D, params: ConvWithBatchNorm): tf.Tensor4D;
