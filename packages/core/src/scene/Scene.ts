import logger from '../helper/Logger';
import type { Pinsel } from '../Pinsel';
import type { Renderer } from '../Renderer';
import type { Shape } from '../shapes';
import type { CoordinateSpace } from '../types/CoordinateSpace';
import type { FrameUpdate } from '../types/FrameUpdate';
import type { SceneOptions } from '../types/SceneOptions';
import type { Size } from '../types/Size';
import type { SpecificResolvedShape } from '../types/SpecificResolvedShape';
import { resolveShape } from './untils/resolveShape';
import { transformToRealCoordiantes } from './untils/transformToRealCoordiantes';

export class Scene {
  pinsel: Pinsel;
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;

  private isBatchUpdating = false;

  constructor(pinsel: Pinsel, options: SceneOptions) {
    this.renderer = options.renderer;
    this.coordinateSpace = options.coordinateSpace;
    this.pinsel = pinsel;
  }

  private shapes: Shape[] = [];
  private resolvedShapes: SpecificResolvedShape[] = [];

  add(shape: Shape) {
    if (!this.shapes.includes(shape)) {
      // logger.info('CORE', `Inserted new shape`, shape);
      this.shapes.push(shape);
      this.resolvedShapes.push(resolveShape(shape));
      shape.scene = this;
    }
  }

  remove(shape: Shape) {
    const index = this.shapes.indexOf(shape);
    if (index > -1) {
      this.shapes.splice(index, 1);
    }
  }

  public getFrameUpdate(size: Size): FrameUpdate {
    logger.info('CORE', 'Requested FrameUpdate for size', size);

    return {
      objects: transformToRealCoordiantes(
        this.resolvedShapes,
        size,
        this.coordinateSpace
      ),
    };
  }

  updateAll() {
    this.resolvedShapes = this.shapes.map((s) => resolveShape(s));
    console.log(this.resolvedShapes);
  }

  updateBatch(fn: () => void) {
    this.isBatchUpdating = true;
    fn();
    this.isBatchUpdating = false;
    this._expectCommit();
  }

  //** !INTERNAL! — This function is for internal use only. If you use it, expect unexpected. */
  _expectCommit() {
    if (!this.isBatchUpdating) {
      this.pinsel.commit();
    }
  }
}
