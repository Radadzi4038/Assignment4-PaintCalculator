import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  it('should correctly calculate canvas size from length and width strings', () => {
    expect(calculateCanvasSize("10", "5")).toBe(50);
  });

  it('should return 0 if either length or width is not a valid number', () => {
    expect(calculateCanvasSize("abc", "5")).toBe(0);
    expect(calculateCanvasSize("10", "xyz")).toBe(0);
  });

  it('should correctly handle decimal string values', () => {
    expect(calculateCanvasSize("3.5", "2")).toBeCloseTo(7);
  });

  it("should calculate size when given numeric strings", () => {
    expect(calculateCanvasSize("10", "5")).toBe(50);
  });

});
