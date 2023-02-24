import type { ResolvedPath } from '../../../../types';
import { resolvePoint } from '../../general/point/point';

export function resolvePathPath(
  path: ResolvedPath['path'],
  relativeLength: number
): ResolvedPath['path'] {
  return path.map((element) => {
    if (element.type == 'POINT') {
      return {
        ...element,
        x: element.x * relativeLength,
        y: element.y * relativeLength,
      };
    } else if (element.type == 'LINE') {
      if (element.variant == 'LINEAR') {
        return element;
      } else if (element.variant == 'BEZIER') {
        return {
          ...element,
          controlPoint1: resolvePoint(element.controlPoint1, relativeLength),
          controlPoint2: resolvePoint(element.controlPoint2, relativeLength),
        };
      } else if (element.variant == 'ARC') {
        return {
          ...element,
          controlPoint: resolvePoint(element.controlPoint, relativeLength),
        };
      }
      return element;
    } else {
      return { ...element };
    }
  });
}
