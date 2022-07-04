const addItems = document.querySelector(".add-localTapas");
const itemsList = document.querySelector(".plates");
const form = document.querySelector("form");
const submitInput = document.querySelector("input[name='item']");
const localTapas = [];
const localStorage = window.localStorage;

const onCheckboxClick = (event) => {
  localTapas[event.target.id]["selected"] =
    !localTapas[event.target.id]["selected"];
  localStorage.setItem("tapas", JSON.stringify(localTapas));
};
const addElement = (value, index = localTapas.length + 1) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.checked = value["selected"];
  checkbox.id = index;
  checkbox.addEventListener("input", onCheckboxClick);
  label.setAttribute("for", checkbox.id);
  span.innerHTML = value["name"];

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  itemsList.appendChild(li);
};

const onTapasLoaded = () => {
  itemsList.innerHTML = "";
  const tapas = JSON.parse(localStorage.getItem("tapas"));
  if (!tapas) return;
  tapas.forEach((value, index) => {
    addElement(value, index);
  });
  localTapas.push(...tapas);
};

const addObject = (event) => {
  event.preventDefault();

  const { value } = event.target.elements.item("item");
  const newElementDetails = { name: value, selected: false };

  addElement(newElementDetails);
  localTapas.push(newElementDetails);
  localStorage.setItem("tapas", JSON.stringify(localTapas));

  submitInput.value = "";
};

onTapasLoaded();
form.addEventListener("submit", addObject);
