import Circle from "../shapes/Circle.js";
import Square from "../shapes/Sqaure.js";
import Triangle from "../shapes/Triangle.js";

export default function getShapeObject(shape, x, y, isInfected) {
  switch (shape) {
    case "circle":
      return new Circle(x, y, isInfected);
    case "square":
      return new Square(x, y, isInfected);
    case "triangle":
      return new Triangle(x, y, isInfected);
  }
}
