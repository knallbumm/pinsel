import type { ResolvedFont } from '../../ResolvedFont';
import type { ResolvedShape } from '../general/ResolvedShape';

export interface ResolvedLabel extends ResolvedShape {
  type: 'LABEL';
  text: string;
  font: ResolvedFont;
}
