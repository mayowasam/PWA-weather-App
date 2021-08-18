import React, { useState } from 'react';
import './App.css';
import GetWeather from './components/GetWeather'

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const btn = async (e) => {
    if (e.key === 'Enter') {
      const data = await GetWeather(query)
      console.log(data)
      setWeather(data)
      setQuery('')

    }

  }

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search ....."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={btn}
      />


      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>

          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;c</sup>
          </div>


          <div className="info">
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
