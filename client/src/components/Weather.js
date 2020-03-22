import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import Search from './Seach'

export default function Weather() {
  const [city, setCity] = useState(null)
  useEffect(() => {
    if (city) {
      axios
        .get(`/v1/weather?city=${city}`)
        .then(res => console.log(res))
        .catch(error => console.error(error))
    }
  }, [city])

  const handleSubmit = city => {
    setCity(city)
  }
  return (
    <>
      <Search handleSubmit={handleSubmit} />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </>
  )
}
