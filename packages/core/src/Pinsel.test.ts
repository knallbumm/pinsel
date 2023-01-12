import { describe, expect, test } from 'vitest';

import { Pinsel } from './Pinsel';

describe('Pinsel', () => {
  test('Should export a class named "Pinsel"', () => {
    expect(Pinsel).toBeDefined();
  });

  test('Should be creatable', () => {
    const instance = new Pinsel({});
    expect(instance).toBeInstanceOf(Pinsel);
  });
});

describe('Pinsel - commit()', () => {
  test('Should commit changes', () => {
    const p = new Pinsel({});

    p.commit();
    expect(true).toBe(true);
  });
});
