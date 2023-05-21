/* eslint-disable react/prop-types */
import React from 'react'
import getCityLocation from './getCityLocation'

export default function SearchBox({ setWeather, setName }) {
    let handleChange = (e) => {
        let name = e.target.value
        setName.current = name
    }

    let handleClick = () => {
        getCityLocation(setName.current, setWeather)
    }

  return (
    <div className="searchContainer">
        <h1 className='title'>Weather App</h1>
        <input type="text" onChange = {(e) => handleChange(e)}className="weatherInput" placeholder='Enter a city name ...'/>
        <button className="searchBtn" onClick={handleClick}>SEARCH</button>
    </div>
  )
}
