import type { Shape } from '../../../../shapes';
import type { ResolvedStroke } from '../../../../types/ResolvedStroke';

export const resolveStroke = (
  shape: Shape,
  relativeLength: number
): ResolvedStroke | undefined => {
  return shape.stroke.color && shape.stroke.width
    ? { width: shape.stroke.width * relativeLength, color: shape.stroke.color }
    : undefined;
};
