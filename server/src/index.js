const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('./environment')
const axios = require('axios')

app.get('/v1/weather', (req, res) => {
  if (!req.query.city) {
    return res.status(422).send('City name is required.')
  }
  const { city } = req.query
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`
    )
    .then(weatherRes => {
      return res.status(200).send(weatherRes.data)
    })
    .catch(error => {
      console.error(error.response)
      res
        .status((error.response && error.response.status) || 500)
        .send((error.response && error.response.data) || 'Server Error')
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
