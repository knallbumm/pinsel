import { Font } from './Font';

export const makeFont = (size: number, family: string): Font => {
  return new Font({ size, family });
};
