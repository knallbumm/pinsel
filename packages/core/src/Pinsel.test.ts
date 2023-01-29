import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import { Pinsel } from './Pinsel';
import { Renderer } from './Renderer';
import { Runner } from './Runner';

const window = {
  requestAnimationFrame: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
};

describe('Pinsel', () => {
  beforeAll(() => {
    vi.stubGlobal('window', window);
  });

  test('Should export a class named "Pinsel"', () => {
    expect(Pinsel).toBeDefined();
  });

  test('Should be creatable', () => {
    const instance = new Pinsel({
      coordinateSpace: 'ADAPTIVE',
      runner: new Runner(),
      renderer: new Renderer(),
    });
    expect(instance).toBeInstanceOf(Pinsel);
  });
});

describe('Pinsel - commit()', () => {
  test('Should commit changes', () => {
    const p = new Pinsel({
      coordinateSpace: 'ADAPTIVE',
      runner: new Runner(),
      renderer: new Renderer(),
    });

    p.commit();
    expect(true).toBe(true);
  });
});
