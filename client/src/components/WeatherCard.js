import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { degToCompass } from '../util'

const useStyles = makeStyles({
  root: {
    minWidth: 275
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
  const { humidity } = weather.main
  const windDirection = degToCompass(wind.deg)
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {weather.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {windDirection} {wind.speed} m/s <br />
          Humidity {humidity}%
        </Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired
}
