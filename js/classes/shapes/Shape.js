import { COLORS } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = random(COLORS);
  }
}
