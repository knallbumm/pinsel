import type { RendererOptions } from '@pinsel/core';

export interface CanvasRendererOptions extends RendererOptions {
  domElementType: 'IMG' | 'CANVAS';
}
