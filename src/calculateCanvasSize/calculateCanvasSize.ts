export default function calculateCanvasSize(length: string, width: string) {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    return 0;
  }

  return parsedLength * parsedWidth;
}
