import type { ResolvedRotation } from '../../ResolvedRotation';
import type { BaseShape } from './BaseShape';

export interface ResolvedShape extends BaseShape {
  x: number;
  y: number;
  rotation: ResolvedRotation;
}
