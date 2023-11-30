export default function handleCamera() {
  let cameraButtonElement = document.querySelector("#camera-button");
  cameraButtonElement.addEventListener("click", () =>
    saveCanvas("canvas", "jpg")
  );
}
