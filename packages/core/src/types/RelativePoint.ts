import type {
  HorizontalPositionConstraint,
  VerticalPositionConstraint,
} from '../scene/constraints';

export interface RelativePoint {
  x: number | HorizontalPositionConstraint;
  y: number | VerticalPositionConstraint;
}
