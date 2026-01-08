'use client'
import React, { useState } from 'react'
import { useWeatherStore } from '../store/weather.store'

const page = () => {
const [city, setCity]= useState()

const {weather,loading,error,fetchWeather}=useWeatherStore()

  return (
    
  )
}

export default page
