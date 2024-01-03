import {describe, expect, test, jest, afterEach} from '@jest/globals';
import {timeToPresent} from '../src/utils/dateUtils';

describe('timeToPresent', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('display correct time difference for 1 sec', () => {
    const mockDate = new Date('2023-12-04T15:41:00');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
    //Date.now = jest.fn(() => new Date("2023-12-04T15:41:00").valueOf())

    expect(timeToPresent(new Date('2023-12-04T15:41:01'))).toBe('1 sec');
  });

  test('display correct time difference for 6 sec', () => {
    const mockDate = new Date('2023-12-03T14:48:00');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-03T14:48:06'))).toBe('6 sec');
  });

  test('display correct time difference for 1 min', () => {
    const mockDate = new Date('2023-12-03T14:48:00');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-03T14:49:00'))).toBe('1 min');
  });

  test('display correct time difference for 1 hr', () => {
    const mockDate = new Date('2023-12-03T14:48:00');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-03T15:48:00'))).toBe('1 hr');
  });

  test('display correct time difference for 2 hrs', () => {
    const mockDate = new Date('2023-12-03T14:48:00');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-03T16:48:06'))).toBe('2 hrs');
  });

  test('display correct time difference for 1 day', () => {
    //Date.now = jest.fn(() => 1701729694004)
    const mockDate = new Date('2023-12-04');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-03'))).toBe('1 d');
  });

  test('display correct time difference for 3 days', () => {
    //Date.now = jest.fn(() => 1701729694004)
    const mockDate = new Date('2023-12-04');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2023-12-01'))).toBe('3 d');
  });

  test('display correct time difference for 1 year', () => {
    //Date.now = jest.fn(() => 1701729694004)
    const mockDate = new Date('2023-12-04');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2022-12-03'))).toBe('1 y');
  });

  test('display correct time difference for 2 years', () => {
    //Date.now = jest.fn(() => 1701729694004)

    const mockDate = new Date('2023-12-04');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(timeToPresent(new Date('2021-12-03'))).toBe('2 y');
  });
});
