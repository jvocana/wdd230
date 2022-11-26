
    
// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Yakima&units=imperial&appid=d4ecc5f5851ad237ea92914d71ff33e2'

// windchill function
function windChillFactor(data) {
    // f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
    if ((data.main.temp <= 50) && (data.wind.speed > 3)) {
        windChill.textContent = Math.round(35.74 + (.6215 * data.main.temp) - (35.75 * (data.wind.speed ** .16)) + (.4275 * (data.main.temp * (data.wind.speed ** .16))));
    }
    else {
        windChill.textContent = 'N/A';
    };
    

};

// displays weather results to homepage widget
function displayResults (data) {
    currentTemp.textContent = Math.round(data.main.temp);
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;

    humidity.textContent = Math.round(data.main.humidity);

    windSpeed.textContent = Math.round(data.wind.speed);

    windChillFactor(data);
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



