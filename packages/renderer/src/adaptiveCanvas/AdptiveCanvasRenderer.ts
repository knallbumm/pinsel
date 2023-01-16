import type { Scene } from '@pinsel/core';
import { Renderer } from '@pinsel/core';
import type { RendererOptions } from '@pinsel/core/src/types/RendererOptions';

import { renderCircle } from '../helpers/canvas/shapes/circle/renderCircle';
import { renderRectangle } from '../helpers/canvas/shapes/rectangle/renderRectangle';

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
    context.beginPath();

    if (frameUpdate.scene.fill) {
      context.fillStyle = frameUpdate.scene.fill;
      context.fillRect(
        0,
        0,
        this.calculatedSize.width,
        this.calculatedSize.height
      );
    } else {
      context.clearRect(
        0,
        0,
        this.calculatedSize.width,
        this.calculatedSize.height
      );
    }

    for (const shape of frameUpdate.objects) {
      switch (shape.type) {
        case 'RECTANGLE':
          renderRectangle(context, shape);
          break;
        case 'CIRCLE':
          renderCircle(context, shape);
      }
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
