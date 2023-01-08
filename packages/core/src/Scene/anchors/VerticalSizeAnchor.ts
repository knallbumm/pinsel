import type { CreationSizeAnchor } from '../../types/anchors/CreationSizeAnchor';
import { SizeAnchor } from './SizeAnchor';

export class VerticalSizeAnchor extends SizeAnchor {
  constructor({ root, multiplier, constant }: CreationSizeAnchor) {
    super('VERTICAL', { shape: root });
    this.multiplier = multiplier ?? 1;
    this.constant = constant ?? 0;
  }
}
