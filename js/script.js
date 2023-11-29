import SlingShot from "./classes/SlingShot.js";
import Bomb from "./classes/Bomb.js";
import { BACKGROUND_COLOR, SHAPES, shapes, shapesOffset } from "./globals.js";
import handleDashboard from "./handleDashboard.js";

let slingShot, bomb;
let shapeIndex = 0;

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background(BACKGROUND_COLOR);
  noStroke();

  slingShot = new SlingShot();
  bomb = new Bomb(SHAPES[shapeIndex]);
};

window.draw = function () {
  background(BACKGROUND_COLOR);

  shapes.forEach((shape) => shape.display());
  bomb.display();
  if (bomb.hasExploaded) bomb = new Bomb(SHAPES[shapeIndex]);
  slingShot.display();
};

window.addEventListener("keydown", (e) => {
  const MOVE_SPEED = 0.1;

  if (e.key === " ") {
    shapeIndex = (shapeIndex + 1) % SHAPES.length;
    bomb = new Bomb(SHAPES[shapeIndex]);
  } else if (e.key === "ArrowRight") shapesOffset.x += width * MOVE_SPEED;
  else if (e.key === "ArrowLeft") shapesOffset.x -= width * MOVE_SPEED;
  else if (e.key === "ArrowUp") shapesOffset.y -= height * MOVE_SPEED;
  else if (e.key === "ArrowDown") shapesOffset.y += height * MOVE_SPEED;
  else if (e.key === "Backspace")
    for (let i = shapes.length - 1; i >= 0; i--) shapes.pop();
  else if (e.key === "m")
    manualElement.style.display =
      manualElement.style.display === "none" ? "initial" : "none";
});

let cameraButtonElement = document.querySelector("#camera-button");
cameraButtonElement.addEventListener("click", () =>
  saveCanvas("canvas", "jpg")
);

let manualElement = document.querySelector("#manual");
let manualCloseButtonElmenet = document.querySelector("#manual-close-button");
manualCloseButtonElmenet.addEventListener(
  "click",
  () => (manualElement.style.display = "none")
);

handleDashboard();
