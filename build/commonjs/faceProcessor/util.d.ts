import * as tf from '@tensorflow/tfjs';
export declare function seperateWeightMaps(weightMap: tf.NamedTensorMap): {
    featureExtractorMap: tf.NamedTensorMap;
    classifierMap: tf.NamedTensorMap;
};
