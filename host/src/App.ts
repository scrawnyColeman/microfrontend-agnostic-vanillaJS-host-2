import SolidButton from "solid/Button";

SolidButton("solid");

const renderReactApp = async () => {
  const element = document.createElement("div");
  const id = "react-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    await require("react/App").default(document, id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const renderSvelteApp = async () => {
  const element = document.createElement("div");
  const id = "svelte-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    await require("svelte/App").default(document, id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const renderVueApp = async () => {
  const element = document.createElement("div");
  const id = "vue-app";
  element.id = id;
  document.body.appendChild(element);
  try {
    await require("vue/App").default(id);
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

renderHome();
renderReactApp();
renderSvelteApp();
renderVueApp();
