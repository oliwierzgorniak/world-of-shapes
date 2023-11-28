import SlingShot from "./classes/SlingShot.js";
import Bomb from "./classes/Bomb.js";
import { BACKGROUND_COLOR, SHAPES, shapes } from "./globals.js";

let slingShot, bomb;

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background(BACKGROUND_COLOR);
  noStroke();

  slingShot = new SlingShot();
  bomb = new Bomb(random(SHAPES));
};

window.draw = function () {
  background(BACKGROUND_COLOR);

  shapes.forEach((shape) => shape.display());
  bomb.display();
  if (bomb.hasExploaded) bomb = new Bomb(random(SHAPES));
  slingShot.display();
};
