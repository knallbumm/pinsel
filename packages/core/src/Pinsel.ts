import logger from './helper/Logger';
import { Renderer } from './Renderer';
import { Runner } from './Runner';
import { Scene } from './Scene';
import type { Shape } from './shapes/Shape/Shape';
import type { PinselOptions } from './types';
import type { CoordinateSpace } from './types/CoordinateSpace';

export class Pinsel {
  readonly scene: Scene;
  readonly coordinateSpace: CoordinateSpace;
  runner?: Runner;

  private objects: Shape[] = [];

  add(shape: Shape) {
    if (!this.objects.includes(shape)) {
      logger.info('CORE', `Inserted new shape`, shape);
      this.objects.push(shape);
    }
  }

  remove(shape: Shape) {
    const index = this.objects.indexOf(shape);
    if (index > -1) {
      this.objects.splice(index, 1);
    }
  }

  constructor(options: Partial<PinselOptions>) {
    this.scene = new Scene(options.renderer ?? new Renderer());
    this.coordinateSpace = options.coordinateSpace ?? 'ADAPTIVE';
    this.runner = options.runner ?? new Runner();
  }

  commit() {
    this.runner?.render(this.scene, this.objects);
  }
}
