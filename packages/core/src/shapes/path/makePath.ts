import Logger from '../../helper/Logger';
import type { CreationPath } from '../../types/shapes/path';
import { Path } from './Path';

export const makePath = (options?: CreationPath): Path => {
  Logger.info('SHAPE', `Creating Path`);
  return new Path(options ?? {});
};
