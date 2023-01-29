import type { HorizontalPositionConstraint } from '../scene/constraints';
import { Shape } from '../shapes';

export const resolveHorizontalPositionConstraint = (
  point: number | HorizontalPositionConstraint
): number => {
  if (typeof point == 'number') {
    return point;
  } else if (point.root.shape instanceof Shape) {
    const bounds = point.root.shape.actualBounds;
    return (
      (point.type == 'TRAILING' ? bounds.maxX : bounds.minX) + point.constant
    );
  } else {
    return 0 + point.constant;
  }
};
