import Logger from './helper/Logger';
import type { Scene } from './scene/Scene';
import type { RendererOptions } from './types/RendererOptions';
import type { Size } from './types/Size';

export class Renderer {
  container?: HTMLElement | null;
  domElement?: HTMLElement | null = undefined;

  calculatedSize: Size = { width: 222, height: 222 };

  constructor({ container, size = 'MAX' }: RendererOptions = { size: 'MAX' }) {
    this.container = container;

    if (size == 'MAX') {
      this.listenOnResize();

      if (container) {
        this.calculatedSize = {
          width: container.clientWidth,
          height: container.clientHeight,
        };
      } else {
        this.calculatedSize = { width: 222, height: 222 };
      }
    } else {
      this.calculatedSize = size;
    }
  }

  renderNewFrame(scene: Scene) {
    console.log('rendering', scene);
  }

  protected appendToContainer() {
    if (this.container && this.domElement) {
      this.container.appendChild(this.domElement);
      this.resize(this.calculatedSize);
    }
  }

  protected resize(size: Size) {
    Logger.info('RENDERER', 'Resized to:', size);
  }

  private listenOnResize() {
    if (!this.container) {
      return;
    }

    window.addEventListener('resize', () => {
      if (!this.container) {
        return;
      }
      this.calculatedSize = {
        width: this.container.clientWidth,
        height: this.container.clientHeight,
      };

      this.resize(this.calculatedSize);
    });
  }
}
