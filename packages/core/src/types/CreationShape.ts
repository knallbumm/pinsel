import type { HorizontalPositionAnchor } from '../shapes/Shape/HorizontalPositionAnchor';
import type { HorizontalSizeAnchor } from '../shapes/Shape/HorizontalSizeAnchor';
import type { VerticalPositionAnchor } from '../shapes/Shape/VerticalPositionAnchor';
import type { VerticalSizeAnchor } from '../shapes/Shape/VerticalSizeAnchor';

export interface CreationShape {
  x: number | HorizontalPositionAnchor;
  y: number | VerticalPositionAnchor;
  width: number | HorizontalSizeAnchor;
  height: number | VerticalSizeAnchor;
}
