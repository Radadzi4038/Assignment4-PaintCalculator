export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  return 2 * (parseInt(length) + parseInt(width));
}
