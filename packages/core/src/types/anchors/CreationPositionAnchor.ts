import type { Shape } from '../../shapes';

export interface CreationPositionAnchor {
  root: Shape;
  constant?: number;
  type: 'LEADING' | 'TRAILING' | 'TOP' | 'BOTTOM';
}
