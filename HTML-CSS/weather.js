const form = document.querySelector(".top-banner form");
const input = document.querySelector("container input");
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

const getWeatherDataFromApi = () => {};
