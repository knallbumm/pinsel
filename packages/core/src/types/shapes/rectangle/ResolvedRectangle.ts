import type { ResolvedFillShape } from '../general/ResolvedFillShape';

export interface ResolvedRectangle extends ResolvedFillShape {
  type: 'RECTANGLE';
  width: number;
  height: number;
}
