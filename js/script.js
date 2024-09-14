const searchCity = document.getElementById('searchCity')
const buttonSearch = document.getElementById('buttonSearch')
const temperature = document.getElementById('temperature')


buttonSearch.addEventListener('click',displayWeather)

fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=Caruaru`)
.then((res) => res.json())
.then((data) => {
    let temp = data.current.temp_c
    temperature.innerHTML = `${temp.toLocaleString('pt-br')}°`
})

async function updateWeather(cityName) { 
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=2f8b9850c91c4231ab8231351241209&q=${cityName}`)
    const data = await res.json()

    return data
}

async function displayWeather() {
    let cityName = searchCity.value

    const data = await updateWeather(cityName)

    let temp = data.current.temp_c
    temperature.innerHTML = `${temp.toLocaleString('pt-br')}°`
}






