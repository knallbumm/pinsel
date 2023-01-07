import type { Scene } from './Scene';
import type { Shape } from './shapes/Shape/Shape';

export class Runner {
  render(scene: Scene, shapes: Shape[]) {
    window.requestAnimationFrame(() => {
      scene.renderer.render(shapes);
    });
  }
}
