import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface AnchorRoot {
  shape: Shape | Scene;
}
