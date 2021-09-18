var getLatLong = function () {
    // Enter city name to return latitude and longitude
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=$bd16c590f9c0534397d2b37e472d5d56");

    // Enter latitude and longitude to return weather data
};

getLatLong();


// "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=bd16c590f9c0534397d2b37e472d5d56"