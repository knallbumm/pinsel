import type {
  HorizontalPositionAnchor,
  HorizontalSizeAnchor,
  VerticalPositionAnchor,
  VerticalSizeAnchor,
} from '../../../scene/anchors';

export interface CreationShape {
  x: number | HorizontalPositionAnchor;
  y: number | VerticalPositionAnchor;
  width: number | HorizontalSizeAnchor;
  height: number | VerticalSizeAnchor;
  fill?: string;
}
