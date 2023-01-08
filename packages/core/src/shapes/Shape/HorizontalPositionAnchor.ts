import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import { PositionAnchor } from './PositionAnchor';

export class HorizontalPositionAnchor extends PositionAnchor {
  type: 'LEADING' | 'TRAILING';
  constructor({ root, constant, type }: CreationPositionAnchor) {
    super('HORIZONTAL', { shape: root });
    this.type = type as 'LEADING' | 'TRAILING';
    this.constant = constant ?? 0;
  }
}
