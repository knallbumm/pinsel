import type { Shape } from '@pinsel/core';
import { Renderer } from '@pinsel/core';

export class AdptiveCanvasRenderer extends Renderer {
  constructor() {
    super();
    this.domElement = document.createElement('canvas');
  }

  render(shapes: Shape[]) {
    const context = (this.domElement as HTMLCanvasElement).getContext('2d');
    if (!context) {
      return;
    }
    context.fillStyle = 'red';

    for (const shape of shapes) {
      context.rect(shape.x, shape.y, shape.width, shape.height);
      context.fill();
    }

    console.log(`Triing to render scene: ${context}`, shapes);
  }
}
