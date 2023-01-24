import { GroupedAttributes } from '../../GroupedAttributes';
import type { FontOptions } from '../../types/additions/Font';

export class Font extends GroupedAttributes {
  protected FAMILY: string;
  protected SIZE: number;
  protected WEIGHT: number;

  constructor({ family, size, weight }: Partial<FontOptions>) {
    super();
    this.FAMILY = family ?? 'sans-serif';
    this.SIZE = size ?? 16;
    this.WEIGHT = weight ?? 400;
  }

  get family() {
    return this.FAMILY;
  }

  set family(family: typeof this.FAMILY) {
    this.FAMILY = family;
    this.ASSOCIATION?.commit(this);
  }

  get size() {
    return this.SIZE;
  }

  set size(size: typeof this.SIZE) {
    this.SIZE = size;
    this.ASSOCIATION?.commit(this);
  }

  get weight() {
    return this.WEIGHT;
  }

  set weight(weight: typeof this.WEIGHT) {
    this.WEIGHT = weight;
    this.ASSOCIATION?.commit(this);
  }
}
