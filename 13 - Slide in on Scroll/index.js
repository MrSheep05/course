// const debounce = (func, wait = 20, immediate = true) => {
//   let timeout;

//   return (...args) => {
//     const later = () => {
//       timeout = null;
//       if (!immediate) func(...args);
//     };

//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func(...args);
//   };
// };

function sliding(e) {
  isMoving = !isMoving;
}

const images = document.querySelectorAll("img.slide-in");

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.85) {
//       entry.target.classList.add("active");
//     } else if (entry.intersectionRatio <= 0.15) {
//       entry.target.classList.remove("active");
//     }
//   });
// };

const callbackOnShow = (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.add("active");
  });
};

const callbackOnHide = (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.remove("active");
  });
};

const isVisibleObserver = new IntersectionObserver(callbackOnShow, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

const isHiddenObserver = new IntersectionObserver(callbackOnHide, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

// let target = document.querySelector('#listItem');
// observer.observe(target);

images.forEach((element) => {
  isVisibleObserver.observe(element);
  isHiddenObserver.observe(element);
});
