import type { Label } from '../../../shapes/label';
import type { ResolvedLabel } from '../../../types/shapes/label';

export const resolveLabel = (shape: Label): ResolvedLabel => {
  return {
    type: 'LABEL',
    x: shape.actualX,
    y: shape.actualY,
    text: shape.text,
  };
};
