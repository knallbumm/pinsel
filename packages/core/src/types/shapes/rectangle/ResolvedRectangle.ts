import type { ResolvedFillShape } from '../general/ResolvedFillShape';
import type { ResolvedShape } from '../general/ResolvedShape';

export interface ResolvedRectangle extends ResolvedFillShape {
  type: 'RECTANGLE';
  width: number;
  height: number;
}
