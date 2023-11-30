import { PRIMARY_COLOR } from "../globals/static.js";
import global from "../globals/dynamic.js";

export default class SlingShot {
  constructor() {
    this.height = height * 0.4;
    this.width = this.height * 0.8;
    this.handleWidth = this.height * 0.12;
    this.handleHeight = this.height * 0.5;
    this.strapHeight = this.handleWidth * 0.7;

    global.strapCenter.y = height - this.height + this.strapHeight / 2;
    global.strapCenter.x = width / 2;
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
    // translates here fix gaps between shapes
    push();
    translate(0, height * 0.001);
    rect(
      width / 2 - this.width / 2,
      height - this.handleHeight - this.handleWidth,
      this.width,
      this.handleWidth
    );
    pop();

    const rectHeight = this.height - this.handleHeight - this.handleWidth;

    push();
    translate(0, height * 0.002);
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
    pop();
  }

  drawStrap() {
    const strapWidth = (this.width - this.handleWidth * 2) * 0.8;

    const position =
      typeof global.strapPosition.x !== "undefined"
        ? global.strapPosition
        : global.strapCenter;
    push();
    translate(-strapWidth / 2, -this.strapHeight / 2);
    rect(position.x, position.y, strapWidth, this.strapHeight);
    pop();
  }

  draw() {
    fill(PRIMARY_COLOR);
    this.drawHandle();
    this.drawTopPart();
    this.drawStrap();
  }

  display() {
    this.draw();
  }
}
