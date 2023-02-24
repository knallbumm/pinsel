import type { Point } from '../../../Point';
import type { PathLineElement } from './PathLineElement';

export interface PathArcLineElement extends PathLineElement {
  variant: 'ARC';
  controlPoint: Point;
}
