import type { Scene } from './Scene';
import type { Shape } from './shapes/Shape/Shape';

export class Renderer {
  domElement: HTMLElement | undefined = undefined;
  render(shapes: Shape[]) {
    console.log('rendering', shapes);
  }
}
