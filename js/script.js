import SlingShot from "./classes/SlingShot.js";
import Bomb from "./classes/Bomb.js";
import { BACKGROUND_COLOR, SHAPES } from "./globals/static.js";
import global from "./globals/dynamic.js";
import handleDashboard from "./handleDashboard.js";
import handleKeyboard from "./handleKeyboard.js";
import handleCamera from "./handleCamera.js";
import handleMenuButton from "./handleMenuButton.js";

let slingShot;

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background(BACKGROUND_COLOR);
  noStroke();

  slingShot = new SlingShot();
  global.bomb = new Bomb(SHAPES[global.shapeIndex]);
};

window.draw = function () {
  background(BACKGROUND_COLOR);

  global.shapes.forEach((shape) => shape.display());
  global.bomb.display();
  if (global.bomb.hasExploaded)
    global.bomb = new Bomb(SHAPES[global.shapeIndex]);
  slingShot.display();
};

handleKeyboard();
handleDashboard();
handleCamera();
handleMenuButton();
