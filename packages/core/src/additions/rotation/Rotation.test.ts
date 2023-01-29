import { describe, expect, test } from 'vitest';

import type { RotationOptions } from '../../types/RotationOptions';
import { Rotation } from './Rotation';

describe('Rotation', () => {
  test('Should get iniated with the correct parameters', () => {
    // given

    const point = { x: 0.5, y: 0.3 };
    const options: RotationOptions = { deg: 69, point };

    // when
    const rotation = new Rotation(options);

    // then
    expect(rotation['ANGLE']).toBe(69);
    expect(rotation['UNIT']).toBe('DEG');
    expect(rotation['POINT']).toBe(point);
  });

  test('Should use correct defaults, when not given parameters', () => {
    // given

    const options: RotationOptions = {};

    // when
    const rotation = new Rotation(options);

    // then
    expect(rotation['ANGLE']).toBe(0);
    expect(rotation['UNIT']).toBe('DEG');
    expect(rotation['POINT']).toBe('ANCHOR');
  });

  test('Should switch to degrees', () => {
    // given

    const options: RotationOptions = { rad: 0.34 };

    // when
    const rotation = new Rotation(options);
    rotation.switchToDeg();

    // then
    expect(rotation['ANGLE']).toBeCloseTo(19.481);
    expect(rotation['UNIT']).toBe('DEG');
  });

  test('Should switch to radians', () => {
    // given

    const options: RotationOptions = { deg: 69 };

    // when
    const rotation = new Rotation(options);
    rotation.switchToRad();

    // then
    expect(rotation['ANGLE']).toBeCloseTo(1.204);
    expect(rotation['UNIT']).toBe('RAD');
  });
});
