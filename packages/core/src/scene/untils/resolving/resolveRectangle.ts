import type { Rectangle } from '../../../shapes';
import type { ResolvedRectangle } from '../../../types';

export const resolveRectangle = (shape: Rectangle): ResolvedRectangle => {
  return {
    type: 'RECTANGLE',
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    width: shape.actualWidth,
    height: shape.actualHeight,
  };
};
