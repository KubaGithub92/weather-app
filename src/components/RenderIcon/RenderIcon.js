import React from 'react'
import { CloudSun, CloudLightning, Sun, Snowflake, Lightning,CloudRain ,CloudFog, CloudMoon,Cloud,Moon,Wind,ThermometerCold,ThermometerHot,ThermometerSimple } from "phosphor-react";

export default function RenderIcon(props) {
  
      // If weather data are fetched, then get the correct icon
      if(props.weatherData === 'Clouds'){
        return <Cloud />
      }
      if(props.weatherData === "Clear"){
        return <Sun />
      }
      if(props.weatherData === "Snow"){
        return <Snowflake />
      }
      if(props.weatherData === "Thunderstorm"){
        return <Lightning />
      }
      if(props.weatherData === "Drizzle"){
        return <CloudRain  />
      }
      if(props.weatherData === "Rain"){
        return <CloudRain />
      }
      if(props.weatherData === "Atmosphere"){
        return <CloudFog />
      }
  }
