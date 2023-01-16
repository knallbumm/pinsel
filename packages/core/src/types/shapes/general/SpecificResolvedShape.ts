import type { ResolvedCircle } from '../circle';
import type { ResolvedLabel } from '../label';
import type { ResolvedRectangle } from '../rectangle/ResolvedRectangle';

export type SpecificResolvedShape =
  | ResolvedRectangle
  | ResolvedCircle
  | ResolvedLabel;
