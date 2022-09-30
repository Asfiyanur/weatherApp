const form = document.querySelector(".top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section ul.cities");

localStorage.setItem(
  "tokenKEY",
  "C1ZYgfcMAb+dmIZOlfiU9p+RwnMqDHPrOXOZW4choVbGG88NckpqdAn8vVPW2BUN"
);
// localStorage.setItem(
//   "tokenKEYEncrypted",
//   EncryptStringAES("572b492afc3865f13b927ef035e82171")
// );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  const tokenKEY = DecryptStringAES(localStorage.getItem("tokenKEY"));
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKEY}&units=${units}&lang=${lang}`;

  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  const { main, sys, weather, name } = response;

  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

  const createdli = document.createElement("li");
  createdli.classList.add("city");

  createdli.innerHTML = `
<h2 class="city-name" data-name="${name}, ${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
<figure>
    <img class="city-icon" src="${iconUrl}">
    <figcaption>${weather[0].description}</figcaption>
</figure>

`;

  list.prepend(createdli);
  form.reset();
};
