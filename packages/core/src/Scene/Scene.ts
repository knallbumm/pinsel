import logger from '../helper/Logger';
import type { Renderer } from '../Renderer';
import type { Shape } from '../shapes';
import { rectangle } from '../shapes';
import type { CoordinateSpace } from '../types/CoordinateSpace';
import type { FrameUpdate } from '../types/FrameUpdate';
import type { ResolvedShape } from '../types/ResolvedShape';
import type { SceneOptions } from '../types/SceneOptions';
import type { Size } from '../types/Size';
import { resolveShape } from './untils/resolveShape';

export class Scene {
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;

  constructor(options: SceneOptions) {
    this.renderer = options.renderer;
    this.coordinateSpace = options.coordinateSpace;
  }

  private shapes: Shape[] = [];
  private resolvedShapes: ResolvedShape[] = [];

  add(shape: Shape) {
    if (!this.shapes.includes(shape)) {
      logger.info('CORE', `Inserted new shape`, shape);
      this.shapes.push(shape);
      this.resolvedShapes.push(resolveShape(shape));
    }
  }

  remove(shape: Shape) {
    const index = this.shapes.indexOf(shape);
    if (index > -1) {
      this.shapes.splice(index, 1);
    }
  }

  get shapess() {
    return this.shapes;
  }

  public getFrameUpdate(size: Size): FrameUpdate {
    logger.info('CORE', 'Requested FrameUpdate for size', size);

    const resolvedShapes = this.resolvedShapes;

    if (this.coordinateSpace == 'ADAPTIVE') {
      return {
        objects: this.resolvedShapes.map((a) => {
          return rectangle({
            width: a.width * size.width,
            height: a.height * size.height,
            x: a.x * size.width,
            y: a.y * size.height,
          });
        }),
      };
    } else {
      return { objects: this.shapes };
    }
  }
}
