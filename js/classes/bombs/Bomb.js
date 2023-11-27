import { strapCenter } from "../../globals.js";

export default class Bomb {
  constructor() {
    this.height = height * 0.1;
    this.width = this.height;
    this.position = createVector(
      width / 2 - this.width / 2,
      strapCenter.y - this.height / 2
    );
  }
}
