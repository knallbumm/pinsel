import type { Pinsel } from './Pinsel';

export abstract class Runner {
  pinsel: Pinsel;

  constructor(pinsel: Pinsel) {
    this.pinsel = pinsel;
  }

  abstract render(): void;
  abstract scheduleRender(): void;
}
