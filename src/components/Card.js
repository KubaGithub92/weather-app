import React, { useEffect, useState } from 'react'
import './Card.css'

export default function Card() {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherLoaded, setWeatherLoaded] = useState(false)
  const absoluteZero = 273.15;


  
  const loadWeather = async ()=>{
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=50.0760576&lon=14.49984&appid=2fbfbc253342eb2b91b2823c547a3b12`)
    const data = await res.json();
    setWeatherData(data);
    setWeatherLoaded(true)
  }
  console.log(weatherData)
  
  useEffect(()=>{
    loadWeather();
    
},[])

  return (
    <>
    { weatherLoaded ?
    <div className='card'>
      <div className="card__top">
        <div className='card__top-city'>Prague</div>
        <div className="card__top-weather">{weatherData.weather[0].description}</div>
        <div className='card__top-temp'>{Math.round(weatherData.main.temp-absoluteZero)}°C</div>
        <div className='card__top-degrees'>
          <div className='degrees__max'><span>Max</span>{Math.round(weatherData.main.temp_max-absoluteZero)}°C</div>
          <div className='degrees__min'><span>Min</span>{Math.round(weatherData.main.temp_min-absoluteZero)}°C</div>
        </div>
      </div>
      <div className="card__mid"></div>
      <div className="card__bottom"></div>
      
    </div>
    : <p>DATA LOADING</p>
}
</>
  )


}
