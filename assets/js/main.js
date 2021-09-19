var cityName = document.querySelector('#inputValue');
var search = document.querySelector('#search');

// query selectors for report
var namename = document.querySelector('#cityName');
var weatherIcon = document.querySelector('#weather-icon');
var temperature = document.querySelector('#temperature');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');

var weatherData = document.querySelector('.weatherData');

// query selectors for forecast

//day one query selectors
var dateOne = document.getElementById('dateOne');
var tempOne = document.getElementById('dayOneTemp');
var windOne = document.getElementById('dayOneWind');
var humidityOne = document.getElementById('dayOneHumidity');
// day two query selectors
var dateTwo = document.getElementById('dateTwo');
var tempTwo = document.getElementById('dayTwoTemp');
var windTwo = document.getElementById('dayTwoWind');
var humidityTwo = document.getElementById('dayTwoHumidity');
// day three query selectors
var dateThree = document.getElementById('dateThree');
var tempThree = document.getElementById('dayThreeTemp');
var windThree = document.getElementById('dayThreeWind');
var humidityThree = document.getElementById('dayThreeHumidity');
// day four query selectors
var dateFour = document.getElementById('dateFour');
var tempFour = document.getElementById('dayFourTemp');
var windFour = document.getElementById('dayFourWind');
var humidityFour = document.getElementById('dayFourHumidity');
// day five query selectors
var dateFive = document.getElementById('dateFive');
var tempFive = document.getElementById('dayFiveTemp');
var windFive = document.getElementById('dayFiveWind');
var humidityFive = document.getElementById('dayFiveHumidity');


// Api request for forecast
var weatherForecast = function() {
    // api key for forecast
    var forecastKey = ("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&units=imperial&appid=bd16c590f9c0534397d2b37e472d5d56")
    fetch(forecastKey)
        // Make request
        .then(response => response.json())
      
        // parsing out data to individual parameters
        .then(data => {
            // day one parameters
            var dayOneDate = "  " + data['list'][2]['dt_text'];
            var dayOneTemp = "  " + data['list'][2]['main']['temp']+"°F";
            var dayOneWind = "  " + data['list'][2]['wind']['speed'] +"mph";
            var dayOneHumidity = "  " + data['list'][2]['main']['humidity'] +"%";
            // day two parameters
            var dayTwoDate = "  " + data['list'][10]['dt_text'];
            var dayTwoTemp = "  " + data['list'][10]['main']['temp']+"°F";
            var dayTwoWind = "  " + data['list'][10]['wind']['speed'] +"mph";
            var dayTwoHumidity = "  " + data['list'][10]['main']['humidity'] +"%";
            // day three parameters
            var dayThreeDate = "  " + data['list'][18]['dt_text'];
            var dayThreeTemp = "  " + data['list'][18]['main']['temp']+"°F";
            var dayThreeWind = "  " + data['list'][18]['wind']['speed'] +"mph";
            var dayThreeHumidity = "  " + data['list'][18]['main']['humidity'] +"%";
            // day four parameters
            var dayFourDate = "  " + data['list'][26]['dt_text'];
            var dayFourTemp = "  " + data['list'][26]['main']['temp']+"°F";
            var dayFourWind = "  " + data['list'][26]['wind']['speed'] +"mph";
            var dayFourHumidity = "  " + data['list'][26]['main']['humidity'] +"%";
            // day five parameters
            var dayFiveDate = "  " + data['list'][34]['dt_text'];
            var dayFiveTemp = "  " + data['list'][34]['main']['temp']+"°F";
            var dayFiveWind = "  " + data['list'][34]['wind']['speed'] +"mph";
            var dayFiveHumidity = "  " + data['list'][34]['main']['humidity'] +"%";


            // assigning data elements to HTML elements

            // day one display
            dateOne.innerHTML = dayOneDate;
            tempOne.innerHTML += dayOneTemp;
            windOne.innerHTML += dayOneWind;
            humidityOne.innerHTML += dayOneHumidity;
            // day two display
            dateTwo.innerHTML = dayTwoDate;
            tempTwo.innerHTML += dayTwoTemp;
            windTwo.innerHTML += dayTwoWind;
            humidityTwo.innerHTML += dayTwoHumidity;
            // day three display
            dateThree.innerHTML = dayThreeDate;
            tempThree.innerHTML += dayThreeTemp;
            windThree.innerHTML += dayThreeWind;
            humidityThree.innerHTML += dayThreeHumidity;
            // day four display
            dateFour.innerHTML = dayFourDate;
            tempFour.innerHTML += dayFourTemp;
            windFour.innerHTML += dayFourWind;
            humidityFour.innerHTML += dayFourHumidity;
            // day five display
            dateFive.innerHTML = dayFiveDate;
            tempFive.innerHTML += dayFiveTemp;
            windFive.innerHTML += dayFiveWind;
            humidityFive.innerHTML += dayFiveHumidity;
        })
        
    };




    // Api request for weather report and forecast
search.addEventListener('click', function() {
   
    // format the api request for report
 var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=bd16c590f9c0534397d2b37e472d5d56";


 // make api request for report
 fetch(apiUrl)
   
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        // Parse out and name data for each desired feature
        var nameValue = "  " + data['name'];
        // ATTEMPT AT CREATING THE ICON
        // var weatherIconURL = "http://openweathermap.org/img/wn/"+ data['weather']['icon'].value + ".png";
        // let addWeatherIcon = document.createElement('img');
        // addWeatherIcon.src = weatherIconURL;
        var tempVal = "  " + data['main']['temp'] +"°F";
        var windSpeed = "  " + data['wind']['speed'] +"mph";
        var humidityVal = "  " + data['main']['humidity'] +"%";
        
   
        // display data in respective divs
        namename.innerHTML += nameValue;
        // weatherIcon.appendChild(addWeatherIcon);
        temperature.innerHTML += tempVal;
        wind.innerHTML += windSpeed;
        humidity.innerHTML += humidityVal;
    })
    
    

// alert user if the city is not found
    .catch(err => alert("Could not identify city name"))



//  api request for forecast
weatherForecast();

});
   



