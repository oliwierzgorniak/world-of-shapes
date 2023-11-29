import { COLORS, shapesOffset, dashboard } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = dashboard.random ? random(COLORS) : dashboard.color;
    console.log(this.color);
    this.size = random(height * 0.01, height * 0.06);
  }

  display() {
    push();
    translate(shapesOffset.x, shapesOffset.y);
    fill(this.color);
    this.draw();
    pop();
  }
}
