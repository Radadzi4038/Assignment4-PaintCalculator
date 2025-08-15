import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should return expected result for valid values", () => {
    expect(paintRequiredCalculator(50, 10)).toEqual(5);
  });

  test("should return 0 if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toEqual(0);
  });

  test("should throw error if coveragePerLiter is 0", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow(
      "Coverage per liter must be greater than 0"
    );
  });

  test("should handle decimal results correctly", () => {
    expect(paintRequiredCalculator(55, 10)).toBeCloseTo(5.5);
  });

  test("should throw error if either input is negative", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow(
      "Area and coverage must be non-negative"
    );
    expect(() => paintRequiredCalculator(50, -10)).toThrow(
      "Area and coverage must be non-negative"
    );
  });

  test("should handle very large numbers", () => {
    expect(paintRequiredCalculator(1_000_000, 10_000)).toBeCloseTo(100);
  });
});
