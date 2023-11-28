import Shape from "./Shape.js";

export default class Circle extends Shape {
  constructor(x, y) {
    super(x, y);
    this.size = random(height * 0.04, height * 0.04);
  }

  draw() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  display() {
    this.draw();
  }
}
