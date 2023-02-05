import { Runner } from './Runner';

export class AdaptiveRunner extends Runner {
  scheduleRender(): void {
    this.triggerFrameRender();
  }
}
