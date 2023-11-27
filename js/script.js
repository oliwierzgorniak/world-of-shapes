import SlingShot from "./classes/SlingShot.js";
import EllipseBomb from "./classes/bombs/EllipseBomb.js";

let slingShot, ellipseBomb;

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background("black");
  noStroke();

  slingShot = new SlingShot();
  ellipseBomb = new EllipseBomb();
};

window.draw = function () {
  ellipseBomb.display();
  slingShot.display();
};
