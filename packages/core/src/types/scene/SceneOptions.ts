import type { Renderer } from '../../Renderer';
import type { CoordinateSpace } from '../CoordinateSpace';

export interface SceneOptions {
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;
}
