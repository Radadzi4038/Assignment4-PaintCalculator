export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = Math.abs(Number(length));
  const w = Math.abs(Number(width));

  if (isNaN(l) || isNaN(w)) return NaN;

  return Math.sqrt(l * l + w * w);
}
