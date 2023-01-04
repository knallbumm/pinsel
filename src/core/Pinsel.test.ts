import { describe, expect, test } from 'vitest';

import { Pinsel } from './Pinsel';
import { Rectangle } from './shapes/Rectangle/Rectangle';

describe('Pinsel', () => {
  test('Should export a class named "Pinsel"', () => {
    expect(Pinsel).toBeDefined();
  });

  test('Should be creatable', () => {
    const instance = new Pinsel({});
    expect(instance).toBeInstanceOf(Pinsel);
  });
});

describe('Pinsel - add()', () => {
  test('Should append the new object to the array', () => {
    // Given
    const shape = new Rectangle({ x: 0, y: 0, width: 100, height: 100 });
    const p = new Pinsel({});

    p.scene.add(shape);
    expect(p.scene['objects']).toContain(shape);
  });
});
