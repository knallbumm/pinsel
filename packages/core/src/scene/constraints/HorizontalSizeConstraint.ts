import type { CreationSizeConstraint } from '../../types/constraints/CreationSizeConstraint';
import { SizeConstraint } from './SizeConstraint';

export class HorizontalSizeConstraint extends SizeConstraint {
  constructor({ root, multiplier, constant }: CreationSizeConstraint) {
    super('HORIZONTAL', { shape: root });
    this.multiplier = multiplier ?? 1;
    this.constant = constant ?? 0;
  }
}
