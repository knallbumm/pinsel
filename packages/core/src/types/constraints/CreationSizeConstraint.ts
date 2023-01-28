import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface CreationSizeConstraint {
  root: Shape | Scene;
  multiplier?: number;
  constant?: number;
}
