import type { Renderer } from '../../Renderer';
import type { CoordinateSpace } from '../CoordinateSpace';
import type { RenderBehavior } from '../RenderBehavior';
import type { PinselDrawUpdate } from './PinselDrawUpdate';

export interface PinselOptions {
  draw?: PinselDrawUpdate;
  coordinateSpace: CoordinateSpace;
  renderer: Renderer;
  renderBehavior?: RenderBehavior;
}
