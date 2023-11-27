import { strapCenter } from "../globals.js";

export default class SlingShot {
  constructor() {
    this.height = height * 0.4;
    this.width = this.height * 0.8;
    this.handleWidth = this.height * 0.12;
    this.handleHeight = this.height * 0.5;
    this.strapHeight = this.handleWidth * 0.7;

    strapCenter.y = height - this.height + this.strapHeight / 2;
    strapCenter.x = width / 2;
  }

  drawHandle() {
    rect(
      width / 2 - this.handleWidth / 2,
      height - this.handleHeight,
      this.handleWidth,
      this.handleHeight
    );
  }

  drawTopPart() {
    rect(
      width / 2 - this.width / 2,
      height - this.handleHeight - this.handleWidth,
      this.width,
      this.handleWidth
    );

    const rectHeight = this.height - this.handleHeight - this.handleWidth;

    // left
    rect(
      width / 2 - this.width / 2,
      height - this.height,
      this.handleWidth,
      rectHeight
    );

    // right
    rect(
      width / 2 + this.width / 2 - this.handleWidth,
      height - this.height,
      this.handleWidth,
      rectHeight
    );
  }

  drawStrap() {
    const strapWidth = (this.width - this.handleWidth * 2) * 0.8;

    rect(
      width / 2 - strapWidth / 2,
      height - this.height,
      strapWidth,
      this.strapHeight
    );
  }

  draw() {
    this.drawHandle();
    this.drawTopPart();
    this.drawStrap();
  }

  update() {}

  display() {
    this.update();
    this.draw();
  }
}
