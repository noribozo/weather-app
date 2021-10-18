import React, { useState } from "react";

import WeatherDetails from "./WeatherDetails";

const WeatherData = (props) => {
  /*state = {
        showWeatherDetails: false
    }*/
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  const { main, name, sys, weather } = props.weatherData;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  return (
    <div className="weather-data">
      <h3 className="city-name">
        {name}, {sys.country}
      </h3>
      <p className="weather-temperature">{main.temp}°C</p>
      <img className="weather-icon" src={weatherIcon} alt="WeatherIcon" />
      <button
        onClick={() => setShowWeatherDetails(true)}
        className="weather-details-button"
      >
        Details
      </button>
      {showWeatherDetails && <WeatherDetails main={main} />}
    </div>
  );
};

export default WeatherData;
