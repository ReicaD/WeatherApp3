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
   const search = async (city)=>{
     try {
       const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${import.meta.env.VITE_APP_ID}`;

       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
     } catch (error) {
       
     }
   }
  return (
    <div className="weather">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="Search Icon" />
      </div>

      {/* Weather Icon */}
      <img src={clear_icon} alt="Weather Icon" className="weather-icon" />

      {/* Temperature & Location */}
      <p className="temperature">20°c</p>
      <p className="location">Kawempe</p>

      {/* Weather Data - Now Wrapping .col */}
      <div className="weather-data">
        <div className="col">
          <img src={cloudy_icon} alt="Cloudy Icon" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="Wind Icon" />
          <div>
            <p>3.6 km</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
