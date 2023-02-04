import type { StrokeOptions } from '../../types/StrokeOptions';
import { Stroke } from './Stroke';

export const makeStroke = (options: Partial<StrokeOptions>): Stroke => {
  return new Stroke(options);
};
