import Logger from '../../helper/Logger';
import type { CreationCircle } from '../../types/shapes/circle';
import { Circle } from './Circle';

export const makeCircle = (options: CreationCircle): Circle => {
  Logger.info(
    'SHAPE',
    `Creating Circle: ${options.x}, ${options.y}, ${options.radius}`
  );
  return new Circle(options);
};
