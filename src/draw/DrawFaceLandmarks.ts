import { FaceLandmarks } from '../classes/FaceLandmarks';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceLandmarks, WithFaceLandmarks } from '../factories/WithFaceLandmarks';

export interface IDrawFaceLandmarksOptions {
  drawLines?: boolean
  drawPoints?: boolean
  lineWidth?: number
  pointSize?: number
  lineColor?: string
  pointColor?: string
}

export class DrawFaceLandmarksOptions {
  public drawLines: boolean
  public drawPoints: boolean
  public lineWidth: number
  public pointSize: number
  public lineColor: string
  public pointColor: string

  constructor(options: IDrawFaceLandmarksOptions = {}) {
    const { drawLines = true, drawPoints = true, lineWidth, lineColor, pointSize, pointColor } = options
    this.drawLines = drawLines
    this.drawPoints = drawPoints
    this.lineWidth = lineWidth || 1
    this.pointSize = pointSize || 2
    this.lineColor = lineColor || 'rgba(0, 255, 255, 1)'
    this.pointColor = pointColor || 'rgba(255, 0, 255, 1)'
  }
}

export class DrawFaceLandmarks {
  public faceLandmarks: FaceLandmarks
  public options: DrawFaceLandmarksOptions

  constructor(
    faceLandmarks: FaceLandmarks,
    options: IDrawFaceLandmarksOptions = {}
  ) {
    this.faceLandmarks = faceLandmarks
    this.options = new DrawFaceLandmarksOptions(options)
  }

  draw(canvasArg: string | HTMLCanvasElement | CanvasRenderingContext2D) {
    throw new Error("Not supported");
  }
}

export type DrawFaceLandmarksInput = FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>>

export function drawFaceLandmarks(
  canvasArg: string | HTMLCanvasElement,
  faceLandmarks: DrawFaceLandmarksInput | Array<DrawFaceLandmarksInput>
) {
  const faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks]
  faceLandmarksArray.forEach(f => {
    const landmarks = f instanceof FaceLandmarks
      ? f
      : (isWithFaceLandmarks(f) ? f.landmarks : undefined)
    if (!landmarks) {
      throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof')
    }

    new DrawFaceLandmarks(landmarks).draw(canvasArg)
  })
}