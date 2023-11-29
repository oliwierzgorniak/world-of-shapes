import { COLORS, shapesOffset, dashboard } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = dashboard.random ? random(COLORS) : dashboard.color;
    this.size = random(
      height * 0.01 * dashboard.size,
      height * 0.06 * dashboard.size
    );
  }

  display() {
    push();
    translate(shapesOffset.x, shapesOffset.y);
    fill(this.color);
    this.draw();
    pop();
  }
}
