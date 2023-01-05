import type { Scene } from '../core/Scene';
import { Renderer } from './Renderer';

export class AdptiveCanvasRenderer extends Renderer {
  canvas: any;
  render(scene: Scene): void {
    console.log(`Triing to render scene: ${scene}`);
  }
}
