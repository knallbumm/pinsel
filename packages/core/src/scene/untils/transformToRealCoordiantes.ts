import type { SpecificResolvedShape } from '../../types';
import type { CoordinateSpace } from '../../types/CoordinateSpace';
import type { Size } from '../../types/Size';

export const transformToRealCoordiantes = (
  shapes: SpecificResolvedShape[],
  size: Size,
  coordinateSpace: CoordinateSpace
): SpecificResolvedShape[] => {
  if (coordinateSpace == 'ADAPTIVE') {
    return shapes.map((shape) => ({
      ...shape,
      width: shape.width * size.width,
      height: shape.height * size.height,
      x: shape.x * size.width,
      y: shape.y * size.height,
    }));
  }
  return shapes;
};
