import type { Renderer } from './Renderer';

export class Scene {
  renderer: Renderer;
  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }
}
