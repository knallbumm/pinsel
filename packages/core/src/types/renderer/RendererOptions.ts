import type { Size } from '../base/Size';

export interface RendererOptions {
  container?: HTMLElement | null;
  size: Size | 'MAX';
}
