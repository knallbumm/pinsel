import type { Scene } from '@pinsel/core';
import { Renderer } from '@pinsel/core';
import type { RendererOptions } from '@pinsel/core/src/types/RendererOptions';

export class AdptiveCanvasRenderer extends Renderer {
  constructor(options: RendererOptions) {
    super(options);
    this.domElement = document.createElement('canvas');
    super.appendToContainer();
  }

  renderNewFrame(scene: Scene) {
    const frameUpdate = scene.getFrameUpdate(this.calculatedSize);
    const context = (this.domElement as HTMLCanvasElement).getContext('2d');
    if (!context) {
      return;
    }

    for (const shape of frameUpdate.objects) {
      context.fillStyle = shape.fill;
      context.rect(shape.x, shape.y, shape.width, shape.height);
      context.fill();
    }
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
