/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import getDate from './getDate'

export default function WeatherInfo({ weather }) {
  let imgURL = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
  let [countryDate, setCountryDate] = useState({})
  useEffect(() => {
    getDate(weather.timezone, setCountryDate)
  }, [weather.timezone])
  
  return (
    <div className="weatherInfoContainer">
      <div className="cityName"><span className='cityNameSpan'>{(weather.name).toUpperCase()}</span></div>
      <div className="tempAndDateContainer">
        {weather.temp ? 
        <div className="cityTemp">{Math.round(weather.temp)}&#8451;</div> 
        : null}
        {weather.weatherDes? 
        <div className="cityDayAndDate">
          <div className="countryDate">{(countryDate.day).toUpperCase()}</div>
          <div className='dateGap'></div>
          <div className="countryMonthAndDate">{countryDate.date}/{countryDate.month}</div>
        </div> 
        : null}
      </div>
      {weather.icon ? <img src = {imgURL} alt="Weather Icon" className='weatherIcon'/> : null}
      {weather.weatherDes? <div className="cityWeather">Weather: <span className='cityWeatherSpan'>{weather.weatherDes}</span></div> : null}
    </div>
  )
}
