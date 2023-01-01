import { describe, expect, test } from 'vitest';

import { CanvasRenderer } from './CanvasRenderer';

describe('CanvasRenderer', () => {
  test('Should export a class named "CanvasRenderer"', () => {
    expect(CanvasRenderer).toBeDefined();
  });

  test('Should be creatable', () => {
    const instance = new CanvasRenderer();
    expect(instance).toBeInstanceOf(CanvasRenderer);
  });
});
