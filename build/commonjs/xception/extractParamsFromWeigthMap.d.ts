import * as tf from '@tensorflow/tfjs';
import { ParamMapping } from '../common';
import { TinyXceptionParams } from './types';
export declare function extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap, numMainBlocks: number): {
    params: TinyXceptionParams;
    paramMappings: ParamMapping[];
};
