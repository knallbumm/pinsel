import type {
  HorizontalSizeConstraint,
  VerticalSizeConstraint,
} from '../../scene/constraints';
import type { CreationRectangle } from '../../types';
import { Shape } from '../shape/Shape';

export class Rectangle extends Shape {
  /** Width of the shape */
  protected WIDTH: number | HorizontalSizeConstraint;

  /** Height of the shape */
  protected HEIGHT: number | VerticalSizeConstraint;

  constructor({ x, y, width, height, fill }: CreationRectangle) {
    super({ x, y, fill, type: 'RECTANGLE' });
    this.WIDTH = width;
    this.HEIGHT = height;
  }

  get width() {
    return this.WIDTH;
  }

  set width(val: typeof this.WIDTH) {
    this.WIDTH = val;
    this.SCENE?._expectCommit();
  }

  get height() {
    return this.HEIGHT;
  }

  set height(val: typeof this.HEIGHT) {
    this.HEIGHT = val;
    this.SCENE?._expectCommit();
  }
}
