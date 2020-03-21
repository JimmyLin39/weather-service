import React, { useEffect } from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button'

export default function Weather() {
  useEffect(() => {
    axios
      .get('/v1/weather?city=Vancouver')
      .then(res => console.log(res))
      .catch(error => console.error(error))
  }, [])
  return (
    <Button variant='contained' color='primary'>
      Hello World
    </Button>
  )
}
