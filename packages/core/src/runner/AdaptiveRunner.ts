import { Runner } from '../Runner';
import type { Scene } from '../scene/Scene';

export class AdaptiveRunner extends Runner {
  render(scene: Scene) {
    scene.renderer._expectRender(true);

    window.requestAnimationFrame(() => {
      scene.renderer.renderNewFrame(scene);
      scene.renderer._expectRender(false);
    });
  }
}
