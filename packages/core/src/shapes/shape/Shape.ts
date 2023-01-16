import { v4 as uuid } from 'uuid';

import Logger from '../../helper/Logger';
import {
  HorizontalPositionAnchor,
  HorizontalSizeAnchor,
  VerticalPositionAnchor,
  VerticalSizeAnchor,
} from '../../scene/anchors';
import type { Scene } from '../../scene/Scene';
import type {
  BaseShape,
  CreationShape,
  ShapeAttributes,
  ShapeType,
} from '../../types';
import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import type { CreationSizeAnchor } from '../../types/anchors/CreationSizeAnchor';
import type { Height } from '../../types/Height';
import type { Width } from '../../types/Width';

export class Shape implements BaseShape {
  /** Uniqe uuid which identifies the shape */
  readonly id: string = uuid();

  readonly type: ShapeType;

  /** The Scene the Shape is attached to. When not added to any scene undefined */
  protected SCENE?: Scene = undefined;

  /** X-Position of the shape */
  protected X: number | HorizontalPositionAnchor;

  /** Y-Position of the shape */
  protected Y: number | VerticalPositionAnchor;

  /** Fill of the shape */
  protected FILL = 'white';

  constructor({ x = 0, y = 0, type }: CreationShape & ShapeAttributes) {
    this.X = x;
    this.Y = y;

    this.type = type;
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

  /* ANCHORS */

  widthAnchor({ multiplier, constant }: Omit<CreationSizeAnchor, 'root'> = {}) {
    return new HorizontalSizeAnchor({ root: this, multiplier, constant });
  }

  heightAnchor({
    multiplier,
    constant,
  }: Omit<CreationSizeAnchor, 'root'> = {}) {
    return new VerticalSizeAnchor({ root: this, multiplier, constant });
  }

  leadingAnchor({
    constant,
  }: Omit<CreationPositionAnchor, 'root' | 'type'> = {}) {
    return new HorizontalPositionAnchor({
      root: this,
      constant,
      type: 'LEADING',
    });
  }

  trailingAnchor({
    constant,
  }: Omit<CreationPositionAnchor, 'root' | 'type'> = {}) {
    return new HorizontalPositionAnchor({
      root: this,
      constant,
      type: 'TRAILING',
    });
  }

  topAnchor({ constant }: Omit<CreationPositionAnchor, 'root' | 'type'> = {}) {
    return new VerticalPositionAnchor({
      root: this,
      constant,
      type: 'TOP',
    });
  }

  bottomAnchor({
    constant,
  }: Omit<CreationPositionAnchor, 'root' | 'type'> = {}) {
    return new VerticalPositionAnchor({
      root: this,
      constant,
      type: 'BOTTOM',
    });
  }
}
