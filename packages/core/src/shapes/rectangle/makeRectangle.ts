import logger from '../../helper/Logger';
import type { CreationRectangle } from '../../types/CreationRectangle';
import { Rectangle } from './Rectangle';

export const makeRectangle = (options: CreationRectangle): Rectangle => {
  // logger.info(
  //   'SHAPE',
  //   `Creating Rectangle: ${options.x}, ${options.y}, ${options.width}, ${options.height}`
  // );
  return new Rectangle(options);
};
