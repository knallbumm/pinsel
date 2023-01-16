import type { CreationCircle } from '../../types/shapes/circle';
import { Shape } from '../shape/Shape';

export class Circle extends Shape {
  protected RADIUS: number;
  constructor({ x, y, fill, radius }: CreationCircle) {
    super({ x, y, fill, type: 'CIRCLE' });
    this.RADIUS = radius;
  }

  get radius() {
    return this.RADIUS;
  }

  set radius(radius: number) {
    this.RADIUS = radius;
  }

  get width() {
    return this.RADIUS * 2;
  }

  get height() {
    return this.RADIUS * 2;
  }
}
