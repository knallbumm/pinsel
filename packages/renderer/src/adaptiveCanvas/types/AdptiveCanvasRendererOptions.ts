import type { RendererOptions } from '@pinsel/core';

export interface AdptiveCanvasRendererOptions extends RendererOptions {
  domElementType: 'IMG' | 'CANVAS';
}
