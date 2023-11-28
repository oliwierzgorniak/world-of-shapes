import Circle from "../shapes/Circle.js";
import Square from "../shapes/Sqaure.js";
import Triangle from "../shapes/Triangle.js";

export default function getShapeObject(shape, x, y) {
  switch (shape) {
    case "circle":
      return new Circle(x, y);
    case "square":
      return new Square(x, y);
    case "triangle":
      return new Triangle(x, y);
  }
}
