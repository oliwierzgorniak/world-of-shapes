import SlingShot from "./classes/SlingShot.js";
import EllipseBomb from "./classes/bombs/EllipseBomb.js";
import { BACKGROUND_COLOR, shapes } from "./globals.js";

let slingShot, ellipseBomb;

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background(BACKGROUND_COLOR);
  noStroke();

  slingShot = new SlingShot();
  ellipseBomb = new EllipseBomb();
};

window.draw = function () {
  background(BACKGROUND_COLOR);

  shapes.forEach((shape) => shape.display());
  ellipseBomb.display();
  slingShot.display();
};
