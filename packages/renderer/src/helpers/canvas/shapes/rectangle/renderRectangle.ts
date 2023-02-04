import type { ResolvedRectangle } from '@pinsel/core';

export const renderRectangle = (
  context: CanvasRenderingContext2D,
  shape: ResolvedRectangle
) => {
  context.beginPath();
  context.rect(shape.x, shape.y, shape.width, shape.height);
  if (shape.fill) {
    context.fillStyle = shape.fill;
    context.fill();
  }

  if (shape.stroke) {
    context.strokeStyle = shape.stroke.color;
    context.lineWidth = shape.stroke.width;
    context.stroke();
  }
};
