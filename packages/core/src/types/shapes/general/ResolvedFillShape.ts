import type { ResolvedStroke } from '../../ResolvedStroke';
import type { ResolvedShape } from './ResolvedShape';

export interface ResolvedFillShape extends ResolvedShape {
  fill?: string;
  stroke?: ResolvedStroke;
}
