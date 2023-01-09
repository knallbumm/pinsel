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
  readonly id: string = uuid();
  protected SCENE?: Scene;
  protected X: number | HorizontalPositionAnchor;
  readonly y: number | VerticalPositionAnchor;
  readonly width: number | HorizontalSizeAnchor;
  readonly height: number | VerticalSizeAnchor;

  // Fill
  readonly fill: string = 'white';

  constructor({ x = 0, y = 0, width, height }: CreationRectangle) {
    this.X = x;
    this.y = y;
    this.width = width;
    this.height = height;
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

  set x(val: number | HorizontalPositionAnchor) {
    this.X = val;
    this.SCENE?.pinsel.commit();
  }

  get actualWidth(): number {
    if (typeof this.width == 'number') {
      return this.width;
    } else {
      return (
        this.width.root.shape.actualWidth * this.width.multiplier +
        this.width.constant
      );
    }
  }

  get actualHeight(): number {
    if (typeof this.height == 'number') {
      return this.height;
    } else {
      return (
        this.height.root.shape.actualHeight * this.height.multiplier +
        this.height.constant
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
    if (typeof this.y == 'number') {
      return this.y;
    } else {
      return (
        this.y.root.shape.actualY +
        (this.y.type == 'BOTTOM' ? this.y.root.shape.actualHeight : 0) +
        this.y.constant
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
