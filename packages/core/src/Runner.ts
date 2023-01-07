import type { Scene } from './Scene';

export class Runner {
  render(scene: Scene) {
    window.requestAnimationFrame(() => {
      scene.renderer.renderNewFrame(scene);
    });
  }
}
