import type { ResolvedLabel } from '@pinsel/core/src/types/shapes/label';

export const renderLabel = (
  context: CanvasRenderingContext2D,
  shape: ResolvedLabel
) => {
  context.beginPath();
  context.fillStyle = 'black';
  context.font = `${shape.font.weight} ${
    shape.font.size * window.devicePixelRatio
  }px ${shape.font.family}`;
  context.fillText(shape.text, shape.x, shape.y);
};
