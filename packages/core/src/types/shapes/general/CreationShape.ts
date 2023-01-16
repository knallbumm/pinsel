import type {
  HorizontalPositionAnchor,
  VerticalPositionAnchor,
} from '../../../scene/anchors';

export interface CreationShape {
  x: number | HorizontalPositionAnchor;
  y: number | VerticalPositionAnchor;
  fill?: string;
}
