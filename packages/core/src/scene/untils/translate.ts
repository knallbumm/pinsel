import type { Anchor } from '../../types';
import type { Position } from '../../types/Position';
import type { Size } from '../../types/Size';
import { resolveShortAnchor } from './resolveShortAnchor';

export const translate = (
  renderAnchor: Anchor,
  translatedAnchor: Anchor,
  position: Position,
  size: Size
): Position => {
  const resRenderAnchor = resolveShortAnchor(renderAnchor);
  const resTranslatedAnchor = resolveShortAnchor(translatedAnchor);

  if (
    resRenderAnchor.x == resTranslatedAnchor.x &&
    resRenderAnchor.y == resTranslatedAnchor.y
  ) {
    return position;
  }

  return {
    x:
      position.x +
      resRenderAnchor.x * size.width -
      resTranslatedAnchor.x * size.width,
    y:
      position.y +
      resRenderAnchor.y * size.height -
      resTranslatedAnchor.y * size.height,
  };
};
