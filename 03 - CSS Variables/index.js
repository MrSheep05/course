const onChange = (event) => {
  const name = event.target.getAttribute("name");
  const pixel = event.target.value;
  const type = event.target.getAttribute("type");
  const suffix = type === "color" ? "" : "px";

  document.documentElement.style.setProperty(`--${name}`, `${pixel}${suffix}`);
};

const inputs = document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", onChange);
});
