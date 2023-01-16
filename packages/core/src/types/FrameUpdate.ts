import type { ResolvedScene } from './scene/ResolvedScene';
import type { SpecificResolvedShape } from './shapes/general';

export interface FrameUpdate {
  objects: SpecificResolvedShape[];
  scene: ResolvedScene;
}
