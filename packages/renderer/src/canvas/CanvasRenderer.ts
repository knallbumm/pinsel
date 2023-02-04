import type { Scene } from '@pinsel/core';
import { Renderer } from '@pinsel/core';
import type { Size } from '@pinsel/core/src/types/Size';

import { rotateCanvasAroundPoint } from '../helpers/canvas/rotateCanvasAroundPoint';
import { renderCircle } from '../helpers/canvas/shapes/circle/renderCircle';
import { renderLabel } from '../helpers/canvas/shapes/label/renderLabel';
import { renderRectangle } from '../helpers/canvas/shapes/rectangle/renderRectangle';
import type { CanvasRendererOptions } from './types/CanvasRendererOptions';

export class CanvasRenderer extends Renderer {
  constructor(options: Partial<CanvasRendererOptions>) {
    super({ size: options.size ?? 'MAX', container: options.container });
    this.domElement = document.createElement('canvas');
    super.appendToContainer();
  }

  renderNewFrame(scene: Scene) {
    const start = performance.now();
    const pixelSize = this.convertToPixelRatio(this.calculatedSize);
    const frameUpdate = scene.getFrameUpdate(pixelSize);

    const context = (this.domElement as HTMLCanvasElement).getContext('2d');
    if (!context) {
      return;
    }
    context.beginPath();

    if (frameUpdate.scene.fill) {
      context.fillStyle = frameUpdate.scene.fill;
      context.fillRect(0, 0, pixelSize.width, pixelSize.height);
    } else {
      context.clearRect(0, 0, pixelSize.width, pixelSize.height);
    }

    for (const shape of frameUpdate.objects) {
      context.save();
      rotateCanvasAroundPoint(context, shape.rotation);
      switch (shape.type) {
        case 'RECTANGLE':
          renderRectangle(context, shape);
          break;
        case 'CIRCLE':
          renderCircle(context, shape);
          break;
        case 'LABEL':
          renderLabel(context, shape);
      }
      context.restore();
    }

    const end = performance.now();
    console.log(`Render-Duration: ${end - start}`);
  }

  resize(size: Size): void {
    if (this.domElement) {
      const canvas = this.domElement as HTMLCanvasElement;

      this.setCanvasSize(canvas, size);
    }
  }

  setCanvasSize(canvas: HTMLCanvasElement, size: Size) {
    const pixelSize = this.convertToPixelRatio(size);

    canvas.width = pixelSize.width ?? 300;
    canvas.height = pixelSize.height ?? 300;
    canvas.style.width = `${size.width}px`;
    canvas.style.height = `${size.height}px`;
  }

  convertToPixelRatio(size: Size): Size {
    const scale = window.devicePixelRatio;
    return {
      width: Math.floor(size.width * scale),
      height: Math.floor(size.height * scale),
    };
  }

  /**
   *
   * @param type e.g. "image/png", "image/jpeg", ...
   */
  async getImage(type: string): Promise<string> {
    const canvas = this.domElement as HTMLCanvasElement;
    await this.nextTick();
    return canvas.toDataURL(type);
  }
}
