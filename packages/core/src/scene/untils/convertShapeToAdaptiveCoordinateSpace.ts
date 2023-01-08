import type { ResolvedShape } from '../../types/ResolvedShape';
import type { Size } from '../../types/Size';

export const convertShapeToAdaptiveCoordinateSpace = (
  resolvedShape: ResolvedShape,
  size: Size
) => {
  resolvedShape.x = Math.ceil(resolvedShape.x * size.width);
};
