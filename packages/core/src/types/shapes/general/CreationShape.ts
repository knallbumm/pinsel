import type {
  HorizontalPositionConstraint,
  VerticalPositionConstraint,
} from '../../../scene/constraints';

export interface CreationShape {
  x: number | HorizontalPositionConstraint;
  y: number | VerticalPositionConstraint;
  fill?: string;
}
