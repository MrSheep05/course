let isShiftPressed = false;
const inputs = document.querySelectorAll("input");
const isShift = ({ keyCode }) => keyCode === 16;

const onKeyDown = (event) => {
  if (isShift(event)) {
    isShiftPressed = true;
  }
};

const onKeyUp = (event) => {
  if (isShift(event)) {
    isShiftPressed = false;
  }
};

const checkInputs = (from, to) => {
  [...inputs].map((input, index) => {
    if (index > from && index < to) {
      input.checked = true;
    }
  });
};

const getTheCheckboxToCheckFrom = (lastCheckboxIndex) => {
  return [...inputs].reduce((previousValue, currentValue, index) => {
    if (index < lastCheckboxIndex && currentValue.checked) {
      return index;
    }

    return previousValue;
  }, null);
};

const onCheckedWhileShiftPressed = (event) => {
  const clickedCheckboxIndex = [...inputs].findIndex(
    (input) => input === event.target
  );

  const checkboxIndexToCheckFrom =
    getTheCheckboxToCheckFrom(clickedCheckboxIndex);

  checkInputs(checkboxIndexToCheckFrom, clickedCheckboxIndex);
};

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

inputs.forEach((element) => {
  element.addEventListener("input", (event) => {
    if (event.target.checked && isShiftPressed)
      onCheckedWhileShiftPressed(event);
  });
});
