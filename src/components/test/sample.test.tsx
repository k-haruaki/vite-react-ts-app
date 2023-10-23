import { describe, test, expect } from 'vitest';
import * as sample from './sample';

describe('Calculate', () => {
  test('addNumbers', () => {
    expect(sample.addNumbers(3, 6)).toBe(9);
  });
});
