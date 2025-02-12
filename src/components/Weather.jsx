 import React from 'react';
import "./Weather.css";
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png";
import cloudy_icon from "../assets/cloudy.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import weathernews_icon from "../assets/weathernews.png"
import sun_icon from "../assets/sun.png"
 
const Weather = () => {
    return (
      <div className='weather'>
         <div className="search-bar">
           <input type="text" placeholder='Search' />
           <img src={search_icon} alt=""  />
             </div> 
             <img src = {clear_icon} alt="" className = "weather-icon"/>

             <p className='temperature'>20°c</p>
             <p className='location'>Kawempe</p>
      </div>
    );
  };

  
 
 export default Weather