import type { Shape } from '../../shapes';
import type { ResolvedShape } from '../../types/ResolvedShape';

export const resolveShape = (shape: Shape): ResolvedShape => {
  // TODO: Check if there is already an exisiting resolved version

  return {
    ...shape,
    width: shape.actualWidth,
    height: shape.actualHeight,
    x: shape.actualX,
    y: shape.actualY,
    fill: shape.fill,
  };
};
