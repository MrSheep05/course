const video = document.querySelector("video");
const playButton = document.getElementById("playButton");
const playRatio = document.getElementById("playbackRate");
const videoVolume = document.getElementById("volume");
const skipForward = document.getElementById("skipForward");
const skipBackwards = document.getElementById("skipBackwards");
const slider = document.getElementById("progress");

let isLeftDown = false;
const localStorage = window.localStorage;
const toogleVideo = (event) => {
  if (video.paused) {
    video.play();
    event.target.innerText = "⏸️";
  } else {
    video.pause();
    event.target.innerText = "▶️";
  }
};

const setPlayBack = (event) => {
  video.playbackRate = event.target.value;
  localStorage.setItem("playBack", video.playbackRate);
};

const setVolume = (event) => {
  video.volume = event.target.value;
  localStorage.setItem("volume", event.target.value);
};

const setVideoTime = (event) => {
  const currentTime = video.currentTime;
  const skipTime = parseInt(event.target.dataset.skip, 10);
  const newTime = currentTime + skipTime;

  if (newTime > video.duration) {
    video.currentTime = video.duration;
    return;
  }

  video.currentTime = newTime < 0 ? 0 : newTime;
};

const updateProgressBar = () => {
  localStorage.setItem("currentTime", video.currentTime);
  const percentage = (video.currentTime / video.duration) * 100;

  document.documentElement.style.setProperty("--percent", percentage + "%");
};

const change = (event) => {
  const selectedTime = event.offsetX;
  const maxWidth = slider.offsetWidth;
  const duration = video.duration;
  const newTime = (selectedTime / maxWidth) * duration;

  video.currentTime = newTime;
};

playButton.addEventListener("click", toogleVideo);
video.addEventListener("click", toogleVideo);
playRatio.addEventListener("input", setPlayBack);
videoVolume.addEventListener("input", setVolume);

[skipForward, skipBackwards].forEach((element) => {
  element.addEventListener("click", setVideoTime);
});

video.addEventListener("timeupdate", updateProgressBar);

// Video Time Changing by Hand
slider.addEventListener("click", change);
slider.addEventListener("mousedown", () => {
  isLeftDown = true;
});
slider.addEventListener("mouseup", () => {
  isLeftDown = false;
});
slider.addEventListener("mousemove", (event) => {
  if (isLeftDown) {
    change(event);
  }
});

const setup = () => {
  if (!localStorage) return;

  const playBack = localStorage.getItem("playBack");
  const volume = localStorage.getItem("volume");
  const currentTime = localStorage.getItem("currentTime");

  if (volume) {
    videoVolume.value = volume;
    video.volume = volume;
  }

  if (playBack) {
    playRatio.value = playBack;
    video.playbackRate = playBack;
  }

  if (currentTime) {
    video.currentTime = currentTime;
  }
};

window.addEventListener("load", setup);

// const myObj ={test1: 'value1', test2: 'value2'};
// const stringifiedMyObj = JSON.stringify(myObj);
// '{"test1":"value1","test2":"value2"}'

// localStorage.setItem('myObj', myObj);

// const stringified = localStorage.getItem('myObj'); // '{"test1":"value1","test2":"value2"}'
// const parsed = JSON.parse(stringified) // {test1: 'value1', test2: 'value2'}
