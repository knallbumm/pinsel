import Logger from '../../helper/Logger';
import type { CreationLabel } from '../../types/shapes/label';
import { Label } from './Label';

export const makeLabel = (options: CreationLabel): Label => {
  Logger.info(
    'SHAPE',
    `Creating Label: ${options.x}, ${options.y}, ${options.text}`
  );
  return new Label(options);
};
