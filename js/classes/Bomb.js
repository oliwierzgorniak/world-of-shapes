import { strapCenter, shapes, PRIMARY_COLOR } from "../globals.js";
import getShapeObject from "./bomb/getShapeObject.js";

export default class Bomb {
  constructor(shape) {
    this.shape = shape;
    this.height = height * 0.1;
    this.width = this.height;
    this.position = createVector(
      width / 2 - this.width / 2,
      strapCenter.y - this.height / 2
    );
    this.target = createVector(width / 2, height / 2);
    this.hasExploaded = false;

    this.throw();
  }

  throw() {
    // potential TODO
    const xOffset = this.target.x - this.position.x - this.width / 2;
    const yOffset = this.target.y - this.position.y - this.height / 2;

    let distanceMoved = { x: 0, y: 0 };

    const intervalId = setInterval(() => {
      const step = { x: xOffset * 0.1, y: yOffset * 0.1 };
      this.position.x += step.x;
      distanceMoved.x += step.x;
      this.position.y += step.y;
      distanceMoved.y += step.y;

      if (
        Math.abs(distanceMoved.x) >= Math.abs(xOffset) &&
        Math.abs(distanceMoved.y) >= Math.abs(yOffset)
      ) {
        this.explode();
        clearInterval(intervalId);
        this.hasExploaded = true;
      }
    }, 100);
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

    this.remove;
  }

  draw() {
    switch (this.shape) {
      case "circle":
        push();
        translate(this.height / 2, this.height / 2);
        ellipse(this.position.x, this.position.y, this.height, this.height);
        pop();
        break;
    }
  }

  display() {
    fill(PRIMARY_COLOR);
    this.draw();
  }
}
