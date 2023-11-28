import { COLORS, shapesOffset } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = random(COLORS);
    this.size = random(height * 0.01, height * 0.06);
  }

  display() {
    push();
    translate(shapesOffset.x, shapesOffset.y);
    this.draw();
    pop();
  }
}
