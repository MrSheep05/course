const canvas = document.querySelector("#draw");
canvas.height = innerHeight;
canvas.width = innerWidth;
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.globalCompositeOperation = "color-dodge";

let mouse = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let width = 20;
let increment = true;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 255 ** 3).toString(16)}`;
};

const draw = (event) => {
  console.log(event);
  if (mouse === false) return;
  const color = `#${Math.floor(Math.random() * 255 ** 3).toString(16)}`;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue = hue === 359 ? 0 : hue + 1;

  if (width >= 100) {
    increment = false;
  } else if (width <= 20) {
    increment = true;
  }

  width = increment ? width + 0.05 : width - 0.05;
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  mouse = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => {
  mouse = false;
});
canvas.addEventListener("mouseout", () => {
  mouse = false;
});
