import type { CreationRectangle } from '../../types/CreationRectangle';
import { Shape } from '../Shape/Shape';

export class Rectangle extends Shape {
  constructor({ x, y, width, height }: CreationRectangle) {
    super({ x, y, width, height });
  }
}
