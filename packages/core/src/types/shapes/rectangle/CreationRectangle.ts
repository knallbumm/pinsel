import type { Height } from '../../base/Height';
import type { Width } from '../../base/Width';
import type { CreationShape } from '../general/CreationShape';

export interface CreationRectangle extends CreationShape {
  width: Width;
  height: Height;
}
