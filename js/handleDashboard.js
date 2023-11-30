import global from "./globals/dynamic.js";

export default function handleDashboard() {
  let randomInputElement = document.querySelector("#random-input");
  global.dashboard.random = randomInputElement.checked;
  randomInputElement.addEventListener("input", (e) => {
    global.dashboard.random = e.target.checked;
  });

  let virusInputElement = document.querySelector("#virus-input");
  virusInputElement.addEventListener("input", (e) => {
    global.dashboard.virusMode = e.target.checked;

    if (e.target.checked) {
      global.dashboard.random = true;
      randomInputElement.checked = true;
    }
  });

  let sizeInputElement = document.querySelector("#size-input");
  sizeInputElement.addEventListener("input", (e) => {
    global.dashboard.size = e.target.value;
  });

  let spreadInputElement = document.querySelector("#spread-input");
  spreadInputElement.addEventListener("input", (e) => {
    global.dashboard.spread = e.target.value;
  });

  let colorInputElement = document.querySelector("#color-input");
  global.dashboard.color = colorInputElement.value;
  colorInputElement.addEventListener("input", (e) => {
    global.dashboard.color = e.target.value;
    global.dashboard.random = false;
    randomInputElement.checked = false;
  });
}
