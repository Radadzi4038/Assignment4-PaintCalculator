export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (area < 0 || coveragePerLiter < 0) {
    throw new Error("Area and coverage must be non-negative");
  }
  if (coveragePerLiter === 0) {
    throw new Error("Coverage per liter must be greater than 0");
  }

  return area / coveragePerLiter;
}
