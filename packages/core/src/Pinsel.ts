import { Renderer } from './Renderer';
import { Runner } from './Runner';
import { Scene } from './Scene';
import type { PinselOptions } from './types';
import type { CoordinateSpace } from './types/CoordinateSpace';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  runner?: Runner;

  constructor(options: Partial<PinselOptions>) {
    this.scene = new Scene({
      renderer: options.renderer ?? new Renderer(),
      coordinateSpace: options.coordinateSpace ?? 'FIXED',
    });
    this.coordinateSpace = options.coordinateSpace ?? 'ADAPTIVE';
    this.runner = options.runner ?? new Runner();
  }

  commit() {
    this.runner?.render(this.scene);
  }
}
