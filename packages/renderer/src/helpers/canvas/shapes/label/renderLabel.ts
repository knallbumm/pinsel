import type { ResolvedLabel } from '@pinsel/core/src/types/shapes/label';

export const renderLabel = (
  context: CanvasRenderingContext2D,
  shape: ResolvedLabel
) => {
  context.beginPath();
  context.fillStyle = 'black';
  context.font = '48px sans-serif';
  context.fillText(shape.text, shape.x, shape.y);
};
