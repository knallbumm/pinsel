import type { Scene } from './scene/Scene';

export abstract class Runner {
  abstract render(scene: Scene): void;
}
