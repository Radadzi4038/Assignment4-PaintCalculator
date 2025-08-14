import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('should calculate diagonal for decimal numbers', () => {
    expect(calculateCanvasDiagonal('3.5', '4.5')).toBeCloseTo(Math.sqrt(3.5 ** 2 + 4.5 ** 2));
    expect(calculateCanvasDiagonal('0.3', '0.4')).toBeCloseTo(0.5);
  });

  test('should handle very large numbers', () => {
    expect(calculateCanvasDiagonal('30000', '40000')).toBeCloseTo(50000);
  });

  test('should handle one side being zero', () => {
    expect(calculateCanvasDiagonal('0', '5')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('7', '0')).toBeCloseTo(7);
  });

});
