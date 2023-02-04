import type { Stroke } from '../../../additions/stroke';
import type { BaseShape } from './BaseShape';

export interface FillShape extends BaseShape {
  fill?: string;
  stroke?: Stroke;
}
