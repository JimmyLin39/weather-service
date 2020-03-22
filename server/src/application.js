const express = require('express')
const app = express()
const router = require('express').Router()
const axios = require('axios')

module.exports = function application() {
  app.use('/v1', router)
  app.use(function(req, res) {
    res.status(404).send('Not Found')
  })
  router.get('/weather', (req, res) => {
    if (!req.query.city) {
      return res.status(422).send('City name is required.')
    }
    const { city } = req.query
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`
      )
      .then(weatherRes => {
        return res.status(200).json(weatherRes.data)
      })
      .catch(error => {
        console.error(error.response.data)
        res
          .status((error.response && error.response.status) || 500)
          .send((error.response && error.response.data) || 'Server Error')
      })
  })
  return app
}
