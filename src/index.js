import React, { useState } from "react";
import ReactDOM from "react-dom";

import Container from "./Components/Container";
import Header from "./Components/Header";
import WeatherSearch from "./Components/WeatherSearch";
import WeatherData from "./Components/WeatherData";
import ErrorMessage from "./Components/ErrorMessage";
import styles from "./styles.css";
const App = (props) => {
  /*state = {
        weather: null,
        showError: false
    }*/
  const [weather, setWeather] = useState(null);
  const [showError, setShowError] = useState(false);
  api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (location) {
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const request = await fetch(url);
      const response = await request.json();
      /*this.setState({weather: response, showError: false})*/
      setWeather(response);
      setShowError(false);
    } else {
      /*this.setState({ showError: true, weather: null }) */
      setShowError(true);
      setWeather(null);
    }
  };

  return (
    <Container>
      <Header />
      <WeatherSearch api_call={api_call} />
      {weather && <WeatherData weatherData={weather} />}
      {showError && <ErrorMessage />}
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
