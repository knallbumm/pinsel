import type { Scene } from './scene/Scene';

export class Runner {
  render(scene: Scene) {
    window.requestAnimationFrame(() => {
      scene.renderer.renderNewFrame(scene);
    });
  }
}
