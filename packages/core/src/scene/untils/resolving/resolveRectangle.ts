import type { Rectangle } from '../../../shapes';
import type { ResolvedRectangle } from '../../../types';

export const resolveRectangle = (
  shape: Rectangle
): Omit<ResolvedRectangle, 'rotation'> => {
  return {
    type: 'RECTANGLE',
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    stroke: shape.stroke,
    width: shape.actualWidth,
    height: shape.actualHeight,
  };
};
