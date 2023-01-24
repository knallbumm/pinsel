import type { Commitable } from './Commitable';

export class GroupedAttributes {
  protected ASSOCIATION?: Commitable;

  set association(value: Commitable) {
    this.ASSOCIATION = value;
  }

  clone() {
    return this;
  }
}
