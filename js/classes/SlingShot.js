import { PRIMARY_COLOR } from "../globals.js";
import { strapCenter, strapPosition } from "../globals.js";

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

    const defaultPosition = {
      x: width / 2,
      y: height - this.height + this.strapHeight / 2,
    };
    const position =
      typeof strapPosition.x !== "undefined" ? strapPosition : defaultPosition;
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

  update() {}

  display() {
    this.update();
    this.draw();
  }
}
