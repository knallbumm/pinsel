import Logger from './helper/Logger';
import type { Runner } from './runner';
import { Scene } from './scene/Scene';
import type { PinselOptions } from './types';
import type { CoordinateSpace } from './types/base/CoordinateSpace';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  private RUNNER?: Runner;

  constructor({ renderer, coordinateSpace, runner }: PinselOptions) {
    this.scene = new Scene(this, {
      renderer: renderer,
      coordinateSpace: coordinateSpace ?? 'FIXED',
    });
    this.coordinateSpace = coordinateSpace ?? 'ADAPTIVE';

    this.RUNNER = runner;
    this.RUNNER.pinsel = this;
  }

  commit() {
    Logger.info('CORE', 'Change commited');
    this.scene.updateAll();
    this.runner?.scheduleRender();
  }

  get runner() {
    return this.RUNNER;
  }

  set runner(val: typeof this.RUNNER) {
    if (this.RUNNER) {
      this.RUNNER.pinsel = undefined;
    }

    this.RUNNER = val;
    if (this.RUNNER) {
      this.RUNNER.pinsel = this;
    }
  }
}
