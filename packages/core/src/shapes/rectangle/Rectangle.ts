import type { CreationRectangle } from '../../types/CreationRectangle';
import { Shape } from '../shape/Shape';

export class Rectangle extends Shape {
  constructor({ x, y, width, height }: CreationRectangle) {
    super({ x, y, width, height });
  }
}
