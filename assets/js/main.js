var cityName = document.querySelector('#inputValue');
var search = document.querySelector('#search');
var namename = document.querySelector('#cityName');
var temperature = document.querySelector('#temperature');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');

var weatherData = document.querySelector('.weatherData');



search.addEventListener('click', function() {
   
    // format the api url
 var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=bd16c590f9c0534397d2b37e472d5d56";


 // make request to URL
 fetch(apiUrl)
   
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        // Parse out and name data for each desired feature
        var nameValue = data['name'];
        var tempVal = data['main']['temp'] +"°F";
        var windSpeed = data['wind']['speed'] +"mph";
        var humidityVal = data['main']['humidity'] +"%";
        
   
        // display data in respective divs
        namename.innerHTML += nameValue;
        temperature.innerHTML += tempVal;
        wind.innerHTML += windSpeed;
        humidity.innerHTML += humidityVal;
    })
    
    

// alert user if the city is not found
    .catch(err => alert("Could not identify city name"))
});
   

