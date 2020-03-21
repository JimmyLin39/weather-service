import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

export default function Search() {
  const classes = useStyles()
  const [input, setInput] = React.useState('')

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search City Weather'
        inputProps={{ 'aria-label': 'search city weather' }}
        onChange={e => setInput(e.target.value)}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        onClick={e => {
          e.preventDefault()
          console.log(input)
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
