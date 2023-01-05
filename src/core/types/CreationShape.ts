import type { HorizontalPositionAnchor } from './anchors/HorizontalPositionAnchor';
import type { VerticalPositionAnchor } from './anchors/VerticalPositionAnchor';

export interface CreationShape {
  x: number | HorizontalPositionAnchor;
  y: number | VerticalPositionAnchor;
  width: number;
  height: number;
}
