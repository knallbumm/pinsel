import type { Circle } from '../../../shapes';
import type { ResolvedCircle } from '../../../types/shapes/circle';
import { resolveStroke } from '../resolveStroke';

export const resolveCircle = (
  shape: Circle
): Omit<ResolvedCircle, 'rotation'> => {
  return {
    type: 'CIRCLE',
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    stroke: resolveStroke(shape),
    radius: shape.radius,
  };
};
