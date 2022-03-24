import * as tf from '@tensorflow/tfjs-core';

import { Point, Rect } from '../classes';
import { FaceDetection } from '../classes/FaceDetection';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { NetInput, TNetInput, toNetInput } from '../dom';
import { extendWithFaceDetection, extendWithFaceLandmarks } from '../factories';
import { NeuralNetwork } from '../NeuralNetwork';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { CELL_SIZE } from './config';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { getSizesForScale } from './getSizesForScale';
import { IMtcnnOptions, MtcnnOptions } from './MtcnnOptions';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
import { MtcnnResult, NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public async load(weightsOrUrl: Float32Array | string | undefined): Promise<void> {
    console.warn('mtcnn is deprecated and will be removed soon')
    return super.load(weightsOrUrl)
  }


  public async forwardInput(
    input: NetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<{ results: MtcnnResult[], stats: any }> {

    return Promise.reject("not supported")
  }

  public async forward(
    input: TNetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<MtcnnResult[]> {
    return (
      await this.forwardInput(
        await toNetInput(input),
        forwardParams
      )
    ).results
  }

  public async forwardWithStats(
    input: TNetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<{ results: MtcnnResult[], stats: any }> {
    return this.forwardInput(
      await toNetInput(input),
      forwardParams
    )
  }

  protected getDefaultModelName(): string {
    return 'mtcnn_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {
    return extractParamsFromWeigthMap(weightMap)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}