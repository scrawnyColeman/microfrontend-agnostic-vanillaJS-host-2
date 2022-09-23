import VueButton from "vue/Button";
import ReactButton from "react/Button";
import SvelteButton from "svelte/Button";

VueButton("vue");
ReactButton("react");
SvelteButton(window, "svelte");

let count = 0;

document.getElementById("vanilla").innerHTML = `<button id="count"></button>`;

function writeButtonText() {
  document.getElementById("count").innerHTML = `[Host] Click count: ${count}`;
}

document.getElementById("count").addEventListener("click", function () {
  count++;
  writeButtonText();
});

writeButtonText();
