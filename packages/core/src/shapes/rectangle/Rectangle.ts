import type { CreationRectangle } from '../../types';
import { Shape } from '../shape/Shape';

export class Rectangle extends Shape {
  constructor({ x, y, width, height, fill }: CreationRectangle) {
    super({ x, y, width, height, fill, type: 'RECTANGLE' });
  }
}
