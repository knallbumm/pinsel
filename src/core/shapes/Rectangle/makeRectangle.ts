import type { CreationRectangle } from '../../types/CreationRectangle';
import { Rectangle } from './rectangle';

export const makeRectangle = (options: CreationRectangle): Rectangle => {
  console.log(
    `Creating Rectangle: ${options.x}, ${options.y}, ${options.width}, ${options.height}`
  );
  return new Rectangle(options);
};
