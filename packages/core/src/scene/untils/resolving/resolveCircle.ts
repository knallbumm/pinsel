import type { Circle } from '../../../shapes';
import type { ResolvedCircle } from '../../../types/shapes/circle';

export const resolveCircle = (shape: Circle): ResolvedCircle => {
  return {
    type: 'CIRCLE',
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    radius: shape.radius,
  };
};
