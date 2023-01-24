import type { GroupedAttributes } from './GroupedAttributes';

export class Commitable {
  commit(attributes: GroupedAttributes) {
    console.log('Did commit');
  }
}
