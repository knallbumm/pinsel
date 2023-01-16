import type { CreationLabel } from '../../types/shapes/label';
import { Shape } from '../shape/Shape';

export class Label extends Shape {
  protected TEXT = '';
  constructor({ x, y, text }: CreationLabel) {
    super({ x, y, type: 'LABEL' });
    this.TEXT = text;
  }

  get text() {
    return this.TEXT;
  }

  set radius(text: string) {
    this.TEXT = text;
  }

  // get width() {
  //   return this.RADIUS * 2;
  // }

  // get height() {
  //   return this.RADIUS * 2;
  // }
}
