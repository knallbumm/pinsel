import type { ResolvedFillShape } from '../general/ResolvedFillShape';
import type { ResolvedShape } from '../general/ResolvedShape';

export interface ResolvedCircle extends ResolvedShape, ResolvedFillShape {
  type: 'CIRCLE';
  radius: number;
}
