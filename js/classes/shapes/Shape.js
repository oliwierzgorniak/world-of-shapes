import { COLORS, shapesOffset, dashboard } from "../../globals.js";

export default class Shape {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.color = dashboard.random ? random(COLORS) : dashboard.color;
    this.size = random(
      height * 0.01 * dashboard.size,
      height * 0.06 * dashboard.size
    );
    this.vibrationOffset = { x: 0, y: 0 };
    this.vibrateRandom = random(0, 100);
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

  display() {
    this.vibrate();
    push();
    translate(this.vibrationOffset.x, this.vibrationOffset.y);
    translate(shapesOffset.x, shapesOffset.y);
    fill(this.color);
    this.draw();
    pop();
  }
}
