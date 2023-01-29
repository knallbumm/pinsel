import type { ResolvedRotation } from '@pinsel/core/src/types/ResolvedRotation';

export const rotateCanvasAroundPoint = (
  context: CanvasRenderingContext2D,
  rotation: ResolvedRotation
) => {
  context.translate(rotation.point.x, rotation.point.y);
  context.rotate(rotation.angle);
  context.translate(-rotation.point.x, -rotation.point.y);
};
