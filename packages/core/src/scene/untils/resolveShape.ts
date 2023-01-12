import type { Shape } from '../../shapes';

export const resolveShape = (shape: Shape) => {
  // TODO: Check if there is already an exisiting resolved version

  return {
    width: shape.actualWidth,
    height: shape.actualHeight,
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
    type: shape.type,
  };
};
