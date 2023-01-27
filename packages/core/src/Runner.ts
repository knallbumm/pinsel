import type { Scene } from './scene/Scene';

export class Runner {
  render(scene: Scene) {
    scene.renderer.expectRender();

    window.requestAnimationFrame(() => {
      scene.renderer.renderNewFrame(scene);
    });
  }
}
