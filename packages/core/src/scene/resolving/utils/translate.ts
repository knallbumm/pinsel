import type { Anchor } from '../../../types';
import type { Point } from '../../../types/Point';
import type { Size } from '../../../types/Size';
import { resolveShortAnchor } from '../general/shortAnchor/resolveShortAnchor';

export const translate = (
  renderAnchor: Anchor,
  translatedAnchor: Anchor,
  position: Point,
  size: Size
): Point => {
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
