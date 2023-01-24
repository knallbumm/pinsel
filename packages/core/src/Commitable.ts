import type { GroupedAttributes } from './GroupedAttributes';
import Logger from './helper/Logger';

export class Commitable {
  commit(attributes: GroupedAttributes) {
    Logger.info('CORE', 'Commited attributes', attributes);
  }
}
