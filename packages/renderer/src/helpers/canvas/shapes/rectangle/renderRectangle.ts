import type { ResolvedRectangle } from '@pinsel/core';

export const renderRectangle = (
  context: CanvasRenderingContext2D,
  shape: ResolvedRectangle
) => {
  console.log(shape.fill);
  context.fillStyle = shape.fill;
  context.fillRect(shape.x, shape.y, shape.width, shape.height);
};
