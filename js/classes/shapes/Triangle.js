import Shape from "./Shape.js";

export default class Triangle extends Shape {
  constructor(x, y, isInfected) {
    super(x, y, isInfected);
  }

  draw() {
    fill(this.color);
    triangle(
      this.position.x - this.size / 2,
      this.position.y + this.size / 2,
      this.position.x + this.size / 2,
      this.position.y + this.size / 2,
      this.position.x,
      this.position.y - this.size / 2
    );
  }
}
