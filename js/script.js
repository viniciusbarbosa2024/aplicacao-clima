const searchCityHTML = document.getElementById('searchCity')
const buttonSearch = document.getElementById('buttonSearch')
const temperatureHTML = document.getElementById('temperature')
const cityHTML = document.getElementById('cityName')
const regionHTML = document.getElementById('regionName')
const countryHTML = document.getElementById('country')

const locationAndClimate = {
    city: '',
    region:'',
    country: '',
    temperature: ''
}

buttonSearch.addEventListener('click',displayWeather)

document.addEventListener('DOMContentLoaded',initialDisplay)

async function updateObjectLocationAndClimate(cityName) {
    const data = await updateWeather(cityName)

    locationAndClimate.city = data.location.name
    locationAndClimate.region = data.location.region
    locationAndClimate.country = data.location.country
    locationAndClimate.temperature = data.current.temp_c
}

function updateWeatherDisplay() {
    temperatureHTML.innerHTML = `${locationAndClimate.temperature.toLocaleString('pt-br')}°`
    
    cityHTML.innerHTML = locationAndClimate.city 

     
    regionHTML.innerHTML = locationAndClimate.region

    
    countryHTML.innerHTML = locationAndClimate.country
}

async function initialDisplay() {
    await updateObjectLocationAndClimate('Caruaru')
    
    updateWeatherDisplay()
}

async function updateWeather(nameOfTheCitySearched) { 
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=${nameOfTheCitySearched}`)
    const data = await res.json()

    return data
}

async function displayWeather() {
    let nameOfTheCitySearched = searchCityHTML.value

    await updateObjectLocationAndClimate(nameOfTheCitySearched)
    
    updateWeatherDisplay()
    
}






