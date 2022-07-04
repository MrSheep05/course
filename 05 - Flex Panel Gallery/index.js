const panels = document.querySelectorAll("div.panel");

const open = (panel) => {
  console.log("hi");
  panel.classList.toggle("open");
};

const showText = (panel) => {
  panel.classList.toggle("fadein");
};

panels.forEach((current) => {
  current.addEventListener("click", () => {
    open(current);
  });

  current.addEventListener("transitionend", (event) => {
    console.log(event.propertyName);
    if (event.propertyName === "flex-grow") {
      showText(current);
    }
  });
});
