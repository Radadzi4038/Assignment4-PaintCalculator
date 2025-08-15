import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
    expect(calculateTotalCost(100, -50)).toBe(50);
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should handle decimal numbers', () => {
    expect(calculateTotalCost(10.5, 5.25)).toBeCloseTo(15.75);
    expect(calculateTotalCost(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should handle very large numbers', () => {
    expect(calculateTotalCost(1_000_000_000, 2_000_000_000)).toBe(3_000_000_000);
  });

  test('should handle mixed positive and negative decimals', () => {
    expect(calculateTotalCost(-10.5, 5.25)).toBeCloseTo(-5.25);
    expect(calculateTotalCost(10.5, -5.25)).toBeCloseTo(5.25);
  });
});
