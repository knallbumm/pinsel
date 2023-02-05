import type { Pinsel } from '../Pinsel';

export abstract class Runner {
  pinsel?: Pinsel;

  abstract scheduleRender(): void;

  protected triggerFrameRender() {
    if (!this.pinsel) {
      throw Error('Runner is not (yet) connected to any pinsel instance');
    }
    this.pinsel.scene.renderer._expectRender(true);
    this.pinsel.scene.renderer.renderNewFrame();
    this.pinsel.scene.renderer._expectRender(false);
  }
}
