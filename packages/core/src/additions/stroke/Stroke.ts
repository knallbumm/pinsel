import { GroupedAttributes } from '../../GroupedAttributes';
import type { StrokeOptions } from '../../types/StrokeOptions';

export class Stroke extends GroupedAttributes {
  protected WIDTH: number;
  protected COLOR?: string;

  constructor(options: Partial<StrokeOptions>) {
    super();

    this.WIDTH = options.width ?? 0;
    this.COLOR = options.color;
  }

  get width() {
    return this.WIDTH;
  }

  set width(width: typeof this.WIDTH) {
    this.WIDTH = width;
    this.ASSOCIATION?.commit(this);
  }

  get color() {
    return this.COLOR;
  }

  set color(color: typeof this.COLOR) {
    this.COLOR = color;
    this.ASSOCIATION?.commit(this);
  }
}
