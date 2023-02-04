import type { Rectangle } from '../../../shapes';
import type { ResolvedRectangle } from '../../../types';
import { resolveStroke } from '../resolveStroke';

export const resolveRectangle = (
  shape: Rectangle
): Omit<ResolvedRectangle, 'rotation'> => {
  return {
    type: 'RECTANGLE',
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    stroke: resolveStroke(shape),
    width: shape.actualWidth,
    height: shape.actualHeight,
  };
};
