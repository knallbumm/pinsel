import type { VerticalPositionConstraint } from '../scene/constraints';
import { Shape } from '../shapes';

export const resolveVerticalPositionConstraint = (
  point: number | VerticalPositionConstraint
): number => {
  if (typeof point == 'number') {
    return point;
  } else if (point.root.shape instanceof Shape) {
    const bounds = point.root.shape.actualBounds;
    return (
      (point.type == 'BOTTOM' ? bounds.maxY : bounds.minY) + point.constant
    );
  } else {
    return 0 + point.constant;
  }
};
