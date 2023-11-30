export default function drawBomb(shape, position, size) {
  switch (shape) {
    case "circle":
      ellipse(position.x, position.y, size, size);
      break;
    case "square":
      rect(position.x - size / 2, position.y - size / 2, size, size);
      break;
    case "triangle":
      triangle(
        position.x - size / 2,
        position.y + size / 2,
        position.x + size / 2,
        position.y + size / 2,
        position.x,
        position.y - size / 2
      );
      break;
  }
}
