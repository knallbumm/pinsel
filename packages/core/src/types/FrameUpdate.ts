import type { ResolvedScene } from './ResolvedScene';
import type { SpecificResolvedShape } from './shapes/general';

export interface FrameUpdate {
  objects: SpecificResolvedShape[];
  scene: ResolvedScene;
}
