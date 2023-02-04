import type { Pinsel } from './Pinsel';

export abstract class Runner {
  pinsel: Pinsel;

  constructor(pinsel: Pinsel) {
    this.pinsel = pinsel;
  }

  abstract scheduleRender(): void;

  protected triggerFrameRender() {
    this.pinsel.scene.renderer._expectRender(true);
    this.pinsel.scene.renderer.renderNewFrame();
    this.pinsel.scene.renderer._expectRender(false);
  }
}
