import { useState, useEffect, useRef } from 'react'
import getCityLocation from './getCityLocation'
import SearchBox from './SearchBox'
import WeatherInfo from './WeatherInfo'

function App() {
  let [weather, setWeather] = useState({name: "", temp: "", weatherDes: "", icon: "", minTemp: "", maxTemp: "", timezone: ""})
  let setName = useRef("")

  return (
    <div className="container">
      <SearchBox setWeather = {setWeather} setName = {setName}/>
      <WeatherInfo weather = {weather}/>
    </div>
  )
}

export default App
