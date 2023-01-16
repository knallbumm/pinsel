import type { ResolvedCircle } from '@pinsel/core';

export const renderCircle = (
  context: CanvasRenderingContext2D,
  shape: ResolvedCircle
) => {
  context.beginPath();
  context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
  if (shape.fill) {
    context.fillStyle = shape.fill;
    context.fill();
  }

  if (shape.stroke) {
    context.strokeStyle = shape.stroke;
    context.lineWidth = 15;
    context.stroke();
  }
};
