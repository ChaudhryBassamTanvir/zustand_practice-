'use client'

import { useState } from 'react'
import { useWeatherStore } from './store/weather.store'

export default function Home() {
  const [city, setCity] = useState('')

  const { weather, loading, error, fetchWeather } = useWeatherStore()

  console.log('API KEY:', process.env.NEXT_PUBLIC_WEATHER_API_KEY)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-5xl font-bold text-blue-800 mb-6">Weather App 🌦️</h1>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          className="px-4 py-2 rounded-lg shadow-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-64"
          placeholder="Enter city"
          value={city}
          onChange={(e:any) => setCity(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={() => fetchWeather(city)}
        >
          Get Weather
        </button>
      </div>

      {loading && <p className="text-blue-600 text-lg animate-pulse">Loading...</p>}

      {error && <p className="text-red-500 text-lg">{error}</p>}

      {weather && (
        <div className="bg-white rounded-xl shadow-lg p-6 w-72 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">{weather.city}</h2>
          <p className="text-4xl font-bold text-blue-800 mb-2">{weather.temp} °C</p>
          <p className="text-lg text-gray-700 capitalize">{weather.description}</p>
        </div>
      )}
    </div>
  )
}
