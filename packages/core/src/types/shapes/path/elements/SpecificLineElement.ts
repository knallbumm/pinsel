import type { PathArcLineElement } from './PathArcLineElement';
import type { PathBezierLineElement } from './PathBezierLineElement';
import type { PathLinearLineElement } from './PathLinearLineElement';

export type SpecificLineElement =
  | PathLinearLineElement
  | PathBezierLineElement
  | PathArcLineElement;
