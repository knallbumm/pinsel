import type { ResolvedFillShape } from '../general';
import type { CloseElement } from './elements/CloseElement';
import type { PathPointElement } from './elements/PathPointElement';
import type { SpecificLineElement } from './elements/SpecificLineElement';

export interface ResolvedPath extends Omit<ResolvedFillShape, 'x' | 'y'> {
  type: 'PATH';
  path: (PathPointElement | SpecificLineElement | CloseElement)[];
}
