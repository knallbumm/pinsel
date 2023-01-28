import Logger from './helper/Logger';
import { Runner } from './Runner';
import { Scene } from './scene/Scene';
import type { PinselOptions } from './types';
import type { CoordinateSpace } from './types/CoordinateSpace';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  runner?: Runner;

  constructor(options: PinselOptions) {
    this.scene = new Scene(this, {
      renderer: options.renderer,
      coordinateSpace: options.coordinateSpace ?? 'FIXED',
    });
    this.coordinateSpace = options.coordinateSpace ?? 'ADAPTIVE';
    this.runner = options.runner ?? new Runner();
  }

  commit() {
    Logger.info('CORE', 'Change commited');
    this.scene.updateAll();
    this.runner?.render(this.scene);
  }
}
