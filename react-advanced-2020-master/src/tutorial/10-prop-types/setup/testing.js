//rafcp shortcut to component with proptypes
import React from 'react'
import PropTypes from 'prop-types'

const testing = (props) => {
  return <div></div>
}

testing.propTypes = {
  //ptar shortcut
  name: PropTypes.array.isRequired,
}

export default testing
