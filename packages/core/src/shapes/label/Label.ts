import type { Font } from '../../additions/font';
import { font } from '../../additions/font';
import type { CreationLabel } from '../../types/shapes/label';
import { Shape } from '../shape/Shape';

export class Label extends Shape {
  private HEIGHT?: number = undefined;
  private WIDTH?: number = undefined;

  protected TEXT = '';

  protected FONT: Font;

  constructor({ x, y, text }: CreationLabel) {
    super({ x, y, type: 'LABEL' });
    this.TEXT = text;

    this.FONT = font(16, 'sans-serif');
    this.FONT.association = this;
  }

  set font(value: Font) {
    this.FONT = value;
    value.association = this;
  }

  get font() {
    return this.FONT;
  }

  get text() {
    return this.TEXT;
  }

  set radius(text: string) {
    this.TEXT = text;
  }

  get width() {
    if (!this.WIDTH) {
      this.updateTextSize();
    }

    return this.WIDTH ?? 1;
  }

  get height() {
    if (!this.HEIGHT) {
      this.updateTextSize();
    }

    return this.HEIGHT ?? 1;
  }

  private updateTextSize() {
    if (!this.SCENE) return;
    const textElement = document.createElement('p');
    textElement.style.font = this.FONT.family;
    textElement.style.fontWeight = `${this.FONT.weight}`;
    textElement.innerText = 'abcABC123';
    textElement.style.display = 'block';
    textElement.style.position = 'absolute';
    textElement.style.visibility = 'hidden';
    document.body.append(textElement);

    if (this.SCENE?.coordinateSpace == 'ADAPTIVE') {
      this.WIDTH =
        textElement.clientWidth / this.SCENE.renderer.calculatedSize.width;
      this.HEIGHT =
        textElement.clientHeight / this.SCENE.renderer.calculatedSize.height;
    } else {
      this.WIDTH = textElement.clientWidth;
      this.HEIGHT = textElement.clientHeight;
    }
  }
}
