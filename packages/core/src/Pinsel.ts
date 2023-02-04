import Logger from './helper/Logger';
import type { Runner } from './Runner';
import { AdaptiveRunner } from './runner/AdaptiveRunner';
import { ContinuousRunner } from './runner/ContinuousRunner';
import { Scene } from './scene/Scene';
import type { PinselOptions } from './types';
import type { CoordinateSpace } from './types/CoordinateSpace';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  runner?: Runner;

  constructor({
    renderer,
    coordinateSpace,
    renderBehavior = 'ADAPTIVE',
  }: PinselOptions) {
    this.scene = new Scene(this, {
      renderer: renderer,
      coordinateSpace: coordinateSpace ?? 'FIXED',
    });
    this.coordinateSpace = coordinateSpace ?? 'ADAPTIVE';
    this.runner =
      renderBehavior == 'CONTINUOUS'
        ? new ContinuousRunner(this)
        : new AdaptiveRunner(this);
  }

  commit() {
    Logger.info('CORE', 'Change commited');
    this.scene.updateAll();
    this.runner?.scheduleRender();
  }
}
