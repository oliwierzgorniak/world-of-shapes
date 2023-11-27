import Bomb from "./Bomb.js";

export default class EllipseBomb extends Bomb {
  constructor() {
    super();
  }

  draw() {
    push();
    translate(this.height / 2, this.height / 2);
    ellipse(this.position.x, this.position.y, this.height, this.height);
    pop();
  }

  display() {
    this.draw();
  }
}
