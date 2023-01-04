import { Scene } from './Scene';
import type { PinselOptions } from './types/PinselOptions';

export class Pinsel {
  readonly scene: Scene;

  constructor(options: PinselOptions) {
    this.scene = new Scene();
  }
}
