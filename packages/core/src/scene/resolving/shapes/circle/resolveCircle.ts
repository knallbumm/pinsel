import type { Circle } from '../../../../shapes';
import type { ResolvedCircle } from '../../../../types/shapes/circle';
import { resolveStroke } from '../../general/stroke/resolveStroke';

export const resolveCircle = (
  shape: Circle,
  relativeLength: number
): Omit<ResolvedCircle, 'rotation'> => {
  return {
    type: 'CIRCLE',
    radius: shape.radius * relativeLength,
    x: shape.actualX * relativeLength,
    y: shape.actualY * relativeLength,
    fill: shape.fill,
    stroke: resolveStroke(shape, relativeLength),
  };
};
