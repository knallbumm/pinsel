import type { Shape } from '../../shapes';
import type { ResolvedStroke } from '../../types/ResolvedStroke';

export const resolveStroke = (shape: Shape): ResolvedStroke | undefined => {
  return shape.stroke.color && shape.stroke.width
    ? { width: shape.stroke.width, color: shape.stroke.color }
    : undefined;
};
