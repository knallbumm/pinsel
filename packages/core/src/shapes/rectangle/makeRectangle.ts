import Logger from '../../helper/Logger';
import type { CreationRectangle } from '../../types';
import { Rectangle } from './Rectangle';

export const makeRectangle = (options: CreationRectangle): Rectangle => {
  Logger.info(
    'SHAPE',
    `Creating Rectangle: ${options.x}, ${options.y}, ${options.width}, ${options.height}`
  );
  return new Rectangle({ ...options, x: options.x ?? 0, y: options.y ?? 0 });
};
