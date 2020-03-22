import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Seach'
import Snackbars from './UI/SnackBar'
import WeatherCard from './WeatherCard'

export default function Weather() {
  const [city, setCity] = useState('vancouver')
  const [currentWeather, setCurrentWeather] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    if (city) {
      axios
        .get(`/v1/weather?city=${city}`)
        .then(res => setCurrentWeather(res.data))
        .catch(error => {
          console.error(error)
          if (error.response) {
            setErrorMsg(error.response.data.message)
          }
        })
    }
  }, [city])

  const handleSubmit = city => {
    setCity(city)
  }

  return (
    <>
      {errorMsg && (
        <Snackbars
          severity='error'
          message={errorMsg}
          open={Boolean(errorMsg)}
          handleClose={() => setErrorMsg(null)}
        />
      )}
      <Search handleSubmit={handleSubmit} errorMsg={errorMsg} />
      {currentWeather && <WeatherCard weather={currentWeather} />}
    </>
  )
}
