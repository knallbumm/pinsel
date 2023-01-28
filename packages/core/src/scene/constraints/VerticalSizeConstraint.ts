import type { CreationSizeConstraint } from '../../types/constraints/CreationSizeConstraint';
import { SizeConstraint } from './SizeConstraint';

export class VerticalSizeConstraint extends SizeConstraint {
  constructor({ root, multiplier, constant }: CreationSizeConstraint) {
    super('VERTICAL', { shape: root });
    this.multiplier = multiplier ?? 1;
    this.constant = constant ?? 0;
  }
}
