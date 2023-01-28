import { v4 as uuid } from 'uuid';

import type { Commitable } from '../../Commitable';
import type { GroupedAttributes } from '../../GroupedAttributes';
import Logger from '../../helper/Logger';
import {
  HorizontalPositionConstraint,
  HorizontalSizeConstraint,
  VerticalPositionConstraint,
  VerticalSizeConstraint,
} from '../../scene/constraints';
import type { Scene } from '../../scene/Scene';
import type {
  BaseShape,
  CreationShape,
  ShapeAttributes,
  ShapeType,
} from '../../types';
import type { CreationPositionConstraint } from '../../types/constraints/CreationPositionConstraint';
import type { CreationSizeConstraint } from '../../types/constraints/CreationSizeConstraint';
import type { Height } from '../../types/Height';
import type { Width } from '../../types/Width';

export class Shape implements BaseShape, Commitable {
  /** Uniqe uuid which identifies the shape */
  readonly id: string = uuid();

  readonly type: ShapeType;

  /** The Scene the Shape is attached to. When not added to any scene undefined */
  protected SCENE?: Scene = undefined;

  /** X-Position of the shape */
  protected X: number | HorizontalPositionConstraint;

  /** Y-Position of the shape */
  protected Y: number | VerticalPositionConstraint;

  /** Fill of the shape */
  protected FILL = 'white';

  protected STROKE?: string = undefined;

  constructor({ x = 0, y = 0, type, fill }: CreationShape & ShapeAttributes) {
    this.X = x;
    this.Y = y;

    this.type = type;
    this.FILL = fill ?? 'white';
  }

  commit(attributes: GroupedAttributes): void {
    Logger.info('SHAPE', 'Attributes changed', attributes);
    this.SCENE?._expectCommit();
  }

  set scene(val: Scene) {
    if (this.SCENE) {
      Logger.error('SHAPE', 'Shape is already added to a scene');
    }
    this.SCENE = val;
  }

  get x() {
    return this.X;
  }

  set x(val: typeof this.X) {
    this.X = val;
    this.SCENE?._expectCommit();
  }

  get y() {
    return this.Y;
  }

  set y(val: typeof this.Y) {
    this.Y = val;
    this.SCENE?._expectCommit();
  }

  get width(): Width {
    return 99;
  }

  get height(): Height {
    return 99;
  }

  get fill() {
    return this.FILL;
  }

  set fill(val: typeof this.FILL) {
    this.FILL = val;
    this.SCENE?._expectCommit();
  }

  get stroke() {
    return this.STROKE;
  }

  set stroke(val: typeof this.STROKE) {
    this.STROKE = val;
    this.SCENE?._expectCommit();
  }

  get actualWidth(): number {
    if (typeof this.width == 'number') {
      return this.width;
    } else if (this.width.root.shape instanceof Shape) {
      return (
        this.width.root.shape.actualWidth * this.width.multiplier +
        this.width.constant
      );
    } else {
      return this.SCENE?.coordinateSpace == 'ADAPTIVE'
        ? this.width.multiplier + this.width.constant
        : this.width.root.shape.renderer.calculatedSize.width *
            this.width.multiplier +
            this.width.constant;
    }
  }

  get actualHeight(): number {
    if (typeof this.height == 'number') {
      return this.height;
    } else if (this.height.root.shape instanceof Shape) {
      return (
        this.height.root.shape.actualHeight * this.height.multiplier +
        this.height.constant
      );
    } else {
      return this.SCENE?.coordinateSpace == 'ADAPTIVE'
        ? this.height.multiplier + this.height.constant
        : this.height.root.shape.renderer.calculatedSize.height *
            this.height.multiplier +
            this.height.constant;
    }
  }

  get actualX(): number {
    if (typeof this.X == 'number') {
      return this.X;
    } else if (this.X.root.shape instanceof Shape) {
      return (
        this.X.root.shape.actualX +
        (this.X.type == 'TRAILING' ? this.X.root.shape.actualWidth : 0) +
        this.X.constant
      );
    } else {
      return 0 + this.X.constant;
    }
  }

  get actualY(): number {
    if (typeof this.Y == 'number') {
      return this.Y;
    } else if (this.Y.root.shape instanceof Shape) {
      return (
        this.Y.root.shape.actualY +
        (this.Y.type == 'BOTTOM' ? this.Y.root.shape.actualHeight : 0) +
        this.Y.constant
      );
    } else {
      return 0 + this.Y.constant;
    }
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
}
