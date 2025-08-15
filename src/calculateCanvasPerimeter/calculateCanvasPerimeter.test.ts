import calculateCanvasPerimeter from './calculateCanvasPerimeter';

describe("calculateCanvasPerimeter", () => {
  test("handles negative numbers as absolute values", () => {
    // RED: currently fails if we don't handle abs correctly
    expect(calculateCanvasPerimeter("-10", "20")).toEqual(60);
  });
  
});