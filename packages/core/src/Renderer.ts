import type { Scene } from './scene/Scene';
import type { Size } from './types';
import type { RendererOptions } from './types/renderer/RendererOptions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VariadictCallback = (...args: any[]) => void;

export abstract class Renderer {
  scene?: Scene;
  container?: HTMLElement | null;
  domElement?: HTMLElement | null = undefined;

  calculatedSize: Size = { width: 222, height: 222 };
  private onFrameRenderDone: (() => void)[] = [];

  protected EXPECTS_RENDER = false;

  constructor({ container, size = 'MAX' }: RendererOptions = { size: 'MAX' }) {
    this.container = container;

    // makes given function call flushOnRenderDone()
    const flushDecorator = (func: VariadictCallback) => {
      return (...args: []) => {
        func.call(this, ...args);
        this.flushOnRenderDone();
      };
    };
    this.renderNewFrame = flushDecorator(this.renderNewFrame);

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
   */
  abstract renderNewFrame(): void;

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
      this.scene?.pinsel.runner?.scheduleRender();
    });
  }

  protected async nextTick(): Promise<void>;
  protected nextTick(callback: () => void): void;
  protected async nextTick(callback?: () => void) {
    let _resolve: VariadictCallback | undefined;
    let promise: Promise<unknown> | undefined;

    if (!callback) {
      promise = new Promise((resolve) => {
        _resolve = resolve;
      });
    }

    const onFramerenderDone = () => {
      callback?.();
      _resolve?.();
    };

    if (!this.EXPECTS_RENDER) {
      onFramerenderDone();
    } else this.onFrameRenderDone.push(onFramerenderDone);

    return promise;
  }

  private flushOnRenderDone() {
    this.onFrameRenderDone.forEach((e) => e());
  }

  _expectRender(value = true) {
    this.EXPECTS_RENDER = value;
  }
}
