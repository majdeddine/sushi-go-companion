import React from 'react'
import PropTypes from 'prop-types'
import MDSpinner from 'react-md-spinner'
import StyledLoading from './styledLoading'

const Loading = props => {
  const { color1, color2, color3, color4, size } = props
  return (
    <StyledLoading>
      <MDSpinner color1={color1} color2={color2} color3={color3} color4={color4} size={size} />
    </StyledLoading>
  )
}

Loading.propTypes = {
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  color4: PropTypes.string,
}

Loading.defaultProps = {
  size: 45,
  color1: '#3498db',
  color2: '#e74c3c',
  color3: '#f1c40f',
  color4: '#2ecc71',
}

/*
blank
balls
bars
bubbles
cubes
cylon
spokes
spin
spinningBubbles
*/

export default Loading
