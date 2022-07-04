const updateClock = () => {
  const date = new Date();
  const secHand = document.querySelector("div.second-hand");
  const minHand = document.querySelector("div.min-hand");
  const hourHand = document.querySelector("div.hour-hand");

  secHand.style.transform = `rotate(${date.getUTCSeconds() * 6 + 90}deg)`;
  minHand.style.transform = `rotate(${date.getUTCMinutes() * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${date.getUTCHours() * 30 + 90}deg)`;
};

const initialClockSetup = () => {
  updateClock();
  setTimeout(() => {
    const hands = document.querySelectorAll("div.hand");
    hands.forEach((hand) => {
      hand.classList.add("animation");
    });
  }, 0);
};

initialClockSetup();

setInterval(updateClock, 1000);
