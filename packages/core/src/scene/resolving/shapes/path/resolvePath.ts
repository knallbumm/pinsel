import type { Path } from '../../../../shapes';
import type { ResolvedPath } from '../../../../types';
import { resolveStroke } from '../../general/stroke/resolveStroke';
import { resolvePathPath } from './pathPaths';

export const resolvePath = (
  shape: Path,
  relativeLength: number
): Omit<ResolvedPath, 'rotation'> => {
  return {
    type: 'PATH',
    fill: shape.fill,
    stroke: resolveStroke(shape, relativeLength),
    path: resolvePathPath(shape.path, relativeLength),
  };
};
