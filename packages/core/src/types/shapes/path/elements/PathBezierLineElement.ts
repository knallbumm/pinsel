import type { Point } from '../../../base/Point';
import type { PathLineElement } from './PathLineElement';

export interface PathBezierLineElement extends PathLineElement {
  variant: 'BEZIER';
  controlPoint1: Point;
  controlPoint2: Point;
}
