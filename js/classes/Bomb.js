import { PRIMARY_COLOR } from "../globals/static.js";
import global from "../globals/dynamic.js";
import getShapeObject from "./bomb/getShapeObject.js";
import styleCursor from "./bomb/styleCursor.js";
import getIsMouseOverShape from "./bomb/getIsMouseOverShape.js";
import drawBomb from "./bomb/drawBomb.js";

export default class Bomb {
  constructor(shape) {
    this.shape = shape;
    this.size = height * 0.1;
    this.position = createVector(width / 2, global.strapCenter.y);
    this.target = createVector(width / 2, height / 2);
    this.hasExploaded = false;
    this.isAiming = false;
  }

  throw() {
    // potential TODO
    const xOffset = this.target.x - this.position.x;
    const yOffset = this.target.y - this.position.y;

    let distanceMoved = { x: 0, y: 0 };

    const intervalId = setInterval(() => {
      const step = { x: xOffset * 0.1, y: yOffset * 0.1 };
      this.position.x += step.x;
      distanceMoved.x += step.x;
      this.position.y += step.y;
      distanceMoved.y += step.y;

      this.size -= 5;

      if (
        Math.abs(distanceMoved.x) >= Math.abs(xOffset) &&
        Math.abs(distanceMoved.y) >= Math.abs(yOffset)
      ) {
        this.explode();
        clearInterval(intervalId);
        this.hasExploaded = true;
      }
    }, 30);
  }

  explode() {
    const drawingLevels = 4;
    for (let y = drawingLevels; y > 0; y--) {
      const numberOfShapes = 5;
      for (let x = 0; x < numberOfShapes * y; x++) {
        const offset =
          height * 0.021 * global.dashboard.spread * (drawingLevels - y);
        let position = createVector(offset, offset);
        const rotationAngle =
          map(x, 0, numberOfShapes * y, 0, 360) + random(-30, 30);
        position.rotate(rotationAngle);
        position.add(
          this.target.x - global.shapesOffset.x,
          this.target.y - global.shapesOffset.y
        );

        const isInfected = global.dashboard.virusMode
          ? y === 4 && x === 0
          : false;
        global.shapes.push(
          getShapeObject(this.shape, position.x, position.y, isInfected)
        );
      }
    }
  }

  handleAiming() {
    // handle release
    if (this.isAiming && !mouseIsPressed) {
      document.body.style.cursor = "default";
      this.isAiming = false;
      this.throw();
      global.strapPosition.x = undefined;
      global.strapPosition.y = undefined;
    }

    const isMouseOverShape = getIsMouseOverShape(this.position, this.size);
    styleCursor(isMouseOverShape);

    if (!mouseIsPressed) return;
    if (isMouseOverShape) this.isAiming = true;

    // draw sight
    if (this.isAiming) {
      document.body.style.cursor = "grabbing";
      let mousePosition = createVector(mouseX, mouseY);
      this.position = mousePosition;
      global.strapPosition.x = mousePosition.x;
      global.strapPosition.y = mousePosition.y;

      const difference = createVector(
        mousePosition.x - width / 2,
        mousePosition.y - global.strapCenter.y
      );

      this.target = createVector(
        width / 2 - difference.x * 2.5,
        global.strapCenter.y - difference.y * 2.5
      );
      ellipse(this.target.x, this.target.y, 10, 10);
    }
  }

  draw() {
    drawBomb(this.shape, this.position, this.size);
  }

  display() {
    this.handleAiming();
    fill(PRIMARY_COLOR);
    this.draw();
  }
}
