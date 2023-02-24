import logger from '../helper/Logger';
import type { Pinsel } from '../Pinsel';
import type { Renderer } from '../Renderer';
import type { Shape } from '../shapes';
import type {
  CoordinateSpace,
  CreationPositionConstraint,
  CreationSizeConstraint,
  Size,
  SpecificResolvedShape,
} from '../types';
import type { FrameUpdate } from '../types/FrameUpdate';
import type { SceneOptions } from '../types/scene/SceneOptions';
import {
  HorizontalPositionConstraint,
  HorizontalSizeConstraint,
  VerticalPositionConstraint,
  VerticalSizeConstraint,
} from './constraints';
import { resolveShape } from './resolving/shapes/resolveShape';

export class Scene {
  pinsel: Pinsel;
  renderer: Renderer;
  coordinateSpace: CoordinateSpace;

  fill = 'white';

  relativeTo: 'WIDTH' | 'HEIGHT' = 'WIDTH';

  private isBatchUpdating = false;

  constructor(pinsel: Pinsel, options: SceneOptions) {
    this.renderer = options.renderer;
    this.coordinateSpace = options.coordinateSpace;
    this.pinsel = pinsel;

    options.renderer.scene = this;
  }

  private shapes: Shape[] = [];
  private resolvedShapes: SpecificResolvedShape[] = [];

  add(shape: Shape) {
    if (!this.shapes.includes(shape)) {
      logger.info('CORE', `Inserted new shape`, shape);

      shape.scene = this;
      this.shapes.push(shape);
      const size = this.renderer.calculatedSize;
      const relativeLength =
        this.coordinateSpace == 'ADAPTIVE'
          ? this.relativeTo == 'HEIGHT'
            ? size.height
            : size.width
          : 1;
      this.resolvedShapes.push(resolveShape(shape, relativeLength));
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
      objects: this.resolvedShapes,
      scene: {
        fill: this.fill,
      },
    };
  }

  get referenceLength(): number {
    return this.relativeTo == 'HEIGHT'
      ? this.renderer.calculatedSize.height
      : this.renderer.calculatedSize.width;
  }

  updateAll() {
    const size = this.renderer.calculatedSize;
    const relativeLength =
      this.coordinateSpace == 'ADAPTIVE'
        ? this.relativeTo == 'HEIGHT'
          ? size.height
          : size.width
        : 1;
    this.resolvedShapes = this.shapes.map((s) =>
      resolveShape(s, relativeLength)
    );
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
