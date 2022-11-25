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




// windchill 
const wind = document.querySelector('#windSpeed');
const temperature = parseInt(document.querySelector('#temperature').value);
const windChill = document.querySelector('#windChill');
function windChillFactor() {
    // f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
    if ((temperature <= 50) && (wind > 3)) {
        windChill.textContent = Math.round(35.74 + (.6215 * temperature) - (35.75 * (wind ** .16)) + (.4275 * (temperature * (wind ** .16))));
    }
    else {
        windChill.textContent = 'N/A';
    };
    

};

windChillFactor();