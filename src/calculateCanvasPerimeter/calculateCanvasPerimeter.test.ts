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

});