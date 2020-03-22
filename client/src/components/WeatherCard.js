import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { degToCompass } from '../util'

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    width: 400,
    marginTop: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function WeatherCard(props) {
  const { weather } = props
  console.log(weather)
  const { wind } = weather
  const currentWeather = weather.weather[0]
  const { temp, humidity } = weather.main
  const windDirection = degToCompass(wind.deg)
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display='flex' flexDirection='row' alignItems='center' p={1} m={1}>
          <Box p={1}>
            <Typography variant='h5' component='h2'>
              {weather.name}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {currentWeather.main}
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant='body2' color='textSecondary'>
              {windDirection} {wind.speed} m/s <br />
              Humidity {humidity}%
            </Typography>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' p={1} m={1}>
          <Box p={1}>
            <div id='icon'>
              <img
                id='wicon'
                src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
                alt='Weather icon'
              ></img>
            </div>
          </Box>
          <Box p={1}>
            <Typography variant='h2' component='h2'>
              {parseInt(temp)}
              <span>&#xb0;</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired
}
