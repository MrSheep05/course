export const save = (tapas = []) => {
  localStorage.setItem("tapas", JSON.stringify(tapas));
};

export const retrieve = () => {
  const tapas = JSON.parse(localStorage.getItem("tapas"));
  return tapas === null
    ? [{ value: "Enjoy your tapas!", checked: true }]
    : tapas;
};
