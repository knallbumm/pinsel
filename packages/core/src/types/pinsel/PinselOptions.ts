import type { Renderer } from '../../Renderer';
import type { Runner } from '../../runner/Runner';
import type { CoordinateSpace } from '../base/CoordinateSpace';
import type { RenderBehavior } from '../RenderBehavior';
import type { PinselDrawUpdate } from './PinselDrawUpdate';

export interface PinselOptions {
  draw?: PinselDrawUpdate;
  coordinateSpace: CoordinateSpace;
  renderer: Renderer;
  renderBehavior?: RenderBehavior;
  runner: Runner;
}
