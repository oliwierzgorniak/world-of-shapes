import Shape from "./Shape.js";

export default class Circle extends Shape {
  constructor(x, y, isInfected) {
    super(x, y, isInfected);
  }

  draw() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
