import * as tf from '@tensorflow/tfjs';
import { FCParams } from './types';
export declare function fullyConnectedLayer(x: tf.Tensor2D, params: FCParams): tf.Tensor2D;
