import global from "../../../globals/dynamic.js";

export default function getRealPosition(position, vibrationOffset) {
  return {
    x: position.x + global.shapesOffset.x + vibrationOffset.x,
    y: position.y + global.shapesOffset.y + vibrationOffset.y,
  };
}
