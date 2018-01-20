const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
// fetch and process the remote json file.
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
/**
 * Find cities names or states that match the given word.
 * @param  {[string]} wordToMatch word to match
 * @param  {[Array]} cities      array of cities
 * @return {[aRRAY]}             filtered array of cities
 */
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}
/**
 * Add commas to a given number.
 * @param  {[Int]} x number to convert
 * @return {[string]}   number with commas
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Display the cities/states that match the given string, formating in HTML
 * @return {[type]} html of matched cities/states
 */
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
//select the search and suggestions classes in HTML document
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// Listen for changes in the search box and update suggestions as a word is typed
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);