import type { BaseShape } from './BaseShape';

export interface ResolvedShape extends BaseShape {
  x: number;
  y: number;
  width: number;
  height: number;
}
