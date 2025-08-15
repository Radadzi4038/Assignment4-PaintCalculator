export default function convertAreaToSquareFeet(area: number): number {
  const SQM_TO_SQFT = 10.7639; // Conversion factor from m² to ft²
  return parseFloat((area * SQM_TO_SQFT).toFixed(5)); // Round to 5 decimal places for consistency
}
