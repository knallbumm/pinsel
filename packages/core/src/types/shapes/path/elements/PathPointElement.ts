import type { PathElement } from './PathElement';

export interface PathPointElement extends PathElement {
  type: 'POINT';
  x: number;
  y: number;
}
