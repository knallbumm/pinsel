import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface CreationSizeAnchor {
  root: Shape | Scene;
  multiplier?: number;
  constant?: number;
}
