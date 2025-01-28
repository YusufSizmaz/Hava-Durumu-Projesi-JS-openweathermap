const url =  "https://api.openweathermap.org/data/2.5/"
const key = "143c9562f948f3e52690033096f875f1"


const setQuery = (e) => {
    if(e.keyCode == "13")
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let Query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(Query)
    .then(weather => {
        return weather.json()
    })

    .then(displayResult)
    
}


const displayResult = (result) => {
    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(result.main.temp)}°C`    

    let desc = document.querySelector(".desc")
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp.min)}°C` /
    `${Math.round(result.main.temp.max)}°C`

    }

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener('keypress', setQuery);