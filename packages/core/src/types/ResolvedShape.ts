import type { BaseShape } from '../shapes/Shape/BaseShape';

export interface ResolvedShape extends BaseShape {
  x: number;
  y: number;
  width: number;
  height: number;
}
