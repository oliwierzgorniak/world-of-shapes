import { shapesOffset } from "../../globals.js";

export default function getRealPosition(shape) {
  return {
    x: shape.position.x + shapesOffset.x + shape.vibrationOffset.x,
    y: shape.position.y + shapesOffset.y + shape.vibrationOffset.y,
  };
}
