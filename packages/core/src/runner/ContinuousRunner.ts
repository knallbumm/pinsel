import Logger from '../helper/Logger';
import { Runner } from '../Runner';

export class ContinuousRunner extends Runner {
  IS_RUNNING = false;

  public start() {
    if (this.IS_RUNNING) {
      Logger.warn('RUNNER', 'Runner was already running');
      return;
    }

    this.IS_RUNNING = true;
    this.requestAnimationFrame();
  }

  public stop() {
    if (!this.IS_RUNNING) {
      Logger.warn('RUNNER', 'Runner was already stopped');
      return;
    }

    this.IS_RUNNING = false;
  }

  private requestAnimationFrame() {
    if (!this.IS_RUNNING) {
      return;
    }

    console.log('New frame und so');
    window.requestAnimationFrame(() => {
      this.triggerFrameRender();
      this.requestAnimationFrame();
    });
  }

  scheduleRender(): void {
    //TODO: Make implementation optional
  }
}
