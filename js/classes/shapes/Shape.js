import {
  COLORS,
  shapesOffset,
  dashboard,
  shapes,
  lastInfection,
} from "../../globals.js";
import getRealPosition from "./getRealPosition.js";

export default class Shape {
  constructor(x, y, isInfected = false) {
    this.position = createVector(x, y);
    this.color = dashboard.random ? random(COLORS) : dashboard.color;
    this.size = random(
      height * 0.01 * dashboard.size,
      height * 0.06 * dashboard.size
    );
    this.vibrationOffset = { x: 0, y: 0 };
    this.vibrateRandom = random(0, 100);
    this.isInfected = isInfected;
  }

  vibrate() {
    const rangeEnd = width * 0.1;
    const noiseParameter = millis() * 0.0001 + this.vibrateRandom;
    this.vibrationOffset.x = map(
      noise(noiseParameter),
      0,
      1,
      -rangeEnd,
      rangeEnd
    );
    this.vibrationOffset.y = map(
      noise(noiseParameter + 1),
      0,
      1,
      -rangeEnd,
      rangeEnd
    );
  }

  infect() {
    if (frameCount % 100 == 0) return;
    if (Date.now() - lastInfection.time < 50) return;

    for (let shape of shapes) {
      if (shape.isInfected) continue;

      const pos0 = getRealPosition(this);
      const pos1 = getRealPosition(shape);

      const shapesDistance = dist(pos0.x, pos0.y, pos1.x, pos1.y);
      if (shapesDistance < this.size + shape.size) {
        shape.isInfected = true;
        shape.color = this.color;
        lastInfection.time = Date.now();
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
    translate(shapesOffset.x, shapesOffset.y);
    fill(this.color);
    this.draw();
    pop();
  }
}
