import type { Shape } from '../../shapes';

export interface CreationSizeAnchor {
  root: Shape;
  multiplier?: number;
  constant?: number;
}
