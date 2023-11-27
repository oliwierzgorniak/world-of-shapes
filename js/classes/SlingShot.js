export default class SlingShot {
  constructor() {
    this.height = height * 0.4;
    this.handleWidth = this.height * 0.15;
    this.topPartWidht = this.height * 0.8;
    this.innerCircleWidth = this.topPartWidht * 0.73;
    this.handleOffset = this.topPartWidht / 2 - this.innerCircleWidth / 2;
    this.handleHeight = this.height * 0.6 + this.handleOffset;
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
    arc(
      width / 2,
      height - this.handleHeight - this.topPartWidht / 2 + this.handleOffset,
      this.topPartWidht,
      this.topPartWidht,
      0,
      180
    );

    const bugFixOffset = -this.handleOffset * 0.05;

    fill("black");
    arc(
      width / 2,
      height -
        this.handleHeight -
        this.topPartWidht / 2 +
        this.handleOffset +
        bugFixOffset,
      this.innerCircleWidth,
      this.innerCircleWidth,
      0,
      180
    );
  }

  drawStrap() {
    const strapWidth = this.innerCircleWidth * 0.8;

    fill("white");
    rect(
      width / 2 - strapWidth / 2,
      height - this.height,
      strapWidth,
      this.handleWidth * 0.7
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
