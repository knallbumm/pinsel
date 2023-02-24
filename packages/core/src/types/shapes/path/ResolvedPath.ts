import type { ResolvedShape } from '../general/ResolvedShape';
import type { CloseElement } from './elements/CloseElement';
import type { PathPointElement } from './elements/PathPointElement';
import type { SpecificLineElement } from './elements/SpecificLineElement';

export interface ResolvedPath extends Omit<ResolvedShape, 'x' | 'y'> {
  type: 'PATH';
  path: (PathPointElement | SpecificLineElement | CloseElement)[];
}
