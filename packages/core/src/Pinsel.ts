import Logger from './helper/Logger';
import type { Runner } from './Runner';
import { AdaptiveRunner } from './runner/AdaptiveRunner';
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
    // TODO: Use correct render when renderBehavior is recurring
    this.runner =
      renderBehavior == 'RECURRING'
        ? new AdaptiveRunner()
        : new AdaptiveRunner();
  }

  commit() {
    Logger.info('CORE', 'Change commited');
    this.scene.updateAll();
    this.runner?.render(this.scene);
  }
}
