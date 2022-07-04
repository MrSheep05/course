export const save = (tapas = []) => {
  localStorage.setItem("tapas", JSON.stringify(tapas));
};

export const retrieve = () => {
  return JSON.parse(localStorage.getItem("tapas"));
};
