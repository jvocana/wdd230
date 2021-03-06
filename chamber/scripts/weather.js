// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Yakima&units=imperial&appid=d4ecc5f5851ad237ea92914d71ff33e2'

function displayResults (data) {
    currentTemp.textContent = data.main.temp;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;

    humidity.textContent = data.main.humidity;

    windSpeed.textContent = data.wind.speed;
};
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();