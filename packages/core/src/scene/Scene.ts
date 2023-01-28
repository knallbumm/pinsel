import logger from '../helper/Logger';
import type { Pinsel } from '../Pinsel';
import type { Renderer } from '../Renderer';
import type { Shape } from '../shapes';
import type { SpecificResolvedShape } from '../types';
import type { CreationPositionConstraint } from '../types/constraints/CreationPositionConstraint';
import type { CreationSizeConstraint } from '../types/constraints/CreationSizeConstraint';
import type { CoordinateSpace } from '../types/CoordinateSpace';
import type { FrameUpdate } from '../types/FrameUpdate';
import type { SceneOptions } from '../types/scene/SceneOptions';
import type { Size } from '../types/Size';
import {
  HorizontalPositionConstraint,
  HorizontalSizeConstraint,
  VerticalPositionConstraint,
  VerticalSizeConstraint,
} from './constraints';
import { resolveShape } from './untils/resolveShape';
import { transformToRealCoordiantes } from './untils/transformToRealCoordiantes';

export class Scene {
  pinsel: Pinsel;
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;

  fill = 'white';

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
      logger.info('CORE', `Inserted new shape`, shape);

      shape.scene = this;
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

  public getFrameUpdate(size: Size): FrameUpdate {
    logger.info('CORE', 'Requested FrameUpdate for size', size);

    return {
      objects: transformToRealCoordiantes(
        this.resolvedShapes,
        size,
        this.coordinateSpace
      ),
      scene: {
        fill: this.fill,
      },
    };
  }

  updateAll() {
    this.resolvedShapes = this.shapes.map((s) => resolveShape(s));
  }

  updateBatch(fn: () => void) {
    this.isBatchUpdating = true;
    fn();
    this.isBatchUpdating = false;
    this._expectCommit();
  }

  /* CONSTRAINTS */

  widthConstraint({
    multiplier,
    constant,
  }: Omit<CreationSizeConstraint, 'root'> = {}) {
    return new HorizontalSizeConstraint({ root: this, multiplier, constant });
  }

  heightConstraint({
    multiplier,
    constant,
  }: Omit<CreationSizeConstraint, 'root'> = {}) {
    return new VerticalSizeConstraint({ root: this, multiplier, constant });
  }

  leadingConstraint({
    constant,
  }: Omit<CreationPositionConstraint, 'root' | 'type'> = {}) {
    return new HorizontalPositionConstraint({
      root: this,
      constant,
      type: 'LEADING',
    });
  }

  trailingConstraint({
    constant,
  }: Omit<CreationPositionConstraint, 'root' | 'type'> = {}) {
    return new HorizontalPositionConstraint({
      root: this,
      constant,
      type: 'TRAILING',
    });
  }

  topConstraint({
    constant,
  }: Omit<CreationPositionConstraint, 'root' | 'type'> = {}) {
    return new VerticalPositionConstraint({
      root: this,
      constant,
      type: 'TOP',
    });
  }

  bottomConstraint({
    constant,
  }: Omit<CreationPositionConstraint, 'root' | 'type'> = {}) {
    return new VerticalPositionConstraint({
      root: this,
      constant,
      type: 'BOTTOM',
    });
  }

  //** !INTERNAL! — This function is for internal use only. If you use it, expect unexpected. */
  _expectCommit() {
    if (!this.isBatchUpdating) {
      this.pinsel.commit();
    }
  }
}
