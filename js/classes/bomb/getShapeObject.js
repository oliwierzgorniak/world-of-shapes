import Circle from "../shapes/Circle.js";

export default function getShapeObject(shape, x, y) {
  switch (shape) {
    case "circle":
      return new Circle(x, y);
      break;
  }
}
