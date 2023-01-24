import type { Font } from '../../../additions/font';
import type { ResolvedFont } from '../../../types/ResolvedFont';

export const resolveFont = (font: Font): ResolvedFont => {
  return {
    family: font.family,
    size: font.size,
    weight: font.weight,
  };
};
