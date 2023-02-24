import type { Renderer } from '../../Renderer';
import type { CoordinateSpace } from '../base/CoordinateSpace';

export interface SceneOptions {
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;
}
