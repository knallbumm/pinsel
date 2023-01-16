import type { ResolvedCircle } from '@pinsel/core/src/types/shapes/circle';

export const renderCircle = (
  context: CanvasRenderingContext2D,
  shape: ResolvedCircle
) => {
  context.fillStyle = shape.fill;
  context.beginPath();
  context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
  context.fill();
};
