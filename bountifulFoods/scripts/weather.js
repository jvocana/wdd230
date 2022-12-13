    
// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');



let weatherContainer = document.querySelector('#conditions');
// displays weather results to homepage widget
function weather (data) {
  let card = 
  `
  <div class="grid">
    <h3>Current Weather</h3>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" id="weather-icon">
    <p><span id="temperature">${Math.round(data.current.temp_f)}</span>F</p>
    <p id="description">${data.current.condition.text}</p>
    <p>Humidity: <span id="humidity">${data.current.humidity}</span></p>
  </div>
  `

  weatherContainer.innerHTML = card;
    

    
};

let forecastContainer = document.querySelector('#forecast');




// three day forecast
function forecast (data) {

  
  data.forecast.forecastday.forEach(function (item) {
    
    

    let card = 
    `
    <div class="grid">
    
      <p>${item.date}</p>
      <img src="${item.day.condition.icon}" alt="${item.day.condition.text}">                    
      <p><span>${item.day.avgtemp_f}</span>F</p>
    
    <div>
      <p>High: <span>${item.day.maxtemp_f}</span></p>
      <p>Low: <span>${item.day.mintemp_f}</span></p>
    </div>
    </div>
    `;
    forecastContainer.innerHTML += card;
    
  });
  

};

const requestUrl = 'https://api.weatherapi.com/v1/forecast.json?key=4ea0bfec2b04485b98a10002221112&q=Carlsbad&days=3&aqi=no&alerts=no';



async function fetchWeather() {
    try {
      const response = await fetch(requestUrl);
      if (response.ok) {
        data = await response.json();
        console.log(data); // this is for testing the call
        weather(data);
        forecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


  
  fetchWeather();