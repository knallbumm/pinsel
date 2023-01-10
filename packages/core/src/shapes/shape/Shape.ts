import { v4 as uuid } from 'uuid';

import Logger from '../../helper/Logger';
import {
  HorizontalPositionAnchor,
  HorizontalSizeAnchor,
  VerticalPositionAnchor,
  VerticalSizeAnchor,
} from '../../scene/anchors';
import type { Scene } from '../../scene/Scene';
import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import type { CreationSizeAnchor } from '../../types/anchors/CreationSizeAnchor';
import type { CreationRectangle } from '../../types/CreationRectangle';
import type { BaseShape } from './BaseShape';

export class Shape implements BaseShape {
  /** Uniqe uuid which identifies the shape */
  readonly id: string = uuid();

  /** The Scene the Shape is attached to. When not added to any scene undefined */
  protected SCENE?: Scene = undefined;

  /** X-Position of the shape */
  protected X: number | HorizontalPositionAnchor;

  /** Y-Position of the shape */
  protected Y: number | VerticalPositionAnchor;

  /** Width of the shape */
  protected WIDTH: number | HorizontalSizeAnchor;

  /** Height of the shape */
  protected HEIGHT: number | VerticalSizeAnchor;

  /** Fill of the shape */
  protected FILL = 'white';

  constructor({ x = 0, y = 0, width, height }: CreationRectangle) {
    this.X = x;
    this.Y = y;
    this.WIDTH = width;
    this.HEIGHT = height;
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
    this.SCENE?.pinsel.commit();
  }

  get y() {
    return this.Y;
  }

  set y(val: typeof this.Y) {
    this.Y = val;
    this.SCENE?.pinsel.commit();
  }

  get width() {
    return this.WIDTH;
  }

  set width(val: typeof this.WIDTH) {
    this.WIDTH = val;
    this.SCENE?.pinsel.commit();
  }

  get height() {
    return this.HEIGHT;
  }

  set height(val: typeof this.HEIGHT) {
    this.HEIGHT = val;
    this.SCENE?.pinsel.commit();
  }

  get fill() {
    return this.FILL;
  }

  set fill(val: typeof this.FILL) {
    this.FILL = val;
    this.SCENE?.pinsel.commit();
  }

  get actualWidth(): number {
    if (typeof this.WIDTH == 'number') {
      return this.WIDTH;
    } else {
      return (
        this.WIDTH.root.shape.actualWidth * this.WIDTH.multiplier +
        this.WIDTH.constant
      );
    }
  }

  get actualHeight(): number {
    if (typeof this.HEIGHT == 'number') {
      return this.HEIGHT;
    } else {
      return (
        this.HEIGHT.root.shape.actualHeight * this.HEIGHT.multiplier +
        this.HEIGHT.constant
      );
    }
  }

  get actualX(): number {
    if (typeof this.X == 'number') {
      return this.X;
    } else {
      return (
        this.X.root.shape.actualX +
        (this.X.type == 'TRAILING' ? this.X.root.shape.actualWidth : 0) +
        this.X.constant
      );
    }
  }

  get actualY(): number {
    if (typeof this.Y == 'number') {
      return this.Y;
    } else {
      return (
        this.Y.root.shape.actualY +
        (this.Y.type == 'BOTTOM' ? this.Y.root.shape.actualHeight : 0) +
        this.Y.constant
      );
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
