import type { AnchorRoot } from '../../types/anchors/AnchorRoot';
import { PositionAnchor } from './PositionAnchor';

export class VerticalPositionAnchor extends PositionAnchor {
  constructor(root: AnchorRoot) {
    super('VERTICAL', root);
  }
}
