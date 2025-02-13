import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloudy_icon from "../assets/cloudy.png";
import wind_icon from "../assets/wind.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import weathernews_icon from "../assets/weathernews.png";
import sun_icon from "../assets/sun.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  // Define error state here
  const [error, setError] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "04d": drizzle_icon,
    "10n": rain_icon,
    "13n": snow_icon,
    "02d": cloudy_icon,
    "01d": sun_icon,
    "13d": weathernews_icon,
  };

  const search = async (city) => {
    if (city.trim() === "") {
      setError("⚠️ Enter City Name");
      setTimeout(() => setError(""), 3000);
      return;
    }
    // Clear error if input is valid
    setError("");

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setError("⚠️ Failed to fetch data, try again!");
      setTimeout(() => setError(""), 3000);
    }
  };

  useEffect(() => {
    search("ottawa");
  }, []);

  return (
    <div className="weather">
      <h1 className="weather-title">Weather App</h1>
      {/* Search Bar */}
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Weather Icon */}
          {weatherData.icon && (
            <img src={weatherData.icon} alt="" className="weather-icon" />
          )}

          {/* Temperature & Location */}
          <p className="temperature">{weatherData.temperature}°c</p>
          <p className="location">{weatherData.location}</p>

          {/* Weather Data - Now Wrapping .col */}
          <div className="weather-data">
            <div className="col">
              <img src={cloudy_icon} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed}km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
