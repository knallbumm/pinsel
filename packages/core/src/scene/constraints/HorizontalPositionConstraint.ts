import type { CreationPositionConstraint } from '../../types/constraints/CreationPositionConstraint';
import { PositionConstraint } from './PositionConstraint';

export class HorizontalPositionConstraint extends PositionConstraint {
  type: 'LEADING' | 'TRAILING';
  constructor({ root, constant, type }: CreationPositionConstraint) {
    super('HORIZONTAL', { shape: root });
    this.type = type as 'LEADING' | 'TRAILING';
    this.constant = constant ?? 0;
  }
}
