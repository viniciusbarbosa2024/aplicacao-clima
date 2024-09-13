const searchCity = document.getElementById('searchCity')
const buttonSearch = document.getElementById('buttonSearch')



buttonSearch.addEventListener('click',displayWeather)

function updateWeather(cityName) { 
    fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=${cityName}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayWeather() {
    let cityName = searchCity.value

    updateWeather(cityName)
}






