import type { Renderer } from '../Renderer';
import type { Runner } from '../Runner';
import type { CoordinateSpace } from './CoordinateSpace';
import type { PinselDrawUpdate } from './PinselDrawUpdate';

export interface PinselOptions {
  draw?: PinselDrawUpdate;
  coordinateSpace: CoordinateSpace;
  runner: Runner;
  renderer: Renderer;
}
