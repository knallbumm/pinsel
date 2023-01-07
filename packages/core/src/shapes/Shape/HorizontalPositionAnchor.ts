import type { CreationPositionAnchor } from '../../types/anchors/CreationPositionAnchor';
import { PositionAnchor } from './PositionAnchor';

export class HorizontalPositionAnchor extends PositionAnchor {
  constructor({ root, constant }: CreationPositionAnchor) {
    super('HORIZONTAL', { shape: root });

    this.constant = constant ?? 0;
  }
}
