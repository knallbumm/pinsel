import type { Anchor } from '../../types';

export const resolveShortAnchor = (anchor: Anchor) => {
  if (typeof anchor == 'string') {
    return {
      CENTER: { x: 0.5, y: 0.5 },
      'TOP-LEFT': { x: 0, y: 0 },
      'BOTTOM-LEFT': { x: 0, y: 1 },
      'TOP-RIGHT': { x: 1, y: 0 },
      'BOTTOM-RIGHT': { x: 1, y: 1 },
    }[anchor];
  } else {
    return anchor;
  }
};
