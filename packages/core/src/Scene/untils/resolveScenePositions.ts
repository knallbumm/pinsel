import type { ResolvedShape } from '../../types/ResolvedShape';
import type { Scene } from '../Scene';

export const resolveScenePositions = (scene: Scene): ResolvedShape[] => {
  // is only there to prevent build from crashing to to typecheck
  console.log(scene);
  return [];
};
