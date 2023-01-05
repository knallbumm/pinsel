import type { CoordinateSpace } from './CoordinateSpace';
import type { PinselDrawUpdate } from './PinselDrawUpdate';

export interface PinselOptions {
  draw?: PinselDrawUpdate;
  coordinateSpace: CoordinateSpace;
}
