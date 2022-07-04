const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const fetchCities = async () => {
  const response = await fetch(endpoint);
  console.log(response);

  const decryption = await response.json();
  console.log(decryption);

  return decryption;
};

const findMatchingCities = (cities, text) => {
  return cities.filter(({ city, state }) => {
    const lowerCaseText = text.toLowerCase();

    return (
      city.toLowerCase().includes(lowerCaseText) ||
      state.toLowerCase().includes(lowerCaseText)
    );
  });
};

const sortCities = (cities) => {
  cities.sort(({ population: populationA }, { population: populationB }) => {
    if (parseInt(populationA) === parseInt(populationB)) {
      return 0;
    }

    return parseInt(populationA) < parseInt(populationB) ? 1 : -1;
  });
};

const textFormatter = new Intl.NumberFormat();
const ul = document.querySelector("ul.suggestions");

const renderDefaultList = () => {
  ul.innerHTML = `
    <li>Filter for a city</li>
    <li>or a state</li>
  `;
};

const main = async () => {
  const cities = await fetchCities();

  const find = (event) => {
    const text = event.target.value;
    if (text === "") {
      renderDefaultList();
      return;
    }

    ul.innerHTML = "";

    const filteredCities = findMatchingCities(cities, text);
    sortCities(filteredCities);

    filteredCities.forEach(({ city, state, population }) => {
      const li = document.createElement("li");
      const regexp = new RegExp(text, "gi");
      const replaced = `${city}, ${state}`.replaceAll(
        regexp,
        `<span class='hl'>${text}</span>`
      );
      const content = `<p>${replaced}</p> <p>${textFormatter.format(
        population
      )}</p>`;

      li.innerHTML = content;
      ul.appendChild(li);
    });
  };

  const searchInput = document.querySelector("input.search");
  searchInput.addEventListener("input", find);
};

main();
