export default function handleMenuButton() {
  let manualElement = document.querySelector("#manual");
  let manualCloseButtonElmenet = document.querySelector("#manual-close-button");
  manualCloseButtonElmenet.addEventListener(
    "click",
    () => (manualElement.style.display = "none")
  );
}
