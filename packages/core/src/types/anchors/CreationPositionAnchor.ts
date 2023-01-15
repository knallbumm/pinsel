import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface CreationPositionAnchor {
  root: Shape | Scene;
  constant?: number;
  type: 'LEADING' | 'TRAILING' | 'TOP' | 'BOTTOM';
}
