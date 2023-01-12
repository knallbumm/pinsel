import type { ResolvedFillShape } from './ResolvedFillShape';
import type { ResolvedShape } from './ResolvedShape';

export interface ResolvedRectangle extends ResolvedShape, ResolvedFillShape {
  type: 'RECTANGLE';
}
