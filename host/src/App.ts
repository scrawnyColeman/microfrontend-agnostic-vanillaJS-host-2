import VueButton from "vue/Button";
import ReactApp from "react/App";
import SvelteApp from "svelte/App";
import SolidButton from "solid/Button";

VueButton("vue");
SolidButton("solid");

const renderReactApp = () => {
  const element = document.createElement("div");
  const id = "react-app";
  element.innerHTML = `<div id="${id}"></div>`;
  document.body.appendChild(element);
  try {
    ReactApp(document, id);
  } catch (e) {
    element.remove();
  }
};

const renderSvelteApp = () => {
  const element = document.createElement("div");
  const id = "svelte-app";
  element.innerHTML = `<div id="${id}"></div>`;
  document.body.appendChild(element);
  try {
    SvelteApp(document, id);
  } catch (e) {
    document.getElementById(id).remove();
  }
};

const renderVueApp = () => {
  const element = document.createElement("div");
  const id = "vue-app";
  element.innerHTML = `<div id="${id}"></div>`;
  document.body.appendChild(element);
  try {
    VueApp(document, id);
  } catch (e) {
    document.getElementById(id).remove();
  }
};

renderReactApp();
renderSvelteApp();

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
