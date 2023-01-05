import { AdptiveCanvasRenderer } from '../renderer/AdptiveCanvasRenderer';
import type { Renderer } from '../renderer/Renderer';
import { Scene } from './Scene';
import type { CoordinateSpace } from './types/CoordinateSpace';
import type { PinselOptions } from './types/PinselOptions';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  renderer: Renderer;

  constructor(options: Partial<PinselOptions>) {
    this.scene = new Scene();
    this.coordinateSpace = options.coordinateSpace ?? 'ADAPTIVE';
    this.renderer = options.renderer ?? new AdptiveCanvasRenderer();
  }

  commit() {
    this.renderer.render(this.scene);
  }
}
