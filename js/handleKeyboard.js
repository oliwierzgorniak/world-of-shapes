import { SHAPES } from "./globals/static.js";
import global from "./globals/dynamic.js";
import Bomb from "./classes/Bomb.js";

export default function handleKeyboard() {
  let manualElement = document.querySelector("#manual");

  window.addEventListener("keydown", (e) => {
    const MOVE_SPEED = 0.1;

    if (e.key === " ") {
      global.shapeIndex = (global.shapeIndex + 1) % SHAPES.length;
      global.bomb = new Bomb(SHAPES[global.shapeIndex]);
    } else if (e.key === "ArrowRight")
      global.shapesOffset.x += width * MOVE_SPEED;
    else if (e.key === "ArrowLeft") global.shapesOffset.x -= width * MOVE_SPEED;
    else if (e.key === "ArrowUp") global.shapesOffset.y -= height * MOVE_SPEED;
    else if (e.key === "ArrowDown")
      global.shapesOffset.y += height * MOVE_SPEED;
    else if (e.key === "Backspace")
      for (let i = global.shapes.length - 1; i >= 0; i--) global.shapes.pop();
    else if (e.key === "m")
      manualElement.style.display =
        manualElement.style.display === "none" ? "initial" : "none";
  });
}
