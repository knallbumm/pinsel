import type { Path } from '../../../../shapes';
import type { ResolvedPath } from '../../../../types';
import { resolvePathPath } from './pathPaths';

export const resolvePath = (
  shape: Path,
  relativeLength: number
): Omit<ResolvedPath, 'rotation'> => {
  return {
    type: 'PATH',
    path: resolvePathPath(shape.path, relativeLength),
  };
};
