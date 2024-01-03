import {describe, expect, test} from '@jest/globals';
import {numberRandom} from '../src/utils/numberUtils';

describe('numberRandom', () => {
  test('generates a random number between min and max', () => {
    const min = 1;
    const max = 10;
    const random = numberRandom(min, max);
    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
  });

  test('throws an error when min is not less than max', () => {
    const min = 1;
    const max = 10;
    expect(() => {
      numberRandom(max, min);
    }).toThrow('min must be smaller than max');
  });
});
