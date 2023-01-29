import type { Scene } from '@pinsel/core';
import { Renderer } from '@pinsel/core';
import Logger from '@pinsel/core/src/helper/Logger';
import type { Size } from '@pinsel/core/src/types/Size';

import { rotateCanvasAroundPoint } from '../helpers/canvas/rotateCanvasAroundPoint';
import { renderCircle } from '../helpers/canvas/shapes/circle/renderCircle';
import { renderLabel } from '../helpers/canvas/shapes/label/renderLabel';
import { renderRectangle } from '../helpers/canvas/shapes/rectangle/renderRectangle';
import type { AdptiveCanvasRendererOptions } from './types/AdptiveCanvasRendererOptions';

export class AdptiveCanvasRenderer extends Renderer {
  lastFrameId: number | undefined = undefined;

  onFrameRenderDone: (() => void)[] = [];

  constructor(options: Partial<AdptiveCanvasRendererOptions>) {
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
    Logger.info('STATS', `Render-Duration: ${end - start}`);

    this.onFrameRenderDone.forEach((e) => e());
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

  async getImage(type: 'JPG' | 'PNG' = 'JPG'): Promise<string> {
    const callbackArray = this.onFrameRenderDone;
    const canvas = this.domElement as HTMLCanvasElement;
    if (this.EXPECTS_RENDER) {
      return new Promise(function (resolve) {
        callbackArray.push(() => {
          resolve(canvas.toDataURL());
        });
      });
    } else {
      return new Promise(function (resolve) {
        resolve(canvas.toDataURL(type === 'PNG' ? 'image/png' : 'image/jpeg'));
      });
    }
  }
}
