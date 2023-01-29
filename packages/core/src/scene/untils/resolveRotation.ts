import { resolveHorizontalPositionConstraint } from '../../helper/resolveHorizontalPositionConstraint';
import { resolveVerticalPositionConstraint } from '../../helper/resolveVerticalPositionConstraint';
import type { Shape } from '../../shapes';
import type { ResolvedRotation } from '../../types/ResolvedRotation';
import type { HorizontalPositionConstraint } from '../constraints';
import { resolveShortAnchor } from './resolveShortAnchor';

export const resolveRotation = (shape: Shape): ResolvedRotation => {
  const bounds = shape.actualBounds;

  let x = 0;
  let y = 0;

  if (shape.rotation.point == 'ANCHOR') {
    const resolvedAnglePoint = resolveShortAnchor(shape.anchor);
    x = bounds.minX + resolvedAnglePoint.x * bounds.width;
    y = bounds.minY + resolvedAnglePoint.y * bounds.height;
  } else if (
    typeof shape.rotation.point.x == 'number' &&
    typeof shape.rotation.point.y == 'number'
  ) {
    x = bounds.minX + shape.rotation.point.x * bounds.width;
    y = bounds.minY + shape.rotation.point.y * bounds.height;
  } else {
    x = resolveHorizontalPositionConstraint(shape.rotation.point.x);
    y = resolveVerticalPositionConstraint(shape.rotation.point.y);
  }

  const resolved: ResolvedRotation = {
    angle:
      shape.rotation.unit == 'RAD'
        ? shape.rotation.angle
        : (shape.rotation.angle * Math.PI) / 180,
    point: { x, y },
  };

  return resolved;
};
