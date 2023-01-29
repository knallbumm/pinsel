import type { RotationOptions } from '../../types/RotationOptions';
import { Rotation } from './Rotation';

export const makeRotation = (options: Partial<RotationOptions>): Rotation => {
  return new Rotation(options);
};
