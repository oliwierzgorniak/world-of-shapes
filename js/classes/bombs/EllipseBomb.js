import Bomb from "./Bomb.js";
import Circle from "../shapes/Circle.js";
import { PRIMARY_COLOR, shapes } from "../../globals.js";

export default class EllipseBomb extends Bomb {
  constructor() {
    super();
    this.target = createVector(width / 2, height / 2 - 200);

    setTimeout(() => this.explode(), 100);
  }

  draw() {
    push();
    translate(this.height / 2, this.height / 2);
    console.log(this.color);
    ellipse(this.position.x, this.position.y, this.height, this.height);
    pop();
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
        position.add(width / 2, height / 2);
        shapes.push(new Circle(position.x, position.y));
      }
    }
  }

  display() {
    fill(PRIMARY_COLOR);
    this.draw();
  }
}
