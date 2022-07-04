// const KeyList = [];

//document.querySelectorAll("div.key").forEach((div) => {
//KeyList.push(div.dataset.key);
//console.log(div.dataset.key);
//});

const keyList = [...document.querySelectorAll("div.key")].map(
  (div) => div.dataset.key
);

const pressButton = (event) => {
  const keyVal = event.keyCode;
  if (keyList.includes(keyVal.toString())) {
    const div = document.querySelector(`div.key[data-key='${keyVal}']`);
    const audio = document.querySelector(`audio[data-key='${keyVal}']`);

    div.classList.add("playing");
    audio.play();

    setTimeout(() => {
      div.classList.remove("playing");
    }, 70);
  }
};

window.addEventListener("keydown", pressButton);
