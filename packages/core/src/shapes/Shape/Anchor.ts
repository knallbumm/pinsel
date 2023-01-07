import type { AnchorRoot } from '../../types/anchors/AnchorRoot';
import type { Axis } from '../../types/Axis';

export class Anchor {
  readonly axis: Axis;
  readonly root: AnchorRoot;

  constructor(axis: Axis, root: AnchorRoot) {
    this.axis = axis;
    this.root = root;
  }
}
