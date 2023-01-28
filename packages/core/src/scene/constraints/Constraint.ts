import type { Axis } from '../../types/Axis';
import type { Root } from '../../types/constraints/Root';

export class Constraint {
  readonly axis: Axis;
  readonly root: Root;

  constructor(axis: Axis, root: Root) {
    this.axis = axis;
    this.root = root;
  }
}
