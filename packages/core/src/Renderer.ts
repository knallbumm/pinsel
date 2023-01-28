import type { Scene } from './scene/Scene';
import type { RendererOptions } from './types/renderer/RendererOptions';
import type { Size } from './types/Size';

export abstract class Renderer {
  container?: HTMLElement | null;
  domElement?: HTMLElement | null = undefined;

  calculatedSize: Size = { width: 222, height: 222 };

  protected EXPECTS_RENDER = false;

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

  /**
   * Renders the current state of the given Scene
   * @param scene The Scene to render
   */
  abstract renderNewFrame(scene: Scene): void;

  /**
   * Handles the resize event
   * @param size {Size} The size it resized to
   */
  protected abstract resize(size: Size): void;

  /**
   * Appends the current domElement to the given container
   */
  protected appendToContainer() {
    if (this.container && this.domElement) {
      this.container.appendChild(this.domElement);
      this.resize(this.calculatedSize);
    } else {
      console.error('Either domElement or container are not present', {
        container: this.container,
        domElement: this.domElement,
      });
    }
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

  _expectRender() {
    this.EXPECTS_RENDER = true;
  }
}
