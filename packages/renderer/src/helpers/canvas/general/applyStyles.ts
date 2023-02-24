import type { StrokeOptions } from '@pinsel/core/src/types/StrokeOptions';

export function applyStyles(
  {
    stroke,
    fill,
  }: {
    stroke?: StrokeOptions;
    fill?: string;
  },
  context: CanvasRenderingContext2D
) {
  if (fill) {
    context.fillStyle = fill;
    context.fill();
  }

  if (stroke) {
    // TODO: Better Handling for Defaults
    context.strokeStyle = stroke.color ?? 'white';
    context.lineWidth = stroke.width ?? 10;
    context.stroke();
  }
}
