import VueApp from "vue/App";
import ReactApp from "react/App";
import SvelteApp from "svelte/App";
import SolidButton from "solid/Button";

SolidButton("solid");

const renderReactApp = () => {
  const element = document.createElement("div");
  const id = "react-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    ReactApp(document, id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const renderSvelteApp = () => {
  const element = document.createElement("div");
  const id = "svelte-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    SvelteApp(document, id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const renderVueApp = () => {
  const element = document.createElement("div");
  const id = "vue-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    VueApp(id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const renderHome = () => {
  let count = 0;

  function writeButtonText() {
    document.getElementById("count").innerHTML = `[Host] Click count: ${count}`;
  }
  document.getElementById("count").addEventListener("click", function () {
    count++;
    writeButtonText();
  });

  writeButtonText();
};

renderReactApp();
renderSvelteApp();
renderVueApp();
renderHome();
