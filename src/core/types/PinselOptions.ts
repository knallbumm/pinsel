import type { Renderer } from '../../renderer/Renderer';
import type { CoordinateSpace } from './CoordinateSpace';
import type { PinselDrawUpdate } from './PinselDrawUpdate';

export interface PinselOptions {
  draw?: PinselDrawUpdate;
  coordinateSpace: CoordinateSpace;
  renderer: Renderer;
}
