import type { VerticalPositionAnchor } from './anchors/VerticalPositionAnchor';

export interface CreationShape {
  x: number | VerticalPositionAnchor;
  y: number;
  width: number;
  height: number;
}
