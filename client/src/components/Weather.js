import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import Search from './Seach'
import Snackbars from './UI/SnackBar'

export default function Weather() {
  const [city, setCity] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    if (city) {
      axios
        .get(`/v1/weather?city=${city}`)
        .then(res => console.log(res))
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

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setErrorMsg(null)
  }
  return (
    <>
      {errorMsg && (
        <Snackbars
          severity='error'
          message={errorMsg}
          open={Boolean(errorMsg)}
          handleClose={handleCloseSnackBar}
        />
      )}
      <Search handleSubmit={handleSubmit} errorMsg={errorMsg} />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </>
  )
}
