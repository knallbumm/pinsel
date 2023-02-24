import type { Circle, Path, Rectangle, Shape } from '../../../shapes';
import type { Label } from '../../../shapes/label';
import type {
  ResolvedCircle,
  ResolvedRectangle,
  SpecificResolvedShape,
} from '../../../types';
import type { ResolvedLabel } from '../../../types/shapes/label';
import { resolveRotation } from '../general/rotation/resolveRotation';
import { translate } from '../utils/translate';
import { resolveCircle } from './circle/resolveCircle';
import { resolveLabel } from './label/resolveLabel';
import { resolvePath } from './path/resolvePath';
import { resolveRectangle } from './rectangle/resolveRectangle';

const translateShape = (
  shape: Shape,
  resolvedShape: Partial<ResolvedCircle | ResolvedRectangle | ResolvedLabel>
) => {
  const width = shape.actualWidth;
  const height = shape.actualHeight;

  const { x: newX, y: newY } = translate(
    shape._renderAnchor,
    shape.anchor,
    { x: resolvedShape.x ?? 0, y: resolvedShape.y ?? 0 },
    { width, height }
  );

  resolvedShape.x = newX;
  resolvedShape.y = newY;
};

export const resolveShape = (shape: Shape, relativeLength: number) => {
  // TODO: Check if there is already an exisiting resolved version

  let resolvedShape: Partial<SpecificResolvedShape>;

  switch (shape.type) {
    case 'CIRCLE':
      resolvedShape = resolveCircle(shape as Circle, relativeLength);
      translateShape(shape, resolvedShape);
      break;
    case 'RECTANGLE':
      resolvedShape = resolveRectangle(shape as Rectangle, relativeLength);
      translateShape(shape, resolvedShape);
      break;
    case 'LABEL':
      resolvedShape = resolveLabel(shape as Label, relativeLength);
      translateShape(shape, resolvedShape);
      break;
    case 'PATH':
      resolvedShape = resolvePath(shape as Path, relativeLength);
      break;
  }

  resolvedShape.rotation = resolveRotation(shape, relativeLength);

  return resolvedShape as SpecificResolvedShape;
};
