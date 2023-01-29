import { GroupedAttributes } from '../../GroupedAttributes';
import type { RotationOptions } from '../../types/RotationOptions';
import type { RotationPoint } from '../../types/RotationPoint';
import type { RotationUnit } from '../../types/RotationUnit';

export class Rotation extends GroupedAttributes {
  protected ANGLE: number;
  protected UNIT: RotationUnit;
  protected POINT: RotationPoint;

  constructor(options: Partial<RotationOptions>) {
    super();

    this.ANGLE = options.deg ?? options.rad ?? 0;
    this.UNIT = options.rad != undefined ? 'RAD' : 'DEG';
    this.POINT = options.point ?? 'ANCHOR';
  }

  get angle() {
    return this.ANGLE;
  }

  set angle(angle: typeof this.ANGLE) {
    this.ANGLE = angle;
    this.ASSOCIATION?.commit(this);
  }

  get unit() {
    return this.UNIT;
  }

  set unit(unit: typeof this.UNIT) {
    this.UNIT = unit;
    this.ASSOCIATION?.commit(this);
  }

  get point() {
    return this.POINT;
  }

  set point(point: typeof this.POINT) {
    this.POINT = point;
    this.ASSOCIATION?.commit(this);
  }
}
