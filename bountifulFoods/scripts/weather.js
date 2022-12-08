    
// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');


const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=d4ecc5f5851ad237ea92914d71ff33e2'

// displays weather results to homepage widget
function weather (data) {
    currentTemp.textContent = Math.round(data.main.temp);
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;

    humidity.textContent = Math.round(data.main.humidity);

    

    
};

const forecastUrl = 'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=3&appid=d4ecc5f5851ad237ea92914d71ff33e2';

// displays three day forecast
function forecast (data) {

};

async function fetchWeather() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        weather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  async function fetchForecast() {
    try {
      const response = await fetch(forecastUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        forecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  
  fetchForecast();