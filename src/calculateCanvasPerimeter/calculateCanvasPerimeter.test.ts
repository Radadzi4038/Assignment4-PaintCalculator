import calculateCanvasPerimeter from './calculateCanvasPerimeter';

describe("calculateCanvasPerimeter", () => {
  test("handles negative numbers as absolute values", () => {
    // RED: currently fails if i don't handle abs correctly
    expect(calculateCanvasPerimeter("-10", "20")).toEqual(60);
  });

  test("handles whitespace in inputs", () => {
    // RED: fails if trim() not used
    expect(calculateCanvasPerimeter(" 10 ", " 20 ")).toEqual(60);
  });

  test("returns NaN for non-numeric inputs", () => {
    // RED: fails if NaN not handled
    expect(calculateCanvasPerimeter("a", "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "b")).toBeNaN();
  });

  test("returns correct perimeter when one side is zero", () => {
    expect(calculateCanvasPerimeter("0", "5")).toEqual(10);
    expect(calculateCanvasPerimeter("7", "0")).toEqual(14);
  });

  test("handles very large numbers", () => {
    expect(calculateCanvasPerimeter("1000000000000", "2000000000000")).toEqual(6000000000000);
    expect(calculateCanvasPerimeter("1e12", "2e12")).toEqual(6e12);
  });

  test("handles very small numbers", () => {
    expect(calculateCanvasPerimeter("0.000000001", "0.000000002")).toBeCloseTo(0.000000006, 15);
    expect(calculateCanvasPerimeter("1e-9", "2e-9")).toBeCloseTo(6e-9, 15);
  });


});