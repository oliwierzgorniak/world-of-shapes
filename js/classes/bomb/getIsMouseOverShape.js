export default function getIsMouseOverShape(position, bombSize) {
  return (
    mouseX <= position.x + bombSize / 2 &&
    mouseX > position.x - bombSize / 2 &&
    mouseY <= position.y + bombSize / 2 &&
    mouseY > position.y - bombSize / 2
  );
}
