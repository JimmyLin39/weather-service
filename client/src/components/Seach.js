import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 350
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

export default function Search(props) {
  const classes = useStyles()
  const [input, setInput] = React.useState('')

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search City Weather'
        inputProps={{ 'aria-label': 'search city weather' }}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        onClick={e => {
          e.preventDefault()
          setInput('')
          props.handleSubmit(input)
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
