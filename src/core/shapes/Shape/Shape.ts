import type { HorizontalPositionAnchor } from '../../types/anchors/HorizontalPositionAnchor';
import type { VerticalPositionAnchor } from '../../types/anchors/VerticalPositionAnchor';
import type { CreationRectangle } from '../../types/CreationRectangle';

export class Shape {
  readonly x: number | HorizontalPositionAnchor;
  readonly y: number | VerticalPositionAnchor;
  readonly width: number;
  readonly height: number;

  constructor({ x = 0, y = 0, width, height }: CreationRectangle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get getSize() {
    return this.x;
  }
}
