import type { Size } from './Size';

export interface RendererOptions {
  container?: HTMLElement | null;
  size: Size | 'MAX';
}
