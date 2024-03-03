import { describe, test, expect } from 'vitest';
import * as sample from './addNumbers';

describe('Calculate', () => {
  test('addNumbers', () => {
    expect(sample.addNumbers(3, 6)).toBe(9);
  });

  test('addNumbers', () => {
    expect(sample.addNumbers(6, 6)).toBe(12);
  });
});
