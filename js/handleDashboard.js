import { dashboard } from "./globals.js";

export default function handleDashboard() {
  let colorInputElement = document.querySelector("#color-input");
  dashboard.color = colorInputElement.value;
  colorInputElement.addEventListener("input", (e) => {
    dashboard.color = e.target.value;
  });
  let randomInputElement = document.querySelector("#random-input");
  dashboard.random = randomInputElement.checked;
  randomInputElement.addEventListener("input", (e) => {
    dashboard.random = e.target.checked;
  });
}
