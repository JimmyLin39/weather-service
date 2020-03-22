import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function Snackbars(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleClose}
    >
      <Alert onClose={props.handleClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

Snackbars.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}
