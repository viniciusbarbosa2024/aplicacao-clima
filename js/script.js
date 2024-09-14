const searchCityHTML = document.getElementById('searchCity')
const buttonSearch = document.getElementById('buttonSearch')
const divTemperature = document.getElementById('temperature')
const divCityName = document.getElementById('cityName')
const regionNameHTML = document.getElementById('regionName')


buttonSearch.addEventListener('click',displayWeather)

fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=Caruaru`)
.then((res) => res.json())
.then((data) => {
    let temp = data.current.temp_c
    divTemperature.innerHTML = `${temp.toLocaleString('pt-br')}°`
})

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

    let cityName = data.location.name
    divCityName.innerHTML = cityName

    let regionName = data.location.region
    regionNameHTML.innerHTML = regionName

    console.log(data)


}






