import type { Height } from '../../Height';
import type { Width } from '../../Width';
import type { CreationShape } from '../general/CreationShape';

export interface CreationRectangle extends CreationShape {
  width: Width;
  height: Height;
}
