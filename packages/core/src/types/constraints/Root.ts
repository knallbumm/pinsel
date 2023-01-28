import type { Scene } from '../../scene/Scene';
import type { Shape } from '../../shapes';

export interface Root {
  shape: Shape | Scene;
}
