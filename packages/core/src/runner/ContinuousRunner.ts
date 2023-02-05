import Logger from '../helper/Logger';
import type { ContinuousDraw } from '../types/runner/ContinuousDraw';
import { Runner } from './Runner';

export class ContinuousRunner extends Runner {
  private IS_RUNNING = false;

  private FRAME_COUNT = 0;

  /**
   * Function called for every frame (before it is rendered). You can use it to update shapes or the scene itself.
   * As an argument you get the current frame number.
   */
  draw?: ContinuousDraw;

  public start() {
    if (this.IS_RUNNING) {
      Logger.warn('RUNNER', 'Runner was already running');
      return;
    }

    this.IS_RUNNING = true;
    this.requestAnimationFrame();
  }

  public pause() {
    if (!this.IS_RUNNING) {
      Logger.warn('RUNNER', 'Runner was already stopped');
      return;
    }

    this.IS_RUNNING = false;
  }

  public stop() {
    if (!this.IS_RUNNING) {
      Logger.warn('RUNNER', 'Runner was already stopped');
      return;
    }

    this.IS_RUNNING = false;
    this.FRAME_COUNT = 0;
  }

  private requestAnimationFrame() {
    if (!this.IS_RUNNING) {
      return;
    }

    window.requestAnimationFrame(() => {
      this.FRAME_COUNT += 1;

      this.draw?.({ frameCount: this.FRAME_COUNT });
      this.triggerFrameRender();
      this.requestAnimationFrame();
    });
  }

  scheduleRender(): void {
    //TODO: Make implementation optional
  }
}
