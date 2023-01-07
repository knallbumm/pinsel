import type { Shape } from './shapes/Shape/Shape';
import type { RendererOptions } from './types/RendererOptions';

export class Renderer {
  container?: HTMLElement | null;
  domElement?: HTMLElement | null = undefined;

  constructor({ container, size = 'MAX' }: RendererOptions = { size: 'MAX' }) {
    this.container = container;

    if (size == 'MAX') {
      this.listenOnResize();
    }
  }

  render(shapes: Shape[]) {
    console.log('rendering', shapes);
  }

  protected appendToContainer() {
    if (this.container && this.domElement) {
      this.container.appendChild(this.domElement);
      this.resize();
    }
  }

  protected resize() {
    console.log('RESIZE');
  }

  private listenOnResize() {
    if (!this.container) {
      return;
    }

    window.addEventListener('resize', () => this.resize());
  }
}
