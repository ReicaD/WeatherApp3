import React from "react";
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
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />

      <p className="temperature">20°c</p>
      <p className="location">Kawempe</p>
      <div className="weather-data"></div>
      <div className="col">
        <img src={cloudy_icon} alt="" />
        <div>
          <p>91%</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="" />
        <div>
          <p>3.6 km</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
