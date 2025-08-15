import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });

  test('should handle decimal numbers', () => {
    expect(calculatePaintCost(2.5, 4.2)).toBeCloseTo(10.5);
    expect(calculatePaintCost(5.5, 3.3)).toBeCloseTo(18.15);
  });

  test('should handle very large numbers', () => {
    expect(calculatePaintCost(1_000_000, 2_000)).toBe(2_000_000_000);
  });

   test('should handle zero for both inputs', () => {
    expect(calculatePaintCost(0, 0)).toBe(0);
  });

  test('should handle floating-point precision correctly', () => {
    const result = calculatePaintCost(0.1, 0.2);
    expect(result).toBeCloseTo(0.02, 5); // up to 5 decimal places
  });
});
