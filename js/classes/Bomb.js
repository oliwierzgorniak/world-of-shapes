import {
  strapCenter,
  shapes,
  PRIMARY_COLOR,
  strapPosition,
} from "../globals.js";
import getShapeObject from "./bomb/getShapeObject.js";

export default class Bomb {
  constructor(shape) {
    this.shape = shape;
    this.height = height * 0.1;
    this.width = this.height;
    this.position = createVector(width / 2, strapCenter.y);
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

      this.height -= 5;
      this.width -= 5;

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
        let position = createVector(
          height * 0.021 * (drawingLevels - y),
          height * 0.021 * (drawingLevels - y)
        );
        const rotationAngle =
          map(x, 0, numberOfShapes * y, 0, 360) + random(-30, 30);
        position.rotate(rotationAngle);
        position.add(this.target.x, this.target.y);
        shapes.push(getShapeObject(this.shape, position.x, position.y));
      }
    }
  }

  handleAiming() {
    if (this.isAiming && !mouseIsPressed) {
      document.body.style.cursor = "default";
      this.isAiming = false;
      this.throw();
      strapPosition.x = undefined;
      strapPosition.y = undefined;
    }

    const mouseOverShape =
      mouseX <= this.position.x + this.width / 2 &&
      mouseX > this.position.x - this.width / 2 &&
      mouseY <= this.position.y + this.height / 2 &&
      mouseY > this.position.x - this.height / 2;

    if (mouseOverShape) {
      document.body.style.cursor = "grab";
    } else {
      document.body.style.cursor = "default";
    }

    if (!mouseIsPressed) return;
    if (mouseOverShape) this.isAiming = true;

    if (this.isAiming) {
      document.body.style.cursor = "grabbing";
      let mousePosition = createVector(mouseX, mouseY);
      this.position = mousePosition;
      strapPosition.x = mousePosition.x;
      strapPosition.y = mousePosition.y;

      const difference = createVector(
        mousePosition.x - width / 2,
        mousePosition.y - strapCenter.y
      );

      this.target = createVector(
        width / 2 - difference.x * 2.5,
        strapCenter.y - difference.y * 2.5
      );
      ellipse(this.target.x, this.target.y, 10, 10);
    }
  }

  draw() {
    switch (this.shape) {
      case "circle":
        ellipse(this.position.x, this.position.y, this.height, this.height);
        break;
    }
  }

  display() {
    this.handleAiming();
    fill(PRIMARY_COLOR);
    this.draw();
  }
}
