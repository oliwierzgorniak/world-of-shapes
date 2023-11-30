export default function getVibrationCoordinate(vibrationRandom, offset = 0) {
  const rangeEnd = width * 0.1;
  const noiseParameter = millis() * 0.0001 + vibrationRandom;
  return map(noise(noiseParameter + offset), 0, 1, -rangeEnd, rangeEnd);
}
