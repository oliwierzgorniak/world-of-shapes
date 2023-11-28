import Shape from "./Shape.js";

export default class Square extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  draw() {
    fill(this.color);
    rect(
      this.position.x - this.size / 2,
      this.position.y - this.size / 2,
      this.size,
      this.size
    );
  }
}
