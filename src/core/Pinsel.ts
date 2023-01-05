import { Scene } from './Scene';
import type { CoordinateSpace } from './types/CoordinateSpace';
import type { PinselOptions } from './types/PinselOptions';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;

  constructor(options: Partial<PinselOptions>) {
    this.scene = new Scene();
    this.coordinateSpace = options.coordinateSpace ?? 'ADAPTIVE';
  }
}
