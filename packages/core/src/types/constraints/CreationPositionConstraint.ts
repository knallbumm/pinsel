import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface CreationPositionConstraint {
  root: Shape | Scene;
  constant?: number;
  type: 'LEADING' | 'TRAILING' | 'TOP' | 'BOTTOM';
}
