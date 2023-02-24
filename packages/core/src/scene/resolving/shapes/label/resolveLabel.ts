import type { Label } from '../../../../shapes/label';
import type { ResolvedLabel } from '../../../../types/shapes/label';
import { resolveFont } from '../../general/font/resolveFont';

export const resolveLabel = (
  shape: Label,
  relativeLength: number
): Omit<ResolvedLabel, 'rotation'> => {
  return {
    type: 'LABEL',
    x: shape.actualX * relativeLength,
    y: shape.actualY * relativeLength,
    text: shape.text,
    font: resolveFont(shape.font),
  };
};
