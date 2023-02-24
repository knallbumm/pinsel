import type { CreationShape } from '../general/CreationShape';

export type CreationPath = Omit<CreationShape, 'x' | 'y'>;
