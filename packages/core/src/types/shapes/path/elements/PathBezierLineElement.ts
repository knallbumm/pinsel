import type { PathLineElement } from './PathLineElement';
import type { Point } from './Point';

export interface PathBezierLineElement extends PathLineElement {
  variant: 'BEZIER';
  controlPoint1?: Point;
  controlPoint2?: Point;
}
