import type { SpecificResolvedShape } from '../../types';
import type { CoordinateSpace } from '../../types/CoordinateSpace';

export const transformToRealCoordiantes = (
  shapes: SpecificResolvedShape[],
  relativeLength: number,
  coordinateSpace: CoordinateSpace
): SpecificResolvedShape[] => {
  if (coordinateSpace == 'ADAPTIVE') {
    return shapes.map((shape) => {
      switch (shape.type) {
        case 'CIRCLE':
          return {
            ...shape,
            radius: shape.radius * relativeLength,
            x: shape.x * relativeLength,
            y: shape.y * relativeLength,
            rotation: {
              ...shape.rotation,
              point: {
                x: shape.rotation.point.x * relativeLength,
                y: shape.rotation.point.y * relativeLength,
              },
            },
          };

        case 'RECTANGLE':
          return {
            ...shape,
            width: shape.width * relativeLength,
            height: shape.height * relativeLength,
            x: shape.x * relativeLength,
            y: shape.y * relativeLength,
            rotation: {
              ...shape.rotation,
              point: {
                x: shape.rotation.point.x * relativeLength,
                y: shape.rotation.point.y * relativeLength,
              },
            },
          };

        case 'LABEL':
          return {
            ...shape,
            x: shape.x * relativeLength,
            y: shape.y * relativeLength,
            rotation: {
              ...shape.rotation,
              point: {
                x: shape.rotation.point.x * relativeLength,
                y: shape.rotation.point.y * relativeLength,
              },
            },
          };
      }
    });
  }
  return shapes;
};
