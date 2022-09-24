const render = (mfeName: "react" | "svelte" | "vue" | "solid") => {
  const element = document.createElement("div");
  const id = `${mfeName}-app`;
  element.id = id;
  element.style.marginTop = "1rem";
  document.getElementById("main-content").appendChild(element);
  try {
    require(`${mfeName}/App`).default(id);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

const buildButton = (document: Document) => {
  const buttonElement = document.createElement("button");
  buttonElement.style.padding = "0.5rem";
  buttonElement.style.borderRadius = "0.375rem";
  buttonElement.style.backgroundColor = "#02521e";
  buttonElement.style.color = "#87ffaf";
  buttonElement.innerHTML = `[Host] Click count: 0`;

  buttonElement.addEventListener("click", function () {
    count++;
    buttonElement.innerHTML = `[Host] Click count: ${count}`;
  });
  buttonElement.addEventListener("mouseover", function () {
    buttonElement.style.opacity = `75%`;
  });
  buttonElement.addEventListener("mouseout", function () {
    buttonElement.style.opacity = `100%`;
  });

  return buttonElement;
};

const buildWrapper = (document: Document) => {
  const wrapper = document.createElement("div");
  wrapper.id = "home";
  wrapper.style.marginTop = "1rem";

  const element = document.createElement("div");
  element.style.color = "ivory";
  element.style.backgroundColor = "darkolivegreen";
  element.style.width = "100%";
  element.style.height = "250px";
  element.style.padding = "20px";
  element.style.boxSizing = "border-box";
  element.style.borderRadius = "20px";
  element.innerHTML = `
    <h4 style="margin: 0 0 1rem 0;">A host component that is built with VanillaJS (not an MFE)</h4>
  `;

  wrapper.appendChild(element);

  return element;
};

let count = 0;

const renderHome = () => {
  // build button
  const buttonElement = document.createElement("button");
  buttonElement.style.padding = "0.5rem";
  buttonElement.style.borderRadius = "0.375rem";
  buttonElement.style.backgroundColor = "#02521e";
  buttonElement.style.color = "#87ffaf";
  buttonElement.innerHTML = `[Host] Click count: 0`;
  buttonElement.addEventListener("click", function () {
    count++;
    buttonElement.innerHTML = `[Host] Click count: ${count}`;
  });
  buttonElement.addEventListener("mouseover", function () {
    buttonElement.style.opacity = `75%`;
  });
  buttonElement.addEventListener("mouseout", function () {
    buttonElement.style.opacity = `100%`;
  });

  // build wrapper and inn
  const wrapper = document.createElement("div");
  wrapper.id = "home";
  wrapper.style.marginTop = "1rem";

  const element = document.createElement("div");
  element.style.color = "ivory";
  element.style.backgroundColor = "darkolivegreen";
  element.style.width = "100%";
  element.style.height = "250px";
  element.style.padding = "20px";
  element.style.boxSizing = "border-box";
  element.style.borderRadius = "20px";
  element.innerHTML = `
    <h4 style="margin: 0 0 1rem 0;">A host component that is built with VanillaJS (not an MFE)</h4>
  `;

  wrapper.appendChild(buttonElement);
  document.getElementById("main-content").appendChild(wrapper);
};

renderHome();
render("react");
render("svelte");
render("vue");
render("solid");
