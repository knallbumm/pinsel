import type { Circle, Rectangle, Shape } from '../../shapes';
import type { Label } from '../../shapes/label';
import type { SpecificResolvedShape } from '../../types';
import { resolveRotation } from './resolveRotation';
import { resolveCircle } from './resolving/resolveCircle';
import { resolveLabel } from './resolving/resolveLabel';
import { resolveRectangle } from './resolving/resolveRectangle';
import { translate } from './translate';

export const resolveShape = (shape: Shape) => {
  // TODO: Check if there is already an exisiting resolved version

  let resolvedShape: Partial<SpecificResolvedShape>;

  switch (shape.type) {
    case 'CIRCLE':
      resolvedShape = resolveCircle(shape as Circle);
      break;
    case 'RECTANGLE':
      resolvedShape = resolveRectangle(shape as Rectangle);
      break;
    case 'LABEL':
      resolvedShape = resolveLabel(shape as Label);
      break;
  }

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

  resolvedShape.rotation = resolveRotation(shape);

  return resolvedShape as SpecificResolvedShape;
};
