import { v4 as uuid } from 'uuid';

import type { Rotation } from '../../additions';
import { rotation } from '../../additions';
import type { Stroke } from '../../additions/stroke';
import { stroke } from '../../additions/stroke';
import type { Commitable } from '../../Commitable';
import type { GroupedAttributes } from '../../GroupedAttributes';
import Logger from '../../helper/Logger';
import { resolveHorizontalPositionConstraint } from '../../helper/resolveHorizontalPositionConstraint';
import { resolveVerticalPositionConstraint } from '../../helper/resolveVerticalPositionConstraint';
import {
  HorizontalPositionConstraint,
  HorizontalSizeConstraint,
  VerticalPositionConstraint,
  VerticalSizeConstraint,
} from '../../scene/constraints';
import { resolveShortAnchor } from '../../scene/resolving/general/shortAnchor/resolveShortAnchor';
import type { Scene } from '../../scene/Scene';
import type {
  Anchor,
  BaseShape,
  CreationPositionConstraint,
  CreationShape,
  CreationSizeConstraint,
  Height,
  ShapeAttributes,
  ShapeType,
  Width,
} from '../../types';

export class Shape implements BaseShape, Commitable {
  /** Uniqe uuid which identifies the shape */
  readonly id: string = uuid();

  readonly type: ShapeType;

  /** The Scene the Shape is attached to. When not added to any scene undefined */
  protected SCENE?: Scene = undefined;

  /** X-Position of the shape */
  protected X?: number | HorizontalPositionConstraint;

  /** Y-Position of the shape */
  protected Y?: number | VerticalPositionConstraint;

  /** Fill of the shape */
  protected FILL = 'white';

  protected STROKE: Stroke;

  protected RENDER_ANCHOR: Anchor = 'TOP-LEFT';

  protected ANCHOR: Anchor = 'TOP-LEFT';

  protected ROTATION: Rotation;

  constructor({ x, y, type, fill }: CreationShape & ShapeAttributes) {
    this.X = x;
    this.Y = y;

    this.type = type;
    this.FILL = fill ?? 'white';

    this.ROTATION = rotation({ deg: 0, point: 'ANCHOR' });
    this.ROTATION.association = this;

    this.STROKE = stroke({});
    this.STROKE.association = this;
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

  get rotation() {
    return this.ROTATION;
  }

  set rotation(val: typeof this.ROTATION) {
    this.ROTATION = val;
    this.SCENE?._expectCommit();
  }

  get actualBounds(): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
  } {
    const width = this.actualWidth;
    const height = this.actualHeight;

    const resolvedAnchor = resolveShortAnchor(this.anchor);

    const minX = this.actualX - resolvedAnchor.x * width;
    const minY = this.actualY - resolvedAnchor.y * height;
    const maxX = minX + width;
    const maxY = minY + height;

    return { minX, minY, maxX, maxY, width, height };
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
        : this.width.root.shape.referenceLength * this.width.multiplier +
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
        : this.height.root.shape.referenceLength * this.height.multiplier +
            this.height.constant;
    }
  }

  get actualX(): number {
    if (this.x == undefined) {
      throw Error('Could not find defined X');
    }
    return resolveHorizontalPositionConstraint(this.x);
  }

  get actualY(): number {
    if (this.y == undefined) {
      throw Error('Could not find defined Y');
    }
    return resolveVerticalPositionConstraint(this.y);
  }

  get anchor() {
    return this.ANCHOR;
  }

  set anchor(val: Anchor) {
    this.ANCHOR = val;
    this.SCENE?._expectCommit();
  }

  get _renderAnchor() {
    return this.RENDER_ANCHOR;
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
