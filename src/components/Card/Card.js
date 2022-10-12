import React, { useEffect, useState } from 'react'
import './Card.css'
import { CloudSun, CloudLightning, Sun, Snowflake, Lightning,CloudRain ,CloudFog, CloudMoon,Cloud,Moon,Wind,ThermometerCold,ThermometerHot,ThermometerSimple } from "phosphor-react";
import '../RenderIcon/RenderIcon'

// creating card component
export default function Card() {
  // setting states
  const [weatherData, setWeatherData] = useState(null)
  const [weatherLoaded, setWeatherLoaded] = useState(false)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const absoluteZero = 273.15;


  useEffect(()=>{
    // Getting location of the user
    navigator.geolocation.getCurrentPosition(function(position) {
      // setting latitude and longitude
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
       });
  
    // Fetching weather data
   const getWeather = async()=>{
      const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${+lat}&lon=${+lon}&appid=2fbfbc253342eb2b91b2823c547a3b12`)
      const data =  await res.json();
      setWeatherData(data);
      setWeatherLoaded(true);
    }

    // If latitude and longitude is set, then get weather data    
    if(lat && lon){
      getWeather();
      console.log(weatherData)
    }



  },[lat,lon])

      // If weather data are fetched, then get the correct icon
    const RenderIcon = (props)=>{
      if(props.weatherData === 'Clouds'){
        return <Cloud/>
      }
      if(props.weatherData === "Clear"){
        return <Sun/>
      }
      if(props.weatherData === "Snow"){
        return <Snowflake/>
      }
    }


  // getting todays date
  const today = () =>{
    const date = new Date;
    return date.getDay();
  }

  // Converting number into actual day
  let weekDay;

  switch(today()){
    case 0:
      weekDay = "Sunday";
      break;
    case 1:
      weekDay = 'Monday';
      break;
    case 2:
      weekDay = "Tuesday";
      break;
    case 3:
      weekDay = 'Wednesday';
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = 'Friday';
      break;
    case 6:
      weekDay = "Saturday";
      break;
  }


  

  return (
    <>
    {/* if weather loaded render jsx */}
    { weatherLoaded ?
    <div className='card'>
      <div className="card__top">
        <div className='card__top-day'>{weekDay}</div>
        <div className='card__top-city'>{weatherData.name}</div>
        <RenderIcon weatherData={weatherData.weather[0].main}/>
        {/* <div className="card__top-weather">{weatherData.weather[0].main}</div> */}
        <div className='card__top-temp'>
          <ThermometerSimple size={24}/>
          <div className='card__top-temp-deg'>{Math.round(weatherData.main.temp-absoluteZero)}°C</div>
        </div>
        <div className='card__top-degrees'>
          <div className='degrees__max'><span>Max </span>{Math.round(weatherData.main.temp_max-absoluteZero)}°C</div>
          <div className='degrees__min'><span>Min </span>{Math.round(weatherData.main.temp_min-absoluteZero)}°C</div>
        </div>
      </div>

      <div className="card__border"></div>

      <div className="card__mid"></div>
      <div className="card__bottom"></div>
      
    </div>
    : <p>DATA LOADING</p>
}
</>
  )


}
