const searchCityHTML = document.getElementById('searchCity')
const buttonSearch = document.getElementById('buttonSearch')
const divTemperature = document.getElementById('temperature')
const divCityName = document.getElementById('cityName')
const regionNameHTML = document.getElementById('regionName')
const countryHTML = document.getElementById('country')

const locationAndClimate = {
    city: '',
    region:'',
    country: '',
    temperature: ''
}

buttonSearch.addEventListener('click',displayWeather)

document.addEventListener('DOMContentLoaded',callAPI)

async function callAPI() {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=Caruaru`)

    const data = await res.json()

    locationAndClimate.city = data.location.name
    locationAndClimate.region = data.location.region
    locationAndClimate.country = data.location.country
    locationAndClimate.temperature = data.current.temp_c
    

    divTemperature.innerHTML = `${locationAndClimate.temperature.toLocaleString('pt-br')}°`
    
    divCityName.innerHTML = locationAndClimate.city 

     
    regionNameHTML.innerHTML = locationAndClimate.region

    
    countryHTML.innerHTML = locationAndClimate.country
}

async function updateWeather(nameOfTheCitySearched) { 
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=${nameOfTheCitySearched}`)
    const data = await res.json()

    return data
}

async function displayWeather() {
    let nameOfTheCitySearched = searchCityHTML.value

    const data = await updateWeather(nameOfTheCitySearched)

    let temp = data.current.temp_c
    divTemperature.innerHTML = `${temp.toLocaleString('pt-br')}°`

    // const location = {
    //     city: data.location.name,
    //     region: data.location.region,
    //     country: data.location.country
    // }

    
    // divCityName.innerHTML = location.city 

     
    // regionNameHTML.innerHTML = location.region

    
    // countryHTML.innerHTML = location.country

}






