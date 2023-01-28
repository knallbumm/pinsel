import type { CreationPositionConstraint } from '../../types/constraints/CreationPositionConstraint';
import { PositionConstraint } from './PositionConstraint';

export class VerticalPositionConstraint extends PositionConstraint {
  type: 'TOP' | 'BOTTOM';
  constructor({ root, constant, type }: CreationPositionConstraint) {
    super('VERTICAL', { shape: root });
    this.type = type as 'TOP' | 'BOTTOM';
    this.constant = constant ?? 0;
  }
}
