import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(convertAreaToSquareFeet(-100)).toBeCloseTo(-1076.39);
    expect(convertAreaToSquareFeet(-200)).toBeCloseTo(-2152.78);
    expect(convertAreaToSquareFeet(-150)).toBeCloseTo(-1614.585);
  });

  test('should handle very small decimal areas', () => {
    expect(convertAreaToSquareFeet(0.0001)).toBeCloseTo(0.00108);
    expect(convertAreaToSquareFeet(0.0005)).toBeCloseTo(0.00538);
  });

  test('should handle very large areas', () => {
    expect(convertAreaToSquareFeet(1_000_000)).toBeCloseTo(10_763_900);
  });

  
});
