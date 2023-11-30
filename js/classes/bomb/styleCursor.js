export default function styleCursor(mouseOverShape) {
  if (mouseOverShape) {
    document.body.style.cursor = "grab";
  } else {
    document.body.style.cursor = "default";
  }
}
