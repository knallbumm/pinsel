import type { Scene } from './Scene';
import type { Shape } from './shapes/Shape/Shape';

export class Runner {
  constructor() {
    console.log('This is the Runner1');
  }

  render(scene: Scene, shapes: Shape[]) {
    window.requestAnimationFrame(() => {
      scene.renderer.render(shapes);
    });
    console.log(`Triing to render`, scene);
  }
}
