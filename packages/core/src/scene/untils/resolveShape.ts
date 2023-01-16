import type { Circle, Rectangle, Shape } from '../../shapes';
import { resolveCircle } from './resolving/resolveCircle';
import { resolveRectangle } from './resolving/resolveRectangle';

export const resolveShape = (shape: Shape) => {
  // TODO: Check if there is already an exisiting resolved version
  // const shape =  {
  //     width: shape.actualWidth,
  //     height: shape.actualHeight,
  //     x: shape.actualX,
  //     y: shape.actualY,
  //     fill: shape.fill,
  //     type: shape.type,
  // };

  switch (shape.type) {
    case 'CIRCLE':
      return resolveCircle(shape as Circle);

    case 'RECTANGLE':
      return resolveRectangle(shape as Rectangle);
  }
};
