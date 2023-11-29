import { dashboard } from "./globals.js";

export default function handleDashboard() {
  let randomInputElement = document.querySelector("#random-input");
  dashboard.random = randomInputElement.checked;
  randomInputElement.addEventListener("input", (e) => {
    dashboard.random = e.target.checked;
  });

  let virusInputElement = document.querySelector("#virus-input");
  virusInputElement.addEventListener("input", (e) => {
    dashboard.virusMode = e.target.checked;

    if (e.target.checked) {
      dashboard.random = true;
      randomInputElement.checked = true;
    }
  });

  let sizeInputElement = document.querySelector("#size-input");
  sizeInputElement.addEventListener("input", (e) => {
    dashboard.size = e.target.value;
  });

  let spreadInputElement = document.querySelector("#spread-input");
  spreadInputElement.addEventListener("input", (e) => {
    dashboard.spread = e.target.value;
  });

  let colorInputElement = document.querySelector("#color-input");
  dashboard.color = colorInputElement.value;
  colorInputElement.addEventListener("input", (e) => {
    dashboard.color = e.target.value;
    dashboard.random = false;
    randomInputElement.checked = false;
  });
}
