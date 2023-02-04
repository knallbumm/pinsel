import { Runner } from '../Runner';

export class AdaptiveRunner extends Runner {
  render() {
    this.pinsel.scene.renderer._expectRender(true);
    this.pinsel.scene.renderer.renderNewFrame();
    this.pinsel.scene.renderer._expectRender(false);
  }

  scheduleRender(): void {
    this.render();
  }
}
