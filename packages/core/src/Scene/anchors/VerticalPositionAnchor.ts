import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import { PositionAnchor } from './PositionAnchor';

export class VerticalPositionAnchor extends PositionAnchor {
  type: 'TOP' | 'BOTTOM';
  constructor({ root, constant, type }: CreationPositionAnchor) {
    super('VERTICAL', { shape: root });
    this.type = type as 'TOP' | 'BOTTOM';
    this.constant = constant ?? 0;
  }
}
