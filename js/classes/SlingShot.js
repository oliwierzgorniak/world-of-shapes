export default class SlingShot {
  constructor() {
    this.height = height * 0.4;
    this.width = this.height * 0.2;
    this.handleWidth = this.height * 0.15;
    this.handleHeight = this.height * 0.8;
    this.topPartWidht = this.height * 0.9;
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
      height - this.handleHeight,
      this.topPartWidht,
      this.topPartWidht,
      0,
      180
    );

    fill("black");
    arc(
      width / 2,
      height - this.handleHeight - 3,
      this.topPartWidht * 0.73,
      this.topPartWidht * 0.73,
      0,
      180
    );
  }

  draw() {
    this.drawHandle();
    this.drawTopPart();
  }

  update() {}

  display() {
    this.update();
    this.draw();
  }
}
