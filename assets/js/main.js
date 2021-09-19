var cityName = document.querySelector('#inputValue');
var search = document.querySelector('#search');
var name = document.querySelector('#cityName');
var temperature = document.querySelector('#temperature');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var uvIndex = document.querySelector('#uvIndex');


search.addEventListener('click', function() {
 // format the api url
 var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=bd16c590f9c0534397d2b37e472d5d56";


 // make request to URL
 fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windSpeed = data['wind']['speed'];

        cityName.innerHTML = nameValue;
        
    })
    .then(data => console.log(data))

// alert user if the city is not found
    .catch(err => alert("Could not identify city name"))
});
   



// "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=bd16c590f9c0534397d2b37e472d5d56"