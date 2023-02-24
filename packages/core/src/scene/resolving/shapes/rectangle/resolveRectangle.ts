import type { Rectangle } from '../../../../shapes';
import type { ResolvedRectangle } from '../../../../types';
import { resolveStroke } from '../../general/stroke/resolveStroke';

export const resolveRectangle = (
  shape: Rectangle,
  relativeLength: number
): Omit<ResolvedRectangle, 'rotation'> => {
  return {
    type: 'RECTANGLE',
    x: shape.actualX * relativeLength,
    y: shape.actualY * relativeLength,
    fill: shape.fill,
    stroke: resolveStroke(shape, relativeLength),
    width: shape.actualWidth * relativeLength,
    height: shape.actualHeight * relativeLength,
  };
};
