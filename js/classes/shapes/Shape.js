import { COLORS } from "../../globals/static.js";
import global from "../../globals/dynamic.js";
import getRealPosition from "./Shape/getRealPosition.js";
import getVibrationCoordinate from "./Shape/getVibrationCoordinate.js";

export default class Shape {
  constructor(x, y, isInfected = false) {
    this.position = createVector(x, y);
    this.color = global.dashboard.random
      ? random(COLORS)
      : global.dashboard.color;
    this.size = random(
      height * 0.01 * global.dashboard.size,
      height * 0.06 * global.dashboard.size
    );
    this.vibrationOffset = { x: 0, y: 0 };
    this.vibrationRandom = random(0, 100);
    this.isInfected = isInfected;
  }

  vibrate() {
    this.vibrationOffset.x = getVibrationCoordinate(this.vibrationRandom);
    this.vibrationOffset.y = getVibrationCoordinate(this.vibrationRandom, 1);
  }

  infect() {
    if (frameCount % 100 == 0) return;
    if (Date.now() - global.lastInfection < 50) return;

    for (let shape of global.shapes) {
      if (shape.isInfected) continue;

      const positions = [
        getRealPosition(this.position, this.vibrationOffset),
        getRealPosition(shape.position, shape.vibrationOffset),
      ];

      const shapesDistance = dist(
        positions[0].x,
        positions[0].y,
        positions[1].x,
        positions[1].y
      );
      if (shapesDistance < this.size + shape.size) {
        shape.isInfected = true;
        shape.color = this.color;
        global.lastInfection = Date.now();
        break;
      }
    }
  }

  update() {
    this.vibrate();
    if (this.isInfected) this.infect();
  }

  display() {
    this.update();

    push();
    translate(this.vibrationOffset.x, this.vibrationOffset.y);
    translate(global.shapesOffset.x, global.shapesOffset.y);
    fill(this.color);
    this.draw();
    pop();
  }
}
