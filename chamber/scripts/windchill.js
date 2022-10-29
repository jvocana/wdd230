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