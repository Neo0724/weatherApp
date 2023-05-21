export default function getCityLocation(name, setWeather) {
    let API_ID = "4eb02f42a177fa78779701649274e470"
    let CITY_NAME = name
    let URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${CITY_NAME}&units=metric`

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        let NAME = data.name
        let TEMP = data.main.temp
        let WEATHER = data.weather[0].description.split(" ")
        let ICON = data.weather[0].icon
        let TEMP_MIN = data.main.temp_min
        let TEMP_MAX = data.main.temp_max
        let WORD = ""
        let TIMEZONE = data.timezone
        for (let i = 0; i < WEATHER.length; i++) {
            for (let j = 0; j < WEATHER[i].length; j++) {
                if (j === 0) {
                    WORD += WEATHER[i][j].toUpperCase()
                } else {
                    WORD += WEATHER[i][j]
                }
            }
            WORD += " "
        }
        WEATHER = WORD

        setWeather({name: NAME, temp: TEMP, weatherDes: WEATHER, icon: ICON, minTemp: TEMP_MIN, maxTemp: TEMP_MAX, timezone: TIMEZONE})
    })
    .catch(() => alert("Could not found the city! Please enter again"))
}   
