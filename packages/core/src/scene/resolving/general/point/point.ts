import type { Point } from '../../../../types/Point';

export function resolvePoint(point: Point, relativeLength: number): Point {
  return { x: point.x * relativeLength, y: point.y * relativeLength };
}
