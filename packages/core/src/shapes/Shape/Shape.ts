import { v4 as uuid } from 'uuid';

import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import type { CreationSizeAnchor } from '../../types/anchors/CreationSizeAnchor';
import type { CreationRectangle } from '../../types/CreationRectangle';
import type { BaseShape } from './BaseShape';
import { HorizontalPositionAnchor } from './HorizontalPositionAnchor';
import { HorizontalSizeAnchor } from './HorizontalSizeAnchor';
import { VerticalPositionAnchor } from './VerticalPositionAnchor';
import { VerticalSizeAnchor } from './VerticalSizeAnchor';

export class Shape implements BaseShape {
  readonly id: string = uuid();
  readonly x: number | HorizontalPositionAnchor;
  readonly y: number | VerticalPositionAnchor;
  readonly width: number | HorizontalSizeAnchor;
  readonly height: number | VerticalSizeAnchor;

  // Fill
  readonly fill: string = 'white';

  constructor({ x = 0, y = 0, width, height }: CreationRectangle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get getSize() {
    return this.x;
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
    if (typeof this.x == 'number') {
      return this.x;
    } else {
      return (
        this.x.root.shape.actualX +
        (this.x.type == 'TRAILING' ? this.x.root.shape.actualWidth : 0) +
        this.x.constant
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
