import type { CreationSizeAnchor } from '../../types/anchors/CreationSizeAnchor';
import { SizeAnchor } from './SizeAnchor';

export class HorizontalSizeAnchor extends SizeAnchor {
  constructor({ root, multiplier, constant }: CreationSizeAnchor) {
    super('HORIZONTAL', { shape: root });
    this.multiplier = multiplier ?? 1;
    this.constant = constant ?? 0;
  }
}
