import SlingShot from "./classes/SlingShot.js";

window.setup = function () {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  background("black");
  noStroke();

  let slingShot = new SlingShot();
  slingShot.display();
};
