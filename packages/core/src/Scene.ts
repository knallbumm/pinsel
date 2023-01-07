import logger from './helper/Logger';
import type { Renderer } from './Renderer';
import type { Shape } from './shapes';
import { rectangle } from './shapes';
import type { CoordinateSpace } from './types/CoordinateSpace';
import type { FrameUpdate } from './types/FrameUpdate';
import type { SceneOptions } from './types/SceneOptions';
import type { Size } from './types/Size';

export class Scene {
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;

  constructor(options: SceneOptions) {
    this.renderer = options.renderer;
    this.coordinateSpace = options.coordinateSpace;
  }

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

  public getFrameUpdate(size: Size): FrameUpdate {
    logger.info('CORE', 'Requested FrameUpdate for size', size);

    if (this.coordinateSpace == 'ADAPTIVE') {
      return {
        objects: this.objects.map((a) => {
          return rectangle({
            width: a.width * size.width,
            height: a.height * size.height,
            x: a.x * size.width,
            y: a.y * size.height,
          });
        }),
      };
    } else {
      return { objects: this.objects };
    }
  }
}
