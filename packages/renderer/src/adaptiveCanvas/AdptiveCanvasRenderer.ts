import type { Shape } from '@pinsel/core';
import { Renderer } from '@pinsel/core';
import type { RendererOptions } from '@pinsel/core/src/types/RendererOptions';

export class AdptiveCanvasRenderer extends Renderer {
  constructor(options: RendererOptions) {
    super(options);
    this.domElement = document.createElement('canvas');
    super.appendToContainer();
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

  resize(): void {
    if (this.domElement) {
      const canvas = this.domElement as HTMLCanvasElement;
      const width = this.container?.clientWidth;
      const height = this.container?.clientHeight;

      canvas.width = width ?? 300;
      canvas.height = height ?? 300;
    }
  }
}
