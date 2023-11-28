import { COLORS } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = random(COLORS);
    this.size = random(height * 0.01, height * 0.06);
  }
}
